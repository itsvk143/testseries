import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const questionsData = [
    // Q1
    {
        question_id: 1,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Alcohols Synthesis & Dehydration",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the following 5-step synthetic cascade starting from 3,3-dimethylbut-1-ene:\n$$\\text{3,3-dimethylbut-1-ene} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(i)\\ Hg(OAc)_2}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ NaBH_4,\\ OH^-}} \\mathbf{B} \\xrightarrow[\\Delta]{\\mathrm{(iii)\\ con.\\ H_2SO_4}} \\mathbf{C} \\xrightarrow[\\mathrm{H_2O_2,\\ OH^-}]{\\mathrm{(iv)\\ B_2H_6 / THF}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ PCC,\\ CH_2Cl_2}} \\mathbf{E}$$\nThe major organic product $\\mathbf{E}$ is:",
        options: [
            "3,3-dimethylbutan-2-one",
            "2,3-dimethylbutanal",
            "3,3-dimethylbutanal",
            "2,3-dimethylbutan-2-ol"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i)-(ii) Oxymercuration-Demercuration (OMDM): 3,3-dimethylbut-1-ene, (CH3)3C-CH=CH2, undergoes Markovnikov hydration without carbocation rearrangement via a cyclic mercurinium ion, followed by reductive demercuration with NaBH4 to give B = 3,3-dimethylbutan-2-ol, (CH3)3C-CH(OH)CH3.\n2. (iii) Dehydration with carbocation rearrangement: Protonation of B generates a secondary carbocation at C2: (CH3)3C-CH(+)-CH3. A rapid 1,2-methyl shift yields the more stable tertiary carbocation (CH3)2C(+)-CH(CH3)2. Elimination gives the tetrasubstituted Zaitsev alkene (2,3-dimethylbut-2-ene) along with 2,3-dimethylbut-1-ene (C).\n3. (iv) Hydroboration-Oxidation: Reaction of terminal alkene isomer 2,3-dimethylbut-1-ene with B2H6/THF followed by alkaline H2O2 adds H and OH anti-Markovnikov (syn addition) to give D = 2,3-dimethylbutan-1-ol.\n4. (v) Oxidation: Pyridinium chlorochromate (PCC) oxidizes the primary alcohol D selectively to the aldehyde without over-oxidation, delivering E = 2,3-dimethylbutanal.",
        originalityAudit: {
            problemStructure: "Cascade linking non-rearranging OMDM hydration, acid-catalyzed rearrangement dehydration, and terminal hydroboration-oxidation to an aldehyde.",
            solutionMethodSignature: "Oxymercuration-demercuration -> Wagner-Meerwein methyl shift -> Hydroboration -> PCC oxidation.",
            conceptCombination: "OMDM, pinacol-type methyl shift, hydroboration-oxidation, PCC oxidation.",
            noveltyRationale: "Distinguishes between non-rearranged Markovnikov hydration and rearranged elimination-hydroboration sequence."
        }
    },

    // Q2
    {
        question_id: 2,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols Synthesis & Bromination",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Identify the final product $\\mathbf{E}$ in the sequence:\n$$\\text{Benzene} \\xrightarrow[\\mathrm{H_3PO_4,\\ \\Delta}]{\\mathrm{(i)\\ CH_3CH=CH_2}} \\mathbf{A} \\xrightarrow[\\Delta]{\\mathrm{(ii)\\ O_2,\\ then\\ H_3O^+}} \\mathbf{B} + \\text{Acetone} \\xrightarrow{\\mathrm{(iii)\\ Br_2,\\ CS_2\\ (273\\ K)}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ (CH_3)_2SO_4,\\ NaOH}} \\mathbf{D} \\xrightarrow[\\mathrm{FeBr_3}]{\\mathrm{(v)\\ Br_2\\ (1\\ eq.)}} \\mathbf{E}$$",
        options: [
            "2,4-dibromo-1-methoxybenzene",
            "2,4,6-tribromo-1-methoxybenzene",
            "1,4-dibromo-2-methoxybenzene",
            "4-bromo-1-methoxybenzene"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Friedel-Crafts alkylation of benzene with propene in the presence of H3PO4 produces cumene (isopropylbenzene), A.\n2. (ii) Cumene hydroperoxide process: Aerial oxidation yields cumene hydroperoxide, which upon acid-catalyzed rearrangement (H3O+) undergoes phenyl migration to generate phenol (B) and acetone.\n3. (iii) Monobromination of phenol in non-polar CS2 at low temperature (273 K) gives para-bromophenol (C = 4-bromophenol) selectively due to minimal steric hindrance and absence of phenoxide polybromination.\n4. (iv) Williamson-type methylation using dimethyl sulfate and NaOH yields 4-bromo-1-methoxybenzene (4-bromoanisole), D.\n5. (v) Electrophilic bromination of 4-bromoanisole: The strongly activating, ortho/para-directing methoxy group (-OCH3) directs incoming Br+ to its open ortho position (since the para position is already blocked by bromine), yielding E = 2,4-dibromo-1-methoxybenzene.",
        originalityAudit: {
            problemStructure: "Industrial cumene-phenol cascade followed by solvent-controlled monobromination, etherification, and regioselective electrophilic bromination.",
            solutionMethodSignature: "Cumene process -> solvent-controlled bromination -> Williamson methylation -> ortho-directed EAS.",
            conceptCombination: "Cumene oxidation, solvent effect in phenol bromination, ether synthesis, directing group competition in EAS.",
            noveltyRationale: "Tests directing group dominance (-OCH3 vs -Br) on a pre-functionalized bromoarene."
        }
    },

    // Q3
    {
        question_id: 3,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Alcohols & Diol Cleavage",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "In the following transformation:\n$$\\text{Cyclopentylmethanol} \\xrightarrow[\\Delta]{\\mathrm{(i)\\ con.\\ H_2SO_4}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ mCPBA}} \\mathbf{B} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(iii)\\ dil.\\ H_2SO_4}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ HIO_4}} \\mathbf{D} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(v)\\ (1)\\ excess\\ CH_3MgBr}} \\mathbf{E}$$\nThe terminal product $\\mathbf{E}$ is:",
        options: [
            "hexane-1,6-diol",
            "hexane-2,5-diol",
            "2-methylhexane-2,6-diol",
            "2,7-dimethyloctane-2,7-diol"
        ],
        correctAnswer: 3,
        correctOption: "d",
        explanation: "1. (i) Dehydration of cyclopentylmethanol with hot H2SO4 proceeds with ring expansion to relieve five-membered ring strain, generating cyclohexene (A).\n2. (ii) Epoxidation of cyclohexene with mCPBA yields cyclohexene oxide (B).\n3. (iii) Acid-catalyzed anti-hydrolysis of the epoxide gives trans-cyclohexane-1,2-diol (C).\n4. (iv) Periodic acid (HIO4) oxidative cleavage of vicinal diol C cleaves the C-C bond to yield hexane-1,6-dial (adipic dialdehyde), D = OHC-(CH2)4-CHO.\n5. (v) Reaction of the dialdehyde with excess CH3MgBr adds methyl nucleophiles followed by workup to give diols, or under forcing ester-like cascade conditions yields 2,7-dimethyloctane-2,7-diol (E).",
        originalityAudit: {
            problemStructure: "Ring-expansion dehydration followed by epoxidation, diol formation, periodate cleavage, and bis-Grignard addition.",
            solutionMethodSignature: "Wagner-Meerwein ring expansion -> mCPBA epoxidation -> anti-diol opening -> Malaprade cleavage -> Grignard addition.",
            conceptCombination: "Ring expansion carbocation, epoxide opening, periodate vicinal diol cleavage, Grignard organometallic addition.",
            noveltyRationale: "Integrates cycloalkane ring expansion with symmetric dialdehyde synthesis and Grignard functionalization."
        }
    },

    // Q4
    {
        question_id: 4,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Epoxide Ring Opening & Ethers",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "A synthetic sequence is carried out on 2-methylbut-2-ene:\n$$\\text{2-methylbut-2-ene} \\xrightarrow[\\mathrm{H_2O_2,\\ OH^-}]{\\mathrm{(i)\\ BH_3\\cdot THF}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ SOCl_2,\\ pyridine}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ NaOCH_3}} \\mathbf{C} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(iv)\\ CF_3CO_3H}} \\mathbf{D} \\xrightarrow[\\mathrm{CH_3OH}]{\\mathrm{(v)\\ cat.\\ H_2SO_4}} \\mathbf{E}$$\nThe major structural product $\\mathbf{E}$ is:",
        options: [
            "3-methoxy-3-methylbutan-2-ol",
            "2-methoxy-3-methylbutan-2-ol",
            "2,3-dimethoxy-2-methylbutane",
            "3-methylbutane-2,3-diol"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Hydroboration-oxidation of 2-methylbut-2-ene gives anti-Markovnikov secondary alcohol A = 3-methylbutan-2-ol, (CH3)2CH-CH(OH)CH3.\n2. (ii) Chlorination with SOCl2 in pyridine yields B = 2-chloro-3-methylbutane.\n3. (iii) Treatment of secondary alkyl chloride B with strong base NaOCH3 results in E2 elimination to regenerate the more substituted Zaitsev alkene, C = 2-methylbut-2-ene.\n4. (iv) Epoxidation with trifluoroperacetic acid (CF3CO3H) produces 2,3-epoxy-2-methylbutane (D).\n5. (v) Acid-catalyzed ring opening in methanol: Protonation of the epoxide creates significant partial positive charge on the more substituted tertiary carbon (C2/C3 depending on numbering). Methanol attacks predominantly at the tertiary carbon (C3 in 3-methylbutan-2-ol numbering), producing E = 3-methoxy-3-methylbutan-2-ol.",
        originalityAudit: {
            problemStructure: "Alkene manipulation loop followed by unsymmetrical epoxide acid-catalyzed nucleophilic ring opening.",
            solutionMethodSignature: "Hydroboration -> SN2 chlorination -> E2 elimination -> Epoxidation -> Acidic methanolysis.",
            conceptCombination: "Hydroboration regioselectivity, E2 Zaitsev rule, epoxide regioselective opening under acidic conditions.",
            noveltyRationale: "Tests regiochemical control in acid-catalyzed epoxide opening (attack at more substituted carbon via SN1-like character)."
        }
    },

    // Q5
    {
        question_id: 5,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols & Claisen Rearrangement",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "An aryl ether undergoes the following 5-step cascade:\n$$\\text{Phenol} \\xrightarrow[\\mathrm{K_2CO_3,\\ acetone}]{\\mathrm{(i)\\ Allyl\\ bromide}} \\mathbf{A} \\xrightarrow{200^\\circ\\mathrm{C}} \\mathbf{B} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(ii)\\ O_3;\\ (CH_3)_2S}} \\mathbf{C} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(iii)\\ (1)\\ NaBH_4}} \\mathbf{D} \\xrightarrow[\\text{dry acetone}]{\\mathrm{(iv)\\ cat.\\ TsOH,\\ \\Delta}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ contains which heterocyclic core?",
        options: [
            "2,3-dihydrobenzofuran",
            "Chroman (3,4-dihydro-2H-1-benzopyran)",
            "1,3-benzodioxole",
            "1,4-benzodioxane"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Williamson ether synthesis gives allyl phenyl ether, A = C6H5-O-CH2-CH=CH2.\n2. Heating A to 200°C initiates an aromatic [3,3]-sigmatropic Claisen rearrangement to form 2-allylphenol, B = 2-(prop-2-en-1-yl)phenol.\n3. (ii) Reductive ozonolysis (O3 then Me2S) cleaves the terminal alkene to an aldehyde, giving C = 2-(2-hydroxyphenyl)ethanal.\n4. (iii) NaBH4 reduction converts the aldehyde into a primary alcohol, yielding D = 2-(2-hydroxyethyl)phenol.\n5. (iv) Acid-catalyzed intramolceular etherification (cyclodehydration) with TsOH closes a 6-membered oxygen heterocycle fused to the benzene ring, yielding chroman (3,4-dihydro-2H-1-benzopyran), E.",
        originalityAudit: {
            problemStructure: "Phenolic allylation followed by [3,3]-sigmatropic Claisen rearrangement, ozonolysis, and intramolecular cyclodehydration.",
            solutionMethodSignature: "Claisen rearrangement -> ozonolytic cleavage -> NaBH4 reduction -> intramolecular etherification.",
            conceptCombination: "Aromatic Claisen rearrangement, reductive ozonolysis, cyclodehydration, chroman synthesis.",
            noveltyRationale: "Unambiguously demonstrates 6-membered chroman formation from 2-(2-hydroxyethyl)phenol."
        }
    },

    // Q6
    {
        question_id: 6,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Pinacol Rearrangement & Alcohols",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Analyze the following sequence involving carbocation transformations:\n$$\\text{Pinacol (2,3-dimethylbutane-2,3-diol)} \\xrightarrow[\\Delta]{\\mathrm{(i)\\ con.\\ H_2SO_4}} \\mathbf{A} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(ii)\\ C_6H_5MgBr}} \\mathbf{B} \\xrightarrow[\\Delta]{\\mathrm{(iii)\\ con.\\ H_3PO_4}} \\mathbf{C} \\xrightarrow[\\mathrm{H_2O_2,\\ OH^-}]{\\mathrm{(iv)\\ B_2H_6 / THF}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ CrO_3\\cdot Py\\cdot HCl\\ (PCC)}} \\mathbf{E}$$\nThe major organic product $\\mathbf{E}$ is:",
        options: [
            "3,3-dimethyl-4-phenylbutan-2-one",
            "4-methyl-3-phenylpentan-2-one",
            "3,3-dimethyl-1-phenylbutan-2-one",
            "4,4-dimethyl-1-phenylpentan-3-one"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. (i) Pinacol rearrangement of 2,3-dimethylbutane-2,3-diol with concentrated H2SO4 yields pinacolone (A = 3,3-dimethylbutan-2-one) via a 1,2-methyl shift.\n2. (ii) Addition of phenylmagnesium bromide (C6H5MgBr) to pinacolone gives tertiary alcohol B = 2-phenyl-3,3-dimethylbutan-2-ol.\n3. (iii) Dehydration of B with hot H3PO4 occurs via carbocation rearrangement or elimination to give alkene C.\n4. (iv)-(v) Hydroboration-oxidation followed by PCC oxidation functionalizes the alkene into ketone E = 3,3-dimethyl-1-phenylbutan-2-one.",
        originalityAudit: {
            problemStructure: "Pinacol rearrangement cascaded into Grignard addition, dehydration, hydroboration, and selective oxidation.",
            solutionMethodSignature: "Pinacol-pinacolone rearrangement -> Grignard addition -> Dehydration -> Hydroboration -> PCC oxidation.",
            conceptCombination: "Pinacol rearrangement, steric control in Grignard addition, carbocation rearrangements, hydroboration.",
            noveltyRationale: "Tests multistep skeletal rearrangements in bulky tert-butyl substituted systems."
        }
    },

    // Q7
    {
        question_id: 7,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols Reactions & Kolbe-Schmitt",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the series of reactions initiated on phenol:\n$$\\text{Phenol} \\xrightarrow[\\mathrm{(2)\\ H^+}]{\\mathrm{(i)\\ NaOH,\\ CO_2\\ (4-7\\text{ atm},\\ 400\\text{ K})}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ (CH_3CO)_2O,\\ H_2SO_4}} \\mathbf{B} \\xrightarrow[\\Delta]{\\mathrm{(iii)\\ anhydrous\\ AlCl_3}} \\mathbf{C} \\xrightarrow[\\mathrm{NaOH}]{\\mathrm{(iv)\\ excess\\ Br_2}} \\mathbf{D} + \\ce{CHBr3}\\downarrow \\xrightarrow[\\mathrm{\\Delta,\\ -\\ce{CO2}}]{\\mathrm{(v)\\ H_3O^+}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "2,4,6-tribromophenol",
            "4-bromobenzene-1,3-diol",
            "2,4-dibromophenol",
            "4-bromophenol"
        ],
        correctAnswer: 3,
        correctOption: "d",
        explanation: "1. (i) Kolbe-Schmitt reaction: Phenol reacts with NaOH and CO2 under pressure to form salicylic acid (A = 2-hydroxybenzoic acid).\n2. (ii) Acetylation with acetic anhydride gives aspirin (B = 2-acetoxybenzoic acid).\n3. (iii) Fries rearrangement of aspirin with anhydrous AlCl3 migrates the acetyl group to the para position relative to -OH, yielding C = 5-acetyl-2-hydroxybenzoic acid.\n4. (iv) Haloform reaction with excess Br2/NaOH cleaves the acetyl group to carboxylate with precipitation of bromoform (CHBr3), while brominating the activated phenolic ring at available positions to form D.\n5. (v) Acid-catalyzed thermal decarboxylation removes the carboxylic acid groups from the ring, leaving E = 4-bromophenol.",
        originalityAudit: {
            problemStructure: "Kolbe-Schmitt carboxylation coupled with Fries rearrangement, haloform degradation, and decarboxylative rearomatization.",
            solutionMethodSignature: "Kolbe-Schmitt -> Fries rearrangement -> Haloform reaction -> Decarboxylation.",
            conceptCombination: "Phenolic carboxylation, Fries rearrangement, haloform reaction, aromatic decarboxylation.",
            noveltyRationale: "Unifies classical phenolic transformations (Kolbe, Fries) with selective haloform degradation and decarboxylation."
        }
    },

    // Q8
    {
        question_id: 8,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Epoxide Synthesis & Grignard Addition",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Identify intermediate $\\mathbf{D}$ and product $\\mathbf{E}$ in the sequence:\n$$\\text{tert-Butyl alcohol} \\xrightarrow[\\Delta]{\\mathrm{(i)\\ 20\\%\\ H_2SO_4,\\ 360\\text{ K}}} \\mathbf{A} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(ii)\\ NBS,\\ DMSO}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ dry\\ K_2CO_3}} \\mathbf{C} \\xrightarrow[\\mathrm{dry\\ ether}]{\\mathrm{(iv)\\ C_2H_5MgBr,\\ then\\ H_3O^+}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ Cu\\ at\\ 573\\text{ K}}} \\mathbf{E}$$\n$\\mathbf{E}$ is:",
        options: [
            "2-methylhexan-3-one",
            "2-methylhexan-2-ol",
            "2-methylpentanal",
            "2-methylhexanal"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) E1 dehydration of tert-butyl alcohol produces isobutylene (A = 2-methylpropene).\n2. (ii) Treatment with NBS in aqueous DMSO forms the halohydrin B = 1-bromo-2-methylpropan-2-ol.\n3. (iii) Base-promoted intramolecular Williamson ether synthesis gives isobutylene oxide (C = 2,2-dimethyloxirane).\n4. (iv) Grignard addition of ethylmagnesium bromide followed by rearrangement/functionalization gives secondary alcohol D.\n5. (v) Dehydrogenation of secondary alcohol D over heated copper at 573 K yields ketone E = 2-methylhexan-3-one.",
        originalityAudit: {
            problemStructure: "Alcohol dehydration followed by halohydrin formation, epoxide cyclization, Grignard opening, and Cu dehydrogenation.",
            solutionMethodSignature: "E1 dehydration -> Halohydrin synthesis -> Epoxidation -> Grignard ring opening -> Cu/573 K oxidation.",
            conceptCombination: "Dehydration, halohydrins, oxirane synthesis, Grignard regioselectivity, alcohol dehydrogenation.",
            noveltyRationale: "Distinguishes catalytic copper dehydrogenation of secondary vs tertiary alcohols."
        }
    },

    // Q9
    {
        question_id: 9,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols & Ether Cleavage",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "The following cascade illustrates competing ether synthesis/cleavage pathways:\n$$\\text{Phenol} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(i)\\ CHCl_3,\\ aq.\\ NaOH\\ (340\\text{ K});\\ then\\ H^+}} \\mathbf{A\\ (major)} \\xrightarrow{\\mathrm{(ii)\\ NaBH_4,\\ CH_3OH}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ excess\\ CH_3I,\\ K_2CO_3}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ 1\\ equivalent\\ con.\\ HI\\ (cold)}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ PCC,\\ CH_2Cl_2}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "2-hydroxybenzaldehyde",
            "2-methoxybenzaldehyde",
            "2-iodobenzaldehyde",
            "2-methoxybenzyl iodide"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Reimer-Tiemann reaction: Phenol reacts with chloroform and NaOH via dichlorocarbene (:CCl2) to give salicylaldehyde (A = 2-hydroxybenzaldehyde) as major product.\n2. (ii) Selective reduction with NaBH4 reduces the aldehyde to give B = 2-(hydroxymethyl)phenol (salicyl alcohol).\n3. (iii) Exhaustive methylation with excess CH3I and K2CO3 methylates both the phenolic and benzylic -OH groups to give C = 1-methoxy-2-(methoxymethyl)benzene.\n4. (iv) Cleavage with 1 equivalent cold HI: The aliphatic benzylic ether is far more labile to SN2/SN1 cleavage than the sp2 aryl-oxygen bond. Cleavage of the benzylic ether regenerates benzylic alcohol D = 2-methoxybenzyl alcohol while leaving the aryl methyl ether intact.\n5. (v) Oxidation: PCC oxidizes the benzylic alcohol D to an aldehyde, forming E = 2-methoxybenzaldehyde (o-anisaldehyde).",
        originalityAudit: {
            problemStructure: "Reimer-Tiemann formylation cascaded with borohydride reduction, dual etherification, selective benzylic ether cleavage, and PCC oxidation.",
            solutionMethodSignature: "Reimer-Tiemann -> NaBH4 reduction -> Williamson etherification -> Selective cold HI cleavage -> PCC oxidation.",
            conceptCombination: "Dichlorocarbene mechanism, selective reduction, differential ether cleavage (alkyl-aryl vs benzylic), PCC oxidation.",
            noveltyRationale: "Exploits kinetic differentiation in ether cleavage between benzylic ether vs resonance-stabilized aryl methyl ether."
        }
    },

    // Q10
    {
        question_id: 10,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Epoxides & Tiffeneau-Demjanov",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "A cyclohexyl derivative is subjected to the following sequence:\n$$\\text{Cyclohexene} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(i)\\ Br_2}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ NaH,\\ THF}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ (CH_3)_2CHNH_2}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ NaNO_2,\\ aq.\\ HCl\\ (273-278\\text{ K})}} \\mathbf{D} \\xrightarrow[\\Delta]{\\mathrm{(v)\\ H_3PO_4}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "Cyclohexanol",
            "Cyclopentanecarbaldehyde",
            "Cyclohexa-1,3-diene",
            "Bicyclo[3.1.0]hexane"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Addition of Br2 in water to cyclohexene forms trans-2-bromocyclohexan-1-ol (A).\n2. (ii) Intramolecular SN2 displacement by alkoxide generated with NaH forms cyclohexene oxide (B).\n3. (iii) Nucleophilic opening by amine yields amino alcohol C = trans-2-(isopropylamino)cyclohexan-1-ol.\n4. (iv)-(v) Diazotization and Tiffeneau-Demjanov rearrangement: Reaction with nitrous acid induces deaminative ring contraction. As nitrogen departs, ring C-C bond migration relieves ring strain, furnishing cyclopentanecarbaldehyde (E).",
        originalityAudit: {
            problemStructure: "Halohydrin-epoxide cascade coupled with amine opening and Tiffeneau-Demjanov ring-contraction rearrangement.",
            solutionMethodSignature: "Halohydrin -> Epoxidation -> Amine opening -> Diazotization -> Tiffeneau-Demjanov rearrangement.",
            conceptCombination: "Epoxide opening by amines, deaminative carbocation generation, Tiffeneau-Demjanov ring contraction.",
            noveltyRationale: "Applies nitrous acid deamination to beta-amino alcohols triggering stereospecific carbocyclic ring contraction."
        }
    },

    // Q11
    {
        question_id: 11,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Stereochemistry of Diols & Ethers",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Determine product $\\mathbf{E}$ in the following synthetic path:\n$$\\text{trans-But-2-ene} \\xrightarrow{\\mathrm{(i)\\ OsO_4,\\ NMO}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ TsCl\\ (1\\ eq.),\\ py}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ NaH,\\ ether}} \\mathbf{C} \\xrightarrow[\\mathrm{CH_3OH}]{\\mathrm{(iv)\\ NaOCH_3}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ con.\\ HBr\\ (excess),\\ \\Delta}} \\mathbf{E}$$\nWhich statement correctly describes the formation and identity of $\\mathbf{E}$?",
        options: [
            "E is meso-2,3-dibromobutane formed via inversion at both stereocenters.",
            "E is rac-2,3-dibromobutane accompanied by bromomethane.",
            "E is butane-2,3-diol due to ether inertness toward HBr.",
            "E is 2-bromobutane via reductive deoxygenation."
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Syn-dihydroxylation of trans-but-2-ene using OsO4/NMO gives chiral enantiomers (2R,3R) and (2S,3S), forming rac-butane-2,3-diol (A).\n2. (ii) Monotosylation with 1 equivalent TsCl preserves configuration, giving B.\n3. (iii) Treatment with NaH induces intramolecular SN2 attack with inversion at the tosylated carbon, forming trans-2,3-dimethyloxirane (C).\n4. (iv) Methoxide opening in methanol proceeds with backside SN2 attack and inversion, yielding 3-methoxybutan-2-ol (D).\n5. (v) Cleavage with excess hot concentrated HBr cleaves the methyl ether to bromomethane (CH3Br) and converts the alcohol into bromide via stereospecific SN2 substitution, delivering rac-2,3-dibromobutane (E).",
        originalityAudit: {
            problemStructure: "Stereochemical cascade from trans-alkene syn-dihydroxylation through stereospecific epoxidation, ether opening, and HBr cleavage.",
            solutionMethodSignature: "Upjohn syn-dihydroxylation -> Tosylation -> Intramolecular SN2 -> Epoxide opening -> HBr SN2 cleavage.",
            conceptCombination: "Alkene syn-dihydroxylation, Walden inversion in epoxide closure, ether cleavage stereospecificity.",
            noveltyRationale: "Tracks chiral stereocenters rigorously across 5 sequential stereospecific transformations."
        }
    },

    // Q12
    {
        question_id: 12,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Epoxide Opening & Oxidation",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the following cascade starting from an unsymmetrical cyclic ether:\n$$\\text{2,2-dimethyloxirane} \\xrightarrow[\\mathrm{CH_3OH}]{\\mathrm{(i)\\ CH_3ONa}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ PBr_3}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ Mg,\\ dry\\ ether}} \\mathbf{C} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(iv)\\ HCHO}} \\mathbf{D} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(v)\\ DMP\\ (Dess-Martin)}} \\mathbf{E}$$\nThe IUPAC name of $\\mathbf{E}$ is:",
        options: [
            "3-methoxy-3-methylbutanal",
            "2-methoxy-2-methylbutanal",
            "3-methoxy-2,2-dimethylpropanal",
            "3-methylbut-2-enal"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Basic ring opening of 2,2-dimethyloxirane with sodium methoxide occurs via SN2 attack at the less sterically hindered primary carbon (C1), giving tertiary alcohol A = 1-methoxy-2-methylpropan-2-ol, or in alternative numbering primary alcohol derivation.\n2. (ii) Bromination with PBr3 produces bromo ether B = 1-bromo-2-methoxy-2-methylpropane.\n3. (iii) Reaction with magnesium in dry ether forms Grignard reagent C = (2-methoxy-2-methylpropyl)magnesium bromide.\n4. (iv) Nucleophilic addition of Grignard C to formaldehyde (HCHO) followed by acidic workup extends the chain by one carbon, giving primary alcohol D = 3-methoxy-3-methylbutan-1-ol.\n5. (v) Oxidation of D with Dess-Martin periodinane (DMP) yields aldehyde E = 3-methoxy-3-methylbutanal.",
        originalityAudit: {
            problemStructure: "Base-catalyzed epoxide opening followed by halide substitution, Grignard chain extension with formaldehyde, and DMP oxidation.",
            solutionMethodSignature: "Steric-controlled epoxide opening -> PBr3 bromination -> Grignard formation -> C1 homologation -> DMP oxidation.",
            conceptCombination: "Base-catalyzed oxirane opening, Grignard reagents from ethers, formaldehyde homologation, Dess-Martin oxidation.",
            noveltyRationale: "Integrates ether-containing Grignard reagents with modern mild periodinane oxidation."
        }
    },

    // Q13
    {
        question_id: 13,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols & Cyclic Ethers",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "An aromatic compound undergoes the sequence:\n$$\\text{Anisole} \\xrightarrow[\\mathrm{CS_2}]{\\mathrm{(i)\\ Br_2}} \\mathbf{A\\ (major)} \\xrightarrow{\\mathrm{(ii)\\ Mg,\\ dry\\ THF}} \\mathbf{B} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(iii)\\ ethylene\\ oxide}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ excess\\ HI,\\ \\Delta}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ aq.\\ K_2CO_3,\\ \\Delta}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "4-(2-hydroxyethyl)phenol",
            "4-(2-iodoethyl)phenol",
            "2,3-dihydrobenzofuran",
            "4-vinylphenol"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. (i) Bromination of anisole in CS2 gives 4-bromoanisole (A) as the dominant para isomer.\n2. (ii) Grignard formation with Mg in dry THF yields 4-methoxyphenylmagnesium bromide (B).\n3. (iii) Nucleophilic opening of ethylene oxide by B followed by protonation gives C = 2-(4-methoxyphenyl)ethan-1-ol.\n4. (iv) Treatment with excess hot HI cleaves the aryl methyl ether bond (-OCH3 -> -OH + CH3I) and converts the primary aliphatic alcohol to iodide, giving D = 4-(2-iodoethyl)phenol (or ortho isomer 2-(2-iodoethyl)phenol).\n5. (v) Intramolecular Williamson ether cyclization: Base (K2CO3) deprotonates the phenol to phenoxide, which undergoes intramolecular SN2 displacement of the alkyl iodide to form the 5-membered cyclic ether E = 2,3-dihydrobenzofuran.",
        originalityAudit: {
            problemStructure: "Aromatic bromination followed by Grignard opening of ethylene oxide, dual HI ether/alcohol cleavage, and intramolecular cyclization.",
            solutionMethodSignature: "Electrophilic bromination -> Grignard oxirane opening -> HI cleavage/iodination -> Intramolecular etherification.",
            conceptCombination: "Aryl Grignard, ethylene oxide C2-homologation, exhaustive HI ether cleavage, benzofuran heterocycle synthesis.",
            noveltyRationale: "Directs tandem ether cleavage and alkyl halide formation into an intramolecular benzofuran synthesis."
        }
    },

    // Q14
    {
        question_id: 14,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Alcohols & Tetrahydrofurans",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the transformation:\n$$\\text{Benzyl alcohol} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(i)\\ DMP}} \\mathbf{A} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(ii)\\ CH_2=CH-CH_2MgBr}} \\mathbf{B} \\xrightarrow{\\mathrm{(iii)\\ mCPBA}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ cat.\\ H_2SO_4,\\ THF}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ NaIO_4}} \\mathbf{E}$$\nThe major organic product $\\mathbf{E}$ is:",
        options: [
            "Benzaldehyde + Acrolein",
            "2-phenyltetrahydrofuran-4-carbaldehyde",
            "5-phenyltetrahydrofuran-2-carbaldehyde",
            "4-phenyl-1,3-dioxane"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. (i) DMP oxidation of benzyl alcohol yields benzaldehyde (A = C6H5CHO).\n2. (ii) Allylmagnesium bromide addition to benzaldehyde gives homoallylic alcohol B = 1-phenylbut-3-en-1-ol.\n3. (iii) Epoxidation with mCPBA selectively oxidizes the terminal alkene to epoxide C = 1-(oxiran-2-yl)-3-phenylpropan-2-ol.\n4. (iv) Acid-catalyzed 5-endo/exo-tet intramolecular cyclization of the secondary alcohol onto the epoxide ring forms the 5-membered cyclic ether D = (5-phenyltetrahydrofuran-2-yl)methanol.\n5. (v) Periodate/PCC oxidation of the primary alcohol group yields aldehyde E = 5-phenyltetrahydrofuran-2-carbaldehyde.",
        originalityAudit: {
            problemStructure: "Oxidation followed by Grignard allylation, epoxidation, intramolecular oxirane ring-closure, and terminal oxidation.",
            solutionMethodSignature: "DMP oxidation -> Allyl Grignard addition -> mCPBA epoxidation -> 5-exo-tet cyclization -> Periodate oxidation.",
            conceptCombination: "Homoallylic alcohols, Baldwin rules in oxirane cyclization, substituted tetrahydrofuran synthesis.",
            noveltyRationale: "Demonstrates regioselective intramolecular epoxide opening yielding substituted tetrahydrofurans."
        }
    },

    // Q15
    {
        question_id: 15,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenolphthalein & Phenols",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "The following reaction pathway involves functional phenolic condensations:\n$$\\text{Phenol} \\xrightarrow[\\mathrm{con.\\ H_2SO_4,\\ \\Delta}]{\\mathrm{(i)\\ Phthalic\\ anhydride}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ excess\\ NaOH\\ (aq.)}} \\mathbf{B\\ (pink\\ form)} \\xrightarrow{\\mathrm{(iii)\\ excess\\ con.\\ HCl}} \\mathbf{C} \\xrightarrow[\\Delta]{\\mathrm{(iv)\\ Zn\\ dust}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ CrO_3,\\ AcOH}} \\mathbf{E}$$\nCompound $\\mathbf{D}$ is:",
        options: [
            "Triphenylmethane-2-carboxylic acid",
            "Anthracene",
            "3,3-diphenylisobenzofuran-1(3H)-one",
            "Phthalic acid"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. (i) Phthalein dye condensation: Phenol condenses with phthalic anhydride in concentrated H2SO4 to form phenolphthalein (A).\n2. (ii) In alkaline NaOH solution, phenolphthalein forms its intensely pink/magenta quinoid dianion (B).\n3. (iii) Acidification with excess HCl regenerates the neutral, colorless lactone form C = 3,3-bis(4-hydroxyphenyl)isobenzofuran-1(3H)-one.\n4. (iv) Reduction with zinc dust removes the phenolic -OH groups completely (deoxygenation to aromatic C-H bonds) without cleaving the lactone core, yielding D = 3,3-diphenylisobenzofuran-1(3H)-one.",
        originalityAudit: {
            problemStructure: "Phthalein dye condensation followed by acid-base indicator equilibria and zinc dust phenolic deoxygenation.",
            solutionMethodSignature: "Electrophilic aromatic condensation -> Quinoid equilibrium -> Lactone neutralization -> Zn dust deoxygenation.",
            conceptCombination: "Phenolphthalein synthesis, indicator chromophoric equilibrium, zinc dust reduction of phenols.",
            noveltyRationale: "Exploits chemoselective zinc dust reduction of phenolic hydroxyls in complex triphenylmethane lactones."
        }
    },

    // Q16
    {
        question_id: 16,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Cyclic Alcohols & Jones Oxidation",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "A polyfunctional molecule is constructed through:\n$$\\text{Cyclopent-2-en-1-ol} \\xrightarrow[\\mathrm{0^\\circ C}]{\\mathrm{(i)\\ mCPBA}} \\mathbf{A\\ (syn\\ to\\ -OH)} \\xrightarrow{\\mathrm{(ii)\\ LiAlH_4,\\ then\\ H_2O}} \\mathbf{B} \\xrightarrow[\\mathrm{py}]{\\mathrm{(iii)\\ 1\\ eq.\\ TsCl}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ NaSCH_3,\\ DMF}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ Jones\\ reagent}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "3-(methylthio)cyclopentan-1-one",
            "2-(methylthio)cyclopentan-1-one",
            "3-(methylsulfonyl)cyclopentan-1-one",
            "2-(methylsulfonyl)cyclopentan-1-one"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. (i) Directed epoxidation: mCPBA coordinates with the allylic -OH group to deliver oxygen syn, giving cis-2,3-epoxycyclopentan-1-ol (A).\n2. (ii) LiAlH4 reduction opens the epoxide with hydride attack at C2 to form cyclopentane-1,3-diol (B).\n3. (iii) Monotosylation with 1 eq. TsCl in pyridine esterifies one hydroxyl group, giving C.\n4. (iv) Nucleophilic substitution with sodium thiomethoxide (NaSCH3) in DMF displaces the tosylate to give 3-(methylthio)cyclopentan-1-ol (D).\n5. (v) Jones reagent (CrO3/H2SO4) vigorously oxidizes the secondary alcohol to a ketone while concurrently oxidizing the thioether (-SCH3) to a sulfone (-SO2CH3), producing E = 3-(methylsulfonyl)cyclopentan-1-one.",
        originalityAudit: {
            problemStructure: "Allylic alcohol-directed epoxidation followed by regioselective hydride opening, monotosylation, thiolation, and Jones dual oxidation.",
            solutionMethodSignature: "Hydroxyl-directed epoxidation -> Epoxide opening -> Tosylation -> SN2 thiolation -> Jones dual oxidation.",
            conceptCombination: "Directed epoxidation, regioselective oxirane hydride attack, thioether SN2 substitution, Jones oxidation of sulfides to sulfones.",
            noveltyRationale: "Highlights concomitant oxidation of secondary alcohol and thioether to keto-sulfone by Jones reagent."
        }
    },

    // Q17
    {
        question_id: 17,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Pinacol Contraction & Diols",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the behavior of diols in:\n$$\\text{1-methylcyclohexene} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(i)\\ RCO_3H;\\ then\\ H_3O^+}} \\mathbf{A} \\xrightarrow[\\Delta]{\\mathrm{(ii)\\ con.\\ H_2SO_4}} \\mathbf{B} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(iii)\\ CH_3MgBr}} \\mathbf{C} \\xrightarrow[\\mathrm{H_2O_2,\\ OH^-}]{\\mathrm{(iv)\\ B_2H_6 / THF}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ con.\\ HI\\ (excess),\\ \\Delta}} \\mathbf{E}$$\nProduct $\\mathbf{B}$ formed via the Pinacol-type contraction is:",
        options: [
            "2-methylcyclohexan-1-one",
            "Cyclopentyl methyl ketone",
            "1-cyclopentylethan-1-one",
            "Cyclohexanecarbaldehyde"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Epoxidation of 1-methylcyclohexene followed by aqueous acid-catalyzed ring opening gives trans-1-methylcyclohexane-1,2-diol (A).\n2. (ii) Pinacol-pinacolone rearrangement of diol A with concentrated H2SO4: Protonation and departure of water at the tertiary carbon (or secondary carbon assisted by ring bond migration) triggers a ring contraction of the six-membered ring into a five-membered cyclopentane ring with migration of the C1-C6 bond, generating cyclopentyl methyl ketone (B = c-C5H9-COCH3).",
        originalityAudit: {
            problemStructure: "Cycloalkene dihydroxylation followed by acid-catalyzed Pinacol ring-contraction rearrangement to a cyclopentyl ketone.",
            solutionMethodSignature: "Anti-dihydroxylation -> Pinacol ring-contraction -> Grignard addition.",
            conceptCombination: "Vicinal diol preparation, Pinacol rearrangement, ring contraction mechanics.",
            noveltyRationale: "Features Pinacol ring-contraction converting 1-methylcyclohexane-1,2-diol into cyclopentyl methyl ketone."
        }
    },

    // Q18
    {
        question_id: 18,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols & Liebermann Nitroso Reaction",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "In the following reaction sequence:\n$$\\text{Phenol} \\xrightarrow[\\mathrm{273-278\\text{ K}}]{\\mathrm{(i)\\ NaNO_2,\\ con.\\ H_2SO_4}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ excess\\ Phenol,\\ con.\\ H_2SO_4,\\ \\Delta}} \\mathbf{B\\ (red\\ solution)} \\xrightarrow{\\mathrm{(iii)\\ NaOH\\ (aq.)}} \\mathbf{C\\ (deep\\ blue)} \\xrightarrow[\\Delta]{\\mathrm{(iv)\\ excess\\ (CH_3)_2SO_4,\\ NaOH}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ H_3O^+,\\ \\Delta}} \\mathbf{E}$$\nThis sequence represents which classical test, and what is the chromophoric core of $\\mathbf{C}$?",
        options: [
            "Reimer-Tiemann test; Aurin dye",
            "Liebermann's nitroso reaction; Indophenol anion",
            "Millon's test; Nitrophenol chelate",
            "Phthalein dye test; Quinoid phenolate"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. This sequence is the diagnostic Liebermann's nitroso reaction for phenols.\n2. (i) Nitrous acid generated in situ nitrosates phenol at the para position to form 4-nitrosophenol (A), which tautomerizes to 1,4-benzoquinone monoxime.\n3. (ii) Condensation with excess phenol in concentrated H2SO4 yields the red indophenol dye intermediate (B).\n4. (iii) Treatment with aqueous NaOH deprotonates the phenolic group to form the resonance-stabilized indophenol anion (C), which displays an intense deep blue color due to extended quinoid conjugation.",
        originalityAudit: {
            problemStructure: "Diagnostic color reaction of phenols evaluated mechanistically through nitrosation, indophenol coupling, and chromophoric deprotonation.",
            solutionMethodSignature: "Nitrosation -> Tautomerization -> Indophenol condensation -> Quinoid deprotonation.",
            conceptCombination: "Liebermann's nitroso reaction, indophenol dye structure, quinoid chromophore, phenol qualitative analysis.",
            noveltyRationale: "Unpacks the exact chemical basis and chromophore identity of Liebermann's qualitative nitroso test."
        }
    },

    // Q19
    {
        question_id: 19,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Ether Cleavage & Williamson Synthesis",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "The reaction sequence below exploits ether cleavage mechanisms:\n$$\\text{tert-Butyl methyl ether} \\xrightarrow[\\mathrm{1\\ equivalent}]{\\mathrm{(i)\\ anhydrous\\ HI\\ (gas,\\ 273\\text{ K})}} \\mathbf{A\\ (volatile\\ halide)} + \\mathbf{B} \\quad \\mathbf{B} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(ii)\\ PCC}} \\mathbf{C} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(iii)\\ PhMgBr\\ (1\\ eq.)}} \\mathbf{D} \\xrightarrow{\\mathrm{(iv)\\ NaH,\\ then\\ CH_3CH_2Br}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "Ethoxy(phenyl)methane (Benzyl ethyl ether)",
            "1-ethoxy-1-phenylethane",
            "(tert-butoxy)benzene",
            "2-phenylbutan-2-ol"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Ether cleavage of tert-butyl methyl ether with anhydrous HI at 273 K proceeds via an SN1 mechanism due to the high stability of the tertiary tert-butyl carbocation ((CH3)3C+). Iodide captures the tert-butyl cation to form tert-butyl iodide (A), leaving methanol as B = CH3OH.\n2. (ii) Oxidation of methanol with PCC in CH2Cl2 gives formaldehyde (C = HCHO).\n3. (iii) Nucleophilic addition of phenylmagnesium bromide (PhMgBr) to formaldehyde followed by workup produces benzyl alcohol (D = C6H5CH2OH).\n4. (iv) Williamson ether synthesis: Deprotonation with NaH forms sodium benzylate, which attacks ethyl bromide (CH3CH2Br) via SN2 to yield ethoxy(phenyl)methane (benzyl ethyl ether), E = C6H5-CH2-O-CH2CH3.",
        originalityAudit: {
            problemStructure: "SN1-directed ether cleavage followed by methanol oxidation, formaldehyde Grignard phenyl addition, and Williamson ether synthesis.",
            solutionMethodSignature: "SN1 ether cleavage -> PCC oxidation -> Grignard addition -> Williamson etherification.",
            conceptCombination: "SN1 vs SN2 ether cleavage with HI, primary alcohol oxidation to formaldehyde, Grignard additions, Williamson synthesis.",
            noveltyRationale: "Combines selective SN1 ether cleavage with formaldehyde generation and asymmetric ether reconstruction."
        }
    },

    // Q20
    {
        question_id: 20,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols & Salicylic Acid Derivatives",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the multi-step transformation:\n$$\\text{Salicylic acid} \\xrightarrow[\\mathrm{H_2SO_4,\\ \\Delta}]{\\mathrm{(i)\\ CH_3OH}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ excess\\ CH_3MgBr,\\ then\\ H_3O^+}} \\mathbf{B} \\xrightarrow[\\Delta]{\\mathrm{(iii)\\ cat.\\ TsOH,\\ benzene}} \\mathbf{C} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(iv)\\ Br_2}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ NaOCH_3,\\ CH_3OH}} \\mathbf{E}$$\nProduct $\\mathbf{C}$ is:",
        options: [
            "2-(prop-1-en-2-yl)phenol",
            "2,2-dimethyl-2,3-dihydrobenzofuran",
            "3,3-dimethyl-3H-isobenzofuran-1-one",
            "2-isopropenylphenyl methyl ether"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Fischer esterification of salicylic acid with methanol in H2SO4 produces methyl salicylate (A = oil of wintergreen).\n2. (ii) Reaction of methyl salicylate with excess methylmagnesium bromide converts the ester into a tertiary alcohol while preserving the phenolic group upon quenching, giving B = 2-(2-hydroxyphenyl)propan-2-ol.\n3. (iii) Mild acid-catalyzed dehydration with catalytic TsOH selectively dehydrates the tertiary aliphatic alcohol over the phenolic -OH to form C = 2-(prop-1-en-2-yl)phenol (2-isopropenylphenol).",
        originalityAudit: {
            problemStructure: "Salicylic acid esterification followed by Grignard ester conversion and selective tertiary alcohol dehydration.",
            solutionMethodSignature: "Fischer esterification -> Double Grignard addition -> Mild TsOH dehydration.",
            conceptCombination: "Salicylic acid derivatives, Grignard reaction with phenolic esters, chemoselective alcohol dehydration.",
            noveltyRationale: "Clarifies selective aliphatic dehydration of 2-(2-hydroxyphenyl)propan-2-ol to 2-isopropenylphenol."
        }
    },

    // Q21
    {
        question_id: 21,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Claisen Rearrangement & Dihydrobenzofurans",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "An ether undergoes functional transformations as follows:\n$$\\text{Allyl phenyl ether} \\xrightarrow[\\mathrm{N_2\\ atmosphere}]{210^\\circ\\mathrm{C}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ con.\\ HBr\\ (no\\ peroxides)}} \\mathbf{B} \\xrightarrow[\\mathrm{DMF}]{\\mathrm{(iii)\\ NaH}} \\mathbf{C} \\xrightarrow{\\mathrm{(iv)\\ Cl_2,\\ Fe}} \\mathbf{D} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(v)\\ NaOH\\ (573\\text{ K},\\ 300\\text{ atm});\\ then\\ H^+}} \\mathbf{E}$$\nProduct $\\mathbf{C}$ is:",
        options: [
            "2-methyl-2,3-dihydrobenzofuran",
            "Chroman",
            "2-bromomethyl-2,3-dihydrobenzofuran",
            "3-methyl-2,3-dihydrobenzofuran"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Thermal [3,3]-sigmatropic Claisen rearrangement of allyl phenyl ether at 210°C forms 2-allylphenol (A).\n2. (ii) Electrophilic addition of HBr (without peroxides) follows Markovnikov's rule across the terminal double bond, forming secondary alkyl bromide B = 2-(2-bromopropyl)phenol.\n3. (iii) Treatment with NaH deprotonates the phenolic -OH to phenoxide, which undergoes intramolecular SN2 displacement of the secondary bromide, closing a 5-membered cyclic ether to yield C = 2-methyl-2,3-dihydrobenzofuran.",
        originalityAudit: {
            problemStructure: "Aromatic Claisen rearrangement followed by Markovnikov hydrobromination and intramolecular ether synthesis.",
            solutionMethodSignature: "Claisen rearrangement -> Markovnikov HBr addition -> Intramolecular Williamson cyclization.",
            conceptCombination: "Claisen sigmatropic rearrangement, Markovnikov addition to allylarenes, intramolecular etherification, dihydrobenzofuran synthesis.",
            noveltyRationale: "Highlights 5-exo-tet cyclization of 2-(2-bromopropyl)phenol to 2-methyl-2,3-dihydrobenzofuran."
        }
    },

    // Q22
    {
        question_id: 22,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Epoxide Regioselectivity & Hydride Attack",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Examine the following cascade initiated on an alkene:\n$$\\text{3-methylcyclohex-1-ene} \\xrightarrow[\\mathrm{CH_2Cl_2}]{\\mathrm{(i)\\ CF_3CO_3H}} \\mathbf{A\\ (diastereomeric\\ mixture)} \\xrightarrow{\\mathrm{(ii)\\ LiAlH_4,\\ then\\ H_3O^+}} \\mathbf{B} \\xrightarrow[\\mathrm{py}]{\\mathrm{(iii)\\ TsCl}} \\mathbf{C} \\xrightarrow[\\mathrm{DMSO}]{\\mathrm{(iv)\\ t-BuOK,\\ \\Delta}} \\mathbf{D} \\xrightarrow[\\mathrm{(2)\\ Me_2S}]{\\mathrm{(v)\\ (1)\\ O_3}} \\mathbf{E}$$\nThe major alcohol $\\mathbf{B}$ formed predominantly results from hydride attack at:",
        options: [
            "C1 of the epoxide, generating 2-methylcyclohexan-1-ol",
            "C2 of the epoxide, generating 3-methylcyclohexan-1-ol",
            "C3 directly via SN2' mechanism",
            "Hydride-induced carbocation rearrangement yielding 1-methylcyclohexan-1-ol"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Epoxidation of 3-methylcyclohex-1-ene gives 1,2-epoxy-3-methylcyclohexane (A).\n2. (ii) Nucleophilic hydride reduction with LiAlH4: In cyclic epoxides, SN2 attack by hydride (H-) occurs at the less sterically hindered carbon to minimize steric clash with the adjacent C3 methyl group. Hence, hydride attacks predominantly at C2, opening the epoxide to leave the alcohol group at C1, yielding B = 3-methylcyclohexan-1-ol.",
        originalityAudit: {
            problemStructure: "Stereochemical and regioselective evaluation of unsymmetrical cyclic epoxide ring-opening by complex hydrides.",
            solutionMethodSignature: "Epoxidation -> Steric-controlled SN2 hydride attack -> Cyclohexanol derivative.",
            conceptCombination: "Unsymmetrical epoxides, steric steering in LiAlH4 ring-opening, Furst-Plattner stereoelectronic principles.",
            noveltyRationale: "Tests steric differentiation between adjacent positions in substituted cyclic epoxides during hydride reduction."
        }
    },

    // Q23
    {
        question_id: 23,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Phenols Nitration & Anisole",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "Consider the series of electrophilic substitutions on phenol:\n$$\\text{Phenol} \\xrightarrow[\\mathrm{273\\ K}]{\\mathrm{(i)\\ dil.\\ HNO_3}} \\mathbf{A\\ (steam-volatile\\ isomer)} \\xrightarrow{\\mathrm{(ii)\\ (CH_3)_2SO_4,\\ NaOH}} \\mathbf{B} \\xrightarrow[\\mathrm{HCl}]{\\mathrm{(iii)\\ Sn}} \\mathbf{C} \\xrightarrow[\\mathrm{273-278\\text{ K}}]{\\mathrm{(iv)\\ NaNO_2,\\ HCl}} \\mathbf{D} \\xrightarrow[\\Delta]{\\mathrm{(v)\\ H_3PO_2,\\ H_2O}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "Anisole (methoxybenzene)",
            "Phenol",
            "1,2-dimethoxybenzene",
            "2-methoxyphenol"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. (i) Nitration of phenol with dilute HNO3 at low temperature gives ortho- and para-nitrophenols. The steam-volatile isomer is A = 2-nitrophenol (ortho-nitrophenol), stabilized by intramolecular hydrogen bonding.\n2. (ii) Methylation with dimethyl sulfate and NaOH yields B = 1-methoxy-2-nitrobenzene (2-nitroanisole).\n3. (iii) Reduction of the nitro group with Sn/HCl produces C = 2-methoxyaniline (o-anisidine).\n4. (iv) Diazotization with NaNO2/HCl at 273-278 K forms diazonium salt D = 2-methoxybenzenediazonium chloride.\n5. (v) Deamination with hypophosphorous acid (H3PO2) reduces the diazonium group to -H, yielding E = anisole (methoxybenzene).",
        originalityAudit: {
            problemStructure: "Phenol dilute nitration isomer separation coupled with etherification, reduction, diazotization, and reductive deamination.",
            solutionMethodSignature: "Intramolecular H-bonding separation -> Williamson etherification -> Nitro reduction -> Diazotization -> Deamination.",
            conceptCombination: "Phenol nitration steam volatility, ether synthesis, diazonium reduction by H3PO2, anisole synthesis.",
            noveltyRationale: "Connects phenol physical properties (steam volatility of o-nitrophenol) with a complete deamination sequence."
        }
    },

    // Q24
    {
        question_id: 24,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Bredt's Rule & Bicyclic Alcohols",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "A bicyclic compound is manipulated through the sequence:\n$$\\text{Norbornene (bicyclo[2.2.1]hept-2-ene)} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(i)\\ Hg(OAc)_2;\\ then\\ NaBH_4}} \\mathbf{A} \\xrightarrow{\\mathrm{(ii)\\ PCC,\\ CH_2Cl_2}} \\mathbf{B} \\xrightarrow[\\mathrm{(2)\\ H_3O^+}]{\\mathrm{(iii)\\ CH_3Li\\ (1\\ eq.)}} \\mathbf{C} \\xrightarrow[\\Delta]{\\mathrm{(iv)\\ con.\\ H_2SO_4}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ mCPBA,\\ CH_2Cl_2}} \\mathbf{E}$$\nAlcohol $\\mathbf{C}$ undergoes dehydration in step (iv). Product $\\mathbf{D}$ is governed by Bredt's rule and is:",
        options: [
            "2-methylbicyclo[2.2.1]hept-2-ene",
            "2-methylenebicyclo[2.2.1]heptane",
            "Camphene-type rearranged skeleton (3,3-dimethylbicyclo[2.2.1]hept-2-ene)",
            "1-methylbicyclo[2.2.1]hept-2-ene"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. (i) Oxymercuration-demercuration of norbornene proceeds with exo-attack of water, giving exo-norborneol (A = exo-bicyclo[2.2.1]heptan-2-ol).\n2. (ii) Oxidation of A with PCC yields norcamphor (B = bicyclo[2.2.1]heptan-2-one).\n3. (iii) Addition of methyllithium (CH3Li) to the strained bicyclic ketone occurs from the exo face to yield C = 2-methylbicyclo[2.2.1]heptan-2-ol.\n4. (iv) Acid-catalyzed dehydration: Protonation of tertiary alcohol C gives a carbocation at C2. Elimination of a proton from the adjacent bridgehead carbon C1 is strictly forbidden by Bredt's Rule (bridgehead double bond in small bicyclic rings is highly strained and unstable). Hence, elimination occurs from the exocyclic methyl group, yielding D = 2-methylenebicyclo[2.2.1]heptane.",
        originalityAudit: {
            problemStructure: "Bicyclic alkene oxymercuration, oxidation, organolithium addition, and dehydration governed by Bredt's rule.",
            solutionMethodSignature: "Bicyclic OMDM -> PCC oxidation -> Organolithium addition -> Bredt's rule elimination.",
            conceptCombination: "Norbornene stereochemistry, bridgehead strain, Bredt's rule, exocyclic alkene formation.",
            noveltyRationale: "Enforces Bredt's rule constraint on dehydration of 2-methylnorbornan-2-ol."
        }
    },

    // Q25
    {
        question_id: 25,
        subject: "Chemistry",
        chapter: "Alcohols, Phenols, and Ethers",
        subTopic: "Resorcinol & Fries Rearrangement",
        exam: "JEE Advanced & NEET",
        difficulty: "Difficult",
        question: "The following reaction pathway evaluates ether rearrangement and cleavage:\n$$\\text{Resorcinol (benzene-1,3-diol)} \\xrightarrow[\\mathrm{K_2CO_3}]{\\mathrm{(i)\\ 1\\ eq.\\ CH_3I}} \\mathbf{A} \\xrightarrow[\\mathrm{H^+}]{\\mathrm{(ii)\\ CH_3COCl}} \\mathbf{B} \\xrightarrow[\\Delta]{\\mathrm{(iii)\\ anhydrous\\ AlCl_3}} \\mathbf{C\\ (major)} \\xrightarrow[\\mathrm{H_2O}]{\\mathrm{(iv)\\ Br_2\\ (excess)}} \\mathbf{D} \\xrightarrow{\\mathrm{(v)\\ excess\\ HI,\\ \\Delta}} \\mathbf{E}$$\nProduct $\\mathbf{E}$ is:",
        options: [
            "1-(2,4,6-tribromo-3,5-dihydroxyphenyl)ethan-1-one",
            "1-(4,6-dibromo-2,3-dihydroxyphenyl)ethan-1-one",
            "1-(4,6-dibromo-2,4-dihydroxyphenyl)ethan-1-one",
            "1-(2,4-dibromo-3,5-dihydroxyphenyl)ethan-1-one"
        ],
        correctAnswer: 3,
        correctOption: "d",
        explanation: "1. (i) Monomethylation of resorcinol with 1 equivalent CH3I in K2CO3 selectively forms 3-methoxyphenol (A).\n2. (ii) Acylation of the free phenolic group with acetyl chloride forms ester B = 3-methoxyphenyl acetate.\n3. (iii) Fries rearrangement with anhydrous AlCl3: The acetyl group migrates to the ring position where both -OH and -OCH3 directing effects reinforce electrophilic substitution (C4 position), giving C = 1-(2-hydroxy-4-methoxyphenyl)ethan-1-one.\n4. (iv) Bromination with excess Br2 in water brominates the strongly activated aromatic ring at positions ortho and para to the hydroxyl group, yielding D.\n5. (v) Demethylation with excess hot concentrated HI cleaves the aryl methyl ether to regenerate the phenolic -OH without cleaving the aromatic acyl or bromo groups, delivering E = 1-(2,4-dibromo-3,5-dihydroxyphenyl)ethan-1-one.",
        originalityAudit: {
            problemStructure: "Resorcinol monoprotection followed by esterification, Fries rearrangement, polybromination, and selective ether demethylation.",
            solutionMethodSignature: "Monoprotection -> Phenolic esterification -> Fries rearrangement -> Bromination -> HI demethylation.",
            conceptCombination: "Resorcinol directing effects, Fries rearrangement, electrophilic bromination, ether cleavage with HI.",
            noveltyRationale: "Demonstrates concerted directing effects of -OH and -OCH3 in Fries rearrangement followed by selective ether cleavage."
        }
    }
];

async function main() {
    console.log("=== PROCESSING 25 ALCOHOLS, PHENOLS, AND ETHERS MCQS ===");
    console.log(`Total questions to process: ${questionsData.length}`);

    // Format for DB
    const dbDocs = questionsData.map(q => ({
        _id: new ObjectId(),
        subject: q.subject,
        chapter: q.chapter,
        subTopic: q.subTopic,
        exam: q.exam,
        difficulty: q.difficulty,
        questionType: "MCQ (Multiple Choice Question)",
        type: "MCQ",
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        source: "ORGANIC_CASCADE_25",
        originalityAudit: q.originalityAudit,
        createdAt: new Date(),
        updatedAt: new Date()
    }));

    // Save JSON file
    const jsonPath = 'alcohols_phenols_ethers_25_questions.json';
    fs.writeFileSync(jsonPath, JSON.stringify(questionsData, null, 2), 'utf8');
    console.log(`✓ Wrote complete JSON to ${jsonPath}`);

    // Insert into MongoDB questionBank
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    const initialCount = await col.countDocuments();
    console.log(`Current questionBank count: ${initialCount}`);

    console.log(`Inserting ${dbDocs.length} documents into questionBank with chapter 'Alcohols, Phenols, and Ethers'...`);
    const insertResult = await col.insertMany(dbDocs);
    console.log(`✓ Successfully inserted ${insertResult.insertedCount} questions into questionBank!`);

    const finalCount = await col.countDocuments();
    console.log(`New questionBank count: ${finalCount}`);

    const countInChapter = await col.countDocuments({ chapter: "Alcohols, Phenols, and Ethers" });
    console.log(`Total questions in chapter 'Alcohols, Phenols, and Ethers': ${countInChapter}`);

    await client.close();
}

main().catch(err => {
    console.error("Execution failed:", err);
    process.exit(1);
});
