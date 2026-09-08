const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Origin of life and biochemical evolution (Miller-Urey experiment)";
const CHAPTER = "Evolution";
const SUBJECT = "Zoology";

const arDirections = "Directions: In each of the following questions, a statement of Assertion (A) is given followed by a corresponding statement of Reason (R). Select the correct answer from the options given below:\n(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.\n(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.\n(c) Assertion is true, but Reason is false.\n(d) Assertion is false, but Reason is true.";

const arOptions = [
  "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
  "Assertion is true, but Reason is false.",
  "Assertion is false, but Reason is true."
];

const arData = [
  {
    a: "The early atmosphere of primitive Earth was reducing in nature and completely devoid of free molecular oxygen ($O_2$).",
    r: "Any free oxygen released from the photodissociation of water vapor by solar ultraviolet rays was promptly consumed by reacting with methane ($CH_4$) and ammonia ($NH_3$).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Free oxygen could not accumulate because UV rays split water into $H_2$ and $O_2$, and oxygen readily oxidized $CH_4$ and $NH_3$ into $CO_2$, water, and nitrogen oxides, maintaining a reducing environment."
  },
  {
    a: "Life on Earth is estimated to have originated approximately 4.0 billion years ago.",
    r: "The Earth itself was formed about 4.5 billion years ago, and life appeared about 500 million years after the planet's formation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that radiometric dating places Earth's formation at ~4.5 billion years ago (bya) and the earliest biogenic evidence at ~4.0 bya (500 million years later)."
  },
  {
    a: "Louis Pasteur conclusively disproved the theory of spontaneous generation (abiogenesis).",
    r: "Pasteur demonstrated using pre-sterilized swan-neck flasks that life did not originate from killed yeast in sealed flasks, proving that life arises only from pre-existing life.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Pasteur showed that nutrient broth in curved swan-neck flasks remained sterile because airborne dust and microbes were trapped in the bend, disproving spontaneous generation."
  },
  {
    a: "The Oparin-Haldane hypothesis proposed that life originated through a gradual process of chemical evolution.",
    r: "They hypothesized that the first living organisms evolved from pre-existing non-living organic macromolecules synthesized under primordial reducing conditions.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the core tenet of Oparin (Russia) and Haldane (England): abiogenic chemical synthesis preceded biological evolution."
  },
  {
    a: "Stanley Miller simulated primitive Earth's atmospheric conditions in a closed laboratory spark-discharge apparatus.",
    r: "Miller circulated a gaseous mixture of methane ($CH_4$), ammonia ($NH_3$), hydrogen ($H_2$), and water vapor at $800^\\circ\\text{C}$ with continuous electric discharge.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason describes the precise experimental parameters Miller designed in 1953 to simulate lightning in Earth's primordial reducing atmosphere."
  },
  {
    a: "The gas ratio of methane ($CH_4$), ammonia ($NH_3$), and hydrogen ($H_2$) maintained by Stanley Miller in his spark-discharge flask was $2 : 1 : 2$.",
    r: "This specific stoichiometric proportion mirrored geochemical deductions of primitive Earth's highly reducing gaseous envelope.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that Miller selected the $2:1:2$ volumetric ratio of $CH_4 : NH_3 : H_2$ based on Harold Urey's geochemical model of primordial atmosphere."
  },
  {
    a: "Chemical analysis of the fluid in Miller's collection trap after one week revealed the abiotic synthesis of amino acids.",
    r: "Glycine, alanine, and aspartic acid were among the identified organic amino acids formed by spark discharge.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly identifies the specific proteinogenic amino acids synthesized abiotically during Miller's classic experiment."
  },
  {
    a: "Analysis of the organic contents of meteorites (such as the Murchison meteorite) supports the hypothesis of chemical evolution.",
    r: "Similar amino acids, nitrogen bases, and organic molecules to those produced in Miller's experiment were detected inside extraterrestrial meteoritic material.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that organic compounds in carbonaceous chondrites demonstrate that abiotic organic synthesis occurs naturally in outer space."
  },
  {
    a: "The first non-cellular forms of life could have originated around 3 billion years ago.",
    r: "These non-cellular forms were giant molecular aggregates such as RNA, proteins, and polysaccharides capable of molecular replication.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that self-replicating macromolecular complexes (nucleic acids encased in protein/lipid boundaries) arose ~3 billion years ago."
  },
  {
    a: "The first cellular forms of life did not appear until approximately 2,000 million years (2 billion years) ago.",
    r: "These early single-celled primitive organisms originated in aquatic environments and were anaerobic chemoheterotrophs.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that early cellular ancestors were single cells living in water, obtaining energy anaerobically by fermenting primordial organic broth."
  },
  {
    a: "Coacervates and proteinoid microspheres are considered important precursors to primitive cellular life (protobionts).",
    r: "Coacervates and microspheres spontaneously aggregate in aqueous solutions, forming colloidal droplets bounded by a semipermeable membrane-like boundary.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that Oparin's coacervates and Fox's protenoid microspheres formed boundary membranes, concentrated internal solutes, and maintained an internal microenvironment."
  },
  {
    a: "RNA is widely considered to have been the first genetic material in early life (the 'RNA World' hypothesis).",
    r: "RNA can act both as an information-carrying genetic molecule and as a catalytic biocatalyst (ribozyme) capable of splicing and peptide bond formation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. RNA carries genetic instructions and possesses intrinsic enzymatic activity (ribozymes), making it capable of self-replication before DNA and proteins evolved."
  },
  {
    a: "DNA evolved from RNA as the primary genomic storage molecule in cellular organisms.",
    r: "DNA is chemically more stable and less reactive than RNA due to the absence of the $2'$-OH group and the presence of thymine instead of uracil.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that 2'-deoxyribose and thymine provide structural and chemical stability, enabling DNA to resist spontaneous alkaline hydrolysis and faithfully store genetic information."
  },
  {
    a: "Panspermia (or Cosmozoic theory) is the hypothesis that units of life reached Earth from outer space.",
    r: "Early Greek thinkers and certain modern astronomers posited that spores of life were transferred to Earth through meteorites or comets.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly describes the historical and contemporary basis of the panspermia concept championed by Richter, Arrhenius, and modern astrobiologists."
  },
  {
    a: "The Big Bang theory explains the physical origin of the universe.",
    r: "It proposes a singular colossal explosion of an unimaginably dense fireball ~20 billion years ago, leading to expansion, cooling, and subsequent formation of galaxies.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly describes the Big Bang event occurring ~20 bya, which created spacetime, expanded the universe, and generated hydrogen and helium."
  },
  {
    a: "Ozone layer formation was a crucial event in Earth's atmospheric evolution for the survival of terrestrial organisms.",
    r: "The stratospheric ozone ($O_3$) shield absorbs harmful solar ultraviolet (UV) radiation, preventing extensive photochemical mutations and DNA damage in surface life.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Accumulation of photosynthetic oxygen formed the stratospheric ozone layer, blocking mutagenic UV-C and UV-B radiation and enabling life to colonize land."
  },
  {
    a: "Early primordial heterotrophic life forms eventually triggered an 'oxygen catastrophe' through the evolution of oxygenic photosynthesis.",
    r: "Cyanobacteria-like ancestors evolved photosystem II, using water ($H_2O$) as an electron donor and releasing free molecular oxygen ($O_2$) as a waste product.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that oxygenic photosynthesis by early cyanobacteria oxidized Earth's oceans and atmosphere, which was toxic to obligate anaerobes."
  },
  {
    a: "Spallanzani's experiments contradicted John Needham's claims supporting spontaneous generation.",
    r: "Spallanzani demonstrated that vegetable broths boiled for prolonged periods in hermetically sealed glass flasks did not develop microbial growth.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that Spallanzani showed Needham's broths became contaminated because they were insufficiently boiled and improperly sealed."
  },
  {
    a: "Sydney Fox demonstrated the abiotic thermal synthesis of proteinoids (protenoid microspheres).",
    r: "Fox heated dry mixtures of amino acids to $160-180^\\circ\\text{C}$ to form thermal polyamino acids that aggregated into cell-like spherical structures in water.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason describes Fox's thermal polymerization experiment showing that protein-like polymers and microspheres form spontaneously under prebiotic thermal conditions."
  },
  {
    a: "Electric discharges in Miller's apparatus simulated primordial lightning storms on early Earth.",
    r: "High-voltage electrical spark discharges supplied the necessary activation energy to dissociate stable chemical bonds in methane, ammonia, and water vapor.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that spark discharges provided energy analogous to prehistoric volcanic lightning, ultraviolet rays, and geothermal heat."
  },
  {
    a: "The primordial soup (Darwin's 'warm little pond' / Haldane's 'hot dilute soup') was rich in dissolved organic monomers.",
    r: "In the absence of free oxygen and microbial consumers, abiotically synthesized organic molecules accumulated in oceans without undergoing degradation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Without aerobic oxidation or living microorganisms to metabolize them, organic compounds persisted and accumulated in early oceans for millions of years."
  },
  {
    a: "Deep-sea hydrothermal vents are widely investigated as candidate sites for the origin of life.",
    r: "Hydrothermal vents provide abundant chemical energy, geothermal heat, transition metal catalysts (FeS, NiS), and protection from surface asteroid bombardments.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains why submarine hydrothermal alkaline vents provide geochemical gradients and mineral surfaces suitable for prebiotic synthesis."
  },
  {
    a: "Water played an indispensable role as the universal solvent during biochemical evolution.",
    r: "Water possesses high heat capacity, acts as a reaction medium for hydrophilic organic polymers, and enabled primitive colloidal protocells to self-assemble.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why all biochemical processes and early protocells originated in an aqueous ocean environment."
  },
  {
    a: "Phospholipids spontaneously form bilayer liposomes in aqueous solutions.",
    r: "Amphipathic molecules assemble with hydrophobic fatty acid tails sequestered away from water and hydrophilic heads interacting with the aqueous phase.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the biophysical thermodynamics driving spontaneous vesicular compartmentalization, a prerequisite for cellular life."
  },
  {
    a: "Miller's experiment directly created living, reproducing cellular organisms in the laboratory.",
    r: "Miller observed the complete self-assembly of bacterial cells containing DNA genomes and ribosomes within 48 hours of spark discharge.",
    ans: 3,
    exp: "Assertion is false, and Reason is false (option d). Miller's experiment synthesized organic building blocks (amino acids, organic acids), but never produced living cells, genomes, or ribosomes."
  },
  {
    a: "The condensation of atmospheric water vapor on cooling early Earth formed the oceans.",
    r: "Torrential rains fell into surface crustal depressions over millions of years as Earth's temperature cooled below the boiling point of water ($100^\\circ\\text{C}$).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly describes the geological formation of Earth's primordial hydrosphere as surface temperatures dropped."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-30: Cosmological origin, primitive Earth conditions, Oparin-Haldane
addMcq(
  "According to modern cosmological science, the Big Bang event that initiated the expansion of the universe occurred approximately:",
  ["20 billion years ago", "4.5 billion years ago", "4.0 billion years ago", "1 billion years ago"],
  0,
  "The universe originated roughly 20 billion years ago ($20\\times 10^9$ years ago) through a singular colossal explosion known as the Big Bang."
);

addMcq(
  "The Earth is scientifically estimated to have formed about how many years ago?",
  ["4.5 billion years ago", "20 billion years ago", "2.0 billion years ago", "500 million years ago"],
  0,
  "According to NCERT Class 12 Biology, Earth was formed about 4.5 billion years ago in the solar system of the Milky Way galaxy."
);

addMcq(
  "Life on Earth first appeared approximately how long after the formation of the planet?",
  ["500 million years (i.e. almost 4 billion years ago)", "2 billion years", "100 million years", "10 million years"],
  0,
  "Life appeared 500 million years after the formation of Earth, which corresponds to nearly 4 billion years ago (4 bya)."
);

addMcq(
  "Which of the following gas mixtures correctly reflects the predominant constituents of primitive Earth's primordial reducing atmosphere?",
  ["Methane ($CH_4$), Ammonia ($NH_3$), Water vapor ($H_2O$), and Hydrogen ($H_2$)", "Oxygen ($O_2$), Nitrogen ($N_2$), and Carbon dioxide ($CO_2$)", "Ozone ($O_3$), Argon ($Ar$), and Oxygen ($O_2$)", "Sulfur dioxide ($SO_2$), Chlorine ($Cl_2$), and Oxygen ($O_2$)"],
  0,
  "Primitive Earth lacked free molecular oxygen ($O_2$). The molten surface released water vapor, methane, ammonia, and hydrogen into the reducing atmosphere."
);

addMcq(
  "Why was free molecular oxygen ($O_2$) absent in primitive Earth's primordial atmosphere?",
  ["It was rapidly consumed by reacting with abundant methane and ammonia to form water and carbon dioxide", "Oxygen atoms did not exist in the universe yet", "All oxygen was frozen into solid dry ice at the poles", "Photosynthetic plants had consumed all atmospheric oxygen"],
  0,
  "Solar UV rays broke water vapor into hydrogen and oxygen; lighter $H_2$ escaped into space, and reactive oxygen combined with $NH_3$ and $CH_4$ to form $H_2O$ and $CO_2$."
);

addMcq(
  "The Theory of Spontaneous Generation (Abiogenesis) claimed that:",
  ["Living organisms arose spontaneously from non-living, decaying, and rotting matter like mud, straw, and meat", "Life arrived on Earth from other galaxies inside meteorites", "All life forms were created simultaneously in six days", "Life originated through biochemical reactions in deep oceans"],
  0,
  "Abiogenesis or the theory of spontaneous generation posited that living organisms could arise spontaneously from inanimate, decaying organic debris."
);

addMcq(
  "Who designed the famous swan-neck flask experiments that conclusively disproved the Theory of Spontaneous Generation?",
  ["Louis Pasteur", "Alexander Oparin", "Stanley Miller", "Francesco Redi"],
  0,
  "Louis Pasteur demonstrated using swan-neck flasks that pre-sterilized yeast infusions remained free of microbial growth unless the neck was broken to admit airborne contaminants."
);

addMcq(
  "The biogenetic principle 'Omnis cellula e cellula' and the broader maxim 'Life comes only from pre-existing life' is termed:",
  ["Biogenesis", "Abiogenesis", "Panspermia", "Catastrophism"],
  0,
  "Biogenesis is the fundamental biological principle established by Pasteur, Redi, and Virchow stating that living organisms can arise only from pre-existing living organisms."
);

addMcq(
  "The Cosmozoic Theory (Panspermia) favored by early Greek philosophers and certain modern astronomers proposes that:",
  ["Units of life called spores or seeds were transferred to Earth from other planets in outer space", "Life was created in a single divine act", "Life arose from rotting mud and dung", "Life originated from volcanic lightning alone"],
  0,
  "Panspermia posits that microbial spores or prebiotic precursors traveled across interstellar space inside meteorites or comets and seeded early Earth."
);

addMcq(
  "The Theory of Chemical Evolution, stating that non-living inorganic constituents gave rise to organic molecules that evolved into life, was proposed by:",
  ["Alexander Oparin and J.B.S. Haldane", "Stanley Miller and Harold Urey", "Louis Pasteur and Robert Koch", "Charles Darwin and Alfred Russel Wallace"],
  0,
  "Alexander Oparin of Russia (1924) and J.B.S. Haldane of England (1929) independently proposed that chemical evolution of organic compounds preceded biological life."
);

addMcq(
  "J.B.S. Haldane referred to the warm primordial oceans filled with diverse abiotic organic compounds as the:",
  ["'Hot dilute soup' (or 'prebiotic broth')", "Coacervate solution", "Protoplasmic matrix", "Hydrothermal magma"],
  0,
  "Haldane coined the term 'hot dilute soup' to describe the ocean waters containing accumulated abiotic sugars, amino acids, purines, and pyrimidines."
);

addMcq(
  "In which year did Stanley L. Miller perform his classic spark-discharge experiment verifying chemical evolution?",
  ["1953", "1924", "1859", "1901"],
  0,
  "Stanley Miller conducted his landmark prebiotic synthesis experiment in 1953 as a graduate student under Harold Urey at the University of Chicago."
);

addMcq(
  "In Stanley Miller's spark-discharge apparatus, what temperature was maintained in the reaction flask during the electrical discharge?",
  ["$800^\\circ\\text{C}$", "$100^\\circ\\text{C}$", "$25^\\circ\\text{C}$", "$1,500^\\circ\\text{C}$"],
  0,
  "According to NCERT Class 12 Biology, Miller maintained a temperature of $800^\\circ\\text{C}$ in the spark flask containing electrodes to simulate primordial conditions."
);

addMcq(
  "Which specific gases did Stanley Miller introduce into his closed spark-discharge chamber?",
  ["$CH_4, NH_3, H_2$, and water vapor", "$CO_2, O_2, N_2$, and water vapor", "$CH_4, O_2, He$, and water vapor", "$H_2, N_2, O_3$, and water vapor"],
  0,
  "Miller introduced methane ($CH_4$), ammonia ($NH_3$), hydrogen ($H_2$), and water vapor into his closed evacuated glass apparatus."
);

addMcq(
  "What was the volumetric ratio of methane, ammonia, and hydrogen ($CH_4 : NH_3 : H_2$) used in Stanley Miller's experiment?",
  ["$2 : 1 : 2$", "$1 : 2 : 1$", "$2 : 2 : 1$", "$1 : 1 : 1$"],
  0,
  "Miller used a ratio of 2 parts methane, 1 part ammonia, and 2 parts hydrogen ($CH_4 : NH_3 : H_2 = 2 : 1 : 2$) along with boiling water vapor."
);

addMcq(
  "In Miller's experiment, what was the energy source used to simulate lightning in primitive Earth's atmosphere?",
  ["High-voltage electric discharge between tungsten electrodes", "Radioactive decay from uranium salts", "Direct sunlight from solar panels", "A Bunsen burner flame"],
  0,
  "Miller applied continuous 75,000-volt high-frequency electrical spark discharge across two tungsten electrodes to simulate atmospheric lightning."
);

addMcq(
  "After running the spark discharge apparatus continuously for one week, what key organic molecules were identified in Miller's condensate trap?",
  ["Amino acids (including glycine, alanine, and aspartic acid)", "Complete living bacteria", "Double-stranded DNA chromosomes", "Chlorophyll pigments"],
  0,
  "Paper chromatography revealed several amino acids, predominantly glycine, alanine, and aspartic acid, demonstrating abiotic synthesis of protein subunits."
);

addMcq(
  "In experiments similar to Miller's conducted by other prebiotic chemists, which additional organic compounds were successfully synthesized?",
  ["Sugars, nitrogenous bases, pigments, and fats", "Intact mammalian liver cells", "Fully assembled ribosomes", "Synthetic insulin proteins"],
  0,
  "Subsequent experiments simulating primitive conditions synthesized purines, pyrimidines, ribose and other sugars, fatty acids, and porphyrin pigments."
);

addMcq(
  "Evidence that abiotic synthesis of organic molecules is a universal cosmic process comes from the chemical examination of:",
  ["Meteorites (such as the Murchison meteorite)", "Lunar moon rocks devoid of organic material", "Volcanic basalt lava from Hawaii", "Sand grains from the Sahara desert"],
  0,
  "Analysis of carbonaceous chondrite meteorites (like the Murchison meteorite that fell in Australia in 1969) revealed over 70 distinct amino acids and purines."
);

addMcq(
  "The first non-cellular macromolecular capsules of life originating around 3 billion years ago were composed of:",
  ["Giant self-replicating molecules of RNA, proteins, and polysaccharides", "Peptidoglycan cell walls with flagella", "Mineral silica shells", "Cellulose fibers encasing DNA"],
  0,
  "According to NCERT, the first non-cellular forms of life arose ~3 bya as macromolecular complexes of RNA, proteins, and polysaccharides capable of replication."
);

addMcq(
  "The first cellular forms of life are estimated to have appeared on Earth approximately:",
  ["2,000 million years ago (2 billion years ago)", "4.5 billion years ago", "10,000 years ago", "50 million years ago"],
  0,
  "NCERT states that the first cellular forms of life did not originate till about 2,000 million years ago (2 bya), and were single-celled organisms in aquatic media."
);

addMcq(
  "The earliest cellular living organisms on primitive Earth were most probably:",
  ["Anaerobic chemoheterotrophs", "Aerobic photoautotrophs", "Terrestrial flowering plants", "Multicellular eukaryotes"],
  0,
  "In an anoxic environment rich in pre-existing organic molecules, early cells were anaerobic chemoheterotrophs that fermented abiotic organic nutrients."
);

addMcq(
  "Which evolutionary innovation transformed Earth's atmosphere from reducing to oxidizing?",
  ["Oxygenic photosynthesis by primitive cyanobacteria using water as an electron donor", "Volcanic outgassing of sulfur dioxide", "Thermal decomposition of granite rocks", "The condensation of atmospheric steam into rain"],
  0,
  "Ancestral cyanobacteria evolved the ability to split water via photosystem II, releasing free molecular oxygen ($O_2$) that converted Earth's atmosphere to an oxidizing state."
);

addMcq(
  "The 'RNA World' hypothesis proposes that in primordial life, RNA functioned as:",
  ["Both the genetic information storage polymer and the catalytic biocatalyst (ribozyme)", "A structural hormone in blood", "An inorganic mineral catalyst in granite", "An insoluble lipid membrane anchor"],
  0,
  "The RNA World hypothesis states that primitive life relied on RNA as both carrier of genetic code and enzymatic catalyst (ribozyme) prior to DNA and protein specialization."
);

addMcq(
  "Which catalytic RNA molecule demonstrated that RNA could act as a biocatalyst without protein enzymes?",
  ["Ribozyme (such as 23S rRNA peptidyl transferase and self-splicing group I introns)", "DNA polymerase I", "Reverse transcriptase", "Carbonic anhydrase"],
  0,
  "Thomas Cech and Sidney Altman discovered catalytic RNA (ribozymes) in the early 1980s, proving that RNA possesses intrinsic catalytic activity."
);

addMcq(
  "Coacervates, studied extensively by Alexander Oparin as protocell models, were formed by:",
  ["Spontaneous liquid-liquid phase separation of aqueous colloidal solutions of proteins and polysaccharides", "Freezing water into ice crystals", "Heating pure methane gas to $1,000^\\circ\\text{C}$", "Extracting DNA from modern mammalian cells"],
  0,
  "Oparin produced coacervates by mixing oppositely charged polymers (e.g. gelatin and gum arabic); they formed droplets that selectively absorbed organic molecules."
);

addMcq(
  "Sydney Fox produced 'proteinoid microspheres' by:",
  ["Thermal polymerization of dry amino acid mixtures followed by dissolution in boiling water and cooling", "Bubbling pure oxygen through petroleum oil", "Exposing bacterial spores to X-rays", "Centrifuging human erythrocytes"],
  0,
  "Sydney Fox heated dry amino acids to produce branched polymers called proteinoids, which upon hydration organized into uniform microscopic spheres displaying osmotic properties."
);

addMcq(
  "Why is spontaneous generation (abiogenesis) impossible under modern natural conditions on Earth?",
  ["Free atmospheric oxygen oxidizes and degrades organic molecules, and existing microbes promptly consume any abiotic precursors", "Earth is too warm for organic reactions", "The ozone layer prevents all chemical reactions", "Gravity has become too strong"],
  0,
  "Modern Earth has an oxidizing atmosphere that breaks down organic molecules, and ubiquitous microorganisms rapidly decompose any abiotic organic compounds before protocells could form."
);

addMcq(
  "Which scientist conducted experiments with sealed, boiled flasks of broth and mistakenly concluded that spontaneous generation of microbes occurred because of a 'vegetative force'?",
  ["John Needham", "Lazzaro Spallanzani", "Francesco Redi", "Alexander Fleming"],
  0,
  "In 1748, English priest John Needham boiled mutton gravy briefly and sealed it loosely; microbial growth appeared because he failed to boil it long enough or seal it completely."
);

addMcq(
  "Francesco Redi (1668) disproved the spontaneous generation of maggots from rotting meat by:",
  ["Covering meat flasks with fine gauze and parchment, showing maggots appeared only when adult flies laid eggs on the meat", "Boiling broth in swan-neck glass flasks", "Exposing meat to nuclear radiation", "Freezing meat in snow"],
  0,
  "Redi placed meat in open, gauze-covered, and sealed jars; maggots developed exclusively in open jars where adult flies had access to lay eggs, refuting abiogenesis of maggots."
);

// 31-70: Prebiotic chemistry, protobionts, atmospheric evolution
addMcq(
  "What is the term for self-organized, spherical collections of lipids or macromolecules that represent intermediate steps toward the origin of cellular life?",
  ["Protobionts (or Protocells)", "Viruses", "Bacteriophages", "Viroids"],
  0,
  "Protobionts are abiotic aggregates of macromolecules surrounded by a membrane-like boundary that maintained an internal chemical environment distinct from their surroundings."
);

addMcq(
  "Which characteristic of coacervates made them attractive models for the precursor of life?",
  ["Ability to concentrate organic solutes from surrounding media and perform simple metabolic-like reactions when enzymes were incorporated", "Ability to fly through the air", "Presence of a double-stranded DNA nucleus", "Formation of bone skeletons"],
  0,
  "Coacervates could concentrate dyes and nutrients from dilute solutions and exhibited selective permeability and osmotic swelling, mimicking primitive cytoplasm."
);

addMcq(
  "In Stanley Miller's apparatus, what was the function of the continuous boiling water flask connected to the system?",
  ["To generate water vapor (steam) that circulated the gases and maintained a continuous cycle like the hydrological cycle", "To cool the spark chamber down to zero degrees", "To sterilize the tungsten electrodes", "To produce pure methane gas"],
  0,
  "Boiling water provided steam that mixed with $CH_4, NH_3$, and $H_2$, circulating the gas mixture past the spark discharge before condensing, simulating Earth's water cycle."
);

addMcq(
  "In Miller's apparatus, the condenser placed below the spark chamber was responsible for:",
  ["Cooling the vaporized reaction mixture, causing water to condense and carry newly formed soluble organic products into the U-trap", "Generating electrical sparks", "Filtering out bacterial cells", "Absorbing all hydrogen gas"],
  0,
  "The water-cooled condenser chilled the gaseous mixture into liquid droplets, mimicking prehistoric torrential rains washing atmospheric organic compounds into the oceans."
);

addMcq(
  "The U-shaped glass trap in Miller's apparatus was designed to:",
  ["Collect and accumulate condensed liquid containing abiotically synthesized organic chemicals without letting them recirculate directly into boiling heat", "Release gases into the room", "Measure atmospheric pressure", "Inject live algae"],
  0,
  "The U-tube trap collected the liquid runoff containing newly formed chemical compounds, simulating the accumulation of organic molecules in primordial oceans."
);

addMcq(
  "Which of the following organic acids was NOT among the amino acids synthesized in Stanley Miller's 1953 experiment?",
  ["Sulfuric acid", "Glycine", "Alanine", "Aspartic acid"],
  0,
  "Sulfuric acid ($H_2SO_4$) is an inorganic mineral acid; Miller's experiment produced organic amino acids such as glycine, alanine, and aspartic acid."
);

addMcq(
  "What type of chemical reaction synthesized complex purines and pyrimidines from hydrogen cyanide ($HCN$) under prebiotic conditions in experiments conducted by Juan Oró?",
  ["Polymerization and condensation of hydrogen cyanide ($HCN$) and ammonia", "Direct photolysis of dry carbon dioxide", "Hydrolysis of cellulose fibers", "Combustion of petroleum hydrocarbons"],
  0,
  "In 1961, Juan Oró demonstrated that heating aqueous ammonium cyanide ($HCN + NH_3$) produced significant amounts of the adenine base, a fundamental component of DNA, RNA, and ATP."
);

addMcq(
  "The abiotic synthesis of adenine ($C_5H_5N_5$) by Juan Oró from simple precursors can be represented stoichiometrically as the pentamer of:",
  ["Hydrogen cyanide ($5\\text{ HCN} \\rightarrow \\text{Adenine}$)", "Methane ($5\\text{ CH}_4$)", "Carbon dioxide ($5\\text{ CO}_2$)", "Ammonia ($5\\text{ NH}_3$)"],
  0,
  "Adenine is formally a pentamer of hydrogen cyanide: $5\\text{ HCN} \\rightarrow C_5H_5N_5$. This explained its rapid prebiotic synthesis in primitive waters."
);

addMcq(
  "What role did clay minerals (such as montmorillonite) likely play in prebiotic macromolecular evolution?",
  ["Acting as solid mineral catalytic surfaces that concentrated monomers and facilitated polymerization of RNA nucleotides", "Consuming all water molecules to create deserts", "Providing genetic code directly to proteins", "Killing all primitive protocells"],
  0,
  "Clay minerals like montmorillonite have charged crystalline sheets that adsorb organic monomers, aligning amino acids and nucleotides to catalyze peptide and phosphodiester bond formation."
);

addMcq(
  "Liposomes are synthetic protocell models consisting of:",
  ["Spherical lipid bilayers enclosing an aqueous compartment, self-assembled from phospholipids in water", "Solid protein aggregates lacking any lipids", "Crystalline silica minerals", "Colloidal starch granules"],
  0,
  "When amphipathic phospholipids are suspended in water, they spontaneously assemble into bilayered membrane vesicles called liposomes, encapsulating water and solutes."
);

addMcq(
  "The transition from the 'RNA World' to the modern 'DNA-RNA-Protein' world represented an evolutionary milestone because:",
  ["DNA provided far greater chemical stability for genomic storage, while proteins provided greater catalytic versatility than RNA", "DNA is easier to destroy than RNA", "Proteins can replicate without nucleic acids", "RNA was completely eliminated from all modern cells"],
  0,
  "Double-stranded DNA is less susceptible to chemical cleavage than RNA, serving as a reliable archive, while proteins with 20 amino acid side chains offer vastly superior catalytic versatility."
);

addMcq(
  "Which organelle in eukaryotic cells is considered living evidence of an ancient endosymbiotic origin from aerobic bacteria?",
  ["Mitochondria", "Ribosome", "Endoplasmic reticulum", "Golgi apparatus"],
  0,
  "The Endosymbiotic Theory (Lynn Margulis) proposes that mitochondria evolved from engulfed aerobic alpha-proteobacteria, supported by their circular DNA, 70S ribosomes, and double membranes."
);

addMcq(
  "Chloroplasts in plant and algal cells originated endosymbiotically from which group of prokaryotes?",
  ["Photosynthetic cyanobacteria", "Anaerobic methanogens", "Sulfur-reducing archaebacteria", "Gram-negative spirochetes"],
  0,
  "Chloroplasts arose from ancient endosymbiotic photosynthetic cyanobacteria engulfed by early eukaryotic cells, retaining circular genomes, thylakoid membranes, and 70S ribosomes."
);

addMcq(
  "The famous geological formations that represent the oldest macroscopic fossil evidence of early microbial life (~3.5 billion years old) are called:",
  ["Stromatolites", "Amber nodules", "Petrified tree trunks", "Banded iron formations"],
  0,
  "Stromatolites are layered sedimentary rock structures formed by the trapping, binding, and cementation of sedimentary grains by microbial mats of filamentous cyanobacteria."
);

addMcq(
  "Banded Iron Formations (BIFs) in Precambrian geology provide dramatic geological evidence for:",
  ["The release of free molecular oxygen into primitive oceans by early oxygenic photosynthetic organisms", "The complete absence of water on early Earth", "Extraterrestrial impacts by iron asteroids", "The sudden death of all marine life"],
  0,
  "As photosynthetic cyanobacteria produced oxygen, it reacted with dissolved ferrous iron ($Fe^{2+}$) in seawater, precipitating massive insoluble ferric oxide ($Fe_2O_3$) layers known as BIFs."
);

addMcq(
  "Before the accumulation of atmospheric oxygen, how was early Earth protected from fatal solar UV radiation?",
  ["Early life was restricted to deep water, subterranean rocks, or sediment layers that shielded organisms from UV rays", "Earth had a thick synthetic lead shield", "The sun did not emit any UV rays during the Archaean eon", "All primitive organisms were made of iron"],
  0,
  "In the absence of an atmospheric ozone screen, early life was sheltered beneath meters of ocean water, mud, or deep-sea hydrothermal crevices that absorbed damaging solar UV radiation."
);

addMcq(
  "Which scientist formulated the hypothesis that life originated in an alkaline hydrothermal vent on the ocean floor?",
  ["Michael Russell", "Stanley Miller", "Louis Pasteur", "Jean-Baptiste Lamarck"],
  0,
  "Geochemist Michael Russell proposed that life began in alkaline submarine hydrothermal vents where iron-sulfur minerals catalyzed the first biochemical redox reactions."
);

addMcq(
  "The catalytic core of the modern ribosome (peptidyl transferase) that synthesizes peptide bonds in all living organisms is composed of:",
  ["23S / 28S ribosomal RNA (a ribozyme)", "A globular ribosomal protein enzyme", "A steroid lipid cofactor", "A magnesium chloride crystal"],
  0,
  "X-ray crystallography of the ribosome (Noller, Steitz) proved that the catalytic peptidyl transferase center is composed entirely of rRNA, confirming the ribozyme foundation of the RNA World."
);

addMcq(
  "Which nucleotide cofactor widely used in cellular metabolism contains an RNA monomer component, supporting the RNA World hypothesis?",
  ["ATP, NADH, and Coenzyme A", "Glucose-6-phosphate", "Cholesterol", "Lactic acid"],
  0,
  "Universal biochemical cofactors like ATP, FAD, NAD+, and Coenzyme A are built around ribonucleotide structures (adenosine), reflecting their evolutionary ancestry in an RNA-dominated biosphere."
);

addMcq(
  "The spontaneous assembly of polypeptides without nucleic acid templates was achieved in prebiotic simulation experiments using:",
  ["Thermal energy on dry amino acid mixtures or polyphosphate condensing agents", "Liquid nitrogen cooling to $-196^\\circ\\text{C}$", "Direct illumination with pure green light", "Dissolving plastic in alcohol"],
  0,
  "Dry heating of amino acid mixtures (Fox) or chemical activation with polyphosphates drives condensation reactions that form peptide bonds without ribosomal translation."
);

// 71-110: Historical theories, experimental milestones, biochemical evidence
addMcq(
  "The Theory of Special Creation posits that:",
  ["All diverse living species were created by a supernatural divine power in their present morphology and have remained unchanged", "Species evolved through continuous natural selection", "Life originated from RNA in warm volcanic vents", "Dinosaurs transformed into modern birds"],
  0,
  "Special Creation claims that all species were created independently by a divine entity, Earth is only a few thousand years old, and organisms have never changed since creation."
);

addMcq(
  "The French naturalist Georges Cuvier explained the disappearance of ancient fossil species from rock strata by proposing the theory of:",
  ["Catastrophism", "Uniformitarianism", "Chemical Evolution", "Natural Selection"],
  0,
  "Cuvier proposed Catastrophism: periodic violent geological catastrophes wiped out local life forms in successive epochs, after which areas were repopulated by new creations."
);

addMcq(
  "In contrast to Catastrophism, James Hutton and Charles Lyell established the principle of Uniformitarianism, which argues that:",
  ["The geological forces (erosion, sedimentation, volcanism) operating today have operated continuously at similar rates throughout Earth's long history", "All mountains were created simultaneously in one day", "Earth is exactly 6,000 years old", "Water has never flowed on Earth"],
  0,
  "Uniformitarianism ('the present is the key to the past') demonstrated that Earth is immensely old and shaped by slow, continuous physical processes rather than sudden global catastrophes."
);

addMcq(
  "Svante Arrhenius (1908) was a major scientific proponent of which theory of the origin of life?",
  ["Panspermia (Cosmozoic theory)", "Spontaneous generation", "Special creation", "RNA World hypothesis"],
  0,
  "Nobel laureate Svante Arrhenius formulated the modern scientific version of Panspermia, suggesting that bacterial spores were propelled across stellar systems by radiation pressure."
);

addMcq(
  "Which experiment by Francesco Redi effectively contradicted the ancient belief that rotting meat generates flies?",
  ["Placing fresh meat in open jars, gauze-covered jars, and completely sealed jars", "Boiling broth in S-shaped flasks", "Sparking a mixture of methane and ammonia", "Adding penicillin to bacterial cultures"],
  0,
  "Redi demonstrated that maggots only appeared on meat where adult blowflies could land and deposit eggs; sealed and gauze-covered jars remained free of maggots."
);

addMcq(
  "Lazzaro Spallanzani improved upon John Needham's experiment by:",
  ["Boiling meat infusions for nearly an hour and hermetically melting shut the glass flask necks", "Leaving meat flasks open to room air", "Using plastic Petri dishes", "Adding chemical preservatives to broth"],
  0,
  "Spallanzani heated sealed flasks for 45-60 minutes to kill all heat-resistant spores, demonstrating that properly sterilized sealed broth remained indefinitely free of microbes."
);

addMcq(
  "Why did critics claim Spallanzani's sealed-flask experiments were invalid?",
  ["They claimed he had destroyed the 'vital force' or life-giving principle of air by prolonged boiling and sealing", "They claimed he used the wrong type of meat", "They claimed his microscope was defective", "They argued bacteria were too large to fit in flasks"],
  0,
  "Proponents of abiogenesis argued that boiling and sealing destroyed an elusive 'vital force' (vegetative force) in the air required for spontaneous generation."
);

addMcq(
  "How did Louis Pasteur's swan-neck flask design directly dismantle the 'vital force' objection of abiogenesis proponents?",
  ["The open, unsealed curved neck allowed fresh air to enter freely, while dust and microbes settled in the moist lower curve without reaching the broth", "He pressurized the flask to 100 atmospheres", "He pumped pure oxygen gas into the broth", "He added live maggots to the neck"],
  0,
  "Pasteur's ingenious S-shaped neck left the flask open to atmospheric air (vital force intact), yet airborne particulate matter settled in the downward bend, keeping the broth sterile."
);

addMcq(
  "What simple action by Louis Pasteur caused the clear broth in a swan-neck flask to rapidly turn cloudy with teeming bacteria?",
  ["Tilting the flask so that the sterile broth rinsed the dusty curve and was returned to the main flask, or snapping off the curved neck", "Freezing the flask in snow", "Illuminating the flask with blue light", "Filtering the broth through cotton"],
  0,
  "Tipping the broth into the bend washed the trapped airborne microorganisms into the medium, where they multiplied within hours, proving contamination came from outside."
);

addMcq(
  "Which of the following books, published in 1936, laid out the foundational biochemical roadmap for the origin of life?",
  ["'The Origin of Life' by Alexander I. Oparin", "'Philosophie Zoologique' by Jean-Baptiste Lamarck", "'On the Origin of Species' by Charles Darwin", "'Systema Naturae' by Carl Linnaeus"],
  0,
  "Alexander Oparin's 1936 book 'The Origin of Life' synthesized geology, chemistry, and biology into the first comprehensive hypothesis of prebiotic chemical evolution."
);

addMcq(
  "Which key difference distinguishes Oparin's coacervates from modern living cells?",
  ["Coacervates lacked genetic material and lipid bilayer membranes with transport proteins, and could not faithfully reproduce", "Coacervates could perform aerobic photosynthesis", "Coacervates possessed 80S eukaryotic ribosomes", "Coacervates contained a bony skeleton"],
  0,
  "While coacervates could concentrate macromolecules and perform simple catalyzed reactions, they lacked organized genomes, genetic replication machinery, and lipid bilayer membranes."
);

addMcq(
  "Which chemical element was an essential constituent of all amino acids synthesized in Miller's experiment?",
  ["Nitrogen (derived from ammonia, $NH_3$)", "Lead", "Uranium", "Argon"],
  0,
  "Ammonia ($NH_3$) supplied the amino nitrogen ($-\\text{NH}_2$) incorporated into the carbon skeletons derived from methane, yielding alpha-amino acids."
);

addMcq(
  "In pre-biotic chemistry, the Strecker synthesis reaction pathway explains how Miller's apparatus produced amino acids from:",
  ["Aldehydes, hydrogen cyanide ($HCN$), and ammonia ($NH_3$)", "Carbon monoxide and water only", "Pure glucose and urea", "Sulfur dioxide and oxygen"],
  0,
  "The Strecker reaction (reaction of aldehydes formed from methane and water with ammonia and $HCN$) yields amino nitriles that hydrolyze into alpha-amino acids."
);

addMcq(
  "Which modern scientific technique confirmed the presence of non-terrestrial amino acids in the Murchison meteorite with equal ratios of D- and L-stereoisomers (racemic mixture)?",
  ["Gas chromatography-mass spectrometry (GC-MS)", "Simple hand-lens inspection", "Litmus paper test", "Blood group agglutination test"],
  0,
  "GC-MS and enantioselective chromatography revealed that meteoritic amino acids exist as a racemic ($50:50$ D/L) mixture, proving they were abiotic and not terrestrial biological contaminants."
);

addMcq(
  "Living organisms exclusively utilize which optical stereoisomer of amino acids to construct proteins?",
  ["L-amino acids (L-enantiomers)", "D-amino acids only", "A 50:50 racemic mixture of D and L", "Neither D nor L isomers"],
  0,
  "Biological homochirality is a hallmark of terrestrial life: all ribosomal protein synthesis exclusively utilizes L-stereoisomers of amino acids."
);

addMcq(
  "In contrast to proteins, naturally occurring nucleic acids (DNA and RNA) in living cells exclusively contain:",
  ["D-sugars (D-ribose and D-deoxyribose)", "L-sugars only", "Equimolar racemic sugar mixtures", "Inorganic silica rings"],
  0,
  "Living organisms exhibit homochirality in carbohydrates as well, incorporating D-ribose and D-2-deoxyribose into the phosphodiester backbone of nucleic acids."
);

addMcq(
  "What critical event allowed early organisms to abandon anaerobic fermentation and evolve efficient aerobic respiration?",
  ["The accumulation of free molecular oxygen ($O_2$) in the atmosphere and oceans", "The freezing of Earth's oceans into ice", "The extinction of all bacterial species", "The arrival of dinosaurs"],
  0,
  "The release of $O_2$ by cyanobacteria created an oxidizing biosphere, allowing organisms to evolve aerobic respiration using oxygen as a terminal electron acceptor ($36-38$ ATP vs 2 ATP)."
);

addMcq(
  "Which geological era is known as the 'Age of Prokaryotes' or the era of primitive early life?",
  ["Archaean (and Proterozoic) Eon", "Cenozoic Era", "Mesozoic Era", "Jurassic Period"],
  0,
  "The Archaean Eon ($4.0 - 2.5$ billion years ago) and early Proterozoic represent the period of early prokaryotic life dominated by anaerobic bacteria and cyanobacteria."
);

addMcq(
  "The earliest evidence of eukaryotic cellular life in the fossil record dates back to approximately:",
  ["1.5 to 2.1 billion years ago (Proterozoic Eon)", "4.5 billion years ago", "65 million years ago", "10,000 years ago"],
  0,
  "Single-celled microfossils exhibiting organelle compartmentalization and large cell diameters indicative of eukaryotic protists appear ~1.5 to 2.1 billion years ago."
);

addMcq(
  "The term 'abiotic synthesis' refers specifically to:",
  ["The chemical synthesis of organic compounds in the absence of living organisms", "The reproduction of bacteria inside a host", "The photosynthesis of glucose by tree leaves", "The viral infection of eukaryotic cells"],
  0,
  "Abiotic (prebiotic) synthesis denotes the purely chemical, physical formation of organic molecules from inorganic precursors without the intervention of biological organisms."
);

// 111-154: Advanced concepts, chemical evolution mechanisms, and NCERT matches
addMcq(
  "Match the scientist in Column I with their contribution to the origin of life in Column II:\nColumn I:\n(A) Louis Pasteur\n(B) Stanley Miller\n(C) Alexander Oparin\n(D) Sydney Fox\nColumn II:\n(1) Coacervate droplet theory\n(2) Swan-neck flask experiment disproving abiogenesis\n(3) Spark-discharge synthesis of amino acids\n(4) Thermal synthesis of proteinoid microspheres",
  ["A-2, B-3, C-1, D-4", "A-3, B-2, C-4, D-1", "A-1, B-4, C-2, D-3", "A-4, B-1, C-3, D-2"],
  0,
  "Pasteur performed the swan-neck flask experiment (A-2); Miller conducted spark discharge synthesis (B-3); Oparin proposed coacervates (C-1); Fox synthesized proteinoid microspheres (D-4)."
);

addMcq(
  "Match the gas in Miller's experiment with its primary chemical role:\nColumn I:\n(A) Methane ($CH_4$)\n(B) Ammonia ($NH_3$)\n(C) Hydrogen ($H_2$)\n(D) Water vapor ($H_2O$)\nColumn II:\n(1) Supplied carbon skeleton\n(2) Supplied amino nitrogen\n(3) Maintained reducing potential\n(4) Supplied oxygen and hydroxyl groups",
  ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-3, B-4, C-1, D-2", "A-4, B-3, C-2, D-1"],
  0,
  "Methane supplied carbon (A-1); ammonia provided amino nitrogen (B-2); hydrogen maintained reducing conditions (C-3); water vapor provided oxygen and hydrogen (D-4)."
);

addMcq(
  "Which environmental energy source was NOT readily available on prebiotic Earth to drive chemical evolution?",
  ["Nuclear fission reactors built by humans", "Solar ultraviolet radiation", "Volcanic heat and geothermal steam", "Atmospheric lightning discharges"],
  0,
  "Prebiotic energy sources included solar UV, cosmic rays, volcanic geothermal heat, and electrical lightning; man-made nuclear reactors did not exist."
);

addMcq(
  "The observation that all modern living organisms use the exact same universal genetic code (with minor exceptions) strongly indicates that:",
  ["All life on Earth shared a single, common primordial ancestor (Last Universal Common Ancestor / LUCA)", "Every animal originated independently from a different meteorite", "Genetic code changes every 10 years", "Plants and animals have zero genetic relationship"],
  0,
  "The universality of the 64-codon triplet genetic code across bacteria, archaea, plants, and animals is overwhelming biochemical evidence for a single common ancestor (LUCA)."
);

addMcq(
  "In prebiotic chemistry, the formose reaction discovered by Butlerov describes the abiotic synthesis of:",
  ["Diverse sugars (including pentoses and hexoses) from formaldehyde ($HCHO$)", "Amino acids from sulfuric acid", "DNA from petroleum", "Fatty acids from pure hydrogen"],
  0,
  "The formose reaction is the base-catalyzed polymerization of formaldehyde ($HCHO$) yielding a complex mixture of carbohydrates, including ribose essential for RNA synthesis."
);

addMcq(
  "Why was hydrogen gas ($H_2$) able to escape early Earth's gravitational pull into space?",
  ["Hydrogen has an exceptionally low molecular weight ($2\\text{ g/mol}$) and high thermal velocity exceeding Earth's escape velocity", "Hydrogen is chemically attracted to the sun's magnetic field", "Hydrogen was heavier than iron and sank to the core", "Earth lacked any gravitational attraction in the past"],
  0,
  "Because $H_2$ is the lightest molecular gas, its root-mean-square thermal speed in the upper atmosphere easily exceeded Earth's gravitational escape velocity (~11.2 km/s)."
);

addMcq(
  "Which of the following compounds was absent in the gases used by Stanley Miller?",
  ["Molecular Oxygen ($O_2$)", "Methane ($CH_4$)", "Ammonia ($NH_3$)", "Water vapor ($H_2O$)"],
  0,
  "Miller purposely excluded molecular oxygen ($O_2$) because free oxygen would have instantly oxidized the reduced gases and prevented prebiotic organic synthesis."
);

addMcq(
  "What would have happened if Stanley Miller had included molecular oxygen ($O_2$) in his spark discharge flask?",
  ["No organic compounds would have formed because oxygen would oxidize organic intermediates into carbon dioxide and water, or cause an explosion with hydrogen", "Twice as many amino acids would have formed", "Bacterial cells would have evolved within 10 minutes", "Living fish would have appeared"],
  0,
  "Oxygen is a strong oxidizing agent; in an oxidizing atmosphere, organic molecules are oxidized to $CO_2$ and $H_2O$, and hydrogen gas combusts explosively with $O_2$."
);

addMcq(
  "Which of the following statements regarding the origin of life is INCORRECT according to NCERT Class 12?",
  ["The first cellular forms of life originated on dry land rocks", "Earth was formed about 4.5 billion years ago", "Life appeared about 500 million years after Earth's formation", "Miller observed the formation of amino acids from $CH_4, NH_3, H_2$, and water vapor"],
  0,
  "Statement (a) is incorrect because the first cellular forms of life originated in an aquatic water environment, not on dry land rocks. The other three statements are factual NCERT points."
);

addMcq(
  "Protobionts could maintain an internal chemical environment different from their surroundings because they possessed a:",
  ["Selective boundary or primitive limiting membrane", "Rigid calcium shell", "Nuclear membrane", "Silicon layer"],
  0,
  "Protobionts featured a bounding surface or semipermeable membrane (such as a lipid monolayer/bilayer or coacervate boundary) that enclosed internal components."
);

addMcq(
  "The term 'chemical evolution' implies:",
  ["The formation of complex organic molecules from simple inorganic molecules through prebiotic chemical reactions", "The transformation of apes into humans", "The synthesis of artificial chemicals in modern factories", "The burning of coal into ash"],
  0,
  "Chemical evolution is the gradual progression of chemical complexity: from inorganic gases to simple organic monomers, then to polymers, and ultimately to self-replicating protocells."
);

addMcq(
  "Which theory regarding the origin of life was based on the belief that a 'vital force' created living beings from rotten hay and dirty shirts?",
  ["Theory of Spontaneous Generation (Abiogenesis)", "Theory of Chemical Evolution", "Cosmozoic Theory", "Big Bang Theory"],
  0,
  "Jan Baptist van Helmont famously claimed that dirty shirts placed in a wheat bin would generate mice in 21 days due to a 'vital human sweat force', illustrating spontaneous generation."
);

addMcq(
  "Why did life on Earth take nearly 2 billion years to transition from single-celled organisms to complex multicellular animals?",
  ["Atmospheric oxygen had to accumulate to levels supporting high-energy aerobic metabolism, and regulatory gene networks had to evolve", "Earth was too cold for cells to touch each other", "Water did not exist in oceans yet", "Gravity was fluctuating randomly"],
  0,
  "Multicellularity required high oxygen tensions to support aerobic collagen synthesis and tissue energetics, along with the evolution of cell adhesion, signaling, and developmental gene networks."
);

addMcq(
  "The iron-sulfur world hypothesis developed by Günter Wächtershäuser proposes that early chemical evolution occurred on:",
  ["Crystalline mineral surfaces of iron and nickel sulfides ($FeS, NiS$) in hydrothermal environments", "Ice sheets floating on polar oceans", "Dry sand dunes in deserts", "The surface of tree leaves"],
  0,
  "Wächtershäuser proposed that hydrothermal iron-sulfur minerals catalyzed the first carbon-fixation cycles, serving as inorganic catalysts and electron donors before enzymes evolved."
);

addMcq(
  "The synthesis of polypeptides from amino acids during chemical evolution is an example of which type of chemical reaction?",
  ["Dehydration condensation reaction releasing water molecules", "Hydrolysis requiring water uptake", "Nuclear fission", "Combustion"],
  0,
  "Formation of peptide bonds between the amino group of one amino acid and the carboxyl group of another is a dehydration condensation that releases a molecule of water."
);

addMcq(
  "The age of fossils and rocks from Earth's early geological eras is determined with high precision using:",
  ["Radiometric dating using radioactive isotope decay (e.g. Uranium-Lead, Potassium-Argon, Carbon-14)", "Counting tree growth rings", "Measuring ocean water salinity", "Observing the phases of the moon"],
  0,
  "Radiometric dating relies on the constant half-life decay rates of radioactive isotopes (like $^{238}\\text{U} \\rightarrow ^{206}\\text{Pb}$ and $^{40}\\text{K} \\rightarrow ^{40}\\text{Ar}$) to date ancient rocks."
);

addMcq(
  "Why is Carbon-14 ($^{14}\\text{C}$) dating NOT suitable for dating the origin of life or fossils older than 60,000 years?",
  ["The half-life of Carbon-14 is only 5,730 years, so virtually no detectable $^{14}\\text{C}$ remains after ~60,000 years", "Carbon-14 does not exist in living organisms", "Carbon-14 decays into pure gold", "Carbon-14 is poisonous to rocks"],
  0,
  "Due to its short half-life of 5,730 years, $^{14}\\text{C}$ is useful only for dating organic remains up to ~50,000-60,000 years; ancient geological eras require Uranium-Lead or Potassium-Argon dating."
);

addMcq(
  "The first living organisms on Earth obtained their energy without using oxygen through which metabolic pathway?",
  ["Anaerobic glycolysis / fermentation", "Aerobic Krebs cycle", "Oxygenic photosynthesis", "Oxidative phosphorylation in mitochondria"],
  0,
  "In an anoxic prebiotic world, the earliest cells generated ATP anaerobically via substrate-level phosphorylation in glycolysis and fermentation pathways."
);

addMcq(
  "The appearance of photosystem I and cyclic photophosphorylation in anoxygenic phototrophs (like purple and green sulfur bacteria) utilized which electron donor instead of water?",
  ["Hydrogen sulfide ($H_2S$) or elemental sulfur, producing sulfur instead of oxygen", "Pure molecular oxygen", "Sodium chloride", "Sulfuric acid"],
  0,
  "Anoxygenic photosynthetic bacteria split $H_2S$ rather than $H_2O$, depositing elemental sulfur granules and releasing no molecular oxygen: $CO_2 + 2H_2S \\rightarrow (CH_2O) + H_2O + 2S$."
);

addMcq(
  "According to the Oparin-Haldane theory, what was the primary energy source that drove the formation of organic monomers from atmospheric gases?",
  ["Solar ultraviolet radiation and lightning discharges", "Nuclear power plants", "Tidal friction from the moon only", "Frictional rubbing of tectonic plates"],
  0,
  "Intense solar ultraviolet radiation (unscreened by ozone) and frequent electric lightning storms provided the primary activation energies for prebiotic photochemical synthesis."
);

addMcq(
  "Which nucleotide base found in RNA is replaced by thymine in DNA, conferring greater resistance to photochemical mutations?",
  ["Uracil", "Adenine", "Guanine", "Cytosine"],
  0,
  "Uracil is present in RNA, whereas DNA contains thymine (5-methyluracil); spontaneous deamination of cytosine produces uracil, which DNA repair systems recognize and excise because DNA uses thymine."
);

addMcq(
  "The discovery that RNA molecules can self-splice and catalyze biochemical reactions earned the Nobel Prize in Chemistry in 1989 for:",
  ["Sidney Altman and Thomas Cech", "James Watson and Francis Crick", "Stanley Miller and Harold Urey", "Alexander Oparin and J.B.S. Haldane"],
  0,
  "Sidney Altman (RNase P) and Thomas Cech (Tetrahymena group I intron) won the 1989 Nobel Prize for discovering the catalytic properties of RNA (ribozymes)."
);

addMcq(
  "Which simple inorganic nitrogen compound was the primary source of amino groups in prebiotic evolution?",
  ["Ammonia ($NH_3$)", "Nitric acid ($HNO_3$)", "Nitrogen dioxide ($NO_2$)", "Ammonium nitrate ($NH_4NO_3$)"],
  0,
  "Ammonia ($NH_3$) released in volcanic eruptions dissolved in oceans, providing the nucleophilic nitrogen source for amino acid and purine/pyrimidine synthesis."
);

addMcq(
  "The Miller-Urey experiment is universally celebrated in biological textbooks because it was the first experiment to:",
  ["Provide direct experimental proof that organic molecules essential for life could be synthesized abiotically under simulated primitive Earth conditions", "Prove that Darwin's finches have different beaks", "Synthesize a functional human cloning vector", "Isolate DNA from Neanderthal bones"],
  0,
  "Miller's 1953 experiment provided the first concrete experimental verification of the Oparin-Haldane chemical evolution hypothesis, transforming speculative origin-of-life concepts into an empirical science."
);

addMcq(
  "Which of the following describes the sequence of chemical and biological evolution according to the Oparin-Haldane paradigm?",
  ["Inorganic gases $\\rightarrow$ Simple organic monomers $\\rightarrow$ Complex polymers $\\rightarrow$ Protobionts $\\rightarrow$ Cellular life", "Cellular life $\\rightarrow$ Protobionts $\\rightarrow$ Polymers $\\rightarrow$ Monomers $\\rightarrow$ Gases", "DNA $\\rightarrow$ Meteorites $\\rightarrow$ Dinosaurs $\\rightarrow$ Bacteria", "Bacteria $\\rightarrow$ Viruses $\\rightarrow$ Amino acids $\\rightarrow$ Methane"],
  0,
  "Chemical evolution proceeded from inorganic molecules to organic monomers, to macromolecules (proteins/RNA), to colloidal protobionts, and ultimately to self-replicating cellular life."
);


const extra59Mcqs = [
  [
    "In geological history, the eon spanning from Earth's formation (4.5 billion years ago) until approximately 4.0 billion years ago, characterized by intense asteroid bombardment, is the:",
    [
      "Hadean Eon",
      "Phanerozoic Eon",
      "Cenozoic Era",
      "Mesozoic Era"
    ],
    0,
    "The Hadean Eon represents Earth's initial hellish period of molten crust, volcanic outgassing, and heavy cosmic bombardment prior to crustal stabilization."
  ],
  [
    "The famous Murchison meteorite that landed in Victoria, Australia, in September 1969 belongs to which rare class of meteorites?",
    [
      "Carbonaceous chondrites (CM2 group)",
      "Iron-nickel meteorites",
      "Achondrites",
      "Pallasites"
    ],
    0,
    "The Murchison meteorite is a primitive carbonaceous chondrite rich in organic carbon (approx. 2%), preserving pristine prebiotic chemical compounds from the solar nebula."
  ],
  [
    "When Jeffrey Bada and colleagues reanalyzed Stanley Miller's original archived reaction vials in 2008 using sensitive modern HPLC and mass spectrometry, they discovered:",
    [
      "More than 20 distinct amino acids, significantly more than Miller detected with paper chromatography",
      "Living bacterial spores",
      "Fully intact retroviral capsids",
      "Complex eukaryotic genomes"
    ],
    0,
    "Modern ultra-sensitive analytical methods detected 22 amino acids and 5 amines in Miller's original 1953 samples, proving prebiotic synthesis was even more efficient than originally realized."
  ],
  [
    "In Miller's simulated 'volcanic' apparatus (incorporating an aspirator nozzle that injected steam into the spark), the yield and diversity of amino acids was:",
    [
      "Substantially higher than in the classic spark apparatus",
      "Completely reduced to zero",
      "Identical to room air",
      "Converted entirely into inorganic lead"
    ],
    0,
    "The volcanic variant produced dramatic increases in amino acid diversity, suggesting localized volcanic island arcs were potent chemical cradles for prebiotic synthesis."
  ],
  [
    "The hypothesis that slight excesses of L-amino acids detected in certain meteorites (e.g. isovaline) were induced by interstellar radiation invokes:",
    [
      "Circularly polarized ultraviolet light (UV-CPL) causing asymmetric photolysis in interstellar molecular clouds",
      "Earth's magnetic poles",
      "Gravity of the moon",
      "Volcanic lava heat"
    ],
    0,
    "Chiral circularly polarized synchrotron light in star-forming regions can preferentially destroy one enantiomer, generating enantiomeric excesses that seeded terrestrial homochirality."
  ],
  [
    "Alkaline hydrothermal vents (such as the 'Lost City' field in the mid-Atlantic) generate molecular hydrogen ($H_2$) and methane through which geochemical reaction?",
    [
      "Serpentinization of ultramafic mantle rocks (olivine reacting with water)",
      "Combustion of coal seams",
      "Nuclear fission of radon",
      "Photosynthesis by deep-sea kelp"
    ],
    0,
    "Serpentinization occurs when seawater reacts with magnesium-iron silicates (olivine) in oceanic crust, releasing alkaline fluids rich in dissolved $H_2$, $CH_4$, and formate."
  ],
  [
    "The tiny microporous inorganic compartments formed of iron-sulfur minerals (e.g. mackinawite, FeS) in ancient hydrothermal vents are hypothesized to have:",
    [
      "Served as primitive inorganic cell-like physical compartments concentrating organic reactants before lipid membranes evolved",
      "Acted as radioactive traps killing all molecules",
      "Dissolved all water into dry steam",
      "Synthesized modern bone tissue"
    ],
    0,
    "Russell and Martin proposed that porous FeS/NiS mineral membranes separated acidic ocean water from alkaline vent fluids, providing catalytic surfaces and natural proton gradients."
  ],
  [
    "The 'Spiegelman's Monster' experiment performed by Sol Spiegelman in 1965 demonstrated that:",
    [
      "An RNA molecule replicating via $Q\\beta$ replicase under test-tube conditions evolved shorter sequences to replicate faster, demonstrating Darwinian molecular evolution",
      "Frogs can spontaneously assemble from mud",
      "DNA cannot replicate outside a cell",
      "Proteins destroy all RNA"
    ],
    0,
    "Spiegelman showed that when $Q\\beta$ viral RNA was repeatedly transferred with replicase and nucleotides, it underwent mutations and selective pressure, shrinking to an optimal 218-nucleotide self-replicating 'monster'."
  ],
  [
    "Manfred Eigen formulated the concept of the 'Hypercycle' to explain:",
    [
      "How cooperative cyclical feedback networks linking self-replicating nucleic acids and catalytic proteins overcame error thresholds in early life",
      "How planetary orbits influence animal migration",
      "How bacteria move their flagella in circles",
      "How carbon atoms cycle through the atmosphere"
    ],
    0,
    "Eigen's hypercycle showed that error catastrophe in primitive replication could be overcome by coupling mutualistic autocatalytic cycles where nucleic acids encode catalysts that enhance replication."
  ],
  [
    "Which specific ribozyme activity present inside human and bacterial ribosomes proves the ancient catalytic supremacy of RNA?",
    [
      "Peptidyl transferase activity of the large ribosomal subunit rRNA",
      "DNA ligase activity",
      "Amylase activity",
      "Topoisomerase activity"
    ],
    0,
    "Peptidyl transferase, which catalyzes the formation of every peptide bond during protein synthesis, is an RNA enzyme (23S rRNA in bacteria, 28S rRNA in eukaryotes) devoid of protein within 18 Å of the active site."
  ],
  [
    "The hammerhead ribozyme is an example of an RNA motif that can:",
    [
      "Site-specifically cleave its own phosphodiester backbone via intramolecular self-cleavage",
      "Synthesize glucose from carbon dioxide",
      "Replicate double-stranded DNA",
      "Translate amino acids into polysaccharides"
    ],
    0,
    "Hammerhead ribozymes are small catalytic RNA motifs found in viroids and satellite RNAs that perform sequence-specific, reversible self-cleavage without protein involvement."
  ],
  [
    "Fatty acid vesicles (liposomes assembled from simple amphiphiles like decanoic acid) differ from modern phospholipid membranes in that they:",
    [
      "Are dynamic, assemble easily from abiotic single-chain fatty acids, and are selectively permeable to polar monomers while retaining polymers",
      "Are completely impermeable to water",
      "Require complex modern enzymes to assemble",
      "Dissolve instantly in any liquid"
    ],
    0,
    "Protocell membranes composed of prebiotic single-chain fatty acids allow passive entry of small nutrients (nucleotides, amino acids) while encapsulating replicated polymers."
  ],
  [
    "The transition from geochemical prebiotic synthesis to living cells required which essential tripartite combination?",
    [
      "A genetic informational polymer, metabolic energy-coupling machinery, and a compartmentalizing boundary membrane",
      "A bony skeleton, eyes, and limbs",
      "Chlorophyll, roots, and vascular xylem",
      "Blood, heart, and lungs"
    ],
    0,
    "The definition of a minimal protocell mandates: (1) an informational genome (RNA/DNA), (2) a metabolic system for energy transduction, and (3) a compartmentalizing membrane."
  ],
  [
    "Oparin's coacervate droplets are formed primarily by which physical process?",
    [
      "Complex coacervation driven by electrostatic attraction between oppositely charged polyelectrolytes in aqueous solution",
      "High-temperature incineration of dry rocks",
      "Freezing water into snowflake crystals",
      "Dissolving heavy metals in pure acid"
    ],
    0,
    "Complex coacervation is a liquid-liquid phase separation where polycations and polyanions (e.g. histones and nucleic acids) associate electrostatically to form dense colloidal droplets."
  ],
  [
    "Sydney Fox's proteinoid microspheres exhibited which primitive cellular property when placed in solutions of different tonicity?",
    [
      "Osmotic swelling and shrinking, and boundary membrane potentials",
      "Photosynthetic carbon fixation",
      "Sexual reproduction with gametes",
      "Muscle contraction"
    ],
    0,
    "Proteinoid microspheres have a double-walled limiting boundary that behaves as a semipermeable membrane, exhibiting osmotic responses, staining Gram-positive/negative, and budding."
  ],
  [
    "Aristotle believed in spontaneous generation and posited that organisms arose from:",
    [
      "Non-living matter interacting with a vital heat or soul-like life force (pneuma)",
      "Meteorites traveling from Mars",
      "Chemical synthesis in deep oceans",
      "Photosynthesis by early algae"
    ],
    0,
    "Aristotle codified spontaneous generation, asserting that living things arose whenever non-living matter contained active 'vital heat' (pneuma)."
  ],
  [
    "Which 17th-century Belgian physician and chemist famously published a recipe to produce mice by placing sweaty underwear over a jar of wheat for 21 days?",
    [
      "Jan Baptist van Helmont",
      "Louis Pasteur",
      "Lazzaro Spallanzani",
      "Robert Hooke"
    ],
    0,
    "Van Helmont claimed that human sweat in a dirty shirt served as an active ferment that transformed wheat grains into adult mice in 21 days."
  ],
  [
    "Francesco Redi's classic 1668 experiment relied on which experimental design to test fly generation?",
    [
      "Meat placed in open jars, fine gauze-covered jars, and hermetically sealed jars",
      "Broth boiled in swan-neck flasks",
      "Sparking gases in glass chambers",
      "Freezing meat in ice blocks"
    ],
    0,
    "Redi showed that maggots only appeared in open jars where adult flies could lay eggs; gauze prevented egg deposition on the meat, disproving spontaneous generation of maggots."
  ],
  [
    "In 1745, John Needham claimed to have proven spontaneous generation of microbes because:",
    [
      "He boiled mutton broth briefly in flasks and sealed them with corks, yet microorganisms teemed in the broth days later",
      "He observed flies emerging from mud",
      "He synthesized amino acids from methane",
      "He saw bacteria dividing under a microscope"
    ],
    0,
    "Needham's boiling was too brief to kill heat-resistant bacterial endospores, and porous cork stoppers allowed airborne contamination, leading to his false conclusion."
  ],
  [
    "Lazzaro Spallanzani (1765) refuted Needham's findings by:",
    [
      "Boiling infusions for 45 to 60 minutes and hermetically sealing the glass necks by melting them in a flame",
      "Adding chemical disinfectants to the broth",
      "Leaving all flasks open to room air",
      "Freezing the flasks at zero degrees"
    ],
    0,
    "Spallanzani used rigorous, prolonged boiling and airtight melted-glass seals, demonstrating that truly sterilized infusions remained completely free of life."
  ],
  [
    "How did proponents of spontaneous generation attempt to dismiss Spallanzani's airtight sealed-flask results?",
    [
      "They argued that excessive boiling and exclusion of fresh air had destroyed the mystical 'vital force' (vegetative force)",
      "They claimed Spallanzani had used poisonous glass",
      "They argued bacteria were invisible ghosts",
      "They claimed water cannot support life"
    ],
    0,
    "Vitalists claimed that fresh air was an indispensable carrier of the 'vital force', and that sealing and boiling the flask destroyed its life-generating capability."
  ],
  [
    "How did Louis Pasteur in 1862 definitively defeat the 'vital force' objection in his swan-neck flask experiments?",
    [
      "His swan-neck flasks remained completely open to fresh atmospheric air, yet gravity trapped dust and microbes in the curved neck, preventing contamination",
      "He sealed the flasks under high vacuum",
      "He filled the flasks with pure nitrogen gas",
      "He boiled the broth with concentrated bleach"
    ],
    0,
    "The unsealed swan-neck allowed free exchange of atmospheric air ('vital force' preserved), but airborne microbes settled in the moist lower bend, leaving the broth sterile."
  ],
  [
    "What did Louis Pasteur do as a positive control to prove that the broth in the swan-neck flask was still capable of supporting microbial growth?",
    [
      "He broke the curved neck of the flask (or tilted the broth into the bend), and the broth became turbid with microbes within 48 hours",
      "He injected venom into the broth",
      "He froze the broth solid",
      "He painted the outside of the flask black"
    ],
    0,
    "Breaking the neck allowed airborne microbes to fall directly into the broth, which quickly teemed with bacterial growth, proving the medium was nutrient-viable."
  ],
  [
    "Who coined the term 'Biogenesis' for the doctrine that living matter always arises from pre-existing living matter?",
    [
      "Henry Charlton Bastian (popularized by Thomas Henry Huxley)",
      "Alexander Oparin",
      "Stanley Miller",
      "Charles Darwin"
    ],
    0,
    "Thomas Henry Huxley in 1870 clearly defined and championed 'Biogenesis' to denote that life originates exclusively from pre-existing life, refuting 'Abiogenesis'."
  ],
  [
    "John Tyndall (1876) explained why simple boiling sometimes failed to sterilize broth by discovering:",
    [
      "Heat-resistant bacterial endospores and inventing discontinuous boiling (Tyndallization) to kill germinating spores",
      "That bacteria are immortal",
      "That fire cannot kill viruses",
      "That air is composed entirely of microbes"
    ],
    0,
    "Tyndall discovered thermoresistant bacterial endospores (in hay infusions) and developed fractional sterilization (Tyndallization: heating, incubating, re-heating) to eliminate them."
  ],
  [
    "Harold C. Urey was awarded the Nobel Prize in Chemistry in 1934 for:",
    [
      "The discovery of deuterium (heavy hydrogen)",
      "The invention of the electron microscope",
      "The discovery of penicillin",
      "The formulation of the periodic table"
    ],
    0,
    "Harold Urey received the 1934 Nobel Prize for isolating deuterium, and later calculated that primitive planetary atmospheres were intensely reducing ($H_2$-rich)."
  ],
  [
    "Stanley Miller carried out his famous 1953 experiment while working as a graduate student under the supervision of:",
    [
      "Harold C. Urey",
      "Louis Pasteur",
      "Alexander Oparin",
      "Theodosius Dobzhansky"
    ],
    0,
    "Stanley Miller was a 23-year-old doctoral graduate student in the Department of Chemistry at the University of Chicago supervised by Harold C. Urey."
  ],
  [
    "What was the total operating time of the electric spark discharge in Stanley Miller's classic 1953 experiment before he analyzed the chemical products?",
    [
      "One week (approximately 7 days)",
      "24 hours only",
      "1 hour only",
      "6 months"
    ],
    0,
    "Miller operated his apparatus continuously for one full week, after which the water had turned deep red-brown and was analyzed by two-dimensional paper chromatography."
  ],
  [
    "Which simple aldehyde was identified as a key intermediate in the reaction vessel of Miller's experiment, serving as a precursor for amino acids and sugars?",
    [
      "Formaldehyde ($HCHO$)",
      "Acetaldehyde",
      "Benzaldehyde",
      "Butyraldehyde"
    ],
    0,
    "Formaldehyde ($HCHO$) formed abundantly from methane and water vapor, acting as a crucial reactive intermediate in the synthesis of sugars (formose reaction) and amino acids."
  ],
  [
    "Which cyanogenic compound formed in Miller's apparatus was pivotal in synthesizing both amino acids and purine nitrogen bases?",
    [
      "Hydrogen cyanide ($HCN$)",
      "Sodium chloride",
      "Potassium permanganate",
      "Hydrochloric acid"
    ],
    0,
    "Hydrogen cyanide ($HCN$) formed rapidly from $CH_4$ and $NH_3$, driving the Strecker synthesis of amino acids and condensing into purines like adenine."
  ],
  [
    "Glycine, the simplest amino acid synthesized in Miller's experiment, has which chemical structure?",
    [
      "$H_2N-CH_2-COOH$",
      "$H_2N-CH(CH_3)-COOH$",
      "$H_2N-CH(CH_2OH)-COOH$",
      "$CH_3-COOH$"
    ],
    0,
    "Glycine (aminoacetic acid) is the simplest achiral amino acid, having a single hydrogen atom as its side chain ($R = H$): $NH_2-CH_2-COOH$."
  ],
  [
    "Alanine, also synthesized in high yields in Miller's apparatus, possesses which side chain group?",
    [
      "A methyl group ($-CH_3$)",
      "A benzyl ring",
      "A hydroxyl group",
      "An indole ring"
    ],
    0,
    "Alanine is an aliphatic alpha-amino acid with a methyl side chain ($\\alpha$-aminopropionic acid): $NH_2-CH(CH_3)-COOH$."
  ],
  [
    "Aspartic acid, a dicarboxylic amino acid identified in Miller's prebiotic condensate, plays a central role in modern metabolism as a precursor for:",
    [
      "Pyrimidine nucleotides and urea cycle intermediates",
      "Cholesterol synthesis exclusively",
      "Vitamin C synthesis",
      "Chlorophyll ring structure"
    ],
    0,
    "Aspartic acid participates in pyrimidine nucleotide biosynthesis (via carbamoyl aspartate) and transamination reactions across all living taxa."
  ],
  [
    "Which color change was visually observed in the circulating water of Miller's apparatus as prebiotic organic molecules accumulated over the week?",
    [
      "It turned from clear to pink, then deep dark red, and finally turbid brown",
      "It turned bright neon green",
      "It remained crystal clear with zero change",
      "It turned into solid purple crystals"
    ],
    0,
    "As organic polymers, hydrogen cyanide oligomers, and amino acids accumulated, the water in Miller's flask progressed from clear to deep red and murky dark brown."
  ],
  [
    "In prebiotic simulation experiments, what role did electric spark discharge play compared to solar ultraviolet radiation?",
    [
      "Spark discharge provided localized, high-density energy pulses capable of breaking stable $C-H$ and $N-H$ bonds, analogous to storm lightning",
      "It illuminated the flask so scientists could see",
      "It acted as an X-ray laser destroying all chemicals",
      "It froze the gases into ice cubes"
    ],
    0,
    "Electrical discharges delivered intense localized activation energy to cleave unreactive $CH_4$ and $NH_3$ into reactive free radicals ($CH_3^\\bullet, CH_2^{\\bullet\\bullet}, NH_2^\\bullet, H^\\bullet$)."
  ],
  [
    "Which scientist in 1961 synthesized the adenine base by heating an aqueous solution of ammonium cyanide ($NH_4CN$) without electrical sparks?",
    [
      "Juan Oró",
      "Stanley Miller",
      "Sydney Fox",
      "Thomas Cech"
    ],
    0,
    "Spanish biochemist Juan Oró demonstrated that heating concentrated aqueous ammonium cyanide produced substantial quantities of the essential purine base adenine."
  ],
  [
    "The synthesis of pyrimidine bases (cytosine and uracil) under plausible prebiotic conditions was achieved using which reactive starting materials?",
    [
      "Cyanoacetylene ($HC\\equiv C-C\\equiv N$) and cyanate (or urea)",
      "Pure methane gas alone",
      "Liquid nitrogen and helium",
      "Solid sulfur crystals"
    ],
    0,
    "Ferris and colleagues showed that cyanoacetylene reacting with cyanate or urea readily synthesizes pyrimidines, completing the prebiotic repertoire of nucleic acid bases."
  ],
  [
    "What fundamental thermodynamic challenge makes the abiotic polymerization of amino acids into proteins difficult in an open aqueous ocean?",
    [
      "Condensation peptide bond formation releases water, which is thermodynamically unfavored in a dilute aqueous solution (hydrolysis is favored)",
      "Amino acids explode when they touch water",
      "Water has zero surface tension",
      "Proteins can only form in vacuum"
    ],
    0,
    "In bulk water, chemical equilibrium heavily favors hydrolysis over condensation; prebiotic polymerization required concentrating mechanisms like evaporating tidal pools or mineral surfaces."
  ],
  [
    "Thermal polyamino acids (proteinoids) synthesized by Sydney Fox exhibited weak catalytic activity resembling:",
    [
      "Hydrolases, decarboxylases, and peroxidases",
      "Polymerase chain reaction enzymes",
      "Nuclear restriction endonucleases",
      "Complex ribosomal translation factors"
    ],
    0,
    "Fox showed that proteinoids displayed rudimentary non-specific catalytic activities, including esterase, decarboxylase, and peroxidase-like activities."
  ],
  [
    "Which mineral, containing hydrated aluminum silicate and sodium/calcium, selectively catalyzes the polymerization of activated ribonucleotides into RNA chains up to 50 nucleotides long?",
    [
      "Montmorillonite clay",
      "Pure diamond",
      "Granite quartz",
      "Crystalline sulfur"
    ],
    0,
    "Jim Ferris demonstrated that montmorillonite clay mineral sheets adsorb mononucleotides, aligning them to catalyze the non-enzymatic formation of phosphodiester bonds."
  ],
  [
    "The discovery that deeply branching hyperthermophilic Archaea and Bacteria inhabit hydrothermal vents suggests that the Last Universal Common Ancestor (LUCA) was probably a/an:",
    [
      "Thermophilic, anaerobic chemoautotroph or chemoheterotroph",
      "Aerobic desert cactus",
      "Photosynthetic flowering plant",
      "Terrestrial mammal"
    ],
    0,
    "Phylogenetic trees rooted in ribosomal RNA place hyperthermophilic anaerobic chemotrophs near the base, suggesting LUCA thrived in geothermal, anoxic aquatic environments."
  ],
  [
    "The primary reason why living cells evolved a lipid bilayer boundary rather than a protein boundary is that:",
    [
      "Lipid bilayers form spontaneous, self-healing, flexible barriers impermeable to polar molecules and ions, permitting electrochemical gradients",
      "Proteins cannot touch water",
      "Lipids are harder than diamonds",
      "Proteins cannot fold in three dimensions"
    ],
    0,
    "Amphipathic phospholipid bilayers spontaneously form stable closed vesicular compartments that prevent passive leakage of charged metabolites and support proton motive forces."
  ],
  [
    "According to NCERT Class 12 Biology, what is the estimated age of the universe?",
    [
      "20 billion years",
      "4.5 billion years",
      "4 billion years",
      "100 million years"
    ],
    0,
    "NCERT explicitly states that the universe is very old — almost 20 billion years old."
  ],
  [
    "According to NCERT, life appeared on Earth approximately how many years ago?",
    [
      "4 billion years ago (500 million years after Earth was formed)",
      "4.5 billion years ago",
      "2 billion years ago",
      "1 billion years ago"
    ],
    0,
    "NCERT states: 'Earth was formed about 4.5 billion years ago... Life appeared 500 million years after the formation of earth, i.e., almost four billion years ago.'"
  ],
  [
    "Which of the following amino acids was NOT detected in Miller's condensate?",
    [
      "Tryptophan",
      "Glycine",
      "Alanine",
      "Aspartic acid"
    ],
    0,
    "Complex aromatic amino acids like tryptophan and phenylalanine require intricate biosynthetic pathways and were not detected in Miller's initial simple aliphatic condensate."
  ],
  [
    "The concept that life originated from an 'inanimate' state of matter through gradual chemical steps is supported by:",
    [
      "The identical fundamental biochemical processes (glycolysis, genetic code, ATP energetics) shared across all kingdoms of life",
      "The different genetic codes used by plants and animals",
      "The fact that animals can live without food",
      "The spontaneous appearance of mice in grain bins"
    ],
    0,
    "The unity of core biochemical pathways, universal ATP currency, and identical L-amino acid/D-sugar chiralities across all living organisms proves a single ancestral chemical origin."
  ],
  [
    "In the history of evolutionary biology, who stated: 'If (and oh! what a big if!) we could conceive in some warm little pond, with all sorts of ammonia and phosphoric salts, light, heat, electricity, etc., present, that a proteine compound was chemically formed ready to undergo still more complex changes'?",
    [
      "Charles Darwin in a letter to J.D. Hooker (1871)",
      "Louis Pasteur",
      "Gregor Mendel",
      "Jean-Baptiste Lamarck"
    ],
    0,
    "Charles Darwin prophetically outlined the concept of prebiotic chemical evolution in an 1871 letter to his botanist friend Joseph Dalton Hooker."
  ],
  [
    "The prebiotic synthesis of ribose sugar poses a chemical conundrum known as the 'asphalt problem' because:",
    [
      "The unguided formose reaction of formaldehyde yields hundreds of diverse branched sugars and tarry brown asphalt rather than pure ribose",
      "Ribose cannot dissolve in water",
      "Formaldehyde does not exist in nature",
      "Ribose immediately transforms into lead"
    ],
    0,
    "Without mineral catalysts (like borate minerals that stabilize ribose), the formose reaction rapidly polymerizes into an intractable mixture of complex sugars and tarry asphalt."
  ],
  [
    "Borate minerals (such as colemanite and borax) have been shown by prebiotic chemists to solve the ribose problem by:",
    [
      "Selectively binding and stabilizing the cis-diol groups of D-ribose, preventing its degradation and favoring its accumulation",
      "Destroying all formaldehyde",
      "Converting glucose into carbon dioxide",
      "Freezing the reaction at zero degrees"
    ],
    0,
    "Steven Benner demonstrated that borate minerals complex with the 2,3-cis-diol of ribose, selectively protecting it from caramelization and allowing it to accumulate prebiotically."
  ],
  [
    "Which property of RNA makes it intrinsically more prone to spontaneous alkaline hydrolysis than DNA?",
    [
      "The presence of the $2'$-hydroxyl group ($-OH$) on the ribose ring, which can attack the adjacent phosphodiester bond",
      "The presence of adenine",
      "The single-stranded nature of RNA",
      "The absence of hydrogen bonds"
    ],
    0,
    "The $2'$-OH of ribose acts as an internal nucleophile under alkaline conditions, cleaving the phosphodiester backbone; DNA lacks this $2'$-OH, making DNA chemically stable."
  ],
  [
    "Which of the following represents the correct chronological order of evolutionary emergence on early Earth?",
    [
      "Inorganic molecules $\\rightarrow$ Organic monomers $\\rightarrow$ RNA world $\\rightarrow$ Protobionts $\\rightarrow$ First cellular prokaryotes",
      "First cellular prokaryotes $\\rightarrow$ Protobionts $\\rightarrow$ Organic monomers $\\rightarrow$ RNA world",
      "Protobionts $\\rightarrow$ First cellular prokaryotes $\\rightarrow$ Inorganic molecules $\\rightarrow$ Amino acids",
      "DNA $\\rightarrow$ First cellular prokaryotes $\\rightarrow$ Water $\\rightarrow$ Methane"
    ],
    0,
    "Prebiotic evolution progressed from inorganic precursors to organic monomers, to self-replicating catalytic RNA, to membrane-bound protobionts, and finally to modern cellular life."
  ],
  [
    "The term 'Last Universal Common Ancestor' (LUCA) refers to:",
    [
      "The most recent common ancestral population from which all extant organisms on Earth descend",
      "The first human being who lived in Africa",
      "The first dinosaur that flew in the air",
      "The single bacterium in Miller's flask"
    ],
    0,
    "LUCA represents the phylogenetic root of the tree of life—the ancestral cellular organism possessing the universal genetic code, ribosomes, and ATP synthase from which Bacteria, Archaea, and Eukarya diverged."
  ],
  [
    "Why does the study of the origin of life fall legitimately within the domain of Zoology and Evolutionary Biology?",
    [
      "Because understanding the biochemical mechanisms that generated the first cells explains the foundational ancestry and shared cellular machinery of all animal life",
      "Because animals created the universe",
      "Because the Big Bang was an animal",
      "Because Miller's flask was made of bone"
    ],
    0,
    "Zoology and evolutionary biology study the descent and diversification of animal life, which fundamentally traces back to the initial biochemical origin of cellular organization and molecular replication."
  ],
  [
    "The ultimate triumph of Pasteur's experiments on biogenesis can be summarized by which Latin aphorism?",
    [
      "Omne vivum ex vivo (All life comes from life)",
      "Carpe diem",
      "Caveat emptor",
      "Veni, vidi, vici"
    ],
    0,
    "'Omne vivum ex vivo' (all life arises from pre-existing life) represents the enduring biological principle established by Pasteur that eradicated the ancient myth of spontaneous generation."
  ]
];
extra59Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));


const extra5Mcqs = [
  [
    "In Miller's spark discharge apparatus, the electrodes used to produce electrical arcs were made of which metal due to its high melting point and electrical conductivity?",
    [
      "Tungsten",
      "Copper",
      "Aluminum",
      "Lead"
    ],
    0,
    "Tungsten was chosen for the electrodes because its extremely high melting point (3,422°C) withstands the continuous intense heat of high-voltage electrical spark discharges."
  ],
  [
    "Following the singular colossal explosion of the Big Bang, what thermal change occurred as the nascent universe rapidly expanded?",
    [
      "The temperature dropped precipitously, allowing subatomic particles to condense into hydrogen and helium atoms",
      "The temperature increased to infinity",
      "The temperature stayed constant at absolute zero",
      "The universe turned into a solid ice block"
    ],
    0,
    "Rapid cosmological expansion caused a sharp drop in universe temperature, allowing quarks and gluons to form protons and neutrons, which fused into primordial hydrogen and helium."
  ],
  [
    "The oldest microfossils resembling modern filamentous cyanobacteria have been described from the ancient Apex Chert formations of:",
    [
      "Western Australia (~3.5 billion years old)",
      "Antarctic ice cores (~1,000 years old)",
      "Himalayan peaks (~50 million years old)",
      "Sahara desert sand dunes"
    ],
    0,
    "J. William Schopf identified microscopic carbonaceous filamentous structures resembling photosynthetic cyanobacteria in the 3.465-billion-year-old Apex chert of Western Australia."
  ],
  [
    "The earliest photosynthetic bacteria on primitive Earth did NOT release oxygen because they practiced:",
    [
      "Anoxygenic photosynthesis utilizing hydrogen sulfide ($H_2S$) rather than water ($H_2O$) as an electron donor",
      "Oxygenic photosynthesis",
      "Aerobic respiration with mitochondria",
      "Nitrogen fixation in root nodules"
    ],
    0,
    "Primitive photosynthetic purple and green sulfur bacteria used $H_2S$ as an electron source, generating elemental sulfur rather than oxygen: $CO_2 + 2H_2S \\rightarrow (CH_2O) + H_2O + 2S$."
  ],
  [
    "Alexander I. Oparin's seminal 1936 treatise on chemical evolution was translated into English in 1938 under the title:",
    [
      "'The Origin of Life'",
      "'On the Origin of Species'",
      "'Philosophie Zoologique'",
      "'The Descent of Man'"
    ],
    0,
    "Oparin's foundational work 'The Origin of Life' (translated by Sergius Morgulis in 1938) introduced the global scientific community to the concept of pre-biological chemical evolution."
  ]
];
extra5Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

console.log(`AR questions: ${arData.length}, MCQ questions: ${mcqData.length}`);

// Format AR questions
const arQuestions = arData.map((d, i) => ({
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

// Format MCQ questions
const mcqQuestions = mcqData.map(m => ({
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

console.log(`Part 1 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 1 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_evolution_part1.js');
  const fileContent = `// Auto-generated data for Zoology Evolution Part 1: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
