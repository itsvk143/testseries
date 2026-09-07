/**
 * scripts/insert_organic_name_reactions.js
 * Inserts 25 Organic Name Reactions MCQs into MongoDB Atlas questionBank, testPapers,
 * and updates jee_topics_by_subject.json & chapter_chemistry.json.
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const ORGANIC_NAME_REACTIONS_QUESTIONS = [
  // ==================== EASY (5 Questions) ====================
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Wurtz Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Easy",
    question: "Which of the following alkanes cannot be prepared in good yield by the Wurtz reaction?",
    options: [
      "Methane ($CH_4$)",
      "Ethane ($C_2H_6$)",
      "n-Butane ($C_4H_{10}$)",
      "n-Hexane ($C_6H_{14}$)"
    ],
    correctAnswer: 0,
    explanation: "The Wurtz reaction involves coupling of two alkyl halides using sodium metal in dry ether ($2R-X + 2Na \\rightarrow R-R + 2NaX$). Because it joins two carbon-containing alkyl radicals, the lowest alkane that can be formed is ethane ($CH_3-CH_3$). Methane ($CH_4$) contains only one carbon atom and therefore cannot be prepared by the Wurtz reaction.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Wurtz Reaction"],
    source: "NCERT Chemistry Class 11/12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 45
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Rosenmund Reduction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Easy",
    question: "In the Rosenmund reduction, an acyl chloride is converted into an aldehyde using hydrogen gas in the presence of which catalyst?",
    options: [
      "$Pd$ on $BaSO_4$ poisoned with sulfur or quinoline",
      "$LiAlH_4$ in dry ether",
      "$NaBH_4$ in ethanol",
      "$Zn-Hg$ in concentrated $HCl$"
    ],
    correctAnswer: 0,
    explanation: "Rosenmund reduction selectively reduces acyl chlorides to aldehydes ($RCOCl + H_2 \\rightarrow RCHO + HCl$) using palladium catalyst supported on barium sulfate ($Pd/BaSO_4$), which is partially deactivated ('poisoned') by adding quinoline or sulfur to prevent subsequent reduction of the aldehyde to a primary alcohol.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Rosenmund Reduction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 45
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Williamson Ether Synthesis",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Easy",
    question: "In Williamson ether synthesis, the best yield of tert-butyl ethyl ether is obtained by reacting:",
    options: [
      "Sodium tert-butoxide with bromoethane",
      "tert-Butyl bromide with sodium ethoxide",
      "tert-Butyl alcohol with ethyl alcohol and concentrated $H_2SO_4$",
      "tert-Butyl chloride with sodium ethoxide"
    ],
    correctAnswer: 0,
    explanation: "Williamson ether synthesis proceeds via an $S_N2$ displacement of halide ion by alkoxide ion. An unhindered primary alkyl halide (bromoethane, $CH_3CH_2Br$) readily undergoes $S_N2$ substitution with the bulky sodium tert-butoxide ($(CH_3)_3C-O^-Na^+$). If tertiary alkyl halide (tert-butyl bromide) is used with ethoxide, strong base $C_2H_5O^-$ causes rapid $E2$ elimination giving 2-methylpropene as the major product.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Williamson Ether Synthesis"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Clemmensen Reduction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Easy",
    question: "The Clemmensen reduction of an aldehyde or ketone into the corresponding hydrocarbon is carried out using:",
    options: [
      "Zinc amalgam and concentrated hydrochloric acid ($Zn-Hg / \\text{conc. } HCl$)",
      "Hydrazine and potassium hydroxide in ethylene glycol ($NH_2NH_2 / KOH$)",
      "Lithium aluminium hydride ($LiAlH_4$) in dry ether",
      "Hydrogen in the presence of Raney nickel"
    ],
    correctAnswer: 0,
    explanation: "Clemmensen reduction converts the carbonyl group ($>C=O$) of aldehydes and ketones into a methylene group ($>CH_2$) by treatment with amalgamated zinc and concentrated hydrochloric acid ($Zn-Hg / \\text{conc. } HCl$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Clemmensen Reduction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 45
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Sandmeyer Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Easy",
    question: "The reaction in which benzenediazonium chloride is treated with cuprous chloride in $HCl$ to form chlorobenzene is known as:",
    options: [
      "Sandmeyer reaction",
      "Gattermann reaction",
      "Wurtz-Fittig reaction",
      "Finkelstein reaction"
    ],
    correctAnswer: 0,
    explanation: "The replacement of the diazonium group in benzenediazonium chloride by chlorine, bromine, or cyano group using cuprous salts ($Cu_2Cl_2 / HCl$, $Cu_2Br_2 / HBr$, or $CuCN / KCN$) is called the Sandmeyer reaction. When copper powder and $HCl$ are used instead of cuprous chloride, it is called the Gattermann reaction.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Sandmeyer Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 45
  },

  // ==================== MODERATE (15 Questions) ====================
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Aldol Condensation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "Benzaldehyde reacts with acetophenone in the presence of dilute $NaOH$ at room temperature followed by heating to form which major condensation product?",
    options: [
      "1,3-Diphenylprop-2-en-1-one (chalcone)",
      "1,3-Diphenylpropan-1-one",
      "2,3-Diphenylprop-2-en-1-one",
      "Benzophenone"
    ],
    correctAnswer: 0,
    explanation: "This is a Claisen-Schmidt (crossed aldol) condensation. Benzaldehyde lacks an $\\alpha$-hydrogen, whereas acetophenone ($C_6H_5COCH_3$) has three $\\alpha$-hydrogens. Deprotonation of acetophenone by base forms an enolate ion which attacks the electrophilic carbonyl carbon of benzaldehyde to form a $\\beta$-hydroxy ketone. Subsequent dehydration (elimination of water) upon heating yields the stable conjugated $\\alpha,\\beta$-unsaturated ketone, 1,3-diphenylprop-2-en-1-one ($C_6H_5-CH=CH-CO-C_6H_5$, commonly called chalcone).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Aldol Condensation"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Cannizzaro Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "When 2,2-dimethylpropanal (trimethylacetaldehyde) is heated with concentrated aqueous $NaOH$ ($50\\%$), the reaction products are:",
    options: [
      "2,2-Dimethylpropan-1-ol and sodium 2,2-dimethylpropanoate",
      "Isobutylene and sodium formate",
      "Pivalic acid and acetone",
      "Neopentane and sodium carbonate"
    ],
    correctAnswer: 0,
    explanation: "2,2-Dimethylpropanal, $(CH_3)_3C-CHO$, lacks $\\alpha$-hydrogens and therefore undergoes a Cannizzaro disproportionation reaction when treated with concentrated alkali ($50\\%\\ NaOH$). One molecule is oxidized to carboxylic acid salt (sodium 2,2-dimethylpropanoate, $(CH_3)_3C-COONa$) while another molecule is reduced to primary alcohol (2,2-dimethylpropan-1-ol / neopentyl alcohol, $(CH_3)_3C-CH_2OH$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Cannizzaro Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Reimer-Tiemann Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "What is the reactive intermediate (electrophile) involved in the Reimer-Tiemann reaction of phenol with chloroform and aqueous $NaOH$?",
    options: [
      "Dichlorocarbene ($:CCl_2$)",
      "Trichloromethyl carbanion ($^-CCl_3$)",
      "Formyl cation ($^+CHO$)",
      "Dichloromethyl cation ($^+CHCl_2$)"
    ],
    correctAnswer: 0,
    explanation: "In the Reimer-Tiemann reaction, chloroform reacts with base ($OH^-$) by $\\alpha$-elimination: $CHCl_3 + OH^- \\rightleftharpoons ^-CCl_3 + H_2O \\rightarrow :CCl_2 + Cl^-$. Dichlorocarbene ($:CCl_2$) is an uncharged, electron-deficient species with a sextet of valence electrons that acts as an electrophile, attacking the nucleophilic phenoxide ring predominantly at the ortho position.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Reimer-Tiemann Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Kolbe's Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "In Kolbe's synthesis, sodium phenoxide is treated with carbon dioxide ($CO_2$) at $400\\text{ K}$ under $4-7\\text{ atm}$ pressure followed by acidification. The major organic product is:",
    options: [
      "2-Hydroxybenzoic acid (salicylic acid)",
      "Salicylaldehyde",
      "4-Hydroxybenzoic acid",
      "Benzoic acid"
    ],
    correctAnswer: 0,
    explanation: "In Kolbe's reaction, sodium phenoxide is heated with $CO_2$ (a weak electrophile) under pressure ($4-7\\text{ atm}$) at $400\\text{ K}$. The highly activated phenoxide ring undergoes electrophilic substitution mainly at the ortho position due to chelation stabilization in the transition state. Subsequent acidification gives 2-hydroxybenzoic acid (salicylic acid) as the major product.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Kolbe's Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Gabriel Phthalimide Synthesis",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "Which of the following amines cannot be prepared by Gabriel phthalimide synthesis?",
    options: [
      "Aniline ($C_6H_5NH_2$)",
      "Ethylamine ($CH_3CH_2NH_2$)",
      "Isobutylamine ($(CH_3)_2CHCH_2NH_2$)",
      "Benzylamine ($C_6H_5CH_2NH_2$)"
    ],
    correctAnswer: 0,
    explanation: "Aromatic primary amines such as aniline cannot be prepared by Gabriel phthalimide synthesis because aryl halides (such as chlorobenzene or bromobenzene) do not undergo nucleophilic substitution ($S_N2$) with the phthalimide anion under ordinary conditions due to resonance stabilization of the carbon-halogen bond and steric repulsion.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Gabriel Phthalimide Synthesis"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Hoffmann Bromamide Degradation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "How many moles of $NaOH$ and $Br_2$ are consumed per mole of primary amide in the complete Hoffmann bromamide degradation reaction?",
    options: [
      "4 moles of $NaOH$ and 1 mole of $Br_2$",
      "2 moles of $NaOH$ and 1 mole of $Br_2$",
      "4 moles of $NaOH$ and 2 moles of $Br_2$",
      "1 mole of $NaOH$ and 1 mole of $Br_2$"
    ],
    correctAnswer: 0,
    explanation: "The stoichiometric balanced equation for Hoffmann bromamide degradation is: $R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$. Thus, exactly 4 moles of $NaOH$ and 1 mole of $Br_2$ are consumed per mole of primary carboxamide to yield an amine containing one carbon atom less than the original amide.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Hoffmann Bromamide Degradation"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Etard Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "In the Etard reaction, toluene is converted to benzaldehyde by treatment with chromyl chloride ($CrO_2Cl_2$) in $CS_2$. What is the formula of the brown chromium complex formed as an intermediate?",
    options: [
      "$C_6H_5CH[OCr(OH)Cl_2]_2$",
      "$C_6H_5CH_2OCrOCl_2$",
      "$C_6H_5CrO_2Cl_2$",
      "$C_6H_5COOCrCl_2$"
    ],
    correctAnswer: 0,
    explanation: "In the Etard reaction, chromyl chloride ($CrO_2Cl_2$) in a non-polar solvent like $CS_2$ or $CCl_4$ oxidizes the methyl group of toluene to an intermediate brown chromium complex with the structure $C_6H_5CH[OCr(OH)Cl_2]_2$. Subsequent aqueous hydrolysis gives benzaldehyde.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Etard Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Stephen Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "In the Stephen reaction, ethanenitrile ($CH_3CN$) is reduced by $SnCl_2 / HCl$ to an imine hydrochloride intermediate which upon hydrolysis yields:",
    options: [
      "Acetaldehyde ($CH_3CHO$)",
      "Ethylamine ($CH_3CH_2NH_2$)",
      "Acetic acid ($CH_3COOH$)",
      "Acetamide ($CH_3CONH_2$)"
    ],
    correctAnswer: 0,
    explanation: "In the Stephen reduction, an alkyl or aryl nitrile is reduced with stannous chloride and hydrochloric acid ($SnCl_2 + HCl$) to form an aldimine hydrochloride intermediate ($CH_3CH=NH \\cdot HCl$), which on subsequent steam distillation or acid hydrolysis gives the corresponding aldehyde (acetaldehyde, $CH_3CHO$) and ammonium chloride ($NH_4Cl$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Stephen Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Hell-Volhard-Zelinsky (HVZ) Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "Which of the following carboxylic acids does not undergo the Hell-Volhard-Zelinsky (HVZ) reaction?",
    options: [
      "2,2-Dimethylpropanoic acid",
      "Propanoic acid",
      "Ethanoic acid",
      "2-Methylpropanoic acid"
    ],
    correctAnswer: 0,
    explanation: "The Hell-Volhard-Zelinsky (HVZ) reaction requires the presence of at least one $\\alpha$-hydrogen atom in the carboxylic acid to undergo $\\alpha$-halogenation in the presence of red phosphorus and chlorine or bromine ($X_2 / \\text{red } P$). 2,2-Dimethylpropanoic acid ($(CH_3)_3C-COOH$) has no $\\alpha$-hydrogens and is therefore unreactive under HVZ conditions.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Hell-Volhard-Zelinsky (HVZ) Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Friedel-Crafts Acylation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "Why does Friedel-Crafts acylation of benzene with acetyl chloride avoid the major limitations of Friedel-Crafts alkylation?",
    options: [
      "The acylium ion ($CH_3-C^+\\equiv O$) does not undergo carbocation rearrangement and the acyl group deactivates the ring towards polyacylation",
      "Acylation produces an activating group that enhances further reaction",
      "Anhydrous $AlCl_3$ is not consumed in acylation whereas it is consumed in alkylation",
      "Acyl chlorides are unreactive towards electron-rich aromatic compounds"
    ],
    correctAnswer: 0,
    explanation: "Friedel-Crafts alkylation often fails to give good yields due to: (1) carbocation rearrangement leading to isomeric products, and (2) polyalkylation because alkyl groups activate the ring. In acylation, the acylium ion intermediate ($R-C^+\\equiv O \\leftrightarrow R-C\\equiv O^+$) is resonance-stabilized and does not rearrange. Furthermore, the carbonyl group of the introduced acyl substituent is strongly electron-withdrawing, deactivating the ring towards polyacylation.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Friedel-Crafts Acylation"],
    source: "NCERT Chemistry Class 11/12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Friedel-Crafts Alkylation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "When benzene is treated with 1-chloropropane in the presence of anhydrous $AlCl_3$, the major product obtained is:",
    options: [
      "Isopropylbenzene (cumene)",
      "n-Propylbenzene",
      "Ethylbenzene",
      "Toluene"
    ],
    correctAnswer: 0,
    explanation: "When 1-chloropropane reacts with anhydrous $AlCl_3$, the initially formed primary carbocation ($CH_3-CH_2-CH_2^+$) undergoes a rapid 1,2-hydride shift to form the more stable secondary carbocation ($CH_3-CH^+-CH_3$). Electrophilic attack of the secondary carbocation on benzene gives isopropylbenzene (cumene) as the major product ($~70\\%$) and n-propylbenzene as a minor product ($~30\\%$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Friedel-Crafts Alkylation"],
    source: "NCERT Chemistry Class 11/12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Wolff-Kishner Reduction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "An organic compound containing both a carbonyl group and an acid-sensitive cyclic acetal group is best reduced to a methylene group using:",
    options: [
      "Wolff-Kishner reduction ($NH_2NH_2 / KOH$, ethylene glycol, $\\Delta$)",
      "Clemmensen reduction ($Zn-Hg / \\text{conc. } HCl$)",
      "Concentrated $HI$ and red phosphorus at $423\\text{ K}$",
      "$LiAlH_4$ followed by dilute $H_2SO_4$"
    ],
    correctAnswer: 0,
    explanation: "Clemmensen reduction uses concentrated $HCl$ (strongly acidic conditions), which would rapidly hydrolyze the acid-sensitive cyclic acetal protecting group. Wolff-Kishner reduction operates under strongly alkaline conditions ($NH_2NH_2 / KOH$), which leaves acid-labile groups such as acetals, ethers, and ketals intact while cleanly reducing the carbonyl group to a methylene group.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Wolff-Kishner Reduction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Gattermann Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "What distinguishes the Gattermann reaction from the Sandmeyer reaction in the synthesis of haloarenes from diazonium salts?",
    options: [
      "Gattermann reaction uses copper powder ($Cu$) with halogen acid ($HX$) instead of cuprous halide ($Cu_2X_2$)",
      "Gattermann reaction proceeds via an ionic mechanism whereas Sandmeyer is a free radical reaction",
      "Gattermann reaction produces fluoroarenes exclusively",
      "Gattermann reaction requires an alkaline medium"
    ],
    correctAnswer: 0,
    explanation: "In the Sandmeyer reaction, benzenediazonium halide is treated with cuprous halides ($Cu_2Cl_2 / HCl$ or $Cu_2Br_2 / HBr$). In the Gattermann reaction, the diazonium salt is treated with finely divided metallic copper powder ($Cu$) in the presence of hydrochloric or hydrobromic acid ($HCl$ or $HBr$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Gattermann Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Wurtz-Fittig Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "A mixture of bromobenzene and methyl bromide is treated with metallic sodium in dry ether. The major cross-coupled aromatic product is:",
    options: [
      "Toluene",
      "Biphenyl",
      "Ethylbenzene",
      "Benzene"
    ],
    correctAnswer: 0,
    explanation: "The Wurtz-Fittig reaction involves the coupling of an aryl halide (bromobenzene, $C_6H_5Br$) with an alkyl halide (methyl bromide, $CH_3Br$) in the presence of sodium metal in dry ether to yield an alkylarene. The cross-coupling product is toluene ($C_6H_5-CH_3$): $C_6H_5Br + 2Na + BrCH_3 \\rightarrow C_6H_5CH_3 + 2NaBr$.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Wurtz-Fittig Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Coupling Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Moderate",
    question: "Benzenediazonium chloride reacts with phenol at $0-5\\degree\\text{C}$ in weakly alkaline medium ($pH = 9-10$) to yield an azo dye. What is the identity and color of the dye?",
    options: [
      "p-Hydroxyazobenzene (orange dye)",
      "p-Aminoazobenzene (yellow dye)",
      "o-Hydroxyazobenzene (red dye)",
      "Azobenzene (colorless)"
    ],
    correctAnswer: 0,
    explanation: "In weakly basic medium ($pH = 9-10$), phenol is converted to phenoxide ion, which is strongly activated towards electrophilic aromatic substitution by the diazonium ion ($C_6H_5N_2^+$). The coupling occurs exclusively at the para-position to give p-hydroxyazobenzene ($C_6H_5-N=N-C_6H_4-OH$), which is a bright orange-colored azo dye.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Coupling Reaction"],
    source: "NCERT Chemistry Class 12",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 60
  },

  // ==================== CHALLENGING (5 Questions) ====================
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Cannizzaro Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In a crossed Cannizzaro reaction between benzaldehyde ($C_6H_5CHO$) and formaldehyde ($HCHO$) in concentrated $NaOH$ solution, the predominant oxidation and reduction products formed are respectively:",
    options: [
      "Sodium formate ($HCOONa$) and benzyl alcohol ($C_6H_5CH_2OH$)",
      "Sodium benzoate ($C_6H_5COONa$) and methanol ($CH_3OH$)",
      "Benzyl alcohol ($C_6H_5CH_2OH$) and sodium formate ($HCOONa$)",
      "Sodium benzoate ($C_6H_5COONa$) and sodium formate ($HCOONa$)"
    ],
    correctAnswer: 0,
    explanation: "Formaldehyde lacks electron-donating alkyl/aryl groups and steric hindrance, making its carbonyl carbon significantly more electrophilic than that of benzaldehyde (where the carbonyl group is in conjugation with the benzene ring). Hydroxide ion ($OH^-$) preferentially attacks formaldehyde to form a tetrahedral dianion/monoanion intermediate, which subsequently transfers a hydride ion ($H^-$) to the less reactive benzaldehyde. Therefore, formaldehyde is oxidized to sodium formate ($HCOONa$) while benzaldehyde is reduced to benzyl alcohol ($C_6H_5CH_2OH$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Cannizzaro Reaction"],
    source: "NCERT Chemistry Class 12 / JEE Advanced",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Aldol Condensation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "When hexane-2,5-dione is treated with dilute aqueous $NaOH$ and heated, it undergoes intramolecular aldol condensation. The major cyclic enone product formed is:",
    options: [
      "3-Methylcyclopent-2-en-1-one",
      "2-Methylcyclopent-2-en-1-one",
      "3-Methylcyclohex-2-en-1-one",
      "Cyclohex-2-en-1-one"
    ],
    correctAnswer: 0,
    explanation: "Hexane-2,5-dione ($CH_3-CO-CH_2-CH_2-CO-CH_3$) has two types of $\\alpha$-carbons: $C1/C6$ (methyl carbons) and $C3/C4$ (methylene carbons). Deprotonation at a methyl carbon ($C1$) forms an enolate that attacks the $C5$ carbonyl carbon to form a thermodynamically stable five-membered ring. Dehydration of the resulting $\\beta$-hydroxy cyclopentanone yields 3-methylcyclopent-2-en-1-one. Attack from $C3$ on $C5$ would form an unstable, angle-strained three-membered ring, which is thermodynamically and kinetically disfavored.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Aldol Condensation"],
    source: "NCERT Chemistry Class 12 / JEE Main",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Hoffmann Bromamide Degradation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "When an optically active primary amide, $(R)\\text{-2-methylbutanamide}$, is treated with $Br_2$ and aqueous $KOH$ in the Hoffmann bromamide degradation, the stereochemical outcome of the resulting amine is:",
    options: [
      "$(R)\\text{-sec-butylamine}$ with complete retention of configuration",
      "$(S)\\text{-sec-butylamine}$ with complete inversion of configuration",
      "Racemic $(\\pm)\\text{-sec-butylamine}$ due to planar intermediate",
      "1-Butanamine due to skeletal rearrangement"
    ],
    correctAnswer: 0,
    explanation: "The key step in the Hoffmann bromamide degradation is the intramolecular migration of the alkyl group from the carbonyl carbon to the electron-deficient nitrogen atom of the acyl nitrene / bromamide intermediate to form an alkyl isocyanate ($R-N=C=O$). This rearrangement is strictly intramolecular and concerted with simultaneous departure of bromide ion. As a result, the migrating chiral group retains its three-dimensional configuration completely, yielding $(R)\\text{-sec-butylamine}$ with $100\\%$ retention of configuration.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Hoffmann Bromamide Degradation"],
    source: "NCERT Chemistry Class 12 / JEE Main",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Gabriel Phthalimide Synthesis",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the synthesis of the amino acid glycine ($H_2N-CH_2-COOH$), potassium phthalimide is reacted with ethyl chloroacetate ($ClCH_2COOCH_2CH_3$) followed by hydrazinolysis and acid hydrolysis. This reaction sequence is an application of:",
    options: [
      "Gabriel phthalimide synthesis coupled with an $S_N2$ displacement",
      "Hoffmann bromamide degradation followed by Curtius rearrangement",
      "Kolbe's electrolytic synthesis followed by esterification",
      "Stephen reduction followed by Strecker synthesis"
    ],
    correctAnswer: 0,
    explanation: "In this modified Gabriel synthesis, potassium phthalimide acts as a nitrogen nucleophile and displaces chloride ion from the primary alkyl halide ethyl chloroacetate via an $S_N2$ mechanism, forming N-phthalimidoglycine ethyl ester. Subsequent treatment with hydrazine (Ing-Manske procedure) or acid hydrolysis cleaves the phthaloyl protective group and hydrolyzes the ester, yielding glycine ($H_2N-CH_2-COOH$) and phthalhydrazide without contamination by secondary or tertiary amines.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Gabriel Phthalimide Synthesis"],
    source: "NCERT Chemistry Class 12 / JEE Advanced",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Reimer-Tiemann Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Reimer-Tiemann reaction of p-cresol (4-methylphenol) with $CHCl_3$ and aqueous $NaOH$, alongside the normal phenolic aldehyde, a non-phenolic neutral ketone with the formula $C_8H_8Cl_2O$ is isolated as a byproduct. This abnormal product is formed because:",
    options: [
      "Electrophilic attack of $:CCl_2$ occurs at the blocked para-position (ipso-attack) yielding a cyclohexadienone that cannot undergo rearomatization by proton loss",
      "The methyl group undergoes radical chlorination by chlorine radicals",
      "The phenoxide ring undergoes ring expansion to a 7-membered tropone derivative",
      "Dichlorocarbene oxidizes the methyl group to an acyl chloride"
    ],
    correctAnswer: 0,
    explanation: "In the Reimer-Tiemann reaction of p-substituted phenols like p-cresol, electrophilic attack of dichlorocarbene ($:CCl_2$) occurs not only at the ortho position (giving 2-hydroxy-5-methylbenzaldehyde) but also at the para position (ipso-attack). The resulting para-intermediate (4-methyl-4-dichloromethylcyclohexa-2,5-dien-1-one) has a quaternary carbon at $C4$ with no hydrogen available for elimination to rearomatize the ring. Thus, the neutral cyclohexadienone derivative is stable and isolated as the 'abnormal Reimer-Tiemann product'.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Reimer-Tiemann Reaction"],
    source: "NCERT Chemistry Class 12 / JEE Advanced",
    status: "Active",
    targetExams: ["JEE Main", "NEET"],
    idealTimeSeconds: 90
  }
];

async function main() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const qBank = db.collection('questionBank');
  const testPapers = db.collection('testPapers');

  console.log('🚀 Connected to MongoDB Atlas.');

  // 1. Check if Organic Name Reactions already exists in questionBank
  const existingCount = await qBank.countDocuments({
    subject: 'Chemistry',
    chapter: 'Organic Name Reactions'
  });
  console.log(`Current questions in questionBank for 'Organic Name Reactions': ${existingCount}`);

  if (existingCount === 0) {
    const docsToInsert = ORGANIC_NAME_REACTIONS_QUESTIONS.map(q => ({
      ...q,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
    const result = await qBank.insertMany(docsToInsert);
    console.log(`✅ Inserted ${result.insertedCount} questions into MongoDB questionBank.`);
  } else {
    console.log(`ℹ️ Questions already exist in questionBank (${existingCount} records).`);
  }

  // 2. Also register the chapter test in testPapers collection for JEE Main and NEET
  const loadedQuestions = await qBank.find({
    subject: 'Chemistry',
    chapter: 'Organic Name Reactions'
  }).toArray();

  const formattedQuestions = loadedQuestions.map((q, idx) => ({
    id: idx + 1,
    questionId: q._id.toString(),
    subject: 'Chemistry',
    chapter: 'Organic Name Reactions',
    text: q.question,
    options: q.options.map((opt, oIdx) => ({
      id: ['a', 'b', 'c', 'd'][oIdx],
      text: opt
    })),
    correctOption: ['a', 'b', 'c', 'd'][q.correctAnswer],
    explanation: q.explanation,
    difficulty: q.difficulty,
    subTopic: q.subTopic
  }));

  const testDefinitions = [
    {
      testId: 'jee-mains-CHAPTER-Chemistry-Organic-Name-Reactions-12',
      title: 'JEE Main Chapter Test: Organic Name Reactions',
      exam: 'jee-mains',
      type: 'CHAPTER',
      subject: 'Chemistry',
      chapter: 'Organic Name Reactions',
      classGrade: '12',
      questionsCount: formattedQuestions.length,
      duration: 60,
      totalMarks: formattedQuestions.length * 4,
      questions: formattedQuestions,
      updatedAt: new Date()
    },
    {
      testId: 'neet-CHAPTER-Chemistry-Organic-Name-Reactions-12',
      title: 'NEET Chapter Test: Organic Name Reactions',
      exam: 'neet',
      type: 'CHAPTER',
      subject: 'Chemistry',
      chapter: 'Organic Name Reactions',
      classGrade: '12',
      questionsCount: formattedQuestions.length,
      duration: 60,
      totalMarks: formattedQuestions.length * 4,
      questions: formattedQuestions,
      updatedAt: new Date()
    }
  ];

  for (const tDef of testDefinitions) {
    await testPapers.updateOne(
      { testId: tDef.testId },
      { $set: tDef },
      { upsert: true }
    );
    console.log(`✅ Synced test paper: ${tDef.testId}`);
  }

  // 3. Update jee_topics_by_subject.json
  const topicsFilePath = path.join(process.cwd(), 'jee_topics_by_subject.json');
  if (fs.existsSync(topicsFilePath)) {
    const topicsData = JSON.parse(fs.readFileSync(topicsFilePath, 'utf8'));
    if (!topicsData.Chemistry['Organic Name Reactions']) {
      topicsData.Chemistry['Organic Name Reactions'] = [
        "Aldol Condensation and Cross-Aldol",
        "Cannizzaro and Cross-Cannizzaro Reaction",
        "Clemmensen Reduction",
        "Coupling Reaction and Azo Dyes",
        "Diazotization Reaction",
        "Etard Reaction",
        "Fittig and Wurtz-Fittig Reaction",
        "Friedel-Crafts Alkylation and Acylation",
        "Gabriel Phthalimide Synthesis",
        "Gattermann Reaction",
        "Hell-Volhard-Zelinsky (HVZ) Reaction",
        "Hoffmann Bromamide Degradation",
        "Kolbe's Reaction",
        "Reimer-Tiemann Reaction",
        "Rosenmund Reduction",
        "Sandmeyer Reaction",
        "Stephen Reaction",
        "Williamson Ether Synthesis",
        "Wolff-Kishner Reduction",
        "Wurtz Reaction"
      ];
      fs.writeFileSync(topicsFilePath, JSON.stringify(topicsData, null, 2), 'utf8');
      console.log('✅ Updated jee_topics_by_subject.json with Organic Name Reactions under Chemistry.');
    }
  }

  // 4. Update chapter_chemistry.json in questionsjeem & questionsneet
  const jeemChapterPath = path.join(process.cwd(), 'src/data/questionsjeem/chapter_chemistry.json');
  const neetChapterPath = path.join(process.cwd(), 'src/data/questionsneet/chapter_chemistry.json');

  const formattedForJson = formattedQuestions.map(q => ({
    id: q.id,
    subject: q.subject,
    chapter: q.chapter,
    subTopic: q.subTopic,
    difficulty: q.difficulty,
    text: q.text,
    options: q.options,
    correctOption: q.correctOption,
    explanation: q.explanation
  }));

  for (const filePath of [jeemChapterPath, neetChapterPath]) {
    let existing = {};
    if (fs.existsSync(filePath)) {
      try {
        existing = JSON.parse(fs.readFileSync(filePath, 'utf8')) || {};
      } catch (e) {
        existing = {};
      }
    }
    existing['Organic Name Reactions'] = formattedForJson;
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
    console.log(`✅ Updated ${filePath} with 'Organic Name Reactions'.`);
  }

  await client.close();
  console.log('\n🎉 ALL UPDATES COMPLETED SUCCESSFULLY!');
}

main().catch(console.error);
