import fs from 'fs';
import path from 'path';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const anatomy45 = [
  // Q1
  {
    question_id: 1,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Meristematic vs Permanent Tissues (Collenchyma & Parenchyma)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Collenchyma differs from parenchyma in having:",
    options: [
      "Living protoplasm at maturity",
      "Cell wall thickenings localized at corners due to cellulose, hemicellulose, and pectin",
      "Uniform lignified secondary cell walls",
      "Large conspicuous intercellular spaces"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Collenchyma consists of living cells with unevenly thickened primary walls localized particularly at corners (junctions) owing to heavy deposition of cellulose, hemicellulose, and pectin. Unlike sclerenchyma, collenchyma lacks lignin and possesses living protoplasts with no conspicuous intercellular spaces."
  },

  // Q2
  {
    question_id: 2,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Complex Permanent Tissues (Phloem Components)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following cells or tissues in a plant is dead at functional maturity?",
    options: [
      "Sieve tube element",
      "Companion cell",
      "Phloem parenchyma",
      "Phloem fiber (bast fiber)"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Sieve tube elements, companion cells, and phloem parenchyma are all living components of angiospermic phloem. Phloem fibers (bast fibers) develop thick, lignified secondary walls and lose their protoplasm at maturity, becoming dead sclerenchymatous mechanical elements."
  },

  // Q3
  {
    question_id: 3,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Gymnosperm vs Angiosperm Phloem (Sieve Cells & Albuminous Cells)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In gymnosperms, the conducting elements of phloem lack:",
    options: [
      "Albuminous cells and sieve cells",
      "Sieve tubes and companion cells",
      "Sieve cells and phloem parenchyma",
      "Albuminous cells and companion cells"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Gymnosperms lack true sieve tube elements and companion cells. Instead, their phloem conduction relies on primitive sieve cells associated physiologically with specialized parenchymatous cells called albuminous cells (Strasburger cells)."
  },

  // Q4
  {
    question_id: 4,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Apical Meristems & Axillary Bud Origin",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Axillary buds and terminal buds are derived from the activity of:",
    options: [
      "Lateral meristem",
      "Intercalary meristem",
      "Shoot apical meristem",
      "Secondary meristem"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "During the primary elongation of the stem, cells left behind from the shoot apical meristem (SAM) form axillary buds in the axils of leaves, capable of forming branches or flowers."
  },

  // Q5
  {
    question_id: 5,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Radial Vascular Bundles in Roots",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Radial vascular bundles, where xylem and phloem occur in separate radii in an alternating manner, are characteristic of:",
    options: [
      "Monocot stems",
      "Dicot leaves",
      "Roots of both dicots and monocots",
      "Dicot stems only"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "In roots (both dicotyledonous and monocotyledonous), xylem and phloem strands are arranged alternately along different radii. This configuration is known as radial. Conjoint arrangements occur in stems and leaves."
  },

  // Q6
  {
    question_id: 6,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Endodermis & Casparian Strip Composition",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The presence of a casparian strip in the endodermal cells of roots prevents apoplastic movement of water because of the deposition of:",
    options: [
      "Cutin",
      "Suberin",
      "Lignin",
      "Pectin"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The Casparian strip is a continuous tangential and radial band of impermeable, waxy material called suberin located in root endodermal cell walls, forcing water from the apoplast into the symplast."
  },

  // Q7
  {
    question_id: 7,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Secondary Lateral Meristems (Vascular Cambium)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following is an example of a secondary lateral meristem that produces secondary vascular tissues?",
    options: [
      "Phellogen (cork cambium)",
      "Intercalary meristem",
      "Vascular cambium in dicot roots and stems",
      "Apical meristem"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Vascular cambium produces secondary xylem and secondary phloem (secondary vascular tissues). Phellogen (cork cambium) is also a secondary lateral meristem, but it produces periderm (phellem and phelloderm), not secondary vascular tissues."
  },

  // Q8
  {
    question_id: 8,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Vascular Bundle Types (Conjoint, Collateral, Open)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A conjoint, collateral, and open vascular bundle is typically found in:",
    options: [
      "Monocot stem",
      "Dicot stem",
      "Monocot root",
      "Dicot root"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Dicot stems possess vascular bundles that are conjoint (xylem and phloem on the same radius), collateral (phloem on the outside, xylem on the inside), and open (strip of intrafascicular cambium present between xylem and phloem, enabling secondary growth)."
  },

  // Q9
  {
    question_id: 9,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Sclerenchyma & Sclereids Distribution",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Sclereids are commonly found in all of the following EXCEPT:",
    options: [
      "Pulp of fruits like guava, pear, and sapota",
      "Seed coats of legumes",
      "Leaves of tea",
      "Petioles of young growing dicot herbaceous seedlings"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Sclereids provide gritty texture to pear/guava/sapota pulp, hardness to legume seed coats, and rigidity to tea leaves. Young growing petioles and stems rely on collenchyma for flexible mechanical support without restricting growth."
  },

  // Q10
  {
    question_id: 10,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Secondary Growth (Heartwood vs Sapwood)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The peripheral region of secondary xylem in an old woody tree trunk that is lighter in color and actively conducts water is known as:",
    options: [
      "Heartwood (Duramen)",
      "Sapwood (Alburnum)",
      "Early wood",
      "Late wood"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In older woody trunks, the peripheral, lighter-colored zone of secondary xylem that remains functional in conducting water and mineral sap is called sapwood (alburnum). The non-conducting central core is heartwood (duramen)."
  },

  // Q11
  {
    question_id: 11,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Epidermal Tissue System (Bulliform Cells)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Bulliform or motor cells are large, empty, colorless epidermal cells found primarily on:",
    options: [
      "The abaxial surface of dicot leaves",
      "The adaxial surface of grasses / monocot leaves",
      "The hypodermis of dicot stems",
      "The bundle sheath of C4 plants"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Bulliform (motor) cells are large, vacuolated, colorless epidermal cells found on the upper (adaxial) surface of grass leaves. When flaccid due to water stress, they cause leaves to roll inward to minimize transpiration."
  },

  // Q12
  {
    question_id: 12,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Pericycle Activity in Dicot Roots",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In a mature dicot root, pericycle cells give rise to:",
    options: [
      "Lateral roots only",
      "Portions of the vascular cambium and cork cambium",
      "Lateral roots and a part of the vascular cambium",
      "Root hairs and endodermis"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "In dicot roots, the pericycle is meristematically versatile: its cells dedifferentiate to give rise to endogenous lateral roots and also form the portion of the vascular cambium strip situated directly outside the protoxylem bundles."
  },

  // Q13
  {
    question_id: 13,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Anatomy of Monocot Stem vs Dicot Stem",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following anatomical features clearly distinguishes a monocot stem from a dicot stem?",
    options: [
      "Presence of a well-differentiated pith and cortex",
      "Vascular bundles scattered in ground tissue, enclosed by a sclerenchymatous sheath",
      "Open vascular bundles arranged in a ring",
      "Presence of collenchymatous hypodermis"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Monocot stems lack a ring arrangement and distinct pith/cortex boundaries; instead, numerous closed, conjoint vascular bundles are scattered throughout the parenchymatous ground tissue, each enveloped by a bundle sheath of sclerenchyma."
  },

  // Q14
  {
    question_id: 14,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Sieve Tube Elements & Companion Cell Plasmodesmata",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The functional connection between a mature sieve tube element and its adjacent companion cell is maintained through:",
    options: [
      "Casparian strips",
      "Bordered pits",
      "Pit fields between their common longitudinal walls",
      "Continuous open pores of the sieve plate"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Sieve tube elements are enucleated and metabolically managed by companion cells. This vital physiological intimacy is maintained through extensive plasmodesmatal connections residing in pit fields across their shared thin longitudinal walls."
  },

  // Q15
  {
    question_id: 15,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Tyloses & Heartwood Occlusion",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Heartwood does NOT conduct water because:",
    options: [
      "Its cells are thin-walled and non-lignified",
      "Tracheary elements are blocked by tyloses and deposits of organic compounds",
      "It is composed entirely of living parenchyma",
      "It lacks vessels completely"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "As sapwood transforms into heartwood, adjacent axial parenchyma cells send balloon-like bladder ingrowths called tyloses into vessel lumens via pits. These, along with tannins, resins, and gums, completely plug the vessels, rendering them non-conducting."
  },

  // Q16
  {
    question_id: 16,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Periderm Structure (Phellem, Phellogen, Phelloderm)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Periderm comprises which of the following three layers?",
    options: [
      "Phellem, phellogen, and phelloderm",
      "Epidermis, cortex, and endodermis",
      "Bark, secondary xylem, and secondary phloem",
      "Cork, vascular cambium, and secondary cortex"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Periderm is the collective secondary protective tissue replacing ruptured epidermis, comprising the cork cambium (phellogen), the outer dead protective cork (phellem), and the inner living secondary cortex (phelloderm)."
  },

  // Q17
  {
    question_id: 17,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Endarch vs Exarch Xylem Arrangement",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Endarch xylem arrangement, where protoxylem lies toward the center and metaxylem lies toward the periphery, is found in:",
    options: [
      "Roots of angiosperms",
      "Stems of angiosperms",
      "Both roots and leaves",
      "Gymnosperm roots only"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In stems, protoxylem develops toward the interior (centrifugal differentiation / endarch). In roots, protoxylem points outward toward the pericycle (centripetal differentiation / exarch)."
  },

  // Q18
  {
    question_id: 18,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Lenticels & Stem Gaseous Exchange",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Lenticels are lens-shaped openings in the bark that function in:",
    options: [
      "Translocation of food",
      "Gaseous exchange between internal tissue and atmosphere",
      "Secretion of resins and gums",
      "Guttation"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Lenticels are aerating pores produced when phellogen cuts off loose, parenchymatous complementary cells with large intercellular spaces that rupture the cork, permitting gas exchange in woody stems."
  },

  // Q19
  {
    question_id: 19,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Annual Rings & Climate Seasonality",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "How many annual rings will be visible in the trunk of a tree growing in a region with uniform, seasonless tropical climate throughout the year?",
    options: [
      "Hundreds of distinct rings",
      "Distinct alternating early and late wood rings",
      "Very indistinct or no clear annual rings",
      "Two rings per year"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Annual rings result from seasonal fluctuations in cambial activity (wide vessels in favorable spring vs. narrow vessels in autumn). In tropical climates where temperature, humidity, and rainfall remain relatively uniform year-round, cambial activity lacks cyclical rhythm, resulting in diffuse or indistinct rings."
  },

  // Q20
  {
    question_id: 20,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Isobilateral Leaf Anatomy (Mesophyll)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Mesophyll in a typical isobilateral (monocot) leaf:",
    options: [
      "Is differentiated into palisade and spongy parenchyma",
      "Is not differentiated into palisade and spongy layers",
      "Lacks chloroplasts",
      "Is composed entirely of sclerenchymatous cells"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In isobilateral (monocot) leaves, both surfaces receive roughly equal sunlight; hence, the mesophyll consists of fairly uniform, rounded chlorenchyma cells without distinct division into palisade and spongy parenchyma."
  },

  // Q21
  {
    question_id: 21,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Dicot Root Vascular Strands (Diarch to Tetrarch)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In a dicot root, the number of xylem and phloem patches is usually:",
    options: [
      "2 to 4 (diarch to tetrarch)",
      "More than 6 (polyarch)",
      "8 to 12",
      "15 to 20"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Dicot roots characteristically possess fewer radial vascular bundles—typically 2 to 4 (rarely up to 6, diarch to hexarch). Monocot roots are polyarch (more than 6 xylem strands)."
  },

  // Q22
  {
    question_id: 22,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Plant Development (Dedifferentiation & Secondary Meristems)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A plant tissue formed by the process of dedifferentiation is:",
    options: [
      "Apical meristem",
      "Phellogen (cork cambium)",
      "Phelloderm",
      "Secondary xylem"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Phellogen arises when differentiated, mature cortical parenchyma cells regain their capacity to divide by dedifferentiation. Phelloderm and secondary xylem arise by redifferentiation; apical meristems are primary."
  },

  // Q23
  {
    question_id: 23,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Epidermal Appendages (Stem Trichomes)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Trichomes on the stem of dicotyledonous plants are usually:",
    options: [
      "Unicellular and non-secretory",
      "Multicellular, branched or unbranched, and may be secretory",
      "Endogenous in origin",
      "Composed of dead, lignified cells"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "While root hairs are unicellular epidermal extensions, stem trichomes are almost invariably multicellular, can be branched or unbranched, glandular or non-glandular, and help curb water loss."
  },

  // Q24
  {
    question_id: 24,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Vascular Cambium Activity Differential",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "During secondary growth in a dicot stem, the activity of vascular cambium is:",
    options: [
      "Greater on the outer side than on the inner side",
      "Equal on both the inner and outer sides",
      "Greater on the inner side than on the outer side",
      "Strictly confined to the production of medullary rays"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The vascular cambium is physiologically much more active on its inner face toward the center, forming 8 to 10 times more secondary xylem than secondary phloem on its outer face."
  },

  // Q25
  {
    question_id: 25,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Monocot Root Anatomical Features",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Read the following statements regarding monocot roots:\nI. Xylem bundles are usually more than six (polyarch).\nII. Pith is large and well-developed.\nIII. Secondary growth commonly occurs through cork cambium.\n\nWhich of the above statements is/are correct?",
    options: [
      "I and II only",
      "II and III only",
      "I and III only",
      "I, II, and III"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Monocot roots are typically polyarch (xylem strands > 6) and have a large, conspicuous parenchymatous pith. However, they do not undergo secondary growth (statement III is incorrect) because they lack both vascular cambium and cork cambium."
  },

  // Q26
  {
    question_id: 26,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Origins of Secondary Meristems (Dedifferentiation)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Consider the following statements regarding the origin of secondary meristems:\nI. In a dicot stem, intrafascicular cambium is primary in origin, while interfascicular cambium is secondary in origin formed by dedifferentiation of medullary rays.\nII. In a dicot root, the entire vascular cambium is secondary in origin, arising partly from pericycle and partly from conjunctive parenchyma beneath phloem.\nIII. Cork cambium (phellogen) in both stems and roots is exclusively derived from the epidermis.\n\nWhich of the statements given above are correct?",
    options: [
      "I and II only",
      "II and III only",
      "I and III only",
      "I, II, and III"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Statement I is correct: fascicular cambium originates from primary procambium, whereas interfascicular cambium dedifferentiates from medullary rays. Statement II is correct: root vascular cambium is entirely secondary, derived from conjunctive tissue beneath phloem and pericycle above protoxylem. Statement III is incorrect: phellogen in roots originates in the pericycle (not epidermis), and in stems it usually arises in the subepidermal or outer cortical layers."
  },

  // Q27
  {
    question_id: 27,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Specimen Identification (Monocot Root Anatomy)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "An investigator made a transverse section of an unknown mature plant organ and observed the following features:\n- Distinct exarch xylem with 8 separate radial xylem strands alternating with phloem strands\n- A well-developed, parenchymatous central pith\n- Casparian strips clearly visible in endodermal cells\n- Complete absence of secondary growth or cambial strip\n\nThis specimen is definitively:",
    options: [
      "Dicot root",
      "Monocot root",
      "Dicot stem",
      "Monocot stem"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Exarch xylem (metaxylem toward center) with alternating radial bundles confirms it is a root. A count of 8 xylem bundles (polyarch: > 6), a well-developed central pith, and the complete absence of secondary growth clearly diagnose a monocot root (dicot roots are typically 2–4 arch with little or no pith)."
  },

  // Q28
  {
    question_id: 28,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Stomatal Apparatus Mechanics (Radial Micellation)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "With regard to the stomatal apparatus, which of the following statements correctly explains the mechanics of stomatal opening?",
    options: [
      "Radial orientation of cellulose microfibrils in guard cell walls facilitates lateral expansion rather than longitudinal elongation",
      "Cellulose microfibrils are oriented radially, allowing the outer thin walls to bulge outward and pull the inner thick elastic walls apart when turgor increases",
      "Longitudinal arrangement of microfibrils causes uniform contraction of both inner and outer guard cell walls",
      "Pectocellulosic wall thickenings located uniformly along both walls drive pore dilation under flaccid conditions"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Radial micellation acts like structural ribs: because microfibrils prevent expansion in girth, increased turgidity forces guard cells to lengthen. Since their inner walls flanking the pore are thick and inelastic, the stretching of the thin, flexible outer wall pulls the inner wall outward, opening the aperture."
  },

  // Q29
  {
    question_id: 29,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Enucleated Sieve Elements & Metabolic Companion Support",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Sieve tube elements are unique among living plant cells because:",
    options: [
      "They lack protoplasm and a cell wall at maturity",
      "They retain a fully functioning nucleus and mitochondria but lack ribosomes",
      "They lack a nucleus, vacuole, and ribosomes at functional maturity, depending entirely on companion cells via plasmodesmatal pit fields for metabolic maintenance",
      "They are derived from different cambial initials than their sister companion cells"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Sieve tube elements undergo autolysis of nucleus, tonoplast, and ribosomes to minimize hydraulic resistance to sap flow. They remain living only through symplastic pit-field connections with sister companion cells (derived from the same mother cell) that provide ATP, enzymes, and transcriptional products."
  },

  // Q30
  {
    question_id: 30,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Fusiform vs Ray Initials in Vascular Cambium",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In a woody dicot stem undergoing active secondary growth, the vascular cambium consists of fusiform initials and ray initials. What is the primary operational difference between their derivatives?",
    options: [
      "Fusiform initials form axial system tissues (vessels, tracheids, axial parenchyma, fibers); ray initials form radial system tissues (vascular rays for radial translocation)",
      "Fusiform initials form only secondary xylem; ray initials form only secondary phloem",
      "Fusiform initials form phellem; ray initials form phelloderm",
      "Fusiform initials divide only anticlinally; ray initials divide only periclinally"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Vascular cambium is a bitypic meristem: vertically oriented, elongated fusiform initials divide periclinally to produce the longitudinal transport elements (xylem and phloem elements, fibers, and axial parenchyma), whereas isodiametric ray initials produce radial parenchymatous ray cells responsible for horizontal storage and lateral conduction."
  },

  // Q31
  {
    question_id: 31,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Gymnosperm Wood & Phloem Anatomy",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Read the following two statements:\nStatement I: Gymnosperms do not possess vessels in their xylem, with the notable exception of order Gnetales.\nStatement II: Sieve cells in gymnosperms differ from angiospermic sieve tubes in having localized sieve plates on their end walls and being associated with companion cells.\n\nSelect the correct evaluation:",
    options: [
      "Both Statement I and Statement II are correct",
      "Statement I is correct, but Statement II is incorrect",
      "Statement I is incorrect, but Statement II is correct",
      "Both Statement I and Statement II are incorrect"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Gymnosperms lack vessels (except advanced Gnetales: Gnetum, Ephedra, Welwitschia). Statement II is incorrect because gymnosperms possess primitive sieve cells (with diffuse sieve areas across their lateral walls rather than localized end-plate sieve tubes) and are associated with albuminous cells, lacking true companion cells."
  },

  // Q32
  {
    question_id: 32,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Order of Anatomical Layers in Mature Woody Stem",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following sequences describes the anatomical layers encountered from the exterior to the interior of a mature woody stem?",
    options: [
      "Epidermis → Phellogen → Phellem → Phelloderm → Secondary phloem → Cambium → Secondary xylem",
      "Phellem → Phellogen → Phelloderm → Primary cortex → Pericycle → Secondary phloem → Cambium → Secondary xylem",
      "Phellem → Phelloderm → Phellogen → Secondary phloem → Secondary xylem → Cambium",
      "Phellogen → Phellem → Phelloderm → Secondary xylem → Cambium → Secondary phloem"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Cork (phellem) forms the outermost boundary. Beneath it lies cork cambium (phellogen), followed by secondary cortex (phelloderm), residual primary cortex, pericycle, secondary phloem, the vascular cambium zone, and finally secondary xylem toward the center."
  },

  // Q33
  {
    question_id: 33,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Heartwood Properties & Durability",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Heartwood differs from sapwood in that heartwood:",
    options: [
      "Is physiologically active in ascending water conduction and contains non-lignified vessels",
      "Has vessels occluded by tyloses and is heavily impregnated with tannins, resins, and aromatic oils, rendering it decay-resistant",
      "Lacks fibers and is composed entirely of dead secondary phloem",
      "Lies peripheral to sapwood and retains functional living parenchyma cells"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Heartwood (duramen) consists of central, non-conducting tracheary elements permanently blocked by tyloses and loaded with polyphenols, terpenes, resins, and tannins, imparting dark coloration, durability, and resistance to microbes and termites."
  },

  // Q34
  {
    question_id: 34,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Biophysics of Bulliform Cell Inward Leaf Rolling",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Bulliform cells in grasses cause the inward rolling of leaves during drought stress. What is the biophysical mechanism responsible for this response?",
    options: [
      "Plasmolysis and water loss from large, thin-walled adaxial epidermal cells reduce their turgidity, allowing the leaf to curl and minimize transpirational surface area",
      "Accumulation of potassium ions in abaxial parenchyma causes swelling, forcing the lamina to fold upward",
      "Sclerenchymatous sheath extension contraction along vascular bundles forces the margin downward",
      "Lignification of the lower hypodermis prevents expansion while the upper surface continues uninhibited growth"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Bulliform cells are hygroscopic sensors. When abundant water is present, they absorb water, become turgid, and unfold the blade. Under drought, they lose water, go flaccid, and allow mechanical tension to roll the lamina inward, trapping humid air and shielding stomata."
  },

  // Q35
  {
    question_id: 35,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Technical Definition of Bark",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In non-technical terms, 'bark' refers to all tissues outside the vascular cambium. Technically, bark comprises:",
    options: [
      "Periderm and secondary xylem",
      "Periderm and secondary phloem (along with any persistent primary cortex and pericycle)",
      "Phellem and phellogen only",
      "Cork, cork cambium, and primary xylem"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Bark is a non-technical operational term denoting all tissues lying external to the vascular cambium ring. It encompasses the periderm (outer bark) and secondary phloem plus any cortex/pericycle residues (inner bark)."
  },

  // Q36
  {
    question_id: 36,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Xylem Ontogeny: Stem Endarch vs Root Exarch",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "How does the xylem development sequence in the stem differ from that in the root?",
    options: [
      "In stems, protoxylem differentiates toward the center (endarch / centrifugal maturation); in roots, protoxylem differentiates toward the periphery (exarch / centripetal maturation)",
      "In stems, metaxylem differentiates toward the center (exarch); in roots, protoxylem lies toward the center (endarch)",
      "Both stems and roots exhibit mesarch xylem arrangement where protoxylem is flanked on both sides by metaxylem",
      "In stems, xylem is exarch and centrifugal; in roots, xylem is endarch and centripetal"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In stems, the first formed xylem (protoxylem) lies near the center with newer metaxylem developing outward (centrifugal = endarch). In roots, protoxylem lies near the outer edge adjacent to the pericycle and differentiates inwards towards the axis (centripetal = exarch)."
  },

  // Q37
  {
    question_id: 37,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Diagnostic Cell Wall Attributes of Plant Tissues",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Match the mechanical/protective tissue in Column I with its diagnostic cell wall attribute in Column II:\n\n| Column I | Column II |\n| :--- | :--- |\n| A. Collenchyma | 1. Suberized secondary wall impervious to water |\n| B. Cork (Phellem) | 2. Uniformly thickened, highly lignified secondary wall |\n| C. Sclerenchyma | 3. Localized pectin, hemicellulose, and cellulose at corners |\n| D. Endodermis | 4. Tangential and radial suberin Casparian strips |",
    options: [
      "A-3, B-1, C-2, D-4",
      "A-2, B-4, C-3, D-1",
      "A-3, B-4, C-2, D-1",
      "A-1, B-3, C-4, D-2"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Collenchyma: Corners thickened with pectin/hemicellulose/cellulose (3).\nCork: Walls heavily impregnated with suberin (1).\nSclerenchyma: Uniform, heavily lignified walls with simple or bordered pits (2).\nEndodermis: Possesses suberized Casparian strips on radial/transverse walls (4)."
  },

  // Q38
  {
    question_id: 38,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Spring Wood vs Autumn Wood Characteristics",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "During early spring, temperate trees produce 'spring wood' (early wood), whereas in late summer they produce 'autumn wood' (late wood). Spring wood is characterized by:",
    options: [
      "Narrow xylem vessels with higher density and darker color",
      "Wide vessel lumens produced under high cambial activity, lower density, and lighter color",
      "Complete absence of tracheary elements due to dormancy",
      "High density of fibers and predominantly suberized parenchyma"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In spring, vigorous growth and high transpiration demand stimulate cambium to divide rapidly and form numerous wide vessels with thin walls (spring/early wood), appearing lighter in color and with lower physical density than the dense, narrow-vesseled autumn/late wood."
  },

  // Q39
  {
    question_id: 39,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Endogenous vs Exogenous Organogenesis",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following sets of cells represent endogenous vs exogenous origins during development?",
    options: [
      "Lateral roots arise endogenously from the pericycle; stem branches arise exogenously from axillary buds (cortex/epidermis)",
      "Lateral roots arise exogenously from root hairs; stem branches arise endogenously from pith",
      "Both lateral roots and stem branches are strictly endogenous from the vascular cambium",
      "Both lateral roots and stem branches are strictly exogenous from epidermal initial cells"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Lateral roots must push through the cortex and epidermis because their primordia originate deep within the root in the pericycle (endogenous). In contrast, stem shoots and vegetative branches originate from superficial axillary bud tissues of the cortex and epidermis (exogenous)."
  },

  // Q40
  {
    question_id: 40,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Apoplast to Symplast Transition via Casparian Strip",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The Casparian strip forces water and dissolved mineral solutes to transition from the:",
    options: [
      "Symplast into the apoplast across the outer pericycle boundary",
      "Apoplast into the symplast across the selectively permeable plasma membrane of endodermal cells",
      "Vacuolar pathway directly into the vessel lumen via xylem fibers",
      "Phloem companion cells into the tracheary elements via pit pairs"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Water moving passively through cell walls and intercellular spaces (apoplast) hits the suberized Casparian strip. Because it cannot cross this hydrophobic barrier, water and dissolved minerals are forced to cross the plasma membrane into the cytoplasm (symplast), ensuring checkpoint selectivity by transport proteins."
  },

  // Q41
  {
    question_id: 41,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Absence of Secondary Growth in Monocot Stems",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "What explains why monocot stems rarely show standard secondary growth by a vascular cambium?",
    options: [
      "Monocot stems have open vascular bundles lacking cambial initials between xylem and phloem",
      "Vascular bundles in monocots are closed (lack intrafascicular cambium) and scattered irregularly throughout the ground tissue without a distinct cambial ring formation",
      "Monocot stems possess only dead parenchyma cells in their ground tissue incapable of dedifferentiation",
      "Monocots lack xylem and phloem vessels altogether, relying exclusively on tracheids"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Monocot stems lack a continuous circular ring of vascular bundles, and their individual bundles are closed (procambium is completely consumed during differentiation, leaving no intrafascicular cambium). Thus, no cohesive vascular cambium ring can be established."
  },

  // Q42
  {
    question_id: 42,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Dual-Potency of Dicot Root Pericycle",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Consider the following statements:\nAssertion (A): The pericycle in dicot roots is a dual-potency tissue.\nReason (R): Cells of the dicot root pericycle dedifferentiate to give rise to both lateral root primordia and a portion of the secondary vascular cambium opposite the protoxylem.\n\nSelect the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The pericycle in dicot roots demonstrates dual competence: it retains organogenic capacity (forming endogenous lateral root primordia) and meristematic capacity (dedifferentiating to establish parts of the vascular cambium wavy ring opposite the protoxylem)."
  },

  // Q43
  {
    question_id: 43,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Bundle Sheath Extensions in Dorsiventral Leaves",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In a dorsiventral (dicot) leaf, which structural feature prevents excessive collapse of air spaces during high transpirational demand?",
    options: [
      "Loosely arranged spongy mesophyll cells with extensive intercellular air cavities connected to substomatal chambers",
      "Vertically elongated, tightly packed palisade cells perpendicular to the adaxial epidermis",
      "Bundle sheath extensions consisting of collenchyma or sclerenchyma connecting the vascular bundle to the upper and lower epidermises",
      "Bulliform cells scattered along the abaxial epidermis"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Bundle sheath extensions extend like supportive columns or girders from the bundle sheath to the upper and lower epidermises, providing mechanical stability to the lamina, preventing buckling under dehydration tension, and partitioning internal airspace."
  },

  // Q44
  {
    question_id: 44,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Redifferentiation in Secondary Tissues",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following cells are formed by redifferentiation?\nI. Phellem (cork)\nII. Interfascicular cambium\nIII. Secondary cortex (phelloderm)\nIV. Cork cambium (phellogen)\nV. Secondary xylem vessels",
    options: [
      "I, III, and V only",
      "II and IV only",
      "I, II, and III only",
      "III, IV, and V only"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Dedifferentiation produces secondary meristems: interfascicular cambium (II) and phellogen (IV).\nRedifferentiation occurs when these secondary meristems lose the ability to divide to form specialized mature cells: phellogen forms phellem (I) and phelloderm (III); vascular cambium forms secondary xylem vessels (V)."
  },

  // Q45
  {
    question_id: 45,
    subject: "Botany",
    class: "Class 11",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Flowering Plants",
    subTopic: "Girdling Experiment & Phloem Translocation Interruption",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "If a student strips a complete ring of bark (including secondary phloem down to the vascular cambium) around the trunk of a woody tree (girdling experiment), which part of the plant will starve and die first?",
    options: [
      "The shoot tips and leaves, because water and mineral conduction via secondary xylem are immediately blocked",
      "The roots, because downward translocation of photosynthates (sucrose) through the phloem is halted while xylem conduction continues",
      "Both shoot and roots die simultaneously within minutes due to sudden atmospheric exposure of xylem vessels",
      "Neither will die, because medullary rays compensate by conducting sucrose downward through the pith"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Girdling removes the bark, which contains the functional secondary phloem. The xylem (lying beneath the vascular cambium) remains intact, allowing water and minerals to ascend to the foliage. However, downward movement of sugars to root tissues ceases completely. Deprived of energy for cellular respiration and active mineral uptake, the roots starve and die first, which subsequently kills the entire tree."
  }
];

async function main() {
  console.log("=== PROCESSING 45 ANATOMY OF FLOWERING PLANTS QUESTIONS ===");
  console.log(`Total questions to process: ${anatomy45.length}`);

  console.log("Connecting to MongoDB...");
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qbCol = db.collection("questionBank");
  const tpCol = db.collection("testPapers");

  // Determine starting commercialId for NEET-BOT
  const lastBotCom = await qbCol.find({ commercialId: /^NEET-BOT-/ }).sort({ commercialId: -1 }).limit(1).toArray();
  let nextComNum = 8175;
  if (lastBotCom.length > 0 && lastBotCom[0].commercialId) {
    const numPart = parseInt(lastBotCom[0].commercialId.replace("NEET-BOT-", ""), 10);
    if (!isNaN(numPart)) {
      nextComNum = numPart + 1;
    }
  }
  console.log(`Starting commercialId: NEET-BOT-${String(nextComNum).padStart(5, '0')}`);

  // Format documents for questionBank
  const dbDocs = anatomy45.map((q, idx) => {
    const comId = `NEET-BOT-${String(nextComNum + idx).padStart(5, '0')}`;
    return {
      _id: new ObjectId(),
      subject: q.subject,
      class: q.class,
      chapter: q.chapter,
      topic: q.topic,
      subTopic: q.subTopic,
      exam: q.exam,
      targetExams: q.targetExams,
      difficulty: q.difficulty, // "Difficult"
      questionType: q.questionType,
      type: q.type,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      correctOption: q.correctOption,
      explanation: q.explanation,
      tags: ["Botany", "Anatomy of Flowering Plants", "NEET", "Difficult"],
      source: "Anatomy of Flowering Plants Question Bank (NEET / IISER)",
      status: "Active",
      idealTimeSeconds: 60,
      cognitiveLevel: "Application",
      commercialReady: true,
      commercialId: comId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });

  // Save JSON backup
  const jsonPath = path.join(process.cwd(), 'scripts', 'anatomy_of_flowering_plants_45_questions.json');
  fs.writeFileSync(jsonPath, JSON.stringify(dbDocs, null, 2), 'utf8');
  console.log(`✓ Saved complete backup JSON to ${jsonPath}`);

  // Insert into questionBank
  const initialQbCount = await qbCol.countDocuments();
  console.log(`Current questionBank count: ${initialQbCount}`);

  console.log(`Inserting ${dbDocs.length} questions into questionBank under chapter 'Anatomy of Flowering Plants' and difficulty 'Difficult'...`);
  const insertResult = await qbCol.insertMany(dbDocs);
  console.log(`✓ Successfully inserted ${insertResult.insertedCount} questions into questionBank!`);

  const finalQbCount = await qbCol.countDocuments();
  console.log(`New questionBank count: ${finalQbCount}`);

  const anatomyCount = await qbCol.countDocuments({ chapter: "Anatomy of Flowering Plants" });
  console.log(`Total questions in questionBank with chapter 'Anatomy of Flowering Plants': ${anatomyCount}`);

  // Extract Question ObjectIds
  const questionObjectIds = dbDocs.map(d => d._id);
  console.log(`Mapped ${questionObjectIds.length} question ObjectIds.`);

  // Define the NEET chapterwise test for Botany Class 11
  const testId = "neet-CHAPTER-Botany-Anatomy-of-Flowering-Plants-11";
  const testTitle = "Anatomy of Flowering Plants";
  const testPaperDoc = {
    testId: testId,
    id: testId,
    title: testTitle,
    exam: "NEET",
    category: "neet",
    subject: "Botany",
    chapter: "Anatomy of Flowering Plants",
    classGrade: "11",
    duration: 60,
    totalMarks: 180,
    standardQuestionsCount: 45,
    questionsCount: 45,
    totalQuestions: 45,
    difficulty: "Difficult",
    type: "CHAPTER",
    testType: "chapter",
    questions: questionObjectIds,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Upsert into testPapers collection
  console.log(`Upserting testPaper '${testId}' in testPapers collection...`);
  const tpResult = await tpCol.updateOne(
    { testId: testId },
    { $set: testPaperDoc },
    { upsert: true }
  );
  console.log(`✓ testPapers upsert result: matched=${tpResult.matchedCount}, modified=${tpResult.modifiedCount}, upserted=${tpResult.upsertedId || 'Existing'}`);

  // Also upsert aliases without '-11' and standard variants
  const aliasIds = [
    "neet-CHAPTER-Botany-Anatomy-of-Flowering-Plants",
    "neet-CHAPTER-Anatomy-of-Flowering-Plants-11"
  ];
  for (const aliasId of aliasIds) {
    await tpCol.updateOne(
      { testId: aliasId },
      {
        $set: {
          ...testPaperDoc,
          testId: aliasId,
          id: aliasId,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );
    console.log(`✓ Created/updated alias testPaper '${aliasId}'`);
  }

  // Update src/data/tests/custom_tests.json
  const customTestsPath = path.join(process.cwd(), 'src', 'data', 'tests', 'custom_tests.json');
  let customTests = {};
  try {
    if (fs.existsSync(customTestsPath)) {
      customTests = JSON.parse(fs.readFileSync(customTestsPath, 'utf8'));
    }
  } catch (e) {
    customTests = {};
  }

  customTests[testId] = {
    id: testId,
    testId: testId,
    title: "Anatomy of Flowering Plants",
    type: "CHAPTER",
    subject: "Botany",
    chapter: "Anatomy of Flowering Plants",
    description: "Chapter-wise test on Anatomy of Flowering Plants (Botany). Comprehensive test with 45 questions.",
    category: "neet",
    duration: 60,
    totalMarks: 180,
    questionsCount: 45,
    difficulty: "Difficult",
    classGrade: "11"
  };

  fs.writeFileSync(customTestsPath, JSON.stringify(customTests, null, 2), 'utf8');
  console.log(`✓ Updated custom_tests.json with test '${testId}'`);

  // Update scripts/neet_chapter_test_targets.json if it exists
  const targetsPath = path.join(process.cwd(), 'scripts', 'neet_chapter_test_targets.json');
  if (fs.existsSync(targetsPath)) {
    try {
      const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf8'));
      targets[testId] = {
        testId: testId,
        title: "Anatomy of Flowering Plants",
        subject: "Botany",
        targetChapter: "Anatomy of Flowering Plants",
        exam: "NEET",
        originalQuestionCount: 45
      };
      fs.writeFileSync(targetsPath, JSON.stringify(targets, null, 2), 'utf8');
      console.log(`✓ Updated neet_chapter_test_targets.json with '${testId}'`);
    } catch (e) {
      console.error("Warning: Failed to update neet_chapter_test_targets.json", e.message);
    }
  }

  await client.close();
  console.log("\n=== SUCCESS: ALL 45 QUESTIONS INSERTED AND MAPPED TO NEET CHAPTERWISE ANATOMY OF FLOWERING PLANTS TEST ===");
}

main().catch(err => {
  console.error("Execution error:", err);
  process.exit(1);
});
