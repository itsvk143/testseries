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

console.log("=== UPDATING OSCILLATIONS & WAVES TESTS 1 AND 2 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 1: SIMPLE HARMONIC MOTION (SHM)
// =========================================================================
const test1DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-OSC-SHM-001",
    question: "The graph illustrates the time-dependent curves of displacement $x(t) = A\\sin(\\omega t)$, velocity $v(t)$, and acceleration $a(t)$ for a particle executing simple harmonic motion (SHM). Which of the following statements correctly expresses the phase relationships among these three physical quantities?",
    options: [
      "Velocity leads displacement by $\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$), acceleration leads velocity by $\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$), and acceleration leads displacement by $\\pi\\text{ rad}$ ($180^\\circ$, in anti-phase)",
      "Displacement leads velocity by $\\frac{\\pi}{2}\\text{ rad}$, and velocity leads acceleration by $\\frac{\\pi}{2}\\text{ rad}$",
      "Displacement, velocity, and acceleration are all in phase, reaching extrema simultaneously",
      "Velocity and acceleration are in phase with each other, but lead displacement by $\\pi\\text{ rad}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test1_q1_shm_displacement_velocity_acceleration_graphs.svg",
    explanation: "In simple harmonic motion:\n1. Displacement: $x(t) = A\\sin(\\omega t)$\n2. Velocity: $v(t) = \\frac{dx}{dt} = \\omega A\\cos(\\omega t) = \\omega A\\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$. Velocity leads displacement by a phase angle of $\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$).\n3. Acceleration: $a(t) = \\frac{dv}{dt} = -\\omega^2 A\\sin(\\omega t) = \\omega^2 A\\sin(\\omega t + \\pi) = \\omega^2 A\\sin\\left(\\omega t + \\frac{\\pi}{2} + \\frac{\\pi}{2}\\right)$. Acceleration leads velocity by $\\frac{\\pi}{2}\\text{ rad}$ and leads displacement by $\\pi\\text{ rad}$ ($180^\\circ$)."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-OSC-SHM-002",
    question: "The diagram depicts the potential energy curve $U(x)$, kinetic energy curve $K(x)$, and total mechanical energy $E$ as functions of displacement $x$ between $-A$ and $+A$ for a harmonic oscillator of force constant $k$. At what displacement $x$ does the kinetic energy of the oscillator equal its potential energy?",
    options: [
      "$x = \\pm \\frac{A}{\\sqrt{2}}$",
      "$x = \\pm \\frac{A}{2}$",
      "$x = \\pm \\frac{A}{4}$",
      "$x = \\pm \\frac{\\sqrt{3}}{2}A$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test1_q2_shm_potential_kinetic_total_energy_parabolas.svg",
    explanation: "For a simple harmonic oscillator of amplitude $A$ and spring constant $k$:\nPotential energy: $U = \\frac{1}{2} k x^2$\nKinetic energy: $K = \\frac{1}{2} k (A^2 - x^2)$\nSetting $K = U$:\n$$\\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k x^2 \\implies A^2 - x^2 = x^2 \\implies 2x^2 = A^2 \\implies x = \\pm \\frac{A}{\\sqrt{2}}$$\nAt these two symmetric positions, $K = U = \\frac{1}{2} E = \\frac{1}{4} k A^2$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-OSC-SHM-003",
    question: "The diagram shows a simple pendulum consisting of a small bob of mass $m$ suspended by a light inextensible string of length $L$, deflected by an angle $\\theta$ from the vertical. Which component of the gravitational force acts as the restoring force towards the equilibrium position, and what is the period of oscillation for small angular displacements?",
    options: [
      "The radial component $mg\\cos\\theta$, with time period $T = 2\\pi\\sqrt{\\frac{m}{g}}$",
      "The tangential component $F_{\\text{restoring}} = -mg\\sin\\theta \\approx -mg\\left(\\frac{x}{L}\\right)$, with time period $T = 2\\pi\\sqrt{\\frac{L}{g}}$",
      "The string tension $T$, with time period $T = 2\\pi\\sqrt{\\frac{g}{L}}$",
      "The net force $mg$, with time period $T = \\pi\\sqrt{\\frac{L}{2g}}$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test1_q3_simple_pendulum_restoring_force_components.svg",
    explanation: "Resolving the weight $mg$ along the radial and tangential directions:\n1. Radial component: $mg\\cos\\theta$ balances the tension $T$ along the string ($T - mg\\cos\\theta = m v^2/L$).\n2. Tangential component: $F_{\\text{tangential}} = -mg\\sin\\theta$ acts perpendicular to the string toward the mean position, serving as the restoring force.\nFor small angular displacements ($\\theta \\ll 1\\text{ rad}$), $\\sin\\theta \\approx \\theta = \\frac{x}{L}$, so $F = -mg\\left(\\frac{x}{L}\\right) = -\\left(\\frac{mg}{L}\\right)x = -k_{\\text{eff}} x$.\nTherefore, $\\omega = \\sqrt{\\frac{k_{\\text{eff}}}{m}} = \\sqrt{\\frac{mg/L}{m}} = \\sqrt{\\frac{g}{L}}$, giving time period $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L}{g}}$, completely independent of the mass $m$."
  }
];

const test1ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-OSC-SHM-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a particle executing simple harmonic motion passes through its mean position, its velocity is maximum while its acceleration is zero.\nReason (R): In simple harmonic motion, the acceleration is directly proportional to displacement ($a = -\\omega^2 x$), so at the mean position ($x = 0$) the acceleration vanishes while speed $v = \\omega\\sqrt{A^2 - x^2}$ reaches its peak value $\\omega A$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: At the mean position $x = 0$, the restoring force $F = -kx = 0$, so acceleration $a = 0$. By conservation of energy, all potential energy is converted into kinetic energy, giving maximum velocity $v_{\\max} = \\omega A$.\nReason (R) is true: By definition of SHM, $a = -\\omega^2 x$. At $x = 0$, $a = 0$. Also $v = \\omega\\sqrt{A^2 - x^2} = \\omega A$.\n(R) is the direct and correct mathematical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-OSC-SHM-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The total mechanical energy of an undamped particle executing simple harmonic motion remains strictly constant with time.\nReason (R): In a simple harmonic oscillator, the restoring force is a conservative force obeying Hooke's law ($F = -kx$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Total energy $E = K + U = \\frac{1}{2}k(A^2 - x^2) + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2$, which is constant at all times.\nReason (R) is true: The work done by a linear restoring force $F = -kx$ depends solely on initial and final positions ($W = -\\Delta U$), making it a conservative force. In the absence of dissipative non-conservative forces (damping), mechanical energy is conserved.\n(R) is the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-OSC-SHM-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If a simple pendulum clock is transported from the Earth to the surface of the Moon, its time period of oscillation increases significantly.\nReason (R): The inertial mass of the pendulum bob decreases on the Moon due to the weaker lunar gravitational field.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: The time period is $T = 2\\pi\\sqrt{\\frac{L}{g}}$. On the Moon, $g_{\\text{moon}} \\approx \\frac{g_{\\text{earth}}}{6}$. Since $g$ is in the denominator under the square root, $T_{\\text{moon}} = \\sqrt{6} T_{\\text{earth}} \\approx 2.45 T_{\\text{earth}}$, so the period increases.\nReason (R) is false: The mass of a body is an intrinsic property representing the amount of matter and inertia; it is invariant and does NOT change on the Moon. Only the weight ($mg$) changes.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-OSC-SHM-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The time period of oscillation of a mass-spring system suspended inside an elevator increases when the elevator accelerates upward with acceleration $a$.\nReason (R): The time period of a mass-spring system depends solely on the mass $m$ and spring constant $k$ ($T = 2\\pi\\sqrt{\\frac{m}{k}}$), and is completely independent of the local acceleration due to gravity or pseudo-forces.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: In a mass-spring system, the restoring force is determined entirely by Hooke's law $F = -kx$. An upward acceleration of the elevator changes only the equilibrium extension ($x_0 = \\frac{m(g+a)}{k}$), but does NOT alter the effective restoring constant $k$ or the oscillating mass $m$. Thus $T = 2\\pi\\sqrt{\\frac{m}{k}}$ remains strictly unchanged.\nReason (R) is true: The formula $T = 2\\pi\\sqrt{\\frac{m}{k}}$ contains no gravity term, confirming that the period is independent of $g$ and frame acceleration.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-OSC-SHM-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A pendulum clock loses time (runs slow) in summer when the ambient temperature rises.\nReason (R): Due to thermal expansion, the effective length $L$ of the pendulum rod increases in summer, which increases its time period $T = 2\\pi\\sqrt{\\frac{L}{g}}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: When a clock runs slow, each oscillation takes longer than standard time, meaning fewer ticks occur in 24 hours, resulting in lost time.\nReason (R) is true: Linear thermal expansion increases the length of the pendulum rod: $L' = L(1 + \\alpha\\Delta T)$. Since $T \\propto \\sqrt{L}$, the time period increases, causing the clock to tick more slowly.\n(R) is the direct and correct physical explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-OSC-SHM-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A hollow spherical bob completely filled with water oscillates as a simple pendulum. If a tiny hole at the bottom allows water to leak out continuously until empty, the time period of oscillation first increases, reaches a maximum, and then decreases back to its initial value.\nReason (R): The time period of a simple pendulum is given by $T = 2\\pi\\sqrt{\\frac{L}{g}}$, where $L$ is the distance from the point of suspension to the center of mass of the oscillating bob.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: As water drains, the center of mass of the bob shifts downward, increasing the effective length $L$, which increases the time period $T$. When the sphere is nearly empty, the center of mass shifts back upward toward the geometric center of the metal shell, so $L$ and $T$ return to their initial values.\nReason (R) is true: The period of a physical/simple pendulum depends on the distance $L$ from the pivot to the center of mass.\nHowever, statement (R) is the general formula for time period, while the specific behavior of increasing and then decreasing is caused by the shifting position of the center of mass during drainage. Hence, (R) is not the complete explanation of (A)."
  }
];

// =========================================================================
// TEST 2: WAVE MOTION
// =========================================================================
const test2DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-OSC-WM-001",
    question: "The diagram depicts a snapshot of a sinusoidal transverse harmonic wave $y = A\\sin(kx - \\omega t)$ propagating along the $+x$-direction with speed $v$ at an instant $t = 0$. Which of the following equations correctly expresses the relationship between the instantaneous transverse particle velocity $v_p$ and the spatial slope of the wave profile $\\frac{\\partial y}{\\partial x}$?",
    options: [
      "$v_p = -v \\left(\\frac{\\partial y}{\\partial x}\\right)$",
      "$v_p = +v \\left(\\frac{\\partial y}{\\partial x}\\right)$",
      "$v_p = -\\frac{1}{v} \\left(\\frac{\\partial y}{\\partial x}\\right)$",
      "$v_p = -v^2 \\left(\\frac{\\partial^2 y}{\\partial x^2}\\right)$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test2_q1_transverse_harmonic_wave_profile.svg",
    explanation: "For any travelling wave of the form $y = f(x - vt)$:\nTransverse particle velocity is $v_p = \\frac{\\partial y}{\\partial t} = f'(x - vt) \\cdot (-v) = -v f'(x - vt)$.\nSpatial slope of the wave profile is $\\frac{\\partial y}{\\partial x} = f'(x - vt) \\cdot (1) = f'(x - vt)$.\nSubstituting $\\frac{\\partial y}{\\partial x}$ gives the fundamental relation:\n$$v_p = -v \\left(\\frac{\\partial y}{\\partial x}\\right)$$\nThis shows that at points where the wave profile has a negative slope (falling curve), the particle moves upward ($v_p > 0$), and where the slope is positive (rising curve), the particle moves downward ($v_p < 0$)."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-OSC-WM-002",
    question: "The figure illustrates a longitudinal sound wave propagating in an air column, showing alternating regions of compression (C) and rarefaction (R) aligned with the excess pressure curve $\\Delta P(x)$. What are the values of particle displacement $s$ and excess pressure $\\Delta P$ at the exact center of a compression?",
    options: [
      "Particle displacement is zero ($s = 0$), and excess pressure is maximum positive ($+\\Delta P_{\\max}$)",
      "Particle displacement is maximum ($s = +s_0$), and excess pressure is zero",
      "Both particle displacement and excess pressure are zero",
      "Particle displacement is maximum ($s = -s_0$), and excess pressure is maximum negative ($-\\Delta P_{\\max}$)"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test2_q2_longitudinal_sound_wave_compression_rarefaction.svg",
    explanation: "In a longitudinal sound wave, the excess pressure is related to particle displacement $s(x, t)$ by $\\Delta P = -B \\left(\\frac{\\partial s}{\\partial x}\\right)$, where $B$ is the bulk modulus.\nIf the displacement wave is $s(x, t) = s_0\\sin(kx - \\omega t)$, then:\n$$\\Delta P = -B k s_0\\cos(kx - \\omega t) = \\Delta P_{\\max} \\cos(kx - \\omega t - \\pi)$$\nThere is a $90^\\circ$ ($\\pi/2\\text{ rad}$) phase difference between displacement and pressure.\nAt the center of a compression, air molecules converge from both sides, so particles pass through their equilibrium positions ($s = 0$) while the density and pressure reach their maximum positive peaks ($\\Delta P = +\\Delta P_{\\max}$)."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-OSC-WM-003",
    question: "The diagram displays two graphs for a travelling harmonic wave: Graph 1 shows the spatial snapshot ($y$ versus $x$ at fixed time), from which the wavelength is determined to be $\\lambda = 0.4\\text{ m}$; Graph 2 shows the temporal history of a single particle ($y$ versus $t$ at fixed position), from which the period is found to be $T = 0.05\\text{ s}$. What is the propagation speed of the wave?",
    options: [
      "$8.0\\text{ m/s}$",
      "$2.0\\text{ m/s}$",
      "$0.02\\text{ m/s}$",
      "$20.0\\text{ m/s}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test2_q3_wave_displacement_vs_time_and_position.svg",
    explanation: "From Graph 1 (snapshot $y$ vs. $x$):\nWavelength $\\lambda$ is the distance between two consecutive crests $\\implies \\lambda = 0.4\\text{ m}$.\nFrom Graph 2 (oscillation $y$ vs. $t$):\nTime period $T$ is the duration of one complete cycle $\\implies T = 0.05\\text{ s}$ (Frequency $f = 1/T = 1/0.05 = 20\\text{ Hz}$).\nThe wave propagation speed is:\n$$v = \\frac{\\lambda}{T} = f \\lambda = (20\\text{ Hz})(0.4\\text{ m}) = 8.0\\text{ m/s}$$"
  }
];

const test2ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-OSC-WM-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The speed of a transverse mechanical wave on a stretched string increases when the tension in the string is increased.\nReason (R): The speed of a transverse wave on a string of linear mass density $\\mu$ under tension $T$ is given by $v = \\sqrt{\\frac{T}{\\mu}}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Increasing the tension increases the restoring force that pulls displaced elements of the string back toward equilibrium, speeding up wave propagation.\nReason (R) is true: The formula $v = \\sqrt{\\frac{T}{\\mu}}$ shows that wave speed is directly proportional to the square root of tension ($v \\propto \\sqrt{T}$).\n(R) is the direct and correct mathematical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-OSC-WM-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Sound waves cannot propagate through an absolute vacuum.\nReason (R): Sound waves are longitudinal mechanical waves that require an elastic material medium with inertia and elasticity for the transmission of compression and rarefaction disturbances.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Sound cannot travel through outer space or a vacuum chamber because there are no particles to transmit mechanical vibrations.\nReason (R) is true: Mechanical waves propagate via elastic collisions between neighboring molecules; without matter (mass density $\\rho$ and bulk modulus $B$), mechanical disturbances cannot exist.\nHowever, statement (R) describes the nature of sound waves in general, while the fact that they cannot travel in vacuum is directly the definition of mechanical versus non-mechanical waves. Hence, (R) is not the complete causal explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-OSC-WM-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a sound wave travels from air into water, its wavelength increases significantly.\nReason (R): When a sound wave enters a denser medium like water, its frequency increases proportionally to the density of the medium.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: The speed of sound in water ($v_{\\text{water}} \\approx 1480\\text{ m/s}$) is much greater than in air ($v_{\\text{air}} \\approx 340\\text{ m/s}$). Since frequency $f$ remains constant across a boundary, $\\lambda = \\frac{v}{f}$, so $\\lambda$ increases by a factor of $1480/340 \\approx 4.35$.\nReason (R) is false: The frequency of a wave is determined solely by the vibrating source producing it; frequency remains strictly constant when a wave transitions across boundaries between different media.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-OSC-WM-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Longitudinal mechanical waves can propagate through solids, liquids, gases, as well as an absolute vacuum.\nReason (R): Longitudinal waves require volume elasticity (bulk modulus) for propagation, which is possessed by solids, liquids, and gases.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: Longitudinal mechanical waves require an elastic material medium and cannot propagate through a vacuum under any circumstances.\nReason (R) is true: Unlike transverse waves which require shear modulus (rigidity, possessed only by solids and liquid surfaces), longitudinal waves require bulk modulus, which is non-zero for all three states of matter (solids, liquids, and gases).\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-OSC-WM-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Laplace corrected Newton's formula for the speed of sound in air by treating the propagation of sound as an adiabatic process rather than an isothermal process.\nReason (R): Compressions and rarefactions occur so rapidly in air that there is no time for heat to flow between adjacent layers, and air is a poor conductor of heat.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Newton assumed isothermal propagation ($B_T = P$), giving $v = \\sqrt{\\frac{P}{\\rho}} \\approx 280\\text{ m/s}$ (about $16\\%$ lower than the experimental value $332\\text{ m/s}$). Laplace introduced the adiabatic bulk modulus $B_S = \\gamma P$, giving $v = \\sqrt{\\frac{\\gamma P}{\\rho}} \\approx 332\\text{ m/s}$, in perfect agreement with experiment.\nReason (R) is true: Sound oscillations occur at audio frequencies (hundreds to thousands of Hz), so the rapid compression produces local heating and rapid rarefaction produces local cooling with negligible thermal conduction.\n(R) is the exact physical reason for Laplace's correction."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-OSC-WM-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): At a constant temperature, the speed of sound in an ideal gas is completely independent of changes in ambient atmospheric pressure.\nReason (R): When the pressure of an ideal gas is increased isothermally, its density increases in the exact same proportion, so the ratio $\\frac{P}{\\rho}$ remains constant.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: Doubling the atmospheric pressure at constant temperature produces no change in the speed of sound.\nReason (R) is true: By Boyle's law ($PV = \\text{const} \\implies P/\\rho = \\text{const}$), doubling $P$ doubles $\\rho$, so $\\frac{P}{\\rho}$ is constant.\nHowever, statement (R) explains Boyle's law behavior, whereas the speed of sound is $v = \\sqrt{\\frac{\\gamma RT}{M}}$, which directly shows that wave speed depends solely on absolute temperature $T$ and molar mass $M$. Thus, (R) is not the complete explanation of (A)."
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
      chapter: "Oscillations and Waves",
      canonicalChapter: "Oscillations and Waves",
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
      chapter: "Oscillations and Waves",
      canonicalChapter: "Oscillations and Waves",
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
        chapter: 'Oscillations and Waves',
        canonicalChapter: 'Oscillations and Waves',
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
            chapter: 'Oscillations and Waves',
            canonicalChapter: 'Oscillations and Waves',
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
  "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion-(SHM)",
  [
    "neet-SUBTOPIC-Simple-Harmonic-Motion-SHM",
    "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion-(SHM)-All-Test",
    "neet-SUBTOPIC-Physics-simple-harmonic-motion-(shm)",
    "neet-SUBTOPIC-Physics-simple-harmonic-motion-(shm)-All-Test",
    "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion",
    "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion-All-Test",
    "neet-SUBTOPIC-Physics-simple-harmonic-motion",
    "neet-SUBTOPIC-Physics-simple-harmonic-motion-All-Test",
    "neet-SUBTOPIC-Physics-SHM",
    "neet-SUBTOPIC-Physics-SHM-All-Test",
    "neet-SUBTOPIC-Physics-shm",
    "neet-SUBTOPIC-Physics-shm-All-Test"
  ],
  "Simple Harmonic Motion (SHM)",
  test1DiagramQs,
  test1ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Wave-motion",
  [
    "neet-SUBTOPIC-Wave-motion",
    "neet-SUBTOPIC-Physics-wave-motion",
    "neet-SUBTOPIC-Physics-Wave-motion-All-Test",
    "neet-SUBTOPIC-Physics-wave-motion-All-Test"
  ],
  "Wave motion",
  test2DiagramQs,
  test2ARQs
);

console.log("\nTests 1 and 2 successfully updated!");
await client.close();
