const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const questionsData = [
  {
    qNo: 1,
    question: "Based on their location in the plant body, intercalary meristems are classified as primary meristems because they",
    options: [
      "Develop directly from permanent tissues by dedifferentiation",
      "Appear early in life of a plant and contribute to the formation of the primary plant body",
      "Are responsible only for radial expansion and increase in girth of organs",
      "Are completely devoid of active cell division and dense cytoplasm"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both apical meristems and intercalary meristems appear early in the life of a plant and contribute to the formation of the primary plant body; hence, both are termed primary meristems. Intercalary meristems are actively dividing tissues possessing dense cytoplasm.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 2,
    question: "While running an audit on cellular components, an educator lists the following tissues/cells:\nCollenchyma, Tracheids, Sieve tube elements, Vessels, Parenchyma, Phloem fibres, Companion cells\nHow many of the above are living at functional maturity?",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Living at functional maturity: (1) Collenchyma (living mechanical tissue), (2) Sieve tube elements (enucleated but living protoplast), (3) Parenchyma (thin-walled, living), (4) Companion cells (specialized parenchymatous living cells). Dead at maturity: Tracheids, Vessels, and Phloem fibres (bast fibres). Total living = 4.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 3,
    question: "Read the following statements w.r.t. plant tissues:\nStatement A: Simple permanent tissues are made up of more than one type of cells which work together as a unit.\nStatement B: Collenchyma occurs in layers below the epidermis in most of the dicotyledonous plants.\nChoose the correct option.",
    options: [
      "Both statements A and B are correct",
      "Both statements A and B are incorrect",
      "Only statement A is correct",
      "Only statement B is correct"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Statement A is incorrect: Simple permanent tissues are made of only one type of cell performing similar functions. Complex tissues (xylem and phloem) are made of more than one type of cell. Statement B is correct: Collenchyma occurs in layers immediately beneath the epidermis (hypodermis) in most dicotyledonous plants.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 4,
    question: "Sclereids differ from sclerenchymatous fibres as the former",
    options: [
      "Are elongated, needle-like with pointed ends",
      "Are spherical, oval or cylindrical with extremely narrow lumina",
      "Lack lignified cell walls at maturity",
      "Possess abundant active cytoplasm and central large nuclei"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Sclereids are spherical, oval, or cylindrical, highly thickened dead cells with very narrow lumina (cavities). Sclerenchymatous fibres are elongated, needle-like with pointed ends. Both are dead, lignified, and devoid of protoplasm.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 5,
    question: "Assertion (A): Gymnosperms can transport water and minerals effectively even in the absence of xylem vessels.\nReason (R): Tracheids and xylem vessels both possess perforations in their common end walls.\nIn the light of the above statements, choose the correct option.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Assertion (A) is true: Gymnosperms lack xylem vessels (except order Gnetales) and depend entirely on tracheids for water and mineral transport. Reason (R) is false: Tracheids possess imperforate end walls where water moves via bordered pits; vessels possess perforations (perforation plates) at their end walls.",
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason Question"
  },
  {
    qNo: 6,
    question: "Comprehend the given statements w.r.t. collenchyma:\n(a) The cells are thickened at the corners due to a deposition of cellulose, hemicellulose, and pectin.\n(b) They provide mechanical support to growing parts of the plant, such as young stem and petiole of a leaf.\n(c) They often contain chloroplasts and assimilate food when chloroplasts are present.\nSelect the correct option.",
    options: [
      "(a), (b) and (c) are correct",
      "Only (a) and (b) are correct",
      "Only (c) is correct",
      "(b) and (c) are incorrect"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "All three statements are direct NCERT facts: collenchyma cells have corners thickened with cellulose, hemicellulose, and pectin; they provide mechanical elasticity/support to young growing stems and petioles; and they often contain chloroplasts and assimilate food when present.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 7,
    question: "In roots, the protoxylem lies towards _____(i)_____ and metaxylem lies towards _____(ii)_____, and this primary xylem arrangement is termed _____(iii)_____.\nSelect the correct option to fill in the respective blanks.",
    options: [
      "(i) Centre (pith); (ii) Periphery; (iii) Endarch",
      "(i) Periphery; (ii) Centre (pith); (iii) Exarch",
      "(i) Periphery; (ii) Centre (pith); (iii) Endarch",
      "(i) Centre (pith); (ii) Periphery; (iii) Exarch"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In roots, the protoxylem lies towards the periphery and metaxylem lies towards the centre (pith). This primary xylem arrangement is termed exarch. In stems, protoxylem is central and metaxylem peripheral (termed endarch).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 8,
    question: "Select the correct statement regarding phloem in gymnosperms:",
    options: [
      "They possess sieve tube elements and companion cells identical to angiosperms",
      "They have albuminous cells and sieve cells, but lack sieve tubes and companion cells",
      "They have companion cells associated with specialized sieve cells via simple pits",
      "They completely lack all types of phloem parenchyma and phloem fibres"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Gymnosperms possess sieve cells and specialized parenchymatous albuminous cells (Strasburger cells). They lack true sieve tube elements and companion cells (NCERT Section 6.1.2.2).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 9,
    question: "Which of the following are components of the epidermal tissue system?\n(a) Epidermal cells\n(b) Stomata\n(c) Cuticle\n(d) Trichomes and root hairs\nChoose the correct option.",
    options: [
      "(a), (b), (c) and (d)",
      "Only (a) and (b)",
      "Only (a), (b) and (d)",
      "Only (b) and (d)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The epidermal tissue system forms the outermost protective covering and comprises: epidermal cells, stomata, cuticle, and epidermal appendages (trichomes in shoots and root hairs in roots). All four items are integral components.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 10,
    question: "A specialized plant cell 'X' is enucleated at maturity, yet remains metabolically active and functions under the control of the nucleus of an adjacent sister cell. 'X' is",
    options: [
      "Xylem tracheid",
      "Sieve tube element",
      "Phloem parenchyma cell",
      "Bulliform cell"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Mature sieve tube elements lack a nucleus, having a large central vacuole and peripheral cytoplasm. Their metabolic activities and pressure gradients are regulated by the nucleus of adjacent companion cells (sister cells derived ontogenetically from the same mother cell).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 11,
    question: "The ground tissue system forms the bulk of the plant body. It does not include",
    options: [
      "Cortex and pith",
      "Mesophyll of leaves",
      "Epidermis and vascular bundles",
      "Pericycle and medullary rays"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "All tissues except the epidermis and vascular bundles constitute the ground (or fundamental) tissue system (e.g., cortex, pericycle, medullary rays, pith, and leaf mesophyll).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 12,
    question: "Select the pair that correctly depicts dumb-bell shaped guard cells:",
    options: [
      "Sunflower and Pea",
      "Grasses and Wheat",
      "Bean and Gram",
      "Mango and Guava"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In grasses and cereals (monocots like Wheat, Grasses, Maize), guard cells are dumb-bell shaped. In typical dicotyledons (Bean, Pea, Sunflower, Gram), guard cells are bean-shaped or kidney-shaped.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 13,
    question: "Choose the incorrect statement w.r.t. root anatomy:",
    options: [
      "Root hairs are unicellular elongations of the epidermal cells",
      "Endodermis consists of a single layer of barrel-shaped cells without intercellular spaces",
      "Casparian strips are tangential as well as radial deposits of suberin",
      "Vascular bundles in roots are always conjoint and collateral"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Vascular bundles in roots are always radial (xylem and phloem alternate on different radii) and exarch. Conjoint, collateral bundles are characteristic of stems and leaves.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 14,
    question: "Select the incorrect statement w.r.t. the trichomes on stem:",
    options: [
      "They are usually multicellular in the shoot system",
      "They may be branched or unbranched, and soft or stiff",
      "They are always unicellular and function primarily in water absorption",
      "They help in preventing water loss due to transpiration and can be secretory"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Trichomes are epidermal hairs present on the shoot system. They are usually multicellular, branched or unbranched, prevent transpiration water loss, and may be secretory. Unicellular hairs dedicated to water absorption are root hairs, not shoot trichomes.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 15,
    question: "Match Column I with Column II and select the correct option.\nColumn I:\n(i) Pulp of guava and sapota\n(ii) Corners thickened with pectin\n(iii) Radial conduction of water\n(iv) Rolling of monocot leaves\nColumn II:\n(a) Collenchyma\n(b) Sclereids\n(c) Bulliform cells\n(d) Ray parenchyma cells",
    options: [
      "(i)-(b), (ii)-(a), (iii)-(d), (iv)-(c)",
      "(i)-(b), (ii)-(a), (iii)-(c), (iv)-(d)",
      "(i)-(a), (ii)-(b), (iii)-(d), (iv)-(c)",
      "(i)-(c), (ii)-(a), (iii)-(d), (iv)-(b)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "(i) Pulp of guava, sapota, pear -> (b) Sclereids (stone cells providing grittiness). (ii) Corners thickened with pectin -> (a) Collenchyma. (iii) Radial conduction of water -> (d) Ray parenchyma cells. (iv) Rolling of monocot leaves -> (c) Bulliform cells.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 16,
    question: "Read the following statements:\nStatement A: Phloem fibres (bast fibres) are made up of sclerenchymatous cells and are generally absent in primary phloem.\nStatement B: Phloem parenchyma is absent in most of the monocotyledons.\nChoose the correct option.",
    options: [
      "Both statements A and B are correct",
      "Both statements A and B are incorrect",
      "Only statement A is correct",
      "Only statement B is correct"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Both statements are direct NCERT facts: Primary phloem generally lacks phloem fibres; they occur abundantly in secondary phloem (commercial bast fibres like jute, flax, hemp). Phloem parenchyma is absent in most monocotyledons.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 17,
    question: "Suberin deposition in the form of Casparian strips is characteristic of",
    options: [
      "Epiblema of dicot root",
      "Hypodermis of monocot stem",
      "Endodermis of roots",
      "Pericycle of dicot stem"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The endodermis of roots contains deposition of water-impermeable, waxy suberin in the form of Casparian strips on both radial and tangential walls.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 18,
    question: "Vessel elements are characterized by the presence of",
    options: [
      "Narrow lumina and imperforate end walls",
      "Lignified walls, wide central lumen, and perforated end plates",
      "Living protoplasm and thin cellulosic walls",
      "Enucleated living protoplast with peripheral cytoplasm"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Vessel elements are cylindrical tube-like structures with lignified walls, a wide central cavity (lumen), devoid of protoplasm (dead at maturity), and interconnected by perforations in their end walls.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 19,
    question: "Read the following anatomical features w.r.t. a dicotyledonous stem:\n(a) Collenchymatous hypodermis\n(b) 'Ring' arrangement of vascular bundles\n(c) Sclerenchymatous semilunar patches of pericycle\n(d) Conjoint, open vascular bundles with endarch protoxylem\n(e) Well-developed central parenchymatous pith\nHow many of the above given features are correct?",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "All five listed features are classic characteristics of a typical dicotyledonous stem: (a) collenchymatous hypodermis, (b) eustele / ring arrangement of bundles, (c) sclerenchymatous semilunar patches in pericycle, (d) conjoint, open bundles with endarch protoxylem, and (e) distinct central pith. Total correct = 5.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 20,
    question: "Select the correct statement:",
    options: [
      "Meristematic cells have thick secondary walls and small inconspicuous nuclei",
      "Both vessels and tracheids are dead, lignified, and devoid of protoplasm at maturity",
      "Sieve tube elements conduct organic solutes bidirectionally without the aid of companion cells",
      "In stems, protoxylem lies towards periphery and metaxylem lies towards center"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Both vessels and tracheids are dead, lignified, empty, and devoid of protoplasm at maturity. Option 1 is false (meristems have thin primary walls, large nuclei). Option 3 is false (sieve tubes depend directly on companion cells). Option 4 is false (stems show endarch xylem: protoxylem towards center).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 21,
    question: "In a dorsiventral (dicot) leaf, the palisade parenchyma",
    options: [
      "Lies towards the abaxial epidermis and has large intercellular spaces",
      "Lies towards the adaxial epidermis and consists of elongated, vertically parallel cells",
      "Is completely absent, and only spongy parenchyma forms the mesophyll",
      "Surrounds the vascular bundle as a thick-walled sclerenchymatous sheath"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In a dorsiventral (dicot) leaf, the palisade parenchyma lies towards the upper (adaxial) epidermis and is composed of vertically elongated, compact, parallel cells. Spongy parenchyma lies towards the lower (abaxial) epidermis.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 22,
    question: "Radial vascular bundles are characterized by",
    options: [
      "Xylem and phloem lying along the same radius alternate to each other",
      "Xylem and phloem arranged alternately on different radii",
      "Phloem surrounding the xylem completely",
      "Xylem and phloem separated by a functional stripe of cambium"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In radial vascular bundles, primary xylem and primary phloem strands lie along different/alternate radii (found exclusively in roots).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 23,
    question: "If the Casparian strips of root endodermal cells were completely degraded, which of the following processes would be directly disrupted?",
    options: [
      "Translocation of sucrose through phloem sieve tubes",
      "Symplastic checkpoint regulating mineral entry into the vascular cylinder",
      "Production of lateral roots from outer pericycle",
      "Mitotic division of apical meristems"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The Casparian strip blocks the apoplastic movement of water and dissolved minerals across the endodermis, forcing solutes across the plasma membrane into the symplast. This enables the root to selectively regulate and control which minerals enter the vascular cylinder.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 24,
    question: "A plant tissue can perform all of the following functions, except",
    options: [
      "Mechanical support by sclerenchyma",
      "Storage of food by parenchyma",
      "Bidirectional conduction of water and sap through xylem vessels",
      "Photosynthesis by chlorenchyma"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Water and mineral transport through xylem vessels is strictly unidirectional (root -> stem -> leaves driven by transpirational pull and root pressure). Phloem translocation of photoassimilates is bidirectional / multidirectional.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 25,
    question: "When traversing from the outer periphery to the centre in a typical dicot root, the correct sequence of tissues encountered is",
    options: [
      "Epiblema -> Cortex -> Endodermis -> Pericycle -> Vascular bundle -> Pith",
      "Epidermis -> Pericycle -> Endodermis -> Cortex -> Vascular bundle",
      "Epiblema -> Endodermis -> Cortex -> Pericycle -> Pith",
      "Cuticle -> Hypodermis -> Cortex -> Endodermis -> Pericycle"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Traversing from exterior to interior in a dicot root: Epiblema -> Cortex -> Endodermis -> Pericycle -> Vascular bundle -> Pith.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 26,
    question: "A cross-section of a plant organ shows scattered vascular bundles, each surrounded by a sclerenchymatous bundle sheath and lacking a distinct pith. The organ is most likely",
    options: [
      "Dicot root",
      "Monocot stem",
      "Dicot stem",
      "Isobilateral leaf"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "A monocot stem exhibits an atactostele: numerous scattered conjoint, closed vascular bundles, each encased in a sclerenchymatous bundle sheath, surrounded by ground tissue without a demarcated pith.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 27,
    question: "Choose the incorrect statement:",
    options: [
      "The stomatal aperture, guard cells and surrounding subsidiary cells together form stomatal apparatus",
      "Guard cells are thin-walled on outer side and highly thickened on inner side facing the pore in dicots",
      "Cuticle is present on the epidermis of roots to prevent water absorption",
      "In isobilateral leaves, stomata are present almost equally on both surfaces"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The cuticle is completely absent in roots (epiblema/rhizodermis) as it would hinder the absorption of water from the soil.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 28,
    question: "In dicot stems, vascular bundles differ from those in monocot stems as",
    options: [
      "Former are closed and scattered",
      "Former are open and arranged in a definite ring",
      "Former lack cambium between xylem and phloem",
      "Latter possess well-developed pith and large medullary rays"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Dicot stems possess vascular bundles that are open (cambium present between xylem and phloem) and arranged in a regular ring. Monocot stem bundles are closed and scattered.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 29,
    question: "If all companion cells are selectively destroyed in a flowering plant, which step of transport will be immediately halted?",
    options: [
      "Radial diffusion of water across the cortex",
      "Loading and maintenance of pressure gradient in sieve tubes",
      "Capillary ascent of sap via dead tracheary elements",
      "Transpirational pull generation in mesophyll cells"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Companion cells load sugars (sucrose) actively into sieve tube elements, creating a hypertonic condition and hydrostatic pressure gradient necessary for bulk phloem flow. Destroying companion cells arrests phloem loading.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 30,
    question: "How many of the structures mentioned in the box below are part of the stele in a dicot root?\nPericycle, Endodermis, Xylem, Phloem, Cortex, Pith\nSelect the correct option.",
    options: [
      "Six",
      "Five",
      "Four",
      "Three"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "All tissues interior to the endodermis constitute the stele: Included: Pericycle, Xylem, Phloem, and Pith (4 components). Excluded: Endodermis and Cortex (they belong to the extra-stelar ground tissue/cortex system).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 31,
    question: "The layer of tissue named 'X' lies immediately interior to the endodermis in roots. Initiation of lateral roots occurs in cells of 'X'. Here, 'X' is",
    options: [
      "Hypodermis",
      "Pericycle",
      "Epiblema",
      "Medullary ray"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In roots, the pericycle lies immediately inside the endodermis. The initiation of lateral roots and vascular cambium (during secondary growth) originates from pericycle cells.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 32,
    question: "We can correctly say that in plants",
    options: [
      "Axillary buds are derived from root apical meristem",
      "Collenchymatous cells possess lignified secondary cell walls",
      "Gymnosperms possess sieve tubes but lack companion cells",
      "Bulliform cells become flaccid during water stress, causing leaves to curl inward"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "When bulliform (motor) cells absorb water and become turgid, the leaf surface is exposed; under water deficiency, they lose turgidity (become flaccid), causing leaves to roll inwards to minimize water loss.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 33,
    question: "Select the correct statement w.r.t. the leaf anatomy:",
    options: [
      "In a dorsiventral leaf, abaxial epidermis generally bears more stomata than adaxial epidermis",
      "The vascular bundles in leaves are radially arranged and open",
      "The size of vascular bundles is uniform irrespective of the size of veins in dicot leaves",
      "Isobilateral leaves possess a differentiated palisade and spongy parenchyma"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In a typical dorsiventral leaf, the lower (abaxial) epidermis has a higher stomatal density than the upper (adaxial) epidermis. Vein sizes vary, causing vascular bundle sizes to vary correspondingly.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 34,
    question: "Which of the following features is uniquely observed in monocot roots but not in dicot roots?",
    options: [
      "Presence of Casparian strips on endodermis",
      "Polyarch condition with more than six xylem bundles and a large, well-developed pith",
      "Unicellular root hairs arising from epiblema",
      "Exarch arrangement of primary xylem"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Dicot roots usually have 2 to 4 (rarely up to 6; diarch to hexarch) xylem bundles and a small/inconspicuous pith. Monocot roots have polyarch xylem (more than 6 bundles) and a large, well-developed pith.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 35,
    question: "In an isobilateral leaf, the bulliform cells",
    options: [
      "Are small, thick-walled and highly lignified cells located in the spongy mesophyll",
      "Are large, empty, colourless cells present on the adaxial epidermis of grasses",
      "Help in opening of stomata by secreting acidic ions into guard cells",
      "Synthesize large reserves of starch during bright sunny days"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Bulliform cells are large, empty, bubble-shaped, thin-walled, colourless cells present on the adaxial (upper) epidermis of monocot (grass) leaves.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 36,
    question: "While examining a transverse section of an unknown dicot stem under the microscope, a student noticed semilunar patches of sclerenchyma just above the phloem. This structure represents",
    options: [
      "Endodermis",
      "Pericycle",
      "Hypodermis",
      "Medullary rays"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In dicot stems (such as Helianthus / Sunflower), the pericycle is heterogeneous: it occurs as semilunar patches of sclerenchyma on the outer boundary of each phloem patch (hard bast), alternating with parenchymatous cells.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 37,
    question: "The protoxylem lacuna (water-containing cavity) within the vascular bundle is a characteristic feature of",
    options: [
      "Monocot root",
      "Dicot root",
      "Monocot stem",
      "Dicot stem"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "A water-containing cavity (protoxylem lacuna/cavity) formed by the breakdown of early protoxylem elements is characteristic of the vascular bundles of monocot stems (e.g., maize).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 38,
    question: "The cells of which layer in a dicotyledonous stem are rich in starch grains and are referred to as the 'starch sheath'?",
    options: [
      "Hypodermis",
      "Endodermis",
      "Pericycle",
      "Epidermis"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The innermost layer of the cortex in a dicot stem is the endodermis. Its cells are conspicuously packed with starch grains, earning it the designation starch sheath.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 39,
    question: "Read the following statements w.r.t. cell type 'X':\n(a) Elongated or tube-like cells with thick and lignified walls and tapering ends.\n(b) Devoid of protoplasm at maturity.\n(c) Possess pits on their walls for conduction of water and minerals.\nIdentify 'X' and select the correct option.",
    options: [
      "Sieve tube element",
      "Tracheid",
      "Xylem parenchyma",
      "Collenchyma"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Tracheids are elongated, imperforate cells with tapered ends and lignified walls bearing bordered/simple pits, dead and non-living at maturity.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 40,
    question: "Assertion (A): In dicot stem, vascular bundles are termed 'conjoint, collateral and open'.\nReason (R): A strip of intrafascicular cambium is present between xylem and phloem in each bundle, giving them the capacity to form secondary tissues.\nIn the light of the above statements, choose the correct option.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are false",
      "(A) is true but (R) is false",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Assertion is true: Dicot stem bundles are conjoint (xylem and phloem together), collateral (phloem on the outer side of xylem), and open. Reason is true and explains (A): They are called 'open' precisely because the presence of intrafascicular cambium retains the open capacity for secondary growth.",
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason Question"
  },
  {
    qNo: 41,
    question: "The tissue located between the endodermis and the vascular bundles in stems and roots, which can be sclerenchymatous or parenchymatous, is called",
    options: [
      "Hypodermis",
      "Cortex",
      "Pericycle",
      "Pith"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The pericycle represents the outermost region of the stele, situated between the endodermis and the vascular tissues.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 42,
    question: "Which of the following is present in a dicot stem but absent in a monocot stem?",
    options: [
      "Cuticle",
      "Phloem",
      "Collenchymatous hypodermis",
      "Epidermis"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Dicot stems have a collenchymatous hypodermis providing tensile strength, whereas monocot stems have a sclerenchymatous hypodermis providing rigid mechanical strength.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 43,
    question: "Primary phloem is categorized into protophloem and metaphloem based on",
    options: [
      "Position relative to cambium",
      "Sieve elements having narrow or bigger sieve tubes depending on time of maturation",
      "Presence or absence of phloem fibres",
      "Nature of companion cells attached"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The first-formed primary phloem consists of narrow sieve tubes and is called protophloem. Later-formed primary phloem has wider/bigger sieve tubes and is called metaphloem.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 44,
    question: "Read the following statements:\n(a) Xylem parenchyma cells are living and their cell walls are made of cellulose.\n(b) Gymnosperms have albuminous cells instead of companion cells.\n(c) Vessels are characteristic of angiosperms and completely absent in all pteridophytes and gymnosperms without exception.\nHow many of the above statements is/are incorrect?",
    options: [
      "Three",
      "Two",
      "One",
      "Zero"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Statement (a) is correct. Statement (b) is correct. Statement (c) is incorrect: While vessels are absent in most gymnosperms and pteridophytes, exceptions exist—gymnosperm order Gnetales (Gnetum, Ephedra, Welwitschia) and pteridophytes like Selaginella and Equisetum possess vessels. Total incorrect statements = 1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 45,
    question: "Monocotyledonous leaves are characterized by parallel venation, which is reflected anatomically in",
    options: [
      "Complete absence of vascular bundles in the midrib region",
      "Nearly similar sizes of vascular bundles, except in the main veins",
      "Formation of radial and exarch vascular bundles in the leaf blade",
      "Absence of stomata on both leaf surfaces"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Parallel venation in monocot leaves is reflected in the cross-section by vascular bundles of nearly uniform size, except for the larger main bundle(s) running through the primary veins/midrib.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  }
];

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log("Connected to MongoDB. Starting insertion of 45 Anatomy of Flowering Plants questions...");

  const insertedIds = [];
  const now = new Date();

  for (const q of questionsData) {
    const existing = await db.collection('questionBank').findOne({
      subject: 'Botany',
      question: q.question
    });

    if (existing) {
      console.log(`Q${q.qNo} already exists with ID: ${existing._id}`);
      insertedIds.push(existing._id);
    } else {
      const doc = {
        type: q.type,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: "Botany",
        chapter: "Anatomy of Flowering Plants",
        topic: "Anatomy of Flowering Plants",
        subTopic: "Tissues and Anatomy",
        difficulty: "Difficult",
        class: "Class 11",
        marks: 4,
        negativeMarks: 1,
        tag: "Top 100 AIR NEET",
        createdAt: now,
        updatedAt: now,
        cognitiveLevel: "Application & Analysis",
        commercialId: `NEET-BOT-AFP-${String(q.qNo).padStart(3, '0')}`,
        commercialReady: true,
        exam: "NEET",
        idealTimeSeconds: 60,
        targetExams: ["NEET"],
        questionType: q.questionType,
        usedInTests: ["neet-PART-6"]
      };

      const res = await db.collection('questionBank').insertOne(doc);
      console.log(`Q${q.qNo} inserted with ID: ${res.insertedId}`);
      insertedIds.push(res.insertedId);
    }
  }

  console.log(`\nAll ${insertedIds.length} question IDs ready. Now mapping to neet-PART-6...`);

  const testPaper = await db.collection('testPapers').findOne({ testId: 'neet-PART-6' });
  if (!testPaper) {
    console.error("Test paper neet-PART-6 not found in testPapers!");
    await client.close();
    process.exit(1);
  }

  const existingQuestions = testPaper.questions || [];
  console.log(`Current questions in neet-PART-6: ${existingQuestions.length}`);

  // Questions order in neet-PART-6: Physics (0-44), Chemistry (45-89), Botany (90-134), Zoology (135-179)
  const physicsQs = existingQuestions.slice(0, 45);
  const chemistryQs = existingQuestions.slice(45, 90);
  const zoologyQs = existingQuestions.slice(135, 180);

  const updatedQuestions = [
    ...physicsQs,
    ...chemistryQs,
    ...insertedIds,
    ...zoologyQs
  ];

  console.log(`Updated questions length: ${updatedQuestions.length} (Physics: ${physicsQs.length}, Chemistry: ${chemistryQs.length}, Botany: ${insertedIds.length}, Zoology: ${zoologyQs.length})`);

  const updateResult = await db.collection('testPapers').updateOne(
    { testId: 'neet-PART-6' },
    {
      $set: {
        questions: updatedQuestions,
        questionsCount: updatedQuestions.length,
        totalQuestions: updatedQuestions.length,
        updatedAt: new Date()
      }
    }
  );

  console.log(`testPapers update result: matched=${updateResult.matchedCount}, modified=${updateResult.modifiedCount}`);

  // Verify post-import
  const verifiedDoc = await db.collection('testPapers').findOne({ testId: 'neet-PART-6' });
  const botanySlice = verifiedDoc.questions.slice(90, 135);
  console.log("Botany slice in neet-PART-6 length:", botanySlice.length);
  
  const verifiedBotanyQuestions = await db.collection('questionBank').find({
    _id: { $in: botanySlice }
  }).toArray();

  console.log("Verified Botany questions count in questionBank:", verifiedBotanyQuestions.length);
  console.log("Difficulties:", [...new Set(verifiedBotanyQuestions.map(q => q.difficulty))]);
  console.log("Chapters:", [...new Set(verifiedBotanyQuestions.map(q => q.chapter))]);
  console.log("Subjects:", [...new Set(verifiedBotanyQuestions.map(q => q.subject))]);

  await client.close();
  console.log("Done successfully!");
}

run().catch(err => {
  console.error("Error executing script:", err);
  process.exit(1);
});
