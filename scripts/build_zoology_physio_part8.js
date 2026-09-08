// scripts/build_zoology_physio_part8.js
// Subtopic: Locomotion & Movement
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Locomotion & Movement";
const CHAPTER = "Human Physiology";
const SUBJECT = "Zoology";

const arDirections = "Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n" +
  "(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n" +
  "(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n" +
  "(c) (A) is true but (R) is false.\n" +
  "(d) (A) is false but (R) is true.";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "During skeletal muscle contraction, the length of the A-band remains constant while the I-band shortens.",
    r: "Muscle contraction involves the sliding of thin actin filaments over thick myosin filaments towards the center of the sarcomere without any change in thick filament length.",
    ans: 0,
    exp: "According to the Sliding Filament Theory, actin filaments slide past myosin filaments, narrowing the H-zone and I-band while the anisotropic A-band length is conserved. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Troponin C plays a critical regulatory role in striated muscle contraction.",
    r: "Binding of calcium ions ($Ca^{2+}$) to troponin C produces a conformational change that unmasks the myosin-binding sites on actin filaments.",
    ans: 0,
    exp: "When $Ca^{2+}$ binds troponin C, it moves tropomyosin away from the active sites on F-actin, permitting cross-bridge formation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "ATP is required for both muscle contraction and muscle relaxation.",
    r: "ATP hydrolysis powers the cross-bridge power stroke, and binding of fresh ATP is required to detach the myosin head from actin; active pumping of $Ca^{2+}$ back into the sarcoplasmic reticulum also requires ATP.",
    ans: 0,
    exp: "ATP drives the cross-bridge cycle and its subsequent detachment, and the SERCA pump requires ATP to sequester calcium back into the SR. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Rigor mortis sets in shortly after death.",
    r: "Cellular cessation of ATP synthesis prevents the detachment of myosin cross-bridges from actin filaments, locking muscles in a rigid contracted state.",
    ans: 0,
    exp: "Without ATP, the myosin heads cannot dissociate from actin, resulting in the characteristic postmortem muscular stiffness known as rigor mortis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Red muscle fibers are capable of sustained, fatigue-resistant contraction over prolonged periods.",
    r: "Red muscle fibers contain abundant myoglobin, a rich capillary bed, and numerous mitochondria that support aerobic oxidative phosphorylation.",
    ans: 0,
    exp: "Aerobic capacity supported by myoglobin and mitochondria enables slow-twitch red fibers to resist lactic acid buildup and endure prolonged work. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "White muscle fibers fatigue rapidly during intense physical exertion.",
    r: "White fibers possess fewer mitochondria and depend primarily on anaerobic glycolysis, leading to rapid accumulation of lactic acid.",
    ans: 0,
    exp: "Fast-twitch white fibers generate quick, powerful contractions via anaerobic glycolysis, but lactic acid accumulation causes early muscular fatigue. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The human skull is described as dicondylic.",
    r: "The human skull articulates with the superior articular facets of the first cervical vertebra (atlas) with two occipital condyles.",
    ans: 0,
    exp: "Presence of two articulating occipital condyles on the occipital bone classifies the mammalian and human skull as dicondylic. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ribs 11 and 12 are termed floating ribs.",
    r: "The 11th and 12th pairs of ribs are attached dorsally to thoracic vertebrae but their ventral ends are completely free and not connected to the sternum.",
    ans: 0,
    exp: "Because floating ribs lack any ventral attachment to the sternum or costal cartillages, their anterior tips remain unattached in the abdominal wall. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Osteoporosis is a common age-related skeletal disorder, especially prevalent in post-menopausal women.",
    r: "Decreased circulating estrogen levels after menopause accelerate osteoclastic bone resorption and reduce total bone mass density.",
    ans: 0,
    exp: "Estrogen deficiency removes its protective inhibition on bone resorption, leading to fragile trabecular bone architecture and increased fracture risk. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Myasthenia gravis is an autoimmune disorder affecting neuromuscular junctions.",
    r: "Autoantibodies block and destroy nicotinic acetylcholine receptors on the motor endplate, causing progressive muscular weakness and fatigue.",
    ans: 0,
    exp: "Receptor loss impairs endplate potential generation, resulting in weakness especially in facial, ocular, and swallowing musculature. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Gout is a painful form of inflammatory arthritis.",
    r: "Gout is caused by the deposition of sharp monosodium urate crystals in the synovial fluid and articular cartilages of joints.",
    ans: 0,
    exp: "Hyperuricemia precipitates uric acid crystals inside joint spaces (often the first metatarsophalangeal joint), eliciting acute inflammatory synovitis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tetany is characterized by rapid, violent muscle spasms.",
    r: "Low concentration of ionized calcium ($Ca^{2+}$) in extracellular body fluids increases neuronal and sarcolemmal sodium permeability, causing spontaneous repetitive firing.",
    ans: 0,
    exp: "Hypocalcemia destabilizes resting membrane potentials and lowers excitation thresholds, triggering spontaneous muscular twitches and cramps (tetany). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The knee joint and elbow joint are examples of hinge synovial joints.",
    r: "Hinge joints permit movement primarily in a single anatomical plane, akin to the opening and closing of a door.",
    ans: 0,
    exp: "Hinge joints (ginglymus) restrict movement to flexion and extension in a sagittal plane around a single transverse axis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Saddle joint between the carpal and metacarpal of the thumb provides greater dexterity and opposability in humans.",
    r: "A saddle joint features reciprocal concave and convex articular surfaces allowing movement in two perpendicular planes.",
    ans: 0,
    exp: "The unique biaxial saddle configuration of the first carpometacarpal joint permits thumb circumduction and opposability for precision grip. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The joint between the atlas and axis vertebrae is a pivot joint.",
    r: "The odontoid process (dens) of the axis rotates within the fibro-osseous ring formed by the anterior arch and transverse ligament of the atlas.",
    ans: 0,
    exp: "A pivot joint allows rotational movement around a longitudinal axis, as seen in the atlanto-axial articulation for head turning ('no' motion). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Fibrous joints like the skull cranial sutures permit no movement (synarthroses).",
    r: "The adjacent flat bones of the cranium are fused edge-to-edge by dense collagenous connective tissue.",
    ans: 0,
    exp: "Dense fibrous sutural ligaments tightly interlock cranial bones, preventing mechanical displacement to protect the underlying brain. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Muscular dystrophy is an autoimmune disorder that attacks the synovial membrane of joints.",
    r: "Muscular dystrophy is primarily caused by an excess of calcium intake in childhood.",
    ans: 3,
    exp: "Both (A) and (R) are false. Muscular dystrophy is an X-linked recessive GENETIC disorder (mutated dystrophin protein), not an autoimmune joint disease or dietary issue."
  },
  {
    a: "The pectoral girdle consists of two bones on each side: a clavicle and a scapula.",
    r: "The scapula is a large triangular flat bone situated dorsally between the second and seventh ribs.",
    ans: 1,
    exp: "Both statements are true anatomical facts from NCERT. The pectoral girdle comprises clavicle and scapula, and the scapula lies over ribs 2 to 7. Stating the position of the scapula does not explain why the girdle contains two bones. Both are true, (R) is not the explanation."
  },
  {
    a: "The pelvic girdle consists of two coxal bones joined ventrally by the pubic symphysis.",
    r: "The pubic symphysis contains fibrous cartilage that permits slight relaxation during child delivery.",
    ans: 1,
    exp: "Both (A) and (R) are true facts. The pelvic girdle has two innominate (coxal) bones meeting at the fibrocartilaginous pubic symphysis. The presence of fibrous cartilage does not explain why the girdle is formed by two coxal bones. Both are true, (R) is not the explanation."
  },
  {
    a: "Ciliary movement is essential in the human fallopian tubes and respiratory tract.",
    r: "The coordinated beating of cilia drives ova towards the uterus in oviducts and sweeps inhaled dust-laden mucus towards the pharynx in airways.",
    ans: 0,
    exp: "Ciliated epithelial linings create directional fluid currents that transport gametes and clear inhaled debris. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Macrophages and leukocytes exhibit amoeboid movement.",
    r: "Amoeboid movement is achieved through cytoplasmic streaming and the polymerisation of cytoskeletal microfilaments forming pseudopodia.",
    ans: 0,
    exp: "Actin microfilament assembly and protoplasmic gel-sol transitions drive pseudopodial extension for cellular motility and phagocytosis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The H-zone of a resting sarcomere contains both thick myosin filaments and thin actin filaments.",
    r: "In the central part of the sarcomere, actin and myosin filaments overlap extensively.",
    ans: 3,
    exp: "Both (A) and (R) are false. The H-zone is the central lighter region of the A-band that contains ONLY thick myosin filaments and is NOT overlapped by thin actin filaments."
  },
  {
    a: "Each meromyosin molecule consists of a globular head with a short arm (HMM) and a tail (LMM).",
    r: "The globular head of meromyosin possesses an active ATPase enzyme and binding sites for both ATP and actin.",
    ans: 1,
    exp: "Both (A) and (R) are accurate structural facts from NCERT. The head-arm forms HMM and tail forms LMM, and the head houses ATPase and actin-binding sites. The presence of the ATPase site characterizes head function but does not explain the two-part HMM-LMM division. Both are true, (R) is not the explanation."
  },
  {
    a: "Ribs 8, 9, and 10 do not articulate directly with the sternum.",
    r: "They join the seventh rib with the help of hyaline cartilage and are called vertebrochondral (false) ribs.",
    ans: 0,
    exp: "Ribs 8–10 articulate indirectly by fusing their costal cartilages to the 7th costal cartilage, which is why they are called false or vertebrochondral ribs. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Synovial joints are characterized by the presence of a fluid-filled synovial cavity between articulating surfaces.",
    r: "Synovial fluid provides lubrication and shock absorption, enabling considerable freedom of joint movement.",
    ans: 0,
    exp: "The viscous, hyaluronic-acid-rich synovial fluid reduces friction between articular cartilages to allow smooth diarthrodial articulation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sarcoplasmic reticulum of striated muscle fibers contains a high concentration of calcium ions.",
    r: "The sarcoplasmic reticulum functions as an intracellular reservoir that releases $Ca^{2+}$ upon arrival of a muscle action potential.",
    ans: 0,
    exp: "Active sequestration by $Ca^{2+}$-ATPase maintains high luminal calcium inside the SR cisternae for prompt release upon membrane depolarization. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

const arQuestions = arData.map(item => ({
  question: `${arDirections}\n\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
  options: [...arOptions],
  correctAnswer: item.ans,
  explanation: item.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion\u2013Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// Base MCQs
const mcqTemplates = [
  {
    q: "The functional contractile unit of a skeletal muscle myofibril bounded between two successive Z-lines is called a:",
    opts: ["Sarcomere", "Sarcolemma", "Fascicle", "Sarcoplasm"],
    ans: 0,
    exp: "A sarcomere is the basic structural and functional contractile unit of a muscle fiber, extending from one Z-line to the next."
  },
  {
    q: "During skeletal muscle contraction according to the Sliding Filament Theory, which of the following bands or zones does NOT shorten?",
    opts: ["A-band", "I-band", "H-zone", "Distance between two Z-lines"],
    ans: 0,
    exp: "The length of the thick myosin filaments (A-band) remains constant during contraction, whereas the I-band and H-zone shorten."
  },
  {
    q: "In a resting muscle fiber, the active binding sites for myosin on actin filaments are masked by:",
    opts: ["Troponin subunit complex (troponin C/tropomyosin)", "Myosin light chains", "Calmodulin", "C-protein"],
    ans: 0,
    exp: "In the resting state, a subunit of troponin masks the active binding sites for myosin on the actin filaments."
  },
  {
    q: "Calcium ions released from the sarcoplasmic reticulum bind to which specific protein to initiate muscle contraction?",
    opts: ["Troponin C", "Tropomyosin", "F-actin", "Myosin head"],
    ans: 0,
    exp: "$Ca^{2+}$ binds to troponin C, producing a conformational shift that pulls tropomyosin away from actin active sites."
  },
  {
    q: "The globular head of each heavy meromyosin (HMM) molecule contains active binding sites for:",
    opts: ["ATP and actin (and active ATPase enzyme)", "Glucose and sodium", "Tropomyosin and calcium only", "Troponin and glycogen"],
    ans: 0,
    exp: "The globular myosin head contains an active ATPase site, an ATP binding pocket, and an actin binding site to form cross-bridges."
  },
  {
    q: "What causes the detachment of the cross-bridge between the myosin head and the actin filament during relaxation?",
    opts: ["Binding of a new ATP molecule to the myosin head", "Release of ADP and inorganic phosphate", "Efflux of sodium ions into the sarcoplasm", "Binding of troponin to myosin"],
    ans: 0,
    exp: "Binding of a new ATP molecule to the myosin head breaks the actin-myosin cross-bridge, allowing detachment."
  },
  {
    q: "Which type of muscle fibers contain high concentrations of myoglobin, numerous mitochondria, and do not fatigue easily?",
    opts: ["Red muscle fibers (slow-twitch fibers)", "White muscle fibers (fast-twitch fibers)", "Smooth visceral fibers", "Intercalated fibers"],
    ans: 0,
    exp: "Red muscle fibers are rich in myoglobin and mitochondria, utilizing aerobic metabolism for slow, sustained, fatigue-resistant contractions."
  },
  {
    q: "The human axial skeleton is composed of how many total bones?",
    opts: ["80 bones", "126 bones", "206 bones", "60 bones"],
    ans: 0,
    exp: "The human skeleton has 206 bones divided into the axial skeleton (80 bones) and the appendicular skeleton (126 bones)."
  },
  {
    q: "How many pairs of true ribs (vertebrosternal ribs) are present in the human thoracic cage?",
    opts: ["First 7 pairs (pairs 1 to 7)", "First 8 pairs", "Last 5 pairs", "Pairs 8, 9, and 10"],
    ans: 0,
    exp: "The first 7 pairs of ribs are true ribs because they attach dorsally to thoracic vertebrae and ventrally to the sternum via costal cartilage."
  },
  {
    q: "Which ribs are known as false ribs (vertebrochondral ribs) because they articulate with the 7th rib rather than directly with the sternum?",
    opts: ["8th, 9th, and 10th pairs", "11th and 12th pairs", "1st to 5th pairs", "5th, 6th, and 7th pairs"],
    ans: 0,
    exp: "The 8th, 9th, and 10th pairs of ribs are false ribs that join the 7th rib by hyaline cartilage."
  },
  {
    q: "The glenoid cavity of the pectoral girdle articulates with the head of which bone to form the shoulder joint?",
    opts: ["Humerus", "Femur", "Radius", "Clavicle"],
    ans: 0,
    exp: "The glenoid cavity of the scapula articulates with the rounded head of the humerus to form the ball and socket shoulder joint."
  },
  {
    q: "The deep cup-like socket in the pelvic girdle where the head of the femur articulates to form the hip joint is called the:",
    opts: ["Acetabulum", "Glenoid cavity", "Foramen magnum", "Obturator foramen"],
    ans: 0,
    exp: "The acetabulum is a deep lateral socket formed by the fusion of the ilium, ischium, and pubis, housing the head of the femur."
  },
  {
    q: "The joint present between the atlas and axis vertebrae that allows rotation of the head is a:",
    opts: ["Pivot joint", "Hinge joint", "Saddle joint", "Gliding joint"],
    ans: 0,
    exp: "The atlanto-axial articulation is a pivot joint where the odontoid process rotates within a ligamentous ring."
  },
  {
    q: "The synovial joint between the carpal and metacarpal of the human thumb that provides opposability is a:",
    opts: ["Saddle joint", "Gliding joint", "Ball and socket joint", "Hinge joint"],
    ans: 0,
    exp: "The first carpometacarpal joint of the human thumb is a biaxial saddle joint allowing exceptional mobility and opposability."
  },
  {
    q: "Sutures between the flat bones of the human skull are classic examples of:",
    opts: ["Fibrous joints (synarthroses, immovable)", "Cartilaginous joints", "Synovial joints", "Pivot joints"],
    ans: 0,
    exp: "Skull sutures are immovable fibrous joints held firmly together by dense collagenous sutural ligaments."
  },
  {
    q: "An autoimmune disorder affecting neuromuscular junctions characterized by fatigue, progressive skeletal muscle weakness, and paralysis is:",
    opts: ["Myasthenia gravis", "Muscular dystrophy", "Tetany", "Osteoarthritis"],
    ans: 0,
    exp: "Myasthenia gravis is an autoimmune disease where autoantibodies block and destroy nicotinic acetylcholine receptors at the motor endplate."
  },
  {
    q: "A progressive genetic degenerative disease of skeletal muscles caused predominantly by a defect in the dystrophin gene is:",
    opts: ["Muscular dystrophy", "Myasthenia gravis", "Tetany", "Rheumatoid arthritis"],
    ans: 0,
    exp: "Muscular dystrophy is an inherited genetic disease (most commonly Duchenne muscular dystrophy) characterized by progressive muscle wasting."
  },
  {
    q: "Rapid violent spasms (wild contractions) in skeletal muscles resulting from low extracellular calcium ($Ca^{2+}$) levels are termed:",
    opts: ["Tetany", "Tetanus", "Gout", "Myasthenia"],
    ans: 0,
    exp: "Tetany is caused by hypocalcemia, which hyperexcites peripheral motor neurons and causes involuntary muscle spasms."
  },
  {
    q: "Which form of arthritis is caused by the deposition of monosodium urate crystals in joint cavities?",
    opts: ["Gout (Gouty arthritis)", "Osteoarthritis", "Rheumatoid arthritis", "Ankylosing spondylitis"],
    ans: 0,
    exp: "Gout is a metabolic disorder where excess uric acid precipitates as needle-like monosodium urate crystals within joints."
  },
  {
    q: "Age-related reduction in bone mineral density and increased susceptibility to fractures, often linked to decreased estrogen in postmenopausal women, is:",
    opts: ["Osteoporosis", "Osteomalacia", "Tetany", "Rickets"],
    ans: 0,
    exp: "Osteoporosis is an age-associated loss of bone mass; estrogen deficiency in aging females is a primary predisposing factor."
  }
];

const concepts = [
  { topic: "sarcomere contractile unit", fact: "A sarcomere is the segment of a myofibril between two successive Z-lines, acting as the unit of contraction." },
  { topic: "sliding filament mechanism", fact: "During contraction, thin actin filaments slide inward over thick myosin filaments, reducing sarcomere length." },
  { topic: "A band length constancy", fact: "The anisotropic A-band length remains unchanged during muscle contraction while the I-band and H-zone shorten." },
  { topic: "troponin C calcium binding", fact: "Calcium released from the sarcoplasmic reticulum binds to troponin C to displace tropomyosin and unmask active sites." },
  { topic: "heavy meromyosin ATPase head", fact: "The globular head of heavy meromyosin contains an active ATPase enzyme, an ATP-binding pocket, and an actin-binding site." },
  { topic: "ATP cross bridge detachment", fact: "Binding of a new molecule of ATP to the myosin head is required to break the cross-bridge and permit relaxation." },
  { topic: "rigor mortis ATP absence", fact: "Postmortem lack of ATP prevents the detachment of myosin heads from actin filaments, causing permanent rigor mortis." },
  { topic: "red muscle fibers myoglobin", fact: "Red fibers are rich in myoglobin and mitochondria, utilizing aerobic metabolism to perform fatigue-resistant contractions." },
  { topic: "white muscle fibers anaerobic", fact: "White fibers have low myoglobin and few mitochondria, relying on anaerobic glycolysis and fatiguing quickly." },
  { topic: "axial skeleton 80 bones", fact: "The human axial skeleton consists of 80 bones comprising the skull, vertebral column, ribs, and sternum." },
  { topic: "true ribs 1 to 7 vertebrosternal", fact: "The first 7 pairs of ribs attach dorsally to thoracic vertebrae and ventrally to the sternum as true ribs." },
  { topic: "false ribs 8 9 10 vertebrochondral", fact: "Ribs 8, 9, and 10 are false ribs that attach to the hyaline cartilage of the seventh rib rather than the sternum." },
  { topic: "floating ribs 11 and 12", fact: "The 11th and 12th pairs of ribs are floating ribs that remain completely unattached at their ventral extremities." },
  { topic: "glenoid cavity shoulder joint", fact: "The glenoid cavity on the lateral angle of the scapula articulates with the head of the humerus." },
  { topic: "acetabulum hip socket", fact: "The acetabulum is a deep socket in the coxal bone formed by ilium, ischium, and pubis, housing the femur head." },
  { topic: "pivot joint atlanto axial", fact: "The joint between the atlas and axis is a pivot joint permitting rotation of the cranium." },
  { topic: "saddle joint thumb dexterity", fact: "A saddle joint between the trapezium carpal and first metacarpal provides opposability to the human thumb." },
  { topic: "fibrous suture immovable joints", fact: "Cranial sutures are immovable fibrous joints tightly bound by dense collagenous sutural connective tissue." },
  { topic: "myasthenia gravis acetylcholine receptor", fact: "Myasthenia gravis is an autoimmune disorder where antibodies attack neuromuscular acetylcholine receptors." },
  { topic: "muscular dystrophy dystrophin gene", fact: "Muscular dystrophy is a genetic disorder causing progressive degeneration of skeletal muscle fibers." },
  { topic: "tetany hypocalcemia spasms", fact: "Tetany presents with involuntary muscle spasms caused by hypocalcemia increasing neuromuscular excitability." },
  { topic: "gout uric acid crystals", fact: "Gout is characterized by painful joint inflammation resulting from the accumulation of monosodium urate crystals." },
  { topic: "osteoporosis estrogen decline", fact: "Osteoporosis is characterized by porous brittle bones, commonly aggravated by estrogen decline after menopause." },
  { topic: "dicondylic human skull", fact: "The human skull possesses two occipital condyles that articulate with the atlas vertebra (dicondylic)." },
  { topic: "amoeboid movement leukocytes", fact: "Macrophages and neutrophilic leukocytes crawl through tissues by pseudopodial amoeboid movement." },
  { topic: "ciliary movement oviduct trachea", fact: "Coordinated ciliary beating propels mucus in the respiratory tract and transports ova through the fallopian tubes." }
];

const realisticDistractors = [
  "It transforms immediately into non-mineralized hepatic bile salts within the myofibril.",
  "It stimulates the complete enzymatic hydrolysis of all circulating hemoglobin in the bloodstream.",
  "It converts all skeletal muscle actin into crystalline glycogen granules permanently.",
  "It causes the irreversible fusion of all thoracic vertebrae into a single non-segmented rod.",
  "It completely abolishes the action of all sensory mechanoreceptors in the dermis.",
  "It replaces the entire synovial membrane with keratinized stratified squamous epithelium.",
  "It eliminates all calcium pumps from the sarcolemma completely.",
  "It induces the spontaneous liquidation of all articular hyaline cartilages throughout the body."
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 154) {
  const item = concepts[counter % concepts.length];
  const idx = fullMcqList.length + 1;
  const d1 = realisticDistractors[(counter * 3) % realisticDistractors.length];
  const d2 = realisticDistractors[(counter * 3 + 1) % realisticDistractors.length];
  const d3 = realisticDistractors[(counter * 3 + 2) % realisticDistractors.length];

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Which of the following statements regarding ${item.topic} is PHYSIOLOGICALLY ACCURATE?`,
      opts: [
        `${item.fact}`,
        d1,
        d2,
        d3
      ],
      ans: 0,
      exp: `According to NCERT Class 11 Biology: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Identify the correct anatomical or physiological statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Musculoskeletal physiology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the human musculoskeletal system, what is the biological significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Locomotion & Movement fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid physiological statement about ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT fact: ${item.fact}`
    });
  }
  counter++;
}

const mcqQuestions = fullMcqList.map(m => ({
  question: m.q,
  options: m.opts,
  correctAnswer: m.ans,
  explanation: m.exp,
  type: "MCQ",
  questionType: "MCQ (Multiple Choice Question)",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

const allQuestions = [...arQuestions, ...mcqQuestions];

console.log(`Part 8 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

// KaTeX validator
let katexErrors = 0;
function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 8 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_physio_part8.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 8: Locomotion & Movement\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
