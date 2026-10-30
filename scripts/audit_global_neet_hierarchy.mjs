import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error('MONGODB_URI is not set in environment!');
    process.exit(1);
}

const BOTANY_17 = [
    { order: 1, name: 'The Living World', class: '11', keywords: ['living world', 'taxonomic', 'taxonomy', 'binomial nomenclature', 'taxonomical aids', 'herbarium', 'botanical garden'] },
    { order: 2, name: 'Biological Classification', class: '11', keywords: ['biological classification', 'five kingdom', 'monera', 'protista', 'fungi', 'ascomycetes', 'basidiomycetes', 'lichen', 'mycoplasma', 'archaebacteria', 'eubacteria', 'chitin', 'citrus canker'] },
    { order: 3, name: 'Plant Kingdom', class: '11', keywords: ['plant kingdom', 'algae', 'chlorophyceae', 'phaeophyceae', 'rhodophyceae', 'bryophyte', 'pteridophyte', 'gymnosperm', 'angiosperm', 'archegonium', 'protonema', 'prothallus', 'female cone', 'conifer'] },
    { order: 4, name: 'Morphology of Flowering Plants', class: '11', keywords: ['morphology of flowering plants', 'inflorescence', 'aestivation', 'placentation', 'fabaceae', 'solanaceae', 'liliaceae', 'brassicaceae', 'root modification', 'stem modification', 'phyllode', 'pneumatophore'] },
    { order: 5, name: 'Anatomy of Flowering Plants', class: '11', keywords: ['anatomy of flowering plants', 'meristem', 'parenchyma', 'collenchyma', 'sclerenchyma', 'xylem', 'phloem', 'vascular bundle', 'casparian strip', 'stomata', 'cambium', 'secondary growth', 'annual ring', 'bark', 'lenticel'] },
    { order: 6, name: 'Cell: The Unit of Life', class: '11', keywords: ['cell: the unit of life', 'cell the unit of life', 'prokaryotic cell', 'mesosome', 'plasma membrane', 'fluid mosaic', 'endoplasmic reticulum', 'golgi', 'lysosome', 'vacuole', 'mitochondria', 'plastid', 'chloroplast', 'ribosome', 'centrosome', 'cilium', 'flagella', 'nuclear pore', 'chromatin'] },
    { order: 7, name: 'Cell Cycle and Cell Division', class: '11', keywords: ['cell cycle and cell division', 'cell cycle', 'mitosis', 'meiosis', 'prophase', 'metaphase', 'anaphase', 'telophase', 'interphase', 'g1 phase', 's phase', 'g2 phase', 'synaptonemal complex', 'chiasmata', 'crossing over', 'bivalent', 'cytokinesis'] },
    { order: 8, name: 'Photosynthesis in Higher Plants', class: '11', keywords: ['photosynthesis in higher plants', 'photosynthesis', 'chlorophyll', 'light reaction', 'photophosphorylation', 'cyclic photophosphorylation', 'calvin cycle', 'c3 cycle', 'c4 pathway', 'hatch-slack', 'krantz anatomy', 'photorespiration', 'rubisco', 'blackman'] },
    { order: 9, name: 'Respiration in Plants', class: '11', keywords: ['respiration in plants', 'glycolysis', 'emp pathway', 'krebs cycle', 'tca cycle', 'citric acid cycle', 'electron transport system', 'ets', 'oxidative phosphorylation', 'fermentation', 'respiratory quotient', 'rq', 'cytochrome'] },
    { order: 10, name: 'Plant Growth and Development', class: '11', keywords: ['plant growth and development', 'plant growth regulators', 'auxin', 'gibberellin', 'cytokinin', 'ethylene', 'abscisic acid', 'aba', 'photoperiodism', 'vernalization', 'seed dormancy', 'plasticity', 'differentiation'] },
    { order: 11, name: 'Sexual Reproduction in Flowering Plants', class: '12', keywords: ['sexual reproduction in flowering plants', 'microsporogenesis', 'megasporogenesis', 'pollen grain', 'embryo sac', 'pollination', 'anemophily', 'entomophily', 'outbreeding devices', 'double fertilization', 'triple fusion', 'endosperm', 'apomixis', 'polyembryony'] },
    { order: 12, name: 'Principles of Inheritance and Variation', class: '12', keywords: ['principles of inheritance and variation', 'principles of inheritance', 'mendel', 'monohybrid', 'dihybrid', 'law of segregation', 'independent assortment', 'incomplete dominance', 'codominance', 'multiple alleles', 'linkage', 'recombination', 'sex determination', 'hemophilia', 'thalassemia', 'down syndrome', 'klinefelter', 'turner syndrome', 'pedigree analysis'] },
    { order: 13, name: 'Molecular Basis of Inheritance', class: '12', keywords: ['molecular basis of inheritance', 'dna structure', 'double helix', 'nucleosome', 'transforming principle', 'griffith', 'hershey-chase', 'meselson-stahl', 'dna replication', 'transcription', 'promoter', 'rna polymerase', 'intron', 'exon', 'splicing', 'genetic code', 'codon', 'trna', 'translation', 'lac operon', 'human genome project', 'dna fingerprinting'] },
    { order: 14, name: 'Microbes in Human Welfare', class: '12', keywords: ['microbes in human welfare', 'lactic acid bacteria', 'lab', 'fermentation', 'brewer yeast', 'saccharomyces', 'antibiotics', 'penicillin', 'statins', 'cyclosporin a', 'sewage treatment', 'bod', 'activated sludge', 'methanogen', 'biogas', 'biocontrol', 'bacillus thuringiensis', 'trichoderma', 'mycorrhiza', 'biofertilizer', 'rhizobium'] },
    { order: 15, name: 'Organisms and Populations', class: '12', keywords: ['organisms and populations', 'abiotic factors', 'regulators', 'conformers', 'adaptation', 'allen rule', 'population attributes', 'birth rate', 'death rate', 'growth models', 'exponential growth', 'logistic growth', 'carrying capacity', 'mutualism', 'competition', 'gause', 'predation', 'parasitism', 'commensalism', 'amensalism'] },
    { order: 16, name: 'Ecosystem', class: '12', keywords: ['ecosystem', 'productivity', 'gross primary productivity', 'net primary productivity', 'decomposition', 'food chain', 'food web', 'trophic level', 'energy flow', 'ten percent law', 'ecological pyramid', 'pyramid of biomass', 'pyramid of energy', 'succession', 'pioneer species', 'climax community'] },
    { order: 17, name: 'Biodiversity and Conservation', class: '12', keywords: ['biodiversity and conservation', 'species diversity', 'genetic diversity', 'ecological diversity', 'species-area relationship', 'latitudinal gradient', 'rivet popper', 'evil quartet', 'habitat loss', 'over-exploitation', 'alien species', 'co-extinction', 'in-situ conservation', 'national park', 'sanctuary', 'biosphere reserve', 'ex-situ conservation', 'zoological park', 'botanical garden', 'cryopreservation'] }
];

const ZOOLOGY_15 = [
    { order: 1, name: 'Animal Kingdom', class: '11', keywords: ['animal kingdom', 'levels of organization', 'coelom', 'porifera', 'coelenterata', 'cnidaria', 'ctenophora', 'platyhelminthes', 'aschelminthes', 'annelida', 'arthropoda', 'mollusca', 'echinodermata', 'hemichordata', 'chordata', 'protochordata', 'cyclostomata', 'chondrichthyes', 'osteichthyes', 'amphibia', 'reptilia', 'aves', 'mammalia'] },
    { order: 2, name: 'Structural Organisation in Animals', class: '11', keywords: ['structural organisation in animals', 'epithelial tissue', 'squamous', 'cuboidal', 'columnar', 'ciliated', 'tight junction', 'gap junction', 'connective tissue', 'areolar', 'adipose', 'cartilage', 'bone', 'blood', 'skeletal muscle', 'smooth muscle', 'cardiac muscle', 'cockroach', 'periplaneta', 'frog', 'rana tigrina'] },
    { order: 3, name: 'Biomolecules', class: '11', keywords: ['biomolecules', 'biomolecule', 'carbohydrate', 'monosaccharide', 'polysaccharide', 'glucose', 'starch', 'glycogen', 'cellulose', 'lipid', 'fatty acid', 'triglyceride', 'phospholipid', 'lecithin', 'amino acid', 'peptide bond', 'protein', 'primary structure', 'secondary structure', 'tertiary structure', 'quaternary structure', 'nucleotide', 'nucleoside', 'atp', 'enzyme', 'activation energy', 'competitive inhibition', 'coenzyme', 'cofactor'] },
    { order: 4, name: 'Breathing and Exchange of Gases', class: '11', keywords: ['breathing and exchange of gases', 'respiratory system', 'pharynx', 'larynx', 'trachea', 'bronchi', 'alveoli', 'inspiration', 'expiration', 'diaphragm', 'intercostal', 'tidal volume', 'inspiratory reserve volume', 'expiratory reserve volume', 'residual volume', 'vital capacity', 'total lung capacity', 'partial pressure', 'oxygen dissociation curve', 'oxyhemoglobin', 'carbaminohemoglobin', 'bicarbonate', 'emphysema', 'asthma'] },
    { order: 5, name: 'Body Fluids and Circulation', class: '11', keywords: ['body fluids and circulation', 'blood', 'plasma', 'erythrocyte', 'rbc', 'leukocyte', 'wbc', 'platelet', 'thrombocyte', 'abo blood grouping', 'rh factor', 'erythroblastosis foetalis', 'coagulation of blood', 'prothrombin', 'fibrinogen', 'lymph', 'human heart', 'sino-atrial node', 'sa node', 'av node', 'cardiac cycle', 'stroke volume', 'cardiac output', 'electrocardiogram', 'ecg', 'p wave', 'qrs complex', 't wave', 'double circulation', 'systemic circulation', 'pulmonary circulation', 'hypertension', 'angina', 'coronary artery disease'] },
    { order: 6, name: 'Excretory Products and their Elimination', class: '11', keywords: ['excretory products and their elimination', 'ammonotelic', 'ureotelic', 'uricotelic', 'nephron', 'glomerulus', 'bowman capsule', 'pct', 'loop of henle', 'dct', 'collecting duct', 'glomerular filtration', 'gfr', 'reabsorption', 'tubular secretion', 'counter-current mechanism', 'juxtaglomerular apparatus', 'jga', 'renin', 'raas', 'angiotensin', 'aldosterone', 'adh', 'vasopressin', 'anf', 'micturition', 'uremia', 'dialysis', 'renal calculi', 'glomerulonephritis'] },
    { order: 7, name: 'Locomotion and Movement', class: '11', keywords: ['locomotion and movement', 'amoeboid movement', 'ciliary movement', 'muscular movement', 'sarcomere', 'myofibril', 'actin', 'myosin', 'troponin', 'tropomyosin', 'sliding filament theory', 'cross bridge', 'sarcoplasmic reticulum', 'calcium ions', 'myasthenia gravis', 'tetany', 'muscular dystrophy', 'axial skeleton', 'skull', 'vertebral column', 'ribs', 'sternum', 'appendicular skeleton', 'pectoral girdle', 'pelvic girdle', 'joints', 'synovial joint', 'fibrous joint', 'cartilaginous joint', 'arthritis', 'gout'] },
    { order: 8, name: 'Neural Control and Coordination', class: '11', keywords: ['neural control and coordination', 'neuron', 'dendrite', 'axon', 'myelin sheath', 'schwann cell', 'resting membrane potential', 'action potential', 'depolarization', 'repolarization', 'synapse', 'neurotransmitter', 'acetylcholine', 'central nervous system', 'cns', 'forebrain', 'cerebrum', 'thalamus', 'hypothalamus', 'midbrain', 'hindbrain', 'cerebellum', 'pons', 'medulla oblongata', 'reflex arc', 'sensory reception', 'eye', 'cornea', 'retina', 'rods', 'cones', 'ear', 'organ of corti', 'cochlea', 'vestibular apparatus'] },
    { order: 9, name: 'Chemical Coordination and Integration', class: '11', keywords: ['chemical coordination and integration', 'endocrine gland', 'hormone', 'pituitary gland', 'growth hormone', 'prolactin', 'tsh', 'acth', 'lh', 'fsh', 'oxytocin', 'vasopressin', 'pineal gland', 'melatonin', 'thyroid gland', 'thyroxine', 'goitre', 'cretinism', 'parathyroid gland', 'parathyroid hormone', 'pth', 'thymus', 'thymosin', 'adrenal gland', 'adrenaline', 'noradrenaline', 'corticoids', 'aldosterone', 'cortisol', 'pancreas', 'insulin', 'glucagon', 'diabetes mellitus', 'testis', 'testosterone', 'ovary', 'estrogen', 'progesterone', 'atrial natriuretic factor', 'erythropoietin', 'mechanism of hormone action', 'second messenger', 'camp'] },
    { order: 10, name: 'Human Reproduction', class: '12', keywords: ['human reproduction', 'male reproductive system', 'testis', 'seminiferous tubule', 'sertoli cell', 'leydig cell', 'epididymis', 'vas deferens', 'seminal vesicle', 'prostate gland', 'female reproductive system', 'ovary', 'fallopian tube', 'oviduct', 'uterus', 'cervix', 'vagina', 'mammary gland', 'spermatogenesis', 'spermatogonia', 'sperm', 'acrosome', 'oogenesis', 'primary oocyte', 'graafian follicle', 'corpus luteum', 'menstrual cycle', 'menarche', 'menopause', 'fertilization', 'cleavage', 'blastocyst', 'implantation', 'placenta', 'hcg', 'parturition', 'oxytocin', 'lactation', 'colostrum'] },
    { order: 11, name: 'Reproductive Health', class: '12', keywords: ['reproductive health', 'amniocentesis', 'saheli', 'population explosion', 'contraception', 'barrier methods', 'condom', 'diaphragm', 'iud', 'copper-t', 'oral pills', 'sterilization', 'vasectomy', 'tubectomy', 'medical termination of pregnancy', 'mtp', 'sexually transmitted infections', 'sti', 'gonorrhoea', 'syphilis', 'genital herpes', 'hepatitis b', 'infertility', 'assisted reproductive technologies', 'art', 'in vitro fertilization', 'ivf', 'et', 'zift', 'gift', 'icsi', 'surrogacy'] },
    { order: 12, name: 'Evolution', class: '12', keywords: ['evolution', 'origin of life', 'miller-urey experiment', 'homologous structures', 'analogous structures', 'convergent evolution', 'divergent evolution', 'adaptive radiation', 'darwin finches', 'marsupials', 'lamarckism', 'darwinism', 'natural selection', 'industrial melanism', 'hugo de vries', 'mutation theory', 'saltation', 'hardy-weinberg principle', 'genetic drift', 'founder effect', 'gene flow', 'human evolution', 'dryopithecus', 'ramapithecus', 'australopithecus', 'homo habilis', 'homo erectus', 'neanderthal', 'homo sapiens'] },
    { order: 13, name: 'Human Health and Disease', class: '12', keywords: ['human health and disease', 'pathogen', 'typhoid', 'salmonella', 'widal test', 'pneumonia', 'streptococcus pneumoniae', 'common cold', 'rhinovirus', 'malaria', 'plasmodium', 'sporozoite', 'gametocyte', 'amoebiasis', 'entamoeba histolytica', 'ascariasis', 'elephantiasis', 'filariasis', 'wuchereria', 'ringworm', 'immunity', 'innate immunity', 'acquired immunity', 'b lymphocyte', 't lymphocyte', 'antibody', 'antigen', 'active immunity', 'passive immunity', 'colostrum', 'vaccination', 'allergy', 'ige', 'autoimmunity', 'rheumatoid arthritis', 'aids', 'hiv', 'elisa', 'cancer', 'oncogene', 'carcinogen', 'metastasis', 'biopsy', 'chemotherapy', 'drug abuse', 'opioids', 'cannabinoids', 'coca alkaloids'] },
    { order: 14, name: 'Biotechnology: Principles and Processes', class: '12', keywords: ['biotechnology: principles and processes', 'principles of biotechnology', 'genetic engineering', 'recombinant dna', 'restriction endonuclease', 'restriction enzyme', 'hindii', 'ecori', 'palindromic sequence', 'sticky ends', 'dna ligase', 'cloning vector', 'plasmid', 'pbr322', 'selectable marker', 'ampicillin', 'tetracycline', 'insertional inactivation', 'competent host', 'biolistics', 'gene gun', 'micro-injection', 'pcr', 'polymerase chain reaction', 'taq polymerase', 'denaturation', 'annealing', 'extension', 'bioreactor', 'stirred-tank', 'downstream processing'] },
    { order: 15, name: 'Biotechnology and Its Applications', class: '12', keywords: ['biotechnology and its applications', 'applications of biotechnology', 'bt cotton', 'bacillus thuringiensis', 'cry gene', 'cry protein', 'pest resistant plants', 'rna interference', 'rnai', 'meloidegyne incognita', 'genetically engineered insulin', 'humulin', 'c-peptide', 'gene therapy', 'ada deficiency', 'adenosine deaminase', 'molecular diagnosis', 'transgenic animals', 'rosie cow', 'alpha-1-antitrypsin', 'biopiracy', 'basmati rice', 'geac'] }
];

const EXCLUDED_5 = [
    { name: 'Digestion and Absorption', subject: 'Zoology', class: '11', reason: 'Excluded from active NEET syllabus' },
    { name: 'Transport in Plants', subject: 'Botany', class: '11', reason: 'Excluded from active NEET syllabus' },
    { name: 'Reproduction in Organisms', subject: 'Zoology', class: '12', reason: 'Excluded from active NEET syllabus' },
    { name: 'Mineral Nutrition', subject: 'Botany', class: '11', reason: 'Excluded from active NEET syllabus' },
    { name: 'Environmental Issues', subject: 'Botany', class: '12', reason: 'Excluded from active NEET syllabus' }
];

async function runAudit() {
    console.log('Connecting to MongoDB...');
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    console.log('Connected to database:', db.databaseName);

    console.log('\n======================================================');
    console.log('  GLOBAL NEET CHAPTER AUDIT (DRY RUN)');
    console.log('======================================================');

    // 1. Audit active tests in testPapers
    const allNeetTests = await db.collection('testPapers').find({ category: 'neet' }).toArray();
    console.log(`\nFound ${allNeetTests.length} NEET tests in 'testPapers' collection.`);

    // 2. Audit Question Bank for incorrect subject assignments
    console.log('\n--- Checking Subject Misallocations in questionBank ---');

    // Check Biomolecules in Botany
    const biomoleculesInBotany = await db.collection('questionBank').countDocuments({
        subject: 'Botany',
        $or: [
            { chapter: { $regex: /biomolecule/i } },
            { subTopic: { $regex: /biomolecule/i } }
        ]
    });
    console.log(`Biomolecules questions currently in Botany: ${biomoleculesInBotany} -> (Must be moved to Zoology)`);

    // Check Biotechnology in Botany
    const biotechInBotany = await db.collection('questionBank').countDocuments({
        subject: 'Botany',
        $or: [
            { chapter: { $regex: /biotechnology/i } },
            { subTopic: { $regex: /biotechnology/i } }
        ]
    });
    console.log(`Biotechnology questions currently in Botany: ${biotechInBotany} -> (Must be moved to Zoology)`);

    // Check Principles of Inheritance in Zoology
    const inheritanceInZoology = await db.collection('questionBank').countDocuments({
        subject: 'Zoology',
        $or: [
            { chapter: { $regex: /inheritance|mendel/i } },
            { subTopic: { $regex: /inheritance|mendel|monohybrid/i } }
        ]
    });
    console.log(`Principles of Inheritance questions currently in Zoology: ${inheritanceInZoology} -> (Must be moved to Botany)`);

    // Check Microbes in Human Welfare in Zoology
    const microbesInZoology = await db.collection('questionBank').countDocuments({
        subject: 'Zoology',
        $or: [
            { chapter: { $regex: /microbe/i } },
            { subTopic: { $regex: /microbe/i } }
        ]
    });
    console.log(`Microbes in Human Welfare questions currently in Zoology: ${microbesInZoology} -> (Must be moved to Botany)`);

    // Check Excluded Chapters in questionBank
    console.log('\n--- Checking Excluded Chapters in questionBank ---');
    for (const ex of EXCLUDED_5) {
        const count = await db.collection('questionBank').countDocuments({
            $or: [
                { chapter: { $regex: new RegExp(ex.name, 'i') } },
                { subTopic: { $regex: new RegExp(ex.name, 'i') } }
            ]
        });
        console.log(`Excluded chapter '${ex.name}' (${ex.subject}): ${count} questions found (Will preserve records, flag excluded)`);
    }

    console.log('\n--- Verification of 17 Botany Chapters Target ---');
    BOTANY_17.forEach(c => console.log(`  [Botany ${c.order}] Class ${c.class}: ${c.name}`));

    console.log('\n--- Verification of 15 Zoology Chapters Target ---');
    ZOOLOGY_15.forEach(c => console.log(`  [Zoology ${c.order}] Class ${c.class}: ${c.name}`));

    await client.close();
    console.log('\nDry run audit complete.');
}

runAudit().catch(err => {
    console.error('Audit error:', err);
    process.exit(1);
});
