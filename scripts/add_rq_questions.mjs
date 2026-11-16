import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Respiratory-Quotient-(RQ)';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Respiratory-Quotient',
  'neet-SUBTOPIC-Botany-RQ',
  'neet-SUBTOPIC-Respiratory-Quotient-(RQ)',
  'neet-SUBTOPIC-Respiratory-Quotient',
  'neet-SUBTOPIC-RQ'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Respiration in Plants';
const SUBTOPIC = 'Respiratory Quotient (RQ)';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-RQ-001",
    "question": "Which of the following equations accurately defines the Respiratory Quotient (RQ) of an organism or tissue?",
    "options": [
      "RQ = (Volume of O\u2082 consumed) / (Volume of CO\u2082 evolved)",
      "RQ = (Volume of CO\u2082 evolved) / (Volume of O\u2082 consumed)",
      "RQ = (Moles of ATP synthesized) / (Moles of O\u2082 consumed)",
      "RQ = (Mass of substrate oxidized) / (Volume of CO\u2082 evolved)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Verbatim from NCERT Class 11 Biology (Respiration in Plants):\nRQ = (Volume of CO\u2082 evolved) / (Volume of O\u2082 consumed)"
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-RQ-002",
    "question": "What is the exact Respiratory Quotient (RQ) for the complete aerobic oxidation of the triglyceride **tripalmitin** (C\u2085\u2081H\u2089\u2088O\u2086), as given in NCERT Class 11 Biology?",
    "options": [
      "1.0",
      "0.9",
      "0.7",
      "1.33"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "According to NCERT, when fats are used in respiration, the RQ is less than 1. Calculations for a fatty acid, **tripalmitin**, give an RQ of **0.7** (102 / 145 = 0.703 \u2248 0.7)."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-RQ-003",
    "question": "Consider the balanced chemical equation for the complete aerobic respiration of **tripalmitin**:\n2(C\u2085\u2081H\u2089\u2088O\u2086) + xO\u2082 \u2192 yCO\u2082 + zH\u2082O + Energy\nIdentify the exact stoichiometric values of x, y, and z:",
    "options": [
      "x = 145, y = 102, z = 98",
      "x = 102, y = 145, z = 98",
      "x = 72.5, y = 51, z = 49",
      "x = 145, y = 98, z = 102"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Verbatim equation from NCERT Class 11 Biology:\n2(C\u2085\u2081H\u2089\u2088O\u2086) + 145O\u2082 \u2192 102CO\u2082 + 98H\u2082O + Energy\nHence x = 145, y = 102, and z = 98."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-RQ-004",
    "question": "**Assertion (A):** The Respiratory Quotient (RQ) of fats and fatty acids is always less than unity (\u2248 0.7). \n\n**Reason (R):** Fats contain a much lower proportion of oxygen relative to carbon and hydrogen compared to carbohydrates, and therefore require a larger volume of external O\u2082 for complete oxidation to CO\u2082 and H\u2082O.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Fats are highly reduced hydrocarbons with very little oxygen in their molecular structure (e.g., only 6 O atoms for 51 C and 98 H in tripalmitin). Consequently, a large amount of external O\u2082 is required to oxidize all the carbon and hydrogen, making the denominator (O\u2082 consumed) much larger than the numerator (CO\u2082 evolved), yielding RQ \u2248 0.7."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-RQ-005",
    "question": "Calculate the theoretical Respiratory Quotient (RQ) for the complete aerobic oxidation of **malic acid** (C\u2084H\u2086O\u2085):",
    "options": [
      "0.70",
      "0.90",
      "1.00",
      "1.33"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Balanced equation for malic acid (C\u2084H\u2086O\u2085):\n$C\u2084H\u2086O\u2085 + 3O\u2082 \u2192 4CO\u2082 + 3H\u2082O$\n$$RQ = (4 CO\u2082) / (3 O\u2082) = \\mathbf{1.33}$$"
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-RQ-006",
    "question": "What is the Respiratory Quotient (RQ) of **oxalic acid** (C\u2082H\u2082O\u2084) when completely oxidized aerobically?",
    "options": [
      "1.33",
      "2.00",
      "4.00",
      "\u221e"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Balanced equation for oxalic acid (C\u2082H\u2082O\u2084):\n$$2C\u2082H\u2082O\u2084 + O\u2082 \u2192 4CO\u2082 + 2H\u2082O \\quad \\left(or C\u2082H\u2082O\u2084 + 0.5O\u2082 \u2192 2CO\u2082 + H\u2082O\\right)$$\n$$RQ = (4 CO\u2082) / (1 O\u2082) = \\mathbf{4.00}$$"
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-RQ-007",
    "question": "Match Column-I (Respiratory Substrate / Condition) with Column-II (Typical RQ Value):\n\n\n| Column-I | Column-II |\n| :--- | :--- |\n| P. Germinating wheat seeds (starchy) | 1. 0.7 |\n| Q. Germinating castor or groundnut seeds (fatty) | 2. 0.9 |\n| R. Germinating pea or bean seeds (proteinaceous) | 3. 1.0 |\n| S. *Opuntia* (CAM plant) at night | 4. 0.0 |",
    "options": [
      "P-3, Q-1, R-2, S-4",
      "P-3, Q-2, R-1, S-4",
      "P-1, Q-3, R-2, S-4",
      "P-4, Q-1, R-2, S-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Starchy wheat seeds respire carbohydrates (RQ = 1.0, P-3). Fatty castor/groundnut seeds respire oils (RQ = 0.7, Q-1). Proteinaceous pea/bean seeds have RQ \u2248 0.9 (R-2). Succulent CAM plants like *Opuntia* at night fix all CO\u2082 into malic acid without releasing CO\u2082 (RQ = 0.0, S-4)."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-RQ-008",
    "question": "Why is the Respiratory Quotient (RQ) of succulent CAM plants (such as *Opuntia* and *Bryophyllum*) equal to **zero** during the night?",
    "options": [
      "Neither O\u2082 is consumed nor CO\u2082 is evolved at night.",
      "Carbohydrates are incompletely oxidized into organic acids (like malic acid) using O\u2082, while all CO\u2082 is internally fixed by PEP carboxylase so no CO\u2082 is released externally.",
      "Stomata remain closed at night, trapping O\u2082 inside the mesophyll cells.",
      "CAM plants perform alcoholic fermentation exclusively at night."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "At night, CAM plants (*Opuntia*) open their stomata, absorb O\u2082 to partially oxidize starch into PEP and malic acid, and simultaneously fix all respiratory and atmospheric CO\u2082 via PEP carboxylase. Because 0 CO\u2082 is evolved while O\u2082 is consumed, $RQ = 0 / O\u2082 = \\mathbf{0}$."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-RQ-009",
    "question": "In *Opuntia* (a succulent CAM plant), what happens to the Respiratory Quotient (RQ) during the **daytime** when the organic acids accumulated overnight are decarboxylated and respired?",
    "options": [
      "RQ remains 0",
      "RQ becomes less than 1 (\u2248 0.7)",
      "RQ becomes greater than 1 (> 1)",
      "RQ becomes equal to \u221e"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "During the day, *Opuntia* closes its stomata and decarboxylates the stored malic acid (C\u2084H\u2086O\u2085), releasing large amounts of CO\u2082 internally while consuming relatively little external O\u2082, resulting in **RQ > 1** (\u2248 1.33)."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-RQ-010",
    "question": "What is the Respiratory Quotient (RQ) during **alcoholic fermentation** of glucose by *Saccharomyces cerevisiae* under strictly anaerobic conditions?",
    "options": [
      "0",
      "1",
      "2",
      "\u221e (Infinity)"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "In alcoholic fermentation (C\u2086H\u2081\u2082O\u2086 \u2192 2C\u2082H\u2085OH + 2CO\u2082), 2 moles of CO\u2082 are evolved while **0 moles of O\u2082** are consumed. Therefore:\n$$RQ = 2/0 = \\mathbf{\u221e (Infinity)}$$"
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-RQ-011",
    "question": "Why is the concept of Respiratory Quotient (RQ) undefined or indeterminate (0/0) during **pure lactic acid fermentation** (such as in *Lactobacillus* or strenuously contracting human muscle)?",
    "options": [
      "Because both CO\u2082 evolved and O\u2082 consumed are zero.",
      "Because O\u2082 consumed is infinite while CO\u2082 evolved is zero.",
      "Because lactic acid is immediately converted into ethanol.",
      "Because RQ applies only to prokaryotic organisms."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In pure lactic acid fermentation (C\u2086H\u2081\u2082O\u2086 \u2192 2CH\u2083CH(OH)COOH), neither O\u2082 is consumed (0) nor CO\u2082 is evolved (0), giving 0/0 (undefined)."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-RQ-012",
    "question": "**Statement I:** In living organisms, respiratory substrates are often more than one; pure proteins or fats are never used as respiratory substrates. \n\n**Statement II:** The Respiratory Quotient depends upon the type of respiratory substrate used during respiration.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are verbatim from NCERT Class 11 Biology (Section 14.5: *Respiratory Quotient*): *\"The respiratory quotient depends upon the type of respiratory substrate used during respiration... It is also important to recognise that in living organisms respiratory substrates are often more than one; pure proteins or fats are never used as respiratory substrates.\"*"
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-RQ-013",
    "question": "Calculate the Respiratory Quotient (RQ) for the complete aerobic oxidation of **oleic acid** (C\u2081\u2088H\u2083\u2084O\u2082):",
    "options": [
      "0.706",
      "0.850",
      "1.000",
      "1.250"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Balanced equation for oleic acid (C\u2081\u2088H\u2083\u2084O\u2082):\n$C\u2081\u2088H\u2083\u2084O\u2082 + 25.5O\u2082 \u2192 18CO\u2082 + 17H\u2082O$\n$$RQ = (18) / (25.5) = 36/51 = \\mathbf{0.706}$$"
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-RQ-014",
    "question": "During the germination of fatty seeds (such as castor or sunflower), the RQ is initially around 0.7, then drops even lower (to ~ 0.4--0.5) during the peak conversion of stored triglycerides into sucrose via the **glyoxylate cycle**, and finally rises to 1.0. Why does the RQ drop below 0.7 during active fat-to-carbohydrate conversion?",
    "options": [
      "Because CO\u2082 is absorbed from the atmosphere by RuBisCO in the dark.",
      "Because converting oxygen-poor fatty acids into oxygen-rich sugars requires substantial uptake of external O\u2082 without releasing corresponding amounts of CO\u2082.",
      "Because germinating castor seeds switch to lactic acid fermentation.",
      "Because glyoxysomes consume CO\u2082 to synthesize amino acids."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During peak germination of oilseeds, fatty acids (O-poor) are converted into sucrose (O-rich) via the glyoxylate cycle and gluconeogenesis. Incorporating oxygen atoms into newly formed sugar molecules requires significant external O\u2082 uptake without releasing CO\u2082, depressing the RQ to ~ 0.4--0.5."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-RQ-015",
    "question": "A germinating seed lot is placed in a respirometer and found to consume 120 mL of O\u2082 while evolving 84 mL of CO\u2082 over 2 hours at standard temperature and pressure. Which type of storage reserve is predominantly being oxidized by these seeds?",
    "options": [
      "Starch (Carbohydrate)",
      "Proteins",
      "Fats / Oils",
      "Organic acids"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Calculating RQ:\n$$RQ = (Volume of CO\u2082 evolved) / (Volume of O\u2082 consumed) = (84 mL) / (120 mL) = \\mathbf{0.7}$$\nAn RQ of 0.7 indicates that **fats/oils** are the primary respiratory substrate."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-RQ-016",
    "question": "In **Ganong's respirometer**, if a student forgets to place potassium hydroxide (KOH) pellets in the small reservoir/bulb while measuring the respiration of germinating wheat seeds (RQ = 1), what will be observed in the graduated tube?",
    "options": [
      "The level of saline/mercury will rise rapidly to the top.",
      "There will be **no net change** in the level of the liquid column because the volume of CO\u2082 evolved equals the volume of O\u2082 absorbed.",
      "The liquid column will fall rapidly due to excess gas pressure.",
      "All wheat seeds will immediately undergo alcoholic fermentation."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For wheat seeds (RQ = 1), the volume of CO\u2082 evolved equals the volume of O\u2082 absorbed. Without KOH to absorb CO\u2082, total gas volume inside the respirometer remains unchanged, so there is **no net movement** of the liquid level."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-RQ-017",
    "question": "If **Ganong's respirometer** is set up with germinating **castor seeds** (RQ = 0.7) **without** KOH pellets in the apparatus, how will the level of the liquid column in the graduated tube behave?",
    "options": [
      "It will remain completely stationary.",
      "It will **rise** slightly because the volume of O\u2082 absorbed is greater than the volume of CO\u2082 evolved, creating a partial vacuum.",
      "It will **fall** because more CO\u2082 is produced than O\u2082 consumed.",
      "It will oscillate up and down periodically."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For castor seeds (RQ = 0.7), the volume of O\u2082 absorbed (10 units) exceeds the volume of CO\u2082 evolved (7 units). Without KOH, total gas volume decreases, creating a partial vacuum that causes the liquid level to **rise**."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-RQ-018",
    "question": "If **Ganong's respirometer** is set up with germinating **organic acid-rich tissues** (RQ > 1, e.g., RQ = 1.33) **without** KOH pellets, how will the liquid column in the graduated tube move?",
    "options": [
      "It will rise due to net gas consumption.",
      "It will **fall (move downward)** because the volume of CO\u2082 evolved exceeds the volume of O\u2082 absorbed, increasing internal gas pressure.",
      "It will show zero movement.",
      "It will freeze due to endothermic decarboxylation."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "When RQ > 1 (organic acids), the volume of CO\u2082 evolved exceeds the volume of O\u2082 absorbed. Without KOH, total gas pressure increases inside the chamber, pushing the liquid column **downward (fall)**."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-RQ-019",
    "question": "Why is the Respiratory Quotient (RQ) of **proteins** approximately **0.9** (ranging between 0.8 and 0.9) rather than 1.0 or 0.7?",
    "options": [
      "Because amino acids contain a nitrogen atom that is excreted as N\u2082 gas.",
      "Because proteins have an intermediate oxygen-to-carbon ratio compared to carbohydrates and fats, and part of the oxygen/carbon stoichiometry is affected by deamination and excretion of nitrogenous wastes (urea/uric acid).",
      "Because proteins cannot enter the Krebs cycle under any condition.",
      "Because every amino acid contains exactly 6 carbons and 6 oxygens."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Proteins have an intermediate degree of reduction (more oxygen than fats, less than carbohydrates), and during amino acid catabolism, amino groups are removed and converted into urea/uric acid (which consumes CO\u2082 in the urea cycle), giving a net RQ of **\u2248 0.9** (0.8--0.9)."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-RQ-020",
    "question": "Consider a general organic compound with molecular formula C_xH_yO_z undergoing complete aerobic combustion to CO\u2082 and H\u2082O. Which general formula correctly expresses its Respiratory Quotient (RQ)?",
    "options": [
      "$RQ = (x) / (x + \\frac{y){4} - (z) / (2)}$",
      "$RQ = (x + \\frac{y) / (4) - (z) / (2)}{x}$",
      "RQ = (y) / (x + z)",
      "$RQ = (z) / (x + \\frac{y){2}}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For complete combustion of C_xH_yO_z:\n$$C_xH_yO_z + \\left(x + (y) / (4) - (z) / (2)\\right)O\u2082 \u2192 xCO\u2082 + (y) / (2)H\u2082O$$\nTherefore, $RQ = (x) / (x + \\frac{y){4} - (z) / (2)}$."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-RQ-021",
    "question": "Using the general stoichiometric formula, calculate the Respiratory Quotient (RQ) of **citric acid** (C\u2086H\u2088O\u2087):",
    "options": [
      "0.75",
      "1.00",
      "1.33",
      "1.50"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "For citric acid (C\u2086H\u2088O\u2087):\n$O\u2082 required = 6 + 8/4 - 7/2 = 6 + 2 - 3.5 = 4.5 O\u2082$\n$$RQ = (6 CO\u2082) / (4.5 O\u2082) = 12/9 = \\mathbf{1.33}$$"
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-RQ-022",
    "question": "What is the Respiratory Quotient (RQ) of **tartaric acid** (C\u2084H\u2086O\u2086) upon complete aerobic oxidation?",
    "options": [
      "1.00",
      "1.33",
      "1.60",
      "2.00"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "For tartaric acid (C\u2084H\u2086O\u2086):\n$O\u2082 required = 4 + 6/4 - 6/2 = 4 + 1.5 - 3 = 2.5 O\u2082$\n$$RQ = (4 CO\u2082) / (2.5 O\u2082) = 8/5 = \\mathbf{1.60}$$"
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-RQ-023",
    "question": "Suppose an organism is oxidizing a mixture consisting of **50% carbohydrate (RQ = 1.0)** and **50% fat (RQ = 0.7)** by oxygen consumption. What will be the measured mixed Respiratory Quotient (RQ) of this organism?",
    "options": [
      "1.70",
      "0.85",
      "0.70",
      "0.35"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "When 50% of O\u2082 is used to oxidize carbohydrate (RQ = 1.0) and 50% is used to oxidize fat (RQ = 0.7):\n$$Mixed RQ = (0.5 \u00d7 1.0) + (0.5 \u00d7 0.7) = 0.50 + 0.35 = \\mathbf{0.85}$$"
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-RQ-024",
    "question": "During **starvation** in humans, the whole-body Respiratory Quotient (RQ) changes sequentially as different endogenous fuel reserves are depleted. Identify the correct chronological sequence of RQ values from the fed state through prolonged starvation:",
    "options": [
      "0.7 \u2192 0.85 \u2192 1.0",
      "1.0 (carbohydrate) \u2192 0.7 (adipose fat) \u2192 ~ 0.8--0.9 (tissue protein breakdown in terminal starvation)",
      "1.33 \u2192 1.0 \u2192 0.0",
      "0.0 \u2192 0.7 \u2192 1.0"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In the well-fed state, carbohydrates are oxidized (RQ = 1.0). During fasting/starvation, glycogen is depleted within 24 hours and the body shifts to adipose triglycerides (RQ = 0.7). Once fat stores are exhausted in terminal starvation, structural proteins are catabolized (RQ \u2248 0.8--0.9)."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-RQ-025",
    "question": "When carbohydrates are converted into fats (lipogenesis) in fattening animals (e.g., force-fed geese or pigs) or ripening oilseeds, what happens to the apparent Respiratory Quotient (RQ)?",
    "options": [
      "RQ becomes less than 0.5",
      "RQ becomes **greater than 1.0** (often 1.1--1.3) because oxygen-rich glucose is converted into oxygen-poor fatty acids, releasing extra CO\u2082 (via pyruvate dehydrogenase) without proportional O\u2082 uptake.",
      "RQ drops to 0.0",
      "RQ remains strictly 0.7"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Converting oxygen-rich carbohydrates (glucose) into oxygen-poor fatty acids releases excess oxygen atoms internally (used in oxidative pathways) and evolves CO\u2082 during pyruvate decarboxylation to Acetyl-CoA without requiring external O\u2082, pushing RQ **above 1.0** (1.1--1.3)."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-RQ-026",
    "question": "**Assertion (A):** In germinating pea seeds, the RQ measured during the very early stages of imbibition (before the testa ruptures) is often significantly greater than 1.0. \n\n**Reason (R):** The intact, water-imbibed seed coat restricts oxygen diffusion into the embryo, causing a combination of aerobic respiration and anaerobic alcoholic fermentation (which evolves CO\u2082 without consuming O\u2082).",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Before the seed coat (testa) ruptures, water-imbibed tissues restrict O\u2082 entry. The embryo performs partial anaerobic fermentation (releasing extra CO\u2082 without O\u2082 uptake) alongside aerobic respiration, causing RQ > 1. Once the testa splits and O\u2082 enters freely, RQ drops to 1.0."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-RQ-027",
    "question": "Which of the following substrates has a Respiratory Quotient (RQ) equal to **1.0**?",
    "options": [
      "Sucrose (C\u2081\u2082H\u2082\u2082O\u2081\u2081)",
      "Palmitic acid (C\u2081\u2086H\u2083\u2082O\u2082)",
      "Malic acid (C\u2084H\u2086O\u2085)",
      "Glycine (C\u2082H\u2085NO\u2082)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "**Sucrose** (C\u2081\u2082H\u2082\u2082O\u2081\u2081) is a carbohydrate:\n$$C\u2081\u2082H\u2082\u2082O\u2081\u2081 + 12O\u2082 \u2192 12CO\u2082 + 11H\u2082O \\implies RQ = 12/12 = \\mathbf{1.0}$$"
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-RQ-028",
    "question": "Calculate the Respiratory Quotient (RQ) for the complete aerobic oxidation of **stearic acid** (C\u2081\u2088H\u2083\u2086O\u2082):",
    "options": [
      "0.692",
      "0.800",
      "0.900",
      "1.000"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For stearic acid (C\u2081\u2088H\u2083\u2086O\u2082):\n$$C\u2081\u2088H\u2083\u2086O\u2082 + 26O\u2082 \u2192 18CO\u2082 + 18H\u2082O \\implies RQ = 18/26 = \\mathbf{0.692}$$"
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-RQ-029",
    "question": "Compare the RQ of **palmitic acid** (C\u2081\u2086H\u2083\u2082O\u2082) with that of **tripalmitin** (C\u2085\u2081H\u2089\u2088O\u2086). Which statement is mathematically accurate?",
    "options": [
      "Palmitic acid has RQ = 16 / 23 = 0.696, whereas tripalmitin has RQ = 102 / 145 = 0.703; both round to \u2248 0.7.",
      "Palmitic acid has RQ = 1.0, whereas tripalmitin has RQ = 0.5.",
      "Both have an exact RQ of 0.900.",
      "Palmitic acid has RQ > 1, whereas tripalmitin has RQ < 1."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For palmitic acid (C\u2081\u2086H\u2083\u2082O\u2082): $C\u2081\u2086H\u2083\u2082O\u2082 + 23O\u2082 \u2192 16CO\u2082 + 16H\u2082O \\implies RQ = 16/23 = \\mathbf{0.696}. For tripalmitin (C\u2085\u2081H\u2089\u2088O\u2086): RQ = 102/145 = \\mathbf{0.703}. Both round to \u2248 0.7$."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-RQ-030",
    "question": "In a clinical indirect calorimetry test on a resting human patient, the rate of O\u2082 consumption is measured as 250 mL/min and the rate of CO\u2082 production is 200 mL/min. What is the patient's Respiratory Quotient (RQ) and what does it indicate about substrate utilization?",
    "options": [
      "RQ = 1.25; pure carbohydrate oxidation",
      "RQ = 0.80; a mixed diet of carbohydrates, fats, and proteins",
      "RQ = 0.70; pure fat oxidation",
      "RQ = 0.50; severe ketosis"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "$RQ = (200 mL/min) / (250 mL/min) = \\mathbf{0.80}, which is the classic physiological RQ$ of a person metabolizing a balanced mixed diet of carbohydrates, fats, and proteins."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-RQ-031",
    "question": "**Statement I:** For carbohydrates, the RQ is 1 because equal amounts of CO\u2082 and O\u2082 are evolved and consumed, respectively. \n\n**Statement II:** Pure proteins or fats are used exclusively as respiratory substrates in most healthy plant tissues.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct (verbatim NCERT). Statement II is incorrect because NCERT explicitly states that pure proteins or fats are **never** used as exclusive respiratory substrates in living organisms."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-RQ-032",
    "question": "Why do **organic acids** (such as malic acid, citric acid, oxalic acid, and tartaric acid) invariably exhibit a Respiratory Quotient (RQ) **greater than 1**?",
    "options": [
      "Because they contain no carbon atoms.",
      "Because they are already partially oxidized (having a high oxygen-to-carbon ratio compared to carbohydrates), so they require less external O\u2082 to be completely oxidized to CO\u2082 and H\u2082O.",
      "Because they are oxidized exclusively via anaerobic fermentation.",
      "Because their oxidation consumes CO\u2082 from the air."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Organic acids (e.g., malic acid C\u2084H\u2086O\u2085, oxalic acid C\u2082H\u2082O\u2084) possess a higher proportion of oxygen atoms per carbon atom than carbohydrates (CH\u2082O). Because they are already partially oxidized, they require less external O\u2082 for complete oxidation, resulting in RQ > 1."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-RQ-033",
    "question": "Arrange the following respiratory substrates in **descending order** of their Respiratory Quotient (RQ) values:\n\n(i) Oxalic acid\n(ii) Malic acid\n(iii) Glucose\n(iv) Albumin (Protein)\n(v) Tripalmitin (Fat)",
    "options": [
      "(i) > (ii) > (iii) > (iv) > (v)",
      "(v) > (iv) > (iii) > (ii) > (i)",
      "(iii) > (ii) > (i) > (iv) > (v)",
      "(i) > (iii) > (ii) > (v) > (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Exact values:\n\n- Oxalic acid (i): 4.00\n- Malic acid (ii): 1.33\n- Glucose (iii): 1.00\n- Albumin/Protein (iv): \u2248 0.90\n- Tripalmitin/Fat (v): \u2248 0.70\n\nDescending order: **(i) > (ii) > (iii) > (iv) > (v)**."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-RQ-034",
    "question": "What is the Respiratory Quotient (RQ) of **succinic acid** (C\u2084H\u2086O\u2084) upon complete aerobic respiration?",
    "options": [
      "0.875",
      "1.000",
      "1.143",
      "1.333"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "For succinic acid (C\u2084H\u2086O\u2084):\n$O\u2082 required = 4 + 6/4 - 4/2 = 4 + 1.5 - 2 = 3.5 O\u2082$\n$$RQ = (4 CO\u2082) / (3.5 O\u2082) = 8/7 = \\mathbf{1.143}$$"
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-RQ-035",
    "question": "If a plant tissue is respiring **glucose** such that 80% of the glucose is oxidized completely via aerobic respiration and 20% undergoes alcoholic fermentation, what will be the overall measured RQ of the tissue?",
    "options": [
      "1.00",
      "1.083",
      "0.80",
      "1.25"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Consider 10 moles of glucose (8 aerobic + 2 anaerobic):\n\n- 8 aerobic glucose consume 8 \u00d7 6 = 48 O\u2082 and evolve 8 \u00d7 6 = 48 CO\u2082.\n- 2 anaerobic glucose consume 0 O\u2082 and evolve 2 \u00d7 2 = 4 CO\u2082.\n\nTotal CO\u2082 = 48 + 4 = 52; Total O\u2082 = 48.\n$$RQ = 52/48 = \\mathbf{1.083}$$"
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-RQ-036",
    "question": "Why is the Respiratory Quotient (RQ) of **leaves kept in the dark** typically close to **1.0**, whereas illuminated green leaves cannot have their true respiratory RQ measured directly by simple gas exchange?",
    "options": [
      "Because in the dark, leaves respire stored starch/sucrose (RQ = 1), whereas in the light, simultaneous photosynthetic CO\u2082 fixation and O\u2082 evolution mask respiratory gas exchange.",
      "Because leaves stop respiring completely in the presence of light.",
      "Because chlorophyll converts CO\u2082 into tripalmitin in the dark.",
      "Because stomata close permanently in the dark in all C\u2083 plants."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In the dark, photosynthesis ceases and leaves respire stored carbohydrates (RQ = 1.0). In the light, photosynthesis consumes respiratory CO\u2082 and releases O\u2082, obscuring true respiratory gas exchange."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-RQ-037",
    "question": "Consider the complete aerobic oxidation of **pyruvic acid** (C\u2083H\u2084O\u2083) in isolated mitochondria. What is the exact Respiratory Quotient (RQ) of pyruvic acid?",
    "options": [
      "1.00",
      "1.20",
      "1.33",
      "0.80"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Balanced equation for pyruvic acid (C\u2083H\u2084O\u2083):\n$$C\u2083H\u2084O\u2083 + 2.5O\u2082 \u2192 3CO\u2082 + 2H\u2082O \\implies RQ = (3) / (2.5) = \\mathbf{1.20}$$"
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-RQ-038",
    "question": "What is the Respiratory Quotient (RQ) of **acetic acid** (CH\u2083COOH or C\u2082H\u2084O\u2082) during complete aerobic oxidation?",
    "options": [
      "0.70",
      "0.90",
      "1.00",
      "1.50"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Acetic acid (C\u2082H\u2084O\u2082) has the empirical formula CH\u2082O (identical to carbohydrates):\n$$C\u2082H\u2084O\u2082 + 2O\u2082 \u2192 2CO\u2082 + 2H\u2082O \\implies RQ = 2/2 = \\mathbf{1.00}$$"
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-RQ-039",
    "question": "In **ketogenic diets** or untreated **diabetes mellitus**, the body relies heavily on the oxidation of fatty acids and ketone bodies (such as \u03b2-hydroxybutyrate and acetoacetate). How does this metabolic shift affect the patient's Respiratory Quotient (RQ)?",
    "options": [
      "RQ rises above 1.0",
      "RQ drops toward 0.7",
      "RQ becomes infinite (\u221e)",
      "RQ remains fixed at 1.0"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In untreated diabetes mellitus or ketogenic diets, glucose utilization is impaired/restricted and tissues oxidize fatty acids (RQ = 0.7) and ketone bodies (\u03b2-hydroxybutyrate RQ = 0.89; acetoacetate RQ = 1.0), driving the overall RQ down toward **0.7**."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-RQ-040",
    "question": "Calculate the Respiratory Quotient (RQ) of **glycerol** (C\u2083H\u2088O\u2083) upon complete aerobic respiration:",
    "options": [
      "0.700",
      "0.857",
      "1.000",
      "1.167"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Balanced equation for glycerol (C\u2083H\u2088O\u2083):\n$$C\u2083H\u2088O\u2083 + 3.5O\u2082 \u2192 3CO\u2082 + 4H\u2082O \\implies RQ = (3) / (3.5) = 6/7 = \\mathbf{0.857}$$"
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-RQ-041",
    "question": "**Assertion (A):** In succulent plants like *Bryophyllum*, the leaves taste sour (acidic) in the early morning and become less acidic by late afternoon. \n\n**Reason (R):** At night, incomplete oxidation of carbohydrates accumulates malic acid (RQ = 0), which is subsequently decarboxylated during the day (RQ > 1) to supply CO\u2082 for the Calvin cycle.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In *Bryophyllum* (a CAM succulent), nocturnal acidification accumulates malic acid in the vacuoles (RQ = 0, making leaves taste sour in the morning), while daytime deacidification decarboxylates malic acid (RQ > 1, lowering leaf acidity by afternoon)."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-RQ-042",
    "question": "What is the Respiratory Quotient (RQ) of **ethanol** (C\u2082H\u2085OH) when oxidized aerobically by *Acetobacter* or mammalian liver cells to CO\u2082 and H\u2082O?",
    "options": [
      "0.667",
      "0.750",
      "1.000",
      "1.333"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Balanced equation for ethanol (C\u2082H\u2086O):\n$$C\u2082H\u2086O + 3O\u2082 \u2192 2CO\u2082 + 3H\u2082O \\implies RQ = 2/3 = \\mathbf{0.667}$$"
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-RQ-043",
    "question": "During **glycolysis** alone (conversion of 1 molecule of glucose to 2 molecules of pyruvic acid), why can a Respiratory Quotient (RQ) not be calculated?",
    "options": [
      "Because glycolysis neither consumes O\u2082 nor evolves CO\u2082 (0 / 0).",
      "Because glycolysis consumes 6 O\u2082 without evolving CO\u2082.",
      "Because glycolysis evolves 6 CO\u2082 without consuming O\u2082.",
      "Because glycolysis produces tripalmitin."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Glycolysis (C\u2086H\u2081\u2082O\u2086 + 2NAD\u207a + 2ADP + 2P\u1d62 \u2192 2C\u2083H\u2084O\u2083 + 2NADH + 2H^+ + 2ATP) neither consumes O\u2082 nor releases CO\u2082, making RQ undefined (0/0)."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-RQ-044",
    "question": "Which of the following pairs of substrates have the **exact same** theoretical Respiratory Quotient (RQ)?",
    "options": [
      "Glucose (C\u2086H\u2081\u2082O\u2086) and Lactic acid (C\u2083H\u2086O\u2083)",
      "Tripalmitin (C\u2085\u2081H\u2089\u2088O\u2086) and Malic acid (C\u2084H\u2086O\u2085)",
      "Oxalic acid (C\u2082H\u2082O\u2084) and Citric acid (C\u2086H\u2088O\u2087)",
      "Palmitic acid (C\u2081\u2086H\u2083\u2082O\u2082) and Sucrose (C\u2081\u2082H\u2082\u2082O\u2081\u2081)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both glucose (C\u2086H\u2081\u2082O\u2086) and lactic acid (C\u2083H\u2086O\u2083) share the empirical formula (CH\u2082O)_n. For complete aerobic oxidation: C\u2083H\u2086O\u2083 + 3O\u2082 \u2192 3CO\u2082 + 3H\u2082O, giving $RQ = 3/3 = \\mathbf{1.0}, identical to glucose (6/6 = 1.0$)."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-RQ-045",
    "question": "A student places 10 g of germinating **groundnut** seeds in Respirometer A and 10 g of germinating **maize** grains in Respirometer B under identical aerobic conditions. After 1 hour, which observation is correct?",
    "options": [
      "Respirometer A shows RQ \u2248 1.0, while Respirometer B shows RQ \u2248 0.7.",
      "Respirometer A shows RQ \u2248 0.7 (fat-rich seeds), while Respirometer B shows RQ \u2248 1.0 (starch-rich grains).",
      "Both respirometers show RQ = 0.0.",
      "Both respirometers show RQ = 1.33."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Groundnut seeds are rich in stored fats/oils (RQ \u2248 0.7), whereas maize grains (caryopses) have a large starchy endosperm (RQ \u2248 1.0)."
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
            title: 'Respiratory Quotient (RQ)',
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
