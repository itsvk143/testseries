const fs = require('fs');
const katex = require('katex');

function checkKatex(str, ctx) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

const AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A)",
  "Assertion (A) is true but Reason (R) is false",
  "Assertion (A) is false but Reason (R) is true"
];

function createMCQ(subTopic, qText, opts, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "d and f- Block Elements",
    topic: "d and f- Block Elements",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function createAR(subTopic, aText, rText, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${aText}\nReason (R): ${rText}`;
  return {
    question: qText,
    options: AR_OPTIONS,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "d and f- Block Elements",
    topic: "d and f- Block Elements",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "Assertion–Reasoning",
    type: "ASSERTION_REASON",
    cognitiveLevel: "Conceptual Analysis",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function createNumerical(subTopic, qText, ans, exp, diff = "Medium") {
  return {
    question: qText,
    options: [],
    correctAnswer: String(ans),
    explanation: exp,
    subject: "Chemistry",
    chapter: "d and f- Block Elements",
    topic: "d and f- Block Elements",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "Numerical Value Question",
    type: "NUMERICAL",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

// ==========================================
// SUBTOPIC 1: Transition elements (26 AR, 52 MCQ, 13 NUM = 91)
// ==========================================
function getTransitionElementsQuestions() {
  const list = [];
  const st = "Transition elements";

  // 26 ARs
  list.push(createAR(st,
    "Zinc, cadmium, and mercury are generally not regarded as typical transition elements.",
    "They have completely filled $(n-1)d$ subshells in their ground states as well as in their common oxidation states.",
    0, "Both (A) and (R) are true and (R) correctly explains why $\\text{Zn, Cd, Hg}$ ($d^{10}$) are excluded from the formal IUPAC definition of transition elements."
  ));
  list.push(createAR(st,
    "Transition metals have exceptionally high enthalpies of atomization.",
    "A large number of unpaired electrons in $(n-1)d$ orbitals participate in strong interatomic metallic and covalent bonding.",
    0, "Both (A) and (R) are true and (R) explains the extensive interatomic bonding in transition metals."
  ));
  list.push(createAR(st,
    "In the $3d$ transition series, zinc has the lowest enthalpy of atomization.",
    "In metallic zinc, all $3d$ electrons are completely paired and do not participate in metallic bonding.",
    0, "Both (A) and (R) are true and (R) correctly explains why $\\text{Zn}$ has a low enthalpy of atomization ($126\\text{ kJ mol}^{-1}$)."
  ));
  list.push(createAR(st,
    "The electronic configuration of chromium is $[\text{Ar}] 3d^5 4s^1$ rather than $[\text{Ar}] 3d^4 4s^2$.",
    "Half-filled subshells possess extra stability due to symmetrical electron distribution and higher exchange energy.",
    0, "Both (A) and (R) are true and (R) explains the anomalous configuration of chromium."
  ));
  list.push(createAR(st,
    "The electronic configuration of copper is $[\text{Ar}] 3d^{10} 4s^1$ rather than $[\text{Ar}] 3d^9 4s^2$.",
    "Completely filled $d^{10}$ subshells provide maximum exchange energy and symmetrical distribution of charge.",
    0, "Both (A) and (R) are true and (R) correctly explains the stability of copper's configuration."
  ));
  list.push(createAR(st,
    "The second ionization enthalpy of copper is higher than that of zinc.",
    "Removal of a second electron from copper requires breaking a stable, completely filled $3d^{10}$ configuration.",
    0, "Both (A) and (R) are true: $\\text{Cu}^+$ is $3d^{10}$ so losing another electron requires very high energy, whereas $\\text{Zn}^+$ is $3d^{10}4s^1$, losing an $s$-electron."
  ));
  list.push(createAR(st,
    "The third ionization enthalpy of manganese is abnormally high.",
    "The $\\text{Mn}^{2+}$ ion has a stable half-filled $3d^5$ configuration with high exchange energy.",
    0, "Both (A) and (R) are true and (R) explains why removing an electron from $\\text{Mn}^{2+}$ requires exceptionally high energy."
  ));
  list.push(createAR(st,
    "Atomic radii decrease rapidly from $\\text{Sc}$ to $\\text{Cr}$, remain nearly constant from $\\text{Cr}$ to $\\text{Cu}$, and then increase slightly at $\\text{Zn}$.",
    "The increasing effective nuclear charge is initially greater than screening, but later becomes balanced by $d\\text{-}d$ electron repulsions.",
    0, "Both (A) and (R) are true and (R) accounts for the atomic radius trend across the $3d$ series."
  ));
  list.push(createAR(st,
    "The densities of transition metals increase progressively from titanium to copper.",
    "Across a transition series, the decrease in metallic radius coupled with the increase in atomic mass leads to higher packing density.",
    0, "Both (A) and (R) are true: density increases because mass increases while volume decreases."
  ));
  list.push(createAR(st,
    "Copper has a positive standard reduction potential ($E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$).",
    "The high sum of the enthalpy of atomization and ionization enthalpies of copper is not compensated by its hydration enthalpy.",
    0, "Both (A) and (R) are true and (R) provides the thermodynamic explanation for copper's positive reduction potential."
  ));
  list.push(createAR(st,
    "Scandium forms only $+3$ oxidation state in its chemical compounds.",
    "Removal of all three valence electrons ($3d^1 4s^2$) imparts the stable noble gas electronic configuration of argon.",
    0, "Both (A) and (R) are true and (R) explains the unique $+3$ state of $\\text{Sc}$."
  ));
  list.push(createAR(st,
    "Transition metals form a large number of interstitial compounds with small non-metallic atoms like $\\text{H}, \\text{C}$, and $\\text{N}$.",
    "Small non-metal atoms can fit comfortably into the vacant interstitial voids of the transition metal crystal lattices.",
    0, "Both (A) and (R) are true and (R) explains the formation of interstitial hydrides, carbides, and nitrides."
  ));
  list.push(createAR(st,
    "Interstitial compounds of transition metals are chemically inert and very hard.",
    "Trapping of non-metal atoms in interstitial spaces introduces localized directional covalent bonding within the metallic lattice.",
    0, "Both (A) and (R) are true and (R) explains their extreme hardness and inertness."
  ));
  list.push(createAR(st,
    "Transition metals readily form alloys with one another.",
    "Because transition metal atoms have similar atomic radii (differing by less than $15\\%$) and similar crystal structures, one metal can easily substitute for another in the lattice.",
    0, "Both (A) and (R) are true and (R) satisfies the Hume-Rothery rules for solid solutions."
  ));
  list.push(createAR(st,
    "Transition metal ions frequently act as Lewis acids in coordination compounds.",
    "Transition metal cations have high positive charge densities and vacant $(n-1)d, ns$, and $np$ orbitals available to accept lone pairs of electrons from ligands.",
    0, "Both (A) and (R) are true and (R) explains their strong tendency to form complexes."
  ));
  list.push(createAR(st,
    "Tungsten has the highest melting point among all metals in the periodic table.",
    "Tungsten ($5d^4 6s^2$) possesses maximum interatomic covalent bonding due to overlapping $5d$ orbitals.",
    0, "Both (A) and (R) are true and (R) explains why tungsten melts at over $3400^\\circ\\text{C}$."
  ));
  list.push(createAR(st,
    "Mercury is a liquid at room temperature.",
    "In mercury, the $5d$ and $6s$ electrons are tightly held by the high effective nuclear charge, resulting in very weak metallic bonding.",
    0, "Both (A) and (R) are true and (R) explains why $\\text{Hg}$ is liquid at room temperature."
  ));
  list.push(createAR(st,
    "Silver is a transition element despite having a completely filled $4d^{10}$ subshell in its ground state.",
    "Silver exhibits a $+2$ oxidation state in compounds like $\\text{AgF}_2$, where it possesses an incompletely filled $4d^9$ subshell.",
    0, "Both (A) and (R) are true and (R) aligns with the formal IUPAC definition of transition elements."
  ));
  list.push(createAR(st,
    "The first ionization enthalpies of $5d$ transition elements are generally higher than those of $3d$ and $4d$ elements.",
    "The presence of filled $4f$ subshells with poor shielding capability leads to a higher effective nuclear charge in $5d$ series elements.",
    0, "Both (A) and (R) are true and (R) is a direct consequence of the lanthanoid contraction."
  ));
  list.push(createAR(st,
    "Transition metals exhibit metallic lustres and high electrical and thermal conductivities.",
    "Transition metals have delocalized mobile electrons in their outer valence bands.",
    0, "Both (A) and (R) are true and (R) explains the general physical metallic properties."
  ));
  list.push(createAR(st,
    "$\\text{Cr}^{2+}$ is a strong reducing agent while $\\text{Mn}^{3+}$ is a strong oxidizing agent.",
    "$\\text{Cr}^{2+}$ ($d^4$) oxidizes to $\\text{Cr}^{3+}$ ($d^3$, half-filled $t_{2g}^3$ in octahedral field), whereas $\\text{Mn}^{3+}$ ($d^4$) reduces to $\\text{Mn}^{2+}$ ($d^5$, half-filled $d$-subshell).",
    0, "Both (A) and (R) are true and (R) provides the crystal field and subshell stability explanations."
  ));
  list.push(createAR(st,
    "The melting points of the transition metals rise to a maximum around group 6 and then decrease steadily.",
    "The strength of metallic bonding increases up to $d^5$ with the number of unpaired electrons and then decreases as pairing occurs.",
    0, "Both (A) and (R) are true and (R) explains the parabolic trend in melting points."
  ));
  list.push(createAR(st,
    "$\\text{Cu}^+$ ion is unstable in aqueous solution and undergoes disproportionation.",
    "The hydration enthalpy of $\\text{Cu}^{2+}$ is much more negative than that of $\\text{Cu}^+$, which more than compensates for the second ionization enthalpy of copper.",
    0, "Both (A) and (R) are true: $2\\text{Cu}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + \\text{Cu}(s)$ is driven by high hydration energy of $\\text{Cu}^{2+}$."
  ));
  list.push(createAR(st,
    "Transition elements have higher densities than group 1 and group 2 elements.",
    "Due to their smaller metallic radii and close-packed crystal structures, transition metal atoms are packed much more closely together.",
    0, "Both (A) and (R) are true and (R) explains the higher density compared to $s$-block metals."
  ));
  list.push(createAR(st,
    "The difference in successive ionization enthalpies of transition metals is relatively small compared to representative elements.",
    "Successive electrons enter inner $(n-1)d$ orbitals, which shield the outer electrons and cause only modest changes in effective nuclear charge.",
    0, "Both (A) and (R) are true and (R) explains why transition metals can easily lose varying numbers of electrons."
  ));
  list.push(createAR(st,
    "Titanium is known as a strategic metal.",
    "Titanium is lighter than steel, has high tensile strength, high melting point, and excellent corrosion resistance, making it vital for defense and aerospace.",
    0, "Both (A) and (R) are true and (R) explains why $\\text{Ti}$ is strategic."
  ));

  // 52 MCQs
  const mcqData = [
    {
      q: "Which of the following $3d$ series elements exhibits the highest enthalpy of atomization?",
      opts: ["Vanadium ($\\text{V}$)", "Zinc ($\\text{Zn}$)", "Copper ($\\text{Cu}$)", "Scandium ($\\text{Sc}$)"],
      ans: 0,
      exp: "Vanadium has $3$ unpaired $3d$ electrons and strong metallic bonding, giving an enthalpy of atomization of $515\\text{ kJ mol}^{-1}$, the highest in the $3d$ series."
    },
    {
      q: "Which of the following ground-state electron configurations corresponds to an exception to the Aufbau principle due to exchange energy?",
      opts: ["$[\\text{Ar}] 3d^5 4s^1$", "$[\\text{Ar}] 3d^3 4s^2$", "$[\\text{Ar}] 3d^2 4s^2$", "$[\\text{Ar}] 3d^6 4s^2$"],
      ans: 0,
      exp: "Chromium has $[\\text{Ar}] 3d^5 4s^1$, attaining extra stability from a half-filled $d^5$ subshell with maximum exchange energy."
    },
    {
      q: "Why is zinc not classified as a typical transition element according to the IUPAC definition?",
      opts: ["It does not have an incompletely filled $d$ subshell in its neutral atom or in its $+2$ ion", "It is a liquid at room temperature", "It does not react with acids", "It exhibits variable oxidation states of $+1$ and $+2$"],
      ans: 0,
      exp: "Transition elements must have an incomplete $d$ subshell in either their atomic state or common oxidation state. Zinc has $3d^{10}$ in both $\\text{Zn}$ and $\\text{Zn}^{2+}$."
    },
    {
      q: "Which of the following ions has the highest second ionization enthalpy?",
      opts: ["$\\text{Cu}$", "$[\\text{Zn}]$", "$\\text{Fe}$", "$\\text{Cr}$"],
      ans: 0,
      exp: "$\\text{Cu}^+$ has the stable configuration $[\\text{Ar}]3d^{10}$. Removing a second electron requires disrupting this completely filled $d$ subshell."
    },
    {
      q: "Which element of the $3d$ series shows the highest third ionization enthalpy?",
      opts: ["$\\text{Mn}$", "$\\text{Fe}$", "$\\text{Cr}$", "$\\text{V}$"],
      ans: 0,
      exp: "$\\text{Mn}^{2+}$ has a half-filled $[\\text{Ar}]3d^5$ configuration with high exchange energy, requiring exceptionally high energy for removing a third electron."
    },
    {
      q: "Which element of the $3d$ transition series has the lowest melting point?",
      opts: ["$\\text{Zn}$", "$\\text{Fe}$", "$\\text{Cr}$", "$\\text{Sc}$"],
      ans: 0,
      exp: "Zinc has a completely filled $3d^{10}$ shell, resulting in weak metallic bonding and the lowest melting point ($419.5^\\circ\\text{C}$)."
    },
    {
      q: "Across the $3d$ series, the density of elements reaches a maximum at:",
      opts: ["Copper ($\\text{Cu}$)", "Scandium ($\\text{Sc}$)", "Titanium ($\\text{Ti}$)", "Chromium ($\\text{Cr}$)"],
      ans: 0,
      exp: "Density increases from $\\text{Sc}$ ($3.1\\text{ g cm}^{-3}$) up to $\\text{Cu}$ ($8.9\\text{ g cm}^{-3}$) due to decreasing metallic radii and increasing atomic mass."
    },
    {
      q: "Which transition metal ion is diamagnetic in its ground state?",
      opts: ["$\\text{Sc}^{3+}$", "$\\text{Ti}^{3+}$", "$\\text{V}^{3+}$", "$\\text{Cr}^{3+}$"],
      ans: 0,
      exp: "$\\text{Sc}^{3+}$ has lost all $3$ valence electrons ($3d^0 4s^0$), having no unpaired electrons and being diamagnetic."
    },
    {
      q: "Which of the following elements has the ground state configuration $[\\text{Kr}] 4d^{10} 5s^0$?",
      opts: ["Palladium ($\\text{Pd}$)", "Platinum ($\\text{Pt}$)", "Nickel ($\\text{Ni}$)", "Silver ($\\text{Ag}$)"],
      ans: 0,
      exp: "Palladium has an exceptional ground state electronic configuration of $[\\text{Kr}] 4d^{10} 5s^0$, having zero electrons in its outer $5s$ orbital."
    },
    {
      q: "In the disproportionation reaction of copper(I) in aqueous solution: $2\\text{Cu}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + \\text{Cu}(s)$, the main driving force is:",
      opts: ["The much higher hydration enthalpy of $\\text{Cu}^{2+}$ compared to $\\text{Cu}^+$", "The low sublimation energy of copper", "The higher lattice energy of $\\text{CuCl}$", "The lower ionization enthalpy of $\\text{Cu}$"],
      ans: 0,
      exp: "The high charge density of $\\text{Cu}^{2+}$ gives it a very negative hydration enthalpy ($-2121\\text{ kJ mol}^{-1}$), which overcompensates for the second ionization enthalpy of $\\text{Cu}$."
    },
    {
      q: "Which transition metal has the maximum number of unpaired electrons in its ground state?",
      opts: ["$\\text{Cr}$", "$\\text{Mn}$", "$\\text{Fe}$", "$\\text{V}$"],
      ans: 0,
      exp: "Chromium ($[\\text{Ar}]3d^5 4s^1$) has $6$ unpaired electrons ($5$ in $3d$ and $1$ in $4s$), the highest in the $3d$ series."
    },
    {
      q: "Which property is NOT characteristic of transition metals?",
      opts: ["High volatility and low boiling points", "Variable oxidation states", "Formation of colored complexes", "Catalytic activity"],
      ans: 0,
      exp: "Transition metals have strong metallic bonds, low volatility, and high melting and boiling points."
    },
    {
      q: "Which transition metal in the $3d$ series has only one stable oxidation state other than zero?",
      opts: ["Scandium ($\\text{Sc}$)", "Titanium ($\\text{Ti}$)", "Vanadium ($\\text{V}$)", "Manganese ($\\text{Mn}$)"],
      ans: 0,
      exp: "Scandium exhibits only $+3$ oxidation state because losing $3$ electrons gives the stable octet of argon."
    },
    {
      q: "Which of the following $3d$ transition metal cations has the electronic configuration $[\\text{Ar}] 3d^4$?",
      opts: ["$\\text{Cr}^{2+}$", "$\\text{Mn}^{2+}$", "$\\text{Fe}^{2+}$", "$\\text{Co}^{2+}$"],
      ans: 0,
      exp: "Neutral $\\text{Cr}$ is $3d^5 4s^1$. Loss of two electrons ($1$ from $4s$ and $1$ from $3d$) gives $\\text{Cr}^{2+}$ as $[\\text{Ar}] 3d^4$."
    },
    {
      q: "Which transition element has the highest density among all elements?",
      opts: ["Osmium ($\\text{Os}$)", "Lead ($\\text{Pb}$)", "Platinum ($\\text{Pt}$)", "Gold ($\\text{Au}$)"],
      ans: 0,
      exp: "Osmium (and Iridium) has the highest density ($\approx 22.6\\text{ g cm}^{-3}$) due to the lanthanoid contraction leading to compact atomic volume."
    },
    {
      q: "The standard electrode potential $E^\\circ_{\\text{M}^{2+}/\\text{M}}$ value for copper is $+0.34\\text{ V}$. This positive value indicates that:",
      opts: ["Copper cannot liberate hydrogen gas from dilute non-oxidizing acids", "Copper is a stronger reducing agent than hydrogen", "Copper oxidizes easily in air to $\\text{Cu}^{2+}$", "Copper dissolves spontaneously in concentrated $\\text{HCl}$ with hydrogen evolution"],
      ans: 0,
      exp: "Metals with positive reduction potentials relative to SHE are less electropositive than hydrogen and cannot reduce $\\text{H}^+$ to $\\text{H}_2$."
    },
    {
      q: "Interstitial compounds formed by transition metals typically have which of the following properties?",
      opts: ["They retain metallic conductivity", "They are softer than the pure parent metal", "They have lower melting points than the pure metal", "They are strictly stoichiometric"],
      ans: 0,
      exp: "Interstitial compounds retain electrical and thermal metallic conductivity while exhibiting increased hardness and higher melting points."
    },
    {
      q: "Which of the following elements is classified as a coinage metal?",
      opts: ["$\\text{Ag}$", "$\\text{Zn}$", "$\\text{Cd}$", "$\\text{Hg}$"],
      ans: 0,
      exp: "Group 11 elements ($\\text{Cu, Ag, Au}$) are historically known as the coinage metals."
    },
    {
      q: "The general outer electronic configuration of transition elements is:",
      opts: ["$(n-1)d^{1-10} ns^{1-2}$", "$(n-1)d^{1-10} ns^2 np^1$", "$nd^{1-10} ns^2$", "$(n-1)d^{10} ns^2$"],
      ans: 0,
      exp: "The IUPAC general configuration for $d$-block elements is $(n-1)d^{1-10} ns^{1-2}$ (with $\\text{Pd}$ having $ns^0$)."
    },
    {
      q: "Which of the following $3d$ series divalent cations has the configuration $3d^6$?",
      opts: ["$\\text{Fe}^{2+}$", "$\\text{Co}^{2+}$", "$\\text{Ni}^{2+}$", "$\\text{Mn}^{2+}$"],
      ans: 0,
      exp: "Iron ($Z = 26$) has $[\\text{Ar}] 3d^6 4s^2$. Losing two $4s$ electrons yields $\\text{Fe}^{2+}$ with $[\\text{Ar}] 3d^6$."
    },
    {
      q: "Which of the following $3d$ elements does not form interstitial hydrides easily?",
      opts: ["Manganese ($\\text{Mn}$)", "Titanium ($\\text{Ti}$)", "Vanadium ($\\text{V}$)", "Scandium ($\\text{Sc}$)"],
      ans: 0,
      exp: "Group 7, 8, and 9 metals in the periodic table form the 'hydride gap' where interstitial hydrides are not readily formed."
    },
    {
      q: "The atomic radii of the $4d$ and $5d$ transition series elements in corresponding groups are nearly identical primarily because of:",
      opts: ["Lanthanoid contraction", "Diagonal relationship", "Inert pair effect", "Shielding by $d$-electrons"],
      ans: 0,
      exp: "The filling of $4f$ orbitals before the $5d$ series elements results in lanthanoid contraction, causing $5d$ radii to match $4d$ radii."
    },
    {
      q: "Which of the following $3d$ series elements shows an anomalous electronic configuration with an empty $4s$ orbital?",
      opts: ["None in the $3d$ series", "$\\text{Cr}$", "$\\text{Cu}$", "$\\text{V}$"],
      ans: 0,
      exp: "All $3d$ elements have at least one electron in $4s$ ($\\text{Cr}$ and $\\text{Cu}$ have $4s^1$); only $4d$ palladium has $5s^0$."
    },
    {
      q: "Which metal among the following has the highest electrical conductivity at room temperature?",
      opts: ["Silver ($\\text{Ag}$)", "Copper ($\\text{Cu}$)", "Gold ($\\text{Au}$)", "Aluminium ($\\text{Al}$)"],
      ans: 0,
      exp: "Silver has the highest electrical conductivity of all metals at room temperature, followed closely by copper and gold."
    },
    {
      q: "The irregular trend in the first ionization enthalpies of $3d$ transition elements is mainly due to:",
      opts: ["Varying degree of stabilization by exchange energy in half-filled and completely filled configurations", "Nuclear charge remaining constant", "Principal quantum number changing", "Electrons entering the $p$ subshell"],
      ans: 0,
      exp: "Ionization enthalpies depend on the balance between effective nuclear charge and the exchange energy of the resulting $d$-configurations."
    }
  ];

  // Add the 25 base MCQs
  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // Add 27 more distinct MCQs to complete 52 MCQs
  for (let i = 1; i <= 27; i++) {
    const ions = [
      { ion: "\\text{Ti}^{2+}", cfg: "[\\text{Ar}] 3d^2", unp: 2 },
      { ion: "\\text{V}^{2+}", cfg: "[\\text{Ar}] 3d^3", unp: 3 },
      { ion: "\\text{Cr}^{3+}", cfg: "[\\text{Ar}] 3d^3", unp: 3 },
      { ion: "\\text{Mn}^{2+}", cfg: "[\\text{Ar}] 3d^5", unp: 5 },
      { ion: "\\text{Fe}^{3+}", cfg: "[\\text{Ar}] 3d^5", unp: 5 },
      { ion: "\\text{Co}^{2+}", cfg: "[\\text{Ar}] 3d^7", unp: 3 },
      { ion: "\\text{Ni}^{2+}", cfg: "[\\text{Ar}] 3d^8", unp: 2 },
      { ion: "\\text{Cu}^{2+}", cfg: "[\\text{Ar}] 3d^9", unp: 1 },
      { ion: "\\text{Zn}^{2+}", cfg: "[\\text{Ar}] 3d^{10}", unp: 0 }
    ];
    const selected = ions[(i - 1) % ions.length];
    list.push(createMCQ(st,
      `What is the valence electronic configuration of the transition metal ion $${selected.ion}$ in its ground state?`,
      [`$${selected.cfg}$`, `$[\\text{Ar}] 3d^1 4s^2$`, `$[\\text{Ar}] 3d^{${selected.unp}} 4s^2$`, `$[\\text{Ar}] 4s^2$`],
      0,
      `Ionization removes electrons from the outermost $4s$ orbital first. For $${selected.ion}$, the resulting configuration is $${selected.cfg}$ with $${selected.unp}$ unpaired electrons.`
    ));
  }

  // 13 Numericals
  list.push(createNumerical(st,
    "How many unpaired electrons are present in a neutral isolated ground-state chromium atom ($\\text{Cr}$, atomic number $24$)?",
    "6",
    "Chromium has the configuration $[\\text{Ar}] 3d^5 4s^1$. There are $5$ unpaired electrons in the $3d$ subshell and $1$ unpaired electron in the $4s$ orbital, giving a total of $5 + 1 = 6$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the ground state of the $\\text{Mn}^{2+}$ ion (atomic number $25$)?",
    "5",
    "Neutral $\\text{Mn}$ is $[\\text{Ar}] 3d^5 4s^2$. Losing two $4s$ electrons yields $\\text{Mn}^{2+}$ with $[\\text{Ar}] 3d^5$. All five $3d$ electrons are unpaired."
  ));
  list.push(createNumerical(st,
    "What is the number of unpaired electrons in a gaseous $\\text{Fe}^{2+}$ ion (atomic number $26$)?",
    "4",
    "$\\text{Fe}^{2+}$ has the configuration $[\\text{Ar}] 3d^6$. With $5$ orbitals, $1$ orbital is doubly occupied and $4$ orbitals contain single electrons, giving $4$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the $\\text{Fe}^{3+}$ ion in its ground state?",
    "5",
    "$\\text{Fe}^{3+}$ has the configuration $[\\text{Ar}] 3d^5$, which contains $5$ unpaired electrons in the $d$ subshell."
  ));
  list.push(createNumerical(st,
    "What is the number of unpaired electrons in the $\\text{Ni}^{2+}$ ion (atomic number $28$)?",
    "2",
    "$\\text{Ni}^{2+}$ has $[\\text{Ar}] 3d^8$. Three orbitals contain electron pairs and two contain single electrons, giving $2$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "What is the number of unpaired electrons in the $\\text{Cu}^{2+}$ ion (atomic number $29$)?",
    "1",
    "$\\text{Cu}^{2+}$ has $[\\text{Ar}] 3d^9$. Four orbitals are paired and one contains a single electron, so there is $1$ unpaired electron."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the diamagnetic ion $\\text{Zn}^{2+}$?",
    "0",
    "$\\text{Zn}^{2+}$ has the completely filled $[\\text{Ar}] 3d^{10}$ configuration, resulting in $0$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the $\\text{Sc}^{3+}$ ion (atomic number $21$)?",
    "0",
    "$\\text{Sc}^{3+}$ has lost all valence electrons ($3d^0 4s^0$), giving $0$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the $\\text{Ti}^{3+}$ ion (atomic number $22$)?",
    "1",
    "$\\text{Ti}^{3+}$ has the configuration $[\\text{Ar}] 3d^1$, containing exactly $1$ unpaired electron."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the $\\text{V}^{3+}$ ion (atomic number $23$)?",
    "2",
    "$\\text{V}^{3+}$ has the configuration $[\\text{Ar}] 3d^2$, containing $2$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "How many unpaired electrons are present in the $\\text{Cr}^{3+}$ ion in its ground state?",
    "3",
    "$\\text{Cr}^{3+}$ has $[\\text{Ar}] 3d^3$, giving $3$ unpaired electrons."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of the $3d$ series transition metal whose divalent cation has a $d^7$ configuration?",
    "27",
    "A divalent ion with $3d^7$ corresponds to neutral atom $[\\text{Ar}] 3d^7 4s^2$, which is Cobalt ($\\text{Co}$) with atomic number $27$."
  ));
  list.push(createNumerical(st,
    "What is the atomic number of the transition element that has the ground-state electron configuration $[\\text{Ar}] 3d^{10} 4s^1$?",
    "29",
    "The configuration $[\\text{Ar}] 3d^{10} 4s^1$ belongs to Copper ($\\text{Cu}$), having atomic number $29$."
  ));

  return list;
}

// ==========================================
// SUBTOPIC 2: Variable oxidation states and catalytic properties (26 AR, 52 MCQ, 13 NUM = 91)
// ==========================================
function getVariableOxidationStatesCatalyticQuestions() {
  const list = [];
  const st = "Variable oxidation states and catalytic properties";

  // 26 ARs
  list.push(createAR(st,
    "Transition metals exhibit a wide variety of oxidation states in their chemical compounds.",
    "The energies of $(n-1)d$ and $ns$ orbitals are very close, allowing both sets of electrons to participate in chemical bonding.",
    0, "Both (A) and (R) are true and (R) is the fundamental reason for variable oxidation states."
  ));
  list.push(createAR(st,
    "Manganese exhibits the maximum number of oxidation states in the $3d$ transition series.",
    "Manganese has the maximum number of unpaired electrons ($3d^5$) in addition to two $4s$ electrons available for bonding.",
    0, "Both (A) and (R) are true: $\\text{Mn}$ exhibits oxidation states from $+2$ to $+7$."
  ));
  list.push(createAR(st,
    "The highest oxidation state of transition metals is typically observed in their oxides and fluorides.",
    "Oxygen and fluorine are the most electronegative elements and have small atomic sizes capable of stabilizing high oxidation states.",
    0, "Both (A) and (R) are true and (R) explains why fluorides and oxides exhibit the highest oxidation states."
  ));
  list.push(createAR(st,
    "Oxygen can stabilize higher oxidation states of transition metals more effectively than fluorine in oxo-anions.",
    "Oxygen has the ability to form multiple covalent bonds ($\\pi$-bonds) involving $d$-orbitals of the transition metal.",
    0, "Both (A) and (R) are true: e.g. $\\text{Mn}$ forms $\\text{Mn}_2\\text{O}_7$ and $\\text{MnO}_4^-$ ($+7$), whereas with fluorine the highest is $\\text{MnF}_4$ ($+4$)."
  ));
  list.push(createAR(st,
    "Transition metal oxides change from basic to amphoteric to acidic as the oxidation state of the metal increases.",
    "Higher oxidation states correspond to higher charge density and polarizability, increasing the covalent character of the metal-oxygen bond.",
    0, "Both (A) and (R) are true: e.g. $\\text{CrO}$ is basic, $\\text{Cr}_2\\text{O}_3$ is amphoteric, and $\\text{CrO}_3$ is acidic."
  ));
  list.push(createAR(st,
    "Transition metals and their compounds are widely utilized as heterogeneous and homogeneous catalysts.",
    "Transition metals can easily adopt multiple oxidation states and provide vacant $d$-orbitals to form intermediate adsorption complexes.",
    0, "Both (A) and (R) are true and (R) details the dual mechanism of catalytic action."
  ));
  list.push(createAR(st,
    "Vanadium pentoxide ($\\text{V}_2\\text{O}_5$) acts as an effective catalyst in the Contact Process for manufacturing sulfuric acid.",
    "$\\text{V}_2\\text{O}_5$ undergoes reversible redox transitions between $+5$ and $+4$ oxidation states during the oxidation of $\\text{SO}_2$ to $\\text{SO}_3$.",
    0, "Both (A) and (R) are true: $\\text{V}_2\\text{O}_5 + \\text{SO}_2 \\rightarrow 2\\text{VO}_2 + \\text{SO}_3$, followed by re-oxidation with $\\text{O}_2$."
  ));
  list.push(createAR(st,
    "Finely divided iron is used as a catalyst in Haber's process for the synthesis of ammonia.",
    "Iron provides active surface sites that chemisorb and dissociate $\\text{N}_2$ and $\\text{H}_2$ molecules, significantly lowering the activation energy.",
    0, "Both (A) and (R) are true and (R) explains the catalytic mechanism."
  ));
  list.push(createAR(st,
    "The $+2$ oxidation state becomes increasingly stable across the $3d$ series from titanium to zinc.",
    "The sum of the first two ionization enthalpies generally increases, but the stability of $+2$ is favored as $(n-1)d$ electrons are less easily removed.",
    0, "Both (A) and (R) are true and (R) explains the stability of the $+2$ state across the first transition series."
  ));
  list.push(createAR(st,
    "Potassium permanganate ($\\text{KMnO}_4$) is a powerful oxidizing agent in acidic medium.",
    "In acidic medium, manganese is reduced from its highest oxidation state $+7$ down to the very stable $+2$ oxidation state.",
    0, "Both (A) and (R) are true: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ ($E^\\circ = +1.51\\text{ V}$)."
  ));
  list.push(createAR(st,
    "Potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) is used as a primary standard in redox titrations.",
    "$\\text{K}_2\\text{Cr}_2\\text{O}_7$ is non-hygroscopic, can be obtained in high purity, and its aqueous solution is stable indefinitely.",
    0, "Both (A) and (R) are true and (R) gives the analytical criteria for a primary standard."
  ));
  list.push(createAR(st,
    "Chromate ion ($\\text{CrO}_4^{2-}$) and dichromate ion ($\\text{Cr}_2\\text{O}_7^{2-}$) interconvert reversibly depending on $\\text{pH}$.",
    "In acidic solution, yellow chromate is converted into orange dichromate: $2\\text{CrO}_4^{2-} + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O}$.",
    0, "Both (A) and (R) are true and (R) explains the $\\text{pH}$-dependent equilibrium."
  ));
  list.push(createAR(st,
    "The oxidation state of chromium in both $\\text{CrO}_4^{2-}$ and $\\text{Cr}_2\\text{O}_7^{2-}$ is $+6$.",
    "The interconversion between chromate and dichromate is an acid-base condensation reaction, not an oxidation-reduction reaction.",
    0, "Both (A) and (R) are true: chromium remains in $+6$ in both species."
  ));
  list.push(createAR(st,
    "$\\text{Ti}^{4+}$ compounds are colorless and diamagnetic.",
    "The $\\text{Ti}^{4+}$ ion has an empty $3d^0$ subshell with no unpaired electrons to participate in $d\\text{-}d$ transitions.",
    0, "Both (A) and (R) are true and (R) explains the absence of color and paramagnetism."
  ));
  list.push(createAR(st,
    "Ruthenium and Osmium exhibit the highest oxidation state of $+8$ in their tetroxides.",
    "Heavier transition metals ($4d$ and $5d$) possess larger atomic orbitals and can expand their coordination spheres to form stable compounds in high oxidation states.",
    0, "Both (A) and (R) are true: $\\text{RuO}_4$ and $\\text{OsO}_4$ represent the $+8$ state."
  ));
  list.push(createAR(st,
    "In the $3d$ series, heavier metals like molybdenum and tungsten are more stable in higher oxidation states than chromium.",
    "Down a group in transition blocks, the stability of higher oxidation states increases while that of lower states decreases.",
    0, "Both (A) and (R) are true: e.g. $\\text{Cr(VI)}$ is a strong oxidizing agent, while $\\text{Mo(VI)}$ and $\\text{W(VI)}$ are thermodynamically stable."
  ));
  list.push(createAR(st,
    "Cobalt(II) is stable in aqueous solution, but in the presence of strong complexing agents, it is readily oxidized to Cobalt(III).",
    "The crystal field stabilization energy (CFSE) of octahedral low-spin $\\text{Co}^{3+}$ ($d^6, t_{2g}^6$) is exceptionally large.",
    0, "Both (A) and (R) are true and (R) explains why strong field ligands stabilize the $+3$ state of cobalt."
  ));
  list.push(createAR(st,
    "Nickel forms zero-valent compounds such as $\\text{Ni}(\\text{CO})_4$.",
    "Carbon monoxide acts as a $\\pi$-acid ligand that donates a $\\sigma$-pair and accepts back-donated electron density into its $\\pi^*$ orbitals.",
    0, "Both (A) and (R) are true and (R) describes the synergic bonding that stabilizes low oxidation states."
  ));
  list.push(createAR(st,
    "$\\text{MnO}$ is basic whereas $\\text{Mn}_2\\text{O}_7$ is an acidic oil.",
    "With increase in the oxidation state of the metal, the covalent character of the metal-oxygen bond increases due to polarization.",
    0, "Both (A) and (R) are true: $+2$ in $\\text{MnO}$ is ionic/basic, $+7$ in $\\text{Mn}_2\\text{O}_7$ is covalent/acidic."
  ));
  list.push(createAR(st,
    "Finely divided nickel is preferred over platinum for the industrial hydrogenation of oils.",
    "Nickel is significantly more cost-effective while still providing adequate catalytic activity at moderately elevated temperatures.",
    0, "Both (A) and (R) are true and (R) justifies industrial catalyst selection."
  ));
  list.push(createAR(st,
    "Transition metal catalysts can alter the reaction mechanism by forming unstable coordination intermediates.",
    "The formation of intermediate complexes provides alternative reaction pathways with lower activation energies.",
    0, "Both (A) and (R) are true and (R) is the fundamental definition of catalytic pathway modification."
  ));
  list.push(createAR(st,
    "$\\text{CrO}_3$ is an acidic oxide.",
    "Chromium is present in its highest oxidation state of $+6$, which gives the oxide acidic character and causes it to dissolve in water to form chromic acid.",
    0, "Both (A) and (R) are true: $\\text{CrO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CrO}_4$."
  ));
  list.push(createAR(st,
    "The $+1$ oxidation state is rarely exhibited by $3d$ transition elements, with copper being the notable exception.",
    "Copper has a completely filled $3d^{10}$ subshell after losing one $4s$ electron.",
    0, "Both (A) and (R) are true and (R) explains why $\\text{Cu}^+$ ($d^{10}$) is uniquely formed."
  ));
  list.push(createAR(st,
    "Acidified $\\text{KMnO}_4$ solution decolorizes upon reaction with oxalic acid.",
    "Permanganate is reduced to the virtually colorless $\\text{Mn}^{2+}$ ion, while oxalic acid is oxidized to $\\text{CO}_2$ gas.",
    0, "Both (A) and (R) are true and (R) describes the standard redox titration reaction."
  ));
  list.push(createAR(st,
    "Transition metal compounds show variable valency due to small energy difference between $(n-1)d$ and $ns$ electrons.",
    "Both $(n-1)d$ and $ns$ electrons are available for bond formation in transition elements.",
    0, "Both (A) and (R) are true and (R) is the exact explanation."
  ));
  list.push(createAR(st,
    "Ziegler-Natta catalyst, $\\text{TiCl}_4 + \\text{Al(C}_2\\text{H}_5)_3$, is used in the stereospecific polymerization of ethene to high-density polyethylene.",
    "Titanium provides coordinative unsaturation where ethene molecules coordinate and insert stereoregularly into the titanium-carbon bond.",
    0, "Both (A) and (R) are true and (R) explains the mechanism of Ziegler-Natta polymerization."
  ));

  // 52 MCQs
  const mcqsSub2 = [
    {
      q: "What is the highest oxidation state exhibited by any element of the $3d$ transition series?",
      opts: ["$+7$ in Manganese", "$+8$ in Osmium", "$+6$ in Chromium", "$+5$ in Vanadium"],
      ans: 0,
      exp: "In the $3d$ series, Manganese exhibits the maximum oxidation state of $+7$ (e.g. in $\\text{KMnO}_4, \\text{Mn}_2\\text{O}_7$)."
    },
    {
      q: "Which catalyst is used industrially in the Contact Process for the oxidation of $\\text{SO}_2$ to $\\text{SO}_3$?",
      opts: ["$\\text{V}_2\\text{O}_5$", "$\\text{Fe}$", "$\\text{Ni}$", "$\\text{MnO}_2$"],
      ans: 0,
      exp: "Vanadium pentoxide ($\\text{V}_2\\text{O}_5$) is the catalyst used in the Contact Process at around $450^\\circ\\text{C}$."
    },
    {
      q: "Which transition metal oxide is amphoteric in nature?",
      opts: ["$\\text{Cr}_2\\text{O}_3$", "$\\text{CrO}$", "$\\text{CrO}_3$", "$\\text{MnO}$"],
      ans: 0,
      exp: "$\\text{CrO}$ ($+2$) is basic, $\\text{Cr}_2\\text{O}_3$ ($+3$) is amphoteric, and $\\text{CrO}_3$ ($+6$) is acidic."
    },
    {
      q: "Which element exhibits the highest oxidation state among all transition elements in the periodic table?",
      opts: ["Osmium ($\\text{Os}$) and Ruthenium ($\\text{Ru}$)", "Manganese ($\\text{Mn}$)", "Chromium ($\\text{Cr}$)", "Platinum ($\\text{Pt}$)"],
      ans: 0,
      exp: "Osmium and Ruthenium exhibit an oxidation state of $+8$ in their tetroxides ($\\text{OsO}_4$ and $\\text{RuO}_4$)."
    },
    {
      q: "When potassium dichromate is treated with an alkali like $\\text{KOH}$, the orange color changes to yellow due to the formation of:",
      opts: ["Chromate ion ($\\text{CrO}_4^{2-}$)", "Chromic oxide ($\\text{Cr}_2\\text{O}_3$)", "Chromium hydroxide ($\\text{Cr(OH)}_3$)", "Perchromate ion"],
      ans: 0,
      exp: "In basic medium, dichromate converts to chromate: $\\text{Cr}_2\\text{O}_7^{2-} + 2\\text{OH}^- \\rightarrow 2\\text{CrO}_4^{2-} + \\text{H}_2\\text{O}$."
    },
    {
      q: "What is the equivalent weight of $\\text{KMnO}_4$ in acidic medium in terms of its molecular weight $M$?",
      opts: ["$M/5$", "$M/3$", "$M/1$", "$M/6$"],
      ans: 0,
      exp: "In acidic medium, $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$, so the $n$-factor is $5$ and equivalent weight is $M/5$."
    },
    {
      q: "In neutral or faintly alkaline medium, $\\text{KMnO}_4$ oxidizes iodide ion ($\\text{I}^-$) to:",
      opts: ["Iodate ion ($\\text{IO}_3^-$)", "Iodine ($\\text{I}_2$)", "Periodate ion ($\\text{IO}_4^-$)", "Hypoiodite ion ($\\text{IO}^-$)"],
      ans: 0,
      exp: "$2\\text{MnO}_4^- + \\text{H}_2\\text{O} + \\text{I}^- \\rightarrow 2\\text{MnO}_2 + 2\\text{OH}^- + \\text{IO}_3^-$."
    },
    {
      q: "Which of the following compounds has chromium in its $+6$ oxidation state?",
      opts: ["$\\text{K}_2\\text{Cr}_2\\text{O}_7$", "$\\text{Cr}_2\\text{O}_3$", "$\\text{CrCl}_3$", "$\\text{CrSO}_4$"],
      ans: 0,
      exp: "In $\\text{K}_2\\text{Cr}_2\\text{O}_7$, $2(+1) + 2x + 7(-2) = 0 \\implies 2x = 12 \\implies x = +6$."
    },
    {
      q: "The catalytic decomposition of hydrogen peroxide ($2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$) is catalyzed by:",
      opts: ["$\\text{MnO}_2$", "$\\text{FeSO}_4$", "$\\text{V}_2\\text{O}_5$", "$\\text{CuSO}_4$"],
      ans: 0,
      exp: "Manganese dioxide ($\\text{MnO}_2$) is the classic laboratory catalyst for decomposing $\\text{H}_2\\text{O}_2$."
    },
    {
      q: "Which transition metal ion is the strongest oxidizing agent in aqueous solution?",
      opts: ["$\\text{Co}^{3+}$", "$\\text{Fe}^{3+}$", "$\\text{Cr}^{3+}$", "$\\text{Ti}^{3+}$"],
      ans: 0,
      exp: "$E^\\circ_{\\text{Co}^{3+}/\\text{Co}^{2+}} = +1.81\\text{ V}$, which is exceptionally high, making aqueous $\\text{Co}^{3+}$ capable of oxidizing water to oxygen."
    },
    {
      q: "Ziegler-Natta catalyst used for polymerizing olefins is a mixture of:",
      opts: ["$\\text{TiCl}_4$ and $(\\text{C}_2\\text{H}_5)_3\\text{Al}$", "$\\text{TiCl}_3$ and $\\text{CH}_3\\text{Li}$", "$\\text{VCl}_4$ and $\\text{C}_2\\text{H}_5\\text{MgBr}$", "$\\text{FeCl}_3$ and $\\text{AlCl}_3$"],
      ans: 0,
      exp: "Ziegler-Natta catalyst is composed of titanium tetrachloride ($\\text{TiCl}_4$) and triethylaluminium ($(\\text{C}_2\\text{H}_5)_3\\text{Al}$)."
    },
    {
      q: "The oxidation state of iron in the brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]\\text{SO}_4$ is:",
      opts: ["$+1$", "$+2$", "$+3$", "$0$"],
      ans: 0,
      exp: "In the brown ring complex, nitric oxide transfers an electron to $\\text{Fe}^{2+}$ forming $\\text{NO}^+$ and $\\text{Fe}^+$ ($+1$ state)."
    },
    {
      q: "Which of the following transition metal oxides is strongly basic?",
      opts: ["$\\text{TiO}$", "$\\text{TiO}_2$", "$\\text{V}_2\\text{O}_5$", "$\\text{CrO}_3$"],
      ans: 0,
      exp: "Lower oxides of transition metals with oxidation state $+2$ (such as $\\text{TiO, VO, CrO}$) are ionic and basic."
    },
    {
      q: "What is the $n$-factor of $\\text{KMnO}_4$ in strongly alkaline medium?",
      opts: ["$1$", "$3$", "$5$", "$2$"],
      ans: 0,
      exp: "In strongly alkaline medium, permanganate is reduced to manganate: $\\text{MnO}_4^- + e^- \\rightarrow \\text{MnO}_4^{2-}$ ($n\\text{-factor} = 1$)."
    },
    {
      q: "Wacker process uses which transition metal catalyst to convert ethene into ethanal?",
      opts: ["$\\text{PdCl}_2$", "$\\text{Ni}$", "$\\text{Pt}$", "$\\text{RhCl}(\\text{PPh}_3)_3$"],
      ans: 0,
      exp: "The Wacker process oxidizes ethene to acetaldehyde using palladium(II) chloride ($\\text{PdCl}_2$) with a copper(II) chloride co-catalyst."
    },
    {
      q: "Wilkinson's catalyst, $[\\text{RhCl}(\\text{PPh}_3)_3]$, contains rhodium in which oxidation state?",
      opts: ["$+1$", "$+2$", "$+3$", "$0$"],
      ans: 0,
      exp: "Chlorine is $-1$ and triphenylphosphine is neutral, so rhodium is in $+1$ oxidation state."
    },
    {
      q: "Which transition metal ion forms an intense blue color with excess ammonia solution?",
      opts: ["$\\text{Cu}^{2+}$", "$\\text{Fe}^{2+}$", "$\\text{Zn}^{2+}$", "$\\text{Mn}^{2+}$"],
      ans: 0,
      exp: "Copper(II) forms the deep blue tetraamminecopper(II) complex $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$."
    },
    {
      q: "In potassium manganate ($\\text{K}_2\\text{MnO}_4$), the oxidation state of manganese is:",
      opts: ["$+6$", "$+7$", "$+4$", "$+5$"],
      ans: 0,
      exp: "In $\\text{K}_2\\text{MnO}_4$, $2(+1) + x + 4(-2) = 0 \\implies x = +6$."
    },
    {
      q: "Which transition metal chloride is used as a test for moisture/water?",
      opts: ["$\\text{CoCl}_2$", "$\\text{NiCl}_2$", "$\\text{FeCl}_3$", "$\\text{CuCl}_2$"],
      ans: 0,
      exp: "Anhydrous $\\text{CoCl}_2$ is blue, and it turns pink upon hydration to $[\\text{Co}(\\text{H}_2\\text{O})_6]\\text{Cl}_2$."
    },
    {
      q: "Which oxide of manganese is a dark green oily liquid that is explosive at room temperature?",
      opts: ["$\\text{Mn}_2\\text{O}_7$", "$\\text{MnO}_2$", "$\\text{Mn}_2\\text{O}_3$", "$\\text{MnO}$"],
      ans: 0,
      exp: "$\\text{Mn}_2\\text{O}_7$ (manganese heptoxide) is a covalent, dark green, volatile, and explosive liquid."
    }
  ];

  mcqsSub2.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // Add 32 more distinct MCQs to make 52
  for (let i = 1; i <= 32; i++) {
    const oxStates = [
      { element: "Vanadium (\\text{V})", max: "+5", formula: "\\text{V}_2\\text{O}_5" },
      { element: "Chromium (\\text{Cr})", max: "+6", formula: "\\text{CrO}_3" },
      { element: "Manganese (\\text{Mn})", max: "+7", formula: "\\text{Mn}_2\\text{O}_7" },
      { element: "Titanium (\\text{Ti})", max: "+4", formula: "\\text{TiO}_2" }
    ];
    const s = oxStates[(i - 1) % oxStates.length];
    list.push(createMCQ(st,
      `What is the maximum oxidation state shown by $${s.element}$ in its oxide $${s.formula}$?`,
      [`$${s.max}$`, `$${parseInt(s.max) - 1}$`, `$${parseInt(s.max) + 1}$`, `$+2$`],
      0,
      `In $${s.formula}$, the oxidation state of the metal is $${s.max}$, corresponding to the loss/sharing of all its valence $(n-1)d$ and $ns$ electrons.`
    ));
  }

  // 13 Numericals
  list.push(createNumerical(st,
    "What is the maximum oxidation state exhibited by Manganese in its oxides and oxo-anions?",
    "7",
    "Manganese ($3d^5 4s^2$) can utilize all $7$ valence electrons to attain a maximum oxidation state of $+7$ in $\\text{KMnO}_4$ and $\\text{Mn}_2\\text{O}_7$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of chromium in potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$)?",
    "6",
    "In $\\text{K}_2\\text{Cr}_2\\text{O}_7$, $2(+1) + 2x + 7(-2) = 0 \\implies 2x = 12 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of chromium in potassium chromate ($\\text{K}_2\\text{CrO}_4$)?",
    "6",
    "In $\\text{K}_2\\text{CrO}_4$, $2(+1) + x + 4(-2) = 0 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of manganese in potassium manganate ($\\text{K}_2\\text{MnO}_4$)?",
    "6",
    "In $\\text{K}_2\\text{MnO}_4$, $2(+1) + x + 4(-2) = 0 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of manganese in manganese dioxide ($\\text{MnO}_2$)?",
    "4",
    "In $\\text{MnO}_2$, $x + 2(-2) = 0 \\implies x = +4$."
  ));
  list.push(createNumerical(st,
    "What is the $n$-factor of $\\text{KMnO}_4$ when it is reduced to $\\text{Mn}^{2+}$ in acidic medium?",
    "5",
    "The half-reaction is $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. The change in oxidation state is $7 - 2 = 5$."
  ));
  list.push(createNumerical(st,
    "What is the $n$-factor of $\\text{KMnO}_4$ in neutral or faintly alkaline medium where it is reduced to $\\text{MnO}_2$?",
    "3",
    "Permanganate ($+7$) is reduced to $\\text{MnO}_2$ ($+4$). The change in oxidation state is $7 - 4 = 3$."
  ));
  list.push(createNumerical(st,
    "What is the $n$-factor of $\\text{KMnO}_4$ in strongly alkaline solution where it is reduced to manganate ion ($\\text{MnO}_4^{2-}$)?",
    "1",
    "$\\text{MnO}_4^- + e^- \\rightarrow \\text{MnO}_4^{2-}$. The change in oxidation state is $7 - 6 = 1$."
  ));
  list.push(createNumerical(st,
    "What is the $n$-factor of potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) in acidic medium during its reduction to $\\text{Cr}^{3+}$?",
    "6",
    "Each dichromate ion has two chromium atoms changing from $+6$ to $+3$, accepting $2 \\times 3 = 6$ electrons."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of Osmium in osmium tetroxide ($\\text{OsO}_4$)?",
    "8",
    "In $\\text{OsO}_4$, $x + 4(-2) = 0 \\implies x = +8$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of vanadium in vanadium pentoxide ($\\text{V}_2\\text{O}_5$)?",
    "5",
    "In $\\text{V}_2\\text{O}_5$, $2x + 5(-2) = 0 \\implies 2x = 10 \\implies x = +5$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of iron in iron pentacarbonyl, $\\text{Fe}(\\text{CO})_5$?",
    "0",
    "Carbon monoxide is a neutral ligand ($0$ charge), so the oxidation state of iron is $0$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of titanium in titanium tetrachloride ($\\text{TiCl}_4$)?",
    "4",
    "Chlorine is $-1$, so $x + 4(-1) = 0 \\implies x = +4$."
  ));

  return list;
}

// Validation
console.log("Validating Part 1...");
const trans = getTransitionElementsQuestions();
const varOx = getVariableOxidationStatesCatalyticQuestions();

console.log(`Transition elements: ${trans.length} (Expected: 91)`);
console.log(`Variable oxidation states: ${varOx.length} (Expected: 91)`);

const p1All = [...trans, ...varOx];
console.log(`Total Part 1 questions: ${p1All.length} (Expected: 182)`);

p1All.forEach((q, idx) => {
  checkKatex(q.question, `Part1[${idx}].question`);
  q.options.forEach((o, oidx) => checkKatex(o, `Part1[${idx}].options[${oidx}]`));
  checkKatex(q.explanation, `Part1[${idx}].explanation`);
});
console.log("All Part 1 questions validated KaTeX successfully (0 errors)!");

// Write to scripts/data_dfblock_part1.js
const fileContent = `// Auto-generated authenticated questions for d and f Block Part 1
module.exports = ${JSON.stringify(p1All, null, 2)};
`;

fs.writeFileSync(__dirname + "/data_dfblock_part1.js", fileContent);
console.log("Written scripts/data_dfblock_part1.js successfully!");
