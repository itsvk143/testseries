// Subtopic 3: p-n junction diode applications (rectifiers, Zener diode) (53 Questions: 7 MCQ, 20 NUMERICAL, 26 ASSERTION_REASON)
module.exports = [
  // --- MCQs (7 questions) ---
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "The theoretical maximum rectification efficiency of a half-wave rectifier is approximately:",
    options: ["$40.6\\%$", "$50.0\\%$", "$81.2\\%$", "$90.5\\%$"],
    correctAnswer: 0,
    explanation: "For a half-wave rectifier, the maximum theoretical efficiency is:\n$$\\eta = \\frac{P_{dc}}{P_{ac}} = \\frac{I_{dc}^2 R_L}{I_{rms}^2 (r_f + R_L)} = \\frac{(I_m / \\pi)^2}{(I_m / 2)^2} = \\frac{4}{\\pi^2} \\approx 0.406 = 40.6\\%.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "The theoretical maximum rectification efficiency of a full-wave rectifier without filter is:",
    options: ["$40.6\\%$", "$63.6\\%$", "$81.2\\%$", "$100\\%$"],
    correctAnswer: 2,
    explanation: "For a full-wave rectifier:\n$$\\eta = \\frac{(2I_m / \\pi)^2}{(I_m / \\sqrt{2})^2} = \\frac{8}{\\pi^2} \\approx 0.812 = 81.2\\%.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "The ripple factor of a half-wave rectifier without a filter is:",
    options: ["$0.48$", "$1.11$", "$1.21$", "$1.57$"],
    correctAnswer: 2,
    explanation: "Ripple factor is defined as:\n$$\\gamma = \\sqrt{\\left(\\frac{I_{rms}}{I_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{I_m/2}{I_m/\\pi}\\right)^2 - 1} = \\sqrt{\\frac{\\pi^2}{4} - 1} \\approx \\sqrt{2.467 - 1} = \\sqrt{1.467} \\approx 1.21.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "The ripple factor of a full-wave rectifier without a filter is:",
    options: ["$0.48$", "$1.11$", "$1.21$", "$0.31$"],
    correctAnswer: 0,
    explanation: "For a full-wave rectifier:\n$$\\gamma = \\sqrt{\\left(\\frac{I_{rms}}{I_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{I_m/\\sqrt{2}}{2I_m/\\pi}\\right)^2 - 1} = \\sqrt{\\frac{\\pi^2}{8} - 1} \\approx \\sqrt{1.2337 - 1} = 0.48.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A Zener diode is primarily designed to operate in which operating region of its I-V characteristics?",
    options: ["Forward bias region", "Reverse bias region below breakdown", "Reverse breakdown region", "Both forward and reverse active regions"],
    correctAnswer: 2,
    explanation: "A Zener diode is specially designed with heavy doping to operate continuously in the reverse breakdown region without damage, where the voltage across it remains virtually constant over a wide range of reverse currents.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a bridge rectifier, during any single half-cycle of the AC input, how many diodes conduct simultaneously?",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "In a bridge rectifier, four diodes are arranged in two pairs. During each half-cycle of the AC supply, one diagonally opposite pair of diodes is forward-biased and conducts in series with the load, while the other pair is reverse-biased. Thus, exactly 2 diodes conduct at any time.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "The Peak Inverse Voltage (PIV) across each non-conducting diode in a centre-tapped transformer full-wave rectifier (with peak secondary voltage $V_m$ across each half) is:",
    options: ["$V_m$", "$2V_m$", "$\\frac{V_m}{2}$", "$\\sqrt{2}V_m$"],
    correctAnswer: 1,
    explanation: "During the negative half-cycle for one diode, the other diode conducts, connecting the cathode of the non-conducting diode to the positive peak $+V_m$, while its anode is at $-V_m$. Thus, the total reverse voltage across it reaches $2V_m$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },

  // --- NUMERICAL Questions (20 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a full-wave rectifier, an AC voltage of peak value $V_m = 20\\pi\\text{ V}$ is applied. Find the DC output voltage in volts.",
    options: [],
    correctAnswer: 40,
    explanation: "The DC (average) output voltage of a full-wave rectifier is:\n$$V_{dc} = \\frac{2V_m}{\\pi} = \\frac{2(20\\pi)}{\\pi} = 40\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a half-wave rectifier, an AC voltage of peak value $V_m = 10\\pi\\text{ V}$ is applied across an ideal diode and load resistor. Find the DC output voltage in volts.",
    options: [],
    correctAnswer: 10,
    explanation: "For a half-wave rectifier:\n$$V_{dc} = \\frac{V_m}{\\pi} = \\frac{10\\pi}{\\pi} = 10\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A Zener diode having a breakdown voltage $V_Z = 10\\text{ V}$ is used in a voltage regulator circuit. If the unregulated input DC voltage is $15\\text{ V}$ and the series resistor is $R_S = 100\\text{ }\\Omega$, find the total current flowing through the series resistor in milliamperes.",
    options: [],
    correctAnswer: 50,
    explanation: "$$I_S = \\frac{V_{in} - V_Z}{R_S} = \\frac{15 - 10}{100} = \\frac{5}{100} = 0.05\\text{ A} = 50\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a Zener voltage regulator, the regulated output voltage is $V_Z = 6\\text{ V}$ and the load resistor is $R_L = 1\\text{ k}\\Omega$. Find the load current $I_L$ in milliamperes.",
    options: [],
    correctAnswer: 6,
    explanation: "$$I_L = \\frac{V_Z}{R_L} = \\frac{6\\text{ V}}{1000\\text{ }\\Omega} = 0.006\\text{ A} = 6\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a Zener regulator circuit, $V_{in} = 12\\text{ V}, V_Z = 7\\text{ V}, R_S = 250\\text{ }\\Omega,$ and $R_L = 1\\text{ k}\\Omega$. Find the current passing through the Zener diode in milliamperes.",
    options: [],
    correctAnswer: 13,
    explanation: "Total current through series resistor:\n$$I_S = \\frac{V_{in} - V_Z}{R_S} = \\frac{12 - 7}{250} = \\frac{5}{250} = 0.020\\text{ A} = 20\\text{ mA}$$\nLoad current:\n$$I_L = \\frac{V_Z}{R_L} = \\frac{7}{1000} = 7\\text{ mA}$$\nCurrent through Zener diode:\n$$I_Z = I_S - I_L = 20 - 7 = 13\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A Zener diode has a breakdown voltage $V_Z = 5\\text{ V}$ and a maximum power dissipation rating of $500\\text{ mW}$. Find the maximum safe reverse current in milliamperes that can pass through the diode.",
    options: [],
    correctAnswer: 100,
    explanation: "$$P_{max} = V_Z \\cdot I_{Z,max} \\implies I_{Z,max} = \\frac{P_{max}}{V_Z} = \\frac{500\\times 10^{-3}\\text{ W}}{5\\text{ V}} = 0.10\\text{ A} = 100\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "If the input AC frequency to a full-wave bridge rectifier is $60\\text{ Hz}$, find the output ripple frequency in hertz.",
    options: [],
    correctAnswer: 120,
    explanation: "For a full-wave bridge rectifier, output frequency is twice the input frequency:\n$$f_{out} = 2 f_{in} = 2 \\times 60 = 120\\text{ Hz}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a half-wave rectifier circuit, the peak load current is $I_m = 6\\pi\\text{ mA}$. Find the DC load current in milliamperes.",
    options: [],
    correctAnswer: 6,
    explanation: "For a half-wave rectifier:\n$$I_{dc} = \\frac{I_m}{\\pi} = \\frac{6\\pi\\text{ mA}}{\\pi} = 6\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a full-wave rectifier, the peak load current is $I_m = 10\\pi\\text{ mA}$. Find the DC load current in milliamperes.",
    options: [],
    correctAnswer: 20,
    explanation: "For a full-wave rectifier:\n$$I_{dc} = \\frac{2I_m}{\\pi} = \\frac{2(10\\pi)}{\\pi} = 20\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A full-wave rectifier delivers a DC load current of $100\\text{ mA}$ through a load of $50\\text{ }\\Omega$. If the dynamic resistance of each diode is $5\\text{ }\\Omega$ and secondary coil resistance is negligible, find the DC output power in milliwatts.",
    options: [],
    correctAnswer: 500,
    explanation: "$$P_{dc} = I_{dc}^2 \\cdot R_L = (100\\times 10^{-3}\\text{ A})^2 \\times 50\\text{ }\\Omega = 0.01 \\times 50 = 0.50\\text{ W} = 500\\text{ mW}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A Zener diode voltage regulator circuit provides an output of $9\\text{ V}$ across a load requiring $15\\text{ mA}$. If the unregulated input voltage is $15\\text{ V}$ and the minimum Zener current is $5\\text{ mA}$, find the value of the series resistance $R_S$ in ohms.",
    options: [],
    correctAnswer: 300,
    explanation: "Total input current:\n$$I_S = I_Z + I_L = 5\\text{ mA} + 15\\text{ mA} = 20\\text{ mA} = 0.020\\text{ A}$$\nVoltage drop across series resistor:\n$$V_S = V_{in} - V_Z = 15 - 9 = 6\\text{ V}$$\nSeries resistance:\n$$R_S = \\frac{V_S}{I_S} = \\frac{6\\text{ V}}{0.020\\text{ A}} = 300\\text{ }\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A bridge rectifier has a peak input AC voltage of $24\\text{ V}$. Find the Peak Inverse Voltage (PIV) across each reverse-biased diode in volts (assuming ideal diodes).",
    options: [],
    correctAnswer: 24,
    explanation: "In a bridge rectifier, the maximum reverse voltage appearing across any non-conducting diode equals the peak input voltage $V_m$:\n$$PIV = V_m = 24\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a centre-tapped full-wave rectifier, the peak voltage from the centre tap to each outer terminal is $24\\text{ V}$. Find the Peak Inverse Voltage (PIV) across each diode in volts.",
    options: [],
    correctAnswer: 48,
    explanation: "In a centre-tapped rectifier, the PIV across the non-conducting diode is twice the peak voltage of each half-secondary:\n$$PIV = 2V_m = 2 \\times 24 = 48\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A half-wave rectifier circuit has an AC input of RMS voltage $10\\sqrt{2}\\text{ V}$. Find the peak secondary voltage $V_m$ in volts.",
    options: [],
    correctAnswer: 20,
    explanation: "$$V_m = \\sqrt{2} \\cdot V_{rms} = \\sqrt{2} \\times (10\\sqrt{2}) = 20\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A Zener diode voltage regulator maintains $12\\text{ V}$ across a variable load. If the unregulated input voltage varies from $16\\text{ V}$ to $20\\text{ V}$ and series resistor is $R_S = 100\\text{ }\\Omega$, find the maximum current (in mA) through $R_S$ when input is maximum ($20\\text{ V}$).",
    options: [],
    correctAnswer: 80,
    explanation: "$$I_{S,max} = \\frac{V_{in,max} - V_Z}{R_S} = \\frac{20 - 12}{100} = \\frac{8}{100} = 0.08\\text{ A} = 80\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "For a full-wave rectifier, if the DC output power is $81.2\\text{ W}$ when the AC input power is $100\\text{ W}$, find the rectification efficiency as a percentage (enter integer).",
    options: [],
    correctAnswer: 81,
    explanation: "$$\\eta = \\frac{P_{dc}}{P_{ac}} \\times 100\\% = \\frac{81.2}{100} \\times 100\\% = 81.2\\% \\approx 81\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A Zener diode has a breakdown voltage of $8\\text{ V}$ and a knee current of $2\\text{ mA}$. If the maximum allowed Zener power is $400\\text{ mW}$, find the maximum allowable Zener current in milliamperes.",
    options: [],
    correctAnswer: 50,
    explanation: "$$I_{Z,max} = \\frac{P_{max}}{V_Z} = \\frac{400\\text{ mW}}{8\\text{ V}} = 50\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "In a half-wave rectifier, the diode forward resistance is $10\\text{ }\\Omega$ and load resistance is $90\\text{ }\\Omega$. Find the percentage efficiency $\\eta = \\frac{40.6}{1 + r_f/R_L}$ (rounded to the nearest integer) where $1 + r_f/R_L = 1 + 10/90 = 10/9$.",
    options: [],
    correctAnswer: 37,
    explanation: "$$\\eta = \\frac{40.6\\%}{1 + \\frac{r_f}{R_L}} = \\frac{40.6}{1 + 10/90} = \\frac{40.6}{10/9} = 40.6 \\times 0.9 = 36.54\\% \\approx 37\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A DC voltage of $15\\text{ V}$ is applied to a Zener diode voltage regulator with $V_Z = 6\\text{ V}$. If the series resistor is $R_S = 180\\text{ }\\Omega$ and load current is $20\\text{ mA}$, find the Zener current in milliamperes.",
    options: [],
    correctAnswer: 30,
    explanation: "$$I_S = \\frac{V_{in} - V_Z}{R_S} = \\frac{15 - 6}{180} = \\frac{9}{180} = 0.050\\text{ A} = 50\\text{ mA}$$\n$$I_Z = I_S - I_L = 50 - 20 = 30\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "A full-wave rectifier without filter produces an RMS current $I_{rms} = 10\\text{ mA}$ and DC current $I_{dc} = 9\\text{ mA}$. Find the value of $(I_{ac})^2 = I_{rms}^2 - I_{dc}^2$ in $(\\text{mA})^2$.",
    options: [],
    correctAnswer: 19,
    explanation: "$$I_{ac}^2 = I_{rms}^2 - I_{dc}^2 = 10^2 - 9^2 = 100 - 81 = 19\\text{ mA}^2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (26 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A Zener diode is used to maintain a constant DC voltage across a variable load.\nReason (R): In the reverse breakdown region, the voltage across a Zener diode remains nearly constant over a wide range of reverse currents.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because the reverse breakdown characteristic has a nearly vertical I-V curve (extremely low dynamic resistance), large variations in current produce negligible changes in voltage, providing voltage stabilization. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A full-wave rectifier is more efficient than a half-wave rectifier.\nReason (R): A full-wave rectifier converts both positive and negative half-cycles of the AC input into pulsating DC, achieving a maximum theoretical efficiency of $81.2\\%$ compared to $40.6\\%$ for a half-wave rectifier.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Rectifying both half-cycles doubles the DC power delivery for a given AC input amplitude, yielding exactly double the rectification efficiency. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A capacitor filter is connected in parallel with the load resistor in a rectifier circuit to reduce output ripple.\nReason (R): A capacitor offers low reactance to high-frequency AC ripple components and infinite reactance to DC components, bypassing the AC ripple to ground.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Capacitive reactance $X_C = \\frac{1}{2\\pi f C}$ is zero for high frequencies and infinite for DC ($f = 0$). The capacitor stores charge during peaks and discharges through $R_L$ during valleys, smoothing the voltage. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A series resistor $R_S$ is mandatory in a Zener diode voltage regulator circuit.\nReason (R): Without the series resistor, an increase in input voltage would cause an unlimited increase in Zener current, burning out the diode due to excessive power dissipation.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because a Zener diode in breakdown has negligible internal dynamic resistance, any voltage above $V_Z$ directly across it would drive infinite current. $R_S$ absorbs the excess voltage $V_{in} - V_Z$ and limits current. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The ripple factor of a full-wave rectifier is significantly lower than that of a half-wave rectifier.\nReason (R): The fundamental AC ripple frequency in a full-wave rectifier is $2f$, leaving smaller idle time between consecutive conduction peaks.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because conduction occurs in both half cycles ($r = 0.48$ vs $1.21$), the pulsating output is closer to true DC, reducing the unwanted AC content. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A bridge rectifier requires smaller transformer ratings than a centre-tapped rectifier for the same DC output voltage.\nReason (R): The bridge rectifier uses the full secondary winding throughout both half-cycles, whereas a centre-tapped rectifier utilizes each half of the secondary alternately.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "In a bridge rectifier, the transformer utilization factor (TUF) is higher (0.812 vs 0.693 for centre-tapped), allowing a physically smaller and lighter transformer. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a bridge rectifier, the Peak Inverse Voltage (PIV) rating required for each diode is half that of a centre-tapped full-wave rectifier for the same DC output.\nReason (R): In a bridge rectifier, $PIV = V_m$, while in a centre-tapped rectifier, $PIV = 2V_m$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Two reverse diodes in the bridge share the reverse blocking capability, resulting in $PIV = V_m$ per diode instead of $2V_m$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An inductor filter is connected in series with the load resistor in a rectifier circuit to reduce ripple.\nReason (R): An inductor opposes any change in current through it by inducing a back-EMF according to Faraday's law of electromagnetic induction.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Inductive reactance $X_L = 2\\pi f L$ blocks AC ripple while presenting zero DC resistance, smoothing out current fluctuations. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A Zener diode can be used as a voltage regulator only if the input voltage $V_{in}$ is strictly greater than the Zener breakdown voltage $V_Z$.\nReason (R): If $V_{in} < V_Z$, the Zener diode remains in the reverse-biased cut-off region and cannot establish a constant breakdown voltage.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Regulation requires reverse breakdown. If $V_{in} < V_Z$, only negligible leakage current flows, so the diode acts as an open circuit and fails to regulate. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a full-wave bridge rectifier, if one of the four diodes becomes open-circuited, the circuit operates as a half-wave rectifier.\nReason (R): With one open diode, conduction occurs during only one half-cycle through the remaining functional pair of diodes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "If one diode burns open, the conduction path for that half-cycle is broken completely, leaving only the other half-cycle active via the opposite diode pair. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The output of an unfiltered rectifier is pulsating DC, not pure steady DC.\nReason (R): Rectification eliminates bidirectional current flow but retains time-varying AC harmonic components along with the DC component.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By Fourier analysis, the half-wave or full-wave rectified output consists of a DC average plus infinite even/odd sinusoidal harmonics, producing ripple. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A diode clipper circuit is used to remove portions of an arbitrary input waveform above or below a specified voltage level.\nReason (R): A diode conducts when forward biased, holding the node voltage to a fixed reference, while turning OFF when reverse biased to leave the signal intact.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Clippers rely on the nonlinear switching property of diodes to clamp or cut off signal excursions exceeding the reference bias level. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A diode clamper circuit adds a DC level to an AC signal without altering the wave shape of the signal.\nReason (R): A clamper uses a diode-capacitor network where the capacitor charges to the peak signal voltage, effectively shifting the baseline of the waveform.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Clamping circuits (DC restorers) charge a capacitor during the peak conduction phase and preserve the peak-to-peak AC swing while shifting the DC reference. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a Zener regulator, if the load resistance $R_L$ is decreased below a critical value, voltage regulation is lost.\nReason (R): When $R_L$ is too small, the required load current exceeds the total current supplied through $R_S$, forcing the Zener current to drop below its knee current into cut-off.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $I_Z = I_S - I_L$, if $I_L$ becomes too large, $I_Z$ drops below $I_{Z,min}$, causing the Zener diode to exit breakdown and lose regulation. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The form factor of a full-wave rectified sine wave is $1.11$.\nReason (R): Form factor is defined as the ratio of the RMS value to the DC (average) value: $FF = \\frac{I_{rms}}{I_{dc}} = \\frac{I_m / \\sqrt{2}}{2I_m / \\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The calculation $\\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$ directly defines and proves the form factor. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The form factor of a half-wave rectified sine wave is $1.57$.\nReason (R): For a half-wave rectifier, $I_{rms} = I_m / 2$ and $I_{dc} = I_m / \\pi$, giving form factor $\\frac{I_m / 2}{I_m / \\pi} = \\frac{\\pi}{2} \\approx 1.57$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The mathematical ratio $\\frac{\\pi}{2} = 1.57$ rigorously proves Assertion (A). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A full-wave bridge rectifier does not require a centre-tapped secondary transformer.\nReason (R): Four diodes in a bridge arrangement alternate conduction pathways across the entire secondary winding for both positive and negative AC half-cycles.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because the bridge steers current in the same direction through the load during both polarities, standard two-terminal secondary transformers are sufficient. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Zener diodes are heavily doped compared to ordinary rectifying diodes.\nReason (R): Heavy doping creates a very thin depletion region with an intense electric field, enabling breakdown at low reverse voltages.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Heavy doping brings the donor and acceptor concentrations to $10^{18}\\text{ cm}^{-3}$ or higher, narrowing the barrier to nanometers so that low reverse voltages ($< 6\\text{ V}$) produce fields exceeding $10^6\\text{ V/m}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A capacitor filter becomes more effective at higher AC ripple frequencies.\nReason (R): The capacitive reactance $X_C = \\frac{1}{2\\pi f C}$ decreases with increasing frequency, providing a lower impedance bypass path for high-frequency ripple.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Higher frequency reduces $X_C$, shunting ripple harmonics away from the load more effectively. This is why full-wave rectifiers ($2f$) filter more easily than half-wave rectifiers ($f$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An inductor filter performs better when the load current is large.\nReason (R): At high load currents, the inductor remains fully magnetized and energy stored in its magnetic field ($E = \\frac{1}{2}LI^2$) maintains continuous current flow during dips.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Unlike capacitor filters whose ripple increases with load current, inductor filters improve as load current increases because the ripple factor is inversely proportional to $R_L$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The DC voltage across the load in a full-wave rectifier is higher than in a half-wave rectifier with the same peak AC voltage.\nReason (R): In a full-wave rectifier, $V_{dc} = \\frac{2V_m}{\\pi}$, which is double the half-wave value $V_{dc} = \\frac{V_m}{\\pi}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The mathematical formula in (R) directly explains the twofold increase in average DC output voltage in (A). Both are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A Zener diode can be used in forward bias just like a conventional silicon diode.\nReason (R): In forward bias, a Zener diode conducts once the forward voltage exceeds the typical barrier potential of approximately $0.7\\text{ V}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "A Zener diode is fundamentally a p-n junction; under forward bias, it behaves exactly like a standard silicon rectifier with a $0.7\\text{ V}$ drop. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a voltage regulator circuit, the Zener diode is connected in parallel with the load.\nReason (R): Parallel connection ensures that the voltage across the load equals the Zener breakdown voltage.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Components connected in parallel share the exact same potential difference. Placing the load across the Zener diode forces the load voltage to match $V_Z$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The dynamic resistance of a Zener diode in the breakdown region should ideally be zero.\nReason (R): Zero dynamic resistance means that any change in Zener current results in zero change in terminal voltage, achieving perfect voltage stabilization.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\Delta V_Z = r_z \\cdot \\Delta I_Z$, if $r_z = 0$, the output voltage is completely immune to current fluctuations. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a half-wave rectifier, the transformer core can saturate under heavy loads.\nReason (R): The DC load current flows unidirectionally through the transformer secondary in half-wave rectification, causing net DC magnetization of the core.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because current pulses in only one direction through the secondary, a DC magnetic bias builds up in the core, causing magnetic saturation and hysteresis distortion. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "p-n junction diode applications (rectifiers, Zener diode)",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The ripple factor of a rectifier circuit is a dimensionless quantity.\nReason (R): Ripple factor is defined as the ratio of the RMS value of the AC ripple component to the DC component ($r = \\frac{V_{ac}}{V_{dc}}$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since it is the ratio of two quantities with the same units of voltage (or current), the units cancel out, making the ripple factor dimensionless. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  }
];
