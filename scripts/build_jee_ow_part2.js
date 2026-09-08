const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Superposition of waves";
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
    question: "Assertion: The principle of superposition applies to linear waves where the restoring force is strictly proportional to displacement.\\nReason: The wave equation is a linear differential equation, so any linear combination of individual solutions is also an exact solution.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The principle of superposition holds for linear physical systems described by linear differential equations. When Hooke's law is obeyed and displacements are small, the net displacement at any point is the algebraic sum of individual displacements: $y = y_1 + y_2$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Interference of sound waves does not violate the law of conservation of energy.\\nReason: In an interference pattern, energy is not created at maxima or destroyed at minima; rather, energy is merely redistributed from regions of destructive interference to regions of constructive interference.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "At maxima, intensity is $I_{\\max} = (A_1 + A_2)^2 > I_1 + I_2$, and at minima, $I_{\\min} = (A_1 - A_2)^2 < I_1 + I_2$. Averaging the intensity over space yields $\\langle I \\rangle = I_1 + I_2$, which equals the sum of intensities of the individual sources. Energy is conserved globally. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two independent light bulbs or independent loudspeakers cannot produce a sustained, stationary interference pattern.\\nReason: Sustained interference requires coherent sources that maintain a strictly constant initial phase difference over time.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Independent sources emit wave trains with random, rapidly fluctuating phase differences on a timescale of picoseconds to nanoseconds. These rapid random phase shifts average the interference cross-term $\\langle \\cos\\phi \\rangle$ to zero, resulting in a uniform background intensity $I = I_1 + I_2$ rather than stationary interference fringes. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When two identical waves of intensity $I_0$ each interfere constructively, the resultant intensity is $4I_0$.\\nReason: For constructive interference, the amplitudes add directly ($A_R = 2A$), and intensity is directly proportional to the square of amplitude ($I \\propto A^2$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "For in-phase interference ($\\phi = 0$), the resultant amplitude is $A_R = A + A = 2A$. Since intensity is proportional to amplitude squared, $I = c A_R^2 = c(2A)^2 = 4 c A^2 = 4I_0$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Complete silence (destructive interference) can be achieved at certain points in space by superposing two sound waves of equal amplitude and frequency.\\nReason: At points where the path difference is an odd multiple of half-wavelength ($\\Delta x = (2n + 1)\\frac{\\lambda}{2}$), the two waves arrive with a phase difference of $\\pi$ radians and cancel completely.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When $\\Delta \\phi = (2n + 1)\\pi$, the displacement from the second wave is $y_2 = A\\sin(\\omega t + \\pi) = -A\\sin(\\omega t) = -y_1$. The net displacement is identically zero ($y = y_1 + y_2 = 0$), producing complete destructive interference. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In Quincke's tube experiment, moving the sliding tube by a distance of $\\lambda/4$ changes a sound maximum into a minimum.\\nReason: Moving the sliding tube by distance $d$ increases the acoustic path length of that branch by $2d$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because sound travels down and returns through the sliding tube, pulling the tube out by distance $d$ lengthens that path by $2d$. When $d = \\lambda/4$, the path difference increases by $2(\\lambda/4) = \\lambda/2$, shifting the relative phase by $\\pi$ radians and transforming constructive interference (maximum) into destructive interference (minimum). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The ratio of maximum intensity to minimum intensity in an interference pattern formed by two waves of amplitudes $A_1$ and $A_2$ is $\\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2$.\\nReason: Maximum amplitude is $(A_1 + A_2)$ and minimum amplitude is $(A_1 - A_2)$, with intensity proportional to the square of amplitude.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "At constructive interference, $A_{\\max} = A_1 + A_2 \\implies I_{\\max} \\propto (A_1 + A_2)^2$. At destructive interference, $A_{\\min} = |A_1 - A_2| \\implies I_{\\min} \\propto (A_1 - A_2)^2$. The ratio is $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two waves with slightly different frequencies cannot produce a stationary interference pattern in space.\\nReason: A frequency difference causes the phase difference between the waves at any fixed spatial point to change continuously with time ($\\Delta \\phi(t) = \\Delta \\omega \\cdot t$), producing beats rather than a static pattern.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "If frequencies differ, $\\phi(t) = (\\omega_1 - \\omega_2)t + \\Delta \\phi_0$. The points of constructive and destructive interference shift continuously in space, so no fixed, time-independent interference fringe pattern can form. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For high contrast interference fringes with deep minima, the interfering waves must have equal or nearly equal amplitudes.\\nReason: If $A_1 = A_2$, the minimum intensity $I_{\\min} = (A_1 - A_2)^2$ drops to absolute zero, yielding maximum fringe visibility $V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}} = 1$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Fringe visibility (contrast) is defined as $V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}} = \\frac{2\\sqrt{I_1 I_2}}{I_1 + I_2} = \\frac{2 A_1 A_2}{A_1^2 + A_2^2}$. This attains its theoretical maximum $V = 1$ when $A_1 = A_2$, giving total darkness at minima. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two mutually perpendicular harmonic waves of identical frequency superpose to trace an elliptical path in general.\\nReason: The parametric equations $x = A\\sin(\\omega t)$ and $y = B\\sin(\\omega t + \\phi)$ combine to form the general conic equation $\\frac{x^2}{A^2} + \\frac{y^2}{B^2} - \\frac{2xy}{AB}\\cos\\phi = \\sin^2\\phi$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Eliminating time $t$ between the two orthogonal equations gives the equation of an ellipse whose axes are tilted relative to the coordinate axes by an angle depending on $\\phi$. When $\\phi = \\pi/2$ and $A = B$, it reduces to a circle. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a medium with non-linear elasticity, the principle of wave superposition breaks down.\\nReason: In non-linear media, the governing differential wave equation contains terms proportional to higher powers of displacement or gradient, so the sum of two solutions is no longer a solution.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When stress is not proportional to strain (e.g. large amplitude shock waves or non-linear optical media), the wave equation contains non-linear terms like $(\\partial y/\\partial x)^2$. Consequently, $L(y_1 + y_2) \\neq L(y_1) + L(y_2) = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When two waves travel in opposite directions with equal frequency and amplitude, they superpose to create a standing wave instead of traveling wave interference.\\nReason: Superposition of $A\\sin(kx - \\omega t)$ and $A\\sin(kx + \\omega t)$ yields $2A\\sin(kx)\\cos(\\omega t)$, in which the spatial profile is stationary and does not propagate.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Using the trigonometric identity $\\sin(A) + \\sin(B) = 2\\sin\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$, the composite displacement factorizes into separate space and time functions $2A\\sin(kx)\\cos(\\omega t)$. The nodes remain permanently at rest. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If two coherent sources have an intensity ratio of $9:1$, the ratio of maximum to minimum intensity in their interference pattern is $4:1$.\\nReason: The ratio of amplitudes is $A_1 / A_2 = \\sqrt{I_1 / I_2} = \\sqrt{9/1} = 3$, giving $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{3 + 1}{3 - 1}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = 4$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Amplitude ratio is $\\frac{A_1}{A_2} = \\sqrt{\\frac{9}{1}} = 3$. Therefore $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\left(\\frac{3+1}{3-1}\\right)^2 = 2^2 = 4$. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Destructive interference occurs when two waves meet at a point with a phase difference of $\\pi$ radians, regardless of whether they have equal amplitudes.\\nReason: A phase difference of $\\pi$ radians causes the individual displacements to oppose each other ($y_2 = -\\frac{A_2}{A_1} y_1$), minimizing the net resultant displacement.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When $\\phi = \\pi$, $\\cos\\pi = -1$, which minimizes the resultant amplitude to $|A_1 - A_2|$. Even if $A_1 \\neq A_2$ (where complete cancellation does not occur), this condition still represents minimum intensity (destructive interference). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The resultant amplitude of $N$ independent, incoherent sources each of amplitude $A_0$ is $\\sqrt{N} A_0$.\\nReason: For incoherent sources, intensities add linearly ($I_{\\text{net}} = N I_0$), and because intensity is proportional to amplitude squared, $A_{\\text{net}} = \\sqrt{N} A_0$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because the relative phases are randomly distributed and uncorrelated, the interference cross-terms average to zero: $\\langle \\cos(\\phi_i - \\phi_j) \\rangle = 0$ for $i \\neq j$. Thus $I_{\\text{net}} = \\sum I_i = N I_0$, meaning the effective RMS amplitude is $\\sqrt{N} A_0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If two sound waves $y_1 = A\\sin(\\omega t - kx)$ and $y_2 = A\\cos(\\omega t - kx)$ superpose, the resultant amplitude is $\\sqrt{2}A$.\\nReason: The two waves have a phase difference of $\\pi/2$ radians, and the resultant amplitude of two orthogonal phasor components is $\\sqrt{A^2 + A^2 + 2A^2\\cos(\\pi/2)} = \\sqrt{2}A$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since $\\cos(\\theta) = \\sin(\\theta + \\pi/2)$, the phase difference is $\\phi = \\pi/2$. The resultant amplitude is $A_R = \\sqrt{A^2 + A^2 + 2A^2\\cos(\\pi/2)} = \\sqrt{A^2 + A^2} = \\sqrt{2}A$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Active noise-canceling headphones utilize the phenomenon of destructive wave interference to suppress ambient acoustic noise.\\nReason: An onboard microphone detects ambient noise and an internal speaker generates an inverted sound wave (phase shifted by $180^\\circ$) that destructively cancels the incoming noise wave at the ear.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Active noise cancellation (ANC) samples external acoustic noise, inverts the signal waveform by generating an anti-phase acoustic wave of equal amplitude ($\\Delta \\phi = \\pi$), and superposes it onto the incoming noise, resulting in destructive interference ($y_{\\text{net}} \\approx 0$). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an interference experiment with two coherent sound sources, moving along a line equidistant from both sources produces an unchanging loud sound.\\nReason: Along the perpendicular bisector of the line joining two identical in-phase coherent sources, the path difference $\\Delta x$ is always zero, maintaining constructive interference.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Every point on the perpendicular bisector is equidistant from the two sources ($r_1 = r_2 \\implies \\Delta r = 0$). Since path difference is zero everywhere along this line, the phase difference remains $\\Delta \\phi = 0$, guaranteeing constructive interference. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the phase difference between two interfering waves changes continuously and rapidly, no interference pattern is observed.\\nReason: The human ear and typical detectors cannot resolve intensity fluctuations faster than their response time, registering only the time-averaged intensity.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When phase difference $\\phi(t)$ fluctuates randomly over time intervals much shorter than the detector's integration time (persistence of hearing $\\sim 0.1\\,\\text{s}$), the detector measures the time average $\\langle I \\rangle = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\langle \\cos\\phi \\rangle = I_1 + I_2$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The resultant wave of three identical harmonic waves $y_1 = A\\sin(\\omega t)$, $y_2 = A\\sin(\\omega t + 2\\pi/3)$, and $y_3 = A\\sin(\\omega t + 4\\pi/3)$ is identically zero at all times.\\nReason: Three equal vectors spaced symmetrically at $120^\\circ$ to each other sum to a null vector in phasor representation.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the phasor diagram, the three vectors each of magnitude $A$ are separated by successive angles of $120^\\circ$. The resultant phasor is $\\vec{A}_R = \\vec{A}_1 + \\vec{A}_2 + \\vec{A}_3 = 0$. Hence the sum of the instantaneous displacements is zero at every instant. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The intensity at the central maximum in a two-source interference pattern is 4 times the intensity of either identical source alone.\\nReason: Electric field or acoustic pressure amplitudes add constructively in phase, doubling the net amplitude and quadrupling the intensity.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "At the central maximum, the path difference is zero, so the waves arrive perfectly in phase. The resultant amplitude is $A_R = A + A = 2A$. Since intensity is proportional to the square of amplitude, $I_{\\max} = (2A)^2 = 4A^2 = 4I_0$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Superposition of two identical waves traveling in the same direction with a phase difference of $180^\\circ$ results in zero transmitted energy.\\nReason: Total destructive interference produces zero net amplitude everywhere along the medium, so no particle vibrates or transfers energy.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When $A_1 = A_2 = A$ and $\\Delta \\phi = \\pi$, the resultant wave is $y = A\\sin(\\omega t - kx) + A\\sin(\\omega t - kx + \\pi) = 0$. The medium remains undisturbed, meaning zero power is transmitted along the path. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two sound sources emitting waves of wavelengths $\\lambda$ produce destructive interference at a point if the path difference is $1.5\\lambda$.\\nReason: The path difference for destructive interference must be an odd half-integral multiple of the wavelength, $\\Delta x = \\left(n + \\frac{1}{2}\\right)\\lambda$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "For $n = 1$, the condition yields $\\Delta x = \\left(1 + \\frac{1}{2}\\right)\\lambda = 1.5\\lambda$. The corresponding phase difference is $\\Delta \\phi = \\frac{2\\pi}{\\lambda}(1.5\\lambda) = 3\\pi$, which produces destructive interference. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a sound interference pattern, the locations of pressure nodes coincide with the locations of displacement antinodes.\\nReason: Pressure variation is proportional to the spatial derivative of displacement: $\\Delta P = -B \\left(\\frac{\\partial y}{\\partial x}\\right)$, which vanishes at displacement extrema.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "At displacement antinodes, displacement is maximal and its spatial gradient $\\frac{\\partial y}{\\partial x} = 0$. Thus the excess pressure variation $\\Delta P = -B \\frac{\\partial y}{\\partial x}$ is zero (pressure node). Conversely, at displacement nodes, the gradient is maximal, producing pressure antinodes. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two waves cannot interfere if their polarization planes are mutually perpendicular.\\nReason: Mutually perpendicular transverse vibrations cannot cancel each other scalar-wise along any single direction, as the vector dot product of their displacements is zero.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "By the Fresnel-Arago laws, two orthogonal transverse waves (one polarized along $x$, the other along $y$) cannot interfere to produce intensity modulation. Their net intensity is simply $I = I_x + I_y = A_x^2 + A_y^2$, regardless of their phase difference. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The intensity at a point where two coherent waves meet with a phase difference of $\\frac{\\pi}{3}$ is $3I_0$, assuming both sources have equal intensity $I_0$.\\nReason: The resultant intensity is given by $I = 2I_0(1 + \\cos\\phi) = 4I_0 \\cos^2(\\phi/2)$, and for $\\phi = \\pi/3$, $\\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$, so $I = 4I_0 \\left(\\frac{3}{4}\\right) = 3I_0$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Using the formula $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$: with $I_1 = I_2 = I_0$ and $\\phi = \\pi/3$, we have $I = I_0 + I_0 + 2I_0 \\cos(\\pi/3) = 2I_0 + 2I_0(0.5) = 3I_0$. Reason provides the equivalent trigonometric formula $4I_0\\cos^2(\\phi/2) = 4I_0(3/4) = 3I_0$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 7 Multiple Choice Questions (MCQs)
  {
    type: "MCQ",
    question: "Two coherent sound sources $S_1$ and $S_2$ produce waves of the same frequency $660\\,\\text{Hz}$ in air ($v = 330\\,\\text{m/s}$). A detector is placed at a point $P$ such that $S_1 P = 4.0\\,\\text{m}$ and $S_2 P = 4.5\\,\\text{m}$. What type of interference occurs at $P$?",
    options: [
      "Constructive interference (Maximum intensity)",
      "Destructive interference (Minimum intensity)",
      "Neither constructive nor destructive",
      "Intensity is zero only if amplitudes are unequal"
    ],
    correctAnswer: 0,
    explanation: "Wavelength is $\\lambda = \\frac{v}{f} = \\frac{330}{660} = 0.5\\,\\text{m}$. The path difference is $\\Delta x = S_2 P - S_1 P = 4.5 - 4.0 = 0.5\\,\\text{m} = 1\\lambda$. Because the path difference is an integer multiple of the wavelength ($n = 1$), constructive interference occurs at $P$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Two waves represented by $y_1 = 3\\sin(\\omega t - kx)$ and $y_2 = 4\\cos(\\omega t - kx)$ superpose. The amplitude of the resultant wave is:",
    options: [
      "$5$",
      "$7$",
      "$1$",
      "$\\sqrt{7}$"
    ],
    correctAnswer: 0,
    explanation: "Rewriting $y_2$ as $4\\sin(\\omega t - kx + \\pi/2)$, the phase difference between the two waves is $\\phi = \\pi/2$. The resultant amplitude is $A_R = \\sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \\cos(\\pi/2)} = \\sqrt{3^2 + 4^2 + 0} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Two coherent sources have intensity ratio $I_1 : I_2 = 4 : 1$. The ratio of the maximum intensity to the minimum intensity in the interference pattern is:",
    options: [
      "$9:1$",
      "$5:3$",
      "$25:9$",
      "$16:1$"
    ],
    correctAnswer: 0,
    explanation: "The amplitude ratio is $\\frac{A_1}{A_2} = \\sqrt{\\frac{I_1}{I_2}} = \\sqrt{\\frac{4}{1}} = 2$. The intensity ratio is $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\left(\\frac{2 + 1}{2 - 1}\\right)^2 = \\left(\\frac{3}{1}\\right)^2 = 9:1$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "In a Quincke's tube experiment, a detector initially indicates a maximum sound intensity. One of the tubes is slowly pulled out by $5.0\\,\\text{cm}$, and the detector reaches the very next minimum. The wavelength of the sound wave is:",
    options: [
      "$20.0\\,\\text{cm}$",
      "$10.0\\,\\text{cm}$",
      "$5.0\\,\\text{cm}$",
      "$40.0\\,\\text{cm}$"
    ],
    correctAnswer: 0,
    explanation: "Pulling the tube by distance $d$ increases the acoustic path difference by $2d$. Going from a maximum to the next minimum requires an increase in path difference of $\\lambda/2$. Thus $2d = \\frac{\\lambda}{2} \\implies \\lambda = 4d = 4 \\times 5.0\\,\\text{cm} = 20.0\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Three harmonic waves of equal frequency and amplitudes $A$, $2A$, and $3A$ have phase angles $0$, $\\pi/2$, and $\\pi$ radians respectively. The resultant amplitude of the combination is:",
    options: [
      "$2\\sqrt{2}A$",
      "$\\sqrt{5}A$",
      "$6A$",
      "$2A$"
    ],
    correctAnswer: 0,
    explanation: "Using phasor addition: Along the $x$-axis (phase 0): component is $A - 3A = -2A$. Along the $y$-axis (phase $\\pi/2$): component is $2A$. The net resultant amplitude is $A_R = \\sqrt{(-2A)^2 + (2A)^2} = \\sqrt{4A^2 + 4A^2} = \\sqrt{8A^2} = 2\\sqrt{2}A$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Two sound waves from coherent sources interfere at a point with a path difference of $\\frac{\\lambda}{3}$. If each source produces an intensity $I_0$, the resultant intensity at this point is:",
    options: [
      "$I_0$",
      "$2I_0$",
      "$3I_0$",
      "$4I_0$"
    ],
    correctAnswer: 0,
    explanation: "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda}\\left(\\frac{\\lambda}{3}\\right) = \\frac{2\\pi}{3}\\,\\text{rad} = 120^\\circ$. The resultant intensity is $I = I_0 + I_0 + 2I_0 \\cos(120^\\circ) = 2I_0 + 2I_0(-0.5) = 2I_0 - I_0 = I_0$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "The displacement of a particle is given by $y = 5\\sin(100t) + 12\\cos(100t)\\,\\text{cm}$. The amplitude of oscillation is:",
    options: [
      "$13\\,\\text{cm}$",
      "$17\\,\\text{cm}$",
      "$7\\,\\text{cm}$",
      "$60\\,\\text{cm}$"
    ],
    correctAnswer: 0,
    explanation: "The two components are in quadrature (phase difference $\\pi/2$). The resultant amplitude is $A = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 20 Numerical Questions
  {
    type: "NUMERICAL",
    question: "Two coherent sources of sound of equal intensity $I_0 = 10\\,\\text{mW/m}^2$ interfere at a point where the phase difference is $60^\\circ$. What is the resultant intensity in $\\text{mW/m}^2$?",
    correctAnswer: 30,
    explanation: "Resultant intensity $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi = 10 + 10 + 2\\sqrt{100}\\cos(60^\\circ) = 20 + 20(0.5) = 30\\,\\text{mW/m}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two coherent waves have an intensity ratio of $16:9$. Find the ratio of maximum to minimum intensity in their interference pattern.",
    correctAnswer: 49,
    explanation: "Amplitudes ratio is $\\frac{A_1}{A_2} = \\sqrt{\\frac{16}{9}} = \\frac{4}{3}$. The ratio of intensities is $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{4 + 3}{4 - 3}\\right)^2 = \\left(\\frac{7}{1}\\right)^2 = 49$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two waves $y_1 = 6\\sin(\\omega t)$ and $y_2 = 8\\sin(\\omega t + \\phi)$ superpose. If the resultant amplitude is $10$, what is the phase difference $\\phi$ in degrees?",
    correctAnswer: 90,
    explanation: "We have $A_R^2 = A_1^2 + A_2^2 + 2A_1 A_2 \\cos\\phi \\implies 10^2 = 6^2 + 8^2 + 2(6)(8)\\cos\\phi \\implies 100 = 36 + 64 + 96\\cos\\phi \\implies 100 = 100 + 96\\cos\\phi \\implies 96\\cos\\phi = 0 \\implies \\cos\\phi = 0 \\implies \\phi = 90^\\circ$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In an acoustic interference setup with two coherent speakers, the path difference between waves arriving at a microphone is $1.2\\,\\text{m}$. If the speed of sound is $360\\,\\text{m/s}$, what is the lowest frequency in hertz for which constructive interference occurs?",
    correctAnswer: 300,
    explanation: "For the lowest non-zero frequency of constructive interference, $\\Delta x = 1\\lambda \\implies \\lambda = 1.2\\,\\text{m}$. The frequency is $f = \\frac{v}{\\lambda} = \\frac{360}{1.2} = 300\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the previous problem, what is the lowest non-zero frequency in hertz for which destructive interference occurs?",
    correctAnswer: 150,
    explanation: "For destructive interference, $\\Delta x = \\frac{\\lambda}{2} \\implies \\lambda = 2\\Delta x = 2 \\times 1.2 = 2.4\\,\\text{m}$. The frequency is $f = \\frac{v}{\\lambda} = \\frac{360}{2.4} = 150\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two coherent sources of sound of intensities $I$ and $4I$ interfere. Find the maximum possible intensity in terms of $I$.",
    correctAnswer: 9,
    explanation: "Maximum intensity is $I_{\\max} = (\\sqrt{I} + \\sqrt{4I})^2 = (\\sqrt{I} + 2\\sqrt{I})^2 = (3\\sqrt{I})^2 = 9I$. The factor is 9.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the two sources in the previous problem, find the minimum possible intensity in terms of $I$.",
    correctAnswer: 1,
    explanation: "Minimum intensity is $I_{\\min} = (\\sqrt{4I} - \\sqrt{I})^2 = (2\\sqrt{I} - \\sqrt{I})^2 = (\\sqrt{I})^2 = 1I$. The factor is 1.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a Quincke's tube, the intensity changes from maximum to minimum when the movable tube is drawn out by $12.5\\,\\text{cm}$. What is the wavelength of the sound wave in centimeters?",
    correctAnswer: 50,
    explanation: "Path difference added is $2d = 2 \\times 12.5 = 25\\,\\text{cm}$. From maximum to minimum, path difference is $\\lambda/2 = 25\\,\\text{cm} \\implies \\lambda = 50\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Four coherent waves each of amplitude $2\\,\\text{mm}$ and identical frequency arrive at a point in phase. What is the resultant amplitude in millimeters?",
    correctAnswer: 8,
    explanation: "Since all 4 waves arrive with zero phase difference, their amplitudes add directly: $A_R = 4 \\times 2 = 8\\,\\text{mm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "If the four waves in the previous problem were completely incoherent, what would be the resultant effective amplitude in millimeters?",
    correctAnswer: 4,
    explanation: "For incoherent sources, intensities add: $I_{\\text{net}} = 4 I_0 \\propto 4 A_0^2$. Thus the effective amplitude is $A_{\\text{eff}} = \\sqrt{4} A_0 = 2 \\times 2 = 4\\,\\text{mm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two waves of identical frequency have amplitudes in the ratio $2:1$. What is the fringe visibility $V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}$ (rounded to one decimal place)?",
    correctAnswer: 0.8,
    explanation: "Fringe visibility is $V = \\frac{2 A_1 A_2}{A_1^2 + A_2^2}$. With $A_1 = 2, A_2 = 1$: $V = \\frac{2(2)(1)}{2^2 + 1^2} = \\frac{4}{4 + 1} = \\frac{4}{5} = 0.8$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two speakers emitting coherent sound waves of wavelength $0.8\\,\\text{m}$ in phase are separated by $3.0\\,\\text{m}$. A listener walks along a circle of large radius centered at the midpoint between the speakers. How many positions of maximum intensity does the listener cross in one complete revolution?",
    correctAnswer: 14,
    explanation: "Along the circle at angle $\\theta$ to the axis joining the speakers, path difference is $\\Delta x = d\\cos\\theta$. Maxima occur when $d\\cos\\theta = n\\lambda \\implies \\cos\\theta = \\frac{n\\lambda}{d} = \\frac{n(0.8)}{3.0} = \\frac{n}{3.75}$. The maximum integer $n$ is $n_{\\max} = 3$. For $n = 0$: $\\cos\\theta = 0$ gives 2 values of $\\theta$ ($90^\\circ, 270^\\circ$). For each of $n = \\pm 1, \\pm 2, \\pm 3$, there are 2 distinct angles $\\theta$. Total number of maxima is $2 + (6 \\times 2) = 14$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two identical waves of amplitude $A = 5\\,\\text{cm}$ meet at a point with a phase difference of $\\pi/3\\,\\text{rad}$. Find the square of the resultant amplitude in $\\text{cm}^2$.",
    correctAnswer: 75,
    explanation: "$A_R^2 = A^2 + A^2 + 2A^2\\cos(\\pi/3) = 25 + 25 + 2(25)(0.5) = 50 + 25 = 75\\,\\text{cm}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two coherent sources produce interference such that $I_{\\max} / I_{\\min} = 25$. What is the ratio of their amplitudes $A_1 / A_2$ (assuming $A_1 > A_2$)?",
    correctAnswer: 1.5,
    explanation: "$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = 25 \\implies \\frac{A_1 + A_2}{A_1 - A_2} = 5 \\implies A_1 + A_2 = 5A_1 - 5A_2 \\implies 6A_2 = 4A_1 \\implies \\frac{A_1}{A_2} = \\frac{6}{4} = 1.5$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two waves are given by $y_1 = 4\\sin(200\\pi t)$ and $y_2 = 3\\sin(200\\pi t + \\pi/2)$. Find the maximum velocity of the resulting oscillation in $\\text{cm/s}$ (take $\\pi = 3.14$). Round to nearest integer.",
    correctAnswer: 3140,
    explanation: "Resultant amplitude is $A = \\sqrt{4^2 + 3^2} = 5\\,\\text{cm}$. Angular frequency is $\\omega = 200\\pi\\,\\text{rad/s}$. Maximum velocity is $v_{\\max} = \\omega A = (200\\pi)(5) = 1000\\pi = 1000 \\times 3.14 = 3140\\,\\text{cm/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two coherent waves have amplitudes $3\\,\\text{mm}$ and $5\\,\\text{mm}$. What is the ratio of intensity at a point where phase difference is $0$ to intensity where phase difference is $\\pi$?",
    correctAnswer: 16,
    explanation: "At $\\phi = 0$, $A_{\\max} = 5 + 3 = 8\\,\\text{mm} \\implies I_{\\max} \\propto 8^2 = 64$. At $\\phi = \\pi$, $A_{\\min} = 5 - 3 = 2\\,\\text{mm} \\implies I_{\\min} \\propto 2^2 = 4$. Ratio is $\\frac{64}{4} = 16$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "At a point of constructive interference, the intensity is $I_1$. When the phase difference is changed to $90^\\circ$ while keeping individual intensities identical ($I_0$), the intensity becomes $I_2$. Find the ratio $I_1 / I_2$.",
    correctAnswer: 2,
    explanation: "Constructive interference: $I_1 = 4I_0$. At $\\phi = 90^\\circ$: $I_2 = I_0 + I_0 + 2I_0\\cos(90^\\circ) = 2I_0$. The ratio is $\\frac{I_1}{I_2} = \\frac{4I_0}{2I_0} = 2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a medium, two coherent waves of equal amplitude $A = 10\\,\\text{cm}$ produce a resultant wave of amplitude $10\\,\\text{cm}$. What is the phase difference between the two waves in degrees?",
    correctAnswer: 120,
    explanation: "$A_R^2 = A^2 + A^2 + 2A^2\\cos\\phi \\implies 10^2 = 10^2 + 10^2 + 2(100)\\cos\\phi \\implies 100 = 200 + 200\\cos\\phi \\implies 200\\cos\\phi = -100 \\implies \\cos\\phi = -0.5 \\implies \\phi = 120^\\circ$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two coherent sources emitting sound of wavelength $40\\,\\text{cm}$ interfere at a point $P$. If the distance from $P$ to the first source is $1.8\\,\\text{m}$ and to the second source is $2.6\\,\\text{m}$, what is the phase difference at $P$ in radians (in terms of $\\pi$, i.e. find $k$ where $\\phi = k\\pi$)?",
    correctAnswer: 4,
    explanation: "Path difference is $\\Delta x = 2.6 - 1.8 = 0.8\\,\\text{m} = 80\\,\\text{cm}$. Wavelength is $\\lambda = 40\\,\\text{cm}$. Phase difference is $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{40} \\times 80 = 4\\pi\\,\\text{rad}$. Thus $k = 4$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Three coherent waves of equal amplitude $A = 2\\,\\text{cm}$ have progressive phase differences of $\\pi/3$: $\\phi_1 = 0, \\phi_2 = \\pi/3, \\phi_3 = 2\\pi/3$. What is the resultant amplitude in centimeters?",
    correctAnswer: 4,
    explanation: "Phasor 1 is along $0^\\circ$ ($A$), phasor 3 is along $120^\\circ$ ($A$). Their resultant is $2A\\cos(60^\\circ) = 2A(0.5) = A$, directed along $60^\\circ$. Phasor 2 is already along $60^\\circ$ ($A$). Adding them in phase along $60^\\circ$: $A_R = A + A = 2A = 2 \\times 2 = 4\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_ow_part2.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 2 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
