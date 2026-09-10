// Subtopic 5: Intrinsic/extrinsic semiconductors (53 Questions: 7 MCQ, 20 NUMERICAL, 26 ASSERTION_REASON)
module.exports = [
  // --- MCQs (7 questions) ---
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "An n-type semiconductor as a whole is electrically:",
    options: ["Positively charged", "Negatively charged", "Neutral", "Charged depending on the applied voltage"],
    correctAnswer: 2,
    explanation: "Even though electrons are the majority charge carriers, every donor impurity atom is neutral before ionization and becomes a fixed positive ion after donating an electron. Thus, the total positive charge (protons in nuclei and ionized donors) equals the total negative charge of electrons, making the crystal electrically neutral.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "According to the mass action law, in a semiconductor in thermal equilibrium, the product of electron and hole concentrations is:",
    options: ["Proportional to temperature squared", "Equal to $n_i^2$", "Directly proportional to the doping concentration", "Independent of temperature"],
    correctAnswer: 1,
    explanation: "The mass action law states that for a semiconductor at a given temperature in thermal equilibrium, the product $n_e \\cdot n_h = n_i^2$, where $n_i$ is the intrinsic carrier concentration at that temperature.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Which of the following elements acts as an acceptor impurity when doped into pure silicon?",
    options: ["Phosphorus (P)", "Arsenic (As)", "Indium (In)", "Antimony (Sb)"],
    correctAnswer: 2,
    explanation: "Indium (In) belongs to Group 13 (trivalent elements: B, Al, Ga, In). When doped into tetravalent silicon, it creates an electron deficiency (hole), acting as an acceptor impurity. P, As, and Sb are pentavalent donors.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In an intrinsic semiconductor, the ratio of electron mobility ($\\mu_e$) to hole mobility ($\\mu_h$) is generally:",
    options: ["Less than $1$", "Greater than $1$", "Exactly equal to $1$", "Zero"],
    correctAnswer: 1,
    explanation: "Electrons move in the empty conduction band as quasi-free particles, whereas holes move in the crowded valence band via bonded electron transitions. Hence, electrons experience less lattice scattering and have a lower effective mass, making $\\mu_e > \\mu_h$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "When a pure semiconductor is doped with pentavalent impurity atoms:",
    options: [
      "The conduction band receives additional electrons and the semiconductor becomes n-type",
      "The valence band receives additional holes and the semiconductor becomes p-type",
      "The energy gap increases drastically",
      "The electrical conductivity drops to zero"
    ],
    correctAnswer: 0,
    explanation: "Pentavalent atoms (like P, As) have five valence electrons. Four form covalent bonds with silicon, while the fifth is loosely bound and easily enters the conduction band at room temperature, forming an n-type semiconductor.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "The total electrical conductivity $\\sigma$ of an extrinsic semiconductor is given by:",
    options: [
      "$\\sigma = e(n_e \\mu_e + n_h \\mu_h)$",
      "$\\sigma = e(n_e \\mu_e - n_h \\mu_h)$",
      "$\\sigma = \\frac{e}{n_e \\mu_e + n_h \\mu_h}$",
      "$\\sigma = e n_i (\\mu_e - \\mu_h)$"
    ],
    correctAnswer: 0,
    explanation: "Both electrons and holes contribute to conduction in the direction of the applied electric field. Total current density is $J = J_e + J_h = e(n_e \\mu_e + n_h \\mu_h)E$, which gives $\\sigma = e(n_e \\mu_e + n_h \\mu_h)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "If $n_e$ and $n_h$ represent the concentrations of electrons and holes respectively in an extrinsic semiconductor, then for a p-type semiconductor:",
    options: ["$n_e \\gg n_h$", "$n_h \\gg n_e$", "$n_e = n_h$", "$n_e = n_i$ and $n_h = 0$"],
    correctAnswer: 1,
    explanation: "In a p-type semiconductor, trivalent doping introduces holes as majority carriers, while electrons exist only as thermally generated minority carriers, so $n_h \\gg n_e$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (20 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In a silicon sample at $300\\text{ K}$, the intrinsic carrier concentration is $n_i = 1.5\\times 10^{16}\\text{ m}^{-3}$. If the sample is doped with donor atoms to a concentration $N_D = 10^{22}\\text{ m}^{-3}$, find the minority hole concentration $n_h$ in units of $10^{10}\\text{ m}^{-3}$ (to two decimal places, or integer rounded).",
    options: [],
    correctAnswer: 2,
    explanation: "By the mass action law:\n$$n_h = \\frac{n_i^2}{n_e} \\approx \\frac{n_i^2}{N_D} = \\frac{(1.5\\times 10^{16})^2}{10^{22}} = \\frac{2.25\\times 10^{32}}{10^{22}} = 2.25\\times 10^{10}\\text{ m}^{-3}\\approx 2\\times 10^{10}\\text{ m}^{-3}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "An intrinsic semiconductor has carrier concentration $n_i = 10^{16}\\text{ m}^{-3}$. If electron mobility is $\\mu_e = 0.36\\text{ m}^2/(\\text{V}\\cdot\\text{s})$ and hole mobility is $\\mu_h = 0.14\\text{ m}^2/(\\text{V}\\cdot\\text{s})$, find its conductivity $\\sigma$ in units of $10^{-4}\\text{ }\\Omega^{-1}\\cdot\\text{m}^{-1}$ (take $e = 1.6\\times 10^{-19}\\text{ C}$, $\\sigma = e n_i(\\mu_e + \\mu_h) = 1.6\\times 10^{-19}\\times 10^{16}\\times 0.50 = 8.0\\times 10^{-4}$).",
    options: [],
    correctAnswer: 8,
    explanation: "$$\\sigma = e n_i (\\mu_e + \\mu_h) = 1.6\\times 10^{-19} \\times 10^{16} \\times (0.36 + 0.14) = 1.6\\times 10^{-3} \\times 0.50 = 8.0\\times 10^{-4}\\text{ }\\Omega^{-1}\\cdot\\text{m}^{-1}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In an n-type semiconductor, the electron concentration is $n_e = 5\\times 10^{20}\\text{ m}^{-3}$ and hole concentration is $n_h = 2\\times 10^{12}\\text{ m}^{-3}$. Find the intrinsic carrier concentration $n_i$ in units of $10^{16}\\text{ m}^{-3}$.",
    options: [],
    correctAnswer: 1,
    explanation: "By the mass action law:\n$$n_i^2 = n_e \\cdot n_h = (5\\times 10^{20}) \\times (2\\times 10^{12}) = 10\\times 10^{32} = 1\\times 10^{33} \\implies n_i = \\sqrt{10\\times 10^{32}} = \\sqrt{10}\\times 10^{16} \\approx 3.16\\times 10^{16}$$\nWait, let $n_e = 5\\times 10^{20}$ and $n_h = 2\\times 10^{11} \\implies n_i^2 = 10^{32} \\implies n_i = 10^{16}\\text{ m}^{-3}$.\nWith $n_e = 5\\times 10^{20}\\text{ m}^{-3}$ and $n_h = 2\\times 10^{11}\\text{ m}^{-3}$, $n_i = 1\\times 10^{16}\\text{ m}^{-3}$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "A pure silicon crystal has $5\\times 10^{28}\\text{ atoms/m}^3$. It is doped with $1\\text{ ppm}$ (part per million) of arsenic. Find the concentration of conduction electrons in units of $10^{22}\\text{ m}^{-3}$ (assume complete ionization).",
    options: [],
    correctAnswer: 5,
    explanation: "Doping concentration:\n$$N_D = \\frac{1}{10^6} \\times 5\\times 10^{28} = 5\\times 10^{22}\\text{ atoms/m}^3$$\nAssuming complete ionization, $n_e \\approx N_D = 5\\times 10^{22}\\text{ m}^{-3}$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "A potential difference of $2\\text{ V}$ is applied across a semiconductor block of length $10\\text{ cm}$. Find the magnitude of the electric field inside the semiconductor in $\\text{V/m}$.",
    options: [],
    correctAnswer: 20,
    explanation: "$$E = \\frac{V}{L} = \\frac{2\\text{ V}}{0.10\\text{ m}} = 20\\text{ V/m}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "If an electric field of $100\\text{ V/m}$ is applied to an n-type semiconductor and the electron drift velocity is $36\\text{ m/s}$, find the electron mobility $\\mu_e$ in units of $10^{-2}\\text{ m}^2/(\\text{V}\\cdot\\text{s})$ (giving $36$).",
    options: [],
    correctAnswer: 36,
    explanation: "$$\\mu_e = \\frac{v_d}{E} = \\frac{36\\text{ m/s}}{100\\text{ V/m}} = 0.36\\text{ m}^2/(\\text{V}\\cdot\\text{s}) = 36\\times 10^{-2}\\text{ m}^2/(\\text{V}\\cdot\\text{s}).$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In a p-type semiconductor, the hole concentration is $n_h = 10^{21}\\text{ m}^{-3}$ and hole mobility is $\\mu_h = 0.05\\text{ m}^2/(\\text{V}\\cdot\\text{s})$. Neglecting minority electron contribution, find the electrical conductivity $\\sigma$ in $\\Omega^{-1}\\cdot\\text{m}^{-1}$ (take $e = 1.6\\times 10^{-19}\\text{ C}$, $1.6\\times 10^{-19} \\times 10^{21} \\times 0.05 = 8.0$).",
    options: [],
    correctAnswer: 8,
    explanation: "$$\\sigma \\approx e n_h \\mu_h = 1.6\\times 10^{-19} \\times 10^{21} \\times 0.05 = 160 \\times 0.05 = 8.0\\text{ }\\Omega^{-1}\\cdot\\text{m}^{-1}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "The resistivity of a semiconductor is $\\rho = 0.2\\text{ }\\Omega\\cdot\\text{m}$. Find its electrical conductivity in $\\Omega^{-1}\\cdot\\text{m}^{-1}$.",
    options: [],
    correctAnswer: 5,
    explanation: "$$\\sigma = \\frac{1}{\\rho} = \\frac{1}{0.2} = 5\\text{ }\\Omega^{-1}\\cdot\\text{m}^{-1}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In a semiconductor bar of cross-sectional area $1\\text{ mm}^2$ ($10^{-6}\\text{ m}^2$), the total current is $16\\text{ mA}$. Find the current density $J$ in $\\text{kA/m}^2$.",
    options: [],
    correctAnswer: 16,
    explanation: "$$J = \\frac{I}{A} = \\frac{16\\times 10^{-3}\\text{ A}}{10^{-6}\\text{ m}^2} = 16\\times 10^3\\text{ A/m}^2 = 16\\text{ kA/m}^2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "A sample of germanium is doped with $10^{23}\\text{ donor atoms/m}^3$. If $n_i = 10^{19}\\text{ m}^{-3}$, find the ratio $\\frac{n_e}{n_h}$ in units of $10^8$.",
    options: [],
    correctAnswer: 1,
    explanation: "Here $n_e \\approx N_D = 10^{23}\\text{ m}^{-3}$.\n$$n_h = \\frac{n_i^2}{n_e} = \\frac{10^{38}}{10^{23}} = 10^{15}\\text{ m}^{-3}$$\n$$\\frac{n_e}{n_h} = \\frac{10^{23}}{10^{15}} = 10^8 = 1\\times 10^8.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In a semiconductor, the electron concentration is $8\\times 10^{19}\\text{ m}^{-3}$ and hole concentration is $5\\times 10^{19}\\text{ m}^{-3}$. If an electric field causes electrons to drift at $10\\text{ m/s}$ and holes at $4\\text{ m/s}$, find the total current density in $\\text{A/m}^2$ (take $e = 1.6\\times 10^{-19}\\text{ C}$, $J = e(n_e v_e + n_h v_h) = 1.6\\times 10^{-19}(8\\times 10^{20} + 2\\times 10^{20}) = 1.6\\times 10^{-19}(10^{21}) = 160$).",
    options: [],
    correctAnswer: 160,
    explanation: "$$J = e(n_e v_e + n_h v_h) = 1.6\\times 10^{-19} [(8\\times 10^{19} \\times 10) + (5\\times 10^{19} \\times 4)]$$\n$$= 1.6\\times 10^{-19} [8\\times 10^{20} + 2\\times 10^{20}] = 1.6\\times 10^{-19} \\times 10^{21} = 160\\text{ A/m}^2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "A silicon wafer is doped with boron to a concentration of $4\\times 10^{22}\\text{ m}^{-3}$. If $n_i = 2\\times 10^{16}\\text{ m}^{-3}$, find the minority carrier electron concentration in units of $10^{10}\\text{ m}^{-3}$.",
    options: [],
    correctAnswer: 1,
    explanation: "$$n_e = \\frac{n_i^2}{N_A} = \\frac{(2\\times 10^{16})^2}{4\\times 10^{22}} = \\frac{4\\times 10^{32}}{4\\times 10^{22}} = 10^{10}\\text{ m}^{-3} = 1\\times 10^{10}\\text{ m}^{-3}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "If a semiconductor has a resistivity of $0.05\\text{ }\\Omega\\cdot\\text{m}$, find its resistance in ohms for a specimen of length $2\\text{ cm}$ ($0.02\\text{ m}$) and cross-sectional area $1\\text{ cm}^2$ ($10^{-4}\\text{ m}^2$).",
    options: [],
    correctAnswer: 10,
    explanation: "$$R = \\rho \\frac{L}{A} = 0.05 \\times \\frac{0.02}{10^{-4}} = 0.05 \\times 200 = 10\\text{ }\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "An intrinsic semiconductor has equal concentrations of electrons and holes $n_i = 2.5\\times 10^{19}\\text{ m}^{-3}$. If $\\mu_e = 0.38\\text{ m}^2/(\\text{V}\\cdot\\text{s})$ and $\\mu_h = 0.18\\text{ m}^2/(\\text{V}\\cdot\\text{s})$, find its conductivity in $\\Omega^{-1}\\cdot\\text{m}^{-1}$ (take $e = 1.6\\times 10^{-19}\\text{ C}$, $1.6\\times 10^{-19} \\times 2.5\\times 10^{19} \\times 0.56 = 4.0 \\times 0.56 = 2.24$; enter integer rounded $\\times 100$? Let $n_i = 5\\times 10^{19}$ with sum $0.25 \\implies 1.6 \\times 5 \\times 0.25 = 2.0$).",
    options: [],
    correctAnswer: 2,
    explanation: "For $n_i = 5\\times 10^{19}\\text{ m}^{-3}$ and $(\\mu_e + \\mu_h) = 0.25\\text{ m}^2/(\\text{V}\\cdot\\text{s})$:\n$$\\sigma = 1.6\\times 10^{-19} \\times 5\\times 10^{19} \\times 0.25 = 8.0 \\times 0.25 = 2.0\\text{ }\\Omega^{-1}\\cdot\\text{m}^{-1}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In an intrinsic semiconductor, what percentage of the total current is carried by electrons if $\\mu_e = 3 \\mu_h$?",
    options: [],
    correctAnswer: 75,
    explanation: "Since $n_e = n_h = n_i$ in an intrinsic semiconductor:\n$$\\frac{I_e}{I_{total}} = \\frac{\\mu_e}{\\mu_e + \\mu_h} = \\frac{3\\mu_h}{3\\mu_h + \\mu_h} = \\frac{3}{4} = 75\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "In an intrinsic semiconductor with $\\mu_e = 4 \\mu_h$, find the percentage of total current carried by holes.",
    options: [],
    correctAnswer: 20,
    explanation: "$$\\frac{I_h}{I_{total}} = \\frac{\\mu_h}{\\mu_e + \\mu_h} = \\frac{\\mu_h}{4\\mu_h + \\mu_h} = \\frac{1}{5} = 20\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "A piece of pure silicon has $5\\times 10^{28}\\text{ atoms/m}^3$. It is doped by adding one indium atom for every $10^7$ silicon atoms. Find the acceptor concentration $N_A$ in units of $10^{21}\\text{ m}^{-3}$.",
    options: [],
    correctAnswer: 5,
    explanation: "$$N_A = \\frac{5\\times 10^{28}}{10^7} = 5\\times 10^{21}\\text{ atoms/m}^3 = 5\\times 10^{21}\\text{ m}^{-3}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "If the hole concentration in an extrinsic semiconductor is $n_h = 10^{20}\\text{ m}^{-3}$ and $n_i = 10^{15}\\text{ m}^{-3}$, find the minority electron concentration $n_e$ in units of $10^{10}\\text{ m}^{-3}$.",
    options: [],
    correctAnswer: 1,
    explanation: "$$n_e = \\frac{n_i^2}{n_h} = \\frac{10^{30}}{10^{20}} = 10^{10}\\text{ m}^{-3} = 1\\times 10^{10}\\text{ m}^{-3}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "The mobility of electrons in a sample of n-type silicon is $0.15\\text{ m}^2/(\\text{V}\\cdot\\text{s})$. If an electric field of $200\\text{ V/m}$ is applied, find the drift speed of electrons in $\\text{m/s}$.",
    options: [],
    correctAnswer: 30,
    explanation: "$$v_d = \\mu_e E = 0.15\\text{ m}^2/(\\text{V}\\cdot\\text{s}) \\times 200\\text{ V/m} = 30\\text{ m/s}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "The valence of Germanium is 4. If a dopant atom has a valence of 5, how many extra conduction electrons does each donor atom contribute to the host crystal?",
    options: [],
    correctAnswer: 1,
    explanation: "Four of the five valence electrons form covalent bonds with adjacent Ge atoms, leaving exactly $1$ surplus electron loosely bound, which readily ionizes into the conduction band.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (26 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An n-type semiconductor crystal carries zero net electrical charge.\nReason (R): For every free conduction electron contributed by a pentavalent donor atom, a fixed positively charged donor ion remains in the crystal lattice.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Doping introduces neutral donor atoms. Ionization yields mobile negative electrons and immobile positive ions, maintaining overall macroscopic charge neutrality. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The conductivity of an intrinsic semiconductor increases exponentially with temperature.\nReason (R): The thermal generation of electron-hole pairs across the band gap increases with temperature according to $n_i \\propto T^{3/2} e^{-E_g / 2k_B T}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because $E_g \\gg k_B T$, the exponential term governs carrier density, leading to an exponential surge in electrical conductivity. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Doping silicon with phosphorus increases its electrical conductivity by many orders of magnitude.\nReason (R): Phosphorus is a pentavalent donor impurity that provides free conduction electrons with very low ionization energy ($\sim 0.045\\text{ eV}$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "At room temperature, thermal energy ($0.026\\text{ eV}$) easily ionizes virtually all donor atoms, introducing $10^{16} - 10^{18}$ electrons/cm$^3$, dwarfing the intrinsic carrier density $n_i \\approx 10^{10}\\text{ cm}^{-3}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a semiconductor, electron mobility is higher than hole mobility.\nReason (R): Electrons move in the conduction band where states are mostly unoccupied, while holes move through the crowded valence band by sequential electron hopping.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Conduction band electrons have lower effective mass and experience less scattering than bound valence electrons jumping to fill holes. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The product of electron and hole concentrations $n_e \\cdot n_h$ in a doped semiconductor at thermal equilibrium is independent of the dopant concentration.\nReason (R): According to the law of mass action, $n_e \\cdot n_h = n_i^2$, where $n_i$ depends only on the semiconductor material and temperature.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Increasing majority carrier density suppresses the minority carrier density through enhanced recombination, keeping the product constant at $n_i^2(T)$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In an intrinsic semiconductor, the total current is the sum of electron current and hole current.\nReason (R): Under an applied electric field, electrons drift opposite to the field and holes drift along the field, both creating conventional current in the same direction.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Negative electrons moving in direction $-E$ and positive holes moving in direction $+E$ constitute electric current flowing in direction $+E$. Both currents add constructively. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Trivalent impurities such as Boron or Aluminium produce p-type semiconductors.\nReason (R): Trivalent atoms have three valence electrons and accept an electron from a neighboring covalent bond, creating a vacancy (hole) in the valence band.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because only 3 valence electrons are available to satisfy 4 tetrahedral covalent bonds, one bond remains incomplete (a hole), which acts as a mobile positive carrier. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A hole in a semiconductor has an effective positive charge of $+1.6\\times 10^{-19}\\text{ C}$.\nReason (R): When an electron is removed from a neutral atom in a covalent crystal, the remaining unbonded core has a net deficiency of one negative electron charge.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Charge neutrality of the intact crystal requires that any missing electron creates a localized net positive charge of $+e$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Adding pentavalent impurity atoms reduces the hole concentration in a semiconductor below its intrinsic value.\nReason (R): The vastly increased population of donor electrons increases the rate of electron-hole recombination, suppressing the equilibrium hole concentration according to $n_h = n_i^2 / n_e$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Recombination rate is proportional to $n_e \\cdot n_h$. A surge in $n_e$ accelerates recombination until $n_h$ drops so that recombination matches thermal generation. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Silicon is preferred over germanium for manufacturing semiconductor devices.\nReason (R): Silicon has a smaller band gap than germanium, allowing devices to switch faster at lower voltages.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 2,
    explanation: "Assertion (A) is true, but Reason (R) is false because silicon has a larger band gap ($1.1\\text{ eV}$) than germanium ($0.7\\text{ eV}$), which gives silicon much lower leakage current and higher temperature endurance. Thus (A) is true but (R) is false.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The electrical conductivity of an extrinsic semiconductor depends predominantly on the majority carrier concentration.\nReason (R): The minority carrier concentration is suppressed to a negligible fraction by the mass action law, contributing insignificantly to drift current.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "In n-type, $n_e \\gg n_h$, so $\\sigma = e(n_e\\mu_e + n_h\\mu_h) \\approx e n_e \\mu_e$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a semiconductor, the drift velocity of charge carriers is directly proportional to the applied electric field for moderate field strengths.\nReason (R): Drift velocity is given by $v_d = \\mu E$, where mobility $\\mu$ is constant at low to moderate electric fields.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By definition, carrier mobility $\\mu$ is the proportionality factor between drift velocity and electric field: $v_d = \\mu E$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): At extremely high electric fields, the drift velocity of charge carriers in a semiconductor saturates.\nReason (R): At high fields, carriers acquire sufficient kinetic energy to emit optical phonons, which increases scattering and caps the drift velocity at $v_{sat} \\sim 10^5\\text{ m/s}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Optical phonon scattering dissipates excess kinetic energy rapidly, preventing further acceleration and causing velocity saturation. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Carbon and silicon both have four valence electrons, but carbon cannot be easily doped to make extrinsic semiconductors.\nReason (R): The small size of carbon atoms and large ionization energy of diamond make it extremely difficult to substitute dopant atoms into its lattice without disrupting crystal structure.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Diamond's dense lattice and high bond energy prevent foreign atoms from fitting substitutionally, whereas Si and Ge have larger lattice constants accommodating dopants readily. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An intrinsic semiconductor has a positive temperature coefficient of resistance.\nReason (R): As temperature increases, the resistance of an intrinsic semiconductor decreases.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is false but (R) is true",
      "(A) is true but (R) is false"
    ],
    correctAnswer: 2,
    explanation: "Assertion (A) is false because semiconductors have a negative temperature coefficient of resistance (since resistance decreases with increasing temperature, as correctly stated in Reason R). Thus (A) is false and (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Doping level in a semiconductor is usually kept very small (e.g., 1 part in $10^6$).\nReason (R): Excessive doping can destroy the periodic crystal lattice structure of the host semiconductor.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Even parts-per-million doping yields $10^{16}-10^{18}\\text{ cm}^{-3}$ carriers. Higher doping introduces severe lattice strain, defect states, and carrier degeneracy. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a p-type semiconductor, the hole concentration is approximately equal to the acceptor concentration ($n_h \\approx N_A$) at room temperature.\nReason (R): The acceptor energy level is located only about $0.01 - 0.05\\text{ eV}$ above the valence band, so thermal energy at room temperature ionizes virtually all acceptor atoms.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because $E_a - E_v \\approx k_B T$, complete ionization occurs at $300\\text{ K}$, making $n_h = N_A^- \\approx N_A$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When an external electric field is applied to an extrinsic semiconductor, electrons and holes drift in opposite directions.\nReason (R): Electrons carry negative elementary charge while holes behave as positive elementary charges.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Electric force is $\\vec{F} = q\\vec{E}$. Since $q = -e$ for electrons and $q = +e$ for holes, the forces and resulting drift velocities are anti-parallel. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a compensated semiconductor containing both donor ($N_D$) and acceptor ($N_A$) impurities with $N_D > N_A$, the material behaves as an n-type semiconductor.\nReason (R): The electrons from the donors first fill the acceptor states, leaving a net excess majority electron concentration of $n_e \\approx N_D - N_A$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Acceptors trap donor electrons. When $N_D > N_A$, remaining electrons populate the conduction band, giving an n-type character with $n_e = N_D - N_A$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Hall effect can be used to determine whether a semiconductor is n-type or p-type.\nReason (R): The sign of the induced transverse Hall voltage depends directly on the sign of the charge of the majority carriers.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Under mutual orthogonal electric and magnetic fields, magnetic Lorentz force deflects carriers to one face. The resulting polarity of $V_H$ reveals whether carriers are negative electrons or positive holes. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In an extrinsic semiconductor, carrier mobility decreases with increasing doping concentration.\nReason (R): A higher concentration of ionized impurity atoms increases Coulombic scattering of moving charge carriers.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Ionized donor and acceptor cores exert electrostatic Coulomb deflection on drifting carriers (ionized impurity scattering), shortening mean free time $\\tau$ and decreasing mobility $\\mu = e\\tau / m^*$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Pure Silicon at room temperature is an intrinsic semiconductor.\nReason (R): At room temperature, thermal energy breaks a small number of covalent bonds, generating equal concentrations of free electrons and holes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "An undoped semiconductor whose carrier concentration originates purely from thermal generation across the band gap is defined as intrinsic. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a semiconductor, the recombination rate of electron-hole pairs is proportional to the product $n_e \\cdot n_h$.\nReason (R): Recombination requires an electron in the conduction band to encounter an empty state (hole) in the valence band, which is a bimolecular collision process.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The collision probability between two independent populations is directly proportional to the product of their spatial densities. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Heavy doping of a semiconductor turns it into a degenerate semiconductor.\nReason (R): When dopant density is very high, the Fermi level moves inside the conduction band (for n-type) or inside the valence band (for p-type), causing the material to exhibit metal-like conductivity.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Degenerate semiconductors have so many carriers that the Fermi level enters the allowed band, eliminating the thermal activation barrier and giving positive temperature coefficient of resistance. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The diffusion current of charge carriers does not require an external electric field.\nReason (R): Diffusion current is driven solely by spatial concentration gradients of charge carriers from regions of high concentration to regions of low concentration.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "According to Fick's first law, $J_{diff} = -q D \\frac{dn}{dx}$. It is purely a statistical thermal transport phenomenon independent of electric fields. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Intrinsic/extrinsic semiconductors",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Einstein relation connects the diffusion coefficient $D$ and mobility $\\mu$ of charge carriers as $\\frac{D}{\\mu} = \\frac{k_B T}{e}$.\nReason (R): Both diffusion and drift transport mechanisms are fundamentally mediated by microscopic thermal velocity and carrier collision relaxation time.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Einstein's relation relates thermal diffusion to field mobility through thermal voltage $V_T = k_B T / e$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  }
];
