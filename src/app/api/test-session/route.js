import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

/**
 * Test Session API — Handles continuous autosave and server-side state recovery
 * for in-progress tests.
 */
export async function GET(request) {
    const session = await auth();
    if (!session?.user?.email) {
        return Response.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userEmail = session.user.email.toLowerCase();
    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');
    const testAttemptId = searchParams.get('testAttemptId');

    if (!testId) {
        return Response.json({ error: 'testId is required' }, { status: 400 });
    }

    try {
        const client = await clientPromise;
        const db = client.db('testseries');

        const query = { userEmail, testId, status: 'IN_PROGRESS' };
        if (testAttemptId) {
            query.testAttemptId = testAttemptId;
        }

        const activeSession = await db.collection('testSessions')
            .find(query)
            .sort({ updatedAt: -1 })
            .limit(1)
            .next();

        if (!activeSession) {
            return Response.json({ session: null });
        }

        return Response.json({ session: activeSession });
    } catch (error) {
        console.error('Error fetching test session:', error);
        return Response.json({ error: 'Failed to fetch test session' }, { status: 500 });
    }
}

export async function POST(request) {
    const session = await auth();
    if (!session?.user?.email) {
        return Response.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userEmail = session.user.email.toLowerCase();
    const userName = session.user.name || 'Student';

    try {
        const body = await request.json();
        const {
            testId,
            testAttemptId,
            answers,
            markedForReview,
            currentQuestionIndex,
            timeLeft,
            timeSpent,
            status = 'IN_PROGRESS'
        } = body;

        if (!testId) {
            return Response.json({ error: 'testId is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Check if this attempt was already submitted in testResults
        if (testAttemptId) {
            const alreadySubmitted = await db.collection('testResults').findOne({
                userEmail,
                testAttemptId,
                status: { $nin: ['RESET', 'DELETED'] },
                isReset: { $ne: true },
                isDeleted: { $ne: true }
            });
            if (alreadySubmitted) {
                return Response.json({
                    success: false,
                    alreadySubmitted: true,
                    message: 'Test has already been submitted.'
                }, { status: 409 });
            }
        }

        const updateDoc = {
            userEmail,
            userName,
            testId,
            testAttemptId: testAttemptId || null,
            answers: answers || {},
            markedForReview: markedForReview || {},
            currentQuestionIndex: typeof currentQuestionIndex === 'number' ? currentQuestionIndex : 0,
            timeLeft: typeof timeLeft === 'number' ? timeLeft : 0,
            timeSpent: timeSpent || {},
            status: status === 'SUBMITTED' ? 'SUBMITTED' : 'IN_PROGRESS',
            updatedAt: new Date()
        };

        await db.collection('testSessions').updateOne(
            { userEmail, testId },
            {
                $set: updateDoc,
                $setOnInsert: { createdAt: new Date() }
            },
            { upsert: true }
        );

        return Response.json({ success: true, savedAt: updateDoc.updatedAt });
    } catch (error) {
        console.error('Error saving test session:', error);
        return Response.json({ error: 'Failed to save test session' }, { status: 500 });
    }
}

export async function DELETE(request) {
    const session = await auth();
    if (!session?.user?.email) {
        return Response.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userEmail = session.user.email.toLowerCase();
    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');

    if (!testId) {
        return Response.json({ error: 'testId is required' }, { status: 400 });
    }

    try {
        const client = await clientPromise;
        const db = client.db('testseries');

        await db.collection('testSessions').deleteOne({ userEmail, testId });
        return Response.json({ success: true });
    } catch (error) {
        console.error('Error deleting test session:', error);
        return Response.json({ error: 'Failed to delete test session' }, { status: 500 });
    }
}
