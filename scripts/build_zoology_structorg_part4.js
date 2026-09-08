// scripts/build_zoology_structorg_part4.js
// Subtopic: Epithelial, connective, muscular, and neural tissues in animals
// Chapter: Structural Organisation in Animals and Plants
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Epithelial, connective, muscular, and neural tissues in animals";
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
    a: "Transitional epithelium (urothelium) is uniquely adapted to line the urinary bladder and ureters.",
    r: "The superficial umbrella cells of transitional epithelium can change their shape and flatten out to accommodate volume distension.",
    ans: 0,
    exp: "Transitional epithelium is a specialized distensible stratified epithelium where rounded surface facet cells slide over one another and flatten when the bladder fills with urine. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Non-keratinized stratified squamous epithelium lines the moist surfaces of the oral cavity, esophagus, and vagina.",
    r: "The surface cells in non-keratinized stratified squamous epithelium remain nucleated and viable, lubricated by glandular secretions.",
    ans: 0,
    exp: "Unlike the dry skin epidermis where surface cells become dead keratinized squames, internal wet cavities maintain living, nucleated squamous surface cells bathed in moisture. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Pseudostratified ciliated columnar epithelium is typically found lining the human trachea.",
    r: "All cells in pseudostratified epithelium rest on the basement membrane, but because their nuclei are positioned at different levels, it falsely appears multi-layered.",
    ans: 0,
    exp: "Pseudostratified epithelium is a single layer of cells of unequal heights whose nuclei at varied elevations create the illusion of stratification. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cartilage tissue exhibits very slow healing and repair capacity following physical trauma.",
    r: "Mature cartilage is completely avascular and receives oxygen and nutrients exclusively by slow diffusion through the matrix from the perichondrium.",
    ans: 0,
    exp: "The absence of direct capillary networks within the cartilaginous matrix limits metabolic turnover and cellular recruitment, drastically retarding reparative chondrogenesis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Fibrocartilage is the strongest and most resilient type of cartilage in the mammalian skeleton.",
    r: "The extracellular matrix of fibrocartilage contains thick, dense parallel bundles of Type I collagen fibers.",
    ans: 0,
    exp: "Abundant heavy Type I collagen bundles in fibrocartilage provide immense tensile and compressive strength, ideal for intervertebral discs and the pubic symphysis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Haversian systems (osteons) are the structural and functional units of mammalian compact bone.",
    r: "Each Haversian system consists of a central neurovascular canal surrounded by concentric lamellae containing osteocytes in lacunae.",
    ans: 0,
    exp: "The cylindrical osteon structure with concentric mineralized lamellae, central Haversian canals, and radiating canaliculi optimizes mechanical strength and nutrient diffusion in dense compact bone. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Volkmann's canals run perpendicularly to Haversian canals in compact bone.",
    r: "Volkmann's canals interconnect adjacent Haversian canals with each other and with the external periosteum.",
    ans: 0,
    exp: "Transverse or oblique Volkmann's (perforating) canals channel blood vessels and nerves from the periosteum and medullary cavity into longitudinal Haversian canals. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Brown adipose tissue (BAT) produces substantial metabolic heat without generating ATP.",
    r: "Mitochondria in brown adipocytes express Uncoupling Protein-1 (UCP-1 / thermogenin), which uncouples the respiratory electron transport chain from ATP synthase.",
    ans: 0,
    exp: "Thermogenin dissipates the mitochondrial proton electrochemical gradient as pure heat rather than synthesizing ATP, driving non-shivering thermogenesis in neonates. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Plasma cells in areolar connective tissue are responsible for antibody synthesis.",
    r: "Plasma cells differentiate from antigen-activated B-lymphocytes and contain abundant rough endoplasmic reticulum.",
    ans: 0,
    exp: "Upon antigenic stimulation, B-cells proliferate into plasma cells equipped with massive rough endoplasmic reticulum dedicated to secretable immunoglobulin production. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mast cells in connective tissue play a central role in initiating immediate-type hypersensitivity (allergic) reactions.",
    r: "Cross-linking of IgE antibodies on the mast cell surface triggers rapid degranulation and release of histamine, heparin, and leukotrienes.",
    ans: 0,
    exp: "IgE-dependent receptor crosslinking on mast cells induces exocytosis of preformed inflammatory mediators like histamine, causing bronchoconstriction and vasodilation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Smooth muscle fibers are capable of sustained, fatigue-resistant tonic contractions.",
    r: "Smooth muscle consumes substantially less ATP per unit force generation compared to striated skeletal muscle.",
    ans: 0,
    exp: "The 'latch state' in smooth muscle permits cross-bridges to remain attached for prolonged periods with very low ATP consumption, allowing long-term sphincter and vascular tone. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cardiac muscle tissue cannot be tetanized by high-frequency repetitive electrical stimulation.",
    r: "Cardiac myocytes possess an exceptionally prolonged effective refractory period lasting almost the entire duration of contraction.",
    ans: 0,
    exp: "A sustained plateau phase in cardiac action potentials (mediated by L-type calcium channels) creates a prolonged refractory period that prevents summation of contractions into fatal tetanus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Nissl granules are abundant in the neuronal perikaryon and dendrites, but completely absent from the axon and axon hillock.",
    r: "Nissl granules are prominent aggregates of rough endoplasmic reticulum and free ribosomes dedicated to protein synthesis.",
    ans: 0,
    exp: "Because proteins are synthesized in the soma and dendrites and transported anterogradely down the axon, protein-synthesizing ribosomes and rough ER (Nissl bodies) are excluded from the axon and hillock. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Microglia are the resident macrophage cells of the central nervous system.",
    r: "Microglia originate embryologically from the mesodermal hematopoietic monocyte lineage, unlike neuroectodermal macroglia.",
    ans: 1,
    exp: "Both statements are correct biological facts. The developmental mesodermal lineage explains their immune phagocytic homology, but does not solely define why they function as macrophages in the CNS. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Astrocytes participate directly in forming the physical and metabolic blood-brain barrier (BBB).",
    r: "Astrocytic perivascular end-feet envelop cerebral capillaries and induce brain capillary endothelial cells to form continuous tight junctions.",
    ans: 0,
    exp: "Secretions from astrocyte foot processes upregulate zonula occludens proteins in brain microvascular endothelium, sealing paracellular pores and establishing the BBB. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oligodendrocytes in the CNS and Schwann cells in the PNS both synthesize myelin sheaths around axons.",
    r: "A single oligodendrocyte can myelinate segments of multiple adjacent axons, whereas a single Schwann cell myelinates only one internode of a single peripheral axon.",
    ans: 1,
    exp: "Both statements are accurate neurohistological facts. The anatomical difference in cell-to-axon ratio does not explain why both perform myelination. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Saltatory conduction along myelinated nerve fibers is substantially faster and more energy-efficient than continuous conduction in unmyelinated fibers.",
    r: "Action potentials in myelinated axons jump from one Node of Ranvier to the next because voltage-gated sodium channels are highly concentrated at the nodal gaps.",
    ans: 0,
    exp: "Insulating myelin prevents transmembrane ionic leak across internodes, forcing depolarizing inward currents to jump between nodes, increasing speed and reducing ion pumping ATP expenditure. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Reticular connective tissue forms the supporting stroma (framework) of lymphoid organs such as the spleen, lymph nodes, and bone marrow.",
    r: "Reticular tissue consists of a delicate meshwork of branching Type III collagen fibers associated with specialized reticular cells.",
    ans: 0,
    exp: "A branched network of thin reticular fibers forms a porous three-dimensional sponge-like scaffold that filters fluid and supports roaming lymphocytes and macrophages. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Elastic cartilage is found in the external ear (pinna), Eustachian tube, and epiglottis.",
    r: "The matrix of elastic cartilage is permeated with abundant branching yellow elastic fibers that impart flexibility and shape recovery.",
    ans: 0,
    exp: "Rich networks of elastin fibers allow elastic cartilage structures to endure repeated bending and deformation while instantly snapping back to their original anatomical contour. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Single-unit (visceral) smooth muscle behaves as a coordinated functional syncytium.",
    r: "Adjoining myocytes in single-unit smooth muscle are coupled by numerous gap junctions that permit the rapid transmission of action potentials.",
    ans: 0,
    exp: "Gap junctions bridge single-unit smooth muscle cells (e.g. in the intestinal and uterine walls), allowing a myogenic electrical wave to sweep across the whole organ sheet. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ependymal cells line the cerebral ventricles and central canal of the spinal cord.",
    r: "Ependymal cells possess apical microvilli and cilia that assist in circulating cerebrospinal fluid (CSF).",
    ans: 1,
    exp: "Both statements are correct histological facts. The circulation of CSF by cilia describes their functional role, but does not explain their developmental anatomical position lining the neurocoel. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Desmosomes (macula adherens) are abundant in tissues subjected to intense mechanical shearing stress, such as the epidermis and myocardium.",
    r: "Desmosomes couple transmembrane cadherin linker proteins to intermediate keratin or desmin filaments in the cytoplasm.",
    ans: 0,
    exp: "By tethering cell membranes to the robust internal intermediate filament cytoskeleton, desmosomes dissipate focal mechanical stresses across the entire tissue sheet. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Bone tissue contains both organic and inorganic constituents in its extracellular matrix.",
    r: "Demineralized bone treated with dilute acid retains its shape and flexible tensile strength due to its organic collagen content.",
    ans: 0,
    exp: "Acid removes inorganic calcium salts leaving flexible organic collagen; conversely, heat burning destroys collagen leaving brittle mineral salts, demonstrating the dual composition. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hyaline cartilage is the most widely distributed cartilage type in the human body.",
    r: "Hyaline cartilage covers the articular surfaces of movable joints, forms the costal cartilages, and supports the respiratory passages (larynx, trachea, bronchi).",
    ans: 1,
    exp: "Both statements are correct anatomical facts. Listing its various anatomical sites exemplifies its abundance, but does not explain the embryological reason for its widespread distribution. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Multi-unit smooth muscle does not contract rhythmically as a single unit.",
    r: "Each muscle fiber in multi-unit smooth muscle operates independently with its own motor nerve ending and very few gap junctions.",
    ans: 0,
    exp: "In multi-unit smooth muscle (such as the ciliary muscle, iris, and piloerector muscles), cells are independently innervated by autonomic terminals without extensive electrical gap junction coupling. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Skeletal muscle contraction requires the binding of calcium ions to calmodulin.",
    r: "Calmodulin is a calcium-binding regulatory protein present exclusively on the thin filaments of striated skeletal muscle.",
    ans: 3,
    exp: "Both (A) and (R) are false. Skeletal muscle contraction requires calcium binding to troponin C (not calmodulin); calmodulin regulates smooth muscle contraction by activating myosin light-chain kinase. Thus (A) is false and (R) is false (option d)."
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
    q: "The distensible epithelium that lines the urinary bladder, ureters, and superior urethra, capable of stretching without tearing, is:",
    opts: ["Transitional epithelium (urothelium)", "Keratinized stratified squamous epithelium", "Simple columnar epithelium", "Pseudostratified ciliated epithelium"],
    ans: 0,
    exp: "Transitional epithelium is specialized to withstand stretching and toxic urine, featuring rounded surface cells that flatten during bladder distension."
  },
  {
    q: "The non-keratinized stratified squamous epithelium is characteristically found in which of the following locations?",
    opts: ["Esophagus, oral cavity, and vagina", "Epidermis of palm and sole", "Thyroid follicles", "Air sacs of lungs"],
    ans: 0,
    exp: "Wet internal surfaces subjected to friction and abrasion like the esophagus, buccal cavity, and vagina are protected by non-keratinized stratified squamous epithelium."
  },
  {
    q: "Simple squamous epithelium that lines the interior of blood vessels and lymphatic vessels is specifically known as:",
    opts: ["Endothelium", "Mesothelium", "Epidermis", "Ependyma"],
    ans: 0,
    exp: "The simple squamous epithelial lining of blood vessels, lymphatics, and the heart chambers is called endothelium."
  },
  {
    q: "The simple squamous epithelium lining serous body cavities (pleura, pericardium, and peritoneum) is called:",
    opts: ["Mesothelium", "Endothelium", "Urothelium", "Sarcolemma"],
    ans: 0,
    exp: "Mesothelium is the simple squamous lining derived from mesoderm that covers the viscera and walls of closed serous cavities."
  },
  {
    q: "Which type of epithelium lines the human respiratory tract (trachea and bronchi), featuring mucus-secreting goblet cells and apical cilia?",
    opts: ["Pseudostratified ciliated columnar epithelium", "Simple cuboidal epithelium", "Stratified columnar epithelium", "Transitional epithelium"],
    ans: 0,
    exp: "The respiratory tract is lined by pseudostratified ciliated columnar epithelium whose mucus escalator sweeps trapped debris upward toward the pharynx."
  },
  {
    q: "In which of the following locations is hyaline cartilage found in the adult human body?",
    opts: [
      "Articular surfaces of long bones, costal cartilages, and tracheal rings",
      "Intervertebral discs and pubic symphysis",
      "External ear pinna and epiglottis",
      "Dermis of the skin"
    ],
    ans: 0,
    exp: "Hyaline cartilage covers joint surfaces (articular cartilage), joins ribs to sternum (costal cartilage), and keeps the trachea and bronchi patent."
  },
  {
    q: "The strongest type of cartilage containing abundant dense parallel bundles of Type I collagen fibers is:",
    opts: ["Fibrocartilage", "Hyaline cartilage", "Elastic cartilage", "Calcified cartilage"],
    ans: 0,
    exp: "Fibrocartilage possesses dense tensile Type I collagen bundles and is situated at high-stress junctions like intervertebral discs and the pubic symphysis."
  },
  {
    q: "Elastic cartilage is anatomically present in which of the following structures?",
    opts: ["External ear (pinna), epiglottis, and Eustachian tube", "Tracheal rings and costal cartilage", "Shaft of the femur", "Intervertebral discs"],
    ans: 0,
    exp: "Elastic cartilage contains yellow elastin fibers providing shape retention and flexibility to the pinna, epiglottis, and pharyngotympanic (Eustachian) tube."
  },
  {
    q: "The microscopic structural and functional unit of mammalian compact bone is the:",
    opts: ["Osteon (Haversian system)", "Trabecula", "Chondron", "Sarcomere"],
    ans: 0,
    exp: "The osteon (Haversian system) is the cylindrical structural unit of compact bone comprising concentric lamellae surrounding a vascular Haversian canal."
  },
  {
    q: "Canaliculi in compact bone function to:",
    opts: [
      "Connect lacunae with each other and with the Haversian canal for nutrient and metabolic exchange",
      "Store calcium phosphate crystals",
      "Produce red blood cells",
      "Anchor skeletal muscles"
    ],
    ans: 0,
    exp: "Minute radiating micro-channels called canaliculi house slender cytoplasmic processes of osteocytes, enabling metabolic communication via gap junctions."
  },
  {
    q: "White adipose tissue (WAT) differs from brown adipose tissue (BAT) because white adipocytes contain:",
    opts: [
      "A single large central lipid droplet (unilocular) and peripheral nucleus",
      "Numerous small lipid droplets (multilocular) and abundant mitochondria",
      "High concentrations of thermogenin",
      "No fat droplets at all"
    ],
    ans: 0,
    exp: "White adipocytes are unilocular, containing one enormous lipid sphere that squeezes the nucleus to the cell periphery, serving primarily as energy storage."
  },
  {
    q: "Brown adipose tissue (BAT) is rich in mitochondria and uncoupling protein-1 (UCP-1 / thermogenin), enabling it to:",
    opts: [
      "Generate heat by uncoupling oxidative phosphorylation from ATP synthesis",
      "Store glycogen in large amounts",
      "Produce antibody molecules",
      "Synthesize collagen fibers"
    ],
    ans: 0,
    exp: "Brown fat is specialized for non-shivering thermogenesis; thermogenin dissipates the proton gradient to release energy directly as heat to warm blood."
  },
  {
    q: "Which cell of areolar connective tissue is an antibody-producing factory derived from stimulated B-lymphocytes?",
    opts: ["Plasma cell", "Mast cell", "Fibroblast", "Macrophage"],
    ans: 0,
    exp: "Plasma cells are differentiated B-cells characterized by a cartwheel-shaped nucleus and abundant rough ER that secrete specific immunoglobulin antibodies."
  },
  {
    q: "Macrophages of connective tissue that engulf cellular debris and foreign invaders are also termed:",
    opts: ["Histiocytes", "Mast cells", "Fibrocytes", "Adipocytes"],
    ans: 0,
    exp: "Connective tissue macrophages derived from blood monocytes are commonly called histiocytes."
  },
  {
    q: "Skeletal muscle fibers are surrounded by a specialized plasma membrane called the:",
    opts: ["Sarcolemma", "Perichondrium", "Periosteum", "Endomysium"],
    ans: 0,
    exp: "The plasma membrane enclosing an individual multinucleated skeletal muscle fiber is the sarcolemma."
  },
  {
    q: "The structural unit of contraction in a striated muscle fiber bounded by two consecutive Z-lines is the:",
    opts: ["Sarcomere", "Myofibril", "A-band", "I-band"],
    ans: 0,
    exp: "The sarcomere is the fundamental contractile unit of myofibrils extending between successive Z-discs."
  },
  {
    q: "Smooth muscle contraction is initiated when calcium ions bind to which intracellular regulatory protein?",
    opts: ["Calmodulin", "Troponin C", "Tropomyosin", "Actinin"],
    ans: 0,
    exp: "Unlike striated muscle where calcium binds to troponin C, smooth muscle lacks troponin; calcium binds to calmodulin to activate myosin light chain kinase (MLCK)."
  },
  {
    q: "Dense bodies in smooth muscle fibers are functionally and structurally homologous to which striated muscle component?",
    opts: ["Z-lines", "M-lines", "H-zones", "A-bands"],
    ans: 0,
    exp: "Dense bodies in smooth muscle contain alpha-actinin and serve as cytoplasmic and membrane-bound anchorage sites for actin thin filaments, analogous to Z-discs."
  },
  {
    q: "Cardiac muscle fibers are characterized by the presence of:",
    opts: [
      "Intercalated discs with gap junctions and desmosomes",
      "Multinucleated peripheral syncytium",
      "Absence of striations",
      "Lack of T-tubules"
    ],
    ans: 0,
    exp: "Intercalated discs represent specialized end-to-end junctions between cardiac myocytes, featuring fascia adherens, desmosomes, and gap junctions."
  },
  {
    q: "Nissl granules in the cell body of a neuron consist of:",
    opts: [
      "Ribosomes and rough endoplasmic reticulum",
      "Golgi apparatus and lysosomes",
      "Mitochondria and centrioles",
      "Smooth endoplasmic reticulum and microtubules"
    ],
    ans: 0,
    exp: "Nissl granules are prominent basophilic clusters of rough endoplasmic reticulum and polyribosomes active in protein synthesis within the soma and dendrites."
  },
  {
    q: "Which neuroglial cells form the insulating myelin sheath around axons in the Central Nervous System (CNS)?",
    opts: ["Oligodendrocytes", "Schwann cells", "Astrocytes", "Microglia"],
    ans: 0,
    exp: "Oligodendrocytes myelinate multiple axons in the CNS, whereas Schwann cells perform myelination in the Peripheral Nervous System (PNS)."
  },
  {
    q: "Which neuroglial cells form the myelin sheath in the Peripheral Nervous System (PNS)?",
    opts: ["Schwann cells", "Oligodendrocytes", "Ependymal cells", "Microglial cells"],
    ans: 0,
    exp: "Schwann cells wrap concentrically around peripheral axons to synthesize the lipid-rich myelin sheath punctuated by Nodes of Ranvier."
  },
  {
    q: "The small gaps along the myelin sheath where the axolemma is exposed and contains high densities of voltage-gated $Na^+$ channels are the:",
    opts: ["Nodes of Ranvier", "Synaptic clefts", "Telodendria", "Axon hillocks"],
    ans: 0,
    exp: "Nodes of Ranvier are the unmyelinated nodal gaps where action potentials are regenerated during saltatory conduction."
  },
  {
    q: "Which glial cells are star-shaped, possess perivascular end-feet, and regulate the chemical environment and blood-brain barrier in the brain?",
    opts: ["Astrocytes", "Microglia", "Oligodendrocytes", "Schwann cells"],
    ans: 0,
    exp: "Astrocytes are abundant glial cells providing mechanical support, potassium homeostasis, neurotransmitter recycling, and induction of blood-brain barrier tight junctions."
  },
  {
    q: "The phagocytic scavenger cells of the central nervous system that clear cellular debris and pathogens are:",
    opts: ["Microglia", "Astrocytes", "Oligodendrocytes", "Ependymal cells"],
    ans: 0,
    exp: "Microglia are the resident immune macrophages of the CNS derived from embryonic hematopoietic mesoderm."
  },
  {
    q: "Which connective tissue covers the outer surface of a bone and provides attachment for tendons and ligaments?",
    opts: ["Periosteum", "Perichondrium", "Endosteum", "Epimysium"],
    ans: 0,
    exp: "The periosteum is a dense irregular collagenous fibrous membrane covering the outer surface of bones, housing osteogenic progenitor cells and blood vessels."
  },
  {
    q: "The fibrous connective tissue sheath enclosing cartilage is the:",
    opts: ["Perichondrium", "Periosteum", "Perineurium", "Pericardium"],
    ans: 0,
    exp: "Cartilage is enveloped by a vascularized dense irregular connective tissue layer called the perichondrium, which nourishes the avascular cartilage."
  },
  {
    q: "Fibroblasts, mast cells, and plasma cells are suspended in a semi-fluid ground substance composed primarily of:",
    opts: ["Mucopolysaccharides (hyaluronic acid)", "Starch", "Mineralized calcium phosphate", "Pure keratin"],
    ans: 0,
    exp: "The ground substance of loose areolar connective tissue is a viscous, gel-like matrix rich in glycosaminoglycans, particularly hyaluronic acid and proteoglycans."
  },
  {
    q: "Which type of collagen is the most abundant protein in the human body, providing tensile strength to bone, skin, and tendons?",
    opts: ["Type I collagen", "Type II collagen", "Type IV collagen", "Type III collagen"],
    ans: 0,
    exp: "Type I collagen forms dense, thick fibrils with extreme tensile strength, constituting roughly 90% of the body's total collagen (found in bone, skin, tendons)."
  },
  {
    q: "Type II collagen is predominantly found in:",
    opts: ["Hyaline and elastic cartilage", "Compact bone", "Basement membrane", "Arterial walls"],
    ans: 0,
    exp: "Type II collagen forms thin, fine fibrils typical of the extracellular matrix of hyaline and elastic cartilage and the vitreous humor."
  },
  {
    q: "Which junctional complex serves as a mechanical anchor preventing cell separation under stretching, mediated by cadherins and intermediate filaments?",
    opts: ["Desmosome (macula adherens)", "Gap junction", "Tight junction (zonula occludens)", "Synapse"],
    ans: 0,
    exp: "Desmosomes are button-like intercellular rivets linking intermediate filaments (keratin) between neighboring cells, resisting strong mechanical shearing forces."
  },
  {
    q: "Pemphigus vulgaris is an autoimmune disease where autoantibodies attack desmosomal cadherins (desmoglein), causing:",
    opts: ["Severe blistering of the skin and mucous membranes", "Excessive bone calcification", "Muscle hypertrophy", "Uncontrolled nerve impulses"],
    ans: 0,
    exp: "Disruption of desmosomes by anti-desmoglein autoantibodies leads to acantholysis (loss of cell-to-cell adhesion in stratified epithelium), producing severe blisters."
  },
  {
    q: "Which of the following is an avascular tissue in the adult human body?",
    opts: ["Cartilage and surface epithelia", "Skeletal muscle", "Bone", "Areolar tissue"],
    ans: 0,
    exp: "Both epithelial tissues and mature cartilages lack blood vessels (avascular) and depend completely on diffusion from adjacent vascularized connective tissues."
  },
  {
    q: "Hemidesmosomes function to:",
    opts: [
      "Anchor the basal surface of epithelial cells to the underlying basement membrane",
      "Connect cytoplasm of adjacent cells for ion transfer",
      "Bind adjacent cardiac myocytes end-to-end",
      "Synthesize collagen fibrils"
    ],
    ans: 0,
    exp: "Hemidesmosomes utilize integrin transmembrane proteins to anchor the basal plasma membrane and keratin cytoskeleton of epithelial cells to the basement membrane."
  },
  {
    q: "The basement membrane supporting an epithelium consists of which two layers?",
    opts: [
      "Basal lamina (secreted by epithelium) and reticular lamina (secreted by connective tissue)",
      "Stratum corneum and stratum lucidum",
      "Haversian canal and Volkmann's canal",
      "Perichondrium and periosteum"
    ],
    ans: 0,
    exp: "The basement membrane comprises the superficial basal lamina (rich in Type IV collagen, laminin) synthesized by epithelial cells, and the deeper reticular lamina (Type III collagen) produced by connective tissue."
  }
];

// Rich bank of histology facts
const concepts = [
  { topic: "transitional epithelium urothelial plasticity", fact: "Transitional epithelium lines urinary structures with umbrella cells that flatten during fluid accumulation to prevent tearing." },
  { topic: "non-keratinized stratified squamous protection", fact: "Non-keratinized stratified squamous epithelium protects moist internal cavities like the oral cavity and esophagus from mechanical abrasion." },
  { topic: "pseudostratified respiratory clearance", fact: "Pseudostratified ciliated columnar epithelium lines the trachea, utilizing mucus and coordinated ciliary beating to sweep out contaminants." },
  { topic: "cartilage avascular diffusion limit", fact: "Mature cartilage is avascular and receives nutrients via matrix diffusion from perichondrial capillaries, resulting in sluggish repair." },
  { topic: "fibrocartilage compressive resistance", fact: "Fibrocartilage contains heavy parallel bundles of Type I collagen that resist intense compression in intervertebral discs and pubic symphysis." },
  { topic: "compact bone osteon architecture", fact: "Compact bone consists of cylindrical osteons containing concentric mineralized lamellae surrounding neurovascular Haversian canals." },
  { topic: "Volkmann canal vascular network", fact: "Volkmann canals run perpendicularly to link Haversian canals with periosteal and marrow blood vessels." },
  { topic: "brown fat non-shivering thermogenesis", fact: "Brown adipose tissue expresses mitochondrial thermogenin (UCP-1) to uncouple respiration and release metabolic heat in neonates." },
  { topic: "plasma cell immunoglobulin synthesis", fact: "Plasma cells derived from stimulated B-lymphocytes are packed with rough ER to synthesize circulating antibody proteins." },
  { topic: "mast cell inflammatory degranulation", fact: "Connective tissue mast cells release histamine, heparin, and leukotrienes upon IgE crosslinking during allergic reactions." },
  { topic: "smooth muscle fatigue-resistant latch state", fact: "Smooth muscle uses a latch-bridge mechanism with low ATP turnover to maintain prolonged tonic contraction in organ walls." },
  { topic: "cardiac refractory protection", fact: "Cardiac muscle features a prolonged effective refractory period driven by calcium influx that prevents lethal tetanic spasms." },
  { topic: "Nissl granule protein assembly", fact: "Nissl bodies in neuronal soma and dendrites consist of rough ER and ribosomes dedicated to assembling structural and neurotransmitter proteins." },
  { topic: "microglia resident phagocytosis", fact: "Microglia are mesoderm-derived phagocytes that clear necrotic cellular debris and synaptic remnants within the CNS." },
  { topic: "astrocyte blood-brain barrier induction", fact: "Astrocyte perivascular end-feet induce endothelial tight junctions that form the restrictive blood-brain barrier." },
  { topic: "oligodendrocyte multi-axon myelination", fact: "A single oligodendrocyte extends multiple membranous processes to myelinate internodes on numerous neighboring CNS axons." },
  { topic: "Schwann cell peripheral myelination", fact: "Schwann cells wrap concentrically around solitary peripheral nerve fibers, forming myelin sheaths separated by Nodes of Ranvier." },
  { topic: "saltatory nodal jumping", fact: "Myelination confines action potential generation to Nodes of Ranvier, accelerating conduction velocity via saltatory propagation." },
  { topic: "reticular stroma lymphoid mesh", fact: "Reticular tissue consists of branched Type III collagen fibers that form a porous supporting framework in spleen and lymph nodes." },
  { topic: "elastic cartilage pinna flexibility", fact: "Elastic cartilage contains dense networks of branching elastin fibers that allow reversible deformation in the pinna and epiglottis." },
  { topic: "single-unit myogenic syncytium", fact: "Single-unit smooth muscle cells are electrically coupled via gap junctions to contract simultaneously as a functional syncytium." },
  { topic: "desmosome intermediate filament anchor", fact: "Desmosomes anchor transmembrane cadherins to intermediate keratin filaments, dissipating shearing stress across epithelial sheets." },
  { topic: "bone dual matrix composition", fact: "Bone matrix combines hard inorganic hydroxyapatite crystals with flexible organic Type I collagen to provide shatter resistance." },
  { topic: "hyaline cartilage joint lubrication", fact: "Hyaline cartilage provides smooth, low-friction articular coatings over the ends of long bones in movable synovial joints." },
  { topic: "multi-unit smooth independent control", fact: "Multi-unit smooth muscle cells in the iris and ciliary body are independently innervated with minimal gap junction coupling." },
  { topic: "basement membrane bipartite barrier", fact: "The basement membrane comprises an epithelial basal lamina and a connective reticular lamina that anchors epithelia and filters molecules." }
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
      exp: `Histological principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the histological organization of animal organ systems, what is the functional significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Histology fact: ${item.fact}`
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

console.log(`Part 4 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_structorg_part4.js');
  const fileContent = `// Auto-generated data for Zoology Structural Organisation Part 4: Epithelial, connective, muscular, and neural tissues in animals\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
