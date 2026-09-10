// Subtopic 2: Diodes (53 Questions: 7 MCQ, 20 NUMERICAL, 26 ASSERTION_REASON)
module.exports = [
  // --- MCQs (7 questions) ---
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "When a p-n junction diode is forward biased, the barrier potential across the junction:",
    options: ["Increases", "Decreases", "Remains unchanged", "Becomes zero immediately at any applied voltage"],
    correctAnswer: 1,
    explanation: "Under forward bias, the applied voltage opposes the built-in potential barrier. The net potential difference across the depletion layer becomes $V_0 - V$, thereby reducing both the barrier height and the width of the depletion layer.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "In an unbiased p-n junction at thermal equilibrium:",
    options: [
      "The diffusion current of holes is exactly balanced by the drift current of holes",
      "Only diffusion current exists across the junction",
      "Only drift current exists across the junction",
      "The potential of the p-side is higher than the n-side"
    ],
    correctAnswer: 0,
    explanation: "At thermal equilibrium with no external bias, the net current across the junction is zero because the diffusion current (due to majority carrier concentration gradients) is precisely balanced by the drift current (caused by the built-in electric field in the depletion layer).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "The dynamic resistance ($r_d$) of a p-n junction diode is defined as:",
    options: [
      "$\\frac{\\Delta V}{\\Delta I}$ in the forward operating region",
      "$\\frac{V}{I}$ at a specific DC operating point",
      "The ratio of reverse voltage to reverse saturation current",
      "The reciprocal of the junction capacitance"
    ],
    correctAnswer: 0,
    explanation: "Dynamic (or AC) resistance is defined as the ratio of a small change in voltage $\\Delta V$ to the corresponding small change in diode current $\\Delta I$ at the operating point: $r_d = \\frac{\\Delta V}{\\Delta I}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "The width of the depletion layer in a p-n junction diode is of the order of:",
    options: ["$10^{-2}\\text{ m}$", "$10^{-4}\\text{ m}$", "$10^{-6}\\text{ m}$ ($1\\text{ }\\mu\\text{m}$)", "$10^{-10}\\text{ m}$"],
    correctAnswer: 2,
    explanation: "The physical thickness of the depletion layer in a typical silicon or germanium p-n junction is of the order of a few tenths of a micrometer to one micrometer, i.e., $\\sim 10^{-6}\\text{ m}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "If the reverse bias on a p-n junction diode is increased, the capacitance of the depletion layer:",
    options: ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
    correctAnswer: 1,
    explanation: "The transition (junction) capacitance is modeled as a parallel plate capacitor $C_T = \\frac{\\varepsilon A}{W}$, where $W$ is the width of the depletion layer. Increasing the reverse bias widens $W$, which causes the junction capacitance to decrease.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "For a silicon p-n junction diode, the knee voltage (barrier potential) at room temperature is approximately:",
    options: ["$0.1\\text{ V}$", "$0.3\\text{ V}$", "$0.7\\text{ V}$", "$1.5\\text{ V}$"],
    correctAnswer: 2,
    explanation: "At room temperature ($300\\text{ K}$), the typical built-in barrier potential is approximately $0.7\\text{ V}$ for silicon and $0.3\\text{ V}$ for germanium.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Diodes",
    question: "The electric field in the depletion region of an unbiased p-n junction diode points from:",
    options: [
      "The n-side to the p-side",
      "The p-side to the n-side",
      "Parallel to the junction boundary",
      "Towards the positive terminal of the battery"
    ],
    correctAnswer: 0,
    explanation: "During diffusion, donors on the n-side lose electrons and become positive immobile ions, while acceptors on the p-side gain electrons to become negative immobile ions. Thus, the space-charge electric field points from the positive donor ions (n-side) to the negative acceptor ions (p-side).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (20 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "If the voltage across a p-n junction diode changes from $0.70\\text{ V}$ to $0.75\\text{ V}$, the forward current increases from $10\\text{ mA}$ to $20\\text{ mA}$. Find the dynamic resistance of the diode in ohms.",
    options: [],
    correctAnswer: 5,
    explanation: "Dynamic resistance is given by:\n$$r_d = \\frac{\\Delta V}{\\Delta I} = \\frac{0.75 - 0.70}{20\\times 10^{-3} - 10\\times 10^{-3}} = \\frac{0.05\\text{ V}}{10\\times 10^{-3}\\text{ A}} = 5\\text{ }\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "In a p-n junction diode, the width of the depletion layer is $500\\text{ nm}$ and the built-in barrier potential is $0.7\\text{ V}$. Find the magnitude of the average electric field in the depletion region in units of $10^6\\text{ V/m}$ (to two decimal places, or as $1.40$). Enter the integer value of $100 \\times E$ where $E$ is in $10^6\\text{ V/m}$, or directly $140$ if scaled, or $E = 1.4\\times 10^6$. Let the question ask for the field in $10^5\\text{ V/m}$.",
    options: [],
    correctAnswer: 14,
    explanation: "Average electric field is:\n$$E = \\frac{V_0}{W} = \\frac{0.7\\text{ V}}{500\\times 10^{-9}\\text{ m}} = 1.4\\times 10^6\\text{ V/m} = 14\\times 10^5\\text{ V/m}.$$\nThus, in units of $10^5\\text{ V/m}$, the field is $14$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A silicon diode operates at room temperature with a DC forward voltage of $0.7\\text{ V}$ and carries a forward current of $35\\text{ mA}$. Find the static resistance of the diode in ohms.",
    options: [],
    correctAnswer: 20,
    explanation: "Static (DC) resistance is:\n$$R_{dc} = \\frac{V}{I} = \\frac{0.7\\text{ V}}{35\\times 10^{-3}\\text{ A}} = \\frac{700}{35} = 20\\text{ }\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "When a reverse bias of $10\\text{ V}$ is applied to a germanium diode, a reverse current of $2\\text{ }\\mu\\text{A}$ flows. Find the reverse static resistance of the diode in megaohms ($10^6\\text{ }\\Omega$).",
    options: [],
    correctAnswer: 5,
    explanation: "$$R_{rev} = \\frac{V_R}{I_R} = \\frac{10\\text{ V}}{2\\times 10^{-6}\\text{ A}} = 5\\times 10^6\\text{ }\\Omega = 5\\text{ M}\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "If a p-n junction diode has a dynamic resistance of $25\\text{ }\\Omega$, find the change in forward voltage (in millivolts) required to increase the forward current by $4\\text{ mA}$.",
    options: [],
    correctAnswer: 100,
    explanation: "$$\\Delta V = r_d \\cdot \\Delta I = 25\\text{ }\\Omega \\times 4\\times 10^{-3}\\text{ A} = 0.10\\text{ V} = 100\\text{ mV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A diode circuit consists of a silicon diode ($V_{knee} = 0.7\\text{ V}$) connected in series with a resistor $R = 200\\text{ }\\Omega$ across a $5.7\\text{ V}$ DC battery. Find the forward current in the circuit in milliamperes.",
    options: [],
    correctAnswer: 25,
    explanation: "Using Kirchhoff's voltage law:\n$$V_{supply} = V_{diode} + I \\cdot R$$\n$$5.7 = 0.7 + I \\times 200$$\n$$I = \\frac{5.0}{200} = 0.025\\text{ A} = 25\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A p-n junction diode has a built-in potential of $0.6\\text{ V}$. When an external forward voltage of $0.4\\text{ V}$ is applied, find the effective barrier potential in millivolts.",
    options: [],
    correctAnswer: 200,
    explanation: "Under forward bias, the effective barrier potential is:\n$$V_{eff} = V_0 - V_{forward} = 0.6\\text{ V} - 0.4\\text{ V} = 0.2\\text{ V} = 200\\text{ mV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "In a reverse biased diode, the built-in potential is $0.7\\text{ V}$ and an external reverse bias of $4.3\\text{ V}$ is applied. Find the total effective barrier potential across the junction in volts.",
    options: [],
    correctAnswer: 5,
    explanation: "Under reverse bias, the external voltage aids the built-in barrier:\n$$V_{eff} = V_0 + V_{reverse} = 0.7\\text{ V} + 4.3\\text{ V} = 5.0\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A circuit contains two identical ideal diodes connected in parallel with opposite polarities, placed in series with a $100\\text{ }\\Omega$ resistor and a $10\\text{ V}$ DC supply. Find the current drawn from the supply in milliamperes.",
    options: [],
    correctAnswer: 100,
    explanation: "Since the two diodes are connected in opposite polarities in parallel, regardless of the DC polarity, one diode is forward biased (acting as a short circuit with $V = 0\\text{ V}$ for an ideal diode) while the other is reverse biased (open circuit).\nThus, the current is:\n$$I = \\frac{V}{R} = \\frac{10\\text{ V}}{100\\text{ }\\Omega} = 0.10\\text{ A} = 100\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "If the temperature of a p-n junction increases by $10^{\\circ}\\text{C}$, the reverse saturation current of the diode approximately doubles. By what integer factor will the reverse saturation current increase if the temperature rises by $30^{\\circ}\\text{C}$?",
    options: [],
    correctAnswer: 8,
    explanation: "The reverse saturation current doubles for every $10^{\\circ}\\text{C}$ rise in temperature:\n$$\\frac{I_{s2}}{I_{s1}} = 2^{\\Delta T / 10} = 2^{30 / 10} = 2^3 = 8.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A diode has a forward voltage drop of $0.7\\text{ V}$ at $50\\text{ mA}$. Find the electrical power dissipated across the diode in milliwatts.",
    options: [],
    correctAnswer: 35,
    explanation: "$$P = V \\cdot I = 0.7\\text{ V} \\times 50\\times 10^{-3}\\text{ A} = 0.035\\text{ W} = 35\\text{ mW}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "In a bridge rectifier, the number of individual p-n junction diodes utilized is:",
    options: [],
    correctAnswer: 4,
    explanation: "A standard bridge rectifier circuit employs exactly $4$ diodes arranged in a bridge loop.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "In a centre-tapped full-wave rectifier without a bridge, the minimum number of diodes used is:",
    options: [],
    correctAnswer: 2,
    explanation: "A centre-tapped full-wave rectifier uses $2$ diodes, conducting alternately in opposite half cycles.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A silicon diode has a reverse saturation current of $10\\text{ nA}$ at room temperature. Find the magnitude of this current in nanoamperes.",
    options: [],
    correctAnswer: 10,
    explanation: "The reverse saturation current is directly $10\\text{ nA}$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "An ideal diode is connected in series with a $50\\text{ }\\Omega$ resistor across a $12\\text{ V}$ DC supply in forward bias. Find the current flowing in the circuit in milliamperes.",
    options: [],
    correctAnswer: 240,
    explanation: "For an ideal diode, forward voltage drop is $0\\text{ V}$.\n$$I = \\frac{V}{R} = \\frac{12\\text{ V}}{50\\text{ }\\Omega} = 0.24\\text{ A} = 240\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "If the depletion width of a p-n junction is $1\\text{ }\\mu\\text{m}$ ($10^{-6}\\text{ m}$) and the junction area is $1\\text{ mm}^2$ ($10^{-6}\\text{ m}^2$), given permittivity $\\varepsilon = 12 \\varepsilon_0$ with $\\varepsilon_0 = 8.85\\times 10^{-12}\\text{ F/m}$, find the transition capacitance in picofarads (rounded to the nearest integer, using $12 \\times 8.85 = 106.2 \\approx 106\\text{ pF}$).",
    options: [],
    correctAnswer: 106,
    explanation: "$$C_T = \\frac{\\varepsilon A}{W} = \\frac{12 \\times 8.85\\times 10^{-12} \\times 10^{-6}}{10^{-6}} = 106.2\\times 10^{-12}\\text{ F} \\approx 106\\text{ pF}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A p-n junction diode is reverse biased with a $20\\text{ V}$ source. If the current flowing is $5\\text{ }\\mu\\text{A}$, find the reverse resistance in megaohms ($10^6\\text{ }\\Omega$).",
    options: [],
    correctAnswer: 4,
    explanation: "$$R = \\frac{V}{I} = \\frac{20\\text{ V}}{5\\times 10^{-6}\\text{ A}} = 4\\times 10^6\\text{ }\\Omega = 4\\text{ M}\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "A silicon diode has a knee voltage of $0.7\\text{ V}$. If it is connected across a $2.7\\text{ V}$ DC source with a series resistor, and a current of $20\\text{ mA}$ flows, find the value of the series resistance in ohms.",
    options: [],
    correctAnswer: 100,
    explanation: "$$V_R = 2.7 - 0.7 = 2.0\\text{ V}$$\n$$R = \\frac{V_R}{I} = \\frac{2.0\\text{ V}}{20\\times 10^{-3}\\text{ A}} = 100\\text{ }\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "In a half-wave rectifier, if the input AC frequency is $50\\text{ Hz}$, find the output ripple frequency in hertz.",
    options: [],
    correctAnswer: 50,
    explanation: "For a half-wave rectifier, the output conducts once per cycle of the input, so the output ripple frequency equals the input frequency: $f_{out} = f_{in} = 50\\text{ Hz}$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Diodes",
    question: "In a full-wave rectifier, if the input AC frequency is $50\\text{ Hz}$, find the output ripple frequency in hertz.",
    options: [],
    correctAnswer: 100,
    explanation: "For a full-wave rectifier, both half-cycles are rectified, doubling the repetition rate: $f_{out} = 2 f_{in} = 2 \\times 50 = 100\\text{ Hz}$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (26 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a forward-biased p-n junction, the width of the depletion layer decreases.\nReason (R): The applied forward voltage opposes the built-in electric field, reducing the potential barrier across the junction.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Under forward bias, the external field acts opposite to the internal built-in field ($E_{net} = E_0 - E_{ext}$). This lowers the barrier and pushes majority carriers towards the junction, reducing depletion layer thickness. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Under reverse bias, the current through a p-n junction is very small and almost independent of the applied voltage up to breakdown.\nReason (R): The reverse saturation current is due to minority charge carriers thermally generated in the semiconductor.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Minority carrier concentration depends solely on temperature and band gap, not on the applied reverse voltage. Since the reverse field sweeps all available minority carriers across the junction, the current saturates at $I_s$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A p-n junction diode acts as a one-way electrical valve.\nReason (R): It offers very low resistance to current flow in forward bias and extremely high resistance in reverse bias.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because forward resistance is typically tens of ohms while reverse resistance is megaohms, current readily conducts in only one direction. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The barrier potential of a p-n junction cannot be measured directly by simply connecting a voltmeter across its terminals.\nReason (R): The contact potentials formed between the voltmeter leads and the semiconductor ends exactly cancel the built-in potential, yielding zero net external voltage.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Metal-semiconductor contact potentials arise at both terminals which equal and oppose the barrier potential in an open circuit, preventing current flow without external energy. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The dynamic resistance of a diode decreases as the forward bias current increases.\nReason (R): For an ideal diode, the forward current grows exponentially with voltage, causing the slope $\\frac{dI}{dV}$ to increase rapidly with current.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $I \\approx I_s e^{V / \\eta V_T}$, differentiating gives $\\frac{dI}{dV} = \\frac{I}{\\eta V_T} \\implies r_d = \\frac{\\eta V_T}{I}$. Thus $r_d$ is inversely proportional to forward current $I$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Silicon diodes are generally preferred over germanium diodes for high-temperature applications.\nReason (R): The energy band gap of silicon ($1.1\\text{ eV}$) is larger than that of germanium ($0.7\\text{ eV}$), leading to a much smaller reverse saturation current in silicon.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The larger band gap in Si ensures that fewer electron-hole pairs are thermally excited at elevated temperatures, keeping the reverse leakage current negligible (nanoamperes for Si vs microamperes for Ge). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a p-n junction, diffusion of holes occurs from the p-side to the n-side.\nReason (R): There is a concentration gradient of holes across the junction, with a much higher density of holes on the p-side than on the n-side.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Diffusion of charge carriers is driven entirely by spatial concentration gradients from higher to lower concentration regions. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The depletion layer of an unbiased p-n junction contains no mobile charge carriers.\nReason (R): Mobile electrons and holes that entered the depletion region recombined, leaving behind only fixed, ionized impurity atoms.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The depletion layer is 'depleted' of mobile carriers due to initial recombination, creating an unneutralized space-charge zone of immobile ions. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The junction capacitance of a p-n diode decreases when the reverse bias voltage is increased.\nReason (R): Increasing the reverse bias voltage widens the depletion layer, increasing the separation between the positive and negative space-charge regions.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since capacitance $C = \\frac{\\varepsilon A}{W}$, as $W$ increases with reverse bias, $C$ decreases. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a heavily doped p-n junction, the width of the depletion layer is very narrow.\nReason (R): A higher density of impurity ions provides the required total dipole space charge over a shorter spatial distance from the junction.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Depletion width $W \\propto \\sqrt{\\frac{1}{N_A} + \\frac{1}{N_D}}$. Heavier doping increases ion concentration, requiring a narrower width to establish the built-in barrier. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Zener breakdown occurs in heavily doped p-n junctions under reverse bias.\nReason (R): Heavy doping results in a very thin depletion layer, generating an electric field of the order of $10^6\\text{ V/m}$ sufficient to rupture covalent bonds by quantum tunneling.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Zener breakdown is field-induced ionization (internal field emission) enabled by narrow depletion widths ($< 10\\text{ nm}$) and high fields ($> 10^6\\text{ V/m}$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Avalanche breakdown occurs in lightly doped p-n junctions.\nReason (R): In lightly doped junctions with wide depletion layers, accelerated minority carriers acquire high kinetic energy to create new electron-hole pairs by collision ionization.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "In lightly doped diodes, the depletion layer is wider, allowing minority carriers sufficient acceleration distance to knock out valence electrons upon impact (impact ionization). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The temperature coefficient of breakdown voltage is negative for Zener breakdown and positive for Avalanche breakdown.\nReason (R): In Zener breakdown, thermal agitation helps electron tunneling, whereas in Avalanche breakdown, lattice vibrations increase collision frequency and decrease carrier mean free path.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "With increasing temperature, band gap slightly narrows facilitating tunneling (lower $V_Z$), whereas thermal vibrations scatter carriers sooner, requiring higher voltage for avalanche multiplication (higher $V_{BR}$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a forward-biased diode, diffusion current dominates over drift current.\nReason (R): Forward bias lowers the potential barrier, allowing a large number of majority carriers with sufficient thermal energy to cross the junction by diffusion.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Lowering the barrier exponentially increases the majority carrier injection rate across the junction, while minority carrier drift remains unaffected. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The total current in a p-n junction is uniform across every cross-section of the diode.\nReason (R): By the law of conservation of charge, the net current must be continuous throughout the complete series circuit.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Although the fractions carried by electrons and holes change with position, their sum ($I_n + I_p$) is constant throughout the diode to satisfy continuity. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The barrier potential of a p-n junction diode decreases with an increase in temperature.\nReason (R): Higher temperature increases the intrinsic carrier concentration $n_i$, which reduces the built-in potential barrier according to $V_0 = \\frac{k_B T}{e}\\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "As $T$ rises, $n_i^2$ increases exponentially faster than $T$ in the numerator, causing the ratio $\\frac{N_A N_D}{n_i^2}$ to decrease significantly (by approximately $-2\\text{ mV/}^{\\circ}\\text{C}$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An ideal diode has zero resistance in forward bias and infinite resistance in reverse bias.\nReason (R): In practical circuits, an ideal diode model is often used as a first-order approximation for rapid circuit analysis.",
    options: [
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Assertion (A) is the definition of an ideal diode. Reason (R) describes why engineers use the ideal model, but is not the physical reason for the definition. Hence both are true but (R) is not the explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A diode cannot be operated safely in the breakdown region without a series current-limiting resistor.\nReason (R): Beyond the breakdown voltage, the current increases extremely rapidly with negligible change in voltage, risking thermal burnout due to excessive power dissipation.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The dynamic resistance in breakdown is nearly zero, so any slight voltage surge produces massive current. A series resistor drops the excess voltage and limits current below maximum rated power. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Diffusion capacitance is the dominant capacitive effect in a forward-biased p-n junction diode.\nReason (R): In forward bias, injected minority carriers are stored adjacent to the depletion edge, forming a rate-limiting charge storage proportional to current.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Under forward bias, minority carrier storage produces a large diffusion capacitance ($C_D \\propto I$), which far exceeds the junction depletion capacitance. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When an external battery is connected with its positive terminal to the n-type side and negative terminal to the p-type side, the diode is said to be reverse biased.\nReason (R): This polarity pulls majority electrons on the n-side and majority holes on the p-side away from the junction.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Pulling majority carriers away from the junction leaves behind more uncovered uncompensated donor and acceptor ions, widening the depletion barrier. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The electric field inside the depletion layer of a p-n junction is directed from the n-side to the p-side.\nReason (R): Positively charged donor ions reside on the n-side of the junction while negatively charged acceptor ions reside on the p-side.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Electric field lines originate on positive charges (donor ions on n-side) and terminate on negative charges (acceptor ions on p-side). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a p-n junction, drift current is caused by the built-in electric field.\nReason (R): The built-in electric field sweeps minority electrons from the p-side to the n-side and minority holes from the n-side to the p-side.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Drift current refers to the motion of charge carriers under the influence of an electric field. The internal field drives minority carriers across the depletion layer. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A diode does not strictly obey Ohm's law.\nReason (R): The current-voltage (I-V) characteristic of a p-n junction diode is non-linear and non-ohmic.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Ohm's law requires a linear constant resistance relationship $V = I R$. A p-n junction exhibits exponential forward conduction and directional asymmetry, violating Ohm's law. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): As reverse bias increases, the width of the depletion layer in a p-n junction increases.\nReason (R): The reverse bias attracts majority carriers away from the junction, exposing more unneutralized immobile ions on both sides.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Majority carriers are drawn towards the external contacts, uncovering additional donor and acceptor ions and widening the space-charge zone. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The reverse saturation current of a p-n junction diode increases substantially when irradiated with light.\nReason (R): Incident photons with energy greater than the band gap generate electron-hole pairs in and near the depletion layer.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Optical absorption creates extra minority carriers which are rapidly separated by the built-in junction electric field, adding a photocurrent to the reverse saturation current. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Diodes",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The peak inverse voltage (PIV) rating of a diode in a half-wave rectifier is equal to the peak AC secondary voltage $V_m$.\nReason (R): During the non-conducting negative half-cycle, the entire peak voltage of the transformer secondary appears across the reverse-biased diode.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "When the diode is reverse biased in a half-wave circuit, current is zero, so no voltage drops across the load, exposing the diode to the full peak value $V_m$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  }
];
