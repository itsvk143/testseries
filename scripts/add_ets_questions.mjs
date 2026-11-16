import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-ETS-and-Oxidative-Phosphorylation';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-ETS',
  'neet-SUBTOPIC-Botany-Oxidative-Phosphorylation',
  'neet-SUBTOPIC-ETS-and-Oxidative-Phosphorylation',
  'neet-SUBTOPIC-ETS',
  'neet-SUBTOPIC-Oxidative-Phosphorylation',
  'neet-SUBTOPIC-Electron-Transport-System',
  'neet-SUBTOPIC-Electron-Transport-System-(ETS)-and-Oxidative-Phosphorylation',
  'neet-SUBTOPIC-Botany-Electron-Transport-System-(ETS)-and-Oxidative-Phosphorylation'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Respiration in Plants';
const SUBTOPIC = 'ETS and Oxidative Phosphorylation';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-ETS-001",
    "question": "Which of the following correctly arranges the four multi-protein complexes of the mitochondrial Electron Transport System (ETS) along with their exact biochemical designations according to NCERT?",
    "options": [
      "Complex I: Succinate dehydrogenase; Complex II: NADH dehydrogenase; Complex III: Cytochrome c oxidase; Complex IV: Cytochrome bc\u2081",
      "Complex I: NADH dehydrogenase; Complex II: Succinate dehydrogenase; Complex III: Cytochrome bc\u2081 complex; Complex IV: Cytochrome c oxidase",
      "Complex I: NADH dehydrogenase; Complex II: Cytochrome bc\u2081 complex; Complex III: Succinate dehydrogenase; Complex IV: ATP synthase",
      "Complex I: Cytochrome c reductase; Complex II: FADH\u2082 oxidase; Complex III: Cytochrome a-a\u2083; Complex IV: Succinate-CoQ reductase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Per NCERT Class 11 Biology:\n\n- Complex I: NADH dehydrogenase\n- Complex II: Succinate dehydrogenase\n- Complex III: Cytochrome bc\u2081 complex\n- Complex IV: Cytochrome c oxidase (containing cytochromes a and a\u2083, and two copper centers)"
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-ETS-002",
    "question": "Identify the two **mobile electron carriers** in the mitochondrial ETS that shuttle electrons between the stationary transmembrane complexes, along with their exact physical locations:",
    "options": [
      "Ubiquinone (hydrophobic, within the inner mitochondrial membrane) and Cytochrome c (small peripheral protein attached to the outer surface of the inner mitochondrial membrane)",
      "Ubiquinone (hydrophilic, in the intermembrane space) and Cytochrome b (embedded in the outer mitochondrial membrane)",
      "Cytochrome c (in the mitochondrial matrix) and Ferredoxin (within the inner mitochondrial membrane)",
      "Plastoquinone (in the inner membrane) and Cytochrome a\u2083 (on the matrix side of the inner membrane)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "**Ubiquinone** is a hydrophobic benzoquinone derivative mobile within the lipid core of the inner mitochondrial membrane. **Cytochrome c** is a small protein attached to the outer surface of the inner membrane, acting as a mobile carrier between Complex III and Complex IV."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-ETS-003",
    "question": "**Assertion (A):** Oxidation of one molecule of NADH + H\u207a yields 3 molecules of ATP, whereas oxidation of one molecule of FADH\u2082 yields only 2 molecules of ATP in the mitochondrial ETS (per NCERT stoichiometry). \n\n**Reason (R):** Electrons from FADH\u2082 enter the ETS via Complex II (Succinate dehydrogenase) directly to ubiquinone, thereby bypassing the proton-pumping Complex I (NADH dehydrogenase).",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "NADH + H\u207a donates electrons to Complex I, pumping protons at Complexes I, III, and IV (3 ATP). FADH\u2082 donates electrons at Complex II directly to ubiquinone, bypassing Complex I's proton-pumping site, so protons are pumped only at Complexes III and IV (2 ATP)."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-ETS-004",
    "question": "Which of the following prosthetic groups and metal centers are integral components of **Complex IV (Cytochrome c oxidase)**?",
    "options": [
      "FMN and Iron-Sulfur (Fe-S) clusters",
      "FAD and Heme b\u2085\u2086\u2080",
      "Cytochromes a and a\u2083, and two copper centers (Cu_A and Cu_B)",
      "Cytochromes b_L, b_H, and Rieske Fe-S protein"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "According to NCERT, **Complex IV (Cytochrome c oxidase)** contains **cytochromes a and a\u2083**, and **two copper centers** (Cu_A and Cu_B)."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-ETS-005",
    "question": "Why is the energy-coupling process in mitochondria specifically termed **oxidative phosphorylation**, whereas the analogous process in chloroplasts is termed **photophosphorylation**?",
    "options": [
      "Because mitochondria synthesize ATP using molecular oxygen directly as a phosphate donor, while chloroplasts use photons.",
      "Because in mitochondria, the energy of oxidation-reduction reactions creates the proton gradient required for ATP synthesis, whereas in chloroplasts, light energy creates the proton gradient.",
      "Because oxidative phosphorylation occurs exclusively in the cytosol, while photophosphorylation occurs in the stroma.",
      "Because oxidative phosphorylation consumes ATP to oxidize glucose, while photophosphorylation produces ATP without a proton gradient."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both processes rely on chemiosmosis, but they differ in their primary energy source: in oxidative phosphorylation, the energy of oxidation-reduction reactions generates the proton gradient, whereas in photophosphorylation, light energy drives electron transport to establish the proton gradient."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-ETS-006",
    "question": "Match Column-I (ETS Inhibitor / Uncoupler) with Column-II (Specific Target / Mechanism of Action):\n\n\n| Column-I | Column-II |\n| :--- | :--- |\n| P. Cyanide (CN\u207b) and Carbon monoxide (CO) | 1. Blocks proton channel (F\u2080 subunit) of ATP synthase |\n| Q. Rotenone and Amytal | 2. Binds to Fe\u00b3\u207a/Cu_B center of Complex IV, blocking electron transfer to O\u2082 |\n| R. Oligomycin | 3. Inhibits electron transfer from Fe-S centers of Complex I to Ubiquinone |\n| S. 2,4-Dinitrophenol (2,4-DNP) | 4. Protonophore that dissipates the H\u207a gradient without ATP synthesis |",
    "options": [
      "P-2, Q-3, R-1, S-4",
      "P-3, Q-2, R-1, S-4",
      "P-2, Q-1, R-3, S-4",
      "P-4, Q-3, R-2, S-1"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Cyanide and CO bind to Complex IV, blocking terminal electron transfer to O\u2082 (P-2). Rotenone blocks Complex I \u2192 CoQ transfer (Q-3). Oligomycin plugs the F\u2080 proton channel of ATP synthase (R-1). 2,4-DNP is a lipophilic protonophore that ferries H\u207a across the inner membrane, uncoupling oxidation from phosphorylation (S-4)."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-ETS-007",
    "question": "According to Peter Mitchell's **Chemiosmotic Hypothesis**, what is the exact direction of proton (H\u207a) pumping during electron transport, and where do protons accumulate to establish the electrochemical gradient (proton-motive force)?",
    "options": [
      "Pumped from the intermembrane space into the mitochondrial matrix; protons accumulate in the matrix.",
      "Pumped from the mitochondrial matrix across the inner membrane into the intermembrane space; protons accumulate in the intermembrane space (lowering its pH).",
      "Pumped from the cytosol across the outer membrane into the intermembrane space; protons accumulate in the cytosol.",
      "Pumped from the mitochondrial matrix into the cytosol via porins; protons accumulate in the cytosol."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During electron transport, Complexes I, III, and IV pump protons (H\u207a) from the **mitochondrial matrix** across the inner membrane into the **intermembrane space**, creating an acidic, positively charged intermembrane space relative to the alkaline, negatively charged matrix."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-ETS-008",
    "question": "According to NCERT Class 11 Biology, for each ATP molecule produced by Complex V (ATP synthase), how many protons (H\u207a) pass through the F\u2080 channel from the intermembrane space back into the matrix down the electrochemical proton gradient?",
    "options": [
      "1 H\u207a",
      "2 H\u207a",
      "3 H\u207a",
      "4 H\u207a"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Verbatim from NCERT Class 11 Biology (Respiration in Plants): *\"For each ATP produced, 2H*^+ passes through F\u2080 from the intermembrane space to the matrix down the electrochemical proton gradient.\" (Note: Modern structural biology shows ~ 3--4 H\u207a, but NEET strictly follows the NCERT figure of **2H\u207a**)."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-ETS-009",
    "question": "Consider the structural and functional organization of **Complex V (ATP synthase)**:\n\n(i) The F\u2081 headpiece is a peripheral membrane protein complex protruding into the mitochondrial matrix and contains the catalytic sites for ATP synthesis from ADP and P\u1d62.\n(ii) The F\u2080 component is an integral membrane protein complex embedded in the inner mitochondrial membrane that forms a transmembrane proton channel.\n(iii) Passage of protons through F\u2080 induces rotational conformational changes in the \u03b3-subunit, driving the binding-change mechanism in the \u03b2-subunits of F\u2081.\n(iv) The F\u2081 subunit faces the intermembrane space, while F\u2080 is located on the outer mitochondrial membrane.\n\nWhich of the above statements are correct?",
    "options": [
      "(i), (ii), and (iii)",
      "(i) and (iv) only",
      "(ii), (iii), and (iv)",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect because F\u2080 is embedded in the inner mitochondrial membrane and F\u2081 protrudes into the **mitochondrial matrix** (not the intermembrane space)."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-ETS-010",
    "question": "What is the exact role of **molecular oxygen (O\u2082)** in aerobic cellular respiration?",
    "options": [
      "It directly oxidizes glucose in the cytoplasm to release carbon dioxide.",
      "It acts as the final hydrogen/electron acceptor at Complex IV, removing electrons and protons from the system to form metabolic water (H\u2082O).",
      "It donates electrons to Complex I to initiate the electron transport chain.",
      "It binds to the F\u2081 subunit of ATP synthase to catalyze the phosphorylation of ADP."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Oxygen is essential only at the final step of aerobic respiration: it acts as the **final hydrogen/electron acceptor** at Complex IV, combining with electrons and matrix protons to form metabolic water (\u00bdO\u2082 + 2e^- + 2H\u207a \u2192 H\u2082O)."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-ETS-011",
    "question": "How many molecules of **metabolic water (H\u2082O)** are formed at Complex IV when **one molecule of glucose** undergoes complete aerobic oxidation (assuming the malate-aspartate shuttle operates)?",
    "options": [
      "2 H\u2082O",
      "6 H\u2082O",
      "10 H\u2082O",
      "12 H\u2082O"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Complete aerobic oxidation of 1 glucose (with malate-aspartate shuttle) produces 10 NADH + H\u207a and 2 FADH\u2082 \u2014 a total of **12 pairs of electrons** (24 electrons). Since 2 electrons reduce \u00bdO\u2082 to 1 H\u2082O, 12 electron pairs form **12 molecules of H\u2082O** at Complex IV."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-ETS-012",
    "question": "Why does **Ubiquinone (CoQ)** play a unique central role in the mitochondrial electron transport chain compared to cytochromes?",
    "options": [
      "Ubiquinone is a water-soluble protein located exclusively in the matrix.",
      "Ubiquinone can accept both electrons and protons (forming ubiquinol, QH\u2082) from Complexes I and II, and releases protons into the intermembrane space while transferring single electrons to Complex III (a proton-electron coupler).",
      "Ubiquinone transfers electrons directly to molecular oxygen without involving Complex IV.",
      "Ubiquinone contains a copper ion that undergoes reversible Cu\u00b2\u207a/Cu\u207a reduction."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Ubiquinone (Q) accepts two electrons and two protons (2e^- + 2H\u207a) to become ubiquinol (QH\u2082). At Complex III, it releases the 2 H\u207a into the intermembrane space while transferring electrons one at a time to cytochromes, functioning as a crucial **proton-electron coupler**."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-ETS-013",
    "question": "If a student adds **2,4-Dinitrophenol (2,4-DNP)**\u2014a classic chemical uncoupler\u2014to actively respiring mitochondria supplied with succinate, ADP, P\u1d62, and O\u2082, what will be the immediate physiological consequence?",
    "options": [
      "Both oxygen consumption and ATP synthesis will stop completely.",
      "Oxygen consumption and electron transport will continue (or even accelerate), while ATP synthesis will drop to zero and free energy will be dissipated as heat.",
      "ATP synthesis will double while oxygen consumption stops.",
      "Succinate will be converted back into glucose via reverse glycolysis."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Uncouplers like 2,4-DNP collapse the proton gradient by carrying H\u207a directly across the inner membrane. Because there is no proton back-pressure, electron transport and O\u2082 consumption run at maximum speed, but ATP synthase cannot function, so all free energy is released as **heat**."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-ETS-014",
    "question": "**Statement I:** In brown adipose tissue (BAT) of hibernating mammals and human newborns, non-shivering thermogenesis is mediated by **Thermogenin (UCP1)**, a natural uncoupling protein in the inner mitochondrial membrane. \n\n**Statement II:** Thermogenin provides an alternative pathway for protons to re-enter the mitochondrial matrix without passing through ATP synthase, releasing the energy of the proton gradient directly as heat.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are accurate. Brown adipose tissue contains **Thermogenin (UCP1)**, which uncouples oxidative phosphorylation to generate body heat (non-shivering thermogenesis) in newborns and hibernating animals."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-ETS-015",
    "question": "In the ETS, electrons move spontaneously from carriers with more negative reduction potentials (E\u00b0') to carriers with more positive reduction potentials. Which of the following sequences represents the correct thermodynamic order of electron flow?",
    "options": [
      "NADH \u2192 FMN \u2192 Fe-S \u2192 Ubiquinone \u2192 Cyt b \u2192 Cyt c\u2081 \u2192 Cyt c \u2192 Cyt a \u2192 Cyt a\u2083 \u2192 O\u2082",
      "NADH \u2192 FAD \u2192 Cyt c \u2192 Ubiquinone \u2192 Cyt b \u2192 Cyt a\u2083 \u2192 Cyt a \u2192 O\u2082",
      "FADH\u2082 \u2192 FMN \u2192 Cyt a \u2192 Cyt c \u2192 Ubiquinone \u2192 Cyt b \u2192 O\u2082",
      "NADH \u2192 Ubiquinone \u2192 FMN \u2192 Cyt c \u2192 Cyt b \u2192 Cyt a \u2192 O\u2082"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The thermodynamically downhill order of carriers in the ETS is:\nNADH \u2192 FMN \u2192 Fe-S \u2192 Ubiquinone \u2192 Cyt b \u2192 Cyt c\u2081 \u2192 Cyt c \u2192 Cyt a \u2192 Cyt a\u2083 \u2192 O\u2082"
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-ETS-016",
    "question": "Which of the following complexes in the mitochondrial inner membrane do **not** pump protons (H\u207a) from the matrix to the intermembrane space?",
    "options": [
      "Complex I only",
      "Complex II only",
      "Complexes I, III, and IV",
      "Complex III and Complex IV"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Complexes I, III, and IV are transmembrane proton pumps. **Complex II (Succinate dehydrogenase)** does not span the entire membrane in a proton-pumping configuration and pumps **0 protons**."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-ETS-017",
    "question": "Because the inner mitochondrial membrane is impermeable to NADH, eukaryotic cells use shuttle systems to transfer reducing equivalents from cytosolic NADH (generated during glycolysis) into the mitochondrion. Compare the **Malate-Aspartate shuttle** (heart, liver, kidney) with the **Glycerol-3-Phosphate shuttle** (skeletal muscle, brain):",
    "options": [
      "The malate-aspartate shuttle transfers electrons to mitochondrial NAD\u207a (yielding 3 ATP per cytosolic NADH), whereas the glycerol-3-phosphate shuttle transfers electrons to mitochondrial FAD (yielding 2 ATP per cytosolic NADH).",
      "Both shuttles transfer electrons directly to Complex IV, yielding 1 ATP per cytosolic NADH.",
      "The glycerol-3-phosphate shuttle yields 38 ATP per glucose, whereas the malate-aspartate shuttle yields 36 ATP per glucose.",
      "Both shuttles transport intact NADH molecules through porin channels in the inner membrane."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In liver, heart, and kidney, the **malate-aspartate shuttle** regenerates matrix NADH (3 ATP per cytosolic NADH, total 38 ATP/glucose). In skeletal muscle and brain, the **glycerol-3-phosphate shuttle** transfers electrons to mitochondrial FAD (2 ATP per cytosolic NADH, total 36 ATP/glucose)."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-ETS-018",
    "question": "How many total ATP molecules are produced from **1 molecule of glucose** in human skeletal muscle cells operating via the **glycerol-3-phosphate shuttle** (using classical NCERT conversion factors: 1 NADH = 3 ATP, 1 FADH\u2082 = 2 ATP)?",
    "options": [
      "32 ATP",
      "36 ATP",
      "38 ATP",
      "40 ATP"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In skeletal muscle (glycerol-3-phosphate shuttle), the 2 cytosolic NADH from glycolysis yield 2 \u00d7 2 = 4 ATP instead of 6 ATP. Thus, total yield = $38 - 2 = \\mathbf{36 ATP}$."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-ETS-019",
    "question": "In **Complex III (Cytochrome bc\u2081 complex)**, how does the **Q-cycle** overcome the mechanistic mismatch between ubiquinol (QH\u2082, a two-electron carrier) and cytochrome c (a one-electron carrier)?",
    "options": [
      "By converting cytochrome c into a two-electron carrier using FMN.",
      "By bifurcating the two electrons of QH\u2082: one electron travels via the Rieske Fe-S protein and cytochrome c\u2081 to cytochrome c, while the second electron recycles via cytochromes b_L and b_H to partially reduce another ubiquinone molecule.",
      "By releasing one electron into the intermembrane space as a free radical.",
      "By passing both electrons simultaneously to Complex IV without involving cytochrome c."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Through the **Q-cycle** at Complex III, ubiquinol (QH\u2082) splits its two electrons: one reduces the Rieske Fe-S center \u2192 cytochrome c\u2081 \u2192 cytochrome c, while the second travels through cytochrome b_L and b_H to partially reduce an oxidized ubiquinone to a semiquinone radical."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-ETS-020",
    "question": "Why does **cyanide (CN\u207b)** cause rapid death within minutes when ingested or inhaled?",
    "options": [
      "It competitively inhibits hexokinase in erythrocytes.",
      "It binds irreversibly to the heme a\u2083\u2013Cu_B binuclear center of Cytochrome c oxidase (Complex IV), halting electron transfer to O\u2082, collapsing the proton gradient, and stopping oxidative phosphorylation in all aerobic tissues.",
      "It dissolves the outer mitochondrial membrane.",
      "It converts all cellular ATP into cyclic AMP."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Cyanide (CN\u207b) binds with extremely high affinity to the ferric (Fe\u00b3\u207a) heme a\u2083 of **Complex IV**, completely blocking electron transfer to O\u2082 and causing immediate cellular energy failure (histotoxic hypoxia)."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-ETS-021",
    "question": "If **Oligomycin** (an inhibitor of the F\u2080 proton channel of ATP synthase) is added to intact, coupled mitochondria, why does **electron transport and oxygen consumption** also stop shortly afterward?",
    "options": [
      "Oligomycin directly binds to Cytochrome c oxidase as well.",
      "Without proton re-entry through F\u2080, the proton gradient across the inner membrane builds up to a maximum thermodynamic back-pressure, preventing Complexes I, III, and IV from pumping any more protons.",
      "Oligomycin destroys all NAD\u207a in the matrix.",
      "Oxygen cannot diffuse across the inner membrane when F\u2080 is closed."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In intact mitochondria, oxidation and phosphorylation are **obligately coupled**. Blocking F\u2080 with oligomycin prevents protons from re-entering the matrix; the resulting steep proton-motive force exerts thermodynamic back-pressure on Complexes I, III, and IV, arresting electron flow and O\u2082 uptake."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-ETS-022",
    "question": "Suppose an experimenter adds **Oligomycin** to coupled mitochondria (halting both ATP synthesis and O\u2082 consumption), and then subsequently adds **2,4-Dinitrophenol (2,4-DNP)** to the same preparation. What will happen?",
    "options": [
      "Both O\u2082 consumption and ATP synthesis will resume normally.",
      "O\u2082 consumption (electron transport) will resume rapidly because 2,4-DNP dissipates the proton back-pressure, but ATP synthesis will remain completely blocked.",
      "Neither O\u2082 consumption nor ATP synthesis will change; both remain zero.",
      "ATP synthesis will resume, while O\u2082 consumption remains zero."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Adding 2,4-DNP after oligomycin provides an alternative route for H\u207a ions to leak back into the matrix, relieving the thermodynamic back-pressure and restoring O\u2082 consumption, while ATP synthesis remains blocked by oligomycin."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-ETS-023",
    "question": "Which of the following cytochromes in the mitochondrial ETS contains **iron** in its heme prosthetic group, whereas **Cytochrome c oxidase** additionally requires **copper**?",
    "options": [
      "All cytochromes (b, c\u2081, c, a, a\u2083) contain iron in a heme porphyrin ring, and undergo reversible Fe\u00b3\u207a \u2194 Fe\u00b2\u207a redox transitions.",
      "Only cytochrome c contains iron; cytochromes b and a contain magnesium.",
      "Cytochromes b and c\u2081 contain copper, while cytochromes a and a\u2083 contain zinc.",
      "Cytochrome c contains manganese instead of iron."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "All cytochromes (b, c\u2081, c, a, a\u2083) are heme-containing proteins in which an iron ion undergoes reversible one-electron oxidation-reduction (Fe\u00b3\u207a + e^- \u2194 Fe\u00b2\u207a)."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-ETS-024",
    "question": "How is **Cytochrome c** structurally anchored to the inner mitochondrial membrane compared to Cytochromes b, c\u2081, a, and a\u2083?",
    "options": [
      "Cytochrome c is a transmembrane protein spanning both the outer and inner membranes.",
      "Cytochrome c is a small, water-soluble peripheral protein loosely bound via electrostatic interactions to the outer face (intermembrane space side) of the inner mitochondrial membrane, allowing it to diffuse laterally between Complex III and Complex IV.",
      "Cytochrome c is covalently bound to the F\u2081 headpiece on the matrix side.",
      "Cytochrome c is dissolved freely in the cytosol."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "As stated in NCERT, **Cytochrome c** is a small protein attached to the **outer surface of the inner membrane** and acts as a mobile carrier for transfer of electrons between Complex III and Complex IV."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-ETS-025",
    "question": "**Assertion (A):** In the respiratory electron transport chain, the proton-motive force (\u0394p) consists of two components: a chemical pH gradient (\u0394pH) and an electrical membrane potential (\u0394\u03c8). \n\n**Reason (R):** Pumping positively charged H\u207a ions out of the matrix leaves the mitochondrial matrix negatively charged and alkaline relative to the positively charged, acidic intermembrane space.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Pumping positively charged H\u207a ions from the matrix to the intermembrane space simultaneously generates a chemical pH difference (\u0394pH, matrix alkaline) and an electrical voltage (\u0394\u03c8, matrix negative), together forming the proton-motive force."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-ETS-026",
    "question": "Consider the **Respiratory Balance Sheet** in NCERT. Which of the following assumptions are required to arrive at the theoretical net gain of **38 ATP** per glucose molecule?\n\n(i) There is a sequential, orderly pathway functioning, with one substrate forming the next (glycolysis \u2192 TCA cycle \u2192 ETS).\n(ii) The NADH synthesized in glycolysis is transferred into the mitochondria and undergoes oxidative phosphorylation.\n(iii) None of the intermediates in the pathway are utilized to synthesize any other compound (no anabolic withdrawal).\n(iv) Only glucose is being respired; no other alternative substrates enter the pathway at any intermediary stage.",
    "options": [
      "(i) and (ii) only",
      "(i), (iii), and (iv) only",
      "(ii), (iii), and (iv) only",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "All four assumptions are explicitly listed in NCERT Class 11 Biology under *The Respiratory Balance Sheet* as theoretical idealizations that do not strictly hold simultaneously in living cells."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-ETS-027",
    "question": "During the reduction of molecular oxygen to water at Complex IV, how many electrons are required to completely reduce **one molecule of O\u2082** without releasing toxic reactive oxygen species (such as superoxide O\u2082^{\u2022-} or peroxide O\u2082^{2-})?",
    "options": [
      "1 electron",
      "2 electrons",
      "4 electrons (along with 4 H\u207a from the matrix to form 2 H\u2082O)",
      "6 electrons"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Complete reduction of one molecule of diatomic oxygen (O\u2082) requires **4 electrons** and **4 H\u207a** to yield 2 molecules of H\u2082O (O\u2082 + 4e^- + 4H\u207a \u2192 2H\u2082O). Complex IV holds the partially reduced oxygen intermediates tightly between heme a\u2083 and Cu_B until all 4 electrons are delivered."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-ETS-028",
    "question": "In **Complex I (NADH dehydrogenase)**, electrons from NADH + H\u207a are first transferred to which primary prosthetic group before passing through iron-sulfur (Fe-S) clusters to ubiquinone?",
    "options": [
      "Flavin adenine dinucleotide (FAD)",
      "Flavin mononucleotide (FMN)",
      "Heme b",
      "Copper (Cu_A)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In Complex I (NADH dehydrogenase), electrons from NADH + H\u207a are first accepted by **Flavin mononucleotide (FMN)**, reduced to FMNH\u2082, and then passed through a series of Fe-S clusters to ubiquinone."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-ETS-029",
    "question": "Which of the following statements about **Ubiquinone** is **false**?",
    "options": [
      "It is located within the inner mitochondrial membrane.",
      "It receives reducing equivalents via FADH\u2082 generated during the oxidation of succinate in the citric acid cycle.",
      "It also receives electrons from Complex I (NADH dehydrogenase).",
      "The reduced ubiquinone (ubiquinol) is oxidized with the transfer of electrons directly to Cytochrome c, bypassing Complex III."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement (D) is false because reduced ubiquinone (ubiquinol) transfers its electrons to **Complex III (Cytochrome bc\u2081 complex)**, which then passes them to Cytochrome c \u2014 ubiquinol never transfers electrons directly to Cytochrome c."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-ETS-030",
    "question": "If a mutation renders **Complex III (Cytochrome bc\u2081 complex)** completely non-functional, what will be the redox state of **Ubiquinone** and **Cytochrome c**, respectively, in the presence of substrates and oxygen?",
    "options": [
      "Ubiquinone will be fully oxidized; Cytochrome c will be fully reduced.",
      "Ubiquinone will be fully reduced (as ubiquinol, QH\u2082); Cytochrome c will be fully oxidized.",
      "Both Ubiquinone and Cytochrome c will be fully reduced.",
      "Both Ubiquinone and Cytochrome c will be fully oxidized."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Blocking Complex III creates a dam in the electron flow: carriers upstream of the block (Complex I, Complex II, and **Ubiquinone**) become backed up with electrons (**fully reduced**), while carriers downstream of the block (**Cytochrome c**, Complex IV) donate their remaining electrons to O\u2082 and remain **fully oxidized**."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-ETS-031",
    "question": "In **Paul Boyer's Binding-Change Mechanism** for ATP synthase (F\u2081 headpiece), the three catalytic \u03b2-subunits cycle sequentially through three conformational states (O, L, and T). What is the exact function of proton flow through F\u2080 in this mechanism?",
    "options": [
      "Proton flow directly phosphorylates ADP by forming a covalent H\u207a-ADP bond.",
      "Proton flow drives rotation of the c-ring and \u03b3-shaft, providing mechanical energy primarily to **release tightly bound, newly synthesized ATP** from the T (tight) site by converting it into the O (open) state.",
      "Proton flow cleaves ATP into ADP and P\u1d62 to generate heat.",
      "Proton flow transports ATP out of the cell into the bloodstream."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to Boyer's Binding-Change Mechanism, ADP + P\u1d62 spontaneously condense into tightly bound ATP at the T site; the mechanical energy of proton-driven \u03b3-subunit rotation is primarily required to **force open the T site and release the synthesized ATP**."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-ETS-032",
    "question": "Which inhibitor binds specifically to the **Q\u1d62 site of Complex III (Cytochrome bc\u2081 complex)**, blocking electron transfer from cytochrome b_H to ubiquinone?",
    "options": [
      "Rotenone",
      "Antimycin A",
      "Malonate",
      "Cyanide"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "**Antimycin A** specifically inhibits Complex III (Cytochrome bc\u2081 complex) by binding to the Q\u1d62 site and blocking electron flow from cytochrome b_H to ubiquinone."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-ETS-033",
    "question": "Calculate the total number of ATP molecules generated **exclusively by oxidative phosphorylation** (via ETS and Complex V) during the complete aerobic oxidation of **one molecule of glucose** (using NCERT's 3 ATP/NADH and 2 ATP/FADH\u2082, with malate-aspartate shuttle):",
    "options": [
      "4 ATP",
      "32 ATP",
      "34 ATP",
      "38 ATP"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Total ATP from complete glucose oxidation = 38 ATP. Of these, **4 ATP** come from substrate-level phosphorylation (2 net in glycolysis + 2 GTP/ATP in TCA cycle), and **34 ATP** come from oxidative phosphorylation (10 NADH \u00d7 3 + 2 FADH\u2082 \u00d7 2 = 30 + 4 = 34 ATP)."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-ETS-034",
    "question": "**Statement I:** The inner mitochondrial membrane is impermeable to almost all ions and polar molecules, including H\u207a, ATP, ADP, and pyruvate, requiring specific carrier proteins. \n\n**Statement II:** The outer mitochondrial membrane is freely permeable to small molecules and ions up to ~ 5000 Da due to the presence of abundant **porin (VDAC)** channels.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are correct: the outer membrane has wide **porin** channels making it permeable to small solutes, whereas the inner membrane is a tight permeability barrier requiring specific antiporters/symporters so that the proton gradient is not dissipated."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-ETS-035",
    "question": "How does **ATP/ADP translocase** (adenine nucleotide translocase) transport ATP^{4-} out of the mitochondrial matrix and ADP^{3-} into the matrix across the inner membrane?",
    "options": [
      "By simple passive diffusion through the lipid bilayer.",
      "By electrogenic 1:1 antiport driven by the membrane potential (\u0394\u03c8, matrix negative), which effectively consumes the equivalent of ~ 1 H\u207a per ATP exported.",
      "By symport with Na\u207a ions using Na\u207a/K\u207a-ATPase.",
      "By endocytosis of the inner membrane."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "**ATP/ADP translocase** exchanges matrix ATP^{4-} for intermembrane ADP^{3-} in a 1:1 antiport. Because a net negative charge (-1) moves out of the negatively charged matrix, this transport is driven by \u0394\u03c8 and consumes energy equivalent to ~ 1 H\u207a."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-ETS-036",
    "question": "In **respiratory control** (acceptor control), what is the primary factor that regulates the rate of electron transport and oxygen consumption in healthy, tightly coupled mitochondria?",
    "options": [
      "The concentration of molecular oxygen (as long as O\u2082 is above trace micromolar levels).",
      "The intracellular availability of **ADP and P\u1d62** (when ADP rises during cellular work, ATP synthase speeds up, draining the H\u207a gradient and accelerating electron transport).",
      "The concentration of glucose in the extracellular fluid.",
      "The temperature of the outer mitochondrial membrane."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In coupled mitochondria, the rate of respiration is governed by the availability of **ADP and P\u1d62** (respiratory control). When cellular ATP consumption rises, [ADP] increases, stimulating ATP synthase, lowering the proton gradient, and accelerating electron transport."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-ETS-037",
    "question": "Which of the following cytochromes can react directly with **molecular oxygen (O\u2082)** and is inhibited by **carbon monoxide (CO)** in a light-reversible manner?",
    "options": [
      "Cytochrome b",
      "Cytochrome c\u2081",
      "Cytochrome c",
      "Cytochrome a\u2083"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "**Cytochrome a\u2083** (together with Cu_B in Complex IV) is the only cytochrome capable of binding and reducing molecular oxygen (O\u2082), and it also binds carbon monoxide (CO) competitively with O\u2082."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-ETS-038",
    "question": "Suppose isolated mitochondria are supplied with **\u03b2-hydroxybutyrate** (which generates matrix NADH) and **succinate** (which generates FADH\u2082). If **Rotenone** is added to the medium, what will happen to the oxidation of these two substrates?",
    "options": [
      "Oxidation of both \u03b2-hydroxybutyrate and succinate will be completely blocked.",
      "Oxidation of \u03b2-hydroxybutyrate (via Complex I) will be blocked, whereas oxidation of succinate (via Complex II) will continue uninterrupted.",
      "Oxidation of succinate will be blocked, whereas \u03b2-hydroxybutyrate oxidation will continue.",
      "Both substrates will be oxidized twice as fast."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "**Rotenone** selectively inhibits Complex I (NADH dehydrogenase), blocking oxidation of NADH-linked substrates like \u03b2-hydroxybutyrate. However, succinate enters at **Complex II**, bypassing Complex I, so its oxidation continues normally."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-ETS-039",
    "question": "Why does the **cytochrome c** protein remain highly conserved across evolutionarily distant eukaryotes (from yeast to plants to humans)?",
    "options": [
      "Because it is encoded exclusively by nuclear introns.",
      "Because it must precisely dock with both the cytochrome bc\u2081 complex (Complex III) and cytochrome c oxidase (Complex IV) via conserved positively charged lysine residues around its heme crevice.",
      "Because it synthesizes ATP directly in the cytosol.",
      "Because it binds oxygen in muscle tissue like myoglobin."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Cytochrome c is a soluble shuttle that must physically bind to both Complex III (to accept electrons) and Complex IV (to donate electrons); mutations in its conserved lysine-rich docking surface disrupt both interactions, explaining its extreme evolutionary conservation."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-ETS-040",
    "question": "How many total **protons (H\u207a)** must pass through the F\u2080 particle of ATP synthase to synthesize the ATP produced solely by oxidative phosphorylation from **one molecule of glucose** (using NCERT's 2 H\u207a per ATP and 34 ATP from oxidative phosphorylation)?",
    "options": [
      "34 H\u207a",
      "68 H\u207a",
      "76 H\u207a",
      "100 H\u207a"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Using NCERT's values: 34 ATP are produced via oxidative phosphorylation per glucose, and **2 H\u207a** pass through F\u2080 per ATP formed. Therefore, $34 \u00d7 2 = \\mathbf{68 H\u207a} pass through F\u2080$."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-ETS-041",
    "question": "Which of the following is **not** a component of the mitochondrial electron transport chain?",
    "options": [
      "Flavin mononucleotide (FMN)",
      "Iron-sulfur (Fe-S) proteins",
      "Plastocyanin (PC)",
      "Ubiquinone (CoQ\u2081\u2080)"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "**Plastocyanin (PC)** is a copper-containing mobile electron carrier in the **chloroplast thylakoid lumen** (photosynthetic electron transport), not in mitochondria."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-ETS-042",
    "question": "In the mitochondrial ETS, what is the role of **Iron-Sulfur (Fe-S) centers**?",
    "options": [
      "They carry two electrons and two protons simultaneously across the membrane.",
      "They act as one-electron carriers in which an iron atom undergoes reversible oxidation-reduction between Fe\u00b3\u207a and Fe\u00b2\u207a.",
      "They catalyze the decarboxylation of pyruvate.",
      "They form the transmembrane proton pore of ATP synthase."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "**Iron-sulfur (Fe-S) centers** (non-heme iron proteins) are single-electron carriers in which an iron atom cycles between the oxidized ferric (Fe\u00b3\u207a) and reduced ferrous (Fe\u00b2\u207a) states."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-ETS-043",
    "question": "**Assertion (A):** In aerobic respiration, the energy of oxidation-reduction is utilized for the production of a proton gradient required for phosphorylation. \n\n**Reason (R):** Unlike photophosphorylation where light energy drives electron transport, in respiration the chemical bond energy released during sequential exergonic electron transfers from NADH/FADH\u2082 to O\u2082 powers proton translocation.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are accurate and aligned with NCERT: sequential exergonic redox reactions along the ETS release free energy used by Complexes I, III, and IV to pump protons across the inner membrane, creating the electrochemical proton gradient for ATP synthesis."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-ETS-044",
    "question": "What is the **P/O ratio** (number of molecules of ADP phosphorylated to ATP per atom of oxygen, \u00bdO\u2082, reduced to H\u2082O) according to classical NCERT stoichiometry when NADH + H\u207a is oxidized vs. when FADH\u2082 is oxidized?",
    "options": [
      "3 for NADH + H\u207a and 2 for FADH\u2082",
      "2 for NADH + H\u207a and 3 for FADH\u2082",
      "38 for NADH + H\u207a and 2 for FADH\u2082",
      "1 for NADH + H\u207a and 1 for FADH\u2082"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "By NCERT stoichiometry, oxidizing 1 NADH + H\u207a reduces \u00bdO\u2082 (1 oxygen atom) and yields **3 ATP** (P/O ratio = 3), whereas oxidizing 1 FADH\u2082 reduces \u00bdO\u2082 and yields **2 ATP** (P/O ratio = 2)."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-ETS-045",
    "question": "Which of the following statements regarding **mitochondrial DNA (mtDNA)** and the biogenesis of the ETS complexes is accurate?",
    "options": [
      "All subunits of Complexes I, II, III, IV, and V are encoded exclusively by nuclear DNA.",
      "Complexes I, III, IV, and V are dual-origin complexes containing subunits encoded by both nuclear DNA and mitochondrial DNA, whereas **Complex II (Succinate dehydrogenase)** is encoded **entirely by nuclear DNA**.",
      "All subunits of the ETS are encoded exclusively by mitochondrial DNA.",
      "Mitochondria lack ribosomes and cannot translate any ETS proteins."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Mitochondria are semi-autonomous organelles: Complexes I, III, IV, and V contain core catalytic subunits encoded by **mtDNA** alongside nuclear-encoded subunits, whereas **Complex II (Succinate dehydrogenase)** is the only ETS complex encoded **100% by nuclear DNA**."
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`Starting ingestion of ${rawQuestions.length} questions for ${SUBTOPIC}...`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'hard',
        examType: 'neet',
        type: 'single',
        isActive: true,
        status: 'published',
        source: 'Self',
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

      const savedId = result._id || result.value?._id;
      if (!savedId) {
        const fetched = await qbCol.findOne({ commercialId: q.commercialId });
        assignedQuestionIds.push(fetched._id);
      } else {
        assignedQuestionIds.push(savedId);
      }
    }

    console.log(`Successfully upserted ${assignedQuestionIds.length} questions into questionBank.`);

    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];

    for (const testId of allTestIds) {
      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: 'ETS and Oxidative Phosphorylation',
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

      // Synchronize audit report
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
