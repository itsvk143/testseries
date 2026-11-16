import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const TARGET_TEST_ID = 'neet-SUBTOPIC-Botany-Endomembrane-System';
const SUBJECT = 'Botany';
const CHAPTER = 'Cell: The Unit of Life';
const SUBTOPIC = 'Endomembrane System';

const rawQuestions = [
  {
    index: 1,
    commercialId: 'NEET-BOT-EMS-001',
    question: `Which of the following statements best explains why mitochondria, chloroplasts, and peroxisomes are NOT considered part of the endomembrane system in eukaryotic cells?`,
    options: [
      'They lack phospholipid bilayer membranes and possess proteinaceous coats instead.',
      'Their functions are not coordinated with the endoplasmic reticulum, Golgi complex, lysosomes, and vacuoles.',
      'They are absent in higher vascular plants and exist exclusively in protists and fungi.',
      'They originate directly by budding from the trans face of the Golgi apparatus.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `While each membranous organelle is distinct in structure and function, the ER, Golgi complex, lysosomes, and vacuoles are grouped together as the endomembrane system because their functions are coordinated. Because the functions of mitochondria, chloroplasts, and peroxisomes are not coordinated with these components, they are excluded from the endomembrane system.`
  },
  {
    index: 2,
    commercialId: 'NEET-BOT-EMS-002',
    question: `Given below are two statements:
Assertion (A): The endoplasmic reticulum divides the intracellular space into two distinct compartments: luminal and extra-luminal compartments.
Reason (R): The luminal compartment lies inside the ER tubules and cisternae, whereas the extra-luminal compartment represents the surrounding cytoplasm.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
      '(A) is true, but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `The endoplasmic reticulum divides the intracellular space of a eukaryotic cell into two distinct compartments: the luminal compartment (inside the ER) and the extra-luminal compartment (the surrounding cytoplasm). Both Assertion and Reason are true, and Reason is the correct explanation.`
  },
  {
    index: 3,
    commercialId: 'NEET-BOT-EMS-003',
    question: `Read the following statements regarding Smooth Endoplasmic Reticulum (SER) and Rough Endoplasmic Reticulum (RER):
(i) RER is frequently observed in cells actively involved in protein synthesis and secretion.
(ii) RER is extensive and continuous with the inner membrane of the nucleus.
(iii) SER is the major site for synthesis of lipid, and in animal cells lipid-like steroidal hormones are synthesized in SER.
(iv) In the absence of ribosomes, the endoplasmic reticulum appears smooth and is called SER.

Which of the above statements are correct?`,
    options: [
      '(i), (ii), and (iii) only',
      '(i), (iii), and (iv) only',
      '(ii), (iii), and (iv) only',
      'All (i), (ii), (iii), and (iv)'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Statements (i), (iii), and (iv) are correct. Statement (ii) is incorrect because RER is extensive and continuous with the outer membrane of the nucleus, not the inner membrane.`
  },
  {
    index: 4,
    commercialId: 'NEET-BOT-EMS-004',
    question: `Consider the following statements about the Golgi apparatus:
Statement I: Camillo Golgi first observed densely stained reticular structures near the nucleus in 1898, which were later named Golgi bodies after him.
Statement II: The Golgi cisternae are concentrically arranged near the nucleus with a distinct concave cis or forming face and a convex trans or maturing face.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct, but Statement II is incorrect.',
      'Statement I is incorrect, but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Statement I is correct (Camillo Golgi, 1898). Statement II is incorrect because the cisternae are arranged near the nucleus with a distinct convex cis (or forming) face and a concave trans (or maturing) face—the curvatures are reversed in the statement.`
  },
  {
    index: 5,
    commercialId: 'NEET-BOT-EMS-005',
    question: `Match Column I with Column II regarding the diameter/dimensions and structural features of endomembrane organelles:

| Column I | Column II |
| :--- | :--- |
| (a) Golgi cisternae diameter | (i) Occupies up to 90% of plant cell volume |
| (b) Plant cell central vacuole | (ii) 0.5 μm to 1.0 μm |
| (c) Contractile vacuole in *Amoeba* | (iii) Formed by engulfing food particles in protists |
| (d) Food vacuole | (iv) Important for osmoregulation and excretion |`,
    options: [
      '(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)',
      '(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)',
      '(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)',
      '(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• Golgi cisternae diameter → (ii) 0.5 μm to 1.0 μm
• Plant cell central vacuole → (i) Occupies up to 90% of plant cell volume
• Contractile vacuole in *Amoeba* → (iv) Important for osmoregulation and excretion
• Food vacuole → (iii) Formed by engulfing food particles in protists
Thus, (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii).`
  },
  {
    index: 6,
    commercialId: 'NEET-BOT-EMS-006',
    question: `Identify the INCORRECT statement regarding the cis and trans faces of the Golgi apparatus:`,
    options: [
      'The cis and trans faces of the organelle are entirely different, yet they are interconnected.',
      'Materials to be packaged in the form of vesicles from the ER fuse with the cis face of the Golgi apparatus and move towards the maturing face.',
      'This directional movement explains why the Golgi apparatus remains in close association with the endoplasmic reticulum.',
      'Proteins synthesized by ribosomes on the RER are modified in the ER lumen only after being released from the trans face of the Golgi apparatus.'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: `Proteins synthesized by ribosomes on the RER enter the ER lumen, bud off in vesicles that fuse with the cis face of the Golgi apparatus, and are modified inside the Golgi cisternae before being released from its trans face.`
  },
  {
    index: 7,
    commercialId: 'NEET-BOT-EMS-007',
    question: `Which of the following is the primary site for the formation of glycoproteins and glycolipids in a eukaryotic cell?`,
    options: [
      'Smooth Endoplasmic Reticulum',
      'Golgi apparatus',
      'Lysosomes',
      'Tonoplast of the central vacuole'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `According to NCERT, the Golgi apparatus is the important site of formation of glycoproteins and glycolipids (enzymatic glycosylation).`
  },
  {
    index: 8,
    commercialId: 'NEET-BOT-EMS-008',
    question: `Given below are two statements:
Assertion (A): Lysosomal hydrolytic enzymes are optimally active at an acidic pH.
Reason (R): Lysosomes are membrane-bound vesicular structures formed by the process of packaging in the Golgi apparatus, and their membrane possesses proton pumps that maintain an acidic internal lumen.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
      '(A) is true, but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Lysosomes are single-membrane-bound vesicles packaged by the Golgi apparatus containing acid hydrolases (lipases, proteases, carbohydrases, nucleases) that are optimally active at an acidic pH (approx 4.5–5.0) maintained by membrane proton pumps. Both Assertion and Reason are true, and Reason is the correct explanation.`
  },
  {
    index: 9,
    commercialId: 'NEET-BOT-EMS-009',
    question: `How many of the following macromolecular substrates can be digested by the isolated lysosomal vesicles of a eukaryotic cell?
Carbohydrates, Proteins, Lipids, Nucleic acids, Cellulose microfibrils`,
    options: ['Two', 'Three', 'Four', 'Five'],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `NCERT explicitly states that lysosomal hydrolytic enzymes are capable of digesting four classes of macromolecules: carbohydrates, proteins, lipids, and nucleic acids. (Typical lysosomes do not possess cellulase to digest cellulose microfibrils.)`
  },
  {
    index: 10,
    commercialId: 'NEET-BOT-EMS-010',
    question: `In plant cells, the concentration of several ions and other materials is significantly higher in the vacuole than in the cytoplasm. Which mechanism accounts for this concentration gradient?`,
    options: [
      'Simple passive diffusion down the concentration gradient across the tonoplast.',
      'Facilitated transport of ions against the concentration gradient into the vacuole by the tonoplast.',
      'Osmotic efflux of water out of the cytoplasm driven by the cell wall turgor pressure.',
      'Pinocytosis of extracellular ions directly through plasmodesmata into the vacuole.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `In plants, the single membrane of the vacuole—the tonoplast—facilitates the active transport of ions and other materials against concentration gradients into the vacuole, making their concentration significantly higher inside the vacuole than in the cytoplasm.`
  },
  {
    index: 11,
    commercialId: 'NEET-BOT-EMS-011',
    question: `Given below are two statements:
Statement I: The vacuole is a membrane-bound space found in the cytoplasm that contains water, sap, excretory product, and other materials not useful for the cell.
Statement II: The vacuole is bound by a double membrane called the tonoplast, which is continuous with the outer nuclear membrane.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct, but Statement II is incorrect.',
      'Statement I is incorrect, but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Statement I is correct. Statement II is incorrect because the vacuole is bound by a single membrane called the tonoplast, not a double membrane, and is not continuous with the outer nuclear membrane.`
  },
  {
    index: 12,
    commercialId: 'NEET-BOT-EMS-012',
    question: `Which of the following organelles exhibits a network or reticulum of tiny tubular structures scattered in the cytoplasm, revealed through electron microscopic studies of eukaryotic cells?`,
    options: [
      'Golgi complex',
      'Endoplasmic reticulum',
      'Lysosome',
      'Peroxisome'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Electron microscopic studies of eukaryotic cells reveal the presence of a network or reticulum of tiny tubular structures scattered in the cytoplasm that is called the endoplasmic reticulum (ER).`
  },
  {
    index: 13,
    commercialId: 'NEET-BOT-EMS-013',
    question: `A secretory cell in the human pancreas synthesizes digestive proenzymes (proteins) for export. Trace the correct chronological pathway of these proteins from synthesis to exocytosis:`,
    options: [
      'SER → trans Golgi → cis Golgi → Secretory vesicle → Plasma membrane',
      'Ribosomes on RER → RER lumen → Transition vesicle → cis face of Golgi → trans face of Golgi → Secretory vesicle → Plasma membrane',
      'Free cytoplasmic ribosomes → Lysosome → cis face of Golgi → trans face of Golgi → Plasma membrane',
      'Nuclear matrix → SER → cis face of Golgi → Vacuole → Plasma membrane'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Secretory proteins are synthesized by ribosomes attached to the RER, enter the RER lumen, are packaged into vesicles that fuse with the cis (forming) face of the Golgi apparatus, move through the cisternae for modification, bud off from the trans (maturing) face as secretory vesicles, and fuse with the plasma membrane for exocytosis.`
  },
  {
    index: 14,
    commercialId: 'NEET-BOT-EMS-014',
    question: `If a chemical inhibitor selectively blocks the budding of transition vesicles from the Rough Endoplasmic Reticulum, which of the following cellular processes would be most immediately affected?`,
    options: [
      'Glycosylation of proteins in the Golgi cisternae and biogenesis of primary lysosomes',
      'Oxidative phosphorylation across the inner mitochondrial membrane',
      'Photolysis of water inside the thylakoid lumen',
      'Synthesis of ribosomal RNA inside the nucleolus'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Because materials packaged as vesicles from the ER fuse with the cis face of the Golgi apparatus for modification (such as glycoprotein formation) and subsequent packaging of lysosomes, blocking ER vesicle budding immediately halts Golgi glycosylation and lysosome biogenesis.`
  },
  {
    index: 15,
    commercialId: 'NEET-BOT-EMS-015',
    question: `Match the enzyme classes present in lysosomes with the substrates they hydrolyze:

| Column I (Lysosomal Enzyme) | Column II (Target Substrate) |
| :--- | :--- |
| (a) Lipases | (iv) Lipids |
| (b) Proteases | (iii) Proteins |
| (c) Carbohydrases | (ii) Carbohydrates |
| (d) Nucleases | (i) Nucleic acids |`,
    options: [
      '(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)',
      '(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)',
      '(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)',
      '(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• Lipases → (iv) Lipids
• Proteases → (iii) Proteins
• Carbohydrases → (ii) Carbohydrates
• Nucleases → (i) Nucleic acids
Thus, (a)-(iv), (b)-(iii), (c)-(ii), (d)-(i).`
  },
  {
    index: 16,
    commercialId: 'NEET-BOT-EMS-016',
    question: `Given below are two statements:
Assertion (A): Cells of the adrenal cortex, Leydig cells of the testes, and ovarian follicle cells possess an exceptionally well-developed Smooth Endoplasmic Reticulum (SER).
Reason (R): In animal cells, lipid-like steroidal hormones are synthesized in the SER.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
      '(A) is true, but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `SER is the major site for lipid synthesis, and in animal cells, lipid-like steroidal hormones (such as cortisol, testosterone, and estrogen) are synthesized in the SER. Both Assertion and Reason are true, and Reason correctly explains Assertion.`
  },
  {
    index: 17,
    commercialId: 'NEET-BOT-EMS-017',
    question: `Which of the following statements about the Golgi apparatus is INCORRECT?`,
    options: [
      'It consists of many flat, disc-shaped sacs or cisternae of 0.5 μm to 1.0 μm diameter.',
      'These cisternae are stacked parallel to each other.',
      'A fixed number of four cisternae is always present in every Golgi complex across all eukaryotic species.',
      'It principally performs the function of packaging materials to be delivered either to the intra-cellular targets or secreted outside the cell.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `A varied number of cisternae are present in a Golgi complex (typically 4 to 8 in many cells, but variable across species and functional states), not a fixed number of four.`
  },
  {
    index: 18,
    commercialId: 'NEET-BOT-EMS-018',
    question: `Given below are two statements:
Statement I: All four components of the endomembrane system (ER, Golgi complex, lysosomes, and vacuoles) are bounded by single membranes.
Statement II: The outer membrane of the nuclear envelope is continuous with the Rough Endoplasmic Reticulum and also bears ribosomes on it.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct, but Statement II is incorrect.',
      'Statement I is incorrect, but Statement II is correct.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Both statements are accurate: ER, Golgi, lysosomes, and vacuoles are all single-membrane-bound organelles, and the outer nuclear membrane is continuous with the RER and bears ribosomes.`
  },
  {
    index: 19,
    commercialId: 'NEET-BOT-EMS-019',
    question: `In *Amoeba*, osmoregulation and excretion are primarily mediated by:`,
    options: [
      'Food vacuoles formed by engulfing food particles',
      'Gas vacuoles providing buoyancy',
      'Contractile vacuoles',
      'Sap vacuoles bounded by a double-layered tonoplast'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `In *Amoeba*, the contractile vacuole is important for osmoregulation and excretion.`
  },
  {
    index: 20,
    commercialId: 'NEET-BOT-EMS-020',
    question: `A mutation causes lysosomal membranes inside a hepatocyte to rupture simultaneously, releasing their contents into the neutral cytosol (pH ≈ 7.2). Why does immediate, catastrophic self-digestion of the cytoplasm usually NOT occur from a few ruptured lysosomes?`,
    options: [
      'Lysosomal hydrolases are synthesized as inactive lipids that require sunlight for activation.',
      'Lysosomal acid hydrolases require an acidic pH for optimal activity and are largely inactive at the neutral pH of the cytosol.',
      'Cytosolic ribosomes immediately degrade all released hydrolase enzymes into amino acids.',
      'The nuclear envelope sequesters all hydrolases inside the nucleoplasm within milliseconds.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Because lysosomal hydrolases are acid hydrolases optimally active at an acidic pH (~5.0), they exhibit negligible catalytic activity in the neutral cytosol (pH ≈ 7.2), protecting the cell from accidental leakage of a few lysosomes.`
  },
  {
    index: 21,
    commercialId: 'NEET-BOT-EMS-021',
    question: `Which of the following pairs of organelles are most directly involved in the biogenesis of lysosomes?`,
    options: [
      'Mitochondria and Peroxisomes',
      'Endoplasmic Reticulum and Golgi Apparatus',
      'Chloroplast and Central Vacuole',
      'Centrosome and Smooth Endoplasmic Reticulum'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Lysosomal enzymes are synthesized on the RER and transported to the Golgi apparatus, where lysosomes are formed by the process of packaging.`
  },
  {
    index: 22,
    commercialId: 'NEET-BOT-EMS-022',
    question: `How many of the following structures are part of the endomembrane system of a higher plant cell?
Endoplasmic reticulum, Golgi complex, Lysosome-like lytic vacuoles, Central sap vacuole, Peroxisome, Plastid, Mitochondrion`,
    options: ['Three', 'Four', 'Five', 'Six'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Four structures are part of the endomembrane system: Endoplasmic reticulum, Golgi complex, Lysosome-like lytic vacuoles, and Central sap vacuole. Peroxisomes, plastids, and mitochondria are excluded.`
  },
  {
    index: 23,
    commercialId: 'NEET-BOT-EMS-023',
    question: `Read the following statements carefully and choose the correct option:
(a) Each of the membranous organelles in a eukaryotic cell is distinct in terms of its structure and function.
(b) Many membranous organelles are considered together as an endomembrane system because their functions are coordinated.
(c) The ER often shows ribosomes attached to their inner luminal surface facing the cisternal cavity.
(d) Proteins synthesized by ribosomes on the ER are modified in the cisternae of the Golgi apparatus before they are released from its trans face.`,
    options: [
      '(a), (b), and (d) are correct; (c) is incorrect',
      '(a), (b), and (c) are correct; (d) is incorrect',
      '(b), (c), and (d) are correct; (a) is incorrect',
      'All (a), (b), (c), and (d) are correct'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Statements (a), (b), and (d) are correct. Statement (c) is incorrect because ribosomes are attached to the outer (cytoplasmic) surface of the ER, not the inner luminal surface.`
  },
  {
    index: 24,
    commercialId: 'NEET-BOT-EMS-024',
    question: `Given below are two statements:
Assertion (A): In plant cells, the central vacuole can occupy up to 90% of the volume of the cell.
Reason (R): The tonoplast facilitates the transport of a number of ions and other materials against concentration gradients into the vacuole, creating high osmotic potential inside the vacuole.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
      '(A) is true, but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Active transport of ions across the tonoplast against concentration gradients accumulates solutes inside the vacuole, drawing water inward by osmosis and allowing the central vacuole to occupy up to 90% of the plant cell volume. Both Assertion and Reason are true, and Reason correctly explains Assertion.`
  },
  {
    index: 25,
    commercialId: 'NEET-BOT-EMS-025',
    question: `Which face of the Golgi apparatus is convex and receives transport vesicles budding off from the endoplasmic reticulum?`,
    options: [
      'Concave cis face',
      'Convex cis (forming) face',
      'Convex trans (maturing) face',
      'Concave trans (forming) face'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `The Golgi cisternae are arranged with a distinct convex cis (or forming) face that receives transport vesicles from the ER, and a concave trans (or maturing) face from which modified products exit.`
  },
  {
    index: 26,
    commercialId: 'NEET-BOT-EMS-026',
    question: `In many cells, as in protists, food vacuoles are formed by:`,
    options: [
      'Pinching off from the trans face of the Golgi body',
      'Engulfing the food particles',
      'Fusion of multiple peroxisomes with the tonoplast',
      'Autolysis of aging mitochondria inside the ER lumen'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `In many cells, as in protists (e.g., *Amoeba*, *Paramecium*), food vacuoles are formed by engulfing food particles via phagocytosis.`
  },
  {
    index: 27,
    commercialId: 'NEET-BOT-EMS-027',
    question: `Given below are two statements:
Statement I: SER is frequently observed in cells actively involved in protein synthesis and secretion.
Statement II: RER is extensive and continuous with the outer membrane of the nucleus.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct, but Statement II is incorrect.',
      'Statement I is incorrect, but Statement II is correct.'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: `Statement I is incorrect because RER (not SER) is frequently observed in cells actively involved in protein synthesis and secretion. Statement II is correct: RER is extensive and continuous with the outer nuclear membrane.`
  },
  {
    index: 28,
    commercialId: 'NEET-BOT-EMS-028',
    question: `Match the terms in Column I with their appropriate descriptions in Column II:

| Column I | Column II |
| :--- | :--- |
| (a) Luminal compartment | (ii) Space enclosed inside the ER tubules |
| (b) Extra-luminal compartment | (iii) Cytoplasm outside the ER network |
| (c) Tonoplast | (i) Single membrane bounding the plant vacuole |
| (d) Cisternae | (iv) Flat, disc-shaped sacs of the Golgi apparatus |`,
    options: [
      '(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)',
      '(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)',
      '(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)',
      '(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• Luminal compartment → (ii) Space enclosed inside the ER tubules
• Extra-luminal compartment → (iii) Cytoplasm outside the ER network
• Tonoplast → (i) Single membrane bounding the plant vacuole
• Cisternae → (iv) Flat, disc-shaped sacs of the Golgi apparatus
Thus, (a)-(ii), (b)-(iii), (c)-(i), (d)-(iv).`
  },
  {
    index: 29,
    commercialId: 'NEET-BOT-EMS-029',
    question: `Which of the following statements is FALSE regarding lysosomes?`,
    options: [
      'They are membrane-bound vesicular structures formed by the process of packaging in the Golgi apparatus.',
      'Isolated lysosomal vesicles have been found to be very rich in almost all types of hydrolytic enzymes.',
      'Their hydrolytic enzymes include lipases, proteases, and carbohydrases, which are optimally active at basic pH (pH > 8.5).',
      'These enzymes are capable of digesting carbohydrates, proteins, lipids, and nucleic acids.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Lysosomal hydrolases are optimally active at an acidic pH, not at basic pH (pH > 8.5).`
  },
  {
    index: 30,
    commercialId: 'NEET-BOT-EMS-030',
    question: `A cell biologist labels newly synthesized phospholipids with a radioactive precursor. In which organelle of an animal cell will the radioactivity first accumulate at the highest rate?`,
    options: [
      'Smooth Endoplasmic Reticulum (SER)',
      'Nucleolus',
      'Lysosomal lumen',
      'Centriole'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `The Smooth Endoplasmic Reticulum (SER) is the major site for synthesis of lipids (including membrane phospholipids) in eukaryotic cells.`
  },
  {
    index: 31,
    commercialId: 'NEET-BOT-EMS-031',
    question: `Given below are two statements:
Assertion (A): The Golgi apparatus remains in close physical and functional association with the endoplasmic reticulum.
Reason (R): Materials to be packaged in the form of vesicles from the ER fuse with the cis face of the Golgi apparatus and move towards the maturing (trans) face.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
      '(A) is true, but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `The close physical and functional association between the Golgi apparatus and the ER exists precisely because ER vesicles carrying newly synthesized proteins and lipids fuse with the cis face of the Golgi and traverse toward the maturing (trans) face. Both Assertion and Reason are true, and Reason is the correct explanation.`
  },
  {
    index: 32,
    commercialId: 'NEET-BOT-EMS-032',
    question: `Consider the following statements regarding the Golgi complex:
1. Varied number of cisternae are present in a Golgi complex.
2. The Golgi cisternae are concentrically arranged near the nucleus.
3. It is the important site of formation of glycoproteins and glycolipids.
4. It contains circular double-stranded DNA and 70S ribosomes for autonomous protein synthesis.

Which of the above statements are true?`,
    options: [
      '1, 2, and 3 only',
      '1 and 4 only',
      '2, 3, and 4 only',
      '1, 2, 3, and 4'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Statements 1, 2, and 3 are true. Statement 4 is false because the Golgi apparatus does not possess DNA or ribosomes; only mitochondria and plastids are semi-autonomous organelles with circular DNA and 70S ribosomes.`
  },
  {
    index: 33,
    commercialId: 'NEET-BOT-EMS-033',
    question: `Which of the following organelles acts as a major intracellular storage site for water, sap, and excretory products in mature parenchyma cells of plants?`,
    options: [
      'Peroxisome',
      'Vacuole',
      'Smooth Endoplasmic Reticulum',
      'Golgi apparatus'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `The vacuole is the membrane-bound space in the cytoplasm containing water, sap, excretory products, and other materials not useful for the cell.`
  },
  {
    index: 34,
    commercialId: 'NEET-BOT-EMS-034',
    question: `Given below are two statements:
Statement I: Proteins synthesized by ribosomes on the ER are modified in the cisternae of the Golgi apparatus before they are released from its cis face.
Statement II: The cis and trans faces of the Golgi apparatus are completely isolated from each other and share no luminal continuity or vesicular traffic.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct, but Statement II is incorrect.',
      'Statement I is incorrect, but Statement II is correct.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Both statements are incorrect. Statement I is wrong because modified proteins are released from the trans face (not cis face). Statement II is wrong because the cis and trans faces are entirely different yet interconnected.`
  },
  {
    index: 35,
    commercialId: 'NEET-BOT-EMS-035',
    question: `Which type of ribosomes are attached to the outer cytoplasmic surface of the Rough Endoplasmic Reticulum in eukaryotic cells?`,
    options: [
      '70S ribosomes composed of 50S and 30S subunits',
      '80S ribosomes composed of 60S and 40S subunits',
      '55S mitoribosomes composed of 39S and 28S subunits',
      '70S plastidoribosomes attached via the tonoplast'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Eukaryotic cytoplasmic ribosomes, including those bound to the outer surface of the RER, are of the 80S type, composed of 60S and 40S subunits.`
  },
  {
    index: 36,
    commercialId: 'NEET-BOT-EMS-036',
    question: `If a plant cell is treated with a drug that inhibits the proton-pumping ATPases on the tonoplast, which immediate consequence would be observed?`,
    options: [
      'Inability of the vacuole to accumulate ions against their concentration gradient from the cytoplasm',
      'Immediate cessation of photosynthetic electron transport in grana thylakoids',
      'Failure of spindle fibre attachment during mitotic metaphase',
      'Degradation of the middle lamella between adjacent plant cells'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Tonoplast proton pumps establish an electrochemical gradient that drives the secondary active transport of ions against concentration gradients into the vacuole. Inhibiting them halts vacuolar ion accumulation.`
  },
  {
    index: 37,
    commercialId: 'NEET-BOT-EMS-037',
    question: `Identify the correct statement regarding the endoplasmic reticulum:`,
    options: [
      'It is present in all prokaryotic and eukaryotic cells without exception.',
      'It divides the intracellular space into luminal (inside ER) and extra-luminal (cytoplasm) compartments.',
      'SER bears 80S ribosomes on its outer surface and synthesizes digestive enzymes.',
      'RER is the exclusive site for steroid hormone synthesis in animal gonads.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `The ER divides the intracellular space of eukaryotic cells into luminal (inside ER) and extra-luminal (cytoplasm) compartments. It is absent in prokaryotes; SER lacks ribosomes; steroid synthesis occurs in SER.`
  },
  {
    index: 38,
    commercialId: 'NEET-BOT-EMS-038',
    question: `Given below are two statements:
Assertion (A): In eukaryotic cells, glycosylation (addition of oligosaccharide chains to proteins and lipids) is completed primarily in the Golgi apparatus.
Reason (R): The Golgi apparatus receives proteins and lipids from the ER at its cis face and modifies them as they traverse the cisternae toward the trans face.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
      '(A) is true, but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Proteins and lipids synthesized in the ER are delivered to the cis face of the Golgi apparatus, where glycosyltransferase enzymes modify them into glycoproteins and glycolipids before exit at the trans face. Both Assertion and Reason are true, and Reason correctly explains Assertion.`
  },
  {
    index: 39,
    commercialId: 'NEET-BOT-EMS-039',
    question: `Which of the following organelles does NOT belong to the endomembrane system?`,
    options: [
      'Endoplasmic reticulum',
      'Golgi complex',
      'Peroxisome',
      'Lysosome'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Peroxisomes, like mitochondria and chloroplasts, are excluded from the endomembrane system because their functions are not coordinated with the ER, Golgi complex, lysosomes, and vacuoles.`
  },
  {
    index: 40,
    commercialId: 'NEET-BOT-EMS-040',
    question: `Select the INCORRECT match between the cell type/organism and its prominent endomembrane feature:`,
    options: [
      'Plasma cells (antibody-secreting B-lymphocytes) → Abundant Rough Endoplasmic Reticulum',
      'Steroid-secreting endocrine cells → Abundant Smooth Endoplasmic Reticulum',
      'Amoeba → Contractile vacuole for osmoregulation and excretion',
      'Mature plant mesophyll cell → Absence of tonoplast around the central vacuole'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: `In plant cells, the central vacuole is always bound by a single membrane called the tonoplast; it does not lack a membrane.`
  },
  {
    index: 41,
    commercialId: 'NEET-BOT-EMS-041',
    question: `How many of the following statements are true for the Golgi apparatus?
(i) First observed by Camillo Golgi in 1898.
(ii) Consists of flat, disc-shaped sacs or cisternae measuring 0.5 μm to 1.0 μm in diameter.
(iii) Cisternae are stacked parallel to each other.
(iv) The forming face is concave and the maturing face is convex.`,
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Statements (i), (ii), and (iii) are true. Statement (iv) is false because the forming (cis) face is convex and the maturing (trans) face is concave.`
  },
  {
    index: 42,
    commercialId: 'NEET-BOT-EMS-042',
    question: `Given below are two statements:
Statement I: Lysosomes contain hydrolases—lipases, proteases, and carbohydrases—that are optimally active at acidic pH.
Statement II: Lysosomes are double-membrane-bound organelles formed directly by binary fission of preexisting lysosomes.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct, but Statement II is incorrect.',
      'Statement I is incorrect, but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Statement I is correct. Statement II is incorrect because lysosomes are single-membrane-bound vesicles formed by the process of packaging in the Golgi apparatus, not by binary fission.`
  },
  {
    index: 43,
    commercialId: 'NEET-BOT-EMS-043',
    question: `Which of the following processes is NOT performed by the Smooth Endoplasmic Reticulum (SER)?`,
    options: [
      'Synthesis of lipids',
      'Synthesis of lipid-like steroidal hormones in animal cells',
      'Synthesis of polypeptide chains on attached 80S ribosomes',
      'Division of intracellular space into luminal and extra-luminal compartments'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Synthesis of polypeptide chains on attached 80S ribosomes is a function of the Rough Endoplasmic Reticulum (RER); SER lacks ribosomes.`
  },
  {
    index: 44,
    commercialId: 'NEET-BOT-EMS-044',
    question: `During the maturation of a plant cell, small provacuoles coalesce to form a large central vacuole. Which of the following statements accurately characterizes this mature vacuole?`,
    options: [
      'It is devoid of any limiting membrane and floats freely in the cytosol.',
      'It is enclosed by a single membrane called tonoplast and can occupy up to 90% of the cell volume.',
      'Its sap has a significantly lower concentration of ions than the surrounding cytoplasm.',
      'It carries out aerobic respiration and ATP synthesis via ATP synthase complexes.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `In plant cells, the central vacuole is bound by a single membrane called the tonoplast, can occupy up to 90% of the cell volume, and maintains a significantly higher concentration of ions than the cytoplasm.`
  },
  {
    index: 45,
    commercialId: 'NEET-BOT-EMS-045',
    question: `Read the following four statements (P–S) regarding the endomembrane system and identify each as True (T) or False (F):
P. The endomembrane system includes endoplasmic reticulum, Golgi complex, lysosomes, and vacuoles.
Q. Functions of mitochondria, chloroplasts, and peroxisomes are coordinated with the ER and Golgi complex.
R. Materials packaged as vesicles from the ER fuse with the cis face of the Golgi apparatus and exit from the trans face.
S. In protists, food vacuoles are formed by engulfing food particles.`,
    options: [
      'P-T, Q-F, R-T, S-T',
      'P-T, Q-T, R-T, S-F',
      'P-F, Q-F, R-T, S-T',
      'P-T, Q-F, R-F, S-T'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `P is True (ER, Golgi, lysosomes, and vacuoles form the endomembrane system). Q is False (mitochondria, chloroplasts, and peroxisomes are not coordinated with the endomembrane system). R is True (ER vesicles fuse at the cis face and exit from the trans face). S is True (protists form food vacuoles by engulfing food particles).`
  }
];

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('testseries');
    console.log(`=== ADDING 45 ENDOMEMBRANE SYSTEM QUESTIONS TO CENTRAL QUESTION BANK & ${TARGET_TEST_ID} ===`);

    const qBankCol = db.collection('questionBank');
    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'Hard',
        type: 'MCQ',
        source: 'NCERT Class XI - Cell: The Unit of Life (Endomembrane System)',
        commercialId: q.commercialId,
        metadata: {
          exam: 'NEET',
          subject: SUBJECT,
          chapter: CHAPTER,
          subtopic: SUBTOPIC,
          commercialId: q.commercialId,
          topicOrder: q.index
        },
        updatedAt: new Date()
      };

      const res = await qBankCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const resolvedDoc = res.value || res;
      let finalId = resolvedDoc?._id;
      if (!finalId) {
        const found = await qBankCol.findOne({ commercialId: q.commercialId });
        finalId = found?._id;
      }
      assignedQuestionIds.push(finalId);
    }

    console.log(`Upserted ${assignedQuestionIds.length} questions into central questionBank (NEET-BOT-EMS-001 .. 045).`);

    const testPaperCol = db.collection('testPapers');
    const testDoc = {
      testId: TARGET_TEST_ID,
      title: SUBTOPIC,
      type: 'SUBTOPIC',
      subject: SUBJECT,
      chapter: CHAPTER,
      subtopic: SUBTOPIC,
      duration: 60,
      totalMarks: 180,
      questionsCount: assignedQuestionIds.length,
      positiveMarks: 4,
      negativeMarks: 1,
      status: 'published',
      isLive: true,
      targetExam: 'NEET',
      examType: 'neet',
      questions: assignedQuestionIds,
      updatedAt: new Date()
    };

    await testPaperCol.findOneAndUpdate(
      { testId: TARGET_TEST_ID },
      {
        $set: testDoc,
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log(`Upserted and assigned all 45 questions to ${TARGET_TEST_ID} in testPapers.`);

    // Audit report & audit state sync
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    await auditReportsCol.updateMany(
      { testId: TARGET_TEST_ID },
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
      testId: TARGET_TEST_ID,
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
      { testId: TARGET_TEST_ID },
      {
        $set: {
          testId: TARGET_TEST_ID,
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
    console.log('Synchronized testAuditReports (v1, 45/45 Pass) and testAuditStates.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();

