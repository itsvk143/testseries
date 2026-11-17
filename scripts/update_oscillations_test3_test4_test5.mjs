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

console.log("=== UPDATING OSCILLATIONS & WAVES TESTS 3, 4, AND 5 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 3: SUPERPOSITION OF WAVES
// =========================================================================
const test3DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-OSC-SW-001",
    question: "The diagram depicts two identical transverse wave pulses of equal amplitude $+A$ and $-A$ travelling in opposite directions along a taut string. At the instant of complete destructive interference, the string appears completely straight and horizontal ($y = 0$). Where does the total mechanical energy of the wave reside at this precise instant?",
    options: [
      "The potential energy is zero, and the total mechanical energy resides entirely as the transverse kinetic energy of the moving string particles",
      "The total mechanical energy becomes zero because the waves destroy each other",
      "The kinetic energy is zero, and the total energy resides entirely as elastic potential energy",
      "The energy is converted irreversibly into heat energy within the string"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test3_q1_constructive_destructive_interference_pulses.svg",
    explanation: "According to the principle of conservation of energy:\nAt the exact instant of complete destructive cancellation, the net displacement at every point on the string is zero ($y = 0$). Since the string is completely flat and unstretched, the elastic potential energy is zero ($U = 0$).\nHowever, the transverse velocity of the particles is at its maximum (the particles from the crest are moving downward, and those from the trough are moving upward with maximum velocity $v_p$).\nThus, the total mechanical energy of the pulses is entirely in the form of kinetic energy ($K = E_{\\text{total}}$). As the pulses pass through each other, they emerge completely intact."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-OSC-SW-002",
    question: "The phasor diagram illustrates the vector addition of two interfering harmonic waves of amplitudes $A_1 = 3A_0$ and $A_2 = A_0$ with phase difference $\\phi$. What is the ratio of the maximum possible intensity ($I_{\\max}$) to the minimum possible intensity ($I_{\\min}$) in the resulting interference pattern?",
    options: [
      "$4 : 1$",
      "$9 : 1$",
      "$16 : 1$",
      "$2 : 1$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test3_q2_phasor_addition_resultant_amplitude.svg",
    explanation: "For two interfering waves of amplitudes $A_1$ and $A_2$:\nMaximum resultant amplitude (constructive interference, $\\cos\\phi = 1$): $A_{\\max} = A_1 + A_2 = 3A_0 + A_0 = 4A_0$.\nMinimum resultant amplitude (destructive interference, $\\cos\\phi = -1$): $A_{\\min} = |A_1 - A_2| = |3A_0 - A_0| = 2A_0$.\nSince wave intensity is directly proportional to the square of the amplitude ($I \\propto A^2$):\n$$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_{\\max}}{A_{\\min}}\\right)^2 = \\left(\\frac{4A_0}{2A_0}\\right)^2 = (2)^2 = 4 = 4 : 1$$"
  },
  {
    index: 2,
    commercialId: "NEET-PHY-OSC-SW-003",
    question: "The figure illustrates the reflection of a transverse wave pulse from a rigid boundary (fixed clamp) compared to a free boundary (frictionless ring on a rod). What are the respective phase changes ($\\Delta\\phi$) upon reflection at these two boundaries?",
    options: [
      "$\\Delta\\phi = \\pi\\text{ rad}$ ($180^\\circ$) at the rigid boundary (pulse is inverted), and $\\Delta\\phi = 0$ at the free boundary (pulse remains upright)",
      "$\\Delta\\phi = 0$ at the rigid boundary, and $\\Delta\\phi = \\pi\\text{ rad}$ at the free boundary",
      "$\\Delta\\phi = \\frac{\\pi}{2}\\text{ rad}$ at both boundaries",
      "$\\Delta\\phi = \\pi\\text{ rad}$ at both boundaries, causing inversion in both cases"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test3_q3_wave_reflection_rigid_vs_free_boundary.svg",
    explanation: "1. Reflection from a rigid (fixed) boundary: The fixed end cannot move ($y = 0$). By Newton's third law, the support exerts an equal and opposite downward reaction force on the string as the crest arrives, sending back an inverted pulse (trough). This introduces a phase shift of $\\Delta\\phi = \\pi\\text{ rad}$ ($180^\\circ$).\n2. Reflection from a free boundary: The ring is completely free to slide without friction. As the crest arrives, it overshoots and doubles the amplitude without any downward constraint, reflecting the pulse upright with zero phase change ($\\Delta\\phi = 0$)."
  }
];

const test3ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-OSC-SW-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In the interference of two waves, the total energy of the wave system across the entire medium is conserved, even though intensity varies from point to point.\nReason (R): Interference is a spatial redistribution of energy without any creation or destruction of energy; the energy missing at destructive interference regions appears as excess energy at constructive interference regions.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: The average intensity across a complete cycle or region of interference is $\\bar{I} = I_1 + I_2$, which is identical to the sum of the intensities of the two waves when acting separately.\nReason (R) is true: The cross-term $2\\sqrt{I_1 I_2}\\cos\\phi$ averages to zero over space ($(\\cos\\phi)_{\\text{avg}} = 0$). Energy is simply redirected from dark/quiet zones to bright/loud zones.\n(R) is the exact physical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-OSC-SW-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The principle of linear superposition ($y = y_1 + y_2$) holds strictly for mechanical waves only when the amplitudes of the waves are relatively small.\nReason (R): For small amplitudes, Hooke's law is obeyed by the medium and the governing wave equation is a linear differential equation.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: For very large amplitudes (such as shock waves or explosive blasts), non-linear elastic effects arise and the principle of linear superposition breaks down.\nReason (R) is true: Linear superposition mathematically requires a linear governing wave equation, which stems from linear elasticity (Hooke's law).\nHowever, statement (R) describes the mathematical condition of linearity, while the physical constraint on small amplitudes is specifically related to the elastic limit of the medium. Hence, (R) is not the complete causal explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-OSC-SW-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Two completely independent sound sources of the same nominal frequency never produce a sustained, stationary interference pattern in space.\nReason (R): Two independent sound sources are inherently incapable of emitting sound waves with identical frequencies.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: To produce a steady, observable interference pattern, the two sources must be coherent (maintaining a constant phase difference $\\phi$ over time). Independent sources undergo random phase jumps on atomic/macroscopic scales, causing the positions of maxima and minima to shift too rapidly for human perception.\nReason (R) is false: Two independent electronic synthesizers or identical tuning forks can easily be calibrated to emit sound at the exact same frequency ($f_1 = f_2$); the absence of sustained interference is caused by random relative phase drift (incoherence), not different frequencies.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-OSC-SW-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When two identical sinusoidal waves of amplitude $A$ and phase difference $\\phi = \\pi$ superpose, the resultant amplitude is $2A$.\nReason (R): The resultant amplitude of two interfering waves of amplitudes $A_1$ and $A_2$ with phase difference $\\phi$ is given by $A_{\\text{net}} = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos\\phi}$.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: For $\\phi = \\pi$, $\\cos\\pi = -1$. The resultant amplitude is $A_{\\text{net}} = \\sqrt{A^2 + A^2 + 2A^2(-1)} = \\sqrt{0} = 0$, representing complete destructive cancellation, not $2A$.\nReason (R) is true: The formula $A_{\\text{net}} = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos\\phi}$ is the exact resultant amplitude expression derived from phasor addition.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-OSC-SW-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a transverse wave on a string is reflected from a rigid boundary, a crest is reflected back as a trough.\nReason (R): By Newton's third law, the rigid boundary exerts an equal and opposite downward reaction force on the incoming crest, resulting in an inverted reflected pulse with a phase shift of $\\pi\\text{ rad}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Inversion upon reflection from a rigid wall converts a crest ($+y$) into a trough ($-y$).\nReason (R) is true: The string pulls upward on the wall as the crest arrives; the immovable wall exerts a downward reaction force on the string, which sends an inverted disturbance backward with phase change $\\pi$.\n(R) is the exact physical explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-OSC-SW-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In constructive interference of two waves of equal amplitude $A$, the resultant intensity is 4 times the intensity of either individual wave ($I_{\\max} = 4I_0$).\nReason (R): The speed of a wave in an elastic medium depends on the inertia and elasticity of the medium.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: $A_{\\max} = A + A = 2A$. Since $I \\propto A^2$, $I_{\\max} = (2A)^2 = 4A^2 = 4I_0$.\nReason (R) is true: Wave speed $v = \\sqrt{\\text{elasticity}/\\text{inertia}}$ is a well-known property of wave mechanics.\nHowever, statement (R) refers to propagation velocity, which does not explain why intensity quadruples upon coherent amplitude addition ($I \\propto A^2$). Hence, (R) is not the correct explanation of (A)."
  }
];

// =========================================================================
// TEST 4: STANDING WAVES IN STRINGS AND ORGAN PIPES
// =========================================================================
const test4DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-OSC-STW-001",
    question: "The diagram depicts the first three normal modes of standing waves on a stretched string of length $L$ fixed rigidly at both ends. What is the distance between two consecutive nodes in any given mode, and what is the ratio of the resonant frequencies of the first three harmonics?",
    options: [
      "The distance between consecutive nodes is $\\frac{\\lambda}{2}$, and the frequencies follow $f_1 : f_2 : f_3 = 1 : 2 : 3$",
      "The distance between consecutive nodes is $\\lambda$, and the frequencies follow $f_1 : f_2 : f_3 = 1 : 3 : 5$",
      "The distance between consecutive nodes is $\\frac{\\lambda}{4}$, and the frequencies follow $f_1 : f_2 : f_3 = 1 : 4 : 9$",
      "The distance between consecutive nodes is $\\frac{2\\lambda}{3}$, and the frequencies follow $f_1 : f_2 : f_3 = 1 : 2 : 4$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test4_q1_standing_waves_stretched_string_harmonics.svg",
    explanation: "For standing waves on a string fixed at both ends:\n1. Boundary conditions require nodes ($N$) at both ends ($x = 0$ and $x = L$).\n2. The distance between any two adjacent nodes (or two adjacent antinodes) is always $\\frac{\\lambda}{2}$.\n3. The allowed wavelengths are $L = n\\left(\\frac{\\lambda_n}{2}\\right) \\implies \\lambda_n = \\frac{2L}{n}$, where $n = 1, 2, 3, \\dots$\n4. The resonant frequencies are $f_n = \\frac{v}{\\lambda_n} = n\\left(\\frac{v}{2L}\\right) = n f_1$.\nThus, all harmonics are present, and their frequencies follow the integer ratio $f_1 : f_2 : f_3 = 1 : 2 : 3$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-OSC-STW-002",
    question: "The figure illustrates the longitudinal standing wave modes in an open organ pipe of length $L$. What boundary condition exists at both open ends of the pipe, and what harmonics are generated by an open organ pipe?",
    options: [
      "Displacement antinodes (pressure nodes) exist at both open ends, and all harmonics ($n = 1, 2, 3, 4, \\dots$) are present",
      "Displacement nodes exist at both open ends, and only odd harmonics are present",
      "One open end has a node and the other an antinode, generating only even harmonics",
      "Pressure antinodes exist at both open ends, generating only odd harmonics"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test4_q2_standing_waves_open_organ_pipe_harmonics.svg",
    explanation: "In an open organ pipe:\n1. At both open ends, air molecules are free to oscillate with maximum amplitude into the surrounding atmosphere, creating displacement antinodes (which correspond to pressure nodes where $\\Delta P = 0$).\n2. For the fundamental mode ($n = 1$), there is an antinode at each end and a single node at the center: $L = 2\\left(\\frac{\\lambda_1}{4}\\right) = \\frac{\\lambda_1}{2} \\implies f_1 = \\frac{v}{2L}$.\n3. Higher modes satisfy $L = n\\left(\\frac{\\lambda_n}{2}\\right) \\implies f_n = n\\left(\\frac{v}{2L}\\right) = n f_1$, where $n = 1, 2, 3, 4, \\dots$\nThus, an open organ pipe produces all harmonics (both even and odd integers)."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-OSC-STW-003",
    question: "An open organ pipe and a closed organ pipe have the exact same physical length $L$. Based on their standing wave patterns, what is the ratio of the fundamental frequency of the open pipe ($f_{\\text{open}}$) to that of the closed pipe ($f_{\\text{closed}}$)?",
    options: [
      "$1 : 2$",
      "$2 : 1$",
      "$4 : 1$",
      "$1 : 1$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test4_q3_standing_waves_closed_organ_pipe_harmonics.svg",
    explanation: "For an open organ pipe of length $L$:\nBoth ends are displacement antinodes: $L = \\frac{\\lambda_{\\text{open}}}{2} \\implies \\lambda_{\\text{open}} = 2L$.\nFundamental frequency: $f_{\\text{open}} = \\frac{v}{2L}$.\n\nFor a closed organ pipe of length $L$:\nThe closed end is a displacement node and the open end is an antinode: $L = \\frac{\\lambda_{\\text{closed}}}{4} \\implies \\lambda_{\\text{closed}} = 4L$.\nFundamental frequency: $f_{\\text{closed}} = \\frac{v}{4L}$.\n\nComparing the two fundamental frequencies:\n$$\\frac{f_{\\text{open}}}{f_{\\text{closed}}} = \\frac{v / 2L}{v / 4L} = \\frac{4}{2} = 2 : 1$$"
  }
];

const test4ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-OSC-STW-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): An open organ pipe produces a richer and more musical acoustic quality (timbre) than a closed organ pipe of comparable pitch.\nReason (R): An open organ pipe generates all harmonics (both even and odd integers: $1f_1, 2f_1, 3f_1, 4f_1, \\dots$), whereas a closed organ pipe generates only odd harmonics ($1f_1, 3f_1, 5f_1, \\dots$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: The richness and warmth of a musical tone depend directly on the number and variety of higher overtones/harmonics present.\nReason (R) is true: In an open pipe, $f_n = n f_1$ ($n = 1, 2, 3, \\dots$), giving full harmonic coverage. In a closed pipe, the fixed boundary at the closed end suppresses all even harmonics ($f_n = (2n-1)f_1$), producing a sparser, hollow timbre.\n(R) is the exact physical explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-OSC-STW-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Standing waves do not transport net energy through the medium along the direction of wave propagation.\nReason (R): A standing wave is formed by the superposition of two identical travelling waves propagating in mutually opposite directions with equal speeds and amplitudes.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: In a standing wave, energy remains localized and oscillates back and forth between kinetic energy (when passing through equilibrium) and potential energy (at maximum displacement) within each loop; no energy crosses the nodes.\nReason (R) is true: Superposition of $y_1 = A\\sin(kx - \\omega t)$ and $y_2 = A\\sin(kx + \\omega t)$ produces $y = 2A\\sin(kx)\\cos(\\omega t)$, which is the mathematical definition of a standing wave.\nHowever, statement (R) describes how the standing wave is synthesized, whereas zero net energy transport is specifically proven by calculating the Poynting/energy flux vector across the nodes (where amplitude and displacement are permanently zero). Hence, (R) is not the complete explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-OSC-STW-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the fundamental frequency of a closed organ pipe is $100\\text{ Hz}$, its first overtone has a frequency of $300\\text{ Hz}$.\nReason (R): A closed organ pipe supports both even and odd harmonics of the fundamental frequency.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: For a closed organ pipe, the allowed frequencies are $f_1, 3f_1, 5f_1, \\dots$ The first overtone is the next allowed resonance above the fundamental, which corresponds to the 3rd harmonic: $f_3 = 3 f_1 = 3 \\times 100\\text{ Hz} = 300\\text{ Hz}$.\nReason (R) is false: A closed organ pipe supports ONLY odd harmonics ($1, 3, 5, \\dots$); even harmonics ($2f_1, 4f_1, \\dots$) are completely absent.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-OSC-STW-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a resonance tube experiment using a tuning fork of frequency $f$, the distance between the first and second resonant water column levels is equal to one full wavelength ($\\lambda$).\nReason (R): In a resonance tube, the closed water surface always acts as a displacement node, while the open top end acts as a displacement antinode.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: The first resonance occurs at $l_1 + e = \\frac{\\lambda}{4}$ and the second resonance occurs at $l_2 + e = \\frac{3\\lambda}{4}$. Subtracting the two gives $l_2 - l_1 = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4} = \\frac{\\lambda}{2}$ (half a wavelength), not a full wavelength.\nReason (R) is true: The water boundary prevents air particle motion (displacement node), while the open tube mouth allows free oscillation (displacement antinode).\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-OSC-STW-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If an open organ pipe of fundamental frequency $f$ is dipped vertically halfway into water, the fundamental frequency of the remaining vibrating air column is still $f$.\nReason (R): Halving the length of the air column ($L' = L/2$) while transforming it into a closed organ pipe gives a fundamental frequency $f' = \\frac{v}{4L'} = \\frac{v}{4(L/2)} = \\frac{v}{2L} = f$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: The original open pipe has fundamental frequency $f = \\frac{v}{2L}$. When dipped halfway in water, the bottom end becomes closed by water and the vibrating length becomes $L' = L/2$.\nReason (R) is true: The new closed pipe has fundamental frequency $f' = \\frac{v}{4L'} = \\frac{v}{4(L/2)} = \\frac{v}{2L} = f$.\n(R) is the exact mathematical and physical explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-OSC-STW-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a standing wave established on a string, all particles located between two consecutive nodes vibrate in the exact same phase.\nReason (R): The amplitude of oscillation in a standing wave varies continuously from zero at a node to maximum at an antinode.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: The standing wave equation is $y = 2A\\sin(kx)\\cos(\\omega t)$. For all $x$ between two consecutive nodes (within one loop), $\\sin(kx)$ has the same sign, meaning all particles reach their maximum positive displacement and cross equilibrium simultaneously (in phase).\nReason (R) is true: The spatial factor $|2A\\sin(kx)|$ varies from 0 at $kx = n\\pi$ (nodes) to $2A$ at $kx = (n + 1/2)\\pi$ (antinodes).\nHowever, statement (R) describes the amplitude profile, whereas phase uniformity arises because the time-dependent term $\\cos(\\omega t)$ is factored out independently. Hence, (R) is not the complete causal explanation of (A)."
  }
];

// =========================================================================
// TEST 5: BEATS
// =========================================================================
const test5DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-OSC-BT-001",
    question: "The graph shows the resultant modulated sound waveform produced by the superposition of two tuning forks of slightly different frequencies $f_1 = 256\\text{ Hz}$ and $f_2 = 260\\text{ Hz}$. What is the beat frequency ($f_{\\text{beat}}$) and the time interval between successive intensity maxima (waxing)?",
    options: [
      "$f_{\\text{beat}} = 4\\text{ beats/s}$ ($4\\text{ Hz}$), and the time interval is $0.25\\text{ s}$",
      "$f_{\\text{beat}} = 8\\text{ beats/s}$, and the time interval is $0.125\\text{ s}$",
      "$f_{\\text{beat}} = 2\\text{ beats/s}$, and the time interval is $0.50\\text{ s}$",
      "$f_{\\text{beat}} = 516\\text{ beats/s}$, and the time interval is $0.002\\text{ s}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test5_q1_beat_formation_envelope_waveform.svg",
    explanation: "When two waves of frequencies $f_1$ and $f_2$ superpose:\n1. Beat frequency is the absolute difference between the two frequencies:\n$$f_{\\text{beat}} = |f_1 - f_2| = |256\\text{ Hz} - 260\\text{ Hz}| = 4\\text{ Hz} = 4\\text{ beats per second}$$\n2. The time interval between two successive waxing events (intensity maxima) is the beat period:\n$$T_{\\text{beat}} = \\frac{1}{f_{\\text{beat}}} = \\frac{1}{4\\text{ s}^{-1}} = 0.25\\text{ s}$$"
  },
  {
    index: 1,
    commercialId: "NEET-PHY-OSC-BT-002",
    question: "The diagram depicts the resultant intensity $I(t)$ as a function of time for acoustic beats produced by two harmonic waves of frequencies $f_1$ and $f_2$ ($f_1 > f_2$). What is the time interval $\\Delta t$ required for the sound intensity to transition from a maximum (waxing) to the immediately succeeding minimum (waning)?",
    options: [
      "$\\Delta t = \\frac{1}{2(f_1 - f_2)}$",
      "$\\Delta t = \\frac{1}{f_1 - f_2}$",
      "$\\Delta t = \\frac{2}{f_1 - f_2}$",
      "$\\Delta t = \\frac{1}{4(f_1 - f_2)}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test5_q2_beat_intensity_waxing_waning_graph.svg",
    explanation: "In beat formation:\n1. The time between two consecutive intensity maxima is the full beat period: $T_{\\text{beat}} = \\frac{1}{f_1 - f_2}$.\n2. The intensity waxes and wanes sinusoidally. The time required to go from an intensity maximum to the immediately following intensity minimum is half of the beat period:\n$$\\Delta t = \\frac{T_{\\text{beat}}}{2} = \\frac{1}{2(f_1 - f_2)}$$"
  },
  {
    index: 2,
    commercialId: "NEET-PHY-OSC-BT-003",
    question: "A tuning fork $A$ of unknown frequency produces $5\\text{ beats/second}$ when sounded with a standard tuning fork $B$ of frequency $256\\text{ Hz}$. When fork $A$ is loaded with a small pellet of wax, the beat frequency decreases to $2\\text{ beats/second}$. What is the exact original frequency of tuning fork $A$?",
    options: [
      "$261\\text{ Hz}$",
      "$251\\text{ Hz}$",
      "$258\\text{ Hz}$",
      "$263\\text{ Hz}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/oscillations/test5_q3_tuning_fork_waxing_loading_beat_frequency.svg",
    explanation: "Initial condition: Beat frequency $\\Delta f = |f_A - f_B| = 5\\text{ Hz}$.\nSince $f_B = 256\\text{ Hz}$, the possible initial frequencies for fork $A$ are:\n$f_A = 256 + 5 = 261\\text{ Hz}$ OR $f_A = 256 - 5 = 251\\text{ Hz}$.\n\nEffect of waxing: Loading a tuning fork with wax increases its mass, which decreases its frequency ($f \\propto 1/\\sqrt{m} \\implies f'_A < f_A$).\n- If original $f_A = 261\\text{ Hz}$: Loading wax decreases $f_A$ (e.g., to $258\\text{ Hz}$). The new beat frequency becomes $|258 - 256| = 2\\text{ Hz}$, which matches the observation!\n- If original $f_A = 251\\text{ Hz}$: Loading wax would decrease $f_A$ further (e.g., to $248\\text{ Hz}$), which would INCREASE the beat frequency to $|248 - 256| = 8\\text{ Hz}$ (contradicting the observation).\nTherefore, the original frequency of fork $A$ must be $261\\text{ Hz}$."
  }
];

const test5ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-OSC-BT-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Beats cannot be distinctly detected by the human ear if the difference in frequencies between two sounding bodies exceeds $10\\text{ Hz}$.\nReason (R): Due to the persistence of hearing in humans (approximately $0.1\\text{ s}$), individual intensity pulsations occurring more rapidly than 10 times per second blur into a single continuous sensation of sound.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: When the frequency difference is greater than $10\\text{ Hz}$, the human brain cannot resolve the individual waxes and wanes, and we perceive a continuous sound or a harsh dissonance rather than distinct beats.\nReason (R) is true: The persistence of hearing is about $\\frac{1}{10}\\text{ s} = 0.1\\text{ s}$. Any auditory fluctuation with a period shorter than $0.1\\text{ s}$ (frequency $> 10\\text{ Hz}$) cannot be resolved.\n(R) is the exact physiological explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-OSC-BT-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Piano tuners and orchestra musicians routinely use the phenomenon of beats to tune acoustic instruments to a standard pitch.\nReason (R): When two vibrating instruments produce notes of the exact same frequency, the beat frequency becomes zero and a steady sound of uniform intensity is heard.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: Musicians adjust string tension until the beats slow down and completely vanish, indicating unison.\nReason (R) is true: When $f_1 = f_2$, $f_{\\text{beat}} = |f_1 - f_2| = 0$, so no intensity pulsations occur.\nHowever, statement (R) describes the condition for zero beats, while the tuning method is a practical application relying on listening for the rate of beating. Hence, (R) is not the complete causal explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-OSC-BT-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When two tuning forks of frequencies $256\\text{ Hz}$ and $262\\text{ Hz}$ are sounded simultaneously, 6 beats are heard per second.\nReason (R): The beat frequency produced by two superposing sound waves equals the arithmetic average of their individual frequencies.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion (A) is true: Beat frequency is $f_{\\text{beat}} = |f_1 - f_2| = |256\\text{ Hz} - 262\\text{ Hz}| = 6\\text{ Hz} = 6\\text{ beats/second}$.\nReason (R) is false: The beat frequency equals the difference between the two frequencies ($|f_1 - f_2|$), NOT the arithmetic average. The average frequency $\\frac{f_1 + f_2}{2}$ is the carrier pitch of the sound heard, not the beat frequency.\nTherefore, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-OSC-BT-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When the prongs of a metal tuning fork are filed with a file, its natural frequency of vibration decreases.\nReason (R): The natural frequency of vibration of a tuning fork is inversely proportional to the square root of the effective mass of its prongs ($f \\propto \\frac{1}{\\sqrt{m}}$).",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion (A) is false: Filing the prongs removes metal and decreases their mass $m$. Since $f \\propto \\frac{1}{\\sqrt{m}}$, decreasing the mass INCREASES the frequency of vibration, not decreases.\nReason (R) is true: A tuning fork acts as a cantilever beam oscillator with frequency $f \\propto \\sqrt{\\frac{k}{m}} \\propto \\frac{1}{\\sqrt{m}}$.\nTherefore, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-OSC-BT-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A tuning fork $A$ produces $4\\text{ beats/s}$ with a standard fork $B$ of frequency $300\\text{ Hz}$. If loading fork $A$ with a small amount of wax increases the beat frequency to $6\\text{ beats/s}$, the original frequency of fork $A$ must be $296\\text{ Hz}$.\nReason (R): Loading a fork with wax decreases its frequency; if the original frequency was $296\\text{ Hz}$, decreasing it to $294\\text{ Hz}$ increases the difference with the $300\\text{ Hz}$ fork to $|294 - 300| = 6\\text{ beats/s}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: The possible initial frequencies of fork $A$ are $300 + 4 = 304\\text{ Hz}$ or $300 - 4 = 296\\text{ Hz}$. If $f_A$ were $304\\text{ Hz}$, loading wax would decrease it (e.g. to $302\\text{ Hz}$), which would reduce beats to 2. Since beats increased to 6, $f_A$ must have been $296\\text{ Hz}$, dropping to $294\\text{ Hz}$.\nReason (R) is true: This is the exact step-by-step mathematical reasoning that confirms the initial frequency.\n(R) is the direct and correct explanation of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-OSC-BT-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): During beat formation by two sound waves of amplitudes $A_1$ and $A_2$, the maximum resultant amplitude is $A_1 + A_2$, and the minimum resultant amplitude is $|A_1 - A_2|$.\nReason (R): The phenomenon of beats is observable with longitudinal mechanical waves as well as transverse optical waves under appropriate experimental conditions.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: The envelope of the beat wave oscillates between $A_1 + A_2$ (when the two waves are in phase) and $|A_1 - A_2|$ (when the two waves are in anti-phase).\nReason (R) is true: Beats can be observed in acoustic waves, radio waves, microwaves, and optical lasers (optical heterodyning).\nHowever, statement (R) states the universal wave nature of beats, but does not explain the mathematical formula for the extrema of amplitude. Hence, (R) is not the correct explanation of (A)."
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

// Execute updates for Tests 3, 4, 5
await updateTest(
  "neet-SUBTOPIC-Physics-Superposition-of-waves",
  [
    "neet-SUBTOPIC-Superposition-of-waves",
    "neet-SUBTOPIC-Physics-superposition",
    "neet-SUBTOPIC-Physics-superposition-All-Test",
    "neet-SUBTOPIC-Physics-Superposition",
    "neet-SUBTOPIC-Physics-Superposition-All-Test",
    "neet-SUBTOPIC-Physics-Superposition-of-waves-All-Test",
    "neet-SUBTOPIC-Physics-superposition-of-waves",
    "neet-SUBTOPIC-Physics-superposition-of-waves-All-Test"
  ],
  "Superposition of waves",
  test3DiagramQs,
  test3ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Standing-waves-in-strings-and-organ-pipes",
  [
    "neet-SUBTOPIC-Standing-waves-in-strings-and-organ-pipes",
    "neet-SUBTOPIC-Physics-Standing-waves-in-strings-and-organ-pipes-All-Test",
    "neet-SUBTOPIC-Physics-standing-waves-in-strings-and-organ-pipes",
    "neet-SUBTOPIC-Physics-standing-waves-in-strings-and-organ-pipes-All-Test"
  ],
  "Standing waves in strings and organ pipes",
  test4DiagramQs,
  test4ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Beats",
  [
    "neet-SUBTOPIC-Beats",
    "neet-SUBTOPIC-Physics-Beats-All-Test",
    "neet-SUBTOPIC-Physics-beats",
    "neet-SUBTOPIC-Physics-beats-All-Test"
  ],
  "Beats",
  test5DiagramQs,
  test5ARQs
);

console.log("\nTests 3, 4, and 5 successfully updated!");
await client.close();
