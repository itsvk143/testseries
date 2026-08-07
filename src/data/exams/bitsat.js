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
    English: {
        '12': ["Grammar", "Vocabulary", "Reading Comprehension", "Composition"]
    },
    LogicalReasoning: {
        '12': ["Verbal Reasoning", "Non-Verbal Reasoning"]
    }
};

export const bitsatTests = [
    // Mock Tests
    ...generateTests('bitsat', 5, 'MOCK', null, 'All Test').map(t => ({
        ...t,
        duration: 180,
        totalMarks: 390,
        questionsCount: 130
    })),

    // PYQs
    ...generateTests('bitsat', 5, 'PYQ').map(t => ({
        ...t,
        duration: 180,
        totalMarks: 390,
        questionsCount: 130
    })),

    // Subject Tests
    ...generateTests('bitsat', 3, 'SUBJECT', 'Physics', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 90, questionsCount: 30 })),
    ...generateTests('bitsat', 3, 'SUBJECT', 'Chemistry', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 90, questionsCount: 30 })),
    ...generateTests('bitsat', 3, 'SUBJECT', 'Mathematics', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 120, questionsCount: 40 })),

    // Chapter Tests
    ...generateTests('bitsat', bitsatChapters.Physics['12'], 'CHAPTER', 'Physics', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 }))
];
