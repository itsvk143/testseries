import { generateTests } from '../utils.js';

export const bitsatChapters = {
    Physics: {
        '11': ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power", "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves"],
        '12': ["Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices"]
    },
    Chemistry: {
        '11': ["Chemical Bonding and Molecular Structure", "States of Matter", "Chemical Thermodynamics", "Equilibrium", "Redox Reactions and Electrochemistry", "s-Block & p-Block Elements", "Some Basic Principles of Organic Chemistry", "Hydrocarbons"],
        '12': ["Solid State", "Solutions", "Redox Reactions and Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Co-ordination Compounds", "Organic Compounds Containing Halogens", "Organic Compounds Containing Oxygen", "Aldehydes & Ketones", "Organic Compounds Containing Nitrogen", "Biomolecules"]
    },
    Mathematics: {
        '11': ["Complex Numbers", "Quadratic Equations", "Sequences & Series", "Permutations & Combinations", "Binomial Theorem", "Trigonometric Identities", "Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)"],
        '12': ["Matrices & Determinants", "Limits, Continuity & Differentiability", "Application of Derivatives", "Differential Equations", "Vectors", "3D Geometry", "Probability", "Linear Programming", "Statistics"]
    },
    'English Proficiency': {
        '12': ["Vocabulary", "Grammar", "Sentence Skills", "Reading Comprehension"]
    },
    'Logical Reasoning': {
        '12': ["Verbal Reasoning", "Non-Verbal Reasoning", "Analytical Reasoning"]
    }
};

// 24 BITSAT Mathematics Full Mock Tests
export const bitsatMathFullTests = generateTests('bitsat', 24, 'MOCK', null, 'All Test').map(t => ({
    ...t,
    subjectMode: 'mathematics',
    duration: 180,
    totalMarks: 390,
    questionsCount: 130,
    description: 'Comprehensive 130-Question BITSAT Mathematics Mock Test (Physics 30, Chemistry 30, Mathematics 40, English 10, Logical Reasoning 20).'
}));

// 24 BITSAT Biology Full Mock Tests
export const bitsatBioFullTests = Array.from({ length: 24 }, (_, i) => {
    const num = i + 1;
    const pad = num < 10 ? `0${num}` : `${num}`;
    return {
        id: `bitsat-BIO-FULL-${pad}`,
        title: `BITSAT Biology Full Test ${num}`,
        type: 'MOCK',
        category: 'bitsat',
        exam: 'BITSAT',
        subjectMode: 'biology',
        duration: 180,
        totalMarks: 390,
        questionsCount: 130,
        year: 2027,
        classGrade: 'All Test',
        description: 'Comprehensive 130-Question BITSAT Biology Mock Test (Physics 30, Chemistry 30, Biology 40, English 10, Logical Reasoning 20).'
    };
});

export const bitsatTests = [
    // 24 Mathematics Full Tests
    ...bitsatMathFullTests,

    // 24 Biology Full Tests
    ...bitsatBioFullTests,

    // PYQs
    ...generateTests('bitsat', 5, 'PYQ').map(t => ({
        ...t,
        duration: 180,
        totalMarks: 390,
        questionsCount: 130
    })),

    // Subject Tests
    ...generateTests('bitsat', 5, 'SUBJECT', 'Physics', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 90, questionsCount: 30 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'Chemistry', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 90, questionsCount: 30 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'Mathematics', 'All Test').map(t => ({ ...t, duration: 60, totalMarks: 120, questionsCount: 40 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'English Proficiency', 'All Test').map(t => ({ ...t, duration: 30, totalMarks: 45, questionsCount: 15 })),
    ...generateTests('bitsat', 5, 'SUBJECT', 'Logical Reasoning', 'All Test').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),

    // Chapter Tests
    ...generateTests('bitsat', bitsatChapters.Physics['12'], 'CHAPTER', 'Physics', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters.Chemistry['12'], 'CHAPTER', 'Chemistry', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters.Mathematics['12'], 'CHAPTER', 'Mathematics', '12').map(t => ({ ...t, duration: 45, totalMarks: 60, questionsCount: 20 })),
    ...generateTests('bitsat', bitsatChapters['English Proficiency']['12'], 'CHAPTER', 'English Proficiency', '12').map(t => ({ ...t, duration: 30, totalMarks: 45, questionsCount: 15 })),
    ...generateTests('bitsat', bitsatChapters['Logical Reasoning']['12'], 'CHAPTER', 'Logical Reasoning', '12').map(t => ({ ...t, duration: 30, totalMarks: 60, questionsCount: 20 })),

    // ── SUBTOPIC TESTS (PHYSICS) ─────────────────────────────────────────
    ...generateTests('bitsat', ["Units and dimensions", "Error analysis", "Significant figures", "Dimensional analysis and applications", "Least count and precision"], 'SUBTOPIC', 'Physics', 'All Test', 'Physics and Measurement'),
    ...generateTests('bitsat', ["Graphical analysis of motion (x-t, v-t graphs)", "Motion in a straight line/plane", "Projectile motion", "Relative velocity", "Uniform circular motion", "Uniformly accelerated motion and equations"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinematics'),
    ...generateTests('bitsat', ["Newton's laws", "Impulse", "Conservation of momentum", "Friction", "Banking of roads", "Connected motion and pulley problems", "Equilibrium of concurrent forces"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('bitsat', ["Work-energy theorem", "Kinetic/potential energy", "Conservation of mechanical energy", "Power and variable force", "Vertical circular motion", "Elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy, and Power'),
    ...generateTests('bitsat', ["Center of mass", "Torque", "Moment of inertia", "Theorems of parallel and perpendicular axes", "Angular momentum conservation", "Rolling motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Rotational Motion'),
    ...generateTests('bitsat', ["Kepler's laws", "Newton's law of gravitation", "Gravitational potential energy", "Escape velocity", "Acceleration due to gravity (variation with height, depth, latitude)", "Orbital velocity and satellite motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('bitsat', ["Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)", "Surface tension, surface energy, and capillarity", "Thermal expansion and calorimetry", "Stefan's law of radiation"], 'SUBTOPIC', 'Physics', 'All Test', 'Properties of Solids and Liquids'),
    ...generateTests('bitsat', ["Thermal equilibrium", "Laws of thermodynamics (zeroth, first, second)", "Isothermal and adiabatic processes", "Work done in thermodynamic processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('bitsat', ["Equation of state", "Kinetic interpretation of temperature", "Degrees of freedom", "Law of equipartition of energy", "Mean free path and molecular speeds (rms, average, most probable)"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory of Gases'),
    ...generateTests('bitsat', ["Simple Harmonic Motion (SHM)", "Wave motion", "Superposition of waves", "Standing waves in strings and organ pipes", "Beats"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations and Waves'),
    ...generateTests('bitsat', ["Coulomb's law", "Electric field/flux", "Gauss's law", "Potential energy", "Capacitors", "Dielectrics", "Electric dipole and dipole moment", "Equipotential surfaces", "Combination of capacitors and energy stored"], 'SUBTOPIC', 'Physics', 'All Test', 'Electrostatics'),
    ...generateTests('bitsat', ["Ohm's law", "Kirchhoff's laws", "Meter bridge", "Wheatstone bridge", "Resistivity", "Drift velocity and mobility", "Internal resistance of a cell and EMF", "Electrical energy and power"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('bitsat', ["Lorentz force", "Ampere's law", "Magnetic field calculation", "Biot-Savart law and applications", "Force between two parallel currents", "Moving coil galvanometer and conversion to ammeter/voltmeter", "Magnetic properties (dia, para, ferromagnetism)"], 'SUBTOPIC', 'Physics', 'All Test', 'Magnetic Effects of Current and Magnetism'),
    ...generateTests('bitsat', ["Faraday's law", "Lenz's law", "AC circuits", "RMS values", "Self and mutual inductance", "LC oscillations", "Transformers and AC generator"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction and Alternating Currents'),
    ...generateTests('bitsat', ["Displacement current", "EM spectrum", "Transverse nature of EM waves", "Energy density and Poynting vector"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('bitsat', ["Reflection/refraction", "Lens formula", "Optical instruments (microscope, telescope)", "Interference", "Diffraction", "Total internal reflection and prisms", "Polarization of light (Brewster's law)"], 'SUBTOPIC', 'Physics', 'All Test', 'Optics'),
    ...generateTests('bitsat', ["Photoelectric effect", "de Broglie wavelength", "Bohr's model", "Wave-particle duality", "Einstein's photoelectric equation and work function"], 'SUBTOPIC', 'Physics', 'All Test', 'Dual Nature of Matter and Radiation'),
    ...generateTests('bitsat', ["Atomic models", "Nuclear reactions", "Binding energy", "Nuclear fission and fusion", "Rutherford's scattering and Bohr's quantization", "Hydrogen spectrum and Rydberg formula", "Mass defect and nuclear force"], 'SUBTOPIC', 'Physics', 'All Test', 'Atoms and Nuclei'),
    ...generateTests('bitsat', ["Energy bands", "Intrinsic/extrinsic semiconductors", "Diodes", "Logic gates", "p-n junction diode applications", "Solar cell, photodiode, and LED"], 'SUBTOPIC', 'Physics', 'All Test', 'Electronic Devices'),

    // ── SUBTOPIC TESTS (CHEMISTRY) ───────────────────────────────────────
    ...generateTests('bitsat', ["Mole concept", "Molar mass", "Empirical/molecular formula", "Stoichiometry", "Concentration terms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('bitsat', ["Bohr's model", "Quantum mechanical model", "Electronic configuration", "Quantum numbers"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Atomic Structure'),
    ...generateTests('bitsat', ["VSEPR theory", "Hybridization", "Molecular orbital theory", "Dipole moment and hydrogen bonding"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding and Molecular Structure'),
    ...generateTests('bitsat', ["Gas laws and ideal gas equation", "Kinetic molecular theory of gases", "Real gases and van der Waals equation", "Liquefaction of gases"], 'SUBTOPIC', 'Chemistry', 'All Test', 'States of Matter'),
    ...generateTests('bitsat', ["First law and internal energy", "Enthalpy (ΔH) and Hess's law", "Entropy (ΔS) and spontaneity", "Gibbs free energy (ΔG) and equilibrium"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Thermodynamics'),
    ...generateTests('bitsat', ["Chemical equilibrium and equilibrium constant", "Le Chatelier's principle", "Ionic equilibrium and pH", "Buffer solutions and solubility product"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('bitsat', ["Oxidation number and balancing redox reactions", "Galvanic cells and EMF", "Nernst equation", "Conductance and Kohlrausch law", "Electrolysis and Faraday laws"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions and Electrochemistry'),
    ...generateTests('bitsat', ["Rate of reaction and rate law", "Order and molecularity", "Integrated rate equations", "Arrhenius equation and activation energy"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('bitsat', ["Adsorption isotherms", "Colloids and classification", "Emulsions and gels", "Catalysis mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Surface Chemistry'),
    ...generateTests('bitsat', ["Group 1 and Group 2 trends", "p-Block periodic properties", "Compounds of boron and carbon", "Compounds of nitrogen, phosphorus, and halogens"], 'SUBTOPIC', 'Chemistry', 'All Test', 's-Block & p-Block Elements'),
    ...generateTests('bitsat', ["Transition elements and oxidation states", "Lanthanoids and actinoids", "Coordination compounds Werner theory", "Isomerism in coordination compounds", "Crystal field theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Co-ordination Compounds'),
    ...generateTests('bitsat', ["IUPAC nomenclature", "Isomerism (structural and stereoisomerism)", "Electronic effects (inductive, resonance, hyperconjugation)", "Reactive intermediates (carbocations, carbanions)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Principles of Organic Chemistry'),
    ...generateTests('bitsat', ["Alkanes and conformational isomerism", "Alkenes (electrophilic addition, Markovnikov rule)", "Alkynes (acidity and addition reactions)", "Aromatic hydrocarbons and electrophilic substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('bitsat', ["Crystal lattices and unit cells", "Close packing and voids", "Packing efficiency and density", "Defects in solids"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solid State'),
    ...generateTests('bitsat', ["Concentration terms", "Raoult's law and vapor pressure", "Ideal and non-ideal solutions", "Colligative properties and van 't Hoff factor"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('bitsat', ["Nomenclature and nature of C-X bond", "SN1 and SN2 reaction mechanisms", "Haloarenes and substitution", "Polyhalogen compounds"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Organic Compounds Containing Halogens'),
    ...generateTests('bitsat', ["Alcohols (preparation, Lucas test, oxidation)", "Phenols (acidity, Reimer-Tiemann, Kolbe)", "Ethers (cleavage by HI)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Organic Compounds Containing Oxygen'),
    ...generateTests('bitsat', ["Nucleophilic addition reactions", "Aldol condensation and Cannizzaro reaction", "Carboxylic acids and acidic strength", "Carboxylic acid derivatives"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes & Ketones'),
    ...generateTests('bitsat', ["Amines classification and basicity", "Diazonium salts and synthetic applications", "Gabriel phthalimide and Hoffmann bromamide", "Cyanides and isocyanides"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Organic Compounds Containing Nitrogen'),
    ...generateTests('bitsat', ["Carbohydrates (glucose, fructose, disaccharides)", "Amino acids and proteins", "Nucleic acids (DNA and RNA)", "Vitamins and enzymes"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),

    // ── SUBTOPIC TESTS (MATHEMATICS) ─────────────────────────────────────
    ...generateTests('bitsat', ["Modulus and argument", "Square roots and triangle inequality", "Argand plane and Euler's form", "Geometry in complex plane"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Complex Numbers'),
    ...generateTests('bitsat', ["Nature of roots and discriminant", "Sum and product of roots", "Quadratic inequalities", "Common roots and location of roots"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Quadratic Equations'),
    ...generateTests('bitsat', ["Arithmetic Progression (AP)", "Geometric Progression (GP)", "AM-GM inequality", "Sum of special series"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Sequences & Series'),
    ...generateTests('bitsat', ["Fundamental principle of counting", "Linear and circular permutations", "Combinations and selections", "Division into groups and derangements"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Permutations & Combinations'),
    ...generateTests('bitsat', ["General term and middle term", "Binomial coefficients and properties", "Binomial theorem for any index"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Binomial Theorem'),
    ...generateTests('bitsat', ["Trigonometric ratios and compound angles", "Multiple and submultiple angles", "Trigonometric equations", "Inverse trigonometric functions"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Trigonometric Identities'),
    ...generateTests('bitsat', ["Slope and forms of lines", "Distance between lines and perpendicular distance", "Angle between lines", "Family of lines"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Straight Lines'),
    ...generateTests('bitsat', ["Standard and general equation of circle", "Tangents, normals, and chord of contact", "Family of circles", "Director circle"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Circles'),
    ...generateTests('bitsat', ["Standard equations of parabola", "Ellipse equations and eccentricity", "Hyperbola equations and asymptotes", "Focal properties and directrix"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Conic Sections (Parabola, Ellipse, Hyperbola)'),
    ...generateTests('bitsat', ["Matrix operations and transpose", "Determinants properties and evaluation", "Adjoint and inverse of matrix", "System of linear equations (Cramer's rule)"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Matrices & Determinants'),
    ...generateTests('bitsat', ["Evaluation of algebraic and trigonometric limits", "Continuity of functions", "Differentiability and standard derivatives"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Limits, Continuity & Differentiability'),
    ...generateTests('bitsat', ["Rate of change", "Tangents and normals", "Increasing and decreasing functions", "Maxima and minima"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Application of Derivatives'),
    ...generateTests('bitsat', ["Order and degree", "Variable separable form", "Homogeneous differential equations", "Linear differential equations"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Differential Equations'),
    ...generateTests('bitsat', ["Vector addition and unit vectors", "Dot product and projections", "Cross product and applications", "Scalar triple product"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Vectors'),
    ...generateTests('bitsat', ["Direction cosines and ratios", "Equations of lines in 3D", "Angle between two lines", "Shortest distance between skew lines"], 'SUBTOPIC', 'Mathematics', 'All Test', '3D Geometry'),
    ...generateTests('bitsat', ["Conditional probability and independence", "Bayes' theorem", "Random variables and probability distribution", "Binomial distribution"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Probability'),
    ...generateTests('bitsat', ["Mean, median, and mode", "Variance and standard deviation", "Coefficient of variation"], 'SUBTOPIC', 'Mathematics', 'All Test', 'Statistics'),

    // ── SUBTOPIC TESTS (ENGLISH PROFICIENCY) ──────────────────────────────
    ...generateTests('bitsat', ["Synonyms", "Antonyms", "Contextual vocabulary", "One-word substitution", "Idioms and phrases"], 'SUBTOPIC', 'English Proficiency', 'All Test', 'Vocabulary'),
    ...generateTests('bitsat', ["Tenses", "Prepositions", "Articles", "Subject-verb agreement", "Active and passive voice", "Sentence correction and error detection"], 'SUBTOPIC', 'English Proficiency', 'All Test', 'Grammar'),
    ...generateTests('bitsat', ["Sentence completion", "Fill in the blanks", "Sentence improvement", "Sentence rearrangement"], 'SUBTOPIC', 'English Proficiency', 'All Test', 'Sentence Skills'),
    ...generateTests('bitsat', ["Main idea and theme", "Inference and conclusion", "Vocabulary in context", "Tone and purpose"], 'SUBTOPIC', 'English Proficiency', 'All Test', 'Reading Comprehension'),

    // ── SUBTOPIC TESTS (LOGICAL REASONING) ────────────────────────────────
    ...generateTests('bitsat', ["Analogy", "Classification and odd one out", "Series completion", "Coding-decoding", "Blood relations", "Direction sense", "Syllogisms and logical deductions"], 'SUBTOPIC', 'Logical Reasoning', 'All Test', 'Verbal Reasoning'),
    ...generateTests('bitsat', ["Number and letter series", "Pattern recognition and completion", "Figure matrix", "Missing number in pattern", "Figure-based reasoning"], 'SUBTOPIC', 'Logical Reasoning', 'All Test', 'Non-Verbal Reasoning'),
    ...generateTests('bitsat', ["Linear and circular seating arrangement", "Selection and distribution", "Logical puzzles and scheduling", "Data sufficiency"], 'SUBTOPIC', 'Logical Reasoning', 'All Test', 'Analytical Reasoning')
];
