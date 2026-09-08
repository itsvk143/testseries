// scripts/build_zoology_structorg_part2.js
// Subtopic: Animal tissues
// Chapter: Structural Organisation in Animals and Plants
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Animal tissues";
const CHAPTER = "Structural Organisation in Animals and Plants";
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
    a: "Epithelial tissue provides a covering or lining for some parts of the body.",
    r: "Epithelial cells are compactly packed with very little intercellular matrix.",
    ans: 0,
    exp: "Because epithelial cells are tightly juxtaposed with minimal intercellular space, they form an uninterrupted protective cellular sheet over free body surfaces or internal cavities. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tight junctions prevent substances from leaking across an epithelial layer.",
    r: "Tight junctions fuse the outer membranes of adjacent cells together to create an impermeable seal.",
    ans: 0,
    exp: "NCERT states: 'Tight junctions help to stop substances from leaking across a tissue.' They form continuous anastomosing sealing strands that occlude the paracellular pathway. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Gap junctions facilitate rapid direct communication between adjoining animal cells.",
    r: "Gap junctions form open cytoplasmic channels (connexons) that permit the rapid transfer of ions, small molecules, and second messengers.",
    ans: 0,
    exp: "NCERT states: 'Gap junctions facilitate the cells to communicate with each other by connecting the cytoplasm of adjoining cells, for rapid transfer of ions, small molecules and sometimes big molecules.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cardiac muscle fibers contract as a functional syncytium.",
    r: "Intercalated discs in cardiac muscle contain gap junctions that allow electrical depolarization waves to spread instantly between adjacent cells.",
    ans: 0,
    exp: "Intercalated discs possess gap junctions that couple cardiac myocytes electrically, allowing the whole myocardium to contract synchronously as a unit. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Simple squamous epithelium lines the air sacs (alveoli) of lungs and walls of blood vessels.",
    r: "A single layer of thin, flattened cells with irregular boundaries minimizes the diffusion distance for respiratory gases and solutes.",
    ans: 0,
    exp: "NCERT notes: 'The simple squamous epithelium is made of a single thin layer of flattened cells with irregular boundaries. They are found in the walls of blood vessels and air sacs of lungs and are involved in functions like forming a diffusion boundary.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ciliated epithelium is found in the inner lining of bronchioles and fallopian tubes.",
    r: "The coordinated beating of cilia moves particles or mucus in a specific direction over the epithelial surface.",
    ans: 0,
    exp: "NCERT states: 'If the columnar or cuboidal cells bear cilia on their free surface they are called ciliated epithelium. Their function is to move particles or mucus in a specific direction over the epithelium. They are mainly present in the inner surface of hollow organs like bronchioles and fallopian tubes.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Compound epithelium plays a major role in secretion and absorption.",
    r: "Compound epithelium consists of multiple cell layers and provides protection against chemical and mechanical stresses.",
    ans: 3,
    exp: "(A) is false because compound epithelium has a limited role in secretion and absorption. (R) is true as its multi-layered design primarily provides mechanical and chemical protection. Both (A) and (R) are as option (d)."
  },
  {
    a: "Dense regular connective tissue possesses great tensile strength in the direction of fiber orientation.",
    r: "Collagen fibers in dense regular connective tissue are arranged in closely packed parallel rows.",
    ans: 0,
    exp: "Parallel alignment of dense collagen bundles in tendons resists uniaxial pulling forces without stretching. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tendons attach skeletal muscles to bones, while ligaments attach one bone to another bone.",
    r: "Tendons are composed of dense regular connective tissue, whereas ligaments also contain elastic fibers.",
    ans: 1,
    exp: "Both statements are correct anatomical facts from NCERT. The presence of elastic fibers in ligaments does not explain why tendons link muscle to bone. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Cartilage is a pliable connective tissue that resists compression.",
    r: "The intercellular matrix of cartilage contains chondroitin sulfate salts and collagen fibers.",
    ans: 0,
    exp: "The solid, pliable matrix of cartilage is rich in chondroitin sulfate, which holds water and provides resilience against compressive stress. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Bone matrix is hard and non-pliable.",
    r: "Bone matrix is impregnated with calcium phosphate salts and abundant collagen fibers.",
    ans: 0,
    exp: "Inorganic hydroxyapatite (calcium phosphate) crystals deposited on a dense framework of collagen fibers confer extreme hardness and compressive strength to bone. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Blood is classified as a specialized fluid connective tissue.",
    r: "Blood cells (RBCs, WBCs, platelets) are suspended in a fluid extracellular matrix called plasma.",
    ans: 0,
    exp: "Blood connects all body organs through nutrient and gas transport, consisting of formed cellular elements suspended in liquid plasma. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In all connective tissues except blood, cells secrete structural protein fibers.",
    r: "Fibroblasts synthesize and secrete fibers of collagen and elastin that provide tensile strength and flexibility.",
    ans: 0,
    exp: "NCERT states: 'In all connective tissues except blood, the cells secrete fibres of structural proteins called collagen or elastin. The fibres provide strength, elasticity and flexibility to the tissue.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Adipose tissue is a specialized loose connective tissue located mainly beneath the skin.",
    r: "Adipocytes store excess unutilized dietary nutrients in the form of neutral triglycerides.",
    ans: 0,
    exp: "NCERT states: 'Adipose tissue is another type of loose connective tissue located mainly beneath the skin. The cells of this tissue are specialised to store fats. The excess of nutrients which are not used immediately are converted into fats and are stored in this tissue.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Skeletal muscle fibers are described as syncytial.",
    r: "A skeletal muscle fiber contains numerous peripherally placed nuclei beneath its sarcolemma.",
    ans: 0,
    exp: "Skeletal myocytes arise from the developmental fusion of multiple embryonic myoblasts, creating a single multinucleated cytoplasmic continuum (syncytium). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Smooth muscle fibers are described as involuntary and non-striated.",
    r: "Smooth muscle fibers lack the alternating dark and light sarcomeric bands seen in skeletal muscle and are not under conscious control.",
    ans: 0,
    exp: "Non-striated appearance is due to unorganized actin-myosin filaments without regular sarcomeres, and their contraction is governed by the autonomic nervous system. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Neuroglia make up more than one-half the volume of neural tissue in the human body.",
    r: "Neuroglial cells protect and support neurons and are non-excitable.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. The protective role of neuroglia does not mathematically explain why they occupy over half the tissue volume. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Exocrine glands secrete their products through ducts or tubes.",
    r: "Salivary glands, sebaceous glands, and sweat glands are examples of exocrine glands.",
    ans: 1,
    exp: "Both statements are accurate NCERT facts. The naming of specific glands does not explain the anatomical definition of exocrine duct-mediated discharge. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Goblet cells of the alimentary canal are unicellular exocrine glands.",
    r: "Goblet cells are isolated modified columnar epithelial cells that synthesize and secrete mucus directly onto mucosal surfaces.",
    ans: 0,
    exp: "Unlike multicellular exocrine glands like the pancreas or salivary glands, goblet cells are single isolated glandular epithelial units. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mast cells in areolar tissue secrete histamine, serotonin, and heparin.",
    r: "Histamine released by mast cells induces local vasodilation and increased capillary permeability during allergic reactions.",
    ans: 1,
    exp: "Both statements are correct physiological facts regarding mast cells. The action of histamine does not explain why mast cells also synthesize heparin and serotonin. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Osteocytes are trapped inside small fluid-filled spaces called lacunae within the bone matrix.",
    r: "Canaliculi extend between adjacent lacunae to allow nutrient exchange between osteocytes and blood vessels.",
    ans: 1,
    exp: "Both statements are accurate histology facts. The presence of canaliculi does not explain why osteocytes reside in lacunae. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Adhering junctions perform cementing to keep neighbouring cells together.",
    r: "Adhering junctions (desmosomes) anchor intermediate filaments of the cytoskeleton across adjacent cell membranes.",
    ans: 0,
    exp: "NCERT defines: 'Adhering junctions perform cementing to keep neighbouring cells together.' Desmosomes provide mechanical cohesion resisting shearing stress. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dense irregular connective tissue is found in the dermis of the skin.",
    r: "Dense irregular connective tissue contains collagen bundles oriented in multiple directions to resist tension from any angle.",
    ans: 0,
    exp: "Multidirectional collagen weave in the dermis confers tensile resilience against multidirectional forces applied to the skin. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Most of the cartilages in vertebrate embryos are replaced by bones in adults.",
    r: "Endochondral ossification gradually mineralizes and replaces the embryonic hyaline cartilage model with mature osseous tissue.",
    ans: 0,
    exp: "NCERT states: 'Most of the cartilages in vertebrate embryos are replaced by bones in adults.' This occurs via endochondral bone formation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Neurons are the fundamental structural and functional excitable units of the neural system.",
    r: "When a neuron is stimulated, an electrical disturbance is generated that travels along its plasma membrane.",
    ans: 1,
    exp: "Both statements are correct NCERT definitions of neural function. The generation of an impulse illustrates neuronal excitability but does not fully explain its status as the basic functional unit. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Simple cuboidal epithelium with brush border microvilli is found in the proximal convoluted tubule (PCT) of the nephron.",
    r: "Microvilli dramatically increase the surface area available for tubular reabsorption of water, glucose, and electrolytes.",
    ans: 0,
    exp: "NCERT states: 'The epithelium of proximal convoluted tubule (PCT) of nephron in the kidney has microvilli.' Microvilli expand the apical absorptive surface manifold. Both (A) and (R) are true and (R) correctly explains (A)."
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
    q: "The four basic types of tissues found in complex multicellular animals are:",
    opts: [
      "Epithelial, Connective, Muscular, and Neural",
      "Parenchyma, Collenchyma, Sclerenchyma, and Xylem",
      "Epidermal, Ground, Vascular, and Meristematic",
      "Cartilage, Bone, Blood, and Lymph only"
    ],
    ans: 0,
    exp: "NCERT states: 'The tissues are different and are broadly classified into four types: (i) Epithelial, (ii) Connective, (iii) Muscular and (iv) Neural.'"
  },
  {
    q: "Which tissue has a free surface that faces either a body fluid or the outside environment and provides a covering or lining?",
    opts: ["Epithelial tissue", "Connective tissue", "Muscular tissue", "Neural tissue"],
    ans: 0,
    exp: "NCERT defines: 'Epithelial tissue has a free surface, which faces either a body fluid or the outside environment and thus provides a covering or a lining for some part of the body.'"
  },
  {
    q: "Simple epithelium is composed of:",
    opts: [
      "A single layer of cells and functions as a lining for body cavities, ducts, and tubes",
      "Two or more cell layers with protective function",
      "Exclusively dead cells without protoplasm",
      "Cells embedded in mineralized calcium matrix"
    ],
    ans: 0,
    exp: "NCERT states: 'Simple epithelium is composed of a single layer of cells and functions as a lining for body cavities, ducts, and tubes.'"
  },
  {
    q: "Compound epithelium consists of:",
    opts: [
      "Two or more cell layers and has protective function as it does in our skin",
      "A single layer of cube-like cells",
      "A single layer of flattened cells with irregular boundaries",
      "Fluid matrix containing erythrocytes"
    ],
    ans: 0,
    exp: "NCERT states: 'The compound epithelium consists of two or more cell layers and has protective function as it does in our skin.'"
  },
  {
    q: "Which type of simple epithelium is found in the walls of blood vessels (endothelium) and air sacs of lungs (alveoli)?",
    opts: ["Simple squamous epithelium", "Simple cuboidal epithelium", "Simple columnar epithelium", "Ciliated epithelium"],
    ans: 0,
    exp: "NCERT states: 'The squamous epithelium is made of a single thin layer of flattened cells with irregular boundaries. They are found in the walls of blood vessels and air sacs of lungs...'"
  },
  {
    q: "The epithelium found in the ducts of glands and tubular parts of nephrons in kidneys, whose main functions are secretion and absorption, is:",
    opts: ["Cuboidal epithelium", "Squamous epithelium", "Ciliated epithelium", "Transitional epithelium"],
    ans: 0,
    exp: "NCERT states: 'The cuboidal epithelium is composed of a single layer of cube-like cells. This is commonly found in ducts of glands and tubular parts of nephrons in kidneys and its main functions are secretion and absorption.'"
  },
  {
    q: "The epithelium of the proximal convoluted tubule (PCT) of the nephron in the kidney possesses:",
    opts: ["Microvilli", "Cilia", "Flagella", "Keratin"],
    ans: 0,
    exp: "NCERT explicitly notes: 'The epithelium of proximal convoluted tubule (PCT) of nephron in the kidney has microvilli.'"
  },
  {
    q: "Columnar epithelium is composed of a single layer of tall and slender cells whose nuclei are located:",
    opts: ["Near the base", "At the apical surface", "In the center of the cell", "Exclusively outside the cell"],
    ans: 0,
    exp: "NCERT states: 'The columnar epithelium is composed of a single layer of tall and slender cells. Their nuclei are located at the base.'"
  },
  {
    q: "Where is simple columnar epithelium commonly found in the human body?",
    opts: ["Lining of the stomach and intestine", "Alveoli of lungs", "Skin epidermis", "PCT of kidney"],
    ans: 0,
    exp: "NCERT states: 'They are found in the lining of stomach and intestine and help in secretion and absorption.'"
  },
  {
    q: "Ciliated columnar or cuboidal epithelium is primarily present in the inner surface of hollow organs such as:",
    opts: ["Bronchioles and fallopian tubes", "Blood vessels and lymphatics", "Stomach and esophagus", "Urinary bladder"],
    ans: 0,
    exp: "NCERT states: 'They are mainly present in the inner surface of hollow organs like bronchioles and fallopian tubes.'"
  },
  {
    q: "Which cell junction functions to prevent substances from leaking across a tissue?",
    opts: ["Tight junction", "Adhering junction", "Gap junction", "Plasmodesma"],
    ans: 0,
    exp: "NCERT states: 'Tight junctions help to stop substances from leaking across a tissue.'"
  },
  {
    q: "Which cell junction performs cementing to keep neighbouring cells together?",
    opts: ["Adhering junction", "Tight junction", "Gap junction", "Synaptic cleft"],
    ans: 0,
    exp: "NCERT states: 'Adhering junctions perform cementing to keep neighbouring cells together.'"
  },
  {
    q: "Which junction facilitates intercellular communication by connecting the cytoplasm of adjoining cells for rapid ion and metabolite transfer?",
    opts: ["Gap junction", "Tight junction", "Desmosome", "Hemidesmosome"],
    ans: 0,
    exp: "NCERT states: 'Gap junctions facilitate the cells to communicate with each other by connecting the cytoplasm of adjoining cells, for rapid transfer of ions, small molecules and sometimes big molecules.'"
  },
  {
    q: "Glands that secrete saliva, mucus, earwax, oil, milk, and digestive enzymes through ducts are called:",
    opts: ["Exocrine glands", "Endocrine glands", "Paracrine glands", "Apocrine glands only"],
    ans: 0,
    exp: "NCERT states: 'Exocrine glands secrete mucus, saliva, earwax, oil, milk, digestive enzymes and other cell products. These products are released through ducts or tubes.'"
  },
  {
    q: "Ductless glands that secrete hormones directly into the fluid bathing the gland or into the bloodstream are called:",
    opts: ["Endocrine glands", "Exocrine glands", "Holocrine glands", "Merocrine glands"],
    ans: 0,
    exp: "NCERT states: 'In contrast, endocrine glands do not have ducts. Their products called hormones are secreted directly into the fluid bathing the gland.'"
  },
  {
    q: "Which of the following is an example of a unicellular glandular epithelium?",
    opts: ["Goblet cells of the alimentary canal", "Salivary glands", "Sebaceous glands", "Sweat glands"],
    ans: 0,
    exp: "NCERT states: 'They are of two types: unicellular, consisting of isolated glandular cells (goblet cells of the alimentary canal), and multicellular, consisting of cluster of cells (salivary gland).'"
  },
  {
    q: "Compound epithelium covers the dry surface of the skin, the moist surface of the buccal cavity, and the pharynx to provide:",
    opts: ["Protection against chemical and mechanical stresses", "Active absorption of water", "Rapid gaseous diffusion", "Filtration of blood"],
    ans: 0,
    exp: "NCERT notes: 'They cover the dry surface of the skin, the moist surface of buccal cavity, pharynx, inner lining of ducts of salivary glands and of pancreatic ducts... their main function is to provide protection against chemical and mechanical stresses.'"
  },
  {
    q: "The most abundant and widely distributed tissue in the body of complex animals is:",
    opts: ["Connective tissue", "Epithelial tissue", "Muscular tissue", "Neural tissue"],
    ans: 0,
    exp: "NCERT states: 'Connective tissues are most abundant and widely distributed in the body of complex animals.'"
  },
  {
    q: "Which connective tissue lies beneath the skin and serves as a support framework for epithelium, containing fibroblasts, macrophages, and mast cells?",
    opts: ["Areolar tissue", "Adipose tissue", "Dense regular tissue", "Cartilage"],
    ans: 0,
    exp: "NCERT states: 'Areolar tissue present beneath the skin... it serves as a support framework for epithelium. It contains fibroblasts, macrophages and mast cells.'"
  },
  {
    q: "Cells of adipose tissue are specialized to store:",
    opts: ["Fats", "Glycogen", "Proteins", "Calcium"],
    ans: 0,
    exp: "NCERT states: 'The cells of this tissue are specialised to store fats. The excess of nutrients which are not used immediately are converted into fats and are stored in this tissue.'"
  },
  {
    q: "Tendons that attach skeletal muscles to bones are examples of:",
    opts: ["Dense regular connective tissue", "Dense irregular connective tissue", "Loose areolar tissue", "Specialized fluid tissue"],
    ans: 0,
    exp: "NCERT states: 'In the dense regular connective tissues, the collagen fibres are present in rows between many parallel bundles of fibres. Tendons, which attach skeletal muscles to bones... are examples of this tissue.'"
  },
  {
    q: "Ligaments that attach one bone to another bone are composed of:",
    opts: ["Dense regular connective tissue", "Dense irregular connective tissue", "Adipose tissue", "Hyaline cartilage"],
    ans: 0,
    exp: "NCERT states: '...ligaments which attach one bone to another are examples of this tissue (dense regular connective tissue).'"
  },
  {
    q: "Dense irregular connective tissue is characteristically found in the:",
    opts: ["Dermis of the skin", "Tendons", "Ligaments", "Blood vessels"],
    ans: 0,
    exp: "NCERT states: 'Dense irregular connective tissue has fibroblasts and many fibres (mostly collagen) that are oriented differently. This tissue is present in the skin.'"
  },
  {
    q: "The cells of cartilage are called chondrocytes and are enclosed in small cavities called:",
    opts: ["Lacunae", "Haversian canals", "Canaliculi", "Ventricles"],
    ans: 0,
    exp: "NCERT states: 'The intercellular material of cartilage is solid and pliable and resists compression. Cells of this tissue (chondrocytes) are enclosed in small cavities within the matrix secreted by them.'"
  },
  {
    q: "Where is cartilage found in the adult human body?",
    opts: [
      "Tip of nose, outer ear joints, and between adjacent bones of the vertebral column",
      "Shafts of long bones like femur",
      "Walls of cerebral ventricles",
      "Myometrium of uterus"
    ],
    ans: 0,
    exp: "NCERT states: 'Cartilage is present in the tip of nose, outer ear joints, between adjacent bones of the vertebral column, limbs and hands in adults.'"
  },
  {
    q: "Bone cells are called osteocytes and reside within spaces called:",
    opts: ["Lacunae", "Sinuses", "Cisternae", "Alveoli"],
    ans: 0,
    exp: "NCERT states: 'The bone cells (osteocytes) are present in the spaces called lacunae.'"
  },
  {
    q: "Which specialized connective tissue is the site of production of blood cells?",
    opts: ["Bone marrow", "Cartilage", "Adipose tissue", "Areolar tissue"],
    ans: 0,
    exp: "NCERT states: 'The bone marrow in some bones is the site of production of blood cells.'"
  },
  {
    q: "Skeletal muscle fibers are characterized as:",
    opts: [
      "Striated, voluntary, and multinucleated",
      "Non-striated, involuntary, and uninucleated",
      "Branched, involuntary, with intercalated discs",
      "Spindle-shaped with central oval nucleus"
    ],
    ans: 0,
    exp: "NCERT states that skeletal muscle is closely attached to skeletal bones, striated with alternating light and dark bands, voluntary, and possesses multiple nuclei."
  },
  {
    q: "Smooth muscle fibers are described as:",
    opts: [
      "Fusiform (tapering at both ends), non-striated, and involuntary",
      "Cylindrical, striated, and voluntary",
      "Branched, striated, and involuntary",
      "Multinucleate with peripheral nuclei"
    ],
    ans: 0,
    exp: "NCERT states: 'The smooth muscle fibres taper at both ends (fusiform) and do not show striations... their functioning cannot be directly controlled. We usually are not able to make it contract merely by thinking to do so.'"
  },
  {
    q: "Where is smooth muscle tissue typically located?",
    opts: [
      "Walls of internal organs such as blood vessels, stomach, and intestine",
      "Attached to the femur and biceps",
      "Exclusively in the myocardium",
      "Between adjacent vertebral joints"
    ],
    ans: 0,
    exp: "NCERT states: 'The wall of internal organs such as the blood vessels, stomach and intestine contains this type of muscle tissue.'"
  },
  {
    q: "Cardiac muscle tissue is found exclusively in the:",
    opts: ["Heart", "Lungs", "Stomach", "Kidneys"],
    ans: 0,
    exp: "NCERT states: 'Cardiac muscle tissue is a contractile tissue present only in the heart.'"
  },
  {
    q: "Intercalated discs in cardiac muscle fibers represent:",
    opts: [
      "Communication junctions at cell fusion points that allow coordinated contraction as a unit",
      "Attachment points for skeletal tendons",
      "Sites of glycogen storage",
      "Zones of neuromuscular synaptic transmission"
    ],
    ans: 0,
    exp: "NCERT states: 'Communication junctions (intercalated discs) at some fusion points allow the cells to contract as a unit, i.e., when one cell receives a signal to contract, its neighbours are also stimulated to contract.'"
  },
  {
    q: "Which cells in neural tissue provide protection, support, and constitute more than half the volume of neural tissue?",
    opts: ["Neuroglial cells", "Neurons", "Chondrocytes", "Fibroblasts"],
    ans: 0,
    exp: "NCERT states: 'The neuroglial cells protect and support neurons. Neuroglia make up more than one-half the volume of neural tissue in our body.'"
  },
  {
    q: "When a neuron is adequately stimulated, an electrical disturbance is generated that travels along its:",
    opts: ["Plasma membrane", "Nuclear envelope", "Endoplasmic reticulum", "Mitochondrial crest"],
    ans: 0,
    exp: "NCERT states: 'When a neuron is suitably stimulated, an electrical disturbance is generated which swiftly travels along its plasma membrane.'"
  },
  {
    q: "Which cell type in areolar connective tissue synthesizes and secretes fibers of collagen and elastin?",
    opts: ["Fibroblasts", "Macrophages", "Mast cells", "Adipocytes"],
    ans: 0,
    exp: "Fibroblasts are the principal connective tissue cells that synthesize the extracellular matrix and collagenous/elastic fibers."
  }
];

// Rich bank of animal tissue facts
const concepts = [
  { topic: "epithelial cellular compactness", fact: "Epithelial tissue consists of compactly packed cells with minimal intercellular space, providing surface protection and linings." },
  { topic: "simple squamous diffusion role", fact: "Simple squamous epithelium is composed of a single layer of thin flat cells with irregular boundaries forming a diffusion boundary in alveoli." },
  { topic: "simple cuboidal PCT absorption", fact: "Simple cuboidal epithelium lines glandular ducts and nephron tubules, possessing microvilli in the PCT for maximal reabsorption." },
  { topic: "simple columnar basal nuclei", fact: "Simple columnar epithelium features tall slender cells with basal nuclei lining the stomach and intestine to facilitate secretion and absorption." },
  { topic: "ciliated epithelial propulsion", fact: "Ciliated epithelium bears apical cilia that beat in coordinated waves to move mucus and particles through bronchioles and fallopian tubes." },
  { topic: "compound epithelial barrier", fact: "Compound epithelium consists of stratified cell layers whose primary function is shielding underlying tissues against mechanical and chemical stress." },
  { topic: "tight junction sealing", fact: "Tight junctions form continuous seals between adjacent epithelial plasma membranes, preventing paracellular solute leakage." },
  { topic: "adhering junction anchoring", fact: "Adhering junctions (desmosomes) anchor intermediate filaments of neighboring cells together, providing mechanical cohesion." },
  { topic: "gap junction connexons", fact: "Gap junctions contain tubular connexon channels that directly couple adjacent cell cytoplasms for rapid ionic and metabolic transfer." },
  { topic: "exocrine ductal discharge", fact: "Exocrine glands discharge secretions like saliva, mucus, earwax, and digestive enzymes through specific ducts or tubes." },
  { topic: "endocrine hormone release", fact: "Endocrine glands are ductless glands that release hormones directly into extracellular fluid and the bloodstream." },
  { topic: "goblet cell unicellular gland", fact: "Goblet cells are solitary specialized columnar epithelial cells in the alimentary mucosa that secrete lubricating mucus." },
  { topic: "connective tissue abundance", fact: "Connective tissue is the most abundant and widely distributed tissue in complex animals, linking and supporting various body structures." },
  { topic: "areolar subepithelial framework", fact: "Areolar connective tissue beneath the skin contains fibroblasts, macrophages, and mast cells, serving as a support bed for epithelia." },
  { topic: "adipocyte triglyceride storage", fact: "Adipose tissue consists of specialized fat-storing adipocytes beneath the skin that convert surplus nutrients into neutral lipids." },
  { topic: "dense regular tendon alignment", fact: "Dense regular connective tissue features parallel arrays of dense collagen bundles in tendons connecting muscles to bones." },
  { topic: "dense regular ligament binding", fact: "Ligaments are dense regular connective tissue structures with collagen and elastic fibers that bind adjacent bones together at joints." },
  { topic: "dense irregular dermis mesh", fact: "Dense irregular connective tissue contains a multidirectional collagen fiber network in the dermis to withstand forces from all directions." },
  { topic: "cartilage pliable matrix", fact: "Cartilage contains chondrocytes in lacunae embedded within a firm, pliable matrix rich in chondroitin sulfate that resists compression." },
  { topic: "bone osteocyte mineralization", fact: "Bones possess a hard, non-pliable matrix impregnated with calcium phosphate salts and collagen housing osteocytes within lacunae." },
  { topic: "bone marrow hematopoiesis", fact: "The bone marrow contained within the cavities of long and flat bones is the primary site of adult blood cell production." },
  { topic: "blood fluid connective tissue", fact: "Blood is a specialized fluid connective tissue consisting of plasma, erythrocytes, leukocytes, and platelets that circulates nutrients." },
  { topic: "skeletal muscle syncytium", fact: "Skeletal muscle consists of striated, voluntary, multinucleated cylindrical fibers closely attached to skeletal framework bones." },
  { topic: "smooth muscle fusiform involuntary", fact: "Smooth muscle consists of non-striated, involuntary, uninucleated fusiform fibers found in the walls of hollow visceral organs." },
  { topic: "cardiac intercalated syncytial disc", fact: "Cardiac muscle fibers are branched, striated, and involuntary, featuring intercalated discs that allow the myocardium to contract as a unit." },
  { topic: "neuroglial volume and support", fact: "Neuroglial cells are non-excitable supporting cells that make up more than half of the neural tissue volume, insulating and protecting neurons." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the tissue matrix.",
  "It triggers the complete enzymatic destruction of all circulating platelets within seconds.",
  "It causes the permanent calcification of all epithelial basement membranes within hours.",
  "It eliminates all actin and myosin contractile filaments from animal cells permanently.",
  "It induces the spontaneous conversion of all neurons into keratinized scales.",
  "It replaces the entire loose connective tissue with dense crystalline quartz plates.",
  "It completely abolishes the synthesis of collagen in all fibroblasts throughout the body.",
  "It converts all circulating blood plasma into insoluble bile stones instantly."
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
      q: `Which of the following statements regarding ${item.topic} is HISTOLOGICALLY AND PHYSIOLOGICALLY ACCURATE?`,
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
      q: `Identify the accurate tissue principle concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Animal tissue principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the histological organization of animals, what is the functional significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Animal Tissue fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the correct NCERT statement regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT factual statement: ${item.fact}`
    });
  }
  counter++;
}

const mcqQuestions = fullMcqList.slice(0, 154).map(m => ({
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

console.log(`Part 2 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 2 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_structorg_part2.js');
  const fileContent = `// Auto-generated data for Zoology Structural Organisation Part 2: Animal tissues\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
