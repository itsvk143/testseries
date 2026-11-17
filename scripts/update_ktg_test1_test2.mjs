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

console.log("=== UPDATING KINETIC THEORY TESTS 1 AND 2 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 1: EQUATION OF STATE
// =========================================================================
const test1DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-KT-ES-001",
    question: "The indicator diagram displays three isotherms for a fixed mass of an ideal gas at three distinct absolute temperatures $T_1$, $T_2$, and $T_3$. By drawing an isochoric (constant volume) reference line $V = \\text{constant}$ or otherwise, determine the correct relation among the three temperatures:",
    options: [
      "$T_3 > T_2 > T_1$",
      "$T_1 > T_2 > T_3$",
      "$T_1 = T_2 = T_3$",
      "$T_2 > T_3 > T_1$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test1_q1_boyle_law_pv_isotherms.svg",
    explanation: "According to the ideal gas equation $PV = nRT$, at a constant volume $V_0$, pressure is directly proportional to absolute temperature: $P = \\left(\\frac{nR}{V_0}\\right)T \\implies P \\propto T$.\nIntersecting the three isotherms with a vertical line $V = V_0$, the corresponding pressures on the curves satisfy $P(T_3) > P(T_2) > P(T_1)$. Therefore, the temperatures must satisfy $T_3 > T_2 > T_1$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-KT-ES-002",
    question: "The graph shows $V$ versus $T$ (in Kelvin) isobars for a given sample of an ideal gas at three constant pressures $P_1$, $P_2$, and $P_3$. Based on Charles's law, which of the following relations correctly ranks the three pressures?",
    options: [
      "$P_1 > P_2 > P_3$",
      "$P_1 < P_2 < P_3$",
      "$P_1 = P_2 = P_3$",
      "$P_2 > P_1 > P_3$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test1_q2_charles_law_vt_isobars.svg",
    explanation: "According to Charles's Law and the ideal gas equation, $V = \\left(\\frac{nR}{P}\\right)T$.\nOn a $V-T$ plot, the lines are straight lines passing through the origin with slope $m = \\frac{nR}{P}$.\nHence, the slope is inversely proportional to pressure: $m \\propto \\frac{1}{P}$.\nFrom the diagram, the slopes satisfy $\\text{Slope}_1 > \\text{Slope}_2 > \\text{Slope}_3$.\nTherefore, the pressures satisfy $P_1 < P_2 < P_3$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-KT-ES-003",
    question: "The diagram depicts $P-T$ isochores for a fixed amount of an ideal gas at three constant volumes $V_1$, $V_2$, and $V_3$. Based on Gay-Lussac's law, which of the following statements correctly expresses the relationship among the volumes?",
    options: [
      "$V_1 > V_2 > V_3$",
      "$V_1 < V_2 < V_3$",
      "$V_1 = V_2 = V_3$",
      "$V_2 < V_1 < V_3$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test1_q3_gay_lussac_pt_isochores.svg",
    explanation: "According to Gay-Lussac's Law and the ideal gas law, $P = \\left(\\frac{nR}{V}\\right)T$.\nOn a $P-T$ diagram, the lines passing through absolute zero have slope $m = \\frac{nR}{V} \\propto \\frac{1}{V}$.\nFrom the graph, the line for $V_1$ has the steepest slope, followed by $V_2$, and $V_3$ has the gentlest slope: $\\text{Slope}_1 > \\text{Slope}_2 > \\text{Slope}_3$.\nSince volume is inversely proportional to slope, the volumes must satisfy $V_1 < V_2 < V_3$."
  }
];

const test1ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-KT-ES-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a given mass of an ideal gas at constant temperature, a plot of $PV$ versus $P$ is a horizontal straight line parallel to the pressure axis.\nReason (R): According to Boyle's law, at constant temperature, the product of pressure and volume of a fixed mass of gas remains constant ($PV = \\text{constant}$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Since $PV = \\text{constant}$ at a fixed temperature for an ideal gas, changing the pressure $P$ causes volume $V$ to vary inversely such that their product remains unaltered. Hence, the graph of $PV$ versus $P$ is a horizontal straight line.\nReason (R) is true: Boyle's law explicitly states that at constant temperature, $PV = \\text{constant}$ for an ideal gas.\n(R) is the direct and correct explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-KT-ES-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Equal volumes of all ideal gases under identical conditions of temperature and pressure contain equal numbers of molecules.\nReason (R): The universal gas constant $R$ has the exact same value for all gases, independent of their chemical nature and molecular mass.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: This is Avogadro's hypothesis, which follows directly from the ideal gas equation $N = \\frac{PV}{k_B T}$. If $P, V, T$ are identical, the number of molecules $N$ is identical for any ideal gas.\nReason (R) is true: The universal gas constant $R = 8.314\\text{ J mol}^{-1}\\text{K}^{-1}$ is indeed a universal constant for all gases.\nHowever, Avogadro's law is a consequence of kinetic theory and the molecular equation of state ($PV = N k_B T$), where $k_B = R/N_A$. The universality of $R$ alone does not explain why equal volumes contain equal molecules without the underlying kinetic derivation. Hence, (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-KT-ES-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The density of an ideal gas at a given temperature is directly proportional to its absolute pressure.\nReason (R): For an ideal gas of molar mass $M$, the density is given by $\\rho = \\frac{PM^2}{RT}$.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: From the ideal gas equation, $PV = nRT = \\left(\\frac{m}{M}\\right)RT \\implies P = \\left(\\frac{m}{V}\\right)\\frac{RT}{M} = \\rho \\frac{RT}{M}$. Rearranging gives $\\rho = \\frac{PM}{RT}$. At constant temperature $T$ and for a given gas of molar mass $M$, density $\\rho \\propto P$.\nReason (R) is false: The correct expression for the density of an ideal gas is $\\rho = \\frac{PM}{RT}$, not $\\frac{PM^2}{RT}$. Therefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-KT-ES-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If an enclosed ideal gas at $0^\\circ\\text{C}$ is heated to $100^\\circ\\text{C}$ at constant volume, its pressure increases by a factor of 2.\nReason (R): According to Gay-Lussac's law, the pressure of a fixed mass of gas at constant volume is directly proportional to its absolute temperature in Kelvin.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: Gay-Lussac's law requires absolute temperature in Kelvin: $T_1 = 0^\\circ\\text{C} = 273.15\\text{ K}$, and $T_2 = 100^\\circ\\text{C} = 373.15\\text{ K}$. The ratio of pressures is $\\frac{P_2}{P_1} = \\frac{T_2}{T_1} = \\frac{373.15}{273.15} \\approx 1.366$, not $2$.\nReason (R) is true: By definition of Gay-Lussac's law, $P \\propto T$ where $T$ must strictly be measured on the absolute Kelvin thermodynamic scale.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-KT-ES-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Real gases deviate significantly from ideal gas behavior at high pressures and very low temperatures.\nReason (R): At high pressures and low temperatures, the intermolecular attractive forces between gas molecules and the finite volume occupied by the molecules themselves cannot be neglected.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Under high pressure (molecules crowded together) and low temperature (low kinetic energy), real gases deviate markedly from $PV = nRT$.\nReason (R) is true: The two core assumptions of the ideal gas model are (i) intermolecular forces are negligible and (ii) the volume of molecules is negligible compared to the container volume. At high pressure, molecular volume becomes significant relative to total volume, and at low temperature, intermolecular attractions become comparable to molecular kinetic energy, causing deviation.\n(R) is the correct explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-KT-ES-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The Boltzmann constant $k_B$ has the same physical dimensions as molar heat capacity.\nReason (R): The Boltzmann constant $k_B$ is defined as the universal gas constant per molecule, $k_B = \\frac{R}{N_A}$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: The SI unit of Boltzmann constant $k_B$ is $\\text{J K}^{-1}$, which corresponds to dimensions $[\\text{M L}^2 \\text{T}^{-2} \\text{K}^{-1}]$. Heat capacity $C = \\frac{\\Delta Q}{\\Delta T}$ also has dimensions of $[\\text{M L}^2 \\text{T}^{-2} \\text{K}^{-1}]$ (in $\\text{J K}^{-1}$).\nReason (R) is true: By definition, $k_B = \\frac{R}{N_A}$, representing the gas constant per individual molecule.\nHowever, dimensional equivalence is a mathematical property and not causally explained by the numerical definition $k_B = R/N_A$. Hence, (R) is not the correct explanation of (A)."
  }
];

// =========================================================================
// TEST 2: KINETIC INTERPRETATION OF TEMPERATURE
// =========================================================================
const test2DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-KT-KT-001",
    question: "The diagram depicts a gas molecule of mass $m$ colliding elastically with a container wall of surface area $A$ perpendicular to the $x$-axis. If the molecule approaches the wall with an $x$-component of velocity $+v_x$ and rebounds specularly with $-v_x$, what is the magnitude of momentum transferred to the wall during this single collision?",
    options: [
      "$2 m v_x$",
      "$m v_x$",
      "$\\frac{1}{2} m v_x$",
      "Zero, because the collision is perfectly elastic"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test2_q1_molecular_collision_container_wall.svg",
    explanation: "Initial momentum of the molecule along the $x$-axis: $p_{i,x} = +m v_x$.\nFinal momentum of the molecule after elastic rebound: $p_{f,x} = -m v_x$.\nChange in momentum of the molecule: $\\Delta p_{\\text{molecule}} = p_{f,x} - p_{i,x} = -m v_x - (+m v_x) = -2 m v_x$.\nBy Newton's third law (conservation of momentum), the momentum transferred to the container wall is $\\Delta p_{\\text{wall}} = -\\Delta p_{\\text{molecule}} = +2 m v_x$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-KT-KT-002",
    question: "The graph illustrates the average translational kinetic energy per molecule $\\bar{K}_{\\text{trans}}$ as a function of absolute temperature $T$ (in Kelvin) for an ideal gas. What is the physical significance of the slope of this line and the intercept at $T = 0\\text{ K}$?",
    options: [
      "Slope equals $\\frac{3}{2} k_B$, and average translational kinetic energy becomes zero at $0\\text{ K}$",
      "Slope equals $\\frac{1}{2} k_B$, and molecules retain zero-point kinetic energy at $0\\text{ K}$",
      "Slope depends on the molar mass $M$ of the gas, being greater for heavier molecules",
      "Slope equals $3 R$, and the intercept depends on the volume of the container"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test2_q2_kinetic_energy_vs_absolute_temperature.svg",
    explanation: "According to the kinetic theory of gases, the average translational kinetic energy per molecule is given by $\\bar{K}_{\\text{trans}} = \\frac{3}{2} k_B T$.\nPlotting $\\bar{K}_{\\text{trans}}$ against $T$ yields a straight line passing through the origin ($T = 0\\text{ K}$) with slope equal to $\\frac{d\\bar{K}}{dT} = \\frac{3}{2} k_B$.\nThis slope is universal and completely independent of the gas's chemical identity or molecular mass. At absolute zero ($T = 0\\text{ K}$), classical molecular translational motion ceases completely."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-KT-KT-003",
    question: "The plot displays the root-mean-square speed $v_{\\text{rms}}$ versus $\\sqrt{T}$ for three different gases: Hydrogen ($H_2$, $M = 2\\text{ g/mol}$), Helium ($He$, $M = 4\\text{ g/mol}$), and Oxygen ($O_2$, $M = 32\\text{ g/mol}$). Which of the following statements correctly accounts for the relative steepness of their slopes?",
    options: [
      "The slope is proportional to $\\frac{1}{\\sqrt{M}}$, making the slope greatest for $H_2$ and lowest for $O_2$",
      "The slope is proportional to $\\sqrt{M}$, making the slope greatest for $O_2$ and lowest for $H_2$",
      "The slope depends only on the universal gas constant $R$ and is identical for all gases",
      "The slope is inversely proportional to the square of molar mass ($1/M^2$)"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/ktg/test2_q3_vrms_vs_sqrt_t_and_molar_mass.svg",
    explanation: "The root-mean-square speed of gas molecules is $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\left(\\sqrt{\\frac{3R}{M}}\\right) \\sqrt{T}$.\nOn a plot of $v_{\\text{rms}}$ versus $\\sqrt{T}$, the graph is a straight line through the origin with slope $m = \\sqrt{\\frac{3R}{M}} \\propto \\frac{1}{\\sqrt{M}}$.\nSince molar masses follow $M(H_2) < M(He) < M(O_2)$, the inverse square roots satisfy $\\frac{1}{\\sqrt{M(H_2)}} > \\frac{1}{\\sqrt{M(He)}} > \\frac{1}{\\sqrt{M(O_2)}}$.\nThus, $H_2$ exhibits the steepest slope and $O_2$ exhibits the lowest slope."
  }
];

const test2ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-KT-KT-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the absolute temperature of an ideal gas is quadrupled, the root-mean-square speed ($v_{\\text{rms}}$) of its molecules is doubled.\nReason (R): The root-mean-square speed of an ideal gas is directly proportional to the square root of its absolute temperature ($v_{\\text{rms}} \\propto \\sqrt{T}$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. When $T' = 4T$, $v'_{\\text{rms}} = \\sqrt{\\frac{3R(4T)}{M}} = 2\\sqrt{\\frac{3RT}{M}} = 2 v_{\\text{rms}}$. The speed doubles.\nReason (R) is true: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\implies v_{\\text{rms}} \\propto \\sqrt{T}$.\n(R) is the direct and correct mathematical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-KT-KT-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A vessel contains a mixture of Helium and Oxygen gases in thermal equilibrium at $300\\text{ K}$. The average translational kinetic energy per molecule is identical for both gases.\nReason (R): The average speed of Helium atoms is significantly greater than the average speed of Oxygen molecules at $300\\text{ K}$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Average translational kinetic energy per molecule depends solely on absolute temperature: $\\bar{K} = \\frac{3}{2} k_B T$. Since both gases are in thermal equilibrium at the same temperature ($300\\text{ K}$), $\\bar{K}_{He} = \\bar{K}_{O_2} = \\frac{3}{2} k_B (300\\text{ K})$.\nReason (R) is true: Average speed $v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}} \\propto \\frac{1}{\\sqrt{M}}$. Since $M(He) = 4\\text{ g/mol} < M(O_2) = 32\\text{ g/mol}$, Helium atoms move faster by a factor of $\\sqrt{32/4} = \\sqrt{8} \\approx 2.83$.\nHowever, statement (R) explains why speeds differ, but does NOT explain why kinetic energy is the same. The equality of kinetic energies is explained by $\\bar{K} = \\frac{3}{2}k_B T$. Hence, (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-KT-KT-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The pressure exerted by an ideal gas inside a rigid container is doubled if the speed of each individual molecule is doubled.\nReason (R): According to kinetic theory, the pressure of a gas is given by $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: In a rigid container of fixed volume, density $\\rho = \\frac{Nm}{V} = \\text{constant}$. Kinetic pressure is $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$. If the speed of each molecule is doubled, $v'_{\\text{rms}} = 2 v_{\\text{rms}}$, so $P' = \\frac{1}{3}\\rho (2 v_{\\text{rms}})^2 = 4 \\left(\\frac{1}{3}\\rho v_{\\text{rms}}^2\\right) = 4P$. The pressure quadruples, not doubles.\nReason (R) is true: The kinetic pressure formula is indeed $P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-KT-KT-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Absolute zero temperature ($0\\text{ K}$) cannot be attained by any finite thermodynamic process.\nReason (R): At absolute zero, the pressure of an ideal gas becomes negative according to kinetic theory.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: This is the third law of thermodynamics (Nernst-Simon heat theorem), which states that absolute zero can never be reached in a finite sequence of cooling operations.\nReason (R) is false: According to kinetic theory and the ideal gas equation $P = \\frac{nRT}{V}$, as $T \\to 0$, $P \\to 0$. Pressure becomes zero, never negative.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-KT-KT-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Gas pressure arises entirely from the continuous, random collisions of gas molecules with the walls of the enclosing vessel.\nReason (R): Each molecular collision transfers momentum to the container wall, and the time rate of momentum transfer per unit area constitutes pressure.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: In kinetic theory, molecules undergo random thermal motion and collide elastically with the container walls, producing macroscopic pressure.\nReason (R) is true: By Newton's second law, force is the time rate of change of momentum ($F = \\frac{\\Delta p}{\\Delta t}$). Pressure is normal force per unit area ($P = \\frac{F}{A}$). Continuous molecular bombardment imparts momentum, generating constant macroscopic pressure.\n(R) is the direct and correct physical explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-KT-KT-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The kinetic temperature of a gas is an intensive property.\nReason (R): The total internal translational kinetic energy of an ideal gas depends on the number of moles present in the sample.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: Temperature does not depend on the size or extent of the system; if a gas sample is divided into two halves, each half has the identical temperature $T$. Hence, temperature is an intensive variable.\nReason (R) is true: Total internal kinetic energy $U = \\frac{3}{2} nRT$ is an extensive property proportional to the quantity of gas $n$.\nHowever, the fact that internal energy is extensive does NOT explain why temperature is intensive; the intensive nature of temperature arises because it reflects the *average* kinetic energy per molecule ($T = \\frac{2}{3k_B}\\bar{K}$). Thus, (R) is not the correct explanation of (A)."
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

// Execute updates for Tests 1 & 2
await updateTest(
  "neet-SUBTOPIC-Physics-Equation-of-state",
  [
    "neet-SUBTOPIC-Equation-of-state",
    "neet-SUBTOPIC-Physics-Equation-of-State",
    "neet-SUBTOPIC-Physics-equation-of-state",
    "neet-SUBTOPIC-Physics-Equation-of-state-All-Test",
    "neet-SUBTOPIC-Physics-Equation-of-State-All-Test",
    "neet-SUBTOPIC-Physics-equation-of-state-All-Test"
  ],
  "Equation of state",
  test1DiagramQs,
  test1ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Kinetic-interpretation-of-temperature",
  [
    "neet-SUBTOPIC-Kinetic-interpretation-of-temperature",
    "neet-SUBTOPIC-Physics-Kinetic-Interpretation-of-Temperature",
    "neet-SUBTOPIC-Physics-kinetic-interpretation-of-temperature",
    "neet-SUBTOPIC-Physics-Kinetic-interpretation-of-temperature-All-Test",
    "neet-SUBTOPIC-Physics-Kinetic-Interpretation-of-Temperature-All-Test",
    "neet-SUBTOPIC-Physics-kinetic-interpretation-of-temperature-All-Test"
  ],
  "Kinetic interpretation of temperature",
  test2DiagramQs,
  test2ARQs
);

console.log("\nTests 1 and 2 successfully updated!");
await client.close();
