const fs = require("fs");
const path = require("path");

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
    subTopic: "Elimination reactions (Saytzeff's rule)",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Elimination reactions (Saytzeff's rule)",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Elimination reactions (Saytzeff's rule)",
    chapter: "Organic Compounds Containing Halogens"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Dehydrohalogenation of 2-bromobutane with alcoholic $\\text{KOH}$ yields but-2-ene as the major product (Saytzeff's rule).",
    "According to Saytzeff's rule, elimination occurs to yield predominantly the more highly substituted, thermodynamically more stable alkene.",
    0,
    "But-2-ene has 6 hyperconjugative $\\alpha$-hydrogens and is more substituted and thermodynamically stable than but-1-ene (which has only 2 $\\alpha$-hydrogens). Thus, but-2-ene is the major product ($81\\%$)."
  ),
  ar(
    "Dehydrohalogenation of 2-fluorobutane with sodium ethoxide yields but-1-ene as the major product (Hofmann elimination).",
    "Fluorine is the most electronegative halogen and a very poor leaving group, causing the transition state to acquire significant carbanion character where proton abstraction from the less substituted $\\beta$-carbon is favored.",
    0,
    "Because fluoride is a poor leaving group, $\\text{C}-\\text{H}$ bond breaking runs ahead of $\\text{C}-\\text{F}$ bond cleavage. The transition state resembles a carbanion, and primary carbanions are more stable than secondary carbanions due to fewer destabilizing $+I$ alkyl groups."
  ),
  ar(
    "When 2-bromo-2-methylbutane is treated with bulky potassium tert-butoxide, 2-methylbut-1-ene is formed as the major product rather than 2-methylbut-2-ene.",
    "Potassium tert-butoxide is a sterically hindered base that abstracts the more sterically accessible proton from the less hindered primary methyl group.",
    0,
    "Bulky bases like $((\\text{CH}_3)_3\\text{CO}^-\\text{K}^+)$ suffer severe steric crowding when approaching interior secondary/tertiary hydrogens, directing abstraction toward the readily accessible outer methyl hydrogens (Hofmann product)."
  ),
  ar(
    "E2 elimination reactions require an anti-periplanar conformation between the $\\beta$-hydrogen and the leaving group halogen.",
    "In the anti-periplanar arrangement, the $\\text{C}-\\text{H}$ $\\sigma$-bonding orbital and the $\\text{C}-\\text{X}$ $\\sigma^*$-antibonding orbital are coplanar ($180^\\circ$ dihedral angle), allowing maximum orbital overlap for $\\pi$-bond formation.",
    0,
    "The anti-coplanar transition state minimizes electron repulsion and allows smooth continuous overlap between the breaking $\\sigma_{\\text{C}-\\text{H}}$ and $\\sigma^*_{\\text{C}-\\text{X}}$ orbitals to generate the new $\\pi$-bond with the lowest activation energy."
  ),
  ar(
    "Neomenthyl chloride undergoes rapid E2 elimination with sodium ethoxide to give 3-menthene as the major Saytzeff product, whereas menthyl chloride reacts slowly to give 2-menthene as the only product.",
    "In neomenthyl chloride, the chlorine atom occupies an axial position in the more stable chair conformation, having anti-periplanar hydrogens at both C2 and C4.",
    0,
    "In menthyl chloride, chlorine is equatorial in the most stable chair conformation, and when forced into an axial chair, only the C2 hydrogen is trans-diaxial, giving exclusively 2-menthene. In neomenthyl chloride, axial chlorine can eliminate anti-periplanar with the more substituted C4 hydrogen to yield Saytzeff product 3-menthene."
  ),
  ar(
    "Vicinal dihalides undergo dehalogenation when heated with zinc dust in ethanol to form alkenes.",
    "Zinc metal acts as a reducing agent, accepting two halide ions to form stable $\\text{ZnX}_2$ via an anti-elimination process.",
    0,
    "Reaction of 1,2-dihaloalkanes with zinc dust: $\\text{R}-\\text{CHX}-\\text{CH}_2\\text{X} + \\text{Zn} \\rightarrow \\text{R}-\\text{CH}=\\text{CH}_2 + \\text{ZnX}_2$. Transfer of electrons from zinc promotes anti-coplanar departure of both halogens."
  ),
  ar(
    "Dehydrohalogenation of 1-bromobutane with alcoholic $\\text{KOH}$ gives only but-1-ene.",
    "1-Bromobutane has $\\beta$-hydrogens on only one adjacent carbon atom (C2).",
    0,
    "In 1-bromobutane ($\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2\\text{Br}$), the $\\alpha$-carbon is C1 and the only $\\beta$-carbon is C2. Therefore, elimination can only occur between C1 and C2, giving but-1-ene exclusively."
  ),
  ar(
    "Trans-alkenes are generally formed in greater abundance than cis-alkenes in Saytzeff dehydrohalogenation.",
    "The transition state leading to the trans-alkene has the bulky alkyl groups positioned anti to each other, minimizing steric strain.",
    0,
    "In the E2 transition state, an anti-arrangement of alkyl substituents minimizes gauche steric interactions, making the activation barrier to the trans-alkene lower than that to the cis-alkene."
  ),
  ar(
    "Tertiary alkyl halides undergo E2 elimination faster than secondary and primary alkyl halides when treated with a strong base.",
    "The transition state of an E2 reaction has partial double bond character, and more substituted developing double bonds are thermodynamically stabilized.",
    0,
    "The E2 transition state possesses substantial alkene character. Tertiary halides lead to more substituted, highly hyperconjugated alkenes, which stabilizes the transition state and lowers activation energy."
  ),
  ar(
    "E1 elimination reactions of alkyl halides involve a carbocation intermediate and exhibit first-order kinetics.",
    "The rate-determining step in the E1 mechanism is the heterolytic cleavage of the $\\text{C}-\\text{X}$ bond to form the carbocation.",
    0,
    "In the E1 mechanism, ionization is unimolecular and rate-determining: $\\text{Rate} = k[\\text{RX}]$. The base subsequently removes a $\\beta$-proton in a fast second step to form the alkene."
  ),
  ar(
    "Heating 1-chlorobutane with alcoholic $\\text{KOH}$ requires higher temperatures than heating 2-chlorobutane.",
    "Secondary alkyl halides form more stable alkenes and have lower activation energy for dehydrohalogenation than primary alkyl halides.",
    0,
    "Primary halides undergo E2 elimination through a less substituted transition state with higher activation energy, requiring stronger heating compared to secondary halides."
  ),
  ar(
    "Alcoholic $\\text{KOH}$ is a more effective reagent for dehydrohalogenation than aqueous $\\text{KOH}$.",
    "In alcoholic medium, ethoxide/alkoxide ions are generated, which are stronger bases and less solvated than hydroxide ions in water.",
    0,
    "Dissolving $\\text{KOH}$ in alcohol (such as ethanol) establishes an equilibrium producing alkoxide ions ($\\text{C}_2\\text{H}_5\\text{O}^-$). Alkoxide ions are stronger bases and weaker nucleophiles than hydrated hydroxide ions, strongly promoting elimination over substitution."
  ),
  ar(
    "The dehydrohalogenation of (2R,3R)-2,3-dibromobutane by zinc dust gives trans-but-2-ene stereospecifically.",
    "Zinc-induced dehalogenation requires an anti-periplanar conformation between the two leaving bromine atoms.",
    0,
    "When (2R,3R)-2,3-dibromobutane is rotated so both bromine atoms are anti-periplanar ($180^\\circ$ dihedral angle), the two methyl groups are oriented on opposite sides, delivering trans-but-2-ene upon elimination."
  ),
  ar(
    "Dehydration of alcohols and dehydrohalogenation of alkyl halides both obey Saytzeff's rule.",
    "Both reactions pass through or involve transition states where alkene stability governs the major product distribution.",
    0,
    "Whether proceeding through a carbocation intermediate (E1) or a concerted alkene-like transition state (E2), the thermodynamically more substituted alkene is preferred under reversible or thermodynamic/hyperconjugative control."
  ),
  ar(
    "E1 elimination is always accompanied by competing $\\text{S}_\\text{N}1$ substitution.",
    "Both E1 and $\\text{S}_\\text{N}1$ mechanisms share the exact same carbocation intermediate formed in the rate-determining step.",
    0,
    "Once the carbocation forms, it can either capture a nucleophile ($\\text{S}_\\text{N}1$) or lose a $\\beta$-proton to the solvent/base (E1). The two pathways compete directly from the same intermediate."
  ),
  ar(
    "Higher temperatures favor elimination (E2/E1) over substitution ($\\text{S}_\\text{N}2$/$\\text{S}_\\text{N}1$).",
    "Elimination reactions have an increase in entropy ($\\Delta S^\\circ > 0$) because one molecule of substrate and one base yield three product species (alkene, conjugate acid, and halide).",
    0,
    "In elimination, two reactant molecules produce three product particles, giving a positive $\\Delta S^\\circ$. In Gibbs free energy $\\Delta G = \\Delta H - T\\Delta S$, higher temperature amplifies the $-T\\Delta S$ term, driving elimination over substitution."
  ),
  ar(
    "Treatment of 2-chloro-2,3-dimethylbutane with alcoholic $\\text{KOH}$ gives 2,3-dimethylbut-2-ene as the exclusive major product.",
    "2,3-Dimethylbut-2-ene has 12 hyperconjugative $\\alpha$-hydrogens, making it exceptionally stable among isomeric hexenes.",
    0,
    "Tetrasubstituted 2,3-dimethylbut-2-ene has four methyl groups contributing 12 $\\alpha$-hydrogens, representing the ultimate Saytzeff alkene with maximum thermodynamic stability."
  ),
  ar(
    "The dehydrohalogenation rate of alkyl halides follows the order: $\\text{R}-\\text{I} > \\text{R}-\\text{Br} > \\text{R}-\\text{Cl} > \\text{R}-\\text{F}$ in both E1 and E2 reactions.",
    "The $\\text{C}-\\text{X}$ bond is cleaved in the rate-determining step of both E1 and E2 mechanisms, and bond strength decreases from $\\text{C}-\\text{F}$ to $\\text{C}-\\text{I}$.",
    0,
    "The leaving group ability is directly related to bond dissociation energy and conjugate base stability: iodide is the weakest base and has the weakest $\\text{C}-\\text{X}$ bond, maximizing elimination rates."
  ),
  ar(
    "Dehydrohalogenation of geminal dihalides by strong base gives alkynes.",
    "Geminal dihalides undergo two successive dehydrohalogenation steps with a very strong base such as sodamide ($\\text{NaNH}_2$) in liquid ammonia.",
    0,
    "Sequential elimination of two molecules of $\\text{HX}$ from $\\text{R}-\\text{CH}_2-\\text{CHX}_2$ converts the gem-dihalide first to a haloalkene and then to a terminal alkyne ($\\text{R}-\\text{C}\\equiv\\text{CH}$)."
  ),
  ar(
    "In E2 elimination, replacement of hydrogen with deuterium at the $\\beta$-carbon results in a substantial kinetic isotope effect ($k_H / k_D > 1$).",
    "The $\\text{C}-\\text{H}$ bond at the $\\beta$-carbon is broken in the rate-determining transition state of the E2 reaction.",
    0,
    "Because the $\\beta$-$\\text{C}-\\text{H}$ bond is partially cleaved in the concerted rate-determining step, the heavier deuterium isotope ($D$) has lower zero-point energy and requires more activation energy, reducing the reaction rate ($k_H / k_D \\approx 3 - 7$)."
  ),
  ar(
    "E1 elimination reactions do not exhibit a primary kinetic isotope effect.",
    "Cleavage of the $\\text{C}-\\text{H}$ bond occurs in the fast second step following the rate-determining ionization of the $\\text{C}-\\text{X}$ bond.",
    0,
    "The rate-determining step of E1 is unimolecular ionization to form a carbocation. Since the $\\beta$-proton is abstracted in a subsequent fast step, changing $\\text{H}$ to $\\text{D}$ does not alter the overall reaction rate."
  ),
  ar(
    "Treatment of chlorocyclohexane with alcoholic $\\text{KOH}$ yields cyclohexene.",
    "Chlorocyclohexane undergoes anti-periplanar $\\beta$-elimination when the chlorine atom adopts an axial conformation in the chair form.",
    0,
    "In the chair conformation with axial chlorine, the trans-diaxial hydrogens at C2 and C6 are perfectly aligned for concerted E2 anti-elimination to produce cyclohexene."
  ),
  ar(
    "Saytzeff's rule is always followed regardless of the nature of the base or the leaving group.",
    "Thermodynamically more stable alkenes are always kinetically favored under all reaction conditions.",
    3,
    "Assertion is false, Reason is false. Saytzeff's rule is NOT always followed. With poor leaving groups (like fluoride) or sterically hindered bases (like tert-butoxide), Hofmann elimination predominates to yield the less substituted alkene."
  ),
  ar(
    "When 1-bromo-1-methylcyclohexane is heated with sodium ethoxide, 1-methylcyclohexene is the major product.",
    "Endocyclic 1-methylcyclohexene is more substituted and thermodynamically stable than the exocyclic methylenecyclohexane isomer.",
    0,
    "Elimination follows Saytzeff's rule: the trisubstituted endocyclic double bond of 1-methylcyclohexene is significantly more stable than the disubstituted exocyclic double bond of methylenecyclohexane."
  ),
  ar(
    "Secondary alkyl halides yield predominantly substitution products when treated with sodium cyanide in DMSO, but predominantly elimination products when treated with potassium tert-butoxide.",
    "Cyanide ion is a powerful nucleophile with low basicity, whereas tert-butoxide is a powerful, sterically bulky base.",
    0,
    "Cyanide is weakly basic ($pK_a$ of $\\text{HCN} = 9.2$) and highly nucleophilic, favoring $\\text{S}_\\text{N}2$ displacement. Potassium tert-butoxide is a sterically congested strong base, which selectively abstracts protons and triggers E2 elimination."
  ),
  ar(
    "Carbocation rearrangements do not occur during E2 elimination reactions of alkyl halides.",
    "E2 reactions are concerted one-step processes that do not involve any discrete carbocation intermediate.",
    0,
    "Because no carbocation intermediate is formed during concerted E2 elimination, 1,2-hydride or methyl shifts are impossible, ensuring no skeletal rearrangements."
  ),

  // 8 MCQs
  mcq(
    "What is the major organic product formed when 2-bromobutane is heated with alcoholic $\\text{KOH}$?",
    [
      "trans-But-2-ene",
      "cis-But-2-ene",
      "But-1-ene",
      "Butan-2-ol"
    ],
    0,
    "According to Saytzeff's rule, the more substituted alkene (but-2-ene) is the major product. Among stereoisomers, trans-but-2-ene has less steric repulsion between the two methyl groups and is favored over cis-but-2-ene."
  ),
  mcq(
    "Which of the following haloalkanes yields the highest percentage of the Hofmann (less substituted) alkene upon dehydrohalogenation with sodium ethoxide?",
    [
      "2-Fluorobutane",
      "2-Chlorobutane",
      "2-Bromobutane",
      "2-Iodobutane"
    ],
    0,
    "Fluoride is the poorest leaving group among halides. The transition state develops strong carbanion character, favoring proton loss from the less substituted $\\beta$-carbon to give predominantly but-1-ene (Hofmann product)."
  ),
  mcq(
    "Which base will maximize the yield of 2-methylbut-1-ene from 2-bromo-2-methylbutane?",
    [
      "Potassium tert-butoxide ($t\\text{-BuOK}$)",
      "Sodium hydroxide ($\\text{NaOH}$)",
      "Sodium methoxide ($\\text{NaOMe}$)",
      "Sodium ethoxide ($\\text{NaOEt}$)"
    ],
    0,
    "Bulky potassium tert-butoxide cannot easily access the sterically crowded interior $\\beta$-hydrogens and preferentially abstracts the more accessible primary hydrogens on the methyl groups, giving the Hofmann alkene 2-methylbut-1-ene."
  ),
  mcq(
    "What is the required dihedral angle between the $\\beta$-hydrogen and the leaving group halogen for optimal E2 elimination?",
    [
      "$180^\\circ$ (anti-periplanar)",
      "$0^\\circ$ (syn-periplanar)",
      "$90^\\circ$ (perpendicular)",
      "$120^\\circ$ (skew)"
    ],
    0,
    "An anti-periplanar conformation ($180^\\circ$ dihedral angle) allows parallel overlap between the breaking $\\sigma_{\\text{C}-\\text{H}}$ and $\\sigma^*_{\\text{C}-\\text{X}}$ orbitals to cleanly generate the new $\\pi$-bond."
  ),
  mcq(
    "What product is obtained when 1,2-dibromopropane is heated with zinc dust in boiling ethanol?",
    [
      "Propene",
      "Propyne",
      "Propane",
      "Cyclopropane"
    ],
    0,
    "Vicinal dihalides undergo anti-elimination of $\\text{Br}_2$ when heated with zinc dust to yield the corresponding alkene: $\\text{CH}_3\\text{CH(Br)CH}_2\\text{Br} + \\text{Zn} \\rightarrow \\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{ZnBr}_2$."
  ),
  mcq(
    "Which of the following statements is TRUE regarding the E1 mechanism?",
    [
      "It involves a planar carbocation intermediate and can undergo skeletal rearrangement",
      "The rate depends on the concentration of the strong base",
      "It requires strict anti-periplanar geometry",
      "It proceeds in a single concerted step without intermediates"
    ],
    0,
    "The E1 mechanism proceeds via a carbocation intermediate in a unimolecular rate-determining step, which allows 1,2-hydride and 1,2-methyl shifts prior to proton loss."
  ),
  mcq(
    "When 1-bromo-1-methylcyclopentane is heated with alcoholic $\\text{KOH}$, the major product formed is:",
    [
      "1-Methylcyclopentene",
      "Methylenecyclopentane",
      "Cyclopentene",
      "1-Methylcyclopentanol"
    ],
    0,
    "Saytzeff's rule dictates formation of the more substituted endocyclic double bond (1-methylcyclopentene, trisubstituted) rather than the less substituted exocyclic alkene (methylenecyclopentane, disubstituted)."
  ),
  mcq(
    "The observed kinetic isotope effect $k_H / k_D \\approx 6.7$ in the dehydrobromination of 1-bromobutane with sodium ethoxide indicates that:",
    [
      "The $\\text{C}-\\text{H}$ bond is broken in the rate-determining step (E2 mechanism)",
      "The reaction proceeds via an E1 mechanism",
      "The reaction proceeds via an $\\text{S}_\\text{N}1$ mechanism",
      "Bromine departure is the sole rate-determining step"
    ],
    0,
    "A large primary kinetic isotope effect ($k_H / k_D > 1$) confirms that the $\\beta$-$\\text{C}-\\text{H}$ bond is actively being cleaved in the rate-determining transition state, which is characteristic of the concerted E2 mechanism."
  ),

  // 13 Numerical Questions
  num(
    "How many hyperconjugative $\\alpha$-hydrogen atoms are present in trans-but-2-ene (the major Saytzeff product from 2-bromobutane)?",
    6,
    "trans-But-2-ene has two methyl groups directly attached to the double bond carbons, contributing $2 \\times 3 = 6$ $\\alpha$-hydrogens."
  ),
  num(
    "How many hyperconjugative $\\alpha$-hydrogen atoms are present in but-1-ene (the Hofmann product)?",
    2,
    "In but-1-ene ($\\text{CH}_3-\\text{CH}_2-\\text{CH}=\\text{CH}_2$), only the adjacent $-\\text{CH}_2-$ group provides $\\alpha$-hydrogens, giving exactly 2 $\\alpha$-hydrogens."
  ),
  num(
    "How many distinct isomeric alkenes (including stereoisomers) can be produced by dehydrobromination of 2-bromobutane with alcoholic $\\text{KOH}$?",
    3,
    "Dehydrobromination produces but-1-ene, cis-but-2-ene, and trans-but-2-ene. Total = 3 distinct alkenes."
  ),
  num(
    "What is the dihedral angle (in degrees) between the $\\beta$-hydrogen and the halogen atom in an ideal anti-coplanar E2 transition state?",
    180,
    "An ideal anti-periplanar conformation requires a dihedral angle of exactly $180^\\circ$."
  ),
  num(
    "How many moles of $\\text{NaNH}_2$ are consumed per mole of 1,1-dibromopropane to convert it completely into propyne and its sodium salt?",
    3,
    "Two moles of $\\text{NaNH}_2$ are needed for the two successive dehydrohalogenations to form propyne. A 3rd mole of $\\text{NaNH}_2$ deprotonates the terminal alkyne to form sodium propynide: total = 3 moles."
  ),
  num(
    "What is the total number of hyperconjugative $\\alpha$-hydrogens in the tetrasubstituted alkene 2,3-dimethylbut-2-ene?",
    12,
    "2,3-Dimethylbut-2-ene contains four methyl groups attached to the double bond carbons ($4 \\times 3 = 12$ $\\alpha$-hydrogens)."
  ),
  num(
    "How many moles of $\\text{ZnBr}_2$ are produced by the complete dehalogenation of 2 moles of 1,2-dibromoethane with excess zinc dust?",
    2,
    "The stoichiometry is $\\text{CH}_2\\text{Br}-\\text{CH}_2\\text{Br} + \\text{Zn} \\rightarrow \\text{CH}_2=\\text{CH}_2 + \\text{ZnBr}_2$. Exactly 1 mole of $\\text{ZnBr}_2$ is formed per mole of dihalide, so 2 moles yield 2 moles."
  ),
  num(
    "How many $\\beta$-hydrogens are available for E2 elimination in 2-bromo-2-methylpropane (tert-butyl bromide)?",
    9,
    "tert-Butyl bromide has three identical methyl groups bonded to the $\\alpha$-carbon, providing $3 \\times 3 = 9$ equivalent $\\beta$-hydrogens."
  ),
  num(
    "What is the kinetic molecularity of the rate-determining step in an E1 elimination reaction?",
    1,
    "In E1 elimination, the slow rate-determining step is the unimolecular ionization of the alkyl halide to form a carbocation, having a molecularity of 1."
  ),
  num(
    "How many $\\pi$-bonds are present in the final organic product obtained when 1,1,2,2-tetrabromoethane is treated with excess zinc dust?",
    2,
    "Treatment of $\\text{CHBr}_2-\\text{CHBr}_2$ with excess $\\text{Zn}$ eliminates two molecules of $\\text{Br}_2$ to yield ethyne (acetylene, $\\text{HC}\\equiv\\text{CH}$), which contains 2 $\\pi$-bonds."
  ),
  num(
    "How many isomeric alkene products (structural only) are formed when 2-chloro-2-methylbutane undergoes E2 elimination?",
    2,
    "Elimination can occur towards the methyl groups (giving 2-methylbut-1-ene) or towards the methylene group (giving 2-methylbut-2-ene). Total structural isomers = 2."
  ),
  num(
    "How many carbon atoms in 1-methylcyclohexene are $sp^2$ hybridized?",
    2,
    "Only the two double-bonded ring carbon atoms (C1 and C2) are $sp^2$ hybridized; all other carbons in 1-methylcyclohexene are $sp^3$ hybridized. Total = 2."
  ),
  num(
    "How many trans-diaxial $\\beta$-hydrogen atoms are available for anti-E2 elimination in the chair conformation of neomenthyl chloride where chlorine is axial?",
    2,
    "When chlorine is in the axial position in neomenthyl chloride, it has trans-diaxial axial hydrogens at both neighboring carbons C2 and C4, giving 2 available anti-periplanar hydrogens."
  )
];

console.log(`Part 7 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_halogens_part7.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_halogens_part7.js");
