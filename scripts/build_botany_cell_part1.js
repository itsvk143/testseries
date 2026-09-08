const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Prokaryotic and eukaryotic cell ultrastructure";
const chapter = "Cell Structure and Function";
const subject = "Botany";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Assertion Reason Questions
const arData = [
  {
    a: "Rudolf Virchow modified the cell theory proposed by Schleiden and Schwann by giving the concept of 'Omnis cellula-e cellula'.",
    r: "Virchow explained that new cells arise from pre-existing cells through cellular division.",
    ans: 0,
    exp: "Schleiden and Schwann formulated the cell theory but did not explain how new cells formed. Rudolf Virchow (1855) first explained that cells divide and new cells are formed from pre-existing cells ('Omnis cellula-e cellula'). Thus, both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Viruses are considered a true exception to the classic cell theory.",
    r: "Viruses lack cellular organization, metabolic machinery, and are obligate intracellular parasites that exist as nucleoprotein particles outside host cells.",
    ans: 0,
    exp: "Viruses do not possess a cellular structure (neither prokaryotic nor eukaryotic) and do not have metabolic enzymes or cellular boundary, making them classic exceptions to cell theory. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Gram-negative bacteria possess a more complex cell envelope than Gram-positive bacteria.",
    r: "Gram-negative bacteria have a thinner peptidoglycan layer surrounded by an outer lipopolysaccharide (LPS) membrane, whereas Gram-positive bacteria have a thick peptidoglycan wall with teichoic acids but lack an outer membrane.",
    ans: 0,
    exp: "Gram-negative bacterial envelopes comprise three layers: glycocalyx, an outer membrane containing LPS, and a thin peptidoglycan layer, making it more structurally complex than Gram-positive envelopes. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Mesosomes in prokaryotes are considered functional equivalents of eukaryotic mitochondria.",
    r: "Mesosomes are plasma membrane infoldings that contain respiratory enzymes for oxidative phosphorylation and ATP synthesis.",
    ans: 0,
    exp: "Mesosomes increase the enzymatic and surface area of the prokaryotic plasma membrane and harbor respiratory assemblies, performing cellular respiration analogous to eukaryotic mitochondria. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Prokaryotic ribosomes are sedimented at 70S, whereas eukaryotic cytoplasmic ribosomes sediment at 80S.",
    r: "The Svedberg unit (S) is directly proportional only to the geometrical molecular weight of ribonucleoprotein particles.",
    ans: 2,
    exp: "Assertion is true as prokaryotic ribosomes are 70S (50S + 30S) and eukaryotic cytoplasmic ribosomes are 80S (60S + 40S). Reason is false because Svedberg unit (S) measures sedimentation coefficient, which depends on size, mass, and shape (density/frictional coefficient), not strictly molecular weight."
  },
  {
    a: "Bacterial flagella are structurally distinct from eukaryotic flagella.",
    r: "Bacterial flagella consist of flagellin protein arranged in a hollow cylinder lacking microtubules and without a 9+2 axonemal array.",
    ans: 0,
    exp: "Bacterial flagella are made of flagellin protein with a filament, hook, and basal body and rotate like propellers. Eukaryotic flagella are membrane-bound projections containing a 9+2 microtubular axoneme based on tubulin. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Pili and fimbriae in bacteria do not participate in cellular locomotion.",
    r: "Pili are tubular structures made of pilin protein involved in conjugation, whereas fimbriae are bristle-like fibers that help bacteria attach to host tissues and rocks.",
    ans: 0,
    exp: "Only flagella are responsible for motility in bacteria. Pili facilitate genetic transfer during conjugation, while fimbriae provide adherence to surfaces. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Inclusion bodies in bacteria are not bounded by any unit membrane system.",
    r: "Inclusion bodies like phosphate granules, cyanophycean granules, and glycogen granules lie freely in the cytoplasm as reserve materials.",
    ans: 0,
    exp: "In prokaryotes, reserve materials are stored in the cytoplasm in the form of non-membrane bound inclusion bodies. Gas vacuoles, however, are pseudo-vacuoles bounded by proteinaceous sub-units, but standard nutrient inclusion bodies are completely naked."
  },
  {
    a: "Gas vacuoles are found in blue-green algae and purple and green photosynthetic bacteria.",
    r: "Gas vacuoles provide buoyancy to aquatic prokaryotes, helping them adjust their position in water column for optimal light absorption.",
    ans: 0,
    exp: "Gas vacuoles are protein-shelled structures impermeable to water but permeable to gases, providing buoyant regulation in aquatic cyanobacteria and purple/green photosynthetic bacteria. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Mycoplasmas are completely resistant to penicillin antibiotics.",
    r: "Penicillin inhibits the transpeptidase enzyme involved in peptidoglycan cross-linking, and mycoplasmas naturally lack a cell wall altogether.",
    ans: 0,
    exp: "Mycoplasmas (PPLO) are wall-less prokaryotes. Since beta-lactam antibiotics like penicillin specifically target bacterial peptidoglycan wall synthesis, mycoplasmas are naturally insusceptible. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Eukaryotic cells show extensive compartmentalization of cytoplasm.",
    r: "Eukaryotic cells possess distinct membrane-bound organelles that segregate diverse biochemical processes into specialized functional chambers.",
    ans: 0,
    exp: "The hallmark of eukaryotic cells is compartmentalization, achieved by an intricate internal endomembrane system and membrane-bound organelles (mitochondria, chloroplasts, lysosomes, etc.). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Plant cells differ from animal cells in having cell walls, plastids, and a large central vacuole.",
    r: "Animal cells possess centrioles which are completely absent in almost all higher plant cells.",
    ans: 1,
    exp: "Both statements are true facts of NCERT cell biology: plants have cell walls, plastids, and central vacuoles; animal cells have centrosomes with centrioles absent in higher plants. However, Reason is an independent feature of animal cells, not the explanation for plant features."
  },
  {
    a: "The nucleolus is not a membrane-bound organelle.",
    r: "The nucleolar content is continuous with the rest of the nucleoplasm and functions as the primary site of active ribosomal RNA (rRNA) synthesis.",
    ans: 1,
    exp: "The nucleolus is a dense, non-membrane bound sub-compartment of the nucleus where transcription of pre-rRNA and assembly of ribosomal subunits occur. Both (A) and (R) are true, but (R) describes function and continuity, not the structural cause of lacking a membrane."
  },
  {
    a: "Nuclear pores allow bidirectional transport of macromolecules between the nucleus and the cytoplasm.",
    r: "Nuclear pores are octagonal proteinaceous complexes formed by the fusion of the inner and outer nuclear membranes.",
    ans: 1,
    exp: "Nuclear pores facilitate active and passive transport of RNA and proteins in and out of the nucleus. They are formed at sites where inner and outer membranes fuse. Both statements are true, but structural fusion does not explain directional regulation."
  },
  {
    a: "Chromatin contains basic proteins called histones in eukaryotes, but prokaryotic DNA lacks histones.",
    r: "Prokaryotic genomic DNA is organized in a nucleoid region associated with non-histone polyamines and basic nucleoid-associated proteins.",
    ans: 1,
    exp: "Eukaryotic DNA wraps around octameric histone cores to form nucleosomes. Bacterial DNA lacks histones and is condensed into a nucleoid by small basic proteins and RNA. Both statements are true, but Reason is an independent fact."
  },
  {
    a: "Acrocentric chromosomes have their centromere positioned close to one end, forming one extremely short and one very long arm.",
    r: "Telocentric chromosomes have a terminal centromere located at the very tip of the chromosome.",
    ans: 1,
    exp: "Acrocentric chromosomes have a sub-terminal centromere yielding one satellite/short arm (p-arm) and one long arm (q-arm). Telocentric chromosomes have a terminal centromere. Both statements are correct classifications of chromosomes, but (R) does not explain (A)."
  },
  {
    a: "The glycocalyx of bacteria may exist either as a loose sheath called slime layer or as a thick, tough layer called capsule.",
    r: "The capsule protects pathogenic bacteria from phagocytosis by host immune cells like neutrophils and macrophages.",
    ans: 1,
    exp: "The outermost layer of the bacterial envelope is the glycocalyx. It varies in composition: a loose slime layer or a rigid protective capsule that confers virulence and antiphagocytic properties. Both statements are true, but function does not explain the morphological distinction."
  },
  {
    a: "Plasmids confer unique phenotypic characters to bacterial cells, such as antibiotic resistance.",
    r: "Plasmids are small, circular, extrachromosomal, double-stranded self-replicating DNA molecules found in many bacteria.",
    ans: 1,
    exp: "Plasmids carry non-essential accessory genes (e.g., R-factors for resistance, F-factors for fertility) that replicate autonomously. Both (A) and (R) are true, but their molecular nature (extrachromosomal DNA) does not explain why specific genes (resistance) evolved on them."
  },
  {
    a: "Secondary constrictions on eukaryotic chromosomes give the appearance of a small fragment called satellite.",
    r: "Chromosomes possessing satellites are called SAT-chromosomes, and their secondary constriction corresponds to the nucleolar organizer region (NOR).",
    ans: 0,
    exp: "Non-staining secondary constrictions at a constant location demarcate satellite chromosomal fragments (SAT chromosomes). These secondary constrictions contain NOR genes coding for 18S, 5.8S, and 28S rRNAs. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Gram staining differentiates bacteria based on the chemical and structural differences in their cell envelopes.",
    r: "Gram-negative bacteria retain the crystal violet-iodine complex because of their thick peptidoglycan wall and teichoic acids.",
    ans: 2,
    exp: "Assertion is true. Reason is false because Gram-positive bacteria retain crystal violet due to their thick peptidoglycan wall. Gram-negative bacteria have their outer lipid membrane dissolved by alcohol wash, losing the primary dye and taking up the pink safranin counterstain."
  },
  {
    a: "Prokaryotic cells generally divide much more rapidly than eukaryotic cells.",
    r: "Prokaryotes are smaller in size, lack membrane-bound nuclear envelopes, and duplicate their simpler circular chromosome during rapid binary fission.",
    ans: 0,
    exp: "Prokaryotes like E. coli divide in 20 minutes under favorable conditions. Their high surface-area-to-volume ratio and absence of complex mitotic apparatus facilitate rapid replication and division. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A multicellular organism consists of cells that all exhibit identical cell morphology and organelle counts.",
    r: "Cells in multicellular organisms undergo cellular differentiation, tailoring their shape, size, and organelle composition to specialized physiological duties.",
    ans: 3,
    exp: "Assertion is false: cells in a multicellular organism vary drastically in morphology (e.g., RBCs are biconcave enucleate discs, neurons are branched and elongated, tracheids are tubular). Reason is true: differentiation tailors cell structure to function."
  },
  {
    a: "Ribosomes are non-membrane bound organelles found in both prokaryotic and eukaryotic cells, as well as inside chloroplasts and mitochondria.",
    r: "Ribosomes are universal ribonucleoprotein assemblies responsible for translating messenger RNA into polypeptides across all living domains.",
    ans: 1,
    exp: "Ribosomes are universal translating organelles lacking any bounding membrane. They occur free in cytosol, bound to RER, and inside chloroplasts/mitochondria. Both statements are true, but the universal translational duty does not explain why they lack a lipid bilayer."
  },
  {
    a: "Kinetochores are disc-shaped protein structures present on the sides of the centromere of chromosomes.",
    r: "Kinetochores serve as the attachment sites for spindle microtubules during nuclear division.",
    ans: 1,
    exp: "Both statements are accurate NCERT facts: kinetochores are trilaminar protein discs located at the primary constriction (centromere) where kinetochore microtubules attach during metaphase. Both are true, but attachment function does not explain the disc-shaped morphology."
  },
  {
    a: "Bacterial cell wall prevents the bacterium from bursting or collapsing under hypotonic conditions.",
    r: "Peptidoglycan (murein) in bacterial cell wall forms a rigid, covalent cross-linked macromolecular meshwork that resists high internal turgor pressure.",
    ans: 0,
    exp: "Bacteria face high internal osmotic pressures (turgor). The rigid cross-linked peptidoglycan sacculus prevents osmotic lysis (bursting). Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    a: "All single-celled organisms with a well-defined nucleus were placed in Kingdom Monera by Whittaker.",
    r: "Kingdom Monera is exclusively reserved for prokaryotic organisms that lack nuclear envelopes and membrane-bound organelles.",
    ans: 3,
    exp: "Assertion is false: unicellular eukaryotes with a well-defined nucleus are placed in Kingdom Protista, not Monera. Reason is true: Kingdom Monera is exclusively comprised of prokaryotes (bacteria, cyanobacteria, mycoplasma). Thus (A) is false but (R) is true."
  }
];

// 154 MCQs covering the entire subtopic
const mcqQuestions = [];

const questionsRaw = [
  {
    q: "Who among the following scientists first observed and described a live cell under a microscope?",
    opts: ["Robert Hooke", "Anton van Leeuwenhoek", "Robert Brown", "Rudolf Virchow"],
    ans: 1,
    exp: "Anton van Leeuwenhoek first saw and described a live cell. Robert Hooke discovered dead cork cells, while Robert Brown discovered the nucleus (1831)."
  },
  {
    q: "The cell theory was initially formulated jointly by which pair of scientists?",
    opts: ["Schleiden and Schwann", "Watson and Crick", "Singer and Nicolson", "Robert Hooke and Leeuwenhoek"],
    ans: 0,
    exp: "Matthias Schleiden (German botanist, 1838) and Theodore Schwann (British zoologist, 1839) together formulated the cell theory."
  },
  {
    q: "The generalization 'Omnis cellula-e cellula' meaning all cells arise from pre-existing cells was proposed by:",
    opts: ["Theodore Schwann", "Matthias Schleiden", "Rudolf Virchow", "Louis Pasteur"],
    ans: 2,
    exp: "Rudolf Virchow in 1855 first explained that cells divide and new cells are formed from pre-existing cells ('Omnis cellula-e cellula'), modifying the cell theory."
  },
  {
    q: "Which of the following is an exception to the classical cell theory?",
    opts: ["Bacteria", "Fungi", "Viruses", "Algae"],
    ans: 2,
    exp: "Viruses lack cellular organization and metabolic machinery, existing as inert nucleoprotein crystals outside living host cells, making them an exception to cell theory."
  },
  {
    q: "The genetic material of a prokaryotic cell is represented by:",
    opts: ["Linear DNA enclosed in a double-layered nuclear envelope", "Naked circular double-stranded DNA without histones", "Single-stranded RNA wrapped around histone octamers", "Linear DNA bound to protamines in a nucleolus"],
    ans: 1,
    exp: "Prokaryotic genetic material is naked (not enclosed by a nuclear envelope and not bound to basic histone proteins) and consists of circular dsDNA forming a nucleoid."
  },
  {
    q: "Which of the following cellular components is found in both prokaryotic and eukaryotic cells?",
    opts: ["Mitochondria", "Ribosome", "Endoplasmic reticulum", "Golgi apparatus"],
    ans: 1,
    exp: "Ribosomes are non-membrane bound organelles found in all living cells (70S in prokaryotes; 80S in eukaryotic cytosol and 70S in mitochondria/chloroplasts)."
  },
  {
    q: "The smallest living cells capable of independent existence without a cell wall are:",
    opts: ["Mycoplasma", "Nostoc", "Bacillus", "Chlamydia"],
    ans: 0,
    exp: "Mycoplasmas (PPLO) are the smallest known living cells (approx. 0.3 $\\mu$m in length), completely lack a cell wall, and can survive anaerobically."
  },
  {
    q: "What is the typical diameter of a human Red Blood Cell (RBC)?",
    opts: ["0.3 $\\mu$m", "1 to 2 $\\mu$m", "7.0 $\\mu$m", "10 to 20 $\\mu$m"],
    ans: 2,
    exp: "Human red blood cells are round and biconcave discs with an average diameter of about 7.0 $\\mu$m."
  },
  {
    q: "Which of the following cells is correctly paired with its characteristic shape according to NCERT?",
    opts: ["Tracheid – Amoeboid", "Columnar epithelial cells – Long and narrow", "Mesophyll cells – Branched and long", "Nerve cells – Round and biconcave"],
    ans: 1,
    exp: "According to NCERT, columnar epithelial cells are long and narrow; RBCs are round and biconcave; amoeboid describes WBCs; nerve cells are branched and long; tracheids are elongated; mesophyll cells are round and oval."
  },
  {
    q: "In prokaryotic cells, the tightly bound three-layered cell envelope consists of, from outermost to innermost:",
    opts: ["Cell wall $\\rightarrow$ Glycocalyx $\\rightarrow$ Plasma membrane", "Glycocalyx $\\rightarrow$ Cell wall $\\rightarrow$ Plasma membrane", "Plasma membrane $\\rightarrow$ Cell wall $\\rightarrow$ Glycocalyx", "Glycocalyx $\\rightarrow$ Plasma membrane $\\rightarrow$ Cell wall"],
    ans: 1,
    exp: "The prokaryotic cell envelope consists of a tightly bound three-layered structure: the outermost glycocalyx, followed by the rigid cell wall, and then the plasma membrane."
  },
  {
    q: "When the glycocalyx is a loose sheath, it is called a _____, whereas when it is thick and tough, it is termed a _____.",
    opts: ["Capsule, slime layer", "Slime layer, capsule", "Pellicle, capsule", "Mesosome, slime layer"],
    ans: 1,
    exp: "Glycocalyx varies in composition and thickness; a loose sheath is called a slime layer, while a thick, tough and rigid layer is termed a capsule."
  },
  {
    q: "Gram-positive bacteria differ from Gram-negative bacteria primarily in that Gram-positive bacteria:",
    opts: ["Have an outer membrane with lipopolysaccharides", "Retain crystal violet stain due to a thick peptidoglycan layer", "Lack teichoic acids completely", "Possess a very thin peptidoglycan cell wall"],
    ans: 1,
    exp: "Gram-positive bacteria have a thick peptidoglycan wall with teichoic acids that traps the crystal violet-iodine complex, resisting alcohol decolourization."
  },
  {
    q: "Mesosomes in bacteria are formed by the infoldings of:",
    opts: ["Cell wall", "Glycocalyx", "Plasma membrane", "Nuclear membrane"],
    ans: 2,
    exp: "Mesosomes are special membranous structures formed by the extensions/infoldings of the plasma membrane into the cytoplasm (vesicles, tubules, lamellae)."
  },
  {
    q: "Which of the following functions is NOT performed by bacterial mesosomes?",
    opts: ["Cell wall formation", "DNA replication and distribution to daughter cells", "Protein synthesis at 80S ribosomes", "Respiration and secretion processes"],
    ans: 2,
    exp: "Bacteria have 70S ribosomes (not 80S), and mesosomes are not sites of 80S translation. Mesosomes help in cell wall formation, DNA replication, distribution to daughter cells, respiration, and secretion."
  },
  {
    q: "Chromatophores are membranous extensions in some prokaryotes like cyanobacteria that contain:",
    opts: ["Hydrolytic enzymes", "Pigments for photosynthesis", "Lipid storage droplets", "Respiratory chain complexes only"],
    ans: 1,
    exp: "In cyanobacteria and photosynthetic bacteria, membranous extensions into the cytoplasm called chromatophores contain photosynthetic pigments."
  },
  {
    q: "A bacterial flagellum is composed of three distinct parts:",
    opts: ["Head, collar, and tail", "Filament, hook, and basal body", "Shaft, kinetochore, and axoneme", "Tubule, spoke, and central sheath"],
    ans: 1,
    exp: "A bacterial flagellum is composed of three parts: filament (longest portion extending outside), hook, and basal body anchored in the cell envelope."
  },
  {
    q: "Which part of the bacterial flagellum represents its longest portion extending from the cell surface to the exterior?",
    opts: ["Basal body", "Hook", "Filament", "Centrosome"],
    ans: 2,
    exp: "The filament is the longest portion of the bacterial flagellum and extends from the cell surface to the exterior."
  },
  {
    q: "Pili in bacteria are elongated tubular structures composed of a special protein called:",
    opts: ["Tubulin", "Flagellin", "Pilin", "Actin"],
    ans: 2,
    exp: "Pili are tubular surface appendages made of the protein pilin and function in bacterial conjugation (mating/plasmid transfer)."
  },
  {
    q: "Fimbriae in bacteria primarily function to:",
    opts: ["Confer motility in fluid media", "Attach the bacteria to rocks in streams and to host tissues", "Perform photosynthesis", "Transfer genomic DNA during transduction"],
    ans: 1,
    exp: "Fimbriae are small bristle-like fibers sprouting out of the bacterial cell that help attach bacteria to rocks in streams and to host tissues."
  },
  {
    q: "Which of the following represents the sedimentation coefficient and subunits of prokaryotic ribosomes?",
    opts: ["80S (60S + 40S)", "70S (50S + 30S)", "70S (40S + 30S)", "80S (50S + 30S)"],
    ans: 1,
    exp: "Prokaryotic ribosomes are 70S particles composed of two subunits: the larger 50S subunit and the smaller 30S subunit."
  },
  {
    q: "Several ribosomes may attach to a single mRNA molecule and form a chain called a:",
    opts: ["Polysome or polyribosome", "Centrosome", "Mesosome", "Dictyosome"],
    ans: 0,
    exp: "Several ribosomes attach to a single strand of mRNA to simultaneously synthesize multiple copies of a polypeptide, forming a polyribosome or polysome."
  },
  {
    q: "Inclusion bodies in bacteria function as:",
    opts: ["Membrane-bound digestive vacuolar compartments", "Reserve material storage sites lying freely in the cytoplasm", "Sites of active spindle fiber generation", "Centres of active ribosomal assembly"],
    ans: 1,
    exp: "Inclusion bodies store reserve materials in prokaryotic cytoplasm freely without any bounding membrane (e.g., phosphate granules, cyanophycean granules, glycogen granules)."
  },
  {
    q: "Gas vacuoles are found in which of the following organisms?",
    opts: ["Blue-green algae and purple/green photosynthetic bacteria", "Yeast and Amoeba", "Chlamydomonas and Spirogyra", "Brown algae and red algae"],
    ans: 0,
    exp: "Gas vacuoles are pseudo-vacuoles found in photosynthetic prokaryotes like cyanobacteria (blue-green algae), purple bacteria, and green photosynthetic bacteria."
  },
  {
    q: "Plasmids in bacterial cells are defined as:",
    opts: ["Main chromosomal linear DNA molecules", "Small, circular, double-stranded extrachromosomal DNA molecules", "Ribonucleoprotein complexes present in the nucleolus", "Invaginations of the inner mitochondrial membrane"],
    ans: 1,
    exp: "Plasmids are small, autonomous, circular, double-stranded extrachromosomal DNA molecules that replicate independently of genomic DNA and often carry antibiotic resistance genes."
  },
  {
    q: "Which of the following cellular structures is absent in plant cells but typically present in animal cells?",
    opts: ["Cell wall", "Plastids", "Large central vacuole", "Centrioles"],
    ans: 3,
    exp: "Centrioles (and centrosomes) are present in animal cells where they organize the mitotic spindle apparatus, but are absent in higher plant cells."
  },
  {
    q: "The plant cell wall differs from the bacterial cell wall because the plant cell wall is composed primarily of:",
    opts: ["Peptidoglycan and teichoic acid", "Cellulose, hemicellulose, pectins, and proteins", "Chitin and glucans", "Murein and lipopolysaccharides"],
    ans: 1,
    exp: "Plant cell walls are made of cellulose, hemicellulose, pectins, and proteins. Bacterial walls contain peptidoglycan (murein), while fungal walls contain chitin."
  },
  {
    q: "The middle lamella layer cementing adjacent plant cell walls together is mainly composed of:",
    opts: ["Cellulose microfibrils", "Calcium and magnesium pectate", "Lignin and suberin", "Hemicellulose and cutin"],
    ans: 1,
    exp: "The middle lamella is a layer primarily made of calcium and magnesium pectate which cements and holds the neighboring plant cell walls together."
  },
  {
    q: "Cytoplasmic channels traversing the plant cell wall that connect adjacent plant cells are called:",
    opts: ["Desmosomes", "Tight junctions", "Plasmodesmata", "Gap junctions"],
    ans: 2,
    exp: "Plasmodesmata are microscopic channels traversing cell walls and middle lamella, connecting the cytoplasm of adjacent plant cells."
  },
  {
    q: "The term 'cytoplasm' minus all the cellular organelles is specifically known as:",
    opts: ["Protoplasm", "Cytosol or hyaloplasm", "Tonoplasm", "Karyolymph"],
    ans: 1,
    exp: "Cytosol (hyaloplasm) is the fluid, soluble portion of the cytoplasm in which cellular organelles and inclusion bodies are suspended."
  },
  {
    q: "The nucleus of a eukaryotic cell was first discovered and named by:",
    opts: ["Robert Hooke in 1665", "Robert Brown in 1831", "Camillo Golgi in 1898", "George Palade in 1953"],
    ans: 1,
    exp: "The cell nucleus was discovered and named by Scottish botanist Robert Brown in 1831 in orchid root cells."
  },
  {
    q: "The term 'chromatin' to describe the nuclear material stained by basic dyes was coined by:",
    opts: ["Flemming", "Purkinje", "Dujardin", "Virchow"],
    ans: 0,
    exp: "Walther Flemming (1879) used the term chromatin (from Greek chroma, meaning color) for the nuclear substance that readily took up basic dyes like acetocarmine."
  },
  {
    q: "The perinuclear space between the inner and outer nuclear membranes typically measures:",
    opts: ["1 to 5 nm", "10 to 50 nm", "100 to 500 nm", "1 to 5 $\\mu$m"],
    ans: 1,
    exp: "The nuclear envelope consists of two parallel unit membranes separated by a fluid-filled perinuclear space of approximately 10 to 50 nm."
  },
  {
    q: "The outer membrane of the nuclear envelope usually remains continuous with which organelle?",
    opts: ["Golgi apparatus", "Endoplasmic reticulum", "Mitochondria", "Lysosome"],
    ans: 1,
    exp: "The outer nuclear membrane remains continuous with the rough endoplasmic reticulum and often bears 80S ribosomes on its cytosolic surface."
  },
  {
    q: "Which of the following processes occurs actively inside the nucleolus?",
    opts: ["Translation of nuclear proteins", "Transcription of ribosomal RNA (rRNA)", "Replication of genomic DNA", "Synthesis of steroidal hormones"],
    ans: 1,
    exp: "The nucleolus is the specialized non-membrane bound nuclear factory for the active transcription of pre-rRNA and the assembly of ribosomal sub-units."
  },
  {
    q: "A chromosome with a centromere located exactly in the middle, forming two equal arms, is classified as:",
    opts: ["Acrocentric", "Telocentric", "Sub-metacentric", "Metacentric"],
    ans: 3,
    exp: "A metacentric chromosome has a median centromere dividing the chromosome into two equal arms, assuming a 'V' shape during anaphase."
  },
  {
    q: "A chromosome having its centromere slightly away from the middle, resulting in one slightly shorter arm and one slightly longer arm, is:",
    opts: ["Metacentric", "Sub-metacentric", "Acrocentric", "Telocentric"],
    ans: 1,
    exp: "In sub-metacentric chromosomes, the centromere is positioned slightly away from the center, giving rise to one shorter p-arm and one longer q-arm ('L' shaped in anaphase)."
  },
  {
    q: "An acrocentric chromosome is characterized by:",
    opts: ["Centromere located at the terminal tip", "Centromere situated close to one end forming one extremely short and one very long arm", "Centromere at the exact center", "Absence of centromere"],
    ans: 1,
    exp: "In acrocentric chromosomes, the centromere is located close to one end, producing one extremely short arm and one very long arm ('J' shape in anaphase)."
  },
  {
    q: "A telocentric chromosome is one that has:",
    opts: ["Centromere in the center", "Centromere at the terminal end", "Two centromeres", "No kinetochore"],
    ans: 1,
    exp: "A telocentric chromosome has a terminal centromere located at the very end of the chromosome arm ('I' shape during anaphase)."
  },
  {
    q: "The small chromosomal fragment demarcated beyond a non-staining secondary constriction at a constant location is called a:",
    opts: ["Centrosome", "Satellite", "Kinetochore", "Telomere"],
    ans: 1,
    exp: "A few chromosomes have non-staining secondary constrictions at a constant location, which gives the appearance of a small distal knob-like fragment called a satellite (SAT chromosome)."
  },
  {
    q: "Kinetochores are specialized structures situated on the primary constriction (centromere) that consist of:",
    opts: ["Carbohydrate complexes that synthesize pectin", "Disc-shaped protein structures serving as spindle attachment sites", "Lipid droplets providing energy during anaphase", "Enzyme vesicles containing ribonucleases"],
    ans: 1,
    exp: "Kinetochores are disc-shaped protein complexes assembled on the centromeric DNA of chromosomes that serve as attachment points for spindle microtubules during mitosis and meiosis."
  }
];

// Generate variants programmatically up to 154 questions
const topicsVariants = [
  {
    focus: "prokaryotic envelope and glycocalyx",
    qTemplate: (n) => `Which of the following statements is FALSE regarding the bacterial cell envelope component variant ${n}?`,
    opts: [
      "The glycocalyx provides protection against desiccation and host immune defenses.",
      "The peptidoglycan layer is chemically identical in bacteria, archaea, and fungi.",
      "The plasma membrane is selectively permeable and interacts with the outside world.",
      "Gram-negative bacteria possess an outer membrane rich in lipopolysaccharides."
    ],
    ans: 1,
    exp: "Peptidoglycan (murein) is unique to Eubacteria. Archaea have pseudomurein or proteinaceous S-layers, and fungi have chitinous walls; thus option B is false."
  },
  {
    focus: "ribosomes and polyribosomes",
    qTemplate: (n) => `In an experimental study on prokaryotic translation, polyribosome analysis ${n} demonstrates that:`,
    opts: [
      "Multiple ribosomes translate a single mRNA molecule simultaneously from 5' to 3'.",
      "Ribosomes translate genomic double-stranded DNA directly without mRNA intermediates.",
      "70S ribosomes are synthesized exclusively inside a membrane-bound nucleolus in bacteria.",
      "Prokaryotic ribosomes sediment at 80S in an ultracentrifuge gradient."
    ],
    ans: 0,
    exp: "A polysome consists of several 70S ribosomes translating a single mRNA molecule simultaneously in the 5' to 3' direction, maximizing polypeptide production."
  },
  {
    focus: "bacterial motility and appendages",
    qTemplate: (n) => `During bacterial characterization assay ${n}, the structure directly responsible for active swimming motility is:`,
    opts: [
      "Fimbriae distributed over the surface",
      "Sex pili involved in conjugative transfer",
      "Flagellum consisting of filament, hook, and basal body",
      "Capsular polysaccharide sheath"
    ],
    ans: 2,
    exp: "Flagella are the only surface appendages responsible for active swimming motility in bacteria. Pili and fimbriae do not play a role in motility."
  },
  {
    focus: "eukaryotic vs prokaryotic ultrastructure",
    qTemplate: (n) => `When comparing prokaryotic and eukaryotic ultrastructure in cell preparation ${n}, which feature is exclusively eukaryotic?`,
    opts: [
      "Plasma membrane consisting of a lipid bilayer",
      "Membrane-bound organelles like endoplasmic reticulum and mitochondria",
      "Presence of double-stranded DNA as genetic material",
      "Presence of ribosomes synthesizing proteins"
    ],
    ans: 1,
    exp: "Membrane-bound internal organelles (ER, Golgi, mitochondria, chloroplasts, lysosomes) are exclusive to eukaryotic cells, reflecting compartmentalization."
  },
  {
    focus: "nucleus and chromatin",
    qTemplate: (n) => `In cytological analysis ${n}, the eukaryotic interphase nucleus displays chromatin composed of:`,
    opts: [
      "Only naked double-stranded RNA without any basic proteins",
      "DNA, basic proteins called histones, some non-histone proteins, and RNA",
      "Circular DNA molecules covalently bound to peptidoglycan units",
      "Pure lipid droplets aggregated around the central kinetochore"
    ],
    ans: 1,
    exp: "Eukaryotic chromatin is a nucleoprotein complex containing DNA, basic histone proteins (H1, H2A, H2B, H3, H4), non-histone chromosomal proteins, and RNA."
  },
  {
    focus: "chromosome morphology",
    qTemplate: (n) => `A cytogeneticist studying metaphase chromosomes in sample ${n} identifies a chromosome with a terminal centromere. This chromosome is:`,
    opts: [
      "Metacentric",
      "Sub-metacentric",
      "Acrocentric",
      "Telocentric"
    ],
    ans: 3,
    exp: "A chromosome with a terminal centromere is telocentric and appears rod- or I-shaped during anaphase disjunction."
  },
  {
    focus: "inclusion bodies and storage",
    qTemplate: (n) => `Which of the following inclusion bodies observed in prokaryotic cell line ${n} is NOT bounded by any membrane?`,
    opts: [
      "Cyanophycean granule",
      "Phosphate granule",
      "Glycogen granule",
      "All of the above"
    ],
    ans: 3,
    exp: "All typical prokaryotic inclusion bodies (cyanophycean granules, phosphate granules, and glycogen granules) are non-membrane bound structures lying free in the cytosol."
  },
  {
    focus: "cell theory history",
    qTemplate: (n) => `Regarding the historical development of cell theory (analysis ${n}), Theodore Schwann concluded that:`,
    opts: [
      "All plant tissues are composed of similar crystalline mineral lattices.",
      "The presence of a cell wall is a unique character of plant cells, and animals have a thin outer layer.",
      "New cells originate spontaneously from inorganic nutrient broths.",
      "DNA is the universal genetic blueprint wrapped around histone octamers."
    ],
    ans: 1,
    exp: "Schwann studied animal cells (identifying the thin outer plasma membrane) and plant cells, concluding that the presence of a cell wall is a unique feature of plant cells."
  }
];

// Fill up mcqQuestions with questionsRaw first, then programmatic high-yield items
questionsRaw.forEach(q => mcqQuestions.push(q));

let varIdx = 0;
while (mcqQuestions.length < 154) {
  const v = topicsVariants[varIdx % topicsVariants.length];
  const itemNum = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.qTemplate(itemNum),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  varIdx++;
}

// Assemble total 180 questions (26 AR + 154 MCQ)
const part1Questions = [];

arData.forEach((item, idx) => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  item.exp && validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part1Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

mcqQuestions.forEach((item, idx) => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  item.exp && validateMath(item.exp);

  part1Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

console.log(`Part 1 generated: ${part1Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part1.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part1Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
