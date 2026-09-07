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
    chapter: "P-Block Elements",
    topic: "P-Block Elements",
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
    chapter: "P-Block Elements",
    topic: "P-Block Elements",
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
    chapter: "P-Block Elements",
    topic: "P-Block Elements",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    cognitiveLevel: "APPLICATION"
  };
}

// -------------------------------------------------------------
// Subtopic 2: Trends in physical and chemical properties
// Needed: 117 Qs (26 AR, 78 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart2() {
  const st = "Trends in physical and chemical properties";
  const list = [];

  const arData = [
    {
      a: "The Lewis acid strength of boron trihalides increases in the order $\\text{BF}_3 < \\text{BCl}_3 < \\text{BBr}_3 < \\text{BI}_3$.",
      r: "Back bonding via $p\\pi-p\\pi$ overlap is most effective in $\\text{BF}_3$ due to similar sizes of $2p$ orbitals of boron and fluorine, reducing its electron deficiency most effectively.",
      idx: 0,
      exp: "In $\\text{BF}_3$, strong $2p-2p$ $p\\pi-p\\pi$ back donation from $\\text{F}$ into the empty $2p$ orbital of $\\text{B}$ decreases its electron deficiency. In $\\text{BBr}_3$ and $\\text{BI}_3$, overlap of $2p$ with $4p/5p$ orbitals is very poor, making them stronger Lewis acids. Both statements are true and Reason explains Assertion."
    },
    {
      a: "Nitrogen does not form $\\text{NCl}_5$ or $\\text{NF}_5$.",
      r: "Nitrogen lacks vacant $d$-orbitals in its valence shell to expand its octet beyond four.",
      idx: 0,
      exp: "Being in the second period, nitrogen has only $2s$ and $2p$ orbitals in its valence shell. Due to absence of $d$-orbitals, its maximum covalency is restricted to $4$. Both statements are true and Reason correctly explains Assertion."
    },
    {
      a: "The electron gain enthalpy of chlorine is more negative than that of fluorine.",
      r: "Because of the very small size of the fluorine atom, strong interelectronic repulsions in the compact $2p$ subshell resist the addition of an extra electron.",
      idx: 0,
      exp: "Fluorine has a smaller size and dense $2p$ subshell, resulting in high interelectronic repulsions when an electron is added, making its electron gain enthalpy ($-333\\text{ kJ/mol}$) less negative than that of chlorine ($-349\\text{ kJ/mol}$)."
    },
    {
      a: "The bond dissociation enthalpy of $\\text{F}_2$ is lower than that of $\\text{Cl}_2$ and $\\text{Br}_2$.",
      r: "There is large electron-electron repulsion among the non-bonding lone pairs on the two small fluorine atoms situated close to each other in $\\text{F}_2$.",
      idx: 0,
      exp: "The small bond length in $\\text{F}_2$ leads to strong repulsive interactions between lone pairs on adjacent fluorine atoms, weakening the $\\text{F}-\\text{F}$ bond ($158.8\\text{ kJ/mol}$) relative to $\\text{Cl}-\\text{Cl}$ ($242.6\\text{ kJ/mol}$)."
    },
    {
      a: "Fluorine is the strongest oxidizing halogen despite having a less negative electron gain enthalpy than chlorine.",
      r: "Fluorine has a low bond dissociation enthalpy of $\\text{F}_2$ and an exceptionally high hydration enthalpy of $\\text{F}^-$.",
      idx: 0,
      exp: "Standard reduction potential depends on enthalpy of atomization (low for $\\text{F}_2$), electron gain enthalpy, and hydration enthalpy (very large and negative for $\\text{F}^-$). These compensate for the electron gain enthalpy. Both are true and Reason explains Assertion."
    },
    {
      a: "The boiling point of $\\text{H}_2\\text{O}$ is abnormally higher than that of $\\text{H}_2\\text{S}$.",
      r: "Extensive intermolecular hydrogen bonding exists between $\\text{H}_2\\text{O}$ molecules due to the high electronegativity and small size of oxygen.",
      idx: 0,
      exp: "Oxygen has high electronegativity ($3.5$) and small size, forming strong intermolecular hydrogen bonds, whereas sulfur has lower electronegativity and cannot form hydrogen bonds in $\\text{H}_2\\text{S}$."
    },
    {
      a: "The boiling point of hydrides of Group 15 elements follows the order $\\text{PH}_3 < \\text{AsH}_3 < \\text{NH}_3 < \\text{SbH}_3 < \\text{BiH}_3$.",
      r: "$\\text{NH}_3$ exhibits intermolecular hydrogen bonding, which elevates its boiling point above that of $\\text{PH}_3$ and $\\text{AsH}_3$.",
      idx: 0,
      exp: "Due to hydrogen bonding, the boiling point of $\\text{NH}_3$ ($238.5\\text{ K}$) is significantly higher than $\\text{PH}_3$ ($185.5\\text{ K}$) and $\\text{AsH}_3$ ($210.6\\text{ K}$), but lower than $\\text{SbH}_3$ ($254.6\\text{ K}$) and $\\text{BiH}_3$ ($290\\text{ K}$) where van der Waals forces dominate due to large molar mass."
    },
    {
      a: "The basic character of Group 15 hydrides decreases in the order $\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3$.",
      r: "As the size of the central atom increases down the group, the lone pair of electrons is dispersed over a larger volume, decreasing the electron density.",
      idx: 0,
      exp: "With increasing atomic size, the electron density of the lone pair decreases, making it less available for donation to a proton. Thus basicity decreases from $\\text{NH}_3$ to $\\text{BiH}_3$."
    },
    {
      a: "The reducing character of Group 15 hydrides increases in the order $\\text{NH}_3 < \\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$.",
      r: "The $\\text{E}-\\text{H}$ bond dissociation enthalpy decreases down the group from $\\text{N}-\\text{H}$ to $\\text{Bi}-\\text{H}$ due to increasing bond length.",
      idx: 0,
      exp: "As the size of the central atom increases down the group, the $\\text{E}-\\text{H}$ bond becomes weaker and dissociates more readily to release hydrogen. Therefore, $\\text{BiH}_3$ is the strongest reducing agent."
    },
    {
      a: "$\\text{H}_3\\text{PO}_2$ is a stronger reducing agent than $\\text{H}_3\\text{PO}_4$.",
      r: "$\\text{H}_3\\text{PO}_2$ contains two directly bonded $\\text{P}-\\text{H}$ bonds whereas $\\text{H}_3\\text{PO}_4$ has no $\\text{P}-\\text{H}$ bonds.",
      idx: 0,
      exp: "The reducing behavior of phosphorus oxoacids is attributed to the presence of directly linked $\\text{P}-\\text{H}$ bonds. $\\text{H}_3\\text{PO}_2$ has two $\\text{P}-\\text{H}$ bonds, whereas $\\text{H}_3\\text{PO}_4$ has only $\\text{P}-\\text{OH}$ and $\\text{P}=\\text{O}$ bonds."
    },
    {
      a: "$\\text{CCl}_4$ does not undergo hydrolysis with water under ordinary conditions, whereas $\\text{SiCl}_4$ hydrolyzes readily.",
      r: "Carbon lacks energetically accessible $d$-orbitals to accept a lone pair from water molecules during nucleophilic attack, whereas silicon has vacant $3d$ orbitals.",
      idx: 0,
      exp: "Silicon can expand its coordination number by utilizing its vacant $3d$ orbitals to coordinate with water molecules, leading to hydrolysis. Carbon cannot expand its octet. Both statements are true and Reason correctly explains Assertion."
    },
    {
      a: "Diamond is an electrical insulator, whereas graphite is a good electrical conductor.",
      r: "In graphite, each carbon atom is $sp^2$ hybridized leaving one unhybridized $p$-electron delocalized across hexagonal sheets, whereas in diamond all valence electrons are localized in $sp^3$ covalent bonds.",
      idx: 0,
      exp: "Graphite has delocalized $\\pi$-electrons mobile across the hexagonal 2D planes, enabling electrical conductivity, while diamond has no free mobile electrons."
    },
    {
      a: "Dinitrogen ($\\text{N}_2$) is chemically unreactive at room temperature.",
      r: "Dinitrogen contains a triple bond with an exceptionally high bond dissociation enthalpy ($941.4\\text{ kJ/mol}$).",
      idx: 0,
      exp: "The $\\text{N}\\equiv\\text{N}$ bond is extremely strong due to high bond dissociation enthalpy, making $\\text{N}_2$ inert at ambient temperatures."
    },
    {
      a: "The thermal stability of hydrides of Group 16 elements decreases in the order $\\text{H}_2\\text{O} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}$.",
      r: "The $\\text{H}-\\text{E}$ bond length increases with increasing size of the chalcogen atom down the group, decreasing the bond dissociation enthalpy.",
      idx: 0,
      exp: "As the size of the element $\\text{E}$ increases from $\\text{O}$ to $\\text{Te}$, orbital overlap becomes less effective, bond dissociation enthalpy drops, and thermal stability decreases."
    },
    {
      a: "The acidic strength of hydrogen halides increases in the order $\\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}$.",
      r: "The $\\text{H}-\\text{X}$ bond dissociation enthalpy decreases from $\\text{HF}$ to $\\text{HI}$ as the size of the halogen atom increases.",
      idx: 0,
      exp: "As halogen size increases, orbital overlap with hydrogen $1s$ becomes weaker, causing the $\\text{H}-\\text{X}$ bond dissociation enthalpy to drop significantly, facilitating easier proton release in aqueous solution."
    },
    {
      a: "$\\text{HF}$ has the highest boiling point among all the hydrogen halides.",
      r: "Fluorine is the most electronegative element and forms strong intermolecular hydrogen bonds in $\\text{HF}$.",
      idx: 0,
      exp: "$\\text{HF}$ molecules are associated through strong intermolecular hydrogen bonding, requiring significantly more energy to separate than the dipolar/dispersion forces in $\\text{HCl}$, $\\text{HBr}$, and $\\text{HI}$."
    },
    {
      a: "Helium has the lowest boiling point ($4.2\\text{ K}$) of any known element.",
      r: "Helium atoms are held together only by very weak London dispersion forces due to their small size and tightly held $1s^2$ electron configuration.",
      idx: 0,
      exp: "Helium has extremely weak interatomic van der Waals (London dispersion) forces, leading to the lowest boiling point among all chemical elements."
    },
    {
      a: "Ozone is a much stronger oxidizing agent than dioxygen.",
      r: "Ozone is thermodynamically unstable with respect to oxygen and easily decomposes to liberate nascent oxygen ($[\\text{O}]$).",
      idx: 0,
      exp: "$\\text{O}_3 \\rightarrow \\text{O}_2 + [\\text{O}]$ occurs with release of heat ($\\Delta H < 0$) and increase in entropy ($\\Delta S > 0$), resulting in a large negative $\\Delta G$. The nascent oxygen makes it a powerful oxidizing agent."
    },
    {
      a: "Dioxygen ($\\text{O}_2$) is paramagnetic.",
      r: "According to Molecular Orbital Theory, the $\\text{O}_2$ molecule has two unpaired electrons in its degenerate $\\pi^*2p_x$ and $\\pi^*2p_y$ antibonding orbitals.",
      idx: 0,
      exp: "MOT correctly predicts paramagnetic behavior for $\\text{O}_2$ with two unpaired electrons in $\\pi^*2p$ orbitals. Both statements are true and Reason explains Assertion."
    },
    {
      a: "$\\text{PCl}_5$ exists as an ionic solid $[\\text{PCl}_4]^+[\\text{PCl}_6]^-$ in the crystalline state.",
      r: "In crystalline $\\text{PCl}_5$, the cation $[\\text{PCl}_4]^+$ is tetrahedral and the anion $[\\text{PCl}_6]^-$ is octahedral.",
      idx: 1,
      exp: "Both statements are true facts from NCERT. The ionic lattice structure $[\\text{PCl}_4]^+[\\text{PCl}_6]^-$ minimizes steric repulsions and maximizes lattice energy, while Reason merely states the shapes of the respective ions, so (R) is not the causal explanation of why it is ionic."
    },
    {
      a: "The bond angle in $\\text{NH}_3$ ($107.8^\\circ$) is greater than the bond angle in $\\text{PH}_3$ ($93.6^\\circ$).",
      r: "Nitrogen is more electronegative than phosphorus, causing the bonding electron pairs to be closer to nitrogen and repel each other more strongly.",
      idx: 0,
      exp: "The higher electronegativity of $\\text{N}$ concentrates bond pair electron density closer to the central atom, causing stronger bond pair-bond pair repulsion and a larger bond angle ($107.8^\\circ$). In $\\text{PH}_3$, bonding involves nearly pure $p$-orbitals (Drago's rule)."
    },
    {
      a: "$\\text{SO}_2$ acts both as an oxidizing agent and as a reducing agent.",
      r: "The oxidation state of sulfur in $\\text{SO}_2$ is $+4$, which is an intermediate oxidation state between its minimum of $-2$ and maximum of $+6$.",
      idx: 0,
      exp: "Since sulfur has an intermediate oxidation state of $+4$ in $\\text{SO}_2$, it can increase its oxidation state to $+6$ (acting as a reducing agent) or decrease it to $0$ or $-2$ (acting as an oxidizing agent)."
    },
    {
      a: "$\\text{SF}_6$ is chemically inert and does not easily undergo hydrolysis.",
      r: "The sulfur atom in $\\text{SF}_6$ is sterically protected by six small fluorine atoms, preventing nucleophilic attack by water.",
      idx: 0,
      exp: "Although thermodynamically favorable, the hydrolysis of $\\text{SF}_6$ is kinetically blocked because the central sulfur atom is sterically hindered by six fluorine atoms."
    },
    {
      a: "White phosphorus is much more reactive than red phosphorus.",
      r: "White phosphorus exists as discrete tetrahedral $\\text{P}_4$ molecules with severe angular strain where the $\\text{P}-\\text{P}-\\text{P}$ bond angle is only $60^\\circ$.",
      idx: 0,
      exp: "The $60^\\circ$ bond angles in tetrahedral $\\text{P}_4$ molecules introduce significant ring/angular strain, making white phosphorus highly reactive compared to the polymeric network of red phosphorus."
    },
    {
      a: "$\\text{NF}_3$ has a lower dipole moment ($0.23\\text{ D}$) than $\\text{NH}_3$ ($1.47\\text{ D}$).",
      r: "In $\\text{NF}_3$, the orbital dipole of the lone pair and the resultant dipole moments of the three $\\text{N}-\\text{F}$ bonds are in opposite directions, partially canceling each other.",
      idx: 0,
      exp: "In $\\text{NH}_3$, nitrogen is more electronegative than hydrogen, so $\\text{N}-\\text{H}$ bond dipoles reinforce the lone pair dipole. In $\\text{NF}_3$, fluorine is more electronegative than nitrogen, so $\\text{N}-\\text{F}$ bond dipoles oppose the lone pair dipole."
    },
    {
      a: "Noble gases have very large positive values of electron gain enthalpy.",
      r: "Noble gases possess stable closed shell electronic configurations, so an incoming electron has to enter the next higher principal quantum level.",
      idx: 0,
      exp: "Because of their completely filled valence subshells ($ns^2 np^6$), any incoming electron must occupy an orbital in the next principal shell, which requires energy, giving a large positive $\\Delta_{eg}H$."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 78 MCQs covering trends in physical and chemical properties
  const mcqData = [
    {
      q: "Which of the following elements in Group 13 has the highest first ionization enthalpy?",
      opts: ["$\\text{Boron (B)}$", "$\\text{Aluminium (Al)}$", "$\\text{Gallium (Ga)}$", "$\\text{Indium (In)}$"],
      c: 0,
      exp: "Boron has the smallest atomic size in Group 13, leading to the highest effective nuclear charge on its valence electrons and the highest first ionization enthalpy ($801\\text{ kJ/mol}$)."
    },
    {
      q: "What is the correct order of first ionization enthalpy ($\\Delta_i H_1$) for Group 13 elements?",
      opts: [
        "$\\text{B} > \\text{Tl} > \\text{Ga} > \\text{Al} > \\text{In}$",
        "$\\text{B} > \\text{Al} > \\text{Ga} > \\text{In} > \\text{Tl}$",
        "$\\text{B} > \\text{Ga} > \\text{Al} > \\text{Tl} > \\text{In}$",
        "$\\text{Tl} > \\text{B} > \\text{Ga} > \\text{Al} > \\text{In}$"
      ],
      c: 0,
      exp: "The correct sequence is $\\text{B} (801) > \\text{Tl} (589) > \\text{Ga} (579) > \\text{Al} (577) > \\text{In} (558\\text{ kJ/mol})$ due to intervening $d$ and $f$ electrons."
    },
    {
      q: "Which of the following is the correct order of atomic radii for Group 13 elements?",
      opts: [
        "$\\text{B} < \\text{Ga} < \\text{Al} < \\text{In} < \\text{Tl}$",
        "$\\text{B} < \\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$",
        "$\\text{B} < \\text{Al} < \\text{In} < \\text{Ga} < \\text{Tl}$",
        "$\\text{Ga} < \\text{B} < \\text{Al} < \\text{In} < \\text{Tl}$"
      ],
      c: 0,
      exp: "Due to poor shielding by $3d^{10}$ electrons in gallium, gallium ($135\\text{ pm}$) is slightly smaller than aluminium ($143\\text{ pm}$). The sequence is $\\text{B} < \\text{Ga} < \\text{Al} < \\text{In} < \\text{Tl}$."
    },
    {
      q: "The order of Lewis acid strength among boron trihalides is:",
      opts: [
        "$\\text{BF}_3 < \\text{BCl}_3 < \\text{BBr}_3 < \\text{BI}_3$",
        "$\\text{BF}_3 > \\text{BCl}_3 > \\text{BBr}_3 > \\text{BI}_3$",
        "$\\text{BCl}_3 > \\text{BF}_3 > \\text{BBr}_3 > \\text{BI}_3$",
        "$\\text{BI}_3 < \\text{BBr}_3 < \\text{BF}_3 < \\text{BCl}_3$"
      ],
      c: 0,
      exp: "Back-bonding efficiency decreases in the order $2p-2p > 2p-3p > 2p-4p > 2p-5p$. In $\\text{BF}_3$, $p\\pi-p\\pi$ back donation satisfies the electron deficiency of boron most effectively, making $\\text{BF}_3$ the weakest Lewis acid."
    },
    {
      q: "Which property of carbon is primarily responsible for its ability to form millions of organic compounds?",
      opts: [
        "High catenation ability and tetravalency",
        "High electronegativity",
        "Presence of vacant $d$-orbitals",
        "Strong oxidizing power"
      ],
      c: 0,
      exp: "Carbon exhibits strong catenation due to high $\\text{C}-\\text{C}$ bond energy ($348\\text{ kJ/mol}$) and tetravalency, forming chains, rings, and multiple bonds."
    },
    {
      q: "What is the order of catenation tendency among Group 14 elements?",
      opts: [
        "$\\text{C} \\gg \\text{Si} > \\text{Ge} \\approx \\text{Sn} > \\text{Pb}$",
        "$\\text{C} > \\text{Si} > \\text{Ge} > \\text{Sn} > \\text{Pb}$",
        "$\\text{Si} > \\text{C} > \\text{Ge} > \\text{Sn} > \\text{Pb}$",
        "$\\text{Pb} > \\text{Sn} > \\text{Ge} > \\text{Si} > \\text{C}$"
      ],
      c: 0,
      exp: "Catenation depends directly on element-element bond enthalpy. $\\text{C}-\\text{C}$ ($348\\text{ kJ/mol}$) is much stronger than $\\text{Si}-\\text{Si}$ ($297\\text{ kJ/mol}$), $\\text{Ge}-\\text{Ge}$ ($260\\text{ kJ/mol}$), etc."
    },
    {
      q: "Which of the following chlorides is resistant to hydrolysis by water at ambient conditions?",
      opts: ["$\\text{CCl}_4$", "$\\text{SiCl}_4$", "$\\text{GeCl}_4$", "$\\text{SnCl}_4$"],
      c: 0,
      exp: "Carbon has no vacant $d$-orbitals in its second principal shell, preventing coordination by water molecules. Thus $\\text{CCl}_4$ does not hydrolyze."
    },
    {
      q: "Anhydrous aluminium chloride behaves as a Lewis acid because:",
      opts: [
        "It is electron deficient with an incomplete octet around aluminium",
        "It is an ionic lattice",
        "It has an expanded octet with 10 valence electrons",
        "It undergoes complete protonation"
      ],
      c: 0,
      exp: "In monomeric $\\text{AlCl}_3$, aluminium has only six valence electrons, making it an electron-deficient Lewis acid."
    },
    {
      q: "In the vapour phase, aluminium chloride exists predominantly as a dimer $\\text{Al}_2\\text{Cl}_6$. What type of bonding holds the bridge chlorine atoms?",
      opts: [
        "Three-centre four-electron ($3c-4e$) bridge bonds",
        "Three-centre two-electron ($3c-2e$) banana bonds",
        "Hydrogen bonding",
        "Metallic bonding"
      ],
      c: 0,
      exp: "In the $\\text{Al}_2\\text{Cl}_6$ dimer, each bridging chlorine donates a lone pair to the vacant orbital of the other aluminium, forming two coordinate $3c-4e$ bridge bonds."
    },
    {
      q: "Which of the following compounds exhibits three-centre two-electron ($3c-2e$) bonds?",
      opts: ["Diborane ($\\text{B}_2\\text{H}_6$)", "$\\text{Al}_2\\text{Cl}_6$", "$\\text{BF}_3$", "$\\text{BCl}_3$"],
      c: 0,
      exp: "Diborane contains two $\\text{B}-\\text{H}-\\text{B}$ bridge bonds, each of which is a $3c-2e$ banana bond."
    },
    {
      q: "What is the hybridization of boron in diborane ($\\text{B}_2\\text{H}_6$)?",
      opts: ["$sp^3$", "$sp^2$", "$sp$", "$sp^3d$"],
      c: 0,
      exp: "Each boron atom in diborane is $sp^3$ hybridized, using two hybrid orbitals for terminal $\\text{B}-\\text{H}$ bonds and two for the bridging $\\text{B}-\\text{H}-\\text{B}$ bonds."
    },
    {
      q: "How many terminal and bridging hydrogen atoms are present in a diborane ($\\text{B}_2\\text{H}_6$) molecule?",
      opts: [
        "4 terminal and 2 bridging",
        "2 terminal and 4 bridging",
        "3 terminal and 3 bridging",
        "6 terminal and 0 bridging"
      ],
      c: 0,
      exp: "$\\text{B}_2\\text{H}_6$ has 4 terminal hydrogen atoms coplanar with the boron atoms and 2 bridging hydrogen atoms located above and below this plane."
    },
    {
      q: "Which of the following oxides of nitrogen is neutral in nature?",
      opts: ["$\\text{N}_2\\text{O}$ and $\\text{NO}$", "$\\text{NO}_2$ and $\\text{N}_2\\text{O}_3$", "$\\text{N}_2\\text{O}_5$", "$\\text{N}_2\\text{O}_4$"],
      c: 0,
      exp: "Nitrous oxide ($\\text{N}_2\\text{O}$) and nitric oxide ($\\text{NO}$) are neutral oxides, whereas higher oxides like $\\text{NO}_2, \\text{N}_2\\text{O}_3, \\text{N}_2\\text{O}_4$, and $\\text{N}_2\\text{O}_5$ are acidic."
    },
    {
      q: "What is the magnetic behavior of nitric oxide ($\\text{NO}$) in the gaseous state and liquid/solid state?",
      opts: [
        "Paramagnetic in gaseous state, diamagnetic in liquid/solid state",
        "Diamagnetic in both gaseous and solid states",
        "Paramagnetic in both gaseous and solid states",
        "Ferromagnetic in gaseous state, paramagnetic in liquid state"
      ],
      c: 0,
      exp: "$\\text{NO}$ contains an odd electron (11 valence electrons) and is paramagnetic in the gas phase. In liquid and solid states, it dimerizes to $\\text{N}_2\\text{O}_2$ with paired electrons, becoming diamagnetic."
    },
    {
      q: "The correct order of bond angles in hydrides of Group 15 is:",
      opts: [
        "$\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3$",
        "$\\text{PH}_3 > \\text{NH}_3 > \\text{AsH}_3 > \\text{SbH}_3$",
        "$\\text{SbH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{NH}_3$",
        "$\\text{NH}_3 = \\text{PH}_3 = \\text{AsH}_3 = \\text{SbH}_3$"
      ],
      c: 0,
      exp: "The bond angles decrease down the group: $\\text{NH}_3 (107.8^\\circ) > \\text{PH}_3 (93.6^\\circ) > \\text{AsH}_3 (91.8^\\circ) > \\text{SbH}_3 (91.3^\\circ)$ as bonding involves almost unhybridized pure $p$-orbitals for heavier hydrides (Drago's rule)."
    },
    {
      q: "Which hydride of Group 15 is the strongest base?",
      opts: ["$\\text{NH}_3$", "$\\text{PH}_3$", "$\\text{AsH}_3$", "$\\text{SbH}_3$"],
      c: 0,
      exp: "$\\text{NH}_3$ has the smallest central atom, giving the lone pair high electron density and localized $sp^3$ character, making it the most easily donated to a proton."
    },
    {
      q: "Which of the following hydrides of Group 15 is the strongest reducing agent?",
      opts: ["$\\text{BiH}_3$", "$\\text{SbH}_3$", "$\\text{AsH}_3$", "$\\text{NH}_3$"],
      c: 0,
      exp: "$\\text{BiH}_3$ has the longest and weakest $\\text{Bi}-\\text{H}$ bond, which dissociates most readily to liberate reducing hydrogen."
    },
    {
      q: "What is the correct order of thermal stability of hydrides of Group 15?",
      opts: [
        "$\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3$",
        "$\\text{BiH}_3 > \\text{SbH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{NH}_3$",
        "$\\text{PH}_3 > \\text{NH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3$",
        "$\\text{NH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{SbH}_3 > \\text{BiH}_3$"
      ],
      c: 0,
      exp: "Thermal stability decreases down the group as the size of the central atom increases and the $\\text{E}-\\text{H}$ bond dissociation energy decreases."
    },
    {
      q: "The correct order of boiling points for Group 15 hydrides is:",
      opts: [
        "$\\text{PH}_3 < \\text{AsH}_3 < \\text{NH}_3 < \\text{SbH}_3 < \\text{BiH}_3$",
        "$\\text{NH}_3 < \\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$",
        "$\\text{BiH}_3 < \\text{SbH}_3 < \\text{AsH}_3 < \\text{PH}_3 < \\text{NH}_3$",
        "$\\text{PH}_3 < \\text{NH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$"
      ],
      c: 0,
      exp: "Due to intermolecular hydrogen bonding, $\\text{NH}_3$ has a higher boiling point than $\\text{PH}_3$ and $\\text{AsH}_3$. The overall order is $\\text{PH}_3 < \\text{AsH}_3 < \\text{NH}_3 < \\text{SbH}_3 < \\text{BiH}_3$."
    },
    {
      q: "Why does phosphine ($\\text{PH}_3$) have a much lower boiling point ($185.5\\text{ K}$) than ammonia ($\\text{NH}_3$, $238.5\\text{ K}$)?",
      opts: [
        "Ammonia forms intermolecular hydrogen bonds, whereas phosphine does not",
        "Ammonia has a higher molecular weight than phosphine",
        "Phosphine has a planar geometry",
        "$\\text{P}-\\text{H}$ bonds are ionic"
      ],
      c: 0,
      exp: "Nitrogen has high electronegativity ($3.0$) and small size, enabling extensive intermolecular hydrogen bonding. Phosphorus has lower electronegativity ($2.1$), so $\\text{PH}_3$ cannot form hydrogen bonds."
    },
    {
      q: "Which of the following trihalides of nitrogen is stable?",
      opts: ["$\\text{NF}_3$", "$\\text{NCl}_3$", "$\\text{NBr}_3$", "$\\text{NI}_3$"],
      c: 0,
      exp: "Only $\\text{NF}_3$ is stable because of strong $\\text{N}-\\text{F}$ covalent bonds (small sizes and good orbital overlap). $\\text{NCl}_3$, $\\text{NBr}_3$, and $\\text{NI}_3$ are explosive and unstable."
    },
    {
      q: "Which of the following compounds has a see-saw molecular shape?",
      opts: ["$\\text{SF}_4$", "$\\text{XeF}_4$", "$\\text{CCl}_4$", "$\\text{SiF}_4$"],
      c: 0,
      exp: "$\\text{SF}_4$ has $4$ bonding pairs and $1$ lone pair on sulfur ($sp^3d$ hybridization), resulting in a see-saw geometry."
    },
    {
      q: "What is the geometry and hybridization of sulfur in $\\text{SF}_6$?",
      opts: [
        "Octahedral, $sp^3d^2$",
        "Trigonal bipyramidal, $sp^3d$",
        "Square planar, $dsp^2$",
        "Tetrahedral, $sp^3$"
      ],
      c: 0,
      exp: "$\\text{SF}_6$ has $6$ bond pairs and $0$ lone pairs on sulfur, giving an octahedral geometry with $sp^3d^2$ hybridization."
    },
    {
      q: "Which of the following chalcogens exhibits only the $-2$ oxidation state among negative oxidation states?",
      opts: ["Oxygen ($\\text{O}$)", "Sulfur ($\\text{S}$)", "Selenium ($\\text{Se}$)", "Tellurium ($\\text{Te}$)$"],
      c: 0,
      exp: "Due to its high electronegativity and lack of $d$-orbitals, oxygen shows positive oxidation states only with fluorine (e.g. $\\text{OF}_2, \\text{O}_2\\text{F}_2$) and does not show $+4$ or $+6$."
    },
    {
      q: "What is the correct order of electron gain enthalpy (most negative to least negative) for Group 16 elements?",
      opts: [
        "$\\text{S} > \\text{Se} > \\text{Te} > \\text{Po} > \\text{O}$",
        "$\\text{O} > \\text{S} > \\text{Se} > \\text{Te} > \\text{Po}$",
        "$\\text{S} > \\text{O} > \\text{Se} > \\text{Te} > \\text{Po}$",
        "$\\text{O} > \\text{Po} > \\text{Te} > \\text{Se} > \\text{S}$"
      ],
      c: 0,
      exp: "Oxygen has the least negative electron gain enthalpy in Group 16 due to compact $2p$ subshell and high interelectronic repulsions: $\\text{S} (-200) > \\text{Se} (-195) > \\text{Te} (-190) > \\text{Po} (-174) > \\text{O} (-141\\text{ kJ/mol})$."
    },
    {
      q: "The thermal stability of hydrides of Group 16 decreases in which order?",
      opts: [
        "$\\text{H}_2\\text{O} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}$",
        "$\\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S} > \\text{H}_2\\text{O}$",
        "$\\text{H}_2\\text{S} > \\text{H}_2\\text{O} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}$",
        "$\\text{H}_2\\text{O} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Te}$"
      ],
      c: 0,
      exp: "The $\\text{H}-\\text{E}$ bond length increases as the central atom size increases, decreasing bond dissociation energy. Thus thermal stability decreases: $\\text{H}_2\\text{O} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}$."
    },
    {
      q: "The acidic strength of Group 16 hydrides increases in which order?",
      opts: [
        "$\\text{H}_2\\text{O} < \\text{H}_2\\text{S} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te}$",
        "$\\text{H}_2\\text{Te} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{S} < \\text{H}_2\\text{O}$",
        "$\\text{H}_2\\text{S} < \\text{H}_2\\text{O} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te}$",
        "$\\text{H}_2\\text{O} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{S} < \\text{H}_2\\text{Te}$"
      ],
      c: 0,
      exp: "Acidic strength increases with decreasing $\\text{H}-\\text{E}$ bond dissociation enthalpy down the group: $\\text{H}_2\\text{O} < \\text{H}_2\\text{S} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te}$."
    },
    {
      q: "The correct sequence of boiling points for Group 16 hydrides is:",
      opts: [
        "$\\text{H}_2\\text{S} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te} < \\text{H}_2\\text{O}$",
        "$\\text{H}_2\\text{O} < \\text{H}_2\\text{S} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te}$",
        "$\\text{H}_2\\text{Te} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{S} < \\text{H}_2\\text{O}$",
        "$\\text{H}_2\\text{S} < \\text{H}_2\\text{O} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te}$"
      ],
      c: 0,
      exp: "Due to hydrogen bonding, $\\text{H}_2\\text{O}$ has an abnormally high boiling point ($373\\text{ K}$). For the others, boiling point increases with molar mass (van der Waals forces): $\\text{H}_2\\text{S} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te} < \\text{H}_2\\text{O}$."
    },
    {
      q: "Which of the following allotropes of sulfur is thermodynamically stable at room temperature ($298\\text{ K}$)?",
      opts: ["$\\alpha$-sulfur (Rhombic sulfur)", "$\\beta$-sulfur (Monoclinic sulfur)", "Plastic sulfur", "Liquid sulfur"],
      c: 0,
      exp: "Rhombic sulfur ($\\alpha$-sulfur) is the most stable allotrope at room temperature. Monoclinic sulfur ($\\beta$-sulfur) is stable only above $369\\text{ K}$ ($95.6^\\circ\\text{C}$)."
    },
    {
      q: "What is the transition temperature between rhombic and monoclinic sulfur at $1\\text{ atm}$?",
      opts: ["$369\\text{ K}$", "$298\\text{ K}$", "$393\\text{ K}$", "$444\\text{ K}$"],
      c: 0,
      exp: "At $369\\text{ K}$ ($95.6^\\circ\\text{C}$), both rhombic and monoclinic sulfur coexist in equilibrium. This is known as the transition temperature."
    },
    {
      q: "In the vapour phase at elevated temperatures ($\\sim 1000\\text{ K}$), sulfur exists partly as $\\text{S}_2$ molecules which are:",
      opts: [
        "Paramagnetic like $\\text{O}_2$",
        "Diamagnetic like $\\text{N}_2$",
        "Ferromagnetic",
        "Non-polar and diamagnetic"
      ],
      c: 0,
      exp: "In the vapour state at high temperature, $\\text{S}_2$ has two unpaired electrons in antibonding $\\pi^*$ molecular orbitals, making it paramagnetic like $\\text{O}_2$."
    },
    {
      q: "What is the shape of the $\\text{S}_8$ molecule in rhombic and monoclinic sulfur?",
      opts: ["Puckered crown shape", "Planar octagon", "Chair conformation", "Tetrahedral"],
      c: 0,
      exp: "The $\\text{S}_8$ ring in both rhombic and monoclinic forms exists in a puckered crown conformation."
    },
    {
      q: "Which of the following halogens has the highest electron gain enthalpy (magnitude)?",
      opts: ["Chlorine ($\\text{Cl}$)", "Fluorine ($\\text{F}$)", "Bromine ($\\text{Br}$)", "Iodine ($\\text{I}$)$"],
      c: 0,
      exp: "Chlorine has the highest electron gain enthalpy ($-349\\text{ kJ/mol}$) due to lower electron-electron repulsions in its $3p$ orbital compared to the compact $2p$ orbital of fluorine ($-333\\text{ kJ/mol}$)."
    },
    {
      q: "What is the correct order of bond dissociation enthalpy for the halogen molecules?",
      opts: [
        "$\\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2$",
        "$\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$",
        "$\\text{Cl}_2 > \\text{F}_2 > \\text{Br}_2 > \\text{I}_2$",
        "$\\text{Br}_2 > \\text{Cl}_2 > \\text{F}_2 > \\text{I}_2$"
      ],
      c: 0,
      exp: "Due to severe lone pair-lone pair repulsions in the small $\\text{F}_2$ molecule, its bond dissociation enthalpy ($158.8\\text{ kJ/mol}$) is lower than that of $\\text{Cl}_2$ ($242.6\\text{ kJ/mol}$) and $\\text{Br}_2$ ($192.8\\text{ kJ/mol}$)."
    },
    {
      q: "Which halogen is the strongest oxidizing agent in aqueous solution?",
      opts: ["$\\text{F}_2$", "$\\text{Cl}_2$", "$\\text{Br}_2$", "$\\text{I}_2$"],
      c: 0,
      exp: "$\\text{F}_2$ is the strongest oxidizing agent ($E^\\circ = +2.87\\text{ V}$) due to its low bond dissociation enthalpy and exceptionally large hydration enthalpy of the small $\\text{F}^-$ ion."
    },
    {
      q: "What is the order of reducing power of the halide ions in aqueous solution?",
      opts: [
        "$\\text{I}^- > \\text{Br}^- > \\text{Cl}^- > \\text{F}^-$",
        "$\\text{F}^- > \\text{Cl}^- > \\text{Br}^- > \\text{I}^-$",
        "$\\text{Cl}^- > \\text{Br}^- > \\text{I}^- > \\text{F}^-$",
        "$\\text{Br}^- > \\text{I}^- > \\text{Cl}^- > \\text{F}^-$"
      ],
      c: 0,
      exp: "$\\text{I}^-$ has the lowest standard oxidation potential (easiest to oxidize to $\\text{I}_2$), making it the strongest reducing agent among halide ions."
    },
    {
      q: "Which of the following hydrogen halides has the lowest boiling point?",
      opts: ["$\\text{HCl}$", "$\\text{HF}$", "$\\text{HBr}$", "$\\text{HI}$"],
      c: 0,
      exp: "The order of boiling points is $\\text{HCl} (189\\text{ K}) < \\text{HBr} (206\\text{ K}) < \\text{HI} (238\\text{ K}) < \\text{HF} (293\\text{ K})$. Therefore, $\\text{HCl}$ has the lowest boiling point."
    },
    {
      q: "Which of the following hydrogen halides is the strongest acid in aqueous solution?",
      opts: ["$\\text{HI}$", "$\\text{HBr}$", "$\\text{HCl}$", "$\\text{HF}$"],
      c: 0,
      exp: "$\\text{HI}$ has the lowest $\\text{H}-\\text{X}$ bond dissociation enthalpy due to the large size of the iodine atom, making it release protons most readily in water."
    },
    {
      q: "Why is $\\text{HF}$ a weak acid compared to $\\text{HCl}$, $\\text{HBr}$, and $\\text{HI}$?",
      opts: [
        "Due to high $\\text{H}-\\text{F}$ bond dissociation enthalpy",
        "Because fluorine is the least electronegative halogen",
        "Because $\\text{HF}$ is an ionic compound",
        "Because $\\text{F}^-$ has very low hydration enthalpy"
      ],
      c: 0,
      exp: "The $\\text{H}-\\text{F}$ bond is extremely strong ($574\\text{ kJ/mol}$) due to the small size of fluorine and short bond length, preventing complete dissociation in dilute aqueous solution."
    },
    {
      q: "What is the correct order of thermal stability of hydrogen halides?",
      opts: [
        "$\\text{HF} > \\text{HCl} > \\text{HBr} > \\text{HI}$",
        "$\\text{HI} > \\text{HBr} > \\text{HCl} > \\text{HF}$",
        "$\\text{HCl} > \\text{HF} > \\text{HBr} > \\text{HI}$",
        "$\\text{HBr} > \\text{HI} > \\text{HCl} > \\text{HF}$"
      ],
      c: 0,
      exp: "Thermal stability is directly related to bond dissociation enthalpy, which decreases from $\\text{HF}$ to $\\text{HI}$."
    },
    {
      q: "Bleaching action of sulfur dioxide ($\\text{SO}_2$) is temporary and occurs due to:",
      opts: ["Reduction", "Oxidation", "Hydrolysis", "Precipitation"],
      c: 0,
      exp: "$\\text{SO}_2$ bleaches vegetable colouring matter by reduction via nascent hydrogen: $\\text{SO}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4 + 2[\\text{H}]$. The color returns upon re-oxidation by air."
    },
    {
      q: "Bleaching action of chlorine ($\\text{Cl}_2$) in presence of moisture is permanent and occurs due to:",
      opts: ["Oxidation", "Reduction", "Dehydration", "Coordination"],
      c: 0,
      exp: "Chlorine bleaches permanently by oxidation via nascent oxygen liberated by hypochlorous acid: $\\text{Cl}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{HCl} + \\text{HOCl} \\rightarrow 2\\text{HCl} + [\\text{O}]$."
    },
    {
      q: "What is the hybridization and shape of $\\text{PCl}_5$ in the gaseous and liquid states?",
      opts: [
        "$sp^3d$, trigonal bipyramidal",
        "$sp^3d^2$, octahedral",
        "$sp^3$, tetrahedral",
        "$dsp^2$, square planar"
      ],
      c: 0,
      exp: "In gaseous and liquid phases, $\\text{PCl}_5$ is monomeric with $sp^3d$ hybridization and trigonal bipyramidal geometry."
    },
    {
      q: "In gaseous $\\text{PCl}_5$, the two axial $\\text{P}-\\text{Cl}$ bonds are longer than the three equatorial bonds because:",
      opts: [
        "Axial bonds experience greater repulsion from equatorial bond pairs",
        "Equatorial bonds experience greater repulsion",
        "Axial bonds have greater $s$-character",
        "Equatorial chlorines have vacant $d$-orbitals"
      ],
      c: 0,
      exp: "Each axial bond pair experiences three $90^\\circ$ repulsions from equatorial pairs, whereas each equatorial pair experiences only two $90^\\circ$ repulsions. Thus axial bonds are longer and weaker."
    },
    {
      q: "Which of the following compounds gives brown fumes on heating with concentrated $\\text{H}_2\\text{SO}_4$?",
      opts: ["$\\text{NaBr}$", "$\\text{NaCl}$", "$\\text{NaF}$", "$\\text{Na}_2\\text{SO}_4$"],
      c: 0,
      exp: "Concentrated $\\text{H}_2\\text{SO}_4$ oxidizes $\\text{HBr}$ (formed from $\\text{NaBr}$) into bromine gas ($\\text{Br}_2$), which produces reddish-brown fumes."
    },
    {
      q: "When concentrated $\\text{H}_2\\text{SO}_4$ is treated with $\\text{KI}$, violet vapours of $\\text{I}_2$ are evolved because:",
      opts: [
        "$\\text{H}_2\\text{SO}_4$ oxidizes $\\text{HI}$ to $\\text{I}_2$",
        "$\\text{HI}$ is a strong oxidizing agent",
        "$\\text{KI}$ is decomposed thermally",
        "$\\text{I}_2$ sublimes without reaction"
      ],
      c: 0,
      exp: "$\\text{HI}$ is a powerful reducing agent and is readily oxidized by concentrated $\\text{H}_2\\text{SO}_4$ into elemental iodine ($\\text{I}_2$), giving violet vapours."
    },
    {
      q: "Which of the following noble gases forms the maximum number of chemical compounds?",
      opts: ["Xenon ($\\text{Xe}$)", "Krypton ($\\text{Kr}$)", "Argon ($\\text{Ar}$)", "Neon ($\\text{Ne}$)$"],
      c: 0,
      exp: "Xenon has the lowest ionization enthalpy among non-radioactive noble gases, allowing it to form numerous stable fluorides, oxides, and oxofluorides."
    },
    {
      q: "The first noble gas compound prepared by Neil Bartlett was:",
      opts: [
        "$\\text{Xe}^+[\\text{PtF}_6]^-$",
        "$\\text{XeF}_2$",
        "$\\text{XeF}_4$",
        "$\\text{KrF}_2$"
      ],
      c: 0,
      exp: "Neil Bartlett observed that $\\text{PtF}_6$ oxidizes $\\text{O}_2$ to $\\text{O}_2^+[\\text{PtF}_6]^-$. Since the first ionization enthalpy of $\\text{Xe}$ ($1170\\text{ kJ/mol}$) is very close to that of $\\text{O}_2$ ($1175\\text{ kJ/mol}$), he reacted $\\text{Xe}$ with $\\text{PtF}_6$ to form $\\text{Xe}^+[\\text{PtF}_6]^-$."
    },
    {
      q: "What is the geometry and number of lone pairs on the central atom in $\\text{XeF}_2$?",
      opts: [
        "Linear, 3 lone pairs",
        "Bent, 2 lone pairs",
        "Trigonal planar, 1 lone pair",
        "T-shaped, 2 lone pairs"
      ],
      c: 0,
      exp: "$\\text{XeF}_2$ has $sp^3d$ hybridization with 2 bond pairs and 3 lone pairs in equatorial positions, resulting in a linear molecular shape."
    },
    {
      q: "What is the molecular geometry and hybridization of xenon in $\\text{XeF}_4$?",
      opts: [
        "Square planar, $sp^3d^2$",
        "Tetrahedral, $sp^3$",
        "See-saw, $sp^3d$",
        "Octahedral, $sp^3d^2$"
      ],
      c: 0,
      exp: "$\\text{XeF}_4$ has $4$ bond pairs and $2$ lone pairs on xenon ($sp^3d^2$ hybridization). The two lone pairs occupy trans positions, giving a square planar geometry."
    },
    {
      q: "What is the molecular geometry of $\\text{XeF}_6$ in the gas phase?",
      opts: [
        "Distorted octahedral",
        "Regular octahedral",
        "Pentagonal pyramidal",
        "Square pyramidal"
      ],
      c: 0,
      exp: "$\\text{XeF}_6$ has $6$ bond pairs and $1$ lone pair ($sp^3d^3$ hybridization), giving a distorted octahedral geometry according to VSEPR theory."
    },
    {
      q: "What is the shape of the $\\text{XeO}_3$ molecule?",
      opts: ["Pyramidal", "Trigonal planar", "T-shaped", "Tetrahedral"],
      c: 0,
      exp: "$\\text{XeO}_3$ has $3$ $\\text{Xe}=\\text{O}$ double bonds and $1$ lone pair on xenon ($sp^3$ hybridization), giving a pyramidal geometry similar to $\\text{NH}_3$."
    },
    {
      q: "What is the shape and hybridization of xenon in $\\text{XeOF}_4$?",
      opts: [
        "Square pyramidal, $sp^3d^2$",
        "Trigonal bipyramidal, $sp^3d$",
        "T-shaped, $sp^3d$",
        "Tetrahedral, $sp^3$"
      ],
      c: 0,
      exp: "$\\text{XeOF}_4$ has $5$ bond pairs ($1$ oxygen, $4$ fluorines) and $1$ lone pair on xenon ($sp^3d^2$ hybridization), yielding a square pyramidal shape."
    },
    {
      q: "Which noble gas is used in diving apparatus for deep-sea divers to dilute oxygen?",
      opts: ["Helium ($\\text{He}$)", "Neon ($\\text{Ne}$)", "Argon ($\\text{Ar}$)", "Krypton ($\\text{Kr}$)$"],
      c: 0,
      exp: "Helium is used to dilute oxygen in modern diving apparatus because of its very low solubility in blood compared to nitrogen."
    },
    {
      q: "Which noble gas does not occur in the atmosphere?",
      opts: ["Radon ($\\text{Rn}$)", "Argon ($\\text{Ar}$)", "Xenon ($\\text{Xe}$)", "Krypton ($\\text{Kr}$)$"],
      c: 0,
      exp: "Radon is a radioactive decay product of radium ($^{226}\\text{Ra}$) and is not found in detectable amounts in normal atmospheric air."
    },
    {
      q: "Which noble gas is the most abundant in dry air by volume?",
      opts: ["Argon ($\\text{Ar}$)", "Neon ($\\text{Ne}$)", "Helium ($\\text{He}$)", "Krypton ($\\text{Kr}$)$"],
      c: 0,
      exp: "Argon constitutes about $0.93\\%$ of air by volume, making it the most abundant noble gas in the atmosphere."
    },
    {
      q: "Which of the following compounds has the highest dipole moment?",
      opts: ["$\\text{NH}_3$", "$\\text{NF}_3$", "$\\text{BF}_3$", "$\\text{N}_2$"],
      c: 0,
      exp: "In $\\text{NH}_3$, the $\\text{N}-\\text{H}$ bond dipoles reinforce the lone pair dipole, resulting in $\\mu = 1.47\\text{ D}$, whereas in $\\text{NF}_3$, $\\text{N}-\\text{F}$ dipoles oppose the lone pair dipole ($\\\\mu = 0.23\\text{ D}$)."
    },
    {
      q: "Reaction of white phosphorus with boiling aqueous $\\text{NaOH}$ in an inert atmosphere produces:",
      opts: [
        "$\\text{PH}_3$ and $\\text{NaH}_2\\text{PO}_2$",
        "$\\text{P}_2\\text{O}_5$ and $\\text{Na}_3\\text{PO}_4$",
        "$\\text{H}_3\\text{PO}_3$ and $\\text{Na}_2\\text{HPO}_3$",
        "$\\text{PCl}_3$ and $\\text{NaCl}$"
      ],
      c: 0,
      exp: "$\\text{P}_4 + 3\\text{NaOH} + 3\\text{H}_2\\text{O} \\rightarrow \\text{PH}_3 + 3\\text{NaH}_2\\text{PO}_2$. This is a disproportionation reaction."
    },
    {
      q: "In the disproportionation reaction of white phosphorus with aqueous $\\text{NaOH}$, phosphorus changes its oxidation state from $0$ to:",
      opts: ["$-3$ and $+1$", "$-3$ and $+5$", "$+3$ and $+5$", "$-2$ and $+4$"],
      c: 0,
      exp: "Phosphorus in $\\text{P}_4$ ($0$) is reduced to $-3$ in $\\text{PH}_3$ and oxidized to $+1$ in sodium hypophosphite ($\\text{NaH}_2\\text{PO}_2$)."
    },
    {
      q: "Which element among Group 15 has the lowest boiling point?",
      opts: ["Nitrogen ($\\text{N}_2$)", "Phosphorus ($\\text{P}_4$)", "Arsenic ($\\text{As}$)", "Antimony ($\\text{Sb}$)$"],
      c: 0,
      exp: "Dinitrogen exists as small diatomic molecules with very weak London dispersion forces, having a boiling point of only $77.2\\text{ K}$."
    },
    {
      q: "Which of the following compounds is known as 'inorganic benzene'?",
      opts: ["Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$)", "Borazole ($\\text{B}_2\\text{H}_6$)", "Boron nitride ($\\text{BN}$)", "Boric acid ($\\text{H}_3\\text{BO}_3$)$"],
      c: 0,
      exp: "Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$) is isoelectronic and isostructural with benzene, and is commonly referred to as inorganic benzene."
    },
    {
      q: "What is the hybridization of boron and nitrogen in borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$)?",
      opts: [
        "Both are $sp^2$ hybridized",
        "Boron is $sp^3$, Nitrogen is $sp^2$",
        "Boron is $sp^2$, Nitrogen is $sp^3$",
        "Both are $sp^3$ hybridized"
      ],
      c: 0,
      exp: "Borazine has a planar six-membered ring with alternating boron and nitrogen atoms, both of which are $sp^2$ hybridized."
    },
    {
      q: "Which of the following forms of boron nitride has a layered structure similar to graphite?",
      opts: ["Hexagonal boron nitride ($\\text{h-BN}$)", "Cubic boron nitride ($\\text{c-BN}$)", "Wurtzite boron nitride", "Amorphous boron nitride"],
      c: 0,
      exp: "Hexagonal boron nitride ($\\text{h-BN}$) is composed of planar hexagonal layers stacked over each other, often called 'inorganic graphite'."
    },
    {
      q: "Orthoboric acid ($\\text{H}_3\\text{BO}_3$) behaves in aqueous solution as:",
      opts: [
        "A weak monobasic Lewis acid",
        "A strong tribasic Arrhenius acid",
        "A weak dibasic Brønsted acid",
        "A strong monobasic Brønsted acid"
      ],
      c: 0,
      exp: "Boric acid does not act as a proton donor directly; instead, it acts as a Lewis acid by accepting $\\text{OH}^-$ from water: $\\text{B(OH)}_3 + 2\\text{H}_2\\text{O} \\rightleftharpoons [\\text{B(OH)}_4]^- + \\text{H}_3\\text{O}^+$."
    },
    {
      q: "Addition of cis-diols (like glycerol or mannitol) to boric acid in aqueous solution makes it a strong acid because:",
      opts: [
        "Stable chelate complexes are formed with the $[\\text{B(OH)}_4]^-$ ion, shifting the equilibrium to the right",
        "The diol acts as a strong dehydrating agent",
        "The diol oxidizes boric acid to metaboric acid",
        "The diol reduces boron to elemental boron"
      ],
      c: 0,
      exp: "Cis-1,2-diols react with the $[\\text{B(OH)}_4]^-$ complex ion to form very stable cyclic chelate rings, driving the ionization forward and allowing titration with $\\text{NaOH}$ using phenolphthalein."
    },
    {
      q: "What is the product obtained on heating orthoboric acid strongly above $370\\text{ K}$?",
      opts: [
        "Metaboric acid ($\\text{HBO}_2$)",
        "Tetraboric acid ($\\text{H}_2\\text{B}_4\\text{O}_7$)",
        "Boric anhydride ($\\text{B}_2\\text{O}_3$)",
        "Diborane ($\\text{B}_2\\text{H}_6$)"
      ],
      c: 0,
      exp: "On heating at $370\\text{ K}$, $\\text{H}_3\\text{BO}_3$ loses water to form metaboric acid ($\\text{HBO}_2$). On further heating to red heat, it yields boric anhydride ($\\text{B}_2\\text{O}_3$)."
    },
    {
      q: "In the borax bead test, which coloured bead is formed by cobalt salts in an oxidizing flame?",
      opts: ["Deep blue bead", "Green bead", "Brown bead", "Yellow bead"],
      c: 0,
      exp: "Cobalt forms cobalt metaborate $\\text{Co(BO}_2)_2$, which imparts a characteristic deep blue colour to the bead in both oxidizing and reducing flames."
    },
    {
      q: "What is the correct chemical formula of borax?",
      opts: [
        "$\\text{Na}_2\\text{B}_4\\text{O}_7 \\cdot 10\\text{H}_2\\text{O}$",
        "$\\text{Na}_2\\text{B}_2\\text{O}_4 \\cdot 8\\text{H}_2\\text{O}$",
        "$\\text{NaBO}_2 \\cdot 4\\text{H}_2\\text{O}$",
        "$\\text{Na}_2\\text{B}_4\\text{O}_5(\\text{OH})_4 \\cdot 8\\text{H}_2\\text{O}$"
      ],
      c: 3,
      exp: "The correct structural formula of borax is $\\text{Na}_2[\\text{B}_4\\text{O}_5(\\text{OH})_4] \\cdot 8\\text{H}_2\\text{O}$, containing two tetrahedral and two trigonal planar boron units."
    },
    {
      q: "How many $\\text{B}-\\text{O}-\\text{B}$ bridge linkages are present in the tetranuclear unit of borax $[\\text{B}_4\\text{O}_5(\\text{OH})_4]^{2-}$?",
      opts: ["5", "4", "3", "2"],
      c: 0,
      exp: "In the $[\\text{B}_4\\text{O}_5(\\text{OH})_4]^{2-}$ ion, there are $5$ $\\text{B}-\\text{O}-\\text{B}$ bridges connecting the four boron atoms."
    },
    {
      q: "Which of the following elements of Group 14 does not form a monoxide?",
      opts: ["Lead ($\\text{Pb}$)", "Tin ($\\text{Sn}$)", "Silicon ($\\text{Si}$)", "Carbon ($\\text{C}$)$"],
      c: 2,
      exp: "Silicon forms stable dioxide $\\text{SiO}_2$. $\\text{SiO}$ exists only at very high temperatures in the vapour phase and is unstable at room temperature."
    },
    {
      q: "Quartz is an example of which type of silicate?",
      opts: [
        "Three-dimensional framework silicate (tectosilicate)",
        "Sheet silicate (phyllosilicate)",
        "Chain silicate (inosilicate)",
        "Orthosilicate (nesosilicate)"
      ],
      c: 0,
      exp: "In quartz ($\\text{SiO}_2$), every oxygen atom of each $[\text{SiO}_4]^{4-}$ tetrahedron is shared with another tetrahedron, forming a 3D covalent network structure."
    },
    {
      q: "Which zeolite is extensively used as a catalyst in the petrochemical industry to convert alcohols directly into gasoline?",
      opts: ["ZSM-5", "Zeolite A", "Zeolite X", "Zeolite Y"],
      c: 0,
      exp: "ZSM-5 (Zeolite Socony Mobil-5) dehydrates alcohols (like methanol) to yield a mixture of hydrocarbons corresponding to gasoline."
    },
    {
      q: "Silicones are water-repellent (hydrophobic) because:",
      opts: [
        "They are surrounded by non-polar organic alkyl groups (like $-\\text{CH}_3$)",
        "They have ionic crystal lattices",
        "They react with water to form protective insoluble oxide coatings",
        "They possess strong hydrogen bonding"
      ],
      c: 0,
      exp: "The repeating organosilicon units $[-\\text{R}_2\\text{Si}-\\text{O}-]_n$ have non-polar alkyl groups pointing outward, rendering the material water-repellent."
    },
    {
      q: "Hydrolysis of dimethyldichlorosilane $\\text{(CH}_3)_2\\text{SiCl}_2$ followed by polymerization yields:",
      opts: [
        "Straight chain silicone polymer",
        "Cross-linked silicone polymer",
        "Silicone resin",
        "Silicic acid"
      ],
      c: 0,
      exp: "$\\text{(CH}_3)_2\\text{SiCl}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{(CH}_3)_2\\text{Si(OH)}_2 + 2\\text{HCl}$. Condensation polymerization of this difunctional monomer yields linear straight-chain silicones."
    },
    {
      q: "Which chlorosilane on hydrolysis followed by polymerization yields cross-linked silicone resins?",
      opts: [
        "$\\text{CH}_3\\text{SiCl}_3$",
        "$\\text{(CH}_3)_2\\text{SiCl}_2$",
        "$\\text{(CH}_3)_3\\text{SiCl}$",
        "$\\text{SiCl}_4$"
      ],
      c: 0,
      exp: "Trichlorosilanes like $\\text{CH}_3\\text{SiCl}_3$ have three hydrolyzable $\\text{Cl}$ groups, producing $\\text{CH}_3\\text{Si(OH)}_3$ which undergoes three-dimensional cross-linking."
    },
    {
      q: "To terminate the chain growth during silicone polymerization, which compound is added?",
      opts: [
        "$\\text{(CH}_3)_3\\text{SiCl}$",
        "$\\text{CH}_3\\text{SiCl}_3$",
        "$\\text{SiCl}_4$",
        "$\\text{(CH}_3)_2\\text{SiCl}_2$"
      ],
      c: 0,
      exp: "Trimethylchlorosilane $\\text{(CH}_3)_3\\text{SiCl}$ has only one $\\text{-Cl}$ group, forming $\\text{(CH}_3)_3\\text{Si-OH}$ which acts as a chain terminator."
    },
    {
      q: "What is the structural unit present in orthosilicates?",
      opts: ["$[\\text{SiO}_4]^{4-}$", "$[\\text{Si}_2\\text{O}_7]^{6-}$", "$[\\text{Si}_3\\text{O}_9]^{6-}$", "$[\\text{SiO}_3]_n^{2n-}$"],
      c: 0,
      exp: "Orthosilicates contain discrete tetrahedral $[\\text{SiO}_4]^{4-}$ units without sharing any oxygen atoms between tetrahedra (e.g., zircon $\\text{ZrSiO}_4$)."
    },
    {
      q: "Pyrosilicates contain which of the following discrete anionic units?",
      opts: ["$[\\text{Si}_2\\text{O}_7]^{6-}$", "$[\\text{SiO}_4]^{4-}$", "$[\\text{Si}_6\\text{O}_{18}]^{12-}$", "$[\\text{Si}_4\\text{O}_{11}]^{6-}$"],
      c: 0,
      exp: "Pyrosilicates contain $[\\text{Si}_2\\text{O}_7]^{6-}$ formed by sharing one oxygen atom between two $[\\text{SiO}_4]^{4-}$ tetrahedra (e.g., thortveitite $\\text{Sc}_2\\text{Si}_2\\text{O}_7$)."
    },
    {
      q: "Which of the following oxoacids of nitrogen forms the brown ring in the nitrate test?",
      opts: [
        "$[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$",
        "$[\\text{Fe}(\\text{H}_2\\text{O})_6]^{3+}$",
        "$[\\text{Fe}(\\text{NO})_6]^{2+}$",
        "$[\\text{FeSO}_4\\cdot\\text{NO}_2]$"
      ],
      c: 0,
      exp: "The brown ring is due to the formation of pentaaquanitrosyliron(I) sulfate, $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}\\text{SO}_4$, where iron is in $+1$ oxidation state and $\\text{NO}$ is $+1$."
    },
    {
      q: "In the brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$, what is the oxidation state of iron?",
      opts: ["$+1$", "$+2$", "$+3$", "$0$"],
      c: 0,
      exp: "In the brown ring complex, the nitrosyl ligand donates one electron to $\\text{Fe}^{2+}$ to form $\\text{NO}^+$, leaving iron in the $+1$ oxidation state ($d^7$, $S = 3/2$)."
    },
    {
      q: "Nitrogen forms $p\\pi-p\\pi$ multiple bonds with itself and other small atoms, but phosphorus does not because:",
      opts: [
        "Phosphorus $3p$ orbitals are larger and more diffuse, resulting in poor lateral overlap",
        "Phosphorus has higher electronegativity",
        "Phosphorus has no $p$ orbitals in its valence shell",
        "Phosphorus has a lower ionization enthalpy"
      ],
      c: 0,
      exp: "Phosphorus atoms are larger and their $3p$ orbitals are diffuse, so they cannot undergo effective sideways ($p\\pi-p\\pi$) overlap. Instead, phosphorus prefers single $\\text{P}-\\text{P}$ bonds."
    },
    {
      q: "Which of the following compounds of phosphorus is used in Holme's signals?",
      opts: [
        "A mixture of $\\text{CaC}_2$ and $\\text{Ca}_3\\text{P}_2$",
        "A mixture of $\\text{Ca}_3\\text{P}_2$ and $\\text{P}_4\\text{O}_{10}$",
        "Pure $\\text{PH}_3$",
        "$\\text{PCl}_5$"
      ],
      c: 0,
      exp: "Containers containing $\\text{CaC}_2$ and $\\text{Ca}_3\\text{P}_2$ are pierced and thrown into the sea. They produce acetylene ($\\text{C}_2\\text{H}_2$) and phosphine ($\\text{PH}_3$), where traces of $\\text{P}_2\\text{H}_4$ cause spontaneous ignition, serving as a signal."
    },
    {
      q: "Phosphine ($\\text{PH}_3$) catches fire spontaneously in air because of the presence of impurities of:",
      opts: ["Diphosphine ($\\text{P}_2\\text{H}_4$)", "White phosphorus vapour", "Phosphoric acid", "Hydrogen gas"],
      c: 0,
      exp: "Pure phosphine is non-inflammable, but it becomes spontaneously inflammable in air due to the presence of small amounts of diphosphine ($\\text{P}_2\\text{H}_4$) or $\\text{P}_4$ vapour."
    },
    {
      q: "When $\\text{SO}_2$ gas is passed through an acidified potassium dichromate solution, the solution turns:",
      opts: ["Green due to formation of $\\text{Cr}_2(\\text{SO}_4)_3$", "Colourless", "Deep blue", "Yellow"],
      c: 0,
      exp: "$\\text{SO}_2$ reduces orange $\\text{Cr}_2\\text{O}_7^{2-}$ to green $\\text{Cr}^{3+}$: $\\text{K}_2\\text{Cr}_2\\text{O}_7 + \\text{H}_2\\text{SO}_4 + 3\\text{SO}_2 \\rightarrow \\text{K}_2\\text{SO}_4 + \\text{Cr}_2(\\text{SO}_4)_3 + \\text{H}_2\\text{O}$."
    },
    {
      q: "Which catalyst is used in the Contact Process for the manufacture of sulfuric acid?",
      opts: ["$\\text{V}_2\\text{O}_5$", "$\\text{Fe}_2\\text{O}_3$", "$\\text{Pt}$ wire gauze", "Finely divided $\\text{Ni}$"],
      c: 0,
      exp: "Vanadium pentoxide ($\\text{V}_2\\text{O}_5$) at $720\\text{ K}$ is used as the catalyst in the Contact Process to oxidize $\\text{SO}_2$ to $\\text{SO}_3$."
    },
    {
      q: "Which catalyst is used in Haber's process for the manufacture of ammonia?",
      opts: [
        "Iron oxide with small amounts of $\\text{K}_2\\text{O}$ and $\\text{Al}_2\\text{O}_3$",
        "$\\text{V}_2\\text{O}_5$",
        "$\\text{Pt}-\\text{Rh}$ gauge",
        "Anhydrous $\\text{AlCl}_3$"
      ],
      c: 0,
      exp: "Haber's process uses an iron catalyst with $\\text{K}_2\\text{O}$ and $\\text{Al}_2\\text{O}_3$ as promoters at around $700\\text{ K}$ and $200\\text{ atm}$ pressure."
    },
    {
      q: "Which catalyst is used in Ostwald's process for the manufacture of nitric acid?",
      opts: [
        "$\\text{Pt}/\\text{Rh}$ gauge catalyst",
        "$\\text{V}_2\\text{O}_5$",
        "$\\text{Fe}_2\\text{O}_3$",
        "$\\text{CuCl}_2$"
      ],
      c: 0,
      exp: "Ostwald's process oxidizes ammonia to nitric oxide using a $\\text{Pt}/\\text{Rh}$ gauge catalyst at $500\\text{ K}$ and $9\\text{ bar}$."
    },
    {
      q: "In Deacon's process for the manufacture of chlorine, which catalyst is employed?",
      opts: ["$\\text{CuCl}_2$", "$\\text{V}_2\\text{O}_5$", "$\\text{Fe}_2\\text{O}_3$", "$\\text{MnO}_2$"],
      c: 0,
      exp: "Deacon's process oxidizes $\\text{HCl}$ gas by atmospheric oxygen at $723\\text{ K}$ in the presence of $\\text{CuCl}_2$ catalyst: $4\\text{HCl} + \\text{O}_2 \\rightarrow 2\\text{Cl}_2 + 2\\text{H}_2\\text{O}$."
    },
    {
      q: "Chlorine gas reacts with cold and dilute $\\text{NaOH}$ to yield:",
      opts: [
        "$\\text{NaCl} + \\text{NaOCl} + \\text{H}_2\\text{O}$",
        "$\\text{NaCl} + \\text{NaClO}_3 + \\text{H}_2\\text{O}$",
        "$\\text{NaClO}_4 + \\text{H}_2\\text{O}$",
        "$\\text{NaCl} + \\text{H}_2\\text{O}$ only"
      ],
      c: 0,
      exp: "$2\\text{NaOH (cold and dilute)} + \\text{Cl}_2 \\rightarrow \\text{NaCl} + \\text{NaOCl} + \\text{H}_2\\text{O}$."
    },
    {
      q: "Chlorine gas reacts with hot and concentrated $\\text{NaOH}$ to yield:",
      opts: [
        "$\\text{NaCl} + \\text{NaClO}_3 + \\text{H}_2\\text{O}$",
        "$\\text{NaCl} + \\text{NaOCl} + \\text{H}_2\\text{O}$",
        "$\\text{NaClO}_2 + \\text{H}_2\\text{O}$",
        "$\\text{NaClO}_4 + \\text{NaCl} + \\text{H}_2\\text{O}$"
      ],
      c: 0,
      exp: "$6\\text{NaOH (hot and conc.)} + 3\\text{Cl}_2 \\rightarrow 5\\text{NaCl} + \\text{NaClO}_3 + 3\\text{H}_2\\text{O}$."
    },
    {
      q: "When dry slaked lime $\\text{Ca(OH)}_2$ reacts with chlorine gas, the main product formed is:",
      opts: [
        "Bleaching powder $\\text{CaOCl}_2$",
        "Calcium chlorate $\\text{Ca(ClO}_3)_2$",
        "Calcium chloride only",
        "Calcium perchlorate"
      ],
      c: 0,
      exp: "Chlorine reacts with dry slaked lime to yield bleaching powder: $\\text{Ca(OH)}_2 + \\text{Cl}_2 \\rightarrow \\text{CaOCl}_2 + \\text{H}_2\\text{O}$."
    },
    {
      q: "Aqua regia is a mixture of concentrated $\\text{HCl}$ and concentrated $\\text{HNO}_3$ in what ratio by volume?",
      opts: ["$3 : 1$", "$1 : 3$", "$1 : 1$", "$2 : 1$"],
      c: 0,
      exp: "Aqua regia is prepared by mixing 3 parts of concentrated $\\text{HCl}$ with 1 part of concentrated $\\text{HNO}_3$ by volume ($3:1$ ratio)."
    },
    {
      q: "Gold and platinum dissolve in aqua regia due to the formation of soluble complexes:",
      opts: [
        "$[\\text{AuCl}_4]^-$ and $[\\text{PtCl}_6]^{2-}$",
        "$[\\text{Au(NO}_3)_4]^-$ and $[\\text{Pt(NO}_3)_6]^{2-}$",
        "$[\\text{AuO}_2]^-$ and $[\\text{PtO}_3]^{2-}$",
        "$\\text{AuCl}$ and $\\text{PtCl}_2$"
      ],
      c: 0,
      exp: "$\\text{Au} + 4\\text{H}^+ + \\text{NO}_3^- + 4\\text{Cl}^- \\rightarrow [\\text{AuCl}_4]^- + \\text{NO} + 2\\text{H}_2\\text{O}$ and $3\\text{Pt} + 16\\text{H}^+ + 4\\text{NO}_3^- + 18\\text{Cl}^- \\rightarrow 3[\\text{PtCl}_6]^{2-} + 4\\text{NO} + 8\\text{H}_2\\text{O}$."
    },
    {
      q: "Which of the following halides undergoes disproportionation upon heating?",
      opts: ["$\\text{GaCl}$", "$\\text{GaCl}_3$", "$\\text{InCl}_3$", "$\\text{TlCl}$"],
      c: 0,
      exp: "Monohalides of gallium like $\\text{GaCl}$ are unstable and disproportionate into gallium trihalide and elemental gallium: $3\\text{GaCl} \\rightarrow \\text{GaCl}_3 + 2\\text{Ga}$."
    },
    {
      q: "Which of the following compounds has the highest thermal stability?",
      opts: ["$\\text{HF}$", "$\\text{HCl}$", "$\\text{HBr}$", "$\\text{HI}$"],
      c: 0,
      exp: "$\\text{HF}$ has the highest bond dissociation enthalpy ($574\\text{ kJ/mol}$) among all hydrogen halides and hence the highest thermal stability."
    },
    {
      q: "In which of the following pairs do both species have linear geometry?",
      opts: [
        "$\\text{XeF}_2$ and $\\text{I}_3^-$",
        "$\\text{XeF}_2$ and $\\text{SO}_2$",
        "$\\text{CO}_2$ and $\\text{NO}_2$",
        "$\\text{XeF}_4$ and $\\text{SF}_4$"
      ],
      c: 0,
      exp: "Both $\\text{XeF}_2$ and $\\text{I}_3^-$ have $sp^3d$ hybridization with 3 lone pairs in equatorial positions and 2 bond pairs in axial positions, resulting in a strictly linear geometry."
    },
    {
      q: "The percentage of $s$-character in the hybrid orbitals of carbon in graphite and diamond is:",
      opts: [
        "$33.3\\%$ in graphite, $25\\%$ in diamond",
        "$25\\%$ in graphite, $33.3\\%$ in diamond",
        "$50\\%$ in graphite, $25\\%$ in diamond",
        "$33.3\\%$ in both"
      ],
      c: 0,
      exp: "Graphite is $sp^2$ hybridized ($1/3 = 33.33\\% \\, s$-character), and diamond is $sp^3$ hybridized ($1/4 = 25\\% \\, s$-character)."
    },
    {
      q: "Which of the following allotropes of carbon has a cage-like soccer-ball structure with $60$ carbon atoms?",
      opts: ["Buckminsterfullerene ($\\text{C}_{60}$)", "Graphite", "Diamond", "Carbon nanotubes"],
      c: 0,
      exp: "Buckminsterfullerene has a truncated icosahedron structure resembling a soccer ball, consisting of 20 six-membered rings and 12 five-membered rings."
    },
    {
      q: "In buckminsterfullerene ($\\text{C}_{60}$), how many five-membered rings and six-membered rings are present?",
      opts: [
        "12 five-membered rings and 20 six-membered rings",
        "20 five-membered rings and 12 six-membered rings",
        "12 five-membered rings and 12 six-membered rings",
        "14 five-membered rings and 18 six-membered rings"
      ],
      c: 0,
      exp: "$\\text{C}_{60}$ contains exactly 12 five-membered rings (each fused only to six-membered rings) and 20 six-membered rings (fused to both five- and six-membered rings)."
    },
    {
      q: "Which of the following compounds is an interstitial carbide?",
      opts: ["$\\text{WC}$", "$\\text{CaC}_2$", "$\\text{Al}_4\\text{C}_3$", "$\\text{Be}_2\\text{C}$"],
      c: 0,
      exp: "Transition metals form interstitial carbides like $\\text{WC}, \\text{TiC}$, etc., where small carbon atoms occupy interstitial voids of the metal lattice."
    },
    {
      q: "Which gas is evolved when calcium carbide $\\text{CaC}_2$ is treated with water?",
      opts: ["Acetylene ($\\text{C}_2\\text{H}_2$)", "Methane ($\\text{CH}_4$)", "Ethylene ($\\text{C}_2\\text{H}_4$)", "Ethane ($\\text{C}_2\\text{H}_6$)$"],
      c: 0,
      exp: "$\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2$. Calcium carbide is an acetylide."
    },
    {
      q: "Which gas is evolved when aluminium carbide $\\text{Al}_4\\text{C}_3$ is treated with water?",
      opts: ["Methane ($\\text{CH}_4$)", "Acetylene ($\\text{C}_2\\text{H}_2$)", "Propyne ($\\text{C}_3\\text{H}_4$)", "Ethane ($\\text{C}_2\\text{H}_6$)$"],
      c: 0,
      exp: "$\\text{Al}_4\\text{C}_3 + 12\\text{H}_2\\text{O} \\rightarrow 4\\text{Al(OH)}_3 + 3\\text{CH}_4$. Aluminium carbide contains discrete $\\text{C}^{4-}$ methanide ions."
    },
    {
      q: "Which of the following is an example of an allylide carbide which yields propyne on hydrolysis?",
      opts: ["$\\text{Mg}_2\\text{C}_3$", "$\\text{CaC}_2$", "$\\text{Al}_4\\text{C}_3$", "$\\text{Be}_2\\text{C}$"],
      c: 0,
      exp: "$\\text{Mg}_2\\text{C}_3 + 4\\text{H}_2\\text{O} \\rightarrow 2\\text{Mg(OH)}_2 + \\text{CH}_3\\text{C}\\equiv\\text{CH}$. It contains the $\\text{C}_3^{4-}$ allylide ion."
    },
    {
      q: "Producer gas is a mixture of:",
      opts: [
        "$\\text{CO} + \\text{N}_2$",
        "$\\text{CO} + \\text{H}_2$",
        "$\\text{CO}_2 + \\text{H}_2$",
        "$\\text{CH}_4 + \\text{CO}$"
      ],
      c: 0,
      exp: "Producer gas is formed by passing air over red-hot coke: $2\\text{C} + \\text{O}_2 + 4\\text{N}_2 \\rightarrow 2\\text{CO} + 4\\text{N}_2$."
    },
    {
      q: "Water gas (synthesis gas) is an equimolar mixture of:",
      opts: [
        "$\\text{CO} + \\text{H}_2$",
        "$\\text{CO} + \\text{N}_2$",
        "$\\text{CO}_2 + \\text{H}_2$",
        "$\\text{CH}_4 + \\text{H}_2\\text{O}$"
      ],
      c: 0,
      exp: "Water gas is produced by passing steam over red-hot coke: $\\text{C} + \\text{H}_2\\text{O} \\xrightarrow{1270\\text{ K}} \\text{CO} + \\text{H}_2$."
    },
    {
      q: "Why is carbon monoxide ($\\text{CO}$) poisonous to humans?",
      opts: [
        "It forms carboxyhaemoglobin with haemoglobin which is 300 times more stable than oxyhaemoglobin",
        "It hydrolyzes to form carbonic acid in lungs",
        "It destroys red blood cell membranes",
        "It blocks respiratory tracts physically"
      ],
      c: 0,
      exp: "$\\text{CO}$ binds to haemoglobin about 300 times more strongly than $\\text{O}_2$, forming carboxyhaemoglobin and preventing oxygen transport to body tissues."
    }
  ];

  mcqData.slice(0, 78).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "How many five-membered rings are present in a molecule of buckminsterfullerene ($\\text{C}_{60}$)?",
    "12",
    "$\\text{C}_{60}$ consists of $12$ five-membered rings and $20$ six-membered rings."
  ));
  list.push(createNumerical(st,
    "How many six-membered rings are present in a molecule of buckminsterfullerene ($\\text{C}_{60}$)?",
    "20",
    "Buckminsterfullerene contains $20$ six-membered rings."
  ));
  list.push(createNumerical(st,
    "What is the maximum covalency of nitrogen?",
    "4",
    "Nitrogen has only four valence orbitals ($2s, 2p_x, 2p_y, 2p_z$) and no $d$-orbitals, limiting its maximum covalency to $4$."
  ));
  list.push(createNumerical(st,
    "How many bridging hydrogen atoms are present in a molecule of diborane ($\\text{B}_2\\text{H}_6$)?",
    "2",
    "Diborane contains $2$ bridging hydrogen atoms participating in $3c-2e$ banana bonds."
  ));
  list.push(createNumerical(st,
    "How many terminal hydrogen atoms are present in a molecule of diborane ($\\text{B}_2\\text{H}_6$)?",
    "4",
    "Diborane contains $4$ terminal $\\text{B}-\\text{H}$ bonds."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in $\\text{XeF}_2$?",
    "3",
    "In $\\text{XeF}_2$, xenon has $8$ valence electrons: $2$ used in bonding with fluorine, leaving $6$ non-bonding electrons, which make $3$ lone pairs."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in $\\text{XeF}_4$?",
    "2",
    "In $\\text{XeF}_4$, xenon forms $4$ bonds, leaving $4$ electrons as $2$ lone pairs."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in $\\text{XeF}_6$?",
    "1",
    "In $\\text{XeF}_6$, xenon forms $6$ bonds with fluorine, leaving $2$ electrons as $1$ lone pair."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of sulfur in sulfur hexafluoride ($\\text{SF}_6$)?",
    "6",
    "In $\\text{SF}_6$, each fluorine has an oxidation state of $-1$, so sulfur is in the $+6$ oxidation state."
  ));
  list.push(createNumerical(st,
    "How many $\\text{P}-\\text{P}$ single bonds are present in a tetrahedral molecule of white phosphorus ($\\text{P}_4$)?",
    "6",
    "A tetrahedron with $4$ vertices has $6$ edges, meaning there are $6$ $\\text{P}-\\text{P}$ single bonds in $\\text{P}_4$."
  ));
  list.push(createNumerical(st,
    "What is the value of the $\\text{P}-\\text{P}-\\text{P}$ bond angle (in degrees) in white phosphorus ($\\text{P}_4$)?",
    "60",
    "In white phosphorus, the four phosphorus atoms form a regular tetrahedron with bond angles of $60^\\circ$."
  ));
  list.push(createNumerical(st,
    "How many oxygen atoms are present in the basic silicate tetrahedral unit $[\\text{SiO}_x]^{4-}$? What is $x$?",
    "4",
    "The basic unit of all silicates is the $[\\text{SiO}_4]^{4-}$ tetrahedron, so $x = 4$."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of aluminium in $[\\text{Al(H}_2\\text{O})_6]^{3+}$?",
    "6",
    "In aqueous solution, aluminium forms an octahedral complex $[\\text{Al(H}_2\\text{O})_6]^{3+}$ with a coordination number of $6$."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 2...");
const allPart2 = buildPart2();
console.log(`Total Part 2 questions: ${allPart2.length} (Expected: 117)`);

allPart2.forEach((q, idx) => {
  checkKatex(q.question, `Part2[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part2[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part2[${idx}].explanation`);
});

console.log("All Part 2 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for P-Block Part 2
module.exports = ${JSON.stringify(allPart2, null, 2)};
`;

fs.writeFileSync('scripts/data_pblock_part2.js', fileContent);
console.log("Written scripts/data_pblock_part2.js successfully!");
