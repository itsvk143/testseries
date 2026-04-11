import { generateTests } from '../utils.js';

const class10Exams = ['NTSE', 'NSO', 'IMO', 'NSTSE'];

const SCHEMES = {
    'NTSE': { questionsCount: 100, duration: 120, totalMarks: 100 },
    'NSO': { questionsCount: 50, duration: 60, totalMarks: 60 },
    'IMO': { questionsCount: 50, duration: 60, totalMarks: 60 },
    'NSTSE': { questionsCount: 60, duration: 90, totalMarks: 60 },
};

export const class10Tests = [
    ...class10Exams.flatMap(exam => {
        const scheme = SCHEMES[exam] || {};
        const isMathsExam = exam === 'IMO';
        const isScienceExam = exam === 'NSO' || exam === 'NSTSE';
        const isGeneral = exam === 'NTSE';

        const scienceChapters = [
            "Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals", 
            "Carbon and its Compounds", "Life Processes", "Control and Coordination", 
            "How do Organisms Reproduce?", "Heredity", "Light – Reflection and Refraction", 
            "Human Eye", "Electricity", "Magnetic Effects of Electric Current"
        ];
        
        const mathsChapters = [
            "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", 
            "Quadratic Equations", "Arithmetic Progressions", "Triangles", 
            "Coordinate Geometry", "Introduction to Trigonometry", "Some Applications of Trigonometry", 
            "Circles", "Areas Related to Circles", "Surface Areas and Volumes", 
            "Statistics", "Probability"
        ];

        let tests = [
            // Mock Tests
            ...generateTests(`class-10`, 5, 'MOCK', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Full Test ${t.id.split('-').pop()}`,
                ...scheme
            })),
            // PYQ
            ...generateTests(`class-10`, 5, 'PYQ', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} PYQ ${t.id.split('-').pop()}`,
                ...scheme
            })),
            // Subject tests
            ...generateTests(`class-10`, 5, 'SUBJECT', exam, 'All Test').map(t => ({
                ...t, 
                title: `${exam} Practice Test ${t.id.split('-').pop()}`,
                ...scheme
            })),
        ];

        // Add Chapters and Subtopics based on exam type
        if (isScienceExam || isGeneral) {
            scienceChapters.forEach(chapter => {
                tests.push(...generateTests(`class-10`, [chapter], 'CHAPTER', 'Science', 'All Test').map(t => ({
                    ...t, title: `${exam} Chapter: ${t.title}`, ...scheme
                })));
                tests.push(...generateTests(`class-10`, [chapter], 'SUBTOPIC', 'Science', 'All Test', chapter).map(t => ({
                    ...t, title: `${exam} Subtopic: ${t.title}`, ...scheme
                })));
            });
        }

        if (isMathsExam || isGeneral) {
            mathsChapters.forEach(chapter => {
                tests.push(...generateTests(`class-10`, [chapter], 'CHAPTER', 'Mathematics', 'All Test').map(t => ({
                    ...t, title: `${exam} Chapter: ${t.title}`, ...scheme
                })));
                tests.push(...generateTests(`class-10`, [chapter], 'SUBTOPIC', 'Mathematics', 'All Test', chapter).map(t => ({
                    ...t, title: `${exam} Subtopic: ${t.title}`, ...scheme
                })));
            });
        }

        return tests;
    })
];
