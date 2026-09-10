
import { generateTests, generateSubjectTests, generatePartTests, generateLiveTests, generateSundayTests } from '../utils.js';

export const jeeMainsChapters = {
    Physics: {
        '11': ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power", "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices", "Experimental Skills"]
    },
    Chemistry: {
        '11': ["Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Thermodynamics", "Equilibrium", "Classification of Elements and Periodicity in Properties", "Chemical Bonding and Molecular Structure", "P-Block Elements"],
        '12': ["Solutions", "Redox Reactions and Electrochemistry", "Chemical Kinetics", "d and f- Block Elements", "Co-ordination Compounds", "Purification and Characterisation of Organic Compounds", "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens", "Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry", "Organic Name Reactions"]
    },
    Mathematics: {
        '11': ["Sets, Relations, and Functions", "Complex Numbers", "Quadratic Equations", "Sequences & Series", "Permutations & Combinations", "Binomial Theorem", "Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)", "Trigonometric Identities"],
        '12': ["Matrices & Determinants", "Limits, Continuity & Differentiability", "Application of Derivatives", "Integrals", "Differential Equations", "Areas", "Vectors", "3D Geometry", "Inverse Trigonometric Functions", "Probability", "Statistics"]
    }
};

export const jeeMainsSubjectConfigs = {
    Physics: {
        '11': [
            {
                title: 'Physics Test 1: Physics and Measurement & Kinematics',
                chapters: ["Physics and Measurement", "Kinematics"]
            },
            {
                title: 'Physics Test 2: Laws of Motion, Work-Energy & Rotational Motion',
                chapters: ["Laws of Motion", "Work, Energy, and Power", "Rotational Motion"]
            },
            {
                title: 'Physics Test 3: Gravitation & Properties of Solids and Liquids',
                chapters: ["Gravitation", "Properties of Solids and Liquids"]
            },
            {
                title: 'Physics Test 4: Thermodynamics, KTG, Oscillations & Waves',
                chapters: ["Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves"]
            }
        ],
        '12': [
            {
                title: 'Physics Test 1: Electrostatics & Current Electricity',
                chapters: ["Electrostatics", "Current Electricity"]
            },
            {
                title: 'Physics Test 2: Magnetism, EMI, AC & EM Waves',
                chapters: ["Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves"]
            },
            {
                title: 'Physics Test 3: Optics & Dual Nature of Matter',
                chapters: ["Optics", "Dual Nature of Matter and Radiation"]
            },
            {
                title: 'Physics Test 4: Atoms, Nuclei, Electronic Devices & Experimental Skills',
                chapters: ["Atoms and Nuclei", "Electronic Devices", "Experimental Skills"]
            }
        ],
        'All Test': [
            {
                title: 'Physics Test 1: Measurement, Kinematics & Mechanics',
                chapters: ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power"]
            },
            {
                title: 'Physics Test 2: Rotation, Gravitation & Thermal Physics',
                chapters: ["Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases"]
            },
            {
                title: 'Physics Test 3: Waves, Electrostatics & Magnetism',
                chapters: ["Oscillations and Waves", "Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents"]
            },
            {
                title: 'Physics Test 4: Optics, Modern Physics & Electronics',
                chapters: ["Electromagnetic Waves", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices", "Experimental Skills"]
            }
        ]
    },
    Chemistry: {
        '11': [
            {
                title: 'Chemistry Test 1: Basic Concepts & Atomic Structure',
                chapters: ["Some Basic Concepts in Chemistry", "Atomic Structure"]
            },
            {
                title: 'Chemistry Test 2: Chemical Bonding & Periodic Classification',
                chapters: ["Chemical Bonding and Molecular Structure", "Classification of Elements and Periodicity in Properties"]
            },
            {
                title: 'Chemistry Test 3: Chemical Thermodynamics & Equilibrium',
                chapters: ["Chemical Thermodynamics", "Equilibrium"]
            },
            {
                title: 'Chemistry Test 4: P-Block Elements',
                chapters: ["P-Block Elements"]
            }
        ],
        '12': [
            {
                title: 'Chemistry Test 1: Solutions, Electrochemistry & Kinetics',
                chapters: ["Solutions", "Redox Reactions and Electrochemistry", "Chemical Kinetics"]
            },
            {
                title: 'Chemistry Test 2: d & f-Block Elements & Coordination Compounds',
                chapters: ["d and f- Block Elements", "Co-ordination Compounds"]
            },
            {
                title: 'Chemistry Test 3: Organic Principles, Hydrocarbons & Haloalkanes',
                chapters: ["Purification and Characterisation of Organic Compounds", "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens"]
            },
            {
                title: 'Chemistry Test 4: Oxygen & Nitrogen Compounds, Biomolecules',
                chapters: ["Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry", "Organic Name Reactions"]
            }
        ],
        'All Test': [
            {
                title: 'Chemistry Test 1: Physical Chemistry Fundamentals',
                chapters: ["Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Thermodynamics", "Equilibrium", "Solutions", "Redox Reactions and Electrochemistry", "Chemical Kinetics"]
            },
            {
                title: 'Chemistry Test 2: Inorganic Chemistry Comprehensive',
                chapters: ["Classification of Elements and Periodicity in Properties", "Chemical Bonding and Molecular Structure", "P-Block Elements", "d and f- Block Elements", "Co-ordination Compounds"]
            },
            {
                title: 'Chemistry Test 3: General Organic Chemistry & Hydrocarbons',
                chapters: ["Purification and Characterisation of Organic Compounds", "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens"]
            },
            {
                title: 'Chemistry Test 4: Functional Groups, Biomolecules & Practical Chemistry',
                chapters: ["Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry", "Organic Name Reactions"]
            }
        ]
    },
    Mathematics: {
        '11': [
            {
                title: 'Mathematics Test 1: Sets, Relations, Functions & Trigonometry',
                chapters: ["Sets, Relations, and Functions", "Trigonometric Identities"]
            },
            {
                title: 'Mathematics Test 2: Complex Numbers, Quadratics & Sequences',
                chapters: ["Complex Numbers", "Quadratic Equations", "Sequences & Series"]
            },
            {
                title: 'Mathematics Test 3: Permutations, Combinations & Binomial Theorem',
                chapters: ["Permutations & Combinations", "Binomial Theorem"]
            },
            {
                title: 'Mathematics Test 4: Coordinate Geometry (Lines, Circles & Conics)',
                chapters: ["Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)"]
            }
        ],
        '12': [
            {
                title: 'Mathematics Test 1: Matrices, Determinants & Inverse Trigonometry',
                chapters: ["Matrices & Determinants", "Inverse Trigonometric Functions"]
            },
            {
                title: 'Mathematics Test 2: Differential Calculus (Limits, Continuity & Derivatives)',
                chapters: ["Limits, Continuity & Differentiability", "Application of Derivatives"]
            },
            {
                title: 'Mathematics Test 3: Integral Calculus (Integrals, Diff Equations & Areas)',
                chapters: ["Integrals", "Differential Equations", "Areas"]
            },
            {
                title: 'Mathematics Test 4: Vectors, 3D Geometry, Probability & Statistics',
                chapters: ["Vectors", "3D Geometry", "Probability", "Statistics"]
            }
        ],
        'All Test': [
            {
                title: 'Mathematics Test 1: Functions, Complex Numbers & Matrices',
                chapters: ["Sets, Relations, and Functions", "Complex Numbers", "Quadratic Equations", "Matrices & Determinants"]
            },
            {
                title: 'Mathematics Test 2: Calculus Comprehensive (Differential & Integral)',
                chapters: ["Limits, Continuity & Differentiability", "Application of Derivatives", "Integrals", "Differential Equations", "Areas"]
            },
            {
                title: 'Mathematics Test 3: Coordinate Geometry, Vectors & 3D Geometry',
                chapters: ["Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)", "Vectors", "3D Geometry"]
            },
            {
                title: 'Mathematics Test 4: Algebra, Probability & Statistics',
                chapters: ["Permutations & Combinations", "Binomial Theorem", "Sequences & Series", "Probability", "Statistics", "Trigonometric Identities", "Inverse Trigonometric Functions"]
            }
        ]
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

    // Subject Tests (Renamed according to chapter for each subject)
    ...generateSubjectTests('jee-mains', 'Physics', 'All Test', jeeMainsSubjectConfigs.Physics['All Test']),
    ...generateSubjectTests('jee-mains', 'Physics', '11', jeeMainsSubjectConfigs.Physics['11']),
    ...generateSubjectTests('jee-mains', 'Physics', '12', jeeMainsSubjectConfigs.Physics['12']),

    ...generateSubjectTests('jee-mains', 'Chemistry', 'All Test', jeeMainsSubjectConfigs.Chemistry['All Test']),
    ...generateSubjectTests('jee-mains', 'Chemistry', '11', jeeMainsSubjectConfigs.Chemistry['11']),
    ...generateSubjectTests('jee-mains', 'Chemistry', '12', jeeMainsSubjectConfigs.Chemistry['12']),

    ...generateSubjectTests('jee-mains', 'Mathematics', 'All Test', jeeMainsSubjectConfigs.Mathematics['All Test']),
    ...generateSubjectTests('jee-mains', 'Mathematics', '11', jeeMainsSubjectConfigs.Mathematics['11']),
    ...generateSubjectTests('jee-mains', 'Mathematics', '12', jeeMainsSubjectConfigs.Mathematics['12']),


    // Chapter Tests
    ...generateTests('jee-mains', jeeMainsChapters.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-mains', jeeMainsChapters.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-mains', jeeMainsChapters.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-mains', jeeMainsChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12'),

    ...generateLiveTests('jee-mains', 12),
    ...generateSundayTests('jee-mains', 2026, 2027, allChapters),

    ...generateTests('jee-mains', ["Units and dimensions", "Error analysis", "Significant figures", "Dimensional analysis and applications", "Least count and precision"], 'SUBTOPIC', 'Physics', 'All Test', 'Physics and Measurement'),
    ...generateTests('jee-mains', ["Graphical analysis of motion (x-t, v-t graphs)", "Motion in a straight line/plane", "Projectile motion", "Relative velocity", "Uniform circular motion", "Uniformly accelerated motion and equations"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinematics'),
    ...generateTests('jee-mains', ["Newton's laws", "Impulse", "Conservation of momentum", "Friction", "Banking of roads", "Connected motion and pulley problems", "Equilibrium of concurrent forces"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('jee-mains', ["Work-energy theorem", "Kinetic/potential energy", "Conservative forces and potential energy", "Conservation of mechanical energy", "Vertical circular motion", "Power and variable force", "Elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy, and Power'),
    ...generateTests('jee-mains', ["Center of mass", "Torque", "Moment of inertia", "Theorems of parallel and perpendicular axes", "Angular momentum conservation", "Rolling motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Rotational Motion'),
    ...generateTests('jee-mains', ["Kepler's laws", "Newton's law of gravitation", "Gravitational potential energy", "Escape velocity", "Acceleration due to gravity (variation with height, depth, latitude)", "Orbital velocity and satellite motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('jee-mains', ["Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)", "Surface tension, surface energy, and capillarity", "Thermal expansion and calorimetry", "Stefan's law of radiation"], 'SUBTOPIC', 'Physics', 'All Test', 'Properties of Solids and Liquids'),
    ...generateTests('jee-mains', ["Thermal equilibrium", "Laws of thermodynamics (zeroth, first, second)", "Isothermal and adiabatic processes", "Work done in thermodynamic processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('jee-mains', ["Equation of state", "Kinetic interpretation of temperature", "Degrees of freedom", "Law of equipartition of energy", "Mean free path and molecular speeds (rms, average, most probable)"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory of Gases'),
    ...generateTests('jee-mains', ["Simple Harmonic Motion (SHM)", "Wave motion", "Superposition of waves", "Standing waves in strings and organ pipes", "Beats"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations and Waves'),
    ...generateTests('jee-mains', ["Coulomb's law", "Electric field/flux", "Gauss's law", "Potential energy", "Equipotential surfaces", "Electric dipole and dipole moment", "Capacitors", "Combination of capacitors and energy stored", "Dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electrostatics'),
    ...generateTests('jee-mains', ["Drift velocity and mobility", "Ohm's law", "Resistivity", "Electrical energy and power", "Internal resistance of a cell and EMF", "Kirchhoff's laws", "Wheatstone bridge", "Meter bridge"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('jee-mains', ["Biot-Savart law and applications", "Ampere's law", "Magnetic field calculation", "Lorentz force", "Force between two parallel currents", "Moving coil galvanometer and conversion to ammeter/voltmeter", "Magnetic properties (dia, para, ferromagnetism)"], 'SUBTOPIC', 'Physics', 'All Test', 'Magnetic Effects of Current and Magnetism'),
    ...generateTests('jee-mains', ["Faraday's law", "Lenz's law", "Self and mutual inductance", "Transformers and AC generator", "RMS values", "AC circuits", "LC oscillations"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction and Alternating Currents'),
    ...generateTests('jee-mains', ["Displacement current", "EM spectrum", "Transverse nature of EM waves", "Energy density and Poynting vector"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('jee-mains', ["Photoelectric effect", "de Broglie wavelength", "Bohr's model", "Wave-particle duality", "Einstein's photoelectric equation and work function"], 'SUBTOPIC', 'Physics', 'All Test', 'Dual Nature of Matter and Radiation'),
    ...generateTests('jee-mains', ["Atomic models", "Rutherford's scattering and Bohr's quantization", "Hydrogen spectrum and Rydberg formula", "Mass defect and nuclear force", "Binding energy", "Nuclear reactions", "Nuclear fission and fusion"], 'SUBTOPIC', 'Physics', 'All Test', 'Atoms and Nuclei'),
    ...generateTests('jee-mains', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry - 100% JEE Mains 2026 Compliant)
    ...generateTests('jee-mains', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('jee-mains', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('jee-mains', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Thermodynamics'),
    ...generateTests('jee-mains', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('jee-mains', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('jee-mains', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements & Periodicity'),
    ...generateTests('jee-mains', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding'),
    ...generateTests('jee-mains', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'p-Block Elements (Group 13 & 14)'),
    ...generateTests('jee-mains', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'General Organic Chemistry (GOC)'),
    ...generateTests('jee-mains', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('jee-mains', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('jee-mains', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('jee-mains', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('jee-mains', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('jee-mains', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('jee-mains', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes & Haloarenes'),
    ...generateTests('jee-mains', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols & Ethers'),
    ...generateTests('jee-mains', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones & Carboxylic Acids'),
    ...generateTests('jee-mains', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('jee-mains', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    ...generateTests('jee-mains', [
        "Aldol Condensation",
        "Cannizzaro Reaction",
        "Friedel-Crafts Alkylation",
        "Friedel-Crafts Acylation",
        "Reimer-Tiemann Reaction",
        "Kolbe's Reaction",
        "Williamson Ether Synthesis",
        "Sandmeyer Reaction",
        "Gattermann Reaction",
        "Fittig Reaction",
        "Wurtz Reaction",
        "Wurtz-Fittig Reaction",
        "Gabriel Phthalimide Synthesis",
        "Hoffmann Bromamide Degradation",
        "Rosenmund Reduction",
        "Clemmensen Reduction",
        "Wolff-Kishner Reduction",
        "Etard Reaction",
        "Stephen Reaction",
        "Hell-Volhard-Zelinsky (HVZ) Reaction",
        "Diazotization Reaction",
        "Coupling Reaction",
        "Carbylamine Reaction",
        "Haloform Reaction"
    ], 'SUBTOPIC', 'Chemistry', 'All Test', 'Organic Name Reactions'),
    
    // Subtopic Tests (Mathematics - 100% JEE Mains 2026 Compliant)
    ...generateTests('jee-mains', ["Types of relations", "equivalence relations", "domain, codomain, range", "composition of functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sets, Relations, and Functions'),
    ...generateTests('jee-mains', ["Modulus and argument", "square roots", "triangle inequality", "roots of quadratic equations", "relations between roots and coefficients"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Complex Numbers and Quadratic Equations'),
    ...generateTests('jee-mains', ["Types of matrices", "adjoint, inverse", "solution of linear equations using matrix inversion or Cramer’s Rule"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Matrices and Determinants'),
    ...generateTests('jee-mains', ["Fundamental principles", "linear and circular permutations", "combinations"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Permutations and Combinations'),
    ...generateTests('jee-mains', ["General term", "middle term", "coefficient estimation"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Binomial Theorem'),
    ...generateTests('jee-mains', ["Arithmetic Progression", "Geometric Progression", "Insertion of AM and GM"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sequence and Series'),
    ...generateTests('jee-mains', ["L'Hospital rule", "derivative as a rate of change", "continuity at a point"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Limits, Continuity, and Differentiability'),
    ...generateTests('jee-mains', ["Fundamental theorem of calculus", "integration by parts", "definite integrals and their properties"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Integral Calculus'),
    ...generateTests('jee-mains', ["Order and degree", "solution of differential equations by separation of variables and linear form"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Differential Equations'),
    ...generateTests('jee-mains', ["Slope, intercept forms", "perpendicular distance", "angle between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Straight Lines'),
    ...generateTests('jee-mains', ["Standard forms of parabolas, ellipses, and hyperbolas", "directrix and focus"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Circle and Conic Sections'),
    ...generateTests('jee-mains', ["Cartesian and polar coordinate systems"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Coordinate Systems'),
    ...generateTests('jee-mains', ["Scalar and vector products", "projection of vectors", "linear combination"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Vector Algebra'),
    ...generateTests('jee-mains', ["Direction cosines and ratios", "equations of lines in space", "shortest distance between two lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Three-Dimensional Geometry'),
    ...generateTests('jee-mains', ["Multiple and sub-multiple angles", "inverse trigonometric functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Trigonometry'),
    ...generateTests('jee-mains', ["Mean, median, mode", "standard deviation", "variance"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Statistics'),
    ...generateTests('jee-mains', ["Conditional probability", "independent events", "Bayes' theorem", "probability distribution"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Probability')
];
