import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Load LaTeX source
const texContent = fs.readFileSync("/Users/laxmikumari/Downloads/neet_biology_question_bank_2_column.tex", "utf8");
const parts = texContent.split(/\\question\{(\d+)\}\{/);

function cleanTex(str) {
    return str
        .replace(/^%\s*/gm, "")
        .replace(/\\textbf\{([^}]+)\}/g, "$1")
        .replace(/\\textit\{([^}]+)\}/g, "$1")
        .replace(/\\text\{([^}]+)\}/g, "$1")
        .replace(/\\noindent\s*/g, "")
        .replace(/\\rule\{[^}]+\}\{[^}]+\}/g, "__________")
        .replace(/\\\\/g, "\n")
        .replace(/\\%/g, "%")
        .replace(/\\sim/g, "~")
        .replace(/\\quad/g, " ")
        .replace(/\\medskip\s*/g, "")
        .replace(/\\vspace\{[^}]+\}/g, "")
        .replace(/\\resizebox\{[^\}]+\}\{[^\}]+\}\{/g, "")
        .replace(/\\begin\{multicols\}\{2\}/g, "")
        .replace(/\\end\{multicols\}/g, "")
        .replace(/\\toprule/g, "")
        .replace(/\\midrule/g, "")
        .replace(/\\bottomrule/g, "")
        .replace(/\\begin\{tabular\}\{[^}]+\}/g, "")
        .replace(/\\end\{tabular\}/g, "")
        .trim();
}

// 90 Comprehensive Meta Records (Topics, Correct Answer, Thorough NCERT Explanations)
const qMeta = {
    1: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Types of Movement",
        ans: "B",
        exp: "Statement B is incorrect. Locomotory structures need not be distinct from those affecting other types of movements. For example, in Paramoecium, cilia help in both cytopharynx food movement and locomotion; in Hydra, tentacles capture prey as well as facilitate locomotion. Hence, locomotory and non-locomotory functions often share common structures."
    },
    2: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Types of Movement",
        ans: "C",
        exp: "All three statements are correct according to NCERT. (1) Amoeba shows cytoplasmic streaming (cyclosis), which is a basic form of movement. (2) Cilia, flagella, and tentacles are specialized locomotory and movement organelles in diverse organisms. (3) Human cells demonstrate amoeboid movement (macrophages/leucocytes), ciliary movement (respiratory tract/fallopian tubes), and muscular movement (limbs, jaws, tongue)."
    },
    3: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Amoeboid Movement & Cytoskeleton",
        ans: "B",
        exp: "Microfilaments (actin-based polymers) are the primary cytoskeletal elements involved in amoeboid movement. Cytoplasmic streaming and pseudopodial extension in macrophages and leucocytes rely directly on microfilament assembly and disassembly. Microtubules participate in ciliary/flagellar motion, while intermediate filaments provide mechanical tensile strength."
    },
    4: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Muscle Tissue Properties",
        ans: "C",
        exp: "Muscle is a specialized tissue derived embryologically from the mesoderm (except for the iris and ciliary body muscles which are ectodermal). In a normal human adult, muscular tissue contributes approximately 40% to 50% of total body weight."
    },
    5: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Ciliary and Flagellar Movement",
        ans: "D",
        exp: "The passage of ova through the female reproductive tract (fallopian tubes/oviducts) is mediated by ciliated epithelium (ciliary movement), not flagella. In contrast, swimming of spermatozoa, maintaining water currents in sponge choanocyte canals, and locomotion in flagellated protists like Euglena are all powered by flagellar movements."
    },
    6: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Types of Muscles (Visceral Muscle)",
        ans: "C",
        exp: "Visceral (smooth) muscles are located in the inner walls of hollow internal visceral organs such as the alimentary canal, reproductive tract, and blood vessels. They are non-striated, involuntary, spindle-shaped (fusiform), uninucleated, and are not under conscious voluntary nervous control."
    },
    7: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Structure of Skeletal Muscle",
        ans: "B",
        exp: "Each organized skeletal muscle in our body is composed of several muscle bundles or fascicles held together by a common collagenous connective tissue sheath known as fascia. The sarcolemma is the muscle fibre plasma membrane, and sarcoplasm is the muscle cytoplasm."
    },
    8: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Structure of Muscle Fibre",
        ans: "C",
        exp: "Statement C is incorrect. The sarcoplasmic reticulum (the endoplasmic reticulum of the muscle fibre) is the specialized storehouse for calcium ions (Ca2+), not sodium ions (Na+). Statements A, B, and D are factually correct: the muscle fibre is a multinucleated syncytium enclosed by the sarcolemma with striations arising from organized actin and myosin myofibrils."
    },
    9: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Cardiac Muscle",
        ans: "C",
        exp: "Cardiac muscle tissue is characterized histologically as striated and physiologically as involuntary. The cells are branched, uninucleated, joined by intercalated discs with gap junctions, and contract rhythmically without voluntary conscious input from the central nervous system."
    },
    10: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Sarcomere Structure",
        ans: "B",
        exp: "The functional unit of skeletal muscle contraction is the sarcomere, defined as the contractile segment of a myofibril lying between two successive 'Z' lines. The 'Z' line bisects the 'I' band (isotropic band), while the 'M' line anchors thick filaments in the middle of the 'A' band."
    },
    11: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Sarcomere Structure (H-zone)",
        ans: "C",
        exp: "In the resting state of a myofibril, the central region of the thick (myosin) filament in the 'A' band that is not overlapped by thin (actin) filaments is termed the 'H' zone. During contraction, the thin filaments slide inward, causing the 'H' zone to diminish or disappear entirely."
    },
    12: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Sarcomere Structure (Z and M lines)",
        ans: "C",
        exp: "Thin filaments (actin) are firmly anchored to an elastic fibrous membrane called the 'Z' line, which bisects each 'I' band. In contrast, thick filaments (myosin) are anchored in the center of the 'A' band by a thin fibrous membrane termed the 'M' line."
    },
    13: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Contractile Proteins (Troponin)",
        ans: "B",
        exp: "In a resting muscle, a specific subunit of the complex protein troponin (specifically troponin I) is distributed at regular intervals along tropomyosin, masking the active binding sites for myosin on the actin filaments. When Ca2+ binds to troponin C, conformational changes shift tropomyosin and expose these active sites."
    },
    14: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Contractile Proteins (Myosin & Meromyosin)",
        ans: "B",
        exp: "Each myosin filament is a polymer composed of monomeric meromyosin units. Each meromyosin has two parts: Heavy Meromyosin (HMM) comprising the globular head and short arm, and Light Meromyosin (LMM) forming the tail. The HMM head projects outward at regular angles as the cross arm and functions as an active ATPase enzyme with actin and ATP binding sites."
    },
    15: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Sliding Filament Mechanism",
        ans: "C",
        exp: "Statement C is incorrect. According to the sliding filament theory, contraction occurs by the sliding of THIN filaments (actin) OVER the THICK filaments (myosin) toward the center of the sarcomere, not vice versa. The thick filaments remain stationary in length and position."
    },
    16: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Neuromuscular Mechanism (Motor Unit)",
        ans: "B",
        exp: "A motor neuron along with all the muscle fibres it innervates constitutes a functional 'motor unit'. The junction between a motor neuron terminal and the sarcolemma of the muscle fibre is specifically termed the neuromuscular junction or motor-end plate."
    },
    17: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Neuromuscular Junction (Acetylcholine)",
        ans: "B",
        exp: "When an action potential arrives at the axon terminal of a motor neuron, voltage-gated calcium channels trigger the exocytosis of synaptic vesicles releasing the neurotransmitter acetylcholine (ACh) into the synaptic cleft at the neuromuscular junction, depolarizing the sarcolemma."
    },
    18: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Sliding Filament Mechanism (Bands)",
        ans: "C",
        exp: "During muscle contraction and shortening, thin filaments pull inward toward the center of the 'A' band. Consequently, the 'I' bands shorten (get reduced in width) and the 'H' zone diminishes, whereas the 'A' bands retain their constant length because thick filaments do not change their physical length."
    },
    19: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Cross-Bridge Cycle (ATP Role)",
        ans: "C",
        exp: "After the power stroke, release of ADP and Pi leaves myosin bound to actin in the rigor state. Binding of a fresh molecule of ATP to the myosin head causes a conformational change that decreases its affinity for actin, directly breaking the cross-bridge. Subsequent hydrolysis of ATP re-cocks the myosin head."
    },
    20: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Role of Calcium Ions",
        ans: "B",
        exp: "Calcium ions (Ca2+) released from the sarcoplasmic reticulum into the sarcoplasm bind to the troponin C subunit on the actin filaments. This causes a conformational shift in the troponin-tropomyosin complex, unmasking the myosin-binding sites on the actin filaments and initiating cross-bridge formation."
    },
    21: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Muscle Relaxation Mechanism",
        ans: "B",
        exp: "Relaxation occurs when active Ca2+-ATPase pumps in the sarcoplasmic reticulum membrane pump Ca2+ from the sarcoplasm back into the sarcoplasmic reticulum cisternae. With sarcoplasmic Ca2+ depleted, troponin returns to its resting conformation, allowing tropomyosin to re-mask the active sites on actin."
    },
    22: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Muscle Fatigue",
        ans: "B",
        exp: "Repeated, strenuous activation of skeletal muscles exceeds aerobic oxidative capacity, prompting anaerobic glycolysis of stored glycogen. This leads to the accumulation of lactic acid in muscle fibres, which lowers intracellular pH, inhibits contractile enzymes, and causes muscle fatigue."
    },
    23: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Red vs White Muscle Fibres",
        ans: "C",
        exp: "White muscle fibres contain low amounts of myoglobin, fewer mitochondria, and possess an extensive sarcoplasmic reticulum for rapid calcium delivery. They rely primarily on anaerobic glycolysis for explosive, fast-twitch contractions and fatigue quickly, unlike myoglobin-rich, aerobic red fibres."
    },
    24: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Skeletal System (Bone vs Cartilage)",
        ans: "B",
        exp: "Bone tissue contains a hard, non-pliable matrix heavily impregnated with inorganic calcium phosphate/carbonate salts and collagen fibres. Cartilage, by contrast, possesses a firm yet slightly pliable matrix rich in chondroitin sulfate proteoglycans."
    },
    25: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Human Skull Bones",
        ans: "C",
        exp: "The human skull is composed of 22 bones divided into two sets: 8 cranial bones (frontal, 2 parietal, 2 temporal, occipital, sphenoid, ethmoid) that encase the brain, and 14 facial bones that form the anterior facial framework."
    },
    26: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Vertebral Column",
        ans: "C",
        exp: "The human vertebral column consists of 26 serially arranged vertebrae: Cervical (7), Thoracic (12), Lumbar (5), Sacral (1, fused from 5), and Coccygeal (1, fused from 4). Therefore, Lumbar - 5 is the correct pairing."
    },
    27: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Rib System (True Ribs)",
        ans: "C",
        exp: "The first seven pairs of ribs (1st to 7th pairs) are called true ribs (vertebrosternal ribs) because they articulate dorsally with the thoracic vertebrae and connect directly and independently on the ventral side to the sternum via individual costal hyaline cartilages."
    },
    28: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Rib System (Vertebrochondral & Floating Ribs)",
        ans: "C",
        exp: "All three statements are correct. (1) Ribs are bicephalic because each dorsal head has two articulation facets for vertebrae. (2) Rib pairs 8, 9, and 10 are vertebrochondral (false) ribs because they join the 7th rib's hyaline cartilage rather than the sternum directly. (3) Rib pairs 11 and 12 are floating ribs because their anterior ends remain completely free."
    },
    29: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Fast vs Slow Muscle Fibres & Contractile Unit",
        ans: "B",
        exp: "Correct matching: Fast muscle fibres (A) accumulate lactic acid (ii) during rapid anaerobic bursts; Slow muscle fibres (B) are rich in red oxygen-binding myoglobin (i); Actin filaments (C) comprise the light I-band (iv); Sarcomere (D) represents the functional contractile unit (iii). Thus, A-(ii), B-(i), C-(iv), D-(iii)."
    },
    30: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Thoracic Cage Attachments",
        ans: "B",
        exp: "Ribs articulate ventrally with the sternum (breastbone), a flat bone situated in the anterior midline of the thorax. True ribs connect via costal cartilages directly to the sternum, forming the protective thoracic cage with thoracic vertebrae dorsally."
    },
    31: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Synovial Joints (Pivot Joint)",
        ans: "A",
        exp: "The articulation between the first cervical vertebra (atlas) and the second cervical vertebra (axis) is a pivot synovial joint (specifically the atlanto-axial joint), allowing rotational movement of the head (side-to-side 'no' movement)."
    },
    32: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Muscle Biochemistry (ATPase)",
        ans: "C",
        exp: "The enzymatic ATPase activity of muscle is localized specifically in the globular head of the myosin (heavy meromyosin) molecule. It catalyzes the hydrolysis of ATP into ADP and inorganic phosphate (Pi) to energize cross-bridge binding."
    },
    33: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Vertebral Column (Intervertebral Discs)",
        ans: "C",
        exp: "Well-developed fibrocartilaginous intervertebral discs with an outer annulus fibrosus and a central remnant of the notochord (nucleus pulposus) are characteristic anatomical features of the mammalian vertebral column, providing cushioning and flexibility."
    },
    34: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Sequential Order of Vertebrae",
        ans: "D",
        exp: "The anatomical craniocaudal sequence of the human vertebral column is: Cervical (7) -> Thoracic (12) -> Lumbar (5) -> Sacral (1, fused) -> Coccygeal (1, fused). Option D represents this correct anatomical sequence."
    },
    35: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Synovial Joints Classification",
        ans: "A",
        exp: "Option A is incorrect because the articulation between the head of the humerus and the glenoid cavity of the pectoral girdle (shoulder joint) is a ball and socket synovial joint, NOT a hinge joint. Options B, C, and D correctly describe pivot, gliding, and saddle joints."
    },
    36: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Synovial Joints (Hinge Joint)",
        ans: "D",
        exp: "The knee joint and elbow joint are classical examples of hinge synovial joints, allowing angular movement primarily in a single plane (flexion and extension), akin to the hinge of a door."
    },
    37: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Amoeboid Movement",
        ans: "C",
        exp: "Specialized immune cells in human blood, such as macrophages and polymorphonuclear leucocytes (neutrophils), migrate through tissues and engulf foreign antigens by extending pseudopodia via amoeboid movement."
    },
    38: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Disorders of Skeletal System",
        ans: "D",
        exp: "Atherosclerosis is an arterial cardiovascular disease characterized by the deposition of cholesterol plaques, lipids, and fibrous tissue inside the lumen of arteries. It is not a skeletal/bone disorder. Arthritis (joint inflammation), osteoporosis (low bone mass), and rickets (vitamin D deficiency bone softening) are skeletal disorders."
    },
    39: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Types of Muscles (Histology)",
        ans: "C",
        exp: "Statement C is incorrect. The muscles located in the inner walls of the alimentary canal are smooth (visceral) muscles, which are UNSTRIATED and involuntary. Heart muscles are striated and involuntary; skeletal muscles of hands/legs are striated and voluntary; and reproductive tract muscles are unstriated and involuntary."
    },
    40: {
        chapter: "Locomotion and Movement",
        subject: "Zoology",
        topic: "Pectoral vs Pelvic Girdle Articulations",
        ans: "B",
        exp: "Statement B is true. The head of the humerus articulates with the glenoid cavity of the pectoral girdle to form the shoulder joint. In contrast, the head of the femur articulates with the deep cup-shaped acetabulum of the pelvic girdle to form the hip joint."
    },

    // 41-80: Biological Classification
    41: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "History of Biological Classification",
        ans: "C",
        exp: "Statement I is correct: Aristotle was the earliest to attempt a scientific classification, dividing plants into trees, shrubs, and herbs based on morphological habits, and animals into two groups based on whether they had red blood (Enaima) or lacked it (Anaima). Statement II is incorrect: Linnaeus' two-kingdom system (Plantae and Animalia) failed to distinguish between prokaryotes and eukaryotes, unicellular and multicellular organisms, or photosynthetic and non-photosynthetic organisms."
    },
    42: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Drawbacks of Two-Kingdom Classification",
        ans: "D",
        exp: "Option D was not a drawback because the Two Kingdom system was heavily dependent on gross morphology. The recognized drawbacks of Linnaeus' system were: failing to separate photosynthetic green algae from heterotrophic fungi (A), blurring the boundary between unicellular and multicellular forms (B), and leaving large numbers of organisms unclassified (C)."
    },
    43: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Early Classification of Plants",
        ans: "A",
        exp: "Both (A) and (R) are true, and (R) is the exact conceptual explanation of (A). Early systems grouped bacteria, blue-green algae, fungi, bryophytes, pteridophytes, gymnosperms, and angiosperms under Kingdom Plantae strictly based on a single unifying character: the presence of a rigid cell wall around their cells."
    },
    44: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Whittaker Five-Kingdom Criteria",
        ans: "A",
        exp: "According to Whittaker's Five Kingdom Classification: Monera (A) are prokaryotes with non-cellulosic (polysaccharide + amino acid) cell walls (II); Protista (B) are unicellular eukaryotes (IV); Fungi (C) have chitinous cell walls and loose tissue/multicellular organization (I); Animalia (D) exhibit tissue/organ/system levels with holozoic ingestion (III). Hence, A-II, B-IV, C-I, D-III."
    },
    45: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista Boundaries & Phylogenetic Criteria",
        ans: "A",
        exp: "Both statements are correct according to NCERT. Statement I: Whittaker's Kingdom Protista assembled unicellular eukaryotic algae (Chlamydomonas, Chlorella) and protozoans (Paramoecium, Amoeba) together based on unicellularity and eukaryotic organization. Statement II: Whittaker's five-kingdom classification criteria intentionally integrate cell structure, thallus organisation, nutrition, reproduction, and evolutionary phylogenetic relationships."
    },
    46: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Bacterial Shapes",
        ans: "B",
        exp: "Bacteria are categorized into four morphological types: Coccus (spherical, III), Bacillus (rod-shaped, IV), Vibrium (comma-shaped, I), and Spirillum (spiral, II). Thus, the correct matching is A-III, B-IV, C-I, D-II."
    },
    47: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Monera (Archaebacteria)",
        ans: "A",
        exp: "Both (A) and (R) are true, and (R) is the correct explanation of (A). Archaebacteria survive in extreme environments (halophiles in salt pans, thermoacidophiles in hot sulfur springs, methanogens in marshlands/ruminants) because their unique cell wall lacks peptidoglycan (contains pseudomurein/surface glycoproteins) and their cell membrane contains branched ether-linked lipids."
    },
    48: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Monera (Cyanobacteria)",
        ans: "C",
        exp: "Statement C is incorrect. Heterocysts are specialized, non-vegetative cells that undergo terminal differentiation (developing thick cell walls impermeable to oxygen, lacking PS II) specifically to maintain an anaerobic microenvironment for nitrogenase. They are NOT regular vegetative cells."
    },
    49: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Bacterial Metabolic Diversity & Roles",
        ans: "A",
        exp: "Matching: Methanogens (A) produce biogas (methane) from ruminant dung (II); Chemosynthetic autotrophs (B) oxidize inorganic substances (nitrites, nitrates, ammonia) for ATP and recycle N, P, Fe, S (I); Heterotrophic bacteria (C) act as decomposers and produce curd and antibiotics (IV); Halophiles (D) thrive in extreme saline environments (III). Correct option is A-II, B-I, C-IV, D-III."
    },
    50: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Bacterial Structure vs Behaviour",
        ans: "D",
        exp: "Statement I is incorrect: NCERT explicitly states, 'Though the bacterial structure is very simple, they are very complex in behaviour.' Statement II is correct: bacteria exhibit the most extensive metabolic diversity as a group (autotrophic, photosynthetic, chemosynthetic, heterotrophic, saprophytic, parasitic), although the vast majority are heterotrophs."
    },
    51: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Eubacteria Characteristics",
        ans: "C",
        exp: "Statements 1, 2, and 3 are true. Statement 4 is false because the vast majority of bacteria are heterotrophs (they depend on other organisms or dead organic matter for food), not autotrophs synthesizing food from inorganic substrates. Thus, exactly three statements are true."
    },
    52: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Monera (Mycoplasma)",
        ans: "B",
        exp: "Mycoplasmas are the smallest known living cells (approx. 0.3 micrometers), completely lack a rigid cell wall (making them pleomorphic and resistant to cell wall-targeting antibiotics like penicillin), and can survive anaerobically in the total absence of oxygen."
    },
    53: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Bacterial Diseases",
        ans: "A",
        exp: "Cholera (Vibrio cholerae), typhoid (Salmonella typhi), tetanus (Clostridium tetani), and citrus canker (Xanthomonas axonopodis/citri) are all caused by bacterial pathogens. Malaria and sleeping sickness are caused by protozoans, while amoebic dysentery is caused by Entamoeba histolytica."
    },
    54: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista (Chrysophytes)",
        ans: "C",
        exp: "Statements I, II, and IV are correct. Statement III is incorrect because diatoms and desmids are microscopic plankton that float PASSIVELY in water currents; they do not possess multiple flagella to swim actively against water currents. Hence, exactly three statements are correct."
    },
    55: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista Boundaries",
        ans: "A",
        exp: "Both (A) and (R) are true, and (R) correctly explains (A). As NCERT points out, 'The boundaries of this kingdom are not well-defined. What may be a photosynthetic protistan to one biologist may be a plant to another' (as seen historically with euglenoids and unicellular green algae)."
    },
    56: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista (Dinoflagellates)",
        ans: "B",
        exp: "Red dinoflagellates such as Gonyaulax undergo rapid population explosions in nutrient-rich marine waters, making the sea appear red ('red tides'). They also secrete potent marine toxins (such as saxitoxin) that can kill fish and other marine life."
    },
    57: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista (Euglenoids)",
        ans: "A",
        exp: "Instead of a rigid cellulosic cell wall, euglenoids possess a protein-rich sub-membrane layer called the pellicle. The pellicle provides structural support while remaining flexible, enabling changes in cell shape during motility (metaboly)."
    },
    58: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista (Slime Moulds)",
        ans: "C",
        exp: "Statement C is incorrect. During unfavorable conditions, the plasmodium differentiates to form fruiting bodies bearing spores at their tips. These spores possess TRUE walls made of cellulose, making them extremely resistant to desiccation and adverse conditions."
    },
    59: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Protistan Diversity",
        ans: "A",
        exp: "Matching: Dinoflagellates (A) have two flagella: one longitudinal and one transverse in a furrow (I); Euglenoids (B) are mixotrophic, being photosynthetic in sunlight and predatory in darkness (II); Slime moulds (C) disperse spores with true walls via air currents (III); Protozoans (D) are heterotrophic primitive relatives of animals (IV). Thus, A-I, B-II, C-III, D-IV."
    },
    60: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Euglenoid Pigments & Nutrition",
        ans: "C",
        exp: "Assertion (A) is true: the photosynthetic pigments of euglenoids (chlorophyll a and b) are identical to those found in higher plants. Reason (R) is false: euglenoids are mixotrophic, NOT obligate autotrophs; when deprived of sunlight, they survive heterotrophically by predating on smaller organisms."
    },
    61: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Protozoans (Flagellated Protozoa)",
        ans: "B",
        exp: "Trypanosoma gambiense / rhodesiense is a flagellated parasitic protozoan transmitted by the bite of the tsetse fly (Glossina), causing African sleeping sickness (trypanosomiasis) in humans."
    },
    62: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Protozoan Classification",
        ans: "A",
        exp: "Matching: Amoeboid protozoans (A) use pseudopodia and marine forms bear silica shells (III); Flagellated protozoans (B) include parasites like Trypanosoma (IV); Ciliated protozoans (C) use ciliary coordination to direct food into the gullet, e.g., Paramoecium (I); Sporozoans (D) possess an infectious spore-like stage, e.g., Plasmodium (II). Thus, A-III, B-IV, C-I, D-II."
    },
    63: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Fungi (General Features)",
        ans: "D",
        exp: "Statement D is incorrect. The cell walls of fungi are composed predominantly of chitin (a polymer of N-acetylglucosamine) and complex fungal polysaccharides (glucans), NOT cellulose and pectin (which characterize plant cell walls)."
    },
    64: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Fungi (Yeasts & Vegetative Reproduction)",
        ans: "C",
        exp: "Assertion (A) is true: yeasts (e.g., Saccharomyces) are unicellular fungi, whereas most other fungi form filamentous mycelia. Reason (R) is false: vegetative reproduction in fungi commonly occurs by fragmentation in filamentous forms, as well as by fission and budding in unicellular forms."
    },
    65: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Fungal Sexual Cycle",
        ans: "B",
        exp: "The sexual cycle of fungi comprises three sequential stages: (1) Plasmogamy: fusion of protoplasms between two motile or non-motile gametes; (2) Karyogamy: fusion of the two haploid nuclei to form a diploid zygote nucleus; (3) Meiosis: reduction division of the zygote yielding haploid spores."
    },
    66: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Phycomycetes Examples",
        ans: "A",
        exp: "The class Phycomycetes includes Mucor, Rhizopus (the bread mould), and Albugo (the parasitic fungus on mustard). Penicillium and Aspergillus belong to Ascomycetes; Agaricus belongs to Basidiomycetes."
    },
    67: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Phycomycetes Reproduction",
        ans: "C",
        exp: "Statements I, II, and IV are correct. Statement III is incorrect because asexual spores in Phycomycetes (zoospores and aplanospores) are produced ENDOGENOUSLY within a sporangium, not exogenously. Thus, exactly three statements are correct."
    },
    68: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Dikaryon Phase in Fungi",
        ans: "C",
        exp: "Assertion (A) is true: in Ascomycetes and Basidiomycetes, plasmogamy is not immediately followed by karyogamy, creating an intervening dikaryotic condition (n + n, two nuclei per cell). Reason (R) is false: nuclear fusion does NOT immediately succeed protoplasmic fusion in all fungi; immediate karyogamy occurs in Phycomycetes, but is delayed in Ascomycetes and Basidiomycetes."
    },
    69: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Ascomycetes (Neurospora)",
        ans: "B",
        exp: "Neurospora crassa (an ascomycete) is used extensively in biochemical genetics and molecular biology (famously used by Beadle and Tatum in formulating the 'one gene, one enzyme' hypothesis), often called the 'Drosophila of the plant kingdom'."
    },
    70: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Deuteromycetes (Imperfect Fungi)",
        ans: "D",
        exp: "Deuteromycetes are termed 'imperfect fungi' because only their asexual or vegetative phases have been observed. Once sexual (perfect) stages are discovered, these fungi are moved to either Ascomycetes or Basidiomycetes."
    },
    71: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Ascospores vs Basidiospores",
        ans: "C",
        exp: "In Ascomycetes, sexual ascospores are produced ENDOGENOUSLY inside sac-like structures called asci (typically 8 ascospores per ascus). In Basidiomycetes, sexual basidiospores are produced EXOGENOUSLY on the tips of sterigmata on the basidium (typically 4 basidiospores per basidium)."
    },
    72: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Basidiomycetes Reproduction",
        ans: "C",
        exp: "Statement C is incorrect. While karyogamy and meiosis do take place inside the basidium, the resulting four basidiospores are borne EXOGENOUSLY on sterigmata at the surface of the basidium, not endogenously."
    },
    73: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Plantae (Parasitic Plants)",
        ans: "C",
        exp: "Cuscuta (dodder) is an obligate parasitic angiosperm that lacks chlorophyll and derives nutrients and water directly from host vascular tissues using haustoria. Bladderwort and Venus flytrap are insectivorous (photosynthetic but capture insects for nitrogen), and Chlamydomonas is a photosynthetic green alga."
    },
    74: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Animalia (Storage Compounds)",
        ans: "C",
        exp: "Members of Kingdom Animalia lack cell walls and store their carbohydrate and energy reserves primarily in the form of glycogen and adipose fat. In contrast, plants store excess carbohydrates as starch."
    },
    75: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Plantae vs Animalia Characteristics",
        ans: "A",
        exp: "Statements I, II, and III are correct. Statement IV is incorrect because animal cells completely lack a cell wall; they are enclosed solely by a phospholipid plasma membrane. Hence, I, II, and III only are correct."
    },
    76: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "History of Biological Classification",
        ans: "B",
        exp: "Aristotle was the earliest scientist to attempt a biological classification on a scientific basis, using morphological characters for plants (trees, shrubs, herbs) and red blood presence/absence for animals."
    },
    77: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Whittaker Five-Kingdom Criteria",
        ans: "C",
        exp: "Whittaker's Five Kingdom Classification was based on five primary criteria: cell structure, thallus/body organization, mode of nutrition, reproduction, and phylogenetic relationships. Gross morphological shape of leaves is an artificial criterion not used by Whittaker."
    },
    78: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Monera (Prokaryotes)",
        ans: "B",
        exp: "In Whittaker's Five Kingdom Classification, all prokaryotic organisms (lacking a membrane-bound nucleus and membrane-bound organelles), including eubacteria, archaebacteria, cyanobacteria, and mycoplasmas, are classified solely under Kingdom Monera."
    },
    79: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Kingdom Protista (Unicellular Eukaryotes)",
        ans: "B",
        exp: "All single-celled eukaryotic organisms, such as Amoeba, Paramoecium, Euglena, and diatoms, are grouped together under Kingdom Protista according to Whittaker's classification."
    },
    80: {
        chapter: "Biological Classification",
        subject: "Botany",
        topic: "Fungal Hyphae Structure",
        ans: "B",
        exp: "A fungal hypha that lacks cross-walls (septa) and contains a continuous, multinucleated cytoplasm throughout its length is termed an aseptate or coenocytic hypha, characteristic of Phycomycetes."
    },

    // 81-90: Morphology of Flowering Plants (Plant Families)
    81: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Brassicaceae Floral Formula",
        ans: "B",
        exp: "The correct floral formula for family Brassicaceae (Cruciferae) is: \\oplus K_{2+2} C_{4} A_{2+4} \\underline{G}_{(2)}. Flowers are actinomorphic, bisexual, calyx has 4 sepals in two whorls (2+2), corolla has 4 petals in a cruciform arrangement (cross-shaped), androecium has 6 stamens in a tetradynamous condition (2 short outer + 4 long inner), and gynoecium is bicarpellary, syncarpous, with a superior ovary."
    },
    82: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Brassicaceae Tetradynamous Stamens",
        ans: "B",
        exp: "The tetradynamous stamen condition (six stamens with four inner long stamens and two outer short stamens, arranged as 2 + 4) is a diagnostic characteristic of the mustard family, Brassicaceae (Cruciferae), exemplified by Brassica campestris (mustard)."
    },
    83: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Brassicaceae Ovary & Replum",
        ans: "B",
        exp: "In Brassicaceae, the ovary is originally unilocular with parietal placentation. During development, a false vertical septum called the replum develops between the parietal placentas, dividing the ovary into two locules (bilocular ovary)."
    },
    84: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Fabaceae Vexillary Aestivation",
        ans: "C",
        exp: "Vexillary (papilionaceous) aestivation of the corolla is a signature feature of the family Fabaceae (Papilionaceae). It consists of five petals: one large posterior standard (vexillum), two lateral wings (alae), and two anterior fused petals forming a boat-shaped keel (carina)."
    },
    85: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Fabaceae Diadelphous Stamens",
        ans: "A",
        exp: "A diadelphous condition of stamens where ten stamens are united into two bundles in a (9) + 1 arrangement (nine stamens fused by their filaments into a tube surrounding the pistil and one posterior stamen remaining free) is typically observed in Pisum sativum (pea, family Fabaceae)."
    },
    86: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Fabaceae Economic Importance (Dye)",
        ans: "B",
        exp: "Indigofera tinctoria (true indigo), a member of the family Fabaceae, is an economically significant plant historically and commercially cultivated as a source of indigo blue dye."
    },
    87: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Malvaceae Stamens & Anthers",
        ans: "C",
        exp: "Monadelphous stamens (filaments fused into a single staminal tube surrounding the style) with reniform (kidney-shaped) and monothecous (single-lobed, bisporangiate) anthers are diagnostic taxonomic hallmarks of the mallow family, Malvaceae (e.g., Hibiscus rosa-sinensis, Gossypium)."
    },
    88: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Asteraceae Pappus Calyx",
        ans: "B",
        exp: "In the family Asteraceae (Compositae), the calyx is reduced and modified into persistent bristly or feathery hairy appendages called the pappus. The pappus remains attached to the cypsela fruit and acts as a parachute mechanism for wind dispersal."
    },
    89: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Poaceae Caryopsis Fruit",
        ans: "C",
        exp: "The typical fruit of the grass family (Poaceae/Gramineae, such as wheat, maize, rice) is a caryopsis (grain), a dry indehiscent single-seeded fruit in which the seed coat (testa) is completely fused with the pericarp (fruit wall)."
    },
    90: {
        chapter: "Morphology of Flowering Plants",
        subject: "Botany",
        topic: "Asteraceae Capitulum Inflorescence",
        ans: "B",
        exp: "A head or capitulum inflorescence, consisting of peripheral ray florets (often sterile or pistillate, with strap-shaped ligulate corollas) and central disc florets (tubular, bisexual) densely packed on a flattened or convex receptacle, is the hallmark of Helianthus annuus (sunflower, family Asteraceae)."
    }
};

async function main() {
    console.log("=== PROCESSING 90 NEET BIOLOGY QUESTIONS ===");
    
    const formattedQuestions = [];
    const dbDocuments = [];
    
    for (let q = 1; q <= 90; q++) {
        const raw = parts[q * 2].trim();
        const lastEnumIdx = raw.lastIndexOf("\\begin{enumerate}");
        const qText = cleanTex(raw.slice(0, lastEnumIdx));
        const optionsBlock = raw.slice(lastEnumIdx);
        const optItems = optionsBlock.split(/\\item\s+/).slice(1).map(it => cleanTex(it.replace(/\\end\{enumerate\}[\s\S]*$/, "")));
        
        const meta = qMeta[q];
        if (!meta) {
            console.error(`Missing metadata for question ${q}`);
            continue;
        }

        const optMap = {
            "A": optItems[0] || "",
            "B": optItems[1] || "",
            "C": optItems[2] || "",
            "D": optItems[3] || ""
        };

        const ansIdx = { "A": 0, "B": 1, "C": 2, "D": 3 }[meta.ans];

        // 1. User JSON format
        const userObj = {
            question_id: q,
            chapter: meta.chapter,
            topic: meta.topic,
            difficulty: "Difficult",
            question: qText,
            options: optMap,
            correct_option: meta.ans,
            explanation: meta.exp
        };
        formattedQuestions.push(userObj);

        // 2. Production Database format
        const dbDoc = {
            _id: new ObjectId(),
            subject: meta.subject,
            chapter: meta.chapter,
            subTopic: meta.topic,
            exam: "NEET",
            difficulty: "Difficult",
            questionType: "MCQ (Multiple Choice Question)",
            type: "MCQ",
            question: qText,
            options: [optMap.A, optMap.B, optMap.C, optMap.D],
            correctAnswer: ansIdx,
            correctOption: meta.ans.toLowerCase(),
            explanation: meta.exp,
            source: "NEET_BIOLOGY_CURATED_90",
            originalityAudit: {
                problemStructure: `Curated high-yield conceptual MCQ targeting NCERT ${meta.chapter}: ${meta.topic}.`,
                solutionMethodSignature: "Rigorous NCERT textbook citation and distractor elimination.",
                conceptCombination: `${meta.chapter}, ${meta.topic}, NEET High-Yield Core Concept`,
                noveltyRationale: "Standardized NCERT concept testing with verified distractors and complete conceptual explanation."
            },
            createdAt: new Date(),
            updatedAt: new Date()
        };
        dbDocuments.push(dbDoc);
    }

    console.log(`Successfully generated ${formattedQuestions.length} user objects and ${dbDocuments.length} DB records.`);

    // Save JSON to disk
    const jsonPath = 'neet_biology_90_questions.json';
    fs.writeFileSync(jsonPath, JSON.stringify(formattedQuestions, null, 2), 'utf8');
    console.log(`✓ Wrote complete JSON to ${jsonPath}`);

    // Insert into MongoDB
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    const initialCount = await col.countDocuments();
    console.log(`Current questionBank count: ${initialCount}`);

    console.log(`Inserting ${dbDocuments.length} documents into questionBank...`);
    const insertResult = await col.insertMany(dbDocuments);
    console.log(`✓ Successfully inserted ${insertResult.insertedCount} questions into questionBank!`);

    const finalCount = await col.countDocuments();
    console.log(`New questionBank count: ${finalCount}`);

    await client.close();
}

main().catch(err => {
    console.error("Execution failed:", err);
    process.exit(1);
});
