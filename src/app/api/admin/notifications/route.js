import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import {
    checkFreeQuota,
    createNotificationEvent,
    processEmailQueue,
    retryAllFailedNotifications
} from '@/lib/email/queue';
import { getEmailConfig, isResendConfigured } from '@/lib/email/resend';
import { ObjectId } from 'mongodb';

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const studentId = searchParams.get('studentId');
        const studentEmail = searchParams.get('studentEmail');
        const status = searchParams.get('status');
        const limit = parseInt(searchParams.get('limit') || '50', 10);

        const client = await clientPromise;
        const db = client.db('testseries');

        const query = {};
        if (studentId) {
            try {
                query.studentId = new ObjectId(studentId);
            } catch {
                query.studentId = studentId;
            }
        }
        if (studentEmail) {
            // Allow partial search from modal email filter safely
            const escaped = studentEmail.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            query.studentEmail = { $regex: new RegExp(escaped, 'i') };
        }
        if (status && status !== 'ALL') {
            query.status = status;
        }

        const [notifications, quota, pendingCount, failedCount, sentCount, quotaExceededCount] = await Promise.all([
            db.collection('emailNotifications')
                .find(query)
                .sort({ createdAt: -1 })
                .limit(limit)
                .toArray(),
            checkFreeQuota(db),
            db.collection('emailNotifications').countDocuments({ status: 'PENDING' }),
            db.collection('emailNotifications').countDocuments({ status: 'FAILED' }),
            db.collection('emailNotifications').countDocuments({ status: 'SENT' }),
            db.collection('emailNotifications').countDocuments({ status: 'QUOTA_EXCEEDED' })
        ]);

        const { emailFrom } = getEmailConfig();

        return Response.json({
            notifications,
            stats: {
                todaySent: quota.todayCount,
                dailyLimit: quota.dailyLimit,
                monthSent: quota.monthCount,
                monthlyLimit: quota.monthlyLimit,
                pendingCount,
                failedCount,
                sentCount,
                quotaExceededCount,
                resendConfigured: isResendConfigured(),
                emailFrom
            }
        });
    } catch (error) {
        console.error('Failed to fetch notifications:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { action, testEmail } = body;

        const client = await clientPromise;
        const db = client.db('testseries');

        if (action === 'RETRY_ALL_FAILED') {
            const result = await retryAllFailedNotifications(db, session.user.email || 'Admin');
            return Response.json({ success: true, ...result });
        }

        if (action === 'PROCESS_PENDING') {
            const result = await processEmailQueue(db, 25);
            return Response.json({ success: true, ...result });
        }

        if (action === 'SEND_TEST_EMAIL') {
            const targetEmail = (testEmail || session.user.email || '').trim().toLowerCase();
            if (!targetEmail || !targetEmail.includes('@')) {
                return Response.json({ error: 'Valid recipient email required for test.' }, { status: 400 });
            }

            const event = await createNotificationEvent(db, {
                studentId: null,
                studentName: session.user.name || 'Admin Test',
                studentEmail: targetEmail,
                activatedCategories: ['LIVE', 'MOCK', 'SUBJECT', 'CHAPTER', 'SUBTOPIC'],
                triggeredBy: session.user.email || 'Admin',
                triggerSource: 'ADMIN_TEST_EMAIL',
                idempotencyKey: `admin_test_${targetEmail}_${Date.now()}`
            });

            const processRes = await processEmailQueue(db, 1, { notificationId: event.notificationId });
            const updated = await db.collection('emailNotifications').findOne({ notificationId: event.notificationId });

            return Response.json({
                success: updated?.status === 'SENT',
                notificationId: event.notificationId,
                status: updated?.status,
                providerMessageId: updated?.providerMessageId || null,
                errorMessage: updated?.errorMessage || null,
                processRes
            });
        }

        return Response.json({ error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Failed to process notification action:', error);
        return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
