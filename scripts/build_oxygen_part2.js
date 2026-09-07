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
    subTopic: "Lucas test and oxidation of alcohols",
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
    subTopic: "Lucas test and oxidation of alcohols",
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
    subTopic: "Lucas test and oxidation of alcohols",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Tertiary alcohols react with Lucas reagent (anhydrous $\\text{ZnCl}_2 + \\text{conc. } \\text{HCl}$) immediately at room temperature to produce cloudiness or turbidity.",
    "The reaction of tertiary alcohols with Lucas reagent proceeds through the rapid formation of a highly stable tertiary carbocation intermediate.",
    0,
    "Tertiary alcohols undergo an $\\text{S}_N1$ pathway in which protonation and loss of water quickly yield a stable tertiary carbocation, followed by rapid attack of chloride to form insoluble alkyl chloride causing immediate turbidity."
  ),
  ar(
    "Primary aliphatic alcohols like butan-1-ol do not produce turbidity with Lucas reagent at room temperature.",
    "Primary carbocations are relatively unstable, so primary alcohols react very slowly via an $\\text{S}_N2$ pathway and require heating to form alkyl chlorides.",
    0,
    "Primary alcohols cannot readily form carbocations at room temperature. They react via a slow bimolecular nucleophilic substitution $(\\text{S}_N2)$ process, necessitating heat to produce cloudiness."
  ),
  ar(
    "Allyl alcohol and benzyl alcohol give turbidity immediately with Lucas reagent at room temperature despite being primary alcohols.",
    "Allylic and benzylic carbocations formed upon ionization are stabilized by resonance delocalization of the positive charge.",
    0,
    "Even though allyl and benzyl alcohols are primary, their carbocations are resonance-stabilized (allyl cation and benzyl cation), enabling them to follow an $\\text{S}_N1$ pathway with instantaneous turbidity."
  ),
  ar(
    "Thionyl chloride ($\\text{SOCl}_2$) is the preferred reagent for converting alcohols into alkyl chlorides.",
    "Both by-products of the reaction with $\\text{SOCl}_2$ ($\\text{SO}_2$ and $\\text{HCl}$) are gases and escape into the atmosphere, leaving behind the pure alkyl chloride.",
    0,
    "In the Darzens process: $\\text{R}-\\text{OH} + \\text{SOCl}_2 \\rightarrow \\text{R}-\\text{Cl} + \\text{SO}_2\\uparrow + \\text{HCl}\\uparrow$. Because both by-products are gaseous, purification is straightforward."
  ),
  ar(
    "Reaction of an optically active alcohol with thionyl chloride in the presence of pyridine yields an alkyl chloride with inversion of configuration.",
    "Pyridine converts the chlorosulfite intermediate mechanism from intramolecular nucleophilic substitution ($\\text{S}_Ni$) to bimolecular nucleophilic substitution ($\\text{S}_N2$).",
    0,
    "Without pyridine, the reaction proceeds via an internal nucleophilic substitution $(\\text{S}_Ni)$ with retention of configuration. In the presence of pyridine, pyridinium chloride is formed and free $\\text{Cl}^-$ attacks from the back, causing inversion $(\\text{S}_N2)$."
  ),
  ar(
    "Pyridinium chlorochromate ($\\text{PCC}$) in dichloromethane is the reagent of choice for the oxidation of primary alcohols to aldehydes.",
    "$\\text{PCC}$ is a mild oxidizing agent that selectively oxidizes primary alcohols to aldehydes without causing further oxidation to carboxylic acids.",
    0,
    "$\\text{PCC}$ (Corey's reagent, a complex of chromium trioxide with pyridine and $\\text{HCl}$) operates under anhydrous conditions, preventing gem-diol hydrate formation and cleanly halting oxidation at the aldehyde stage."
  ),
  ar(
    "Tertiary alcohols are resistant to oxidation by neutral or alkaline potassium permanganate.",
    "Tertiary alcohols do not possess an $\\alpha$-hydrogen atom on the carbon bearing the hydroxyl group.",
    0,
    "Oxidation of alcohols involves the cleavage of both the $\\text{O}-\\text{H}$ bond and the $\\text{C}-\\text{H}$ bond at the $\\alpha$-carbon. Because tertiary alcohols lack $\\alpha$-hydrogen, they resist oxidation under mild conditions."
  ),
  ar(
    "When tert-butyl alcohol is passed over heated copper at $573\\text{ K}$, 2-methylpropene is formed instead of a carbonyl compound.",
    "Tertiary alcohols lack $\\alpha$-hydrogen and undergo catalytic dehydration rather than dehydrogenation over heated copper.",
    0,
    "At $573\\text{ K}$ over copper, primary alcohols dehydrogenate to aldehydes, secondary alcohols dehydrogenate to ketones, and tertiary alcohols undergo dehydration to alkenes."
  ),
  ar(
    "In the Victor Meyer test, a secondary alcohol produces a blue coloration upon addition of alkali.",
    "Secondary nitroalkanes formed during the Victor Meyer test react with nitrous acid to yield pseudonitrols, which turn blue in alkaline solution.",
    0,
    "Secondary alcohols are converted to alkyl iodides, then secondary nitroalkanes, which react with $\\text{HNO}_2$ to give pseudonitrol $(\\text{R}_2\\text{C}(\\text{NO})\\text{NO}_2)$, exhibiting a characteristic blue color in alkali."
  ),
  ar(
    "The ease of acid-catalyzed dehydration of alcohols follows the order: $3^\\circ > 2^\\circ > 1^\\circ$.",
    "The dehydration of alcohols proceeds through a carbocation intermediate, and carbocation stability follows the order: $3^\\circ > 2^\\circ > 1^\\circ$.",
    0,
    "The rate-determining step in acid-catalyzed dehydration is the loss of water from the protonated alcohol to form a carbocation. Since tertiary carbocations are the most stable, tertiary alcohols dehydrate most readily."
  ),
  ar(
    "Acid-catalyzed dehydration of butan-2-ol predominantly yields but-2-ene rather than but-1-ene.",
    "According to Saytzeff's rule, the more substituted and thermodynamically more stable alkene is the major elimination product.",
    0,
    "Elimination of a proton from the secondary carbocation preferentially yields the more highly substituted alkene, but-2-ene (trans and cis), conforming to Saytzeff's rule."
  ),
  ar(
    "Dehydration of ethanol with concentrated sulfuric acid at $413\\text{ K}$ produces diethyl ether, whereas at $443\\text{ K}$ it produces ethene.",
    "At $413\\text{ K}$, bimolecular nucleophilic substitution ($\\text{S}_N2$) between protonated ethanol and unprotonated ethanol dominates, while at $443\\text{ K}$ unimolecular elimination ($\\text{E}1$) dominates.",
    0,
    "Temperature controls the pathway: $413\\text{ K}$ ($140^\\circ\\text{C}$) favors intermolecular $\\text{S}_N2$ attack to yield ether, whereas higher temperature ($443\\text{ K} / 170^\\circ\\text{C}$) favors $\\beta$-elimination to form ethene."
  ),
  ar(
    "Under drastic conditions with acidic potassium dichromate, butan-2-ol can be oxidized to a mixture of ethanoic acid and propanoic acid.",
    "Oxidation of secondary alcohols involves cleavage of carbon-carbon bonds on either side of the carbonyl group under vigorous conditions.",
    0,
    "Secondary alcohols are first oxidized to ketones (butan-2-one). Under vigorous conditions, cleavage occurs according to Popoff's rule to produce a mixture of smaller carboxylic acids."
  ),
  ar(
    "Jones reagent ($\\text{CrO}_3$ in aqueous $\\text{H}_2\\text{SO}_4$ and acetone) oxidizes butan-1-ol all the way to butanoic acid.",
    "In the presence of water, the aldehyde intermediate hydrates to form a gem-diol (aldehyde hydrate), which is rapidly oxidized further to the carboxylic acid.",
    0,
    "In aqueous medium, butanal is in equilibrium with its gem-diol hydrate, which undergoes rapid chromate ester formation and oxidation to give butanoic acid."
  ),
  ar(
    "Reaction of ethanol with phosphorus pentachloride ($\\text{PCl}_5$) gives chloroethane along with $\\text{POCl}_3$ and $\\text{HCl}$.",
    "$\\text{PCl}_5$ reacts with alcohols by replacing the hydroxyl group with chlorine and forming phosphorus oxychloride and hydrogen chloride gas.",
    0,
    "The stoichiometric reaction is: $\\text{CH}_3\\text{CH}_2\\text{OH} + \\text{PCl}_5 \\rightarrow \\text{CH}_3\\text{CH}_2\\text{Cl} + \\text{POCl}_3 + \\text{HCl}$. The formation of strong $\\text{P}=\\text{O}$ bonds drives the reaction."
  ),
  ar(
    "In the Victor Meyer test, a primary alcohol gives a blood-red color upon treatment with alkali.",
    "Primary nitroalkanes react with nitrous acid to form nitrolic acids, whose sodium or potassium salts have a red color.",
    0,
    "Primary alcohols yield primary nitroalkanes, which react with $\\text{HNO}_2$ to yield nitrolic acid $(\\text{R}-\\text{C}(=\\text{NOH})\\text{NO}_2)$. The sodium salt of nitrolic acid is intensely blood-red."
  ),
  ar(
    "Acid-catalyzed dehydration of 3,3-dimethylbutan-2-ol yields 2,3-dimethylbut-2-ene as the principal product.",
    "The secondary carbocation formed initially undergoes a 1,2-methyl shift to generate a more stable tertiary carbocation prior to proton elimination.",
    0,
    "Loss of water generates $((\\text{CH}_3)_3\\text{C}-\\text{CH}^+-\\text{CH}_3)$. A 1,2-methide shift produces $((\\text{CH}_3)_2\\text{C}^+-\\text{CH}(\\text{CH}_3)_2)$, which loses a proton to yield the tetrasubstituted alkene 2,3-dimethylbut-2-ene."
  ),
  ar(
    "Potassium dichromate in acidic medium changes color from orange to green when treated with ethanol.",
    "Orange dichromate ions ($\\text{Cr}_2\\text{O}_7^{2-}$, $\\text{Cr}(\\text{VI})$) are reduced by ethanol to green chromium(III) ions ($\\text{Cr}^{3+}$).",
    0,
    "Ethanol is oxidized to ethanoic acid while hexavalent chromium (orange) is reduced to trivalent chromium (green), serving as a standard breathalyzer test."
  ),
  ar(
    "Neopentyl alcohol reacts very slowly with concentrated $\\text{HCl}$ even in the presence of $\\text{ZnCl}_2$.",
    "The bulky tert-butyl group adjacent to the primary carbon sterically hinders the approach of the chloride nucleophile in the $\\text{S}_N2$ pathway.",
    0,
    "Neopentyl alcohol $((\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{OH})$ experiences severe neopentyl steric hindrance to backside nucleophilic attack, making bimolecular displacement exceptionally sluggish."
  ),
  ar(
    "Collins reagent ($\\text{CrO}_3 \\cdot 2\\text{C}_5\\text{H}_5\\text{N}$) in dichloromethane oxidizes primary allylic alcohols to $\\alpha,\\beta$-unsaturated aldehydes without altering the double bond.",
    "Collins reagent is a selective oxidant that does not attack isolated or conjugated carbon-carbon double bonds.",
    0,
    "Collins reagent oxidizes the $-\\text{CH}_2\\text{OH}$ group cleanly to $-\\text{CHO}$ while leaving carbon-carbon double bonds untouched."
  ),
  ar(
    "Periodic acid ($\\text{HIO}_4$) cleaves vicinal diols to give carbonyl compounds.",
    "The cleavage of vicinal diols by $\\text{HIO}_4$ proceeds through the formation of a cyclic periodate ester intermediate.",
    0,
    "Malaprade reaction: $\\text{HIO}_4$ coordinates to both adjacent hydroxyl groups to form a cyclic 5-membered periodate ester, which cleaves the $\\text{C}-\\text{C}$ bond to yield two carbonyl fragments."
  ),
  ar(
    "Pinacol-pinacolone rearrangement involves the conversion of 2,3-dimethylbutane-2,3-diol into 3,3-dimethylbutan-2-one in the presence of acid.",
    "The reaction involves protonation of one hydroxyl group, loss of water, and a subsequent 1,2-methyl migration driven by the formation of a resonance-stabilized oxonium ion.",
    0,
    "Protonation and loss of $\\text{H}_2\\text{O}$ forms a tertiary carbocation. A 1,2-methyl shift generates a carbocation adjacent to oxygen, which is resonance-stabilized as a protonated ketone (oxonium ion)."
  ),
  ar(
    "Glycerol on heating with potassium bisulfate ($\\text{KHSO}_4$) yields acrolein (prop-2-enal) with a pungent, irritating odor.",
    "$\\text{KHSO}_4$ acts as a dehydrating agent that removes two molecules of water from glycerol.",
    0,
    "Heating glycerol with $\\text{KHSO}_4$ results in double dehydration to produce acrolein $(\\text{CH}_2=\\text{CH}-\\text{CHO})$ and 2 molecules of water."
  ),
  ar(
    "Iodoform test can distinguish propan-2-ol from propan-1-ol.",
    "Propan-2-ol contains the $\\text{CH}_3-\\text{CH}(\\text{OH})-$ group, which is oxidized by hypoiodite to a methyl ketone and yields yellow iodoform precipitate.",
    0,
    "Propan-2-ol has a $\\text{CH}_3\\text{CH}(\\text{OH})-$ unit and undergoes oxidation to acetone, which then gives the yellow precipitate of $\\text{CHI}_3$. Propan-1-ol lacks this group and does not give the iodoform test."
  ),
  ar(
    "Dehydrogenation of propan-2-ol over copper at $573\\text{ K}$ produces propan-2-one (acetone).",
    "Secondary alcohols undergo loss of two hydrogen atoms to form ketones when passed over hot copper catalyst.",
    0,
    "$\\text{CH}_3-\\text{CH}(\\text{OH})-\\text{CH}_3 \\xrightarrow{\\text{Cu}, 573\\text{ K}} \\text{CH}_3-\\text{CO}-\\text{CH}_3 + \\text{H}_2$. This is a catalytic dehydrogenation process."
  ),
  ar(
    "Ethanol gives a positive iodoform test, whereas methanol does not.",
    "Methanol does not contain the required $\\text{CH}_3-\\text{CH}(\\text{OH})-$ structural moiety for haloform reaction.",
    0,
    "Among primary alcohols, only ethanol possesses the $\\text{CH}_3\\text{CH}(\\text{OH})-$ structural requirement necessary to be oxidized to acetaldehyde and form iodoform $(\\text{CHI}_3)$."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following alcohols will react fastest with Lucas reagent (anhydrous $\\text{ZnCl}_2 + \\text{conc. } \\text{HCl}$) at room temperature?",
    [
      "2-Methylpropan-2-ol",
      "Butan-2-ol",
      "Butan-1-ol",
      "2-Methylpropan-1-ol"
    ],
    0,
    "2-Methylpropan-2-ol is a tertiary alcohol that forms a stable tertiary carbocation, giving instantaneous turbidity with Lucas reagent at room temperature."
  ),
  mcq(
    "Which of the following reagents is best suited to convert propan-1-ol into propanal in high yield?",
    [
      "Pyridinium chlorochromate ($\\text{PCC}$) in $\\text{CH}_2\\text{Cl}_2$",
      "Acidified potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$)",
      "Acidified potassium permanganate ($\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4$)",
      "Chromic acid in aqueous acetone (Jones reagent)"
    ],
    0,
    "$\\text{PCC}$ in an anhydrous solvent $(\\text{CH}_2\\text{Cl}_2)$ oxidizes primary alcohols specifically to aldehydes without over-oxidation to carboxylic acids."
  ),
  mcq(
    "When 2-methylbutan-2-ol is heated with $20\\% \\text{ H}_3\\text{PO}_4$ at $360\\text{ K}$, the major alkene obtained is:",
    [
      "2-Methylbut-2-ene",
      "2-Methylbut-1-ene",
      "3-Methylbut-1-ene",
      "Pent-2-ene"
    ],
    0,
    "Dehydration of 2-methylbutan-2-ol follows Saytzeff's rule to give the more substituted, tetrasubstituted alkene 2-methylbut-2-ene $((\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3)$ as the major product."
  ),
  mcq(
    "An alcohol 'A' ($\\text{C}_4\\text{H}_{10}\\text{O}$) on oxidation with acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ gives compound 'B' ($\\text{C}_4\\text{H}_8\\text{O}$), which gives a positive iodoform test. Compound 'A' is:",
    [
      "Butan-2-ol",
      "Butan-1-ol",
      "2-Methylpropan-1-ol",
      "2-Methylpropan-2-ol"
    ],
    0,
    "Butan-2-ol is oxidized to butan-2-one (a methyl ketone, $\\text{CH}_3\\text{COCH}_2\\text{CH}_3$), which contains the acetyl group and gives a positive iodoform test."
  ),
  mcq(
    "Heating of glycerol with concentrated hydriodic acid (excess $\\text{HI}$) ultimately yields:",
    [
      "2-Iodopropane",
      "1,2,3-Triiodopropane",
      "Allyl iodide",
      "Propene"
    ],
    0,
    "Glycerol with excess $\\text{HI}$ first forms 1,2,3-triiodopropane, which is unstable and eliminates $\\text{I}_2$ to give allyl iodide. Allyl iodide adds $\\text{HI}$ to give 1,2-diiodopropane, which eliminates $\\text{I}_2$ to give propene. Propene further adds $\\text{HI}$ (Markovnikov) to give 2-iodopropane as the ultimate stable product."
  ),
  mcq(
    "In the Victor Meyer test for alcohols, the colors obtained for primary, secondary, and tertiary alcohols upon addition of alkali are, respectively:",
    [
      "Red, Blue, Colorless",
      "Blue, Red, Colorless",
      "Red, Colorless, Blue",
      "Colorless, Red, Blue"
    ],
    0,
    "In the Victor Meyer test, primary alcohols give a blood-red color (nitrolic acid salt), secondary alcohols give a blue color (pseudonitrol), and tertiary alcohols remain colorless (no reaction with nitrous acid)."
  ),
  mcq(
    "Which of the following compounds will NOT give a yellow precipitate on treatment with $\\text{I}_2$ and aqueous $\\text{NaOH}$?",
    [
      "Pentan-3-ol",
      "Pentan-2-ol",
      "Ethanol",
      "Propan-2-ol"
    ],
    0,
    "Pentan-3-ol $(\\text{CH}_3\\text{CH}_2\\text{CH(OH)CH}_2\\text{CH}_3)$ oxidizes to pentan-3-one, which is not a methyl ketone and lacks the $\\text{CH}_3\\text{CH(OH)}-$ unit. Thus, it cannot give the iodoform test."
  ),
  mcq(
    "Reaction of $(R)\\text{-butan-2-ol}$ with $\\text{PBr}_3$ proceeds with:",
    [
      "Inversion of configuration giving $(S)\\text{-2-bromobutane}$",
      "Retention of configuration giving $(R)\\text{-2-bromobutane}$",
      "Racemization",
      "Elimination to give but-2-ene"
    ],
    0,
    "Reaction of alcohols with $\\text{PBr}_3$ proceeds via an $\\text{S}_N2$ attack of bromide ion on the phosphite intermediate, resulting in clean inversion of stereochemical configuration from $(R)$ to $(S)$."
  ),

  // 13 NUM Questions
  num(
    "How many isomeric alcohols with the molecular formula $\\text{C}_4\\text{H}_{10}\\text{O}$ give a positive iodoform test?",
    1,
    "Among the four isomers of $\\text{C}_4\\text{H}_{10}\\text{O}$ (butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol), only butan-2-ol has the $\\text{CH}_3-\\text{CH}(\\text{OH})-$ group required for a positive iodoform test. Total = 1."
  ),
  num(
    "How many moles of $\\text{HIO}_4$ are consumed in the complete oxidative cleavage of 1 mole of glycerol $(\\text{CH}_2\\text{OH}-\\text{CHOH}-\\text{CH}_2\\text{OH})$?",
    2,
    "Glycerol has two adjacent $\\text{C}-\\text{C}$ bonds linking hydroxyl-bearing carbons. Cleavage of both bonds consumes 2 moles of $\\text{HIO}_4$, producing 2 moles of formaldehyde $(\\text{HCHO})$ and 1 mole of formic acid $(\\text{HCOOH})$."
  ),
  num(
    "How many moles of formaldehyde $(\\text{HCHO})$ are produced when 1 mole of glycerol is oxidized completely by periodic acid $(\\text{HIO}_4)$?",
    2,
    "Cleavage of glycerol by $\\text{HIO}_4$ yields 2 moles of formaldehyde (from the two terminal $-\\text{CH}_2\\text{OH}$ groups) and 1 mole of formic acid (from the middle $-\\text{CHOH}-$ group)."
  ),
  num(
    "How many isomeric butyl alcohols give cloudiness within 5 minutes (but not instantaneously) when treated with Lucas reagent at room temperature?",
    1,
    "Cloudiness within 5 minutes is characteristic of secondary alcohols. Among the 4 butyl alcohols, only butan-2-ol is a secondary alcohol. Thus, exactly 1 isomer gives turbidity in 5 minutes."
  ),
  num(
    "How many molecules of water are eliminated from 1 molecule of glycerol during its conversion to acrolein (prop-2-enal) upon heating with $\\text{KHSO}_4$?",
    2,
    "The dehydration of glycerol to acrolein is represented by: $\\text{C}_3\\text{H}_8\\text{O}_3 \\xrightarrow{\\text{KHSO}_4, \\Delta} \\text{C}_3\\text{H}_4\\text{O} + 2\\text{H}_2\\text{O}$. Exactly 2 molecules of water are eliminated."
  ),
  num(
    "What is the change in the oxidation state of chromium when acidic potassium dichromate oxidizes ethanol to ethanoic acid (report the absolute value of the change in oxidation number of Cr)?",
    3,
    "Chromium starts as $\\text{Cr}(\\text{VI})$ in $\\text{Cr}_2\\text{O}_7^{2-}$ and is reduced to $\\text{Cr}(\\text{III})$ $(\\text{Cr}^{3+})$. The change in oxidation state per chromium atom is $6 - 3 = 3$."
  ),
  num(
    "How many moles of electrons are transferred when 1 mole of ethanol is completely oxidized to ethanoic acid?",
    4,
    "Ethanol $(\\text{CH}_3\\text{CH}_2\\text{OH})$ oxidizes to ethanoic acid $(\\text{CH}_3\\text{COOH})$. The oxidation state of the functional carbon changes from $-1$ to $+3$, releasing $4$ electrons: $\\text{CH}_3\\text{CH}_2\\text{OH} + \\text{H}_2\\text{O} \\rightarrow \\text{CH}_3\\text{COOH} + 4\\text{H}^+ + 4e^-$."
  ),
  num(
    "How many chiral centers are present in the pinacolone molecule produced from the pinacol-pinacolone rearrangement of pinacol (2,3-dimethylbutane-2,3-diol)?",
    0,
    "Pinacolone is 3,3-dimethylbutan-2-one $((\\text{CH}_3)_3\\text{C}-\\text{CO}-\\text{CH}_3)$. The quaternary carbon has three identical methyl groups, and the carbonyl and acetyl carbons are achiral. Thus, there are 0 chiral centers."
  ),
  num(
    "How many alkenes (including geometrical stereoisomers) can be formed by the acid-catalyzed dehydration of butan-2-ol?",
    3,
    "Dehydration of butan-2-ol produces: (1) but-1-ene, (2) trans-but-2-ene, and (3) cis-but-2-ene. Total = 3 alkenes."
  ),
  num(
    "How many moles of $\\text{AgNO}_3$ will react with the chloride ions produced by treating 1 mole of an alcohol with 1 mole of $\\text{PCl}_5$ to convert all ionic chloride in aqueous workup?",
    1,
    "Reaction of alcohol with $\\text{PCl}_5$ gives 1 mole of $\\text{R}-\\text{Cl}$, 1 mole of $\\text{POCl}_3$, and 1 mole of $\\text{HCl}$. The free $\\text{HCl}$ gas dissolved in water provides 1 mole of $\\text{Cl}^-$, which precipitates with 1 mole of $\\text{AgNO}_3$."
  ),
  num(
    "What is the number of $\\alpha$-hydrogen atoms present in 2-methylpropan-2-ol (tert-butanol)?",
    0,
    "The $\\alpha$-carbon is the carbon directly bonded to the $-\\text{OH}$ group. In tert-butanol, the $\\alpha$-carbon is bonded to three methyl groups and bears 0 hydrogen atoms."
  ),
  num(
    "In the haloform reaction of 1 mole of propan-2-ol with $\\text{I}_2$ and $\\text{NaOH}$, how many moles of $\\text{I}_2$ are consumed?",
    4,
    "First, 1 mole of $\\text{I}_2$ oxidizes propan-2-ol to acetone: $\\text{CH}_3\\text{CH(OH)CH}_3 + \\text{I}_2 + 2\\text{NaOH} \\rightarrow \\text{CH}_3\\text{COCH}_3 + 2\\text{NaI} + 2\\text{H}_2\\text{O}$. Then, 3 moles of $\\text{I}_2$ iodinate the methyl group: $\\text{CH}_3\\text{COCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\rightarrow \\text{CHI}_3 + \\text{CH}_3\\text{COONa} + 3\\text{NaI} + 3\\text{H}_2\\text{O}$. Total $\\text{I}_2$ consumed = $1 + 3 = 4$ moles."
  ),
  num(
    "How many moles of $\\text{HIO}_4$ are consumed in the oxidative cleavage of 1 mole of D-glucose in its open-chain form?",
    5,
    "Open-chain glucose has 6 carbons: $\\text{CHO}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH}$. There are 5 adjacent carbon-carbon bonds between oxygenated carbons. Cleavage consumes 5 moles of $\\text{HIO}_4$ (yielding 5 moles of $\\text{HCOOH}$ and 1 mole of $\\text{HCHO}$)."
  )
];

console.log(`Part 2 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part2.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part2.js");
