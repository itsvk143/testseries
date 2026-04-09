import { generateTests } from '../utils.js';

const class9Exams = ['NTSE', 'NSO', 'IMO', 'NSTSE'];

export const class9Tests = [
    ...class9Exams.flatMap(exam => [
        // Mock Tests for each exam type
        ...generateTests(`class-9`, 5, 'MOCK', exam, 'All Test').map(t => ({...t, title: `${exam} Mock Test ${t.id.split('-').pop()}`})),
        // Previous Year Papers
        ...generateTests(`class-9`, 5, 'PYQ', exam, 'All Test').map(t => ({...t, title: `${exam} Previous Year Paper ${t.id.split('-').pop()}`})),
        // Subject tests categorized by these exams (so they show up in Subjectwise tab)
        ...generateTests(`class-9`, 5, 'SUBJECT', exam, 'All Test').map(t => ({...t, title: `${exam} Practice Test ${t.id.split('-').pop()}`})),
    ])
];
