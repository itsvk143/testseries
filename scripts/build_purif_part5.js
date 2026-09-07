// scripts/build_purif_part5.js
// Subtopic: Calculations of empirical and molecular formulas
// Chapter: Purification and Characterisation of Organic Compounds
// 26 Assertion-Reason, 8 MCQ, 13 Numerical = 47 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Calculations of empirical and molecular formulas";
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
    question: `${arDirections}\n\nAssertion (A): Glucose and acetic acid have the exact same empirical formula, $\\text{CH}_2\\text{O}$.\nReason (R): Both glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) and acetic acid ($\\text{C}_2\\text{H}_4\\text{O}_2$) have identical simplest whole-number molar ratios of carbon, hydrogen, and oxygen ($1:2:1$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "For glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$, dividing atomic subscripts by 6 gives $\\text{CH}_2\\text{O}$. For acetic acid $\\text{C}_2\\text{H}_4\\text{O}_2$, dividing by 2 gives $\\text{CH}_2\\text{O}$. Since empirical formula represents the simplest whole-number ratio, both have $\\text{CH}_2\\text{O}$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 2
  {
    question: `${arDirections}\n\nAssertion (A): The molecular mass of a volatile organic compound is twice its vapor density.\nReason (R): According to Avogadro's law, equal volumes of all gases under identical conditions of temperature and pressure contain equal numbers of molecules.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Vapor density is defined as the ratio of the mass of a given volume of gas to the mass of an equal volume of hydrogen gas under identical $T$ and $P$. By Avogadro's law: $\\text{VD} = \\frac{\\text{Mass of 1 molecule of gas}}{\\text{Mass of 1 molecule of } \\text{H}_2} = \\frac{\\text{Molar mass of gas}}{2}$. Thus, $\\text{Molar mass} = 2 \\times \\text{VD}$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 3
  {
    question: `${arDirections}\n\nAssertion (A): Two distinct organic compounds possessing the same percentage elemental composition can have different molecular formulas.\nReason (R): Molecular formula is an integral multiple of the empirical formula, so compounds with the same empirical formula can have different values of $n$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Percentage composition uniquely determines the empirical formula. However, $\\text{Molecular Formula} = (\\text{Empirical Formula})_n$. For example, formaldehyde ($\\text{CH}_2\\text{O}, n=1$), acetic acid ($\\text{C}_2\\text{H}_4\\text{O}_2, n=2$), and glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6, n=6$) all have identical percentage compositions ($40\\%\\text{ C}, 6.7\\%\\text{ H}, 53.3\\%\\text{ O}$). Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 4
  {
    question: `${arDirections}\n\nAssertion (A): In the silver salt method for finding the molecular mass of a monobasic organic acid, the molecular mass of the acid is given by $\\left(\\frac{w_1}{w_2} \\times 108\\right) - 107$.\nReason (R): In forming the silver salt $\\text{RCOOAg}$, one hydrogen atom (mass $1\\text{ u}$) of the acid is replaced by one silver atom (mass $108\\text{ u}$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "The silver salt is $\\text{RCOOAg}$. Upon ignition, $\\text{RCOOAg} \\xrightarrow{\\Delta} \\text{Ag}$. The molar mass of the silver salt is $\\frac{w_1}{w_2} \\times 108$. Since the silver salt was formed by replacing $\\text{H}^+$ with $\\text{Ag}^+$, the molar mass of the parent acid $\\text{RCOOH} = M_{\\text{salt}} - 108 + 1 = M_{\\text{salt}} - 107$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 5
  {
    question: `${arDirections}\n\nAssertion (A): Camphor is preferred as a solvent in Rast's micro-method for determining molecular mass by freezing point depression.\nReason (R): Camphor has an exceptionally large cryoscopic constant ($K_f \\approx 40\\text{ K kg mol}^{-1}$), producing easily measurable freezing point depressions even with tiny solute amounts.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because $K_f$ of camphor is extremely high ($39.7\\text{--}40.0\\text{ K kg mol}^{-1}$ compared to $1.86$ for water and $5.12$ for benzene), even a very dilute solution gives a large $\\Delta T_f$ ($5\\text{--}15^\\circ\\text{C}$), which can be measured accurately using an ordinary laboratory thermometer. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 6
  {
    question: `${arDirections}\n\nAssertion (A): The molecular formula of a compound can never be identical to its empirical formula.\nReason (R): The molecular formula always contains more atoms than the empirical formula.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "When $n = \\frac{\\text{Molecular Mass}}{\\text{Empirical Formula Mass}} = 1$, the molecular formula is exactly identical to the empirical formula (e.g., water $\\text{H}_2\\text{O}$, methane $\\text{CH}_4$, ammonia $\\text{NH}_3$, chloroform $\\text{CHCl}_3$). Therefore, both Assertion and Reason are completely false. Matching option (d) where (A) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 7
  {
    question: `${arDirections}\n\nAssertion (A): In Victor Meyer's method, the volume of air displaced by the vapor of a volatile liquid is measured over water at room temperature.\nReason (R): Under identical conditions of temperature and pressure, the volume of air displaced equals the volume that the vapor of the volatile liquid would occupy.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "According to the principle of Victor Meyer's method, a known mass of volatile liquid is vaporized rapidly, and its expanding vapor displaces an equal volume of air from the tube into a graduated tube over water. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 8
  {
    question: `${arDirections}\n\nAssertion (A): In the platinichloride method for determining the molecular weight of an organic base, the base is precipitated as a chloroplatinate salt.\nReason (R): Chloroplatinic acid ($\\text{H}_2\\text{PtCl}_6$) forms insoluble crystalline salts of the general formula $\\text{B}_2\\text{H}_2\\text{PtCl}_6$ with monoacidic organic bases.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Monoacidic organic nitrogenous bases form coordinate chloroplatinate salts: $2\\text{B} + \\text{H}_2\\text{PtCl}_6 \\to \\text{B}_2\\text{H}_2\\text{PtCl}_6$. On strong ignition, the organic part and chlorine burn off, leaving pure metallic platinum, allowing accurate gravimetric calculation. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 9
  {
    question: `${arDirections}\n\nAssertion (A): For a hydrocarbon with empirical formula $\\text{CH}$, its molecular formula could be $\\text{C}_6\\text{H}_6$ or $\\text{C}_2\\text{H}_2$.\nReason (R): Both benzene and ethyne have a carbon-to-hydrogen mole ratio of $1:1$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Both benzene ($\\text{C}_6\\text{H}_6, n=6$) and ethyne ($\\text{C}_2\\text{H}_2, n=2$) have an empirical formula of $\\text{CH}$ because their atomic mole ratio is $1:1$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 10
  {
    question: `${arDirections}\n\nAssertion (A): The empirical formula of sucrose is $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$.\nReason (R): The subscripts 12, 22, and 11 have no common integer factor greater than 1.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "The molecular formula of sucrose is $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$. Because the integers 12, 22, and 11 share no common factor other than 1, this ratio cannot be reduced to smaller whole numbers. Hence, the empirical formula of sucrose is identical to its molecular formula. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 11
  {
    question: `${arDirections}\n\nAssertion (A): In calculating the empirical formula from elemental mass percentages, each element's percentage is divided by its atomic mass.\nReason (R): Dividing the percentage by atomic mass converts the mass proportions into relative numbers of moles of atoms.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since chemical formulas represent atomic (molar) ratios and not mass ratios, dividing the mass of each element by its molar atomic mass gives the relative number of moles of each element in the compound. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 12
  {
    question: `${arDirections}\n\nAssertion (A): If the relative atomic mole ratio of elements in a compound is found to be $\\text{C} : \\text{H} : \\text{O} = 1 : 1.5 : 1$, the empirical formula is $\\text{C}_2\\text{H}_3\\text{O}_2$.\nReason (R): Fractional ratios in an empirical formula must be converted into the simplest whole numbers by multiplying through by the smallest suitable integer.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Multiplying $1 : 1.5 : 1$ by 2 gives whole numbers $2 : 3 : 2$. Thus, the empirical formula is $\\text{C}_2\\text{H}_3\\text{O}_2$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 13
  {
    question: `${arDirections}\n\nAssertion (A): The vapor density method can be applied to determine the molecular mass of non-volatile substances such as cane sugar.\nReason (R): Vapor density measurements require the substance to be completely converted into vapor without thermal decomposition.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Non-volatile substances like cane sugar (sucrose) cannot be vaporized without decomposing into caramel and carbon. Hence, the vapor density method CANNOT be used for non-volatile compounds. Reason is true. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 14
  {
    question: `${arDirections}\n\nAssertion (A): In Victor Meyer's method, the volume of moist air collected in the eudiometer tube must be corrected by subtracting the aqueous tension.\nReason (R): The gas collected over water is saturated with water vapor, which contributes its own vapor pressure to the total measured pressure.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "According to Dalton's law of partial pressures: $P_{\\text{total}} = P_{\\text{dry air}} + p_{\\text{aqueous tension}}$. To obtain the correct volume of dry air displaced at standard pressure, the aqueous tension must be subtracted: $P = P_{\\text{total}} - p$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 15
  {
    question: `${arDirections}\n\nAssertion (A): In the silver salt method, the basicity of the carboxylic acid must be known beforehand to determine its exact molecular mass.\nReason (R): Each acidic carboxylic group ($-\\text{COOH}$) in a polybasic acid replaces one hydrogen atom with one silver atom upon salt formation.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "An $n$-basic acid forms a silver salt containing $n$ silver atoms per molecule: $\\text{R(COOAg)}_n$. The molecular mass calculation depends on $n$: $M = n \\times \\left(\\frac{w_1 \\times 108}{w_2} - 107\\right)$. Without knowing the basicity $n$, only the equivalent mass of the acid can be calculated. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 16
  {
    question: `${arDirections}\n\nAssertion (A): The integer $n$ relating molecular formula to empirical formula can be zero.\nReason (R): The value of $n$ is defined as the ratio of molecular mass to empirical formula mass.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "$n = \\frac{\\text{Molecular Mass}}{\\text{Empirical Formula Mass}}$ is always a positive integer ($n = 1, 2, 3, \\dots$) because a real chemical molecule must contain at least one unit of its empirical formula. It can never be zero. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 17
  {
    question: `${arDirections}\n\nAssertion (A): For an alkane whose vapor density is 36, its molecular formula is $\\text{C}_5\\text{H}_{12}$.\nReason (R): Molecular mass of an alkane $\\text{C}_n\\text{H}_{2n+2}$ is $14n + 2$, and molecular mass equals $2 \\times \\text{vapor density}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Molecular mass $= 2 \\times 36 = 72\\text{ g mol}^{-1}$. For an alkane: $14n + 2 = 72 \\implies 14n = 70 \\implies n = 5$. Thus, the molecular formula is $\\text{C}_5\\text{H}_{12}$ (pentane). Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 18
  {
    question: `${arDirections}\n\nAssertion (A): The empirical formula mass of oxalic acid dihydrate ($(\\text{COOH})_2\\cdot 2\\text{H}_2\\text{O}$) is equal to its molecular mass.\nReason (R): The empirical formula of hydrated oxalic acid is $\\text{CH}_3\\text{O}_3$.`,
    options: arOptions,
    correctAnswer: 2,
    explanation: "Molecular formula of oxalic acid dihydrate is $\\text{C}_2\\text{H}_6\\text{O}_6$. Dividing by 2 gives the empirical formula $\\text{CH}_3\\text{O}_3$. Thus, the empirical formula mass is $\\text{C}(12) + \\text{H}_3(3) + \\text{O}_3(48) = 63\\text{ g mol}^{-1}$, which is half the molecular mass ($126\\text{ g mol}^{-1}$). Hence, (A) is false. Wait, Reason says empirical formula is $\\text{CH}_3\\text{O}_3$, which is true. Thus, (A) is false and (R) is true. Option (d) matches.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "The molecular formula of hydrated oxalic acid is $\\text{C}_2\\text{H}_6\\text{O}_6$, so its empirical formula is $\\text{CH}_3\\text{O}_3$ with empirical formula mass $63\\text{ g mol}^{-1}$. Its molecular mass is $126\\text{ g mol}^{-1}$ ($n = 2$). Therefore, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 19
  {
    question: `${arDirections}\n\nAssertion (A): For a gaseous organic compound, if $100\\text{ mL}$ of its vapor at STP weighs $0.268\\text{ g}$, its molecular mass is approximately $60\\text{ g mol}^{-1}$.\nReason (R): At STP, one mole of any ideal gas occupies a molar volume of $22400\\text{ mL}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Molar mass $= \\frac{0.268\\text{ g}}{100\\text{ mL}} \\times 22400\\text{ mL} = 60.03\\text{ g mol}^{-1} \\approx 60\\text{ g mol}^{-1}$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 20
  {
    question: `${arDirections}\n\nAssertion (A): An organic compound having equal percentages of carbon and oxygen and half that percentage of hydrogen must have an empirical formula with a $1:1$ carbon-to-oxygen atomic ratio.\nReason (R): Since the atomic mass of carbon ($12$) is less than that of oxygen ($16$), equal mass percentages yield a higher number of carbon moles than oxygen moles.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "If mass of $\\text{C}$ and $\\text{O}$ are equal (say $40\\%$ each), moles of $\\text{C} = 40/12 = 3.33$ and moles of $\\text{O} = 40/16 = 2.50$. The atomic mole ratio is $3.33 : 2.50 = 4 : 3$, NOT $1:1$! Thus, Assertion is false and Reason is true. Option (d) matches.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 21
  {
    question: `${arDirections}\n\nAssertion (A): In the silver salt method, the silver salt must be ignited gently and carefully to constant mass.\nReason (R): Rapid heating causes decrepitation and mechanical loss of fine silver particles, leading to an inaccurate residual mass.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Gentle heating prevents spattering and loss of microscopic metallic silver particles. The crucible must be heated until two successive weighings show constant mass, ensuring all organic material has completely volatilized. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 22
  {
    question: `${arDirections}\n\nAssertion (A): The molecular formula of a dibasic organic acid whose silver salt leaves $60\\%$ residue of silver upon ignition can be determined.\nReason (R): Knowing the percentage of silver in the silver salt allows direct calculation of the equivalent mass of the acid, and multiplying by basicity gives the molecular mass.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Equivalent mass of silver salt $= \\frac{108}{\\%\\text{Ag}} \\times 100 = \\frac{108}{60} \\times 100 = 180$. Equivalent mass of acid $= 180 - 107 = 73$. Since basicity is 2, molecular mass $= 2 \\times 73 = 146\\text{ g mol}^{-1}$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 23
  {
    question: `${arDirections}\n\nAssertion (A): All alkenes having one double bond have the same empirical formula, $\\text{CH}_2$.\nReason (R): The general molecular formula for acyclic mono-alkenes is $\\text{C}_n\\text{H}_{2n}$, where the carbon-to-hydrogen mole ratio is always $1:2$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "For any alkene with formula $\\text{C}_n\\text{H}_{2n}$ (such as ethene $\\text{C}_2\\text{H}_4$, propene $\\text{C}_3\\text{H}_6$, butene $\\text{C}_4\\text{H}_8$), dividing by $n$ yields the simplest atomic ratio $\\text{CH}_2$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 24
  {
    question: `${arDirections}\n\nAssertion (A): If the empirical formula of an organic compound is $\\text{CH}_2\\text{O}$ and its molecular mass is $180\\text{ g mol}^{-1}$, its molecular formula is $\\text{C}_6\\text{H}_{12}\\text{O}_6$.\nReason (R): Empirical formula mass of $\\text{CH}_2\\text{O}$ is $30\\text{ g mol}^{-1}$, giving $n = \\frac{180}{30} = 6$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Empirical mass $= 12 + 2(1) + 16 = 30\\text{ g mol}^{-1}$. Then $n = 180 / 30 = 6$. Molecular formula $= (\\text{CH}_2\\text{O})_6 = \\text{C}_6\\text{H}_{12}\\text{O}_6$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 25
  {
    question: `${arDirections}\n\nAssertion (A): The molecular mass of polymers and proteins can be accurately determined using the Victor Meyer method.\nReason (R): Polymers and macromolecules readily vaporize at atmospheric pressure without decomposition.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Polymers and proteins are high-molecular-weight non-volatile macromolecules that decompose before vaporizing; hence they cannot be analyzed by Victor Meyer method. Molecular mass of polymers is determined by osmotic pressure or light scattering. Both (A) and (R) are false, matching option (d) where (A) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 26
  {
    question: `${arDirections}\n\nAssertion (A): In determining the molecular formula of an organic base by the platinichloride method, knowing the acidity of the base is essential.\nReason (R): A diacidic base combines with one molecule of chloroplatinic acid to form $\\text{B}\\cdot\\text{H}_2\\text{PtCl}_6$, whereas a monoacidic base forms $\\text{B}_2\\cdot\\text{H}_2\\text{PtCl}_6$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "The stoichiometry of the salt depends directly on the acidity of the base: monoacidic bases form $\\text{B}_2\\text{H}_2\\text{PtCl}_6$ and diacidic bases form $\\text{BH}_2\\text{PtCl}_6$. Consequently, calculating the molecular weight of the base from the mass of platinum residue requires knowing its acidity. Both (A) and (R) are true and (R) is the correct explanation.",
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
    question: "An organic compound contains $40.0\\%$ carbon, $6.7\\%$ hydrogen, and $53.3\\%$ oxygen by mass. Its vapor density is 30. The molecular formula of the compound is: [Atomic masses: $\\text{C} = 12$, $\\text{H} = 1$, $\\text{O} = 16$]",
    options: [
      "$\\text{C}_2\\text{H}_4\\text{O}_2$",
      "$\\text{CH}_2\\text{O}$",
      "$\\text{C}_3\\text{H}_6\\text{O}_3$",
      "$\\text{C}_6\\text{H}_{12}\\text{O}_6$"
    ],
    correctAnswer: 0,
    explanation: "Moles of $\\text{C} = 40.0 / 12 = 3.33$\nMoles of $\\text{H} = 6.7 / 1 = 6.7$\nMoles of $\\text{O} = 53.3 / 16 = 3.33$\nSimplest mole ratio $\\text{C}:\\text{H}:\\text{O} = 1 : 2 : 1 \\implies$ Empirical formula $= \\text{CH}_2\\text{O}$ (mass $= 30$).\nMolecular mass $= 2 \\times \\text{Vapor Density} = 2 \\times 30 = 60\\text{ g mol}^{-1}$.\n$n = 60 / 30 = 2 \\implies$ Molecular formula $= (\\text{CH}_2\\text{O})_2 = \\text{C}_2\\text{H}_4\\text{O}_2$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 2
  {
    question: "A hydrocarbon contains $85.7\\%$ carbon and $14.3\\%$ hydrogen. If $112\\text{ mL}$ of this gaseous hydrocarbon at STP weighs $0.28\\text{ g}$, what is its molecular formula?",
    options: [
      "$\\text{C}_4\\text{H}_8$",
      "$\\text{C}_3\\text{H}_6$",
      "$\\text{C}_2\\text{H}_4$",
      "$\\text{C}_5\\text{H}_{10}$"
    ],
    correctAnswer: 0,
    explanation: "Moles of $\\text{C} = 85.7 / 12 = 7.14$; Moles of $\\text{H} = 14.3 / 1 = 14.3$.\nRatio $\\text{C}:\\text{H} = 1:2 \\implies$ Empirical formula is $\\text{CH}_2$ (mass $= 14$).\nMolar mass $= \\frac{0.28\\text{ g}}{112\\text{ mL}} \\times 22400\\text{ mL} = 56\\text{ g mol}^{-1}$.\n$n = 56 / 14 = 4 \\implies$ Molecular formula $= (\\text{CH}_2)_4 = \\text{C}_4\\text{H}_8$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 3
  {
    question: "In the silver salt method, $0.414\\text{ g}$ of the silver salt of a monobasic organic acid gave $0.216\\text{ g}$ of pure silver upon strong ignition. The molecular mass of the monobasic acid is: [Atomic mass of $\\text{Ag} = 108\\text{ g mol}^{-1}$]",
    options: [
      "$100\\text{ g mol}^{-1}$",
      "$207\\text{ g mol}^{-1}$",
      "$107\\text{ g mol}^{-1}$",
      "$60\\text{ g mol}^{-1}$"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of silver salt $= \\frac{0.414}{0.216} \\times 108 = 1.9167 \\times 108 = 207\\text{ g mol}^{-1}$.\nFor a monobasic acid $\\text{RCOOH}$, the silver salt is $\\text{RCOOAg}$.\n$$M_{\\text{acid}} = M_{\\text{salt}} - 108 + 1 = 207 - 107 = 100\\text{ g mol}^{-1}$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 4
  {
    question: "An organic compound contains $54.55\\%$ carbon, $9.09\\%$ hydrogen, and $36.36\\%$ oxygen. Its empirical formula is: [Atomic masses: $\\text{C} = 12$, $\\text{H} = 1$, $\\text{O} = 16$]",
    options: [
      "$\\text{C}_2\\text{H}_4\\text{O}$",
      "$\\text{C}_4\\text{H}_8\\text{O}_2$",
      "$\\text{CH}_2\\text{O}$",
      "$\\text{C}_3\\text{H}_6\\text{O}$"
    ],
    correctAnswer: 0,
    explanation: "Moles of $\\text{C} = 54.55 / 12 = 4.546$\nMoles of $\\text{H} = 9.09 / 1 = 9.09$\nMoles of $\\text{O} = 36.36 / 16 = 2.2725$\nDividing by smallest ($2.2725$):\n$\\text{C} = 4.546 / 2.2725 = 2.0$\n$\\text{H} = 9.09 / 2.2725 = 4.0$\n$\\text{O} = 2.2725 / 2.2725 = 1.0$\nEmpirical formula $= \\text{C}_2\\text{H}_4\\text{O}$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 5
  {
    question: "In Victor Meyer's method, $0.2\\text{ g}$ of a volatile organic compound displaced $56\\text{ mL}$ of dry air at STP. What is the molecular mass of the compound?",
    options: [
      "$80\\text{ g mol}^{-1}$",
      "$40\\text{ g mol}^{-1}$",
      "$160\\text{ g mol}^{-1}$",
      "$112\\text{ g mol}^{-1}$"
    ],
    correctAnswer: 0,
    explanation: "At STP, $22400\\text{ mL}$ of vapor corresponds to 1 mole of substance.\n$$M = \\frac{w}{V_{\\text{STP}}} \\times 22400 = \\frac{0.2\\text{ g}}{56\\text{ mL}} \\times 22400\\text{ mL} = 0.2 \\times 400 = 80\\text{ g mol}^{-1}$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 6
  {
    question: "A gaseous alkane has a vapor density of 29. Its molecular formula is:",
    options: [
      "$\\text{C}_4\\text{H}_{10}$",
      "$\\text{C}_3\\text{H}_8$",
      "$\\text{C}_2\\text{H}_6$",
      "$\\text{C}_5\\text{H}_{12}$"
    ],
    correctAnswer: 0,
    explanation: "Molecular mass $= 2 \\times \\text{Vapor Density} = 2 \\times 29 = 58\\text{ g mol}^{-1}$.\nFor alkane $\\text{C}_n\\text{H}_{2n+2}$:\n$$14n + 2 = 58 \\implies 14n = 56 \\implies n = 4$$\nThus, the formula is $\\text{C}_4\\text{H}_{10}$ (butane).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 7
  {
    question: "In the platinichloride method, $0.532\\text{ g}$ of the chloroplatinate salt of a monoacidic organic base gave $0.195\\text{ g}$ of metallic platinum upon ignition. The molecular mass of the base is: [Atomic mass of $\\text{Pt} = 195$, $\\text{Cl} = 35.5\\text{ g mol}^{-1}$]",
    options: [
      "$61\\text{ g mol}^{-1}$",
      "$122\\text{ g mol}^{-1}$",
      "$93\\text{ g mol}^{-1}$",
      "$45\\text{ g mol}^{-1}$"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of the chloroplatinate salt $\\text{B}_2\\text{H}_2\\text{PtCl}_6$ is:\n$$M_{\\text{salt}} = \\frac{0.532}{0.195} \\times 195 = 532\\text{ g mol}^{-1}$$\nFormula of salt: $2M_{\\text{base}} + 2(1) + 195 + 6(35.5) = 2M_{\\text{base}} + 410 = 532$.\n$$2M_{\\text{base}} = 532 - 410 = 122 \\implies M_{\\text{base}} = 61\\text{ g mol}^{-1}$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 8
  {
    question: "An organic compound contains $92.3\\%$ carbon and $7.7\\%$ hydrogen. If its molecular weight is 78, how many atoms in total are present in one molecule of the compound?",
    options: [
      "12",
      "6",
      "14",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Moles of $\\text{C} = 92.3 / 12 = 7.69$; Moles of $\\text{H} = 7.7 / 1 = 7.7$.\nRatio $\\text{C}:\\text{H} = 1:1 \\implies$ Empirical formula is $\\text{CH}$ (mass $= 13$).\n$n = 78 / 13 = 6 \\implies$ Molecular formula is $\\text{C}_6\\text{H}_6$ (benzene).\nTotal number of atoms in one molecule $= 6\\text{ (C)} + 6\\text{ (H)} = 12$.",
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
    question: "An organic compound has an empirical formula of $\\text{CH}_2\\text{O}$ and a vapor density of 45. What is the value of $n$ in the relation $\\text{Molecular Formula} = (\\text{Empirical Formula})_n$?",
    options: [],
    correctAnswer: "3",
    explanation: "Empirical formula mass of $\\text{CH}_2\\text{O} = 12 + 2(1) + 16 = 30\\text{ g mol}^{-1}$.\nMolecular mass $= 2 \\times \\text{Vapor Density} = 2 \\times 45 = 90\\text{ g mol}^{-1}$.\n$$n = \\frac{\\text{Molecular Mass}}{\\text{Empirical Mass}} = \\frac{90}{30} = 3$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 2
  {
    question: "A hydrocarbon contains $80\\%$ carbon and $20\\%$ hydrogen by mass. If its molecular mass is 30, how many hydrogen atoms are present in one molecule of the hydrocarbon?",
    options: [],
    correctAnswer: "6",
    explanation: "Moles of $\\text{C} = 80/12 = 6.67$; Moles of $\\text{H} = 20/1 = 20$.\nRatio $\\text{H}/\\text{C} = 20 / 6.67 = 3 \\implies$ Empirical formula is $\\text{CH}_3$ (mass $= 15$).\n$n = 30 / 15 = 2 \\implies$ Molecular formula is $\\text{C}_2\\text{H}_6$ (ethane).\nNumber of hydrogen atoms per molecule $= 6$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 3
  {
    question: "In the silver salt method, $0.306\\text{ g}$ of the silver salt of a monobasic acid yielded $0.108\\text{ g}$ of silver on ignition. What is the molecular mass of the acid in $\\text{g mol}^{-1}$? [Atomic mass of $\\text{Ag} = 108$]",
    options: [],
    correctAnswer: "199",
    explanation: "Molar mass of silver salt $= \\frac{0.306}{0.108} \\times 108 = 306\\text{ g mol}^{-1}$.\nFor a monobasic acid, $M_{\\text{acid}} = M_{\\text{salt}} - 108 + 1 = 306 - 107 = 199\\text{ g mol}^{-1}$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 4
  {
    question: "In Victor Meyer's determination, $0.15\\text{ g}$ of a volatile substance displaced $35\\text{ mL}$ of air measured at STP. What is the molecular weight of the substance in $\\text{g mol}^{-1}$?",
    options: [],
    correctAnswer: "96",
    explanation: "$$M = \\frac{w \\times 22400}{V_{\\text{STP}}} = \\frac{0.15 \\times 22400}{35} = 0.15 \\times 640 = 96\\text{ g mol}^{-1}$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 5
  {
    question: "A compound has the empirical formula $\\text{C}_2\\text{H}_4\\text{O}$ and a molecular weight of 88. What is the number of carbon atoms present in one molecule of this compound?",
    options: [],
    correctAnswer: "4",
    explanation: "Empirical formula mass of $\\text{C}_2\\text{H}_4\\text{O} = 2(12) + 4(1) + 16 = 44\\text{ g mol}^{-1}$.\n$$n = \\frac{88}{44} = 2$$\nMolecular formula $= (\\text{C}_2\\text{H}_4\\text{O})_2 = \\text{C}_4\\text{H}_8\\text{O}_2$.\nNumber of carbon atoms $= 4$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 6
  {
    question: "An organic compound contains $52.2\\%$ carbon, $13.0\\%$ hydrogen, and $34.8\\%$ oxygen. Its vapor density is 23. What is the total number of atoms in one molecule of this compound?",
    options: [],
    correctAnswer: "9",
    explanation: "Moles of $\\text{C} = 52.2/12 = 4.35$\nMoles of $\\text{H} = 13.0/1 = 13.0$\nMoles of $\\text{O} = 34.8/16 = 2.175$\nRatio $\\text{C}:\\text{H}:\\text{O} = \\frac{4.35}{2.175} : \\frac{13.0}{2.175} : 1 = 2 : 6 : 1 \\implies$ Empirical formula is $\\text{C}_2\\text{H}_6\\text{O}$ (mass $= 46$).\nMolecular mass $= 2 \\times 23 = 46$.\n$n = 46/46 = 1 \\implies$ Molecular formula is $\\text{C}_2\\text{H}_6\\text{O}$ (ethanol/dimethyl ether).\nTotal number of atoms $= 2 + 6 + 1 = 9$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 7
  {
    question: "A gaseous hydrocarbon has a density of $1.25\\text{ g L}^{-1}$ at STP. How many carbon atoms are present in one molecule of this hydrocarbon?",
    options: [],
    correctAnswer: "2",
    explanation: "Molar mass at STP $= \\text{density} \\times 22.4\\text{ L} = 1.25 \\times 22.4 = 28\\text{ g mol}^{-1}$.\nA hydrocarbon with molecular mass 28 is ethene ($\\text{C}_2\\text{H}_4$, $2 \\times 12 + 4 = 28$).\nThus, there are 2 carbon atoms per molecule.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 8
  {
    question: "In the silver salt method, $0.254\\text{ g}$ of the silver salt of a dibasic organic acid leaves $0.162\\text{ g}$ of silver upon ignition. What is the molecular mass of the dibasic acid in $\\text{g mol}^{-1}$? [Atomic mass of $\\text{Ag} = 108$]",
    options: [],
    correctAnswer: "124",
    explanation: "Equivalent mass of silver salt $= \\frac{w_1}{w_2} \\times 108 = \\frac{0.254}{0.162} \\times 108 = 169.33$.\nEquivalent mass of acid $= 169.33 - 107 = 62.33$.\nFor a dibasic acid (basicity $= 2$):\n$$M_{\\text{acid}} = 2 \\times 62.33 = 124.67 \\approx 125\\text{ or }124$$ Let's check exact fraction: $0.254 / 0.162 = 127/81$. $127/81 \\times 108 = 127 \\times 4/3 = 508/3 = 169.33$. Subtract 107 gives $187/3 = 62.33$. Multiply by 2 gives $374/3 = 124.67 \\approx 125$. Let's round to 125.",
    options: [],
    correctAnswer: "125",
    explanation: "Equivalent mass of silver salt $= \\frac{0.254}{0.162} \\times 108 = 169.33$.\nEquivalent mass of acid $= 169.33 - 107 = 62.33$.\nSince the acid is dibasic (basicity $= 2$):\n$$M_{\\text{acid}} = 2 \\times 62.33 = 124.67 \\approx 125\\text{ g mol}^{-1}$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 9
  {
    question: "A monoacidic organic base has a molecular weight of 93. What is the mass (in grams) of platinum residue obtained by igniting $1.192\\text{ g}$ of its chloroplatinate salt? [Molar mass: $\\text{Pt} = 195$, $\\text{Cl} = 35.5$]",
    options: [],
    correctAnswer: "0.39",
    explanation: "Formula of chloroplatinate salt of monoacidic base is $\\text{B}_2\\text{H}_2\\text{PtCl}_6$.\nMolar mass of salt $= 2(93) + 2 + 195 + 6(35.5) = 186 + 2 + 195 + 213 = 596\\text{ g mol}^{-1}$.\nOne mole of salt ($596\\text{ g}$) gives 1 mole of platinum ($195\\text{ g}$).\n$$\\text{Mass of Pt} = \\frac{195}{596} \\times 1.192\\text{ g} = 195 \\times 0.002 = 0.39\\text{ g}$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 10
  {
    question: "An organic compound contains $60.0\\%$ carbon, $13.3\\%$ hydrogen, and $26.7\\%$ oxygen. Its vapor density is 30. How many carbon atoms are present in one molecule of this compound?",
    options: [],
    correctAnswer: "3",
    explanation: "Moles of $\\text{C} = 60.0 / 12 = 5.0$\nMoles of $\\text{H} = 13.3 / 1 = 13.3$\nMoles of $\\text{O} = 26.7 / 16 = 1.67$\nRatio $\\text{C}:\\text{H}:\\text{O} = \\frac{5.0}{1.67} : \\frac{13.3}{1.67} : 1 = 3 : 8 : 1 \\implies$ Empirical formula is $\\text{C}_3\\text{H}_8\\text{O}$ (mass $= 60$).\nMolecular mass $= 2 \\times 30 = 60\\text{ g mol}^{-1}$.\n$n = 60/60 = 1 \\implies$ Molecular formula is $\\text{C}_3\\text{H}_8\\text{O}$ (propanol).\nNumber of carbon atoms $= 3$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 11
  {
    question: "A compound contains $24.24\\%$ carbon, $4.04\\%$ hydrogen, and $71.72\\%$ chlorine. If its molecular weight is 99, what is the value of $n$ relating molecular formula to empirical formula?",
    options: [],
    correctAnswer: "2",
    explanation: "Moles of $\\text{C} = 24.24 / 12 = 2.02$\nMoles of $\\text{H} = 4.04 / 1 = 4.04$\nMoles of $\\text{Cl} = 71.72 / 35.5 = 2.02$\nSimplest mole ratio $\\text{C}:\\text{H}:\\text{Cl} = 1 : 2 : 1 \\implies$ Empirical formula is $\\text{CH}_2\\text{Cl}$ (mass $= 12 + 2 + 35.5 = 49.5$).\n$$n = \\frac{99}{49.5} = 2$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 12
  {
    question: "A hydrocarbon with vapor density 21 has an empirical formula of $\\text{CH}_2$. How many total covalent bonds (including single and double bonds) are present in one molecule of this hydrocarbon?",
    options: [],
    correctAnswer: "9",
    explanation: "Molecular mass $= 2 \\times 21 = 42\\text{ g mol}^{-1}$.\n$n = 42 / 14 = 3 \\implies$ Molecular formula is propene ($\\text{C}_3\\text{H}_6$) or cyclopropane ($\\text{C}_3\\text{H}_6$).\nIn propene ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$): 6 $\\text{C-H}$ single bonds, 1 $\\text{C-C}$ single bond, and 1 $\\text{C=C}$ double bond (consisting of 2 covalent bonds). Total number of shared covalent electron pairs (bonds) $= 6 + 1 + 2 = 9$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 13
  {
    question: "In a cryoscopic determination using camphor as solvent ($K_f = 40.0\\text{ K kg mol}^{-1}$), $0.1\\text{ g}$ of an organic substance dissolved in $10\\text{ g}$ of camphor produces a freezing point depression of $4.0\\text{ K}$. What is the molecular mass of the substance in $\\text{g mol}^{-1}$?",
    options: [],
    correctAnswer: "100",
    explanation: "$$\\Delta T_f = K_f \\times m = K_f \\times \\frac{w_{\\text{solute}} \\times 1000}{M \\times w_{\\text{solvent}}}$$\n$$4.0 = 40.0 \\times \\frac{0.1 \\times 1000}{M \\times 10} = \\frac{400}{M}$$\n$$M = \\frac{400}{4.0} = 100\\text{ g mol}^{-1}$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  }
];

const allQuestions = [...arQuestions, ...mcqQuestions, ...numQuestions];

console.log(`Part 5 total questions: ${allQuestions.length}`);

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

console.log(`Part 5 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 47) {
  const outPath = path.join(__dirname, 'data_purif_part5.js');
  const fileContent = `// Auto-generated data for Purification Part 5: Calculations of empirical and molecular formulas\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
