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
// Subtopic 4: Valence bond theory (VBT)
// Needed: 83 Qs (26 AR, 44 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart4() {
  const st = "Valence bond theory (VBT)";
  const list = [];

  const arData = [
    {
      a: "$[\\text{Ni(CN)}_4]^{2-}$ is diamagnetic, whereas $[\\text{NiCl}_4]^{2-}$ is paramagnetic.",
      r: "$\\text{CN}^-$ is a strong field ligand that forces pairing of the $3d^8$ electrons in $\\text{Ni}^{2+}$, resulting in $dsp^2$ hybridization, while weak field $\\text{Cl}^-$ leaves two unpaired electrons in $sp^3$ hybridization.",
      idx: 0,
      exp: "In $[\\text{Ni(CN)}_4]^{2-}$, pairing leaves zero unpaired electrons and a vacant $3d$ orbital for square planar $dsp^2$ hybridization. In $[\\text{NiCl}_4]^{2-}$, tetrahedral $sp^3$ hybridization occurs with two unpaired electrons ($\\mu = 2.83\\text{ BM}$)."
    },
    {
      a: "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is a diamagnetic, low-spin, inner orbital complex.",
      r: "Ammonia is a strong field ligand that causes pairing of the six $3d$ electrons of $\\text{Co}^{3+}$ into three $t_{2g}$ orbitals, freeing two $3d$ orbitals for $d^2sp^3$ hybridization.",
      idx: 0,
      exp: "$\\text{Co}^{3+}$ is a $3d^6$ ion. Under strong field $\\text{NH}_3$ ligands, all 6 electrons pair up ($t_{2g}^6 e_g^0$), leaving two vacant $3d$ orbitals for $d^2sp^3$ hybridization and $\\mu = 0$."
    },
    {
      a: "$[\\text{CoF}_6]^{3-}$ is a paramagnetic, high-spin, outer orbital complex.",
      r: "Fluoride ion is a weak field ligand and cannot force pairing of $3d$ electrons in $\\text{Co}^{3+}$, resulting in four unpaired electrons and $sp^3d^2$ hybridization.",
      idx: 0,
      exp: "With weak field $\\text{F}^-$, $\\text{Co}^{3+}$ ($3d^6$) adopts high-spin $t_{2g}^4 e_g^2$ configuration with 4 unpaired electrons ($\\mu = 4.90\\text{ BM}$), utilizing outer $4d$ orbitals ($sp^3d^2$)."
    },
    {
      a: "$[\\text{Fe(CN)}_6]^{4-}$ is diamagnetic, whereas $[\\text{Fe(H}_2\\text{O})_6]^{2+}$ is paramagnetic.",
      r: "In both complexes, iron is in the $+2$ oxidation state ($3d^6$), but $\\text{CN}^-$ causes electron pairing ($d^2sp^3$), while $\\text{H}_2\\text{O}$ does not ($sp^3d^2$, 4 unpaired electrons).",
      idx: 0,
      exp: "$[\\text{Fe(CN)}_6]^{4-}$ has paired $3d^6$ electrons with $n=0$ (diamagnetic), whereas $[\\text{Fe(H}_2\\text{O})_6]^{2+}$ has 4 unpaired electrons ($\\mu \\approx 4.9\\text{ BM}$)."
    },
    {
      a: "$[\\text{Ni(CO)}_4]$ is a tetrahedral complex that is diamagnetic.",
      r: "In the presence of the strong field $\\text{CO}$ ligand, the two $4s$ electrons of nickel ($3d^8 4s^2$) are forced into the $3d$ subshell to form a completely filled $3d^{10}$ configuration.",
      idx: 0,
      exp: "Nickel(0) has configuration $3d^8 4s^2$. Strong field $\\text{CO}$ shifts $4s$ electrons into $3d$, forming $3d^{10}$ with zero unpaired electrons, followed by $sp^3$ hybridization."
    },
    {
      a: "Valence bond theory cannot explain the colours of coordination compounds.",
      r: "Valence bond theory does not account for the splitting of $d$-orbitals or $d-d$ electronic transitions caused by the ligand field.",
      idx: 0,
      exp: "VBT treats coordinate bonding purely in terms of hybridized orbital overlap and cannot explain ligand field splitting or optical absorption spectra."
    },
    {
      a: "$[\\text{PtCl}_4]^{2-}$ is square planar, whereas $[\\text{NiCl}_4]^{2-}$ is tetrahedral.",
      r: "Due to larger $5d$ orbitals and higher effective nuclear charge in platinum, even weak field ligands like $\\text{Cl}^-$ cause large crystal field splitting, favoring $dsp^2$ hybridization.",
      idx: 0,
      exp: "Heavier transition metals ($4d$ and $5d$) experience much larger ligand field splitting (approx. $50\\%$ greater than $3d$), so $5d^8$ $\\text{Pt}^{2+}$ complexes are almost exclusively low-spin square planar ($dsp^2$)."
    },
    {
      a: "The magnetic moment of $[\\text{Fe(CN)}_6]^{3-}$ is $1.73\\text{ BM}$.",
      r: "Iron is in the $+3$ oxidation state ($3d^5$), and strong field $\\text{CN}^-$ leaves only one unpaired electron in the paired $t_{2g}^5$ state.",
      idx: 0,
      exp: "For $n = 1$, the spin-only formula gives $\\mu = \\sqrt{1(1+2)} = \\sqrt{3} \\approx 1.73\\text{ BM}$. Both statements are true and Reason explains Assertion."
    },
    {
      a: "The magnetic moment of $[\\text{FeF}_6]^{3-}$ is $5.92\\text{ BM}$.",
      r: "$\\text{Fe}^{3+}$ has five unpaired electrons in the presence of the weak field $\\text{F}^-$ ligand ($3d^5$, high-spin).",
      idx: 0,
      exp: "With 5 unpaired electrons ($n = 5$), $\\mu = \\sqrt{5(5+2)} = \\sqrt{35} \\approx 5.92\\text{ BM}$."
    },
    {
      a: "$[\\text{Mn(CN)}_6]^{3-}$ is an inner orbital complex with a magnetic moment of $2.83\\text{ BM}$.",
      r: "$\\text{Mn}^{3+}$ is a $3d^4$ ion, and $\\text{CN}^-$ causes pairing to leave two unpaired electrons in $d^2sp^3$ hybridization.",
      idx: 0,
      exp: "In $[\\text{Mn(CN)}_6]^{3-}$, the $3d^4$ electrons occupy three $d$-orbitals ($t_{2g}^4 e_g^0$) with 2 unpaired electrons: $\\mu = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.83\\text{ BM}$."
    },
    {
      a: "$[\\text{Cr}(\\text{NH}_3)_6]^{3+}$ is paramagnetic with three unpaired electrons.",
      r: "$\\text{Cr}^{3+}$ is a $3d^3$ ion and has two vacant $3d$ orbitals available for $d^2sp^3$ hybridization without needing electron pairing.",
      idx: 0,
      exp: "Chromium(III) has three $3d$ electrons ($3d^3$). It always forms $d^2sp^3$ inner orbital complexes with 3 unpaired electrons ($\\\\mu = 3.87\\text{ BM}$) regardless of ligand strength."
    },
    {
      a: "The complex $[\\text{Zn}(\\text{NH}_3)_4]^{2+}$ is diamagnetic and has a tetrahedral geometry.",
      r: "$\\text{Zn}^{2+}$ has a completely filled $3d^{10}$ subshell, leaving $4s$ and $4p$ orbitals for $sp^3$ hybridization.",
      idx: 0,
      exp: "With a $3d^{10}$ configuration, no $3d$ orbitals can be emptied, so zinc utilizes $4s$ and $4p$ orbitals for $sp^3$ tetrahedral geometry."
    },
    {
      a: "$[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ is paramagnetic with one unpaired electron.",
      r: "Copper(II) has a $3d^9$ electronic configuration.",
      idx: 0,
      exp: "$\\text{Cu}^{2+}$ ($d^9$) has one unpaired electron, giving $\\mu = \\sqrt{1(3)} = 1.73\\text{ BM}$."
    },
    {
      a: "Valence bond theory provides an exact, quantitative explanation of the spectrochemical series.",
      r: "Valence bond theory accurately calculates crystal field stabilization energies for all ligands.",
      idx: 3,
      exp: "Assertion is false: VBT cannot explain why some ligands are strong and others weak (it cannot predict the spectrochemical series). Reason is also false because CFSE is a concept of Crystal Field Theory, not VBT."
    },
    {
      a: "$[\\text{Ni}(\\text{H}_2\\text{O})_6]^{2+}$ is an outer orbital octahedral complex.",
      r: "Water is a weak field ligand and cannot force pairing in the $3d^8$ configuration of $\\text{Ni}^{2+}$, so $4s, 4p$, and $4d$ orbitals undergo $sp^3d^2$ hybridization.",
      idx: 0,
      exp: "In $[\\text{Ni}(\\text{H}_2\\text{O})_6]^{2+}$, $\\text{Ni}^{2+}$ ($3d^8$) retains two unpaired electrons in $3d$, using $4s, 4p^3, 4d^2$ ($sp^3d^2$) with $\\mu \\approx 2.83\\text{ BM}$."
    },
    {
      a: "The complex $[\\text{CoF}_6]^{3-}$ has the same number of unpaired electrons as $[\\text{Fe(H}_2\\text{O})_6]^{2+}$.",
      r: "Both $\\text{Co}^{3+}$ and $\\text{Fe}^{2+}$ are $d^6$ ions coordinated to weak field ligands, each having four unpaired electrons.",
      idx: 0,
      exp: "Both are high-spin $d^6$ complexes with $t_{2g}^4 e_g^2$ electron configuration containing 4 unpaired electrons ($\\mu = 4.90\\text{ BM}$)."
    },
    {
      a: "A complex of metal ion having $d^1, d^2$, or $d^3$ configuration always forms inner orbital octahedral complexes.",
      r: "There are already two vacant $(n-1)d$ orbitals inherently available for $d^2sp^3$ hybridization without requiring electron pairing.",
      idx: 0,
      exp: "For $d^1, d^2, d^3$ configurations (e.g. $\\text{Ti}^{3+}, \\text{V}^{3+}, \\text{Cr}^{3+}$), two $(n-1)d$ orbitals are always empty, so they directly undergo $d^2sp^3$ inner orbital hybridization."
    },
    {
      a: "Outer orbital complexes are generally more labile than inner orbital complexes.",
      r: "Outer $nd$ orbitals are more diffuse and further from the nucleus, resulting in weaker and more readily substituted metal-ligand coordinate bonds.",
      idx: 0,
      exp: "Outer orbital complexes involve higher energy $4d$ orbitals which have poorer overlap with ligand orbitals, making them kinetically more labile to substitution."
    },
    {
      a: "The hybridization of $[\\text{Fe}(\\text{CO})_5]$ is $dsp^3$.",
      r: "Strong field $\\text{CO}$ ligands force pairing of the $3d^8$ electrons in $\\text{Fe}(0)$ to empty one $3d$ orbital for trigonal bipyramidal $dsp^3$ hybridization.",
      idx: 0,
      exp: "Iron(0) is $3d^6 4s^2$. Under strong $\\text{CO}$, it rearranges to $3d^8$, leaving one $3d$ orbital vacant for $dsp^3$ hybridization, making $[\\text{Fe}(\\text{CO})_5]$ diamagnetic."
    },
    {
      a: "$[\\text{Fe(CN)}_6]^{4-}$ and $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ are both diamagnetic.",
      r: "Both $\\text{Fe}^{2+}$ and $\\text{Co}^{3+}$ have a $3d^6$ configuration and exist as low-spin inner orbital complexes ($t_{2g}^6$).",
      idx: 0,
      exp: "In both complexes, strong field ligands cause all six $3d$ electrons to pair up into $t_{2g}$ orbitals, leaving no unpaired electrons."
    },
    {
      a: "$[\\text{Co}(\\text{H}_2\\text{O})_6]^{3+}$ is diamagnetic, whereas $[\\text{CoF}_6]^{3-}$ is paramagnetic.",
      r: "Water acts as a strong field ligand toward $\\text{Co}^{3+}$ due to its high positive charge density, causing pairing, while $\\text{F}^-$ is too weak.",
      idx: 0,
      exp: "Because $\\text{Co}^{3+}$ has high charge density, water exerts a strong enough field to overcome pairing energy, making $[\\text{Co}(\\text{H}_2\\text{O})_6]^{3+}$ low-spin and diamagnetic."
    },
    {
      a: "The hybridization of cobalt in $[\\text{Co}(\\text{ox})_3]^{3-}$ is $d^2sp^3$.",
      r: "Oxalate forms a stable chelate ring that causes electron pairing of the $3d^6$ electrons in $\\text{Co}^{3+}$.",
      idx: 0,
      exp: "With $\\text{Co}^{3+}$, oxalate functions as a strong chelating field ligand, pairing all six electrons into an inner orbital $d^2sp^3$ diamagnetic complex."
    },
    {
      a: "The spin-only magnetic moment of $[\\text{NiCl}_4]^{2-}$ is approximately $2.83\\text{ BM}$.",
      r: "In $[\\text{NiCl}_4]^{2-}$, nickel(II) has two unpaired electrons in its $sp^3$ tetrahedral arrangement.",
      idx: 0,
      exp: "With $n = 2$, $\\mu = \\sqrt{2(2+2)} = \\sqrt{8} \\approx 2.83\\text{ BM}$."
    },
    {
      a: "Square planar complexes of $\\text{Pd}^{2+}$ and $\\text{Pt}^{2+}$ are invariably diamagnetic.",
      r: "The strong crystal field splitting in $4d$ and $5d$ elements forces the eight valence electrons of $\\text{M}^{2+}$ into the four lower-energy $d$-orbitals, leaving the high-energy $d_{x^2-y^2}$ orbital empty.",
      idx: 0,
      exp: "Due to very large crystal field splitting in $4d/5d$ series, $d^8$ ions like $\\text{Pd}^{2+}$ and $\\text{Pt}^{2+}$ always adopt diamagnetic square planar geometries ($dsp^2$)."
    },
    {
      a: "The complex $[\\text{V(H}_2\\text{O})_6]^{3+}$ is paramagnetic with two unpaired electrons.",
      r: "$\\text{V}^{3+}$ has a $3d^2$ electronic configuration.",
      idx: 0,
      exp: "Vanadium(III) has two electrons in the $3d$ subshell ($n = 2$), giving $\\mu = \\sqrt{8} \\approx 2.83\\text{ BM}$."
    },
    {
      a: "Valence bond theory fails to distinguish between weak field and strong field ligands.",
      r: "VBT relies on experimental magnetic moments to postulate whether pairing of electrons has occurred.",
      idx: 0,
      exp: "VBT has no theoretical mechanism to predict whether a ligand will cause pairing; it deduces hybridization retroactively from experimentally measured magnetic moments."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 44 MCQs on VBT
  const mcqData = [
    {
      q: "What is the hybridization, geometry, and magnetic behavior of $[\\text{Ni(CN)}_4]^{2-}$?",
      opts: [
        "$dsp^2$, square planar, diamagnetic",
        "$sp^3$, tetrahedral, paramagnetic",
        "$sp^3$, tetrahedral, diamagnetic",
        "$dsp^2$, square planar, paramagnetic"
      ],
      c: 0,
      exp: "$\\text{CN}^-$ forces pairing of the $3d^8$ electrons of $\\text{Ni}^{2+}$, freeing one $3d$ orbital for $dsp^2$ square planar hybridization with zero unpaired electrons (diamagnetic)."
    },
    {
      q: "What is the hybridization, geometry, and magnetic behavior of $[\\text{NiCl}_4]^{2-}$?",
      opts: [
        "$sp^3$, tetrahedral, paramagnetic",
        "$dsp^2$, square planar, diamagnetic",
        "$sp^3$, tetrahedral, diamagnetic",
        "$dsp^2$, square planar, paramagnetic"
      ],
      c: 0,
      exp: "$\\text{Cl}^-$ is a weak field ligand and cannot force pairing in $\\text{Ni}^{2+}$ ($3d^8$). The empty $4s$ and $4p$ orbitals undergo $sp^3$ hybridization, forming a tetrahedral complex with 2 unpaired electrons."
    },
    {
      q: "What is the hybridization and magnetic property of $[\\text{Ni(CO)}_4]$?",
      opts: [
        "$sp^3$, diamagnetic",
        "$dsp^2$, diamagnetic",
        "$sp^3$, paramagnetic",
        "$d^2sp^3$, diamagnetic"
      ],
      c: 0,
      exp: "Strong field $\\text{CO}$ pairs $4s$ electrons into $3d$, giving $3d^{10}$ with zero unpaired electrons (diamagnetic) and tetrahedral $sp^3$ hybridization."
    },
    {
      q: "Which of the following complexes is an inner orbital complex?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{CoF}_6]^{3-}$",
        "$[\\text{FeF}_6]^{3-}$",
        "$[\\text{Ni}(\\text{H}_2\\text{O})_6]^{2+}$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$ utilizes inner $(n-1)d$ orbitals for $d^2sp^3$ hybridization due to the strong field $\\text{NH}_3$ ligand."
    },
    {
      q: "Which of the following complexes is an outer orbital complex?",
      opts: [
        "$[\\text{CoF}_6]^{3-}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Fe(CN)}_6]^{4-}$",
        "$[\\text{Mn(CN)}_6]^{3-}$"
      ],
      c: 0,
      exp: "$[\\text{CoF}_6]^{3-}$ uses outer $4d$ orbitals ($sp^3d^2$ hybridization) because $\\text{F}^-$ is a weak field ligand."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Fe(CN)}_6]^{4-}$ is:",
      opts: ["$0\\text{ BM}$", "$1.73\\text{ BM}$", "$2.83\\text{ BM}$", "$4.90\\text{ BM}$"],
      c: 0,
      exp: "In $[\\text{Fe(CN)}_6]^{4-}$, $\\text{Fe}^{2+}$ ($3d^6$) is low-spin with all electrons paired ($n = 0$), so $\\mu = 0\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Fe(H}_2\\text{O})_6]^{2+}$ is:",
      opts: ["$4.90\\text{ BM}$", "$0\\text{ BM}$", "$2.83\\text{ BM}$", "$5.92\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Fe}^{2+}$ ($3d^6$) with weak field $\\text{H}_2\\text{O}$ has 4 unpaired electrons: $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Fe(CN)}_6]^{3-}$ is:",
      opts: ["$1.73\\text{ BM}$", "$5.92\\text{ BM}$", "$2.83\\text{ BM}$", "$0\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Fe}^{3+}$ ($3d^5$) in the presence of strong field $\\text{CN}^-$ pairs up to leave 1 unpaired electron: $\\mu = \\sqrt{1(3)} \\approx 1.73\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{FeF}_6]^{3-}$ is:",
      opts: ["$5.92\\text{ BM}$", "$1.73\\text{ BM}$", "$4.90\\text{ BM}$", "$3.87\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Fe}^{3+}$ ($3d^5$) with weak field $\\text{F}^-$ has 5 unpaired electrons: $\\mu = \\sqrt{5(7)} = \\sqrt{35} \\approx 5.92\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{CoF}_6]^{3-}$ is:",
      opts: ["$4.90\\text{ BM}$", "$0\\text{ BM}$", "$1.73\\text{ BM}$", "$3.87\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Co}^{3+}$ ($3d^6$) with weak field $\\text{F}^-$ has 4 unpaired electrons: $\\mu = \\sqrt{4(6)} = \\sqrt{24} \\approx 4.90\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is:",
      opts: ["$0\\text{ BM}$", "$4.90\\text{ BM}$", "$1.73\\text{ BM}$", "$2.83\\text{ BM}$"],
      c: 0,
      exp: "Low-spin $d^6$ complex with all electrons paired: $\\mu = 0\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Cr}(\\text{H}_2\\text{O})_6]^{3+}$ is:",
      opts: ["$3.87\\text{ BM}$", "$1.73\\text{ BM}$", "$2.83\\text{ BM}$", "$4.90\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Cr}^{3+}$ is $3d^3$ ($n = 3$), giving $\\mu = \\sqrt{3(5)} = \\sqrt{15} \\approx 3.87\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Mn(CN)}_6]^{3-}$ is:",
      opts: ["$2.83\\text{ BM}$", "$4.90\\text{ BM}$", "$5.92\\text{ BM}$", "$1.73\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Mn}^{3+}$ ($3d^4$) paired by $\\text{CN}^-$ has 2 unpaired electrons: $\\mu = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.83\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{Mn(H}_2\\text{O})_6]^{2+}$ is:",
      opts: ["$5.92\\text{ BM}$", "$4.90\\text{ BM}$", "$1.73\\text{ BM}$", "$3.87\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Mn}^{2+}$ ($3d^5$) with weak field $\\text{H}_2\\text{O}$ has 5 unpaired electrons: $\\mu = \\sqrt{35} \\approx 5.92\\text{ BM}$."
    },
    {
      q: "The spin-only magnetic moment of $[\\text{NiCl}_4]^{2-}$ is:",
      opts: ["$2.83\\text{ BM}$", "$0\\text{ BM}$", "$1.73\\text{ BM}$", "$3.87\\text{ BM}$"],
      c: 0,
      exp: "$\\text{Ni}^{2+}$ ($3d^8$) in a tetrahedral field has 2 unpaired electrons: $\\mu = \\sqrt{8} \\approx 2.83\\text{ BM}$."
    },
    {
      q: "Which of the following has $d^2sp^3$ hybridization?",
      opts: [
        "$[\\text{Fe(CN)}_6]^{3-}$",
        "$[\\text{FeF}_6]^{3-}$",
        "$[\\text{CoF}_6]^{3-}$",
        "$[\\text{Ni}(\\text{NH}_3)_6]^{2+}$"
      ],
      c: 0,
      exp: "$[\\text{Fe(CN)}_6]^{3-}$ uses inner $3d$ orbitals for $d^2sp^3$ hybridization."
    },
    {
      q: "Which of the following has $sp^3d^2$ hybridization?",
      opts: [
        "$[\\text{FeF}_6]^{3-}$",
        "$[\\text{Fe(CN)}_6]^{3-}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Cr}(\\text{NH}_3)_6]^{3+}$"
      ],
      c: 0,
      exp: "$[\\text{FeF}_6]^{3-}$ is an outer orbital complex with $sp^3d^2$ hybridization."
    },
    {
      q: "What is the hybridization of copper in $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ according to Pauling?",
      opts: ["$dsp^2$", "$sp^3$", "$d^2sp^3$", "$sp^3d$"],
      c: 0,
      exp: "Pauling proposed $dsp^2$ hybridization for square planar $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$, postulating that the 9th electron is promoted to a $4p$ orbital."
    },
    {
      q: "Which of the following complexes is diamagnetic?",
      opts: [
        "$[\\text{Zn}(\\text{NH}_3)_4]^{2+}$",
        "$[\\text{Cu}(\\text{NH}_3)_4]^{2+}$",
        "$[\\text{NiCl}_4]^{2-}$",
        "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$"
      ],
      c: 0,
      exp: "$\\text{Zn}^{2+}$ is $3d^{10}$, so all electrons are paired, making $[\\text{Zn}(\\text{NH}_3)_4]^{2+}$ diamagnetic."
    },
    {
      q: "Which of the following pairs of complexes are isostructural?",
      opts: [
        "$[\\text{PtCl}_4]^{2-}$ and $[\\text{Ni(CN)}_4]^{2-}$",
        "$[\\text{NiCl}_4]^{2-}$ and $[\\text{PtCl}_4]^{2-}$",
        "$[\\text{Ni(CO)}_4]$ and $[\\text{Ni(CN)}_4]^{2-}$",
        "$[\\text{NiCl}_4]^{2-}$ and $[\\text{Ni(CO)}_4]$"
      ],
      c: 0,
      exp: "Both $[\\text{PtCl}_4]^{2-}$ and $[\\text{Ni(CN)}_4]^{2-}$ are square planar complexes ($dsp^2$ hybridization)."
    },
    {
      q: "What is the hybridization and geometry of $[\\text{Fe}(\\text{CO})_5]$?",
      opts: [
        "$dsp^3$, trigonal bipyramidal",
        "$sp^3d$, square pyramidal",
        "$d^2sp^2$, square planar",
        "$sp^3d^2$, octahedral"
      ],
      c: 0,
      exp: "$[\\text{Fe}(\\text{CO})_5]$ has $dsp^3$ hybridization with a trigonal bipyramidal geometry and zero unpaired electrons."
    },
    {
      q: "Which of the following ions has the highest magnetic moment?",
      opts: [
        "$[\\text{FeF}_6]^{3-}$",
        "$[\\text{Fe(CN)}_6]^{3-}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Ni(CN)}_4]^{2-}$"
      ],
      c: 0,
      exp: "$[\\text{FeF}_6]^{3-}$ has 5 unpaired electrons, giving $\\mu = 5.92\\text{ BM}$, the highest among the options."
    },
    {
      q: "How many unpaired electrons are present in $[\\text{Cr}(\\text{NH}_3)_6]^{3+}$?",
      opts: ["3", "0", "1", "2"],
      c: 0,
      exp: "$\\text{Cr}^{3+}$ has a $3d^3$ configuration with 3 unpaired electrons."
    },
    {
      q: "How many unpaired electrons are present in $[\\text{Ti(H}_2\\text{O})_6]^{3+}$?",
      opts: ["1", "0", "2", "3"],
      c: 0,
      exp: "$\\text{Ti}^{3+}$ is a $3d^1$ ion, containing exactly 1 unpaired electron."
    },
    {
      q: "How many unpaired electrons are present in $[\\text{Sc}(\\text{H}_2\\text{O})_6]^{3+}$?",
      opts: ["0", "1", "2", "3"],
      c: 0,
      exp: "$\\text{Sc}^{3+}$ has an argon configuration ($3d^0$), containing 0 unpaired electrons (diamagnetic)."
    },
    {
      q: "Which of the following complexes is square planar?",
      opts: [
        "$[\\text{Pt(NH}_3)_4]^{2+}$",
        "$[\\text{Zn(NH}_3)_4]^{2+}$",
        "$[\\text{Ni(CO)}_4]$",
        "$[\\text{FeCl}_4]^-$"
      ],
      c: 0,
      exp: "$[\\text{Pt(NH}_3)_4]^{2+}$ is a $5d^8$ complex that adopts a square planar geometry ($dsp^2$)."
    },
    {
      q: "Which of the following geometry and hybridization pairs is INCORRECT?",
      opts: [
        "$[\\text{Ni(CO)}_4]$: square planar, $dsp^2$",
        "$[\\text{Ni(CN)}_4]^{2-}$: square planar, $dsp^2$",
        "$[\\text{NiCl}_4]^{2-}$: tetrahedral, $sp^3$",
        "$[\\text{Fe(CO)}_5]$: trigonal bipyramidal, $dsp^3$"
      ],
      c: 0,
      exp: "$[\\text{Ni(CO)}_4]$ is tetrahedral ($sp^3$), not square planar ($dsp^2$)."
    },
    {
      q: "In $[\\text{Co}(\\text{en})_3]^{3+}$, the hybridization of cobalt is:",
      opts: ["$d^2sp^3$", "$sp^3d^2$", "$dsp^2$", "$sp^3$"],
      c: 0,
      exp: "Ethylenediamine is a strong chelating ligand that pairs up $3d^6$ electrons of $\\text{Co}^{3+}$ to give $d^2sp^3$ inner orbital hybridization."
    },
    {
      q: "What is the magnetic moment of $[\\text{V}(\\text{H}_2\\text{O})_6]^{3+}$?",
      opts: ["$2.83\\text{ BM}$", "$1.73\\text{ BM}$", "$3.87\\text{ BM}$", "$4.90\\text{ BM}$"],
      c: 0,
      exp: "$\\text{V}^{3+}$ is $3d^2$ ($n = 2$), so $\\mu = \\sqrt{2(4)} = 2.83\\text{ BM}$."
    },
    {
      q: "Which complex has magnetic moment $\\mu = 0\\text{ BM}$?",
      opts: [
        "$[\\text{Fe(CN)}_6]^{4-}$",
        "$[\\text{Fe(CN)}_6]^{3-}$",
        "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$",
        "$[\\text{Fe(H}_2\\text{O})_6]^{3+}$"
      ],
      c: 0,
      exp: "$[\\text{Fe(CN)}_6]^{4-}$ has low-spin $3d^6$ ($n = 0$), so $\\mu = 0\\text{ BM}$."
    },
    {
      q: "A magnetic moment of $1.73\\text{ BM}$ indicates the presence of how many unpaired electrons?",
      opts: ["1", "2", "3", "4"],
      c: 0,
      exp: "$\\mu = \\sqrt{n(n+2)}$. For $n = 1$, $\\mu = \\sqrt{3} \\approx 1.73\\text{ BM}$."
    },
    {
      q: "A magnetic moment of $2.83\\text{ BM}$ indicates the presence of how many unpaired electrons?",
      opts: ["2", "1", "3", "4"],
      c: 0,
      exp: "For $n = 2$, $\\mu = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.83\\text{ BM}$."
    },
    {
      q: "A magnetic moment of $3.87\\text{ BM}$ indicates the presence of how many unpaired electrons?",
      opts: ["3", "2", "4", "5"],
      c: 0,
      exp: "For $n = 3$, $\\mu = \\sqrt{3(5)} = \\sqrt{15} \\approx 3.87\\text{ BM}$."
    },
    {
      q: "A magnetic moment of $4.90\\text{ BM}$ indicates the presence of how many unpaired electrons?",
      opts: ["4", "3", "5", "2"],
      c: 0,
      exp: "For $n = 4$, $\\mu = \\sqrt{4(6)} = \\sqrt{24} \\approx 4.90\\text{ BM}$."
    },
    {
      q: "A magnetic moment of $5.92\\text{ BM}$ indicates the presence of how many unpaired electrons?",
      opts: ["5", "4", "6", "3"],
      c: 0,
      exp: "For $n = 5$, $\\mu = \\sqrt{5(7)} = \\sqrt{35} \\approx 5.92\\text{ BM}$."
    },
    {
      q: "Which of the following compounds has a spin-only magnetic moment closest to $3.87\\text{ BM}$?",
      opts: [
        "$[\\text{Cr(H}_2\\text{O})_6]^{3+}$",
        "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$",
        "$[\\text{Mn(H}_2\\text{O})_6]^{2+}$",
        "$[\\text{Ni(H}_2\\text{O})_6]^{2+}$"
      ],
      c: 0,
      exp: "$[\\text{Cr(H}_2\\text{O})_6]^{3+}$ has $\\text{Cr}^{3+}$ ($3d^3$), so $n = 3$ and $\\mu = 3.87\\text{ BM}$."
    },
    {
      q: "Which of the following $3d$ complexes is diamagnetic?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{CoF}_6]^{3-}$",
        "$[\\text{CoCl}_4]^{2-}$",
        "$[\\text{Co}(\\text{H}_2\\text{O})_6]^{2+}$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is a low-spin $d^6$ complex with all electrons paired."
    },
    {
      q: "The complex $[\\text{PtCl}_4]^{2-}$ is diamagnetic because:",
      opts: [
        "It is a square planar complex of $\\text{Pt}^{2+}$ with paired $5d^8$ electrons",
        "Platinum is in the $0$ oxidation state",
        "It has a regular tetrahedral geometry",
        "Chloride is a strong field ligand"
      ],
      c: 0,
      exp: "$\\text{Pt}^{2+}$ is a $5d^8$ ion with large crystal field splitting, forming a low-spin square planar complex with paired electrons."
    },
    {
      q: "What is the hybridization of the central atom in $[\\text{Fe(H}_2\\text{O})_6]^{3+}$?",
      opts: ["$sp^3d^2$", "$d^2sp^3$", "$dsp^2$", "$sp^3$"],
      c: 0,
      exp: "Weak field $\\text{H}_2\\text{O}$ cannot force pairing in $\\text{Fe}^{3+}$ ($3d^5$), so it forms an outer orbital complex with $sp^3d^2$ hybridization."
    },
    {
      q: "Which of the following complexes is expected to be optically inactive?",
      opts: [
        "$\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$",
        "$\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$",
        "$[\\text{Co}(\\text{en})_3]^{3+}$",
        "$[\\text{Cr(ox)}_3]^{3-}$"
      ],
      c: 0,
      exp: "$\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ has an inversion center and a plane of symmetry, making it optically inactive."
    },
    {
      q: "How many unpaired electrons are present in the low-spin octahedral complex of a $d^5$ metal ion?",
      opts: ["1", "5", "3", "0"],
      c: 0,
      exp: "In low-spin $d^5$, the five electrons occupy $t_{2g}$ orbitals as $t_{2g}^5$, leaving 1 unpaired electron."
    },
    {
      q: "How many unpaired electrons are present in the high-spin octahedral complex of a $d^5$ metal ion?",
      opts: ["5", "1", "3", "0"],
      c: 0,
      exp: "In high-spin $d^5$, each of the five $d$-orbitals receives one electron ($t_{2g}^3 e_g^2$), resulting in 5 unpaired electrons."
    },
    {
      q: "How many unpaired electrons are present in the low-spin octahedral complex of a $d^6$ metal ion?",
      opts: ["0", "4", "2", "1"],
      c: 0,
      exp: "In low-spin $d^6$, all six electrons pair up in the lower $t_{2g}$ orbitals ($t_{2g}^6 e_g^0$), resulting in 0 unpaired electrons."
    },
    {
      q: "How many unpaired electrons are present in the high-spin octahedral complex of a $d^6$ metal ion?",
      opts: ["4", "0", "2", "1"],
      c: 0,
      exp: "In high-spin $d^6$, the electronic configuration is $t_{2g}^4 e_g^2$, having 4 unpaired electrons."
    }
  ];

  mcqData.slice(0, 44).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Ni(CN)}_4]^{2-}$?",
    "0",
    "$\\text{CN}^-$ forces pairing in $\\text{Ni}^{2+}$ ($3d^8$), leaving $0$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{NiCl}_4]^{2-}$?",
    "2",
    "$\\text{Cl}^-$ is weak field, so $\\text{Ni}^{2+}$ ($3d^8$) in tetrahedral geometry has $2$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Ni(CO)}_4]$?",
    "0",
    "Nickel(0) has $3d^{10}$ in $[\\text{Ni(CO)}_4]$, so it has $0$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Co}(\\text{NH}_3)_6]^{3+}$?",
    "0",
    "Low-spin $\\text{Co}^{3+}$ ($3d^6$) has all electrons paired, so $n = 0$."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{CoF}_6]^{3-}$?",
    "4",
    "High-spin $\\text{Co}^{3+}$ ($3d^6$) with weak field $\\text{F}^-$ has $4$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Fe(CN)}_6]^{4-}$?",
    "0",
    "Low-spin $\\text{Fe}^{2+}$ ($3d^6$) has all electrons paired, so $n = 0$."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Fe(H}_2\\text{O})_6]^{2+}$?",
    "4",
    "High-spin $\\text{Fe}^{2+}$ ($3d^6$) has $4$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Fe(CN)}_6]^{3-}$?",
    "1",
    "Low-spin $\\text{Fe}^{3+}$ ($3d^5$) has $1$ unpaired electron in $t_{2g}^5$."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{FeF}_6]^{3-}$?",
    "5",
    "High-spin $\\text{Fe}^{3+}$ ($3d^5$) has $5$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Cr}(\\text{NH}_3)_6]^{3+}$?",
    "3",
    "$\\text{Cr}^{3+}$ ($3d^3$) has $3$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$?",
    "1",
    "$\\text{Cu}^{2+}$ ($3d^9$) has $1$ unpaired electron."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Zn}(\\text{NH}_3)_4]^{2+}$?",
    "0",
    "$\\text{Zn}^{2+}$ has a completely filled $3d^{10}$ subshell, so $n = 0$."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in $[\\text{Mn(CN)}_6]^{3-}$?",
    "2",
    "Low-spin $\\text{Mn}^{3+}$ ($3d^4$) has $2$ unpaired electrons in $t_{2g}^4$."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 4...");
const allPart4 = buildPart4();
console.log(`Total Part 4 questions: ${allPart4.length} (Expected: 83)`);

allPart4.forEach((q, idx) => {
  checkKatex(q.question, `Part4[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part4[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part4[${idx}].explanation`);
});

console.log("All Part 4 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 4
module.exports = ${JSON.stringify(allPart4, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part4.js', fileContent);
console.log("Written scripts/data_coord_part4.js successfully!");
