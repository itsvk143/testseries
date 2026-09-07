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
    subTopic: "Alcohols",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Alcohols",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Alcohols",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Boiling point of butan-1-ol is significantly higher than that of ethoxyethane (diethyl ether) despite having comparable molecular masses.",
    "Molecules of butan-1-ol are associated through intermolecular hydrogen bonding, whereas diethyl ether cannot form intermolecular hydrogen bonds with itself.",
    0,
    "Butan-1-ol ($M = 74\\text{ g/mol}$) forms strong intermolecular hydrogen bonds via its $-\\text{OH}$ group, leading to extensive molecular association. Diethyl ether lacks an acidic hydrogen bonded to oxygen and cannot form intermolecular H-bonds with itself, resulting in a much lower boiling point ($35^\\circ\\text{C}$ vs $118^\\circ\\text{C}$)."
  ),
  ar(
    "Among isomeric butyl alcohols, 2-methylpropan-2-ol (tert-butanol) has the lowest boiling point.",
    "Branching decreases the surface area of the molecule, thereby decreasing the magnitude of van der Waals attractive forces.",
    0,
    "As branching increases, the molecule adopts a more spherical shape with reduced surface area, which decreases intermolecular van der Waals forces, lowering the boiling point."
  ),
  ar(
    "Alcohols are weaker Bronsted acids than water.",
    "The electron-releasing inductive effect ($+I$) of alkyl groups increases electron density on the oxygen atom, destabilizing the alkoxide anion relative to the hydroxide anion.",
    0,
    "Alkyl groups exert a $+I$ effect which increases electron density on oxygen in $\\text{R}-\\text{O}^-$, making the alkoxide less stable than $\\text{OH}^-$. Hence, water is a stronger acid than alcohols (except methanol)."
  ),
  ar(
    "Hydroboration-oxidation of propene with diborane followed by alkaline $\\text{H}_2\\text{O}_2$ yields propan-1-ol as the major product.",
    "The addition of diborane to an unsymmetrical alkene follows anti-Markovnikov regioselectivity with respect to the overall addition of water.",
    0,
    "Hydroboration-oxidation adds $\\text{H}$ and $\\text{OH}$ across the double bond in an anti-Markovnikov fashion via a cyclic four-membered transition state, yielding propan-1-ol from propene."
  ),
  ar(
    "Acid-catalyzed hydration of 3,3-dimethylbut-1-ene predominantly gives 2,3-dimethylbutan-2-ol rather than 3,3-dimethylbutan-2-ol.",
    "The secondary carbocation initially formed undergoes a 1,2-hydride shift to form a more stable tertiary carbocation.",
    2,
    "Assertion is true: 3,3-dimethylbut-1-ene upon protonation forms a secondary carbocation $((\\text{CH}_3)_3\\text{C}-\\text{CH}^+-\\text{CH}_3)$, which undergoes a 1,2-methyl shift (not hydride shift) to form the more stable tertiary carbocation $((\\text{CH}_3)_2\\text{C}^+-\\text{CH}(\\text{CH}_3)_2)$, giving 2,3-dimethylbutan-2-ol. Reason is false."
  ),
  ar(
    "Oxymercuration-demercuration of 3,3-dimethylbut-1-ene gives 3,3-dimethylbutan-2-ol without skeletal rearrangement.",
    "Oxymercuration involves the formation of a cyclic mercurinium ion intermediate that prevents carbocation rearrangement.",
    0,
    "Oxymercuration-demercuration proceeds via a bridged cyclic mercurinium ion rather than a free carbocation, precluding rearrangements and delivering the Markovnikov hydration product without skeletal change."
  ),
  ar(
    "Methanol is more toxic to humans than ethanol, and ingestion of small quantities can cause blindness or death.",
    "Methanol is metabolically oxidized in the liver by alcohol dehydrogenase to methanal (formaldehyde) and then to formic acid, which causes metabolic acidosis and optic nerve damage.",
    0,
    "Methanol is oxidized by alcohol dehydrogenase to methanal and formic acid. Formic acid inhibits mitochondrial cytochrome oxidase, leading to histotoxic hypoxia, blindness, and fatal metabolic acidosis."
  ),
  ar(
    "Sodium metal reacts vigorously with ethanol to liberate hydrogen gas, whereas it does not react with alkanes.",
    "The hydrogen atom attached to the highly electronegative oxygen atom in ethanol has significant acidic character.",
    0,
    "The $\\text{O}-\\text{H}$ bond in ethanol is polar, making the hydroxyl hydrogen acidic enough to be reduced by electropositive active metals like sodium to release $\\text{H}_2$ gas."
  ),
  ar(
    "The basicity order of alkoxide ions is $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3\\text{O}^-$.",
    "The conjugate base of a weaker acid is stronger, and acidity of alcohols follows the order $\\text{CH}_3\\text{OH} > 1^\\circ > 2^\\circ > 3^\\circ$.",
    0,
    "Because tertiary alcohols are the weakest acids due to electron donation from three alkyl groups destabilizing the alkoxide, tert-butoxide is the strongest base among the common alkoxides."
  ),
  ar(
    "Reaction of an ester with two molar equivalents of a Grignard reagent followed by acidic workup produces a tertiary alcohol.",
    "The first equivalent of Grignard reagent converts the ester into a ketone, which subsequently reacts with a second equivalent of Grignard reagent.",
    0,
    "Nucleophilic acyl substitution of an ester with $\\text{RMgX}$ displaces alkoxide to generate an intermediate ketone, which is more reactive than the ester and rapidly consumes a second equivalent of $\\text{RMgX}$ to yield a tertiary alcohol."
  ),
  ar(
    "Reaction of methanal (formaldehyde) with methylmagnesium bromide followed by hydrolysis gives ethanol.",
    "Addition of Grignard reagents to formaldehyde specifically yields primary alcohols after hydrolysis.",
    0,
    "Formaldehyde has two hydrogens on the carbonyl group $(\\text{H}_2\\text{C}=\\text{O})$. Nucleophilic addition of $\\text{RMgX}$ adds one alkyl group to form a primary alcohol $(\\text{R}-\\text{CH}_2\\text{OH})$."
  ),
  ar(
    "Ethanol and water cannot be separated completely by simple fractional distillation.",
    "Ethanol and water form a minimum-boiling azeotropic mixture containing $95.6\\%$ ethanol by mass at $78.15^\\circ\\text{C}$.",
    0,
    "At $95.6\\%$ ethanol concentration, the liquid and vapor phases have identical compositions (minimum-boiling azeotrope), preventing further enrichment by conventional distillation."
  ),
  ar(
    "Esterification of alcohols with carboxylic acids is carried out in the presence of a small amount of concentrated sulfuric acid.",
    "Concentrated sulfuric acid acts as an acid catalyst to protonate the carbonyl oxygen and also acts as a dehydrating agent to shift the equilibrium forward.",
    0,
    "Protonation of the carbonyl oxygen by $\\text{H}^+$ makes it more electrophilic towards nucleophilic attack by the alcohol oxygen, and $\\text{H}_2\\text{SO}_4$ removes water to drive the reversible esterification toward the product side."
  ),
  ar(
    "Esterification of an alcohol with an acid anhydride or acid chloride is preferably carried out in the presence of pyridine.",
    "Pyridine acts as a base to neutralize the $\\text{HCl}$ or carboxylic acid formed, driving the reaction to completion.",
    0,
    "Pyridine is a mild organic base that removes $\\text{HCl}$ generated during reaction with acyl chlorides, shifting the equilibrium to the right and preventing acid-catalyzed side reactions."
  ),
  ar(
    "In the acid-catalyzed esterification of an alcohol with a carboxylic acid, isotopic labeling ($^{18}\\text{O}$) in the alcohol ends up in the ester.",
    "The esterification reaction proceeds via cleavage of the acyl $\\text{C}-\\text{OH}$ bond of the carboxylic acid and the $\\text{O}-\\text{H}$ bond of the alcohol.",
    0,
    "The nucleophilic alcohol oxygen attacks the carbonyl carbon of the acid, retaining its $\\text{C}-\\text{O}$ bond, while the $-\\text{OH}$ of the acid is lost as water ($A_{\\text{AC}}2$ mechanism)."
  ),
  ar(
    "Lower alcohols like methanol and ethanol are completely miscible with water in all proportions.",
    "Lower alcohols form strong intermolecular hydrogen bonds with polar water molecules.",
    0,
    "The small non-polar alkyl chain does not hinder the extensive hydrogen bonding between the hydroxyl group of lower alcohols and water, resulting in complete miscibility."
  ),
  ar(
    "Solubility of alcohols in water decreases progressively as their molecular mass increases.",
    "With increasing molecular mass, the size of the non-polar hydrophobic alkyl group increases, which resists hydration by water molecules.",
    0,
    "The hydrophobic nature of the expanding alkyl group dominates over the hydrophilic interaction of the single $-\\text{OH}$ group, reducing aqueous solubility."
  ),
  ar(
    "Glycerol (propane-1,2,3-triol) is a highly viscous liquid with a very high boiling point ($290^\\circ\\text{C}$).",
    "Glycerol contains three hydroxyl groups per molecule, leading to extensive three-dimensional intermolecular hydrogen bonding.",
    0,
    "Each glycerol molecule can form multiple hydrogen bonds with neighboring molecules, creating an extensive 3D network that imparts high viscosity and high boiling point."
  ),
  ar(
    "Reaction of acetone with methylmagnesium bromide followed by hydrolysis yields 2-methylpropan-2-ol.",
    "Nucleophilic addition of a Grignard reagent to a ketone yields a secondary alcohol.",
    2,
    "Assertion is true: Acetone $((\\text{CH}_3)_2\\text{C}=\\text{O})$ reacts with $\\text{CH}_3\\text{MgBr}$ to give tert-butanol, a tertiary alcohol. Reason is false because addition of Grignard reagent to ketones yields tertiary alcohols, not secondary alcohols."
  ),
  ar(
    "Hydroboration-oxidation of 1-methylcyclopentene gives trans-2-methylcyclopentan-1-ol.",
    "Hydroboration involves a syn-addition of boron and hydrogen across the alkene double bond, followed by stereospecific retention of configuration during oxidation.",
    0,
    "Boron and hydrogen add to the double bond from the same face (syn-addition), placing $-\\text{H}$ on the methyl-bearing carbon and $-\\text{B}$ on the adjacent carbon. Alkaline $\\text{H}_2\\text{O}_2$ replaces boron with $-\\text{OH}$ with retention of configuration, resulting in a trans relationship between $-\\text{CH}_3$ and $-\\text{OH}$."
  ),
  ar(
    "Alcohols can act both as Bronsted acids and as Bronsted bases.",
    "Oxygen in alcohols has lone pairs that can accept a proton to form an oxonium ion, while the polar $\\text{O}-\\text{H}$ bond can donate a proton to a strong base.",
    0,
    "Alcohols are amphoteric: the lone pairs on oxygen make them weak Lewis/Bronsted bases capable of protonation by strong mineral acids to form $\\text{R}-\\text{OH}_2^+$, while the hydroxyl hydrogen can be removed by strong bases to form $\\text{R}-\\text{O}^-$."
  ),
  ar(
    "Sodium ethoxide is a stronger base than sodium hydroxide.",
    "Ethanol is a weaker acid than water because the ethyl group donates electron density through $+I$ effect.",
    0,
    "Because water is a stronger acid than ethanol ($pK_a \\approx 15.7$ for water vs $16.0$ for ethanol), its conjugate base $\\text{OH}^-$ is weaker than the conjugate base of ethanol, $\\text{CH}_3\\text{CH}_2\\text{O}^-$."
  ),
  ar(
    "Aluminium isopropoxide is used as a specific reagent in the Meerwein-Ponndorf-Verley (MPV) reduction of ketones to secondary alcohols.",
    "MPV reduction is a reversible hydride transfer process where isopropanol serves as the hydride donor and solvent.",
    0,
    "In the MPV reduction, aluminium isopropoxide facilitates a cyclic six-membered transition state wherein a hydride is transferred from isopropoxide to the carbonyl carbon, reducing ketones cleanly to secondary alcohols."
  ),
  ar(
    "Reduction of but-2-enal with sodium borohydride ($\\text{NaBH}_4$) yields but-2-en-1-ol.",
    "Sodium borohydride selectively reduces the carbonyl group without reducing isolated or conjugated carbon-carbon double bonds under normal conditions.",
    0,
    "$\\text{NaBH}_4$ is a chemoselective reducing agent that reduces aldehydes and ketones to alcohols without affecting $\\text{C}=\\text{C}$ double bonds, converting but-2-enal to but-2-en-1-ol."
  ),
  ar(
    "Primary alcohols can be prepared by the reduction of carboxylic acids with lithium aluminium hydride ($\\text{LiAlH}_4$).",
    "$\\text{LiAlH}_4$ is a powerful nucleophilic hydride donor that can reduce carboxylic acids to primary alcohols via aldehyde intermediates.",
    0,
    "$\\text{LiAlH}_4$ reduces carboxylic acids to primary alcohols through hydride transfer, whereas the milder reagent $\\text{NaBH}_4$ cannot reduce carboxylic acids."
  ),
  ar(
    "During the fermentation of molasses to produce ethanol, yeast enzymes invertase and zymase play crucial catalytic roles.",
    "Invertase hydrolyzes sucrose into glucose and fructose, and zymase subsequently ferments glucose and fructose into ethanol and carbon dioxide.",
    0,
    "Yeast produces invertase, which hydrolyzes sucrose $(\\text{C}_{12}\\text{H}_{22}\\text{O}_{11})$ into glucose and fructose $(\\text{C}_6\\text{H}_{12}\\text{O}_6)$, and zymase converts these hexoses into ethanol and $\\text{CO}_2$."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following reaction sequences will convert propene into propan-1-ol with the highest yield?",
    [
      "$\\text{B}_2\\text{H}_6 / \\text{THF}$ followed by $\\text{H}_2\\text{O}_2 / \\text{NaOH}$",
      "$\\text{dil. } \\text{H}_2\\text{SO}_4, \\Delta$",
      "$\\text{Hg}(\\text{OAc})_2 / \\text{H}_2\\text{O}$ followed by $\\text{NaBH}_4$",
      "$\\text{HBr}$ in presence of peroxides followed by boiling with aqueous $\\text{KOH}$"
    ],
    0,
    "Hydroboration-oxidation $(\\text{B}_2\\text{H}_6 / \\text{THF}$ then $\\text{H}_2\\text{O}_2 / \\text{NaOH})$ provides anti-Markovnikov hydration of propene to give propan-1-ol in excellent yield without rearrangements."
  ),
  mcq(
    "What is the correct increasing order of boiling points for the following isomeric alcohols?\n(I) Butan-1-ol\n(II) Butan-2-ol\n(III) 2-Methylpropan-1-ol\n(IV) 2-Methylpropan-2-ol",
    [
      "(IV) < (II) < (III) < (I)",
      "(I) < (III) < (II) < (IV)",
      "(IV) < (III) < (II) < (I)",
      "(II) < (IV) < (III) < (I)"
    ],
    0,
    "Straight-chain primary alcohol (I, $118^\\circ\\text{C}$) has the highest boiling point. Branching decreases surface area and van der Waals interactions: 2-methylpropan-1-ol (III, $108^\\circ\\text{C}$) > butan-2-ol (II, $99^\\circ\\text{C}$) > 2-methylpropan-2-ol (IV, $83^\\circ\\text{C}$)."
  ),
  mcq(
    "An organic compound 'X' on reaction with methylmagnesium bromide followed by acid hydrolysis yields 2-methylbutan-2-ol. Compound 'X' is:",
    [
      "Butan-2-one",
      "Propan-2-one (acetone)",
      "Butanal",
      "Pentan-3-one"
    ],
    0,
    "Reaction of butan-2-one $(\\text{CH}_3-\\text{CO}-\\text{CH}_2\\text{CH}_3)$ with $\\text{CH}_3\\text{MgBr}$ adds a methyl group to the carbonyl carbon, producing the tertiary alcohol 2-methylbutan-2-ol."
  ),
  mcq(
    "Which of the following compounds gives a primary alcohol upon reaction with phenylmagnesium bromide ($\\text{PhMgBr}$) followed by hydrolysis?",
    [
      "Oxirane (ethylene oxide)",
      "Methanal (formaldehyde)",
      "Both Oxirane and Methanal",
      "Ethanal (acetaldehyde)"
    ],
    2,
    "Reaction of $\\text{PhMgBr}$ with methanal $(\\text{HCHO})$ yields benzyl alcohol $(\\text{PhCH}_2\\text{OH})$, a primary alcohol. Reaction with oxirane yields 2-phenylethan-1-ol $(\\text{PhCH}_2\\text{CH}_2\\text{OH})$, also a primary alcohol. Hence, both yield primary alcohols."
  ),
  mcq(
    "Which of the following is the strongest Bronsted acid?",
    [
      "$\\text{H}_2\\text{O}$",
      "$\\text{CH}_3\\text{OH}$",
      "$\\text{CH}_3\\text{CH}_2\\text{OH}$",
      "$(\\text{CH}_3)_3\\text{C}-\\text{OH}$"
    ],
    0,
    "Water $(pK_a \\approx 15.7)$ is more acidic than aliphatic alcohols except fluorinated/substituted derivatives. Methanol has $pK_a \\approx 15.5$ in gas phase, but in aqueous solution water is generally stronger than ethanol and higher alcohols. However, among standard unsubstituted alcohols and water in typical NCERT context: $\\text{H}_2\\text{O} > \\text{CH}_3\\text{OH} > \\text{CH}_3\\text{CH}_2\\text{OH} > (\\text{CH}_3)_3\\text{C}-\\text{OH}$."
  ),
  mcq(
    "In the reaction of an optically active secondary alcohol $(R)\\text{-butan-2-ol}$ with acetyl chloride in pyridine, the configuration of the resulting ester is:",
    [
      "$(R)$, with retention of configuration",
      "$(S)$, with inversion of configuration",
      "Racemic mixture",
      "Optically inactive meso form"
    ],
    0,
    "During esterification with acetyl chloride, the $\\text{O}-\\text{H}$ bond of the alcohol is cleaved while the chiral carbon-oxygen $(\\text{C}^*-\\text{O})$ bond remains completely intact. Thus, the configuration at the chiral center is retained as $(R)$."
  ),
  mcq(
    "When 1 mole of ethyl ethanoate is treated with excess methylmagnesium iodide followed by acid hydrolysis, the organic product formed is:",
    [
      "2-Methylpropan-2-ol and ethanol",
      "Propan-2-ol and ethanol",
      "Acetone and methanol",
      "Butan-2-ol and methanol"
    ],
    0,
    "Ethyl ethanoate $(\\text{CH}_3\\text{COOCH}_2\\text{CH}_3)$ reacts with the first equivalent of $\\text{CH}_3\\text{MgI}$ to give acetone and ethoxide. Acetone then rapidly consumes a second equivalent of $\\text{CH}_3\\text{MgI}$ to give 2-methylpropan-2-ol. Ethanol is obtained from the ethoxide upon protonation."
  ),
  mcq(
    "The compound that yields 1-methylcyclohexan-1-ol as the major product upon acid-catalyzed hydration is:",
    [
      "Methylenecyclohexane",
      "Cyclohexylmethanol",
      "2-Cyclohexylethan-1-ol",
      "Cyclohex-2-en-1-ol"
    ],
    0,
    "Protonation of the exocyclic double bond of methylenecyclohexane produces the more stable tertiary 1-methylcyclohexyl carbocation, which upon nucleophilic attack by water gives 1-methylcyclohexan-1-ol."
  ),

  // 13 NUM Questions
  num(
    "How many constitutional (structural) isomeric alcohols are possible for the molecular formula $\\text{C}_4\\text{H}_{10}\\text{O}$?",
    4,
    "The 4 constitutional isomeric alcohols of $\\text{C}_4\\text{H}_{10}\\text{O}$ are: (1) butan-1-ol, (2) butan-2-ol, (3) 2-methylpropan-1-ol (isobutanol), and (4) 2-methylpropan-2-ol (tert-butanol)."
  ),
  num(
    "How many total stereoisomers (including enantiomers) exist for pentane-2,3-diol?",
    4,
    "Pentane-2,3-diol has two non-identical stereocenters (C2 and C3). Since the two chiral carbons have different sets of substituents, the number of stereoisomers is $2^n = 2^2 = 4$ (two pairs of enantiomers: $(2R,3R), (2S,3S), (2R,3S), (2S,3R)$)."
  ),
  num(
    "How many total stereoisomers exist for butane-2,3-diol?",
    3,
    "Butane-2,3-diol has two identical chiral centers. It exists as 3 stereoisomers: one meso compound (optically inactive) and a pair of enantiomers ($(2R,3R)$ and $(2S,3S)$)."
  ),
  num(
    "How many moles of hydrogen gas $(\\text{H}_2)$ are liberated when 1 mole of glycerol reacts completely with excess sodium metal?",
    "1.5",
    "Glycerol $(\\text{C}_3\\text{H}_5(\\text{OH})_3)$ has 3 hydroxyl groups. Each $-\\text{OH}$ group releases $0.5$ mole of $\\text{H}_2$ upon reaction with $\\text{Na}$. Thus, 1 mole of glycerol yields $3 \\times 0.5 = 1.5$ moles of $\\text{H}_2$. In integer terms, for 2 moles of glycerol, 3 moles of $\\text{H}_2$ are liberated; for 1 mole, the answer is 1.5. To keep it an integer for numerical format: 'How many moles of active sodium metal are consumed by 1 mole of glycerol?' Let's frame it as sodium metal consumed: 3."
  ),
  num(
    "How many moles of metallic sodium are consumed by complete reaction with 1 mole of glycerol (propane-1,2,3-triol)?",
    3,
    "Glycerol has three $-\\text{OH}$ groups per molecule: $\\text{C}_3\\text{H}_5(\\text{OH})_3 + 3\\text{Na} \\rightarrow \\text{C}_3\\text{H}_5(\\text{ONa})_3 + \\frac{3}{2}\\text{H}_2$. Hence, exactly 3 moles of sodium are consumed per mole of glycerol."
  ),
  num(
    "What is the total number of chiral carbon atoms present in one molecule of D-glucose in its open-chain form?",
    4,
    "In open-chain D-glucose $(\\text{CHO}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH})$, carbons C2, C3, C4, and C5 are asymmetric (chiral), giving a total of 4 chiral carbons."
  ),
  num(
    "How many moles of methylmagnesium bromide $(\\text{CH}_3\\text{MgBr})$ are consumed per mole of diethyl carbonate $((\\text{CH}_3\\text{CH}_2\\text{O})_2\\text{C}=\\text{O})$ to form 2-methylpropan-2-ol after complete reaction and acid workup?",
    3,
    "Diethyl carbonate has two ethoxy leaving groups on the carbonyl carbon. The first two equivalents of $\\text{CH}_3\\text{MgBr}$ displace both ethoxide groups to form acetone, and the third equivalent adds to acetone to yield tert-butoxide. Hence, 3 moles of Grignard reagent are consumed."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent, DBE) of a monohydric alcohol having the molecular formula $\\text{C}_7\\text{H}_8\\text{O}$?",
    4,
    "For $\\text{C}_7\\text{H}_8\\text{O}$, $\\text{DBE} = C + 1 - \\frac{H}{2} = 7 + 1 - \\frac{8}{2} = 4$. This corresponds to a benzene ring (3 double bonds + 1 ring, such as in benzyl alcohol or cresol)."
  ),
  num(
    "How many isomeric primary alcohols having the molecular formula $\\text{C}_5\\text{H}_{12}\\text{O}$ exist?",
    4,
    "The primary alcohols of $\\text{C}_5\\text{H}_{12}\\text{O}$ are: (1) pentan-1-ol, (2) 2-methylbutan-1-ol, (3) 3-methylbutan-1-ol, and (4) 2,2-dimethylpropan-1-ol (neopentyl alcohol). Total = 4."
  ),
  num(
    "What is the maximum number of hydrogen bonds that a single molecule of ethanol can participate in with surrounding water molecules?",
    3,
    "The oxygen atom of ethanol has two lone pairs (can accept 2 H-bonds) and one hydrogen atom bonded to oxygen (can donate 1 H-bond). Thus, a single ethanol molecule can participate in a maximum of $2 + 1 = 3$ hydrogen bonds."
  ),
  num(
    "How many moles of $\\text{H}_2\\text{O}$ are produced when 1 mole of an alcohol undergoes complete Fischer esterification with 1 mole of ethanoic acid?",
    1,
    "Fischer esterification follows the stoichiometry: $\\text{R}-\\text{OH} + \\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COOR} + \\text{H}_2\\text{O}$. Exactly 1 mole of water is produced per mole of alcohol."
  ),
  num(
    "In the industrial synthesis of methanol from water gas: $\\text{CO} + 2\\text{H}_2 \\xrightarrow{\\text{catalyst}} \\text{CH}_3\\text{OH}$, how many moles of $\\text{H}_2$ gas are required to produce 1 mole of methanol?",
    2,
    "From the balanced chemical equation, 1 mole of $\\text{CO}$ reacts with 2 moles of $\\text{H}_2$ to produce 1 mole of methanol."
  ),
  num(
    "What is the oxidation state of the carbon atom bonded to the hydroxyl group in methanol $(\\text{CH}_3\\text{OH})$?",
    -2,
    "In $\\text{CH}_3\\text{OH}$, carbon is bonded to three hydrogens (each $+1$, contributing $-3$ to C) and one oxygen ($-1$, contributing $+1$ to C). Total oxidation state = $-3 + 1 = -2$."
  )
];

// Fix question 4 in num to avoid duplicate question index
// We had 26 AR, 8 MCQ, 14 NUM (let's check length)
console.log(`Part 1 total questions: ${questions.length}`);
// We need exactly 26 AR, 8 MCQ, 13 NUM (total 47)
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

// If NUM is 14, remove the 1.5 mole duplicate
const finalNums = nums.filter(q => !q.question.includes("1.5"));
const finalQuestions = [...ars, ...mcqs, ...finalNums];
console.log(`Final Part 1 questions: ${finalQuestions.length} (AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${finalNums.length})`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part1.js"),
  "module.exports = " + JSON.stringify(finalQuestions, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part1.js");
