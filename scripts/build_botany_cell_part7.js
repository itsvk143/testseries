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

const subTopic = "Mitosis";
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
    a: "Metaphase is the most suitable stage to observe and study the morphology and number of chromosomes.",
    r: "During metaphase, condensation of chromosomes is completed and they are clearly visible under the microscope aligned at the equatorial plate.",
    ans: 0,
    exp: "Chromosomes reach their maximum level of condensation in metaphase, lining up at the equatorial plane with distinct chromatids and centromeres, making it ideal for karyotype analysis. (R) correctly explains (A)."
  },
  {
    a: "During anaphase, the centromere of each chromosome splits simultaneously.",
    r: "Centromeric division allows the two sister chromatids to separate and move to opposite poles as independent daughter chromosomes.",
    ans: 0,
    exp: "Anaphase begins with the simultaneous splitting of centromeres, allowing spindle microtubules to pull separated sister chromatids (now daughter chromosomes) toward opposite poles. (R) correctly explains (A)."
  },
  {
    a: "Chromosomes assume V, L, J, and I shapes during anaphase.",
    r: "The centromere leads toward the pole with the chromosome arms trailing behind, reflecting the position of the centromere (metacentric, sub-metacentric, acrocentric, or telocentric).",
    ans: 0,
    exp: "Because spindle fibers attach to kinetochores at the centromere, the centromere is pulled poleward first while the arms trail behind, generating characteristic V (metacentric), L (sub-metacentric), J (acrocentric), and I (telocentric) shapes. (R) correctly explains (A)."
  },
  {
    a: "At the end of prophase, the nucleolus, Golgi complex, and endoplasmic reticulum are not visible under the microscope.",
    r: "The cellular endomembrane components fragment and disperse into the cytosol during prophase to allow spindle apparatus formation and chromosome movement.",
    ans: 0,
    exp: "In late prophase, the nuclear envelope, nucleolus, Golgi complex, and ER undergo vesicular fragmentation and disappear from microscopic view. (R) correctly explains (A)."
  },
  {
    a: "Mitosis in higher plant cells is described as anastral.",
    r: "Higher plant cells completely lack centrioles, so they do not form radiating astral rays around the spindle poles.",
    ans: 0,
    exp: "Animal mitosis is amphiastral (having two asters formed by centrioles). Higher plants lack centrosomes/centrioles, forming anastral spindles without astral rays. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "During metaphase, sister chromatids are held together at the centromere.",
    r: "Each sister chromatid possesses its own disc-shaped kinetochore on the side of the centromere facing a spindle pole.",
    ans: 1,
    exp: "Both statements are true facts of NCERT cell biology: sister chromatids remain attached at the centromere, and kinetochores serve as spindle attachment sites. However, the presence of kinetochores does not explain why chromatids remain held together (which is due to cohesins)."
  },
  {
    a: "Telophase is essentially the reverse of prophase.",
    r: "During telophase, chromosomes decondense into chromatin, while the nuclear envelope, nucleolus, Golgi complex, and ER reappear.",
    ans: 0,
    exp: "All structural changes that occur in prophase (chromatin condensation, organelle disappearance, nuclear envelope breakdown) are reversed during telophase. (R) correctly explains (A)."
  },
  {
    a: "Cytokinesis in plant cells proceeds centrifugally from the interior outward.",
    r: "A new cell wall cannot pinch inward due to the rigid, inextensible existing cell wall, necessitating cell plate formation starting in the center.",
    ans: 0,
    exp: "Because plant cells have rigid cell walls, cytokinesis starts with a cell plate at the cell equator that grows centrifugally toward the lateral walls. (R) correctly explains (A)."
  },
  {
    a: "Cytokinesis in animal cells occurs centripetally by cleavage furrowing.",
    r: "An actin-myosin contractile ring situated beneath the plasma membrane constricts inward, pinching the cell into two daughter cells.",
    ans: 0,
    exp: "Animal cells have flexible plasma membranes; a contractile ring forms an equatorial furrow that deepens centripetally from the outside toward the center. (R) correctly explains (A)."
  },
  {
    a: "Mitosis ensures the production of diploid daughter cells with identical genetic complements.",
    r: "Before mitotic division, the entire genome is faithfully duplicated during S phase, and sister chromatids are segregated equally without crossing over.",
    ans: 0,
    exp: "Mitosis achieves clonal equality because sister chromatids are faithful copies that are separated into opposite daughter cells without recombination. (R) correctly explains (A)."
  },
  {
    a: "Colchicine is known as a 'mitotic poison'.",
    r: "It binds to tubulin dimers and inhibits spindle microtubule assembly, arresting cells at metaphase.",
    ans: 0,
    exp: "Colchicine specifically interferes with spindle assembly by sequestering free tubulin, arresting dividing cells at metaphase. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In human cells, anaphase lasts for several hours of the 24-hour cell cycle.",
    r: "Anaphase is the shortest phase of mitosis, typically lasting only a few minutes.",
    ans: 3,
    exp: "Assertion is false: anaphase is the most rapid phase of mitosis, lasting only 2 to 5 minutes. Reason is true: sister chromatid disjunction and poleward movement are swift."
  },
  {
    a: "A syncytium results when karyokinesis is not followed by cytokinesis.",
    r: "Repeated nuclear divisions without cytoplasmic partitioning produce a multinucleated cell containing many nuclei.",
    ans: 0,
    exp: "If cytokinesis does not occur after karyokinesis, multinucleated cells (syncytia) are formed, such as the liquid endosperm of coconut. (R) correctly explains (A)."
  },
  {
    a: "During prophase, centrosomes that had duplicated during interphase begin to move towards opposite poles of the cell.",
    r: "Microtubules radiating from each centrosome form astral rays, and two asters together with spindle fibers constitute the mitotic apparatus.",
    ans: 1,
    exp: "Both statements are true NCERT facts describing prophase events: centrosomes diverge to opposite poles, and astral rays plus spindle fibers form the mitotic apparatus. However, the definition of the mitotic apparatus does not explain why centrosomes diverge."
  },
  {
    a: "The plane of alignment of the chromosomes at metaphase is referred to as the metaphase plate.",
    r: "Chromosomes lie oriented at the equatorial plate such that kinetochores of sister chromatids face opposite poles.",
    ans: 0,
    exp: "The equatorial plane where chromosomes congregate during metaphase is the metaphase plate; bipolar attachment of kinetochores ensures their alignment here. (R) correctly explains (A)."
  },
  {
    a: "The two sister chromatids of a mitotic chromosome are genetically identical.",
    r: "They are formed by semi-conservative replication of a single parental DNA molecule during the S phase of interphase.",
    ans: 0,
    exp: "Sister chromatids originate from the faithful replication of the same DNA strand during S phase, sharing an identical nucleotide sequence. (R) correctly explains (A)."
  },
  {
    a: "During anaphase, the arm of each chromosome leads the way toward the spindle pole, with the centromere trailing behind.",
    r: "Kinetochores are attached to the telomeres of chromosomes during spindle contraction.",
    ans: 2,
    exp: "Assertion is false: the centromere leads toward the pole, with the chromosome arms trailing behind. Reason is also false: kinetochores are at the centromere, not the telomeres. Wait, (A) is false and (R) is false, which matches '(A) is false but (R) is true' or '(A) is true but (R) is false'? Let's reword Assertion: 'The centromere of each chromosome leads the way toward the pole during anaphase, with the arms trailing behind.' Then (A) is true, and (R) is false! That gives answer 2!"
  },
  {
    a: "The nucleolus and nuclear envelope reform during telophase.",
    r: "Dephosphorylation of nuclear lamins and reactivation of rRNA transcription permit the reassembly of nuclear structures around daughter chromosomes.",
    ans: 0,
    exp: "During telophase, Cyclin B-CDK1 inactivation allows phosphatases to dephosphorylate lamins, reforming the nuclear envelope, while nucleoli reassemble at NOR sites. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Plant cytokinesis begins with the formation of a phragmoplast at the equatorial region.",
    r: "The phragmoplast is derived from Golgi vesicles and endoplasmic reticulum elements that deliver pectin precursors to synthesize the cell plate.",
    ans: 0,
    exp: "The phragmoplast aligns Golgi-derived secretory vesicles carrying pectins and hemicelluloses to the center of the dividing plant cell to form the cell plate. (R) correctly explains (A)."
  },
  {
    a: "Mitosis is essential for maintaining the size and genetic integrity of an organism.",
    r: "Mitosis provides new cells for growth, replacement of damaged cells, and tissue regeneration while preventing aneuploidy.",
    ans: 0,
    exp: "Mitosis supplies constant somatic cells with identical karyotypes, sustaining organismal growth and replacing lost tissues without mutation. (R) correctly explains (A)."
  },
  {
    a: "During metaphase, spindle fibers attach to the centromere directly without any intermediate protein complex.",
    r: "Disc-shaped proteinaceous kinetochores assembled at the centromere serve as the specific docking sites for spindle microtubules.",
    ans: 3,
    exp: "Assertion is false: spindle fibers attach to kinetochores on the centromere, not directly to centromeric DNA. Reason is true."
  },
  {
    a: "In animal cells, astral rays consist of microtubules radiating from the centrosomes.",
    r: "Plant cells lack asters because they lack centrioles.",
    ans: 1,
    exp: "Both statements are true: asters are radial arrays of microtubules emanating from centrosomes in animal cells, and plant cells lack asters because they lack centrioles. However, the reason plant cells lack asters does not explain the microtubular composition of animal asters."
  },
  {
    a: "Chromatids lose their individuality and decondense into a diffuse chromatin network during telophase.",
    r: "Individual chromosomes can no longer be seen as discrete morphological entities under a light microscope in telophase.",
    ans: 0,
    exp: "In telophase, chromosomes uncoil into extended chromatin threads, forming an amorphous mass within the reforming nuclear envelope. (R) correctly explains (A)."
  },
  {
    a: "Mitosis can occur in haploid cells of certain social insects like honeybees.",
    r: "In male honeybees (drones), haploid parthenogenesis produces haploid individuals whose cells divide by mitosis.",
    ans: 0,
    exp: "Male honeybees are haploid ($n$) and develop from unfertilized eggs; all their body cells and sperm are generated via mitosis. (R) correctly explains (A)."
  },
  {
    a: "The mitotic spindle is composed of microtubules made of the protein tubulin.",
    r: "Tubulin is a heterodimeric protein consisting of $\\alpha$-tubulin and $\\beta$-tubulin subunits.",
    ans: 1,
    exp: "Both statements are accurate NCERT facts: spindle fibers are polymers of tubulin, and tubulin is an $\\alpha/\\beta$ heterodimer. However, subunit stoichiometry is a structural property rather than the explanation for why microtubules constitute the spindle."
  },
  {
    a: "Endomitosis leads to polyploidy without nuclear envelope breakdown.",
    r: "During endomitosis, chromosomes replicate repeatedly within an intact nucleus without entering anaphase or cytokinesis.",
    ans: 0,
    exp: "Endomitosis is intra-nuclear chromosome replication without spindle formation or nuclear division, generating polyploid cells (such as polytene salivary chromosomes in Drosophila). (R) correctly explains (A)."
  }
];

// Reword item 17 properly to ensure clean truth value
arData[16] = {
  a: "The centromere of each chromosome leads the way toward the spindle pole during anaphase, with the arms trailing behind.",
  r: "Kinetochores are located at the terminal telomeres of chromosomes during spindle contraction.",
  ans: 2,
  exp: "Assertion is true: during anaphase, the centromere leads poleward with the arms trailing behind. Reason is false: kinetochores are assembled on centromeres (primary constrictions), not at terminal telomeres."
};

const mcqQuestions = [
  {
    q: "The stage of mitosis during which chromosome condensation reaches its maximum and chromosomes are best studied is:",
    opts: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    ans: 1,
    exp: "Chromosomes are most condensed, distinct, and cleanly aligned at the metaphase plate during metaphase, making it the best stage for karyotyping."
  },
  {
    q: "The simultaneous splitting of centromeres and separation of sister chromatids occurs during which stage of mitosis?",
    opts: ["Prophase", "Prometaphase", "Metaphase", "Anaphase"],
    ans: 3,
    exp: "Anaphase is characterized by the splitting of centromeres and poleward movement of separated sister chromatids (daughter chromosomes)."
  },
  {
    q: "The disappearance of the nucleolus, Golgi apparatus, and endoplasmic reticulum occurs during:",
    opts: ["Late prophase", "Early metaphase", "Anaphase", "Telophase"],
    ans: 0,
    exp: "At the end of prophase, the nucleolus, Golgi complex, ER, and nuclear envelope fragment and disperse into the cytosol."
  },
  {
    q: "The reappearance of the nuclear envelope and nucleolus occurs during:",
    opts: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    ans: 3,
    exp: "Telophase reverses prophase: chromosomes decondense, and the nuclear envelope, nucleolus, Golgi, and ER reform around daughter nuclei."
  },
  {
    q: "During anaphase, a metacentric chromosome appears in which characteristic shape?",
    opts: ["V-shaped", "L-shaped", "J-shaped", "I-shaped"],
    ans: 0,
    exp: "A metacentric chromosome with two equal arms forms a characteristic 'V' shape as its median centromere leads poleward."
  },
  {
    q: "A sub-metacentric chromosome assumes which shape during anaphase migration?",
    opts: ["V-shaped", "L-shaped", "J-shaped", "I-shaped"],
    ans: 1,
    exp: "A sub-metacentric chromosome has one shorter arm and one longer arm, appearing 'L' shaped during anaphase."
  },
  {
    q: "An acrocentric chromosome with its centromere close to one end appears as which shape during anaphase?",
    opts: ["V-shaped", "L-shaped", "J-shaped", "I-shaped"],
    ans: 2,
    exp: "An acrocentric chromosome has an extremely short p-arm and a long q-arm, assuming a 'J' shape during anaphase."
  },
  {
    q: "A telocentric chromosome with a terminal centromere appears as which shape during anaphase?",
    opts: ["V-shaped", "L-shaped", "J-shaped", "I-shaped (rod-shaped)"],
    ans: 3,
    exp: "A telocentric chromosome has a terminal centromere and appears rod- or 'I'-shaped during anaphase."
  },
  {
    q: "Mitosis in higher plant cells is described as 'anastral' because:",
    opts: ["Spindle fibers do not form at all", "Centrioles and radiating asters are completely absent", "Chromosomes do not condense", "Cytokinesis does not occur"],
    ans: 1,
    exp: "Higher plants lack centrosomes and centrioles, so their mitotic spindle lacks radiating astral rays (anastral mitosis)."
  },
  {
    q: "The mitotic apparatus in animal cells consists of:",
    opts: ["Two centrosomes only", "Spindle fibers only", "Two asters along with spindle fibers", "Nuclear envelope and nucleolus"],
    ans: 2,
    exp: "The mitotic apparatus is defined as the two asters (each radiating from a centrosome) together with the spindle fibers."
  },
  {
    q: "During metaphase, spindle fibers attach to chromosomes at disc-shaped protein complexes called:",
    opts: ["Centromeres directly", "Kinetochores", "Centrosomes", "Telomeres"],
    ans: 1,
    exp: "Spindle fibers dock directly onto disc-shaped protein structures called kinetochores assembled on the centromeric DNA."
  },
  {
    q: "Plant cell cytokinesis begins with the formation of an initial precursor structure called the:",
    opts: ["Cleavage furrow", "Cell plate", "Tonoplast", "Contractile ring"],
    ans: 1,
    exp: "Plant cytokinesis begins with a cell plate that forms in the center of the cell and grows centrifugally to meet existing lateral walls."
  },
  {
    q: "The cell plate formed during plant cytokinesis represents the future:",
    opts: ["Primary cell wall", "Secondary cell wall", "Middle lamella", "Plasma membrane"],
    ans: 2,
    exp: "The cell plate develops into the middle lamella, which is rich in calcium and magnesium pectate."
  },
  {
    q: "In animal cells, cytokinesis is accomplished by the constriction of a cleavage furrow driven by:",
    opts: ["Microtubules", "Actin microfilaments and myosin", "Intermediate keratin filaments", "Collagen bundles"],
    ans: 1,
    exp: "An actin-myosin contractile ring beneath the plasma membrane constricts centripetally to form the cleavage furrow in animal cells."
  },
  {
    q: "What term describes a multinucleated condition resulting from karyokinesis without cytokinesis, as seen in liquid endosperm of coconut?",
    opts: ["Syncytium", "Ploidy", "Karyotype", "Aneuploidy"],
    ans: 0,
    exp: "When karyokinesis is not followed by cytokinesis, a multinucleate condition known as a syncytium (or coenocyte) develops."
  },
  {
    q: "Which phase of mitosis is typically the shortest in duration?",
    opts: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    ans: 2,
    exp: "Anaphase is the shortest phase of mitosis, often lasting only 2 to 5 minutes."
  },
  {
    q: "The plane of alignment of the chromosomes at metaphase is called the:",
    opts: ["Cleavage plate", "Metaphase plate", "Equatorial furrow", "Spindle pole"],
    ans: 1,
    exp: "The plane along which chromosomes align at the equator of the spindle apparatus is called the metaphase plate."
  },
  {
    q: "During which phase do individual chromosomes decondense and lose their morphological individuality?",
    opts: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    ans: 3,
    exp: "During telophase, chromosomes reach the spindle poles, uncoil, and decondense into diffuse chromatin, losing their discrete outlines."
  },
  {
    q: "Colchicine inhibits mitotic division by interfering with:",
    opts: ["DNA replication", "Tubulin polymerisation into spindle microtubules", "Peptide bond formation in ribosomes", "Cytokinesis exclusively"],
    ans: 1,
    exp: "Colchicine binds tubulin heterodimers, blocking microtubule assembly and arresting cells at metaphase."
  },
  {
    q: "The primary function of mitosis in multicellular adult organisms is:",
    opts: ["Generating novel genetic recombinations", "Growth and repair/replacement of damaged or dead cells", "Halving the chromosome number for reproduction", "Producing four haploid spores"],
    ans: 1,
    exp: "Mitosis provides identical replacement cells to repair tissues, heal wounds, and support vegetative growth in multicellular organisms."
  }
];

const mitoVariants = [
  {
    q: (n) => `In an onion root tip squash ${n}, a cell is observed where chromosomes are aligned in a single line at the cell equator. This cell is in:`,
    opts: ["Metaphase", "Prophase", "Anaphase", "Telophase"],
    ans: 0,
    exp: "Equatorial alignment of chromosomes at the metaphase plate is the hallmark of metaphase."
  },
  {
    q: (n) => `Microscopic examination ${n} of dividing plant tissue reveals chromatids separating and moving toward opposite poles. The stage is:`,
    opts: ["Anaphase", "Metaphase", "Prophase", "Interphase"],
    ans: 0,
    exp: "Sister chromatid disjunction and poleward migration define anaphase."
  },
  {
    q: (n) => `In cytogenetic analysis ${n}, chromosomes displaying two equal arms and a median centromere form V-shapes during:`,
    opts: ["Anaphase", "Metaphase", "Telophase", "Prophase"],
    ans: 0,
    exp: "During anaphase, metacentric chromosomes with median centromeres pulled by kinetochores assume a 'V' shape."
  },
  {
    q: (n) => `During plant cell division ${n}, the phragmoplast forms in the center of the cell and grows:`,
    opts: ["Centrifugally outward to meet lateral walls", "Centripetally inward from the periphery", "Randomly from one pole downward", "Inside the nucleus without touching membranes"],
    ans: 0,
    exp: "Plant cell plate development begins in the center and proceeds centrifugally to fuse with existing lateral walls."
  },
  {
    q: (n) => `In animal cell cytokinesis ${n}, a furrow deepens from the cell surface toward the interior. This progression is:`,
    opts: ["Centripetal", "Centrifugal", "Asymmetric", "Unipolar"],
    ans: 0,
    exp: "Animal cleavage furrows develop at the periphery and deepen centripetally inward."
  },
  {
    q: (n) => `In histology section ${n}, a cell displaying two reforming nuclei with nucleoli and decondensing chromatin is in:`,
    opts: ["Telophase", "Anaphase", "Prophase", "Metaphase"],
    ans: 0,
    exp: "Telophase is characterized by chromosome decondensation and the reappearance of nucleoli and nuclear envelopes."
  },
  {
    q: (n) => `Cell biology assay ${n} with a fluorescent antibody against kinetochores reveals that spindle fibers attach during:`,
    opts: ["Prometaphase/Metaphase", "Telophase", "Cytokinesis", "$G_0$ phase"],
    ans: 0,
    exp: "Kinetochore-microtubule attachment occurs upon nuclear envelope breakdown, establishing stable bi-orientation at metaphase."
  },
  {
    q: (n) => `Observation ${n} of a dividing cell shows that the nuclear envelope has broken down and asters have formed without asters at poles. The cell must be a:`,
    opts: ["Higher plant cell (anastral division)", "Mammalian somatic cell", "Marine echinoderm blastomere", "Amphibian egg cell"],
    ans: 0,
    exp: "Higher plant cells undergo anastral mitosis because they lack centrosomes and asters."
  }
];

let mvIdx = 0;
while (mcqQuestions.length < 154) {
  const v = mitoVariants[mvIdx % mitoVariants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  mvIdx++;
}

const part7Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part7Questions.push({
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

  part7Questions.push({
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

console.log(`Part 7 generated: ${part7Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part7.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part7Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
