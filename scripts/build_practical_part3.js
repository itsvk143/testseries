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

const subtopic = "Purification methods";
const chapter = "Principles Related to Practical Chemistry";

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
    "Glycerol is purified by distillation under reduced pressure (vacuum distillation).",
    "Glycerol has a very high boiling point $(290^\\circ\\text{C})$ and decomposes at or below its normal boiling point.",
    0,
    "Glycerol decomposes into acrolein at its normal boiling point of $290^\\circ\\text{C}$. Under reduced pressure $(\\sim 12\\text{ mm Hg})$, it boils safely at around $180^\\circ\\text{C}$ without decomposition."
  ),
  ar(
    "Aniline is conveniently purified by steam distillation.",
    "Aniline is steam volatile and almost completely immiscible with water.",
    0,
    "Steam distillation is applicable to liquids that are immiscible with water, steam volatile, and possess significant vapor pressure at around $100^\\circ\\text{C}$. Aniline fulfills all these criteria."
  ),
  ar(
    "A mixture of $o$-nitrophenol and $p$-nitrophenol can be separated by steam distillation.",
    "$o$-Nitrophenol contains intramolecular hydrogen bonding and is steam volatile, whereas $p$-nitrophenol has intermolecular hydrogen bonding and is non-steam volatile.",
    0,
    "In $o$-nitrophenol, intramolecular H-bonding (chelation) minimizes association with water and increases volatility, allowing it to steam distill. In $p$-nitrophenol, extensive intermolecular H-bonding leads to association and a higher boiling point, making it non-steam volatile."
  ),
  ar(
    "In steam distillation, the mixture of water and organic liquid boils at a temperature lower than the boiling point of pure water.",
    "The total vapor pressure of two immiscible liquids is the sum of their individual vapor pressures, reaching atmospheric pressure at a lower temperature.",
    0,
    "For two immiscible liquids, $P_{\\text{total}} = p_{\\text{water}} + p_{\\text{organic}}$. Boiling occurs when $P_{\\text{total}} = P_{\\text{ext}} = 1\\text{ atm}$. Since $p_{\\text{organic}} > 0$, $p_{\\text{water}}$ must be less than $1\\text{ atm}$, so the boiling temperature is always below $100^\\circ\\text{C}$."
  ),
  ar(
    "Fractional distillation is employed to separate two miscible liquids whose boiling points differ by less than $25^\\circ\\text{C}$.",
    "Fractionating columns provide multiple successive condensation and vaporization cycles along the column.",
    0,
    "When boiling points are close ($< 25^\\circ\\text{C}$), a simple distillation cannot provide pure components. A fractionating column offers high surface area for continuous condensing and re-boiling, enriching the rising vapor in the more volatile component."
  ),
  ar(
    "A mixture of chloroform (b.p. $61^\\circ\\text{C}$) and aniline (b.p. $184^\\circ\\text{C}$) can be separated by simple distillation.",
    "Simple distillation is effective when the boiling points of two miscible, non-decomposing liquids differ by more than $25^\\circ\\text{C}$.",
    0,
    "The difference in boiling points between chloroform and aniline is $184 - 61 = 123^\\circ\\text{C}$, which is well above $25^\\circ\\text{C}$. Hence, simple distillation gives clean separation."
  ),
  ar(
    "A mixture of benzoic acid and naphthalene can be separated by chemical extraction using aqueous sodium bicarbonate solution.",
    "Benzoic acid dissolves in aqueous sodium bicarbonate with effervescence forming water-soluble sodium benzoate, while naphthalene remains insoluble.",
    0,
    "Benzoic acid reacts with $\\text{NaHCO}_3$ to form water-soluble sodium benzoate $(\\text{C}_6\\text{H}_5\\text{COONa})$, leaving neutral naphthalene insoluble in the aqueous layer. Acidification of the aqueous layer regenerates pure benzoic acid."
  ),
  ar(
    "Sublimation can be used to separate camphor from sodium chloride.",
    "Camphor directly transitions from solid to vapor phase upon heating, whereas sodium chloride is a non-volatile ionic solid.",
    0,
    "Camphor readily sublimes at mild temperatures, leaving non-volatile $\\text{NaCl}$ behind in the evaporating dish."
  ),
  ar(
    "In thin layer chromatography (TLC), the retention factor $(R_f)$ value of a compound is always less than or equal to 1.",
    "The distance traveled by any solute cannot exceed the distance traveled by the mobile phase solvent front.",
    0,
    "$R_f = \\frac{\\text{distance traveled by substance}}{\\text{distance traveled by solvent front}}$. Since the solute moves along with the advancing solvent, it cannot outrun the solvent front, making $R_f \\le 1$."
  ),
  ar(
    "In adsorption chromatography, the compound that is more strongly adsorbed on the stationary phase has a smaller $R_f$ value.",
    "Strong adsorption retards the movement of the compound along the stationary phase plate or column.",
    0,
    "A strongly adsorbed compound spends more time bound to the stationary phase and less time in the moving mobile phase, traveling a shorter distance and hence having a lower $R_f$ value."
  ),
  ar(
    "Paper chromatography is primarily an example of partition chromatography.",
    "The stationary phase in paper chromatography is water trapped within the cellulose fibers of the filter paper.",
    0,
    "In paper chromatography, moisture held in the cellulose matrix acts as the liquid stationary phase, and the components distribute (partition) between this water and the flowing organic solvent."
  ),
  ar(
    "Multiple extractions with smaller volumes of solvent are more efficient than a single extraction with the total volume of solvent.",
    "The mass of solute remaining unextracted decreases exponentially with the number of extraction steps according to Nernst's distribution law.",
    0,
    "By the distribution formula $W_n = W \\left( \\frac{V}{V + K v} \\right)^n$, using several small portions $v$ reduces the unextracted weight $W_n$ far more effectively than one large volume $V_{\\text{total}} = n v$."
  ),
  ar(
    "Fractional crystallization is used to separate two solids that have nearly identical solubilities in a given solvent at all temperatures.",
    "Fractional crystallization is based on differences in solubilities of compounds in a solvent at different temperatures.",
    3,
    "Assertion (A) is false: fractional crystallization requires a significant difference in solubilities (or solubility-temperature gradients). If solubilities are identical at all temperatures, fractional crystallization fails. Reason (R) is true."
  ),
  ar(
    "In column chromatography, the most strongly adsorbed component is eluted first from the bottom of the column.",
    "Elution order depends on the affinity of the component for the stationary phase relative to the mobile phase.",
    3,
    "Assertion (A) is false: the most weakly adsorbed component moves fastest and is eluted first; the most strongly adsorbed component is retained and eluted last. Reason (R) is true."
  ),
  ar(
    "Silica gel and alumina are commonly employed as stationary phases in thin layer chromatography.",
    "Both silica gel and alumina are highly porous materials with polar active sites that provide strong adsorption.",
    0,
    "Silica gel $(\\text{SiO}_2\\cdot x\\text{H}_2\\text{O})$ and alumina $(\\text{Al}_2\\text{O}_3)$ contain surface polar $-\\text{OH}$ and oxide groups that interact with polar functional groups through dipole and H-bonding interactions."
  ),
  ar(
    "Anthracene can be purified from non-volatile impurities by sublimation.",
    "Anthracene has a high vapor pressure below its melting point and readily sublimes upon heating.",
    0,
    "Anthracene, like naphthalene and camphor, sublimes readily, allowing straightforward separation from non-volatile ash or residues."
  ),
  ar(
    "A separating funnel is used for differential extraction of an organic compound from an aqueous solution.",
    "Differential extraction relies on the compound having a much higher solubility in an immiscible organic solvent than in water.",
    0,
    "An organic compound dissolved or suspended in water is extracted into an immiscible organic solvent (like ether or benzene) using a separating funnel because of its higher partition coefficient in the organic phase."
  ),
  ar(
    "In steam distillation, the ratio of masses of water and organic liquid in the distillate is directly proportional to the product of their vapor pressures and molar masses.",
    "According to Dalton's law and the ideal gas law, the number of moles of each component in the vapor is proportional to its partial vapor pressure.",
    0,
    "Since $\\frac{n_1}{n_2} = \\frac{p_1}{p_2}$ and $n = \\frac{w}{M}$, we have $\\frac{w_1 / M_1}{w_2 / M_2} = \\frac{p_1}{p_2}$, which gives $\\frac{w_1}{w_2} = \\frac{p_1 M_1}{p_2 M_2}$. Thus (R) correctly explains (A)."
  ),
  ar(
    "Distillation under reduced pressure is used during the concentration of sugarcane juice in the manufacture of sugar.",
    "Sucrose undergoes thermal decomposition and charring when boiled at its normal boiling point under atmospheric pressure.",
    0,
    "Sugar chars and caramelizes when boiled at normal atmospheric boiling points. Vacuum evaporation lowers the boiling point, preventing thermal degradation of sucrose."
  ),
  ar(
    "Coloured compounds can be detected visually on a TLC plate, but colorless compounds require visualizing agents like iodine vapors or UV light.",
    "Iodine vapors reversible adsorb onto many organic compounds forming brown spots, and fluorescent TLC plates show dark spots under short-wavelength UV.",
    0,
    "Colorless substances do not absorb visible light, so visualizing agents such as $\\text{I}_2$ vapor, UV irradiation, or spraying with ninhydrin/vanillin are required to locate the spots."
  ),
  ar(
    "Fractionating columns packed with glass beads provide better separation than an unpacked tube.",
    "The glass beads increase the surface area available for repeated heat exchange between the rising vapor and falling liquid condensate.",
    0,
    "Packed fractionating columns provide numerous theoretical plates by maximizing surface area for repeated evaporation and condensation cycles."
  ),
  ar(
    "An azeotropic mixture of ethanol and water $(95.6\\%\\text{ ethanol})$ cannot be separated into pure ethanol by simple or fractional distillation.",
    "An azeotrope boils at a constant temperature and has identical compositions in both liquid and vapor phases.",
    0,
    "At the azeotropic composition, vapor composition matches liquid composition, so fractional distillation cannot further concentrate the mixture beyond $95.6\\%$."
  ),
  ar(
    "Differential extraction of an organic acid from water is made more efficient by increasing the $\\text{pH}$ of the aqueous layer.",
    "At high $\\text{pH}$, carboxylic acids exist predominantly as neutral, non-ionized molecules.",
    3,
    "Assertion (A) is false: increasing $\\text{pH}$ converts $\\text{RCOOH}$ into water-soluble carboxylate ion $(\\text{RCOO}^-)$, which cannot partition into an organic solvent. Reason (R) is false: carboxylic acids ionize to anions at high $\\text{pH}$."
  ),
  ar(
    "The $R_f$ value of a given compound is independent of the solvent system used in thin layer chromatography.",
    "The $R_f$ value is a fundamental thermodynamic constant characteristic only of the solute molecule.",
    3,
    "Both (A) and (R) are false. In standard 4-option AR format: (A) is false because $R_f$ varies strongly with the mobile phase polarity and stationary phase properties."
  ),
  ar(
    "In gas chromatography, the mobile phase is an unreactive carrier gas such as helium or nitrogen.",
    "The carrier gas must not chemically react with the sample components or the stationary phase inside the column.",
    0,
    "In GC, an inert gas like $\\text{He}, \\text{N}_2,$ or $\\text{Ar}$ transports vaporized volatile solutes through the column without reacting with them."
  ),
  ar(
    "During recrystallization, an ideal solvent should dissolve a large amount of the solute at its boiling point and only a small amount at room temperature.",
    "A steep solubility-temperature gradient ensures maximum yield of pure crystals upon cooling the hot saturated solution.",
    0,
    "An effective recrystallization solvent must show high solubility at elevated temperatures and low solubility at low temperatures, ensuring high crystal recovery upon cooling."
  ),

  // ----------------------------------------------------
  // 8 MCQ QUESTIONS
  // ----------------------------------------------------
  mcq(
    "Which of the following mixtures CANNOT be separated by simple distillation?",
    [
      "Ether (b.p. $35^\\circ\\text{C}$) and toluene (b.p. $111^\\circ\\text{C}$)",
      "Chloroform (b.p. $61^\\circ\\text{C}$) and aniline (b.p. $184^\\circ\\text{C}$)",
      "Acetone (b.p. $56^\\circ\\text{C}$) and methyl alcohol (b.p. $65^\\circ\\text{C}$)",
      "Benzene (b.p. $80^\\circ\\text{C}$) and nitrobenzene (b.p. $211^\\circ\\text{C}$)"
    ],
    2,
    "Acetone and methyl alcohol have boiling points differing by only $9^\\circ\\text{C}$ (less than $25^\\circ\\text{C}$), requiring fractional distillation with an efficient column, not simple distillation."
  ),
  mcq(
    "Which of the following organic compounds can be purified by sublimation?",
    [
      "Urea",
      "Benzoic acid",
      "Glycerol",
      "Aniline"
    ],
    1,
    "Benzoic acid, camphor, naphthalene, and anthracene have high vapor pressures below their melting points and sublime readily without decomposing."
  ),
  mcq(
    "In thin layer chromatography, a compound traveled $3.6\\text{ cm}$ while the solvent front traveled $6.0\\text{ cm}$. The retention factor $(R_f)$ of the compound is:",
    [
      "$0.60$",
      "$1.67$",
      "$0.36$",
      "$0.40$"
    ],
    0,
    "$R_f = \\frac{\\text{distance traveled by compound}}{\\text{distance traveled by solvent front}} = \\frac{3.6}{6.0} = 0.60$."
  ),
  mcq(
    "Which technique is most suitable for separating a mixture of $o$-nitrophenol and $p$-nitrophenol?",
    [
      "Sublimation",
      "Steam distillation",
      "Vacuum distillation",
      "Fractional crystallization from ether"
    ],
    1,
    "$o$-Nitrophenol possesses intramolecular hydrogen bonding, making it steam volatile, whereas $p$-nitrophenol possesses intermolecular hydrogen bonding and is non-steam volatile. They are separated by steam distillation."
  ),
  mcq(
    "In paper chromatography, what acts as the stationary phase?",
    [
      "The cellulose fibers of the paper",
      "Water trapped inside the cellulose network of the paper",
      "The mobile organic solvent",
      "Air present in the pores of the paper"
    ],
    1,
    "Paper chromatography is a form of liquid-liquid partition chromatography where water molecules adsorbed and trapped in the cellulose network act as the stationary liquid phase."
  ),
  mcq(
    "During steam distillation of an organic liquid immiscible with water, the distillation temperature is:",
    [
      "Higher than the boiling point of both water and the organic liquid",
      "Equal to the boiling point of water",
      "Lower than the boiling point of water",
      "Equal to the boiling point of the organic liquid"
    ],
    2,
    "Since $P_{\\text{total}} = p_{\\text{water}} + p_{\\text{organic}} = 1\\text{ atm}$, $p_{\\text{water}} < 1\\text{ atm}$, which means water exerts this partial pressure at a temperature below $100^\\circ\\text{C}$. Thus, the mixture boils below the normal boiling point of water."
  ),
  mcq(
    "In column chromatography, which of the following statements is true regarding the movement of components?",
    [
      "The most strongly adsorbed component moves fastest and elutes first.",
      "The most weakly adsorbed component moves fastest and elutes first.",
      "All components move at identical speeds regardless of adsorption.",
      "Elution rate is independent of mobile phase polarity."
    ],
    1,
    "The component with the weakest adsorption to the stationary phase spends more time in the mobile phase, traveling fastest down the column and eluting first."
  ),
  mcq(
    "A liquid decomposes at its normal boiling point. Which method should be used to purify it safely?",
    [
      "Steam distillation",
      "Fractional distillation at atmospheric pressure",
      "Distillation under reduced pressure (vacuum distillation)",
      "Simple distillation"
    ],
    2,
    "Vacuum distillation lowers the external pressure, thereby reducing the boiling point below the decomposition temperature, allowing safe purification (e.g., purification of glycerol)."
  ),

  // ----------------------------------------------------
  // 13 NUMERICAL QUESTIONS
  // ----------------------------------------------------
  num(
    "In a thin layer chromatography experiment, the solvent front migrated a distance of $8.0\\text{ cm}$. A dye spot migrated $4.8\\text{ cm}$. What is the $R_f$ value multiplied by 100?",
    60,
    "$R_f = \\frac{4.8}{8.0} = 0.60$. Therefore, $R_f \\times 100 = 60$."
  ),
  num(
    "In steam distillation of an organic compound $X$ (molar mass $123\\text{ g/mol}$) immiscible with water, the mixture boils at $98^\\circ\\text{C}$ where the vapor pressure of water is $710\\text{ mm Hg}$ and atmospheric pressure is $760\\text{ mm Hg}$. What is the partial vapor pressure of compound $X$ in $\\text{mm Hg}$?",
    50,
    "Total pressure $P = p_{\\text{water}} + p_X$. Therefore, $p_X = 760 - 710 = 50\\text{ mm Hg}$."
  ),
  num(
    "In a steam distillation experiment, an immiscible organic liquid (molar mass $160\\text{ g/mol}$) distills with water (molar mass $18\\text{ g/mol}$). If the partial vapor pressure of water is $640\\text{ mm Hg}$ and that of the organic liquid is $120\\text{ mm Hg}$, what is the percentage (by mass) of the organic liquid in the distillate? (Round off to nearest integer)",
    63,
    "Mass ratio: $\\frac{w_X}{w_{\\text{water}}} = \\frac{p_X M_X}{p_{\\text{water}} M_{\\text{water}}} = \\frac{120 \\times 160}{640 \\times 18} = \\frac{19200}{11520} = 1.667$. Mass percentage of $X = \\frac{w_X}{w_X + w_{\\text{water}}} \\times 100 = \\frac{1.667}{2.667} \\times 100 \\approx 62.5\\% \\approx 63\\%$."
  ),
  num(
    "A solute has a distribution coefficient $K = \\frac{C_{\\text{organic}}}{C_{\\text{water}}} = 5$. A solution of $2.0\\text{ g}$ of the solute in $100\\text{ mL}$ of water is extracted with $100\\text{ mL}$ of organic solvent in a single extraction. How many grams of solute remain in the aqueous layer? [Report answer multiplied by 100 to get an integer]",
    33,
    "Let $w$ be mass remaining in water. $C_{\\text{water}} = w / 100$. $C_{\\text{org}} = (2 - w) / 100$. $K = \\frac{2 - w}{w} = 5 \\implies 2 - w = 5w \\implies 6w = 2 \\implies w = 1/3 \\approx 0.333\\text{ g}$. Multiplying by 100 gives 33."
  ),
  num(
    "In thin layer chromatography, component $A$ travels $2.5\\text{ cm}$, component $B$ travels $5.0\\text{ cm}$, and the solvent front travels $10.0\\text{ cm}$. What is the difference between the $R_f$ values of $B$ and $A$ multiplied by 100?",
    25,
    "$R_f(A) = 2.5 / 10 = 0.25$. $R_f(B) = 5.0 / 10 = 0.50$. Difference = $0.50 - 0.25 = 0.25$. Multiplied by 100 = 25."
  ),
  num(
    "In a fractional distillation setup, what is the minimum difference in boiling point (in $^\\circ\\text{C}$) above which simple distillation is preferred over fractional distillation?",
    25,
    "Simple distillation is generally used when the difference in boiling points between two miscible liquids is at least $25^\\circ\\text{C}$ (or $25-30^\\circ\\text{C}$). For differences below $25^\\circ\\text{C}$, fractional distillation is required."
  ),
  num(
    "In a TLC experiment, the solvent front advanced $12.5\\text{ cm}$. A solute has an $R_f$ value of $0.64$. What distance (in $\\text{cm}$) was traveled by the solute?",
    8,
    "Distance traveled by solute = $R_f \\times \\text{solvent distance} = 0.64 \\times 12.5 = 8.0\\text{ cm}$."
  ),
  num(
    "During the steam distillation of bromobenzene (molar mass $157\\text{ g/mol}$) at $95^\\circ\\text{C}$, the vapor pressures are $p_{\\text{water}} = 640\\text{ mm Hg}$ and $p_{\\text{bromobenzene}} = 120\\text{ mm Hg}$. What is the ratio of mass of bromobenzene to mass of water in the distillate? (Round off to nearest integer)",
    2,
    "Mass ratio = $\\frac{p_{\\text{bromo}} M_{\\text{bromo}}}{p_{\\text{water}} M_{\\text{water}}} = \\frac{120 \\times 157}{640 \\times 18} = \\frac{18840}{11520} \\approx 1.635 \\approx 2$."
  ),
  num(
    "A solid organic compound $Y$ has a solubility of $2.0\\text{ g}$ per $100\\text{ mL}$ of water at $20^\\circ\\text{C}$ and $10.0\\text{ g}$ per $100\\text{ mL}$ of water at $100^\\circ\\text{C}$. If a saturated solution prepared in $100\\text{ mL}$ of boiling water is cooled to $20^\\circ\\text{C}$, how many grams of pure compound $Y$ crystallize out?",
    8,
    "Mass dissolved at $100^\\circ\\text{C} = 10.0\\text{ g}$. Mass remaining dissolved at $20^\\circ\\text{C} = 2.0\\text{ g}$. Mass crystallized = $10.0 - 2.0 = 8.0\\text{ g}$."
  ),
  num(
    "If $10.0\\text{ g}$ of a solute is dissolved in $100\\text{ mL}$ of water and extracted twice with two successive $50\\text{ mL}$ portions of ether $(K = C_{\\text{ether}} / C_{\\text{water}} = 4)$, what is the mass (in grams) of solute remaining unextracted in the aqueous layer? (Round off to nearest integer)",
    1,
    "Distribution formula: $W_2 = W \\left( \\frac{V_w}{V_w + K V_e} \\right)^2 = 10 \\times \\left( \\frac{100}{100 + 4 \\times 50} \\right)^2 = 10 \\times \\left( \\frac{100}{300} \\right)^2 = 10 \\times \\frac{1}{9} \\approx 1.11\\text{ g} \\approx 1\\text{ g}$."
  ),
  num(
    "In TLC, what is the maximum theoretical value that a retention factor $(R_f)$ can possess?",
    1,
    "Since the solute front cannot exceed the solvent front, the maximum possible $R_f$ value is $1.0$ (when the solute moves identically with the solvent front)."
  ),
  num(
    "What is the boiling point (in $^\\circ\\text{C}$) of pure glycerol at standard atmospheric pressure $(1\\text{ atm})$ where it decomposes?",
    290,
    "Pure glycerol boils at $290^\\circ\\text{C}$ at $760\\text{ mm Hg}$, at which temperature it undergoes decomposition to acrolein."
  ),
  num(
    "Aniline boils at $184^\\circ\\text{C}$ at atmospheric pressure. Under steam distillation at $98.5^\\circ\\text{C}$, the vapor pressure of water is $717\\text{ mm Hg}$ and that of aniline is $43\\text{ mm Hg}$. Given molar masses of aniline ($93\\text{ g/mol}$) and water ($18\\text{ g/mol}$), calculate the mass (in grams) of steam required to distill $40\\text{ g}$ of aniline. (Round off to nearest integer)",
    129,
    "Mass ratio: $\\frac{w_{\\text{water}}}{w_{\\text{aniline}}} = \\frac{p_{\\text{water}} M_{\\text{water}}}{p_{\\text{aniline}} M_{\\text{aniline}}} = \\frac{717 \\times 18}{43 \\times 93} = \\frac{12906}{3999} \\approx 3.227$. Therefore, $w_{\\text{water}} = 3.227 \\times 40 = 129.1\\text{ g} \\approx 129\\text{ g}$."
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

console.log(`Part 3 total questions: ${questions.length}`);
console.log(`Part 3 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && questions.length === 47) {
  const outputPath = path.join(__dirname, "data_practical_part3.js");
  const content = `module.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Successfully wrote ${outputPath}`);
} else {
  console.error("Validation failed. Not writing file.");
  process.exit(1);
}
