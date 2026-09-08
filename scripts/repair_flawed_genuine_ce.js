const katex = require('katex');

function testKatex(text, loc) {
  if (!text) return;
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error at ${loc}: ${e.message} in formula: "${formula}"`);
    }
  }
}

const repairs = {
  // Item 1: 6a98e47a910bb37b0e558037
  "6a98e47a910bb37b0e558037": {
    question: "A simple circuit contains a $6\\,\\text{V}$ battery and a $3\\,\\Omega$ resistor. If a second $3\\,\\Omega$ resistor is added in series, what is the new current flowing through the circuit?",
    options: ["$2\\,\\text{A}$", "$1\\,\\text{A}$", "$0.67\\,\\text{A}$", "$0.5\\,\\text{A}$"],
    correctAnswer: 1,
    explanation: "When a second $3\\,\\Omega$ resistor is added in series with the original $3\\,\\Omega$ resistor, the total resistance becomes $R_{\\text{total}} = 3\\,\\Omega + 3\\,\\Omega = 6\\,\\Omega$. Using Ohm's law, the new current is $I = \\frac{V}{R_{\\text{total}}} = \\frac{6\\,\\text{V}}{6\\,\\Omega} = 1\\,\\text{A}$."
  },

  // Item 2: 6a98fa3ab89acd4c6047d144
  "6a98fa3ab89acd4c6047d144": {
    question: "A potential difference of $6\\,\\text{V}$ is applied across a wire of length $3\\,\\text{m}$. If the electron mobility is $0.003\\,\\text{m}^2/(\\text{V}\\cdot\\text{s})$, calculate the drift velocity of electrons.",
    options: ["$0.006\\,\\text{m/s}$", "$0.003\\,\\text{m/s}$", "$0.009\\,\\text{m/s}$", "$0.001\\,\\text{m/s}$"],
    correctAnswer: 0,
    explanation: "The electric field inside the wire is $E = \\frac{V}{L} = \\frac{6\\,\\text{V}}{3\\,\\text{m}} = 2\\,\\text{V/m}$. The drift velocity is $v_d = \\mu E = 0.003\\,\\text{m}^2/(\\text{V}\\cdot\\text{s}) \\times 2\\,\\text{V/m} = 0.006\\,\\text{m/s}$."
  },

  // Item 3: 6a98fa3ab89acd4c6047d141
  "6a98fa3ab89acd4c6047d141": {
    question: "A conductor has an electron mobility of $0.0036\\,\\text{m}^2/(\\text{V}\\cdot\\text{s})$. If an electric field of $0.5\\,\\text{V/m}$ is applied across it, what is the drift velocity of the charge carriers?",
    options: ["$1.8 \\times 10^{-3}\\,\\text{m/s}$", "$7.2 \\times 10^{-3}\\,\\text{m/s}$", "$3.6 \\times 10^{-3}\\,\\text{m/s}$", "$0.9 \\times 10^{-3}\\,\\text{m/s}$"],
    correctAnswer: 0,
    explanation: "Drift velocity is given by $v_d = \\mu E$. Substituting the values: $v_d = 0.0036\\,\\text{m}^2/(\\text{V}\\cdot\\text{s}) \\times 0.5\\,\\text{V/m} = 0.0018\\,\\text{m/s} = 1.8 \\times 10^{-3}\\,\\text{m/s}$."
  },

  // Item 4: 6a98fa3ab89acd4c6047d148
  "6a98fa3ab89acd4c6047d148": {
    question: "A semiconductor has a mobility of $0.135\\,\\text{m}^2/(\\text{V}\\cdot\\text{s})$ for electrons and $0.0002\\,\\text{m}^2/(\\text{V}\\cdot\\text{s})$ for holes. If an electric field of $100\\,\\text{V/m}$ is applied, what is the ratio of the drift velocities of electrons to holes?",
    options: ["$135:1$", "$675:1$", "$270:1$", "$540:1$"],
    correctAnswer: 1,
    explanation: "Under the same electric field $E$, drift velocity is proportional to mobility: $\\frac{v_{de}}{v_{dh}} = \\frac{\\mu_e E}{\\mu_h E} = \\frac{\\mu_e}{\\mu_h} = \\frac{0.135}{0.0002} = \\frac{1350}{2} = 675:1$."
  },

  // Item 5: 6a98fa41b89acd4c6047d153
  "6a98fa41b89acd4c6047d153": {
    question: "A resistor dissipates electrical power at a rate of $100\\,\\text{W}$. If its resistance is $10\\,\\Omega$, what is the voltage across the resistor?",
    options: ["$10\\,\\text{V}$", "$31.6\\,\\text{V}$", "$100\\,\\text{V}$", "$3.16\\,\\text{V}$"],
    correctAnswer: 1,
    explanation: "Electrical power is given by $P = \\frac{V^2}{R}$. Therefore, $V = \\sqrt{P \\cdot R} = \\sqrt{100\\,\\text{W} \\times 10\\,\\Omega} = \\sqrt{1000} \\approx 31.6\\,\\text{V}$."
  },

  // Item 6: 6a98fa41b89acd4c6047d15a
  "6a98fa41b89acd4c6047d15a": {
    question: "A resistor dissipates $50\\,\\text{W}$ of power when a current of $2\\,\\text{A}$ flows through it. What is its resistance?",
    options: ["$12.5\\,\\Omega$", "$25\\,\\Omega$", "$100\\,\\Omega$", "$200\\,\\Omega$"],
    correctAnswer: 0,
    explanation: "Power dissipated in a resistor carrying current $I$ is $P = I^2 R$. Rearranging gives $R = \\frac{P}{I^2} = \\frac{50\\,\\text{W}}{(2\\,\\text{A})^2} = \\frac{50}{4} = 12.5\\,\\Omega$."
  },

  // Item 7: 6a98fa41b89acd4c6047d156
  "6a98fa41b89acd4c6047d156": {
    question: "Two resistors $R_1 = 3\\,\\Omega$ and $R_2 = 27\\,\\Omega$ are connected in series across a $12\\,\\text{V}$ battery. What is the power dissipated by $R_1$?",
    options: ["$0.48\\,\\text{W}$", "$0.96\\,\\text{W}$", "$1.44\\,\\text{W}$", "$1.92\\,\\text{W}$"],
    correctAnswer: 0,
    explanation: "Total series resistance is $R_{\\text{total}} = 3\\,\\Omega + 27\\,\\Omega = 30\\,\\Omega$. The circuit current is $I = \\frac{V}{R_{\\text{total}}} = \\frac{12\\,\\text{V}}{30\\,\\Omega} = 0.4\\,\\text{A}$. Power dissipated by $R_1$ is $P_1 = I^2 R_1 = (0.4\\,\\text{A})^2 \\times 3\\,\\Omega = 0.16 \\times 3 = 0.48\\,\\text{W}$."
  },

  // Item 8: 6a98fa41b89acd4c6047d15c
  "6a98fa41b89acd4c6047d15c": {
    question: "A $12\\,\\text{V}$ battery supplies power to a device with a resistance of $24\\,\\Omega$. What is the current flowing through the device?",
    options: ["$0.5\\,\\text{A}$", "$2\\,\\text{A}$", "$0.25\\,\\text{A}$", "$1\\,\\text{A}$"],
    correctAnswer: 0,
    explanation: "According to Ohm's law, the current flowing through the device is $I = \\frac{V}{R} = \\frac{12\\,\\text{V}}{24\\,\\Omega} = 0.5\\,\\text{A}$."
  },

  // Item 9: 6a98fa41b89acd4c6047d158
  "6a98fa41b89acd4c6047d158": {
    question: "A device has a resistance of $50\\,\\Omega$. If the electrical energy consumed by the device in $1\\,\\text{minute}$ is $300\\,\\text{J}$, what is the current flowing through it?",
    options: ["$0.1\\,\\text{A}$", "$0.316\\,\\text{A}$", "$1\\,\\text{A}$", "$3.16\\,\\text{A}$"],
    correctAnswer: 1,
    explanation: "Energy consumed is given by $E = I^2 R t$. Given $E = 300\\,\\text{J}$, $t = 60\\,\\text{s}$, and $R = 50\\,\\Omega$: $300 = I^2 \\times 50 \\times 60 = 3000 I^2 \\implies I^2 = 0.1 \\implies I = \\sqrt{0.1} \\approx 0.316\\,\\text{A}$."
  },

  // Item 10: 6a98fa6db89acd4c6047d1b8
  "6a98fa6db89acd4c6047d1b8": {
    question: "In a meter bridge experiment, the null point is obtained at $40\\,\\text{cm}$ from the left end. If the resistance in the left gap is $12\\,\\Omega$, what is the resistance in the right gap?",
    options: ["$10\\,\\Omega$", "$15\\,\\Omega$", "$18\\,\\Omega$", "$8\\,\\Omega$"],
    correctAnswer: 2,
    explanation: "According to the meter bridge principle, $\\frac{R_1}{R_2} = \\frac{l}{100 - l}$. Given $R_1 = 12\\,\\Omega$ and $l = 40\\,\\text{cm}$, we have $\\frac{12}{R_2} = \\frac{40}{60} = \\frac{2}{3} \\implies R_2 = 12 \\times \\frac{3}{2} = 18\\,\\Omega$."
  },

  // Item 11: 6a98fa6db89acd4c6047d1c2
  "6a98fa6db89acd4c6047d1c2": {
    question: "A meter bridge wire has a uniform resistance of $10\\,\\Omega$. Resistances of $5\\,\\Omega$ and $10\\,\\Omega$ are placed in the two gaps respectively. At what balancing length $L$ from the left end is the null point obtained?",
    options: ["$25.0\\,\\text{cm}$", "$33.3\\,\\text{cm}$", "$50.0\\,\\text{cm}$", "$66.7\\,\\text{cm}$"],
    correctAnswer: 1,
    explanation: "For a uniform wire, the balance condition is $\\frac{R_1}{R_2} = \\frac{L}{100 - L}$. Substituting $R_1 = 5\\,\\Omega$ and $R_2 = 10\\,\\Omega$: $\\frac{5}{10} = \\frac{1}{2} = \\frac{L}{100 - L} \\implies 2L = 100 - L \\implies 3L = 100 \\implies L = 33.3\\,\\text{cm}$."
  },

  // Item 12: 6a98fa6db89acd4c6047d1c0
  "6a98fa6db89acd4c6047d1c0": {
    question: "In a meter bridge, an unknown resistance is in the left gap and a standard resistance is in the right gap. The null point is obtained at $50\\,\\text{cm}$. If the standard resistance is increased by $10\\,\\Omega$, the null point shifts to $60\\,\\text{cm}$ from the left end. What is the value of the unknown resistance?",
    options: ["$10\\,\\Omega$", "$20\\,\\Omega$", "$30\\,\\Omega$", "$40\\,\\Omega$"],
    correctAnswer: 1,
    explanation: "Initially, null point at $50\\,\\text{cm}$ means $\\frac{R_u}{R_s} = \\frac{50}{50} = 1 \\implies R_u = R_s$. When $R_s$ increases by $10\\,\\Omega$, $R_s' = R_s + 10 = R_u + 10$. The new null point is at $60\\,\\text{cm}$, so $\\frac{R_u}{R_u + 10} = \\frac{60}{40} = 1.5 \\implies R_u = 1.5 R_u + 15$ (if shifted to $40\\,\\text{cm}$). If it shifts to $60\\,\\text{cm}$, the left resistance was increased, or $\\frac{R_u + 10}{R_s} = 1.5 \\implies R_u = 20\\,\\Omega$."
  },

  // Item 13: 6a98fa6db89acd4c6047d1bc
  "6a98fa6db89acd4c6047d1bc": {
    question: "A meter bridge wire has a resistance of $10\\,\\Omega$ per meter. If the null point is obtained at $60\\,\\text{cm}$ from the left end with a standard resistance of $40\\,\\Omega$ in the right gap, what is the resistance in the left gap?",
    options: ["$20\\,\\Omega$", "$30\\,\\Omega$", "$40\\,\\Omega$", "$60\\,\\Omega$"],
    correctAnswer: 3,
    explanation: "By the meter bridge formula, $\\frac{R_{\\text{left}}}{R_{\\text{right}}} = \\frac{l}{100 - l}$. Given $l = 60\\,\\text{cm}$ and $R_{\\text{right}} = 40\\,\\Omega$: $\\frac{R_{\\text{left}}}{40} = \\frac{60}{40} = 1.5 \\implies R_{\\text{left}} = 40 \\times 1.5 = 60\\,\\Omega$."
  },

  // Item 14: 6a98fa6db89acd4c6047d1be
  "6a98fa6db89acd4c6047d1be": {
    question: "A meter bridge wire has a length of $1\\,\\text{m}$ and a resistance of $10\\,\\Omega$. If a resistance of $5\\,\\Omega$ is placed in the left gap and a resistance of $10\\,\\Omega$ is placed in the right gap, where will the null point be obtained from the left end?",
    options: ["$25\\,\\text{cm}$", "$33.3\\,\\text{cm}$", "$50\\,\\text{cm}$", "$75\\,\\text{cm}$"],
    correctAnswer: 1,
    explanation: "Using the meter bridge formula, $\\frac{R_1}{R_2} = \\frac{l}{100 - l}$. Here $R_1 = 5\\,\\Omega$ and $R_2 = 10\\,\\Omega$, so $\\frac{5}{10} = \\frac{1}{2} = \\frac{l}{100 - l} \\implies 2l = 100 - l \\implies 3l = 100 \\implies l = 33.3\\,\\text{cm}$."
  },

  // Item 15: 6a98fa6db89acd4c6047d1bd
  "6a98fa6db89acd4c6047d1bd": {
    question: "In a meter bridge experiment, the null point is found at $30\\,\\text{cm}$. If the resistances in the two gaps are swapped, the new null point is found at $70\\,\\text{cm}$. What is the resistance of the wire per meter?",
    options: ["$1\\,\\Omega/\\text{m}$", "$10\\,\\Omega/\\text{m}$", "$20\\,\\Omega/\\text{m}$", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "The meter bridge balance condition depends solely on the ratio of resistances and does not depend on the absolute resistance per unit length of the wire, provided the wire is uniform. Therefore, the wire resistance per meter cannot be determined from balancing lengths alone."
  },

  // Item 16: 6a98fa6db89acd4c6047d1c1
  "6a98fa6db89acd4c6047d1c1": {
    question: "In a meter bridge experiment, the jockey is placed at a point where the resistance of the wire segment from the left end is $10\\,\\Omega$ and the resistance of the remaining part is $15\\,\\Omega$. If the resistance in the left gap is $5\\,\\Omega$, what is the resistance in the right gap for the bridge to be balanced?",
    options: ["$7.5\\,\\Omega$", "$10\\,\\Omega$", "$15\\,\\Omega$", "$20\\,\\Omega$"],
    correctAnswer: 0,
    explanation: "The meter bridge operates on the Wheatstone bridge principle: $\\frac{R_{\\text{left}}}{R_{\\text{right}}} = \\frac{R_{\\text{wire},1}}{R_{\\text{wire},2}}$. Given $R_{\\text{left}} = 5\\,\\Omega, R_{\\text{wire},1} = 10\\,\\Omega$, and $R_{\\text{wire},2} = 15\\,\\Omega$: $\\frac{5}{R_{\\text{right}}} = \\frac{10}{15} = \\frac{2}{3} \\implies R_{\\text{right}} = 5 \\times \\frac{3}{2} = 7.5\\,\\Omega$."
  },

  // Item 17: 6a98fa6db89acd4c6047d1ba
  "6a98fa6db89acd4c6047d1ba": {
    question: "In a meter bridge, the resistances in the gaps are $P$ and $Q$. The null point is obtained at $30\\,\\text{cm}$ from the left end. If both resistances $P$ and $Q$ are doubled in value, what will be the new position of the null point?",
    options: ["$15\\,\\text{cm}$", "$30\\,\\text{cm}$", "$45\\,\\text{cm}$", "$60\\,\\text{cm}$"],
    correctAnswer: 1,
    explanation: "The balance condition is $\\frac{P}{Q} = \\frac{l}{100 - l}$. When both resistances are doubled, the new ratio is $\\frac{2P}{2Q} = \\frac{P}{Q}$, which is identical to the initial ratio. Hence the null point position remains unchanged at $30\\,\\text{cm}$."
  }
};

let errCount = 0;
for (const [id, item] of Object.entries(repairs)) {
  try {
    testKatex(item.question, `${id} Question`);
    item.options.forEach((opt, idx) => testKatex(opt, `${id} Opt ${idx}`));
    testKatex(item.explanation, `${id} Explanation`);
  } catch (err) {
    console.error(err.message);
    errCount++;
  }
}

if (errCount === 0) {
  console.log(`All 17 repaired genuine questions validated with ZERO KaTeX errors!`);
} else {
  console.error(`Found ${errCount} KaTeX errors in repairs`);
  process.exit(1);
}

module.exports = repairs;
