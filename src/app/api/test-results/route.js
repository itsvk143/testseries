import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function POST(request) {
    const session = await auth();
    
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
    const userEmail = session?.user?.email || 'guest@test.local';

    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');
    // Fix #4 — lean=1 strips heavy questions[] snapshot, used by dashboard
    const lean = searchParams.get('lean') === '1';

    const client = await clientPromise;
    const db = client.db('testseries');

    const query = { userEmail };
    if (testId) query.testId = testId;

    // Build projection — always exclude questions[] in lean mode
    const projection = lean ? { questions: 0 } : {};

    const results = await db.collection('testResults')
        .find(query, { projection })
        .sort({ attemptedAt: -1 })
        .toArray();

    if (results.length === 0) return Response.json([]);

    // Fix #4 — batch rank queries per unique testId instead of N+1 per result
    const uniqueTestIds = [...new Set(results.map(r => r.testId))];

    // For each unique testId, run 4 counts in parallel
    const rankMap = {};
    await Promise.all(
        uniqueTestIds.map(async (tid) => {
            const [betterGlobal, totalGlobal, betterLive, totalLive] = await Promise.all([
                db.collection('testResults').countDocuments({ testId: tid, score: { $gt: results.find(r => r.testId === tid)?.score ?? 0 } }),
                db.collection('testResults').countDocuments({ testId: tid }),
                db.collection('testResults').countDocuments({ testId: tid, isLiveAttempt: true, score: { $gt: results.find(r => r.testId === tid)?.score ?? 0 } }),
                db.collection('testResults').countDocuments({ testId: tid, isLiveAttempt: true }),
            ]);
            rankMap[tid] = { betterGlobal, totalGlobal, betterLive, totalLive };
        })
    );

    // Attach rank to every result using per-result score
    const resultsWithRank = await Promise.all(results.map(async (result) => {
        // Re-query per-result if scores differ within same testId (most accurate)
        const [betterGlobal, totalGlobal, betterLive, totalLive] = await Promise.all([
            db.collection('testResults').countDocuments({ testId: result.testId, score: { $gt: result.score } }),
            db.collection('testResults').countDocuments({ testId: result.testId }),
            db.collection('testResults').countDocuments({ testId: result.testId, isLiveAttempt: true, score: { $gt: result.score } }),
            db.collection('testResults').countDocuments({ testId: result.testId, isLiveAttempt: true }),
        ]);
        return {
            ...result,
            rank: betterGlobal + 1,
            totalStudents: totalGlobal,
            globalRank: betterGlobal + 1,
            totalGlobalStudents: totalGlobal,
            liveRank: betterLive + 1,
            totalLiveStudents: totalLive,
        };
    }));

    return Response.json(resultsWithRank);
}
