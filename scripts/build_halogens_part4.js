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
    subTopic: "Haloarenes",
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
    subTopic: "Haloarenes",
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
    subTopic: "Haloarenes",
    chapter: "Organic Compounds Containing Halogens"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Chlorobenzene is extremely unreactive towards nucleophilic substitution reactions under standard laboratory conditions.",
    "The lone pair of electrons on chlorine delocalizes into the benzene ring through resonance, giving the $\\text{C}-\\text{Cl}$ bond partial double bond character.",
    0,
    "Resonance structures of chlorobenzene confer partial double bond character to the $\\text{C}-\\text{Cl}$ bond ($1.69\\text{ \\AA}$), making bond cleavage significantly more difficult than in alkyl halides ($1.77\\text{ \\AA}$)."
  ),
  ar(
    "The presence of a nitro group ($-NO_2$) at the ortho or para position with respect to chlorine greatly enhances the reactivity of chlorobenzene towards nucleophilic substitution.",
    "The nitro group at ortho and para positions stabilizes the negatively charged Meisenheimer ($\\sigma$-complex) intermediate by direct resonance delocalization onto the electronegative oxygen atoms.",
    0,
    "In $\\text{S}_\\text{N}\\text{Ar}$ reactions, negative charge develops at the ortho and para positions of the ring. A strong electron-withdrawing nitro group at these positions disperses the negative charge effectively onto oxygen."
  ),
  ar(
    "A nitro group located at the meta position of chlorobenzene has practically no resonance effect on the nucleophilic substitution of chlorine.",
    "In the carbanion intermediate formed during attack at the meta position, the negative charge never resides on the carbon bearing the nitro group.",
    0,
    "Resonance canonical forms of the Meisenheimer intermediate show that the negative charge alternates to ortho and para carbons relative to the incoming nucleophile. Therefore, a meta-nitro group cannot delocalize the carbanion charge by resonance, exerting only an inductive ($-I$) effect."
  ),
  ar(
    "2,4,6-Trinitrochlorobenzene (picryl chloride) hydrolyzes to 2,4,6-trinitrophenol (picric acid) simply upon warming with warm water.",
    "Three strongly electron-withdrawing nitro groups at the two ortho and one para positions extensively stabilize the anionic Meisenheimer intermediate.",
    0,
    "With three $-NO_2$ groups at the ortho and para positions, the benzene ring becomes so electron-deficient that even a weak nucleophile like water is capable of displacing chloride at $50^\\circ\\text{C}$."
  ),
  ar(
    "Halogen atoms in haloarenes are ortho- and para-directing in electrophilic aromatic substitutions.",
    "Halogen atoms donate electron density to the ortho and para positions of the benzene ring through $+M$ resonance.",
    0,
    "Although halogens are deactivating overall due to strong $-I$ electronegativity, their $+M$ resonance effect increases electron density specifically at the ortho and para positions relative to the meta position."
  ),
  ar(
    "Despite being ortho- and para-directing, chlorine is a deactivating group in electrophilic aromatic substitution of benzene.",
    "The strong inductive electron-withdrawing effect ($-I$) of chlorine outweighs its weaker resonance electron-donating effect ($+M$).",
    0,
    "Chlorine's strong $-I$ effect reduces the overall electron density on the ring compared to benzene (deactivating). However, $+M$ resonance stabilizes the arenium ion intermediates formed by ortho/para attack more than meta attack (directing)."
  ),
  ar(
    "Iodobenzene cannot be prepared by the Sandmeyer reaction using cuprous iodide ($\\text{Cu}_2\\text{I}_2$).",
    "Benzenediazonium chloride smoothly yields iodobenzene simply by warming with aqueous potassium iodide ($\\text{KI}$) without the need for a copper catalyst.",
    1,
    "Both statements are true. Sandmeyer reaction specifically refers to the use of $\\text{Cu}_2\\text{Cl}_2$ or $\\text{Cu}_2\\text{Br}_2$. Iodobenzene is prepared simply by warming benzenediazonium chloride with $\\text{KI}$ solution, but Reason is a description of the method rather than the fundamental chemical explanation of why cuprous iodide is not used (cuprous iodide is insoluble and $\\text{I}^-$ is a sufficiently strong reducing agent)."
  ),
  ar(
    "Fluorobenzene is conveniently prepared by thermal decomposition of benzenediazonium fluoroborate (Balz-Schiemann reaction).",
    "Benzenediazonium fluoroborate ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^-$) is water-insoluble and stable at room temperature, which prevents premature decomposition.",
    0,
    "Addition of fluoroboric acid ($\\text{HBF}_4$) to diazonium salt precipitates insoluble, stable $\\text{ArN}_2^+\\text{BF}_4^-$, which upon dry heating smoothly decomposes into fluorobenzene, nitrogen, and boron trifluoride."
  ),
  ar(
    "The reaction of chlorobenzene with sodium metal and methyl chloride in dry ether yields toluene (Wurtz-Fittig reaction).",
    "Sodium metal couples an aryl halide and an alkyl halide through radical or carbanionic organosodium intermediates.",
    0,
    "Wurtz-Fittig reaction couples an aryl halide with an alkyl halide in the presence of sodium in dry ether: $\\text{C}_6\\text{H}_5\\text{Cl} + \\text{CH}_3\\text{Cl} + 2\\text{Na} \\rightarrow \\text{C}_6\\text{H}_5\\text{CH}_3 + 2\\text{NaCl}$."
  ),
  ar(
    "Heating chlorobenzene with sodium metal in dry ether gives biphenyl (Fittig reaction).",
    "Two aryl radicals or phenyl carbanions generated by sodium couple to form a biaryl compound.",
    0,
    "The Fittig reaction involves coupling of two molecules of haloarene in the presence of metallic sodium: $2\\text{C}_6\\text{H}_5\\text{Cl} + 2\\text{Na} \\rightarrow \\text{C}_6\\text{H}_5-\\text{C}_6\\text{H}_5 + 2\\text{NaCl}$."
  ),
  ar(
    "When chlorobenzene is treated with potassium amide ($\\text{KNH}_2$) in liquid ammonia, a mixture of aniline and substituted aniline can form via a benzyne intermediate.",
    "Potassium amide is a strong base that removes an ortho proton to eliminate chloride, generating a neutral, highly strained benzyne containing a formal carbon-carbon triple bond.",
    0,
    "The elimination-addition pathway proceeds via benzyne. Attack of $\\text{NH}_2^-$ on either carbon of the strained triple bond can give both direct substitution and cine-substitution products."
  ),
  ar(
    "Direct iodination of benzene with iodine requires the presence of an oxidizing agent such as nitric acid ($\\text{HNO}_3$) or iodic acid ($\\text{HIO}_3$).",
    "Iodination of benzene is a reversible reaction, and the oxidizing agent oxidizes the formed $\\text{HI}$ to $\\text{I}_2$, driving the reaction forward.",
    0,
    "The reaction $\\text{C}_6\\text{H}_6 + \\text{I}_2 \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{I} + \\text{HI}$ is reversible. $\\text{HNO}_3$ oxidizes the powerful reducing agent $\\text{HI}$ ($2\\text{HI} + 2\\text{HNO}_3 \\rightarrow \\text{I}_2 + 2\\text{NO}_2 + 2\\text{H}_2\\text{O}$), preventing backward reduction."
  ),
  ar(
    "In the electrophilic nitration of chlorobenzene, the para-nitrochlorobenzene isomer is formed as the major product.",
    "The para position is less sterically hindered than the ortho position, favoring attack of the nitronium ion ($\\text{NO}_2^+$).",
    0,
    "Although both ortho and para positions are activated by $+M$ resonance, steric repulsion between the relatively large chlorine atom and the incoming bulky $\\text{NO}_2^+$ electrophile makes the para isomer the predominant product."
  ),
  ar(
    "Phenyl cation is highly unstable and cannot form easily in solution.",
    "The positive charge on a phenyl cation resides in an $sp^2$ hybrid orbital that is perpendicular to the aromatic $\\pi$-system and cannot be stabilized by resonance.",
    0,
    "In the phenyl cation $(\\text{C}_6\\text{H}_5^+)$, the vacant orbital is in the plane of the ring ($sp^2$), which is orthogonal to the $\\pi$-molecular orbitals, preventing resonance stabilization. Hence, haloarenes cannot react via an $\\text{S}_\\text{N}1$ pathway."
  ),
  ar(
    "Dow's process for the industrial production of phenol requires heating chlorobenzene with aqueous $\\text{NaOH}$ at $623\\text{ K}$ and $300\\text{ atm}$ pressure.",
    "The $\\text{C}-\\text{Cl}$ bond in chlorobenzene has partial double bond character and high bond dissociation energy.",
    0,
    "Drastic conditions ($623\\text{ K}, 300\\text{ atm}$) are mandatory because unactivated chlorobenzene resists nucleophilic aromatic displacement under standard conditions."
  ),
  ar(
    "Sulphonation of chlorobenzene with concentrated $\\text{H}_2\\text{SO}_4$ gives 4-chlorobenzenesulphonic acid as the major product.",
    "The bulky sulphonic acid group ($-SO_3H$) experiences minimal steric hindrance at the para position.",
    0,
    "Chlorine is ortho/para-directing. Due to the bulkiness of the $\\text{SO}_3$ electrophile, the less hindered para position is preferred, making 4-chlorobenzenesulphonic acid the major product."
  ),
  ar(
    "Friedel-Crafts acylation of chlorobenzene with acetyl chloride in the presence of anhydrous $\\text{AlCl}_3$ gives 4-chloroacetophenone as the major product.",
    "The acylium ion ($\\text{CH}_3\\text{CO}^+$) attacks preferentially at the sterically less crowded para position.",
    0,
    "The resonance effect directs the electrophile to ortho and para positions, while steric hindrance between the chlorine atom and the acyl group favors the para isomer."
  ),
  ar(
    "Ullmann reaction involves heating iodobenzene with copper powder in a sealed tube to yield biphenyl.",
    "Copper powder acts as a reducing agent and facilitates oxidative addition to form organocopper intermediates that couple together.",
    0,
    "The Ullmann coupling $2\\text{C}_6\\text{H}_5\\text{I} + 2\\text{Cu} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5-\\text{C}_6\\text{H}_5 + 2\\text{CuI}$ is an established method for synthesizing biaryls from aryl iodides."
  ),
  ar(
    "The dipole moment of chlorobenzene is smaller than that of cyclohexyl chloride.",
    "The carbon attached to chlorine in chlorobenzene is $sp^2$ hybridized, which is more electronegative than the $sp^3$ carbon in cyclohexyl chloride.",
    0,
    "The $sp^2$ carbon in chlorobenzene has $33.3\\%$ s-character, pulling electron density towards itself and opposing the $\\text{C}-\\text{Cl}$ bond dipole. Additionally, $+M$ resonance of chlorine delocalizes electron density into the ring."
  ),
  ar(
    "Chlorination of toluene in the presence of $\\text{FeCl}_3$ gives o- and p-chlorotoluene, whereas chlorination in the presence of light and heat gives benzyl chloride.",
    "Lewis acid promotes electrophilic aromatic substitution on the ring, while sunlight and heat facilitate free-radical halogenation of the side-chain methyl group.",
    0,
    "$\\text{FeCl}_3$ generates $\\text{Cl}^+$ electrophiles that attack the activated aromatic ring. Light/heat homolytically cleaves $\\text{Cl}_2$ to generate $\\text{Cl}^\\bullet$ radicals that selectively abstract the weakly bound benzylic hydrogen."
  ),
  ar(
    "Haloarenes do not undergo Friedel-Crafts reactions.",
    "The halogen atom completely deactivates the benzene ring towards any electrophilic attack.",
    3,
    "Assertion is false, Reason is false. Haloarenes DO undergo Friedel-Crafts alkylation and acylation under vigorous conditions in the presence of anhydrous $\\text{AlCl}_3$ because the $+M$ effect partially activates the ortho/para positions despite moderate deactivation."
  ),
  ar(
    "Treatment of o-chlorotoluene with $\\text{NaNH}_2$ in liquid $\\text{NH}_3$ yields both o-toluidine and m-toluidine.",
    "Elimination of $\\text{HCl}$ forms a methylbenzyne intermediate which can be attacked by amide ion at either carbon of the triple bond.",
    0,
    "The benzyne mechanism leads to cine-substitution. Proton abstraction and chloride departure yield 2,3-dehydrotoluene (benzyne), which allows $\\text{NH}_2^-$ addition at both C2 (ortho) and C3 (meta)."
  ),
  ar(
    "Gattermann reaction gives lower yields of haloarenes than the Sandmeyer reaction.",
    "Sandmeyer reaction employs cuprous salts which provide homogeneous catalysis through active coordination complexes.",
    0,
    "Sandmeyer reaction with $\\text{Cu}_2\\text{X}_2$ gives cleaner and superior yields compared to the Gattermann reaction, which uses heterogeneous copper powder and hydrohalic acid."
  ),
  ar(
    "When chlorobenzene reacts with chloral in the presence of concentrated $\\text{H}_2\\text{SO}_4$, DDT is formed.",
    "Concentrated $\\text{H}_2\\text{SO}_4$ acts as a dehydrating agent and electrophilic catalyst, condensing two molecules of chlorobenzene with the carbonyl group of chloral.",
    0,
    "Chloral $(\\text{CCl}_3\\text{CHO})$ undergoes acid-catalyzed electrophilic substitution twice with two molecules of chlorobenzene at their para positions: $\\text{CCl}_3\\text{CHO} + 2\\text{C}_6\\text{H}_5\\text{Cl} \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{DDT} + \\text{H}_2\\text{O}$."
  ),
  ar(
    "In benzyne, the second $\\pi$-bond in the formal triple bond is formed by lateral overlap of $sp^2$ hybrid orbitals.",
    "The aromatic sextet of six $p_z$ orbitals remains intact and perpendicular to the ring plane.",
    0,
    "The triple bond in benzyne does not disrupt the aromatic $\\pi$-system. The extra $\\pi$-bond lies in the plane of the ring and is formed by sp2-sp2 overlap, which is weak due to poor orbital alignment (making benzyne highly reactive)."
  ),
  ar(
    "Chlorobenzene does not form a Grignard reagent in diethyl ether at room temperature as easily as bromobenzene.",
    "The $\\text{C}-\\text{Cl}$ bond has higher bond dissociation energy than the $\\text{C}-\\text{Br}$ bond.",
    0,
    "Preparation of phenylmagnesium chloride requires heating or the use of higher-boiling cyclic ethers like tetrahydrofuran (THF) due to the higher strength of the $\\text{C}-\\text{Cl}$ bond compared to $\\text{C}-\\text{Br}$."
  ),

  // 8 MCQs
  mcq(
    "Which of the following haloarenes reacts most rapidly with aqueous sodium hydroxide at $100^\\circ\\text{C}$?",
    [
      "2,4,6-Trinitrochlorobenzene",
      "4-Nitrochlorobenzene",
      "2,4-Dinitrochlorobenzene",
      "Chlorobenzene"
    ],
    0,
    "2,4,6-Trinitrochlorobenzene has three strongly electron-withdrawing nitro groups at the ortho and para positions, which tremendously stabilize the anionic intermediate. It hydrolyzes even with warm water without needing severe basic conditions."
  ),
  mcq(
    "What is the major organic product formed when chlorobenzene is treated with methyl chloride in the presence of anhydrous $\\text{AlCl}_3$?",
    [
      "1-Chloro-4-methylbenzene (p-chlorotoluene)",
      "1-Chloro-2-methylbenzene (o-chlorotoluene)",
      "Toluene",
      "1-Chloro-3-methylbenzene (m-chlorotoluene)"
    ],
    0,
    "Chlorine is ortho/para-directing. Due to steric hindrance at the ortho position, 1-chloro-4-methylbenzene (p-chlorotoluene) is formed as the major product in Friedel-Crafts alkylation."
  ),
  mcq(
    "The reaction $2\\text{C}_6\\text{H}_5\\text{Br} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\text{C}_6\\text{H}_5-\\text{C}_6\\text{H}_5 + 2\\text{NaBr}$ is called:",
    [
      "Fittig reaction",
      "Wurtz reaction",
      "Wurtz-Fittig reaction",
      "Frankland reaction"
    ],
    0,
    "The coupling of two aryl halides with sodium in dry ether to produce a biaryl (biphenyl) is known as the Fittig reaction."
  ),
  mcq(
    "Which reaction sequence is best suited for converting aniline into fluorobenzene?",
    [
      "$\\text{NaNO}_2 + \\text{HCl} \\rightarrow \\text{HBF}_4 \\rightarrow \\text{Heat}$",
      "$\\text{HF} + \\text{Fe}$ at $300^\\circ\\text{C}$",
      "$\\text{F}_2$ in dark with $\\text{AlF}_3$",
      "$\\text{NaNO}_2 + \\text{HCl} \\rightarrow \\text{KF}$ solution"
    ],
    0,
    "Diazotization of aniline followed by treatment with fluoroboric acid precipitates benzenediazonium fluoroborate, which upon gentle dry heating undergoes the Balz-Schiemann reaction to give fluorobenzene."
  ),
  mcq(
    "When chlorobenzene is heated with aqueous $\\text{NaOH}$ at $623\\text{ K}$ and $300\\text{ atm}$ pressure, followed by acidification, the product obtained is:",
    [
      "Phenol",
      "Benzoic acid",
      "Benzaldehyde",
      "Benzene"
    ],
    0,
    "This is Dow's process: chlorobenzene is converted into sodium phenoxide at $623\\text{ K}$ and $300\\text{ atm}$, which upon acidification yields phenol."
  ),
  mcq(
    "In the benzyne mechanism, what type of reaction occurs in the first step?",
    [
      "Elimination",
      "Electrophilic addition",
      "Nucleophilic addition",
      "Free radical substitution"
    ],
    0,
    "The benzyne mechanism is an elimination-addition process: first, a strong base abstract an ortho proton and halide departs (elimination), followed by nucleophilic attack on benzyne (addition)."
  ),
  mcq(
    "Which of the following reagents is used in the Sandmeyer reaction to convert benzenediazonium chloride into bromobenzene?",
    [
      "$\\text{Cu}_2\\text{Br}_2 / \\text{HBr}$",
      "$\\text{Cu} / \\text{HBr}$",
      "$\\text{NaBr} / \\text{H}_2\\text{O}$",
      "$\\text{Br}_2 / \\text{Fe}$"
    ],
    0,
    "Sandmeyer reaction specifically uses cuprous bromide ($\\text{Cu}_2\\text{Br}_2$ or $\\text{CuBr}$) dissolved in $\\text{HBr}$. When copper powder is used with $\\text{HBr}$, it is known as Gattermann reaction."
  ),
  mcq(
    "What is the attacking electrophile in the nitration of chlorobenzene using concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$?",
    [
      "Nitronium ion ($\\text{NO}_2^+$)",
      "Nitrosonium ion ($\\text{NO}^+$)",
      "Nitrite ion ($\\text{NO}_2^-$)",
      "Nitrate radical ($\\text{NO}_3^\\bullet$)"
    ],
    0,
    "Concentrated sulfuric acid protonates nitric acid to generate the linear nitronium ion electrophile: $\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\text{NO}_2^+ + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$."
  ),

  // 13 Numerical Questions
  num(
    "How many resonating structures can be drawn for chlorobenzene showing delocalization of the chlorine lone pair onto the benzene ring?",
    5,
    "Chlorobenzene has 5 canonical resonance structures: 2 Kekulé uncharged structures and 3 dipolar structures with positive charge on chlorine and negative charge at the ortho and para positions."
  ),
  num(
    "How many chlorine atoms are present in a molecule of 2,4,6-trichloroaniline?",
    3,
    "2,4,6-Trichloroaniline has chlorine substituents at carbons 2, 4, and 6 of the aniline ring, for a total of 3 chlorine atoms."
  ),
  num(
    "How many molecules of chlorobenzene react with one molecule of chloral to synthesize one molecule of DDT?",
    2,
    "The synthesis of DDT involves the acid-catalyzed condensation of exactly 2 molecules of chlorobenzene with 1 molecule of chloral."
  ),
  num(
    "What is the total number of carbon atoms present in a molecule of biphenyl formed during the Fittig reaction?",
    12,
    "Biphenyl consists of two directly connected phenyl rings ($\\text{C}_6\\text{H}_5-\\text{C}_6\\text{H}_5$), containing $6 + 6 = 12$ carbon atoms."
  ),
  num(
    "How many nitro groups are present in picryl chloride (2,4,6-trinitrochlorobenzene)?",
    3,
    "Picryl chloride contains three nitro ($-NO_2$) groups located at the two ortho positions (2 and 6) and the para position (4)."
  ),
  num(
    "In the Ullmann coupling of iodobenzene, how many moles of copper metal are consumed per mole of biphenyl produced?",
    2,
    "The stoichiometric equation is $2\\text{C}_6\\text{H}_5\\text{I} + 2\\text{Cu} \\rightarrow \\text{C}_6\\text{H}_5-\\text{C}_6\\text{H}_5 + 2\\text{CuI}$, consuming exactly 2 moles of copper."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of benzyne ($\\text{C}_6\\text{H}_4$)?",
    5,
    "$\\text{DBE} = C + 1 - \\frac{H}{2} = 6 + 1 - \\frac{4}{2} = 7 - 2 = 5$ (one benzene ring + three $\\pi$-bonds + one additional in-plane $\\pi$-bond)."
  ),
  num(
    "How many structural isomers are obtained when toluene is chlorinated in the presence of $\\text{FeCl}_3$?",
    2,
    "Chlorination of toluene with $\\text{FeCl}_3$ yields ortho-chlorotoluene and para-chlorotoluene (meta isomer is formed in trace amounts $<4\\%$). The major products are 2 isomers."
  ),
  num(
    "How many moles of sodium metal are consumed when 1 mole of chlorobenzene reacts with 1 mole of methyl chloride in the Wurtz-Fittig reaction?",
    2,
    "The Wurtz-Fittig reaction stoichiometry is $\\text{C}_6\\text{H}_5\\text{Cl} + \\text{CH}_3\\text{Cl} + 2\\text{Na} \\rightarrow \\text{C}_6\\text{H}_5\\text{CH}_3 + 2\\text{NaCl}$, consuming 2 moles of sodium."
  ),
  num(
    "What is the formal bond order of the carbon-chlorine bond in chlorobenzene considering resonance contribution?",
    1,
    "Although resonance gives it partial double bond character (bond order $\\approx 1.2$), its integer Lewis single-bond representation has a formal covalent bond order of 1."
  ),
  num(
    "How many $\\pi$-electrons are involved in the aromatic ring of fluorobenzene?",
    6,
    "The aromatic system of fluorobenzene conforms to the Hückel $(4n+2)$ rule with $n=1$, consisting of exactly 6 $\\pi$-electrons."
  ),
  num(
    "How many chlorine atoms are present in a molecule of hexachlorobenzene ($\\text{C}_6\\text{Cl}_6$)?",
    6,
    "Hexachlorobenzene has all 6 hydrogens of the benzene ring replaced by chlorine atoms, giving 6 chlorine atoms."
  ),
  num(
    "How many mono-brominated aromatic ring positional isomers can 1,4-dimethylbenzene (p-xylene) form upon treatment with $\\text{Br}_2 / \\text{FeBr}_3$?",
    1,
    "Due to molecular symmetry, all four ring positions in 1,4-dimethylbenzene are chemically equivalent. Bromination yields only 1 mono-bromo isomer (2-bromo-1,4-dimethylbenzene)."
  )
];

console.log(`Part 4 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_halogens_part4.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_halogens_part4.js");
