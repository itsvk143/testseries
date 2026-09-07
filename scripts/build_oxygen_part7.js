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
    subTopic: "Ketones",
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
    subTopic: "Ketones",
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
    subTopic: "Ketones",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Ketones are less reactive towards nucleophilic addition reactions than aldehydes.",
    "In ketones, the two electron-releasing alkyl groups reduce the electrophilicity of the carbonyl carbon and cause greater steric hindrance to the approaching nucleophile.",
    0,
    "Both electronic (inductive $+I$ donation from two alkyl groups neutralizing partial positive charge on carbon) and steric factors (crowding of two alkyl groups upon tetrahedral transition state formation) make ketones less reactive than aldehydes."
  ),
  ar(
    "Acetophenone gives a yellow crystalline precipitate of iodoform on warming with iodine and aqueous sodium hydroxide, whereas benzophenone does not.",
    "The iodoform reaction is specific to compounds containing the methyl carbonyl group ($\\text{CH}_3-\\text{C}=\\text{O}$) or compounds that can be oxidized to it.",
    0,
    "Acetophenone $(\\text{C}_6\\text{H}_5\\text{COCH}_3)$ contains a methyl keto group, undergoing $\\alpha$-iodination followed by cleavage to yellow $\\text{CHI}_3$. Benzophenone $(\\text{C}_6\\text{H}_5\\text{COC}_6\\text{H}_5)$ has two phenyl groups and lacks $\\alpha$-methyl hydrogens, giving a negative test."
  ),
  ar(
    "Reaction of acyl chlorides with dialkylcadmium is preferred over Grignard reagents for the preparation of ketones.",
    "Dialkylcadmium reagents are less nucleophilic and react with acyl chlorides to give ketones, but do not react further with the ketone formed.",
    0,
    "Grignard reagents are highly reactive and add to the ketone product to produce tertiary alcohols. Dialkylcadmium $(\\text{R}_2\\text{Cd})$ is less reactive due to lower electropositivity of cadmium and halts cleanly at the ketone stage."
  ),
  ar(
    "Pentan-2-one and pentan-3-one can be distinguished chemically using the iodoform test.",
    "Pentan-2-one contains a methyl ketone group that reacts with $\\text{I}_2 / \\text{NaOH}$ to yield a yellow precipitate of $\\text{CHI}_3$, whereas pentan-3-one does not possess a methyl keto group.",
    0,
    "Pentan-2-one is $\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$ (positive iodoform test). Pentan-3-one is $\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$ (negative iodoform test), allowing easy chemical differentiation."
  ),
  ar(
    "Clemmensen reduction converts ketones directly into alkanes using zinc amalgam ($\\text{Zn}-\\text{Hg}$) and concentrated $\\text{HCl}$.",
    "Clemmensen reduction is suitable for ketones containing acid-sensitive functional groups such as acetals or tertiary alcohols.",
    2,
    "Assertion is true: Clemmensen reduction converts $;\\text{C}=\\text{O}$ to $;\\text{CH}_2$ using $\\text{Zn}-\\text{Hg}/\\text{HCl}$. Reason is false because concentrated $\\text{HCl}$ destroys acid-sensitive groups; Wolff-Kishner reduction (alkaline) is used for acid-sensitive compounds."
  ),
  ar(
    "Wolff-Kishner reduction involves heating a hydrazone of a ketone with potassium hydroxide in high-boiling ethylene glycol.",
    "Under strongly alkaline conditions, the hydrazone intermediate decomposes with evolution of nitrogen gas ($\\text{N}_2$) to yield the corresponding hydrocarbon.",
    0,
    "The hydrazone intermediate $(;\\text{C}=\\text{N}-\\text{NH}_2)$ is deprotonated by $\\text{OH}^-$, followed by loss of stable $\\text{N}_2$ gas and proton capture from the solvent to yield the methylene group $(;\\text{CH}_2)$."
  ),
  ar(
    "According to Popoff's rule, drastic oxidation of unsymmetrical ketones results in cleavage such that the carbonyl group remains predominantly with the smaller alkyl group.",
    "The smaller alkyl group undergoes less steric hindrance during enolization and subsequent cleavage of the $\\text{C}-\\text{C}$ bond.",
    0,
    "During vigorous oxidation of unsymmetrical ketones (e.g., butan-2-one), enolization preferentially involves the smaller alkyl chain, so the carbonyl carbon predominantly stays attached to the smaller alkyl group to yield carboxylic acids."
  ),
  ar(
    "Reduction of acetone with magnesium amalgam ($\\text{Mg}-\\text{Hg}$) in benzene followed by treatment with water yields pinacol (2,3-dimethylbutane-2,3-diol).",
    "The reaction proceeds via a one-electron transfer from magnesium to two molecules of acetone, forming a ketyl radical anion intermediate that dimerizes.",
    0,
    "Magnesium transfers one electron to the carbonyl carbon of two acetone molecules, generating a cyclic magnesium pinacolate via radical coupling. Hydrolysis with water produces pinacol."
  ),
  ar(
    "Propyne upon hydration in the presence of $\\text{HgSO}_4$ and dilute $\\text{H}_2\\text{SO}_4$ at $333\\text{ K}$ yields propan-2-one (acetone).",
    "Addition of water to propyne follows Markovnikov's rule to give prop-1-en-2-ol, which tautomerizes to the more stable keto form.",
    0,
    "Hydration of propyne adds $-\\text{OH}$ to C2 (Markovnikov), producing the enol prop-1-en-2-ol. Tautomerization rapidly converts the less stable enol into propan-2-one."
  ),
  ar(
    "Reaction of benzenenitrile (benzonitrile) with methylmagnesium bromide followed by acid hydrolysis yields acetophenone.",
    "Nucleophilic addition of Grignard reagent to a nitrile produces an imine salt, which upon acid hydrolysis yields a ketone and ammonia.",
    0,
    "$\\text{Ph}-\\text{C}\\equiv\\text{N} + \\text{CH}_3\\text{MgBr} \\rightarrow \\text{Ph}-\\text{C}(\\text{CH}_3)=\\text{NMgBr} \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{Ph}-\\text{CO}-\\text{CH}_3 + \\text{NH}_4^+ + \\text{Mg}^{2+} + \\text{Br}^-$. This is a standard route to ketones."
  ),
  ar(
    "Acetone does not reduce Fehling's solution or Tollens' reagent.",
    "Ketones lack a hydrogen atom attached directly to the carbonyl carbon, making them resistant to oxidation under mild basic conditions.",
    0,
    "Because ketones do not possess a formyl hydrogen, oxidation requires breaking strong carbon-carbon single bonds, which mild reagents like Tollens' and Fehling's cannot accomplish."
  ),
  ar(
    "Friedel-Crafts acylation of benzene with acetyl chloride in the presence of anhydrous $\\text{AlCl}_3$ yields acetophenone.",
    "The active electrophile in Friedel-Crafts acylation is the resonance-stabilized acylium ion ($\\text{CH}_3-\\text{C}\\equiv\\text{O}^+$).",
    0,
    "Acetyl chloride reacts with $\\text{AlCl}_3$ to generate the linear, resonance-stabilized acylium ion $(\\text{CH}_3-\\text{C}^+=\\text{O} \\leftrightarrow \\text{CH}_3-\\text{C}\\equiv\\text{O}^+)$, which attacks benzene to produce acetophenone."
  ),
  ar(
    "Ketones generally form bisulfite addition compounds with saturated aqueous $\\text{NaHSO}_3$ less readily than aldehydes.",
    "Bisulfite addition involves attack of the bulky sulfite nucleophile on the carbonyl carbon, which is sterically impeded by two alkyl substituents in ketones.",
    0,
    "Bisulfite addition is highly sensitive to steric hindrance. Aliphatic methyl ketones form addition products, but bulkier ketones (like diethyl ketone or acetophenone) react very poorly or fail to react."
  ),
  ar(
    "Cyclohexanone on reaction with hydroxylamine hydrochloride gives cyclohexanone oxime, which on heating with concentrated sulfuric acid undergoes Beckmann rearrangement to yield $\\varepsilon$-caprolactam.",
    "$\\varepsilon$-Caprolactam is a cyclic amide that serves as the starting monomer for the synthesis of Nylon-6.",
    1,
    "Both statements are true. Beckmann rearrangement converts cyclohexanone oxime to $\\varepsilon$-caprolactam, which is polymerized to Nylon-6. However, the commercial use in Nylon-6 is not the chemical explanation of how the Beckmann rearrangement occurs."
  ),
  ar(
    "Acetone forms a cyclic ketal on treatment with ethylene glycol in the presence of dry $\\text{HCl}$ gas.",
    "Cyclic ketals are stable towards aqueous bases and nucleophiles, making them effective protecting groups for ketone carbonyls.",
    1,
    "Both statements are true. Acetone condenses with ethylene glycol to form a cyclic five-membered 1,3-dioxolane ketal. Ketal formation is widely used to protect carbonyls against basic/nucleophilic reagents, but protecting utility is an application rather than a mechanical cause of cyclization."
  ),
  ar(
    "In the haloform reaction of acetone, exactly 3 moles of sodium hypoiodite are consumed to convert the methyl group into an iodoform molecule.",
    "Each of the three $\\alpha$-hydrogen atoms on the methyl group is sequentially replaced by iodine atoms through an enolate intermediate.",
    0,
    "Base abstracts an $\\alpha$-H to form an enolate, which attacks $\\text{I}_2$. The newly introduced iodine increases the acidity of the remaining $\\alpha$-hydrogens, accelerating subsequent iodinations until $-\\text{CI}_3$ is formed."
  ),
  ar(
    "Oxidation of butan-2-one with concentrated nitric acid produces a mixture of ethanoic acid and propanoic acid.",
    "Under vigorous conditions, cleavage of either $\\text{C}_1-\\text{C}_2$ or $\\text{C}_2-\\text{C}_3$ carbon-carbon bonds can occur in butan-2-one.",
    0,
    "Cleavage between C1 and C2 produces propanoic acid and formic acid (oxidized to $\\text{CO}_2$), while cleavage between C2 and C3 produces two molecules of ethanoic acid."
  ),
  ar(
    "Acetophenone does not undergo Friedel-Crafts alkylation with methyl chloride and anhydrous $\\text{AlCl}_3$.",
    "The acetyl group ($-\\text{COCH}_3$) is a strongly deactivating group that deactivates the benzene ring towards further electrophilic aromatic substitution, and the catalyst complexes with the carbonyl oxygen.",
    0,
    "Strong electron withdrawal by the carbonyl group deactivates the aromatic ring, and the Lewis acid catalyst $\\text{AlCl}_3$ complexes with the carbonyl lone pair, completely shutting down Friedel-Crafts alkylation."
  ),
  ar(
    "The enol content of pentane-2,4-dione (acetylacetone) is unusually high (around $76\\%$) in liquid form.",
    "The enol form of pentane-2,4-dione is stabilized by an intramolecular hydrogen bond forming a stable six-membered pseudo-aromatic chelate ring with conjugated double bonds.",
    0,
    "In acetylacetone, the enol tautomer forms a conjugated six-membered ring closed by strong intramolecular $\\text{O}-\\text{H}\\cdots\\text{O}$ hydrogen bonding, making the enol form thermodynamically predominant over the keto form."
  ),
  ar(
    "When acetone is treated with dry barium hydroxide, diacetone alcohol is formed as the primary condensation product.",
    "Barium hydroxide acts as a base catalyst that promotes aldol-type dimerization of two molecules of acetone.",
    0,
    "Base deprotonates acetone to generate an enolate, which attacks another acetone molecule to form 4-hydroxy-4-methylpentan-2-one (diacetone alcohol)."
  ),
  ar(
    "Acetone on distillation with concentrated sulfuric acid undergoes condensation to yield mesitylene (1,3,5-trimethylbenzene).",
    "Concentrated sulfuric acid acts as a dehydrating agent that causes trimerization of three molecules of acetone with elimination of three molecules of water.",
    0,
    "Three acetone molecules undergo acid-catalyzed self-condensation and triple dehydration: $3\\text{CH}_3\\text{COCH}_3 \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, \\Delta} \\text{C}_6\\text{H}_3(\\text{CH}_3)_3 + 3\\text{H}_2\\text{O}$ to produce mesitylene."
  ),
  ar(
    "Ketones have dipole moments ranging from $2.6$ to $2.8\\text{ D}$, higher than ethers.",
    "The $\\text{C}=\\text{O}$ double bond has a shorter bond distance, more polarizable $\\pi$-electrons, and greater charge separation than the $\\text{C}-\\text{O}$ single bond in ethers.",
    0,
    "The presence of a polarizable $\\pi$-bond in the carbonyl group causes substantial charge separation $(\\text{C}^{\\delta+}-\\text{O}^{\\delta-})$, resulting in a significantly larger dipole moment than in ethers."
  ),
  ar(
    "In the reaction of a ketone with 2,4-dinitrophenylhydrazine (Brady's reagent), an orange-yellow crystalline derivative is formed.",
    "The formation of a 2,4-dinitrophenylhydrazone involves nucleophilic addition of the hydrazine followed by elimination of a water molecule.",
    0,
    "Carbonyls condense with 2,4-DNP with loss of water to yield insoluble, brightly colored 2,4-dinitrophenylhydrazones, a standard test for aldehydes and ketones."
  ),
  ar(
    "Benzophenone gives a negative Fehling's test and a negative Tollens' test.",
    "Benzophenone is a diaryl ketone and neither contains a formyl hydrogen nor can it undergo oxidation under mild basic conditions.",
    0,
    "Diaryl ketones cannot be oxidized by Tollens' or Fehling's reagents because oxidation would require cleavage of stable aromatic-carbonyl carbon-carbon bonds."
  ),
  ar(
    "Baeyer-Villiger oxidation of acetophenone with peroxy acids yields phenyl acetate rather than methyl benzoate.",
    "The migratory aptitude of the phenyl group is greater than that of the methyl group in the rearrangement step.",
    0,
    "In Baeyer-Villiger oxidation, migration of the more electron-rich group occurs with retention of configuration. Because phenyl has a higher migratory aptitude than methyl, phenyl migrates to oxygen, producing phenyl acetate $(\\text{CH}_3\\text{COOC}_6\\text{H}_5)$."
  ),
  ar(
    "Addition of sodium bisulfite to acetone produces a crystalline water-soluble bisulfite adduct.",
    "The reaction involves nucleophilic attack of the sulfur atom of bisulfite on the electrophilic carbonyl carbon of acetone.",
    0,
    "Sulfur is more nucleophilic than oxygen in bisulfite $(^-\\text{SO}_3\\text{H})$. Attack of sulfur on the carbonyl carbon forms a stable $\\text{C}-\\text{S}$ bonded adduct."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following compounds gives a positive iodoform test upon reaction with $\\text{I}_2$ and aqueous $\\text{NaOH}$?",
    [
      "Acetophenone (methyl phenyl ketone)",
      "Benzophenone (diphenyl ketone)",
      "Pentan-3-one",
      "Propanal"
    ],
    0,
    "Acetophenone $(\\text{C}_6\\text{H}_5\\text{COCH}_3)$ contains a methyl keto group and yields yellow crystalline iodoform $(\\text{CHI}_3)$ with $\\text{I}_2/\\text{NaOH}$. The other options lack this group."
  ),
  mcq(
    "Which reagent is best suited to convert acetophenone into ethylbenzene in a single step under acidic conditions?",
    [
      "$\\text{Zn}-\\text{Hg} / \\text{conc. } \\text{HCl}$ (Clemmensen reduction)",
      "$\\text{NH}_2\\text{NH}_2 / \\text{KOH} / \\text{glycol}$ (Wolff-Kishner reduction)",
      "$\\text{LiAlH}_4$ in ether",
      "$\\text{NaBH}_4$ in ethanol"
    ],
    0,
    "Clemmensen reduction $(\\text{Zn}-\\text{Hg} / \\text{conc. } \\text{HCl})$ reduces the ketone carbonyl group of acetophenone directly to a methylene group under acidic conditions, forming ethylbenzene."
  ),
  mcq(
    "Dialkylcadmium is prepared by the reaction of cadmium chloride with which organometallic reagent?",
    [
      "Grignard reagent ($\\text{RMgX}$)",
      "Alkyl lithium ($\\text{RLi}$)",
      "Dialkylzinc ($\\text{R}_2\\text{Zn}$)",
      "Alkyl sodium"
    ],
    0,
    "Dialkylcadmium is prepared from Grignard reagents: $2\\text{RMgX} + \\text{CdCl}_2 \\rightarrow \\text{R}_2\\text{Cd} + 2\\text{Mg(X)Cl}$."
  ),
  mcq(
    "Distillation of acetone with concentrated sulfuric acid gives which aromatic hydrocarbon as the condensation product?",
    [
      "Mesitylene (1,3,5-trimethylbenzene)",
      "Toluene",
      "Xylene",
      "Pseudocumene (1,2,4-trimethylbenzene)"
    ],
    0,
    "Three molecules of acetone undergo acid-catalyzed condensation with concentrated sulfuric acid with the elimination of three molecules of water to form mesitylene (1,3,5-trimethylbenzene)."
  ),
  mcq(
    "When butan-2-one is treated with methylmagnesium bromide followed by acid hydrolysis, the product obtained is:",
    [
      "2-Methylbutan-2-ol",
      "2-Methylbutan-1-ol",
      "Pentan-2-ol",
      "Pentan-3-ol"
    ],
    0,
    "Butan-2-one $(\\text{CH}_3\\text{COCH}_2\\text{CH}_3)$ reacts with $\\text{CH}_3\\text{MgBr}$ to add a methyl group to C2, giving the tertiary alcohol 2-methylbutan-2-ol upon hydrolysis."
  ),
  mcq(
    "In the Baeyer-Villiger oxidation of cyclohexanone with m-chloroperbenzoic acid ($\\text{mCPBA}$), the cyclic product obtained is:",
    [
      "$\\varepsilon$-Caprolactone (a 7-membered cyclic ester)",
      "Adipic acid",
      "Glutaric acid",
      "$\\varepsilon$-Caprolactam"
    ],
    0,
    "Baeyer-Villiger oxidation of cyclic ketones inserts an oxygen atom into the ring adjacent to the carbonyl group, converting six-membered cyclohexanone into the seven-membered lactone, $\\varepsilon$-caprolactone."
  ),
  mcq(
    "Which of the following compounds has the highest percentage of enol tautomer at equilibrium in the liquid state?",
    [
      "Pentane-2,4-dione (acetylacetone)",
      "Ethyl acetoacetate",
      "Propan-2-one (acetone)",
      "Butan-2-one"
    ],
    0,
    "Pentane-2,4-dione is a $\\beta$-diketone with around $76\\%$ enol content at equilibrium due to resonance stabilization and strong intramolecular hydrogen bonding forming a six-membered chelate ring."
  ),
  mcq(
    "Reduction of acetone with magnesium amalgam followed by water yields:",
    [
      "Pinacol (2,3-dimethylbutane-2,3-diol)",
      "Propan-2-ol",
      "Propane",
      "Diacetone alcohol"
    ],
    0,
    "Reaction of acetone with $\\text{Mg}-\\text{Hg}$ in benzene involves one-electron reduction to a ketyl radical followed by radical dimerization to give pinacol (2,3-dimethylbutane-2,3-diol) after hydrolysis."
  ),

  // 13 NUM Questions
  num(
    "How many moles of methyl groups are present in one molecule of mesitylene (1,3,5-trimethylbenzene)?",
    3,
    "Mesitylene is 1,3,5-trimethylbenzene, which contains exactly 3 methyl groups attached to the aromatic benzene ring."
  ),
  num(
    "How many $\\alpha$-hydrogen atoms are present in one molecule of propan-2-one (acetone)?",
    6,
    "Acetone is $\\text{CH}_3-\\text{CO}-\\text{CH}_3$. Both methyl groups are adjacent to the carbonyl carbon, giving $3 + 3 = 6$ $\\alpha$-hydrogen atoms."
  ),
  num(
    "How many moles of $\\text{I}_2$ are consumed in the haloform reaction of 1 mole of acetophenone?",
    3,
    "Acetophenone $(\\text{PhCOCH}_3)$ has one methyl group with 3 $\\alpha$-hydrogens. The reaction is: $\\text{PhCOCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\rightarrow \\text{PhCOONa} + \\text{CHI}_3 + 3\\text{NaI} + 3\\text{H}_2\\text{O}$. Exactly 3 moles of $\\text{I}_2$ are consumed."
  ),
  num(
    "How many constitutional (structural) isomeric ketones exist for the molecular formula $\\text{C}_5\\text{H}_{10}\\text{O}$?",
    3,
    "The 3 constitutional isomeric ketones of $\\text{C}_5\\text{H}_{10}\\text{O}$ are: (1) pentan-2-one, (2) pentan-3-one, and (3) 3-methylbutan-2-one. Total = 3."
  ),
  num(
    "How many carbon atoms are present in one molecule of pinacol (2,3-dimethylbutane-2,3-diol)?",
    6,
    "Pinacol is formed by the reductive dimerization of two acetone molecules (3 carbons each): $2 \\times 3 = 6$ carbon atoms."
  ),
  num(
    "How many moles of $\\text{CdCl}_2$ are produced per mole of dialkylcadmium synthesized from Grignard reagent and cadmium chloride?",
    0,
    "Cadmium chloride is a reactant, not a product: $2\\text{RMgX} + \\text{CdCl}_2 \\rightarrow \\text{R}_2\\text{Cd} + 2\\text{Mg(X)Cl}$. Zero moles of $\\text{CdCl}_2$ are produced."
  ),
  num(
    "How many moles of ketone are produced by the reaction of 1 mole of dialkylcadmium $(\\text{R}_2\\text{Cd})$ with 2 moles of an acyl chloride?",
    2,
    "The stoichiometry is: $\\text{R}_2\\text{Cd} + 2\\text{R}'\\text{COCl} \\rightarrow 2\\text{R}'\\text{COR} + \\text{CdCl}_2$. Exactly 2 moles of ketone are produced."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of acetophenone $(\\text{C}_8\\text{H}_8\\text{O})$?",
    5,
    "For $\\text{C}_8\\text{H}_8\\text{O}$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 8 + 1 - \\frac{8}{2} = 9 - 4 = 5$ (1 benzene ring + 3 aromatic $\\pi$-bonds + 1 carbonyl $\\pi$-bond = 5)."
  ),
  num(
    "What is the oxidation state of the carbonyl carbon in propan-2-one $(\\text{CH}_3-\\text{CO}-\\text{CH}_3)$?",
    2,
    "In acetone, the carbonyl carbon is double-bonded to oxygen ($+2$) and single-bonded to two carbons ($0$ each). Net oxidation state = $+2$."
  ),
  num(
    "How many molecules of water are eliminated during the trimerization of 3 molecules of acetone to 1 molecule of mesitylene?",
    3,
    "The condensation equation is: $3\\text{CH}_3\\text{COCH}_3 \\rightarrow \\text{C}_9\\text{H}_{12} + 3\\text{H}_2\\text{O}$. Exactly 3 molecules of water are eliminated."
  ),
  num(
    "How many isomers among the constitutional ketones of molecular formula $\\text{C}_5\\text{H}_{10}\\text{O}$ give a positive iodoform test?",
    2,
    "Among the three ketones of $\\text{C}_5\\text{H}_{10}\\text{O}$, pentan-2-one and 3-methylbutan-2-one both contain the $\\text{CH}_3\\text{CO}-$ group and give positive iodoform tests. Pentan-3-one does not. Total = 2."
  ),
  num(
    "How many chiral carbon atoms are present in one molecule of 3-methylpentan-2-one?",
    1,
    "In 3-methylpentan-2-one $(\\text{CH}_3-\\text{CO}-\\text{CH}(\\text{CH}_3)-\\text{CH}_2\\text{CH}_3)$, carbon-3 is bonded to $-\\text{H}$, $-\\text{CH}_3$, $-\\text{CH}_2\\text{CH}_3$, and $-\\text{COCH}_3$. It is an asymmetric carbon, giving 1 chiral center."
  ),
  num(
    "How many moles of $\\text{NaOH}$ are consumed in the complete haloform reaction of 1 mole of a methyl ketone with $\\text{I}_2$?",
    4,
    "The complete haloform reaction equation is: $\\text{RCOCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\rightarrow \\text{RCOONa} + \\text{CHI}_3 + 3\\text{NaI} + 3\\text{H}_2\\text{O}$. Exactly 4 moles of $\\text{NaOH}$ are consumed."
  )
];

console.log(`Part 7 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part7.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part7.js");
