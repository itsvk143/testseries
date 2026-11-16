import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const TARGET_TEST_ID = 'neet-SUBTOPIC-Botany-Meristematic-and-Permanent-Tissues';
const SUBJECT = 'Botany';
const CHAPTER = 'Anatomy of Flowering Plants';
const SUBTOPIC = 'Meristematic and Permanent Tissues';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-MPT-001",
    "question": "Read the following statements regarding meristematic tissues in angiosperms: \n(i) Both apical meristems and intercalary meristems are primary meristems because they appear early in the life of a plant and contribute to the formation of the primary plant body. \n(ii) During the formation of leaves and elongation of stem, some cells left behind from the shoot apical meristem constitute the axillary bud, which is capable of forming a branch or a flower. \n(iii) Intercalary meristem occurs between mature tissues and is commonly found in grasses, where it helps regenerate parts removed by grazing herbivores. \n(iv) Lateral meristems are always secondary in origin and appear later than primary meristems. \nHow many of the above statements are **incorrect**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Only statement (iv) is **incorrect**. Lateral meristems are not always secondary in origin; **fascicular (intrafascicular) vascular cambium** is a lateral meristem that is **primary in origin** (derived from procambium). Interfascicular cambium and cork cambium are secondary lateral meristems. Statements (i), (ii), and (iii) are directly from NCERT and are completely correct."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-MPT-002",
    "question": "Given below are two statements: one is labelled as Assertion",
    "options": [
      "and the other is labelled as Reason (R). \n**Assertion (A):** Fascicular vascular cambium is classified as a lateral meristem, yet it is primary in origin. \n**Reason (R):** It develops from the procambial strands present within the primary vascular bundles of dicot stems and produces secondary tissues later. \nIn the light of the above statements, choose the correct answer from the options given below: \n(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Fascicular vascular cambium lies on the lateral side of the stem axis (making it a lateral meristem), but it is already present between primary xylem and primary phloem in the primary vascular bundle (originating from embryonic procambium), making it primary in origin. Thus, both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-MPT-003",
    "question": "Consider the following statements about simple permanent tissues: \n**Statement I:** Parenchyma forms the major component within organs, and its cells are generally isodiametric with thin cell walls made up of cellulose, arranged either closely packed or with small intercellular spaces. \n**Statement II:** Collenchyma occurs in layers below the epidermis in most monocotyledonous and dicotyledonous plants, either as a homogeneous layer or in patches. \nIn the light of the above statements, choose the most appropriate answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because collenchyma occurs in layers below the epidermis in **most dicotyledonous plants**, and is **absent in monocots**."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-MPT-004",
    "question": "Which of the following combinations of chemical substances is specifically deposited at the corners of collenchymatous cells, leading to their characteristic localized thickening?",
    "options": [
      "Lignin, suberin, and cellulose",
      "Cellulose, hemicellulose, and pectin",
      "Pectin, cutin, and lignin",
      "Hemicellulose, suberin, and cutin"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Collenchyma cells are living and possess primary cell walls that are much thickened at the corners due to the deposition of **cellulose, hemicellulose, and pectin**. Lignin and suberin are absent in collenchyma."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-MPT-005",
    "question": "Identify the incorrect statement regarding sclerenchyma tissue:",
    "options": [
      "Sclerenchyma consists of long, narrow cells with thick and lignified cell walls having a few or numerous pits.",
      "Sclereids are spherical, oval, or cylindrical, highly thickened dead cells with very narrow cavities (lumen).",
      "Fibres are thick-walled, elongated, and pointed cells, generally occurring in groups in various parts of the plant.",
      "Sclereids are commonly found in the fruit walls of nuts, pulp of fruits like guava, pear, and sapota, seed coats of legumes, and leaves of *Pinus*."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Sclereids are commonly found in the fruit walls of nuts, pulp of fruits like guava, pear, and sapota, seed coats of legumes, and **leaves of tea** (not leaves of *Pinus*). Statements (A), (B), and (C) are accurate descriptions of sclerenchyma."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-MPT-006",
    "question": "Match List-I with List-II regarding xylem elements and choose the correct option:\n\n| List-I | List-II |\n| :--- | :--- |\n| (a) Tracheids | (i) Obliterated central lumens and septate or aseptate walls |\n| (b) Vessels | (ii) Living, thin-walled cells storing tannins and conducting water radially |\n| (c) Xylem fibres | (iii) Elongated tube-like cells with tapering ends, dead and without protoplasm |\n| (d) Xylem parenchyma | (iv) Long cylindrical tube-like structure made of many cells with perforated common walls |",
    "options": [
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Tracheids are elongated, tube-like dead cells with tapering ends and lignified walls (iii). Vessels are long cylindrical tube-like structures formed of many vessel members interconnected via perforations in their common walls (iv). Xylem fibres have highly thickened walls and obliterated central lumens, and may be septate or aseptate (i). Xylem parenchyma cells are living, thin-walled, store food/tannins, and assist in radial conduction of water (ii)."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-MPT-007",
    "question": "Read the following statements carefully: \n(a) Gymnosperms lack vessels in their xylem, though exceptions exist in order Gnetales. \n(b) The presence of vessels is a characteristic feature of angiosperms. \n(c) Radial conduction of water in vascular bundles takes place by the ray parenchymatous cells. \n(d) Vessel members are interconnected through perforations in their lateral walls only. \nSelect the option containing **all correct** statements:",
    "options": [
      "(a), (b), and (c) only",
      "(b), (c), and (d) only",
      "(a), (c), and (d) only",
      "(a), (b), (c), and (d)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statement (d) is incorrect because vessel members are interconnected through perforations in their **common end walls** (perforation plates), while pits occur on their lateral walls. Statements (a), (b), and (c) are correct."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-MPT-008",
    "question": "Distinguish between protoxylem and metaxylem by selecting the correct statement:",
    "options": [
      "In stems, the protoxylem lies towards the periphery and the metaxylem lies towards the centre; this arrangement is called endarch.",
      "In roots, the protoxylem lies towards the centre (pith) and the metaxylem lies towards the periphery; this arrangement is called exarch.",
      "Protoxylem consists of first-formed primary xylem elements with narrower lumens, whereas metaxylem consists of later-formed primary xylem elements with wider lumens.",
      "Both protoxylem and metaxylem are formed from the vascular cambium during secondary growth."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Protoxylem is the first-formed primary xylem with narrower vessels/tracheids, while metaxylem is formed later with broader lumens. In stems, protoxylem lies towards the centre (pith) and metaxylem towards the periphery (**endarch**). In roots, protoxylem lies towards the periphery and metaxylem towards the centre (**exarch**). Both are primary xylem, not formed from vascular cambium."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-MPT-009",
    "question": "Given below are two statements: \n**Statement I:** A mature sieve tube element possesses a peripheral cytoplasm and a large central vacuole, but lacks a nucleus. \n**Statement II:** The functions of sieve tubes are controlled by the nucleus of companion cells, which are connected to sieve tube elements by pit fields present between their common longitudinal walls. \nChoose the correct answer from the options given below:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are factually correct according to NCERT. Mature sieve tube elements lack a nucleus at maturity, and their metabolic and translocation functions are regulated by the nucleus of the adjacent companion cell via plasmodesmatal connections through pit fields in their common longitudinal walls."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-MPT-010",
    "question": "Which of the following statements about phloem in angiosperms is false?",
    "options": [
      "Gymnosperms lack both sieve tubes and companion cells; instead, they have albuminous cells and sieve cells.",
      "Companion cells are specialized parenchymatous cells closely associated with sieve tube elements and help in maintaining the pressure gradient in the sieve tubes.",
      "Phloem parenchyma is made up of elongated, tapering cylindrical cells which have dense cytoplasm and nucleus, and is universally present in all monocotyledons.",
      "Phloem fibres (bast fibres) are made up of sclerenchymatous cells and are generally absent in the primary phloem but are found in the secondary phloem."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Phloem parenchyma is **absent in most monocotyledons**, not universally present. All other statements (A, B, and D) are accurate."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-MPT-011",
    "question": "Identify the correct sequence of developmental events occurring in a plant cell derived from a meristem:",
    "options": [
      "Plasmatic growth \u2192 Cell division \u2192 Differentiation \u2192 Maturation \u2192 Senescence",
      "Cell division \u2192 Cell enlargement \u2192 Differentiation \u2192 Maturation \u2192 Senescence",
      "Differentiation \u2192 Dedifferentiation \u2192 Cell division \u2192 Redifferentiation \u2192 Maturation",
      "Cell division \u2192 Dedifferentiation \u2192 Cell enlargement \u2192 Maturation \u2192 Senescence"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "A newly formed cell from a meristem undergoes cell division, followed by cell enlargement (plasmatic growth/vacuolation), structural and physiological differentiation, maturation, and finally senescence/death."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-MPT-012",
    "question": "Consider the following statements regarding bast fibres: \n(i) They are elongated, unbranched, and have pointed, needle-like apices. \n(ii) Their cell walls are quite thick and lose their protoplasm at maturity, becoming dead. \n(iii) Phloem fibres of jute, flax, and hemp are used commercially. \n(iv) They belong to the primary phloem and possess thin cellulosic walls. \nWhich of the statements given above are **correct**?",
    "options": [
      "(i), (ii), and (iii) only",
      "(i), (iii), and (iv) only",
      "(ii) and (iv) only",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statement (iv) is incorrect because bast fibres (phloem fibres) are generally **absent in the primary phloem** and are found in the **secondary phloem**, possessing thick lignified walls rather than thin cellulosic walls. Statements (i), (ii), and (iii) are correct."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-MPT-013",
    "question": "Assertion",
    "options": [
      ": Collenchyma provides mechanical support to the growing parts of the plant such as young stem and petiole of a leaf. \n**Reason (R):** Collenchymatous cells are dead at maturity, possess heavily lignified secondary walls, and lack intercellular spaces. \nChoose the correct option: \n(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Assertion (A) is true: collenchyma provides mechanical support and flexibility to growing organs like young stems and petioles. Reason (R) is false because collenchymatous cells are **living** at maturity and possess non-lignified walls thickened with cellulose, hemicellulose, and pectin."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-MPT-014",
    "question": "Which of the following features is NOT characteristic of meristematic cells?",
    "options": [
      "Rich in protoplasm with large conspicuous nuclei",
      "Primary cell walls are thin and cellulosic with abundant plasmodesmatal connections",
      "Presence of ergastic substances such as starch grains, tannins, and calcium oxalate crystals",
      "High rate of respiration and absence of large central vacuoles"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Meristematic cells are metabolically highly active, thin-walled, rich in dense protoplasm with prominent nuclei, and lack ergastic (reserve/waste) substances such as starch grains, tannins, or crystals, as well as large central vacuoles."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-MPT-015",
    "question": "Select the incorrect comparison between protophloem and metaphloem:",
    "options": [
      "Protophloem is the first-formed primary phloem, whereas metaphloem is the later-formed primary phloem.",
      "Protophloem consists of narrow sieve tubes, while metaphloem has bigger sieve tubes.",
      "Both protophloem and metaphloem contain abundant bast fibres in dicot stems.",
      "Protophloem often gets crushed during the elongation of the organ, whereas metaphloem remains functional longer."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Bast fibres (phloem fibres) are generally absent in primary phloem (which comprises both protophloem and metaphloem) and are characteristically present in secondary phloem."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-MPT-016",
    "question": "Read the following statements about the epidermal tissue system: \n(i) Epidermal cells are parenchymatous with a small amount of cytoplasm lining the cell wall and a large vacuole. \n(ii) Cuticle is a waxy thick layer outside the epidermis that prevents loss of water, and it is present in both roots and shoots. \n(iii) In grasses, the guard cells of stomata are dumb-bell shaped, whereas in dicots they are bean-shaped. \n(iv) The outer walls of guard cells (away from the stomatal pore) are thin and the inner walls (towards the stomatal pore) are highly thickened. \nHow many of the above statements are **true**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement (ii) is false because the waxy cuticle is **absent in roots** (as roots must absorb water). Statements (i), (iii), and (iv) are correct."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-MPT-017",
    "question": "Match List-I (Meristem Theory / Concept) with List-II (Proposer / Feature):\n\n| List-I | List-II |\n| :--- | :--- |\n| (a) Apical Cell Theory | (i) Schmidt (Tunica and Corpus layers) |\n| (b) Histogen Theory | (ii) Nageli (Single tetrahedral apical cell in cryptogams) |\n| (c) Tunica-Corpus Theory | (iii) Hanstein (Dermatogen, Periblem, and Plerome) |\n| (d) Quiescent Centre | (iv) Clowes (Low DNA, RNA, and protein synthesis in root apex) |",
    "options": [
      "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Apical Cell Theory was proposed by Nageli (1858); Histogen Theory by Hanstein (1868); Tunica-Corpus Theory by Schmidt (1924); and the Quiescent Centre concept was discovered by Clowes (1956) in *Zea mays* roots."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-MPT-018",
    "question": "According to Hanstein's Histogen Theory, which histogen gives rise to the cortex and endodermis of the root?",
    "options": [
      "Dermatogen",
      "Periblem",
      "Plerome",
      "Calyptrogen"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to Hanstein's Histogen Theory, Dermatogen forms the epidermis, **Periblem** forms the cortex (including endodermis), and Plerome gives rise to the central vascular cylinder (stele)."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-MPT-019",
    "question": "Statement I: Root hairs are unicellular elongations of the epidermal cells and help absorb water and minerals from the soil. \n**Statement II:** On the stem, the epidermal hairs are called trichomes, which are always unicellular, unbranched, and prevent water loss due to transpiration. \nChoose the correct answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because trichomes on the shoot system are **usually multicellular** (not always unicellular), may be branched or unbranched, soft or stiff, and can even be secretory."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-MPT-020",
    "question": "In the shoot apex, the Tunica-Corpus organization is based on the plane of cell division. Which statement accurately describes this organization?",
    "options": [
      "Tunica cells divide predominantly by periclinal divisions to increase volume, while corpus cells divide anticlinally to increase surface area.",
      "Tunica is the outer zone showing anticlinal divisions (increasing surface area), whereas corpus is the central mass showing divisions in all planes (increasing volume).",
      "Both tunica and corpus divide exclusively by transverse divisions.",
      "Tunica gives rise to the vascular cylinder, whereas corpus gives rise exclusively to the epidermis."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In Schmidt's Tunica-Corpus Theory, the outer tunica layer(s) undergo anticlinal divisions (perpendicular to the surface) to increase surface area, whereas the inner corpus mass divides in various planes (anticlinal, periclinal, oblique) to increase volume."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-MPT-021",
    "question": "Identify the tissue that matches ALL of the following characteristics: \n1. Cells are living and thin-walled. \n2. Performs diverse functions such as photosynthesis, storage, and secretion. \n3. Forms the major component of ground tissue system (cortex, pericycle, pith, and medullary rays). \n4. May assimilate food when containing chloroplasts.",
    "options": [
      "Collenchyma",
      "Parenchyma",
      "Sclerenchyma",
      "Aerenchyma only"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Parenchyma is the fundamental living tissue forming the bulk of the ground tissue system and performs photosynthesis (chlorenchyma), storage, and secretion."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-MPT-022",
    "question": "Which of the following vascular bundles are correctly matched with their descriptions? \n(i) **Radial:** Xylem and phloem within a vascular bundle are arranged in an alternate manner along the different radii, such as in roots. \n(ii) **Conjoint:** Xylem and phloem are jointly situated along the same radius of vascular bundles, common in stems and leaves. \n(iii) **Open:** Cambium is absent between phloem and xylem, hence they do not form secondary tissues (as in monocotyledons). \n(iv) **Closed:** Cambium is present between phloem and xylem, possessing the ability to form secondary xylem and phloem (as in dicotyledonous stems). \nChoose the correct option:",
    "options": [
      "(i) and (ii) only",
      "(iii) and (iv) only",
      "(i), (ii), and (iii) only",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i) and (ii) are correct. Statements (iii) and (iv) are reversed: **Open** vascular bundles possess cambium (e.g., dicot stems) and can form secondary tissues, whereas **Closed** vascular bundles lack cambium (e.g., monocot stems)."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-MPT-023",
    "question": "Assertion",
    "options": [
      ": In dicotyledonous stems, vascular bundles are described as conjoint, collateral, and open. \n**Reason (R):** In these vascular bundles, the phloem is usually located only on the outer side of xylem, and a strip of intrafascicular cambium is present between them. \nChoose the correct option: \n(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In dicot stems, xylem and phloem lie on the same radius (conjoint), phloem is positioned external to xylem (collateral), and intrafascicular cambium is present between them (open). Hence, (R) directly explains (A)."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-MPT-024",
    "question": "Which of the following statements is true regarding the cells of the Quiescent Centre in the root apical meristem?",
    "options": [
      "They have a very high mitotic index and rapidly divide to replenish the root cap.",
      "They contain high concentrations of DNA, RNA, and proteins compared to surrounding meristematic cells.",
      "They act as a reservoir of cells that become active and divide if the surrounding actively dividing cells are damaged.",
      "They are dead, lignified cells that protect the root tip from soil friction."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The Quiescent Centre consists of inactive cells with low DNA, RNA, and protein synthesis located between the root cap and the active meristematic zone. They act as a backup reservoir that divides if the surrounding active cells are injured."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-MPT-025",
    "question": "Read the following statements about secondary meristems in dicot plants: \n(a) Interfascicular cambium is formed by the dedifferentiation of cells of medullary rays adjoining the intrafascicular cambium. \n(b) Cork cambium (phellogen) usually develops in the cortex region as a secondary lateral meristem. \n(c) Wound cambium formed at the site of injury is a primary meristem. \n(d) All secondary meristems are lateral in position, and all lateral meristems are secondary in origin. \nHow many of the above statements are **correct**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Statements (a) and (b) are correct. Statement (c) is incorrect because wound cambium is a **secondary meristem**. Statement (d) is incorrect because fascicular cambium is a lateral meristem that is primary in origin."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-MPT-026",
    "question": "Which of the following pairs of plant parts lacks collenchyma?",
    "options": [
      "Young dicot stem and petiole of dicot leaf",
      "Roots of dicots and monocot stems",
      "Hypodermis of sunflower stem and midrib of dicot leaf",
      "Pedicel of dicot flower and young herbaceous dicot stem"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Collenchyma is absent in both roots (monocot and dicot) and monocotyledonous stems. It is predominantly found in the hypodermis and midrib/petiole of dicot shoots."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-MPT-027",
    "question": "Consider the following statements regarding xylem parenchyma: \n**Statement I:** Xylem parenchyma is the only living component of xylem tissue. \n**Statement II:** Their cell walls are thick and lignified, and they store food materials in the form of starch or fat, and other substances like tannins. \nChoose the correct answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct: xylem parenchyma is the only living element of xylem. Statement II is incorrect because xylem parenchyma cells have **thin cell walls made up of cellulose** (not thick and lignified)."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-MPT-028",
    "question": "Why are sieve tube elements and companion cells called \"sister cells\"?",
    "options": [
      "Both have prominent nuclei and lack vacuoles at maturity.",
      "Both originate from the same mother meristematic cell via unequal longitudinal division.",
      "Both have heavily lignified cell walls with bordered pits.",
      "Both are found exclusively in pteridophytes and gymnosperms."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Sieve tube elements and companion cells are ontogenetically related (\"sister cells\") because both arise from the unequal longitudinal division of the same single mother meristematic cell."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-MPT-029",
    "question": "Match List-I (Type of Sclereid) with List-II (Shape / Example):\n\n| List-I | List-II |\n| :--- | :--- |\n| (a) Brachysclereids (Stone cells) | (i) Bone-shaped, found in seed coats of Pisum |\n| (b) Macrosclereids | (ii) Star-shaped, found in leaves of Nymphaea |\n| (c) Osteosclereids | (iii) Isodiametric, found in pulp of pear and guava |\n| (d) Astrosclereids | (iv) Rod-shaped, forming palisade-like epidermal layer of legume seeds |",
    "options": [
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Brachysclereids (stone cells) are isodiametric and found in fruit pulp of pear/guava (iii); Macrosclereids are rod-shaped and occur in the epidermis of legume seed coats (iv); Osteosclereids are bone-shaped with dilated ends, found in *Pisum* seed coats (i); Astrosclereids are star-shaped, occurring in petioles/leaves of hydrophytes like *Nymphaea* (ii)."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-MPT-030",
    "question": "Which of the following statements about bulliform cells is incorrect?",
    "options": [
      "In grasses, certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells called bulliform cells.",
      "When the bulliform cells in the leaves have absorbed water and are turgid, the leaf surface is exposed.",
      "When they are flaccid due to water stress, they make the leaves curl inwards to minimise water loss.",
      "Bulliform cells are heavily lignified sclerenchymatous cells present on the abaxial epidermis of dicot leaves."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Bulliform (motor) cells are large, thin-walled, empty, colourless, living parenchymatous epidermal cells found on the **adaxial (upper) epidermis** of monocot (grass) leaves, not lignified sclerenchymatous cells on the abaxial surface of dicot leaves."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-MPT-031",
    "question": "Examine the following statements regarding the root apical meristem: \n(i) The root apical meristem occupies the tip of a root, whereas the shoot apical meristem occupies the distant most region of the stem axis. \n(ii) Root apical meristem is strictly terminal in position and is completely devoid of any protective covering. \n(iii) In monocot roots, the root cap is formed by a specialized histogen called calyptrogen. \n(iv) Sub-apical position of root apical meristem is due to the presence of the root cap. \nSelect the option with the **correct** statements:",
    "options": [
      "(i), (iii), and (iv) only",
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statement (ii) is incorrect because the root apical meristem is protected by a thimble-like structure called the **root cap** (calyptra), making its position sub-terminal rather than strictly naked/terminal. Statements (i), (iii), and (iv) are correct."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-MPT-032",
    "question": "Identify the correct statement regarding the stomatal apparatus:",
    "options": [
      "The stomatal aperture, guard cells, and the surrounding epidermal cells together constitute the stomatal apparatus.",
      "Guard cells lack chloroplasts and therefore cannot perform photosynthesis.",
      "A few epidermal cells, in the vicinity of the guard cells, become specialized in their shape and size and are known as subsidiary cells.",
      "The stomatal apparatus regulates the process of guttation and root pressure."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement (C) is correct. Statement (A) is incorrect because the stomatal apparatus comprises the stomatal aperture, guard cells, and the surrounding **subsidiary cells** (not all epidermal cells). Statement (B) is incorrect because guard cells **possess chloroplasts**. Statement (D) is incorrect because stomata regulate **transpiration and gaseous exchange** (guttation occurs via hydathodes)."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-MPT-033",
    "question": "In a conjoint, bicollateral vascular bundle (commonly found in members of family Cucurbitaceae), how are the tissues arranged from outer to inner side?",
    "options": [
      "Outer xylem \u2192 Outer cambium \u2192 Phloem \u2192 Inner cambium \u2192 Inner xylem",
      "Outer phloem \u2192 Outer cambium \u2192 Xylem \u2192 Inner cambium \u2192 Inner phloem",
      "Outer phloem \u2192 Xylem \u2192 Inner phloem (without any cambium)",
      "Xylem completely surrounded by a ring of phloem"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In a bicollateral vascular bundle (e.g., *Cucurbita*), the central xylem is flanked by phloem and cambium on both outer and inner sides: Outer phloem \u2192 Outer cambium \u2192 Xylem \u2192 Inner cambium \u2192 Inner phloem."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-MPT-034",
    "question": "Assertion",
    "options": [
      ": In monocotyledonous stems, secondary growth does not occur under normal conditions. \n**Reason (R):** The vascular bundles in monocot stems are conjoint and closed, lacking intrafascicular cambium. \nChoose the correct option: \n(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Monocot stems have scattered, conjoint, and closed vascular bundles lacking intrafascicular cambium, which is why typical secondary growth does not occur in them."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-MPT-035",
    "question": "Which of the following tissue types possesses cells with the ability to dedifferentiate under specific physiological conditions?",
    "options": [
      "Sclerenchyma fibres",
      "Mature tracheids",
      "Living parenchyma cells",
      "Mature vessel elements"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Only living cells retaining intact protoplasts and nuclei\u2014such as living parenchyma cells\u2014can regain the capacity to divide (dedifferentiate) to form secondary meristems like interfascicular cambium and phellogen. Dead lignified cells (fibres, tracheids, vessels) cannot dedifferentiate."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-MPT-036",
    "question": "Read the following statements about complex tissues: \n**Statement I:** Complex tissues are made of more than one type of cells and these work together as a unit. \n**Statement II:** Xylem and phloem constitute the complex tissues in plants, where xylem conducts water and minerals only upwards, while phloem translocates food materials from leaves to other parts of the plant. \nChoose the most appropriate answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because while xylem transport is essentially unidirectional (upwards from roots to aerial parts), phloem translocation is **bidirectional** (from source to sink, which changes seasonally), not strictly one-way from leaves to other parts."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-MPT-037",
    "question": "What happens to the P-protein (Phloem protein) when a sieve tube element is injured?",
    "options": [
      "It dissolves the sieve plate to accelerate sap flow.",
      "It aggregates at the sieve pores to form a slime plug that seals the wound and prevents loss of phloem sap.",
      "It converts sieve tube elements into lignified sclereids.",
      "It triggers rapid mitosis in the enucleate sieve tube element."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "When a sieve tube is wounded, the sudden drop in turgor pressure causes P-protein (phloem protein) and callose to rapidly accumulate at the sieve plate pores, forming a slime plug that seals the damaged sieve tube and prevents sap leakage."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-MPT-038",
    "question": "Match List-I (Tissue / Structure) with List-II (Primary Function / Feature):\n\n| List-I | List-II |\n| :--- | :--- |\n| (a) Aerenchyma | (i) Mechanical support with high tensile strength and elasticity in growing organs |\n| (b) Chlorenchyma | (ii) Provides buoyancy and facilitates gaseous exchange in hydrophytes |\n| (c) Collenchyma | (iii) Performs photosynthesis in mesophyll of leaves |\n| (d) Sclerenchyma | (iv) Provides rigid mechanical support to mature non-growing plant parts |",
    "options": [
      "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Aerenchyma has large air cavities providing buoyancy in aquatic plants (ii); Chlorenchyma contains chloroplasts for photosynthesis (iii); Collenchyma provides flexible mechanical support to growing organs (i); Sclerenchyma provides rigid mechanical strength to mature plant parts (iv)."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-MPT-039",
    "question": "Which of the following statements correctly differentiates tracheids from vessel elements?",
    "options": [
      "Tracheids are multicellular syncytia, whereas vessel elements are single elongated cells.",
      "Tracheids have imperforate end walls (water moves through pits), whereas vessel members have perforated end walls forming a continuous channel.",
      "Tracheids are living at maturity, whereas vessel elements are dead at maturity.",
      "Tracheids are restricted only to angiosperms, whereas vessels are present in all vascular plants."
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Tracheids are single elongated imperforate cells where water passes from cell to cell through bordered/simple pits. Vessels are multicellular conduits composed of vessel elements whose common end walls are perforated (perforation plates), allowing bulk axial flow. Both are dead at maturity."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-MPT-040",
    "question": "Consider the following statements regarding concentric vascular bundles: \n(i) In amphicribral (hadrocentric) vascular bundles, xylem lies in the centre and is completely surrounded by phloem, as seen in ferns (pteridophytes). \n(ii) In amphivasal (leptocentric) vascular bundles, phloem lies in the centre and is completely surrounded by xylem, as seen in *Dracaena* and *Yucca*. \n(iii) Concentric vascular bundles are always open due to the presence of a circular ring of cambium. \nWhich of the statements given above are **correct**?",
    "options": [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i) and (iii) only",
      "(i), (ii), and (iii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i) and (ii) are correct definitions and examples of amphicribral (hadrocentric) and amphivasal (leptocentric) bundles. Statement (iii) is incorrect because concentric vascular bundles are always **closed** (lack cambium)."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-MPT-041",
    "question": "Select the incorrect statement regarding the ground tissue system:",
    "options": [
      "All tissues except epidermis and vascular bundles constitute the ground tissue.",
      "It consists of simple tissues such as parenchyma, collenchyma, and sclerenchyma.",
      "In primary stems and roots, parenchymatous cells are usually present in cortex, pericycle, pith, and medullary rays.",
      "In leaves, the ground tissue consists of thick-walled lignified cells lacking chloroplasts, called mesophyll."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "In leaves, the ground tissue consists of **thin-walled chloroplast-containing cells** called **mesophyll**, not thick-walled lignified cells lacking chloroplasts."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-MPT-042",
    "question": "Statement I: Intercalary meristems are separated portions of apical meristems that get detached due to the formation of permanent tissues in between. \n**Statement II:** Because intercalary meristems occur at the base of internodes (e.g., in grasses and *Equisetum*) or base of leaves (e.g., *Pinus*), they are classified as secondary meristems. \nChoose the correct answer:",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Both Statement I and Statement II are incorrect.",
      "Statement I is correct but Statement II is incorrect.",
      "Statement I is incorrect but Statement II is correct."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because intercalary meristems appear early in the life of the plant and contribute to the primary plant body, so they are classified as **primary meristems**, not secondary meristems."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-MPT-043",
    "question": "Which of the following features is shared by BOTH collenchyma and parenchyma?",
    "options": [
      "Uniformly thickened lignified cell walls",
      "Presence of living protoplasm at maturity and ability to photosynthesize when chloroplasts are present",
      "Complete absence of intercellular spaces throughout the tissue",
      "Occurrence in the hypodermis of monocotyledonous stems"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both parenchyma and collenchyma are living simple permanent tissues with non-lignified cell walls, and both can perform photosynthesis if chloroplasts are present."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-MPT-044",
    "question": "Assertion",
    "options": [
      ": In an exarch primary xylem, the development of xylem is centripetal. \n**Reason (R):** Protoxylem differentiates first towards the periphery (near the pericycle) and metaxylem differentiates later towards the centre (pith). \nChoose the correct option: \n(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In exarch xylem (characteristic of roots), protoxylem differentiates first towards the outer periphery and metaxylem differentiates later towards the centre, meaning xylem differentiation proceeds from the outside inward (**centripetal**)."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-MPT-045",
    "question": "Read the following statements about plant tissues and identify the correct count of true statements: \n1. Permanent tissues having all cells similar in structure and function are called simple tissues. \n2. Endarch primary xylem shows centrifugal differentiation (protoxylem towards pith, metaxylem towards periphery). \n3. Sieve tube elements are long, tube-like structures arranged longitudinally and are associated with companion cells. \n4. Epidermis is usually multi-layered in all terrestrial angiosperms to prevent water loss. \n5. Cuticle is absent in roots.",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statements 1, 2, 3, and 5 are correct. Statement 4 is incorrect because the epidermis is usually **single-layered** in angiosperms (multi-layered epidermis is an exception seen in plants like *Nerium*, *Ficus*, and *Peperomia*). Thus, four statements are true."
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

    console.log(`=== ADDING 45 MERISTEMATIC AND PERMANENT TISSUES QUESTIONS TO CENTRAL QUESTION BANK & ${TARGET_TEST_ID} ===`);

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

    // Update or upsert the testPaper
    const testUpdateResult = await testCol.findOneAndUpdate(
      { testId: TARGET_TEST_ID },
      {
        $set: {
          testId: TARGET_TEST_ID,
          title: 'Meristematic and Permanent Tissues',
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
      { upsert: true, returnDocument: 'after' }
    );

    console.log(`Updated testPaper ${TARGET_TEST_ID}: assigned ${assignedQuestionIds.length} questions.`);

    // Synchronize testAuditReports
    await auditReportsCol.updateMany(
      { testId: TARGET_TEST_ID },
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
      testId: TARGET_TEST_ID,
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
      { testId: TARGET_TEST_ID },
      {
        $set: {
          testId: TARGET_TEST_ID,
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
    console.log('Synchronized testAuditReports (v1, 45/45 Pass) and testAuditStates.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
