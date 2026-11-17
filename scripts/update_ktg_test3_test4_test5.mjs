import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

console.log("=== UPDATING KINETIC THEORY TESTS 3, 4, AND 5 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 3: DEGREES OF FREEDOM
// =========================================================================
const test3DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-KT-DF-001",
    question: "The diagram depicts a monoatomic gas atom (such as Helium or Argon) modelled as a structureless point mass relative to a three-dimensional Cartesian coordinate system. How many total degrees of freedom ($f$) does this atom possess, and what is the corresponding ratio of specific heats $\\gamma = C_p / C_v$?",
    options: [
      "$f = 3$ (all translational), and $\\gamma = \\frac{5}{3} \\approx 1.67$",
      "$f = 5$ (3 translational + 2 rotational), and $\\gamma = \\frac{7}{5} = 1.40$",
      "$f = 6$ (3 translational + 3 rotational), and $\\gamma = \\frac{4}{3} \\approx 1.33$",
      "$f = 3$ (all rotational), and $\\gamma = 1.25$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test3_q1_degrees_of_freedom_monoatomic.svg",
    explanation: "A monoatomic gas molecule is modelled as a point mass. It can move freely along three mutually perpendicular directions ($x, y, z$), giving 3 translational degrees of freedom ($f = 3$). Because its radius is negligible ($\sim 10^{-10}\\text{ m}$), its moment of inertia about any axis passing through its center is negligible ($I \\approx 0$), making rotational kinetic energy negligibly small ($E_{\\text{rot}} = \\frac{1}{2}I\\omega^2 \\approx 0$).\nThus, $C_v = \\frac{f}{2}R = \\frac{3}{2}R$, $C_p = C_v + R = \\frac{5}{2}R$, and $\\gamma = \\frac{C_p}{C_v} = \\frac{5/2 R}{3/2 R} = \\frac{5}{3} \\approx 1.67$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-KT-DF-002",
    question: "The figure illustrates a rigid dumbbell model of a diatomic gas molecule (such as $O_2$ or $N_2$) oriented along the $x$-axis at ordinary room temperature. Which of the following statements correctly accounts for its active degrees of freedom and adiabatic index $\\gamma$?",
    options: [
      "It has 3 translational and 2 rotational degrees of freedom ($f = 5$), giving $\\gamma = \\frac{7}{5} = 1.40$",
      "It has 3 translational and 3 rotational degrees of freedom ($f = 6$), giving $\\gamma = \\frac{4}{3} \\approx 1.33$",
      "It has 2 translational and 3 rotational degrees of freedom ($f = 5$), giving $\\gamma = \\frac{5}{3} \\approx 1.67$",
      "It has 3 translational and 2 vibrational degrees of freedom ($f = 5$), giving $\\gamma = 1.28$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test3_q2_degrees_of_freedom_diatomic.svg",
    explanation: "A rigid diatomic molecule has:\n1. 3 translational degrees of freedom (motion of center of mass along $x, y, z$).\n2. 2 rotational degrees of freedom (rotation about axes $y$ and $z$ perpendicular to the internuclear bond axis).\nRotation about the internuclear bond axis ($x$-axis) has negligible moment of inertia ($I_x \\approx 0$), so that mode contributes no energy.\nAt room temperature ($~300\\text{ K}$), vibrational modes are not thermally excited.\nTotal active degrees of freedom $f = 3 + 2 = 5$.\n$C_v = \\frac{5}{2}R$, $C_p = \\frac{7}{2}R \\implies \\gamma = \\frac{C_p}{C_v} = \\frac{7}{5} = 1.40$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-KT-DF-003",
    question: "The diagram depicts a non-linear triatomic molecule (such as water vapor, $H_2O$) with a fixed bond angle of $104.5^\\circ$. Neglecting vibrational modes at moderate temperatures, what are its molar heat capacities $C_v$ and $C_p$ and adiabatic exponent $\\gamma$?",
    options: [
      "$C_v = \\frac{5}{2}R$, $C_p = \\frac{7}{2}R$, and $\\gamma = 1.40$",
      "$C_v = 3R$, $C_p = 4R$, and $\\gamma = \\frac{4}{3} \\approx 1.33$",
      "$C_v = \\frac{7}{2}R$, $C_p = \\frac{9}{2}R$, and $\\gamma = 1.28$",
      "$C_v = 4R$, $C_p = 5R$, and $\\gamma = 1.25$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test3_q3_degrees_of_freedom_polyatomic_triangular.svg",
    explanation: "A non-linear polyatomic molecule (like $H_2O$) does not have its atoms lying along a single line. Therefore, it possesses three non-zero principal moments of inertia ($I_x, I_y, I_z \\neq 0$).\nConsequently, it has:\n- 3 translational degrees of freedom\n- 3 rotational degrees of freedom\nTotal degrees of freedom $f = 3 + 3 = 6$.\nMolar heat capacity at constant volume: $C_v = \\frac{f}{2}R = \\frac{6}{2}R = 3R$.\nMolar heat capacity at constant pressure: $C_p = C_v + R = 3R + R = 4R$.\nAdiabatic exponent: $\\gamma = \\frac{C_p}{C_v} = \\frac{4R}{3R} = \\frac{4}{3} \\approx 1.33$."
  }
];

const test3ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-KT-DF-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The ratio of specific heats $\\gamma = C_p/C_v$ for a rigid diatomic gas at room temperature is $1.40$.\nReason (R): A rigid diatomic molecule possesses 5 active degrees of freedom (3 translational and 2 rotational) at room temperature, giving $\\gamma = \\frac{f+2}{f} = \\frac{7}{5} = 1.40$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: For rigid diatomic gases like $O_2$ and $N_2$, $\\gamma = 1.40$ at normal room temperatures.\nReason (R) is true: $f = 3 (\\text{trans}) + 2 (\\text{rot}) = 5$. Using the general relation $\\gamma = 1 + \\frac{2}{f} = \\frac{f+2}{f}$, we get $\\gamma = \\frac{5+2}{5} = \\frac{7}{5} = 1.40$.\n(R) is the exact physical and mathematical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-KT-DF-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The molar heat capacity at constant pressure ($C_p$) of an ideal gas is always greater than its molar heat capacity at constant volume ($C_v$).\nReason (R): Mayer's formula states that for one mole of an ideal gas, $C_p - C_v = R$, where $R$ is the positive universal gas constant.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: When heat is supplied at constant pressure, the gas expands and does external mechanical work ($P\\Delta V$) in addition to increasing its internal energy $\\Delta U$. Hence, more heat is required per degree rise in temperature than at constant volume (where no expansion work is done, $W=0$). Thus $C_p > C_v$.\nReason (R) is true: Mayer's relation $C_p - C_v = R$ holds for all ideal gases.\nHowever, statement (R) is a mathematical statement of Mayer's relation, whereas the physical explanation of why $C_p > C_v$ is the necessity of performing external boundary work during isobaric expansion. Therefore, (R) is not the correct physical explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-KT-DF-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): At extremely low temperatures (below $70\\text{ K}$), molecular Hydrogen ($H_2$) gas exhibits a molar heat capacity $C_v = \\frac{3}{2}R$, behaving effectively like a monoatomic gas.\nReason (R): At temperatures below $70\\text{ K}$, diatomic Hydrogen molecules undergo spontaneous dissociation into isolated atomic Hydrogen.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: At very low temperatures ($T < 70\\text{ K}$), the average thermal kinetic energy $k_B T$ is smaller than the minimum energy separation between rotational quantum energy levels ($\\Delta E_{\\text{rot}}$). Consequently, rotational degrees of freedom freeze out, leaving only the 3 translational modes active, so $C_v = \\frac{3}{2}R$.\nReason (R) is false: Hydrogen molecules do not dissociate at low temperatures; in fact, dissociation requires high temperatures ($> 2000\\text{ K}$) or energetic discharge. The freeze-out of rotational motion is entirely a quantum energy quantization effect.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-KT-DF-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A monoatomic gas molecule possesses both translational and rotational degrees of freedom at ordinary temperatures.\nReason (R): For a structureless spherical point mass, the moment of inertia about any axis passing through its center is negligibly small.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: A monoatomic gas molecule is treated as a point mass. Its rotational moment of inertia is negligible ($I \\approx 0$), meaning that rotational kinetic energy cannot be stored; it possesses ONLY 3 translational degrees of freedom.\nReason (R) is true: The mass of an atom is concentrated in a tiny nucleus ($\sim 10^{-15}\\text{ m}$) surrounded by electrons, giving negligible moment of inertia ($I \\approx 0$).\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-KT-DF-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The adiabatic exponent $\\gamma = C_p/C_v$ of a gas decreases as the atomicity and complexity of its molecules increase.\nReason (R): As the number of degrees of freedom $f$ increases, the ratio $\\gamma = 1 + \\frac{2}{f}$ decreases monotonically.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: For monoatomic ($f=3$), $\\gamma = 1.67$; for rigid diatomic ($f=5$), $\\gamma = 1.40$; for polyatomic ($f=6$), $\\gamma = 1.33$. As molecular complexity increases, $\\gamma$ decreases.\nReason (R) is true: From kinetic theory, $\\gamma = \\frac{C_p}{C_v} = \\frac{(f/2)R + R}{(f/2)R} = 1 + \\frac{2}{f}$. As $f$ increases, $\\frac{2}{f}$ decreases, so $\\gamma$ decreases monotonically.\n(R) is the direct and correct explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-KT-DF-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The adiabatic index $\\gamma$ is a dimensionless physical quantity.\nReason (R): The molar heat capacities $C_p$ and $C_v$ have the SI unit $\\text{J mol}^{-1}\\text{K}^{-1}$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: $\\gamma = \\frac{C_p}{C_v}$ is the ratio of two physical quantities with identical units, hence it is dimensionless.\nReason (R) is true: The SI unit of molar heat capacity is indeed $\\text{J mol}^{-1}\\text{K}^{-1}$.\nHowever, statement (R) simply states the unit of heat capacity, but any ratio of two quantities with the same dimensions is dimensionless by definition of a ratio. Thus, (R) is not the correct explanation of (A)."
  }
];

// =========================================================================
// TEST 4: LAW OF EQUIPARTITION OF ENERGY
// =========================================================================
const test4DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-KT-EE-001",
    question: "The bar diagram shows the distribution of thermal internal energy per mole of a rigid diatomic gas ($O_2$) at room temperature between translational and rotational modes. What is the ratio of its translational internal energy ($E_{\\text{trans}}$) to its rotational internal energy ($E_{\\text{rot}}$)?",
    options: [
      "$3 : 2$",
      "$2 : 3$",
      "$5 : 2$",
      "$1 : 1$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test4_q1_equipartition_energy_split_diatomic.svg",
    explanation: "By the law of equipartition of energy, each active quadratic degree of freedom contributes $\\frac{1}{2}RT$ per mole of gas in thermal equilibrium.\nA rigid diatomic gas has:\n- 3 translational degrees of freedom $\\implies E_{\\text{trans}} = 3 \\times \\left(\\frac{1}{2}RT\\right) = \\frac{3}{2}RT$.\n- 2 rotational degrees of freedom $\\implies E_{\\text{rot}} = 2 \\times \\left(\\frac{1}{2}RT\\right) = RT$.\nThe ratio is $\\frac{E_{\\text{trans}}}{E_{\\text{rot}}} = \\frac{\\frac{3}{2}RT}{RT} = \\frac{3}{2} = 3 : 2$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-KT-EE-002",
    question: "The graph shows the experimentally observed variation of the molar heat capacity at constant volume ($C_v$) with temperature for molecular Hydrogen ($H_2$). What physical phenomenon explains the stepwise plateaus at $\\frac{3}{2}R$, $\\frac{5}{2}R$, and $\\frac{7}{2}R$ as temperature increases?",
    options: [
      "Thermal expansion of the vessel altering the number density of the gas",
      "Sequential quantum activation of translational, rotational, and vibrational degrees of freedom as thermal energy $k_B T$ exceeds their respective excitation thresholds",
      "Progressive chemical dissociation of $H_2$ into $H^+$ ions",
      "Intermolecular Van der Waals forces transitioning between attractive and repulsive regimes"
    ],
    correctOption: "b",
    difficulty: "Medium",
    image: "/images/diagrams/ktg/test4_q2_cv_vs_temperature_hydrogen.svg",
    explanation: "According to quantum mechanics, molecular energy levels are quantized.\n1. At low temperatures ($T < 100\\text{ K}$), $k_B T$ is sufficient only to excite translational motion (continuous energy spectrum), so $f = 3$ and $C_v = \\frac{3}{2}R$.\n2. At room temperatures ($250\\text{ K} - 750\\text{ K}$), $k_B T > \\Delta E_{\\text{rot}}$, so the 2 rotational degrees of freedom become active, yielding $f = 5$ and $C_v = \\frac{5}{2}R$.\n3. At high temperatures ($T > 1000\\text{ K}$), $k_B T > \\Delta E_{\\text{vib}}$, activating the vibrational mode (which contributes 2 quadratic terms: kinetic + potential), giving $f = 5 + 2 = 7$ and $C_v = \\frac{7}{2}R$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-KT-EE-003",
    question: "The plot shows the molar internal energy $U$ versus absolute temperature $T$ for three ideal gases: Monoatomic ($f = 3$), Rigid Diatomic ($f = 5$), and Non-linear Polyatomic ($f = 6$). Which property of the curves corresponds to the molar heat capacity at constant volume $C_v$, and which gas has the greatest slope?",
    options: [
      "The slope $\\frac{dU}{dT}$ represents $C_v$, and the non-linear polyatomic gas has the steepest slope ($3R$)",
      "The area under the curve represents $C_v$, and the monoatomic gas has the largest area",
      "The slope represents $C_p$, and the diatomic gas has the greatest slope",
      "The intercept at $T = 0\\text{ K}$ represents $C_v$, which is identical for all three gases"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test4_q3_internal_energy_vs_temperature_gases.svg",
    explanation: "For one mole of an ideal gas, internal energy is $U = \\frac{f}{2}RT$.\nThe slope of the $U$ versus $T$ curve is $\\frac{dU}{dT} = \\frac{f}{2}R = C_v$.\nComparing the three gases:\n- Monoatomic: $f = 3 \\implies \\text{Slope} = 1.5 R$\n- Diatomic: $f = 5 \\implies \\text{Slope} = 2.5 R$\n- Polyatomic (non-linear): $f = 6 \\implies \\text{Slope} = 3.0 R$\nTherefore, the slope equals $C_v$, and the non-linear polyatomic gas has the steepest slope."
  }
];

const test4ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-KT-EE-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): According to the law of equipartition of energy, the average energy associated with each quadratic degree of freedom of a gas molecule in thermal equilibrium at temperature $T$ is $\\frac{1}{2} k_B T$.\nReason (R): In thermal equilibrium, the total thermal energy of a classical system is distributed equally among all its independent quadratic coordinates of position and momentum.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: The law of equipartition of energy explicitly states that every term in the total energy expression that is quadratic in position or momentum contributes an average energy of $\\frac{1}{2} k_B T$ per molecule.\nReason (R) is true: This is the fundamental statistical mechanics definition of equipartition derived from the Maxwell-Boltzmann distribution.\n(R) is the correct explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-KT-EE-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): During an isothermal expansion of an ideal gas, its internal energy remains strictly constant ($\\Delta U = 0$).\nReason (R): For an ideal gas, internal energy is purely a function of absolute temperature ($U = U(T)$), and does not depend on volume or pressure.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: In an isothermal process, $T = \\text{constant} \\implies \\Delta T = 0$. Since $\\Delta U = n C_v \\Delta T$, the change in internal energy is $\\Delta U = 0$.\nReason (R) is true: Joule's law of ideal gases states that $U$ depends only on $T$ because intermolecular potential energy is zero.\nHowever, statement (R) states Joule's law, while the fact that $\\Delta U = 0$ in an isothermal process is a direct consequence of the definition of 'isothermal' (constant temperature). Hence, (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-KT-EE-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): At high temperatures, each vibrational mode of a diatomic molecule contributes $k_B T$ to its average energy, rather than $\\frac{1}{2} k_B T$.\nReason (R): A vibrational mode possesses only potential energy and zero kinetic energy during oscillation.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: A vibrational mode involves two independent quadratic energy terms: vibrational kinetic energy $\\frac{1}{2} \\mu v_{\\text{vib}}^2$ and vibrational potential energy $\\frac{1}{2} k x^2$. By equipartition, each term contributes $\\frac{1}{2} k_B T$, giving a total of $\\frac{1}{2} k_B T + \\frac{1}{2} k_B T = k_B T$ per vibrational mode.\nReason (R) is false: Vibrational oscillation involves continuous exchange between vibrational kinetic energy and vibrational potential energy; it has both, not zero kinetic energy.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-KT-EE-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The molar heat capacity at constant volume of a monoatomic ideal gas increases linearly with absolute temperature.\nReason (R): A monoatomic gas molecule possesses only three translational degrees of freedom, which remain active at all classical temperatures.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: For a monoatomic ideal gas, $C_v = \\frac{3}{2}R$. This is a constant independent of temperature; it does NOT increase linearly with $T$.\nReason (R) is true: Monoatomic atoms possess only 3 translational degrees of freedom ($f = 3$) which do not change with temperature classically.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-KT-EE-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The total internal energy of one mole of a rigid non-linear triatomic gas at temperature $T$ is $3RT$.\nReason (R): A rigid non-linear triatomic molecule has 6 degrees of freedom (3 translational and 3 rotational), and each degree of freedom contributes $\\frac{1}{2}RT$ per mole.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: For a non-linear triatomic gas like $H_2O$, $U = 3RT$.\nReason (R) is true: $f = 6$. By the law of equipartition of energy, total internal energy per mole is $U = 6 \\times \\left(\\frac{1}{2}RT\\right) = 3RT$.\n(R) is the direct and correct physical explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-KT-EE-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): At a given temperature $T$, the average kinetic energy per degree of freedom is identical for both Helium (monoatomic) and Nitrogen (diatomic).\nReason (R): Helium atoms have a significantly smaller molar mass than Nitrogen molecules ($M_{He} = 4\\text{ g/mol}$ vs $M_{N_2} = 28\\text{ g/mol}$).",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: According to the law of equipartition of energy, the average kinetic energy per degree of freedom is universally $\\frac{1}{2} k_B T$, completely independent of the gas type, molecular mass, or atomicity.\nReason (R) is true: $M_{He} = 4\\text{ g/mol}$ and $M_{N_2} = 28\\text{ g/mol}$.\nHowever, the difference in molar masses explains differences in molecular speeds, but does NOT explain why energy per degree of freedom is identical. Hence, (R) is not the correct explanation of (A)."
  }
];

// =========================================================================
// TEST 5: MEAN FREE PATH AND MOLECULAR SPEEDS
// =========================================================================
const test5DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-KT-MFP-001",
    question: "The graph illustrates the Maxwell-Boltzmann molecular speed distribution $P(v)$ for an ideal gas at temperature $T$. The positions marked on the speed axis represent the most probable speed ($v_{\\text{mp}}$), average speed ($v_{\\text{avg}}$), and root-mean-square speed ($v_{\\text{rms}}$). Which of the following correctly ranks their numerical magnitudes?",
    options: [
      "$v_{\\text{mp}} < v_{\\text{avg}} < v_{\\text{rms}}$",
      "$v_{\\text{rms}} < v_{\\text{avg}} < v_{\\text{mp}}$",
      "$v_{\\text{avg}} < v_{\\text{mp}} < v_{\\text{rms}}$",
      "$v_{\\text{mp}} = v_{\\text{avg}} = v_{\\text{rms}}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test5_q1_maxwell_boltzmann_speed_distribution.svg",
    explanation: "From kinetic theory:\n1. Most probable speed (peak of distribution): $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}} \\approx 1.414 \\sqrt{\\frac{RT}{M}}$\n2. Average speed: $v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}} \\approx 1.596 \\sqrt{\\frac{RT}{M}}$\n3. Root-mean-square speed: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\approx 1.732 \\sqrt{\\frac{RT}{M}}$\nTherefore, their magnitudes strictly follow the inequality: $v_{\\text{mp}} < v_{\\text{avg}} < v_{\\text{rms}}$, with ratio $1 : 1.128 : 1.224$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-KT-MFP-002",
    question: "The plot displays the Maxwell-Boltzmann molecular speed distribution curves for a given gas at two different absolute temperatures $T_1$ and $T_2$ ($T_2 > T_1$). What happens to the peak of the curve and the area under the curve as temperature is increased from $T_1$ to $T_2$?",
    options: [
      "The peak shifts toward the right and flattens (decreases in height), while the total area under the curve remains constant",
      "The peak shifts toward the left and becomes sharper, while the total area increases",
      "The peak height remains constant while shifting right, causing the total area to increase",
      "Both the peak position and peak height increase, because the total number of molecules increases"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test5_q2_maxwell_distribution_two_temperatures.svg",
    explanation: "1. The peak corresponds to the most probable speed $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$. As temperature increases from $T_1$ to $T_2$, $v_{\\text{mp}}$ increases, so the peak shifts to the right along the speed axis.\n2. The total area under the distribution curve represents the total number of molecules $N = \\int_0^\\infty \\frac{dN}{dv} dv$, which is fixed for a given gas sample. Because the curve broadens over a wider range of higher speeds, the peak height must decrease to preserve the constant total area."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-KT-MFP-003",
    question: "The diagram depicts the collision cylinder of cross-sectional area $\\pi d^2$ swept out by a gas molecule of diameter $d$ moving with average speed $v_{\\text{avg}}$ through stationary target molecules. Based on kinetic theory, how does the mean free path $\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}$ depend on temperature $T$ when the gas is heated at constant volume?",
    options: [
      "$\\lambda$ increases directly proportional to $\\sqrt{T}$",
      "$\\lambda$ remains completely unchanged, because the molecular number density $n = N/V$ is constant",
      "$\\lambda$ decreases inversely proportional to $T$",
      "$\\lambda$ increases directly proportional to $T$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test5_q3_mean_free_path_collision_cylinder.svg",
    explanation: "The mean free path of gas molecules is given by $\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}$, where $n = \\frac{N}{V}$ is the number density of molecules.\nWhen the gas is heated at constant volume (isochoric process), the total number of molecules $N$ and the container volume $V$ remain fixed, meaning number density $n$ does not change.\nSince molecular diameter $d$ and $n$ are constant, the mean free path $\\lambda$ remains strictly constant, independent of temperature."
  }
];

const test5ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-KT-MFP-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For any gas at a given temperature, the root-mean-square speed ($v_{\\text{rms}}$) is always greater than the average speed ($v_{\\text{avg}}$).\nReason (R): In any distribution of non-identical positive numbers, the square root of the mean of squares is mathematically strictly greater than the arithmetic mean.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\approx 1.732 \\sqrt{\\frac{RT}{M}}$, while $v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}} \\approx 1.596 \\sqrt{\\frac{RT}{M}}$. Thus $v_{\\text{rms}} > v_{\\text{avg}}$.\nReason (R) is true: By the Cauchy-Schwarz inequality, for any spread of velocities, $\\overline{v^2} > (\\bar{v})^2 \\implies \\sqrt{\\overline{v^2}} > \\bar{v}$.\n(R) is the direct mathematical and physical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-KT-MFP-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal gas enclosed in a rigid container is heated, the mean free path of its molecules remains constant.\nReason (R): As the temperature of the gas rises, the collision frequency of the molecules increases.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Mean free path is $\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}$. In a rigid container, volume $V$ is fixed, so number density $n = N/V$ is constant, making $\\lambda$ constant.\nReason (R) is true: Collision frequency is $\\nu = \\frac{v_{\\text{avg}}}{\\lambda}$. Since $v_{\\text{avg}} \\propto \\sqrt{T}$, collision frequency increases with temperature.\nHowever, statement (R) explains why collisions occur more frequently per second, but does NOT explain why the distance travelled between collisions ($\\lambda$) remains constant. Constant $\\lambda$ is explained by constant number density $n$. Hence, (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-KT-MFP-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the pressure of an ideal gas is doubled at constant temperature, the mean free path of its molecules is halved.\nReason (R): The mean free path of an ideal gas is inversely proportional to the square of its absolute pressure ($\\lambda \\propto 1/P^2$).",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: Using the ideal gas equation $P = n k_B T \\implies n = \\frac{P}{k_B T}$, the mean free path can be expressed as $\\lambda = \\frac{k_B T}{\\sqrt{2}\\pi d^2 P}$. At constant temperature $T$, $\\lambda \\propto \\frac{1}{P}$. When pressure doubles, $\\lambda$ is halved.\nReason (R) is false: The mean free path is inversely proportional to the first power of pressure ($1/P$), not the square of pressure ($1/P^2$).\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-KT-MFP-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In the Maxwell-Boltzmann speed distribution curve, the most probable speed is greater than the root-mean-square speed.\nReason (R): The root-mean-square speed is given by $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, whereas the most probable speed is given by $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: In the Maxwell-Boltzmann distribution, $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}} \\approx 1.414 c$, which is strictly LESS than $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\approx 1.732 c$.\nReason (R) is true: The expressions for $v_{\\text{rms}}$ and $v_{\\text{mp}}$ are correct.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-KT-MFP-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The mean free path of gas molecules increases significantly as the diameter of the molecules decreases.\nReason (R): The effective collision cross-sectional area swept out by a molecule is proportional to the square of its diameter ($\\sigma = \\pi d^2$), so smaller molecules undergo fewer collisions per unit path length.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: $\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n} \\propto \\frac{1}{d^2}$. Smaller molecular diameter $d$ results in a larger mean free path.\nReason (R) is true: A molecule collides only with target molecules whose centers lie within a cylinder of radius $d$ (area $\\pi d^2$). A smaller cross section reduces the collision rate, allowing the molecule to travel further between successive collisions.\n(R) is the direct and correct physical explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-KT-MFP-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The speed of sound in a gas is of the same order of magnitude as the root-mean-square speed of its molecules.\nReason (R): Sound waves are longitudinal mechanical waves that propagate through gases via sequential momentum transfer during molecular collisions.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: Speed of sound is $v_{\\text{sound}} = \\sqrt{\\frac{\\gamma RT}{M}}$, while $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. Since $\\gamma$ ranges between $1.33$ and $1.67$, $v_{\\text{sound}} = \\sqrt{\\frac{\\gamma}{3}} v_{\\text{rms}} \\approx (0.67 - 0.75) v_{\\text{rms}}$, which is of the same order of magnitude.\nReason (R) is true: Sound propagation occurs through molecular collisions where pressure disturbances are transmitted.\nHowever, the quantitative relationship $v_{\\text{sound}} = \\sqrt{\\frac{\\gamma}{3}} v_{\\text{rms}}$ is governed by thermodynamics (Laplace's formula for adiabatic bulk modulus $B = \\gamma P$), not solely the qualitative fact that sound propagates via collisions. Hence, (R) is not the complete explanation of (A)."
  }
];

// Helper to update testPaper and its aliases
async function updateTest(testId, slugAliases, title, diagramQs, arQs) {
  console.log(`\n======================================================`);
  console.log(`Processing Test: ${testId} (${title})`);
  console.log(`======================================================`);

  const primaryDoc = await db.collection('testPapers').findOne({ testId });
  if (!primaryDoc) {
    console.error(`ERROR: Primary testPaper not found: ${testId}`);
    return;
  }

  let finalQuestionIds = [...primaryDoc.questions];

  // 1. Update/Inject Diagram Questions Q1-Q3 (indices 0, 1, 2)
  for (const dq of diagramQs) {
    const existingQId = finalQuestionIds[dq.index];
    const qDoc = {
      question: dq.question,
      options: dq.options,
      correctOption: dq.correctOption,
      difficulty: dq.difficulty,
      image: dq.image,
      explanation: dq.explanation,
      subject: "Physics",
      chapter: "Kinetic Theory",
      canonicalChapter: "Kinetic Theory",
      subtopic: title,
      exam: "NEET",
      examType: "NEET",
      classGrade: "Class 11",
      commercialId: dq.commercialId,
      updatedAt: new Date()
    };

    if (existingQId && ObjectId.isValid(existingQId) && existingQId.length === 24) {
      await db.collection('questionBank').updateOne(
        { _id: new ObjectId(existingQId) },
        { $set: qDoc }
      );
      console.log(`Q${dq.index + 1} DIAGRAM question updated: ${dq.image} (ans=${dq.correctOption})`);
    } else {
      const inserted = await db.collection('questionBank').insertOne({
        ...qDoc,
        createdAt: new Date()
      });
      finalQuestionIds[dq.index] = inserted.insertedId.toString();
      console.log(`Q${dq.index + 1} DIAGRAM question inserted: ${dq.image} (ans=${dq.correctOption})`);
    }
  }

  // 2. Update/Inject Section B AR Questions Q40-Q45 (indices 39 to 44)
  for (const ar of arQs) {
    const existingQId = finalQuestionIds[ar.index];
    const arDoc = {
      question: ar.question,
      options: ar.options,
      correctOption: ar.correctOption,
      difficulty: ar.difficulty,
      explanation: ar.explanation,
      subject: "Physics",
      chapter: "Kinetic Theory",
      canonicalChapter: "Kinetic Theory",
      subtopic: title,
      exam: "NEET",
      examType: "NEET",
      classGrade: "Class 11",
      commercialId: ar.commercialId,
      updatedAt: new Date()
    };

    if (existingQId && ObjectId.isValid(existingQId) && existingQId.length === 24) {
      await db.collection('questionBank').updateOne(
        { _id: new ObjectId(existingQId) },
        { $set: arDoc }
      );
      console.log(`Q${ar.index + 1} Section B AR question updated: ans=${ar.correctOption} (diff=${ar.difficulty})`);
    } else {
      const inserted = await db.collection('questionBank').insertOne({
        ...arDoc,
        createdAt: new Date()
      });
      finalQuestionIds[ar.index] = inserted.insertedId.toString();
      console.log(`Q${ar.index + 1} Section B AR question inserted: ans=${ar.correctOption} (diff=${ar.difficulty})`);
    }
  }

  // Ensure exactly 45 questions
  finalQuestionIds = finalQuestionIds.slice(0, 45);

  // Sync primary testPaper
  await db.collection('testPapers').updateOne(
    { _id: primaryDoc._id },
    {
      $set: {
        title,
        chapter: 'Kinetic Theory',
        canonicalChapter: 'Kinetic Theory',
        subject: 'Physics',
        exam: 'NEET',
        examType: 'NEET',
        classGrade: 'Class 11',
        standardQuestionsCount: 45,
        questionsCount: 45,
        duration: 60,
        totalMarks: 180,
        questions: finalQuestionIds,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Synced primary testPaper ${testId} with 45 questions.`);

  // Sync all aliases
  for (const alias of slugAliases) {
    const aliasDoc = await db.collection('testPapers').findOne({ testId: alias });
    if (aliasDoc) {
      await db.collection('testPapers').updateOne(
        { _id: aliasDoc._id },
        {
          $set: {
            title,
            chapter: 'Kinetic Theory',
            canonicalChapter: 'Kinetic Theory',
            subject: 'Physics',
            exam: 'NEET',
            examType: 'NEET',
            classGrade: 'Class 11',
            standardQuestionsCount: 45,
            questionsCount: 45,
            duration: 60,
            totalMarks: 180,
            questions: finalQuestionIds,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Synced alias testPaper ${alias} with 45 questions.`);
    }
  }
}

// Execute updates for Tests 3, 4, 5
await updateTest(
  "neet-SUBTOPIC-Physics-Degrees-of-freedom",
  [
    "neet-SUBTOPIC-Degrees-of-freedom",
    "neet-SUBTOPIC-Physics-Degrees-of-Freedom",
    "neet-SUBTOPIC-Physics-degrees-of-freedom",
    "neet-SUBTOPIC-Physics-Degrees-of-freedom-All-Test",
    "neet-SUBTOPIC-Physics-Degrees-of-Freedom-All-Test",
    "neet-SUBTOPIC-Physics-degrees-of-freedom-All-Test"
  ],
  "Degrees of freedom",
  test3DiagramQs,
  test3ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Law-of-equipartition-of-energy",
  [
    "neet-SUBTOPIC-Law-of-equipartition-of-energy",
    "neet-SUBTOPIC-Physics-Law-of-Equipartition-of-Energy",
    "neet-SUBTOPIC-Physics-law-of-equipartition-of-energy",
    "neet-SUBTOPIC-Physics-Law-of-equipartition-of-energy-All-Test",
    "neet-SUBTOPIC-Physics-Law-of-Equipartition-of-Energy-All-Test",
    "neet-SUBTOPIC-Physics-law-of-equipartition-of-energy-All-Test"
  ],
  "Law of equipartition of energy",
  test4DiagramQs,
  test4ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms,-average,-most-probable)",
  [
    "neet-SUBTOPIC-Mean-free-path-and-molecular-speeds-rms-average-most-probable",
    "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds",
    "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms-average-most-probable)",
    "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms-average-most-probable)-All-Test",
    "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-All-Test",
    "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-rms-average-most-probable",
    "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-rms-average-most-probable-All-Test",
    "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-(rms-average-most-probable)",
    "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-(rms-average-most-probable)-All-Test",
    "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-rms-average-most-probable",
    "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-rms-average-most-probable-All-Test"
  ],
  "Mean free path and molecular speeds (rms, average, most probable)",
  test5DiagramQs,
  test5ARQs
);

console.log("\nTests 3, 4, and 5 successfully updated!");
await client.close();
