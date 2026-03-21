
import { generateTests, generateLiveTests, generateSundayTests } from '../utils.js';

export const jeeAdvancedChapters = {
    Physics: {
        '11': [
            "Units and Dimensions", "Measurements and Error Analysis", "Experimental Physics",
            "Kinematics", "Laws of Motion", "Work, Energy and Power", "Centre of Mass and Collisions",
            "Rotational Mechanics", "Gravitation", "Properties of Solids", "Properties of Fluids", "Oscillations", "Waves",
            "Thermal Space: Thermal Expansion", "Calorimetry", "Heat Transfer", "Thermodynamics", "Kinetic Theory of Gases", "Radiation"
        ],
        '12': [
            "Electrostatics", "Capacitance", "Current Electricity", "Magnetic Effects of Current", "Magnetism",
            "Electromagnetic Induction", "AC Circuits", "Geometrical Optics", "Wave Optics",
            "Atomic Physics", "Nuclear Physics", "Photoelectric Effect", "X-Rays", "Matter Waves",
            "Electromagnetic Waves and Spectrum"
        ]
    },
    Chemistry: {
        '11': [
            "General Topics (Mole Concept & Stoichiometry)", "States of Matter (Gases and Liquids)", "Atomic Structure",
            "Chemical Thermodynamics", "Chemical and Ionic Equilibrium", "Classification of Elements and Periodicity in Properties", "Hydrogen", "s-Block Elements",
            "Basic Principles of Organic Chemistry", "Alkanes, Alkenes, Alkynes"
        ],
        '12': [
            "Electrochemistry", "Chemical Kinetics", "Solid State", "Solutions", "Surface Chemistry",
            "p-Block Elements (Groups 13–18)", "d-Block Elements", "f-Block Elements", "Coordination Compounds",
            "Isolation of Metals (Metallurgy)", "Principles of Qualitative Analysis", "Environmental Chemistry",
            "Benzene and Phenols", "Haloalkanes and Haloarenes", "Alcohols, Phenols, and Ethers", "Aldehydes, Ketones, and Carboxylic Acids",
            "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life", "Practical Organic Chemistry"
        ]
    },
    Mathematics: {
        '11': ["Sets, Relations and Functions", "Trigonometry", "Analytical Geometry (2D)"],
        '12': ["Algebra", "Matrices and Determinants", "Probability and Statistics", "Analytical Geometry (3D)", "Differential Calculus", "Integral Calculus", "Vectors"]
    }
};

const allChapters = {
    Physics: [...jeeAdvancedChapters.Physics['11'], ...jeeAdvancedChapters.Physics['12']],
    Chemistry: [...jeeAdvancedChapters.Chemistry['11'], ...jeeAdvancedChapters.Chemistry['12']],
    Mathematics: [...jeeAdvancedChapters.Mathematics['11'], ...jeeAdvancedChapters.Mathematics['12']]
};

export const jeeAdvanceTests = [
    // Mock Tests
    ...generateTests('jee-advance', 10, 'MOCK', null, 'All Test'),
    ...generateTests('jee-advance', 5, 'MOCK', null, '11'),
    ...generateTests('jee-advance', 5, 'MOCK', null, '12'),

    // PYQs
    ...generateTests('jee-advance', 10, 'PYQ'),

    // Subject Tests
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Physics', 'All Test'),
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Physics', '11'),
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Physics', '12'),

    ...generateTests('jee-advance', 4, 'SUBJECT', 'Chemistry', 'All Test'),
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Chemistry', '11'),
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Chemistry', '12'),

    ...generateTests('jee-advance', 4, 'SUBJECT', 'Mathematics', 'All Test'),
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Mathematics', '11'),
    ...generateTests('jee-advance', 4, 'SUBJECT', 'Mathematics', '12'),

    // Chapter Tests
    ...generateTests('jee-advance', jeeAdvancedChapters.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-advance', jeeAdvancedChapters.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-advance', jeeAdvancedChapters.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-advance', jeeAdvancedChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-advance', jeeAdvancedChapters.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-advance', jeeAdvancedChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12'),

    ...generateLiveTests('jee-advance', 12),
    ...generateSundayTests('jee-advance', 2026, 2027, allChapters)
];
