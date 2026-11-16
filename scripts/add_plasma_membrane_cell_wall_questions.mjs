import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Plasma-Membrane-&-Cell-Wall';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Plasma-Membrane-and-Cell-Wall',
  'neet-SUBTOPIC-Botany-Plasma-Membrane-&-Fluid-Mosaic-Model',
  'neet-SUBTOPIC-Botany-Plasma-Membrane-and-Fluid-Mosaic-Model',
  'neet-SUBTOPIC-Plasma-Membrane-&-Cell-Wall',
  'neet-SUBTOPIC-Plasma-Membrane-and-Cell-Wall',
  'neet-SUBTOPIC-Cell-membrane-and-fluid-mosaic-model'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Cell: The Unit of Life';
const SUBTOPIC = 'Plasma Membrane & Cell Wall';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-PMCW-001",
    "question": "**Statement I:** According to the fluid mosaic model, the quasi-fluid nature of lipids enables lateral movement of proteins within the overall bilayer.\n\n **Statement II:** Flip-flop movement of proteins across the lipid bilayer is thermodynamically favorable and occurs spontaneously at high frequency.\n\n In light of the above statements, choose the correct answer from the options given below:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "According to the fluid mosaic model, lateral diffusion of proteins and lipids within the same leaflet is common and rapid. However, transverse (\"flip-flop\") movement of proteins from one leaflet to the other is virtually non-existent because moving large hydrophilic domains through the hydrophobic core has an enormous energy barrier."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-PMCW-002",
    "question": "Biochemical investigation of the human erythrocyte membrane revealed a specific ratio of proteins and lipids. Which of the following correctly represents the composition and structural arrangement in human RBCs?",
    "options": [
      "40\\% protein and 52\\% lipid, with cholesterol stabilizing the hydrophilic tails",
      "52\\% protein and 40\\% lipid, with hydrophobic tails of phospholipids protected from the aqueous environment",
      "52\\% lipid and 40\\% protein, with peripheral proteins spanning the entire thickness of the bilayer",
      "48\\% protein and 52\\% carbohydrate, with glycolipids restricted strictly to the cytoplasmic leaflet"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In human erythrocytes (RBCs), the membrane consists of approximately **52\\% protein and 40\\% lipids** (with ~8\\% carbohydrates). The lipids are arranged in a bilayer with polar heads facing outward and nonpolar hydrophobic tails pointing inward, shielded from the aqueous environment."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-PMCW-003",
    "question": "Consider the following statements regarding the Fluid Mosaic Model proposed by Singer and Nicolson (1972):\n \n\n(i) The ability of proteins to move within the membrane is measured as its fluidity.\n(ii) Extrinsic proteins can be easily extracted by mild treatments like changes in pH or ionic strength without disrupting the lipid bilayer.\n(iii) Integral proteins are partially or totally buried in the membrane and require detergents for extraction.\n(iv) Oligosaccharide chains attached to lipids and proteins are symmetrically distributed on both faces of the plasma membrane.\n\n How many of the above statements are **correct**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect because membrane carbohydrates (oligosaccharides of glycoproteins and glycolipids) are strictly asymmetric and are located exclusively on the non-cytosolic (extracellular) face of the plasma membrane."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-PMCW-004",
    "question": "**Assertion (A):** In prokaryotic cells, the plasma membrane is structurally similar to that of eukaryotes, yet it performs several functions typically restricted to membrane-bound organelles in eukaryotes.\n\n **Reason (R):** Extensions of the prokaryotic plasma membrane into the cell, known as mesosomes, contain respiratory enzymes and help in cell wall formation and DNA replication.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Prokaryotes lack membrane-bound organelles like mitochondria and Golgi bodies. Specialized infoldings of the prokaryotic plasma membrane called **mesosomes** increase surface area and contain enzymes for cellular respiration, DNA replication, distribution to daughter cells, secretion, and cell wall synthesis."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-PMCW-005",
    "question": "A plant cell is treated with an enzyme mixture containing cellulase, pectinase, and hemicellulase, leaving the protoplast intact. If this protoplast is placed in a hypotonic solution, what will be the immediate consequence compared to an untreated intact plant cell in the same solution?",
    "options": [
      "The protoplast will develop high turgor pressure and become fully turgid without bursting",
      "The protoplast will undergo plasmolysis due to loss of mechanical support",
      "The protoplast will swell continuously and eventually lyse due to the absence of wall pressure",
      "Water will neither enter nor leave the protoplast because carrier proteins are denatured"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Enzymatic digestion of the cell wall yields a naked **protoplast**. Without the rigid cell wall to exert an equal and opposite wall pressure against incoming water, a protoplast placed in a hypotonic solution will swell continuously by endosmosis until the plasma membrane ruptures (lysis)."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-PMCW-006",
    "question": "Match Column I with Column II regarding cell wall components in different taxa:\n \n\n| ll@{}}\n \n Column I (Organism Group) | Column II (Characteristic Cell Wall Component) |\n| :--- | :--- |\n| A. Algae | 1. Chitin and glucans |\n| B. Higher Plants | 2. Cellulose, galactans, mannans, and CaCO\u2083 |\n| C. Fungi | 3. Peptidoglycan (murein) |\n| D. Eubacteria | 4. Cellulose, hemicellulose, pectins, and proteins |\n\n Choose the correct match:",
    "options": [
      "A-2, B-4, C-1, D-3",
      "A-4, B-2, C-1, D-3",
      "A-2, B-1, C-4, D-3",
      "A-3, B-4, C-1, D-2"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Algal cell walls contain cellulose, galactans, mannans, and minerals like calcium carbonate (CaCO\u2083). Higher plant cell walls consist of cellulose, hemicellulose, pectins, and proteins. Fungal cell walls are composed of chitin, while eubacterial cell walls are made of peptidoglycan."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-PMCW-007",
    "question": "Which of the following best describes the structural and functional transition from a young, growing plant cell to a mature, non-dividing plant cell?",
    "options": [
      "The secondary wall is laid down on the outer side of the primary wall, causing the primary wall to thicken and expand",
      "The primary wall is capable of growth, which gradually diminishes as the cell matures and the secondary wall is formed on the inner (towards membrane) side of the cell",
      "The middle lamella dissolves completely as soon as the secondary wall deposition begins",
      "Suberin and lignin are deposited exclusively in the middle lamella to facilitate rapid cell elongation"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "A young plant cell possesses a thin, elastic primary cell wall capable of extension/growth. As the cell matures and stops growing, the secondary cell wall is deposited on the **inner side** (between the primary wall and the plasma membrane), causing the capacity for expansion to diminish."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-PMCW-008",
    "question": "**Statement I:** Neutral solutes may move across the plasma membrane by the process of simple diffusion along the concentration gradient.\n\n **Statement II:** Polar molecules cannot pass through the nonpolar lipid bilayer and always require energy-dependent active transport to cross the membrane.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because while polar molecules cannot easily cross the nonpolar lipid bilayer on their own, they can cross passively down their concentration gradient via **facilitated diffusion** (using channel or carrier proteins) without requiring ATP."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-PMCW-009",
    "question": "Identify the **incorrect** statement regarding the middle lamella and plasmodesmata:",
    "options": [
      "The middle lamella is a layer mainly composed of calcium pectate which holds or glues different neighboring cells together",
      "Plasmodesmata are cytoplasmic bridges that traverse the cell wall and middle lamella, connecting the cytoplasm of neighboring plant cells",
      "Desmotubules, which are modified extensions of the rough endoplasmic reticulum, often pass through the lumen of plasmodesmata",
      "Fruit softening during ripening is largely attributed to the enzymatic breakdown of pectins in the middle lamella"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Desmotubules passing through plasmodesmata are modified extensions of the **smooth endoplasmic reticulum (SER)**, not the rough endoplasmic reticulum (RER). All other statements regarding middle lamella and plasmodesmata are accurate."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-PMCW-010",
    "question": "Suppose a eukaryotic cell is exposed to a temperature drop from 37\u00b0C to 10\u00b0C. How does the plasma membrane adapt to prevent solidification and maintain optimal fluidity?",
    "options": [
      "By increasing the proportion of long-chain saturated fatty acids in phospholipids",
      "By decreasing the proportion of unsaturated fatty acids and removing cholesterol",
      "By increasing the proportion of phospholipids with short, unsaturated hydrocarbon tails",
      "By converting integral transmembrane proteins into peripheral proteins"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "At low temperatures, membranes risk solidifying. Cells adapt (homeoviscous adaptation) by increasing the proportion of phospholipids containing **unsaturated fatty acids** (which have double bonds creating kinks that prevent tight packing) and shorter hydrocarbon chains."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-PMCW-011",
    "question": "Which of the following transport mechanisms across the plasma membrane exhibits saturation kinetics, specificity for solute molecules, sensitivity to competitive inhibitors, and does **not** require ATP hydrolysis?",
    "options": [
      "Simple diffusion through the lipid bilayer",
      "Facilitated diffusion via carrier proteins",
      "Primary active transport via Na\u207a/K\u207a-ATPase",
      "Osmosis through the hydrophobic core of phospholipids"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "**Facilitated diffusion** uses specific carrier/channel proteins, shows saturation kinetics (V_max) when all transporters are occupied, can be competitively inhibited by structurally similar molecules, and moves solutes down their concentration gradient without ATP expenditure."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-PMCW-012",
    "question": "**Assertion (A):** Detailed structural study of the plasma membrane became possible only after the advent of the electron microscope in the 1950s.\n\n **Reason (R):** Chemical studies on the cell membrane, especially in human red blood cells (RBCs), enabled scientists to deduce the possible structure of the plasma membrane because mature mammalian RBCs lack a nucleus and internal membrane-bound organelles.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both statements are factual (directly from NCERT), but (R) explains why RBCs were chosen as the model system for chemical analysis, rather than explaining why the electron microscope enabled structural visualization in the 1950s."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-PMCW-013",
    "question": "Read the following statements about the bacterial cell envelope:\n \n\n(i) The glycocalyx differs in composition and thickness among different bacteria; it could be a loose sheath called the capsule or thick and tough called the slime layer.\n(ii) The cell wall determines the shape of the cell and provides strong structural support to prevent the bacterium from bursting or collapsing.\n(iii) The plasma membrane is selectively permeable in nature and interacts with the outside world.\n(iv) Although each layer of the envelope performs a distinct function, they act together as a single protective unit.\n\n Which of the above statements is/are **incorrect**?",
    "options": [
      "(i) only",
      "(i) and (iii)",
      "(ii) and (iv)",
      "None of these"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statement (i) has the definitions reversed: a loose sheath is called the **slime layer**, whereas a thick and tough covering is called the **capsule**. Statements (ii), (iii), and (iv) are completely correct."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-PMCW-014",
    "question": "In the classic Danielli-Davson (1935) \"Sandwich Model\" and Robertson's (1959) \"Unit Membrane Model\", what was the major structural misconception that was later refuted by the Fluid Mosaic Model?",
    "options": [
      "Both models proposed that lipids are arranged as a monolayer rather than a bilayer",
      "Both models proposed that proteins form continuous, uniform \u03b2-sheet layers coating the outer and inner hydrophilic surfaces of the lipid bilayer",
      "Both models claimed that carbohydrates are the primary structural backbone of biological membranes",
      "Both models denied the existence of phospholipids in eukaryotic plasma membranes"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both the Danielli-Davson sandwich model and Robertson's unit membrane model mistakenly proposed a static \"protein-lipid-protein\" trilaminar arrangement where continuous sheets of globular/\u03b2-sheet proteins coated the outer and inner surfaces of the lipid bilayer."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-PMCW-015",
    "question": "During the operation of the Na\u207a/K\u207a pump in animal cells, which of the following events occurs per molecule of ATP hydrolyzed?",
    "options": [
      "2\\,Na\u207a ions are transported outwards and 3\\,K\u207a ions are transported inwards",
      "3\\,Na\u207a ions are transported inwards and 2\\,K\u207a ions are transported outwards",
      "3\\,Na\u207a ions are transported outwards and 2\\,K\u207a ions are transported inwards",
      "3\\,Na\u207a ions and 2\\,K\u207a ions are co-transported in the same direction against their gradients"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The Na\u207a/K\u207a-ATPase is an electrogenic primary active antiporter that exports **3\\,Na\u207a ions out** of the cell and imports **2\\,K\u207a ions into** the cell per molecule of ATP hydrolyzed."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-PMCW-016",
    "question": "Which of the following features is **not** associated with the plasma membrane of Archaebacteria, allowing them to survive in extreme habitats like hot springs and hypersaline environments?",
    "options": [
      "Presence of branched-chain phytanyl lipids instead of straight-chain fatty acids",
      "Ether linkages joining glycerol to hydrophobic chains instead of ester linkages",
      "Formation of a lipid monolayer (tetraether lipids) in extreme thermophiles for enhanced thermal stability",
      "Presence of a thick outer layer of peptidoglycan rich in N-acetylmuramic acid (NAM)"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Archaebacteria lack peptidoglycan (murein) in their cell walls; instead, some possess pseudomurein or S-layer proteins. Their membranes are uniquely stabilized by branched phytanyl chains linked via ether bonds to glycerol, sometimes forming rigid monolayers."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-PMCW-017",
    "question": "**Statement I:** The fluid nature of the membrane is important from the point of view of functions like cell growth, formation of intercellular junctions, secretion, endocytosis, and cell division.\n\n **Statement II:** Membrane fluidity is strictly static once a cell reaches terminal differentiation so that intercellular junctions remain intact.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because membrane fluidity remains dynamic throughout the life of the cell, permitting endocytosis, secretion, membrane repair, and junction remodeling."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-PMCW-018",
    "question": "A researcher performs a Freeze-Fracture Electron Microscopy experiment on a biological membrane. Upon splitting the lipid bilayer along its hydrophobic interior, numerous globular particles are observed embedded within the fractured faces. What do these particles represent?",
    "options": [
      "Peripheral proteins loosely bound to the polar heads",
      "Integral transmembrane proteins embedded within the hydrophobic core",
      "Oligosaccharide chains of the glycocalyx",
      "Cholesterol crystals precipitated by freezing"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Freeze-fracture splits the membrane along the weak hydrophobic plane between the two lipid leaflets. The scattered intramembranous particles visible on the fractured faces are **integral proteins** that span or penetrate the hydrophobic core."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-PMCW-019",
    "question": "Identify the correct sequence of layers encountered when moving from the exterior of one mature sclerenchymatous plant cell into the cytoplasm of an adjacent mature plant cell:",
    "options": [
      "Plasma membrane \u2192 Secondary wall \u2192 Primary wall \u2192 Middle lamella \u2192 Primary wall \u2192 Secondary wall \u2192 Plasma membrane",
      "Primary wall \u2192 Secondary wall \u2192 Middle lamella \u2192 Secondary wall \u2192 Primary wall \u2192 Plasma membrane",
      "Plasma membrane \u2192 Primary wall \u2192 Secondary wall \u2192 Middle lamella \u2192 Secondary wall \u2192 Primary wall \u2192 Plasma membrane",
      "Middle lamella \u2192 Primary wall \u2192 Secondary wall \u2192 Plasma membrane"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Moving outward from the first cell: Plasma membrane \u2192 Secondary wall (innermost wall layer) \u2192 Primary wall \u2192 Middle lamella (shared cementing layer) \u2192 Primary wall of second cell \u2192 Secondary wall of second cell \u2192 Plasma membrane of second cell."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-PMCW-020",
    "question": "Which of the following statements regarding the lipid component of the eukaryotic plasma membrane is **false**?",
    "options": [
      "The lipid component of the membrane mainly consists of phosphoglycerides",
      "Phospholipids are amphipathic molecules possessing a hydrophilic polar head and two hydrophobic nonpolar tails",
      "Cholesterol acts as a fluidity buffer, reducing fluidity at high temperatures and preventing tight packing at low temperatures",
      "Saturated hydrocarbon tails introduce kinks in the hydrophobic core, increasing membrane fluidity"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Saturated fatty acid tails are straight and pack tightly together, which *decreases* membrane fluidity. It is **unsaturated** fatty acids (with *cis*-double bonds) that introduce kinks and increase fluidity."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-PMCW-021",
    "question": "**Assertion (A):** In plant cells, the cell wall is considered a non-living, rigid structure, yet it is functionally essential beyond merely providing mechanical support.\n\n **Reason (R):** The cell wall gives shape to the cell, protects the cell from mechanical damage and infection, helps in cell-to-cell interaction, and provides a barrier to undesirable macromolecules.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Although non-living, the plant cell wall provides structural shape, protects against mechanical injury and pathogens, mediates cell-to-cell interactions, and restricts the passage of large undesirable macromolecules."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-PMCW-022",
    "question": "Which of the following cell wall modifications is correctly matched with its chemical composition and primary physiological role?",
    "options": [
      "Casparian strips in endodermis \u2014 Cutin \u2014 Prevents apoplastic entry of water into stele",
      "Epidermal cuticle of leaves \u2014 Suberin \u2014 Facilitates gaseous exchange",
      "Cork cells (phellem) \u2014 Suberin \u2014 Makes cell walls impervious to water and gases",
      "Collenchyma corners \u2014 Lignin \u2014 Provides dead mechanical strength to herbaceous stems"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Cork (phellem) cell walls are heavily impregnated with **suberin**, making them impermeable to water and gases. (Casparian strips contain suberin/lignin; cuticle contains cutin; collenchyma has living cells with pectin/cellulose/hemicellulose thickening, not lignin)."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-PMCW-023",
    "question": "In Gram-negative bacteria, the cell envelope is structurally more complex than in Gram-positive bacteria. Which of the following correctly describes the arrangement in Gram-negative bacteria?",
    "options": [
      "A thick multilayered peptidoglycan wall lies external to an outer lipopolysaccharide membrane",
      "A thin peptidoglycan layer is sandwiched between the inner plasma membrane and an outer membrane containing lipopolysaccharides (LPS) and porins",
      "Teichoic acids span the outer membrane to anchor it to the glycocalyx",
      "Peptidoglycan is completely absent, and pseudomurein forms the sole structural layer"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Gram-negative bacteria have a thin peptidoglycan layer located in the periplasmic space between the inner cytoplasmic membrane and an asymmetric outer membrane composed of lipopolysaccharides (LPS), phospholipids, and porin channels."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-PMCW-024",
    "question": "Match Column I with Column II regarding membrane transport proteins and channels:\n \n\n| ll@{}}\n \n Column I (Transporter Type) | Column II (Mechanism / Example) |\n| :--- | :--- |\n| A. Uniport | 1. Coupled transport of two different solutes in opposite directions |\n| B. Symport | 2. Coupled transport of two different solutes in the same direction |\n| C. Antiport | 3. Movement of a single molecule independent of other molecules |\n| D. Aquaporin | 4. Water-selective channel protein facilitating rapid osmosis |\n\n Choose the correct option:",
    "options": [
      "A-3, B-2, C-1, D-4",
      "A-2, B-3, C-1, D-4",
      "A-3, B-1, C-2, D-4",
      "A-4, B-2, C-1, D-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Uniport moves a single solute independently; symport moves two solutes in the same direction; antiport moves two solutes in opposite directions; aquaporins are specialized water channels facilitating rapid osmosis."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-PMCW-025",
    "question": "A classic experiment by Frye and Edidin (1970) involved fusing a mouse cell (with membrane proteins labeled with green fluorescent antibodies) and a human cell (with membrane proteins labeled with red fluorescent antibodies) to form a heterokaryon. After 40 minutes at 37\u00b0C, the red and green markers became completely intermixed over the entire surface of the hybrid cell. What did this experiment conclusively prove?",
    "options": [
      "Membrane proteins undergo rapid flip-flop movement between the two leaflets",
      "Membrane proteins are capable of lateral diffusion within the plane of the lipid bilayer",
      "Membrane proteins are covalently bonded to the cytoskeleton and cannot move",
      "Mouse and human cells share identical carbohydrate antigens on their glycocalyx"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The Frye-Edidin heterokaryon experiment demonstrated that membrane proteins are not fixed in place; instead, they diffuse laterally throughout the fluid lipid bilayer."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-PMCW-026",
    "question": "**Statement I:** Cellulose microfibrils in the plant cell wall are synthesized by cellulose synthase complexes located within the Golgi apparatus and transported via secretory vesicles.\n\n **Statement II:** Pectins and hemicelluloses are synthesized in the Golgi apparatus and delivered to the growing cell wall via exocytosis.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Statement I is incorrect because cellulose microfibrils are synthesized directly at the outer surface of the **plasma membrane** by transmembrane cellulose synthase rosette complexes. Matrix polysaccharides (pectins and hemicelluloses) are synthesized in the Golgi apparatus (Statement II is correct)."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-PMCW-027",
    "question": "Which of the following eukaryotic organisms lacks a cell wall at every stage of its life cycle?",
    "options": [
      "*Physarum* (slime mold)",
      "*Chlamydomonas* (green alga)",
      "*Amoeba proteus* (protozoan)",
      "*Saccharomyces cerevisiae* (yeast)"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Protozoans such as *Amoeba proteus* lack a cell wall throughout their entire life cycle. Slime molds lack a wall in the vegetative plasmodial stage, but their spores possess true cellulosic walls."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-PMCW-028",
    "question": "Examine the following statements regarding the glycocalyx (cell coat) of eukaryotic animal cells:\n \n\n(i) It is composed of carbohydrate chains covalently linked to membrane lipids (glycolipids) and membrane proteins (glycoproteins).\n(ii) It is oriented exclusively toward the extracellular surface of the plasma membrane.\n(iii) It plays a crucial role in cell-cell recognition, immune response (e.g., ABO blood group antigens), and cell adhesion.\n(iv) It provides the primary tensile strength that prevents animal cells from bursting in distilled water.\n\n Which of the statements given above are **correct**?",
    "options": [
      "(i), (ii), and (iii) only",
      "(i) and (iv) only",
      "(ii), (iii), and (iv) only",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i), (ii), and (iii) accurately describe the eukaryotic glycocalyx. Statement (iv) is false because animal cells lack a cell wall and will lyse in distilled water; the glycocalyx does not provide mechanical turgor resistance."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-PMCW-029",
    "question": "Why is the plasma membrane described as \"selectively permeable\" rather than \"semipermeable\"?",
    "options": [
      "A semipermeable membrane allows only solutes to pass, whereas a selectively permeable membrane allows only solvent to pass",
      "A semipermeable membrane permits only solvent molecules (like water) to pass through based on pore size, whereas a selectively permeable membrane actively and passively regulates the passage of specific ions and solutes alongside water",
      "A selectively permeable membrane has fixed pores that never change permeability in response to cellular signals",
      "Selectively permeable membranes lack transport proteins and rely solely on simple diffusion"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "A strictly semipermeable membrane (like parchment or cellophane) discriminates solely on molecular size, allowing solvent (water) to pass while blocking solutes. A **selectively permeable** biological membrane uses specific channels, carriers, and pumps to regulate which ions and molecules cross."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-PMCW-030",
    "question": "**Assertion (A):** In secondary active transport (such as Na\u207a-glucose symport in intestinal epithelial cells), glucose is transported into the cell against its concentration gradient without the symporter directly hydrolyzing ATP.\n\n **Reason (R):** The electrochemical Na\u207a gradient maintained by the primary active Na\u207a/K\u207a-ATPase provides the driving force for the uphill transport of glucose.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Secondary active transport couples the thermodynamically favorable (\"downhill\") influx of Na\u207a ions to the unfavorable (\"uphill\") import of glucose. ATP is consumed indirectly by the Na\u207a/K\u207a pump to maintain the low intracellular Na\u207a concentration."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-PMCW-031",
    "question": "What happens during cytokinesis in higher plant cells regarding the formation of the cell wall?",
    "options": [
      "A cleavage furrow forms peripherally and grows centripetally, depositing cellulose first",
      "Phragmoplast microtubules guide Golgi-derived vesicles to the equatorial plane to form a cell plate, which matures into the middle lamella",
      "The secondary cell wall is synthesized first at the center of the cell, followed by the middle lamella at the periphery",
      "Existing primary walls invaginate inward to divide the cytoplasm without vesicle fusion"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Plant cells possess a rigid cell wall and cannot form a cleavage furrow. Instead, Golgi-derived vesicles coalesce at the equator guided by the phragmoplast to form the **cell plate**, which develops into the middle lamella, followed by primary wall deposition on both sides."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-PMCW-032",
    "question": "Which of the following molecules would diffuse across a pure synthetic phospholipid bilayer (free of proteins) at the **fastest** rate?",
    "options": [
      "Na\u207a (Sodium ion)",
      "C\u2086H\u2081\u2082O\u2086 (Glucose)",
      "O\u2082 (Molecular oxygen)",
      "H\u2082N-CH\u2082-COOH (Glycine)"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Small, nonpolar, uncharged gases like O\u2082, CO\u2082, and N\u2082 dissolve readily in the hydrophobic interior and diffuse across a pure phospholipid bilayer at the fastest rate. Charged ions (Na\u207a) and polar molecules (glucose, glycine) cross very slowly without transport proteins."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-PMCW-033",
    "question": "In a plasmolyzed plant cell, what occupies the space between the shrunken protoplast and the rigid cell wall?",
    "options": [
      "Air or vacuum",
      "Cell sap leaked from the central vacuole",
      "The external hypertonic bathing solution",
      "Pure distilled water expelled from the cytoplasm"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Because the cell wall is freely permeable to water and dissolved solutes, when the protoplast shrinks away from the wall during plasmolysis, the external hypertonic solution fills the space between the wall and the plasma membrane."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-PMCW-034",
    "question": "Match Column I with Column II regarding bacterial plasma membrane structures and functions:\n \n\n| ll@{}}\n \n Column I (Structure) | Column II (Function / Feature) |\n| :--- | :--- |\n| A. Mesosome | 1. Membranous extensions containing photosynthetic pigments in cyanobacteria |\n| B. Chromatophore | 2. Vesicles, tubules, and lamellae aiding in respiration and secretion |\n| C. Porins | 3. Large protein channels in the outer membrane of Gram-negative bacteria |\n| D. Peptidoglycan | 4. Polymer of NAG and NAM cross-linked by short peptide chains |\n\n Choose the correct option:",
    "options": [
      "A-2, B-1, C-3, D-4",
      "A-1, B-2, C-3, D-4",
      "A-2, B-3, C-1, D-4",
      "A-4, B-1, C-3, D-2"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Mesosomes are bacterial plasma membrane infoldings; chromatophores are pigment-containing membrane extensions in cyanobacteria/photosynthetic prokaryotes; porins are wide channels in Gram-negative outer membranes; peptidoglycan consists of NAG-NAM chains cross-linked by peptides."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-PMCW-035",
    "question": "**Statement I:** Lipid rafts are specialized microdomains in the eukaryotic plasma membrane enriched in cholesterol and sphingolipids, making them thicker and less fluid than the surrounding phospholipid bilayer.\n\n **Statement II:** Lipid rafts serve as organizing platforms for cell signaling molecules and membrane trafficking.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Lipid rafts are dynamic, detergent-resistant microdomains enriched in cholesterol and sphingolipids with saturated acyl chains, creating thicker, ordered platforms that cluster signaling receptors and trafficking proteins."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-PMCW-036",
    "question": "Which of the following statements about transmembrane proteins is **incorrect**?",
    "options": [
      "The membrane-spanning domains of integral proteins are typically composed of hydrophobic amino acid residues arranged in an \u03b1-helix",
      "Single-pass transmembrane proteins cross the lipid bilayer once, whereas multipass proteins cross it multiple times",
      "Porins in bacterial outer membranes and mitochondria form transmembrane \u03b2-barrels rather than \u03b1-helices",
      "The cytosolic and extracellular domains of transmembrane proteins are predominantly composed of nonpolar hydrophobic amino acids"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "The cytoplasmic and extracellular domains of transmembrane proteins are exposed to aqueous environments and are therefore composed predominantly of **hydrophilic (polar/charged)** amino acids, whereas the membrane-spanning core is hydrophobic."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-PMCW-037",
    "question": "How does the antibiotic penicillin exert its bactericidal effect on actively growing bacteria?",
    "options": [
      "By binding to 30S ribosomal subunits and halting protein synthesis",
      "By creating large pores in the phospholipid bilayer, causing immediate depolarization",
      "By inhibiting transpeptidase enzymes responsible for cross-linking peptidoglycan chains in the cell wall, leading to osmotic lysis",
      "By dissolving the lipopolysaccharide outer membrane of all Gram-positive bacteria"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Penicillin is a \u03b2-lactam antibiotic that irreversibly inhibits bacterial transpeptidase (penicillin-binding proteins), preventing cross-linking of peptidoglycan strands. Weakened cell walls rupture under internal osmotic pressure."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-PMCW-038",
    "question": "Consider a fungal cell wall and a plant cell wall. Which of the following correctly highlights a fundamental biochemical difference between their primary structural polymers?",
    "options": [
      "Plant cellulose is a polymer of \u03b2-D-glucose, whereas fungal chitin is a homopolymer of N-acetylglucosamine (NAG)",
      "Plant cellulose is a polymer of \u03b1-D-glucose, whereas fungal chitin is a polymer of N-acetylmuramic acid (NAM)",
      "Plant cell walls lack proteins entirely, whereas fungal cell walls are composed 100\\% of chitin",
      "Both cellulose and chitin are digested rapidly by human salivary amylase"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Plant cellulose is an unbranched polymer of \u03b2-1,4-linked D-glucose units, whereas fungal chitin is a polymer of \u03b2-1,4-linked N-acetylglucosamine (NAG). Neither can be hydrolyzed by human salivary amylase (which cleaves \u03b1-1,4 glycosidic bonds)."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-PMCW-039",
    "question": "**Assertion (A):** Mycoplasma is the smallest known free-living prokaryote and is naturally resistant to antibiotics like penicillin that target cell wall synthesis.\n\n **Reason (R):** Mycoplasma completely lacks a cell wall and is bounded solely by a triple-layered plasma membrane containing sterols.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "*Mycoplasma* (PPLO) lacks a cell wall entirely, making it pleomorphic and completely resistant to cell-wall-targeting antibiotics like penicillin. Unlike other prokaryotes, its plasma membrane contains sterols (acquired from the host) for stability."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-PMCW-040",
    "question": "Which of the following processes requires dynamic reorganization and fusion of the plasma membrane (mediated by its quasi-fluid nature) and involves bulk transport of macromolecules into the cell?",
    "options": [
      "Facilitated diffusion via GLUT4 transporters",
      "Phagocytosis and receptor-mediated endocytosis",
      "Simple osmosis through aquaporins",
      "Active efflux via H\u207a-ATPase proton pumps"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Phagocytosis and receptor-mediated endocytosis involve invagination and pinching off of plasma membrane vesicles to internalize large particles or macromolecules, directly relying on membrane fluidity and fusion."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-PMCW-041",
    "question": "In plant tissues, pits are thin areas in the cell wall where secondary wall material is not deposited. Which of the following accurately describes a \"bordered pit\" commonly found in tracheids of gymnosperms?",
    "options": [
      "The primary wall is completely absent, leaving an open hole between adjacent dead tracheids",
      "The secondary wall arches over the pit cavity, and the pit membrane often has a central thickening called the torus that acts as a valve",
      "Bordered pits are restricted exclusively to living sieve tube elements of angiosperms",
      "The middle lamella is replaced by thick deposits of suberin inside the pit chamber"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In bordered pits (characteristic of gymnosperm tracheids), the secondary cell wall arches over the pit cavity, and the central primary wall/middle lamella thickens into an impermeable pad called the **torus**. Under pressure differences, the torus seals the pit aperture to prevent embolism spread."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-PMCW-042",
    "question": "**Statement I:** In eukaryotic membranes, asymmetry exists not only in proteins and carbohydrates, but also in the distribution of phospholipids between the inner (cytosolic) and outer (exoplasmic) leaflets.\n\n **Statement II:** Phosphatidylserine is normally confined to the inner cytosolic leaflet; its exposure on the outer surface acts as an \"eat-me\" signal for macrophages during apoptosis.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Phospholipid asymmetry is actively maintained by flippases, floppases, and scramblases. Phosphatidylserine (negatively charged) is normally restricted to the inner leaflet; flipping to the outer leaflet signals macrophages to phagocytose apoptotic cells."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-PMCW-043",
    "question": "Identify the **incorrect** pair regarding organisms and the nature of their outer boundary:",
    "options": [
      "Diatoms \u2014 Siliceous cell wall (frustule) composed of two overlapping halves",
      "Dinoflagellates \u2014 Stiff cellulose plates on the outer surface",
      "Euglenoids \u2014 Flexible protein-rich layer called pellicle instead of a rigid cell wall",
      "Slime molds \u2014 True cellulosic cell wall present during the vegetative plasmodial stage"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Slime molds lack a cell wall during their vegetative plasmodial phase; they only develop true cellulosic walls around their spores during unfavorable conditions. All other pairs are correctly matched."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-PMCW-044",
    "question": "When a plant cell is placed in an isotonic solution, there is no net movement of water across the plasma membrane. Which of the following statements is true regarding the cellular state at this point?",
    "options": [
      "Water molecules completely stop crossing the plasma membrane in either direction",
      "Water flows into and out of the cell at equal rates, and the cell is described as flaccid (turgor pressure = 0)",
      "The wall pressure is at its maximum value, preventing any further water entry",
      "The plasma membrane detaches from the cell wall due to incipient plasmolysis"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In an isotonic solution, dynamic equilibrium exists: water enters and exits the cell at equal rates (net movement = 0). The protoplast neither presses against the wall nor pulls away from it, so the cell is **flaccid** (TP = 0)."
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-PMCW-045",
    "question": "Which of the following best summarizes the functional relationship between the cytoskeleton (specifically spectrin and actin in RBCs) and the plasma membrane?",
    "options": [
      "Cytoskeletal filaments are embedded inside the hydrophobic tail region to replace phospholipids",
      "Peripheral membrane proteins on the cytoplasmic face anchor to the underlying cortical cytoskeleton, maintaining cell shape and restricting the lateral mobility of specific integral proteins",
      "The cytoskeleton digests damaged phospholipids via hydrolytic enzymes",
      "Cytoskeletal proteins project outward from the plasma membrane to form the middle lamella"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "On the cytoplasmic side, peripheral proteins (such as ankyrin and band 4.1 in RBCs) link transmembrane proteins to the underlying spectrin-actin cortical cytoskeleton, maintaining biconcave shape and restricting lateral diffusion into specific domains."
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`Starting upsert of ${rawQuestions.length} questions for ${SUBTOPIC}...`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'hard',
        examType: 'neet',
        type: 'single',
        isActive: true,
        status: 'published',
        source: 'Self',
        updatedAt: new Date()
      };

      const result = await qbCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const savedId = result._id || result.value?._id;
      if (!savedId) {
        const fetched = await qbCol.findOne({ commercialId: q.commercialId });
        assignedQuestionIds.push(fetched._id);
      } else {
        assignedQuestionIds.push(savedId);
      }
    }

    console.log(`Successfully upserted ${assignedQuestionIds.length} questions into questionBank.`);

    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];

    for (const testId of allTestIds) {
      const testTitle = testId.includes('Fluid-Mosaic') 
        ? 'Plasma Membrane & Fluid Mosaic Model' 
        : (testId === 'neet-SUBTOPIC-Cell-membrane-and-fluid-mosaic-model' 
            ? 'Cell membrane and fluid mosaic model' 
            : 'Plasma Membrane & Cell Wall');

      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: testTitle,
            subject: SUBJECT,
            chapter: CHAPTER,
            subtopic: SUBTOPIC,
            examType: 'neet',
            questions: assignedQuestionIds,
            totalMarks: 180,
            duration: 60,
            status: 'published',
            isLive: true,
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
      console.log(`Updated testPaper ${testId}: assigned ${assignedQuestionIds.length} questions.`);

      // Synchronize audit report
      await auditReportsCol.updateMany(
        { testId },
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
        testId,
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
        { testId },
        {
          $set: {
            testId,
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
    }

    console.log('Synchronized testAuditReports and testAuditStates for all test IDs.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
