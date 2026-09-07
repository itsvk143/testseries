const fs = require("fs");
const path = require("path");
const katex = require("katex");

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
    subTopic: "Cyanides",
    chapter: "Organic Compounds Containing Nitrogen",
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
    subTopic: "Cyanides",
    chapter: "Organic Compounds Containing Nitrogen",
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
    subTopic: "Cyanides",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // --- 26 ASSERTION-REASON ---
  ar(
    "Reaction of an alkyl halide with potassium cyanide ($\\text{KCN}$) in aqueous ethanol gives an alkyl cyanide as the major product.",
    "The cyanide ion ($[:\\text{C}\\equiv\\text{N}:]^-$) is an ambident nucleophile, and attack via carbon yields a more thermodynamically stable $\\text{C}-\\text{C}$ bond than the $\\text{C}-\\text{N}$ bond formed via nitrogen attack.",
    0,
    "The cyanide ion is ambident because both carbon and nitrogen possess lone pairs. In ionic cyanides like $\\text{KCN}$, the $\\text{C}-\\text{C}$ bond energy ($347\\text{ kJ/mol}$) is significantly higher than the $\\text{C}-\\text{N}$ bond energy ($305\\text{ kJ/mol}$), making carbon attack thermodynamically preferred."
  ),
  ar(
    "Both the carbon and nitrogen atoms in the cyano group ($-\\text{C}\\equiv\\text{N}$) are $sp$ hybridized.",
    "The carbon atom is bonded to an adjacent atom via a $\\sigma$ bond and to nitrogen via one $\\sigma$ and two $\\pi$ bonds, giving a linear geometry.",
    0,
    "The nitrile carbon forms two $\\sigma$ bonds ($180^\\circ$ apart) and two mutually perpendicular $\\pi$ bonds using unhybridized $p$ orbitals, corresponding to $sp$ hybridization. The nitrogen atom also forms one $\\sigma$ bond and houses its lone pair in an $sp$ hybrid orbital."
  ),
  ar(
    "Complete acidic hydrolysis of acetonitrile ($\\text{CH}_3\\text{CN}$) yields acetic acid and an ammonium salt.",
    "During complete hydrolysis of nitriles, the carbon-nitrogen triple bond is fully cleaved with the addition of water to form a carboxylic acid and ammonia.",
    0,
    "Hydrolysis proceeds in two stages: partial hydrolysis gives acetamide ($\\text{CH}_3\\text{CONH}_2$), which upon further heating with aqueous acid undergoes cleavage to give acetic acid ($\\text{CH}_3\\text{COOH}$) and $\\text{NH}_4\\text{Cl}$."
  ),
  ar(
    "Partial hydrolysis of alkyl nitriles in cold concentrated mineral acid or alkaline $\\text{H}_2\\text{O}_2$ yields amides as the isolated product.",
    "Amides are less reactive toward nucleophilic addition-elimination of water than nitriles under controlled, mild conditions.",
    1,
    "Both statements are true. Mild or controlled hydrolysis converts nitriles into primary amides ($\\text{RCN} + \\text{H}_2\\text{O} \\rightarrow \\text{RCONH}_2$). However, the ability to isolate the amide under alkaline $\\text{H}_2\\text{O}_2$ (Radziszewski reaction) is due to hydroperoxide anion ($^-\\text{OOH}$) being an exceptionally powerful nucleophile that rapidly converts nitriles to peroxycarboximidic acid, which transfers an oxygen to $\\text{H}_2\\text{O}_2$ without hydrolyzing the amide."
  ),
  ar(
    "Reduction of ethanenitrile with lithium aluminium hydride ($\\text{LiAlH}_4$) yields ethanamine.",
    "$\\text{LiAlH}_4$ is a powerful reducing agent that reduces both $\\pi$ bonds of the nitrile group to form a primary amine.",
    0,
    "The nitrile group ($-\\text{C}\\equiv\\text{N}$) is reduced completely by $\\text{LiAlH}_4$ (or $\\text{H}_2/\\text{Ni}$ or $\\text{Na}/\\text{EtOH}$, Mendius reaction) to a primary amine ($-\\text{CH}_2-\\text{NH}_2$): $\\text{CH}_3\\text{CN} + 4[\\text{H}] \\rightarrow \\text{CH}_3\\text{CH}_2\\text{NH}_2$."
  ),
  ar(
    "The Stephen reduction converts alkyl or aryl cyanides into aldehydes using stannous chloride and hydrochloric acid followed by steam distillation.",
    "Stannous chloride in hydrochloric acid reduces the nitrile group to an aldimine hydrochloride intermediate, which upon aqueous hydrolysis yields an aldehyde.",
    0,
    "In the Stephen reduction, $\\text{RCN}$ is reduced by $\\text{SnCl}_2/\\text{HCl}$ to an aldimine salt ($\\text{RCH}=\\text{NH}\\cdot\\text{HCl}$). Hydrolysis of the aldimine with warm water cleaves the $\\text{C}=\\text{N}$ bond to produce the corresponding aldehyde ($\\text{RCHO}$) and $\\text{NH}_4\\text{Cl}$."
  ),
  ar(
    "Diisobutylaluminium hydride ($\\text{DIBAL-H}$) at low temperatures ($-78^\\circ\\text{C}$) selectively reduces nitriles to aldehydes.",
    "$\\text{DIBAL-H}$ transfers a single hydride ion to the nitrile carbon to form an imine intermediate that is stable at low temperatures and only hydrolyzes to an aldehyde upon aqueous workup.",
    0,
    "At $-78^\\circ\\text{C}$, $\\text{DIBAL-H}$ delivers one hydride to form an aluminum imine complex $[\\text{RCH}=\\text{N}-\\text{Al}(i\\text{-Bu})_2]$. The intermediate resists further hydride addition until water is added during workup, hydrolyzing it smoothly to the aldehyde."
  ),
  ar(
    "Reaction of an alkyl cyanide with a Grignard reagent followed by acid hydrolysis produces a ketone.",
    "Grignard reagent adds nucleophilically across the $\\text{C}=\\text{N}$ polar bond of the nitrile to form an imine salt, which undergoes hydrolysis to give a ketone.",
    0,
    "The nucleophilic carbanion of the Grignard reagent ($\\text{R}'^-\\text{MgX}^+$) attacks the electrophilic nitrile carbon: $\\text{R}-\\text{C}\\equiv\\text{N} + \\text{R}'\\text{MgX} \\rightarrow \\text{RR}'\\text{C}=\\text{NMgX}$. Subsequent acidic hydrolysis of the imine intermediate cleanly produces a ketone ($\\text{R}-\\text{CO}-\\text{R}'$)."
  ),
  ar(
    "Cyanides have significantly higher boiling points than alkyl halides of comparable molecular mass.",
    "The presence of the strongly polar cyano group ($-\\text{C}\\equiv\\text{N}$) leads to exceptionally strong dipole-dipole attractions and molecular association.",
    0,
    "The cyano group has a very large dipole moment ($\\sim 4.0\\text{ D}$) due to the electronegativity of $sp$ nitrogen. Strong intermolecular dipole-dipole interactions result in elevated boiling points (e.g., acetonitrile boils at $82^\\circ\\text{C}$ compared to propane at $-42^\\circ\\text{C}$)."
  ),
  ar(
    "Tertiary alkyl halides do not give tertiary alkyl cyanides upon reaction with potassium cyanide in alcohol.",
    "Under basic and nucleophilic conditions, tertiary alkyl halides preferentially undergo E2 elimination to give alkenes rather than nucleophilic substitution.",
    0,
    "The cyanide ion is a moderately strong Bronsted base. With sterically hindered tertiary alkyl halides, $S_N2$ substitution is completely blocked, and elimination (E2) predominates to give an alkene as the exclusive or major product."
  ),
  ar(
    "Nitriles can be synthesized by heating primary amides with phosphorus pentoxide ($\\text{P}_4\\text{O}_{10}$) or thionyl chloride ($\\text{SOCl}_2$).",
    "$\\text{P}_4\\text{O}_{10}$ and $\\text{SOCl}_2$ act as powerful dehydrating agents that eliminate a molecule of water from primary amides.",
    0,
    "Primary amides ($\\text{RCONH}_2$) undergo dehydration upon heating with dehydrating agents like $\\text{P}_4\\text{O}_{10}$ or $\\text{SOCl}_2$: $\\text{RCONH}_2 \\xrightarrow{\\text{P}_4\\text{O}_{10},\\;\\Delta} \\text{R}-\\text{C}\\equiv\\text{N} + \\text{H}_2\\text{O}$."
  ),
  ar(
    "Aromatic nitriles (benzonitrile) cannot be prepared by the nucleophilic substitution of chlorobenzene with aqueous $\\text{KCN}$ under normal conditions.",
    "The $\\text{C}-\\text{Cl}$ bond in chlorobenzene has partial double bond character due to resonance, making it inert toward nucleophilic displacement.",
    0,
    "Chlorobenzene does not undergo $S_N2$ displacement with $\\text{KCN}$ due to partial double bond character and electron repulsion from the aromatic $\\pi$-cloud. Benzonitrile is synthesized instead via the Sandmeyer reaction from benzenediazonium chloride using $\\text{CuCN}/\\text{KCN}$."
  ),
  ar(
    "Acetonitrile is completely miscible with water in all proportions.",
    "The nitrogen atom of the cyano group forms strong hydrogen bonds with water molecules.",
    0,
    "Lower nitriles like acetonitrile ($\\text{CH}_3\\text{CN}$) and propionitrile are miscible with water because the lone pair on the $sp$ nitrogen acts as a strong hydrogen bond acceptor with water protons."
  ),
  ar(
    "Hydrolysis of cyanides is a key synthetic tool for stepping up a carbon chain in organic synthesis.",
    "Reaction of an alkyl halide with $\\text{KCN}$ adds one carbon atom to the carbon chain, which is converted to a carboxyl carbon upon hydrolysis.",
    0,
    "Starting with $\\text{R}-\\text{X}$ ($n$ carbons), reaction with $\\text{KCN}$ introduces a new carbon to form $\\text{R}-\\text{CN}$ ($n+1$ carbons). Hydrolysis yields $\\text{R}-\\text{COOH}$, achieving one-carbon chain homologation."
  ),
  ar(
    "Treatment of an aldoxime with acetic anhydride or phosphorus pentoxide yields a nitrile.",
    "Aldoximes contain an $-\\text{OH}$ group bonded to nitrogen and a hydrogen on the adjacent carbon, allowing dehydration across the $\\text{C}=\\text{N}$ bond.",
    0,
    "Aldoximes ($\\text{R}-\\text{CH}=\\text{N}-\\text{OH}$) undergo dehydration with acetic anhydride or $\\text{P}_4\\text{O}_{10}$ to form nitriles ($\\text{R}-\\text{C}\\equiv\\text{N} + \\text{H}_2\\text{O}$)."
  ),
  ar(
    "Benzonitrile has a higher dipole moment ($4.18\\text{ D}$) than chlorobenzene ($1.69\\text{ D}$).",
    "The $-M$ resonance effect and $-I$ inductive effect of the cyano group both withdraw electron density in the same direction toward the nitrogen atom.",
    0,
    "In benzonitrile, the cyano group exerts a strong $-I$ inductive pull and delocalizes $\\pi$-electrons toward nitrogen via resonance. Both vectors reinforce each other, producing a very large dipole moment of $4.18\\text{ D}$."
  ),
  ar(
    "Nitriles can act as weak Lewis bases in the presence of strong Lewis acids like boron trifluoride ($\\text{BF}_3$).",
    "The nitrogen atom of the nitrile group possesses an unshared pair of electrons in an $sp$ hybrid orbital available for coordination.",
    0,
    "Although the $sp$ lone pair is held tightly due to $50\\%$ $s$-character, it can coordinate with strong electron acceptors such as $\\text{BF}_3$ or $\\text{AlCl}_3$ to form Lewis acid-base adducts: $\\text{R}-\\text{C}\\equiv\\text{N}:\\rightarrow\\text{BF}_3$."
  ),
  ar(
    "The reaction of hydrogen cyanide ($\\text{HCN}$) with a Grignard reagent ($\\text{RMgX}$) followed by acidic hydrolysis yields an aldehyde rather than a ketone.",
    "Hydrogen cyanide possesses a hydrogen atom directly attached to the nitrile carbon instead of an alkyl group.",
    0,
    "Nucleophilic addition of $\\text{RMgX}$ to $\\text{H}-\\text{C}\\equiv\\text{N}$ produces $\\text{R}-\\text{CH}=\\text{NMgX}$. Hydrolysis of this intermediate yields an aldehyde ($\\text{RCHO} + \\text{NH}_3 + \\text{Mg(OH)X}$)."
  ),
  ar(
    "Catalytic hydrogenation of nitriles over nickel catalyst can produce secondary amines as side products.",
    "The primary amine formed during reduction can react with the intermediate imine to form a secondary imine, which is subsequently hydrogenated.",
    0,
    "During reduction, $\\text{RCH}=\\text{NH}$ can react with $\\text{RCH}_2\\text{NH}_2$ with loss of $\\text{NH}_3$ to form $(\\text{RCH}_2)_2\\text{NH}$. To prevent this side reaction and maximize primary amine yield, the hydrogenation is typically conducted in the presence of excess ammonia."
  ),
  ar(
    "Nitriles cannot be reduced to aldehydes using sodium borohydride ($\\text{NaBH}_4$).",
    "Sodium borohydride is a mild reducing agent that is unreactive toward the relatively unactivated carbon-nitrogen triple bond of nitriles.",
    0,
    "Unlike carbonyl groups which are readily reduced by $\\text{NaBH}_4$, nitriles are less electrophilic and resist reduction by $\\text{NaBH}_4$ in neutral alcoholic solvents. Stronger reducing agents like $\\text{LiAlH}_4$ or $\\text{DIBAL-H}$ are required."
  ),
  ar(
    "Alkyl cyanides have an ethereal, pleasant odor, whereas alkyl isocyanides have an intolerable foul smell.",
    "Alkyl cyanides are covalently stable molecules without unshared electron pairs on the terminal carbon atom, whereas isocyanides have a divalent carbanionic terminal carbon.",
    1,
    "Both statements are true. Alkyl cyanides possess a relatively pleasant, fruity or sweetish ethereal aroma, while isocyanides are notorious for their suffocating and nauseating odor. Reason (R) describes their structural difference correctly, but odor sensation is mediated by olfactory receptor interactions rather than simply unshared pairs."
  ),
  ar(
    "Alkyl cyanides are resistant to oxidation by common oxidizing agents like acidified $\\text{KMnO}_4$.",
    "The carbon-nitrogen triple bond has very high bond dissociation energy and the carbon is already in an advanced oxidation state ($+3$).",
    0,
    "The carbon in $\\text{R}-\\text{C}\\equiv\\text{N}$ has an oxidation state of $+3$ (sharing three bonds with more electronegative nitrogen). It does not undergo facile oxidative cleavage and remains intact toward acidified permanganate or dichromate under mild conditions."
  ),
  ar(
    "The $\\alpha$-hydrogen atoms of alkyl cyanides (e.g., in $\\text{CH}_3\\text{CN}$) are weakly acidic.",
    "The strong $-I$ and $-M$ electron-withdrawing effects of the cyano group stabilize the conjugate carbanion by resonance delocalization into the $\\text{C}\\equiv\\text{N}$ group.",
    0,
    "Deprotonation of acetonitrile by strong bases (like $\\text{NaNH}_2$ or $\\text{LDA}$) yields a resonance-stabilized carbanion: $[^-\\text{CH}_2-\\text{C}\\equiv\\text{N} \\leftrightarrow \\text{CH}_2=\\text{C}=\\text{N}^-]$, demonstrating the acidic nature of $\\alpha$-hydrogens ($pK_a \\approx 25$)."
  ),
  ar(
    "When benzamide is heated with thionyl chloride ($\\text{SOCl}_2$), benzonitrile is formed in excellent yield with volatile byproducts.",
    "Thionyl chloride converts the carbonyl oxygen into sulfur dioxide ($\\text{SO}_2$) and hydrogen chloride ($\\text{HCl}$), both of which escape as gases.",
    0,
    "The reaction is $\\text{C}_6\\text{H}_5\\text{CONH}_2 + \\text{SOCl}_2 \\rightarrow \\text{C}_6\\text{H}_5\\text{CN} + \\text{SO}_2\\uparrow + 2\\text{HCl}\\uparrow$. Because both byproducts are gases, the reaction is driven forward to completion and purification is straightforward."
  ),
  ar(
    "The carbon-nitrogen bond length in acetonitrile ($1.16\\text{ \\AA}$) is shorter than that in methylamine ($1.47\\text{ \\AA}$).",
    "A triple bond consists of one $\\sigma$ and two $\\pi$ bonds with higher electron density between the nuclei and greater $s$-character ($sp$ hybridization), drawing the nuclei closer together.",
    0,
    "The triple bond in $\\text{CH}_3-\\text{C}\\equiv\\text{N}$ involves $sp-sp$ overlap with two $\\pi$ bonds, giving a bond length of $1.16\\text{ \\AA}$. In contrast, methylamine has a single $\\text{C}-\\text{N}$ bond with $sp^3-sp^3$ overlap and a length of $1.47\\text{ \\AA}$."
  ),
  ar(
    "In the preparation of alkyl cyanides from alkyl halides, sodium cyanide ($\\text{NaCN}$) cannot be replaced by hydrogen cyanide ($\\text{HCN}$) as the nucleophile.",
    "Hydrogen cyanide is a weak acid and a poor nucleophile because it is largely un-ionized in neutral or acidic media.",
    0,
    "$\\text{HCN}$ has $pK_a \\approx 9.2$ and exists primarily as unionized covalent molecules in solution. It cannot provide a high concentration of nucleophilic cyanide ions ($^-\\text{CN}$) to displace the halide ion efficiently."
  ),

  // --- 8 MCQs ---
  mcq(
    "Which of the following reactions is known as the Stephen reduction?",
    [
      "$\\text{RCN} + \\text{SnCl}_2 + \\text{HCl} \\rightarrow \\text{RCH}=\\text{NH}\\cdot\\text{HCl} \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{RCHO}$",
      "$\\text{RCN} + \\text{LiAlH}_4 \\rightarrow \\text{RCH}_2\\text{NH}_2$",
      "$\\text{RCN} + \\text{Na}/\\text{EtOH} \\rightarrow \\text{RCH}_2\\text{NH}_2$",
      "$\\text{RCOCl} + \\text{H}_2/\\text{Pd-BaSO}_4 \\rightarrow \\text{RCHO}$"
    ],
    0,
    "Stephen reduction is the selective reduction of alkyl or aryl nitriles to aldehydes using tin(II) chloride and hydrochloric acid to form an aldimine hydrochloride, which is then hydrolyzed with steam to give the aldehyde."
  ),
  mcq(
    "When acetonitrile ($\\text{CH}_3\\text{CN}$) is treated with methylmagnesium bromide in dry ether followed by acidic hydrolysis, the final product is:",
    [
      "Acetone (Propan-2-one)",
      "Acetaldehyde (Ethanal)",
      "Acetic acid",
      "Ethanol"
    ],
    0,
    "Reaction of $\\text{CH}_3\\text{CN}$ with $\\text{CH}_3\\text{MgBr}$ forms the imine salt $(\\text{CH}_3)_2\\text{C}=\\text{NMgBr}$. Acidic hydrolysis cleaves this imine salt to give acetone (propan-2-one, $\\text{CH}_3\\text{COCH}_3$) and ammonium/magnesium salts."
  ),
  mcq(
    "Complete hydrolysis of propionitrile ($\\text{CH}_3\\text{CH}_2\\text{CN}$) in aqueous mineral acid yields:",
    [
      "Propanoic acid and ammonium chloride",
      "Propanal and ammonia",
      "Ethanoic acid and carbon dioxide",
      "Propan-1-amine"
    ],
    0,
    "Complete hydrolysis of propionitrile cleaves the cyano carbon completely into a carboxyl group: $\\text{CH}_3\\text{CH}_2\\text{CN} + 2\\text{H}_2\\text{O} + \\text{HCl} \\rightarrow \\text{CH}_3\\text{CH}_2\\text{COOH} + \\text{NH}_4\\text{Cl}$."
  ),
  mcq(
    "Which of the following compounds gives a primary amine upon reduction with sodium and ethanol (Mendius reaction)?",
    [
      "$\\text{CH}_3\\text{CN}$",
      "$\\text{CH}_3\\text{NC}$",
      "$\\text{CH}_3\\text{NO}_2$",
      "$\\text{CH}_3\\text{CONH}_2$"
    ],
    0,
    "Mendius reaction specifically refers to the reduction of alkyl nitriles ($\\text{RCN}$) with nascent hydrogen generated by sodium and ethanol to produce primary amines ($\\text{RCH}_2\\text{NH}_2$)."
  ),
  mcq(
    "Identify the reagent that selectively reduces nitriles to aldehydes at $-78^\\circ\\text{C}$ without reducing ester or alkene groups:",
    [
      "$\\text{DIBAL-H}$",
      "$\\text{LiAlH}_4$",
      "$\\text{NaBH}_4$",
      "$\\text{H}_2/\\text{Pt}$"
    ],
    0,
    "Diisobutylaluminium hydride ($\\text{DIBAL-H}$) at $-78^\\circ\\text{C}$ selectively reduces nitriles to imine intermediates which upon hydrolysis yield aldehydes cleanly."
  ),
  mcq(
    "What is the total number of $\\sigma$ and $\\pi$ bonds in a molecule of acetonitrile ($\\text{CH}_3\\text{CN}$)?",
    [
      "$5\\;\\sigma\\text{ bonds and } 2\\;\\pi\\text{ bonds}$",
      "$4\\;\\sigma\\text{ bonds and } 3\\;\\pi\\text{ bonds}$",
      "$6\\;\\sigma\\text{ bonds and } 1\\;\\pi\\text{ bond}$",
      "$5\\;\\sigma\\text{ bonds and } 1\\;\\pi\\text{ bond}$"
    ],
    0,
    "In acetonitrile ($\\text{H}_3\\text{C}-\\text{C}\\equiv\\text{N}$):\n- Three $\\text{C}-\\text{H}$ $\\sigma$ bonds.\n- One $\\text{C}-\\text{C}$ $\\sigma$ bond.\n- One $\\text{C}-\\text{N}$ $\\sigma$ bond and two $\\text{C}-\\text{N}$ $\\pi$ bonds.\nTotal $= 5\\;\\sigma$ bonds and $2\\;\\pi$ bonds."
  ),
  mcq(
    "When 1-bromobutane is treated with ethanolic potassium cyanide, the major product is pentanenitrile. What type of mechanism operates?",
    [
      "$S_N2$",
      "$S_N1$",
      "$E2$",
      "$E1$"
    ],
    0,
    "1-Bromobutane is a primary alkyl halide. Nucleophilic substitution by cyanide ion occurs via a backside bimolecular nucleophilic substitution ($S_N2$) pathway without carbocation rearrangement."
  ),
  mcq(
    "Which of the following methods cannot be used to synthesize benzonitrile?",
    [
      "Heating chlorobenzene with aqueous $\\text{KCN}$ at room temperature",
      "Reaction of benzenediazonium chloride with $\\text{CuCN}/\\text{KCN}$",
      "Dehydration of benzamide with $\\text{P}_4\\text{O}_{10}$",
      "Dehydration of benzaldoxime with acetic anhydride"
    ],
    0,
    "Chlorobenzene does not react with aqueous $\\text{KCN}$ under ambient conditions due to resonance stabilization of the $\\text{C}-\\text{Cl}$ bond. All other options are well-known synthetic routes to benzonitrile."
  ),

  // --- 13 NUMERICAL QUESTIONS ---
  num(
    "What is the formal oxidation state of the nitrile carbon atom in acetonitrile ($\\text{CH}_3-\\text{C}\\equiv\\text{N}$)?",
    2,
    "In $\\text{CH}_3-\\text{C}\\equiv\\text{N}$, the nitrile carbon is bonded to a methyl carbon (assumed $\\Delta\\text{EN} \\approx 0$) and shares three bonds with more electronegative nitrogen (contributing $+3$). However, in standard IUPAC oxidation state formalism where $\\text{C}-\\text{C}$ contributes 0 and each bond to $\\text{N}$ contributes $+1$, the oxidation state is $+3 - 1 = +2$."
  ),
  num(
    "How many carbon atoms are present in the carboxylic acid obtained by complete hydrolysis of phenylacetonitrile ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{CN}$)?",
    8,
    "Hydrolysis of phenylacetonitrile yields phenylacetic acid ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{COOH}$). The benzene ring contains 6 carbons, the methylene group has 1 carbon, and the carboxylic acid group has 1 carbon, giving a total of $6 + 1 + 1 = 8$ carbon atoms."
  ),
  num(
    "How many moles of hydrogen gas ($\\text{H}_2$) are consumed for the complete catalytic reduction of $1\\text{ mole}$ of benzonitrile to benzylamine?",
    2,
    "The reduction equation is $\\text{C}_6\\text{H}_5\\text{C}\\equiv\\text{N} + 2\\text{H}_2 \\xrightarrow{\\text{Ni}} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$. Exactly 2 moles of $\\text{H}_2$ are consumed per mole of nitrile."
  ),
  num(
    "Calculate the molecular mass of acetonitrile ($\\text{CH}_3\\text{CN}$) in $\\text{g/mol}$ (Atomic masses: $\\text{C}=12, \\text{H}=1, \\text{N}=14$).",
    41,
    "Formula is $\\text{C}_2\\text{H}_3\\text{N}$. Molecular mass $= 2(12) + 3(1) + 14 = 24 + 3 + 14 = 41\\text{ g/mol}$."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent, DBE) of benzonitrile ($\\text{C}_7\\text{H}_5\\text{N}$)?",
    6,
    "Using $\\text{DBE} = C - \\frac{H}{2} + \\frac{N}{2} + 1$: for $\\text{C}_7\\text{H}_5\\text{N}$, $\\text{DBE} = 7 - \\frac{5}{2} + \\frac{1}{2} + 1 = 7 - 2 + 1 = 6$ (4 from the aromatic ring + 2 from the $\\text{C}\\equiv\\text{N}$ triple bond)."
  ),
  num(
    "How many total $\\pi$-bonds are present in a molecule of benzonitrile ($\\text{C}_6\\text{H}_5\\text{CN}$)?",
    5,
    "The benzene ring contains 3 $\\pi$-bonds. The cyano group ($-\\text{C}\\equiv\\text{N}$) contains 2 $\\pi$-bonds. Total $\\pi$-bonds $= 3 + 2 = 5$."
  ),
  num(
    "When $0.2\\text{ mole}$ of acetonitrile undergoes complete hydrolysis with aqueous hydrochloric acid, how many grams of acetic acid (molar mass $= 60\\text{ g/mol}$) are produced assuming quantitative yield?",
    12,
    "Reaction is $\\text{CH}_3\\text{CN} + 2\\text{H}_2\\text{O} + \\text{HCl} \\rightarrow \\text{CH}_3\\text{COOH} + \\text{NH}_4\\text{Cl}$. One mole of acetonitrile gives one mole of acetic acid. For $0.2\\text{ mole}$, mass formed $= 0.20\\text{ mol} \\times 60\\text{ g/mol} = 12\\text{ g}$."
  ),
  num(
    "What is the bond angle (in degrees) around the cyano carbon atom in acetonitrile ($\\text{H}_3\\text{C}-\\text{C}\\equiv\\text{N}$)?",
    180,
    "The cyano carbon is $sp$ hybridized and forms two $\\sigma$ bonds directly opposite to each other. The bond angle is $180^\\circ$."
  ),
  num(
    "How many molecules of water are consumed in the complete hydrolysis of one molecule of an alkyl cyanide to a carboxylic acid?",
    2,
    "The balanced reaction is $\\text{R}-\\text{CN} + 2\\text{H}_2\\text{O} + \\text{H}^+ \\rightarrow \\text{R}-\\text{COOH} + \\text{NH}_4^+$. Exactly 2 molecules of water are consumed."
  ),
  num(
    "How many structural isomeric nitriles are possible for the molecular formula $\\text{C}_4\\text{H}_7\\text{N}$ that do not contain carbon-carbon double bonds?",
    2,
    "The saturated nitriles with formula $\\text{C}_4\\text{H}_7\\text{N}$ are:\n1. Butanenitrile: $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CN}$\n2. 2-Methylpropanenitrile: $(\\text{CH}_3)_2\\text{CHCN}$\nTotal = 2 structural isomers."
  ),
  num(
    "How many moles of methylmagnesium bromide are consumed by $1\\text{ mole}$ of acetonitrile to form acetone after acidic hydrolysis?",
    1,
    "One mole of Grignard reagent adds across the $\\text{C}\\equiv\\text{N}$ triple bond to form the mono-adduct $[(\\text{CH}_3)_2\\text{C}=\\text{NMgBr}]^-$, which upon hydrolysis yields acetone. Exactly 1 mole of $\\text{CH}_3\\text{MgBr}$ is consumed."
  ),
  num(
    "In the Stephen reduction of benzonitrile, what is the change in the oxidation state of the tin atom in the $\\text{SnCl}_2$ reducing agent?",
    2,
    "During the reduction, $\\text{Sn}^{2+}$ (in $\\text{SnCl}_2$) is oxidized to $\\text{Sn}^{4+}$ (in $\\text{SnCl}_4$ or $\\text{H}_2\\text{SnCl}_6$). The change in oxidation state is $+4 - (+2) = 2$."
  ),
  num(
    "What is the total number of non-bonding electron pairs (lone pairs) in a neutral molecule of acetonitrile ($\\text{CH}_3\\text{CN}$)?",
    1,
    "In $\\text{CH}_3-\\text{C}\\equiv\\text{N}$, all hydrogens and carbons have completed duplets/octets with 0 lone pairs. The terminal $sp$ nitrogen atom has an octet consisting of 3 bonding pairs and 1 non-bonding lone pair. Total lone pairs = 1."
  )
];

// Validate KaTeX
function validateKatex(str) {
  if (!str) return [];
  const errors = [];
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      errors.push({ math, err: err.message });
    }
  }
  return errors;
}

let totalKatexErrors = 0;
questions.forEach((q, idx) => {
  const qErr = validateKatex(q.question);
  const expErr = validateKatex(q.explanation);
  let optErr = [];
  q.options.forEach(opt => optErr.push(...validateKatex(opt)));
  const allErr = [...qErr, ...expErr, ...optErr];
  if (allErr.length > 0) {
    totalKatexErrors += allErr.length;
    console.error(`Error in Q[${idx}]:`, allErr);
  }
});

console.log(`Part 4 total questions: ${questions.length}`);
console.log(`Part 4 KaTeX errors: ${totalKatexErrors}`);

if (totalKatexErrors === 0 && questions.length === 47) {
  const outPath = path.join(__dirname, "data_nitrogen_part4.js");
  fs.writeFileSync(outPath, "module.exports = " + JSON.stringify(questions, null, 2) + ";\n");
  console.log("Successfully wrote", outPath);
} else {
  console.error("Validation failed! Check errors.");
  process.exit(1);
}
