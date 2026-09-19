import { generateTests } from '../utils.js';

export const bitsatChapters = {
    Physics: {
        '11': ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power", "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices"]
    },
    Chemistry: {
        '11': ["Chemical Bonding and Molecular Structure", "States of Matter", "Chemical Thermodynamics", "Equilibrium", "Redox Reactions and Electrochemistry", "s-Block & p-Block Elements", "Some Basic Principles of Organic Chemistry", "Hydrocarbons"],
        '12': ["Solid State", "Solutions", "Redox Reactions and Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Co-ordination Compounds", "Organic Compounds Containing Halogens", "Organic Compounds Containing Oxygen", "Aldehydes & Ketones", "Organic Compounds Containing Nitrogen", "Biomolecules"]
    },
    Mathematics: {
        '11': ["Complex Numbers", "Quadratic Equations", "Sequences & Series", "Permutations & Combinations", "Binomial Theorem", "Trigonometric Identities", "Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)"],
        '12': ["Matrices & Determinants", "Limits, Continuity & Differentiability", "Application of Derivatives", "Differential Equations", "Vectors", "3D Geometry", "Probability", "Linear Programming", "Statistics"]
    },
    'English Proficiency': {
        '12': ["Vocabulary", "Grammar", "Sentence Skills", "Reading Comprehension"]
    },
    'Logical Reasoning': {
        '12': ["Verbal Reasoning", "Non-Verbal Reasoning", "Analytical Reasoning"]
    }
};

export const bitsatTests = [
    // 24 BITSAT Full-Length Mock Tests (130 Questions: 30 Phy, 30 Chem, 40 Math, 10 Eng, 20 LR)
    ...generateTests('bitsat', 24, 'MOCK', null, 'All Test').map(t => ({
        ...t,
        duration: 180,
        totalMarks: 390,
        questionsCount: 130,
        description: 'Comprehensive 130-Question BITSAT Mock Test (Physics 30, Chemistry 30, Mathematics 40, English 10, Logical Reasoning 20).'
    })),

    // PYQs
    ...generateTests('bitsat', 5, 'PYQ').map(t => ({
        ...t,
        duration: 180,
        totalMarks: 390,
        questionsCount: 130
    })),

    // Subject Tests
    ...generateTests('bitsat', 5, 'SUBJECT', 'Physics', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 90, questionsCount: 30 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'Chemistry', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 90, questionsCount: 30 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'Mathematics', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 120, questionsCount: 40 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'English Proficiency', 'All Test').map(t => ({ ...t, duration: 30, totalMarks: 45, questionsCount: 15 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'Logical Reasoning', 'All Test').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),

    // Chapter Tests
    ...generateTests('bitsat', bitsatChapters.Physics['12'], 'CHAPTER', 'Physics', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters['English Proficiency']['12'], 'CHAPTER', 'English Proficiency', '12').map(t => ({ ...t, duration: 30, totalMarks: 45, questionsCount: 15 })),
    ...generateTests('bitsat', bitsatChapters['Logical Reasoning']['12'], 'CHAPTER', 'Logical Reasoning', '12').map(t => ({ ...t, duration: 30, totalMarks: 60, questionsCount: 20 }))
];
