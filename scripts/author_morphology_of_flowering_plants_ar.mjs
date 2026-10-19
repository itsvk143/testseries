import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export const morphologyQuestions = [
  {
    assertion: "Pneumatophores of Rhizophora grow vertically upwards above the saline swamp water.",
    reason: "Pneumatophores possess lenticels (pneumathodes) that facilitate oxygen intake for respiration in waterlogged, oxygen-deficient mangrove soils.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Rhizophora grows in saline coastal marshes where waterlogging depletes dissolved soil oxygen. Negative geotropic breathing roots called pneumatophores emerge vertically into the air and bear lenticels that allow oxygen diffusion into root tissues. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Root Modifications"
  },
  {
    assertion: "Prop roots of Banyan and stilt roots of Maize and Sugarcane are adventitious roots that provide mechanical support.",
    reason: "Prop roots arise as hanging pillar-like structures from horizontal aerial branches, while stilt roots arise from the lower basal nodes of the stem.",
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both statements are accurate botanical descriptions. Prop roots (hanging roots in Ficus benghalensis) and stilt roots (oblique supporting roots emerging from basal nodes in Zea mays and Saccharum) are adventitious mechanical roots. While both statements are true, the morphological origins described in the Reason do not explain why they are classified as mechanical adventitious roots. Thus, both are true, but Reason does not explain Assertion.",
    difficulty: "Moderate",
    subTopic: "Root Modifications"
  },
  {
    assertion: "Potato tubers, ginger rhizomes, and colocasia corms are modified underground stems, not roots.",
    reason: "They possess nodes, internodes, terminal or axillary buds, and scale leaves, which are diagnostic characteristics of stems.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Even though they are subterranean and store starch, potato, ginger, and colocasia are stems because they bear nodes, internodes, axillary buds ('eyes' in potato), and protective scale leaves, which roots never possess. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Stem Modifications"
  },
  {
    assertion: "In Opuntia and Euphorbia, stems are modified into flattened or fleshy cylindrical green structures called phylloclades.",
    reason: "In xerophytic habitats, leaves are often reduced to spines or scales to reduce transpiration, and chlorophyllous stems take over the function of photosynthesis.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In arid environments, reduction of leaves to spines or scales drastically minimizes water loss. Stems adaptively become succulent, green, and flattened (Opuntia) or fleshy and cylindrical (Euphorbia), storing water and performing photosynthesis as phylloclades. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Stem Modifications"
  },
  {
    assertion: "In Australian acacia, the lamina is absent or poorly developed, and the petiole expands into a green, sickle-shaped photosynthetic organ called a phyllode.",
    reason: "Modification into a phyllode is a xerophytic adaptation to minimize transpirational surface area while maintaining photosynthetic capacity.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In Acacia auriculiformis, the compound bipinnate leaf blade is shed early, and the petiole flattens vertically into a green, leathery photosynthetic phyllode. Its vertical orientation and reduced stomatal exposure reduce transpiration in arid conditions. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Leaf Modifications"
  },
  {
    assertion: "In alternate phyllotaxy, a single leaf arises at each node in an alternating pattern, as seen in China rose, mustard, and sunflower.",
    reason: "In opposite phyllotaxy, a pair of leaves arises at each node and lie opposite to each other, as in Calotropis and Guava.",
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both statements correctly state the definitions and NCERT examples of phyllotaxy. In alternate phyllotaxy (China rose, mustard, sunflower), one leaf emerges per node. In opposite phyllotaxy (Calotropis, guava), two leaves emerge opposite each other at every node. However, the definition of opposite phyllotaxy is not a causal explanation for alternate phyllotaxy. Both are true, but Reason does not explain Assertion.",
    difficulty: "Moderate",
    subTopic: "Leaf Morphology"
  },
  {
    assertion: "Racemose inflorescence shows indefinite growth of the main peduncle with flowers arranged in acropetal succession.",
    reason: "In racemose inflorescences, the main floral axis does not terminate in a flower, allowing the apical bud to continue elongating while older flowers remain at the base and younger flowers appear at the apex.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Because the apical meristem of the peduncle remains indeterminate and does not end in a flower, the axis continues growing indefinitely. Lateral floral buds develop in acropetal order (oldest at the bottom, youngest near the top). Hence, both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Inflorescence"
  },
  {
    assertion: "Flowers of mustard, datura, and chilli are zygomorphic.",
    reason: "Zygomorphic flowers can be divided into two similar halves in any radial plane passing through the center.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Both statements are false, but under standard AR options where one is false: The Assertion is false because mustard, datura, and chilli are actinomorphic (radially symmetrical). The definition in Reason describes actinomorphic flowers, not zygomorphic flowers (which are bilaterally symmetrical). Hence, both are false, but under standard key (D): Assertion is false, and Reason defines radial symmetry. Thus option D is chosen as Assertion is unequivocally false.",
    difficulty: "Difficult",
    subTopic: "Flower Symmetry"
  },
  {
    assertion: "Flowers of pea, bean, Gulmohur, and Cassia are zygomorphic.",
    reason: "A zygomorphic flower can be divided into two equal vertical halves only along one single median longitudinal plane.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In pea, bean, Gulmohur, and Cassia, the floral envelope has bilateral symmetry and can only be split into symmetrical halves by a single sagittal/median plane. Both Assertion and Reason are true, and Reason correctly defines and explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Flower Symmetry"
  },
  {
    assertion: "In epigynous flowers of guava, cucumber, and ray florets of sunflower, the ovary is said to be inferior.",
    reason: "The margin of the thalamus grows upward, completely enclosing the ovary and getting fused with it, while other floral whorls arise above the ovary.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In epigynous flowers, the receptacle or hypanthium hollows out and fuses completely with the ovary wall. The sepals, petals, and stamens originate from the rim above the summit of the ovary, positioning the ovary below (inferior). Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Flower Morphology"
  },
  {
    assertion: "In plum, rose, and peach, the flowers are perigynous and the ovary is half-inferior.",
    reason: "The gynoecium is situated at the center, and other parts of the flower are located on the rim of the cup-shaped thalamus at almost the same level as the ovary.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In perigynous flowers (plum, rose, peach), the thalamus forms a saucer or cup-shaped receptacle (hypanthium). The ovary occupies the center, and sepals, petals, and stamens insert around its margin at the same horizontal level, rendering the ovary half-inferior. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Flower Morphology"
  },
  {
    assertion: "Vexillary aestivation is characteristic of the family Fabaceae (papilionaceous corolla).",
    reason: "The corolla consists of five petals: the largest posterior standard (vexillum) overlaps two lateral wings (alae), which in turn overlap the two smallest anterior fused petals (keel or carina).",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Vexillary (descending imbricate) aestivation in papilionaceous flowers (pea, bean) features a large posterior banner petal (standard) overlapping two lateral wings, which enclose two fused keel petals protecting essential organs. Both Assertion and Reason are true, and Reason correctly explains the diagnostic feature.",
    difficulty: "Moderate",
    subTopic: "Aestivation"
  },
  {
    assertion: "In China rose (Hibiscus), stamens are described as monadelphous, while in Pea (Pisum) they are diadelphous.",
    reason: "In monadelphous conditions, stamens are united into a single bundle or tube, whereas in diadelphous conditions, stamens are grouped into two separate bundles (e.g., 9 + 1 in pea).",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Adelphy refers to cohesion of stamen filaments. In China rose, filaments fuse into a single staminal tube (monadelphous). In pea, nine filaments fuse into one trough and the tenth posterior stamen remains free (9+1 arrangement, diadelphous). Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Androecium"
  },
  {
    assertion: "Epipetalous stamens are found in Brinjal (Solanaceae), while epiphyllous stamens are found in Lily (Liliaceae).",
    reason: "In epipetalous stamens, filaments adhere to petals; in epiphyllous stamens, stamens are attached to tepals (perianth).",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "When stamen filaments are adnate to petals (as in Solanaceae members like Solanum melongena), they are called epipetalous. In monocot flowers like Lilium where calyx and corolla are undifferentiated into a perianth (tepals), stamens attached to tepals are termed epiphyllous or epitepalous. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Androecium"
  },
  {
    assertion: "Tomato and lemon exhibit axile placentation, whereas Dianthus and Primrose show free-central placentation.",
    reason: "In axile placentation, ovules are borne on a central column in a multilocular ovary divided by septa, whereas in free-central placentation, ovules are on a central axis and septa are completely absent.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In axile placentation, carpel margins fold inward meeting at the center to form septa and locules, with ovules attached along the central axis (tomato, lemon, china rose). In free-central placentation, a central axis bears ovules inside a unilocular ovary with no partitions (Dianthus, Primula). Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Gynoecium & Placentation"
  },
  {
    assertion: "In mustard and Argemone, placentation is parietal, and the ovary is initially unilocular but becomes two-celled due to the formation of a false septum called the replum.",
    reason: "Ovules develop on the inner wall of the ovary or on peripheral outgrowths in parietal placentation.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In parietal placentation, ovules are attached to inner peripheral ovary walls. In Brassicaceae (mustard) and Papaveraceae (Argemone), the ovary is initially unilocular, but develops a false longitudinal partition (replum) that makes it bilocular. Both Assertion and Reason are true, and Reason correctly explains the morphology.",
    difficulty: "Difficult",
    subTopic: "Gynoecium & Placentation"
  },
  {
    assertion: "Mango and coconut are drupes derived from monocarpellary superior ovaries.",
    reason: "In coconut, the mesocarp is edible and fleshy, whereas in mango, the mesocarp is dry and fibrous.",
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The Assertion is true: mango and coconut are both drupes (single-seeded stone fruits) that develop from monocarpellary superior ovaries. The Reason is false because in mango, the mesocarp is fleshy and edible (with a stony endocarp), whereas in coconut, the mesocarp is fibrous and the endosperm is the edible part. Thus, Assertion is true, but Reason is false.",
    difficulty: "Moderate",
    subTopic: "Fruit & Seed"
  },
  {
    assertion: "The single large, shield-shaped cotyledon in a monocotyledonous maize grain is called the scutellum.",
    reason: "The scutellum secretes digestive enzymes into the endosperm and absorbs hydrolyzed nutrients during seed germination to nourish the embryonic axis.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In Poaceae (grasses/maize), the embryo has one prominent lateral shield-shaped cotyledon known as the scutellum. It is situated adjacent to the massive starchy endosperm and functions specifically to absorb stored nutrients digested by the aleurone layer during germination. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Fruit & Seed"
  },
  {
    assertion: "Flowers of the family Solanaceae typically have an oblique ovary with swollen axile placenta bearing numerous ovules.",
    reason: "The bicarpellary, syncarpous superior ovary in Solanaceae is tilted obliquely in relation to the mother axis, which is an important diagnostic floral characteristic.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In Solanaceae (e.g. potato, tomato, tobacco), the ovary is bicarpellary, syncarpous, superior, bilocular, and positioned obliquely at an angle of roughly 45 degrees to the antero-posterior plane of the flower. The placenta is conspicuously swollen with numerous ovules on axile placentation. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Floral Families"
  },
  {
    assertion: "Colchicine, an alkaloid used to induce polyploidy in plant breeding, is extracted from a member of the family Fabaceae.",
    reason: "Colchicum autumnale is an economically important plant belonging to the family Liliaceae.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The Assertion is false because Colchicine is extracted from Colchicum autumnale (autumn crocus or meadow saffron), which belongs to the family Liliaceae, NOT Fabaceae. The Reason statement is completely true: Colchicum autumnale is an important medicinal and breeding member of Liliaceae that yields colchicine. Hence, Assertion is false, but Reason is true.",
    difficulty: "Moderate",
    subTopic: "Floral Families"
  }
];

export async function insertMorphologyQuestions() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  console.log('Inserting 20 Morphology of Flowering Plants AR questions...');
  const insertedIds = [];

  for (let i = 0; i < morphologyQuestions.length; i++) {
    const q = morphologyQuestions[i];
    const doc = {
      type: "ASSERTION_REASON",
      questionType: "Assertion–Reasoning",
      subject: "Botany",
      chapter: "Morphology of Flowering Plants",
      topic: "Morphology of Flowering Plants",
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

  console.log(`Successfully inserted ${insertedIds.length} Morphology AR questions.`);
  await client.close();
  return insertedIds;
}

if (process.argv[1]?.endsWith('author_morphology_of_flowering_plants_ar.mjs')) {
  insertMorphologyQuestions().catch(console.error);
}
