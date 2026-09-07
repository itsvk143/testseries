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

const subtopic = "Qualitative analysis";
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
  // 14 ASSERTION-REASON QUESTIONS
  // ----------------------------------------------------
  ar(
    "Benzaldehyde gives a positive Tollens' test but does not reduce Fehling's solution.",
    "Aromatic aldehydes are weaker reducing agents than aliphatic aldehydes and cannot reduce the weaker cupric tartrate complex in Fehling's solution.",
    0,
    "Tollens' reagent $([\\text{Ag}(\\text{NH}_3)_2]^+)$ is a stronger oxidizing agent than Fehling's reagent $(\\text{Cu}^{2+}\\text{-tartrate complex})$. Hence, benzaldehyde easily reduces Tollens' reagent to a silver mirror but fails to reduce Fehling's solution."
  ),
  ar(
    "Tertiary alcohols react immediately with Lucas reagent at room temperature to form turbidity.",
    "Tertiary alcohols undergo $S_N1$ substitution rapidly via relatively stable tertiary carbocation intermediates.",
    0,
    "Lucas reagent is concentrated $\\text{HCl}$ with anhydrous $\\text{ZnCl}_2$. Tertiary alcohols rapidly form tertiary carbocations, reacting instantly to yield insoluble tertiary alkyl chlorides that appear as immediate cloudiness or turbidity."
  ),
  ar(
    "Phenol gives a characteristic violet coloration with neutral ferric chloride solution, whereas ethanol does not.",
    "Phenol forms an iron-phenoxide coordination complex $[\\text{Fe}(\\text{OC}_6\\text{H}_5)_6]^{3-}$, while aliphatic alcohols do not form such stable enolic complexes.",
    0,
    "Phenols possess an enolic $-\\text{C}=\\text{C}-\\text{OH}$ structural unit that forms intensely colored coordinate complexes with $\\text{Fe}^{3+}$ ions. Simple aliphatic alcohols lack this conjugated enol character."
  ),
  ar(
    "Both aliphatic and aromatic primary amines give a positive carbylamine test.",
    "Primary amines react with chloroform and alcoholic $\\text{KOH}$ to produce foul-smelling isocyanides (carbylamines).",
    0,
    "The carbylamine test is specific to all primary amines $(\\text{R-NH}_2$ and $\\text{Ar-NH}_2)$. Heating with $\\text{CHCl}_3$ and alcoholic $\\text{KOH}$ yields isocyanides $(\\text{R-NC})$ characterized by an offensive odor."
  ),
  ar(
    "Carboxylic acids produce brisk effervescence with aqueous sodium bicarbonate solution, whereas phenols do not.",
    "Carboxylic acids are stronger acids than carbonic acid, whereas phenol is a weaker acid than carbonic acid.",
    0,
    "For an acid to liberate $\\text{CO}_2$ from $\\text{NaHCO}_3$, its $pK_a$ must be lower than that of $\\text{H}_2\\text{CO}_3$ ($pK_a \\approx 6.4$). Carboxylic acids ($pK_a \\approx 4-5$) readily decompose bicarbonate, while phenol ($pK_a \\approx 10$) is too weakly acidic."
  ),
  ar(
    "The precipitate formed by primary amines in the Hinsberg test is soluble in aqueous sodium hydroxide.",
    "The sulfonamide formed by a primary amine contains an acidic hydrogen attached to nitrogen that is readily deprotonated by base.",
    0,
    "Primary amines react with $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$ to form $N$-alkylbenzenesulfonamide $(\\text{C}_6\\text{H}_5\\text{SO}_2\\text{NHR})$. The strongly electron-withdrawing sulfonyl group makes the remaining $\\text{N-H}$ acidic, allowing it to dissolve in aqueous $\\text{NaOH}$ as a water-soluble sodium salt."
  ),
  ar(
    "Aniline gives a brilliant orange-red azo dye when treated with nitrous acid at $0-5^\\circ\\text{C}$ followed by alkaline $\\beta$-naphthol.",
    "Benzenediazonium ion couples with the electron-rich $\\beta$-naphtholate anion at the $\\alpha$-position via electrophilic aromatic substitution.",
    0,
    "Diazotization of aniline at $0-5^\\circ\\text{C}$ forms benzenediazonium chloride, which couples with $\\beta$-naphthol (1-phenylazo-2-naphthol) in alkaline medium at the 1-position, producing an insoluble bright scarlet/orange-red dye."
  ),
  ar(
    "Fehling's solution contains sodium potassium tartrate (Rochelle salt).",
    "Sodium potassium tartrate acts as a chelating ligand that prevents the precipitation of copper(II) as insoluble cupric hydroxide in alkaline medium.",
    0,
    "Rochelle salt forms a soluble bistartratocuprate(II) chelate complex, keeping $\\text{Cu}^{2+}$ in solution under strongly basic conditions $(\\text{NaOH})$ so that it is available to oxidize aliphatic aldehydes."
  ),
  ar(
    "Ethanol produces a red coloration with ceric ammonium nitrate solution.",
    "Alcohols coordinate with ceric ammonium nitrate to form an alkoxy-cerium(IV) complex.",
    0,
    "Ceric ammonium nitrate $(\\text{(NH}_4)_2\\text{Ce}(\\text{NO}_3)_6)$ reacts with alcohols by ligand exchange to form red-colored coordinate complexes of the general formula $[(\\text{ROH})_2\\text{Ce}(\\text{NO}_3)_4]$ or $[(\\text{RO})\\text{Ce}(\\text{NO}_3)_5]^{2-}$."
  ),
  ar(
    "2-Pentanone gives a positive sodium nitroprusside test, whereas 3-pentanone does not.",
    "Sodium nitroprusside reacts with the methyl keto group $(\\text{CH}_3\\text{CO}-)$ in alkaline medium to produce an intensely colored anion complex.",
    0,
    "Ketones containing the $\\text{CH}_3\\text{CO}-$ group form carbanions with alkali which coordinate with sodium nitroprusside $[\text{Fe}(\text{CN})_5\\text{NO}]^{2-}$ to give a characteristic wine-red or purple color. 3-Pentanone lacks the $\\alpha$-methyl carbonyl group."
  ),
  ar(
    "Phenol gives a white precipitate immediately when shaken with bromine water.",
    "The hydroxyl group $(-\\text{OH})$ strongly activates the benzene ring towards electrophilic aromatic substitution, causing rapid poly-bromination.",
    0,
    "In aqueous medium, phenol exists partly as the phenoxide ion, which is exceptionally electron-rich. Electrophilic attack by bromine occurs rapidly at all ortho and para positions, yielding an insoluble white precipitate of 2,4,6-tribromophenol."
  ),
  ar(
    "In the Lucas test, primary alcohols produce immediate cloudiness at room temperature.",
    "Primary carbocations are highly stable and formed instantaneously in presence of anhydrous zinc chloride.",
    3,
    "Both (A) and (R) are false. In standard 4-option AR format: (A) is false because primary alcohols do not react at room temperature (they only react upon heating). Reason (R) is false because primary carbocations are unstable."
  ),
  ar(
    "Aldehydes and ketones react with 2,4-dinitrophenylhydrazine (Brady's reagent) to form crystalline orange-yellow precipitates.",
    "The carbonyl carbon undergoes nucleophilic addition by the amino group of 2,4-DNP followed by elimination of water to form an insoluble hydrazone.",
    0,
    "Nucleophilic addition of 2,4-DNP to the $>\\text{C}=\\text{O}$ group yields an unstable carbinolamine intermediate which rapidly eliminates water to give an insoluble 2,4-dinitrophenylhydrazone precipitate."
  ),
  ar(
    "Glucose gives a positive silver mirror test with Tollens' reagent, even though it contains an open-chain form with only a hemiacetal group in majority.",
    "In aqueous alkaline solution, the cyclic hemiacetal ring of glucose readily opens to expose the free reducing aldehyde group.",
    0,
    "Under the mildly alkaline conditions of Tollens' reagent, mutarotation freely occurs and the open-chain aldehyde form reduces $\\text{Ag}^+$ to metallic silver."
  ),

  // ----------------------------------------------------
  // 8 MCQ QUESTIONS
  // ----------------------------------------------------
  mcq(
    "Which of the following compounds will liberate $\\text{CO}_2$ gas with brisk effervescence when treated with saturated aqueous $\\text{NaHCO}_3$?",
    [
      "Phenol",
      "$o$-Cresol",
      "Benzoic acid",
      "Benzyl alcohol"
    ],
    2,
    "Benzoic acid is stronger than carbonic acid $(pK_a \\approx 4.2 < 6.4)$ and displaces $\\text{CO}_2$ from sodium bicarbonate. Phenols and alcohols are too weakly acidic to react."
  ),
  mcq(
    "Lucas reagent is a mixture of:",
    [
      "Concentrated $\\text{HNO}_3$ and anhydrous $\\text{AlCl}_3$",
      "Concentrated $\\text{HCl}$ and anhydrous $\\text{ZnCl}_2$",
      "Dilute $\\text{HCl}$ and hydrated $\\text{ZnCl}_2$",
      "Concentrated $\\text{H}_2\\text{SO}_4$ and $\\text{KMnO}_4$"
    ],
    1,
    "Lucas reagent is an equimolar mixture of concentrated hydrochloric acid and anhydrous zinc chloride, used to differentiate primary, secondary, and tertiary alcohols."
  ),
  mcq(
    "Which functional group gives an intense wine-red or purple color when treated with alkaline sodium nitroprusside solution?",
    [
      "Primary amine $(-\\text{NH}_2)$",
      "Aliphatic carboxylic acid $(-\\text{COOH})$",
      "Methyl ketone $(\\text{CH}_3\\text{CO}-)$",
      "Phenolic hydroxyl $(-\\text{OH})$"
    ],
    2,
    "Methyl ketones react with alkali to generate enolate ions that react with sodium nitroprusside $[\text{Fe}(\text{CN})_5\\text{NO}]^{2-}$ to give a characteristic wine-red or purple complex $[\text{Fe}(\text{CN})_5\\text{NO}(\text{CH}_2\\text{COCH}_3)]^{4-}$."
  ),
  mcq(
    "In the Hinsberg test, an unknown amine reacts with benzenesulfonyl chloride to give a solid that is INSOLUBLE in aqueous $\\text{NaOH}$. The unknown amine is a:",
    [
      "Primary amine",
      "Secondary amine",
      "Tertiary amine",
      "Quaternary ammonium salt"
    ],
    1,
    "Secondary amines react with benzenesulfonyl chloride to form $N,N$-dialkylbenzenesulfonamides $(\\text{C}_6\\text{H}_5\\text{SO}_2\\text{NR}_2)$ which lack an acidic hydrogen on nitrogen and are therefore insoluble in aqueous $\\text{NaOH}$."
  ),
  mcq(
    "Which of the following reagents restores a pink or magenta color when treated with an aliphatic aldehyde?",
    [
      "Tollens' reagent",
      "Fehling's reagent",
      "Schiff's reagent",
      "Brady's reagent"
    ],
    2,
    "Schiff's reagent is rosaniline hydrochloride decolorized with sulfur dioxide. Aldehydes react with it to restore the characteristic pink/magenta coloration."
  ),
  mcq(
    "Liebermann's nitroso reaction is a characteristic test for:",
    [
      "Aliphatic primary amines",
      "Phenols",
      "Aromatic aldehydes",
      "Carboxylic acids"
    ],
    1,
    "Liebermann's nitroso reaction is specific to phenols having a free para-position. Heating phenol with $\\text{NaNO}_2$ and concentrated $\\text{H}_2\\text{SO}_4$ produces a deep green/blue color, which turns red on dilution and reverts to green/blue on making alkaline."
  ),
  mcq(
    "Which of the following organic compounds will decolorize both bromine water and cold, dilute alkaline $\\text{KMnO}_4$ (Baeyer's reagent)?",
    [
      "Benzene",
      "Cyclohexane",
      "Cyclohexene",
      "Benzoic acid"
    ],
    2,
    "Cyclohexene contains a carbon-carbon double bond (unsaturation) and rapidly decolorizes bromine water (electrophilic addition) and Baeyer's reagent (syn-dihydroxylation) with formation of brown $\\text{MnO}_2$."
  ),
  mcq(
    "A neutral organic compound gives a yellow crystalline precipitate with 2,4-DNP, a silver mirror with Tollens' reagent, but gives a NEGATIVE test with Fehling's solution. The compound is:",
    [
      "Acetaldehyde",
      "Benzaldehyde",
      "Acetophenone",
      "Acetone"
    ],
    1,
    "Benzaldehyde is an aromatic aldehyde; it gives positive 2,4-DNP and Tollens' tests, but does not reduce Fehling's solution."
  ),

  // ----------------------------------------------------
  // 3 NUMERICAL QUESTIONS
  // ----------------------------------------------------
  num(
    "In the test for unsaturation of an organic liquid containing one carbon-carbon double bond $(>\\text{C}=\\text{C}<)$, how many moles of $\\text{Br}_2$ are consumed per mole of the compound upon complete addition?",
    1,
    "One carbon-carbon double bond $(>\\text{C}=\\text{C}<)$ adds exactly 1 mole of bromine $(\\text{Br}_2)$ across the double bond to form a vicinal dibromide: $>\text{C}=\text{C}< + \\text{Br}_2 \\to >\text{C(Br)}-\text{C(Br)}<$."
  ),
  num(
    "How many bromine atoms are present in one molecule of the white precipitate formed when phenol is treated with excess bromine water?",
    3,
    "Phenol reacts with excess bromine water to give 2,4,6-tribromophenol. The number of bromine atoms per molecule is 3."
  ),
  num(
    "In the carbylamine test, what is the stoichiometric number of moles of potassium hydroxide $(\\text{KOH})$ required to react completely with 1 mole of a primary amine and 1 mole of chloroform?",
    3,
    "The balanced carbylamine reaction is: $\\text{R-NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\to \\text{R-NC} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$. Exactly 3 moles of $\\text{KOH}$ are required."
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

console.log(`Part 4 total questions: ${questions.length}`);
console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && questions.length === 25) {
  const outputPath = path.join(__dirname, "data_practical_part4.js");
  const content = `module.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Successfully wrote ${outputPath}`);
} else {
  console.error("Validation failed. Not writing file.");
  process.exit(1);
}
