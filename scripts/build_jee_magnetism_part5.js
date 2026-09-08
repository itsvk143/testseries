const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Magnetic properties (dia, para, ferromagnetism)";
const questions = [];

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
  "Assertion is true but Reason is false.",
  "Assertion is false but Reason is true."
];

// 26 ASSERTION_REASON questions
const arData = [
  {
    assertion: "Diamagnetic materials are weakly repelled by an external magnetic field.",
    reason: "When a diamagnetic substance is placed in an external magnetic field, an induced magnetic dipole moment is developed in each atom in a direction opposite to the applied magnetic field in accordance with Lenz's law.",
    correct: 0,
    explanation: "Diamagnetism arises from the orbital motion of paired electrons. An external field alters their orbital speeds such that the induced magnetic moments oppose the external field (Lenz's law). Consequently, the material experiences a repulsive force towards regions of weaker magnetic field."
  },
  {
    assertion: "The magnetic susceptibility $\\chi$ of a diamagnetic substance is small, negative, and independent of temperature.",
    reason: "The mechanism of diamagnetism depends on the induced orbital magnetic moments of electrons, which are unaffected by thermal agitation.",
    correct: 0,
    explanation: "Diamagnetism is an intrinsic property of all atoms with paired electron orbits. The induced change in orbital angular momentum depends only on the atomic charge and radius, completely independent of temperature $T$. Hence $\\chi$ is negative, small ($\\sim -10^{-5}$), and temperature-independent."
  },
  {
    assertion: "The magnetic susceptibility of a paramagnetic material is inversely proportional to its absolute temperature.",
    reason: "Curie's law states that $\\chi = \\frac{C}{T}$, because thermal agitation tends to randomize the orientation of the permanent atomic magnetic dipoles.",
    correct: 0,
    explanation: "Paramagnetic atoms have permanent dipole moments due to unpaired electrons. An external field aligns them, but thermal kinetic energy randomizes their alignment. As temperature increases, randomization increases, reducing net magnetization according to Curie's law $\\chi = C/T$."
  },
  {
    assertion: "Superconductors exhibit perfect diamagnetism with magnetic susceptibility $\\chi = -1$.",
    reason: "When a material transitions into the superconducting state, it completely expels all interior magnetic flux lines, a phenomenon known as the Meissner effect.",
    correct: 0,
    explanation: "Inside a superconductor, the magnetic induction is zero ($\\vec{B} = 0$). Since $\\vec{B} = \\mu_0(\\vec{H} + \\vec{M}) = 0$, we have $\\vec{M} = -\\vec{H}$, which yields $\\chi = M/H = -1$ and relative permeability $\\mu_r = 1 + \\chi = 0$. This complete flux expulsion is the Meissner effect."
  },
  {
    assertion: "Above the Curie temperature, a ferromagnetic substance behaves as a paramagnetic substance.",
    reason: "At temperatures above the Curie point $T_c$, thermal energy overcomes the quantum exchange coupling between neighboring atomic dipoles, destroying domain structure.",
    correct: 0,
    explanation: "In ferromagnetism, exchange interaction holds dipoles in parallel alignment within domains. Above the Curie temperature $T_c$, thermal vibrations overpower the exchange coupling, the spontaneous domain magnetization vanishes, and the substance obeys the Curie-Weiss law $\\chi = \\frac{C'}{T - T_c}$ as a paramagnet."
  },
  {
    assertion: "Soft iron is preferred over steel for making the cores of electromagnets and transformers.",
    reason: "Soft iron has high magnetic permeability, high retentivity, low coercivity, and a narrow hysteresis loop, leading to minimal energy loss per cycle of magnetization.",
    correct: 0,
    explanation: "Electromagnets and transformers require high magnetization with small magnetizing currents (high $\\mu_r$), rapid demagnetization when current is switched off (low coercivity $H_c$), and low energy loss per AC cycle (small area of hysteresis loop). Soft iron fulfills all these criteria."
  },
  {
    assertion: "Steel is preferred over soft iron for making permanent magnets.",
    reason: "Steel has a much higher coercivity than soft iron, allowing it to retain its magnetization against stray external demagnetizing fields and mechanical shocks.",
    correct: 0,
    explanation: "Permanent magnets require materials that do not easily lose their magnetization over time. Although soft iron has slightly higher retentivity, steel has a much larger coercivity $H_c$ and hysteresis loop width, making it resistant to demagnetization."
  },
  {
    assertion: "The area of the $B-H$ hysteresis loop represents the energy dissipated as heat per unit volume of the ferromagnetic material per cycle of magnetization.",
    reason: "During cyclic magnetization, the work done per unit volume in tracing the complete hysteresis loop is given by $W = \\oint H dB$.",
    correct: 0,
    explanation: "The energy dissipated per cycle of alternating magnetizing field per unit volume equals the area enclosed by the $B-H$ hysteresis curve: $W/V = \\oint H dB$. This energy is irreversibly converted into internal thermal energy (hysteresis loss)."
  },
  {
    assertion: "When a bar of diamagnetic material is suspended freely in a uniform horizontal magnetic field, it comes to rest with its length perpendicular to the field direction.",
    reason: "The induced magnetic poles at the ends of the diamagnetic bar are like poles to the adjacent magnetic field poles, experiencing repulsive forces that align the bar along the direction of weakest magnetic flux.",
    correct: 0,
    explanation: "In a diamagnetic rod, the induced poles are identical in sign to the magnetic poles of the field (repelled). The minimum potential energy orientation occurs when the rod lies perpendicular to the field lines."
  },
  {
    assertion: "When a paramagnetic liquid contained in a watch glass placed on two closely spaced pole pieces is observed, it accumulates in the middle where the field is strongest.",
    reason: "Paramagnetic materials are attracted towards regions of stronger magnetic field.",
    correct: 0,
    explanation: "Between two close magnetic pole pieces, the magnetic field is strongest at the center. Paramagnetic liquids move towards regions of maximum field intensity, forming a convex elevation in the middle. If the poles are separated further, the field is strongest near the poles, and the liquid depresses in the middle."
  },
  {
    assertion: "The relative magnetic permeability $\\mu_r$ of a diamagnetic substance is slightly less than 1.",
    reason: "The relation between relative permeability and magnetic susceptibility is $\\mu_r = 1 + \\chi$, and for diamagnetic substances, $\\chi$ is negative.",
    correct: 0,
    explanation: "Since $\\mu_r = 1 + \\chi$ and $\\chi < 0$ (typically $-10^{-5}$ to $-10^{-9}$), $\\mu_r$ is slightly less than 1 (e.g., $0.99999$). Reason correctly explains Assertion."
  },
  {
    assertion: "The magnetic field lines are expelled from the interior of a diamagnetic substance placed in an external magnetic field.",
    reason: "The total magnetic field inside a diamagnetic substance is $B = \\mu_0(H + M) < \\mu_0 H$ because the magnetization $M$ opposes the magnetizing field $H$.",
    correct: 0,
    explanation: "Because the induced magnetization $\\vec{M}$ is opposite to $\\vec{H}$, the internal magnetic field $B$ is slightly weaker than the external field $B_0$. Hence, magnetic field lines are slightly pushed out (expelled) from the material."
  },
  {
    assertion: "A paramagnetic gas cools down when demagnetized adiabatically.",
    reason: "During adiabatic demagnetization, the magnetic dipoles randomize their alignment at the expense of the internal kinetic energy of the system.",
    correct: 0,
    explanation: "Adiabatic demagnetization is an established cryogenic technique. Aligning dipoles reduces magnetic entropy. When the magnetic field is removed adiabatically, total entropy is conserved, so thermal entropy must decrease, causing the temperature to drop drastically (cooling)."
  },
  {
    assertion: "Ferromagnetic materials do not follow Curie's law $\\chi = C/T$ at temperatures below the Curie point.",
    reason: "Below the Curie temperature, ferromagnetic substances possess spontaneous magnetization organized in magnetic domains governed by quantum exchange interactions.",
    correct: 0,
    explanation: "Below $T_c$, ferromagnets have spontaneous domain magnetization that does not follow simple Curie paramagnetic behavior. They exhibit hysteresis and non-linear $M-H$ curves. Only above $T_c$ do they follow the modified Curie-Weiss law $\\chi = \\frac{C'}{T - T_c}$."
  },
  {
    assertion: "The coercivity of a ferromagnetic material is the value of reverse magnetic intensity required to completely demagnetize it.",
    reason: "At coercivity $H_c$, the net magnetic induction $B$ inside the material is reduced to zero.",
    correct: 0,
    explanation: "Coercivity is defined as the reverse magnetizing field intensity $H = -H_c$ needed along the hysteresis loop to bring the residual magnetic flux density $B$ (or magnetization $M$) back to zero."
  },
  {
    assertion: "Retentivity is the measure of the magnetic induction remaining in a ferromagnetic material when the magnetizing field is reduced to zero.",
    reason: "When the external field $H$ becomes zero, all domains instantly randomize their magnetic orientations.",
    correct: 2,
    explanation: "Retentivity (remanence) is indeed the value of $B$ remaining when $H = 0$. However, Reason is false because domains do NOT instantly randomize; domain wall pinning and anisotropic energy prevent complete relaxation, which is the very cause of retentivity."
  },
  {
    assertion: "A permanent magnet attracts an unmagnetized iron nail by first inducing magnetic poles in it.",
    reason: "When an unmagnetized ferromagnetic substance is brought near a magnetic pole, domain alignment occurs in the direction of the external field, producing an opposite pole on the nearer side.",
    correct: 0,
    explanation: "The field of the permanent magnet causes domain growth and rotation in the iron nail, inducing an opposite magnetic pole on the closer end. The attractive force between unlike closer poles exceeds the repulsive force between like farther poles, pulling the nail towards the magnet."
  },
  {
    assertion: "The magnetic susceptibility of water is negative.",
    reason: "Water is a diamagnetic substance consisting entirely of molecules with paired electrons.",
    correct: 0,
    explanation: "Water consists of $H_2O$ molecules with completely paired electrons in closed molecular orbitals. Consequently, water is diamagnetic, with a small negative susceptibility $\\chi \\approx -9.0 \\times 10^{-6}$."
  },
  {
    assertion: "Liquid oxygen sticks between the poles of a strong electromagnet.",
    reason: "Liquid oxygen is strongly paramagnetic due to two unpaired electrons in its outer antibonding $\\pi^*$ molecular orbitals.",
    correct: 0,
    explanation: "According to molecular orbital theory, $O_2$ has two unpaired electrons with parallel spins in $\\pi^*_{2p}$ orbitals. This confers a substantial permanent dipole moment, making liquid oxygen strongly paramagnetic and visibly attracted to strong magnetic pole pieces."
  },
  {
    assertion: "The magnetic susceptibility of a superconductor is $+1$.",
    reason: "Superconductors permit magnetic field lines to penetrate through them with zero resistance.",
    correct: 3,
    explanation: "Superconductors exhibit the Meissner effect, expelling all magnetic fields so that $B = 0$ inside. This requires $M = -H$, giving $\\chi = -1$ (perfect diamagnetism), not $+1$. Both Assertion and Reason are false (Option 3: Assertion is false)."
  },
  {
    assertion: "Heating a permanent magnet above its Curie temperature destroys its permanent magnetization.",
    reason: "Thermal agitation above the Curie point breaks down the cooperative domain structure into randomly oriented independent atomic dipoles.",
    correct: 0,
    explanation: "Above $T_c$, thermal energy $k_B T$ exceeds the exchange coupling energy, causing spontaneous domain alignment to collapse. When cooled back in the absence of an external field, domains form in random directions, leaving no net macroscopic magnetization."
  },
  {
    assertion: "The magnetic permeability of free space is $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$.",
    reason: "In free space, magnetization $M = 0$, so the magnetic induction is directly proportional to magnetic intensity: $\\vec{B} = \\mu_0 \\vec{H}$.",
    correct: 0,
    explanation: "In a vacuum, there is no matter to magnetize ($M = 0$). Thus $\\vec{B} = \\mu_0(\\vec{H} + \\vec{M}) = \\mu_0 \\vec{H}$. In SI units, $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$."
  },
  {
    assertion: "Alnico is widely used to manufacture permanent magnets.",
    reason: "Alnico (an alloy of aluminium, nickel, and cobalt) has a high retentivity and exceptionally high coercivity, resulting in high resistance to demagnetization.",
    correct: 0,
    explanation: "Alnico possesses high saturation magnetization, substantial retentivity, and high coercivity, making it an excellent material for durable permanent magnets used in loudspeakers, meters, and motors."
  },
  {
    assertion: "Bismuth is the most strongly diamagnetic elemental substance known at room temperature.",
    reason: "Bismuth has an unusually large diamagnetic susceptibility of $\\chi \\approx -1.7 \\times 10^{-4}$ due to its unique electronic band structure with low effective mass and large orbital radii.",
    correct: 0,
    explanation: "Among non-superconducting elements at room temperature, bismuth displays the strongest diamagnetism with $\\chi \\approx -1.7 \\times 10^{-4}$, easily demonstrating levitation between strong rare-earth magnets."
  },
  {
    assertion: "The magnetic moment per unit volume of a magnetized substance is called its magnetization $\\vec{M}$.",
    reason: "Magnetization has the SI unit of $\\text{Ampere per meter}$ ($\\text{A/m}$).",
    correct: 1,
    explanation: "Magnetization is defined as net magnetic dipole moment per unit volume: $\\vec{M} = \\frac{\\vec{m}_{net}}{V}$. The unit of $\\vec{m}$ is $\\text{A}\\cdot\\text{m}^2$, so $\\vec{M}$ has units $\\frac{\\text{A}\\cdot\\text{m}^2}{\\text{m}^3} = \\text{A/m}$. Both Assertion and Reason are true, but Reason is a dimensional statement, not the causal explanation of the definition."
  },
  {
    assertion: "When an iron rod is magnetized, its length increases slightly.",
    reason: "The alignment of magnetic domains during magnetization introduces mechanical strain in the crystal lattice along the field direction (magnetostriction).",
    correct: 0,
    explanation: "The phenomenon where a ferromagnetic substance changes its physical dimensions during magnetization is called magnetostriction. The rotation and boundary displacement of magnetic domains distort the crystalline lattice, causing tiny fractional changes in length."
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
    chapter: "Magnetic Effects of Current and Magnetism",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

// 7 MCQ questions
const mcqData = [
  {
    q: "A specimen of iron of volume $V = 1.0 \\times 10^{-4}\\text{ m}^3$ is subjected to a cyclic magnetization field at a frequency of $50\\text{ Hz}$. The area of the $B-H$ hysteresis loop is found to be $200\\text{ J/m}^3$. The rate of energy loss due to hysteresis in the specimen is:",
    opts: [
      "$1.0\\text{ W}$",
      "$2.0\\text{ W}$",
      "$4.0\\text{ W}$",
      "$10.0\\text{ W}$"
    ],
    ans: 0,
    exp: "Energy loss per cycle per unit volume is the area of the hysteresis loop: $E_0 = 200\\text{ J/m}^3$. Power loss is $P = E_0 \\times V \\times f = (200\\text{ J/m}^3)(1.0 \\times 10^{-4}\\text{ m}^3)(50\\text{ s}^{-1}) = 200 \\times 10^{-4} \\times 50 = 1.0\\text{ W}$."
  },
  {
    q: "The magnetic susceptibility of a paramagnetic material is $\\chi = 0.0075$ at a temperature of $300\\text{ K}$. At what temperature will its magnetic susceptibility become $0.0025$?",
    opts: [
      "$600\\text{ K}$",
      "$900\\text{ K}$",
      "$1200\\text{ K}$",
      "$150\\text{ K}$"
    ],
    ans: 1,
    exp: "According to Curie's law, $\\chi \\propto 1/T \\implies \\chi_1 T_1 = \\chi_2 T_2$. Therefore: $T_2 = T_1 \\frac{\\chi_1}{\\chi_2} = 300 \\times \\frac{0.0075}{0.0025} = 300 \\times 3 = 900\\text{ K}$."
  },
  {
    q: "A solenoid of $1000$ turns per meter has a core made of a ferromagnetic material with relative permeability $\\mu_r = 400$. When a current of $2.0\\text{ A}$ passes through the winding, the magnetization $M$ of the core is:",
    opts: [
      "$7.98 \\times 10^5\\text{ A/m}$",
      "$8.00 \\times 10^5\\text{ A/m}$",
      "$4.00 \\times 10^5\\text{ A/m}$",
      "$1.60 \\times 10^6\\text{ A/m}$"
    ],
    ans: 0,
    exp: "Magnetic intensity $H = n I = (1000)(2.0) = 2000\\text{ A/m}$. Susceptibility is $\\chi = \\mu_r - 1 = 400 - 1 = 399$. Magnetization is $M = \\chi H = 399 \\times 2000 = 798000\\text{ A/m} = 7.98 \\times 10^5\\text{ A/m}$."
  },
  {
    q: "A domain in a ferromagnetic iron crystal is in the shape of a cube of side length $1.0\\,\\mu\\text{m}$. If the atomic dipole moment of iron is $9.27 \\times 10^{-24}\\text{ A}\\cdot\\text{m}^2$ (1 Bohr magneton) and the molecular weight of iron is $56\\text{ g/mol}$ with density $7.8\\text{ g/cm}^3$, the maximum magnetic dipole moment of the domain is approximately:",
    opts: [
      "$7.7 \\times 10^{-13}\\text{ A}\\cdot\\text{m}^2$",
      "$1.5 \\times 10^{-12}\\text{ A}\\cdot\\text{m}^2$",
      "$8.0 \\times 10^{-15}\\text{ A}\\cdot\\text{m}^2$",
      "$4.2 \\times 10^{-11}\\text{ A}\\cdot\\text{m}^2$"
    ],
    ans: 0,
    exp: "Volume of cube $V = (10^{-6}\\text{ m})^3 = 10^{-18}\\text{ m}^3 = 10^{-12}\\text{ cm}^3$. Mass $m = \\rho V = 7.8 \\times 10^{-12}\\text{ g}$. Number of atoms $N = \\frac{m}{M_A} N_A = \\frac{7.8 \\times 10^{-12}}{56} \\times 6.022 \\times 10^{23} = 8.388 \\times 10^{10}$ atoms. Maximum dipole moment $m_{max} = N \\times \\mu_B = (8.388 \\times 10^{10})(9.27 \\times 10^{-24}) \\approx 7.77 \\times 10^{-13}\\text{ A}\\cdot\\text{m}^2$."
  },
  {
    q: "Which of the following statements correctly identifies the magnetic properties of diamagnetic, paramagnetic, and ferromagnetic materials?",
    opts: [
      "Diamagnetic: $\\chi < 0$; Paramagnetic: $0 < \\chi \\ll 1$; Ferromagnetic: $\\chi \\gg 1$",
      "Diamagnetic: $\\chi > 0$; Paramagnetic: $\\chi < 0$; Ferromagnetic: $\\chi \\gg 1$",
      "Diamagnetic: $\\mu_r > 1$; Paramagnetic: $\\mu_r < 1$; Ferromagnetic: $\\mu_r \\gg 1$",
      "Diamagnetic: $\\chi = -1$; Paramagnetic: $\\chi = 0$; Ferromagnetic: $\\chi = \\infty$"
    ],
    ans: 0,
    exp: "Diamagnetic substances have negative susceptibility ($-1 \\le \\chi < 0$) and $\\mu_r < 1$. Paramagnetic substances have small positive susceptibility ($0 < \\chi \\ll 1$) and $\\mu_r > 1$. Ferromagnetic substances have very large positive susceptibility ($\\chi \\gg 1$) and $\\mu_r \\gg 1$."
  },
  {
    q: "A magnetic needle placed in a non-uniform magnetic field experiences:",
    opts: [
      "Both a net force and a net torque",
      "A net torque but no net force",
      "A net force but no net torque",
      "Neither a force nor a torque"
    ],
    ans: 0,
    exp: "In a non-uniform magnetic field, the two magnetic poles of the needle experience unequal forces because the field strength differs at the two ends. Hence, there is a net translational force $\\vec{F} = \\nabla(\\vec{M} \\cdot \\vec{B})$ in addition to the aligning torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$."
  },
  {
    q: "The Curie temperature of iron is approximately $770^\\circ\\text{C}$ ($1043\\text{ K}$). At $800^\\circ\\text{C}$, a piece of iron is:",
    opts: [
      "Paramagnetic",
      "Ferromagnetic",
      "Diamagnetic",
      "Superconducting"
    ],
    ans: 0,
    exp: "Above its Curie temperature ($T > T_c = 770^\\circ\\text{C}$), the spontaneous domain magnetization in iron is completely destroyed by thermal energy, and the material transitions into a paramagnetic state."
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
    chapter: "Magnetic Effects of Current and Magnetism",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

// 20 NUMERICAL questions
const numData = [
  {
    q: "The magnetic susceptibility of a paramagnetic material at $300\\text{ K}$ is $1.2 \\times 10^{-5}$. What is its susceptibility at $400\\text{ K}$? Express your answer in units of $10^{-6}$.",
    val: "9",
    exp: "By Curie's law, $\\chi_1 T_1 = \\chi_2 T_2 \\implies \\chi_2 = \\chi_1 \\frac{T_1}{T_2} = (1.2 \\times 10^{-5})\\frac{300}{400} = 0.9 \\times 10^{-5} = 9.0 \\times 10^{-6}$."
  },
  {
    q: "A magnetic material has a relative permeability $\\mu_r = 500$. Find the magnetic susceptibility $\\chi$ of the material.",
    val: "499",
    exp: "$\\chi = \\mu_r - 1 = 500 - 1 = 499$."
  },
  {
    q: "An iron bar of cross-sectional area $4.0\\text{ cm}^2$ is placed in a magnetizing field of $H = 1500\\text{ A/m}$. The magnetic flux produced in the bar is $2.4 \\times 10^{-4}\\text{ Wb}$. What is the relative permeability $\\mu_r$ of the iron bar? (Take $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}, \\pi = 3.14$)",
    val: "318",
    exp: "Magnetic induction $B = \\frac{\\Phi}{A} = \\frac{2.4 \\times 10^{-4}\\text{ Wb}}{4.0 \\times 10^{-4}\\text{ m}^2} = 0.60\\text{ T}$. Permeability $\\mu = \\frac{B}{H} = \\frac{0.60}{1500} = 4.0 \\times 10^{-4}\\text{ T}\\cdot\\text{m/A}$. Relative permeability $\\mu_r = \\frac{\\mu}{\\mu_0} = \\frac{4.0 \\times 10^{-4}}{4\\pi \\times 10^{-7}} = \\frac{1000}{\\pi} = \\frac{1000}{3.1416} \\approx 318.3 \\approx 318$."
  },
  {
    q: "A solenoid with $500$ turns per meter carries a current of $2.0\\text{ A}$. It has a core of relative permeability $\\mu_r = 600$. What is the magnetic field $B$ inside the core in Tesla? (Take $\\pi = 3.14$)",
    val: "0.75",
    exp: "$H = n I = 500 \\times 2.0 = 1000\\text{ A/m}$. Field $B = \\mu_r \\mu_0 H = 600 \\times (4\\pi \\times 10^{-7})(1000) = 2.4\\pi \\times 10^{-1} = 0.24(3.1416) \\approx 0.754\\text{ T} \\approx 0.75\\text{ T}$."
  },
  {
    q: "A ferromagnetic core of volume $V = 2.0 \\times 10^{-4}\\text{ m}^3$ is magnetized in an AC circuit at $50\\text{ Hz}$. If the hysteresis loop area is $150\\text{ J/m}^3$, find the energy loss per hour in Joules.",
    val: "5400",
    exp: "Energy loss per cycle $= 150 \\times (2.0 \\times 10^{-4}) = 0.03\\text{ J}$. Number of cycles in 1 hour $= 50\\text{ cycles/s} \\times 3600\\text{ s} = 1.8 \\times 10^5\\text{ cycles}$. Total energy loss in 1 hour $= 0.03 \\times 1.8 \\times 10^5 = 5400\\text{ J}$."
  },
  {
    q: "For a diamagnetic material, the magnetic susceptibility is $\\chi = -4.0 \\times 10^{-5}$. What is the relative magnetic permeability $\\mu_r$ of the material? Find the value of $(\\mu_r - 1) \\times 10^5$.",
    val: "-4",
    exp: "$\\mu_r = 1 + \\chi = 1 - 4.0 \\times 10^{-5} = 0.99996$. Therefore, $(\\mu_r - 1) \\times 10^5 = \\chi \\times 10^5 = -4$."
  },
  {
    q: "A solenoid of length $0.5\\text{ m}$ has $1000$ turns. When a current of $1.5\\text{ A}$ flows through it, the magnetic intensity $H$ inside the solenoid in $\\text{A/m}$ is:",
    val: "3000",
    exp: "$n = \\frac{N}{L} = \\frac{1000}{0.5} = 2000\\text{ m}^{-1}$. $H = n I = 2000 \\times 1.5 = 3000\\text{ A/m}$."
  },
  {
    q: "An electromagnet has a core of soft iron with coercivity $H_c = 50\\text{ A/m}$. The solenoid has $1000$ turns per meter. What reverse current in milli-Amperes (mA) must be passed to completely demagnetize the core?",
    val: "50",
    exp: "$H = n I \\implies I = \\frac{H_c}{n} = \\frac{50}{1000} = 0.050\\text{ A} = 50\\text{ mA}$."
  },
  {
    q: "A magnetic substance has magnetization $M = 2.4 \\times 10^5\\text{ A/m}$ when placed in a magnetic intensity $H = 6.0 \\times 10^2\\text{ A/m}$. The magnetic susceptibility $\\chi$ of the substance is:",
    val: "400",
    exp: "$\\chi = \\frac{M}{H} = \\frac{2.4 \\times 10^5}{6.0 \\times 10^2} = 400$."
  },
  {
    q: "A permanent magnet has a volume of $2.5 \\times 10^{-5}\\text{ m}^3$ and a magnetic moment of $2.0\\text{ A}\\cdot\\text{m}^2$. What is the magnetization $M$ of the magnet in units of $10^4\\text{ A/m}$?",
    val: "8",
    exp: "$M = \\frac{m}{V} = \\frac{2.0}{2.5 \\times 10^{-5}} = 8.0 \\times 10^4\\text{ A/m}$. In units of $10^4\\text{ A/m}$, the value is $8$."
  },
  {
    q: "A paramagnetic liquid of volume $5.0\\text{ cm}^3$ has susceptibility $\\chi = 2.0 \\times 10^{-4}$. When placed in a magnetic field of intensity $H = 1.0 \\times 10^5\\text{ A/m}$, the magnetic moment induced in the liquid in units of $10^{-4}\\text{ A}\\cdot\\text{m}^2$ is:",
    val: "1",
    exp: "$M = \\chi H = (2.0 \\times 10^{-4})(1.0 \\times 10^5) = 20\\text{ A/m}$. Volume $V = 5.0 \\times 10^{-6}\\text{ m}^3$. Induced magnetic moment $m = M V = 20 \\times (5.0 \\times 10^{-6}) = 1.0 \\times 10^{-4}\\text{ A}\\cdot\\text{m}^2$."
  },
  {
    q: "A ferromagnetic material above its Curie temperature ($T_c = 400\\text{ K}$) has a susceptibility of $0.05$ at $T = 500\\text{ K}$. What will be its susceptibility at $T = 600\\text{ K}$?",
    val: "0.025",
    exp: "Curie-Weiss law: $\\chi = \\frac{C'}{T - T_c}$. For $T = 500\\text{ K}$: $0.05 = \\frac{C'}{500 - 400} = \\frac{C'}{100} \\implies C' = 5.0\\text{ K}$. At $T = 600\\text{ K}$: $\\chi = \\frac{5.0}{600 - 400} = \\frac{5.0}{200} = 0.025$."
  },
  {
    q: "A toroid with a soft iron core of relative permeability $\\mu_r = 1000$ has $2000$ turns and a mean radius of $10\\text{ cm}$. A current of $0.5\\text{ A}$ is passed through the windings. The magnetic field $B$ inside the core in Tesla is: (Take $\\pi = 3.14$)",
    val: "2",
    exp: "$B = \\frac{\\mu_r \\mu_0 N I}{2\\pi r} = \\frac{1000 (4\\pi \\times 10^{-7})(2000)(0.5)}{2\\pi (0.10)} = \\frac{2 \\times 10^{-4} \\times 1000}{0.10} = \\frac{0.20}{0.10} = 2.0\\text{ T}$."
  },
  {
    q: "A bar magnet of length $10\\text{ cm}$ has a pole strength of $20\\text{ A}\\cdot\\text{m}$. If the cross-sectional area of the magnet is $2.0\\text{ cm}^2$, find the magnetization $M$ of the magnet in units of $10^5\\text{ A/m}$.",
    val: "1",
    exp: "Magnetic moment $m = q_m \\times 2l = 20 \\times 0.10 = 2.0\\text{ A}\\cdot\\text{m}^2$. Volume $V = A \\times 2l = (2.0 \\times 10^{-4}\\text{ m}^2)(0.10\\text{ m}) = 2.0 \\times 10^{-5}\\text{ m}^3$. Magnetization $M = \\frac{m}{V} = \\frac{2.0}{2.0 \\times 10^{-5}} = 1.0 \\times 10^5\\text{ A/m}$."
  },
  {
    q: "The saturation magnetization of a ferromagnetic substance is $1.5 \\times 10^6\\text{ A/m}$. If each atom has a magnetic dipole moment of $2.0\\mu_B = 1.854 \\times 10^{-23}\\text{ A}\\cdot\\text{m}^2$, find the number of atoms per unit volume in units of $10^{28}\\text{ m}^{-3}$. Round to nearest integer.",
    val: "8",
    exp: "$n = \\frac{M_{sat}}{\\mu_{atom}} = \\frac{1.5 \\times 10^6}{1.854 \\times 10^{-23}} \\approx 8.09 \\times 10^{28}\\text{ m}^{-3} \\approx 8 \\times 10^{28}\\text{ m}^{-3}$."
  },
  {
    q: "A sample of paramagnetic salt has $2.0 \\times 10^{24}$ atomic dipoles each of dipole moment $1.5 \\times 10^{-23}\\text{ A}\\cdot\\text{m}^2$. The sample is placed in a magnetic field of $0.6\\text{ T}$ and cooled to a temperature of $4.0\\text{ K}$. If the total dipole alignment reaches $15\\%$, what is the total magnetic dipole moment of the sample in $\\text{A}\\cdot\\text{m}^2$?",
    val: "4.5",
    exp: "Maximum possible magnetic moment $m_{max} = N \\mu = (2.0 \\times 10^{24})(1.5 \\times 10^{-23}) = 30\\text{ A}\\cdot\\text{m}^2$. At $15\\%$ alignment, $m = 0.15 \\times 30 = 4.5\\text{ A}\\cdot\\text{m}^2$."
  },
  {
    q: "A substance has a magnetic susceptibility of $\\chi = 0.04$ at $T = 300\\text{ K}$. At what temperature in Kelvin will the susceptibility decrease to $\\chi = 0.01$?",
    val: "1200",
    exp: "Curie's law: $\\chi_1 T_1 = \\chi_2 T_2 \\implies T_2 = T_1 \\frac{\\chi_1}{\\chi_2} = 300 \\times \\frac{0.04}{0.01} = 300 \\times 4 = 1200\\text{ K}$."
  },
  {
    q: "A cylindrical iron rod of volume $V = 1.0 \\times 10^{-3}\\text{ m}^3$ has a hysteresis loop of area $400\\text{ J/m}^3$. What is the total energy dissipated as heat after $1000$ magnetization cycles in Joules?",
    val: "400",
    exp: "Energy per cycle $E = \\text{Area} \\times V = 400 \\times (1.0 \\times 10^{-3}) = 0.4\\text{ J}$. For $1000$ cycles: $E_{total} = 0.4 \\times 1000 = 400\\text{ J}$."
  },
  {
    q: "A thin rod of paramagnetic substance of length $10\\text{ cm}$ and mass $50\\text{ g}$ is suspended horizontally. When an external field $H = 2.0 \\times 10^4\\text{ A/m}$ is applied, it acquires a magnetization $M = 8.0\\text{ A/m}$. What is the magnetic susceptibility $\\chi$ in units of $10^{-4}$?",
    val: "4",
    exp: "$\\chi = \\frac{M}{H} = \\frac{8.0}{2.0 \\times 10^4} = 4.0 \\times 10^{-4}$. In units of $10^{-4}$, the value is $4$."
  },
  {
    q: "A small magnetic dipole of moment $M = 0.5\\text{ A}\\cdot\\text{m}^2$ is placed in a non-uniform magnetic field where the field gradient along the $x$-axis is $\\frac{dB}{dx} = 2.0\\text{ T/m}$. If the dipole is aligned along the field, what is the net force experienced by the dipole in Newtons?",
    val: "1",
    exp: "$F = M \\frac{dB}{dx} = (0.5\\text{ A}\\cdot\\text{m}^2)(2.0\\text{ T/m}) = 1.0\\text{ N}$."
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
    chapter: "Magnetic Effects of Current and Magnetism",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 5 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);

const outputPath = path.join(__dirname, 'data_jee_magnetism_part5.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outputPath}`);
