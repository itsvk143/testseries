// scripts/build_purif_part3.js
// Subtopic: Quantitative analysis
// Chapter: Purification and Characterisation of Organic Compounds
// 26 Assertion-Reason, 8 MCQ, 13 Numerical = 47 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Quantitative analysis";
const CHAPTER = "Purification and Characterisation of Organic Compounds";

const arDirections = "Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n" +
  "(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n" +
  "(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n" +
  "(c) (A) is true but (R) is false.\n" +
  "(d) (A) is false but (R) is true.";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arQuestions = [
  // AR 1
  {
    question: `${arDirections}\n\nAssertion (A): Kjeldahl's method is not applicable for the quantitative estimation of nitrogen in nitrobenzene.\nReason (R): The nitrogen in the nitro group ($\\text{-NO}_2$) does not convert quantitatively into ammonium sulfate upon digestion with concentrated $\\text{H}_2\\text{SO}_4$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In Kjeldahl's method, the organic compound is heated with conc. $\\text{H}_2\\text{SO}_4$ to convert nitrogen into $(\\text{NH}_4)_2\\text{SO}_4$. However, nitro compounds, azo compounds, and compounds having nitrogen in a heteroaromatic ring (like pyridine) do not yield ammonium sulfate under these conditions. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 2
  {
    question: `${arDirections}\n\nAssertion (A): Dumas method is applicable to all types of organic nitrogenous compounds without exception.\nReason (R): In Dumas method, the compound is completely oxidized by heated $\\text{CuO}$ in a $\\text{CO}_2$ atmosphere, and any oxides of nitrogen are quantitatively reduced to elemental nitrogen gas over heated copper gauze.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Dumas method is a universal method for estimating nitrogen in any organic compound (including nitro, azo, and ring compounds). Complete combustion over $\\text{CuO}$ followed by reduction of nitrogen oxides to $\\text{N}_2$ over hot copper gauze ensures all nitrogen is collected as $\\text{N}_2$ gas over $\\text{KOH}$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 3
  {
    question: `${arDirections}\n\nAssertion (A): In Dumas method, the volume of nitrogen gas collected over aqueous $\\text{KOH}$ in the nitrometer must be corrected for aqueous tension.\nReason (R): The nitrogen gas collected over an aqueous solution is saturated with water vapor, exerting a partial pressure equal to the aqueous tension of water at that temperature.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since nitrogen gas is collected over an aqueous $\\text{KOH}$ solution, the total measured gas pressure includes the partial pressure of water vapor (aqueous tension, $p$). The dry pressure of $\\text{N}_2$ is obtained by subtracting aqueous tension: $P_{\\text{dry}} = P_{\\text{total}} - p$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 4
  {
    question: `${arDirections}\n\nAssertion (A): In Liebig's combustion method for estimating carbon and hydrogen, anhydrous $\\text{CaCl}_2$ tube is placed before the $\\text{KOH}$ bulb.\nReason (R): Potassium hydroxide solution absorbs both water vapor and carbon dioxide, whereas calcium chloride absorbs only water vapor.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$\\text{KOH}$ absorbs both $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ vapor. If the $\\text{KOH}$ bulb were placed first, it would absorb both, preventing the separate determination of water and carbon dioxide. Anhydrous $\\text{CaCl}_2$ selectively absorbs only $\\text{H}_2\\text{O}$ vapor, allowing accurate separate mass measurements. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 5
  {
    question: `${arDirections}\n\nAssertion (A): In Kjeldahl's digestion, potassium sulfate ($\\text{K}_2\\text{SO}_4$) and copper sulfate ($\\text{CuSO}_4$) are added to concentrated sulfuric acid.\nReason (R): Potassium sulfate raises the boiling point of sulfuric acid, while copper sulfate acts as a catalyst to accelerate the digestion process.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Adding $\\text{K}_2\\text{SO}_4$ raises the boiling point of conc. $\\text{H}_2\\text{SO}_4$ from $\\approx 338^\\circ\\text{C}$ to nearly $370^\\circ\\text{C}$, ensuring complete and rapid oxidation, while $\\text{CuSO}_4$ (or selenium/mercury) acts as an oxidation catalyst. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 6
  {
    question: `${arDirections}\n\nAssertion (A): Kjeldahl's method cannot be used to estimate nitrogen in pyridine.\nReason (R): Nitrogen present in the pyridine ring is extremely resistant to oxidative digestion and does not convert to ammonium sulfate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In heteroaromatic rings such as pyridine, quinoline, and isoquinoline, the aromatic stability of the ring prevents complete oxidative cleavage of the $\\text{C-N}$ bonds to ammonium sulfate under standard Kjeldahl digestion. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 7
  {
    question: `${arDirections}\n\nAssertion (A): In the Carius method for estimation of halogens, fuming nitric acid is used as the oxidizing agent.\nReason (R): Fuming nitric acid oxidizes carbon and hydrogen to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$, while halogen is converted into halide ions which precipitate with silver nitrate as $\\text{AgX}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In Carius tube, heating with fuming $\\text{HNO}_3$ destroys the organic framework completely, oxidizing carbon to $\\text{CO}_2$ and hydrogen to $\\text{H}_2\\text{O}$, while releasing halogen which reacts quantitatively with $\\text{AgNO}_3$ present in the tube to precipitate as $\\text{AgX}$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 8
  {
    question: `${arDirections}\n\nAssertion (A): In Carius method for sulfur estimation, sulfur is determined as a precipitate of barium sulfate ($\\text{BaSO}_4$).\nReason (R): Barium sulfate is a sparingly soluble crystalline precipitate with high chemical stability and a well-defined stoichiometric composition.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the estimation of sulfur, fuming $\\text{HNO}_3$ oxidizes all sulfur to $\\text{H}_2\\text{SO}_4$. Addition of excess $\\text{BaCl}_2$ precipitates $\\text{BaSO}_4$, which has a very low $K_{sp}$ ($1.1 \\times 10^{-10}$), is insoluble in dilute acids, and can be filtered, ignited, and weighed accurately. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 9
  {
    question: `${arDirections}\n\nAssertion (A): In the quantitative estimation of phosphorus, the precipitated ammonium phosphomolybdate can be converted to magnesium pyrophosphate ($\\text{Mg}_2\\text{P}_2\\text{O}_7$).\nReason (R): Heating magnesium ammonium phosphate ($\\text{Mg(NH}_4)\\text{PO}_4$) at high temperatures causes loss of ammonia and water, forming $\\text{Mg}_2\\text{P}_2\\text{O}_7$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Phosphoric acid obtained from oxidation of phosphorus is precipitated as $\\text{Mg(NH}_4)\\text{PO}_4$ with magnesia mixture. Upon strong ignition, it decomposes: $2\\text{Mg(NH}_4)\\text{PO}_4 \\xrightarrow{\\Delta} \\text{Mg}_2\\text{P}_2\\text{O}_7 + 2\\text{NH}_3\\uparrow + \\text{H}_2\\text{O}\\uparrow$. Weighing $\\text{Mg}_2\\text{P}_2\\text{O}_7$ allows stoichiometric determination of phosphorus. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 10
  {
    question: `${arDirections}\n\nAssertion (A): Direct estimation of oxygen in organic compounds can be carried out using the Unterzaucher method.\nReason (R): In the Unterzaucher method, organic compounds are pyrolyzed over heated carbon to convert all oxygen quantitatively into carbon monoxide ($\\text{CO}$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the Unterzaucher method, the organic substance is pyrolyzed in a stream of pure nitrogen over platinized carbon at $1100^\\circ\\text{C}$ to convert all oxygen to $\\text{CO}$. The $\\text{CO}$ is then oxidized to $\\text{CO}_2$ by $\\text{I}_2\\text{O}_5$, releasing $\\text{I}_2$ which is titrated. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 11
  {
    question: `${arDirections}\n\nAssertion (A): In Kjeldahl's method, the percentage of nitrogen is calculated using the formula $\\%\\text{N} = \\frac{1.4 \\times N \\times V}{m}$.\nReason (R): 1000 mL of $1\\text{ N}$ acid corresponds to 14 g of nitrogen.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since 1 equivalent of $\\text{NH}_3$ reacts with 1 equivalent of acid, and 1 mole of $\\text{NH}_3$ contains 14 g of N, 1000 mL of $1\\text{ N}$ acid $\\equiv 17\\text{ g NH}_3 \\equiv 14\\text{ g N}$. Thus, $V$ mL of $N$-normal acid corresponds to $\\frac{14 \\times N \\times V}{1000}$ g of nitrogen. Dividing by mass $m$ and multiplying by 100 gives $\\frac{1.4 \\times N \\times V}{m}$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 12
  {
    question: `${arDirections}\n\nAssertion (A): In Dumas method, a reduced copper gauze is placed near the exit end of the combustion tube.\nReason (R): The reduced copper gauze converts unreacted oxygen gas into copper(II) oxide.`,
    options: arOptions,
    correctAnswer: 2,
    explanation: "The purpose of the reduced copper gauze is to reduce any oxides of nitrogen (such as $\\text{NO}, \\text{NO}_2$) formed during combustion back to elemental nitrogen gas ($\\text{N}_2$), ensuring all nitrogen is measured. It is not placed to remove oxygen. Thus, (A) is true but (R) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 13
  {
    question: `${arDirections}\n\nAssertion (A): In Liebig's method, if the organic compound contains nitrogen, a reduced copper spiral is placed at the exit end of the combustion tube.\nReason (R): Nitrogen present in the compound may form oxides of nitrogen during combustion, which would be absorbed by $\\text{KOH}$ bulbs and cause an overestimation of carbon.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Oxides of nitrogen ($\text{NO}_2$) are acidic and would be absorbed along with $\\text{CO}_2$ in the $\\text{KOH}$ bulb, leading to an erroneously high mass of $\\text{CO}_2$ and thus overestimating carbon. The hot copper spiral reduces nitrogen oxides back to $\\text{N}_2$, which passes unabsorbed. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 14
  {
    question: `${arDirections}\n\nAssertion (A): In Liebig's combustion method, if the compound contains sulfur or halogens, a fused lead chromate ($\\text{PbCrO}_4$) roll is inserted in the combustion tube.\nReason (R): Lead chromate absorbs sulfur dioxide and halogens, preventing them from reaching the $\\text{KOH}$ absorption bulb.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Combustion of sulfur forms $\\text{SO}_2$ and halogens form halogen gases, which are acidic and would react with $\\text{KOH}$ in the bulbs, leading to an erroneously high value for carbon. $\\text{PbCrO}_4$ traps sulfur as $\\text{PbSO}_4$ and halogens as lead halides. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 15
  {
    question: `${arDirections}\n\nAssertion (A): In Dumas method, potassium hydroxide solution is used in the nitrometer rather than pure water.\nReason (R): Potassium hydroxide solution absorbs carbon dioxide completely, leaving only nitrogen gas in the nitrometer.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "A concentrated aqueous solution of $\\text{KOH}$ (around $40\\%$) rapidly and completely absorbs $\\text{CO}_2$ gas: $2\\text{KOH} + \\text{CO}_2 \\to \\text{K}_2\\text{CO}_3 + \\text{H}_2\\text{O}$, while $\\text{N}_2$ is insoluble in $\\text{KOH}$ and collects in the graduated nitrometer tube. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 16
  {
    question: `${arDirections}\n\nAssertion (A): In Carius method for the estimation of chlorine, the precipitate of $\\text{AgCl}$ must be washed with dilute $\\text{HNO}_3$ rather than pure distilled water.\nReason (R): Dilute $\\text{HNO}_3$ prevents the peptization of the colloidal silver chloride precipitate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$\\text{AgCl}$ tends to peptize (re-disperse into a colloidal sol) when washed with pure water, causing loss of precipitate through the filter. Washing with an electrolyte like dilute $\\text{HNO}_3$ prevents peptization and coagulates the precipitate. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 17
  {
    question: `${arDirections}\n\nAssertion (A): Estimation of nitrogen in azobenzene can be accurately achieved using Kjeldahl's method.\nReason (R): Azobenzene contains an azo group ($-\\text{N}=\\text{N}-$) where nitrogen atoms are readily reduced to ammonium sulfate.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Azo compounds ($-\\text{N}=\\text{N}-$) such as azobenzene do not yield ammonium sulfate under normal Kjeldahl digestion without prior reductive treatment; therefore, Kjeldahl's method cannot be directly used. Both (A) and (R) are false, matching option (d) in standard 4-choice format where (A) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 18
  {
    question: `${arDirections}\n\nAssertion (A): In Kjeldahl's method, the liberated ammonia can be absorbed in a solution of boric acid ($\\text{H}_3\\text{BO}_3$).\nReason (R): Boric acid is a weak acid and the resulting borate solution can be directly titrated against standard hydrochloric acid using methyl orange indicator.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the boric acid modification of Kjeldahl's method, $\\text{NH}_3$ reacts with $\\text{H}_3\\text{BO}_3$ to form ammonium borate: $\\text{NH}_3 + \\text{H}_3\\text{BO}_3 \\to \\text{NH}_4^+ + \\text{H}_2\\text{BO}_3^-$. The borate ion is then titrated directly with standard $\\text{HCl}$. This eliminates the need for precise volumetric dispensing of standard acid. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 19
  {
    question: `${arDirections}\n\nAssertion (A): In Carius method for estimation of halogens, silver nitrate ($\\text{AgNO}_3$) is added inside the Carius tube before sealing and heating.\nReason (R): In situ reaction of nascent halide ions with silver cations prevents the escape of volatile free halogen gases from the tube.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "If $\\text{AgNO}_3$ were not added initially, oxidation by fuming $\\text{HNO}_3$ would release volatile free halogens ($\\text{Cl}_2, \\text{Br}_2, \\text{I}_2$) which could escape upon opening the tube. Adding $\\text{AgNO}_3$ immediately traps halide ions as insoluble $\\text{AgX}$ precipitates. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 20
  {
    question: `${arDirections}\n\nAssertion (A): The percentage of oxygen in an organic compound is commonly calculated by difference rather than direct measurement.\nReason (R): Direct estimation of oxygen is experimentally more complex and requires high-temperature pyrolysis techniques.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because direct quantitative estimation of oxygen (Unterzaucher method) requires specialized quartz apparatus, pyrolysis over carbon at $1100^\\circ\\text{C}$, and inert gas lines, it is routine to determine oxygen by difference: $\\%\\text{O} = 100 - \\sum \\%(\\text{other elements})$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 21
  {
    question: `${arDirections}\n\nAssertion (A): In Liebig's combustion method, the combustion tube is packed with coarse copper(II) oxide.\nReason (R): Copper(II) oxide acts as a solid oxygen donor that ensures complete oxidation of the organic vapors to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Coarse $\\text{CuO}$ packed along the length of the combustion tube supplies oxygen at high temperatures ($700\\text{--}800^\\circ\\text{C}$) to burn any unoxidized carbon or volatile fragments completely to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 22
  {
    question: `${arDirections}\n\nAssertion (A): In Kjeldahl's method, the digested mixture is made alkaline with excess concentrated $\\text{NaOH}$ before distillation.\nReason (R): Concentrated $\\text{NaOH}$ neutralizes excess sulfuric acid and liberates volatile ammonia gas from ammonium sulfate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "The reaction $(\\text{NH}_4)_2\\text{SO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\text{NH}_3\\uparrow + 2\\text{H}_2\\text{O}$ liberates volatile ammonia, which is then steam distilled and quantitatively absorbed in standard acid. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 23
  {
    question: `${arDirections}\n\nAssertion (A): In Carius method, the gravimetric factor for calculating sulfur from barium sulfate is $\\frac{32}{233}$.\nReason (R): One mole of barium sulfate ($\\text{BaSO}_4$, molar mass $233\\text{ g mol}^{-1}$) contains one mole of sulfur atoms (atomic mass $32\\text{ g mol}^{-1}$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Every formula unit of $\\text{BaSO}_4$ contains exactly one atom of sulfur. Since the molar mass of $\\text{BaSO}_4$ is $137 + 32 + 64 = 233\\text{ g mol}^{-1}$ and atomic mass of sulfur is $32$, the mass of sulfur is $\\frac{32}{233} \\times m_{\\text{BaSO}_4}$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 24
  {
    question: `${arDirections}\n\nAssertion (A): In the Dumas method, pure $\\text{CO}_2$ gas is passed through the combustion tube before starting the combustion.\nReason (R): The flow of $\\text{CO}_2$ flushes out all atmospheric air (and nitrogen) from the combustion tube to prevent background nitrogen contamination.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Atmospheric air contains approximately $78\\%$ nitrogen gas. If any air remains inside the combustion tube, it would collect in the nitrometer and cause a massive positive error in the estimated percentage of nitrogen. Passing $\\text{CO}_2$ purges all air. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 25
  {
    question: `${arDirections}\n\nAssertion (A): In the estimation of phosphorus, the precipitate of ammonium phosphomolybdate has a molecular formula with 12 molybdenum atoms.\nReason (R): The coordination formula of the canary yellow precipitate is $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Ammonium 12-molybdophosphate has the formula $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$ (or $(\\text{NH}_4)_3\\text{PO}_4\\cdot 12\\text{MoO}_3$), possessing exactly 12 molybdenum atoms in a Keggin structure around the central phosphorus atom. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 26
  {
    question: `${arDirections}\n\nAssertion (A): The Carius method cannot be used for the quantitative estimation of fluorine in organic compounds.\nReason (R): Silver fluoride ($\\text{AgF}$) is readily soluble in water and does not form a precipitate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Unlike $\\text{AgCl, AgBr,}$ and $\\text{AgI}$ which are insoluble in water, silver fluoride ($\\text{AgF}$) is highly soluble in water ($1800\\text{ g L}^{-1}$). Therefore, it cannot be precipitated or weighed gravimetrically in the Carius method. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  }
];

// 8 MCQs (indices 26..33)
const mcqQuestions = [
  // MCQ 1
  {
    question: "Which of the following organic compounds can be estimated for nitrogen by Kjeldahl's method without any pre-reduction treatment?",
    options: [
      "$\\text{CH}_3\\text{CH}_2\\text{NH}_2$ (Ethylamine)",
      "$\\text{C}_6\\text{H}_5\\text{NO}_2$ (Nitrobenzene)",
      "$\\text{C}_6\\text{H}_5\\text{N}=\\text{N}-\\text{C}_6\\text{H}_5$ (Azobenzene)",
      "$\\text{C}_5\\text{H}_5\\text{N}$ (Pyridine)"
    ],
    correctAnswer: 0,
    explanation: "Aliphatic amines (like ethylamine), amides, and amino acids convert quantitatively to ammonium sulfate upon digestion with concentrated $\\text{H}_2\\text{SO}_4$. Nitro compounds, azo compounds, and pyridine ring nitrogen do not form ammonium sulfate and cannot be directly estimated by Kjeldahl's method.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 2
  {
    question: "In Dumas method for the estimation of nitrogen, $0.3\\text{ g}$ of an organic compound gave $50\\text{ mL}$ of nitrogen gas at $300\\text{ K}$ and $715\\text{ mm Hg}$ pressure. If the aqueous tension at $300\\text{ K}$ is $15\\text{ mm Hg}$, the volume of dry nitrogen gas at STP is:",
    options: [
      "$41.95\\text{ mL}$",
      "$46.05\\text{ mL}$",
      "$42.85\\text{ mL}$",
      "$50.00\\text{ mL}$"
    ],
    correctAnswer: 0,
    explanation: "Pressure of dry $\\text{N}_2 = 715 - 15 = 700\\text{ mm Hg}$.\nUsing the gas law:\n$$V_{\\text{STP}} = \\frac{P_1 V_1}{T_1} \\times \\frac{T_0}{P_0} = \\frac{700 \\times 50}{300} \\times \\frac{273}{760} = 41.95\\text{ mL}$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 3
  {
    question: "In Kjeldahl's method, the ammonia evolved from $0.5\\text{ g}$ of an organic compound neutralized $20\\text{ mL}$ of $0.1\\text{ M }\\text{H}_2\\text{SO}_4$. The percentage of nitrogen in the organic compound is:",
    options: [
      "$11.2\\%$",
      "$5.6\\%$",
      "$22.4\\%$",
      "$14.0\\%$"
    ],
    correctAnswer: 0,
    explanation: "Normality of $0.1\\text{ M }\\text{H}_2\\text{SO}_4 = 0.1 \\times 2 = 0.2\\text{ N}$.\nVolume of acid consumed $V = 20\\text{ mL}$.\n$$\\%\\text{N} = \\frac{1.4 \\times N \\times V}{m} = \\frac{1.4 \\times 0.2 \\times 20}{0.5} = \\frac{5.6}{0.5} = 11.2\\%$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 4
  {
    question: "In Carius method of estimation of halogens, $0.20\\text{ g}$ of an organic compound gave $0.188\\text{ g}$ of $\\text{AgBr}$. The percentage of bromine in the compound is: [Molar mass: $\\text{Ag} = 108$, $\\text{Br} = 80\\text{ g mol}^{-1}$]",
    options: [
      "$40.0\\%$",
      "$30.0\\%$",
      "$50.0\\%$",
      "$20.0\\%$"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of $\\text{AgBr} = 108 + 80 = 188\\text{ g mol}^{-1}$.\n$$\\%\\text{Br} = \\frac{80}{188} \\times \\frac{\\text{mass of AgBr}}{\\text{mass of compound}} \\times 100 = \\frac{80}{188} \\times \\frac{0.188}{0.20} \\times 100 = \\frac{80}{188} \\times 0.94 \\times 100 = 40.0\\%$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 5
  {
    question: "In Carius method for the estimation of sulfur, $0.32\\text{ g}$ of an organic compound gave $0.466\\text{ g}$ of barium sulfate ($\\text{BaSO}_4$). The percentage of sulfur in the compound is: [Molar mass: $\\text{BaSO}_4 = 233\\text{ g mol}^{-1}$, $\\text{S} = 32\\text{ g mol}^{-1}$]",
    options: [
      "$20\\%$",
      "$25\\%$",
      "$15\\%$",
      "$32\\%$"
    ],
    correctAnswer: 0,
    explanation: "$$\\text{Mass of sulfur} = \\frac{32}{233} \\times 0.466\\text{ g} = 32 \\times 0.002 = 0.064\\text{ g}$$\n$$\\%\\text{S} = \\frac{0.064}{0.32} \\times 100 = 20\\%$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 6
  {
    question: "In the combustion of $0.2\\text{ g}$ of an organic compound containing only carbon, hydrogen, and oxygen, $0.44\\text{ g}$ of $\\text{CO}_2$ and $0.18\\text{ g}$ of $\\text{H}_2\\text{O}$ were obtained. The percentage of oxygen in the compound is:",
    options: [
      "$30\\%$",
      "$60\\%$",
      "$10\\%$",
      "$40\\%$"
    ],
    correctAnswer: 0,
    explanation: "$$\\text{Mass of C} = \\frac{12}{44} \\times 0.44 = 0.12\\text{ g} \\implies \\%\\text{C} = \\frac{0.12}{0.2} \\times 100 = 60\\%$$\n$$\\text{Mass of H} = \\frac{2}{18} \\times 0.18 = 0.02\\text{ g} \\implies \\%\\text{H} = \\frac{0.02}{0.2} \\times 100 = 10\\%$$\n$$\\%\\text{O} = 100 - (60 + 10) = 30\\%$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 7
  {
    question: "In the quantitative estimation of phosphorus by converting it into magnesium pyrophosphate ($\\text{Mg}_2\\text{P}_2\\text{O}_7$), the gravimetric factor used to calculate the mass of phosphorus from the mass of $\\text{Mg}_2\\text{P}_2\\text{O}_7$ is: [Atomic mass: $\\text{Mg} = 24$, $\\text{P} = 31$, $\\text{O} = 16$]",
    options: [
      "$\\frac{62}{222}$",
      "$\\frac{31}{222}$",
      "$\\frac{31}{111}$",
      "$\\frac{62}{111}$"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of $\\text{Mg}_2\\text{P}_2\\text{O}_7 = (2 \\times 24) + (2 \\times 31) + (7 \\times 16) = 48 + 62 + 112 = 222\\text{ g mol}^{-1}$.\nOne mole of $\\text{Mg}_2\\text{P}_2\\text{O}_7$ contains 2 moles of phosphorus atoms ($2 \\times 31 = 62\\text{ g}$). Therefore, the gravimetric factor is $\\frac{62}{222}$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 8
  {
    question: "In the direct estimation of oxygen by the Unterzaucher method, carbon monoxide generated from the organic compound is oxidized to carbon dioxide using which reagent?",
    options: [
      "$\\text{I}_2\\text{O}_5$",
      "$\\text{KMnO}_4$",
      "$\\text{K}_2\\text{Cr}_2\\text{O}_7$",
      "$\\text{V}_2\\text{O}_5$"
    ],
    correctAnswer: 0,
    explanation: "In the Unterzaucher method, the $\\text{CO}$ produced is passed through a tube containing iodine pentoxide ($\\text{I}_2\\text{O}_5$) at $150^\\circ\\text{C}$:\n$$5\\text{CO} + \\text{I}_2\\text{O}_5 \\to 5\\text{CO}_2 + \\text{I}_2$$\nThe liberated iodine is then determined by titration with standard sodium thiosulfate.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  }
];

// 13 Numerical questions (indices 34..46)
const numQuestions = [
  // NUM 1
  {
    question: "In a Carius determination of sulfur, $0.466\\text{ g}$ of $\\text{BaSO}_4$ (molar mass $= 233\\text{ g mol}^{-1}$) was obtained from $0.16\\text{ g}$ of an organic compound. What is the percentage of sulfur in the organic compound? [Atomic mass of $\\text{S} = 32\\text{ g mol}^{-1}$]",
    options: [],
    correctAnswer: "40",
    explanation: "Mass of sulfur $= \\frac{32}{233} \\times 0.466\\text{ g} = 32 \\times 0.002 = 0.064\\text{ g}$.\n$$\\%\\text{S} = \\frac{0.064}{0.16} \\times 100 = 40\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 2
  {
    question: "During Dumas estimation of nitrogen, $0.2\\text{ g}$ of an organic compound yielded $22.4\\text{ mL}$ of dry nitrogen gas at STP. What is the percentage of nitrogen in the compound?",
    options: [],
    correctAnswer: "14",
    explanation: "At STP, $22400\\text{ mL}$ of $\\text{N}_2$ has a mass of $28\\text{ g}$.\n$$\\text{Mass of } \\text{N}_2 = \\frac{28 \\times 22.4}{22400} = 0.028\\text{ g}$$\n$$\\%\\text{N} = \\frac{0.028}{0.2} \\times 100 = 14\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 3
  {
    question: "In Kjeldahl's method, the ammonia evolved from $0.28\\text{ g}$ of an organic nitrogenous compound required $10\\text{ mL}$ of $0.2\\text{ M }\\text{HCl}$ for complete neutralization. What is the percentage of nitrogen in the compound?",
    options: [],
    correctAnswer: "10",
    explanation: "For $\\text{HCl}$, Normality $=$ Molarity $= 0.2\\text{ N}$.\n$$\\%\\text{N} = \\frac{1.4 \\times N \\times V}{m} = \\frac{1.4 \\times 0.2 \\times 10}{0.28} = \\frac{2.8}{0.28} = 10\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 4
  {
    question: "In Carius estimation of chlorine, $0.287\\text{ g}$ of $\\text{AgCl}$ (molar mass $= 143.5\\text{ g mol}^{-1}$) was obtained from $0.142\\text{ g}$ of an organic compound. What is the percentage of chlorine in the compound? [Atomic mass of $\\text{Cl} = 35.5\\text{ g mol}^{-1}$]",
    options: [],
    correctAnswer: "50",
    explanation: "Mass of chlorine $= \\frac{35.5}{143.5} \\times 0.287\\text{ g} = 35.5 \\times 0.002 = 0.071\\text{ g}$.\n$$\\%\\text{Cl} = \\frac{0.071}{0.142} \\times 100 = 50\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 5
  {
    question: "Combustion of $0.30\\text{ g}$ of an organic compound produces $0.66\\text{ g}$ of $\\text{CO}_2$. What is the percentage of carbon in the compound?",
    options: [],
    correctAnswer: "60",
    explanation: "Mass of carbon $= \\frac{12}{44} \\times 0.66 = 0.18\\text{ g}$.\n$$\\%\\text{C} = \\frac{0.18}{0.30} \\times 100 = 60\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 6
  {
    question: "Combustion of $0.18\\text{ g}$ of a hydrocarbon produces $0.18\\text{ g}$ of water ($\\text{H}_2\\text{O}$). What is the percentage of hydrogen in the hydrocarbon?",
    options: [],
    correctAnswer: "11",
    explanation: "Mass of hydrogen $= \\frac{2}{18} \\times 0.18 = 0.02\\text{ g}$.\n$$\\%\\text{H} = \\frac{0.02}{0.18} \\times 100 = 11.11\\% \\approx 11\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 7
  {
    question: "In the estimation of phosphorus, $0.444\\text{ g}$ of an organic compound gave $0.222\\text{ g}$ of magnesium pyrophosphate ($\\text{Mg}_2\\text{P}_2\\text{O}_7$, molar mass $= 222\\text{ g mol}^{-1}$). What is the percentage of phosphorus in the compound? [Atomic mass of $\\text{P} = 31\\text{ g mol}^{-1}$]",
    options: [],
    correctAnswer: "14",
    explanation: "Mass of phosphorus $= \\frac{62}{222} \\times 0.222 = 0.062\\text{ g}$.\n$$\\%\\text{P} = \\frac{0.062}{0.444} \\times 100 = 13.96\\% \\approx 14\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 8
  {
    question: "In Kjeldahl's method, the ammonia evolved from $0.42\\text{ g}$ of an organic compound was absorbed in $50\\text{ mL}$ of $0.1\\text{ N }\\text{H}_2\\text{SO}_4$. The unreacted acid required $20\\text{ mL}$ of $0.1\\text{ N }\\text{NaOH}$ for complete neutralization. What is the percentage of nitrogen in the compound?",
    options: [],
    correctAnswer: "10",
    explanation: "Total milli-equivalents of acid added $= 50 \\times 0.1 = 5.0$.\nMilli-equivalents of unreacted acid $= 20 \\times 0.1 = 2.0$.\nMilli-equivalents of acid neutralized by $\\text{NH}_3 = 5.0 - 2.0 = 3.0 = N \\times V$.\n$$\\%\\text{N} = \\frac{1.4 \\times (N \\times V)}{m} = \\frac{1.4 \\times 3.0}{0.42} = \\frac{4.2}{0.42} = 10\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 9
  {
    question: "In Carius method, $0.188\\text{ g}$ of an organic bromo compound gave $0.188\\text{ g}$ of $\\text{AgBr}$ (molar mass $= 188\\text{ g mol}^{-1}$). What is the percentage of bromine in the compound? [Atomic mass of $\\text{Br} = 80\\text{ g mol}^{-1}$]",
    options: [],
    correctAnswer: "43",
    explanation: "Mass of bromine $= \\frac{80}{188} \\times 0.188\\text{ g} = 0.080\\text{ g}$.\n$$\\%\\text{Br} = \\frac{0.080}{0.188} \\times 100 = 42.55\\% \\approx 43\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 10
  {
    question: "During Dumas nitrogen estimation, $0.25\\text{ g}$ of an organic compound gave $31.25\\text{ mL}$ of nitrogen gas at STP. If the percentage of nitrogen in the compound is $x\\%$, what is the value of $x$ to the nearest integer?",
    options: [],
    correctAnswer: "16",
    explanation: "At STP, mass of $\\text{N}_2 = \\frac{28 \\times 31.25}{22400} = 0.03906\\text{ g}$.\n$$\\%\\text{N} = \\frac{0.03906}{0.25} \\times 100 = 15.625\\% \\approx 16\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 11
  {
    question: "An organic compound contains $52.2\\%$ carbon, $13.0\\%$ hydrogen, and the rest is oxygen. What is the percentage of oxygen in the compound? (Answer to the nearest integer)",
    options: [],
    correctAnswer: "35",
    explanation: "Percentage of oxygen is calculated by difference:\n$$\\%\\text{O} = 100 - (52.2 + 13.0) = 100 - 65.2 = 34.8\\% \\approx 35\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 12
  {
    question: "In the Unterzaucher method for direct oxygen estimation, 1 mole of oxygen atoms present in an organic compound produces how many moles of carbon monoxide ($\\text{CO}$) upon pyrolysis over carbon at $1100^\\circ\\text{C}$?",
    options: [],
    correctAnswer: "1",
    explanation: "The pyrolysis reaction over carbon at $1100^\\circ\\text{C}$ converts each atom of oxygen into one molecule of carbon monoxide: $\\text{O} + \\text{C} \\to \\text{CO}$. Thus, 1 mole of oxygen atoms gives 1 mole of $\\text{CO}$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 13
  {
    question: "In a Carius determination of iodine, $0.235\\text{ g}$ of $\\text{AgI}$ (molar mass $= 235\\text{ g mol}^{-1}$) was obtained from $0.254\\text{ g}$ of an organic compound. What is the percentage of iodine in the compound? [Atomic mass of $\\text{I} = 127\\text{ g mol}^{-1}$]",
    options: [],
    correctAnswer: "50",
    explanation: "Mass of iodine $= \\frac{127}{235} \\times 0.235 = 0.127\\text{ g}$.\n$$\\%\\text{I} = \\frac{0.127}{0.254} \\times 100 = 50\\%$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  }
];

const allQuestions = [...arQuestions, ...mcqQuestions, ...numQuestions];

console.log(`Part 3 total questions: ${allQuestions.length}`);

// KaTeX validator
let katexErrors = 0;
function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 3 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 47) {
  const outPath = path.join(__dirname, 'data_purif_part3.js');
  const fileContent = `// Auto-generated data for Purification Part 3: Quantitative analysis\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
