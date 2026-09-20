import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session || !['admin', 'superadmin'].includes(session.user?.role)) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const subject = searchParams.get('subject');
        const chapter = searchParams.get('chapter');
        const subtopic = searchParams.get('subtopic');

        const client = await clientPromise;
        const db = client.db('testseries');

        // 1. Fetch all BITSAT subtopic tests from testPapers
        const subtopicTests = await db.collection('testPapers')
            .find({
                testId: { $regex: '^bitsat-SUBTOPIC' }
            })
            .sort({ updatedAt: -1, createdAt: -1 })
            .toArray();

        // 2. If subject/subtopic requested, return question inventory analytics
        let analytics = null;
        if (subject) {
            const query = {
                subject,
                $nor: [
                    { questionType: { $regex: /assertion|ar|numerical/i } },
                    { type: { $regex: /assertion|ar|numerical/i } }
                ]
            };

            if (chapter) {
                query.chapter = { $regex: new RegExp(chapter.replace(/[-_]/g, ' ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') };
            }

            if (subtopic && subtopic !== 'ALL') {
                const subClean = subtopic.replace(/[-_]/g, ' ').trim();
                const subRegex = new RegExp(subClean.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                query.$or = [
                    { subTopic: { $regex: subRegex } },
                    { subtopic: { $regex: subRegex } }
                ];
            }

            const questions = await db.collection('questionBank').find(query).toArray();
            
            let easy = 0, moderate = 0, difficult = 0;
            let pyq = 0, aiPractice = 0, faculty = 0;
            let used = 0, unused = 0;

            for (const q of questions) {
                const diff = (q.difficulty || '').toLowerCase();
                if (diff.includes('easy')) easy++;
                else if (diff.includes('hard') || diff.includes('diff')) difficult++;
                else moderate++;

                const src = (q.source || '').toLowerCase();
                if (q.isPYQ || src.includes('pyq')) pyq++;
                else if (src.includes('ai')) aiPractice++;
                else faculty++;

                if (Array.isArray(q.usedInTests) && q.usedInTests.length > 0) used++;
                else unused++;
            }

            analytics = {
                total: questions.length,
                easy,
                moderate,
                difficult,
                pyq,
                aiPractice,
                faculty,
                used,
                unused,
                availableForTest: unused
            };
        }

        return Response.json({
            success: true,
            tests: subtopicTests.map(t => ({
                id: t.testId,
                title: t.title,
                subject: t.subject,
                chapter: t.chapter,
                subtopic: t.subtopic || t.title,
                duration: t.duration || 30,
                totalMarks: t.totalMarks || 60,
                questionsCount: t.questions?.length || 0,
                targetQuestionsCount: t.questionsCount || 20,
                difficulty: t.difficulty || 'Moderate',
                createdAt: t.createdAt,
                updatedAt: t.updatedAt
            })),
            analytics
        });
    } catch (err) {
        console.error('Error fetching BITSAT subtopics:', err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session || !['admin', 'superadmin'].includes(session.user?.role)) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { action, testId, subject, chapter, subtopic, questionsCount = 20, duration = 30, difficulty = 'Mixed' } = body;

        const client = await clientPromise;
        const db = client.db('testseries');

        if (action === 'CREATE' || action === 'DUPLICATE') {
            if (!subject || !chapter || !subtopic) {
                return Response.json({ error: 'Subject, chapter, and subtopic are required.' }, { status: 400 });
            }

            const qCount = Number(questionsCount) || 20;
            const dur = Number(duration) || 30;
            const marks = qCount * 3;

            // Generate clean ID
            const cleanSub = subtopic.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            const cleanSubName = subtopic.replace(/[-_]/g, ' ').trim();
            const subRegex = new RegExp(cleanSubName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

            let finalTestId = testId;
            if (!finalTestId || action === 'DUPLICATE') {
                const baseId = `bitsat-SUBTOPIC-${subject.replace(/\s+/g, '-')}-${cleanSub}`;
                const existing = await db.collection('testPapers').countDocuments({ testId: { $regex: `^${baseId}` } });
                finalTestId = existing > 0 ? `${baseId}-Test-${existing + 1}` : baseId;
            }

            // Search query for matching single-correct MCQs
            const query = {
                subject,
                $nor: [
                    { questionType: { $regex: /assertion|ar|numerical/i } },
                    { type: { $regex: /assertion|ar|numerical/i } }
                ],
                $or: [
                    { subTopic: { $regex: subRegex } },
                    { subtopic: { $regex: subRegex } }
                ]
            };

            // First prioritize unused questions
            const unusedQs = await db.collection('questionBank')
                .find({ ...query, usedInTests: { $ne: finalTestId } })
                .toArray();

            let pool = unusedQs;
            if (pool.length < qCount) {
                const allQs = await db.collection('questionBank').find(query).toArray();
                pool = allQs;
            }

            if (pool.length === 0) {
                // Fallback to chapter level if no questions explicitly tagged with subtopic
                const chapRegex = new RegExp(chapter.replace(/[-_]/g, ' ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                pool = await db.collection('questionBank').find({
                    subject,
                    chapter: { $regex: chapRegex },
                    $nor: [
                        { questionType: { $regex: /assertion|ar|numerical/i } },
                        { type: { $regex: /assertion|ar|numerical/i } }
                    ]
                }).limit(qCount * 2).toArray();
            }

            if (pool.length === 0) {
                return Response.json({
                    error: `No questions found in Central Question Bank for ${subject} → ${subtopic}. Please generate or add questions first.`
                }, { status: 400 });
            }

            // Apply difficulty target
            let selected = [];
            const easyTarget = Math.round(qCount * 0.25);
            const hardTarget = Math.round(qCount * 0.20);
            const modTarget = qCount - easyTarget - hardTarget;

            const easyList = pool.filter(q => (q.difficulty || '').toLowerCase().includes('easy'));
            const hardList = pool.filter(q => (q.difficulty || '').toLowerCase().includes('hard') || (q.difficulty || '').toLowerCase().includes('diff'));
            const modList = pool.filter(q => !easyList.includes(q) && !hardList.includes(q));

            const pick = (arr, n) => arr.sort(() => 0.5 - Math.random()).slice(0, n);

            selected = [
                ...pick(easyList, easyTarget),
                ...pick(modList, modTarget),
                ...pick(hardList, hardTarget)
            ];

            // Fill remainder if strict buckets were insufficient
            if (selected.length < qCount) {
                const selectedIds = new Set(selected.map(q => q._id.toString()));
                const remainder = pool.filter(q => !selectedIds.has(q._id.toString()));
                selected = [...selected, ...pick(remainder, qCount - selected.length)];
            }

            // Validation before publishing
            const validationErrors = [];
            if (selected.length < 5) {
                validationErrors.push(`Insufficient questions available (found ${selected.length}, need minimum 5).`);
            }
            for (let i = 0; i < selected.length; i++) {
                const q = selected[i];
                if (!Array.isArray(q.options) || q.options.length !== 4) {
                    validationErrors.push(`Question #${i + 1} does not have exactly 4 options.`);
                }
                if (q.correctAnswer === undefined && q.correctOption === undefined) {
                    validationErrors.push(`Question #${i + 1} lacks a defined correct answer.`);
                }
            }

            if (validationErrors.length > 0) {
                return Response.json({
                    error: 'Test validation failed.',
                    validationErrors
                }, { status: 422 });
            }

            const questionIds = selected.map(q => q._id);

            const testDoc = {
                testId: finalTestId,
                title: action === 'DUPLICATE' ? `${subtopic} (Practice Test)` : subtopic,
                exam: 'BITSAT',
                subject,
                chapter,
                subtopic,
                type: 'SUBTOPIC',
                duration: dur,
                totalMarks: marks,
                questionsCount: selected.length,
                difficulty,
                questions: questionIds,
                updatedAt: new Date(),
                createdAt: new Date()
            };

            await db.collection('testPapers').updateOne(
                { testId: finalTestId },
                { $set: testDoc },
                { upsert: true }
            );

            // Mark questions with usedInTests
            await db.collection('questionBank').updateMany(
                { _id: { $in: questionIds } },
                { $addToSet: { usedInTests: finalTestId } }
            );

            return Response.json({
                success: true,
                message: `Subtopic test '${finalTestId}' successfully created with ${selected.length} questions.`,
                test: testDoc
            });
        }

        if (action === 'REGENERATE') {
            if (!testId) {
                return Response.json({ error: 'testId is required for regeneration.' }, { status: 400 });
            }

            const existingTest = await db.collection('testPapers').findOne({ testId });
            if (!existingTest) {
                return Response.json({ error: 'Test not found.' }, { status: 404 });
            }

            const qCount = existingTest.questionsCount || existingTest.questions?.length || 20;
            const subName = existingTest.subtopic || existingTest.title;
            const subRegex = new RegExp(subName.replace(/[-_]/g, ' ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

            // Find unused questions
            const unusedQs = await db.collection('questionBank').find({
                subject: existingTest.subject,
                $nor: [
                    { questionType: { $regex: /assertion|ar|numerical/i } },
                    { type: { $regex: /assertion|ar|numerical/i } }
                ],
                $or: [
                    { subTopic: { $regex: subRegex } },
                    { subtopic: { $regex: subRegex } }
                ],
                usedInTests: { $ne: testId }
            }).limit(qCount).toArray();

            let selected = unusedQs;
            if (selected.length < qCount) {
                const allQs = await db.collection('questionBank').find({
                    subject: existingTest.subject,
                    $nor: [
                        { questionType: { $regex: /assertion|ar|numerical/i } },
                        { type: { $regex: /assertion|ar|numerical/i } }
                    ],
                    $or: [
                        { subTopic: { $regex: subRegex } },
                        { subtopic: { $regex: subRegex } }
                    ]
                }).toArray();
                selected = allQs.sort(() => 0.5 - Math.random()).slice(0, qCount);
            }

            const questionIds = selected.map(q => q._id);

            await db.collection('testPapers').updateOne(
                { testId },
                {
                    $set: {
                        questions: questionIds,
                        questionsCount: selected.length,
                        updatedAt: new Date()
                    }
                }
            );

            await db.collection('questionBank').updateMany(
                { _id: { $in: questionIds } },
                { $addToSet: { usedInTests: testId } }
            );

            return Response.json({
                success: true,
                message: `Successfully regenerated ${selected.length} questions for '${testId}'.`,
                questionCount: selected.length
            });
        }

        return Response.json({ error: 'Invalid action.' }, { status: 400 });
    } catch (err) {
        console.error('Error in BITSAT subtopic POST:', err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const session = await auth();
        if (!session || !['admin', 'superadmin'].includes(session.user?.role)) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const testId = searchParams.get('testId');

        if (!testId) {
            return Response.json({ error: 'testId is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        await db.collection('testPapers').deleteOne({ testId });

        // Unlink usedInTests
        await db.collection('questionBank').updateMany(
            { usedInTests: testId },
            { $pull: { usedInTests: testId } }
        );

        return Response.json({ success: true, message: `Test '${testId}' successfully deleted.` });
    } catch (err) {
        console.error('Error deleting subtopic test:', err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}
