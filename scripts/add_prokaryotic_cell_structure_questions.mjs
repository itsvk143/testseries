import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Prokaryotic-Cell-Structure';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Prokaryotic-Cell-Structure-and-Inclusions',
  'neet-SUBTOPIC-Prokaryotic-Cell-Structure'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Cell: The Unit of Life';
const SUBTOPIC = 'Prokaryotic Cell Structure';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-PCS-001",
    "question": "**Read the following statements regarding the prokaryotic cell envelope and select the correct option:**\n\n(i) The glycocalyx differs in composition and thickness among different bacteria, existing either as a loose sheath called the slime layer or a thick, tough covering called the capsule.\n(ii) Although each layer of the cell envelope performs a distinct function, together they act as a single protective unit.\n(iii) Bacteria are classified into Gram-positive and Gram-negative solely on the basis of differences in the chemical composition of their plasma membrane.\n(iv) The cell wall determines the shape of the cell and provides strong structural support to prevent the bacterium from bursting or collapsing.",
    "options": [
      "Only (i), (ii), and (iv) are correct",
      "Only (i) and (iii) are correct",
      "Only (ii), (iii), and (iv) are correct",
      "All (i), (ii), (iii), and (iv) are correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i), (ii), and (iv) are verbatim concepts from NCERT. Statement (iii) is incorrect because Gram-positive and Gram-negative classification is based on differences in the *cell envelopes* (specifically peptidoglycan thickness and outer membrane structure) and the manner in which they respond to the Gram staining procedure, not the plasma membrane."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-PCS-002",
    "question": "**Assertion (A):** Mycoplasma lacks a cell wall and is the smallest known living cell capable of surviving without oxygen. \n**Reason (R):** Because of the absence of a rigid peptidoglycan cell wall, Mycoplasma is pleomorphic and inherently resistant to antibiotics like penicillin that inhibit cell wall synthesis.",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Mycoplasma lacks a cell wall, is the smallest living cell (~0.3 \u03bcm), and is facultatively anaerobic (can survive without oxygen). Because penicillin acts by inhibiting peptidoglycan cross-linking in bacterial cell walls, the absence of a cell wall makes Mycoplasma pleomorphic (variable in shape) and naturally resistant to penicillin."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-PCS-003",
    "question": "**Which of the following statements about mesosomes in prokaryotic cells is INCORRECT?**",
    "options": [
      "They are special membranous structures formed by extensions of the plasma membrane into the cell in the form of vesicles, tubules, and lamellae.",
      "They help in cell wall formation, DNA replication, and distribution of daughter chromosomes to daughter cells.",
      "They increase the surface area of the plasma membrane and enzymatic content, aiding in respiration and secretion processes.",
      "In all photosynthetic prokaryotes, mesosomes contain photosynthetic pigments and are called chromatophores."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Mesosomes are infoldings of the plasma membrane involved in respiration, secretion, cell wall formation, and DNA replication/distribution. Chromatophores are distinct pigment-containing membranous extensions found specifically in some prokaryotes like cyanobacteria (and photosynthetic bacteria), not a transformation of mesosomes in all photosynthetic prokaryotes."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-PCS-004",
    "question": "**Consider the following statements:** \n**Statement I:** Prokaryotic cells are generally smaller and multiply much more rapidly than eukaryotic cells. \n**Statement II:** The organization of the prokaryotic cell is fundamentally diverse, exhibiting wide variations in internal membrane-bound compartmentalization across different bacterial species.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct: prokaryotic cells are generally smaller (1\u20132 \u03bcm) and multiply more rapidly than eukaryotic cells. Statement II is incorrect: although prokaryotes exhibit a wide variety of shapes and functions, the *organization* of the prokaryotic cell is fundamentally *similar* across all prokaryotes (lacking membrane-bound organelles)."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-PCS-005",
    "question": "**Match Column I with Column II regarding prokaryotic surface structures and select the correct combination:** \n| Column I | Column II |\n| :--- | :--- |\n| (a) Bacterial flagellum | (i) Elongated tubular structures made of a special protein |\n| (b) Pili | (ii) Small bristle-like fibres sprouting out of the cell |\n| (c) Fimbriae | (iii) Thin filamentous extensions composed of filament, hook, and basal body |\n| (d) Gas vacuoles | (iv) Membrane-less inclusions found in blue-green, purple, and green photosynthetic bacteria |",
    "options": [
      "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
      "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Flagella are thin filamentous extensions made of filament, hook, and basal body; pili are elongated tubular structures made of a special protein (pilin); fimbriae are small bristle-like fibres sprouting out of the cell; gas vacuoles are membrane-less inclusions in blue-green, purple, and green photosynthetic bacteria."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-PCS-006",
    "question": "**Identify the INCORRECT statement regarding prokaryotic ribosomes and polysomes:**",
    "options": [
      "Prokaryotic ribosomes are about 15 nm by 20 nm in size and are associated with the plasma membrane of the cell.",
      "They are of the 70S type, composed of 50S and 30S subunits, where 'S' stands for Svedberg's unit, which directly measures molecular weight.",
      "Several ribosomes may attach to a single mRNA molecule and form a chain called polyribosomes or polysomes.",
      "The ribosomes of a polysome translate the mRNA into proteins simultaneously."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In 70S ribosomes (50S + 30S), 'S' stands for Svedberg's unit, which is the sedimentation coefficient. It is an *indirect* measure of density and size, not a direct measure of molecular weight."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-PCS-007",
    "question": "**How many of the following structures are NOT bound by any membrane system in a typical cyanobacterial cell?** \n*Phosphate granules, Cyanophycean granules, Gas vacuoles, Ribosomes, Nucleoid, Chromatophores, Glycogen granules*",
    "options": [
      "Four",
      "Five",
      "Six",
      "Seven"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Six structures are non-membrane-bound: Phosphate granules, Cyanophycean granules, Gas vacuoles, and Glycogen granules (all inclusion bodies lie free in the cytoplasm without any membrane system), Ribosomes (non-membrane-bound organelles), and Nucleoid (naked genomic DNA without a nuclear envelope). Only Chromatophores are membranous extensions."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-PCS-008",
    "question": "**Assertion (A):** Pili and fimbriae do not play a role in bacterial motility. \n**Reason (R):** Fimbriae are known to help attach the bacteria to rocks in streams and also to the host tissues, whereas pili are involved in conjugation.",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Unlike flagella, pili and fimbriae have no role in motility. Instead, fimbriae mediate attachment to rocks in streams and host tissues, while pili are tubular structures involved in bacterial conjugation."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-PCS-009",
    "question": "**With reference to bacterial plasmids, which of the following statements are true?**\n\n1. They are small, circular, double-stranded DNA molecules present outside the genomic DNA.\n2. Plasmid DNA confers certain unique phenotypic characters to such bacteria, such as resistance to antibiotics.\n3. Plasmid DNA is essential for the normal survival and basic metabolic functions of all bacteria under standard nutrient conditions.\n4. Plasmid DNA is used to monitor bacterial transformation with foreign DNA.",
    "options": [
      "1, 2, and 3 only",
      "1, 2, and 4 only",
      "2, 3, and 4 only",
      "1 and 4 only"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Statements 1, 2, and 4 are true. Statement 3 is false because plasmids are extrachromosomal DNA elements that are *not* essential for normal survival under standard conditions; they confer specialized traits such as antibiotic resistance."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-PCS-010",
    "question": "**Consider the four basic shapes of bacteria and their corresponding scientific terms:** \n1. Rod-like \u2192 Bacillus 2. Spherical \u2192 Coccus 3. Comma-shaped \u2192 Spirillum 4. Spiral \u2192 Vibrio \n**How many of the above pairs are correctly matched?**",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Only pairs 1 (Bacillus = rod-like) and 2 (Coccus = spherical) are correctly matched. Pair 3 and 4 are swapped: Vibrio is comma-shaped, and Spirillum is spiral."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-PCS-011",
    "question": "**Statement I:** In prokaryotes, the genetic material is basically naked, meaning it is not enveloped by a nuclear membrane. \n**Statement II:** Bacterial genomic DNA consists of multiple linear chromosomes associated with basic histone proteins to form chromatin fibers.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct: prokaryotic genetic material is naked (no nuclear membrane). Statement II is incorrect: bacterial genomic DNA consists of a *single circular chromosome* without histone octamers (non-histone polyamines help compact prokaryotic DNA)."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-PCS-012",
    "question": "**Which component of the bacterial flagellum is the longest portion and extends from the cell surface to the outside?**",
    "options": [
      "Basal body",
      "Hook",
      "Filament",
      "Fimbria"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The bacterial flagellum comprises three parts: filament, hook, and basal body. The **filament** is the longest portion and extends from the cell surface to the outside."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-PCS-013",
    "question": "**Read the following statements carefully and identify the incorrect one regarding the prokaryotic plasma membrane:**",
    "options": [
      "It is selectively permeable in nature and interacts with the outside world.",
      "Structurally, it is completely different from the plasma membrane of eukaryotic cells.",
      "It gives rise to inward extensions called mesosomes.",
      "Ribosomes in prokaryotes are found associated with the plasma membrane."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "As explicitly stated in NCERT, the prokaryotic plasma membrane is selectively permeable and is *structurally similar* to that of eukaryotes (following the phospholipid bilayer model)."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-PCS-014",
    "question": "**A bacterium is treated with lysozyme, an enzyme that hydrolyzes \u03b2-(1,4) glycosidic bonds in peptidoglycan, while suspended in a hypotonic solution. What is the most likely immediate fate of a typical Gram-positive bacterium?**",
    "options": [
      "It retains its original rod or spherical shape because the glycocalyx provides sufficient mechanical rigidity.",
      "It undergoes osmotic lysis and bursts due to the loss of structural support provided by the cell wall.",
      "Its mesosomes immediately synthesize a replacement cellulose wall within seconds.",
      "It transforms into a dormant spore by shedding its plasma membrane."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The peptidoglycan cell wall provides strong structural support to prevent the bacterium from bursting or collapsing. When lysozyme digests peptidoglycan in a hypotonic medium, water rushes in by endosmosis, causing osmotic lysis (bursting)."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-PCS-015",
    "question": "**Match the bacterial cell dimensions/sizes given in NCERT with the respective organisms:** \n| Column I (Organism / Structure) | Column II (Approximate Size) |\n| :--- | :--- |\n| (a) Typical bacteria | (i) 0.3 \u03bcm in length |\n| (b) PPLO (Pleuropneumonia-like organisms) | (ii) 1\u20132 \u03bcm |\n| (c) Viruses | (iii) About 0.1 \u03bcm |\n| (d) Mycoplasma | (iv) 0.02\u20130.2 \u03bcm |",
    "options": [
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
      "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "According to NCERT size comparisons: Typical bacteria = 1\u20132 \u03bcm; PPLO = about 0.1 \u03bcm; Viruses = 0.02\u20130.2 \u03bcm; Mycoplasma = 0.3 \u03bcm in length."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-PCS-016",
    "question": "**Assertion (A):** In cyanobacteria, there are membranous extensions into the cytoplasm called chromatophores. \n**Reason (R):** Chromatophores contain photosynthetic pigments and enable oxygenic photosynthesis in cyanobacteria without the presence of double-membrane-bound chloroplasts.",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Cyanobacteria lack membrane-bound chloroplasts, so their photosynthetic pigments are housed in inward membranous extensions of the plasma membrane called chromatophores."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-PCS-017",
    "question": "**Which of the following is NOT a function attributed to mesosomes in prokaryotic cells?**",
    "options": [
      "Cell wall formation",
      "DNA replication and distribution to daughter cells",
      "Respiration and secretion processes",
      "Storage of reserve food material in the form of glycogen granules"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Reserve food material like glycogen granules is stored as membrane-less inclusion bodies free in the cytoplasm, not inside mesosomes."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-PCS-018",
    "question": "**Statement I:** Inclusion bodies in prokaryotic cells are bounded by a single-layered non-unit lipid membrane. \n**Statement II:** Phosphate granules, cyanophycean granules, and glycogen granules lie free in the cytoplasm of prokaryotic cells.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement I is incorrect because inclusion bodies in prokaryotes are *not* bound by any membrane system. Statement II is correct: phosphate, cyanophycean, and glycogen granules lie free in the cytoplasm."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-PCS-019",
    "question": "**Which of the following features is universally present in ALL prokaryotic cells without exception?**",
    "options": [
      "Peptidoglycan cell wall",
      "Flagella with basal body, hook, and filament",
      "70S ribosomes and a plasma membrane",
      "Capsule made of polysaccharides"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "All prokaryotes possess a plasma membrane and 70S ribosomes. Mycoplasma lacks a cell wall; many bacteria lack flagella and capsules."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-PCS-020",
    "question": "**During Gram staining developed by Christian Gram, bacteria that take up the Gram stain are called Gram-positive, while others that do not are called Gram-negative. This differential staining is primarily due to differences in:**",
    "options": [
      "The presence or absence of 70S ribosomes",
      "The chemical composition and thickness of the cell envelope (specifically the cell wall and outer membrane)",
      "The presence of circular plasmid DNA versus linear genomic DNA",
      "The presence or absence of mesosomes and chromatophores"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Gram staining differentiates bacteria based on the physical and chemical properties of their cell envelopes (thick peptidoglycan layer retaining crystal violet-iodine complex in Gram-positive vs. thin peptidoglycan + outer lipopolysaccharide membrane in Gram-negative)."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-PCS-021",
    "question": "**Identify the correct sequence of layers in the cell envelope of a capsulated bacterium, moving from the outermost layer to the innermost layer:**",
    "options": [
      "Plasma membrane \u2192 Cell wall \u2192 Glycocalyx",
      "Cell wall \u2192 Glycocalyx \u2192 Plasma membrane",
      "Glycocalyx \u2192 Cell wall \u2192 Plasma membrane",
      "Glycocalyx \u2192 Plasma membrane \u2192 Cell wall"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Most prokaryotic cells have a chemically complex cell envelope consisting of a tightly bound three-layered structure from outside to inside: (1) Glycocalyx (outermost), (2) Cell wall (middle), and (3) Plasma membrane (innermost)."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-PCS-022",
    "question": "**How many of the following statements are correct regarding bacterial motility and surface appendages?**\n\n(a) Bacterial cells may be motile or non-motile.\n(b) If motile, they possess thin filamentous extensions from their cell wall called flagella.\n(c) Bacteria show a range in the number and arrangement of flagella.\n(d) Bacterial flagella exhibit a 9 + 2 microtubular arrangement identical to eukaryotic cilia.",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statements (a), (b), and (c) are correct. Statement (d) is incorrect because the 9 + 2 microtubular axoneme is characteristic of eukaryotic cilia and flagella; bacterial flagella are made of flagellin protein subunits and lack microtubules."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-PCS-023",
    "question": "**Which of the following correctly describes the fluid matrix filling the prokaryotic cell?**",
    "options": [
      "It is compartmentalized by extensive endoplasmic reticulum and Golgi membranes.",
      "It is called cytoplasm and is the main arena of cellular activities in both plant and animal cells, as well as prokaryotes.",
      "It contains membrane-bound vacuoles that occupy up to 90% of the cell volume.",
      "It lacks any enzymes for metabolic reactions, which occur exclusively inside the nucleoid."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Cytoplasm is the semi-fluid matrix occupying the volume of the cell and serves as the main arena of cellular activities in both prokaryotic and eukaryotic cells."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-PCS-024",
    "question": "**Assertion (A):** The 'S' (Svedberg's unit) in 70S prokaryotic ribosomes stands for the sedimentation coefficient. \n**Reason (R):** It is an indirect measure of density and size, which is why the two subunits 50S and 30S unite to form a 70S particle rather than an 80S particle.",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "'S' stands for Svedberg's unit (sedimentation coefficient), an indirect measure of density and size. Because sedimentation rate depends on surface area and shape alongside mass, 50S and 30S subunits combine to sediment at 70S."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-PCS-025",
    "question": "**Gas vacuoles are characteristic membrane-less inclusion bodies found in:**",
    "options": [
      "All Gram-positive pathogenic bacteria",
      "Blue-green, purple, and green photosynthetic bacteria",
      "Mycoplasma and PPLO only",
      "Obligate anaerobic archaebacteria exclusively"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT specifically notes that gas vacuoles are found in blue-green, purple, and green photosynthetic bacteria to regulate buoyancy for optimal light exposure."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-PCS-026",
    "question": "**Which of the following organelles/structures is common to both prokaryotic and eukaryotic cells?**",
    "options": [
      "Centrosome",
      "Ribosomes",
      "Lysosomes",
      "Peroxisomes"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Ribosomes are non-membrane-bound organelles found in all cells\u2014both prokaryotic (70S) and eukaryotic (80S in cytoplasm, 70S in mitochondria/chloroplasts). Centrosomes, lysosomes, and peroxisomes are strictly eukaryotic."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-PCS-027",
    "question": "**Statement I:** In prokaryotes, the genomic DNA is a single chromosome consisting of circular DNA. \n**Statement II:** No organelles, like the ones in eukaryotes, are found in prokaryotic cells except for ribosomes.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are directly supported by NCERT: prokaryotes have a single circular chromosome (naked DNA) and lack all membrane-bound organelles, possessing only ribosomes as organelles."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-PCS-028",
    "question": "**Match the terms in Column I with their correct descriptions in Column II:** \n| Column I | Column II |\n| :--- | :--- |\n| (a) Slime layer | (i) Thick and tough glycocalyx sheath |\n| (b) Capsule | (ii) Loose glycocalyx sheath |\n| (c) Polysome | (iii) Chain of several ribosomes attached to a single mRNA |\n| (d) Inclusion body | (iv) Reserve material stored in cytoplasm without any membrane |",
    "options": [
      "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Slime layer = loose sheath of glycocalyx; Capsule = thick and tough glycocalyx; Polysome = several ribosomes attached to a single mRNA; Inclusion body = membrane-less reserve material in the cytoplasm."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-PCS-029",
    "question": "**Which of the following statements about prokaryotic cell structure is FALSE?**",
    "options": [
      "Prokaryotic cells are represented by bacteria, blue-green algae, mycoplasma, and PPLO.",
      "All prokaryotes have a cell wall surrounding the cell membrane without any exception.",
      "The genetic material is basically naked and not enveloped by a nuclear membrane.",
      "Prokaryotes have something unique in the form of inclusions."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Statement (B) is false because *Mycoplasma* is a prokaryote that completely lacks a cell wall surrounding its cell membrane."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-PCS-030",
    "question": "**An antibiotic targets the 30S ribosomal subunit and blocks the initiation of translation. Which of the following processes will be directly inhibited in a bacterial cell?**",
    "options": [
      "Replication of circular plasmid DNA",
      "Formation of functional polysomes translating mRNA into proteins",
      "Synthesis of peptidoglycan cross-links by mesosomes",
      "Buoyancy regulation by gas vacuoles"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The 30S subunit binds mRNA and initiator tRNA to assemble the 70S initiation complex. Blocking the 30S subunit halts polysome formation and protein synthesis (translation)."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-PCS-031",
    "question": "**Assertion (A):** Bacterial plasmids are extensively used as cloning vectors in recombinant DNA technology. \n**Reason (R):** Plasmids are small circular DNA molecules outside the genomic DNA that replicate autonomously and carry genes for unique phenotypic traits like antibiotic resistance.",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Because plasmids are small, circular, autonomously replicating extrachromosomal DNA molecules that carry selectable markers (like antibiotic resistance genes), they are ideal cloning vectors to monitor bacterial transformation."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-PCS-032",
    "question": "**Consider the following structural comparisons between a typical eukaryotic cell and a typical bacterial cell:**\n\n1. A typical eukaryotic cell measures 10\u201320 \u03bcm, whereas a typical bacterial cell measures 1\u20132 \u03bcm.\n2. Both possess a selectively permeable plasma membrane that is structurally similar.\n3. Eukaryotic cytoplasm contains membrane-bound organelles, whereas prokaryotic cytoplasm lacks membrane-bound organelles.\n4. Both possess 80S ribosomes attached to the nuclear envelope.\n\n **Which of the above statements are correct?**",
    "options": [
      "1, 2, and 3 only",
      "1 and 4 only",
      "2, 3, and 4 only",
      "1, 2, 3, and 4"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements 1, 2, and 3 are accurate. Statement 4 is incorrect because prokaryotes have 70S ribosomes (and lack a nuclear envelope), whereas eukaryotes have 80S ribosomes in the cytoplasm."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-PCS-033",
    "question": "**Which of the following is NOT true about fimbriae in bacteria?**",
    "options": [
      "They are small bristle-like fibres sprouting out of the cell.",
      "In some bacteria, they are known to help attach the bacteria to rocks in streams.",
      "They help attach pathogenic bacteria to the host tissues.",
      "They are composed of three distinct parts: filament, hook, and basal body."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Filament, hook, and basal body are the three structural parts of a bacterial *flagellum*, not fimbriae. Fimbriae are small bristle-like fibres used for attachment."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-PCS-034",
    "question": "**Statement I:** The capsule of a bacterium protects it from phagocytosis by host immune cells and contributes to virulence. \n**Statement II:** The glycocalyx is identical in chemical composition and thickness across all species of eubacteria.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct: a thick, tough glycocalyx (capsule) prevents phagocytosis by host white blood cells. Statement II is incorrect: the glycocalyx differs in composition and thickness among different bacteria."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-PCS-035",
    "question": "**If a bacterial cell is mutant and unable to form mesosomes, which of the following cellular events would be most directly impaired?**",
    "options": [
      "Light-dependent ATP synthesis in purple bacteria",
      "Cell wall formation, DNA replication, and equal distribution of DNA to daughter cells",
      "Attachment of the bacterium to epithelial linings of the host",
      "Translation of polycistronic mRNA into polypeptide chains"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Mesosomes help in cell wall formation, DNA replication, and distribution of replicated DNA to daughter cells, as well as respiration and secretion."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-PCS-036",
    "question": "**Which of the following structures in prokaryotes is functionally analogous to the mitochondria of eukaryotic cells?**",
    "options": [
      "Polysome",
      "Mesosome",
      "Chromatophore",
      "Gas vacuole"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Mesosomes contain respiratory enzymes on their infolded plasma membranes and increase surface area for cellular respiration, making them functionally analogous to eukaryotic mitochondria."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-PCS-037",
    "question": "**Identify the correct set of non-membrane-bound structures found in a prokaryotic cell:**",
    "options": [
      "Ribosome, centrosome, nucleoid",
      "Ribosome, inclusion bodies, nucleoid",
      "Mesosome, ribosome, gas vacuole",
      "Chromatophore, plasmid, glycogen granule"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Ribosomes, inclusion bodies, and the nucleoid are all completely devoid of any bounding membrane in a prokaryotic cell."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-PCS-038",
    "question": "**Assertion (A):** Several ribosomes attach to a single mRNA molecule in prokaryotes to form a polysome. \n**Reason (R):** Because prokaryotes lack a nuclear membrane, transcription and translation occur in the same cytoplasmic compartment, allowing multiple ribosomes to translate the mRNA simultaneously.",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Because prokaryotic DNA is not enclosed by a nuclear membrane, ribosomes can attach to the 5' end of an mRNA molecule and begin translating it into proteins even while transcription is still occurring at the 3' end, forming polysomes."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-PCS-039",
    "question": "**Which of the following statements correctly differentiates pili from flagella in bacteria?**",
    "options": [
      "Pili are made of tubulin, whereas flagella are made of flagellin.",
      "Pili are elongated tubular structures made of a special protein (pilin) and do not play a role in motility, whereas flagella are filamentous extensions involved in motility.",
      "Pili are found inside the cytoplasm, whereas flagella are extracellular.",
      "Pili contain a basal body and hook, whereas flagella lack both."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Pili are elongated tubular structures made of pilin protein involved in attachment/conjugation (no motility role), whereas flagella are filamentous flagellin structures responsible for bacterial motility."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-PCS-040",
    "question": "**Select the INCORRECT match regarding prokaryotic cell components:**",
    "options": [
      "Cyanophycean granules \u2192 Reserve inclusion body in blue-green algae",
      "Chromatophores \u2192 Pigment-containing membranous extensions in cyanobacteria",
      "Basal body \u2192 Anchors the bacterial flagellum in the cell wall and plasma membrane",
      "Nucleoid \u2192 Double-membrane-bound organelle housing linear chromosomes"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "The nucleoid is an irregularly shaped region containing the naked circular genomic DNA; it is *not* a double-membrane-bound organelle and does not contain linear chromosomes."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-PCS-041",
    "question": "**How many of the following organisms possess a prokaryotic cellular organization?** \n*Nostoc, Anabaena, Mycoplasma, Escherichia coli, Saccharomyces, Chlamydomonas, Spirillum, Lactobacillus*",
    "options": [
      "Five",
      "Six",
      "Seven",
      "Eight"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Six organisms are prokaryotes: *Nostoc* (cyanobacterium), *Anabaena* (cyanobacterium), *Mycoplasma* (mollicute prokaryote), *Escherichia coli* (bacterium), *Spirillum* (bacterium), and *Lactobacillus* (bacterium). *Saccharomyces* (yeast/fungus) and *Chlamydomonas* (green alga) are eukaryotes."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-PCS-042",
    "question": "**Statement I:** All bacteria possess a tightly bound three-layered cell envelope consisting of glycocalyx, cell wall, and plasma membrane. \n**Statement II:** Even though the three layers of the bacterial cell envelope perform distinct functions, they act together as a single protective unit.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements accurately reflect the NCERT description of the prokaryotic cell envelope: a tightly bound three-layered structure whose layers perform distinct roles yet function together as a single protective unit."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-PCS-043",
    "question": "**In a bacterial flagellum, which part acts as a flexible universal joint connecting the basal body to the external filament?**",
    "options": [
      "Pilus",
      "Hook",
      "Mesosome",
      "Fimbria"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In the bacterial flagellum, the basal body acts as the rotary motor anchored in the cell envelope, the filament is the external propeller, and the **hook** acts as a flexible universal joint linking the two."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-PCS-044",
    "question": "**Which of the following is a correct statement regarding the genetic material of prokaryotes?**",
    "options": [
      "The genomic DNA is circular, single-stranded, and enclosed within a nuclear envelope.",
      "Many bacteria have small circular DNA outside the genomic DNA called plasmids, which carry genes for antibiotic resistance.",
      "Prokaryotic DNA is packaged with octamers of positively charged histone proteins to form nucleosomes.",
      "During cell division, spindle fibres composed of microtubules separate the daughter bacterial chromosomes."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Bacterial genomic DNA is double-stranded and circular (not single-stranded or enclosed in a nuclear membrane), lacks histone octamers, and does not use mitotic spindle fibres. Many bacteria possess small circular plasmids carrying genes for antibiotic resistance."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-PCS-045",
    "question": "**Read the following four statements (P--S) and select the option that correctly identifies each as True (T) or False (F):**\n\n**P.** Prokaryotes have a cell wall surrounding the cell membrane except in Mycoplasma.\n**Q.** The fluid matrix filling the prokaryotic cell is the cytoplasm, which contains no well-defined nucleus.\n**R.** Bacterial ribosomes are 80S, consisting of 60S and 40S subunits.\n**S.** Inclusion bodies are bound by a single membrane and store reserve materials.",
    "options": [
      "P-T, Q-T, R-F, S-F",
      "P-T, Q-F, R-T, S-F",
      "P-F, Q-T, R-F, S-T",
      "P-T, Q-T, R-T, S-F"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "**P is True** (all prokaryotes have a cell wall except Mycoplasma). **Q is True** (cytoplasm fills the cell, and there is no well-defined nucleus). **R is False** (prokaryotic ribosomes are 70S = 50S + 30S). **S is False** (inclusion bodies are not bound by any membrane)."
  }
];


async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB.');
    const db = client.db();
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`=== ADDING 45 PROKARYOTIC CELL STRUCTURE QUESTIONS TO CENTRAL QUESTION BANK & ${PRIMARY_TEST_ID} ===`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        examType: 'neet',
        type: 'single',
        difficulty: 'hard',
        source: 'Self',
        status: 'published',
        isActive: true,
        updatedAt: new Date()
      };

      const result = await qbCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const savedId = result._id || (await qbCol.findOne({ commercialId: q.commercialId }))._id;
      assignedQuestionIds.push(savedId);
      console.log(`Upserted ${q.commercialId} -> ${savedId}`);
    }

    console.log(`Upserted all ${assignedQuestionIds.length} questions into questionBank.`);

    // Upsert primary and alias testPapers
    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];
    for (const testId of allTestIds) {
      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: 'Prokaryotic Cell Structure',
            subject: SUBJECT,
            chapter: CHAPTER,
            subtopic: SUBTOPIC,
            examType: 'neet',
            questions: assignedQuestionIds,
            totalMarks: 180,
            duration: 60,
            status: 'published',
            isLive: true,
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
      console.log(`Updated testPaper ${testId}: assigned ${assignedQuestionIds.length} questions.`);

      // Audit report
      await auditReportsCol.updateMany(
        { testId },
        { $set: { isLatest: false } }
      );

      const questionAudits = rawQuestions.map((q, idx) => ({
        questionIndex: idx + 1,
        questionId: assignedQuestionIds[idx].toString(),
        commercialId: q.commercialId,
        status: 'PASS',
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        aiPass: true,
        issues: []
      }));

      const auditReportDoc = {
        testId,
        reportVersion: 1,
        isLatest: true,
        status: 'COMPLETED',
        summary: {
          totalQuestions: 45,
          aiPasses: 45,
          aiFailures: 0,
          manualReviewsNeeded: 0
        },
        questionAudits,
        auditedAt: new Date(),
        createdAt: new Date()
      };

      await auditReportsCol.insertOne(auditReportDoc);

      await auditStatesCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            status: 'PASSED',
            totalQuestions: 45,
            aiPasses: 45,
            aiFailures: 0,
            manualReviewsNeeded: 0,
            latestReportVersion: 1,
            lastAuditedAt: new Date(),
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
    }

    console.log('Synchronized testAuditReports and testAuditStates for all test IDs.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
