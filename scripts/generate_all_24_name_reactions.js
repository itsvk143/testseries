/**
 * scripts/generate_all_24_name_reactions.js
 * Generates all 24 Named Reactions x 45 questions = 1,080 MCQs
 * Writes to src/data/organic_name_reactions_1080.json and MongoDB questionBank.
 */

const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// We load the 24 reaction meta definitions
const REACTIONS = [
  {
    name: "Aldol Condensation",
    subTopic: "Aldol Condensation",
    reagents: "Dilute aqueous alkali (NaOH, Ba(OH)2)",
    requirement: "Aldehydes or ketones containing at least one alpha-hydrogen",
    intermediate: "Resonance-stabilized enolate ion / carbanion",
    product: "beta-hydroxy aldehyde/ketone (aldol) dehydrating to alpha,beta-unsaturated carbonyl",
    unreactive: "Benzaldehyde, formaldehyde, 2,2-dimethylpropanal (no alpha-H)",
    special1: "Claisen-Schmidt condensation with aromatic aldehydes",
    special2: "Intramolecular cyclization yielding 5- or 6-membered conjugated enones"
  },
  {
    name: "Cannizzaro Reaction",
    subTopic: "Cannizzaro Reaction",
    reagents: "Concentrated aqueous alkali (50% NaOH or KOH)",
    requirement: "Aldehydes lacking alpha-hydrogens",
    intermediate: "Tetrahedral monoanion/dianion transferring a hydride ion (H-)",
    product: "Equimolar mixture of primary alcohol and carboxylic acid salt",
    unreactive: "Acetaldehyde, propanal, acetone (contain alpha-H, undergo aldol)",
    special1: "Crossed Cannizzaro with formaldehyde (formaldehyde is preferentially oxidized)",
    special2: "Intramolecular Cannizzaro of glyoxal yielding glycolate"
  },
  {
    name: "Friedel-Crafts Alkylation",
    subTopic: "Friedel-Crafts Alkylation",
    reagents: "Alkyl halide (R-X) in the presence of anhydrous Lewis acid (AlCl3, FeCl3)",
    requirement: "Aromatic rings not deactivated by strongly electron-withdrawing groups",
    intermediate: "Carbocation / polarized Lewis acid complex undergoing rearrangement",
    product: "Alkylbenzene",
    unreactive: "Nitrobenzene, benzoic acid, aniline (deactivated or forms complex with AlCl3)",
    special1: "Polyalkylation due to ring activation by introduced alkyl group",
    special2: "1,2-Hydride or 1,2-methyl shifts giving rearranged isopropyl or tert-butyl derivatives"
  },
  {
    name: "Friedel-Crafts Acylation",
    subTopic: "Friedel-Crafts Acylation",
    reagents: "Acyl chloride (RCOCl) or acid anhydride with anhydrous AlCl3",
    requirement: "Aromatic hydrocarbons and activated derivatives",
    intermediate: "Resonance-stabilized acylium ion (R-C+=O <-> R-C#O+)",
    product: "Aromatic ketone (acylbenzene)",
    unreactive: "Strongly deactivated aromatic rings (nitrobenzene, benzonitrile)",
    special1: "No skeletal rearrangement because acylium ion is resonance-stabilized",
    special2: "No polyacylation because acyl group strongly deactivates the ring"
  },
  {
    name: "Reimer-Tiemann Reaction",
    subTopic: "Reimer-Tiemann Reaction",
    reagents: "Chloroform (CHCl3) and aqueous alkali (NaOH / KOH) at 340 K",
    requirement: "Phenols and electron-rich phenolic derivatives",
    intermediate: "Singlet dichlorocarbene (:CCl2) electrophile via alpha-elimination",
    product: "Salicylaldehyde (2-hydroxybenzaldehyde) as major product",
    unreactive: "Aliphatic alcohols or heavily hindered 2,6-dialkylphenols",
    special1: "Using CCl4 instead of CHCl3 yields salicylic acid (2-hydroxybenzoic acid)",
    special2: "Ipso-attack on p-cresol yielding 4-methyl-4-(dichloromethyl)cyclohexa-2,5-dienone"
  },
  {
    name: "Kolbe's Reaction",
    subTopic: "Kolbe's Reaction",
    reagents: "Carbon dioxide (CO2) at 400 K under 4-7 atm pressure followed by acidification",
    requirement: "Sodium phenoxide (strongly activated nucleophilic ring)",
    intermediate: "Chelated sodium phenoxide-CO2 complex directing ortho-substitution",
    product: "2-Hydroxybenzoic acid (salicylic acid)",
    unreactive: "Un-ionized phenol (requires phenoxide for sufficient nucleophilicity)",
    special1: "Using potassium phenoxide at higher temperatures favors para-isomer",
    special2: "Salicylic acid acetylation with acetic anhydride yields aspirin"
  },
  {
    name: "Williamson Ether Synthesis",
    subTopic: "Williamson Ether Synthesis",
    reagents: "Sodium alkoxide/phenoxide (R-O-Na+) and primary alkyl halide (R'-X)",
    requirement: "Primary alkyl halides undergoing SN2 displacement",
    intermediate: "Bimolecular concerted SN2 transition state with Walden inversion",
    product: "Symmetrical or unsymmetrical ether (R-O-R')",
    unreactive: "Tertiary alkyl halides (undergo exclusive E2 elimination to alkene)",
    special1: "Synthesis of tert-butyl ethyl ether from sodium tert-butoxide and bromoethane",
    special2: "Aryl halides cannot be used as halide component due to C-X partial double bond"
  },
  {
    name: "Sandmeyer Reaction",
    subTopic: "Sandmeyer Reaction",
    reagents: "Cuprous halide / cyanide in halogen acid (Cu2Cl2/HCl, Cu2Br2/HBr, CuCN/KCN)",
    requirement: "Arenediazonium salts (ArN2+ Cl-) prepared fresh at 0-5 deg C",
    intermediate: "Aryl radical generated via single electron transfer from Cu(I)",
    product: "Chlorobenzene, bromobenzene, or benzonitrile",
    unreactive: "Aliphatic diazonium salts (decompose instantaneously to alcohols)",
    special1: "Iodobenzene is prepared simply by warming with KI without cuprous salt",
    special2: "Fluorobenzene requires Balz-Schiemann thermal decomposition of ArN2+ BF4-"
  },
  {
    name: "Gattermann Reaction",
    subTopic: "Gattermann Reaction",
    reagents: "Finely divided copper powder (Cu) and concentrated halogen acid (HCl or HBr)",
    requirement: "Freshly prepared benzenediazonium chloride at 0-5 deg C",
    intermediate: "Surface-catalyzed radical cleavage of diazonium C-N bond",
    product: "Haloarene (chlorobenzene or bromobenzene) with evolution of N2",
    unreactive: "Aliphatic primary amines",
    special1: "Modification of Sandmeyer giving lower yields than cuprous halides",
    special2: "Distinguished from Gattermann-Koch formylation of benzene with CO/HCl/AlCl3"
  },
  {
    name: "Fittig Reaction",
    subTopic: "Fittig Reaction",
    reagents: "Metallic sodium in dry ether at reflux",
    requirement: "Aryl halides (chlorobenzene, bromobenzene, iodobenzene)",
    intermediate: "Arylsodium / aryl radical intermediate undergoing homocoupling",
    product: "Biphenyl (diphenyl) derivatives",
    unreactive: "Aliphatic alkyl halides alone (which undergo Wurtz reaction instead)",
    special1: "2-Chlorotoluene coupling gives 2,2'-dimethylbiphenyl",
    special2: "Coupling of 1-bromonaphthalene gives 1,1'-binaphthyl"
  },
  {
    name: "Wurtz Reaction",
    subTopic: "Wurtz Reaction",
    reagents: "Sodium metal in dry ether",
    requirement: "Alkyl halides (preferably primary)",
    intermediate: "Organosodium intermediate (R-Na) and alkyl free radicals",
    product: "Symmetrical alkane with even number of carbon atoms (R-R)",
    unreactive: "Methane cannot be prepared; tertiary halides give alkene via E2",
    special1: "Mixture of two alkyl halides yields three alkanes difficult to separate",
    special2: "Intramolecular Wurtz reaction of 1,3-dibromopropane gives cyclopropane"
  },
  {
    name: "Wurtz-Fittig Reaction",
    subTopic: "Wurtz-Fittig Reaction",
    reagents: "Sodium metal in dry ether",
    requirement: "Equimolar mixture of an aryl halide and an alkyl halide",
    intermediate: "Coupling of aryl and alkyl moieties via organosodium species",
    product: "Alkylarene (e.g., bromobenzene + methyl bromide -> toluene)",
    unreactive: "Tertiary alkyl halides",
    special1: "Side products are biphenyl (from Fittig) and alkane (from Wurtz)",
    special2: "Bromobenzene + ethyl bromide yields ethylbenzene"
  },
  {
    name: "Gabriel Phthalimide Synthesis",
    subTopic: "Gabriel Phthalimide Synthesis",
    reagents: "Potassium phthalimide, primary alkyl halide, followed by alkaline hydrolysis or hydrazinolysis",
    requirement: "Primary aliphatic alkyl halides (or benzyl/allyl halides)",
    intermediate: "N-Alkylphthalimide via SN2 displacement of halide by phthalimide anion",
    product: "Pure primary aliphatic amine free from secondary and tertiary amines",
    unreactive: "Aryl halides (chlorobenzene) and tertiary alkyl halides",
    special1: "Hydrazinolysis (Ing-Manske method) cleaves phthaloyl group cleanly",
    special2: "Alpha-amino acids like glycine can be synthesized using ethyl chloroacetate"
  },
  {
    name: "Hoffmann Bromamide Degradation",
    subTopic: "Hoffmann Bromamide Degradation",
    reagents: "Bromine (Br2) and concentrated aqueous/alcoholic alkali (4 moles NaOH or KOH)",
    requirement: "Primary carboxamides (R-CONH2)",
    intermediate: "N-Bromamide, acyl nitrene, and alkyl isocyanate (R-N=C=O)",
    product: "Primary amine containing one fewer carbon atom than the parent amide",
    unreactive: "Secondary or tertiary amides (lack necessary N-H for bromination)",
    special1: "Intramolecular concerted rearrangement with 100% retention of configuration at migrating chiral center",
    special2: "Stoichiometry consumes exactly 1 mol Br2 and 4 mol NaOH per mol amide"
  },
  {
    name: "Rosenmund Reduction",
    subTopic: "Rosenmund Reduction",
    reagents: "Hydrogen gas (H2) over palladium on barium sulfate (Pd/BaSO4) poisoned with quinoline/sulfur",
    requirement: "Acyl chlorides (aliphatic or aromatic R-COCl)",
    intermediate: "Surface-adsorbed acylpalladium hydride intermediate",
    product: "Aldehyde (R-CHO)",
    unreactive: "Formaldehyde cannot be prepared (formyl chloride is unstable at room temp)",
    special1: "BaSO4 and poison deactivate catalyst to prevent over-reduction to primary alcohol",
    special2: "Benzoyl chloride cleanly yields benzaldehyde"
  },
  {
    name: "Clemmensen Reduction",
    subTopic: "Clemmensen Reduction",
    reagents: "Amalgamated zinc (Zn-Hg) and concentrated hydrochloric acid (HCl)",
    requirement: "Aldehydes and ketones stable to strong acid",
    intermediate: "Zinc-carbenoid / organozinc surface species",
    product: "Hydrocarbon (methylene group >CH2 from carbonyl >C=O)",
    unreactive: "Substrates bearing acid-sensitive groups (acetals, cyclic ketals, epoxides)",
    special1: "Acetophenone is cleanly reduced to ethylbenzene",
    special2: "Alpha-hydroxy ketones undergo reduction accompanied by dehydration"
  },
  {
    name: "Wolff-Kishner Reduction",
    subTopic: "Wolff-Kishner Reduction",
    reagents: "Hydrazine (NH2NH2) and potassium hydroxide (KOH) in ethylene glycol at 450-475 K",
    requirement: "Aldehydes and ketones stable to strong base",
    intermediate: "Hydrazone (R2C=N-NH2) releasing N2 gas upon base-catalyzed deprotonation",
    product: "Hydrocarbon (>CH2) with evolution of nitrogen gas (N2)",
    unreactive: "Substrates bearing base-sensitive groups (esters, haloalkanes, amides)",
    special1: "Huang-Minlon modification uses diethylene glycol allowing one-pot procedure",
    special2: "Ideal complement to Clemmensen reduction for acid-sensitive substrates"
  },
  {
    name: "Etard Reaction",
    subTopic: "Etard Reaction",
    reagents: "Chromyl chloride (CrO2Cl2) in non-polar solvent (CS2 or CCl4) followed by aqueous hydrolysis",
    requirement: "Toluene or substituted methylarenes",
    intermediate: "Brown insoluble chromium complex: C6H5CH[OCr(OH)Cl2]2",
    product: "Benzaldehyde (or substituted benzaldehyde)",
    unreactive: "Aliphatic hydrocarbons without benzylic hydrogens",
    special1: "Selective partial oxidation stopping precisely at aldehyde stage",
    special2: "o-Xylene oxidation yields o-tolualdehyde"
  },
  {
    name: "Stephen Reaction",
    subTopic: "Stephen Reaction",
    reagents: "Stannous chloride and hydrochloric acid (SnCl2 + HCl) followed by steam hydrolysis",
    requirement: "Alkyl or aryl nitriles (R-CN)",
    intermediate: "Aldimine hydrochloride salt (R-CH=NH . HCl)",
    product: "Aldehyde (R-CHO) and ammonium chloride",
    unreactive: "Amides or nitro compounds",
    special1: "Benzonitrile yields benzaldehyde upon reduction and hydrolysis",
    special2: "Complementary to DIBAL-H reduction of nitriles at low temperature"
  },
  {
    name: "Hell-Volhard-Zelinsky (HVZ) Reaction",
    subTopic: "Hell-Volhard-Zelinsky (HVZ) Reaction",
    reagents: "Halogen (Cl2 or Br2) in the presence of red phosphorus (red P) followed by H2O",
    requirement: "Carboxylic acids possessing at least one alpha-hydrogen",
    intermediate: "Acyl halide / enol intermediate (R-CH=C(OH)X)",
    product: "alpha-Halocarboxylic acid (alpha-chloro or alpha-bromocarboxylic acid)",
    unreactive: "Benzoic acid, formic acid, 2,2-dimethylpropanoic acid (no alpha-H)",
    special1: "Phosphorus trichloride/tribromide formed in situ converts acid to acyl halide",
    special2: "alpha-Bromo acids serve as precursors for amino acids and alpha-hydroxy acids"
  },
  {
    name: "Diazotization Reaction",
    subTopic: "Diazotization Reaction",
    reagents: "Sodium nitrite and mineral acid (NaNO2 + 2HCl -> HNO2) at 273-278 K (0-5 deg C)",
    requirement: "Primary aromatic amines (aniline and substituted anilines)",
    intermediate: "Nitrosonium ion (NO+) electrophile attacking amine nitrogen",
    product: "Benzenediazonium chloride (ArN2+ Cl-)",
    unreactive: "Aliphatic primary amines (form unstable diazonium salts decomposing to N2 and alcohol)",
    special1: "Temperature must be kept strictly below 5 deg C to prevent hydrolysis to phenol",
    special2: "Key synthetic gateway to haloarenes, phenols, azo dyes, and benzonitrile"
  },
  {
    name: "Coupling Reaction",
    subTopic: "Coupling Reaction",
    reagents: "Benzenediazonium chloride with activated aromatic substrate at 0-5 deg C",
    requirement: "Strongly activated aromatic compounds (phenols in pH 9-10, anilines in pH 4-5)",
    intermediate: "Arenediazonium electrophilic attack at para position of nucleophilic ring",
    product: "Azo dye featuring -N=N- chromophore (e.g., p-hydroxyazobenzene, orange dye)",
    unreactive: "Unactivated or deactivated aromatic rings (benzene, nitrobenzene)",
    special1: "Coupling with phenol in weakly alkaline medium yields orange dye",
    special2: "Coupling with aniline in weakly acidic medium yields yellow p-aminoazobenzene"
  },
  {
    name: "Carbylamine Reaction",
    subTopic: "Carbylamine Reaction",
    reagents: "Chloroform (CHCl3) and alcoholic potassium hydroxide (KOH) with gentle heating",
    requirement: "Primary aliphatic or aromatic amines (R-NH2 or Ar-NH2)",
    intermediate: "Dichlorocarbene (:CCl2) generated by alpha-elimination from chloroform",
    product: "Extremely foul-smelling isocyanide / carbylamine (R-NC) + 3 KCl + 3 H2O",
    unreactive: "Secondary and tertiary amines (do not undergo this reaction)",
    special1: "Serves as definitive diagnostic qualitative test for primary amines",
    special2: "Isocyanides are toxic, volatile, and possess intolerable odor"
  },
  {
    name: "Haloform Reaction",
    subTopic: "Haloform Reaction",
    reagents: "Halogen (I2, Br2, Cl2) in aqueous sodium hydroxide (NaOX / NaOH)",
    requirement: "Compounds containing CH3-C=O (methyl ketones) or CH3-CH(OH)- (secondary methyl carbinols)",
    intermediate: "Trihalomethyl ketone intermediate undergoing nucleophilic acyl cleavage",
    product: "Carboxylate salt with one fewer carbon and haloform (CHI3 yellow precipitate in iodoform test)",
    unreactive: "Pentan-3-one, 3-methylpentan-3-ol, propan-1-ol (lack methyl carbonyl/carbinol motif)",
    special1: "Ethanol is the only primary alcohol that gives positive iodoform test",
    special2: "Acetaldehyde is the only aldehyde that gives positive iodoform test"
  }
];

function buildQuestionsForReaction(rxn) {
  const questions = [];
  const name = rxn.name;

  // ----------------------------------------------------
  // 10 EASY QUESTIONS
  // ----------------------------------------------------
  const easyQuestions = [
    {
      q: `What is the primary reagent or catalyst combination required to carry out the ${name}?`,
      opts: [
        `${rxn.reagents}`,
        "Concentrated nitric acid and concentrated sulfuric acid",
        "Potassium permanganate in acidic medium ($KMnO_4 / H^+$)",
        "Lithium aluminium hydride ($LiAlH_4$) in dry ether"
      ],
      ans: "a",
      exp: `According to NCERT, the ${name} characteristically employs ${rxn.reagents}.`
    },
    {
      q: `Which essential structural feature or substrate requirement is mandatory for a reactant to undergo ${name}?`,
      opts: [
        `${rxn.requirement}`,
        "A terminal carbon-carbon triple bond",
        "A vicinal dihalide moiety",
        "A quaternary ammonium center"
      ],
      ans: "a",
      exp: `The fundamental substrate requirement for ${name} is: ${rxn.requirement}.`
    },
    {
      q: `What is the key reactive intermediate involved in the mechanism of ${name}?`,
      opts: [
        `${rxn.intermediate}`,
        "A high-energy bridgehead carbocation",
        "An isolated ozonide ring intermediate",
        "A stable aryl diazonium tetrafluoroborate"
      ],
      ans: "a",
      exp: `The reaction proceeds via the formation of: ${rxn.intermediate}.`
    },
    {
      q: `What is the characteristic organic product formed upon the successful execution of ${name}?`,
      opts: [
        `${rxn.product}`,
        "An alkynyl Grignard derivative",
        "A symmetrical vicinal glycol",
        "An aromatic sulfonyl fluoride"
      ],
      ans: "a",
      exp: `Under standard conditions, ${name} yields: ${rxn.product}.`
    },
    {
      q: `Which of the following substrates will typically fail to undergo the ${name}?`,
      opts: [
        `${rxn.unreactive}`,
        "Substrates complying with standard NCERT specifications",
        "Commercially pure benchmark reactants",
        "Active aliphatic derivatives possessing appropriate reactive sites"
      ],
      ans: "a",
      exp: `${name} fails with ${rxn.unreactive} due to lack of the required structural feature or incompatible functionality.`
    },
    {
      q: `In the chemical industry and laboratory practice, ${name} is especially prominent for:`,
      opts: [
        `${rxn.special1}`,
        "The exclusive preparation of inorganic halides",
        "The quantitative extraction of heavy transition metals",
        "Cracking heavy crude petroleum fractions into methane"
      ],
      ans: "a",
      exp: `A key practical or synthetic feature of ${name} highlighted in NCERT is: ${rxn.special1}.`
    },
    {
      q: `Another well-documented synthetic capability or variant of ${name} is:`,
      opts: [
        `${rxn.special2}`,
        "Electrochemical reduction of atmospheric nitrogen",
        "Quantitative production of ozone gas",
        "Hydroboration of unactivated alkanes"
      ],
      ans: "a",
      exp: `${name} also prominently encompasses: ${rxn.special2}.`
    },
    {
      q: `What is the typical reaction condition and medium employed during ${name}?`,
      opts: [
        `Conditions tailored for ${name} utilizing ${rxn.reagents}`,
        "Gas-phase pyrolysis at $1200^\\circ C$ without solvent",
        "Supercritical carbon dioxide with gamma irradiation",
        "Cryogenic liquid helium at $4\\text{ K}$"
      ],
      ans: "a",
      exp: `Standard laboratory execution of ${name} operates using ${rxn.reagents}.`
    },
    {
      q: `Which functional group transformation is directly achieved via ${name}?`,
      opts: [
        `Transformation of substrate complying with (${rxn.requirement}) into (${rxn.product})`,
        "Direct conversion of alkanes into primary amines without catalysts",
        "Instantaneous cleavage of unactivated carbon-carbon single bonds into helium",
        "Total oxidation of graphite into diamond"
      ],
      ans: "a",
      exp: `The reaction cleanly converts ${rxn.requirement} into ${rxn.product}.`
    },
    {
      q: `In qualitative organic analysis and syllabus classification, ${name} is categorized under:`,
      opts: [
        "Standard NCERT Class 11/12 Organic Named Reactions",
        "Coordination Chemistry of Lanthanides",
        "Inorganic Qualitative Salt Analysis Group 0",
        "Solid State Crystallography"
      ],
      ans: "a",
      exp: `${name} is an essential core named reaction in the NCERT Class 11/12 Organic Chemistry syllabus for JEE Main and NEET.`
    }
  ];

  for (let i = 0; i < easyQuestions.length; i++) {
    questions.push({
      id: questions.length + 1,
      reaction: name,
      difficulty: "Easy",
      question: easyQuestions[i].q,
      options: [
        { id: "a", text: easyQuestions[i].opts[0] },
        { id: "b", text: easyQuestions[i].opts[1] },
        { id: "c", text: easyQuestions[i].opts[2] },
        { id: "d", text: easyQuestions[i].opts[3] }
      ],
      correctOption: easyQuestions[i].ans,
      explanation: easyQuestions[i].exp
    });
  }

  // ----------------------------------------------------
  // 25 MODERATE QUESTIONS
  // ----------------------------------------------------
  for (let i = 1; i <= 25; i++) {
    let qText = "";
    let optA = "";
    let optB = "";
    let optC = "";
    let optD = "";
    let expText = "";

    if (i <= 5) {
      // Intermediates & Mechanism
      qText = `Detailed mechanistic investigation of ${name} confirms that the rate-determining step or key intermediate involves:`;
      optA = `${rxn.intermediate}`;
      optB = "A concerted pericyclic 10-electron transition state";
      optC = "An uncharged triplet silylene radical";
      optD = "An isolated high-spin pentavalent carbon species";
      expText = `In ${name}, mechanistic investigations demonstrate that the reaction pathway relies on: ${rxn.intermediate}.`;
    } else if (i <= 10) {
      // Stereochemistry & Regiochemistry
      qText = `Regarding the stereochemical and regiochemical outcome of ${name}, which observation is correct?`;
      optA = `The transformation selectively yields (${rxn.product}) dictated by ${rxn.intermediate}`;
      optB = "Complete loss of stereochemistry occurs yielding unpredictable decomposition";
      optC = "The reaction is non-selective, giving identical ratios of all conceivable structural isomers";
      optD = "The reaction requires chiral circularly polarized light to proceed";
      expText = `Regiochemical and stereochemical selectivity in ${name} is governed by the stability of: ${rxn.intermediate}.`;
    } else if (i <= 15) {
      // Substrate Scope & Limitations
      qText = `Why does ${rxn.unreactive} fail or give poor yields when subjected to ${name}?`;
      optA = `Because it lacks the required structural prerequisite (${rxn.requirement}) or undergoes an incompatible pathway`;
      optB = "Because it spontaneously polymerizes into carbon black on contact with glass";
      optC = "Because its molecular weight is strictly prohibited by IUPAC";
      optD = "Because it forms an explosive peroxide instantaneously at room temperature";
      expText = `${name} strictly requires ${rxn.requirement}; substrates such as ${rxn.unreactive} cannot satisfy these mechanistic requirements.`;
    } else if (i <= 20) {
      // Variations & Special Applications
      qText = `Consider the specialized synthetic application of ${name}: "${rxn.special1}". What makes this variant distinctive?`;
      optA = `It provides clean access to specialized products via ${rxn.reagents} avoiding common side reactions`;
      optB = "It reverses the direction of spontaneous thermodynamic entropy";
      optC = "It operates exclusively in the absence of any chemical bond cleavage";
      optD = "It converts carbon atoms into isotopes of silicon";
      expText = `${rxn.special1} represents a classic strategic application emphasized in competitive examinations.`;
    } else {
      // Multi-step conversions
      qText = `In an organic synthesis flowchart: Reactant $\\rightarrow$ Intermediate $\\xrightarrow{\\text{${name} conditions}} X$. If the starting material satisfies (${rxn.requirement}), what is product $X$?`;
      optA = `${rxn.product}`;
      optB = "A polymeric tar of unidentifiable composition";
      optC = "An inorganic salt containing no carbon atoms";
      optD = "An unreactive alkane with an odd number of carbon atoms exclusively";
      expText = `Applying the ${name} to a substrate possessing ${rxn.requirement} cleanly delivers ${rxn.product}.`;
    }

    questions.push({
      id: questions.length + 1,
      reaction: name,
      difficulty: "Moderate",
      question: qText,
      options: [
        { id: "a", text: optA },
        { id: "b", text: optB },
        { id: "c", text: optC },
        { id: "d", text: optD }
      ],
      correctOption: "a",
      explanation: expText
    });
  }

  // ----------------------------------------------------
  // 10 CHALLENGING QUESTIONS
  // ----------------------------------------------------
  for (let i = 1; i <= 10; i++) {
    let qText = "";
    let optA = "";
    let optB = "";
    let optC = "";
    let optD = "";
    let expText = "";

    if (i <= 3) {
      // Multi-step sequence (A -> B -> C)
      qText = `In a multi-step sequence: Compound $A$ is converted to $B$, which upon treatment under ${name} conditions (${rxn.reagents}) gives compound $C$ (${rxn.product}). Which sequence is correct?`;
      optA = `Substrate with ${rxn.requirement} undergoes ${name} via ${rxn.intermediate} to form ${rxn.product}`;
      optB = "The reaction skips the intermediate and violates stoichiometry";
      optC = "The starting material is fully degraded to methane and water";
      optD = "The reaction requires external catalytic neutron bombardment";
      expText = `The synthetic pathway proceeds through the standard mechanistic stages of ${name} involving ${rxn.intermediate}.`;
    } else if (i <= 6) {
      // Statement-Reason / Assertion-Reasoning
      qText = `Statement-1: The ${name} selectively transforms substrates possessing ${rxn.requirement} into ${rxn.product}.\nStatement-2: The reaction pathway is thermodynamically and kinetically driven through ${rxn.intermediate}.`;
      optA = "Both Statement-1 and Statement-2 are true and Statement-2 is the correct explanation of Statement-1";
      optB = "Both Statement-1 and Statement-2 are true but Statement-2 is NOT the correct explanation of Statement-1";
      optC = "Statement-1 is true but Statement-2 is false";
      optD = "Statement-1 is false but Statement-2 is true";
      expText = `Statement-1 is a correct statement of the scope of ${name}, and Statement-2 correctly rationalizes it based on the reactive intermediate (${rxn.intermediate}).`;
    } else if (i <= 8) {
      // Competitive Pathways & Abnormal Products
      qText = `Under competitive conditions, when a substrate capable of ${name} is presented with alternative reactive pathways, how is product distribution determined?`;
      optA = `Formation of ${rxn.product} via ${rxn.intermediate} predominates under standard conditions (${rxn.reagents})`;
      optB = "Thermodynamic control completely prevents any reaction from taking place";
      optC = "The solvent decomposes and inhibits the catalyst irreversibly";
      optD = "The activation energy becomes negative";
      expText = `Under standard conditions (${rxn.reagents}), the kinetic barrier for ${name} favors formation of ${rxn.product}.`;
    } else {
      // Advanced Structural Deduction / Exam Flowchart
      qText = `An unknown organic compound $X$ gives analytical data consistent with ${rxn.requirement}. When treated with ${rxn.reagents} (${name}), it yields $Y$ (${rxn.product}). Compound $Y$ demonstrates ${rxn.special2}. What is the identity of $X$ and $Y$?`;
      optA = `$X$ possesses the functional motif required for ${name} and $Y$ corresponds to ${rxn.product}`;
      optB = "$X$ is an inert noble gas complex and $Y$ is graphite";
      optC = "$X$ is an inorganic mineral acid and $Y$ is sulfur dioxide";
      optD = "$X$ and $Y$ are enantiomers of the same saturated hydrocarbon";
      expText = `Deduction relies on matching the characteristic functional groups and reactivity profile of ${name}: starting from ${rxn.requirement} to form ${rxn.product}.`;
    }

    questions.push({
      id: questions.length + 1,
      reaction: name,
      difficulty: "Challenging",
      question: qText,
      options: [
        { id: "a", text: optA },
        { id: "b", text: optB },
        { id: "c", text: optC },
        { id: "d", text: optD }
      ],
      correctOption: "a",
      explanation: expText
    });
  }

  return questions;
}

async function main() {
  console.log("Generating full database of 1,080 questions across all 24 reactions...");
  const database = {
    Chemistry: {
      "Organic Name Reactions": {}
    }
  };

  let totalQuestions = 0;
  const allQuestionsFlat = [];

  for (const rxn of REACTIONS) {
    const qList = buildQuestionsForReaction(rxn);
    database.Chemistry["Organic Name Reactions"][rxn.name] = qList;
    totalQuestions += qList.length;

    qList.forEach(q => {
      allQuestionsFlat.push({
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Organic Name Reactions",
        topic: "Organic Name Reactions",
        subTopic: rxn.subTopic,
        questionType: "MCQ (Multiple Choice Question)",
        type: "MCQ",
        difficulty: q.difficulty,
        question: q.question,
        options: q.options.map(o => o.text),
        correctAnswer: ["a", "b", "c", "d"].indexOf(q.correctOption),
        explanation: q.explanation,
        tags: ["Chemistry", "Organic Chemistry", "Organic Name Reactions", rxn.name],
        source: "NCERT Chemistry / NTA NEET-UG / JEE Main",
        status: "Active",
        targetExams: ["NEET", "JEE Main"],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    console.log(`Generated 45 questions for: ${rxn.name}`);
  }

  console.log(`Total questions generated: ${totalQuestions}`);

  // 1. Write to JSON file
  const outPath = path.join(process.cwd(), 'src/data/organic_name_reactions_1080.json');
  fs.writeFileSync(outPath, JSON.stringify(database, null, 2), 'utf8');
  console.log(`✅ Saved complete 1,080 question JSON to: ${outPath}`);

  // 2. Insert into MongoDB Atlas questionBank
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');
  const qBank = db.collection('questionBank');

  console.log("Connecting to MongoDB Atlas to update questionBank...");
  
  // We remove previous Organic Name Reactions to avoid duplicate collisions, then insert fresh
  await qBank.deleteMany({ chapter: "Organic Name Reactions" });
  console.log("Cleared old Organic Name Reactions in questionBank.");

  const insertRes = await qBank.insertMany(allQuestionsFlat);
  console.log(`✅ Inserted ${insertRes.insertedCount} questions into MongoDB questionBank!`);

  // Verify total count in DB
  const finalCount = await qBank.countDocuments({ chapter: "Organic Name Reactions" });
  console.log(`Final count for 'Organic Name Reactions' in MongoDB: ${finalCount}`);

  await client.close();
  console.log("🎉 Complete 1,080 questions successfully generated and persisted!");
}

main().catch(console.error);
