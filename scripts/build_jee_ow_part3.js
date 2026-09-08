const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Standing waves in strings and organ pipes";
const CHAPTER = "Oscillations and Waves";
const SUBJECT = "Physics";

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
  "Assertion is true but Reason is false.",
  "Assertion is false but Reason is true."
];

const questions = [
  // 26 Assertion-Reason Questions
  {
    type: "ASSERTION_REASON",
    question: "Assertion: An open organ pipe produces a richer musical sound than a closed organ pipe of comparable fundamental frequency.\\nReason: An open organ pipe produces all harmonics (both even and odd), whereas a closed organ pipe produces only odd harmonics.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In an open organ pipe, the natural frequencies are integer multiples of the fundamental ($f_n = n f_1$ with $n = 1, 2, 3, 4, \\dots$). In contrast, a closed organ pipe supports only odd harmonics ($f_n = (2n - 1)f_1$ with $n = 1, 2, 3, \\dots$). The presence of both even and odd harmonics enriches the acoustic timbre, making the open pipe sound more full. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a standing wave, no net energy is transported across any cross-section of the medium.\\nReason: A standing wave is formed by the superposition of two identical waves traveling in opposite directions with equal energy flux.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The energy flux of the wave traveling in the $+x$ direction is identically canceled by the equal and opposite energy flux of the wave traveling in the $-x$ direction. Consequently, energy remains confined between nodes, oscillating cyclically between pure potential energy and pure kinetic energy. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a resonance tube experiment, the speed of sound can be accurately determined without knowing the end correction.\\nReason: By taking the difference between the two successive resonance lengths, $\\lambda = 2(l_2 - l_1)$, the end correction $e$ cancels out completely.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The first resonance occurs at $l_1 + e = \\frac{\\lambda}{4}$ and the second resonance at $l_2 + e = \\frac{3\\lambda}{4}$. Subtracting the two gives $l_2 - l_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(l_2 - l_1)$. Thus $v = f\\lambda = 2f(l_2 - l_1)$, which is entirely independent of $e$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a standing wave on a string, the strain in the medium is maximum at the displacement nodes.\\nReason: At displacement nodes, the slope $\\frac{\\partial y}{\\partial x}$ of the string achieves its maximum instantaneous value.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The standing wave equation is $y = 2A\\sin(kx)\\cos(\\omega t)$. The spatial strain is proportional to the slope $\\frac{\\partial y}{\\partial x} = 2kA\\cos(kx)\\cos(\\omega t)$. At displacement nodes, $\\sin(kx) = 0 \\implies |\\cos(kx)| = 1$, where the slope and elastic strain reach their absolute maxima. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When one end of an open organ pipe is closed, its fundamental frequency is halved.\\nReason: The fundamental frequency of an open pipe is $f_o = \\frac{v}{2L}$, whereas for a closed pipe of the same length it is $f_c = \\frac{v}{4L}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In an open pipe, $L = \\frac{\\lambda_o}{2} \\implies f_o = \\frac{v}{2L}$. Closing one end forces a displacement node at that end, so $L = \\frac{\\lambda_c}{4} \\implies f_c = \\frac{v}{4L} = \\frac{f_o}{2}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a standing wave, particles in different segments separated by a node vibrate in opposite phase.\\nReason: For a standing wave $y = 2A\\sin(kx)\\cos(\\omega t)$, the spatial factor $\\sin(kx)$ changes sign as one crosses a node where $kx = n\\pi$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "All particles between two consecutive nodes have the same sign of $\\sin(kx)$ and vibrate in identical phase. When crossing a node, $\\sin(kx)$ changes sign from positive to negative, causing particles in the adjacent loop to vibrate $180^\\circ$ out of phase. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The fundamental frequency of a sonometer wire is inversely proportional to its diameter for a given tension and material density.\\nReason: The linear mass density of a cylindrical wire is given by $\\mu = \\frac{\\pi d^2}{4}\\rho$, making $f = \\frac{1}{L d}\\sqrt{\\frac{T}{\\pi\\rho}}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Fundamental frequency is $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$. Substituting $\\mu = A\\rho = \\frac{\\pi d^2}{4}\\rho$ yields $f = \\frac{1}{2L}\\sqrt{\\frac{4T}{\\pi d^2\\rho}} = \\frac{1}{L d}\\sqrt{\\frac{T}{\\pi\\rho}} \\propto \\frac{1}{d}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an organ pipe, the antinode at an open end does not form exactly at the physical boundary but slightly outside it.\\nReason: Air particles just outside the open end participate in the acoustic vibration, creating an end correction $e \\approx 0.6 r$, where $r$ is the pipe radius.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The reflection of sound waves does not occur abruptly at the open plane of the pipe because the oscillating air column continues slightly into the surrounding medium before spherical decompression occurs. The effective acoustic boundary lies outside by an end correction $e \\approx 0.6r$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: All points on a standing wave between two adjacent nodes pass through their equilibrium positions simultaneously.\\nReason: The time dependence $\\cos(\\omega t)$ is uniform for all particles along the medium.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In $y(x,t) = [2A\\sin(kx)]\\cos(\\omega t)$, the spatial and temporal terms are separated. Whenever $\\cos(\\omega t) = 0$, displacement $y(x,t) = 0$ simultaneously for every particle regardless of its position $x$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a closed organ pipe resonates in its third harmonic, it has two displacement nodes and two displacement antinodes.\\nReason: In a closed pipe, the number of displacement nodes equals the number of displacement antinodes for any resonant mode.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The third harmonic corresponds to $n = 2$ in $f = (2n - 1)\\frac{v}{4L} = \\frac{3v}{4L}$. The wave pattern has a node at the closed end, an antinode at $\\lambda/4$, a node at $\\lambda/2$, and an antinode at the open end ($3\\lambda/4$). Hence there are exactly 2 nodes and 2 antinodes. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a stretched string fixed at both ends is plucked at its center, all even harmonics are absent from the vibration.\\nReason: Plucking the string at its center forces an antinode at the midpoint, whereas even harmonics possess a node at the center.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Even harmonics have frequencies $f_{2k} = 2k\\left(\\frac{v}{2L}\\right)$ with nodes at $x = L/2$. Plucking the string at the exact center establishes a displacement antinode there, exciting only odd harmonics ($n = 1, 3, 5, \\dots$). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When temperature increases, the fundamental frequency of an organ pipe increases while that of a stretched metallic string on a rigid frame decreases.\\nReason: An increase in temperature increases the speed of sound in air, whereas thermal expansion reduces the tension in a wire clamped between rigid supports.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "For an organ pipe, $f = \\frac{v}{2L}$ and $v \\propto \\sqrt{T}$, so $f$ increases. For a metallic wire clamped between rigid walls, thermal expansion slackens the wire: $\\Delta T_{\\text{tension}} = -Y A \\alpha \\Delta T$, reducing tension $T$ and lowering frequency ($f = \\frac{1}{2L}\\sqrt{T/\\mu}$). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a standing wave, the distance between any two consecutive antinodes is equal to $\\frac{\\lambda}{2}$.\\nReason: Antinodes occur at positions where $\\sin(kx) = \\pm 1$, which gives $kx = \\left(n + \\frac{1}{2}\\right)\\pi \\implies x = \\left(n + \\frac{1}{2}\\right)\\frac{\\lambda}{2}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Successive antinodes occur where $kx$ changes by $\\pi$: $k \\Delta x = \\pi \\implies \\frac{2\\pi}{\\lambda}\\Delta x = \\pi \\implies \\Delta x = \\frac{\\lambda}{2}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In Melde's experiment, the frequency of string vibration in the parallel arrangement is half of that in the perpendicular arrangement.\\nReason: In the parallel arrangement, the string completes one full oscillation for every two complete cycles of the tuning fork prong.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the longitudinal (parallel) arrangement, tension is relaxed and tightened twice per cycle of the fork prong, so the string vibrates at $f_{\\text{string}} = \\frac{f_{\\text{fork}}}{2}$. In the transverse (perpendicular) arrangement, the string moves directly with the prong at $f_{\\text{string}} = f_{\\text{fork}}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A closed organ pipe of length $L_1$ and an open organ pipe of length $L_2$ have the same fundamental frequency if $L_2 = 2L_1$.\\nReason: Fundamental frequency of a closed pipe is $\\frac{v}{4L_1}$ and that of an open pipe is $\\frac{v}{2L_2}$, which are equal when $L_2 = 2L_1$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Setting $\\frac{v}{4L_1} = \\frac{v}{2L_2} \\implies 4L_1 = 2L_2 \\implies L_2 = 2L_1$. Thus an open pipe must be twice as long as a closed pipe to have the identical fundamental pitch. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a standing wave, all particles have the same maximum kinetic energy simultaneously.\\nReason: At the instant all particles cross their equilibrium positions, their speeds reach maximum and potential energy is zero everywhere.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When $\\cos(\\omega t) = 1$, elastic strain $\\frac{\\partial y}{\\partial x} = 0$ everywhere, so potential energy vanishes and total energy of the standing wave resides entirely as kinetic energy across the vibrating loops. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the tension in a sonometer wire is quadrupled while keeping length constant, the fundamental frequency is doubled.\\nReason: Fundamental frequency of a stretched string is directly proportional to the square root of the tension ($f \\propto \\sqrt{T}$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "From $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$, when $T' = 4T$, $f' = \\sqrt{4} f = 2f$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For an open organ pipe of diameter $D$, the effective acoustic length is $L + 1.2 D$.\\nReason: An open pipe has two open ends, and each end contributes an end correction of approximately $0.6 D$.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Assertion is false: The end correction is $e \\approx 0.6 r = 0.3 D$, where $r$ is the radius. For two open ends, total end correction is $2e = 1.2 r = 0.6 D$, not $1.2 D$! Thus effective length is $L + 0.6 D$. Reason is also false because $e = 0.6r$, not $0.6D$. Thus Assertion is false.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A string of length $L$ fixed at both ends vibrating in its $n$-th harmonic has $(n - 1)$ internal nodes.\\nReason: The string has total $(n + 1)$ nodes including the two boundary ends, so the number of nodes between the fixed ends is $(n - 1)$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the $n$-th harmonic, the string vibrates in $n$ loops. The total number of nodes is $(n + 1)$. Subtracting the 2 fixed ends leaves $(n - 1)$ internal nodes. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an open organ pipe, the pressure variation is zero at both open ends.\\nReason: Open ends are displacement antinodes where particles move freely, preventing any excess pressure from building up.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "At an open end, air molecules are exposed to the ambient atmosphere at constant pressure $P_0$. Therefore, excess acoustic pressure $\\Delta P$ must be zero, forming a pressure node (which corresponds to a displacement antinode). Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a tuning fork is held over the open end of a resonance tube, maximum sound is heard when the natural frequency of the air column matches the frequency of the fork.\\nReason: Resonance occurs when the driving frequency equals the natural frequency of the vibrating system, resulting in maximum energy transfer.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When the fork's frequency matches one of the natural frequencies of the enclosed air column, forced resonance occurs, maximizing acoustic amplitude and sound loudness. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A closed organ pipe and an open organ pipe of the same length cannot be in resonance with the same tuning fork at their fundamental frequencies.\\nReason: The fundamental frequency of an open pipe is always twice that of a closed pipe of the same length ($f_o = 2 f_c$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because $f_o = \\frac{v}{2L}$ and $f_c = \\frac{v}{4L}$, their fundamental frequencies differ by a factor of 2. A single frequency tuning fork cannot match both fundamental frequencies simultaneously. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The fifth harmonic of an open organ pipe has 5 nodes and 6 antinodes inside the pipe.\\nReason: In the $n$-th harmonic of an open organ pipe, there are $n$ displacement nodes and $(n + 1)$ displacement antinodes.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "For the $n$-th mode of an open pipe, the wave has an antinode at each end and $(n - 1)$ antinodes inside, totaling $(n + 1)$ antinodes, and $n$ displacement nodes. For $n = 5$, there are 5 nodes and 6 antinodes. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Touching a vibrating sonometer wire at one-third of its length establishes the third harmonic.\\nReason: Touching the wire forces a displacement node at that point, which is compatible with modes having nodes at $x = L/3$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Damping the wire with a light touch (like a feather or knife edge) at $x = L/3$ prevents all modes that do not have a node at $L/3$, leaving the third harmonic ($n = 3, 6, \\dots$) to vibrate freely. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The speed of sound in a gas filled inside an organ pipe increases if the gas is replaced by a gas with lower molar mass.\\nReason: Speed of sound in an ideal gas is given by $v = \\sqrt{\\frac{\\gamma RT}{M}}$, which is inversely proportional to the square root of the molar mass $M$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "For a lighter gas (such as helium instead of air), the smaller molar mass $M$ leads to a much higher sound speed $v$, which also raises all the resonant frequencies of the pipe. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a standing wave $y = 2A\\sin(kx)\\cos(\\omega t)$, particles at different positions have different amplitudes but the same frequency.\\nReason: The amplitude of oscillation at position $x$ is $|2A\\sin(kx)|$, which depends on position, while the temporal factor $\\cos(\\omega t)$ has a single angular frequency $\\omega$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Each particle undergoes simple harmonic motion with frequency $\\omega / (2\\pi)$, but its amplitude is modulated spatially by $A(x) = |2A\\sin(kx)|$, varying from 0 at nodes to $2A$ at antinodes. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 7 Multiple Choice Questions (MCQs)
  {
    type: "MCQ",
    question: "An open organ pipe of length $L$ resonates in its fundamental mode. If one of its ends is closed, what is the ratio of its new fundamental frequency to its original fundamental frequency?",
    options: [
      "$\\frac{1}{2}$",
      "$2$",
      "$\\frac{1}{4}$",
      "$4$"
    ],
    correctAnswer: 0,
    explanation: "Original fundamental frequency of open pipe is $f_{\\text{open}} = \\frac{v}{2L}$. When one end is closed, the new fundamental frequency is $f_{\\text{closed}} = \\frac{v}{4L}$. The ratio is $\\frac{f_{\\text{closed}}}{f_{\\text{open}}} = \\frac{v/(4L)}{v/(2L)} = \\frac{1}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A stretched string of length $60\\,\\text{cm}$ and mass per unit length $10^{-3}\\,\\text{kg/m}$ is vibrating in its second overtone under a tension of $160\\,\\text{N}$. What is the frequency of vibration?",
    options: [
      "$1000\\,\\text{Hz}$",
      "$500\\,\\text{Hz}$",
      "$750\\,\\text{Hz}$",
      "$250\\,\\text{Hz}$"
    ],
    correctAnswer: 0,
    explanation: "Wave speed is $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{160}{10^{-3}}} = \\sqrt{160000} = 400\\,\\text{m/s}$. Fundamental frequency is $f_1 = \\frac{v}{2L} = \\frac{400}{2(0.60)} = \\frac{400}{1.2} = \\frac{1000}{3}\\,\\text{Hz}$. The second overtone corresponds to the third harmonic ($n = 3$): $f_3 = 3 f_1 = 3 \\times \\frac{1000}{3} = 1000\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A closed organ pipe has fundamental frequency $220\\,\\text{Hz}$. What is the frequency of its first overtone?",
    options: [
      "$660\\,\\text{Hz}$",
      "$440\\,\\text{Hz}$",
      "$880\\,\\text{Hz}$",
      "$330\\,\\text{Hz}$"
    ],
    correctAnswer: 0,
    explanation: "A closed organ pipe has only odd harmonics: $f_1, 3f_1, 5f_1, \\dots$. The fundamental is $f_1 = 220\\,\\text{Hz}$, and the first overtone is the third harmonic ($3f_1$): $f = 3 \\times 220 = 660\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "In a resonance tube experiment, the first two resonant lengths of the air column are observed at $16.0\\,\\text{cm}$ and $49.0\\,\\text{cm}$ using a tuning fork of frequency $500\\,\\text{Hz}$. The speed of sound in air is:",
    options: [
      "$330\\,\\text{m/s}$",
      "$340\\,\\text{m/s}$",
      "$320\\,\\text{m/s}$",
      "$350\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "The difference between two successive resonances gives half a wavelength: $l_2 - l_1 = \\frac{\\lambda}{2} \\implies 49.0 - 16.0 = 33.0\\,\\text{cm} = \\frac{\\lambda}{2} \\implies \\lambda = 66.0\\,\\text{cm} = 0.66\\,\\text{m}$. Speed of sound is $v = f\\lambda = 500 \\times 0.66 = 330\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A pipe open at both ends has a fundamental frequency of $300\\,\\text{Hz}$. If the speed of sound in air is $330\\,\\text{m/s}$ and the pipe diameter is $5\\,\\text{cm}$, find the actual physical length of the pipe including end corrections:",
    options: [
      "$52.0\\,\\text{cm}$",
      "$55.0\\,\\text{cm}$",
      "$49.0\\,\\text{cm}$",
      "$58.0\\,\\text{cm}$"
    ],
    correctAnswer: 0,
    explanation: "The effective length is $L_{\\text{eff}} = \\frac{v}{2f} = \\frac{330}{2(300)} = \\frac{330}{600} = 0.55\\,\\text{m} = 55.0\\,\\text{cm}$. For an open pipe with two open ends, end correction is $2e = 2(0.6 r) = 1.2 r = 0.6 D$. With $D = 5.0\\,\\text{cm}$, $2e = 0.6(5.0) = 3.0\\,\\text{cm}$. The physical length is $L = L_{\\text{eff}} - 2e = 55.0 - 3.0 = 52.0\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A standing wave is represented by $y = 0.06\\sin(0.5\\pi x)\\cos(40\\pi t)$, where $x$ and $y$ are in meters and $t$ is in seconds. The distance between a node and the immediately adjacent antinode is:",
    options: [
      "$1.0\\,\\text{m}$",
      "$2.0\\,\\text{m}$",
      "$0.5\\,\\text{m}$",
      "$4.0\\,\\text{m}$"
    ],
    correctAnswer: 0,
    explanation: "Here $k = 0.5\\pi\\,\\text{m}^{-1}$. Since $k = \\frac{2\\pi}{\\lambda}$, $\\lambda = \\frac{2\\pi}{0.5\\pi} = 4.0\\,\\text{m}$. The separation between a node and the adjacent antinode is $\\frac{\\lambda}{4} = \\frac{4.0}{4} = 1.0\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A sonometer wire resonates with a tuning fork. If the length of the wire is increased by $20\\%$, by what percentage must the tension be increased so that it continues to resonate at the same frequency?",
    options: [
      "$44\\%$",
      "$20\\%$",
      "$40\\%$",
      "$21\\%$"
    ],
    correctAnswer: 0,
    explanation: "Frequency is $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$. For $f$ to remain constant, $\\frac{\\sqrt{T}}{L} = \\text{constant} \\implies T \\propto L^2$. If length becomes $L' = 1.20 L$, new tension must be $T' = (1.20)^2 T = 1.44 T$, which is a $44\\%$ increase.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 20 Numerical Questions
  {
    type: "NUMERICAL",
    question: "An open organ pipe has a length of $85\\,\\text{cm}$. If the speed of sound in air is $340\\,\\text{m/s}$, what is the fundamental frequency of the pipe in hertz (neglecting end correction)?",
    correctAnswer: 200,
    explanation: "Fundamental frequency is $f = \\frac{v}{2L} = \\frac{340}{2(0.85)} = \\frac{340}{1.70} = 200\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A closed organ pipe has a length of $50\\,\\text{cm}$. If the speed of sound is $340\\,\\text{m/s}$, find the frequency of its fundamental mode in hertz.",
    correctAnswer: 170,
    explanation: "Fundamental frequency is $f = \\frac{v}{4L} = \\frac{340}{4(0.50)} = \\frac{340}{2.0} = 170\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the closed pipe of the previous problem, what is the frequency of the second overtone in hertz?",
    correctAnswer: 850,
    explanation: "The second overtone is the fifth harmonic ($5f_1$): $f = 5 \\times 170 = 850\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A string of length $1.5\\,\\text{m}$ fixed at both ends vibrates in 3 loops (third harmonic) with a frequency of $150\\,\\text{Hz}$. What is the speed of transverse waves on this string in $\\text{m/s}$?",
    correctAnswer: 150,
    explanation: "Length is $L = 3\\left(\\frac{\\lambda}{2}\\right) \\implies 1.5 = 1.5\\lambda \\implies \\lambda = 1.0\\,\\text{m}$. Wave speed is $v = f\\lambda = 150 \\times 1.0 = 150\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a resonance tube apparatus, the first and second resonance lengths are obtained at $l_1 = 17\\,\\text{cm}$ and $l_2 = 53\\,\\text{cm}$. What is the end correction $e$ of the tube in centimeters?",
    correctAnswer: 1,
    explanation: "End correction is $e = \\frac{l_2 - 3l_1}{2} = \\frac{53 - 3(17)}{2} = \\frac{53 - 51}{2} = \\frac{2}{2} = 1\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A standing wave is given by $y = 0.1\\sin(2\\pi x)\\cos(50\\pi t)$, with $x, y$ in meters. What is the distance in centimeters between two consecutive nodes?",
    correctAnswer: 50,
    explanation: "Wave number $k = 2\\pi\\,\\text{m}^{-1} \\implies \\lambda = \\frac{2\\pi}{k} = 1.0\\,\\text{m} = 100\\,\\text{cm}$. Distance between consecutive nodes is $\\frac{\\lambda}{2} = \\frac{100}{2} = 50\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A sonometer wire of length $100\\,\\text{cm}$ has a fundamental frequency of $250\\,\\text{Hz}$. To what length in centimeters must the wire be shortened so that its fundamental frequency becomes $400\\,\\text{Hz}$ under constant tension?",
    correctAnswer: 62.5,
    explanation: "Since $f \\propto 1/L$, $f_1 L_1 = f_2 L_2 \\implies (250)(100) = (400) L_2 \\implies L_2 = \\frac{25000}{400} = 62.5\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "The fundamental frequency of an open organ pipe is $300\\,\\text{Hz}$. What is the frequency of its third harmonic in hertz?",
    correctAnswer: 900,
    explanation: "An open pipe produces all harmonics: $f_n = n f_1$. For $n = 3$, $f_3 = 3 \\times 300 = 900\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "The second overtone of an open pipe has the same frequency as the third overtone of a closed pipe. If the length of the open pipe is $60\\,\\text{cm}$, find the length of the closed pipe in centimeters.",
    correctAnswer: 70,
    explanation: "For the open pipe, second overtone is the 3rd harmonic: $f_{\\text{open}} = 3\\left(\\frac{v}{2L_o}\\right) = \\frac{3v}{2(60)} = \\frac{v}{40}$. For the closed pipe, third overtone is the 7th harmonic: $f_{\\text{closed}} = 7\\left(\\frac{v}{4L_c}\\right) = \\frac{7v}{4L_c}$. Equating frequencies: $\\frac{v}{40} = \\frac{7v}{4L_c} \\implies 4L_c = 280 \\implies L_c = 70\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A wire under a tension of $225\\,\\text{N}$ produces a fundamental note of $300\\,\\text{Hz}$. What should the tension in the wire be in newtons to produce a fundamental note of $400\\,\\text{Hz}$?",
    correctAnswer: 400,
    explanation: "Since $f \\propto \\sqrt{T}$, $\\frac{f_2}{f_1} = \\sqrt{\\frac{T_2}{T_1}} \\implies \\frac{400}{300} = \\frac{4}{3} = \\sqrt{\\frac{T_2}{225}} \\implies \\frac{16}{9} = \\frac{T_2}{225} \\implies T_2 = \\frac{16 \\times 225}{9} = 16 \\times 25 = 400\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a resonance tube experiment, the first resonance occurs at $l_1 = 24.5\\,\\text{cm}$ and the second resonance at $l_2 = 74.5\\,\\text{cm}$. If the frequency of the tuning fork is $340\\,\\text{Hz}$, find the speed of sound in air in $\\text{m/s}$.",
    correctAnswer: 340,
    explanation: "Wavelength is $\\lambda = 2(l_2 - l_1) = 2(74.5 - 24.5) = 2(50.0) = 100\\,\\text{cm} = 1.0\\,\\text{m}$. Speed of sound is $v = f\\lambda = 340 \\times 1.0 = 340\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A standing wave is established on a string of length $120\\,\\text{cm}$ fixed at both ends with 4 antinodes. What is the wavelength of the waves in centimeters?",
    correctAnswer: 60,
    explanation: "Each antinode corresponds to one loop of length $\\lambda/2$. For 4 antinodes, $L = 4\\left(\\frac{\\lambda}{2}\\right) = 2\\lambda \\implies 120 = 2\\lambda \\implies \\lambda = 60\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A pipe open at both ends of length $1.0\\,\\text{m}$ has internal radius $2.5\\,\\text{cm}$. If speed of sound is $340\\,\\text{m/s}$, find its fundamental frequency in hertz taking end correction into account (take $e = 0.6r$). Round to one decimal place.",
    correctAnswer: 165,
    explanation: "End correction is $e = 0.6r = 0.6(2.5) = 1.5\\,\\text{cm}$. For two open ends, total end correction is $2e = 3.0\\,\\text{cm} = 0.03\\,\\text{m}$. Effective length is $L_{\\text{eff}} = 1.0 + 0.03 = 1.03\\,\\text{m}$. Fundamental frequency is $f = \\frac{v}{2L_{\\text{eff}}} = \\frac{340}{2(1.03)} = \\frac{340}{2.06} \\approx 165.0\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform string of mass $10\\,\\text{g}$ and length $1\\,\\text{m}$ is fixed at both ends under a tension of $100\\,\\text{N}$. What is the frequency of its fundamental mode in hertz?",
    correctAnswer: 50,
    explanation: "Linear mass density $\\mu = \\frac{10 \\times 10^{-3}\\,\\text{kg}}{1\\,\\text{m}} = 10^{-2}\\,\\text{kg/m}$. Wave speed is $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{100}{10^{-2}}} = \\sqrt{10000} = 100\\,\\text{m/s}$. Fundamental frequency is $f = \\frac{v}{2L} = \\frac{100}{2(1)} = 50\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "An organ pipe closed at one end has a fundamental frequency of $250\\,\\text{Hz}$ at $27^\\circ\\text{C}$. What is its fundamental frequency in hertz at $127^\\circ\\text{C}$ (take $\\sqrt{4/3} \\approx 1.155$)? Round to nearest integer.",
    correctAnswer: 289,
    explanation: "Speed of sound $v \\propto \\sqrt{T}$. $T_1 = 27 + 273 = 300\\,\\text{K}$ and $T_2 = 127 + 273 = 400\\,\\text{K}$. Therefore $\\frac{f_2}{f_1} = \\sqrt{\\frac{400}{300}} = \\sqrt{\\frac{4}{3}} \\approx 1.1547$. New frequency is $f_2 = 250 \\times 1.1547 = 288.7 \\approx 289\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A standing wave is formed on a string. The amplitude at an antinode is $8\\,\\text{cm}$. What is the amplitude in centimeters of a point on the string located at a distance of $\\lambda/12$ from a node?",
    correctAnswer: 4,
    explanation: "Taking the node at $x = 0$, amplitude is $A(x) = A_0 \\sin(kx)$. Here $A_0 = 8\\,\\text{cm}$ and $kx = \\left(\\frac{2\\pi}{\\lambda}\\right)\\left(\\frac{\\lambda}{12}\\right) = \\frac{\\pi}{6} = 30^\\circ$. The amplitude is $A = 8\\sin(30^\\circ) = 8(0.5) = 4\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In an open organ pipe, the fifth harmonic has a frequency of $1250\\,\\text{Hz}$. What is the fundamental frequency of this pipe in hertz?",
    correctAnswer: 250,
    explanation: "For an open organ pipe, $f_n = n f_1$. For the fifth harmonic, $1250 = 5 f_1 \\implies f_1 = 250\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "The length of a sonometer wire between two fixed bridges is $80\\,\\text{cm}$. Where should a third bridge be placed between them in centimeters from one end so that the fundamental frequencies of the two segments are in the ratio $1:3$?",
    correctAnswer: 60,
    explanation: "Frequencies are inversely proportional to length: $\\frac{f_1}{f_2} = \\frac{l_2}{l_1} = \\frac{1}{3} \\implies l_1 = 3l_2$. Total length is $l_1 + l_2 = 80\\,\\text{cm} \\implies 3l_2 + l_2 = 80 \\implies 4l_2 = 80 \\implies l_2 = 20\\,\\text{cm}$, and $l_1 = 60\\,\\text{cm}$. Thus the bridge is placed at $60\\,\\text{cm}$ from one end.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A cylindrical tube open at both ends has fundamental frequency $f$. When it is dipped vertically into water up to half its length, the fundamental frequency of the remaining vibrating air column is $k f$. What is the value of $k$?",
    correctAnswer: 1,
    explanation: "Initial open pipe frequency is $f = \\frac{v}{2L}$. When dipped halfway into water, the remaining half forms a closed pipe of length $L' = L/2$. The fundamental frequency of this closed pipe is $f' = \\frac{v}{4L'} = \\frac{v}{4(L/2)} = \\frac{v}{2L} = f$. Thus $k = 1$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A stretched string of length $90\\,\\text{cm}$ vibrates in 3 segments. What is the distance between two consecutive antinodes in centimeters?",
    correctAnswer: 30,
    explanation: "The string has 3 loops, so each loop has length $\\frac{\\lambda}{2} = \\frac{90}{3} = 30\\,\\text{cm}$. The distance between two consecutive antinodes equals the length of one loop: $\\frac{\\lambda}{2} = 30\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_ow_part3.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 3 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
