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
    subTopic: "Ozonolysis and oxidation of alkenes",
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
    subTopic: "Ozonolysis and oxidation of alkenes",
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
    subTopic: "Ozonolysis and oxidation of alkenes",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "In the reductive ozonolysis of alkenes, zinc dust is added along with water during the cleavage of the ozonide.",
    "Zinc dust acts as a reducing agent to decompose hydrogen peroxide ($\\text{H}_2\\text{O}_2$) formed during hydrolysis, preventing over-oxidation of aldehydes into carboxylic acids.",
    0,
    "Hydrolysis of ozonide releases aldehydes/ketones and $\\text{H}_2\\text{O}_2$. Without zinc, $\\text{H}_2\\text{O}_2$ oxidizes aldehydes to carboxylic acids: $\\text{Zn} + \\text{H}_2\\text{O}_2 \\rightarrow \\text{ZnO} + \\text{H}_2\\text{O}$. Zinc ensures that aldehydes are preserved."
  ),
  ar(
    "Reductive ozonolysis of 2-methylbut-2-ene produces propan-2-one (acetone) and ethanal (acetaldehyde).",
    "Ozonolysis cleaves the carbon-carbon double bond completely, replacing it with carbonyl oxygen atoms on both fragments.",
    0,
    "Cleaving the double bond in $((\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3)$ converts the $((\\text{CH}_3)_2\\text{C}=)$ fragment into acetone and the $(=\\text{CH}-\\text{CH}_3)$ fragment into acetaldehyde."
  ),
  ar(
    "Reductive ozonolysis of cyclohexene yields a single organic compound, hexane-1,6-dial (adipic dialdehyde).",
    "Cyclic alkenes undergo ring cleavage at the double bond during ozonolysis to form a single open-chain dicarbonyl compound.",
    0,
    "Because cyclohexene is a symmetrical cyclic monoalkene, cleavage of its internal double bond opens the six-membered ring into an open-chain dialdehyde $(\\text{OHC}-(\\text{CH}_2)_4-\\text{CHO})$."
  ),
  ar(
    "Oxidation of an alkene with cold, dilute, alkaline potassium permanganate (Baeyer's reagent) yields a cis-1,2-diol (glycol).",
    "The reaction proceeds through a cyclic five-membered permanganate ester intermediate that delivers two oxygen atoms simultaneously to the same face of the double bond (syn-dihydroxylation).",
    0,
    "Manganate ester formation occurs by concerted addition of two oxygens to the same face of the $\\pi$-bond. Hydrolysis of the cyclic ester preserves this geometry, yielding the cis-diol with syn-stereospecificity."
  ),
  ar(
    "Baeyer's reagent is used as a qualitative chemical test for detecting unsaturation in aliphatic hydrocarbons.",
    "During reaction with alkenes, the intense purple color of permanganate ions disappears and a brown precipitate of manganese dioxide ($\\text{MnO}_2$) is formed.",
    0,
    "Alkenes reduce $\\text{MnO}_4^-$ (purple) to $\\text{MnO}_2$ (brown insoluble precipitate): $3\\text{C}_2\\text{H}_4 + 2\\text{KMnO}_4 + 4\\text{H}_2\\text{O} \\rightarrow 3\\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH} + 2\\text{MnO}_2\\downarrow + 2\\text{KOH}$."
  ),
  ar(
    "Vigorous oxidation of 2-methylbut-2-ene with hot acidified $\\text{KMnO}_4$ yields acetone and ethanoic acid.",
    "Hot acidified $\\text{KMnO}_4$ oxidatively cleaves the double bond, oxidizing disubstituted alkene carbons into ketones and monosubstituted alkene carbons into carboxylic acids.",
    0,
    "Under vigorous conditions, $((\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3)$ cleaves completely. The $((\\text{CH}_3)_2\\text{C}=)$ carbon forms acetone, while the $(=\\text{CH}-\\text{CH}_3)$ carbon oxidizes past acetaldehyde to ethanoic acid $(\\text{CH}_3\\text{COOH})$."
  ),
  ar(
    "Vigorous oxidation of propene with hot acidic $\\text{KMnO}_4$ produces ethanoic acid, carbon dioxide, and water.",
    "The terminal $=\\text{CH}_2$ group of a terminal alkene is completely oxidized to carbon dioxide and water under harsh oxidizing conditions.",
    0,
    "$\\text{CH}_3\\text{CH}=\\text{CH}_2 + 4[\\text{O}] \\xrightarrow{\\text{hot } \\text{KMnO}_4/\\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{CO}_2 + \\text{H}_2\\text{O}$. The terminal methylene group oxidizes to formic acid, which is rapidly oxidized to $\\text{CO}_2 + \\text{H}_2\\text{O}$."
  ),
  ar(
    "Ozonolysis of benzene followed by treatment with $\\text{Zn}/\\text{H}_2\\text{O}$ produces three moles of glyoxal (ethanedial).",
    "The benzene ring contains three alternating conjugated double bonds in its Kekule representations that are cleaved during ozonolysis.",
    0,
    "Benzene reacts with 3 moles of ozone to form a triozonide $(\\text{C}_6\\text{H}_6\\text{O}_9)$, which upon reductive cleavage by zinc and water yields 3 moles of glyoxal $(\\text{OHC}-\\text{CHO})$: $\\text{C}_6\\text{H}_6 + 3\\text{O}_3 + 3\\text{Zn} + 3\\text{H}_2\\text{O} \\rightarrow 3\\text{CHO}-\\text{CHO} + 3\\text{ZnO} + 3\\text{H}_2\\text{O}$."
  ),
  ar(
    "Ozonolysis of o-xylene yields glyoxal, methylglyoxal, and dimethylglyoxal in a $3 : 2 : 1$ molar ratio.",
    "o-Xylene exists as an oscillating resonance hybrid of two equivalent Kekule canonical structures with alternating single and double bonds.",
    0,
    "In one Kekule form of o-xylene, a double bond lies between the two methyl carbons (yielding 1 dimethylglyoxal + 2 glyoxals). In the second form, a single bond lies between them (yielding 2 methylglyoxals + 1 glyoxal). Together they produce glyoxal, methylglyoxal, and dimethylglyoxal in a $3:2:1$ ratio, confirming Kekule's resonance hypothesis."
  ),
  ar(
    "Anti-dihydroxylation of an alkene to form a trans-1,2-diol is achieved by epoxidation with a peroxy acid followed by acid-catalyzed hydrolysis.",
    "Peroxy acids convert alkenes into three-membered cyclic epoxides, which undergo acid-catalyzed ring opening via backside nucleophilic attack of water.",
    0,
    "Epoxidation (e.g. with mCPBA) creates an oxirane ring. In aqueous acid, protonation of the epoxide is followed by an $\\text{S}_N2$-like backside attack of water, opening the ring with net anti-stereochemistry to yield a trans-diol."
  ),
  ar(
    "Osmium tetroxide ($\\text{OsO}_4$) oxidizes alkenes to vicinal cis-diols with syn-stereospecificity.",
    "Osmium tetroxide forms a cyclic osmate ester intermediate by coordinating simultaneously to both $sp^2$ carbons from the same face of the alkene.",
    0,
    "Like $\\text{KMnO}_4$, $\\text{OsO}_4$ undergoes concerted syn-addition across the $\\pi$-bond to form a cyclic osmate ester, which hydrolyzes cleanly to the 1,2-cis-diol without altering stereochemistry."
  ),
  ar(
    "Oxidative ozonolysis of 2-methylbut-2-ene with ozone followed by $\\text{H}_2\\text{O}_2$ yields acetone and ethanoic acid.",
    "Under oxidative workup conditions, aldehydes formed during ozonolysis are oxidized to the corresponding carboxylic acids, whereas ketones remain unchanged.",
    0,
    "Without zinc reducing agent, hydrogen peroxide oxidizes the intermediate acetaldehyde $(\\text{CH}_3\\text{CHO})$ to ethanoic acid $(\\text{CH}_3\\text{COOH})$, while acetone resists oxidation and remains intact."
  ),
  ar(
    "Reductive ozonolysis of buta-1,3-diene yields two moles of formaldehyde and one mole of glyoxal.",
    "Buta-1,3-diene contains two terminal double bonds that are cleaved into terminal formaldehyde fragments and an internal dicarbonyl fragment.",
    0,
    "$\\text{CH}_2=\\text{CH}-\\text{CH}=\\text{CH}_2$: Cleaving both double bonds produces two molecules of $\\text{HCHO}$ (from C1 and C4) and one molecule of glyoxal $(\\text{OHC}-\\text{CHO})$ from the central carbons (C2 and C3)."
  ),
  ar(
    "Ozonolysis is a reliable analytical method for determining the position of double bonds in unknown unsaturated organic compounds.",
    "Identification of the carbonyl cleavage fragments directly reveals the location and substitution pattern of the original carbon-carbon double bonds.",
    0,
    "By determining the molecular structures of the aldehydes and ketones formed upon ozonolysis, the carbon skeleton and double bond position of the parent alkene can be uniquely reconstructed."
  ),
  ar(
    "Allylic bromination of propene with N-bromosuccinimide (NBS) in the presence of light gives 3-bromoprop-1-ene (allyl bromide).",
    "NBS maintains a very low, steady concentration of molecular bromine that selectively promotes free-radical substitution at the allylic position rather than electrophilic addition to the double bond.",
    0,
    "NBS provides a trace concentration of $\\text{Br}_2$. High radical stability of the resonance-stabilized allyl radical $(\\text{CH}_2=\\text{CH}-\\text{C}^\\bullet\\text{H}_2 \\leftrightarrow ^\\bullet\\text{CH}_2-\\text{CH}=\\text{CH}_2)$ directs substitution exclusively to the allylic position, avoiding addition across the double bond."
  ),
  ar(
    "Selenium dioxide ($\\text{SeO}_2$) selectively oxidizes the allylic methyl group in propene to prop-2-enal (acrolein).",
    "$\\text{SeO}_2$ is a selective oxidizing agent that targets allylic $\\text{C}-\\text{H}$ bonds through an ene reaction followed by a [2,3]-sigmatropic shift.",
    0,
    "Selenium dioxide oxidizes active allylic methylene and methyl groups specifically to allylic alcohols or carbonyl compounds without cleaving the carbon-carbon double bond."
  ),
  ar(
    "Ozonolysis of 1-methylcyclohexene followed by $\\text{Zn}/\\text{H}_2\\text{O}$ yields 6-oxoheptanal.",
    "Cleavage of the endocyclic double bond opens the six-membered ring, converting the methyl-bearing carbon into a ketone and the unsubstituted carbon into an aldehyde.",
    0,
    "1-Methylcyclohexene has an unsymmetrical double bond. Ring cleavage gives a keto-aldehyde: $\\text{CH}_3-\\text{CO}-(\\text{CH}_2)_4-\\text{CHO}$ (6-oxoheptanal)."
  ),
  ar(
    "Ozonolysis of an unknown alkene 'X' gives only propan-2-one (acetone). Alkene 'X' must be 2,3-dimethylbut-2-ene.",
    "Symmetrical cleavage of tetramethylethylene yields two identical molecules of acetone.",
    0,
    "2,3-Dimethylbut-2-ene $((\\text{CH}_3)_2\\text{C}=\\text{C}(\\text{CH}_3)_2)$ has two identical $((\\text{CH}_3)_2\\text{C}=)$ halves. Ozonolysis cleaves the central double bond to produce 2 moles of acetone as the sole product."
  ),
  ar(
    "Addition of ozone to an alkene first produces an unstable molozonide (primary ozonide).",
    "The 1,3-dipolar cycloaddition of ozone to the double bond forms a five-membered ring containing three contiguous oxygen atoms (1,2,3-trioxolane).",
    0,
    "Ozone acts as a 1,3-dipole and adds to the alkene $\\pi$-bond to form a 1,2,3-trioxolane (molozonide), which rapidly rearranges to the more stable 1,2,4-trioxolane (ozonide)."
  ),
  ar(
    "The initial molozonide decomposes into a carbonyl compound and a zwitterionic carbonyl oxide (Criegee intermediate).",
    "The Criegee intermediate recombines with the carbonyl fragment in a reversed orientation to form the stable ozonide (1,2,4-trioxolane).",
    0,
    "In the Criegee mechanism of ozonolysis, retro-1,3-dipolar cycloaddition breaks the molozonide into a carbonyl and a dipolar carbonyl oxide $(;\\text{C}^+-\\text{O}-\\text{O}^-)$, which recombine into the 1,2,4-trioxolane ozonide."
  ),
  ar(
    "Alkenes undergo catalytic epoxidation with molecular oxygen in the presence of a silver catalyst at $250^\\circ\\text{C}$.",
    "Silver metal selectively catalyzes the transfer of an oxygen atom from $\\text{O}_2$ across the double bond of ethene to yield oxirane (ethylene oxide).",
    0,
    "$2\\text{CH}_2=\\text{CH}_2 + \\text{O}_2 \\xrightarrow{\\text{Ag}, 250^\\circ\\text{C}} 2\\text{C}_2\\text{H}_4\\text{O}$ (ethylene oxide). This is the major industrial process for ethylene oxide."
  ),
  ar(
    "Oxidation of ethene with oxygen in the presence of $\\text{PdCl}_2$ and $\\text{CuCl}_2$ catalyst produces ethanal (Wacker process).",
    "Palladium(II) coordinates to ethene and activates it towards nucleophilic attack by water, forming acetaldehyde while $\\text{Pd}(\\text{II})$ is reduced to $\\text{Pd}(0)$, which is re-oxidized by $\\text{CuCl}_2$ and air.",
    0,
    "The Wacker oxidation: $\\text{CH}_2=\\text{CH}_2 + \\frac{1}{2}\\text{O}_2 \\xrightarrow{\\text{PdCl}_2 / \\text{CuCl}_2} \\text{CH}_3\\text{CHO}$. Catalytic coupling between $\\text{Pd}$ and $\\text{Cu}$ makes this an efficient homogeneous oxidation process."
  ),
  ar(
    "Baeyer's reagent oxidizes trans-but-2-ene to racemic ($\\pm$)-butane-2,3-diol.",
    "Syn-dihydroxylation of a symmetrical trans-alkene yields a pair of non-superimposable mirror-image enantiomers.",
    0,
    "Syn-addition of two hydroxyl groups to a trans-alkene generates a racemic mixture of $(2R,3R)$ and $(2S,3S)$-butane-2,3-diol. (Trans + Syn $\\rightarrow$ Racemic)."
  ),
  ar(
    "Baeyer's reagent oxidizes cis-but-2-ene to meso-butane-2,3-diol.",
    "Syn-dihydroxylation of a symmetrical cis-alkene yields an optically inactive stereoisomer with an internal plane of symmetry.",
    0,
    "Syn-addition of two $-\\text{OH}$ groups to cis-but-2-ene delivers both oxygens to the same face, forming meso-butane-2,3-diol, which possesses an internal plane of symmetry."
  ),
  ar(
    "Dimethyl sulfide ($\\text{Me}_2\\text{S}$) can be used instead of zinc dust in the reductive workup of ozonides.",
    "Dimethyl sulfide reduces the ozonide cleanly to carbonyl compounds while being oxidized to dimethyl sulfoxide ($\\text{DMSO}$).",
    0,
    "$(\\text{CH}_3)_2\\text{S} + \\text{Ozonide} \\rightarrow \\text{Carbonyl compounds} + (\\text{CH}_3)_2\\text{S}=\\text{O}$ (DMSO). DMSO and volatile carbonyls are easily separated."
  ),
  ar(
    "Ozonolysis of an alkyne yields dicarbonyl compounds rather than cleaving the carbon-carbon chain.",
    "Ozone is a weak oxidizing agent that cannot cleave the strong carbon-carbon triple bond of an alkyne.",
    3,
    "Assertion is false: Ozonolysis of an alkyne cleaves all three bonds of the triple bond, yielding two carboxylic acids upon hydrolysis. Reason is false: ozone readily cleaves triple bonds."
  ),

  // 8 MCQ Questions
  mcq(
    "Which alkene on reductive ozonolysis ($\\text{O}_3 / \\text{Zn}-\\text{H}_2\\text{O}$) gives a mixture of propan-2-one (acetone) and methanal (formaldehyde)?",
    [
      "2-Methylpropene (isobutylene)",
      "But-2-ene",
      "But-1-ene",
      "2-Methylbut-2-ene"
    ],
    0,
    "2-Methylpropene $((\\text{CH}_3)_2\\text{C}=\\text{CH}_2)$ cleaves at the double bond to give acetone $((\\text{CH}_3)_2\\text{C}=\\text{O})$ and formaldehyde $(\\text{HCHO})$."
  ),
  mcq(
    "An alkene on ozonolysis gives only ethanal. The alkene is:",
    [
      "But-2-ene",
      "But-1-ene",
      "Ethene",
      "Hex-3-ene"
    ],
    0,
    "But-2-ene $(\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3)$ is a symmetrical alkene that cleaves upon ozonolysis to produce 2 moles of ethanal $(\\text{CH}_3\\text{CHO})$ as the sole product."
  ),
  mcq(
    "When cyclohexene is subjected to reductive ozonolysis with $\\text{O}_3$ and $\\text{Zn}/\\text{H}_2\\text{O}$, the product obtained is:",
    [
      "Hexane-1,6-dial (adipic dialdehyde)",
      "Hexanedioic acid (adipic acid)",
      "Cyclohexanone",
      "Cyclohexane-1,2-diol"
    ],
    0,
    "Ozonolysis cleaves the internal double bond of cyclohexene to open the ring, yielding hexane-1,6-dial $(\\text{OHC}-(\\text{CH}_2)_4-\\text{CHO})$."
  ),
  mcq(
    "The reagent used for the syn-dihydroxylation of alkenes to form vicinal cis-diols is:",
    [
      "Cold, dilute, alkaline $\\text{KMnO}_4$ (Baeyer's reagent)",
      "$\\text{mCPBA}$ followed by aqueous $\\text{H}_3\\text{O}^+$",
      "Hot concentrated $\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4$",
      "$\\text{Br}_2 / \\text{CCl}_4$"
    ],
    0,
    "Baeyer's reagent (cold dilute alkaline $\\text{KMnO}_4$) carries out stereospecific syn-dihydroxylation across the double bond to form cis-1,2-diols."
  ),
  mcq(
    "Which of the following alkenes upon vigorous oxidation with hot acidic $\\text{KMnO}_4$ yields only carbon dioxide, water, and ethanoic acid?",
    [
      "Propene",
      "But-2-ene",
      "Ethene",
      "2-Methylpropene"
    ],
    0,
    "Hot acidic $\\text{KMnO}_4$ cleaves propene $(\\text{CH}_3\\text{CH}=\\text{CH}_2)$: the $(=\\text{CH}_2)$ group oxidizes to $\\text{CO}_2 + \\text{H}_2\\text{O}$, and the $(\\text{CH}_3\\text{CH}=)$ group oxidizes to ethanoic acid $(\\text{CH}_3\\text{COOH})$."
  ),
  mcq(
    "Ozonolysis of o-xylene produces glyoxal, methylglyoxal, and dimethylglyoxal in what molar ratio?",
    [
      "$3 : 2 : 1$",
      "$1 : 1 : 1$",
      "$2 : 2 : 1$",
      "$1 : 2 : 3$"
    ],
    0,
    "Due to the resonance between the two Kekule structures of o-xylene, ozonolysis produces glyoxal, methylglyoxal, and dimethylglyoxal in a precise $3:2:1$ molar ratio."
  ),
  mcq(
    "In the Wacker process, ethene is converted to ethanal using which catalytic system?",
    [
      "$\\text{PdCl}_2 / \\text{CuCl}_2$ in aqueous solution",
      "$\\text{Ni} / \\text{Al}_2\\text{O}_3$ at $573\\text{ K}$",
      "$\\text{V}_2\\text{O}_5$ at $773\\text{ K}$",
      "$\\text{Fe}_2\\text{O}_3 / \\text{Cr}_2\\text{O}_3$"
    ],
    0,
    "The Wacker process oxidizes ethene to acetaldehyde using a catalytic aqueous solution of palladium(II) chloride $(\\text{PdCl}_2)$ and copper(II) chloride $(\\text{CuCl}_2)$ with molecular oxygen."
  ),
  mcq(
    "Reaction of propene with N-bromosuccinimide (NBS) in the presence of light produces:",
    [
      "3-Bromoprop-1-ene (allyl bromide)",
      "1,2-Dibromopropane",
      "2-Bromopropane",
      "1-Bromopropane"
    ],
    0,
    "NBS selectively brominates the allylic position via free radicals without addition across the double bond, yielding 3-bromoprop-1-ene (allyl bromide)."
  ),

  // 13 NUM Questions
  num(
    "How many moles of glyoxal $(\\text{OHC}-\\text{CHO})$ are formed by the complete ozonolysis of 1 mole of benzene?",
    3,
    "Benzene $(\\text{C}_6\\text{H}_6)$ has three double bonds. Ozonolysis consumes 3 moles of ozone and produces exactly 3 moles of glyoxal."
  ),
  num(
    "How many oxygen atoms are present in one molecule of an ozonide (1,2,4-trioxolane intermediate)?",
    3,
    "The stable ozonide formed in the Criegee mechanism is a five-membered ring containing 2 carbon atoms and 3 oxygen atoms (1,2,4-trioxolane)."
  ),
  num(
    "How many carbonyl groups are present in one molecule of hexane-1,6-dial, the product of cyclohexene ozonolysis?",
    2,
    "Hexane-1,6-dial has two terminal aldehyde groups $(\\text{OHC}-(\\text{CH}_2)_4-\\text{CHO})$, giving exactly 2 carbonyl groups."
  ),
  num(
    "How many moles of ozone $(\\text{O}_3)$ are required to ozonize completely 1 mole of buta-1,3-diene?",
    2,
    "Buta-1,3-diene contains two carbon-carbon double bonds, requiring exactly 2 moles of ozone for complete ozonolysis."
  ),
  num(
    "How many moles of zinc are consumed in the reductive cleavage of the diozonide obtained from 1 mole of buta-1,3-diene?",
    2,
    "Each ozonide unit requires 1 mole of zinc for reductive workup: the diozonide consumes exactly 2 moles of zinc."
  ),
  num(
    "What is the oxidation state of manganese in the manganese dioxide $(\\text{MnO}_2)$ precipitate formed in Baeyer's test?",
    4,
    "In $\\text{MnO}_2$, each oxygen is $-2$ (total $-4$). Therefore, the oxidation state of manganese is $+4$."
  ),
  num(
    "What is the change in the oxidation state of manganese when $\\text{KMnO}_4$ is reduced to $\\text{MnO}_2$ in Baeyer's test?",
    3,
    "Manganese starts in $\\text{KMnO}_4$ as $+7$ and is reduced to $+4$ in $\\text{MnO}_2$. The change in oxidation state is $7 - 4 = 3$."
  ),
  num(
    "How many total stereoisomers are formed when trans-but-2-ene is treated with Baeyer's reagent?",
    2,
    "Syn-dihydroxylation of trans-but-2-ene yields a racemic pair of enantiomers ($(2R,3R)$ and $(2S,3S)$-butane-2,3-diol), giving exactly 2 stereoisomers."
  ),
  num(
    "How many stereoisomers are formed when cis-but-2-ene is treated with Baeyer's reagent?",
    1,
    "Syn-dihydroxylation of cis-but-2-ene yields meso-butane-2,3-diol, which is an optically inactive single stereoisomer (meso form)."
  ),
  num(
    "How many moles of acetone are produced when 1 mole of 2,3-dimethylbut-2-ene undergoes complete reductive ozonolysis?",
    2,
    "2,3-Dimethylbut-2-ene is $((\\text{CH}_3)_2\\text{C}=\\text{C}(\\text{CH}_3)_2)$. Cleavage of the central double bond yields exactly 2 moles of acetone."
  ),
  num(
    "How many total carbon atoms are present in one molecule of 6-oxoheptanal, the product of 1-methylcyclohexene ozonolysis?",
    7,
    "1-Methylcyclohexene has 7 carbon atoms (6 in the ring + 1 methyl). Ring opening retains all carbon atoms, giving 6-oxoheptanal with 7 carbons."
  ),
  num(
    "How many methyl groups are present in one molecule of dimethylglyoxal (butane-2,3-dione)?",
    2,
    "Dimethylglyoxal has the structure $\\text{CH}_3-\\text{CO}-\\text{CO}-\\text{CH}_3$, which contains exactly 2 methyl groups."
  ),
  num(
    "How many moles of $\\text{CO}_2$ gas are produced when 1 mole of 2-methylpropene is oxidized vigorously with hot acidified $\\text{KMnO}_4$?",
    1,
    "The terminal $(=\\text{CH}_2)$ group of 2-methylpropene $((\\text{CH}_3)_2\\text{C}=\\text{CH}_2)$ is fully oxidized to 1 mole of $\\text{CO}_2$ (and 1 mole of $\\text{H}_2\\text{O}$), while the other fragment forms acetone."
  )
];

console.log(`Part 8 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part8.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part8.js");
