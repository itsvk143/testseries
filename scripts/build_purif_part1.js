const fs = require("fs");
const path = require("path");
const katex = require("katex");

function validateKaTeX(text) {
  if (!text) return { valid: true };
  const inlineRegex = /\$([^$]+)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      return { valid: false, error: e.message, math: match[1] };
    }
  }
  return { valid: true };
}

const subtopic = "Purification techniques";
const chapter = "Purification and Characterisation of Organic Compounds";

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function ar(assertion, reason, correctAnswer, explanation) {
  return {
    type: "ASSERTION_REASON",
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${assertion}\nReason (R): ${reason}`,
    options: STANDARD_AR_OPTIONS,
    correctAnswer,
    explanation,
    subTopic: subtopic,
    chapter,
    questionType: "Assertion–Reasoning",
    marks: 4,
    negativeMarks: 1
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: subtopic,
    chapter,
    questionType: "MCQ (Multiple Choice Question)",
    marks: 4,
    negativeMarks: 1
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: subtopic,
    chapter,
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // ----------------------------------------------------
  // 26 ASSERTION-REASON QUESTIONS
  // ----------------------------------------------------
  ar(
    "Glycerol can be purified by distillation under reduced pressure without decomposition.",
    "Glycerol has a high boiling point of $290^\\circ\\text{C}$ at atmospheric pressure and undergoes thermal decomposition to acrolein at or below its normal boiling point.",
    0,
    "Glycerol decomposes into acrolein when boiled at atmospheric pressure $(290^\\circ\\text{C})$. Lowering the pressure to $\\sim 12\\text{ mm Hg}$ drops its boiling point to $180^\\circ\\text{C}$, allowing distillation without degradation."
  ),
  ar(
    "A mixture of $o$-nitrophenol and $p$-nitrophenol is separated effectively by steam distillation.",
    "$o$-Nitrophenol has intramolecular hydrogen bonding and is steam volatile, whereas $p$-nitrophenol has intermolecular hydrogen bonding and is non-steam volatile.",
    0,
    "Intramolecular hydrogen bonding (chelation) in $o$-nitrophenol makes it more volatile and easily carried over by steam. In contrast, intermolecular hydrogen bonding in $p$-nitrophenol leads to association, raising its boiling point and preventing steam distillation."
  ),
  ar(
    "In steam distillation, the mixture of water and immiscible organic liquid boils at a temperature below $100^\\circ\\text{C}$.",
    "For two immiscible liquids, the total vapor pressure is the sum of the vapor pressures of the individual pure components: $P_{\\text{total}} = p_{\\text{water}} + p_{\\text{organic}}$.",
    0,
    "Boiling occurs when $P_{\\text{total}} = 1\\text{ atm}$. Because $P_{\\text{total}} = p_{\\text{water}} + p_{\\text{organic}}$, water only needs to exert a partial pressure less than atmospheric pressure, which occurs at a temperature below $100^\\circ\\text{C}$."
  ),
  ar(
    "Simple distillation is employed to separate chloroform (b.p. $61^\\circ\\text{C}$) from aniline (b.p. $184^\\circ\\text{C}$).",
    "Simple distillation is suitable for separating liquids that boil without decomposition and have a difference in boiling points greater than $25-30^\\circ\\text{C}$.",
    0,
    "The difference in boiling points between aniline and chloroform is $184 - 61 = 123^\\circ\\text{C}$, which is significantly greater than $25^\\circ\\text{C}$. Thus, simple distillation gives clean separation."
  ),
  ar(
    "Fractional distillation is required to separate a mixture of acetone (b.p. $56^\\circ\\text{C}$) and methyl alcohol (b.p. $65^\\circ\\text{C}$).",
    "Fractionating columns provide numerous condensation-vaporization cycles along their length, enriching the vapor in the more volatile component.",
    0,
    "Because the boiling points differ by only $9^\\circ\\text{C}$ ($< 25^\\circ\\text{C}$), simple distillation yields a mixed distillate. A fractionating column provides the repeated vaporization-condensation cycles needed to separate close-boiling liquids."
  ),
  ar(
    "Sublimation is used to separate benzoic acid from sodium chloride.",
    "Benzoic acid is a readily sublimable organic compound, while sodium chloride is a non-volatile ionic solid.",
    0,
    "Upon gentle heating, benzoic acid transitions directly from solid to vapor, condensing as pure needle crystals on the cold surface of an inverted funnel, leaving non-volatile $\\text{NaCl}$ behind."
  ),
  ar(
    "Activated charcoal is added during the recrystallization of crude organic solids from solution.",
    "Activated charcoal selectively adsorbs colored, resinous, and tarry impurities from the hot solvent.",
    0,
    "Charcoal has an immense surface area that adsorbs high-molecular-weight colored impurities. The hot solution is filtered to remove the charcoal before allowing pure crystals to form upon cooling."
  ),
  ar(
    "In differential extraction, carrying out multiple extractions with smaller volumes of organic solvent is more efficient than a single extraction with the total volume.",
    "The amount of solute remaining unextracted in the aqueous phase decreases exponentially with the number of extraction stages according to the distribution law.",
    0,
    "According to the formula $W_n = W \\left( \\frac{V_1}{V_1 + K V_2} \\right)^n$, dividing the extractant into $n$ smaller portions $V_2$ removes substantially more solute than using the total volume $n V_2$ in a single step."
  ),
  ar(
    "A constant-boiling azeotropic mixture of $95.6\\%$ ethanol and $4.4\\%$ water cannot be separated into pure ethanol by fractional distillation.",
    "At the azeotropic composition, the liquid and vapor phases have identical compositions at the boiling point.",
    0,
    "Because vapor and liquid compositions are identical at the azeotropic point, fractional distillation cannot enrich the vapor beyond $95.6\\%$ ethanol."
  ),
  ar(
    "In the purification of organic compounds by crystallization, an ideal solvent should dissolve the solute equally well in both cold and boiling states.",
    "Equal solubility at all temperatures maximizes the yield of crystallized material upon cooling.",
    3,
    "Assertion (A) is false: an ideal crystallization solvent must dissolve a large amount of solute at high temperature and very little at room/cold temperature. Reason (R) is false: equal solubility prevents any crystallization upon cooling."
  ),
  ar(
    "Aniline can be purified from non-volatile impurities by steam distillation.",
    "Aniline is steam volatile and is practically immiscible with cold water.",
    0,
    "Aniline possesses significant vapor pressure at $\\sim 98^\\circ\\text{C}$ and does not mix with water. It distills smoothly with steam, leaving non-volatile tarry impurities in the distillation flask."
  ),
  ar(
    "Distillation under reduced pressure is used industrially in the concentration of sugarcane juice in sugar manufacturing.",
    "Sucrose decomposes and chars when heated to its normal atmospheric boiling point.",
    0,
    "At atmospheric pressure, boiling temperatures cause thermal decomposition and caramelization of sucrose. Vacuum evaporation lowers the boiling temperature, allowing rapid evaporation without charring."
  ),
  ar(
    "A mixture of naphthalene and urea can be separated by sublimation.",
    "Naphthalene sublimes readily on heating, whereas urea does not sublime.",
    0,
    "Naphthalene has a high vapor pressure below its melting point and sublimes rapidly, separating cleanly from non-sublimable urea."
  ),
  ar(
    "In steam distillation, the ratio of masses of the two liquids in the distillate is proportional to the product of their vapor pressures and their molecular masses.",
    "Dalton's law dictates that the number of moles of each component in the vapor phase is proportional to its partial vapor pressure.",
    0,
    "From $P_A / P_B = n_A / n_B = (w_A / M_A) / (w_B / M_B)$, we obtain $\\frac{w_A}{w_B} = \\frac{p_A M_A}{p_B M_B}$. Thus, Reason (R) correctly explains Assertion (A)."
  ),
  ar(
    "Fractionating columns packed with glass beads provide higher separation efficiency than an empty cylindrical fractionating tube.",
    "The packing material increases the surface area for continuous heat exchange between rising vapors and falling liquid condensate.",
    0,
    "Glass beads provide large surface area for repeated condensations and vaporizations, increasing the number of theoretical plates and separation efficiency."
  ),
  ar(
    "A mixture of benzoic acid and anthracene can be separated by chemical extraction with aqueous sodium bicarbonate solution.",
    "Benzoic acid reacts with $\\text{NaHCO}_3$ to form water-soluble sodium benzoate, while anthracene remains insoluble.",
    0,
    "Benzoic acid is acidic and converts to soluble $\\text{C}_6\\text{H}_5\\text{COONa}$ in aqueous $\\text{NaHCO}_3$. Neutral anthracene does not react and remains insoluble in water, allowing easy separation."
  ),
  ar(
    "A separating funnel is used to separate two miscible liquids like ethanol and water.",
    "A separating funnel separates liquids on the basis of their difference in densities when two immiscible layers form.",
    3,
    "Assertion (A) is false: a separating funnel requires two immiscible liquid layers; it cannot separate miscible liquids like ethanol and water. Reason (R) is true: it operates on density differences of immiscible phases."
  ),
  ar(
    "The purity of an organic solid is routinely tested by determining its melting point.",
    "A pure crystalline organic compound has a sharp and characteristic melting point.",
    0,
    "Pure organic solids melt sharply within a range of $0.5-1.0^\\circ\\text{C}$. Impurities broaden the melting range and lower the melting point."
  ),
  ar(
    "The purity of a liquid organic compound can be confirmed by measuring its boiling point and refractive index.",
    "Pure liquids boil at a constant temperature at a given pressure and have a unique, well-defined refractive index.",
    0,
    "A constant boiling point at specified pressure and a precise refractive index are standard physical criteria for liquid purity."
  ),
  ar(
    "Camphor can be separated from kerosene oil by simple sublimation.",
    "Camphor is insoluble in kerosene oil and precipitates as a solid.",
    3,
    "Assertion (A) is false: camphor is completely soluble in kerosene oil, forming a homogeneous solution that cannot be separated by simple sublimation. Reason (R) is false."
  ),
  ar(
    "Fractional crystallization is used to separate two solids having widely different solubilities in a given solvent.",
    "The less soluble compound crystallizes out first upon cooling the hot saturated solution, leaving the more soluble compound in the mother liquor.",
    0,
    "When a hot saturated solution of two compounds with different solubilities is cooled, the less soluble component reaches saturation first and precipitates, while the more soluble component remains dissolved."
  ),
  ar(
    "Concentrated sulphuric acid is purified and concentrated by distillation under reduced pressure.",
    "Concentrated sulphuric acid boils at $338^\\circ\\text{C}$ with partial decomposition into sulphur trioxide and water at atmospheric pressure.",
    0,
    "At its normal boiling point $(338^\\circ\\text{C})$, $\\text{H}_2\\text{SO}_4$ partially dissociates: $\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\text{SO}_3 + \\text{H}_2\\text{O}$. Vacuum distillation allows concentration at lower temperatures without decomposition."
  ),
  ar(
    "During steam distillation, steam is continuously bubbled through the boiling flask containing the organic liquid.",
    "Bubbling steam ensures rapid transfer of thermal energy and maintains the equilibrium vapor pressure of water.",
    0,
    "Passing superheated or live steam into the mixture keeps the liquid agitated, maintains high temperature, and provides a continuous supply of water vapor to carry over the organic substance."
  ),
  ar(
    "During the extraction of an organic base from water, the aqueous layer is made acidic with dilute $\\text{HCl}$.",
    "In acidic solution, organic bases are protonated to water-soluble ammonium salts.",
    3,
    "Assertion (A) is false: to extract an organic base into an organic solvent, the aqueous layer must be made basic $(\\text{NaOH})$ so the base exists as a neutral, lipophilic species. Reason (R) is true: acids protonate bases to ionic, water-soluble salts."
  ),
  ar(
    "Sublimation can be carried out under reduced pressure for substances that have high sublimation temperatures.",
    "Lowering the external pressure decreases the temperature required for a substance's vapor pressure to equal the surroundings.",
    0,
    "Vacuum sublimation reduces the required heating temperature, enabling heat-sensitive or high-melting solids to sublime cleanly without decomposition."
  ),
  ar(
    "Simple distillation cannot be used to separate crude petroleum into its various useful fractions.",
    "Crude petroleum contains dozens of hydrocarbon components with closely spaced boiling points that overlap continuously.",
    0,
    "Because hydrocarbon boiling points form a continuous continuum with very small differences, only fractional distillation in tall fractionating towers can segregate petroleum into fractions."
  ),

  // ----------------------------------------------------
  // 8 MCQ QUESTIONS
  // ----------------------------------------------------
  mcq(
    "Which of the following organic compounds is most effectively purified by distillation under reduced pressure (vacuum distillation)?",
    [
      "Chloroform",
      "Glycerol",
      "Benzene",
      "Diethyl ether"
    ],
    1,
    "Glycerol decomposes at its normal atmospheric boiling point of $290^\\circ\\text{C}$. Distillation under reduced pressure $(\\sim 12\\text{ mm Hg})$ lowers its boiling point to $180^\\circ\\text{C}$, preventing decomposition."
  ),
  mcq(
    "A mixture of $o$-nitrophenol and $p$-nitrophenol can be separated by steam distillation because:",
    [
      "$o$-Nitrophenol has intermolecular hydrogen bonding and is non-volatile.",
      "$o$-Nitrophenol has intramolecular hydrogen bonding and is steam volatile.",
      "$p$-Nitrophenol has a lower boiling point than $o$-nitrophenol.",
      "Both isomers form azeotropes with water at identical temperatures."
    ],
    1,
    "$o$-Nitrophenol exhibits intramolecular hydrogen bonding (chelation), which prevents association with water and increases volatility, enabling steam distillation. $p$-Nitrophenol forms strong intermolecular H-bonds and is non-steam volatile."
  ),
  mcq(
    "Which of the following pairs of liquids can be cleanly separated by simple distillation?",
    [
      "Acetone (b.p. $56^\\circ\\text{C}$) and methyl alcohol (b.p. $65^\\circ\\text{C}$)",
      "Benzene (b.p. $80^\\circ\\text{C}$) and toluene (b.p. $111^\\circ\\text{C}$)",
      "Ether (b.p. $35^\\circ\\text{C}$) and toluene (b.p. $111^\\circ\\text{C}$)",
      "Ethanol (b.p. $78.3^\\circ\\text{C}$) and water (b.p. $100^\\circ\\text{C}$)"
    ],
    2,
    "Simple distillation requires a boiling point difference greater than $25-30^\\circ\\text{C}$ without decomposition. Ether and toluene have a difference of $111 - 35 = 76^\\circ\\text{C}$, making simple distillation very effective."
  ),
  mcq(
    "Which of the following substances CANNOT be purified by sublimation?",
    [
      "Camphor",
      "Naphthalene",
      "Benzoic acid",
      "Sucrose"
    ],
    3,
    "Sucrose undergoes thermal decomposition and charring upon heating instead of subliming. Camphor, naphthalene, and benzoic acid sublime readily."
  ),
  mcq(
    "In steam distillation, the total vapor pressure $(P)$ of the boiling mixture of two immiscible liquids $A$ (water) and $B$ (organic liquid) is given by:",
    [
      "$P = p_A^\\circ \\cdot x_A + p_B^\\circ \\cdot x_B$",
      "$P = p_A + p_B$",
      "$P = p_A - p_B$",
      "$P = (p_A \\cdot p_B)^{1/2}$"
    ],
    1,
    "For two completely immiscible liquids, each liquid exerts its own saturated vapor pressure independently of the other: $P = p_A + p_B$."
  ),
  mcq(
    "The distribution coefficient of a compound between ether and water is $K = C_{\\text{ether}} / C_{\\text{water}} = 4$. To extract the maximum amount of compound from an aqueous solution using $100\\text{ mL}$ of ether, one should:",
    [
      "Extract once with the full $100\\text{ mL}$ of ether.",
      "Extract twice with $50\\text{ mL}$ portions of ether successively.",
      "Boil the aqueous solution before adding $100\\text{ mL}$ of ether.",
      "Add $100\\text{ mL}$ of ether and keep it standing for several days without shaking."
    ],
    1,
    "Successive extractions with smaller portions of solvent remove significantly more solute than a single extraction using the entire volume, as dictated by the Nernst distribution law."
  ),
  mcq(
    "What is the role of activated charcoal in the recrystallization of impure organic solids?",
    [
      "To lower the melting point of the crystals",
      "To adsorb colored and resinous impurities from the solution",
      "To act as a seed crystal for faster crystallization",
      "To increase the boiling point of the solvent"
    ],
    1,
    "Activated charcoal has high surface porosity that selectively adsorbs high-molecular-weight colored and tarry impurities from the hot solution."
  ),
  mcq(
    "Which of the following mixtures forms an azeotrope that cannot be separated by fractional distillation at atmospheric pressure?",
    [
      "Benzene and toluene",
      "Ethanol and water $(95.6\\% : 4.4\\%)$",
      "Chloroform and aniline",
      "Hexane and heptane"
    ],
    1,
    "A mixture of $95.6\\%$ ethanol and $4.4\\%$ water forms a minimum-boiling azeotrope that boils at $78.15^\\circ\\text{C}$ with identical liquid and vapor compositions, precluding further separation by fractional distillation."
  ),

  // ----------------------------------------------------
  // 13 NUMERICAL QUESTIONS
  // ----------------------------------------------------
  num(
    "During the steam distillation of an organic liquid $X$ (molar mass $123\\text{ g/mol}$) immiscible with water (molar mass $18\\text{ g/mol}$) at $98^\\circ\\text{C}$, the partial vapor pressure of water is $710\\text{ mm Hg}$ and atmospheric pressure is $760\\text{ mm Hg}$. What is the partial vapor pressure of $X$ in $\\text{mm Hg}$?",
    50,
    "Total pressure $P = p_{\\text{water}} + p_X \\implies 760 = 710 + p_X \\implies p_X = 50\\text{ mm Hg}$."
  ),
  num(
    "In a steam distillation, an immiscible organic liquid with molar mass $150\\text{ g/mol}$ distills with water (molar mass $18\\text{ g/mol}$). If $p_{\\text{organic}} = 100\\text{ mm Hg}$ and $p_{\\text{water}} = 660\\text{ mm Hg}$, what is the ratio of mass of the organic liquid to mass of water in the distillate? (Round off to nearest integer)",
    1,
    "Mass ratio = $\\frac{p_{\\text{org}} M_{\\text{org}}}{p_{\\text{water}} M_{\\text{water}}} = \\frac{100 \\times 150}{660 \\times 18} = \\frac{15000}{11880} \\approx 1.26 \\approx 1$."
  ),
  num(
    "What is the minimum difference in boiling points (in $^\\circ\\text{C}$) between two miscible liquids above which simple distillation can be successfully used instead of fractional distillation?",
    25,
    "Simple distillation is effective when the boiling points differ by at least $25^\\circ\\text{C}$ (or $25-30^\\circ\\text{C}$). For smaller differences, fractional distillation is mandatory."
  ),
  num(
    "An organic substance has a distribution coefficient $K = C_{\\text{ether}} / C_{\\text{water}} = 5$. A solution contains $6.0\\text{ g}$ of the substance in $100\\text{ mL}$ of water. If it is extracted once with $100\\text{ mL}$ of ether, calculate the mass (in grams) of the substance extracted into ether.",
    5,
    "Let $x$ be the mass extracted into ether. $C_{\\text{ether}} = x / 100$, $C_{\\text{water}} = (6 - x) / 100$. $K = \\frac{x}{6 - x} = 5 \\implies x = 30 - 5x \\implies 6x = 30 \\implies x = 5.0\\text{ g}$."
  ),
  num(
    "A solid organic compound has a solubility of $3.0\\text{ g}$ per $100\\text{ mL}$ of water at $20^\\circ\\text{C}$ and $15.0\\text{ g}$ per $100\\text{ mL}$ of water at $100^\\circ\\text{C}$. How many grams of pure crystals will be recovered upon cooling $100\\text{ mL}$ of a saturated solution from $100^\\circ\\text{C}$ to $20^\\circ\\text{C}$?",
    12,
    "Mass dissolved at $100^\\circ\\text{C} = 15.0\\text{ g}$. Mass remaining in solution at $20^\\circ\\text{C} = 3.0\\text{ g}$. Recovered crystals = $15.0 - 3.0 = 12.0\\text{ g}$."
  ),
  num(
    "At standard atmospheric pressure $(760\\text{ mm Hg})$, what is the normal boiling point of pure glycerol (in $^\\circ\\text{C}$) at which it undergoes thermal decomposition?",
    290,
    "Pure glycerol boils at $290^\\circ\\text{C}$ under atmospheric pressure, where it decomposes to acrolein."
  ),
  num(
    "In the steam distillation of aniline (molar mass $93\\text{ g/mol}$) at $98.5^\\circ\\text{C}$, the vapor pressure of water is $717\\text{ mm Hg}$ and that of aniline is $43\\text{ mm Hg}$. Calculate the percentage by mass of aniline in the distillate. [Given molar mass of water $= 18\\text{ g/mol}$; round off to nearest integer]",
    24,
    "Mass ratio: $\\frac{w_{\\text{aniline}}}{w_{\\text{water}}} = \\frac{43 \\times 93}{717 \\times 18} = \\frac{3999}{12906} \\approx 0.3098$. Percentage of aniline = $\\frac{0.3098}{1 + 0.3098} \\times 100 = \\frac{0.3098}{1.3098} \\times 100 \\approx 23.65\\% \\approx 24\\%$."
  ),
  num(
    "A compound with distribution coefficient $K = C_{\\text{organic}} / C_{\\text{water}} = 2$ is dissolved in $100\\text{ mL}$ of water ($4.0\\text{ g}$ total solute). If the solution is extracted twice with two successive $50\\text{ mL}$ portions of organic solvent, what mass of compound (in grams) remains unextracted in the aqueous layer?",
    1,
    "Unextracted mass $W_2 = W \\left( \\frac{V_w}{V_w + K V_o} \\right)^2 = 4 \\times \\left( \\frac{100}{100 + 2 \\times 50} \\right)^2 = 4 \\times \\left( \\frac{100}{200} \\right)^2 = 4 \\times \\frac{1}{4} = 1.0\\text{ g}$."
  ),
  num(
    "What is the boiling point of pure water in $^\\circ\\text{C}$ at standard atmospheric pressure $(760\\text{ mm Hg})$?",
    100,
    "At standard atmospheric pressure $(1\\text{ atm} = 760\\text{ mm Hg})$, pure water boils at exactly $100^\\circ\\text{C}$."
  ),
  num(
    "If $10.0\\text{ g}$ of crude benzoic acid is recrystallized from hot water, yielding $8.5\\text{ g}$ of pure white crystals, what is the percentage recovery of benzoic acid?",
    85,
    "Percentage recovery = $(8.5 / 10.0) \\times 100 = 85\\%$."
  ),
  num(
    "In the steam distillation of bromobenzene (molar mass $157\\text{ g/mol}$) at $95^\\circ\\text{C}$, the vapor pressures are $p_{\\text{water}} = 640\\text{ mm Hg}$ and $p_{\\text{bromobenzene}} = 120\\text{ mm Hg}$. Given molar mass of water $= 18\\text{ g/mol}$, calculate the mass of steam (in grams) required to distill $100\\text{ g}$ of bromobenzene. (Round off to nearest integer)",
    61,
    "$\\frac{w_{\\text{water}}}{w_{\\text{bromo}}} = \\frac{p_{\\text{water}} M_{\\text{water}}}{p_{\\text{bromo}} M_{\\text{bromo}}} = \\frac{640 \\times 18}{120 \\times 157} = \\frac{11520}{18840} \\approx 0.6115$. For $100\\text{ g}$ bromobenzene, $w_{\\text{water}} = 0.6115 \\times 100 \\approx 61.15\\text{ g} \\approx 61\\text{ g}$."
  ),
  num(
    "Under a reduced pressure of $10\\text{ mm Hg}$, water boils at approximately what temperature in $^\\circ\\text{C}$? (Round off to nearest integer)",
    11,
    "At $10\\text{ mm Hg}$, the vapor pressure of water equals $10\\text{ mm Hg}$ at approximately $11.3^\\circ\\text{C} \\approx 11^\\circ\\text{C}$."
  ),
  num(
    "In an azeotropic mixture of ethanol and water, what is the percentage (by mass) of ethanol? (Round off to nearest integer)",
    96,
    "The constant-boiling azeotropic mixture contains $95.6\\%$ ethanol and $4.4\\%$ water by mass, which rounds to $96\\%$."
  )
];

// Validate all questions
let katexErrors = 0;
questions.forEach((q, idx) => {
  const fields = [q.question, ...(q.options || []), q.explanation];
  fields.forEach(f => {
    const res = validateKaTeX(f);
    if (!res.valid) {
      console.error(`Question ${idx + 1} KaTeX error:`, res.error, "in:", res.math);
      katexErrors++;
    }
  });
});

console.log(`Part 1 total questions: ${questions.length}`);
console.log(`Part 1 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && questions.length === 47) {
  const outputPath = path.join(__dirname, "data_purif_part1.js");
  const content = `module.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Successfully wrote ${outputPath}`);
} else {
  console.error("Validation failed. Not writing file.");
  process.exit(1);
}
