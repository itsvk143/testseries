
import { neetTests } from './exams/neet';
import { jeeMainsTests } from './exams/jeeMains';
import { jeeAdvanceTests } from './exams/jeeAdvanced';
import neetPyqData from './questionsneet/pyq.json';

export const getTestById = (id) => {
    console.log("testService: getTestById called for:", id);
    const all = [...neetTests, ...jeeMainsTests, ...jeeAdvanceTests];
    console.log("testService: Total tests available:", all.length);
    const found = all.find(t => t.id === id);
    console.log("testService: Found:", found ? found.id : "NOT FOUND");
    return found;
};

// Database for Real/Manual Questions (Can be split later if it grows)
const testQuestionsDatabase = {
    ...neetPyqData,
    'neet-PYQ-1': neetPyqData['neet-PYQ-2025-Set-A'], // Map generated ID to real Data
    // Example: Real questions for NEET Mock Test 1
    'neet-MOCK-1': [
        {
            id: 1,
            subject: 'Physics',
            text: "A particle moves along a straight line with a velocity v = (3t² + 2t) m/s. What is the displacement of the particle between t = 1s and t = 2s?",
            options: [
                { id: 'a', text: "8 m" },
                { id: 'b', text: "10 m" },
                { id: 'c', text: "12 m" },
                { id: 'd', text: "14 m" }
            ],
            correctOption: 'b',
            explanation: "Displacement Δx = ∫v dt from 1 to 2. ∫(3t² + 2t)dt = [t³ + t²] from 1 to 2. Upper limit: (8+4)=12. Lower limit: (1+1)=2. Result: 12-2 = 10m."
        },
        {
            id: 2,
            subject: 'Botany',
            text: "Which of the following is known as the 'Powerhouse of the cell'?",
            options: [
                { id: 'a', text: "Nucleus" },
                { id: 'b', text: "Mitochondria" },
                { id: 'c', text: "Chloroplast" },
                { id: 'd', text: "Ribosome" }
            ],
            correctOption: 'b',
            explanation: "Mitochondria are responsible for producing ATP through cellular respiration, hence called the powerhouses of the cell."
        }
    ]
};

// Main Function to get questions
export const getQuestionsForTest = (testId) => {
    // 1. Check if we have manual questions for this specific test
    if (testQuestionsDatabase[testId]) {
        return testQuestionsDatabase[testId];
    }

    // console.log(`No manual questions found for ${testId}, generating mock questions...`);

    const isNeet = testId.includes('neet');
    let subjects = isNeet ? ['Physics', 'Chemistry', 'Botany', 'Zoology'] : ['Physics', 'Chemistry', 'Mathematics'];

    // Filter subjects if it's a specific Subject Test
    if (testId.includes('SUBJECT') || testId.includes('CHAPTER')) {
        if (testId.toLowerCase().includes('physics')) subjects = ['Physics'];
        else if (testId.toLowerCase().includes('chemistry')) subjects = ['Chemistry'];
        else if (testId.toLowerCase().includes('botany')) subjects = ['Botany'];
        else if (testId.toLowerCase().includes('zoology')) subjects = ['Zoology'];
        else if (testId.toLowerCase().includes('mathematics')) subjects = ['Mathematics'];
    }

    // PART Tests include all subjects, but we can customize the question text to indicate specific chapters
    const isPartTest = testId.includes('PART');

    let questionsPerSubject = 30;
    if (isNeet) questionsPerSubject = 45;
    else if (testId.includes('jee-mains')) questionsPerSubject = 25; // 25*3 = 75 questions

    const questions = [];
    let validId = 1;

    subjects.forEach(subject => {
        for (let i = 1; i <= questionsPerSubject; i++) {
            // Simple mock question generation
            let questionText = `Sample Question ${i} for ${subject} in ${testId}. Calculate the value of X if...`;
            if (isPartTest) {
                questionText = `[Part Test Specific Chapter Question] ${questionText}`;
            }

            questions.push({
                id: validId++,
                subject: subject,
                text: questionText,
                options: [
                    { id: 'a', text: `Option A for Q${i}` },
                    { id: 'b', text: `Option B for Q${i}` },
                    { id: 'c', text: `Option C for Q${i}` },
                    { id: 'd', text: `Option D for Q${i}` },
                ],
                correctOption: ['a', 'b', 'c', 'd'][Math.floor(Math.random() * 4)],
                explanation: "This is a detailed explanation of the solution based on fundamental concepts."
            });
        }
    });

    return questions;
};
