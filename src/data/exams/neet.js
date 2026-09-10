
import { generateTests, generateSubjectTests, generatePartTests, generateLiveTests, generateSundayTests } from '../utils.js';

export const neetChapters = {
    Physics: {
        '11': ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power", "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices", "Experimental Skills"]
    },
    Chemistry: {
        '11': ["Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Bonding and Molecular Structure", "Chemical Thermodynamics", "Equilibrium", "Classification of Elements and Periodicity in Properties", "P-Block Elements"],
        '12': ["Solutions", "Redox Reactions and Electrochemistry", "Chemical Kinetics", "d and f- Block Elements", "Co-ordination Compounds", "Purification and Characterisation of Organic Compounds", "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens", "Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry", "Organic Name Reactions"]
    },
    Botany: {
        '11': ["Diversity in Living World", "Plant Physiology", "Cell Structure and Function"],
        '12': ["Genetics and Evolution", "Ecology and Environment", "Reproduction in Plants"]
    },
    Zoology: {
        '11': ["Animal Kingdom", "Structural Organisation in Animals and Plants", "Human Physiology"],
        '12': ["Reproduction", "Evolution", "Biology and Human Welfare", "Biotechnology and Its Applications"]
    }
};

export const neetSubjectConfigs = {
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
    Botany: {
        '11': [
            {
                title: 'Botany Test 1: Diversity in Living World',
                chapters: ["Diversity in Living World"]
            },
            {
                title: 'Botany Test 2: Plant Physiology',
                chapters: ["Plant Physiology"]
            },
            {
                title: 'Botany Test 3: Cell Structure and Function',
                chapters: ["Cell Structure and Function"]
            },
            {
                title: 'Botany Test 4: Diversity, Plant Physiology & Cell Biology (Class 11)',
                chapters: ["Diversity in Living World", "Plant Physiology", "Cell Structure and Function"]
            }
        ],
        '12': [
            {
                title: 'Botany Test 1: Genetics and Evolution',
                chapters: ["Genetics and Evolution"]
            },
            {
                title: 'Botany Test 2: Ecology and Environment',
                chapters: ["Ecology and Environment"]
            },
            {
                title: 'Botany Test 3: Reproduction in Plants',
                chapters: ["Reproduction in Plants"]
            },
            {
                title: 'Botany Test 4: Genetics, Ecology & Plant Reproduction (Class 12)',
                chapters: ["Genetics and Evolution", "Ecology and Environment", "Reproduction in Plants"]
            }
        ],
        'All Test': [
            {
                title: 'Botany Test 1: Diversity & Plant Physiology',
                chapters: ["Diversity in Living World", "Plant Physiology"]
            },
            {
                title: 'Botany Test 2: Cell Biology & Plant Reproduction',
                chapters: ["Cell Structure and Function", "Reproduction in Plants"]
            },
            {
                title: 'Botany Test 3: Genetics & Molecular Basis of Inheritance',
                chapters: ["Genetics and Evolution"]
            },
            {
                title: 'Botany Test 4: Ecology, Environment & Biodiversity',
                chapters: ["Ecology and Environment"]
            }
        ]
    },
    Zoology: {
        '11': [
            {
                title: 'Zoology Test 1: Animal Kingdom',
                chapters: ["Animal Kingdom"]
            },
            {
                title: 'Zoology Test 2: Structural Organisation in Animals',
                chapters: ["Structural Organisation in Animals and Plants"]
            },
            {
                title: 'Zoology Test 3: Human Physiology',
                chapters: ["Human Physiology"]
            },
            {
                title: 'Zoology Test 4: Animal Kingdom, Tissues & Physiology (Class 11)',
                chapters: ["Animal Kingdom", "Structural Organisation in Animals and Plants", "Human Physiology"]
            }
        ],
        '12': [
            {
                title: 'Zoology Test 1: Human Reproduction & Reproductive Health',
                chapters: ["Reproduction"]
            },
            {
                title: 'Zoology Test 2: Evolution & Origin of Life',
                chapters: ["Evolution"]
            },
            {
                title: 'Zoology Test 3: Biology and Human Welfare',
                chapters: ["Biology and Human Welfare"]
            },
            {
                title: 'Zoology Test 4: Biotechnology - Principles & Applications',
                chapters: ["Biotechnology and Its Applications"]
            }
        ],
        'All Test': [
            {
                title: 'Zoology Test 1: Animal Kingdom & Structural Organisation',
                chapters: ["Animal Kingdom", "Structural Organisation in Animals and Plants"]
            },
            {
                title: 'Zoology Test 2: Human Physiology Comprehensive',
                chapters: ["Human Physiology"]
            },
            {
                title: 'Zoology Test 3: Reproduction & Evolution',
                chapters: ["Reproduction", "Evolution"]
            },
            {
                title: 'Zoology Test 4: Biology in Human Welfare & Biotechnology',
                chapters: ["Biology and Human Welfare", "Biotechnology and Its Applications"]
            }
        ]
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

    // Subject Tests (Renamed according to chapter for each subject)
    ...generateSubjectTests('neet', 'Physics', 'All Test', neetSubjectConfigs.Physics['All Test']),
    ...generateSubjectTests('neet', 'Physics', '11', neetSubjectConfigs.Physics['11']),
    ...generateSubjectTests('neet', 'Physics', '12', neetSubjectConfigs.Physics['12']),

    ...generateSubjectTests('neet', 'Chemistry', 'All Test', neetSubjectConfigs.Chemistry['All Test']),
    ...generateSubjectTests('neet', 'Chemistry', '11', neetSubjectConfigs.Chemistry['11']),
    ...generateSubjectTests('neet', 'Chemistry', '12', neetSubjectConfigs.Chemistry['12']),

    ...generateSubjectTests('neet', 'Botany', 'All Test', neetSubjectConfigs.Botany['All Test']),
    ...generateSubjectTests('neet', 'Botany', '11', neetSubjectConfigs.Botany['11']),
    ...generateSubjectTests('neet', 'Botany', '12', neetSubjectConfigs.Botany['12']),

    ...generateSubjectTests('neet', 'Zoology', 'All Test', neetSubjectConfigs.Zoology['All Test']),
    ...generateSubjectTests('neet', 'Zoology', '11', neetSubjectConfigs.Zoology['11']),
    ...generateSubjectTests('neet', 'Zoology', '12', neetSubjectConfigs.Zoology['12']),


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
    ...generateTests('neet', ["Units and dimensions", "Error analysis", "Significant figures", "Dimensional analysis and applications", "Least count and precision"], 'SUBTOPIC', 'Physics', 'All Test', 'Physics and Measurement'),
    ...generateTests('neet', ["Graphical analysis of motion (x-t, v-t graphs)", "Motion in a straight line/plane", "Projectile motion", "Relative velocity", "Uniform circular motion", "Uniformly accelerated motion and equations"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinematics'),
    ...generateTests('neet', ["Newton's laws", "Impulse", "Conservation of momentum", "Friction", "Banking of roads", "Connected motion and pulley problems", "Equilibrium of concurrent forces"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('neet', ["Work-energy theorem", "Kinetic/potential energy", "Conservative forces and potential energy", "Conservation of mechanical energy", "Vertical circular motion", "Power and variable force", "Elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy, and Power'),
    ...generateTests('neet', ["Center of mass", "Torque", "Moment of inertia", "Theorems of parallel and perpendicular axes", "Angular momentum conservation", "Rolling motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Rotational Motion'),
    ...generateTests('neet', ["Kepler's laws", "Newton's law of gravitation", "Gravitational potential energy", "Escape velocity", "Acceleration due to gravity (variation with height, depth, latitude)", "Orbital velocity and satellite motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('neet', ["Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)", "Surface tension, surface energy, and capillarity", "Thermal expansion and calorimetry", "Stefan's law of radiation"], 'SUBTOPIC', 'Physics', 'All Test', 'Properties of Solids and Liquids'),
    ...generateTests('neet', ["Thermal equilibrium", "Laws of thermodynamics (zeroth, first, second)", "Isothermal and adiabatic processes", "Work done in thermodynamic processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('neet', ["Equation of state", "Kinetic interpretation of temperature", "Degrees of freedom", "Law of equipartition of energy", "Mean free path and molecular speeds (rms, average, most probable)"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory of Gases'),
    ...generateTests('neet', ["Simple Harmonic Motion (SHM)", "Wave motion", "Superposition of waves", "Standing waves in strings and organ pipes", "Beats"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations and Waves'),
    ...generateTests('neet', ["Coulomb's law", "Electric field/flux", "Gauss's law", "Potential energy", "Equipotential surfaces", "Electric dipole and dipole moment", "Capacitors", "Combination of capacitors and energy stored", "Dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electrostatics'),
    ...generateTests('neet', ["Drift velocity and mobility", "Ohm's law", "Resistivity", "Electrical energy and power", "Internal resistance of a cell and EMF", "Kirchhoff's laws", "Wheatstone bridge", "Meter bridge"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('neet', ["Biot-Savart law and applications", "Ampere's law", "Magnetic field calculation", "Lorentz force", "Force between two parallel currents", "Moving coil galvanometer and conversion to ammeter/voltmeter", "Magnetic properties (dia, para, ferromagnetism)"], 'SUBTOPIC', 'Physics', 'All Test', 'Magnetic Effects of Current and Magnetism'),
    ...generateTests('neet', ["Faraday's law", "Lenz's law", "Self and mutual inductance", "Transformers and AC generator", "RMS values", "AC circuits", "LC oscillations"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction and Alternating Currents'),
    ...generateTests('neet', ["Displacement current", "EM spectrum", "Transverse nature of EM waves", "Energy density and Poynting vector"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('neet', ["Photoelectric effect", "de Broglie wavelength", "Bohr's model", "Wave-particle duality", "Einstein's photoelectric equation and work function"], 'SUBTOPIC', 'Physics', 'All Test', 'Dual Nature of Matter and Radiation'),
    ...generateTests('neet', ["Atomic models", "Rutherford's scattering and Bohr's quantization", "Hydrogen spectrum and Rydberg formula", "Mass defect and nuclear force", "Binding energy", "Nuclear reactions", "Nuclear fission and fusion"], 'SUBTOPIC', 'Physics', 'All Test', 'Atoms and Nuclei'),
    ...generateTests('neet', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry - 100% NEET 2026 Compliant)
    ...generateTests('neet', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('neet', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('neet', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Thermodynamics'),
    ...generateTests('neet', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('neet', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('neet', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements & Periodicity'),
    ...generateTests('neet', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding'),
    ...generateTests('neet', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'p-Block Elements (Group 13 & 14)'),
    ...generateTests('neet', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'General Organic Chemistry (GOC)'),
    ...generateTests('neet', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('neet', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('neet', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('neet', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('neet', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('neet', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('neet', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes & Haloarenes'),
    ...generateTests('neet', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols & Ethers'),
    ...generateTests('neet', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones & Carboxylic Acids'),
    ...generateTests('neet', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('neet', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    ...generateTests('neet', [
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
    
    // Subtopic Tests (Botany - 100% NEET 2026 Compliant)
    ...generateTests('neet', ["Principles of Inheritance", "Molecular Basis of Inheritance"], 'SUBTOPIC', 'Botany', 'All Test', 'Genetics and Evolution'),
    ...generateTests('neet', ["Photosynthesis", "Respiration", "Growth & Development"], 'SUBTOPIC', 'Botany', 'All Test', 'Plant Physiology'),
    ...generateTests('neet', ["Biological Classification", "Plant Kingdom"], 'SUBTOPIC', 'Botany', 'All Test', 'Plant Diversity & Classification'),
    ...generateTests('neet', ["Sexual Reproduction in Flowering Plants"], 'SUBTOPIC', 'Botany', 'All Test', 'Reproduction in Plants'),
    ...generateTests('neet', ["Cell Life & Division", "Biomolecules"], 'SUBTOPIC', 'Botany', 'All Test', 'Cell: Structure and Functions'),
    ...generateTests('neet', ["Morphology", "Anatomy"], 'SUBTOPIC', 'Botany', 'All Test', 'Morphology & Anatomy of Flowering Plants'),
    ...generateTests('neet', ["Organisms and Populations", "Ecosystem Structure", "Biodiversity & Conservation"], 'SUBTOPIC', 'Botany', 'All Test', 'Ecology & Environment'),
    
    // Subtopic Tests (Zoology - 100% NEET 2026 Compliant)
    ...generateTests('neet', ["Basis of classification", "phylum-wise features"], 'SUBTOPIC', 'Zoology', 'All Test', 'Animal Kingdom'),
    ...generateTests('neet', ["Animal tissues", "cockroach anatomy and morphology", "frog morphology and anatomy"], 'SUBTOPIC', 'Zoology', 'All Test', 'Structural Organisation in Animals'),
    ...generateTests('neet', ["Carbohydrates, proteins, lipids, nucleic acids, and enzymes"], 'SUBTOPIC', 'Zoology', 'All Test', 'Biomolecules'),
    ...generateTests('neet', ["Breathing & Exchange of Gases", "Body Fluids & Circulation", "Excretory Products & Elimination", "Locomotion & Movement", "Neural Control & Coordination", "Chemical Coordination & Integration"], 'SUBTOPIC', 'Zoology', 'All Test', 'Human Physiology'),
    ...generateTests('neet', ["Human reproduction", "Evolution theories"], 'SUBTOPIC', 'Zoology', 'All Test', 'Reproduction & Evolution'),
    ...generateTests('neet', ["Common diseases", "immunity", "cancer", "drug abuse"], 'SUBTOPIC', 'Zoology', 'All Test', 'Human Health & Disease'),
    ...generateTests('neet', ["Principles & Processes", "Applications"], 'SUBTOPIC', 'Zoology', 'All Test', 'Biotechnology')
];
