// Subtopic 6: Solar cell, photodiode, and LED (53 Questions: 7 MCQ, 20 NUMERICAL, 26 ASSERTION_REASON)
module.exports = [
  // --- MCQs (7 questions) ---
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A photodiode is typically operated under reverse bias rather than forward bias because:",
    options: [
      "The fractional change in minority carrier current upon illumination is much easier to measure than in majority carrier current",
      "Reverse bias lowers the potential barrier, allowing faster response",
      "Photons cannot penetrate the semiconductor under forward bias",
      "Dark current is completely zero in reverse bias"
    ],
    correctAnswer: 0,
    explanation: "Under reverse bias, the dark current is very small ($I_s \\sim\\text{nA}$). A small optically generated current $\\Delta I$ produces a dramatic percentage change ($\\frac{\\Delta I}{I_s} \\gg 1$). In forward bias, the dark current is large ($I \\sim\\text{mA}$), so the same $\\Delta I$ produces an undetectable fractional change.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "The I-V characteristic curve of a solar cell lies in which quadrant of the Cartesian coordinate plane?",
    options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
    correctAnswer: 3,
    explanation: "A solar cell generates electrical power rather than consuming it. Since it supplies current to an external load while maintaining a positive terminal voltage, the product $V \\cdot I$ represents delivered power, placing its operating characteristic in the fourth quadrant.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "For a light emitting diode (LED) to emit visible light, the band gap of the semiconductor material must be at least:",
    options: ["$0.5\\text{ eV}$", "$1.1\\text{ eV}$", "$1.8\\text{ eV}$", "$3.5\\text{ eV}$"],
    correctAnswer: 2,
    explanation: "The visible spectrum ranges from roughly $400\\text{ nm}$ (violet, $\\sim 3.1\\text{ eV}$) to $700\\text{ nm}$ (red, $\\sim 1.8\\text{ eV}$). Therefore, the material must have a band gap $E_g \\ge 1.8\\text{ eV}$ to emit photons in the visible range.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Why is silicon, despite being widely used for solar cells, not suitable for fabricating light emitting diodes (LEDs)?",
    options: [
      "Silicon is an indirect band gap semiconductor where recombination is largely non-radiative",
      "Silicon has an excessively large band gap of $5.4\\text{ eV}$",
      "Silicon cannot form p-n junctions",
      "Silicon melts at room temperature when forward biased"
    ],
    correctAnswer: 0,
    explanation: "Silicon is an indirect band gap semiconductor. Electron-hole recombination requires phonon (lattice vibration) assistance, dissipating energy as heat rather than emitting light. LEDs require direct band gap materials (e.g., GaAs, GaN).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "In an illuminated photodiode operating in reverse bias, the photocurrent is directly proportional to:",
    options: [
      "The intensity of incident light",
      "The square of the applied reverse voltage",
      "The temperature of the ambient air",
      "The forward knee voltage"
    ],
    correctAnswer: 0,
    explanation: "Each photon with energy $h\\nu \\ge E_g$ generates one electron-hole pair. The rate of generation of carriers—and hence the photocurrent—is directly proportional to the incident photon flux (light intensity).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Which of the following semiconductor compounds is commonly used to produce a red light emitting diode?",
    options: ["GaAs", "GaAs$_{0.6}$P$_{0.4}$", "Pure Germanium", "Silicon"],
    correctAnswer: 1,
    explanation: "Gallium Arsenide Phosphide ($\text{GaAs}_{1-x}\text{P}_x$ with $x \\approx 0.4$) has a direct band gap of about $1.9\\text{ eV}$, corresponding to red light emission ($\\lambda \\approx 650\\text{ nm}$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Solar cell, photodiode, and LED",
    question: "The three basic processes involved in the generation of electricity by a solar cell are:",
    options: [
      "Generation of e-h pairs by light, separation of carriers by internal electric field, and collection at contacts",
      "Amplification of input AC signal, rectification by diode, and smoothing by filter",
      "Thermal ionization, electron avalanche, and quantum tunneling",
      "Forward injection, impact ionization, and secondary emission"
    ],
    correctAnswer: 0,
    explanation: "The photovoltaic effect comprises: (1) generation of electron-hole pairs by photons with $h\\nu > E_g$, (2) separation of charge carriers by the built-in electric field of the junction, and (3) collection at the front and back metal contacts.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (20 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An LED is manufactured from a semiconductor material with a band gap $E_g = 2.0\\text{ eV}$. Find the wavelength of the emitted light in nanometers (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 620,
    explanation: "$$\\lambda = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{2.0\\text{ eV}} = 620\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A photodiode has a band gap of $E_g = 1.55\\text{ eV}$. Find the maximum threshold wavelength of incident optical radiation in nanometers that can be detected (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 800,
    explanation: "$$\\lambda_{max} = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.55\\text{ eV}} = 800\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An LED emits green light of wavelength $550\\text{ nm}$. If $hc = 1240\\text{ eV}\\cdot\\text{nm}$, calculate the band gap $E_g$ of the semiconductor material in electron-volts rounded to two decimal places, or find the value of $100 \\times E_g$ (enter integer: $1240 / 550 = 2.2545 \\implies 225$). For integer: if $\\lambda = 620\\text{ nm}$, $E_g = 2\\text{ eV}$. If an LED emits blue light at $\\lambda = 413.3\\text{ nm}$, find $E_g$ in eV ($1240 / 413.3 = 3$).",
    options: [],
    correctAnswer: 3,
    explanation: "$$E_g = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{413.3\\text{ nm}} = 3\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A solar cell of area $4\\text{ cm}^2$ ($4\\times 10^{-4}\\text{ m}^2$) is illuminated with sunlight of intensity $1000\\text{ W/m}^2$. If the total electrical power generated by the solar cell at peak efficiency is $60\\text{ mW}$, find the conversion efficiency as a percentage (enter integer).",
    options: [],
    correctAnswer: 15,
    explanation: "Incident optical power:\n$$P_{in} = \\text{Intensity} \\times \\text{Area} = 1000\\text{ W/m}^2 \\times 4\\times 10^{-4}\\text{ m}^2 = 0.40\\text{ W} = 400\\text{ mW}$$\nOutput electrical power:\n$$P_{out} = 60\\text{ mW}$$\nEfficiency:\n$$\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\% = \\frac{60}{400} \\times 100\\% = 15\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An optical signal of wavelength $1240\\text{ nm}$ is incident on a photodiode. Find the minimum band gap in electron-volts required to detect this wavelength.",
    options: [],
    correctAnswer: 1,
    explanation: "$$E_g = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1240\\text{ nm}} = 1\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A solar cell delivers an open circuit voltage $V_{oc} = 0.6\\text{ V}$ and a short circuit current $I_{sc} = 50\\text{ mA}$. If the fill factor (FF) of the cell is $0.80$, find the maximum electrical power output in milliwatts.",
    options: [],
    correctAnswer: 24,
    explanation: "$$P_{max} = FF \\times V_{oc} \\times I_{sc} = 0.80 \\times 0.6\\text{ V} \\times 50\\text{ mA} = 0.80 \\times 30 = 24\\text{ mW}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An LED has a forward voltage drop of $2.5\\text{ V}$ when carrying a current of $20\\text{ mA}$. Find the electrical power consumed by the LED in milliwatts.",
    options: [],
    correctAnswer: 50,
    explanation: "$$P = V \\cdot I = 2.5\\text{ V} \\times 20\\text{ mA} = 50\\text{ mW}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A photodiode operates in reverse bias. The dark current is $2\\text{ }\\mu\\text{A}$. When exposed to light of a certain intensity, the total reverse current rises to $50\\text{ }\\mu\\text{A}$. Find the photocurrent generated by the incident light in microamperes.",
    options: [],
    correctAnswer: 48,
    explanation: "$$I_{photo} = I_{total} - I_{dark} = 50\\text{ }\\mu\\text{A} - 2\\text{ }\\mu\\text{A} = 48\\text{ }\\mu\\text{A}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An LED operating at $2.0\\text{ V}$ and $10\\text{ mA}$ converts electrical power into light with $20\\%$ optical efficiency. Find the radiant optical power emitted by the LED in milliwatts.",
    options: [],
    correctAnswer: 4,
    explanation: "Electrical input power:\n$$P_{elec} = 2.0\\text{ V} \\times 10\\text{ mA} = 20\\text{ mW}$$\nRadiant optical output power:\n$$P_{opt} = 0.20 \\times 20\\text{ mW} = 4\\text{ mW}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A solar panel consisting of $36$ identical solar cells connected in series is installed. If each cell produces an open circuit voltage of $0.5\\text{ V}$, find the total open circuit voltage of the panel in volts.",
    options: [],
    correctAnswer: 18,
    explanation: "For series connection of identical cells:\n$$V_{total} = N \\times V_{cell} = 36 \\times 0.5\\text{ V} = 18\\text{ V}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A photodiode has a quantum efficiency of $100\\%$ (each photon generates one electron-hole pair). If $5\\times 10^{14}$ photons strike the depletion region per second, find the generated photocurrent in microamperes (take $e = 1.6\\times 10^{-19}\\text{ C}$, $I = 5\\times 10^{14} \\times 1.6\\times 10^{-19} = 8\\times 10^{-5}\\text{ A} = 80\\text{ }\\mu\\text{A}$).",
    options: [],
    correctAnswer: 80,
    explanation: "$$I = N \\cdot e = (5\\times 10^{14}\\text{ s}^{-1}) \\times (1.6\\times 10^{-19}\\text{ C}) = 8.0\\times 10^{-5}\\text{ A} = 80\\text{ }\\mu\\text{A}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An LED is connected across a $9\\text{ V}$ battery in series with a resistor $R$. If the forward voltage drop across the LED is $2\\text{ V}$ and the desired operating current is $20\\text{ mA}$, find the required value of the series resistor $R$ in ohms.",
    options: [],
    correctAnswer: 350,
    explanation: "$$V_R = V_{battery} - V_{LED} = 9 - 2 = 7\\text{ V}$$\n$$R = \\frac{V_R}{I} = \\frac{7\\text{ V}}{20\\times 10^{-3}\\text{ A}} = 350\\text{ }\\Omega.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A photodiode is made of a semiconductor with band gap $E_g = 2.48\\text{ eV}$. Find the cut-off wavelength in nanometers (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 500,
    explanation: "$$\\lambda = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{2.48\\text{ eV}} = 500\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A solar cell provides a short-circuit current of $40\\text{ mA}$ under standard illumination. If the illumination intensity is doubled, what will be the new short-circuit current in milliamperes?",
    options: [],
    correctAnswer: 80,
    explanation: "The short circuit current $I_{sc}$ is directly proportional to incident optical intensity:\n$$I_{sc2} = 2 \\times I_{sc1} = 2 \\times 40 = 80\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An LED emits light at a peak wavelength of $400\\text{ nm}$. Find the band gap energy of the semiconductor material in electron-volts (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $1240/400 = 3.1\\text{ eV}$; enter $31$ for $10\\times$? If $\\lambda = 310\\text{ nm}$, then $E_g = 4\\text{ eV}$). For $\\lambda = 310\\text{ nm}$, find $E_g$ in eV.",
    options: [],
    correctAnswer: 4,
    explanation: "$$E_g = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{310\\text{ nm}} = 4\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A solar cell generates $V_{oc} = 0.5\\text{ V}$ and $I_{sc} = 100\\text{ mA}$. If the maximum power delivered to a load is $35\\text{ mW}$, calculate the fill factor (FF) as a percentage (enter integer, $35 / (0.5 \\times 100) = 35 / 50 = 70\\%$).",
    options: [],
    correctAnswer: 70,
    explanation: "$$FF = \\frac{P_{max}}{V_{oc} \\times I_{sc}} = \\frac{35\\text{ mW}}{0.5\\text{ V} \\times 100\\text{ mA}} = \\frac{35}{50} = 0.70 = 70\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A photodetector requires photons of at least $1.0\\text{ eV}$ energy to generate a detectable current. Find the maximum wavelength in nanometers of light that can be detected (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 1240,
    explanation: "$$\\lambda_{max} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.0\\text{ eV}} = 1240\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "In a photodiode, the reverse saturation current under dark conditions is $10\\text{ nA}$. When exposed to a light source, the current becomes $10010\\text{ nA}$. Find the generated photocurrent in microamperes.",
    options: [],
    correctAnswer: 10,
    explanation: "$$I_{photo} = 10010\\text{ nA} - 10\\text{ nA} = 10000\\text{ nA} = 10\\text{ }\\mu\\text{A}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "An array of $10$ identical LEDs, each operating at $2\\text{ V}$ and $15\\text{ mA}$, is connected in parallel. Find the total current drawn from the power supply in milliamperes.",
    options: [],
    correctAnswer: 150,
    explanation: "For parallel connection:\n$$I_{total} = 10 \\times 15\\text{ mA} = 150\\text{ mA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Solar cell, photodiode, and LED",
    question: "A solar cell has an area of $10\\text{ cm}^2$ ($10^{-3}\\text{ m}^2$). When exposed to solar radiation of $1000\\text{ W/m}^2$, it generates $150\\text{ mW}$ of electrical power. Find the efficiency of the solar cell as a percentage.",
    options: [],
    correctAnswer: 15,
    explanation: "Input power:\n$$P_{in} = 1000\\text{ W/m}^2 \\times 10^{-3}\\text{ m}^2 = 1.0\\text{ W} = 1000\\text{ mW}$$\nEfficiency:\n$$\\eta = \\frac{150\\text{ mW}}{1000\\text{ mW}} \\times 100\\% = 15\\%.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (26 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A photodiode is always operated in reverse bias for optical signal detection.\nReason (R): In reverse bias, the fractional increase in the minority carrier current upon illumination is substantially larger than in forward bias.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The dark reverse current is extremely tiny (nanoamperes), so even weak light produces a huge relative percentage change in reverse current, allowing sensitive detection. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A solar cell produces electrical voltage without any external battery connected to it.\nReason (R): When illuminated, optically generated electron-hole pairs in the depletion region are separated by the built-in electric field, creating an open circuit photovoltage across the terminals.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The built-in space-charge field sweeps electrons to the n-side and holes to the p-side, accumulating opposite charges at the two contacts and establishing a potential difference (photovoltaic effect). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An LED must be operated in forward bias to emit light.\nReason (R): Under forward bias, majority electrons and holes are injected across the junction and undergo radiative recombination, emitting photons of energy $h\\nu \\approx E_g$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Forward bias pushes electrons into the p-region and holes into the n-region. Spontaneous radiative recombination in the transition region releases energy as photons. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Silicon is not used to fabricate LEDs emitting visible light.\nReason (R): Silicon is an indirect band gap semiconductor with a band gap of only $1.1\\text{ eV}$, which results in non-radiative recombination and infrared emissions.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Silicon's indirect gap produces phonons (heat) instead of photons upon recombination, and its $1.1\\text{ eV}$ gap corresponds to the infrared spectrum ($> 1100\\text{ nm}$), not visible light. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The I-V characteristic curve of a solar cell is plotted in the fourth quadrant of the I-V plane.\nReason (R): A solar cell acts as a power generator that delivers current out of its positive terminal into an external load.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "In passive convention, delivering power means current flows opposite to the applied voltage polarity, resulting in $V > 0$ and $I < 0$, which defines the fourth quadrant. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The color of light emitted by an LED depends on the chemical composition of the semiconductor material.\nReason (R): The energy of the emitted photon equals the band gap ($h\\nu \\approx E_g$), which is an intrinsic property determined by the compound semiconductor material.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Wavelength is set by $\\lambda = \\frac{hc}{E_g}$. Modifying material composition (such as adjusting the phosphorus fraction $x$ in $\\text{GaAs}_{1-x}\\text{P}_x$) tunes $E_g$ and the emitted color. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The reverse breakdown voltage of an LED is typically very low (around $5\\text{ V}$).\nReason (R): LEDs are heavily doped to ensure high injection of carriers during forward bias, which makes them susceptible to early Zener breakdown under reverse bias.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Heavy doping narrows the depletion layer, so even small reverse voltages induce breakdown and destroy the diode. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The photocurrent in a reverse-biased photodiode increases linearly with the intensity of incident light.\nReason (R): The rate of generation of electron-hole pairs in the depletion region is directly proportional to the incident photon flux.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Each absorbed photon creates one electron-hole pair. Higher intensity means more photons per second, yielding a proportionally higher photocurrent. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a solar cell, the top semiconductor layer is made extremely thin.\nReason (R): A thin top layer ensures that incident sunlight penetrates directly into the depletion region where charge separation is most effective.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "If the top layer were thick, light would be absorbed far from the junction and photogenerated carriers would recombine before diffusing to the depletion layer. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The fill factor (FF) of a solar cell is always strictly less than $1$.\nReason (R): Due to internal series resistance and non-ideal diode recombination, the maximum operating power point ($V_{mp} \\cdot I_{mp}$) is always less than the product of open-circuit voltage and short-circuit current ($V_{oc} \\cdot I_{sc}$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because the I-V curve is exponential rather than rectangular, $V_{mp} < V_{oc}$ and $I_{mp} < I_{sc}$, making $FF = \\frac{P_{max}}{V_{oc} I_{sc}} < 1$ (typically $0.7 - 0.85$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An anti-reflective coating is deposited on the front surface of a solar cell.\nReason (R): Silicon has a high refractive index ($n \\approx 3.5$) that reflects over $30\\%$ of incident sunlight, and the coating minimizes optical reflection loss through destructive interference.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Destructive interference of light reflected from the coating's front and back surfaces traps more light inside the active silicon volume, maximizing photocurrent. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Gallium Arsenide (GaAs) is an ideal semiconductor material for fabricating solar cells.\nReason (R): GaAs has a direct band gap of $1.42\\text{ eV}$ closely matching the peak of the solar spectrum and exhibits a very high optical absorption coefficient.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The theoretical maximum solar conversion efficiency (Shockley-Queisser limit) peaks near $1.4 - 1.5\\text{ eV}$, matching GaAs perfectly. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Photodiodes are fabricated with a transparent optical window above the p-n junction.\nReason (R): The optical window allows external light to reach the depletion layer directly to create electron-hole pairs.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Standard semiconductor packaging is opaque. Photodiodes require a glass or resin window to illuminate the active junction area. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A solar cell does not require an external power supply to operate.\nReason (R): Sunlight acts as the external source of energy, converting radiant optical power directly into electrical power.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "A solar cell is a self-powered energy converter driving external circuits via light energy conversion. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An LED has a significantly longer operational lifetime than an incandescent light bulb.\nReason (R): An LED operates by solid-state cold electron-hole recombination rather than thermal incandescence of a delicate filament that evaporates over time.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Solid-state electronic emission has no moving parts or glowing filaments subject to mechanical shock or oxidation, giving lifetimes exceeding $50,000$ hours. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When an LED is reverse biased, it does not emit light.\nReason (R): Under reverse bias, the potential barrier is increased, preventing the injection of majority carriers across the junction and stopping recombination.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Light emission requires carrier injection and subsequent recombination. Reverse bias widens the barrier, pulling carriers away from the junction. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The open-circuit voltage $V_{oc}$ of a solar cell increases logarithmically with light intensity.\nReason (R): The open-circuit voltage is given by $V_{oc} = \\frac{k_B T}{e}\\ln\\left(1 + \\frac{I_{sc}}{I_s}\\right)$, where short-circuit current $I_{sc}$ is directly proportional to light intensity.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Setting load current $I = 0$ in the solar cell equation $I = I_{sc} - I_s(e^{eV/k_B T} - 1)$ yields the logarithmic intensity dependence of $V_{oc}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The response time of a photodiode is on the order of nanoseconds, making it suitable for optical fiber communications.\nReason (R): The high electric field in the reverse-biased depletion region sweeps photogenerated carriers across at their saturation drift velocity.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Carrier transit time $t_{tr} = W / v_{sat}$ across a micrometer depletion region takes $\\sim 10^{-11}\\text{ s}$, enabling ultra-high frequency optical demodulation. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): White LEDs are commonly produced by combining a blue LED with a yellow phosphor coating.\nReason (R): Part of the blue light excites the phosphor, emitting broad yellow fluorescence, and the combination of transmitted blue light and emitted yellow light appears white to the human eye.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This phosphor conversion technique (using InGaN blue LEDs with YAG:Ce phosphor) is the most efficient and standard commercial method for white solid-state lighting. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An increase in operating temperature reduces the open-circuit voltage of a solar cell.\nReason (R): Higher temperature exponentially increases the reverse saturation current $I_s$ due to increased thermal generation of intrinsic carriers.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $V_{oc} \\propto \\ln(I_{sc} / I_s)$ and $I_s \\propto n_i^2 \\propto e^{-E_g / k_B T}$, rising $I_s$ decreases $V_{oc}$ by roughly $-2\\text{ mV/}^{\\circ}\\text{C}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Photodiodes are operated with an optical lens or dome in optical fiber receivers.\nReason (R): A lens focuses incident optical power onto the small active area of the depletion region, maximizing light collection efficiency.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Small junction area minimizes junction capacitance $C_T = \\varepsilon A / W$ (ensuring high speed), while the lens gathers light from a larger aperture. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The short-circuit current of a solar cell is nearly independent of temperature.\nReason (R): $I_{sc}$ is governed primarily by optical generation rate, which changes only slightly due to minor band gap shrinkage with temperature.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because $I_{sc}$ depends on photon absorption flux rather than thermal carrier generation, it remains virtually constant with temperature (slight positive temperature coefficient). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Infrared LEDs are commonly fabricated using Gallium Arsenide (GaAs).\nReason (R): The direct band gap of pure GaAs is $1.42\\text{ eV}$, corresponding to photon emission at $\\lambda \\approx 873\\text{ nm}$ in the near-infrared spectrum.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Using $\\lambda = \\frac{1240}{1.42} \\approx 873\\text{ nm}$, which is in the infrared range used in TV remote controls. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Solar cells are connected in series-parallel combinations to form solar modules and arrays.\nReason (R): Series connection increases the total voltage output, while parallel connection increases the total current capacity.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "A single silicon cell provides only $0.5 - 0.6\\text{ V}$. Series-parallel networks scale both voltage and current to match standard commercial power inverter requirements. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An LED requires a series current-limiting resistor when connected to a DC voltage source.\nReason (R): Above the knee voltage, the forward current increases exponentially, which would lead to thermal runaway and permanent burnout without a current limiter.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because an LED has a very steep forward characteristic, even a $0.1\\text{ V}$ variation in supply voltage can multiply current tenfold. The series resistor safely limits forward current to rated values ($10-30\\text{ mA}$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Solar cell, photodiode, and LED",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a photodiode, electron-hole pairs generated far away from the depletion layer contribute little to the fast photocurrent.\nReason (R): Carriers generated in the bulk neutral regions must diffuse to the junction before they can be separated, and most recombine within one minority carrier diffusion length.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Without an electric field in neutral regions, transport is slow diffusion subject to bulk recombination, whereas carriers born in the depletion field are swept instantly. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  }
];
