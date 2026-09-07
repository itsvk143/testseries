const fs = require("fs");
const path = require("path");
const katex = require("katex");

function validateKaTeX(text) {
  if (!text) return { valid: true };
  const inlineRegex = /\$([^$]+)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      return { valid: false, error: e.message, math: match[1] };
    }
  }
  return { valid: true };
}

const subtopic = "Isocyanides";

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
    subTopic: subtopic,
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
    subTopic: subtopic,
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
    subTopic: subtopic,
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // --- 26 AR QUESTIONS ---
  ar(
    "Alkyl isocyanides ($\\text{R}-\\text{NC}$) have lower boiling points than their isomeric alkyl cyanides ($\\text{R}-\\text{CN}$).",
    "Alkyl cyanides possess a significantly higher dipole moment than alkyl isocyanides, leading to stronger dipole-dipole attractions in cyanides.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. In alkyl cyanides ($\\text{R}-\\text{C}\\equiv\\text{N}$), the dipole moment is large (~4.0 D). In alkyl isocyanides ($\\text{R}-\\overset{+}{\\text{N}}\\equiv\\overset{-}{\\text{C}}$), the formal charges oppose the bond dipole, resulting in a lower net dipole moment (~3.0 D) and hence lower boiling points."
  ),
  ar(
    "Reaction of ethyl bromide with alcoholic $\\text{AgCN}$ yields ethyl isocyanide as the major product, whereas with $\\text{KCN}$ it yields ethyl cyanide.",
    "$\\text{AgCN}$ is predominantly covalent in nature, leaving only the lone pair of nitrogen available for nucleophilic attack.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains Assertion. $\\text{AgCN}$ is covalent, so the nitrogen atom acts as the nucleophilic center forming an isocyanide ($\\text{R}-\\text{NC}$). In contrast, $\\text{KCN}$ is largely ionic, providing ambident cyanide ions ($\\text{CN}^-$) where attack through carbon is preferred because the $\\text{C}-\\text{C}$ bond formed is stronger than the $\\text{C}-\\text{N}$ bond."
  ),
  ar(
    "Alkyl isocyanides undergo acidic hydrolysis to yield primary amines and formic acid.",
    "In acidic aqueous medium, water adds across the $\\text{N}\\equiv\\text{C}$ bond of isocyanide to initially form an N-alkylformamide, which hydrolyzes to give $\\text{R}-\\text{NH}_2$ and $\\text{HCOOH}$.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{R}-\\text{NC} + 2\\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{R}-\\text{NH}_2 + \\text{HCOOH}$. Acid-catalyzed nucleophilic attack of water on the terminal carbon followed by rearrangement yields formamide derivative, which further hydrolyzes to a primary amine and formic acid."
  ),
  ar(
    "Alkyl isocyanides are resistant to alkaline hydrolysis and do not react with aqueous $\\text{NaOH}$.",
    "The terminal carbon in alkyl isocyanides possesses a formal negative charge and a lone pair of electrons, which repels nucleophilic attack by hydroxide ions ($\\text{OH}^-$).",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains the Assertion. The resonance structure $\\text{R}-\\overset{+}{\\text{N}}\\equiv\\overset{-}{\\text{C}}$ shows a formal negative charge and unshared pair on the carbon atom. The electron-rich terminal carbon repels the negatively charged nucleophile ($\\text{OH}^-$), making isocyanides inert to basic hydrolysis."
  ),
  ar(
    "Reduction of methyl isocyanide with $\\text{LiAlH}_4$ gives dimethylamine, a secondary amine.",
    "Reduction of isocyanides ($\\text{R}-\\text{NC}$) hydrogenates the terminal carbon to a methyl group attached to nitrogen, yielding an N-methyl secondary amine ($\\text{R}-\\text{NH}-\\text{CH}_3$).",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{CH}_3-\\text{NC} + 4[\\text{H}] \\xrightarrow{\\text{LiAlH}_4} \\text{CH}_3-\\text{NH}-\\text{CH}_3$ (dimethylamine). Reduction of isocyanides consistently yields secondary amines containing an N-methyl group."
  ),
  ar(
    "The carbylamine reaction is given exclusively by primary aliphatic and aromatic amines.",
    "The mechanism of carbylamine reaction requires two replaceable hydrogen atoms on the nitrogen atom to form the triple bond of isocyanide through successive $\\alpha$-eliminations.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $1^\\circ$ amines ($\\text{R}-\\text{NH}_2$) have two protons on nitrogen which are abstracted during the elimination steps with base and dichlorocarbene ($:\\text{CCl}_2$) intermediate. Secondary and tertiary amines lack two protons and fail to undergo this reaction."
  ),
  ar(
    "In the carbylamine test, chloroform and ethanolic $\\text{KOH}$ generate dichlorocarbene as the reactive intermediate.",
    "Hydroxide ion abstracts the acidic proton of chloroform followed by expulsion of chloride ion via an $\\alpha$-elimination process.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{CHCl}_3 + \\text{OH}^- \\rightleftharpoons :\\bar{\\text{C}}\\text{Cl}_3 + \\text{H}_2\\text{O} \\xrightarrow{-\\text{Cl}^-} :\\text{CCl}_2$. Dichlorocarbene is an electron-deficient carbene formed by $\\alpha$-elimination that acts as the electrophile toward the primary amine."
  ),
  ar(
    "Alkyl isocyanides have an extremely foul, repulsive, and intolerable odour.",
    "Isocyanides are volatile organic compounds containing a terminal divalent carbon with a lone pair that strongly interacts with olfactory receptors.",
    1,
    "Both Assertion and Reason are true, but Reason is not the complete chemical explanation of why olfactory receptors detect isocyanides so strongly. Isocyanides (carbylamines) are notorious for their intensely noxious and toxic odour, which allows them to serve as a qualitative detection test for $1^\\circ$ amines even in trace quantities."
  ),
  ar(
    "When heated to high temperatures, alkyl isocyanides isomerize exothermically to the corresponding alkyl cyanides.",
    "The carbon-carbon ($\\text{C}-\\text{C}$) bond in alkyl cyanides is thermodynamically more stable than the carbon-nitrogen ($\\text{C}-\\text{N}$) bond of isocyanides.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains the Assertion. $\\text{R}-\\text{NC} \\xrightarrow{\\Delta} \\text{R}-\\text{CN}$. This unimolecular thermal rearrangement is exothermic ($\\Delta H < 0$) because the formation of a strong $\\text{C}-\\text{C}$ single bond and stable $\\text{C}\\equiv\\text{N}$ triple bond provides thermodynamic stability."
  ),
  ar(
    "Oxidation of alkyl isocyanides with mercuric oxide ($\\text{HgO}$) produces alkyl isocyanates.",
    "The terminal divalent carbon atom of the isocyanide is readily oxidized by accepting an oxygen atom.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{R}-\\text{NC} + \\text{HgO} \\rightarrow \\text{R}-\\text{N}=\\text{C}=\\text{O} + \\text{Hg}$. The terminal carbon of isocyanide has a lone pair and behaves like a carbene center, easily adding oxygen from mild oxidizing agents."
  ),
  ar(
    "Alkyl isocyanides react with sulfur on heating to produce alkyl isothiocyanates.",
    "Sulfur adds directly to the terminal nucleophilic/carbene-like carbon of the isocyanide group.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{R}-\\text{NC} + \\text{S} \\xrightarrow{\\Delta} \\text{R}-\\text{N}=\\text{C}=\\text{S}$. The terminal carbon atom with its lone pair undergoes addition with sulfur to yield alkyl isothiocyanate."
  ),
  ar(
    "Chlorine gas reacts with alkyl isocyanides to form alkyl isocyanide dichlorides ($\\text{R}-\\text{N}=\\text{CCl}_2$).",
    "The terminal carbon in alkyl isocyanide undergoes an $\\alpha$-addition reaction with halogens.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains the Assertion. In isocyanides, both chlorine atoms add to the same terminal carbon atom (an $\\alpha$-addition, typical of carbene-like centers): $\\text{R}-\\text{NC} + \\text{Cl}_2 \\rightarrow \\text{R}-\\text{N}=\\text{CCl}_2$."
  ),
  ar(
    "Secondary amines do not give the carbylamine test.",
    "Secondary amines lack two replaceable hydrogen atoms on the nitrogen atom required for the double elimination sequence.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains the Assertion. In secondary amines ($\\text{R}_2\\text{NH}$), only one hydrogen is attached to nitrogen. The formation of the isocyanide ($\\text{R}-\\text{NC}$) requires two successive deprotonation steps, so secondary amines cannot form carbylamines."
  ),
  ar(
    "Tertiary amines do not give the carbylamine test.",
    "Tertiary amines have no hydrogen atoms attached to the nitrogen atom.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains the Assertion. Tertiary amines ($\\text{R}_3\\text{N}$) possess no replaceable $\\text{N}-\\text{H}$ bonds and therefore cannot undergo condensation with dichlorocarbene to form isocyanides."
  ),
  ar(
    "Aniline gives the carbylamine test when warmed with chloroform and alcoholic potassium hydroxide.",
    "Aniline is a primary aromatic amine possessing an unsubstituted $-\\text{NH}_2$ group.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{NC} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$. Phenyl isocyanide is formed, which has an intensely obnoxious smell."
  ),
  ar(
    "N-Methylaniline does not give the carbylamine test.",
    "N-Methylaniline is a secondary aromatic amine.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. N-Methylaniline ($\\text{C}_6\\text{H}_5\\text{NHCH}_3$) is a secondary amine having only one hydrogen atom on nitrogen, so it does not form an isocyanide."
  ),
  ar(
    "Alkyl isocyanides are less basic than the corresponding alkyl amines.",
    "In alkyl isocyanides, the nitrogen atom is sp hybridized and carries a formal positive charge, holding its electron density tightly.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. In $\\text{R}-\\overset{+}{\\text{N}}\\equiv\\overset{-}{\\text{C}}$, the nitrogen atom has no unshared lone pair for protonation and is sp hybridized with a formal positive charge, making isocyanides extremely weak bases compared to $\\text{sp}^3$ amines."
  ),
  ar(
    "Dehydration of N-alkylformamides ($\\text{R}-\\text{NH}-\\text{CHO}$) with $\\text{POCl}_3$ in the presence of pyridine yields alkyl isocyanides.",
    "Phosphorus oxychloride acts as an effective dehydrating agent that removes a molecule of water from the formamide functional group.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{R}-\\text{NH}-\\text{CHO} + \\text{POCl}_3 \\xrightarrow{\\text{Pyridine}} \\text{R}-\\text{NC} + \\text{H}_2\\text{O}$ (absorbed by $\\text{POCl}_3$). This is the standard modern laboratory method (Ugi method) for preparing isocyanides."
  ),
  ar(
    "In the structure of methyl isocyanide, the carbon-nitrogen-carbon bond angle is approximately $180^\\circ$.",
    "The nitrogen atom in alkyl isocyanide is sp hybridized and forms linear bonds with alkyl carbon and terminal carbon.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains Assertion. The nitrogen atom forms two $\\sigma$ bonds (one to alkyl carbon, one to terminal carbon) and has no lone pair on nitrogen (it participates in the triple bond), resulting in sp hybridization and a linear $\\text{C}-\\text{N}\\equiv\\text{C}$ arrangement ($180^\\circ$)."
  ),
  ar(
    "The dipole moment of methyl isocyanide is directed towards the carbon atom.",
    "The formal negative charge resides on the terminal carbon atom in the dominant resonance contributor $\\text{CH}_3-\\overset{+}{\\text{N}}\\equiv\\overset{-}{\\text{C}}$.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. In methyl isocyanide, the formal charges are $\\overset{+}{\\text{N}}$ and $\\overset{-}{\\text{C}}$. The charge separation gives a dipole directed from the positively charged nitrogen toward the negatively charged carbon, opposing the standard electronegativity trend."
  ),
  ar(
    "Carbylamine test can distinguish between ethylamine and diethylamine.",
    "Ethylamine is a primary amine and produces a foul-smelling isocyanide, while diethylamine is a secondary amine and gives no reaction.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. Ethylamine ($\\text{C}_2\\text{H}_5\\text{NH}_2$) forms ethyl isocyanide ($\\text{C}_2\\text{H}_5\\text{NC}$) with an intolerable odour, while diethylamine ($\\text{C}_2\\text{H}_5)_2\\text{NH}$ does not react."
  ),
  ar(
    "Carbylamine test cannot be used to distinguish between methylamine and aniline.",
    "Both methylamine and aniline are primary amines and both produce foul-smelling isocyanides upon heating with chloroform and alcoholic $\\text{KOH}$.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains the Assertion. Both aliphatic $1^\\circ$ amines ($\\text{CH}_3\\text{NH}_2$) and aromatic $1^\\circ$ amines ($\\text{C}_6\\text{H}_5\\text{NH}_2$) respond positively to the carbylamine test, so it cannot distinguish between them (nitrous acid test or azo-dye test is needed)."
  ),
  ar(
    "Complete catalytic hydrogenation of phenyl isocyanide gives N-methylaniline.",
    "Reduction of the isocyano group ($-\\text{NC}$) by four hydrogen atoms converts it into a methylamino group ($-\\text{NH}-\\text{CH}_3$).",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{C}_6\\text{H}_5\\text{NC} + 2\\text{H}_2 \\xrightarrow{\\text{Ni}} \\text{C}_6\\text{H}_5\\text{NHCH}_3$. Phenyl isocyanide is reduced to N-methylaniline, a secondary aromatic amine."
  ),
  ar(
    "Ozone oxidizes ethyl isocyanide to ethyl isocyanate.",
    "Ozone donates an oxygen atom to the divalent terminal carbon of the isocyano group.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. $\\text{C}_2\\text{H}_5\\text{NC} + \\text{O}_3 \\rightarrow \\text{C}_2\\text{H}_5\\text{N}=\\text{C}=\\text{O} + \\text{O}_2$. The isocyano carbon readily takes up oxygen to form the isocyanate."
  ),
  ar(
    "During the carbylamine test of an amine, the reaction mixture should be destroyed with concentrated hydrochloric acid before disposal.",
    "Concentrated $\\text{HCl}$ hydrolyzes the toxic and foul-smelling isocyanide into non-volatile, odorless amine hydrochloride and formic acid.",
    0,
    "Both Assertion and Reason are true, and Reason correctly explains Assertion. Isocyanides are highly toxic and persistent in odour. Acidic hydrolysis destroys the isocyanide: $\\text{R}-\\text{NC} + \\text{HCl} + 2\\text{H}_2\\text{O} \\rightarrow \\text{R}-\\text{NH}_3^+\\text{Cl}^- + \\text{HCOOH}$, rendering the mixture safe for disposal."
  ),
  ar(
    "Alkyl isocyanides are constitutional isomers of alkyl cyanides.",
    "Both alkyl isocyanides and alkyl cyanides share the identical molecular formula $\\text{C}_n\\text{H}_{2n+1}\\text{N}$ but differ in the connectivity of the functional group.",
    0,
    "Both Assertion and Reason are true, and Reason is the correct explanation. Alkyl cyanides ($\\text{R}-\\text{C}\\equiv\\text{N}$) and alkyl isocyanides ($\\text{R}-\\text{N}\\equiv\\text{C}$) have the same molecular formula but different functional group connectivity (functional isomerism)."
  ),

  // --- 8 MCQs ---
  mcq(
    "When ethyl iodide is heated with alcoholic $\\text{AgCN}$, the major product formed is:",
    [
      "Ethyl cyanide",
      "Ethyl isocyanide",
      "Ethylamine",
      "Diethylamine"
    ],
    1,
    "$\\text{AgCN}$ is predominantly covalent, so only the lone pair of electrons on the nitrogen atom is available for nucleophilic attack on ethyl iodide. Consequently, ethyl isocyanide ($\\text{C}_2\\text{H}_5\\text{NC}$) is formed as the major product."
  ),
  mcq(
    "Which of the following compounds gives an intensely foul-smelling substance when treated with chloroform and ethanolic $\\text{KOH}$?",
    [
      "Dimethylamine",
      "Trimethylamine",
      "Benzylamine",
      "N-Methylaniline"
    ],
    2,
    "The carbylamine test is given exclusively by primary amines. Benzylamine ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$) is a primary amine and reacts with $\\text{CHCl}_3$ and ethanolic $\\text{KOH}$ to form benzyl isocyanide, which has an offensive foul smell. Dimethylamine and N-methylaniline are secondary amines, and trimethylamine is a tertiary amine."
  ),
  mcq(
    "Hydrolysis of methyl isocyanide in the presence of dilute mineral acid gives:",
    [
      "Methylamine and formic acid",
      "Methylamine and acetic acid",
      "Methanol and formamide",
      "Ammonia and acetic acid"
    ],
    0,
    "Acidic hydrolysis of isocyanides cleaves the $\\text{C}-\\text{N}$ triple bond to give a primary amine and formic acid: $\\text{CH}_3\\text{NC} + 2\\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{NH}_2 + \\text{HCOOH}$."
  ),
  mcq(
    "Reduction of ethyl isocyanide with sodium and ethanol (or $\\text{LiAlH}_4$) produces:",
    [
      "Propylamine",
      "Ethylamine",
      "N-Methylethylamine",
      "Dimethylamine"
    ],
    2,
    "Reduction of an isocyanide ($\\text{R}-\\text{NC}$) yields a secondary amine containing an N-methyl group: $\\text{C}_2\\text{H}_5-\\text{NC} + 4[\\text{H}] \\rightarrow \\text{C}_2\\text{H}_5-\\text{NH}-\\text{CH}_3$ (N-methylethylamine or ethylmethylamine)."
  ),
  mcq(
    "What is the reactive electrophilic intermediate generated in the carbylamine reaction?",
    [
      "Carbonium ion ($^+\\text{CH}_3$)",
      "Dichlorocarbene ($:\\text{CCl}_2$)",
      "Trichloromethyl radical ($\\cdot\\text{CCl}_3$)",
      "Nitrene ($:\\text{NH}$)"
    ],
    1,
    "In the carbylamine reaction, chloroform reacts with strong base via $\\alpha$-elimination to generate dichlorocarbene ($:\\text{CCl}_2$), which acts as the electrophile attacked by the lone pair of the primary amine nitrogen."
  ),
  mcq(
    "An organic compound (A) with molecular formula $\\text{C}_3\\text{H}_7\\text{NO}$ on treatment with $\\text{POCl}_3$ in pyridine gives compound (B) with an offensive odour. Compound (B) upon catalytic hydrogenation gives N-methylisopropylamine. Compound (A) is:",
    [
      "N-Ethylformamide",
      "N-Isopropylformamide",
      "Propionamide",
      "N,N-Dimethylformamide"
    ],
    1,
    "Dehydration of N-alkylformamides with $\\text{POCl}_3$ yields isocyanides. Since reduction of (B) gives N-methylisopropylamine $(\\text{CH}_3)_2\\text{CH}-\\text{NH}-\\text{CH}_3$, (B) must be isopropyl isocyanide $(\\text{CH}_3)_2\\text{CH}-\\text{NC}$. Therefore, starting material (A) is N-isopropylformamide, $(\\text{CH}_3)_2\\text{CH}-\\text{NH}-\\text{CHO}$."
  ),
  mcq(
    "Which of the following statements about alkyl isocyanides is INCORRECT?",
    [
      "They have lower boiling points than isomeric alkyl cyanides.",
      "They are readily hydrolyzed by aqueous alkalis.",
      "They isomerize to alkyl cyanides upon heating.",
      "They undergo $\\alpha$-addition reactions with halogens."
    ],
    1,
    "Statement B is incorrect. Alkyl isocyanides are resistant to attack by alkalis because the terminal carbon carries a formal negative charge and a lone pair, which repels nucleophilic hydroxide ions ($\\text{OH}^-$). They only undergo hydrolysis in acidic medium."
  ),
  mcq(
    "When phenyl isocyanide is heated with sulfur powder, the product formed is:",
    [
      "Phenyl thiocyanate",
      "Phenyl isothiocyanate",
      "Thiophenol",
      "Diphenyl sulfide"
    ],
    1,
    "Heating an isocyanide with sulfur results in addition to the terminal carbon to form an isothiocyanate: $\\text{C}_6\\text{H}_5\\text{NC} + \\text{S} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5-\\text{N}=\\text{C}=\\text{S}$ (phenyl isothiocyanate)."
  ),

  // --- 13 NUMERICAL QUESTIONS ---
  num(
    "How many moles of $\\text{KOH}$ are consumed per mole of primary amine in the carbylamine reaction?",
    3,
    "The stoichiometric balanced equation is: $\\text{R}-\\text{NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\rightarrow \\text{R}-\\text{NC} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$. Thus, 3 moles of $\\text{KOH}$ are consumed per mole of primary amine."
  ),
  num(
    "How many moles of hydrogen atoms $[\\text{H}]$ are required in the complete reduction of one mole of methyl isocyanide to dimethylamine?",
    4,
    "$\\text{CH}_3-\\text{NC} + 4[\\text{H}] \\rightarrow \\text{CH}_3-\\text{NH}-\\text{CH}_3$. Four hydrogen atoms (equivalent to 4 electrons and $4\\text{H}^+$) are required to reduce one mole of isocyanide to secondary amine."
  ),
  num(
    "Among the following compounds, how many give a positive carbylamine test?\n(i) Ethylamine\n(ii) Diethylamine\n(iii) Aniline\n(iv) N-Methylaniline\n(v) Benzylamine\n(vi) Trimethylamine\n(vii) 2-Aminopropane\n(viii) Acetamide",
    4,
    "Only primary amines give the carbylamine test:\n- Ethylamine: $1^\\circ$ amine (Yes)\n- Diethylamine: $2^\\circ$ amine (No)\n- Aniline: $1^\\circ$ amine (Yes)\n- N-Methylaniline: $2^\\circ$ amine (No)\n- Benzylamine: $1^\\circ$ amine (Yes)\n- Trimethylamine: $3^\\circ$ amine (No)\n- 2-Aminopropane: $1^\\circ$ amine (Yes)\n- Acetamide: Amide, not an amine (No)\nTotal = 4."
  ),
  num(
    "What is the magnitude of the formal charge on the nitrogen atom in the Lewis octet resonance structure of methyl isocyanide $(\\text{CH}_3-\\overset{+}{\\text{N}}\\equiv\\overset{-}{\\text{C}})$?",
    1,
    "In $\\text{CH}_3-\\text{N}\\equiv\\text{C}$, nitrogen has 4 valence bonds (one single, one triple) and 0 non-bonding electrons. Formal charge = $5 - 0 - 4 = +1$. The magnitude is 1."
  ),
  num(
    "What is the magnitude of the formal charge on the terminal carbon atom in the Lewis octet resonance structure of methyl isocyanide $(\\text{CH}_3-\\overset{+}{\\text{N}}\\equiv\\overset{-}{\\text{C}})$?",
    1,
    "The terminal carbon has 3 bonding pairs (triple bond) and 1 non-bonding lone pair (2 electrons). Formal charge = $4 - 2 - 3 = -1$. The magnitude is 1."
  ),
  num(
    "How many moles of water are required for the complete acidic hydrolysis of one mole of ethyl isocyanide to ethylamine and formic acid?",
    2,
    "$\\text{C}_2\\text{H}_5\\text{NC} + 2\\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{C}_2\\text{H}_5\\text{NH}_2 + \\text{HCOOH}$. Exactly 2 moles of water are consumed."
  ),
  num(
    "How many $\\pi$ bonds are present in a molecule of methyl isocyanide $(\\text{CH}_3-\\text{N}\\equiv\\text{C})$?",
    2,
    "The $-\\text{N}\\equiv\\text{C}$ functional group consists of one $\\sigma$ bond and two $\\pi$ bonds. Hence, there are 2 $\\pi$ bonds."
  ),
  num(
    "What is the oxidation state of the terminal carbon atom in alkyl isocyanides $(\\text{R}-\\text{N}\\equiv\\text{C})$?",
    2,
    "In an isocyanide ($\\text{R}-\\text{NC}$), nitrogen is more electronegative than carbon (EN: $\\text{N}=3.0, \\text{C}=2.5$). Standard IUPAC oxidation state assignment assigns the 6 shared electrons to nitrogen, giving carbon $4 - 2 = +2$. Thus, the oxidation state of carbon is $+2$."
  ),
  num(
    "How many chlorine atoms are present in one molecule of the product formed when methyl isocyanide reacts with chlorine gas?",
    2,
    "Methyl isocyanide undergoes $\\alpha$-addition with chlorine gas: $\\text{CH}_3-\\text{NC} + \\text{Cl}_2 \\rightarrow \\text{CH}_3-\\text{N}=\\text{CCl}_2$ (methyl isocyanide dichloride). The product contains 2 chlorine atoms."
  ),
  num(
    "How many isomeric primary amines of molecular formula $\\text{C}_4\\text{H}_{11}\\text{N}$ give a positive carbylamine test?",
    4,
    "The primary amine isomers of $\\text{C}_4\\text{H}_{11}\\text{N}$ are:\n1. Butan-1-amine\n2. Butan-2-amine\n3. 2-Methylpropan-1-amine (isobutylamine)\n4. 2-Methylpropan-2-amine (tert-butylamine)\nAll 4 are primary amines and give a positive carbylamine test. Total = 4."
  ),
  num(
    "How many isomeric isocyanides exist with the molecular formula $\\text{C}_4\\text{H}_9\\text{NC}$?",
    4,
    "The four butyl groups attached to the isocyano group are:\n1. n-Butyl isocyanide\n2. sec-Butyl isocyanide\n3. Isobutyl isocyanide\n4. tert-Butyl isocyanide\nHence, 4 constitutional isomers exist."
  ),
  num(
    "Consider the reaction sequence:\n$$\\text{CH}_3\\text{CH}_2\\text{NH}_2 \\xrightarrow{\\text{CHCl}_3, \\text{KOH}, \\Delta} \\text{A} \\xrightarrow{\\text{LiAlH}_4} \\text{B}$$\nWhat is the total number of carbon atoms present in one molecule of compound B?",
    3,
    "$\\text{A}$ is ethyl isocyanide $(\\text{CH}_3\\text{CH}_2\\text{NC})$. Reduction of ethyl isocyanide with $\\text{LiAlH}_4$ gives N-methylethylamine $(\\text{CH}_3\\text{CH}_2-\\text{NH}-\\text{CH}_3)$. The total number of carbon atoms in $\\text{B}$ is $2 + 1 = 3$."
  ),
  num(
    "A mixture of 1 mole of methylamine and 1 mole of dimethylamine is treated with excess chloroform and ethanolic $\\text{KOH}$. How many moles of potassium chloride $(\\text{KCl})$ are precipitated?",
    3,
    "Methylamine is a primary amine and reacts: $\\text{CH}_3\\text{NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\rightarrow \\text{CH}_3\\text{NC} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$, producing 3 moles of $\\text{KCl}$. Dimethylamine is a secondary amine and does not react. Therefore, exactly 3 moles of $\\text{KCl}$ are formed."
  )
];

// KaTeX Validation
let errors = 0;
questions.forEach((q, idx) => {
  const checkQ = validateKaTeX(q.question);
  if (!checkQ.valid) {
    console.error(`Question ${idx + 1} KaTeX error:`, checkQ.error, checkQ.math);
    errors++;
  }
  q.options.forEach((opt, oIdx) => {
    const checkOpt = validateKaTeX(opt);
    if (!checkOpt.valid) {
      console.error(`Question ${idx + 1} Option ${oIdx + 1} KaTeX error:`, checkOpt.error, checkOpt.math);
      errors++;
    }
  });
  const checkExp = validateKaTeX(q.explanation);
  if (!checkExp.valid) {
    console.error(`Question ${idx + 1} Explanation KaTeX error:`, checkExp.error, checkExp.math);
    errors++;
  }
});

console.log(`Part 7 total questions: ${questions.length}`);
console.log(`Part 7 KaTeX errors: ${errors}`);

if (errors === 0) {
  const outPath = path.join(__dirname, "data_nitrogen_part7.js");
  const fileContent = `// Part 7: ${subtopic} (47 questions: 26 AR, 8 MCQ, 13 NUM)\nmodule.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, "utf8");
  console.log(`Successfully wrote ${outPath}`);
} else {
  process.exit(1);
}
