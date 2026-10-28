import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { auth } from '@/lib/auth';
import { computeAnalytics } from '@/lib/analyticsEngine';
import { formatQuestionToLegacy } from '@/lib/questionFormatter';
import { getTestLeaderboard } from '@/lib/rankingEngine';
import { normalizeToCanonicalExam, canonicalToExamSlug } from '@/lib/authorization';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized. Authentication required.' }, { status: 401 });
        }

        const sessionEmail = session.user.email.toLowerCase().trim();
        const adminEmails = (process.env.ADMIN_EMAILS || '')
            .split(',')
            .map(e => e.trim().toLowerCase())
            .filter(Boolean);

        const isAdmin = session?.user?.role === 'admin' ||
            session?.user?.isAdmin === true ||
            adminEmails.includes(sessionEmail);

        const { searchParams } = new URL(request.url);
        const queryUserEmail = searchParams.get('userEmail');
        const queryUserId = searchParams.get('userId');
        const exam = searchParams.get('exam') || 'ALL';
        const category = searchParams.get('category') || 'ALL';
        const testId = searchParams.get('testId') || 'ALL';
        const subject = searchParams.get('subject') || 'ALL';
        const attemptId = searchParams.get('attemptId') || null;
        const compareAttemptId = searchParams.get('compareAttemptId') || null;

        const client = await clientPromise;
        const db = client.db('testseries');

        // Determine effective student email
        let effectiveEmail = sessionEmail;

        if (isAdmin && (queryUserId || queryUserEmail)) {
            if (queryUserId && /^[0-9a-fA-F]{24}$/.test(queryUserId)) {
                const targetUser = await db.collection('users').findOne({ _id: new ObjectId(queryUserId) });
                if (targetUser?.email) {
                    effectiveEmail = targetUser.email.toLowerCase().trim();
                }
            } else if (queryUserEmail) {
                effectiveEmail = queryUserEmail.toLowerCase().trim();
            }
        }

        // Resolve student's enrolled examination from profile if not explicitly supplied
        let effectiveExam = exam;
        if (effectiveExam === 'ALL') {
            const studentUser = await db.collection('users').findOne({
                email: { $regex: new RegExp(`^${effectiveEmail}$`, 'i') }
            });
            if (studentUser?.exam || studentUser?.examPreparingFor) {
                const canon = normalizeToCanonicalExam(studentUser.exam || studentUser.examPreparingFor);
                if (canon) {
                    effectiveExam = canonicalToExamSlug(canon);
                }
            }
        }

        // Fetch active test attempts for this student
        const rawResults = await db.collection('testResults')
            .find({
                userEmail: { $regex: new RegExp(`^${effectiveEmail}$`, 'i') },
                status: { $nin: ['RESET', 'DELETED'] },
                isReset: { $ne: true },
                isDeleted: { $ne: true }
            })
            .sort({ attemptedAt: -1 })
            .toArray();

        if (rawResults.length === 0) {
            const emptyAnalytics = computeAnalytics({
                testResults: [],
                exam: effectiveExam,
                category,
                testId,
                subject,
                attemptId,
                compareAttemptId
            });
            return Response.json({
                success: true,
                userEmail: effectiveEmail,
                analytics: emptyAnalytics
            });
        }

        // Attach competition ranking from authoritative leaderboard for unique testIds
        const uniqueTestIds = [...new Set(rawResults.map(r => r.testId).filter(Boolean))];
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

        // Normalize questions and populate ranks
        const normalizedResults = rawResults.map(r => {
            const tid = r.testId;
            const boards = boardsMap[tid] || {
                globalBoard: { totalStudents: 0, rankMap: new Map() },
                liveBoard: { totalStudents: 0, rankMap: new Map() }
            };

            const globalEntry = boards.globalBoard.rankMap.get(effectiveEmail);
            const liveEntry = boards.liveBoard.rankMap.get(effectiveEmail);

            const globalRank = globalEntry?.rank ?? 'N/A';
            const liveRank = liveEntry?.rank ?? 'N/A';

            const questions = Array.isArray(r.questions) && r.questions.length > 0
                ? r.questions.map((q, idx) => formatQuestionToLegacy(q, idx + 1))
                : (r.questions || []);

            return {
                ...r,
                _id: r._id.toString(),
                questions,
                rank: r.isLiveAttempt ? liveRank : globalRank,
                totalStudents: r.isLiveAttempt ? boards.liveBoard.totalStudents : boards.globalBoard.totalStudents,
                globalRank,
                totalGlobalStudents: boards.globalBoard.totalStudents,
                liveRank,
                totalLiveStudents: boards.liveBoard.totalStudents
            };
        });

        // Compute authoritative analytics
        const analytics = computeAnalytics({
            testResults: normalizedResults,
            exam: effectiveExam,
            category,
            testId,
            subject,
            attemptId,
            compareAttemptId
        });

        return Response.json({
            success: true,
            userEmail: effectiveEmail,
            analytics
        });
    } catch (error) {
        console.error('Error computing analytics:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
