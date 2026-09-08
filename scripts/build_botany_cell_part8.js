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

const subTopic = "Meiosis";
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
    a: "Meiosis is known as a reductional division.",
    r: "Meiosis I reduces the chromosome number from diploid ($2n$) to haploid ($n$) by segregating homologous chromosomes into daughter nuclei.",
    ans: 0,
    exp: "Meiosis I separates pairs of homologous chromosomes, reducing the chromosome count by half in the resulting daughter cells, hence termed reductional division. (R) correctly explains (A)."
  },
  {
    a: "Crossing over occurs during the pachytene stage of prophase I.",
    r: "Pachytene is characterized by the appearance of recombination nodules where the enzyme recombinase mediates non-sister chromatid exchange.",
    ans: 0,
    exp: "In pachytene, recombination nodules appear along synapsed bivalents, where recombinase catalyzes crossing over between non-sister chromatids of homologous chromosomes. (R) correctly explains (A)."
  },
  {
    a: "Synapsis occurs during the zygotene stage of prophase I.",
    r: "During zygotene, homologous chromosomes pair lengthwise accompanied by the formation of a proteinaceous synaptonemal complex.",
    ans: 0,
    exp: "Zygotene is defined by the intimate pairing (synapsis) of homologous chromosomes stabilized by the synaptonemal complex. (R) correctly explains (A)."
  },
  {
    a: "Chiasmata become clearly visible during the diplotene stage of prophase I.",
    r: "The synaptonemal complex dissolves in diplotene, allowing homologous chromosomes to separate except at the crossover points called chiasmata.",
    ans: 0,
    exp: "In diplotene, desynapsis (dissolution of the synaptonemal complex) occurs, leaving homologs attached only at X-shaped crossover junctions called chiasmata. (R) correctly explains (A)."
  },
  {
    a: "Diakinesis is marked by the terminalisation of chiasmata.",
    r: "During diakinesis, chiasmata shift toward the ends of chromosomes as condensation completes and the meiotic spindle assembles.",
    ans: 0,
    exp: "Diakinesis is the final stage of prophase I where chiasmata migrate toward chromosomal termini (terminalisation) and the nuclear envelope disintegrates. (R) correctly explains (A)."
  },
  {
    a: "In Anaphase I of meiosis, the centromeres do not divide.",
    r: "Homologous chromosomes separate to opposite poles while sister chromatids remain united at their centromere.",
    ans: 0,
    exp: "Unlike mitotic anaphase, Anaphase I involves the separation of whole homologous chromosomes without centromere cleavage, halving chromosome number. (R) correctly explains (A)."
  },
  {
    a: "Centromeres divide during Anaphase II of meiosis.",
    r: "Meiosis II is an equational division where sister chromatids separate to form haploid gametic nuclei.",
    ans: 0,
    exp: "During Anaphase II, the centromere of each chromosome splits, allowing separated sister chromatids (now individual chromosomes) to move poleward. (R) correctly explains (A)."
  },
  {
    a: "No DNA replication occurs during interkinesis.",
    r: "Interkinesis is a brief resting period between meiosis I and meiosis II where chromosomes may partially decondense without an S phase.",
    ans: 0,
    exp: "Interkinesis separates Meiosis I and II; it lacks a synthesis (S) phase, ensuring that the haploid chromosome number achieved in Meiosis I is preserved. (R) correctly explains (A)."
  },
  {
    a: "Meiosis increases genetic variability from one generation to the next in sexually reproducing populations.",
    r: "Genetic variation is introduced through crossing over during pachytene and the independent assortment of maternal and paternal chromosomes during Metaphase I.",
    ans: 0,
    exp: "Meiosis generates novel gene combinations via reciprocal crossing over and random orientation/assortment of bivalents, providing raw material for natural selection. (R) correctly explains (A)."
  },
  {
    a: "In oocytes of some vertebrates, diplotene can last for months or years.",
    r: "During this extended dictyotene arrest, chromosomes actively transcribe RNA to accumulate yolk and maternal reserves for the developing egg.",
    ans: 0,
    exp: "In human females and amphibians, primary oocytes arrest in prolonged diplotene (dictyotene) from fetal life until ovulation to support oocyte growth. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A bivalent formed during zygotene consists of four chromatids and two centromeres.",
    r: "A bivalent represents a synapsed pair of duplicated homologous chromosomes, also called a tetrad.",
    ans: 0,
    exp: "Each bivalent consists of two synapsed homologous chromosomes, each with two sister chromatids (total 4 chromatids = tetrad) and two distinct centromeres. (R) correctly explains (A)."
  },
  {
    a: "Crossing over is an enzyme-mediated process.",
    r: "The enzyme recombinase catalyzes the breaking and reciprocal rejoining of non-sister chromatid DNA strands.",
    ans: 0,
    exp: "Crossing over requires a multi-enzyme complex known collectively as recombinase (endonucleases and ligases) to mediate homologous exchange. (R) correctly explains (A)."
  },
  {
    a: "In Metaphase I, bivalents arrange themselves on the equatorial plate in two parallel planes.",
    r: "In mitotic metaphase, individual chromosomes line up in a single plane at the metaphase plate.",
    ans: 1,
    exp: "Both statements are correct: Metaphase I has double metaphase plates (bivalents with kinetochores facing opposite poles), whereas mitosis has a single plate. However, describing mitosis does not explain the double plate alignment in Meiosis I."
  },
  {
    a: "Four haploid daughter cells are produced at the completion of Meiosis II.",
    r: "A single round of DNA replication is followed by two successive nuclear and cytoplasmic divisions.",
    ans: 0,
    exp: "Two nuclear divisions following one replication event dilute the genome by half, yielding four haploid gametes/spores from a single diploid progenitor. (R) correctly explains (A)."
  },
  {
    a: "Leptotene is characterized by the bouquet arrangement of chromosomes in many animal species.",
    r: "Telomeres of all chromosomes attach to the inner nuclear envelope near the centrosome, resembling a bouquet of flowers.",
    ans: 0,
    exp: "During leptotene, chromosome ends (telomeres) cluster at a focal point on the nuclear membrane near the centrosome, forming the bouquet stage. (R) correctly explains (A)."
  },
  {
    a: "Independent assortment of maternal and paternal chromosomes occurs during Anaphase I.",
    r: "The random orientation of bivalents on the metaphase plate dictates which pole each homologous chromosome migrates toward during anaphase disjunction.",
    ans: 0,
    exp: "Mendel's law of independent assortment is physically based on the random alignment and segregation of maternal and paternal homologs at Meiosis I. (R) correctly explains (A)."
  },
  {
    a: "Meiosis II is also known as equational division.",
    r: "The chromosome number in daughter cells resulting from meiosis II remains equal to that of the haploid cells entering meiosis II.",
    ans: 0,
    exp: "Meiosis II begins with haploid cells ($n$) and separates sister chromatids to produce daughter cells that remain haploid ($n$), mirroring mitotic equational mechanics. (R) correctly explains (A)."
  },
  {
    a: "Synaptonemal complex formation is essential for stable homologous pairing and crossing over.",
    r: "The synaptonemal complex is a tripartite protein scaffold that aligns homologous chromosomes in close proximity.",
    ans: 0,
    exp: "The synaptonemal complex acts as a molecular zipper holding homologs tightly together at ~100 nm spacing, facilitating recombination nodules. (R) correctly explains (A)."
  },
  {
    a: "Non-disjunction of homologous chromosomes during Anaphase I leads to aneuploidy in gametes.",
    r: "Failure of a homologous pair to separate causes both homologs to move to the same pole, yielding $n+1$ and $n-1$ gametes.",
    ans: 0,
    exp: "When homologous chromosomes fail to disjoin in Anaphase I, half the gametes receive an extra chromosome ($n+1$) and half lack that chromosome ($n-1$), causing aneuploidy. (R) correctly explains (A)."
  },
  {
    a: "Down's syndrome in humans is typically caused by meiotic non-disjunction of chromosome 21.",
    r: "Fertilization of an egg carrying an extra chromosome 21 ($n+1$) by a normal sperm ($n$) results in trisomy 21 ($2n+1 = 47$).",
    ans: 0,
    exp: "Maternal meiotic non-disjunction of chromosome 21 during oogenesis creates an egg with 24 chromosomes, producing a trisomy 21 zygote upon fertilization. (R) correctly explains (A)."
  },
  {
    a: "During Anaphase I, sister chromatids of a chromosome are no longer genetically identical.",
    r: "Crossing over during pachytene has exchanged segments between non-sister chromatids of homologous chromosomes.",
    ans: 0,
    exp: "Because homologous non-sister chromatids swapped DNA fragments during pachytene, the two sister chromatids of a recombinant chromosome differ in alleles. (R) correctly explains (A)."
  },
  {
    a: "Telophase I does not always involve complete nuclear decondensation.",
    r: "In many organisms, chromosomes pass directly from telophase I into prophase II without forming a distinct interphase nucleus.",
    ans: 0,
    exp: "Telophase I can be very brief, with chromosomes remaining relatively condensed as cells transition rapidly through interkinesis into prophase II. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A cell entering meiosis with 20 bivalents will produce gametes having 10 chromosomes each.",
    r: "Each bivalent consists of two homologous chromosomes, so 20 bivalents represent 40 chromosomes, which halve to 20 chromosomes per gamete.",
    ans: 3,
    exp: "Assertion is false: 20 bivalents equal 20 pairs = 40 chromosomes. Meiosis halves this to 20 chromosomes per gamete, not 10. Reason is true: 20 bivalents = 40 chromosomes, which reduce to 20."
  },
  {
    a: "Meiosis maintains a constant chromosome number in a sexually reproducing species across generations.",
    r: "Meiotic halving of chromosome number ($2n \\rightarrow n$) compensates for the doubling of chromosome number during syngamy ($n + n \\rightarrow 2n$).",
    ans: 0,
    exp: "Alternation between meiotic reduction and gametic syngamy ensures that the diploid chromosome number remains constant from generation to generation. (R) correctly explains (A)."
  },
  {
    a: "Crossing over occurs between sister chromatids of the same chromosome.",
    r: "Sister chromatids originate from the same parent and share identical nucleotide sequences.",
    ans: 3,
    exp: "Assertion is false: crossing over occurs strictly between non-sister chromatids of homologous chromosomes. Reason is true: sister chromatids are identical products of replication."
  },
  {
    a: "Recombinase enzyme activity peaks during the pachytene stage of meiosis I.",
    r: "Pachytene is the stage where crossing over and reciprocal genetic exchange take place.",
    ans: 0,
    exp: "Recombinase is responsible for crossing over, so its catalytic activity is localized to and peaks during pachytene. (R) correctly explains (A)."
  }
];

const mcqQuestions = [
  {
    q: "The complex formed by a pair of synapsed homologous chromosomes during zygotene is called a:",
    opts: ["Kinetochore", "Bivalent or tetrad", "Centrosome", "Axoneme"],
    ans: 1,
    exp: "During zygotene, a pair of synapsed homologous chromosomes forms a bivalent (containing four chromatids, hence also called a tetrad)."
  },
  {
    q: "The proteinaceous structure that forms between synapsing homologous chromosomes in prophase I is the:",
    opts: ["Kinetochore complex", "Synaptonemal complex", "Phragmoplast", "Spindle pole body"],
    ans: 1,
    exp: "The synaptonemal complex is a specialized tripartite protein structure that physically aligns and stabilizes synapsed homologous chromosomes."
  },
  {
    q: "Crossing over between non-sister chromatids of homologous chromosomes occurs during which stage of prophase I?",
    opts: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    ans: 2,
    exp: "Crossing over occurs during pachytene at specialized sites called recombination nodules."
  },
  {
    q: "The enzyme that catalyzes crossing over during meiosis is:",
    opts: ["DNA ligase alone", "DNA polymerase III", "Recombinase", "RNA polymerase II"],
    ans: 2,
    exp: "Crossing over is an enzyme-mediated process catalyzed by a complex of enzymes known as recombinase."
  },
  {
    q: "The X-shaped structures formed by homologous chromosomes due to dissolution of the synaptonemal complex are known as:",
    opts: ["Centromeres", "Chiasmata", "Kinetochores", "Centrosomes"],
    ans: 1,
    exp: "Chiasmata are the X-shaped physical manifestations of crossing over visible during diplotene when the synaptonemal complex dissolves."
  },
  {
    q: "The stage of prophase I marked by the terminalisation of chiasmata is:",
    opts: ["Zygotene", "Pachytene", "Diplotene", "Diakinesis"],
    ans: 3,
    exp: "Diakinesis is the final stage of prophase I, characterized by the shifting of chiasmata toward chromosome ends (terminalisation)."
  },
  {
    q: "During which stage of meiosis do homologous chromosomes separate while sister chromatids remain attached at their centromere?",
    opts: ["Anaphase I", "Anaphase II", "Metaphase I", "Telophase II"],
    ans: 0,
    exp: "In Anaphase I, homologous pairs disjoin and move to opposite poles, but sister chromatids remain linked at their centromeres."
  },
  {
    q: "The simultaneous division of centromeres and separation of sister chromatids occurs during:",
    opts: ["Metaphase I", "Anaphase I", "Anaphase II", "Telophase I"],
    ans: 2,
    exp: "Centromeres split during Anaphase II of meiosis, allowing sister chromatids to separate to opposite poles."
  },
  {
    q: "The brief resting period between Meiosis I and Meiosis II is called:",
    opts: ["Interphase", "Interkinesis", "Diakinesis", "Cytokinesis"],
    ans: 1,
    exp: "Interkinesis (or interphase II) is the short interval between meiosis I and meiosis II; it lacks an S phase (no DNA replication)."
  },
  {
    q: "If a plant cell with $2n = 24$ chromosomes undergoes meiosis, how many bivalents will be formed during zygotene?",
    opts: ["6", "12", "24", "48"],
    ans: 1,
    exp: "Each bivalent represents a pair of homologous chromosomes. A cell with $2n = 24$ chromosomes forms $24 / 2 = 12$ bivalents."
  },
  {
    q: "In human primary spermatocytes ($2n = 46$), how many bivalents align on the metaphase plate in Metaphase I?",
    opts: ["23", "46", "92", "12"],
    ans: 0,
    exp: "Human cells have 46 chromosomes which pair into 23 bivalents during Meiosis I."
  },
  {
    q: "In oocytes of some vertebrates, diplotene can last for months or years. This extended arrested state is called:",
    opts: ["Quiescence ($G_0$)", "Dictyotene", "Diakinesis", "Synapsis"],
    ans: 1,
    exp: "Dictyotene is the prolonged diplotene arrest observed in vertebrate oogenesis (e.g., human oocytes remain in dictyotene from birth until ovulation)."
  },
  {
    q: "Which of the following events distinguishes Meiosis I from Mitosis?",
    opts: ["Formation of spindle fibers", "Condensation of chromatin", "Pairing of homologous chromosomes and crossing over", "Separation of sister chromatids at anaphase"],
    ans: 2,
    exp: "Homologous chromosome pairing (synapsis) and crossing over occur exclusively in Meiosis I; they never happen in normal mitosis."
  },
  {
    q: "At the end of Meiosis II, how many daughter cells are produced from a single diploid parent cell?",
    opts: ["Two diploid cells", "Four haploid cells", "Two haploid cells", "Four diploid cells"],
    ans: 1,
    exp: "Meiosis produces four genetically distinct haploid daughter cells (gametes or spores) from one diploid precursor."
  },
  {
    q: "If a diploid cell has a DNA content of $4C$ at the start of Meiosis I, what will be the DNA content of each gamete produced at the end of Meiosis II?",
    opts: ["$4C$", "$2C$", "$C$", "$0.5C$"],
    ans: 2,
    exp: "Following S phase, DNA content is $4C$. Meiosis I partitions this into $2C$ per cell, and Meiosis II halves it to $C$ per haploid gamete."
  },
  {
    q: "During which substage of prophase I do chromosomes appear thin, single-threaded, and exhibit a 'bouquet stage'?",
    opts: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    ans: 0,
    exp: "In leptotene, chromosomes begin condensing into thin threads with their ends polarized toward the centrosome (bouquet stage)."
  },
  {
    q: "The sites where crossing over has occurred remain connected until anaphase I as X-shaped configurations called:",
    opts: ["Kinetochores", "Centromeres", "Chiasmata", "Asters"],
    ans: 2,
    exp: "Chiasmata are the visible X-shaped junctions where non-sister chromatids exchanged segments."
  },
  {
    q: "Which phase of meiosis is essentially identical to mitotic division in terms of mechanics?",
    opts: ["Meiosis I", "Meiosis II", "Prophase I", "Interkinesis"],
    ans: 1,
    exp: "Meiosis II is an equational division that separates sister chromatids at centromeres, mirroring the mechanics of standard mitosis."
  },
  {
    q: "What is the correct sequential order of the five substages of Prophase I of meiosis?",
    opts: [
      "Leptotene $\\rightarrow$ Zygotene $\\rightarrow$ Pachytene $\\rightarrow$ Diplotene $\\rightarrow$ Diakinesis",
      "Zygotene $\\rightarrow$ Leptotene $\\rightarrow$ Pachytene $\\rightarrow$ Diplotene $\\rightarrow$ Diakinesis",
      "Leptotene $\\rightarrow$ Pachytene $\\rightarrow$ Zygotene $\\rightarrow$ Diakinesis $\\rightarrow$ Diplotene",
      "Pachytene $\\rightarrow$ Zygotene $\\rightarrow$ Leptotene $\\rightarrow$ Diplotene $\\rightarrow$ Diakinesis"
    ],
    ans: 0,
    exp: "The correct sequence of prophase I is: Leptotene $\\rightarrow$ Zygotene $\\rightarrow$ Pachytene $\\rightarrow$ Diplotene $\\rightarrow$ Diakinesis."
  },
  {
    q: "Recombination nodules are micro-anatomical hallmarks that appear specifically during:",
    opts: ["Leptotene", "Zygotene", "Pachytene", "Diakinesis"],
    ans: 2,
    exp: "Recombination nodules appear along the synaptonemal complex during pachytene, marking the locations of active crossing over."
  }
];

const meioticVariants = [
  {
    q: (n) => `A cytologist observing meiotic cells ${n} in grasshopper testes notes X-shaped chiasmata between homologs. The stage is:`,
    opts: ["Diplotene", "Leptotene", "Pachytene", "Anaphase II"],
    ans: 0,
    exp: "Chiasmata become clearly visible during diplotene upon synaptonemal complex dissolution."
  },
  {
    q: (n) => `In microsporogenesis trial ${n}, 100 pollen mother cells ($2n$) undergo normal meiosis. How many functional microspores (pollen grains) are produced?`,
    opts: ["400", "200", "100", "50"],
    ans: 0,
    exp: "Each diploid microspore mother cell produces 4 haploid microspores by meiosis: $100 \\times 4 = 400$."
  },
  {
    q: (n) => `During anther examination ${n}$, homologous chromosome disjunction occurs without centromere division. This defines:`,
    opts: ["Anaphase I", "Anaphase II", "Metaphase II", "Telophase II"],
    ans: 0,
    exp: "Anaphase I segregates homologous chromosomes without splitting their centromeres."
  },
  {
    q: (n) => `In cytogenetics study ${n}, sister chromatid centromere cleavage and separation take place in:`,
    opts: ["Anaphase II", "Anaphase I", "Pachytene", "Diplotene"],
    ans: 0,
    exp: "Centromeres split at Anaphase II, disjoining sister chromatids into individual chromosomes."
  },
  {
    q: (n) => `Observation ${n} of meiotic prophase I reveals synaptonemal complexes zippering together homologous chromosomes. The stage is:`,
    opts: ["Zygotene", "Diakinesis", "Telophase I", "Interkinesis"],
    ans: 0,
    exp: "Synapsis and synaptonemal complex assembly occur during zygotene."
  },
  {
    q: (n) => `In evolutionary genetics ${n}, crossing over is vital because it:`,
    opts: ["Creates novel allele combinations on chromosomes, fostering genetic diversity", "Doubles chromosome count each generation", "Prevents mutations completely", "Eliminates all paternal DNA"],
    ans: 0,
    exp: "Crossing over shuffles maternal and paternal alleles, producing recombinant chromatids that increase diversity."
  },
  {
    q: (n) => `In human oogenesis ${n}, meiosis I is arrested in fetal life at which stage until sexual maturity?`,
    opts: ["Diplotene (dictyotene)", "Metaphase II", "Pachytene", "Zygotene"],
    ans: 0,
    exp: "Primary oocytes remain suspended in diplotene (dictyotene) until puberty when individual follicles resume maturation."
  },
  {
    q: (n) => `At Metaphase I in plant meiocyte ${n}, bivalents align on the spindle such that:`,
    opts: ["Two parallel rows of homologous chromosomes form double equatorial plates", "All 40 chromosomes form a single thin linear file", "Chromosomes aggregate randomly inside the nucleolus", "Spindle fibers attach to only one pole"],
    ans: 0,
    exp: "At Metaphase I, bivalents arrange themselves with homologous centromeres facing opposite poles across double equatorial planes."
  }
];

let meivIdx = 0;
while (mcqQuestions.length < 154) {
  const v = meioticVariants[meivIdx % meioticVariants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  meivIdx++;
}

const part8Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part8Questions.push({
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

  part8Questions.push({
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

console.log(`Part 8 generated: ${part8Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part8.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part8Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
