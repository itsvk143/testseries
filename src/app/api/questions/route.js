import { promises as fs } from 'fs';
import path from 'path';
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
    const testPaper = await db.collection('testPapers').findOne({ testId });
    if (!testPaper) {
        const staticTest = getTestById(testId);
        const fallbackQuestions = await getQuestionsFallback(testId);
        let fbQs = fallbackQuestions[testId] || [];
        if (fbQs.length === 0) {
            fbQs = getQuestionsForTest(testId) || [];
        }
        
        const questionIds = [];
        for (const q of fbQs) {
            const centralQ = formatQuestionToCentralized(q);
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

        if (testId) {
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

        // Behavior when testId is not present: fallback to returning all mock files
        const allQuestions = await getQuestionsFallback();
        return Response.json(allQuestions);
        
    } catch (error) {
        console.error('API Error details:', error);
        return Response.json({ error: error.message || 'Internal server error', stack: error.stack }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { testId, question, action } = body;
        
        if (!testId) {
             return Response.json({ error: 'testId is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        // One-time initialization of DB with existing JSON data if not already present
        await ensureDbHasTest(testId, db);

        if (action === 'ADD') {
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
            
            // Add to testPaper's questions array
            await db.collection('testPapers').updateOne(
                { testId },
                { $push: { questions: questionId }, $set: { updatedAt: new Date() } }
            );
            
            const testPaper = await db.collection('testPapers').findOne({ testId });
            const newIndex = testPaper.questions.length;
            const legacyQ = formatQuestionToLegacy({ _id: questionId, ...centralQ }, newIndex);
            return Response.json({ success: true, data: [legacyQ] });
            
        } else if (action === 'ADD_BULK') {
            const questionIds = [];
            const list = Array.isArray(question) ? question : [question];
            for (const q of list) {
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
            
            await db.collection('testPapers').updateOne(
                { testId },
                { $push: { questions: { $each: questionIds } }, $set: { updatedAt: new Date() } }
            );
            return Response.json({ success: true, count: questionIds.length });
            
        } else if (action === 'EDIT') {
            const testPaper = await db.collection('testPapers').findOne({ testId });
            if (testPaper && testPaper.questions) {
                // Find the question ID corresponding to the numeric id (which is 1-indexed)
                const qIndex = question.id - 1;
                const qId = testPaper.questions[qIndex];
                if (qId) {
                    const centralQ = formatQuestionToCentralized(question);
                    await db.collection('questionBank').updateOne(
                        { _id: qId },
                        { $set: centralQ }
                    );
                    return Response.json({ success: true });
                }
            }
            return Response.json({ error: 'Question or Test Paper not found' }, { status: 404 });
            
        } else if (action === 'DELETE') {
            const testPaper = await db.collection('testPapers').findOne({ testId });
            if (testPaper && testPaper.questions) {
                const qIndex = question.id - 1;
                const qId = testPaper.questions[qIndex];
                if (qId) {
                    await db.collection('testPapers').updateOne(
                        { testId },
                        { $pull: { questions: qId }, $set: { updatedAt: new Date() } }
                    );
                    return Response.json({ success: true });
                }
            }
            return Response.json({ error: 'Question or Test Paper not found' }, { status: 404 });
        }

        return Response.json({ error: 'Invalid action' }, { status: 400 });
        
    } catch (error) {
        console.error('API Error:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
