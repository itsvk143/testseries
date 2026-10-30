/**
 * CENTRAL CHAPTER MASTER SERVICE (CommonJS & ESM compatible)
 * ============================================================
 * Establishes one centrally managed, canonical chapter classification system
 * for NEET (Botany 17 active, Zoology 15 active, 5 excluded), JEE Mains, and BITSAT.
 *
 * Exam → Subject → Chapter → Topic → Subtopic → Test → Questions
 */

'use strict';

const NEET_BOTANY_17 = [
    { order: 1, name: 'The Living World', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['What is Living & Characteristics of Life', 'Diversity in Living World & Taxonomy', 'Taxonomic Categories & Hierarchy', 'Taxonomical Aids'] },
    { order: 2, name: 'Biological Classification', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Five Kingdom Classification', 'Kingdom Monera', 'Kingdom Protista', 'Kingdom Fungi', 'Viruses, Viroids, Prions and Lichens'] },
    { order: 3, name: 'Plant Kingdom', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Plant Life Cycles & Alternation of Generations'] },
    { order: 4, name: 'Morphology of Flowering Plants', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Root, Stem and Leaf Modifications', 'Inflorescence and Flower Structure', 'Placentation, Fruit and Seed', 'Description of Families (Fabaceae, Solanaceae, Liliaceae)'] },
    { order: 5, name: 'Anatomy of Flowering Plants', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Meristematic and Permanent Tissues', 'Tissue Systems (Epidermal, Ground, Vascular)', 'Anatomy of Dicot and Monocot Root & Stem', 'Anatomy of Dicot and Monocot Leaf', 'Secondary Growth in Dicot Stem and Root'] },
    { order: 6, name: 'Cell: The Unit of Life', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Prokaryotic Cell Structure and Inclusions', 'Plasma Membrane & Fluid Mosaic Model', 'Endomembrane System (ER, Golgi, Lysosomes, Vacuoles)', 'Mitochondria, Plastids and Ribosomes', 'Cytoskeleton, Cilia, Flagella and Nucleus'] },
    { order: 7, name: 'Cell Cycle and Cell Division', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Cell Cycle Stages (G1, S, G2, M)', 'Mitosis and Cytokinesis', 'Meiosis I (Prophase I Stages)', 'Meiosis II & Significance of Meiosis'] },
    { order: 8, name: 'Photosynthesis in Higher Plants', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Photosynthetic Pigments & Light Absorption', 'Light Reaction and Photophosphorylation', 'Calvin Cycle (C3 Pathway)', 'Hatch-Slack Pathway (C4 Pathway)', 'Photorespiration & Factors Affecting Photosynthesis'] },
    { order: 9, name: 'Respiration in Plants', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Glycolysis (EMP Pathway)', 'Fermentation and Anaerobic Respiration', 'TCA Cycle (Krebs Cycle)', 'Electron Transport System (ETS) & Oxidative Phosphorylation', 'Respiratory Balance Sheet & RQ'] },
    { order: 10, name: 'Plant Growth and Development', class: '11', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Growth Phases, Rates and Conditions', 'Differentiation, Dedifferentiation and Redifferentiation', 'Plant Growth Promoters (Auxin, Gibberellin, Cytokinin)', 'Plant Growth Inhibitors (Ethylene, Abscisic Acid)', 'Photoperiodism, Vernalization and Seed Dormancy'] },
    { order: 11, name: 'Sexual Reproduction in Flowering Plants', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Microsporogenesis & Pollen Development', 'Megasporogenesis & Embryo Sac', 'Pollination Mechanisms & Outbreeding Devices', 'Pollen-Pistil Interaction & Double Fertilization', 'Endosperm, Embryo & Seed Development', 'Apomixis and Polyembryony'] },
    { order: 12, name: 'Principles of Inheritance and Variation', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ["Mendel's Laws of Inheritance", 'Incomplete Dominance, Codominance & Multiple Alleles', 'Chromosomal Theory of Inheritance', 'Linkage and Genetic Recombination', 'Sex Determination & Mutations', 'Mendelian and Chromosomal Genetic Disorders'] },
    { order: 13, name: 'Molecular Basis of Inheritance', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['DNA Structure, Packaging & Search for Genetic Material', 'DNA Replication Mechanism & Enzymes', 'Transcription and RNA Processing', 'Genetic Code and Translation', 'Regulation of Gene Expression (Lac Operon)', 'Human Genome Project & DNA Fingerprinting'] },
    { order: 14, name: 'Microbes in Human Welfare', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Microbes in Household & Industrial Products', 'Microbes in Sewage Treatment & Biogas Production', 'Microbes as Biocontrol Agents & Biofertilizers'] },
    { order: 15, name: 'Organisms and Populations', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Organism and Abiotic Factors / Adaptations', 'Population Attributes and Growth Models', 'Population Interactions (Mutualism, Competition, Predation, Parasitism)'] },
    { order: 16, name: 'Ecosystem', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Ecosystem Structure and Productivity', 'Decomposition and Energy Flow', 'Ecological Pyramids (Number, Biomass, Energy)', 'Ecological Succession & Nutrient Cycling'] },
    { order: 17, name: 'Biodiversity and Conservation', class: '12', subject: 'Botany', syllabusStatus: 'ACTIVE', subtopics: ['Patterns and Levels of Biodiversity', 'Loss of Biodiversity & Causes (Evil Quartet)', 'In-situ and Ex-situ Conservation Strategies'] }
];

const NEET_ZOOLOGY_15 = [
    { order: 1, name: 'Animal Kingdom', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Basis of Animal Classification', 'Non-chordates (Porifera to Hemichordata)', 'Chordata (Protochordata, Cyclostomata, Fishes)', 'Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)'] },
    { order: 2, name: 'Structural Organisation in Animals', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Epithelial Tissue & Cell Junctions', 'Connective Tissue (Loose, Dense, Specialized)', 'Muscular and Nervous Tissues', 'Morphology & Anatomy of Frog / Cockroach'] },
    { order: 3, name: 'Biomolecules', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Primary and Secondary Metabolites', 'Carbohydrates and Lipids Structure', 'Proteins and Nucleic Acids Structure', 'Enzymes Properties, Mechanism, Classification and Factors'] },
    { order: 4, name: 'Breathing and Exchange of Gases', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Human Respiratory System Anatomy', 'Mechanism of Breathing & Pulmonary Volumes', 'Exchange and Transport of Gases (O2 & CO2)', 'Regulation of Respiration & Respiratory Disorders'] },
    { order: 5, name: 'Body Fluids and Circulation', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Blood Composition, Groups (ABO, Rh) & Coagulation', 'Lymph & Circulatory Pathways', 'Human Heart Anatomy & Cardiac Cycle', 'Electrocardiogram (ECG) & Double Circulation', 'Regulation of Cardiac Activity & Circulatory Disorders'] },
    { order: 6, name: 'Excretory Products and their Elimination', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Modes of Excretion & Human Excretory System', 'Nephron Structure and Urine Formation', 'Counter-Current Mechanism & Osmoregulation', 'Regulation of Kidney Function (RAAS, ADH, ANF)', 'Micturition & Excretory Disorders'] },
    { order: 7, name: 'Locomotion and Movement', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Types of Movement & Skeletal Muscle Structure', 'Mechanism of Muscle Contraction (Sliding Filament)', 'Human Skeletal System (Axial & Appendicular)', 'Joints Types & Skeletal/Muscular Disorders'] },
    { order: 8, name: 'Neural Control and Coordination', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Human Neural System & Structure of Neuron', 'Generation and Conduction of Nerve Impulse', 'Central Nervous System (Brain & Spinal Cord)', 'Peripheral / Autonomic Nervous System & Reflex Action', 'Sensory Reception (Eye and Ear Anatomy/Physiology)'] },
    { order: 9, name: 'Chemical Coordination and Integration', class: '11', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Endocrine Glands & Hormone Classification', 'Hypothalamus and Pituitary Hormones', 'Thyroid, Parathyroid, Adrenal and Pancreatic Hormones', 'Gonadal and Other Tissue Hormones', 'Mechanism of Hormone Action & Endocrine Disorders'] },
    { order: 10, name: 'Human Reproduction', class: '12', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Male Reproductive System Anatomy & Histology', 'Female Reproductive System Anatomy & Histology', 'Gametogenesis (Spermatogenesis and Oogenesis)', 'Menstrual Cycle and Hormonal Regulation', 'Fertilization, Cleavage and Implantation', 'Pregnancy, Placenta, Parturition and Lactation'] },
    { order: 11, name: 'Reproductive Health', class: '12', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Reproductive Health Problems & Strategies', 'Contraceptive Methods & Population Control', 'Medical Termination of Pregnancy (MTP) & STIs', 'Infertility & Assisted Reproductive Technologies (ART)'] },
    { order: 12, name: 'Evolution', class: '12', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Origin of Life & Early Earth Theories', 'Evidences of Evolution (Homology, Analogy, Paleontology)', 'Theories of Evolution (Lamarck, Darwin, Mutation)', 'Hardy-Weinberg Principle & Genetic Drift', 'Adaptive Radiation, Speciation & Human Evolution'] },
    { order: 13, name: 'Human Health and Disease', class: '12', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Common Infectious Pathogens in Humans', 'Innate and Acquired Immunity, Antibodies & Vaccination', 'Immune System Disorders, Allergy & Autoimmunity', 'AIDS (HIV Pathogenesis & Prevention)', 'Cancer Types, Detection and Therapy', 'Drug & Alcohol Abuse, Prevention & Rehabilitation'] },
    { order: 14, name: 'Biotechnology: Principles and Processes', class: '12', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Principles of Genetic Engineering & Recombinant DNA', 'Tools of Recombinant DNA Technology (Restriction Enzymes)', 'Cloning Vectors (Plasmids, pBR322) & Competent Host', 'Processes of r-DNA (Isolation, PCR Amplification, Ligation)', 'Bioreactors and Downstream Processing'] },
    { order: 15, name: 'Biotechnology and Its Applications', class: '12', subject: 'Zoology', syllabusStatus: 'ACTIVE', subtopics: ['Biotechnological Applications in Agriculture (Bt Crops, RNAi)', 'Biotechnological Applications in Medicine (Insulin, Gene Therapy)', 'Molecular Diagnosis (PCR, ELISA)', 'Transgenic Animals, Biosafety & Ethical Issues (Biopiracy)'] }
];

const NEET_EXCLUDED_5 = [
    { order: 101, name: 'Digestion and Absorption', class: '11', subject: 'Zoology', syllabusStatus: 'EXCLUDED', reason: 'Excluded from active NEET syllabus' },
    { order: 102, name: 'Transport in Plants', class: '11', subject: 'Botany', syllabusStatus: 'EXCLUDED', reason: 'Excluded from active NEET syllabus' },
    { order: 103, name: 'Reproduction in Organisms', class: '12', subject: 'Zoology', syllabusStatus: 'EXCLUDED', reason: 'Excluded from active NEET syllabus' },
    { order: 104, name: 'Mineral Nutrition', class: '11', subject: 'Botany', syllabusStatus: 'EXCLUDED', reason: 'Excluded from active NEET syllabus' },
    { order: 105, name: 'Environmental Issues', class: '12', subject: 'Botany', syllabusStatus: 'EXCLUDED', reason: 'Excluded from active NEET syllabus' }
];

function norm(str) {
    return (str || '')
        .toLowerCase()
        .replace(/[–—−]/g, '-')
        .replace(/[\x27\x60’]/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Maps raw syllabus chapter strings to the canonical chapter record.
 * Strictly enforces:
 * - Biomolecules -> Zoology
 * - Principles of Inheritance -> Botany
 * - Microbes in Human Welfare -> Botany
 * - Biotechnology (both) -> Zoology
 */
function getCanonicalChapter(subject, rawChapterName) {
    const raw = (rawChapterName || '').trim();
    const clean = norm(raw);
    const subjNorm = (subject || '').trim().toLowerCase();

    if (!raw) return { subject: subject || '', chapter: '', syllabusStatus: 'ACTIVE' };

    // --- ZOOLOGY CHAPTERS ---
    if (clean.includes('animal kingdom')) {
        return { subject: 'Zoology', chapter: 'Animal Kingdom', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('structural organisation in animals') || clean.includes('structural organization in animals')) {
        return { subject: 'Zoology', chapter: 'Structural Organisation in Animals', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    // Biomolecules -> MUST BE ZOOLOGY (Class 11) for Biology contexts
    if (clean.includes('biomolecule') || clean.includes('biomolecules')) {
        if (subjNorm === 'chemistry') {
            return { subject: 'Chemistry', chapter: 'Biomolecules', classGrade: '12', syllabusStatus: 'ACTIVE' };
        }
        return { subject: 'Zoology', chapter: 'Biomolecules', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('breathing') || clean.includes('exchange of gases')) {
        return { subject: 'Zoology', chapter: 'Breathing and Exchange of Gases', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('body fluids') || clean.includes('circulation')) {
        return { subject: 'Zoology', chapter: 'Body Fluids and Circulation', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('excretory') || clean.includes('elimination')) {
        return { subject: 'Zoology', chapter: 'Excretory Products and their Elimination', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('locomotion') || clean.includes('movement')) {
        return { subject: 'Zoology', chapter: 'Locomotion and Movement', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('neural control') || clean.includes('nervous system')) {
        return { subject: 'Zoology', chapter: 'Neural Control and Coordination', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('chemical coordination') || clean.includes('endocrine')) {
        return { subject: 'Zoology', chapter: 'Chemical Coordination and Integration', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('human reproduction') || (clean === 'reproduction' && subjNorm === 'zoology')) {
        return { subject: 'Zoology', chapter: 'Human Reproduction', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('reproductive health')) {
        return { subject: 'Zoology', chapter: 'Reproductive Health', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('evolution')) {
        return { subject: 'Zoology', chapter: 'Evolution', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('human health and disease') || clean.includes('human health')) {
        return { subject: 'Zoology', chapter: 'Human Health and Disease', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    // Biotechnology -> MUST BE ZOOLOGY (Class 12)
    if (clean.includes('biotechnology: principles') || clean.includes('principles and processes') || clean.includes('principles of biotechnology')) {
        return { subject: 'Zoology', chapter: 'Biotechnology: Principles and Processes', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('biotechnology and its applications') || clean.includes('applications of biotechnology') || clean === 'biotechnology') {
        return { subject: 'Zoology', chapter: 'Biotechnology and Its Applications', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }

    // --- BOTANY CHAPTERS ---
    if (clean.includes('living world')) {
        return { subject: 'Botany', chapter: 'The Living World', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('biological classification')) {
        return { subject: 'Botany', chapter: 'Biological Classification', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('plant kingdom')) {
        return { subject: 'Botany', chapter: 'Plant Kingdom', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('morphology of flowering plants')) {
        return { subject: 'Botany', chapter: 'Morphology of Flowering Plants', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('anatomy of flowering plants')) {
        return { subject: 'Botany', chapter: 'Anatomy of Flowering Plants', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('cell: the unit of life') || clean.includes('cell the unit of life') || clean === 'cell') {
        return { subject: 'Botany', chapter: 'Cell: The Unit of Life', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('cell cycle') || clean.includes('cell division')) {
        return { subject: 'Botany', chapter: 'Cell Cycle and Cell Division', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('photosynthesis')) {
        return { subject: 'Botany', chapter: 'Photosynthesis in Higher Plants', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('respiration in plants')) {
        return { subject: 'Botany', chapter: 'Respiration in Plants', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('plant growth')) {
        return { subject: 'Botany', chapter: 'Plant Growth and Development', classGrade: '11', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('sexual reproduction in flowering plants') || (clean.includes('reproduction in flowering plants'))) {
        return { subject: 'Botany', chapter: 'Sexual Reproduction in Flowering Plants', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    // Principles of Inheritance -> MUST BE BOTANY (Class 12)
    if (clean.includes('principles of inheritance') || clean.includes('inheritance and variation')) {
        return { subject: 'Botany', chapter: 'Principles of Inheritance and Variation', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('molecular basis of inheritance') || clean.includes('molecular basis')) {
        return { subject: 'Botany', chapter: 'Molecular Basis of Inheritance', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    // Microbes in Human Welfare -> MUST BE BOTANY (Class 12)
    if (clean.includes('microbes in human welfare') || clean.includes('microbes')) {
        return { subject: 'Botany', chapter: 'Microbes in Human Welfare', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('organisms and populations')) {
        return { subject: 'Botany', chapter: 'Organisms and Populations', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('ecosystem')) {
        return { subject: 'Botany', chapter: 'Ecosystem', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }
    if (clean.includes('biodiversity')) {
        return { subject: 'Botany', chapter: 'Biodiversity and Conservation', classGrade: '12', syllabusStatus: 'ACTIVE' };
    }

    // --- EXCLUDED CHAPTERS ---
    if (clean.includes('digestion') || clean.includes('absorption')) {
        return { subject: 'Zoology', chapter: 'Digestion and Absorption', classGrade: '11', syllabusStatus: 'EXCLUDED' };
    }
    if (clean.includes('transport in plants')) {
        return { subject: 'Botany', chapter: 'Transport in Plants', classGrade: '11', syllabusStatus: 'EXCLUDED' };
    }
    if (clean.includes('reproduction in organisms')) {
        return { subject: 'Zoology', chapter: 'Reproduction in Organisms', classGrade: '12', syllabusStatus: 'EXCLUDED' };
    }
    if (clean.includes('mineral nutrition')) {
        return { subject: 'Botany', chapter: 'Mineral Nutrition', classGrade: '11', syllabusStatus: 'EXCLUDED' };
    }
    if (clean.includes('environmental issues')) {
        return { subject: 'Botany', chapter: 'Environmental Issues', classGrade: '12', syllabusStatus: 'EXCLUDED' };
    }

    return { subject: subject || '', chapter: raw, syllabusStatus: 'ACTIVE' };
}

function getNeetChapters() {
    return {
        Botany: {
            '11': NEET_BOTANY_17.filter(c => c.class === '11').map(c => c.name),
            '12': NEET_BOTANY_17.filter(c => c.class === '12').map(c => c.name)
        },
        Zoology: {
            '11': NEET_ZOOLOGY_15.filter(c => c.class === '11').map(c => c.name),
            '12': NEET_ZOOLOGY_15.filter(c => c.class === '12').map(c => c.name)
        }
    };
}

function getActiveNeetChapters(subject) {
    if (subject === 'Botany') return NEET_BOTANY_17.map(c => c.name);
    if (subject === 'Zoology') return NEET_ZOOLOGY_15.map(c => c.name);
    return [];
}

function getExcludedNeetChapters() {
    return NEET_EXCLUDED_5;
}

function isChapterExcluded(chapterName) {
    const clean = norm(chapterName);
    return NEET_EXCLUDED_5.some(c => norm(c.name) === clean);
}

function getSubtopicsForChapter(subject, chapterName) {
    const clean = norm(chapterName);
    const list = subject === 'Botany' ? NEET_BOTANY_17 : subject === 'Zoology' ? NEET_ZOOLOGY_15 : [...NEET_BOTANY_17, ...NEET_ZOOLOGY_15];
    const match = list.find(c => norm(c.name) === clean);
    return match ? match.subtopics : [];
}

module.exports = {
    NEET_BOTANY_17,
    NEET_ZOOLOGY_15,
    NEET_EXCLUDED_5,
    getCanonicalChapter,
    getNeetChapters,
    getActiveNeetChapters,
    getExcludedNeetChapters,
    isChapterExcluded,
    getSubtopicsForChapter
};

