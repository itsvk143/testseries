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
  "6a98e3b9910bb37b0e557f44": {
    question: "A force of $50\\,\\text{N}$ acts on a lever at a distance of $0.5\\,\\text{m}$ from the pivot. If the angle between the force and the lever arm is $60^\\circ$, what is the torque?",
    options: ["$21.65\\,\\text{N}\\cdot\\text{m}$", "$25.00\\,\\text{N}\\cdot\\text{m}$", "$43.30\\,\\text{N}\\cdot\\text{m}$", "$50.00\\,\\text{N}\\cdot\\text{m}$"],
    correctAnswer: 0,
    explanation: "Torque is given by $\\tau = r F \\sin\\theta$. Given $r = 0.5\\,\\text{m}$, $F = 50\\,\\text{N}$, and $\\theta = 60^\\circ$: $\\tau = (0.5\\,\\text{m})(50\\,\\text{N})\\sin(60^\\circ) = 25 \\times \\frac{\\sqrt{3}}{2} = 25 \\times 0.866 = 21.65\\,\\text{N}\\cdot\\text{m}$."
  },
  "6a98e3b9910bb37b0e557f45": {
    question: "Two forces $F_1 = 10\\,\\text{N}$ and $F_2 = 25\\,\\text{N}$ are applied at the rim of a wheel of radius $0.3\\,\\text{m}$. Force $F_1$ is applied tangentially, and $F_2$ is applied at an angle of $30^\\circ$ to the radial direction. If both forces act to rotate the wheel counter-clockwise, what is the net torque?",
    options: ["$3.00\\,\\text{N}\\cdot\\text{m}$", "$3.75\\,\\text{N}\\cdot\\text{m}$", "$6.75\\,\\text{N}\\cdot\\text{m}$", "$7.50\\,\\text{N}\\cdot\\text{m}$"],
    correctAnswer: 2,
    explanation: "Torque due to $F_1$ is $\\tau_1 = F_1 r = 10 \\times 0.3 = 3.0\\,\\text{N}\\cdot\\text{m}$. Torque due to $F_2$ is $\\tau_2 = F_2 r \\sin(30^\\circ) = 25 \\times 0.3 \\times 0.5 = 3.75\\,\\text{N}\\cdot\\text{m}$. The net torque is $\\tau_{\\text{net}} = \\tau_1 + \\tau_2 = 3.0 + 3.75 = 6.75\\,\\text{N}\\cdot\\text{m}$."
  }
};

for (const [id, item] of Object.entries(repairs)) {
  testKatex(item.question, `${id} Question`);
  item.options.forEach((opt, idx) => testKatex(opt, `${id} Opt ${idx}`));
  testKatex(item.explanation, `${id} Explanation`);
}

console.log('Rotational Motion repairs validated with ZERO KaTeX errors!');
module.exports = repairs;
