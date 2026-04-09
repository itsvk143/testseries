import { generateTests } from '../utils.js';

const board12Subjects = ['Physics', 'Chemistry', 'Maths', 'Biology', 'English'];

export const board12Tests = [
    ...board12Subjects.flatMap(subject => [
        // Mock Tests for each subject
        ...generateTests(`board-12`, 3, 'MOCK', subject, 'board-12').map(t => ({
            ...t, 
            title: `${subject} Mock Test ${t.id.split('-').pop()}`,
            questionsCount: 'Subjective',
            totalMarks: 80,
            duration: 180,
            subject: subject
        })),
        // Previous Year Papers
        ...generateTests(`board-12`, 3, 'PYQ', subject, 'board-12').map(t => ({
            ...t, 
            title: `${subject} Previous Year Paper ${t.id.split('-').pop()}`,
            questionsCount: 'Subjective',
            totalMarks: 80,
            duration: 180,
            subject: subject
        })),
        // Chapter tests
        ...generateTests(`board-12`, 5, 'CHAPTER', subject, 'board-12').map(t => ({
            ...t, 
            title: `${subject} Chapter Test ${t.id.split('-').pop()}`,
            questionsCount: 'Subjective',
            totalMarks: 40,
            duration: 90,
            subject: subject
        }))
    ])
];
