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
// Subtopic 5: Crystal field theory (CFT) and orbital splitting
// Needed: 83 Qs (26 AR, 44 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart5() {
  const st = "Crystal field theory (CFT) and orbital splitting";
  const list = [];

  const arData = [
    {
      a: "In an octahedral crystal field, the five $d$-orbitals split into a lower energy triply degenerate $t_{2g}$ set and a higher energy doubly degenerate $e_g$ set.",
      r: "The lobes of the $e_g$ orbitals ($d_{x^2-y^2}$ and $d_{z^2}$) point directly along the Cartesian axes where the six ligands approach, experiencing greater electrostatic repulsion.",
      idx: 0,
      exp: "In an octahedral complex, ligands approach along the $x, y, z$ axes. The $e_g$ orbitals point directly at the incoming ligands, experiencing greater repulsion and rising by $+0.6\\Delta_o$, while $t_{2g}$ orbitals point in between axes and are lowered by $-0.4\\Delta_o$."
    },
    {
      a: "The crystal field splitting in a tetrahedral field ($\\Delta_t$) is always smaller than that in an octahedral field ($\\Delta_o$) for the same metal and ligands.",
      r: "In a tetrahedral complex, there are only 4 ligands instead of 6, and none of the $d$-orbitals point directly toward the ligands ($\\Delta_t = \\frac{4}{9}\\Delta_o$).",
      idx: 0,
      exp: "Fewer ligands ($4$ vs $6$) and indirect angular approach reduce electrostatic repulsions, leading to $\\Delta_t = \\frac{4}{9}\\Delta_o$. Both statements are true and Reason explains Assertion."
    },
    {
      a: "Tetrahedral coordination complexes are almost exclusively high-spin complexes.",
      r: "The crystal field splitting $\\Delta_t$ in tetrahedral complexes is very small and is almost always less than the electron pairing energy $P$ ($\\Delta_t < P$).",
      idx: 0,
      exp: "Because $\\Delta_t \\approx \\frac{4}{9}\\Delta_o$ is much smaller than the pairing energy, electrons prefer to occupy higher-energy $t_2$ orbitals singly before pairing occurs, resulting in high-spin complexes."
    },
    {
      a: "The complex $[\\text{Ti(H}_2\\text{O})_6]^{3+}$ is purple in colour.",
      r: "The single $d$-electron in $\\text{Ti}^{3+}$ ($3d^1$) is promoted from the $t_{2g}$ level to the $e_g$ level by absorbing green and yellow light, transmitting violet-purple light.",
      idx: 0,
      exp: "Absorption of light at approximately $500\\text{ nm}$ causes a $t_{2g}^1 e_g^0 \\rightarrow t_{2g}^0 e_g^1$ $d-d$ transition. The complementary colour transmitted is purple."
    },
    {
      a: "Anhydrous $\\text{CuSO}_4$ is white, but hydrated $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ is deep blue.",
      r: "In the absence of ligands, the five $d$-orbitals are degenerate and no $d-d$ absorption of visible light can occur.",
      idx: 0,
      exp: "Without coordinating ligands, no crystal field splitting occurs, so $d-d$ transitions are absent (white). Water ligands create crystal field splitting, enabling $d-d$ absorption in the red region and transmitting blue light."
    },
    {
      a: "Potassium permanganate ($\\text{KMnO}_4$) is intensely purple, even though $\\text{Mn}^{7+}$ has a $3d^0$ configuration with no $d$-electrons.",
      r: "The intense colour of $\\text{KMnO}_4$ is due to ligand-to-metal charge transfer (LMCT) from oxygen $2p$ orbitals to vacant manganese $3d$ orbitals.",
      idx: 0,
      exp: "Since $\\text{Mn}^{7+}$ has no $d$-electrons, $d-d$ transitions are impossible. The intense absorption in the yellow-green region arises from $\\text{O}^{2-} \\rightarrow \\text{Mn}^{7+}$ charge transfer."
    },
    {
      a: "For a $d^4$ metal ion in an octahedral complex, a low-spin configuration occurs when $\\Delta_o > P$.",
      r: "When the crystal field splitting energy is greater than the pairing energy, it is energetically more favourable for the fourth electron to pair up in the $t_{2g}$ set.",
      idx: 0,
      exp: "If $\\Delta_o > P$, pairing in $t_{2g}$ costs less energy than promoting the electron to $e_g$, yielding the low-spin $t_{2g}^4 e_g^0$ configuration."
    },
    {
      a: "The CFSE of $[\\text{Fe(H}_2\\text{O})_6]^{3+}$ is zero.",
      r: "$\\text{Fe}^{3+}$ is a $3d^5$ ion in a weak octahedral field, adopting a high-spin $t_{2g}^3 e_g^2$ configuration where the stabilization of three $t_{2g}$ electrons exactly cancels the destabilization of two $e_g$ electrons.",
      idx: 0,
      exp: "$\\text{CFSE} = [-0.4 \\times 3 + 0.6 \\times 2]\\Delta_o = [-1.2 + 1.2]\\Delta_o = 0$."
    },
    {
      a: "The CFSE of $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is $-2.4\\Delta_o + 2P$.",
      r: "$\\text{Co}^{3+}$ ($3d^6$) in the presence of strong field $\\text{NH}_3$ forms a low-spin $t_{2g}^6 e_g^0$ complex.",
      idx: 0,
      exp: "With all 6 electrons in $t_{2g}$, $\\text{CFSE} = 6 \\times (-0.4\\Delta_o) = -2.4\\Delta_o$, plus energy for the two additional pairs formed relative to free ion ($2P$)."
    },
    {
      a: "Octahedral complexes of $\\text{Cu}^{2+}$ ($d^9$) undergo significant Jahn-Teller distortion.",
      r: "The $e_g$ orbitals are unsymmetrically occupied ($t_{2g}^6 e_g^3$ with $d_{z^2}^2 d_{x^2-y^2}^1$ or $d_{z^2}^1 d_{x^2-y^2}^2$), causing tetragonal elongation or compression to lower energy.",
      idx: 0,
      exp: "An odd number of electrons in the degenerate $e_g$ set produces an uneven electrostatic repulsion along the axes, leading to tetragonal distortion (elongation of the two axial $\\text{Cu}-\\text{L}$ bonds)."
    },
    {
      a: "In $[\\text{Cu(H}_2\\text{O})_6]^{2+}$, the two axial $\\text{Cu}-\\text{O}$ bonds are longer than the four equatorial bonds.",
      r: "Tetragonal elongation (Jahn-Teller effect) lowers the energy of the $d_{z^2}$ orbital relative to $d_{x^2-y^2}$.",
      idx: 0,
      exp: "Placing two electrons in $d_{z^2}$ and one in $d_{x^2-y^2}$ elongates the axial bonds and stabilizes the system by Jahn-Teller distortion."
    },
    {
      a: "The crystal field splitting $\\Delta_o$ increases when moving from $3d$ to $4d$ to $5d$ transition elements in the same group.",
      r: "The $4d$ and $5d$ orbitals are more diffuse and extend further into space, leading to stronger electrostatic and covalent overlap with ligand orbitals.",
      idx: 0,
      exp: "$\\Delta_o$ increases by about $30-50\\%$ from $3d$ to $4d$, and another $30-50\\%$ to $5d$, making $4d$ and $5d$ complexes almost exclusively low-spin."
    },
    {
      a: "The crystal field splitting $\\Delta_o$ for $\\text{Co}^{3+}$ complexes is larger than for $\\text{Co}^{2+}$ complexes with the same ligands.",
      r: "Higher positive charge on the central metal ion draws ligands closer, resulting in greater electrostatic repulsion and larger splitting.",
      idx: 0,
      exp: "A metal in a higher oxidation state ($+3$ vs $+2$) has smaller ionic radius and higher effective nuclear charge, pulling ligands closer and increasing $\\Delta_o$."
    },
    {
      a: "In the spectrochemical series, $\\text{CO}$ produces a greater crystal field splitting than $\\text{CN}^-$.",
      r: "Carbon monoxide is a strong $\\pi$-acceptor ligand that engages in back-bonding with metal $d$-orbitals, significantly increasing $\\Delta_o$.",
      idx: 0,
      exp: "$\\text{CO}$ is at the top of the spectrochemical series because synergic $\\pi$-backbonding stabilizes $t_{2g}$ orbitals and drastically expands the energy separation $\\Delta_o$."
    },
    {
      a: "Halide ions like $\\text{I}^-, \\text{Br}^-$, and $\\text{Cl}^-$ are weak field ligands located at the bottom of the spectrochemical series.",
      r: "Halide ions are good $\\pi$-donor ligands which donate electron density into metal $t_{2g}$ orbitals, destabilizing $t_{2g}$ and decreasing $\\Delta_o$.",
      idx: 0,
      exp: "$\\pi$-donor ligands raise the energy of the $t_{2g}$ orbitals through antibonding overlap, narrowing the gap $\\Delta_o$ between $t_{2g}$ and $e_g$."
    },
    {
      a: "Crystal field theory considers the metal-ligand bond to be completely covalent.",
      r: "CFT accounts for the overlap of metal $d$-orbitals with ligand $p$-orbitals.",
      idx: 3,
      exp: "Both statements are false. CFT explicitly treats the metal-ligand bond as purely electrostatic (ionic) point-charge interaction and ignores orbital overlap."
    },
    {
      a: "A solution of $[\\text{Ni}(\\text{H}_2\\text{O})_6]^{2+}$ is green, but turns blue upon addition of ethylenediamine.",
      r: "Ethylenediamine is a stronger field ligand than water, which increases $\\Delta_o$ and causes absorption of higher-energy light.",
      idx: 0,
      exp: "Replacing $\\text{H}_2\\text{O}$ with stronger field $\\text{en}$ increases $\\Delta_o$, shifting the absorbed wavelength to shorter values (red $\\rightarrow$ yellow) and transmitting complementary blue light."
    },
    {
      a: "$[\\text{Sc}(\\text{H}_2\\text{O})_6]^{3+}$ and $[\\text{Zn}(\\text{H}_2\\text{O})_6]^{2+}$ are colourless in aqueous solution.",
      r: "$\\text{Sc}^{3+}$ has a $3d^0$ configuration and $\\text{Zn}^{2+}$ has a $3d^{10}$ configuration, so neither can undergo $d-d$ electronic transitions.",
      idx: 0,
      exp: "$d-d$ transitions require partially filled $d$-orbitals ($d^1$ to $d^9$). With $d^0$ or $d^{10}$, no $d-d$ transitions can take place, rendering them colourless."
    },
    {
      a: "The splitting pattern of $d$-orbitals in a square planar crystal field is more complex than in an octahedral field.",
      r: "Removal of the two axial ligands from an octahedral complex along the $z$-axis lowers the energy of all orbitals with a $z$-component ($d_{z^2}, d_{xz}, d_{yz}$), leaving $d_{x^2-y^2}$ as the highest in energy.",
      idx: 0,
      exp: "In square planar geometry ($D_{4h}$), the energy sequence is $d_{x^2-y^2} \\gg d_{xy} > d_{z^2} > d_{xz}, d_{yz}$, reflecting the total absence of axial ligands."
    },
    {
      a: "The crystal field splitting $\\Delta_{\\text{sp}}$ in a square planar complex is greater than $\\Delta_o$.",
      r: "In square planar geometry, $\\Delta_{\\text{sp}} \\approx 1.3 \\Delta_o$.",
      idx: 0,
      exp: "Removing axial ligands allows equatorial ligands to move closer to the metal, increasing repulsion in the $xy$-plane and making $\\Delta_{\\text{sp}} \\approx 1.3 \\Delta_o$."
    },
    {
      a: "In a tetrahedral crystal field, the $e$ orbitals are lower in energy than the $t_2$ orbitals.",
      r: "The $e$ orbitals point toward the faces of the cube while the $t_2$ orbitals point closer to the cube edges where the ligands approach.",
      idx: 0,
      exp: "In tetrahedral geometry, ligands approach along corners. The $t_2$ orbitals ($d_{xy}, d_{yz}, d_{zx}$) are closer to the ligand directions than the $e$ orbitals, making $t_2$ higher in energy by $+0.4\\Delta_t$."
    },
    {
      a: "The complex $[\\text{Cr(H}_2\\text{O})_6]^{2+}$ is a reducing agent, while $[\\text{Mn(H}_2\\text{O})_6]^{3+}$ is an oxidizing agent, although both have a $d^4$ configuration.",
      r: "Oxidation of $\\text{Cr}^{2+}$ produces $\\text{Cr}^{3+}$ with a stable half-filled $t_{2g}^3$ configuration, whereas reduction of $\\text{Mn}^{3+}$ produces $\\text{Mn}^{2+}$ with a stable half-filled $3d^5$ ($t_{2g}^3 e_g^2$) configuration.",
      idx: 0,
      exp: "$\\text{Cr}^{2+} \\rightarrow \\text{Cr}^{3+} (t_{2g}^3)$ has high CFSE stabilization in water, driving oxidation. $\\text{Mn}^{3+} \\rightarrow \\text{Mn}^{2+} (d^5)$ gains extra exchange energy, driving reduction. Both are true and Reason explains Assertion."
    },
    {
      a: "The electronic configuration of $\\text{Fe}^{3+}$ in $[\\text{Fe(CN)}_6]^{3-}$ in terms of CFT is $t_{2g}^5 e_g^0$.",
      r: "$\\text{CN}^-$ is a strong field ligand with $\\Delta_o > P$, forcing all five $3d$ electrons to occupy the lower $t_{2g}$ set.",
      idx: 0,
      exp: "With $\\Delta_o > P$, electrons pair in $t_{2g}$ before occupying $e_g$, giving $t_{2g}^5 e_g^0$ with one unpaired electron."
    },
    {
      a: "The electronic configuration of $\\text{Co}^{3+}$ in $[\\text{CoF}_6]^{3-}$ is $t_{2g}^4 e_g^2$.",
      r: "$\\text{F}^-$ is a weak field ligand where $\\Delta_o < P$, so electrons obey Hund's rule and occupy $e_g$ before pairing.",
      idx: 0,
      exp: "With $\\Delta_o < P$, the high-spin configuration $t_{2g}^4 e_g^2$ is formed, containing 4 unpaired electrons."
    },
    {
      a: "The magnetic moment of a tetrahedral complex of $\\text{Co}^{2+}$ ($d^7$) is approximately $3.87\\text{ BM}$.",
      r: "Tetrahedral $\\text{Co}^{2+}$ adopts the high-spin configuration $e^4 t_2^3$ with three unpaired electrons.",
      idx: 0,
      exp: "In tetrahedral field, $d^7$ fills as $e^4 t_2^3$, leaving 3 unpaired electrons in $t_2$: $\\mu = \\sqrt{3(5)} = \\sqrt{15} \\approx 3.87\\text{ BM}$."
    },
    {
      a: "A ligand like $\\text{H}_2\\text{O}$ acts as a weak field ligand for $\\text{Fe}^{2+}$ but as a strong field ligand for $\\text{Co}^{3+}$.",
      r: "The magnitude of $\\Delta_o$ increases significantly with increasing oxidation state and nuclear charge of the metal ion.",
      idx: 0,
      exp: "For $\\text{Co}^{3+}$, the higher ionic charge increases $\\Delta_o$ sufficiently so that $\\Delta_o > P$, making $[\\text{Co}(\\text{H}_2\\text{O})_6]^{3+}$ low-spin and diamagnetic."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 44 MCQs on CFT
  const mcqData = [
    {
      q: "In an octahedral crystal field, the $d$-orbitals split into two sets. The energy of the $e_g$ set relative to the barycentre is:",
      opts: ["$+0.6\\Delta_o$", "$-0.4\\Delta_o$", "$+0.4\\Delta_o$", "$-0.6\\Delta_o$"],
      c: 0,
      exp: "The $e_g$ orbitals point directly along the axes and are destabilized by $+0.6\\Delta_o$ ($+\\frac{3}{5}\\Delta_o$) above the barycentre."
    },
    {
      q: "In an octahedral crystal field, the energy of the $t_{2g}$ set relative to the barycentre is:",
      opts: ["$-0.4\\Delta_o$", "$+0.6\\Delta_o$", "$-0.6\\Delta_o$", "$+0.4\\Delta_o$"],
      c: 0,
      exp: "The $t_{2g}$ orbitals are stabilized by $-0.4\\Delta_o$ ($-\\frac{2}{5}\\Delta_o$) below the barycentre."
    },
    {
      q: "What is the relationship between crystal field splitting in a tetrahedral field ($\\Delta_t$) and an octahedral field ($\\Delta_o$)?",
      opts: [
        "$\\Delta_t = \\frac{4}{9}\\Delta_o$",
        "$\\Delta_t = \\frac{9}{4}\\Delta_o$",
        "$\\Delta_t = \\frac{1}{2}\\Delta_o$",
        "$\\Delta_t = \\frac{2}{3}\\Delta_o$"
      ],
      c: 0,
      exp: "Due to 4 ligands instead of 6 and indirect orientation, $\\Delta_t = \\frac{4}{9}\\Delta_o$."
    },
    {
      q: "Which of the following represents the correct order of ligands in the spectrochemical series?",
      opts: [
        "$\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{CN}^- < \\text{CO}$",
        "$\\text{CO} < \\text{CN}^- < \\text{NH}_3 < \\text{H}_2\\text{O} < \\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$",
        "$\\text{Cl}^- < \\text{F}^- < \\text{I}^- < \\text{Br}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{CO} < \\text{CN}^-$",
        "$\\text{H}_2\\text{O} < \\text{NH}_3 < \\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^- < \\text{CN}^- < \\text{CO}$"
      ],
      c: 0,
      exp: "The standard IUPAC spectrochemical series arranges ligands in increasing order of $\\Delta_o$: $\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{CN}^- < \\text{CO}$."
    },
    {
      q: "Which of the following $d$-orbitals belong to the $e_g$ set in an octahedral crystal field?",
      opts: [
        "$d_{x^2-y^2}$ and $d_{z^2}$",
        "$d_{xy}, d_{yz}$, and $d_{zx}$",
        "$d_{xy}$ and $d_{x^2-y^2}$",
        "$d_{z^2}$ and $d_{xz}$"
      ],
      c: 0,
      exp: "The axial orbitals $d_{x^2-y^2}$ and $d_{z^2}$ form the doubly degenerate $e_g$ set."
    },
    {
      q: "Which of the following $d$-orbitals belong to the $t_{2g}$ set in an octahedral crystal field?",
      opts: [
        "$d_{xy}, d_{yz}$, and $d_{zx}$",
        "$d_{x^2-y^2}$ and $d_{z^2}$",
        "$d_{xy}$ and $d_{z^2}$",
        "$d_{yz}$ and $d_{x^2-y^2}$"
      ],
      c: 0,
      exp: "The non-axial orbitals $d_{xy}, d_{yz}$, and $d_{zx}$ form the triply degenerate $t_{2g}$ set."
    },
    {
      q: "What is the Crystal Field Stabilization Energy (CFSE) for a high-spin $d^4$ octahedral complex?",
      opts: ["$-0.6\\Delta_o$", "$-1.6\\Delta_o$", "$-1.2\\Delta_o$", "$-0.4\\Delta_o$"],
      c: 0,
      exp: "High-spin $d^4$ has $t_{2g}^3 e_g^1$. $\\text{CFSE} = 3(-0.4\\Delta_o) + 1(0.6\\Delta_o) = -1.2 + 0.6 = -0.6\\Delta_o$."
    },
    {
      q: "What is the CFSE for a low-spin $d^4$ octahedral complex?",
      opts: ["$-1.6\\Delta_o + P$", "$-0.6\\Delta_o$", "$-2.0\\Delta_o + 2P$", "$-1.2\\Delta_o$"],
      c: 0,
      exp: "Low-spin $d^4$ has $t_{2g}^4 e_g^0$. $\\text{CFSE} = 4(-0.4\\Delta_o) + P = -1.6\\Delta_o + P$."
    },
    {
      q: "What is the CFSE for a high-spin $d^5$ octahedral complex (e.g. $[\\text{Fe(H}_2\\text{O})_6]^{3+}$)?",
      opts: ["$0$", "$-0.4\\Delta_o$", "$-2.0\\Delta_o$", "$+0.6\\Delta_o$"],
      c: 0,
      exp: "High-spin $d^5$ has $t_{2g}^3 e_g^2$. $\\text{CFSE} = 3(-0.4) + 2(0.6) = -1.2 + 1.2 = 0$."
    },
    {
      q: "What is the CFSE for a low-spin $d^6$ octahedral complex (e.g. $[\\text{Co}(\\text{NH}_3)_6]^{3+}$)?",
      opts: ["$-2.4\\Delta_o + 2P$", "$-0.4\\Delta_o$", "$-1.8\\Delta_o + P$", "$-1.2\\Delta_o$"],
      c: 0,
      exp: "Low-spin $d^6$ has $t_{2g}^6 e_g^0$. $\\text{CFSE} = 6(-0.4\\Delta_o) + 2P = -2.4\\Delta_o + 2P$."
    },
    {
      q: "What is the CFSE for a high-spin $d^6$ octahedral complex (e.g. $[\\text{Fe(H}_2\\text{O})_6]^{2+}$)?",
      opts: ["$-0.4\\Delta_o$", "$-2.4\\Delta_o$", "$-0.8\\Delta_o$", "$0$"],
      c: 0,
      exp: "High-spin $d^6$ has $t_{2g}^4 e_g^2$. $\\text{CFSE} = 4(-0.4) + 2(0.6) = -1.6 + 1.2 = -0.4\\Delta_o$."
    },
    {
      q: "What is the CFSE for a $d^3$ octahedral complex (e.g. $[\\text{Cr(H}_2\\text{O})_6]^{3+}$)?",
      opts: ["$-1.2\\Delta_o$", "$-0.8\\Delta_o$", "$-0.4\\Delta_o$", "$-1.6\\Delta_o$"],
      c: 0,
      exp: "$d^3$ has $t_{2g}^3 e_g^0$. $\\text{CFSE} = 3(-0.4\\Delta_o) = -1.2\\Delta_o$."
    },
    {
      q: "What is the CFSE for a $d^8$ octahedral complex (e.g. $[\\text{Ni(H}_2\\text{O})_6]^{2+}$)?",
      opts: ["$-1.2\\Delta_o$", "$-0.8\\Delta_o$", "$-1.6\\Delta_o$", "$-0.4\\Delta_o$"],
      c: 0,
      exp: "$d^8$ has $t_{2g}^6 e_g^2$. $\\text{CFSE} = 6(-0.4) + 2(0.6) = -2.4 + 1.2 = -1.2\\Delta_o$."
    },
    {
      q: "What is the CFSE for a $d^{10}$ complex in an octahedral field?",
      opts: ["$0$", "$-1.2\\Delta_o$", "$-2.4\\Delta_o$", "$+1.2\\Delta_o$"],
      c: 0,
      exp: "$d^{10}$ has $t_{2g}^6 e_g^4$. $\\text{CFSE} = 6(-0.4) + 4(0.6) = -2.4 + 2.4 = 0$."
    },
    {
      q: "Under what condition does a transition metal ion form a low-spin octahedral complex?",
      opts: [
        "$\\Delta_o > P$",
        "$\\Delta_o < P$",
        "$\\Delta_o = P$",
        "$\\Delta_t < P$"
      ],
      c: 0,
      exp: "When the crystal field splitting $\\Delta_o$ exceeds the pairing energy $P$, pairing of electrons in $t_{2g}$ is energetically favoured, forming a low-spin complex."
    },
    {
      q: "Under what condition does an octahedral complex adopt a high-spin configuration?",
      opts: [
        "$\\Delta_o < P$",
        "$\\Delta_o > P$",
        "$\\Delta_o = 0$",
        "$\\Delta_t > P$"
      ],
      c: 0,
      exp: "When $\\Delta_o < P$, promoting electrons to $e_g$ costs less energy than pairing, producing a high-spin complex."
    },
    {
      q: "Which of the following $3d$ configurations exhibits the strongest Jahn-Teller distortion in an octahedral complex?",
      opts: [
        "High-spin $d^4$ and $d^9$",
        "High-spin $d^5$ and $d^3$",
        "Low-spin $d^6$ and $d^{10}$",
        "$d^8$ and $d^3$"
      ],
      c: 0,
      exp: "Unsymmetrical occupancy of the strongly antibonding $e_g$ orbitals ($e_g^1$ in high-spin $d^4$, and $e_g^3$ in $d^9$) produces pronounced Jahn-Teller distortion."
    },
    {
      q: "Why do $d^3, d^5$ (high-spin), and $d^8$ octahedral complexes NOT show Jahn-Teller distortion?",
      opts: [
        "Their $e_g$ and $t_{2g}$ orbitals are symmetrically occupied",
        "They have zero magnetic moments",
        "They are tetrahedral complexes",
        "They have no $d$-electrons"
      ],
      c: 0,
      exp: "Symmetrical electronic arrangements ($t_{2g}^3$ in $d^3$, $t_{2g}^3 e_g^2$ in high-spin $d^5$, $t_{2g}^6 e_g^2$ in $d^8$) generate uniform spherical fields with no distortion."
    },
    {
      q: "Which of the following complexes is colourless?",
      opts: [
        "$[\\text{Ti(H}_2\\text{O})_6]^{4+}$",
        "$[\\text{Ti(H}_2\\text{O})_6]^{3+}$",
        "$[\\text{Cr(H}_2\\text{O})_6]^{3+}$",
        "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$"
      ],
      c: 0,
      exp: "$\\text{Ti}^{4+}$ has a $3d^0$ configuration with no $d$-electrons, so $d-d$ transitions cannot take place, making it colourless."
    },
    {
      q: "Which of the following ions is colourless in aqueous solution?",
      opts: ["$\\text{Zn}^{2+}$", "$\\text{Cu}^{2+}$", "$\\text{Ni}^{2+}$", "$\\text{Fe}^{2+}$"],
      c: 0,
      exp: "$\\text{Zn}^{2+}$ has a completely filled $3d^{10}$ subshell, preventing $d-d$ transitions."
    },
    {
      q: "The intense purple colour of $\\text{KMnO}_4$ is attributed to:",
      opts: [
        "Ligand-to-metal charge transfer (LMCT)",
        "$d-d$ electronic transition",
        "Metal-to-ligand charge transfer (MLCT)",
        "$f-d$ electronic transition"
      ],
      c: 0,
      exp: "In $\\text{MnO}_4^-$, $\\text{Mn}^{7+}$ has $3d^0$. The purple colour is due to $\\text{O}^{2-} \\rightarrow \\text{Mn}^{7+}$ charge transfer."
    },
    {
      q: "The yellow-orange colour of potassium dichromate $\\text{K}_2\\text{Cr}_2\\text{O}_7$ is due to:",
      opts: [
        "Ligand-to-metal charge transfer (LMCT)",
        "$d-d$ transition",
        "Spin-forbidden transition",
        "Polarization of potassium"
      ],
      c: 0,
      exp: "$\\text{Cr}^{6+}$ has a $3d^0$ configuration; the color arises from $\\text{O}^{2-} \\rightarrow \\text{Cr}^{6+}$ charge transfer."
    },
    {
      q: "If an octahedral complex absorbs yellow-green light ($\\sim 560\\text{ nm}$), what complementary colour does it transmit?",
      opts: ["Purple / Violet", "Red", "Blue-green", "Yellow"],
      c: 0,
      exp: "The complementary colour to yellow-green is purple/violet."
    },
    {
      q: "If a complex absorbs red light ($\\sim 650\\text{ nm}$), its observed transmitted colour will be:",
      opts: ["Blue or blue-green", "Red", "Yellow", "Violet"],
      c: 0,
      exp: "Red light absorption results in transmission of its complementary colour, blue/cyan."
    },
    {
      q: "In a tetrahedral crystal field, which orbitals are raised in energy by $+0.4\\Delta_t$?",
      opts: [
        "$d_{xy}, d_{yz}, d_{zx}$ ($t_2$ set)",
        "$d_{x^2-y^2}, d_{z^2}$ ($e$ set)",
        "$d_{z^2}$ only",
        "$d_{x^2-y^2}$ only"
      ],
      c: 0,
      exp: "In tetrahedral splitting, the $t_2$ set ($d_{xy}, d_{yz}, d_{zx}$) is destabilized by $+0.4\\Delta_t$ above the barycentre."
    },
    {
      q: "In a tetrahedral crystal field, which orbitals are lowered in energy by $-0.6\\Delta_t$?",
      opts: [
        "$d_{x^2-y^2}, d_{z^2}$ ($e$ set)",
        "$d_{xy}, d_{yz}, d_{zx}$ ($t_2$ set)",
        "$d_{xy}$ only",
        "$d_{yz}$ only"
      ],
      c: 0,
      exp: "The $e$ set ($d_{x^2-y^2}, d_{z^2}$) is stabilized by $-0.6\\Delta_t$ below the barycentre in tetrahedral complexes."
    },
    {
      q: "Which of the following complexes has the largest value of $\\Delta_o$?",
      opts: [
        "$[\\text{Co(CN)}_6]^{3-}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Co(H}_2\\text{O})_6]^{3+}$",
        "$[\\text{CoF}_6]^{3-}$"
      ],
      c: 0,
      exp: "$\\text{CN}^-$ is a strong field ligand near the top of the spectrochemical series, giving the largest $\\Delta_o$."
    },
    {
      q: "Which of the following complexes has the smallest value of $\\Delta_o$?",
      opts: [
        "$[\\text{CoF}_6]^{3-}$",
        "$[\\text{Co(H}_2\\text{O})_6]^{3+}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Co(CN)}_6]^{3-}$"
      ],
      c: 0,
      exp: "$\\text{F}^-$ is a weak field ligand at the bottom of the series, producing the smallest $\\Delta_o$."
    },
    {
      q: "The wavelength of light absorbed by $[\\text{CoCl}(\\text{NH}_3)_5]^{2+}, [\\text{Co}(\\text{NH}_3)_5(\\text{H}_2\\text{O})]^{3+}$, and $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is in what order?",
      opts: [
        "$[\\text{CoCl}(\\text{NH}_3)_5]^{2+} > [\\text{Co}(\\text{NH}_3)_5(\\text{H}_2\\text{O})]^{3+} > [\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "$[\\text{Co}(\\text{NH}_3)_6]^{3+} > [\\text{Co}(\\text{NH}_3)_5(\\text{H}_2\\text{O})]^{3+} > [\\text{CoCl}(\\text{NH}_3)_5]^{2+}$",
        "$[\\text{Co}(\\text{NH}_3)_5(\\text{H}_2\\text{O})]^{3+} > [\\text{CoCl}(\\text{NH}_3)_5]^{2+} > [\\text{Co}(\\text{NH}_3)_6]^{3+}$",
        "All absorb at the same wavelength"
      ],
      c: 0,
      exp: "Ligand field strength: $\\text{Cl}^- < \\text{H}_2\\text{O} < \\text{NH}_3$. Since $\\Delta_o = hc/\\lambda$, greater $\\Delta_o$ means shorter wavelength absorbed. Hence $\\lambda$ absorbed: $\\text{Cl}^- > \\text{H}_2\\text{O} > \\text{NH}_3$."
    },
    {
      q: "Ruby is chemically aluminium oxide ($\\alpha-\\text{Al}_2\\text{O}_3$) containing about $0.5-1\\%$ of which transition metal impurity responsible for its red colour?",
      opts: [
        "$\\text{Cr}^{3+}$",
        "$\\text{Fe}^{3+}$",
        "$\\text{Ti}^{4+}$",
        "$\\text{Co}^{2+}$"
      ],
      c: 0,
      exp: "$\\text{Cr}^{3+}$ ions replace $\\text{Al}^{3+}$ in the octahedral sites of $\\text{Al}_2\\text{O}_3$. $d-d$ transitions absorb green-yellow light, imparting a ruby-red colour."
    },
    {
      q: "Emerald is a beryl mineral ($\\text{Be}_3\\text{Al}_2\\text{Si}_6\\text{O}_{18}$) containing trace amounts of which ion imparting its characteristic green colour?",
      opts: [
        "$\\text{Cr}^{3+}$",
        "$\\text{Fe}^{2+}$",
        "$\\text{Ni}^{2+}$",
        "$\\text{Mn}^{2+}$"
      ],
      c: 0,
      exp: "$\\text{Cr}^{3+}$ ions in beryl occupy slightly larger octahedral sites than in ruby, decreasing $\\Delta_o$ and transmitting green light."
    },
    {
      q: "What is the orbital degeneracy of the $e_g$ set in an octahedral crystal field?",
      opts: ["2", "3", "5", "1"],
      c: 0,
      exp: "The $e_g$ set consists of two orbitals ($d_{x^2-y^2}$ and $d_{z^2}$), so its degeneracy is 2."
    },
    {
      q: "What is the orbital degeneracy of the $t_{2g}$ set in an octahedral crystal field?",
      opts: ["3", "2", "5", "1"],
      c: 0,
      exp: "The $t_{2g}$ set consists of three orbitals ($d_{xy}, d_{yz}, d_{zx}$), so its degeneracy is 3."
    },
    {
      q: "In an octahedral complex, the $d-d$ electronic transition is Laporte-forbidden because:",
      opts: [
        "There is no change in parity ($g \\rightarrow g$ is forbidden in centrosymmetric fields)",
        "The spin quantum number changes",
        "Ligands are non-polar",
        "The complex has no center of inversion"
      ],
      c: 0,
      exp: "The Laporte selection rule states that transitions between states of the same parity ($g \\rightarrow g$) are forbidden in centrosymmetric complexes."
    },
    {
      q: "Why are tetrahedral complexes generally more intensely coloured than octahedral complexes?",
      opts: [
        "Tetrahedral complexes lack a center of inversion, so Laporte selection rule is relaxed ($d-p$ orbital mixing occurs)",
        "Tetrahedral complexes have larger crystal field splitting",
        "Tetrahedral complexes have more ligands",
        "Tetrahedral complexes have higher spin states"
      ],
      c: 0,
      exp: "Without a center of symmetry, $3d-4p$ mixing occurs in tetrahedral complexes, relaxing the Laporte rule and increasing the molar absorptivity."
    },
    {
      q: "What is the CFSE of a high-spin $d^7$ octahedral complex?",
      opts: ["$-0.8\\Delta_o$", "$-1.8\\Delta_o$", "$-1.2\\Delta_o$", "$-0.4\\Delta_o$"],
      c: 0,
      exp: "High-spin $d^7$ is $t_{2g}^5 e_g^2$. $\\text{CFSE} = 5(-0.4) + 2(0.6) = -2.0 + 1.2 = -0.8\\Delta_o$."
    },
    {
      q: "What is the CFSE of a low-spin $d^7$ octahedral complex?",
      opts: ["$-1.8\\Delta_o + P$", "$-0.8\\Delta_o$", "$-2.4\\Delta_o + 2P$", "$-1.2\\Delta_o$"],
      c: 0,
      exp: "Low-spin $d^7$ is $t_{2g}^6 e_g^1$. $\\text{CFSE} = 6(-0.4) + 1(0.6) + P = -2.4 + 0.6 + P = -1.8\\Delta_o + P$."
    },
    {
      q: "What is the CFSE of a $d^2$ octahedral complex?",
      opts: ["$-0.8\\Delta_o$", "$-0.4\\Delta_o$", "$-1.2\\Delta_o$", "$-1.6\\Delta_o$"],
      c: 0,
      exp: "$d^2$ has $t_{2g}^2 e_g^0$. $\\text{CFSE} = 2(-0.4\\Delta_o) = -0.8\\Delta_o$."
    },
    {
      q: "What is the CFSE of a $d^1$ octahedral complex?",
      opts: ["$-0.4\\Delta_o$", "$-0.6\\Delta_o$", "$+0.6\\Delta_o$", "$0$"],
      c: 0,
      exp: "$d^1$ has $t_{2g}^1 e_g^0$. $\\text{CFSE} = 1(-0.4\\Delta_o) = -0.4\\Delta_o$."
    },
    {
      q: "What is the CFSE of a $d^9$ octahedral complex?",
      opts: ["$-0.6\\Delta_o$", "$-1.2\\Delta_o$", "$-0.4\\Delta_o$", "$-1.8\\Delta_o$"],
      c: 0,
      exp: "$d^9$ is $t_{2g}^6 e_g^3$. $\\text{CFSE} = 6(-0.4) + 3(0.6) = -2.4 + 1.8 = -0.6\\Delta_o$."
    },
    {
      q: "In a square planar complex, which $d$-orbital experiences the greatest electrostatic repulsion and has the highest energy?",
      opts: ["$d_{x^2-y^2}$", "$d_{z^2}$", "$d_{xy}$", "$d_{xz}$"],
      c: 0,
      exp: "In the $xy$-plane, the lobes of $d_{x^2-y^2}$ point directly at the four ligands, giving it the highest energy."
    },
    {
      q: "Which of the following ligands is a $\\pi$-acceptor ligand?",
      opts: ["$\\text{CO}$", "$\\text{OH}^-$", "$\\text{F}^-$", "$\\text{Cl}^-$"],
      c: 0,
      exp: "Carbon monoxide has empty $\\pi^*$ antibonding orbitals that accept electron density from filled metal $d$-orbitals ($\\\\pi$-acid ligand)."
    },
    {
      q: "Which of the following ligands is a $\\pi$-donor ligand?",
      opts: ["$\\text{I}^-$", "$\\text{CO}$", "$\\text{CN}^-$", "$\\text{NO}^+$"],
      c: 0,
      exp: "Halide ions like $\\text{I}^-$ have filled non-bonding $p$-orbitals that act as $\\pi$-donors to metal $d$-orbitals."
    },
    {
      q: "The crystal field splitting $\\Delta_o$ of $[\\text{Rh}(\\text{NH}_3)_6]^{3+}$ is approximately how much greater than that of $[\\text{Co}(\\text{NH}_3)_6]^{3+}$?",
      opts: [
        "About $50\\%$ greater",
        "About $50\\%$ smaller",
        "Identical",
        "About $4$ times smaller"
      ],
      c: 0,
      exp: "Transitioning from $3d$ (Co) to $4d$ (Rh) increases the crystal field splitting parameter by approximately $40-50\\%$."
    }
  ];

  mcqData.slice(0, 44).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $t_{2g}$ set in low-spin $[\\text{Co}(\\text{NH}_3)_6]^{3+}$?",
    "6",
    "$\\text{Co}^{3+}$ is low-spin $3d^6$ with electron configuration $t_{2g}^6 e_g^0$."
  ));
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $e_g$ set in low-spin $[\\text{Co}(\\text{NH}_3)_6]^{3+}$?",
    "0",
    "In $t_{2g}^6 e_g^0$, zero electrons occupy the $e_g$ set."
  ));
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $e_g$ set in high-spin $[\\text{CoF}_6]^{3-}$?",
    "2",
    "High-spin $\\text{Co}^{3+}$ ($3d^6$) has configuration $t_{2g}^4 e_g^2$ with $2$ electrons in $e_g$."
  ));
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $t_{2g}$ set in high-spin $[\\text{CoF}_6]^{3-}$?",
    "4",
    "In $t_{2g}^4 e_g^2$, $4$ electrons occupy the $t_{2g}$ set."
  ));
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $t_{2g}$ set in high-spin $[\\text{Fe(H}_2\\text{O})_6]^{3+}$?",
    "3",
    "High-spin $\\text{Fe}^{3+}$ ($3d^5$) has configuration $t_{2g}^3 e_g^2$ with $3$ electrons in $t_{2g}$."
  ));
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $e_g$ set in high-spin $[\\text{Fe(H}_2\\text{O})_6]^{3+}$?",
    "2",
    "In $t_{2g}^3 e_g^2$, $2$ electrons occupy the $e_g$ set."
  ));
  list.push(createNumerical(st,
    "How many $d$-electrons are in the $t_{2g}$ set in low-spin $[\\text{Fe(CN)}_6]^{3-}$?",
    "5",
    "Low-spin $\\text{Fe}^{3+}$ ($3d^5$) has configuration $t_{2g}^5 e_g^0$ with $5$ electrons in $t_{2g}$."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in high-spin $[\\text{Mn(H}_2\\text{O})_6]^{2+}$?",
    "5",
    "High-spin $\\text{Mn}^{2+}$ ($3d^5$) has configuration $t_{2g}^3 e_g^2$ with $5$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "What is the orbital degeneracy of the $e_g$ set in an octahedral crystal field?",
    "2",
    "The $e_g$ set contains $2$ orbitals ($d_{x^2-y^2}$ and $d_{z^2}$)."
  ));
  list.push(createNumerical(st,
    "What is the orbital degeneracy of the $t_{2g}$ set in an octahedral crystal field?",
    "3",
    "The $t_{2g}$ set contains $3$ orbitals ($d_{xy}, d_{yz}, d_{zx}$)."
  ));
  list.push(createNumerical(st,
    "In $[\\text{Ti(H}_2\\text{O})_6]^{3+}$, how many electrons are promoted from $t_{2g}$ to $e_g$ during its optical absorption?",
    "1",
    "$\\text{Ti}^{3+}$ has a single $d$-electron ($3d^1$), so exactly $1$ electron is promoted."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the low-spin octahedral complex of a $d^7$ transition metal ion?",
    "1",
    "In low-spin $d^7$, the configuration is $t_{2g}^6 e_g^1$ with $1$ unpaired electron."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the high-spin octahedral complex of a $d^7$ transition metal ion?",
    "3",
    "In high-spin $d^7$, the configuration is $t_{2g}^5 e_g^2$ with $3$ unpaired electrons."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 5...");
const allPart5 = buildPart5();
console.log(`Total Part 5 questions: ${allPart5.length} (Expected: 83)`);

allPart5.forEach((q, idx) => {
  checkKatex(q.question, `Part5[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part5[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part5[${idx}].explanation`);
});

console.log("All Part 5 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 5
module.exports = ${JSON.stringify(allPart5, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part5.js', fileContent);
console.log("Written scripts/data_coord_part5.js successfully!");
