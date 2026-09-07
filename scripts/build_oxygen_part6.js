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
    subTopic: "Aldehydes",
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
    subTopic: "Aldehydes",
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
    subTopic: "Aldehydes",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Benzaldehyde reduces Tollens' reagent to give a shining silver mirror, but does not reduce Fehling's solution.",
    "Fehling's solution is a weaker oxidizing agent than Tollens' reagent and cannot oxidize aromatic aldehydes under standard conditions.",
    0,
    "Tollens' reagent is a stronger oxidizing agent than Fehling's solution. Aromatic aldehydes like benzaldehyde have reduced electrophilicity due to $+M$ electron donation from the phenyl ring, so they can reduce Tollens' reagent but cannot reduce the weaker Fehling's solution."
  ),
  ar(
    "In the Rosenmund reduction, acyl chlorides are reduced to aldehydes using $\\text{H}_2$ over palladium catalyst supported on barium sulfate ($\\text{Pd}/\\text{BaSO}_4$) poisoned with sulfur or quinoline.",
    "$\\text{BaSO}_4$ and poison deactivate the palladium catalyst sufficiently to prevent subsequent over-reduction of the aldehyde to a primary alcohol.",
    0,
    "Unpoisoned $\\text{Pd}$ catalyst rapidly reduces aldehydes to primary alcohols. Poisoning with sulfur or quinoline lowers the catalytic activity so that reduction halts selectively at the aldehyde stage."
  ),
  ar(
    "Methanal (formaldehyde) cannot be prepared by the Rosenmund reduction.",
    "Formyl chloride is unstable at room temperature and decomposes readily into carbon monoxide and hydrogen chloride.",
    0,
    "Rosenmund reduction requires an acyl chloride. Formyl chloride $(\\text{HCOCl})$ is thermodynamically unstable at ordinary temperature, decomposing into $\\text{CO} + \\text{HCl}$, preventing its use as a starting material."
  ),
  ar(
    "In the Etard reaction, toluene is oxidized to benzaldehyde using chromyl chloride ($\\text{CrO}_2\\text{Cl}_2$) in carbon disulfide.",
    "Chromyl chloride oxidizes the methyl group to an insoluble brown chromium complex that prevents further oxidation to benzoic acid until hydrolyzed with water.",
    0,
    "The brown coordination complex $(\\text{C}_6\\text{H}_5\\text{CH}(\\text{OCrCl}_2\\text{OH})_2)$ precipitates out of non-polar $\\text{CS}_2$, preventing over-oxidation. Subsequent aqueous acid hydrolysis releases pure benzaldehyde."
  ),
  ar(
    "Ethyne is the only alkyne that yields an aldehyde upon acid-catalyzed hydration with $\\text{HgSO}_4 / \\text{H}_2\\text{SO}_4$.",
    "Hydration of unsymmetrical alkynes follows Markovnikov's rule, adding the hydroxyl group to the more substituted internal carbon to form an enol that tautomerizes to a ketone.",
    0,
    "Only ethyne $(\\text{HC}\\equiv\\text{CH})$ possesses two identical terminal carbons yielding ethenol $(\\text{CH}_2=\\text{CHOH})$, which tautomerizes to ethanal $(\\text{CH}_3\\text{CHO})$. All other alkynes add water to form ketones."
  ),
  ar(
    "Diisobutylaluminium hydride ($\\text{DIBAL-H}$) selectively reduces nitriles and esters to aldehydes at $-78^\\circ\\text{C}$ followed by hydrolysis.",
    "At low temperatures, $\\text{DIBAL-H}$ transfers only one hydride ion to form a stable tetrahedral imine or hemiacetal intermediate that does not undergo further reduction until aqueous workup.",
    0,
    "The low temperature ($-78^\\circ\\text{C}$) and steric bulk of the isobutyl groups stabilize the mono-reduced tetrahedral intermediate, preventing a second hydride addition. Hydrolysis then releases the aldehyde cleanly."
  ),
  ar(
    "In the Gattermann-Koch reaction, benzene is converted into benzaldehyde by treatment with carbon monoxide and $\\text{HCl}$ in the presence of anhydrous $\\text{AlCl}_3$ and $\\text{CuCl}$.",
    "Carbon monoxide and hydrogen chloride react in situ to generate the unstable formyl chloride electrophile ($^+\\text{CH}=\\text{O}$ or $\\text{HCOCl}$).",
    0,
    "Under Lewis acid catalysis with $\\text{AlCl}_3/\\text{CuCl}$, $\\text{CO}$ and $\\text{HCl}$ generate the formyl cation $(^+\\text{CHO})$, which attacks the benzene ring via electrophilic aromatic substitution to produce benzaldehyde."
  ),
  ar(
    "Formalin is a $40\\%$ aqueous solution of formaldehyde widely used for preserving biological and anatomical specimens.",
    "Formalin reacts with tissue proteins, causing cross-linking and denaturation that prevents autolysis and microbial decomposition.",
    0,
    "Formaldehyde in formalin cross-links nitrogen atoms of adjacent polypeptide chains via methylene bridges $(-\\text{CH}_2-)$, fixing the tissue proteins and arresting enzymatic decay."
  ),
  ar(
    "The boiling points of aldehydes are higher than those of corresponding alkanes and ethers of similar molecular mass.",
    "Aldehydes possess a permanent dipole moment due to the polar carbonyl group, leading to stronger dipole-dipole intermolecular attractions.",
    0,
    "The carbonyl group $(\\text{C}=\\text{O})$ is strongly polarized $(\\text{C}^{\\delta+}-\\text{O}^{\\delta-})$, resulting in dipole-dipole forces that are significantly stronger than the weak London dispersion forces in alkanes and non-polar ethers."
  ),
  ar(
    "Aldehydes have lower boiling points than isomeric alcohols of comparable molecular mass.",
    "Alcohols can form strong intermolecular hydrogen bonds with each other, whereas aldehydes lack a hydrogen atom bonded to oxygen and cannot form intermolecular hydrogen bonds with themselves.",
    0,
    "Intermolecular hydrogen bonding in alcohols $(\\text{R}-\\text{OH})$ requires much more thermal energy to disrupt than dipole-dipole attractions in aldehydes, causing alcohols to boil at higher temperatures."
  ),
  ar(
    "In the Stephen reaction, ethanenitrile is converted to ethanal by reduction with $\\text{SnCl}_2$ and $\\text{HCl}$ followed by steam distillation.",
    "The nitrile is first reduced to an aldimine hydrochloride, which on subsequent acid hydrolysis yields the aldehyde.",
    0,
    "$\\text{R}-\\text{C}\\equiv\\text{N} + \\text{SnCl}_2 + 2\\text{HCl} \\rightarrow \\text{R}-\\text{CH}=\\text{NH} \\cdot \\text{HCl} + \\text{SnCl}_4$. Hydrolysis of the aldimine hydrochloride cleaves the $\\text{C}=\\text{N}$ bond to produce $\\text{R}-\\text{CHO} + \\text{NH}_4\\text{Cl}$."
  ),
  ar(
    "Oxidation of toluene with chromium trioxide ($\\text{CrO}_3$) in acetic anhydride yields benzylidene diacetate, which on acid hydrolysis gives benzaldehyde.",
    "The benzylidene diacetate intermediate resists further oxidation by $\\text{CrO}_3$, preventing over-oxidation of the methyl group to benzoic acid.",
    0,
    "Acetic anhydride traps the partially oxidized gem-diol intermediate as the stable ester benzylidene diacetate $(\\text{PhCH}(\\text{OCOCH}_3)_2)$, which cannot be oxidized further. Subsequent hydrolysis regenerates benzaldehyde."
  ),
  ar(
    "Aromatic aldehydes are generally less reactive towards nucleophilic addition reactions than aliphatic aldehydes.",
    "The $+M$ resonance donation of the benzene ring electron density into the carbonyl group reduces the electrophilicity (partial positive charge) of the carbonyl carbon.",
    0,
    "The carbonyl group is conjugated with the aromatic $\\pi$-system. Electron donation by resonance delocalizes the positive charge onto the ring carbons, decreasing the electrophilicity of the carbonyl carbon towards nucleophiles."
  ),
  ar(
    "Schiff's reagent is prepared by passing sulfur dioxide gas through an aqueous solution of p-rosaniline hydrochloride until the magenta color disappears.",
    "Addition of an aldehyde to decolorized Schiff's reagent restores the brilliant pink or magenta coloration.",
    0,
    "Sulfur dioxide bleaches rosaniline hydrochloride by forming a sulfonic acid adduct. Aldehydes react with this adduct to regenerate the conjugated chromophore, restoring the distinctive magenta color."
  ),
  ar(
    "Aldehydes with $\\alpha$-hydrogen atoms undergo polymerization or resinification upon boiling with concentrated sodium hydroxide.",
    "In the presence of concentrated alkali, repeated aldol condensations and dehydrations produce high-molecular-weight complex conjugated resins.",
    0,
    "Under harsh alkaline conditions, aldehydes having $\\alpha$-hydrogens undergo uncontrolled successive aldol additions and eliminations, yielding yellow-brown complex resinous materials."
  ),
  ar(
    "Trichloroethanal (chloral) forms a stable, isolable crystalline gem-diol, chloral hydrate $(\\text{CCl}_3\\text{CH}(\\text{OH})_2)$.",
    "The strong electron-withdrawing $-I$ effect of three chlorine atoms destabilizes the carbonyl carbon and stabilizes the gem-diol via intramolecular hydrogen bonding with chlorine.",
    0,
    "Normally gem-diols are unstable, but the three strongly electronegative chlorine atoms pull electron density away, while intramolecular H-bonding between the $-\\text{OH}$ hydrogens and chlorine atoms forms stable five-membered rings."
  ),
  ar(
    "Tollens' reagent is an ammoniacal solution of silver nitrate containing the complex cation $[\\text{Ag}(\\text{NH}_3)_2]^+$.",
    "During the Tollens' test, the aldehyde is oxidized to a carboxylate anion while silver(I) is reduced to elemental metallic silver that coats the test tube as a mirror.",
    0,
    "The redox equation: $\\text{RCHO} + 2[\\text{Ag}(\\text{NH}_3)_2]^+ + 3\\text{OH}^- \\rightarrow \\text{RCOO}^- + 2\\text{Ag}\\downarrow + 4\\text{NH}_3 + 2\\text{H}_2\\text{O}$. Deposition of $\\text{Ag}^0$ forms the silver mirror."
  ),
  ar(
    "Reductive ozonolysis of 2-methylbut-2-ene produces acetone and ethanal.",
    "Ozonolysis cleaves the carbon-carbon double bond, replacing it with two carbonyl groups.",
    0,
    "Ozonolysis of $((\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3)$ cleaves the double bond into a ketone $((\\text{CH}_3)_2\\text{C}=\\text{O})$ and an aldehyde $(\\text{CH}_3\\text{CHO})$ in the presence of $\\text{Zn}/\\text{H}_2\\text{O}$."
  ),
  ar(
    "Fehling's solution consists of two separate solutions: Fehling A (aqueous copper sulfate) and Fehling B (alkaline sodium potassium tartrate).",
    "Tartrate ions act as a chelating ligand that keeps copper(II) ions in solution as a soluble complex in the strongly basic medium, preventing precipitation of $\\text{Cu(OH)}_2$.",
    0,
    "In alkaline medium, copper(II) would precipitate as insoluble $\\text{Cu(OH)}_2$. Rochelle salt (tartrate) chelates $\\text{Cu}^{2+}$, maintaining a homogeneous solution of the active oxidant."
  ),
  ar(
    "Commercial side-chain chlorination of toluene at boiling temperature in the presence of sunlight followed by boiling with water yields benzaldehyde.",
    "Hydrolysis of benzal chloride (benzaldehyde dichloride, $\\text{PhCH}\\text{Cl}_2$) replaces two chlorine atoms with a gem-diol that spontaneously eliminates water to give benzaldehyde.",
    0,
    "$\\text{PhCH}_3 + 2\\text{Cl}_2 \\xrightarrow{h\\nu, \\Delta} \\text{PhCH}\\text{Cl}_2 + 2\\text{HCl}$. Hydrolysis gives $[\\text{PhCH(OH)}_2]$, which loses water to form benzaldehyde."
  ),
  ar(
    "Formaldehyde is a gas at room temperature with a boiling point of $-19^\\circ\\text{C}$.",
    "Due to its very low molecular mass ($30\\text{ g/mol}$) and small alkyl group, the intermolecular forces in formaldehyde are very weak.",
    0,
    "Methanal has a small molecular mass and lacks intermolecular hydrogen bonding, so its dipole-dipole and van der Waals attractions are insufficient to keep it liquid at room temperature."
  ),
  ar(
    "Trioxane (metaformaldehyde) is a cyclic trimer of formaldehyde obtained by heating formaldehyde with concentrated sulfuric acid.",
    "Trioxane is a crystalline solid with a six-membered heterocyclic ring containing alternating carbon and oxygen atoms.",
    0,
    "Three molecules of formaldehyde polymerize in the presence of acid to form trioxane (1,3,5-trioxane), an odorless solid used as a convenient portable source of formaldehyde."
  ),
  ar(
    "Acetaldehyde on treatment with dry hydrogen chloride gas polymerizes to form paraldehyde, a liquid used as a hypnotic and sedative.",
    "Paraldehyde is a cyclic trimer of acetaldehyde containing a six-membered ring with alternating carbon and oxygen atoms.",
    0,
    "Three molecules of $\\text{CH}_3\\text{CHO}$ condense in the presence of trace $\\text{HCl}$ or $\\text{H}_2\\text{SO}_4$ at room temperature to form paraldehyde (2,4,6-trimethyl-1,3,5-trioxane)."
  ),
  ar(
    "The carbonyl carbon atom in ethanal is $sp^2$ hybridized with an approximately trigonal planar geometry.",
    "The carbon atom forms three $\\sigma$-bonds with bond angles of approximately $120^\\circ$ and one unhybridized $p$-orbital forms a $\\pi$-bond with oxygen.",
    0,
    "The carbonyl carbon forms three $\\sigma$-bonds (two to $\\text{C}/\\text{H}$ and one to $\\text{O}$) and one $\\pi$-bond, giving a planar trigonal arrangement with angles close to $120^\\circ$."
  ),
  ar(
    "Formaldehyde cannot undergo aldol condensation with itself.",
    "Formaldehyde lacks $\\alpha$-hydrogen atoms, which are necessary for the formation of an enolate carbanion.",
    0,
    "Because formaldehyde $(\\text{HCHO})$ has no carbon bonded to the carbonyl group, it has no $\\alpha$-carbon and zero $\\alpha$-hydrogens, making self-aldol condensation impossible."
  ),
  ar(
    "Aldehydes show higher reactivity towards nucleophilic addition than ketones.",
    "Aldehydes experience less steric hindrance at the carbonyl carbon and less electron donation from only one alkyl group compared to two alkyl groups in ketones.",
    0,
    "Ketones have two alkyl groups that sterically hinder the incoming nucleophile and release electron density via $+I$ effect, stabilizing the carbonyl carbon and reducing its electrophilicity relative to aldehydes."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following compounds will reduce Tollens' reagent but will NOT reduce Fehling's solution?",
    [
      "Benzaldehyde",
      "Ethanal (acetaldehyde)",
      "Propanal",
      "Methanal (formaldehyde)"
    ],
    0,
    "Aromatic aldehydes like benzaldehyde reduce Tollens' reagent to give a silver mirror, but are unable to reduce Fehling's solution. Aliphatic aldehydes reduce both reagents."
  ),
  mcq(
    "The catalyst used in the Rosenmund reduction of acyl chlorides to aldehydes is:",
    [
      "$\\text{Pd} / \\text{BaSO}_4$ partially poisoned with sulfur or quinoline",
      "$\\text{Pt} / \\text{C}$ in concentrated $\\text{HCl}$",
      "$\\text{Ni} / \\text{Al}_2\\text{O}_3$ at $573\\text{ K}$",
      "$\\text{LiAlH}_4$ in dry ether"
    ],
    0,
    "Rosenmund reduction employs $\\text{Pd}/\\text{BaSO}_4$ poisoned with sulfur or quinoline to selectively reduce acyl chlorides to aldehydes without further reduction to alcohols."
  ),
  mcq(
    "Which of the following alkynes gives acetaldehyde (ethanal) upon hydration in the presence of dilute $\\text{H}_2\\text{SO}_4$ and $\\text{HgSO}_4$ at $333\\text{ K}$?",
    [
      "Ethyne (acetylene)",
      "Propyne",
      "But-1-yne",
      "But-2-yne"
    ],
    0,
    "Ethyne is the only alkyne that yields an aldehyde upon acid-catalyzed hydration. Propyne and higher alkynes yield ketones according to Markovnikov's rule."
  ),
  mcq(
    "The brown intermediate complex formed during the Etard reaction of toluene with chromyl chloride in $\\text{CS}_2$ has the formula:",
    [
      "$\\text{C}_6\\text{H}_5\\text{CH}(\\text{OCrCl}_2\\text{OH})_2$",
      "$\\text{C}_6\\text{H}_5\\text{CrO}_2\\text{Cl}_2$",
      "$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OCrCl}_3$",
      "$\\text{C}_6\\text{H}_5\\text{COOCrCl}_2$"
    ],
    0,
    "In the Etard reaction, toluene reacts with 2 moles of $\\text{CrO}_2\\text{Cl}_2$ to form the brown chromium complex $\\text{C}_6\\text{H}_5\\text{CH}(\\text{OCrCl}_2\\text{OH})_2$, which on hydrolysis yields benzaldehyde."
  ),
  mcq(
    "Reagent 'X' converts hex-4-enenitrile cleanly into hex-4-enal at $-78^\\circ\\text{C}$ without affecting the carbon-carbon double bond. Reagent 'X' is:",
    [
      "$\\text{DIBAL-H}$ followed by $\\text{H}_2\\text{O}$",
      "$\\text{LiAlH}_4$ in ether",
      "$\\text{NaBH}_4$ in methanol",
      "$\\text{Sn} / \\text{HCl}$"
    ],
    0,
    "Diisobutylaluminium hydride ($\\text{DIBAL-H}$) selectively reduces nitriles to aldehydes at $-78^\\circ\\text{C}$ while leaving carbon-carbon double bonds intact."
  ),
  mcq(
    "In the Gattermann-Koch reaction, benzaldehyde is synthesized by reacting benzene with:",
    [
      "$\\text{CO} + \\text{HCl}$ in the presence of anhydrous $\\text{AlCl}_3 / \\text{CuCl}$",
      "$\\text{HCN} + \\text{HCl}$ in the presence of anhydrous $\\text{AlCl}_3$",
      "$\\text{CO}_2 + \\text{HCl}$ in the presence of $\\text{FeCl}_3$",
      "$\\text{CH}_3\\text{COCl}$ in the presence of anhydrous $\\text{AlCl}_3$"
    ],
    0,
    "Gattermann-Koch formylation uses $\\text{CO} + \\text{HCl}$ with anhydrous $\\text{AlCl}_3$ and cuprous chloride $(\\text{CuCl})$ to formylate benzene to benzaldehyde."
  ),
  mcq(
    "What is the red precipitate formed when an aliphatic aldehyde reacts with Fehling's solution?",
    [
      "Cuprous oxide ($\\text{Cu}_2\\text{O}$)",
      "Cupric oxide ($\\text{CuO}$)",
      "Metallic copper ($\\text{Cu}$)",
      "Copper(II) tartrate"
    ],
    0,
    "Aliphatic aldehydes reduce blue $\\text{Cu}^{2+}$ tartrate complex in alkaline solution to a brick-red precipitate of copper(I) oxide $(\\text{Cu}_2\\text{O})$."
  ),
  mcq(
    "Paraldehyde, used as a sedative and hypnotic drug, is a cyclic trimer of:",
    [
      "Ethanal (acetaldehyde)",
      "Methanal (formaldehyde)",
      "Propanal",
      "Benzaldehyde"
    ],
    0,
    "Paraldehyde is the cyclic trimer of ethanal (acetaldehyde), formed when acetaldehyde is treated with traces of concentrated sulfuric acid at room temperature."
  ),

  // 13 NUM Questions
  num(
    "How many moles of metallic silver ($\\text{Ag}^0$) are precipitated when 1 mole of ethanal reacts completely with excess Tollens' reagent?",
    2,
    "The balanced redox equation is: $\\text{CH}_3\\text{CHO} + 2[\\text{Ag}(\\text{NH}_3)_2]^+ + 3\\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + 2\\text{Ag}\\downarrow + 4\\text{NH}_3 + 2\\text{H}_2\\text{O}$. Exactly 2 moles of silver mirror are formed per mole of aldehyde."
  ),
  num(
    "How many moles of copper(I) oxide ($\\text{Cu}_2\\text{O}$) are precipitated when 1 mole of propanal reacts completely with excess Fehling's solution?",
    1,
    "The balanced reaction is: $\\text{RCHO} + 2\\text{Cu}^{2+} + 5\\text{OH}^- \\rightarrow \\text{RCOO}^- + \\text{Cu}_2\\text{O}\\downarrow + 3\\text{H}_2\\text{O}$. Exactly 1 mole of $\\text{Cu}_2\\text{O}$ precipitate is formed per mole of aldehyde."
  ),
  num(
    "What is the number of $\\alpha$-hydrogen atoms present in a molecule of 2-methylpropanal (isobutyraldehyde)?",
    1,
    "In 2-methylpropanal $((\\text{CH}_3)_2\\text{CH}-\\text{CHO})$, the $\\alpha$-carbon is bonded to two methyl groups and one hydrogen atom. Thus, there is exactly 1 $\\alpha$-hydrogen."
  ),
  num(
    "What is the number of $\\alpha$-hydrogen atoms present in a molecule of 2,2-dimethylpropanal (pivalaldehyde)?",
    0,
    "In pivalaldehyde $((\\text{CH}_3)_3\\text{C}-\\text{CHO})$, the $\\alpha$-carbon is quaternary and bonded to three methyl groups, having 0 $\\alpha$-hydrogens."
  ),
  num(
    "How many moles of chromyl chloride ($\\text{CrO}_2\\text{Cl}_2$) are consumed per mole of toluene in the Etard reaction to form the brown complex?",
    2,
    "In the Etard reaction, 1 mole of toluene consumes exactly 2 moles of $\\text{CrO}_2\\text{Cl}_2$ to form the brown bis-adduct $\\text{C}_6\\text{H}_5\\text{CH}(\\text{OCrCl}_2\\text{OH})_2$."
  ),
  num(
    "What is the percentage (by mass) of formaldehyde present in commercial formalin solution?",
    40,
    "Commercial formalin is an aqueous solution containing approximately $40\\%$ formaldehyde by mass (typically $37-40\\%$)."
  ),
  num(
    "How many oxygen atoms are present in one molecule of trioxane (metaformaldehyde), the cyclic trimer of formaldehyde?",
    3,
    "Trioxane is a cyclic trimer with the formula $(\\text{HCHO})_3$ or $\\text{C}_3\\text{H}_6\\text{O}_3$. It contains exactly 3 oxygen atoms in a six-membered alternating ring."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of benzaldehyde $(\\text{C}_7\\text{H}_6\\text{O})$?",
    5,
    "For $\\text{C}_7\\text{H}_6\\text{O}$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 7 + 1 - \\frac{6}{2} = 8 - 3 = 5$ (1 benzene ring + 3 aromatic $\\pi$-bonds + 1 carbonyl $\\pi$-bond = 5)."
  ),
  num(
    "What is the oxidation state of the carbonyl carbon in methanal (formaldehyde, $\\text{H}_2\\text{C}=\\text{O}$)?",
    0,
    "In $\\text{H}_2\\text{C}=\\text{O}$, carbon is bonded to two hydrogens (each $+1$, contributing $-2$ to C) and double-bonded to one oxygen ($-2$, contributing $+2$ to C). Total oxidation state = $+2 - 2 = 0$."
  ),
  num(
    "What is the oxidation state of the carbonyl carbon in ethanal $(\\text{CH}_3-\\text{CH}=\\text{O})$?",
    1,
    "In $\\text{CH}_3\\text{CHO}$, carbon is bonded to one hydrogen ($-1$), one methyl carbon ($0$), and double-bonded to oxygen ($+2$). Net oxidation state = $+2 - 1 = +1$."
  ),
  num(
    "How many constitutional (structural) isomeric aldehydes exist for the molecular formula $\\text{C}_4\\text{H}_8\\text{O}$?",
    2,
    "The 2 constitutional isomeric aldehydes of $\\text{C}_4\\text{H}_8\\text{O}$ are: (1) butanal and (2) 2-methylpropanal (isobutyraldehyde)."
  ),
  num(
    "How many moles of $\\text{HCl}$ gas are produced when 1 mole of benzoyl chloride is reduced to benzaldehyde in the Rosenmund reduction?",
    1,
    "Stoichiometry: $\\text{C}_6\\text{H}_5\\text{COCl} + \\text{H}_2 \\xrightarrow{\\text{Pd}/\\text{BaSO}_4} \\text{C}_6\\text{H}_5\\text{CHO} + \\text{HCl}$. Exactly 1 mole of $\\text{HCl}$ is evolved per mole of acyl chloride."
  ),
  num(
    "How many total carbon atoms are present in one molecule of the sedative drug paraldehyde?",
    6,
    "Paraldehyde is a cyclic trimer of acetaldehyde $(\\text{C}_2\\text{H}_4\\text{O})_3 = \\text{C}_6\\text{H}_{12}\\text{O}_3$. It contains exactly $3 \\times 2 = 6$ carbon atoms."
  )
];

console.log(`Part 6 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part6.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part6.js");
