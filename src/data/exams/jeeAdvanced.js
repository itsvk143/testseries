
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
    ...generateSundayTests('jee-advance', 2026, 2027, allChapters),

    // Subtopic Tests (Physics)
    ...generateTests('jee-advance', ["Units and dimensions", "error analysis", "significant figures"], 'SUBTOPIC', 'Physics', 'All Test', 'Physical World and Measurement'),
    ...generateTests('jee-advance', ["Motion in a straight line/plane", "projectile motion", "relative velocity", "uniform circular motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinematics'),
    ...generateTests('jee-advance', ["Newton's laws", "impulse", "conservation of momentum", "friction", "banking of roads"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('jee-advance', ["Work-energy theorem", "kinetic/potential energy", "elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy, and Power'),
    ...generateTests('jee-advance', ["Center of mass", "torque", "angular momentum conservation", "moment of inertia"], 'SUBTOPIC', 'Physics', 'All Test', 'Rotational Motion'),
    ...generateTests('jee-advance', ["Kepler's laws", "Newton’s law of gravitation", "gravitational potential energy", "escape velocity"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('jee-advance', ["Elasticity (Hooke’s law, Young’s modulus)", "fluid mechanics (Pascal’s law, Bernoulli’s principle, viscosity)"], 'SUBTOPIC', 'Physics', 'All Test', 'Properties of Bulk Matter'),
    ...generateTests('jee-advance', ["Thermal equilibrium", "laws of thermodynamics", "heat engines", "adiabatic and isothermal processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('jee-advance', ["Equation of state", "kinetic interpretation of temperature", "degrees of freedom"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory of Gases'),
    ...generateTests('jee-advance', ["Simple Harmonic Motion (SHM)", "wave motion", "superposition", "Doppler effect"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations and Waves'),
    ...generateTests('jee-advance', ["Coulomb's law", "electric field/flux", "Gauss's law", "potential energy", "capacitors", "dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electrostatics'),
    ...generateTests('jee-advance', ["Ohm's law", "Kirchhoff’s laws", "potentiometer", "Wheatstone bridge", "resistivity"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('jee-advance', ["Lorentz force", "Ampere’s law", "magnetic field calculation", "Earth’s magnetism"], 'SUBTOPIC', 'Physics', 'All Test', 'Magnetic Effects of Current & Magnetism'),
    ...generateTests('jee-advance', ["Faraday’s law", "Lenz's law", "eddy currents", "AC circuits", "RMS values"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction and AC'),
    ...generateTests('jee-advance', ["Displacement current", "EM spectrum", "transverse nature of EM waves"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('jee-advance', ["Reflection/refraction", "lens formula", "optical instruments", "interference", "diffraction", "Young's double-slit experiment"], 'SUBTOPIC', 'Physics', 'All Test', 'Optics'),
    ...generateTests('jee-advance', ["Photoelectric effect", "de Broglie wavelength", "Bohr’s model", "radioactivity"], 'SUBTOPIC', 'Physics', 'All Test', 'Modern Physics (Dual Nature & Atoms/Nuclei)'),
    ...generateTests('jee-advance', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry)
    ...generateTests('jee-advance', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('jee-advance', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('jee-advance', ["Gas laws", "kinetic molecular theory", "ideal/real behavior", "intermolecular forces"], 'SUBTOPIC', 'Chemistry', 'All Test', 'States of Matter'),
    ...generateTests('jee-advance', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Thermodynamics'),
    ...generateTests('jee-advance', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('jee-advance', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('jee-advance', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements & Periodicity'),
    ...generateTests('jee-advance', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding'),
    ...generateTests('jee-advance', ["Hydrogen preparation", "alkali/alkaline earth metals properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrogen & s-Block Elements'),
    ...generateTests('jee-advance', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'p-Block Elements (Group 13 & 14)'),
    ...generateTests('jee-advance', ["Air, water, soil pollution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Environmental Chemistry'),
    ...generateTests('jee-advance', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'General Organic Chemistry (GOC)'),
    ...generateTests('jee-advance', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('jee-advance', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('jee-advance', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('jee-advance', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('jee-advance', ["Adsorption", "colloids", "emulsion"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Surface Chemistry'),
    ...generateTests('jee-advance', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('jee-advance', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('jee-advance', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes & Haloarenes'),
    ...generateTests('jee-advance', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols & Ethers'),
    ...generateTests('jee-advance', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones & Carboxylic Acids'),
    ...generateTests('jee-advance', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('jee-advance', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    
    // Subtopic Tests (Mathematics)
    ...generateTests('jee-advance', ["Types of relations", "equivalence relations", "domain, codomain, range", "composition of functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sets, Relations, and Functions'),
    ...generateTests('jee-advance', ["Modulus and argument", "square roots", "triangle inequality", "roots of quadratic equations", "relations between roots and coefficients"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Complex Numbers and Quadratic Equations'),
    ...generateTests('jee-advance', ["Types of matrices", "adjoint, inverse", "solution of linear equations using matrix inversion or Cramer’s Rule"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Matrices and Determinants'),
    ...generateTests('jee-advance', ["Fundamental principles", "linear and circular permutations", "combinations"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Permutations and Combinations'),
    ...generateTests('jee-advance', ["General term", "middle term", "coefficient estimation"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Binomial Theorem'),
    ...generateTests('jee-advance', ["Arithmetic Progression", "Geometric Progression", "Harmonic Progression", "Arithmetic-Geometric Progression", "sum of special series"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sequence and Series'),
    ...generateTests('jee-advance', ["Principles of induction", "statements", "logical connectives"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Mathematical Induction & Reasoning'),
    ...generateTests('jee-advance', ["L'Hospital rule", "derivative as a rate of change", "Rolle’s Theorem", "Lagrange's Mean Value Theorem"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Limits, Continuity, and Differentiability'),
    ...generateTests('jee-advance', ["Fundamental theorem of calculus", "integration by parts", "definite integrals and their properties"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Integral Calculus'),
    ...generateTests('jee-advance', ["Order and degree", "solution of differential equations by separation of variables and linear form"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Differential Equations'),
    ...generateTests('jee-advance', ["Slope, intercept forms", "perpendicular distance", "angle between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Straight Lines'),
    ...generateTests('jee-advance', ["Standard forms of parabolas, ellipses, and hyperbolas", "tangent and normal"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Circle and Conic Sections'),
    ...generateTests('jee-advance', ["Cartesian and polar coordinate systems"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Coordinate Systems'),
    ...generateTests('jee-advance', ["Scalar and vector products", "scalar triple product", "vector triple product"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Vector Algebra'),
    ...generateTests('jee-advance', ["Direction cosines and ratios", "equations of lines and planes", "shortest distance between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Three-Dimensional Geometry'),
    ...generateTests('jee-advance', ["Multiple and sub-multiple angles", "inverse trigonometric functions", "properties of triangles"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Trigonometry'),
    ...generateTests('jee-advance', ["Mean, median, mode", "standard deviation", "variance"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Statistics'),
    ...generateTests('jee-advance', ["Conditional probability", "independent events", "Bayes' theorem", "probability distribution"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Probability')
];
