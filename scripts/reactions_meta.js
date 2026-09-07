const fs = require('fs');
const path = require('path');

const REACTIONS_META = [
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

console.log("Meta loaded for", REACTIONS_META.length, "reactions.");
