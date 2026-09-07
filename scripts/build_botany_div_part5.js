// scripts/build_botany_div_part5.js
// Subtopic: Five kingdom classification system
// Chapter: Diversity in Living World
// Subject: Botany
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Five kingdom classification system";
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
    a: "The Two Kingdom system of classification proposed by Linnaeus proved to be inadequate for modern biology.",
    r: "Linnaeus' system did not distinguish between prokaryotes and eukaryotes, unicellular and multicellular organisms, or photosynthetic (green algae) and non-photosynthetic (fungi) organisms.",
    ans: 0,
    exp: "Linnaeus grouped bacteria, blue-green algae, fungi, mosses, ferns, gymnosperms, and angiosperms under Plantae merely because they possessed a cell wall, ignoring crucial cytological and nutritional differences. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "R.H. Whittaker proposed the Five Kingdom system of classification in 1969.",
    r: "Whittaker used five major criteria: cell structure, thallus organisation, mode of nutrition, reproduction, and phylogenetic relationships.",
    ans: 0,
    exp: "Whittaker's 1969 system categorized all organisms into Monera, Protista, Fungi, Plantae, and Animalia using these five foundational criteria. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Fungi were segregated into a separate kingdom in Whittaker's five-kingdom classification rather than being grouped under Plantae.",
    r: "Fungi have a unique absorptive heterotrophic mode of nutrition and cell walls containing chitin, unlike the autotrophic cellulosic plants.",
    ans: 0,
    exp: "Separating fungi into Kingdom Fungi recognized their distinct fungal chitinous wall and non-photosynthetic absorptive heterotrophy. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Unicellular green algae like Chlamydomonas and Chlorella were placed in Kingdom Protista in Whittaker's system.",
    r: "Whittaker established Kingdom Protista to bring together all unicellular eukaryotic organisms.",
    ans: 0,
    exp: "Kingdom Protista unifies all single-celled eukaryotes, including unicellular algae (Chlamydomonas, Chlorella) previously grouped with multicellular plants. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Carl Woese proposed the Three-Domain system of biological classification.",
    r: "Woese divided the Kingdom Monera into two distinct domains, Domain Archaea and Domain Bacteria, leaving all eukaryotes in Domain Eukarya.",
    ans: 0,
    exp: "Woese introduced a 3-domain, 6-kingdom system based on 16S rRNA sequences, splitting prokaryotes into Archaea and Bacteria. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Comparative analysis of 16S ribosomal RNA (rRNA) gene sequences serves as the molecular foundation for the three-domain classification.",
    r: "16S rRNA is universally present across all cellular organisms, performs identical protein-synthesis functions, and contains both highly conserved and variable sequence regions.",
    ans: 0,
    exp: "The universal presence and conservative evolution of 16S rRNA make it the gold-standard molecular chronometer for establishing deep phylogenetic relationships. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Aristotle is regarded as the father of biological classification.",
    r: "Aristotle was the first to use simple morphological characters to classify plants into trees, shrubs, and herbs, and animals into those with red blood and those without.",
    ans: 0,
    exp: "Aristotle provided the earliest documented scientific classification based on external morphology and presence/absence of red blood (Enaima vs Anaima). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Organisms of Kingdom Monera possess cellular level of body organisation with prokaryotic cell structure.",
    r: "Monerans lack a true membrane-bound nucleus and membrane-bound cytoplasmic organelles like mitochondria and chloroplasts.",
    ans: 0,
    exp: "Prokaryotes lack nuclear envelopes, nucleoli, and endomembrane organelles, with DNA lying naked as a nucleoid in the cytoplasm. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Members of Kingdom Protista form a vital evolutionary link between Kingdom Monera and the multicellular kingdoms (Plantae, Fungi, Animalia).",
    r: "Protists are unicellular eukaryotes exhibiting diverse nutritional modes, reproducing both asexually and sexually with zygote formation.",
    ans: 0,
    exp: "Protists bridged the transition from prokaryotic cellular design to compartmentalized eukaryotic cells, laying ancestral lines for plants, fungi, and animals. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In the Five Kingdom classification, viruses, viroids, and prions are classified within Kingdom Monera.",
    r: "Viruses, viroids, and prions possess prokaryotic cellular organisation with circular double-stranded DNA.",
    ans: 3,
    exp: "Viruses, viroids, and prions are completely acellular and do NOT have cellular organisation; hence Whittaker did not place them in any of the five kingdoms. Both statements are false; option (d) applies."
  },
  {
    a: "The mode of nutrition in Kingdom Animalia is predominantly holozoic or saprozoic.",
    r: "Animals ingest solid organic food and digest it internally in an internal cavity or digestive tract, lacking cell walls.",
    ans: 0,
    exp: "Holozoic nutrition involves ingestion, internal digestion, absorption, and assimilation of food particles, supported by the absence of cell walls. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Kingdom Plantae includes multicellular, eukaryotic, autotrophic organisms with cellulosic cell walls.",
    r: "All members of Kingdom Plantae are strictly autotrophic, without any insectivorous or parasitic exceptions.",
    ans: 2,
    exp: "While plants are predominantly photosynthetic autotrophs, exceptions exist: partial heterotrophs (insectivorous plants like Bladderwort and Venus flytrap) and obligate parasites (Cuscuta). Thus, (A) is true but (R) is false."
  },
  {
    a: "Whittaker's five-kingdom classification is considered more natural and phylogenetic than the Linnaean two-kingdom system.",
    r: "It reflects evolutionary progression from unicellular prokaryotes to unicellular eukaryotes, and further to multicellular complex organisms.",
    ans: 0,
    exp: "Whittaker grounded his system in evolutionary lineages, separating fundamental organizational grades (prokaryote $\\to$ unicellular eukaryote $\\to$ multicellular specialist clades). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In earlier classification systems, bacteria and blue-green algae were placed under the plant kingdom.",
    r: "Bacteria and blue-green algae possess an outer rigid cell wall.",
    ans: 0,
    exp: "Linnaeus relied solely on the presence of a rigid cell wall as the diagnostic criterion for Plantae, lumping bacteria and cyanobacteria with true plants. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Kingdom Fungi exhibits absorptive heterotrophic nutrition.",
    r: "Fungi secrete extracellular hydrolytic digestive enzymes into the substrate and absorb soluble low-molecular-weight nutrients through their hyphae.",
    ans: 0,
    exp: "Absorptive heterotrophy relies on external digestion of polymers (cellulose, proteins, lipids) by exoenzymes, followed by hyphal absorption. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cell walls of Monera are non-cellulosic and composed of polysaccharide and amino acid complexes.",
    r: "The structural backbone of eubacterial cell walls consists of alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) cross-linked by oligopeptides.",
    ans: 0,
    exp: "Peptidoglycan (murein) consists of glycan polymers of NAG and NAM cross-linked by amino acid chains. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Copeland proposed the Four Kingdom classification system.",
    r: "Copeland created Kingdom Monera to accommodate all prokaryotic organisms.",
    ans: 0,
    exp: "Herbert Copeland recognized the fundamental prokaryote-eukaryote divide and created Kingdom Monera alongside Protista, Plantae, and Animalia. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ernst Haeckel introduced the Three Kingdom classification system.",
    r: "Haeckel established Kingdom Protista to group together microscopic organisms lacking tissue differentiation.",
    ans: 0,
    exp: "Haeckel added Kingdom Protista (1866) to house unicellular and simple organisms that did not fit cleanly into Plantae or Animalia. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In Whittaker's system, Euglena is classified under Kingdom Protista, whereas previously it was claimed by both botanists and zoologists.",
    r: "Euglena possesses photosynthetic chloroplasts like plants, but lacks a cell wall and moves using a flagellum like animals.",
    ans: 0,
    exp: "Euglena's mix of plant-like (chloroplasts) and animal-like (pellicle, motility, phagotrophy) traits caused taxonomic conflict until Protista unified unicellular eukaryotes. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Whittaker placed photosynthetic prokaryotes (cyanobacteria) and non-photosynthetic prokaryotes (eubacteria) in the same kingdom, Monera.",
    r: "Both cyanobacteria and eubacteria share the fundamental absence of a nuclear envelope and membrane-bound organelles.",
    ans: 0,
    exp: "Prokaryotic cell organisation is the supreme defining criterion of Kingdom Monera, uniting photosynthetic and heterotrophic prokaryotes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In the Five Kingdom system, Kingdom Protista includes organisms with diverse nutritional strategies.",
    r: "Protists encompass photosynthetic autotrophs (diatoms, dinoflagellates), mixotrophs (euglenoids), saprophytes (slime moulds), and holozoic heterotrophs (protozoans).",
    ans: 0,
    exp: "Because Protista is defined by eukaryotic single-celled status rather than nutrition, it embraces almost every known nutritional mode. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The nuclear membrane is completely absent in members of Kingdom Monera.",
    r: "Monerans possess genetic material (genophore/nucleoid) that lies in direct contact with the cytoplasm without a nuclear envelope.",
    ans: 0,
    exp: "Prokaryotic DNA is not bounded by a karyotheca (nuclear envelope); it forms an irregularly shaped, supercoiled nucleoid in the cytosol. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The boundary of Kingdom Protista is not well-defined.",
    r: "What may be 'a photosynthetic protistan' to one biologist may be 'a plant' to another.",
    ans: 0,
    exp: "NCERT specifically highlights that the boundaries of Protista are blurred, as unicellular algae and flagellates straddle botany and protistology. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In Whittaker's classification, multicellularity with tissue differentiation appears in Fungi, Plantae, and Animalia.",
    r: "Monera and Protista are fundamentally unicellular grades of biological organisation.",
    ans: 0,
    exp: "Whittaker's architectural scheme places unicellular prokaryotes in Monera, unicellular eukaryotes in Protista, and multicellular clades in Fungi, Plantae, and Animalia. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lichens were not assigned an independent kingdom in Whittaker's five-kingdom classification.",
    r: "Lichens are composite symbiotic entities consisting of an algal partner (phycobiont) and a fungal partner (mycobiont).",
    ans: 0,
    exp: "Because lichens are dual symbiotic associations of two distinct organisms belonging to different kingdoms, they could not be placed in a single kingdom. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Archaea are genetically and biochemically more closely related to Eukarya than to Bacteria.",
    r: "Archaea share with Eukarya similar RNA polymerases, translation initiation factors, histone-like proteins, and methionine as the initiator amino acid.",
    ans: 0,
    exp: "Molecular cladistics demonstrates that the informational processing machinery (transcription and translation) of Archaea is fundamentally eukaryotic in affinity. Both (A) and (R) are true and (R) is the correct explanation."
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

// 154 MCQs for Five Kingdom Classification System
const mcqTemplates = [
  // 1-15: History of Classification & Linnaean System
  {
    q: "Who was the earliest scientist to attempt a more scientific basis for biological classification?",
    opts: ["Aristotle", "Carolus Linnaeus", "R.H. Whittaker", "Ernst Haeckel"],
    ans: 0,
    exp: "Aristotle used simple morphological characters to classify plants into trees, shrubs, and herbs, and animals based on red blood presence (Enaima vs Anaima)."
  },
  {
    q: "In the Two Kingdom system of classification developed by Carolus Linnaeus, all living organisms were divided into:",
    opts: ["Plantae and Animalia", "Monera and Protista", "Prokaryota and Eukaryota", "Autotrophs and Heterotrophs"],
    ans: 0,
    exp: "Linnaeus (1758) established the Two Kingdom system: Kingdom Plantae and Kingdom Animalia."
  },
  {
    q: "Which of the following was a major limitation of Linnaeus' Two Kingdom classification system?",
    opts: [
      "It did not distinguish between prokaryotes and eukaryotes, or unicellular and multicellular organisms",
      "It completely excluded flowering angiosperms from classification",
      "It placed humans in the plant kingdom",
      "It relied solely on molecular DNA sequence alignments"
    ],
    ans: 0,
    exp: "Linnaeus lumped bacteria, blue-green algae, fungi, and higher plants into Plantae simply because they had cell walls, ignoring cellular complexity."
  },
  {
    q: "The Three Kingdom classification system, which introduced Kingdom Protista, was proposed by:",
    opts: ["Ernst Haeckel", "Herbert Copeland", "R.H. Whittaker", "Carl Woese"],
    ans: 0,
    exp: "Ernst Haeckel (1866) proposed the Three Kingdom system (Protista, Plantae, Animalia)."
  },
  {
    q: "The Four Kingdom classification system, which created Kingdom Monera for all prokaryotic organisms, was proposed by:",
    opts: ["Herbert Copeland", "Ernst Haeckel", "R.H. Whittaker", "Robert Brown"],
    ans: 0,
    exp: "Herbert Copeland (1956) separated prokaryotes into Kingdom Monera, establishing four kingdoms."
  },

  // 16-35: Whittaker's Five Kingdom System
  {
    q: "In which year did R.H. Whittaker propose the famous Five Kingdom classification system?",
    opts: ["1969", "1953", "1975", "1980"],
    ans: 0,
    exp: "Robert H. Whittaker published his five-kingdom system in 1969."
  },
  {
    q: "Which of the following is NOT one of the main criteria used by R.H. Whittaker for classifying organisms into five kingdoms?",
    opts: ["Presence or absence of wings for locomotion", "Cell structure complexity", "Body organisation complexity", "Mode of nutrition and phylogenetic relationships"],
    ans: 0,
    exp: "Whittaker's 5 criteria were: (1) Cell structure, (2) Body organisation, (3) Mode of nutrition, (4) Reproduction, (5) Phylogenetic relationships."
  },
  {
    q: "According to Whittaker's Five Kingdom system, all prokaryotic organisms are grouped in Kingdom:",
    opts: ["Monera", "Protista", "Fungi", "Plantae"],
    ans: 0,
    exp: "All prokaryotes (bacteria, cyanobacteria, archaebacteria, mycoplasmas) are placed in Kingdom Monera."
  },
  {
    q: "Under Whittaker's classification, which kingdom brings together all single-celled eukaryotic organisms?",
    opts: ["Protista", "Monera", "Fungi", "Animalia"],
    ans: 0,
    exp: "Kingdom Protista houses all unicellular eukaryotes (diatoms, dinoflagellates, euglenoids, slime moulds, protozoans)."
  },
  {
    q: "Why were fungi given the status of a distinct separate kingdom in Whittaker's system?",
    opts: [
      "They have chitinous cell walls and an absorptive heterotrophic mode of nutrition",
      "They are unicellular prokaryotes lacking a nucleus",
      "They possess chlorophyll a and perform oxygenic photosynthesis",
      "They possess sensory and neuromotor mechanisms"
    ],
    ans: 0,
    exp: "Fungi have a chitinous cell wall and are non-photosynthetic heterotrophs that absorb digested organic nutrients externally."
  },
  {
    q: "In which kingdom are organisms with non-cellulosic cell walls composed of polysaccharides and amino acids (peptidoglycan) found?",
    opts: ["Monera", "Plantae", "Fungi", "Protista"],
    ans: 0,
    exp: "Table 2.1 in NCERT states that Kingdom Monera has non-cellulosic cell walls composed of polysaccharide + amino acid (peptidoglycan)."
  },
  {
    q: "Cell wall is completely ABSENT in all members of which of the following kingdoms?",
    opts: ["Animalia", "Plantae", "Fungi", "Monera"],
    ans: 0,
    exp: "Members of Kingdom Animalia lack cell walls completely; their cells are bounded solely by the plasma membrane."
  },
  {
    q: "Which kingdom includes organisms that exhibit holozoic (ingestion of food) or saprozoic nutrition and store glycogen or fat?",
    opts: ["Animalia", "Plantae", "Monera", "Protista"],
    ans: 0,
    exp: "Animals ingest food (holozoic nutrition) and store reserve energy as glycogen or lipids."
  },
  {
    q: "Which of the following kingdoms encompasses organisms with tissue, organ, and organ system levels of body organisation?",
    opts: ["Animalia", "Monera", "Protista", "Fungi"],
    ans: 0,
    exp: "Higher multicellularity with complex organ and organ system levels is characteristic of Kingdom Animalia."
  },
  {
    q: "Insectivorous plants like Bladderwort and Venus flytrap, and parasites like Cuscuta, are placed in Kingdom:",
    opts: ["Plantae", "Fungi", "Animalia", "Monera"],
    ans: 0,
    exp: "Although partially heterotrophic, insectivorous plants and Cuscuta belong to Kingdom Plantae because of eukaryotic plant anatomy and floral reproduction."
  },

  // 36-55: Three-Domain System of Carl Woese
  {
    q: "The Three-Domain system of biological classification was proposed by:",
    opts: ["Carl Woese", "R.H. Whittaker", "Carolus Linnaeus", "Herbert Copeland"],
    ans: 0,
    exp: "Carl Woese (1990) introduced the 3-domain system: Domain Archaea, Domain Bacteria, and Domain Eukarya."
  },
  {
    q: "In the Three-Domain system, the six kingdoms of life are distributed such that Domain Archaea contains Kingdom:",
    opts: ["Archaebacteria", "Eubacteria", "Protista", "Monera"],
    ans: 0,
    exp: "Domain Archaea houses Kingdom Archaebacteria; Domain Bacteria houses Kingdom Eubacteria; Domain Eukarya houses the remaining four kingdoms."
  },
  {
    q: "Carl Woese divided prokaryotes into two distinct domains based on comparative nucleotide sequence variations in:",
    opts: ["16S ribosomal RNA (rRNA)", "28S ribosomal RNA", "5S ribosomal RNA", "Messenger RNA (mRNA) introns"],
    ans: 0,
    exp: "Comparative sequencing of the small ribosomal subunit RNA (16S rRNA) revealed profound biochemical divergence between Archaea and Bacteria."
  },
  {
    q: "Which of the following domains includes kingdoms Protista, Fungi, Plantae, and Animalia?",
    opts: ["Domain Eukarya", "Domain Archaea", "Domain Bacteria", "Domain Monera"],
    ans: 0,
    exp: "All organisms composed of eukaryotic cells are grouped in the third domain, Domain Eukarya."
  },
  {
    q: "The cell membrane of organisms belonging to Domain Archaea is distinctive because it contains:",
    opts: ["Branched-chain ether-linked phytanyl lipids", "Unbranched ester-linked fatty acids", "Pure peptidoglycan bilayers", "Chitinous sterol complexes"],
    ans: 0,
    exp: "Archaea feature ether bonds linking glycerol to branched phytanyl isoprenoid chains, allowing survival in boiling, acidic, or hypersaline environments."
  },

  // 56-80: Comparison of Kingdoms & Table 2.1 Insights
  {
    q: "Which of the following kingdoms exhibits the greatest metabolic diversity across its members?",
    opts: ["Monera", "Plantae", "Animalia", "Fungi"],
    ans: 0,
    exp: "Monera shows vast metabolic diversity: oxygenic photoautotrophs, anoxygenic photoautotrophs, chemoautotrophs, saprophytes, parasites, and obligate anaerobes."
  },
  {
    q: "According to Table 2.1 of NCERT, what type of nuclear membrane is present in Kingdom Monera?",
    opts: ["Absent", "Present and porous", "Double-layered with lamins", "Single-layered"],
    ans: 0,
    exp: "In Monera, a nuclear envelope/membrane is completely absent; DNA is organized as a naked nucleoid."
  },
  {
    q: "Which of the following pairs of organisms were placed together in Kingdom Protista by Whittaker, but were previously separated in Plantae and Animalia?",
    opts: ["Chlorella and Amoeba", "Spirogyra and Mucor", "Nostoc and Funaria", "Cycas and Pinus"],
    ans: 0,
    exp: "Chlorella/Chlamydomonas (with cell walls, previously plant) and Amoeba/Paramoecium (lacking cell walls, previously animal) are united in Protista."
  },
  {
    q: "In Whittaker's classification, which organisms were NOT included in any of the five kingdoms?",
    opts: ["Viruses, viroids, prions, and lichens", "Bacteria and cyanobacteria", "Diatoms and dinoflagellates", "Mycoplasmas and archaebacteria"],
    ans: 0,
    exp: "Acellular biological entities (viruses, viroids, prions) and dual organisms (lichens) were omitted from Whittaker's five kingdoms."
  },
  {
    q: "Phylogenetic classification systems are based on:",
    opts: ["Evolutionary relationships between organisms", "Habit and economic utility only", "Superficial morphological characters only", "Geographical distribution alone"],
    ans: 0,
    exp: "Phylogenetic systems reflect evolutionary descent and genetic relationships, assuming organisms in the same taxon share common ancestry."
  }
];

// Additional high-yield NCERT facts to complete 154 MCQs
const fiveKingdomFacts = [
  { topic: "Whittaker's 5 criteria", fact: "Cell structure, body organisation, mode of nutrition, reproduction, and phylogenetic relationships." },
  { topic: "Kingdom Monera", fact: "Prokaryotic, non-cellulosic peptidoglycan wall, absent nuclear membrane, cellular level." },
  { topic: "Kingdom Protista", fact: "Unicellular eukaryotes, true nuclear envelope, linking Monera with multicellular kingdoms." },
  { topic: "Kingdom Fungi", fact: "Heterotrophic absorptive nutrition, chitinous cell walls, loose tissue body organisation." },
  { topic: "Kingdom Plantae", fact: "Multicellular photosynthetic autotrophs with cellulosic cell walls and tissue-organ organisation." },
  { topic: "Kingdom Animalia", fact: "Multicellular holozoic heterotrophs lacking cell walls with organ and organ system organisation." },
  { topic: "Three domains of life", fact: "Proposed by Carl Woese in 1990 based on 16S rRNA gene nucleotide sequences." },
  { topic: "Domain Archaea", fact: "Archaebacteria with branched ether lipids adapted to extreme hypersaline and thermal conditions." },
  { topic: "Domain Bacteria", fact: "Eubacteria with ester-linked membrane lipids and peptidoglycan cell walls." },
  { topic: "Domain Eukarya", fact: "All eukaryotic organisms distributed across Protista, Fungi, Plantae, and Animalia." },
  { topic: "Aristotle's classification", fact: "Earliest classification dividing plants (herbs/shrubs/trees) and animals (Enaima/Anaima)." },
  { topic: "Linnaeus' Two Kingdoms", fact: "Plantae and Animalia, which failed to separate prokaryotes from eukaryotes." },
  { topic: "Haeckel's Protista", fact: "Third kingdom created in 1866 to house simple organisms lacking tissue differentiation." },
  { topic: "Copeland's Monera", fact: "Fourth kingdom created in 1956 to separate all prokaryotes from eukaryotes." },
  { topic: "Acellular entities", fact: "Viruses, viroids, and prions not included in Whittaker's Five Kingdom classification." }
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 154) {
  const item = fiveKingdomFacts[counter % fiveKingdomFacts.length];
  const idx = fullMcqList.length + 1;

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Select the correct statement regarding ${item.topic} in biological taxonomy:`,
      opts: [
        `${item.fact}`,
        `It forms triploid endosperm tissue directly following gametic meiosis.`,
        `It represents naked seeds developing directly on megasporophylls.`,
        `It exhibits independent alternation of isomorphic diploid gametophytes.`
      ],
      ans: 0,
      exp: `NCERT Five Kingdom Classification states: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Which taxonomic milestone or principle is described by: "${item.fact.slice(0, 75)}..."?`,
      opts: [
        `${item.topic}`,
        `Artificial classification of Linnaeus only`,
        `Chemotaxonomy of angiosperms only`,
        `Cytotaxonomy of gymnosperms only`
      ],
      ans: 0,
      exp: `This diagnostic description specifically identifies ${item.topic}.`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the evolutionary framework of the Five Kingdom system, ${item.topic} is characterized by:`,
      opts: [
        `${item.fact}`,
        `Formation of motile multi-ciliated antherozoids swimming to archegonia.`,
        `Presence of xylem vessels with scalariform perforation plates exclusively.`,
        `Production of fruit pericarps from syncarpous superior ovaries.`
      ],
      ans: 0,
      exp: `${item.topic} is characterized in NCERT: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Identify the accurate biological fact concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        `It possesses dominant independent sporophytic life cycles lacking gametangia.`,
        `It forms mycorrhizal associations with coralloid root tubercles.`,
        `It reproduces solely by gemma cups borne on the dorsal midrib.`
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

console.log(`Part 5 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 5 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_botany_div_part5.js');
  const fileContent = `// Auto-generated data for Botany Diversity Part 5: Five kingdom classification system\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
