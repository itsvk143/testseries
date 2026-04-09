import { generateTests } from '../utils.js';

const class9Exams = ['NTSE', 'NSO', 'IMO', 'NSTSE'];

const SCHEMES = {
    'NTSE': { questionsCount: 100, duration: 120, totalMarks: 100 },
    'NSO': { questionsCount: 50, duration: 60, totalMarks: 60 },
    'IMO': { questionsCount: 50, duration: 60, totalMarks: 60 },
    'NSTSE': { questionsCount: 60, duration: 90, totalMarks: 60 },
};

export const class9Tests = [
    ...class9Exams.flatMap(exam => {
        const scheme = SCHEMES[exam] || {};
        return [
            // Mock Tests
            ...generateTests(`class-9`, 5, 'MOCK', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Full Test ${t.id.split('-').pop()}`,
                ...scheme
            })),
            // Previous Year Papers
            ...generateTests(`class-9`, 5, 'PYQ', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Previous Year Paper ${t.id.split('-').pop()}`,
                ...scheme
            })),
            // Subject tests
            ...generateTests(`class-9`, 5, 'SUBJECT', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Practice Test ${t.id.split('-').pop()}`,
                ...scheme
            })),
        ];
    })
];
