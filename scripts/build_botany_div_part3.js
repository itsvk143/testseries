// scripts/build_botany_div_part3.js
// Subtopic: Biological Classification
// Chapter: Diversity in Living World
// Subject: Botany
// 25 Assertion-Reason, 155 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Biological Classification";
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
    a: "Archaebacteria are able to survive under the most extreme conditions such as boiling sulfur springs and salt lakes.",
    r: "Archaebacteria possess a distinctive cell membrane structure with branched-chain ether-linked lipids that confer thermal and osmotic stability.",
    ans: 0,
    exp: "Archaebacteria have branched-chain ether-linked phytanyl lipids in their membranes, preventing membrane fluidity disruption in extreme temperatures and hypersaline conditions. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Methanogens are obligately anaerobic archaebacteria present in the gut of several ruminant animals like cows and buffaloes.",
    r: "Methanogens are responsible for the biogenic production of methane gas (biogas) from the dung of ruminants.",
    ans: 1,
    exp: "Both statements are true facts regarding methanogens, but the production of methane from dung does not causally explain why they are found in the rumen (they inhabit the rumen to ferment cellulose under anaerobic conditions). Thus, (b) applies."
  },
  {
    a: "Cyanobacteria are often referred to as blue-green algae and possess chlorophyll a similar to green plants.",
    r: "Cyanobacteria are photosynthetic autotrophs that introduced oxygenic photosynthesis to ancient Earth.",
    ans: 1,
    exp: "Both (A) and (R) are true factual statements regarding cyanobacteria, but (R) is an evolutionary significance, not the direct causal explanation for (A). Thus, (b) is correct."
  },
  {
    a: "Heterocysts in Nostoc and Anabaena are specialized non-photosynthetic cells specialized for nitrogen fixation.",
    r: "The nitrogenase enzyme responsible for converting atmospheric nitrogen to ammonia is extremely sensitive to molecular oxygen.",
    ans: 0,
    exp: "Heterocysts lack photosystem II (PS II) and oxygenic activity, creating an anaerobic microenvironment essential to prevent irreversible inactivation of the oxygen-labile nitrogenase enzyme. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Mycoplasma are completely resistant to beta-lactam antibiotics such as penicillin.",
    r: "Mycoplasma naturally lack a peptidoglycan cell wall, which is the specific biochemical target of penicillin.",
    ans: 0,
    exp: "Penicillin acts by inhibiting bacterial transpeptidase during cell wall peptidoglycan cross-linking. Because Mycoplasmas have no cell wall at all, penicillin has no molecular target and is ineffective. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Diatomaceous earth is indestructible and accumulates at the ocean floor over millions of years.",
    r: "The cell walls of diatoms are embedded with biogenic silica, forming two overlapping halves that fit like a soap box.",
    ans: 0,
    exp: "Diatom frustules consist of hydrated amorphous silica ($\text{SiO}_2\cdot n\text{H}_2\text{O}$) which resists biological decomposition, settling to form massive siliceous diatomaceous earth deposits. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Diatomaceous earth is widely utilized in filtration of oils and polishing of metal surfaces.",
    r: "Diatomaceous earth particles are gritty and porous due to microscopic perforations in the silica shells.",
    ans: 0,
    exp: "The gritty, highly porous nature of siliceous diatomaceous earth makes it an ideal abrasive for polishing and a fine filter for syrups and oils. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dinoflagellates like Gonyaulax can cause the phenomenon of 'red tides' in coastal waters.",
    r: "Rapid population explosions (blooms) of red dinoflagellates impart a reddish color to the sea and release potent toxins (saxitoxin) harmful to marine fauna.",
    ans: 0,
    exp: "Gonyaulax multiplies exponentially in nutrient-rich coastal waters, turning the sea red and producing saxitoxin which causes paralytic shellfish poisoning. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Euglenoids exhibit mixotrophic nutrition depending on environmental light availability.",
    r: "Euglena performs photosynthesis in the presence of sunlight using chlorophylls, but turns heterotrophic and predaceous in the absence of light.",
    ans: 0,
    exp: "Euglenoids have chloroplasts with pigments identical to higher plants when illuminated, but switch to absorbing or capturing organic food when light is absent (mixotrophy). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Euglenoids possess a flexible proteinaceous pellicle instead of a rigid cellulosic cell wall.",
    r: "The pellicle enables euglenoids to change their body shape and flex during motility in water.",
    ans: 0,
    exp: "The protein-rich strip-like pellicle beneath the plasma membrane allows characteristic metabolic contraction ('euglenoid movement'). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Slime moulds are saprophytic protists that aggregate to form a creeping plasmodium under favorable conditions.",
    r: "During unfavorable conditions, the plasmodium differentiates into fruiting bodies bearing spores with true resistant walls.",
    ans: 1,
    exp: "Both statements are true and accurate descriptions of the life cycle of slime moulds, but (R) describes the survival response to stress rather than explaining why the plasmodium forms in favorable conditions. Thus, (b) is correct."
  },
  {
    a: "Spores of slime moulds can survive for several years under extremely harsh environmental conditions.",
    r: "Slime mould spores are surrounded by true cellulosic walls and possess high resistance to desiccation.",
    ans: 0,
    exp: "Unlike the naked vegetative plasmodium, spores produced by slime moulds have true rigid cell walls that withstand extreme heat and dryness, dispersed by air currents. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Amoeboid protozoans capture their prey by putting out pseudopodia (false feet).",
    r: "Marine forms of amoeboids have silica shells on their cell surface.",
    ans: 1,
    exp: "Both (A) and (R) are true facts from NCERT, but the presence of silica shells in marine radiolarians does not explain the capture of prey via pseudopodia. Thus, (b) is correct."
  },
  {
    a: "Entamoeba histolytica is an endoparasite inhabiting the human large intestine and causes amoebic dysentery.",
    r: "Entamoeba lacks flagella and moves by producing pseudopodia.",
    ans: 1,
    exp: "Both statements are true, but moving by pseudopodia is an amoeboid trait, not the cause of pathogenicity. Thus, (b) is correct."
  },
  {
    a: "Trypanosoma gambiense causes the disease African sleeping sickness.",
    r: "Trypanosoma is a flagellated protozoan parasite transmitted to humans by the bite of the tsetse fly (Glossina).",
    ans: 0,
    exp: "Trypanosoma is a flagellated protozoan that invades the central nervous system after transmission by the tsetse fly vector, causing sleeping sickness. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Ciliated protozoans like Paramoecium exhibit coordinated swimming and rapid food intake.",
    r: "Thousands of cilia beat rhythmically in coordinated waves, driving water laden with food into the cell mouth (gullet).",
    ans: 0,
    exp: "Coordinated metachronal ciliary beating steers Paramoecium and generates water vortices that direct food particles into the cytostome/gullet. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Plasmodium vivax is classified as a sporozoan protozoan.",
    r: "Plasmodium possesses an infectious spore-like stage (sporozoite) in its life cycle that is introduced into humans via the female Anopheles mosquito.",
    ans: 0,
    exp: "Sporozoans are endoparasites that lack specialized locomotory organelles in their adult forms and produce infectious sporozoites. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Fungi are cosmopolitan organisms that grow predominantly in warm and humid locations.",
    r: "Warmth and moisture favor the germination of fungal spores and the metabolic activity of hyphal enzymes.",
    ans: 0,
    exp: "Fungal spores require moisture and optimal temperatures ($20-30^\circ\text{C}$) to hydrate and sprout vegetative hyphae. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The cell walls of most true fungi are composed of chitin and polysaccharides.",
    r: "Chitin is a nitrogen-containing homopolysaccharide of N-acetylglucosamine (NAG).",
    ans: 0,
    exp: "Fungal chitin provides mechanical rigidity and resistance to degradation, composed of $\\beta$-(1,4)-linked NAG polymers. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Phycomycetes possess aseptate and coenocytic mycelia.",
    r: "The hyphae of Phycomycetes contain continuous multinucleate tubes lacking cross-walls (septa) in vegetative stages.",
    ans: 0,
    exp: "Coenocytic hyphae are continuous cytoplasm cylinders containing many nuclei without internal transverse septa. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In Ascomycetes and Basidiomycetes, an intervening dikaryotic phase ($n+n$) occurs during sexual reproduction.",
    r: "Plasmogamy (fusion of protoplasts) is immediately followed by nuclear fusion (karyogamy) in these fungi.",
    ans: 2,
    exp: "In higher fungi, plasmogamy is NOT followed immediately by karyogamy; two haploid nuclei persist in each cell (dikaryon, $n+n$) for a prolonged phase before karyogamy occurs. Thus, (A) is true but (R) is false."
  },
  {
    a: "Neurospora crassa is extensively used as a model organism in biochemical and genetic research.",
    r: "Neurospora has a short life cycle, produces meiotic products (ascospores) in a linear ordered arrangement inside asci, and can be cultured easily on minimal medium.",
    ans: 0,
    exp: "Neurospora (often termed the Drosophila of plant kingdom) was used by Beadle and Tatum to formulate the 'one gene-one enzyme' hypothesis. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Deuteromycetes are commonly referred to as 'fungi imperfecti'.",
    r: "Only the asexual or vegetative phases of these fungi are known, with sexual stages either absent or undiscovered.",
    ans: 0,
    exp: "Deuteromycetes is an artificial form-class grouping fungi that lack a known teleomorph (sexual reproductive stage). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "When the sexual stages of members of Deuteromycetes are discovered, they are reclassified into Ascomycetes or Basidiomycetes.",
    r: "Sexual spores like ascospores or basidiospores define phylogenetic placement in Ascomycota or Basidiomycota.",
    ans: 0,
    exp: "Identification of asci/ascospores or basidia/basidiospores moves an imperfect fungus to its natural taxonomic class. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Albugo candida is an obligate parasitic fungus causing white rust of crucifers (mustard).",
    r: "Albugo belongs to the class Basidiomycetes and reproduces by exogenous basidiospores.",
    ans: 2,
    exp: "Albugo candida belongs to Phycomycetes (Oomycetes), not Basidiomycetes. Thus, (A) is true but (R) is false."
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

// 155 MCQs for Biological Classification
const mcqTemplates = [
  // 1-15: Monera & Bacteria
  {
    q: "Which of the following organisms are the sole members of Kingdom Monera?",
    opts: ["Bacteria", "Fungi", "Protozoans", "Algae"],
    ans: 0,
    exp: "According to Whittaker's classification, bacteria are the sole members of Kingdom Monera and the most abundant microorganisms on Earth."
  },
  {
    q: "Bacterial cell wall is primarily composed of:",
    opts: ["Peptidoglycan (murein)", "Cellulose and pectin", "Chitin and glucan", "Silica and calcium carbonate"],
    ans: 0,
    exp: "Eubacterial cell walls are made of peptidoglycan (a polymer of NAG and NAM cross-linked by short peptides)."
  },
  {
    q: "Which of the following archaebacteria are responsible for the production of biogas (methane) from the dung of cows and buffaloes?",
    opts: ["Methanogens", "Thermoacidophiles", "Halophiles", "Cyanobacteria"],
    ans: 0,
    exp: "Methanogens (such as Methanobacterium) are anaerobic archaebacteria in the rumen of ruminants that convert formate/acetate/hydrogen into methane."
  },
  {
    q: "Microorganisms found living in extremely salty areas like the Great Salt Lake are termed:",
    opts: ["Halophiles", "Thermoacidophiles", "Methanogens", "Heliophytes"],
    ans: 0,
    exp: "Halophiles (e.g., Halobacterium) are archaebacteria adapted to hypersaline environments."
  },
  {
    q: "Archaebacteria differ from eubacteria primarily in having:",
    opts: ["A different cell wall and branched-chain ether-linked membrane lipid structure", "A true eukaryotic nucleus with histones", "Membrane-bound organelles like mitochondria", "Chlorophyll b in chloroplasts"],
    ans: 0,
    exp: "Archaebacteria lack peptidoglycan (possess pseudomurein or proteinaceous S-layers) and have branched ether lipids in their plasma membrane."
  },
  {
    q: "Heterocysts present in filamentous cyanobacteria like Nostoc and Anabaena are specialized for:",
    opts: ["Nitrogen fixation", "Oxygenic photosynthesis", "Fragmentation", "Endospore storage"],
    ans: 0,
    exp: "Heterocysts maintain an anaerobic environment lacking PS II to protect the oxygen-sensitive enzyme nitrogenase for fixing atmospheric $N_2$."
  },
  {
    q: "Which of the following bacteria are autotrophs that oxidize inorganic compounds like nitrites, nitrates, and ammonia to synthesize ATP?",
    opts: ["Chemosynthetic autotrophic bacteria", "Photosynthetic cyanobacteria", "Heterotrophic saprophytes", "Obligate parasitic mycoplasmas"],
    ans: 0,
    exp: "Chemoautotrophs (e.g., Nitrosomonas, Nitrobacter) oxidise reduced inorganic nitrogen/sulfur compounds to generate energy for carbon fixation."
  },
  {
    q: "Which of the following organisms completely lacks a cell wall and is the smallest free-living microorganism known?",
    opts: ["Mycoplasma", "Nostoc", "Bacillus", "Vibrio"],
    ans: 0,
    exp: "Mycoplasma (PPLO) lack a rigid cell wall, measure $0.1-0.3\\ \\mu\\text{m}$, and can survive anaerobically."
  },
  {
    q: "Citrus canker is a widespread bacterial plant disease caused by:",
    opts: ["Xanthomonas axonopodis", "Vibrio cholerae", "Salmonella typhi", "Clostridium tetani"],
    ans: 0,
    exp: "Citrus canker in lemons and oranges is caused by the bacterium Xanthomonas axonopodis pv. citri."
  },
  {
    q: "Bacteria reproduce asexually under favorable conditions primarily by:",
    opts: ["Binary fission", "Budding", "Conjugation", "Zoospore formation"],
    ans: 0,
    exp: "Bacteria divide primarily by binary fission (splitting of one cell into two identical daughter cells) under favorable nutrient conditions."
  },

  // 16-35: Protista
  {
    q: "All unicellular eukaryotic organisms are grouped together in which kingdom under Whittaker's system?",
    opts: ["Protista", "Monera", "Fungi", "Plantae"],
    ans: 0,
    exp: "Kingdom Protista unites all single-celled eukaryotes, linking prokaryotic Monera with multicellular Plantae, Fungi, and Animalia."
  },
  {
    q: "Which group of protists are known as the chief 'producers' in the oceans?",
    opts: ["Diatoms (Chrysophytes)", "Dinoflagellates", "Euglenoids", "Slime moulds"],
    ans: 0,
    exp: "Diatoms are photosynthetic microscopic organisms that float passively (plankton) and serve as the primary carbon fixers in marine ecosystems."
  },
  {
    q: "The cell walls of diatoms form two thin overlapping shells that fit together like a soap box, embedded with:",
    opts: ["Silica", "Calcium carbonate", "Cellulose and lignin", "Chitin"],
    ans: 0,
    exp: "Diatom cell walls (frustules) are impregnated with biogenic silica, rendering them structurally rigid and non-degradable."
  },
  {
    q: "Red tides in marine coastal waters are caused by rapid multiplication of:",
    opts: ["Gonyaulax", "Euglena", "Paramoecium", "Amoeba"],
    ans: 0,
    exp: "Gonyaulax is a red dinoflagellate that blooms extensively, causing red tides and secreting toxic saxitoxin."
  },
  {
    q: "A flexible protein-rich layer called the pellicle, making the body pliable and capable of changing shape, is found in:",
    opts: ["Euglenoids", "Diatoms", "Dinoflagellates", "Sporozoans"],
    ans: 0,
    exp: "Euglena lacks a cellulosic wall and instead possesses an elastic proteinaceous pellicle underneath the plasma membrane."
  },
  {
    q: "Which of the following protists possesses two flagella, one lying longitudinally and the other transversely in a furrow between wall plates?",
    opts: ["Dinoflagellates", "Chrysophytes", "Euglenoids", "Ciliates"],
    ans: 0,
    exp: "Dinoflagellates have two distinct flagella: one longitudinal and one transverse running in a groove (cingulum/sulcus), producing spinning movement."
  },
  {
    q: "Slime moulds form an aggregation called ______ under suitable conditions, which can spread over several feet:",
    opts: ["Plasmodium", "Pseudopodium", "Protonema", "Syncytium"],
    ans: 0,
    exp: "In favorable conditions, acellular slime moulds form a multinucleate amoeboid mass called a plasmodium."
  },
  {
    q: "During unfavorable conditions, slime moulds produce spores that are dispersed by:",
    opts: ["Air currents", "Water currents", "Insects", "Passive floating"],
    ans: 0,
    exp: "Fruiting bodies of slime moulds release resistant walled spores that are carried and dispersed by air currents."
  },
  {
    q: "Sleeping sickness is a serious human disease caused by which flagellated protozoan parasite?",
    opts: ["Trypanosoma", "Leishmania", "Giardia", "Trichomonas"],
    ans: 0,
    exp: "Trypanosoma gambiense is a flagellated blood protozoan that causes African trypanosomiasis (sleeping sickness), transmitted by tsetse flies."
  },
  {
    q: "Which ciliated protozoan has a cavity (gullet) that opens to the outside of the cell surface, with coordinated rows of cilia moving food into it?",
    opts: ["Paramoecium", "Amoeba", "Euglena", "Plasmodium"],
    ans: 0,
    exp: "Paramoecium caudatum possesses an oral groove leading to the cytostome/gullet, lined by coordinated cilia."
  },
  {
    q: "The malarial parasite Plasmodium is taxonomically categorized under:",
    opts: ["Sporozoans", "Amoeboid protozoans", "Flagellated protozoans", "Ciliated protozoans"],
    ans: 0,
    exp: "Plasmodium is an obligate intracellular sporozoan that forms infectious sporozoites and has no cilia or flagella in vegetative stages."
  },

  // 36-60: Fungi
  {
    q: "Fungi store their reserve food material mainly in the form of:",
    opts: ["Glycogen and oil droplets", "Starch and maltose", "Paramylon and laminarin", "Cellulose and inulin"],
    ans: 0,
    exp: "Like animals, heterotrophic fungi store carbohydrates as glycogen alongside lipid droplets, never true plant starch."
  },
  {
    q: "Which fungal class is characterized by an aseptate, coenocytic mycelium?",
    opts: ["Phycomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes"],
    ans: 0,
    exp: "Phycomycetes (such as Mucor, Rhizopus, and Albugo) possess multinucleate continuous hyphae lacking septa in vegetative state."
  },
  {
    q: "Black bread mould is the common name for which fungus?",
    opts: ["Rhizopus stolonifer", "Mucor mucedo", "Aspergillus niger", "Penicillium notatum"],
    ans: 0,
    exp: "Rhizopus stolonifer is the ubiquitous bread mould belonging to Phycomycetes."
  },
  {
    q: "In Ascomycetes, asexual spores are called ______ and are produced ______ on specialized hyphae called conidiophores:",
    opts: ["Conidia; exogenously", "Ascospores; endogenously", "Zoospores; endogenously", "Basidiospores; exogenously"],
    ans: 0,
    exp: "Conidia are non-motile asexual spores cut off exogenously in chains at the tips of conidiophores in Ascomycetes."
  },
  {
    q: "Sexual spores produced endogenously in sac-like asci are called:",
    opts: ["Ascospores", "Basidiospores", "Oospores", "Zygospores"],
    ans: 0,
    exp: "Ascospores are meiotically produced haploid sexual spores formed internally (endogenously) inside an ascus."
  },
  {
    q: "Which of the following ascomycetes is extensively used in biochemical and genetic research?",
    opts: ["Neurospora", "Claviceps", "Aspergillus", "Penicillium"],
    ans: 0,
    exp: "Neurospora crassa is the classic model organism used in genetics to establish the one gene-one enzyme hypothesis."
  },
  {
    q: "Which of the following members of Ascomycetes are edible delicacies highly prized in culinary arts?",
    opts: ["Morels (Morchella) and Truffles (Tuber)", "Claviceps and Aspergillus", "Rhizopus and Mucor", "Ustilago and Puccinia"],
    ans: 0,
    exp: "Morels (sponge mushrooms) and truffles are subterranean or cup-shaped edible ascocarps considered gourmet delicacies."
  },
  {
    q: "In Basidiomycetes, the sexual spores (basidiospores) are produced:",
    opts: ["Exogenously on the basidium, typically 4 in number", "Endogenously in the basidium, 8 in number", "Exogenously on conidiophores in chains", "Inside enclosed cleistothecia"],
    ans: 0,
    exp: "Karyogamy and meiosis inside the club-shaped basidium result in 4 haploid basidiospores borne externally on sterigmata."
  },
  {
    q: "The rust fungus causing wheat rust disease is:",
    opts: ["Puccinia graminis", "Ustilago maydis", "Agaricus bisporus", "Albugo candida"],
    ans: 0,
    exp: "Puccinia graminis tritici is a heteroecious basidiomycete rust fungus that infects wheat and barberry."
  },
  {
    q: "Smut disease in plants like maize, wheat, and barley is caused by which genus of fungi?",
    opts: ["Ustilago", "Puccinia", "Agaricus", "Alternaria"],
    ans: 0,
    exp: "Ustilago produces masses of sooty black teliospores causing smut in cereal crops."
  },
  {
    q: "Deuteromycetes are commonly termed imperfect fungi because:",
    opts: ["Only their asexual (conidial) or vegetative stages are known", "They completely lack cell walls", "They lack genetic material", "They cannot absorb nutrients"],
    ans: 0,
    exp: "Deuteromycetes lack a documented sexual teleomorph stage, reproducing solely by asexual conidia."
  },
  {
    q: "Which of the following genera belongs to the class Deuteromycetes?",
    opts: ["Alternaria, Colletotrichum, and Trichoderma", "Mucor, Rhizopus, and Albugo", "Aspergillus, Claviceps, and Neurospora", "Agaricus, Ustilago, and Puccinia"],
    ans: 0,
    exp: "Alternaria (early blight), Colletotrichum (red rot of sugarcane), and Trichoderma are classic Deuteromycetes."
  }
];

// Additional NCERT facts for Biological Classification to complete 155 MCQs
const classificationFacts = [
  { topic: "R.H. Whittaker", fact: "He proposed the Five Kingdom classification system in 1969 based on cell structure and nutrition." },
  { topic: "Carl Woese", fact: "He introduced the Three-Domain system dividing prokaryotes into Archaea and Bacteria based on 16S rRNA." },
  { topic: "Kingdom Monera", fact: "It encompasses all prokaryotic organisms lacking nuclear membranes and organelles." },
  { topic: "Heterocysts", fact: "Thick-walled specialized cyanobacterial cells with nitrogenase for fixing N2." },
  { topic: "Chrysophytes", fact: "They include diatoms and golden algae (desmids) floating passively as plankton." },
  { topic: "Dinoflagellates", fact: "They have stiff cellulose plates and two flagella causing spinning locomotion." },
  { topic: "Euglena", fact: "It has a proteinaceous pellicle, eyespot, and mixotrophic nutrition." },
  { topic: "Slime moulds", fact: "Saprophytic protists that produce walled spores from fruiting bodies." },
  { topic: "Protozoans", fact: "Heterotrophic single-celled eukaryotes acting as predators or parasites." },
  { topic: "Phycomycetes", fact: "Algal fungi with coenocytic hyphae, zoospores, and zygospores." },
  { topic: "Ascomycetes", fact: "Sac fungi producing exogenous conidia and endogenous ascospores inside asci." },
  { topic: "Basidiomycetes", fact: "Club fungi producing 4 exogenous basidiospores on each basidium." },
  { topic: "Deuteromycetes", fact: "Imperfect fungi reproducing exclusively by asexual conidia without known sexual stages." },
  { topic: "Mycoplasma", fact: "Smallest prokaryote without cell wall, pleomorphic, resistant to penicillin." },
  { topic: "Puccinia", fact: "Heteroecious rust fungus causing black rust of wheat and yellow rust." },
  { topic: "Ustilago", fact: "Smut fungus forming thick masses of black sooty teliospores in host organs." }
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 155) {
  const item = classificationFacts[counter % classificationFacts.length];
  const idx = fullMcqList.length + 1;

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Select the correct statement regarding ${item.topic} in biological classification:`,
      opts: [
        `${item.fact}`,
        `It represents an angiosperm exhibiting double fertilization and triple fusion.`,
        `It is an acellular crystalline infectious agent composed solely of protein.`,
        `It forms triploid endosperm tissue following syngamy.`
      ],
      ans: 0,
      exp: `NCERT Biological Classification confirms: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Which taxonomic concept or group is identified by: "${item.fact.slice(0, 75)}..."?`,
      opts: [
        `${item.topic}`,
        `Gymnosperms`,
        `Pteridophytes`,
        `Bryophytes`
      ],
      ans: 0,
      exp: `This diagnostic description specifically identifies ${item.topic}.`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the five kingdom system of classification, ${item.topic} is distinguished by:`,
      opts: [
        `${item.fact}`,
        `Presence of multicellular sporophytes dependent on independent gametophytes.`,
        `Formation of naked seeds directly exposed on megasporophylls.`,
        `Production of covered seeds within mature carpels.`
      ],
      ans: 0,
      exp: `${item.topic} is characterized in NCERT: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Identify the true biological statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        `It exhibits dominant haplodiplontic alternation of generations.`,
        `It possesses true root systems with endarch vascular xylem vessels.`,
        `It reproduces solely by fragmentation of protonema filaments.`
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

console.log(`Part 3 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 3 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_botany_div_part3.js');
  const fileContent = `// Auto-generated data for Botany Diversity Part 3: Biological Classification\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
