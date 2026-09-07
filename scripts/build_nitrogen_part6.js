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
    subTopic: "Gabriel phthalimide synthesis and Hoffmann bromamide degradation",
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
    subTopic: "Gabriel phthalimide synthesis and Hoffmann bromamide degradation",
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
    subTopic: "Gabriel phthalimide synthesis and Hoffmann bromamide degradation",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // --- 26 ASSERTION-REASON ---
  ar(
    "Aromatic primary amines such as aniline cannot be prepared by Gabriel phthalimide synthesis.",
    "Aryl halides do not undergo nucleophilic substitution ($S_N2$) with the potassium phthalimide anion under normal conditions.",
    0,
    "The nucleophilic substitution step in the Gabriel synthesis proceeds via an $S_N2$ mechanism. Aryl halides are resistant to nucleophilic displacement due to partial double bond character of the $\\text{C}_{sp^2}-\\text{X}$ bond and repulsion from the aromatic $\\pi$-cloud. Hence, N-arylphthalimide cannot form."
  ),
  ar(
    "Gabriel phthalimide synthesis produces pure primary aliphatic amines free from secondary and tertiary amines.",
    "The alkyl group is bonded to only one nitrogen atom in N-alkylphthalimide, and upon cleavage, exactly one primary amine molecule is released without over-alkylation.",
    0,
    "In Gabriel synthesis, only one alkyl halide molecule can displace phthalimide. The resulting N-alkylphthalimide has no replaceable hydrogen on nitrogen, preventing further alkylation. Hydrolysis then cleanly liberates pure primary aliphatic amine."
  ),
  ar(
    "Phthalimide has an acidic $\\text{N}-\\text{H}$ proton ($pK_a \\approx 8.3$) and dissolves in ethanolic potassium hydroxide.",
    "The negative charge on the conjugate phthalimide anion is extensively stabilized by resonance delocalization over two adjacent electron-withdrawing carbonyl oxygen atoms.",
    0,
    "Phthalimide contains an imido group flanked by two carbonyl groups. The negative charge formed upon deprotonation is delocalized over both carbonyl oxygens via resonance, giving the $\\text{N}-\\text{H}$ bond pronounced acidic character."
  ),
  ar(
    "Tertiary alkyl halides cannot be used in Gabriel phthalimide synthesis to prepare tertiary amines.",
    "Tertiary alkyl halides undergo predominant E2 elimination rather than $S_N2$ substitution when treated with the bulky potassium phthalimide base.",
    0,
    "Potassium phthalimide is a bulky nucleophile/base. When reacted with sterically hindered tertiary alkyl halides, it causes E2 dehydrohalogenation to yield an alkene instead of the substituted N-alkylphthalimide."
  ),
  ar(
    "In the Hoffmann bromamide degradation reaction, the primary amine formed has one carbon atom fewer than the starting primary amide.",
    "The carbonyl carbon of the primary amide is extruded as carbonate ($\\text{CO}_3^{2-}$) during the intramolecular rearrangement.",
    0,
    "The overall reaction $\\text{RCONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\rightarrow \\text{RNH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}$ removes the carbonyl carbon atom as potassium carbonate, producing a primary amine with one fewer carbon atom."
  ),
  ar(
    "During the Hoffmann bromamide degradation, an optically active amide undergoes rearrangement with complete retention of configuration at the migrating chiral center.",
    "The migration of the chiral alkyl group from the carbonyl carbon to the electron-deficient nitrogen occurs via an intramolecular concerted mechanism.",
    0,
    "The rearrangement step from the N-bromoamide anion to alkyl isocyanate is an intramolecular 1,2-shift. Because the migrating group never becomes a free carbanion or carbocation, the configuration at the migrating carbon is completely retained."
  ),
  ar(
    "The intermediate formed prior to hydrolysis in the Hoffmann bromamide degradation is an alkyl isocyanate ($\\text{R}-\\text{N}=\\text{C}=\\text{O}$).",
    "Simultaneous loss of bromide ion and 1,2-migration of the alkyl group from carbon to electron-deficient nitrogen generates the isocyanate.",
    0,
    "Deprotonation of N-bromoamide leaves an unstable conjugate base $[\\text{RCONBr}]^-$. As bromide leaves, the alkyl group $\\text{R}$ migrates with its bonding pair to nitrogen, cleanly generating an isocyanate ($\\text{R}-\\text{N}=\\text{C}=\\text{O}$)."
  ),
  ar(
    "Exactly four moles of potassium hydroxide ($\\text{KOH}$) and one mole of bromine ($\\text{Br}_2$) are consumed per mole of amide in the Hoffmann bromamide degradation.",
    "Two moles of $\\text{KOH}$ neutralize the two moles of $\\text{HBr}$ formed, one mole deprotonates the amide, and one mole participates in the formation of potassium carbonate.",
    1,
    "Both statements are true. The balanced equation $\\text{RCONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\rightarrow \\text{RNH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}$ establishes the $1:1:4$ molar ratio. However, Reason (R) does not accurately partition the 4 moles according to the elementary mechanistic steps (two deprotonations and two nucleophilic additions/hydrolyses on isocyanate/carbonate)."
  ),
  ar(
    "Secondary and tertiary amides do not undergo the Hoffmann bromamide degradation reaction.",
    "Secondary and tertiary amides lack the two replaceable hydrogen atoms on the nitrogen atom necessary to form the N-bromo intermediate and its conjugate anion.",
    0,
    "The mechanism requires an unsubstituted $-\\text{NH}_2$ group: one hydrogen is replaced by bromine to form $\\text{RCONHBr}$, and the second hydrogen is abstracted by base to generate the migrating intermediate $[\\text{RCONBr}]^-$. Disubstituted or monosubstituted amides cannot fulfill these requirements."
  ),
  ar(
    "Cleavage of N-alkylphthalimide can be carried out efficiently using hydrazine hydrate (Ing-Manske method) instead of vigorous aqueous hydrolysis.",
    "Hydrazine is an excellent nucleophile that reacts with N-alkylphthalimide via transamidation to precipitate phthalhydrazide, releasing the free amine under mild conditions.",
    0,
    "Vigorous acid or alkaline hydrolysis requires prolonged boiling and can hydrolyze other sensitive functional groups. Hydrazine hydrate smoothly cleaves the cyclic imide to precipitate insoluble phthalhydrazide, liberating the primary amine in high yield."
  ),
  ar(
    "Aniline can be synthesized conveniently by the Hoffmann bromamide degradation of benzamide.",
    "Aryl groups migrate smoothly from carbonyl carbon to nitrogen during the Hoffmann rearrangement.",
    0,
    "Benzamide ($\\text{C}_6\\text{H}_5\\text{CONH}_2$) undergoes Hoffmann bromamide degradation with $\\text{Br}_2$ and $\\text{KOH}$ to give aniline: $\\text{C}_6\\text{H}_5\\text{CONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}$."
  ),
  ar(
    "Benzylamine can be prepared in high yield by Gabriel phthalimide synthesis using benzyl chloride.",
    "Benzyl chloride is a primary halide that undergoes rapid $S_N2$ displacement by potassium phthalimide without competitive elimination.",
    0,
    "Benzyl chloride ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$) has no $\\beta$-hydrogens to undergo elimination and its benzylic position is highly reactive toward $S_N2$ attack by phthalimide anion, giving N-benzylphthalimide, which hydrolyzes to pure benzylamine."
  ),
  ar(
    "In the Hoffmann rearrangement of substituted benzamides, electron-donating groups on the aromatic ring accelerate the reaction rate.",
    "The migrating aryl group acts as a nucleophile, and electron-donating groups increase electron density at the migrating ring carbon.",
    0,
    "The aryl group migrates with its bonding electron pair to the electron-deficient nitrogen atom. Electron-donating substituents ($-\\text{OCH}_3, -\\text{CH}_3$) increase electron density on the aromatic ring, stabilizing the transition state and accelerating migration."
  ),
  ar(
    "Potassium phthalimide is insoluble in non-polar organic solvents like benzene but dissolves readily in dimethylformamide (DMF).",
    "Dimethylformamide is a polar aprotic solvent that solvates potassium cations effectively, leaving the phthalimide anion bare and highly nucleophilic.",
    0,
    "Polar aprotic solvents such as $\\text{DMF}$ or $\\text{DMSO}$ strongly solvate $\\text{K}^+$ cations via carbonyl oxygens while leaving the bulky phthalimide anion unencumbered by hydrogen bonding, greatly boosting its $S_N2$ nucleophilicity."
  ),
  ar(
    "Hoffmann bromamide reaction is an important method for descending a homologous series in organic chemistry.",
    "One carbon atom is lost as potassium carbonate during the conversion of an acid amide into an amine.",
    0,
    "Because an amide ($\\text{RCONH}_2$, $n$ carbons) yields an amine ($\\text{RNH}_2$, $n-1$ carbons), it allows the step-down (descent) of a carbon series, e.g., propanoic acid $\\rightarrow$ propanamide $\\rightarrow$ ethanamine."
  ),
  ar(
    "Hydrolysis of the isocyanate intermediate in alkaline solution directly yields the primary amine.",
    "The isocyanate undergoes nucleophilic addition of hydroxide to give an unstable carbamate ion, which spontaneously decarboxylates into the primary amine and carbonate ion.",
    0,
    "Hydroxide attacks the central electrophilic carbon of $\\text{R}-\\text{N}=\\text{C}=\\text{O}$ to yield carbamate $[\\text{R}-\\text{NH}-\\text{CO}_2]^-$, which rapidly loses $\\text{CO}_2$ (absorbed by base as $\\text{CO}_3^{2-}$) to leave the primary amine."
  ),
  ar(
    "If potassium hypobromite ($\\text{KOBr}$) or sodium hypochlorite ($\\text{NaOCl}$) is used instead of $\\text{Br}_2/\\text{KOH}$, the Hoffmann degradation proceeds normally.",
    "Bromine reacts instantaneously with potassium hydroxide in aqueous medium to generate potassium hypobromite in situ as the active halogenating agent.",
    0,
    "Mixing $\\text{Br}_2$ and $\\text{KOH}$ in cold water produces $\\text{KOBr} + \\text{KBr} + \\text{H}_2\\text{O}$. Freshly prepared or pre-formed alkali hypohalite solutions act as equivalent halogenating/deprotonating reagents for this transformation."
  ),
  ar(
    "Neopentyl halides (1-halo-2,2-dimethylpropane) give poor yields in Gabriel phthalimide synthesis.",
    "The bulky $\\text{tert}$-butyl group adjacent to the primary carbon creates severe steric hindrance to backside $S_N2$ attack by the phthalimide anion.",
    0,
    "Although neopentyl chloride is a primary halide, its backside is completely shielded by three bulky methyl groups on the $\\beta$-carbon, retarding $S_N2$ substitution by several orders of magnitude."
  ),
  ar(
    "Treatment of phthalic acid with ammonia followed by strong heating yields phthalimide.",
    "Ammonium phthalate formed initially dehydrates on mild heating to phthalamide, which upon strong heating undergoes cyclization with the loss of one molecule of ammonia.",
    0,
    "Heating phthalic acid with $\\text{NH}_3$ yields ammonium phthalate, which upon heating loses two water molecules to form phthalamide. Further strong heating causes intramolecular nucleophilic cyclization, expelling $\\text{NH}_3$ to yield cyclic phthalimide."
  ),
  ar(
    "During the Gabriel synthesis of ethylamine, phthalic acid (or sodium phthalate) is recovered quantitatively.",
    "The phthaloyl moiety is not consumed or destroyed during the synthesis and is regenerated upon hydrolysis of N-ethylphthalimide.",
    0,
    "Phthalimide acts as a synthetic carrier for the amino group. Upon basic or acidic hydrolysis of N-alkylphthalimide, phthalic acid (or its sodium salt) is regenerated intact and can be recycled."
  ),
  ar(
    "When acetamide is treated with bromine and excess sodium hydroxide, methylamine is evolved as a gas.",
    "Methylamine has a boiling point of $-6^\\circ\\text{C}$ and exists as a gas at room temperature.",
    0,
    "Acetamide ($\\text{CH}_3\\text{CONH}_2$) undergoes Hoffmann degradation to produce methylamine ($\\text{CH}_3\\text{NH}_2$). Because methylamine has a boiling point below ambient temperature ($-6^\\circ\\text{C}$), it is liberated as a pungent gas."
  ),
  ar(
    "In the Hoffmann bromamide reaction, the migration of the alkyl group is an intramolecular process rather than intermolecular.",
    "When a mixture of two different amides containing distinct isotopic labels is subjected to Hoffmann bromamide degradation, no cross-products are observed.",
    0,
    "Crossover experiments using isotopic labels or mixtures of two distinct amides confirm that the migrating group remains attached to the molecular framework throughout the rearrangement, proving an intramolecular concerted pathway."
  ),
  ar(
    "The acidity of phthalimide is greater than that of simple acyclic amides like acetamide.",
    "The conjugate base of phthalimide has two equivalent carbonyl groups contributing to resonance stabilization of the negative charge, whereas an acyclic amide has only one.",
    0,
    "In phthalimide, the negative charge is shared across two symmetrical carbonyl groups (three major resonance contributors). In acetamide, the negative charge is shared with only one carbonyl group, making phthalimide much more acidic ($pK_a \\approx 8.3$ vs $15-17$ for acetamide)."
  ),
  ar(
    "Primary amides containing $\\alpha,\\beta$-unsaturation can give ketones or aldehydes instead of unsaturated amines during Hoffmann degradation under certain conditions.",
    "Enamines formed by rearrangement of $\\alpha,\\beta$-unsaturated amides rapidly tautomerize and hydrolyze to carbonyl compounds in aqueous alkaline media.",
    0,
    "Rearrangement of an $\\alpha,\\beta$-unsaturated amide produces an enamine intermediate ($\\text{R}-\\text{CH}=\\text{CH}-\\text{NH}_2$). Enamines are unstable in water and hydrolyze rapidly to aldehydes or ketones."
  ),
  ar(
    "Gabriel synthesis can be adapted to synthesize $\\alpha$-amino acids using diethyl bromomalonate.",
    "Potassium phthalimide displaces bromide from diethyl bromomalonate via $S_N2$ substitution, followed by alkylation, hydrolysis, and decarboxylation.",
    0,
    "In the Gabriel amino acid synthesis, potassium phthalimide reacts with diethyl $\\alpha$-bromomalonate to give phthalimidomalonic ester, which after alkylation, acidic hydrolysis, and heating gives an $\\alpha$-amino acid with the loss of $\\text{CO}_2$."
  ),
  ar(
    "Aniline cannot be prepared from acetanilide via the Hoffmann bromamide reaction.",
    "Acetanilide is a secondary amide possessing an N-phenyl group rather than an unsubstituted primary carboxamide group.",
    0,
    "Hoffmann bromamide reaction requires a primary carboxamide with a terminal $-\\text{CONH}_2$ group. Acetanilide ($\\text{CH}_3\\text{CONHC}_6\\text{H}_5$) is a secondary amide and lacks the required structural unit."
  ),

  // --- 8 MCQs ---
  mcq(
    "Which of the following compounds CANNOT be prepared by Gabriel phthalimide synthesis?",
    [
      "Aniline",
      "Ethylamine",
      "Benzylamine",
      "1-Butylamine"
    ],
    0,
    "Gabriel phthalimide synthesis involves nucleophilic substitution ($S_N2$) of an alkyl halide by the phthalimide anion. Aryl halides (such as chlorobenzene) do not undergo $S_N2$ displacement due to partial double bond character; therefore, aniline cannot be prepared by this method."
  ),
  mcq(
    "What is the mole ratio of amide : $\\text{Br}_2$ : $\\text{KOH}$ consumed in the Hoffmann bromamide degradation reaction according to the balanced chemical equation?",
    [
      "$1 : 1 : 4$",
      "$1 : 2 : 4$",
      "$1 : 1 : 2$",
      "$2 : 1 : 4$"
    ],
    0,
    "The balanced chemical equation for the Hoffmann bromamide degradation is: $\\text{RCONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\rightarrow \\text{RNH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}$. The stoichiometric mole ratio is $1 : 1 : 4$."
  ),
  mcq(
    "Which of the following intermediates is formed during the Hoffmann bromamide degradation reaction?",
    [
      "Alkyl isocyanate ($\\text{R}-\\text{N}=\\text{C}=\\text{O}$)",
      "Carbocation ($^+\\text{CH}_3$)",
      "Carbanion ($^-\\text{NH}_2$)",
      "Oxime ($\\text{RCH}=\\text{NOH}$)"
    ],
    0,
    "The key intermediate formed by the concerted 1,2-migration of the alkyl group with loss of bromide ion is an alkyl isocyanate ($\\text{R}-\\text{N}=\\text{C}=\\text{O}$), which subsequently undergoes alkaline hydrolysis to yield the primary amine."
  ),
  mcq(
    "What is the starting material required to synthesize propan-1-amine using the Hoffmann bromamide degradation reaction?",
    [
      "Butanamide",
      "Propanamide",
      "Ethanamide",
      "Pentanenitrile"
    ],
    0,
    "The Hoffmann bromamide degradation removes the carbonyl carbon atom of the primary amide. To produce propan-1-amine ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2$, 3 carbons), the starting amide must have 4 carbons, which is butanamide ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CONH}_2$)."
  ),
  mcq(
    "When potassium phthalimide is treated with 2-bromopropane followed by alkaline hydrolysis, which amine is produced?",
    [
      "Propan-2-amine (Isopropylamine)",
      "Propan-1-amine",
      "Propene",
      "Dimethylamine"
    ],
    0,
    "Nucleophilic substitution of 2-bromopropane by potassium phthalimide gives N-isopropylphthalimide. Subsequent alkaline hydrolysis cleaves the imide to give isopropylamine (propan-2-amine) and sodium phthalate."
  ),
  mcq(
    "What stereochemical result is observed when an enantiomerically pure primary amide containing a stereocenter at the $\\alpha$-carbon undergoes Hoffmann degradation?",
    [
      "Complete retention of configuration",
      "Complete inversion of configuration",
      "Complete racemization",
      "Formation of a $1:1$ diastereomeric mixture"
    ],
    0,
    "The rearrangement involves an intramolecular 1,2-shift where the migrating chiral alkyl group transfers its bonding pair to nitrogen without becoming a free intermediate, leading to complete retention of stereochemical configuration."
  ),
  mcq(
    "Which of the following amides will NOT undergo the Hoffmann bromamide degradation reaction?",
    [
      "$\\text{CH}_3\\text{CONHCH}_3$",
      "$\\text{CH}_3\\text{CONH}_2$",
      "$\\text{C}_6\\text{H}_5\\text{CONH}_2$",
      "$\\text{CH}_3\\text{CH}_2\\text{CONH}_2$"
    ],
    0,
    "N-Methylacetamide ($\\text{CH}_3\\text{CONHCH}_3$) is a secondary amide containing only one hydrogen on nitrogen. The Hoffmann degradation strictly requires an unsubstituted primary amide ($-\\text{CONH}_2$)."
  ),
  mcq(
    "In Gabriel phthalimide synthesis, what reagent is used in the Ing-Manske modification for gentle cleavage of N-alkylphthalimide to release the primary amine?",
    [
      "Hydrazine hydrate ($\\text{NH}_2\\text{NH}_2\\cdot\\text{H}_2\\text{O}$)",
      "Lithium aluminium hydride ($\\text{LiAlH}_4$)",
      "Concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$)",
      "Aqueous potassium cyanide ($\\text{KCN}$)"
    ],
    0,
    "The Ing-Manske modification uses hydrazine hydrate to cleave N-alkylphthalimides by forming insoluble crystalline phthalhydrazide and liberating the free primary amine under mild, neutral conditions."
  ),

  // --- 13 NUMERICAL QUESTIONS ---
  num(
    "How many moles of $\\text{KOH}$ are consumed when $0.25\\text{ mole}$ of benzamide undergoes complete Hoffmann bromamide degradation?",
    1,
    "The stoichiometric ratio of $\\text{KOH}$ to amide is $4:1$. For $0.25\\text{ mole}$ of benzamide, moles of $\\text{KOH}$ consumed $= 0.25 \\times 4 = 1\\text{ mole}$."
  ),
  num(
    "How many carbon atoms are present in one molecule of the primary amine obtained from the Hoffmann degradation of hexanamide?",
    5,
    "Hexanamide contains 6 carbon atoms. The Hoffmann bromamide degradation removes the carbonyl carbon as carbonate, yielding pentan-1-amine which contains $6 - 1 = 5$ carbon atoms."
  ),
  num(
    "What is the difference in molar mass (in $\\text{g/mol}$) between ethanamide ($\\text{CH}_3\\text{CONH}_2$) and the amine produced from it via Hoffmann degradation (Atomic masses: $\\text{C}=12, \\text{O}=16$)?",
    28,
    "The Hoffmann degradation converts $\\text{R}-\\text{CO}-\\text{NH}_2$ to $\\text{R}-\\text{NH}_2$. The net loss is one carbonyl group ($-\\text{CO}-$), corresponding to a molar mass loss of $12 + 16 = 28\\text{ g/mol}$."
  ),
  num(
    "How many carbonyl ($>\\text{C}=\\text{O}$) groups are present in one molecule of phthalimide ($\\text{C}_8\\text{H}_5\\text{NO}_2$)?",
    2,
    "Phthalimide contains a fused five-membered imide ring with two carbonyl groups attached to the nitrogen atom and fused to the benzene ring. Total carbonyl groups = 2."
  ),
  num(
    "How many moles of potassium bromide ($\\text{KBr}$) are produced when $2\\text{ moles}$ of butanamide react with bromine and $\\text{KOH}$ according to the Hoffmann degradation?",
    4,
    "According to the balanced equation, each mole of amide produces 2 moles of $\\text{KBr}$. For 2 moles of amide, moles of $\\text{KBr} = 2 \\times 2 = 4\\text{ moles}$."
  ),
  num(
    "What is the total number of $\\sigma$ bonds in one molecule of methyl isocyanate ($\\text{CH}_3-\\text{N}=\\text{C}=\\text{O}$)?",
    6,
    "In $\\text{CH}_3-\\text{N}=\\text{C}=\\text{O}$:\n- Three $\\text{C}-\\text{H}$ $\\sigma$ bonds.\n- One $\\text{C}-\\text{N}$ $\\sigma$ bond.\n- One $\\text{N}=\\text{C}$ $\\sigma$ bond (plus one $\\pi$).\n- One $\\text{C}=\\text{O}$ $\\sigma$ bond (plus one $\\pi$).\nTotal $\\sigma$ bonds $= 3 + 1 + 1 + 1 = 6$."
  ),
  num(
    "What is the total number of $\\pi$ bonds in one molecule of methyl isocyanate ($\\text{CH}_3-\\text{N}=\\text{C}=\\text{O}$)?",
    2,
    "The cumulative double bond system $-\\text{N}=\\text{C}=\\text{O}$ has one $\\pi$ bond in the $\\text{N}=\\text{C}$ double bond and one $\\pi$ bond in the $\\text{C}=\\text{O}$ double bond. Total $\\pi$ bonds = 2."
  ),
  num(
    "How many moles of primary amine are produced when $1\\text{ mole}$ of potassium phthalimide reacts with 1-chloropropane followed by basic hydrolysis?",
    1,
    "One mole of potassium phthalimide reacts with one mole of alkyl halide to yield one mole of N-alkylphthalimide, which upon complete hydrolysis yields exactly 1 mole of primary amine."
  ),
  num(
    "What is the molecular mass (in $\\text{g/mol}$) of methylamine ($\\text{CH}_3\\text{NH}_2$) produced by the Hoffmann degradation of acetamide (Atomic masses: $\\text{C}=12, \\text{H}=1, \\text{N}=14$)?",
    31,
    "Formula is $\\text{CH}_5\\text{N}$. Molecular mass $= 12 + 5(1) + 14 = 31\\text{ g/mol}$."
  ),
  num(
    "When $12.1\\text{ g}$ of benzamide (molar mass $= 121\\text{ g/mol}$) is subjected to Hoffmann bromamide degradation with an $80\\%$ yield, what mass of aniline (molar mass $= 93\\text{ g/mol}$) is obtained in grams (rounded to one decimal place / nearest integer)?",
    7,
    "Moles of benzamide $= \\frac{12.1}{121} = 0.10\\text{ mol}$. Theoretical yield of aniline $= 0.10\\text{ mol} \\times 93\\text{ g/mol} = 9.3\\text{ g}$. At $80\\%$ yield, actual mass $= 9.3 \\times 0.80 = 7.44\\text{ g}$, which rounds to the nearest integer 7."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent, DBE) of phthalimide ($\\text{C}_8\\text{H}_5\\text{NO}_2$)?",
    7,
    "For $\\text{C}_8\\text{H}_5\\text{NO}_2$, $\\text{DBE} = 8 - \\frac{5}{2} + \\frac{1}{2} + 1 = 8 - 2 + 1 = 7$ (4 from the benzene ring + 1 from the imide ring + 2 from the two carbonyl double bonds)."
  ),
  num(
    "In the Hoffmann bromamide reaction, how many moles of $\\text{Br}_2$ are consumed per mole of primary amide?",
    1,
    "The stoichiometric ratio in the balanced equation $\\text{RCONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\rightarrow \\text{RNH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}$ is exactly 1 mole of $\\text{Br}_2$ per mole of amide."
  ),
  num(
    "How many hydrogen atoms are attached directly to nitrogen in the starting potassium phthalimide salt?",
    0,
    "In potassium phthalimide ($[\\text{C}_6\\text{H}_4(\\text{CO})_2\\text{N}]^-\\text{K}^+$), the acidic imide proton has been removed by $\\text{KOH}$ to form an ionic salt. There are 0 hydrogen atoms bonded to nitrogen."
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

console.log(`Part 6 total questions: ${questions.length}`);
console.log(`Part 6 KaTeX errors: ${totalKatexErrors}`);

if (totalKatexErrors === 0 && questions.length === 47) {
  const outPath = path.join(__dirname, "data_nitrogen_part6.js");
  fs.writeFileSync(outPath, "module.exports = " + JSON.stringify(questions, null, 2) + ";\n");
  console.log("Successfully wrote", outPath);
} else {
  console.error("Validation failed! Check errors.");
  process.exit(1);
}
