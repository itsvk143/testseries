import { generateTests } from '../utils.js';

const board10Subjects = ['Maths', 'Science', 'Social', 'English', 'Hindi'];

export const board10Tests = [
    ...board10Subjects.flatMap(subject => [
        // Mock Tests for each subject
        ...generateTests(`board-10`, 3, 'MOCK', subject, 'board-10').map(t => ({
            ...t, 
            title: `${subject} Full Test ${t.id.split('-').pop()}`,
            questionsCount: 'Subjective',
            totalMarks: 80,
            duration: 180,
            subject: subject
        })),
        // Previous Year Papers
        ...generateTests(`board-10`, 3, 'PYQ', subject, 'board-10').map(t => ({
            ...t, 
            title: `${subject} Previous Year Paper ${t.id.split('-').pop()}`,
            questionsCount: 'Subjective',
            totalMarks: 80,
            duration: 180,
            subject: subject
        })),
        // Chapter tests
        ...generateTests(`board-10`, 5, 'CHAPTER', subject, 'board-10').map(t => ({
            ...t, 
            title: `${subject} Chapter Test ${t.id.split('-').pop()}`,
            questionsCount: 'Subjective',
            totalMarks: 40,
            duration: 90,
            subject: subject
        }))
    ])
];
