const katex = require('katex');

const genuineRepairs = {
  "6a98f80c3b9f7331a3cca527": {
    question: "A block of mass $m = 10.0\\,\\text{kg}$ rests on a smooth horizontal surface and is connected by a light inextensible string passing over a frictionless pulley to a block of mass $M = 5.0\\,\\text{kg}$ hanging vertically. Taking $g = 10\\,\\text{m/s}^2$, what is the tension in the string?",
    options: [
      "$16.67\\,\\text{N}$",
      "$25.00\\,\\text{N}$",
      "$33.33\\,\\text{N}$",
      "$41.67\\,\\text{N}$"
    ],
    correctAnswer: 2,
    explanation: "For the hanging mass $M$: $M g - T = M a$. For mass $m$ on the smooth horizontal surface: $T = m a$. Adding the equations: $(M + m) a = M g \\implies a = \\frac{M g}{M + m} = \\frac{5.0 \\times 10}{5.0 + 10.0} = \\frac{50}{15} = \\frac{10}{3}\\,\\text{m/s}^2$. The tension in the string is $T = m a = 10.0 \\times \\frac{10}{3} = \\frac{100}{3} \\approx 33.33\\,\\text{N}$. Hence Option C is correct."
  },
  "6a98f80c3b9f7331a3cca522": {
    question: "A system consists of two masses, $m_1 = 3.0\\,\\text{kg}$ and $m_2 = 7.0\\,\\text{kg}$, connected by a light inextensible string over a light frictionless pulley. Taking $g = 9.8\\,\\text{m/s}^2$, what is the ratio of the tension in the string to the average weight of the two masses?",
    options: [
      "$1.00$",
      "$0.70$",
      "$0.84$",
      "$0.91$"
    ],
    correctAnswer: 2,
    explanation: "The tension in Atwood's machine is $T = \\frac{2 m_1 m_2 g}{m_1 + m_2} = \\frac{2 \\times 3.0 \\times 7.0 \\times g}{3.0 + 7.0} = \\frac{42}{10} g = 4.2 g$. The average weight of the two masses is $W_{\\text{avg}} = \\frac{(m_1 + m_2)g}{2} = \\frac{10.0 g}{2} = 5.0 g$. The ratio is $\\frac{T}{W_{\\text{avg}}} = \\frac{4.2 g}{5.0 g} = 0.84$. Hence Option C is correct."
  },
  "6a98f80c3b9f7331a3cca526": {
    question: "In an Atwood's machine, two blocks of masses $m_1 = 4.0\\,\\text{kg}$ and $m_2 = 6.0\\,\\text{kg}$ are connected by a light string passing over a frictionless massless pulley. Taking $g = 9.8\\,\\text{m/s}^2$, what is the acceleration of the system?",
    options: [
      "$1.96\\,\\text{m/s}^2$",
      "$2.45\\,\\text{m/s}^2$",
      "$3.92\\,\\text{m/s}^2$",
      "$4.90\\,\\text{m/s}^2$"
    ],
    correctAnswer: 0,
    explanation: "The acceleration of the Atwood machine is given by $a = \\frac{(m_2 - m_1) g}{m_1 + m_2} = \\frac{(6.0 - 4.0) \\times 9.8}{4.0 + 6.0} = \\frac{2.0 \\times 9.8}{10.0} = 1.96\\,\\text{m/s}^2$. Hence Option A is correct."
  },
  "6a98f80c3b9f7331a3cca529": {
    question: "Two blocks of masses $m_1 = 6.0\\,\\text{kg}$ and $m_2 = 4.0\\,\\text{kg}$ are placed on a smooth horizontal surface and connected by a light string. A horizontal force $F = 40.0\\,\\text{N}$ is applied to block $m_2$ pulling the system away from $m_1$. What is the tension in the string connecting the two blocks?",
    options: [
      "$16.0\\,\\text{N}$",
      "$24.0\\,\\text{N}$",
      "$30.0\\,\\text{N}$",
      "$36.0\\,\\text{N}$"
    ],
    correctAnswer: 1,
    explanation: "The common acceleration of the two connected blocks is $a = \\frac{F}{m_1 + m_2} = \\frac{40.0}{6.0 + 4.0} = \\frac{40.0}{10.0} = 4.0\\,\\text{m/s}^2$. The tension $T$ in the string is the sole horizontal force accelerating block $m_1$: $T = m_1 a = 6.0\\,\\text{kg} \\times 4.0\\,\\text{m/s}^2 = 24.0\\,\\text{N}$. Hence Option B is correct."
  },
  "6a98e34c910bb37b0e557ef6": {
    question: "A $0.1\\,\\text{kg}$ bullet is fired with a velocity of $400\\,\\text{m/s}$ into a stationary $5.0\\,\\text{kg}$ wooden block and embeds itself in it. What is the velocity of the block immediately after impact?",
    options: [
      "$8.0\\,\\text{m/s}$",
      "$4.0\\,\\text{m/s}$",
      "$2.0\\,\\text{m/s}$",
      "$7.8\\,\\text{m/s}$"
    ],
    correctAnswer: 3,
    explanation: "By conservation of linear momentum: $m v = (m + M) V \\implies V = \\frac{0.1 \\times 400}{0.1 + 5.0} = \\frac{40}{5.1} \\approx 7.84\\,\\text{m/s}$. Hence Option D is correct."
  },
  "6a98e339910bb37b0e557eba": {
    question: "A $2.0\\,\\text{kg}$ object is moving at $4.0\\,\\text{m/s}$. A force of $8.0\\,\\text{N}$ is applied in the direction of motion for $2.0\\,\\text{seconds}$. What is the final velocity of the object?",
    options: [
      "$4.0\\,\\text{m/s}$",
      "$6.0\\,\\text{m/s}$",
      "$8.0\\,\\text{m/s}$",
      "$12.0\\,\\text{m/s}$"
    ],
    correctAnswer: 3,
    explanation: "Acceleration produced is $a = \\frac{F}{m} = \\frac{8.0}{2.0} = 4.0\\,\\text{m/s}^2$. The final velocity after $t = 2.0\\,\\text{s}$ is $v = u + a t = 4.0 + (4.0 \\times 2.0) = 4.0 + 8.0 = 12.0\\,\\text{m/s}$. Hence Option D is correct."
  },
  "6a98e34e910bb37b0e557f01": {
    question: "A projectile of mass $0.1\\,\\text{kg}$ is fired with an initial velocity of $200\\,\\text{m/s}$ by a gun barrel. If the average force exerted on the projectile during firing is $400\\,\\text{N}$, over what distance does this force act?",
    options: [
      "$10\\,\\text{m}$",
      "$5\\,\\text{m}$",
      "$20\\,\\text{m}$",
      "$2.5\\,\\text{m}$"
    ],
    correctAnswer: 1,
    explanation: "By work-energy theorem: $W = F s = \\frac{1}{2} m v^2 \\implies 400 \\times s = \\frac{1}{2} (0.1) (200)^2 = 0.05 \\times 40000 = 2000\\,\\text{J} \\implies s = \\frac{2000}{400} = 5.0\\,\\text{m}$. Hence Option B is correct."
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

console.log('Laws of Motion genuine repairs validated with ZERO KaTeX errors!');

module.exports = genuineRepairs;
