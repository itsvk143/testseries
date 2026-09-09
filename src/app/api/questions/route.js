import { promises as fs } from 'fs';
import path from 'path';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { getTestById, getQuestionsForTest } from '@/data/testService';
import { formatQuestionToLegacy, formatQuestionToCentralized } from '@/lib/questionFormatter';
import { balanceTestQuestions, toValidObjectId } from '@/lib/testQuestionBalancer';

const getFilePath = (testId) => {
    let folderName = 'questions'; // Default fallback

    if (!testId) {
        folderName = 'questionsneet';
    } else if (testId.startsWith('neet')) {
        folderName = 'questionsneet';
    } else if (testId.startsWith('jee-mains')) {
        folderName = 'questionsjeem';
    } else if (testId.startsWith('jee-advance')) {
        folderName = 'questionsjeea';
    } else if (testId.startsWith('board12')) {
        folderName = 'questionsboard12';
    }

    const baseDir = path.join(process.cwd(), 'src/data', folderName);

    // Default fallback if logic fails
    if (!testId) return path.join(baseDir, 'mock.json');

    if (testId.includes('MOCK')) return path.join(baseDir, 'mock.json');
    if (testId.includes('PYQ')) return path.join(baseDir, 'pyq.json');

    const subject = testId.toLowerCase().includes('physics') ? 'physics' :
        testId.toLowerCase().includes('chemistry') ? 'chemistry' :
            testId.toLowerCase().includes('biology') ? 'biology' :
                testId.toLowerCase().includes('mathematics') ? 'mathematics' : null;

    if (testId.includes('SUBJECT') && subject) {
        return path.join(baseDir, `subject_${subject}.json`);
    }

    if (testId.includes('CHAPTER') && subject) {
        return path.join(baseDir, `chapter_${subject}.json`);
    }

    if (testId.includes('SUBTOPIC') && subject) {
        return path.join(baseDir, `subtopic_${subject}.json`);
    }

    // Fallback for any other case
    return path.join(baseDir, 'mock.json');
};

async function getQuestionsFallback(testId) {
    try {
        const filePath = getFilePath(testId);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist or is invalid, return empty object
        return {};
    }
}

// Ensure the local JSON/generator questions or questionBank questions are copied to DB on access
async function ensureDbHasTest(testId, db) {
    if (!testId || testId === 'global') return;
    let testPaper = await db.collection('testPapers').findOne({ testId });
    
    // If test exists and already has populated questions, return immediately
    if (testPaper && testPaper.questions && testPaper.questions.length > 0) {
        return;
    }

    const staticTest = getTestById(testId);
    const fallbackQuestions = await getQuestionsFallback(testId);
    let fbQs = fallbackQuestions[testId] || [];
    if (fbQs.length === 0) {
        fbQs = getQuestionsForTest(testId) || [];
    }
    
    const testChapter = staticTest?.chapter || '';
    let questionIds = [];

    // If static questions exist, map them
    if (fbQs.length > 0) {
        for (const q of fbQs) {
            const centralQ = formatQuestionToCentralized(q);
            if ((!centralQ.chapter || centralQ.chapter === '') && testChapter) {
                centralQ.chapter = testChapter;
                centralQ.topic = testChapter;
            }
            if (testId.includes('SUBTOPIC') && staticTest?.title) {
                centralQ.subTopic = staticTest.title;
            }

            let existingQ = await db.collection('questionBank').findOne({
                subject: centralQ.subject,
                question: centralQ.question
            });
            if (existingQ) {
                questionIds.push(existingQ._id);
            } else {
                const res = await db.collection('questionBank').insertOne(centralQ);
                questionIds.push(res.insertedId);
            }
        }
    } else {
        // Dynamically resolve real questions from central questionBank!
        const rawSubject = staticTest?.subject || (testId.includes('Physics') ? 'Physics' : testId.includes('Chemistry') ? 'Chemistry' : testId.includes('Mathematics') ? 'Mathematics' : (testId.includes('Botany') ? 'Botany' : (testId.includes('Zoology') ? 'Zoology' : null)));
        const qCount = staticTest?.questionsCount || (testId.includes('SUBTOPIC') ? 25 : (testId.includes('CHAPTER') ? 30 : (testId.includes('SUBJECT') ? 45 : 45)));

        let query = {};
        if (rawSubject) query.subject = rawSubject;

        if (testId.includes('SUBTOPIC') && (staticTest?.title || staticTest?.chapter)) {
            const subTitle = staticTest?.title || '';
            const cleanSub = subTitle.replace(/[-_]/g, ' ').trim();
            query.$or = [
                { subTopic: { $regex: new RegExp(cleanSub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') } },
                { chapter: { $regex: new RegExp(cleanSub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') } }
            ];
        } else if (testId.includes('CHAPTER') && (staticTest?.chapter || staticTest?.title)) {
            const chapName = (staticTest.chapter || staticTest.title).replace(/[-_]/g, ' ').trim();
            query.chapter = { $regex: new RegExp(chapName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') };
        }

        let matched = await db.collection('questionBank')
            .find({ ...query, difficulty: { $ne: 'Easy' } })
            .sort({ difficulty: -1, _id: -1 })
            .limit(qCount)
            .toArray();

        // Broaden to subject if subtopic matched zero
        if (matched.length === 0 && rawSubject) {
            matched = await db.collection('questionBank')
                .find({ subject: rawSubject, difficulty: { $ne: 'Easy' } })
                .sort({ difficulty: -1, _id: -1 })
                .limit(qCount)
                .toArray();
        }

        questionIds = matched.map(q => q._id);
    }

    const exam = testId.startsWith('neet') ? 'NEET' : testId.startsWith('jee-mains') ? 'JEE Main' : testId.startsWith('jee-advance') ? 'JEE Advanced' : (testId.startsWith('bitsat') ? 'BITSAT' : 'Other');
    if (questionIds.length > 0) {
        const loadedQs = await db.collection('questionBank').find({ _id: { $in: questionIds } }).toArray();
        const loadedMap = new Map(loadedQs.map(q => [q._id.toString(), q]));
        const orderedQs = questionIds.map(id => loadedMap.get(id.toString())).filter(Boolean);
        const { balancedQuestions } = await balanceTestQuestions(orderedQs, db, testId, exam);
        questionIds = balancedQuestions.map(q => q._id).filter(Boolean);
    }
    const subject = staticTest?.subject || (testId.includes('Physics') ? 'Physics' : testId.includes('Chemistry') ? 'Chemistry' : testId.includes('Mathematics') ? 'Mathematics' : (testId.includes('Botany') ? 'Botany' : (testId.includes('Zoology') ? 'Zoology' : 'Mixed')));
    const title = staticTest?.title || testId.replace(/-/g, ' ');
    const duration = staticTest?.duration || (testId.includes('SUBJECT') || testId.includes('CHAPTER') || testId.includes('SUBTOPIC') ? 60 : 180);
    const totalMarks = staticTest?.totalMarks || (exam === 'NEET' ? (duration === 60 ? 180 : 720) : (duration === 60 ? 100 : 300));
    
    if (testPaper) {
        if (questionIds.length > 0) {
            await db.collection('testPapers').updateOne(
                { _id: testPaper._id },
                {
                    $set: {
                        questions: questionIds,
                        updatedAt: new Date()
                    }
                }
            );
        }
    } else {
        await db.collection('testPapers').insertOne({
            testId,
            title,
            exam,
            subject,
            duration,
            totalMarks,
            questions: questionIds,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');

    try {
        const client = await clientPromise;
        const db = client.db();

        if (testId && testId !== 'global') {
            // Lazily ensure the test is initialized in the DB if not already
            await ensureDbHasTest(testId, db);
 
            const query = (ObjectId.isValid(testId) && testId.length === 24)
                ? { $or: [{ testId }, { _id: new ObjectId(testId) }] }
                : { testId };
            const testPaper = await db.collection('testPapers').findOne(query);

            if (testPaper && testPaper.questions && testPaper.questions.length > 0) {
                const objectIds = [];
                const stringIds = [];

                for (const item of testPaper.questions) {
                    if (!item) continue;
                    if (typeof item === 'string') {
                        stringIds.push(item);
                        if (ObjectId.isValid(item) && item.length === 24) {
                            try { objectIds.push(new ObjectId(item)); } catch (e) {}
                        }
                    } else if (item._bsontype === 'ObjectID' || item instanceof ObjectId) {
                        objectIds.push(item);
                        stringIds.push(item.toString());
                    } else if (typeof item === 'object') {
                        const rawId = item.questionId || item._id || item.id;
                        if (rawId) {
                            stringIds.push(rawId.toString());
                            if (ObjectId.isValid(rawId)) {
                                try {
                                    objectIds.push(typeof rawId === 'string' && rawId.length === 24 ? new ObjectId(rawId) : rawId);
                                } catch (e) {}
                            }
                        }
                    }
                }

                const idFilters = [];
                if (objectIds.length > 0) idFilters.push({ _id: { $in: objectIds } });
                if (stringIds.length > 0) idFilters.push({ _id: { $in: stringIds } });

                let dbQuestions = [];
                if (idFilters.length > 0) {
                    dbQuestions = await db.collection('questionBank')
                        .find(idFilters.length === 1 ? idFilters[0] : { $or: idFilters })
                        .toArray();
                }

                // Map DB questions by string _id
                const questionsMap = new Map();
                for (const q of dbQuestions) {
                    if (q && q._id) {
                        questionsMap.set(q._id.toString(), q);
                    }
                }

                // Map and sort questions to maintain original order
                const orderedQuestions = testPaper.questions
                    .map((item, index) => {
                        let q = null;
                        if (typeof item === 'string' || item._bsontype === 'ObjectID' || item instanceof ObjectId) {
                            q = questionsMap.get(item.toString());
                        } else if (typeof item === 'object') {
                            const rawId = item.questionId || item._id || item.id;
                            if (rawId) {
                                q = questionsMap.get(rawId.toString());
                            }
                            if (!q && (item.question || item.text || item.questionText)) {
                                q = item;
                            }
                        }
                        if (!q) return null;
                        const qText = q.question || q.questionText || q.text;
                        if (!qText || qText.trim() === '') return null;
                        return formatQuestionToLegacy(q, index + 1);
                    })
                    .filter(Boolean);

                if (orderedQuestions.length > 0) {
                    // Enforce exam-specific Assertion-Reasoning quotas and placement
                    const examName = testPaper.exam || (testId.startsWith('neet') ? 'NEET' : testId.startsWith('jee-mains') ? 'JEE Main' : testId.startsWith('jee-advance') ? 'JEE Advanced' : 'Other');
                    const { balancedQuestions, wasModified } = await balanceTestQuestions(orderedQuestions, db, testId, examName);
                    const finalQuestions = balancedQuestions.map((q, index) => ({ ...q, id: index + 1 }));

                    const needsIdMigration = testPaper.questions.some(item => typeof item === 'string' || (typeof item === 'object' && !(item._bsontype === 'ObjectID' || item instanceof ObjectId)));

                    if (wasModified || needsIdMigration) {
                        const newIds = finalQuestions
                            .map(q => toValidObjectId(q._id) || toValidObjectId(q.id) || q._id)
                            .filter(Boolean);
                        if (newIds.length > 0) {
                            db.collection('testPapers').updateOne(
                                { _id: testPaper._id },
                                { $set: { questions: newIds, updatedAt: new Date() } }
                            ).catch(err => console.error('Error auto-syncing balanced questions to testPaper:', err));
                        }
                    }

                    return Response.json(finalQuestions);
                }
            }

            // Fallback to static test questions or local JSON if DB paper had 0 resolved questions
            const staticTest = getTestById(testId);
            const fallbackQuestions = await getQuestionsFallback(testId);
            let fbQs = fallbackQuestions[testId] || [];
            if (fbQs.length === 0) {
                fbQs = getQuestionsForTest(testId) || [];
            }
            if (fbQs.length > 0) {
                return Response.json(fbQs);
            }

            return Response.json([]);
        }
 
        // Behavior when testId is not present or testId === 'global'
        // Fetch all questions from the question bank with optional filters
        const filter = {};
        const subject = searchParams.get('subject');
        const chapter = searchParams.get('chapter');
        const subtopic = searchParams.get('subtopic');
        const type = searchParams.get('type');
        const limitParam = parseInt(searchParams.get('limit') || '3000', 10);

        if (subject && subject !== 'ALL') filter.subject = subject;
        if (chapter && chapter !== 'ALL') {
            if (chapter === '__empty__') {
                // Special case: fetch questions with no chapter assigned
                filter.chapter = { $in: ['', null] };
            } else {
                filter.chapter = chapter;
            }
        }

        if (subtopic && subtopic !== 'ALL') {
            filter.$and = filter.$and || [];
            if (subtopic === '__empty__' || subtopic === '__uncategorized__') {
                filter.$and.push({
                    $or: [
                        { subTopic: { $in: ['', null] } },
                        { subtopic: { $in: ['', null] } }
                    ]
                });
            } else {
                filter.$and.push({
                    $or: [
                        { subTopic: subtopic },
                        { subtopic: subtopic }
                    ]
                });
            }
        }

        if (type && type !== 'ALL') {
            filter.$and = filter.$and || [];
            if (type === 'ASSERTION_REASON' || type.includes('ASSERTION')) {
                filter.$and.push({
                    $or: [
                        { questionType: { $regex: /assertion/i } },
                        { type: { $regex: /assertion/i } }
                    ]
                });
            } else if (type === 'NUMERICAL') {
                filter.$and.push({
                    $or: [
                        { questionType: { $regex: /numeric/i } },
                        { type: { $regex: /numeric/i } }
                    ]
                });
            } else if (type === 'MCQ') {
                filter.$and.push({
                    questionType: { $not: { $regex: /assertion|numeric/i } },
                    type: { $not: { $regex: /assertion|numeric/i } }
                });
            } else {
                filter.questionType = type;
            }
        }

        const dbQuestions = await db.collection('questionBank')
            .find(filter)
            .sort({ _id: -1 }) // newest first
            .limit(Math.min(limitParam, 5000))
            .toArray();
 
        const legacyQuestions = dbQuestions.map((q, idx) => formatQuestionToLegacy(q, idx + 1));
        return Response.json(legacyQuestions);
        
    } catch (error) {
        console.error('API Error details:', error);
        return Response.json({ error: error.message || 'Internal server error', stack: error.stack }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { testId, question, action } = body;
        
        if (!testId && action !== 'ADD' && action !== 'ADD_BULK') {
             return Response.json({ error: 'testId is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        // One-time initialization of DB with existing JSON data if not already present
        if (testId && testId !== 'global') {
            await ensureDbHasTest(testId, db);
        }

        if (action === 'ADD') {
            if (!question || (!question.text && !question.question)) {
                return Response.json({ error: 'Question text is required' }, { status: 400 });
            }

            const centralQ = formatQuestionToCentralized(question);
            let questionId;
            // De-duplicate check
            const existing = await db.collection('questionBank').findOne({
                subject: centralQ.subject,
                question: centralQ.question
            });
            if (existing) {
                questionId = existing._id;
            } else {
                const res = await db.collection('questionBank').insertOne(centralQ);
                questionId = res.insertedId;
            }
            
            // Add to testPaper's questions array if a valid testId is specified
            let newIndex = 1;
            if (testId && testId !== 'global') {
                await db.collection('testPapers').updateOne(
                    { testId },
                    { $push: { questions: questionId }, $set: { updatedAt: new Date() } }
                );
                
                const testPaper = await db.collection('testPapers').findOne({ testId });
                newIndex = testPaper?.questions?.length || 1;
            }
            const legacyQ = formatQuestionToLegacy({ _id: questionId, ...centralQ }, newIndex);
            return Response.json({ success: true, data: [legacyQ] });
            
        } else if (action === 'ADD_BULK') {
            const questionIds = [];
            const list = Array.isArray(question) ? question : [question];
            for (const q of list) {
                if (!q || (!q.text && !q.question)) continue;
                const centralQ = formatQuestionToCentralized(q);
                let questionId;
                const existing = await db.collection('questionBank').findOne({
                    subject: centralQ.subject,
                    question: centralQ.question
                });
                if (existing) {
                    questionId = existing._id;
                } else {
                    const res = await db.collection('questionBank').insertOne(centralQ);
                    questionId = res.insertedId;
                }
                questionIds.push(questionId);
            }
            
            if (testId && testId !== 'global') {
                await db.collection('testPapers').updateOne(
                    { testId },
                    { $push: { questions: { $each: questionIds } }, $set: { updatedAt: new Date() } }
                );
            }
            return Response.json({ success: true, count: questionIds.length });
            
        } else if (action === 'LINK_QUESTIONS') {
            const { questionIds } = body;
            if (!questionIds || !Array.isArray(questionIds)) {
                return Response.json({ error: 'questionIds array is required' }, { status: 400 });
            }
            const validObjectIds = questionIds
                .filter(id => ObjectId.isValid(id))
                .map(id => new ObjectId(id));

            if (validObjectIds.length === 0) {
                return Response.json({ error: 'No valid Question IDs provided' }, { status: 400 });
            }

            await db.collection('testPapers').updateOne(
                { testId },
                { 
                    $addToSet: { questions: { $each: validObjectIds } }, 
                    $setOnInsert: { createdAt: new Date() },
                    $set: { updatedAt: new Date() } 
                },
                { upsert: true }
            );
            return Response.json({ success: true, count: validObjectIds.length });
            
        } else if (action === 'UNLINK_QUESTION') {
            const { questionId } = body;
            if (!questionId) {
                return Response.json({ error: 'questionId is required' }, { status: 400 });
            }
            if (!ObjectId.isValid(questionId)) {
                return Response.json({ error: 'Invalid Question ID format' }, { status: 400 });
            }
            await db.collection('testPapers').updateOne(
                { testId },
                { 
                    $pull: { questions: new ObjectId(questionId) }, 
                    $set: { updatedAt: new Date() } 
                }
            );
            return Response.json({ success: true });

        } else if (action === 'EDIT') {
            if (!question) {
                return Response.json({ error: 'Question data is required' }, { status: 400 });
            }
            const centralQ = formatQuestionToCentralized(question);
            let qId = question._id;
            if (!qId && testId && testId !== 'global') {
                const testPaper = await db.collection('testPapers').findOne({ testId });
                if (testPaper && testPaper.questions) {
                    const qIndex = question.id - 1;
                    qId = testPaper.questions[qIndex];
                }
            }
            if (qId) {
                await db.collection('questionBank').updateOne(
                    { _id: typeof qId === 'string' ? new ObjectId(qId) : qId },
                    { $set: centralQ }
                );
                return Response.json({ success: true });
            }
            return Response.json({ error: 'Question not found' }, { status: 404 });
            
        } else if (action === 'DELETE') {
            let qId = question?._id;
            if (!qId && testId && testId !== 'global') {
                const testPaper = await db.collection('testPapers').findOne({ testId });
                if (testPaper && testPaper.questions) {
                    const qIndex = question.id - 1;
                    qId = testPaper.questions[qIndex];
                }
            }
            if (qId) {
                const objId = typeof qId === 'string' ? new ObjectId(qId) : qId;
                // Delete from questionBank
                await db.collection('questionBank').deleteOne({ _id: objId });
                // Pull from all testPapers
                await db.collection('testPapers').updateMany(
                    { questions: objId },
                    { $pull: { questions: objId }, $set: { updatedAt: new Date() } }
                );
                return Response.json({ success: true });
            }
            return Response.json({ error: 'Question not found' }, { status: 404 });
        }

        return Response.json({ error: 'Invalid action' }, { status: 400 });
        
    } catch (error) {
        console.error('API Error:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
