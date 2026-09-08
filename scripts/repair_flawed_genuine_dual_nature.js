const katex = require('katex');

const genuineRepairs = {
  "6a98e525910bb37b0e558134": {
    question: "A neutron and a proton have the same kinetic energy. What is the ratio of the de Broglie wavelength of the proton to that of the neutron? (Mass of neutron $\\approx 1.675 \\times 10^{-27}\\,\\text{kg}$, Mass of proton $\\approx 1.672 \\times 10^{-27}\\,\\text{kg}$)",
    options: ["1.00", "0.998", "1.002", "0.5"],
    correctAnswer: 2,
    explanation: "Since kinetic energy $K$ is the same, $\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{m}}$. The ratio of the de Broglie wavelength of proton to neutron is $\\frac{\\lambda_p}{\\lambda_n} = \\sqrt{\\frac{m_n}{m_p}} = \\sqrt{\\frac{1.675 \\times 10^{-27}}{1.672 \\times 10^{-27}}} = \\sqrt{1.0018} \\approx 1.002$. Option C is correct."
  },
  "6a98e525910bb37b0e558131": {
    question: "Calculate the de Broglie wavelength of an electron accelerated through a potential difference of $100\\,\\text{V}$. (Mass of electron $m_e = 9.1 \\times 10^{-31}\\,\\text{kg}$, charge of electron $e = 1.6 \\times 10^{-19}\\,\\text{C}$, Planck's constant $h = 6.63 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$)",
    options: ["0.122 nm", "0.244 nm", "1.22 nm", "2.44 nm"],
    correctAnswer: 0,
    explanation: "Kinetic energy gained by the electron is $K = eV = (1.6 \\times 10^{-19}\\,\\text{C}) \\times (100\\,\\text{V}) = 1.6 \\times 10^{-17}\\,\\text{J}$. The de Broglie wavelength is $\\lambda = \\frac{h}{\\sqrt{2m_e K}} = \\frac{1.227}{\\sqrt{V}}\\,\\text{nm} = \\frac{1.227}{\\sqrt{100}}\\,\\text{nm} = 0.1227\\,\\text{nm} \\approx 0.122\\,\\text{nm}$. Hence Option A is correct."
  },
  "6a98e525910bb37b0e55812f": {
    question: "If the kinetic energy of a particle is doubled, how does its de Broglie wavelength change?",
    options: ["It remains the same", "It doubles", "It becomes half", "It decreases by a factor of $\\sqrt{2}$"],
    correctAnswer: 3,
    explanation: "The de Broglie wavelength is $\\lambda = \\frac{h}{\\sqrt{2mK}}$. If kinetic energy $K$ is doubled to $2K$, the new wavelength becomes $\\lambda' = \\frac{h}{\\sqrt{2m(2K)}} = \\frac{\\lambda}{\\sqrt{2}}$. Thus, it decreases by a factor of $\\sqrt{2}$. Option D is correct."
  },
  "6a98e525910bb37b0e558132": {
    question: "What is the de Broglie wavelength of a $1\\,\\text{kg}$ object moving at a speed of $1\\,\\text{m/s}$?",
    options: ["$6.63 \\times 10^{-34}\\,\\text{m}$", "$3.315 \\times 10^{-34}\\,\\text{m}$", "$1.6575 \\times 10^{-34}\\,\\text{m}$", "$6.63 \\times 10^{-30}\\,\\text{m}$"],
    correctAnswer: 0,
    explanation: "The de Broglie wavelength is given by $\\lambda = \\frac{h}{mv}$. Substituting the values: $\\lambda = \\frac{6.63 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}}{(1\\,\\text{kg}) \\times (1\\,\\text{m/s})} = 6.63 \\times 10^{-34}\\,\\text{m}$. Option A is correct."
  }
};

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

for (const [id, q] of Object.entries(genuineRepairs)) {
  testKatex(q.question, `${id} question`);
  q.options.forEach((opt, idx) => testKatex(opt, `${id} option ${idx}`));
  testKatex(q.explanation, `${id} explanation`);
}

console.log('Dual Nature genuine repairs validated with ZERO KaTeX errors!');

module.exports = genuineRepairs;
