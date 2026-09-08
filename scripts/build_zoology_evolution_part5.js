const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Modern synthetic theory and Hardy-Weinberg equilibrium";
const CHAPTER = "Evolution";
const SUBJECT = "Zoology";

const arDirections = "In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R).\nChoose the correct option:\n(1) Both (A) and (R) are true and (R) is the correct explanation of (A)\n(2) Both (A) and (R) are true but (R) is not the correct explanation of (A)\n(3) (A) is true but (R) is false\n(4) (A) is false but (R) is true";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions
const arData = [
  {
    a: "Hardy-Weinberg equilibrium states that allele frequencies in a stable population remain constant from generation to generation in the absence of evolutionary forces.",
    r: "The total gene pool of a sexually reproducing population remains constant when there is no migration, mutation, genetic drift, or natural selection.",
    ans: 0,
    exp: "According to the Hardy-Weinberg principle, allele frequencies in a large, randomly mating population remain constant across generations (genetic equilibrium) when evolutionary forces such as mutation, gene flow, genetic drift, and natural selection are absent."
  },
  {
    a: "In a population at genetic equilibrium, the binomial expansion $(p + q)^2 = p^2 + 2pq + q^2 = 1$ represents genotypic frequencies.",
    r: "Here, $p$ and $q$ represent the frequencies of individual alleles, while $p^2$, $2pq$, and $q^2$ represent the frequencies of homozygous dominant, heterozygous, and homozygous recessive genotypes respectively.",
    ans: 0,
    exp: "In a diallelic locus where $p$ is the frequency of allele $A$ and $q$ is the frequency of allele $a$, $(p + q) = 1$. The genotypic frequencies in the population are given by the expansion $p^2 (AA) + 2pq (Aa) + q^2 (aa) = 1$."
  },
  {
    a: "Genetic drift produces significant shifts in allele frequencies exclusively in very large populations.",
    r: "Genetic drift is caused by sampling errors and chance fluctuations in small populations.",
    ans: 3,
    exp: "Assertion is false because genetic drift operates significantly and causes major shifts in allele frequencies in small populations, not large ones. Reason correctly explains that genetic drift is due to chance events and sampling errors in small gene pools."
  },
  {
    a: "The Founder Effect is an extreme example of genetic drift.",
    r: "When a small colonizing group leaves a parental population, the original drifted population becomes founders and the new colony shows different allele frequencies from the parent stock.",
    ans: 0,
    exp: "When a few individuals disperse and establish a new colony, by chance their allele frequencies may differ drastically from the parent population. This form of genetic drift is termed the Founder Effect."
  },
  {
    a: "A population bottleneck reduces genetic variation dramatically.",
    r: "Catastrophic events such as earthquakes, floods, or epidemics reduce population size non-selectively, leaving a surviving sample that may not reflect the original gene pool.",
    ans: 0,
    exp: "A population bottleneck occurs when environmental disasters drastically reduce population numbers non-selectively. The surviving few individuals carry only a fraction of the original genetic variability, reducing heterozygosity."
  },
  {
    a: "Hugo de Vries proposed that evolution is caused by single-step large mutations termed saltations.",
    r: "De Vries believed that mutations are random, directionless, and discontinuous, contrasting sharply with Darwinian gradual variations.",
    ans: 0,
    exp: "Hugo de Vries studied the evening primrose (Oenothera lamarckiana) and proposed the Mutation Theory, stating that speciation is caused by sudden, discontinuous, single-step large mutations (saltation), which are random and directionless."
  },
  {
    a: "Darwinian variations are small, continuous, and directional, whereas mutations according to de Vries are random and directionless.",
    r: "De Vriesian mutations occur abruptly and can lead to instantaneous speciation without intermediate forms.",
    ans: 1,
    exp: "Both statements are true. Darwin emphasized slow, continuous, directional variations accumulated over generations, whereas de Vries emphasized sudden, random mutations. However, Reason is a supporting property of de Vriesian mutations rather than the underlying explanation of why Darwin's variations differ."
  },
  {
    a: "Stabilizing selection favours individuals with intermediate phenotypic characteristics.",
    r: "In stabilizing selection, extreme phenotypes are eliminated, causing the phenotypic distribution peak to narrow and grow higher.",
    ans: 0,
    exp: "Stabilizing selection operates against extreme phenotypes and preserves intermediate phenotypes, reducing phenotypic variance without changing the mean. The curve becomes narrower and taller around the mean value."
  },
  {
    a: "Human birth weight is a classic example of stabilizing natural selection.",
    r: "Newborn infants weighing significantly below 2.5 kg or above 4.5 kg suffer higher infant mortality rates compared to babies of intermediate weight (3 to 3.5 kg).",
    ans: 0,
    exp: "Human birth weight exemplifies stabilizing selection because babies with average birth weight (around 3-3.5 kg) have the highest survival rates, while very light and very heavy babies experience higher perinatal mortality."
  },
  {
    a: "Directional selection shifts the peak of the phenotypic distribution towards one particular extreme.",
    r: "Industrial melanism in the peppered moth Biston betularia is an example of directional selection favouring the melanic form in polluted regions.",
    ans: 1,
    exp: "Both (A) and (R) are correct statements. Directional selection favours one extreme phenotype over the mean and opposite extreme, causing allele frequencies to shift in a consistent direction (as shown by Biston betularia in polluted woodlands), but (R) is an example rather than the explanatory cause."
  },
  {
    a: "Disruptive selection produces a bimodal distribution with two distinct peaks.",
    r: "Disruptive selection favours both extreme phenotypes over the intermediate phenotype.",
    ans: 0,
    exp: "Disruptive selection acts against intermediate forms and selects for both phenotypic extremes, producing two separate peaks (bimodal curve) in the population distribution, potentially initiating sympatric speciation."
  },
  {
    a: "Modern Synthetic Theory of evolution is also known as Neo-Darwinism.",
    r: "It integrates Charles Darwin's concept of natural selection with Mendelian genetics and modern population genetics.",
    ans: 0,
    exp: "Neo-Darwinism or the Modern Synthetic Theory arose through the synthesis of Darwinian natural selection with Mendelian genetics, cytogenetics, and population genetics developed by Dobzhansky, Mayr, Huxley, and Simpson."
  },
  {
    a: "Gene flow tends to increase genetic differences between two neighboring populations.",
    r: "Gene flow involves the transfer of alleles into or out of a population due to migration of individuals or gametes.",
    ans: 3,
    exp: "Assertion is false because gene flow (migration) actually reduces genetic divergence between populations by homogenizing their gene pools. Reason is a true definition of gene flow."
  },
  {
    a: "Non-random mating can cause deviations from Hardy-Weinberg equilibrium.",
    r: "Assortative mating alters genotypic frequencies without necessarily altering allele frequencies in the first generation.",
    ans: 1,
    exp: "Both (A) and (R) are true. Non-random mating (such as inbreeding or positive assortative mating) increases homozygosity and alters genotypic frequencies away from Hardy-Weinberg expectations, although allele frequencies may initially remain unchanged."
  },
  {
    a: "A recessive genetic disorder having a frequency of 1 in 10,000 in a population implies an allele frequency of $q = 0.01$.",
    r: "For a recessive condition, the affected individuals represent $q^2$, and taking the square root of $0.0001$ yields $q = 0.01$.",
    ans: 0,
    exp: "In Hardy-Weinberg calculations, the frequency of homozygous recessive individuals is $q^2 = 1/10000 = 0.0001$. Therefore, the frequency of the recessive allele $q = \\sqrt{0.0001} = 0.01$."
  },
  {
    a: "Sickle cell anaemia trait persists at high frequencies in malaria-endemic regions due to balancing natural selection.",
    r: "Heterozygotes ($Hb^A Hb^S$) are resistant to severe falciparum malaria and do not suffer fatal sickling crisis, enjoying a selective advantage over both homozygotes.",
    ans: 0,
    exp: "Heterozygote advantage (overdominance) maintains both alleles in the gene pool in malaria-endemic areas. Heterozygotes are protected against lethal malaria without suffering from sickle cell anaemia, representing balancing selection."
  },
  {
    a: "Mutations are the ultimate primary source of all new genetic variations in a gene pool.",
    r: "Recombination during sexual reproduction can create novel combinations of existing alleles, but cannot generate fundamentally new alleles.",
    ans: 0,
    exp: "Mutations provide the raw material of evolution by creating brand-new alleles through alterations in nucleotide sequences. Genetic recombination reshuffles existing alleles into novel combinations."
  },
  {
    a: "Hardy-Weinberg equilibrium is commonly observed and permanently maintained in natural wild populations.",
    r: "Natural populations are typically infinitely large and experience zero mutation, migration, or natural selection.",
    ans: 2,
    exp: "Assertion and Reason are both false. Wait, let's verify: In nature, populations are never infinitely large and are constantly subjected to mutation, selection, drift, and gene flow; hence Hardy-Weinberg equilibrium is a null model, not a permanent natural reality. So (A) is false and (R) is false. Let's adjust (A) to be true: '(A) Hardy-Weinberg equilibrium serves as a theoretical null model against which evolutionary change can be measured. (R) Any deviation from Hardy-Weinberg equilibrium indicates that one or more evolutionary forces are actively operating on the population.'"
  },
  {
    a: "Chromosomal aberrations such as inversions and translocations contribute to reproductive isolation.",
    r: "Structural rearrangements in chromosomes can lead to meiotic irregularities and sterile gametes in hybrid progeny.",
    ans: 0,
    exp: "Chromosomal inversions and translocations can disrupt normal synapsis and crossing over during meiosis in structural heterozygotes, causing abnormal gametes and post-zygotic sterility, thereby promoting speciation."
  },
  {
    a: "Natural selection cannot act on neutral mutations.",
    r: "Neutral mutations do not affect the phenotype or reproductive fitness of an organism.",
    ans: 0,
    exp: "Neutral mutations cause no change in amino acid sequence (synonymous) or produce biochemically equivalent substitutions that do not alter the fitness of the organism; natural selection can only act on phenotypes that alter reproductive success."
  },
  {
    a: "The Sewall Wright effect can lead to the complete fixation or loss of an allele regardless of its adaptive value.",
    r: "In small populations, chance events rather than natural selection determine which gametes successfully form the next generation.",
    ans: 0,
    exp: "Genetic drift (Sewall Wright effect) operates randomly in small populations, causing alleles—even slightly deleterious ones—to become fixed (100%) or lost (0%) entirely by chance."
  },
  {
    a: "Crossing over during pachytene stage of meiosis I generates genetic recombination.",
    r: "Non-sister chromatids of homologous chromosomes exchange genetic segments mediated by the enzyme recombinase.",
    ans: 0,
    exp: "Crossing over occurs during the pachytene stage of prophase I between non-sister chromatids of homologous chromosomes, catalyzed by the recombinase enzyme complex, producing novel allele combinations."
  },
  {
    a: "If the frequency of a dominant allele is $0.7$, the frequency of heterozygous carriers in Hardy-Weinberg equilibrium is $0.42$.",
    r: "Heterozygote frequency is calculated using the term $2pq$, where $2 \\times 0.7 \\times 0.3 = 0.42$.",
    ans: 0,
    exp: "Given dominant allele frequency $p = 0.7$, recessive allele frequency $q = 1 - p = 0.3$. The frequency of heterozygous individuals is $2pq = 2 \\times 0.7 \\times 0.3 = 0.42$."
  },
  {
    a: "Industrial melanism in England ceased to operate after the enactment of clean air regulations.",
    r: "Clean air laws eliminated tree lichens and caused increased soot accumulation on tree trunks.",
    ans: 2,
    exp: "Assertion is true (or rather reversed: directional selection reversed towards typica form as pollution decreased). But Reason is clearly false: clean air laws allowed lichens to regrow and decreased soot accumulation."
  },
  {
    a: "In disruptive selection, the mean phenotypic value is eliminated while the variance increases substantially.",
    r: "Both phenotypic extremes are favoured simultaneously by natural selection while intermediate individuals face higher mortality.",
    ans: 0,
    exp: "Disruptive selection favours both extreme phenotypes and selects against the intermediate mean phenotype, splitting the population into two phenotypic peaks and increasing phenotypic variance."
  },
  {
    a: "The sum total of all allelic frequencies in a population at a single locus is always equal to $1.0$.",
    r: "In diploid organisms, every individual possesses two alleles per locus, and their relative frequencies together encompass $100\\%$ of the gene pool at that locus.",
    ans: 0,
    exp: "By definition, the relative frequencies of all alternative alleles at a locus account for the entire gene pool ($p + q = 1.0$ or $100\\%$)."
  }
];

// Correct Assertion #18 if needed:
arData[17] = {
  a: "Hardy-Weinberg equilibrium serves as a theoretical null model against which evolutionary change can be measured.",
  r: "Any significant deviation from Hardy-Weinberg expectations indicates that evolutionary forces such as selection, drift, or mutation are operating on the population.",
  ans: 0,
  exp: "The Hardy-Weinberg principle provides a baseline or null model: if allele and genotype frequencies deviate from $p^2 + 2pq + q^2 = 1$, scientists know that evolutionary mechanisms are actively driving changes in the population."
};

console.log("Built 26 AR questions.");

// Now let's create 154 MCQs
const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1. Hardy-Weinberg formula & math questions
addMcq(
  "If the frequency of a recessive allele $a$ in a population is $0.2$, what is the frequency of heterozygous individuals ($Aa$) under Hardy-Weinberg equilibrium?",
  ["0.16", "0.32", "0.64", "0.04"],
  1,
  "Given $q = 0.2$. Therefore, $p = 1 - q = 0.8$. The frequency of heterozygous individuals is $2pq = 2 \\times 0.8 \\times 0.2 = 0.32$ (or $32\\%$)."
);

addMcq(
  "In a population of $1000$ individuals, $360$ are homozygous dominant ($AA$), $480$ are heterozygous ($Aa$), and $160$ are homozygous recessive ($aa$). What is the frequency of allele $a$?",
  ["0.2", "0.4", "0.6", "0.8"],
  1,
  "Total number of alleles = $2000$. Total $a$ alleles = $(2 \\times 160) + 480 = 320 + 480 = 800$. Therefore, the frequency of allele $a$ is $q = 800 / 2000 = 0.4$."
);

addMcq(
  "In a random mating population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive individuals for albinism is $1$ in $10,000$. What is the frequency of heterozygous carriers in this population?",
  ["Approximately $0.0001$", "Approximately $0.0198$", "Approximately $0.198$", "Approximately $0.02$"],
  1,
  "Frequency of homozygous recessive $q^2 = 1 / 10000 = 0.0001$. Thus $q = \\sqrt{0.0001} = 0.01$. The frequency of dominant allele $p = 1 - 0.01 = 0.99$. Heterozygote frequency $2pq = 2 \\times 0.99 \\times 0.01 = 0.0198$ (or $\\approx 2\\%$)."
);

addMcq(
  "According to the Hardy-Weinberg equation, which algebraic term denotes the frequency of homozygous dominant individuals in a population?",
  ["$p$", "$q$", "$p^2$", "$2pq$"],
  2,
  "In the binomial expansion $(p + q)^2 = p^2 + 2pq + q^2 = 1$, $p^2$ denotes the frequency of homozygous dominant genotypes ($AA$)."
);

addMcq(
  "What is the mathematical condition for genetic equilibrium in a population with two alleles $A$ and $a$?",
  ["$p + q = 0$", "$p^2 + q^2 = 1$", "$p^2 + 2pq + q^2 = 1$", "$p + 2pq + q = 1$"],
  2,
  "Genetic equilibrium is represented by the binomial equation $p^2 + 2pq + q^2 = 1$, where $p^2$ is homozygous dominant, $2pq$ is heterozygous, and $q^2$ is homozygous recessive."
);

addMcq(
  "In a population of $500$ individuals, $20$ individuals exhibit a recessive phenotype ($aa$). Assuming Hardy-Weinberg equilibrium, what is the frequency of dominant allele $A$?",
  ["0.04", "0.2", "0.8", "0.96"],
  2,
  "Frequency of homozygous recessive individuals $q^2 = 20 / 500 = 0.04$. Therefore, $q = \\sqrt{0.04} = 0.2$. The frequency of dominant allele $p = 1 - q = 1 - 0.2 = 0.8$."
);

addMcq(
  "If $49\\%$ of a population consists of individuals with homozygous dominant blood type ($AA$), what is the frequency of allele $A$ in this population?",
  ["0.49", "0.7", "0.3", "0.51"],
  1,
  "Frequency of homozygous dominant $p^2 = 0.49$. Therefore, the frequency of allele $A$ is $p = \\sqrt{0.49} = 0.7$."
);

addMcq(
  "In a population at Hardy-Weinberg equilibrium, if the frequency of dominant allele is $0.6$, what percentage of the population is expected to be homozygous recessive?",
  ["$16\\%$", "$24\\%$", "$36\\%$", "$40\\%$"],
  0,
  "Given $p = 0.6$. The frequency of recessive allele $q = 1 - 0.6 = 0.4$. The frequency of homozygous recessive individuals is $q^2 = (0.4)^2 = 0.16$, which is $16\\%$."
);

addMcq(
  "If $64\\%$ of individuals in a population can taste phenylthiocarbamide (PTC, dominant trait $T$), and $36\\%$ are non-tasters ($tt$), what is the frequency of the recessive allele $t$?",
  ["0.36", "0.6", "0.4", "0.64"],
  1,
  "Non-tasters are homozygous recessive ($tt$), so $q^2 = 0.36$. The frequency of recessive allele $t$ is $q = \\sqrt{0.36} = 0.6$."
);

addMcq(
  "In the previous question where $q = 0.6$ (non-tasters $36\\%$), what percentage of the population consists of heterozygous PTC tasters ($Tt$)?",
  ["$48\\%$", "$16\\%$", "$24\\%$", "$32\\%$"],
  0,
  "Since $q = 0.6$, $p = 1 - 0.6 = 0.4$. The frequency of heterozygous tasters is $2pq = 2 \\times 0.4 \\times 0.6 = 0.48$ (or $48\\%$)."
);

addMcq(
  "The gene pool of a population refers to:",
  ["All the genes present on the sex chromosomes of the males", "The total genes and their alleles in an interbreeding population", "Only the dominant alleles present in homozygous state", "The mutated genes accumulated during evolutionary history"],
  1,
  "The gene pool is the complete set of all genes and their respective alleles present in all individuals of a sexually reproducing interbreeding population."
);

addMcq(
  "Hardy-Weinberg equilibrium was independently discovered in 1908 by G.H. Hardy and Wilhelm Weinberg. They were, respectively:",
  ["A British mathematician and a German physician", "A German mathematician and a British physician", "An American zoologist and a French botanist", "A Russian geneticist and an Austrian monk"],
  0,
  "Godfrey Harold Hardy was a British mathematician and Wilhelm Weinberg was a German physician who independently formulated the genetic equilibrium principle in 1908."
);

addMcq(
  "Which of the following conditions is NOT required for maintaining Hardy-Weinberg equilibrium?",
  ["Random mating among individuals", "Extremely large population size", "Continuous high rate of gene mutation", "Absence of natural selection"],
  2,
  "Hardy-Weinberg equilibrium requires the absence of mutations. A high rate of mutation alters allele frequencies, disturbing the equilibrium."
);

addMcq(
  "Any deviation from Hardy-Weinberg equilibrium in a population indicates:",
  ["The occurrence of evolutionary change", "Complete cessation of reproduction", "The population has reached perfection", "Absence of genetic variability"],
  0,
  "Hardy-Weinberg equilibrium represents genetic stability (no evolution). When allele frequencies shift away from equilibrium, evolution (specifically microevolution) is taking place."
);

addMcq(
  "The phenomenon where allele frequencies in a small colony differ markedly from the original parental population because the colony was founded by a few individuals is termed:",
  ["Genetic drift - Founder effect", "Disruptive selection", "Hardy-Weinberg constancy", "Heterozygote advantage"],
  0,
  "When a few individuals colonize a new habitat, their allele frequencies determine the genetic makeup of the new colony. This random shift is called the Founder Effect, a form of genetic drift."
);

addMcq(
  "The Sewall Wright effect is another name for:",
  ["Natural selection", "Genetic drift", "Gene flow", "Mutation pressure"],
  1,
  "Genetic drift was formulated and extensively studied by the American population geneticist Sewall Wright, and is commonly known as the Sewall Wright effect."
);

addMcq(
  "Genetic drift leads to fixation or loss of an allele due to:",
  ["Differential fitness and reproductive superiority", "Chance sampling errors in small populations", "Directed environmental pressures", "Large population size and panmixia"],
  1,
  "Genetic drift is non-directional and stochastic; alleles change in frequency, become fixed (1.0), or become lost (0.0) purely by chance fluctuations in small populations."
);

addMcq(
  "The sharp reduction in population size and genetic diversity caused by sudden environmental catastrophes (e.g. floods, earthquakes, volcanic eruptions) is called:",
  ["Bottleneck effect", "Founder effect", "Directional shift", "Balancing polymorphism"],
  0,
  "A population bottleneck occurs when an environmental catastrophe drastically reduces population size non-selectively, resulting in severe loss of genetic variation in surviving generations."
);

addMcq(
  "Which species of mammal is a textbook example of having undergone an extreme population bottleneck, resulting in near-zero genetic diversity?",
  ["Cheetah (Acinonyx jubatus)", "Bengal tiger", "Blue whale", "African elephant"],
  0,
  "The cheetah (Acinonyx jubatus) underwent an extreme bottleneck event at the end of the Pleistocene epoch, leaving modern cheetahs with extraordinarily low genetic variation and high susceptibility to disease."
);

addMcq(
  "Gene flow occurs when:",
  ["Genes mutate into new allelic forms", "Fertile individuals or gametes migrate between populations and interbreed", "A population undergoes rapid catastrophic extinction", "A chromosome segment breaks and inverts by 180 degrees"],
  1,
  "Gene flow is the transfer of alleles into or out of a population resulting from the movement of fertile individuals or gametes (migration) followed by successful reproduction."
);

addMcq(
  "Continuous gene flow between two geographically adjacent populations results in:",
  ["Increased genetic divergence and rapid speciation", "Reduction of genetic differences between the two populations", "Complete elimination of dominant alleles", "Immediate reproductive isolation"],
  1,
  "Gene flow introduces alleles from one population to another, counteracting divergence and homogenizing the gene pools of the two populations."
);

addMcq(
  "Hugo de Vries formulated his Mutation Theory based on his experimental breeding studies on which plant?",
  ["Pisum sativum", "Oenothera lamarckiana", "Drosophila melanogaster", "Mirabilis jalapa"],
  1,
  "Hugo de Vries conducted breeding experiments on the evening primrose (Oenothera lamarckiana) and observed sudden phenotypic changes which he termed mutations."
);

addMcq(
  "What term did Hugo de Vries use to describe a sudden, single-step, large evolutionary mutation?",
  ["Saltation", "Gradualism", "Pangenesis", "Atavism"],
  0,
  "Hugo de Vries called single-step large mutations 'saltations' (from Latin saltare, to leap), believing that speciation occurs suddenly rather than gradually."
);

addMcq(
  "How do de Vriesian mutations fundamentally differ from Darwinian variations?",
  [
    "De Vriesian mutations are small and directional, whereas Darwinian variations are large and random",
    "De Vriesian mutations are random and directionless, whereas Darwinian variations are small and directional",
    "De Vriesian mutations are acquired during life, whereas Darwinian variations are inherited from parents",
    "There is no difference; both authors proposed identical mechanisms"
  ],
  1,
  "According to NCERT, Darwinian variations are small, gradual, and directional, while de Vriesian mutations are random, discontinuous, and directionless."
);

addMcq(
  "Which of the following books by Theodosius Dobzhansky played a central role in founding the Modern Synthetic Theory of evolution?",
  ["Genetics and the Origin of Species (1937)", "Philosophie Zoologique (1809)", "Principles of Geology (1830)", "The Descent of Man (1871)"],
  0,
  "Theodosius Dobzhansky's 1937 landmark book 'Genetics and the Origin of Species' integrated Mendelian genetics with natural selection, forming the cornerstone of Neo-Darwinism."
);

addMcq(
  "Who coined the term 'Modern Synthesis' in his 1942 book 'Evolution: The Modern Synthesis'?",
  ["Julian Huxley", "Ernst Mayr", "George Gaylord Simpson", "Sewall Wright"],
  0,
  "Julian Huxley coined the phrase in his comprehensive work 'Evolution: The Modern Synthesis' published in 1942."
);

addMcq(
  "In the Modern Synthetic Theory of evolution, the raw material for natural selection is provided primarily by:",
  ["Gene mutations and genetic recombinations", "Use and disuse of somatic organs", "Spontaneous generation from non-living matter", "Entelechy and vital force"],
  0,
  "Mutations create new alleles, while meiotic recombination shuffles them into novel genotypes, providing the raw genetic variation upon which natural selection acts."
);

addMcq(
  "Which type of natural selection operates against phenotypic extremes and favours the intermediate mean value?",
  ["Stabilizing selection", "Directional selection", "Disruptive selection", "Centrifugal selection"],
  0,
  "Stabilizing selection (centripetal selection) eliminates extreme phenotypic variants and favours intermediate phenotypes, reducing phenotypic variance over time."
);

addMcq(
  "In stabilizing natural selection, what change occurs in the graphical curve representing phenotypic distribution?",
  ["The peak shifts towards the left", "The peak shifts towards the right", "The peak gets higher and narrower", "Two distinct peaks are formed"],
  2,
  "As individuals with intermediate phenotypes are favoured and extreme variants are eliminated, the distribution peak becomes narrower and taller around the mean value."
);

addMcq(
  "Which of the following is the best documented example of stabilizing selection in human populations?",
  ["Skin colour gradation across latitudes", "Human infant birth weight", "Lactose tolerance in adults", "Sickle cell anaemia in non-malarial regions"],
  1,
  "Infants weighing close to the mean (3 to 3.5 kg) have the highest survival rate, while very low or very high birth weights suffer higher perinatal mortality, representing stabilizing selection."
);

addMcq(
  "Which type of natural selection is illustrated by the shift in moth population from light to dark melanic form in industrial England?",
  ["Stabilizing selection", "Directional selection", "Disruptive selection", "Balancing selection"],
  1,
  "Industrial melanism is a classic example of directional selection, where environmental pollution favoured the survival of melanic moths (one phenotypic extreme), shifting the population peak in that direction."
);

addMcq(
  "In directional selection, how does the phenotypic distribution curve change?",
  ["The peak shifts in one direction", "The curve flattens completely into a uniform horizontal line", "The peak narrows without any shift in mean", "Two equal peaks develop at both tails"],
  0,
  "In directional selection, natural selection favours phenotypes at one extreme of the distribution, shifting the mean phenotypic value in that direction."
);

addMcq(
  "Which type of natural selection favours both phenotypic extremes and selects against the intermediate phenotype?",
  ["Stabilizing selection", "Directional selection", "Disruptive selection", "Artificial selection"],
  2,
  "Disruptive selection (diversifying selection) favours individuals at both extremes of the phenotypic range while selecting against intermediate types, producing a bimodal curve."
);

addMcq(
  "What is the graphical consequence of disruptive natural selection on a unimodal bell-shaped curve?",
  ["The curve shifts to the right", "The curve splits into two distinct peaks (bimodal distribution)", "The curve becomes taller and narrower", "The curve remains completely unchanged"],
  1,
  "Disruptive selection eliminates the mean phenotype, causing the single bell-shaped peak to divide into two separate peaks (bimodal distribution)."
);

addMcq(
  "Disruptive selection is considered biologically significant because it can lead to:",
  ["Polymorphism and sympatric speciation", "Uniformity and loss of all variations", "Immediate extinction of both extremes", "Complete stabilization of the gene pool"],
  0,
  "By favouring two divergent phenotypic extremes, disruptive selection maintains balanced polymorphism and can eventually lead to reproductive isolation and speciation."
);

addMcq(
  "In a population of African seedcracker birds (Pyrenestes ostrinus), birds possess either large beaks (for cracking hard sedge seeds) or small beaks (for feeding on soft seeds), while intermediate beaks are scarce. This is an example of:",
  ["Stabilizing selection", "Directional selection", "Disruptive selection", "Founder effect"],
  2,
  "This is a classic textbook example of disruptive selection: intermediate beak sizes cannot crack hard seeds effectively nor handle soft seeds efficiently, so both extremes are favoured."
);

addMcq(
  "Balanced polymorphism maintained by heterozygote advantage is exemplified by:",
  ["Sickle cell anaemia in malaria-endemic regions", "Tay-Sachs disease in Ashkenazi Jews", "Huntington's chorea in North America", "Haemophilia in European royalty"],
  0,
  "In malaria-endemic regions of Africa, individuals heterozygous for sickle cell allele ($Hb^A Hb^S$) are resistant to falciparum malaria and do not suffer severe anaemia, maintaining both alleles in a state of balanced polymorphism."
);

addMcq(
  "The relative reproductive success of a genotype compared to other genotypes in the population is called its:",
  ["Biotic potential", "Darwinian fitness (adaptive value)", "Carrying capacity", "Phenotypic plasticity"],
  1,
  "Darwinian fitness (relative fitness, $w$) measures the proportional contribution of a genotype to the next generation's gene pool relative to other genotypes."
);

addMcq(
  "In a population of $1000$ rabbits, $910$ are agouti (dominant phenotype) and $90$ are albino ($cc$, recessive phenotype). What is the frequency of the albino allele ($c$)?",
  ["0.09", "0.3", "0.7", "0.49"],
  1,
  "Recessive homozygotes $q^2 = 90 / 1000 = 0.09$. Therefore, the frequency of recessive allele $c$ is $q = \\sqrt{0.09} = 0.3$."
);

addMcq(
  "Using the rabbit population from the previous question ($q = 0.3$, $p = 0.7$), how many rabbits are expected to be heterozygous carriers ($Cc$)?",
  ["$210$", "$420$", "$490$", "$90$"],
  1,
  "Heterozygote frequency $2pq = 2 \\times 0.7 \\times 0.3 = 0.42$. In a population of $1000$ rabbits, expected number of heterozygotes is $0.42 \\times 1000 = 420$."
);

addMcq(
  "If the frequency of two alleles at a locus are $p = 0.5$ and $q = 0.5$, what is the expected frequency of heterozygotes under Hardy-Weinberg equilibrium?",
  ["0.25", "0.50", "0.75", "1.00"],
  1,
  "Expected heterozygote frequency is $2pq = 2 \\times 0.5 \\times 0.5 = 0.50$ (or $50\\%$)."
);

addMcq(
  "In a population, if $p = 0.5$ and $q = 0.5$, what is the ratio of genotypes $AA : Aa : aa$ under Hardy-Weinberg equilibrium?",
  ["$1 : 1 : 1$", "$1 : 2 : 1$", "$3 : 1$", "$9 : 3 : 3 : 1$"],
  1,
  "$p^2 : 2pq : q^2 = (0.5)^2 : 2(0.5)(0.5) : (0.5)^2 = 0.25 : 0.50 : 0.25 = 1 : 2 : 1$."
);

addMcq(
  "Which factor will ALWAYS decrease genetic variation within a single small population over multiple generations?",
  ["Random mutation", "Genetic drift", "Gene migration from other populations", "Heterozygote advantage"],
  1,
  "Genetic drift consistently leads to loss of alleles and reduces heterozygosity in small populations through random fixation or loss of alleles."
);

addMcq(
  "What effect does gene flow (migration) have on the genetic difference between two partially isolated populations?",
  ["It increases genetic divergence", "It decreases genetic divergence (homogenizes gene pools)", "It causes instantaneous reproductive isolation", "It eliminates both populations entirely"],
  1,
  "Gene flow introduces alleles from one population into the other, reducing allelic differences and counteracting speciation divergence between them."
);

addMcq(
  "Which evolutionary force is purely random and non-adaptive in direction?",
  ["Natural selection", "Sexual selection", "Genetic drift", "Artificial selection"],
  2,
  "Genetic drift is a purely stochastic (random) sampling process; it changes allele frequencies without regard to whether the alleles are beneficial, neutral, or deleterious."
);

addMcq(
  "The modern biological species concept defined by Ernst Mayr is primarily based on:",
  ["Morphological similarity", "Reproductive isolation", "Geographic co-habitation", "Ecological feeding habits"],
  1,
  "Ernst Mayr defined a biological species as groups of actually or potentially interbreeding natural populations that are reproductively isolated from other such groups."
);

addMcq(
  "Which of the following is a pre-zygotic reproductive isolating mechanism?",
  ["Hybrid inviability", "Hybrid sterility", "Temporal (seasonal) isolation", "Hybrid breakdown"],
  2,
  "Temporal isolation prevents mating from occurring because species reproduce at different times of the year or day, acting as a pre-zygotic barrier. The others are post-zygotic barriers."
);

addMcq(
  "Mules are sterile hybrids produced by crossing a male donkey with a female horse. This sterility is an example of:",
  ["Pre-zygotic mechanical isolation", "Post-zygotic reproductive isolation", "Behavioral isolation", "Gametic incompatibility"],
  1,
  "Mule sterility is a classic post-zygotic barrier (hybrid sterility) where fertilization occurs and the hybrid develops, but fails to produce functional gametes due to chromosomal non-homology."
);

addMcq(
  "What is the chromosome number of a mule resulting from a cross between a horse ($2n = 64$) and a donkey ($2n = 62$)?",
  ["$60$", "$62$", "$63$", "$64$"],
  2,
  "A horse gamete contributes $n = 32$ chromosomes and a donkey gamete contributes $n = 31$ chromosomes. The resulting mule has $2n = 32 + 31 = 63$ chromosomes, an odd number that disrupts meiotic pairing."
);

addMcq(
  "Which term describes speciation occurring when a geographical barrier physically divides a population into two isolated groups?",
  ["Allopatric speciation", "Sympatric speciation", "Parapatric speciation", "Quantum speciation"],
  0,
  "Allopatric speciation occurs when geographical barriers (mountains, rivers, oceans) physically separate populations, preventing gene flow and allowing divergent evolution."
);

addMcq(
  "Speciation occurring within the same geographical area without any physical separation is termed:",
  ["Allopatric speciation", "Sympatric speciation", "Peripatric speciation", "Ecological replacement"],
  1,
  "Sympatric speciation occurs when reproductive isolation evolves between populations occupying the same geographical area, often driven by polyploidy, disruptive selection, or sexual selection."
);

addMcq(
  "A mutation that replaces a single purine base with a pyrimidine base in a DNA strand is called a:",
  ["Transition", "Transversion", "Frameshift mutation", "Inversion"],
  1,
  "A transversion is a point mutation in which a purine is replaced by a pyrimidine (or vice versa), e.g., $A \\leftrightarrow C$, $A \\leftrightarrow T$, $G \\leftrightarrow C$, $G \\leftrightarrow T$."
);

addMcq(
  "A mutation that replaces one purine with another purine (e.g. $A \\rightarrow G$) is called a:",
  ["Transition", "Transversion", "Nonsense mutation", "Deletion"],
  0,
  "A transition is a point mutation that substitutes a purine with another purine ($A \\leftrightarrow G$) or a pyrimidine with another pyrimidine ($C \\leftrightarrow T$)."
);

addMcq(
  "Sickle cell anaemia is caused by a point mutation in the $\\beta$-globin gene involving:",
  ["Transition replacing adenine with guanine", "Transversion replacing adenine with thymine in the CTC/GAG triplet", "Deletion of an entire codon", "Insertion of three nucleotides"],
  1,
  "Sickle cell anaemia is caused by a transversion point mutation ($A \\rightarrow T$ on the template strand, $GAG \\rightarrow GUG$ in mRNA) substituting glutamic acid with valine at position 6 of $\\beta$-globin chain."
);

addMcq(
  "Chromosomal inversion involving the centromere is known as:",
  ["Paracentric inversion", "Pericentric inversion", "Translocation", "Duplication"],
  1,
  "A pericentric inversion includes the centromere within the inverted chromosome segment, whereas a paracentric inversion does not involve the centromere."
);

addMcq(
  "Reciprocal translocation between chromosome 9 and chromosome 22 in humans produces:",
  ["Philadelphia chromosome associated with Chronic Myelogenous Leukemia (CML)", "Down syndrome", "Turner syndrome", "Cri-du-chat syndrome"],
  0,
  "The Philadelphia chromosome is a shortened chromosome 22 resulting from a reciprocal translocation $t(9;22)(q34;q11)$ that creates the oncogenic BCR-ABL fusion gene causing CML."
);

addMcq(
  "Cri-du-chat (cat's cry) syndrome in humans is caused by which chromosomal aberration?",
  ["Deletion of short arm of chromosome 5 ($5p^-$)", "Duplication on chromosome 21", "Inversion of chromosome 9", "Translocation between chromosomes 14 and 21"],
  0,
  "Cri-du-chat syndrome is caused by a terminal deletion of the short arm of chromosome 5 ($5p$ deletion)."
);

addMcq(
  "An individual possessing chromosome constitution $45, X0$ exhibits:",
  ["Klinefelter syndrome", "Turner syndrome", "Super female", "Edward syndrome"],
  1,
  "Turner syndrome in females is caused by monosomy of the X chromosome ($45, X0$), resulting in sterile females with webbed neck, short stature, and rudimentary ovaries."
);

addMcq(
  "Klinefelter syndrome in human males has the karyotype:",
  ["$45, X0$", "$47, XXY$", "$47, XYY$", "$47, +21$"],
  1,
  "Klinefelter syndrome is caused by the presence of an extra X chromosome in males ($47, XXY$), leading to hypogonadism, gynecomastia, and sterility."
);

addMcq(
  "In a population where three alleles ($I^A, I^B, i$) determine ABO blood groups with frequencies $p, q, r$ respectively, what is the frequency of individuals with blood group O ($ii$)?",
  ["$r$", "$r^2$", "$2pr$", "$p^2 + 2pr$"],
  1,
  "Individuals with blood group O must have the homozygous recessive genotype $ii$. If the frequency of allele $i$ is $r$, the frequency of blood group O is $r^2$."
);

addMcq(
  "Using the ABO allele frequencies ($p$ for $I^A$, $q$ for $I^B$, $r$ for $i$), what represents the frequency of blood group AB individuals?",
  ["$pq$", "$2pq$", "$p^2 + q^2$", "$2pr + 2qr$"],
  1,
  "Blood group AB individuals have the genotype $I^A I^B$. In Hardy-Weinberg equilibrium for multi-allelic systems, their expected frequency is $2pq$."
);

addMcq(
  "What is the frequency of blood group A individuals in a population with allele frequencies $p$ ($I^A$) and $r$ ($i$)?",
  ["$p^2$", "$2pr$", "$p^2 + 2pr$", "$p + r$"],
  2,
  "Blood group A can be produced by homozygous genotype $I^A I^A$ (frequency $p^2$) and heterozygous genotype $I^A i$ (frequency $2pr$). Thus, total frequency of blood group A is $p^2 + 2pr$."
);

addMcq(
  "In a population at Hardy-Weinberg equilibrium, if the frequency of allele $a$ is $0.1$, what is the ratio of heterozygotes ($Aa$) to homozygous recessive ($aa$) individuals?",
  ["$9 : 1$", "$18 : 1$", "$1 : 1$", "$2 : 1$"],
  1,
  "Given $q = 0.1$, $p = 0.9$. Heterozygotes $2pq = 2 \\times 0.9 \\times 0.1 = 0.18$. Homozygous recessive $q^2 = (0.1)^2 = 0.01$. The ratio of $Aa : aa = 0.18 : 0.01 = 18 : 1$."
);

addMcq(
  "If an X-linked recessive trait has a frequency of $0.08$ among human males, what is the expected frequency of the trait among human females in that population?",
  ["$0.08$", "$0.16$", "$0.0064$", "$0.04$"],
  2,
  "Since males are hemizygous ($X^a Y$), the trait frequency in males equals the allele frequency $q = 0.08$. Females must be homozygous ($X^a X^a$) to express the recessive trait, so female frequency is $q^2 = (0.08)^2 = 0.0064$ (or $0.64\\%$)."
);

addMcq(
  "For the same X-linked recessive trait with $q = 0.08$, what percentage of females in the population are expected to be symptomless carriers ($X^A X^a$)?",
  ["$7.36\\%$", "$14.72\\%$", "$84.64\\%$", "$0.64\\%$"],
  1,
  "With $q = 0.08$, $p = 1 - 0.08 = 0.92$. Heterozygous carrier females have frequency $2pq = 2 \\times 0.92 \\times 0.08 = 0.1472$ (or $14.72\\%$)."
);

addMcq(
  "Red-green colour blindness is an X-linked recessive trait. If $8\\%$ of men in a population are colour blind, what proportion of women are carriers?",
  ["$14.72\\%$", "$8\\%$", "$0.64\\%$", "$92\\%$"],
  0,
  "Frequency in males $q = 0.08$, so $p = 0.92$. Carrier females are $2pq = 2 \\times 0.92 \\times 0.08 = 0.1472 = 14.72\\%$."
);

addMcq(
  "The term 'panmixia' in population genetics refers to:",
  ["Non-random assortative mating", "Completely random mating among all individuals", "Asexual reproduction by binary fission", "Self-fertilization in plants"],
  1,
  "Panmixia (or panmictic population) means random mating where every individual has an equal probability of mating with any other individual of the opposite sex."
);

addMcq(
  "Assortative mating occurs when individuals choose mates based on:",
  ["Purely random chance", "Specific phenotypic preferences (like choosing like, or opposites)", "Geographical distance alone", "Gametic chemical attraction only"],
  1,
  "Assortative mating is non-random mating based on phenotype. Positive assortative mating involves individuals choosing mates with similar phenotypes, increasing homozygosity."
);

addMcq(
  "Inbreeding in a sexually reproducing population leads to:",
  ["Increased heterozygosity and genetic diversity", "Increased homozygosity and expression of harmful recessive alleles (inbreeding depression)", "Elimination of all dominant alleles", "Instantaneous polyploidization"],
  1,
  "Inbreeding (mating between close relatives) increases homozygosity at all gene loci, exposing deleterious recessive alleles and leading to inbreeding depression."
);

addMcq(
  "In a population of $200$ plants, $98$ are red-flowered ($RR$), $84$ are pink-flowered ($Rr$), and $18$ are white-flowered ($rr$). What is the frequency of allele $R$?",
  ["0.49", "0.70", "0.30", "0.42"],
  1,
  "Total alleles = $400$. Alleles $R = (2 \\times 98) + 84 = 196 + 84 = 280$. Frequency of allele $R$ is $p = 280 / 400 = 0.70$."
);

addMcq(
  "In the same population of $200$ plants, what is the frequency of the white-flower allele $r$?",
  ["0.09", "0.30", "0.70", "0.21"],
  1,
  "Alleles $r = (2 \\times 18) + 84 = 36 + 84 = 120$. Frequency of allele $r$ is $q = 120 / 400 = 0.30$ (also $1 - 0.70 = 0.30$)."
);

addMcq(
  "Is the above flower population ($98 RR$, $84 Rr$, $18 rr$ out of $200$) in Hardy-Weinberg equilibrium?",
  [
    "Yes, because observed genotypic frequencies match expected $p^2, 2pq, q^2$ ($0.49, 0.42, 0.09$)",
    "No, because there are more pink flowers than red flowers",
    "No, because white flowers are too rare",
    "Cannot be determined from the given data"
  ],
  0,
  "Observed frequencies: $RR = 98/200 = 0.49$, $Rr = 84/200 = 0.42$, $rr = 18/200 = 0.09$. Expected frequencies: $p^2 = (0.7)^2 = 0.49$, $2pq = 2(0.7)(0.3) = 0.42$, $q^2 = (0.3)^2 = 0.09$. The observed and expected match perfectly, confirming Hardy-Weinberg equilibrium."
);

addMcq(
  "Which evolutionary agent introduces entirely new alleles into a species that never existed in that species before?",
  ["Natural selection", "Genetic drift", "Gene mutation", "Non-random mating"],
  2,
  "Mutation is the sole biological process capable of generating brand new alleles and de novo genetic sequences in a species' gene pool."
);

addMcq(
  "A population undergoing directional selection for increased body size over generations will show:",
  ["A decrease in the mean body size", "An increase in the mean body size", "No change in mean body size, but narrower variance", "Two distinct peaks at very small and very large sizes"],
  1,
  "Directional selection favouring larger body size systematically increases the average (mean) body size of the population across successive generations."
);

addMcq(
  "If the frequency of allele $A$ is $p = 1.0$ and allele $a$ is $q = 0.0$, the allele $A$ is said to be:",
  ["Mutated", "Fixed in the population", "Polymorphic", "Recessive"],
  1,
  "When an allele reaches a frequency of $1.0$ ($100\\%$ of gene copies in the population), it is said to be fixed, and all individuals are homozygous for it."
);

addMcq(
  "The elimination of an allele from a population such that its frequency becomes $0.0$ is called:",
  ["Fixation", "Extinction (loss) of the allele", "Balanced polymorphism", "Heterosis"],
  1,
  "When an allele's frequency drops to $0.0$, it is completely lost (extinct) from the gene pool unless reintroduced by mutation or migration."
);

addMcq(
  "In a small isolated island population of lizards, a severe hurricane kills $95\\%$ of individuals randomly. The surviving lizards rebuild the population with different allele frequencies. This illustrates:",
  ["Disruptive natural selection", "Bottleneck effect", "Adaptive radiation", "Artificial selection"],
  1,
  "Catastrophic random mortality drastically reducing population size non-selectively exemplifies the bottleneck effect, leading to changed allele frequencies by chance."
);

addMcq(
  "When a few finches were blown by a storm from South America to the Galapagos Islands and founded the archipelago population, this represented:",
  ["The Founder effect", "Stabilizing selection", "Gene flow between continents", "Sympatric speciation"],
  0,
  "A small migrant group establishing an isolated population with an unrepresentative gene pool is a quintessential example of the Founder Effect."
);

addMcq(
  "The Amish population of Lancaster County, Pennsylvania, exhibits a high frequency of Ellis-van Creveld syndrome (dwarfism and polydactyly). This is due to:",
  ["Directional natural selection", "The Founder effect and endogamy (inbreeding)", "High mutation rate induced by diet", "Disruptive selection"],
  1,
  "The Amish community was founded by a small number of German immigrants in the 18th century, one of whom carried the recessive allele. Due to founder effect and community inbreeding, the syndrome is exceptionally frequent."
);

addMcq(
  "Which factor prevents the rapid fixation of recessive lethal alleles by natural selection?",
  ["Homozygote advantage", "Recessive alleles are shielded from selection in heterozygous carriers ($Aa$)", "Recessive lethal alleles mutate into dominant alleles", "Recessive alleles are never expressed in phenotype"],
  1,
  "In diploid organisms, recessive alleles are masked in heterozygous carriers ($Aa$) who display a normal phenotype; natural selection cannot eliminate them from heterozygotes."
);

addMcq(
  "What is the ultimate fate of a neutral mutation in a finite population over evolutionary time?",
  ["It will always remain at exactly $50\\%$ frequency", "It will eventually be either fixed or lost due to genetic drift", "It will immediately be eliminated by natural selection", "It will convert into a lethal mutation"],
  1,
  "In finite populations, genetic drift inevitably drives every neutral mutation to one of two absorbing boundaries: either ultimate fixation ($p = 1.0$) or complete loss ($p = 0.0$)."
);

addMcq(
  "The probability that a newly arisen neutral allele will eventually reach fixation in a diploid population of size $N$ is:",
  ["$1 / (2N)$", "$1 / N$", "$2N$", "$0.5$"],
  0,
  "In a diploid population of size $N$, there are $2N$ gene copies. A new mutation represents $1$ copy out of $2N$, so its probability of ultimate fixation by drift alone is $1 / (2N)$."
);

addMcq(
  "Heterozygote advantage is also termed:",
  ["Overdominance", "Codominance", "Incomplete dominance", "Epistasis"],
  0,
  "Overdominance (heterozygote advantage) occurs when the heterozygous genotype has higher reproductive fitness than either homozygous genotype."
);

addMcq(
  "Balancing selection refers to natural selection that:",
  ["Eliminates all variations in a single generation", "Maintains two or more alleles in a population over long periods", "Drives one allele to fixation very quickly", "Acts only on sex chromosomes"],
  1,
  "Balancing selection maintains stable polymorphic frequencies of two or more alleles in a gene pool (e.g. through heterozygote advantage or frequency-dependent selection)."
);

addMcq(
  "Negative frequency-dependent selection occurs when:",
  ["A phenotype has higher fitness when it is rare in the population", "A phenotype has higher fitness when it is common", "Fitness is completely independent of allele frequency", "Selection operates only during winter"],
  0,
  "Negative frequency-dependent selection favours rare phenotypes over common ones (e.g. scale-eating fish in Lake Tanganyika, rare search-image evasion from predators), maintaining polymorphism."
);

addMcq(
  "Which graph shape represents a population before undergoing any form of selection?",
  ["A bimodal curve", "A standard normal distribution (bell-shaped curve)", "A skewed inverted U-curve", "A flat uniform rectangular curve"],
  1,
  "Continuous polygenic traits in a large outbreeding population typically follow a standard bell-shaped normal distribution curve before selection."
);

addMcq(
  "In a graphical plot of trait value versus frequency of individuals, what happens during stabilizing selection?",
  ["The variance increases", "The variance decreases while the mean remains constant", "The mean shifts to the right", "The variance remains identical but the mean changes"],
  1,
  "Stabilizing selection culls the extreme phenotypes on both tails, decreasing the variance of the trait while maintaining the mean at the same position."
);

addMcq(
  "Which of the following scenarios is an example of directional selection?",
  [
    "Stabilization of human birth weight around 3.3 kg",
    "Fossil horses increasing in body size and tooth height from Hyracotherium to Equus",
    "African seedcracker birds having only very large or very small beaks",
    "Heterozygote persistence of sickle cell allele in tropical regions"
  ],
  1,
  "The evolution of modern horses (Equus) from dawn horses (Hyracotherium) showed steady, unidirectional increases in body size, limb elongation, and tooth crown height over 55 million years, a classic macroevolutionary example of directional selection."
);

addMcq(
  "Which of the following would DEVIATE a population from Hardy-Weinberg equilibrium?",
  ["A large population size of 100,000 individuals", "Random mating across the entire geographical range", "Immigration of individuals with different allele frequencies", "Complete absence of mutation"],
  2,
  "Immigration introduces new alleles or changes existing allele frequencies (gene flow), directly violating the assumptions of Hardy-Weinberg equilibrium."
);

addMcq(
  "The mathematical relationship $p + q = 1$ is valid for:",
  ["Any locus with exactly two alternative alleles in a population", "Only homozygous dominant individuals", "Populations where mutations occur at 100% rate", "Haploid bacteria only"],
  0,
  "For any genetic locus with two alternative alleles ($A$ and $a$), their relative frequencies in the population must sum to $1.0$ ($100\\%$ of the alleles at that locus)."
);

addMcq(
  "In a population of $10,000$ people, $1$ individual suffers from phenylketonuria (PKU, autosomal recessive). What is the approximate number of heterozygous carriers in this population?",
  ["$2$", "$198$", "$99$", "$1980$"],
  1,
  "Frequency of affected individuals $q^2 = 1 / 10000 = 0.0001$, so $q = 0.01$. Thus $p = 1 - 0.01 = 0.99$. Carrier frequency is $2pq = 2 \\times 0.99 \\times 0.01 = 0.0198$. In 10,000 people, the expected carriers = $0.0198 \\times 10000 = 198$."
);

addMcq(
  "Why is it virtually impossible for natural selection alone to completely eradicate a harmful recessive allele from a large population?",
  [
    "Because the recessive allele mutates into a dominant allele automatically",
    "Because most copies of rare recessive alleles reside in healthy heterozygous carriers",
    "Because recessive alleles are immune to environmental death",
    "Because recessive alleles do not follow Mendelian segregation"
  ],
  1,
  "When a recessive allele becomes rare, almost all copies exist in heterozygous carriers ($Aa$) who have normal phenotypes and are not subject to negative selection."
);

addMcq(
  "What type of reproductive isolation occurs when two species of frogs live in the same pond but breed at different months of the year?",
  ["Habitat (ecological) isolation", "Temporal isolation", "Behavioral isolation", "Mechanical isolation"],
  1,
  "Temporal isolation occurs when related species breed at different times of the day, seasons, or years, preventing gamete transfer even if they occupy the same habitat."
);

addMcq(
  "Different mating songs of male crickets that are only recognized by females of their own species represent:",
  ["Behavioral (ethological) isolation", "Gametic isolation", "Temporal isolation", "Hybrid breakdown"],
  0,
  "Behavioral (ethological) isolation occurs when species-specific courtship rituals, displays, pheromones, or mating songs are recognized only by members of the same species."
);

addMcq(
  "Which evolutionary concept states that species remain stable for long periods of stasis punctuated by brief episodes of rapid speciation?",
  ["Gradualism", "Punctuated equilibrium", "Saltationism of de Vries", "Lamarckian orthogenesis"],
  1,
  "Niles Eldredge and Stephen Jay Gould proposed the Theory of Punctuated Equilibrium in 1972, suggesting that evolutionary history consists of long periods of morphological stasis interrupted by rapid speciation."
);

addMcq(
  "Which evolutionary biologist proposed the 'Biological Species Concept'?",
  ["Charles Darwin", "Ernst Mayr", "Gregor Mendel", "Jean-Baptiste Lamarck"],
  1,
  "Ernst Mayr proposed the biological species concept in 1942, defining species on the basis of reproductive isolation and interbreeding capacity."
);

addMcq(
  "Genetic variation in a population is essential for natural selection because:",
  ["Without genetic differences, all individuals would have identical fitness and differential survival cannot occur", "Variations prevent chromosomes from duplicating", "Variations guarantee that every individual survives", "Variations eliminate abiotic environmental pressures"],
  0,
  "Natural selection requires differential reproductive success based on heritable phenotypic traits. If all individuals are genetically identical, selection has no variation to act upon."
);

addMcq(
  "An increase in the proportion of dark-winged moths in polluted woods and an increase in white-winged moths in unpolluted woods demonstrates that:",
  ["Moths consciously choose their wing colour based on background", "Natural selection is context-dependent and guided by environmental selective pressure", "Soot particles enter the egg and alter DNA directly", "Dark moths cannot fly in unpolluted areas"],
  1,
  "The direction of natural selection is determined by the environment: dark wings are favoured on soot-covered trees, while pale wings are favoured on lichen-encrusted trees."
);

addMcq(
  "Which of the following is an example of an anthropogenic impact on evolutionary processes?",
  ["Herbicide-resistant weeds emerging in agricultural fields", "Adaptive radiation of Darwin's finches", "Evolution of feathers in dinosaurs", "Origin of multicellular animals in the Cambrian"],
  0,
  "The rapid evolution of herbicide resistance in agricultural weeds is driven directly by human pesticide application, a prominent example of evolution by anthropogenic action."
);

addMcq(
  "Antibiotic resistance in bacteria develops rapidly because:",
  [
    "Antibiotics induce purposeful adaptive mutations in bacteria",
    "Rare resistant bacteria pre-exist in the population and are selectively enriched when sensitive cells are killed",
    "Bacterial cells learn to synthesize antitoxins during treatment",
    "Antibiotics nourish the resistant bacteria"
  ],
  1,
  "Pre-existing resistant mutants survive antibiotic treatment and multiply without competition, rapidly increasing the frequency of resistance alleles in the bacterial population."
);

addMcq(
  "In a population of $400$ individuals, $16$ show an autosomal recessive trait. What is the percentage of heterozygous carriers?",
  ["$4\\%$", "$16\\%$", "$32\\%$", "$64\\%$"],
  2,
  "Recessive homozygotes $q^2 = 16 / 400 = 0.04$, so $q = 0.2$. Dominant allele $p = 1 - 0.2 = 0.8$. Carrier frequency $2pq = 2 \\times 0.8 \\times 0.2 = 0.32$, which is $32\\%$."
);

addMcq(
  "If allele $A$ mutates to allele $a$ at a forward rate $u$, and allele $a$ mutates back to allele $A$ at a reverse rate $v$, the equilibrium allele frequency of $a$ is:",
  ["$u / (u + v)$", "$v / (u + v)$", "$u \\times v$", "$u / v$"],
  0,
  "Under two-way mutation pressure at mutational equilibrium, the frequency of allele $a$ ($q$) is given by $\\hat{q} = u / (u + v)$, where $u$ is the forward mutation rate and $v$ is the reverse mutation rate."
);

addMcq(
  "Which of the following is considered the primary unit of evolution?",
  ["The individual organism", "The population", "The ecological community", "The biosphere"],
  1,
  "Individual organisms undergo development and die, but they do not evolve. The population is the fundamental unit of evolution because allele frequencies change at the population level over generations."
);

addMcq(
  "The primary unit of natural selection is:",
  ["The individual organism (or its phenotype)", "The whole ecosystem", "The geographical zone", "The taxonomic family"],
  0,
  "Natural selection acts directly on the phenotype of the individual organism (determining whether it survives and reproduces), but the evolutionary consequence is manifested in the population gene pool."
);

addMcq(
  "What is the frequency of heterozygotes in a population at Hardy-Weinberg equilibrium when the frequency of homozygous dominant is $0.81$?",
  ["0.01", "0.09", "0.18", "0.81"],
  2,
  "Given $p^2 = 0.81$, so $p = \\sqrt{0.81} = 0.9$. Therefore, $q = 1 - 0.9 = 0.1$. The frequency of heterozygotes is $2pq = 2 \\times 0.9 \\times 0.1 = 0.18$."
);

addMcq(
  "In a population, if $q^2 = 0.49$, what is the value of $p$?",
  ["0.7", "0.3", "0.51", "0.21"],
  1,
  "Since $q^2 = 0.49$, $q = \\sqrt{0.49} = 0.7$. Therefore, $p = 1 - q = 1 - 0.7 = 0.3$."
);

addMcq(
  "If the frequency of allele $B$ is $0.6$ and allele $b$ is $0.4$, what is the expected number of homozygous dominant ($BB$) individuals in a population of $1000$?",
  ["$160$", "$360$", "$480$", "$600$"],
  1,
  "Expected frequency of $BB$ is $p^2 = (0.6)^2 = 0.36$. In a population of 1000 individuals, number of $BB = 0.36 \\times 1000 = 360$."
);

addMcq(
  "In the same population ($p = 0.6, q = 0.4, N = 1000$), how many individuals are expected to be heterozygous ($Bb$)?",
  ["$160$", "$360$", "$480$", "$240$"],
  2,
  "Expected frequency of $Bb$ is $2pq = 2 \\times 0.6 \\times 0.4 = 0.48$. In 1000 individuals, number of $Bb = 0.48 \\times 1000 = 480$."
);

addMcq(
  "In the same population ($p = 0.6, q = 0.4, N = 1000$), how many individuals are expected to be homozygous recessive ($bb$)?",
  ["$160$", "$360$", "$480$", "$400$"],
  0,
  "Expected frequency of $bb$ is $q^2 = (0.4)^2 = 0.16$. In 1000 individuals, number of $bb = 0.16 \\times 1000 = 160$."
);

addMcq(
  "Which of the following is an example of post-zygotic reproductive isolation?",
  ["Mechanical incompatibility of genitalia", "Hybrid inviability where the hybrid embryo fails to develop", "Temporal breeding differences", "Species-specific sex pheromones"],
  1,
  "Hybrid inviability is a post-zygotic isolating mechanism where fertilization takes place, but genetic incompatibility halts embryonic development."
);

addMcq(
  "In a cross between two different species of cotton (Gossypium), the $F_1$ hybrids are vigorous and fertile, but the $F_2$ generation plants are stunted, sterile, or inviable. This is called:",
  ["Hybrid breakdown", "Hybrid inviability", "Hybrid sterility", "Gametic isolation"],
  0,
  "Hybrid breakdown is a post-zygotic isolating mechanism in which the first-generation ($F_1$) hybrids are viable and fertile, but their progeny ($F_2$) suffer reduced viability or sterility."
);

addMcq(
  "The biological concept of species is primarily applicable to organisms that:",
  ["Reproduce sexually", "Reproduce exclusively by obligate asexual binary fission", "Are preserved as extinct fossils", "Are viruses and viroids"],
  0,
  "The biological species concept relies on interbreeding and reproductive isolation, making it strictly applicable only to sexually reproducing, extant organisms."
);

addMcq(
  "When a population splits into two sub-populations that adapt to different adjacent ecological zones with a narrow hybrid zone in between, this is:",
  ["Allopatric speciation", "Parapatric speciation", "Sympatric speciation", "Polyploid speciation"],
  1,
  "Parapatric speciation occurs when populations are geographically adjacent rather than completely isolated, and diverge along an ecological gradient with limited gene exchange in a contact zone."
);

addMcq(
  "Polyploidy as a mechanism of instantaneous sympatric speciation is most common in:",
  ["Mammals", "Birds", "Angiosperms (flowering plants)", "Insects"],
  2,
  "Polyploidy (autopolyploidy and allopolyploidy) is exceptionally common in plants (estimated in $50-70\\%$ of angiosperms), creating immediate reproductive isolation in a single generation."
);

addMcq(
  "A newly formed allopolyploid plant cannot successfully cross with either of its diploid parent species because:",
  ["It produces flowers at a different time of year", "The resulting triploid offspring would be meiotically sterile due to unbalanced chromosomes", "Its pollen is toxic to parent flowers", "Its seeds cannot germinate in soil"],
  1,
  "Crossing a tetraploid ($4n$) with a diploid ($2n$) produces a triploid ($3n$) progeny that cannot undergo balanced chromosome segregation during meiosis, causing sterility."
);

addMcq(
  "Which of the following processes does NOT introduce new genetic combinations into a population?",
  ["Crossing over in meiosis", "Independent assortment of maternal and paternal chromosomes", "Random fusion of gametes during fertilization", "Mitotic cell division in somatic tissues"],
  3,
  "Mitosis produces genetically identical daughter cells (clones) and does not generate new genetic combinations."
);

addMcq(
  "A high rate of mutation in a population with no selection pressure will cause:",
  ["Hardy-Weinberg equilibrium to be preserved indefinitely", "Gradual change in allele frequencies over time", "Instantaneous speciation in every generation", "Immediate extinction of all males"],
  1,
  "Mutation pressure acting alone slowly alters allele frequencies in the direction of the mutation, violating Hardy-Weinberg equilibrium."
);

addMcq(
  "In directional selection, if selection operates against the recessive phenotype ($aa$), the frequency of allele $a$ will:",
  ["Decrease gradually over generations", "Increase exponentially to 1.0", "Remain absolutely unchanged", "Jump to 1.0 in a single generation"],
  0,
  "Selection against homozygous recessive individuals ($aa$) reduces the reproductive contribution of allele $a$, causing its frequency to decline over successive generations."
);

addMcq(
  "Even when strong selection operates against a recessive lethal allele, why does its frequency decline very slowly when it becomes rare?",
  [
    "Because the mutation rate increases to replace lost alleles",
    "Because almost all remaining copies of the allele exist in unaffected heterozygotes",
    "Because recessive lethal alleles become dominant when rare",
    "Because the population size automatically shrinks"
  ],
  1,
  "When $q$ is very small, $q^2$ (homozygous recessives subject to selection) is negligible compared to $2pq$ (heterozygotes who survive and reproduce normally), shielding the rare allele from selection."
);

addMcq(
  "Which of the following is NOT one of the five major factors identified in the Modern Synthetic Theory that alter allele frequencies?",
  ["Gene migration (gene flow)", "Genetic drift", "Use and disuse of organs", "Natural selection"],
  2,
  "Use and disuse of organs is a Lamarckian concept that is not part of the Modern Synthetic Theory. The five factors are gene migration, genetic drift, mutation, genetic recombination, and natural selection."
);

addMcq(
  "Under Hardy-Weinberg equilibrium, if the frequency of allele $A$ is $0.8$, what is the probability that a random sperm fertilizes an egg carrying allele $a$?",
  ["$0.8$", "$0.2$", "$0.16$", "$0.64$"],
  2,
  "Probability of sperm carrying $A$ is $0.8$, and egg carrying $a$ is $q = 0.2$. The combined probability is $0.8 \\times 0.2 = 0.16$."
);

addMcq(
  "Under Hardy-Weinberg equilibrium, what is the total probability that a fertilization event produces a heterozygous offspring ($Aa$)?",
  ["$0.16$", "$0.32$", "$0.04$", "$0.64$"],
  1,
  "A heterozygous offspring can be formed in two ways: sperm $A$ and egg $a$ ($p \\times q = 0.16$) OR sperm $a$ and egg $A$ ($q \\times p = 0.16$). Total probability is $2pq = 0.32$."
);

addMcq(
  "In a population in Hardy-Weinberg equilibrium, what is the maximum possible frequency of heterozygous individuals ($2pq$) at a diallelic locus?",
  ["$0.25$", "$0.50$", "$0.75$", "$1.00$"],
  1,
  "The term $2pq = 2p(1 - p) = 2p - 2p^2$. Taking the derivative and setting to zero: $2 - 4p = 0 \\implies p = 0.5$. When $p = q = 0.5$, $2pq = 2(0.5)(0.5) = 0.50$ ($50\\%$), which is the mathematical maximum."
);

addMcq(
  "For a population to maintain maximum heterozygosity ($50\\%$) under Hardy-Weinberg conditions, the frequencies of alleles $p$ and $q$ must be:",
  ["$p = 0.7, q = 0.3$", "$p = 0.5, q = 0.5$", "$p = 0.8, q = 0.2$", "$p = 0.9, q = 0.1$"],
  1,
  "Heterozygosity $2pq$ reaches its absolute mathematical peak of $0.50$ precisely when allele frequencies are equal: $p = q = 0.5$."
);

addMcq(
  "In human populations, Rh-positive blood group is dominant over Rh-negative. If $16\\%$ of a population is Rh-negative, what is the frequency of the Rh-negative allele ($r$)?",
  ["0.16", "0.4", "0.6", "0.84"],
  1,
  "Rh-negative individuals are homozygous recessive ($rr$), so $q^2 = 0.16$. Thus, the allele frequency is $q = \\sqrt{0.16} = 0.4$."
);

addMcq(
  "In the same population ($16\\%$ Rh-negative, $q = 0.4$), what percentage of the population is heterozygous Rh-positive ($Rr$)?",
  ["$24\\%$", "$36\\%$", "$48\\%$", "$84\\%$"],
  2,
  "Given $q = 0.4$, $p = 1 - 0.4 = 0.6$. The frequency of heterozygous individuals is $2pq = 2 \\times 0.6 \\times 0.4 = 0.48$ (or $48\\%$)."
);

addMcq(
  "In the same population ($q = 0.4, p = 0.6$), what percentage of the population is homozygous Rh-positive ($RR$)?",
  ["$16\\%$", "$36\\%$", "$48\\%$", "$84\\%$"],
  1,
  "Frequency of homozygous dominant is $p^2 = (0.6)^2 = 0.36$ (or $36\\%$)."
);

addMcq(
  "What is the total percentage of Rh-positive individuals in that population?",
  ["$36\\%$", "$48\\%$", "$84\\%$", "$100\\%$"],
  2,
  "Total Rh-positive individuals = homozygous dominant ($p^2 = 36\\%$) + heterozygous ($2pq = 48\\%$) = $84\\%$ (or $100\\% - 16\\% = 84\\%$)."
);

addMcq(
  "Which evolutionary mechanism is responsible for the phenomenon called 'microevolution'?",
  ["Changes in allele frequencies within a population over generations", "Origin of new taxonomic classes and phyla", "Continental drift and plate tectonics", "Extinction of dinosaurs"],
  0,
  "Microevolution refers to evolutionary changes on a small scale, specifically generational changes in allele frequencies within a population's gene pool."
);

addMcq(
  "Evolutionary changes occurring above the species level over deep geological time (e.g. origin of birds from reptiles) are termed:",
  ["Microevolution", "Macroevolution", "Saltation", "Gene drift"],
  1,
  "Macroevolution refers to broad patterns of evolutionary change above the species level over vast geological timescales."
);

addMcq(
  "A classic experiment confirming that natural selection acts on pre-existing variations in bacteria was conducted using:",
  ["Lederberg's replica plating technique", "Meselson and Stahl's density gradient centrifugation", "Hershey and Chase's blender experiment", "Griffith's transformation assay"],
  0,
  "Joshua and Esther Lederberg developed the replica plating technique in 1952, proving that antibiotic-resistant bacterial mutants exist prior to antibiotic exposure."
);

addMcq(
  "In the Lederberg replica plating experiment, velvet fabric was used to:",
  ["Sterilize bacterial colonies with ultraviolet radiation", "Transfer an exact replica of bacterial colonies from a master plate to plates with antibiotic", "Extract bacterial plasmid DNA", "Induce directed mutations in penicillin-sensitive colonies"],
  1,
  "Sterile velvet was pressed against the master plate to pick up an imprint of colonies and then stamped onto replica plates containing penicillin to test for pre-existing resistance."
);

addMcq(
  "The observation that resistant bacterial colonies appeared at the exact identical positions on multiple replica plates proved that:",
  ["Penicillin induced the mutations on each plate independently", "The resistant mutations were already present in those colonies on the master plate before exposure to penicillin", "Bacteria communicate through quorum sensing to survive", "Penicillin is inactivated by the velvet cloth"],
  1,
  "Identical spatial patterns of resistant colonies on multiple replica plates demonstrated conclusively that the mutations conferring resistance arose prior to antibiotic exposure, validating Darwinian natural selection."
);

addMcq(
  "Which of the following factors is an example of an internal reproductive isolating barrier?",
  ["A wide river separating two rodent populations", "A mountain range dividing bird habitats", "Gametic incompatibility preventing pollen tube growth in the style", "A desert separating two forest tracts"],
  2,
  "Gametic incompatibility is an internal (intrinsic) biological barrier, whereas rivers, mountains, and deserts are external geographical barriers."
);

addMcq(
  "Mechanical isolation as a pre-zygotic barrier involves:",
  ["Mating occurring at different seasons", "Structural differences in copulatory organs preventing successful transfer of gametes ('lock and key' hypothesis)", "Chemical rejection of sperm by egg cytoplasm", "Failure of hybrid embryo to undergo gastrulation"],
  1,
  "Mechanical isolation occurs when structural or anatomical incompatibilities of reproductive organs prevent mating or pollen/sperm transfer."
);

addMcq(
  "In flowering plants, the 'lock and key' fit between pollinator anatomy and floral structure is an example of:",
  ["Mechanical reproductive isolation", "Hybrid breakdown", "Temporal isolation", "Gametic mortality"],
  0,
  "Floral morphology adapted to specific insect pollinators prevents cross-pollination between different plant species, acting as mechanical isolation."
);

addMcq(
  "The biological species concept cannot be applied to which of the following organisms?",
  ["Lions and tigers", "Escherichia coli and fossil ammonites", "Human populations across continents", "Domestic dog breeds"],
  1,
  "The biological species concept cannot be applied to asexual organisms (like the bacterium E. coli) or extinct fossil organisms (like ammonites) where reproductive interbreeding cannot be evaluated."
);

addMcq(
  "Which evolutionary concept explains why asexual organisms (like bdelloid rotifers) maintain distinct lineages without interbreeding?",
  ["Morphological and ecological species concepts", "Biological species concept", "Hardy-Weinberg equilibrium", "Panmixia"],
  0,
  "Asexual organisms are classified into species based on morphological differences and distinct ecological niches (morphological/ecological species concepts)."
);

addMcq(
  "In a population of mice, coat colour is governed by a single locus with two alleles: black ($B$) is dominant to brown ($b$). If $9\\%$ of mice are brown, what is the frequency of allele $B$?",
  ["0.09", "0.3", "0.7", "0.91"],
  2,
  "Frequency of brown mice $q^2 = 0.09$, so $q = \\sqrt{0.09} = 0.3$. Frequency of dominant allele $B$ is $p = 1 - 0.3 = 0.7$."
);

addMcq(
  "In the same mouse population ($p = 0.7, q = 0.3$), what is the expected frequency of heterozygous black mice ($Bb$)?",
  ["$0.21$", "$0.42$", "$0.49$", "$0.09$"],
  1,
  "Heterozygote frequency is $2pq = 2 \\times 0.7 \\times 0.3 = 0.42$ (or $42\\%$)."
);

addMcq(
  "In the same mouse population ($p = 0.7, q = 0.3$), what is the expected frequency of homozygous black mice ($BB$)?",
  ["$0.09$", "$0.42$", "$0.49$", "$0.70$"],
  2,
  "Homozygous dominant frequency is $p^2 = (0.7)^2 = 0.49$ (or $49\\%$)."
);

addMcq(
  "What is the total proportion of black mice in that population?",
  ["$49\\%$", "$42\\%$", "$91\\%$", "$9\\%$"],
  2,
  "Total black mice = homozygous dominant ($49\\%$) + heterozygous ($42\\%$) = $91\\%$ (or $100\\% - 9\\% = 91\\%$)."
);

addMcq(
  "What term did Sewall Wright use to describe the phenomenon where a small founding population experiences rapid shifts in gene frequencies due to random drift?",
  ["Island effect (or founder principle)", "Panmictic drift", "Allopatric burst", "Saltational divergence"],
  0,
  "Sewall Wright described how small populations isolated on islands or habitat fragments experience dramatic random fluctuations in allele frequencies, forming the foundation of the founder effect."
);

addMcq(
  "Which of the following is true regarding genetic drift?",
  ["It increases genetic diversity within a population", "It can lead to the loss of advantageous alleles by chance in small populations", "It only affects dominant traits", "It directs evolution towards higher complexity"],
  1,
  "Because genetic drift is completely random, even beneficial alleles can be accidentally lost, and slightly harmful alleles can become fixed in small populations."
);

addMcq(
  "Which curve in the NCERT textbook diagram illustrates directional natural selection?",
  ["A curve where the peak gets higher and narrower", "A curve where the peak shifts towards one direction", "A curve where two distinct peaks form", "A completely flat line"],
  1,
  "In the NCERT diagram illustrating operation of natural selection on trait distribution: Diagram (a) shows stabilizing (peak gets higher and narrower), (b) shows directional (peak shifts in one direction), and (c) shows disruptive (two peaks form)."
);

addMcq(
  "In the NCERT diagram showing operation of natural selection, which curve depicts disruptive selection?",
  ["Peak narrows and grows taller", "Peak shifts to the right", "Two peaks form with a valley in between", "A flat horizontal line"],
  2,
  "Disruptive selection is shown as a bimodal distribution with two distinct peaks and a trough representing selection against the intermediate mean."
);

addMcq(
  "In the NCERT diagram showing operation of natural selection, stabilizing selection is depicted as:",
  ["Peak shifts to one direction", "Two peaks form", "Peak gets higher and narrower", "Curve completely disappears"],
  2,
  "Stabilizing selection maintains the mean value while reducing phenotypic extremes, so the peak becomes higher and narrower."
);

addMcq(
  "Why is genetic drift negligible in extremely large populations?",
  ["Because mutations never occur in large populations", "Because sampling error is inversely proportional to population size and becomes statistically insignificant in very large numbers", "Because large populations do not undergo sexual reproduction", "Because natural selection stops working in large populations"],
  1,
  "According to the law of large numbers, random sampling error decreases as sample size increases. In very large populations, chance fluctuations have negligible effect on allele frequencies."
);

addMcq(
  "Which evolutionary agent is the ONLY one that consistently leads to adaptive evolution?",
  ["Genetic drift", "Gene flow", "Natural selection", "Mutation"],
  2,
  "While mutation creates variation and drift/flow alter frequencies randomly, natural selection is the only evolutionary mechanism that consistently favours traits that enhance survival and reproduction, driving adaptation."
);

addMcq(
  "The total genetic information stored within an entire species across all its populations is termed the:",
  ["Genome of the species", "Total species gene pool", "Phenome", "Proteome"],
  1,
  "The species gene pool comprises the complete set of all alleles and genetic diversity found across all populations of that species."
);

addMcq(
  "In a population of $1000$ diploid individuals, how many total alleles exist at any given autosomal gene locus?",
  ["$500$", "$1000$", "$2000$", "$4000$"],
  2,
  "Each diploid individual carries two alleles per autosomal locus, so $1000$ individuals carry $1000 \\times 2 = 2000$ total alleles."
);

addMcq(
  "If an allele $A$ has a frequency of $p = 0.6$ in a population of $1000$ diploid individuals, how many copies of allele $A$ are present in the gene pool?",
  ["$600$", "$1200$", "$360$", "$800$"],
  1,
  "Total alleles = $2000$. Copies of allele $A = 0.6 \\times 2000 = 1200$ copies."
);

addMcq(
  "In a population of $2000$ diploid individuals, $800$ copies of allele $a$ are present. What is the frequency of allele $a$?",
  ["$0.4$", "$0.2$", "$0.8$", "$0.16$"],
  1,
  "Total alleles in $2000$ individuals = $4000$. Frequency of allele $a$ is $q = 800 / 4000 = 0.2$."
);

addMcq(
  "Using the above data ($q = 0.2$), what is the frequency of allele $A$?",
  ["$0.4$", "$0.8$", "$0.6$", "$0.2$"],
  1,
  "Frequency of allele $A$ is $p = 1 - q = 1 - 0.2 = 0.8$."
);

addMcq(
  "Using the above allele frequencies ($p = 0.8, q = 0.2$), what is the expected number of heterozygous individuals ($Aa$) in this population of $2000$?",
  ["$320$", "$640$", "$1280$", "$80$"],
  1,
  "Heterozygote frequency $2pq = 2 \\times 0.8 \\times 0.2 = 0.32$. Expected number in 2000 individuals = $0.32 \\times 2000 = 640$ individuals."
);

addMcq(
  "In the same population ($p = 0.8, q = 0.2, N = 2000$), what is the expected number of homozygous dominant individuals ($AA$)?",
  ["$640$", "$1280$", "$320$", "$1600$"],
  1,
  "Homozygous dominant frequency $p^2 = (0.8)^2 = 0.64$. Expected number in 2000 individuals = $0.64 \\times 2000 = 1280$ individuals."
);

addMcq(
  "In the same population ($p = 0.8, q = 0.2, N = 2000$), what is the expected number of homozygous recessive individuals ($aa$)?",
  ["$80$", "$160$", "$320$", "$40$"],
  0,
  "Homozygous recessive frequency $q^2 = (0.2)^2 = 0.04$. Expected number in 2000 individuals = $0.04 \\times 2000 = 80$ individuals."
);

addMcq(
  "Check the sum of individuals: $1280 (AA) + 640 (Aa) + 80 (aa) = $",
  ["$1000$", "$1500$", "$2000$", "$2500$"],
  2,
  "$1280 + 640 + 80 = 2000$ individuals, confirming exact conservation of total population size under Hardy-Weinberg equilibrium."
);

addMcq(
  "Which evolutionary concept explains why sickle cell allele maintains high frequency in sub-Saharan Africa but is being eliminated in African Americans in the USA?",
  ["Absence of malaria in the USA removes the selective advantage for heterozygotes", "African Americans have developed immunity without alleles", "Sickle cell gene mutated into normal gene in the USA", "Genetic drift fixed the sickle cell allele in the USA"],
  0,
  "In the USA, malaria is virtually absent, so $Hb^A Hb^S$ heterozygotes have no selective survival advantage, and directional selection gradually eliminates the deleterious $Hb^S$ allele through mortality of $Hb^S Hb^S$ homozygotes."
);

addMcq(
  "What is 'cline' in evolutionary biology?",
  ["A sudden jump in mutation rate across generations", "A continuous, gradual geographic gradient of a phenotypic character or allele frequency", "A barrier that prevents all reproduction", "A circular mating ring around a mountain"],
  1,
  "A cline is a gradual change in a phenotypic trait or allele frequency over a geographical transect (e.g. increase in body size towards colder northern latitudes - Bergmann's rule)."
);

addMcq(
  "Bergmann's rule states that in endothermic vertebrates:",
  ["Individuals in colder climates tend to have larger body sizes than relatives in warmer climates", "Extremities like ears and tails are shorter in cold climates", "Skin pigmentation is darker near the equator", "Wings are narrower in migratory species"],
  0,
  "Bergmann's rule states that populations of endothermic species living in colder climates have larger body size to reduce surface area-to-volume ratio, conserving heat."
);

addMcq(
  "Allen's rule states that mammals in cold climates have:",
  ["Larger body sizes", "Shorter ears and shorter limbs to minimize heat loss", "Thicker hair only", "Longer tails for balance on ice"],
  1,
  "Allen's rule states that endotherms in cold climates possess shorter extremities (ears, tails, snouts, limbs) compared to related forms in warm climates to reduce heat dissipation."
);

addMcq(
  "Gloger's rule states that warm-blooded animals living in warm, humid tropical areas tend to be:",
  ["Lighter in colour", "More heavily pigmented (darker melanin)", "Smaller in ear size", "Completely hairless"],
  1,
  "Gloger's rule states that within a polytypic species, individuals from warm, humid regions are more heavily pigmented with melanin than those in dry, cold regions."
);

addMcq(
  "Which term describes an allele that produces multiple, seemingly unrelated phenotypic effects?",
  ["Polygenic", "Pleiotropic", "Epistatic", "Hypostatic"],
  1,
  "A pleiotropic gene influences two or more distinct phenotypic traits (e.g. sickle cell allele causes erythrocyte sickling, resistance to malaria, splenic fibrosis, and kidney damage)."
);

addMcq(
  "The HbS allele responsible for sickle cell anaemia is a classic example of:",
  ["A pleiotropic gene", "A lethal dominant gene", "A sex-linked gene", "A holandric gene"],
  0,
  "The sickle cell gene affects multiple organs and systems (anaemia, bone pain, splenic infarcts, malaria resistance), demonstrating pleiotropy."
);

addMcq(
  "In a population in Hardy-Weinberg equilibrium, if $p = 0.9$ and $q = 0.1$, what percentage of the recessive alleles in the entire gene pool are carried by heterozygotes?",
  ["$50\\%$", "$90\\%$", "$10\\%$", "$99\\%$"],
  1,
  "Total $a$ alleles in gene pool: each $Aa$ carries $1$ $a$ allele (frequency $2pq = 2(0.9)(0.1) = 0.18$), each $aa$ carries $2$ $a$ alleles (contribution $2q^2 = 2(0.01) = 0.02$). Total $a$ alleles = $0.18 + 0.02 = 0.20$. The fraction in heterozygotes is $0.18 / 0.20 = 0.90$ (or $90\\%$)."
);

addMcq(
  "When a beneficial new mutation arises in a single diploid individual in a population of $10,000$, its initial frequency is:",
  ["$1 / 10,000$", "$1 / 20,000$", "$0.5$", "$0.01$"],
  1,
  "In $10,000$ diploid individuals there are $20,000$ alleles. A single new mutation has an initial frequency of $1 / 20,000 = 0.00005$."
);

addMcq(
  "Why do deleterious dominant mutations disappear from a population much faster than deleterious recessive mutations under natural selection?",
  [
    "Because dominant mutations mutate back to normal twice as fast",
    "Because dominant mutations are expressed in both homozygotes and heterozygotes, immediately exposing every carrier to selection",
    "Because dominant alleles are degraded by cytoplasmic enzymes",
    "Because individuals with dominant traits refuse to mate"
  ],
  1,
  "Dominant mutations are expressed in the phenotype of every individual that carries them ($AA$ and $Aa$). Therefore, natural selection acts on every copy without any protective shielding."
);

addMcq(
  "Which of the following is true for an autosomal dominant condition with complete penetrance that causes death before reproductive age?",
  ["Its frequency will increase over time", "Every case in a new generation must be the result of a fresh de novo mutation", "It will reach Hardy-Weinberg equilibrium in two generations", "It is maintained by heterozygote advantage"],
  1,
  "Because affected individuals die before reproducing, they cannot transmit the dominant allele. Any affected individuals in future generations must arise exclusively from new de novo mutations."
);

addMcq(
  "The biological species concept was formulated in the framework of:",
  ["Modern Synthetic Theory (Neo-Darwinism)", "Lamarckism", "Spontaneous generation", "Orthogenesis"],
  0,
  "The modern biological species concept was formulated by Ernst Mayr as part of the Modern Synthesis of evolutionary biology in the mid-20th century."
);

addMcq(
  "Ring species (such as the Ensatina salamanders of California or Larus gulls around the Arctic) demonstrate that:",
  [
    "Species are immutable and never change",
    "Speciation is a gradual process with continuous reproductive divergence around a geographical loop",
    "All species evolved in a single sudden leap",
    "Geographical variation does not exist in nature"
  ],
  1,
  "Ring species provide living proof of gradual speciation: adjacent populations can interbreed around a geographical barrier, but the two terminal populations that meet at the other end cannot interbreed."
);

addMcq(
  "Which factor will prevent two populations from diverging into distinct species?",
  ["Geographical isolation", "High rate of gene flow between them", "Strong divergent selective pressures", "Accumulation of chromosomal inversions"],
  1,
  "Gene flow between populations mixes their gene pools, counteracting divergence and preventing reproductive isolation from developing."
);

addMcq(
  "In a population of $500$ people, $45$ have cystic fibrosis ($cc$, autosomal recessive). Assuming Hardy-Weinberg equilibrium, what is the frequency of the normal allele ($C$)?",
  ["0.09", "0.3", "0.7", "0.49"],
  2,
  "Recessive homozygotes $q^2 = 45 / 500 = 0.09$. Recessive allele frequency $q = \\sqrt{0.09} = 0.3$. Normal allele frequency $p = 1 - 0.3 = 0.7$."
);

addMcq(
  "In the same cystic fibrosis population ($p = 0.7, q = 0.3, N = 500$), how many individuals are healthy heterozygous carriers ($Cc$)?",
  ["$45$", "$210$", "$245$", "$420$"],
  1,
  "Carrier frequency $2pq = 2 \\times 0.7 \\times 0.3 = 0.42$. Expected carriers = $0.42 \\times 500 = 210$ individuals."
);

addMcq(
  "In the same population, how many individuals are homozygous normal ($CC$)?",
  ["$245$", "$210$", "$45$", "$350$"],
  0,
  "Homozygous normal frequency $p^2 = (0.7)^2 = 0.49$. Expected individuals = $0.49 \\times 500 = 245$ individuals."
);

addMcq(
  "Which of the following statements about mutation is INCORRECT according to the Modern Synthetic Theory?",
  [
    "Mutations occur randomly with respect to the organism's adaptive needs",
    "Mutations are the ultimate source of all genetic novelty",
    "Mutations are directed by the environment to specifically solve survival challenges",
    "Most mutations with phenotypic effects are neutral or deleterious"
  ],
  2,
  "Mutations are spontaneous and random; the environment does not direct or induce specific beneficial mutations to meet survival challenges (as confirmed by Lederberg's experiment)."
);

addMcq(
  "When allele frequencies fluctuate randomly from generation to generation in a population, this process is known as:",
  ["Natural selection", "Genetic drift", "Directional adaptation", "Gene conversion"],
  1,
  "Genetic drift is the random fluctuation of allele frequencies across generations caused by chance sampling of gametes."
);

addMcq(
  "Which of the following is an example of stabilizing selection?",
  ["Long horns in male deer", "Egg clutch size in birds (intermediate clutch sizes yield maximum surviving chicks)", "Pesticide resistance in bedbugs", "Industrial melanism in Biston betularia"],
  1,
  "Robin egg clutch size is a classic stabilizing selection example: very small clutches produce few chicks, while very large clutches lead to chick starvation due to inability of parents to feed them all."
);

addMcq(
  "Which of the following conditions would accelerate genetic drift?",
  ["Increasing population size from 100 to 1,000,000", "Decreasing population size from 10,000 to 50", "Allowing free immigration between large populations", "Increasing mating opportunities among unrelated individuals"],
  1,
  "Genetic drift is inversely proportional to population size. A reduction from 10,000 to 50 individuals greatly magnifies sampling errors and accelerates drift."
);

addMcq(
  "In human genetics, what is the frequency of an allele if $100\\%$ of the individuals in the population are homozygous for that allele?",
  ["0.0", "0.5", "1.0", "100.0"],
  2,
  "When an entire population is homozygous for an allele, its relative allelic frequency is $1.0$ (or $100\\%$)."
);

addMcq(
  "The concept that natural selection can maintain genetic diversity rather than eliminating it is supported by:",
  ["Heterozygote superiority (balancing selection)", "Disruptive selection producing polymorphism", "Negative frequency-dependent selection", "All of the above"],
  3,
  "All three mechanisms (heterozygote advantage, disruptive selection, and negative frequency-dependent selection) actively preserve genetic variation in populations."
);

addMcq(
  "In a diploid population, what is the maximum number of alleles that a single normal individual can carry at an autosomal locus?",
  ["One", "Two", "Three", "An infinite number"],
  1,
  "A normal diploid individual carries two homologous chromosomes and therefore can possess at most two alleles at any autosomal locus, regardless of how many alleles exist in the population."
);

addMcq(
  "A population has three genotypes: $AA (40)$, $Aa (40)$, and $aa (20)$. What is the frequency of allele $A$?",
  ["0.4", "0.6", "0.8", "0.5"],
  1,
  "Total individuals = $100$. Total alleles = $200$. Number of $A$ alleles = $(2 \\times 40) + 40 = 80 + 40 = 120$. Frequency of allele $A$ is $p = 120 / 200 = 0.6$."
);

addMcq(
  "In the above population ($AA = 40, Aa = 40, aa = 20$), is the population in Hardy-Weinberg equilibrium?",
  [
    "Yes, perfectly",
    "No, because expected $Aa$ is $2pq = 2(0.6)(0.4) = 0.48$ ($48$ individuals), but observed is $40$",
    "Yes, because $p + q = 1$",
    "Hardy-Weinberg equilibrium cannot be calculated for 100 individuals"
  ],
  1,
  "Expected genotypic numbers: $AA = p^2 N = 0.36 \\times 100 = 36$, $Aa = 2pq N = 0.48 \\times 100 = 48$, $aa = q^2 N = 0.16 \\times 100 = 16$. The observed counts ($40, 40, 20$) deviate from expected ($36, 48, 16$), showing the population is not in equilibrium."
);

addMcq(
  "A population that has experienced a severe bottleneck followed by rapid expansion will typically exhibit:",
  ["Extremely high genetic variation", "Severely reduced heterozygosity across most loci", "Absence of all homozygous genotypes", "Immediate development of polyploidy"],
  1,
  "A bottleneck non-selectively wipes out many alleles. Even when the population rebounds in numbers, genetic diversity recovers very slowly through new mutations, leaving low heterozygosity."
);

addMcq(
  "Which of the following is NOT an assumption of the Hardy-Weinberg law?",
  ["Organisms are diploid", "Generations are overlapping with high infant mortality", "Mating is completely random", "Population size is infinitely large"],
  1,
  "Hardy-Weinberg assumes non-overlapping discrete generations, no selection (no differential mortality), diploid organisms, random mating, and large population size."
);

addMcq(
  "The term 'assortative mating' where similar phenotypes mate preferentially is also known as:",
  ["Positive assortative mating", "Negative assortative mating", "Panmixia", "Endogamy"],
  0,
  "Positive assortative mating occurs when individuals choose mates that resemble themselves phenotypically (e.g. tall people mating with tall people)."
);

addMcq(
  "Negative assortative mating (disassortative mating) occurs when:",
  ["Individuals prefer mates with different phenotypes from their own", "Individuals prefer identical mates", "Mating is completely random", "Individuals do not reproduce"],
  0,
  "Disassortative (negative assortative) mating occurs when individuals preferentially choose mates with different phenotypes, which increases heterozygosity."
);

addMcq(
  "In humans, preference for mates with different Major Histocompatibility Complex (MHC) genotypes is an example of:",
  ["Negative assortative mating promoting heterozygosity and immune diversity in offspring", "Positive assortative mating causing inbreeding", "Genetic drift", "Bottleneck effect"],
  0,
  "Studies show humans and mice are attracted to scent cues from individuals with dissimilar MHC alleles, a disassortative mating preference that enhances immunocompetence in offspring."
);

addMcq(
  "Which evolutionary biologist synthesized the roles of mutation, recombination, isolation, and selection in his book 'Systematics and the Origin of Species' (1942)?",
  ["Ernst Mayr", "Charles Darwin", "Gregor Mendel", "August Weismann"],
  0,
  "Ernst Mayr published 'Systematics and the Origin of Species' in 1942, integrating taxonomy with genetics and the Modern Synthesis."
);

addMcq(
  "George Gaylord Simpson contributed to the Modern Synthesis primarily through his expertise in:",
  ["Paleontology and fossil evolutionary rates (Tempo and Mode in Evolution, 1944)", "Plant cytogenetics and polyploidy", "Mathematical population genetics", "Molecular DNA sequencing"],
  0,
  "George Gaylord Simpson was a paleontologist who showed in 'Tempo and Mode in Evolution' (1944) that fossil patterns are fully consistent with Mendelian genetics and natural selection."
);

addMcq(
  "G. Ledyard Stebbins brought which branch of biology into the Modern Synthesis with his 1950 book?",
  ["Botany and plant evolution (Variation and Evolution in Plants)", "Entomology", "Marine invertebrate zoology", "Human physical anthropology"],
  0,
  "G. Ledyard Stebbins published 'Variation and Evolution in Plants' (1950), completing the Modern Synthesis by integrating plant genetics, polyploidy, and hybridization."
);

addMcq(
  "Which of the following scientists were the three primary mathematical founders of population genetics?",
  ["R.A. Fisher, J.B.S. Haldane, and Sewall Wright", "Charles Darwin, Alfred Wallace, and Thomas Huxley", "Gregor Mendel, Hugo de Vries, and Carl Correns", "James Watson, Francis Crick, and Rosalind Franklin"],
  0,
  "Ronald A. Fisher, J.B.S. Haldane, and Sewall Wright laid the mathematical theoretical foundations of population genetics in the 1920s and 1930s."
);

addMcq(
  "R.A. Fisher's 'Fundamental Theorem of Natural Selection' states that:",
  ["The rate of increase in fitness of any organism at any time is equal to its genetic variance in fitness at that time", "Mutations are always deleterious", "All populations eventually go extinct", "Hardy-Weinberg equilibrium is never violated"],
  0,
  "R.A. Fisher proved that the rate of increase in mean population fitness under natural selection is directly proportional to the additive genetic variance in fitness."
);

addMcq(
  "Natural selection can act only on which component of an organism?",
  ["The phenotype", "The genotype directly without expression", "The intron sequences alone", "The mitochondrial DNA only"],
  0,
  "Natural selection interacts with the phenotype (physical, biochemical, and behavioural traits) because differential survival and mating depend on phenotypic performance in the environment."
);

addMcq(
  "Why is the genotype said to be the 'unit of inheritance' while the phenotype is the 'unit of selection'?",
  ["Because only genes (DNA) are transmitted across generations, but selection operates on the organism's expressed traits", "Because phenotypes are made of DNA", "Because genotypes do not affect phenotypes", "Because selection acts on gametes in the soil"],
  0,
  "The phenotype interacts with the environment and determines survival and reproductive output (selection), whereas the genotype encodes those traits and is transmitted to the next generation (inheritance)."
);

addMcq(
  "In a population of $10,000$ individuals, $6400$ are homozygous dominant ($AA$), $3200$ are heterozygous ($Aa$), and $400$ are homozygous recessive ($aa$). What is the frequency of allele $a$?",
  ["0.04", "0.2", "0.4", "0.8"],
  1,
  "Recessive homozygotes $q^2 = 400 / 10000 = 0.04$. Therefore, allele frequency $q = \\sqrt{0.04} = 0.2$ (also calculated from alleles: $[(2 \\times 400) + 3200] / 20000 = 4000 / 20000 = 0.2$)."
);

addMcq(
  "In the same population, what is the frequency of allele $A$?",
  ["0.2", "0.4", "0.8", "0.64"],
  2,
  "Frequency of dominant allele $p = 1 - q = 1 - 0.2 = 0.8$."
);

addMcq(
  "Are the genotypic frequencies in this population ($0.64 AA, 0.32 Aa, 0.04 aa$) in Hardy-Weinberg equilibrium?",
  ["Yes, because $p^2 = 0.64, 2pq = 0.32, q^2 = 0.04$", "No, because $Aa$ is not equal to $AA$", "No, because recessive is too small", "Cannot be determined"],
  0,
  "Expected frequencies: $p^2 = (0.8)^2 = 0.64$, $2pq = 2(0.8)(0.2) = 0.32$, $q^2 = (0.2)^2 = 0.04$. They match observed frequencies exactly, so the population is in equilibrium."
);

addMcq(
  "Which factor will cause an increase in the frequency of homozygotes at ALL gene loci simultaneously in a population?",
  ["Disruptive selection at one locus", "Inbreeding (consanguineous mating)", "Heterozygote advantage", "Negative assortative mating"],
  1,
  "Inbreeding affects all loci across the entire genome equally by systematically increasing homozygosity, unlike selection which targets specific loci."
);

addMcq(
  "In contrast to inbreeding, positive assortative mating affects:",
  ["Only the loci that govern the phenotypic traits chosen during mate choice", "All loci in the genome equally", "Only the Y chromosome", "Only mitochondrial DNA"],
  0,
  "Assortative mating affects only those gene loci that determine the traits involved in mate selection (and linked loci), leaving unlinked unrelated loci in Hardy-Weinberg equilibrium."
);

addMcq(
  "When a lethal allele is dominant, it is eliminated from the population rapidly. Why can a lethal recessive allele persist indefinitely at low frequencies?",
  ["Because it is maintained in phenotypically normal heterozygous carriers who do not die from the condition", "Because it mutates into a dominant gene", "Because it is not made of DNA", "Because it is only found on the Y chromosome"],
  0,
  "Recessive lethal alleles are completely hidden from natural selection in heterozygous carriers who possess a functional dominant allele and reproduce normally."
);

addMcq(
  "If the mutation rate from normal allele $A$ to lethal recessive allele $a$ is $\\mu$, the equilibrium frequency of the lethal recessive allele in the population under balance of mutation and selection is:",
  ["$q = \\mu$", "$q = \\sqrt{\\mu}$", "$q = \\mu^2$", "$q = 2\\mu$"],
  1,
  "For a completely recessive lethal allele ($s = 1$), mutation introduces new alleles at rate $\\mu$ while selection removes homozygotes at rate $q^2$. At mutation-selection balance, $q^2 = \\mu \\implies q = \\sqrt{\\mu}$."
);

addMcq(
  "If the mutation rate to a recessive lethal allele is $\\mu = 10^{-6}$, its equilibrium frequency in the population is:",
  ["$10^{-6}$", "$10^{-3}$ (or $0.001$)", "$10^{-12}$", "$0.5$"],
  1,
  "Equilibrium frequency $q = \\sqrt{\\mu} = \\sqrt{10^{-6}} = 10^{-3} = 0.001$."
);

addMcq(
  "Using the above value ($q = 0.001$), what is the expected carrier frequency ($2pq$) in the population?",
  ["Approximately $0.001$", "Approximately $0.002$ (1 in 500)", "Approximately $0.000001$", "Approximately $0.04$"],
  1,
  "Carrier frequency $2pq \\approx 2(1)(0.001) = 0.002$ (or $1$ in every $500$ people)."
);

addMcq(
  "Which mode of speciation requires the complete absence of gene flow between diverging populations?",
  ["Allopatric speciation", "Sympatric speciation", "Hybrid speciation", "Introgressive hybridization"],
  0,
  "Allopatric speciation is initiated when extrinsic geographical barriers physically isolate populations, completely halting gene flow between them."
);

addMcq(
  "Which of the following is considered the strongest evidence that modern humans evolved in Africa before spreading globally?",
  ["Africans have the highest level of mitochondrial DNA and genomic diversity of any global population", "Africa has the coldest climate", "African fossils are all younger than European fossils", "Africans have no Y chromosomes"],
  0,
  "Because populations lose genetic diversity as small founder groups migrate outward (serial founder effects), African populations exhibit the greatest genetic diversity, pointing to Africa as the ancestral homeland."
);

addMcq(
  "What is the term for the movement of alleles from one species into the gene pool of another species through repeated backcrossing of interspecific hybrids?",
  ["Introgressive hybridization (introgression)", "Disruptive selection", "Saltation", "Assortative mating"],
  0,
  "Introgression (introgressive hybridization) occurs when fertile interspecific hybrids backcross with a parental species, transferring alleles from one species into another."
);

addMcq(
  "Approximately $1-2\\%$ of the nuclear genome of present-day non-African humans is derived from Neanderthals. This is a real-world example of:",
  ["Archaic introgressive hybridization", "Convergent evolution", "Purely de novo mutation", "Saltation"],
  0,
  "Interbreeding between ancestral anatomically modern humans and Neanderthals in Eurasia resulted in the introgression of Neanderthal alleles into modern human non-African genomes."
);

addMcq(
  "The Modern Synthetic Theory resolves the conflict between Darwin's gradualism and Mendel's particulate inheritance by proving that:",
  [
    "Continuous phenotypic variation is produced by the cumulative action of multiple Mendelian genes (polygenes) influenced by the environment",
    "Darwin was completely wrong and Mendel was completely right",
    "Genes blend permanently like liquids in offspring",
    "Mutations only affect somatic cells"
  ],
  0,
  "The Modern Synthesis proved that continuous phenotypic variation (which Darwin observed) is caused by multiple discrete Mendelian particulate genes acting additively (polygenic inheritance)."
);

console.log(`Built ${arData.length} AR questions and ${mcqData.length} MCQ questions.`);

// KaTeX test
let katexErrors = 0;
function testKatex(text, label) {
  const matches = text.matchAll(/\$([^\$]+)\$/g);
  for (const match of matches) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

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
const mcqQuestions = mcqData.slice(0, 154).map(m => ({
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
console.log(`Part 5 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 5 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_evolution_part5.js');
  const fileContent = `// Auto-generated data for Zoology Evolution Part 5: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.log(`Validation note: Length is ${allQuestions.length}, expected 180.`);
}
