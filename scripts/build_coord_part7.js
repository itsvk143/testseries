const fs = require('fs');
const katex = require('katex');

function checkKatex(str, ctx) {
  if (!str) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

function createAR(st, aText, rText, correctOptionIndex, explanation) {
  const fullQ = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${aText}\nReason (R): ${rText}`;
  const options = [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ];
  return {
    question: fullQ,
    options,
    correctAnswer: options[correctOptionIndex],
    correctOption: correctOptionIndex,
    explanation,
    difficulty: "MEDIUM",
    questionType: "Assertion-Reason",
    type: "ASSERTION_REASON",
    subject: "Chemistry",
    chapter: "Co-ordination Compounds",
    topic: "Co-ordination Compounds",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    cognitiveLevel: "APPLICATION"
  };
}

function createMCQ(st, question, options, correctIndex, explanation, difficulty = "MEDIUM") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    difficulty,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    subject: "Chemistry",
    chapter: "Co-ordination Compounds",
    topic: "Co-ordination Compounds",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    cognitiveLevel: "UNDERSTANDING"
  };
}

function createNumerical(st, question, correctAnswer, explanation, difficulty = "MEDIUM") {
  return {
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    difficulty,
    questionType: "Numerical Value Question",
    type: "NUMERICAL",
    subject: "Chemistry",
    chapter: "Co-ordination Compounds",
    topic: "Co-ordination Compounds",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    cognitiveLevel: "APPLICATION"
  };
}

// -------------------------------------------------------------
// Subtopic 7: Stability and biological importance of coordination compounds
// Needed: 82 Qs (25 AR, 44 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart7() {
  const st = "Stability and biological importance of coordination compounds";
  const list = [];

  const arData = [
    {
      a: "Stepwise formation constants generally decrease in the order $K_1 > K_2 > K_3 > \\dots > K_n$.",
      r: "As successive ligands coordinate, the charge on the complex decreases (or becomes negative) and steric hindrance increases while fewer coordination sites remain available.",
      idx: 0,
      exp: "Electrostatic attraction is strongest for the first ligand, and each successive ligand faces increased steric congestion and reduced statistical probability of attachment."
    },
    {
      a: "According to the Irving-Williams series, the stability of complexes of divalent $3d$ transition metal ions follows the order $\\text{Mn}^{2+} < \\text{Fe}^{2+} < \\text{Co}^{2+} < \\text{Ni}^{2+} < \\text{Cu}^{2+} > \\text{Zn}^{2+}$.",
      r: "Across the series, ionic radii decrease and effective nuclear charge increases, with $\\text{Cu}^{2+}$ gaining extra stability from Jahn-Teller distortion.",
      idx: 0,
      exp: "Decreasing ionic radii increase charge density, and $\\text{Cu}^{2+}$ ($d^9$) experiences strong Jahn-Teller stabilization, peaking at copper before dropping slightly at $d^{10}$ $\\text{Zn}^{2+}$."
    },
    {
      a: "Chlorophyll is a green coordination compound of magnesium.",
      r: "In chlorophyll, $\\text{Mg}^{2+}$ is coordinated at the center of a modified porphyrin ring (chlorin ring).",
      idx: 0,
      exp: "Chlorophyll is essential for photosynthesis in green plants and contains a central magnesium(II) ion coordinated to four nitrogen atoms of a porphyrin derivative."
    },
    {
      a: "Haemoglobin is an oxygen-transporting coordination compound containing iron in the $+2$ oxidation state.",
      r: "The haem group in haemoglobin contains an $\\text{Fe}^{2+}$ ion coordinated to a tetradentate porphyrin ring.",
      idx: 0,
      exp: "Haemoglobin contains $\\text{Fe}^{2+}$ coordinated to protoporphyrin IX and a globin histidine residue, reversibly binding $\\text{O}_2$ at the sixth coordination position."
    },
    {
      a: "Vitamin $\\text{B}_{12}$ (cyanocobalamin) is a coordination compound of cobalt.",
      r: "Cobalt is in the $+3$ oxidation state coordinated inside a macrocyclic corrin ring in Vitamin $\\text{B}_{12}$.",
      idx: 0,
      exp: "Vitamin $\\text{B}_{12}$ prevents pernicious anaemia and contains a cobalt(III) ion bound in a corrin ring."
    },
    {
      a: "Cisplatin, $\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$, is used as an effective chemotherapeutic drug in cancer treatment.",
      r: "Cisplatin binds to DNA and forms intrastrand cross-links between adjacent guanine bases, disrupting DNA replication in rapidly dividing cancer cells.",
      idx: 0,
      exp: "Cisplatin crosslinks purine DNA bases, kinking the double helix and triggering apoptosis in cancer cells. Both statements are true and Reason explains Assertion."
    },
    {
      a: "Wilkinson's catalyst $[\\text{RhCl}(\\text{PPh}_3)_3]$ is used for the homogeneous hydrogenation of alkenes.",
      r: "Wilkinson's catalyst is a square planar 16-electron complex that coordinates molecular hydrogen and alkenes to facilitate catalytic reduction.",
      idx: 0,
      exp: "Chloridotris(triphenylphosphine)rhodium(I) undergoes oxidative addition with $\\text{H}_2$ and coordinates alkenes to catalyze hydrogenation at ambient conditions."
    },
    {
      a: "Lead poisoning is effectively treated by administering calcium disodium EDTA ($\\text{CaNa}_2\\text{EDTA}$).",
      r: "Lead(II) forms a much more stable chelate complex with $\\text{EDTA}^{4-}$ than calcium(II), displacing calcium and allowing the water-soluble lead chelate to be excreted safely.",
      idx: 0,
      exp: "The formation constant of $\\text{Pb-EDTA}$ is orders of magnitude greater than $\\text{Ca-EDTA}$, so $\\text{Pb}^{2+}$ displaces $\\text{Ca}^{2+}$ and is eliminated in urine."
    },
    {
      a: "Excess copper in patients with Wilson's disease is removed by treatment with D-penicillamine.",
      r: "D-penicillamine acts as a chelating ligand that forms a stable, soluble coordination complex with copper ions which is excreted by the kidneys.",
      idx: 0,
      exp: "Wilson's disease causes abnormal copper accumulation in the liver and brain. D-penicillamine chelates excess copper, enabling renal excretion."
    },
    {
      a: "Excess iron in patients with iron overload (thalassaemia) is removed using desferrioxamine B.",
      r: "Desferrioxamine B is a siderophore that selectively chelates iron(III) to form a very stable water-soluble complex.",
      idx: 0,
      exp: "Desferrioxamine forms an extremely stable octahedral complex with $\\text{Fe}^{3+}$, facilitating urinary excretion of excess iron."
    },
    {
      a: "Nickel(II) is detected and estimated quantitatively using dimethylglyoxime ($\\text{DMG}$) in ammoniacal solution.",
      r: "Nickel forms a brilliant scarlet-red insoluble precipitate of bis(dimethylglyoximato)nickel(II) stabilized by intramolecular hydrogen bonds.",
      idx: 0,
      exp: "$[\\text{Ni(dmg)}_2]$ is a square planar, neutral, insoluble red chelate stabilized by two strong intramolecular $\\text{O}-\\text{H}\\cdots\\text{O}$ hydrogen bonds."
    },
    {
      a: "The total hardness of water can be estimated by complexometric titration with disodium EDTA.",
      r: "$\\text{EDTA}^{4-}$ forms stable $1:1$ chelate complexes with $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ ions in alkaline buffer using Eriochrome Black T as indicator.",
      idx: 0,
      exp: "$\\text{EDTA}^{4-}$ selectively sequesters hardness-causing $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ ions, causing a sharp colour change from wine-red to blue at the endpoint."
    },
    {
      a: "Extraction of gold and silver involves the formation of soluble dicyanido complexes $[\\text{Au(CN)}_2]^-$ and $[\\text{Ag(CN)}_2]^-$.",
      r: "In the MacArthur-Forrest process, native gold is oxidized by atmospheric oxygen in dilute $\\text{NaCN}$ solution to form soluble $[\\text{Au(CN)}_2]^-$.",
      idx: 0,
      exp: "$4\\text{Au} + 8\\text{CN}^- + 2\\text{H}_2\\text{O} + \\text{O}_2 \\rightarrow 4[\\text{Au(CN)}_2]^- + 4\\text{OH}^-$. The dissolved gold is subsequently displaced by zinc."
    },
    {
      a: "High purity nickel is obtained industrially by Mond's process using carbon monoxide.",
      r: "Volatile nickel tetracarbonyl $[\\text{Ni(CO)}_4]$ is formed at $330-350\\text{ K}$ and decomposes at $450-470\\text{ K}$ to deposit pure metallic nickel.",
      idx: 0,
      exp: "Mond's process relies on the reversible formation and thermal decomposition of volatile $[\\text{Ni(CO)}_4]$: $\\text{Ni} + 4\\text{CO} \\rightleftharpoons [\\text{Ni(CO)}_4]$."
    },
    {
      a: "Carbon monoxide poisoning is caused by the formation of carboxyhaemoglobin.",
      r: "Carbon monoxide binds to the iron(II) center of haemoglobin about 300 times more strongly than oxygen, blocking oxygen delivery to body tissues.",
      idx: 0,
      exp: "$\\text{CO}$ forms a remarkably stable coordination complex with haemoglobin (carboxyhaemoglobin), preventing reversible oxygenation and causing asphyxiation."
    },
    {
      a: "The stability constant of $[\\text{Cu(NH}_3)_4]^{2+}$ is higher than that of $[\\text{Cd(NH}_3)_4]^{2+}$.",
      r: "$\\text{Cu}^{2+}$ has a smaller ionic radius and higher charge density than $\\text{Cd}^{2+}$.",
      idx: 0,
      exp: "Smaller cation radius increases electrostatic attraction toward ligand lone pairs and enhances covalent character, resulting in greater complex stability."
    },
    {
      a: "The overall stability constant $\\beta_4$ is related to stepwise stability constants by $\\beta_4 = K_1 \\cdot K_2 \\cdot K_3 \\cdot K_4$.",
      r: "The overall formation equilibrium is the sum of the four consecutive stepwise formation equilibria.",
      idx: 0,
      exp: "When chemical equations are added, their equilibrium constants are multiplied, so $\\beta_4 = K_1 \\cdot K_2 \\cdot K_3 \\cdot K_4$."
    },
    {
      a: "The instability constant ($K_i$) of a complex is the reciprocal of its overall formation constant ($\\beta$).",
      r: "The dissociation of a coordination entity is the exact reverse of its formation from the hydrated metal ion and ligands.",
      idx: 0,
      exp: "Since dissociation is the reverse of formation, $K_{\\text{instability}} = 1/\\beta_n$."
    },
    {
      a: "Carboxypeptidase-A and carbonic anhydrase are metalloenzymes containing zinc.",
      r: "Zinc(II) acts as a Lewis acid coordinator that polarizes coordinated water or substrate carbonyl groups during enzymatic catalysis.",
      idx: 0,
      exp: "In both carbonic anhydrase and carboxypeptidase-A, a central $\\text{Zn}^{2+}$ ion coordinates water or peptide carbonyl to facilitate nucleophilic attack."
    },
    {
      a: "Silver halides dissolve in aqueous sodium thiosulfate solution.",
      r: "Thiosulfate forms a soluble complex anion $[\\text{Ag}(\\text{S}_2\\text{O}_3)_2]^{3-}$ with silver.",
      idx: 0,
      exp: "$\\text{AgBr} + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow [\\text{Ag}(\\text{S}_2\\text{O}_3)_2]^{3-} + \\text{Br}^-$. This is the basis of photographic fixing."
    },
    {
      a: "Complexes of metal ions in higher oxidation states are generally more stable than those in lower oxidation states.",
      r: "Metal ions in higher oxidation states have higher charge-to-radius ratios, pulling ligands closer and forming stronger coordinate bonds.",
      idx: 0,
      exp: "For example, $\\text{Fe}^{3+}$ complexes are generally more stable than $\\text{Fe}^{2+}$ complexes with the same ligands due to higher charge density."
    },
    {
      a: "Silver chloride dissolves in aqueous ammonia, whereas silver iodide does not.",
      r: "The solubility product of $\\text{AgI}$ is much smaller than that of $\\text{AgCl}$, so the formation of $[\\text{Ag}(\\text{NH}_3)_2]^+$ cannot lower $[\\text{Ag}^+]$ sufficiently to dissolve $\\text{AgI}$.",
      idx: 0,
      exp: "$K_{\\text{sp}}$ of $\\text{AgCl}$ is $1.8 \\times 10^{-10}$, whereas $K_{\\text{sp}}$ of $\\text{AgI}$ is $8.5 \\times 10^{-17}$. Complexation by $\\text{NH}_3$ easily overcomes $\\text{AgCl}$ solubility product, but fails for $\\text{AgI}$."
    },
    {
      a: "The complex $[\\text{Fe(CN)}_6]^{3-}$ is more stable than $[\\text{Fe(CN)}_6]^{4-}$.",
      r: "$\\text{Fe}^{3+}$ has a smaller ionic size and higher positive charge than $\\text{Fe}^{2+}$.",
      idx: 0,
      exp: "Higher positive charge density on $\\text{Fe}^{3+}$ provides stronger electrostatic attraction and greater CFSE, making $[\\text{Fe(CN)}_6]^{3-}$ more stable."
    },
    {
      a: "Myoglobin binds oxygen more tightly than haemoglobin.",
      r: "Myoglobin is a monomeric protein designed to store oxygen in muscle tissue at low oxygen partial pressures.",
      idx: 0,
      exp: "Myoglobin has a hyperbolic oxygen-binding curve with higher affinity than the sigmoidal, allosteric binding curve of tetrameric haemoglobin."
    },
    {
      a: "Ziegler-Natta catalyst is used for the stereospecific polymerisation of alkenes.",
      r: "Ziegler-Natta catalyst consists of a combination of titanium tetrachloride ($\\text{TiCl}_4$) and triethylaluminium ($\\text{Al(C}_2\\text{H}_5)_3$).",
      idx: 1,
      exp: "Both statements are correct. The catalyst polymerizes ethene to high-density polyethylene (HDPE), and consists of $\\text{TiCl}_4 + \\text{AlEt}_3$. Reason defines the composition but does not mechanistically explain the stereospecificity."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 44 MCQs on Stability and biological importance
  const mcqData = [
    {
      q: "Which of the following coordination compounds is responsible for photosynthesis in green plants?",
      opts: ["Chlorophyll (contains $\\text{Mg}$)", "Haemoglobin (contains $\\text{Fe}$)", "Vitamin $\\text{B}_{12}$ (contains $\\text{Co}$)", "Carbonic anhydrase (contains $\\text{Zn}$)"],
      c: 0,
      exp: "Chlorophyll is a green magnesium-porphyrin complex that absorbs sunlight to drive photosynthesis."
    },
    {
      q: "Which metal ion is present at the center of the haem group in haemoglobin?",
      opts: ["$\\text{Fe}^{2+}$", "$\\text{Fe}^{3+}$", "$\\text{Mg}^{2+}$", "$\\text{Co}^{3+}$"],
      c: 0,
      exp: "Haemoglobin contains an $\\text{Fe}^{2+}$ ion coordinated to four nitrogen atoms of a porphyrin ring."
    },
    {
      q: "Which metal ion is present in Vitamin $\\text{B}_{12}$ (cyanocobalamin)?",
      opts: ["Cobalt ($\\text{Co}^{3+}$)", "Iron ($\\text{Fe}^{2+}$)", "Magnesium ($\\text{Mg}^{2+}$)", "Nickel ($\\text{Ni}^{2+}$)"],
      c: 0,
      exp: "Vitamin $\\text{B}_{12}$ contains a central cobalt(III) ion coordinated in a corrin ring."
    },
    {
      q: "Which metal complex is widely used as an antitumor (anticancer) drug?",
      opts: [
        "$\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ (cisplatin)",
        "$\\text{trans}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
        "$[\\text{PtCl}_4]^{2-}$",
        "$[\\text{Ni(CO)}_4]$"
      ],
      c: 0,
      exp: "Cisplatin ($\\\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$) is an effective anticancer medication that binds and crosslinks tumour DNA."
    },
    {
      q: "Wilkinson's catalyst, used for the homogeneous hydrogenation of alkenes, is:",
      opts: [
        "$[\\text{RhCl}(\\text{PPh}_3)_3]$",
        "$[\\text{TiCl}_4 + \\text{Al(C}_2\\text{H}_5)_3]$",
        "$[\\text{PdCl}_2]$",
        "$[\\text{Ni(CO)}_4]$"
      ],
      c: 0,
      exp: "Wilkinson's catalyst is chloridotris(triphenylphosphine)rhodium(I), $[\\text{RhCl}(\\text{PPh}_3)_3]$."
    },
    {
      q: "Which chelating agent is used to treat lead poisoning?",
      opts: [
        "$\\text{CaNa}_2\\text{EDTA}$",
        "D-penicillamine",
        "Desferrioxamine B",
        "Dimethylglyoxime"
      ],
      c: 0,
      exp: "Calcium disodium EDTA ($\\\\text{CaNa}_2\\text{EDTA}$) binds $\\text{Pb}^{2+}$ more strongly than $\\text{Ca}^{2+}$, displacing calcium and enabling urinary excretion of lead."
    },
    {
      q: "Which chelating ligand is used to remove excess copper in patients suffering from Wilson's disease?",
      opts: ["D-penicillamine", "$\\text{EDTA}$", "Chlorophyll", "Dimercaprol"],
      c: 0,
      exp: "D-penicillamine is a specific chelating agent used to treat copper accumulation in Wilson's disease."
    },
    {
      q: "Which chelating agent is used to treat chronic iron overload in thalassaemia patients?",
      opts: ["Desferrioxamine B", "D-penicillamine", "$\\text{Ca-EDTA}$", "Dimethyglyoxime"],
      c: 0,
      exp: "Desferrioxamine B selectively coordinates iron(III) to form a stable water-soluble chelate that is excreted in urine."
    },
    {
      q: "The scarlet-red precipitate obtained in the qualitative test for nickel(II) ion is:",
      opts: [
        "Bis(dimethylglyoximato)nickel(II)",
        "Nickel hydroxide",
        "Nickel cyanide",
        "Nickel carbonate"
      ],
      c: 0,
      exp: "$\\text{Ni}^{2+}$ reacts with dimethylglyoxime in ammoniacal medium to give a bright red precipitate of $[\\text{Ni(dmg)}_2]$."
    },
    {
      q: "In the complex $[\\text{Ni(dmg)}_2]$, how many intramolecular hydrogen bonds are present?",
      opts: ["2", "4", "1", "0"],
      c: 0,
      exp: "In the planar $[\\text{Ni(dmg)}_2]$ molecule, there are two symmetric $\\text{O}-\\text{H}\\cdots\\text{O}$ intramolecular hydrogen bonds stabilizing the chelate."
    },
    {
      q: "In the complexometric titration of water hardness with $\\text{EDTA}^{4-}$, which indicator is used?",
      opts: [
        "Eriochrome Black T (EBT)",
        "Phenolphthalein",
        "Methyl orange",
        "Starch"
      ],
      c: 0,
      exp: "Eriochrome Black T forms a wine-red complex with $\\text{Ca}^{2+}/\\text{Mg}^{2+}$, which turns steel-blue when all metal ions are chelated by EDTA."
    },
    {
      q: "In the extraction of gold, the gold-containing complex formed by aeration with $\\text{NaCN}$ is:",
      opts: [
        "$[\\text{Au(CN)}_2]^-$",
        "$[\\text{Au(CN)}_4]^-$",
        "$[\\text{Au(CN)}_6]^{3-}$",
        "$[\\text{Au(CN)}_2]^{2-}$"
      ],
      c: 0,
      exp: "The MacArthur-Forrest cyanide extraction produces soluble dicyanidoaurate(I) $[\\text{Au(CN)}_2]^-$."
    },
    {
      q: "In the extraction of silver, which metal is added to displace silver from the $[\\text{Ag(CN)}_2]^-$ complex?",
      opts: ["Zinc ($\\text{Zn}$)", "Copper ($\\text{Cu}$)", "Iron ($\\text{Fe}$)", "Lead ($\\text{Pb}$)"],
      c: 0,
      exp: "$2[\\text{Ag(CN)}_2]^- + \\text{Zn} \\rightarrow [\\text{Zn(CN)}_4]^{2-} + 2\\text{Ag} \\downarrow$. Zinc acts as a reducing agent."
    },
    {
      q: "In Mond's process for the refining of nickel, which volatile carbonyl complex is formed?",
      opts: ["$[\\text{Ni(CO)}_4]$", "$[\\text{Fe(CO)}_5]$", "$[\\text{Cr(CO)}_6]$", "$[\\text{Co}_2(\\text{CO})_8]$"],
      c: 0,
      exp: "Impure nickel reacts with $\\text{CO}$ at $330-350\\text{ K}$ to form volatile nickel tetracarbonyl $[\\text{Ni(CO)}_4]$."
    },
    {
      q: "Which enzyme containing zinc(II) catalyzes the interconversion of carbon dioxide and water to bicarbonate?",
      opts: ["Carbonic anhydrase", "Cytochrome c", "Chlorophyll", "Haemoglobin"],
      c: 0,
      exp: "Carbonic anhydrase contains a catalytic $\\text{Zn}^{2+}$ ion that hydrates $\\text{CO}_2$ to $\\text{HCO}_3^-$ at extremely high catalytic rates."
    },
    {
      q: "According to the Irving-Williams series, which divalent transition metal ion forms the most stable complexes?",
      opts: ["$\\text{Cu}^{2+}$", "$\\text{Ni}^{2+}$", "$\\text{Co}^{2+}$", "$\\text{Fe}^{2+}$"],
      c: 0,
      exp: "The Irving-Williams order is $\\text{Mn}^{2+} < \\text{Fe}^{2+} < \\text{Co}^{2+} < \\text{Ni}^{2+} < \\text{Cu}^{2+} > \\text{Zn}^{2+}$. $\\text{Cu}^{2+}$ is the most stable."
    },
    {
      q: "If the stepwise stability constants for the formation of $[\\text{ML}_4]$ are $K_1 = 10^4, K_2 = 10^3, K_3 = 10^2$, and $K_4 = 10^1$, what is the overall stability constant $\\beta_4$?",
      opts: ["$10^{10}$", "$10^4$", "$10^{24}$", "$10^{-10}$"],
      c: 0,
      exp: "$\\beta_4 = K_1 \\cdot K_2 \\cdot K_3 \\cdot K_4 = 10^{4 + 3 + 2 + 1} = 10^{10}$."
    },
    {
      q: "If the overall stability constant of a complex $[\\text{ML}_4]$ is $\\beta_4 = 1.0 \\times 10^{12}$, what is its overall instability constant?",
      opts: [
        "$1.0 \\times 10^{-12}$",
        "$1.0 \\times 10^{12}$",
        "$1.0 \\times 10^{-6}$",
        "$4.0 \\times 10^{-12}$"
      ],
      c: 0,
      exp: "Instability constant $K_i = 1/\\beta_4 = 1 / (10^{12}) = 1.0 \\times 10^{-12}$."
    },
    {
      q: "The enhanced stability of cyclic polydentate ligand complexes over open-chain analogues is called the:",
      opts: [
        "Macrocyclic effect",
        "Chelate effect",
        "Inductive effect",
        "Mesomeric effect"
      ],
      c: 0,
      exp: "The macrocyclic effect describes the extra stability of complexes formed by pre-formed cyclic ligands like porphyrins and crown ethers."
    },
    {
      q: "Which of the following ligands forms a five-membered chelate ring?",
      opts: [
        "Ethylenediamine ($\\text{en}$)",
        "Acetylacetonate ($\\text{acac}^-$)",
        "1,3-diaminopropane",
        "Carbonate ($\\text{CO}_3^{2-}$)"
      ],
      c: 0,
      exp: "Ethylenediamine coordinating to a metal $\\text{M}$ forms a five-membered ring: $\\text{M}-\\text{N}-\\text{C}-\\text{C}-\\text{N}$."
    },
    {
      q: "Which of the following ligands forms a six-membered chelate ring?",
      opts: [
        "Acetylacetonate ($\\text{acac}^-$)",
        "Ethylenediamine ($\\text{en}$)",
        "Oxalate ($\\text{ox}^{2-}$)",
        "Glycinate ($\\text{gly}^-$)"
      ],
      c: 0,
      exp: "Acetylacetonate coordinates through two oxygens, forming a six-membered ring: $\\text{M}-\\text{O}-\\text{C}-\\text{C}-\\text{C}-\\text{O}$."
    },
    {
      q: "Which of the following complexes is the most stable thermodynamically?",
      opts: [
        "$[\\text{Fe(EDTA)}]^-$",
        "$[\\text{Fe(en)}_3]^{3+}$",
        "$[\\text{Fe(ox)}_3]^{3-}$",
        "$[\\text{Fe(NH}_3)_6]^{3+}$"
      ],
      c: 0,
      exp: "$\\text{EDTA}^{4-}$ forms five chelate rings with iron, conferring the highest formation constant ($\\log \\beta \\approx 25$)."
    },
    {
      q: "Why is carbon monoxide toxic to human beings?",
      opts: [
        "It forms carboxyhaemoglobin which is 300 times more stable than oxyhaemoglobin",
        "It damages the lung tissue physically",
        "It oxidizes haemoglobin to methaemoglobin",
        "It hydrolyzes to formic acid in blood"
      ],
      c: 0,
      exp: "$\\text{CO}$ coordinates irreversibly to $\\text{Fe}^{2+}$ in haemoglobin, preventing oxygen binding and transport."
    },
    {
      q: "Silver chloride dissolves in aqueous ammonia due to the formation of:",
      opts: [
        "$[\\text{Ag}(\\text{NH}_3)_2]^+$",
        "$[\\text{Ag}(\\text{NH}_3)_4]^+$",
        "$[\\text{Ag}(\\text{NH}_3)_6]^+$",
        "$\\text{AgNH}_2$"
      ],
      c: 0,
      exp: "$\\text{AgCl} + 2\\text{NH}_3 \\rightarrow [\\text{Ag}(\\text{NH}_3)_2]^+ + \\text{Cl}^-$. Diamminesilver(I) is a soluble linear complex."
    },
    {
      q: "Copper(II) ions in aqueous solution react with excess ammonia to give a deep blue solution due to:",
      opts: [
        "$[\\text{Cu}(\\text{NH}_3)_4]^{2+}$",
        "$[\\text{Cu}(\\text{NH}_3)_6]^{2+}$",
        "$[\\text{Cu}(\\text{NH}_3)_2]^+$",
        "$\\text{Cu(OH)}_2$"
      ],
      c: 0,
      exp: "Addition of excess ammonia dissolves pale blue $\\text{Cu(OH)}_2$ into deep blue tetraamminecopper(II) $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$."
    },
    {
      q: "In black-and-white photography, unexposed silver bromide is dissolved from photographic film by washing with:",
      opts: [
        "Sodium thiosulfate ('hypo')",
        "Sodium carbonate",
        "Potassium bromide",
        "Hydroquinone"
      ],
      c: 0,
      exp: "Sodium thiosulfate acts as a 'fixer' by converting unexposed $\\text{AgBr}$ into soluble $[\\text{Ag}(\\text{S}_2\\text{O}_3)_2]^{3-}$."
    },
    {
      q: "Which catalyst is used in the Wacker process for converting ethene to acetaldehyde?",
      opts: [
        "$\\text{PdCl}_2$ with $\\text{CuCl}_2$",
        "$[\\text{RhCl}(\\text{PPh}_3)_3]$",
        "$\\text{V}_2\\text{O}_5$",
        "$\\text{Pt}/\\text{Rh}$ gauze"
      ],
      c: 0,
      exp: "The Wacker process oxidizes ethylene to acetaldehyde using a palladium(II) chloride catalyst with copper(II) chloride co-catalyst."
    },
    {
      q: "Which of the following complexes is the most labile (undergoes fastest ligand substitution)?",
      opts: [
        "$[\\text{Cr(H}_2\\text{O})_6]^{2+}$ ($d^4$ high-spin)",
        "$[\\text{Cr(H}_2\\text{O})_6]^{3+}$ ($d^3$)",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$ ($d^6$ low-spin)",
        "$[\\text{Ru(NH}_3)_6]^{3+}$ ($d^5$ low-spin)"
      ],
      c: 0,
      exp: "$[\\text{Cr(H}_2\\text{O})_6]^{2+}$ is a high-spin $d^4$ complex with an electron in the antibonding $e_g$ orbital and Jahn-Teller distortion, making it extremely labile."
    },
    {
      q: "Which of the following $3d$ metal complexes is inert to ligand substitution?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Co}(\\text{H}_2\\text{O})_6]^{2+}$",
        "$[\\text{Ni(H}_2\\text{O})_6]^{2+}$",
        "$[\\text{Cu(H}_2\\text{O})_6]^{2+}$"
      ],
      c: 0,
      exp: "Low-spin $d^6$ $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ has a full $t_{2g}^6$ subshell and very large CFSE, making it substitutionally inert."
    },
    {
      q: "Which of the following is NOT a polydentate ligand?",
      opts: ["Pyridine", "Ethylenediamine", "EDTA", "Oxalate"],
      c: 0,
      exp: "Pyridine is a monodentate ligand coordinating through its single nitrogen atom."
    },
    {
      q: "What is the coordination number and geometry of the nickel atom in $[\\text{Ni(dmg)}_2]$?",
      opts: [
        "4, square planar",
        "4, tetrahedral",
        "6, octahedral",
        "2, linear"
      ],
      c: 0,
      exp: "Nickel in $[\\text{Ni(dmg)}_2]$ has a coordination number of 4 and adopts a square planar geometry."
    },
    {
      q: "In $[\\text{Ni(dmg)}_2]$, how many chelate rings are formed around the central nickel atom?",
      opts: ["2", "4", "1", "3"],
      c: 0,
      exp: "Each of the two dimethylglyoximato ligands forms one 5-membered chelate ring with nickel, giving 2 primary chelate rings."
    },
    {
      q: "Which ion forms the brown ring in the confirmatory test for nitrate ions?",
      opts: [
        "$[\\text{Fe(H}_2\\text{O})_5(\\text{NO})]^{2+}$",
        "$[\\text{Fe(H}_2\\text{O})_6]^{3+}$",
        "$[\\text{Fe(CN)}_5(\\text{NO})]^{2-}$",
        "$[\\text{Fe(NO)}_3]^{2+}$"
      ],
      c: 0,
      exp: "The brown ring is pentaaquanitrosyliron(I) sulfate, $[\\text{Fe(H}_2\\text{O})_5(\\text{NO})]^{2+}\\text{SO}_4$."
    },
    {
      q: "What is the oxidation state of iron in the brown ring complex $[\\text{Fe(H}_2\\text{O})_5(\\text{NO})]^{2+}$?",
      opts: ["+1", "+2", "+3", "0"],
      c: 0,
      exp: "Charge transfer from $\\text{NO}$ gives $\\text{NO}^+$ and leaves iron in the $+1$ oxidation state ($3d^7$, $S = 3/2$)."
    },
    {
      q: "Sodium nitroprusside has the chemical formula:",
      opts: [
        "$\\text{Na}_2[\\text{Fe(CN)}_5(\\text{NO})]$",
        "$\\text{Na}_4[\\text{Fe(CN)}_6]$",
        "$\\text{Na}_3[\\text{Fe(CN)}_6]$",
        "$\\text{Na}_2[\\text{Fe(CN)}_4]$"
      ],
      c: 0,
      exp: "Sodium nitroprusside is sodium pentacyanidonitrosylferrate(II), $\\text{Na}_2[\\text{Fe(CN)}_5(\\text{NO})]$."
    },
    {
      q: "When sodium nitroprusside is added to an alkaline solution containing sulfide ions, a deep violet colour is formed due to:",
      opts: [
        "$[\\text{Fe(CN)}_5(\\text{NOS})]^{4-}$",
        "$[\\text{Fe(CN)}_6]^{4-}$",
        "$[\\text{FeS}]$",
        "$[\\text{Fe(SCN)}_6]^{3-}$"
      ],
      c: 0,
      exp: "$[\\text{Fe(CN)}_5(\\text{NO})]^{2-} + \\text{S}^{2-} \\rightarrow [\\text{Fe(CN)}_5(\\text{NOS})]^{4-}$ (purple/violet thionitrosyl complex)."
    },
    {
      q: "Which reagent is used in qualitative analysis to test for $\\text{Fe}^{3+}$ by forming a blood-red coloration?",
      opts: [
        "Potassium thiocyanate ($\\text{KSCN}$)",
        "Potassium ferrocyanide",
        "Dimethylglyoxime",
        "Ammonium chloride"
      ],
      c: 0,
      exp: "$\\text{Fe}^{3+}$ reacts with $\\text{SCN}^-$ to form the blood-red complex $[\\text{Fe(H}_2\\text{O})_5(\\text{SCN})]^{2+}$."
    },
    {
      q: "Prussian blue is formed by the reaction of ferric ions ($\\text{Fe}^{3+}$) with:",
      opts: [
        "Potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$",
        "Potassium ferricyanide $\\text{K}_3[\\text{Fe(CN)}_6]$",
        "Potassium thiocyanate",
        "Sodium nitroprusside"
      ],
      c: 0,
      exp: "Reaction of $\\text{Fe}^{3+}$ with $[\\text{Fe(CN)}_6]^{4-}$ precipitates Prussian blue: $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$."
    },
    {
      q: "Turnbull's blue is formed by the reaction of ferrous ions ($\\text{Fe}^{2+}$) with:",
      opts: [
        "Potassium ferricyanide $\\text{K}_3[\\text{Fe(CN)}_6]$",
        "Potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$",
        "Potassium thiocyanate",
        "Sodium nitroprusside"
      ],
      c: 0,
      exp: "Reaction of $\\text{Fe}^{2+}$ with $[\\text{Fe(CN)}_6]^{3-}$ yields Turnbull's blue: $\\text{Fe}_3[\\text{Fe(CN)}_6]_2$."
    },
    {
      q: "Which ligand is used as an antidote in cyanide poisoning?",
      opts: [
        "Sodium thiosulfate with amyl nitrite",
        "$\\text{EDTA}$",
        "D-penicillamine",
        "Desferrioxamine"
      ],
      c: 0,
      exp: "Amyl nitrite converts haemoglobin to methaemoglobin, which binds cyanide tightly to form cyanmethaemoglobin; thiosulfate then converts cyanide to thiocyanate."
    },
    {
      q: "The complex $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is thermodynamically very stable, but is it kinetically:",
      opts: [
        "Inert (substitutes very slowly)",
        "Labile (substitutes rapidly)",
        "Unstable and decomposes instantly",
        "In equilibrium with free cobalt"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is a low-spin $d^6$ complex with $t_{2g}^6$ configuration and high CFSE, making it substitutionally inert."
    },
    {
      q: "Which property increases the thermodynamic stability of a coordination complex?",
      opts: [
        "Higher charge and smaller size of central metal ion",
        "Larger ionic radius of metal ion",
        "Lower charge on metal ion",
        "Lower basicity of ligands"
      ],
      c: 0,
      exp: "Greater charge density (higher positive charge, smaller radius) increases electrostatic attraction for ligands, elevating complex stability."
    },
    {
      q: "What is the coordination number of magnesium in chlorophyll?",
      opts: ["4 (or 5 with axial ligand)", "6", "2", "8"],
      c: 0,
      exp: "Magnesium in chlorophyll is coordinated to the 4 nitrogen atoms of the chlorin ring, often with a fifth axial solvent/protein ligand."
    },
    {
      q: "Which metal ion is present in the electron-transfer protein plastocyanin?",
      opts: ["Copper", "Iron", "Zinc", "Magnesium"],
      c: 0,
      exp: "Plastocyanin is a copper-containing protein involved in the electron transport chain of photosynthesis."
    }
  ];

  mcqData.slice(0, 44).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "What is the coordination number of magnesium in the porphyrin ring of chlorophyll?",
    "4",
    "Magnesium is coordinated to the $4$ nitrogen atoms of the chlorin macrocycle."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of cobalt in Vitamin $\\text{B}_{12}$ (cyanocobalamin)?",
    "3",
    "Cobalt has an oxidation state of $+3$ in Vitamin $\\text{B}_{12}$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of iron in the haem group of normal deoxyhaemoglobin?",
    "2",
    "Iron is in the $+2$ oxidation state in haemoglobin."
  ));
  list.push(createNumerical(st,
    "How many chelate rings are formed when one molecule of $\\text{EDTA}^{4-}$ completely coordinates to a metal ion?",
    "5",
    "Hexadentate $\\text{EDTA}^{4-}$ forms $5$ chelate rings around the central metal."
  ));
  list.push(createNumerical(st,
    "How many intramolecular hydrogen bonds are present in a molecule of $[\\text{Ni(dmg)}_2]$?",
    "2",
    "There are $2$ symmetrical $\\text{O}-\\text{H}\\cdots\\text{O}$ hydrogen bonds in $[\\text{Ni(dmg)}_2]$."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of nickel in $[\\text{Ni(dmg)}_2]$?",
    "4",
    "Nickel is coordinated to $4$ nitrogen atoms of the two dmg ligands."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of rhodium in Wilkinson's catalyst $[\\text{RhCl}(\\text{PPh}_3)_3]$?",
    "4",
    "Rhodium is coordinated to one chloride and three triphenylphosphine ligands, giving a coordination number of $4$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of rhodium in Wilkinson's catalyst $[\\text{RhCl}(\\text{PPh}_3)_3]$?",
    "1",
    "In $[\\text{RhCl}(\\text{PPh}_3)_3]$, rhodium has an oxidation state of $+1$."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of gold in the complex $[\\text{Au(CN)}_2]^-$?",
    "2",
    "Gold is coordinated to two cyanide ligands, giving a coordination number of $2$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of gold in $[\\text{Au(CN)}_2]^-$?",
    "1",
    "$x + 2(-1) = -1 \\implies x = +1$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of platinum in cisplatin, $\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$?",
    "2",
    "$x + 2(0) + 2(-1) = 0 \\implies x = +2$."
  ));
  list.push(createNumerical(st,
    "If the log values of the four stepwise formation constants are $\\log K_1 = 4.0, \\log K_2 = 3.0, \\log K_3 = 2.0$, and $\\log K_4 = 1.0$, what is the value of $\\log \\beta_4$?",
    "10",
    "$\\log \\beta_4 = \\log K_1 + \\log K_2 + \\log K_3 + \\log K_4 = 4.0 + 3.0 + 2.0 + 1.0 = 10$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of iron in the brown ring complex $[\\text{Fe(H}_2\\text{O})_5(\\text{NO})]^{2+}$?",
    "1",
    "In the brown ring complex, iron is in the $+1$ oxidation state ($3d^7$, $S = 3/2$)."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 7...");
const allPart7 = buildPart7();
console.log(`Total Part 7 questions: ${allPart7.length} (Expected: 82)`);

allPart7.forEach((q, idx) => {
  checkKatex(q.question, `Part7[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part7[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part7[${idx}].explanation`);
});

console.log("All Part 7 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 7
module.exports = ${JSON.stringify(allPart7, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part7.js', fileContent);
console.log("Written scripts/data_coord_part7.js successfully!");
