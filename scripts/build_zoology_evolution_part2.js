const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Evidences of evolution (homology, analogy, vestigial organs, embryology)";
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
    a: "Fossils preserved in sedimentary rock layers provide direct paleontological evidence for organic evolution.",
    r: "Different sedimentary rock strata contain distinct assemblages of fossils, revealing that life forms varied across geological periods and certain organisms were restricted to specific geological epochs.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Sedimentary rock layers are deposited sequentially over geological time; older strata contain simpler organisms while younger strata exhibit progressively more complex life forms."
  },
  {
    a: "The forelimbs of humans, cheetahs, whales, and bats are considered homologous organs.",
    r: "These forelimbs share the same fundamental anatomical skeletal plan consisting of humerus, radius, ulna, carpals, metacarpals, and phalanges, despite performing distinct functions.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Homologous structures share a common embryonic origin and basic anatomy (divergent evolution) adapted for different functions (grasping, running, swimming, flying)."
  },
  {
    a: "Homology is an indicator of divergent evolution.",
    r: "Homologous structures evolve when common ancestral anatomical structures radiate and adapt along different directions to meet diverse ecological needs.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that divergent evolution occurs when descendants of a common ancestor diverge into different habitats, modifying ancestral structures."
  },
  {
    a: "Thorns of Bougainvillea and tendrils of Cucurbita are examples of homologous structures in plants.",
    r: "Both thorns of Bougainvillea and tendrils of Cucurbita arise as modifications of axillary buds, sharing a common developmental origin.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Both structures develop from axillary buds, but one is modified for protection against herbivores while the other is modified for climbing support."
  },
  {
    a: "The wings of a butterfly and the wings of a bird are analogous organs.",
    r: "Butterfly wings and bird wings share an identical embryonic origin and skeletal architecture consisting of homologous pentadactyl limb bones.",
    ans: 2,
    exp: "Assertion is true, but Reason is false. Butterfly wings are non-homologous cuticular folds supported by chitinous veins, whereas bird wings are modified bony forelimbs covered with feathers."
  },
  {
    a: "Analogy indicates convergent evolution.",
    r: "Unrelated organisms living in similar habitats or facing similar selective pressures evolve functionally similar anatomical adaptations independently.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains convergent evolution: distinct lineages converge upon similar structural solutions to solve similar environmental challenges."
  },
  {
    a: "The eye of an octopus and the eye of a mammal are considered analogous organs.",
    r: "Both organs serve the function of vision, but the octopus retina develops as an infolding of surface skin ectoderm, whereas the vertebrate retina originates from an outpocketing of the embryonic diencephalon.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Despite striking functional similarity (convergent evolution), the photoreceptors and developmental lineages are fundamentally distinct (inverted vertebrate retina with a blind spot vs non-inverted cephalopod retina without a blind spot)."
  },
  {
    a: "Flippers of penguins (birds) and dolphins (mammals) are analogous structures.",
    r: "Penguins and dolphins independently evolved hydrodynamic flippers for aquatic locomotion, having diverged from different terrestrial amniote ancestors.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains convergent evolution in aquatic vertebrates: bird wings and mammal forelimbs were independently modified into swimming flippers."
  },
  {
    a: "Sweet potato and potato are analogous structures.",
    r: "Sweet potato is a modified adventitious root, while potato is a modified underground stem (tuber), both specialized for vegetative food storage.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that sweet potato (root) and potato (stem) represent analogous organs sharing the function of food storage despite different morphological origins."
  },
  {
    a: "The vermiform appendix in humans is classified as a vestigial organ.",
    r: "The human vermiform appendix is a non-functional remnant of the large, cellulose-digesting caecum present in herbivorous ancestors.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that vestigial structures are degenerate, reduced remnants that were functional in ancestral species."
  },
  {
    a: "Nictitating membrane (plica semilunaris) and wisdom teeth in humans are vestigial organs.",
    r: "These structures are fully developed and functional in modern humans for sub-aquatic vision and grinding tough fibrous foliage, respectively.",
    ans: 2,
    exp: "Assertion is true, but Reason is false. Nictitating membrane is reduced to a non-functional vestigial plica semilunaris at the inner eye canthus, and third molars (wisdom teeth) frequently remain impacted due to shortened human jaws."
  },
  {
    a: "Atavism (reversion) is the sudden appearance of ancestral physical characteristics in an individual that were absent in recent ancestors.",
    r: "Atavistic traits result from the reactivation of dormant or repressed ancestral genes that have not been completely eliminated from the genome.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Traits such as a human infant born with a movable tail, cervical fistula, or dense ape-like body hair represent the unmasking of dormant ancestral developmental genes."
  },
  {
    a: "Ernst Haeckel proposed the Biogenetic Law, stating that 'Ontogeny recapitulates phylogeny'.",
    r: "Haeckel asserted that during embryonic development, an individual passes through the adult morphological stages of its evolutionary ancestors.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly describes Haeckel's biogenetic law ('ontogeny is a quick and feeble repetition of phylogeny')."
  },
  {
    a: "Karl Ernst von Baer conclusively disproved Ernst Haeckel's Biogenetic Law.",
    r: "Von Baer demonstrated that developing embryos never pass through the adult stages of other animals; instead, embryos of different vertebrates share general embryonic features that progressively diverge.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Von Baer's laws of embryology proved that embryos share early ancestral embryonic stages (e.g. pharyngeal pouches), but never adult forms of lower animals."
  },
  {
    a: "All vertebrate embryos, including human embryos, develop a row of pharyngeal gill slits behind the head.",
    r: "These pharyngeal clefts are functional respiratory organs in adult fish, but transform into diverse head and neck structures (Eustachian tube, tonsils, thymus) in adult terrestrial tetrapods.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that pharyngeal pouches are embryonic homologies reflecting common aquatic vertebrate ancestry."
  },
  {
    a: "Archaeopteryx lithographica is regarded as a classic missing link (connecting link) between reptiles and birds.",
    r: "Archaeopteryx possessed reptilian features like teeth in jaws, a long bony tail, and clawed digits, alongside avian features like feathered wings, a wishbone (furcula), and a beak.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation of why Archaeopteryx is a transitional fossil illustrating the dinosaurian ancestry of birds."
  },
  {
    a: "Duck-billed platypus (Ornithorhynchus) and Spiny anteater (Echidna) are connecting links between reptiles and mammals.",
    r: "Monotremes lay shelled eggs and possess a cloaca like reptiles, yet nurse their hatched young with milk secreted by mammary glands like mammals.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that monotremes preserve primitive reptilian oviparous traits alongside derived mammalian diagnostic traits."
  },
  {
    a: "Peripatus is considered a living connecting link between Annelida and Arthropoda.",
    r: "Peripatus displays annelidan traits (unsegmented muscular body wall, nephridia in each segment) and arthropodan traits (tracheal respiration, open hemocoel, clawed appendages).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why Peripatus (phylum Onychophora) bridges the evolutionary gap between segmented annelid worms and jointed-legged arthropods."
  },
  {
    a: "Similarities in proteins and genes performing the same function across diverse taxa provide biochemical evidence for common ancestry.",
    r: "The amino acid sequence of cytochrome c and the nucleotide sequence of ribosomal RNA are identical between humans and yeasts.",
    ans: 2,
    exp: "Assertion is true, but Reason is false. Cytochrome c sequences are not identical (humans differ from yeast by ~44 amino acids, but from chimpanzees by 0 differences); their conserved homology reflects evolutionary divergence."
  },
  {
    a: "The universal occurrence of the triplet genetic code across bacteria, plants, fungi, and animals proves common ancestry.",
    r: "With very minor exceptions, the same three-nucleotide mRNA codon (such as UUU for phenylalanine and AUG for methionine) specifies the identical amino acid across all domains of life.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. The near-universal genetic code is decisive biochemical proof that all extant life shares a single common evolutionary origin."
  },
  {
    a: "The pelvic girdle and rudimentary femur bones embedded in the body wall of modern pythons are vestigial structures.",
    r: "Snakes evolved from four-legged tetrapod reptilian ancestors (lizards), and during limb loss, residual skeletal pelvic elements were retained as vestigial structures.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that vestigial pelvic spurs in boid snakes represent anatomical holdovers from ancestral quadrupedal lizards."
  },
  {
    a: "Baleen whales possess rudimentary pelvic bones buried deep within their abdominal muscles.",
    r: "Cetaceans evolved from terrestrial artiodactyl mammalian ancestors that possessed functional hindlimbs used for walking on land.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that fossil whales (like Pakicetus and Basilosaurus) document the transition from four-legged land mammals to streamlined sea creatures."
  },
  {
    a: "Vertebrate hearts provide classic comparative anatomical evidence of divergent evolution from a common ancestral plan.",
    r: "From 2-chambered fish hearts to 3-chambered amphibian/reptile hearts and 4-chambered bird/mammalian hearts, there is progressive separation of systemic and pulmonary circulations.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains homologous evolutionary remodeling of the vertebrate circulatory pump from single to complete double circulation."
  },
  {
    a: "Blood serology tests (precipitin tests) confirm phylogenetic affinities among animal groups.",
    r: "The degree of antigen-antibody cross-reactivity between human serum proteins and anti-human antibodies reflects the closeness of evolutionary relationship (e.g. highest with chimpanzees).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains George Nuttall's serological precipitin test, where immunochemical precipitation quantitatively mirrors phylogenetic proximity."
  },
  {
    a: "Halteres in two-winged flies (order Diptera) are vestigial organs.",
    r: "Halteres are completely non-functional dead structures that have zero sensory or aerodynamic role during flight.",
    ans: 2,
    exp: "Assertion is true, but Reason is false. Halteres are modified, reduced hindwings that act as active gyroscopic balancing sense organs during flight, detecting angular rotation."
  },
  {
    a: "The fossil horse lineage (Hyracotherium to Equus) provides continuous evolutionary evidence of gradual adaptation to grassland habitats.",
    r: "The lineage documents evolutionary trends including progressive increase in body size, molarization and crown-height increase of teeth (hypsodonty), and reduction of digits to a single functional third hoof.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly details the morphological trends driven by the spread of abrasive silica-rich grasslands during the Cenozoic era."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-30: Homology vs Analogy
addMcq(
  "Homologous organs are anatomically defined as organs that:",
  ["Share a common embryonic origin and basic structural plan, but perform different functions in different species", "Perform identical functions but have completely different embryonic origins", "Are degenerate remnants with no known biological function", "Reappear spontaneously after skipping multiple generations"],
  0,
  "Homology denotes organs that share the same fundamental anatomical structure and developmental origin (derived from a common ancestor), adapted for divergent functions."
);

addMcq(
  "Which of the following sets of structures represents homologous organs in vertebrates?",
  ["Forelimbs of human, cheetah, whale, and bat", "Wings of butterfly, bird, and bat", "Eyes of octopus and eyes of human", "Flippers of penguin and flippers of dolphin"],
  0,
  "The forelimbs of humans (grasping), cheetahs (running), whales (swimming), and bats (flying) share the identical pentadactyl skeletal anatomy (humerus, radius, ulna, carpals, digits)."
);

addMcq(
  "Analogous organs are defined as structures that:",
  ["Perform similar biological functions but have different anatomical structures and distinct embryonic origins", "Share the same structural plan derived from a common ancestor", "Are present only during early embryonic development", "Evolve exclusively through divergent adaptive radiation"],
  0,
  "Analogy refers to structures in unrelated taxa that perform similar functions due to convergent evolution, having evolved independently from different ancestral tissues."
);

addMcq(
  "Which of the following pairs is a classic example of analogous structures resulting from convergent evolution?",
  ["Eye of an octopus and eye of a mammal", "Forelimb of a human and forelimb of a horse", "Thorns of Bougainvillea and tendrils of Cucurbita", "Heart of a fish and heart of a crocodile"],
  0,
  "The camera-type eyes of octopuses (mollusc) and mammals (vertebrate) evolved independently to achieve high-resolution vision, representing analogous convergent evolution."
);

addMcq(
  "In plant morphology, the thorns of Bougainvillea and the tendrils of Cucurbita are homologous because both represent modified:",
  ["Axillary buds", "Foliar leaflets", "Adventitious roots", "Terminal apical buds"],
  0,
  "Both the sharp defensive thorns of Bougainvillea and the coiled climbing tendrils of Cucurbita originate from axillary buds, exemplifying homology and divergent evolution."
);

addMcq(
  "Which of the following pairs represents analogous storage organs in plants?",
  ["Sweet potato (root modification) and potato (stem modification)", "Thorns of Bougainvillea and tendrils of Cucurbita", "Tendrils of pea and tendrils of grapevine", "Phyllode of Acacia and cladode of Ruscus"],
  0,
  "Sweet potato (Ipomoea batatas) is a modified adventitious storage root, whereas potato (Solanum tuberosum) is an underground stem tuber; both perform food storage."
);

addMcq(
  "Divergent evolution is best exemplified by which of the following biological phenomena?",
  ["Homologous structures evolving from a common ancestor to suit different habitats", "Unrelated organisms evolving identical streamlined bodies for aquatic life", "The loss of eyesight in cave-dwelling animals", "The complete extinction of dinosaurs"],
  0,
  "Divergent evolution occurs when descendants of a common ancestor diverge into diverse ecological niches, modifying homologous anatomical structures for distinct functions."
);

addMcq(
  "Convergent evolution leads to the development of which type of organs?",
  ["Analogous organs", "Homologous organs", "Vestigial organs", "Atavistic organs"],
  0,
  "Convergent evolution occurs when unrelated species adapt to similar ecological niches or lifestyles, developing functionally analogous structures."
);

addMcq(
  "The flippers of penguins (birds) and the flippers of dolphins (mammals) represent:",
  ["Analogous structures resulting from convergent evolution", "Homologous structures resulting from divergent evolution", "Vestigial structures with zero hydrodynamic function", "Atavistic reversions from ancestral reptiles"],
  0,
  "Penguins and dolphins independently modified their forelimbs into hydrodynamic paddle-like flippers for underwater propulsion, demonstrating convergent analogy."
);

addMcq(
  "The wings of insects and the wings of birds are analogous because:",
  ["Insects wings are non-skeletal folds of the integument, whereas bird wings are modified bony forelimbs covered with feathers", "Both are made of humerus, radius, and ulna bones", "Both arise from the endoderm during gastrulation", "Both contain identical muscle types"],
  0,
  "Insect wings are cuticular outgrowths supported by veins, whereas bird wings are modified pentadactyl forelimbs; they perform flight via different developmental structures."
);

addMcq(
  "Which anatomical difference distinguishes the eye of an octopus from the eye of a human?",
  ["The vertebrate retina is 'inverted' with nerve fibers in front of photoreceptors creating a blind spot, whereas the cephalopod retina is 'verted' without a blind spot", "The octopus has no lens", "The human eye lacks a cornea", "The octopus eye has no vitreous humor"],
  0,
  "In the octopus eye, photoreceptor cells point toward the light source and nerve fibers exit from behind (no blind spot); in the human eye, photoreceptors point backwards, creating a blind spot."
);

addMcq(
  "Fins of fishes (such as sharks) and flippers of aquatic mammals (such as whales) are an example of:",
  ["Analogous structures illustrating convergent evolution for swimming", "Homologous structures illustrating divergent evolution", "Vestigial organs", "Atavism"],
  0,
  "Sharks (cartilaginous fish) and whales (placental mammals) independently evolved streamlined fusiform bodies and swimming flippers to minimize drag in aquatic environments."
);

addMcq(
  "The hearts of fishes, amphibians, reptiles, birds, and mammals are homologous structures because:",
  ["They all share a basic ventral myogenic muscular pump design derived from embryonic mesoderm with shared evolutionary modifications", "They all contain four completely separated chambers", "They all pump mixed oxygenated and deoxygenated blood", "They are all located in the abdominal cavity"],
  0,
  "All vertebrate hearts develop from paired ventral mesodermal tubes that loop and septate into 2, 3, or 4 chambers, demonstrating divergent evolution from a common ancestral pump."
);

addMcq(
  "The brains of vertebrates (consisting of forebrain, midbrain, and hindbrain) represent an example of:",
  ["Homology", "Analogy", "Atavism", "Vestigial organs"],
  0,
  "According to NCERT Class 12 Biology, the brains of vertebrates share common structural organization and developmental origin, exemplifying homology."
);

addMcq(
  "Which of the following is NOT an example of convergent evolution?",
  ["Forelimbs of cheetah, human, bat, and whale", "Flippers of penguin and dolphin", "Eyes of octopus and mammal", "Sweet potato and potato"],
  0,
  "The forelimbs of cheetahs, humans, bats, and whales represent homologous organs arising through divergent evolution, not convergent evolution."
);

// 16-45: Vestigial organs & Atavism
addMcq(
  "A vestigial organ is defined as an anatomical structure that:",
  ["Is reduced, rudimentary, and functionless in an organism, but was well-developed and functional in ancestral species", "Performs essential life-saving metabolic reactions in adults", "Appears only in diseased individuals", "Is found exclusively in plants"],
  0,
  "Vestigial organs are non-functional, degenerated remnants of structures that had functional significance in ancestral evolutionary lineages."
);

addMcq(
  "Which of the following human anatomical structures is classified as vestigial?",
  ["Vermiform appendix, plica semilunaris, and coccyx", "Biceps brachii muscle and femur bone", "Thyroid gland and adrenal cortex", "Left ventricle and aorta"],
  0,
  "The vermiform appendix (reduced caecal apex), plica semilunaris (remnant of nictitating membrane), and coccyx (fused tail vertebrae) are classic human vestigial structures."
);

addMcq(
  "The human coccyx (tailbone) consists of how many fused rudimentary caudal vertebrae?",
  ["4 (varying from 3 to 5)", "12", "7", "1"],
  0,
  "The human coccyx is formed by the fusion of 4 (rarely 3 or 5) vestigial caudal vertebrae, remaining as an anchor for pelvic muscles but lacking an external tail."
);

addMcq(
  "The plica semilunaris located at the medial canthus of the human eye is a vestigial remnant of the:",
  ["Nictitating membrane (third eyelid)", "Cornea", "Ciliary body", "Choroid coat"],
  0,
  "The plica semilunaris is a small fold of conjunctiva at the inner corner of the human eye representing the vestigial nictitating membrane found in birds, reptiles, and amphibians."
);

addMcq(
  "Wisdom teeth (third molars) in modern humans are considered vestigial because:",
  ["Human jaws have shortened during evolution, making them non-essential for chewing soft cooked diets and frequently causing impaction", "They contain pure cartilage with no enamel", "They fall out at age five", "They are made of bone instead of dentine"],
  0,
  "Cranial evolution shortened human jaws, reducing space for third molars; soft modern diets make them non-functional, and they often fail to erupt or become impacted."
);

addMcq(
  "Which vestigial structure in humans is responsible for 'goosebumps' (cutis anserina) when cold or frightened?",
  ["Arrector pili muscles attached to hair follicles", "Plica semilunaris", "Vermiform appendix", "Tympanic membrane"],
  0,
  "Arrector pili muscles contract to erect dense fur in ancestral mammals to trap insulating air or appear larger to predators; in sparse human body hair, this produces vestigial goosebumps."
);

addMcq(
  "Pelvic spurs found on either side of the cloacal vent in primitive boid snakes (such as boas and pythons) represent:",
  ["Vestigial remnants of ancestral tetrapod hindlimbs and pelvic bones", "Specialized venom-injecting fangs", "Modified sensory antennae", "Regenerated rib tips"],
  0,
  "Pythons possess internal pelvic bones and external claw-like spurs representing vestigial remnants of hindlimbs inherited from lizard-like ancestors."
);

addMcq(
  "Whales possess deep, embedded pelvic girdle bones that have no connection to the vertebral column. These bones are:",
  ["Vestigial remnants of hindlimb girdles inherited from terrestrial mammalian ancestors", "Anchors for flying wings", "Teeth used for filter feeding", "Bones of ingested prey"],
  0,
  "The rudimentary pelvic bones of cetaceans provide decisive anatomical evidence that whales descended from four-legged land-dwelling artiodactyl mammals."
);

addMcq(
  "Atavism (also known as reversion) is exemplified by which of the following medical phenomena?",
  ["A human baby born with a well-developed, flexible fleshy tail containing caudal vertebrae", "A child born with five fingers on each hand", "An adult developing wisdom teeth", "A patient suffering from influenza"],
  0,
  "A human baby born with an external caudal tail is a dramatic example of atavism, resulting from the re-expression of ancestral genes regulating embryonic tail regression."
);

addMcq(
  "Which of the following conditions represents an atavistic trait in humans?",
  ["Development of dense, thick body hair resembling fur (hypertrichosis universalis)", "Presence of twenty deciduous milk teeth in infants", "Normal bipedal walking", "Presence of a four-chambered heart"],
  0,
  "Hypertrichosis (werewolf syndrome) is an atavistic condition where dormant ancestral genes for thick ape-like body hair are unmasked."
);

addMcq(
  "The appearance of extra functional nipples or breasts along the embryonic milk line in humans is termed:",
  ["Polythelia (or Polymastia), an atavistic trait", "Gynecomastia", "Albinism", "Dwarfism"],
  0,
  "Supernumerary nipples (polythelia) along the mammalian milk line represent atavistic reversions reflecting multi-nippled quadrupedal mammalian ancestry."
);

addMcq(
  "Which of the following is NOT a vestigial organ in humans?",
  ["Canine teeth that are functional for tearing food", "Coccyx", "Vermiform appendix", "Auricular muscles of the external ear pinna"],
  0,
  "Human canine teeth are active, functional components of the modern permanent dentition; coccyx, appendix, and ear pinna muscles are vestigial."
);

// 31-65: Embryological evidence
addMcq(
  "The German biologist Ernst Haeckel proposed which famous biological hypothesis based on comparative embryology?",
  ["The Biogenetic Law ('Ontogeny recapitulates phylogeny')", "The Germplasm Theory", "The Mutation Theory", "The Theory of Catastrophism"],
  0,
  "Ernst Haeckel formulated the Biogenetic Law (1866), summarizing it as 'Ontogeny recapitulates phylogeny', arguing that embryonic stages replay ancestral adult forms."
);

addMcq(
  "What does the phrase 'Ontogeny recapitulates phylogeny' mean?",
  ["The developmental history of an individual embryo repeats the evolutionary history of its ancestral species", "Offspring inherit all physical injuries sustained by parents", "Mutations are always lethal", "Fossils are formed by volcanic ash"],
  0,
  "Ontogeny (embryonic development of an organism) was believed by Haeckel to replay the successive adult stages of its phylogenetic evolutionary lineage."
);

addMcq(
  "Which scientist meticulously studied comparative embryology and definitively rejected Ernst Haeckel's biogenetic proposal?",
  ["Karl Ernst von Baer", "Charles Darwin", "August Weismann", "Thomas Hunt Morgan"],
  0,
  "Karl Ernst von Baer (father of modern embryology) disproved Haeckel, showing that vertebrate embryos never pass through the adult stages of other animals."
);

addMcq(
  "According to Karl Ernst von Baer's laws of embryology:",
  ["General developmental features (e.g. notochord, dorsal nerve cord) appear earlier in embryonic development than specialized features (e.g. fur, feathers, horns)", "Human embryos pass through adult fish, frog, and lizard stages", "All embryos develop fully formed wings", "Embryos are miniature adults that simply expand in volume"],
  0,
  "Von Baer demonstrated that embryos diverge: universal vertebrate characteristics appear first, followed by class, family, and unique species-specific specializations."
);

addMcq(
  "During the early embryonic development of terrestrial mammals (including humans), what structures develop in the cervical region behind the head that reflect aquatic vertebrate ancestry?",
  ["Pharyngeal pouches / gill slits", "Chitinous wings", "Functional swimming scales", "Pectoral fin rays"],
  0,
  "All vertebrate embryos form paired lateral pharyngeal pouches; in aquatic fish they develop into functional gills, while in terrestrial amniotes they are remodeled into glands and inner ear cavities."
);

addMcq(
  "In human embryology, the first pharyngeal pouch develops into which adult anatomical structure?",
  ["The Eustachian tube and middle ear cavity", "The thyroid gland exclusively", "The pulmonary alveoli", "The nasal septum"],
  0,
  "The first embryonic pharyngeal pouch evaginates to form the tubotympanic recess, which gives rise to the middle ear cavity and Eustachian tube."
);

addMcq(
  "In early human embryonic stages (around the fourth to fifth week), what prominent caudal structure is present that normally regresses via programmed cell death (apoptosis) before birth?",
  ["A post-anal embryonic tail", "A prehensile elephantine trunk", "A hard carapace shell", "A set of four webbed flippers"],
  0,
  "Human embryos develop a distinct post-anal tail complete with caudal vertebrae; around week 8, it undergoes apoptotic regression, leaving the internal coccyx."
);

addMcq(
  "Comparative embryological analysis of fish, salamander, tortoise, chick, and human embryos reveals that:",
  ["Early embryonic stages of all vertebrates look remarkably similar and possess common structural features", "Human embryos look like miniature adult humans at day 1", "Chick embryos have functional flying wings at stage 1", "Fish embryos possess mammalian hair"],
  0,
  "In their early phylotypic stages, all vertebrate embryos exhibit striking morphological resemblances (notochord, pharyngeal arches, post-anal tail, dorsal nerve cord)."
);

addMcq(
  "The aortic arches in vertebrate embryos undergo progressive evolutionary remodeling from:",
  ["Six symmetrical pairs in fish embryos to an asymmetrical single left arch in adult mammals", "A single straight tube in all adult forms", "Two left arches in birds", "Zero arches in embryos"],
  0,
  "Vertebrate embryos form six pairs of aortic arches; fish retain most for branchial gills, reptiles and amphibians retain two systemic arches, birds retain only the right arch, and mammals retain only the left aortic arch."
);

addMcq(
  "Which evolutionary concept explains why early vertebrate embryos resemble one another more closely than adult animals do?",
  ["They share a common genetic developmental program (conserved Hox gene clusters) inherited from a common vertebrate ancestor", "They all drink the same amniotic fluid", "They all perform photosynthesis during gastrulation", "They are all infected by the same embryonic virus"],
  0,
  "Conserved homeobox (Hox) genes orchestrate basic anterior-posterior patterning in all vertebrate embryos, preserving ancestral body plans during early development."
);

// 66-95: Paleontological evidence & Transitional fossils
addMcq(
  "Paleontology is the scientific study of:",
  ["Fossils of extinct organisms preserved in geological strata", "Live marine mammals in oceans", "Human cultural artifacts and pottery", "Viral genomic mutations"],
  0,
  "Paleontology (founded by Georges Cuvier) is the branch of science concerned with the study of fossil animals and plants preserved in Earth's crust."
);

addMcq(
  "Fossils are most frequently found in which type of geological rocks?",
  ["Sedimentary rocks (such as limestone, shale, and sandstone)", "Igneous rocks (like basalt and granite)", "Metamorphic marble", "Volcanic molten lava"],
  0,
  "Sedimentary rocks form from accumulated mineral and organic sediments at temperatures and pressures that preserve shells, bones, and imprints without thermal incineration."
);

addMcq(
  "Coprolites studied in paleontology are:",
  ["Fossilized animal feces / dung providing dietary and ecological evidence", "Fossilized footprints in mud", "Insects preserved in amber", "Petrified tree trunks"],
  0,
  "Coprolites are fossilized fecal deposits of ancient animals (e.g. dinosaurs, ancient sharks) that reveal dietary habits and gastrointestinal parasites."
);

addMcq(
  "Archaeopteryx lithographica fossils were discovered in the Late Jurassic limestone quarries of:",
  ["Solnhofen, Bavaria, Germany", "Hadar, Ethiopia", "Shivalik Hills, India", "Lyme Regis, England"],
  0,
  "Archaeopteryx fossils were discovered in 1861 in the fine-grained lithographic limestone deposits of Solnhofen, Germany, preserving exquisite feather impressions."
);

addMcq(
  "Which of the following is a REPTILIAN feature preserved in the fossil of Archaeopteryx?",
  ["Teeth in jaws, claws on digits, and a long tail with free caudal vertebrae", "A toothless horn-covered beak", "Pneumatic hollow bones with air sacs", "Fleshy external ear pinnae"],
  0,
  "Archaeopteryx retained socketed teeth (thecodont dentition), unfused clawed fingers on wings, and a long tail with 20 free vertebrae, which are diagnostic reptilian traits."
);

addMcq(
  "Which of the following is an AVIAN (bird-like) feature present in the fossil Archaeopteryx?",
  ["Presence of true aerodynamic flight feathers, wings, a wishbone (furcula), and an avian hallux", "A three-chambered heart", "Presence of gills", "An exoskeleton of chitin"],
  0,
  "Archaeopteryx had asymmetrical contour flight feathers, winged forelimbs, a fused clavicle (furcula), and a backward-pointing hallux (big toe), proving its avian kinship."
);

addMcq(
  "Seymouria is an important fossil transitional form bridging which two vertebrate classes?",
  ["Amphibians and Reptiles", "Fishes and Amphibians", "Reptiles and Birds", "Reptiles and Mammals"],
  0,
  "Seymouria (from the Permian epoch) displayed amphibian skull structures and lateral-line canals combined with reptilian skeletal limbs and an amniote-like skull articulation."
);

addMcq(
  "Tiktaalik roseae ('fishapod') discovered in 375-million-year-old Late Devonian sediments represents a critical transitional fossil between:",
  ["Lobe-finned sarcopterygian fishes and early tetrapod amphibians", "Reptiles and birds", "Amphibians and reptiles", "Insects and crustacea"],
  0,
  "Tiktaalik possessed fish scales and fin rays alongside tetrapod features like a flexible neck, wrist joints, and rib structures capable of bearing weight on land."
);

addMcq(
  "Ichthyostega and Acanthostega are among the earliest known fossil tetrapods that evolved from:",
  ["Rhipidistian crossopterygian fishes (lobe-finned fishes)", "Chondrichthyan sharks", "Ray-finned teleost fishes", "Agnathan lampreys"],
  0,
  "Devonian lobe-finned crossopterygians possessed fleshy lobed fins containing humerus, radius, and ulna homologues, from which early labyrinthodont amphibians (Ichthyostega) arose."
);

addMcq(
  "The coelacanth fish Latimeria chalumnae, caught off South Africa in 1938, was a sensational scientific discovery because:",
  ["It is a 'living fossil' lobe-finned crossopterygian fish previously thought to have gone extinct 65 million years ago", "It can walk on land and fly like a bird", "It has a human four-chambered heart", "It is made entirely of bone without blood"],
  0,
  "Latimeria is a surviving sarcopterygian coelacanth; its muscular, lobed fins are homologous to tetrapod limb girdles, providing living anatomical insight into land colonization."
);

addMcq(
  "Therapsids (mammal-like reptiles) such as Cynognathus represent transitional evolutionary forms leading directly to:",
  ["Mammals", "Birds", "Crocodiles", "Snakes"],
  0,
  "Therapsids exhibited mammalian evolutionary specializations including differentiated heterodont dentition, secondary palate, and progressive enlargement of the dentary bone."
);

addMcq(
  "The evolutionary lineage of the modern horse (Equus) began in the Eocene epoch with which small, dog-sized ancestral form?",
  ["Hyracotherium (Eohippus / 'Dawn horse')", "Miohippus", "Merychippus", "Pliohippus"],
  0,
  "Hyracotherium was a small forest-dwelling browser standing ~0.4 meters tall with 4 digits on front feet and 3 digits on hind feet, initiating the classic horse fossil sequence."
);

addMcq(
  "During the evolution of the horse from Hyracotherium to modern Equus, what happened to the digits on the limbs?",
  ["The lateral digits were progressively reduced to splint bones, while the central third digit enlarged into a single functional hoof", "All digits multiplied to ten on each foot", "All toes fused into claws", "Limbs were lost completely like snakes"],
  0,
  "Adaptation for rapid cursorial locomotion on hard plains led to the reduction of digits II and IV to vestigial splints, while digit III thickened to bear the full weight on a single hoof."
);

addMcq(
  "Which evolutionary change in horse dentition accompanied the transition from browsing on soft forest shrubs to grazing on abrasive steppe grasses?",
  ["Teeth changed from low-crowned (brachydont) to high-crowned (hypsodont) with complex enamel ridges (lophodont)", "Teeth disappeared entirely, replaced by a bird-like beak", "Teeth became sharp pointed fangs", "Only two incisors remained"],
  0,
  "Grasses contain abrasive microscopic silica phytoliths that rapidly grind down teeth; grazing horses evolved tall, high-crowned hypsodont teeth with cementum-packed enamel ridges."
);

addMcq(
  "The geological timescale divides the Earth's history into major chronological hierarchical divisions in the following descending order:",
  ["Eon $\\rightarrow$ Era $\\rightarrow$ Period $\\rightarrow$ Epoch", "Epoch $\\rightarrow$ Period $\\rightarrow$ Era $\\rightarrow$ Eon", "Era $\\rightarrow$ Eon $\\rightarrow$ Epoch $\\rightarrow$ Period", "Period $\\rightarrow$ Epoch $\\rightarrow$ Era $\\rightarrow$ Eon"],
  0,
  "The geological time scale is hierarchically organized: Eons (e.g. Phanerozoic) are divided into Eras (e.g. Cenozoic), which are split into Periods, which are subdivided into Epochs."
);

addMcq(
  "The Mesozoic Era is universally celebrated in paleontology as the:",
  ["'Age of Reptiles' (featuring dinosaurs, pterosaurs, and ichthyosaurs)", "'Age of Mammals'", "'Age of Amphibians'", "'Age of Fishes'"],
  0,
  "The Mesozoic Era (consisting of the Triassic, Jurassic, and Cretaceous periods) was dominated globally by diverse archosaurian reptiles, particularly dinosaurs."
);

addMcq(
  "The Devonian period of the Paleozoic Era is known in paleontology as the:",
  ["'Age of Fishes'", "'Age of Mammals'", "'Age of Birds'", "'Age of Insects'"],
  0,
  "The Devonian period saw an explosive radiation of jawed fishes, placoderms, cartilaginous sharks, and lobe-finned osteichthyans, earning the title 'Age of Fishes'."
);

addMcq(
  "The Carboniferous period is celebrated for the deposition of vast coal beds and is known as the:",
  ["'Age of Amphibians'", "'Age of Reptiles'", "'Age of Fishes'", "'Age of Man'"],
  0,
  "Warm, humid Carboniferous swamp forests favored the rapid radiation of massive labyrinthodont amphibians and giant lycopod trees that formed the world's coal basins."
);

addMcq(
  "The Cenozoic Era, extending from 66 million years ago to the present day, is designated as the:",
  ["'Age of Mammals and Birds (and Angiosperms)'", "'Age of Trilobites'", "'Age of Reptiles'", "'Age of Ferns'"],
  0,
  "Following the end-Cretaceous asteroid impact and dinosaur extinction, placental mammals, birds, and flowering plants underwent explosive radiation during the Cenozoic."
);

addMcq(
  "Mass extinction at the Cretaceous-Paleogene (K-Pg) boundary (~66 million years ago) that eradicated non-avian dinosaurs is evidenced by a global geological spike of:",
  ["Iridium layer in boundary clay sediments (derived from an asteroid impact)", "Pure gold nuggets", "Uranium glass beads", "Microscopic coal dust"],
  0,
  "Luis and Walter Alvarez discovered a worldwide layer of iridium (an element rare in Earth's crust but abundant in asteroids) at the K-Pg boundary, confirming the Chicxulub asteroid impact."
);

// 96-125: Biochemical & Serological evidences
addMcq(
  "Cytochrome c is widely utilized in molecular phylogenetics because:",
  ["It is an essential, highly conserved mitochondrial electron-transport protein present in all aerobic organisms", "It is found exclusively in humans", "It is made of DNA rather than amino acids", "It changes its entire amino acid sequence every century"],
  0,
  "Cytochrome c performs the vital function of carrying electrons in cellular respiration; its slow, steady rate of amino acid substitution acts as a reliable molecular clock."
);

addMcq(
  "The amino acid sequence of the human cytochrome c protein has how many amino acid differences when compared with the cytochrome c of a chimpanzee?",
  ["Zero differences (identical 104-amino acid sequence)", "12 differences", "44 differences", "100 differences"],
  0,
  "Human and chimpanzee cytochrome c molecules are 100% identical in their complete 104-amino-acid sequences, proving exceptionally close evolutionary divergence."
);

addMcq(
  "The beta-chain of human adult hemoglobin ($HbA$) consists of 146 amino acids. How many amino acid differences exist between the beta-chain of a human and that of a chimpanzee?",
  ["Zero differences (100% identical sequence)", "1 difference", "8 differences", "67 differences"],
  0,
  "Human and chimpanzee hemoglobin beta-chains are identical across all 146 amino acid positions, reflecting their recent common ancestry ~6-7 million years ago."
);

addMcq(
  "How many amino acid differences exist between the hemoglobin beta-chain of a human and that of a gorilla?",
  ["Only 1 difference (at position 23)", "10 differences", "26 differences", "45 differences"],
  0,
  "The beta-globin chain of gorillas differs from that of humans by only a single amino acid substitution (at position 23: Asp in humans vs Glu in gorillas)."
);

addMcq(
  "Comparative DNA hybridization studies measure phylogenetic relatedness by determining:",
  ["The melting temperature ($T_m$) of hybrid heteroduplex DNA strands formed between two species", "The length of hair on the head", "The weight of the spleen", "The rate of blood clotting"],
  0,
  "Hybrid DNA double helices formed between closely related species have more complementary base pairs and fewer mismatches, requiring higher melting temperatures ($T_m$) to denature."
);

addMcq(
  "George Nuttall's precipitin test (serological testing) in 1904 proved that human blood serum is immunologically most closely related to that of:",
  ["Anthropoid apes (chimpanzees and gorillas)", "Old World monkeys", "Marsupial kangaroos", "Amphibian frogs"],
  0,
  "Anti-human serum provoked massive precipitate formation when mixed with chimpanzee and gorilla serum, progressively less with monkeys, and near-zero with non-primates."
);

addMcq(
  "The concept of the 'Molecular Clock' proposed by Zuckerkandl and Pauling posits that:",
  ["Neutral nucleotide and amino acid mutations accumulate in conserved macromolecules at a roughly constant rate over geological time", "All animals have internal wristwatches", "DNA dissolves every 1,000 years", "Enzymes tick loudly in cells"],
  0,
  "The molecular clock uses the constant mutation rate of neutral genetic substitutions to date when two evolutionary lineages diverged from their common ancestor."
);

addMcq(
  "The presence of identical excretory nitrogenous waste pathways, identical ATP energy currency, and glycolysis in all eukaryotes illustrates:",
  ["Biochemical homology indicating common ancestry", "Convergent evolution of chemical factories", "Random chemical coincidences", "Environmental pollution effects"],
  0,
  "The universal conservation of foundational metabolic pathways (glycolysis, TCA cycle) and molecular currencies (ATP, NADH) across all eukaryotes is direct biochemical homology."
);

addMcq(
  "Which living animal represents a connecting link between Annelida and Arthropoda?",
  ["Peripatus (Velvet worm)", "Archaeopteryx", "Ornithorhynchus", "Latimeria"],
  0,
  "Peripatus possesses continuous muscular body walls and segmented nephridia like annelids, but breathes through tracheae and possesses an open hemocoel like arthropods."
);

addMcq(
  "The lungfish Protopterus found in African freshwater rivers represents a connecting link between:",
  ["Fishes and Amphibians", "Amphibians and Reptiles", "Reptiles and Birds", "Fishes and Reptiles"],
  0,
  "Dipnoan lungfishes breathe air using lungs alongside gills and possess a 3-chambered heart with pulmonary circulation, bridging bony fishes and early tetrapod amphibians."
);

// 126-154: Advanced comparative anatomy, biogeography, and NCERT integration
addMcq(
  "Neopilina galatheae is an extraordinary 'living fossil' that bridges the phylogenetic gap between:",
  ["Annelida and Mollusca", "Arthropoda and Echinodermata", "Chordata and Hemichordata", "Porifera and Coelenterata"],
  0,
  "Neopilina is a monoplacophoran mollusc possessing a typical shell and mantle, yet exhibiting internal metameric segmentation of gills, nephridia, and muscles like annelids."
);

addMcq(
  "Which of the following is a classic connecting link between living reptiles and mammals?",
  ["Duck-billed platypus (Ornithorhynchus)", "Archaeopteryx", "Peripatus", "Balanoglossus"],
  0,
  "Ornithorhynchus lays cleidoic eggs like reptiles, yet has hair, milk glands (mammary glands), and a single dentary bone in each lower jaw half like mammals."
);

addMcq(
  "Balanoglossus (tongue worm) represents an evolutionary connecting link between:",
  ["Non-chordates (invertebrates) and Chordates", "Annelids and Arthropods", "Fishes and Amphibians", "Echinoderms and Molluscs"],
  0,
  "Balanoglossus (phylum Hemichordata) has pharyngeal gill slits and a dorsal hollow nerve cord like chordates, but an invertebrate body plan and dipleurula-like tornaria larva."
);

addMcq(
  "Biogeographical distribution patterns (such as distinct flora and fauna separated by Wallace's Line in the Malay Archipelago) provide evidence for:",
  ["Evolution shaped by geographical isolation and continental drift", "Spontaneous generation in islands", "Simultaneous divine creation on every mountain", "Continuous global dispersal of all species without barriers"],
  0,
  "Alfred Russel Wallace noted sharp faunal differences across deep ocean channels (Wallace's Line), illustrating that geographic isolation fosters independent divergent evolution."
);

addMcq(
  "The unique native mammalian fauna of Australia (dominated by marsupials rather than placentals) is attributed to:",
  ["Geographical isolation following continental drift before placental mammals evolved and radiated globally", "The climate being too hot for placental mammals", "Marsupials killing all placental mammals upon arrival", "Human hunters exterminating all Australian placentals"],
  0,
  "Australia split from Gondwana during the Mesozoic era before placental mammals underwent global adaptive radiation, leaving marsupials free to radiate into all ecological niches."
);

addMcq(
  "Discontinuous (disjunct) geographical distribution, such as lungfishes found only in South America (Lepidosiren), Africa (Protopterus), and Australia (Neoceratodus), is explained by:",
  ["Ancient distribution across the contiguous supercontinent Gondwana followed by continental drift and localized regional extinctions", "Modern humans stocking rivers with fish", "Lungfishes flying across the oceans", "Spontaneous generation in three separate rivers"],
  0,
  "Gondwanan distribution: lungfishes evolved in contiguous freshwater waterways; continental drift separated the landmasses, leaving relic populations in isolated continents."
);

addMcq(
  "Which anatomical structure in human males is a non-functional vestigial homologue of the female uterus?",
  ["Prostatic utricle (uterus masculinus)", "Epididymis", "Vas deferens", "Prostate gland"],
  0,
  "The prostatic utricle is a small, blind pouch in the prostatic urethra representing the vestigial remnant of the paramesonephric (Müllerian) duct in human males."
);

addMcq(
  "Cervical fistulae in humans, appearing as congenital lateral openings on the neck discharging mucus, are atavistic defects resulting from:",
  ["Failure of the embryonic second pharyngeal cleft to completely obliterate during development", "Bacterial infection of salivary glands", "A mutation causing wisdom teeth to grow on the neck", "Excessive calcium intake"],
  0,
  "In human embryos, the second pharyngeal arch overgrows lower clefts to form the temporary cervical sinus; failure to regress leaves a persistent branchial cleft fistula."
);

addMcq(
  "Which of the following describes an example of morphological parallelism (parallel evolution)?",
  ["Independent evolution of similar running adaptations in North American horses and South American litopterns", "Divergence of Darwin's finches on Galapagos", "Vestigial pelvic bones in pythons", "Biogenesis in swan-neck flasks"],
  0,
  "Parallel evolution occurs when closely related lineages with similar genetic ancestry independently acquire similar phenotypic adaptations in response to similar selection pressures."
);

addMcq(
  "Adaptive convergence (convergent evolution) in desert animals is illustrated by:",
  ["Kangaroo rats (North America) and Jerboas (Sahara) having long hind legs, bipedal hopping, and concentrated urine", "Penguins and polar bears living at the South Pole together", "Whales and bats sharing identical forearm bones", "Human babies possessing tails"],
  0,
  "Unrelated desert rodents (heteromyid kangaroo rats vs dipodid jerboas) independently evolved bipedal saltatorial locomotion, hypertrophied auditory bullae, and hyper-concentrated urine."
);

addMcq(
  "The existence of pseudogenes (non-functional, mutated genomic copies of once-active genes) in the human genome provides powerful molecular evidence for:",
  ["Descent with modification from ancestral species where those genes were fully active", "The perfection of human design", "Spontaneous generation of DNA", "Viral creation of all enzymes"],
  0,
  "Pseudogenes (such as the GULO pseudogene for vitamin C synthesis or olfactory receptor pseudogenes) are crippled molecular fossils recording ancestral functional history."
);

addMcq(
  "Why cannot humans synthesize their own Vitamin C (L-ascorbic acid), unlike most other mammals?",
  ["The human GULO gene (gulonolactone oxidase) has accumulated inactivating mutations, persisting as a non-functional pseudogene", "Humans lack kidneys", "Human stomachs destroy all vitamins", "Humans have no liver enzymes"],
  0,
  "All haplorhine primates (tarsiers, monkeys, apes, humans) share the identical crippled GULO pseudogene, proving our common ancestor lost Vitamin C synthesis when fruit was abundant."
);

addMcq(
  "Which of the following is NOT an evidence for biological evolution?",
  ["The belief that all living species were created simultaneously and remain immutable", "Paleontological fossils in sedimentary strata", "Homologous bones in vertebrate forelimbs", "Universal genetic code and conserved cytochrome c"],
  0,
  "The doctrine of immutability and simultaneous special creation directly contradicts empirical evolutionary evidence from fossils, comparative anatomy, and molecular genetics."
);

addMcq(
  "The similarity between the amino acid sequences of human and rhesus monkey hemoglobin (only 8 differences out of 146 residues) reflects:",
  ["A closer evolutionary relationship to monkeys than to non-primate mammals like horses (26 differences)", "That monkeys evolved directly from modern humans", "That humans are genetically identical to birds", "Zero phylogenetic significance"],
  0,
  "Molecular divergence tracks phylogenetic branching: fewer amino acid differences between humans and rhesus monkeys indicate a much more recent common ancestor than with ungulates."
);

addMcq(
  "The presence of segmented rectus abdominis muscles ('six-pack' muscle bellies separated by fibrous tendinous intersections) in human abdominal walls is a vestigial holdover from:",
  ["The continuous segmented trunk musculature (myotomes) of ancestral fish and amphibians", "A specialized muscle evolved only in humans for running", "A bone-forming cartilage tissue", "An artifact of exercise"],
  0,
  "Tendinous inscriptions of the rectus abdominis are morphological remnants of segmental myotomic septa that coordinated undulatory swimming in primitive aquatic vertebrates."
);

addMcq(
  "What is the evolutionary significance of vestigial hindlimb bones and pelvis in modern cetaceans?",
  ["They confirm that the ancestors of modern whales walked on four legs on land before transitioning to a fully aquatic lifestyle", "They prove whales will grow legs next year", "They help whales breathe air underwater", "They store heavy radioactive minerals"],
  0,
  "Vestigial pelvic bones in whales have no swimming function and are inexplicable except as inherited ancestral anatomical relics of terrestrial quadrupedal artiodactyl ancestors."
);

addMcq(
  "Archaeopteryx is recognized as an extinct evolutionary connecting link rather than a modern bird because it possessed:",
  ["A mosaic of distinct reptilian skeletal traits (toothed jaws, clawed digits, long bony tail) alongside avian feathers", "Only bat-like leathery wings", "No bones whatsoever", "A four-chambered mammalian heart with fur"],
  0,
  "Archaeopteryx displays a mosaic of primitive reptilian anatomical markers (amphicoelous vertebrae, abdominal gastralia, thecodont teeth) alongside derived pennaceous avian feathers."
);

addMcq(
  "The study of homologous and analogous organs in comparative biology proves that:",
  ["Organisms undergo morphological modifications over generations in response to environmental demands, demonstrating descent with modification", "All animals were created with the exact same organs", "Anatomy never changes across geological time", "Animals choose which organs to build by willpower"],
  0,
  "Comparative anatomy demonstrates that natural selection remodels pre-existing ancestral anatomical structures (homology) or converges on similar solutions (analogy) over evolutionary time."
);

addMcq(
  "According to NCERT Class 12 Biology, which of the following is considered an example of homology?",
  ["Vertebrate hearts or brains", "Wings of butterfly and bird", "Eye of octopus and mammal", "Flippers of penguins and dolphins"],
  0,
  "NCERT explicitly highlights: 'Other examples are vertebrate hearts or brains. In plants also, the thorns and tendrils of Bougainvillea and Cucurbita represent homology.'"
);


const extra68Mcqs = [
  [
    "The mouthparts of a cockroach (biting and chewing), honeybee (chewing and lapping), butterfly (siphoning), and mosquito (piercing and sucking) are classic examples of:",
    [
      "Homologous structures derived from a common insect ancestral plan modified for diverse feeding mechanisms",
      "Analogous structures developed from different germ layers",
      "Vestigial organs with no functional role",
      "Atavistic mutations"
    ],
    0,
    "All insect mouthparts are composed of homologous constituent parts (labrum, mandibles, maxillae, labium, hypopharynx) modified by divergent evolution for different dietary habits."
  ],
  [
    "The sting of a worker honeybee and the ovipositor of a parasitic ichneumon wasp are homologous because:",
    [
      "The honeybee sting is an evolutionary modification of the female ovipositor (egg-laying apparatus)",
      "Both are modified salivary glands",
      "Both develop from the third pair of walking legs",
      "Both are modified wings"
    ],
    0,
    "In hymenopteran insects (bees, wasps, ants), the venom-injecting sting is a homologous morphological adaptation of the ancestral female ovipositor."
  ],
  [
    "In contrast, the sting of a honeybee (modified abdominal ovipositor) and the sting of a scorpion (terminal post-abdominal telson) are:",
    [
      "Analogous structures performing a similar stinging defense function but originating from distinct anatomical structures",
      "Homologous structures",
      "Vestigial organs",
      "Identical embryonic appendages"
    ],
    0,
    "The bee sting originates from modified genital appendages of the 8th and 9th abdominal segments, while the scorpion sting is the specialized terminal segment (telson) of the metasoma."
  ],
  [
    "The respiratory organs of diverse animals—such as the gills of a prawn, the book gills of Limulus, the book lungs of a scorpion, the tracheae of an insect, and the lungs of a mammal—represent:",
    [
      "Analogous organs that independently evolved for gas exchange in diverse habitats",
      "Homologous organs derived from embryonic branchial pouches",
      "Atavistic reversions from ancestral protozoa",
      "Vestigial structures with zero respiratory function"
    ],
    0,
    "These respiratory structures share the common physiological function of oxygen absorption, but possess totally distinct anatomical designs and embryonic origins (convergent evolution)."
  ],
  [
    "The electric organ of the electric ray (Torpedo, derived from modified branchial muscles) and that of the electric eel (Electrophorus, derived from modified trunk axial muscles) are:",
    [
      "Analogous structures resulting from convergent adaptation for electro-defense and prey stun",
      "Homologous structures sharing identical branchial origin",
      "Vestigial structures with zero voltage generation",
      "Atavistic abnormalities found only in sick fish"
    ],
    0,
    "Both fish generate electric shocks for hunting and defense, but Torpedo derived its electric organs from branchial arch musculature, whereas Electrophorus modified its trunk locomotor myotomes."
  ],
  [
    "Which of the following plant structures represent HOMOLOGOUS organs?",
    [
      "Tendrils of garden pea (modified leaflets) and tendrils of sweet pea",
      "Tendrils of pea (modified leaflets) and tendrils of grapevine (modified terminal buds)",
      "Foliage leaves of mango and spines of cactus (modified leaves)",
      "Thorns of Citrus (modified axillary bud) and spines of Opuntia (modified leaf)"
    ],
    2,
    "Both ordinary foliage leaves and cactus spines develop from shoot apical leaf primordia and are modified leaves, representing homologous organs."
  ],
  [
    "The cladodes of Ruscus (modified green photosynthetic stems) and the phyllodes of Australian Acacia (modified expanded petioles) are:",
    [
      "Analogous organs performing photosynthesis",
      "Homologous organs derived from stem axes",
      "Vestigial organs unable to perform photosynthesis",
      "Atavistic reversions"
    ],
    0,
    "Cladodes are modified flattened stem internodes while phyllodes are modified petioles; both independently converged upon a flattened photosynthetic morphology."
  ],
  [
    "Scales of reptiles, feathers of birds, and hair of mammals are all derived from which embryonic germ layer?",
    [
      "Ectoderm (epidermal integumentary derivatives)",
      "Mesoderm exclusively",
      "Endoderm exclusively",
      "Neural crest cells only"
    ],
    0,
    "All vertebrate cutaneous integumentary coverings (reptilian epidermal scales, avian feathers, mammalian hair) are homologous derivatives of the embryonic ectoderm."
  ],
  [
    "The malleus and incus auditory ossicles of the mammalian middle ear evolved from which reptilian jaw bones?",
    [
      "The articular and quadrate bones of the ancestral synapsid jaw joint",
      "The dentary and squamosal bones",
      "The maxilla and premaxilla",
      "The hyoid arch exclusively"
    ],
    0,
    "During synapsid-mammalian evolution, the reptilian jaw-joint bones decoupled from feeding: the articular became the mammalian malleus and the quadrate became the incus."
  ],
  [
    "The third middle ear ossicle in mammals, the stapes, is homologous to which bone in amphibians, reptiles, and birds?",
    [
      "Columella auris (derived from the hyomandibular of ancestral fish)",
      "Quadrate",
      "Articular",
      "Dentary"
    ],
    0,
    "The single auditory bone of non-mammalian tetrapods, the columella auris, is directly homologous to the mammalian stapes, both derived from the ancestral second visceral (hyoid) arch."
  ],
  [
    "Amniotes (reptiles, birds, and mammals) are united by the shared embryonic development of four extra-embryonic membranes, which are:",
    [
      "Amnion, Chorion, Allantois, and Yolk Sac",
      "Placenta, Umbilicus, Gill, and Fin",
      "Epidermis, Dermis, Hypodermis, and Hair",
      "Ectoderm, Mesoderm, Endoderm, and Notochord"
    ],
    0,
    "The evolution of the cleidoic egg with amnion (cushioning fluid), chorion (gas exchange), allantois (nitrogen waste/respiration), and yolk sac enabled vertebrates to reproduce on dry land."
  ],
  [
    "The human embryonic yolk sac contains virtually no nutritional yolk, yet it is evolutionary conserved because:",
    [
      "It is the primary site of early embryonic hematopoiesis (blood cell formation) and the source of primordial germ cells",
      "It digests maternal bones",
      "It pumps amniotic fluid into the brain",
      "It secretes thyroid hormones"
    ],
    0,
    "The yolk sac is an evolutionary vestige of ancestral oviparous amniote eggs; it remains vital during early human development for generating early blood stem cells and primordial germ cells."
  ],
  [
    "In human fetal circulation, the ductus arteriosus shunts blood from the pulmonary trunk to the aorta, bypassing non-functional lungs. At birth, it closes to form the vestigial fibrous cord named:",
    [
      "Ligamentum arteriosum",
      "Fossa ovalis",
      "Ligamentum teres",
      "Ligamentum venosum"
    ],
    0,
    "Upon the baby's first breath, smooth muscle contraction obliterates the lumen of the ductus arteriosus, converting it into the vestigial connective tissue ligamentum arteriosum."
  ],
  [
    "The fossa ovalis in the interatrial septum of the adult human heart is a vestigial depression representing the embryonic:",
    [
      "Foramen ovale",
      "Ductus venosus",
      "Sinus venosus",
      "Truncus arteriosus"
    ],
    0,
    "The foramen ovale shunts blood from the right to the left atrium in the fetus; at birth, elevated left atrial pressure presses the septum primum against the septum secundum, leaving the fossa ovalis."
  ],
  [
    "The segmental arrangement of somites in human embryos (which give rise to vertebrae, ribs, and segmental muscles) provides embryological evidence of:",
    [
      "Ancestral metameric segmentation shared with primitive chordates",
      "Radial symmetry",
      "Spontaneous generation",
      "Convergent evolution with starfish"
    ],
    0,
    "The formation of transient, bilaterally symmetrical embryonic somites along the neural tube reflects ancient bilaterian metameric body organization."
  ],
  [
    "In protostome animals (annelids, molluscs, arthropods), the embryonic blastopore develops into the:",
    [
      "Mouth (the anus forms secondarily at the opposite end)",
      "Anus exclusively",
      "Brain",
      "Vertebral column"
    ],
    0,
    "In Protostomia ('first mouth'), the primary embryonic blastopore of the gastrula forms the mouth, whereas in Deuterostomia ('second mouth', e.g. chordates) it forms the anus."
  ],
  [
    "In deuterostome animals (echinoderms, hemichordates, chordates), the embryonic blastopore develops into the:",
    [
      "Anus (the mouth develops secondarily)",
      "Mouth",
      "Nasal cavity",
      "Kidneys"
    ],
    0,
    "In Deuterostomia, the blastopore becomes the anus, and the mouth develops from a secondary stomodeal opening at the opposite pole, proving chordates are close relatives of echinoderms."
  ],
  [
    "The tornaria larva of enteropneust hemichordates (Balanoglossus) bears an uncanny morphological resemblance to which echinoderm larva, providing evidence of common ancestry?",
    [
      "Bipinnaria larva of starfish (Asteroidea)",
      "Trochophore larva of Nereis",
      "Veliger larva of snail",
      "Nauplius larva of prawn"
    ],
    0,
    "Tornaria larvae of hemichordates and bipinnaria larvae of asteroid echinoderms have identical ciliated bands, dorsal pores, and enterocoelic coelom formation, uniting them phylogenetically."
  ],
  [
    "The presence of a free-swimming, tailed, notochord-bearing 'ascidian tadpole' larva in sedentary, bag-like adult tunicates (Urochordata like Herdmania) proves that:",
    [
      "Urochordates are true chordates that have undergone retrogressive metamorphosis",
      "Tunicates are parasitic worms",
      "Tunicates evolved directly from terrestrial birds",
      "Notochord is a non-functional artifact"
    ],
    0,
    "The motile ascidian tadpole possesses a dorsal hollow nerve cord, notochord, and tail, which degenerate during retrogressive metamorphosis into the sessile filter-feeding adult."
  ],
  [
    "Which human ear structure contains vestigial auricular muscles that allow certain individuals to wiggle their external ears?",
    [
      "Extrinsic auricular muscles (anterior, superior, and posterior auricularis)",
      "Tympanic membrane",
      "Cochlea",
      "Semicircular canals"
    ],
    0,
    "The extrinsic auricular muscles are ancestral mammalian structures that rotated the ear pinna toward sound sources; in humans, they persist as vestigial structures."
  ],
  [
    "An 'index fossil' (or guide fossil) in biostratigraphy is defined as a fossil that:",
    [
      "Was geographically widespread, abundant, easily identifiable, and existed for a short, well-defined geological time span",
      "Existed continuously from the origin of Earth to the present day",
      "Is found only in a single cave on Earth",
      "Contains living DNA"
    ],
    0,
    "Index fossils (such as ammonites, trilobites, or foraminifera) define narrow geological biozones, allowing geologists to correlate and date rock strata across continents."
  ],
  [
    "Trilobites are iconic marine arthropod index fossils that lived exclusively during which geological era?",
    [
      "Paleozoic Era (Cambrian to Permian periods)",
      "Mesozoic Era",
      "Cenozoic Era",
      "Precambrian Eon"
    ],
    0,
    "Trilobites were extraordinarily diverse, hard-shelled marine arthropods that flourished throughout the Paleozoic and went completely extinct in the end-Permian mass extinction."
  ],
  [
    "Ammonites (shelled cephalopod molluscs with complex suture lines) are prime index fossils for which geological era?",
    [
      "Mesozoic Era (Triassic, Jurassic, Cretaceous periods)",
      "Paleozoic Era",
      "Cenozoic Era",
      "Archaean Eon"
    ],
    0,
    "Ammonite shells evolved rapid variations in intricate septal suture patterns throughout the Mesozoic, making them invaluable index fossils for dating dinosaur-bearing strata."
  ],
  [
    "The Permian-Triassic mass extinction (~252 million years ago), the most catastrophic extinction in Earth's history, wiped out approximately what percentage of all marine species?",
    [
      "About 96% of marine species and 70% of terrestrial vertebrate species ('The Great Dying')",
      "About 10%",
      "Less than 1%",
      "100% of all life"
    ],
    0,
    "The end-Permian mass extinction, triggered by massive Siberian Traps volcanism and global anoxia, eliminated ~96% of marine species and represents life's nearest brush with total extinction."
  ],
  [
    "The fossil fern Glossopteris, whose leaf fossils were discovered across South America, Africa, India, Madagascar, Australia, and Antarctica, provided crucial evidence for:",
    [
      "Alfred Wegener's Theory of Continental Drift and the existence of the southern supercontinent Gondwana",
      "Plants flying across the oceans",
      "The spontaneous generation of trees",
      "Human agricultural trade 300 million years ago"
    ],
    0,
    "Glossopteris had large seeds unable to float across oceans; its widespread distribution across separated southern continents proved they were once joined as the supercontinent Gondwana."
  ],
  [
    "Which of the following living animals is considered a 'living fossil' that has remained virtually unchanged morphologically for over 400 million years?",
    [
      "King crab (Limulus / horseshoe crab)",
      "Common housefly",
      "Domestic dog",
      "Peafowl"
    ],
    0,
    "Limulus (horseshoe crab) is a chelicerate arthropod that has retained its primitive anatomy since the Ordovician period, surviving multiple mass extinctions as a classic 'living fossil'."
  ],
  [
    "Sphenodon punctatus (the Tuatara), endemic to islands off New Zealand, is a living fossil of order Rhynchocephalia notable for possessing:",
    [
      "A functional third parietal (pineal) eye on the top of its head",
      "Wings for flying",
      "Gills like a fish",
      "Mammary glands"
    ],
    0,
    "Sphenodon is the sole survivor of the ancient reptilian order Rhynchocephalia, retaining primitive diapsid skull arches and a well-developed parietal eye complete with lens and retina."
  ],
  [
    "Eusthenopteron is a celebrated Late Devonian fossil lobe-finned fish that possessed:",
    [
      "Internal nostrils (choanae) and limb bones in its fins homologous to humerus, radius, and ulna",
      "Feathered wings",
      "A turtle shell",
      "Four mammalian hooves"
    ],
    0,
    "Eusthenopteron had sturdy muscular lobed fins supported by internal bones matching tetrapod limb bones, illustrating how tetrapod limbs evolved from sarcopterygian fish fins."
  ],
  [
    "Tiktaalik roseae is commonly nicknamed the 'fishapod' because:",
    [
      "It represents a pristine morphological intermediate possessing both fish gills/scales and tetrapod wrists, flat skull, and neck",
      "It is an amphibian that lays bird eggs",
      "It is a mammal that swims like a shark",
      "It is a fossil insect"
    ],
    0,
    "Tiktaalik had fish-like scales and fin rays, but tetrapod-like wrist bones, mobile neck joints, and ribs capable of supporting the body out of water."
  ],
  [
    "The fossil sequence of the modern horse lineage demonstrates which chronological progression of genera from earliest to latest?",
    [
      "Hyracotherium $\\rightarrow$ Mesohippus $\\rightarrow$ Merychippus $\\rightarrow$ Pliohippus $\\rightarrow$ Equus",
      "Equus $\\rightarrow$ Pliohippus $\\rightarrow$ Hyracotherium $\\rightarrow$ Mesohippus",
      "Merychippus $\\rightarrow$ Equus $\\rightarrow$ Hyracotherium $\\rightarrow$ Pliohippus",
      "Pliohippus $\\rightarrow$ Equus $\\rightarrow$ Mesohippus $\\rightarrow$ Hyracotherium"
    ],
    0,
    "The classic horse phylogeny progressed from Eocene Hyracotherium (4 toes), to Oligocene Mesohippus (3 toes), Miocene Merychippus, Pliocene Pliohippus (1st single-toed), to modern Equus."
  ],
  [
    "In comparative protein biochemistry, why is the amino acid sequence of insulin so similar across cattle, pigs, and humans that animal insulin was used for decades to treat human diabetes?",
    [
      "Because all mammals share a common ancestor from which the functional polypeptide sequence of insulin was inherited with minor modifications",
      "Because all animals eat the exact same food",
      "Because insulin is an inorganic mineral",
      "Because doctors chemically synthesized it from scratch"
    ],
    0,
    "Bovine and porcine insulin differ from human insulin by only 3 and 1 amino acids respectively; this homology permitted cross-species hormone therapy, proving evolutionary kinship."
  ],
  [
    "The homeobox (Hox) genes that control the body plan along the anterior-posterior axis are so highly conserved that a mouse Hox gene can:",
    [
      "Functionally replace a defective homologous homeotic gene in a developing fruit fly (Drosophila)",
      "Turn a mouse into a tree",
      "Cause a fly to speak",
      "Synthesize chlorophyll"
    ],
    0,
    "Transgenic experiments show that mammalian Hox genes can rescue mutant Drosophila defects, proving that bilateral body patterning genetics arose in a common ancestor >550 million years ago."
  ],
  [
    "Which of the following represents a biochemical homology proving common ancestry?",
    [
      "All living cells transcribe genetic information from DNA into RNA using RNA polymerase, and translate RNA into protein via the universal genetic code",
      "Sharks and dolphins both have grey skin",
      "Birds and bats both fly in air",
      "Potatoes and sweet potatoes both store starch"
    ],
    0,
    "Universal molecular mechanisms (DNA replication, transcription, genetic code, translation on ribosomes) represent profound biochemical homologies shared across all living organisms."
  ],
  [
    "The molecular clock hypothesis relies on the principle that neutral mutations in non-coding or functionally tolerant sites accumulate at:",
    [
      "A relatively constant stochastic rate over geological time, proportional to elapsed divergence time",
      "Zero rate in mammals",
      "Random wild spikes every 10 years",
      "An infinite rate"
    ],
    0,
    "Kimura's neutral theory established that neutral genetic substitutions accumulate at a clock-like rate, allowing molecular biologists to calibrate divergence dates using fossil milestones."
  ],
  [
    "Comparing the whole-genome DNA sequences of humans and chimpanzees demonstrates an overall sequence identity of approximately:",
    [
      "98.5% to 99%",
      "50%",
      "10%",
      "100% identical in every single base pair"
    ],
    0,
    "Whole-genome sequencing proves that human and chimpanzee genomes differ by only ~1.2% in single nucleotide substitutions, confirming chimpanzees as our closest living phylogenetic relatives."
  ],
  [
    "Which of the following chromosome rearrangements explains why humans possess 46 chromosomes ($2n = 46$) while great apes (chimpanzees, gorillas, orangutans) possess 48 chromosomes ($2n = 48$)?",
    [
      "Telomeric end-to-end fusion of two ancestral ape acrocentric chromosomes to form human chromosome 2",
      "Complete loss of two chromosomes in humans",
      "Duplication of all ape chromosomes",
      "Splitting of one human chromosome into ten"
    ],
    0,
    "Human chromosome 2 contains vestigial telomeric sequences at its center and an inactivated second centromere, proving it formed by the fusion of two ancestral ape chromosomes."
  ],
  [
    "The presence of rudimentary, non-functional pelvic girdles in both cetaceans (whales) and boid snakes (pythons) is an example of:",
    [
      "Vestigial organs inherited from four-legged tetrapod ancestors",
      "Analogous organs for high-speed swimming",
      "Atavistic mutations caused by pollution",
      "Homologous wings"
    ],
    0,
    "Both snakes and whales independently lost their ancestral tetrapod limbs, leaving behind reduced, non-functional pelvic remnants embedded within their body musculature."
  ],
  [
    "Why are monotremes (such as Platypus and Echidna) celebrated as living connecting links?",
    [
      "They possess reptilian traits (cleidoic eggs, cloaca, reptilian shoulder girdle) combined with mammalian traits (hair, mammary glands, single dentary bone)",
      "They have bird wings and fish gills",
      "They fly in the air like bats and lay insect eggs",
      "They have cold blood with no bones"
    ],
    0,
    "Monotremes preserve a living mosaic of ancestral reptilian reproductive features alongside derived mammalian hair and lactation, documenting early mammalian evolution."
  ],
  [
    "Which geological period witnessed the sudden explosion of diverse multicellular animal phyla in the fossil record (~541 million years ago)?",
    [
      "Cambrian Period ('Cambrian Explosion')",
      "Jurassic Period",
      "Quaternary Period",
      "Permian Period"
    ],
    0,
    "The Cambrian Explosion marked an unprecedented rapid diversification of marine animal body plans, producing the foundational stem representatives of nearly all extant animal phyla."
  ],
  [
    "The presence of identical blood group systems (e.g. ABO blood group system antigens) in humans and anthropoid apes (chimpanzees and gorillas) demonstrates:",
    [
      "Biochemical serological homology inherited from a common primate ancestor",
      "That apes received blood transfusions from humans in zoos",
      "Convergent evolution driven by mosquitoes",
      "Zero genetic relationship"
    ],
    0,
    "ABO blood group alleles and glycosyltransferase enzymes are shared across humans and apes (trans-species polymorphism), having originated in ancestral catarrhine primates."
  ],
  [
    "A human child born with a cervical branchial fistula (an opening on the side of the neck discharging mucus) exhibits:",
    [
      "Atavistic retention of an embryonic pharyngeal cleft that failed to close",
      "A fractured collarbone",
      "A tumor of the thyroid gland",
      "A fungal skin infection"
    ],
    0,
    "Branchial fistulae represent atavistic failures of second pharyngeal arch overgrowth and cervical sinus obliteration, mimicking ancestral aquatic gill slits."
  ],
  [
    "The modern synthesis explains homology as:",
    [
      "Similarity resulting from common genetic developmental networks inherited with modification from a common ancestor",
      "Superficial resemblance due to magic",
      "Identical function performed by different bones",
      "Environmental dust clinging to skin"
    ],
    0,
    "Modern developmental evolutionary biology (evo-devo) recognizes homology as structural conservation governed by homologous developmental gene regulatory circuits."
  ],
  [
    "Which of the following is an example of ANALOGOUS structures in plants?",
    [
      "Opuntia cladode (flattened stem) and Ficus leaf",
      "Pea tendril (modified leaf) and pumpkin tendril (modified stem)",
      "Sweet potato (root) and potato (stem)",
      "All of the above"
    ],
    3,
    "All three pairs represent structures derived from different organs (stem vs leaf, leaf vs stem, root vs stem) converging upon similar biological functions."
  ],
  [
    "Which of the following is considered an indisputable proof of biological evolution?",
    [
      "The existence of a chronological fossil record in geological strata showing transitional stages between major animal classes",
      "The myth of spontaneous generation",
      "The claim that all animals were created simultaneously",
      "The immutability of species"
    ],
    0,
    "The fossil record provides direct, tangible historical evidence of anatomical transitions (e.g. fish to tetrapods, reptiles to mammals, terrestrial artiodactyls to whales)."
  ],
  [
    "The tail of a scorpion and the tail of a kangaroo are:",
    [
      "Analogous structures (different anatomical parts serving completely different functions)",
      "Homologous structures",
      "Vestigial organs",
      "Identical embryonic appendages"
    ],
    0,
    "The scorpion 'tail' is a modified abdomen (metasoma) bearing a venom apparatus, while the kangaroo tail is a musculoskeletal vertebral extension for balancing; they are entirely non-homologous."
  ],
  [
    "The forelimbs of a mole (specialized for burrowing in soil) and the forelegs of a mole cricket (insect specialized for digging in soil) represent:",
    [
      "Analogous structures resulting from convergent evolution for subterranean fossorial habits",
      "Homologous structures derived from pentadactyl limbs",
      "Vestigial structures",
      "Atavism"
    ],
    0,
    "The vertebrate mammal (mole) and invertebrate arthropod (mole cricket) independently evolved spade-like, clawed digging forelimbs to burrow through soil."
  ],
  [
    "The pineal eye (parietal eye) present beneath the skin in the tuatara (Sphenodon) and certain lizards represents:",
    [
      "A vestigial photoreceptive third eye inherited from primitive ancestral amphibians and reptiles",
      "An ear organ for hearing underground vibrations",
      "A specialized venom gland",
      "A magnetic compass made of iron"
    ],
    0,
    "The parietal eye is an ancient median photoreceptor complete with cornea, lens, and retina connected to the pineal gland, functioning in circadian photoperiodism."
  ],
  [
    "Why are bird wings considered HOMOLOGOUS to human arms, but ANALOGOUS to bat wings with respect to the flight membrane (patagium)?",
    [
      "As tetrapod forelimbs, bird and bat wings share homologous bones; but as flying aerodynamic surfaces, bird feathers and bat skin patagia evolved independently",
      "Bats have no bones in their wings",
      "Birds have no humerus bone",
      "Bats evolved from birds"
    ],
    0,
    "Bird and bat forelimbs are homologous as skeletal limbs inherited from common amniotes, but analogous as specialized wings (feathers attached to arm vs skin stretched between elongated digits)."
  ]
];
extra68Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));


const extra20Mcqs = [
  [
    "In paleontology and evolutionary taxonomy, what is the precise distinction between a 'connecting link' and a 'missing link'?",
    [
      "Connecting links are living (extant) transitional organisms (e.g. Platypus, Peripatus), whereas missing links are extinct fossil transitional forms (e.g. Archaeopteryx)",
      "Missing links are living animals in zoos",
      "Connecting links exist only as computer simulations",
      "There is zero scientific difference between the two terms"
    ],
    0,
    "Living intermediate organisms showing characters of two distinct taxa are termed connecting links; extinct fossil intermediates representing ancestral transitions are termed missing links."
  ],
  [
    "Darwin's tubercle, a small cartilaginous nodule or thickening occasionally present on the upper helix of the human ear, represents:",
    [
      "A vestigial remnant of the pointed tip of the ancestral mammalian pinna",
      "A benign viral wart",
      "An embryonic ear infection",
      "A structure evolved for radio wave detection"
    ],
    0,
    "Darwin's tubercle (first described by sculptor Thomas Woolner and documented by Darwin) is a vestigial homologous feature corresponding to the tip of ancestral mammalian pricked ears."
  ],
  [
    "The palmaris longus muscle in the human forearm, absent congenitally in approximately 14% of individuals without causing any functional deficit in grip strength, is classified as a/an:",
    [
      "Vestigial muscle whose long tendon is commonly harvested for surgical tendon grafts",
      "Atavistic lethal mutation",
      "Homologue of bird flying feathers",
      "Invertebrate parasite"
    ],
    0,
    "Palmaris longus is a vestigial flexor muscle that anchored distal claws in ancestral arboreal quadrupeds; its absence causes no loss of hand function in modern humans."
  ],
  [
    "The plantaris muscle and its slender tendon in the human calf, often ruptured in athletes ('tennis leg'), is a vestigial remnant of the muscle that:",
    [
      "Flexes the toes in four-legged mammals",
      "Rotates the eyeball",
      "Elevates the ribs during breathing",
      "Contracts the urinary bladder"
    ],
    0,
    "The plantaris muscle was a powerful digital flexor in quadrupedal mammals; in bipedal humans, its function is eclipsed by the gastrocnemius, leaving a vestigial tendon."
  ],
  [
    "The Vomeronasal Organ (Jacobson's organ), which detects volatile pheromones in squamate reptiles (snakes, lizards) and carnivores, persists in adult humans as a:",
    [
      "Vestigial, non-functional blind pit in the nasal septum",
      "Functional organ for tasting sugar",
      "Structure that replaces the tongue",
      "Part of the inner ear cochlea"
    ],
    0,
    "In adult humans, the vomeronasal organ is an anatomical vestige with degenerated neural connections and non-functional pheromone receptor pseudogenes."
  ],
  [
    "The Mexican blind cavefish (Astyanax mexicanus) possesses sunken, non-functional eyes covered by skin that are regarded as:",
    [
      "Vestigial organs resulting from evolutionary disuse and relaxed selective constraint in perpetually dark subterranean caves",
      "Atavistic mutations caused by surface sunlight",
      "Homologous wings",
      "Functional thermal sensors"
    ],
    0,
    "In lightless subterranean caves, maintaining functional eyes is metabolically expensive; blind cavefish evolved degenerate vestigial eyes while expanding non-visual lateral line and taste systems."
  ],
  [
    "The tiny 2-inch vestigial wings of the flightless New Zealand Kiwi bird (Apteryx) hidden beneath shaggy hair-like feathers demonstrate:",
    [
      "Evolutionary loss of flight and anatomical vestigialization in the absence of native mammalian terrestrial predators",
      "That kiwis are mammals rather than birds",
      "That kiwis evolved from four-legged frogs",
      "That kiwis will grow full wings next year"
    ],
    0,
    "Island isolation without ground mammalian carnivores led ancestral ratite birds (like the kiwi) to abandon flight, resulting in extreme wing reduction to vestigial stubs."
  ],
  [
    "In radiometric geochronology, Potassium-40 ($^{40}\\text{K}$) decays into Argon-40 ($^{40}\\text{Ar}$) with a half-life of approximately:",
    [
      "1.25 billion years ($1.25 \\times 10^9\\text{ years}$)",
      "5,730 years",
      "100 years",
      "20 minutes"
    ],
    0,
    "Potassium-Argon dating relies on the decay of $^{40}\\text{K}$ into $^{40}\\text{Ar}$ (half-life 1.25 billion years), making it ideal for dating ancient volcanic ash beds associated with hominid fossils."
  ],
  [
    "Petrifaction, the most common mode of complete fossil preservation in bones and wood, involves:",
    [
      "Atom-by-atom replacement of original organic matter by mineral solutions (such as silica, calcite, or pyrite) percolating through sediments",
      "Freezing in liquid nitrogen",
      "Drying in desert sand without minerals",
      "Encapsulation in tree resin"
    ],
    0,
    "During permineralization and petrifaction, mineral-laden groundwater deposits microcrystalline silica or calcite into cellular pore spaces, preserving fine microscopic histology in stone."
  ],
  [
    "Insects exquisitely preserved in golden, hardened fossilized tree resin with intact fine antennae and wing veins are found inside:",
    [
      "Amber",
      "Petrified wood",
      "Black coal seams",
      "Volcanic pumice"
    ],
    0,
    "Amber is fossilized plant resin that trapped prehistoric insects, spiders, and plant tissues in three dimensions, preserving microscopic cuticle structures for millions of years."
  ],
  [
    "Pseudofossils are deceptive mineral formations that mimic biological remains, such as branching dendritic patterns of:",
    [
      "Manganese oxide crystals on rock bedding planes resembling plant ferns",
      "Real dinosaur bones",
      "Fossil bird feathers",
      "Insect wings"
    ],
    0,
    "Dendrites are inorganic crystalline precipitates of manganese or iron oxides that resemble fossilized mosses or ferns, known in geology as pseudofossils."
  ],
  [
    "What was the approximate adult body size of the famous transitional fossil Archaeopteryx lithographica?",
    [
      "About the size of a modern crow or pigeon (approx. 0.5 meters long)",
      "As large as an African elephant",
      "Smaller than a housefly",
      "Ten meters tall"
    ],
    0,
    "Archaeopteryx was a relatively small, crow-sized transitional bird weighing approximately 0.8 to 1.0 kg with a wingspan of about 0.5 meters."
  ],
  [
    "Which morphological trait observed in human embryos directly disproves the naive claim that embryonic development is merely the enlargement of a preformed adult miniature?",
    [
      "The transient presence of a post-anal tail, pharyngeal arches, and pronephric kidneys that are radically remodeled before birth",
      "The immediate presence of adult teeth",
      "The immediate presence of beard hair",
      "The immediate presence of a mature skeleton"
    ],
    0,
    "Embryogenesis involves dynamic morphogenesis, tissue induction, and apoptosis (e.g. regression of tail, remodeling of aortic arches), not the simple volumetric expansion of a miniature homunculus."
  ],
  [
    "In vertebrate comparative embryology, the embryonic second visceral (hyoid) arch contributes to the formation of which mammalian structures?",
    [
      "The stapes ear bone, styloid process of the temporal bone, and lesser horns of the hyoid bone",
      "The incus and malleus only",
      "The clavicle and scapula",
      "The femur and patella"
    ],
    0,
    "The second pharyngeal (hyoid) arch mesenchyme differentiates into the stapes, styloid process, stylohyoid ligament, and upper body/lesser horns of the hyoid bone."
  ],
  [
    "Why are pharyngeal clefts in terrestrial tetrapod embryos called 'pouches' or 'clefts' rather than 'gill slits'?",
    [
      "Because in terrestrial amniotes (reptiles, birds, mammals), they normally never perforate completely into open respiratory slits communicating with the exterior",
      "Because they are made of bone",
      "Because they have zero relationship to vertebrate ancestry",
      "Because they are located in the abdominal cavity"
    ],
    0,
    "In terrestrial amniotes, internal endodermal pharyngeal pouches meet external ectodermal branchial clefts, but thin closing membranes normally prevent open branchial slit perforation."
  ],
  [
    "The evolutionary sequence of fossil elephants traces their lineage from the small, tapir-sized, trunk-less Eocene ancestor named:",
    [
      "Moeritherium",
      "Mammuthus primigenius",
      "Smilodon",
      "Hyracotherium"
    ],
    0,
    "Moeritherium (from Eocene Egypt) was a small semi-aquatic proboscidean standing ~0.7 m tall with slightly enlarged incisors, initiating the elephant fossil lineage."
  ],
  [
    "Pliohippus, a Pliocene fossil horse in the evolutionary lineage of Equus, is celebrated as the first horse to:",
    [
      "Exhibit a monodactyl foot with a single complete functional hoof on digit III, with digits II and IV reduced to splints",
      "Develop five toes on all feet",
      "Lose all teeth",
      "Fly in the air"
    ],
    0,
    "Pliohippus was the revolutionary 'first one-toed horse', where digit III was crowned by a single central hoof, providing the biomechanical blueprint for modern Equus."
  ],
  [
    "Which anatomical structure in birds is a fused, V-shaped bone ('wishbone') formed by the clavicles, also identified in theropod dinosaurs and Archaeopteryx?",
    [
      "Furcula",
      "Synsacrum",
      "Pygostyle",
      "Pecten"
    ],
    0,
    "The furcula (wishbone) is formed by the fusion of the paired clavicles and interclavicle, serving as an elastic spring during flight; its presence in theropods proves avian dinosaurian ancestry."
  ],
  [
    "According to NCERT Class 12 Biology, Karl Ernst von Baer's note that 'embryos never pass through the adult stages of other animals' effectively:",
    [
      "Disapproved Ernst Haeckel's embryological support for evolution",
      "Proved spontaneous generation",
      "Disproved Darwin's theory of natural selection",
      "Disproved Mendel's laws of inheritance"
    ],
    0,
    "NCERT explicitly notes: 'This proposal was disapproved by Karl Ernst von Baer who noted that embryos never pass through the adult stages of other animals.'"
  ],
  [
    "The presence of homologous anatomical features (such as pentadactyl limbs) across amphibians, reptiles, birds, and mammals provides conclusive evidence that:",
    [
      "All tetrapod vertebrates share a single common tetrapod ancestor from which they diverged",
      "Amphibians and mammals originated from different planets",
      "Birds evolved independently from insects",
      "All tetrapods choose their bone shapes by conscious effort"
    ],
    0,
    "Homology in the pentadactyl limb across all four tetrapod classes is unequivocal proof of common descent from an ancestral Devonian lobe-finned fish / early tetrapod stock."
  ]
];
extra20Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

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

console.log(`Part 2 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 2 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_evolution_part2.js');
  const fileContent = `// Auto-generated data for Zoology Evolution Part 2: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
