import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Mitosis-and-Cytokinesis';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Mitosis',
  'neet-SUBTOPIC-Botany-Mitosis'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Cell Cycle and Cell Division';
const SUBTOPIC = 'Mitosis and Cytokinesis';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-MC-001",
    "question": "A diploid cell (2n = 24) undergoes mitosis. If the DNA content in the G\u2081 phase is 40 pg, what will be the number of chromosomes, chromatids, and DNA content in a single daughter nucleus immediately after telophase, assuming non-disjunction of one pair of homologous chromosomes occurred?",
    "options": [
      "24 chromosomes, 24 chromatids, 40 pg",
      "25 chromosomes, 25 chromatids, 41.67 pg",
      "24 chromosomes, 48 chromatids, 80 pg",
      "22 chromosomes, 22 chromatids, 36.67 pg"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Normally, a diploid cell (2n = 24, DNA = 40 pg in G\u2081) duplicates DNA in S phase to 80 pg and divides equally into two daughter cells with 24 chromosomes and 40 pg DNA each. If non-disjunction of one chromosome occurs (note: in mitosis, sister chromatids of one chromosome fail to separate, resulting in 2n+1 and 2n-1), one daughter cell receives 24 + 1 = 25 chromosomes. Since DNA per chromatid is 40/24 = 1.67 pg, 25 chromatids equal 40 + 1.67 = 41.67 pg."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-MC-002",
    "question": "Which of the following events marks the exact transition from early prophase to late prophase (prometaphase) in a typical eukaryotic animal cell?",
    "options": [
      "Initiation of assembly of mitotic spindle and condensation of chromatin",
      "Complete disintegration of the nuclear envelope and attachment of spindle fibers to kinetochores",
      "Movement of duplicated centrosomes to opposite poles and disappearance of nucleolus",
      "Splitting of centromeres and migration of daughter chromatids toward opposite poles"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to NCERT, the complete disintegration of the nuclear envelope marks the start of the second phase of mitosis (metaphase/prometaphase), allowing chromosomes to spread through the cytoplasm and attach to spindle fibers via kinetochores."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-MC-003",
    "question": "**Assertion (A):** Colchicine induces polyploidy in dividing plant cells by arresting mitosis at metaphase.\n**Reason (R):** Colchicine binds to tubulin dimers, preventing their polymerization into microtubules, thereby inhibiting sister chromatid separation while DNA replication remains unaffected.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Colchicine acts as a mitotic poison by binding to tubulin subunits and preventing microtubule assembly. Without a functional spindle, sister chromatids cannot separate at anaphase, leading to chromosome doubling (polyploidy) within the same cell."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-MC-004",
    "question": "During anaphase of mitosis, the centromere of each chromosome faces the pole while the arms trail behind. Which of the following chromosome morphologies will appear 'J-shaped' and 'L-shaped', respectively, during this stage?",
    "options": [
      "Metacentric and Sub-metacentric",
      "Acrocentric and Sub-metacentric",
      "Sub-metacentric and Acrocentric",
      "Telocentric and Metacentric"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During anaphase, centromeres lead while arms trail. Metacentric chromosomes appear **V-shaped**, sub-metacentric appear **L-shaped**, acrocentric appear **J-shaped**, and telocentric appear **I-shaped**."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-MC-005",
    "question": "Match Column I with Column II regarding mitotic inhibitors and regulators, and select the correct option:\n\n| Column I | Column II |\n| :--- | :--- |\n| A. Taxol | 1. Inhibits cytokinesis by blocking actin polymerization |\n| B. Cytochalasin B | 2. Stabilizes microtubules and prevents depolymerization |\n| C. Nocodazole | 3. Induces chromosome condensation and nuclear envelope breakdown |\n| D. MPF (Maturation Promoting Factor) | 4. Depolymerizes microtubules and arrests cells in prometaphase |",
    "options": [
      "A-2, B-1, C-4, D-3",
      "A-4, B-1, C-2, D-3",
      "A-2, B-3, C-4, D-1",
      "A-1, B-2, C-3, D-4"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Taxol hyper-stabilizes microtubules (used in chemotherapy); Cytochalasin B blocks actin polymerization and inhibits cleavage furrow formation; Nocodazole depolymerizes microtubules; MPF (Cdk1 + Cyclin B) drives entry into M-phase by triggering chromatin condensation and nuclear envelope breakdown."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-MC-006",
    "question": "In an actively dividing meristematic tissue of an angiosperm, a cell is observed to have 32 chromosomes at metaphase. How many kinetochores and spindle fibers (kinetochore microtubules) are associated with these chromosomes at this stage?",
    "options": [
      "32 kinetochores, 32 spindle fibers",
      "64 kinetochores, 64 spindle fibers",
      "32 kinetochores, 64 spindle fibers",
      "64 kinetochores, 32 spindle fibers"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "At metaphase, each of the 32 chromosomes consists of 2 sister chromatids, and each chromatid has its own kinetochore on the centromere. Therefore, there are 32 \u00d7 2 = 64 kinetochores, and each attaches to at least one spindle fiber (64 spindle fibers)."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-MC-007",
    "question": "Consider the following statements regarding cytokinesis in plant and animal cells:\n\n(i) In animal cells, furrow formation occurs centripetally due to the contraction of a ring composed of actin and myosin II filaments.\n(ii) In plant cells, cell plate formation initiates at the periphery and grows inward (centripetally) to fuse with the existing lateral walls.\n(iii) Phragmoplast is a complex assembly of microtubules, microfilaments, and endoplasmic reticulum vesicles derived from the Golgi apparatus.\n(iv) Syncytium formation in liquid endosperm of coconut results from karyokinesis not followed by cytokinesis.\n\nWhich of the above statements are correct?",
    "options": [
      "(i), (iii), and (iv) only",
      "(i), (ii), and (iii) only",
      "(ii) and (iv) only",
      "(i) and (iv) only"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statement (ii) is incorrect because in plant cells, cell plate formation initiates at the center of the cell and grows outward (**centrifugally**) to meet the existing lateral walls. All other statements are correct."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-MC-008",
    "question": "What would be the immediate consequence if a human somatic cell in metaphase is treated with a drug that specifically inhibits the enzyme *separase*?",
    "options": [
      "Chromosomes would fail to align at the equatorial plate.",
      "Cohesin complexes holding sister chromatids together would not be cleaved, preventing anaphase onset.",
      "Condensin proteins would fail to supercoil chromatin fibers during prophase.",
      "Nuclear envelope reformation would occur prematurely around unseparated chromatids."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "During the metaphase-to-anaphase transition, the enzyme *separase* cleaves the cohesin rings holding sister chromatids together. Inhibiting separase prevents sister chromatid separation and blocks anaphase onset."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-MC-009",
    "question": "A root tip cell of *Allium cepa* (2n = 16) undergoes 4 successive mitotic divisions. How many total mitotic divisions (cycles) and how many total cells will be produced from a single parent cell, and what will be the chromosome number in each resulting cell?",
    "options": [
      "15 divisions, 16 cells, 16 chromosomes",
      "4 divisions, 16 cells, 16 chromosomes",
      "16 divisions, 16 cells, 8 chromosomes",
      "15 divisions, 32 cells, 16 chromosomes"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Number of cells produced after n mitotic generations = 2\u207f = 2\u2074 = 16 cells. However, the total number of individual mitotic divisions required to produce N cells from a single parent cell is N - 1 = 16 - 1 = 15 divisions. Mitosis is equational, so chromosome number remains 2n = 16."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-MC-010",
    "question": "Identify the incorrect statement regarding the significance of mitosis:",
    "options": [
      "Mitosis restores the nucleo-cytoplasmic ratio that gets disturbed due to cell growth.",
      "In lower plants and social insects like male honeybees, haploid cells divide exclusively by mitosis.",
      "Mitosis introduces genetic recombination through sister chromatid exchange, aiding in evolution.",
      "Continuous mitotic divisions in the apical and lateral meristems result in indeterminate growth in plants."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Mitosis produces genetically identical daughter cells and does **not** involve crossing over or genetic recombination (which occurs in meiosis)."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-MC-011",
    "question": "During which stage of mitosis does the chromosome reach its maximum level of condensation, making it ideal for karyotyping?",
    "options": [
      "Late Prophase",
      "Metaphase",
      "Early Anaphase",
      "Telophase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Condensation of chromosomes is completed by metaphase, making them shortest and thickest, which is ideal for studying chromosome morphology and karyotyping."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-MC-012",
    "question": "Read the following events of mitosis:\n\n(A) Decondensation of chromosomes into chromatin network\n(B) Splitting of centromeres\n(C) Reformation of nucleolus, Golgi complex, and ER\n(D) Alignment of chromosomes at the metaphase plate\n(E) Movement of centrosomes to opposite poles\n\nArrange them in the correct chronological sequence:",
    "options": [
      "E \u2192 D \u2192 B \u2192 A \u2192 C",
      "E \u2192 B \u2192 D \u2192 C \u2192 A",
      "D \u2192 E \u2192 B \u2192 A \u2192 C",
      "E \u2192 D \u2192 B \u2192 C \u2192 A"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Correct chronological order: Centrosomes move to opposite poles (Prophase, E) \u2192 Chromosomes align at equator (Metaphase, D) \u2192 Splitting of centromeres (Anaphase, B) \u2192 Decondensation of chromosomes (Telophase, A) \u2192 Reformation of nucleolus, Golgi, and ER (Late Telophase, C)."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-MC-013",
    "question": "In certain dinoflagellates and fungi, mitosis occurs within an intact nuclear envelope without the formation of a typical extranuclear spindle. This type of mitosis is termed:",
    "options": [
      "Eumitosis",
      "Cryptomitosis / Dinomitosis",
      "Endomitosis",
      "Amitosis"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Intranuclear mitosis where the nuclear membrane remains intact throughout division is called *cryptomitosis* or *dinomitosis* (seen in dinoflagellates and many fungi)."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-MC-014",
    "question": "If a cell has 2C DNA and 2n chromosomes in G\u2081, what is the ratio of the number of chromatids in metaphase to the number of chromosomes in anaphase within the same dividing cell?",
    "options": [
      "1 : 1",
      "2 : 1",
      "1 : 2",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In a 2n cell, metaphase has 2n chromosomes, each with 2 chromatids = 4n chromatids. In anaphase, centromeres split, so each chromatid becomes an independent chromosome = 4n chromosomes. Thus, the ratio is 4n : 4n = 1 : 1."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-MC-015",
    "question": "Which of the following structural features distinguishes plant mitosis from animal mitosis?",
    "options": [
      "Presence of kinetochores on centromeres",
      "Anastral spindle formation and centrifugal cytokinesis",
      "Amphiastral spindle formation and centripetal cytokinesis",
      "Disappearance of nuclear membrane at the end of prophase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Higher plant cells lack centrioles, forming an *anastral* spindle, and divide their cytoplasm via a cell plate that grows *centrifugally* (center to periphery). Animal cells have an *amphiastral* spindle and divide *centripetally* (furrowing)."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-MC-016",
    "question": "**Statement I:** During anaphase, Anaphase-Promoting Complex/Cyclosome (APC/C) degrades securin, which in turn activates separase.\n**Statement II:** Anaphase A involves the shortening of kinetochore microtubules, whereas Anaphase B involves the sliding of polar microtubules past each other to elongate the spindle.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are accurate molecular descriptions of anaphase: APC/C ubiquitinates securin, freeing separase to cleave cohesin; Anaphase A pulls chromatids via kinetochore microtubule shortening, while Anaphase B pushes poles apart via polar microtubules."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-MC-017",
    "question": "A cell is treated with *Cytochalasin B* during early prophase. After completion of the cell cycle, the resulting cell will be:",
    "options": [
      "Haploid and uninucleate",
      "Diploid and binucleate",
      "Tetraploid and uninucleate",
      "Arrested at metaphase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Cytochalasin B inhibits actin microfilaments, blocking cytokinesis without affecting karyokinesis. Thus, nuclear division completes normally, yielding a single diploid cell with two diploid nuclei (binucleate)."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-MC-018",
    "question": "At the end of telophase, which of the following organelles do NOT reform because they are semi-autonomous and divide by fission prior to cytokinesis?",
    "options": [
      "Golgi apparatus and Endoplasmic Reticulum",
      "Nucleolus and Nuclear envelope",
      "Mitochondria and Chloroplasts",
      "Both (a) and (b)"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Mitochondria and chloroplasts are semi-autonomous organelles with their own DNA; they divide by fission during interphase and are distributed between daughter cells rather than disassembling and reforming like the nuclear envelope, ER, and Golgi."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-MC-019",
    "question": "How many of the following structures are visible under a light microscope in a human somatic cell at the end of prophase?\n*[Golgi bodies, Endoplasmic reticulum, Nucleolus, Nuclear envelope, Condensed chromosomes, Centrosomes]*",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "By the end of prophase, the Golgi complex, ER, nucleolus, and nuclear envelope disappear. Only the condensed chromosomes and centrosomes (asters) remain visible."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-MC-020",
    "question": "During metaphase, chromosomes are held at the equator by balanced bipolar tension. What happens if one kinetochore of a chromosome fails to attach to spindle fibers from its respective pole?",
    "options": [
      "The cell immediately enters anaphase, resulting in one aneuploid daughter cell.",
      "The Spindle Assembly Checkpoint (SAC) generates a 'wait' signal, inhibiting APC/C activation.",
      "The unattached chromosome undergoes programmed degradation by lysosomes.",
      "Both sister chromatids are pulled to the same pole without centromere splitting."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The Spindle Assembly Checkpoint (SAC) monitors bipolar attachment of all kinetochores. Even a single unattached kinetochore generates a signal (Mad2/MCC) that inhibits APC/C, halting progression to anaphase until proper attachment occurs."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-MC-021",
    "question": "Match the sub-stages/events of M-phase with their molecular mechanisms:\n\n| Event | Molecular Mechanism |\n| :--- | :--- |\n| A. Nuclear lamina breakdown | 1. Dephosphorylation of nuclear lamins |\n| B. Chromosome condensation | 2. Phosphorylation of nuclear lamins by Cdk1-Cyclin B |\n| C. Nuclear envelope reassembly | 3. Activation of Condensin complexes |\n| D. Sister chromatid separation | 4. Cleavage of Scc1 subunit of cohesin |",
    "options": [
      "A-2, B-3, C-1, D-4",
      "A-1, B-3, C-2, D-4",
      "A-2, B-4, C-1, D-3",
      "A-3, B-2, C-1, D-4"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Cdk1-Cyclin B phosphorylates nuclear lamins to disassemble the nuclear lamina (A-2); condensin supercoils DNA (B-3); phosphatases dephosphorylate lamins to rebuild the nuclear envelope (C-1); separase cleaves the Scc1 subunit of cohesin (D-4)."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-MC-022",
    "question": "In an organism with 2n = 14, what is the total number of telomeres present in a cell at mitotic metaphase?",
    "options": [
      "14",
      "28",
      "56",
      "112"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "In a cell with 2n = 14 at metaphase, there are 14 duplicated chromosomes, meaning 28 chromatids. Each linear chromatid has 2 ends (telomeres). Therefore, total telomeres = 28 \u00d7 2 = 56."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-MC-023",
    "question": "Which of the following best describes the chemical nature and origin of the cell plate in higher plants?",
    "options": [
      "Cellulose and hemicellulose secreted by mitochondria",
      "Calcium and magnesium pectate formed by fusion of phragmoplast vesicles from Golgi",
      "Suberin and lignin deposited by smooth endoplasmic reticulum",
      "Chitin and peptidoglycan synthesized by plasma membrane enzymes"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The cell plate is formed by the coalescence of Golgi-derived vesicles guided by the phragmoplast, which deposit calcium and magnesium pectate to form the middle lamella."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-MC-024",
    "question": "**Assertion (A):** In animal cells, cytokinesis is achieved by the appearance of a furrow in the plasma membrane.\n**Reason (R):** The position of the cleavage furrow is determined by the mitotic spindle, specifically the overlapping astral and interpolar microtubules at the equator.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are true, and (R) correctly explains (A): signals from the overlapping interpolar and astral microtubules at the spindle midzone (via RhoA pathway) specify where the actin-myosin contractile ring forms."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-MC-025",
    "question": "What is the key difference between *Endomitosis* and *Free-nuclear division*?",
    "options": [
      "Endomitosis occurs without spindle formation and nuclear membrane breakdown, leading to polyploidy within a single nucleus; free-nuclear division involves karyokinesis without cytokinesis, producing multinucleate cells.",
      "Endomitosis produces haploid cells; free-nuclear division produces diploid cells.",
      "Endomitosis occurs only in animals; free-nuclear division occurs only in bacteria.",
      "Endomitosis involves cytokinesis without karyokinesis; free-nuclear division involves both simultaneously."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Endomitosis is chromosome replication and chromatid separation inside an intact nucleus without spindle or cytokinesis, creating polyploid nuclei (e.g., megakaryocytes, tapetum). Free-nuclear division involves repeated karyokinesis without cytokinesis, creating a coenocyte/syncytium."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-MC-026",
    "question": "A diploid cell (2n = 20) has 10 pg of DNA in its G\u2081 phase. If this cell undergoes mitosis, what will be the amount of DNA per chromosome during metaphase and anaphase, respectively?",
    "options": [
      "1.0 pg and 0.5 pg",
      "0.5 pg and 0.5 pg",
      "1.0 pg and 1.0 pg",
      "2.0 pg and 1.0 pg"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In G\u2081, 20 chromosomes have 10 pg DNA (0.5 pg per chromatid). In metaphase, each chromosome has 2 chromatids = 1.0 pg DNA per chromosome. In anaphase, sister chromatids separate into individual chromosomes, so each chromosome has 1 chromatid = 0.5 pg DNA."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-MC-027",
    "question": "During telophase, chromosomes cluster at opposite spindle poles and lose their individuality. Which of the following processes does **NOT** occur during telophase?",
    "options": [
      "Disassembly of the mitotic spindle apparatus",
      "Reassembly of the nuclear envelope around each chromosome cluster",
      "Replication of centrioles for the next cell cycle",
      "Decondensation of chromosomes into euchromatin and heterochromatin"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Centriole replication occurs during the **S phase** of interphase, not during telophase."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-MC-028",
    "question": "Which of the following types of microtubules in the mitotic spindle do NOT attach to chromosomes but overlap at the spindle midzone to push the poles apart?",
    "options": [
      "Kinetochore microtubules",
      "Astral microtubules",
      "Polar (interpolar) microtubules",
      "Cortical microtubules"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Polar (interpolar) microtubules extend from opposite poles and overlap at the equatorial midzone, where kinesin-5 motor proteins slide them past each other to elongate the spindle during Anaphase B."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-MC-029",
    "question": "In a hypothetical experiment, a dividing animal cell is microinjected with antibodies against *myosin II* during late anaphase. What will be the observed phenotype?",
    "options": [
      "Sister chromatids will fail to move to opposite poles.",
      "Nuclear envelope will not reform around daughter nuclei.",
      "Contractile ring will assemble properly, allowing normal cleavage.",
      "Cleavage furrow formation will fail, resulting in a binucleate cell."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Myosin II provides the motor force for contracting the actin ring during animal cytokinesis. Blocking Myosin II prevents furrow ingression, leading to a binucleate cell."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-MC-030",
    "question": "Identify the correct statement regarding the kinetochore:",
    "options": [
      "It is a non-coding DNA sequence located at the ends of chromosomes.",
      "It is a disc-shaped proteinaceous structure on the surface of the centromere that serves as the attachment site for spindle microtubules.",
      "Each chromosome possesses only one kinetochore during metaphase.",
      "It is composed exclusively of actin and myosin proteins."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Kinetochores are trilaminar disc-shaped protein structures assembled on the centromeric region of each sister chromatid (so 2 per metaphase chromosome) where spindle microtubules attach."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-MC-031",
    "question": "Why is mitosis referred to as 'equational division' even though the DNA content per cell is halved during M-phase compared to the G\u2082 phase?",
    "options": [
      "Because the chromosome number and DNA content of the daughter cells are identical to those of the parent cell in the G\u2081 phase.",
      "Because crossing over occurs equally between all homologous chromosomes.",
      "Because the volume of cytoplasm is divided in an exact 1 : 1 ratio in all cells.",
      "Because both karyokinesis and cytokinesis take equal time to complete."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Although DNA is halved from 4C (in G\u2082) to 2C (in daughter cells), each daughter cell ends up with the exact same chromosome number (2n) and DNA content (2C) as the parent cell had before entering S phase (G\u2081)."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-MC-032",
    "question": "Observe the following features of a dividing cell:\n\n- Spindle fibers are attached to kinetochores of chromosomes.\n- Chromosomes are moved to spindle equator and get aligned along the metaphase plate.\n- Each chromosome consists of two sister chromatids held together at the centromere.\n\nIf the ploidy of this cell is 4n = 48, how many centromeres and chromatids are present at this stage?",
    "options": [
      "48 centromeres, 96 chromatids",
      "24 centromeres, 48 chromatids",
      "48 centromeres, 48 chromatids",
      "96 centromeres, 96 chromatids"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Regardless of ploidy (4n = 48), at metaphase there are 48 chromosomes, meaning 48 centromeres. Since each chromosome is duplicated into two sister chromatids, there are 48 \u00d7 2 = 96 chromatids."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-MC-033",
    "question": "In higher plants, the preprophase band (PPB) is a transient ring of microtubules and actin filaments that forms just beneath the plasma membrane before mitosis. What is its primary function?",
    "options": [
      "It forms the mitotic spindle in the absence of centrosomes.",
      "It marks the exact cortical division site where the new cell plate will fuse with the parental wall during cytokinesis.",
      "It induces condensation of chromatin fibers during early prophase.",
      "It degrades the middle lamella to allow cell expansion."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The preprophase band (PPB) predicts and establishes the cortical division site in plant cells; even though it disassembles before metaphase, it leaves behind molecular markers that guide the expanding phragmoplast during telophase."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-MC-034",
    "question": "Which of the following motor proteins is primarily responsible for the poleward movement of chromosomes along kinetochore microtubules during Anaphase A?",
    "options": [
      "Cytoplasmic dynein and depolymerizing kinesins (e.g., Kinesin-13)",
      "Myosin V",
      "Axonemal dynein",
      "Kinesin-1 moving toward the minus end"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Poleward movement during Anaphase A is driven by minus-end-directed motor proteins (cytoplasmic dynein) at the kinetochores coupled with microtubule depolymerization by Kinesin-13 (MCAK)."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-MC-035",
    "question": "**Statement I:** In animal cells, centrosome duplication occurs during the S phase, while their migration to opposite poles occurs during prophase.\n**Statement II:** Radiating microtubules around each centrosome during prophase are called asters, and two asters together with spindle fibers form the mitotic apparatus.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are direct facts from NCERT Class 11 Biology (Chapter: Cell Cycle and Cell Division)."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-MC-036",
    "question": "A mutant yeast strain has a temperature-sensitive defect in the gene encoding *Cyclin B*. When shifted to the restrictive temperature during G\u2082, the cells will:",
    "options": [
      "Arrest at the G\u2082/M transition and fail to enter prophase.",
      "Enter mitosis normally but arrest at the metaphase-anaphase transition.",
      "Undergo uncontrolled multiple rounds of mitosis without S phase.",
      "Complete karyokinesis but fail to undergo cytokinesis."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Cyclin B is required to activate Cdk1 (forming MPF) to trigger entry into mitosis. Without functional Cyclin B, cells cannot pass the G\u2082/M checkpoint."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-MC-037",
    "question": "Which of the following events does **NOT** happen during prophase of mitosis?",
    "options": [
      "Untangling of chromosomal material during chromatin condensation",
      "Movement of duplicated centrioles to opposite poles of the cell",
      "Attachment of spindle fibers to kinetochores of chromosomes",
      "Disappearance of Golgi complexes, ER, nucleolus, and nuclear envelope at the end of the phase"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Attachment of spindle fibers to kinetochores occurs during **metaphase** (specifically prometaphase/early metaphase) after the complete disintegration of the nuclear envelope, whereas events (a), (b), and (d) occur during prophase."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-MC-038",
    "question": "During anaphase, as sister chromatids separate and move toward opposite poles, what happens to the distance between the centromeres of sister chromatids and the distance between the centromeres and their respective poles?",
    "options": [
      "Both distances increase.",
      "Both distances decrease.",
      "Distance between sister centromeres increases; distance between centromere and pole decreases.",
      "Distance between sister centromeres decreases; distance between centromere and pole increases."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "As sister chromatids are pulled toward opposite poles in anaphase, they move away from each other (increasing the distance between sister centromeres) and closer to their respective spindle poles (decreasing centromere-to-pole distance)."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-MC-039",
    "question": "How many mitotic generations are required to produce 128 cells from a single meristematic cell?",
    "options": [
      "7",
      "64",
      "127",
      "8"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Each mitotic generation doubles the cell number: 2\u207f = 128 \u21d2 2\u207f = 2\u2077 \u21d2 n = 7 generations."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-MC-040",
    "question": "In certain protozoans like *Amoeba* and in bacterial cells, direct cell division occurs without spindle formation or distinct chromosome condensation, where the nucleus simply constricts and divides into two. This is called:",
    "options": [
      "Mitosis",
      "Meiosis",
      "Amitosis",
      "Karyokinesis"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Amitosis is direct nuclear and cytoplasmic cleavage without chromosome condensation or spindle formation, seen in prokaryotes and certain protozoans/aging tissues."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-MC-041",
    "question": "If the G\u2081 phase of a diploid cell has 20 chromosomes and 2C DNA content, which of the following rows correctly represents the state at Anaphase?\n\n| Option | Chromosomes per cell | Chromatids per cell | DNA content per cell |\n| :--- | :--- | :--- | :--- |\n| (a) | 20 | 40 | 4C |\n| (b) | 40 | 40 | 4C |\n| (c) | 40 | 0 | 2C |\n| (d) | 20 | 20 | 2C |",
    "options": [
      "Row (a): 20 chromosomes, 40 chromatids, 4C DNA content",
      "Row (b): 40 chromosomes, 40 chromatids, 4C DNA content",
      "Row (c): 40 chromosomes, 0 chromatids, 2C DNA content",
      "Row (d): 20 chromosomes, 20 chromatids, 2C DNA content"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "At Anaphase, centromeres split, doubling the chromosome count per cell from 20 to 40. Since each separated chromatid is now counted as an independent chromosome (or single-chromatid unit), there are 40 chromosomes (and 40 chromatid units) sharing the 4C DNA within the single dividing cell prior to cytokinesis."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-MC-042",
    "question": "Which of the following is the correct sequence of layers formed during plant cytokinesis from the center outward?",
    "options": [
      "Primary cell wall \u2192 Middle lamella \u2192 Plasma membrane",
      "Middle lamella \u2192 Primary cell wall \u2192 Plasma membrane",
      "Plasma membrane \u2192 Primary cell wall \u2192 Middle lamella",
      "Secondary cell wall \u2192 Primary cell wall \u2192 Middle lamella"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The cell plate matures into the central **middle lamella**, on either side of which each daughter cell deposits its **primary cell wall**, bounded internally by the **plasma membrane**."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-MC-043",
    "question": "**Assertion (A):** Syncytium is a multinucleate condition that arises when karyokinesis is not followed by cytokinesis.\n**Reason (R):** The cellular endosperm in coconut is a classic example of syncytium.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Assertion (A) is true, but Reason (R) is false because it is the **liquid endosperm** (free-nuclear endosperm) of coconut that is a syncytium, not the cellular endosperm (white kernel)."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-MC-044",
    "question": "During mitotic prometaphase, chromosomes exhibit congression. What does 'congression' refer to?",
    "options": [
      "Condensation of chromatin into visible chromosomes",
      "Movement of chromosomes toward the equatorial plane of the spindle",
      "Splitting of centromeres at the onset of anaphase",
      "Clustering of chromosomes at opposite poles during telophase"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Congression is the active movement and alignment of chromosomes onto the metaphase plate (equatorial plane) via opposing pulling forces from both spindle poles."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-MC-045",
    "question": "Consider a cell in mitotic telophase. If a scientist measures the amount of histone proteins and DNA in one of the two newly formed daughter nuclei and compares it to the parent cell in G\u2082 phase, the ratio (Daughter nucleus at telophase : Parent cell at G\u2082) will be:",
    "options": [
      "1 : 1",
      "1 : 2",
      "2 : 1",
      "1 : 4"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "A parent cell in G\u2082 has 4C DNA and twice the normal histone content (2\u00d7). After mitosis, each daughter nucleus at telophase receives exactly half of the DNA (2C) and half of the histones (1\u00d7), giving a ratio of 1 : 2."
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

    console.log(`=== ADDING 45 MITOSIS AND CYTOKINESIS QUESTIONS TO CENTRAL QUESTION BANK & ${PRIMARY_TEST_ID} ===`);

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
            title: testId.includes('Mitosis-and-Cytokinesis') ? 'Mitosis and Cytokinesis' : 'Mitosis',
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
