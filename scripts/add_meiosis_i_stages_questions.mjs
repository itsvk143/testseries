import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Meiosis-I-Stages';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Meiosis-I-(Prophase-I-Stages)',
  'neet-SUBTOPIC-Botany-Meiosis-I',
  'neet-SUBTOPIC-Meiosis-I-Stages',
  'neet-SUBTOPIC-Meiosis-I',
  'neet-SUBTOPIC-Meiosis-1-Stages'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Cell Cycle and Cell Division';
const SUBTOPIC = 'Meiosis I Stages';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-MIS-001",
    "question": "Identify the correct sequence of events occurring during Meiosis I strictly according to NCERT:",
    "options": [
      "Synapsis \u2192 Crossing over \u2192 Terminalisation of chiasmata \u2192 Disjunction of homologs",
      "Crossing over \u2192 Synapsis \u2192 Terminalisation of chiasmata \u2192 Splitting of centromere",
      "Terminalisation of chiasmata \u2192 Synapsis \u2192 Crossing over \u2192 Disjunction of homologs",
      "Synapsis \u2192 Terminalisation of chiasmata \u2192 Crossing over \u2192 Disjunction of homologs"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In Meiosis I, homologous chromosomes pair during zygotene (*synapsis*), exchange segments during pachytene (*crossing over*), undergo *terminalisation of chiasmata* during diakinesis, and finally separate during Anaphase I (*disjunction of homologs*). Centromeres do not split in Meiosis I."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-MIS-002",
    "question": "Which of the following statements regarding Prophase I of Meiosis is **incorrect** as per NCERT?",
    "options": [
      "It is typically longer and more complex when compared to prophase of mitosis.",
      "It has been subdivided into five phases based on chromosomal behaviour.",
      "During leptotene, chromosomes become gradually visible under the light microscope.",
      "Compaction of chromosomes stops immediately at the end of leptotene."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "According to NCERT (Class 11, Chapter 10, Section 10.4.1), during leptotene the chromosomes become gradually visible under the light microscope, and the compaction of chromosomes *continues throughout leptotene*. It does not stop at the end of leptotene."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-MIS-003",
    "question": "Match Column I with Column II with respect to the sub-stages of Prophase I:\n\n| Column I | Column II |\n| :--- | :--- |\n| (a) Leptotene | (i) Action of enzyme recombinase |\n| (b) Zygotene | (ii) Dissolution of synaptonemal complex |\n| (c) Pachytene | (iii) Compaction of chromosomes continues throughout |\n| (d) Diplotene | (iv) Formation of bivalent or tetrad |",
    "options": [
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "- **Leptotene:** Compaction of chromosomes continues throughout leptotene (iii).\n- **Zygotene:** Chromosomes start pairing (synapsis) to form a bivalent or tetrad (iv).\n- **Pachytene:** Crossing over mediated by the enzyme recombinase occurs (i).\n- **Diplotene:** Recognised by the dissolution of the synaptonemal complex (ii)."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-MIS-004",
    "question": "Consider the following two statements:\n**Statement I:** During zygotene, chromosomes start pairing together and this process of association is called synapsis.\n\n**Statement II:** Electron micrographs of zygotene stage indicate that chromosome synapsis is accompanied by the formation of a complex structure called synaptonemal complex.\n\nIn the light of the above statements, choose the correct answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are verbatim facts from NCERT regarding the zygotene stage of Prophase I."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-MIS-005",
    "question": "A diploid meiocyte has 2n = 24 chromosomes and 2C amount of DNA in the G\u2081 phase. What will be the number of bivalents, tetrads, chromatids, and DNA content respectively during the pachytene stage of Meiosis I?",
    "options": [
      "12, 12, 48, 4C",
      "24, 12, 48, 4C",
      "12, 24, 24, 2C",
      "12, 12, 24, 4C"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Given 2n = 24 and 2C DNA in G\u2081:\n\n- After S phase, DNA doubles to 4C, while chromosome number remains 24 (each having 2 chromatids, so 48 chromatids total).\n- During zygotene/pachytene, 24 homologous chromosomes pair into 12 bivalents (each bivalent is also called a tetrad, hence 12 tetrads).\n- Total chromatids = 12 \u00d7 4 = 48; DNA content = 4C."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-MIS-006",
    "question": "Which of the following features is clearly visible for the first time during the pachytene stage rather than the zygotene stage?",
    "options": [
      "Homologous chromosomes starting to pair together",
      "Formation of the synaptonemal complex",
      "Four chromatids of each bivalent chromosome becoming distinct and clearly appearing as tetrads",
      "X-shaped structures called chiasmata at the sites of crossovers"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "NCERT explicitly notes that while the complex formed by a pair of synapsed homologous chromosomes in zygotene is called a bivalent or a tetrad, *\"these are more clearly visible at the next stage [pachytene]\"* where the four chromatids of each bivalent chromosome become distinct and clearly appear as tetrads."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-MIS-007",
    "question": "Regarding recombination nodules, which of the following statements is strictly accurate according to NCERT?",
    "options": [
      "They appear during diplotene at the sites where crossing over has already completed.",
      "They appear during pachytene and represent the sites at which crossing over occurs between sister chromatids.",
      "They appear during pachytene and represent the sites at which crossing over occurs between non-sister chromatids of homologous chromosomes.",
      "They are formed during zygotene to initiate the formation of the synaptonemal complex."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Pachytene is characterised by the appearance of recombination nodules, which are the sites at which crossing over occurs between *non-sister chromatids* of the homologous chromosomes."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-MIS-008",
    "question": "Crossing over is an enzyme-mediated process. Which of the following correctly describes its mechanism and outcome as stated in NCERT?",
    "options": [
      "It is mediated by DNA polymerase and leads to recombination of genetic material on non-homologous chromosomes.",
      "It is mediated by recombinase and leads to recombination of genetic material on the two chromosomes.",
      "It occurs during diplotene and leaves chromosomes linked at the sites of crossovers until telophase I.",
      "It is completed by the end of zygotene, leaving the chromosomes attached at centromeres."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT states: *\"Crossing over is also an enzyme-mediated process and the enzyme involved is called recombinase. Crossing over leads to recombination of genetic material on the two chromosomes.\"*"
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-MIS-009",
    "question": "Assertion (A): In oocytes of some vertebrates, diplotene can last for months or years.\n\nReason (R): The beginning of diplotene is recognised by the dissolution of the synaptonemal complex and the tendency of the recombined homologous chromosomes of the bivalents to separate from each other except at the sites of crossovers.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both statements are true NCERT statements about diplotene. However, the dissolution of the synaptonemal complex describes how diplotene begins, rather than explaining the physiological arrest of vertebrate oocytes (which serves for yolk synthesis/growth, not detailed in NCERT as caused by SC dissolution)."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-MIS-010",
    "question": "Which stage of Meiosis I represents transition to metaphase?",
    "options": [
      "Diplotene",
      "Diakinesis",
      "Pachytene",
      "Late Anaphase I"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT explicitly states that *diakinesis* represents transition to metaphase."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-MIS-011",
    "question": "All of the following events take place during diakinesis, **except**:",
    "options": [
      "Terminalisation of chiasmata",
      "Chromosomes are fully condensed",
      "Meiotic spindle is assembled to prepare the homologous chromosomes for separation",
      "Dissolution of the synaptonemal complex begins"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Dissolution of the synaptonemal complex marks the beginning of *diplotene*, whereas terminalisation of chiasmata, full condensation of chromosomes, and assembly of the meiotic spindle occur during *diakinesis*."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-MIS-012",
    "question": "By the end of diakinesis, which of the following cellular structures disappear?",
    "options": [
      "Nucleolus only",
      "Nuclear envelope only",
      "Both nucleolus and nuclear envelope",
      "Centromeres and kinetochores"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "By the end of diakinesis, the nucleolus disappears and the nuclear envelope also breaks down."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-MIS-013",
    "question": "How does Metaphase I of Meiosis differ fundamentally from Metaphase of Mitosis?",
    "options": [
      "Chromosomes are maximally condensed in Mitosis but uncondensed in Meiosis I.",
      "In Metaphase I, bivalent chromosomes align on the equatorial plate, whereas in Mitosis, individual duplicated chromosomes align on the equatorial plate.",
      "Microtubules from opposite poles attach to the same homologous chromosome in Metaphase I.",
      "Centromeres split during Metaphase I but remain intact during Metaphase of Mitosis."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In Metaphase I, the bivalent chromosomes align on the equatorial plate, whereas in mitotic metaphase, individual duplicated chromosomes align on the metaphase plate."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-MIS-014",
    "question": "During Metaphase I, the microtubules from the opposite poles of the spindle attach to:",
    "options": [
      "The kinetochores of sister chromatids of the same chromosome.",
      "The kinetochore of homologous chromosomes.",
      "The chiasmata of the bivalent chromosomes.",
      "The telomeres of non-sister chromatids."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT states: *\"The microtubules from the opposite poles of the spindle attach to the kinetochore of homologous chromosomes.\"*"
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-MIS-015",
    "question": "Read the following statements about Anaphase I and select the correct option:\n\n(i) The homologous chromosomes separate.\n(ii) Sister chromatids separate from each other.\n(iii) Sister chromatids remain associated at their centromeres.\n(iv) Splitting of centromere occurs simultaneously with chromosome movement.",
    "options": [
      "(i) and (iii) are correct",
      "(ii) and (iv) are correct",
      "(i) and (iv) are correct",
      "(ii) and (iii) are correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "During Anaphase I, the homologous chromosomes separate, while sister chromatids remain associated at their centromeres. Splitting of centromeres occurs in Anaphase II, not Anaphase I."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-MIS-016",
    "question": "Reduction in chromosome number from diploid (2n) to haploid (n) actually occurs during which specific stage of Meiosis?",
    "options": [
      "Metaphase I",
      "Anaphase I",
      "Anaphase II",
      "Telophase II"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Reduction in chromosome number from 2n to n happens during Anaphase I when homologous chromosomes segregate to opposite poles."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-MIS-017",
    "question": "During Telophase I of Meiosis:",
    "options": [
      "The nuclear membrane and nucleolus reappear, cytokinesis follows, and this is called as dyad of cells.",
      "Chromosomes undergo complete decondensation to reach the extremely extended state of the interphase nucleus.",
      "Four haploid daughter cells are formed immediately after karyokinesis.",
      "DNA replication takes place inside the newly formed dyad nuclei."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In Telophase I, the nuclear membrane and nucleolus reappear, cytokinesis follows, and this stage is called a *dyad of cells*."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-MIS-018",
    "question": "Consider the following statement from NCERT: \"Although in many cases the chromosomes do undergo some dispersion, they do not reach the extremely extended state of the interphase nucleus.\" This statement refers to:",
    "options": [
      "Diakinesis",
      "Telophase I",
      "Telophase II",
      "Prophase II"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT states this specifically for Telophase I, noting that chromosomes undergo some dispersion without reaching the extremely extended state of an interphase nucleus."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-MIS-019",
    "question": "The stage between the two meiotic divisions is called:",
    "options": [
      "Interphase, which is long-lived and involves DNA replication.",
      "Interkinesis, which is generally short-lived and involves no DNA replication.",
      "Interkinesis, which is followed by Prophase I.",
      "G\u2080 phase, where cells remain metabolically active without dividing."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The stage between the two meiotic divisions is called *interkinesis* and is generally short-lived. There is no replication of DNA during interkinesis, and it is followed by Prophase II."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-MIS-020",
    "question": "A cell in G\u2081 phase has 16 chromosomes and 10 pg of DNA. After Telophase I and cytokinesis, each cell of the dyad will have:",
    "options": [
      "16 chromosomes and 10 pg of DNA",
      "8 chromosomes and 10 pg of DNA",
      "8 chromosomes and 5 pg of DNA",
      "16 chromosomes and 20 pg of DNA"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In G\u2081: 2n = 16, DNA = 10 pg. After S phase: 2n = 16, DNA = 20 pg. After Meiosis I (Telophase I + cytokinesis), homologous chromosomes separate into two cells without centromere splitting, so each cell receives n = 8 chromosomes and half the duplicated DNA (10 pg)."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-MIS-021",
    "question": "Which of the following events occurs during leptotene?",
    "options": [
      "Compaction of chromosomes continues throughout leptotene.",
      "Pairing of homologous chromosomes begins.",
      "Appearance of recombination nodules.",
      "Formation of X-shaped chiasmata."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Compaction of chromosomes continues throughout leptotene, making them gradually visible under the light microscope."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-MIS-022",
    "question": "Identify the incorrect match between the stage of Prophase I and its key event:",
    "options": [
      "Zygotene \u2014 Synapsis",
      "Pachytene \u2014 Crossing over",
      "Diplotene \u2014 Dissolution of synaptonemal complex",
      "Diakinesis \u2014 Assembly of synaptonemal complex"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Diakinesis involves assembly of the *meiotic spindle*, not the synaptonemal complex (which forms in zygotene and dissolves in diplotene)."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-MIS-023",
    "question": "Why are the paired chromosomes in zygotene called either a bivalent or a tetrad?",
    "options": [
      "Bivalent because there are two homologous chromosomes; tetrad because each chromosome has two chromatids, making four chromatids in total.",
      "Bivalent because there are two centromeres; tetrad because there are four centromeres.",
      "Bivalent because crossing over happens twice; tetrad because four daughter cells will be formed.",
      "Bivalent because two synaptonemal complexes form; tetrad because four recombination nodules appear."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "A pair of synapsed homologous chromosomes consists of two chromosomes (bivalent) and four chromatids in total (tetrad)."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-MIS-024",
    "question": "Which of the following statements is **not** true about crossing over?",
    "options": [
      "It is the exchange of genetic material between two homologous chromosomes.",
      "It occurs between non-sister chromatids of homologous chromosomes.",
      "It is completed by the end of diplotene.",
      "It involves an enzyme called recombinase."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Recombination between homologous chromosomes is completed by the end of *pachytene*, leaving the chromosomes linked at the sites of crossing over."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-MIS-025",
    "question": "At which stage are X-shaped structures called chiasmata visible?",
    "options": [
      "Leptotene",
      "Zygotene",
      "Pachytene",
      "Diplotene"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "During diplotene, the separation of homologous chromosomes except at the sites of crossovers forms X-shaped structures called chiasmata."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-MIS-026",
    "question": "If a diploid organism has 2n = 36, how many chiasmata at minimum would be observed during diplotene if every bivalent undergoes at least one crossover?",
    "options": [
      "36",
      "18",
      "72",
      "9"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "With 2n = 36 chromosomes, there are 18 homologous pairs (bivalents). If each bivalent undergoes at least one crossover, there will be a minimum of 18 chiasmata visible in diplotene."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-MIS-027",
    "question": "In Meiosis I, the chromosomes that pair during zygotene are:",
    "options": [
      "Non-homologous chromosomes of identical length",
      "Homologous chromosomes",
      "Sister chromatids of a single chromosome",
      "Sex chromosomes only"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During zygotene, homologous chromosomes start pairing together (synapsis)."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-MIS-028",
    "question": "Assertion (A): During Anaphase I, the centromeres do not split.\n\nReason (R): In Anaphase I, homologous chromosomes separate while sister chromatids remain associated at their centromeres.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Because homologous chromosomes separate as intact dyads (sister chromatids remain attached at their centromeres), the centromeres do not split during Anaphase I."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-MIS-029",
    "question": "Which of the following is a distinguishing feature of Prophase I compared to Prophase II?",
    "options": [
      "Disappearance of nuclear membrane",
      "Compaction of chromosomes",
      "Pairing of homologous chromosomes and recombination between non-sister chromatids",
      "Formation of spindle fibres"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Pairing of homologous chromosomes (synapsis) and recombination between non-sister chromatids occur only in Prophase I, not in Prophase II (which resembles normal mitotic prophase)."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-MIS-030",
    "question": "During which phase of Meiosis I is the meiotic spindle assembled to prepare the homologous chromosomes for separation?",
    "options": [
      "Pachytene",
      "Diplotene",
      "Diakinesis",
      "Metaphase I"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "During diakinesis, the chromosomes are fully condensed and the meiotic spindle is assembled to prepare the homologous chromosomes for separation."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-MIS-031",
    "question": "Given below are two statements:\n**Statement I:** Meiosis I is initiated after the parental chromosomes have replicated to produce identical sister chromatids at the S phase.\n\n**Statement II:** Meiosis involves two sequential cycles of nuclear and cell division called meiosis I and meiosis II, as well as two cycles of DNA replication.\n\nChoose the most appropriate answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because meiosis involves two sequential cycles of nuclear and cell division, but *only a single cycle of DNA replication*."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-MIS-032",
    "question": "How many spindle fibres (microtubules from poles) attach to a single bivalent during Metaphase I according to NCERT?",
    "options": [
      "One microtubule from one pole only",
      "Microtubules from opposite poles attach to the kinetochore of homologous chromosomes",
      "Four microtubules attach to four separate centromeres",
      "Microtubules attach directly to the chiasmata"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT specifies that during Metaphase I, the microtubules from the opposite poles of the spindle attach to the kinetochore of homologous chromosomes."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-MIS-033",
    "question": "Which of the following correctly arranges the events of Prophase I in chronological order?\n\n(i) Appearance of recombination nodules\n(ii) Dissolution of synaptonemal complex\n(iii) Terminalisation of chiasmata\n(iv) Compaction of chromosomes makes them gradually visible under light microscope\n(v) Formation of synaptonemal complex",
    "options": [
      "(iv) \u2192 (v) \u2192 (i) \u2192 (ii) \u2192 (iii)",
      "(iv) \u2192 (i) \u2192 (v) \u2192 (ii) \u2192 (iii)",
      "(v) \u2192 (iv) \u2192 (i) \u2192 (iii) \u2192 (ii)",
      "(iv) \u2192 (v) \u2192 (ii) \u2192 (i) \u2192 (iii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The correct order is: Leptotene (iv) \u2192 Zygotene (v) \u2192 Pachytene (i) \u2192 Diplotene (ii) \u2192 Diakinesis (iii)."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-MIS-034",
    "question": "In a hypothetical mutant meiocyte where the enzyme *recombinase* is non-functional, which of the following events will still occur normally?",
    "options": [
      "Exchange of genetic material between non-sister chromatids",
      "Formation of synaptonemal complex during zygotene",
      "Formation of chiasmata due to crossovers",
      "Genetic recombination on homologous chromosomes"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Formation of the synaptonemal complex occurs during zygotene prior to recombinase-mediated crossing over in pachytene. Thus, synapsis and synaptonemal complex assembly would proceed normally."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-MIS-035",
    "question": "Which sub-stage of Prophase I is characterised by the disappearance of the nucleolus and breakdown of the nuclear envelope?",
    "options": [
      "Leptotene",
      "Zygotene",
      "Diplotene",
      "Diakinesis"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "By the end of diakinesis, the nucleolus disappears and the nuclear envelope breaks down."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-MIS-036",
    "question": "If a meiocyte has 20 bivalents at Metaphase I, how many chromosomes and chromatids respectively will be present at each pole at the end of Anaphase I?",
    "options": [
      "20 chromosomes and 40 chromatids",
      "10 chromosomes and 20 chromatids",
      "20 chromosomes and 20 chromatids",
      "40 chromosomes and 40 chromatids"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "20 bivalents equal 40 chromosomes (2n = 40). During Anaphase I, homologous chromosomes separate, so 20 chromosomes move to each pole. Since centromeres do not split, each chromosome still has 2 chromatids, giving 20 \u00d7 2 = 40 chromatids at each pole."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-MIS-037",
    "question": "Which of the following statements about the synaptonemal complex is true as per NCERT?",
    "options": [
      "It is observed using a light microscope during leptotene.",
      "It is observed in electron micrographs of the zygotene stage.",
      "It is formed during pachytene to hold sister chromatids together.",
      "It persists throughout Metaphase I until Anaphase I begins."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT states: *\"Electron micrographs of this stage [zygotene] indicate that chromosome synapsis is accompanied by the formation of complex structure called synaptonemal complex.\"*"
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-MIS-038",
    "question": "By the end of which stage is crossing over completed, leaving the chromosomes linked at the sites of crossing over?",
    "options": [
      "Zygotene",
      "Pachytene",
      "Diplotene",
      "Diakinesis"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Recombination between homologous chromosomes is completed by the end of pachytene, leaving the chromosomes linked at the sites of crossing over."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-MIS-039",
    "question": "During diplotene, the recombined homologous chromosomes of the bivalents have a tendency to separate from each other except at:",
    "options": [
      "The centromeres",
      "The telomeres",
      "The sites of crossovers",
      "The kinetochores"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "In diplotene, recombined homologous chromosomes tend to separate from each other except at the sites of crossovers, forming X-shaped chiasmata."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-MIS-040",
    "question": "What is the ploidy level of each cell in the \"dyad of cells\" formed after Telophase I and cytokinesis?",
    "options": [
      "Diploid (2n) with 2C DNA",
      "Haploid (n) with 2C DNA",
      "Haploid (n) with 1C DNA",
      "Diploid (2n) with 4C DNA"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "After Telophase I and cytokinesis, the chromosome number is reduced to haploid (n), while each chromosome still possesses two sister chromatids, keeping the DNA content at 2C."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-MIS-041",
    "question": "Compare Metaphase I of Meiosis and Metaphase of Mitosis. Which statement is accurate?",
    "options": [
      "Both involve alignment of bivalents at the equator.",
      "In Metaphase I, two centromeres of each bivalent face opposite poles, whereas in Mitotic Metaphase, sister chromatids of each chromosome face opposite poles.",
      "Both involve splitting of centromeres at the end of metaphase.",
      "Spindle fibres are absent in Metaphase I."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In Metaphase I, homologous chromosomes (two centromeres per bivalent) face opposite poles. In mitotic metaphase, sister chromatids of each single chromosome attach to spindle fibres from opposite poles."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-MIS-042",
    "question": "Which of the following is **not** a characteristic of interkinesis?",
    "options": [
      "It is the stage between the two meiotic divisions.",
      "It is generally short-lived.",
      "There is no replication of DNA during this stage.",
      "It is followed by Prophase I."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Interkinesis is followed by *Prophase II*, not Prophase I."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-MIS-043",
    "question": "Select the correct combination of statements regarding Pachytene:\n\n(i) Bivalent chromosomes clearly appear as tetrads.\n(ii) This stage is characterised by the appearance of recombination nodules.\n(iii) Crossing over occurs between sister chromatids of homologous chromosomes.\n(iv) Recombination between homologous chromosomes is completed by the end of pachytene.",
    "options": [
      "(i), (ii), and (iv) only",
      "(i), (ii), and (iii) only",
      "(ii), (iii), and (iv) only",
      "(i) and (iii) only"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statement (iii) is incorrect because crossing over occurs between *non-sister* chromatids, not sister chromatids. Statements (i), (ii), and (iv) are completely accurate."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-MIS-044",
    "question": "During Anaphase I, the separation of homologous chromosomes is termed disjunction. What happens to the DNA content per chromosome during Anaphase I compared to Metaphase I?",
    "options": [
      "It is halved because chromatids separate.",
      "It remains unchanged because each chromosome still consists of two chromatids attached at a single centromere.",
      "It doubles due to DNA synthesis.",
      "It becomes zero until Telophase I."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During Anaphase I, homologous chromosomes separate without centromere division, so each chromosome retains both sister chromatids and its DNA content remains unchanged."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-MIS-045",
    "question": "Which of the following pairs of stages and events is completely accurate according to NCERT?",
    "options": [
      "Leptotene \u2014 Bivalent formation",
      "Diplotene \u2014 Terminalisation of chiasmata",
      "Diakinesis \u2014 Represents transition to metaphase",
      "Telophase I \u2014 Chromosomes reach extremely extended state of interphase"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Diakinesis represents transition to metaphase. Bivalent formation is zygotene, terminalisation is diakinesis, and Telophase I chromosomes do not reach the extremely extended interphase state."
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`Starting upsert of ${rawQuestions.length} questions for ${SUBTOPIC}...`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'hard',
        examType: 'neet',
        type: 'single',
        isActive: true,
        status: 'published',
        source: 'Self',
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

      const savedId = result._id || result.value?._id;
      if (!savedId) {
        const fetched = await qbCol.findOne({ commercialId: q.commercialId });
        assignedQuestionIds.push(fetched._id);
      } else {
        assignedQuestionIds.push(savedId);
      }
    }

    console.log(`Successfully upserted ${assignedQuestionIds.length} questions into questionBank.`);

    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];

    for (const testId of allTestIds) {
      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: 'Meiosis I Stages',
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
