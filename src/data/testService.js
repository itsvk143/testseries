
import { neetTests } from './exams/neet';
import { jeeMainsTests } from './exams/jeeMains';
import { bitsatTests } from './exams/bitsat';
import neetPyqData from './questionsneet/pyq.json';

export const getTestById = (id) => {
    const all = [
        ...neetTests, 
        ...jeeMainsTests, 
                ...bitsatTests
    ];
    return all.find(t => t.id === id);
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

    // No manual questions found for this test.
    // Do NOT generate placeholder mock questions — the app is DB-driven.
    // Real questions must be added via the Admin Panel.
    return [];

};
