
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
    ...generateSundayTests('neet', 2026, 2027, allChapters),

    // Subtopic Tests (Physics)
    ...generateTests('neet', ["Units and dimensions", "error analysis", "significant figures"], 'SUBTOPIC', 'Physics', 'All Test', 'Physical World and Measurement'),
    ...generateTests('neet', ["Motion in a straight line/plane", "projectile motion", "relative velocity", "uniform circular motion"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinematics'),
    ...generateTests('neet', ["Newton's laws", "impulse", "conservation of momentum", "friction", "banking of roads"], 'SUBTOPIC', 'Physics', 'All Test', 'Laws of Motion'),
    ...generateTests('neet', ["Work-energy theorem", "kinetic/potential energy", "elastic and inelastic collisions"], 'SUBTOPIC', 'Physics', 'All Test', 'Work, Energy, and Power'),
    ...generateTests('neet', ["Center of mass", "torque", "angular momentum conservation", "moment of inertia"], 'SUBTOPIC', 'Physics', 'All Test', 'Rotational Motion'),
    ...generateTests('neet', ["Kepler's laws", "Newton’s law of gravitation", "gravitational potential energy", "escape velocity"], 'SUBTOPIC', 'Physics', 'All Test', 'Gravitation'),
    ...generateTests('neet', ["Elasticity (Hooke’s law, Young’s modulus)", "fluid mechanics (Pascal’s law, Bernoulli’s principle, viscosity)"], 'SUBTOPIC', 'Physics', 'All Test', 'Properties of Bulk Matter'),
    ...generateTests('neet', ["Thermal equilibrium", "laws of thermodynamics", "heat engines", "adiabatic and isothermal processes"], 'SUBTOPIC', 'Physics', 'All Test', 'Thermodynamics'),
    ...generateTests('neet', ["Equation of state", "kinetic interpretation of temperature", "degrees of freedom"], 'SUBTOPIC', 'Physics', 'All Test', 'Kinetic Theory of Gases'),
    ...generateTests('neet', ["Simple Harmonic Motion (SHM)", "wave motion", "superposition", "Doppler effect"], 'SUBTOPIC', 'Physics', 'All Test', 'Oscillations and Waves'),
    ...generateTests('neet', ["Coulomb's law", "electric field/flux", "Gauss's law", "potential energy", "capacitors", "dielectrics"], 'SUBTOPIC', 'Physics', 'All Test', 'Electrostatics'),
    ...generateTests('neet', ["Ohm's law", "Kirchhoff’s laws", "potentiometer", "Wheatstone bridge", "resistivity"], 'SUBTOPIC', 'Physics', 'All Test', 'Current Electricity'),
    ...generateTests('neet', ["Lorentz force", "Ampere’s law", "magnetic field calculation", "Earth’s magnetism"], 'SUBTOPIC', 'Physics', 'All Test', 'Magnetic Effects of Current & Magnetism'),
    ...generateTests('neet', ["Faraday’s law", "Lenz's law", "eddy currents", "AC circuits", "RMS values"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Induction and AC'),
    ...generateTests('neet', ["Displacement current", "EM spectrum", "transverse nature of EM waves"], 'SUBTOPIC', 'Physics', 'All Test', 'Electromagnetic Waves'),
    ...generateTests('neet', ["Reflection/refraction", "lens formula", "optical instruments", "interference", "diffraction", "Young's double-slit experiment"], 'SUBTOPIC', 'Physics', 'All Test', 'Optics'),
    ...generateTests('neet', ["Photoelectric effect", "de Broglie wavelength", "Bohr’s model", "radioactivity"], 'SUBTOPIC', 'Physics', 'All Test', 'Modern Physics (Dual Nature & Atoms/Nuclei)'),
    ...generateTests('neet', ["Energy bands", "intrinsic/extrinsic semiconductors", "diodes", "logic gates"], 'SUBTOPIC', 'Physics', 'All Test', 'Semiconductor Electronics'),

    // Subtopic Tests (Chemistry)
    ...generateTests('neet', ["Mole concept", "molar mass", "empirical/molecular formula", "stoichiometry"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Some Basic Concepts of Chemistry'),
    ...generateTests('neet', ["Bohr’s model", "quantum mechanical model", "electronic configuration"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Structure of Atom'),
    ...generateTests('neet', ["Gas laws", "kinetic molecular theory", "ideal/real behavior", "intermolecular forces"], 'SUBTOPIC', 'Chemistry', 'All Test', 'States of Matter'),
    ...generateTests('neet', ["First law", "enthalpy (ΔH)", "entropy (ΔS)", "Gibbs free energy (ΔG)", "spontaneity"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Thermodynamics'),
    ...generateTests('neet', ["Chemical equilibrium", "Le Chatelier's principle", "ionic equilibrium", "pH", "buffer solutions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Equilibrium'),
    ...generateTests('neet', ["Oxidation number", "balancing", "oxidation/reduction reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Redox Reactions'),
    ...generateTests('neet', ["Trends in periodic properties (ionization enthalpy, electronegativity)"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Classification of Elements & Periodicity'),
    ...generateTests('neet', ["VSEPR theory", "hybridization", "molecular orbital theory"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Bonding'),
    ...generateTests('neet', ["Hydrogen preparation", "alkali/alkaline earth metals properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrogen & s-Block Elements'),
    ...generateTests('neet', ["Properties", "compounds", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'p-Block Elements (Group 13 & 14)'),
    ...generateTests('neet', ["Air, water, soil pollution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Environmental Chemistry'),
    ...generateTests('neet', ["Purification", "classification", "nomenclature", "isomerism", "electronic effect", "acidic strength", "basic strength", "reaction mechanisms"], 'SUBTOPIC', 'Chemistry', 'All Test', 'General Organic Chemistry (GOC)'),
    ...generateTests('neet', ["Alkanes", "alkenes", "alkynes", "aromatic hydrocarbons"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Hydrocarbons'),
    ...generateTests('neet', ["Concentration terms", "Raoult’s law", "ideal/non-ideal solutions", "colligative properties"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Solutions'),
    ...generateTests('neet', ["Redox reactions", "Nernst equation", "conductivity", "galvanic cells", "electrolytic cells"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Electrochemistry'),
    ...generateTests('neet', ["Rate of reaction", "rate law", "Arrhenius equation", "catalysis"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Chemical Kinetics'),
    ...generateTests('neet', ["Adsorption", "colloids", "emulsion"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Surface Chemistry'),
    ...generateTests('neet', ["Transition elements", "lanthanides", "actinoids", "alloys"], 'SUBTOPIC', 'Chemistry', 'All Test', 'd- and f-Block Elements'),
    ...generateTests('neet', ["Werner’s theory", "IUPAC nomenclature", "bonding", "isomerism"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Coordination Compounds'),
    ...generateTests('neet', ["Nomenclature", "nature of C–X bond", "mechanism of substitution"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Haloalkanes & Haloarenes'),
    ...generateTests('neet', ["Preparation", "properties", "reactions"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Alcohols, Phenols & Ethers'),
    ...generateTests('neet', ["Synthesis", "mechanisms", "uses"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Aldehydes, Ketones & Carboxylic Acids'),
    ...generateTests('neet', ["Classification", "structure", "basicity", "Diazonium salts"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Amines'),
    ...generateTests('neet', ["Carbohydrates", "proteins", "nucleic acids", "vitamins"], 'SUBTOPIC', 'Chemistry', 'All Test', 'Biomolecules'),
    
    // Subtopic Tests (Botany)
    ...generateTests('neet', ["Principles of Inheritance", "Molecular Basis of Inheritance"], 'SUBTOPIC', 'Botany', 'All Test', 'Genetics and Evolution'),
    ...generateTests('neet', ["Photosynthesis", "Respiration", "Growth & Development", "Transport & Mineral Nutrition"], 'SUBTOPIC', 'Botany', 'All Test', 'Plant Physiology'),
    ...generateTests('neet', ["Biological Classification", "Plant Kingdom"], 'SUBTOPIC', 'Botany', 'All Test', 'Plant Diversity & Classification'),
    ...generateTests('neet', ["Sexual Reproduction in Flowering Plants"], 'SUBTOPIC', 'Botany', 'All Test', 'Reproduction in Plants'),
    ...generateTests('neet', ["Cell Life & Division", "Biomolecules"], 'SUBTOPIC', 'Botany', 'All Test', 'Cell: Structure and Functions'),
    ...generateTests('neet', ["Morphology", "Anatomy"], 'SUBTOPIC', 'Botany', 'All Test', 'Morphology & Anatomy of Flowering Plants'),
    ...generateTests('neet', ["Organisms and Populations", "Ecosystem Structure", "Biodiversity & Conservation", "Environmental Issues"], 'SUBTOPIC', 'Botany', 'All Test', 'Ecology & Environment'),
    
    // Subtopic Tests (Zoology)
    ...generateTests('neet', ["Basis of classification", "phylum-wise features"], 'SUBTOPIC', 'Zoology', 'All Test', 'Animal Kingdom'),
    ...generateTests('neet', ["Animal tissues", "cockroach anatomy and morphology"], 'SUBTOPIC', 'Zoology', 'All Test', 'Structural Organisation in Animals'),
    ...generateTests('neet', ["Carbohydrates, proteins, lipids, nucleic acids, and enzymes"], 'SUBTOPIC', 'Zoology', 'All Test', 'Biomolecules'),
    ...generateTests('neet', ["Digestion & Absorption", "Breathing & Exchange of Gases", "Body Fluids & Circulation", "Excretory Products & Elimination", "Locomotion & Movement", "Neural Control & Coordination", "Chemical Coordination & Integration"], 'SUBTOPIC', 'Zoology', 'All Test', 'Human Physiology'),
    ...generateTests('neet', ["Human reproduction", "Evolution theories"], 'SUBTOPIC', 'Zoology', 'All Test', 'Reproduction & Evolution'),
    ...generateTests('neet', ["Common diseases", "immunity", "cancer", "drug abuse"], 'SUBTOPIC', 'Zoology', 'All Test', 'Human Health & Disease'),
    ...generateTests('neet', ["Principles & Processes", "Applications"], 'SUBTOPIC', 'Zoology', 'All Test', 'Biotechnology')
];
