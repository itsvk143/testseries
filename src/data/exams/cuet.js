import { generateTests } from '../utils.js';

export const cuetChapters = {
    Physics: {
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current", "EMI & AC", "Electromagnetic Waves", "Optics", "Dual Nature of Matter", "Atoms & Nuclei", "Electronic Devices"]
    },
    Chemistry: {
        '12': ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "p-Block Elements", "d-Block & f-Block Elements", "Coordination Compounds", "Haloalkanes & Haloarenes", "Alcohols, Phenols & Ethers", "Aldehydes, Ketones & Carboxylic Acids", "Organic Compounds containing Nitrogen", "Biomolecules", "Polymers", "Chemistry in Everyday Life"]
    },
    Mathematics: {
        '12': ["Relations and Functions", "Algebra (Matrices/Determinants)", "Calculus", "Vectors and 3D Geometry", "Linear Programming", "Probability"]
    },
    Biology: {
        '12': ["Reproduction", "Genetics and Evolution", "Biology and Human Welfare", "Biotechnology", "Ecology and Environment"]
    },
    English: {
        '12': ["Reading Comprehension", "Verbal Ability", "Choosing the Correct Word", "Synonyms & Antonyms", "Vocabulary"]
    }
};

export const cuetTests = [
    // Mock Tests
    ...generateTests('cuet', 5, 'MOCK', null, 'All Test').map(t => ({
        ...t,
        duration: 45,
        totalMarks: 200,
        questionsCount: 40
    })),

    // PYQs
    ...generateTests('cuet', 5, 'PYQ').map(t => ({
        ...t,
        duration: 45,
        totalMarks: 200,
        questionsCount: 40
    })),

    // Subject Tests
    ...generateTests('cuet', 3, 'SUBJECT', 'Physics', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', 3, 'SUBJECT', 'Chemistry', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', 3, 'SUBJECT', 'Mathematics', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', 3, 'SUBJECT', 'Biology', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', 3, 'SUBJECT', 'English', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),

    // Chapter Tests
    ...generateTests('cuet', cuetChapters.Physics['12'], 'CHAPTER', 'Physics', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', cuetChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', cuetChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', cuetChapters.Biology['12'], 'CHAPTER', 'Biology', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 })),
    ...generateTests('cuet', cuetChapters.English['12'], 'CHAPTER', 'English', '12').map(t => ({ ...t, duration: 45, totalMarks: 200, questionsCount: 40 }))
];
