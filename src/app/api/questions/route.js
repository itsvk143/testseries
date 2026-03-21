import { promises as fs } from 'fs';
import path from 'path';

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

async function getQuestions(testId) {
    try {
        const filePath = getFilePath(testId);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist or is invalid, return empty object
        return {};
    }
}

async function saveQuestions(testId, data) {
    const filePath = getFilePath(testId);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const testId = searchParams.get('testId');

    const allQuestions = await getQuestions(testId);

    if (testId) {
        return Response.json(allQuestions[testId] || []);
    }

    return Response.json(allQuestions);
}

export async function POST(request) {
    const body = await request.json();
    const { testId, question, action } = body;

    const allQuestions = await getQuestions(testId);

    if (!allQuestions[testId]) {
        allQuestions[testId] = [];
    }

    if (action === 'ADD') {
        const newId = allQuestions[testId].length > 0 ? Math.max(...allQuestions[testId].map(q => q.id)) + 1 : 1;
        const newQuestion = { ...question, id: newId };
        allQuestions[testId].push(newQuestion);
    } else if (action === 'ADD_BULK') {
        let currentMaxId = allQuestions[testId].length > 0 ? Math.max(...allQuestions[testId].map(q => q.id)) : 0;
        
        const newQuestions = question.map((q, index) => {
            currentMaxId++;
            return {
                ...q,
                id: currentMaxId
            };
        });
        
        allQuestions[testId].push(...newQuestions);
    } else if (action === 'EDIT') {
        const index = allQuestions[testId].findIndex(q => q.id === question.id);
        if (index !== -1) {
            allQuestions[testId][index] = question;
        }
    } else if (action === 'DELETE') {
        allQuestions[testId] = allQuestions[testId].filter(q => q.id !== question.id);
    }

    await saveQuestions(testId, allQuestions);
    return Response.json({ success: true, data: allQuestions[testId] });
}
