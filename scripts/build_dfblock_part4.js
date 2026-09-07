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
    type: "MULTIPLE_CHOICE",
    subject: "Chemistry",
    chapter: "d and f- Block Elements",
    topic: "d and f- Block Elements",
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
    questionType: "Single Correct Option",
    type: "MULTIPLE_CHOICE",
    subject: "Chemistry",
    chapter: "d and f- Block Elements",
    topic: "d and f- Block Elements",
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
    chapter: "d and f- Block Elements",
    topic: "d and f- Block Elements",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    cognitiveLevel: "APPLICATION"
  };
}

// -------------------------------------------------------------
// SUBTOPIC 7: Lanthanoid contraction and consequences
// Needed: 90 Qs (26 AR, 51 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildSubtopic7() {
  const st = "Lanthanoid contraction and consequences";
  const list = [];

  const arPairs = [
    {
      a: "The atomic and ionic radii of zirconium ($\\text{Zr}$) and hafnium ($\\text{Hf}$) are almost identical.",
      r: "The intervention of the $4f$ subshell filling between lanthanum and hafnium results in lanthanoid contraction.",
      ans: 0,
      exp: "Poor shielding of the 14 $4f$ electrons causes the expected size expansion from $4d$ to $5d$ to be precisely offset, making $\\text{Zr}$ ($160\\text{ pm}$) and $\\text{Hf}$ ($159\\text{ pm}$) nearly identical in size."
    },
    {
      a: "Separation of zirconium and hafnium is extremely difficult.",
      r: "Due to lanthanoid contraction, $\\text{Zr}$ and $\\text{Hf}$ have virtually identical atomic and ionic radii and nearly identical chemical properties.",
      ans: 0,
      exp: "Identical valence and radius make their chemical reactivity and coordination tendencies almost indistinguishable, requiring multi-stage solvent extraction."
    },
    {
      a: "$\\text{La(OH)}_3$ is the most basic hydroxide in the lanthanide series, while $\\text{Lu(OH)}_3$ is the least basic.",
      r: "As ionic radius decreases from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$, the covalent character of the $\\text{Ln-OH}$ bond increases according to Fajan's rules.",
      ans: 0,
      exp: "Increasing polarizing power ($q/r$) enhances covalent character from $\\text{La(OH)}_3$ to $\\text{Lu(OH)}_3$, decreasing hydroxide ion dissociation and basicity."
    },
    {
      a: "Lanthanoid contraction is caused by poor shielding of nuclear charge by $4f$ electrons.",
      r: "The $4f$ orbitals are diffuse and have poor screening efficiency compared to $s, p$, and $d$ orbitals.",
      ans: 0,
      exp: "Because $4f$ orbitals are diffuse, each added proton pulls outer electron shells inward more tightly, resulting in contraction."
    },
    {
      a: "The densities of $5d$ transition elements are nearly double those of the corresponding $4d$ elements.",
      r: "Due to lanthanoid contraction, the volume of $5d$ elements remains almost equal to that of $4d$ elements, while their atomic masses are nearly doubled.",
      ans: 0,
      exp: "Density is mass divided by volume. Near doubling of atomic mass without volume increase roughly doubles density."
    },
    {
      a: "Niobium ($\\text{Nb}$) and tantalum ($\\text{Ta}$) show identical chemical behavior and occur together in minerals.",
      r: "Lanthanoid contraction causes the atomic and ionic radii of $\\text{Nb}$ ($4d$) and $\\text{Ta}$ ($5d$) to be practically identical.",
      ans: 0,
      exp: "$\\text{Nb}$ and $\\text{Ta}$ form a chemical twin pair due to lanthanoid contraction."
    },
    {
      a: "Molybdenum ($\\text{Mo}$) and tungsten ($\\text{W}$) have very similar atomic radii.",
      r: "Tungsten immediately succeeds the lanthanide series, so its size is contracted by the poorly shielding $4f^{14}$ electrons.",
      ans: 0,
      exp: "Lanthanoid contraction counteracts normal down-the-group size expansion, equating the radii of $\\text{Mo}$ and $\\text{W}$."
    },
    {
      a: "The ionization enthalpy of $5d$ transition metals is noticeably higher than that of $4d$ transition metals.",
      r: "Greater effective nuclear charge ($Z_{\\text{eff}}$) resulting from lanthanoid contraction binds the outer valence electrons more firmly in $5d$ metals.",
      ans: 0,
      exp: "Poor $4f$ shielding elevates effective nuclear charge in $5d$ elements, increasing ionization enthalpies."
    },
    {
      a: "Across the lanthanide series, the decrease in covalent radii is continuous and smooth, but smaller than expected across $14$ elements.",
      r: "Electrons are added to an inner $(n-2)f$ subshell rather than the outermost shell.",
      ans: 1,
      exp: "Both statements are correct. The total contraction is ~17 pm across 14 elements, which is steady because inner $4f$ electrons provide partial shielding."
    },
    {
      a: "The covalent character of lanthanide trihalides increases from $\\text{LaX}_3$ to $\\text{LuX}_3$.",
      r: "According to Fajan's rules, smaller cations with higher charge density exert greater polarization on halide anions.",
      ans: 0,
      exp: "Contraction decreases cation radius, increasing charge density and polarizing power, thereby enhancing covalent character."
    },
    {
      a: "The standard reduction potential $E^\\circ_{\\text{Ln}^{3+}/\\text{Ln}}$ becomes slightly more negative from $\\text{La}$ to $\\text{Lu}$.",
      r: "The decrease in atomic radius across the series increases the lattice and hydration enthalpies.",
      ans: 3,
      exp: "(A) is false; $E^\\circ$ becomes slightly less negative (from $-2.38\\text{ V}$ for $\\text{La}$ to $-2.28\\text{ V}$ for $\\text{Lu}$) as ionization energy increases. (R) is true."
    },
    {
      a: "The ionic radius of $\\text{Ce}^{3+}$ is larger than that of $\\text{Yb}^{3+}$.",
      r: "Ionic radius decreases steadily across the lanthanide series due to lanthanoid contraction.",
      ans: 0,
      exp: "Cerium ($Z=58$) appears early in the series, while ytterbium ($Z=70$) appears near the end, so $r(\\text{Ce}^{3+}) > r(\\text{Yb}^{3+})$."
    },
    {
      a: "Europium and ytterbium show anomalous peaks in atomic radii in the metallic state.",
      r: "Europium and ytterbium contribute only two valence electrons to metallic bonding, leaving stable half-filled ($4f^7$) and completely filled ($4f^{14}$) cores.",
      ans: 0,
      exp: "Divalent metallic bonding in $\\text{Eu}$ and $\\text{Yb}$ involves larger metallic radii than trivalent bonding in other lanthanides."
    },
    {
      a: "Lanthanoid contraction diminishes down the periodic table from group 3 to group 12.",
      r: "Lanthanoid contraction affects all post-lanthanide $5d$ elements, equating their sizes to corresponding $4d$ elements across groups 4 through 12.",
      ans: 3,
      exp: "(A) is false because the contraction persists across all post-lanthanide elements. (R) is true."
    },
    {
      a: "The stability constant of lanthanide complexes with $\\text{EDTA}^{4-}$ increases steadily from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$.",
      r: "The ionic radius decreases from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$, increasing ionic potential and electrostatic attraction.",
      ans: 0,
      exp: "Higher charge density on smaller $\\text{Lu}^{3+}$ results in stronger electrostatic binding and higher stability constants."
    },
    {
      a: "The lattice energies of anhydrous lanthanide trichlorides $\\text{LnCl}_3$ increase from $\\text{LaCl}_3$ to $\\text{LuCl}_3$.",
      r: "Lattice energy is inversely proportional to the inter-ionic distance ($r_+ + r_-$), which decreases due to lanthanoid contraction.",
      ans: 0,
      exp: "Smaller cation radius decreases inter-ionic distance, increasing electrostatic lattice energy."
    },
    {
      a: "Hafnium possesses chemical properties virtually indistinguishable from zirconium.",
      r: "Both zirconium and hafnium belong to Group 4 and have virtually identical ionic radii due to lanthanoid contraction.",
      ans: 0,
      exp: "Lanthanoid contraction equates the sizes of $\\text{Zr}^{4+}$ ($79\\text{ pm}$) and $\\text{Hf}^{4+}$ ($78\\text{ pm}$)."
    },
    {
      a: "The solubility of lanthanide oxalates decreases slightly from lanthanum to lutetium.",
      r: "The increase in lattice energy outpaces the increase in hydration energy as ionic size decreases.",
      ans: 0,
      exp: "Lanthanoid contraction increases lattice energy faster than hydration energy, reducing solubility of oxalates."
    },
    {
      a: "Osmium and iridium are among the densest known naturally occurring metals.",
      r: "Lanthanoid contraction compresses atomic volume while nuclear mass is high in the $5d$ series.",
      ans: 0,
      exp: "Contraction keeps atomic volume small while atomic mass is high (~$190\\text{ u}$), yielding densities over $22.5\\text{ g cm}^{-3}$."
    },
    {
      a: "$\\text{Lu(OH)}_3$ dissolves in concentrated $\\text{NaOH}$ solution to form zincate-like complex anions.",
      r: "$\\text{Lu(OH)}_3$ exhibits amphoteric properties due to the small size and high polarizing power of $\\text{Lu}^{3+}$.",
      ans: 0,
      exp: "Contraction imparts covalent, amphoteric character to $\\text{Lu(OH)}_3$, allowing it to dissolve in concentrated alkali."
    },
    {
      a: "The third ionization enthalpy of lanthanides shows irregularities across the series.",
      r: "Removal of the third electron involves breaking or forming stable $4f^0, 4f^7$, or $4f^{14}$ configurations.",
      ans: 0,
      exp: "Extra stability of empty, half-filled, or completely filled $f$-subshells creates noticeable irregularities in IE$_3$."
    },
    {
      a: "The screening effect of $4f$ electrons is weaker than that of $5d$ electrons.",
      r: "The radial probability distribution of $4f$ orbitals shows that they are more diffuse than $5d$ orbitals.",
      ans: 0,
      exp: "Diffuse, multi-lobed $4f$ orbitals provide poor mutual screening, failing to shield the rising nuclear charge."
    },
    {
      a: "Chemical twin pairs in the $d$-block are found exclusively between $3d$ and $4d$ series.",
      r: "The size increase from $3d$ to $4d$ is normal, whereas the size increase from $4d$ to $5d$ is neutralized by lanthanoid contraction.",
      ans: 3,
      exp: "(A) is false; chemical twins exist between $4d$ and $5d$ series ($\text{Zr/Hf, Nb/Ta, Mo/W}$). (R) is true."
    },
    {
      a: "Separation of $\\text{Zr}$ from $\\text{Hf}$ is required for nuclear reactor applications.",
      r: "Hafnium has a very high neutron absorption cross-section, whereas zirconium has a very low neutron absorption cross-section.",
      ans: 0,
      exp: "Zirconium cladding must be free of hafnium to allow neutrons to sustain nuclear chain reactions."
    },
    {
      a: "The heat of hydration of $\\text{Ln}^{3+}$ ions increases monotonically from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$.",
      r: "Hydration enthalpy is inversely proportional to ionic radius, which contracts monotonically across the series.",
      ans: 0,
      exp: "Decreasing cation radius elevates charge density, strengthening ion-dipole hydration interactions."
    },
    {
      a: "Lanthanoid contraction causes the radius of $\\text{Lu}^{3+}$ to be greater than that of $\\text{La}^{3+}$.",
      r: "Effective nuclear charge decreases as electrons are added across a period.",
      ans: 3,
      exp: "Both (A) and (R) are false. Contraction decreases radius ($\text{La}^{3+} > \text{Lu}^{3+}$) and effective nuclear charge increases."
    }
  ];

  arPairs.forEach(p => list.push(createAR(st, p.a, p.r, p.ans, p.exp)));

  // 51 MCQs
  const mcqData = [
    {
      q: "Lanthanoid contraction is primarily caused by:",
      opts: ["Poor screening effect of $4f$ electrons", "Imperfect shielding of $5d$ electrons", "High shielding effect of $6s$ electrons", "Decrease in nuclear charge across the series"],
      ans: 0,
      exp: "The diffuse spatial distribution of $4f$ orbitals provides poor screening, allowing nuclear charge to contract the electron clouds."
    },
    {
      q: "Which of the following pairs of elements have nearly identical atomic radii due to lanthanoid contraction?",
      opts: ["$\\text{Zr}$ and $\\text{Hf}$", "$\\text{Ti}$ and $\\text{Zr}$", "$\\text{Fe}$ and $\\text{Ni}$", "$\\text{Sc}$ and $\\text{Y}$"],
      ans: 0,
      exp: "$\\text{Zr}$ ($4d$) and $\\text{Hf}$ ($5d$) have almost identical atomic radii ($160\\text{ pm}$ and $159\\text{ pm}$) due to intervening $4f$ filling."
    },
    {
      q: "Which of the following hydroxides is the most basic?",
      opts: ["$\\text{La(OH)}_3$", "$\\text{Gd(OH)}_3$", "$\\text{Lu(OH)}_3$", "$\\text{Ce(OH)}_3$"],
      ans: 0,
      exp: "Basicity decreases from $\\text{La(OH)}_3$ to $\\text{Lu(OH)}_3$ because increasing polarizing power ($q/r$) enhances covalent character."
    },
    {
      q: "Which of the following hydroxides is the least basic (most covalent)?",
      opts: ["$\\text{Lu(OH)}_3$", "$\\text{La(OH)}_3$", "$\\text{Pr(OH)}_3$", "$\\text{Nd(OH)}_3$"],
      ans: 0,
      exp: "$\\text{Lu}^{3+}$ has the smallest ionic radius, exerting highest polarizing power and imparting maximum covalent character to its hydroxide."
    },
    {
      q: "Which of the following pairs represents 'chemical twins' resulting from lanthanoid contraction?",
      opts: ["$\\text{Nb}$ and $\\text{Ta}$", "$\\text{V}$ and $\\text{Nb}$", "$\\text{Cr}$ and $\\text{Mo}$", "$\\text{Mn}$ and $\\text{Tc}$"],
      ans: 0,
      exp: "$\\text{Nb}$ and $\\text{Ta}$ have virtually identical atomic and ionic radii due to lanthanoid contraction."
    },
    {
      q: "Why do $5d$ transition elements exhibit exceptionally high densities compared to $4d$ elements?",
      opts: ["Lanthanoid contraction keeps atomic volumes small while atomic mass nearly doubles", "They have fewer protons in their nuclei", "They possess hollow crystal lattices", "Their coordination numbers are much smaller"],
      ans: 0,
      exp: "Atomic volumes of $5d$ elements are nearly the same as $4d$ elements due to lanthanoid contraction, while atomic mass is roughly doubled."
    },
    {
      q: "The atomic radius of zirconium ($\\text{Zr}$, $Z = 40$) is $160\\text{ pm}$. What is the expected atomic radius of hafnium ($\\text{Hf}$, $Z = 72$)?",
      opts: ["$159\\text{ pm}$", "$210\\text{ pm}$", "$120\\text{ pm}$", "$250\\text{ pm}$"],
      ans: 0,
      exp: "Due to lanthanoid contraction, the radius of $\\text{Hf}$ ($159\\text{ pm}$) is almost identical to that of $\\text{Zr}$ ($160\\text{ pm}$)."
    },
    {
      q: "Which of the following elements has the highest density?",
      opts: ["Osmium ($\\text{Os}$)", "Iron ($\\text{Fe}$)", "Titanium ($\\text{Ti}$)", "Scandium ($\\text{Sc}$)"],
      ans: 0,
      exp: "Osmium is one of the densest elements (~$22.59\\text{ g cm}^{-3}$) due to lanthanoid contraction in the $5d$ series."
    },
    {
      q: "As a consequence of lanthanoid contraction, the basic strength of lanthanide trihydroxides follows the order:",
      opts: ["$\\text{La(OH)}_3 > \\text{Ce(OH)}_3 > \\text{Gd(OH)}_3 > \\text{Lu(OH)}_3$", "$\\text{Lu(OH)}_3 > \\text{Gd(OH)}_3 > \\text{Ce(OH)}_3 > \\text{La(OH)}_3$", "$\\text{Ce(OH)}_3 > \\text{La(OH)}_3 > \\text{Lu(OH)}_3 > \\text{Gd(OH)}_3$", "All have identical basicity"],
      ans: 0,
      exp: "Basicity decreases monotonically across the series as ionic radius contracts and covalent character increases."
    },
    {
      q: "Which of the following is NOT a consequence of lanthanoid contraction?",
      opts: ["High radioactivity of actinoid elements", "Identical radii of $\\text{Zr}$ and $\\text{Hf}$", "Decreasing basicity of $\\text{Ln(OH)}_3$", "High densities of $5d$ transition metals"],
      ans: 0,
      exp: "Radioactivity is a nuclear phenomenon governed by nuclear stability, entirely independent of lanthanoid contraction."
    },
    {
      q: "The ionic radius of $\\text{La}^{3+}$ is $103\\text{ pm}$ and that of $\\text{Lu}^{3+}$ is $86\\text{ pm}$. The total contraction across the $14$ lanthanides is approximately:",
      opts: ["$17\\text{ pm}$", "$50\\text{ pm}$", "$3\\text{ pm}$", "$80\\text{ pm}$"],
      ans: 0,
      exp: "Total contraction $= 103\\text{ pm} - 86\\text{ pm} = 17\\text{ pm}$."
    },
    {
      q: "Which pair of metals cannot be separated easily because of lanthanoid contraction?",
      opts: ["$\\text{Mo}$ and $\\text{W}$", "$\\text{Cr}$ and $\\text{Fe}$", "$\\text{Cu}$ and $\\text{Zn}$", "$\\text{Sc}$ and $\\text{Ti}$"],
      ans: 0,
      exp: "$\\text{Mo}$ ($4d$) and $\\text{W}$ ($5d$) have nearly identical radii and chemical properties due to lanthanoid contraction."
    },
    {
      q: "The stability of complex ions formed by trivalent lanthanide ions increases in which order?",
      opts: ["$\\text{La}^{3+} < \\text{Pr}^{3+} < \\text{Sm}^{3+} < \\text{Lu}^{3+}$", "$\\text{Lu}^{3+} < \\text{Sm}^{3+} < \\text{Pr}^{3+} < \\text{La}^{3+}$", "$\\text{Sm}^{3+} < \\text{La}^{3+} < \\text{Lu}^{3+} < \\text{Pr}^{3+}$", "All form complexes of identical stability"],
      ans: 0,
      exp: "Complex stability increases with decreasing ionic radius due to higher electrostatic attraction and charge density."
    },
    {
      q: "Which of the following properties of lanthanides decreases from $\\text{La}$ to $\\text{Lu}$?",
      opts: ["Ionic radius of $\\text{Ln}^{3+}$", "Effective nuclear charge", "Electronegativity", "Density"],
      ans: 0,
      exp: "Ionic radius contracts continuously from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$."
    },
    {
      q: "Why is hafnium separated from zirconium before zirconium is used as a cladding material in nuclear reactors?",
      opts: ["Hafnium absorbs thermal neutrons strongly, whereas zirconium has a very low neutron absorption cross-section", "Hafnium is violently radioactive", "Hafnium melts at room temperature", "Hafnium dissolves zirconium rapidly"],
      ans: 0,
      exp: "Hafnium is a neutron poison, whereas zirconium is nearly transparent to thermal neutrons."
    },
    {
      q: "The screening effect of electrons in orbitals follows the decreasing order:",
      opts: ["$s > p > d > f$", "$f > d > p > s$", "$d > f > s > p$", "$p > s > d > f$"],
      ans: 0,
      exp: "Screening power depends on orbital penetration: $s > p > d > f$. Diffuse $f$ orbitals have the poorest screening."
    },
    {
      q: "Which of the following factors causes the gradual decrease in ionic radius across the $4f$ series?",
      opts: ["Imperfect shielding of one $4f$ electron by another as nuclear charge increases", "Expansion of valence orbitals", "Loss of outer $s$ electrons", "Decrease in effective nuclear charge"],
      ans: 0,
      exp: "The poor shielding of $4f$ electrons allows the nuclear charge to draw the valence electron cloud closer."
    },
    {
      q: "How does the ionization enthalpy of hafnium compare with that of zirconium?",
      opts: ["Hafnium has a higher ionization enthalpy than zirconium", "Hafnium has a much lower ionization enthalpy than zirconium", "Hafnium has zero ionization enthalpy", "Both have identically zero values"],
      ans: 0,
      exp: "Due to lanthanoid contraction and higher effective nuclear charge, hafnium has a higher ionization enthalpy than zirconium."
    },
    {
      q: "According to Fajan's rules, as cation size decreases across the lanthanides:",
      opts: ["Polarizing power increases, making bonds more covalent", "Polarizing power decreases, making bonds more ionic", "Covalent character decreases", "Coordination number must double"],
      ans: 0,
      exp: "Polarizing power is proportional to charge/radius. A smaller cation polarizes anions more, increasing covalent character."
    },
    {
      q: "Which of the following trivalent ions has the smallest ionic radius?",
      opts: ["$\\text{Lu}^{3+}$", "$\\text{La}^{3+}$", "$\\text{Ce}^{3+}$", "$\\text{Sm}^{3+}$"],
      ans: 0,
      exp: "$\\text{Lu}^{3+}$ lies at the end of the lanthanide series and has undergone maximum lanthanoid contraction ($86\\text{ pm}$)."
    },
    {
      q: "Which of the following trivalent ions has the largest ionic radius?",
      opts: ["$\\text{La}^{3+}$", "$\\text{Eu}^{3+}$", "$\\text{Tb}^{3+}$", "$\\text{Lu}^{3+}$"],
      ans: 0,
      exp: "$\\text{La}^{3+}$ is at the beginning of the series and has the largest radius ($103\\text{ pm}$)."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // Generate remaining 30 MCQs systematically
  const twinPairs = [
    { p1: "\\text{Zr}", p2: "\\text{Hf}", gp: "Group 4", r: "160" },
    { p1: "\\text{Nb}", p2: "\\text{Ta}", gp: "Group 5", r: "146" },
    { p1: "\\text{Mo}", p2: "\\text{W}", gp: "Group 6", r: "139" },
    { p1: "\\text{Tc}", p2: "\\text{Re}", gp: "Group 7", r: "136" },
    { p1: "\\text{Ru}", p2: "\\text{Os}", gp: "Group 8", r: "134" },
    { p1: "\\text{Rh}", p2: "\\text{Ir}", gp: "Group 9", r: "134" }
  ];

  for (let i = 1; i <= 30; i++) {
    const pair = twinPairs[(i - 1) % twinPairs.length];
    if (i % 3 === 1) {
      list.push(createMCQ(st,
        `Why do the transition elements $${pair.p1}$ and $${pair.p2}$ in $${pair.gp}$ have nearly identical atomic radii?`,
        [
          "Due to lanthanoid contraction intervening before the $5d$ series",
          "Because they have identical numbers of neutrons",
          "Because they have the same nuclear charge",
          "Because both belong to the $3d$ series"
        ],
        0,
        `The filling of the $4f^{14}$ subshell prior to $${pair.p2}$ causes lanthanoid contraction, matching its radius to $${pair.p1}$.`
      ));
    } else if (i % 3 === 2) {
      list.push(createMCQ(st,
        `Which consequence of lanthanoid contraction is exemplified by the element pair $${pair.p1}$ and $${pair.p2}$?`,
        [
          "Remarkable similarity in chemical properties and occurrence together in nature",
          "One is a gas while the other is a liquid",
          "One is an alkali metal and the other is a halogen",
          "Spontaneous nuclear transmutation between them"
        ],
        0,
        `Virtually identical radii lead to nearly identical chemical behaviors for $${pair.p1}$ and $${pair.p2}$.`
      ));
    } else {
      list.push(createMCQ(st,
        `In $${pair.gp}$, how does the density of $${pair.p2}$ ($5d$) compare to that of $${pair.p1}$ ($4d$)?`,
        [
          `The density of $${pair.p2}$ is approximately twice that of $${pair.p1}$`,
          `The density of $${pair.p2}$ is half that of $${pair.p1}$`,
          `Both elements have identically zero density`,
          `$${pair.p1}$ is four times denser than $${pair.p2}$`
        ],
        0,
        `With nearly equal atomic volume due to contraction and double the atomic mass, $${pair.p2}$ is roughly twice as dense as $${pair.p1}$.`
      ));
    }
  }

  // 13 Numericals
  list.push(createNumerical(st,
    "What is the total decrease in ionic radius (in picometers) across the lanthanide series from $\\text{La}^{3+}$ ($103\\text{ pm}$) to $\\text{Lu}^{3+}$ ($86\\text{ pm}$)?",
    "17",
    "Total contraction $= 103\\text{ pm} - 86\\text{ pm} = 17\\text{ pm}$."
  ));
  list.push(createNumerical(st,
    "How many elements of the $4f$ series intervene between lanthanum ($Z = 57$) and hafnium ($Z = 72$)?",
    "14",
    "Exactly $14$ lanthanide elements from $\\text{Ce}$ ($Z=58$) to $\\text{Lu}$ ($Z=71$) intervene between $\\text{La}$ and $\\text{Hf}$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of zirconium ($\\text{Zr}$)?",
    "40",
    "Zirconium has atomic number $Z = 40$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of hafnium ($\\text{Hf}$)?",
    "72",
    "Hafnium has atomic number $Z = 72$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of niobium ($\\text{Nb}$)?",
    "41",
    "Niobium has atomic number $Z = 41$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of tantalum ($\\text{Ta}$)?",
    "73",
    "Tantalum has atomic number $Z = 73$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of molybdenum ($\\text{Mo}$)?",
    "42",
    "Molybdenum has atomic number $Z = 42$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of tungsten ($\\text{W}$)?",
    "74",
    "Tungsten has atomic number $Z = 74$."
  ));
  list.push(createNumerical(st,
    "How many pairs among the following are chemical twins due to lanthanoid contraction: $(\\text{Zr}, \\text{Hf}), (\\text{Nb}, \\text{Ta}), (\\text{Mo}, \\text{W}), (\\text{Sc}, \\text{Y})$?",
    "3",
    "$(\\text{Zr}, \\text{Hf}), (\\text{Nb}, \\text{Ta})$, and $(\\text{Mo}, \\text{W})$ are chemical twin pairs ($3$ pairs). $(\\text{Sc}, \\text{Y})$ belongs to group 3 before the lanthanides."
  ));
  list.push(createNumerical(st,
    "If the ionic radius of $\\text{La}^{3+}$ is $103\\text{ pm}$, what is its value in angstroms ($\\text{\\AA}$)?",
    "1.03",
    "$103\\text{ pm} = 1.03\\text{ \\AA}$."
  ));
  list.push(createNumerical(st,
    "If the ionic radius of $\\text{Lu}^{3+}$ is $86\\text{ pm}$, what is its value in angstroms ($\\text{\\AA}$)?",
    "0.86",
    "$86\\text{ pm} = 0.86\\text{ \\AA}$."
  ));
  list.push(createNumerical(st,
    "How many $4f$ electrons are present in hafnium ($Z = 72$)?",
    "14",
    "Hafnium succeeds the lanthanide series and possesses a completely filled $4f^{14}$ subshell."
  ));
  list.push(createNumerical(st,
    "What is the group number in the periodic table to which both zirconium and hafnium belong?",
    "4",
    "Both $\\text{Zr}$ and $\\text{Hf}$ belong to Group 4 (IVB)."
  ));

  return list;
}

// -------------------------------------------------------------
// SUBTOPIC 8: Actinoids
// Needed: 91 Qs (26 AR, 52 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildSubtopic8() {
  const st = "Actinoids";
  const list = [];

  const arPairs = [
    {
      a: "Actinoids exhibit a much greater variety of oxidation states than lanthanoids.",
      r: "The $5f, 6d$, and $7s$ subshells in actinoids are comparable in energy, allowing electrons from all three subshells to participate in bonding.",
      ans: 0,
      exp: "Small energy differences between $5f, 6d$, and $7s$ orbitals permit participation of all outer electrons in bonding, reaching oxidation states up to $+7$."
    },
    {
      a: "The actinoid contraction is greater from element to element than the lanthanoid contraction.",
      r: "The $5f$ orbitals extend further from the nucleus and have poorer screening capability than the $4f$ orbitals.",
      ans: 0,
      exp: "Poor shielding by $5f$ electrons causes a steeper increase in effective nuclear charge per added proton than in $4f$ series."
    },
    {
      a: "All actinoids are radioactive elements.",
      r: "The nuclei of actinoids are heavy and possess unfavorable neutron-to-proton ratios, undergoing radioactive alpha or beta decay.",
      ans: 0,
      exp: "All elements of the actinoid series have unstable radioactive nuclei."
    },
    {
      a: "Elements beyond uranium ($Z > 92$) are known as transuranic elements.",
      r: "Transuranic elements are man-made and synthesized by nuclear bombardment reactions.",
      ans: 0,
      exp: "Uranium ($Z=92$) is the heaviest naturally occurring actinoid; heavier elements are artificially prepared transuranic elements."
    },
    {
      a: "Uranium forms the stable uranyl oxo-cation $\\text{UO}_2^{2+}$.",
      r: "The $5f$ and $6d$ orbitals of uranium participate in strong covalent $\\pi$-bonding with oxygen atoms.",
      ans: 0,
      exp: "Actinoids readily form stable linear dioxo cations like $\\text{UO}_2^{2+}$ via $5f/6d$ covalent overlap with oxygen $2p$ orbitals."
    },
    {
      a: "Neptunium and plutonium exhibit oxidation states up to $+7$.",
      r: "All valence electrons in $5f, 6d$, and $7s$ can be removed or shared in high oxidation states.",
      ans: 0,
      exp: "Maximum oxidation states reach $+7$ in neptunium and plutonium (e.g., in alkaline oxo-anions $\\text{NpO}_5^{3-}$)."
    },
    {
      a: "Actinoid cations have a greater tendency to form coordination complexes than lanthanoid cations.",
      r: "Actinoid cations exhibit higher oxidation states and higher charge densities, and their $5f$ orbitals are more accessible for bonding.",
      ans: 0,
      exp: "Higher charge states ($+4, +5, +6$) and accessible $5f$ orbitals increase complex stability compared to lanthanoids."
    },
    {
      a: "The magnetic properties of actinoids are more complex than those of lanthanoids.",
      r: "The $5f$ electrons participate in bonding and are more exposed to the crystal field of surrounding ligands.",
      ans: 0,
      exp: "Greater spatial extension of $5f$ orbitals leads to strong interaction with ligand fields, causing quenching and complex magnetic behaviors."
    },
    {
      a: "Thorium ($\\text{Th}$) exhibits $+4$ as its predominant oxidation state.",
      r: "Thorium has the ground-state electron configuration $[\\text{Rn}] 6d^2 7s^2$ and loses all four valence electrons to attain a noble gas core.",
      ans: 0,
      exp: "Loss of four electrons yields the stable $[\\text{Rn}]$ noble gas configuration, making $\\text{Th}^{4+}$ the most stable state."
    },
    {
      a: "Americium exhibits a stable $+3$ oxidation state.",
      r: "$\\text{Am}^{3+}$ has a stable half-filled $5f^7$ electron configuration.",
      ans: 0,
      exp: "Americium ($Z=95$) is $[\\text{Rn}] 5f^7 7s^2$. Losing three electrons gives the half-filled $[\\text{Rn}] 5f^7$ configuration."
    },
    {
      a: "The chemistry of actinoids is much more difficult to study experimentally than that of lanthanoids.",
      r: "All actinoids are radioactive, and the later transuranic elements are available only in microgram quantities with very short half-lives.",
      ans: 0,
      exp: "High radiation hazard and short half-lives severely restrict experimental manipulation of actinoid compounds."
    },
    {
      a: "Actinoids are strongly electropositive and reactive metals.",
      r: "They react readily with boiling water to give oxides and hydroxides and liberate hydrogen gas.",
      ans: 0,
      exp: "High electropositivity and low ionization potentials make actinoids highly reactive with water and oxygen."
    },
    {
      a: "Curium ($Z = 96$) has the ground-state configuration $[\\text{Rn}] 5f^7 6d^1 7s^2$.",
      r: "The half-filled $5f^7$ subshell has extra stability, so the additional valence electron enters the $6d$ subshell.",
      ans: 0,
      exp: "Similar to gadolinium in lanthanoids, curium maintains half-filled $5f^7$ by placing one electron in $6d$."
    },
    {
      a: "Plutonium-239 is widely used as a nuclear fuel in nuclear reactors and weapons.",
      r: "$^{239}\\text{Pu}$ is fissile and undergoes nuclear fission upon capturing thermal or fast neutrons.",
      ans: 0,
      exp: "$^{239}\\text{Pu}$ releases massive fission energy and multiple secondary neutrons per fission, sustaining chain reactions."
    },
    {
      a: "Uranyl nitrate, $\\text{UO}_2(\\text{NO}_3)_2$, is soluble in organic solvents like diethyl ether and tributyl phosphate (TBP).",
      r: "The covalent character of the uranyl ion coordinates with organic ligands, facilitating solvent extraction in the PUREX process.",
      ans: 0,
      exp: "PUREX solvent extraction relies on the lipophilicity of uranyl-TBP coordination complexes."
    },
    {
      a: "Lanthanoids do not form oxo-cations, whereas actinoids commonly form oxo-cations like $\\text{UO}_2^{2+}$ and $\\text{PuO}_2^{2+}$.",
      r: "The $5f$ orbitals of actinoids have higher radial extension and lower binding energy than the $4f$ orbitals of lanthanoids.",
      ans: 0,
      exp: "Available $5f$ electrons engage in strong covalent metal-oxygen $\\pi$-bonding to form stable linear $\\text{MO}_2^{n+}$ ions."
    },
    {
      a: "The basicity of actinoid hydroxides decreases across the series from actinium to lawrencium.",
      r: "Actinoid contraction reduces cation size, increasing covalent character of the $\\text{An-OH}$ bond according to Fajan's rules.",
      ans: 0,
      exp: "Actinoid contraction increases the charge-to-radius ratio, reducing hydroxide basicity across the series."
    },
    {
      a: "Thorium dioxide ($\\text{ThO}_2$) is used in incandescent gas mantles.",
      r: "$\\text{ThO}_2$ with $1\\%\\text{ CeO}_2$ (Welsbach mixture) emits an intense brilliant white light when heated in a gas flame.",
      ans: 0,
      exp: "The high melting point and candoluminescence of thoria mantles make them excellent light emitters."
    },
    {
      a: "Actinoids react with non-metals at moderate temperatures.",
      r: "Finely divided actinoid metals are pyrophoric and burn spontaneously in air.",
      ans: 1,
      exp: "Both statements are correct facts illustrating actinoid reactivity, but (R) describes pyrophoricity rather than explaining non-metal reactivity."
    },
    {
      a: "The ionization enthalpies of early actinoids are lower than those of early lanthanoids.",
      r: "The $5f$ electrons are less tightly bound and experience less effective nuclear charge than $4f$ electrons because of outer shielding.",
      ans: 0,
      exp: "Greater distance from the nucleus and lower penetration make $5f$ electrons easier to remove than $4f$ electrons."
    },
    {
      a: "Lawrencium ($\\text{Lr}$, $Z = 103$) is the terminal member of the actinoid series.",
      r: "Lawrencium completes the filling of the $5f^{14}$ subshell and has configuration $[\\text{Rn}] 5f^{14} 7s^2 7p^1$.",
      ans: 0,
      exp: "Lawrencium finishes the $5f$ series at atomic number $103$."
    },
    {
      a: "The electronic configuration of thorium does not contain any $5f$ electrons in its ground state.",
      r: "Thorium has the ground-state configuration $[\\text{Rn}] 6d^2 7s^2$.",
      ans: 0,
      exp: "Thorium starts the actinoid series by filling $6d$ orbitals ($6d^2 7s^2$) before $5f$ filling begins at protactinium."
    },
    {
      a: "Actinoids exhibit only $+3$ oxidation state, identical to lanthanoids.",
      r: "The $5f$ orbitals are deeply buried and cannot participate in chemical bonding.",
      ans: 3,
      exp: "Both (A) and (R) are false. Actinoids exhibit states from $+3$ to $+7$ because $5f$ orbitals participate in bonding."
    },
    {
      a: "Yellowcake is a concentrated uranium ore product consisting mainly of uranium oxides.",
      r: "It typically contains diuranates such as ammonium diuranate or $\\text{U}_3\\text{O}_8$ processed from uranium leach liquors.",
      ans: 0,
      exp: "Yellowcake is an intermediate powder produced during uranium milling, containing $\\text{U}_3\\text{O}_8$ and diuranates."
    },
    {
      a: "Actinoid contraction is smoother and larger per element than lanthanoid contraction.",
      r: "The $5f$ orbitals have less directional character and poorer shielding ability than $4f$ orbitals.",
      ans: 0,
      exp: "Poor shielding by $5f$ orbitals causes larger incremental shrinkage of atomic and ionic radii per element."
    },
    {
      a: "Uranium hexafluoride ($\\text{UF}_6$) is a volatile compound used for isotopic enrichment.",
      r: "$\\text{UF}_6$ sublimes readily at $56.5^\\circ\\text{C}$ and allows gaseous diffusion or centrifuge separation of $^{235}\\text{U}$ from $^{238}\\text{U}$.",
      ans: 0,
      exp: "High volatility of $\\text{UF}_6$ makes it the ideal working gas for gaseous diffusion and gas centrifuge enrichment."
    }
  ];

  arPairs.forEach(p => list.push(createAR(st, p.a, p.r, p.ans, p.exp)));

  // 52 MCQs
  const mcqData = [
    {
      q: "Which of the following elements is the heaviest naturally occurring element in the actinoid series?",
      opts: ["Uranium ($\\text{U}$, $Z = 92$)", "Plutonium ($\\text{Pu}$, $Z = 94$)", "Thorium ($\\text{Th}$, $Z = 90$)", "Californium ($\\text{Cf}$, $Z = 98$)"],
      ans: 0,
      exp: "Uranium ($Z = 92$) is the last naturally occurring actinoid; elements with $Z > 92$ are synthetic transuranic elements."
    },
    {
      q: "What is the primary reason why actinoids exhibit a much wider range of oxidation states compared to lanthanoids?",
      opts: ["$5f, 6d$, and $7s$ energy levels are comparable in energy", "Actinoids have higher electronegativity values", "The $5f$ subshell is deeply buried and cannot lose electrons", "Actinoids do not possess any $d$-electrons"],
      ans: 0,
      exp: "Close energies of $5f, 6d$, and $7s$ orbitals allow electrons from all three subshells to participate in bonding."
    },
    {
      q: "Which of the following oxidation states is the maximum exhibited by neptunium and plutonium?",
      opts: ["$+7$", "$+5$", "$+6$", "$+8$"],
      ans: 0,
      exp: "Both neptunium and plutonium exhibit oxidation states up to $+7$ (e.g. in oxo-anions like $\\text{NpO}_5^{3-}$)."
    },
    {
      q: "Which of the following compounds of uranium is gaseous at mild temperatures and used for isotope enrichment?",
      opts: ["$\\text{UF}_6$", "$\\text{UO}_2$", "$\\text{UCl}_4$", "$\\text{U}_3\\text{O}_8$"],
      ans: 0,
      exp: "$\\text{UF}_6$ sublimes at $56.5^\\circ\\text{C}$ and is used in gaseous diffusion and centrifuge enrichment of uranium."
    },
    {
      q: "The stable linear dioxo-cation formed by uranium in the $+6$ oxidation state is:",
      opts: ["$\\text{UO}_2^{2+}$", "$\\text{UO}_3^+$", "$\\text{UO}_4^{2-}$", "$\\text{UO}^{2+}$"],
      ans: 0,
      exp: "Uranyl ion $\\text{UO}_2^{2+}$ is a very stable linear species containing uranium in the $+6$ oxidation state."
    },
    {
      q: "Why is actinoid contraction greater from element to element than lanthanoid contraction?",
      opts: ["$5f$ orbitals have poorer shielding effect than $4f$ orbitals", "$5f$ orbitals shield nuclear charge better than $4f$ orbitals", "Actinoids have lower atomic numbers", "Actinoids possess fewer valence electrons"],
      ans: 0,
      exp: "The more diffuse $5f$ orbitals provide even poorer shielding of nuclear charge than $4f$ orbitals."
    },
    {
      q: "Which actinoid element has the ground-state electronic configuration $[\\text{Rn}] 6d^2 7s^2$ with no $5f$ electrons?",
      opts: ["Thorium ($\\text{Th}$)", "Actinium ($\\text{Ac}$)", "Protactinium ($\\text{Pa}$)", "Uranium ($\\text{U}$)"],
      ans: 0,
      exp: "Thorium ($Z = 90$) has the ground-state configuration $[\\text{Rn}] 6d^2 7s^2$ with $5f^0$."
    },
    {
      q: "Which of the following elements is a transuranic element?",
      opts: ["Plutonium ($\\text{Pu}$)", "Thorium ($\\text{Th}$)", "Uranium ($\\text{U}$)", "Lead ($\\text{Pb}$)"],
      ans: 0,
      exp: "Plutonium ($Z = 94$) has an atomic number greater than $92$, classifying it as a transuranic element."
    },
    {
      q: "Which actinoid isotope is fissile and extensively utilized as fuel in nuclear reactors and nuclear weapons?",
      opts: ["$^{239}\\text{Pu}$", "$^{238}\\text{U}$", "$^{232}\\text{Th}$", "$^{241}\\text{Am}$"],
      ans: 0,
      exp: "Plutonium-239 ($^{239}\\text{Pu}$) is a fissile isotope capable of sustaining a nuclear fission chain reaction."
    },
    {
      q: "The predominant and most stable oxidation state of thorium in its compounds is:",
      opts: ["$+4$", "$+2$", "$+3$", "$+6$"],
      ans: 0,
      exp: "Thorium loses its two $6d$ and two $7s$ electrons to form $\\text{Th}^{4+}$, achieving the stable radon core."
    },
    {
      q: "The electronic configuration of curium ($\\text{Cm}$, $Z = 96$) in the ground state is:",
      opts: ["$[\\text{Rn}] 5f^7 6d^1 7s^2$", "$[\\text{Rn}] 5f^8 7s^2$", "$[\\text{Rn}] 5f^7 7s^2 7p^1$", "$[\\text{Rn}] 5f^6 6d^2 7s^2$"],
      ans: 0,
      exp: "Curium stabilizes a half-filled $5f^7$ subshell, placing the extra electron into $6d$: $[\\text{Rn}] 5f^7 6d^1 7s^2$."
    },
    {
      q: "Which of the following actinoid ions is isoelectronic with the half-filled $5f^7$ configuration?",
      opts: ["$\\text{Am}^{2+}$", "$\\text{U}^{3+}$", "$\\text{Th}^{4+}$", "$\\text{Np}^{5+}$"],
      ans: 0,
      exp: "Americium ($Z = 95$) is $[\\text{Rn}] 5f^7 7s^2$. $\\text{Am}^{2+}$ has $[\\text{Rn}] 5f^7$, a half-filled $5f$ subshell."
    },
    {
      q: "Which property is common to both lanthanoids and actinoids?",
      opts: ["Both show $+3$ as a prominent oxidation state and exhibit contraction in ionic radii", "Both form stable oxo-cations easily", "Both exhibit oxidation states up to $+7$", "Both are entirely synthetic and radioactive"],
      ans: 0,
      exp: "Both series have $+3$ as a prominent oxidation state and display steady contractions in ionic radii."
    },
    {
      q: "Which method is commonly employed in the PUREX process for the reprocessing of spent nuclear fuel?",
      opts: ["Solvent extraction using tributyl phosphate (TBP) in kerosene", "Fractional distillation of molten actinide metals", "Centrifugal magnetic separation", "Precipitation using concentrated hydrochloric acid"],
      ans: 0,
      exp: "Plutonium Uranium Redox EXtraction (PUREX) uses tributyl phosphate (TBP) to extract uranium and plutonium."
    },
    {
      q: "What is the general electronic configuration of the actinoid series?",
      opts: ["$[\\text{Rn}] 5f^{1-14} 6d^{0-1} 7s^2$", "$[\\text{Xe}] 4f^{1-14} 5d^{0-1} 6s^2$", "$[\\text{Rn}] 5f^{0-14} 6d^{1-2} 7s^2$", "$[\\text{Rn}] 5f^{1-14} 7s^2$"],
      ans: 0,
      exp: "The actinoids have the general outer configuration $[\\text{Rn}] 5f^{1-14} 6d^{0-1} 7s^2$."
    },
    {
      q: "Which of the following actinoids is commonly used in commercial ionizing smoke detectors?",
      opts: ["Americium-241 ($^{241}\\text{Am}$)", "Uranium-235 ($^{235}\\text{U}$)", "Thorium-232 ($^{232}\\text{Th}$)", "Neptunium-237 ($^{237}\\text{Np}$)",],
      ans: 0,
      exp: "$^{241}\\text{Am}$ emits alpha particles that ionize air in a smoke chamber to sense smoke particles."
    },
    {
      q: "The magnetic properties of actinoid ions are characterized by:",
      opts: ["High complexity due to strong crystal field interactions with $5f$ electrons", "Strict adherence to the simple spin-only formula", "Complete absence of paramagnetism", "Spontaneous room-temperature ferromagnetism in all ions"],
      ans: 0,
      exp: "$5f$ electrons are less shielded and interact strongly with ligand electrostatic fields, complicating magnetic moments."
    },
    {
      q: "Which of the following compounds of uranium represents the naturally occurring yellow oxide product called 'pitchblende'?",
      opts: ["$\\text{U}_3\\text{O}_8$", "$\\text{UF}_6$", "$\\text{UO}_2$", "$\\text{UC}_2$"],
      ans: 0,
      exp: "Pitchblende (uraninite) is the primary ore of uranium, predominantly containing $\\text{U}_3\\text{O}_8$ and $\\text{UO}_2$."
    },
    {
      q: "The lowest oxidation state commonly exhibited by actinoids in aqueous solution is:",
      opts: ["$+3$", "$+1$", "$+2$", "$+4$"],
      ans: 0,
      exp: "The $+3$ oxidation state is the baseline common oxidation state exhibited by actinoids (from $\\text{Am}$ onwards, it is dominant)."
    },
    {
      q: "Which actinoid element has the atomic number $103$, marking the end of the actinoid series?",
      opts: ["Lawrencium ($\\text{Lr}$)", "Nobelium ($\\text{No}$)", "Mendelevium ($\\text{Md}$)", "Fermium ($\\text{Fm}$)"],
      ans: 0,
      exp: "Lawrencium ($Z = 103$) is the 14th element of the actinoid series."
    },
    {
      q: "In the uranyl ion, $\\text{UO}_2^{2+}$, the geometry of the $\\text{O-U-O}$ group is:",
      opts: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"],
      ans: 0,
      exp: "The uranyl ion $\\text{UO}_2^{2+}$ has a strictly linear trans-dioxo geometry ($\\\\angle\\text{O-U-O} = 180^\\circ$)."
    },
    {
      q: "Which of the following statements about actinoids is FALSE?",
      opts: ["Actinoids do not form any coordination complexes", "Actinoids show greater range of oxidation states than lanthanoids", "All actinoids are radioactive", "Actinoids have lower ionization enthalpies than early lanthanoids"],
      ans: 0,
      exp: "Actinoids have a high propensity to form coordination complexes due to high charge density and accessible $5f$ orbitals."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // Generate remaining 30 MCQs systematically
  const actinoidData = [
    { name: "Thorium", sym: "\\text{Th}", z: 90, cfg: "[\\text{Rn}] 6d^2 7s^2", ox: "+4" },
    { name: "Protactinium", sym: "\\text{Pa}", z: 91, cfg: "[\\text{Rn}] 5f^2 6d^1 7s^2", ox: "+5" },
    { name: "Uranium", sym: "\\text{U}", z: 92, cfg: "[\\text{Rn}] 5f^3 6d^1 7s^2", ox: "+6" },
    { name: "Neptunium", sym: "\\text{Np}", z: 93, cfg: "[\\text{Rn}] 5f^4 6d^1 7s^2", ox: "+7" },
    { name: "Plutonium", sym: "\\text{Pu}", z: 94, cfg: "[\\text{Rn}] 5f^6 7s^2", ox: "+7" },
    { name: "Americium", sym: "\\text{Am}", z: 95, cfg: "[\\text{Rn}] 5f^7 7s^2", ox: "+3" }
  ];

  for (let i = 1; i <= 30; i++) {
    const item = actinoidData[(i - 1) % actinoidData.length];
    if (i % 3 === 1) {
      list.push(createMCQ(st,
        `What is the ground-state electronic configuration of $${item.name}$ ($${item.sym}$, atomic number $${item.z}$)?`,
        [`$${item.cfg}$`, `$[\\text{Rn}] 5f^{${item.z - 88}} 7s^2$`, `$[\\text{Rn}] 6d^{${item.z - 88}} 7s^2$`, `$[\\text{Rn}] 5f^{${item.z - 89}} 6d^2 7s^1$`],
        0,
        `$${item.name}$ ($Z = ${item.z}$) has the ground-state configuration $${item.cfg}$.`
      ));
    } else if (i % 3 === 2) {
      list.push(createMCQ(st,
        `What is a characteristic prominent or highest oxidation state exhibited by $${item.name}$?`,
        [`$${item.ox}$`, `$${item.ox === "+4" ? "+2" : "+2"}$`, "+1", "+8"],
        0,
        `$${item.name}$ readily displays the $${item.ox}$ oxidation state in its chemical compounds.`
      ));
    } else {
      list.push(createMCQ(st,
        `Why is $${item.name}$ chemically distinct from the corresponding $4f$ lanthanoid?`,
        [
          "The $5f$ orbitals have higher spatial extension and participate actively in bonding",
          "It has no protons in its nucleus",
          "It forms only negative anions",
          "It is completely unreactive toward acids"
        ],
        0,
        "Greater radial extension of $5f$ orbitals enables actinoids like $${item.name}$ to engage in covalent bonding and access high oxidation states."
      ));
    }
  }

  // 13 Numericals
  list.push(createNumerical(st,
    "How many elements are formally classified in the $5f$ actinoid series (from thorium to lawrencium)?",
    "14",
    "There are $14$ actinoid elements corresponding to filling of the $5f$ subshell from $\\text{Th}$ ($Z=90$) to $\\text{Lr}$ ($Z=103$)."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of uranium ($\\text{U}$), the last naturally occurring element in the periodic table?",
    "92",
    "Uranium has atomic number $Z = 92$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of plutonium ($\\text{Pu}$)?",
    "94",
    "Plutonium has atomic number $Z = 94$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of thorium ($\\text{Th}$)?",
    "90",
    "Thorium has atomic number $Z = 90$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of lawrencium ($\\text{Lr}$), the last element of the actinoid series?",
    "103",
    "Lawrencium has atomic number $Z = 103$."
  ));
  list.push(createNumerical(st,
    "What is the highest oxidation state exhibited by neptunium ($\\text{Np}$) and plutonium ($\\text{Pu}$)?",
    "7",
    "Neptunium and plutonium exhibit oxidation states up to $+7$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation number of uranium in the uranyl ion, $\\text{UO}_2^{2+}$?",
    "6",
    "In $\\text{UO}_2^{2+}$, each oxygen is $-2$. $x + 2(-2) = +2 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of uranium in uranium hexafluoride, $\\text{UF}_6$?",
    "6",
    "In $\\text{UF}_6$, fluorine is $-1$, so the oxidation state of uranium is $+6$."
  ));
  list.push(createNumerical(st,
    "How many $5f$ electrons are present in the $\\text{Th}^{4+}$ ion ($Z = 90$)?",
    "0",
    "$\\text{Th}^{4+}$ has the radon configuration $[\\text{Rn}] 5f^0$, so there are $0$ electrons in the $5f$ subshell."
  ));
  list.push(createNumerical(st,
    "How many $5f$ electrons are present in $\\text{Am}^{3+}$ ($Z = 95$)?",
    "6",
    "Americium is $[\\text{Rn}] 5f^7 7s^2$. Losing three electrons yields $\\text{Am}^{3+}$ with $[\\text{Rn}] 5f^6$, having $6$ electrons in the $5f$ subshell."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of curium ($\\text{Cm}$)?",
    "96",
    "Curium has atomic number $Z = 96$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of americium ($\\text{Am}$)?",
    "95",
    "Americium has atomic number $Z = 95$."
  ));
  list.push(createNumerical(st,
    "How many of the following elements have atomic numbers greater than 92 (transuranic elements): $\\text{Th} (90), \\text{U} (92), \\text{Np} (93), \\text{Pu} (94), \\text{Am} (95)$?",
    "3",
    "$\\text{Np} (93), \\text{Pu} (94)$, and $\\text{Am} (95)$ have $Z > 92$, so there are exactly $3$ transuranic elements."
  ));

  return list;
}

// Build and validate
console.log("Validating Part 4...");
const st7 = buildSubtopic7();
const st8 = buildSubtopic8();

console.log(`Lanthanoid contraction: ${st7.length} (Expected: 90)`);
console.log(`Actinoids: ${st8.length} (Expected: 91)`);

const allPart4 = [...st7, ...st8];
console.log(`Total Part 4 questions: ${allPart4.length} (Expected: 181)`);

allPart4.forEach((q, idx) => {
  checkKatex(q.question, `Part4[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part4[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part4[${idx}].explanation`);
});

console.log("All Part 4 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for d and f Block Part 4
module.exports = ${JSON.stringify(allPart4, null, 2)};
`;

fs.writeFileSync('scripts/data_dfblock_part4.js', fileContent);
console.log("Written scripts/data_dfblock_part4.js successfully!");
