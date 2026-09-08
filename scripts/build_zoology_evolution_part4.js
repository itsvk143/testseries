const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Darwin's theory of natural selection and Lamarckism";
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
    a: "Jean-Baptiste Lamarck proposed the Theory of Inheritance of Acquired Characters in his 1809 book 'Philosophie Zoologique'.",
    r: "Lamarck argued that modifications developed by an organism during its lifetime through the use and disuse of organs are transmitted directly to its offspring.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly states the foundational premise of Lamarckism: somatic traits acquired in response to environmental needs are inherited across generations."
  },
  {
    a: "Lamarck explained the long neck of the modern giraffe through continuous stretching over generations.",
    r: "Ancestral short-necked giraffes stretched their necks continuously to browse leaves on tall trees, and this acquired elongation was passed to succeeding generations.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the classic example cited by Lamarck to illustrate the principle of use and disuse driving morphological evolution."
  },
  {
    a: "August Weismann disproved Lamarck's theory of the inheritance of acquired characters using his Germplasm Theory.",
    r: "Weismann cut off the tails of white mice for 22 successive generations, yet every newborn mouse in all subsequent generations possessed a normal tail.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason describes Weismann's landmark mutilation experiment proving that somatic bodily modifications (somatoplasm) are not transferred to germ cells (germplasm)."
  },
  {
    a: "Changes occurring strictly in the somatoplasm of an individual are not inherited by the next generation.",
    r: "Only genetic and epigenetic modifications occurring within the germ cells (spermatozoa and ova) can be transmitted to progeny.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the central biological dogma of Weismann's germplasm theory."
  },
  {
    a: "Charles Darwin was profoundly influenced by Thomas R. Malthus's 'Essay on the Principle of Population'.",
    r: "Malthus demonstrated that while populations increase geometrically in numbers, food resources increase only arithmetically, establishing a constant struggle for existence.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains how Malthusian demographic principles provided Darwin with the ecological mechanism of natural selection."
  },
  {
    a: "In any natural population, despite an enormous potential for geometric reproduction, total population size remains relatively constant over time.",
    r: "Natural resources like food, nesting sites, and water are limited, leading to intense competition and high mortality among progeny.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains why population numbers stabilize in nature despite massive overproduction of eggs or seeds."
  },
  {
    a: "The struggle for existence between members of the exact same species (intraspecific struggle) is the fiercest and most acute.",
    r: "Members of the same species occupy the identical ecological niche and compete for identical food resources, mates, and territories.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains why intraspecific competition is the most intense form of competition in nature."
  },
  {
    a: "Natural selection acts directly on phenotypic variations among individuals in a population.",
    r: "Individuals bearing advantageous phenotypic variations have higher survival rates and leave more viable offspring in the next generation (differential reproduction).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly defines Darwinian natural selection in terms of differential reproductive success."
  },
  {
    a: "The phrase 'Survival of the fittest' was coined by Herbert Spencer, not by Charles Darwin.",
    r: "Darwin adopted Spencer's philosophical phrase in later editions of 'On the Origin of Species' as an alternative expression for Natural Selection.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the historical origin of the phrase coined by philosopher Herbert Spencer in 1864 and adopted by Darwin."
  },
  {
    a: "Alfred Russel Wallace independently conceived the theory of natural selection while working in the Malay Archipelago.",
    r: "Wallace sent his essay to Darwin in 1858, prompting a joint presentation to the Linnean Society of London before Darwin published 'On the Origin of Species'.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the famous 1858 co-announcement of natural selection by Charles Darwin and Alfred Russel Wallace."
  },
  {
    a: "Industrial melanism in the peppered moth (Biston betularia) is a celebrated demonstration of natural selection in action.",
    r: "Following industrialization in 19th-century England, dark-colored (melanic) moths increased in frequency because soot-covered tree trunks camouflaged them from predatory birds.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Atmospheric coal pollution killed pale lichens and blackened bark, reversing bird predation pressure against light moths."
  },
  {
    a: "Bernard Kettlewell's mark-release-recapture field experiments supported the hypothesis of differential predation in Biston betularia.",
    r: "In soot-polluted Birmingham woodlands, a significantly higher percentage of dark melanic moths were recaptured compared to white moths.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason describes Kettlewell's empirical recapture data demonstrating higher survival of melanic moths in industrial woods."
  },
  {
    a: "In unpolluted rural areas of England (such as Dorset), light-colored peppered moths remained dominant even during the industrial era.",
    r: "In rural woodlands free of industrial smoke, tree trunks remained covered with pale crustose lichens that camouflaged white-winged moths.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that natural selection favored the pale morph in unpolluted habitats where lichens survived."
  },
  {
    a: "The rapid emergence of antibiotic-resistant bacteria is an example of anthropogenic natural selection.",
    r: "Widespread human clinical use of antibiotics acts as an intense selective agent, allowing rare pre-existing resistant bacterial mutants to survive and multiply.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Antibiotics do not induce resistance mutations; they select for pre-existing resistant variants created by chance mutations."
  },
  {
    a: "DDT resistance in mosquito populations evolved within a few years of widespread spraying.",
    r: "DDT chemically mutates the DNA of every mosquito it touches, deliberately forcing mosquitoes to develop detoxifying enzymes.",
    ans: 2,
    exp: "Assertion is true, but Reason is false. DDT does not direct or induce mutations; pre-existing rare individuals with alleles for DDT-dehydrochlorinase survived DDT spraying and multiplied (directional selection)."
  },
  {
    a: "A major limitation of Darwin's original 1859 theory was its inability to explain the origin and mechanism of hereditary variations.",
    r: "Gregor Mendel's laws of particulate inheritance were unknown to Darwin, and Darwin relied on the flawed concept of pangenesis and blending inheritance.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly identifies Darwin's primary theoretical handicap: lack of a particulate genetic mechanism for heredity."
  },
  {
    a: "Darwinian variations are described as small, continuous, and directional.",
    r: "Hugo de Vries claimed that evolution occurs through sudden, large, discontinuous, and directionless mutations (saltation).",
    ans: 1,
    exp: "Both Assertion and Reason are true, but Reason describes De Vries' mutation theory rather than explaining why Darwin considered variations to be small and continuous (gradualism)."
  },
  {
    a: "The two key concepts of the Darwinian theory of evolution are Branching Descent and Natural Selection.",
    r: "Branching descent explains the divergence of species from common ancestors, while natural selection provides the mechanism driving adaptation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the two core pillars of Darwinism explicitly highlighted in NCERT Class 12 Biology."
  },
  {
    a: "Piercing of ear pinnae and noses in Indian women practiced for thousands of years has not resulted in the birth of female infants with pre-pierced ears.",
    r: "Physical piercing is a somatic injury that does not alter the genomic DNA sequence of gametes in the ovaries.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why somatic cultural modifications are never inherited by offspring (counter-evidence to Lamarckism)."
  },
  {
    a: "The flightlessness of ratite birds like the ostrich, kiwi, and emu was explained by Lamarck as an example of disuse of organs.",
    r: "Lamarck argued that abundant ground food resources and absence of predators led ancestral birds to stop flying, leading to wing degeneration.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason describes Lamarck's classic interpretation of ratite wing vestigialization through disuse."
  },
  {
    a: "Snakes lost their limbs through evolution from tetrapod lizard ancestors.",
    r: "Lamarck explained that snakes adopted a fossorial, creeping habit, entering narrow burrows where limbs were an impediment, leading to limb degeneration through disuse.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason represents Lamarck's specific historical argument regarding snake limb loss in 'Philosophie Zoologique'."
  },
  {
    a: "Darwinism could not explain the persistence of neutral or non-functional vestigial organs.",
    r: "Natural selection preserves only characters that confer a selective survival or reproductive advantage in the struggle for existence.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly identifies a classical criticism of strict Darwinism: why functionless vestigial organs are not eliminated immediately."
  },
  {
    a: "Natural selection in Biston betularia did not result in the total extinction of the white-winged moth in England.",
    r: "In rural, unpolluted areas and on sheltered bark crevices, white-winged moths retained a camouflage advantage and survived at lower baseline frequencies.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains NCERT's key observation: 'no variant is completely wiped out' in nature."
  },
  {
    a: "Industrial melanism demonstrates directional natural selection.",
    r: "The frequency of the melanic allele ($C$) shifted progressively in one direction in response to changes in environmental background coloration.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly classifies industrial melanism as directional selection where one extreme phenotype is favored."
  },
  {
    a: "Herbicide-resistant weeds have appeared in agricultural fields within decades of chemical herbicide introduction.",
    r: "Excessive application of chemical herbicides creates intense selective pressure, accelerating the evolution of resistant weed biotypes through anthropogenic selection.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that human chemical intervention accelerates natural microevolutionary selection from millions of years to a few seasons."
  },
  {
    a: "Darwin's ship HMS Beagle was captained by Robert FitzRoy on a five-year surveying voyage around the globe.",
    r: "Darwin served as an unpaid naturalist and companion to the captain, making crucial biological observations across South America and island archipelagos.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason details Darwin's historic 1831-1836 voyage on HMS Beagle that laid the observational groundwork for his theory."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-35: Lamarckism, postulates, examples & disproof
addMcq(
  "Jean-Baptiste Lamarck's theory of evolution was published in 1809 in his famous treatise titled:",
  ["Philosophie Zoologique", "On the Origin of Species", "Systema Naturae", "Principles of Geology"],
  0,
  "French naturalist Jean-Baptiste de Lamarck expounded his evolutionary ideas in 'Philosophie Zoologique' published in 1809 (the birth year of Charles Darwin)."
);

addMcq(
  "According to Lamarckism, the primary driving force behind the evolution of new anatomical traits in organisms is:",
  ["Internal vital force, changing environmental needs, and the use and disuse of organs", "Sudden large discontinuous mutations (saltation)", "Differential reproductive success mediated by overproduction", "The divine creation of species in six days"],
  0,
  "Lamarckism proposed that environmental changes create new needs (*besoins*), prompting organisms to use or disuse organs, with acquired traits passed to offspring."
);

addMcq(
  "Which famous biological example was cited by Lamarck to illustrate how continuous use of an organ leads to its enlargement across generations?",
  ["The elongated neck and forelegs of the giraffe", "The loss of limbs in snakes", "The vestigial wings of the kiwi", "The reduction of human third molars"],
  0,
  "Lamarck argued that giraffes stretched their necks continuously to reach high acacia foliage; this acquired elongation accumulated over generations to produce modern giraffes."
);

addMcq(
  "How did Lamarck explain the loss of limbs in snakes?",
  ["Snakes adopted a burrowing habit and crept through narrow crevices, where limbs were useless, leading to their gradual degeneration through disuse", "Snakes were created without legs by God", "A single massive mutation eliminated all legs in one step", "Legs were amputated by predators"],
  0,
  "Lamarck proposed that limbs were an impediment to slithering through dense grass and narrow underground burrows, leading to limb degeneration through disuse."
);

addMcq(
  "The development of webbed feet in aquatic swimming birds (such as ducks and geese) was explained by Lamarck through:",
  ["Constant stretching of the skin between the digits while paddling in water", "Direct divine intervention", "Feeding on marine fish", "Sudden polyploidy"],
  0,
  "Lamarck asserted that ancestral terrestrial birds paddling in water continuously stretched the skin folds between their spread toes, acquiring webbed swimming feet."
);

addMcq(
  "Which scientist delivered the decisive experimental blow to Lamarck's Theory of Inheritance of Acquired Characters by cutting off the tails of mice for 22 generations?",
  ["August Weismann", "Louis Pasteur", "Gregor Mendel", "Hugo de Vries"],
  0,
  "August Weismann docked the tails of white mice for 22 consecutive generations (over 1,500 mice); every generation was born with normal full-length tails, refuting Lamarck."
);

addMcq(
  "August Weismann formulated which biological theory to distinguish between inherited germinal traits and non-inherited somatic traits?",
  ["The Germplasm Theory (Theory of Continuity of Germplasm)", "The Cell Theory", "The Gene Theory", "The Biogenetic Law"],
  0,
  "Weismann's Germplasm Theory (1892) separated body somatoplasm (which perishes with death) from reproductive germplasm (which bridges generations via gametes)."
);

addMcq(
  "Why are powerful muscular gains developed by a professional bodybuilder NOT passed on genetically to their newborn infants?",
  ["Weight training induces hypertrophy in somatic skeletal muscle fibers without altering the nucleotide sequences of germ-cell DNA", "Muscles are made of bone", "Babies have no muscles at birth", "Bodybuilding destroys chromosomes"],
  0,
  "Muscular hypertrophy is an acquired phenotypic somatic adaptation; somatic alterations do not modify the genetic code stored in sperm or egg gametes."
);

addMcq(
  "The ancient tradition of binding the feet of young girls in China ('lotus feet') for over a thousand years never resulted in naturally small-footed infants because:",
  ["Foot binding is an artificial somatic mutilation that has zero effect on the genes in germ cells", "The climate of China changed", "Feet cannot grow in cold weather", "Bones dissolve in shoes"],
  0,
  "Physical deformation of somatic tissues throughout centuries never alters the germline DNA, disproving Lamarck's inheritance of acquired characters."
);

addMcq(
  "Which of the following represents a key postulate of Neo-Lamarckism?",
  ["External environmental factors (such as radiation or chemicals) can occasionally influence germ cells directly or indirectly, producing heritable changes", "Organisms choose their mutations by willpower", "Evolution occurs exclusively through genetic drift", "All organisms were created 6,000 years ago"],
  0,
  "Neo-Lamarckians (Cope, Packard, Spencer) modified Lamarckism, recognizing that harsh physical environments can directly mutate or epigenetically modify germ cells."
);

// 11-40: Darwinism, Malthus, HMS Beagle & Postulates
addMcq(
  "Charles Darwin embarked on his historic five-year surveying expedition in 1831 aboard which British naval ship?",
  ["HMS Beagle", "HMS Challenger", "Mayflower", "Santa Maria"],
  0,
  "Charles Darwin sailed on the HMS Beagle from December 27, 1831 to October 2, 1836 under Captain Robert FitzRoy, circumnavigating South America, the Pacific, and the globe."
);

addMcq(
  "How long did Charles Darwin's voyage around the world aboard the HMS Beagle last?",
  ["5 years (1831 to 1836)", "1 year", "10 years", "20 years"],
  0,
  "The expedition of HMS Beagle lasted nearly five years, during which Darwin explored the coasts of South America, the Galapagos Islands, Tahiti, New Zealand, and Australia."
);

addMcq(
  "Which famous book by English economist Thomas Robert Malthus provided Charles Darwin with the theoretical catalyst for natural selection?",
  ["'An Essay on the Principle of Population' (1798)", "'Wealth of Nations'", "'Das Kapital'", "'Philosophie Zoologique'"],
  0,
  "In 1838, Darwin read Malthus's 'Essay on the Principle of Population', which argued that human populations multiply exponentially while food supplies increase arithmetically."
);

addMcq(
  "According to Malthus, while populations tend to increase in a geometric progression ($1, 2, 4, 8, 16...$), agricultural food supply increases only in a/an:",
  ["Arithmetic progression ($1, 2, 3, 4, 5...$)", "Logarithmic progression", "Geometric progression", "Exponential curve"],
  0,
  "Malthus postulated that uncontrolled populations double geometrically while food production grows arithmetically, inevitably precipitating famine, disease, and struggle."
);

addMcq(
  "Darwin's landmark masterwork on evolution, published on November 24, 1859, was titled:",
  ["'On the Origin of Species by Means of Natural Selection'", "'The Descent of Man'", "'Philosophie Zoologique'", "'The Voyage of the Beagle'"],
  0,
  "On November 24, 1859, John Murray published Darwin's 'On the Origin of Species by Means of Natural Selection', which sold out its entire 1,250-copy print run on the first day."
);

addMcq(
  "Who was the British naturalist working in the Malay Archipelago who independently arrived at the identical theory of natural selection as Darwin?",
  ["Alfred Russel Wallace", "Thomas Henry Huxley", "Charles Lyell", "Joseph Dalton Hooker"],
  0,
  "Alfred Russel Wallace conceived natural selection during an attack of malaria in Ternate (Indonesia) in 1858 and mailed his manuscript directly to Charles Darwin."
);

addMcq(
  "Where and in which year was the joint paper by Charles Darwin and Alfred Russel Wallace on natural selection first publicly presented?",
  ["Linnean Society of London in 1858", "Royal Society of Edinburgh in 1831", "French Academy of Sciences in 1809", "University of Cambridge in 1900"],
  0,
  "On July 1, 1858, Lyell and Hooker arranged the joint presentation of Darwin's 1844 essay excerpt and Wallace's Ternate paper before the Linnean Society of London."
);

addMcq(
  "According to Darwinian evolutionary theory, the two foundational concepts ('two key concepts') of evolution are:",
  ["Branching Descent and Natural Selection", "Use and Disuse of Organs", "Mutation and Saltation", "Spontaneous Generation and Biogenesis"],
  0,
  "NCERT Class 12 Biology explicitly highlights: 'Branching descent and natural selection are the two key concepts of Darwinian Theory of Evolution.'"
);

addMcq(
  "What does Darwin's concept of 'Branching Descent' mean?",
  ["All diverse biological species descended from common ancestors through progressive evolutionary divergence and branching lineages over geological time", "All animals have tree branches inside their bodies", "Trees were the first animals on Earth", "Evolution proceeds in a single straight, unbranched line"],
  0,
  "Branching descent represents Darwin's 'Tree of Life' concept: all organisms share genealogical kinship tracing back to common ancestors through branching lineages."
);

addMcq(
  "Which type of competition in the struggle for existence is regarded as the most intense and unforgiving?",
  ["Intraspecific struggle (between individuals of the same species)", "Interspecific struggle (between different species)", "Environmental struggle (against cold/heat)", "Struggle between humans and robots"],
  0,
  "Intraspecific competition is the fiercest because conspecific individuals share the exact same ecological niche, food preferences, shelters, and mating requirements."
);

addMcq(
  "An example of INTERSPECIFIC struggle in nature is:",
  ["A lion and a spotted hyena competing for the carcass of an antelope", "Two male deer clashing antlers over a female mate", "Two seedlings of the same wheat plant competing for root space", "A frog freezing during winter"],
  0,
  "Competition between different species sharing overlapping resource requirements (such as lions and hyenas scavenging the same ungulate prey) is interspecific competition."
);

addMcq(
  "An example of ENVIRONMENTAL (extra-specific) struggle is:",
  ["Desert plants and animals struggling to survive extreme drought, heat, and desiccation", "Two male robins fighting for territory", "A hawk catching a field mouse", "A cheetah chasing a gazelle"],
  0,
  "Environmental struggle involves the abiotic challenges imposed by extreme physical environments (e.g. freezing blizzards, desert droughts, earthquakes, floods)."
);

addMcq(
  "Darwin recognized that within any natural population, individual organisms display:",
  ["Variations that are small, continuous, and directional", "Identical DNA sequences with zero variation", "Sudden massive chromosomal jumps every generation", "No differences whatsoever"],
  0,
  "Darwin viewed variation as subtle, gradual, continuous individual differences that are directional and subject to cumulative natural selection over generations."
);

addMcq(
  "How did Charles Darwin define 'fitness' in the context of evolutionary natural selection?",
  ["Reproductive fitness: the relative ability of an individual to survive, reproduce, and leave viable offspring in the gene pool", "Physical muscular strength and athletic speed only", "The largest body mass in kilograms", "The longest lifespan in years without reproducing"],
  0,
  "NCERT emphasizes that fitness in Darwinian terms refers strictly to reproductive fitness: individuals that leave more progeny are fitter and selected by nature."
);

addMcq(
  "Who originally coined the phrase 'Survival of the fittest'?",
  ["Herbert Spencer", "Charles Darwin", "Alfred Russel Wallace", "Thomas Malthus"],
  0,
  "English philosopher Herbert Spencer coined 'Survival of the fittest' in 1864 in his 'Principles of Biology' after reading Darwin's work."
);

// 41-75: Industrial Melanism & Natural Selection Examples
addMcq(
  "The peppered moth (Biston betularia) occurs in two distinct color forms in Britain:",
  ["A light-colored, white-winged typical form (typica) and a dark-colored, melanic form (carbonaria)", "A bright red form and a blue form", "A winged form and a completely wingless form", "A green form and an albino form"],
  0,
  "Biston betularia exists as the light grey speckled typica form and the dark melanic carbonaria form, regulated by a single dominant transposable element mutation."
);

addMcq(
  "In pre-industrial England (before the 1850s), why were white-winged peppered moths far more abundant than melanic moths?",
  ["Tree trunks were covered with thick, pale lichens, camouflaging white moths from predatory birds while dark moths stood out and were eaten", "Dark moths could not fly", "White moths produced poison", "Dark moths had no eggs"],
  0,
  "Before coal industrialization, clean air supported dense pale lichen epiphytes on tree trunks, against which pale speckled moths were virtually invisible to insectivorous birds."
);

addMcq(
  "What environmental transformation occurred in industrial areas of Britain (such as Birmingham and Manchester) during the Industrial Revolution?",
  ["Heavy coal smoke, soot, and sulfur dioxide ($SO_2$) killed sensitive lichens and blackened tree trunks with dark soot", "Forests were completely cleared into concrete lots", "The weather became permanently frozen", "All birds migrated to Africa permanently"],
  0,
  "Massive industrial coal burning released sulfur dioxide (which killed epiphytic lichens) and black soot that coated tree bark, darkening the background."
);

addMcq(
  "Following the industrial blackening of tree trunks, what evolutionary shift was observed in the peppered moth population by 1920?",
  ["Dark-colored (melanic) moths increased dramatically to over 90% of the population, while white-winged moths became rare", "White moths transformed into butterflies", "All moths went completely extinct", "Moths stopped flying at night"],
  0,
  "Against soot-blackened trunks, pale moths were easily spotted and devoured by birds, whereas dark melanic moths were camouflaged; directional selection inverted the morph frequencies."
);

addMcq(
  "Which British geneticist and physician conducted extensive mark-release-recapture field experiments in the 1950s that validated bird predation on peppered moths?",
  ["H.B.D. Kettlewell (Bernard Kettlewell)", "E.B. Ford", "Ronald Fisher", "J.B.S. Haldane"],
  0,
  "Bernard Kettlewell placed both moth morphs in polluted Birmingham woods and unpolluted Dorset woods, demonstrating differential bird predation with photographic and recapture evidence."
);

addMcq(
  "When Britain enacted Clean Air Acts in the late 20th century (reducing coal smoke and $SO_2$), what evolutionary response occurred in Biston betularia?",
  ["Tree bark cleared, lichens recolonized, and the frequency of light-colored moths rose steadily while melanic moths declined", "All moths turned purple", "Melanic moths multiplied by ten times", "Moths lost their wings"],
  0,
  "As industrial pollution declined, pale lichens returned, reversing the selective advantage back in favor of pale typica moths—proving natural selection tracks environmental change."
);

addMcq(
  "Industrial melanism represents which mode of natural selection?",
  ["Directional selection", "Stabilizing selection", "Disruptive selection", "Artificial selection"],
  0,
  "Industrial melanism is a classic example of directional selection, where environmental shift favors one extreme phenotype (melanism) over the existing mean."
);

addMcq(
  "According to NCERT, did the industrial melanism phenomenon lead to the complete elimination of the white-winged moth in industrial areas?",
  ["No, white moths were never completely wiped out because variation persisted in sheltered niches and rural boundaries", "Yes, every single white moth was killed by birds", "Yes, white moths disappeared from planet Earth", "No, dark moths were completely eliminated instead"],
  0,
  "NCERT explicitly notes: 'no variant was completely wiped out', emphasizing that recessives persist in heterogeneous landscapes and microhabitats."
);

addMcq(
  "The development of antibiotic resistance in bacteria exposed to penicillin or streptomycin illustrates:",
  ["Natural selection operating on pre-existing genetic mutations in bacterial populations", "Lamarckian adaptation where bacteria choose to resist drugs", "The inheritance of acquired immunity from human cells", "Spontaneous generation of new bacteria"],
  0,
  "When a culture is treated with an antibiotic, rare pre-existing mutants possessing resistant alleles survive and proliferate, demonstrating selection on standing variation."
);

addMcq(
  "Why is the evolution of antibiotic resistance in bacteria considered an example of 'anthropogenic' evolution?",
  ["Because human over-use and misuse of antibiotics created the intense selective pressure that drove the rapid evolution of resistant strains", "Because humans injected resistance into bacterial DNA in labs", "Because bacteria evolved inside human brains", "Because antibiotics are naturally found in tap water"],
  0,
  "Anthropogenic evolution denotes evolutionary changes driven directly by human activities, such as widespread clinical and agricultural antibiotic use."
);

addMcq(
  "When farmers spray chemical insecticides like DDT to control agricultural pests, why does the chemical typically become ineffective after several years?",
  ["Rare insects with pre-existing resistance survive and reproduce, while sensitive individuals die, resulting in a resistant population", "The insecticide loses its chemical weight", "Insects learn to drink the insecticide as food", "The sun destroys all chemical bonds within hours"],
  0,
  "Pesticide application eliminates susceptible genotypes; rare pre-existing resistant insects survive and multiply exponentially, rendering subsequent sprays ineffective."
);

addMcq(
  "According to NCERT, the evolution of antibiotic resistance and pesticide resistance proves that evolution:",
  ["Is a stochastic process based on chance events in nature and chance mutations in organisms, occurring within months or years rather than millions of years", "Always takes at least 100 million years to occur", "Never occurs in microorganisms", "Is an orderly divine plan programmed in advance"],
  0,
  "NCERT states: 'evolution is not a directed process in the sense of determinism. It is a stochastic process based on chance events in nature and chance mutation in the organisms... by anthropogenic action... this is true for microbes too.'"
);

// 76-110: Criticisms of Darwinism & Comparison with Lamarck
addMcq(
  "Which fundamental biological concept, unknown during Darwin's lifetime, explained the source and transmission of heritable variations?",
  ["Mendelian genetics (particulate inheritance of genes)", "Lamarckian use and disuse", "Pangenesis theory", "Spontaneous generation"],
  0,
  "Darwin lacked knowledge of Gregor Mendel's particulate genetics; the rediscovery of Mendelism in 1900 provided the discrete hereditary foundation for Darwinian natural selection."
);

addMcq(
  "Darwin's proposed provisional hypothesis of heredity, which assumed that every somatic cell sheds microscopic 'gemmules' into the blood that aggregate in gametes, was called:",
  ["The Theory of Pangenesis", "The Germplasm Theory", "The Gene Theory", "The Chromosomal Theory of Inheritance"],
  0,
  "In 1868, Darwin proposed the provisional hypothesis of Pangenesis, suggesting cells shed 'gemmules' or pangenes collected in gametes, an erroneous Lamarckian-style mechanism."
);

addMcq(
  "Francis Galton disproved Darwin's Pangenesis hypothesis by:",
  ["Transfusing blood between differently colored rabbits and showing offspring exhibited zero coat color changes from the blood donor", "Boiling broth in swan-neck flasks", "Cutting off the tails of mice", "Sparking gases in glass chambers"],
  0,
  "Galton transfused blood between black and white rabbits; offspring of transfused white rabbits showed no dark coat color, proving gemmules do not circulate in blood."
);

addMcq(
  "A classic criticism of Darwinism was that it could explain the 'survival of the fittest', but could not explain the:",
  ["'Arrival of the fittest' (i.e. the initial origin of novel functional variations)", "Extinction of dinosaurs", "Growth of populations", "Fossils in rocks"],
  0,
  "Critics pointed out that while natural selection explains why superior variants survive, it cannot explain how complex, coordinated novel variations originate initially."
);

addMcq(
  "The extreme, cumbersome antler span of the extinct Irish elk (Megaloceros giganteus, spanning over 3.6 meters) is often cited as an evolutionary example of:",
  ["Runaway sexual selection leading to hyper-specialization and potential vulnerability during environmental shifts", "Lamarckian stretching of bones", "Disuse of head organs", "Artificial breeding by ancient humans"],
  0,
  "Intense sexual selection through female mate choice drove hyper-enlarged antlers in Megaloceros; during post-glacial dietary stress, these nutrient-costly antlers became an ecological liability."
);

addMcq(
  "In contrasting Lamarck's and Darwin's explanations for the long neck of the giraffe:",
  ["Lamarck claimed necks stretched within individuals and were inherited; Darwin claimed populations had variable neck lengths, and longer-necked giraffes survived better during food shortages", "Darwin claimed giraffes stretched their necks; Lamarck used genetics", "Both claimed giraffes evolved from horses", "Both claimed giraffes were created simultaneously"],
  0,
  "Lamarck argued individual striving and use lengthened necks across generations; Darwin argued ancestral populations possessed natural variation in neck length, with taller individuals surviving droughts."
);

addMcq(
  "Artificial selection practiced by human agriculturalists and animal breeders provided Darwin with powerful analogical evidence for natural selection because:",
  ["Humans rapidly produced wildly diverse breeds (e.g. diverse pigeon breeds, dogs, and Brassica cultivars) by selectively breeding individuals with desirable variations", "Humans created new species from rocks", "Artificial selection proved spontaneous generation", "Breeding animals eliminates all DNA"],
  0,
  "Darwin bred fancy pigeons (pouters, fantails, tumblers) and studied farm livestock, realizing that nature could select variations over millions of years just as humans did over centuries."
);

addMcq(
  "From a single wild mustard ancestor (Brassica oleracea), artificial selection by humans produced which diverse vegetable crops?",
  ["Cabbage, broccoli, cauliflower, kohlrabi, kale, and Brussels sprouts", "Wheat, rice, corn, and barley", "Carrots, radishes, and beets", "Apples, pears, and peaches"],
  0,
  "Human farmers selected for terminal buds (cabbage), lateral buds (Brussels sprouts), stem (kohlrabi), flower arrest (broccoli), and sterile flowers (cauliflower) from wild Brassica."
);

addMcq(
  "The diverse domesticated dog breeds (from tiny Chihuahuas to giant Great Danes) all belong to a single biological species (Canis familiaris) derived via artificial selection from the:",
  ["Grey wolf (Canis lupus)", "Spotted hyena", "African hunting dog", "Red fox"],
  0,
  "All domestic dog breeds were artificially selected from ancestral Eurasian grey wolves (Canis lupus) over the past 15,000-30,000 years, illustrating the power of selection on standing variation."
);

addMcq(
  "Which term describes natural selection that operates against individuals with extreme phenotypes, favoring the intermediate, average phenotype?",
  ["Stabilizing selection (Centripetal selection)", "Directional selection", "Disruptive selection", "Artificial selection"],
  0,
  "Stabilizing selection eliminates phenotypic extremes and reinforces the population mean, reducing phenotypic variance without changing the mean value."
);

// 111-154: Selection types, modern synthesis integration, and NCERT matches
addMcq(
  "Human infant birth weight is a classic textbook example of stabilizing natural selection because:",
  ["Infants weighing around 3 to 3.5 kg have the lowest perinatal mortality; babies with very low or very high birth weights suffer higher mortality", "All human babies weigh exactly 10 kg", "Babies weigh 500 grams at birth", "Weight has zero effect on infant survival"],
  0,
  "Low-birth-weight babies are vulnerable to hypothermia and infections, while very heavy babies suffer maternal-fetal pelvic dystocia during birth, stabilizing birth weight around 3.3 kg."
);

addMcq(
  "In a graphical distribution of phenotypic traits, stabilizing natural selection causes the phenotypic distribution curve to:",
  ["Get narrower and peak higher around the mean phenotype", "Shift its peak toward one extreme", "Form two distinct peaks at the two extremes", "Flatten out completely into a straight horizontal line"],
  0,
  "Stabilizing selection trims both phenotypic extremes, causing the Gaussian distribution curve to become taller and narrower around the central mean."
);

addMcq(
  "Directional natural selection (Progressive selection) causes the phenotypic distribution curve to:",
  ["Shift its mean peak in one direction toward the favored extreme phenotype", "Narrow around the existing mean", "Split into two distinct peaks", "Disappear completely"],
  0,
  "Directional selection favors variants at one extreme of the phenotypic spectrum, shifting the population distribution curve toward that favored extreme over generations."
);

addMcq(
  "Disruptive natural selection (Diversifying selection) operates by:",
  ["Favoring individuals at both phenotypic extremes simultaneously over intermediate phenotypes, producing a bimodal distribution with two peaks", "Favoring only the exact middle mean", "Eliminating all males in the population", "Halting all evolutionary change forever"],
  0,
  "Disruptive selection disfavors intermediate phenotypes and selects for both extremes (e.g. African seedcracker birds with small vs large bills), producing two distinct phenotypic peaks."
);

addMcq(
  "An example of disruptive natural selection in nature is observed in the African black-bellied seedcracker finch (Pyrenestes ostrinus) where:",
  ["Finches possess either small beaks (adapted for soft marsh sedge seeds) or large beaks (for hard seeds); intermediate beaks are inefficient for both seeds and selected against", "All birds have identical beak sizes", "Birds lose their beaks during winter", "Finches eat only insects"],
  0,
  "Thomas Bates Smith showed that Pyrenestes ostrinus survives on two distinct sedge seed species; intermediate beaks cannot crack hard seeds efficiently and are too clumsy for soft seeds."
);

addMcq(
  "Which of the following is considered an essential prerequisite for natural selection to act upon a phenotypic trait?",
  ["The trait must exhibit phenotypic variation, the variation must be heritable (genetically based), and it must result in differential reproductive success", "The trait must be acquired through gym exercises", "The trait must be identical in 100% of individuals", "The trait must be caused by a virus"],
  0,
  "The three necessary and sufficient conditions for evolution by natural selection are: (1) phenotypic variation, (2) heritability of that variation, and (3) fitness differences."
);

addMcq(
  "What is the evolutionary biological definition of an 'adaptation'?",
  ["Any inherited anatomical, physiological, or behavioral trait that enhances an organism's survival and reproductive fitness in its specific environment", "A habit learned by an animal in a zoo", "A physical injury sustained during hunting", "A disease caused by bacteria"],
  0,
  "An adaptation is an evolutionary feature shaped by natural selection that improves an individual's probability of surviving and leaving viable offspring in its habitat."
);

addMcq(
  "Mimicry, such as the palatable Viceroy butterfly (Limenitis archippus) closely resembling the toxic, unpalatable Monarch butterfly (Danaus plexippus), is an adaptation evolved through:",
  ["Batesian mimicry driven by natural selection against bird predation", "Müllerian mimicry between two harmless flies", "Lamarck's stretching of wings", "Spontaneous generation of warning colors"],
  0,
  "In Batesian mimicry, a harmless palatable mimic gains protection from visual predators by mimicking the aposematic warning coloration of a noxious, unpalatable model."
);

addMcq(
  "In Müllerian mimicry:",
  ["Two or more unpalatable, noxious species evolve similar aposematic warning coloration to reinforce predator learning and reduce predation on both", "A harmless animal looks like a leaf", "A predator disguises itself as a flower", "All animals turn transparent"],
  0,
  "Müllerian mimicry (e.g. Heliconius butterflies) involves two or more toxic species converging on the same warning pattern, sharing the cost of educating naive predators."
);

addMcq(
  "Industrial melanism in Biston betularia demonstrates that natural selection is reversible because:",
  ["When clean air laws reduced industrial soot and lichens regrew on trees, the frequency of white moths rebounded while melanic moths declined", "Moths turned into caterpillars permanently", "Coal pollution increased and all moths died", "Lichens were proven to be artificial"],
  0,
  "Reversibility: when environmental conditions reverted (cleaner air, return of lichens), natural selection reversed its direction, demonstrating that fitness depends on environment."
);

addMcq(
  "Which of the following statements comparing Lamarckism and Darwinism is CORRECT?",
  ["Lamarck emphasized that changes in environment create new needs that drive organ use and disuse; Darwin emphasized that pre-existing variations are filtered by natural selection", "Lamarck discovered DNA chromosomes; Darwin discovered ribosomes", "Darwin believed mice lose tails when amputated; Lamarck disproved it", "Both theories rejected the evolution of species"],
  0,
  "Lamarck believed the environment actively induces needed bodily changes (instructionist); Darwin recognized the environment passively selects pre-existing variations (selectionist)."
);

addMcq(
  "According to NCERT Class 12 Biology, which phrase describes the nature of Darwinian variations?",
  ["Small and directional", "Random and directionless", "Large and discontinuous", "Instantaneous saltations"],
  0,
  "NCERT explicitly contrasts: 'Darwinian variations are small and directional', whereas De Vriesian mutations are 'random and directionless'."
);

addMcq(
  "According to NCERT, Hugo de Vries based his Mutation Theory on experiments conducted on which plant?",
  ["Evening primrose (Oenothera lamarckiana)", "Garden pea (Pisum sativum)", "Snapdragon (Antirrhinum majus)", "Sweet pea (Lathyrus odoratus)"],
  0,
  "Hugo de Vries formulated his Mutation Theory (1901) based on sudden phenotypic variations observed in breeding the evening primrose, Oenothera lamarckiana."
);

addMcq(
  "Hugo de Vries coined which term for a single-step, large mutation that he believed causes speciation?",
  ["Saltation", "Continuous variation", "Branching descent", "Coacervation"],
  0,
  "De Vries believed that speciation was caused by 'saltation' (single-step large mutation) rather than minor continuous variations that Darwin championed."
);

addMcq(
  "Why is Lamarck's concept of 'vital internal force' rejected by modern biological science?",
  ["There is no empirical physical or physiological mechanism by which an organism can consciously will its organs to grow or change their genetic code", "Because all animals have electricity in their blood", "Because plants have no cells", "Because Lamarck was not a scientist"],
  0,
  "Modern genetics and biophysics demonstrate that phenotypic modifications cannot be directed by an inner vitalistic desire (*besoin*); genetic mutations occur randomly."
);

addMcq(
  "The evolution of the long neck of the giraffe according to Darwinian natural selection is explained by:",
  ["Ancestral populations had variable neck lengths; individuals with longer necks had superior access to canopy foliage during droughts, survived at higher rates, and left more offspring", "All giraffes stretched their necks 10 cm every day", "A giraffe mated with an ostrich", "Giraffes have no neck bones"],
  0,
  "Differential survival: natural variation in neck length existed in ancestral herds; longer-necked individuals reached high leaves during droughts and reproduced more successfully."
);

addMcq(
  "A population of bacteria cultured in a laboratory flask is exposed to penicillin. Ninety-nine percent of bacteria die, but a few survive and form a resistant colony. This demonstrates:",
  ["Natural selection selecting for pre-existing resistant genetic variants in the population", "Penicillin acting as food for bacteria", "Bacteria learning how to destroy penicillin by conscious effort", "Spontaneous generation of new species"],
  0,
  "The antibiotic did not create resistance; it acted as a harsh selective screen, eliminating susceptible cells and allowing pre-existing resistant mutants to dominate."
);

addMcq(
  "According to NCERT Class 12, the evolution of resistance to herbicides, pesticides, and antibiotics within a short period of time is evidence that evolution:",
  ["Can occur by anthropogenic action in a short timescale, not always requiring millions of years", "Has permanently stopped on Earth", "Occurs only in laboratory test tubes", "Is purely an illusion"],
  0,
  "NCERT highlights: 'These are examples of evolution by anthropogenic action... This also tells us that evolution is not a directed process in the sense of determinism... but can occur in days or years.'"
);

addMcq(
  "Which factor prevents a population of oysters, which produce millions of eggs per spawn, from overwhelming and filling the world's oceans?",
  ["Massive mortality of eggs, larvae, and juveniles due to limited food, predators, and abiotic environmental struggle", "Oyster eggs never hatch", "All oceans are made of fresh water", "Oysters eat all their own eggs"],
  0,
  "Malthusian environmental checks, predation, and limited planktonic food kill over 99.99% of oyster larvae, maintaining long-term population equilibrium."
);

addMcq(
  "Darwin's Finches and the Peppered Moth both illustrate the fundamental principle that:",
  ["Natural selection acts on phenotypic variations in populations, altering allele and trait frequencies in response to ecological selective pressures", "Organisms evolve by willpower", "Mutations are always lethal", "Species never change over time"],
  0,
  "Both classic case studies prove that natural selection acts on standing phenotypic diversity, driving evolutionary change in response to changing ecological conditions."
);


const extra87Mcqs = [
  [
    "The term 'Biology' was independently coined in 1802 by Jean-Baptiste Lamarck and which German naturalist?",
    [
      "Gottfried Reinhold Treviranus",
      "Carolus Linnaeus",
      "Georges Cuvier",
      "Gregor Mendel"
    ],
    0,
    "Lamarck in France and Treviranus in Germany independently introduced the term 'Biology' in 1802 to designate the scientific study of living organisms."
  ],
  [
    "Lamarck divided the animal kingdom into two major groups for the first time in zoological history:",
    [
      "Invertebrata (animals without backbones) and Vertebrata",
      "Mammals and Insects only",
      "Birds and Reptiles only",
      "Herbivores and Carnivores"
    ],
    0,
    "Lamarck was a pioneer in invertebrate zoology, establishing the formal taxonomic category 'Invertebrata' and classifying worms, molluscs, and insects."
  ],
  [
    "According to Lamarck, the migration of both eyes to the upper side of the head in flatfishes (such as soles and flounders, Pleuronectidae) occurred because:",
    [
      "Ancestral fish lay on one side on the sea bottom and strained their lower eye upwards toward light, causing eye migration through continuous muscular use",
      "Flatfishes were created with one eye on each side like all fish",
      "A predator bit off the lower eye",
      "Water pressure flattened the head in one second"
    ],
    0,
    "Lamarck claimed that benthic flatfish lying on their side continuously directed the lower eye upward, causing the orbit to migrate onto the upper pigmented side across generations."
  ],
  [
    "Why does the practice of circumcision in Jewish and Muslim boys for over 4,000 years fail to produce male infants born without a foreskin?",
    [
      "Circumcision is a surgical somatic modification that does not alter the genomic sequence of germline DNA",
      "Foreskins are made of bone",
      "Circumcision alters only female chromosomes",
      "Human DNA mutates every year"
    ],
    0,
    "Like Weismann's mouse-tail experiments, ritual circumcision modifies somatic tissue without altering germline alleles, providing clear disproof of Lamarckism."
  ],
  [
    "The Ukrainian agronomist Trofim Lysenko rejected Mendelian genetics in the Soviet Union and promoted a politically backed form of Neo-Lamarckism known as:",
    [
      "Lysenkoism (Michurinism)",
      "Darwinism",
      "Mendelism",
      "Modern Synthesis"
    ],
    0,
    "Lysenkoism claimed that crop plants could be 're-educated' by environmental treatments (vernalization) and inherit acquired cold-tolerance, disastrously destroying Soviet agriculture."
  ],
  [
    "In the 1920s, Austrian zoologist Paul Kammerer claimed to have proven Lamarckism by forcing midwife toads (Alytes obstetricans) to breed in water, producing:",
    [
      "Male toads with acquired black nuptial pads on their thumbs",
      "Toads with wings",
      "Toads that turned into fish",
      "Toads with five legs"
    ],
    0,
    "Kammerer claimed terrestrial midwife toads acquired aquatic nuptial pads when forced to breed in water; his specimens were later revealed to have been faked by injecting India ink."
  ],
  [
    "Modern transgenerational epigenetic inheritance (e.g. DNA methylation changes caused by environmental stress) differs fundamentally from classical Lamarckism because:",
    [
      "Epigenetic marks are chemical modifications of DNA/histones that do not rewrite the underlying genetic code, and are largely erased during germline reprogramming",
      "Epigenetics proves that giraffes stretch their necks",
      "Epigenetics shows organisms can choose their mutations",
      "Epigenetics applies only to rocks"
    ],
    0,
    "While some epigenetic states can persist across a few generations, they do not involve Lamarck's conscious striving (*besoin*) and are typically reset during gametogenesis."
  ],
  [
    "Which of the following is considered an example of a somatogenic variation?",
    [
      "Muscles enlarged through daily athletic training in a gym",
      "Blue eye color inherited from parents",
      "Hemophilia inherited on the X chromosome",
      "Sickle cell anemia caused by an HbS allele"
    ],
    0,
    "Somatogenic variations are acquired somatic phenotypic changes induced by environmental use, disuse, or trauma, and are not genetically heritable."
  ],
  [
    "In August Weismann's mouse tail amputation experiment, what was the total number of successive generations of mice whose tails were docked?",
    [
      "22 generations",
      "2 generations",
      "500 generations",
      "1 generation"
    ],
    0,
    "Weismann systematically amputated the tails of breeding white mice across 22 consecutive generations (over 1,500 mice), finding zero inheritance of taillessness."
  ],
  [
    "The presence of non-functional vestigial pelvic girdles in pythons was cited by Lamarck as evidence of:",
    [
      "Degeneration of limbs through long-continued disuse in burrowing ancestors",
      "The direct creation of snakes with internal bones",
      "Snakes preparing to grow legs next year",
      "Bones being made of swallowed food"
    ],
    0,
    "Lamarck cited vestigial organs as morphological proof that disused anatomical structures progressively atrophy and degenerate over evolutionary time."
  ],
  [
    "Charles Darwin was born on February 12, 1809, sharing the exact same birthdate with which famous historical figure?",
    [
      "Abraham Lincoln",
      "Napoleon Bonaparte",
      "Thomas Jefferson",
      "George Washington"
    ],
    0,
    "Remarkably, Charles Darwin and American President Abraham Lincoln were born on the exact same day: February 12, 1809."
  ],
  [
    "Before joining the HMS Beagle voyage, Charles Darwin studied medicine at Edinburgh University and later prepared for a clerical career in theology at:",
    [
      "Christ's College, Cambridge University",
      "Oxford University",
      "Harvard University",
      "University of Paris"
    ],
    0,
    "Darwin abandoned medical studies at Edinburgh and was sent to Christ's College, Cambridge to study theology, where he was mentored by botanist John Stevens Henslow."
  ],
  [
    "Who was the botanist at Cambridge University who recommended Charles Darwin for the unpaid position of naturalist aboard HMS Beagle?",
    [
      "John Stevens Henslow",
      "Charles Lyell",
      "Joseph Hooker",
      "Thomas Huxley"
    ],
    0,
    "Reverend John Stevens Henslow recognized Darwin's naturalist talents and secured him the fateful appointment as companion/naturalist to Captain FitzRoy on HMS Beagle."
  ],
  [
    "Captain Robert FitzRoy gave Charles Darwin a copy of which influential geology book at the start of the Beagle voyage?",
    [
      "'Principles of Geology' by Charles Lyell",
      "'Philosophie Zoologique' by Lamarck",
      "'Essay on Population' by Malthus",
      "'Origin of Species'"
    ],
    0,
    "Lyell's 'Principles of Geology' introduced Darwin to uniformitarianism, convincing him that Earth was millions of years old and shaped by slow, continuous physical processes."
  ],
  [
    "Thomas Malthus categorized the natural forces that keep human and animal populations from exploding to infinity into:",
    [
      "Positive checks (famine, disease, war, predation) and preventive checks",
      "Artificial selection and natural selection",
      "Mutations and crossovers",
      "Chemical and physical barriers"
    ],
    0,
    "Malthus identified 'positive checks' that increase mortality (starvation, pestilence, conflict) and 'preventive checks' that reduce fertility, keeping populations tethered to resources."
  ],
  [
    "In Darwin's famous hypothetical calculation, a single pair of slowly reproducing elephants (producing ~6 calves in a 90-year lifespan) would, without mortality checks, produce how many descendants in 750 years?",
    [
      "Approximately 19 million elephants",
      "Only 10 elephants",
      "Over 500 billion elephants",
      "Zero elephants"
    ],
    0,
    "Darwin calculated that even the slowest-breeding mammal (the elephant) would yield a standing population of ~19 million descendants from a single pair in just 750 years if all survived."
  ],
  [
    "Thomas Henry Huxley earned which famous nickname due to his fierce public defenses of Darwin's theory of evolution against religious and scientific critics?",
    [
      "'Darwin's Bulldog'",
      "'The Father of Genetics'",
      "'The Linnean Champion'",
      "'The Bishop's Hammer'"
    ],
    0,
    "T.H. Huxley embraced the moniker 'Darwin's Bulldog' for his passionate public defense of Darwinian evolution, famously debating Bishop Samuel Wilberforce at Oxford in 1860."
  ],
  [
    "During the 1860 Oxford evolution debate, when Bishop Samuel Wilberforce sarcastically asked Huxley whether he was descended from an ape on his grandfather's or grandmother's side, Huxley replied that he would rather be descended from an ape than from:",
    [
      "A man of intellectual gifts who used his influence to obscure the truth and introduce prejudice into scientific debate",
      "A bishop of the Church of England",
      "A sea sponge",
      "A domestic dog"
    ],
    0,
    "Huxley's legendary retort declared that he had no shame in having an ape for an ancestor, but would be ashamed to be connected with a man who used eloquence to obscure truth."
  ],
  [
    "In 1868, Charles Darwin published a two-volume work exploring artificial breeding and proposing his hypothesis of pangenesis, titled:",
    [
      "'The Variation of Animals and Plants under Domestication'",
      "'The Descent of Man'",
      "'The Expression of Emotions in Man and Animals'",
      "'On the Origin of Species'"
    ],
    0,
    "In 'The Variation of Animals and Plants under Domestication' (1868), Darwin compiled immense data on livestock breeding and introduced his provisional hypothesis of pangenesis."
  ],
  [
    "In 1871, Darwin directly tackled the subject of human evolutionary origins and sexual selection in his major book titled:",
    [
      "'The Descent of Man, and Selection in Relation to Sex'",
      "'The Origin of Species'",
      "'The Voyage of the Beagle'",
      "'Principles of Geology'"
    ],
    0,
    "In 'The Descent of Man' (1871), Darwin applied natural and sexual selection explicitly to human evolution, concluding that humans originated in Africa from ancestral ape-like primates."
  ],
  [
    "From the ancestral wild Rock Dove (Columba livia), Charles Darwin studied the artificial creation by pigeon fanciers of which wildly diverse domestic breeds?",
    [
      "Pouters, Fantails, Runts, Barbs, Tumblers, and Carriers",
      "Eagles, hawks, and falcons",
      "Ostriches and kiwis",
      "Penguins and pelicans"
    ],
    0,
    "Darwin joined London pigeon clubs and kept all domestic breeds (fantails, pouters, tumblers), proving that human selection had produced extreme morphological disparity from wild Columba livia."
  ],
  [
    "The Scottish engineer Fleeming Jenkin presented a major mathematical criticism of Darwin's theory in 1867 known as the 'swamping argument', which claimed that:",
    [
      "Under blending inheritance, any rare, advantageous new variation would be diluted by 50% in each generation of mating with normal individuals, disappearing completely",
      "Natural selection was too fast",
      "Animals cannot have variations",
      "DNA is indestructible"
    ],
    0,
    "Under the accepted 19th-century dogma of 'blending inheritance', novel traits would blend away like drops of black ink in white paint; only Mendelian particulate inheritance resolved this problem."
  ],
  [
    "The phrase 'the survival of the fittest' in evolutionary biology is biologically equivalent to:",
    [
      "Differential reproductive success (leaving more offspring in the next generation)",
      "Being the largest, heaviest animal in the herd",
      "Winning physical fist-fights with competitors",
      "Living for 200 years without reproducing"
    ],
    0,
    "Evolutionary fitness ($W$) measures an individual's relative genetic contribution to future generations via surviving, fertile progeny, not brute muscular strength."
  ],
  [
    "Which type of natural selection acts to preserve the phenotypic status quo in a population living in an unchanging, stable environment?",
    [
      "Stabilizing selection",
      "Directional selection",
      "Disruptive selection",
      "Artificial selection"
    ],
    0,
    "Stabilizing selection operates when environmental conditions are stable, weeding out deviant extreme phenotypes and conserving optimal adaptations."
  ],
  [
    "In sickle cell trait ($HbA/HbS$), stabilizing natural selection maintains the sickle allele at high frequencies in malaria-endemic regions through:",
    [
      "Heterozygote advantage (overdominance): $HbA/HbS$ individuals resist lethal falciparum malaria without suffering fatal sickle-cell crises",
      "Homozygous $HbS/HbS$ individuals being immortal",
      "Malaria destroying all normal hemoglobin",
      "Sickle cells turning into white blood cells"
    ],
    0,
    "Heterozygotes ($HbA/HbS$) enjoy balanced selective protection against Plasmodium falciparum malaria, maintaining both $HbA$ and $HbS$ alleles in the population."
  ],
  [
    "Directional natural selection typically operates when:",
    [
      "A population experiences a sustained directional change in environmental conditions (e.g. climate warming, new pesticide, new predator)",
      "The environment remains perfectly identical for 100 million years",
      "All organisms stop mating",
      "Every individual has the exact same phenotype"
    ],
    0,
    "When environmental conditions change, phenotypes that were previously rare at one extreme may confer higher fitness, shifting the population distribution curve in that direction."
  ],
  [
    "The progressive increase in cranial capacity during the evolution of the human lineage from Australopithecus (~450 cc) to modern Homo sapiens (~1,400 cc) is an example of:",
    [
      "Directional selection favoring larger, more complex brains",
      "Stabilizing selection keeping brain size constant",
      "Disruptive selection splitting brain size in half",
      "Atavism"
    ],
    0,
    "The steady directional expansion of cerebral cortex and cranial volume over 3 million years represents intense directional selection for cognitive intelligence and tool use."
  ],
  [
    "Disruptive natural selection is biologically important in macro-evolution because it can:",
    [
      "Promote genetic polymorphism and initiate sympatric speciation by splitting a population into two distinct adaptive phenotypes",
      "Eliminate all genetic variation",
      "Turn all organisms into identical clones",
      "Stop all evolutionary change"
    ],
    0,
    "By disfavoring intermediates and selecting for two extreme ecological specialists, disruptive selection drives bimodal diversification that can lead to speciation."
  ],
  [
    "In coho salmon (Oncorhynchus kisutch), disruptive selection produces two distinct successful male reproductive morphs:",
    [
      "Large aggressive 'hooknose' males (which fight for females) and small agile 'jack' males (which sneak fertilizations)",
      "Flying males and walking males",
      "Males that have no sperm",
      "Males that turn into females every hour"
    ],
    0,
    "Disruptive selection favors large territory-holding hooknoses and small stealthy sneaker jacks; intermediate-sized males are too small to fight and too large to hide, suffering low fitness."
  ],
  [
    "In the land snail Cepaea nemoralis, shell color and banding patterns (yellow unbanded vs brown banded) are maintained in diverse woodland and grassland habitats by:",
    [
      "Disruptive and balancing selection driven by visual thrush bird predation and thermal microclimates",
      "Lamarck's stretching of shells",
      "Chemical pollution from factories",
      "Spontaneous generation"
    ],
    0,
    "Thrushes hunt snails visually; unbanded yellow snails are camouflaged in sunlit grasslands, while dark banded snails are camouflaged in leaf-littered woods, maintaining polymorphism."
  ],
  [
    "Sexual selection was defined by Charles Darwin as a form of natural selection that depends on:",
    [
      "The advantage which certain individuals have over other individuals of the same sex and species solely in respect to reproduction",
      "The struggle against winter cold",
      "The ability to run fast from tigers",
      "The ability to eat poisonous plants"
    ],
    0,
    "In 'The Descent of Man' (1871), Darwin defined sexual selection as selection driven by competition for access to mates and reproductive fertilization."
  ],
  [
    "Intrasexual selection typically involves:",
    [
      "Direct competitive combat or posturing between members of the same sex (usually males) for access to mates (e.g. bighorn sheep horns, deer antlers)",
      "Female choice based on feather color",
      "Competition against predators",
      "Struggle against drought"
    ],
    0,
    "Intrasexual selection is male-male competition, selecting for armaments, large body size, tusks, and aggressive behavioral displays."
  ],
  [
    "Intersexual selection (epigamic selection) typically involves:",
    [
      "Mate choice, wherein members of one sex (usually choosy females) selectively mate with individuals of the opposite sex displaying attractive courtship ornaments or displays",
      "Male-male fighting to the death",
      "Parental care of infants",
      "Feeding on fruit"
    ],
    0,
    "Intersexual selection is female mate choice, driving the evolution of elaborate ornaments (peacock tails, bird of paradise plumage) that signal male health and genetic quality."
  ],
  [
    "The brilliant, iridescent tail plumage of the male peacock (Pavo cristatus), which hinders flight and increases predation risk, evolved through:",
    [
      "Intersexual selection via female peahen mate choice",
      "Natural selection for escaping predators",
      "Lamarck's stretching of tail feathers",
      "Vestigial evolution"
    ],
    0,
    "Peahens preferentially mate with peacocks displaying large, symmetrical, eye-spotted trains; the reproductive advantage of attracting mates outweighs the survival cost of the cumbersome tail."
  ],
  [
    "Amotz Zahavi's 'Handicap Principle' explains the evolution of costly male courtship ornaments by proposing that:",
    [
      "Elaborate, costly ornaments act as honest signals of genetic quality because only high-vitality males can afford the metabolic handicap of carrying them",
      "Ornaments are physical weapons used to kill females",
      "Ornaments are caused by bacterial infections",
      "Females choose ugly males"
    ],
    0,
    "Zahavi's handicap principle argues that extravagant ornaments (e.g. peacock tail) are reliable indicators of good genes precisely because they are costly and cannot be faked by weak males."
  ],
  [
    "Negative frequency-dependent natural selection occurs when:",
    [
      "The fitness of a phenotype increases as it becomes rarer in the population, maintaining balanced genetic polymorphism",
      "The commonest phenotype always wins",
      "All variants are eliminated immediately",
      "Mutations occur only on Mondays"
    ],
    0,
    "In negative frequency-dependent selection (e.g. left- vs right-mouthed scale-eating cichlids, or rare-male mating advantage), rare variants have higher fitness, preventing fixation."
  ],
  [
    "In the scale-eating cichlid Perissodus microlepis in Lake Tanganyika, fish have mouths twisted either to the left or to the right. Frequency-dependent selection maintains:",
    [
      "An equal $50:50$ ratio of left-mouthed and right-mouthed morphs because prey fish guard the side most frequently attacked",
      "100% left-mouthed fish",
      "100% straight-mouthed fish",
      "Zero fish surviving"
    ],
    0,
    "Prey fish become vigilant on the flank attacked by the common morph; the rarer morph then enjoys hunting success from the unguarded flank, stabilizing the morph ratio at 1:1."
  ],
  [
    "Kin selection, formulated by W.D. Hamilton (1964), explains the evolution of altruistic behaviors in social animals based on:",
    [
      "Hamilton's Rule ($rB > C$), where an altruistic allele increases in frequency if the reproductive benefit to relatives ($B$) weighted by genetic relatedness ($r$) exceeds the cost ($C$)",
      "Animals sacrificing themselves for the good of the entire planet",
      "Animals being forced by human trainers",
      "Lamarckian willpower"
    ],
    0,
    "Hamilton's rule proves that inclusive fitness drives the evolution of altruism: genes for helping relatives propagate because relatives carry copies of the identical altruistic allele."
  ],
  [
    "The evolutionary biologist George C. Williams in his 1966 book 'Adaptation and Natural Selection' demonstrated that natural selection operates primarily at the level of the:",
    [
      "Individual organism and individual gene, rather than for 'the good of the species' or group",
      "Ecosystem as a whole",
      "Planet Earth",
      "Solar system"
    ],
    0,
    "Williams dismantled naive 'group selection', proving that adaptations evolve because they benefit individual genes and organisms, not the nebulous 'good of the species'."
  ],
  [
    "Why does the widespread prophylactic administration of low-dose antibiotics in livestock feed create a global public health hazard?",
    [
      "It continuously selects for multidrug-resistant bacterial strains that jump from livestock to humans via food, water, or farm runoff",
      "It makes meat taste too sweet",
      "It turns animal bones into rubber",
      "It eliminates all animal protein"
    ],
    0,
    "Sub-therapeutic antibiotic feed creates massive directional selection across trillions of farm bacteria, accelerating the global proliferation of mobile antibiotic resistance genes."
  ],
  [
    "Warfarin resistance in brown rats (Rattus norvegicus) evolved in Britain within years of widespread anticoagulant poison use because:",
    [
      "Rats carrying pre-existing missense mutations in the VKORC1 gene survived warfarin poisoning and multiplied (directional selection)",
      "Rats learned how to taste warfarin and spit it out",
      "Warfarin caused mice to turn into rats",
      "Rats stopped eating food"
    ],
    0,
    "Warfarin inhibits vitamin K epoxide reductase; mutant rats carrying missense VKORC1 alleles synthesized active clotting factors despite warfarin, dominating urban sewers."
  ],
  [
    "Glyphosate (Roundup) resistance in agricultural weeds (such as Palmer amaranth and horseweed) is an example of:",
    [
      "Anthropogenic directional natural selection driven by intense agricultural herbicide application",
      "Lamarckian plants choosing to love herbicide",
      "Plants learning from insects",
      "Spontaneous generation of new weed species"
    ],
    0,
    "Repeated spraying of glyphosate selected for rare weeds possessing amplified 5-enolpyruvylshikimate-3-phosphate synthase (EPSPS) genes or target-site mutations, conferring resistance."
  ],
  [
    "The evolutionary concept of 'Evolutionary Arms Race' (or the Red Queen Hypothesis, Van Valen 1973) describes:",
    [
      "The co-evolutionary dynamic between predators and prey (or hosts and parasites) where each must constantly adapt merely to maintain its relative fitness",
      "Nations building nuclear submarines",
      "Dinosaurs shooting lasers",
      "Plants competing for human fertilizer"
    ],
    0,
    "The Red Queen hypothesis ('it takes all the running you can do, to keep in the same place') models the reciprocal, escalating adaptations between competing antagonistic species."
  ],
  [
    "In industrial melanism, the genetic mutation responsible for the melanic carbonaria phenotype of Biston betularia was discovered in 2016 to be caused by:",
    [
      "The insertion of a large transposable element (cortex gene transposon) that upregulates the cell-cycle cortex gene during wing disc development",
      "A single point deletion of the ribosome",
      "A complete duplication of the heart",
      "A fungal infection inside the wing"
    ],
    0,
    "van't Hof et al. (Nature, 2016) discovered that a 21.9-kb transposable element insertion in the cortex gene occurred around 1819, creating the dominant melanic allele."
  ],
  [
    "Which of the following is NOT one of the core observations on which Darwin based his Theory of Natural Selection?",
    [
      "All mutations are caused by cosmic gamma radiation and occur as large saltations",
      "Populations have immense potential fertility to increase exponentially",
      "Natural resource supplies remain limited",
      "Individuals within a population display heritable phenotypic variations"
    ],
    0,
    "Saltation and cosmic mutations are De Vriesian concepts; Darwin's foundation was Malthusian overproduction, limited resources, struggle for existence, and heritable variation."
  ],
  [
    "According to NCERT Class 12, who noted that 'the rate of appearance of new forms is linked to the life cycle or the life span of an organism'?",
    [
      "Charles Darwin",
      "Gregor Mendel",
      "Jean-Baptiste Lamarck",
      "Hugo de Vries"
    ],
    0,
    "NCERT notes: 'The rate of appearance of new forms is linked to the life cycle or the life span. Microbes that divide after every 20 minutes can form a colony of billions within days... A new species could appear in a few days.'"
  ],
  [
    "According to NCERT, why can a colony of bacteria ($A$) develop a new variant ($B$) capable of surviving in a novel nutrient medium in just a few days, whereas in birds or mammals the same evolutionary change would take millions of years?",
    [
      "Because bacteria have generation times of only 20 minutes, allowing millions of generations to pass in days, whereas vertebrates have generation spans of years or decades",
      "Because bacteria have no DNA",
      "Because birds are immune to natural selection",
      "Because mammals cannot mutate"
    ],
    0,
    "Evolutionary rate is directly linked to generation turnover; bacteria cycle through generations in minutes, accelerating natural selection millions of times compared to long-lived vertebrates."
  ],
  [
    "Which of the following phrases is used in NCERT Class 12 to summarize that natural selection is an outcome of differential reproductive capability?",
    [
      "'Nature selects for fitness... fitness is based on characteristics which are inherited... those who are better fit in an environment, leave more progeny than others.'",
      "'Nature forces animals to stretch their necks.'",
      "'Mutations are always directed toward a divine goal.'",
      "'All organisms survive equally in nature.'"
    ],
    0,
    "NCERT explicitly states that fitness is based on inherited traits that enable an organism to survive better and leave more progeny, concluding: 'These, therefore, will survive more and hence are selected by nature.'"
  ],
  [
    "A major reason why Darwin delayed publishing his theory of evolution for over twenty years (from 1838 until 1859) was that:",
    [
      "He spent decades amassing exhaustive empirical evidence from barnacles, pigeons, geology, and breeding to withstand anticipated scientific and religious criticism",
      "He forgot where he placed his manuscript",
      "He stopped believing in evolution",
      "Captain FitzRoy confiscated his notebooks"
    ],
    0,
    "Aware of the revolutionary impact and religious controversies of evolution, Darwin meticulously accumulated overwhelming evidence across multiple disciplines before publishing in 1859."
  ],
  [
    "According to NCERT Class 12 Biology, which statement is TRUE regarding the peppered moth (Biston betularia) in England?",
    [
      "In mixed populations, those that can camouflage themselves better survive in larger numbers and reproduce",
      "White moths transformed into black moths within 5 seconds of touching soot",
      "Dark moths are a separate species that flew in from Australia",
      "Lichens thrive in high sulfur dioxide coal smoke"
    ],
    0,
    "NCERT emphasizes: 'In a mixed population, those that can camouflage themselves better, i.e., hide in the background, survive in larger numbers... This is natural selection in action.'"
  ],
  [
    "The concept that 'nature selects those individuals with useful heritable variations who are better adapted to utilize available resources' represents the essence of:",
    [
      "Darwinian Natural Selection",
      "Lamarckian Use and Disuse",
      "De Vriesian Saltation",
      "Special Divine Creation"
    ],
    0,
    "Darwin's core thesis: individuals whose inherited variations confer an advantage in harvesting resources or avoiding hazards survive better and transmit those traits to progeny."
  ],
  [
    "Lamarckism is classified in the philosophy of science as an 'instructionist' theory of evolution, whereas Darwinism is classified as a/an:",
    [
      "'Selectionist' theory of evolution",
      "'Creationist' theory",
      "'Catastrophic' theory",
      "'Inorganic' theory"
    ],
    0,
    "Lamarckism claimed the environment instructs organisms to develop needed traits; Darwinism proved the environment merely acts as a selective filter on pre-existing random variations."
  ]
];
extra87Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

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

const allQuestions = [...arQuestions, ...mcqQuestions,
  {
    type: "MCQ",
    question: "Darwin's finches discovered on the Galapagos Islands provide one of the best examples of:",
    options: ["Adaptive radiation and natural selection","Retrogressive evolution","Convergent evolution alone","Saltation"],
    correctAnswer: 0,
    explanation: "Darwin's finches represent a classic textbook example of adaptive radiation and evolution by natural selection, where different beak types evolved from an ancestral seed-eating stock to exploit diverse ecological niches."
  },
  {
    type: "MCQ",
    question: "The concept of 'reproductive fitness' as defined by Charles Darwin refers fundamentally to:",
    options: ["Physical strength and aggressiveness","Number of viable offspring left behind to the next generation","Longevity and individual life span","Capacity to withstand extreme climatic conditions"],
    correctAnswer: 1,
    explanation: "Darwinian fitness is essentially reproductive fitness: individuals that are better adapted to their environment leave more viable progeny in the next generation than less adapted individuals."
  },
  {
    type: "MCQ",
    question: "Which of the following breeds of pigeons was extensively studied by Charles Darwin to understand artificial selection?",
    options: ["Jacobin, Pouter, and Fantail","Peregrine falcon","Carrier pigeon alone","Passenger pigeon"],
    correctAnswer: 0,
    explanation: "Darwin bred domestic pigeons (including Jacobin, Fantail, Pouter) derived from the wild rock pigeon (Columba livia) to demonstrate how intense artificial selection by humans can produce dramatic morphological variations."
  },
  {
    type: "MCQ",
    question: "In the context of industrial melanism in England, what occurred following the Clean Air Acts and reduction of coal burning?",
    options: ["The black melanic form completely disappeared overnight","The proportion of light-coloured moths (Biston betularia typica) increased again","The melanic form increased further","Both forms ceased reproducing"],
    correctAnswer: 1,
    explanation: "With the implementation of Clean Air Acts and smoke control, tree trunks regained lichen cover and less soot, leading to an increase in the frequency of light-coloured typica moths due to reversed selective pressure."
  },
  {
    type: "MCQ",
    question: "Which of the following statements regarding the Lederberg replica plating experiment is correct?",
    options: ["Penicillin induces mutations that confer resistance to bacteria","Penicillin-resistant bacterial mutants were pre-existing in the culture prior to penicillin exposure","Bacteria acquire resistance through somatic adaptation during exposure","Mutations in bacteria only occur after antibiotic exposure"],
    correctAnswer: 1,
    explanation: "The Lederberg replica plating experiment proved that penicillin-resistant bacterial mutants were pre-existing in the bacterial population, and penicillin acted merely as a selective agent."
  },
  {
    type: "MCQ",
    question: "DDT resistance in houseflies and mosquitoes is an example of:",
    options: ["Natural selection brought about by anthropogenic action","Lamarckian inheritance of acquired immunity","Disruptive selection favouring non-resistant forms","Spontaneous generation of chemical defenses"],
    correctAnswer: 0,
    explanation: "Widespread application of DDT selected for pre-existing resistant variants in mosquito and fly populations. This is evolution by natural selection driven by human activities (anthropogenic action)."
  },
  {
    type: "MCQ",
    question: "August Weismann's experiments on cutting the tails of mice for 22 generations proved that:",
    options: ["Acquired somatic modifications are not inherited through germ cells","Mice can survive without tails indefinitely","Lamarck's theory of use and disuse is entirely universally correct","Mutations can be directed by physical trauma"],
    correctAnswer: 0,
    explanation: "Weismann's germplasm theory established that variations occurring in somatoplasm are not transmitted to progeny; only variations originating in the germplasm can be inherited."
  },
  {
    type: "MCQ",
    question: "Who coined the famous phrase 'Survival of the fittest'?",
    options: ["Charles Darwin","Herbert Spencer","Alfred Russel Wallace","Jean-Baptiste Lamarck"],
    correctAnswer: 1,
    explanation: "The philosopher Herbert Spencer coined the phrase 'Survival of the fittest' in his Principles of Biology (1864) after reading Darwin's work; Darwin later adopted it as a metaphor for natural selection."
  },
  {
    type: "MCQ",
    question: "Darwin's famous book 'On the Origin of Species by Means of Natural Selection' was published in the year:",
    options: ["1809","1831","1859","1882"],
    correctAnswer: 2,
    explanation: "Darwin published 'On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life' on November 24, 1859."
  },
  {
    type: "MCQ",
    question: "Lamarck's theory of evolution was published in 1809 in his famous book titled:",
    options: ["Origin of Species","Philosophie Zoologique","Systema Naturae","Principles of Geology"],
    correctAnswer: 1,
    explanation: "Jean-Baptiste Lamarck expounded his evolutionary ideas in 'Philosophie Zoologique' published in 1809, the year Charles Darwin was born."
  },
  {
    type: "MCQ",
    question: "Which of the following is NOT an example cited by Lamarck or classical Lamarckians in support of use and disuse?",
    options: ["Elongation of neck and forelimbs in giraffes","Loss of limbs in snakes due to creeping burrowing habit","Development of webbed feet in aquatic birds","Evolution of industrial melanism in peppered moth"],
    correctAnswer: 3,
    explanation: "Industrial melanism in Biston betularia is an established example of Darwinian natural selection acting on pre-existing genetic variations, not Lamarckian use and disuse."
  },
  {
    type: "MCQ",
    question: "According to Darwin, evolution is characterized as:",
    options: ["A sudden, single-step large mutation (saltation)","A slow, gradual, and continuous process driven by small variations","A retrogressive and catastrophic event","An entirely deterministic and predictable phenomenon"],
    correctAnswer: 1,
    explanation: "Darwin conceived evolution as a slow, gradual, continuous process (gradualism) brought about by the accumulation of small, heritable variations over long geological timescales."
  },
  {
    type: "MCQ",
    question: "Which factor primarily limits the unchecked exponential growth of animal populations according to Darwin and Malthus?",
    options: ["Unlimited availability of space and food","Struggle for existence due to limited natural resources","Absence of interspecific competition","Uniform reproductive capacity across all individuals"],
    correctAnswer: 1,
    explanation: "Natural resources are limited, so even though populations have the theoretical biotic potential to grow exponentially, they remain stable in size due to competition and struggle for food and space."
  },
  {
    type: "MCQ",
    question: "Interspecific struggle for existence occurs between:",
    options: ["Individuals of the same species occupying identical niches","Individuals of different species competing for food, shelter, or resources","Organisms and abiotic environmental factors such as cold and drought","Members of the same family or troop"],
    correctAnswer: 1,
    explanation: "Interspecific struggle is the competition between individuals of different species for shared resources like food, territory, and sunlight."
  },
  {
    type: "MCQ",
    question: "Environmental or extra-specific struggle for existence is exemplified by:",
    options: ["Lions competing with hyenas for a kill","Two male stags fighting for mating rights","Animals enduring severe drought, heat, frost, or floods","Bacteria competing with fungi for nutrients"],
    correctAnswer: 2,
    explanation: "Environmental struggle (extra-specific) involves organisms surviving against harsh abiotic conditions such as extreme temperature, drought, floods, and earthquakes."
  },
  {
    type: "MCQ",
    question: "Which of the following correctly pairs the scientist with their contribution to evolutionary thought?",
    options: ["Alfred Russel Wallace - Essay on the Principle of Population","Thomas Malthus - Concept of population growth outstripping food supply","Jean-Baptiste Lamarck - Mutation theory of evolution","Charles Darwin - Inheritance of acquired characters via gemmules only"],
    correctAnswer: 1,
    explanation: "Thomas Malthus wrote 'An Essay on the Principle of Population' (1798), proposing that population increases geometrically while food production increases arithmetically."
  },
  {
    type: "MCQ",
    question: "A major objection to Darwin's original theory was its inability to explain:",
    options: ["The role of natural selection in differential survival","The origin, cause, and genetic mechanism of variations","The high reproductive potential of organisms","The occurrence of struggle for existence"],
    correctAnswer: 1,
    explanation: "Darwin recognized that variations exist and are inherited, but he could not explain the genetic source or mechanism of origin of these variations (as Mendel's laws were not yet widely known)."
  },
  {
    type: "MCQ",
    question: "The term 'Neo-Lamarckism' refers to modern attempts to explain evolution by:",
    options: ["Attributing changes to direct environmental influence and somatic modifications transmitted in some circumstances","Completely discarding environmental influence in favour of saltation","Explaining speciation purely by chromosomal non-disjunction","Relying solely on mathematical models of Hardy-Weinberg equilibrium"],
    correctAnswer: 0,
    explanation: "Neo-Lamarckism attempts to revive Lamarck's ideas by asserting that environmental changes directly or indirectly affect organisms and that some somatic modifications might be transmitted to germ cells."
  },
  {
    type: "MCQ",
    question: "Why did Darwin consider 'vestigial organs' as important evidence for evolution?",
    options: ["They prove that organs never undergo any reduction or loss","They represent degenerated structures that were functional in ancestors, demonstrating change over time","They show that new organs appear suddenly without precursors","They demonstrate that organisms are created in their final perfect form"],
    correctAnswer: 1,
    explanation: "Vestigial organs are rudimentary, non-functional remnants of structures that were fully developed and functional in ancestral species, supporting descent with modification."
  },
  {
    type: "MCQ",
    question: "In natural selection, 'differential reproduction' implies that:",
    options: ["All individuals reproduce at exactly the same rate regardless of environment","Better-adapted individuals produce more surviving offspring than less-adapted individuals","Organisms reproduce by different asexual methods alternately","Reproduction occurs only during specific geological epochs"],
    correctAnswer: 1,
    explanation: "Differential reproduction means that individuals possessing advantageous traits are more likely to survive, mate, and leave more viable offspring to future generations."
  },
  {
    type: "MCQ",
    question: "The beak of the woodpecker finch (Camarhynchus pallidus) is adapted to:",
    options: ["Crushing hard seeds with thick stout bills","Using cactus spines or small twigs as tools to extract insects from tree bark","Sipping floral nectar like hummingbirds","Feeding exclusively on marine algae"],
    correctAnswer: 1,
    explanation: "The woodpecker finch uses a cactus spine or twig held in its bill as a tool to probe into tree crevices and pry out insects, an extraordinary example of behavioural and morphological adaptation."
  },
  {
    type: "MCQ",
    question: "Which of the following is an example of artificial selection conducted by humans?",
    options: ["Development of antibiotic-resistant Staphylococci in hospitals","Breeding high milk-yielding Jersey cows and wheat varieties from wild grasses","Melanic peppered moths surviving on soot-covered trees","Long necks of giraffes reaching tall acacia trees"],
    correctAnswer: 1,
    explanation: "Breeding high-yielding crops (like wheat from wild grasses) and domestic livestock (like Jersey cows) are classic examples of artificial selection carried out by human breeders."
  },
  {
    type: "MCQ",
    question: "What did Charles Darwin note regarding the tortoises of the Galapagos Islands?",
    options: ["All islands had identical tortoises with identical shell shapes","Different islands harboured distinct tortoise races with shell variations adapted to local vegetation height","Galapagos tortoises were identical to mainland African tortoises","Tortoises were completely absent on the Galapagos Islands"],
    correctAnswer: 1,
    explanation: "Darwin observed that saddle-backed tortoises inhabited arid islands with tall cacti (allowing neck extension), while dome-shelled tortoises lived on moist islands with ground vegetation."
  },
  {
    type: "MCQ",
    question: "Which of the following concepts was NOT part of Darwin's original theory of natural selection?",
    options: ["Overproduction of offspring (high biotic potential)","Struggle for existence and survival of the fittest","Genetic drift and founder effect in small populations","Descent with modification through heritable variations"],
    correctAnswer: 2,
    explanation: "Genetic drift (Sewall Wright effect) and founder effect were formulated much later as components of modern population genetics and the Modern Synthetic Theory, not original Darwinism."
  },
  {
    type: "MCQ",
    question: "In the study of industrial melanism, the scientific name of the peppered moth is:",
    options: ["Biston betularia","Drosophila melanogaster","Apis mellifera","Bombyx mori"],
    correctAnswer: 0,
    explanation: "The peppered moth is scientifically named Biston betularia; its typical light speckled form is typica and the dark melanic mutant is carbonaria."
  },
  {
    type: "MCQ",
    question: "During pre-industrial times in England, why were white-winged moths more abundant than dark melanic moths?",
    options: ["Dark moths were genetically sterile","Lichen-covered tree trunks camouflaged white-winged moths from predatory birds","Predatory birds could only see and feed on dark moths during daytime","White moths produced ten times more eggs than dark moths"],
    correctAnswer: 1,
    explanation: "In unpolluted pre-industrial England, tree bark was encrusted with pale lichens, perfectly camouflaging the light-coloured typica form against predatory birds."
  },
  {
    type: "MCQ",
    question: "Lichens are recognized in environmental ecology and evolutionary studies as:",
    options: ["Tolerant organisms that thrive in heavy industrial pollution","Sensitive bioindicators of air pollution that do not grow in sulfur dioxide-polluted areas","Parasitic fungi that destroy tree trunks","Invasive weeds that eliminate moth habitats"],
    correctAnswer: 1,
    explanation: "Lichens are highly sensitive to air pollutants (especially sulfur dioxide) and cannot grow in polluted industrial areas, leaving bare, soot-covered tree trunks."
  },
  {
    type: "MCQ",
    question: "The Pangenesis hypothesis, proposed by Darwin to explain heredity, postulated the existence of:",
    options: ["Genes on chromosomes","Gemmules or pangenes produced by every cell and shed into the bloodstream","Plasmagenes in mitochondria","Germplasm separate from somatoplasm"],
    correctAnswer: 1,
    explanation: "Darwin proposed the provisional hypothesis of Pangenesis, assuming every organ/cell throws off minute hereditary particles called gemmules or pangenes into the bloodstream, which collect in gametes."
  },
  {
    type: "MCQ",
    question: "Darwin called continuous variations that are useful to the organism:",
    options: ["Sports of nature","Favourable variations","Saltations","Lethal mutations"],
    correctAnswer: 1,
    explanation: "Darwin called variations that enhance survival and reproduction 'favourable variations', while considering sudden discontinuous variations as 'sports' that were less significant for gradual evolution."
  },
  {
    type: "MCQ",
    question: "Natural selection can be best defined in contemporary evolutionary biology as:",
    options: ["Differential survival and reproduction of genotypes leading to changes in gene frequencies","Physical extermination of weaker individuals through combat","Random changes in allele frequency due to chance alone","Sudden modification of all individuals in a population simultaneously"],
    correctAnswer: 0,
    explanation: "Modern evolutionary biology defines natural selection as the differential survival and reproduction of different genotypes, causing directional shifts in the genetic composition of populations."
  },
  {
    type: "MCQ",
    question: "Which of the following is true regarding Darwin's view on Lamarckian inheritance?",
    options: ["Darwin completely rejected Lamarckian use and disuse in all editions of his book","Darwin accepted a minor role for the effects of use and disuse of parts in his later writings","Darwin was the first to experimentally disprove Lamarck's theory","Darwin considered Lamarckism the sole driver of speciation"],
    correctAnswer: 1,
    explanation: "Darwin did not completely reject Lamarck's ideas; in fact, lacking a modern understanding of genetics, he increasingly accepted a secondary role for the use and disuse of parts in later editions of Origin of Species."
  },
  {
    type: "MCQ",
    question: "A population of bacteria exposed to increasing concentrations of streptomycin develops resistance. This demonstrates:",
    options: ["Streptomycin directs the bacteria to mutate specifically for survival","Selection of pre-existing resistant mutants that multiply when sensitive cells die","Inheritance of acquired characters caused by streptomycin ingestion","Spontaneous generation of new species without genetic change"],
    correctAnswer: 1,
    explanation: "Streptomycin kills sensitive bacterial cells, allowing rare pre-existing mutant individuals carrying resistance genes to survive, multiply, and dominate the population."
  },
  {
    type: "MCQ",
    question: "Which of the following observations made by Darwin during his voyage on HMS Beagle provided key insight into geographical distribution?",
    options: ["Flora and fauna of islands closely resemble species of the nearest mainland rather than species of distant regions with identical climates","Islands in the Pacific have species identical to islands in the Atlantic","All islands contain only marine mammals and no birds","Mainland species cannot cross water bodies under any circumstances"],
    correctAnswer: 0,
    explanation: "Darwin noticed that Galapagos species were distinct yet closely related to South American mainland species, indicating that ancestral colonizers had arrived from the nearby mainland and diversified."
  },
  {
    type: "MCQ",
    question: "The primary flaw in Lamarck's postulate of 'Inheritance of Acquired Characters' is that:",
    options: ["Phenotypic changes acquired during an individual's lifetime do not alter gametic DNA","Organs do not change in size with use or disuse during lifetime","Organisms do not possess internal vital forces","Environment never induces any phenotypic changes"],
    correctAnswer: 0,
    explanation: "Phenotypic modifications acquired in somatic tissues during an organism's lifetime do not alter the DNA sequences of germ cells (gametes) and therefore cannot be inherited by offspring."
  },
  {
    type: "MCQ",
    question: "Charles Darwin was strongly influenced by Charles Lyell's book titled:",
    options: ["Principles of Geology","Principles of Biology","Systema Naturae","Historia Naturalis"],
    correctAnswer: 0,
    explanation: "Charles Lyell's 'Principles of Geology' established uniformitarianism—the idea that Earth's geological features were shaped by gradual, continuous physical processes over immense spans of deep time—providing Darwin the timeframe required for gradual organic evolution."
  }
];

console.log(`Part 4 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_evolution_part4.js');
  const fileContent = `// Auto-generated data for Zoology Evolution Part 4: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
