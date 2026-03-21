import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function POST(request) {
    const session = await auth();
    
    // Use logged-in user or fallback to guest for backwards compatibility
    const userEmail = session?.user?.email || 'guest@test.local';
    const userName = session?.user?.name || 'Guest User';

    const body = await request.json();
    const { testId, examType, score, totalMarks, answers, questions, timeTaken, subjectStats, timeSpent, isLiveAttempt } = body;

    const client = await clientPromise;
    const db = client.db('testseries');

    const result = {
        userEmail,
        userName,
        testId,
        examType,
        score,
        totalMarks,
        answers,
        questions, // Save the questions snapshot
        timeTaken,
        subjectStats,
        timeSpent,
        isLiveAttempt: isLiveAttempt || false,
        attemptedAt: new Date(),
        totalQuestions: questions?.length || 0,
        correctAnswers: Object.keys(answers).filter(qId => {
            const question = questions?.find(q => q.id.toString() === qId);
            return question && answers[qId] === question.correctOption;
        }).length,
    };

    await db.collection('testResults').insertOne(result);

    return Response.json({ success: true, resultId: result._id });
}

export async function GET(request) {
    const session = await auth();

    // Use logged-in user or fallback to guest
    const userEmail = session?.user?.email || 'guest@test.local';

    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');

    const client = await clientPromise;
    const db = client.db('testseries');

    const query = { userEmail };
    if (testId) {
        query.testId = testId;
    }

    const results = await db.collection('testResults')
        .find(query)
        .sort({ attemptedAt: -1 })
        .toArray();

    // Calculate rank for each result
    const resultsWithRank = await Promise.all(results.map(async (result) => {
        // Global metrics
        const betterGlobalCount = await db.collection('testResults').countDocuments({
            testId: result.testId,
            score: { $gt: result.score }
        });
        const totalGlobalStudents = await db.collection('testResults').countDocuments({
            testId: result.testId
        });

        // Live metrics
        const betterLiveCount = await db.collection('testResults').countDocuments({
            testId: result.testId,
            isLiveAttempt: true,
            score: { $gt: result.score }
        });
        const totalLiveStudents = await db.collection('testResults').countDocuments({
            testId: result.testId,
            isLiveAttempt: true
        });

        return {
            ...result,
            rank: betterGlobalCount + 1, // Legacy
            totalStudents: totalGlobalStudents,
            globalRank: betterGlobalCount + 1,
            totalGlobalStudents,
            liveRank: betterLiveCount + 1,
            totalLiveStudents
        };
    }));

    return Response.json(resultsWithRank);
}
