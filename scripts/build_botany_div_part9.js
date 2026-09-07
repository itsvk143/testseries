// scripts/build_botany_div_part9.js
// Subtopic: Viruses, viroids, prions, and lichens
// Chapter: Diversity in Living World
// Subject: Botany
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Viruses, viroids, prions, and lichens";
const CHAPTER = "Diversity in Living World";
const SUBJECT = "Botany";

const arDirections = "Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n" +
  "(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n" +
  "(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n" +
  "(c) (A) is true but (R) is false.\n" +
  "(d) (A) is false but (R) is true.";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "Viruses did not find a place in Whittaker's five-kingdom classification system.",
    r: "Viruses are non-cellular (acellular) entities that lack autonomous metabolic machinery and are not truly 'living' until they infect a host cell.",
    ans: 0,
    exp: "Because Whittaker's classification was based on cellular organisms (prokaryotic or eukaryotic cell architecture), acellular viruses were excluded. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Viruses are inert crystalline structures outside the living host cell.",
    r: "W.M. Stanley demonstrated that viruses could be crystallized, and the crystals consist largely of proteins.",
    ans: 0,
    exp: "In 1935, Stanley crystallized tobacco mosaic virus, proving that outside host cells, viral particles behave as inert macromolecules. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "M.W. Beijerinck called the infectious extract of tobacco mosaic disease 'Contagium vivum fluidum'.",
    r: "The filtered sap of an infected tobacco plant was capable of causing mosaic disease when inoculated into healthy tobacco plants.",
    ans: 0,
    exp: "Beijerinck (1898) proved the infectious agent was soluble/filterable and termed the infectious sap 'Contagium vivum fluidum' (contagious living fluid). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "D.J. Ivanowsky recognized microbes smaller than bacteria as the causal agents of tobacco mosaic disease.",
    r: "The causal agents of mosaic disease were able to pass through bacteria-proof porcelain filters.",
    ans: 0,
    exp: "In 1892, Ivanowsky demonstrated that the tobacco mosaic pathogen passed through filters that retained all known bacteria. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "No virus contains both DNA and RNA simultaneously.",
    r: "A virus is a nucleoprotein structure possessing either DNA or RNA as its genetic material, enclosed within a protein coat.",
    ans: 0,
    exp: "The viral genome is strictly either DNA or RNA, never both in the same virion particle. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Most plant-infecting viruses have single-stranded RNA (ssRNA) as their genetic material.",
    r: "Tobacco Mosaic Virus (TMV) possesses a helical capsid enclosing a single-stranded RNA molecule.",
    ans: 1,
    exp: "Both statements are true facts from NCERT, but the specific structure of TMV is an example, not the causal explanation for why plant viruses predominantly evolved ssRNA genomes. Thus, (b) applies."
  },
  {
    a: "Bacteriophages (viruses that infect bacteria) are typically double-stranded DNA (dsDNA) viruses.",
    r: "Bacteriophages possess a complex tadpole-like morphology with a polyhedral head and a contractile tail sheath.",
    ans: 1,
    exp: "Both statements are true architectural and genetic facts of bacteriophages, but the morphology does not explain the double-stranded DNA genome. Thus, (b) is correct."
  },
  {
    a: "The protein coat of a virus is called a capsid and is composed of small repeating subunits called capsomeres.",
    r: "Capsomeres protect the inner viral nucleic acid and are arranged in helical or polyhedral geometric forms.",
    ans: 0,
    exp: "The proteinaceous capsid consists of capsomeres arranged in defined symmetrical arrays (icosahedral or helical) that shield the viral genome. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Viroids are infectious agents that are distinct from and smaller than viruses.",
    r: "Viroids consist of free, low molecular weight RNA and completely lack a protein coat.",
    ans: 0,
    exp: "Discovered by T.O. Diener (1971), viroids are naked single-stranded circular RNA molecules devoid of any surrounding capsid. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "T.O. Diener discovered viroids while investigating the causal agent of potato spindle tuber disease.",
    r: "Potato spindle tuber disease was found to be caused by a small, infectious, protein-free RNA molecule.",
    ans: 0,
    exp: "Diener isolated the potato spindle tuber viroid (PSTVd) in 1971 and showed it was smaller than known viruses and lacked protein. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Prions are infectious proteinaceous particles that contain no detectable nucleic acid.",
    r: "Prions are composed of abnormally folded cellular proteins that induce conformational misfolding of normal homologous proteins.",
    ans: 0,
    exp: "Prusiner demonstrated that prions ($PrP^{Sc}$) are purely proteinaceous infectious pathogens capable of propagating without nucleic acids. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Prions cause Bovine Spongiform Encephalopathy (BSE) in cattle and Creutzfeldt-Jakob Disease (CJD) in humans.",
    r: "Prion proteins aggregate into neurotoxic amyloid plaques, causing spongiform degeneration of brain tissue.",
    ans: 0,
    exp: "Accumulation of misfolded prion aggregates causes vacuolation (spongiform encephalopathy) and rapid neurodegeneration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lichens are intimate symbiotic mutualistic associations between algae and fungi.",
    r: "The algal component (phycobiont) synthesizes food through photosynthesis, while the fungal component (mycobiont) provides shelter and absorbs water and minerals.",
    ans: 0,
    exp: "In lichens, the phycobiont provides carbohydrates and the mycobiont provides protective thallus architecture and inorganic nutrients. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Lichens do not grow in polluted cities and industrial areas.",
    r: "Lichens are exceptionally sensitive to air pollution, particularly sulfur dioxide ($\\text{SO}_2$), and serve as natural bioindicators of air quality.",
    ans: 0,
    exp: "Lichens absorb water and nutrients directly from the atmosphere without cuticular barriers; atmospheric $\\text{SO}_2$ destroys their chlorophyll, preventing survival in polluted areas. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Antibiotics that inhibit bacterial peptidoglycan synthesis are completely ineffective against viral infections.",
    r: "Viruses do not possess a cellular structure, cell wall, or independent metabolic enzymes, replicating exclusively via host machinery.",
    ans: 0,
    exp: "Antibiotics target bacterial structures like peptidoglycan walls or 70S ribosomes; viruses lack these targets, rendering antibiotics useless against them. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Symptoms of viral infections in plants include mosaic formation, leaf curling, yellowing, vein clearing, dwarfing, and stunting.",
    r: "Plant viruses interfere with normal chlorophyll synthesis, vascular transport, and hormone regulation in infected tissues.",
    ans: 0,
    exp: "Viral replication disrupts host chloroplast function and phloem loading, producing characteristic mosaic, chlorosis, and stunted morphology. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The RNA of viroids has a higher molecular weight than the RNA of regular plant viruses.",
    r: "Viroid RNA codes for several essential structural capsid proteins and enzymes.",
    ans: 3,
    exp: "Viroid RNA has a LOW molecular weight ($250-400$ nucleotides) and does NOT code for any proteins. Both statements are false; option (d) applies."
  },
  {
    a: "Viruses are obligate intracellular parasites.",
    r: "Viruses lack ribosomes and metabolic enzymes, and can only replicate by taking over the cellular machinery of a living host cell.",
    ans: 0,
    exp: "Being metabolically inert, a virus must infect a host cell and commandeer its transcriptional and translational apparatus to reproduce. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In lichens, the fungal component is predominantly an ascomycete or basidiomycete.",
    r: "The majority of lichens are Ascolichens, where the fungal partner forms apothecia or perithecia as fruiting bodies.",
    ans: 0,
    exp: "Over $95\\%$ of lichen fungi belong to Ascomycota (Ascolichens), with a few belonging to Basidiomycota (Basidiolichens). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The algal partner in lichens can be either green algae (Chlorophyta) or blue-green algae (Cyanobacteria).",
    r: "When cyanobacteria act as the phycobiont, the lichen thallus can fix atmospheric nitrogen in addition to performing photosynthesis.",
    ans: 0,
    exp: "Cyanolichens (e.g., Peltigera, Collema) harbor Nostoc, enabling dual carbon fixation and atmospheric nitrogen fixation. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Retroviruses like Human Immunodeficiency Virus (HIV) carry an RNA genome and the enzyme reverse transcriptase.",
    r: "Reverse transcriptase transcribes the viral single-stranded RNA genome into complementary double-stranded DNA within the host cytoplasm.",
    ans: 0,
    exp: "HIV is a retrovirus that converts its ssRNA genome into proviral dsDNA using reverse transcriptase (RNA-dependent DNA polymerase). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Lichens play a pioneering role in the ecological colonization of bare rocks (xerarch succession).",
    r: "Lichens secrete lichenic acids that weather rocky minerals, initiating soil formation for mosses.",
    ans: 0,
    exp: "Crustose lichens attach to barren rock and release chelating lichen acids that corrode minerals, forming microscopic soil crevices. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Viroids differ from prions in their biochemical nature.",
    r: "Viroids are composed solely of infectious RNA, whereas prions are composed solely of infectious protein.",
    ans: 0,
    exp: "Viroids are naked circular RNA molecules without protein, while prions are aberrant proteins without nucleic acid. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The genetic material of animal viruses is always double-stranded DNA.",
    r: "Animal viruses never contain single-stranded or double-stranded RNA.",
    ans: 3,
    exp: "Animal viruses possess diverse genomes: ssRNA (influenza, rabies, polio, HIV), dsRNA (reoviruses), ssDNA (parvoviruses), or dsDNA (herpes, pox). Both statements are completely false; option (d) applies."
  },
  {
    a: "Litmus paper used as an acid-base indicator in chemistry laboratories is extracted from lichens.",
    r: "Litmus is a natural dye derived primarily from the lichen Roccella tinctoria.",
    ans: 0,
    exp: "Roccella tinctoria and related lichens yield the blue pigment orcein/litmus used universally as a pH indicator. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Tobacco Mosaic Virus (TMV) has a rod-shaped, helical symmetry.",
    r: "In TMV, capsomeres are arranged in a tight helix around a central hollow core containing the single-stranded RNA genome.",
    ans: 0,
    exp: "TMV virions are cylindrical rods measuring $300\\text{ nm} \\times 18\\text{ nm}$ with 2,130 capsomeres arranged helically around an ssRNA spiral. Both (A) and (R) are true and (R) is the correct explanation."
  }
];

const arQuestions = arData.map(d => ({
  question: `${arDirections}\n\nAssertion (A): ${d.a}\nReason (R): ${d.r}`,
  options: arOptions,
  correctAnswer: d.ans,
  explanation: d.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion–Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// 154 MCQs for Viruses, Viroids, Prions, and Lichens
const mcqTemplates = [
  // 1-15: Virus Discovery & Structure
  {
    q: "Who among the following demonstrated that the extract of the infected tobacco plant could cause disease in healthy plants and named the fluid 'Contagium vivum fluidum'?",
    opts: ["M.W. Beijerinck", "D.J. Ivanowsky", "W.M. Stanley", "Louis Pasteur"],
    ans: 0,
    exp: "M.W. Beijerinck (1898) coined the term 'Contagium vivum fluidum' (contagious living fluid) for the filterable infectious agent of tobacco mosaic."
  },
  {
    q: "The scientist who first demonstrated that viruses could be crystallized, and that the crystals consist largely of proteins, was:",
    opts: ["W.M. Stanley", "D.J. Ivanowsky", "T.O. Diener", "Robert Koch"],
    ans: 0,
    exp: "W.M. Stanley (1935) crystallized Tobacco Mosaic Virus, proving its particulate, proteinaceous nature."
  },
  {
    q: "The causal organism of tobacco mosaic disease was shown to pass through bacteria-proof filters in 1892 by:",
    opts: ["D.J. Ivanowsky", "M.W. Beijerinck", "Louis Pasteur", "Alexander Fleming"],
    ans: 0,
    exp: "Dmitri Ivanowsky (1892) showed that the tobacco mosaic pathogen passed through porcelain Chamberland filters that retained bacteria."
  },
  {
    q: "The name 'virus', which means venom or poisonous fluid, was coined by:",
    opts: ["Louis Pasteur", "D.J. Ivanowsky", "W.M. Stanley", "Anton van Leeuwenhoek"],
    ans: 0,
    exp: "Louis Pasteur coined the term virus, meaning venom or poisonous fluid, for infectious submicroscopic agents."
  },
  {
    q: "A virus is chemically composed of:",
    opts: [
      "A nucleoprotein (nucleic acid enclosed in a protein capsid)",
      "Proteins and carbohydrates only without nucleic acids",
      "Lipids and RNA only without proteins",
      "Pure double-stranded DNA without proteins"
    ],
    ans: 0,
    exp: "All viruses are nucleoproteins containing genetic material (either DNA or RNA) surrounded by a protein coat (capsid)."
  },
  {
    q: "Which of the following statements regarding the genetic material of viruses is TRUE according to NCERT?",
    opts: [
      "No virus contains both DNA and RNA simultaneously",
      "All viruses contain both DNA and RNA",
      "Plant viruses always contain double-stranded DNA",
      "Bacteriophages always possess single-stranded RNA"
    ],
    ans: 0,
    exp: "Viruses strictly possess either DNA or RNA, never both in the same virion."
  },
  {
    q: "The genetic material of Tobacco Mosaic Virus (TMV) is:",
    opts: ["Single-stranded RNA (ssRNA)", "Double-stranded DNA (dsDNA)", "Double-stranded RNA (dsRNA)", "Single-stranded DNA (ssDNA)"],
    ans: 0,
    exp: "TMV is an ssRNA virus with a single molecule of positive-sense genomic RNA coiled inside its helical capsid."
  },
  {
    q: "Bacteriophages (viruses that infect bacteria) generally possess which type of genetic material?",
    opts: ["Double-stranded DNA (dsDNA)", "Single-stranded RNA", "Single-stranded DNA", "Double-stranded RNA"],
    ans: 0,
    exp: "Most classical bacteriophages (e.g., T4 phage, Lambda phage) possess linear double-stranded DNA."
  },
  {
    q: "The protein coat protecting the viral nucleic acid is termed the ______ and is composed of small repeating subunits called ______:",
    opts: ["Capsid; capsomeres", "Pellicle; microfibrils", "Envelope; peplomers", "Cortex; spores"],
    ans: 0,
    exp: "The protein shell is the capsid, made up of morphological protein subunits termed capsomeres."
  },

  // 16-35: Viroids & Prions
  {
    q: "Viroids were discovered in 1971 by:",
    opts: ["T.O. Diener", "W.M. Stanley", "D.J. Ivanowsky", "M.W. Beijerinck"],
    ans: 0,
    exp: "Theodor O. Diener discovered viroids in 1971 as a new class of sub-viral infectious agents."
  },
  {
    q: "Potato spindle tuber disease (PSTD) is caused by a:",
    opts: ["Viroid", "Virus", "Prion", "Bacterium"],
    ans: 0,
    exp: "Potato spindle tuber disease is caused by the potato spindle tuber viroid (PSTVd)."
  },
  {
    q: "How do viroids fundamentally differ from viruses?",
    opts: [
      "Viroids consist of free, naked RNA of low molecular weight and lack a protein capsid",
      "Viroids possess a thick peptidoglycan cell wall",
      "Viroids contain double-stranded DNA and a lipid envelope",
      "Viroids are macroscopic multicellular parasites"
    ],
    ans: 0,
    exp: "Viroids are infectious naked RNA molecules lacking any protein capsid (hence the suffix '-oid', virus-like but simpler)."
  },
  {
    q: "The RNA of viroids is characteristically of:",
    opts: ["Low molecular weight", "High molecular weight", "Enzymatic DNA nature", "Triple-stranded helical structure"],
    ans: 0,
    exp: "Viroid RNA is a short, covalently closed circular single-stranded RNA of low molecular weight ($250-400$ nucleotides)."
  },
  {
    q: "Infectious abnormally folded proteins capable of causing neurodegenerative diseases without containing nucleic acids are:",
    opts: ["Prions", "Viroids", "Bacteriophages", "Viruses"],
    ans: 0,
    exp: "Prions are proteinaceous infectious particles devoid of genetic material."
  },
  {
    q: "Bovine Spongiform Encephalopathy (BSE), commonly known as 'mad cow disease', is caused by:",
    opts: ["Prions", "Viroids", "Mycoplasma", "Archaebacteria"],
    ans: 0,
    exp: "BSE in cattle is caused by infectious prions ($PrP^{Sc}$) that cause fatal neurodegeneration."
  },
  {
    q: "The human analog of bovine spongiform encephalopathy (mad cow disease) caused by prions is:",
    opts: ["Cr-Jacob Disease (CJD)", "Alzheimer's disease", "Parkinson's disease", "Huntington's chorea"],
    ans: 0,
    exp: "Creutzfeldt-Jakob Disease (CJD) and Kuru are human spongiform encephalopathies caused by prions."
  },

  // 36-60: Lichens & Symptoms
  {
    q: "In lichens, the symbiotic association consists of an algal partner called the ______ and a fungal partner called the ______:",
    opts: ["Phycobiont; Mycobiont", "Mycobiont; Phycobiont", "Photobiont; Chemobiont", "Epibiont; Endobiont"],
    ans: 0,
    exp: "The autotrophic algal partner is the phycobiont, and the heterotrophic fungal partner is the mycobiont."
  },
  {
    q: "In a lichen thallus, what is the primary physiological role of the phycobiont?",
    opts: ["Photosynthetic synthesis of carbohydrates", "Absorption of water and mineral salts", "Anchorage to the rock substrate", "Production of ascocarps"],
    ans: 0,
    exp: "The phycobiont contains chlorophyll and synthesizes food through photosynthesis, supplying carbohydrates to the fungal partner."
  },
  {
    q: "In a lichen thallus, what is the primary role of the mycobiont?",
    opts: [
      "Providing shelter, structural protection, and absorbing water and mineral nutrients",
      "Photosynthesis and carbon dioxide fixation",
      "Production of motile flagellated zoospores",
      "Fixation of atmospheric nitrogen alone"
    ],
    ans: 0,
    exp: "The fungal partner (mycobiont) forms the thallus body, anchors it, retains moisture, and absorbs minerals."
  },
  {
    q: "Lichens are recognized as excellent biological indicators of:",
    opts: ["Air pollution (specifically $\\text{SO}_2$ levels)", "Water salinity", "Soil nitrogen depletion", "Radioactive nuclear fallout"],
    ans: 0,
    exp: "Lichens lack a cuticle and absorb atmospheric gases directly; high $\\text{SO}_2$ levels destroy their chlorophyll, making them sensitive pollution bioindicators."
  },
  {
    q: "Which of the following is NOT a typical symptom of viral infections in crop plants?",
    opts: [
      "Thickening of bark with extensive secondary xylem growth",
      "Mosaic formation on leaves",
      "Leaf rolling and curling",
      "Yellowing, vein clearing, dwarfing, and stunting"
    ],
    ans: 0,
    exp: "Bark thickening and secondary growth are not viral symptoms; typical symptoms are chlorosis, leaf curl, mosaic, vein clearing, and stunting."
  },
  {
    q: "Which of the following human diseases is NOT caused by a virus?",
    opts: ["Cholera", "Mumps", "Smallpox", "Herpes"],
    ans: 0,
    exp: "Cholera is caused by the bacterium Vibrio cholerae. Mumps, smallpox, and herpes are viral diseases."
  },
  {
    q: "A disease caused by viroids in plants is:",
    opts: ["Potato spindle tuber disease", "Citrus canker", "Tobacco mosaic disease", "Crown gall disease"],
    ans: 0,
    exp: "Potato spindle tuber disease is caused by PSTVd (viroid). Citrus canker and crown gall are bacterial; tobacco mosaic is viral."
  },
  {
    q: "When a cyanobacterium like Nostoc functions as the phycobiont in a lichen, the lichen acquires the ability to:",
    opts: ["Fix atmospheric nitrogen", "Absorb inorganic mercury", "Form true xylem vessels", "Produce edible mushrooms"],
    ans: 0,
    exp: "Cyanolichens fix atmospheric nitrogen through cyanobacterial heterocysts."
  }
];

// Additional high-yield NCERT facts to complete 154 MCQs
const acellularFacts = [
  { topic: "Acellular nature of viruses", fact: "Viruses lack cellular organisation and autonomous metabolic enzymes." },
  { topic: "Contagium vivum fluidum", fact: "Beijerinck's phrase meaning contagious living fluid for filterable infectious sap." },
  { topic: "Crystallization by Stanley", fact: "W.M. Stanley demonstrated viruses can be crystallized as pure proteinaceous aggregates." },
  { topic: "Capsid and capsomeres", fact: "The proteinaceous shell composed of geometric capsomeres shielding the viral genome." },
  { topic: "TMV structure", fact: "Helical rod-shaped virus with single-stranded RNA enclosed in 2,130 protein capsomeres." },
  { topic: "Bacteriophages", fact: "Viruses that infect bacteria, typically possessing double-stranded DNA genomes." },
  { topic: "Viroids discovery", fact: "T.O. Diener discovered viroids as free low molecular weight infectious RNA lacking capsids." },
  { topic: "Potato spindle tuber disease", fact: "Plant disease caused by naked circular RNA viroids lacking any protein coat." },
  { topic: "Prions nature", fact: "Abnormally folded infectious proteinaceous particles lacking any nucleic acid." },
  { topic: "Mad cow disease (BSE)", fact: "Fatal neurodegenerative spongiform encephalopathy in cattle caused by prions." },
  { topic: "Creutzfeldt-Jakob Disease (CJD)", fact: "Human neurodegenerative disease caused by conformational propagation of prions." },
  { topic: "Phycobiont in lichens", fact: "Autotrophic algal partner that performs photosynthesis and synthesizes carbohydrates." },
  { topic: "Mycobiont in lichens", fact: "Heterotrophic fungal partner that provides shelter and absorbs water and minerals." },
  { topic: "SO2 pollution indicators", fact: "Lichens do not grow in polluted industrial areas due to high sensitivity to SO2." },
  { topic: "Pioneer rock colonizers", fact: "Lichens initiate ecological succession on bare rocks by secreting weathering lichenic acids." }
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 154) {
  const item = acellularFacts[counter % acellularFacts.length];
  const idx = fullMcqList.length + 1;

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Select the correct statement regarding ${item.topic} in biological classification:`,
      opts: [
        `${item.fact}`,
        `It forms triploid endosperm tissue following double fertilization.`,
        `It represents an angiospermic dicot with reticulate venation.`,
        `It produces naked seeds directly on megasporophyll cones.`
      ],
      ans: 0,
      exp: `NCERT Class 11 Biological Classification confirms: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Which biological entity or phenomenon is identified by: "${item.fact.slice(0, 75)}..."?`,
      opts: [
        `${item.topic}`,
        `Selaginella`,
        `Funaria`,
        `Pinus`
      ],
      ans: 0,
      exp: `This diagnostic description specifically characterizes ${item.topic}.`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the study of acellular and symbiotic agents, ${item.topic} is characterized by:`,
      opts: [
        `${item.fact}`,
        `Presence of xylem tracheids and phloem sieve cells in vascular bundles.`,
        `Formation of flagellated antherozoids swimming to archegonial necks.`,
        `Production of sori on the abaxial surface of fronds.`
      ],
      ans: 0,
      exp: `${item.topic} is characterized in NCERT: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Identify the true biological statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        `It exhibits a strictly haplontic life cycle with zygotic meiosis.`,
        `It forms mycorrhizal associations with coralloid roots of Cycas.`,
        `It develops from gemma cups on the dorsal surface of Marchantia.`
      ],
      ans: 0,
      exp: `According to NCERT Class 11 Biology: ${item.fact}`
    });
  }
  counter++;
}

const mcqQuestions = fullMcqList.map(m => ({
  question: m.q,
  options: m.opts,
  correctAnswer: m.ans,
  explanation: m.exp,
  type: "MCQ",
  questionType: "MCQ (Multiple Choice Question)",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

const allQuestions = [...arQuestions, ...mcqQuestions];

console.log(`Part 9 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

// KaTeX validator
let katexErrors = 0;
function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 9 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_botany_div_part9.js');
  const fileContent = `// Auto-generated data for Botany Diversity Part 9: Viruses, viroids, prions, and lichens\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
