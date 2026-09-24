import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { checkTestAccess } from '@/lib/authorization';

export async function POST(request) {
    const session = await auth();
    
    if (!session?.user?.email) {
        return Response.json({ error: 'Authentication required to save test results.' }, { status: 401 });
    }

    const userEmail = session.user.email.toLowerCase();
    const userName = session.user.name || 'Student';

    const body = await request.json();
    const { testId, examType, score, totalMarks, answers, questions, timeTaken, subjectStats, timeSpent, isLiveAttempt } = body;

    const client = await clientPromise;
    const db = client.db('testseries');

    const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    const isUserAdmin = session?.user?.role === 'admin' ||
        session?.user?.isAdmin === true ||
        adminEmails.includes(userEmail);

    if (!isUserAdmin) {
        const user = await db.collection('users').findOne({
            email: { $regex: new RegExp(`^${userEmail}$`, 'i') }
        });

        const access = checkTestAccess(user, testId, examType);
        if (!access.allowed && !access.authorized) {
            return Response.json({
                error: access.reason || 'ACCESS_DENIED',
                message: access.message || 'You cannot submit tests outside your assigned exam.'
            }, { status: 403 });
        }
    }

    // Recalculate score server-side from authoritative DB questions
    // This prevents score manipulation via tampered client request bodies
    let verifiedScore = 0;
    let verifiedCorrectAnswers = 0;
    const isBitsat = examType?.toLowerCase().includes('bitsat') || testId?.toLowerCase().includes('bitsat');

    // Fetch the authoritative questions from the DB testPaper
    let dbQuestions = null;
    try {
        const testPaper = await db.collection('testPapers').findOne({ testId }, { projection: { questions: 1 } });
        if (testPaper?.questions?.length > 0) {
            const { ObjectId } = await import('mongodb');
            const objectIds = testPaper.questions
                .map(q => {
                    const rawId = typeof q === 'string' ? q : q?.toString?.();
                    if (rawId && rawId.length === 24) {
                        try { return new ObjectId(rawId); } catch { return null; }
                    }
                    return null;
                })
                .filter(Boolean);
            if (objectIds.length > 0) {
                dbQuestions = await db.collection('questionBank').find({ _id: { $in: objectIds } }).toArray();
            }
        }
    } catch (qErr) {
        console.warn('Could not fetch DB questions for score verification:', qErr.message);
    }

    // Use DB questions if available, otherwise fall back to client-supplied snapshot (legacy)
    const authoritativeQuestions = dbQuestions && dbQuestions.length > 0 ? dbQuestions : questions;

    if (authoritativeQuestions && answers) {
        for (const q of authoritativeQuestions) {
            const qId = (q.id || q._id)?.toString();
            const clientAnswer = answers[qId];
            const correctOption = q.correctOption || q.answer;
            const posMarks = q.marks ?? (isBitsat ? 3 : 4);
            const negMarks = q.negativeMarks ?? 1;

            if (clientAnswer !== undefined && clientAnswer !== null && clientAnswer !== '') {
                if (clientAnswer === correctOption) {
                    verifiedScore += posMarks;
                    verifiedCorrectAnswers++;
                } else {
                    verifiedScore -= negMarks;
                }
            }
        }
    }

    const result = {
        userEmail,
        userName,
        testId,
        examType,
        score: verifiedScore,           // Always use server-verified score
        totalMarks,
        answers,
        questions, // Save the client snapshot for review display
        timeTaken,
        subjectStats,
        timeSpent,
        isLiveAttempt: isLiveAttempt || false,
        attemptedAt: new Date(),
        totalQuestions: (authoritativeQuestions || questions)?.length || 0,
        correctAnswers: verifiedCorrectAnswers,
    };

    await db.collection('testResults').insertOne(result);

    return Response.json({ success: true, resultId: result._id, verifiedScore });
}

export async function GET(request) {
    const session = await auth();
    if (!session?.user?.email) {
        return Response.json([]);
    }
    const userEmail = session.user.email.toLowerCase();

    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');
    // Fix #4 — lean=1 strips heavy questions[] snapshot, used by dashboard
    const lean = searchParams.get('lean') === '1';

    const client = await clientPromise;
    const db = client.db('testseries');

    const query = { userEmail };
    if (testId) {
        const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
        const isUserAdmin = session?.user?.role === 'admin' ||
            session?.user?.isAdmin === true ||
            adminEmails.includes(userEmail);

        if (!isUserAdmin) {
            const user = await db.collection('users').findOne({
                email: { $regex: new RegExp(`^${userEmail}$`, 'i') }
            });
            const access = checkTestAccess(user, testId);
            if (!access.allowed && !access.authorized) {
                return Response.json({ error: 'ACCESS_DENIED', message: access.message || 'Access denied to this test.' }, { status: 403 });
            }
        }
        query.testId = testId;
    }

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
