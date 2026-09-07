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
    subTopic: "Haloalkanes",
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
    subTopic: "Haloalkanes",
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
    subTopic: "Haloalkanes",
    chapter: "Organic Compounds Containing Halogens"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Thionyl chloride ($\\text{SOCl}_2$) is the preferred reagent for preparing alkyl chlorides from alcohols.",
    "Both the by-products, sulfur dioxide ($\\text{SO}_2$) and hydrogen chloride ($\\text{HCl}$), are gases that escape from the reaction mixture, leaving the alkyl chloride in a pure state.",
    0,
    "The reaction $\\text{R}-\\text{OH} + \\text{SOCl}_2 \\rightarrow \\text{R}-\\text{Cl} + \\text{SO}_2\\uparrow + \\text{HCl}\\uparrow$ yields gaseous by-products, avoiding tedious purification steps (Darzens procedure)."
  ),
  ar(
    "The reaction of an optically active alcohol with thionyl chloride in the presence of pyridine yields an alkyl chloride with inversion of configuration.",
    "Pyridine reacts with $\\text{HCl}$ to form pyridinium chloride, which provides free chloride ions ($\\text{Cl}^-$) that attack the alkyl chlorosulfite intermediate from the back side via an $\\text{S}_\\text{N}2$ pathway.",
    0,
    "In pyridine, nucleophilic $\\text{Cl}^-$ attacks the chlorosulfite from the back side, resulting in complete Walden inversion, whereas in ether without pyridine the reaction proceeds with retention via $\\text{S}_\\text{N}\\text{i}$."
  ),
  ar(
    "Alkyl iodides are conveniently prepared by treating alkyl chlorides or bromides with sodium iodide in dry acetone (Finkelstein reaction).",
    "Sodium chloride and sodium bromide are insoluble in dry acetone and precipitate out, shifting the equilibrium forward according to Le Chatelier's principle.",
    0,
    "Acetone is a covalent polar aprotic solvent in which $\\text{NaI}$ is soluble, but $\\text{NaCl}$ and $\\text{NaBr}$ have higher lattice energies and precipitate out, driving the reaction to completion."
  ),
  ar(
    "Alkyl fluorides are best synthesized by heating an alkyl chloride or bromide with metallic fluorides such as $\\text{AgF}$, $\\text{Hg}_2\\text{F}_2$, $\\text{CoF}_3$, or $\\text{SbF}_3$ (Swarts reaction).",
    "Direct fluorination of alkanes with fluorine gas ($F_2$) is violent, highly exothermic, and unselective, often resulting in extensive $\\text{C}-\\text{C}$ cleavage.",
    0,
    "Direct fluorination is too vigorous and dangerous to control. Swarts reaction allows mild, selective halogen exchange using inorganic fluorides to deliver pure alkyl fluorides."
  ),
  ar(
    "The addition of $\\text{HBr}$ to propene in the presence of benzoyl peroxide yields 1-bromopropane as the major product.",
    "In the presence of peroxides, the reaction proceeds via a free-radical mechanism where the bromine radical adds to propene to form the more stable secondary free radical intermediate.",
    0,
    "Peroxide effect (Kharasch effect) involves homolytic addition of $\\text{Br}^\\bullet$. The bromine radical adds to the terminal $sp^2$ carbon to produce the more stable secondary radical $(\\text{CH}_3\\dot{\\text{C}}\\text{H}-\\text{CH}_2\\text{Br})$, which abstracts $\\text{H}^\\bullet$ to yield 1-bromopropane."
  ),
  ar(
    "The peroxide effect (anti-Markovnikov addition) is observed with $\\text{HBr}$, but not with $\\text{HCl}$ or $\\text{HI}$.",
    "The $\\text{H}-\\text{Cl}$ bond is too strong ($430.5\\text{ kJ mol}^{-1}$) to be homolytically cleaved by alkoxy radicals, whereas the addition of iodine radical to an alkene is endothermic and iodine radicals couple to form $\\text{I}_2$.",
    0,
    "For the radical chain reaction to be self-sustaining, both propagation steps must be exothermic. For $\\text{HCl}$, the first step (H-abstraction) is endothermic. For $\\text{HI}$, the second step (radical addition to double bond) is endothermic, and iodine atoms preferentially dimerize into $\\text{I}_2$."
  ),
  ar(
    "Phosphorus pentachloride ($\\text{PCl}_5$) reacts with ethanol to yield chloroethane, phosphoryl chloride ($\\text{POCl}_3$), and hydrogen chloride ($\\text{HCl}$).",
    "The phosphorus atom has vacant 3d-orbitals to expand its coordination number and form a stable $\\text{P}=\\text{O}$ double bond in $\\text{POCl}_3$.",
    0,
    "The driving force is the exceptional thermodynamic stability of the phosphorus-oxygen bond in $\\text{POCl}_3$: $\\text{CH}_3\\text{CH}_2\\text{OH} + \\text{PCl}_5 \\rightarrow \\text{CH}_3\\text{CH}_2\\text{Cl} + \\text{POCl}_3 + \\text{HCl}$."
  ),
  ar(
    "Grignard reagents ($\\text{RMgX}$) must be prepared in strictly anhydrous solvents such as dry diethyl ether.",
    "Grignard reagents are strong bases and nucleophiles that rapidly decompose in the presence of moisture or any active-hydrogen compound to yield alkanes.",
    0,
    "The carbon-magnesium bond is highly polarized ($\\text{R}^{\\delta-}-\\text{Mg}^{\\delta+}\\text{X}$). Any proton source (water, alcohols, amines) rapidly protonates the alkyl group: $\\text{RMgX} + \\text{H}_2\\text{O} \\rightarrow \\text{R}-\\text{H} + \\text{Mg(OH)X}$."
  ),
  ar(
    "Free radical chlorination of methane cannot be used to obtain pure chloromethane in high yield unless a large excess of methane is employed.",
    "Chloromethane formed initially undergoes further chlorination rapidly to form $\\text{CH}_2\\text{Cl}_2$, $\\text{CHCl}_3$, and $\\text{CCl}_4$.",
    0,
    "Chlorine radicals are unselective. As chloromethane forms, it competes with methane for chlorine radicals, yielding a complex polyhalogenated mixture. Using excess methane maximizes collisions with unreacted $\\text{CH}_4$."
  ),
  ar(
    "Tertiary alcohols react almost instantaneously with concentrated $\\text{HCl}$ and anhydrous $\\text{ZnCl}_2$ at room temperature (Lucas test).",
    "Tertiary alcohols readily lose water to form highly stable tertiary carbocations that combine with chloride ions to precipitate insoluble alkyl chloride turbidity.",
    0,
    "Lucas test reactivity follows carbocation stability ($3^\\circ > 2^\\circ > 1^\\circ$). Tertiary carbocations form instantly at room temperature, causing immediate turbidity."
  ),
  ar(
    "Primary alcohols react with $\\text{HX}$ in the presence of anhydrous $\\text{ZnCl}_2$ via an $\\text{S}_\\text{N}2$ mechanism.",
    "Primary carbocations are highly unstable, so direct backside attack by halide ion on the $\\text{ZnCl}_2$-complexed alcohol is favored.",
    0,
    "$\\text{ZnCl}_2$ coordinates to the oxygen atom of the primary alcohol, converting the poor $-\\text{OH}$ leaving group into a good leaving group, allowing backside nucleophilic displacement without carbocation formation."
  ),
  ar(
    "Treatment of silver propanoate with bromine in boiling $\\text{CCl}_4$ yields bromoethane (Borodine-Hunsdiecker reaction).",
    "The reaction involves decarboxylation of an acyl hypobromite intermediate with the loss of carbon dioxide, generating an alkyl radical with one fewer carbon atom.",
    0,
    "The Hunsdiecker reaction: $\\text{CH}_3\\text{CH}_2\\text{COOAg} + \\text{Br}_2 \\rightarrow \\text{CH}_3\\text{CH}_2\\text{Br} + \\text{CO}_2 + \\text{AgBr}$. It is a free-radical degradation resulting in step-down haloalkanes."
  ),
  ar(
    "N-Bromosuccinimide (NBS) is specifically used for brominating allylic and benzylic positions without adding across the double bond.",
    "NBS maintains a constant, very low concentration of molecular bromine ($\\text{Br}_2$) in solution, which favors free-radical allylic substitution over electrophilic addition.",
    0,
    "At high $\\text{Br}_2$ concentration, electrophilic addition to the alkene predominates. Low steady-state $\\text{Br}_2$ supplied by NBS ensures that allylic radical abstraction followed by bromination is the dominant pathway."
  ),
  ar(
    "Pure alkyl iodides cannot be prepared by direct iodination of alkanes with iodine alone.",
    "The hydrogen iodide ($\\text{HI}$) formed during the reaction is a powerful reducing agent that reduces the alkyl iodide back to the alkane.",
    0,
    "The reaction $\\text{R}-\\text{H} + \\text{I}_2 \\rightleftharpoons \\text{R}-\\text{I} + \\text{HI}$ is reversible. To drive it forward, an oxidizing agent such as $\\text{HIO}_3$ or $\\text{HNO}_3$ must be added to destroy $\\text{HI}$ ($5\\text{HI} + \\text{HIO}_3 \\rightarrow 3\\text{I}_2 + 3\\text{H}_2\\text{O}$)."
  ),
  ar(
    "The Wurtz reaction of tertiary alkyl halides gives negligible yields of coupled alkane.",
    "Tertiary alkyl halides undergo predominant elimination to form alkenes rather than substitution/coupling when treated with sodium metal.",
    0,
    "Sodium metal creates strongly basic organosodium intermediates or carbanions that act as strong bases, abstracting a $\\beta$-proton from bulky tertiary halides via $\\text{E}2$ elimination to yield alkenes."
  ),
  ar(
    "Alkyl halides undergo reduction with zinc and dilute hydrochloric acid to produce alkanes.",
    "Zinc metal in acidic medium serves as an electron and proton donor to reduce the $\\text{C}-\\text{X}$ bond.",
    0,
    "The reaction $\\text{R}-\\text{X} + \\text{Zn} + \\text{H}^+ \\rightarrow \\text{R}-\\text{H} + \\text{Zn}^{2+} + \\text{X}^-$ provides nascent hydrogen/electrons, reducing haloalkanes to parent hydrocarbons."
  ),
  ar(
    "2-Bromobutane reacts with sodium methoxide in methanol to form 2-methoxybutane along with but-2-ene.",
    "Methoxide ion is both a nucleophile and a Bronsted base, leading to competing $\\text{S}_\\text{N}2$ and $\\text{E}2$ pathways with secondary alkyl halides.",
    0,
    "Secondary substrates have moderate steric hindrance. A strong base/nucleophile like $\\text{CH}_3\\text{O}^-$ attacks the carbon center (substitution) and abstracts a $\\beta$-hydrogen (elimination) at comparable rates."
  ),
  ar(
    "Treatment of neopentyl alcohol with concentrated $\\text{HCl}$ yields 2-chloro-2-methylbutane as the major product.",
    "Protonation of neopentyl alcohol followed by loss of water generates a primary carbocation which undergoes a 1,2-methyl shift to form a more stable tertiary carbocation.",
    0,
    "The initial neopentyl carbocation $((\\text{CH}_3)_3\\text{C}-\\text{CH}_2^+)$ is primary and experiences steric strain. A rapid 1,2-methyl shift produces the tertiary carbocation $(\\text{CH}_3)_2\\overset{+}{\\text{C}}-\\text{CH}_2\\text{CH}_3$, which captures chloride to give 2-chloro-2-methylbutane."
  ),
  ar(
    "Alkoxy radicals from benzoyl peroxide generate bromine radicals from $\\text{HBr}$ in the peroxide effect.",
    "The $\\text{O}-\\text{H}$ bond formed in the resulting alcohol/acid is stronger than the $\\text{H}-\\text{Br}$ bond.",
    0,
    "Abstraction of hydrogen from $\\text{HBr}$ by benzoyl radicals is exothermic ($\\Delta H^\\circ \\approx -67\\text{ kJ mol}^{-1}$) because the bond energy of $\\text{O}-\\text{H}$ exceeds that of $\\text{H}-\\text{Br}$."
  ),
  ar(
    "Heating alkyl halides with sodium ethoxide yields alkenes as the only products irrespective of whether the substrate is primary, secondary, or tertiary.",
    "Sodium ethoxide is an extremely bulky base that completely prevents nucleophilic substitution.",
    3,
    "Assertion is false, Reason is false. Sodium ethoxide is unhindered; with primary alkyl halides it gives mostly diethyl ether (Williamson synthesis via $\\text{S}_\\text{N}2$). Only with tertiary halides does it give exclusively elimination products."
  ),
  ar(
    "The addition of $\\text{HCl}$ to 3,3-dimethylbut-1-ene gives 2-chloro-2,3-dimethylbutane as the major product.",
    "The initially formed secondary carbocation rearranges via a 1,2-methyl shift to a more stable tertiary carbocation.",
    0,
    "Markovnikov addition of $\\text{H}^+$ to 3,3-dimethylbut-1-ene yields the secondary carbocation $(\\text{CH}_3)_3\\text{C}-\\overset{+}{\\text{C}}\\text{H}-\\text{CH}_3$. A 1,2-methyl shift forms the more stable tertiary carbocation $(\\text{CH}_3)_2\\overset{+}{\\text{C}}-\\text{CH}(\\text{CH}_3)_2$, which is trapped by chloride."
  ),
  ar(
    "Alkyl halides react with magnesium in dry ether to form Grignard reagents via an oxidative addition mechanism.",
    "Magnesium inserts into the carbon-halogen bond with an increase in its oxidation state from 0 to +2.",
    0,
    "In the formation of $\\text{RMgX}$, magnesium undergoes oxidative insertion into the $\\text{C}-\\text{X}$ bond: $\\text{Mg}^0 \\rightarrow \\text{Mg}^{2+}$, forming a covalent/polar organometallic bond."
  ),
  ar(
    "Alkyl fluorides cannot be effectively prepared using Finkelstein reaction with $\\text{NaF}$ in acetone.",
    "Sodium fluoride ($\\text{NaF}$) is insoluble in acetone and cannot supply dissolved fluoride ions.",
    0,
    "$\\text{NaF}$ has a very high crystal lattice energy and is virtually insoluble in acetone, so Swarts reagents (transition metal fluorides like $\\text{AgF}$) are required instead."
  ),
  ar(
    "The reaction of 1-chlorobutane with $\\text{NaI}$ in acetone is faster than the reaction of 2-chlorobutane with $\\text{NaI}$ in acetone.",
    "The Finkelstein reaction proceeds via an $\\text{S}_\\text{N}2$ mechanism, and primary alkyl halides experience significantly less steric hindrance than secondary halides.",
    0,
    "$\\text{S}_\\text{N}2$ displacement by iodide is sensitive to steric hindrance. The primary substrate 1-chlorobutane allows facile backside attack compared to secondary 2-chlorobutane."
  ),
  ar(
    "Treatment of an alkyl halide with lithium aluminium hydride ($\\text{LiAlH}_4$) reduces it to the corresponding alkane.",
    "$\\text{LiAlH}_4$ acts as a hydride ion ($\\text{H}^-$) donor which displaces the halide ion via an $\\text{S}_\\text{N}2$ nucleophilic substitution.",
    0,
    "Hydride ion $(\\text{H}^-)$ transferred from $[\text{AlH}_4]^-$ is a strong nucleophile that displaces halide ions from primary and secondary alkyl halides to give alkanes."
  ),
  ar(
    "Reaction of alcohol with red phosphorus and bromine produces the corresponding bromoalkane in situ.",
    "Red phosphorus and bromine react together to generate phosphorus tribromide ($\\text{PBr}_3$), which then converts alcohol into bromoalkane.",
    0,
    "$\\text{PBr}_3$ is generated in situ by the combination of $2\\text{P} + 3\\text{Br}_2 \\rightarrow 2\\text{PBr}_3$. This immediately converts the alcohol to an alkyl bromide: $3\\text{ROH} + \\text{PBr}_3 \\rightarrow 3\\text{RBr} + \\text{H}_3\\text{PO}_3$."
  ),

  // 8 MCQs
  mcq(
    "Which reagent is most suitable for converting ethanol into chloroethane with the highest purity without requiring distillation?",
    [
      "Thionyl chloride ($\\text{SOCl}_2$)",
      "Phosphorus pentachloride ($\\text{PCl}_5$)",
      "Concentrated $\\text{HCl}$ with anhydrous $\\text{ZnCl}_2$",
      "Phosphorus trichloride ($\\text{PCl}_3$)"
    ],
    0,
    "Reaction with $\\text{SOCl}_2$ (Darzens process) yields gaseous by-products $\\text{SO}_2$ and $\\text{HCl}$ that escape spontaneously, leaving nearly pure chloroethane."
  ),
  mcq(
    "In the Finkelstein reaction, the solvent used is dry acetone. What is the key chemical reason for using acetone?",
    [
      "$\\text{NaI}$ is soluble in acetone, but $\\text{NaCl}$ and $\\text{NaBr}$ precipitate out",
      "Acetone stabilizes the carbocation intermediate",
      "Acetone acts as a phase-transfer catalyst",
      "$\\text{NaI}$ is insoluble in acetone while $\\text{NaCl}$ is completely soluble"
    ],
    0,
    "Acetone dissolves covalent $\\text{NaI}$ but cannot dissolve ionic $\\text{NaCl}$ and $\\text{NaBr}$ due to their high lattice enthalpies. Precipitation of $\\text{NaCl}/\\text{NaBr}$ shifts the equilibrium towards alkyl iodide."
  ),
  mcq(
    "Which of the following compounds will give immediate turbidity with Lucas reagent at room temperature ($25^\\circ\\text{C}$)?",
    [
      "2-Methylpropan-2-ol (tert-butyl alcohol)",
      "Propan-2-ol (isopropyl alcohol)",
      "Butan-1-ol (n-butyl alcohol)",
      "Methanol"
    ],
    0,
    "2-Methylpropan-2-ol is a tertiary alcohol. It forms a stable tertiary carbocation instantly upon protonation, yielding alkyl chloride turbidity immediately at room temperature."
  ),
  mcq(
    "Which of the following alkenes, on addition of $\\text{HBr}$ in the presence of benzoyl peroxide, exhibits the anti-Markovnikov effect?",
    [
      "Propene",
      "But-2-ene",
      "Ethene",
      "2,3-Dimethylbut-2-ene"
    ],
    0,
    "Anti-Markovnikov addition requires an unsymmetrical alkene. Propene is unsymmetrical, so addition of $\\text{HBr}$ with peroxide yields 1-bromopropane instead of 2-bromopropane. Symmetrical alkenes yield the same product regardless of peroxide."
  ),
  mcq(
    "When but-1-ene is treated with $\\text{NBS}$ (N-bromosuccinimide) in the presence of light, the major product obtained is:",
    [
      "3-Bromobut-1-ene",
      "1,2-Dibromobutane",
      "1-Bromobut-1-ene",
      "4-Bromobut-1-ene"
    ],
    0,
    "NBS specifically brominates at the allylic position. In but-1-ene ($\\text{CH}_3-\\text{CH}_2-\\text{CH}=\\text{CH}_2$), the allylic carbon is C3, yielding 3-bromobut-1-ene as the major product via allylic radical intermediate."
  ),
  mcq(
    "Which of the following reagents is used in the Swarts reaction for preparing fluoroalkanes?",
    [
      "$\\text{AgF}$",
      "$\\text{KF}$ in water",
      "$\\text{HF}$ gas",
      "$\\text{CaF}_2$"
    ],
    0,
    "Swarts reaction uses inorganic fluorides such as $\\text{AgF}$, $\\text{Hg}_2\\text{F}_2$, $\\text{CoF}_3$, or $\\text{SbF}_3$ to exchange chlorine or bromine for fluorine."
  ),
  mcq(
    "What is the major product obtained when 2-methylbut-2-ene reacts with $\\text{HBr}$ in the absence of peroxides?",
    [
      "2-Bromo-2-methylbutane",
      "2-Bromo-3-methylbutane",
      "1-Bromo-2-methylbutane",
      "3-Bromo-2-methylbutane"
    ],
    0,
    "According to Markovnikov's rule, protonation occurs at C3 to form the more stable tertiary carbocation at C2, which then captures $\\text{Br}^-$ to yield 2-bromo-2-methylbutane."
  ),
  mcq(
    "When silver benzoate is heated with bromine in carbon tetrachloride (Hunsdiecker reaction), the product formed is:",
    [
      "Bromobenzene",
      "Benzoyl bromide",
      "Benzyl bromide",
      "o-Bromobenzoic acid"
    ],
    0,
    "The Borodine-Hunsdiecker reaction of silver benzoate ($\\text{C}_6\\text{H}_5\\text{COOAg}$) with $\\text{Br}_2$ in $\\text{CCl}_4$ results in decarboxylation to give bromobenzene: $\\text{C}_6\\text{H}_5\\text{COOAg} + \\text{Br}_2 \\rightarrow \\text{C}_6\\text{H}_5\\text{Br} + \\text{CO}_2 + \\text{AgBr}$."
  ),

  // 13 Numerical Questions
  num(
    "How many monochloro derivatives (including stereoisomers) are formed upon photochemical chlorination of 2-methylbutane?",
    6,
    "Monochlorination of 2-methylbutane yields: 1-chloro-2-methylbutane (contains 1 chiral center $\\rightarrow 2$ enantiomers), 2-chloro-2-methylbutane (achiral $\\rightarrow 1$), 2-chloro-3-methylbutane (contains 1 chiral center $\\rightarrow 2$ enantiomers), and 1-chloro-3-methylbutane (achiral $\\rightarrow 1$). Total = $2 + 1 + 2 + 1 = 6$."
  ),
  num(
    "How many moles of $\\text{AgCl}$ will precipitate when 1 mole of 1,1,1-trichloroethane is treated with excess aqueous silver nitrate solution?",
    0,
    "1,1,1-Trichloroethane has purely covalent $\\text{C}-\\text{Cl}$ bonds and does not ionize in aqueous solution at room temperature. Hence, 0 moles of $\\text{AgCl}$ are precipitated."
  ),
  num(
    "How many moles of methyl magnesium bromide ($\\text{CH}_3\\text{MgBr}$) are consumed per mole of ethyl chloroformate ($\\text{ClCOOC}_2\\text{H}_5$) to form tert-butanol upon acidic workup?",
    3,
    "Ethyl chloroformate reacts with 1 mole of $\\text{CH}_3\\text{MgBr}$ with displacement of chloride to form ethyl acetate. Ethyl acetate reacts with a 2nd mole of $\\text{CH}_3\\text{MgBr}$ to give acetone, and acetone reacts with a 3rd mole of $\\text{CH}_3\\text{MgBr}$ to yield tert-butanol after hydrolysis. Total = 3 moles."
  ),
  num(
    "What is the number of possible structural isomers of acyclic haloalkanes with the molecular formula $\\text{C}_4\\text{H}_9\\text{Br}$?",
    4,
    "The four structural isomers of butyl bromide are: 1-bromobutane, 2-bromobutane, 1-bromo-2-methylpropane (isobutyl bromide), and 2-bromo-2-methylpropane (tert-butyl bromide). Total = 4."
  ),
  num(
    "How many total stereoisomers exist for 2,3-dichlorobutane?",
    3,
    "2,3-Dichlorobutane has two identical chiral carbons. It exists as a pair of enantiomers ($(2R,3R)$ and $(2S,3S)$) and one meso compound ($(2R,3S)$). Total stereoisomers = $2 + 1 = 3$."
  ),
  num(
    "How many moles of sodium metal are consumed in a standard Wurtz coupling reaction per mole of symmetric alkane produced?",
    2,
    "The stoichiometry of the Wurtz reaction is $2\\text{RX} + 2\\text{Na} \\rightarrow \\text{R}-\\text{R} + 2\\text{NaX}$. Exactly 2 moles of sodium are consumed per mole of alkane produced."
  ),
  num(
    "How many carbon atoms are present in the principal alkane product formed by the Wurtz reaction of 2-bromopropane?",
    6,
    "Coupling of two isopropyl radicals from 2-bromopropane gives 2,3-dimethylbutane $((\\text{CH}_3)_2\\text{CH}-\\text{CH}(\\text{CH}_3)_2)$, which contains 6 carbon atoms."
  ),
  num(
    "How many hydrogen atoms are replaced by chlorine during the complete photochemical chlorination of one molecule of ethane to hexachloroethane?",
    6,
    "Ethane ($\\text{C}_2\\text{H}_6$) has 6 hydrogen atoms. Complete chlorination to $\\text{C}_2\\text{Cl}_6$ replaces all 6 hydrogen atoms."
  ),
  num(
    "What is the oxidation state of magnesium in methyl magnesium iodide ($\\text{CH}_3\\text{MgI}$)?",
    2,
    "Magnesium is bonded to a carbanion ($-1$) and an iodide anion ($-1$), giving magnesium an oxidation state of $+2$."
  ),
  num(
    "How many hyperconjugative hydrogen atoms ($\\alpha$-hydrogens) are present in the carbocation formed upon ionization of 2-chloro-2-methylpropane?",
    9,
    "Ionization gives the tert-butyl cation $(\\text{CH}_3)_3\\text{C}^+$. The central carbocation is surrounded by three methyl groups, giving $3 \\times 3 = 9$ $\\alpha$-hydrogens."
  ),
  num(
    "In the reaction of propene with $\\text{Cl}_2$ at $773\\text{ K}$ (allylic chlorination), how many chlorine atoms are present in the product allyl chloride?",
    1,
    "Allyl chloride is 3-chloroprop-1-ene ($\\text{CH}_2=\\text{CH}-\\text{CH}_2\\text{Cl}$), which contains exactly 1 chlorine atom."
  ),
  num(
    "How many chiral carbon centers are created when 1-butene is treated with $\\text{HBr}$ in the presence of benzoyl peroxide?",
    0,
    "Anti-Markovnikov addition of $\\text{HBr}$ to 1-butene gives 1-bromobutane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$), which has no chiral carbon atoms (0 chiral centers)."
  ),
  num(
    "How many moles of $\\text{HCl}$ gas are produced when 1 mole of ethanol reacts completely with 1 mole of phosphorus pentachloride ($\\text{PCl}_5$)?",
    1,
    "The reaction is $\\text{C}_2\\text{H}_5\\text{OH} + \\text{PCl}_5 \\rightarrow \\text{C}_2\\text{H}_5\\text{Cl} + \\text{POCl}_3 + \\text{HCl}\\uparrow$. Exactly 1 mole of $\\text{HCl}$ is generated."
  )
];

console.log(`Part 3 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_halogens_part3.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_halogens_part3.js");
