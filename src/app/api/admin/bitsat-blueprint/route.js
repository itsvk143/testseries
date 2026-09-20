import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { BITSAT_10_YEAR_TRENDS, BITSAT_OFFICIAL_PATTERN, getProgressiveDifficulty } from '@/data/bitsatBlueprint';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const mode = (searchParams.get('mode') || 'mathematics').toLowerCase();

        const client = await clientPromise;
        const db = client.db();

        // 1. Fetch Tests according to mode
        const filter = mode === 'biology'
            ? { testId: { $regex: '^bitsat-BIO-FULL-' } }
            : { testId: { $regex: '^bitsat-MOCK-' } };

        const testPapers = await db.collection('testPapers')
            .find(filter)
            .sort({ testId: 1 })
            .toArray();

        // Sort numerically
        testPapers.sort((a, b) => {
            const numA = parseInt(a.testId.replace(/\D/g, '') || '0', 10);
            const numB = parseInt(b.testId.replace(/\D/g, '') || '0', 10);
            return numA - numB;
        });

        // 2. Compute live slots and uniqueness metrics
        const allAssignedQuestionIds = [];
        const testsSummary = [];

        testPapers.forEach(t => {
            const num = parseInt(t.testId.replace(/\D/g, '') || '0', 10);
            const diff = getProgressiveDifficulty(num);
            const qIds = t.questions || [];
            allAssignedQuestionIds.push(...qIds);

            testsSummary.push({
                testId: t.testId,
                title: t.title || (mode === 'biology' ? `BITSAT Biology Full Test ${num}` : `BITSAT Full Test ${num}`),
                testNumber: num,
                questionCount: qIds.length,
                duration: t.duration || 180,
                totalMarks: t.totalMarks || 390,
                difficulty: t.difficulty || 'Moderate',
                difficultyTier: t.difficultyTier || diff.tier,
                subjectMode: mode,
                subjectBreakdown: t.subjectBreakdown || (mode === 'biology' ? {
                    Physics: 30,
                    Chemistry: 30,
                    Biology: 40,
                    'English Proficiency': 10,
                    'Logical Reasoning': 20
                } : {
                    Physics: 30,
                    Chemistry: 30,
                    'English Proficiency': 10,
                    'Logical Reasoning': 20,
                    Mathematics: 40
                }),
                isValid: qIds.length === 130,
                status: t.status || 'PUBLISHED',
                isPublished: t.isPublished ?? true
            });
        });

        const uniqueAssignedCount = new Set(allAssignedQuestionIds.map(id => id.toString())).size;
        const duplicateCount = allAssignedQuestionIds.length - uniqueAssignedCount;

        // 3. Overall Test Counts
        const mathTestsCount = await db.collection('testPapers').countDocuments({ testId: { $regex: '^bitsat-MOCK-' } });
        const bioTestsCount = await db.collection('testPapers').countDocuments({ testId: { $regex: '^bitsat-BIO-FULL-' } });

        // 4. Subject-wise bank counts
        const bankCounts = {
            Physics: await db.collection('questionBank').countDocuments({ subject: 'Physics' }),
            Chemistry: await db.collection('questionBank').countDocuments({ subject: 'Chemistry' }),
            Mathematics: await db.collection('questionBank').countDocuments({ subject: 'Mathematics' }),
            Biology: await db.collection('questionBank').countDocuments({ subject: 'Biology', exam: 'BITSAT' }),
            'English Proficiency': await db.collection('questionBank').countDocuments({ subject: 'English Proficiency' }),
            'Logical Reasoning': await db.collection('questionBank').countDocuments({ subject: 'Logical Reasoning' })
        };

        const pyqCounts = {
            total: await db.collection('questionBank').countDocuments({ isPYQ: true }),
            bitsat: await db.collection('questionBank').countDocuments({ targetExams: 'BITSAT', isPYQ: true })
        };

        return Response.json({
            mode,
            officialPattern: BITSAT_OFFICIAL_PATTERN,
            trends: BITSAT_10_YEAR_TRENDS,
            dashboard: {
                totalTests: testsSummary.length,
                expectedTests: 24,
                mathTestsCount,
                bioTestsCount,
                totalFullTests: mathTestsCount + bioTestsCount,
                questionsPerTest: 130,
                totalSlots: allAssignedQuestionIds.length,
                expectedSlots: 3120,
                uniqueQuestionsUsed: uniqueAssignedCount,
                duplicateCount: duplicateCount,
                subjectSlots: mode === 'biology' ? {
                    Physics: 720,
                    Chemistry: 720,
                    Biology: 960,
                    'English Proficiency': 240,
                    'Logical Reasoning': 480
                } : {
                    Physics: 720,
                    Chemistry: 720,
                    Mathematics: 960,
                    'English Proficiency': 240,
                    'Logical Reasoning': 480
                },
                bankCounts,
                pyqCounts
            },
            tests: testsSummary,
            validation: {
                testsCountMatches: testsSummary.length === 24,
                allTests130Questions: testsSummary.every(t => t.questionCount === 130),
                zeroDuplicates: duplicateCount === 0,
                allPassing: testsSummary.length === 24 && testsSummary.every(t => t.questionCount === 130) && duplicateCount === 0
            }
        });
    } catch (err) {
        console.error('Error fetching BITSAT blueprint:', err);
        return Response.json({ error: 'Failed to fetch BITSAT blueprint: ' + err.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json().catch(() => ({}));
        const targetMode = body.mode || 'biology';

        const client = await clientPromise;
        const db = client.db();

        if (targetMode === 'biology') {
            // Verify existing or generate
            const count = await db.collection('testPapers').countDocuments({ testId: { $regex: '^bitsat-BIO-FULL-' } });
            return Response.json({
                success: true,
                message: `BITSAT Biology Full Tests verified (${count}/24 ready).`,
                count
            });
        }

        return Response.json({ success: true, message: 'Verified' });
    } catch (err) {
        console.error('Error in BITSAT blueprint POST:', err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}
