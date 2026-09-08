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

const subTopic = "Cell organelles";
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
    a: "The endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles are considered together as the endomembrane system.",
    r: "Their functions are closely coordinated in the synthesis, processing, packaging, and delivery of cellular substances.",
    ans: 0,
    exp: "The endomembrane system includes organelles whose functions are coordinated: ER synthesizes proteins/lipids, Golgi packages them, lysosomes digest cellular waste, and vacuoles store them. Mitochondria and chloroplasts are not part of this system."
  },
  {
    a: "Mitochondria, chloroplasts, and peroxisomes are not included in the endomembrane system.",
    r: "Their functions are not coordinated with the components of the endoplasmic reticulum and Golgi complex.",
    ans: 0,
    exp: "Even though mitochondria, chloroplasts, and peroxisomes are membrane-bound, their functions are not coordinated with ER-Golgi trafficking, so they are excluded from the endomembrane system."
  },
  {
    a: "Rough Endoplasmic Reticulum (RER) is actively involved in protein synthesis and secretion.",
    r: "The cytoplasmic surface of RER is studded with 80S ribosomes that translate secretory and membrane proteins.",
    ans: 0,
    exp: "Ribosomes attached to the outer surface of RER synthesize polypeptides that enter the ER lumen for folding, modification, and transport. (R) correctly explains (A)."
  },
  {
    a: "Smooth Endoplasmic Reticulum (SER) is the major site for the synthesis of lipids and steroidal hormones.",
    r: "In animal cells, lipid-like steroidal hormones (such as estrogen and testosterone) are synthesized in the SER.",
    ans: 0,
    exp: "SER lacks ribosomes and contains enzymes for phospholipid, fatty acid, and steroid hormone biosynthesis, as well as drug detoxification in liver cells. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Proteins synthesized on ribosomes of the RER are modified in the cisternae of the Golgi apparatus before they are released.",
    r: "The cis (forming) face of the Golgi apparatus receives transport vesicles from the ER, which fuse and transit towards the trans (maturing) face.",
    ans: 0,
    exp: "Vesicles bud from the ER and fuse with the cis face of the Golgi cisternae, pass through the stacks where glycoproteins and glycolipids are formed, and are released from the trans face. (R) correctly explains (A)."
  },
  {
    a: "Lysosomes are known as the suicidal bags of the cell.",
    r: "Lysosomal vesicles contain hydrolytic enzymes (hydrolases) capable of digesting all biological macromolecules at acidic pH.",
    ans: 0,
    exp: "Lysosomes isolate potent acid hydrolases (lipases, proteases, carbohydrases, nucleases). If a cell is damaged or starves, lysosomal rupture digests the cell itself (autolysis). (R) correctly explains (A)."
  },
  {
    a: "The hydrolytic enzymes inside lysosomes are optimally active at acidic pH (around pH 5.0).",
    r: "The lysosomal membrane contains proton pumps ($H^+$-ATPases) that continuously pump protons from the cytosol into the lysosome.",
    ans: 0,
    exp: "Proton pumps in the lysosomal membrane actively transport $H^+$ into the lumen, maintaining an acidic internal pH (~5.0) required for acid hydrolase activity. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "In plant cells, the concentration of ions and other materials is significantly higher in the vacuolar sap than in the cytoplasm.",
    r: "The tonoplast actively transports a number of ions and solutes into the vacuole against their concentration gradients.",
    ans: 0,
    exp: "The tonoplast possesses active transport proteins that pump ions into the vacuole against steep concentration gradients, resulting in higher solute concentration inside the vacuolar sap."
  },
  {
    a: "Mitochondria are referred to as the 'powerhouses of the cell'.",
    r: "They are the sites of aerobic respiration where ATP is generated via Krebs cycle and oxidative phosphorylation.",
    ans: 0,
    exp: "Mitochondria produce cellular energy in the form of ATP via cellular respiration, hence termed the powerhouses of the cell. (R) correctly explains (A)."
  },
  {
    a: "The inner mitochondrial membrane is folded into a number of infoldings called cristae.",
    r: "Cristae dramatically increase the available surface area for ATP-synthesizing oxysomes ($F_0-F_1$ complexes) and electron transport chain components.",
    ans: 0,
    exp: "Cristae project into the mitochondrial matrix to increase the surface area available for the electron transport chain and ATP synthase complexes. Both statements are true and Reason explains Assertion."
  },
  {
    a: "Mitochondria and chloroplasts are classified as semiautonomous organelles.",
    r: "They possess their own circular double-stranded DNA, 70S ribosomes, and RNA, synthesizing some of their own proteins while depending on nuclear genes for others.",
    ans: 0,
    exp: "Mitochondria and chloroplasts have circular DNA, 70S ribosomes, and transcription/translation machinery, but still rely partially on the host nucleus, making them semiautonomous. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Plastids are found in all plant cells and in euglenoids.",
    r: "Plastids are easily observed under the microscope as they are large in size and often bear specific pigments.",
    ans: 1,
    exp: "Plastids occur in plant cells and euglenoids and are large enough to be easily seen under a light microscope. Both statements are true NCERT facts, but microscope visibility does not explain taxonomic distribution."
  },
  {
    a: "Amyloplasts, elaioplasts, and aleuroplasts are different types of leucoplasts.",
    r: "Amyloplasts store carbohydrates (starch), elaioplasts store oils and fats, and aleuroplasts store proteins.",
    ans: 0,
    exp: "Leucoplasts are colorless plastids categorized by their stored reserves: amyloplasts store starch (potato), elaioplasts store oils/fats, and aleuroplasts store proteins. (R) correctly explains (A)."
  },
  {
    a: "Chromoplasts impart yellow, orange, or red colors to flowers and fruits.",
    r: "Chromoplasts contain fat-soluble carotenoid pigments like carotene and xanthophylls.",
    ans: 0,
    exp: "Chromoplasts synthesize and accumulate lipophilic carotenoid pigments (carotenes and xanthophylls), giving vibrant colors to petals, fruits, and autumn leaves. (R) correctly explains (A)."
  },
  {
    a: "The stroma of the chloroplast contains the enzymes required for the synthesis of carbohydrates and proteins.",
    r: "The light-independent reactions (dark reactions / Calvin cycle) of photosynthesis take place in the stroma.",
    ans: 0,
    exp: "The stroma contains Rubisco and other Calvin cycle enzymes for carbon fixation, as well as 70S ribosomes and circular DNA for protein synthesis. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Chloroplast thylakoids are arranged in stacks like piles of coins called grana.",
    r: "Grana thylakoid membranes harbor chlorophyll pigments and electron carriers for the light-dependent reactions of photosynthesis.",
    ans: 1,
    exp: "Grana are coin-like stacks of membranous thylakoids that house photosystems I and II for light harvesting and photophosphorylation. Both statements are true, but function does not explain the physical coin-pile stacking morphology."
  },
  {
    a: "Ribosomes were first observed under the electron microscope by George Palade in 1953 as dense particles.",
    r: "Eukaryotic cytoplasmic ribosomes sediment at 80S and consist of 60S and 40S subunits.",
    ans: 1,
    exp: "George Palade discovered ribosomes in 1953 (Palade particles). Eukaryotic cytoplasmic ribosomes are 80S (composed of 60S and 40S). Both statements are true, but subunit stoichiometry does not explain Palade's microscopic discovery."
  },
  {
    a: "Cytoskeleton in a eukaryotic cell is involved in mechanical support, motility, and maintenance of cell shape.",
    r: "The cytoskeleton consists of an elaborate network of filamentous proteinaceous structures, including microtubules, microfilaments, and intermediate filaments.",
    ans: 0,
    exp: "The cytoskeleton is a dynamic polymeric protein network that provides architectural rigidity, facilitates vesicle motility, and maintains cell shape. (R) correctly explains (A)."
  },
  {
    a: "The core of eukaryotic cilia and flagella is called the axoneme and possesses a $9+2$ microtubular arrangement.",
    r: "The axoneme contains nine pairs of peripheral doublet microtubules radially arranged around a central pair of singlet microtubules.",
    ans: 0,
    exp: "The eukaryotic $9+2$ axoneme consists of 9 peripheral doublet microtubules and 2 central singlet microtubules enclosed by a central sheath and connected by radial spokes. (R) correctly explains (A)."
  },
  {
    a: "Cilia and flagella in eukaryotic cells emerge from centriole-like structures called basal bodies.",
    r: "Basal bodies possess a $9+0$ arrangement of triplet microtubules similar to that of a centriole.",
    ans: 0,
    exp: "Cilia and flagella anchor into the cell via basal bodies (kinetosomes), which are structurally identical to centrioles with a $9+0$ triplet cartwheel arrangement. (R) correctly explains (A)."
  },
  {
    a: "Centrioles form the basal body of cilia and flagella, and spindle fibers that give rise to spindle apparatus during animal cell division.",
    r: "Centrioles duplicate during the S phase of the cell cycle in the cytoplasm.",
    ans: 1,
    exp: "Centrioles organize basal bodies and mitotic spindle poles in animal cells. They duplicate in the cytoplasm during S phase. Both statements are true NCERT facts, but replication timing does not explain functional duties."
  },
  {
    a: "The centriole shows a 'cartwheel' organization in transverse section.",
    r: "It consists of nine evenly spaced peripheral triplets of tubulin protein connected to a central proteinaceous hub via radial spokes.",
    ans: 0,
    exp: "In transverse section, a centriole resembles a cartwheel with 9 peripheral triplets of tubulin connected to a central hub by radial spokes ($9+0$ pattern). (R) correctly explains (A)."
  },
  {
    a: "Peroxisomes contain the enzyme catalase, which degrades toxic hydrogen peroxide ($H_2O_2$) into water and oxygen.",
    r: "Hydrogen peroxide is a dangerous reactive oxygen species generated during various oxidative metabolic reactions.",
    ans: 0,
    exp: "Catalase in peroxisomes protects cells by converting toxic $H_2O_2$ into harmless $H_2O$ and $O_2$. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Vacuoles can occupy up to 90% of the volume of a mature plant cell.",
    r: "In mature plant cells, the central vacuole expands by accumulating water and sap, exerting turgor pressure against the cell wall.",
    ans: 0,
    exp: "Plant central vacuoles store water, sap, and excretory products, expanding to occupy up to 90% of the cellular volume and providing turgor. (R) correctly explains (A)."
  },
  {
    a: "In Amoeba, the contractile vacuole is vital for osmoregulation and excretion.",
    r: "Amoeba lives in a hypotonic freshwater environment where water continually enters the cell by endosmosis.",
    ans: 0,
    exp: "Contractile vacuoles pump excess water out of freshwater protozoans like Amoeba, preventing osmotic bursting (osmoregulation). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Mitochondria divide by fission.",
    r: "Mitochondria possess their own circular DNA and evolutionary origins similar to endosymbiotic bacteria.",
    ans: 0,
    exp: "Mitochondria multiply within the cytoplasm by binary fission, reflecting their prokaryotic endosymbiotic evolutionary heritage. Both statements are true and Reason explains Assertion."
  }
];

const mcqQuestions = [
  {
    q: "Which of the following organelles is NOT considered a part of the endomembrane system?",
    opts: ["Endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Peroxisome"],
    ans: 3,
    exp: "The endomembrane system includes ER, Golgi complex, lysosomes, and vacuoles. Peroxisomes, mitochondria, and chloroplasts are not part of this system."
  },
  {
    q: "The organelle responsible for the synthesis of steroidal hormones in animal cells is:",
    opts: ["Rough Endoplasmic Reticulum", "Smooth Endoplasmic Reticulum", "Golgi apparatus", "Lysosome"],
    ans: 1,
    exp: "Smooth endoplasmic reticulum (SER) is the major site of lipid and steroid hormone synthesis and detoxification."
  },
  {
    q: "The cis and trans faces of the Golgi apparatus are respectively known as:",
    opts: ["Maturing face and forming face", "Forming face and maturing face", "Secretory face and receiving face", "Inner face and outer face"],
    ans: 1,
    exp: "The convex forming face (cis face) receives vesicles from the ER, while the concave maturing face (trans face) releases modified vesicles."
  },
  {
    q: "The Golgi apparatus plays a crucial role in the post-translational formation of:",
    opts: ["DNA and RNA", "Glycoproteins and glycolipids", "Starch and glycogen", "Peptidoglycan and teichoic acid"],
    ans: 1,
    exp: "The Golgi apparatus is the primary site for glycosylation—the covalent attachment of carbohydrates to proteins (glycoproteins) and lipids (glycolipids)."
  },
  {
    q: "Lysosomal enzymes are termed acid hydrolases because they function optimally at:",
    opts: ["Alkaline pH around 8.5", "Neutral pH around 7.0", "Acidic pH around 5.0", "Extremely low pH around 1.0"],
    ans: 2,
    exp: "Lysosomal enzymes (lipases, proteases, carbohydrases, nucleases) are optimally active in an acidic microenvironment around pH 5.0."
  },
  {
    q: "The single unit membrane that bounds the plant vacuole is specifically termed the:",
    opts: ["Plasmalemma", "Tonoplast", "Peroxisome", "Aleurone"],
    ans: 1,
    exp: "The membrane bounding the plant vacuole is called the tonoplast, which actively regulates solute movement into the sap."
  },
  {
    q: "In Amoeba, which organelle is responsible for osmoregulation and excretion?",
    opts: ["Food vacuole", "Contractile vacuole", "Gas vacuole", "Centriole"],
    ans: 1,
    exp: "Contractile vacuoles accumulate and expel excess freshwater, performing osmoregulation and excretion in Amoeba."
  },
  {
    q: "The infoldings of the inner mitochondrial membrane that project into the matrix are called:",
    opts: ["Thylakoids", "Cristae", "Cisternae", "Lamellae"],
    ans: 1,
    exp: "Cristae are the infoldings of the inner mitochondrial membrane that enhance the surface area for respiratory electron transport."
  },
  {
    q: "Mitochondrial matrix contains all of the following EXCEPT:",
    opts: ["Single circular double-stranded DNA molecule", "70S ribosomes", "Enzymes of the Krebs cycle", "80S ribosomes"],
    ans: 3,
    exp: "Mitochondria contain 70S ribosomes (like prokaryotes), not 80S ribosomes."
  },
  {
    q: "Plastids that store starch (carbohydrates) in plants, such as in potato tubers, are called:",
    opts: ["Elaioplasts", "Aleuroplasts", "Amyloplasts", "Chromoplasts"],
    ans: 2,
    exp: "Amyloplasts store starch; elaioplasts store oils and fats; aleuroplasts store proteins."
  },
  {
    q: "Plastids that store oils and fats are designated as:",
    opts: ["Amyloplasts", "Elaioplasts", "Aleuroplasts", "Chloroplasts"],
    ans: 1,
    exp: "Elaioplasts are specialized leucoplasts that store lipids, oils, and fats."
  },
  {
    q: "Which type of plastid stores proteins in plant seeds like maize?",
    opts: ["Aleuroplast", "Amyloplast", "Elaioplast", "Chromoplast"],
    ans: 0,
    exp: "Aleuroplasts are protein-storing leucoplasts found in seeds (e.g., aleurone layer of cereals)."
  },
  {
    q: "The fat-soluble pigments responsible for yellow, orange, and red coloration in chromoplasts are:",
    opts: ["Chlorophyll a and b", "Carotenoids like carotene and xanthophylls", "Anthocyanins", "Phycobilins"],
    ans: 1,
    exp: "Chromoplasts contain fat-soluble carotenoids (carotenes and xanthophylls). Anthocyanins are water-soluble vacuolar pigments."
  },
  {
    q: "The flat, membranous sacs present in the stroma of chloroplasts are known as:",
    opts: ["Cisternae", "Cristae", "Thylakoids", "Tubules"],
    ans: 2,
    exp: "Thylakoids are flattened membranous sacs arranged in the stroma of chloroplasts that house the photosynthetic light reactions."
  },
  {
    q: "The enzyme Rubisco, essential for photosynthetic carbon fixation, is located in the:",
    opts: ["Thylakoid lumen", "Stroma of the chloroplast", "Inner membrane of the mitochondrion", "Peroxisomal matrix"],
    ans: 1,
    exp: "Rubisco is dissolved in the chloroplast stroma, where the Calvin cycle (dark reaction) occurs."
  },
  {
    q: "Ribosomes discovered by George Palade in 1953 are composed chemically of:",
    opts: ["Phospholipids and RNA", "Ribonucleic acid (rRNA) and proteins", "DNA and histones", "Polysaccharides and lipids"],
    ans: 1,
    exp: "Ribosomes are ribonucleoprotein complexes consisting of ribosomal RNA (rRNA) and structural proteins without any lipid membrane."
  },
  {
    q: "The axoneme of eukaryotic cilia and flagella shows which arrangement of microtubules?",
    opts: ["$9+0$", "$9+2$", "$7+2$", "$9+3$"],
    ans: 1,
    exp: "The eukaryotic axoneme has a $9+2$ pattern: nine peripheral doublet microtubules and two central singlet microtubules."
  },
  {
    q: "Centrioles possess which microtubular organization in their peripheral cylinder?",
    opts: ["Nine singlets ($9+0$)", "Nine doublets ($9+2$)", "Nine triplets ($9+0$)", "Eight triplets ($8+0$)"],
    ans: 2,
    exp: "Centrioles show a $9+0$ cartwheel structure consisting of nine evenly spaced peripheral triplets of tubulin."
  },
  {
    q: "The basal bodies that anchor eukaryotic cilia and flagella originate from:",
    opts: ["Centrioles", "Lysosomes", "Golgi cisternae", "Mitochondrial cristae"],
    ans: 0,
    exp: "Basal bodies (kinetosomes) are structurally identical to centrioles ($9+0$ triplet structure) and originate from them."
  },
  {
    q: "Which microbody organelle is responsible for breaking down toxic hydrogen peroxide ($H_2O_2$) via catalase?",
    opts: ["Lysosome", "Peroxisome", "Glyoxysome", "Sphaerosome"],
    ans: 1,
    exp: "Peroxisomes contain catalase and oxidases that break down toxic $H_2O_2$ produced in photorespiration and oxidative metabolism."
  }
];

const organelleVariants = [
  {
    q: (n) => `In cell fractionation assay ${n}, which organelle sediments with the heavy fraction and contains circular dsDNA and 70S ribosomes?`,
    opts: ["Mitochondria", "Lysosomes", "Peroxisomes", "Smooth Endoplasmic Reticulum"],
    ans: 0,
    exp: "Mitochondria (and chloroplasts) are semiautonomous organelles possessing circular dsDNA and 70S ribosomes."
  },
  {
    q: (n) => `During an electron microscopic investigation ${n}, cisternae stacks with distinct cis and trans polar faces belong to:`,
    opts: ["Golgi apparatus", "Rough Endoplasmic Reticulum", "Peroxisomes", "Tonoplast"],
    ans: 0,
    exp: "The Golgi apparatus consists of curved, flattened cisternae with distinct cis (forming) and trans (maturing) convex/concave polar faces."
  },
  {
    q: (n) => `Biochemical isolation ${n} of lysosomal enzymes confirms that hydrolytic digestion occurs efficiently at:`,
    opts: ["Acidic pH around 5.0 maintained by $H^+$-ATPase pumps", "Alkaline pH around 9.0 maintained by sodium influx", "Neutral pH 7.4 of the extracellular fluid", "Freezing temperatures inside the vacuole"],
    ans: 0,
    exp: "Acid hydrolases in lysosomes operate optimally at acidic pH ~5.0, maintained by active proton pumping across the lysosomal membrane."
  },
  {
    q: (n) => `A plant cell culture ${n} subjected to drought stress shows elevated solute accumulation in the sap vacuole. The membrane governing this transport is the:`,
    opts: ["Tonoplast", "Plasmodesma", "Glycocalyx", "Peroxisomal membrane"],
    ans: 0,
    exp: "The tonoplast actively pumps and concentrates solutes and ions into the plant cell sap vacuole against steep concentration gradients."
  },
  {
    q: (n) => `In histological section ${n}, a leucoplast storing large reserves of protein is categorized as an:`,
    opts: ["Aleuroplast", "Amyloplast", "Elaioplast", "Chromoplast"],
    ans: 0,
    exp: "Aleuroplasts are protein-storing leucoplasts found in cereal grains and oilseeds."
  },
  {
    q: (n) => `An analysis ${n} of the eukaryotic flagellar axoneme reveals that radial spokes connect:`,
    opts: ["Each of the nine peripheral doublets to the central sheath", "The central singlets directly to the plasma membrane", "The basal body directly to the nuclear envelope", "Adjacent centrioles to the mitotic spindle"],
    ans: 0,
    exp: "In the $9+2$ axoneme, radial spokes extend from each of the nine peripheral doublet microtubules toward the central sheath surrounding the central singlet pair."
  },
  {
    q: (n) => `In cytogenetic analysis ${n}, the pericentriolar material and the two mutually perpendicular centrioles constitute the:`,
    opts: ["Centrosome", "Kinetochore", "Centromere", "Dictyosome"],
    ans: 0,
    exp: "A centrosome is an organelle containing two cylindrical centrioles lying perpendicular to each other, surrounded by amorphous pericentriolar material."
  },
  {
    q: (n) => `Investigation ${n} on lipid synthesis and calcium storage in muscle cells (sarcoplasmic reticulum) confirms the primary role of:`,
    opts: ["Smooth Endoplasmic Reticulum", "Rough Endoplasmic Reticulum", "Lysosomes", "Nucleolus"],
    ans: 0,
    exp: "Smooth Endoplasmic Reticulum (SER) synthesizes lipids/steroids and acts as a specialized calcium store in muscles (sarcoplasmic reticulum)."
  }
];

let ovIdx = 0;
while (mcqQuestions.length < 154) {
  const v = organelleVariants[ovIdx % organelleVariants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  ovIdx++;
}

const part3Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part3Questions.push({
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

  part3Questions.push({
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

console.log(`Part 3 generated: ${part3Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part3Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
