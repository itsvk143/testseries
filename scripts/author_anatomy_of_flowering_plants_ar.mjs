import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export const anatomyQuestions = [
  {
    assertion: "Collenchyma provides mechanical support to growing parts of a plant such as young stems and petioles of leaves.",
    reason: "Collenchyma cells possess localized wall thickenings of cellulose, hemicellulose, and pectin, especially at the corners, and retain protoplasm at maturity.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Collenchyma is a living mechanical tissue. The uneven thickenings of cellulose, hemicellulose, and pectin at the corners provide tensile strength and flexibility without restricting elongation, allowing growing organs like young dicot stems and petioles to bend without breaking. Hence, both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Simple Permanent Tissues"
  },
  {
    assertion: "Sclerenchyma fibres and sclereids are dead cells devoid of protoplasts at maturity.",
    reason: "Sclerenchyma cells deposit highly thickened, lignified secondary cell walls with narrow lumens, which obstruct metabolic exchange and lead to protoplast breakdown.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Lignin deposition in the secondary cell walls of sclerenchyma confers extreme rigidity and impermeability. Once secondary wall deposition is complete, the protoplast dies, leaving a dead cell with a narrow lumen that functions purely for mechanical support. Hence, both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Simple Permanent Tissues"
  },
  {
    assertion: "Gymnosperms lack vessels in their xylem and sieve tubes in their phloem.",
    reason: "Water conduction in gymnosperms relies primarily on tracheids, and phloem transport is mediated by sieve cells associated with albuminous cells.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Gymnosperms (with rare exceptions like Gnetales) do not possess true xylem vessels; their xylem consists of tracheids. Their phloem also lacks sieve tubes and companion cells, possessing sieve cells and albuminous (Strasburger) cells instead. Hence, both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Complex Permanent Tissues"
  },
  {
    assertion: "Companion cells are essential for the translocation of food materials through sieve tube elements.",
    reason: "Mature sieve tube elements lack a nucleus, and their functions and hydrostatic pressure gradient are controlled by the nucleus and metabolic machinery of adjacent companion cells.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "A mature sieve tube element retains peripheral cytoplasm and a large central vacuole but loses its nucleus. Companion cells are connected to sieve tube elements via pit fields in their common longitudinal walls and maintain the pressure gradient and enzymatic machinery necessary for phloem loading and transport. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Complex Permanent Tissues"
  },
  {
    assertion: "Xylem vessels are multicellular structures with perforated end walls, whereas tracheids are unicellular elongated cells with tapering, imperforate ends.",
    reason: "Tracheids and vessels both possess lignified secondary cell walls and conduct water under negative pressure.",
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both statements are factually correct. Vessels are syncytial tubes formed by longitudinal fusion of vessel members whose end walls are perforated. Tracheids are single elongated cells with pit pairs in overlapping tapering end walls. Both have lignified walls and conduct sap under tension, but the second statement is a common characteristic, not the reason why vessel members form syncytia while tracheids remain unicellular. Thus, both are true, but Reason does not explain Assertion.",
    difficulty: "Difficult",
    subTopic: "Complex Permanent Tissues"
  },
  {
    assertion: "Root hairs are unicellular elongations of epiblema cells, whereas trichomes on stems are usually multicellular.",
    reason: "Trichomes on the shoot system may be branched or unbranched, secretory or non-secretory, and help in preventing water loss due to transpiration.",
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both statements are accurate NCERT anatomical facts. Root hairs are strictly unicellular extensions of trichoblast cells of the epiblema functioning in water/mineral uptake. Stem trichomes are multicellular epidermal appendages that reduce air movement and transpiration or secrete defensive compounds. However, the function of trichomes does not explain the developmental unicellular vs multicellular difference between root hairs and trichomes. Hence, both are true, but Reason does not explain Assertion.",
    difficulty: "Moderate",
    subTopic: "Epidermal Tissue System"
  },
  {
    assertion: "The Casparian strip in the root endodermis forces water and dissolved solutes to cross the plasma membrane via the symplastic pathway.",
    reason: "Casparian strips consist of radial and tangential depositions of water-impermeable suberin that completely block apoplastic movement into the stele.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Suberin deposition in the Casparian strip forms an impenetrable hydrophobic barrier in the primary wall and middle lamella of root endodermal cells. As a result, apoplastic flow of water and ions through cell walls and intercellular spaces is halted, forcing movement through the selectively permeable plasma membrane into the symplast. Thus, both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Root Anatomy"
  },
  {
    assertion: "In stems, the protoxylem lies towards the center (pith) and the metaxylem lies towards the periphery, a condition termed endarch.",
    reason: "In roots, the protoxylem lies towards the periphery and the metaxylem lies towards the center, which is called exarch.",
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both definitions are anatomically correct. Stem xylem development is centrifugal, producing endarch xylem where the first-formed protoxylem is internal to metaxylem. Root xylem development is centripetal, producing exarch xylem where protoxylem is external. While both statements are true, the description of root anatomy is not a causal explanation for the stem condition. Both are true, but Reason does not explain Assertion.",
    difficulty: "Moderate",
    subTopic: "Vascular Tissue System"
  },
  {
    assertion: "Monocot stems possess closed vascular bundles and do not undergo secondary growth.",
    reason: "Vascular bundles in monocot stems lack a strip of intrafascicular cambium between the xylem and phloem.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Vascular bundles that possess cambium between xylem and phloem are called open (as in dicot stems) because they form secondary tissues. In monocots, cambium is absent within bundles, making them closed and precluding normal secondary growth. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Stem Anatomy"
  },
  {
    assertion: "Monocot stems show scattered vascular bundles embedded in ground tissue, with larger bundles located peripherally and smaller ones centrally.",
    reason: "Peripheral vascular bundles in monocot stems are smaller and more crowded, whereas central vascular bundles are conspicuously larger and more widely spaced.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The Assertion is false because in monocot stems, the peripheral vascular bundles are smaller, while the central vascular bundles are larger. The Reason statement is completely true according to NCERT: 'Peripheral vascular bundles are generally smaller than the centrally located ones.' Thus, Assertion is false, but Reason is true.",
    difficulty: "Difficult",
    subTopic: "Stem Anatomy"
  },
  {
    assertion: "Dicot roots typically possess 2 to 4 (diarch to tetrarch) xylem and phloem patches and a small, inconspicuous pith.",
    reason: "Monocot roots typically have more than six (polyarch) xylem bundles and a large, well-developed pith.",
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both statements are true diagnostic features of angiosperm roots. Dicot roots have 2 to 4 (rarely up to 6) xylem arches with an indistinct pith. Monocot roots show polyarch xylem bundles (usually > 6) and a conspicuous, prominent central pith. However, the monocot root condition is a contrasting taxonomic fact, not the causal reason for the dicot condition. Hence, both are true, but Reason does not explain Assertion.",
    difficulty: "Moderate",
    subTopic: "Root Anatomy"
  },
  {
    assertion: "Isobilateral (monocot) leaves have stomata distributed almost equally on both adaxial and abaxial surfaces, and their mesophyll is not differentiated into palisade and spongy parenchyma.",
    reason: "In isobilateral leaves, both surfaces receive roughly equal sunlight due to their upright orientation, eliminating the adaptive need for dorsiventral tissue differentiation.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Isobilateral leaves stand vertically and intercept solar radiation equally on both sides. Consequently, stomatal frequency is amphistomatic (equal on adaxial and abaxial surfaces) and the mesophyll is uniformly composed of spongy cells without differentiation into distinct upper palisade and lower spongy layers. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Leaf Anatomy"
  },
  {
    assertion: "Bulliform cells in grasses help minimize transpiration under conditions of water stress.",
    reason: "When bulliform cells lose water and become flaccid, they cause the grass leaf blade to curl inwards, reducing the exposed surface area.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Bulliform (motor) cells are large, empty, thin-walled adaxial epidermal cells. In dry conditions, loss of turgor in these cells causes inward curling of leaves, shielding stomata and minimizing transpiration water loss. When water is plentiful, they absorb water, become turgid, and unroll the lamina. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Leaf Anatomy"
  },
  {
    assertion: "Heartwood (duramen) is dark, dense, and non-functional in water conduction, whereas sapwood (alburnum) is lighter in color and conducts water and minerals.",
    reason: "The tracheary elements of heartwood become plugged by balloon-like parenchymatous ingrowths called tyloses and impregnated with tannins, resins, and essential oils.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In older woody stems, central secondary xylem ceases conduction because xylem parenchyma forms tyloses that protrude into vessel lumens, sealing them. Deposition of aromatic substances, tannins, and resins makes heartwood durable, dark, and resistant to pathogens, while the peripheral sapwood conducts sap. Hence, both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Secondary Growth"
  },
  {
    assertion: "Spring wood (early wood) has wider xylem vessels and lower density compared to autumn wood (late wood).",
    reason: "During spring, the cambium is highly active under favorable physiological conditions and produces abundant xylary elements with wide vessels to meet transpirational demand.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Climatic conditions dictate cambial activity. In spring, optimal temperature and moisture stimulate rapid cambial division, creating lighter, less dense spring wood with wide vessel lumens. In winter/autumn, cambial activity slows, yielding late wood with narrower vessels and thick-walled fibres of higher density. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Secondary Growth"
  },
  {
    assertion: "Annual growth rings can be distinctly counted to determine the age of trees growing in tropical coastal regions.",
    reason: "In tropical coastal regions, climatic conditions remain nearly uniform throughout the year, so the cambium does not exhibit alternating periods of accelerated and sluggish activity.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The Assertion is false: annual rings are NOT distinct in tropical coastal regions (like Mumbai or Chennai) because the climate lacks sharp seasonal temperature fluctuations. The Reason is true: uniform climate produces continuous, homogeneous wood growth without distinct boundaries between spring and autumn wood. Hence, Assertion is false, but Reason is true.",
    difficulty: "Difficult",
    subTopic: "Secondary Growth"
  },
  {
    assertion: "The vascular cambium in dicot roots is entirely secondary in origin.",
    reason: "In dicot roots, the cambium originates from the parenchyma tissue located just below the phloem bundles and portions of pericycle tissue situated above the protoxylem.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Unlike dicot stems (where intrafascicular cambium is primary), a dicot root has no pre-existing cambium in its primary vascular bundles. Its complete vascular cambium forms de novo by dedifferentiation of cells below phloem and pericycle cells outside protoxylem, creating an undulating ring that later becomes circular. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Difficult",
    subTopic: "Secondary Growth"
  },
  {
    assertion: "Bark is a non-technical term referring to all tissues external to the vascular cambium.",
    reason: "Bark includes periderm (cork, cork cambium, phelloderm) and secondary phloem.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Bark anatomically denotes all tissues lying outside the vascular cambium ring. Early in the season it forms soft bark and later hard bark; structurally it comprises periderm (phellogen, phellem, and phelloderm) along with primary and secondary phloem. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Secondary Growth"
  },
  {
    assertion: "Lenticels are lens-shaped openings in the bark that permit gaseous exchange between the atmosphere and internal living tissues of woody stems.",
    reason: "Phellogen cuts off closely arranged, non-suberized, parenchymatous complementary cells towards the outside that rupture the epidermis.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Suberized cork cells are completely impermeable to air. To maintain respiration of living cortical and cambial cells, phellogen in certain regions produces loose, thin-walled, non-suberized complementary parenchyma cells that burst the epidermis, forming porous lenticels for aeration. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Secondary Growth"
  },
  {
    assertion: "Phloem parenchyma is abundant in all angiosperms, including monocotyledonous stems and leaves.",
    reason: "Phloem parenchyma consists of elongated, tapering cells with dense cytoplasm that store starch, resins, and latex.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The Assertion is false because phloem parenchyma is characteristically absent in most monocotyledons (an important diagnostic feature in NCERT). The Reason is completely true: phloem parenchyma cells are living, elongated with tapering ends and store food reserves like resins, tannins, and latex. Hence, Assertion is false, but Reason is true.",
    difficulty: "Difficult",
    subTopic: "Complex Permanent Tissues"
  }
];

export async function insertAnatomyQuestions() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  console.log('Inserting 20 Anatomy of Flowering Plants AR questions...');
  const insertedIds = [];

  for (let i = 0; i < anatomyQuestions.length; i++) {
    const q = anatomyQuestions[i];
    const doc = {
      type: "ASSERTION_REASON",
      questionType: "Assertion–Reasoning",
      subject: "Botany",
      chapter: "Anatomy of Flowering Plants",
      topic: "Anatomy of Flowering Plants",
      subTopic: q.subTopic,
      difficulty: q.difficulty,
      class: "Class 11",
      exam: "NEET",
      targetExams: ["NEET"],
      marks: 4,
      negativeMarks: 1,
      idealTimeSeconds: 60,
      assertion: q.assertion,
      reason: q.reason,
      question: `Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n(c) (A) is true but (R) is false.\n(d) (A) is false but (R) is true.\n\nAssertion (A): ${q.assertion}\nReason (R): ${q.reason}`,
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      correctAnswer: q.correctAnswer,
      correctOption: q.correctOption,
      explanation: q.explanation,
      source: "Newly Authored 2026 - Master AR Engine",
      provenance: "Newly Authored 2026",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const res = await qBank.insertOne(doc);
    insertedIds.push(res.insertedId);
  }

  console.log(`Successfully inserted ${insertedIds.length} Anatomy AR questions.`);
  await client.close();
  return insertedIds;
}

if (process.argv[1]?.endsWith('author_anatomy_of_flowering_plants_ar.mjs')) {
  insertAnatomyQuestions().catch(console.error);
}
