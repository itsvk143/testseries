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

const subtopic = "Volumetric titration (acid-base and redox titration)";
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
    "In $\\text{KMnO}_4$ titrations, dilute sulphuric acid is used to acidify the medium, but hydrochloric acid is avoided.",
    "Hydrochloric acid is oxidized by $\\text{KMnO}_4$ to chlorine gas, leading to an abnormally high consumption of $\\text{KMnO}_4$.",
    0,
    "$\\text{KMnO}_4$ oxidizes $\\text{Cl}^-$ in $\\text{HCl}$ to $\\text{Cl}_2$ gas: $2\\text{MnO}_4^- + 10\\text{Cl}^- + 16\\text{H}^+ \\to 2\\text{Mn}^{2+} + 5\\text{Cl}_2 + 8\\text{H}_2\\text{O}$. This consumes extra $\\text{KMnO}_4$, yielding erroneous results. $\\text{H}_2\\text{SO}_4$ is not oxidized and is therefore preferred."
  ),
  ar(
    "Nitric acid cannot be used to acidify the medium in $\\text{KMnO}_4$ redox titrations.",
    "Nitric acid is itself a strong oxidizing agent and competes with $\\text{KMnO}_4$ in oxidizing the reducing agent.",
    0,
    "$\\text{HNO}_3$ is a powerful oxidizing agent. It would oxidize part of the reducing agent (e.g., $\\text{Fe}^{2+}$ or oxalate), resulting in lower consumption of $\\text{KMnO}_4$ and inaccurate quantitative determination."
  ),
  ar(
    "In the titration of oxalic acid against $\\text{KMnO}_4$, the oxalic acid solution is warmed to $50-60^\\circ\\text{C}$ before titrating.",
    "The initial reaction between oxalic acid and permanganate is slow at room temperature, but is autocatalyzed by the $\\text{Mn}^{2+}$ ions produced.",
    0,
    "At room temperature, the activation energy for the oxidation of oxalate by permanganate is high. Warming to $50-60^\\circ\\text{C}$ initiates the reaction; once $\\text{Mn}^{2+}$ ions are generated, they act as an autocatalyst, allowing subsequent decolorization to occur rapidly."
  ),
  ar(
    "$\\text{KMnO}_4$ acts as a self-indicator in redox titrations.",
    "The intensely purple $\\text{MnO}_4^-$ ion is reduced to the practically colorless $\\text{Mn}^{2+}$ ion, so a single drop of excess $\\text{KMnO}_4$ gives a permanent faint pink color.",
    0,
    "In acidic solution, dark purple $\\text{MnO}_4^-$ is reduced to faint pink/colorless $\\text{Mn}^{2+}$. At the endpoint, the slightest excess of $\\text{KMnO}_4$ imparts a persistent faint pink tint to the solution, requiring no external indicator."
  ),
  ar(
    "Mohr's salt solution is not heated before titration with standard $\\text{KMnO}_4$ solution.",
    "Heating Mohr's salt solution causes aerial oxidation of ferrous ions $(\\text{Fe}^{2+})$ to ferric ions $(\\text{Fe}^{3+})$ by atmospheric oxygen.",
    0,
    "Unlike oxalic acid, $\\text{Fe}^{2+}$ reacts instantaneously with $\\text{KMnO}_4$ at room temperature. Heating is strictly avoided because hot $\\text{Fe}^{2+}$ is readily oxidized by dissolved atmospheric oxygen, leading to an underestimation of $\\text{Fe}^{2+}$."
  ),
  ar(
    "Sodium hydroxide is not used as a primary standard in volumetric analysis.",
    "Solid sodium hydroxide is highly hygroscopic and absorbs carbon dioxide from the atmosphere to form sodium carbonate.",
    0,
    "Solid $\\text{NaOH}$ deliquesces by absorbing atmospheric moisture and reacts with atmospheric $\\text{CO}_2$ to form $\\text{Na}_2\\text{CO}_3$. Hence, its exact mass cannot be weighed accurately, making it a secondary standard."
  ),
  ar(
    "Oxalic acid dihydrate $(\\text{H}_2\\text{C}_2\\text{O}_4\\cdot 2\\text{H}_2\\text{O})$ is widely used as a primary standard in acid-base and redox titrations.",
    "Oxalic acid dihydrate is obtained in high purity, has a definite crystalline composition, and is stable in air without efflorescing.",
    0,
    "Oxalic acid dihydrate satisfies all criteria for a primary standard: high chemical purity, known stoichoimetry, stability against atmospheric moisture, and a high equivalent mass."
  ),
  ar(
    "Phenolphthalein is a suitable indicator for the titration of a weak acid (such as acetic acid) against a strong base (such as sodium hydroxide).",
    "At the equivalence point of a weak acid-strong base titration, the solution is basic $(\\text{pH} \\approx 8.5-9.0)$ due to salt hydrolysis, which matches the $\\text{pH}$ transition range of phenolphthalein $(8.3-10.0)$.",
    0,
    "Hydrolysis of the basic salt (e.g., sodium acetate) creates a basic equivalence point $(\\text{pH} > 7)$. Phenolphthalein changes color from colorless to pink in the range $8.3-10.0$, precisely detecting this equivalence point."
  ),
  ar(
    "Methyl orange is not a suitable indicator for the titration of acetic acid against sodium hydroxide.",
    "Methyl orange changes color in the acidic $\\text{pH}$ range $(3.1-4.4)$, well before the equivalence point is reached in a weak acid-strong base titration.",
    0,
    "In the titration of a weak acid with a strong base, the vertical $\\text{pH}$ jump occurs between $\\text{pH } 7$ and $10$. Methyl orange changes color at $\\text{pH } 3.1-4.4$, signaling a false premature endpoint."
  ),
  ar(
    "In the titration of sodium carbonate with hydrochloric acid using methyl orange, the color changes from yellow to orange-red at the endpoint.",
    "Methyl orange exists as a yellow benzenoid anion in alkaline/neutral solution and converts to a red quinonoid cation in acidic solution.",
    0,
    "Methyl orange is yellow above $\\text{pH } 4.4$ and turns pink/red below $\\text{pH } 3.1$. When all $\\text{Na}_2\\text{CO}_3$ is neutralized by $\\text{HCl}$ forming $\\text{H}_2\\text{CO}_3$, the slight excess of $\\text{HCl}$ lowers the $\\text{pH}$ below $4$, changing the indicator color to orange-red."
  ),
  ar(
    "In the redox titration of $\\text{Fe}^{2+}$ with $\\text{K}_2\\text{Cr}_2\\text{O}_7$ using diphenylamine as indicator, phosphoric acid $(\\text{H}_3\\text{PO}_4)$ is added to the solution.",
    "Phosphoric acid forms a stable, colorless complex $[\\text{Fe}(\\text{HPO}_4)]^+$ with $\\text{Fe}^{3+}$, lowering the reduction potential of the $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ system and preventing the yellow color of $\\text{Fe}^{3+}$ from masking the endpoint.",
    0,
    "Addition of $\\text{H}_3\\text{PO}_4$ complexes with $\\text{Fe}^{3+}$, eliminating yellow coloration and shifting the formal reduction potential of the iron couple well below the oxidation potential of diphenylamine, ensuring a sharp violet endpoint."
  ),
  ar(
    "Potassium dichromate is preferred over potassium permanganate as a primary standard in redox titrations.",
    "Potassium dichromate can be obtained in an exceptionally pure state, is non-hygroscopic, and its aqueous solutions are stable indefinitely.",
    0,
    "Unlike $\\text{KMnO}_4$, which contains traces of $\\text{MnO}_2$ and decomposes slowly in aqueous solution under light, $\\text{K}_2\\text{Cr}_2\\text{O}_7$ is highly stable, non-deliquescent, and can be weighed directly to prepare primary standard solutions."
  ),
  ar(
    "In iodometric titrations, starch solution is added only towards the end of the titration when the solution becomes pale yellow.",
    "If starch is added at the beginning, a large amount of iodine forms an irreversible or slowly decomposing starch-iodine complex, causing sluggish endpoints.",
    0,
    "At high iodine concentrations, starch forms a dense blue inclusion complex that releases iodine very slowly, leading to inaccurate end-point readings. It is added only when the bulk of iodine has been reduced to iodide."
  ),
  ar(
    "The equivalent mass of $\\text{KMnO}_4$ in acidic medium is equal to its molar mass divided by 5.",
    "In acidic solution, the permanganate ion $(\\text{MnO}_4^-)$ gains 5 electrons to be reduced to the manganese(II) ion $(\\text{Mn}^{2+})$.",
    0,
    "The half-reaction is: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. Since 5 moles of electrons are transferred per mole of $\\text{KMnO}_4$, the $n$-factor is 5, and equivalent mass $= M/5$."
  ),
  ar(
    "The equivalent mass of potassium dichromate in acidic medium is its molar mass divided by 6.",
    "In acidic medium, each chromium atom in the dichromate ion undergoes a change in oxidation state from $+6$ to $+3$.",
    0,
    "Reaction: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Two chromium atoms change from $+6$ to $+3$, involving a total gain of 6 electrons. Thus $n\\text{-factor} = 6$ and equivalent mass $= M/6$."
  ),
  ar(
    "A sharp endpoint cannot be obtained in the titration of a weak acid against a weak base using visual acid-base indicators.",
    "Near the equivalence point of a weak acid-weak base titration, the $\\text{pH}$ changes very gradually without a steep vertical jump.",
    0,
    "Because both acid and base are weak, the titration curve has no vertical inflection (jump) at the equivalence point. Consequently, no visual indicator can change color sharply."
  ),
  ar(
    "When reading the burette volume for deeply colored solutions like $\\text{KMnO}_4$, the upper meniscus is recorded.",
    "Due to intense coloration and opacity of the liquid, the lower meniscus is not clearly visible.",
    0,
    "For intensely colored or opaque liquids like $\\text{KMnO}_4$, the lower meniscus cannot be seen distinctly; hence, the upper meniscus touching the graduation mark is recorded."
  ),
  ar(
    "The equivalent mass of sodium thiosulphate pentahydrate $(\\text{Na}_2\\text{S}_2\\text{O}_3\\cdot 5\\text{H}_2\\text{O})$ in iodometric titration is equal to its molar mass.",
    "In reaction with iodine, two thiosulphate ions lose two electrons to form the tetrathionate ion $(\\text{S}_4\\text{O}_6^{2-})$.",
    0,
    "Reaction: $2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\to \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$. Two moles of thiosulphate transfer 2 electrons, which equals 1 electron per mole of thiosulphate. Hence, $n\\text{-factor} = 1$ and equivalent mass $= M$."
  ),
  ar(
    "The color of phenolphthalein in strongly acidic solutions $(\\text{pH} < 0)$ is pink.",
    "Phenolphthalein is completely deprotonated into its dianion form in concentrated acidic solutions.",
    3,
    "Assertion (A) is false: phenolphthalein is colorless in acidic solution $(\\text{pH } 0-8.2)$ and only turns pink in basic solution $(\\text{pH } 8.3-10.0)$. Reason (R) is false: deprotonation occurs in alkaline medium, not strongly acidic medium."
  ),
  ar(
    "In the standardization of $\\text{NaOH}$ solution, potassium hydrogen phthalate (KHP) is commonly used as a primary standard.",
    "Potassium hydrogen phthalate is an anhydrous, non-hygroscopic mono-protic solid acid of high purity and high molar mass.",
    0,
    "KHP $(\\text{KHC}_8\\text{H}_4\\text{O}_4$, molar mass $204.2\\text{ g/mol})$ reacts in a $1:1$ stoichiometric ratio with $\\text{NaOH}$. Its high purity and stability make it an outstanding primary standard."
  ),
  ar(
    "During the titration of $\\text{Na}_2\\text{CO}_3$ with $\\text{HCl}$, phenolphthalein indicates the neutralization of carbonate to bicarbonate.",
    "At the phenolphthalein endpoint, the reaction $\\text{CO}_3^{2-} + \\text{H}^+ \\to \\text{HCO}_3^-$ is complete at $\\text{pH} \\approx 8.3$.",
    0,
    "Neutralization of $\\text{Na}_2\\text{CO}_3$ occurs in two distinct stages. The first stage $(\\text{Na}_2\\text{CO}_3 + \\text{HCl} \\to \\text{NaHCO}_3 + \\text{NaCl})$ finishes at $\\text{pH } 8.3$, exactly where phenolphthalein changes from pink to colorless."
  ),
  ar(
    "In the titration of oxalic acid against $\\text{KMnO}_4$, the initial few drops of $\\text{KMnO}_4$ decolorize slowly, but subsequent drops decolorize almost instantaneously.",
    "The reaction is autocatalytic, and the $\\text{Mn}^{2+}$ ions formed act as a catalyst for the oxidation of oxalic acid.",
    0,
    "Initially, the reaction has a high activation barrier in the absence of catalyst. Once $\\text{Mn}^{2+}$ is generated, it coordinates with oxalate and facilitates fast electron transfer, acting as an autocatalyst."
  ),
  ar(
    "A standard solution of $\\text{KMnO}_4$ should be stored in dark amber-colored bottles.",
    "Aqueous $\\text{KMnO}_4$ solutions slowly decompose photochemically in the presence of sunlight to deposit $\\text{MnO}_2$.",
    0,
    "Reaction: $4\\text{MnO}_4^- + 2\\text{H}_2\\text{O} \\xrightarrow{h\\nu} 4\\text{MnO}_2\\downarrow + 3\\text{O}_2 + 4\\text{OH}^-$. Amber glass prevents light-induced decomposition and maintains the titer value."
  ),
  ar(
    "Burettes and pipettes should be rinsed with distilled water and then with the solution to be filled before starting a titration.",
    "Rinsing with the solution prevents dilution of the titrant or analyte by remaining drops of water.",
    0,
    "Rinsing with the solution to be delivered coats the inner walls and displaces residual water droplets, ensuring that the concentration of the delivered solution remains exact."
  ),
  ar(
    "The conical flask used for receiving the pipetted solution during a titration should be thoroughly dried before adding the analyte.",
    "Residual water in the conical flask would change the number of moles of the titrated substance pipetted into it.",
    3,
    "Assertion (A) is false: the conical flask does not need to be dried; rinsing it with distilled water is completely fine. Reason (R) is false: adding water to the flask alters the concentration but does not change the total number of moles of the analyte transferred."
  ),
  ar(
    "Methyl red is a suitable indicator for the titration of ammonium hydroxide with hydrochloric acid.",
    "The salt ammonium chloride formed at the equivalence point undergoes cationic hydrolysis to produce a slightly acidic solution $(\\text{pH} \\approx 5)$.",
    0,
    "Titration of a strong acid $(\\text{HCl})$ with a weak base $(\\text{NH}_4\\text{OH})$ produces $\\text{NH}_4\\text{Cl}$. Cationic hydrolysis of $\\text{NH}_4^+$ yields an acidic equivalence point $(\\text{pH} \\approx 5.1)$, matching the transition range of methyl red $(4.4-6.2)$."
  ),

  // ----------------------------------------------------
  // 8 MCQ QUESTIONS
  // ----------------------------------------------------
  mcq(
    "Which of the following substances CANNOT be used as a primary standard in volumetric analysis?",
    [
      "Oxalic acid dihydrate",
      "Ferrous ammonium sulphate (Mohr's salt)",
      "Sodium hydroxide",
      "Anhydrous sodium carbonate"
    ],
    2,
    "Sodium hydroxide is deliquescent and absorbs atmospheric carbon dioxide and moisture rapidly, making it unsuitable as a primary standard."
  ),
  mcq(
    "In the titration of $\\text{FeSO}_4$ with $\\text{KMnO}_4$ in acidic medium, why is $\\text{HCl}$ NOT used to provide the acidic medium?",
    [
      "$\\text{HCl}$ reduces $\\text{Fe}^{2+}$ to metallic iron.",
      "$\\text{HCl}$ is oxidized by $\\text{KMnO}_4$ to chlorine gas, causing excess consumption of $\\text{KMnO}_4$.",
      "$\\text{HCl}$ prevents the reduction of $\\text{MnO}_4^-$.",
      "$\\text{HCl}$ precipitates iron as insoluble $\\text{FeCl}_2$."
    ],
    1,
    "$\\text{KMnO}_4$ is a strong enough oxidizing agent to oxidize chloride ions to $\\text{Cl}_2$ gas, consuming extra $\\text{KMnO}_4$ and yielding falsely elevated results."
  ),
  mcq(
    "Which indicator is most appropriate for the titration of a weak acid (such as $\\text{CH}_3\\text{COOH}$) against a strong base (such as $\\text{NaOH}$)?",
    [
      "Methyl orange",
      "Methyl red",
      "Phenolphthalein",
      "Bromocresol green"
    ],
    2,
    "The equivalence point for weak acid-strong base occurs in the basic region $(\\text{pH } 8-9)$ due to hydrolysis of the conjugate base. Phenolphthalein $(\\text{pH } 8.3-10.0)$ gives a sharp color change exactly at this equivalence point."
  ),
  mcq(
    "What is the equivalent mass of $\\text{KMnO}_4$ (molar mass $= M$) in an acidic medium during a redox titration?",
    [
      "$M / 1$",
      "$M / 3$",
      "$M / 5$",
      "$M / 6$"
    ],
    2,
    "In acidic medium: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. The change in oxidation state is from $+7$ to $+2$ ($5$ electrons gained), so equivalent mass $= M / 5$."
  ),
  mcq(
    "In the redox titration of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ against Mohr's salt using diphenylamine as indicator, what is the role of adding phosphoric acid $(\\text{H}_3\\text{PO}_4)$?",
    [
      "To precipitate $\\text{Cr}^{3+}$ ions",
      "To complex $\\text{Fe}^{3+}$ ions and lower the formal potential of the $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ system",
      "To act as a primary oxidant",
      "To prevent the reduction of dichromate"
    ],
    1,
    "Phosphoric acid complexes with yellow $\\text{Fe}^{3+}$ to form colorless $[\\text{Fe}(\\text{HPO}_4)]^+$, suppressing the interfering yellow color and lowering the oxidation potential of $\\text{Fe}^{3+}/\\text{Fe}^{2+}$, which sharpens the diphenylamine endpoint transition."
  ),
  mcq(
    "In the titration of sodium carbonate $(\\text{Na}_2\\text{CO}_3)$ with standard $\\text{HCl}$, what fraction of the total acid required for complete neutralization is consumed when phenolphthalein reaches its endpoint?",
    [
      "One-fourth",
      "One-half",
      "Three-fourths",
      "Entire amount"
    ],
    1,
    "Phenolphthalein indicates completion of the first step: $\\text{Na}_2\\text{CO}_3 + \\text{HCl} \\to \\text{NaHCO}_3 + \\text{NaCl}$. This corresponds to exactly half of the total volume of $\\text{HCl}$ needed to convert carbonate to $\\text{CO}_2$."
  ),
  mcq(
    "In iodometric titration, starch solution is used as an indicator. What is the observed color at the endpoint when iodine is titrated with standard sodium thiosulphate?",
    [
      "Appearance of deep blue color",
      "Disappearance of deep blue color to colorless",
      "Change from pink to colorless",
      "Change from orange to green"
    ],
    1,
    "Free iodine forms a deep blue inclusion complex with starch. As thiosulphate reduces $\\text{I}_2$ completely to $\\text{I}^-$, the deep blue color suddenly vanishes, leaving a clear, colorless solution."
  ),
  mcq(
    "When reading a burette containing a colorless or transparent solution, the correct procedure is to read the:",
    [
      "Upper meniscus at eye level",
      "Lower meniscus at eye level",
      "Middle of the curved liquid surface",
      "Highest edge of the liquid adhering to the glass"
    ],
    1,
    "For colorless and transparent solutions, reading is taken at the bottom (lower meniscus) tangent to the graduation mark, with the eye aligned horizontally to eliminate parallax error."
  ),

  // ----------------------------------------------------
  // 13 NUMERICAL QUESTIONS
  // ----------------------------------------------------
  num(
    "What is the $n$-factor of potassium permanganate $(\\text{KMnO}_4)$ in an acidic medium redox titration?",
    5,
    "In acidic medium: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. The change in oxidation state is $+7 - (+2) = 5$. Thus, the $n$-factor is 5."
  ),
  num(
    "What is the $n$-factor of potassium dichromate $(\\text{K}_2\\text{Cr}_2\\text{O}_7)$ in an acidic medium redox titration?",
    6,
    "In acidic medium: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Each Cr changes from $+6$ to $+3$, giving a total change of $2 \\times 3 = 6$ electrons. The $n$-factor is 6."
  ),
  num(
    "How many moles of Mohr's salt $(\\text{FeSO}_4\\cdot(\\text{NH}_4)_2\\text{SO}_4\\cdot 6\\text{H}_2\\text{O})$ are oxidized completely by 1 mole of $\\text{KMnO}_4$ in acidic medium?",
    5,
    "The balanced reaction is: $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\to \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$. Exactly 5 moles of $\\text{Fe}^{2+}$ (Mohr's salt) are oxidized per mole of $\\text{KMnO}_4$."
  ),
  num(
    "How many moles of oxalic acid $(\\text{H}_2\\text{C}_2\\text{O}_4)$ are oxidized completely by 2 moles of $\\text{KMnO}_4$ in acidic medium?",
    5,
    "The balanced equation is: $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\to 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. Thus, 2 moles of $\\text{KMnO}_4$ oxidize 5 moles of oxalic acid."
  ),
  num(
    "How many moles of $\\text{Fe}^{2+}$ (from Mohr's salt) are oxidized completely by 1 mole of potassium dichromate $(\\text{K}_2\\text{Cr}_2\\text{O}_7)$ in acidic medium?",
    6,
    "The balanced equation is: $\\text{Cr}_2\\text{O}_7^{2-} + 6\\text{Fe}^{2+} + 14\\text{H}^+ \\to 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$. Exactly 6 moles of $\\text{Fe}^{2+}$ are oxidized per mole of $\\text{K}_2\\text{Cr}_2\\text{O}_7$."
  ),
  num(
    "What is the equivalent mass of oxalic acid dihydrate $(\\text{H}_2\\text{C}_2\\text{O}_4\\cdot 2\\text{H}_2\\text{O}$, molar mass $= 126\\text{ g/mol})$ in an acid-base neutralization titration?",
    63,
    "Oxalic acid is a dibasic acid containing 2 replaceable protons: $\\text{H}_2\\text{C}_2\\text{O}_4 + 2\\text{OH}^- \\to \\text{C}_2\\text{O}_4^{2-} + 2\\text{H}_2\\text{O}$. Basicities $= 2$. Equivalent mass $= 126 / 2 = 63\\text{ g/eq}$."
  ),
  num(
    "Calculate the mass (in grams) of oxalic acid dihydrate $(\\text{H}_2\\text{C}_2\\text{O}_4\\cdot 2\\text{H}_2\\text{O}$, molar mass $= 126\\text{ g/mol})$ required to prepare $250\\text{ mL}$ of a $0.1\\text{ M}$ standard solution. (Report answer multiplied by 10 to give an integer)",
    32,
    "Mass required $= M \\times \\text{molar mass} \\times V(\\text{L}) = 0.1 \\times 126 \\times 0.250 = 3.15\\text{ g}$. Multiplying by 10 gives $31.5 \\approx 32$ (or $31.5$ rounded)."
  ),
  num(
    "If $25.0\\text{ mL}$ of a $0.1\\text{ M}$ oxalic acid solution requires $20.0\\text{ mL}$ of a $\\text{KMnO}_4$ solution for complete oxidation in acidic medium, calculate the molarity of the $\\text{KMnO}_4$ solution. [Report answer multiplied by 1000 to get an integer]",
    50,
    "Equivalents of oxalic acid = equivalents of $\\text{KMnO}_4$. For oxalic acid, $n\\text{-factor} = 2$, so Normality $= 0.1 \\times 2 = 0.2\\text{ N}$. $N_1 V_1 = N_2 V_2 \\implies 0.2 \\times 25 = N_2 \\times 20 \\implies N_2 = 5 / 20 = 0.25\\text{ N}$. For $\\text{KMnO}_4$, $n\\text{-factor} = 5$, so Molarity $= 0.25 / 5 = 0.05\\text{ M}$. Multiplied by $1000 = 50$."
  ),
  num(
    "What is the $n$-factor of sodium thiosulphate $(\\text{Na}_2\\text{S}_2\\text{O}_3)$ in the iodometric titration with iodine, where it is oxidized to tetrathionate $(\\text{S}_4\\text{O}_6^{2-})$?",
    1,
    "In the reaction $2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\to \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$, two thiosulphate ions lose 2 electrons (1 electron per thiosulphate ion). Therefore, the $n$-factor of $\\text{Na}_2\\text{S}_2\\text{O}_3$ is 1."
  ),
  num(
    "A $20.0\\text{ mL}$ sample of $\\text{HCl}$ solution is completely neutralized by $25.0\\text{ mL}$ of $0.10\\text{ M } \\text{NaOH}$ solution. Calculate the concentration of the $\\text{HCl}$ solution in $\\text{g/L}$. [Molar mass of $\\text{HCl} = 36.5\\text{ g/mol}$, round off to nearest integer]",
    5,
    "Molarity of $\\text{HCl} = \\frac{0.10 \\times 25.0}{20.0} = 0.125\\text{ M}$. Concentration in $\\text{g/L} = 0.125 \\times 36.5 = 4.5625\\text{ g/L} \\approx 5\\text{ g/L}$."
  ),
  num(
    "In the titration of a $0.1\\text{ M}$ solution of sodium carbonate $(\\text{Na}_2\\text{CO}_3)$ with $0.1\\text{ M } \\text{HCl}$, what is the volume (in $\\text{mL}$) of $\\text{HCl}$ needed to reach the methyl orange endpoint if $20\\text{ mL}$ of $\\text{Na}_2\\text{CO}_3$ is pipetted out?",
    40,
    "Methyl orange indicates complete neutralization: $\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{CO}_2 + \\text{H}_2\\text{O}$. Moles of $\\text{HCl} = 2 \\times \\text{moles of } \\text{Na}_2\\text{CO}_3 = 2 \\times (0.1 \\times 20) = 4\\text{ mmol}$. Volume of $0.1\\text{ M } \\text{HCl} = 4 / 0.1 = 40\\text{ mL}$."
  ),
  num(
    "In the titration of a mixture of $\\text{NaOH}$ and $\\text{Na}_2\\text{CO}_3$, $20.0\\text{ mL}$ of the mixture required $15.0\\text{ mL}$ of $0.1\\text{ M } \\text{HCl}$ using phenolphthalein indicator, and a further $5.0\\text{ mL}$ of the same $\\text{HCl}$ using methyl orange indicator. What is the millimoles of $\\text{Na}_2\\text{CO}_3$ present in the $20.0\\text{ mL}$ mixture? (Report answer multiplied by 10 to give an integer)",
    5,
    "Volume for second half of $\\text{Na}_2\\text{CO}_3 = 5.0\\text{ mL}$. Hence, volume for full $\\text{Na}_2\\text{CO}_3 = 2 \\times 5.0 = 10.0\\text{ mL}$. Millimoles of $\\text{Na}_2\\text{CO}_3 = 0.1 \\times 5.0 = 0.5\\text{ mmol}$. Multiplied by 10 = 5."
  ),
  num(
    "Calculate the molar mass of anhydrous sodium carbonate $(\\text{Na}_2\\text{CO}_3)$ in $\\text{g/mol}$. [Given: $\\text{Na}=23, \\text{C}=12, \\text{O}=16$]",
    106,
    "Molar mass of $\\text{Na}_2\\text{CO}_3 = (2 \\times 23) + 12 + (3 \\times 16) = 46 + 12 + 48 = 106\\text{ g/mol}$."
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

console.log(`Part 6 total questions: ${questions.length}`);
console.log(`Part 6 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && questions.length === 47) {
  const outputPath = path.join(__dirname, "data_practical_part6.js");
  const content = `module.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Successfully wrote ${outputPath}`);
} else {
  console.error("Validation failed. Not writing file.");
  process.exit(1);
}
