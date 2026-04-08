import { promises as fs } from 'fs';
import path from 'path';
import clientPromise from '@/lib/mongodb';

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

async function getCollection() {
    const client = await clientPromise;
    // Connects to the default database dictated by the URI
    const db = client.db();
    return db.collection('questions');
}

// Ensure the local JSON file questions are copied to the DB on first write
async function ensureDbHasTest(testId, collection) {
    const count = await collection.countDocuments({ testId });
    if (count === 0) {
        const fallback = await getQuestionsFallback(testId);
        const fbQuestions = fallback[testId] || [];
        if (fbQuestions.length > 0) {
            const toInsert = fbQuestions.map(q => ({ ...q, testId }));
            await collection.insertMany(toInsert);
        }
    }
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');

    try {
        const collection = await getCollection();

        if (testId) {
            const dbQuestions = await collection.find({ testId }).sort({ id: 1 }).toArray();
            
            if (dbQuestions.length > 0) {
                const formatted = dbQuestions.map(q => {
                   const { _id, testId: tId, ...rest } = q;
                   return rest;
                });
                return Response.json(formatted);
            } else {
                // Fallback to local files
                const allQuestions = await getQuestionsFallback(testId);
                return Response.json(allQuestions[testId] || []);
            }
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

        const collection = await getCollection();

        // One-time initialization of DB with existing JSON data
        await ensureDbHasTest(testId, collection);

        if (action === 'ADD') {
            const existing = await collection.find({ testId }).sort({ id: -1 }).limit(1).toArray();
            const currentMaxId = existing.length > 0 ? existing[0].id : 0;
            const newQuestion = { ...question, id: currentMaxId + 1, testId };
            await collection.insertOne(newQuestion);
            
            // The frontend might expect the full updated list or just success
            return Response.json({ success: true, data: [newQuestion] });
            
        } else if (action === 'ADD_BULK') {
            const existing = await collection.find({ testId }).sort({ id: -1 }).limit(1).toArray();
            let currentMaxId = existing.length > 0 ? existing[0].id : 0;
            
            const newQuestions = question.map(q => {
                currentMaxId++;
                return { ...q, id: currentMaxId, testId };
            });
            
            await collection.insertMany(newQuestions);
            return Response.json({ success: true, count: newQuestions.length });
            
        } else if (action === 'EDIT') {
            await collection.updateOne({ id: question.id, testId }, { $set: question });
            return Response.json({ success: true });
            
        } else if (action === 'DELETE') {
            await collection.deleteOne({ id: question.id, testId });
            return Response.json({ success: true });
        }

        return Response.json({ error: 'Invalid action' }, { status: 400 });
        
    } catch (error) {
        console.error('API Error:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
