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
  "6a98e407910bb37b0e557fd5": {
    question: "A wave has a frequency of $25\\,\\text{Hz}$ and an amplitude of $0.1\\,\\text{m}$. What is the maximum speed of a particle in the medium through which the wave is propagating?",
    options: ["$3.14\\,\\text{m/s}$", "$6.28\\,\\text{m/s}$", "$15.7\\,\\text{m/s}$", "$31.4\\,\\text{m/s}$"],
    correctAnswer: 2,
    explanation: "The maximum speed of a particle in a medium executing harmonic oscillation during wave propagation is $v_{\\max} = \\omega A = 2\\pi f A$. Substituting $f = 25\\,\\text{Hz}$ and $A = 0.1\\,\\text{m}$: $v_{\\max} = 2\\pi (25\\,\\text{Hz})(0.1\\,\\text{m}) = 5\\pi\\,\\text{m/s} \\approx 15.7\\,\\text{m/s}$."
  }
};

for (const [id, item] of Object.entries(repairs)) {
  testKatex(item.question, `${id} Question`);
  item.options.forEach((opt, idx) => testKatex(opt, `${id} Opt ${idx}`));
  testKatex(item.explanation, `${id} Explanation`);
}

console.log('Repairs validated with ZERO KaTeX errors!');
module.exports = repairs;
