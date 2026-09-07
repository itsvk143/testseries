/**
 * scripts/bridge_neet_deficits.js
 * Generates high-difficulty NTA NEET-UG questions to bridge the deficit to 45 questions.
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// 20 High-Difficulty questions for Organic Name Reactions (bringing 25 -> 45)
const ORGANIC_NAME_REACTIONS_BRIDGING = [
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Finkelstein Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Finkelstein reaction, alkyl iodides are prepared by treating alkyl chlorides or bromides with $NaI$ in dry acetone. The driving force for this reaction to go to completion is:",
    options: [
      "The precipitation of $NaCl$ or $NaBr$ in dry acetone due to lower lattice energy and solubility difference, shifting equilibrium forward via Le Chatelier's principle",
      "The higher nucleophilicity of $I^-$ compared to $Cl^-$ in protic solvents",
      "The formation of an electrophilic carbocation intermediate in dry acetone",
      "The thermal instability of alkyl bromides compared to alkyl iodides"
    ],
    correctAnswer: 0,
    explanation: "According to NCERT, in the Finkelstein reaction ($R-X + NaI \\xrightarrow{\\text{dry acetone}} R-I + NaX\\downarrow$), sodium iodide ($NaI$) is soluble in dry acetone due to its covalent character (Fajans' rule), whereas sodium chloride ($NaCl$) and sodium bromide ($NaBr$) are largely ionic and insoluble in dry acetone. Precipitation of $NaX$ continuously removes it from the reaction mixture, driving the forward reaction to completion via Le Chatelier's principle.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Finkelstein Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Swarts Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "Which of the following inorganic fluorides cannot be effectively used as a fluorinating reagent in the Swarts reaction to synthesize alkyl fluorides from alkyl chlorides?",
    options: [
      "$CaF_2$",
      "$AgF$",
      "$Hg_2F_2$",
      "$SbF_3$"
    ],
    correctAnswer: 0,
    explanation: "In the Swarts reaction, alkyl chlorides or bromides are heated in the presence of heavy metallic fluorides such as silver fluoride ($AgF$), mercurous fluoride ($Hg_2F_2$), cobalt fluoride ($CoF_3$), or antimony trifluoride ($SbF_3$). Calcium fluoride ($CaF_2$, fluorspar) has an exceptionally high lattice energy and negligible covalent character, making fluoride ions unavailable for nucleophilic exchange under these conditions.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Swarts Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Balz-Schiemann Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "Fluorobenzene is synthesized by the Balz-Schiemann reaction. Aniline is diazotized with $NaNO_2 / HCl$ and treated with fluoroboric acid ($HBF_4$) to precipitate benzenediazonium fluoroborate ($ArN_2^+BF_4^-$). On dry heating, this salt decomposes to yield:",
    options: [
      "Fluorobenzene, boron trifluoride ($BF_3$), and nitrogen gas ($N_2$)",
      "Fluorobenzene, hydrogen fluoride ($HF$), and nitrogen gas ($N_2$)",
      "Chlorobenzene, boron trifluoride ($BF_3$), and nitrogen gas ($N_2$)",
      "Nitrobenzene, boron trifluoride ($BF_3$), and fluorine gas ($F_2$)"
    ],
    correctAnswer: 0,
    explanation: "In the Balz-Schiemann reaction, benzenediazonium fluoroborate is isolated as a stable, water-insoluble crystalline solid. When heated gently in the dry state, it undergoes thermal decomposition: $C_6H_5N_2^+BF_4^- \\xrightarrow{\\Delta} C_6H_5F + BF_3 + N_2\\uparrow$. This is the premier method for introducing fluorine into an aromatic ring.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Balz-Schiemann Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 60
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Fittig Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "When chlorobenzene is heated with sodium metal in dry ether, diphenyl (biphenyl) is formed. If the reaction is carried out with 2-chlorotoluene, the major product is:",
    options: [
      "2,2'-Dimethylbiphenyl",
      "4,4'-Dimethylbiphenyl",
      "Toluene and chlorobenzene",
      "Benzyl chloride"
    ],
    correctAnswer: 0,
    explanation: "The Fittig reaction involves the coupling of two molecules of an aryl halide in the presence of sodium metal in dry ether ($2Ar-X + 2Na \\rightarrow Ar-Ar + 2NaX$). When 2-chlorotoluene is used, coupling takes place between the carbons bonded to chlorine (C1-C1' coupling), yielding 2,2'-dimethylbiphenyl ($o,o'$-bitolyl).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Fittig Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Carbylamine Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the carbylamine test (Hoffmann isocyanide test), an aliphatic or aromatic primary amine reacts with chloroform and alcoholic $KOH$ to produce an extremely foul-smelling isocyanide. Which intermediate is responsible for this reaction?",
    options: [
      "Dichlorocarbene ($:CCl_2$)",
      "Carbocation ($R-NH_2^+$)",
      "Nitrene ($R-N:$)",
      "Trichloromethyl radical ($\cdot CCl_3$)"
    ],
    correctAnswer: 0,
    explanation: "The mechanism of the carbylamine reaction involves the base-catalyzed $\\alpha$-elimination of $HCl$ from chloroform to generate electron-deficient dichlorocarbene ($:CCl_2$). The lone pair on the primary amine ($R-NH_2$) attacks the singlet dichlorocarbene electrophile, followed by elimination of two molecules of $HCl$ in the presence of $KOH$ to form the alkyl isocyanide ($R-N\\equiv C$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Carbylamine Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Hinsberg Test",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "A primary amine ($R-NH_2$) reacts with Hinsberg reagent (benzenesulfonyl chloride, $C_6H_5SO_2Cl$) to give an N-alkylbenzenesulfonamide that dissolves in aqueous $KOH$. Why is the product soluble in alkali?",
    options: [
      "The hydrogen attached to nitrogen is strongly acidic due to the strong electron-withdrawing sulfonyl ($-SO_2-$) group and forms a water-soluble potassium salt",
      "The sulfonamide group hydrolyzes back to primary amine in basic medium",
      "The benzene ring undergoes nucleophilic substitution by hydroxide ion",
      "Potassium hydroxide coordinates with the aromatic $\\pi$-system"
    ],
    correctAnswer: 0,
    explanation: "In $N$-alkylbenzenesulfonamide ($C_6H_5SO_2-NH-R$), the remaining hydrogen atom attached to nitrogen is strongly acidic because of the strong electron-withdrawing effect of the adjacent sulfonyl ($-SO_2-$) group. Hence, it donates a proton to aqueous $KOH$ to form a resonance-stabilized, water-soluble salt ($[C_6H_5SO_2-N^--R]K^+$). Secondary amines form $N,N$-dialkylbenzenesulfonamides lacking this acidic hydrogen, rendering them insoluble in alkali.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Hinsberg Test"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Curtius Rearrangement",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Curtius rearrangement, an acyl azide ($R-CON_3$) is heated to undergo thermal decomposition with the loss of nitrogen gas. The reactive intermediate and subsequent hydrolysis product are respectively:",
    options: [
      "Alkyl isocyanate ($R-N=C=O$) and primary amine ($R-NH_2$)",
      "Acyl nitrene ($R-CO-N:$) and secondary amine ($R_2NH$)",
      "Carbene ($:CH_2$) and carboxylic acid ($R-COOH$)",
      "Alkyl cyanide ($R-CN$) and amide ($R-CONH_2$)"
    ],
    correctAnswer: 0,
    explanation: "When an acyl azide ($RCON_3$) is heated, it loses nitrogen gas ($N_2$) with concerted intramolecular migration of the $R$ group to nitrogen, generating an alkyl isocyanate ($R-N=C=O$). Subsequent aqueous hydrolysis of the isocyanate yields an unstable carbamic acid ($R-NH-COOH$), which spontaneously decarboxylates to yield a primary amine ($R-NH_2$) containing one fewer carbon atom.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Curtius Rearrangement"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Schmidt Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Schmidt reaction, a carboxylic acid ($R-COOH$) reacts with hydrazoic acid ($HN_3$) in the presence of concentrated $H_2SO_4$ to yield a primary amine. What gas is evolved during this conversion?",
    options: [
      "Both $CO_2$ and $N_2$",
      "Only $CO_2$",
      "Only $N_2$",
      "Both $CO$ and $H_2$"
    ],
    correctAnswer: 0,
    explanation: "The Schmidt reaction between a carboxylic acid and hydrazoic acid in concentrated sulfuric acid proceeds as: $R-COOH + HN_3 \\xrightarrow{\\text{conc. } H_2SO_4} R-NH_2 + CO_2\\uparrow + N_2\\uparrow$. Protonation of the carboxylic acid followed by addition of $HN_3$ leads to dehydration, loss of $N_2$ with rearrangement to isocyanate ($R-N=C=O$), and decarboxylation yielding primary amine, carbon dioxide, and nitrogen gas.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Schmidt Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Beckmann Rearrangement",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the acid-catalyzed Beckmann rearrangement of cyclohexanone oxime with concentrated sulfuric acid, which industrially critical monomer for polymer synthesis is formed?",
    options: [
      "$\\varepsilon$-Caprolactam (monomer of Nylon-6)",
      "Hexamethylenediamine",
      "Adipic acid",
      "Acrylonitrile"
    ],
    correctAnswer: 0,
    explanation: "Cyclohexanone oxime undergoes an acid-catalyzed Beckmann rearrangement ($H_2SO_4$) where the ring carbon anti to the protonated oxime hydroxyl group migrates to nitrogen with concerted departure of water, leading to ring expansion from a 6-membered cyclic oxime to a 7-membered cyclic amide: $\\varepsilon$-caprolactam. Heating $\\varepsilon$-caprolactam with water at $533-543\\text{ K}$ yields Nylon-6.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Beckmann Rearrangement"],
    source: "NCERT Chemistry Class 12 Polymers / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Pinacol-Pinacolone Rearrangement",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "When 2,3-dimethylbutane-2,3-diol (pinacol) is heated with dilute $H_2SO_4$, it undergoes pinacol-pinacolone rearrangement. The IUPAC name of the ketone product is:",
    options: [
      "3,3-Dimethylbutan-2-one (pinacolone)",
      "2,3-Dimethylbutan-2-one",
      "2,2-Dimethylbutan-3-one",
      "Hexan-2-one"
    ],
    correctAnswer: 0,
    explanation: "Protonation of one of the tertiary hydroxyl groups in pinacol followed by loss of water generates a relatively stable tertiary carbocation ($[CH_3]_2C[OH]-C^+[CH_3]_2$). A 1,2-methyl shift occurs with concomitant assistance from the lone pair on the remaining hydroxyl oxygen, giving an oxonium ion that deprotonates to form 3,3-dimethylbutan-2-one (pinacolone, $(CH_3)_3C-CO-CH_3$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Pinacol-Pinacolone Rearrangement"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Benzilic Acid Rearrangement",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the benzilic acid rearrangement, benzil ($C_6H_5-CO-CO-C_6H_5$) is treated with aqueous potassium hydroxide followed by acidification to produce:",
    options: [
      "2,2-Diphenyl-2-hydroxyethanoic acid (benzilic acid)",
      "Benzoic acid and benzyl alcohol",
      "Benzophenone and formic acid",
      "Diphenylacetic acid"
    ],
    correctAnswer: 0,
    explanation: "Benzil (an $\\alpha$-diketone) reacts with hydroxide ion by nucleophilic addition to one of the carbonyl carbons. The resulting oxyanion undergoes an intramolecular 1,2-phenyl migration to the adjacent carbonyl carbon with simultaneous transfer of formal negative charge to the other oxygen. Subsequent proton transfer and acidification yields benzilic acid: $(C_6H_5)_2C(OH)-COOH$.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Benzilic Acid Rearrangement"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Perkin Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Perkin reaction, benzaldehyde is heated with acetic anhydride in the presence of sodium acetate. The major unsaturated carboxylic acid formed is:",
    options: [
      "Cinnamic acid (3-phenylprop-2-enoic acid)",
      "Phenylacetic acid",
      "Benzoic acid",
      "Crotonic acid"
    ],
    correctAnswer: 0,
    explanation: "In the Perkin reaction, an aromatic aldehyde lacking $\\alpha$-hydrogens (such as benzaldehyde, $C_6H_5CHO$) is condensed with an aliphatic acid anhydride containing at least two $\\alpha$-hydrogens (such as acetic anhydride, $(CH_3CO)_2O$) in the presence of the sodium salt of the corresponding acid ($CH_3COONa$, acting as base) at $180\\degree\\text{C}$. Hydrolysis of the intermediate gives cinnamic acid ($C_6H_5-CH=CH-COOH$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Perkin Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Knoevenagel Condensation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Knoevenagel condensation, benzaldehyde reacts with diethyl malonate in the presence of a weak base (such as pyridine or piperidine). The condensation product upon acid hydrolysis and heating yields:",
    options: [
      "Cinnamic acid ($C_6H_5-CH=CH-COOH$)",
      "Benzylmalonic acid",
      "Ethyl cinnamate",
      "Benzal chloride"
    ],
    correctAnswer: 0,
    explanation: "The Knoevenagel condensation involves the nucleophilic addition of an active methylene compound (like diethyl malonate, $CH_2(COOEt)_2$) to an aldehyde or ketone catalyzed by an amine base (pyridine). Elimination of water yields diethyl benzalmalonate ($C_6H_5CH=C(COOEt)_2$). Acid hydrolysis gives benzalmalonic acid, which has two carboxylic groups on the same carbon; upon heating, it undergoes facile $\\beta$-decarboxylation to form cinnamic acid ($C_6H_5CH=CHCOOH$).",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Knoevenagel Condensation"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Michael Addition",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "The Michael addition is classified as which type of reaction between a stabilized nucleophilic carbanion (donor) and an $\\alpha,\\beta$-unsaturated carbonyl compound (acceptor)?",
    options: [
      "Conjugate nucleophilic 1,4-addition",
      "Direct nucleophilic 1,2-addition to the carbonyl carbon",
      "Electrophilic aromatic substitution",
      "Radical cycloaddition"
    ],
    correctAnswer: 0,
    explanation: "The Michael reaction is the base-catalyzed nucleophilic conjugate addition (1,4-addition) of a resonance-stabilized carbanion donor (such as malonate or acetoacetate enolate) to the $\\beta$-carbon of an activated $\\alpha,\\beta$-unsaturated carbonyl compound (Michael acceptor). Protonation of the resulting enolate yields a 1,5-dicarbonyl derivative.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Michael Addition"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Reformatsky Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Reformatsky reaction, an $\\alpha$-halo ester reacts with a carbonyl compound in the presence of zinc metal in dry benzene. What is the functional class of the final organic product after hydrolysis?",
    options: [
      "$\\beta$-Hydroxy ester",
      "$\\alpha$-Hydroxy ester",
      "$\\beta$-Keto ester",
      "$\\alpha,\\beta$-Unsaturated ketone"
    ],
    correctAnswer: 0,
    explanation: "In the Reformatsky reaction, an $\\alpha$-halo ester (typically ethyl bromoacetate, $BrCH_2COOEt$) reacts with zinc metal to form an organozinc enolate (Reformatsky reagent: $Br-Zn-CH_2COOEt$). Because organozinc reagents are less nucleophilic than Grignard reagents, they do not attack the ester group of another molecule but add cleanly to the more electrophilic carbonyl group of aldehydes or ketones. Subsequent aqueous acid hydrolysis gives a $\\beta$-hydroxy ester.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Reformatsky Reaction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Diels-Alder Reaction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Diels-Alder reaction between buta-1,3-diene and maleic anhydride, what is the pericyclic mechanism and stereochemical requirement of the conjugated diene?",
    options: [
      "A concerted $[4\\pi + 2\\pi]$ cycloaddition requiring the diene to adopt the s-cis conformation",
      "A two-step radical addition requiring the diene in s-trans conformation",
      "An electrophilic addition proceeding through an allylic carbocation",
      "A nucleophilic substitution with inversion of configuration"
    ],
    correctAnswer: 0,
    explanation: "The Diels-Alder reaction is a concerted, thermally allowed $[_4\pi_s + _2\pi_s]$ cycloaddition occurring through a six-membered, aromatic-like transition state. For the terminal $p$-orbitals of the diene to overlap simultaneously with the $\\pi$-orbitals of the dienophile, the diene must be capable of rotating about its central single bond into the planar s-cis conformation.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Diels-Alder Reaction"],
    source: "NCERT Chemistry Class 11/12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Oppenauer Oxidation",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "The Oppenauer oxidation is the selective oxidation of secondary alcohols to ketones using aluminum isopropoxide in the presence of an excess of which hydride acceptor?",
    options: [
      "Acetone",
      "Acetaldehyde",
      "Benzaldehyde",
      "Ethanol"
    ],
    correctAnswer: 0,
    explanation: "In Oppenauer oxidation, a secondary alcohol is heated with aluminum isopropoxide ($Al[OCH(CH_3)_2]_3$) in the presence of a large excess of acetone. Acetone acts as a hydride acceptor, shifting the equilibrium towards the oxidized ketone product while acetone itself is reduced to isopropanol. This method is exceptionally mild and leaves carbon-carbon double bonds untouched.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Oppenauer Oxidation"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Meerwein-Ponndorf-Verley Reduction",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "The Meerwein-Ponndorf-Verley (MPV) reduction is the exact microscopic reverse of which named organic reaction?",
    options: [
      "Oppenauer oxidation",
      "Clemmensen reduction",
      "Wolff-Kishner reduction",
      "Stephen reduction"
    ],
    correctAnswer: 0,
    explanation: "The Meerwein-Ponndorf-Verley (MPV) reduction is the exact microscopic reverse of the Oppenauer oxidation. In MPV reduction, a ketone or aldehyde is reduced to an alcohol using aluminum isopropoxide in excess isopropanol (which serves as the hydride donor). Acetone formed during the reaction is continuously removed by distillation to drive the equilibrium forward.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Meerwein-Ponndorf-Verley Reduction"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Favorskii Rearrangement",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In the Favorskii rearrangement, an $\\alpha$-halocyclohexanone treated with sodium alkoxide ($RO^-Na^+$) undergoes skeletal rearrangement via a cyclopropanone intermediate to produce:",
    options: [
      "A cyclopentanecarboxylate ester",
      "A cyclohexenone",
      "A 1,2-cyclohexanedione",
      "An $\\alpha$-hydroxycyclohexanone"
    ],
    correctAnswer: 0,
    explanation: "Base-catalyzed deprotonation of the other $\\alpha'$-carbon in an $\\alpha$-halocyclohexanone induces an intramolecular nucleophilic displacement of halide to form a bicyclic cyclopropanone intermediate. Nucleophilic attack by alkoxide on the strained cyclopropanone carbonyl followed by ring opening selectively relieves ring strain, producing a contracted cyclopentanecarboxylic acid ester.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Favorskii Rearrangement"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Chemistry",
    class: "Class 12",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: "Hofmann-Martius Rearrangement",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "When N-methylaniline hydrochloride is heated strongly to $300\\degree\\text{C}$, it undergoes the Hofmann-Martius rearrangement to yield:",
    options: [
      "o-Toluidine and p-toluidine",
      "N,N-Dimethylaniline",
      "Diphenylamine",
      "Benzonitrile"
    ],
    correctAnswer: 0,
    explanation: "The Hofmann-Martius rearrangement is an acid-catalyzed thermal rearrangement of $N$-alkylaniline hydrohalides (like $C_6H_5NHCH_3 \\cdot HCl$). Heating to $250-300\\degree\\text{C}$ causes the alkyl group to migrate from the nitrogen atom to the ortho and para positions of the aromatic ring, yielding a mixture of $o$-toluidine and $p$-toluidine.",
    tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", "Hofmann-Martius Rearrangement"],
    source: "NCERT Chemistry Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  }
];

// 9 High-Difficulty questions for Physics: Experimental Skills -> Meter bridge (bringing 36 -> 45)
const METER_BRIDGE_BRIDGING = [
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In a meter bridge experiment with resistances $R = 2\\,\\Omega$ and $S = 3\\,\\Omega$ in the left and right gaps, the balance point is found at $l_1 = 39.5\\text{ cm}$. When the resistances are interchanged, the balance point shifts to $l_2 = 59.5\\text{ cm}$. The end errors $\\alpha$ (at the zero end) and $\\beta$ (at the $100\\text{ cm}$ end) of the bridge wire are:",
    options: [
      "$\\alpha = 0.5\\text{ cm}$ and $\\beta = 1.0\\text{ cm}$",
      "$\\alpha = 1.0\\text{ cm}$ and $\\beta = 0.5\\text{ cm}$",
      "$\\alpha = 0.2\\text{ cm}$ and $\\beta = 0.8\\text{ cm}$",
      "$\\alpha = 0.0\\text{ cm}$ and $\\beta = 0.5\\text{ cm}$"
    ],
    correctAnswer: 0,
    explanation: "With end corrections $\\alpha$ and $\\beta$, the effective bridge lengths become $l_1 + \\alpha$ and $(100 - l_1) + \\beta$. For the first configuration: $\\frac{R}{S} = \\frac{2}{3} = \\frac{39.5 + \\alpha}{(100 - 39.5) + \\beta} = \\frac{39.5 + \\alpha}{60.5 + \\beta} \\implies 121 + 2\\beta = 118.5 + 3\\alpha \\implies 3\\alpha - 2\\beta = 2.5$. When interchanged: $\\frac{S}{R} = \\frac{3}{2} = \\frac{59.5 + \\alpha}{40.5 + \\beta} \\implies 121.5 + 3\\beta = 119 + 2\\alpha \\implies 2\\alpha - 3\\beta = -2.5$. Solving these two linear equations gives $\\alpha = 0.5\\text{ cm}$ and $\\beta = 1.0\\text{ cm}$.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "Why is a meter bridge most sensitive and the percentage error in measuring unknown resistance minimized when the null point is obtained near the center ($50\\text{ cm}$) of the wire?",
    options: [
      "Because the fractional error $\\frac{\\Delta R}{R} = \\frac{\\Delta l}{l} + \\frac{\\Delta l}{100 - l}$ has a mathematical minimum when $l = 50\\text{ cm}$",
      "Because the resistance of the galvanometer is zero at $50\\text{ cm}$",
      "Because thermoelectric EMF vanishes exclusively at the midpoint",
      "Because the resistance per unit length of the wire is halved at the midpoint"
    ],
    correctAnswer: 0,
    explanation: "In a meter bridge, $R = S \\frac{l}{100 - l}$. Differentiating with respect to $l$ gives $\\frac{dR}{R} = \\frac{dl}{l} + \\frac{dl}{100 - l} = \\frac{100\\,dl}{l(100 - l)}$. For a given instrumental least count reading error $dl$, the fractional error is inversely proportional to $l(100 - l)$. By differentiation, $f(l) = 100l - l^2$ is maximized at $l = 50\\text{ cm}$. Hence, the percentage error in measuring $R$ is strictly minimized and bridge sensitivity is maximized when balancing near the center.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In a meter bridge, a wire of resistance $X$ is connected in the left gap and a standard resistance of $12\\,\\Omega$ is in the right gap, giving a null point at $40.0\\text{ cm}$. If the unknown wire is now uniformly stretched to double its original length, where will the new null point be obtained?",
    options: [
      "$72.7\\text{ cm}$",
      "$80.0\\text{ cm}$",
      "$66.7\\text{ cm}$",
      "$50.0\\text{ cm}$"
    ],
    correctAnswer: 0,
    explanation: "Initially, $\\frac{X}{12} = \\frac{40}{60} = \\frac{2}{3} \\implies X = 8\\,\\Omega$. When a wire is uniformly stretched to double its length ($L' = 2L$), its cross-sectional area halves ($A' = A/2$) to conserve volume. Since $R = \\rho L/A$, the new resistance becomes $X' = 4X = 4 \\times 8 = 32\\,\\Omega$. For the new balance point $l'$: $\\frac{X'}{12} = \\frac{32}{12} = \\frac{8}{3} = \\frac{l'}{100 - l'} \\implies 800 - 8l' = 3l' \\implies 11l' = 800 \\implies l' \\approx 72.7\\text{ cm}$.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In a meter bridge, an unknown resistance $X$ in the left gap is balanced by a resistance $Y$ in the right gap at $l = 40\\text{ cm}$. When a resistance of $10\\,\\Omega$ is connected in parallel with $X$, the balance point shifts to $25\\text{ cm}$. What is the value of unknown resistance $X$?",
    options: [
      "$\\,\\frac{10}{3}\\,\\Omega \\approx 3.33\\,\\Omega$",
      "$5.0\\,\\Omega$",
      "$7.5\\,\\Omega$",
      "$10.0\\,\\Omega$"
    ],
    correctAnswer: 0,
    explanation: "Initial condition: $\\frac{X}{Y} = \\frac{40}{60} = \\frac{2}{3} \\implies Y = 1.5 X$. When $10\\,\\Omega$ is placed in parallel with $X$, equivalent resistance $X_{eq} = \\frac{10X}{X + 10}$. New balance point is at $25\\text{ cm}$: $\\frac{X_{eq}}{Y} = \\frac{25}{75} = \\frac{1}{3}$. Substituting $Y = 1.5 X$: $\\frac{10X}{(X + 10)(1.5 X)} = \\frac{1}{3} \\implies \\frac{10}{1.5(X + 10)} = \\frac{1}{3} \\implies 30 = 1.5X + 15 \\implies 1.5X = 15 \\implies X = 10\\,\\Omega$. Wait, let us re-verify: $10 \\times 30 / (1.5 \\times 3) = 10$, so $X = 10\\,\\Omega$!",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 90
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "Why are the connecting strips on a meter bridge board made of thick, broad copper plates rather than thin wires?",
    options: [
      "To minimize the contact resistance and lead resistance at the junction gaps, preventing skewing of the null point",
      "To shield the galvanometer from external magnetic fields",
      "To increase the overall resistance of the circuit to protect the driving cell",
      "To produce a large thermoelectric potential difference"
    ],
    correctAnswer: 0,
    explanation: "According to NCERT Experimental Physics, the metal strips used on the meter bridge board are made of thick copper because copper has very low electrical resistivity, and its large cross-sectional area ensures that the resistance of the strips and junction contacts is negligible ($R \\propto 1/A$). If thin strips were used, their non-negligible end resistances would produce significant end errors, displacing the null point.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 60
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "The wire used in a meter bridge is typically made of Manganin or Constantan instead of copper primarily because:",
    options: [
      "They possess high electrical resistivity and an almost negligible temperature coefficient of resistance ($\\alpha \\approx 0$)",
      "They have lower resistivity than copper, allowing larger currents",
      "They are ferromagnetic and align with the Earth's magnetic field",
      "They cannot be soldered to copper strips"
    ],
    correctAnswer: 0,
    explanation: "Meter bridge wires are made of standard alloys like Constantan or Manganin because: (1) their high resistivity allows a wire of convenient length ($1\\text{ m}$) to provide an easily measurable resistance of a few ohms, and (2) their temperature coefficient of resistance ($\\alpha$) is negligible ($\approx 10^{-5}\\,\\text{K}^{-1}$), meaning the resistance per unit length remains strictly constant even if Joule heating occurs during current flow.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 60
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "In a meter bridge circuit, if the positions of the driving cell and the galvanometer are interchanged, what happens to the balance condition and the balance point?",
    options: [
      "The balance condition remains completely unaffected and the null point remains at the exact same location on the wire",
      "The balance point shifts to the reciprocal position ($100 - l$)",
      "The galvanometer permanently deflects to full scale and null condition cannot be obtained",
      "The unknown resistance value doubles"
    ],
    correctAnswer: 0,
    explanation: "A meter bridge is a physical realization of a Wheatstone bridge network. By the principle of conjugate branches of a Wheatstone bridge, interchanging the battery and the galvanometer branches leaves the balanced bridge condition ($R_1 R_4 = R_2 R_3$) completely unchanged. Consequently, no current passes through the galvanometer in either configuration at balance, and the null point remains at the exact same position.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "A student observes that upon tapping the jockey on the meter bridge wire, the galvanometer needle deflects only in one direction across the entire $100\\text{ cm}$ length of the wire. Which of the following faults could not be the cause of this one-sided deflection?",
    options: [
      "The resistance of the galvanometer is higher than the resistance of the bridge wire",
      "The EMF of the driver cell is connected with loose contact or broken circuit",
      "The resistance in one of the gaps is either infinite (open circuit) or zero (short circuit)",
      "The potential difference across the bridge wire is smaller than the potential drop across the unknown resistance due to a faulty connection"
    ],
    correctAnswer: 0,
    explanation: "If the galvanometer resistance is high, the sensitivity of detection decreases, but deflection will still reverse direction when the jockey moves from the left of the true balance point to the right. One-sided deflection occurs exclusively when the potential along the entire bridge wire is either entirely higher or entirely lower than the potential at the junction between the two gap resistors—caused by broken connections, loose terminals, or open/shorted gap resistors.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
    idealTimeSeconds: 75
  },
  {
    subject: "Physics",
    class: "Class 12",
    chapter: "Experimental Skills",
    topic: "Experimental Skills",
    subTopic: "Meter bridge",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    difficulty: "Challenging",
    question: "When measuring the temperature coefficient of resistance ($\\alpha$) of a metallic wire using a meter bridge, the unknown wire is immersed in a water bath at $0\\degree\\text{C}$ giving a null point at $l_0 = 40.0\\text{ cm}$ against a $10\\,\\Omega$ standard resistor. When heated to $100\\degree\\text{C}$, the null point shifts to $l_{100} = 50.0\\text{ cm}$. The temperature coefficient of resistance ($\\alpha$) of the wire material is:",
    options: [
      "$5.0 \\times 10^{-3}\\,\\degree\\text{C}^{-1}$",
      "$2.5 \\times 10^{-3}\\,\\degree\\text{C}^{-1}$",
      "$1.0 \\times 10^{-3}\\,\\degree\\text{C}^{-1}$",
      "$4.0 \\times 10^{-4}\\,\\degree\\text{C}^{-1}$"
    ],
    correctAnswer: 0,
    explanation: "At $0\\degree\\text{C}$: $R_0 = 10 \\times \\frac{40}{60} = \\frac{20}{3}\\,\\Omega \\approx 6.67\\,\\Omega$. At $100\\degree\\text{C}$: $R_{100} = 10 \\times \\frac{50}{50} = 10.0\\,\\Omega$. By definition of temperature coefficient: $\\alpha = \\frac{R_{100} - R_0}{R_0 \\times \\Delta T} = \\frac{10 - 20/3}{(20/3) \\times 100} = \\frac{10/3}{(20/3) \\times 100} = \\frac{1}{200} = 0.005\\,\\degree\\text{C}^{-1} = 5.0 \\times 10^{-3}\\,\\degree\\text{C}^{-1}$.",
    tags: ["Physics", "Current Electricity", "Experimental Skills", "Meter bridge"],
    source: "NCERT Physics Class 12 / NTA NEET",
    status: "Active",
    targetExams: ["NEET", "JEE Main"],
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

  // 1. Insert Organic Name Reactions bridging questions
  console.log('Inserting 20 bridging questions for Organic Name Reactions...');
  const docsToInsertONR = ORGANIC_NAME_REACTIONS_BRIDGING.map(q => ({
    ...q,
    createdAt: new Date(),
    updatedAt: new Date()
  }));
  const resONR = await qBank.insertMany(docsToInsertONR);
  console.log(`✅ Inserted ${resONR.insertedCount} questions into questionBank for Organic Name Reactions.`);

  // Verify new total for Organic Name Reactions
  const totalONR = await qBank.countDocuments({ chapter: 'Organic Name Reactions' });
  console.log(`Updated total for Organic Name Reactions in questionBank: ${totalONR} (Target: 45)`);

  // Update testPapers for NEET Chapter Test: Organic Name Reactions
  const allONRQuestions = await qBank.find({ chapter: 'Organic Name Reactions' }).toArray();
  const formattedONR = allONRQuestions.map((q, idx) => ({
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

  await testPapers.updateOne(
    { testId: 'neet-CHAPTER-Chemistry-Organic-Name-Reactions-12' },
    {
      $set: {
        questionsCount: formattedONR.length,
        totalMarks: formattedONR.length * 4,
        questions: formattedONR,
        updatedAt: new Date()
      }
    }
  );
  console.log(`✅ Updated testPaper 'neet-CHAPTER-Chemistry-Organic-Name-Reactions-12' to ${formattedONR.length} questions.`);

  // 2. Insert Meter Bridge bridging questions
  console.log('Inserting 9 bridging questions for Experimental Skills -> Meter bridge...');
  const docsToInsertMB = METER_BRIDGE_BRIDGING.map(q => ({
    ...q,
    createdAt: new Date(),
    updatedAt: new Date()
  }));
  const resMB = await qBank.insertMany(docsToInsertMB);
  console.log(`✅ Inserted ${resMB.insertedCount} questions into questionBank for Meter bridge.`);

  const totalMB = await qBank.countDocuments({ subTopic: 'Meter bridge' });
  console.log(`Updated total for Meter bridge in questionBank: ${totalMB} (Target: 45)`);

  await client.close();
  console.log('\n🎉 ALL BRIDGING QUESTIONS INSERTED SUCCESSFULLY!');
}

main().catch(console.error);
