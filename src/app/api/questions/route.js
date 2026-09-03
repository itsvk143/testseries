import { promises as fs } from 'fs';
import path from 'path';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { getTestById, getQuestionsForTest } from '@/data/testService';
import { formatQuestionToLegacy, formatQuestionToCentralized } from '@/lib/questionFormatter';

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

// Ensure the local JSON/generator questions are copied to DB on first access
async function ensureDbHasTest(testId, db) {
    if (!testId || testId === 'global') return;
    const testPaper = await db.collection('testPapers').findOne({ testId });
    if (!testPaper) {
        const staticTest = getTestById(testId);
        const fallbackQuestions = await getQuestionsFallback(testId);
        let fbQs = fallbackQuestions[testId] || [];
        if (fbQs.length === 0) {
            fbQs = getQuestionsForTest(testId) || [];
        }
        
        const testChapter = staticTest?.chapter || '';
        const questionIds = [];
        for (const q of fbQs) {
            const centralQ = formatQuestionToCentralized(q);
            if ((!centralQ.chapter || centralQ.chapter === '') && testChapter) {
                centralQ.chapter = testChapter;
                centralQ.topic = testChapter;
            }
            if (testId.includes('SUBTOPIC') && staticTest?.title) {
                centralQ.subTopic = staticTest.title;
            }

            // De-duplicate: check if question exists in questionBank
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
        
        // Create test paper metadata
        const exam = testId.startsWith('neet') ? 'NEET' : testId.startsWith('jee-mains') ? 'JEE Main' : testId.startsWith('jee-advance') ? 'JEE Advanced' : 'Other';
        const subject = testId.includes('Physics') ? 'Physics' : testId.includes('Chemistry') ? 'Chemistry' : testId.includes('Mathematics') ? 'Mathematics' : 'Mixed';
        const title = staticTest?.title || testId.replace(/-/g, ' ');
        const duration = staticTest?.duration || (testId.includes('SUBJECT') || testId.includes('CHAPTER') ? 60 : 180);
        const totalMarks = staticTest?.totalMarks || (exam === 'NEET' ? (duration === 60 ? 180 : 720) : (duration === 60 ? 100 : 300));
        
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
 
            const testPaper = await db.collection('testPapers').findOne({ testId });
            if (testPaper && testPaper.questions && testPaper.questions.length > 0) {
                const questionIds = testPaper.questions;
                const dbQuestions = await db.collection('questionBank')
                    .find({ _id: { $in: questionIds } })
                    .toArray();
                
                // Map and sort questions to maintain original order
                const questionsMap = new Map(dbQuestions.map(q => [q._id.toString(), q]));
                const orderedQuestions = questionIds
                    .map((id, index) => {
                        const q = questionsMap.get(id.toString());
                        if (!q) return null;
                        return formatQuestionToLegacy(q, index + 1);
                    })
                    .filter(Boolean);
                
                return Response.json(orderedQuestions);
            }
            return Response.json([]);
        }
 
        // Behavior when testId is not present or testId === 'global'
        // Fetch all questions from the question bank with optional filters
        const filter = {};
        const subject = searchParams.get('subject');
        const chapter = searchParams.get('chapter');
        const type = searchParams.get('type');
        if (subject && subject !== 'ALL') filter.subject = subject;
        if (chapter && chapter !== 'ALL') {
            if (chapter === '__empty__') {
                // Special case: fetch questions with no chapter assigned
                filter.chapter = { $in: ['', null] };
            } else {
                filter.chapter = chapter;
            }
        }
        if (type && type !== 'ALL') filter.questionType = type;

        const dbQuestions = await db.collection('questionBank')
            .find(filter)
            .sort({ _id: -1 }) // newest first
            .limit(1000)
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
            await db.collection('testPapers').updateOne(
                { testId },
                { 
                    $addToSet: { questions: { $each: questionIds.map(id => new ObjectId(id)) } }, 
                    $set: { updatedAt: new Date() } 
                }
            );
            return Response.json({ success: true });
            
        } else if (action === 'UNLINK_QUESTION') {
            const { questionId } = body;
            if (!questionId) {
                return Response.json({ error: 'questionId is required' }, { status: 400 });
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
