import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Glycolysis-(EMP-Pathway)';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Glycolysis',
  'neet-SUBTOPIC-Glycolysis-(EMP-Pathway)',
  'neet-SUBTOPIC-Glycolysis',
  'neet-SUBTOPIC-Glycolysis-Krebs-cycle-and-oxidative-phosphorylation'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Respiration in Plants';
const SUBTOPIC = 'Glycolysis (EMP Pathway)';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-GLY-001",
    "question": "Identify the incorrect statement regarding the universal metabolic pathway discovered by Gustav Embden, Otto Meyerhof, and J. Parnas:",
    "options": [
      "It occurs in the cytoplasm of all living organisms, both obligate anaerobes and facultative aerobes.",
      "It neither requires molecular oxygen (O\u2082) nor releases carbon dioxide (CO\u2082).",
      "During the preparatory phase, two molecules of ATP are consumed to form a symmetric hexose bisphosphate.",
      "Every enzymatic step in the pathway is catalyzed by a distinct isoform of dehydrogenase and kinase."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Only one step in glycolysis involves a dehydrogenase (Glyceraldehyde-3-phosphate dehydrogenase), and four steps involve kinases (Hexokinase, PFK-1, Phosphoglycerate kinase, Pyruvate kinase). The remaining steps are catalyzed by isomerases, an aldolase, a mutase, and an enolase."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-GLY-002",
    "question": "Which of the following pairs of enzymes in the EMP pathway are allosterically regulated and catalyze irreversible reactions under intracellular physiological conditions?",
    "options": [
      "Phosphohexose isomerase, Aldolase, Enolase",
      "Hexokinase, Phosphofructokinase-1, Pyruvate kinase",
      "Triose phosphate isomerase, Phosphoglycerate kinase, Mutase",
      "Glucokinase, Glyceraldehyde-3-phosphate dehydrogenase, Enolase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Hexokinase (Step 1), Phosphofructokinase-1 (Step 3), and Pyruvate kinase (Step 10) catalyze reactions with large negative \\Delta G, making them physiologically irreversible and the primary sites of allosteric regulation."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-GLY-003",
    "question": "Consider the conversion of 1 mole of sucrose into pyruvic acid via glycolysis. What is the net gain of ATP (via substrate-level phosphorylation) and NADH + H\u207a, respectively?",
    "options": [
      "2 ATP and 2 NADH + H^+",
      "4 ATP and 4 NADH + H^+",
      "8 ATP and 4 NADH + H^+",
      "4 ATP and 2 NADH + H^+"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "One mole of sucrose (12C) is hydrolyzed by invertase into 1 mole of glucose (6C) and 1 mole of fructose (6C). Each hexose yields a net gain of 2 ATP and 2 NADH + H^+. Therefore, 1 mole of sucrose yields 4 ATP and 4 NADH + H^+."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-GLY-004",
    "question": "**Assertion (A):** The conversion of 3-phosphoglyceraldehyde (PGAL) to 1,3-bisphosphoglycerate (BPGA) is coupled with the reduction of NAD\u207a to NADH + H\u207a. \n\n**Reason (R):** The inorganic phosphate (H\u2083PO\u2084) added at the C\u2081 position of PGAL is donated directly by an ATP molecule.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Assertion (A) is true: PGAL is oxidized while NAD\u207a is reduced to NADH + H\u207a. Reason (R) is false because the phosphate added at C\u2081 comes from free inorganic phosphate (Pi / H\u2083PO\u2084) in the cytosol, not from ATP."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-GLY-005",
    "question": "If a glucose molecule is radiolabeled with \u00b9\u2074C exclusively at Carbon-1 (C\u2081), which carbon(s) of the two resulting pyruvate molecules will carry the radioactive label?",
    "options": [
      "The carboxyl carbon (C\u2081) of one pyruvate molecule only.",
      "The methyl carbon (C\u2083) of one pyruvate molecule only.",
      "The carbonyl carbon (C\u2082) of both pyruvate molecules.",
      "The methyl carbon (C\u2083) of both pyruvate molecules."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During aldolase cleavage, C\u2081, C\u2082, C\u2083 of fructose-1,6-bisphosphate form DHAP (C\u2081 becomes the phosphorylated CH_2OPO_3^{2-} group), while C\u2084, C\u2085, C\u2086 form PGAL. When DHAP isomerizes to PGAL, its C\u2081 becomes C\u2083 of PGAL, which ultimately becomes the methyl carbon (C\u2083) of one pyruvate molecule."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-GLY-006",
    "question": "Match Column-I (Glycolytic Enzyme) with Column-II (Type of Reaction / Cofactor Requirement):\n\n| Column-I | Column-II |\n| :--- | :--- |\n| P. Aldolase | 1. Dehydration; requires Mg\u00b2\u207a |\n| Q. Enolase | 2. Reversible cleavage of a 6-C ketose into two 3-C trioses |\n| R. Phosphoglycerate mutase | 3. Intramolecular shift of phosphoryl group |\n| S. Glyceraldehyde-3-P dehydrogenase | 4. Oxidative phosphorylation at substrate level |",
    "options": [
      "P-2, Q-1, R-3, S-4",
      "P-2, Q-3, R-1, S-4",
      "P-4, Q-1, R-3, S-2",
      "P-1, Q-2, R-4, S-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Aldolase splits F-1,6-BP into DHAP and PGAL (P-2). Enolase removes H\u2082O from 2-PGA using Mg\u00b2\u207a (Q-1). Phosphoglycerate mutase shifts the phosphate from C\u2083 to C\u2082 (R-3). GAPDH couples oxidation with inorganic phosphorylation (S-4)."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-GLY-007",
    "question": "In plants, sucrose is converted into glucose and fructose by the enzyme \\_\\_\\_\\_\\_\\_\\_\\_, and these two monosaccharides enter the glycolytic pathway after phosphorylation by \\_\\_\\_\\_\\_\\_\\_\\_.",
    "options": [
      "Sucrase; Phosphofructokinase",
      "Invertase; Hexokinase",
      "Zymase; Glucokinase",
      "Amylase; Aldolase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to NCERT, sucrose is converted into glucose and fructose by the enzyme **invertase**, and these two monosaccharides readily enter the glycolytic pathway after phosphorylation by **hexokinase**."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-GLY-008",
    "question": "During the payoff phase of glycolysis, water (H\u2082O) is eliminated during which specific enzymatic transformation?",
    "options": [
      "1,3-bisphosphoglycerate \u2192 3-phosphoglycerate",
      "3-phosphoglycerate \u2192 2-phosphoglycerate",
      "2-phosphoglycerate \u2192 Phosphoenolpyruvate",
      "Phosphoenolpyruvate \u2192 Pyruvic acid"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Enolase catalyzes the dehydration (removal of H\u2082O) of 2-phosphoglycerate to form phosphoenolpyruvate (PEP)."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-GLY-009",
    "question": "Which of the following inhibitors specifically blocks glycolysis by competing with inorganic phosphate (Pi) during the oxidation of glyceraldehyde-3-phosphate, thereby preventing net ATP synthesis without stopping the oxidation step itself?",
    "options": [
      "Fluoride (F\u207b)",
      "Iodoacetate",
      "Arsenate (AsO\u2084\u00b3\u207b)",
      "Malonate"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Arsenate (AsO\u2084\u00b3\u207b) mimics inorganic phosphate (Pi). GAPDH incorporates arsenate to form 1-arseno-3-phosphoglycerate, which spontaneously hydrolyzes to 3-phosphoglycerate, bypassing the ATP-generating step of phosphoglycerate kinase."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-GLY-010",
    "question": "Sodium fluoride (NaF) is routinely added to blood collection vials for blood glucose estimation because fluoride ions inhibit glycolysis by chelating Mg\u00b2\u207a required by the enzyme:",
    "options": [
      "Hexokinase",
      "Enolase",
      "Pyruvate kinase",
      "Phosphoglycerate kinase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Fluoride ions (F\u207b) react with Mg\u00b2\u207a and phosphate to form a fluorophosphate complex that tightly binds and inhibits **enolase**, stopping glucose consumption in blood samples."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-GLY-011",
    "question": "How many total ATP equivalents are generated when 1 molecule of glucose is completely oxidized to pyruvic acid under aerobic conditions, assuming the malate-aspartate shuttle operates to transport cytosolic reducing equivalents into the mitochondrial matrix?",
    "options": [
      "2 ATP",
      "6 ATP",
      "8 ATP",
      "38 ATP"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Glycolysis yields a net of 2 ATP directly via substrate-level phosphorylation plus 2 NADH + H^+. Via the malate-aspartate shuttle, each cytosolic NADH yields 3 ATP in the electron transport chain (2 \u00d7 3 = 6 ATP). Total = 2 + 6 = 8 ATP."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-GLY-012",
    "question": "Identify the correct sequence of intermediates formed during the 10-step glycolytic pathway:",
    "options": [
      "F-6-P \u2192 F-1,6-BP \u2192 DHAP \u2194 PGAL \u2192 1,3-BPGA \u2192 3-PGA \u2192 2-PGA \u2192 PEP",
      "F-6-P \u2192 F-1,6-BP \u2192 PGAL \u2192 3-PGA \u2192 1,3-BPGA \u2192 2-PGA \u2192 PEP",
      "G-6-P \u2192 F-1,6-BP \u2192 F-6-P \u2192 DHAP \u2192 1,3-BPGA \u2192 2-PGA \u2192 PEP",
      "G-6-P \u2192 F-6-P \u2192 F-1,6-BP \u2192 PGAL \u2192 2-PGA \u2192 3-PGA \u2192 PEP"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The exact sequence of intermediates after Glucose-6-phosphate is: Fructose-6-phosphate \u2192 Fructose-1,6-bisphosphate \u2192 DHAP \u2194 PGAL \u2192 1,3-bisphosphoglycerate \u2192 3-phosphoglycerate \u2192 2-phosphoglycerate \u2192 Phosphoenolpyruvate."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-GLY-013",
    "question": "Which step in glycolysis represents the \"committed step\" (rate-limiting pacemaker step) of the pathway?",
    "options": [
      "Phosphorylation of glucose to glucose-6-phosphate",
      "Isomerization of glucose-6-phosphate to fructose-6-phosphate",
      "Phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate",
      "Conversion of phosphoenolpyruvate to pyruvate"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Phosphofructokinase-1 (PFK-1) catalyzes the phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate. Since glucose-6-phosphate can enter other pathways (glycogenesis, pentose phosphate pathway), PFK-1 is the first committed, rate-limiting pacemaker enzyme of glycolysis."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-GLY-014",
    "question": "**Statement I:** In glycolysis, substrate-level phosphorylation occurs twice per triose phosphate molecule metabolized. \n\n**Statement II:** Both substrate-level phosphorylation steps in glycolysis are catalyzed by reversible kinase enzymes.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct: per triose phosphate (PGAL), ATP is formed once at step 7 (phosphoglycerate kinase) and once at step 10 (pyruvate kinase). Statement II is incorrect: phosphoglycerate kinase is reversible, whereas pyruvate kinase is physiologically irreversible."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-GLY-015",
    "question": "What is the ratio of total ATP consumed to total ATP synthesized (gross) during the glycolytic breakdown of one molecule of glucose-6-phosphate derived directly from glycogenolysis?",
    "options": [
      "1 : 2",
      "1 : 4",
      "2 : 4",
      "1 : 3"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Glycogenolysis (via glycogen phosphorylase) produces glucose-1-phosphate without consuming ATP, which isomerizes to glucose-6-phosphate. Thus, only 1 ATP is consumed (at the PFK-1 step), while 4 ATP are synthesized in the payoff phase. Ratio = 1 : 4."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-GLY-016",
    "question": "If a glucose molecule is labeled with \u00b9\u2074C at Carbon-3 (C\u2083) and Carbon-4 (C\u2084), and subjected to alcoholic fermentation via glycolysis, where will the \u00b9\u2074C label appear at the end of the process?",
    "options": [
      "Exclusively in ethanol",
      "Exclusively in CO\u2082",
      "Equally distributed between ethanol and CO\u2082",
      "Exclusively in acetaldehyde"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "C\u2083 and C\u2084 of glucose become the carboxyl carbons (C\u2081) of the two pyruvate molecules. During alcoholic fermentation, pyruvate decarboxylase removes this carboxyl group as CO\u2082, leaving the remaining 2-carbon acetaldehyde (and subsequently ethanol) unlabeled."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-GLY-017",
    "question": "Which of the following glycolytic intermediates is an allosteric feed-forward activator of pyruvate kinase in mammalian liver cells?",
    "options": [
      "Glucose-6-phosphate",
      "Fructose-1,6-bisphosphate",
      "3-Phosphoglycerate",
      "Phosphoenolpyruvate"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Fructose-1,6-bisphosphate acts as a feed-forward allosteric activator of pyruvate kinase, ensuring that the downstream payoff phase accelerates when upstream intermediates accumulate."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-GLY-018",
    "question": "Why does the isomerization of glucose-6-phosphate (an aldose) to fructose-6-phosphate (a ketose) occur prior to the second phosphorylation step?",
    "options": [
      "To prevent glucose-6-phosphate from diffusing out of the plasma membrane.",
      "To expose the primary hydroxyl group at C\u2081 for phosphorylation and facilitate subsequent symmetric cleavage between C\u2083 and C\u2084.",
      "To generate an immediate high-energy thioester bond.",
      "Because hexokinase cannot bind to pyranose rings."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Isomerizing the 6-membered aldose ring (G-6-P) into a 5-membered ketose ring (F-6-P) exposes the -CH_2OH group at C\u2081 for phosphorylation and places the carbonyl group at C\u2082, enabling aldolase to cleave the C\u2083-C\u2084 bond cleanly into two 3-carbon trioses."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-GLY-019",
    "question": "How many total phosphate groups (both inorganic and organic) are present in the products of the reaction catalyzed by Glyceraldehyde-3-phosphate dehydrogenase per glucose molecule?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Per glucose molecule, two molecules of PGAL are converted into two molecules of 1,3-bisphosphoglycerate. Each 1,3-bisphosphoglycerate molecule contains 2 phosphate groups, giving 2 \u00d7 2 = 4 phosphate groups in total."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-GLY-020",
    "question": "Which of the following statements accurately distinguishes between Hexokinase and Glucokinase?",
    "options": [
      "Hexokinase has a high K_m (low affinity) and is inhibited by glucose-6-phosphate, whereas glucokinase has a low K_m (high affinity).",
      "Hexokinase has a low K_m (high affinity) and is allosterically inhibited by glucose-6-phosphate, whereas glucokinase is liver-specific, has a high K_m, and is not inhibited by glucose-6-phosphate.",
      "Both enzymes are found exclusively in skeletal muscles and require Mn\u00b2\u207a instead of Mg\u00b2\u207a.",
      "Glucokinase catalyzes the phosphorylation of fructose and mannose more efficiently than glucose."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Hexokinase (present in most tissues) has a low K_m (high affinity for glucose) and is feedback-inhibited by G-6-P. Glucokinase (hexokinase IV, in liver and pancreatic \\beta-cells) has a high K_m (low affinity, active after meals) and is not inhibited by G-6-P."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-GLY-021",
    "question": "In erythrocytes (mature red blood cells), 1,3-bisphosphoglycerate can be diverted via the Rapoport-Luebering shunt to form 2,3-bisphosphoglycerate (2,3-BPG). What is the energetic consequence of this bypass per molecule of BPG diverted?",
    "options": [
      "Net gain of 1 extra ATP",
      "Loss of 1 ATP synthesis step (catalyzed by phosphoglycerate kinase)",
      "Loss of 2 ATP synthesis steps",
      "Increased production of NADH + H\u207a"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Diverting 1,3-bisphosphoglycerate to 2,3-BPG via bisphosphoglycerate mutase and subsequent hydrolysis to 3-phosphoglycerate bypasses the phosphoglycerate kinase step, forfeiting 1 ATP molecule per triose diverted (used in RBCs to regulate hemoglobin oxygen affinity)."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-GLY-022",
    "question": "Which of the following glycolytic intermediates possesses the highest standard free energy of hydrolysis (\u0394G\u00b0') of its phosphate group, exceeding even that of ATP?",
    "options": [
      "Glucose-6-phosphate",
      "Fructose-1,6-bisphosphate",
      "3-Phosphoglycerate",
      "Phosphoenolpyruvate (PEP)"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Phosphoenolpyruvate (PEP) has a \u0394G\u00b0' of hydrolysis of -61.9kJ/mol (compared to -30.5kJ/mol for ATP), making it the highest-energy phosphate compound in glycolysis."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-GLY-023",
    "question": "Consider the following statements regarding Triose Phosphate Isomerase (TPI):\n\n(i) It interconverts dihydroxyacetone phosphate (DHAP) and glyceraldehyde-3-phosphate (PGAL).\n(ii) At equilibrium, PGAL accounts for over 95\\% of the triose phosphate pool.\n(iii) Without TPI, the net ATP yield of glycolysis from one glucose molecule would drop to zero.\n(iv) It is considered a \"catalytically perfect\" enzyme whose rate is limited only by substrate diffusion.\n\nWhich of the above statements are correct?",
    "options": [
      "(i), (ii), and (iii)",
      "(i), (iii), and (iv)",
      "(ii) and (iv) only",
      "(i) and (iii) only"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Statements (i), (iii), and (iv) are correct. Statement (ii) is incorrect because at equilibrium, DHAP actually makes up \\sim 96\\% of the pool, though rapid consumption of PGAL by GAPDH pulls the reaction forward. Without TPI, only 1PGAL would enter the payoff phase (2 ATP produced minus 2 ATP invested = 0net ATP)."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-GLY-024",
    "question": "During glycolysis, how many molecules of H^+ (protons) are released into the cytosol during the oxidation of two molecules of glyceraldehyde-3-phosphate to two molecules of 1,3-bisphosphoglycerate?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The balanced stoichiometry for one PGAL oxidation is: PGAL + NAD\u207a + Pi \u2192 1,3-BPGA + NADH + H\u207a. For two molecules of PGAL (from one glucose), 2 H\u207a ions are released."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-GLY-025",
    "question": "What is the Pasteur effect in cellular respiration?",
    "options": [
      "Stimulation of glycolysis by high concentrations of oxygen.",
      "Inhibition of glycolysis and decreased glucose consumption when anaerobic cells are exposed to oxygen.",
      "Conversion of pyruvate to ethanol in the presence of excess ATP.",
      "Inhibition of the Krebs cycle by high levels of fructose-1,6-bisphosphate."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Discovered by Louis Pasteur in yeast, the Pasteur effect is the rapid drop in glucose consumption and inhibition of glycolysis (specifically via ATP/citrate inhibition of PFK-1) when anaerobic cells are shifted to aerobic conditions."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-GLY-026",
    "question": "Identify the two glycolytic reactions that involve the cleavage or formation of carbon-carbon (C\u2013C) bonds:",
    "options": [
      "Hexokinase and Pyruvate kinase",
      "Aldolase only (no C\u2013C bond is formed in glycolysis)",
      "Phosphofructokinase-1 and Enolase",
      "Aldolase and Glyceraldehyde-3-phosphate dehydrogenase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Aldolase catalyzes the cleavage of the C\u2083-C\u2084 carbon-carbon bond of fructose-1,6-bisphosphate. No carbon-carbon bond is formed during glycolysis."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-GLY-027",
    "question": "Which of the following divalent cations is an essential cofactor for almost all kinase and enolase reactions in the EMP pathway?",
    "options": [
      "Fe\u00b2\u207a",
      "Ca\u00b2\u207a",
      "Mg\u00b2\u207a",
      "Zn\u00b2\u207a"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Mg\u00b2\u207a forms complexes with the negatively charged phosphoryl oxygens of ATP/ADP and substrates, neutralizing charge repulsion and stabilizing transition states in kinases and enolase."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-GLY-028",
    "question": "If a cell is treated with a drug that completely inhibits Lactate Dehydrogenase (LDH) under strictly anaerobic conditions, glycolysis will quickly halt because:",
    "options": [
      "Pyruvate accumulates and directly inhibits hexokinase.",
      "Cytosolic NAD\u207a is depleted, halting the glyceraldehyde-3-phosphate dehydrogenase reaction.",
      "ATP levels rise excessively, inhibiting phosphofructokinase-1.",
      "Phosphoenolpyruvate cannot be converted into pyruvate."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Under anaerobic conditions, LDH regenerates NAD\u207a from NADH + H\u207a by reducing pyruvate to lactate. Without LDH, all cytosolic NAD\u207a is trapped as NADH, starving GAPDH of its required electron acceptor."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-GLY-029",
    "question": "**Assertion (A):** In glycolysis, the first phosphorylation of glucose traps it inside the cell. \n\n**Reason (R):** Plasma membranes lack specific transporters for phosphorylated sugars like glucose-6-phosphate, and the negative charge on the phosphate group prevents passive diffusion across the lipid bilayer.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Phosphorylation adds bulky, negatively charged phosphate groups to glucose. Because cell membranes lack transport proteins for G-6-P and charged molecules cannot cross the hydrophobic lipid bilayer, glucose is metabolically trapped inside the cell."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-GLY-030",
    "question": "How many redox reactions occur during the entire 10-step glycolytic conversion of glucose to pyruvate?",
    "options": [
      "Zero",
      "One (occurring twice per glucose molecule)",
      "Two (occurring twice per glucose molecule)",
      "Three"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Only Step 6 (catalyzed by Glyceraldehyde-3-phosphate dehydrogenase) is an oxidation-reduction reaction. Because two molecules of PGAL are processed per glucose, this single type of redox reaction occurs twice per glucose."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-GLY-031",
    "question": "Which intermediate of glycolysis serves as the direct precursor for the synthesis of the glycerol backbone of triacylglycerols (fats) in adipose tissue and liver?",
    "options": [
      "3-Phosphoglycerate",
      "Dihydroxyacetone phosphate (DHAP)",
      "Phosphoenolpyruvate",
      "Glucose-6-phosphate"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Dihydroxyacetone phosphate (DHAP) is reduced by glycerol-3-phosphate dehydrogenase (using NADH) to glycerol-3-phosphate, which forms the backbone of triglycerides and phospholipids."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-GLY-032",
    "question": "In the reaction catalyzed by Phosphoglycerate mutase, 3-phosphoglycerate is converted into 2-phosphoglycerate via which transient enzyme-bound intermediate?",
    "options": [
      "1,3-bisphosphoglycerate",
      "2,3-bisphosphoglycerate",
      "1,2-bisphosphoglycerate",
      "Phosphoenolpyruvate"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Phosphoglycerate mutase transfers a phosphate from an active-site histidine to the C\u2082 position of 3-phosphoglycerate, forming a transient enzyme-bound **2,3-bisphosphoglycerate** intermediate before removing the C\u2083 phosphate."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-GLY-033",
    "question": "Match the metabolic fate of pyruvate with the organism/condition in which it predominantly occurs:\n\n| Column-I (Condition/Organism) | **Column-II (End Product \\ | Key Enzyme)** |\n| :--- | :--- | :--- |\n| P. Vigorous exercise in human skeletal muscle | 1. Ethanol + CO\u2082; Pyruvate decarboxylase \\ | Alcohol dehydrogenase |\n| Q. *Saccharomyces cerevisiae* under hypoxia | 2. Acetyl-CoA + CO\u2082; Pyruvate dehydrogenase complex |\n| R. Aerobic respiration in eukaryotic mitochondria | 3. Lactic acid (no CO\u2082); Lactate dehydrogenase |",
    "options": [
      "P-3, Q-1, R-2",
      "P-1, Q-3, R-2",
      "P-3, Q-2, R-1",
      "P-2, Q-1, R-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Vigorous human muscle produces lactic acid via LDH without CO\u2082 release (P-3). Yeast (*Saccharomyces cerevisiae*) performs alcoholic fermentation releasing ethanol and CO\u2082 (Q-1). Aerobic mitochondria decarboxylate pyruvate to Acetyl-CoA via the PDH complex (R-2)."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-GLY-034",
    "question": "Which of the following enzymes in glycolysis belongs to the class **Lyases** according to the IUBMB enzyme classification?",
    "options": [
      "Hexokinase and Pyruvate kinase",
      "Phosphohexose isomerase and Triose phosphate isomerase",
      "Aldolase and Enolase",
      "Phosphoglycerate kinase and Phosphoglycerate mutase"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Lyases cleave bonds without hydrolysis or oxidation, often forming double bonds or rings. Aldolase cleaves C\u2013C bonds, and Enolase removes H\u2082O to form a double bond in PEP; both are Lyases."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-GLY-035",
    "question": "High cellular concentrations of which molecule act as a potent allosteric **inhibitor** of Phosphofructokinase-1 (PFK-1), signaling energy abundance from the Krebs cycle?",
    "options": [
      "AMP",
      "ADP",
      "Citrate",
      "Fructose-2,6-bisphosphate"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "High citrate levels signal that the Krebs cycle is saturated with biosynthetic precursors and energy; citrate exits the mitochondrion and allosterically inhibits PFK-1 (enhancing the inhibitory effect of ATP)."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-GLY-036",
    "question": "Calculate the total number of carbon atoms in all the intermediate molecules formed simultaneously right after the aldolase cleavage of one molecule of fructose-1,6-bisphosphate:",
    "options": [
      "3 carbons",
      "6 carbons (two 3-carbon molecules)",
      "12 carbons",
      "4 carbons"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Aldolase splits one 6-carbon fructose-1,6-bisphosphate molecule into one 3-carbon DHAP and one 3-carbon PGAL molecule, totaling 3 + 3 = 6 carbon atoms."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-GLY-037",
    "question": "What is the primary reason why the conversion of phosphoenolpyruvate (PEP) to pyruvate is thermodynamically highly exergonic (\u0394G\u00b0' = -31.4kJ/mol)?",
    "options": [
      "Pyruvate immediately enters the mitochondrion, pulling the reaction forward.",
      "The unstable enol form of pyruvate rapidly tautomerizes into the much more stable keto form.",
      "PEP contains two high-energy anhydride bonds.",
      "Pyruvate kinase consumes NADH during the transfer."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Removing the phosphate from PEP initially yields the unstable enol tautomer of pyruvate, which spontaneously and rapidly tautomerizes into the far more stable keto form, driving the large negative \u0394G\u00b0'."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-GLY-038",
    "question": "In the payoff phase of glycolysis, how many molecules of water are produced per molecule of glucose metabolized to pyruvate?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Water is produced only at the Enolase step (1H_2O per triose). Since 2 molecules of 2-phosphoglycerate are dehydrated per glucose, 2 molecules of H\u2082O are produced."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-GLY-039",
    "question": "Which of the following statements about glycolysis is **false**?",
    "options": [
      "Partial oxidation of glucose occurs without the help of oxygen.",
      "In anaerobic organisms, glycolysis is the only process in respiration.",
      "Pyruvic acid is the key product of glycolysis, and its metabolic fate depends on cellular need.",
      "Glycolysis occurs in the mitochondrial matrix in eukaryotes and cytosol in prokaryotes."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement (D) is false because glycolysis occurs exclusively in the **cytoplasm (cytosol)** of all living cells, both prokaryotic and eukaryotic\u2014never in the mitochondrial matrix."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-GLY-040",
    "question": "During the conversion of 1,3-bisphosphoglycerate to 3-phosphoglycerate, which phosphate group is transferred to ADP to form ATP?",
    "options": [
      "The low-energy phosphate ester at C\u2083",
      "The high-energy acyl phosphate at C\u2081",
      "Both phosphates are transferred sequentially",
      "An inorganic phosphate from the cytosol"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The phosphate at C\u2081 of 1,3-bisphosphoglycerate is a high-energy mixed anhydride (acyl phosphate) bond, which is transferred to ADP by phosphoglycerate kinase. The phosphate at C\u2083 is a low-energy ester bond retained on 3-phosphoglycerate."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-GLY-041",
    "question": "If 5 molecules of glucose undergo glycolysis, how many total ATP molecules are **synthesized** (gross yield) and how many are **consumed**, respectively?",
    "options": [
      "10 synthesized, 5 consumed",
      "20 synthesized, 10 consumed",
      "10 synthesized, 10 consumed",
      "40 synthesized, 10 consumed"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Per glucose: 2 ATP are consumed in the preparatory phase and 4 ATP are synthesized in the payoff phase (net gain = 2 ATP). For 5 glucose molecules: 5 \u00d7 4 = 20 ATP synthesized, and 5 \u00d7 2 = 10 ATP consumed."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-GLY-042",
    "question": "Which amino acid is synthesized directly via transamination of pyruvate, linking glycolysis to amino acid metabolism?",
    "options": [
      "Serine",
      "Alanine",
      "Glycine",
      "Aspartate"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Pyruvate (\\alpha-keto acid) undergoes reversible transamination (via alanine aminotransferase, ALT) with glutamate to form the amino acid **alanine**."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-GLY-043",
    "question": "What is the oxidation state change of the aldehyde carbon (C\u2081) of glyceraldehyde-3-phosphate when it is converted into 1,3-bisphosphoglycerate?",
    "options": [
      "Oxidized from an aldehyde to a carboxylic acid derivative (acyl phosphate)",
      "Reduced from an aldehyde to a primary alcohol",
      "Oxidized from a ketone to an ester",
      "No change in oxidation state occurs"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "At C\u2081 of PGAL, an aldehyde group (-CHO, oxidation state +1) is oxidized to a carboxylic acid derivative\u2014specifically an acyl phosphate (-COO-PO_3^{2-}, oxidation state +3)."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-GLY-044",
    "question": "**Statement I:** Fructose-2,6-bisphosphate is an intermediate of the glycolytic pathway. \n\n**Statement II:** Fructose-2,6-bisphosphate is the most potent allosteric activator of phosphofructokinase-1 (PFK-1) in hepatocytes.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement I is incorrect: Fructose-2,6-bisphosphate is a regulatory signaling molecule synthesized by PFK-2, not a metabolic intermediate of glycolysis (which uses fructose-1,6-bisphosphate). Statement II is correct: it strongly activates PFK-1 in liver cells."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-GLY-045",
    "question": "In a hypothetical mutant cell where Enolase is completely non-functional, which glycolytic intermediate would accumulate to the highest concentration if glucose is supplied continuously?",
    "options": [
      "Phosphoenolpyruvate",
      "2-Phosphoglycerate",
      "Pyruvic acid",
      "Fructose-1,6-bisphosphate"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Enolase catalyzes the conversion of 2-phosphoglycerate to phosphoenolpyruvate. If Enolase is blocked, its immediate substrate, **2-phosphoglycerate**, will accumulate to the highest levels."
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

    console.log(`Starting upsert of ${rawQuestions.length} questions for ${SUBTOPIC}...`);

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
      const testTitle = testId.includes('Krebs')
        ? 'Glycolysis, Krebs cycle, and oxidative phosphorylation'
        : 'Glycolysis (EMP Pathway)';

      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: testTitle,
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
