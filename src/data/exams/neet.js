import { generateTests, generatePartTests, generateLiveTests, generateSundayTests } from '../utils.js';
import { neetSyllabus } from '../chapters.js';

export const neetChapters = neetSyllabus;

const allChapters = {
    Physics: [...neetChapters.Physics['11'], ...neetChapters.Physics['12']],
    Chemistry: [...neetChapters.Chemistry['11'], ...neetChapters.Chemistry['12']],
    Botany: [...neetChapters.Botany['11'], ...neetChapters.Botany['12']],
    Zoology: [...neetChapters.Zoology['11'], ...neetChapters.Zoology['12']]
};

const chunkArray = (array, numChunks) => {
    const result = [];
    const baseSize = Math.floor(array.length / numChunks);
    let remainder = array.length % numChunks;
    let offset = 0;
    
    for (let i = 0; i < numChunks; i++) {
        const size = baseSize + (remainder > 0 ? 1 : 0);
        result.push(array.slice(offset, offset + size));
        offset += size;
        remainder--;
    }
    return result;
};

const generate24Tests = (category, subjectName, syllabus) => {
    const tests = [];
    const class11 = syllabus[subjectName]['11'];
    const class12 = syllabus[subjectName]['12'];

    // Tests 1-5: Class 11 Partial Revision
    const class11Chunks = chunkArray(class11, 5);
    class11Chunks.forEach((chunk, i) => {
        tests.push({
            id: `${category}-SUBJECT-${subjectName}-11-REV-${i + 1}`,
            title: `${subjectName} Test ${i + 1}`,
            type: 'SUBJECT',
            subject: subjectName,
            classGrade: '11',
            chapters: chunk,
            category,
            duration: 60,
            totalMarks: category === 'neet' ? 180 : 100,
            questionsCount: category === 'neet' ? 45 : 25,
            difficulty: 'Mixed',
            description: `Class 11\nRevision Test ${i + 1}`,
            syllabus: { [subjectName]: chunk }
        });
    });

    // Test 6: Class 11 Full Revision
    tests.push({
        id: `${category}-SUBJECT-${subjectName}-11-REV-FULL`,
        title: `${subjectName} Test 6`,
        type: 'SUBJECT',
        subject: subjectName,
        classGrade: '11',
        chapters: class11,
        category,
        duration: 60,
        totalMarks: category === 'neet' ? 180 : 100,
        questionsCount: category === 'neet' ? 45 : 25,
        difficulty: 'Mixed',
        description: `Class 11\nComplete Syllabus Revision`,
        syllabus: { [subjectName]: ['All Included Class 11 Chapters'] }
    });

    // Tests 7-12: Class 11 Full Mocks
    for (let i = 1; i <= 6; i++) {
        tests.push({
            id: `${category}-SUBJECT-${subjectName}-11-MOCK-${i}`,
            title: `${subjectName} Test ${6 + i}`,
            type: 'SUBJECT',
            subject: subjectName,
            classGrade: '11',
            chapters: class11,
            category,
            duration: 60,
            totalMarks: category === 'neet' ? 180 : 100,
            questionsCount: category === 'neet' ? 45 : 25,
            difficulty: 'Mixed',
            description: `Class 11\nFull Syllabus Mock Test ${i}`,
            syllabus: { [subjectName]: ['All Included Class 11 Chapters'] }
        });
    }

    // Tests 13-17: Class 12 Partial Revision
    const class12Chunks = chunkArray(class12, 5);
    class12Chunks.forEach((chunk, i) => {
        tests.push({
            id: `${category}-SUBJECT-${subjectName}-12-REV-${i + 1}`,
            title: `${subjectName} Test ${12 + i + 1}`,
            type: 'SUBJECT',
            subject: subjectName,
            classGrade: '12',
            chapters: chunk,
            category,
            duration: 60,
            totalMarks: category === 'neet' ? 180 : 100,
            questionsCount: category === 'neet' ? 45 : 25,
            difficulty: 'Mixed',
            description: `Class 12\nRevision Test ${i + 1}`,
            syllabus: { [subjectName]: chunk }
        });
    });

    // Test 18: Class 12 Full Revision
    tests.push({
        id: `${category}-SUBJECT-${subjectName}-12-REV-FULL`,
        title: `${subjectName} Test 18`,
        type: 'SUBJECT',
        subject: subjectName,
        classGrade: '12',
        chapters: class12,
        category,
        duration: 60,
        totalMarks: category === 'neet' ? 180 : 100,
        questionsCount: category === 'neet' ? 45 : 25,
        difficulty: 'Mixed',
        description: `Class 12\nComplete Syllabus Revision`,
        syllabus: { [subjectName]: ['All Included Class 12 Chapters'] }
    });

    // Tests 19-24: Class 12 Full Mocks
    for (let i = 1; i <= 6; i++) {
        tests.push({
            id: `${category}-SUBJECT-${subjectName}-12-MOCK-${i}`,
            title: `${subjectName} Test ${18 + i}`,
            type: 'SUBJECT',
            subject: subjectName,
            classGrade: '12',
            chapters: class12,
            category,
            duration: 60,
            totalMarks: category === 'neet' ? 180 : 100,
            questionsCount: category === 'neet' ? 45 : 25,
            difficulty: 'Mixed',
            description: `Class 12\nFull Syllabus Mock Test ${i}`,
            syllabus: { [subjectName]: ['All Included Class 12 Chapters'] }
        });
    }

    return tests;
};

const buildAllSubjectTests = () => {
    return [
        ...generate24Tests('neet', 'Physics', neetChapters),
        ...generate24Tests('neet', 'Chemistry', neetChapters),
        ...generate24Tests('neet', 'Botany', neetChapters),
        ...generate24Tests('neet', 'Zoology', neetChapters)
    ];
};

export const neetTests = [
    // Mock Tests
    ...generateTests('neet', 10, 'MOCK', null, 'All Test'),
    ...generateTests('neet', 5, 'MOCK', null, '11'),
    ...generateTests('neet', 5, 'MOCK', null, '12'),

    // PYQs
    ...generateTests('neet', 10, 'PYQ'),

    // Subject Tests (24 per subject exactly as per NMC Guidelines)
    ...buildAllSubjectTests(),

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
    ...generateSundayTests('neet', 2026, 2027, allChapters),

    // Subtopic Tests (Physics)
    ...generateTests('neet', ["Units and dimensions", "Error analysis", "Significant figures", "Dimensional analysis and applications", "Least count and precision"], 'SUBTOPIC', 'Physics', 'All Test', 'Units & Measurements'),
    ...generateTests('neet', ["Graphical analysis of motion (x-t, v-t graphs)", "Motion in a straight line/plane", "Projectile motion", "Relative velocity", "Uniform circular motion", "Uniformly accelerated motion and equations"], 'SUBTOPIC', 'Physics', 'All Test', 'Motion in a Straight Line'),
    ...generateTests('neet', ["Newton's laws", "Impulse", "Conservation of momentum", "Friction", "Banking of roads", "Connected motion and pulley problems", "Equilibrium of concurrent forces"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('neet', ["Work-energy theorem", "Kinetic/potential energy", "Conservative forces and potential energy", "Conservation of mechanical energy", "Vertical circular motion", "Power and variable force", "Elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy & Power'),
    ...generateTests('neet', ["Center of mass", "Torque", "Moment of inertia", "Theorems of parallel and perpendicular axes", "Angular momentum conservation", "Rolling motion"], 'SUBTOPIC', 'Physics', 'All Test', 'System of Particles & Rotational Motion'),
    ...generateTests('neet', ["Kepler's laws", "Newton's law of gravitation", "Gravitational potential energy", "Escape velocity", "Acceleration due to gravity (variation with height, depth, latitude)", "Orbital velocity and satellite motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('neet', ["Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)", "Surface tension, surface energy, and capillarity", "Thermal expansion and calorimetry", "Stefan's law of radiation"], 'SUBTOPIC', 'Physics', 'All Test', 'Mechanical Properties of Solids'),
    ...generateTests('neet', ["Thermal equilibrium", "Laws of thermodynamics (zeroth, first, second)", "Isothermal and adiabatic processes", "Work done in thermodynamic processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('neet', ["Equation of state", "Kinetic interpretation of temperature", "Degrees of freedom", "Law of equipartition of energy", "Mean free path and molecular speeds (rms, average, most probable)"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory'),
    ...generateTests('neet', ["Simple Harmonic Motion (SHM)", "Wave motion", "Superposition of waves", "Standing waves in strings and organ pipes", "Beats"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations'),
    ...generateTests('neet', ["Coulomb's law", "Electric field/flux", "Gauss's law", "Potential energy", "Equipotential surfaces", "Electric dipole and dipole moment", "Capacitors", "Combination of capacitors and energy stored", "Dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electric Charges & Fields'),
    ...generateTests('neet', ["Drift velocity and mobility", "Ohm's law", "Resistivity", "Electrical energy and power", "Internal resistance of a cell and EMF", "Kirchhoff's laws", "Wheatstone bridge", "Meter bridge"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('neet', ["Biot-Savart law and applications", "Ampere's law", "Magnetic field calculation", "Lorentz force", "Force between two parallel currents", "Moving coil galvanometer and conversion to ammeter/voltmeter", "Magnetic properties (dia, para, ferromagnetism)"], 'SUBTOPIC', 'Physics', 'All Test', 'Moving Charges & Magnetism'),
    ...generateTests('neet', ["Faraday's law", "Lenz's law", "Self and mutual inductance", "Transformers and AC generator", "RMS values", "AC circuits", "LC oscillations"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction'),
    ...generateTests('neet', ["Displacement current", "EM spectrum", "Transverse nature of EM waves", "Energy density and Poynting vector"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('neet', ["Photoelectric effect", "de Broglie wavelength", "Bohr's model", "Wave-particle duality", "Einstein's photoelectric equation and work function"], 'SUBTOPIC', 'Physics', 'All Test', 'Dual Nature of Radiation & Matter'),
    ...generateTests('neet', ["Atomic models", "Rutherford's scattering and Bohr's quantization", "Hydrogen spectrum and Rydberg formula", "Mass defect and nuclear force", "Binding energy", "Nuclear reactions", "Nuclear fission and fusion"], 'SUBTOPIC', 'Physics', 'All Test', 'Atoms'),
    ...generateTests('neet', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry)
    ...generateTests('neet', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('neet', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('neet', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Thermodynamics'),
    ...generateTests('neet', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('neet', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('neet', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements and Periodicity'),
    ...generateTests('neet', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding and Molecular Structure'),
    ...generateTests('neet', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'The p-Block Elements'),
    ...generateTests('neet', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Organic Chemistry – Some Basic Principles and Techniques'),
    ...generateTests('neet', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('neet', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('neet', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('neet', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('neet', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('neet', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('neet', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes and Haloarenes'),
    ...generateTests('neet', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols and Ethers'),
    ...generateTests('neet', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones and Carboxylic Acids'),
    ...generateTests('neet', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('neet', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    
    // Subtopic Tests (Botany)
    ...generateTests('neet', ["Principles of Inheritance", "Molecular Basis of Inheritance"], 'SUBTOPIC', 'Botany', 'All Test', 'Molecular Basis of Inheritance'),
    ...generateTests('neet', ["Photosynthesis", "Respiration", "Growth & Development"], 'SUBTOPIC', 'Botany', 'All Test', 'Photosynthesis in Higher Plants'),
    ...generateTests('neet', ["Biological Classification", "Plant Kingdom"], 'SUBTOPIC', 'Botany', 'All Test', 'Biological Classification'),
    ...generateTests('neet', ["Sexual Reproduction in Flowering Plants"], 'SUBTOPIC', 'Botany', 'All Test', 'Sexual Reproduction in Flowering Plants'),
    ...generateTests('neet', ["Cell Life & Division", "Biomolecules"], 'SUBTOPIC', 'Botany', 'All Test', 'Cell Cycle and Cell Division'),
    ...generateTests('neet', ["Morphology", "Anatomy"], 'SUBTOPIC', 'Botany', 'All Test', 'Morphology of Flowering Plants'),
    ...generateTests('neet', ["Organisms and Populations", "Ecosystem Structure", "Biodiversity & Conservation"], 'SUBTOPIC', 'Botany', 'All Test', 'Organisms and Populations'),
    
    // Subtopic Tests (Zoology)
    ...generateTests('neet', ["Basis of classification", "phylum-wise features"], 'SUBTOPIC', 'Zoology', 'All Test', 'Animal Kingdom'),
    ...generateTests('neet', ["Animal tissues", "cockroach anatomy and morphology", "frog morphology and anatomy"], 'SUBTOPIC', 'Zoology', 'All Test', 'Structural Organisation in Animals'),
    ...generateTests('neet', ["Carbohydrates, proteins, lipids, nucleic acids, and enzymes"], 'SUBTOPIC', 'Zoology', 'All Test', 'Digestion and Absorption'),
    ...generateTests('neet', ["Breathing & Exchange of Gases", "Body Fluids & Circulation", "Excretory Products & Elimination", "Locomotion & Movement", "Neural Control & Coordination", "Chemical Coordination & Integration"], 'SUBTOPIC', 'Zoology', 'All Test', 'Breathing and Exchange of Gases'),
    ...generateTests('neet', ["Human reproduction", "Evolution theories"], 'SUBTOPIC', 'Zoology', 'All Test', 'Human Reproduction'),
    ...generateTests('neet', ["Common diseases", "immunity", "cancer", "drug abuse"], 'SUBTOPIC', 'Zoology', 'All Test', 'Human Health and Disease'),
    ...generateTests('neet', ["Principles & Processes", "Applications"], 'SUBTOPIC', 'Zoology', 'All Test', 'Microbes in Human Welfare')
];
