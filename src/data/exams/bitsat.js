import { generateTests } from '../utils.js';

export const bitsatChapters = {
    Physics: {
        '11': ["Units & Measurement", "Kinematics", "Newton's Laws", "Work & Energy", "Rotational Motion", "Gravitation", "Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations & Waves"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current", "EMI & AC", "EM Waves", "Optics", "Dual Nature of Matter", "Atoms & Nuclei", "Electronic Devices"]
    },
    Chemistry: {
        '11': ["Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "s-Block & p-Block Elements", "Organic Chemistry Basics", "Hydrocarbons"],
        '12': ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Coordination Compounds", "Haloalkanes & Haloarenes", "Alcohols, Phenols & Ethers", "Aldehydes & Ketones", "Amines", "Biomolecules"]
    },
    Mathematics: {
        '11': ["Complex Numbers", "Quadratic Equations", "Sequences & Series", "P&C", "Binomial Theorem", "Trigonometry", "Straight Lines", "Circles", "Conics"],
        '12': ["Matrices & Determinants", "Limits & Continuity", "Calculus", "Differential Equations", "Vectors & 3D", "Probability", "Linear Programming", "Statistics"]
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
