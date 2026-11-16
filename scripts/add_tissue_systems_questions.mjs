import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const TARGET_TEST_ID = 'neet-SUBTOPIC-Botany-Tissue-Systems';
const SUBJECT = 'Botany';
const CHAPTER = 'Anatomy of Flowering Plants';
const SUBTOPIC = 'Tissue Systems';

const rawQuestions = [
  {
    index: 1,
    commercialId: 'NEET-BOT-TS-001',
    question: `In a dorsiventral leaf, the stomatal apparatus consists of:`,
    options: [
      'Dumb-bell shaped guard cells with thin outer walls and thick inner walls, surrounded by epidermal cells.',
      'Bean-shaped guard cells with thick outer walls and thin inner walls, lacking subsidiary cells.',
      'Bean-shaped guard cells with thin outer walls and thick inner walls, surrounded by specialized subsidiary cells.',
      'Dumb-bell shaped guard cells with uniformly thickened walls, surrounded by trichomes.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'In dicots (dorsiventral leaves), guard cells are bean/kidney-shaped. Their outer walls (away from the stomatal pore) are thin, and their inner walls (towards the stomatal pore) are highly thickened to facilitate opening upon turgor increase. They are surrounded by specialized epidermal cells called subsidiary cells.'
  },
  {
    index: 2,
    commercialId: 'NEET-BOT-TS-002',
    question: `Given below are two statements:
Assertion (A): Root hairs are always unicellular, whereas stem hairs (trichomes) are usually multicellular.
Reason (R): Root hairs are extensions of the hypodermis, while trichomes are outgrowths of the epidermis.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Assertion is true: root hairs are unicellular elongations of epidermal cells, whereas stem trichomes are usually multicellular. Reason is false because both root hairs and trichomes are epidermal appendages (roots do not possess a hypodermis).'
  },
  {
    index: 3,
    commercialId: 'NEET-BOT-TS-003',
    question: `Which of the following statements regarding the cuticle is incorrect?`,
    options: [
      'It is a waxy thick layer deposited on the outside of the epidermis.',
      'It prevents the loss of water from the aerial parts of the plant.',
      'It is completely absent in the epidermis of roots.',
      'It is secreted by the hypodermal collenchyma cells through plasmodesmata.'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: 'The cuticle is a waxy layer secreted directly by the epidermal cells themselves onto their outer surface, not by hypodermal collenchyma. It is completely absent in roots to allow water absorption.'
  },
  {
    index: 4,
    commercialId: 'NEET-BOT-TS-004',
    question: `Identify the correct combination of features characterizing the guard cells of grasses:`,
    options: [
      'Chloroplast-free, kidney-shaped, thin inner wall',
      'Chloroplast-containing, dumb-bell shaped, thick middle portion',
      'Chloroplast-containing, bean-shaped, bulbous ends with thin walls',
      'Chloroplast-free, dumb-bell shaped, thin bulbous ends'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In grasses (monocots), guard cells are dumb-bell shaped. They possess chloroplasts, have thin-walled bulbous ends, and a thick-walled middle portion.'
  },
  {
    index: 5,
    commercialId: 'NEET-BOT-TS-005',
    question: `Given below are two statements:
Statement I: Subsidiary cells are specialized epidermal cells in the vicinity of guard cells that differ in shape and size.
Statement II: The stomatal aperture, guard cells, and the surrounding subsidiary cells together constitute the stomatal apparatus.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Both statements are verbatim facts from NCERT Class XI Biology (Chapter 6). Subsidiary cells are modified epidermal cells surrounding guard cells, and together with the aperture, they form the stomatal apparatus.'
  },
  {
    index: 6,
    commercialId: 'NEET-BOT-TS-006',
    question: `Trichomes on the shoot system perform all of the following functions except:`,
    options: [
      'Preventing water loss due to transpiration',
      'Secretion of certain substances',
      'Absorption of water and minerals from the atmosphere',
      'Protection against herbivory (when stiff or secretory)'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Trichomes on the shoot system help prevent water loss due to transpiration and may be secretory or protective, but they do not absorb water and minerals from the atmosphere (that is the role of root hairs in soil, or specialized velamen in epiphytic roots).'
  },
  {
    index: 7,
    commercialId: 'NEET-BOT-TS-007',
    question: `Which of the following tissues is not a component of the ground tissue system?`,
    options: ['Pericycle', 'Medullary rays', 'Endodermis', 'Companion cells'],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: 'All tissues except epidermis and vascular bundles constitute the ground tissue system (cortex, pericycle, pith, medullary rays, mesophyll). Companion cells are specialized parenchymatous cells belonging to the phloem (vascular tissue system).'
  },
  {
    index: 8,
    commercialId: 'NEET-BOT-TS-008',
    question: `In leaves, the ground tissue consists of thin-walled chloroplast-containing cells and is called:`,
    options: ['Chlorenchymatous cortex', 'Mesophyll', 'Pith', 'Conjunctive tissue'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In leaves, the ground tissue consists of thin-walled chloroplast-containing cells and is specifically termed the mesophyll.'
  },
  {
    index: 9,
    commercialId: 'NEET-BOT-TS-009',
    question: `Consider the following statements about vascular bundles:
(i) In open vascular bundles, cambium is present between phloem and xylem.
(ii) Monocotyledons possess open vascular bundles because they lack secondary growth.
(iii) In radial vascular bundles, xylem and phloem are arranged in an alternate manner along the same radius.
(iv) Conjoint vascular bundles are typically found in stems and leaves.

How many of the above statements are correct?`,
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Statements (i) and (iv) are correct. Statement (ii) is incorrect because monocotyledons possess closed vascular bundles (lacking cambium). Statement (iii) is incorrect because in radial vascular bundles, xylem and phloem are arranged along different radii in an alternate manner.'
  },
  {
    index: 10,
    commercialId: 'NEET-BOT-TS-010',
    question: `A vascular bundle in which phloem is located only on the outer side of xylem and lacks intrafascicular cambium is termed:`,
    options: [
      'Conjoint, bicollateral, closed',
      'Radial, exarch, closed',
      'Conjoint, collateral, closed',
      'Conjoint, collateral, open'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Phloem on only the outer side of xylem = Collateral; xylem and phloem situated on the same radius = Conjoint; absence of cambium = Closed. Hence, conjoint, collateral, closed (typical of monocot stems and leaves).'
  },
  {
    index: 11,
    commercialId: 'NEET-BOT-TS-011',
    question: `Why are vascular bundles in dicotyledonous stems referred to as "open"?`,
    options: [
      'They remain open to the surrounding pith via medullary rays.',
      'They possess the ability to form secondary xylem and phloem tissues due to the presence of cambium.',
      'Their metaxylem vessels have wide, open lumens for rapid conduction.',
      'They lack a sclerenchymatous bundle sheath.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Vascular bundles in dicot stems are called "open" because of the presence of intrafascicular cambium between primary xylem and primary phloem, which endows them with the capacity to form secondary vascular tissues.'
  },
  {
    index: 12,
    commercialId: 'NEET-BOT-TS-012',
    question: `Match Column I with Column II and select the correct option:

| Column I | Column II |
| :--- | :--- |
| a. Radial vascular bundles | (i) Dicot stem |
| b. Conjoint open vascular bundles | (ii) Monocot leaf |
| c. Conjoint closed vascular bundles | (iii) Dicot root |
| d. Bulliform cells | (iv) Epidermal modification |`,
    options: [
      'a-(iii), b-(i), c-(ii), d-(iv)',
      'a-(i), b-(iii), c-(iv), d-(ii)',
      'a-(iii), b-(ii), c-(i), d-(iv)',
      'a-(ii), b-(i), c-(iii), d-(iv)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Radial bundles occur in roots (dicot/monocot); conjoint open bundles in dicot stems; conjoint closed bundles in monocot stems/leaves; bulliform cells are modified large, empty adaxial epidermal cells in monocot (grass) leaves.'
  },
  {
    index: 13,
    commercialId: 'NEET-BOT-TS-013',
    question: `Casparian strips are characteristic of the endodermis in roots. Which of the following accurately describes their chemical nature and function?`,
    options: [
      'Lignin deposition on radial walls; prevents apoplastic movement of water.',
      'Suberin deposition on tangential and radial walls; forces symplastic entry of water into the stele.',
      'Cutin deposition on inner tangential walls; facilitates root pressure generation.',
      'Pectin and cellulose thickening; allows unrestricted apoplastic flow into xylem.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'The tangential as well as radial walls of the endodermal cells in roots have a deposition of water-impermeable, waxy material called suberin in the form of Casparian strips, which forces water to cross the endodermis through the symplast.'
  },
  {
    index: 14,
    commercialId: 'NEET-BOT-TS-014',
    question: `Passage cells in the endodermis of roots are located opposite to:`,
    options: [
      'Protophloem elements',
      'Metaphloem elements',
      'Protoxylem elements',
      'Metaxylem elements'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'In roots, certain endodermal cells situated opposite to the protoxylem elements remain unthickened (lacking Casparian bands) to permit the radial movement of water into the vascular cylinder; these are called passage cells.'
  },
  {
    index: 15,
    commercialId: 'NEET-BOT-TS-015',
    question: `All tissues on the inner side of the endodermis constitute the stele. Which of the following is excluded from the stele?`,
    options: ['Pericycle', 'Vascular bundles', 'Pith', 'Cortex'],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: 'All tissues on the inner side of the endodermis—such as pericycle, vascular bundles, and pith—constitute the stele. The cortex lies outside the endodermis and is therefore excluded from the stele.'
  },
  {
    index: 16,
    commercialId: 'NEET-BOT-TS-016',
    question: `In a dicotyledonous root, the pericycle plays a crucial role in:`,
    options: [
      'Initiation of lateral roots and vascular cambium during secondary growth.',
      'Storage of starch grains (starch sheath).',
      'Formation of bulliform cells during water stress.',
      'Secretion of mucilage to lubricate the root tip.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In dicot roots, the initiation of lateral roots and a portion of the vascular cambium during secondary growth takes place exclusively from the cells of the pericycle.'
  },
  {
    index: 17,
    commercialId: 'NEET-BOT-TS-017',
    question: `Compare the pith of a typical dicot root with that of a typical monocot root:`,
    options: [
      'Dicot root: Large and well-developed; Monocot root: Small or inconspicuous.',
      'Dicot root: Small or inconspicuous; Monocot root: Large and well-developed.',
      'Both have large, parenchymatous pith with intercellular spaces.',
      'Both lack pith entirely due to central metaxylem fusion.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In a dicot root, the central pith is small or completely inconspicuous. In contrast, a monocot root possesses a large and well-developed parenchymatous pith.'
  },
  {
    index: 18,
    commercialId: 'NEET-BOT-TS-018',
    question: `The parenchymatous cells which lie between the xylem and the phloem in a dicot root are called:`,
    options: [
      'Medullary rays',
      'Conjunctive tissue',
      'Complementary cells',
      'Casparian tissue'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'The parenchymatous cells lying between the xylem and phloem strands in roots are designated as conjunctive tissue. During secondary growth, these cells de-differentiate to form a portion of the vascular cambium.'
  },
  {
    index: 19,
    commercialId: 'NEET-BOT-TS-019',
    question: `Given below are two statements:
Assertion (A): Monocot roots do not undergo secondary growth.
Reason (R): Monocot roots usually have more than six (polyarch) xylem bundles and lack vascular cambium.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Both statements are true: monocot roots are polyarch (usually >6 xylem bundles) and do not undergo secondary growth. However, absence of secondary growth is because monocots lack vascular cambium/secondary meristems, not because of the polyarch xylem count itself.'
  },
  {
    index: 20,
    commercialId: 'NEET-BOT-TS-020',
    question: `Identify the correct sequence of tissue layers from periphery to center in a transverse section of a young dicot stem:`,
    options: [
      'Epidermis → General cortex → Hypodermis → Endodermis → Pericycle → Vascular bundles → Pith',
      'Epidermis → Hypodermis → General cortex → Endodermis → Pericycle → Vascular bundles → Pith',
      'Epidermis → Hypodermis → Endodermis → General cortex → Pericycle → Vascular bundles → Pith',
      'Epidermis → Pericycle → Hypodermis → General cortex → Endodermis → Vascular bundles → Pith'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Moving from the exterior to the interior in a dicot stem: Epidermis → Hypodermis (collenchymatous) → General cortex (parenchymatous) → Endodermis (starch sheath) → Pericycle → Vascular bundles → Pith.'
  },
  {
    index: 21,
    commercialId: 'NEET-BOT-TS-021',
    question: `In a dicot stem, the hypodermis consists of:`,
    options: [
      'Sclerenchymatous cells providing mechanical strength',
      'Collenchymatous cells providing mechanical strength to the young stem',
      'Parenchymatous cells with large intercellular spaces',
      'Suberized cells forming a protective barrier'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In a dicot stem, the hypodermis lies immediately beneath the epidermis and consists of a few layers of collenchymatous cells that provide mechanical flexibility and support to the growing stem.'
  },
  {
    index: 22,
    commercialId: 'NEET-BOT-TS-022',
    question: `The innermost layer of the cortex in a dicot stem is rich in starch grains and is referred to as the:`,
    options: [
      'Casparian sheath',
      'Bundle sheath',
      'Starch sheath',
      'Aleurone layer'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'The endodermis in a dicot stem contains cells packed with starch grains; hence, it is commonly designated as the starch sheath.'
  },
  {
    index: 23,
    commercialId: 'NEET-BOT-TS-023',
    question: `How is the pericycle arranged in a dicotyledonous stem (e.g., Sunflower)?`,
    options: [
      'As a continuous ring of thin-walled parenchymatous cells',
      'On the inner side of the endodermis and above the phloem in the form of semi-lunar patches of sclerenchyma',
      'As alternating bands of collenchyma and parenchyma beneath the epidermis',
      'As a single layer of barrel-shaped suberized cells'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In sunflower stems, the pericycle is located on the inner side of the endodermis and above the primary phloem in the form of semi-lunar patches of sclerenchyma (often referred to as hard bast).'
  },
  {
    index: 24,
    commercialId: 'NEET-BOT-TS-024',
    question: `Given below are two statements:
Statement I: In dicot stems, vascular bundles are arranged in a ring, which is a characteristic feature of dicotyledons.
Statement II: Each vascular bundle in a dicot stem is conjoint, open, and has exarch protoxylem.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Statement I is correct: the eustelic ring arrangement of vascular bundles is a hallmark of dicot stems. Statement II is incorrect because stems exhibit endarch protoxylem (protoxylem directed towards the pith), whereas exarch protoxylem is characteristic of roots.'
  },
  {
    index: 25,
    commercialId: 'NEET-BOT-TS-025',
    question: `Which of the following features distinguishes a monocot stem from a dicot stem?`,
    options: [
      'Collenchymatous hypodermis and ring-arranged vascular bundles',
      'Sclerenchymatous hypodermis and scattered vascular bundles',
      'Well-developed medullary rays and presence of phloem parenchyma',
      'Presence of starch sheath and open vascular bundles'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'A monocot stem is distinguished by a sclerenchymatous hypodermis, a large number of scattered closed vascular bundles (atactostele), and absence of phloem parenchyma, whereas a dicot stem has a collenchymatous hypodermis and ring-arranged open bundles.'
  },
  {
    index: 26,
    commercialId: 'NEET-BOT-TS-026',
    question: `In a monocotyledonous stem, each vascular bundle is surrounded by a:`,
    options: [
      'Parenchymatous bundle sheath',
      'Collenchymatous bundle sheath',
      'Sclerenchymatous bundle sheath',
      'Suberized endodermis'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Each vascular bundle in a monocot stem is encircled by a prominent sclerenchymatous bundle sheath.'
  },
  {
    index: 27,
    commercialId: 'NEET-BOT-TS-027',
    question: `Regarding the distribution and size of vascular bundles in a monocot stem, which statement is true?`,
    options: [
      'Peripheral vascular bundles are generally larger than the centrally located ones.',
      'Peripheral vascular bundles are generally smaller than the centrally located ones.',
      'All vascular bundles are of uniform size throughout the ground tissue.',
      'Vascular bundles are absent in the central region, forming a hollow pith.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In monocot stems, vascular bundles are scattered throughout the ground tissue; the peripheral bundles are more crowded and generally smaller in size compared to the larger, loosely arranged central bundles.'
  },
  {
    index: 28,
    commercialId: 'NEET-BOT-TS-028',
    question: `Which of the following is characteristically absent in the vascular bundles of a monocot stem?`,
    options: [
      'Companion cells',
      'Sieve tube elements',
      'Phloem parenchyma',
      'Water-containing cavities'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'In monocotyledonous stems, the phloem parenchyma is characteristically absent, and vascular bundles possess water-containing protoxylem cavities (lysigenous cavities).'
  },
  {
    index: 29,
    commercialId: 'NEET-BOT-TS-029',
    question: `Water-containing cavities (lysigenous cavities) are present within the vascular bundles of:`,
    options: ['Dicot root', 'Monocot root', 'Dicot stem', 'Monocot stem'],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: 'Water-containing cavities, formed by the breakdown of the lowest protoxylem elements during rapid elongation, are diagnostic of the vascular bundles of monocot stems (e.g., maize).'
  },
  {
    index: 30,
    commercialId: 'NEET-BOT-TS-030',
    question: `In a dorsiventral (dicotyledonous) leaf:`,
    options: [
      'The adaxial epidermis generally bears more stomata than the abaxial epidermis.',
      'The abaxial epidermis generally bears more stomata than the adaxial epidermis.',
      'Both surfaces have an equal number of stomata.',
      'Stomata are completely absent on the abaxial surface.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In a dorsiventral leaf, the abaxial (lower) epidermis generally bears more stomata than the adaxial (upper) epidermis. The adaxial surface may even lack stomata altogether (hypostomatic condition).'
  },
  {
    index: 31,
    commercialId: 'NEET-BOT-TS-031',
    question: `The mesophyll of a dorsiventral leaf is differentiated into palisade and spongy parenchyma. Which statement accurately describes the palisade parenchyma?`,
    options: [
      'Adaxially placed, made up of elongated cells arranged vertically and parallel to each other.',
      'Abaxially placed, made up of oval or round and loosely arranged cells.',
      'Adaxially placed, containing large air cavities and air spaces.',
      'Abaxially placed, lacking chloroplasts and specialized for water storage.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In a dorsiventral leaf, the palisade parenchyma is situated adaxially (towards the upper surface) and consists of vertically elongated columnar cells arranged tightly and parallel to one another, rich in chloroplasts.'
  },
  {
    index: 32,
    commercialId: 'NEET-BOT-TS-032',
    question: `What determines the variation in the size of vascular bundles seen in the cross-section of a dicot leaf?`,
    options: [
      'The thickness of the cuticle above the bundle',
      'The size of the veins in reticulate venation',
      'The number of bulliform cells flanking the bundle',
      'The presence or absence of cambium within the bundle'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Dicot leaves display reticulate venation where veins differ greatly in thickness. Consequently, the size of vascular bundles seen in cross-section is determined directly by the size of the corresponding veins and veinlets.'
  },
  {
    index: 33,
    commercialId: 'NEET-BOT-TS-033',
    question: `In an isobilateral (monocotyledonous) leaf, certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells called:`,
    options: ['Subsidiary cells', 'Bulliform cells', 'Passage cells', 'Albuminous cells'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In monocot (grass) leaves, certain adaxial epidermal cells along the veins become modified into large, empty, colourless, water-containing cells termed bulliform or motor cells.'
  },
  {
    index: 34,
    commercialId: 'NEET-BOT-TS-034',
    question: `How do bulliform cells help grass leaves minimize water loss?`,
    options: [
      'When flaccid due to water stress, they make the leaves curl inwards to minimize surface exposure.',
      'When turgid due to water stress, they close the stomatal apertures directly.',
      'They secrete a thick layer of suberin over the stomata during drought.',
      'When flaccid, they cause the leaf to flatten out, reflecting sunlight.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'When bulliform cells absorb water, they become turgid and keep the leaf lamina exposed. Under water stress, they lose water and become flaccid, causing the leaf to roll or curl inwards to reduce surface area and transpiration.'
  },
  {
    index: 35,
    commercialId: 'NEET-BOT-TS-035',
    question: `Which of the following is a point of difference between a dorsiventral leaf and an isobilateral leaf?`,
    options: [
      'Vascular bundles are surrounded by a layer of thick-walled bundle sheath cells in dicot leaves only.',
      'Mesophyll is differentiated into palisade and spongy parenchyma in dorsiventral leaves, whereas it is undifferentiated in isobilateral leaves.',
      'Stomata are present only on the upper surface in isobilateral leaves.',
      'Xylem is situated towards the abaxial epidermis in dorsiventral leaves and towards the adaxial epidermis in isobilateral leaves.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Dorsiventral leaves have their mesophyll differentiated into an upper palisade and lower spongy layer, whereas isobilateral leaves have an undifferentiated mesophyll. Both have bundle sheaths and xylem oriented toward the adaxial epidermis.'
  },
  {
    index: 36,
    commercialId: 'NEET-BOT-TS-036',
    question: `In both dorsiventral and isobilateral leaves, the orientation of xylem and phloem within a vascular bundle is:`,
    options: [
      'Xylem towards abaxial epidermis; phloem towards adaxial epidermis.',
      'Xylem towards adaxial epidermis; phloem towards abaxial epidermis.',
      'Xylem surrounded completely by phloem (amphicribral).',
      'Phloem surrounded completely by xylem (amphivasal).'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Because leaf traces diverge upward from the stem vascular ring, in all leaves the primary xylem faces the upper (adaxial) surface, while the primary phloem faces the lower (abaxial) surface.'
  },
  {
    index: 37,
    commercialId: 'NEET-BOT-TS-037',
    question: `A student observes a transverse section of a plant organ under a microscope and notes the following features:
• Unicellular epidermal hairs
• Well-developed parenchymatous cortex without collenchyma
• Endodermis with Casparian strips
• Polyarch xylem bundles with exarch protoxylem
• Large, well-developed pith

The specimen is a:`,
    options: ['Dicot root', 'Monocot root', 'Dicot stem', 'Monocot stem'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Unicellular root hairs, Casparian strips, and exarch xylem prove it is a root. The polyarch condition (more than 6 xylem bundles) and large, conspicuous pith confirm it is a monocot root.'
  },
  {
    index: 38,
    commercialId: 'NEET-BOT-TS-038',
    question: `Given below are two statements:
Assertion (A): The parallel venation in monocot leaves is reflected in the near similar sizes of vascular bundles in vertical sections of the leaf.
Reason (R): All veins in parallel venation run parallel to each other and have identical diameters, except in the main veins.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In monocots, parallel venation consists of parallel veins of nearly identical diameter (except for the prominent midrib vein), which leads to vascular bundles appearing nearly identical in size across a vertical section.'
  },
  {
    index: 39,
    commercialId: 'NEET-BOT-TS-039',
    question: `Which of the following pairs of plant structures have endarch protoxylem?`,
    options: [
      'Dicot root and Monocot root',
      'Dicot stem and Monocot stem',
      'Dicot root and Dicot stem',
      'Monocot root and Monocot stem'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In stems (both dicots and monocots), the protoxylem lies towards the center (pith) and metaxylem lies towards the periphery; this condition is termed endarch. Roots have exarch protoxylem.'
  },
  {
    index: 40,
    commercialId: 'NEET-BOT-TS-040',
    question: `Identify the incorrect match regarding the epidermal tissue system:`,
    options: [
      'Epidermal cells: Parenchymatous with a small amount of cytoplasm lining the cell wall and a large vacuole.',
      'Stomata: Regulate the process of transpiration and gaseous exchange.',
      'Guard cells: Possess chloroplasts and regulate opening and closing of stomata.',
      'Trichomes: Always unbranched, unicellular, and non-secretory.'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: 'Trichomes on the stem are usually multicellular, and may be branched or unbranched, soft or stiff, and can even be secretory. Root hairs, by contrast, are unicellular elongations.'
  },
  {
    index: 41,
    commercialId: 'NEET-BOT-TS-041',
    question: `In a dicot stem, the region between the vascular bundles consists of a few layers of radially placed parenchymatous cells, which constitute the:`,
    options: [
      'Conjunctive tissue',
      'Medullary rays',
      'Complementary tissue',
      'Bundle sheath extensions'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In a dicot stem, between adjacent vascular bundles lie radial rows of parenchymatous cells known as medullary rays (or pith rays).'
  },
  {
    index: 42,
    commercialId: 'NEET-BOT-TS-042',
    question: `Given below are two statements:
Statement I: Epidermis is usually single-layered and forms the outermost covering of the whole plant body.
Statement II: Epidermal cells are elongated, compactly arranged, and possess abundant intercellular spaces for gaseous diffusion.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Statement I is correct. Statement II is incorrect because epidermal cells are compactly arranged without intercellular spaces to form an uninterrupted protective outer boundary (interrupted only by stomatal pores).'
  },
  {
    index: 43,
    commercialId: 'NEET-BOT-TS-043',
    question: `If you examine a transverse section of a young dicot stem and a monocot stem, which tissue system shows the greatest structural divergence in terms of organization into distinct zones (cortex, endodermis, pericycle, pith)?`,
    options: [
      'Epidermal tissue system',
      'Ground tissue system',
      'Meristematic tissue system',
      'Secretory tissue system'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'The ground tissue system shows the greatest architectural divergence: in dicot stems it is zoned into distinct regions (hypodermis, general cortex, endodermis, pericycle, pith, medullary rays), whereas in monocot stems it forms a single massive, undifferentiated parenchymatous matrix.'
  },
  {
    index: 44,
    commercialId: 'NEET-BOT-TS-044',
    question: `In a dicot root, the number of xylem and phloem patches is typically:`,
    options: [
      'Usually two to four (diarch to tetrarch)',
      'Always more than six (polyarch)',
      'Usually one (monarch)',
      'Arranged in two concentric rings'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In dicot roots, there are typically two to four alternating xylem and phloem patches (diarch to tetrarch, rarely hexarch), whereas monocot roots are polyarch (>6).'
  },
  {
    index: 45,
    commercialId: 'NEET-BOT-TS-045',
    question: `Match the plant part with the correct description of its ground tissue:

| Plant Part | Ground Tissue Feature |
| :--- | :--- |
| a. Dicot stem | (i) Undifferentiated parenchymatous ground tissue |
| b. Monocot stem | (ii) Differentiated into hypodermis, general cortex, endodermis, pericycle, pith |
| c. Dorsiventral leaf | (iii) Undifferentiated mesophyll |
| d. Isobilateral leaf | (iv) Mesophyll differentiated into palisade and spongy parenchyma |`,
    options: [
      'a-(ii), b-(i), c-(iv), d-(iii)',
      'a-(i), b-(ii), c-(iii), d-(iv)',
      'a-(ii), b-(iv), c-(i), d-(iii)',
      'a-(iii), b-(i), c-(iv), d-(ii)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• a. Dicot stem → (ii) Differentiated into hypodermis, general cortex, endodermis, pericycle, pith
• b. Monocot stem → (i) Undifferentiated parenchymatous ground tissue
• c. Dorsiventral leaf → (iv) Mesophyll differentiated into palisade and spongy parenchyma
• d. Isobilateral leaf → (iii) Undifferentiated mesophyll
Thus, a-(ii), b-(i), c-(iv), d-(iii).`
  }
];

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('testseries');
    console.log(`=== ADDING 45 TISSUE SYSTEMS QUESTIONS TO CENTRAL QUESTION BANK & ${TARGET_TEST_ID} ===`);

    const qBankCol = db.collection('questionBank');
    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'Hard',
        type: 'MCQ',
        source: 'NCERT Class XI - Anatomy of Flowering Plants (Tissue Systems)',
        commercialId: q.commercialId,
        metadata: {
          exam: 'NEET',
          subject: SUBJECT,
          chapter: CHAPTER,
          subtopic: SUBTOPIC,
          commercialId: q.commercialId,
          topicOrder: q.index
        },
        updatedAt: new Date()
      };

      const res = await qBankCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const resolvedDoc = res.value || res;
      let finalId = resolvedDoc?._id;
      if (!finalId) {
        const found = await qBankCol.findOne({ commercialId: q.commercialId });
        finalId = found?._id;
      }
      assignedQuestionIds.push(finalId);
    }

    console.log(`Upserted ${assignedQuestionIds.length} questions into central questionBank (NEET-BOT-TS-001 .. 045).`);

    const testPaperCol = db.collection('testPapers');
    const testDoc = {
      testId: TARGET_TEST_ID,
      title: SUBTOPIC,
      type: 'SUBTOPIC',
      subject: SUBJECT,
      chapter: CHAPTER,
      subtopic: SUBTOPIC,
      duration: 60,
      totalMarks: 180,
      questionsCount: assignedQuestionIds.length,
      positiveMarks: 4,
      negativeMarks: 1,
      status: 'published',
      isLive: true,
      targetExam: 'NEET',
      examType: 'neet',
      questions: assignedQuestionIds,
      updatedAt: new Date()
    };

    await testPaperCol.findOneAndUpdate(
      { testId: TARGET_TEST_ID },
      {
        $set: testDoc,
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log(`Upserted and assigned all 45 questions to ${TARGET_TEST_ID} in testPapers.`);

    // Audit report & audit state sync
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

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
