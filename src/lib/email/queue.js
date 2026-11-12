import { ObjectId } from 'mongodb';
import {
    getEmailConfig,
    getResendClient,
    isResendConfigured,
    renderActivationEmailHtml,
    renderActivationEmailText,
    RESEND_DAILY_LIMIT,
    RESEND_MONTHLY_LIMIT
} from './resend.js';

let indexesInitialized = false;

/**
 * Ensures indexes exist on emailNotifications collection.
 */
export async function initEmailNotificationsIndexes(db) {
    if (indexesInitialized) return;
    try {
        const collections = await db.listCollections({ name: 'emailNotifications' }).toArray();
        if (collections.length === 0) {
            await db.createCollection('emailNotifications');
        }

        const collection = db.collection('emailNotifications');
        await Promise.all([
            collection.createIndex({ notificationId: 1 }, { unique: true, sparse: true }),
            collection.createIndex({ idempotencyKey: 1 }, { unique: true, sparse: true }),
            collection.createIndex({ studentId: 1 }),
            collection.createIndex({ studentEmail: 1 }),
            collection.createIndex({ status: 1 }),
            collection.createIndex({ createdAt: -1 }),
            collection.createIndex({ sentAt: -1 })
        ]);
        indexesInitialized = true;
    } catch (err) {
        console.warn('Warning: Could not create emailNotifications indexes:', err.message);
    }
}

/**
 * Check Resend free quota usage against daily and monthly limits.
 */
export async function checkFreeQuota(db) {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [todayCount, monthCount] = await Promise.all([
        db.collection('emailNotifications').countDocuments({
            status: 'SENT',
            sentAt: { $gte: startOfToday }
        }),
        db.collection('emailNotifications').countDocuments({
            status: 'SENT',
            sentAt: { $gte: startOfMonth }
        })
    ]);

    const dailyLimit = RESEND_DAILY_LIMIT;
    const monthlyLimit = RESEND_MONTHLY_LIMIT;

    if (todayCount >= dailyLimit) {
        return {
            allowed: false,
            reason: `Resend daily free limit reached (${todayCount}/${dailyLimit} sent today). Notification kept in queue until quota resets.`,
            todayCount,
            monthCount,
            dailyLimit,
            monthlyLimit
        };
    }

    if (monthCount >= monthlyLimit) {
        return {
            allowed: false,
            reason: `Resend monthly free limit reached (${monthCount}/${monthlyLimit} sent this month). Notification kept in queue.`,
            todayCount,
            monthCount,
            dailyLimit,
            monthlyLimit
        };
    }

    return {
        allowed: true,
        todayCount,
        monthCount,
        dailyLimit,
        monthlyLimit
    };
}

/**
 * Creates and enqueues a new notification event with idempotency protection.
 */
export async function createNotificationEvent(db, {
    studentId,
    studentName,
    studentEmail,
    activatedCategories,
    triggeredBy,
    triggerSource = 'INDIVIDUAL_TOGGLE',
    idempotencyKey = null
}) {
    if (!studentEmail || !Array.isArray(activatedCategories) || activatedCategories.length === 0) {
        return null;
    }

    await initEmailNotificationsIndexes(db);

    const now = new Date();
    const randPart = Math.random().toString(36).substring(2, 7).toUpperCase();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const notificationId = `NOTIF-${dateStr}-${randPart}`;

    // Normalize categories to upper case
    const normalizedCategories = activatedCategories.map(c => c.toUpperCase());

    const finalIdempotencyKey = idempotencyKey ||
        `notif_${studentId}_${normalizedCategories.sort().join('_')}_${Math.floor(now.getTime() / 60000)}`;

    const eventDoc = {
        notificationId,
        studentId: studentId ? new ObjectId(studentId) : null,
        studentName: studentName || 'Student',
        studentEmail: studentEmail.trim().toLowerCase(),
        notificationType: 'TEST_ACCESS_ACTIVATED',
        activatedCategories: normalizedCategories,
        triggeredBy: triggeredBy || 'Admin',
        triggerSource,
        idempotencyKey: finalIdempotencyKey,
        status: 'PENDING',
        provider: 'RESEND',
        providerMessageId: null,
        retryCount: 0,
        maxRetries: 3,
        lastAttemptAt: null,
        sentAt: null,
        errorMessage: null,
        createdAt: now,
        updatedAt: now
    };

    try {
        const result = await db.collection('emailNotifications').insertOne(eventDoc);
        return { ...eventDoc, _id: result.insertedId };
    } catch (err) {
        // E11000 duplicate key error on idempotencyKey
        if (err.code === 11000) {
            console.log(`[EmailQueue] Duplicate notification suppressed for idempotency key: ${finalIdempotencyKey}`);
            return await db.collection('emailNotifications').findOne({ idempotencyKey: finalIdempotencyKey });
        }
        console.error('[EmailQueue] Failed to enqueue email notification:', err);
        throw err;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isRetryableError(err) {
    const msg = (err?.message || '').toLowerCase();
    const statusCode = err?.statusCode || err?.status;
    return (
        statusCode === 429 ||
        (statusCode >= 500 && statusCode < 600) ||
        msg.includes('rate_limit') ||
        msg.includes('too many requests') ||
        msg.includes('timeout') ||
        msg.includes('etimedout') ||
        msg.includes('econnreset') ||
        msg.includes('fetch failed') ||
        msg.includes('429') ||
        msg.includes('500') ||
        msg.includes('502') ||
        msg.includes('503') ||
        msg.includes('504')
    );
}

/**
 * Processes pending notifications in the queue.
 */
export async function processEmailQueue(db, maxBatch = 15, options = {}) {
    await initEmailNotificationsIndexes(db);

    // Recover any stale PROCESSING events left behind by killed serverless instances (> 2 minutes old)
    const staleCutoff = new Date(Date.now() - 2 * 60 * 1000);
    await db.collection('emailNotifications').updateMany(
        { status: 'PROCESSING', lastAttemptAt: { $lt: staleCutoff } },
        {
            $set: {
                status: 'PENDING',
                updatedAt: new Date()
            }
        }
    );

    const findQuery = { status: 'PENDING' };
    if (options.notificationId) {
        findQuery.notificationId = options.notificationId;
    }

    // Atomically claim pending notifications
    const pendingDocs = await db.collection('emailNotifications')
        .find(findQuery)
        .sort({ createdAt: 1 })
        .limit(maxBatch)
        .toArray();

    if (pendingDocs.length === 0) {
        return { processed: 0, sent: 0, failed: 0 };
    }

    let sent = 0;
    let failed = 0;

    for (const doc of pendingDocs) {
        // Atomic claim
        const claimResult = await db.collection('emailNotifications').findOneAndUpdate(
            { _id: doc._id, status: 'PENDING' },
            {
                $set: {
                    status: 'PROCESSING',
                    lastAttemptAt: new Date(),
                    updatedAt: new Date()
                }
            },
            { returnDocument: 'after' }
        );

        if (!claimResult) {
            continue; // Claimed by another concurrent process
        }

        const claimed = claimResult;

        // 1. Check if Resend is configured
        if (!isResendConfigured()) {
            await db.collection('emailNotifications').updateOne(
                { _id: claimed._id },
                {
                    $set: {
                        status: 'FAILED',
                        errorMessage: 'RESEND_API_KEY environment variable is not configured or invalid. Add it in Vercel / Railway environment variables and redeploy.',
                        updatedAt: new Date()
                    }
                }
            );
            failed++;
            continue;
        }

        // 2. Check Resend Free Quota
        const quota = await checkFreeQuota(db);
        if (!quota.allowed) {
            await db.collection('emailNotifications').updateOne(
                { _id: claimed._id },
                {
                    $set: {
                        status: 'QUOTA_EXCEEDED',
                        errorMessage: quota.reason,
                        updatedAt: new Date()
                    }
                }
            );
            failed++;
            continue;
        }

        // 3. Dispatch Email through Resend with safe exponential backoff for transient errors
        const resend = getResendClient();
        const { emailFrom: fromAddress, appUrl } = getEmailConfig();

        const htmlContent = renderActivationEmailHtml({
            studentName: claimed.studentName,
            studentEmail: claimed.studentEmail,
            activatedCategories: claimed.activatedCategories,
            appUrl
        });

        const textContent = renderActivationEmailText({
            studentName: claimed.studentName,
            studentEmail: claimed.studentEmail,
            activatedCategories: claimed.activatedCategories,
            appUrl
        });

        const manualRetrySuffix = claimed.retryAudit?.length ? `_r${claimed.retryAudit.length}` : '';
        const providerIdempotencyKey = `${claimed.idempotencyKey}${manualRetrySuffix}`.slice(0, 250);

        let currentRetryCount = claimed.retryCount || 0;
        const maxRetries = claimed.maxRetries || 3;
        let dispatched = false;
        let lastErr = null;

        while (currentRetryCount <= maxRetries) {
            try {
                const response = await resend.emails.send(
                    {
                        from: fromAddress,
                        to: claimed.studentEmail,
                        subject: 'Your PollTestSeries Test Access Is Now Active!',
                        html: htmlContent,
                        text: textContent
                    },
                    {
                        idempotencyKey: providerIdempotencyKey
                    }
                );

                if (response.error) {
                    const errObj = new Error(response.error.message || JSON.stringify(response.error));
                    errObj.statusCode = response.error.statusCode;
                    throw errObj;
                }

                // Successful dispatch
                await db.collection('emailNotifications').updateOne(
                    { _id: claimed._id },
                    {
                        $set: {
                            status: 'SENT',
                            sentAt: new Date(),
                            providerMessageId: response.data?.id || null,
                            retryCount: currentRetryCount,
                            errorMessage: null,
                            updatedAt: new Date()
                        }
                    }
                );
                sent++;
                dispatched = true;
                break;
            } catch (err) {
                lastErr = err;
                console.error(`[EmailQueue] Send attempt failed for ${claimed.studentEmail} (attempt ${currentRetryCount + 1}):`, err.message);

                if (isRetryableError(err) && currentRetryCount < maxRetries) {
                    currentRetryCount++;
                    const backoffMs = Math.min(4000, 600 * Math.pow(2, currentRetryCount - 1));
                    await sleep(backoffMs);
                    continue;
                }
                break;
            }
        }

        if (!dispatched) {
            const finalErrMessage = lastErr?.message || 'Unknown sending failure';
            const finalStatus = isRetryableError(lastErr) && currentRetryCount < maxRetries ? 'PENDING' : 'FAILED';

            await db.collection('emailNotifications').updateOne(
                { _id: claimed._id },
                {
                    $set: {
                        status: finalStatus,
                        retryCount: currentRetryCount,
                        errorMessage: finalErrMessage,
                        updatedAt: new Date()
                    }
                }
            );
            failed++;
        }
    }

    return { processed: pendingDocs.length, sent, failed };
}

/**
 * Triggers queue processing in the background (fallback when outside Next.js after()).
 */
export function triggerBackgroundQueue(db) {
    setImmediate(() => {
        processEmailQueue(db).catch(err => {
            console.error('[EmailQueue] Background worker encountered an error:', err);
        });
    });
}

/**
 * Allows an authorized admin to manually retry a failed, pending, or quota-exceeded notification.
 */
export async function retryNotification(db, notificationId, adminEmail, { immediate = true } = {}) {
    const notif = await db.collection('emailNotifications').findOne({ notificationId });
    if (!notif) {
        throw new Error('Notification not found');
    }

    // Prevent concurrent duplicate retry on an actively processing item
    if (notif.status === 'PROCESSING') {
        const ageMs = Date.now() - new Date(notif.lastAttemptAt || notif.updatedAt || 0).getTime();
        if (ageMs < 60 * 1000) {
            throw new Error('Notification is currently being processed. Please wait a moment.');
        }
    }

    await db.collection('emailNotifications').updateOne(
        { notificationId },
        {
            $set: {
                status: 'PENDING',
                retryCount: 0,
                errorMessage: null,
                updatedAt: new Date()
            },
            $push: {
                retryAudit: {
                    retriedBy: adminEmail,
                    retriedAt: new Date()
                }
            }
        }
    );

    if (immediate) {
        const result = await processEmailQueue(db, 1, { notificationId });
        const updated = await db.collection('emailNotifications').findOne({ notificationId });
        return {
            success: updated?.status === 'SENT',
            notificationId,
            status: updated?.status || 'UNKNOWN',
            errorMessage: updated?.errorMessage || null,
            providerMessageId: updated?.providerMessageId || null,
            result
        };
    }

    triggerBackgroundQueue(db);
    return { success: true, notificationId, status: 'PENDING' };
}

/**
 * Re-queues and processes all FAILED or QUOTA_EXCEEDED or PENDING notifications.
 */
export async function retryAllFailedNotifications(db, adminEmail, statuses = ['FAILED', 'QUOTA_EXCEEDED']) {
    const now = new Date();
    const targets = await db.collection('emailNotifications')
        .find({ status: { $in: statuses } })
        .sort({ createdAt: 1 })
        .limit(25)
        .toArray();

    if (targets.length > 0) {
        const ids = targets.map(t => t._id);
        await db.collection('emailNotifications').updateMany(
            { _id: { $in: ids } },
            {
                $set: {
                    status: 'PENDING',
                    retryCount: 0,
                    errorMessage: null,
                    updatedAt: now
                },
                $push: {
                    retryAudit: {
                        retriedBy: adminEmail,
                        retriedAt: now,
                        bulkRetry: true
                    }
                }
            }
        );
    }

    const result = await processEmailQueue(db, 25);
    return {
        queuedForRetry: targets.length,
        ...result
    };
}
