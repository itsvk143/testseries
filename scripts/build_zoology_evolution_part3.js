const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Adaptive radiation and Speciation";
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
    a: "Darwin's finches of the Galapagos Islands represent one of the best-documented examples of adaptive radiation.",
    r: "From an original ancestral seed-eating finch that reached the archipelago, diverse species with radically modified beaks evolved to occupy distinct ecological niches.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. The ancestral South American seed-eating ground finch colonized the Galapagos and underwent adaptive radiation, diversifying into 14 distinct species with beaks adapted for seeds, insects, cacti, and buds."
  },
  {
    a: "Adaptive radiation refers to the evolutionary process in which an ancestral species rapidly diversifies into a multitude of new forms within a geographical region.",
    r: "The diverging species radiate from a single ancestral point into different geographical areas or ecological niches in response to varied selective pressures and available resources.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the official NCERT definition: 'This process of evolution of different species in a given geographical area starting from a point and literally radiating to other areas of geography (habitats) is called adaptive radiation.'"
  },
  {
    a: "Australian marsupials exhibit an extraordinary example of adaptive radiation within an isolated island continent.",
    r: "A diverse assemblage of marsupials—such as the kangaroo, wombat, koala, bandicoot, and Tasmanian wolf—evolved from a single common ancestral stock within Australia.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that in the absence of placental competitors, ancestral marsupials radiated to occupy grazing, burrowing, arboreal, predatory, and gliding niches."
  },
  {
    a: "When more than one adaptive radiation occurs in an isolated geographical area representing different ecological habitats, it results in convergent evolution.",
    r: "Unrelated organisms in separated lineages develop strikingly similar morphological adaptations when subjected to analogous environmental selection pressures.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains why placental mammals and Australian marsupials evolved parallel matching pairs occupying equivalent ecological niches."
  },
  {
    a: "The Tasmanian wolf and the placental North American wolf are analogous animals that evolved by convergent evolution.",
    r: "Despite belonging to completely different mammalian subclasses (Metatheria vs Eutheria), both independently evolved similar predatory cursorial body forms to hunt prey in open habitats.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the striking convergent resemblance between the marsupial Thylacinus and the placental Canis lupus."
  },
  {
    a: "The flying phalanger (sugar glider) and the placental flying squirrel are an example of convergent evolution.",
    r: "Both mammals independently developed a furred skin fold or gliding membrane (patagium) between their fore- and hindlimbs for arboreal gliding.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that gliding patagia evolved independently in marsupial sugar gliders (Australia) and placental flying squirrels (North America/Eurasia)."
  },
  {
    a: "The woodpecker finch (Camarhynchus pallidus) of the Galapagos Islands is renowned for its remarkable tool-using behavior.",
    r: "Because it lacks the long, barbed tongue of true woodpeckers, the woodpecker finch holds a cactus spine or twig in its beak to pry wood-boring insect grubs from tree bark crevices.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains how behavioral tool-use compensated for morphological limitations during adaptive radiation."
  },
  {
    a: "Allopatric speciation is the most common mode of speciation among sexually reproducing animal populations.",
    r: "Allopatric speciation is initiated when an ancestral population is physically separated into geographically isolated subpopulations by geographic barriers such as mountain ranges, rivers, or glaciers.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that geographic isolation cuts off gene flow, allowing isolated gene pools to accumulate independent mutations and diverge under distinct selection pressures."
  },
  {
    a: "Geographical isolation alone does not constitute speciation.",
    r: "Speciation is completed only when geographically separated populations accumulate sufficient genetic differences that produce irreversible biological reproductive isolation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains Ernst Mayr's biological species concept: speciation requires reproductive isolating mechanisms so that if populations rejoin, they cannot interbreed."
  },
  {
    a: "Prezygotic isolating mechanisms prevent the formation of hybrid zygotes between different species.",
    r: "Prezygotic barriers include ecological, temporal, behavioral, mechanical, and gametic isolation operating prior to fertilization.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the various biological and behavioral barriers that block mating or prevent gamete fusion."
  },
  {
    a: "Behavioral isolation (ethological isolation) prevents interbreeding between sympatric animal species.",
    r: "Females of a species recognize and respond exclusively to the unique courtship displays, nuptial songs, or sex pheromones produced by conspecific males.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Distinct courtship rituals (e.g. firefly flash patterns, bird mating dances, cricket songs) prevent heterospecific matings."
  },
  {
    a: "Mechanical isolation is often referred to as the 'lock and key' mechanism in insect reproduction.",
    r: "The intricate morphology of male genitalia matches only the corresponding female genital tract of the same species, physically preventing copulation between different species.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains Dufour's classic lock-and-key hypothesis of species-specific genital architecture in arthropods."
  },
  {
    a: "The mule, produced by crossing a female horse (mare) and a male donkey (jack), is a robust but sterile hybrid animal.",
    r: "Mule sterility is a postzygotic isolating mechanism caused by chromosome mismatch ($2n = 64$ in horses, $2n = 62$ in donkeys), resulting in failure of homologous pairing during gametic meiosis.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains hybrid sterility: the 63 chromosomes of the mule cannot properly synapse during meiotic prophase I, causing aneuploid, non-functional gametes."
  },
  {
    a: "Hybrid breakdown is a postzygotic isolating mechanism where first-generation ($F_1$) hybrids are viable and fertile, but subsequent $F_2$ or backcross generations are sterile, weak, or inviable.",
    r: "Recombination during gametogenesis in $F_1$ hybrids disrupts harmonious, co-adapted gene complexes present in the parental genomes.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the genetic mechanism underlying hybrid breakdown observed in crosses of Drosophila and cotton species."
  },
  {
    a: "Sympatric speciation can occur rapidly within a single generation in plants through polyploidy.",
    r: "Polyploidy immediately creates a postzygotic reproductive barrier because crosses between a newly formed polyploid and its diploid progenitor produce sterile triploid offspring.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that triploid ($3n$) hybrids fail meiosis due to unequal chromosome disjunction, genetically isolating the polyploid instantaneously."
  },
  {
    a: "The explosive radiation of cichlid fishes in Lake Victoria, Africa, is an extraordinary example of sympatric speciation and sexual selection.",
    r: "Hundreds of endemic cichlid species evolved within the continuous lake basin without physical geographic barriers, driven by microhabitat specialization and female mate choice for distinct male coloration.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that cichlids underwent rapid sympatric speciation mediated by niche partitioning and divergent sensory-drive sexual selection."
  },
  {
    a: "The marsupial mole and the placental golden mole represent convergent evolutionary counterparts.",
    r: "Both animals independently evolved shovel-like digging claws, rudimentary vestigial eyes, and cylindrical streamlined bodies for an underground burrowing lifestyle.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains convergent adaptations evolved independently by the Australian marsupial Notoryctes and the African placental Chrysochloris."
  },
  {
    a: "The numbat (banded anteater) of Australia and the giant anteater (Myrmecophaga) of South America are convergent analogues.",
    r: "Both mammals possess elongated tube-like snouts, a toothless jaw, and a long, sticky, worm-like tongue specialized for capturing colonial termites and ants.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason details the specialized myrmecophagous morphological suite developed independently through convergent natural selection."
  },
  {
    a: "Darwin's finches exhibit character displacement when two related species become sympatric on the same island.",
    r: "Competition for limited seed resources drives directional natural selection favoring divergence in beak sizes between the competing species, reducing interspecific competition.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains character displacement documented by Peter and Rosemary Grant: Geospiza fortis and G. fuliginosa have divergent beak depths on Santa Cruz, but overlapping depths where alone."
  },
  {
    a: "Gametic isolation between free-spawning marine invertebrates (e.g. sea urchins) is mediated by species-specific gamete surface recognition proteins.",
    r: "The sperm protein bindin binds only to complementary bindin receptors located on the vitelline envelope of conspecific eggs.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Biochemical incompatibility between sperm bindin and egg vitelline receptors prevents cross-species fertilization in seawater."
  },
  {
    a: "Parapatric speciation occurs between geographically contiguous populations sharing a narrow contact hybrid zone.",
    r: "Strong natural selection across an environmental gradient maintains genetic divergence despite low levels of ongoing gene flow across the border.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly describes parapatric speciation where divergence occurs along an ecological cline despite spatial contact."
  },
  {
    a: "Peripatric speciation is a specialized form of allopatric speciation involving a small peripheral founder population.",
    r: "Genetic drift and the founder effect act rapidly on small, isolated colonies at the periphery of a species' geographical range, accelerating speciation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains Ernst Mayr's peripatric model where rapid drift and strong divergent selection in small founder isolates drive rapid speciation."
  },
  {
    a: "Adaptive radiation typically occurs after a lineage colonizes an unexploited habitat or after mass extinction clears dominant competitor taxa.",
    r: "The availability of numerous unoccupied ecological niches ('ecological opportunity') releases the colonizing lineage from competitive exclusion, allowing rapid divergent speciation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains why mammals underwent massive adaptive radiation immediately following the K-Pg dinosaur extinction."
  },
  {
    a: "A hinny is the hybrid offspring of a cross between a female donkey (jenny) and a male horse (stallion).",
    r: "A mule and a hinny represent reciprocal interspecific crosses between horses and donkeys, and both are sterile due to meiotic chromosome mismatch.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains reciprocal hybridization: mare $\\times$ jack produces a mule, while jenny $\\times$ stallion produces a hinny; both are sterile ($2n = 63$)."
  },
  {
    a: "Seasonal (temporal) isolation between closely related frog species prevents interbreeding even when they share the same pond.",
    r: "Different species breed at distinct times of the year (e.g. Rana clamitans in summer vs Rana sylvatica in early spring), preventing overlapping reproductive seasons.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains temporal isolation where non-overlapping breeding phenology prevents hybrid zygote formation."
  },
  {
    a: "The biological species concept cannot be applied to asexual organisms and fossil taxa.",
    r: "Asexually reproducing organisms (like bacteria and obligate parthenogens) do not interbreed, and reproductive compatibility cannot be directly tested in extinct fossil remains.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the fundamental operational limitations of Ernst Mayr's Biological Species Concept."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-35: Darwin's Finches & Adaptive Radiation Core
addMcq(
  "The phenomenon wherein different species evolve in a given geographical area starting from a common point and radiating to other ecological habitats is defined as:",
  ["Adaptive radiation", "Convergent evolution", "Atavism", "Industrial melanism"],
  0,
  "According to NCERT, the evolution of diverse species in a geographic area starting from an ancestral point and radiating to diverse habitats is termed adaptive radiation."
);

addMcq(
  "Darwin's Finches are native to which geographically isolated archipelago located off the western coast of South America?",
  ["Galapagos Islands", "Hawaiian Islands", "Canary Islands", "Falkland Islands"],
  0,
  "The Galapagos Islands, an isolated volcanic archipelago belonging to Ecuador, provided the pristine natural laboratory where Darwin observed adaptive radiation in finches."
);

addMcq(
  "The ancestral finches that originally arrived on the Galapagos Islands from the South American mainland were predominantly:",
  ["Seed-eating ground finches", "Blood-drinking vampire finches", "Woodpecker tool-using finches", "Large fish-eating marine birds"],
  0,
  "The original colonists were ancestral seed-eating finches that flew or were blown from the South American mainland, subsequently diversifying into varied trophic niches."
);

addMcq(
  "Approximately how many distinct species of Darwin's finches evolved on the Galapagos Islands as a result of adaptive radiation?",
  ["About 14 species", "Over 5,000 species", "Only 2 species", "Exactly 100 species"],
  0,
  "Fourteen distinct finch species (classified into genera Geospiza, Camarhynchus, Certhidea, Pinaroloxias) evolved from the single mainland ancestral stock."
);

addMcq(
  "The primary anatomical structure that underwent dramatic morphological diversification in Darwin's finches to exploit different food sources was the:",
  ["Beak (size and shape)", "Wingspan", "Color of flight feathers", "Length of the tail"],
  0,
  "Beak morphology diversified dramatically—from thick, deep crushing beaks for tough seeds to slender probing beaks for insects and nectar."
);

addMcq(
  "Which species of Darwin's finch is famous for using cactus spines or small twigs as tools to probe and extract insect larvae from tree bark?",
  ["The Woodpecker finch (Camarhynchus pallidus)", "The Large ground finch (Geospiza magnirostris)", "The Warbler finch (Certhidea olivacea)", "The Vegetarian finch (Platyspiza crassirostris)"],
  0,
  "The woodpecker finch (Camarhynchus pallidus) lacks an anatomically long woodpecker tongue; it compensates by using cactus spines or twigs as tools to extract wood-boring grubs."
);

addMcq(
  "The Warbler finch (Certhidea olivacea) of the Galapagos Islands adapted to which specialized diet, reflected by its slender, needle-like beak?",
  ["Small flying insects caught on foliage and in air", "Large hard seeds of Tribulus cistoides", "Leaves and buds exclusively", "Nectar from giant saguaro cacti"],
  0,
  "Certhidea olivacea possesses a tiny, thin, sharp beak optimized for gleaning small, soft-bodied insects from leaves and twigs like a true warbler."
);

addMcq(
  "The Vegetarian finch (Platyspiza crassirostris) possesses a stout, curved, parrot-like beak specialized for feeding on:",
  ["Tree buds, leaves, flowers, and soft berries", "Hard-shelled seeds buried underground", "Blood of marine iguanas", "Living fish in tidal rock pools"],
  0,
  "The vegetarian finch possesses a heavy, curved, parrot-like bill utilized to clip and crush vegetative plant buds, flowers, and fleshy fruits."
);

addMcq(
  "Which Galapagos finch, inhabiting Wolf and Darwin islands, pecks at the skin of nesting seabirds (boobies) to drink their blood during times of severe drought?",
  ["Vampire ground finch (Geospiza difficilis septentrionalis)", "Warbler finch", "Vegetarian finch", "Mangrove finch"],
  0,
  "The vampire ground finch pecks at the feather bases of boobies until blood flows, drinking the nutrient- and water-rich blood to survive drought."
);

addMcq(
  "Long-term field studies by Peter and Rosemary Grant on Daphne Major demonstrated that natural selection on Geospiza fortis (medium ground finch) during severe drought caused:",
  ["A measurable increase in average beak depth, because only finches with deep beaks could crack the large, hard seeds of Tribulus", "The immediate extinction of all birds", "A transformation into hummingbirds", "The loss of all feathers"],
  0,
  "During the 1977 drought, soft small seeds vanished; birds with deeper, stronger beaks could crack tough Tribulus seeds, survived at higher rates, and passed deep-beak traits to offspring."
);

addMcq(
  "Adaptive radiation of Australian marsupials occurred within the Australian continent primarily because:",
  ["The continent was geographically isolated by continental drift before placental mammals evolved, leaving ecological niches open for marsupial diversification", "Australia has no vegetation", "Marsupials swam across the ocean from Africa", "Placental mammals cannot survive warm temperatures"],
  0,
  "Continental isolation in the Mesozoic protected Australia from competition with modern placental mammals, permitting marsupials to radiate and fill all terrestrial niches."
);

addMcq(
  "Which Australian marsupial occupies the ecological niche equivalent to the placental wolf as an apex cursorial predator?",
  ["Tasmanian wolf (Thylacinus cynocephalus)", "Koala", "Wombat", "Kangaroo"],
  0,
  "The Tasmanian wolf (Thylacine) evolved a dog-like skull, canine teeth, and cursorial hunting gait, occupying the apex carnivorous niche equivalent to placental wolves."
);

addMcq(
  "Which Australian marsupial is the ecological counterpart of the placental anteater, possessing an elongated snout and vermiform tongue to eat termites?",
  ["Numbat (Banded anteater / Myrmecobius fasciatus)", "Tasmanian devil", "Sugar glider", "Kangaroo rat"],
  0,
  "The numbat (Myrmecobius fasciatus) is a diurnal marsupial with 50-52 degenerate teeth and a long sticky tongue specialized for consuming up to 20,000 termites per day."
);

addMcq(
  "The Sugar glider (Petaurus breviceps) of Australia is a marsupial that corresponds to which placental mammal counterpart through convergent evolution?",
  ["Flying squirrel (Glaucomys)", "Placental mole", "Bobcat", "Spotted hyena"],
  0,
  "Both the Australian marsupial sugar glider and the North American placental flying squirrel evolved gliding patagial membranes between their limbs for arboreal locomotion."
);

addMcq(
  "The Spotted cuscus (an Australian marsupial) corresponds ecologically and morphologically to which placental mammal?",
  ["Lemur", "Wolf", "Anteater", "Mole"],
  0,
  "According to NCERT Class 12 Biology, the placental Lemur matches the Australian marsupial Spotted cuscus through convergent adaptive radiation."
);

addMcq(
  "The Tasmanian tiger cat (Dasyurus maculatus) is the marsupial ecological equivalent of which placental mammal?",
  ["Bobcat", "Wolf", "Flying squirrel", "Anteater"],
  0,
  "NCERT explicitly pairs the placental Bobcat with the Australian marsupial Tasmanian tiger cat (Dasyurus) as convergent analogues."
);

addMcq(
  "The Marsupial mole (Notoryctes typhlops) exhibits striking convergent evolution with the placental mole because both possess:",
  ["Enlarged spade-like digging claws, vestigial eyes, and silky fur lacking directional nap for subterranean burrowing", "Prehensile grasping tails for tree climbing", "Large feathered wings for flying", "Venomous fangs for snake hunting"],
  0,
  "Both moles spend their lives burrowing through soil/sand, independently evolving cylindrical streamlined bodies, clawed forepaws, and reduced non-functional eyes."
);

addMcq(
  "According to NCERT, when more than one adaptive radiation appears to have occurred in an isolated geographical area (representing different habitats), one can call this:",
  ["Convergent evolution", "Divergent evolution", "Retrogressive evolution", "Artificial selection"],
  0,
  "NCERT states: 'When more than one adaptive radiation appeared to have occurred in an isolated geographical area (representing different habitats), one can call this convergent evolution.'"
);

addMcq(
  "Which Hawaiian bird family is renowned for exhibiting an adaptive radiation comparable to Darwin's finches, with over 50 species evolving from a single finch ancestor?",
  ["Hawaiian honeycreepers (Drepanidinae)", "Emus", "Penguins", "Ostriches"],
  0,
  "Hawaiian honeycreepers radiated into specialized seed-eaters, bark-gleaners, and long-curved nectar-feeders (e.g. Iiwi) matching tubular native lobelioid flowers."
);

addMcq(
  "Why are islands (such as Galapagos, Hawaii, and Madagascar) classic hotspots for observing adaptive radiation?",
  ["They provide geographical isolation, abundant unoccupied ecological niches, and an absence of mainland predators and competitors", "They have radioactive soil that causes rapid mutations", "They have zero plant life", "They were created yesterday"],
  0,
  "Islands offer ecological opportunity: colonizing founder species arrive in species-poor environments with diverse vacant niches, driving rapid divergent speciation."
);

// 21-50: Biological Species Concept & Speciation Modes
addMcq(
  "The Biological Species Concept, which defines a species as groups of actually or potentially interbreeding natural populations reproductively isolated from other such groups, was formulated by:",
  ["Ernst Mayr", "Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck"],
  0,
  "Ernst Mayr (1942, 'Systematics and the Origin of Species') established the Biological Species Concept (BSC), placing reproductive isolation at the center of speciation."
);

addMcq(
  "Allopatric speciation is primarily driven by which initial evolutionary event?",
  ["Geographical separation of an ancestral population by a physical barrier (e.g. river, mountain, glacier)", "Sudden chromosome doubling within a single plant", "Change in diet without physical separation", "Infection by a single virus"],
  0,
  "Allopatric (allos = other, patra = homeland) speciation begins with physical geographical fragmentation of a population, completely blocking gene flow."
);

addMcq(
  "Sympatric speciation is defined as the emergence of reproductive isolation and new species:",
  ["Within the same geographical territory without physical geographical separation", "On opposite sides of a vast ocean", "Only after complete extinction of the parent species", "Through direct human selective breeding in zoos"],
  0,
  "Sympatric (sym = together, patra = homeland) speciation occurs when reproductive isolating barriers arise within the shared geographic range of a single population."
);

addMcq(
  "The formation of the Isthmus of Panama approximately 3 million years ago split marine populations into Pacific and Caribbean sister species (such as snapping shrimps, Alpheus). This is a textbook example of:",
  ["Allopatric speciation via vicariance", "Sympatric speciation via polyploidy", "Atavism", "Artificial selection"],
  0,
  "A geological barrier (the rise of the Panama land bridge) divided a continuous marine population into isolated Pacific and Caribbean populations (vicariant allopatric speciation)."
);

addMcq(
  "What is the difference between allopatric speciation by 'vicariance' and by 'dispersal' (founder effect)?",
  ["Vicariance involves a newly formed geological barrier dividing a pre-existing range, whereas dispersal involves a small colony crossing a pre-existing barrier into a new habitat", "Vicariance occurs only in plants, dispersal only in animals", "Vicariance happens in 10 minutes", "Dispersal requires human transportation"],
  0,
  "In vicariance, a geographical event (e.g. mountain uplift, continental drift) splits a range; in dispersal/peripatry, founder individuals cross an existing barrier to colonize a new area."
);

addMcq(
  "Parapatric speciation occurs when two diverging populations:",
  ["Inhabit contiguous, adjoining geographical zones sharing a common border (hybrid zone) along an environmental gradient", "Live on completely different continents", "Are identical in every gene", "Never come within 1,000 miles of each other"],
  0,
  "In parapatric speciation, diverging populations occupy adjacent ecological zones; natural selection across the boundary outweighs limited gene flow across the hybrid zone."
);

addMcq(
  "Ring species (such as the Ensatina salamanders around California's Central Valley or the Larus gulls around the Arctic Ocean) demonstrate that:",
  ["Geographically adjacent populations can interbreed, but terminal populations that circle back and meet act as reproductively isolated distinct species", "All salamanders are identical worldwide", "Speciation occurs only in straight lines", "Animals cannot walk around mountains"],
  0,
  "A ring species is a circular chain of interbreeding populations where neighboring demes interbreed, but the two terminal ends overlap without interbreeding, illustrating gradual speciation in space."
);

addMcq(
  "Which mode of speciation occurs when a small, isolated colony at the periphery of a species' range undergoes rapid genetic drift and divergent selection?",
  ["Peripatric speciation", "Sympatric speciation", "Polyploid speciation", "Artificial speciation"],
  0,
  "Peripatric speciation (a sub-category of allopatric speciation) involves small peripheral founder populations where genetic drift accelerates rapid divergence from the ancestral gene pool."
);

addMcq(
  "In Lake Victoria and Lake Malawi in East Africa, hundreds of endemic species of which fish group underwent explosive sympatric speciation within a few thousand years?",
  ["Cichlid fishes", "Trout", "Salmon", "Sharks"],
  0,
  "African rift lake cichlids represent the most spectacular explosive adaptive radiation and sympatric speciation in vertebrates, producing over 500 species with specialized feeding morphologies."
);

addMcq(
  "Polyploidy (autopolyploidy or allopolyploidy) is a major driver of instantaneous sympatric speciation especially in:",
  ["Angiosperm flowering plants", "Mammals", "Birds", "Reptiles"],
  0,
  "Over 50-70% of flowering plants have polyploid ancestry; genome duplication immediately causes meiotic incompatibility with parent diploids, creating new species in one step."
);

// 51-80: Isolating Mechanisms (Prezygotic vs Postzygotic)
addMcq(
  "Reproductive isolating mechanisms are biologically categorized into which two major classes?",
  ["Prezygotic and Postzygotic mechanisms", "Active and Passive mechanisms", "Cellular and Humoral mechanisms", "Darwinian and Lamarckian mechanisms"],
  0,
  "Reproductive barriers are classified based on whether they act before zygote formation (prezygotic) or after fertilization (postzygotic)."
);

addMcq(
  "Which of the following is a PREZYGOTIC isolating mechanism?",
  ["Behavioral (ethological) isolation", "Hybrid sterility", "Hybrid inviability", "Hybrid breakdown"],
  0,
  "Behavioral isolation operates before mating occurs by preventing courtship and copulation; hybrid inviability, sterility, and breakdown are all postzygotic."
);

addMcq(
  "Which of the following is a POSTZYGOTIC isolating mechanism?",
  ["Hybrid sterility (e.g. in mules)", "Temporal isolation", "Mechanical isolation", "Gametic isolation"],
  0,
  "Hybrid sterility occurs after a hybrid zygote has successfully formed, developed, and matured into an adult that cannot produce functional gametes."
);

addMcq(
  "Two species of spadefoot toads (Scaphiopus) inhabit the same desert region, but one breeds only in temporary rain pools while the other breeds only in permanent streams. This is an example of:",
  ["Ecological (habitat) isolation", "Mechanical isolation", "Hybrid sterility", "Gametic incompatibility"],
  0,
  "Habitat or ecological isolation occurs when two sympatric species occupy different breeding microhabitats within the same broad geographic territory."
);

addMcq(
  "The American toad (Anaxyrus americanus) breeds in early spring, whereas the Fowler's toad (Anaxyrus fowleri) breeds in late summer. This reproductive barrier exemplifies:",
  ["Temporal (seasonal) isolation", "Behavioral isolation", "Mechanical isolation", "Hybrid breakdown"],
  0,
  "Temporal isolation occurs when two closely related sympatric species mate at different times of the year, seasons, or hours of the day."
);

addMcq(
  "Female fireflies (Photinus) respond only to the specific rhythmic flashing light codes and pulse intervals emitted by males of their own species. This reproductive barrier is:",
  ["Behavioral (ethological) isolation", "Mechanical isolation", "Ecological isolation", "Hybrid inviability"],
  0,
  "Species-specific visual, acoustic, or chemical courtship signals prevent females from mating with heterospecific males, establishing behavioral isolation."
);

addMcq(
  "In two species of damselflies, the male claspers fit only the matching dorsal thoracic grooves of conspecific females during mating flight. Interspecific copulation is physically impossible due to:",
  ["Mechanical isolation ('lock-and-key' incompatibility)", "Temporal isolation", "Gametic isolation", "Hybrid sterility"],
  0,
  "Mechanical isolation occurs when anatomical incompatibilities between male and female copulatory organs prevent physical copulation and sperm transfer."
);

addMcq(
  "In free-spawning marine sea urchins (Strongylocentrotus purpuratus and S. franciscanus), sperm and eggs are released into the same ocean water, but cross-fertilization does not occur because of:",
  ["Gametic isolation mediated by species-specific bindin-receptor recognition proteins", "Behavioral isolation", "Mechanical isolation", "Temporal isolation"],
  0,
  "The sperm acrosomal protein bindin binds only to the species-specific carbohydrate receptor on the vitelline envelope of conspecific eggs, preventing heterospecific fertilization."
);

addMcq(
  "When sheep ($2n = 54$) and goats ($2n = 60$) mate, fertilization occurs and hybrid embryos develop, but the embryos consistently die in utero before birth. This postzygotic barrier is:",
  ["Hybrid inviability", "Hybrid sterility", "Gametic isolation", "Behavioral isolation"],
  0,
  "Hybrid inviability occurs when genetic incompatibilities between parental genomes disrupt embryonic developmental programs, leading to early spontaneous abortion or lethal deformities."
);

addMcq(
  "A mule is the interspecific hybrid produced by crossing:",
  ["A male donkey (jack) and a female horse (mare)", "A female donkey and a male horse", "A male zebra and a female horse", "A donkey and a zebra"],
  0,
  "A mule is produced by mating a male donkey (jackass) with a female horse (mare); the reciprocal cross is a hinny."
);

addMcq(
  "A hinny is the interspecific hybrid produced by crossing:",
  ["A male horse (stallion) and a female donkey (jenny)", "A male donkey and a female horse", "A zebra and a horse", "A camel and a llama"],
  0,
  "A hinny is the hybrid offspring of a male horse (stallion) and a female donkey (jenny)."
);

addMcq(
  "Why is the mule sterile?",
  ["Horses have 64 chromosomes and donkeys have 62; the mule inherits 63 chromosomes, which cannot pair properly during meiotic prophase I", "Mules have no reproductive organs", "Mules die before reaching sexual maturity", "Mules lack a pituitary gland"],
  0,
  "With 32 horse chromosomes and 31 donkey chromosomes ($2n = 63$), homologous chromosome synapsis in prophase I fails, arresting gametogenesis."
);

addMcq(
  "When two species of cotton (Gossypium barbadense and G. hirsutum) are crossed, the $F_1$ hybrids are vigorous and fertile, but the $F_2$ generation plants are stunted, sickly, and largely inviable. This is:",
  ["Hybrid breakdown", "Hybrid inviability", "Hybrid sterility", "Mechanical isolation"],
  0,
  "Hybrid breakdown occurs when genetic recombination in $F_1$ hybrids disrupts harmonious epistatic gene combinations, causing deleterious phenotypes in $F_2$ or backcross generations."
);

addMcq(
  "Haldane's Rule regarding postzygotic hybrid incompatibility states that:",
  ["When in the $F_1$ offspring of two different animal races, one sex is absent, rare, or sterile, that sex is the heterogametic sex (e.g. XY or ZW)", "All hybrids are always female", "Males never evolve", "Mules are always fertile"],
  0,
  "J.B.S. Haldane formulated the rule (1922) that the heterogametic sex (XY males in mammals/Drosophila, ZW females in birds/butterflies) is most vulnerable to hybrid sterility or inviability."
);

addMcq(
  "The Dobzhansky-Muller model explains the genetic basis of hybrid incompatibility through:",
  ["Incompatible epistatic interactions between diverging alleles at two or more loci that have never been tested together in the same genome", "Direct chromosomal destruction by solar radiation", "Viral infection of the placenta", "The sudden loss of all ribosomes"],
  0,
  "Locus A evolves allele $A_2$ in population 1 while locus B evolves allele $B_2$ in population 2; in hybrids, the novel $A_2B_2$ combination is biochemically incompatible, causing sterility/death."
);

// 81-110: Convergent Pairs & Ecological Counterparts
addMcq(
  "Which placental mammal corresponds to the Australian marsupial Wombat through convergent evolution?",
  ["Placental Groundhog (Woodchuck / Marmot)", "Placental Wolf", "Placental Anteater", "Placental Lemur"],
  0,
  "The herbivorous, burrowing Australian marsupial wombat occupies the exact ecological niche of placental marmots/groundhogs, possessing similar stocky bodies and rodent-like incisors."
);

addMcq(
  "The Australian marsupial Bandicoot is an ecological counterpart of which placental mammal?",
  ["Placental Bandicoot-like rodents and shrews", "Placental Wolf", "Placental Tiger", "Placental Whale"],
  0,
  "Bandicoots are small, omnivorous marsupials that probe leaf litter for invertebrates, converging upon the niche of placental hedgehogs, tenrecs, and large ground shrews."
);

addMcq(
  "The giant panda (order Carnivora) and the red panda (family Ailuridae) both possess an enlarged radial sesamoid bone on their forepaws acting as a 'false thumb' for stripping bamboo. This is:",
  ["Convergent evolution (independent adaptation for bamboo foraging)", "Homology directly inherited from an immediate common ancestor", "A vestigial organ with zero grasping utility", "An atavistic mutation found in one zoo animal"],
  0,
  "The radial sesamoid 'false thumb' evolved independently in giant pandas (bear family Ursidae) and red pandas (musteloid superfamily Ailuridae) as a convergent adaptation for grasping bamboo stalks."
);

addMcq(
  "Streamlined fusiform body shape with dorsal fins, counter-shaded coloration, and powerful tails in sharks, ichthyosaurs (extinct reptiles), and dolphins represents:",
  ["Convergent evolution across three different vertebrate classes (Chondrichthyes, Reptilia, Mammalia)", "Divergent evolution from a common swimming whale", "Homology inherited from ancestral birds", "Vestigial evolution"],
  0,
  "High-speed pelagic swimming imposes strict hydrodynamic constraints; sharks, fossil marine ichthyosaurs, and modern dolphins independently converged upon the identical streamlined body plan."
);

addMcq(
  "Cacti (family Cactaceae) in North and South American deserts and spurges (genus Euphorbia, family Euphorbiaceae) in African deserts both have fleshy succulent stems and spines. This is:",
  ["Convergent evolution of desert xerophytic adaptations", "Divergent evolution from an ancestral cactus", "Homologous leaves", "Atavistic reversion"],
  0,
  "American Cactaceae and African Euphorbiaceae independently evolved thick, water-storing succulent green stems and protective spines to withstand arid desert droughts."
);

addMcq(
  "Anolis lizards on Caribbean islands (Cuba, Hispaniola, Jamaica, Puerto Rico) independently radiated into identical ecomorphs (trunk-ground, twig, crown-giant, grass-bush). This represents:",
  ["Replicated adaptive radiation and convergent evolution across multiple islands", "A single species flying between islands every year", "Human breeding experiments", "Spontaneous generation on each island"],
  0,
  "On each major Caribbean island, ancestral Anolis lizards independently radiated into the exact same specialized structural ecomorphs (twig, canopy, trunk-ground specialists), demonstrating replicated adaptive radiation."
);

addMcq(
  "The concept of 'ecological release' in adaptive radiation refers to:",
  ["The expansion of a species' niche and diversification following colonization of an area free of competitors and predators", "The release of chemical pollutants into soil", "The death of all animals in a zoo", "The extinction of plants"],
  0,
  "When a founder population reaches an island devoid of mainland competitors, it experiences ecological release: niche constraints relax, permitting exploitation of diverse new resources."
);

addMcq(
  "Character displacement among competing species serves to:",
  ["Minimize interspecific competition and promote ecological coexistence by driving divergent morphological traits in sympatry", "Cause both species to merge into one", "Increase physical fighting between individuals", "Destroy all available food resources"],
  0,
  "In sympatry, natural selection favors individuals whose feeding morphology minimizes resource competition with the competitor, driving divergent character displacement."
);

addMcq(
  "Which term designates a geographical area where two distinct, diverging species or semi-species meet, mate, and produce hybrid offspring?",
  ["Hybrid zone", "Ecological desert", "Continental shelf", "Abyssal trench"],
  0,
  "A hybrid zone is a narrow geographic band where parapatric populations meet, interbreed, and produce hybrids, serving as natural laboratories for studying speciation."
);

addMcq(
  "Reinforcement (the Wallace effect) during speciation refers to:",
  ["Natural selection strengthening prezygotic isolating barriers between diverging populations to prevent production of unfit hybrid offspring", "The human enforcement of wildlife laws", "Adding chemical fertilizers to hybrid plants", "The building of physical concrete walls between species"],
  0,
  "When postzygotic isolation makes hybrids sterile or inviable, natural selection favors individuals that avoid mating with heterospecifics, reinforcing prezygotic barriers."
);

// 111-154: Advanced concepts, matches, and NCERT deep dive
addMcq(
  "Match the placental mammal in Column I with its convergent Australian marsupial counterpart in Column II:\nColumn I:\n(A) Anteater\n(B) Lemur\n(C) Flying squirrel\n(D) Bobcat\nColumn II:\n(1) Spotted cuscus\n(2) Numbat (Banded anteater)\n(3) Tasmanian tiger cat\n(4) Flying phalanger (Sugar glider)",
  ["A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-3, B-4, C-1, D-2", "A-4, B-3, C-2, D-1"],
  0,
  "Anteater corresponds to Numbat (A-2); Lemur corresponds to Spotted cuscus (B-1); Flying squirrel corresponds to Flying phalanger (C-4); Bobcat corresponds to Tasmanian tiger cat (D-3)."
);

addMcq(
  "Match the placental mammal in Column I with its convergent marsupial counterpart in Column II:\nColumn I:\n(A) Mole\n(B) Mouse\n(C) Wolf\nColumn II:\n(1) Tasmanian wolf\n(2) Marsupial mole\n(3) Marsupial mouse",
  ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-3, B-1, C-2", "A-2, B-1, C-3"],
  0,
  "Placental Mole corresponds to Marsupial mole (A-2); Mouse corresponds to Marsupial mouse (B-3); Wolf corresponds to Tasmanian wolf (C-1)."
);

addMcq(
  "According to NCERT Class 12 Biology, which of the following is NOT an Australian marsupial?",
  ["Placental Lemur", "Tasmanian wolf", "Tiger cat", "Sugar glider"],
  0,
  "Lemur is a placental primate native to Madagascar; the other three are endemic Australian marsupials."
);

addMcq(
  "Which ecological factor is primarily responsible for the radiation of beak sizes in Geospiza fortis on the Galapagos Islands?",
  ["Variation in the size, hardness, and abundance of seed species available during wet and drought years", "Changes in ocean water salinity", "The temperature of volcanic lava", "The color of tree bark"],
  0,
  "Fluctuations in seed dimensions and seed coat hardness driven by El Niño rainfall and La Niña droughts represent the primary selective agent shaping finch beak morphology."
);

addMcq(
  "The ancestral lineage of Darwin's finches belongs to which avian family?",
  ["Thraupidae (Tanagers)", "Psittacidae (Parrots)", "Strigidae (Owls)", "Spheniscidae (Penguins)"],
  0,
  "Molecular phylogenetic sequencing proved that Darwin's finches are not true finches (Fringillidae), but a specialized clade of tanagers (Thraupidae) derived from South American ancestors."
);

addMcq(
  "Which gene has been identified by evolutionary developmental biologists (Abzhanov and Tabin) as a primary controller of beak depth and width in Darwin's finches?",
  ["Bone Morphogenetic Protein 4 (BMP4)", "Insulin gene", "Hemoglobin beta gene", "Rhodopsin gene"],
  0,
  "Differences in the timing and expression levels of BMP4 in embryonic beak mesenchyme directly correlate with deep, heavy crushing beaks in Geospiza species."
);

addMcq(
  "Which gene controls the length and slender pointedness of beaks in Darwin's finches (such as in cactus finches)?",
  ["Calmodulin (CaM)", "Keratin gene", "Actin gene", "Myoglobin gene"],
  0,
  "Calmodulin is upregulated in the beaks of cactus finches; higher calmodulin expression correlates with elongated, probing beak shapes."
);

addMcq(
  "In allopatric speciation, what evolutionary force primarily drives the genetic divergence between isolated populations?",
  ["A combination of natural selection adapting populations to different local environments and random genetic drift", "Continuous gene flow between populations", "Complete cessation of all mutations", "Human cloning"],
  0,
  "In the absence of gene flow, isolated gene pools diverge through natural selection favoring local adaptations, compounded by stochastic genetic drift."
);

addMcq(
  "The biological species concept defines species boundaries based on:",
  ["Gene flow and reproductive isolation", "Color patterns on the skin exclusively", "Body mass in kilograms", "Geographical altitude"],
  0,
  "Ernst Mayr's biological species concept defines a species by the presence of intrinsic barriers to gene flow with other populations (reproductive isolation)."
);

addMcq(
  "In which scenario is the biological species concept IMPOSSIBLE to apply directly?",
  ["Extinct fossil trilobites in Paleozoic strata", "Modern African lions and Indian tigers", "Horses and donkeys in captivity", "Human populations"],
  0,
  "Fossil organisms cannot be tested for reproductive interbreeding in nature; paleontologists must rely on the Morphological Phylogenetic Species Concept."
);

addMcq(
  "Why are lions (Panthera leo) and tigers (Panthera tigris) considered separate biological species even though they can produce 'ligers' and 'tigons' in captivity?",
  ["In nature, their geographical ranges, habitats, and mating behaviors do not overlap, and captive male hybrids are sterile", "They have identical DNA", "They live in the same pride in Africa", "They are identical in morphology"],
  0,
  "Lions and tigers are ecologically and behaviorally isolated in nature (open savannah vs dense forest); male ligers and tigons are consistently sterile, satisfying the BSC."
);

addMcq(
  "The term 'cline' in evolutionary biology designates:",
  ["A gradual continuous change in an inherited phenotypic or genetic character across a geographic gradient", "An instantaneous mutation", "A mass extinction event", "A species of fossil horse"],
  0,
  "A cline (Julian Huxley) is a spatial gradient in a morphological or allelic frequency (e.g. Bergmann's rule where body size increases with latitude)."
);

addMcq(
  "Bergmann's Rule states that in widely distributed warm-blooded (endothermic) vertebrate species:",
  ["Populations in colder climates tend to have larger body sizes to minimize heat loss (lower surface-area-to-volume ratio)", "Populations in cold climates are always microscopic", "Desert animals are always blue", "Animals in the tropics have thicker fur"],
  0,
  "Larger body size decreases the ratio of surface area to body volume, reducing heat dissipation in cold high-latitude climates (Bergmann's ecogeographic rule)."
);

addMcq(
  "Allen's Rule states that in endothermic animals, extremities (such as ears, tails, and limbs):",
  ["Are shorter in colder climates to minimize surface heat loss, and longer in hot climates to facilitate heat dissipation", "Are always missing in mammals", "Are longest in polar bears", "Never vary across geographical regions"],
  0,
  "Allen's rule demonstrates that mammals in polar habitats (e.g. Arctic fox) have shorter ears and limbs than desert counterparts (e.g. Fennec fox) to conserve thermal energy."
);

addMcq(
  "Gloger's Rule observes that within a warm-blooded species, individuals living in warm, humid tropical environments tend to have:",
  ["More heavily pigmented, darker skin and plumage (increased melanin) than those in arid or cold regions", "Completely white albino skin", "No skin pigment at all", "Translucent skin"],
  0,
  "Gloger's rule notes that warm, humid environments favor heavy melanin pigmentation, providing photoprotection and resistance against feather-degrading microbes."
);

addMcq(
  "The phenomenon of 'sympatric speciation by host shift' is famously documented in North America in:",
  ["The Apple maggot fly (Rhagoletis pomonella)", "Galapagos finches", "Australian kangaroos", "African lions"],
  0,
  "Rhagoletis pomonella historically fed on native hawthorn fruits; with the introduction of domestic apples, a subpopulation shifted to apples, evolving temporal and mating isolation."
);

addMcq(
  "Why does reproductive isolation evolve faster between populations in allopatry than in sympatry?",
  ["Because physical geographic isolation completely cuts off gene flow, preventing the homogenizing effect of hybridization while differences accumulate", "Because allopatric populations have no DNA", "Because sympatric populations are always sterile", "Because geographical barriers cause high radiation"],
  0,
  "Gene flow acts as an evolutionary homogenizer; eliminating gene flow via geographic barriers allows divergent selection and drift to establish reproductive barriers unimpeded."
);

addMcq(
  "Which evolutionary process is responsible for the striking functional resemblance between the streamlined body of an extinct ichthyosaur (reptile) and a modern shark (fish)?",
  ["Convergent evolution", "Adaptive radiation from a shared ancestor", "Atavistic reversion", "Sympatric speciation"],
  0,
  "Pelagic aquatic predators converge upon streamlined, torpedo-shaped fusiform bodies with dorsal stabilization fins to minimize hydrodynamic turbulence and drag."
);

addMcq(
  "Which of the following is considered an essential prerequisite for adaptive radiation to occur?",
  ["Ecological opportunity (unoccupied niches or extinction of competitors) and key evolutionary innovations", "A completely frozen planet", "Immediate nuclear radiation", "The total absence of all sunlight"],
  0,
  "Adaptive radiation requires: (1) ecological opportunity (empty niches in new environments or after mass extinctions), and (2) evolutionary traits (key innovations) that permit niche exploitation."
);

addMcq(
  "The placental Wolf and the marsupial Tasmanian wolf share similar skulls, teeth, and hunting habits. This is a classic demonstration of:",
  ["Analogy and convergent evolution", "Homology and divergent evolution", "Speciation without adaptation", "Atavism in mammals"],
  0,
  "Unrelated placental eutherians and Australian marsupials independently evolved canid hunting morphologies in response to apex predatory niches (convergent analogy)."
);


const extra79Mcqs = [
  [
    "The adaptive radiation of lemurs on the island of Madagascar is exemplified by the Aye-aye (Daubentonia madagascariensis), which occupies the ecological niche of a:",
    [
      "Woodpecker, using an extraordinarily elongated, wire-like middle digit to tap wood and extract beetle larvae",
      "Grazing horse",
      "Carnivorous hawk",
      "Burrowing mole"
    ],
    0,
    "Madagascar lacks native woodpeckers; the aye-aye evolved rodent-like continuously growing incisors and an elongated middle finger to tap trunks and extract wood-boring larvae."
  ],
  [
    "The adaptive radiation of placental mammals exploded during which geological epoch following the extinction of non-avian dinosaurs?",
    [
      "Paleocene and Eocene epochs of the Cenozoic Era",
      "Cambrian period",
      "Silurian period",
      "Carboniferous period"
    ],
    0,
    "Following the K-Pg boundary extinction (~66 mya), surviving small mammalian ancestors underwent rapid adaptive radiation to occupy vacant terrestrial, aerial, and aquatic niches."
  ],
  [
    "The evolution of cetaceans (whales, dolphins) from terrestrial artiodactyls (even-toed ungulates) and bats (Chiroptera) from insectivorous arboreal mammals are prime examples of:",
    [
      "Adaptive radiation into macro-ecological zones (aquatic and aerial niches)",
      "Atavism",
      "Hybrid breakdown",
      "Artificial selection"
    ],
    0,
    "Mammalian macro-evolution represents adaptive radiation on a grand scale, modifying ancestral tetrapod body plans to colonize the open ocean (whales) and skies (bats)."
  ],
  [
    "The Hawaiian silversword alliance (family Asteraceae) is a classic botanical example of adaptive radiation where:",
    [
      "Over 30 diverse plant species (ranging from alpine rosette shrubs to rainforest trees and desert vines) evolved from a single tarweed ancestor",
      "Plants transformed into birds",
      "Cacti evolved into marine kelp",
      "Seeds flew back to the mainland"
    ],
    0,
    "Derived from a single colonizing Pacific coast tarweed, the Hawaiian silversword alliance radiated across Hawaiian volcanic slopes into wildly divergent morphological growth forms."
  ],
  [
    "The Cocos Island finch (Pinaroloxias inornata) is the only Darwin's finch that does not live on the Galapagos archipelago; it is endemic to Cocos Island and is unique because:",
    [
      "It retains generalist, plastic foraging behaviors across diverse food types rather than specialized morphological radiation on a single island",
      "It possesses four legs",
      "It has no feathers",
      "It lays eggs in volcanic lava"
    ],
    0,
    "Unlike the multi-island Galapagos archipelago that promoted allopatric speciation, solitary Cocos Island hosts a single finch species displaying individual behavioral niche specialization."
  ],
  [
    "On the Galapagos, the Large Ground Finch (Geospiza magnirostris) possesses a massive, deep bill measuring up to 15 mm in depth, adapted specifically for:",
    [
      "Cracking extremely large, hard, woody seeds (such as Caltrop / Tribulus cistoides)",
      "Catching fast-flying mosquitoes in flight",
      "Extracting nectar from deep tubular flowers",
      "Eating green leaves and buds exclusively"
    ],
    0,
    "The massive, blunt beak of G. magnirostris generates immense bite force, allowing it to crack open the heavily armored mericarps of Tribulus cistoides."
  ],
  [
    "The Small Ground Finch (Geospiza fuliginosa) coexists on the same island with G. magnirostris and G. fortis because its small, sharp beak specializes in feeding on:",
    [
      "Tiny, soft grass seeds and small fallen seeds that larger finches ignore",
      "Living sea turtles",
      "Hard tree bark",
      "Giant woody seeds"
    ],
    0,
    "Differences in beak depth allow sympatric ground finch species to partition seed resources by size and hardness, preventing competitive exclusion."
  ],
  [
    "The Mangrove finch (Camarhynchus heliobates), one of the rarest Darwin's finches, is restricted to:",
    [
      "Dense coastal mangrove swamps where it probes decaying wood and mangrove foliage for caterpillars and spiders",
      "High dry volcanic mountain peaks",
      "Open oceanic waves",
      "Sandy cactus deserts exclusively"
    ],
    0,
    "The critically endangered mangrove finch is specialized for foraging within dense Rhizophora mangrove swamps along tidal estuaries on Isabela and Fernandina."
  ],
  [
    "In adaptive radiation, the term 'key innovation' refers to:",
    [
      "A novel phenotypic trait that unlocks previously inaccessible ecological resources and triggers rapid lineage diversification",
      "A chemical weapon used in warfare",
      "A physical key made of iron",
      "A mutation that causes immediate sterility"
    ],
    0,
    "Key innovations (such as flight feathers in birds, pharyngeal jaws in cichlid fishes, or angiosperm flowers) allow organisms to exploit brand-new adaptive zones."
  ],
  [
    "Pharyngeal jaws in cichlid fishes of the African Great Lakes act as a key evolutionary innovation because:",
    [
      "They decouple prey capture by oral jaws from food mastication/processing by pharyngeal jaws, allowing explosive trophic specialization",
      "They allow fish to breathe air on land",
      "They replace the heart",
      "They are used to sting predators"
    ],
    0,
    "Having a second, highly mobile set of tooth-bearing pharyngeal jaws freed the primary mouth jaws to specialize in food acquisition (scraping algae, plucking scales, crushing shells)."
  ],
  [
    "The Tasmanian devil (Sarcophilus harrisii) is an Australian marsupial that occupies which ecological trophic niche?",
    [
      "A nocturnal carnivorous scavenger with exceptionally powerful bone-crushing jaws",
      "A docile fruit-eating grazer",
      "An underground blind mole",
      "An aerial insect hunter"
    ],
    0,
    "The Tasmanian devil is the largest extant carnivorous marsupial, characterized by an exceptionally high bite-force-to-body-mass ratio that enables it to consume whole carcasses, including bones."
  ],
  [
    "The Koala (Phascolarctos cinereus) is an Australian arboreal marsupial displaying extreme dietary specialization by feeding almost exclusively on:",
    [
      "Fibrous, toxic, eucalyptus leaves that are digested with the help of a 2-meter-long, microbe-rich caecum",
      "Insects and earthworms in soil",
      "Living fish in mountain rivers",
      "Sweet nectar from desert cacti"
    ],
    0,
    "Koalas are specialized folivores that subsist on nutrient-poor eucalyptus foliage, possessing specialized hepatic detoxification enzymes and an expanded fermentative caecum."
  ],
  [
    "The Red Kangaroo (Macropus rufus) is the ecological equivalent of which placental ungulate in grasslands?",
    [
      "Placental antelopes and deer (large cursorial herbivorous grazers)",
      "Placental bats",
      "Placental moles",
      "Placental whales"
    ],
    0,
    "Large macropods (kangaroos) occupy the grazing herbivore niche filled on other continents by placental ruminants (antelopes, deer), evolving high-efficiency hopping locomotion."
  ],
  [
    "The Australian marsupial Bandicoot (order Peramelemorphia) possesses which characteristic anatomical adaptation for digging?",
    [
      "Syndactylous second and third hind digits and powerful forepaws for digging conical foraging pits in soil",
      "Large leathery flying wings",
      "Fins like a dolphin",
      "A long neck like a giraffe"
    ],
    0,
    "Bandicoots are ground-dwelling marsupials with strong clawed forefeet and fused hind toes (syndactyly) used to dig up soil insects, fungi, and tubers."
  ],
  [
    "Which placental predator corresponds to the marsupial Native Cat (Quoll / Dasyurus) through convergent evolution?",
    [
      "Placental Weasel, Ferret, or Marten",
      "Placental Elephant",
      "Placental Hippopotamus",
      "Placental Giraffe"
    ],
    0,
    "Quolls (native cats) are agile, spotted marsupial carnivores that hunt insects, birds, and small mammals, occupying the ecological guild of placental mustelids (weasels, martens)."
  ],
  [
    "Gause's Competitive Exclusion Principle states that:",
    [
      "Two closely related species competing for the exact same limiting ecological resource cannot coexist indefinitely in a stable environment",
      "All species live together in complete harmony without competing",
      "The smaller animal always kills the larger animal",
      "Predators never eat prey"
    ],
    0,
    "Gause's principle dictates that complete ecological competitors cannot coexist; the species with even a slight advantage will displace the other unless niche differentiation occurs."
  ],
  [
    "The term 'sympatric' literally translates from its Greek etymology as:",
    [
      "'Together in the homeland' ($sym$ = together, $patra$ = homeland)",
      "'Across the ocean'",
      "'In the sky'",
      "'Under the earth'"
    ],
    0,
    "'Sympatric' originates from Greek: sym (meaning with or together) and patris/patra (meaning homeland or fatherland)."
  ],
  [
    "The term 'allopatric' literally translates from Greek as:",
    [
      "'Other homeland' ($allos$ = other, $patra$ = homeland)",
      "'Same fatherland'",
      "'Deep cave'",
      "'River bank'"
    ],
    0,
    "'Allopatric' combines Greek allos (meaning other or different) with patra (meaning country or homeland)."
  ],
  [
    "In plants, the interspecific hybridization between radish (Raphanus sativus, $2n = 18$) and cabbage (Brassica oleracea, $2n = 18$) by Karpechenko produced Raphanobrassica ($2n = 36$). This new species was an:",
    [
      "Allopolyploid (amphidiploid) capable of fertile self-reproduction",
      "Autotriploid that was completely sterile",
      "Invertebrate animal",
      "Atavistic reversion"
    ],
    0,
    "Karpechenko's Raphanobrassica doubled the chromosome complement of sterile $F_1$ hybrids ($n = 9+9$), creating an amphidiploid ($2n = 36$) where every chromosome had a homologous pairing partner."
  ],
  [
    "Triticale, the first man-made cereal crop species, was developed through intergeneric allopolyploidy by crossing:",
    [
      "Wheat (Triticum) and Rye (Secale)",
      "Rice and Maize",
      "Barley and Oats",
      "Pea and Bean"
    ],
    0,
    "Triticale was synthesized by crossing wheat (Triticum aestivum / durum) with rye (Secale cereale) followed by colchicine chromosome doubling, creating a high-yielding, cold-tolerant allopolyploid."
  ],
  [
    "Ecological (habitat) isolation between two closely related plant species is illustrated by:",
    [
      "One species growing exclusively on acidic serpentine soil outcrops and the other on adjacent normal neutral soils",
      "One plant blooming in winter and the other in summer",
      "One plant having blue flowers and the other having yellow flowers",
      "One plant having no leaves"
    ],
    0,
    "Edaphic (soil-specific) specialization, such as adaptation to heavy-metal-rich serpentine soils, prevents gene flow between adjacent plant populations."
  ],
  [
    "In two closely related frog species, Rana aurora breeds in slow-moving streams, whereas Rana boylii breeds in fast-flowing rocky riffles. This represents:",
    [
      "Habitat (ecological) isolation",
      "Gametic isolation",
      "Hybrid breakdown",
      "Mechanical isolation"
    ],
    0,
    "Differences in breeding water velocity and aquatic microhabitats keep the breeding adults separated during their reproductive periods."
  ],
  [
    "Temporal isolation between the cicada species Magicicada septendecim (17-year cycle) and Magicicada tredecim (13-year cycle) is maintained because:",
    [
      "Their adult emergences coincide only once every 221 years ($17 \\times 13$), keeping their gene pools temporally isolated",
      "They live on different continents",
      "They have no wings",
      "They eat different species of wood"
    ],
    0,
    "Prime-numbered multi-year nymphal development ensures that synchronized adult broods emerge concurrently only once in over two centuries, preventing hybridization."
  ],
  [
    "In Drosophila pseudoobscura and Drosophila persimilis, females refuse to mate with heterospecific males because:",
    [
      "The wing-vibration courtship songs of the males have different auditory pulse frequencies and inter-pulse intervals",
      "The males have no genitalia",
      "The females cannot smell pheromones",
      "The males are 100 times larger than females"
    ],
    0,
    "Male fruit flies produce courtship songs by rapidly vibrating their wings; females discriminate against non-conspecific courtship song pulse rhythms."
  ],
  [
    "Mechanical isolation in flowering plants is exemplified by orchids (e.g. Ophrys and Coryanthes) that:",
    [
      "Are anatomically constructed so that their pollinia can only be attached to and transferred by specific insect pollinator species of precise size and shape",
      "Kill all visiting insects with acid",
      "Have flowers made of solid wood",
      "Have no pollen"
    ],
    0,
    "Intricate floral morphology (bucket traps, pseudo-copulatory decoys) ensures that only a single pollinator species can contact the anther and stigma in the correct orientation."
  ],
  [
    "In sea urchins of the genus Strongylocentrotus, gametic isolation between sympatric species is mediated at the molecular level by:",
    [
      "The rapid co-evolution of the sperm acrosomal bindin protein and the egg surface bindin receptor",
      "The presence of fish scales on the sperm",
      "The lack of flagella on sperm",
      "Sperm being destroyed by seawater"
    ],
    0,
    "Species-specific amino acid sequence variation in the sperm bindin protein ensures that sperm can adhere to and penetrate the vitelline envelope of conspecific eggs only."
  ],
  [
    "Hybrid inviability in crosses between the leopard frog (Rana pipiens) and wood frog (Rana sylvatica) manifests as:",
    [
      "Arrest of embryonic development during early gastrulation, resulting in embryonic death",
      "The production of healthy, fertile adult frogs",
      "The transformation of embryos into fish",
      "The sudden explosion of eggs"
    ],
    0,
    "Profound incompatibilities in nuclear-cytoplasmic interactions and genomic coordination cause embryonic development to fail completely at the onset of gastrulation."
  ],
  [
    "When a male donkey is crossed with a female zebra, the resulting hybrid is commonly called a:",
    [
      "Zonkey (or Donkra)",
      "Mule",
      "Liger",
      "Tigon"
    ],
    0,
    "A zonkey is the sterile hybrid offspring of a male donkey (Equus asinus) and a female zebra (Equus quagga), exhibiting characteristic zebra stripes on donkey body form."
  ],
  [
    "When a male lion (Panthera leo) is crossed with a female tiger (Panthera tigris), the resulting hybrid is called a:",
    [
      "Liger (the largest extant felid)",
      "Tigon",
      "Leopon",
      "Jaglion"
    ],
    0,
    "A liger is the hybrid offspring of a male lion and female tiger; due to genomic imprinting, ligers exhibit gigantism and grow larger than either parent species."
  ],
  [
    "A 'tigon' is the reciprocal hybrid produced by crossing:",
    [
      "A male tiger and a female lion",
      "A male lion and a female tiger",
      "A cheetah and a leopard",
      "A puma and a jaguar"
    ],
    0,
    "A tigon is produced by crossing a male tiger with a female lion; reciprocal genomic imprinting results in a smaller animal than a liger."
  ],
  [
    "The concept of 'reproductive isolation' as the definitive criterion for biological species was first heavily emphasized in modern evolutionary biology by:",
    [
      "Theodosius Dobzhansky and Ernst Mayr",
      "Jean-Baptiste Lamarck",
      "Gregor Mendel",
      "Carolus Linnaeus"
    ],
    0,
    "Dobzhansky ('Genetics and the Origin of Species', 1937) and Mayr ('Systematics and the Origin of Species', 1942) placed reproductive isolating mechanisms at the core of the Modern Synthesis."
  ],
  [
    "Why is geographic isolation alone NOT considered a true reproductive isolating mechanism?",
    [
      "Because geographical barriers are extrinsic physical barriers (like mountains or oceans) rather than intrinsic biological properties of the organisms themselves",
      "Because animals can always fly over mountains",
      "Because geography does not exist",
      "Because all continents are currently connected"
    ],
    0,
    "Reproductive isolating mechanisms are intrinsic biological properties (behavioral, physiological, genetic) of the organisms that prevent interbreeding even when in contact."
  ],
  [
    "In allopatric speciation, what must happen before two populations can be recognized as having completed speciation?",
    [
      "They must evolve intrinsic reproductive isolating mechanisms that prevent interbreeding even if the geographic barrier disappears (secondary contact)",
      "They must both change their diet to pure meat",
      "They must both become extinct",
      "They must undergo polyploidy"
    ],
    0,
    "Speciation is complete only when intrinsic pre- or post-zygotic reproductive barriers have evolved, so that secondary sympatric contact does not result in fusion of gene pools."
  ],
  [
    "Which type of speciation occurs when a population is split by the uplift of a new mountain range or the formation of a deep canyon?",
    [
      "Allopatric speciation by vicariance",
      "Sympatric speciation by polyploidy",
      "Parapatric speciation without barriers",
      "Artificial breeding"
    ],
    0,
    "Vicariance occurs when a newly arisen physical barrier (mountain range, canyon, new river channel) bisects an existing contiguous population into isolated halves."
  ],
  [
    "Which classic example of allopatric speciation by vicariance is observed on the North and South rims of the Grand Canyon in Arizona?",
    [
      "Kaibab squirrels (white tail, dark belly on North Rim) and Abert squirrels (grey tail, white belly on South Rim)",
      "Galapagos finches",
      "Australian kangaroos",
      "African cichlids"
    ],
    0,
    "The formation of the Grand Canyon and Colorado River isolated ancestral tree squirrels into northern (Kaibab) and southern (Abert) populations, which diverged into distinct species/subspecies."
  ],
  [
    "In the evolutionary history of Darwin's finches, all 14 species arose through adaptive radiation within what estimated timeframe?",
    [
      "Within the last 1 to 3 million years (a remarkably rapid evolutionary radiation)",
      "Over 500 million years",
      "In the last 10 days",
      "Over 2 billion years ago"
    ],
    0,
    "Molecular clock calibrations based on mitochondrial DNA place the initial colonization of the Galapagos by ancestral finches at approximately 2 to 3 million years ago."
  ],
  [
    "The term 'ecomorph' coined by Ernest Williams in his studies of Caribbean Anolis lizards describes:",
    [
      "Species with similar morphology, habitat use, and behavior, but which are not necessarily closely related phylogenetically",
      "Mutant frogs with extra legs",
      "Fossil horse teeth",
      "Insects that eat only leaves"
    ],
    0,
    "Anolis ecomorphs (e.g. twig-dwellers, trunk-ground sprinters, crown-canopy giants) evolved independently on different Caribbean islands through convergent adaptive radiation."
  ],
  [
    "In the Caribbean Anolis lizard adaptive radiation, twig ecomorphs have which characteristic morphological adaptation?",
    [
      "Short, stubby limbs and slender bodies to balance on thin twigs without falling",
      "Massive webbed feet for swimming",
      "Huge wings for soaring",
      "Thick digging claws for burrowing"
    ],
    0,
    "Anolis twig specialists have short legs and prehensile tails, allowing them to crawl along narrow, fragile twigs without losing balance."
  ],
  [
    "The phenomenon of 'character release' occurs when:",
    [
      "A species expands its morphological variation and niche breadth when living in allopatry in the absence of a close competitor",
      "A bird loses all its feathers",
      "A mammal stops growing teeth",
      "An animal changes color every hour"
    ],
    0,
    "When released from interspecific competition on competitor-free islands, a population expands its morphological range and exploits a wider spectrum of resources."
  ],
  [
    "Sympatric speciation in the apple maggot fly (Rhagoletis pomonella) was driven by an ecological host shift from native:",
    [
      "Hawthorn fruits (Crataegus) to introduced domestic apples (Malus domestica)",
      "Pine cones to oak acorns",
      "Bananas to coconuts",
      "Cactus to kelp"
    ],
    0,
    "Domestic apples mature 3-4 weeks earlier than native hawthorns, establishing a temporal and host-preference reproductive barrier that divided the population in sympatry."
  ],
  [
    "Which of the following represents a POSTZYGOTIC reproductive barrier?",
    [
      "F1 hybrid embryos fail to undergo normal blastulation and die in the uterus",
      "Courtship songs have different frequencies",
      "Two species mate in different months",
      "Genitalia are mechanically incompatible"
    ],
    0,
    "Early embryonic lethality or failure of blastulation in hybrid zygotes is a textbook manifestation of postzygotic hybrid inviability."
  ],
  [
    "The sterile hybrid offspring of a male zebra and a female horse is termed a:",
    [
      "Zorse",
      "Mule",
      "Hinny",
      "Liger"
    ],
    0,
    "A zorse is the sterile interspecific hybrid between a male zebra (stallion zebra) and a female domestic horse (mare)."
  ],
  [
    "The concept of 'niche partitioning' allows closely related sympatric species to coexist because:",
    [
      "Each species specializes on a distinct sub-niche (different prey size, foraging height, or feeding time), minimizing direct competition",
      "All species eat the exact same food at the exact same second",
      "One species kills all individuals of the other",
      "Both species hibernate permanently"
    ],
    0,
    "Resource partitioning subdivides limited resources (e.g. warblers foraging at different heights in spruce trees), allowing stable sympatric coexistence without competitive exclusion."
  ],
  [
    "In Darwin's finches, when Geospiza magnirostris colonized Daphne Major in 1982, it competed with the resident Geospiza fortis for large seeds. During the 2004 drought, what evolutionary response was observed in G. fortis?",
    [
      "G. fortis underwent directional selection for smaller beak size to specialize on smaller seeds, demonstrating character displacement in real time",
      "G. fortis evolved wings to fly to mainland America",
      "G. fortis instantly doubled its body size",
      "G. fortis transformed into an eagle"
    ],
    0,
    "Peter and Rosemary Grant documented that intense competition for large seeds caused smaller-beaked G. fortis to survive better on small seeds, driving rapid evolutionary character displacement."
  ],
  [
    "Which molecular developmental pathway was demonstrated to control the depth and robust curvature of the upper beak in Darwin's finches?",
    [
      "The BMP4 (Bone Morphogenetic Protein 4) signaling pathway",
      "The insulin signaling pathway",
      "The rhodopsin photoreceptor pathway",
      "The hemoglobin oxygen-binding pathway"
    ],
    0,
    "Abzhanov et al. (2004) proved that early and localized upregulation of BMP4 in embryonic facial mesenchyme produces deep, wide, crushing bills in ground finches."
  ],
  [
    "Which signaling molecule controls the elongated, slender, pointed beak morphology in cactus finches (Geospiza scandens)?",
    [
      "Calmodulin (CaM)",
      "Glucagon",
      "Thyroxine",
      "Adrenaline"
    ],
    0,
    "Upregulation of the calcium-binding protein calmodulin correlates directly with long, slender beak elongation in cactus finches and warbler finches."
  ],
  [
    "The rapid radiation of over 1,000 endemic species of Hawaiian Drosophila (fruit flies) occupying almost every conceivable terrestrial niche on the islands was fueled by:",
    [
      "Volcanic island formation creating successive new, isolated habitats with founder-flush cycles",
      "Radiation from nuclear bombs",
      "Continuous flight to and from Japan",
      "All flies being cloned in laboratories"
    ],
    0,
    "Stepwise island chain formation by volcanic hotspots allowed single founder flies to colonize new islands, experiencing rapid founder-flush divergence and sexual selection."
  ],
  [
    "Sexual selection through female mate choice plays a paramount role in driving rapid speciation in:",
    [
      "Hawaiian Drosophila and African rift lake cichlids",
      "Asexually budding Hydra",
      "Binary fission in Escherichia coli",
      "Vegetative propagation in potatoes"
    ],
    0,
    "Divergent female preferences for male courtship displays, nuptial gifts, or vibrant coloration act as powerful prezygotic drivers of rapid behavioral speciation."
  ],
  [
    "In plants, the interspecific hybrid between bread wheat (Triticum aestivum, hexaploid) and rye (Secale cereale, diploid) is initially sterile because:",
    [
      "The chromosomes from wheat ($n = 21$) and rye ($n = 7$) have no homologous partners to synapse during meiosis",
      "The seeds have no endosperm",
      "The plant has no roots",
      "Wheat and rye have identical DNA"
    ],
    0,
    "Wheat and rye belong to different genera; their univalent chromosomes cannot pair during meiotic prophase I, necessitating colchicine doubling to restore fertility (Triticale)."
  ],
  [
    "Colchicine is an alkaloid chemical used in plant evolutionary genetics and breeding because it:",
    [
      "Inhibits microtubule spindle polymerization, preventing chromosome separation during anaphase and inducing polyploidy",
      "Kills all plant cells instantly",
      "Accelerates seed germination by 100 times",
      "Reverses photosynthesis"
    ],
    0,
    "Colchicine disrupts the mitotic spindle apparatus, arresting cells at metaphase; upon removal, the doubled chromatids form a single polyploid nucleus."
  ],
  [
    "Which term defines a species that is geographically restricted to a specific, localized geographic area and found nowhere else on Earth?",
    [
      "Endemic species",
      "Cosmopolitan species",
      "Invasive alien species",
      "Domesticated breed"
    ],
    0,
    "Endemic species (e.g. marine iguanas on Galapagos, lemurs in Madagascar, tuatara in New Zealand) are native and strictly confined to a single geographic territory."
  ],
  [
    "The absence of native terrestrial placental mammals in New Zealand (except for two species of bats) allowed which group of vertebrates to undergo spectacular adaptive radiation?",
    [
      "Flightless birds (such as Moas, Kiwis, Kakapo, and Takahe)",
      "Giant snakes",
      "Crocodiles",
      "Desert camels"
    ],
    0,
    "In mammal-free prehistoric New Zealand, birds radiated into all terrestrial mammalian guilds: giant browsing moas filled the deer niche, while kiwis occupied the nocturnal badger/hedgehog niche."
  ],
  [
    "Why are oceanic islands characterized by depauperate, disharmonic biotas before human arrival?",
    [
      "Only organisms capable of long-distance trans-oceanic dispersal (birds, bats, flying insects, wind-borne spores, rafting reptiles) could cross vast marine barriers",
      "Islands have zero water",
      "Islands sink every 10 years",
      "All animals dislike islands"
    ],
    0,
    "Oceanic islands have disharmonic faunas because dispersal filters exclude heavy land mammals and amphibians (killed by saltwater), favoring volant or raft-dispersing taxa."
  ],
  [
    "Adaptive radiation is considered the primary macro-evolutionary mechanism responsible for:",
    [
      "The generation of high biological diversity and ecological complexity following ecological opportunity",
      "The complete extinction of all living things",
      "The spontaneous appearance of life from rocks",
      "The freezing of Earth's atmosphere"
    ],
    0,
    "Adaptive radiation bridges micro-evolutionary natural selection and macro-evolutionary biodiversity, rapidly expanding lineages into myriad ecological niches."
  ],
  [
    "According to NCERT Class 12 Biology, which Australian marsupial corresponds to the placental Flying squirrel?",
    [
      "Flying phalanger (Sugar glider)",
      "Tasmanian wolf",
      "Koala",
      "Wombat"
    ],
    0,
    "NCERT explicitly pairs the Flying squirrel (placental) with the Flying phalanger (marsupial) in its comparative diagram of convergent evolution."
  ]
];
extra79Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));


const extra24Mcqs = [
  [
    "In macro-evolution, the distinction between anagenesis and cladogenesis is that:",
    [
      "Anagenesis is linear phyletic evolution within a single unbranched lineage, whereas cladogenesis is branching evolution that generates multiple descendant species",
      "Anagenesis occurs only in plants, cladogenesis only in animals",
      "Anagenesis happens in 10 minutes",
      "Cladogenesis always results in extinction"
    ],
    0,
    "Anagenesis (phyletic change) transforms an ancestral species into a descendant without branching; cladogenesis splits an ancestral lineage into two or more distinct species, increasing biodiversity."
  ],
  [
    "The Theory of Punctuated Equilibrium proposed by Niles Eldredge and Stephen Jay Gould (1972) asserts that:",
    [
      "Species experience long periods of morphological stasis (equilibrium) punctuated by brief episodes of rapid speciation in small peripheral populations",
      "Evolution always proceeds at a completely constant, slow rate every day",
      "All species evolve simultaneously in one second",
      "Fossils are never preserved"
    ],
    0,
    "Eldredge and Gould argued that the fossil record accurately reflects evolution: long stability (stasis) interrupted by rapid cladogenesis in localized peripheral isolates."
  ],
  [
    "Sibling species (or cryptic species) are biologically defined as distinct species that are:",
    [
      "Morphologically nearly identical and indistinguishable to human observers, but completely reproductively isolated in nature",
      "Identical twins born from the same mother",
      "Species that live in the same cave",
      "Species that have no genetic material"
    ],
    0,
    "Cryptic species (e.g. Drosophila pseudoobscura and D. persimilis, or sibling species of Anopheles mosquitoes) look morphologically identical but do not interbreed in nature."
  ],
  [
    "A 'polytypic species' is a species that:",
    [
      "Is composed of two or more geographically distinct subspecies or races that can interbreed if they meet",
      "Lacks any genetic variation",
      "Produces only cloned offspring",
      "Has no chromosomes"
    ],
    0,
    "A polytypic species exhibits geographic phenotypic variation divided into named subspecies (e.g. Panthera tigris tigris, P. tigris altaica, P. tigris sumatrae)."
  ],
  [
    "A 'monotypic species' is a species that:",
    [
      "Is not divided into distinct geographical subspecies, exhibiting uniform morphology throughout its range",
      "Consists of only a single living individual",
      "Lacks any cell nucleus",
      "Cannot reproduce"
    ],
    0,
    "Monotypic species (such as the giant panda, Ailuropoda melanoleuca) display uniform characters across their range without recognized subspecific divergence."
  ],
  [
    "In Lake Victoria cichlid fishes, sympatric speciation driven by 'sensory drive' occurs because:",
    [
      "Water depth filters ambient light wavelengths (blue at surface, red in deep turbid water), selecting for matching male nuptial colors and female visual opsin pigments",
      "Fish choose mates based on radio signals",
      "Fish have no eyes",
      "Fish only mate in frozen water"
    ],
    0,
    "Differential transmission of light wavelengths at varying water depths drives co-evolution between male breeding coloration (red vs blue) and female retinal opsin sensitivity."
  ],
  [
    "When two diverging populations meet at a secondary contact zone and their hybrids have lower fitness than purebred individuals, natural selection favors:",
    [
      "Reinforcement of prezygotic isolating mechanisms to prevent wasteful hybridization",
      "The immediate fusion of both species into one",
      "The total cessation of all reproduction",
      "The extinction of all predators"
    ],
    0,
    "Reinforcement (the Wallace effect) strengthens behavioral or temporal prezygotic barriers, ensuring that individuals mate only with conspecifics to avoid producing unfit hybrid progeny."
  ],
  [
    "If hybrid offspring at a secondary contact zone are equally or more fit than parental individuals across the entire range, what evolutionary outcome occurs?",
    [
      "Fusion of the two gene pools back into a single interbreeding species",
      "Immediate extinction of both parent species",
      "Instant creation of twenty new species",
      "Permanent freezing of all animals"
    ],
    0,
    "If reproductive barriers have not solidified and hybrids have equal or superior fitness, widespread gene flow dissolves differences, fusing the populations into a single species."
  ],
  [
    "A 'tension zone' in evolutionary biogeography is a hybrid zone maintained by a dynamic equilibrium between:",
    [
      "Dispersal of parental individuals into the zone and strong natural selection against unfit hybrid individuals",
      "Extreme volcanic heat and ice",
      "Wind speed and atmospheric pressure",
      "Human fences and roads"
    ],
    0,
    "Tension zones are narrow, stable hybrid zones where continuous inward dispersal of parental organisms is balanced by strong postzygotic selection eliminating hybrid offspring."
  ],
  [
    "The North American monkeyflowers Mimulus cardinalis and Mimulus lewisii maintain prezygotic reproductive isolation in sympatry primarily through:",
    [
      "Floral color and morphology specialized for different pollinators (hummingbirds for red tubular M. cardinalis vs bumblebees for pink broad M. lewisii)",
      "Mating at different times of night",
      "Growing on different continents",
      "Having no pollen"
    ],
    0,
    "Mimulus cardinalis has red, narrow nectar-rich tubular flowers pollinated by hummingbirds; M. lewisii has broad pink flowers with landing petals pollinated by bees."
  ],
  [
    "The genetic basis of Haldane's Rule (that hybrid sterility/inviability preferentially affects the heterogametic sex, e.g. XY males) is primarily explained by the:",
    [
      "X-linked recessive incompatibility hypothesis (deleterious recessive alleles on the foreign X chromosome are fully unmasked and expressed in hemizygous XY males)",
      "Complete absence of Y chromosomes in all animals",
      "Males having twice as much DNA as females",
      "Females being immune to all mutations"
    ],
    0,
    "In XY males, recessive incompatible alleles on the single X chromosome lack a wild-type homologue to mask them, exposing lethal or sterilizing epistatic incompatibilities."
  ],
  [
    "Bateson-Dobzhansky-Muller (BDM) incompatibilities arise during allopatric speciation because:",
    [
      "New mutations that are neutral or advantageous in their own genetic backgrounds prove deleterious when combined in a hybrid genome",
      "Parents intentionally poison their offspring",
      "Chromosomes dissolve in water",
      "Mating occurs under high pressure"
    ],
    0,
    "BDM incompatibilities model how populations can diverge and achieve reproductive isolation without either population passing through an adaptive fitness valley."
  ],
  [
    "The Australian marsupial Mouse (Antechinus) is famous in mammalogy for exhibiting 'semelparity', which means:",
    [
      "All males engage in an intense, synchronous, suicidal mating season and die completely of stress-induced immune collapse within weeks",
      "Individuals live for 100 years",
      "Females never produce milk",
      "Animals reproduce without mating"
    ],
    0,
    "Male Antechinus experience massive surges of corticosteroids and testosterone during a frantic 2-week mating period, resulting in complete male post-mating die-off (semelparity)."
  ],
  [
    "The North American Kangaroo rat (Dipodomys) and the Australian Marsupial mouse/hopping mouse represent convergent adaptations to arid deserts because both:",
    [
      "Possess exceptionally long Loops of Henle to produce hyper-concentrated urine and obtain virtually 100% of their water from metabolic oxidation of dry seeds",
      "Drink ocean water directly",
      "Hibernate underwater during summers",
      "Have green photosynthetic skin"
    ],
    0,
    "Deep medullary Loops of Henle and efficient renal water reabsorption allow desert rodents and marsupials to survive perpetually on dry seeds without drinking free water."
  ],
  [
    "The fundamental reproductive difference between Australian marsupials and placental mammals is that:",
    [
      "Marsupials give birth to highly altricial, embryonic young that complete development nursing on teats inside a maternal pouch (marsupium), whereas placentals undergo prolonged intrauterine gestation",
      "Marsupials lay hard cleidoic bird eggs",
      "Placentals have no internal organs",
      "Marsupials reproduce by binary fission"
    ],
    0,
    "Marsupials have a brief choriovitelline gestation yielding tiny, joey embryos that crawl to the marsupium to nurse; placentals have prolonged gestation supported by a chorioallantoic placenta."
  ],
  [
    "Cactus ground finches (Geospiza scandens) on the Galapagos feed on Opuntia cactus pads and flowers; during the wet season, their long, decurved beaks enable them to:",
    [
      "Probe deep into cactus flowers to drink nectar and eat pollen without damaging the flower",
      "Dig 5 meters deep underground",
      "Break open giant turtle shells",
      "Catch flying marine fish"
    ],
    0,
    "The elongated, decurved bill of G. scandens is precisely adapted to reach nectar and pollen deep within Opuntia cactus flowers and pry into ripe cactus fruits."
  ],
  [
    "In Lake Victoria, when introduced Nile perch (Lates niloticus) caused intense ecological predation and increased water turbidity due to agricultural runoff:",
    [
      "Over 200 endemic cichlid species went extinct, and female mate choice broke down due to murky water, causing interspecific hybridization",
      "All cichlids grew four legs and crawled onto land",
      "The lake turned into a salt desert",
      "All fish transformed into amphibians"
    ],
    0,
    "Water turbidity obscured male breeding coloration; females could no longer distinguish conspecific males, causing breakdown of behavioral reproductive isolation and mass hybrid collapse."
  ],
  [
    "Which concept describes the evolution of reproductive isolation between populations as an incidental byproduct of adaptation to divergent ecological environments?",
    [
      "Ecological speciation",
      "Spontaneous generation",
      "Special divine creation",
      "Catastrophic selection"
    ],
    0,
    "Ecological speciation occurs when natural selection drives adaptation to different ecological niches, and reproductive isolation evolves as an pleiotropic or genetic byproduct."
  ],
  [
    "Hawaiian picture-winged Drosophila flies exhibit elaborate male lekking behavior where:",
    [
      "Males defend small display territories on tree branches and perform complex visual and acoustic courtship displays for visiting females",
      "Males fight to the death with venomous claws",
      "Males build underground tunnels",
      "Males lay eggs in seawater"
    ],
    0,
    "Male picture-winged flies aggregate in leks, displaying ornate wing pigmentation patterns and abdomen-vibrating courtship signals that drive sexual selection and speciation."
  ],
  [
    "The presence of different species of tortoises with distinct shell shapes on different Galapagos islands (e.g. saddle-back shells on arid islands vs dome-shaped shells on humid islands) illustrates:",
    [
      "Allopatric divergence and adaptive radiation in giant tortoises (Chelonoidis)",
      "That tortoises change their shells every month",
      "That shells are made by human artisans",
      "That shells are dissolved by rain"
    ],
    0,
    "Tortoises on arid islands with high cactus pads evolved saddleback carapaces and long necks to reach high foliage; humid-island tortoises evolved dome shells to graze low grasses."
  ],
  [
    "When two closely related animal species come into secondary contact and can mate, but their hybrid offspring suffer from high embryonic mortality, this represents:",
    [
      "Postzygotic hybrid inviability",
      "Prezygotic temporal isolation",
      "Prezygotic behavioral isolation",
      "Prezygotic mechanical isolation"
    ],
    0,
    "Embryonic death or developmental breakdown of the hybrid organism after successful fertilization is classified as postzygotic hybrid inviability."
  ],
  [
    "Why does polyploid speciation allow plants to bypass the gradual allopatric stages of speciation?",
    [
      "Because chromosomal doubling immediately creates complete, instant postzygotic reproductive isolation from the parental diploid population in a single generation",
      "Because polyploid plants cannot grow in soil",
      "Because polyploid plants have no flowers",
      "Because diploid plants immediately kill polyploids"
    ],
    0,
    "A tetraploid ($4n$) crossed with a diploid ($2n$) yields sterile triploid ($3n$) offspring, instantly establishing a postzygotic reproductive barrier within a single generation."
  ],
  [
    "The striking convergent evolution of the placental Flying squirrel and the marsupial Flying phalanger (Sugar glider) is an example of:",
    [
      "Analogy arising from common selective pressure for gliding locomotion between trees in forested environments",
      "Homology inherited from a common flying ancestor",
      "Atavistic mutations caused by cold weather",
      "Artificial human breeding"
    ],
    0,
    "Both mammals independently developed broad lateral skin flaps (patagia) between their wrists and ankles, enabling controlled gliding between forest canopies."
  ],
  [
    "According to NCERT Class 12 Biology, Darwin's finches and Australian marsupials are highlighted as classic textbook demonstrations of:",
    [
      "Adaptive radiation",
      "Lamarck's inheritance of acquired characters",
      "Spontaneous generation",
      "Industrial melanism"
    ],
    0,
    "NCERT explicitly highlights: 'Darwin’s Finches represent one of the best examples of this phenomenon. Another example is Australian marsupials...'"
  ]
];
extra24Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

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
  const outPath = path.join(__dirname, 'data_zoology_evolution_part3.js');
  const fileContent = `// Auto-generated data for Zoology Evolution Part 3: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
