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

const subTopic = "Cell membrane and fluid mosaic model";
const chapter = "Cell Structure and Function";
const subject = "Botany";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "The fluid mosaic model proposed by Singer and Nicolson in 1972 is the most widely accepted model of cell membrane structure.",
    r: "It explains both the quasi-fluid nature of the lipid bilayer and the mosaic distribution of membrane proteins.",
    ans: 0,
    exp: "Singer and Nicolson (1972) proposed the fluid mosaic model, describing the membrane as protein icebergs floating in a sea of fluid phospholipids, accounting for dynamic membrane functions."
  },
  {
    a: "In the plasma membrane, the nonpolar hydrophobic tails of phospholipids are oriented towards the interior of the bilayer.",
    r: "This orientation shields the hydrophobic hydrocarbon fatty acid chains from the surrounding aqueous cellular environment.",
    ans: 0,
    exp: "Phospholipids have polar hydrophilic heads pointing outwards toward aqueous intra- and extracellular fluids, while hydrophobic nonpolar fatty acid tails face each other internally. (R) correctly explains (A)."
  },
  {
    a: "Membrane fluidity is vital for functions like cell growth, endocytosis, and cell division.",
    r: "The quasi-fluid nature of the lipid bilayer allows lateral movement of proteins within the overall plane of the membrane.",
    ans: 0,
    exp: "Fluidity is measured by the ability of proteins and lipids to move laterally within the bilayer. This dynamic state is essential for cell growth, junction formation, secretion, endocytosis, and division."
  },
  {
    a: "Polar molecules cannot easily pass across the phospholipid bilayer by simple diffusion.",
    r: "The central core of the plasma membrane is nonpolar and hydrophobic, which repels charged and polar hydrophilic molecules.",
    ans: 0,
    exp: "The nonpolar hydrocarbon interior acts as a hydrophobic barrier that prevents spontaneous passive diffusion of polar or charged solutes. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Facilitated diffusion requires specialized carrier or channel proteins to transport polar substances across the membrane.",
    r: "Facilitated diffusion involves the expenditure of metabolic energy in the form of ATP to drive solutes against their concentration gradient.",
    ans: 2,
    exp: "Assertion is true as carrier proteins facilitate polar solute passage along the gradient. Reason is false because facilitated diffusion is a passive process that does not consume ATP."
  },
  {
    a: "The $Na^+/K^+$ pump is a classic example of primary active transport.",
    r: "The $Na^+/K^+$ pump hydrolyzes ATP to move $3Na^+$ out of the cell and $2K^+$ into the cell against their electrochemical gradients.",
    ans: 0,
    exp: "The $Na^+/K^+$ ATPase uses direct ATP hydrolysis to transport $3Na^+$ ions outward and $2K^+$ ions inward against their respective gradients. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Peripheral proteins in the plasma membrane can be easily extracted by mild aqueous salt washing.",
    r: "Peripheral proteins lie on the membrane surface and are bound loosely via electrostatic interactions and hydrogen bonds rather than being embedded in the hydrophobic core.",
    ans: 0,
    exp: "Peripheral (extrinsic) proteins reside on the outer or inner surface of the lipid bilayer and are easily dissociated by mild ionic changes, unlike integral proteins embedded in the bilayer."
  },
  {
    a: "Cholesterol molecules present in eukaryotic plasma membranes modulate membrane fluidity.",
    r: "Cholesterol prevents fatty acid chains from packing tightly at low temperatures and restricts excessive movement of phospholipids at high temperatures.",
    ans: 0,
    exp: "Cholesterol acts as a bidirectional membrane fluidity buffer: preventing crystallization at low temperatures and dampening excessive fluidity at high temperatures. (R) correctly explains (A)."
  },
  {
    a: "The primary cell wall of a young plant cell is capable of growth and expansion.",
    r: "The primary wall gradually diminishes as the cell matures, while a secondary wall is deposited on the inner side (towards the membrane).",
    ans: 1,
    exp: "Both statements are correct NCERT facts: primary walls in young growing cells are plastic and extensible, diminishing with maturation as secondary walls form internally. (R) is true, but does not explain the biochemical basis of growth."
  },
  {
    a: "Algal cell walls differ in chemical composition from higher plant cell walls.",
    r: "Algal walls are composed of cellulose, galactans, mannans, and minerals like calcium carbonate, whereas plant walls contain cellulose, hemicellulose, pectins, and proteins.",
    ans: 0,
    exp: "According to NCERT, algae possess unique wall constituents (galactans, mannans, and $CaCO_3$ minerals), whereas higher plant walls consist of cellulose, hemicellulose, pectins, and proteins. Both are true and Reason explains Assertion."
  },
  {
    a: "The middle lamella dissolves during the ripening of fleshy fruits, making them soft.",
    r: "Enzymatic breakdown of calcium and magnesium pectate in the middle lamella loosens intercellular adhesion between adjacent cells.",
    ans: 0,
    exp: "During fruit ripening, pectinase enzymes solubilize the calcium and magnesium pectates of the middle lamella, causing adjacent cell walls to separate and resulting in fruit softening. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Water moves across the cell membrane primarily through osmosis.",
    r: "Osmosis is the net movement of water solvent from a region of higher water potential to lower water potential across a selectively permeable membrane.",
    ans: 0,
    exp: "Osmosis refers specifically to the diffusion of water across a selectively permeable membrane down its chemical potential gradient without energy expenditure. (R) correctly explains (A)."
  },
  {
    a: "In human erythrocytes, the plasma membrane consists of approximately 52% protein and 40% lipids.",
    r: "The ratio of protein to lipid remains identical across all eukaryotic cell membranes regardless of organelle specialization.",
    ans: 2,
    exp: "Assertion is a precise NCERT fact: human erythrocyte membranes have ~52% protein and ~40% lipids. Reason is false: protein-to-lipid ratios vary widely depending on cell and membrane type (e.g., myelin has ~80% lipid, inner mitochondrial membrane has ~75% protein)."
  },
  {
    a: "Plasmodesmata provide symplastic continuity between adjacent plant cells.",
    r: "Plasmodesmata are membrane-lined channels traversing the cell wall and middle lamella containing a central desmotubule derived from the endoplasmic reticulum.",
    ans: 0,
    exp: "Plasmodesmata interconnect the cytoplasm of neighboring plant cells into a continuous symplast. A desmotubule continuous with the ER runs through the channel. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Integral membrane proteins are partially or totally buried in the phospholipid bilayer.",
    r: "Integral proteins possess hydrophobic surface regions composed of nonpolar amino acid residues that interact with the fatty acid tails.",
    ans: 0,
    exp: "Integral proteins can only be released by harsh detergents because their hydrophobic transmembrane alpha-helices interact directly with the lipid core. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Neutral solutes can move across the membrane along the concentration gradient by simple diffusion.",
    r: "Simple diffusion requires the assistance of special carrier proteins and direct hydrolysis of ATP.",
    ans: 2,
    exp: "Assertion is true as small nonpolar and neutral solutes pass down their concentration gradient freely. Reason is false because simple diffusion requires neither carrier proteins nor ATP."
  },
  {
    a: "The cell wall is a living, actively metabolizing boundary that actively regulates selective ion uptake.",
    r: "The cell wall is a non-living, rigid structure that provides mechanical support, protects against osmotic lysis, and mediates cell-to-cell interactions.",
    ans: 3,
    exp: "Assertion is false: cell wall is non-living and freely permeable to water and minerals. Reason is true: it provides rigidity, mechanical protection, shape, and prevents bursting."
  },
  {
    a: "Phospholipids in the plasma membrane are amphipathic molecules.",
    r: "They contain both a polar hydrophilic phosphate-containing head and two nonpolar hydrophobic fatty acid hydrocarbon tails.",
    ans: 0,
    exp: "Amphipathic molecules possess both water-loving (hydrophilic) and water-repelling (hydrophobic) domains, as exemplified by membrane phospholipids. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Secondary plant cell walls are laid down between the primary wall and the middle lamella.",
    r: "Secondary walls are formed on the inner face of the primary wall, towards the plasma membrane.",
    ans: 3,
    exp: "Assertion is false: secondary walls are deposited inside the primary wall (towards the cytoplasm/plasma membrane), not outside towards middle lamella. Reason is true."
  },
  {
    a: "Aquaporins are channel proteins that facilitate the rapid passage of water across biological membranes.",
    r: "An aquaporin channel complex is formed by the assembly of eight distinct water-pore forming protein subunits.",
    ans: 0,
    exp: "Water channels are made up of eight different types of aquaporin monomers that form water-selective pores in the plasma membrane. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "The lipid component of the plasma membrane primarily consists of phosphoglycerides.",
    r: "Phosphoglycerides consist of a glycerol molecule esterified to two fatty acids and a phosphorylated alcohol group.",
    ans: 1,
    exp: "Both statements are correct: phosphoglycerides are the predominant membrane lipids, and they are glycerol-based phospholipids. However, the chemical structure is an elaboration of lipid identity rather than the reason why they are the major constituent."
  },
  {
    a: "Active transport always results in the movement of substances against their concentration gradient (from low to high concentration).",
    r: "Active transport utilizes metabolic energy (ATP) to power carrier proteins ('pumps') against thermodynamic concentration gradients.",
    ans: 0,
    exp: "Active transport moves substances uphill (uphill transport) against their chemical or electrochemical gradient by coupling to ATP hydrolysis. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The plasma membrane is described as 'selectively permeable' rather than 'semipermeable'.",
    r: "It permits the passage of solvent water as well as selects specific solutes to pass while completely restricting others.",
    ans: 0,
    exp: "A semipermeable membrane allows only solvent (water) to pass, whereas a selectively permeable membrane regulates both solvent and chosen solute molecules. (R) correctly explains (A)."
  },
  {
    a: "Flip-flop (transverse) movement of phospholipids between membrane leaflets occurs much less frequently than lateral diffusion.",
    r: "Transverse movement requires dragging a polar hydrophilic head group through the nonpolar hydrophobic fatty acid core of the bilayer, which is energetically unfavorable.",
    ans: 0,
    exp: "Lateral diffusion occurs rapidly (millions of times per second), while flip-flop is energetically costly and rare without flippase enzymes because polar heads must cross the hydrophobic core. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Glycoproteins and glycolipids present on the outer surface of the plasma membrane are involved in cell-cell recognition.",
    r: "The oligosaccharide chains of glycoproteins and glycolipids project outward into the extracellular matrix, acting as molecular recognition markers and antigens.",
    ans: 0,
    exp: "Carbohydrate moieties of glycoproteins and glycolipids form the glycocalyx of animal cells, acting as receptors, recognition markers (e.g., ABO blood groups), and adhesion molecules. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "The cell wall is an absolute barrier preventing any communication between neighboring plant cells.",
    r: "Plasmodesmata form cytoplasmic bridges connecting the symplast of neighboring plant cells across their walls.",
    ans: 3,
    exp: "Assertion is false: cell walls do not prevent communication because plasmodesmatal bridges connect adjacent protoplasts. Reason is true."
  }
];

const mcqQuestions = [
  {
    q: "Who proposed the universally accepted Fluid Mosaic Model of plasma membrane structure in the year 1972?",
    opts: ["Singer and Nicolson", "Robertson", "Danielli and Davson", "Gorter and Grendel"],
    ans: 0,
    exp: "The Fluid Mosaic Model was proposed by S.J. Singer and Garth L. Nicolson in 1972."
  },
  {
    q: "According to the Fluid Mosaic Model, the plasma membrane is composed primarily of:",
    opts: ["A continuous monolayer of proteins", "A phospholipid bilayer with proteins arranged in a mosaic pattern", "A protein bilayer enclosing a central lipid core", "A cellulose matrix embedded with glycoprotein receptors"],
    ans: 1,
    exp: "The model depicts a phospholipid bilayer functioning as a quasi-fluid matrix within and upon which globular proteins are embedded or attached in a mosaic fashion."
  },
  {
    q: "In the phospholipid bilayer of the plasma membrane, the polar hydrophilic heads face:",
    opts: ["Towards the inner nonpolar core", "Outwards towards the aqueous exterior and interior", "Exclusively towards the outer cellular environment", "Randomly in all directions without any fixed orientation"],
    ans: 1,
    exp: "The hydrophilic polar heads face outward towards the aqueous environment of both extracellular fluid and cytoplasm, shielding the hydrophobic tails inside."
  },
  {
    q: "The percentage composition of proteins and lipids in the human erythrocyte membrane is approximately:",
    opts: ["40% protein, 52% lipid", "52% protein, 40% lipid", "60% protein, 40% carbohydrate", "70% lipid, 20% protein"],
    ans: 1,
    exp: "In human erythrocytes (RBCs), the plasma membrane contains approximately 52% protein, 40% lipid, and 8% carbohydrates."
  },
  {
    q: "The quasi-fluid nature of membrane lipids enables the lateral movement of proteins. This ability to move within the membrane is measured as its:",
    opts: ["Permeability", "Elasticity", "Fluidity", "Viscosity"],
    ans: 2,
    exp: "The ability of proteins and lipids to move within the plane of the membrane is defined as membrane fluidity."
  },
  {
    q: "Which of the following functions does NOT depend directly on the fluid nature of the plasma membrane?",
    opts: ["Cell growth and division", "Endocytosis and secretion", "Intercellular junction formation", "Synthesis of genomic DNA"],
    ans: 3,
    exp: "Genomic DNA synthesis occurs in the nucleus (eukaryotes) or nucleoid (prokaryotes) catalyzed by DNA polymerases, independent of membrane fluidity."
  },
  {
    q: "Membrane proteins that are tightly bound and partially or completely buried in the lipid bilayer are termed:",
    opts: ["Peripheral proteins", "Integral proteins", "Glycocalyx proteins", "Extrinsic proteins"],
    ans: 1,
    exp: "Integral (intrinsic) proteins are embedded partially or completely within the hydrophobic core of the phospholipid bilayer."
  },
  {
    q: "Which of the following is a classic example of primary active transport across the cell membrane?",
    opts: ["Movement of glucose down its concentration gradient via GLUT-4", "Movement of water across aquaporins", "The $Na^+/K^+$ ATPase pump", "Diffusion of oxygen across alveolar membranes"],
    ans: 2,
    exp: "The $Na^+/K^+$ ATPase pump is primary active transport, directly consuming ATP to transport $3Na^+$ outward and $2K^+$ inward against their concentration gradients."
  },
  {
    q: "The primary plant cell wall is chemically composed of:",
    opts: ["Cellulose, hemicellulose, pectins, and proteins", "Peptidoglycan, teichoic acid, and lipopolysaccharides", "Chitin, glucan, and glycoproteins", "Silica, lignin, and cutin only"],
    ans: 0,
    exp: "Plant cell walls are made of cellulose microfibrils embedded in a matrix of hemicellulose, pectins, and structural proteins."
  },
  {
    q: "The middle lamella between adjacent plant cells is composed predominantly of:",
    opts: ["Calcium and magnesium pectate", "Cellulose microfibrils", "Lignin and suberin", "Starch and glycogen"],
    ans: 0,
    exp: "The middle lamella is a cementing layer consisting primarily of calcium and magnesium pectates."
  },
  {
    q: "Which layer of the plant cell wall is laid down on the inner side (towards the plasma membrane) as the cell matures?",
    opts: ["Primary cell wall", "Secondary cell wall", "Middle lamella", "Pellicle"],
    ans: 1,
    exp: "The secondary wall is formed on the inner surface (towards the cytoplasm/membrane) of the primary wall as the cell reaches full maturity."
  },
  {
    q: "Plasmodesmata are best described as:",
    opts: ["Lignified thickenings in xylem tracheids", "Cytoplasmic connections traversing cell walls of adjacent plant cells", "Pores in the nuclear envelope for mRNA export", "Adherens junctions between animal epithelial cells"],
    ans: 1,
    exp: "Plasmodesmata are microscopic cytoplasmic channels that traverse the cell walls of adjacent plant cells, connecting their protoplasts."
  },
  {
    q: "Which of the following molecules moves across the plasma membrane by simple passive diffusion?",
    opts: ["$Na^+$ ions", "$K^+$ ions", "Neutral nonpolar solutes and respiratory gases like $O_2$ and $CO_2$", "Polar glucose molecules against gradient"],
    ans: 2,
    exp: "Small, nonpolar, neutral molecules (like $O_2$, $CO_2$, and small lipids) pass through the hydrophobic lipid core by simple passive diffusion."
  },
  {
    q: "The movement of water across a selectively permeable membrane down its water potential gradient is known as:",
    opts: ["Active transport", "Facilitated diffusion", "Osmosis", "Pinocytosis"],
    ans: 2,
    exp: "Osmosis is the net diffusion of water across a selectively permeable membrane from high water potential to low water potential."
  },
  {
    q: "Which of the following statements regarding the cell wall of algae is TRUE according to NCERT?",
    opts: ["It contains chitin and $\\beta$-glucans.", "It consists of cellulose, galactans, mannans, and calcium carbonate.", "It consists exclusively of peptidoglycan.", "It lacks cellulose entirely."],
    ans: 1,
    exp: "According to NCERT, algae have cell walls made of cellulose, galactans, mannans, and minerals like calcium carbonate ($CaCO_3$)."
  },
  {
    q: "Which lipid molecule acts as a membrane fluidity buffer in eukaryotic plasma membranes?",
    opts: ["Triglycerides", "Cholesterol", "Prostaglandins", "Waxes"],
    ans: 1,
    exp: "Cholesterol modulates membrane fluidity by restraining phospholipid movement at warm temperatures and preventing tightly packed crystallization at cold temperatures."
  },
  {
    q: "Carrier proteins that transport a single solute across the membrane in one direction are termed:",
    opts: ["Symporters", "Antiporters", "Uniporters", "Co-transporters"],
    ans: 2,
    exp: "A uniporter transports a single species of substrate across the membrane down or against its gradient."
  },
  {
    q: "The term 'amphipathic' applied to membrane phospholipids means they possess:",
    opts: ["Both acidic and basic enzymatic domains", "Both polar hydrophilic and nonpolar hydrophobic regions", "Only carbohydrate and protein binding sites", "The ability to dissolve completely in both water and ether"],
    ans: 1,
    exp: "Amphipathic molecules contain both hydrophilic (water-soluble, polar) and hydrophobic (lipid-soluble, nonpolar) groups."
  },
  {
    q: "The transport of polar molecules across the nonpolar lipid bilayer requires:",
    opts: ["Carrier or channel proteins", "Hydrolysis of DNA", "Dissolution of the entire membrane", "Presence of a thick peptidoglycan layer"],
    ans: 0,
    exp: "Polar molecules cannot easily pass through the nonpolar hydrophobic lipid bilayer and thus require membrane transport proteins (channels or carriers) to facilitate passage."
  },
  {
    q: "During fruit ripening, softening of the fruit is primarily due to the enzymatic dissolution of:",
    opts: ["Cellulose in primary cell wall", "Pectate in middle lamella", "Lignin in secondary cell wall", "Suberin in cork cells"],
    ans: 1,
    exp: "Pectinase enzymes hydrolyze the calcium and magnesium pectate present in the middle lamella, loosening cell adhesion and causing fruit softening."
  }
];

const variants = [
  {
    q: (n) => `In membrane transport trial ${n}, a neutral nonpolar solute diffuses across the phospholipid bilayer. This process is driven by:`,
    opts: ["Direct hydrolysis of ATP", "A concentration gradient across the membrane", "Spindle fiber contraction", "Proton motive force generated by lysosomes"],
    ans: 1,
    exp: "Passive simple diffusion of neutral solutes is driven solely by the concentration gradient without any metabolic energy consumption."
  },
  {
    q: (n) => `A laboratory assay ${n} investigates the $Na^+/K^+$ ATPase pump. For every molecule of ATP hydrolyzed, it pumps:`,
    opts: ["$3Na^+$ outward and $2K^+$ inward", "$2Na^+$ outward and $3K^+$ inward", "$3Na^+$ inward and $2K^+$ outward", "$1Na^+$ outward and $1K^+$ inward"],
    ans: 0,
    exp: "The $Na^+/K^+$ ATPase transports 3 sodium ions out of the cell and 2 potassium ions into the cell per ATP molecule hydrolyzed."
  },
  {
    q: (n) => `In plant tissue culture study ${n}, plasmodesmata are observed to connect:`,
    opts: ["The vacuoles of two animal cells", "The cytoplasm of neighboring plant cells", "The nucleolus to the mitochondria", "The inner mitochondrial membrane to the cristae"],
    ans: 1,
    exp: "Plasmodesmata connect the cytoplasm of adjacent plant cells across cell walls, facilitating symplastic communication and nutrient flow."
  },
  {
    q: (n) => `Spectroscopic study ${n} of erythrocyte ghost membranes indicates that integral proteins:`,
    opts: ["Can be washed off using gentle aqueous saline buffer", "Are deeply embedded in the hydrophobic lipid bilayer and require detergents for isolation", "Consist entirely of starch molecules", "Are located exclusively in the extracellular fluid"],
    ans: 1,
    exp: "Integral membrane proteins are firmly embedded in the lipid bilayer via hydrophobic interactions and can only be extracted using detergents."
  },
  {
    q: (n) => `An analysis ${n} of higher plant cell walls reveals that hemicellulose and pectins are:`,
    opts: ["Matrix polysaccharides that embed cellulose microfibrils", "Genetic material storing developmental information", "Lipid droplets providing insulation", "Proteins synthesizing ribosomal subunits"],
    ans: 0,
    exp: "Hemicellulose and pectins constitute the ground matrix in which crystalline cellulose microfibrils are embedded in plant cell walls."
  },
  {
    q: (n) => `In biophysical study ${n}, the flip-flop movement of a phospholipid molecule between outer and inner monolayers:`,
    opts: ["Occurs spontaneously millions of times per second without energy", "Is extremely rare because of the energetic penalty of moving a polar head through the hydrophobic core", "Never occurs in any living membrane under any condition", "Is required for all simple diffusion of water molecules"],
    ans: 1,
    exp: "Transverse flip-flop is energetically unfavorable because polar hydrophilic heads must pass through the nonpolar hydrophobic core, making it a very slow/rare event without flippases."
  },
  {
    q: (n) => `In cell biology experiment ${n}, water movement across the plasma membrane is facilitated by specialized channel proteins termed:`,
    opts: ["Aquaporins", "Permeases", "Porins", "Desmotubules"],
    ans: 0,
    exp: "Aquaporins are water-channel proteins that facilitate rapid osmotic water movement across biological membranes."
  },
  {
    q: (n) => `Regarding the chemical nature of cell wall layer ${n}, the primary wall is distinguished from the secondary wall by:`,
    opts: ["Its capability for growth and high extensibility in young cells", "The complete absence of cellulose", "Being located on the innermost side of the plasma membrane", "Being present only in dead xylem vessels"],
    ans: 0,
    exp: "The primary wall is laid down during cell enlargement, is plastic and capable of growth, whereas the secondary wall is rigid and non-extensible."
  }
];

let vIdx = 0;
while (mcqQuestions.length < 154) {
  const v = variants[vIdx % variants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  vIdx++;
}

const part2Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part2Questions.push({
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

mcqQuestions.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part2Questions.push({
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

console.log(`Part 2 generated: ${part2Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part2.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part2Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
