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
    subTopic: "Alkynes",
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
    subTopic: "Alkynes",
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
    subTopic: "Alkynes",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Terminal alkynes like ethyne and propyne show acidic character and react with sodamide ($\\text{NaNH}_2$) to liberate ammonia gas.",
    "The carbon atom in a terminal alkyne is $sp$ hybridized with $50\\%$ $s$-character, making it highly electronegative and capable of stabilizing the conjugate base acetylide carbanion.",
    0,
    "Electrons in an $sp$ orbital are held closer to the carbon nucleus due to high $s$-character ($50\\%$), making carbon more electronegative than in $sp^2$ or $sp^3$ hybridization. This polarizes the $\\text{C}-\\text{H}$ bond and stabilizes the conjugate acetylide anion."
  ),
  ar(
    "Ethyne gives a white precipitate with ammoniacal silver nitrate solution (Tollens' reagent), whereas but-2-yne does not.",
    "Ethyne contains terminal acidic hydrogen atoms capable of forming insoluble silver acetylide, while but-2-yne is an internal alkyne lacking terminal acidic hydrogens.",
    0,
    "Only terminal alkynes containing the $-\\text{C}\\equiv\\text{C}-\\text{H}$ group react with $[\\text{Ag}(\\text{NH}_3)_2]^+$ to form insoluble silver acetylide $(\\text{Ag}_2\\text{C}_2)$. But-2-yne is internal and does not form a precipitate."
  ),
  ar(
    "Propyne reacts with ammoniacal cuprous chloride solution to yield a red precipitate.",
    "Propyne possesses a terminal acetylenic hydrogen that is replaced by copper(I) to form copper(I) propynide.",
    0,
    "Ammoniacal cuprous chloride reacts with terminal alkynes to form brightly colored red precipitates of copper(I) acetylides: $\\text{CH}_3\\text{C}\\equiv\\text{CH} + [\\text{Cu}(\\text{NH}_3)_2]^+ \\rightarrow \\text{CH}_3\\text{C}\\equiv\\text{CCu}\\downarrow + \\text{NH}_4^+ + \\text{NH}_3$."
  ),
  ar(
    "Hydration of ethyne in the presence of dilute $\\text{H}_2\\text{SO}_4$ and $\\text{HgSO}_4$ at $333\\text{ K}$ gives ethanal (acetaldehyde).",
    "Addition of water across the triple bond forms ethenol, which rapidly tautomerizes to the more stable keto form, ethanal.",
    0,
    "Kucherov reaction: Water adds across ethyne to form vinyl alcohol $(\\text{CH}_2=\\text{CHOH})$. Tautomerism converts this unstable enol into acetaldehyde $(\\text{CH}_3\\text{CHO})$."
  ),
  ar(
    "Hydration of propyne with dilute $\\text{H}_2\\text{SO}_4$ and $\\text{HgSO}_4$ at $333\\text{ K}$ yields propan-2-one (acetone) rather than propanal.",
    "Addition of water to propyne follows Markovnikov's rule, placing the hydroxyl group on the more substituted carbon atom to form prop-1-en-2-ol.",
    0,
    "Electrophilic addition of $\\text{H}_2\\text{O}$ adds $\\text{H}^+$ to C1 and $-\\text{OH}$ to C2 (Markovnikov). The resulting enol $\\text{CH}_3\\text{C(OH)}=\\text{CH}_2$ tautomerizes to acetone $\\text{CH}_3\\text{COCH}_3$."
  ),
  ar(
    "When ethyne gas is passed through a red-hot iron tube at $873\\text{ K}$, benzene is formed.",
    "Three molecules of ethyne undergo cyclic trimerization under high temperature to form an aromatic ring.",
    0,
    "Cyclic oligomerization: $3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{red-hot Fe, } 873\\text{ K}} \\text{C}_6\\text{H}_6$. The thermodynamic driving force is the extensive resonance aromatic stabilization energy of the benzene ring."
  ),
  ar(
    "Passing propyne through a red-hot iron tube yields mesitylene (1,3,5-trimethylbenzene).",
    "Cyclic trimerization of three propyne molecules joins their carbons symmetrically to form an aromatic ring with three methyl substituents.",
    0,
    "Three molecules of propyne $(\\text{CH}_3-\\text{C}\\equiv\\text{CH})$ trimerize cyclically to form 1,3,5-trimethylbenzene (mesitylene) in a manner analogous to ethyne forming benzene."
  ),
  ar(
    "The carbon-carbon triple bond in ethyne ($120\\text{ pm}$) is shorter and stronger than the double bond in ethene ($134\\text{ pm}$).",
    "Ethyne contains one $\\sigma$-bond and two mutually perpendicular $\\pi$-bonds formed by the overlap of $sp$ hybridized orbitals having $50\\%$ $s$-character.",
    0,
    "Sharing of three electron pairs between two $sp$ hybridized carbons pulls the nuclei closer ($120\\text{ pm}$) and confers exceptional bond strength ($823\\text{ kJ/mol}$)."
  ),
  ar(
    "Addition of hydrogen bromide ($\\text{HBr}$) to propyne yields 2,2-dibromopropane as the final product.",
    "Both steps of $\\text{HBr}$ addition to propyne follow Markovnikov's rule.",
    0,
    "First step gives 2-bromopropene $(\\text{CH}_3\\text{CBr}=\\text{CH}_2)$. Second step also follows Markovnikov's rule because the carbocation formed adjacent to bromine is stabilized by resonance donation of bromine's lone pair, yielding 2,2-dibromopropane."
  ),
  ar(
    "Reaction of propyne with $\\text{HBr}$ in the presence of benzoyl peroxide yields 1,2-dibromopropane.",
    "The peroxide effect operates via a free-radical mechanism, directing the first addition of $\\text{HBr}$ to the anti-Markovnikov position.",
    0,
    "First addition gives 1-bromopropene $(\\text{CH}_3\\text{CH}=\\text{CHBr})$ via anti-Markovnikov free-radical addition. The second addition of $\\text{HBr}$ gives 1,2-dibromopropane."
  ),
  ar(
    "Calcium carbide on treatment with water produces ethyne gas.",
    "Calcium carbide is an ionic acetylide containing the carbide anion $(\\text{C}_2^{2-})$ that undergoes complete hydrolysis by water.",
    0,
    "$\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2$. The carbide ion $(^-\\text{C}\\equiv\\text{C}^-)$ captures two protons from water to liberate acetylene."
  ),
  ar(
    "Alkynes do not exhibit geometrical (cis-trans) isomerism across the triple bond.",
    "The carbon atoms of the triple bond are $sp$ hybridized with a linear ($180^\\circ$) bond geometry, having only one substituent attached to each carbon.",
    0,
    "Because each triply bonded carbon has linear geometry with only one substituent, spatial rearrangement into cis/trans orientations is geometrically impossible."
  ),
  ar(
    "Alkynes are less reactive towards electrophilic addition reactions than alkenes.",
    "The $\\pi$-electrons of an alkyne are held more tightly by the more electronegative $sp$ hybridized carbon atoms, and the intermediate vinyl carbocation is less stable than an alkyl carbocation.",
    0,
    "The $sp$ hybridization holds the cylindrical $\\pi$-cloud tightly, reducing polarizability, and the vinyl carbocation intermediate formed by electrophilic attack is energetically less stable than an alkyl carbocation."
  ),
  ar(
    "Hydroboration-oxidation of terminal alkynes with disiamylborane followed by alkaline $\\text{H}_2\\text{O}_2$ gives aldehydes.",
    "Sterically hindered dialkylboranes add boron selectively to the less hindered terminal carbon atom, and oxidation yields an enol that tautomerizes to an aldehyde.",
    0,
    "Disiamylborane $((\\text{Sia})_2\\text{BH})$ adds to terminal alkynes in an anti-Markovnikov sense. Hydrolysis/oxidation yields an enol with $-\\text{OH}$ on the terminal carbon, which tautomerizes to an aldehyde."
  ),
  ar(
    "Conversion of 1,2-dibromoethane into ethyne requires treatment with alcoholic $\\text{KOH}$ followed by sodamide ($\\text{NaNH}_2$).",
    "The vinyl bromide intermediate formed in the first step is less reactive towards nucleophilic elimination due to resonance delocalization of bromine's lone pair into the double bond, requiring a stronger base like $\\text{NaNH}_2$.",
    0,
    "Alcoholic $\\text{KOH}$ removes the first $\\text{HBr}$ to form vinyl bromide. Partial double-bond character of the vinyl $\\text{C}-\\text{Br}$ bond resists further $\\text{KOH}$ elimination, necessitating the much stronger base $\\text{NaNH}_2$ for the second elimination."
  ),
  ar(
    "Ethyne is slightly soluble in water, but highly soluble in propan-2-one (acetone) under pressure.",
    "Acetone molecules form intermolecular hydrogen bonds with the acidic hydrogen atoms of ethyne.",
    0,
    "The acidic hydrogens of ethyne interact strongly with the basic carbonyl oxygen of acetone via $\\text{C}-\\text{H}\\cdots\\text{O}$ hydrogen bonding, allowing large volumes of acetylene to be safely dissolved under pressure."
  ),
  ar(
    "Linear polymerization of ethyne in the presence of $\\text{CuCl}$ and $\\text{NH}_4\\text{Cl}$ gives vinylacetylene.",
    "Vinylacetylene reacts with concentrated $\\text{HCl}$ to form chloroprene (2-chlorobuta-1,3-diene), the monomer of synthetic neoprene rubber.",
    1,
    "Both statements are true. Dimerization gives vinylacetylene $(\\text{CH}_2=\\text{CH}-\\text{C}\\equiv\\text{CH})$, which adds $\\text{HCl}$ to produce chloroprene. However, the subsequent reaction to chloroprene is not the explanation of how linear dimerization occurs."
  ),
  ar(
    "Water is a stronger acid than ethyne.",
    "The conjugate base of water ($\\text{OH}^-$) is less basic and more stable than the conjugate base of ethyne (acetylide ion, $\\text{HC}\\equiv\\text{C}^-$).",
    0,
    "Oxygen is more electronegative than $sp$ carbon. Hence, water ($pK_a \\approx 15.7$) is a stronger acid than acetylene ($pK_a \\approx 25$), and acetylide reacts quantitatively with water to release ethyne."
  ),
  ar(
    "Sodium acetylide acts as a strong nucleophile and undergoes $\\text{S}_N2$ substitution with primary alkyl halides to form higher alkynes.",
    "Acetylide anions carry a localized negative charge on an $sp$ hybridized carbon, enabling backside displacement of halide ions from unhindered alkyl halides.",
    0,
    "$\\text{R}-\\text{C}\\equiv\\text{C}^- + \\text{R}'-\\text{X} \\rightarrow \\text{R}-\\text{C}\\equiv\\text{C}-\\text{R}' + \\text{X}^-$. This nucleophilic substitution is the standard laboratory method to prepare higher alkynes from ethyne."
  ),
  ar(
    "Addition of bromine to ethyne in $\\text{CCl}_4$ occurs in two distinct stages, ultimately forming 1,1,2,2-tetrabromoethane.",
    "Each step involves the anti-addition of bromine across a $\\pi$-bond.",
    0,
    "The first mole of $\\text{Br}_2$ adds across the triple bond to give trans-1,2-dibromoethene, and the second mole adds across the remaining double bond to give 1,1,2,2-tetrabromoethane."
  ),
  ar(
    "Ethyne does not react with sodium metal in the absence of liquid ammonia.",
    "The reaction between ethyne and sodium metal is a fast, explosive reaction at room temperature.",
    3,
    "Assertion is false: Ethyne does react with molten sodium or sodium in inert solvents like mineral oil to liberate hydrogen. Reason is false: it is a smooth, controlled evolution of hydrogen gas."
  ),
  ar(
    "Acetylene torches produce an oxy-acetylene flame having a temperature of over $3000^\\circ\\text{C}$, used for welding and cutting metals.",
    "Combustion of ethyne is highly exothermic, and the low number of moles of product gas produced per mole of oxygen allows the heat to be concentrated at a very high flame temperature.",
    0,
    "$2\\text{C}_2\\text{H}_2 + 5\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 2\\text{H}_2\\text{O} + 2600\\text{ kJ}$. Because of high heat release and minimal heat dilution by product gases, oxy-acetylene achieves temperatures exceeding $3300^\\circ\\text{C}$."
  ),
  ar(
    "Ozonolysis of an internal alkyne followed by hydrolysis yields carboxylic acids.",
    "Ozonolysis of alkynes cleaves both $\\pi$-bonds and the $\\sigma$-bond of the triple bond, converting each $sp$ carbon into a carboxyl group.",
    0,
    "$\\text{R}-\\text{C}\\equiv\\text{C}-\\text{R}' + \\text{O}_3 \\xrightarrow{\\text{H}_2\\text{O}} \\text{RCOOH} + \\text{R}'\\text{COOH}$. Cleavage of the triple bond yields two carboxylic acid molecules."
  ),
  ar(
    "Ethyne burns with a smoky, luminous flame in air.",
    "Ethyne has a high carbon-to-hydrogen ratio ($1:1$), and incomplete combustion in atmospheric air leaves unburnt incandescent carbon particles.",
    0,
    "In air ($21\\% \\text{ O}_2$), ethyne does not find sufficient oxygen for complete combustion without forced oxygen supply, producing glowing carbon soot that renders the flame highly luminous and smoky."
  ),
  ar(
    "Ethyne reacts with basic potassium permanganate to form oxalic acid.",
    "Permanganate ion oxidizes both $sp$ hybridized carbons to carboxyl groups.",
    0,
    "$\\text{HC}\\equiv\\text{CH} + 4[\\text{O}] \\xrightarrow{\\text{alk. } \\text{KMnO}_4} \\text{HOOC}-\\text{COOH}$ (oxalic acid). In neutral or basic solution, permanganate cleaves the triple bond to dicarboxylic acids."
  ),
  ar(
    "Addition of chlorine to ethyne in the presence of metal catalysts like $\\text{FeCl}_3$ yields Westron (1,1,2,2-tetrachloroethane).",
    "Westron on treatment with milk of lime ($\\text{Ca(OH)}_2$) undergoes dehydrochlorination to yield Westrosol (trichloroethene).",
    1,
    "Both statements are true. Chlorination gives Westron $(\\text{CHCl}_2-\\text{CHCl}_2)$, which on dehydrochlorination yields Westrosol $(\\text{CHCl}=\\text{CCl}_2)$, widely used as an industrial solvent. However, the subsequent reaction does not explain the initial chlorination."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following compounds gives a red precipitate with ammoniacal cuprous chloride?",
    [
      "Propyne",
      "But-2-yne",
      "Ethene",
      "n-Butane"
    ],
    0,
    "Propyne $(\\text{CH}_3\\text{C}\\equiv\\text{CH})$ is a terminal alkyne with an acidic hydrogen, forming a red precipitate of copper(I) propynide with ammoniacal $\\text{CuCl}$."
  ),
  mcq(
    "When ethyne is passed through a red-hot iron tube at $873\\text{ K}$, the major product obtained is:",
    [
      "Benzene",
      "Mesitylene",
      "Toluene",
      "Cyclooctatetraene"
    ],
    0,
    "Ethyne undergoes cyclic trimerization over a red-hot iron tube at $873\\text{ K}$ to yield benzene: $3\\text{C}_2\\text{H}_2 \\rightarrow \\text{C}_6\\text{H}_6$."
  ),
  mcq(
    "Propyne on hydration with $1\\% \\text{ HgSO}_4$ and $20\\% \\text{ H}_2\\text{SO}_4$ at $333\\text{ K}$ produces:",
    [
      "Propan-2-one (acetone)",
      "Propanal",
      "Propanoic acid",
      "Ethanol"
    ],
    0,
    "Addition of water to propyne follows Markovnikov's rule to give prop-1-en-2-ol, which tautomerizes to propan-2-one (acetone)."
  ),
  mcq(
    "Which of the following represents the correct decreasing order of acidic strength?",
    [
      "$\\text{H}_2\\text{O} > \\text{CH}_3\\text{OH} > \\text{HC}\\equiv\\text{CH} > \\text{NH}_3$",
      "$\\text{HC}\\equiv\\text{CH} > \\text{H}_2\\text{O} > \\text{CH}_3\\text{OH} > \\text{NH}_3$",
      "$\\text{CH}_3\\text{OH} > \\text{HC}\\equiv\\text{CH} > \\text{H}_2\\text{O} > \\text{NH}_3$",
      "$\\text{NH}_3 > \\text{HC}\\equiv\\text{CH} > \\text{H}_2\\text{O} > \\text{CH}_3\\text{OH}$"
    ],
    0,
    "Acidity order: $\\text{H}_2\\text{O} (pK_a \\approx 15.7) > \\text{CH}_3\\text{OH} (15.5-16) > \\text{HC}\\equiv\\text{CH} (pK_a \\approx 25) > \\text{NH}_3 (pK_a \\approx 38)$."
  ),
  mcq(
    "What is the final product obtained when 1,1,2,2-tetrabromoethane is heated with excess zinc dust in ethanol?",
    [
      "Ethyne",
      "Ethene",
      "1,2-Dibromoethene",
      "Bromoethane"
    ],
    0,
    "Zinc dust eliminates two pairs of adjacent bromine atoms from 1,1,2,2-tetrabromoethane: $\\text{CHBr}_2-\\text{CHBr}_2 + 2\\text{Zn} \\rightarrow \\text{CH}\\equiv\\text{CH} + 2\\text{ZnBr}_2$ to yield ethyne."
  ),
  mcq(
    "When propyne is treated with excess $\\text{HBr}$ in the absence of peroxides, the major product is:",
    [
      "2,2-Dibromopropane",
      "1,2-Dibromopropane",
      "1,1-Dibromopropane",
      "1,3-Dibromopropane"
    ],
    0,
    "Both additions of $\\text{HBr}$ follow Markovnikov's rule, adding both bromine atoms to C2 to form the geminal dihalide, 2,2-dibromopropane."
  ),
  mcq(
    "The compound formed by the cyclic trimerization of propyne over a red-hot iron tube is:",
    [
      "1,3,5-Trimethylbenzene (mesitylene)",
      "1,2,4-Trimethylbenzene (pseudocumene)",
      "Hexamethylbenzene",
      "Toluene"
    ],
    0,
    "Cyclic trimerization of propyne symmetrically links three propyne molecules to yield 1,3,5-trimethylbenzene (mesitylene)."
  ),
  mcq(
    "Industrial production of acetylene (ethyne) from calcium carbide involves reaction with:",
    [
      "Water",
      "Concentrated $\\text{H}_2\\text{SO}_4$",
      "Sodium hydroxide",
      "Hydrogen gas"
    ],
    0,
    "Calcium carbide reacts vigorously with water at ambient temperature to produce acetylene gas: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2$."
  ),

  // 13 NUM Questions
  num(
    "What is the number of $\\pi$-bonds present in one molecule of ethyne $(\\text{C}_2\\text{H}_2)$?",
    2,
    "Ethyne contains a carbon-carbon triple bond, which consists of one $\\sigma$-bond and two $\\pi$-bonds. Total = 2 $\\pi$-bonds."
  ),
  num(
    "What is the number of $\\sigma$-bonds present in one molecule of propyne $(\\text{CH}_3-\\text{C}\\equiv\\text{CH})$?",
    6,
    "Propyne contains: three $\\text{C}-\\text{H}$ $\\sigma$-bonds in $-\\text{CH}_3$, one $\\text{C}-\\text{C}$ single $\\sigma$-bond, one $\\text{C}-\\text{C}$ triple-bond $\\sigma$-component, and one terminal $\\text{C}-\\text{H}$ $\\sigma$-bond. Total = $3 + 1 + 1 + 1 = 6$ $\\sigma$-bonds."
  ),
  num(
    "How many moles of $\\text{H}_2$ gas are liberated when 2 moles of ethyne react completely with excess sodium metal?",
    1,
    "The reaction is: $2\\text{HC}\\equiv\\text{CH} + 2\\text{Na} \\rightarrow 2\\text{HC}\\equiv\\text{CNa} + \\text{H}_2\\uparrow$. Exactly 1 mole of $\\text{H}_2$ is liberated per 2 moles of ethyne."
  ),
  num(
    "How many moles of bromine $(\\text{Br}_2)$ are required for the complete addition to 1 mole of propyne?",
    2,
    "Propyne has a triple bond (two $\\pi$-bonds), so it consumes 2 moles of bromine to form 1,1,2,2-tetrabromopropane."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of any open-chain monoalkyne with formula $\\text{C}_n\\text{H}_{2n-2}$?",
    2,
    "Acyclic alkynes have two degrees of unsaturation ($\text{DBE} = 2$) corresponding to the two $\\pi$-bonds of the triple bond."
  ),
  num(
    "What is the carbon-carbon-hydrogen bond angle in degrees in ethyne $(\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H})$?",
    180,
    "Ethyne has $sp$ hybridized carbons with a linear cylindrical geometry, resulting in a bond angle of exactly $180^\\circ$."
  ),
  num(
    "How many constitutional (structural) isomeric alkynes exist for the molecular formula $\\text{C}_4\\text{H}_6$?",
    2,
    "The 2 constitutional isomeric alkynes of $\\text{C}_4\\text{H}_6$ are: (1) but-1-yne (terminal) and (2) but-2-yne (internal)."
  ),
  num(
    "How many terminal alkyne isomers exist for the molecular formula $\\text{C}_5\\text{H}_8$?",
    2,
    "The 2 terminal alkyne isomers of $\\text{C}_5\\text{H}_8$ are: (1) pent-1-yne $(\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{C}\\equiv\\text{CH})$ and (2) 3-methylbut-1-yne $((\\text{CH}_3)_2\\text{CH}-\\text{C}\\equiv\\text{CH})$."
  ),
  num(
    "How many molecules of ethyne combine to form 1 molecule of benzene during cyclic trimerization?",
    3,
    "Trimerization follows the equation: $3\\text{C}_2\\text{H}_2 \\rightarrow \\text{C}_6\\text{H}_6$. Exactly 3 molecules of ethyne combine."
  ),
  num(
    "How many carbon atoms in but-1-en-3-yne $(\\text{CH}_2=\\text{CH}-\\text{C}\\equiv\\text{CH})$ are $sp$ hybridized?",
    2,
    "In but-1-en-3-yne, C1 and C2 are $sp^2$ hybridized (double bond), while C3 and C4 are $sp$ hybridized (triple bond). Exactly 2 carbon atoms are $sp$ hybridized."
  ),
  num(
    "How many moles of $\\text{H}_2\\text{O}$ are required to hydrolyze 1 mole of calcium carbide $(\\text{CaC}_2)$ completely?",
    2,
    "$\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2$. Exactly 2 moles of water are consumed per mole of calcium carbide."
  ),
  num(
    "How many moles of $\\text{NaNH}_2$ are consumed to convert 1 mole of 1,2-dibromoethane completely into sodium acetylide?",
    3,
    "First, 2 moles of $\\text{NaNH}_2$ eliminate $2\\text{HBr}$ to form ethyne: $\\text{BrCH}_2\\text{CH}_2\\text{Br} + 2\\text{NaNH}_2 \\rightarrow \\text{HC}\\equiv\\text{CH} + 2\\text{NaBr} + 2\\text{NH}_3$. A 3rd mole of $\\text{NaNH}_2$ deprotonates the terminal alkyne to form sodium acetylide: $\\text{HC}\\equiv\\text{CH} + \\text{NaNH}_2 \\rightarrow \\text{HC}\\equiv\\text{CNa} + \\text{NH}_3$. Total = 3 moles."
  ),
  num(
    "What is the percentage of $s$-character in the hybrid orbitals of carbon atoms in ethyne?",
    50,
    "The carbon atoms in ethyne are $sp$ hybridized, consisting of equal contributions from one $s$ and one $p$ orbital: $50\\%$ $s$-character."
  )
];

console.log(`Part 3 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part3.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part3.js");
