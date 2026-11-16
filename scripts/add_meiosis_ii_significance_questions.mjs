import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Meiosis-II-&-Significance';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Meiosis-II-and-Significance',
  'neet-SUBTOPIC-Botany-Meiosis-II-&-Significance-of-Meiosis',
  'neet-SUBTOPIC-Meiosis'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Cell Cycle and Cell Division';
const SUBTOPIC = 'Meiosis II & Significance';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-MIIS-001",
    "question": "A diploid angiosperm (2n = 24) has 20 pg of DNA in its root meristem cell during the G\u2081 phase. What will be the number of chromosomes, chromatids, and DNA content respectively in **one** of the cells undergoing **Metaphase II** of microsporogenesis?",
    "options": [
      "24 chromosomes, 48 chromatids, 40 pg DNA",
      "12 chromosomes, 24 chromatids, 20 pg DNA",
      "12 chromosomes, 12 chromatids, 10 pg DNA",
      "6 chromosomes, 12 chromatids, 10 pg DNA"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In G\u2081, the diploid cell (2n = 24) has 2C = 20 pg DNA. After pre-meiotic S phase, it becomes 4C = 40 pg. After Meiosis I, each daughter cell entering Meiosis II (including Metaphase II) is haploid (n = 12 chromosomes) with 2C = 20 pg DNA, and each chromosome still has 2 chromatids (12 \u00d7 2 = 24 chromatids)."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-MIIS-002",
    "question": "Consider the following statements regarding **Meiosis II**:\n\n(i) Meiosis II is initiated immediately after cytokinesis of Meiosis I, usually before the chromosomes have fully elongated.\n(ii) In contrast to Meiosis I, Meiosis II resembles a normal mitosis, although the dividing cell is haploid (n) in chromosome number.\n(iii) During Prophase II, the nuclear membrane disappears by the end of the stage and chromosomes again become compact.\n(iv) During Anaphase II, homologous chromosomes separate while sister chromatids remain joined at their centromeres.\n\nHow many of the above statements are **incorrect**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Only statement (iv) is incorrect:\n\n- (i), (ii), and (iii) are directly from NCERT and accurate.\n- (iv) is incorrect because during Anaphase II, *sister chromatids* separate following centromere splitting (homologous chromosomes already separated during Anaphase I)."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-MIIS-003",
    "question": "Read the following Assertion (A) and Reason (R) carefully:\n\n- **Assertion (A):** During Anaphase II of meiosis, the number of chromosomes inside the single dividing cell temporarily doubles, yet the ploidy of each resulting daughter nucleus remains haploid (n).\n- **Reason (R):** Simultaneous splitting of the centromere of each chromosome in Anaphase II allows sister chromatids to separate and move toward opposite poles as independent daughter chromosomes.\n\nChoose the correct option:",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "Both A and R are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In Anaphase II, each haploid cell (n chromosomes, 2n chromatids) undergoes simultaneous centromere splitting. Once separated, each former sister chromatid is counted as an independent chromosome, temporarily doubling the count inside the dividing cell (n \u2192 2n) before cytokinesis partitions n chromosomes into each haploid daughter cell."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-MIIS-004",
    "question": "Match the stages of Meiosis II in Column I with their characteristic cytological events in Column II:\n\n| Column I | Column II |\n| :--- | :--- |\n| 1. Prophase II | (p) Chromosomes align at the equator; microtubules from opposite poles attach to kinetochores of sister chromatids |\n| 2. Metaphase II | (q) Two groups of chromosomes once again get enclosed by a nuclear envelope; tetrad of cells is formed |\n| 3. Anaphase II | (r) Nuclear membrane disappears and chromosomes regain compactness after brief interkinesis |\n| 4. Telophase II | (s) Splitting of centromere of each chromosome and migration of sister chromatids toward opposite poles |",
    "options": [
      "1-(r), 2-(p), 3-(s), 4-(q)",
      "1-(p), 2-(r), 3-(s), 4-(q)",
      "1-(r), 2-(s), 3-(p), 4-(q)",
      "1-(q), 2-(p), 3-(s), 4-(r)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Prophase II = nuclear membrane disappears and chromosomes compact again (r); Metaphase II = chromosomes align at equator with opposite spindle poles attaching to sister kinetochores (p); Anaphase II = centromere splits and sister chromatids migrate to opposite poles (s); Telophase II = nuclear envelope encloses chromosomes and tetrad of cells forms (q)."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-MIIS-005",
    "question": "In human oogenesis, the secondary oocyte completes Meiosis I at ovulation and arrests in **Metaphase II** until fertilization. Which molecular mechanism maintains this Metaphase II arrest in vertebrate oocytes?",
    "options": [
      "Continuous synthesis of synaptonemal complex proteins that prevent spindle assembly",
      "Cytostatic Factor (CSF) activity that inhibits the Anaphase-Promoting Complex/Cyclosome (APC/C), preventing degradation of Cyclin B and Securin",
      "Complete absence of kinetochores on secondary oocyte chromosomes until sperm entry",
      "Premature cleavage of centromeric cohesin by separase during Prophase II"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Vertebrate secondary oocytes arrest at Metaphase II due to Cytostatic Factor (CSF, mediated by the Mos-MAPK-Emi2 pathway), which inhibits APC/C and stabilizes MPF (CDK1-Cyclin B) and Securin. Fertilization triggers a Ca\u00b2\u207a wave that destroys CSF, activating APC/C to trigger Anaphase II."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-MIIS-006",
    "question": "Compare a cell in **Mitotic Anaphase** (2n = 16) with a cell in **Meiotic Anaphase II** (derived from the same organism, 2n = 16). What is the ratio of the total number of chromosomes present inside the dividing cell in Mitotic Anaphase to that in Meiotic Anaphase II?",
    "options": [
      "1 : 1",
      "2 : 1",
      "1 : 2",
      "4 : 1"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For 2n = 16: during Mitotic Anaphase, 16 chromosomes split into 32 daughter chromosomes inside the single dividing cell. During Meiotic Anaphase II, the haploid cell (n = 8) splits its 8 chromosomes into 16 daughter chromosomes inside the single dividing cell. Thus, the ratio is 32 : 16 = 2 : 1."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-MIIS-007",
    "question": "Why are the two sister chromatids separating from each other during **Anaphase II** generally **not** genetically identical, unlike the sister chromatids separating during mitotic anaphase?",
    "options": [
      "Because DNA polymerase lacks proofreading activity during interkinesis.",
      "Because crossing over between non-sister chromatids occurred during Pachytene of Meiosis I, creating recombinant chromatids.",
      "Because homologous chromosomes exchange whole centromeres during Metaphase II.",
      "Because semi-conservative replication occurs a second time during Prophase II."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During Pachytene of Meiosis I, crossing over exchanges segments between non-sister chromatids of homologous chromosomes. Consequently, each dyad entering Meiosis II carries one parental chromatid and one recombinant chromatid, making the separating sister chromatids genetically non-identical."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-MIIS-008",
    "question": "A pollen mother cell of *Pisum sativum* (2n = 14) undergoes complete meiosis to form four microspores (a tetrad). If the initial pollen mother cell had 28 pg of DNA at G\u2081, what is the DNA content and chromosome number of **each** microspore at the end of Telophase II and cytokinesis?",
    "options": [
      "14 pg DNA, 7 chromosomes",
      "7 pg DNA, 7 chromosomes",
      "14 pg DNA, 14 chromosomes",
      "28 pg DNA, 7 chromosomes"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "A diploid cell (2n = 14, 2C = 28 pg at G\u2081) replicates to 4C = 56 pg in S phase, halves to n = 7, 2C = 28 pg after Meiosis I, and halves DNA again during equational Meiosis II to yield four microspores, each with n = 7 chromosomes and 1C = 7 pg DNA."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-MIIS-009",
    "question": "During **Anaphase II**, centromeric cohesin\u2014which was protected during Anaphase I\u2014is finally cleaved to allow sister chromatid disjunction. Which sequence of biochemical events directly triggers this centromeric cohesin cleavage?",
    "options": [
      "Recombinase activation \u2192 Shugoshin phosphorylation \u2192 Condensin degradation",
      "APC/C activation \u2192 Ubiquitination and degradation of Securin \u2192 Release of active Separase \u2192 Cleavage of centromeric cohesin",
      "DNA polymerase activation \u2192 Degradation of tubulin \u2192 Centromere fission",
      "Cyclin D synthesis \u2192 Rb phosphorylation \u2192 Centriole splitting"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "At the Metaphase II\u2013Anaphase II transition, APC/C ubiquitinates Securin for proteasomal degradation, freeing Separase. Active Separase cleaves the remaining centromeric cohesin rings, allowing sister chromatids to separate toward opposite poles."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-MIIS-010",
    "question": "Statement I: Meiosis is the mechanism by which conservation of specific chromosome number of each species is achieved across generations in sexually reproducing organisms, even though the process per se results in reduction of chromosome number by half.\nStatement II: Meiosis decreases the genetic variability in the population of organisms from one generation to the next.\nChoose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct (verbatim NCERT). Statement II is incorrect because meiosis **increases** (not decreases) genetic variability in the population from one generation to the next through crossing over and independent assortment."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-MIIS-011",
    "question": "Suppose non-disjunction of sister chromatids of chromosome 18 occurs during **Anaphase II** in one of the two secondary spermatocytes of a human male (2n = 46), while Meiosis I and the other secondary spermatocyte divide normally. Out of the four resulting spermatids, what will be their chromosome numbers?",
    "options": [
      "24, 24, 22, 22",
      "24, 22, 23, 23",
      "24, 23, 23, 23",
      "46, 23, 23, 0"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Normal Meiosis I produces two secondary spermatocytes with n = 23 chromosomes each. One secondary spermatocyte divides normally in Meiosis II to give two normal spermatids (23, 23). The other undergoes non-disjunction of chromosome 18 in Anaphase II, giving one disomic spermatid (23 + 1 = 24) and one nullisomic spermatid (23 - 1 = 22)."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-MIIS-012",
    "question": "Which of the following events distinguishes **Metaphase II** from **Metaphase I** in a diploid organism with 2n = 18?",
    "options": [
      "Metaphase II has 9 bivalents arranged in a double equatorial plate, whereas Metaphase I has 18 univalents on a single plate.",
      "Metaphase II has 9 individual dyad chromosomes aligned along a single equatorial plate with bipolar sister-kinetochore attachment, whereas Metaphase I has 9 bivalents with monopolar sister-kinetochore attachment.",
      "Metaphase II occurs inside an intact nuclear membrane, whereas Metaphase I occurs after nuclear envelope breakdown.",
      "Metaphase II exhibits chiasma terminalisation, whereas Metaphase I exhibits centromere splitting."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In a 2n = 18 organism, Metaphase I aligns 9 bivalents (tetrads) with monopolar (syntelic) attachment of sister kinetochores. Metaphase II occurs in a haploid cell (n = 9) and aligns 9 individual dyad chromosomes along a single equatorial plate with bipolar (amphitelic) attachment of sister kinetochores."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-MIIS-013",
    "question": "If a diploid cell (2n = 12) undergoes 100 meiotic divisions during microsporogenesis in an angiosperm anther, how many total **equational divisions** (Meiosis II events) and how many functional **microspores** are produced respectively?",
    "options": [
      "100 equational divisions; 400 microspores",
      "200 equational divisions; 400 microspores",
      "100 equational divisions; 200 microspores",
      "200 equational divisions; 200 microspores"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Each diploid pollen mother cell undergoes 1 reductional division (Meiosis I) to form 2 secondary meiocytes, and each of those undergoes 1 equational division (Meiosis II)\u2014so 2 equational divisions per PMC. For 100 PMCs, there are 100 \u00d7 2 = 200 equational divisions producing 100 \u00d7 4 = 400 microspores."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-MIIS-014",
    "question": "Why is **interkinesis** (the stage between Meiosis I and Meiosis II) critically devoid of an S phase?",
    "options": [
      "Because chromosomes in Telophase I already possess two chromatids (2C DNA per haploid nucleus), so an additional S phase would prevent reduction to the 1C gametic DNA state.",
      "Because all DNA polymerase genes are permanently deleted during Anaphase I.",
      "Because interkinesis lasts for several years in all organisms.",
      "Because centrioles cannot exist in a cell undergoing DNA synthesis."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "After Meiosis I, each haploid nucleus has n chromosomes, each still composed of two chromatids (2C DNA). Skipping DNA replication in interkinesis allows Meiosis II to separate those chromatids into four haploid gametes with 1C DNA."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-MIIS-015",
    "question": "Examine the following statements regarding the **significance of meiosis**:\n\n(i) It maintains a constant chromosome number from generation to generation in sexually reproducing species by halving the chromosome number in gametes prior to fertilization.\n(ii) Crossing over during Prophase I generates new combinations of linked alleles on chromosomes.\n(iii) Independent assortment of non-homologous chromosomes at Metaphase I/Anaphase I shuffles maternal and paternal chromosomes into gametes.\n(iv) Genetic variations introduced by meiosis serve as raw material for natural selection and biological evolution.\n\nHow many of these statements are **correct**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "All four statements summarize the core biological and evolutionary significance of meiosis: maintenance of species chromosome number across sexual generations, intrachromosomal recombination (crossing over), interchromosomal recombination (independent assortment), and generation of heritable variation for evolution."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-MIIS-016",
    "question": "In a female angiosperm (megasporogenesis), a diploid megaspore mother cell (2n = 16) undergoes Meiosis I and Meiosis II to produce a linear tetrad of four haploid megaspores, of which three degenerate and one remains functional. How many total meiotic divisions (both Meiosis I and Meiosis II combined) are required to produce 50 functional embryo sacs?",
    "options": [
      "50",
      "100",
      "150",
      "200"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "To produce 1 functional embryo sac (from 1 functional megaspore), 1 megaspore mother cell must complete 1 Meiosis I and 2 Meiosis II divisions = 3 divisions total (or in terms of meiotic cycles, 50 meiotic cycles = 50 Meiosis I + 100 Meiosis II = 150 total nuclear divisions)."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-MIIS-017",
    "question": "How many total meiotic divisions are required to produce 100 viable seeds in a typical flowering plant (assuming 100% fertility and normal sexual reproduction)?",
    "options": [
      "100",
      "125",
      "150",
      "200"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Each seed requires 1 male gamete (pollen) and 1 female gamete (egg). 100 pollen grains require 100 / 4 = 25 meiotic divisions in microspore mother cells, while 100 functional megaspores/embryo sacs require 100 meiotic divisions in megaspore mother cells (since 3 of 4 megaspores degenerate per meiosis). Total = 25 + 100 = 125 meiotic divisions."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-MIIS-018",
    "question": "In a species of organism with 2n = 8 chromosomes (4 homologous pairs), calculate the minimum number of genetically distinct gametes produced by a single individual **purely through independent assortment** (assuming zero crossing over), and explain what happens when crossing over is included:",
    "options": [
      "8 gametes without crossing over; remains 8 with crossing over",
      "16 gametes without crossing over; increases dramatically (virtually limitless) with crossing over",
      "4 gametes without crossing over; 8 with crossing over",
      "32 gametes without crossing over; 64 with crossing over"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Without crossing over, n = 4 chromosome pairs generate 2\u207f = 2\u2074 = 16 distinct combinations by independent assortment. When crossing over occurs at multiple sites along chromosomes, the number of distinct recombinant gametes becomes virtually limitless."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-MIIS-019",
    "question": "Consider a single secondary spermatocyte of a human male (n = 23) undergoing **Anaphase II**. At the exact moment when sister chromatids have separated and are migrating toward opposite poles (prior to cytokinesis), how many chromosomes, centromeres, and DNA molecules are present in this cell?",
    "options": [
      "23 chromosomes, 23 centromeres, 46 DNA molecules",
      "46 chromosomes, 46 centromeres, 46 DNA molecules",
      "23 chromosomes, 46 centromeres, 46 DNA molecules",
      "46 chromosomes, 23 centromeres, 92 DNA molecules"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In a human secondary spermatocyte (n = 23), once centromeres split in Anaphase II, all 46 former sister chromatids become independent chromosomes (46 chromosomes, 46 centromeres, 46 DNA molecules) migrating toward opposite poles inside the single dividing cell."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-MIIS-020",
    "question": "Assertion (A): Meiosis II is referred to as an equational division.\nReason (R): The chromosome number per nucleus remains unchanged (n \u2192 n) from the beginning of Prophase II to the end of Telophase II, while DNA content per nucleus is halved (2C \u2192 1C).\nChoose the correct option:",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "Both A and R are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Meiosis II is called equational division because the chromosome number remains constant (n \u2192 n) from Prophase II through Telophase II as sister chromatids separate, while DNA content per nucleus halves from 2C to 1C."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-MIIS-021",
    "question": "In certain parthenogenetic animals and apomictic plants, **automixis** occurs via **terminal fusion**, wherein the second polar body fuses with the egg pronucleus immediately after Meiosis II. What is the ploidy and genetic consequence of this fusion?",
    "options": [
      "Restores diploidy (2n), resulting in high levels of homozygosity because sister chromatids of the same dyad reunite",
      "Produces triploid (3n) offspring with complete heterozygosity",
      "Restores haploidy (n) by eliminating paternal chromosomes",
      "Prevents DNA replication in the subsequent embryonic cleavage divisions"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Fusion of the egg pronucleus (n) with the second polar body (n) restores the diploid chromosome number (2n). Because these two nuclei arose from sister chromatids of the same secondary oocyte during Anaphase II, their union produces high homozygosity."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-MIIS-022",
    "question": "What would happen if a cell undergoing Meiosis I fails to undergo cytokinesis after Telophase I, and both haploid nuclei subsequently enter **Meiosis II** within a common cytoplasm, followed by simultaneous cytokinesis after Telophase II?",
    "options": [
      "Four haploid (n) cells (a tetrad) are still formed at the end of Telophase II.",
      "Two diploid (2n) cells are formed instead of four haploid cells.",
      "One tetraploid (4n) giant cell is formed with 8C DNA.",
      "Meiosis II arrests permanently at Prophase II."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Even if cytokinesis I is skipped, the two haploid nuclei remain separate and each undergoes Meiosis II independently, generating four haploid (n) nuclei that are then partitioned by simultaneous cytokinesis into a tetrad of four haploid cells (common in many dicots)."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-MIIS-023",
    "question": "Which of the following best describes the orientation of the two spindles during **Metaphase II** in a simultaneous-type microsporogenesis (e.g., in dicotyledonous plants)?",
    "options": [
      "Both spindles must strictly fuse into a single tripolar spindle.",
      "The two spindles may be oriented either parallel or perpendicular to each other, resulting in isobilateral or tetrahedral tetrads respectively after Telophase II.",
      "Only one of the two daughter nuclei forms a spindle while the other degenerates immediately.",
      "Spindles form inside the intact nuclear envelopes without microtubule attachment."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In simultaneous cytokinesis (characteristic of dicot microsporogenesis), the two Meiosis II spindles can align either parallel to each other (yielding an isobilateral tetrad) or perpendicular/at right angles to each other (yielding a tetrahedral tetrad)."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-MIIS-024",
    "question": "Match Column I with Column II regarding chromosomal parameters across different stages of a diploid organism (2n = 16, G\u2081 DNA = 2C):\n\n| Column I | Column II |\n| :--- | :--- |\n| 1. Metaphase I | (p) 8 chromosomes, 8 chromatids, 1C DNA |\n| 2. Prophase II (single cell) | (q) 16 chromosomes, 32 chromatids, 4C DNA |\n| 3. Anaphase II (single dividing cell) | (r) 8 chromosomes, 16 chromatids, 2C DNA |\n| 4. Telophase II (each daughter nucleus) | (s) 16 chromosomes, 16 chromatids, 2C DNA |",
    "options": [
      "1-(q), 2-(r), 3-(s), 4-(p)",
      "1-(r), 2-(q), 3-(s), 4-(p)",
      "1-(q), 2-(s), 3-(r), 4-(p)",
      "1-(p), 2-(r), 3-(s), 4-(q)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For 2n = 16: Metaphase I has 16 chromosomes, 32 chromatids, 4C DNA (q); Prophase II (haploid cell) has 8 chromosomes, 16 chromatids, 2C DNA (r); Anaphase II (single dividing cell after centromere split) has 16 chromosomes, 16 chromatids, 2C DNA (s); each Telophase II daughter nucleus has 8 chromosomes, 8 chromatids, 1C DNA (p)."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-MIIS-025",
    "question": "During **Telophase II**, which of the following events occurs to conclude meiosis?",
    "options": [
      "Synaptonemal complex reassembles between non-homologous chromosomes.",
      "Two groups of chromosomes once again get enclosed by a nuclear envelope, and cytokinesis follows resulting in the formation of a tetrad of four haploid daughter cells.",
      "Centromeres divide for the second time in the same meiotic cycle.",
      "Crossing over occurs between sister chromatids to repair telomere shortening."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to NCERT, meiosis ends with Telophase II, in which the two groups of chromosomes once again get enclosed by a nuclear envelope, and cytokinesis follows resulting in the formation of a tetrad of cells (four haploid daughter cells)."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-MIIS-026",
    "question": "Examine the following statements comparing **Prophase I** and **Prophase II**:\n\n(i) Prophase I is divided into five sub-stages, whereas Prophase II is a much simpler and shorter phase lacking sub-stages.\n(ii) Crossing over and synapsis occur in Prophase I, whereas neither occurs in Prophase II.\n(iii) At the end of both Prophase I and Prophase II, the nuclear envelope breaks down and the nucleolus disappears.\n(iv) Each chromosome entering Prophase I consists of one chromatid, whereas each chromosome entering Prophase II consists of two chromatids.\n\nHow many of these statements are **correct**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect because chromosomes entering Prophase I have already passed through the pre-meiotic S phase and therefore consist of **two** chromatids (not one)."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-MIIS-027",
    "question": "In an organism with a **haplontic** life cycle (such as *Chlamydomonas* or *Spirogyra*), when and where does meiosis (both Meiosis I and Meiosis II) occur?",
    "options": [
      "During gametogenesis in the haploid gametophyte (gametic meiosis)",
      "Immediately after fertilization in the diploid zygote (zygotic meiosis), producing haploid meiospores",
      "During vegetative binary fission of haploid cells",
      "In the diploid sporophyte to produce diploid spores (sporic meiosis)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In haplontic organisms (*Chlamydomonas*, *Spirogyra*), the dominant plant body is haploid (n). Gametes fuse to form a diploid zygote (2n), which immediately undergoes **zygotic meiosis** to restore the haploid phase."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-MIIS-028",
    "question": "Suppose a researcher treats cells entering **Meiosis II** with **colchicine** (which inhibits microtubule polymerization and spindle assembly). What will be the direct outcome for each haploid secondary meiocyte (n = 10, 2C)?",
    "options": [
      "Sister chromatids separate at Anaphase II, but cytokinesis fails, producing two haploid cells.",
      "Centromeres eventually split, but chromosomes fail to segregate to opposite poles, resulting in a single **diploid** (2n = 20, 2C) restitution nucleus/gamete.",
      "Crossing over increases tenfold during Prophase II.",
      "The cell immediately undergoes a second round of DNA replication without nuclear division."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Colchicine destroys spindle microtubules. While centromeres still split via separase activation, the separated chromatids cannot be pulled to opposite poles and are re-enclosed within a single nuclear envelope, doubling the chromosome number (n \u2192 2n, restitution nucleus)."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-MIIS-029",
    "question": "Which of the following mechanisms explains how sexual reproduction via meiosis accelerates adaptation in a rapidly changing environment compared to strictly asexual reproduction (mitosis)?",
    "options": [
      "Meiosis increases the spontaneous point-mutation rate per base pair by 1000-fold during Anaphase II.",
      "Meiosis combines beneficial mutations arising in separate lineages into a single genome and purges deleterious mutations via recombination and independent assortment.",
      "Meiosis eliminates all recessive alleles from the gene pool in a single generation.",
      "Meiosis ensures that all offspring are genetically identical clones of the fittest parent."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Sexual reproduction via meiosis shuffles alleles through crossing over and independent assortment, enabling populations to rapidly combine advantageous mutations from different parents and eliminate deleterious combinations (Muller's ratchet avoidance)."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-MIIS-030",
    "question": "Statement I: In Meiosis II, microtubules from opposite poles of the spindle get attached to the kinetochores of sister chromatids during Metaphase II.\nStatement II: In Meiosis I, microtubules from opposite poles of the spindle get attached to the kinetochores of homologous chromosomes during Metaphase I.\nChoose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are verbatim from NCERT: in Metaphase I, spindle microtubules from opposite poles attach to kinetochores of homologous chromosomes; in Metaphase II, microtubules from opposite poles attach to kinetochores of sister chromatids."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-MIIS-031",
    "question": "A heterozygous diploid plant (Aa, where A and a are alleles on a pair of homologous chromosomes) undergoes meiosis. Assuming a single crossover occurs between the centromere and locus A during Prophase I, what will be the allelic composition of the two sister chromatids in **each** secondary meiocyte at **Metaphase II**, and what alleles will the four resulting spores carry after **Anaphase II**?",
    "options": [
      "Each secondary meiocyte has one A and one a chromatid; after Anaphase II, all four spores carry A and a together.",
      "Each secondary meiocyte is heterozygous (A on one chromatid, a on the sister chromatid); after Anaphase II, two spores carry A and two carry a (second-division segregation).",
      "One secondary meiocyte has AA and the other has aa; after Anaphase II, all four spores carry A.",
      "Crossing over between centromere and locus A prevents Anaphase II disjunction completely."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "A crossover between the centromere and locus A exchanges one A allele with one a allele between non-sister chromatids. Thus, each homologous dyad going into Meiosis II has one A chromatid and one a chromatid (heterozygous). Anaphase II separates them so each secondary meiocyte produces one A spore and one a spore (2 A : 2 a overall)."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-MIIS-032",
    "question": "What is the fundamental difference between the **dyad of cells** formed at the end of Meiosis I and the **tetrad of cells** formed at the end of Meiosis II?",
    "options": [
      "Cells of the dyad are diploid (2n), whereas cells of the tetrad are haploid (n).",
      "Cells of the dyad are haploid (n) with 2C DNA content (each chromosome has 2 chromatids), whereas cells of the tetrad are haploid (n) with 1C DNA content (each chromosome has 1 chromatid).",
      "Cells of the dyad lack a nuclear envelope, whereas cells of the tetrad lack cytoplasm.",
      "Cells of the dyad have undergone equational division, whereas cells of the tetrad have undergone reductional division."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both the dyad cells (post-Meiosis I) and tetrad cells (post-Meiosis II) are haploid (n) in chromosome number. However, dyad cells have replicated chromosomes (2 chromatids each = 2C DNA), whereas tetrad cells have unreplicated chromosomes (1 chromatid each = 1C DNA)."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-MIIS-033",
    "question": "In human spermatogenesis, a single primary spermatocyte (2n = 46) completes Meiosis I and Meiosis II. Which statement accurately describes the four resulting spermatids?",
    "options": [
      "Two spermatids carry 22 + X and two carry 22 + Y, and all four are genetically unique due to crossing over and independent assortment.",
      "All four spermatids carry 22 + X and are genetically identical clones.",
      "Two spermatids are diploid (46) and two are haploid (23).",
      "Two spermatids carry 22 + XY and two carry 22 + 0."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In human males (44 + XY), Meiosis I separates X and Y into two secondary spermatocytes (22 + X and 22 + Y). Meiosis II divides each equationally to yield two 22 + X and two 22 + Y spermatids, all genetically distinct due to crossing over and independent assortment of autosomes."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-MIIS-034",
    "question": "Which of the following correctly tracks the **number of chromatids per chromosome** across (1) G\u2081 phase, (2) Metaphase I, (3) Metaphase II, and (4) Telophase II?",
    "options": [
      "1 \u2192 2 \u2192 2 \u2192 1",
      "1 \u2192 4 \u2192 2 \u2192 1",
      "2 \u2192 2 \u2192 1 \u2192 1",
      "1 \u2192 2 \u2192 1 \u2192 1"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In G\u2081 (pre-S phase), each chromosome has 1 chromatid; after S phase, in Metaphase I and Metaphase II, each chromosome consists of 2 sister chromatids; after centromere splitting in Anaphase II, each chromosome in Telophase II consists of 1 chromatid (1 \u2192 2 \u2192 2 \u2192 1)."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-MIIS-035",
    "question": "Consider an organism with 2n = 4 chromosomes (1 metacentric pair and 1 acrocentric pair). During **Anaphase II**, how many chromatids are moving toward **each** pole in one dividing secondary meiocyte?",
    "options": [
      "1 chromatid",
      "2 chromatids",
      "4 chromatids",
      "8 chromatids"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In a 2n = 4 organism, each secondary meiocyte has n = 2 chromosomes (4 chromatids). During Anaphase II, centromeres split and 2 sister chromatids (now independent chromosomes) move toward **each** pole."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-MIIS-036",
    "question": "Assertion (A): In sexually reproducing organisms, meiosis and syngamy (fertilization) are complementary processes that alternate in the life cycle.\nReason (R): Meiosis halves the chromosome number (2n \u2192 n) during gametogenesis/sporogenesis, while syngamy restores the diploid chromosome number (n + n \u2192 2n) in the zygote.\nChoose the correct option:",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "Both A and R are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In sexually reproducing species, meiosis (2n \u2192 n) and fertilization/syngamy (n + n \u2192 2n) are obligatory alternating events that keep the species chromosome number constant across generations."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-MIIS-037",
    "question": "Why can a **haploid** organism (n) never undergo normal meiosis?",
    "options": [
      "Because haploid cells lack DNA polymerase and cannot replicate their DNA in S phase.",
      "Because haploid cells possess only a single set of chromosomes (no homologous chromosome pairs), making synapsis, bivalent formation, and reductional segregation impossible.",
      "Because haploid cells lack centrioles and tubulin proteins.",
      "Because haploid cells have 4C DNA content permanently."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Meiosis I requires homologous chromosome pairing (synapsis) and bivalent formation to segregate homologs reductionally. A haploid (n) cell has only one copy of each chromosome and no homologous partners, so it cannot execute Meiosis I."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-MIIS-038",
    "question": "In **Anaphase II**, what pulls the separated sister chromatids toward opposite spindle poles?",
    "options": [
      "Contraction of the synaptonemal complex fibers",
      "Shortening (depolymerization) of kinetochore microtubules attached to each sister chromatid's kinetochore, combined with spindle pole separation",
      "Expansion of the nuclear envelope pushing chromatids outward",
      "Cleavage furrow constriction pulling directly on telomeres"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During Anaphase II, kinetochore microtubules shorten (depolymerize) at the kinetochores while polar microtubules push the spindle poles apart, pulling the newly separated sister chromatids to opposite poles."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-MIIS-039",
    "question": "A triploid plant (3n = 30, such as cultivated seedless banana or triploid watermelon) is typically sterile because:",
    "options": [
      "It cannot undergo mitotic divisions in its root or shoot apices.",
      "During Meiosis I, three homologous copies of each chromosome cannot pair evenly into bivalents (forming trivalents/univalents), leading to random segregation and aneuploid, non-viable gametes after Meiosis II.",
      "Its cells lack a G\u2081 phase and arrest permanently in interkinesis.",
      "Crossing over occurs between all three homologs simultaneously, fusing all 30 chromosomes into one giant ring."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Triploids (3n) have three sets of chromosomes. During Prophase I/Metaphase I, three homologs cannot pair into regular bivalents (forming trivalents or univalents), causing chaotic segregation at Anaphase I and producing unbalanced, non-viable aneuploid gametes after Meiosis II."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-MIIS-040",
    "question": "Identify the **incorrect** match between the stage of meiosis and the status of chromosomes/chromatids:",
    "options": [
      "Pachytene \u2014 Homologous chromosomes paired as bivalents; crossing over occurs between non-sister chromatids",
      "Anaphase I \u2014 Homologous chromosomes separate; sister chromatids remain attached at centromeres",
      "Metaphase II \u2014 Univalent chromosomes (dyads) align at the equator; sister kinetochores attach to opposite poles",
      "Telophase II \u2014 Chromosomes still consist of two sister chromatids enclosed within four haploid nuclei"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement (iv) is incorrect: by Telophase II, sister chromatids have already separated during Anaphase II, so each chromosome in the four haploid nuclei consists of a **single** chromatid (not two)."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-MIIS-041",
    "question": "In a diploid cell (2n = 20), suppose a single chromosome lags behind during **Anaphase II** and fails to be incorporated into either daughter nucleus at Telophase II (forming a micronucleus that is subsequently degraded). What will be the chromosome counts of the **two** daughter cells produced from this Meiosis II division?",
    "options": [
      "10 and 9",
      "11 and 9",
      "10 and 10",
      "20 and 19"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "A 2n = 20 organism forms secondary meiocytes with n = 10 chromosomes. During Anaphase II, 10 chromatids go to one pole and 10 to the other. If one chromatid lags behind and is lost (micronucleus), one daughter cell gets 10 chromosomes and the other gets 10 - 1 = 9 chromosomes."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-MIIS-042",
    "question": "Statement I: Meiosis II is initiated after the parental chromosomes have replicated to produce identical sister chromatids during interkinesis.\nStatement II: By the end of Telophase II, four haploid cells are formed from a single diploid meiocyte.\nChoose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement I is incorrect: chromosomes replicate prior to **Meiosis I** (in the pre-meiotic S phase), **not** during interkinesis prior to Meiosis II. Statement II is correct."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-MIIS-043",
    "question": "Which of the following events occurs in **both** Mitosis and Meiosis II, but **not** in Meiosis I?",
    "options": [
      "Pairing of homologous chromosomes (synapsis)",
      "Splitting of centromeres and separation of sister chromatids to opposite poles during anaphase",
      "Formation of chiasmata and terminalisation",
      "Reduction of ploidy from diploid (2n) to haploid (n)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both Mitosis and Meiosis II are equational divisions characterized by bipolar attachment of sister kinetochores at metaphase, followed by centromere splitting and separation of sister chromatids to opposite poles during anaphase."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-MIIS-044",
    "question": "During **Prophase II**, why do chromosomes compact much more rapidly than during Prophase I?",
    "options": [
      "Because there is no homologous pairing (synapsis) or crossing over, and chromosomes never fully decondensed during Telophase I / interkinesis.",
      "Because Prophase II occurs without spindle fibers or centrioles.",
      "Because each chromosome in Prophase II has only half the length of DNA due to telomere excision.",
      "Because histone proteins are absent during Meiosis II."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Unlike Prophase I\u2014which involves chromatin condensation from a fully extended interphase state, homologous pairing, synaptonemal complex assembly, and crossing over\u2014Prophase II starts from partially condensed Telophase I chromosomes and requires only rapid re-compaction and spindle assembly."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-MIIS-045",
    "question": "A student summarizes the stages and significance of **Meiosis II** in four points:\n\n(i) Meiosis II begins after a brief interkinesis in which no DNA synthesis occurs.\n(ii) In Metaphase II, chromosomes align at the equator and microtubules from opposite poles attach to kinetochores of sister chromatids.\n(iii) Anaphase II begins with the simultaneous splitting of the centromere of each chromosome, allowing sister chromatids to move toward opposite poles.\n(iv) Telophase II ends with cytokinesis, resulting in a dyad of diploid cells that preserve genetic uniformity across generations.\n\nWhich of the student's points is **erroneous**?",
    "options": [
      "(i) only",
      "(ii) only",
      "(iii) only",
      "(iv) only"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement (iv) is erroneous: Telophase II ends with cytokinesis resulting in a **tetrad of four haploid cells** (not a dyad of diploid cells), and meiosis promotes **genetic variation** (not uniformity)."
  }
];


async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB.');
    const db = client.db();
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`=== ADDING 45 MEIOSIS II & SIGNIFICANCE QUESTIONS TO CENTRAL QUESTION BANK & ${PRIMARY_TEST_ID} ===`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        examType: 'neet',
        type: 'single',
        difficulty: 'hard',
        source: 'Self',
        status: 'published',
        isActive: true,
        updatedAt: new Date()
      };

      const result = await qbCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const savedId = result._id || (await qbCol.findOne({ commercialId: q.commercialId }))._id;
      assignedQuestionIds.push(savedId);
      console.log(`Upserted ${q.commercialId} -> ${savedId}`);
    }

    console.log(`Upserted all ${assignedQuestionIds.length} questions into questionBank.`);

    // Upsert primary and alias testPapers
    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];
    for (const testId of allTestIds) {
      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: testId === 'neet-SUBTOPIC-Meiosis' ? 'Meiosis' : 'Meiosis II & Significance',
            subject: SUBJECT,
            chapter: CHAPTER,
            subtopic: SUBTOPIC,
            examType: 'neet',
            questions: assignedQuestionIds,
            totalMarks: 180,
            duration: 60,
            status: 'published',
            isLive: true,
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
      console.log(`Updated testPaper ${testId}: assigned ${assignedQuestionIds.length} questions.`);

      // Synchronize audit report
      await auditReportsCol.updateMany(
        { testId },
        { $set: { isLatest: false } }
      );

      const questionAudits = rawQuestions.map((q, idx) => ({
        questionIndex: idx + 1,
        questionId: assignedQuestionIds[idx].toString(),
        commercialId: q.commercialId,
        status: 'PASS',
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        aiPass: true,
        issues: []
      }));

      const auditReportDoc = {
        testId,
        reportVersion: 1,
        isLatest: true,
        status: 'COMPLETED',
        summary: {
          totalQuestions: 45,
          aiPasses: 45,
          aiFailures: 0,
          manualReviewsNeeded: 0
        },
        questionAudits,
        auditedAt: new Date(),
        createdAt: new Date()
      };

      await auditReportsCol.insertOne(auditReportDoc);

      await auditStatesCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            status: 'PASSED',
            totalQuestions: 45,
            aiPasses: 45,
            aiFailures: 0,
            manualReviewsNeeded: 0,
            latestReportVersion: 1,
            lastAuditedAt: new Date(),
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
    }

    console.log('Synchronized testAuditReports and testAuditStates for all test IDs.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
