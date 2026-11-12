import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';
import { after } from 'next/server';
import { createNotificationEvent, processEmailQueue } from '@/lib/email/queue';

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { userIds, approvals, category } = body;

        if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
            return Response.json({ error: 'Invalid or empty userIds array' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Convert string IDs to ObjectIds
        const objectIds = userIds.map(id => new ObjectId(id));

        // Fetch pre-update state for all affected users to compute newly activated categories
        const existingUsers = await db.collection('users').find(
            { _id: { $in: objectIds } },
            { projection: { _id: 1, name: 1, email: 1, approvals: 1 } }
        ).toArray();

        // Prepare the update object
        let updateQuery = {};
        const allCategories = ['live', 'mock', 'subject', 'chapter', 'subtopic'];

        if (category) {
            // Granular update: only update the specific category in the approvals object
            updateQuery = { $set: { [`approvals.${category}`]: true } };
        } else if (approvals) {
            // Bulk full approval
            const isApproved = allCategories.every(k => approvals[k] === true);
            updateQuery = { $set: { approvals, isApproved } };
        } else {
            return Response.json({ error: 'Missing approvals or category' }, { status: 400 });
        }

        const result = await db.collection('users').updateMany(
            { _id: { $in: objectIds } },
            updateQuery
        );

        // Queue notification events for students whose permissions actually changed
        let notificationsQueued = 0;
        const triggerSource = category ? 'BULK_CATEGORY' : 'FULL_APPROVE';

        for (const user of existingUsers) {
            if (!user.email) continue;

            let newlyActivated = [];
            if (category) {
                const wasActive = Boolean(user.approvals && user.approvals[category]);
                if (!wasActive) {
                    newlyActivated = [category];
                }
            } else if (approvals) {
                newlyActivated = allCategories.filter(cat => {
                    const prev = Boolean(user.approvals && user.approvals[cat]);
                    const next = Boolean(approvals[cat]);
                    return !prev && next;
                });
            }

            if (newlyActivated.length > 0) {
                const windowBucket = Math.floor(Date.now() / 15000);
                const idempotencyKey = `bulk_${user._id}_${newlyActivated.sort().join('_')}_${windowBucket}`;
                await createNotificationEvent(db, {
                    studentId: user._id,
                    studentName: user.name,
                    studentEmail: user.email,
                    activatedCategories: newlyActivated,
                    triggeredBy: session.user.email || 'Admin',
                    triggerSource,
                    idempotencyKey
                }).catch(err => console.error(`[BulkApprove] Failed to queue notification for ${user.email}:`, err));
                notificationsQueued++;
            }
        }

        // Trigger asynchronous background processing via Next.js after() (Vercel waitUntil compatible)
        if (notificationsQueued > 0) {
            after(async () => {
                try {
                    for (let i = 0; i < 5; i++) {
                        const res = await processEmailQueue(db, 20);
                        if (!res.processed) break;
                    }
                } catch (err) {
                    console.error('[BulkApprove] after() email queue error:', err);
                }
            });
        }

        return Response.json({ 
            success: true, 
            matchedCount: result.matchedCount, 
            modifiedCount: result.modifiedCount,
            notificationsQueued
        });
    } catch (error) {
        console.error('Failed to bulk update user approvals:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
