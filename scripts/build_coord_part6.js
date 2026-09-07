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
// Subtopic 6: Bonding in coordination compounds
// Needed: 83 Qs (26 AR, 44 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart6() {
  const st = "Bonding in coordination compounds";
  const list = [];

  const arData = [
    {
      a: "The metal-carbon bond in metal carbonyls possesses both $\\sigma$ and $\\pi$ character.",
      r: "A $\\sigma$-bond is formed by donation of lone pair electrons from carbon into a vacant metal orbital, while a $\\pi$-bond is formed by back-donation from filled metal $d$-orbitals into vacant $\\pi^*$ antibonding orbitals of $\\text{CO}$.",
      idx: 0,
      exp: "Synergic bonding consists of $\\text{M} \\leftarrow \\text{C}$ $\\sigma$-donation and $\\text{M} \\rightarrow \\text{C}$ $\\pi$-back-donation, which mutually strengthen each other."
    },
    {
      a: "Back-donation of electron density from metal to $\\text{CO}$ strengthens the $\\text{M}-\\text{C}$ bond while weakening the $\\text{C}-\\text{O}$ bond.",
      r: "The electrons back-donated by the metal enter the $\\pi^*$ antibonding molecular orbitals of carbon monoxide, decreasing the $\\text{C}-\\text{O}$ bond order.",
      idx: 0,
      exp: "Populating antibonding $\\pi^*$ orbitals of $\\text{CO}$ reduces the $\\text{C}-\\text{O}$ bond order (lengthening the bond) and increases the $\\text{M}-\\text{C}$ bond order (shortening and strengthening it)."
    },
    {
      a: "Among the isoelectronic carbonyls $[\\text{V(CO)}_6]^-, [\\text{Cr(CO)}_6]$, and $[\\text{Mn(CO)}_6]^+$, the $\\text{C}-\\text{O}$ bond length is longest in $[\\text{V(CO)}_6]^-$.",
      r: "The negative charge on vanadium increases electron density on the metal center, maximizing $\\pi$-back-bonding into the $\\pi^*$ orbitals of $\\text{CO}$.",
      idx: 0,
      exp: "Greater negative charge increases metal electron density, causing maximum back-donation in $[\\text{V(CO)}_6]^-$. This maximizes population of $\\pi^*$ orbitals, resulting in the longest $\\text{C}-\\text{O}$ bond."
    },
    {
      a: "Among $[\\text{V(CO)}_6]^-, [\\text{Cr(CO)}_6]$, and $[\\text{Mn(CO)}_6]^+$, the $\\text{C}-\\text{O}$ stretching frequency $\\nu_{\\text{CO}}$ is highest in $[\\text{Mn(CO)}_6]^+$.",
      r: "The positive charge on manganese reduces $\\pi$-back-donation, preserving higher $\\text{C}-\\text{O}$ bond order and force constant.",
      idx: 0,
      exp: "Less back-bonding occurs in cationic $[\\text{Mn(CO)}_6]^+$, leaving the $\\text{C}-\\text{O}$ triple bond intact and giving the highest vibrational frequency $\\nu_{\\text{CO}}$."
    },
    {
      a: "The $\\text{C}-\\text{O}$ stretching frequency in neutral metal carbonyls is lower than that in free carbon monoxide ($2143\\text{ cm}^{-1}$).",
      r: "Synergic $\\pi$-back-donation lowers the $\\text{C}-\\text{O}$ bond order from approximately 3 toward 2.",
      idx: 0,
      exp: "Back-donation into $\\pi^*$ orbitals lowers the bond order and vibrational frequency of coordinated $\\text{CO}$ compared to free gaseous $\\text{CO}$ ($2143\\text{ cm}^{-1}$)."
    },
    {
      a: "The complex $[\\text{Ni(CO)}_4]$ satisfies Sidgwick's Effective Atomic Number (EAN) rule.",
      r: "The effective atomic number of nickel in $[\\text{Ni(CO)}_4]$ is 36, which is identical to the atomic number of the noble gas krypton.",
      idx: 0,
      exp: "$\\text{EAN} = 28 - 0 + 2(4) = 36$ (Krypton). Complexes conforming to the EAN rule attain noble gas configurations and high thermodynamic stability."
    },
    {
      a: "$\\text{Fe(CO)}_5$ is a mononuclear carbonyl that obeys the 18-electron rule.",
      r: "Iron(0) has 8 valence electrons ($3d^6 4s^2$) and five $\\text{CO}$ ligands donate 10 electrons, giving a total of 18 valence electrons.",
      idx: 0,
      exp: "$8 + 5 \\times 2 = 18$ electrons. Attaining 18 valence electrons corresponds to filled valence orbitals and noble gas configuration."
    },
    {
      a: "$\\text{Mn(CO)}_5$ is unstable as a monomer and readily dimerizes to $\\text{Mn}_2(\\text{CO})_{10}$.",
      r: "$\\text{Mn(CO)}_5$ is a 17-electron radical, and formation of a metal-metal ($\\text{Mn}-\\text{Mn}$) bond allows each manganese atom to achieve an 18-electron configuration.",
      idx: 0,
      exp: "Monomeric $\\text{Mn(CO)}_5$ has $7 + 10 = 17$ electrons. Dimerization via an $\\text{Mn}-\\text{Mn}$ single bond contributes 1 electron to each Mn, achieving 18 electrons ($36$ EAN)."
    },
    {
      a: "$[\\text{V(CO)}_6]$ is a paramagnetic monomer and does not dimerize to $\\text{V}_2(\\text{CO})_{12}$.",
      r: "Vanadium is too small to accommodate seven coordination contacts without severe steric hindrance between the carbonyl ligands.",
      idx: 0,
      exp: "$[\\text{V(CO)}_6]$ has 17 valence electrons ($5 + 12 = 17$, paramagnetic with 1 unpaired electron). Dimerization is sterically prohibited by the small radius of vanadium."
    },
    {
      a: "$\\text{Co}_2(\\text{CO})_8$ in the solid state contains two bridging carbonyl ligands and one $\\text{Co}-\\text{Co}$ bond.",
      r: "Bridging carbonyl ligands help each cobalt atom achieve the 18-electron noble gas configuration.",
      idx: 0,
      exp: "In solid $\\text{Co}_2(\\text{CO})_8$, there are two bridging $\\mu-\\text{CO}$ ligands, six terminal $\\text{CO}$ ligands, and one direct $\\text{Co}-\\text{Co}$ single bond."
    },
    {
      a: "Chelate complexes are thermodynamically more stable than their non-chelated analogues with unidentate ligands.",
      r: "Chelate ring formation is accompanied by an increase in entropy ($\\Delta S > 0$) because one multidentate ligand displaces multiple monodentate ligands.",
      idx: 0,
      exp: "The chelate effect is primarily driven by favorable entropy: e.g. $[\\text{Ni}(\\text{H}_2\\text{O})_6]^{2+} + 3\\text{en} \\rightarrow [\\text{Ni}(\\text{en})_3]^{2+} + 6\\text{H}_2\\text{O}$ increases the number of independent free particles from 4 to 7."
    },
    {
      a: "Macrocyclic complexes (e.g. porphyrins, crown ethers) exhibit even greater thermodynamic stability than open-chain chelates.",
      r: "Macrocyclic ligands are pre-organized with donor atoms constrained into conformations ready to bind metal ions with little entropic loss upon coordination.",
      idx: 0,
      exp: "The macrocyclic effect provides extra stability because the pre-formed cyclic cavity requires less conformational reorganization upon binding."
    },
    {
      a: "The Effective Atomic Number (EAN) of iron in potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$ is 36.",
      r: "Iron is in the $+2$ oxidation state ($Z = 26$) and receives 12 electrons from six cyanide ligands ($26 - 2 + 12 = 36$).",
      idx: 0,
      exp: "$\\text{EAN} = Z - \\text{oxidation state} + 2(\\text{C.N.}) = 26 - 2 + 12 = 36$, matching Krypton."
    },
    {
      a: "The Effective Atomic Number (EAN) of cobalt in $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is 36.",
      r: "Cobalt is in the $+3$ oxidation state ($Z = 27$) and accepts 12 electrons from six $\\text{NH}_3$ ligands ($27 - 3 + 12 = 36$).",
      idx: 0,
      exp: "$\\text{EAN} = 27 - 3 + 12 = 36$, satisfying the noble gas rule."
    },
    {
      a: "A $\\pi$-acid ligand like $\\text{CO}$ stabilizes transition metals in unusually low oxidation states such as $0$ or $-1$.",
      r: "By $\\pi$-back-bonding, the ligand removes excess negative charge from the electron-rich metal center into its $\\pi^*$ orbitals.",
      idx: 0,
      exp: "$\\pi$-acceptor ligands relieve accumulation of electron density on zero-valent or negative metal centers, conferring high stability on complexes like $[\\text{Ni(CO)}_4]$ and $[\\text{Fe(CO)}_4]^{2-}$."
    },
    {
      a: "The bridging carbonyl groups in $\\text{Co}_2(\\text{CO})_8$ have a lower $\\text{C}-\\text{O}$ stretching frequency than terminal carbonyl groups.",
      r: "Bridging carbonyls receive $\\pi$-back-donation from two metal atoms, which further weakens the $\\text{C}-\\text{O}$ bond.",
      idx: 0,
      exp: "Terminal $\\text{CO}$ ligands absorb at $2000-2100\\text{ cm}^{-1}$, whereas bridging $\\mu_2-\\text{CO}$ ligands absorb at $1800-1900\\text{ cm}^{-1}$ due to back-donation from two metal centers."
    },
    {
      a: "Zeise's salt $\\text{K}[\\text{PtCl}_3(\\text{C}_2\\text{H}_4)]$ exhibits synergic bonding similar to metal carbonyls.",
      r: "Ethylene donates $\\pi$-electron density to a vacant $5d$ orbital of platinum and simultaneously accepts electron density from filled platinum $d$-orbitals into its $\\pi^*$ antibonding orbital.",
      idx: 0,
      exp: "The Dewar-Chatt-Duncanson model explains metal-alkene bonding: $\\text{C}_2\\text{H}_4 \\rightarrow \\text{Pt}$ $\\sigma$-donation and $\\text{Pt} \\rightarrow \\text{C}_2\\text{H}_4$ $\\pi$-back-donation."
    },
    {
      a: "In Zeise's salt, the $\\text{C}-\\text{C}$ bond length of coordinated ethylene is longer than that in free ethylene.",
      r: "Back-donation of electron density from platinum populates the $\\pi^*$ antibonding orbital of ethylene, reducing the $\\text{C}=\\text{C}$ bond order.",
      idx: 0,
      exp: "In free ethylene, $\\text{C}=\\text{C}$ is $134\\text{ pm}$, whereas in Zeise's salt it lengthens to $137.5\\text{ pm}$ due to partial loss of double-bond character from $\\pi^*$ population."
    },
    {
      a: "Metal carbonyls are predominantly diamagnetic.",
      r: "Strong field $\\text{CO}$ ligands cause complete spin-pairing of valence electrons in the metal.",
      idx: 0,
      exp: "$\\text{CO}$ is at the top of the spectrochemical series, causing pairing of all $d$-electrons and resulting in diamagnetism in almost all homoleptic carbonyls."
    },
    {
      a: "The compound $[\\text{Cr(CO)}_6]$ is an octahedral complex having a closed 18-electron shell.",
      r: "Chromium(0) has 6 valence electrons ($3d^5 4s^1$), and six carbonyl ligands donate 12 electrons, totaling 18 electrons.",
      idx: 0,
      exp: "$6 + 6 \\times 2 = 18$ electrons. $[\\text{Cr(CO)}_6]$ is an exceptionally stable, diamagnetic 18-electron octahedral complex."
    },
    {
      a: "The $\\text{M}-\\text{C}$ bond in $[\\text{Fe(CO)}_5]$ is purely covalent with no ionic character.",
      r: "Carbon and iron have identical electronegativities.",
      idx: 3,
      exp: "Assertion is false because the $\\text{M}-\\text{C}$ bond has significant polarity due to synergic charge transfer. Reason is also false because iron and carbon have different electronegativities ($1.83$ vs $2.55$)."
    },
    {
      a: "Ligand-to-metal $\\sigma$-donation increases the electron density on the metal, facilitating metal-to-ligand $\\pi$-back-donation.",
      r: "The $\\sigma$-donation and $\\pi$-back-donation reinforce each other in a synergic and cooperative manner.",
      idx: 0,
      exp: "More $\\sigma$-donation increases electron density on the metal, which enhances $\\pi$-back-donation, which in turn reduces charge accumulation on the metal, creating a positive feedback loop."
    },
    {
      a: "The effective atomic number of copper in $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ is 35.",
      r: "Copper is in the $+2$ oxidation state ($Z = 29$) and accepts 8 electrons from four $\\text{NH}_3$ ligands ($29 - 2 + 8 = 35$).",
      idx: 0,
      exp: "$\\text{EAN} = 29 - 2 + 8 = 35$. It falls one electron short of the krypton configuration (36), reflecting its paramagnetism ($d^9$)."
    },
    {
      a: "The effective atomic number of zinc in $[\\text{Zn}(\\text{NH}_3)_4]^{2+}$ is 36.",
      r: "Zinc is in the $+2$ oxidation state ($Z = 30$) and accepts 8 electrons from four ammonia ligands ($30 - 2 + 8 = 36$).",
      idx: 0,
      exp: "$\\text{EAN} = 30 - 2 + 8 = 36$, achieving the noble gas configuration of krypton."
    },
    {
      a: "Five-membered and six-membered chelate rings are thermodynamically the most stable.",
      r: "Five- and six-membered rings have minimal bond angle and torsional strain, resembling stable cyclopentane and cyclohexane rings.",
      idx: 0,
      exp: "Rings with 5 or 6 atoms (including the metal) minimize ring strain and are the most stable chelate geometries."
    },
    {
      a: "The carbonyl ligand binds to transition metals primarily through the oxygen atom.",
      r: "Oxygen is more electronegative than carbon and carries a partial negative charge in the resonance structures of $\\text{CO}$.",
      idx: 3,
      exp: "Assertion is false: $\\text{CO}$ coordinates almost exclusively through the carbon atom because the highest occupied molecular orbital (HOMO) is a carbon-centered lone pair. Reason is true regarding electronegativity, but irrelevant to the donor atom."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 44 MCQs on Bonding in coordination compounds
  const mcqData = [
    {
      q: "What type of bonding exists between metal and carbon monoxide in metal carbonyls?",
      opts: [
        "Synergic bonding involving $\\text{M} \\leftarrow \\text{C}$ $\\sigma$-donation and $\\text{M} \\rightarrow \\text{C}$ $\\pi$-back-donation",
        "Purely ionic bonding",
        "Purely covalent $\\sigma$-bonding only",
        "Hydrogen bonding"
      ],
      c: 0,
      exp: "Metal carbonyls exhibit synergic bonding: carbon donates a lone pair to form a $\\sigma$-bond, while filled metal $d$-orbitals back-donate into the $\\pi^*$ orbitals of $\\text{CO}$."
    },
    {
      q: "In which of the following metal carbonyls is the $\\text{C}-\\text{O}$ bond length the LONGEST?",
      opts: [
        "$[\\text{V(CO)}_6]^-$",
        "$[\\text{Cr(CO)}_6]$",
        "$[\\text{Mn(CO)}_6]^+$",
        "$[\\text{Fe(CO)}_6]^{2+}$"
      ],
      c: 0,
      exp: "$[\\text{V(CO)}_6]^-$ has the highest negative charge, maximizing $\\pi$-back-donation into the $\\pi^*$ antibonding orbitals of $\\text{CO}$, resulting in the weakest and longest $\\text{C}-\\text{O}$ bond."
    },
    {
      q: "In which of the following metal carbonyls is the $\\text{C}-\\text{O}$ bond the STRONGEST (highest $\\nu_{\\text{CO}}$)?",
      opts: [
        "$[\\text{Mn(CO)}_6]^+$",
        "$[\\text{Cr(CO)}_6]$",
        "$[\\text{V(CO)}_6]^-$",
        "$[\\text{Ti(CO)}_6]^{2-}$"
      ],
      c: 0,
      exp: "The positive charge on $[\\text{Mn(CO)}_6]^+$ minimizes $\\pi$-back-donation, leaving the $\\text{C}-\\text{O}$ bond strongest with the highest stretching frequency."
    },
    {
      q: "In which of the following metal carbonyls is the $\\text{M}-\\text{C}$ bond the SHORTEST and strongest?",
      opts: [
        "$[\\text{V(CO)}_6]^-$",
        "$[\\text{Cr(CO)}_6]$",
        "$[\\text{Mn(CO)}_6]^+$",
        "Free $\\text{CO}$"
      ],
      c: 0,
      exp: "Maximum $\\pi$-back-bonding in $[\\text{V(CO)}_6]^-$ increases the $\\text{M}-\\text{C}$ bond order most, making the $\\text{V}-\\text{C}$ bond shortest and strongest."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of iron in $[\\text{Fe}(\\text{CO})_5]$?",
      opts: ["36", "35", "34", "38"],
      c: 0,
      exp: "$\\text{EAN} = 26 - 0 + 2(5) = 36$ (Krypton)."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of nickel in $[\\text{Ni(CO)}_4]$?",
      opts: ["36", "34", "35", "32"],
      c: 0,
      exp: "$\\text{EAN} = 28 - 0 + 2(4) = 36$ (Krypton)."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of chromium in $[\\text{Cr(CO)}_6]$?",
      opts: ["36", "35", "34", "38"],
      c: 0,
      exp: "$\\text{EAN} = 24 - 0 + 2(6) = 36$ (Krypton)."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of cobalt in $[\\text{Co}(\\text{NH}_3)_6]^{3+}$?",
      opts: ["36", "35", "37", "33"],
      c: 0,
      exp: "$\\text{EAN} = 27 - 3 + 2(6) = 36$ (Krypton)."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of iron in $\\text{K}_4[\\text{Fe(CN)}_6]$?",
      opts: ["36", "35", "34", "37"],
      c: 0,
      exp: "$\\text{EAN} = 26 - 2 + 2(6) = 36$ (Krypton)."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of iron in $\\text{K}_3[\\text{Fe(CN)}_6]$?",
      opts: ["35", "36", "34", "37"],
      c: 0,
      exp: "$\\text{EAN} = 26 - 3 + 2(6) = 35$."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of copper in $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$?",
      opts: ["35", "36", "34", "37"],
      c: 0,
      exp: "$\\text{EAN} = 29 - 2 + 2(4) = 35$."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of zinc in $[\\text{Zn}(\\text{NH}_3)_4]^{2+}$?",
      opts: ["36", "35", "34", "38"],
      c: 0,
      exp: "$\\text{EAN} = 30 - 2 + 2(4) = 36$ (Krypton)."
    },
    {
      q: "What is the Effective Atomic Number (EAN) of platinum in $[\\text{Pt}(\\text{NH}_3)_6]^{4+}$ ($Z = 78$)?",
      opts: ["86", "84", "85", "82"],
      c: 0,
      exp: "$\\text{EAN} = 78 - 4 + 2(6) = 86$ (Radon)."
    },
    {
      q: "What is the geometry of dimanganese decacarbonyl $\\text{Mn}_2(\\text{CO})_{10}$?",
      opts: [
        "Two square pyramidal units joined by an $\\text{Mn}-\\text{Mn}$ single bond",
        "Two trigonal bipyramidal units sharing a face",
        "An octahedron with bridging carbonyls",
        "Planar decagon"
      ],
      c: 0,
      exp: "$\\text{Mn}_2(\\text{CO})_{10}$ consists of two square pyramidal $\\text{Mn(CO)}_5$ units connected directly by an $\\text{Mn}-\\text{Mn}$ bond."
    },
    {
      q: "How many bridging carbonyl groups are present in $\\text{Mn}_2(\\text{CO})_{10}$?",
      opts: ["0", "2", "4", "1"],
      c: 0,
      exp: "$\\text{Mn}_2(\\text{CO})_{10}$ has zero bridging carbonyls; all ten carbonyl ligands are terminal."
    },
    {
      q: "How many bridging carbonyl groups are present in $\\text{Co}_2(\\text{CO})_8$ in the crystalline solid state?",
      opts: ["2", "0", "4", "1"],
      c: 0,
      exp: "Solid $\\text{Co}_2(\\text{CO})_8$ contains 2 bridging $\\mu-\\text{CO}$ groups and 6 terminal $\\text{CO}$ groups."
    },
    {
      q: "How many metal-metal ($\\text{Co}-\\text{Co}$) bonds are present in $\\text{Co}_2(\\text{CO})_8$?",
      opts: ["1", "2", "0", "3"],
      c: 0,
      exp: "$\\text{Co}_2(\\text{CO})_8$ has 1 direct $\\text{Co}-\\text{Co}$ single bond."
    },
    {
      q: "How many metal-metal ($\\text{Mn}-\\text{Mn}$) bonds are present in $\\text{Mn}_2(\\text{CO})_{10}$?",
      opts: ["1", "2", "0", "3"],
      c: 0,
      exp: "There is 1 $\\text{Mn}-\\text{Mn}$ covalent bond holding the dimer together."
    },
    {
      q: "What is the total number of valence electrons in the monomeric carbonyl $[\\text{V(CO)}_6]$?",
      opts: ["17", "18", "16", "19"],
      c: 0,
      exp: "Vanadium has 5 valence electrons and six $\\text{CO}$ ligands donate $6 \\times 2 = 12$ electrons: $5 + 12 = 17$ electrons."
    },
    {
      q: "What is the magnetic property of $[\\text{V(CO)}_6]$?",
      opts: ["Paramagnetic with 1 unpaired electron", "Diamagnetic", "Ferromagnetic", "Antiferromagnetic"],
      c: 0,
      exp: "With 17 valence electrons (an odd number), $[\\text{V(CO)}_6]$ has 1 unpaired electron and is paramagnetic."
    },
    {
      q: "Why does $[\\text{V(CO)}_6]$ readily undergo reduction to form $[\\text{V(CO)}_6]^-$?",
      opts: [
        "To achieve a stable 18-electron noble gas configuration",
        "To change its geometry to tetrahedral",
        "To lose a carbonyl ligand",
        "To become paramagnetic"
      ],
      c: 0,
      exp: "Accepting one electron converts the 17-electron species into the highly stable, diamagnetic 18-electron $[\\text{V(CO)}_6]^-$ anion."
    },
    {
      q: "Which of the following complexes obeys the 18-electron rule?",
      opts: [
        "$[\\text{Cr(CO)}_6]$",
        "$[\\text{V(CO)}_6]$",
        "$[\\text{Mn(CO)}_5]$",
        "$[\\text{Co(CO)}_4]$"
      ],
      c: 0,
      exp: "Cr has 6 valence electrons $+ 6 \\times 2 = 18$ electrons. The others have 17, 17, and 17 electrons respectively."
    },
    {
      q: "In the coordination of carbon monoxide to a transition metal, which atom donates the lone pair?",
      opts: ["Carbon", "Oxygen", "Both carbon and oxygen equally", "Neither, it bonds via $\\pi$-electrons only"],
      c: 0,
      exp: "Carbon is the donor atom because the highest occupied molecular orbital (HOMO, $3\\sigma$) is localized mainly on carbon."
    },
    {
      q: "What is the oxidation state of the metal in homoleptic mononuclear metal carbonyls like $[\\text{Ni(CO)}_4]$ and $[\\text{Fe(CO)}_5]$?",
      opts: ["0", "+2", "+1", "+3"],
      c: 0,
      exp: "Carbon monoxide is a neutral ligand, so the oxidation state of the metal is zero."
    },
    {
      q: "The enhanced stability of a coordination complex containing multidentate ligands compared to unidentate ligands is known as the:",
      opts: ["Chelate effect", "Inductive effect", "Jahn-Teller effect", "Zeeman effect"],
      c: 0,
      exp: "The chelate effect refers to the increased thermodynamic stability of chelating complexes over complexes with equivalent monodentate ligands."
    },
    {
      q: "The thermodynamic driving force behind the chelate effect is primarily:",
      opts: [
        "Favourable positive entropy change ($\\Delta S > 0$)",
        "Favourable large negative enthalpy change only",
        "Decrease in entropy",
        "Low temperature"
      ],
      c: 0,
      exp: "A multidentate ligand displaces several monodentate ligands (such as $\\text{H}_2\\text{O}$), releasing more particles into solution and increasing entropy ($\\Delta S > 0$)."
    },
    {
      q: "Which of the following ligands forms the most stable complex with $\\text{Cd}^{2+}$?",
      opts: ["$\\text{EDTA}^{4-}$", "$\\text{en}$", "$\\text{NH}_3$", "$\\text{Cl}^-$"],
      c: 0,
      exp: "$\\text{EDTA}^{4-}$ is a hexadentate ligand forming five chelate rings with the metal, resulting in an exceptionally large chelate stabilization effect."
    },
    {
      q: "How many chelate rings are formed when $\\text{EDTA}^{4-}$ coordinates to a metal ion?",
      opts: ["5", "6", "4", "3"],
      c: 0,
      exp: "A hexadentate ligand like $\\text{EDTA}^{4-}$ forms $6 - 1 = 5$ chelate rings around an octahedrally coordinated metal."
    },
    {
      q: "How many chelate rings are present in $[\\text{Co}(\\text{en})_3]^{3+}$?",
      opts: ["3", "2", "6", "1"],
      c: 0,
      exp: "Each of the three bidentate ethylenediamine ligands forms 1 chelate ring, giving a total of 3 chelate rings."
    },
    {
      q: "How many chelate rings are present in $[\\text{Pt}(\\text{en})_2]^{2+}$?",
      opts: ["2", "4", "1", "3"],
      c: 0,
      exp: "Two bidentate ethylenediamine ligands form 2 chelate rings."
    },
    {
      q: "Which size of chelate ring imparts the greatest thermodynamic stability?",
      opts: ["5- and 6-membered rings", "3-membered rings", "4-membered rings", "8-membered rings"],
      c: 0,
      exp: "Five- and six-membered rings have ideal bond angles that minimize steric strain, conferring maximum stability."
    },
    {
      q: "What is the hapticity of the cyclopentadienyl ligand in ferrocene $[\\text{Fe}(\\eta^5-\\text{C}_5\\text{H}_5)_2]$?",
      opts: ["5", "1", "3", "6"],
      c: 0,
      exp: "All 5 carbon atoms of the cyclopentadienyl ring coordinate simultaneously to iron, so the hapticity is $\\eta^5$."
    },
    {
      q: "What is the oxidation state of iron in ferrocene $[\\text{Fe}(\\eta^5-\\text{C}_5\\text{H}_5)_2]$?",
      opts: ["+2", "+3", "0", "+1"],
      c: 0,
      exp: "Each cyclopentadienyl anion carries a $-1$ charge ($[\\text{C}_5\\text{H}_5]^-$), so iron is in the $+2$ oxidation state ($d^6$, 18-electron complex)."
    },
    {
      q: "What is the hapticity of benzene in $[\\text{Cr}(\\eta^6-\\text{C}_6\\text{H}_6)_2]$?",
      opts: ["6", "4", "2", "3"],
      c: 0,
      exp: "All 6 carbon atoms of each benzene ring are bound to chromium, so the hapticity is $\\eta^6$."
    },
    {
      q: "What is the oxidation state of chromium in dibenzenechromium $[\\text{Cr}(\\eta^6-\\text{C}_6\\text{H}_6)_2]$?",
      opts: ["0", "+2", "+3", "+1"],
      c: 0,
      exp: "Benzene is a neutral ligand, so chromium is in the $0$ oxidation state."
    },
    {
      q: "How many electrons are donated by each benzene ring in $[\\text{Cr}(\\eta^6-\\text{C}_6\\text{H}_6)_2]$?",
      opts: ["6", "2", "4", "8"],
      c: 0,
      exp: "The $\\pi$-system of benzene contributes $6$ electrons to the metal."
    },
    {
      q: "In Zeise's salt $\\text{K}[\\text{PtCl}_3(\\eta^2-\\text{C}_2\\text{H}_4)]$, what is the hapticity of ethylene?",
      opts: ["2", "1", "3", "4"],
      c: 0,
      exp: "Both carbon atoms of the double bond participate in bonding to platinum, so the hapticity is $\\eta^2$."
    },
    {
      q: "In $\\text{Fe}_3(\\text{CO})_{12}$, how many bridging and terminal $\\text{CO}$ ligands are present?",
      opts: [
        "2 bridging and 10 terminal",
        "0 bridging and 12 terminal",
        "4 bridging and 8 terminal",
        "3 bridging and 9 terminal"
      ],
      c: 0,
      exp: "Triiron dodecacarbonyl contains 2 bridging $\\mu-\\text{CO}$ ligands and 10 terminal $\\text{CO}$ ligands."
    },
    {
      q: "What is the geometry of $[\\text{Ni(CO)}_4]$?",
      opts: ["Tetrahedral", "Square planar", "Octahedral", "Linear"],
      c: 0,
      exp: "Nickel tetracarbonyl has $sp^3$ hybridization with a tetrahedral geometry."
    },
    {
      q: "What is the geometry of $[\\text{Fe(CO)}_5]$?",
      opts: ["Trigonal bipyramidal", "Square pyramidal", "Octahedral", "Tetrahedral"],
      c: 0,
      exp: "Iron pentacarbonyl has $dsp^3$ hybridization and adopts a trigonal bipyramidal geometry."
    },
    {
      q: "What is the geometry of $[\\text{Cr(CO)}_6]$?",
      opts: ["Octahedral", "Tetrahedral", "Trigonal bipyramidal", "Square planar"],
      c: 0,
      exp: "Hexacarbonylchromium(0) has an octahedral geometry."
    },
    {
      q: "Which of the following compounds has a metal-metal single bond?",
      opts: [
        "$\\text{Mn}_2(\\text{CO})_{10}$",
        "$[\\text{Fe(CO)}_5]$",
        "$[\\text{Ni(CO)}_4]$",
        "$[\\text{Cr(CO)}_6]$"
      ],
      c: 0,
      exp: "$\\text{Mn}_2(\\text{CO})_{10}$ contains a direct $\\text{Mn}-\\text{Mn}$ single covalent bond."
    },
    {
      q: "How many total valence electrons are present per manganese atom in $\\text{Mn}_2(\\text{CO})_{10}$?",
      opts: ["18", "17", "16", "36"],
      c: 0,
      exp: "Each Mn has 7 valence electrons $+ 5 \\times 2$ (from $5\\text{CO}$) $+ 1$ (from $\\text{Mn}-\\text{Mn}$) $= 18$ electrons."
    },
    {
      q: "How many total valence electrons are present per cobalt atom in $\\text{Co}_2(\\text{CO})_8$?",
      opts: ["18", "17", "16", "36"],
      c: 0,
      exp: "Each Co has 9 valence electrons $+ 3 \\times 2$ (terminal) $+ 2 \\times 1$ (bridging) $+ 1$ (Co-Co) $= 18$ electrons."
    }
  ];

  mcqData.slice(0, 44).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "What is the Effective Atomic Number (EAN) of nickel in $[\\text{Ni(CO)}_4]$?",
    "36",
    "$\\text{EAN} = 28 - 0 + 2(4) = 36$."
  ));
  list.push(createNumerical(st,
    "What is the Effective Atomic Number (EAN) of iron in $[\\text{Fe(CO)}_5]$?",
    "36",
    "$\\text{EAN} = 26 - 0 + 2(5) = 36$."
  ));
  list.push(createNumerical(st,
    "What is the Effective Atomic Number (EAN) of chromium in $[\\text{Cr(CO)}_6]$?",
    "36",
    "$\\text{EAN} = 24 - 0 + 2(6) = 36$."
  ));
  list.push(createNumerical(st,
    "What is the Effective Atomic Number (EAN) of iron in $\\text{K}_4[\\text{Fe(CN)}_6]$?",
    "36",
    "$\\text{EAN} = 26 - 2 + 2(6) = 36$."
  ));
  list.push(createNumerical(st,
    "What is the Effective Atomic Number (EAN) of cobalt in $[\\text{Co}(\\text{NH}_3)_6]^{3+}$?",
    "36",
    "$\\text{EAN} = 27 - 3 + 2(6) = 36$."
  ));
  list.push(createNumerical(st,
    "How many metal-metal ($\\text{Mn}-\\text{Mn}$) bonds are present in $\\text{Mn}_2(\\text{CO})_{10}$?",
    "1",
    "There is exactly $1$ $\\text{Mn}-\\text{Mn}$ single covalent bond."
  ));
  list.push(createNumerical(st,
    "How many metal-metal ($\\text{Co}-\\text{Co}$) bonds are present in $\\text{Co}_2(\\text{CO})_8$?",
    "1",
    "There is $1$ $\\text{Co}-\\text{Co}$ bond in $\\text{Co}_2(\\text{CO})_8$."
  ));
  list.push(createNumerical(st,
    "How many bridging carbonyl ligands are present in solid $\\text{Co}_2(\\text{CO})_8$?",
    "2",
    "There are $2$ bridging $\\mu-\\text{CO}$ ligands in solid $\\text{Co}_2(\\text{CO})_8$."
  ));
  list.push(createNumerical(st,
    "How many terminal carbonyl ligands are present in solid $\\text{Co}_2(\\text{CO})_8$?",
    "6",
    "There are $6$ terminal $\\text{CO}$ ligands in solid $\\text{Co}_2(\\text{CO})_8$."
  ));
  list.push(createNumerical(st,
    "How many bridging carbonyl ligands are present in $\\text{Mn}_2(\\text{CO})_{10}$?",
    "0",
    "$\\text{Mn}_2(\\text{CO})_{10}$ contains zero bridging carbonyls; all $10$ are terminal."
  ));
  list.push(createNumerical(st,
    "How many chelate rings are formed when one $\\text{EDTA}^{4-}$ ligand coordinates to a metal ion?",
    "5",
    "$\\text{EDTA}^{4-}$ forms $5$ chelate rings around a single metal center."
  ));
  list.push(createNumerical(st,
    "How many chelate rings are present in $[\\text{Co}(\\text{en})_3]^{3+}$?",
    "3",
    "Each of the three ethylenediamine ligands forms $1$ ring, giving $3$ chelate rings."
  ));
  list.push(createNumerical(st,
    "What is the total number of valence electrons in the monomer $[\\text{V(CO)}_6]$?",
    "17",
    "Vanadium contributes $5$ electrons and six $\\text{CO}$ ligands contribute $12$ electrons: $5 + 12 = 17$ electrons."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 6...");
const allPart6 = buildPart6();
console.log(`Total Part 6 questions: ${allPart6.length} (Expected: 83)`);

allPart6.forEach((q, idx) => {
  checkKatex(q.question, `Part6[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part6[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part6[${idx}].explanation`);
});

console.log("All Part 6 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 6
module.exports = ${JSON.stringify(allPart6, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part6.js', fileContent);
console.log("Written scripts/data_coord_part6.js successfully!");
