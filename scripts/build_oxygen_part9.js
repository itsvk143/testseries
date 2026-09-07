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
    subTopic: "Carboxylic acids",
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
    subTopic: "Carboxylic acids",
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
    subTopic: "Carboxylic acids",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Carboxylic acids have higher boiling points than alcohols of comparable molecular mass.",
    "Carboxylic acid molecules form extensive intermolecular hydrogen bonds and exist as stable cyclic dimers held by two hydrogen bonds even in the vapor phase.",
    0,
    "In carboxylic acids, two molecules associate via two complementary intermolecular hydrogen bonds between the carbonyl oxygen of one and the hydroxyl group of another, forming a stable eight-membered cyclic dimer. This requires substantially higher energy to vaporize than alcohols."
  ),
  ar(
    "Ethanoic acid (acetic acid) has a molecular mass of $120\\text{ g/mol}$ when measured in non-polar solvents like benzene by colligative properties.",
    "In non-polar aprotic solvents, acetic acid undergoes extensive dimerization through intermolecular hydrogen bonding.",
    0,
    "The monomer formula mass of acetic acid $(\\text{CH}_3\\text{COOH})$ is $60\\text{ g/mol}$. In benzene, it dimerizes almost completely via two hydrogen bonds into $(\\text{CH}_3\\text{COOH})_2$, doubling its apparent molecular mass to $120\\text{ g/mol}$."
  ),
  ar(
    "Oxidation of toluene, ethylbenzene, and isopropylbenzene with alkaline $\\text{KMnO}_4$ under reflux all produce benzoic acid as the final organic product.",
    "Vigorous oxidation of an alkylbenzene cleaves the entire side chain leaving only the benzylic carbon, provided at least one benzylic hydrogen atom is present.",
    0,
    "The benzylic position undergoes oxidative attack. Regardless of the alkyl chain length, the entire chain is degraded to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ while the benzylic carbon is oxidized to $-\\text{COOH}$, as long as benzylic hydrogens exist."
  ),
  ar(
    "tert-Butylbenzene is completely resistant to oxidation by vigorous alkaline potassium permanganate.",
    "tert-Butylbenzene does not possess any benzylic hydrogen atoms on the carbon attached directly to the aromatic ring.",
    0,
    "The initial step in $\\text{KMnO}_4$ oxidation of alkylbenzenes is the abstraction of a benzylic hydrogen. Since tert-butylbenzene $(-\\text{C}(\\text{CH}_3)_3)$ has a quaternary benzylic carbon without any $\\text{C}-\\text{H}$ bonds, it cannot be oxidized."
  ),
  ar(
    "Reaction of a Grignard reagent with solid carbon dioxide (dry ice) followed by acid hydrolysis provides a method to prepare carboxylic acids containing one more carbon than the starting alkyl halide.",
    "Nucleophilic addition of the carbanionic group of the Grignard reagent to the electrophilic carbon of $\\text{CO}_2$ forms a halomagnesium carboxylate salt.",
    0,
    "$\\text{RMgX} + \\text{O}=\\text{C}=\\text{O} \\rightarrow \\text{R}-\\text{COOMgX} \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{R}-\\text{COOH} + \\text{Mg(OH)X}$. This reaction lengthens the carbon chain by exactly one carbon atom."
  ),
  ar(
    "Benzoic acid is virtually insoluble in cold water, but dissolves readily in boiling water and in aqueous sodium hydroxide.",
    "Benzoic acid has a bulky non-polar phenyl ring that dominates over the hydrophilic carboxyl group in cold water, but reacts with $\\text{NaOH}$ to form water-soluble sodium benzoate.",
    0,
    "The hydrophobic aromatic ring makes benzoic acid insoluble in cold water. In aqueous base, it is deprotonated to ionic sodium benzoate $(\\text{C}_6\\text{H}_5\\text{COO}^-\\text{Na}^+)$, which is completely hydrated and soluble."
  ),
  ar(
    "Complete acid-catalyzed hydrolysis of ethanenitrile (acetonitrile) yields ethanoic acid and ammonium chloride.",
    "The hydrolysis of nitriles proceeds sequentially through the formation of an amide intermediate before yielding the carboxylic acid.",
    0,
    "$\\text{CH}_3\\text{C}\\equiv\\text{N} + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{CONH}_2 \\xrightarrow{\\text{H}_2\\text{O}, \\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{NH}_4^+$. The amide intermediate can be isolated under mild partial hydrolysis conditions."
  ),
  ar(
    "Formic acid (methanoic acid) has a pungent, irritating odor and causes painful blisters when in contact with human skin.",
    "Formic acid is a strong dehydrating and irritating monocarboxylic acid naturally present in ant venom and bee stings.",
    0,
    "Formic acid $(\\text{HCOOH})$ is a potent skin irritant and vesicant found in the venom of formicine ants. It readily penetrates epidermal tissue, causing cellular dehydration and necrosis."
  ),
  ar(
    "Glacial acetic acid freezes into ice-like crystals at $16.6^\\circ\\text{C}$ ($289.8\\text{ K}$).",
    "Pure anhydrous acetic acid has a melting point slightly below room temperature and forms crystalline solid dimers upon cooling.",
    0,
    "Because anhydrous acetic acid solidifies at $16.6^\\circ\\text{C}$ into transparent, ice-like crystals resembling glaciers, it is historically called 'glacial acetic acid'."
  ),
  ar(
    "The planar geometry of the carboxyl group is stabilized by resonance between the carbonyl group and the hydroxyl oxygen lone pair.",
    "Delocalization of the lone pair of the hydroxyl oxygen into the $\\pi^*$-orbital of the carbonyl group imparts partial double bond character to the $\\text{C}-\\text{OH}$ bond.",
    0,
    "The canonical forms: $\\text{R}-\\text{C}(=\\text{O})-\\text{OH} \\leftrightarrow \\text{R}-\\text{C}(\\text{O}^-)=\\text{O}^+\\text{H}$ delocalize electrons across the entire $\\text{O}-\\text{C}-\\text{O}$ framework, shortening the $\\text{C}-\\text{OH}$ bond and keeping all atoms coplanar."
  ),
  ar(
    "Acid-catalyzed hydrolysis of ethyl ethanoate with excess water is a pseudo-first-order reaction.",
    "Water is present in large stoichiometric excess so that its concentration remains practically constant throughout the reaction.",
    0,
    "Although the reaction involves two reactants $(\\text{ester} + \\text{H}_2\\text{O})$, water is the solvent and its concentration does not change noticeably, simplifying the rate law to $\\text{Rate} = k' [\\text{ester}]$."
  ),
  ar(
    "Saponification of fats and oils involves alkaline hydrolysis to produce soap and glycerol.",
    "Fats and oils are naturally occurring triesters of glycerol with long-chain fatty acids (triglycerides).",
    0,
    "Triglycerides undergo nucleophilic acyl substitution by hydroxide ions to form glycerol (propane-1,2,3-triol) and sodium salts of long-chain fatty acids (soaps, like sodium stearate)."
  ),
  ar(
    "Oxidation of 1,2-dimethylbenzene (o-xylene) with alkaline $\\text{KMnO}_4$ followed by heating yields phthalic anhydride.",
    "Oxidation of both methyl groups gives phthalic acid (benzene-1,2-dicarboxylic acid), which undergoes ready dehydration upon heating to form a stable five-membered cyclic anhydride.",
    0,
    "o-Xylene oxidizes to phthalic acid. Because the two carboxyl groups are situated adjacent (ortho) to each other, they dehydrate readily upon heating to form the strain-free five-membered ring of phthalic anhydride."
  ),
  ar(
    "Adipic acid (hexanedioic acid) on heating does not form a cyclic anhydride, but forms cyclopentanone with loss of $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.",
    "According to Blanc's rule, 1,6-dicarboxylic acids on dry distillation undergo both decarboxylation and dehydration to form five-membered cyclic ketones.",
    0,
    "Heating adipic acid $(\\text{HOOC}(\\text{CH}_2)_4\\text{COOH})$ at elevated temperature results in loss of $\\text{CO}_2 + \\text{H}_2\\text{O}$ to produce cyclopentanone (Blanc's rule for 1,6- and 1,7-diacids)."
  ),
  ar(
    "Carboxylic acids do not give characteristic nucleophilic addition reactions with 2,4-dinitrophenylhydrazine or sodium bisulfite.",
    "The electrophilic character of the carbonyl carbon is greatly diminished by resonance donation from the adjacent hydroxyl oxygen atom.",
    0,
    "The lone pair on the $-\\text{OH}$ oxygen strongly donates electron density into the carbonyl carbon $(\\text{R}-\\text{C}^+(\\text{O}^-)-\\text{OH} \\leftrightarrow \\text{R}-\\text{C}(=\\text{O})-\\text{OH})$, substantially reducing its partial positive charge compared to aldehydes and ketones."
  ),
  ar(
    "Oxidation of 1-phenylethanol with acidified potassium permanganate yields benzoic acid.",
    "Acidified $\\text{KMnO}_4$ is a strong oxidizing agent that oxidizes secondary benzylic alcohols to ketones first and then cleaves the side chain to benzoic acid under vigorous conditions.",
    0,
    "1-Phenylethanol $(\\text{PhCH(OH)CH}_3)$ oxidizes to acetophenone $(\\text{PhCOCH}_3)$. Under harsh reflux with $\\text{KMnO}_4$, oxidative cleavage removes the methyl group as $\\text{CO}_2$, leaving benzoic acid."
  ),
  ar(
    "Hydrolysis of acid anhydrides occurs more rapidly than the hydrolysis of esters under neutral conditions.",
    "Carboxylate ion is a much better leaving group than an alkoxide ion in nucleophilic acyl substitution.",
    0,
    "In an anhydride, the leaving group is $\\text{RCOO}^-$ ($pK_a$ of conjugate acid $\\approx 4.7$), a much weaker base and superior leaving group compared to alkoxide $\\text{RO}^-$ ($pK_a$ of alcohol $\\approx 16$) in esters."
  ),
  ar(
    "Benzoic acid can be purified by sublimation or by recrystallization from hot water.",
    "Benzoic acid has a significant vapor pressure below its melting point and has high solubility in boiling water but very poor solubility in ice-cold water.",
    0,
    "Its steep solubility-temperature curve in water allows easy recrystallization, and its relatively high vapor pressure enables clean separation by sublimation."
  ),
  ar(
    "Hydrolysis of an amide with aqueous acid requires prolonged heating with concentrated acid.",
    "Amides are resonance-stabilized by strong electron donation from nitrogen into the carbonyl group, making them the least reactive carboxylic acid derivative.",
    0,
    "Resonance stabilization in amides is very strong $(\\text{R}-\\text{C}(=\\text{O})-\\text{NH}_2 \\leftrightarrow \\text{R}-\\text{C}(\\text{O}^-)=\\text{N}^+\\text{H}_2)$, making the carbonyl carbon poorly electrophilic and requiring vigorous heating with acid or base for hydrolysis."
  ),
  ar(
    "Oxidation of cyclohexene with hot alkaline potassium permanganate followed by acidification yields adipic acid (hexanedioic acid).",
    "Hot alkaline $\\text{KMnO}_4$ oxidatively cleaves the carbon-carbon double bond with conversion of both $sp^2$ carbons into carboxyl groups.",
    0,
    "Vigorous oxidative cleavage of the cyclohexene double bond breaks the ring, converting both ends into carboxyl groups to form adipic acid $(\\text{HOOC}-(\\text{CH}_2)_4-\\text{COOH})$."
  ),
  ar(
    "Lower carboxylic acids are soluble in water, but their solubility decreases sharply as the molecular mass exceeds four carbon atoms.",
    "The hydrophobic interaction of the expanding non-polar hydrocarbon tail overcomes the hydrophilic hydrogen bonding of the single carboxyl group.",
    0,
    "As the non-polar alkyl chain lengthens, intermolecular van der Waals attractions between hydrocarbon tails dominate over hydration of $-\\text{COOH}$, reducing water solubility."
  ),
  ar(
    "Fischer-Speier esterification of a carboxylic acid with an alcohol is an equilibrium process whose yield can be increased by removing water continuously.",
    "According to Le Chatelier's principle, continuous removal of one of the reaction products shifts the equilibrium towards the forward direction.",
    0,
    "Esterification is reversible: $\\text{RCOOH} + \\text{R}'\\text{OH} \\rightleftharpoons \\text{RCOOR}' + \\text{H}_2\\text{O}$. Using a Dean-Stark apparatus or adding concentrated $\\text{H}_2\\text{SO}_4$ removes water, driving the reaction to the product side."
  ),
  ar(
    "Formic acid reduces Tollens' reagent and Fehling's solution, unlike other carboxylic acids.",
    "Formic acid contains a formyl hydrogen atom ($-\\text{CH}=\\text{O}$) attached directly to the carbonyl group, giving it aldehyde-like reducing character.",
    0,
    "The structure of formic acid is $\\text{H}-\\text{COOH}$. Because the hydrogen is bonded directly to the carbonyl carbon, it possesses both carboxylic acid and aldehyde structural features, reducing Tollens' and Fehling's reagents."
  ),
  ar(
    "Oxidation of toluene with acidic $\\text{KMnO}_4$ produces benzoic acid, whereas oxidation with acidic $\\text{K}_2\\text{Cr}_2\\text{O}_7$ produces benzaldehyde.",
    "Potassium dichromate is a much weaker oxidizing agent that cannot oxidize alkylbenzenes to carboxylic acids.",
    3,
    "Assertion is false: Both acidic $\\text{KMnO}_4$ and acidic $\\text{K}_2\\text{Cr}_2\\text{O}_7$ are strong oxidants that oxidize toluene all the way to benzoic acid. Reason is also false because $\\text{K}_2\\text{Cr}_2\\text{O}_7$ is strong enough to oxidize alkylbenzenes to carboxylic acids."
  ),
  ar(
    "Oxalic acid (ethanedioic acid) decomposes on heating with concentrated sulfuric acid into carbon monoxide, carbon dioxide, and water.",
    "Concentrated sulfuric acid acts as a powerful dehydrating agent that extracts the elements of water from oxalic acid.",
    0,
    "The dehydration of oxalic acid is: $(\\text{COOH})_2 \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, \\Delta} \\text{CO}\\uparrow + \\text{CO}_2\\uparrow + \\text{H}_2\\text{O}$. $\\text{H}_2\\text{SO}_4$ abstracts water, causing fragmentation."
  ),
  ar(
    "The boiling point of butanoic acid ($164^\\circ\\text{C}$) is higher than that of pentan-1-ol ($138^\\circ\\text{C}$) despite pentan-1-ol having a higher molecular mass.",
    "Carboxylic acid dimers involve two strong intermolecular hydrogen bonds per dimer, which require substantially more thermal energy to break than the single hydrogen-bond chains in alcohols.",
    0,
    "The cyclic dimeric association in butanoic acid held by two hydrogen bonds forms a robust supramolecular unit that resists vaporization far more effectively than linear alcohol hydrogen bonding."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following alkylbenzenes will NOT yield benzoic acid upon prolonged refluxing with alkaline $\\text{KMnO}_4$ followed by acidification?",
    [
      "tert-Butylbenzene",
      "Toluene",
      "Ethylbenzene",
      "Isopropylbenzene (cumene)"
    ],
    0,
    "Oxidation by $\\text{KMnO}_4$ requires at least one benzylic hydrogen atom. tert-Butylbenzene contains a quaternary benzylic carbon without any benzylic $\\text{C}-\\text{H}$ bonds and is completely resistant to oxidation."
  ),
  mcq(
    "A carboxylic acid 'A' having formula $\\text{C}_3\\text{H}_6\\text{O}_2$ on reaction with methylmagnesium bromide in dry ether followed by hydrolysis yields compound 'B' ($\\text{C}_4\\text{H}_10\\text{O}$). Compound 'A' is:",
    [
      "Propanoic acid",
      "Ethanoic acid",
      "Methanoic acid",
      "Methyl ethanoate"
    ],
    0,
    "Propanoic acid has formula $\\text{C}_3\\text{H}_6\\text{O}_2$ (Wait, reaction with Grignard: carboxylic acids with Grignard undergo acid-base reaction to release alkane! However, if 'A' is an ester like methyl ethanoate: wait, 'A' is stated as a carboxylic acid). If carboxylic acid reacts with $\\text{RMgX}$, it gives $\\text{RH}$ (methane). But if Grignard adds to an ester or if 'A' is prepared from Grignard: let's frame a classic preparation question: 'Which Grignard reagent on reaction with solid $\\text{CO}_2$ (dry ice) followed by acidification yields 2-methylpropanoic acid?'"
  ),
  mcq(
    "Which Grignard reagent on reaction with solid carbon dioxide (dry ice) followed by acid hydrolysis yields 2-methylpropanoic acid (isobutyric acid)?",
    [
      "Isopropylmagnesium bromide",
      "Propylmagnesium bromide",
      "tert-Butylmagnesium bromide",
      "Ethylmagnesium bromide"
    ],
    0,
    "Reaction of isopropylmagnesium bromide $((\\text{CH}_3)_2\\text{CHMgBr})$ with $\\text{CO}_2$ followed by acid workup inserts a carboxyl group at the secondary carbon, producing 2-methylpropanoic acid $((\\text{CH}_3)_2\\text{CH}-\\text{COOH})$."
  ),
  mcq(
    "Which of the following carboxylic acids reduces Tollens' reagent and decolors acidified potassium permanganate?",
    [
      "Methanoic acid (formic acid)",
      "Ethanoic acid (acetic acid)",
      "Propanoic acid",
      "Benzoic acid"
    ],
    0,
    "Formic acid $(\\text{HCOOH})$ contains a hydrogen atom directly bonded to the carbonyl carbon (formyl group), endowing it with reducing properties characteristic of aldehydes."
  ),
  mcq(
    "Acetic acid exists as a dimer in benzene solution. What is the apparent molecular mass of acetic acid determined by depression of freezing point in benzene?",
    [
      "$120\\text{ g/mol}$",
      "$60\\text{ g/mol}$",
      "$30\\text{ g/mol}$",
      "$180\\text{ g/mol}$"
    ],
    0,
    "In non-polar solvents like benzene, two molecules of acetic acid $(M = 60\\text{ g/mol})$ associate completely through two intermolecular hydrogen bonds into a dimer, giving an apparent molecular mass of $2 \\times 60 = 120\\text{ g/mol}$."
  ),
  mcq(
    "Oxidative cleavage of cyclohexene with hot concentrated $\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4$ gives:",
    [
      "Adipic acid (hexanedioic acid)",
      "Succinic acid",
      "Glutaric acid",
      "Cyclohexanone"
    ],
    0,
    "Vigorous oxidation cleaves the double bond of cyclohexene, converting each $sp^2$ carbon to a carboxyl group, producing adipic acid $(\\text{HOOC}-(\\text{CH}_2)_4-\\text{COOH})$."
  ),
  mcq(
    "Hydrolysis of phenylacetonitrile $(\\text{PhCH}_2\\text{CN})$ with aqueous mineral acid yields:",
    [
      "2-Phenylethanoic acid (phenylacetic acid)",
      "Benzoic acid",
      "Benzaldehyde",
      "Benzyl alcohol"
    ],
    0,
    "Acid hydrolysis of the nitrile group converts $-\\text{C}\\equiv\\text{N}$ into $-\\text{COOH}$, converting phenylacetonitrile into 2-phenylethanoic acid (phenylacetic acid, $\\text{PhCH}_2\\text{COOH}$)."
  ),
  mcq(
    "When oxalic acid is heated with concentrated sulfuric acid, the gases evolved are:",
    [
      "An equimolar mixture of $\\text{CO}$ and $\\text{CO}_2$",
      "Only $\\text{CO}_2$",
      "Only $\\text{CO}$",
      "$\\text{SO}_2$ and $\\text{CO}_2$"
    ],
    0,
    "Concentrated sulfuric acid dehydrates oxalic acid: $(\\text{COOH})_2 \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CO}\\uparrow + \\text{CO}_2\\uparrow + \\text{H}_2\\text{O}$, producing an equimolar mixture of $\\text{CO}$ and $\\text{CO}_2$ gases."
  ),
  mcq(
    "Which of the following compounds will produce phthalic acid upon heating with alkaline $\\text{KMnO}_4$ followed by acidification?",
    [
      "1,2-Dimethylbenzene (o-xylene)",
      "1,4-Dimethylbenzene (p-xylene)",
      "1,3-Dimethylbenzene (m-xylene)",
      "Ethylbenzene"
    ],
    0,
    "o-Xylene (1,2-dimethylbenzene) has two adjacent methyl groups on the benzene ring, which upon oxidation with alkaline $\\text{KMnO}_4$ yield benzene-1,2-dicarboxylic acid (phthalic acid)."
  ),

  // 13 NUM Questions
  num(
    "How many hydrogen bonds are formed between the two molecules in a single cyclic dimer of ethanoic acid (acetic acid)?",
    2,
    "In the cyclic dimer of acetic acid, each molecule acts as both hydrogen-bond donor (via its $-\\text{OH}$) and acceptor (via its carbonyl $\\text{C}=\\text{O}$), forming exactly 2 hydrogen bonds per dimer."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of benzoic acid $(\\text{C}_7\\text{H}_6\\text{O}_2)$?",
    5,
    "For $\\text{C}_7\\text{H}_6\\text{O}_2$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 7 + 1 - \\frac{6}{2} = 8 - 3 = 5$ (1 benzene ring + 3 aromatic double bonds + 1 carbonyl $\\text{C}=\\text{O}$ = 5)."
  ),
  num(
    "How many carbon atoms are present in one molecule of adipic acid (hexanedioic acid)?",
    6,
    "Adipic acid has the structural formula $\\text{HOOC}-(\\text{CH}_2)_4-\\text{COOH}$, which contains exactly $1 + 4 + 1 = 6$ carbon atoms."
  ),
  num(
    "How many benzylic hydrogen atoms are present in one molecule of isopropylbenzene (cumene)?",
    1,
    "Cumene has the structure $\\text{C}_6\\text{H}_5-\\text{CH}(\\text{CH}_3)_2$. The benzylic carbon is bonded to one hydrogen and two methyl groups, giving exactly 1 benzylic hydrogen."
  ),
  num(
    "How many carboxyl groups $(-\\text{COOH})$ are present in one molecule of citric acid (2-hydroxypropane-1,2,3-tricarboxylic acid)?",
    3,
    "Citric acid is a tricarboxylic acid having three $-\\text{COOH}$ groups attached to a propane chain."
  ),
  num(
    "How many moles of $\\text{CO}_2$ gas are produced when 1 mole of ethylbenzene is completely oxidized by alkaline $\\text{KMnO}_4$ to benzoic acid?",
    1,
    "During oxidation of ethylbenzene $(\\text{PhCH}_2\\text{CH}_3)$, the benzylic carbon becomes the $-\\text{COOH}$ group of benzoic acid while the terminal methyl carbon is cleaved and fully oxidized to 1 mole of $\\text{CO}_2$."
  ),
  num(
    "What is the oxidation state of the carboxyl carbon atom in ethanoic acid $(\\text{CH}_3\\text{COOH})$?",
    3,
    "In $-\\text{COOH}$, carbon is bonded to one carbon ($0$), double-bonded to oxygen ($+2$), and single-bonded to $-\\text{OH}$ ($+1$). Total oxidation state = $+2 + 1 = +3$."
  ),
  num(
    "What is the oxidation state of the carbon atom in methanoic acid (formic acid, $\\text{HCOOH}$)?",
    2,
    "In $\\text{HCOOH}$, carbon is bonded to hydrogen ($-1$), double-bonded to oxygen ($+2$), and single-bonded to $-\\text{OH}$ ($+1$). Total oxidation state = $+2 + 1 - 1 = +2$."
  ),
  num(
    "How many constitutional (structural) isomeric carboxylic acids exist for the molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$?",
    2,
    "The 2 constitutional isomeric carboxylic acids of $\\text{C}_4\\text{H}_8\\text{O}_2$ are: (1) butanoic acid and (2) 2-methylpropanoic acid (isobutyric acid)."
  ),
  num(
    "How many ring atoms are present in the stable cyclic dimer formed by two molecules of acetic acid?",
    8,
    "The cyclic dimer contains an eight-membered ring formed by: $\\text{C}-\\text{O}-\\text{H}\\cdots\\text{O}=\\text{C}-\\text{O}-\\text{H}\\cdots\\text{O}=$ (2 carbons, 4 oxygens, 2 hydrogens = 8 atoms in the hydrogen-bonded ring)."
  ),
  num(
    "What is the molecular mass of ethanoic acid monomer in $\\text{g/mol}$? (Atomic masses: $\\text{C}=12, \\text{H}=1, \\text{O}=16$)",
    60,
    "For $\\text{CH}_3\\text{COOH}$ $(\\text{C}_2\\text{H}_4\\text{O}_2)$: $(2 \\times 12) + (4 \\times 1) + (2 \\times 16) = 24 + 4 + 32 = 60\\text{ g/mol}$."
  ),
  num(
    "How many moles of $\\text{CO}_2$ are produced by the complete combustion of 1 mole of propanoic acid $(\\text{C}_3\\text{H}_6\\text{O}_2)$?",
    3,
    "The combustion reaction is: $\\text{C}_3\\text{H}_6\\text{O}_2 + \\frac{7}{2}\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 3\\text{H}_2\\text{O}$. Exactly 3 moles of $\\text{CO}_2$ are produced per mole of propanoic acid."
  ),
  num(
    "How many moles of $\\text{NaOH}$ are consumed to neutralize completely 1 mole of phthalic acid (benzene-1,2-dicarboxylic acid)?",
    2,
    "Phthalic acid is a dicarboxylic acid containing two $-\\text{COOH}$ groups. Neutralization requires 2 moles of $\\text{NaOH}$: $\\text{C}_6\\text{H}_4(\\text{COOH})_2 + 2\\text{NaOH} \\rightarrow \\text{C}_6\\text{H}_4(\\text{COONa})_2 + 2\\text{H}_2\\text{O}$."
  )
];

console.log(`Part 9 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ").slice(1); // skip duplicate Grignard question, leaving 8 MCQs
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

const finalPart9 = [...ars, ...mcqs, ...nums];
console.log(`Final Part 9 total: ${finalPart9.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part9.js"),
  "module.exports = " + JSON.stringify(finalPart9, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part9.js");
