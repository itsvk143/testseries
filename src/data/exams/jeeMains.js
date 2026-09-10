import { generateTests, generatePartTests, generateLiveTests, generateSundayTests } from '../utils.js';
import { jeeMainsSyllabus } from '../chapters.js';

export const jeeMainsChapters = jeeMainsSyllabus;

const allChapters = {
    Physics: [...jeeMainsChapters.Physics['11'], ...jeeMainsChapters.Physics['12']],
    Chemistry: [...jeeMainsChapters.Chemistry['11'], ...jeeMainsChapters.Chemistry['12']],
    Mathematics: [...jeeMainsChapters.Mathematics['11'], ...jeeMainsChapters.Mathematics['12']]
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
            totalMarks: 100,
            questionsCount: 25,
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
        totalMarks: 100,
        questionsCount: 25,
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
            totalMarks: 100,
            questionsCount: 25,
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
            totalMarks: 100,
            questionsCount: 25,
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
        totalMarks: 100,
        questionsCount: 25,
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
            totalMarks: 100,
            questionsCount: 25,
            difficulty: 'Mixed',
            description: `Class 12\nFull Syllabus Mock Test ${i}`,
            syllabus: { [subjectName]: ['All Included Class 12 Chapters'] }
        });
    }

    return tests;
};

const buildAllSubjectTests = () => {
    return [
        ...generate24Tests('jee-mains', 'Physics', jeeMainsChapters),
        ...generate24Tests('jee-mains', 'Chemistry', jeeMainsChapters),
        ...generate24Tests('jee-mains', 'Mathematics', jeeMainsChapters)
    ];
};

export const jeeMainsTests = [
    // Mock Tests
    ...generateTests('jee-mains', 10, 'MOCK', null, 'All Test'),
    ...generateTests('jee-mains', 5, 'MOCK', null, '11'),
    ...generateTests('jee-mains', 5, 'MOCK', null, '12'),

    // PYQs
    ...generateTests('jee-mains', 10, 'PYQ'),

    // Subject Tests (24 per subject exactly as per NMC Guidelines)
    ...buildAllSubjectTests(),

    // Chapter Tests
    ...generateTests('jee-mains', jeeMainsChapters.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-mains', jeeMainsChapters.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-mains', jeeMainsChapters.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12'),

    ...generateLiveTests('jee-mains', 12),
    ...generateSundayTests('jee-mains', 2026, 2027, allChapters),

    ...generateTests('jee-mains', ["Units and dimensions", "Error analysis", "Significant figures", "Dimensional analysis and applications", "Least count and precision"], 'SUBTOPIC', 'Physics', 'All Test', 'Units & Measurements'),
    ...generateTests('jee-mains', ["Graphical analysis of motion (x-t, v-t graphs)", "Motion in a straight line/plane", "Projectile motion", "Relative velocity", "Uniform circular motion", "Uniformly accelerated motion and equations"], 'SUBTOPIC', 'Physics', 'All Test', 'Motion in a Straight Line'),
    ...generateTests('jee-mains', ["Newton's laws", "Impulse", "Conservation of momentum", "Friction", "Banking of roads", "Connected motion and pulley problems", "Equilibrium of concurrent forces"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('jee-mains', ["Work-energy theorem", "Kinetic/potential energy", "Conservative forces and potential energy", "Conservation of mechanical energy", "Vertical circular motion", "Power and variable force", "Elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy & Power'),
    ...generateTests('jee-mains', ["Center of mass", "Torque", "Moment of inertia", "Theorems of parallel and perpendicular axes", "Angular momentum conservation", "Rolling motion"], 'SUBTOPIC', 'Physics', 'All Test', 'System of Particles & Rotational Motion'),
    ...generateTests('jee-mains', ["Kepler's laws", "Newton's law of gravitation", "Gravitational potential energy", "Escape velocity", "Acceleration due to gravity (variation with height, depth, latitude)", "Orbital velocity and satellite motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('jee-mains', ["Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)", "Surface tension, surface energy, and capillarity", "Thermal expansion and calorimetry", "Stefan's law of radiation"], 'SUBTOPIC', 'Physics', 'All Test', 'Mechanical Properties of Solids'),
    ...generateTests('jee-mains', ["Thermal equilibrium", "Laws of thermodynamics (zeroth, first, second)", "Isothermal and adiabatic processes", "Work done in thermodynamic processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('jee-mains', ["Equation of state", "Kinetic interpretation of temperature", "Degrees of freedom", "Law of equipartition of energy", "Mean free path and molecular speeds (rms, average, most probable)"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory'),
    ...generateTests('jee-mains', ["Simple Harmonic Motion (SHM)", "Wave motion", "Superposition of waves", "Standing waves in strings and organ pipes", "Beats"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations'),
    ...generateTests('jee-mains', ["Coulomb's law", "Electric field/flux", "Gauss's law", "Potential energy", "Equipotential surfaces", "Electric dipole and dipole moment", "Capacitors", "Combination of capacitors and energy stored", "Dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electric Charges & Fields'),
    ...generateTests('jee-mains', ["Drift velocity and mobility", "Ohm's law", "Resistivity", "Electrical energy and power", "Internal resistance of a cell and EMF", "Kirchhoff's laws", "Wheatstone bridge", "Meter bridge"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('jee-mains', ["Biot-Savart law and applications", "Ampere's law", "Magnetic field calculation", "Lorentz force", "Force between two parallel currents", "Moving coil galvanometer and conversion to ammeter/voltmeter", "Magnetic properties (dia, para, ferromagnetism)"], 'SUBTOPIC', 'Physics', 'All Test', 'Moving Charges & Magnetism'),
    ...generateTests('jee-mains', ["Faraday's law", "Lenz's law", "Self and mutual inductance", "Transformers and AC generator", "RMS values", "AC circuits", "LC oscillations"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction'),
    ...generateTests('jee-mains', ["Displacement current", "EM spectrum", "Transverse nature of EM waves", "Energy density and Poynting vector"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('jee-mains', ["Photoelectric effect", "de Broglie wavelength", "Bohr's model", "Wave-particle duality", "Einstein's photoelectric equation and work function"], 'SUBTOPIC', 'Physics', 'All Test', 'Dual Nature of Radiation & Matter'),
    ...generateTests('jee-mains', ["Atomic models", "Rutherford's scattering and Bohr's quantization", "Hydrogen spectrum and Rydberg formula", "Mass defect and nuclear force", "Binding energy", "Nuclear reactions", "Nuclear fission and fusion"], 'SUBTOPIC', 'Physics', 'All Test', 'Atoms'),
    ...generateTests('jee-mains', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry - 100% JEE Mains 2026 Compliant)
    ...generateTests('jee-mains', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('jee-mains', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('jee-mains', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Thermodynamics'),
    ...generateTests('jee-mains', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('jee-mains', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('jee-mains', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements and Periodicity'),
    ...generateTests('jee-mains', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding and Molecular Structure'),
    ...generateTests('jee-mains', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'The p-Block Elements'),
    ...generateTests('jee-mains', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Organic Chemistry – Some Basic Principles and Techniques'),
    ...generateTests('jee-mains', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('jee-mains', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('jee-mains', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('jee-mains', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('jee-mains', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('jee-mains', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('jee-mains', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes and Haloarenes'),
    ...generateTests('jee-mains', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols and Ethers'),
    ...generateTests('jee-mains', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones and Carboxylic Acids'),
    ...generateTests('jee-mains', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('jee-mains', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    
    // Subtopic Tests (Mathematics - 100% JEE Mains 2026 Compliant)
    ...generateTests('jee-mains', ["Types of relations", "equivalence relations", "domain, codomain, range", "composition of functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Relations and Functions'),
    ...generateTests('jee-mains', ["Modulus and argument", "square roots", "triangle inequality", "roots of quadratic equations", "relations between roots and coefficients"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Complex Numbers and Quadratic Equations'),
    ...generateTests('jee-mains', ["Types of matrices", "adjoint, inverse", "solution of linear equations using matrix inversion or Cramer’s Rule"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Matrices and Determinants'),
    ...generateTests('jee-mains', ["Fundamental principles", "linear and circular permutations", "combinations"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Permutations and Combinations'),
    ...generateTests('jee-mains', ["General term", "middle term", "coefficient estimation"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Binomial Theorem'),
    ...generateTests('jee-mains', ["Arithmetic Progression", "Geometric Progression", "Insertion of AM and GM"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sequences and Series'),
    ...generateTests('jee-mains', ["L'Hospital rule", "derivative as a rate of change", "continuity at a point"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Limits and Derivatives'),
    ...generateTests('jee-mains', ["Fundamental theorem of calculus", "integration by parts", "definite integrals and their properties"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Integrals'),
    ...generateTests('jee-mains', ["Order and degree", "solution of differential equations by separation of variables and linear form"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Differential Equations'),
    ...generateTests('jee-mains', ["Slope, intercept forms", "perpendicular distance", "angle between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Straight Lines'),
    ...generateTests('jee-mains', ["Standard forms of parabolas, ellipses, and hyperbolas", "directrix and focus"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Conic Sections'),
    ...generateTests('jee-mains', ["Cartesian and polar coordinate systems"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Introduction to Three Dimensional Geometry'),
    ...generateTests('jee-mains', ["Scalar and vector products", "projection of vectors", "linear combination"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Vector Algebra'),
    ...generateTests('jee-mains', ["Direction cosines and ratios", "equations of lines in space", "shortest distance between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Three Dimensional Geometry'),
    ...generateTests('jee-mains', ["Multiple and sub-multiple angles", "inverse trigonometric functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Trigonometric Functions'),
    ...generateTests('jee-mains', ["Mean, median, mode", "standard deviation", "variance"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Statistics'),
    ...generateTests('jee-mains', ["Conditional probability", "independent events", "Bayes' theorem", "probability distribution"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Probability')
];
