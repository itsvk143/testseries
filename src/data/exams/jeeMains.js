
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
    ...generateSundayTests('jee-mains', 2026, 2027, allChapters),

    // Subtopic Tests (Physics)
    ...generateTests('jee-mains', ["Units and dimensions", "error analysis", "significant figures"], 'SUBTOPIC', 'Physics', 'All Test', 'Physical World and Measurement'),
    ...generateTests('jee-mains', ["Motion in a straight line/plane", "projectile motion", "relative velocity", "uniform circular motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinematics'),
    ...generateTests('jee-mains', ["Newton's laws", "impulse", "conservation of momentum", "friction", "banking of roads"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('jee-mains', ["Work-energy theorem", "kinetic/potential energy", "elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy, and Power'),
    ...generateTests('jee-mains', ["Center of mass", "torque", "angular momentum conservation", "moment of inertia"], 'SUBTOPIC', 'Physics', 'All Test', 'Rotational Motion'),
    ...generateTests('jee-mains', ["Kepler's laws", "Newton’s law of gravitation", "gravitational potential energy", "escape velocity"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('jee-mains', ["Elasticity (Hooke’s law, Young’s modulus)", "fluid mechanics (Pascal’s law, Bernoulli’s principle, viscosity)"], 'SUBTOPIC', 'Physics', 'All Test', 'Properties of Bulk Matter'),
    ...generateTests('jee-mains', ["Thermal equilibrium", "laws of thermodynamics", "heat engines", "adiabatic and isothermal processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('jee-mains', ["Equation of state", "kinetic interpretation of temperature", "degrees of freedom"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory of Gases'),
    ...generateTests('jee-mains', ["Simple Harmonic Motion (SHM)", "wave motion", "superposition", "Doppler effect"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations and Waves'),
    ...generateTests('jee-mains', ["Coulomb's law", "electric field/flux", "Gauss's law", "potential energy", "capacitors", "dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electrostatics'),
    ...generateTests('jee-mains', ["Ohm's law", "Kirchhoff’s laws", "potentiometer", "Wheatstone bridge", "resistivity"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('jee-mains', ["Lorentz force", "Ampere’s law", "magnetic field calculation", "Earth’s magnetism"], 'SUBTOPIC', 'Physics', 'All Test', 'Magnetic Effects of Current & Magnetism'),
    ...generateTests('jee-mains', ["Faraday’s law", "Lenz's law", "eddy currents", "AC circuits", "RMS values"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction and AC'),
    ...generateTests('jee-mains', ["Displacement current", "EM spectrum", "transverse nature of EM waves"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('jee-mains', ["Reflection/refraction", "lens formula", "optical instruments", "interference", "diffraction", "Young's double-slit experiment"], 'SUBTOPIC', 'Physics', 'All Test', 'Optics'),
    ...generateTests('jee-mains', ["Photoelectric effect", "de Broglie wavelength", "Bohr’s model", "radioactivity"], 'SUBTOPIC', 'Physics', 'All Test', 'Modern Physics (Dual Nature & Atoms/Nuclei)'),
    ...generateTests('jee-mains', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry)
    ...generateTests('jee-mains', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('jee-mains', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('jee-mains', ["Gas laws", "kinetic molecular theory", "ideal/real behavior", "intermolecular forces"], 'SUBTOPIC', 'Chemistry', 'All Test', 'States of Matter'),
    ...generateTests('jee-mains', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Thermodynamics'),
    ...generateTests('jee-mains', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('jee-mains', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('jee-mains', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements & Periodicity'),
    ...generateTests('jee-mains', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding'),
    ...generateTests('jee-mains', ["Hydrogen preparation", "alkali/alkaline earth metals properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrogen & s-Block Elements'),
    ...generateTests('jee-mains', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'p-Block Elements (Group 13 & 14)'),
    ...generateTests('jee-mains', ["Air, water, soil pollution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Environmental Chemistry'),
    ...generateTests('jee-mains', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'General Organic Chemistry (GOC)'),
    ...generateTests('jee-mains', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('jee-mains', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('jee-mains', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('jee-mains', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('jee-mains', ["Adsorption", "colloids", "emulsion"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Surface Chemistry'),
    ...generateTests('jee-mains', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('jee-mains', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('jee-mains', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes & Haloarenes'),
    ...generateTests('jee-mains', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols & Ethers'),
    ...generateTests('jee-mains', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones & Carboxylic Acids'),
    ...generateTests('jee-mains', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('jee-mains', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    
    // Subtopic Tests (Mathematics)
    ...generateTests('jee-mains', ["Types of relations", "equivalence relations", "domain, codomain, range", "composition of functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sets, Relations, and Functions'),
    ...generateTests('jee-mains', ["Modulus and argument", "square roots", "triangle inequality", "roots of quadratic equations", "relations between roots and coefficients"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Complex Numbers and Quadratic Equations'),
    ...generateTests('jee-mains', ["Types of matrices", "adjoint, inverse", "solution of linear equations using matrix inversion or Cramer’s Rule"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Matrices and Determinants'),
    ...generateTests('jee-mains', ["Fundamental principles", "linear and circular permutations", "combinations"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Permutations and Combinations'),
    ...generateTests('jee-mains', ["General term", "middle term", "coefficient estimation"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Binomial Theorem'),
    ...generateTests('jee-mains', ["Arithmetic Progression", "Geometric Progression", "Harmonic Progression", "Arithmetic-Geometric Progression", "sum of special series"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sequence and Series'),
    ...generateTests('jee-mains', ["Principles of induction", "statements", "logical connectives"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Mathematical Induction & Reasoning'),
    ...generateTests('jee-mains', ["L'Hospital rule", "derivative as a rate of change", "Rolle’s Theorem", "Lagrange's Mean Value Theorem"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Limits, Continuity, and Differentiability'),
    ...generateTests('jee-mains', ["Fundamental theorem of calculus", "integration by parts", "definite integrals and their properties"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Integral Calculus'),
    ...generateTests('jee-mains', ["Order and degree", "solution of differential equations by separation of variables and linear form"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Differential Equations'),
    ...generateTests('jee-mains', ["Slope, intercept forms", "perpendicular distance", "angle between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Straight Lines'),
    ...generateTests('jee-mains', ["Standard forms of parabolas, ellipses, and hyperbolas", "tangent and normal"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Circle and Conic Sections'),
    ...generateTests('jee-mains', ["Cartesian and polar coordinate systems"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Coordinate Systems'),
    ...generateTests('jee-mains', ["Scalar and vector products", "scalar triple product", "vector triple product"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Vector Algebra'),
    ...generateTests('jee-mains', ["Direction cosines and ratios", "equations of lines and planes", "shortest distance between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Three-Dimensional Geometry'),
    ...generateTests('jee-mains', ["Multiple and sub-multiple angles", "inverse trigonometric functions", "properties of triangles"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Trigonometry'),
    ...generateTests('jee-mains', ["Mean, median, mode", "standard deviation", "variance"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Statistics'),
    ...generateTests('jee-mains', ["Conditional probability", "independent events", "Bayes' theorem", "probability distribution"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Probability')
];
