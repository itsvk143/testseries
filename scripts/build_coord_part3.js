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
// Subtopic 3: Isomerism
// Needed: 82 Qs (26 AR, 43 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart3() {
  const st = "Isomerism";
  const list = [];

  const arData = [
    {
      a: "$[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ and $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ are ionization isomers.",
      r: "They give different ions in aqueous solution, yielding distinct precipitates with $\\text{AgNO}_3$ and $\\text{BaCl}_2$ respectively.",
      idx: 0,
      exp: "Ionization isomerism arises when counter ions exchange with coordinated ligands. The bromide-containing complex gives a pale yellow precipitate with $\\text{AgNO}_3$, while the sulfate-containing complex gives a white precipitate with $\\text{BaCl}_2$."
    },
    {
      a: "$[\\text{Co}(\\text{NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$ and $[\\text{Co}(\\text{NH}_3)_5(\\text{ONO})]\\text{Cl}_2$ are linkage isomers.",
      r: "The nitrite ion ($\\text{NO}_2^-$) is an ambidentate ligand that can coordinate to the central cobalt ion through either nitrogen or oxygen.",
      idx: 0,
      exp: "When $\\text{NO}_2^-$ coordinates through nitrogen, it forms the yellow nitro complex; when coordinating through oxygen, it forms the red nitrito complex. Both statements are true and Reason explains Assertion."
    },
    {
      a: "$[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ and $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$ are solvate (hydrate) isomers.",
      r: "They differ in whether water molecules are directly coordinated to the metal ion or present as free water of crystallization.",
      idx: 0,
      exp: "Hydrate isomerism involves varying numbers of water molecules within the coordination sphere vs outer lattice hydration sphere."
    },
    {
      a: "$[\\text{Co}(\\text{NH}_3)_6][\\text{Cr(CN)}_6]$ and $[\\text{Cr}(\\text{NH}_3)_6][\\text{Co(CN)}_6]$ exhibit coordination isomerism.",
      r: "Coordination isomerism occurs when both the cation and anion are complex entities, and ligands are interchanged between the two metal centers.",
      idx: 0,
      exp: "The two complex centers interchange their ammine and cyanido ligands, exemplifying coordination isomerism."
    },
    {
      a: "Tetrahedral complexes of the type $[\\text{MA}_2\\text{B}_2]$ do not show geometrical isomerism.",
      r: "All four positions in a regular tetrahedron are mutually adjacent (adjacent bond angles are all $109.5^\\circ$), so no cis or trans relationships exist.",
      idx: 0,
      exp: "Because all four positions around a tetrahedral central atom are equivalent and equidistant from one another, geometrical isomerism is impossible."
    },
    {
      a: "Square planar complexes of the type $[\\text{MA}_2\\text{B}_2]$ exhibit cis-trans geometrical isomerism.",
      r: "In a square planar geometry, identical ligands can be situated adjacent to each other ($90^\\circ$, cis) or opposite each other ($180^\\circ$, trans).",
      idx: 0,
      exp: "The $90^\\circ$ vs $180^\\circ$ relative positions in a square planar framework allow two distinct spatial arrangements: cis and trans."
    },
    {
      a: "Cisplatin, $\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$, has a non-zero dipole moment, whereas transplatin has zero dipole moment.",
      r: "In the trans isomer, the two identical $\\text{Pt}-\\text{Cl}$ bond dipoles and two $\\text{Pt}-\\text{NH}_3$ bond dipoles cancel each other completely due to centrosymmetry.",
      idx: 0,
      exp: "The trans isomer is centrosymmetric with opposing equal bond dipoles ($\\mu = 0$). In the cis isomer, the bond dipoles do not cancel, giving a net dipole moment."
    },
    {
      a: "A square planar complex of the type $[\\text{MABCD}]$ forms three geometrical isomers.",
      r: "By fixing the position of ligand $\\text{A}$, the other three ligands $\\text{B}, \\text{C}$, and $\\text{D}$ can each be placed trans to $\\text{A}$ in three distinct arrangements.",
      idx: 0,
      exp: "There are three possible geometrical configurations for $[\\text{MABCD}]$: $\\text{A}$ trans to $\\text{B}$, $\\text{A}$ trans to $\\text{C}$, and $\\text{A}$ trans to $\\text{D}$."
    },
    {
      a: "The complex $[\\text{Co}(\\text{en})_3]^{3+}$ is optically active and exists as a pair of enantiomers.",
      r: "Tris(bidentate) octahedral complexes lack an alternating axis of symmetry ($S_n$), plane of symmetry ($\\sigma$), and center of inversion ($i$).",
      idx: 0,
      exp: "$[\\text{Co}(\\text{en})_3]^{3+}$ belongs to the $D_3$ chiral point group with no plane or center of symmetry, forming non-superimposable dextro ($d$) and laevo ($l$) enantiomers."
    },
    {
      a: "The trans-isomer of $[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ is optically inactive.",
      r: "The trans-isomer possesses a center of inversion ($i$) and a plane of symmetry ($\\sigma$), making its mirror image superimposable.",
      idx: 0,
      exp: "Trans-$[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ has an inversion center and horizontal mirror plane, rendering it achiral and optically inactive."
    },
    {
      a: "The cis-isomer of $[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ is optically active.",
      r: "Cis-$[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ lacks any plane or center of symmetry, so its mirror images are non-superimposable.",
      idx: 0,
      exp: "The cis isomer has $C_2$ symmetry but no reflection symmetry plane or center of inversion, making it chiral and resolvable into $d$- and $l$-enantiomers."
    },
    {
      a: "Octahedral complexes of the type $[\\text{MA}_3\\text{B}_3]$ show facial (fac) and meridional (mer) isomerism.",
      r: "In the fac-isomer, three donor atoms of the same type occupy the corners of a single octahedral face; in the mer-isomer, they lie in a plane passing through the metal center.",
      idx: 0,
      exp: "When 3 identical ligands occupy adjacent positions on an octahedral triangular face, it is the fac-isomer; when they lie along a semi-meridian containing the metal, it is the mer-isomer."
    },
    {
      a: "Facial and meridional isomers are types of optical isomers.",
      r: "Facial and meridional isomers have non-superimposable mirror images.",
      idx: 3,
      exp: "Assertion is false: fac and mer are diastereomers (geometrical isomers), not optical isomers. Reason is also false because both fac- and mer-$[\\text{MA}_3\\text{B}_3]$ possess planes of symmetry and are optically inactive."
    },
    {
      a: "Octahedral complexes of the type $[\\text{MA}_6]$ and $[\\text{MA}_5\\text{B}]$ do not show geometrical isomerism.",
      r: "All six coordination positions in an octahedron are equivalent, so exchanging any ligand in $[\\text{MA}_5\\text{B}]$ yields an identical spatial arrangement.",
      idx: 0,
      exp: "All positions in $[\\text{MA}_6]$ are identical, and in $[\\text{MA}_5\\text{B}]$ the single ligand $\\text{B}$ has all other positions equivalent relative to it."
    },
    {
      a: "The complex $[\\text{Pt}(\\text{gly})_2]$ exhibits geometrical isomerism.",
      r: "Glycinate is an unsymmetrical bidentate ligand possessing two different donor atoms (nitrogen and oxygen).",
      idx: 0,
      exp: "For unsymmetrical bidentate chelates $\\text{M(AB)}_2$, two geometrical isomers (cis and trans) exist depending on whether like donor atoms ($\\\\text{N}$ or $\\text{O}$) are adjacent or opposite."
    },
    {
      a: "Square planar complexes of the type $[\\text{M(AA)}_2]$ with symmetrical bidentate ligands do not show geometrical isomerism.",
      r: "Both donor ends of a symmetrical bidentate ligand are identical, precluding distinct spatial arrangements.",
      idx: 0,
      exp: "Since both donor atoms are identical in a symmetrical bidentate ligand (e.g. ethylenediamine or oxalate), cis and trans arrangements cannot be distinguished."
    },
    {
      a: "The complex $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ exists as two geometrical isomers with different colours.",
      r: "The cis-isomer is violet in colour whereas the trans-isomer is green in colour.",
      idx: 0,
      exp: "Cis-$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ is violet and trans-$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ is green due to different ligand field symmetries and d-d absorption spectra. Both are true and Reason explains Assertion."
    },
    {
      a: "The complex $[\\text{Cr(ox)}_3]^{3-}$ is optically active.",
      r: "Tris(oxalato)chromate(III) has a propeller-like $D_3$ symmetry and lacks improper rotation axes ($S_n$), making its mirror image non-superimposable.",
      idx: 0,
      exp: "$[\\text{Cr(ox)}_3]^{3-}$ is a classic tris-chelate octahedral complex that resolves into stable dextro and laevo optical antipodes."
    },
    {
      a: "Optical isomerism is rarely observed in square planar complexes.",
      r: "Square planar complexes usually have the molecular plane as a plane of symmetry ($\\sigma_h$), rendering them achiral.",
      idx: 0,
      exp: "The molecular plane itself acts as a mirror plane of symmetry, so square planar complexes are almost always achiral and optically inactive."
    },
    {
      a: "Linkage isomerism is possible only when at least one ambidentate ligand is present in the coordination sphere.",
      r: "Ambidentate ligands have two or more distinct donor atoms through which they can coordinate selectively.",
      idx: 0,
      exp: "Linkage isomerism specifically requires a ligand (such as $\\text{NO}_2^-, \\text{SCN}^-, \\text{CN}^-$) that can bind through different donor atoms."
    },
    {
      a: "The compound $[\\text{Co}(\\text{NH}_3)_5(\\text{SCN})]\\text{Cl}_2$ is a linkage isomer of $[\\text{Co}(\\text{NH}_3)_5(\\text{NCS})]\\text{Cl}_2$.",
      r: "Thiocyanate can coordinate through sulfur (thiocyanato) or through nitrogen (isothiocyanato).",
      idx: 0,
      exp: "$\\text{SCN}^-$ is an ambidentate ligand capable of bonding via either the sulfur or nitrogen atom, producing linkage isomers."
    },
    {
      a: "Ionization isomers can be distinguished by measuring the electrical conductivity of their solutions after precipitation reactions.",
      r: "Different ionization isomers yield different precipitates and leave different ionic species in solution.",
      idx: 0,
      exp: "For example, adding $\\text{BaCl}_2$ precipitates $\\text{SO}_4^{2-}$ from $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$, drastically lowering conductivity, whereas no reaction occurs with $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$."
    },
    {
      a: "The total number of geometrical isomers for an octahedral complex $[\\text{Mabcdef}]$ with six different monodentate ligands is 15.",
      r: "Each geometrical isomer of $[\\text{Mabcdef}]$ is chiral and exists as a pair of enantiomers, giving a total of 30 stereoisomers.",
      idx: 1,
      exp: "Both statements are correct. There are 15 distinct geometrical diastereomers for $[\\text{Mabcdef}]$, and because all 15 lack any plane or center of symmetry, each has an enantiomer, yielding $15 \\times 2 = 30$ stereoisomers."
    },
    {
      a: "A complex of the type $[\\text{MA}_4\\text{B}_2]$ cannot exhibit optical isomerism.",
      r: "Both the cis and trans isomers of $[\\text{MA}_4\\text{B}_2]$ possess at least one plane of symmetry.",
      idx: 0,
      exp: "In $[\\text{MA}_4\\text{B}_2]$, the trans isomer has horizontal and vertical mirror planes, and the cis isomer has a vertical mirror plane bisecting the $\\text{B}-\\text{M}-\\text{B}$ angle. Both are achiral."
    },
    {
      a: "The complex $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ is used as an anticancer drug only in its cis form.",
      r: "Only the cis isomer can crosslink adjacent guanine bases on DNA due to the correct geometric spacing between the two chlorido leaving groups.",
      idx: 0,
      exp: "Cisplatin binds adjacent purine bases in DNA, bending the helix and inhibiting replication. Transplatin cannot form this intrastrand crosslink and is clinically inactive."
    },
    {
      a: "Coordination position isomerism is exhibited by bridging polynuclear complexes.",
      r: "It involves different arrangements of ligands around the two non-equivalent or equivalent bridged metal atoms.",
      idx: 0,
      exp: "Bridged complexes like $[(\\text{NH}_3)_4\\text{Co}(\\mu-\\text{NH}_2)(\\mu-\\text{O}_2)\\text{Co}(\\text{NH}_3)_2\\text{Cl}_2]^{2+}$ display coordination position isomerism by rearranging chlorido and ammine ligands between the two cobalt atoms."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 43 MCQs on Isomerism
  const mcqData = [
    {
      q: "Which type of isomerism is exhibited by $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ and $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$?",
      opts: [
        "Ionization isomerism",
        "Linkage isomerism",
        "Coordination isomerism",
        "Solvate isomerism"
      ],
      c: 0,
      exp: "These two complexes exchange bromide and sulfate between the coordination sphere and the ionization sphere, which is ionization isomerism."
    },
    {
      q: "Which of the following pairs of coordination compounds illustrates linkage isomerism?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$ and $[\\text{Co}(\\text{NH}_3)_5(\\text{ONO})]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ and $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ and $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$",
        "$[\\text{Co}(\\text{NH}_3)_6][\\text{Cr(CN)}_6]$ and $[\\text{Cr}(\\text{NH}_3)_6][\\text{Co(CN)}_6]$"
      ],
      c: 0,
      exp: "Linkage isomerism occurs because $\\text{NO}_2^-$ is an ambidentate ligand that can coordinate through nitrogen or oxygen."
    },
    {
      q: "Which type of isomerism is shown by $[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ (violet) and $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$ (blue-green)?",
      opts: [
        "Hydrate (solvate) isomerism",
        "Linkage isomerism",
        "Coordination isomerism",
        "Geometrical isomerism"
      ],
      c: 0,
      exp: "Solvate (hydrate) isomerism occurs when water is either inside the coordination sphere as a ligand or outside as water of crystallization."
    },
    {
      q: "Which type of isomerism is exhibited by the pair $[\\text{Co}(\\text{NH}_3)_6][\\text{Cr(CN)}_6]$ and $[\\text{Cr}(\\text{NH}_3)_6][\\text{Co(CN)}_6]$?",
      opts: [
        "Coordination isomerism",
        "Ionization isomerism",
        "Linkage isomerism",
        "Geometrical isomerism"
      ],
      c: 0,
      exp: "Coordination isomerism arises from the interchange of ligands between complex cationic and anionic entities."
    },
    {
      q: "Which of the following ligands CANNOT exhibit linkage isomerism?",
      opts: ["$\\text{NH}_3$", "$\\text{NO}_2^-$", "$\\text{SCN}^-$", "$\\text{CN}^-$"],
      c: 0,
      exp: "Ammonia ($\\text{NH}_3$) has only one donor atom (nitrogen with a lone pair) and is not ambidentate, so it cannot show linkage isomerism."
    },
    {
      q: "How many geometrical isomers are possible for the square planar complex $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$?",
      opts: ["2 (cis and trans)", "3", "4", "1"],
      c: 0,
      exp: "An $\\text{MA}_2\\text{B}_2$ square planar complex has exactly 2 geometrical isomers: cis and trans."
    },
    {
      q: "How many geometrical isomers are possible for the square planar complex $[\\text{Pt}(\\text{NH}_3)(\\text{Br})(\\text{Cl})(\\text{py})]$?",
      opts: ["3", "2", "4", "6"],
      c: 0,
      exp: "An $\\text{MABCD}$ square planar complex has 3 geometrical isomers, obtained by fixing one ligand and permuting the other three trans to it."
    },
    {
      q: "Which of the following complexes is optically active?",
      opts: [
        "$[\\text{Co}(\\text{en})_3]^{3+}$",
        "$\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$",
        "$\\text{trans}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{en})_3]^{3+}$ is a chiral tris-chelate octahedral complex with $D_3$ symmetry that exists as a pair of non-superimposable enantiomers ($d$ and $l$)."
    },
    {
      q: "Why is $\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ optically inactive?",
      opts: [
        "It possesses a plane of symmetry and a center of inversion",
        "It is a planar complex",
        "It is paramagnetic",
        "It has no chelate rings"
      ],
      c: 0,
      exp: "The trans isomer has a center of inversion ($i$) and horizontal mirror plane ($\\sigma_h$), making it achiral and optically inactive."
    },
    {
      q: "How many total stereoisomers (geometrical + optical) exist for $[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$?",
      opts: ["3", "2", "4", "1"],
      c: 0,
      exp: "There is 1 trans isomer (optically inactive) and 1 cis isomer which is chiral and exists as a pair of enantiomers ($d$ and $l$). Total stereoisomers = $1 + 2 = 3$."
    },
    {
      q: "What type of isomerism is shown by $[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$?",
      opts: [
        "Facial-meridional (fac-mer) isomerism",
        "Ionization isomerism",
        "Hydrate isomerism",
        "Coordination isomerism"
      ],
      c: 0,
      exp: "An $[\\text{MA}_3\\text{B}_3]$ octahedral complex displays facial (fac) and meridional (mer) geometrical isomerism."
    },
    {
      q: "In the facial (fac) isomer of $[\\text{MA}_3\\text{B}_3]$, the three identical ligands occupy:",
      opts: [
        "The corners of a single triangular face of the octahedron",
        "Positions along a meridian passing through the metal center",
        "Trans positions at $180^\\circ$ to each other",
        "Alternating positions in a planar hexagon"
      ],
      c: 0,
      exp: "In the fac-isomer, three identical ligands occupy three mutually cis positions forming the triangular face of an octahedron."
    },
    {
      q: "In the meridional (mer) isomer of $[\\text{MA}_3\\text{B}_3]$, the three identical ligands occupy:",
      opts: [
        "Positions along a meridian plane passing through the metal center",
        "The three corners of a single octahedral face",
        "Three mutually trans positions",
        "Positions forming a tetrahedron"
      ],
      c: 0,
      exp: "In the mer-isomer, three identical ligands and the metal atom lie in a single plane forming an arc or meridian around the octahedron."
    },
    {
      q: "Which of the following complexes CANNOT show geometrical isomerism?",
      opts: [
        "$[\\text{Pt}(\\text{NH}_3)_3\\text{Cl}]^+$",
        "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$",
        "$[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$"
      ],
      c: 0,
      exp: "In square planar $[\\text{MA}_3\\text{B}]$, all positions trans to $\\text{A}$ are equivalent, so no geometrical isomerism is possible."
    },
    {
      q: "Which of the following octahedral complexes can show cis-trans isomerism?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]^{2+}$",
        "$[\\text{Cr(ox)}_3]^{3-}$"
      ],
      c: 0,
      exp: "Complexes of the type $[\\text{MA}_4\\text{B}_2]$ exhibit cis and trans geometrical isomerism."
    },
    {
      q: "How many geometrical isomers are possible for $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$?",
      opts: ["2", "3", "4", "1"],
      c: 0,
      exp: "An $[\\text{MA}_4\\text{B}_2]$ octahedral complex has 2 geometrical isomers: cis (violet) and trans (green)."
    },
    {
      q: "Which isomer of $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ is green in colour?",
      opts: ["trans-isomer", "cis-isomer", "fac-isomer", "mer-isomer"],
      c: 0,
      exp: "Trans-$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ is green, while the cis isomer is violet."
    },
    {
      q: "Which isomer of $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ is violet in colour?",
      opts: ["cis-isomer", "trans-isomer", "fac-isomer", "mer-isomer"],
      c: 0,
      exp: "Cis-$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$ is violet in colour."
    },
    {
      q: "How many geometrical isomers are possible for $[\\text{Pt}(\\text{gly})_2]$ where gly is the glycinate anion?",
      opts: ["2 (cis and trans)", "1", "3", "4"],
      c: 0,
      exp: "Glycinate is an unsymmetrical bidentate ligand $\\text{H}_2\\text{N}-\\text{CH}_2-\\text{COO}^-$. In a square planar geometry, it forms 2 isomers: cis (both $\\text{N}$ atoms adjacent) and trans (both $\\text{N}$ atoms opposite)."
    },
    {
      q: "The phenomenon where a complex exists in two forms with different magnetic moments due to different d-electron spin states is called:",
      opts: [
        "Spin isomerism (spin crossover)",
        "Linkage isomerism",
        "Coordination isomerism",
        "Optical isomerism"
      ],
      c: 0,
      exp: "Spin crossover or spin isomerism occurs when high-spin and low-spin states are in equilibrium at different temperatures."
    },
    {
      q: "Which of the following compounds gives a white precipitate with $\\text{BaCl}_2$ but NO precipitate with $\\text{AgNO}_3$?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{SO}_4$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ ionizes to yield free $\\text{SO}_4^{2-}$ which precipitates with $\\text{BaCl}_2$, but has no free $\\text{Br}^-$ so it doesn't precipitate with $\\text{AgNO}_3$."
    },
    {
      q: "Which of the following compounds gives a yellow precipitate with $\\text{AgNO}_3$ but NO precipitate with $\\text{BaCl}_2$?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Pt}(\\text{NH}_3)_4\\text{Cl}_2]\\text{SO}_4$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ has free $\\text{Br}^-$, precipitating pale yellow $\\text{AgBr}$ with $\\text{AgNO}_3$."
    },
    {
      q: "The number of donor atoms in an ambidentate ligand is:",
      opts: [
        "Two or more, but only one coordinates at a time",
        "Two, and both coordinate simultaneously",
        "One only",
        "Three, coordinating simultaneously"
      ],
      c: 0,
      exp: "An ambidentate ligand has two distinct donor atoms, but coordinates through only one at a time."
    },
    {
      q: "Which of the following pairs represents coordination isomers?",
      opts: [
        "$[\\text{Pt}(\\text{NH}_3)_4][\\text{CuCl}_4]$ and $[\\text{Cu}(\\text{NH}_3)_4][\\text{PtCl}_4]$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{NO}_2]\\text{Cl}_2$ and $[\\text{Co}(\\text{NH}_3)_5\\text{ONO}]\\text{Cl}_2$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ and $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$",
        "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ and $[\\text{Pt}(\\text{NH}_3)_3\\text{Cl}]\\text{Cl}$"
      ],
      c: 0,
      exp: "Ligands are exchanged between the platinum and copper coordination spheres, demonstrating coordination isomerism."
    },
    {
      q: "How many total isomers (structural and stereoisomers) are possible for $[\\text{Co}(\\text{NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$?",
      opts: ["2", "3", "4", "1"],
      c: 0,
      exp: "It exists as two linkage isomers: $[\\text{Co}(\\text{NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$ (nitro) and $[\\text{Co}(\\text{NH}_3)_5(\\text{ONO})]\\text{Cl}_2$ (nitrito). Neither shows stereoisomerism."
    },
    {
      q: "Which of the following complexes exhibits optical isomerism?",
      opts: [
        "$\\text{cis}-[\\text{Pt}(\\text{en})_2\\text{Cl}_2]^{2+}$",
        "$\\text{trans}-[\\text{Pt}(\\text{en})_2\\text{Cl}_2]^{2+}$",
        "$[\\text{Pt}(\\text{NH}_3)_4]^{2+}$",
        "$\\text{trans}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$"
      ],
      c: 0,
      exp: "The cis isomer of a bis(bidentate) octahedral complex lacks a plane of symmetry and is optically active."
    },
    {
      q: "Which of the following octahedral complexes has NO geometrical isomers?",
      opts: [
        "$[\\text{MA}_5\\text{B}]$",
        "$[\\text{MA}_4\\text{B}_2]$",
        "$[\\text{MA}_3\\text{B}_3]$",
        "$[\\text{MA}_2\\text{B}_4]$"
      ],
      c: 0,
      exp: "An $[\\text{MA}_5\\text{B}]$ complex has all positions equivalent for $\\text{B}$, so it exists as only 1 isomer."
    },
    {
      q: "How many geometrical isomers are possible for the octahedral complex $[\\text{MA}_3\\text{B}_3]$?",
      opts: ["2 (fac and mer)", "3", "4", "1"],
      c: 0,
      exp: "$[\\text{MA}_3\\text{B}_3]$ gives exactly 2 geometrical isomers: facial (fac) and meridional (mer)."
    },
    {
      q: "Which of the following statements about enantiomers of coordination compounds is FALSE?",
      opts: [
        "They rotate plane-polarized light in the same direction",
        "They are non-superimposable mirror images of each other",
        "They have identical physical properties like melting point and solubility in achiral solvents",
        "One isomer is dextrorotatory ($d$) and the other is laevorotatory ($l$)"
      ],
      c: 0,
      exp: "Enantiomers rotate plane-polarized light in equal but opposite directions (one clockwise, one counterclockwise). Statement (A) is false."
    },
    {
      q: "A coordination compound of formula $\\text{CrCl}_3 \\cdot 6\\text{H}_2\\text{O}$ is dark green. When $1\\text{ mol}$ of it is treated with excess $\\text{AgNO}_3$, $1\\text{ mol}$ of $\\text{AgCl}$ is precipitated. What is its hydrate isomer?",
      opts: [
        "$[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_3\\text{Cl}_3] \\cdot 3\\text{H}_2\\text{O}$"
      ],
      c: 0,
      exp: "Since $1\\text{ mol}$ of $\\text{AgCl}$ precipitates, only one $\\text{Cl}^-$ is outside the sphere: $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$ (dark green)."
    },
    {
      q: "Which of the following compounds has the highest number of geometrical isomers?",
      opts: [
        "$[\\text{Pt}(\\text{NH}_3)(\\text{py})(\\text{Cl})(\\text{Br})]$",
        "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
        "$[\\text{Pt}(\\text{NH}_3)_3\\text{Cl}]^+$",
        "$[\\text{Pt}(\\text{NH}_3)_4]^{2+}$"
      ],
      c: 0,
      exp: "The square planar complex $[\\text{MABCD}]$ has 3 geometrical isomers, while $\\text{MA}_2\\text{B}_2$ has 2, and the others have 1."
    },
    {
      q: "How many stereoisomers are possible for the octahedral complex $[\\text{Co}(\\text{ox})_3]^{3-}$?",
      opts: ["2 (a pair of enantiomers)", "1", "3", "4"],
      c: 0,
      exp: "$[\\text{Co}(\\text{ox})_3]^{3-}$ has no geometrical isomers, but exists as a pair of optical enantiomers ($d$ and $l$)."
    },
    {
      q: "Which of the following complex ions does NOT exhibit optical isomerism?",
      opts: [
        "$\\text{trans}-[\\text{Cr}(\\text{ox})_2\\text{Cl}_2]^{3-}$",
        "$\\text{cis}-[\\text{Cr}(\\text{ox})_2\\text{Cl}_2]^{3-}$",
        "$[\\text{Co}(\\text{en})_3]^{3+}$",
        "$\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$"
      ],
      c: 0,
      exp: "The trans isomer has an inversion center and horizontal reflection plane, making it achiral and optically inactive."
    },
    {
      q: "Which isomerism is exhibited by $[\\text{Cr}(\\text{NH}_3)_4\\text{Cl}_2]^+$?",
      opts: [
        "Geometrical isomerism only",
        "Optical isomerism only",
        "Both geometrical and optical isomerism",
        "Linkage isomerism"
      ],
      c: 0,
      exp: "An $[\\text{MA}_4\\text{B}_2]$ complex has 2 geometrical isomers (cis and trans), but neither is optically active because both possess planes of symmetry."
    },
    {
      q: "What is the relationship between the d- and l-forms of $[\\text{Co}(\\text{en})_3]^{3+}$?",
      opts: [
        "Enantiomers",
        "Diastereomers",
        "Structural isomers",
        "Coordination isomers"
      ],
      c: 0,
      exp: "The $d$ and $l$ forms are non-superimposable mirror images of each other, known as enantiomers."
    },
    {
      q: "Which of the following pairs of compounds are position isomers?",
      opts: [
        "$[(\\text{NH}_3)_4\\text{Co}(\\mu-\\text{NH}_2)(\\mu-\\text{NO}_2)\\text{Co}(\\text{NH}_3)_2\\text{Cl}_2]^{2+}$ and $[(\\text{NH}_3)_3\\text{ClCo}(\\mu-\\text{NH}_2)(\\mu-\\text{NO}_2)\\text{Co}(\\text{NH}_3)_3\\text{Cl}]^{2+}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ and $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$",
        "$[\\text{Co}(\\text{NH}_3)_6][\\text{Cr(CN)}_6]$ and $[\\text{Cr}(\\text{NH}_3)_6][\\text{Co(CN)}_6]$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{NO}_2]\\text{Cl}_2$ and $[\\text{Co}(\\text{NH}_3)_5\\text{ONO}]\\text{Cl}_2$"
      ],
      c: 0,
      exp: "In bridged complexes, different distributions of non-bridging ligands between the two metal centers give rise to coordination position isomerism."
    },
    {
      q: "How many geometrical isomers are possible for an octahedral complex of the type $[\\text{MA}_2\\text{B}_2\\text{C}_2]$?",
      opts: ["5", "3", "4", "6"],
      c: 0,
      exp: "An $[\\text{MA}_2\\text{B}_2\\text{C}_2]$ complex has 5 geometrical isomers (all-trans, all-cis, and three with one pair trans and two pairs cis)."
    },
    {
      q: "In an octahedral complex of type $[\\text{MA}_2\\text{B}_2\\text{C}_2]$, how many of the 5 geometrical isomers are optically active?",
      opts: ["1 (the all-cis isomer)", "2", "3", "0"],
      c: 0,
      exp: "Only the all-cis isomer (where $\\text{A}$ is cis to $\\text{A}$, $\\text{B}$ is cis to $\\text{B}$, and $\\text{C}$ is cis to $\\text{C}$) lacks any plane of symmetry and is chiral."
    },
    {
      q: "What is the total number of stereoisomers for $[\\text{MA}_2\\text{B}_2\\text{C}_2]$?",
      opts: ["6", "5", "8", "4"],
      c: 0,
      exp: "There are 5 geometrical isomers, and 1 of them is chiral (existing as a pair of enantiomers), giving $4 + 2 = 6$ stereoisomers."
    },
    {
      q: "Which of the following compounds exhibits hydrate isomerism?",
      opts: [
        "$\\text{CrCl}_3 \\cdot 6\\text{H}_2\\text{O}$",
        "$\\text{CoCl}_3 \\cdot 6\\text{NH}_3$",
        "$\\text{PtCl}_2 \\cdot 2\\text{NH}_3$",
        "$\\text{Ni(CO)}_4$"
      ],
      c: 0,
      exp: "Chromium(III) chloride hexahydrate displays classic hydrate isomerism with violet, blue-green, and dark green forms."
    },
    {
      q: "A solution of $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ can be distinguished from $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ using:",
      opts: [
        "$\\text{AgNO}_3$ solution",
        "Litmus paper",
        "Starch solution",
        "Dilute hydrochloric acid"
      ],
      c: 0,
      exp: "$\\text{AgNO}_3$ forms a pale yellow precipitate of $\\text{AgBr}$ with the bromide isomer, but no precipitate with the sulfate isomer."
    },
    {
      q: "Which isomer of $[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ can be resolved into optical antipodes (enantiomers)?",
      opts: ["cis-isomer only", "trans-isomer only", "Both cis and trans isomers", "Neither cis nor trans isomer"],
      c: 0,
      exp: "Only the cis isomer lacks an inversion center and plane of symmetry, and can be resolved into optical enantiomers."
    },
    {
      q: "Which of the following complexes is chiral?",
      opts: [
        "$[\\text{Co}(\\text{en})_3]^{3+}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$\\text{trans}-[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$",
        "$\\text{cis}-[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{en})_3]^{3+}$ is non-superimposable on its mirror image, making it chiral."
    }
  ];

  mcqData.slice(0, 43).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the square planar complex $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$?",
    "2",
    "It forms $2$ geometrical isomers: cis and trans."
  ));
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the square planar complex $[\\text{Pt}(\\text{NH}_3)(\\text{py})(\\text{Cl})(\\text{Br})]$?",
    "3",
    "An $[\\text{MABCD}]$ square planar complex has $3$ geometrical isomers."
  ));
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the octahedral complex $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$?",
    "2",
    "An $[\\text{MA}_4\\text{B}_2]$ octahedral complex forms $2$ geometrical isomers: cis (violet) and trans (green)."
  ));
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the octahedral complex $[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$?",
    "2",
    "An $[\\text{MA}_3\\text{B}_3]$ octahedral complex forms $2$ geometrical isomers: facial (fac) and meridional (mer)."
  ));
  list.push(createNumerical(st,
    "What is the total number of stereoisomers (geometrical + optical) for $[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$?",
    "3",
    "There are $3$ stereoisomers: trans (achiral), cis-dextro, and cis-laevo."
  ));
  list.push(createNumerical(st,
    "How many optical isomers (enantiomers) exist for the chiral complex $[\\text{Co}(\\text{en})_3]^{3+}$?",
    "2",
    "It exists as $2$ enantiomers: dextrorotatory ($d$) and laevorotatory ($l$)."
  ));
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the octahedral complex $[\\text{Cr(ox)}_3]^{3-}$?",
    "1",
    "Tris-chelate complexes have only $1$ geometrical arrangement (all positions are mutually cis)."
  ));
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the tetrahedral complex $[\\text{NiCl}_2\\text{Br}_2]^{2-}$?",
    "1",
    "Tetrahedral complexes do not show geometrical isomerism because all positions are equivalent; hence only $1$ isomer exists."
  ));
  list.push(createNumerical(st,
    "How many geometrical isomers are possible for the octahedral complex $[\\text{MA}_2\\text{B}_2\\text{C}_2]$?",
    "5",
    "An $[\\text{MA}_2\\text{B}_2\\text{C}_2]$ octahedral complex has $5$ geometrical isomers."
  ));
  list.push(createNumerical(st,
    "How many of the 5 geometrical isomers of $[\\text{MA}_2\\text{B}_2\\text{C}_2]$ are optically active?",
    "1",
    "Only the all-cis isomer lacks a plane of symmetry, so exactly $1$ geometrical isomer is optically active."
  ));
  list.push(createNumerical(st,
    "What is the total number of stereoisomers (including enantiomers) for $[\\text{MA}_2\\text{B}_2\\text{C}_2]$?",
    "6",
    "Four achiral geometrical isomers plus one pair of enantiomers gives $4 + 2 = 6$ stereoisomers."
  ));
  list.push(createNumerical(st,
    "How many total geometrical isomers exist for an octahedral complex $[\\text{Mabcdef}]$ with six different ligands?",
    "15",
    "There are $15$ geometrical isomers for $[\\text{Mabcdef}]$."
  ));
  list.push(createNumerical(st,
    "What is the total number of stereoisomers for $[\\text{Mabcdef}]$?",
    "30",
    "Each of the $15$ geometrical isomers is chiral and exists as a pair of enantiomers, yielding $15 \\times 2 = 30$ stereoisomers."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 3...");
const allPart3 = buildPart3();
console.log(`Total Part 3 questions: ${allPart3.length} (Expected: 82)`);

allPart3.forEach((q, idx) => {
  checkKatex(q.question, `Part3[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part3[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part3[${idx}].explanation`);
});

console.log("All Part 3 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 3
module.exports = ${JSON.stringify(allPart3, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part3.js', fileContent);
console.log("Written scripts/data_coord_part3.js successfully!");
