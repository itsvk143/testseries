// scripts/build_zoology_biohuman_part5.js
// Subtopic: Immunity
// Chapter: Biology and Human Welfare
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Immunity";
const CHAPTER = "Biology and Human Welfare";
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
    a: "Innate immunity is a non-specific type of defense present at the time of birth.",
    r: "Innate immunity consists of four types of barriers—physical, physiological, cellular, and cytokine—that prevent entry or replication of diverse foreign agents.",
    ans: 0,
    exp: "Innate immunity provides broad, non-specific protection present from birth through anatomical, biochemical, and cellular barrier systems. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Skin is the principal physical barrier preventing the entry of microorganisms into the body.",
    r: "The stratum corneum consists of tightly packed, keratinized, continuously desquamating dead cells that pathogens cannot easily penetrate.",
    ans: 0,
    exp: "The dry, acidic, keratin-rich cornified layer of the epidermis forms an impermeable physical shield against microbial entry. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mucus coating of the epithelium lining the respiratory tract acts as a physical barrier.",
    r: "Mucus entraps inhaled dust particles and microbes, which are then swept upward by beating cilia toward the pharynx.",
    ans: 0,
    exp: "The mucociliary escalator traps airborne pathogens in sticky mucus and propels them away from the lungs into the esophagus to be swallowed. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Gastric acid, saliva in the mouth, and tears from eyes serve as physiological barriers of innate immunity.",
    r: "Hydrochloric acid provides an extremely acidic pH ($1.5-2.0$) that kills swallowed pathogens, while saliva and tears contain the bactericidal enzyme lysozyme.",
    ans: 0,
    exp: "Physiological barriers rely on chemical environments and antimicrobial secretions (acid, lysozyme) that lyse bacterial cell walls and prevent microbial growth. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lysozyme present in tears and saliva destroys Gram-positive bacteria.",
    r: "Lysozyme enzymatically cleaves the $\\beta\\text{-(1,4)-glycosidic}$ bonds between N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) in peptidoglycan.",
    ans: 0,
    exp: "Hydrolysis of the peptidoglycan backbone by lysozyme weakens the bacterial cell wall, leading to osmotic lysis of Gram-positive bacteria. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Polymorphonuclear leukocytes (PMNL-neutrophils) and monocytes act as cellular barriers of innate immunity.",
    r: "These phagocytic white blood cells ingest and intracellularly digest invading bacterial pathogens.",
    ans: 0,
    exp: "PMNL-neutrophils and monocytes patrol blood and extravasate into infected tissues, acting as cellular barriers that phagocytose and destroy microbes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Natural Killer (NK) cells destroy virus-infected and neoplastic cells without prior sensitization.",
    r: "NK cells recognize and lyse target cells that have lost or downregulated surface MHC class I molecules.",
    ans: 0,
    exp: "NK cells express inhibitory receptors that bind normal self-MHC class I; when target cells downregulate MHC class I ('missing self'), inhibitory signals are lost, triggering cytotoxic granule release. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Virus-infected cells secrete proteins called interferons as cytokine barriers.",
    r: "Interferons protect uninfected neighboring cells by stimulating the transcription of antiviral proteins that inhibit viral replication and protein translation.",
    ans: 0,
    exp: "Type I interferons (IFN-alpha/beta) secreted by infected cells bind to receptors on adjacent cells, inducing enzymes like 2'-5'-oligoadenylate synthetase and protein kinase R (PKR) to degrade viral RNA and halt translation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The secondary (anamnestic) immune response is significantly faster and more intensified than the primary immune response.",
    r: "The human immune system establishes immunological memory B and T cells during the primary encounter with a pathogen.",
    ans: 0,
    exp: "Long-lived memory cells generated during the initial antigen encounter rapidly recognize the recurring pathogen, proliferating and differentiating to mount a swift, massive secondary response. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "An antibody molecule is represented structurally as $H_2L_2$.",
    r: "Each antibody monomer consists of four polypeptide chains: two identical longer heavy (H) chains and two identical shorter light (L) chains.",
    ans: 0,
    exp: "The basic monomeric immunoglobulin unit comprises two identical heavy chains and two identical light chains joined together by interchain disulfide bonds. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The antigen-binding site of an antibody molecule is situated within the variable region.",
    r: "The hypervariable loops (complementarity-determining regions, CDRs) of both heavy and light chains form a unique three-dimensional cleft specific for an antigenic determinant.",
    ans: 0,
    exp: "Hypervariable sequences within the amino-terminal V_H and V_L domains fold together to create the paratope that specifically binds the antigen's epitope like a lock and key. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "IgG is the only immunoglobulin class that can cross the human placenta.",
    r: "Maternal IgG molecules cross the placental syncytiotrophoblast via active transcytosis mediated by the neonatal Fc receptor (FcRn).",
    ans: 0,
    exp: "FcRn receptors in the syncytiotrophoblast actively bind and transport maternal IgG across the placental barrier, conferring natural passive systemic immunity to the developing fetus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Colostrum secreted by the mother during the initial days of lactation is essential for the newborn infant.",
    r: "Colostrum contains abundant secretory IgA antibodies that protect the infant's mucosal surfaces from intestinal pathogens.",
    ans: 0,
    exp: "Secretory IgA in colostrum resists proteolytic digestion in the infant gut, coating the gastrointestinal mucosa and preventing adherence and invasion of enteric pathogens. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "IgM is the first class of antibody synthesized during a primary immune response.",
    r: "Naive mature B lymphocytes express membrane-bound IgM and secrete pentameric IgM upon their initial activation before class switching occurs.",
    ans: 0,
    exp: "Unstimulated B cells begin antibody production with IgM; later, under T-helper cytokine signaling, class switch recombination switches constant regions to IgG, IgA, or IgE. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "IgM exists in serum as a pentamer with ten antigen-binding sites.",
    r: "Five $H_2L_2$ monomeric subunits of IgM are joined together covalently by disulfide bonds and a single joining (J) chain.",
    ans: 0,
    exp: "The pentameric structure of secreted IgM gives it a theoretical valency of 10, conferring exceptionally high avidity for agglutinating particulate antigens and activating complement. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "IgE antibodies are responsible for mediating allergic and immediate hypersensitivity reactions.",
    r: "The Fc region of IgE binds with high affinity to Fc$\\epsilon$RI receptors on the surface of mast cells and basophils, triggering degranulation upon antigen cross-linking.",
    ans: 0,
    exp: "Allergens cross-link membrane-bound IgE-Fc-epsilon-RI complexes on mast cells, provoking explosive exocytosis of preformed granules containing histamine and leukotrienes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cell-Mediated Immunity (CMI) is responsible for the rejection of transplanted organ grafts.",
    r: "Recipient T lymphocytes recognize foreign donor Major Histocompatibility Complex (MHC/HLA) molecules as non-self, triggering cytotoxic destruction of graft cells.",
    ans: 0,
    exp: "Alloreactive host CD8+ cytotoxic T cells and CD4+ helper T cells recognize foreign donor allotypic HLA antigens, mounting a cell-mediated attack that destroys graft vascular endothelium and parenchyma. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tissue matching and blood group matching are essential prerequisites before undertaking organ transplantation.",
    r: "Organ grafts transplanted from living donors without tissue matching are rapidly rejected by the recipient's cell-mediated immune system.",
    ans: 0,
    exp: "Closer matching of polymorphic HLA-A, HLA-B, and HLA-DR loci minimizes alloreactive T-cell recognition, significantly improving long-term graft survival. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Organ transplant recipients must take immunosuppressive drugs throughout their entire lives.",
    r: "Immunosuppressants such as Cyclosporin A suppress alloreactive T-lymphocyte activation, preventing graft rejection.",
    ans: 0,
    exp: "Cyclosporin A inhibits calcineurin, blocking IL-2 transcription and T-cell proliferation; continuous immunosuppression is required because foreign donor antigens persist indefinitely. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Humoral immunity is mediated by circulating antibodies, whereas cell-mediated immunity is mediated by T lymphocytes.",
    r: "B lymphocytes secrete soluble antibodies into blood and lymph (body humors) to neutralize extracellular pathogens.",
    ans: 0,
    exp: "Humoral immunity deals with extracellular antigens in fluids via B-cell antibodies, while CMI targets intracellular pathogens, tumor cells, and foreign grafts via T cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "T lymphocytes do not secrete antibodies into the bloodstream.",
    r: "T lymphocytes act either by directly killing infected cells or by providing cytokine helper signals that assist B cells in antibody production.",
    ans: 0,
    exp: "T cells execute effector functions through cell-cell contact and cytokine secretion (CD4+ helper cells secrete cytokines for B-cell activation, CD8+ cytotoxic cells release perforin/granzymes), rather than secreting immunoglobulins. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The classical complement pathway is activated by antigen-antibody complexes.",
    r: "The Fc regions of antigen-bound IgG and IgM provide specific binding sites for the complement C1q subunit.",
    ans: 0,
    exp: "When multiple IgG molecules or pentameric IgM bind surface antigens, conformational changes expose C1q binding sites on their heavy chains, triggering the enzymatic complement cascade. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The Membrane Attack Complex (MAC) formed by terminal complement proteins lyses target pathogen cells.",
    r: "Polymerization of complement component C9 with C5b-8 creates a large, rigid transmembrane pore ($10\\text{ nm}$) that causes osmotic rupture of target cells.",
    ans: 0,
    exp: "The terminal pathway culminates in C5b-6-7-8 assembling with 10-16 molecules of C9 into a hollow transmembrane pore, dissipating membrane gradients and driving osmotic lysis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Major Histocompatibility Complex (MHC) class I molecules are expressed on virtually all nucleated cells in the human body.",
    r: "MHC class I molecules present endogenous peptide antigens to CD8+ cytotoxic T lymphocytes.",
    ans: 0,
    exp: "All nucleated cells degrade intracellular proteins via proteasomes and display resulting peptide fragments on surface MHC class I to alert CD8+ T cells to viral infection or malignant transformation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "MHC class II molecules are expressed selectively on professional antigen-presenting cells (APCs).",
    r: "MHC class II molecules present exogenous peptide antigens to CD4+ helper T lymphocytes.",
    ans: 0,
    exp: "Dendritic cells, macrophages, and B lymphocytes internalize exogenous antigens by endocytosis, process them in endolysosomes, and present them on MHC class II to activate CD4+ T helper cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dendritic cells are considered the most potent professional antigen-presenting cells for activating naive T cells.",
    r: "Dendritic cells express high levels of both MHC class II molecules and co-stimulatory molecules (CD80/CD86) required for T-cell priming.",
    ans: 0,
    exp: "Dendritic cells capture antigens in peripheral tissues, mature while migrating to draining lymph nodes, and present peptides with robust B7 costimulation to initiate primary T-cell responses. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// 154 MCQs
const mcqData = [];

function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-25: Innate Immunity Barriers
addMcq(
  "The overall ability of the host organism to fight and resist disease-causing pathogens conferred by the immune system is termed:",
  ["Immunity", "Tolerance", "Hypersensitivity", "Autoimmunity"],
  0,
  "Immunity is defined by NCERT as the overall ability of the host to fight the disease-causing organisms, conferred by the immune system."
);
addMcq(
  "Innate immunity is characterized by which of the following features?",
  ["It is non-specific, present from the time of birth, and lacks immunological memory", "It is pathogen-specific and develops only after exposure", "It is acquired exclusively through breast milk", "It requires HLA tissue matching"],
  0,
  "Innate immunity represents the body's congenital, inborn first line of defense; it is non-specific, operational immediately upon birth, and does not remember prior encounters."
);
addMcq(
  "Which of the following is categorized as a physical barrier of innate immunity in humans?",
  ["Mucus coating of epithelium lining the respiratory, gastrointestinal, and urogenital tracts", "Acid in the stomach", "Lysozyme in tears", "Interferons secreted by virus-infected cells"],
  0,
  "Physical barriers prevent physical entry of pathogens into the body and include intact skin and the mucus-coated epithelial linings of organ systems."
);
addMcq(
  "Which physiological barrier in the human body creates a strongly acidic microenvironment that destroys ingested bacteria?",
  ["Gastric hydrochloric acid in the stomach", "Saliva in the buccal cavity", "Synovial fluid in knee joints", "Aqueous humor in the anterior eye"],
  0,
  "The low pH ($1.5-2.0$) produced by gastric parietal cell secretion of hydrochloric acid denatures microbial proteins and destroys most ingested bacteria."
);
addMcq(
  "Lysozyme is an antibacterial enzyme present in which human bodily secretions?",
  ["Saliva and tears", "Gastric juice and bile", "Pancreatic juice and insulin", "Synovial fluid and sebum"],
  0,
  "Lysozyme is a physiological barrier enzyme found in tears, saliva, nasal secretions, and mucus that hydrolyzes bacterial cell wall peptidoglycan."
);
addMcq(
  "Which chemical bond in the peptidoglycan wall of bacteria is specifically cleaved by lysozyme?",
  ["$\\beta\\text{-(1,4)-glycosidic}$ bond between NAG and NAM", "Phosphodiester bond between nucleotides", "Peptide bond between two alanine residues", "Ester bond in phospholipids"],
  0,
  "Lysozyme specifically cleaves the beta-(1,4)-glycosidic bond connecting N-acetylmuramic acid (NAM) and N-acetylglucosamine (NAG) in bacterial peptidoglycan."
);
addMcq(
  "Which leukocyte type is designated as PMNL and functions as a primary cellular barrier of innate immunity?",
  ["Polymorphonuclear leukocyte (Neutrophil)", "Plasma cell", "Erythrocyte", "Megakaryocyte"],
  0,
  "PMNL stands for polymorphonuclear leukocytes (principally neutrophils), which are the most abundant phagocytic white blood cells responding acutely to bacterial invasion."
);
addMcq(
  "Natural Killer (NK) cells are specialized lymphocytes that belong to which branch of the immune system?",
  ["Innate immunity", "Humoral acquired immunity", "Active artificial immunity", "Autoimmunity"],
  0,
  "NK cells are large granular lymphocytes that function as part of the innate immune system, recognizing and destroying virus-infected and cancerous cells without prior sensitization."
);
addMcq(
  "Interferons are protein molecules that constitute which barrier of innate immunity?",
  ["Cytokine barrier", "Physical barrier", "Physiological barrier", "Cellular barrier"],
  0,
  "According to NCERT, cytokine barriers consist of interferons—signaling proteins secreted by virus-infected cells to protect uninfected neighboring cells."
);
addMcq(
  "How do interferons protect healthy, uninfected host cells from viral propagation?",
  ["They induce adjacent cells to synthesize antiviral proteins that degrade viral mRNA and block viral protein translation", "They directly bind and lyse bacterial peptidoglycan walls", "They stimulate the production of insulin", "They freeze extracellular body fluids"],
  0,
  "Interferons bind to specific cell surface receptors on neighboring uninfected cells, activating the JAK-STAT pathway to transcribe enzymes like PKR and RNase L that arrest viral translation."
);

// 26-55: Acquired Immunity, Primary & Secondary responses, B and T cells
addMcq(
  "Acquired (adaptive) immunity is fundamentally distinguished from innate immunity by having:",
  ["High pathogen specificity, self/non-self discrimination, and immunological memory", "Instantaneous action within seconds of birth without memory", "Absence of any white blood cells", "Complete dependence on skin keratin only"],
  0,
  "Acquired immunity is characterized by exquisite specificity for distinct molecular antigens, capacity to distinguish self from non-self, and immunological memory."
);
addMcq(
  "Why is a secondary (anamnestic) immune response significantly more rapid and intense than a primary response?",
  ["Long-lived memory B and T cells formed during the primary encounter rapidly proliferate upon re-exposure", "The skin becomes five times thicker after the first infection", "Bacteria lose all their antigens upon second entry", "Stomach acid becomes ten times more acidic"],
  0,
  "Memory cells pre-programmed with high-affinity receptors persist for decades; upon secondary contact with the same antigen, they mount an immediate, high-titer antibody response."
);
addMcq(
  "Which cells of the immune system are directly responsible for producing and secreting antibodies into the blood?",
  ["Plasma cells (differentiated B lymphocytes)", "CD8+ cytotoxic T cells", "Erythrocytes", "Keratinocytes"],
  0,
  "B lymphocytes differentiate upon antigenic stimulation and T-cell help into antibody factories known as plasma cells, which secrete thousands of immunoglobulin molecules per second."
);
addMcq(
  "What is the primary physiological function of T lymphocytes in humoral immunity?",
  ["They do not produce antibodies themselves, but provide essential helper signals to stimulate B cells to produce antibodies", "They directly synthesize all pentameric IgM antibodies", "They transform into erythrocytes", "They digest dietary fats in the intestine"],
  0,
  "As stated in NCERT, T cells do not produce antibodies directly, but CD4+ helper T cells provide essential cytokines and CD40L costimulation required for B cells to proliferate and secrete antibodies."
);
addMcq(
  "Cell-Mediated Immunity (CMI) is primarily executed by which category of immune cells?",
  ["T lymphocytes", "B lymphocytes", "Erythrocytes", "Platelets"],
  0,
  "Cell-Mediated Immunity is executed directly by T lymphocytes (specifically CD8+ cytotoxic T cells and CD4+ Th1 cells) acting against intracellular pathogens and abnormal host cells."
);

// 56-85: Antibody Molecular Structure & Classes
addMcq(
  "The basic monomeric structural formula of an antibody molecule is represented as:",
  ["$H_2L_2$", "$H_4L_4$", "$H_1L_1$", "$H_3L_1$"],
  0,
  "Each basic antibody molecule contains four polypeptide chains—two identical heavy (H) chains and two identical light (L) chains—represented as H2L2."
);
addMcq(
  "Which chemical bonds hold the heavy and light polypeptide chains of an antibody molecule together?",
  ["Disulfide bonds ($-S-S-$)", "Phosphodiester bonds", "Glycosidic bonds", "High-energy pyrophosphate bonds"],
  0,
  "Interchain and intrachain covalent disulfide bonds (formed between cysteine residues) stabilize the quaternary structure of the antibody polypeptide chains."
);
addMcq(
  "The antigen-binding site (paratope) of an antibody molecule is formed by the interaction of:",
  ["The variable region of the heavy chain ($V_H$) and variable region of the light chain ($V_L$)", "The constant region of the heavy chain ($C_H3$) only", "The hinge region only", "The J-chain alone"],
  0,
  "The variable domains of one heavy chain and one light chain pair together to form a unique antigen-binding site (Fab tip) capable of binding a specific epitope."
);
addMcq(
  "How many antigen-binding sites are present in a single monomeric IgG antibody molecule?",
  ["Two (bivalent)", "One", "Four", "Ten"],
  0,
  "A monomeric IgG molecule consists of two Fab arms, each bearing one antigen-binding site; thus, monomeric IgG is bivalent."
);
addMcq(
  "The constant fragment (Fc region) of an antibody molecule is responsible for:",
  ["Binding to cell surface Fc receptors on phagocytes/mast cells and activating the classical complement cascade", "Binding to the antigen epitope", "Replicating viral nucleic acids", "Synthesizing amino acids"],
  0,
  "The crystallizable fragment (Fc) formed by the constant domains of the heavy chains mediates effector functions, such as complement activation and binding to leukocyte Fc receptors."
);
addMcq(
  "Which class of antibody is the most abundant in human blood serum, accounting for approximately 75% to 80% of total circulating immunoglobulins?",
  ["IgG", "IgA", "IgM", "IgE"],
  0,
  "Immunoglobulin G (IgG) is the predominant antibody class in human blood and extracellular fluid, constituting about 75-80% of the total serum immunoglobulin pool."
);
addMcq(
  "Which immunoglobulin class crosses the human placental barrier to provide essential passive immunity to the developing fetus?",
  ["IgG", "IgM", "IgA", "IgE"],
  0,
  "IgG is the only antibody class capable of traversing the placenta via the neonatal Fc receptor (FcRn), conferring natural passive maternal immunity to the newborn."
);
addMcq(
  "Which class of antibody is characteristically present as a dimer in colostrum, saliva, and tears to protect mucosal membranes?",
  ["IgA", "IgE", "IgD", "IgM"],
  0,
  "Secretory Immunoglobulin A (IgA) is a dimer joined by a J-chain and a secretory component, abundant in colostrum, breast milk, saliva, tears, and gastrointestinal mucus."
);
addMcq(
  "What is the structural role of the 'Secretory Component' attached to dimeric IgA?",
  ["It protects the IgA molecule from enzymatic degradation by digestive proteases in mucosal secretions", "It acts as an antigen-binding site", "It converts IgA into an explosive toxin", "It binds insulin in the blood"],
  0,
  "The secretory component (derived from the polymeric immunoglobulin receptor) wraps around dimeric IgA, conferring resistance against proteolytic cleavage by enzymes in gut and respiratory fluids."
);
addMcq(
  "Which immunoglobulin class is a pentamer with ten antigen-binding sites and the highest theoretical avidity for agglutination?",
  ["IgM", "IgG", "IgA", "IgD"],
  0,
  "Secreted IgM is a pentamer composed of five H2L2 monomers linked by disulfide bonds and a joining (J) chain, possessing ten antigen-binding sites (decavalent)."
);
addMcq(
  "Which immunoglobulin class is the primary mediator of allergic reactions, asthma, and defense against parasitic helminths?",
  ["IgE", "IgG", "IgD", "IgA"],
  0,
  "IgE binds with high affinity to Fc-epsilon-RI receptors on mast cells and basophils; allergen cross-linking triggers histamine release, mediating Type I hypersensitivity and helminth immunity."
);
addMcq(
  "Which immunoglobulin class is co-expressed with IgM on the surface of mature, naive B lymphocytes to serve as an antigen receptor?",
  ["IgD", "IgE", "IgA", "Secretory IgG"],
  0,
  "Mature, antigen-inexperienced (naive) B lymphocytes express membrane-bound IgM and IgD simultaneously through alternative mRNA splicing, serving as B-cell receptors (BCR)."
);

// 86-115: Organ Transplantation, Tissue Matching, Graft Rejection
addMcq(
  "Why are organ transplants (like kidney, heart, or liver) from another human being rejected by the recipient's immune system?",
  ["The recipient's immune system can distinguish 'self' from 'non-self' and attacks foreign donor cells via Cell-Mediated Immunity", "Human organs cannot conduct electrical nerve impulses in new bodies", "Blood vessels never connect between two different humans", "Human organs dissolve when exposed to normal body temperature"],
  0,
  "The human immune system discriminates self from non-self; donor cell-surface allogeneic HLA molecules trigger host cell-mediated immune responses that reject the graft."
);
addMcq(
  "Which specific component of the adaptive immune system is primarily responsible for the rejection of transplanted organ allografts?",
  ["Cell-Mediated Immune response (CMI mediated by T lymphocytes)", "Humoral immunity mediated by IgE antibodies", "Erythrocyte sedimentation rate", "Platelet thromboplastic factor"],
  0,
  "According to NCERT, the Cell-Mediated Immune response (CMI), mediated by cytotoxic and helper T lymphocytes, is responsible for graft rejection."
);
addMcq(
  "Tissue matching between donor and recipient before organ transplantation involves typing of which cell surface polymorphic glycoproteins?",
  ["Human Leukocyte Antigens (HLA / MHC molecules)", "Erythrocyte Rh factor only", "Serum albumin proteins", "Keratin fibers in hair"],
  0,
  "HLA (Human Leukocyte Antigen) complexes encoded by the MHC locus on chromosome 6 are typed to ensure maximum antigenic compatibility between donor and recipient."
);
addMcq(
  "An organ or tissue transplanted between genetically identical individuals (such as identical monozygotic twins) is termed an:",
  ["Isograft (syngeneic graft)", "Allograft", "Autograft", "Xenograft"],
  0,
  "An isograft (syngraft) is a tissue graft transplanted between genetically identical individuals (monozygotic twins), which is accepted without immunological rejection."
);
addMcq(
  "A tissue transplanted from one anatomical site to another site within the very same individual (e.g. skin graft from thigh to face) is an:",
  ["Autograft", "Allograft", "Isograft", "Xenograft"],
  0,
  "An autograft is tissue transplanted from one site to another on the same patient (e.g., skin graft, saphenous vein bypass), which exhibits 100% histocompatibility."
);
addMcq(
  "A graft transplanted between genetically distinct individuals of the same species (e.g. human kidney from one unrelated person to another) is an:",
  ["Allograft (allogeneic graft)", "Autograft", "Isograft", "Xenograft"],
  0,
  "An allograft is a transplant between genetically non-identical members of the same biological species, which requires immunosuppression to avoid rejection."
);
addMcq(
  "A transplant between members of two entirely different biological species (e.g. pig heart valve into a human) is termed a:",
  ["Xenograft (heterograft)", "Allograft", "Isograft", "Autograft"],
  0,
  "A xenograft is a graft between individuals of different species; it faces intense immunological barriers including hyperacute rejection mediated by natural preformed antibodies."
);
addMcq(
  "Which immunosuppressive drug derived from the fungus Trichoderma polysporum is routinely administered to prevent graft rejection in organ transplant patients?",
  ["Cyclosporin A", "Statins", "Penicillin G", "Streptokinase"],
  0,
  "Cyclosporin A is a cyclic undecapeptide produced by the fungus Trichoderma polysporum that inhibits calcineurin, suppressing T-cell IL-2 transcription and preventing graft rejection."
);
addMcq(
  "Why must organ transplant recipients take immunosuppressive drugs for the rest of their lives?",
  ["Foreign donor HLA antigens persist on graft cells indefinitely, and discontinuing immunosuppression triggers graft rejection by host T cells", "Immunosuppressants provide nutrition to the new organ", "Graft organs cannot produce their own blood without drugs", "Immunosuppressive drugs replace all donor hormones"],
  0,
  "Because allograft parenchymal and endothelial cells permanently express foreign donor MHC antigens, stopping immunosuppressive therapy leads to reactivation of host T cells and rejection."
);

// 116-154: Advanced Immunology MCQs
const moreMcqsPart5 = [
  ["Which primary lymphoid organ is the site of maturation, education, and selection of T lymphocytes?", ["Thymus", "Spleen", "Lymph nodes", "Tonsils"], 0, "Progenitor T cells migrate from bone marrow to the thymus, where positive selection (for self-MHC) and negative selection (against self-antigens) educate mature T cells."],
  ["Which organ is the principal primary lymphoid organ where all circulating blood cells, including B and T lymphocyte precursors, originate?", ["Bone marrow", "Liver", "Spleen", "Thyroid"], 0, "Bone marrow is the primary hematopoiesis site in adults, where pluripotent hematopoietic stem cells generate all blood cell lineages, and where B cells mature."],
  ["Which secondary lymphoid organ acts as a massive biological filter for the blood, removing aged erythrocytes and bloodborne pathogens?", ["Spleen", "Thymus", "Peyer's patches", "Appendix"], 0, "The spleen possesses red pulp that filters blood and phagocytoses senescent RBCs, and white pulp containing lymphoid follicles that mount immune responses to blood antigens."],
  ["Mucosa-Associated Lymphoid Tissue (MALT) constitutes approximately what percentage of the total lymphoid tissue in the human body?", ["Approximately 50%", "Less than 5%", "Exactly 100%", "Over 90%"], 0, "NCERT explicitly states that MALT lines major tracts (respiratory, digestive, urogenital) and constitutes about 50% of the lymphoid tissue in the human body."],
  ["Peyer's patches are specialized aggregations of lymphoid follicles located within the submucosa of the:", ["Ileum of the small intestine", "Stomach fundus", "Esophageal mucosa", "Urinary bladder"], 0, "Peyer's patches are unencapsulated lymphoid aggregations in the lamina propria and submucosa of the distal ileum that monitor intestinal bacterial populations."],
  ["Microfold (M) cells are specialized epithelial cells located over Peyer's patches whose function is to:", ["Sample and transport luminal antigens across the intestinal epithelial barrier to underlying dendritic cells", "Secrete hydrochloric acid into the bowel lumen", "Produce large quantities of bile salts", "Synthesize glycogen for enterocytes"], 0, "M cells possess a pocket containing lymphocytes and dendritic cells; they endocytose luminal antigens and deliver them via transcytosis for mucosal immune sampling."],
  ["The cluster of differentiation marker CD4 is characteristically expressed on the surface of:", ["Helper T lymphocytes ($T_H$)", "Cytotoxic T lymphocytes ($T_C$)", "B lymphocytes only", "Natural Killer cells only"], 0, "CD4 is a coreceptor present on helper T lymphocytes that binds to invariant domains of MHC class II molecules on antigen-presenting cells."],
  ["The cluster of differentiation marker CD8 is characteristically expressed on the surface of:", ["Cytotoxic T lymphocytes ($T_C$)", "Helper T lymphocytes ($T_H$)", "Mast cells", "Eosinophils"], 0, "CD8 is a cell-surface glycoprotein coreceptor expressed on cytotoxic T lymphocytes that specifically binds to the non-polymorphic alpha-3 domain of MHC class I molecules."],
  ["During T-cell killing of target cells, which pore-forming protein is released by cytotoxic granules to create transmembrane channels?", ["Perforin", "Lysozyme", "Pepsin", "Keratin"], 0, "Perforin polymerizes in the presence of calcium in the plasma membrane of target cells, creating 13-20 nm cylindrical transmembrane pores."],
  ["Granzymes are serine proteases released alongside perforin by cytotoxic T lymphocytes to:", ["Enter target cells through perforin pores and cleave procaspases, triggering rapid apoptosis", "Cross-link collagen in connective tissue", "Inactivate bacterial ribosomes directly", "Digest carbohydrates in the extracellular matrix"], 0, "Granzyme B cleaves and activates procaspase-3 and Bid, initiating both caspase cascades and mitochondrial permeabilization to execute target cell apoptosis."],
  ["Fas ligand (FasL) expressed on activated cytotoxic T cells induces apoptosis in target cells by binding to:", ["Fas receptor (CD95) on the target cell membrane, assembling the death-inducing signaling complex (DISC)", "Insulin receptors", "MHC class II molecules", "CD28 coreceptor"], 0, "Engagement of Fas by trimeric FasL clusters death domains on the cytoplasmic tail of Fas, recruiting FADD and procaspase-8 to trigger extrinsic apoptotic death."],
  ["Clonal selection theory, proposed by Sir Frank Macfarlane Burnet, states that:", ["Antigen selects and stimulates the proliferation of a specific pre-existing lymphocyte bearing a matching surface receptor", "Antigen enters the cell and acts as a template to fold random proteins into antibodies", "All lymphocytes are identical until instructed by hormones", "Antibodies are synthesized by red blood cells"], 0, "Burnet's clonal selection theory posited that each lymphocyte clone possesses a single, unique antigen receptor generated before antigen encounter; antigen selectively triggers clonal expansion."],
  ["Clonal deletion of autoreactive T cells in the thymic medulla during negative selection is essential for:", ["Establishing central immunological self-tolerance", "Stimulating antibody class switching", "Increasing spleen size", "Promoting viral replication"], 0, "Negative selection in the thymus eliminates developing thymocytes that bind self-antigen-MHC complexes with high affinity, preventing autoimmune destruction of self-tissues."],
  ["The autoimmune regulator (AIRE) transcription factor plays a vital role in thymic negative selection by:", ["Promoting promiscuous expression of peripheral tissue-specific antigens in medullary thymic epithelial cells", "Inactivating viral oncogenes", "Stimulating red blood cell production in bone marrow", "Cleaving bacterial DNA"], 0, "AIRE drives ectopic expression of non-thymic peripheral self-antigens (e.g. insulin, thyroglobulin) in the thymic medulla so autoreactive T-cell clones can be recognized and deleted."],
  ["Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy (APECED) is a genetic disease caused by mutations in which gene?", ["AIRE gene", "FOXP3 gene", "RAG1 gene", "CD4 gene"], 0, "Loss-of-function mutations in AIRE prevent deletion of autoreactive T-cell clones, causing multiorgan autoimmune endocrine destruction and mucocutaneous candidiasis."],
  ["Regulatory T cells ($T_{reg}$), which actively suppress immune responses and maintain peripheral self-tolerance, are characterized by the expression of:", ["$CD4^+$, $CD25^+$, and the master transcription factor FoxP3", "$CD8^+$ and MyoD", "CD19 and CD20 only", "Serum albumin"], 0, "Tregs express CD4, high levels of the IL-2 receptor alpha chain (CD25), and FoxP3; they secrete immunosuppressive cytokines (IL-10 and TGF-beta) to halt aberrant immune reactions."],
  ["IPEX syndrome (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) is a fatal congenital autoimmune disorder caused by mutations in:", ["FOXP3 gene", "p53 gene", "BRCA1 gene", "CFTR gene"], 0, "Defects in the X-linked FOXP3 gene prevent development of functional CD4+CD25+ regulatory T cells, unleashing uninhibited autoimmune destruction across multiple organs."],
  ["The enzyme Activation-Induced Cytidine Deaminase (AID) is strictly required in activated B cells for:", ["Somatic hypermutation (affinity maturation) and antibody class switch recombination", "Replicating viral DNA", "Degrading histamine in mast cells", "Phosphorylating glycogen synthase"], 0, "AID deaminates cytidine to uracil in immunoglobulin V-region DNA (driving somatic hypermutation) and switch regions (driving class switching from IgM to IgG/IgA/IgE)."],
  ["Affinity maturation in germinal centers of secondary lymphoid follicles results in:", ["Generation of B cells that produce antibodies with progressively higher affinity for the immunizing antigen", "Loss of all immunological memory", "Conversion of B cells into T cells", "Decrease in antibody specificity"], 0, "Iterative rounds of somatic hypermutation within B-cell variable genes followed by competitive selection on follicular dendritic cells select clones with superior antigen affinity."],
  ["Follicular Dendritic Cells (FDCs) in lymphoid germinal centers are unique because they:", ["Display intact, native antigen-antibody-complement complexes on their surface for long periods without processing them", "Are phagocytic white blood cells that ingest bacteria", "Originate from hematopoietic stem cells in bone marrow", "Produce large quantities of insulin"], 0, "FDCs are non-hematopoietic stromal cells that retain unprocessed antigens in iccosomes via Fc and complement receptors, presenting them to B cells undergoing affinity selection."],
  ["Severe Combined Immunodeficiency (SCID) can be caused by a congenital genetic deficiency in which enzyme involved in purine salvage?", ["Adenosine Deaminase (ADA)", "Glucose-6-phosphate dehydrogenase", "Phenylalanine hydroxylase", "Hypoxanthine-guanine phosphoribosyltransferase"], 0, "ADA deficiency causes accumulation of toxic deoxyadenosine metabolites (dATP) that poison ribonucleotide reductase, killing developing T and B lymphocytes and causing SCID."],
  ["X-linked Agammaglobulinemia (Bruton's agammaglobulinemia) is characterized by a profound absence of mature B cells and serum antibodies, caused by mutations in:", ["Bruton tyrosine kinase (BTK)", "Adenosine deaminase", "CD4 coreceptor", "Complement C3"], 0, "BTK is essential for signaling through the pre-B-cell receptor; its defect halts B-cell development in bone marrow at the pre-B stage, leaving patients vulnerable to pyogenic bacteria."],
  ["DiGeorge syndrome is a congenital immunodeficiency disorder resulting from defective embryonic development of the third and fourth pharyngeal pouches, characterized by:", ["Thymic hypoplasia (causing profound T-cell deficiency), parathyroid hypoplasia (hypocalcemia), and cardiac anomalies", "Complete absence of red blood cells", "Massive hypertrophy of the spleen", "Excessive production of sweat"], 0, "Failure of the 3rd and 4th branchial pouches to develop results in absence or hypoplasia of the thymus (no T cells) and parathyroids (hypocalcemic tetany), plus conotruncal heart defects."],
  ["Opsonization is the immunological process wherein:", ["Antibodies (IgG) and complement fragments (C3b) coat a pathogen to enhance its recognition and phagocytosis by leukocytes", "Pathogens are dissolved in stomach acid", "Viruses mutate into harmless proteins", "B cells transform into erythrocytes"], 0, "Opsonins (IgG antibodies via their Fab ends, C3b) bind to pathogen surfaces; phagocytes bearing surface Fc-gamma and CR1 receptors engulf the coated particles efficiently."],
  ["Which split product of complement activation is the most potent anaphylatoxin and chemoattractant for neutrophils?", ["C5a", "C3b", "C1q", "C9"], 0, "C5a is a powerful anaphylatoxin that triggers mast cell degranulation, increases vascular permeability, and acts as a potent chemotactic factor directing neutrophils to infection sites."],
  ["Which split product of the complement cascade acts as the major opsonin deposited covalently on microbial cell surfaces?", ["C3b", "C5a", "C2b", "C4a"], 0, "C3b possesses an unstable internal thioester bond that covalently attaches to hydroxyl or amine groups on microbial surfaces, marking them for phagocytosis via CR1 receptors."],
  ["Hereditary Angioedema (HAE) is an autosomal dominant disorder presenting with recurrent episodes of subcutaneous and laryngeal edema, caused by deficiency of:", ["C1 esterase inhibitor (C1-INH)", "Complement component C3", "Immunoglobulin G", "Lysozyme"], 0, "Lack of functional C1-INH leads to unregulated activation of the kallikrein-kinin and complement systems, generating excess bradykinin that induces life-threatening angioedema."],
  ["Deficiency in the terminal membrane attack complex complement components (C5, C6, C7, C8, or C9) predisposes individuals to recurrent, severe infections by:", ["Neisseria meningitidis and Neisseria gonorrhoeae", "Streptococcus pneumoniae only", "Candida albicans only", "Influenza virus"], 0, "Lysis via the terminal MAC is the vital defense against thin-walled Neisseria species; patients with late complement deficiencies suffer recurrent meningococcal meningitis."],
  ["Paroxysmal Nocturnal Hemoglobinuria (PNH) is an acquired clonal hematopoietic stem cell disorder characterized by hemolytic anemia due to somatic mutations in PIGA, leading to deficiency of:", ["GPI-anchored complement regulatory proteins CD55 (DAF) and CD59 (MAC-inhibitory protein)", "Hemoglobin beta chain", "Erythrocyte spectrin", "Glucose-6-phosphate dehydrogenase"], 0, "Absence of CD55 and CD59 renders erythrocytes abnormally sensitive to complement-mediated lysis by alternative complement pathway activation during sleep."],
  ["Eculizumab is a humanized monoclonal antibody used in treating Paroxysmal Nocturnal Hemoglobinuria (PNH) that acts by:", ["Binding to complement protein C5, blocking its cleavage into C5a and C5b, and preventing MAC assembly", "Stimulating erythropoietin secretion from the kidney", "Destroying all circulating B cells", "Inactivating splenic macrophages"], 0, "By preventing C5 cleavage, eculizumab halts generation of the terminal membrane attack complex (C5b-9), successfully preventing intravascular complement hemolysis in PNH."],
  ["Which cytokines secreted by CD4+ Th1 lymphocytes are essential for activating macrophages to destroy intracellular pathogens like Mycobacterium?", ["Interferon-gamma (IFN-gamma) and Interleukin-2 (IL-2)", "Interleukin-4 and Interleukin-5", "Interleukin-10 only", "Histamine and heparin"], 0, "Th1 cells produce IFN-gamma, which powerfully activates classical M1 macrophages, enhancing phagolysosomal fusion and nitric oxide production to kill intracellular bacteria."],
  ["Which cytokines secreted by CD4+ Th2 lymphocytes promote B-cell antibody class switching to IgE and stimulate eosinophil recruitment?", ["Interleukin-4 (IL-4) and Interleukin-5 (IL-5)", "Interferon-gamma and TNF-beta", "Interleukin-12 only", "Interleukin-2 only"], 0, "IL-4 induces B cells to switch to IgE production, while IL-5 is the principal cytokine driving eosinophil differentiation, activation, and survival in helminthic infections and asthma."],
  ["Th17 lymphocytes are a distinct subset of helper T cells characterized by the secretion of Interleukin-17 (IL-17), which functions in:", ["Recruiting neutrophils to clear extracellular bacterial and fungal infections at mucosal surfaces", "Suppressing all immune responses", "Stimulating bone resorption by osteoclasts only", "Preventing all antibody secretion"], 0, "IL-17 induces epithelial and stromal cells to release chemokines that recruit neutrophils, playing a vital role in defending mucosal barriers against Candida and Staphylococcus."],
  ["The enzyme NADPH oxidase in phagocytes is responsible for the 'respiratory burst' that generates:", ["Superoxide free radicals ($O_2^{\\bullet-}$), hydrogen peroxide, and hypochlorous acid to kill ingested microbes", "Adenosine triphosphate via aerobic glycolysis", "Lactic acid during muscle exertion", "Hydrochloric acid in the stomach"], 0, "Upon phagocytosis, NADPH oxidase transfers electrons from NADPH to oxygen, generating superoxide radicals that are converted to microbicidal reactive oxygen species."],
  ["Chronic Granulomatous Disease (CGD) is an inherited immunodeficiency disorder characterized by recurrent, severe infections with catalase-positive organisms caused by defects in:", ["NADPH oxidase enzyme complex", "Myeloperoxidase enzyme", "Complement C3", "Adenosine deaminase"], 0, "Failure of the phagocytic NADPH oxidase complex disables the oxidative burst; catalase-positive bacteria (S. aureus, Aspergillus) degrade endogenous $H_2O_2$, surviving inside phagocytes."],
  ["The Nitroblue Tetrazolium (NBT) dye reduction test is a classical diagnostic laboratory assay used to confirm:", ["Chronic Granulomatous Disease (CGD)", "Bruton's agammaglobulinemia", "DiGeorge syndrome", "Wiskott-Aldrich syndrome"], 0, "In normal neutrophils, superoxide generated during the respiratory burst reduces yellow NBT to insoluble blue formazan crystals; neutrophils in CGD fail to reduce NBT."],
  ["Chédiak-Higashi syndrome is an autosomal recessive immunodeficiency disorder characterized by oculocutaneous albinism, neuropathy, and recurrent pyogenic infections caused by:", ["Defective lysosomal trafficking regulator gene (LYST), resulting in giant, non-functional lysosomal granules in granulocytes", "Complete absence of mature T lymphocytes", "Deficiency of serum immunoglobulin A", "Loss of all platelet production"], 0, "Mutations in LYST disrupt vesicle fusion, producing abnormally large granules in neutrophils that cannot fuse properly with phagosomes, impairing microbial killing."],
  ["Wiskott-Aldrich syndrome is an X-linked recessive immunodeficiency characterized by the clinical triad of:", ["Microthrombocytopenia (small platelets), recurrent infections, and eczema", "Hydrocephalus, cataracts, and deaf mutism", "Polydactyly, syndactyly, and cleft palate", "Gigantism, hypertension, and macroglossia"], 0, "Defects in the WAS gene disrupt actin cytoskeleton reorganization in hematopoietic cells, manifesting as small platelets with thrombocytopenia, eczema, and immunodeficiency."]
];

moreMcqsPart5.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

const evenMoreMcqsPart5 = [
  [
    "In an antibody molecule, the hypervariable regions (Complementarity Determining Regions or CDRs) that form the actual antigen-binding site are located within:",
    [
      "Both variable light ($V_L$) and variable heavy ($V_H$) domains",
      "Constant heavy ($C_H$) domains only",
      "Constant light ($C_L$) domains only",
      "The hinge region only"
    ],
    0,
    "The antigen-binding site is formed by three hypervariable CDR loops from the variable light ($V_L$) domain and three from the variable heavy ($V_H$) domain."
  ],
  [
    "Digestion of an IgG molecule with the proteolytic enzyme papain yields:",
    [
      "Two Fab fragments and one Fc fragment",
      "One $F(ab')_2$ fragment and Fc fragments",
      "Four separate polypeptide chains",
      "Two Fc fragments and one Fab fragment"
    ],
    0,
    "Papain cleaves the antibody above the hinge region, producing two identical Fab (antigen-binding) fragments and one Fc (crystallizable) fragment."
  ],
  [
    "Digestion of an IgG molecule with the proteolytic enzyme pepsin cleaves below the hinge region, producing:",
    [
      "One bivalent $F(ab')_2$ fragment and degraded Fc sub-fragments",
      "Two univalent Fab fragments and an intact Fc fragment",
      "Intact heavy chains only",
      "Separate constant and variable light chains"
    ],
    0,
    "Pepsin cleaves below the interchain disulfide bonds of the hinge region, leaving the two Fab arms joined as a single bivalent $F(ab')_2$ fragment."
  ],
  [
    "Which region of the immunoglobulin molecule mediates effector functions such as complement fixation, opsonization, and binding to Fc receptors on macrophages?",
    [
      "The Fc (crystallizable) region formed by constant domains of heavy chains",
      "The Fab fragment variable domains",
      "The hypervariable CDR3 loop of light chain",
      "The antigen-binding paratope"
    ],
    0,
    "The Fc stem consists of paired $C_H2$ and $C_H3$ (and $C_H4$ in IgM/IgE) domains that interact with Fc receptors on phagocytes and bind complement C1q."
  ],
  [
    "The structural flexibility of the Y-shaped immunoglobulin molecule, allowing both antigen-binding arms to bind determinants at varying distances, is conferred by:",
    [
      "Proline-rich hinge region between $C_H1$ and $C_H2$ domains",
      "Hydrophobic core of the $V_L$ domain",
      "Glycosylation of light chains",
      "Disulfide bonds inside the variable domain"
    ],
    0,
    "The proline- and cysteine-rich hinge region provides conformational flexibility, enabling the two Fab arms to articulate and bind epitopes spaced at different intervals."
  ],
  [
    "Which immunoglobulin class possesses four constant domains ($C_H1, C_H2, C_H3, C_H4$) in each heavy chain and lacks a distinct hinge region?",
    [
      "IgM and IgE",
      "IgG and IgA",
      "IgA and IgD",
      "IgG and IgD"
    ],
    0,
    "Both IgM and IgE have heavy chains ($mu$ and $epsilon$) with an extra constant domain ($C_H4$) and lack the flexible hinge region found in IgG, IgA, and IgD."
  ],
  [
    "The carbohydrate moieties covalently attached to immunoglobulins are predominantly located in the:",
    [
      "Constant domains of the heavy chains ($C_H2$ region)",
      "Variable domains of light chains",
      "Antigen-binding groove of the Fab fragment",
      "J chain only"
    ],
    0,
    "N-linked oligosaccharides are attached to conserved asparagine residues in the $C_H2$ domain of heavy chains, maintaining the structural conformation required for Fc receptor binding."
  ],
  [
    "The light chains of all immunoglobulin classes are of two distinct antigenic types known as:",
    [
      "Kappa ($\\kappa$) and Lambda ($\\lambda$)",
      "Alpha ($\\alpha$) and Beta ($\\beta$)",
      "Gamma ($\\gamma$) and Delta ($\\delta$)",
      "Mu ($\\mu$) and Epsilon ($\\epsilon$)"
    ],
    0,
    "A given antibody molecule contains either two identical kappa ($\\kappa$) chains or two identical lambda ($\\lambda$) chains, never a mixture of both."
  ],
  [
    "In normal human serum, the approximate ratio of kappa ($\\kappa$) to lambda ($\\lambda$) light chains is approximately:",
    [
      "2 : 1",
      "1 : 10",
      "10 : 1",
      "1 : 1"
    ],
    0,
    "In healthy humans, approximately 60% of immunoglobulins contain kappa chains and 40% contain lambda chains, yielding a normal ratio of roughly 2:1."
  ],
  [
    "Bence-Jones proteins excreted in the urine of multiple myeloma patients consist of:",
    [
      "Free monoclonal immunoglobulin light chains ($\\kappa$ or $\\lambda$)",
      "Intact pentameric IgM antibodies",
      "Isolated heavy chain Fc fragments",
      "Secretory component fragments"
    ],
    0,
    "Bence-Jones proteins are excess free monoclonal immunoglobulin light chains produced by neoplastic plasma cells in multiple myeloma, which precipitate upon heating to 45-60°C and redissolve on boiling."
  ],
  [
    "Mucosa-Associated Lymphoid Tissue (MALT) constitutes what percentage of the total lymphoid tissue in the human body?",
    [
      "About 50%",
      "About 10%",
      "About 25%",
      "About 85%"
    ],
    0,
    "According to NCERT Class 12 Biology, MALT constitutes about 50 percent of the lymphoid tissue in the human body."
  ],
  [
    "Which anatomical structure within the ileum of the small intestine represents organized lymphoid follicles belonging to gut-associated lymphoid tissue (GALT)?",
    [
      "Peyer's patches",
      "Brunner's glands",
      "Crypts of Lieberkühn",
      "Islets of Langerhans"
    ],
    0,
    "Peyer's patches are unencapsulated aggregations of lymphoid follicles located in the submucosa and lamina propria of the ileum that sample gut antigens via microfold (M) cells."
  ],
  [
    "Microfold cells (M cells) found in the follicle-associated epithelium overlying Peyer's patches are specialized for:",
    [
      "Transcytosis of luminal antigens and pathogens across the intestinal epithelium to underlying APCs",
      "Secretion of hydrochloric acid",
      "Absorption of dietary triglycerides into lacteals",
      "Digestion of carbohydrates via brush border enzymes"
    ],
    0,
    "M cells lack microvilli and a thick mucus coat; they actively endocytose luminal antigens and deliver them intact via transcytosis to dendritic cells and macrophages in Peyer's patches."
  ],
  [
    "In a lymph node, which anatomical compartment contains predominantly T lymphocytes and specialized high endothelial venules (HEVs)?",
    [
      "Paracortex (deep cortex)",
      "Germinal center of secondary follicles",
      "Outer cortex follicles",
      "Medullary cords"
    ],
    0,
    "The paracortex of lymph nodes is the T-cell-rich zone where naive T lymphocytes enter from the blood through high endothelial venules (HEVs) and interact with antigen-presenting dendritic cells."
  ],
  [
    "The primary function of high endothelial venules (HEVs) in secondary lymphoid organs is to:",
    [
      "Permit extravasation and homing of naive circulating lymphocytes from blood into the lymphoid parenchyma",
      "Drain lymph directly into the thoracic duct",
      "Filter out old and senescent erythrocytes",
      "Produce erythropoietin"
    ],
    0,
    "HEVs express specific adhesion molecules (addressins) that bind L-selectin and CCR7 on naive T and B lymphocytes, mediating their selective homing into lymph nodes and Peyer's patches."
  ],
  [
    "In the spleen, which histological zone is primarily involved in the mechanical filtration and clearance of aged, senescent erythrocytes and blood-borne debris?",
    [
      "Red pulp (cords of Billroth and venous sinusoids)",
      "White pulp (periarteriolar lymphoid sheaths)",
      "Germinal centers of white pulp",
      "Marginal zone"
    ],
    0,
    "The red pulp consists of splenic cords of Billroth and vascular sinusoids where old erythrocytes must squeeze through endothelial slits; fragile or rigid RBCs are trapped and engulfed by splenic macrophages."
  ],
  [
    "The Periarteriolar Lymphoid Sheath (PALS) surrounding central arterioles in the white pulp of the spleen is populated mainly by:",
    [
      "T lymphocytes",
      "B lymphocytes and plasma cells",
      "Erythrocytes and platelets",
      "Neutrophils only"
    ],
    0,
    "PALS forms a cylindrical sheath of lymphoid tissue immediately surrounding splenic central arterioles, composed predominantly of CD4+ and CD8+ T lymphocytes."
  ],
  [
    "Surgical removal of the spleen (splenectomy) places patients at a significantly increased lifetime risk of life-threatening sepsis caused primarily by:",
    [
      "Encapsulated bacteria such as Streptococcus pneumoniae, Neisseria meningitidis, and Haemophilus influenzae",
      "Intestinal amoebic trophozoites",
      "Filamentous dermatophytic fungi",
      "Anaerobic gut flora"
    ],
    0,
    "The spleen is essential for clearing opsonized encapsulated bacteria from the bloodstream; asplenic patients are highly vulnerable to Overwhelming Post-Splenectomy Sepsis (OPSS) by S. pneumoniae."
  ],
  [
    "Lymph from the lower extremities, abdomen, and left upper body is collected and returned to the venous circulation via the:",
    [
      "Thoracic duct entering the left subclavian vein",
      "Right lymphatic duct entering right jugular vein",
      "Hepatic portal vein entering liver sinusoids",
      "Azygos vein directly into the right atrium"
    ],
    0,
    "The thoracic duct is the largest lymphatic vessel, originating from the cisterna chyli and terminating at the junction of the left internal jugular and left subclavian veins."
  ],
  [
    "Waldeyer's ring is an anatomical arrangement of lymphoid tissue surrounding the pharynx that includes:",
    [
      "Palatine, pharyngeal (adenoid), lingual, and tubal tonsils",
      "Peyer's patches and mesenteric lymph nodes",
      "Thymus and thyroid gland",
      "Submandibular and parotid salivary glands"
    ],
    0,
    "Waldeyer's tonsillar ring forms a protective immunological barrier at the entrance of the respiratory and digestive tracts, consisting of palatine, pharyngeal, lingual, and tubal tonsils."
  ],
  [
    "During T-lymphocyte maturation in the thymus, positive selection occurs in the thymic cortex and ensures that surviving T cells:",
    [
      "Recognize self-MHC molecules with low to intermediate affinity",
      "Recognize self-antigens with high, lethal affinity",
      "Lose expression of all T-cell receptors (TCRs)",
      "Differentiate exclusively into B lymphocytes"
    ],
    0,
    "Positive selection in the thymic cortex preserves immature thymocytes whose TCRs can bind self-MHC class I or class II molecules with appropriate affinity, eliminating non-binding cells by apoptosis."
  ],
  [
    "Negative selection of thymocytes takes place primarily in the thymic medulla and functions to:",
    [
      "Eliminate autoreactive T cells that bind self-peptide-MHC complexes with high affinity, establishing central tolerance",
      "Induce somatic hypermutation in T-cell receptor genes",
      "Stimulate class-switch recombination",
      "Trigger differentiation of naive T cells into plasma cells"
    ],
    0,
    "Negative selection eliminates thymocytes possessing high affinity for self-antigen-MHC complexes through apoptosis, preventing autoimmunity and establishing central immune tolerance."
  ],
  [
    "The autoimmune regulator gene (AIRE) expressed by medullary thymic epithelial cells (mTECs) plays a vital role in central tolerance by:",
    [
      "Promoting the ectopic expression of tissue-restricted self-antigens in the thymus for negative selection",
      "Directly synthesizing all circulating immunoglobulins",
      "Inactivating the complement cascade",
      "Inhibiting phagocytosis by macrophages"
    ],
    0,
    "AIRE drives expression of peripheral, tissue-restricted antigens (such as insulin, thyroglobulin) in the thymic medulla, allowing deletion of self-reactive T cells before they exit into the periphery."
  ],
  [
    "Mutations in the AIRE gene lead to which severe multi-organ autoimmune disease syndrome?",
    [
      "Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy (APECED / APS-1)",
      "Severe Combined Immunodeficiency (SCID)",
      "Bruton's agammaglobulinemia",
      "DiGeorge syndrome"
    ],
    0,
    "Defective AIRE leads to failure of negative selection against tissue-specific antigens, causing autoimmune destruction of multiple endocrine glands (adrenal, parathyroid) and chronic mucocutaneous candidiasis."
  ],
  [
    "Which cluster of differentiation (CD) marker is characteristically expressed on all mature helper T lymphocytes and serves as a co-receptor for MHC class II?",
    [
      "CD4",
      "CD8",
      "CD19",
      "CD56"
    ],
    0,
    "CD4 is a monomeric glycoprotein on helper T cells that binds the non-polymorphic $\\beta 2$ domain of MHC class II molecules, stabilizing the TCR-MHC II interaction."
  ],
  [
    "Which CD marker is expressed on cytotoxic T lymphocytes and functions as a co-receptor binding to the conserved $\\alpha 3$ domain of MHC class I molecules?",
    [
      "CD8",
      "CD4",
      "CD3",
      "CD28"
    ],
    0,
    "CD8 is a heterodimer ($\\alpha \\beta$) on cytotoxic T cells that binds the invariant $\\alpha 3$ domain of MHC class I molecules, ensuring cytotoxic targeting of virus-infected or abnormal cells."
  ],
  [
    "The invariant CD3 complex associated with the T-cell receptor (TCR) heterodimer functions to:",
    [
      "Transduce intracellular biochemical signals into the T cell following antigen recognition",
      "Directly bind the antigenic peptide epitope",
      "Bind free, circulating soluble antibodies",
      "Inactivate foreign viral antigens directly"
    ],
    0,
    "While the $\\alpha \\beta$ TCR heterodimer recognizes peptide-MHC, the invariant CD3 complex (composed of $\\gamma, \\delta, \\epsilon$, and $\\zeta$ chains with ITAM motifs) transmits activating signals into the cytoplasm."
  ],
  [
    "Co-stimulation of a naive T lymphocyte requires interaction between the CD28 receptor on the T cell and which molecules on the antigen-presenting cell?",
    [
      "B7-1 (CD80) and B7-2 (CD86)",
      "CD40 and CD40 ligand",
      "ICAM-1 and LFA-1",
      "Fas and Fas ligand"
    ],
    0,
    "Signal 2 for T-cell activation is provided by the binding of CD28 on T cells to B7 costimulatory molecules (CD80/CD86) on professional antigen-presenting cells; absence of signal 2 induces anergy."
  ],
  [
    "Binding of cytotoxic T lymphocyte-associated antigen 4 (CTLA-4) to B7 molecules delivers what effect on T cells?",
    [
      "An inhibitory signal that terminates T-cell activation and proliferation",
      "A potent proliferative signal that enhances cytokine secretion",
      "A signal for rapid transformation into malignant blasts",
      "A trigger for massive antibody release"
    ],
    0,
    "CTLA-4 is an immune checkpoint receptor upregulated on activated T cells that binds B7 with higher affinity than CD28, delivering an inhibitory signal to downregulate immune responses."
  ],
  [
    "Regulatory T cells (Tregs) that actively suppress self-reactive immune responses characteristically express which transcription factor and cell surface markers?",
    [
      "FoxP3, CD4, and high levels of CD25 (IL-2 receptor alpha chain)",
      "T-bet, CD8, and CD16",
      "GATA-3, CD19, and CD20",
      "ROR-gamma-t, CD4, and CD56"
    ],
    0,
    "Tregs are CD4+ CD25+ regulatory T cells that express the master transcription factor FoxP3; mutations in FoxP3 cause IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome."
  ],
  [
    "According to the Clonal Selection Theory proposed by Sir Frank Macfarlane Burnet:",
    [
      "Each lymphocyte is pre-programmed to express receptors for a single specific antigen; binding of that antigen stimulates clonal proliferation and differentiation",
      "Antigens enter lymphocytes and instructively mold antibodies to fit them like a template",
      "All antibodies are identical until modified by hormones in the thymus",
      "Lymphocytes produce all antibody varieties simultaneously upon exposure to any foreign agent"
    ],
    0,
    "Burnet's clonal selection theory established that antigen receptor specificity is generated prior to antigen encounter; an antigen selects and activates only pre-existing lymphocytes carrying specific receptors."
  ],
  [
    "Plasma cells, the terminal effector cells of B-lymphocyte activation, are characterized cytologically by:",
    [
      "Abundant rough endoplasmic reticulum, prominent Golgi complex, and a 'spoke-wheel' or 'clock-face' chromatin pattern in an eccentric nucleus",
      "A high nuclear-to-cytoplasmic ratio with absent organelle networks",
      "Numerous azurophilic granules containing perforin and granzymes",
      "Multiple nuclei and ruffled cell borders"
    ],
    0,
    "Plasma cells are dedicated protein factories producing thousands of antibody molecules per second, reflected by extensive lamellar rough endoplasmic reticulum and an eccentric cartwheel nucleus."
  ],
  [
    "The phenomenon where repeated exposure to an antigen leads to an increase in the average binding affinity of antibodies produced against it is termed:",
    [
      "Affinity maturation",
      "Immune tolerance",
      "Allergic sensitization",
      "Complement depletion"
    ],
    0,
    "Affinity maturation occurs in germinal centers of secondary lymphoid follicles via somatic hypermutation of immunoglobulin variable region genes followed by selection by follicular dendritic cells."
  ],
  [
    "Somatic hypermutation during B-cell differentiation takes place specifically in:",
    [
      "Germinal centers of secondary lymphoid follicles",
      "Bone marrow central sinusoids",
      "Thymic subcapsular cortex",
      "Splenic red pulp sinusoids"
    ],
    0,
    "Activated B cells undergo rapid point mutations in variable domain genes within germinal centers; those with highest affinity for follicular dendritic cell-bound antigen receive survival signals."
  ],
  [
    "The enzyme responsible for initiating both somatic hypermutation and immunoglobulin class-switch recombination in activated B cells is:",
    [
      "Activation-Induced Cytidine Deaminase (AID)",
      "Terminal Deoxynucleotidyl Transferase (TdT)",
      "Recombination Activating Gene 1 (RAG-1)",
      "NADPH oxidase"
    ],
    0,
    "AID deaminates cytosine to uracil in single-stranded DNA of immunoglobulin genes, initiating both somatic hypermutation and class-switch recombination; deficiency causes Hyper-IgM syndrome type 2."
  ],
  [
    "The generation of junctional diversity during V(D)J somatic recombination of antigen receptor genes is mediated by the addition of non-templated (N) nucleotides by:",
    [
      "Terminal Deoxynucleotidyl Transferase (TdT)",
      "DNA polymerase III",
      "RNA polymerase II",
      "Reverse transcriptase"
    ],
    0,
    "TdT randomly adds non-templated (N) nucleotides to the single-stranded DNA ends generated by RAG-1/RAG-2 cleavage, greatly expanding antibody and TCR diversity."
  ],
  [
    "Recombination Activating Genes (RAG-1 and RAG-2) are essential enzymes that:",
    [
      "Recognize recombination signal sequences (RSS) and introduce double-strand DNA breaks to assemble immunoglobulin and TCR variable region gene segments",
      "Degrade viral RNA in the cytoplasm of infected host cells",
      "Synthesize complement proteins C3 and C5 in hepatocytes",
      "Cleave immunoglobulins into Fab and Fc fragments"
    ],
    0,
    "RAG-1 and RAG-2 recombinases catalyze the assembly of V, D, and J gene segments; inactivating mutations in RAG-1 or RAG-2 cause severe combined immunodeficiency (SCID) lacking both T and B cells (Omenn syndrome)."
  ],
  [
    "Which surface immunoglobulin is co-expressed with monomeric IgM on the membrane of mature, naive, immunocompetent B lymphocytes prior to antigen encounter?",
    [
      "IgD",
      "IgG1",
      "IgA",
      "IgE"
    ],
    0,
    "Mature naive B lymphocytes that have left the bone marrow characteristically co-express membrane-bound IgM and IgD through alternative splicing of primary RNA transcripts."
  ],
  [
    "Which molecular signal on activated helper T cells binds CD40 on B cells to drive B-cell proliferation, germinal center formation, and immunoglobulin class switching?",
    [
      "CD40 Ligand (CD40L / CD154)",
      "Fas Ligand (FasL / CD178)",
      "Interferon-alpha",
      "Perforin"
    ],
    0,
    "CD40L on helper T cells engages CD40 on B cells; defects in CD40L cause X-linked Hyper-IgM syndrome characterized by severe deficiency of IgG, IgA, and IgE with elevated IgM."
  ],
  [
    "T-independent (TI) antigens, such as bacterial capsular polysaccharides and lipopolysaccharides (LPS), stimulate B cells primarily by:",
    [
      "Extensively cross-linking surface B-cell receptors (BCRs) without direct T-cell help, generating mainly low-affinity IgM and little memory",
      "Activating cytotoxic T cells via MHC class I presentation",
      "Inducing rapid class-switching exclusively to high-affinity IgE",
      "Requiring processing and presentation on MHC class II to CD4+ T cells"
    ],
    0,
    "TI antigens have repetitive repeating epitopes that cross-link multiple BCRs, activating B cells directly to produce IgM without requiring T-cell cooperation, lacking memory and affinity maturation."
  ],
  [
    "Natural Killer (NK) cells are classified as:",
    [
      "Large granular lymphocytes belonging to the innate immune system",
      "Phagocytic polymorphonuclear granulocytes",
      "Antigen-presenting dendritic cells",
      "Mature antibody-secreting effector cells"
    ],
    0,
    "NK cells are innate large granular lymphocytes that lack antigen-specific rearranged receptors but possess cytoplasmic granules containing perforin and granzymes."
  ],
  [
    "NK cells identify and selectively kill virus-infected cells and tumor cells that have evaded cytotoxic T lymphocytes through the 'missing self' mechanism, which involves:",
    [
      "Detection of decreased or absent cell-surface expression of MHC class I molecules",
      "Direct recognition of bacterial flagellin via Toll-like receptor 5",
      "Binding to secretory IgA dimers on mucosal surfaces",
      "Endocytosis of extracellular amyloid fibrils"
    ],
    0,
    "Normal nucleated cells express MHC class I which binds Killer Inhibitory Receptors (KIR) on NK cells, sending inhibitory signals; cells lacking MHC class I ('missing self') lose this inhibition and are killed."
  ],
  [
    "In Antibody-Dependent Cellular Cytotoxicity (ADCC), NK cells destroy antibody-coated target cells by binding the Fc region of IgG antibodies via:",
    [
      "CD16 (Fc-gamma receptor III)",
      "CD3 complex",
      "CD4 receptor",
      "CD28 receptor"
    ],
    0,
    "NK cells express CD16 (Fc-gamma-RIII), which binds to the Fc portion of IgG antibodies bound to target cell surfaces, triggering the release of cytotoxic granules that lyse the target."
  ],
  [
    "The major cytoplasmic granule proteins released by activated cytotoxic T lymphocytes (CTLs) and NK cells to induce apoptosis in target cells are:",
    [
      "Perforin and Granzymes",
      "Lysozyme and myeloperoxidase",
      "Histamine and serotonin",
      "Heparin and hyaluronic acid"
    ],
    0,
    "Perforin polymerizes in the target cell membrane forming transmembrane pores, through which serine proteases called granzymes enter the cytoplasm and activate apoptotic caspases."
  ],
  [
    "Granzyme B induces apoptosis in target cells primarily by:",
    [
      "Directly cleaving and activating procaspase-3 and Bid, leading to mitochondrial cytochrome c release",
      "Inactivating cellular ribosomes like ricin toxin",
      "Disrupting nuclear pores directly",
      "Depleting intracellular ATP reserves through glycolysis inhibition"
    ],
    0,
    "Granzyme B cleaves and activates effector procaspases (like caspase-3) and truncates Bid (tBid), which triggers mitochondrial outer membrane permeabilization and apoptotic cell death."
  ],
  [
    "Toll-like receptors (TLRs) are pattern recognition receptors (PRRs) that detect conserved molecular structures on pathogens known as:",
    [
      "Pathogen-Associated Molecular Patterns (PAMPs)",
      "Complementarity Determining Regions (CDRs)",
      "Major Histocompatibility Complexes (MHC)",
      "High Endothelial Venules (HEVs)"
    ],
    0,
    "TLRs on innate immune cells recognize evolutionary conserved microbial molecules called PAMPs, such as LPS (TLR4), flagellin (TLR5), and unmethylated CpG DNA (TLR9)."
  ],
  [
    "Toll-like receptor 4 (TLR4) specifically recognizes which component of Gram-negative bacterial outer membranes?",
    [
      "Lipopolysaccharide (LPS / endotoxin)",
      "Double-stranded RNA (dsRNA)",
      "Flagellin protein subunits",
      "Peptidoglycan monomer chains"
    ],
    0,
    "TLR4, along with MD-2 and CD14, binds the lipid A moiety of lipopolysaccharide (LPS) found on Gram-negative bacteria, triggering NF-kB activation and pro-inflammatory cytokine secretion."
  ],
  [
    "Toll-like receptor 3 (TLR3) is localized intracellularly within endosomes and detects:",
    [
      "Double-stranded RNA (dsRNA) characteristic of replicating viruses",
      "Bacterial lipoteichoic acid",
      "Fungal zymosan and beta-glucans",
      "Single-stranded human genomic DNA"
    ],
    0,
    "TLR3 resides in endosomal membranes where it senses double-stranded RNA produced during the replication cycles of many RNA viruses, inducing type I interferon (IFN-alpha/beta) synthesis."
  ],
  [
    "Type I interferons (IFN-alpha and IFN-beta) protect neighboring uninfected host cells against viral spread primarily by:",
    [
      "Inducing synthesis of antiviral enzymes such as 2',5'-oligoadenylate synthetase and Protein Kinase R (PKR) that degrade viral RNA and halt translation",
      "Opsonizing bacteria for phagocytosis by neutrophils",
      "Directly lysing bacterial cell walls through transpeptidase inhibition",
      "Stimulating rapid release of histamine from tissue mast cells"
    ],
    0,
    "Type I interferons bind cell-surface receptors on nearby cells to induce an antiviral state: 2',5'-oligoadenylate synthetase activates RNase L to degrade viral RNA, while PKR halts protein synthesis."
  ],
  [
    "Which antimicrobial enzyme present in human tears, saliva, nasal secretions, and lysosomal granules of phagocytes hydrolyzes the $\\beta(1\\rightarrow 4)$ glycosidic bond between NAM and NAG in bacterial peptidoglycan?",
    [
      "Lysozyme",
      "Pepsin",
      "Trypsin",
      "Amylase"
    ],
    0,
    "Lysozyme (muramidase) breaks the $\\beta(1\\rightarrow 4)$ glycosidic bonds between N-acetylmuramic acid and N-acetylglucosamine in the peptidoglycan cell walls of bacteria, causing osmotic lysis."
  ],
  [
    "The classical pathway of complement activation is initiated by the binding of complement component C1q to:",
    [
      "Antigen-bound IgM or aggregated IgG complexes",
      "Mannose residues on bacterial glycoproteins",
      "Lipopolysaccharides on Gram-negative cell walls",
      "Unbound free monomeric IgA in plasma"
    ],
    0,
    "C1q binds to the Fc regions of antibodies that are complexed with antigen; pentameric IgM and multi-valent IgG complexes are the most potent activators of the classical complement pathway."
  ],
  [
    "The critical central convergence step in all three complement activation pathways (classical, lectin, and alternative) is the cleavage of:",
    [
      "Complement component C3 into C3a and C3b",
      "Complement component C1 into C1r and C1s",
      "Complement component C9 into C9a and C9b",
      "Prothrombin into thrombin"
    ],
    0,
    "All complement activation pathways converge at the formation of a C3 convertase that cleaves C3 into C3a (anaphylatoxin) and C3b (opsonin and component of C5 convertase)."
  ],
  [
    "Which fragment of the complement cascade functions as a potent opsonin by coating microbes and binding to CR1 receptors on macrophages and neutrophils?",
    [
      "C3b",
      "C3a",
      "C5a",
      "C9"
    ],
    0,
    "C3b covalently attaches to microbial cell surfaces where it is recognized by complement receptor 1 (CR1 / CD35) on phagocytes, greatly facilitating phagocytosis (opsonization)."
  ],
  [
    "The complement fragments C3a and C5a act as anaphylatoxins, meaning they:",
    [
      "Trigger mast cell and basophil degranulation, releasing histamine and increasing vascular permeability",
      "Directly form membrane attack pores to lyse targets",
      "Inhibit bone marrow hematopoiesis",
      "Neutralize bacterial exotoxins enzymatically"
    ],
    0,
    "C3a and C5a are anaphylatoxins that bind specific G-protein-coupled receptors on mast cells and basophils, inducing rapid degranulation, vasodilation, and bronchoconstriction."
  ],
  [
    "Which complement fragment is the most potent chemotactic factor for recruiting neutrophils and monocytes to sites of acute inflammation?",
    [
      "C5a",
      "C3b",
      "C1q",
      "C4b"
    ],
    0,
    "C5a is a powerful chemoattractant that directs the migration of neutrophils and monocytes along a concentration gradient to inflammatory foci while increasing their adhesiveness to endothelium."
  ],
  [
    "The Membrane Attack Complex (MAC) that inserts into target cell membranes causing osmotic lysis consists of:",
    [
      "C5b, C6, C7, C8, and multiple C9 molecules ($C5b-9$)",
      "C1q, C1r, C1s, and C4",
      "C3a, C4a, and C5a complexes",
      "Factor B, Factor D, and properdin"
    ],
    0,
    "The terminal complement pathway forms the MAC ($C5b-9$ complex), where multiple C9 monomers polymerize to form a transmembrane pore of 10 nm diameter, causing influx of water and osmotic lysis."
  ],
  [
    "Patients with inherited deficiencies of late complement components (C5, C6, C7, C8, or C9) exhibit an increased susceptibility to recurrent, severe infections caused by:",
    [
      "Neisseria meningitidis and Neisseria gonorrhoeae",
      "Streptococcus pneumoniae",
      "Candida albicans",
      "Mycobacterium tuberculosis"
    ],
    0,
    "The Membrane Attack Complex ($C5b-9$) is essential for the bactericidal killing of thin-walled Neisseria species; deficiency of MAC components leads to recurrent Neisserial bacteremia and meningitis."
  ],
  [
    "Paroxysmal Nocturnal Hemoglobinuria (PNH) is an acquired clonal hematopoietic stem cell disorder caused by somatic mutations in the PIGA gene, resulting in deficiency of which complement regulatory proteins on erythrocytes?",
    [
      "CD55 (Decay Accelerating Factor) and CD59 (Protectin / MAC-inhibitory protein)",
      "CD3 and CD4",
      "CD19 and CD20",
      "CD80 and CD86"
    ],
    0,
    "Loss of GPI-anchored surface proteins CD55 and CD59 removes intrinsic protection against complement, rendering red blood cells sensitive to MAC-mediated intravascular complement hemolysis."
  ],
  [
    "Hereditary Angioedema (HAE) is an autosomal dominant condition characterized by recurrent, episodic subcutaneous and mucosal swelling caused by deficiency of:",
    [
      "C1 esterase inhibitor (C1-INH)",
      "Complement factor H",
      "Complement C3",
      "Properdin"
    ],
    0,
    "C1-INH deficiency leads to uncontrolled activation of C1 and the kallikrein-kinin pathway, producing excess bradykinin which causes localized vascular permeability, angioedema, and airway obstruction."
  ],
  [
    "The alternative pathway of complement activation is triggered spontaneously by:",
    [
      "Low-level tick-over hydrolysis of C3 in plasma and deposition of C3b onto microbial surfaces lacking regulatory proteins",
      "Specific antigen-antibody complexes containing IgG",
      "Mannose-binding lectin binding to microbial carbohydrates",
      "Interferon-gamma release from T cells"
    ],
    0,
    "Spontaneous low-level hydrolysis of C3 in plasma generates $C3(H_2O)$; on microbial surfaces devoid of mammalian complement regulators, Factor B and D bind to form alternative C3 convertase ($C3bBb$)."
  ],
  [
    "According to the Gell and Coombs classification, Type I hypersensitivity reactions are mediated by:",
    [
      "IgE antibodies bound to high-affinity Fc-epsilon-RI receptors on mast cells and basophils",
      "Antigen-antibody immune complexes depositing in blood vessel walls",
      "Cytotoxic T lymphocytes releasing perforin",
      "IgG antibodies directed against fixed tissue basement membranes"
    ],
    0,
    "Type I hypersensitivity is immediate allergy mediated by allergen-induced cross-linking of pre-formed IgE bound to $Fc\\varepsilon RI$ on mast cells, triggering explosive mediator release."
  ],
  [
    "The primary pre-formed mediator stored in mast cell granules that causes vasodilation, increased capillary permeability, and smooth muscle contraction in Type I hypersensitivity is:",
    [
      "Histamine",
      "Interferon-gamma",
      "Prothrombin",
      "Complement C1q"
    ],
    0,
    "Histamine is released from mast cell granules within minutes of allergen exposure, binding $H_1$ receptors to cause arteriolar dilation, increased venular permeability, and bronchoconstriction."
  ],
  [
    "Erythroblastosis foetalis (hemolytic disease of the newborn) is an example of which type of hypersensitivity?",
    [
      "Type II (antibody-mediated cytotoxic hypersensitivity)",
      "Type I (immediate anaphylaxis)",
      "Type III (immune complex hypersensitivity)",
      "Type IV (delayed-type cell-mediated hypersensitivity)"
    ],
    0,
    "Erythroblastosis foetalis involves maternal anti-Rh (IgG) antibodies crossing the placenta and targeting fetal Rh-positive erythrocytes for complement lysis and phagocytosis (Type II hypersensitivity)."
  ],
  [
    "Serum sickness and the localized Arthus reaction are classical manifestations of which hypersensitivity reaction?",
    [
      "Type III (immune complex-mediated hypersensitivity)",
      "Type I (immediate atopic hypersensitivity)",
      "Type II (antibody-dependent cytotoxic hypersensitivity)",
      "Type IV (delayed-type cell-mediated hypersensitivity)"
    ],
    0,
    "Type III hypersensitivity occurs when circulating soluble antigen-antibody complexes deposit in vessel walls, glomeruli, and synovia, activating complement and recruiting neutrophils (e.g. serum sickness)."
  ],
  [
    "The Mantoux (tuberculin) skin test used for screening tuberculosis is a clinical diagnostic example of:",
    [
      "Type IV (delayed-type, cell-mediated hypersensitivity)",
      "Type I (immediate IgE-mediated anaphylaxis)",
      "Type II (antibody-dependent cytotoxic reaction)",
      "Type III (immune complex-mediated vasculitis)"
    ],
    0,
    "Intradermal injection of purified protein derivative (PPD) stimulates memory Th1 cells to secrete IFN-gamma, recruiting macrophages and producing peak induration at 48-72 hours (Type IV reaction)."
  ],
  [
    "Which autoimmune disorder involves autoantibodies directed against the nicotinic acetylcholine receptors at the motor end plate of neuromuscular junctions?",
    [
      "Myasthenia gravis",
      "Rheumatoid arthritis",
      "Multiple sclerosis",
      "Systemic lupus erythematosus"
    ],
    0,
    "In Myasthenia gravis, autoantibodies block and degrade acetylcholine receptors at the neuromuscular junction, leading to progressive skeletal muscle weakness and easy fatigability."
  ],
  [
    "In Graves' disease, hyperthyroidism is caused by autoantibodies that act as:",
    [
      "Agonists binding to and stimulating the Thyroid-Stimulating Hormone (TSH) receptor on thyroid follicular cells",
      "Antagonists blocking iodine uptake in thyroid follicles",
      "Neutralizing agents against circulating thyroxine ($T_4$)",
      "Inhibitors of thyroglobulin synthesis"
    ],
    0,
    "Graves' disease involves Thyroid-Stimulating Immunoglobulins (TSI) that bind to TSH receptors, chronically stimulating thyroid hormone synthesis and causing diffuse goiter and thyrotoxicosis."
  ],
  [
    "Hashimoto's thyroiditis is an autoimmune disorder characterized by destruction of thyroid tissue and hypothyroidism, marked by high titers of antibodies against:",
    [
      "Thyroid peroxidase (TPO) and thyroglobulin",
      "Acetylcholine receptors and actin",
      "Intrinsic factor and parietal cells",
      "Insulin and glucagon receptors"
    ],
    0,
    "Hashimoto's thyroiditis features autoreactive T cells and autoantibodies against thyroid peroxidase (anti-TPO) and thyroglobulin, leading to chronic lymphocytic inflammation and hypothyroidism."
  ],
  [
    "Pernicious anemia is an autoimmune disorder characterized by megaloblastic anemia and neuropathy caused by autoimmune destruction of:",
    [
      "Gastric parietal cells and intrinsic factor, leading to vitamin $B_{12}$ deficiency",
      "Pancreatic beta cells producing insulin",
      "Chief cells producing pepsinogen",
      "Erythrocyte membranes by cold agglutinins"
    ],
    0,
    "Autoantibodies destroy gastric parietal cells and neutralize intrinsic factor; without intrinsic factor, dietary vitamin $B_{12}$ cannot be absorbed in the terminal ileum, causing pernicious anemia."
  ],
  [
    "Systemic Lupus Erythematosus (SLE) is a multisystem autoimmune disorder characteristically identified by high titers of circulating antibodies directed against:",
    [
      "Double-stranded DNA (anti-dsDNA) and nuclear antigens (ANA)",
      "Streptococcal M protein",
      "Thyroid-stimulating hormone receptor",
      "Platelet glycoprotein IIb/IIIa"
    ],
    0,
    "SLE is a prototypic Type III hypersensitivity autoimmune disease characterized by anti-nuclear antibodies (ANA) and anti-dsDNA antibodies that form circulating immune complexes depositing in organs."
  ],
  [
    "In hybridoma technology developed by Georges Köhler and César Milstein (1975), monoclonal antibodies are produced by fusing:",
    [
      "Antigen-sensitized splenic B lymphocytes with immortal HGPRT-deficient myeloma cells",
      "Helper T cells with macrophage tumor cells",
      "Thymocytes with dendritic cells",
      "Erythroblasts with skin fibroblasts"
    ],
    0,
    "Köhler and Milstein fused antibody-producing splenocytes from an immunized mouse with mutant, HGPRT-deficient myeloma cells, creating immortal hybridomas producing specific monoclonal antibodies."
  ],
  [
    "In hybridoma technology, the selective medium HAT contains:",
    [
      "Hypoxanthine, Aminopterin, and Thymidine",
      "Histidine, Asparagine, and Tyrosine",
      "Heparin, Adrenaline, and Thrombin",
      "Hydrocortisone, Ampicillin, and Tetracycline"
    ],
    0,
    "HAT medium contains Aminopterin (which blocks the de novo nucleotide synthesis pathway), forcing cells to rely on the salvage pathway using Hypoxanthine and Thymidine via HGPRT."
  ],
  [
    "The Widal test used for the serological diagnosis of typhoid fever is based on the immunological principle of:",
    [
      "Bacterial agglutination",
      "Complement fixation",
      "Direct enzyme-linked immunosorbent assay",
      "Radial immunodiffusion"
    ],
    0,
    "The Widal test detects serum agglutinating antibodies against the O (somatic) and H (flagellar) antigens of Salmonella enterica serovar Typhi."
  ],
  [
    "In an Enzyme-Linked Immunosorbent Assay (ELISA), the commonly used enzyme reporter conjugated to the secondary antibody is:",
    [
      "Horseradish peroxidase (HRP) or Alkaline phosphatase (AP)",
      "RNA polymerase II",
      "Pepsin or trypsin",
      "Amylase or lipase"
    ],
    0,
    "HRP and AP are widely used reporter enzymes that catalyze chromogenic substrates (such as TMB or pNPP) to produce a measurable colored reaction proportional to antigen/antibody concentration."
  ],
  [
    "The Western blotting technique is used to detect specific proteins in a tissue extract or serum and involves separating proteins by:",
    [
      "SDS-PAGE followed by electrotransfer onto a nitrocellulose membrane and detection with specific antibodies",
      "Agarose gel electrophoresis followed by probe hybridization to DNA",
      "Spectrophotometric measurement of hemoglobin absorbance",
      "Centrifugation in a continuous sucrose gradient"
    ],
    0,
    "In Western blotting, proteins are separated by sodium dodecyl sulfate-polyacrylamide gel electrophoresis (SDS-PAGE), transferred to a membrane, and probed with specific enzyme-conjugated antibodies."
  ],
  [
    "The direct Coombs test (Direct Antiglobulin Test or DAT) is used clinically to detect:",
    [
      "Antibodies or complement proteins already bound directly to the surface of circulating erythrocytes in vivo",
      "Unbound free antibodies in maternal serum",
      "Bacterial endotoxins in cerebrospinal fluid",
      "Viral antigens in throat swabs"
    ],
    0,
    "DAT uses antihuman globulin (Coombs reagent) to agglutinate red blood cells that have antibodies (IgG) or complement (C3d) already coated on their surface, as seen in autoimmune hemolytic anemia."
  ],
  [
    "The indirect Coombs test (Indirect Antiglobulin Test or IAT) is performed in pregnant Rh-negative mothers to detect:",
    [
      "Unbound Rh antibodies circulating freely in the maternal serum that could cross the placenta",
      "Antibodies bound to infant red blood cells in the umbilical cord",
      "Bacterial pathogens in amniotic fluid",
      "Platelet count in maternal blood"
    ],
    0,
    "IAT tests the mother's serum for circulating anti-Rh antibodies by incubating maternal serum with Rh-positive test erythrocytes, followed by addition of Coombs reagent to test for agglutination."
  ],
  [
    "The Venereal Disease Research Laboratory (VDRL) test used for syphilis screening is a non-treponemal serological assay that detects antibodies against:",
    [
      "Cardiolipin-lecithin-cholesterol antigen (reagin antibodies)",
      "Treponema pallidum surface proteins",
      "Herpes simplex virus glycoproteins",
      "Human immunodeficiency virus reverse transcriptase"
    ],
    0,
    "The VDRL test is a flocculation assay detecting anti-cardiolipin antibodies (reagin) released in response to cellular damage caused by Treponema pallidum infection."
  ],
  [
    "Which immunodeficiency disorder is characterized by congenital hypoplasia or absence of the third and fourth pharyngeal pouches, leading to thymic aplasia and hypocalcemia?",
    [
      "DiGeorge syndrome",
      "Bruton's agammaglobulinemia",
      "Severe Combined Immunodeficiency",
      "Wiskott-Aldrich syndrome"
    ],
    0,
    "DiGeorge syndrome (22q11.2 microdeletion) causes defective development of 3rd and 4th pharyngeal pouches, resulting in absence of the thymus (T-cell deficiency) and parathyroid glands (hypocalcemic tetany)."
  ],
  [
    "Bruton's X-linked agammaglobulinemia (XLA) is caused by mutations in the gene encoding which enzyme essential for B-cell development beyond the pre-B cell stage?",
    [
      "Bruton tyrosine kinase (Btk)",
      "Adenosine deaminase (ADA)",
      "Terminal deoxynucleotidyl transferase (TdT)",
      "Glucose-6-phosphate dehydrogenase (G6PD)"
    ],
    0,
    "Mutations in Bruton tyrosine kinase (Btk) arrest B-lymphocyte maturation at the pre-B stage, leading to profound absence of mature B cells and near-complete lack of all serum immunoglobulins."
  ]
];
evenMoreMcqsPart5.forEach(m => addMcq(m[0], m[1], m[2], m[3]));


// Format AR questions
const arQuestions = arData.map((d, i) => ({
  question: `${arDirections}\n\nAssertion (A): ${d.a}\nReason (R): ${d.r}`,
  options: arOptions,
  correctAnswer: d.ans,
  explanation: d.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion–Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// Format MCQ questions
const mcqQuestions = mcqData.map(m => ({
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

console.log(`Part 5 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 5 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part5.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 5: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
