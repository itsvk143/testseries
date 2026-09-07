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
    subTopic: "Aromatic hydrocarbons",
    chapter: "Hydrocarbons"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Aromatic hydrocarbons",
    chapter: "Hydrocarbons"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Aromatic hydrocarbons",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "All six carbon-carbon bond lengths in benzene are completely identical ($139\\text{ pm}$).",
    "Delocalization of the six $\\pi$-electrons uniformly over the planar hexagonal carbon ring imparts an equal bond order of $1.5$ to all carbon-carbon bonds.",
    0,
    "The resonance hybrid of benzene consists of a delocalized doughnut-shaped $\\pi$-electron cloud above and below the ring plane. All carbon-carbon bonds have identical partial double-bond character ($1.5$), with bond lengths of $139\\text{ pm}$, intermediate between single ($154\\text{ pm}$) and double ($134\\text{ pm}$) bonds."
  ),
  ar(
    "Benzene is exceptionally stable and exhibits a resonance stabilization energy of approximately $150.6\\text{ kJ/mol}$ ($36\\text{ kcal/mol}$).",
    "Complete cyclic delocalization of six $\\pi$-electrons fulfilling Huckel's $(4n+2)$ rule provides immense aromatic stabilization energy compared to hypothetical cyclohexa-1,3,5-triene.",
    0,
    "The experimental heat of hydrogenation of benzene ($-208\\text{ kJ/mol}$) is $150.6\\text{ kJ/mol}$ less exothermic than the calculated value for a hypothetical localized cyclohexatriene ($-358.6\\text{ kJ/mol}$), demonstrating large resonance stabilization."
  ),
  ar(
    "Cyclooctatetraene (COT) is non-aromatic and readily adds bromine, behaving like an ordinary polyene.",
    "Cyclooctatetraene adopts a non-planar tub-shaped conformation to avoid the severe electronic destabilization associated with planar antiaromatic $8\\pi$-electron systems.",
    0,
    "If planar, COT would have $8\\pi$ electrons ($4n$ where $n=2$) and be antiaromatic. To escape this instability, it flexes into a non-planar tub conformation with alternating localized single and double bonds, exhibiting typical alkene reactivity."
  ),
  ar(
    "Cyclopentadienyl anion is aromatic and remarkably stable.",
    "Cyclopentadienyl anion is a planar, completely conjugated cyclic carbanion containing six $\\pi$-electrons, fulfilling Huckel's $(4n+2)$ rule with $n=1$.",
    0,
    "The cyclopentadienyl anion contains 4 electrons from two double bonds and 2 electrons from the carbanion lone pair in a planar 5-membered conjugated ring, giving a closed aromatic sextet of $6\\pi$ electrons."
  ),
  ar(
    "Cycloheptatrienyl cation (tropylium ion) is extraordinarily stable and aromatic.",
    "The tropylium cation contains six $\\pi$-electrons delocalized over a planar seven-membered ring, fulfilling Huckel's $(4n+2)$ rule with $n=1$.",
    0,
    "The tropylium cation $(\\text{C}_7\\text{H}_7^+)$ possesses 6 $\\pi$-electrons delocalized over 7 equivalent $sp^2$ carbons, giving it high aromatic resonance stabilization and making tropylium bromide a stable ionic salt."
  ),
  ar(
    "Cyclobutadiene is antiaromatic and extremely unstable at room temperature.",
    "Cyclobutadiene is a planar, completely conjugated cyclic monocycle containing four $\\pi$-electrons, conforming to the $4n\\ \\pi$-electron antiaromaticity rule with $n=1$.",
    0,
    "Planar monocycles with $4n\\ \\pi$-electrons have two unpaired electrons in non-bonding degenerate molecular orbitals (diradical character), resulting in intense antiaromatic destabilization."
  ),
  ar(
    "Cyclopentadiene has an unusually low $pK_a$ of approximately $16$, making it more acidic than water and alcohols.",
    "Deprotonation of cyclopentadiene yields the cyclopentadienyl anion, which gains tremendous aromatic stabilization ($6\\pi$-electron aromatic sextet).",
    0,
    "Hydrocarbons usually have $pK_a > 45$. Loss of a proton from cyclopentadiene transforms an $sp^3$ non-aromatic carbon into an $sp^2$ conjugated center, generating the resonance-stabilized aromatic cyclopentadienyl anion."
  ),
  ar(
    "Pyridine is an aromatic heterocyclic compound with basic properties.",
    "Pyridine has six $\\pi$-electrons in its aromatic sextet, while the unshared electron pair on nitrogen resides in an $sp^2$ hybrid orbital perpendicular to the $\\pi$-system and is available for protonation.",
    0,
    "The aromatic sextet consists of 5 electrons from carbon $p$-orbitals and 1 electron from nitrogen's $p$-orbital. The lone pair occupies an $sp^2$ orbital in the ring plane, not participating in aromaticity, giving pyridine basic character."
  ),
  ar(
    "Pyrrole has negligible basic character compared to aliphatic amines or pyridine.",
    "The lone pair of electrons on the nitrogen atom of pyrrole is an integral part of the aromatic sextet ($6\\pi$-electrons).",
    0,
    "In pyrrole, the nitrogen lone pair resides in a $p$-orbital and is required to complete the $6\\pi$-electron aromatic system. Protonation on nitrogen would disrupt aromaticity, making pyrrole an exceptionally weak base ($pK_b \\approx 13.6$)."
  ),
  ar(
    "Naphthalene is an aromatic polycyclic hydrocarbon possessing $10\\ \\pi$-electrons.",
    "Naphthalene consists of two fused benzene rings and satisfies Huckel's rule with $n=2$ in the $(4n+2)$ formula.",
    0,
    "Naphthalene has five conjugated double bonds ($10\\ \\pi$-electrons) completely delocalized across a planar bicyclic ring system ($4(2) + 2 = 10$), imparting strong aromatic character."
  ),
  ar(
    "Polynuclear aromatic hydrocarbons such as benzo[a]pyrene and 1,2-benzanthracene possess carcinogenic properties.",
    "These fused ring aromatic compounds undergo metabolic oxidation in the human body to form reactive diol-epoxides that bind covalently to cellular DNA, inducing oncogenic mutations.",
    0,
    "Incomplete combustion of organic matter generates polycyclic aromatic hydrocarbons (PAHs). Cytochrome P450 enzymes in the liver convert them into electrophilic epoxides that alkylate guanine bases in DNA, causing cancer."
  ),
  ar(
    "Cyclooctatetraenyl dianion ($\\text{COT}^{2-}$) is planar and aromatic.",
    "Addition of two electrons to cyclooctatetraene yields a ten $\\pi$-electron system, fulfilling Huckel's $(4n+2)$ rule with $n=2$.",
    0,
    "When neutral non-planar COT accepts 2 electrons from potassium metal, it forms the planar, aromatic dianion $\\text{COT}^{2-}$ with $10\\ \\pi$-electrons ($4(2)+2 = 10$)."
  ),
  ar(
    "Furan is an aromatic heterocycle containing five ring atoms.",
    "Only one of the two lone pairs on the oxygen atom of furan participates in the aromatic sextet, while the second lone pair occupies an $sp^2$ hybrid orbital in the ring plane.",
    0,
    "Furan has 4 electrons from two double bonds and 2 electrons from one oxygen $p$-orbital, totaling $6\\pi$ electrons. The other oxygen lone pair stays in an $sp^2$ orbital in the molecular plane."
  ),
  ar(
    "Anthracene and phenanthrene are constitutional isomers, both containing fourteen $\\pi$-electrons.",
    "Both anthracene and phenanthrene fulfill Huckel's rule with $n=3$ in the $(4n+2)$ formula and are aromatic.",
    0,
    "Anthracene (linearly fused three benzene rings) and phenanthrene (angularly fused three benzene rings) each have seven double bonds ($14\\ \\pi$-electrons, $4(3)+2=14$) and are aromatic isomers."
  ),
  ar(
    "Phenanthrene is thermodynamically more stable than anthracene.",
    "Phenanthrene has a higher total resonance energy than anthracene because it contains more intact Kekule benzene rings (Clar's aromatic sextet rule).",
    0,
    "According to Clar's rule, phenanthrene has two isolated aromatic sextets with a localized central double bond, conferring higher resonance energy ($381\\text{ kJ/mol}$) than linear anthracene ($351\\text{ kJ/mol}$)."
  ),
  ar(
    "Cyclopropenyl cation is the smallest aromatic cyclic carbocation.",
    "Cyclopropenyl cation is a planar, completely conjugated three-membered ring with two $\\pi$-electrons, fulfilling Huckel's rule with $n=0$.",
    0,
    "With two $\\pi$-electrons ($4(0)+2 = 2$) delocalized over three $sp^2$ carbons, the cyclopropenyl cation possesses extraordinary aromatic stability."
  ),
  ar(
    "Cyclopropenyl anion is antiaromatic and extraordinarily difficult to prepare.",
    "Cyclopropenyl anion contains four $\\pi$-electrons in a planar conjugated ring, conforming to the $4n$ antiaromaticity rule with $n=1$.",
    0,
    "The anion contains two electrons from the double bond and two from the carbanion lone pair, totaling $4\\pi$ electrons ($4n, n=1$). This planar configuration has high antiaromatic destabilization."
  ),
  ar(
    "Benzene resists addition reactions under conditions where ordinary alkenes add bromine rapidly.",
    "Addition reactions to benzene would disrupt the stable aromatic sextet of $6\\pi$-electrons, resulting in a severe loss of resonance stabilization energy.",
    0,
    "Addition destroys aromaticity and sacrifices $150.6\\text{ kJ/mol}$ of resonance stabilization, whereas electrophilic substitution allows the restored product to retain its aromatic sextet."
  ),
  ar(
    "Azulene is an aromatic non-benzenoid hydrocarbon possessing a substantial permanent dipole moment ($1.08\\text{ D}$).",
    "Azulene is stabilized by a dipolar resonance structure comprising a fused aromatic cyclopentadienyl anion ($6\\pi$) and an aromatic cycloheptatrienyl cation ($6\\pi$).",
    0,
    "Azulene $(\\text{C}_{10}\\text{H}_8)$ consists of a 7-membered and a 5-membered ring. Transfer of one electron from the 7-membered to the 5-membered ring creates two stable $6\\pi$-electron aromatic rings, giving it a deep blue color and a large dipole moment."
  ),
  ar(
    "Benzene does not decolorize cold, dilute, alkaline $\\text{KMnO}_4$ (Baeyer's reagent).",
    "The aromatic $\\pi$-electron cloud of benzene is thermodynamically stable and does not undergo syn-dihydroxylation under mild oxidizing conditions.",
    0,
    "Unlike isolated alkenes that are easily oxidized by Baeyer's reagent to glycols, benzene's resonance-stabilized aromatic sextet resists attack by mild oxidants."
  ),
  ar(
    "In the presence of bright sunlight or UV light, benzene reacts with chlorine to form benzene hexachloride (BHC, Lindane).",
    "Under photochemical conditions, free radicals break the aromatic $\\pi$-system through a free-radical addition reaction to form 1,2,3,4,5,6-hexachlorocyclohexane.",
    0,
    "$\\text{C}_6\\text{H}_6 + 3\\text{Cl}_2 \\xrightarrow{h\\nu} \\text{C}_6\\text{H}_6\\text{Cl}_6$ (BHC/gammaxene). UV light homolytically cleaves $\\text{Cl}_2$ into radicals that add across the double bonds."
  ),
  ar(
    "Hydrogenation of benzene to cyclohexane requires harsh conditions such as nickel catalyst at $473-573\\text{ K}$ and high pressure.",
    "Overcoming the resonance energy of benzene ($150.6\\text{ kJ/mol}$) requires a high activation energy compared to the hydrogenation of isolated alkenes.",
    0,
    "The high thermal energy and pressure are needed to breach the substantial resonance barrier of the aromatic ring before catalytic addition of $\\text{H}_2$ can proceed."
  ),
  ar(
    "Combustion of benzene in air produces a highly sooty flame.",
    "Benzene has a high percentage of carbon by mass ($92.3\\%$), leading to incomplete combustion in atmospheric oxygen with unburned carbon particles.",
    0,
    "The formula $\\text{C}_6\\text{H}_6$ has a $1:1$ carbon-to-hydrogen ratio. In normal air, oxygen is insufficient for instant complete combustion, producing incandescent soot particles that make the flame smoky."
  ),
  ar(
    "1,3,5-Cycloheptatriene is not aromatic despite having three alternating double bonds.",
    "The presence of an $sp^3$ hybridized methylene ($-\\text{CH}_2-$) carbon breaks the cyclic continuity of the conjugated $\\pi$-electron system.",
    0,
    "Aromaticity requires a continuous closed loop of $p$-orbitals. The $sp^3$ carbon in cycloheptatriene interrupts the conjugation, rendering the compound non-aromatic."
  ),
  ar(
    "Thiophene is more aromatic and chemically less reactive than furan.",
    "The smaller electronegativity of sulfur compared to oxygen and the effective overlap of sulfur $3p$ orbitals with carbon $2p$ orbitals enhances electron delocalization in thiophene.",
    0,
    "Because oxygen is more electronegative than sulfur, it holds its lone pair more tightly, reducing delocalization in furan relative to thiophene. Thiophene has higher resonance energy."
  ),
  ar(
    "Aromatic compounds burn with a blue, non-luminous flame.",
    "Aromatic compounds have very low carbon content and undergo complete, soot-free combustion in air.",
    3,
    "Assertion is false: Aromatic compounds burn with a yellow, highly sooty luminous flame due to high carbon content ($>90\\%$) and incomplete combustion. Reason is false."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following compounds or ions is ANTIAROMATIC?",
    [
      "Cyclobutadiene",
      "Benzene",
      "Cyclopentadienyl anion",
      "Cycloheptatrienyl cation"
    ],
    0,
    "Cyclobutadiene is a planar cyclic conjugated monocycle containing $4\\pi$-electrons ($4n$ where $n=1$), which makes it antiaromatic and extremely unstable."
  ),
  mcq(
    "Which of the following species is NOT aromatic?",
    [
      "Cyclooctatetraene (at room temperature)",
      "Tropylium cation (cycloheptatrienyl cation)",
      "Cyclopentadienyl anion",
      "Pyridine"
    ],
    0,
    "Cyclooctatetraene adopts a non-planar tub-shaped conformation to avoid antiaromaticity, making it non-aromatic. The other species are all planar and satisfy Huckel's $(4n+2)$ rule ($6\\pi$ electrons)."
  ),
  mcq(
    "The resonance energy of benzene is approximately:",
    [
      "$150.6\\text{ kJ/mol}$ ($36\\text{ kcal/mol}$)",
      "$50.2\\text{ kJ/mol}$ ($12\\text{ kcal/mol}$)",
      "$300\\text{ kJ/mol}$ ($72\\text{ kcal/mol}$)",
      "$28\\text{ kJ/mol}$ ($6.7\\text{ kcal/mol}$)"
    ],
    0,
    "The experimental resonance energy of benzene determined from the difference between the observed and theoretical heat of hydrogenation is $150.6\\text{ kJ/mol}$ ($36\\text{ kcal/mol}$)."
  ),
  mcq(
    "The carbon-carbon bond length in benzene is:",
    [
      "$139\\text{ pm}$",
      "$154\\text{ pm}$",
      "$134\\text{ pm}$",
      "$120\\text{ pm}$"
    ],
    0,
    "All carbon-carbon bond lengths in benzene are identical and equal to $139\\text{ pm}$, intermediate between an alkane $\\text{C}-\\text{C}$ single bond ($154\\text{ pm}$) and an alkene $\\text{C}=\\text{C}$ double bond ($134\\text{ pm}$)."
  ),
  mcq(
    "What is the number of $\\pi$-electrons present in the aromatic ring of naphthalene?",
    [
      "10",
      "6",
      "8",
      "14"
    ],
    0,
    "Naphthalene has five conjugated double bonds distributed over two fused rings, giving a total of $5 \\times 2 = 10$ $\\pi$-electrons, fulfilling Huckel's rule with $n=2$ ($4(2)+2 = 10$)."
  ),
  mcq(
    "Cyclopentadiene is unusually acidic ($pK_a \\approx 16$) because its conjugate base:",
    [
      "Is an aromatic anion with $6\\pi$-electrons",
      "Is stabilized by inductive effect only",
      "Has localized negative charge on carbon",
      "Is antiaromatic with $4\\pi$-electrons"
    ],
    0,
    "Deprotonation of cyclopentadiene forms the planar cyclopentadienyl anion containing 6 $\\pi$-electrons, which possesses aromatic stability according to Huckel's rule."
  ),
  mcq(
    "Which of the following compounds is a non-benzenoid aromatic hydrocarbon?",
    [
      "Azulene",
      "Toluene",
      "Naphthalene",
      "Anthracene"
    ],
    0,
    "Azulene $(\\text{C}_{10}\\text{H}_8)$ consists of fused 7-membered and 5-membered rings and is aromatic with $10\\pi$ electrons, but does not contain a six-membered benzene ring (non-benzenoid)."
  ),
  mcq(
    "Benzene on treatment with chlorine in the presence of ultraviolet light yields:",
    [
      "Benzene hexachloride (gammaxene, $\\text{C}_6\\text{H}_6\\text{Cl}_6$)",
      "Hexachlorobenzene ($\\text{C}_6\\text{Cl}_6$)",
      "Chlorobenzene",
      "1,4-Dichlorobenzene"
    ],
    0,
    "Under UV light, chlorine undergoes photochemical free-radical addition across the benzene $\\pi$-bonds to yield 1,2,3,4,5,6-hexachlorocyclohexane (benzene hexachloride, BHC, Lindane)."
  ),

  // 13 NUM Questions
  num(
    "What is the value of '$n$' in Huckel's $(4n+2)$ rule for benzene?",
    1,
    "Benzene contains 6 $\\pi$-electrons: $4n + 2 = 6 \\implies 4n = 4 \\implies n = 1$."
  ),
  num(
    "What is the value of '$n$' in Huckel's $(4n+2)$ rule for naphthalene $(\\text{C}_{10}\\text{H}_8)$?",
    2,
    "Naphthalene contains 10 $\\pi$-electrons: $4n + 2 = 10 \\implies 4n = 8 \\implies n = 2$."
  ),
  num(
    "What is the value of '$n$' in Huckel's $(4n+2)$ rule for anthracene $(\\text{C}_{14}\\text{H}_{10})$?",
    3,
    "Anthracene contains 14 $\\pi$-electrons: $4n + 2 = 14 \\implies 4n = 12 \\implies n = 3$."
  ),
  num(
    "What is the number of $\\pi$-electrons present in the cyclopropenyl cation?",
    2,
    "The cyclopropenyl cation has one double bond and an empty $p$-orbital on the positively charged carbon, giving exactly 2 $\\pi$-electrons ($n=0$ in $4n+2$)."
  ),
  num(
    "How many $\\pi$-electrons are present in the aromatic ring of the cycloheptatrienyl cation (tropylium ion)?",
    6,
    "The tropylium cation $(\\text{C}_7\\text{H}_7^+)$ has three double bonds ($3 \\times 2 = 6$ $\\pi$-electrons) delocalized over a 7-membered ring."
  ),
  num(
    "How many chlorine atoms are present in one molecule of Lindane (benzene hexachloride, BHC)?",
    6,
    "Lindane is 1,2,3,4,5,6-hexachlorocyclohexane $(\\text{C}_6\\text{H}_6\\text{Cl}_6)$, which contains exactly 6 chlorine atoms."
  ),
  num(
    "What is the number of $\\sigma$-bonds present in one molecule of benzene $(\\text{C}_6\\text{H}_6)$?",
    12,
    "Benzene contains six $\\text{C}-\\text{C}$ $\\sigma$-bonds in the hexagonal ring and six $\\text{C}-\\text{H}$ $\\sigma$-bonds, giving a total of $6 + 6 = 12$ $\\sigma$-bonds."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of benzene $(\\text{C}_6\\text{H}_6)$?",
    4,
    "For $\\text{C}_6\\text{H}_6$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 6 + 1 - 3 = 4$ (1 ring + 3 double bonds = 4)."
  ),
  num(
    "What is the carbon-carbon-carbon bond angle in degrees in the benzene molecule?",
    120,
    "Benzene is a regular planar hexagon with $sp^2$ hybridized carbons, having interior bond angles of exactly $120^\\circ$."
  ),
  num(
    "What is the number of $\\pi$-electrons in cyclobutadiene?",
    4,
    "Cyclobutadiene contains two localized double bonds, giving a total of $2 \\times 2 = 4$ $\\pi$-electrons (antiaromatic)."
  ),
  num(
    "How many moles of $\\text{H}_2$ gas are consumed for the complete catalytic hydrogenation of 1 mole of benzene to cyclohexane?",
    3,
    "Hydrogenation equation: $\\text{C}_6\\text{H}_6 + 3\\text{H}_2 \\xrightarrow{\\text{Ni}, \\Delta} \\text{C}_6\\text{H}_{12}$. Exactly 3 moles of $\\text{H}_2$ are consumed per mole of benzene."
  ),
  num(
    "How many fused benzene rings are present in one molecule of phenanthrene?",
    3,
    "Phenanthrene is an angular polycyclic aromatic hydrocarbon containing exactly 3 fused benzene rings."
  ),
  num(
    "What is the percentage of carbon by mass in benzene $(\\text{C}_6\\text{H}_6)$ rounded to the nearest whole integer? (Atomic masses: $\\text{C}=12, \\text{H}=1$)",
    92,
    "Molar mass of $\\text{C}_6\\text{H}_6 = (6 \\times 12) + (6 \\times 1) = 72 + 6 = 78\\text{ g/mol}$. Percentage of carbon = $(72 / 78) \\times 100 \\approx 92.31\\% \\approx 92\\%$."
  )
];

console.log(`Part 4 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part4.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part4.js");
