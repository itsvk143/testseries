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
    subTopic: "Alkenes",
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
    subTopic: "Alkenes",
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
    subTopic: "Alkenes",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "trans-But-2-ene has a higher melting point than cis-but-2-ene.",
    "The trans isomer is more symmetrical and packs more efficiently into the solid crystal lattice than the less symmetrical cis isomer.",
    0,
    "The trans isomer has a center of symmetry, allowing its molecules to pack tightly with higher lattice energy in the solid state, leading to a higher melting point ($-106^\\circ\\text{C}$ vs $-139^\\circ\\text{C}$ for cis)."
  ),
  ar(
    "cis-But-2-ene has a higher boiling point and higher dipole moment than trans-but-2-ene.",
    "In cis-but-2-ene, the two polar $\\text{C}(sp^3)-\\text{C}(sp^2)$ bond dipoles reinforce each other, producing a net dipole moment and stronger dipole-dipole attractions.",
    0,
    "In cis-but-2-ene, the methyl group dipoles add vectorially to give $\\mu \\approx 0.33\\text{ D}$, whereas in trans-but-2-ene, the two equal bond dipoles oppose and cancel each other ($\\mu = 0$). Higher polarity increases the boiling point."
  ),
  ar(
    "Hydrogenation of but-2-yne using Lindlar's catalyst ($\\text{Pd}/\\text{CaCO}_3$ poisoned with quinoline) yields cis-but-2-ene stereoselectively.",
    "Lindlar's catalyst facilitates syn-addition of two hydrogen atoms to the same face of the alkyne triple bond adsorbed on the metal surface.",
    0,
    "Both hydrogen atoms are transferred simultaneously from the catalyst surface to the same side (syn-addition) of the alkyne, giving predominantly the cis-alkene in high stereochemical purity."
  ),
  ar(
    "Reduction of but-2-yne with sodium in liquid ammonia (Birch reduction) yields trans-but-2-ene.",
    "The Birch reduction proceeds through anti-addition of electrons and protons via a more stable trans-radical anion intermediate.",
    0,
    "In liquid ammonia, electron transfer produces a radical anion where the bulky alkyl groups orient trans to minimize electrostatic and steric repulsion, followed by protonation to yield the trans-alkene."
  ),
  ar(
    "Dehydrohalogenation of 2-bromobutane with alcoholic potassium hydroxide predominantly gives but-2-ene over but-1-ene.",
    "According to Saytzeff's rule, elimination of hydrogen halide from an alkyl halide yields the more substituted and thermodynamically more stable alkene as the major product.",
    0,
    "Saytzeff's rule states that the base preferentially abstracts a $\\beta$-hydrogen from the carbon bearing fewer hydrogens. But-2-ene (disubstituted, 6 hyperconjugative $\\alpha$-hydrogens) is more stable than but-1-ene (monosubstituted, 2 $\\alpha$-hydrogens)."
  ),
  ar(
    "Dehydrohalogenation of 2-bromobutane with potassium tert-butoxide gives but-1-ene as the major elimination product.",
    "Potassium tert-butoxide is a bulky, sterically hindered base that preferentially abstracts the more sterically accessible primary $\\beta$-hydrogen.",
    0,
    "The steric crowding of the bulky tert-butoxide ion impedes approach to the more hindered internal secondary $\\beta$-carbon, directing proton abstraction to the less hindered terminal methyl carbon to give the Hofmann product (but-1-ene)."
  ),
  ar(
    "Propene is thermodynamically more stable than ethene.",
    "The methyl group attached to the $sp^2$ carbon of propene stabilizes the carbon-carbon double bond through hyperconjugation and $+I$ inductive effect.",
    0,
    "Propene possesses 3 $\\alpha$-hydrogen atoms capable of $\\sigma-\\pi^*$ hyperconjugative delocalization, dispersing electron density and lowering its heat of hydrogenation relative to unsubstituted ethene."
  ),
  ar(
    "Heat of hydrogenation of trans-but-2-ene is lower in magnitude than that of cis-but-2-ene.",
    "trans-But-2-ene is thermodynamically more stable than cis-but-2-ene due to the absence of steric crowding between the two methyl groups.",
    0,
    "In cis-but-2-ene, steric repulsion (van der Waals strain) between the two eclipsing cis-methyl groups elevates its ground-state potential energy. Less stable isomers release more heat upon hydrogenation."
  ),
  ar(
    "Vicinal dibromides undergo debromination on heating with zinc dust in ethanol to yield alkenes.",
    "Zinc metal acts as a reducing agent that facilitates the anti-periplanar elimination of two bromine atoms from adjacent carbon atoms.",
    0,
    "$\\text{R}-\\text{CHBr}-\\text{CHBr}-\\text{R}' + \\text{Zn} \\rightarrow \\text{R}-\\text{CH}=\\text{CH}-\\text{R}' + \\text{ZnBr}_2$. The two bromines are eliminated from opposite sides in an anti-coplanar transition state."
  ),
  ar(
    "Alkenes decolorize the reddish-brown color of bromine in carbon tetrachloride solution.",
    "Bromine adds across the carbon-carbon double bond to form a colorless vicinal dibromoalkane.",
    0,
    "$\\text{RCH}=\\text{CH}_2 + \\text{Br}_2 \\xrightarrow{\\text{CCl}_4} \\text{RCH(Br)CH}_2\\text{Br}$. The electrophilic addition of $\\text{Br}_2$ consumes the halogen, discharging the reddish-brown color without generating $\\text{HBr}$ gas."
  ),
  ar(
    "Baeyer's reagent (cold, dilute, alkaline $\\text{KMnO}_4$) is used as a qualitative test for unsaturation in organic compounds.",
    "Baeyer's reagent oxidizes alkenes to vicinal diols (glycols), accompanied by decolorization of the purple permanganate solution and precipitation of brown $\\text{MnO}_2$.",
    0,
    "Permanganate undergoes syn-dihydroxylation with alkenes: $3\\text{C}_2\\text{H}_4 + 2\\text{KMnO}_4 + 4\\text{H}_2\\text{O} \\rightarrow 3\\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH} + 2\\text{MnO}_2\\downarrow + 2\\text{KOH}$. The loss of purple color confirms unsaturation."
  ),
  ar(
    "The carbon-carbon double bond in ethene ($134\\text{ pm}$) is shorter and stronger than the carbon-carbon single bond in ethane ($154\\text{ pm}$).",
    "A double bond consists of one strong $\\sigma$-bond and one $\\pi$-bond, and the $sp^2$ hybridized carbon atoms have greater $s$-character ($33.3\\%$) than $sp^3$ carbons ($25\\%$).",
    0,
    "Greater $s$-character brings the bonding electron density closer to the nuclei, shortening the bond length, while the presence of two pairs of shared electrons increases the overall bond strength."
  ),
  ar(
    "2-Methylpropene does not exhibit geometrical isomerism.",
    "Geometrical isomerism requires that each of the two doubly bonded carbon atoms must be attached to two different atoms or groups.",
    0,
    "In 2-methylpropene $((\\text{CH}_3)_2\\text{C}=\\text{CH}_2)$, carbon-2 is bonded to two identical methyl groups, and carbon-1 is bonded to two identical hydrogens. Interchange of groups yields identical molecules."
  ),
  ar(
    "Pent-2-ene exhibits geometrical (cis-trans) isomerism.",
    "Both doubly bonded carbon atoms in pent-2-ene are bonded to two different atoms or groups.",
    0,
    "In pent-2-ene $(\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2\\text{CH}_3)$, C2 is attached to $-\\text{H}$ and $-\\text{CH}_3$, and C3 is attached to $-\\text{H}$ and $-\\text{CH}_2\\text{CH}_3$. Thus, distinct cis and trans stereoisomers exist."
  ),
  ar(
    "E/Z nomenclature is used for alkenes when all four groups attached to the double-bonded carbons are different.",
    "E/Z designation is based on the Cahn-Ingold-Prelog (CIP) priority rules assigned to the substituents on each $sp^2$ carbon.",
    0,
    "The cis/trans notation becomes ambiguous when three or four different substituents are present. The CIP priority system assigns higher priority based on atomic number: (Z) if high-priority groups are on the same side, (E) if on opposite sides."
  ),
  ar(
    "Acid-catalyzed dehydration of 2-methylpropan-1-ol (isobutanol) yields 2-methylpropene as the major product.",
    "The primary carbocation initially formed undergoes a 1,2-hydride shift to form a more stable tertiary carbocation before proton elimination.",
    0,
    "Loss of water from protonated isobutanol gives $((\\text{CH}_3)_2\\text{CH}-\\text{CH}_2^+)$, which undergoes a rapid 1,2-hydride shift to form the tertiary carbocation $((\\text{CH}_3)_2\\text{C}^+-\\text{CH}_3)$, followed by loss of a proton to give 2-methylpropene."
  ),
  ar(
    "Tetramethylethylene (2,3-dimethylbut-2-ene) is the most thermodynamically stable acyclic isomer of $\\text{C}_6\\text{H}_{12}$.",
    "It possesses twelve $\\alpha$-hydrogen atoms, providing the maximum number of hyperconjugative resonance contributors.",
    0,
    "Each of the four methyl groups on the $sp^2$ carbons contributes 3 $\\alpha$-hydrogens, giving $4 \\times 3 = 12$ hyperconjugative $\\text{C}-\\text{H}$ bonds that disperse electron density and minimize heat of combustion."
  ),
  ar(
    "Hydroboration-oxidation of an alkene results in the net addition of water with anti-Markovnikov regioselectivity and syn-stereospecificity.",
    "Diborane adds across the double bond through a concerted four-membered cyclic transition state, followed by alkaline peroxide oxidation with retention of configuration.",
    0,
    "Boron and hydrogen add from the same face of the double bond (syn-addition) in a 4-membered cyclic transition state. Subsequent oxidation with alkaline $\\text{H}_2\\text{O}_2$ replaces boron with $-\\text{OH}$ with complete retention of stereochemistry."
  ),
  ar(
    "Alkenes undergo electrophilic addition reactions rather than nucleophilic addition reactions.",
    "The loosely held, exposed $\\pi$-electron cloud above and below the plane of the double bond acts as an electron-rich source (Lewis base) that attracts electrophiles.",
    0,
    "Because $\\pi$-electrons are held loosely between nuclei and project into space, they are easily polarized and attacked by electron-deficient electrophiles."
  ),
  ar(
    "Dehydration of ethanol to ethene with concentrated $\\text{H}_2\\text{SO}_4$ requires a higher temperature ($443\\text{ K}$) than the dehydration of 2-methylpropan-2-ol ($358\\text{ K}$).",
    "The ease of dehydration follows the stability of the intermediate carbocations: $3^\\circ > 2^\\circ > 1^\\circ$.",
    0,
    "Primary carbocations are much less stable than tertiary carbocations, so dehydration of primary ethanol has a significantly higher activation energy and requires harsher thermal conditions ($443\\text{ K} / 170^\\circ\\text{C}$)."
  ),
  ar(
    "Reaction of 1-bromobutane with alcoholic $\\text{KOH}$ proceeds via a single-step concerted bimolecular ($\\text{E}2$) elimination mechanism.",
    "In the $\\text{E}2$ mechanism, the base abstracts the $\\beta$-hydrogen simultaneously as the halide leaving group departs from the anti-periplanar conformation.",
    0,
    "Primary alkyl halides cannot easily form free carbocations. Elimination proceeds via a concerted transition state requiring anti-periplanar alignment of the $\\text{C}_\\beta-\\text{H}$ and $\\text{C}_\\alpha-\\text{Br}$ bonds."
  ),
  ar(
    "Addition of chlorine to ethene in water yields 2-chloroethanol as the major product.",
    "The cyclic chloronium ion intermediate is attacked by the more abundant water nucleophile rather than chloride ion.",
    0,
    "Attack of $\\text{Cl}^+$ forms a cyclic chloronium ion. Although $\\text{Cl}^-$ is present, water is the solvent and in vast molar excess, preferentially opening the ring to form 2-chloroethanol (halohydrin formation)."
  ),
  ar(
    "Cyclohexene decolorizes bromine water without evolving hydrogen bromide gas.",
    "Cyclohexene undergoes addition reaction with bromine water, forming 2-bromocyclohexanol as the major product.",
    0,
    "Bromine water adds across the double bond to form a bromohydrin via ring opening of the bromonium ion by water, consuming bromine without producing gaseous $\\text{HBr}$."
  ),
  ar(
    "Dehydrohalogenation of 2-fluorobutane with sodium ethoxide predominantly yields but-1-ene.",
    "Fluorine is a poor leaving group with a powerful $-I$ effect, which increases the acidity of the terminal $\\beta$-hydrogens and causes elimination to proceed via a carbanion-like transition state (Hofmann rule).",
    0,
    "Because fluoride is a very poor leaving group, $\\text{C}-\\text{H}$ bond breaking runs ahead of $\\text{C}-\\text{F}$ bond breaking, creating significant carbanion character in the transition state. The more stable primary carbanion transition state leads to but-1-ene."
  ),
  ar(
    "Alkenes burn with a more luminous, sooty flame than alkanes.",
    "Alkenes have a higher carbon-to-hydrogen ratio than alkanes, resulting in incomplete combustion that produces incandescent unburned carbon particles.",
    0,
    "Because of the higher percentage of carbon in alkenes $(\\text{C}_n\\text{H}_{2n})$ compared to alkanes $(\\text{C}_n\\text{H}_{2n+2})$, complete combustion requires more oxygen per molecule, and thermal cracking in air produces soot particles that glow yellow."
  ),
  ar(
    "Addition of bromine to trans-but-2-ene in $\\text{CCl}_4$ yields exclusively meso-2,3-dibromobutane.",
    "Addition of bromine to alkenes is an anti-addition that proceeds via a cyclic bromonium ion intermediate.",
    0,
    "Anti-addition to a symmetrical trans-alkene (TAM: Trans + Anti $\\rightarrow$ Meso) leads to meso-2,3-dibromobutane, which possesses a center of inversion and is optically inactive."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following alkenes will exhibit geometrical (cis-trans) isomerism?",
    [
      "But-2-ene",
      "Propene",
      "2-Methylpropene",
      "But-1-ene"
    ],
    0,
    "In but-2-ene $(\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3)$, both $sp^2$ carbons are bonded to two different groups ($-\\text{H}$ and $-\\text{CH}_3$), giving rise to cis and trans geometrical isomers."
  ),
  mcq(
    "Reaction of but-2-yne with $\\text{H}_2$ in the presence of Lindlar's catalyst produces:",
    [
      "cis-But-2-ene",
      "trans-But-2-ene",
      "n-Butane",
      "But-1-ene"
    ],
    0,
    "Lindlar's catalyst $(\\text{Pd}/\\text{CaCO}_3 + \\text{quinoline})$ partially poisons the palladium, allowing stereoselective syn-addition of hydrogen to yield cis-but-2-ene."
  ),
  mcq(
    "Which of the following alkenes is the most stable thermodynamically?",
    [
      "2,3-Dimethylbut-2-ene",
      "trans-But-2-ene",
      "cis-But-2-ene",
      "But-1-ene"
    ],
    0,
    "2,3-Dimethylbut-2-ene is a tetrasubstituted alkene with 12 hyperconjugative $\\alpha$-hydrogens, making it the most thermodynamically stable among the options."
  ),
  mcq(
    "Dehydrohalogenation of 2-bromobutane with alcoholic $\\text{KOH}$ gives but-2-ene as the major product. This regioselectivity is governed by:",
    [
      "Saytzeff (Zaitsev) rule",
      "Hofmann rule",
      "Markovnikov's rule",
      "Kharasch effect"
    ],
    0,
    "Saytzeff's rule dictates that elimination of $\\text{HX}$ preferentially yields the more substituted and more stable alkene (but-2-ene)."
  ),
  mcq(
    "An alkene on treatment with Baeyer's reagent produces ethane-1,2-diol. The alkene is:",
    [
      "Ethene",
      "Propene",
      "But-1-ene",
      "Ethyne"
    ],
    0,
    "Baeyer's reagent (cold alkaline $\\text{KMnO}_4$) carries out syn-dihydroxylation of ethene to form ethane-1,2-diol (ethylene glycol)."
  ),
  mcq(
    "Addition of bromine in $\\text{CCl}_4$ to trans-but-2-ene gives:",
    [
      "meso-2,3-Dibromobutane",
      "$(\\pm)$-Racemic 2,3-dibromobutane",
      "1,2-Dibromobutane",
      "1,4-Dibromobut-2-ene"
    ],
    0,
    "Bromine addition is an anti-addition proceeding via a cyclic bromonium ion. Anti-addition to a trans symmetrical alkene produces the optically inactive meso compound."
  ),
  mcq(
    "What is the major alkene formed when 2-methylbutan-2-ol is heated with concentrated $\\text{H}_2\\text{SO}_4$?",
    [
      "2-Methylbut-2-ene",
      "2-Methylbut-1-ene",
      "3-Methylbut-1-ene",
      "Pent-2-ene"
    ],
    0,
    "Dehydration of 2-methylbutan-2-ol gives the more substituted, trisubstituted alkene 2-methylbut-2-ene $((\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3)$ as the major Saytzeff product."
  ),
  mcq(
    "Which of the following compounds has a net dipole moment of zero ($\\mu = 0$)?",
    [
      "trans-1,2-Dichloroethene",
      "cis-1,2-Dichloroethene",
      "1,1-Dichloroethene",
      "Propene"
    ],
    0,
    "In trans-1,2-dichloroethene, the two polar $\\text{C}-\\text{Cl}$ bond dipoles are oriented in exactly opposite directions ($180^\\circ$), canceling each other to give a dipole moment of zero."
  ),

  // 13 NUM Questions
  num(
    "How many hyperconjugative $\\alpha$-hydrogen atoms are present in one molecule of 2,3-dimethylbut-2-ene?",
    12,
    "2,3-Dimethylbut-2-ene has four methyl groups directly attached to the $sp^2$ carbons: $4 \\times 3 = 12$ $\\alpha$-hydrogen atoms."
  ),
  num(
    "How many constitutional (structural) isomeric alkenes exist for the molecular formula $\\text{C}_4\\text{H}_8$?",
    3,
    "The 3 constitutional isomeric alkenes of $\\text{C}_4\\text{H}_8$ are: (1) but-1-ene, (2) but-2-ene, and (3) 2-methylpropene. Total = 3."
  ),
  num(
    "How many total stereoisomers (geometrical isomers) exist for but-2-ene?",
    2,
    "But-2-ene exists as 2 geometrical stereoisomers: cis-but-2-ene and trans-but-2-ene."
  ),
  num(
    "What is the number of $\\sigma$-bonds present in one molecule of ethene $(\\text{C}_2\\text{H}_4)$?",
    5,
    "Ethene contains four $\\text{C}-\\text{H}$ $\\sigma$-bonds and one $\\text{C}-\\text{C}$ $\\sigma$-bond, giving a total of $4 + 1 = 5$ $\\sigma$-bonds."
  ),
  num(
    "What is the number of $\\pi$-bonds present in one molecule of buta-1,3-diene?",
    2,
    "Buta-1,3-diene $(\\text{CH}_2=\\text{CH}-\\text{CH}=\\text{CH}_2)$ contains two carbon-carbon double bonds, each having one $\\pi$-bond. Total = 2 $\\pi$-bonds."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of any open-chain monoalkene with formula $\\text{C}_n\\text{H}_{2n}$?",
    1,
    "Acyclic alkenes possess exactly one double bond and no rings, giving $\\text{DBE} = 1$."
  ),
  num(
    "How many moles of $\\text{Br}_2$ are consumed by complete addition to 1 mole of propene?",
    1,
    "Propene contains one carbon-carbon double bond: $\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{Br}_2 \\rightarrow \\text{CH}_3\\text{CHBrCH}_2\\text{Br}$. Exactly 1 mole of bromine is consumed."
  ),
  num(
    "How many $\\alpha$-hydrogen atoms are present in propene $(\\text{CH}_3-\\text{CH}=\\text{CH}_2)$?",
    3,
    "The single methyl group attached to the $sp^2$ carbon contains exactly 3 $\\alpha$-hydrogen atoms."
  ),
  num(
    "What is the bond angle around each carbon atom in ethene in degrees?",
    120,
    "Both carbons in ethene are $sp^2$ hybridized with trigonal planar geometry, having bond angles of approximately $120^\\circ$."
  ),
  num(
    "How many chiral carbon atoms are present in the addition product of 1 mole of bromine to cis-but-2-ene?",
    2,
    "Addition of bromine yields 2,3-dibromobutane $(\\text{CH}_3-\\text{C}^*\\text{HBr}-\\text{C}^*\\text{HBr}-\\text{CH}_3)$, which contains exactly 2 asymmetric chiral carbons (C2 and C3)."
  ),
  num(
    "How many carbon atoms in hex-2-ene are $sp^2$ hybridized?",
    2,
    "In hex-2-ene $(\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3)$, only carbons C2 and C3 are involved in the double bond and are $sp^2$ hybridized. Total = 2."
  ),
  num(
    "How many moles of $\\text{Zn}$ metal are consumed in the debromination of 1 mole of 1,2-dibromopropane to propene?",
    1,
    "$\\text{CH}_3\\text{CHBrCH}_2\\text{Br} + \\text{Zn} \\rightarrow \\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{ZnBr}_2$. Exactly 1 mole of zinc is consumed per mole of vicinal dibromide."
  ),
  num(
    "What is the oxidation state of both carbon atoms in ethene $(\\text{C}_2\\text{H}_4)$?",
    -2,
    "In ethene $(\\text{CH}_2=\\text{CH}_2)$, each carbon is bonded to two hydrogens (each $+1$, contributing $-2$ to C) and double-bonded to another carbon ($0$). Net oxidation state = $-2$."
  )
];

console.log(`Part 2 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part2.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part2.js");
