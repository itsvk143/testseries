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
    subTopic: "Ethers",
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
    subTopic: "Ethers",
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
    subTopic: "Ethers",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "The $\\text{C}-\\text{O}-\\text{C}$ bond angle in dimethyl ether ($111.7^\\circ$) is slightly greater than the standard tetrahedral angle ($109.5^\\circ$).",
    "Repulsive steric interactions between the bulky alkyl (methyl) groups on the oxygen atom push the bonds further apart than the normal tetrahedral angle.",
    0,
    "The repulsion between the non-bonded electron clouds of the two bulky methyl groups overcomes lone-pair/lone-pair repulsion and widens the bond angle from $109.5^\\circ$ to $111.7^\\circ$."
  ),
  ar(
    "Boiling point of diethyl ether ($35^\\circ\\text{C}$) is much lower than that of butan-1-ol ($118^\\circ\\text{C}$) despite having identical molecular formulas.",
    "Molecules of butan-1-ol are associated through intermolecular hydrogen bonding, whereas ether molecules cannot form hydrogen bonds with each other.",
    0,
    "Alcohols have a hydrogen atom attached to oxygen capable of donating H-bonds, forming strong intermolecular networks. Ethers lack an acidic $\\text{O}-\\text{H}$ hydrogen and cannot form intermolecular H-bonds with themselves."
  ),
  ar(
    "Diethyl ether and butan-1-ol have comparable solubilities in water (about $7.5\\text{ g}$ per $100\\text{ mL}$ at $25^\\circ\\text{C}$).",
    "The oxygen atom of diethyl ether has lone pairs that can accept hydrogen bonds from polar water molecules.",
    0,
    "Even though ethers cannot hydrogen bond to themselves, their oxygen atom acts as a hydrogen-bond acceptor with water molecules, giving them water solubility comparable to isomeric alcohols."
  ),
  ar(
    "Williamson synthesis of tert-butyl ethyl ether is carried out by reacting sodium tert-butoxide with ethyl bromide, and NOT ethyl alcohol with tert-butyl bromide.",
    "Reaction of sodium ethoxide with tert-butyl bromide results predominantly in elimination to give 2-methylpropene instead of substitution.",
    0,
    "Williamson synthesis is an $\\text{S}_N2$ displacement. With a tertiary alkyl halide, the strongly basic alkoxide ion causes bimolecular elimination ($\\text{E}2$) rather than substitution, producing an alkene exclusively."
  ),
  ar(
    "Acid-catalyzed intermolecular dehydration of ethanol to diethyl ether is carried out strictly at $413\\text{ K}$ ($140^\\circ\\text{C}$).",
    "At higher temperatures such as $443\\text{ K}$ ($170^\\circ\\text{C}$), elimination dominates to form ethene.",
    0,
    "Intermolecular $\\text{S}_N2$ attack of ethanol on protonated ethanol occurs preferentially at $413\\text{ K}$, whereas at $443\\text{ K}$, the activation barrier for unimolecular elimination ($\\text{E}1$) is surpassed, producing ethene."
  ),
  ar(
    "Reaction of methoxybenzene (anisole) with concentrated $\\text{HI}$ yields phenol and methyl iodide, but never iodobenzene and methanol.",
    "The aromatic carbon-oxygen bond in anisole possesses partial double bond character due to resonance, making it much stronger and resistant to cleavage than the aliphatic alkyl-oxygen bond.",
    0,
    "Resonance delocalizes oxygen's lone pairs into the aromatic ring, giving the $\\text{C}(\\text{aryl})-\\text{O}$ bond partial double bond character. Furthermore, iodide attacks the less sterically hindered methyl carbon via $\\text{S}_N2$ to form $\\text{CH}_3\\text{I}$ and phenol."
  ),
  ar(
    "Reaction of tert-butyl methyl ether with one equivalent of cold $\\text{HI}$ yields tert-butyl iodide and methanol.",
    "The reaction proceeds via an $\\text{S}_N1$ mechanism involving the cleavage of the protonated ether to form the stable tertiary carbocation.",
    0,
    "Protonation of the ether produces an oxonium ion. Because a tertiary group is present, heterolysis occurs via an $\\text{S}_N1$ pathway generating the stable tert-butyl cation, which then captures iodide to form tert-butyl iodide."
  ),
  ar(
    "Reaction of ethyl methyl ether with one equivalent of cold $\\text{HI}$ gives methyl iodide and ethanol.",
    "In the $\\text{S}_N2$ pathway of unsymmetrical primary ethers, the nucleophile iodide ion attacks the less sterically hindered methyl group.",
    0,
    "With primary alkyl groups, the cleavage follows an $\\text{S}_N2$ mechanism. Iodide preferentially attacks the smaller, less hindered methyl group, producing methyl iodide and ethanol."
  ),
  ar(
    "Anisole undergoes bromination with bromine in ethanoic acid to give p-bromoanisole in $90\\%$ yield without requiring an $\\text{FeBr}_3$ catalyst.",
    "The methoxy group ($-\\text{OCH}_3$) strongly activates the aromatic benzene ring towards electrophilic substitution through its $+M$ resonance effect.",
    0,
    "The $+M$ effect of the methoxy group significantly increases the electron density on the benzene ring (particularly at ortho and para positions), allowing bromination to occur rapidly even without a Lewis acid catalyst."
  ),
  ar(
    "Samples of diethyl ether that have been stored for a long time in contact with air and sunlight should never be distilled to dryness.",
    "Prolonged exposure of ethers to atmospheric oxygen and light leads to the formation of unstable, highly explosive ether peroxides.",
    0,
    "Ethers undergo free-radical auto-oxidation at the $\\alpha$-carbon to form organic peroxides and hydroperoxides. Concentrating them by distillation to dryness can lead to violent explosions."
  ),
  ar(
    "Presence of peroxides in old samples of diethyl ether can be detected by shaking with an aqueous acidified solution of potassium iodide followed by starch.",
    "Peroxides oxidize iodide ions to free iodine, which develops a characteristic intense blue color with starch.",
    0,
    "Peroxides have oxidizing properties: they oxidize $\\text{I}^-$ to $\\text{I}_2$. The liberated iodine reacts with starch indicator to give an unmistakable deep blue complex."
  ),
  ar(
    "Bromobenzene cannot be used as the aryl halide component in the Williamson synthesis of anisole with sodium methoxide.",
    "The aryl carbon-bromine bond has partial double bond character due to resonance and does not undergo nucleophilic substitution via $\\text{S}_N2$ under normal conditions.",
    0,
    "Aryl halides are inert to nucleophilic substitution under standard conditions because of resonance stabilization, $sp^2$ hybridization, and steric/electronic repulsion of the incoming nucleophile by the aromatic $\\pi$-cloud."
  ),
  ar(
    "Ethers behave as Lewis bases and dissolve in cold, concentrated inorganic acids like sulfuric acid.",
    "The oxygen atom of the ether possesses two unshared lone pairs of electrons that can accept a proton to form a stable oxonium salt.",
    0,
    "Ethers act as Lewis/Bronsted bases: $\\text{R}-\\text{O}-\\text{R} + \\text{H}_2\\text{SO}_4 \\rightarrow [\\text{R}_2\\text{OH}]^+ \\text{HSO}_4^-$. Formation of soluble oxonium salts allows ethers to dissolve in cold conc. mineral acids."
  ),
  ar(
    "Diethyl ether forms a coordinate complex with boron trifluoride known as boron trifluoride etherate ($(\\text{C}_2\\text{H}_5)_2\\text{O} \\rightarrow \\text{BF}_3$).",
    "Boron trifluoride is an electron-deficient Lewis acid that accepts an electron pair from the ethereal oxygen atom.",
    0,
    "The oxygen atom in ether donates one of its lone pairs into the vacant $2p$ orbital of the boron atom in $\\text{BF}_3$, forming a stable Lewis acid-base adduct."
  ),
  ar(
    "Friedel-Crafts alkylation of anisole with chloromethane in the presence of anhydrous $\\text{AlCl}_3$ gives 4-methoxytoluene as the major product.",
    "The methoxy group is ortho/para-directing and the para position is less sterically hindered than the ortho position.",
    0,
    "The $+M$ activating effect directs electrophilic attack to ortho and para positions; steric repulsion between the incoming methyl group and the methoxy group makes the para isomer the predominant product."
  ),
  ar(
    "Heating anisole with excess concentrated hydriodic acid produces phenol and methyl iodide, but not iodobenzene.",
    "The $\\text{C}_{sp^2}-\\text{O}$ bond in phenol is resistant to further cleavage by $\\text{HI}$ under ordinary conditions.",
    0,
    "Even with excess hot $\\text{HI}$, phenol does not react to form iodobenzene because the phenolic $\\text{C}-\\text{O}$ bond has partial double bond character and the phenyl cation is energetically inaccessible."
  ),
  ar(
    "Symmetrical ethers cannot be prepared in good yield by the Williamson synthesis.",
    "Williamson synthesis is specifically restricted to the synthesis of unsymmetrical ethers.",
    3,
    "Assertion is false: Symmetrical ethers like diethyl ether can be easily prepared via Williamson synthesis $(\\text{C}_2\\text{H}_5\\text{ONa} + \\text{C}_2\\text{H}_5\\text{Br} \\rightarrow \\text{C}_2\\text{H}_5\\text{OC}_2\\text{H}_5)$. Reason is also false because Williamson synthesis works for both symmetrical and unsymmetrical ethers."
  ),
  ar(
    "Dipole moment of diethyl ether is non-zero (approximately $1.18\\text{ D}$).",
    "The $\\text{C}-\\text{O}-\\text{C}$ geometry of ethers is bent (angular), so the two polar $\\text{C}-\\text{O}$ bond dipoles do not cancel each other.",
    0,
    "Because ethers have an angular structure with bond angle $\\approx 111.7^\\circ$, the vector sum of the two individual $\\text{C}-\\text{O}$ bond moments produces a permanent net dipole moment."
  ),
  ar(
    "Reaction of benzyl ethyl ether with cold $\\text{HI}$ yields benzyl iodide and ethanol.",
    "The benzyl carbocation formed via the $\\text{S}_N1$ pathway is resonance stabilized by the aromatic benzene ring.",
    0,
    "The benzylic carbon-oxygen bond readily cleaves because the resulting benzylic carbocation is highly resonance-stabilized, leading to benzyl iodide and ethanol."
  ),
  ar(
    "Nitration of anisole with a mixture of concentrated $\\text{HNO}_3$ and $\\text{H}_2\\text{SO}_4$ gives 4-nitroanisole as the major product.",
    "The nitronium ion ($^+\\text{NO}_2$) preferentially attacks the para position due to lower steric hindrance compared to the ortho position.",
    0,
    "The methoxy group is ortho/para-directing via resonance. The para position experiences less steric crowding from the bulky methoxy group, making 4-nitroanisole the major product."
  ),
  ar(
    "Ethers can be purified and freed of peroxides by washing with an aqueous solution of iron(II) sulfate ($\\text{FeSO}_4$).",
    "Iron(II) ions act as a reducing agent and reduce explosive ether peroxides to harmless alcohols and ethers.",
    0,
    "$\\text{Fe}^{2+}$ is oxidized to $\\text{Fe}^{3+}$ by peroxides, reducing the dangerous peroxy linkage to non-explosive hydroxy/ether derivatives."
  ),
  ar(
    "Cleavage of epoxides (oxiranes) by aqueous acid yields trans-1,2-diols.",
    "Acid-catalyzed ring opening of an epoxide involves nucleophilic attack of water on the protonated oxirane from the side opposite to the leaving oxygen (backside attack).",
    0,
    "Protonation of the epoxide is followed by an $\\text{S}_N2$-like backside attack of water, opening the strained three-membered ring with complete anti-stereochemistry to yield a trans-glycol."
  ),
  ar(
    "Crown ethers selectively bind specific alkali metal cations depending on their cavity size.",
    "The polyether ring of crown ethers has a hydrophobic exterior and a hydrophilic cavity lined with electronegative oxygen lone pairs that chelate metal cations.",
    0,
    "Crown ethers (such as 18-crown-6 for $\\text{K}^+$ and 15-crown-5 for $\\text{Na}^+$) have central electronegative cavities matching the ionic radii of specific metal ions, enabling selective host-guest complexation."
  ),
  ar(
    "Cleavage of 2-methoxy-2-methylpropane with cold $\\text{HI}$ gives 2-iodo-2-methylpropane and methanol.",
    "The reaction proceeds via an $\\text{S}_N2$ displacement where iodide attacks the less hindered methyl group.",
    2,
    "Assertion is true: 2-methoxy-2-methylpropane is tert-butyl methyl ether; with $\\text{HI}$ it gives tert-butyl iodide and methanol. Reason is false: it proceeds via an $\\text{S}_N1$ mechanism through the stable tert-butyl carbocation, not $\\text{S}_N2$."
  ),
  ar(
    "Ether peroxides are formed by the attack of oxygen at the $\\alpha$-carbon of the ether.",
    "The $\\alpha$-hydrogen atoms adjacent to the ethereal oxygen are easily abstracted by free radicals due to stabilization of the resulting radical by oxygen's lone pair.",
    0,
    "Radical abstraction of the $\\alpha$-hydrogen gives a carbon radical stabilized by the $+M$ resonance donation of the adjacent ethereal oxygen lone pair, which readily reacts with triplet $\\text{O}_2$ to form hydroperoxides."
  ),
  ar(
    "Phenetole (ethoxybenzene) on heating with excess concentrated $\\text{HI}$ produces phenol and ethyl iodide.",
    "Phenolic $\\text{C}-\\text{O}$ bond cleavage is prevented by the strong resonance stabilization and partial double-bond character of the bond.",
    0,
    "Protonated phenetole is cleaved by iodide attack at the ethyl carbon via an $\\text{S}_N2$ mechanism to yield ethyl iodide and phenol. The phenolic $\\text{C}-\\text{O}$ bond does not cleave."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following reaction combinations is best suited for the synthesis of tert-butyl ethyl ether via Williamson synthesis?",
    [
      "$(\\text{CH}_3)_3\\text{C}-\\text{O}^-\\text{Na}^+ + \\text{CH}_3\\text{CH}_2\\text{Br}$",
      "$(\\text{CH}_3)_3\\text{C}-\\text{Br} + \\text{CH}_3\\text{CH}_2\\text{O}^-\\text{Na}^+$",
      "$(\\text{CH}_3)_3\\text{C}-\\text{OH} + \\text{CH}_3\\text{CH}_2\\text{OH} / \\text{H}_2\\text{SO}_4$",
      "$(\\text{CH}_3)_3\\text{C}-\\text{Br} + \\text{CH}_3\\text{CH}_2\\text{OH}$"
    ],
    0,
    "Williamson synthesis requires a primary alkyl halide $(\\text{CH}_3\\text{CH}_2\\text{Br})$ and a bulky alkoxide $((\\text{CH}_3)_3\\text{C}-\\text{ONa})$. Using a tertiary alkyl halide results in exclusive $\\text{E}2$ elimination to 2-methylpropene."
  ),
  mcq(
    "When anisole (methoxybenzene) is treated with one equivalent of concentrated $\\text{HI}$ at room temperature, the products formed are:",
    [
      "Phenol and methyl iodide",
      "Iodobenzene and methanol",
      "Phenol and methanol",
      "Iodobenzene and methyl iodide"
    ],
    0,
    "Protonation of the oxygen is followed by $\\text{S}_N2$ attack of $\\text{I}^-$ on the methyl carbon. The $\\text{C}_{sp^2}-\\text{O}$ bond has partial double bond character and cannot be cleaved, yielding phenol and $\\text{CH}_3\\text{I}$."
  ),
  mcq(
    "What is the major product obtained when 2-methoxy-2-methylpropane is heated with one equivalent of concentrated $\\text{HI}$?",
    [
      "2-Iodo-2-methylpropane and methanol",
      "2-Methylpropan-2-ol and iodomethane",
      "2-Methylpropene and methanol",
      "2-Iodopropane and ethanol"
    ],
    0,
    "2-Methoxy-2-methylpropane contains a tertiary alkyl group (tert-butyl). Cleavage follows the $\\text{S}_N1$ mechanism via the stable tert-butyl cation to give tert-butyl iodide and methanol."
  ),
  mcq(
    "Which of the following ethers will give a pair of identical alkyl iodides upon heating with excess concentrated hydriodic acid?",
    [
      "Ethoxyethane",
      "Methoxyethane",
      "Methoxypropane",
      "Ethoxypropane"
    ],
    0,
    "Ethoxyethane (diethyl ether, $\\text{CH}_3\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_3$) is a symmetrical ether. Heating with excess $\\text{HI}$ converts both ethyl groups into identical ethyl iodide molecules: $\\text{C}_2\\text{H}_5\\text{OC}_2\\text{H}_5 + 2\\text{HI} \\rightarrow 2\\text{C}_2\\text{H}_5\\text{I} + \\text{H}_2\\text{O}$."
  ),
  mcq(
    "The presence of explosive peroxides in a stored bottle of diethyl ether can be confirmed by which chemical test?",
    [
      "Shaking with acidified $\\text{KI}$ solution followed by starch",
      "Reaction with Tollens' reagent",
      "Testing with neutral $\\text{FeCl}_3$ solution",
      "Reaction with sodium metal"
    ],
    0,
    "Peroxides oxidize iodide to free iodine $(\\text{I}_2)$, which produces a deep blue coloration in the presence of starch indicator."
  ),
  mcq(
    "When anisole is brominated with bromine in ethanoic acid, the major product obtained is:",
    [
      "4-Bromoanisole (p-bromoanisole)",
      "2-Bromoanisole (o-bromoanisole)",
      "2,4-Dibromoanisole",
      "2,4,6-Tribromoanisole"
    ],
    0,
    "Bromination of anisole in ethanoic acid occurs without any catalyst to give 4-bromoanisole as the major product (approx. $90\\%$) due to minimal steric hindrance at the para position."
  ),
  mcq(
    "Which of the following compounds has the lowest boiling point?",
    [
      "Ethoxyethane ($M = 74\\text{ g/mol}$)",
      "Butan-1-ol ($M = 74\\text{ g/mol}$)",
      "Butan-2-ol ($M = 74\\text{ g/mol}$)",
      "2-Methylpropan-1-ol ($M = 74\\text{ g/mol}$)"
    ],
    0,
    "Ethoxyethane (diethyl ether) cannot form intermolecular hydrogen bonds with itself and boils at only $35^\\circ\\text{C}$, whereas all the isomeric alcohols form hydrogen bonds and boil above $99^\\circ\\text{C}$."
  ),
  mcq(
    "The bond angle $\\text{C}-\\text{O}-\\text{C}$ in diethyl ether is approximately:",
    [
      "$112^\\circ$",
      "$90^\\circ$",
      "$104.5^\\circ$",
      "$180^\\circ$"
    ],
    0,
    "Due to steric repulsion between the two bulky ethyl groups, the $\\text{C}-\\text{O}-\\text{C}$ bond angle opens up to approximately $112^\\circ$ (specifically $\\approx 111.7^\\circ$), larger than the standard tetrahedral angle."
  ),

  // 13 NUM Questions
  num(
    "How many constitutional (structural) isomeric ethers exist for the molecular formula $\\text{C}_4\\text{H}_{10}\\text{O}$?",
    3,
    "The 3 constitutional isomeric ethers of $\\text{C}_4\\text{H}_{10}\\text{O}$ are: (1) ethoxyethane (diethyl ether), (2) 1-methoxypropane (methyl propyl ether), and (3) 2-methoxypropane (methyl isopropyl ether)."
  ),
  num(
    "How many moles of alkyl iodide are produced when 1 mole of diethyl ether is heated with excess concentrated hydriodic acid $(\\text{HI})$?",
    2,
    "The cleavage reaction with excess $\\text{HI}$ is: $\\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3 + 2\\text{HI} \\rightarrow 2\\text{CH}_3\\text{CH}_2\\text{I} + \\text{H}_2\\text{O}$. Exactly 2 moles of ethyl iodide are produced."
  ),
  num(
    "How many unshared lone pairs of electrons are present on the oxygen atom of an ether molecule?",
    2,
    "The oxygen atom in an ether has valence electron configuration $2s^2 2p^4$, forming two single covalent $\\sigma$-bonds to carbon and retaining 2 non-bonding lone pairs."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent) of anisole (methoxybenzene, $\\text{C}_7\\text{H}_8\\text{O}$)?",
    4,
    "For $\\text{C}_7\\text{H}_8\\text{O}$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 7 + 1 - \\frac{8}{2} = 4$. This corresponds to the 1 aromatic ring and 3 aromatic double bonds."
  ),
  num(
    "How many moles of $\\text{HI}$ are consumed per mole of anisole upon heating with excess concentrated $\\text{HI}$ to form phenol and methyl iodide?",
    1,
    "Anisole reacts with $\\text{HI}$ as: $\\text{C}_6\\text{H}_5\\text{OCH}_3 + \\text{HI} \\rightarrow \\text{C}_6\\text{H}_5\\text{OH} + \\text{CH}_3\\text{I}$. Phenol does not react further with $\\text{HI}$, so exactly 1 mole of $\\text{HI}$ is consumed."
  ),
  num(
    "In 18-crown-6, how many ethereal oxygen atoms are present in the macrocyclic ring?",
    6,
    "18-crown-6 is a cyclic polyether containing 18 ring atoms in total, consisting of 6 repeating $-\\text{CH}_2-\\text{CH}_2-\\text{O}-$ units. It has exactly 6 oxygen atoms."
  ),
  num(
    "How many ring carbon atoms in anisole have increased electron density due to the $+M$ resonance donation of the methoxy group?",
    3,
    "The $+M$ effect of the methoxy group delocalizes negative charge to two ortho positions (C2, C6) and one para position (C4), making 3 ring carbon atoms electron-rich."
  ),
  num(
    "How many moles of $\\text{AgI}$ will precipitate when 1 mole of tert-butyl ethyl ether is treated with 1 mole of cold $\\text{HI}$ followed by excess aqueous $\\text{AgNO}_3$?",
    1,
    "Reaction of tert-butyl ethyl ether with cold $\\text{HI}$ produces 1 mole of tert-butyl iodide (and 1 mole of ethanol). Tert-butyl iodide on treatment with $\\text{AgNO}_3$ rapidly precipitates 1 mole of $\\text{AgI}$."
  ),
  num(
    "What is the total number of carbon atoms in a molecule of 1-ethoxy-2-methylpropane?",
    6,
    "1-Ethoxy-2-methylpropane has an ethoxy group (2 carbons) and an isobutyl group (4 carbons). Total number of carbon atoms = $2 + 4 = 6$."
  ),
  num(
    "What is the double bond equivalent (DBE) of oxirane (ethylene oxide, $\\text{C}_2\\text{H}_4\\text{O}$)?",
    1,
    "For $\\text{C}_2\\text{H}_4\\text{O}$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 2 + 1 - 2 = 1$, representing the single three-membered ring."
  ),
  num(
    "How many constitutional isomers with the molecular formula $\\text{C}_3\\text{H}_8\\text{O}$ can function as Lewis bases?",
    3,
    "All constitutional isomers of $\\text{C}_3\\text{H}_8\\text{O}$ contain oxygen with lone pairs and can act as Lewis bases: (1) propan-1-ol, (2) propan-2-ol, and (3) methoxyethane (ethyl methyl ether). Total = 3."
  ),
  num(
    "What is the formal charge on the oxygen atom in the trimethyloxonium cation $([(\\text{CH}_3)_3\\text{O}]^+)$?",
    1,
    "In the trialkyloxonium ion, oxygen is bonded to three carbon atoms and has one lone pair. Formal charge = $6 - 2 - \\frac{6}{2} = +1$."
  ),
  num(
    "In the conversion of ethanol to diethyl ether at $413\\text{ K}$ catalyzed by $\\text{H}_2\\text{SO}_4$, how many molecules of water are eliminated per molecule of ether formed?",
    1,
    "The intermolecular condensation is: $2\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{H}^+, 413\\text{ K}} \\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$. Exactly 1 molecule of water is formed per ether molecule."
  )
];

console.log(`Part 5 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part5.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part5.js");
