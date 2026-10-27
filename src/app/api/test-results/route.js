import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { checkTestAccess } from '@/lib/authorization';
import { normalizeCorrectOption, formatQuestionToLegacy } from '@/lib/questionFormatter';
import { calculateTestResult } from '@/lib/scoringEngine';
import { getTestLeaderboard } from '@/lib/rankingEngine';

export async function POST(request) {
    const session = await auth();
    
    if (!session?.user?.email) {
        return Response.json({ error: 'Authentication required to save test results.' }, { status: 401 });
    }

    const userEmail = session.user.email.toLowerCase();
    const userName = session.user.name || 'Student';

    const body = await request.json();
    const {
        testId,
        testAttemptId,
        examType,
        score,
        totalMarks,
        answers,
        questions,
        timeTaken,
        subjectStats,
        timeSpent,
        isLiveAttempt,
        violationCount,
        violations
    } = body;

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
    let authoritativeQuestions = null;
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
                const qDocs = await db.collection('questionBank').find({ _id: { $in: objectIds } }).toArray();
                const qMap = new Map();
                qDocs.forEach(doc => qMap.set(doc._id.toString(), doc));
                // Maintain exact testPaper question ordering and assign 1-based question id with legacy format
                authoritativeQuestions = testPaper.questions.map((rawQId, idx) => {
                    const idStr = rawQId.toString();
                    const doc = qMap.get(idStr) || {};
                    return formatQuestionToLegacy({ ...doc, _id: idStr }, idx + 1);
                });
            }
        }
    } catch (qErr) {
        console.warn('Could not fetch DB questions for score verification:', qErr.message);
    }

    // Use DB questions if available, otherwise fall back to client-supplied snapshot (legacy)
    const evalQuestions = (authoritativeQuestions && authoritativeQuestions.length > 0)
        ? authoritativeQuestions
        : (Array.isArray(questions) ? questions : []);

    const evalResult = calculateTestResult({
        answers,
        questions: evalQuestions,
        testDefinition: { id: testId, testId, examType, totalMarks },
        timeSpent
    });

    // Fallback query to testViolations if violations array not supplied directly
    let finalViolations = Array.isArray(violations) ? violations : [];
    if (finalViolations.length === 0 && (testAttemptId || testId)) {
        try {
            const logged = await db.collection('testViolations').find({
                userEmail,
                testId,
                ...(testAttemptId ? { testAttemptId } : {})
            }).sort({ startedAt: 1 }).toArray();
            if (logged.length > 0) {
                finalViolations = logged;
            }
        } catch (e) {
            console.warn('Could not fetch testViolations fallback:', e.message);
        }
    }
    const finalViolationCount = typeof violationCount === 'number' ? violationCount : finalViolations.length;

    // Idempotency check: if this exact attempt has already been submitted and is active, return existing result
    if (testAttemptId) {
        const existingAttempt = await db.collection('testResults').findOne({
            userEmail,
            testAttemptId,
            status: { $nin: ['RESET', 'DELETED'] },
            isReset: { $ne: true },
            isDeleted: { $ne: true }
        });
        if (existingAttempt) {
            // Clean up any remaining in-progress session
            await db.collection('testSessions').deleteOne({ userEmail, testId }).catch(() => {});
            return Response.json({
                success: true,
                resultId: existingAttempt._id,
                verifiedScore: existingAttempt.score,
                alreadySubmitted: true
            });
        }
    }

    const result = {
        userEmail,
        userName,
        testId,
        testAttemptId: testAttemptId || null,
        examType,
        score: evalResult.marksObtained,
        marksObtained: evalResult.marksObtained,
        totalMarks: evalResult.maximumMarks || totalMarks,
        maximumMarks: evalResult.maximumMarks || totalMarks,
        correctAnswers: evalResult.correctAnswers,
        wrongAnswers: evalResult.wrongAnswers,
        unattemptedQuestions: evalResult.unattemptedQuestions,
        totalQuestions: evalResult.totalQuestions,
        percentage: evalResult.percentage,
        accuracy: evalResult.accuracy,
        subjectStats: evalResult.subjectWiseResults,
        subjectWiseResults: evalResult.subjectWiseResults,
        answers,
        questions: evalQuestions.length > 0 ? evalQuestions : questions,
        timeTaken,
        timeSpent,
        isLiveAttempt: isLiveAttempt || false,
        status: 'SUBMITTED',
        evaluationStatus: evalResult.evaluationStatus,
        isReset: false,
        isDeleted: false,
        attemptedAt: new Date(),
        violationCount: finalViolationCount,
        violations: finalViolations,
    };

    await db.collection('testResults').insertOne(result);

    // Clean up any in-progress session since test is now finalized
    await db.collection('testSessions').deleteOne({ userEmail, testId }).catch(() => {});

    return Response.json({
        success: true,
        resultId: result._id,
        verifiedScore: evalResult.marksObtained,
        evalResult
    });
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

    const query = {
        userEmail,
        status: { $nin: ['RESET', 'DELETED'] },
        isReset: { $ne: true },
        isDeleted: { $ne: true }
    };
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

    const activeRankFilter = {
        status: { $nin: ['RESET', 'DELETED'] },
        isReset: { $ne: true },
        isDeleted: { $ne: true }
    };

    // Use canonical ranking engine: per unique testId, compute true competition rankings
    const uniqueTestIds = [...new Set(results.map(r => r.testId).filter(Boolean))];

    const boardsMap = {};
    await Promise.all(
        uniqueTestIds.map(async (tid) => {
            const [globalBoard, liveBoard] = await Promise.all([
                getTestLeaderboard(db, tid, { liveOnly: false }),
                getTestLeaderboard(db, tid, { liveOnly: true })
            ]);
            boardsMap[tid] = { globalBoard, liveBoard };
        })
    );

    // Attach accurate ranks to every result
    const resultsWithRank = results.map((result) => {
        const tid = result.testId;
        const boards = boardsMap[tid] || {
            globalBoard: { totalStudents: 0, rankMap: new Map() },
            liveBoard: { totalStudents: 0, rankMap: new Map() }
        };

        const globalEntry = boards.globalBoard.rankMap.get(userEmail);
        const liveEntry = boards.liveBoard.rankMap.get(userEmail);

        const globalRank = globalEntry?.rank ?? 'N/A';
        const liveRank = liveEntry?.rank ?? 'N/A';

        const formattedQuestions = Array.isArray(result.questions) && result.questions.length > 0
            ? result.questions.map((q, idx) => formatQuestionToLegacy(q, idx + 1))
            : result.questions;

        return {
            ...result,
            questions: formattedQuestions,
            rank: globalRank,
            totalStudents: boards.globalBoard.totalStudents,
            globalRank,
            totalGlobalStudents: boards.globalBoard.totalStudents,
            liveRank,
            totalLiveStudents: boards.liveBoard.totalStudents,
        };
    });

    return Response.json(resultsWithRank);
}
