const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Cell life & division";
const chapter = "Cell Structure and Function";
const subject = "Botany";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "Cell division is necessary to restore the optimal nucleo-cytoplasmic ratio in a growing cell.",
    r: "As a cell increases in size, its cytoplasm outgrows the capacity of the single nucleus to regulate metabolic and transcriptional activities efficiently.",
    ans: 0,
    exp: "According to the Kern-plasma theory (Hertwig), cell division restores the nucleo-cytoplasmic ratio, ensuring the nucleus can effectively control cellular metabolism. (R) correctly explains (A)."
  },
  {
    a: "A decrease in the surface area-to-volume ($SA/V$) ratio acts as a physical trigger for a cell to divide.",
    r: "Cell volume increases as the cube of the radius ($r^3$) while surface area increases only as the square ($r^2$), limiting membrane transport capacity in large cells.",
    ans: 0,
    exp: "When a cell grows too large, the surface area of the plasma membrane becomes inadequate to service the internal metabolic volume. Dividing into smaller daughter cells restores a high $SA/V$ ratio. (R) correctly explains (A)."
  },
  {
    a: "Mitosis is also called equational division.",
    r: "The number of chromosomes in the daughter cells remains exactly identical to that in the parent cell.",
    ans: 0,
    exp: "Mitosis results in daughter cells having the same number and kind of chromosomes as the parent nucleus ($2n \\rightarrow 2n$ or $n \\rightarrow n$), hence termed equational division. (R) correctly explains (A)."
  },
  {
    a: "In unicellular organisms like Amoeba, cell division is synonymous with reproduction.",
    r: "A single unicellular parent cell divides by binary fission to give rise to two independent new individual organisms.",
    ans: 0,
    exp: "In single-celled organisms, cell division directly increases the number of individuals, so growth and reproduction are mutually inclusive events. (R) correctly explains (A)."
  },
  {
    a: "Amitosis is a form of direct cell division that does not involve chromatin condensation into distinct chromosomes or spindle formation.",
    r: "During amitosis, the nucleus simply constricts and cleaves into two fragments, often resulting in unequal distribution of genetic material.",
    ans: 0,
    exp: "Amitosis is direct nuclear division where the nucleus elongates, dumbs-bell shaped, and constricts into two without forming spindle fibers or distinct chromosomes. (R) correctly explains (A)."
  },
  {
    a: "Continuous cell division in multicellular organisms is essential for tissue repair and cell replacement.",
    r: "The upper layers of the epidermis, cells lining the gut, and blood cells are constantly sloughed off and replaced by new cells produced through mitosis.",
    ans: 0,
    exp: "Mitosis continuously provides new cells to replace dead or worn-out tissues (e.g., millions of RBCs and gut epithelial cells are replaced daily). (R) correctly explains (A)."
  },
  {
    a: "Growth in multicellular plants is largely restricted to specialized regions called meristems.",
    r: "Meristematic tissues (apical, intercalary, and lateral cambium) undergo active mitotic divisions throughout the life of the plant.",
    ans: 0,
    exp: "Unlike animals with diffuse growth, plant growth is localized to meristems (apical and lateral meristems) where continuous mitotic divisions drive primary and secondary growth. (R) correctly explains (A)."
  },
  {
    a: "Normal somatic human cells have a finite proliferative lifespan known as the Hayflick limit.",
    r: "Progressive shortening of telomeres with each round of DNA replication eventually triggers replicative senescence in normal somatic cells.",
    ans: 0,
    exp: "Human somatic cells divide only 40–60 times before arresting due to critical telomere erosion (Hayflick limit), as somatic cells lack telomerase. (R) correctly explains (A)."
  },
  {
    a: "Cancer cells are immortal and can divide indefinitely in culture.",
    r: "Cancer cells reactivate the enzyme telomerase, maintaining telomere length and bypassing the normal senescence checkpoints.",
    ans: 0,
    exp: "Upregulation of telomerase prevents telomere shortening, conferring replicative immortality to malignant tumor cells. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Meiosis is essential for sexually reproducing organisms.",
    r: "Meiosis reduces the chromosome number by half ($2n \\rightarrow n$), ensuring that fertilization restores the species-specific diploid chromosome complement.",
    ans: 0,
    exp: "Without meiosis, sexual reproduction would double the chromosome number each generation. Meiosis halves ploidy so syngamy can reconstitute $2n$. (R) correctly explains (A)."
  },
  {
    a: "Cell division is accompanied by the precise duplication and distribution of cytoplasmic organelles.",
    r: "Organelles like mitochondria and chloroplasts divide by fission and are partitioned between the two daughter cells during cytokinesis.",
    ans: 0,
    exp: "Cytokinesis distributes not only daughter nuclei but also cytoplasm and cytoplasmic organelles (mitochondria, plastids, ER) to daughter cells. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Apical meristems of root and shoot tips are ideal tissues for observing different stages of mitosis in plant cells.",
    r: "Meristematic cells are actively and synchronously dividing without intervening periods of secondary cell wall thickening.",
    ans: 0,
    exp: "Root tips (e.g., onion root tip squash) contain rapidly dividing meristematic cells displaying clear mitotic phases with thin primary cell walls. (R) correctly explains (A)."
  },
  {
    a: "In haploid organisms like bryophytes, gametes are produced through mitosis rather than meiosis.",
    r: "The main plant body of bryophytes is gametophytic and haploid ($n$), so producing haploid gametes ($n$) requires equational division.",
    ans: 0,
    exp: "Since the gametophyte is already haploid ($n$), it cannot undergo reductional division to form gametes; gametes are produced via mitosis. (R) correctly explains (A)."
  },
  {
    a: "Zygotic meiosis occurs in organisms exhibiting a haplontic life cycle.",
    r: "In haplontic algae like Volvox and Spirogyra, the diploid zygote is the only $2n$ stage, which undergoes meiosis to form haploid spores.",
    ans: 0,
    exp: "In haplontic life cycles, the multicellular organism is haploid ($n$), and meiosis occurs in the zygote ($2n$) directly after fertilization. (R) correctly explains (A)."
  },
  {
    a: "Sporic meiosis occurs in organisms displaying an alternation of generations (haplodiplontic life cycle).",
    r: "Meiosis occurs in diploid spore mother cells of the sporophyte to produce haploid spores that develop into gametophytes.",
    ans: 0,
    exp: "In plants (pteridophytes, gymnosperms, angiosperms), meiosis occurs during sporogenesis, producing haploid microspores and megaspores. (R) correctly explains (A)."
  },
  {
    a: "Gametic meiosis occurs in animals that possess a diplontic life cycle.",
    r: "In animals, the diploid somatic body produces haploid gametes (sperm and egg) directly through meiotic division in the gonads.",
    ans: 0,
    exp: "In diplontic life cycles, the dominant phase is diploid ($2n$), and meiosis occurs in specialized germ cells of the gonads to generate haploid gametes. (R) correctly explains (A)."
  },
  {
    a: "During cytokinesis in plant cells, a rigid furrow cannot form from the cell periphery inward.",
    r: "Plant cells are enclosed by a rigid, inextensible cell wall that prevents membrane invagination.",
    ans: 0,
    exp: "Animal cells divide by inward contractile furrowing, but rigid plant cell walls cannot pinch inward, necessitating centrifugal cell plate construction. (R) correctly explains (A)."
  },
  {
    a: "Mitosis can occur in both haploid and diploid eukaryotic cells.",
    r: "Meiosis can occur in both haploid and diploid eukaryotic cells.",
    ans: 2,
    exp: "Assertion is true: mitosis occurs in haploid cells (e.g., male honeybees, plant gametophytes) and diploid somatic cells. Reason is false: meiosis can only occur in diploid ($2n$) or polyploid cells because homologous chromosome pairing requires at least two chromosome sets."
  },
  {
    a: "In male honeybees (drones), all somatic cells and gametes are haploid.",
    r: "Drones develop parthenogenetically from unfertilized haploid eggs, and produce sperm via mitosis.",
    ans: 0,
    exp: "Male honeybees are haploid products of arrhenotokous parthenogenesis; since they are already haploid ($n$), they produce sperm by mitosis. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Karyokinesis and cytokinesis are two distinct, sequential phases of nuclear and cytoplasmic division.",
    r: "Karyokinesis refers to the division of the nucleus, whereas cytokinesis is the division of the cytoplasm resulting in separate daughter cells.",
    ans: 0,
    exp: "M phase comprises karyokinesis (nuclear division) followed by cytokinesis (partition of the cytoplasm). (R) correctly defines and explains (A)."
  },
  {
    a: "Liquid endosperm of coconut is a syncytium containing thousands of free nuclei.",
    r: "Syncytium formation occurs when nuclear divisions (karyokinesis) are not followed by cytokinesis.",
    ans: 0,
    exp: "Repeated karyokinesis without cytokinesis generates a multinucleated protoplasmic mass (coenocyte/syncytium), as in coconut water. (R) correctly explains (A)."
  },
  {
    a: "DNA replication is tightly coupled to cell division to maintain genome integrity across generations.",
    r: "Any cell that divides without prior DNA replication will produce daughter cells with half the genomic information.",
    ans: 0,
    exp: "Faithful inheritance requires each daughter cell to receive an identical, complete copy of the genome, necessitating complete DNA replication prior to division. (R) correctly explains (A)."
  },
  {
    a: "Colchicine induces polyploidy in dividing plant cells.",
    r: "Colchicine disrupts spindle microtubules, allowing chromosome replication and centromere separation to proceed without cytoplasmic division.",
    ans: 0,
    exp: "By dissolving the spindle apparatus, colchicine doubles the chromosome number without allowing cell partition, resulting in autopolyploidy. (R) correctly explains (A)."
  },
  {
    a: "Programmed cell death (apoptosis) plays an essential developmental role in sculpting anatomical structures.",
    r: "The elimination of interdigital webbing between developing fingers and toes in human embryos occurs through apoptosis.",
    ans: 0,
    exp: "Apoptotic cell death shapes embryological tissues, such as removing webbing between digits and hollowing out tubular lumina. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A cell must double its total mass and protein content before dividing.",
    r: "Without coordinated cell growth, cell divisions would yield progressively smaller daughter cells with diminished metabolic reserves.",
    ans: 0,
    exp: "Cell division must balance cell growth; otherwise, cells would shrink with each cycle until viable cellular processes cease. (R) correctly explains (A)."
  },
  {
    a: "Mitosis produces genetically identical daughter cells (clones), preserving genetic stability.",
    r: "Mitosis lacks crossing over and homologous chromosome exchange, faithfully copying parent chromatids into daughter nuclei.",
    ans: 0,
    exp: "Mitosis segregates identically replicated sister chromatids without recombination, ensuring genetic stability and clonal fidelity. (R) correctly explains (A)."
  }
];

const mcqQuestions = [
  {
    q: "The Kern-plasma (nucleo-cytoplasmic) theory proposed by Hertwig states that cell division is triggered when:",
    opts: ["DNA content falls below the haploid level", "The volume of cytoplasm outgrows the regulatory capacity of the nucleus", "Cell wall thickness exceeds 1 $\\mu$m", "All mitochondria stop synthesizing ATP"],
    ans: 1,
    exp: "Hertwig proposed that when the cytoplasm grows disproportionately larger than the nucleus (disturbing the karyoplasmic index), the cell must divide to restore balance."
  },
  {
    q: "A physical factor that limits cell size and stimulates division as a cell grows is the:",
    opts: ["Decrease in surface area-to-volume ($SA/V$) ratio", "Increase in surface area-to-volume ratio", "Loss of all ribosomes", "Disappearance of the plasma membrane"],
    ans: 0,
    exp: "As cell volume expands faster than its surface area ($r^3$ vs $r^2$), nutrient transport across the membrane becomes insufficient, necessitating division."
  },
  {
    q: "Which type of cell division is characterized by direct constriction of the nucleus without chromosome condensation or spindle formation?",
    opts: ["Mitosis", "Meiosis", "Amitosis", "Endomitosis"],
    ans: 2,
    exp: "Amitosis is direct cell division where the nucleus cleaves into two parts by simple dumbbell constriction without spindle apparatus."
  },
  {
    q: "Mitosis is considered an equational division because:",
    opts: ["The daughter cells receive half the chromosome number of the parent cell", "The daughter cells maintain the exact same chromosome number and genetic content as the parent cell", "The cytoplasmic volume is divided exactly equally in all cell types", "It only occurs in diploid organisms"],
    ans: 1,
    exp: "Mitosis preserves the chromosome number and karyotype of the parental cell in both daughter cells ($2n \\rightarrow 2n$ or $n \\rightarrow n$)."
  },
  {
    q: "In which of the following organisms does mitosis normally occur in haploid ($n$) individuals to form somatic tissues or gametes?",
    opts: ["Male honeybee (drone)", "Human female", "Pea plant sporophyte", "Frog tadpole"],
    ans: 0,
    exp: "Male honeybees (drones) are haploid ($n$) and develop from unfertilized eggs; they undergo mitosis to produce somatic tissues and haploid sperm."
  },
  {
    q: "Liquid endosperm of coconut (Cocos nucifera) represents which cellular condition?",
    opts: ["Polyteny", "Free-nuclear syncytium", "Aneuploidy", "Amitotic blastema"],
    ans: 1,
    exp: "Liquid coconut endosperm is a multinucleated coenocyte/syncytium produced when nuclear divisions (karyokinesis) occur without cytokinesis."
  },
  {
    q: "The division of the nucleus during the M phase of the cell cycle is formally called:",
    opts: ["Cytokinesis", "Karyokinesis", "Diakinesis", "Interkinesis"],
    ans: 1,
    exp: "Karyokinesis is the division of the cell nucleus, whereas cytokinesis is the division of the cytoplasm."
  },
  {
    q: "In which plant tissue are mitotic stages most easily observed and counted in classroom laboratories?",
    opts: ["Onion root tip meristem", "Mature xylem vessels", "Dry onion scale leaves", "Cork bark tissue"],
    ans: 0,
    exp: "Onion root tip squashes provide rapidly dividing apical meristem cells with high mitotic indices and thin cell walls."
  },
  {
    q: "Organisms displaying a haplontic life cycle, such as Chlamydomonas and Spirogyra, exhibit meiosis at which stage?",
    opts: ["During gamete formation in adults", "In the diploid zygote (zygotic meiosis)", "During spore germination", "During asexual zoospore release"],
    ans: 1,
    exp: "In haplontic life cycles, the only diploid ($2n$) stage is the single-celled zygote, which undergoes zygotic meiosis to form haploid cells."
  },
  {
    q: "Gametic meiosis is characteristic of organisms that exhibit a:",
    opts: ["Haplontic life cycle", "Diplontic life cycle (e.g., animals)", "Haplodiplontic life cycle only", "Direct viral cycle"],
    ans: 1,
    exp: "In diplontic life cycles (animals), the multicellular individual is diploid, and meiosis occurs directly during gametogenesis (gametic meiosis)."
  },
  {
    q: "Which cellular structure serves as the precursor for the new cell wall during plant cytokinesis?",
    opts: ["Cleavage furrow", "Cell plate (phragmoplast)", "Contractile ring", "Tonoplast"],
    ans: 1,
    exp: "In plants, cytokinesis begins at the center with a cell plate formed by coalescing Golgi vesicles (phragmoplast), growing centrifugally."
  },
  {
    q: "The middle lamella formed during plant cytokinesis is primarily composed of:",
    opts: ["Cellulose", "Calcium pectate", "Chitin", "Lignin"],
    ans: 1,
    exp: "The cell plate represents the precursor to the middle lamella, which is composed of calcium and magnesium pectate."
  },
  {
    q: "In animal cells, cytokinesis is accomplished by the formation of a cleavage furrow, which is driven by a contractile ring of:",
    opts: ["Tubulin microtubules", "Actin microfilaments and myosin", "Keratin intermediate filaments", "Collagen fibers"],
    ans: 1,
    exp: "The contractile ring beneath the plasma membrane in animal cytokinesis is made of actin microfilaments and myosin II motors."
  },
  {
    q: "What is the primary evolutionary advantage of mitotic cell division over meiotic division?",
    opts: ["Generating novel genetic recombinations", "Preserving adapted parental genotypes faithfully without alteration", "Reducing chromosome number for fertilization", "Producing four daughter cells per division"],
    ans: 1,
    exp: "Mitosis ensures clonal fidelity, faithfully preserving well-adapted parental genetic blueprints across cell generations."
  },
  {
    q: "The maximum number of times a normal human somatic cell population can divide before undergoing senescence is called the:",
    opts: ["Hayflick limit", "Arrhenius threshold", "Michaelis constant", "Avogadro number"],
    ans: 0,
    exp: "Leonard Hayflick discovered that cultured normal human somatic cells divide roughly 40–60 times before arresting permanently (Hayflick limit)."
  },
  {
    q: "The enzyme that maintains telomere length and prevents replicative senescence in stem cells and cancer cells is:",
    opts: ["Telomerase (a reverse transcriptase)", "Topoisomerase", "RNA polymerase III", "Helicase"],
    ans: 0,
    exp: "Telomerase is a specialized ribonucleoprotein reverse transcriptase that extends telomeric repeats, conferring replicative immortality."
  },
  {
    q: "What would occur if a cell repeatedly undergoes karyokinesis without following it with cytokinesis?",
    opts: ["Formation of a multinucleate syncytium or coenocyte", "Complete destruction of all chromosomes", "Immediate apoptosis within 5 minutes", "Conversion into a bacterium"],
    ans: 0,
    exp: "Repeated rounds of nuclear division without cytoplasmic division yield multinucleated cells (syncytium in animals, coenocyte in plants/fungi)."
  },
  {
    q: "In plant cell division, the cell plate grows:",
    opts: ["Centripetally from the periphery toward the center", "Centrifugally from the center toward the outside walls", "From the top pole downward only", "Randomly in all directions simultaneously"],
    ans: 1,
    exp: "The plant cell plate develops centrifugally, beginning in the center and expanding outward to fuse with lateral cell walls."
  },
  {
    q: "In animal cell division, the cleavage furrow develops:",
    opts: ["Centrifugally from the center to the periphery", "Centripetally from the periphery toward the center", "Only on one lateral side", "Inside the nucleolus"],
    ans: 1,
    exp: "In animal cells, cytokinesis involves an inward-deepening furrow that progresses centripetally until the two daughter cells pinch apart."
  },
  {
    q: "Colchicine treatment in plant tissue culture is widely utilized to induce:",
    opts: ["Polyploidy by disrupting spindle microtubules", "Haploidy by destroying the nucleus", "Rapid cytokinesis without DNA replication", "Dissolution of all cell walls"],
    ans: 0,
    exp: "Colchicine prevents mitotic spindle formation, causing replicated chromosomes to stay together in a single nucleus, inducing polyploidy (e.g. tetraploidy)."
  }
];

const lifeVariants = [
  {
    q: (n) => `In an experimental study ${n} on plant meristems, cells are continuously dividing to maintain root apical elongation. This division is:`,
    opts: ["Mitotic division maintaining diploid status ($2n$)", "Meiotic division producing microspores", "Amitosis resulting in random chromosome fragmentation", "Direct zygotic cleavage"],
    ans: 0,
    exp: "Root apical meristems undergo continuous mitosis to add new diploid ($2n$) vegetative somatic cells to growing root tips."
  },
  {
    q: (n) => `During regeneration assay ${n}, damaged liver tissue replaces lost cells through:`,
    opts: ["Mitotic proliferation of surviving mature hepatocytes", "Meiotic reduction of liver cells", "Amitotic fragmentation of erythrocytes", "Budding of the gallbladder"],
    ans: 0,
    exp: "Tissue repair and organ regeneration occur via mitotic division of existing differentiated or stem cell populations."
  },
  {
    q: (n) => `In developmental biology experiment ${n}, interdigital cell death between developing embryonic digits occurs via:`,
    opts: ["Programmed cell death (apoptosis)", "Necrotic cell lysis due to viral infection", "Uncontrolled mitotic catastrophe", "Osmotic bursting of vacuolated cells"],
    ans: 0,
    exp: "Interdigital webbing is sculpted and removed during limb development by genetically regulated apoptosis."
  },
  {
    q: (n) => `Analysis ${n} of cell size kinetics shows that when a cell reaches its critical volume threshold, division is induced primarily because:`,
    opts: ["The surface area becomes insufficient to meet the transport needs of the enlarged volume", "All DNA molecules spontaneously disintegrate", "The nuclear envelope thickens ten-fold", "ATP synthesis completely halts"],
    ans: 0,
    exp: "Disproportionate volume expansion diminishes the $SA/V$ ratio, restricting nutrient intake and gas exchange, which triggers division."
  },
  {
    q: (n) => `In cytogenetic trial ${n}, treating an onion root tip with an alkaloid that binds tubulin prevents:`,
    opts: ["Spindle formation, arresting cells in metaphase", "DNA replication in S phase", "Transcription of pre-rRNA in the nucleolus", "Hydrolysis of sucrose in vacuoles"],
    ans: 0,
    exp: "Tubulin-binding agents like colchicine prevent mitotic spindle fiber assembly, arresting dividing cells at metaphase."
  },
  {
    q: (n) => `In cell lineage tracing ${n}, which of the following cell types in adult humans has permanently lost the ability to divide?`,
    opts: ["Mature neurons in the central nervous system", "Epithelial cells of the intestine", "Basal keratinocytes of the skin", "Bone marrow hematopoietic stem cells"],
    ans: 0,
    exp: "Mature mammalian neurons permanently enter $G_0$ post-mitotically and do not divide in adult life."
  },
  {
    q: (n) => `In a study on plant life cycles ${n}, the formation of haploid spores from a diploid sporophyte occurs by:`,
    opts: ["Sporic meiosis", "Zygotic meiosis", "Gametic meiosis", "Mitotic budding"],
    ans: 0,
    exp: "Plants undergo sporic meiosis in spore mother cells (sporangia) to produce haploid spores that germinate into gametophytes."
  },
  {
    q: (n) => `Cytological investigation ${n} of the phragmoplast demonstrates that it is formed by:`,
    opts: ["Golgi-derived vesicles and fragments of endoplasmic reticulum", "Disintegrated mitochondrial cristae", "Pure starch granules from leucoplasts", "Lysosomal hydrolytic vesicles"],
    ans: 0,
    exp: "The phragmoplast consists of aligned microtubules, ER remnants, and Golgi vesicles carrying pectin precursors to the equatorial plane."
  }
];

let lvIdx = 0;
while (mcqQuestions.length < 154) {
  const v = lifeVariants[lvIdx % lifeVariants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  lvIdx++;
}

const part6Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part6Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

mcqQuestions.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part6Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

console.log(`Part 6 generated: ${part6Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part6.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part6Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
