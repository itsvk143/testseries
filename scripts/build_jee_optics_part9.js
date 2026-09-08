const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Young's double-slit experiment";

const questions = [];

// Helper for AR questions
const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
  "Assertion is true but Reason is false.",
  "Assertion is false but Reason is true."
];

// 26 ASSERTION_REASON questions
const arData = [
  {
    assertion: "In Young's double-slit experiment, if the entire apparatus is immersed in a liquid of refractive index $\\mu$, the fringe width decreases by a factor of $\\mu$.",
    reason: "The wavelength of light in a medium of refractive index $\\mu$ becomes $\\lambda' = \\lambda / \\mu$, while the slit separation and distance to the screen remain unchanged.",
    correct: 0,
    explanation: "Fringe width is given by $\\beta = \\frac{\\lambda D}{d}$. In a liquid of refractive index $\\mu$, the wavelength becomes $\\lambda' = \\frac{\\lambda}{\\mu}$. Therefore, the new fringe width is $\\beta' = \\frac{\\lambda' D}{d} = \\frac{\\beta}{\\mu}$. Both Assertion and Reason are true, and Reason correctly explains Assertion."
  },
  {
    assertion: "In Young's double-slit experiment, when white light is used instead of monochromatic light, the central fringe is white.",
    reason: "At the central point on the screen, the path difference for all wavelengths present in white light is zero, so all wavelengths undergo constructive interference simultaneously.",
    correct: 0,
    explanation: "At the central fringe ($y = 0$), path difference $\\Delta x = 0$ for all spectral components of white light. Hence, constructive interference occurs for all colors simultaneously, resulting in a white central fringe. The Reason correctly explains the Assertion."
  },
  {
    assertion: "In Young's double-slit experiment using white light, the fringe closest to the central white fringe on either side appears violet.",
    reason: "Violet light has the shortest wavelength in the visible spectrum and therefore forms its first maximum closest to the center.",
    correct: 0,
    explanation: "The position of the first bright fringe is $y_1 = \\frac{\\lambda D}{d}$. Since violet light has the shortest wavelength in the visible range ($\approx 400\\text{ nm}$), its first maximum occurs at the minimum distance from the central fringe. Thus, the fringe closest to the center appears violet/blue."
  },
  {
    assertion: "When a thin transparent mica sheet of thickness $t$ and refractive index $\\mu$ is placed in front of one of the slits in YDSE, the fringe pattern shifts without any change in the fringe width.",
    reason: "The introduction of the transparent sheet introduces an additional optical path difference of $(\\mu - 1)t$, but does not alter the wavelength of light or the geometry ($D$ and $d$).",
    correct: 0,
    explanation: "An extra optical path $(\\mu - 1)t$ is introduced in the beam passing through the sheet. This shifts the entire fringe pattern by $\\Delta y = \\frac{D}{d}(\\mu - 1)t$. Since the fringe width $\\beta = \\frac{\\lambda D}{d}$ depends only on $\\lambda, D,$ and $d$, the fringe width remains unchanged."
  },
  {
    assertion: "Two independent sodium lamps illuminating two slits cannot produce a stationary interference pattern on a screen.",
    reason: "Two independent light sources cannot have a constant phase difference because emission of light from independent atoms occurs through independent random phase jumps.",
    correct: 0,
    explanation: "Interference requires coherent sources with a constant phase difference over time. Independent sources undergo random and independent phase changes every $\\sim 10^{-8}\\text{ s}$, washing out any stationary interference pattern. Thus, both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the separation between the two slits in YDSE is doubled and the distance of the screen from the slits is halved, the fringe width becomes one-fourth of its initial value.",
    reason: "Fringe width is directly proportional to the slit separation and inversely proportional to the screen distance.",
    correct: 2,
    explanation: "Fringe width is given by $\\beta = \\frac{\\lambda D}{d}$. Here, $D' = D/2$ and $d' = 2d$, so $\\beta' = \\frac{\\lambda (D/2)}{2d} = \\frac{\\beta}{4}$. Assertion is true. However, Reason is false because $\\beta$ is directly proportional to $D$ and inversely proportional to $d$."
  },
  {
    assertion: "If one of the slits in Young's double-slit experiment is covered with an opaque shield, the interference pattern disappears and is replaced by a single-slit diffraction pattern.",
    reason: "Interference requires superposition of light waves originating from at least two coherent sources.",
    correct: 0,
    explanation: "When one slit is blocked, superposition of waves from two slits cannot occur. Instead, light from the single open slit diffracts, producing a continuous central diffraction band with secondary maxima and minima. Reason correctly explains Assertion."
  },
  {
    assertion: "In Young's double-slit experiment, the intensity at the minima is zero only if both slits have equal widths and equal transmitting amplitudes.",
    reason: "Complete destructive interference requires that the amplitudes of the interfering waves from the two slits be equal and opposite in phase.",
    correct: 0,
    explanation: "Intensity at minima is $I_{min} = (a_1 - a_2)^2$. It is zero if and only if $a_1 = a_2$, which requires equal slit widths and identical transmission. Both Assertion and Reason are true, and Reason correctly explains Assertion."
  },
  {
    assertion: "The angular fringe width in Young's double-slit experiment does not depend on the distance between the slits and the screen.",
    reason: "Angular fringe width is given by $\\theta = \\frac{\\beta}{D} = \\frac{\\lambda}{d}$, which is independent of the screen distance $D$.",
    correct: 0,
    explanation: "The angular fringe width is $\\theta = \\frac{\\beta}{D} = \\frac{\\lambda D / d}{D} = \\frac{\\lambda}{d}$. It depends solely on wavelength $\\lambda$ and slit separation $d$, and is completely independent of $D$."
  },
  {
    assertion: "If the source slit in a Young's experiment setup is moved parallel to the double slits, the fringes on the screen shift in the opposite direction.",
    reason: "Displacing the source creates an initial path difference between the waves arriving at the two slits with an opposite sign.",
    correct: 0,
    explanation: "When the source $S$ is moved upwards by a distance $s$, the path from $S$ to $S_1$ becomes shorter than from $S$ to $S_2$ by an amount $\\frac{s d}{2 S_0}$. To compensate and achieve zero net path difference, the central fringe must shift downwards. Hence, the pattern shifts in the opposite direction."
  },
  {
    assertion: "In YDSE, as the distance from the central maximum increases, the fringes on a flat screen become strictly hyperbolas.",
    reason: "The locus of points with a constant path difference from two point sources is a family of hyperboloids of revolution, which intersect a flat screen in hyperbolas.",
    correct: 0,
    explanation: "For two point sources separated by $d$, the locus of points satisfying $r_2 - r_1 = \\text{constant}$ is a hyperboloid of revolution. When intersected by a flat screen, the fringes are hyperbolas, which appear approximately straight only near the central axis where $y \\ll D$."
  },
  {
    assertion: "Young's double-slit experiment proves the particle nature of light.",
    reason: "Light behaves as a localized stream of photons that strike the screen without any wave interference.",
    correct: 3,
    explanation: "Young's double-slit experiment is the definitive proof of the wave nature of light, demonstrating interference. The photoelectric effect and Compton effect demonstrate the particle nature. Both Assertion and Reason are false (so Assertion is false, Reason is false; option 3: Assertion is false)."
  },
  {
    assertion: "In YDSE, if the distance between the two slits $d$ is less than the wavelength of light $\\lambda$, no interference fringes can be observed on the screen.",
    reason: "The condition for the first interference maximum is $d \\sin\\theta = \\lambda$, which requires $\\sin\\theta = \\lambda / d > 1$ when $d < \\lambda$, which is physically impossible.",
    correct: 0,
    explanation: "For any maximum of order $n \\ge 1$, $\\sin\\theta = \\frac{n\\lambda}{d}$. If $d < \\lambda$, even for $n = 1$, $\\sin\\theta > 1$, which has no real solution. Thus, only the central maximum ($n=0$) exists, and no side fringes can be formed on the screen."
  },
  {
    assertion: "In YDSE, the law of conservation of energy is obeyed across the interference pattern.",
    reason: "Interference does not create or destroy energy; it merely redistributes energy from regions of destructive interference (minima) to regions of constructive interference (maxima).",
    correct: 0,
    explanation: "At maxima $I_{max} = 4I_0$, at minima $I_{min} = 0$. The average intensity over a fringe width is $\\langle I \\rangle = \\frac{1}{\\beta} \\int_0^\\beta 4I_0 \\cos^2\\left(\\frac{\\pi y}{\\beta}\\right) dy = 2I_0$, which equals the sum of individual intensities $I_0 + I_0 = 2I_0$. Energy is strictly conserved."
  },
  {
    assertion: "If one of the slits of YDSE is covered with a glass plate and the other with a mica sheet of identical thickness and refractive index, the central fringe does not shift.",
    reason: "The net additional optical path difference introduced between the two interfering beams is zero.",
    correct: 0,
    explanation: "The optical path difference introduced is $\\Delta x = (\\mu_1 - 1)t_1 - (\\mu_2 - 1)t_2$. When $\\mu_1 = \\mu_2$ and $t_1 = t_2$, $\\Delta x = 0$, so there is no shift in the fringe pattern."
  },
  {
    assertion: "If a monochromatic light source in YDSE is replaced by an X-ray source without altering the apparatus dimensions ($d \\approx 1\\text{ mm}, D \\approx 1\\text{ m}$), interference fringes will not be observable.",
    reason: "X-ray wavelengths are of the order of $10^{-10}\\text{ m}$, leading to an extremely small fringe width $\\beta \\approx 10^{-7}\\text{ m}$, which cannot be resolved by standard detectors.",
    correct: 0,
    explanation: "Since $\\lambda_{X-ray} \\approx 10^{-10}\\text{ m}$, fringe width $\\beta = \\frac{\\lambda D}{d} \\approx \\frac{10^{-10} \\times 1}{10^{-3}} = 10^{-7}\\text{ m} = 0.1\\,\\mu\\text{m}$. Such extremely narrow fringes blend together and cannot be resolved unless $d$ is reduced to atomic spacings (as in crystal diffraction)."
  },
  {
    assertion: "Fringe visibility in YDSE is maximum when the intensities of light emerging from the two slits are equal.",
    reason: "Fringe visibility is defined as $V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$, which equals 1 when $I_{min} = 0$.",
    correct: 0,
    explanation: "When $I_1 = I_2$, $I_{min} = 0$ and $I_{max} = 4I_1$. Then $V = \\frac{I_{max} - 0}{I_{max} + 0} = 1$, giving maximum contrast between dark and bright fringes."
  },
  {
    assertion: "In Young's double-slit experiment, if the slit separation $d$ is very large compared to the wavelength $\\lambda$ ($d \\gg \\lambda$), the fringe width becomes very small.",
    reason: "Fringe width is inversely proportional to the slit separation $d$.",
    correct: 0,
    explanation: "Because $\\beta = \\frac{\\lambda D}{d}$, as $d$ increases, $\\beta$ decreases. If $d$ is too large, the fringes become so finely spaced that they cannot be distinguished by the human eye or standard instruments."
  },
  {
    assertion: "If the two slits in YDSE are illuminated by two separate lasers of identical wavelength and manufacturer, no stationary interference pattern is observed.",
    reason: "Even identical lasers undergo independent random phase drift over time intervals longer than their coherence time, making them mutually incoherent.",
    correct: 0,
    explanation: "Two separate laser sources have independently fluctuating phases due to spontaneous emission inside their cavities. Their phase difference is not constant in time, so they are mutually incoherent and cannot sustain a stationary interference pattern."
  },
  {
    assertion: "When the width of one slit in YDSE is slightly increased, the intensity at the interference minima increases while the intensity at the maxima increases.",
    reason: "Increasing the slit width increases the amplitude of light from that slit, so $a_1 \\ne a_2$, causing $I_{min} = (a_1 - a_2)^2 > 0$ and $I_{max} = (a_1 + a_2)^2 > 4a_1^2$.",
    correct: 0,
    explanation: "Initially $a_1 = a_2$, so $I_{min} = 0$ and $I_{max} = 4a_1^2$. When $a_1$ increases ($a_1 > a_2$), $I_{min} = (a_1 - a_2)^2 > 0$ (so minima are no longer completely dark) and $I_{max} = (a_1 + a_2)^2$ increases. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "At a point on the screen where the path difference is $\\lambda / 4$, the intensity is half of the maximum intensity.",
    reason: "The phase difference corresponding to a path difference of $\\lambda / 4$ is $\\pi / 2$, and $\\cos^2(\\pi/4) = 1/2$.",
    correct: 0,
    explanation: "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda}\\left(\\frac{\\lambda}{4}\\right) = \\frac{\\pi}{2}$. The intensity is $I = I_{max}\\cos^2(\\phi/2) = I_{max}\\cos^2(\\pi/4) = I_{max} \\times \\frac{1}{2} = \\frac{I_{max}}{2}$."
  },
  {
    assertion: "If the screen in YDSE is moved away from the plane of the slits, the fringe width increases, but the angular fringe width remains constant.",
    reason: "Linear fringe width $\\beta = \\frac{\\lambda D}{d}$ depends on $D$, whereas angular fringe width $\\theta = \\frac{\\lambda}{d}$ is independent of $D$.",
    correct: 0,
    explanation: "Linear fringe width $\\beta = \\frac{\\lambda D}{d}$ is directly proportional to $D$, so it increases as $D$ increases. However, the angular fringe width $\\theta = \\frac{\\beta}{D} = \\frac{\\lambda}{d}$ depends only on $\\lambda$ and $d$, remaining unchanged."
  },
  {
    assertion: "In Young's experiment, the central fringe is always bright regardless of any phase difference introduced between the two slits.",
    reason: "The geometric path difference from the two slits to the central point on the screen is always zero.",
    correct: 3,
    explanation: "While the geometric path difference at the central axis is zero, if an initial phase difference of $\\pi$ is introduced (e.g. by covering one slit with a half-wave plate or reflection), the central fringe becomes dark. Thus Assertion is false, Reason is true (geometric path difference at $y=0$ is indeed zero)."
  },
  {
    assertion: "In YDSE, the distance between the third dark fringe and the fifth bright fringe on the same side of the central maximum is $2.5\\beta$.",
    reason: "The position of the $n$-th dark fringe is $y_n = (2n-1)\\frac{\\beta}{2}$ and the position of the $m$-th bright fringe is $y_m = m\\beta$.",
    correct: 0,
    explanation: "Position of 3rd dark fringe is $y_{3,dark} = (2 \\times 3 - 1)\\frac{\\beta}{2} = 2.5\\beta$. Position of 5th bright fringe is $y_{5,bright} = 5\\beta$. The distance between them is $5\\beta - 2.5\\beta = 2.5\\beta$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If red light ($\\lambda = 700\\text{ nm}$) is replaced by blue light ($\\lambda = 400\\text{ nm}$) in YDSE, the number of fringes seen in a given field of view increases.",
    reason: "Blue light has a smaller wavelength, resulting in a smaller fringe width, so more fringes fit within the same linear field of view.",
    correct: 0,
    explanation: "Fringe width is $\\beta = \\frac{\\lambda D}{d}$. Since $\\lambda_{blue} < \\lambda_{red}$, $\\beta_{blue} < \\beta_{red}$. The number of fringes in a field of view of width $W$ is $N = W / \\beta$. Since $\\beta$ is smaller, $N$ is larger."
  },
  {
    assertion: "In YDSE, the path difference between the interfering waves at the position of the second minimum is $3\\lambda / 2$.",
    reason: "Destructive interference occurs when the path difference is an odd integral multiple of half-wavelengths, i.e., $\\Delta x = (2n-1)\\frac{\\lambda}{2}$ with $n=2$ for the second minimum.",
    correct: 0,
    explanation: "The condition for minima is $\\Delta x = (2n-1)\\frac{\\lambda}{2}$ for $n = 1, 2, 3, \\dots$ For the second minimum ($n = 2$), $\\Delta x = (2(2)-1)\\frac{\\lambda}{2} = \\frac{3\\lambda}{2}$. Both Assertion and Reason are true and Reason correctly explains Assertion."
  }
];

arData.forEach((item, idx) => {
  questions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.assertion}\nReason (R): ${item.reason}\nIn the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: arOptions,
    correctAnswer: item.correct,
    explanation: item.explanation,
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason",
    difficulty: idx % 3 === 0 ? "Easy" : (idx % 3 === 1 ? "Medium" : "Hard"),
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: "Optics",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

// 7 MCQ questions
const mcqData = [
  {
    q: "In a Young's double-slit experiment, the slit separation is $d = 0.5\\text{ mm}$ and the distance to the screen is $D = 100\\text{ cm}$. When illuminated with light of wavelength $\\lambda = 500\\text{ nm}$, what is the distance on the screen between the central maximum and the third bright fringe?",
    opts: [
      "$1.5\\text{ mm}$",
      "$3.0\\text{ mm}$",
      "$4.5\\text{ mm}$",
      "$6.0\\text{ mm}$"
    ],
    ans: 1,
    exp: "Fringe width is $\\beta = \\frac{\\lambda D}{d} = \\frac{500 \\times 10^{-9} \\times 1.0}{0.5 \\times 10^{-3}} = 1.0 \\times 10^{-3}\\text{ m} = 1.0\\text{ mm}$. The distance from the central maximum to the 3rd bright fringe is $y_3 = 3\\beta = 3 \\times 1.0\\text{ mm} = 3.0\\text{ mm}$."
  },
  {
    q: "In a Young's double-slit experiment, the ratio of maximum to minimum intensity in the interference pattern is $25 : 9$. The ratio of the amplitudes of the interfering waves from the two slits is:",
    opts: [
      "$5 : 3$",
      "$4 : 1$",
      "$16 : 1$",
      "$3 : 2$"
    ],
    ans: 1,
    exp: "We have $\\frac{I_{max}}{I_{min}} = \\frac{(a_1 + a_2)^2}{(a_1 - a_2)^2} = \\frac{25}{9} \\implies \\frac{a_1 + a_2}{a_1 - a_2} = \\frac{5}{3}$. Applying componendo and dividendo: $\\frac{2a_1}{2a_2} = \\frac{5+3}{5-3} = \\frac{8}{2} = 4 \\implies \\frac{a_1}{a_2} = \\frac{4}{1}$."
  },
  {
    q: "A transparent sheet of thickness $t = 12\\,\\mu\\text{m}$ and refractive index $\\mu = 1.5$ is placed in front of one of the slits in a YDSE setup with light of wavelength $\\lambda = 600\\text{ nm}$. How many fringes will shift across the center of the screen?",
    opts: [
      "5",
      "10",
      "15",
      "20"
    ],
    ans: 1,
    exp: "The number of fringes shifted is $N = \\frac{(\\mu - 1)t}{\\lambda} = \\frac{(1.5 - 1) \\times 12 \\times 10^{-6}}{600 \\times 10^{-9}} = \\frac{0.5 \\times 12 \\times 10^{-6}}{0.6 \\times 10^{-6}} = \\frac{6.0}{0.6} = 10$."
  },
  {
    q: "In a Young's double-slit experiment, two wavelengths $\\lambda_1 = 600\\text{ nm}$ and $\\lambda_2 = 450\\text{ nm}$ are used simultaneously. At what minimum non-zero distance from the central maximum will a bright fringe of $\\lambda_1$ coincide with a bright fringe of $\\lambda_2$, given $D = 1.2\\text{ m}$ and $d = 0.9\\text{ mm}$?",
    opts: [
      "$1.2\\text{ mm}$",
      "$2.4\\text{ mm}$",
      "$3.6\\text{ mm}$",
      "$4.8\\text{ mm}$"
    ],
    ans: 1,
    exp: "Condition for coincidence of bright fringes: $n_1 \\lambda_1 = n_2 \\lambda_2 \\implies \\frac{n_1}{n_2} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{450}{600} = \\frac{3}{4}$. The smallest non-zero integers are $n_1 = 3, n_2 = 4$. The distance is $y = \\frac{n_1 \\lambda_1 D}{d} = \\frac{3 \\times 600 \\times 10^{-9} \\times 1.2}{0.9 \\times 10^{-3}} = \\frac{2.16 \\times 10^{-6}}{0.9 \\times 10^{-3}} = 2.4 \\times 10^{-3}\\text{ m} = 2.4\\text{ mm}$."
  },
  {
    q: "In YDSE, monochromatic light of wavelength $\\lambda$ illuminates the two slits. At a point on the screen where the path difference between the interfering waves is $\\lambda / 6$, the intensity is $I$. If $I_0$ is the maximum intensity on the screen, the ratio $I / I_0$ is:",
    opts: [
      "$1/4$",
      "$1/2$",
      "$3/4$",
      "$\\sqrt{3}/2$"
    ],
    ans: 2,
    exp: "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda}\\left(\\frac{\\lambda}{6}\\right) = \\frac{\\pi}{3}$. The intensity is $I = I_0 \\cos^2\\left(\\frac{\\phi}{2}\\right) = I_0 \\cos^2\\left(\\frac{\\pi}{6}\\right) = I_0 \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}I_0$. Thus $I/I_0 = 3/4$."
  },
  {
    q: "In YDSE, the slit separation is $d = 1\\text{ mm}$ and the distance of the screen from the slits is $D = 2\\text{ m}$. White light spanning wavelengths from $400\\text{ nm}$ to $700\\text{ nm}$ is incident on the slits. At a point $y = 1.5\\text{ mm}$ from the central maximum, which of the following wavelengths will be missing (destructive interference)?",
    opts: [
      "$450\\text{ nm}$",
      "$500\\text{ nm}$",
      "$600\\text{ nm}$",
      "$650\\text{ nm}$"
    ],
    ans: 1,
    exp: "Condition for missing wavelength (minima): $\\Delta x = \\frac{y d}{D} = (2n-1)\\frac{\\lambda}{2} \\implies \\lambda = \\frac{2 y d}{(2n-1)D}$. Here, $\\frac{y d}{D} = \\frac{(1.5 \\times 10^{-3})(10^{-3})}{2} = 0.75 \\times 10^{-6}\\text{ m} = 750\\text{ nm}$. For $n = 1$: $\\lambda = 2 \\times 750 = 1500\\text{ nm}$ (infrared). For $n = 2$: $\\lambda = \\frac{2 \\times 750}{3} = 500\\text{ nm}$ (visible, option B). For $n=3$, $\\lambda = 1500/5 = 300\\text{ nm}$ (UV). Therefore, the missing wavelength in the visible range is $500\\text{ nm}$."
  },
  {
    q: "In a Young's double-slit experiment, if the width of one slit is four times the width of the other, what is the ratio of the maximum intensity to the minimum intensity in the resulting interference pattern?",
    opts: [
      "$4 : 1$",
      "$9 : 1$",
      "$16 : 1$",
      "$25 : 1$"
    ],
    ans: 1,
    exp: "Slit width is proportional to intensity: $I_1 / I_2 = w_1 / w_2 = 4 \\implies a_1 / a_2 = \\sqrt{4} = 2$. Then $\\frac{I_{max}}{I_{min}} = \\frac{(a_1 + a_2)^2}{(a_1 - a_2)^2} = \\frac{(2 + 1)^2}{(2 - 1)^2} = \\frac{3^2}{1^2} = \\frac{9}{1}$."
  }
];

mcqData.forEach((item, idx) => {
  questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    difficulty: idx % 3 === 0 ? "Easy" : (idx % 3 === 1 ? "Medium" : "Hard"),
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: "Optics",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

// 20 NUMERICAL questions
const numData = [
  {
    q: "In a Young's double-slit experiment, light of wavelength $600\\text{ nm}$ produces fringes of width $2.0\\text{ mm}$ on a screen. If the entire apparatus is immersed in water of refractive index $\\mu = 4/3$, the new fringe width on the screen is found to be $x\\text{ mm}$. Find the value of $10x$.",
    val: "15",
    exp: "In a medium of refractive index $\\mu$, the fringe width becomes $\\beta' = \\frac{\\beta}{\\mu} = \\frac{2.0}{4/3} = 1.5\\text{ mm}$. Therefore, $x = 1.5$, and $10x = 10 \\times 1.5 = 15$."
  },
  {
    q: "In a YDSE setup, the slits are separated by $d = 0.4\\text{ mm}$ and the screen is at a distance $D = 1.6\\text{ m}$. A monochromatic light of wavelength $500\\text{ nm}$ is used. The distance between the 2nd dark fringe and the 4th bright fringe on the same side of the central maximum is $y\\text{ mm}$. Find the value of $10y$.",
    val: "50",
    exp: "Fringe width is $\\beta = \\frac{\\lambda D}{d} = \\frac{500 \\times 10^{-9} \\times 1.6}{0.4 \\times 10^{-3}} = 2.0 \\times 10^{-3}\\text{ m} = 2.0\\text{ mm}$. The position of the 2nd dark fringe is $y_{2,dark} = (2 \\times 2 - 1)\\frac{\\beta}{2} = 1.5\\beta = 3.0\\text{ mm}$. The position of the 4th bright fringe is $y_{4,bright} = 4\\beta = 8.0\\text{ mm}$. The distance between them is $y = 8.0 - 3.0 = 5.0\\text{ mm}$. Hence $10y = 50$."
  },
  {
    q: "In YDSE, when a thin transparent plate of refractive index $\\mu = 1.6$ is placed in the path of one of the interfering beams, the central maximum shifts to the position previously occupied by the 6th bright fringe. If $\\lambda = 500\\text{ nm}$, find the thickness of the plate in micrometers ($\\mu\\text{m}$).",
    val: "5",
    exp: "The fringe shift corresponds to 6 fringes: $N = \\frac{(\\mu - 1)t}{\\lambda} = 6$. Therefore, $t = \\frac{6\\lambda}{\\mu - 1} = \\frac{6 \\times 500 \\times 10^{-9}}{1.6 - 1} = \\frac{3000 \\times 10^{-9}}{0.6} = 5 \\times 10^{-6}\\text{ m} = 5\\,\\mu\\text{m}$."
  },
  {
    q: "In Young's double-slit experiment, the ratio of the intensities of the two interfering waves is $I_1 / I_2 = 9 / 1$. Find the value of the fringe visibility $V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$ expressed as a percentage.",
    val: "60",
    exp: "Here $a_1 / a_2 = \\sqrt{9/1} = 3$. Then $I_{max} = (3+1)^2 = 16$ and $I_{min} = (3-1)^2 = 4$. Fringe visibility is $V = \\frac{16 - 4}{16 + 4} = \\frac{12}{20} = 0.60 = 60\\%$."
  },
  {
    q: "In a YDSE, the angular fringe width is observed to be $0.20^\\circ$ for light of wavelength $600\\text{ nm}$. If the wavelength is changed to $450\\text{ nm}$, the new angular fringe width becomes $\\theta$ degrees. Find the value of $100\\theta$.",
    val: "15",
    exp: "Angular fringe width is $\\theta = \\frac{\\lambda}{d}$, so $\\frac{\\theta'}{\\theta} = \\frac{\\lambda'}{\\lambda} = \\frac{450}{600} = 0.75$. Thus $\\theta' = 0.75 \\times 0.20^\\circ = 0.15^\\circ$. Therefore, $100\\theta = 15$."
  },
  {
    q: "In YDSE, the maximum intensity on the screen is $I_0 = 64\\text{ W/m}^2$. At a point on the screen where the phase difference between the two waves is $\\pi/3\\text{ rad}$, the intensity is $I\\text{ W/m}^2$. Find the value of $I$.",
    val: "48",
    exp: "Intensity formula: $I = I_0 \\cos^2(\\phi / 2)$. For $\\phi = \\pi/3$, $\\phi / 2 = \\pi/6$. Thus $I = 64 \\cos^2(\\pi/6) = 64 \\times \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = 64 \\times \\frac{3}{4} = 48\\text{ W/m}^2$."
  },
  {
    q: "In a Young's double-slit experiment, two wavelengths $\\lambda_1 = 750\\text{ nm}$ and $\\lambda_2 = 600\\text{ nm}$ are used. The minimum order of the bright fringe of $\\lambda_1$ that coincides with a bright fringe of $\\lambda_2$ is $n$. Find the value of $n$.",
    val: "4",
    exp: "Condition for coincidence: $n_1 \\lambda_1 = n_2 \\lambda_2 \\implies \\frac{n_1}{n_2} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{600}{750} = \\frac{4}{5}$. The minimum non-zero integer order for $\\lambda_1$ is $n_1 = 4$ (which coincides with $n_2 = 5$ of $\\lambda_2$)."
  },
  {
    q: "In YDSE with slit separation $d = 0.5\\text{ mm}$ and screen distance $D = 1.0\\text{ m}$, light of wavelength $500\\text{ nm}$ is used. At what distance $y$ from the central maximum (in millimeters) is the intensity equal to half of the maximum intensity? (Take the closest point to center)",
    val: "0.25",
    exp: "Intensity is $I = I_{max}\\cos^2(\\phi/2) = I_{max}/2 \\implies \\cos(\\phi/2) = 1/\\sqrt{2} \\implies \\phi/2 = \\pi/4 \\implies \\phi = \\pi/2$. The path difference is $\\Delta x = \\frac{\\lambda}{2\\pi}\\phi = \\frac{\\lambda}{4}$. Since $\\Delta x = \\frac{y d}{D}$, we have $y = \\frac{\\lambda D}{4d} = \\frac{\\beta}{4}$. Fringe width is $\\beta = \\frac{500 \\times 10^{-9} \\times 1.0}{0.5 \\times 10^{-3}} = 1.0\\text{ mm}$. Thus $y = 1.0 / 4 = 0.25\\text{ mm}$."
  },
  {
    q: "In YDSE, light of wavelength $540\\text{ nm}$ is used. When a thin glass plate of refractive index $1.5$ is introduced in front of one slit, the optical path increases by $2.7\\,\\mu\\text{m}$. Find the number of fringes by which the central fringe shifts.",
    val: "5",
    exp: "The additional optical path difference is $(\\mu - 1)t = 2.7\\,\\mu\\text{m} = 2700\\text{ nm}$. The number of fringes shifted is $N = \\frac{(\\mu - 1)t}{\\lambda} = \\frac{2700\\text{ nm}}{540\\text{ nm}} = 5$."
  },
  {
    q: "In YDSE, the distance between the slits is $d = 0.2\\text{ mm}$ and the distance to the screen is $D = 1.2\\text{ m}$. If the 10th bright fringe is formed at a distance of $3.6\\text{ cm}$ from the central maximum, find the wavelength of light used in nanometers (nm).",
    val: "600",
    exp: "Position of 10th bright fringe: $y_{10} = 10 \\frac{\\lambda D}{d} = 3.6 \\times 10^{-2}\\text{ m}$. Therefore, $\\lambda = \\frac{y_{10} d}{10 D} = \\frac{(3.6 \\times 10^{-2})(0.2 \\times 10^{-3})}{10 \\times 1.2} = \\frac{7.2 \\times 10^{-6}}{12} = 0.6 \\times 10^{-6}\\text{ m} = 600\\text{ nm}$."
  },
  {
    q: "In a Young's double-slit experiment, the slits are illuminated by light containing two wavelengths $400\\text{ nm}$ and $560\\text{ nm}$. The distance between the slits is $0.28\\text{ mm}$ and the screen is at a distance of $1.4\\text{ m}$. What is the separation (in mm) between the 4th bright fringe of $400\\text{ nm}$ and the 3rd bright fringe of $560\\text{ nm}$ on the same side of the central line?",
    val: "0.4",
    exp: "For $\\lambda_1 = 400\\text{ nm}$, $y_4 = 4 \\frac{\\lambda_1 D}{d} = \\frac{4 \\times 400 \\times 10^{-9} \\times 1.4}{0.28 \\times 10^{-3}} = \\frac{2.24 \\times 10^{-6}}{0.28 \\times 10^{-3}} = 8.0\\text{ mm}$. For $\\lambda_2 = 560\\text{ nm}$, $y_3 = 3 \\frac{\\lambda_2 D}{d} = \\frac{3 \\times 560 \\times 10^{-9} \\times 1.4}{0.28 \\times 10^{-3}} = \\frac{2.352 \\times 10^{-6}}{0.28 \\times 10^{-3}} = 8.4\\text{ mm}$. Separation is $\\Delta y = |8.4 - 8.0| = 0.4\\text{ mm}$."
  },
  {
    q: "In YDSE, two slits with intensity ratio $I_1 / I_2 = 16 / 9$ produce an interference pattern. The value of $\\frac{I_{max} + I_{min}}{I_{max} - I_{min}}$ is $x / y$ in lowest terms. Find the value of $(x + y)$.",
    val: "49",
    exp: "Here $a_1 / a_2 = \\sqrt{16/9} = 4/3$. Then $I_{max} = (4+3)^2 = 49$, and $I_{min} = (4-3)^2 = 1$. Thus $\\frac{I_{max} + I_{min}}{I_{max} - I_{min}} = \\frac{49 + 1}{49 - 1} = \\frac{50}{48} = \\frac{25}{24}$. Here $x = 25, y = 24$, so $x + y = 25 + 24 = 49$."
  },
  {
    q: "In Young's double-slit experiment, the fringe width is $1.2\\text{ mm}$. If the distance between the slits is reduced to half and the distance of the screen from the slits is tripled, find the new fringe width in millimeters (mm).",
    val: "7.2",
    exp: "Fringe width is $\\beta = \\frac{\\lambda D}{d}$. When $d' = d/2$ and $D' = 3D$, $\\beta' = \\frac{\\lambda (3D)}{d/2} = 6 \\frac{\\lambda D}{d} = 6\\beta = 6 \\times 1.2\\text{ mm} = 7.2\\text{ mm}$."
  },
  {
    q: "In a YDSE, a beam of light of wavelength $500\\text{ nm}$ is used with $d = 1\\text{ mm}$ and $D = 1\\text{ m}$. Find the total number of bright fringes formed within a central width of $1.5\\text{ cm}$ on the screen (including the central maximum).",
    val: "31",
    exp: "Fringe width is $\\beta = \\frac{\\lambda D}{d} = \\frac{500 \\times 10^{-9} \\times 1}{10^{-3}} = 0.5\\text{ mm}$. The central region extends from $y = -7.5\\text{ mm}$ to $y = +7.5\\text{ mm}$. The maximum order is $n = \\frac{7.5\\text{ mm}}{0.5\\text{ mm}} = 15$. Total bright fringes = $2n + 1 = 2(15) + 1 = 31$."
  },
  {
    q: "In a YDSE, the path difference at a point on the screen is $5\\lambda / 4$. If the maximum intensity is $I_{max} = 100\\text{ W/m}^2$, find the intensity at this point in $\\text{W/m}^2$.",
    val: "50",
    exp: "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda}\\left(\\frac{5\\lambda}{4}\\right) = \\frac{5\\pi}{2} = 2\\pi + \\frac{\\pi}{2}$. Intensity is $I = I_{max}\\cos^2(\\phi/2) = 100 \\cos^2(5\\pi/4) = 100 \\times (-1/\\sqrt{2})^2 = 100 \\times \\frac{1}{2} = 50\\text{ W/m}^2$."
  },
  {
    q: "In YDSE, the distance between the 1st and 5th bright fringes on the screen is $4.0\\text{ mm}$. If the distance between the slits is $1.2\\text{ mm}$ and the screen is at a distance of $1.6\\text{ m}$, find the wavelength of light in nanometers (nm).",
    val: "750",
    exp: "Distance between 1st and 5th bright fringes is $(5 - 1)\\beta = 4\\beta = 4.0\\text{ mm} \\implies \\beta = 1.0\\text{ mm} = 1.0 \\times 10^{-3}\\text{ m}$. Since $\\beta = \\frac{\\lambda D}{d}$, we have $\\lambda = \\frac{\\beta d}{D} = \\frac{(1.0 \\times 10^{-3})(1.2 \\times 10^{-3})}{1.6} = \\frac{1.2 \\times 10^{-6}}{1.6} = 0.75 \\times 10^{-6}\\text{ m} = 750\\text{ nm}$."
  },
  {
    q: "In YDSE, two slits are illuminated by light of wavelength $\\lambda = 600\\text{ nm}$. If the slit separation is $d = 0.6\\text{ mm}$ and screen distance is $D = 1.5\\text{ m}$, find the distance (in mm) of the 5th dark fringe from the central line.",
    val: "6.75",
    exp: "Fringe width is $\\beta = \\frac{\\lambda D}{d} = \\frac{600 \\times 10^{-9} \\times 1.5}{0.6 \\times 10^{-3}} = 1.5\\text{ mm}$. The position of the 5th dark fringe is $y_{5,dark} = (2 \\times 5 - 1)\\frac{\\beta}{2} = 4.5\\beta = 4.5 \\times 1.5\\text{ mm} = 6.75\\text{ mm}$."
  },
  {
    q: "In a YDSE setup, introducing a thin glass film of refractive index $\\mu = 1.5$ in front of one slit shifts the fringe pattern by 12 fringe widths. If the thickness of the film is $t = 14.4\\,\\mu\\text{m}$, find the wavelength of light used in nanometers (nm).",
    val: "600",
    exp: "Fringe shift is $N = \\frac{(\\mu - 1)t}{\\lambda} = 12 \\implies \\lambda = \\frac{(\\mu - 1)t}{12} = \\frac{(1.5 - 1) \\times 14.4 \\times 10^{-6}}{12} = \\frac{7.2 \\times 10^{-6}}{12} = 0.6 \\times 10^{-6}\\text{ m} = 600\\text{ nm}$."
  },
  {
    q: "In YDSE, the distance between the two slits is $d = 0.3\\text{ mm}$ and the screen is at a distance of $D = 1.5\\text{ m}$. When light of wavelength $\\lambda = 500\\text{ nm}$ is used, find the path difference (in micrometers, $\\mu\\text{m}$) at a point on the screen located at $y = 5.0\\text{ mm}$ from the central maximum.",
    val: "1",
    exp: "Path difference is $\\Delta x = \\frac{y d}{D} = \\frac{(5.0 \\times 10^{-3})(0.3 \\times 10^{-3})}{1.5} = \\frac{1.5 \\times 10^{-6}}{1.5} = 1.0 \\times 10^{-6}\\text{ m} = 1.0\\,\\mu\\text{m}$."
  },
  {
    q: "In YDSE, the angular width of a fringe is found to be $0.1^\\circ$ on a screen placed $1\\text{ m}$ away. The wavelength of light used is $600\\text{ nm}$. To increase the angular fringe width to $0.15^\\circ$ without changing the wavelength, the slit separation must be changed to $d'\\text{ mm}$. Find the value of $100d'$.",
    val: "23",
    exp: "Angular fringe width in radians: $\\theta = \\frac{\\lambda}{d} \\implies d = \\frac{\\lambda}{\\theta}$. For $\\theta = 0.1^\\circ = 0.1 \\times \\frac{\\pi}{180}\\text{ rad}$, $d = \\frac{600 \\times 10^{-9}}{0.1 \\times \\pi / 180} \\approx 0.344\\text{ mm}$. For $\\theta' = 0.15^\\circ$, $d' = \\frac{600 \\times 10^{-9}}{0.15 \\times \\pi / 180} = \\frac{2}{3}d = \\frac{2}{3}(0.3438\\text{ mm}) \\approx 0.229\\text{ mm} \\approx 0.23\\text{ mm}$. Therefore, $100d' \\approx 23$."
  }
];

numData.forEach((item, idx) => {
  questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.val,
    numericalAnswer: item.val,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    difficulty: idx % 3 === 0 ? "Easy" : (idx % 3 === 1 ? "Medium" : "Hard"),
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: "Optics",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 9 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);

const outputPath = path.join(__dirname, 'data_jee_optics_part9.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outputPath}`);
