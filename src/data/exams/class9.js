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
        const isMathsExam = exam === 'IMO';
        const isScienceExam = exam === 'NSO' || exam === 'NSTSE';
        const isGeneral = exam === 'NTSE';

        const scienceChapters = [
            "Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules", 
            "Structure of the Atom", "The Fundamental Unit of Life", "Tissues", 
            "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound"
        ];
        
        const mathsChapters = [
            "Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", 
            "Lines and Angles", "Triangles", "Quadrilaterals", "Circles", 
            "Heron’s Formula", "Surface Areas and Volumes", "Statistics", "Probability"
        ];

        let tests = [
            // Mock Tests
            ...generateTests(`class-9`, 5, 'MOCK', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Full Test ${t.id.split('-').pop()}`,
                ...scheme
            })),
            // PYQ
            ...generateTests(`class-9`, 5, 'PYQ', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} PYQ ${t.id.split('-').pop()}`,
                ...scheme
            })),
            // Subject tests
            ...generateTests(`class-9`, 5, 'SUBJECT', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Practice Test ${t.id.split('-').pop()}`,
                ...scheme
            })),
        ];

        // Add Chapters and Subtopics based on exam type
        if (isScienceExam || isGeneral) {
            scienceChapters.forEach(chapter => {
                tests.push(...generateTests(`class-9`, [chapter], 'CHAPTER', 'Science', 'All Test').map(t => ({
                    ...t, title: `${exam} Chapter: ${t.title}`, ...scheme
                })));
                tests.push(...generateTests(`class-9`, [chapter], 'SUBTOPIC', 'Science', 'All Test', chapter).map(t => ({
                    ...t, title: `${exam} Subtopic: ${t.title}`, ...scheme
                })));
            });
        }

        if (isMathsExam || isGeneral) {
            mathsChapters.forEach(chapter => {
                tests.push(...generateTests(`class-9`, [chapter], 'CHAPTER', 'Mathematics', 'All Test').map(t => ({
                    ...t, title: `${exam} Chapter: ${t.title}`, ...scheme
                })));
                tests.push(...generateTests(`class-9`, [chapter], 'SUBTOPIC', 'Mathematics', 'All Test', chapter).map(t => ({
                    ...t, title: `${exam} Subtopic: ${t.title}`, ...scheme
                })));
            });
        }

        return tests;
    })
];
