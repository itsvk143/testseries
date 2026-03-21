
import { generateTests, generatePartTests, generateLiveTests, generateSundayTests } from '../utils.js';

export const jeeMainsChapters = {
    Physics: {
        '11': ["Units & Measurements", "Kinematics", "Laws of Motion", "Work, Energy, Power", "Rotational Motion", "Gravitation", "Properties of Solids & Liquids", "Thermodynamics", "Kinetic Theory of Gases"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current", "EMI & AC", "Electromagnetic Waves", "Wave Optics", "Ray Optics", "Modern Physics (Dual Nature, Atoms, Nuclei, Semiconductors)"]
    },
    Chemistry: {
        '11': ["Mole Concept", "Atomic Structure", "States of Matter", "Thermodynamics", "Equilibrium", "Periodic Table", "Chemical Bonding", "General Organic Chemistry", "Hydrocarbons"],
        '12': ["Kinetics", "Electrochemistry", "Solutions", "p-Block", "d-Block", "Coordination Compounds", "Qualitative Analysis", "Halogen Compounds", "Oxygen Compounds", "Nitrogen Compounds", "Biomolecules", "Polymers"]
    },
    Mathematics: {
        '11': ["Complex Numbers", "Quadratic Equations", "Sequences & Series", "Permutations & Combinations", "Binomial Theorem", "Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)", "Trigonometric Identities"],
        '12': ["Matrices & Determinants", "Limits, Continuity & Differentiability", "Application of Derivatives", "Integrals", "Differential Equations", "Areas", "Vectors", "3D Geometry", "Inverse Trigonometric Functions", "Probability", "Statistics"]
    }
};

const allChapters = {
    Physics: [...jeeMainsChapters.Physics['11'], ...jeeMainsChapters.Physics['12']],
    Chemistry: [...jeeMainsChapters.Chemistry['11'], ...jeeMainsChapters.Chemistry['12']],
    Mathematics: [...jeeMainsChapters.Mathematics['11'], ...jeeMainsChapters.Mathematics['12']]
};

export const jeeMainsTests = [
    // Mock Tests
    ...generateTests('jee-mains', 10, 'MOCK', null, 'All Test'),
    ...generateTests('jee-mains', 5, 'MOCK', null, '11'),
    ...generateTests('jee-mains', 5, 'MOCK', null, '12'),

    // PYQs
    ...generateTests('jee-mains', 10, 'PYQ'),

    // Subject Tests
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Physics', 'All Test'),
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Physics', '11'),
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Physics', '12'),

    ...generateTests('jee-mains', 4, 'SUBJECT', 'Chemistry', 'All Test'),
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Chemistry', '11'),
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Chemistry', '12'),

    ...generateTests('jee-mains', 4, 'SUBJECT', 'Mathematics', 'All Test'),
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Mathematics', '11'),
    ...generateTests('jee-mains', 4, 'SUBJECT', 'Mathematics', '12'),

    // Chapter Tests
    ...generateTests('jee-mains', jeeMainsChapters.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-mains', jeeMainsChapters.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-mains', jeeMainsChapters.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12'),

    ...generateLiveTests('jee-mains', 12),
    ...generateSundayTests('jee-mains', 2026, 2027, allChapters)
];
