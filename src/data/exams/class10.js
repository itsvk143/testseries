import { generateTests } from '../utils.js';

const class10Exams = ['NTSE', 'NSO', 'IMO', 'NSTSE'];

export const class10Tests = [
    ...class10Exams.flatMap(exam => [
        // Mock Tests for each exam type
        ...generateTests(`class-10`, 5, 'MOCK', exam, 'All Test').map(t => ({
            ...t, 
            title: `${exam} Full Test ${t.id.split('-').pop()}`,
            ...(exam === 'Board' ? { questionsCount: 'Subjective', totalMarks: 80, duration: 180 } : {})
        })),
        // Previous Year Papers
        ...generateTests(`class-10`, 5, 'PYQ', exam, 'All Test').map(t => ({
            ...t, 
            title: `${exam} Previous Year Paper ${t.id.split('-').pop()}`,
            ...(exam === 'Board' ? { questionsCount: 'Subjective', totalMarks: 80, duration: 180 } : {})
        })),
        // Subject tests categorized by these exams (so they show up in Subjectwise tab)
        ...generateTests(`class-10`, 5, 'SUBJECT', exam, 'All Test').map(t => ({
            ...t, 
            title: `${exam} Practice Test ${t.id.split('-').pop()}`,
            ...(exam === 'Board' ? { questionsCount: 'Subjective', totalMarks: 80, duration: 180 } : {})
        })),
    ])
];
