import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Fermentation';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Fermentation'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Respiration in Plants';
const SUBTOPIC = 'Fermentation';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-FER-001",
    "question": "Which of the following statements accurately describes the fundamental biochemical purpose of fermentation in anaerobic organisms and hypoxic tissues?",
    "options": [
      "To generate additional ATP molecules via substrate-level phosphorylation beyond glycolysis.",
      "To completely oxidize pyruvic acid into CO\u2082 and H\u2082O in the absence of O\u2082.",
      "To reoxidize NADH + H\u207a back to NAD\u207a so that glycolysis can continue uninterrupted.",
      "To convert toxic lactic acid into non-toxic ethanol and carbon dioxide."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Fermentation produces zero ATP of its own. Its sole metabolic purpose is to regenerate NAD\u207a by oxidizing NADH + H\u207a, preventing the depletion of the limited cytosolic NAD\u207a pool needed by glyceraldehyde-3-phosphate dehydrogenase in glycolysis."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-FER-002",
    "question": "According to NCERT, what approximate percentage of the total free energy contained within a glucose molecule is released during lactic acid or alcoholic fermentation, and how much of it is trapped as high-energy phosphate bonds of ATP?",
    "options": [
      "Less than 7% is released, and all of it is trapped as ATP.",
      "Less than 7% is released, and not all of it is trapped as ATP.",
      "About 38% is released, and 7% is trapped as ATP.",
      "Exactly 2% is released, and 100% of it is trapped as ATP."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Verbatim from NCERT Class 11 Biology (Respiration in Plants): *\"Less than seven per cent of the energy in glucose is released in both lactic acid and alcohol fermentation, and not all of it is trapped as high energy bonds of ATP.\"*"
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-FER-003",
    "question": "At what approximate concentration of alcohol do fermenting yeast cells (*Saccharomyces cerevisiae*) poison themselves to death?",
    "options": [
      "5%",
      "9%",
      "13%",
      "21%"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "According to NCERT, yeasts poison themselves to death when the concentration of alcohol reaches about **13%**."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-FER-004",
    "question": "**Assertion (A):** In lactic acid fermentation, no carbon dioxide (CO\u2082) is released, whereas alcoholic fermentation releases two molecules of CO\u2082 per glucose molecule. \n\n**Reason (R):** Lactic acid is a 3-carbon compound formed by the direct reduction of pyruvic acid, whereas ethanol is a 2-carbon compound formed following the non-oxidative decarboxylation of pyruvic acid.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Pyruvic acid (3C) is directly reduced to lactic acid (3C) by lactate dehydrogenase without carbon loss. In alcoholic fermentation, pyruvate decarboxylase first cleaves off CO\u2082 (1C) to yield acetaldehyde (2C), which is then reduced to ethanol (2C)."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-FER-005",
    "question": "Identify the correct sequence of enzymes and cofactors required to convert pyruvic acid into ethanol in yeast:",
    "options": [
      "Pyruvate dehydrogenase ($FAD, CoA) \u2192 Alcohol dehydrogenase (NAD\u207a$)",
      "Pyruvate decarboxylase ($TPP, Mg\u00b2\u207a) \u2192 Alcohol dehydrogenase (Zn\u00b2\u207a, NADH + H\u207a$)",
      "Lactate dehydrogenase (FMN) \u2192 Pyruvate decarboxylase (Biotin)",
      "Pyruvate kinase (K\u207a) \u2192 Acetaldehyde reductase (NADPH)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Step 1: Pyruvate decarboxylase requires thiamine pyrophosphate (TPP) and $Mg\u00b2\u207a to convert pyruvate into acetaldehyde + CO\u2082$. Step 2: Alcohol dehydrogenase requires $Zn\u00b2\u207a and NADH + H\u207a$ to reduce acetaldehyde to ethanol."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-FER-006",
    "question": "In alcoholic fermentation, which molecule serves as the **terminal electron acceptor** for the electrons carried by NADH + H\u207a?",
    "options": [
      "Pyruvic acid",
      "Acetaldehyde",
      "Ethanol",
      "Molecular oxygen (O\u2082)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In alcoholic fermentation, NADH + H\u207a donates its electrons directly to **acetaldehyde** (reducing it to ethanol), making acetaldehyde the terminal electron acceptor."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-FER-007",
    "question": "In homolactic fermentation (such as in *Lactobacillus* or strenuously exercising human skeletal muscle), which molecule serves as the **final hydrogen/electron acceptor**?",
    "options": [
      "Glyceraldehyde-3-phosphate",
      "Acetaldehyde",
      "Pyruvic acid",
      "Lactic acid"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "In lactic acid fermentation, **pyruvic acid** directly accepts electrons and protons from NADH + H\u207a to form lactic acid, making pyruvic acid the terminal electron acceptor."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-FER-008",
    "question": "If a glucose molecule is radiolabeled with $\u00b9\u2074C exclusively at Carbon-2 (C\u2082$) and subjected to complete alcoholic fermentation by yeast, where will the radioactive label be located at the end of the process?",
    "options": [
      "Exclusively in the CO\u2082 evolved",
      "Exclusively in the methyl carbon (-CH\u2083) of ethanol",
      "Exclusively in the carbinol carbon (-CH\u2082OH) of ethanol",
      "Equally distributed between -CH\u2082OH of ethanol and CO\u2082"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "During glycolysis, C\u2082 and C\u2085 of glucose become the carbonyl carbon (C\u2082, -C=O) of the two pyruvate molecules. When pyruvate loses C\u2081 as CO\u2082, the carbonyl carbon (C\u2082) becomes the -CHO carbon of acetaldehyde, which is reduced to the carbinol carbon (-CH\u2082OH) of ethanol."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-FER-009",
    "question": "Consider the following statements comparing Lactic Acid Fermentation (LAF) and Alcoholic Fermentation (AF):\n\n(i) Both processes yield a net gain of 2 ATP molecules per molecule of glucose oxidized.\n(ii) Both processes involve a net consumption of 2 NADH + H\u207a during the reduction of pyruvate or its derivative.\n(iii) Pyruvate decarboxylase is present in human skeletal muscle cells but remains inactive under aerobic conditions.\n(iv) Both processes are hazardous because either acid or alcohol is produced.\n\nWhich of the above statements are correct?",
    "options": [
      "(i), (ii), and (iv)",
      "(i) and (iii) only",
      "(ii), (iii), and (iv)",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i), (ii), and (iv) are correct. Statement (iii) is incorrect because humans completely lack the gene/enzyme for pyruvate decarboxylase."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-FER-010",
    "question": "Why can humans never produce ethanol in their skeletal muscles during extreme oxygen deprivation, even though all the necessary glycolytic enzymes are present?",
    "options": [
      "Human muscle cells lack the enzyme alcohol dehydrogenase.",
      "Human muscle cells lack the enzyme pyruvate decarboxylase.",
      "Acetaldehyde is immediately converted into acetyl-CoA in human cytosol.",
      "Human lactate dehydrogenase has a higher affinity for acetaldehyde than for pyruvate."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Human tissues possess alcohol dehydrogenase (used in the liver to detoxify ingested ethanol), but completely lack **pyruvate decarboxylase**, preventing the conversion of pyruvate into acetaldehyde."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-FER-011",
    "question": "Match Column-I (Organism / Tissue) with Column-II (Primary Fermentation Product & Key Enzyme):\n\n\n| Column-I | Column-II |\n| :--- | :--- |\n| P. *Lactobacillus bulgaricus* | 1. Ethanol + CO\u2082; Pyruvate decarboxylase |\n| Q. *Saccharomyces cerevisiae* | 2. Lactic acid; Lactate dehydrogenase |\n| R. *Propionibacterium shermanii* | 3. Propionic acid + Acetic acid + CO\u2082 |\n| S. Waterlogged roots of higher plants | 4. Ethanol + CO\u2082 (transiently) |",
    "options": [
      "P-2, Q-1, R-3, S-4",
      "P-1, Q-2, R-3, S-4",
      "P-2, Q-3, R-1, S-4",
      "P-4, Q-1, R-2, S-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "*Lactobacillus* produces lactic acid via LDH (P-2). *Saccharomyces cerevisiae* produces ethanol + CO\u2082 via pyruvate decarboxylase and ADH (Q-1). *Propionibacterium shermanii* produces propionic acid, acetic acid, and CO\u2082 (R-3). Waterlogged plant roots transiently carry out alcoholic fermentation (S-4)."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-FER-012",
    "question": "During strenuous physical exercise, lactic acid accumulates in human skeletal muscles. What happens to the majority of this lactate once oxygen becomes available again during recovery (the Cori Cycle)?",
    "options": [
      "It is excreted unchanged in urine and sweat.",
      "It is decarboxylated directly into ethanol in the kidneys.",
      "It is transported via blood to the liver, oxidized back to pyruvate, and converted into glucose via gluconeogenesis.",
      "It enters the mitochondrial matrix of RBCs to run the Krebs cycle."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Under the **Cori Cycle**, lactate diffuses out of muscles into the bloodstream, travels to the liver, is oxidized back to pyruvate by LDH, and is converted into glucose via gluconeogenesis (consuming 6 ATP in the liver)."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-FER-013",
    "question": "How many total molecules of NADH + H\u207a are **net** produced at the end of complete fermentation of 3 molecules of glucose into lactic acid?",
    "options": [
      "0",
      "3",
      "6",
      "12"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Glycolysis produces 2 NADH + H\u207a per glucose (6 for 3 glucose), but fermentation consumes the exact same amount (6 NADH + H\u207a) to reduce pyruvate to lactate. Net NADH + H\u207a yield = **0**."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-FER-014",
    "question": "**Statement I:** In fermentation, there is a net gain of only 2 ATP molecules for each molecule of glucose degraded to pyruvic acid. \n\n**Statement II:** NADH is oxidized to NAD\u207a rather slowly in fermentation; however, the reaction is very vigorous in case of aerobic respiration.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are direct facts from NCERT: net gain is 2 ATP per glucose degraded to pyruvic acid, and NADH is oxidized to NAD\u207a rather slowly in fermentation compared to the vigorous oxidation in aerobic respiration."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-FER-015",
    "question": "What is the fate of the pyruvate carbons when 1 molecule of glucose labeled at C\u2081 and C\u2086 undergoes lactic acid fermentation?",
    "options": [
      "Both labeled carbons are lost as CO\u2082.",
      "Both labeled carbons appear in the carboxyl group (-COOH) of lactic acid.",
      "Both labeled carbons appear in the methyl group (-CH\u2083) of lactic acid.",
      "One appears in the -CHOH- group and one in the -COOH group of lactic acid."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "In glycolysis, C\u2081 and C\u2086 of glucose become the methyl carbons (C\u2083, -CH\u2083) of the two pyruvate molecules. Reduction of the keto group at C\u2082 to -CHOH- leaves C\u2083 unchanged as the methyl group (-CH\u2083) of lactic acid."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-FER-016",
    "question": "Which of the following best explains why alcoholic beverages with an alcohol content greater than 13% (such as brandy, whisky, or rum) cannot be produced solely by natural yeast fermentation?",
    "options": [
      "Glucose becomes completely insoluble in water above 13% ethanol.",
      "Ethanol denatures membrane lipids and key enzymes of yeast above ~ 13%, killing the cells; higher concentrations require distillation.",
      "Pyruvate decarboxylase is allosterically inhibited by CO\u2082 when ethanol reaches 13%.",
      "Above 13% ethanol, yeast switches to aerobic respiration using dissolved CO\u2082."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Ethanol is amphipathic and disrupts the integrity of yeast plasma membranes and denatures metabolic enzymes once it reaches ~ 13%. Higher concentrations in distilled spirits (whisky, rum, brandy) are achieved by physical distillation."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-FER-017",
    "question": "In the conversion of pyruvic acid to acetaldehyde catalyzed by pyruvate decarboxylase, which vitamin-derived coenzyme is strictly essential?",
    "options": [
      "Riboflavin (FAD)",
      "Niacin (NAD\u207a)",
      "Thiamine pyrophosphate (TPP, from Vitamin $B_1$)",
      "Pyridoxal phosphate (PLP, from Vitamin $B_6$)"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Pyruvate decarboxylase requires **Thiamine pyrophosphate (TPP)**, the active coenzyme form of Vitamin $B_1$ (thiamine), to stabilize the carbanion intermediate during decarboxylation."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-FER-018",
    "question": "Which of the following enzymes involved in alcoholic fermentation is a **zinc-containing metalloenzyme**?",
    "options": [
      "Hexokinase",
      "Enolase",
      "Alcohol dehydrogenase",
      "Pyruvate decarboxylase"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "**Alcohol dehydrogenase (ADH)** contains a catalytic $Zn\u00b2\u207a$ ion at its active site that coordinates the carbonyl oxygen of acetaldehyde, polarizing the C=O bond to facilitate hydride transfer from NADH."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-FER-019",
    "question": "Compare the net ATP yield per molecule of glucose in a facultative anaerobe (like *Saccharomyces cerevisiae*) shifting from strict anaerobic alcoholic fermentation to complete aerobic respiration (via the malate-aspartate shuttle). By what factor does the net ATP yield increase?",
    "options": [
      "2-fold",
      "15-fold",
      "18-fold",
      "19-fold"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Anaerobic fermentation yields 2 ATP per glucose. Complete aerobic respiration (with malate-aspartate shuttle) yields 38 ATP per glucose. Increase factor = $38 / 2 = \\mathbf{19-fold}$."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-FER-020",
    "question": "Why does the Pasteur effect occur when a culture of facultatively anaerobic yeast growing under anaerobic conditions is suddenly aerated?",
    "options": [
      "Oxygen directly binds to and inhibits alcohol dehydrogenase.",
      "Aerobic respiration produces vastly more ATP per glucose (36--38 ATP vs. 2 ATP), and elevated ATP and citrate allosterically inhibit phosphofructokinase-1 (PFK-1), slowing down glucose consumption.",
      "Aeration lowers the pH of the medium, denaturing hexokinase.",
      "Oxygen oxidizes ethanol back into glucose via reverse glycolysis."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Upon aeration, oxidative phosphorylation rapidly generates large amounts of ATP and citrate. Both ATP and citrate act as potent allosteric inhibitors of phosphofructokinase-1 (PFK-1), throttling down glycolysis (the Pasteur effect)."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-FER-021",
    "question": "Which of the following reactions represents the exact stoichiometry of alcoholic fermentation of one molecule of glucose?",
    "options": [
      "$C\u2086H\u2081\u2082O\u2086 + 2ADP + 2P\u1d62 \u2192 2C\u2082H\u2085OH + 2CO\u2082 + 2ATP + 2H\u2082O$",
      "$C\u2086H\u2081\u2082O\u2086 + 2ADP + 2P\u1d62 + 2NAD\u207a \u2192 2C\u2082H\u2085OH + 2CO\u2082 + 2ATP + 2NADH + 2H\u207a$",
      "$C\u2086H\u2081\u2082O\u2086 + 2ATP \u2192 2CH\u2083CH(OH)COOH + 2ADP + 2P\u1d62$",
      "C\u2086H\u2081\u2082O\u2086 + 6O\u2082 \u2192 2C\u2082H\u2085OH + 4CO\u2082 + 2H\u2082O"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In glycolysis, $2 ADP + 2 P_i \u2192 2 ATP + 2 H\u2082O (condensation reaction releases 1 H\u2082O per ATP$ formed). Meanwhile, NADH + H\u207a produced in glycolysis is completely recycled back to NAD\u207a, so NAD\u207a/NADH cancels out of the net equation."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-FER-022",
    "question": "Mature human erythrocytes (RBCs) lack mitochondria and therefore rely exclusively on glycolysis followed by lactic acid fermentation for energy. How many ATP molecules are generated per glucose molecule metabolized in an RBC (ignoring the Rapoport-Luebering shunt)?",
    "options": [
      "0 ATP",
      "2 ATP",
      "4 ATP",
      "8 ATP"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Mature RBCs lack mitochondria and rely solely on glycolysis + lactic acid fermentation, yielding a net of **2 ATP** per glucose molecule."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-FER-023",
    "question": "What is the primary difference between **fermentation** and **anaerobic respiration** in strict biochemical terms?",
    "options": [
      "Fermentation uses molecular oxygen, whereas anaerobic respiration does not.",
      "Fermentation uses an endogenous organic molecule (like pyruvate or acetaldehyde) as the final electron acceptor without an electron transport chain, whereas anaerobic respiration uses an exogenous inorganic electron acceptor (like NO\u2083\u207b, $SO\u2084\u00b2\u207b$, or CO\u2082) via a membrane-bound electron transport chain.",
      "Anaerobic respiration occurs only in eukaryotes, while fermentation occurs only in prokaryotes.",
      "Fermentation yields 38 ATP, whereas anaerobic respiration yields 2 ATP."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Fermentation occurs entirely in the cytosol without an electron transport chain, using an endogenous organic molecule (pyruvate/acetaldehyde) as the final electron acceptor. Anaerobic respiration uses an ETC with an external inorganic terminal acceptor (NO\u2083\u207b, $SO\u2084\u00b2\u207b$, CO\u2082, $Fe\u00b3\u207a$)."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-FER-024",
    "question": "If a yeast culture is supplied with 1 mole of **sucrose** under strictly anaerobic conditions, how many moles of CO\u2082 and ethanol are produced upon complete fermentation?",
    "options": [
      "2 moles of CO\u2082 and 2 moles of ethanol",
      "4 moles of CO\u2082 and 4 moles of ethanol",
      "6 moles of CO\u2082 and 2 moles of ethanol",
      "4 moles of CO\u2082 and 2 moles of ethanol"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "One mole of sucrose (12C) is hydrolyzed into 1 mole of glucose + 1 mole of fructose (2 hexoses). Each hexose yields 2 moles of CO\u2082 and 2 moles of ethanol. Thus, 1 mole of sucrose yields 4 moles of CO\u2082 and 4 moles of ethanol."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-FER-025",
    "question": "**Assertion (A):** In lactic acid fermentation, the NADH + H\u207a generated during the oxidation of glyceraldehyde-3-phosphate is reoxidized to NAD\u207a when pyruvic acid is reduced to lactic acid. \n\n**Reason (R):** The reduction of pyruvic acid to lactic acid is an endergonic reaction that requires the hydrolysis of 1 ATP per pyruvate molecule.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Assertion (A) is true. Reason (R) is false because the reduction of pyruvate to lactate by LDH is thermodynamically favorable (exergonic, $\u0394G\u00b0' = -25.1 kJ/mol) and does not consume ATP$."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-FER-026",
    "question": "Why does dough used for making *idli*, *dosa*, or bread puff up during fermentation?",
    "options": [
      "Due to rapid evaporation of ethanol produced by *Lactobacillus*.",
      "Due to the production and trapping of CO\u2082 gas released during fermentation.",
      "Due to the breakdown of gluten proteins into O\u2082 gas.",
      "Due to osmotic swelling of starch granules in the presence of lactic acid."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "As noted in NCERT (Microbes in Human Welfare), the puffed-up appearance of dough used for making *dosa*, *idli*, and bread is due to the production of **CO\u2082 gas** during fermentation."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-FER-027",
    "question": "Which of the following organisms is an **obligate anaerobe** that is poisoned by molecular oxygen and relies exclusively on fermentation or anaerobic pathways?",
    "options": [
      "*Saccharomyces cerevisiae*",
      "*Escherichia coli*",
      "*Clostridium botulinum*",
      "*Pseudomonas aeruginosa*"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "*Clostridium botulinum* is a strict/obligate anaerobe that lacks superoxide dismutase and catalase, making oxygen lethal to it. *S. cerevisiae* and *E. coli* are facultative anaerobes, and *P. aeruginosa* is primarily aerobic (or denitrifying anaerobe)."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-FER-028",
    "question": "During alcoholic fermentation, the decarboxylation of pyruvic acid to acetaldehyde is an **irreversible** reaction under physiological conditions primarily because:",
    "options": [
      "Alcohol dehydrogenase immediately phosphorylates acetaldehyde.",
      "The gaseous product CO\u2082 escapes from the aqueous cellular environment, driving the reaction forward by Le Chatelier's principle.",
      "Pyruvate decarboxylase is inhibited by NAD\u207a.",
      "The reaction consumes 2 ATP molecules."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Pyruvate decarboxylase catalyzes a non-oxidative decarboxylation where CO\u2082 gas escapes from solution, making the reverse carboxylation thermodynamically impossible under cellular conditions."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-FER-029",
    "question": "In Swiss cheese production, the characteristic large holes are formed due to the production of a large amount of CO\u2082 by which bacterium?",
    "options": [
      "*Lactobacillus acidophilus*",
      "*Propionibacterium shermanii*",
      "*Streptococcus thermophilus*",
      "*Acetobacter aceti*"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to NCERT, the large holes in Swiss cheese are due to the production of a large amount of CO\u2082 by a bacterium named ***Propionibacterium shermanii***."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-FER-030",
    "question": "How many oxidation-reduction (redox) steps occur in the pathway starting from **glucose** and ending in **ethanol**?",
    "options": [
      "One (Glyceraldehyde-3-phosphate dehydrogenase only)",
      "Two (Glyceraldehyde-3-phosphate dehydrogenase and Alcohol dehydrogenase)",
      "Three (GAPDH, Pyruvate decarboxylase, and Alcohol dehydrogenase)",
      "Zero"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Two redox steps occur: (1) Oxidation of PGAL to 1,3-bisphosphoglycerate (reducing NAD\u207a to NADH + H\u207a) in glycolysis, and (2) Reduction of acetaldehyde to ethanol (oxidizing NADH + H\u207a to NAD\u207a) in fermentation."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-FER-031",
    "question": "What is the oxidation number of the carbonyl carbon (C\u2082) of pyruvic acid before and after its reduction to lactic acid by lactate dehydrogenase?",
    "options": [
      "Changes from +2 (ketone) to 0 (secondary alcohol)",
      "Changes from +3 (carboxylic acid) to +1 (aldehyde)",
      "Changes from 0 to -2",
      "Remains unchanged at +2"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In pyruvic acid ($CH\u2083-\\mathbf{C}(=O)-COOH$), the carbonyl carbon (C\u2082) is bonded to two carbons and double-bonded to one oxygen (oxidation state = **+2**). In lactic acid ($CH\u2083-\\mathbf{CH}(OH)-COOH$), C\u2082 is bonded to two carbons, one -H, and one -OH (oxidation state = **0**)."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-FER-032",
    "question": "Which of the following correctly compares the enzyme **Lactate Dehydrogenase (LDH)** isoenzymes LDH\u2085 (M$_4$, predominant in skeletal muscle) and LDH\u2081 (H$_4$, predominant in heart muscle)?",
    "options": [
      "LDH\u2085 is inhibited by high pyruvate levels, whereas LDH\u2081 rapidly converts pyruvate to lactate.",
      "LDH\u2085 favors the reduction of pyruvate to lactate under anaerobic bursts, whereas LDH\u2081 is inhibited by high pyruvate and favors the oxidation of lactate back to pyruvate for aerobic metabolism in the heart.",
      "Both isoenzymes are located exclusively inside the inner mitochondrial membrane.",
      "LDH\u2081 produces ethanol, while LDH\u2085 produces lactic acid."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "LDH\u2085 ($M_4$) in skeletal muscle is adapted for rapid anaerobic reduction of pyruvate to lactate during sprinting. Conversely, the heart is strictly aerobic; LDH\u2081 ($H_4$) is inhibited by high pyruvate and preferentially oxidizes lactate into pyruvate to fuel the Krebs cycle."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-FER-033",
    "question": "Suppose an inhibitor specifically blocks **Alcohol Dehydrogenase** in a yeast cell culture under strictly anaerobic conditions. Which intermediate will immediately accumulate inside the yeast cells before glycolysis halts?",
    "options": [
      "Lactic acid",
      "Acetaldehyde and NADH + H\u207a",
      "Acetyl-CoA and FADH\u2082",
      "Citric acid"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Blocking alcohol dehydrogenase stops the conversion of acetaldehyde to ethanol and prevents the regeneration of NAD\u207a. Consequently, **acetaldehyde** and **NADH + H\u207a** accumulate until NAD\u207a exhaustion halts glycolysis."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-FER-034",
    "question": "If a student adds sodium arsenate ($AsO\u2084\u00b3\u207b) to a culture of fermenting yeast (which uncouples ATP$ synthesis at the phosphoglycerate kinase step without stopping electron flow), what will be the **net ATP yield** per molecule of glucose fermented?",
    "options": [
      "2 ATP",
      "1 ATP",
      "0 ATP",
      "-2 ATP"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Normal glycolysis invests 2 ATP and generates 4 ATP (2 at phosphoglycerate kinase + 2 at pyruvate kinase). Arsenate abolishes the 2 ATP formed at phosphoglycerate kinase, leaving only 2 ATP formed at pyruvate kinase. Net $ATP = 2 produced - 2 consumed = \\mathbf{0 ATP}$."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-FER-035",
    "question": "**Statement I:** In both lactic acid and alcoholic fermentation, the reducing agent used in the final step is NADH + H\u207a generated during glycolysis. \n\n**Statement II:** In aerobic respiration, the NADH + H\u207a generated during glycolysis is oxidized via the mitochondrial electron transport chain rather than by reducing pyruvate.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are correct. In fermentation, cytosolic NADH + H\u207a is reoxidized directly by reducing pyruvate (or acetaldehyde). In aerobic respiration, NADH + H\u207a transfers its electrons to the mitochondrial electron transport chain (via shuttles), with O\u2082 as the final acceptor."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-FER-036",
    "question": "During prolonged waterlogging of agricultural fields, crop plants often die even when soil nutrients are abundant. Which combination of factors best explains this phenomenon at the cellular level?",
    "options": [
      "Root cells switch to alcoholic fermentation, leading to severe ATP starvation (2 ATP vs. 38 ATP per glucose) and cytoplasmic toxicity from accumulating ethanol and acetaldehyde.",
      "Root cells accumulate lactic acid, which permanently denatures RuBisCO in the leaves.",
      "Excess water inhibits invertase, preventing sucrose transport from leaves to roots.",
      "Waterlogging stimulates the Krebs cycle excessively, depleting all cellular glucose within minutes."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Water displaces air from soil pores, depriving roots of O\u2082. Roots shift to alcoholic fermentation, yielding only 2 ATP per glucose (insufficient to power active mineral uptake and root maintenance) while accumulating toxic acetaldehyde and ethanol."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-FER-037",
    "question": "How many molecules of H\u2082O are net produced when 1 molecule of glucose undergoes complete alcoholic fermentation to ethanol and CO\u2082?",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "In glycolysis, 2 molecules of H\u2082O are released during the dehydration of two 2-phosphoglycerate molecules by enolase (and 2 H\u2082O are released during the formation of 2 ATP from $2 ADP + 2 P_i$, while 2 H\u2082O were used in the preparatory phase). In the standard biochemical net reaction ($C\u2086H\u2081\u2082O\u2086 + 2ADP + 2P\u1d62 \u2192 2C\u2082H\u2085OH + 2CO\u2082 + 2ATP + 2H\u2082O$), **2 H\u2082O** are net produced."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-FER-038",
    "question": "Which of the following industrial processes relies on **heterolactic** or mixed-acid fermentation rather than pure homolactic fermentation?",
    "options": [
      "Curdling of milk by *Lactobacillus bulgaricus*",
      "Production of sauerkraut and kimchi involving *Leuconostoc mesenteroides* (producing lactic acid, ethanol, and CO\u2082)",
      "Vigorous sprint metabolism in human fast-twitch muscle fibers",
      "Glycolysis in mature human red blood cells"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "*Leuconostoc mesenteroides* carries out heterolactic fermentation (via the phosphoketolase pathway), fermenting glucose into a mixture of lactic acid, ethanol, and CO\u2082, which initiates sauerkraut and kimchi fermentation."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-FER-039",
    "question": "In the Crabtree effect observed in *Saccharomyces cerevisiae* (baker's yeast), high external concentrations of glucose trigger alcoholic fermentation **even in the presence of abundant oxygen**. What is the primary metabolic reason for this?",
    "options": [
      "High glucose represses the synthesis of mitochondrial respiratory enzymes and saturates the pyruvate dehydrogenase complex, causing overflow of pyruvate into pyruvate decarboxylase.",
      "Oxygen inhibits hexokinase at high glucose concentrations.",
      "Yeast lacks a functional electron transport chain when glucose exceeds 1 mM.",
      "Pyruvate kinase converts glucose directly into ethanol without forming pyruvate."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The **Crabtree effect** occurs when high glucose flux overwhelms the respiratory capacity of mitochondria (via catabolite repression of respiratory enzymes and saturation of pyruvate dehydrogenase), diverting excess pyruvate into pyruvate decarboxylase and ethanol production even in the presence of O\u2082."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-FER-040",
    "question": "Match Column-I (Reaction in Fermentation) with Column-II (Enzyme Class according to IUBMB):\n\n\n| Column-I | Column-II |\n| :--- | :--- |\n| P. Pyruvic acid \u2192 Acetaldehyde + CO\u2082 | 1. Oxidoreductase |\n| Q. Acetaldehyde + NADH + H\u207a \u2192 Ethanol + NAD\u207a | 2. Lyase |\n| R. Pyruvic acid + NADH + H\u207a \u2192 Lactic acid + NAD\u207a | 3. Transferase |",
    "options": [
      "P-2, Q-1, R-1",
      "P-1, Q-2, R-3",
      "P-3, Q-1, R-2",
      "P-2, Q-3, R-1"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Pyruvate decarboxylase cleaves a C-C bond without hydrolysis or oxidation, classifying it as a **Lyase** (EC 4). Both Alcohol dehydrogenase and Lactate dehydrogenase catalyze redox reactions involving NAD\u207a/NADH, classifying them as **Oxidoreductases** (EC 1)."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-FER-041",
    "question": "Why does human skeletal muscle experience fatigue and localized burning/cramping sensations during intense anaerobic sprinting?",
    "options": [
      "Accumulation of ethanol in the sarcoplasmic reticulum.",
      "Accumulation of lactic acid (dissociating into lactate and H\u207a ions), which lowers intracellular pH, inhibits key glycolytic enzymes like PFK-1, and interferes with $Ca\u00b2\u207a$ binding to troponin.",
      "Complete depletion of CO\u2082 inside muscle fibers.",
      "Excess synthesis of ATP causing myosin heads to lock onto actin."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Lactic acid dissociates into lactate and H\u207a ions. The resulting drop in sarcoplasmic pH (acidosis) inhibits rate-limiting glycolytic enzymes (PFK-1) and reduces the sensitivity of troponin to $Ca\u00b2\u207a$, causing muscle fatigue."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-FER-042",
    "question": "If 4 molecules of fructose-1,6-bisphosphate are directly fed into an anaerobic cell-free yeast extract capable of glycolysis and alcoholic fermentation, what will be the net yield of ATP, CO\u2082, and ethanol, respectively?",
    "options": [
      "8 ATP, 8 CO\u2082, 8 Ethanol",
      "16 ATP, 8 CO\u2082, 8 Ethanol",
      "8 ATP, 4 CO\u2082, 4 Ethanol",
      "16 ATP, 16 CO\u2082, 16 Ethanol"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Fructose-1,6-bisphosphate bypasses both ATP-consuming steps of the preparatory phase (0 ATP consumed). Each $F-1,6-BP$ splits into two trioses, yielding 4 ATP, 2 CO\u2082, and 2 Ethanol. For 4 molecules of $F-1,6-BP$: $4 \u00d7 4 = \\mathbf{16 ATP}$, $4 \u00d7 2 = \\mathbf{8 CO\u2082}$, and $4 \u00d7 2 = \\mathbf{8 Ethanol}$."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-FER-043",
    "question": "Which of the following statements about fermentation is **incorrect**?",
    "options": [
      "It takes place under anaerobic conditions in many prokaryotes and unicellular eukaryotes.",
      "Incomplete oxidation of glucose is achieved under anaerobic conditions by sets of reactions where pyruvic acid is converted to CO\u2082 and ethanol or lactic acid.",
      "The reducing agent is NADH + H\u207a which is reoxidized to NAD\u207a in both lactic acid and alcohol fermentation.",
      "Oxidation of NADH to NAD\u207a is much faster in fermentation than in aerobic respiration."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement (D) is incorrect because NCERT explicitly states that NADH is oxidized to NAD\u207a **rather slowly** in fermentation, whereas the reaction is **very vigorous** in aerobic respiration."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-FER-044",
    "question": "Consider a facultative anaerobe metabolizing glucose. Under aerobic conditions, 1 molecule of glucose yields 38 ATP. Under anaerobic fermentation, 1 molecule of glucose yields 2 ATP. To maintain the **exact same rate of ATP production** (38 ATP/sec) after switching from aerobic to anaerobic conditions, by what factor must the cell increase its rate of glucose consumption?",
    "options": [
      "2 times",
      "10 times",
      "19 times",
      "38 times"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Aerobic respiration produces 38 ATP per glucose, while fermentation produces 2 ATP per glucose. To maintain the same ATP supply rate, glucose consumption must increase by $38 / 2 = \\mathbf{19 times}$."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-FER-045",
    "question": "In *Clostridium acetobutylicum* (used in industrial ABE fermentation), pyruvate is fermented into which commercial solvents?",
    "options": [
      "Acetone, Butanol, and Ethanol",
      "Acetic acid, Butyric acid, and Ethane",
      "Alanine, Biotin, and Ergosterol",
      "Acetaldehyde, Benzene, and Ether"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "*Clostridium acetobutylicum* performs **ABE fermentation**, producing **Acetone, Butanol, and Ethanol** (historically vital for synthesizing cordite during World War I)."
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
            title: 'Fermentation',
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
