
import { generateTests, generatePartTests, generateLiveTests, generateSundayTests } from '../utils.js';

export const neetChapters = {
    Physics: {
        '11': ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power", "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices", "Experimental Skills"]
    },
    Chemistry: {
        '11': ["Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Bonding and Molecular Structure", "Chemical Thermodynamics", "Solutions", "Equilibrium", "Redox Reactions and Electrochemistry", "Chemical Kinetics", "Classification of Elements and Periodicity in Properties", "P-Block Elements"],
        '12': ["d and f- Block Elements", "Co-ordination Compounds", "Purification and Characterisation of Organic Compounds", "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens", "Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry"]
    },
    Botany: {
        '11': ["Diversity in Living World", "Plant Physiology", "Cell Structure and Function"],
        '12': ["Genetics and Evolution", "Ecology and Environment"]
    },
    Zoology: {
        '11': ["Structural Organisation in Animals and Plants", "Human Physiology"],
        '12': ["Reproduction", "Biology and Human Welfare", "Biotechnology and Its Applications"]
    }
};

const allChapters = {
    Physics: [...neetChapters.Physics['11'], ...neetChapters.Physics['12']],
    Chemistry: [...neetChapters.Chemistry['11'], ...neetChapters.Chemistry['12']],
    Botany: [...neetChapters.Botany['11'], ...neetChapters.Botany['12']],
    Zoology: [...neetChapters.Zoology['11'], ...neetChapters.Zoology['12']]
};

export const neetTests = [
    // Mock Tests
    ...generateTests('neet', 10, 'MOCK', null, 'All Test'),
    ...generateTests('neet', 5, 'MOCK', null, '11'),
    ...generateTests('neet', 5, 'MOCK', null, '12'),

    // PYQs (Usually All Test)
    ...generateTests('neet', 10, 'PYQ'),

    // Subject Tests
    ...generateTests('neet', 4, 'SUBJECT', 'Physics', 'All Test'),
    ...generateTests('neet', 4, 'SUBJECT', 'Physics', '11'),
    ...generateTests('neet', 4, 'SUBJECT', 'Physics', '12'),

    ...generateTests('neet', 4, 'SUBJECT', 'Chemistry', 'All Test'),
    ...generateTests('neet', 4, 'SUBJECT', 'Chemistry', '11'),
    ...generateTests('neet', 4, 'SUBJECT', 'Chemistry', '12'),

    ...generateTests('neet', 4, 'SUBJECT', 'Botany', 'All Test'),
    ...generateTests('neet', 4, 'SUBJECT', 'Botany', '11'),
    ...generateTests('neet', 4, 'SUBJECT', 'Botany', '12'),

    ...generateTests('neet', 4, 'SUBJECT', 'Zoology', 'All Test'),
    ...generateTests('neet', 4, 'SUBJECT', 'Zoology', '11'),
    ...generateTests('neet', 4, 'SUBJECT', 'Zoology', '12'),

    // Chapter Tests
    ...generateTests('neet', neetChapters.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('neet', neetChapters.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('neet', neetChapters.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('neet', neetChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('neet', neetChapters.Botany['11'], 'CHAPTER', 'Botany', '11'),
    ...generateTests('neet', neetChapters.Botany['12'], 'CHAPTER', 'Botany', '12'),
    ...generateTests('neet', neetChapters.Zoology['11'], 'CHAPTER', 'Zoology', '11'),
    ...generateTests('neet', neetChapters.Zoology['12'], 'CHAPTER', 'Zoology', '12'),

    ...generateLiveTests('neet', 12),
    ...generateSundayTests('neet', 2026, 2027, allChapters)
];
