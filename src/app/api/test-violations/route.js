import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Authentication required' }, { status: 401 });
        }

        const userEmail = session.user.email.toLowerCase();
        const studentId = session.user.id || userEmail;
        const userName = session.user.name || 'Student';

        const body = await request.json();
        const {
            action = 'LOG_START',
            testId,
            testAttemptId,
            violationId,
            violationType = 'TEST_WINDOW_LEFT',
            startedAt,
            returnedAt,
            durationSeconds,
            warningDurationSeconds = 30
        } = body;

        if (!testId) {
            return Response.json({ error: 'testId is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        if (action === 'LOG_START') {
            const violationDoc = {
                studentId,
                userEmail,
                userName,
                testId,
                testAttemptId: testAttemptId || `attempt_${testId}_${Date.now()}`,
                violationType,
                startedAt: new Date(startedAt || Date.now()),
                returnedAt: null,
                durationSeconds: null,
                warningDurationSeconds: Number(warningDurationSeconds) || 30,
                createdAt: new Date()
            };

            const result = await db.collection('testViolations').insertOne(violationDoc);
            return Response.json({
                success: true,
                violationId: result.insertedId.toString(),
                testAttemptId: violationDoc.testAttemptId
            });
        }

        if (action === 'LOG_RETURN') {
            const returnedDate = new Date(returnedAt || Date.now());
            const duration = typeof durationSeconds === 'number'
                ? durationSeconds
                : (startedAt ? Math.max(0, Math.round((returnedDate - new Date(startedAt)) / 1000)) : 0);

            let filter = { userEmail, testId };
            if (violationId) {
                try {
                    filter = { _id: new ObjectId(violationId), userEmail };
                } catch (e) {
                    filter = { testAttemptId, userEmail, returnedAt: null };
                }
            } else if (testAttemptId) {
                filter = { testAttemptId, userEmail, returnedAt: null };
            }

            await db.collection('testViolations').updateOne(
                filter,
                {
                    $set: {
                        returnedAt: returnedDate,
                        durationSeconds: duration,
                        updatedAt: new Date()
                    }
                }
            );

            return Response.json({ success: true, durationSeconds: duration });
        }

        return Response.json({ error: `Unknown action: ${action}` }, { status: 400 });
    } catch (error) {
        console.error('Error in test-violations API:', error);
        return Response.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Authentication required' }, { status: 401 });
        }

        const userEmail = session.user.email.toLowerCase();
        const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
        const isAdmin = session?.user?.role === 'admin' || session?.user?.isAdmin === true || adminEmails.includes(userEmail);

        const { searchParams } = new URL(request.url);
        const testAttemptId = searchParams.get('testAttemptId');
        const testId = searchParams.get('testId');
        const targetEmail = searchParams.get('userEmail');

        const client = await clientPromise;
        const db = client.db('testseries');

        const query = {};
        if (isAdmin && targetEmail) {
            query.userEmail = targetEmail.toLowerCase();
        } else if (!isAdmin) {
            query.userEmail = userEmail;
        }

        if (testAttemptId) query.testAttemptId = testAttemptId;
        if (testId) query.testId = testId;

        const violations = await db.collection('testViolations')
            .find(query)
            .sort({ startedAt: 1 })
            .toArray();

        return Response.json({
            success: true,
            totalViolations: violations.length,
            violations
        });
    } catch (error) {
        console.error('Error fetching test-violations:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
