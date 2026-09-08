const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Conservative forces and potential energy";
const chapter = "Work, Energy, and Power";
const subject = "Physics";

// 4 MCQ questions
const mcqData = [
  {
    q: "A particle moves in the xy-plane under a conservative force field with potential energy $U(x, y) = 3x^2 y - 4y^3$ (in Joules, with $x, y$ in meters). The force $\\vec{F}$ acting on the particle at $(1\\text{ m}, 1\\text{ m})$ is:",
    opts: [
      "$-6\\hat{i} + 9\\hat{j}\\text{ N}$",
      "$6\\hat{i} - 9\\hat{j}\\text{ N}$",
      "$-6\\hat{i} - 9\\hat{j}\\text{ N}$",
      "$6\\hat{i} + 9\\hat{j}\\text{ N}$"
    ],
    ans: 0,
    exp: "Force is given by $\\vec{F} = -\\vec{\\nabla} U = -\\left(\\frac{\\partial U}{\\partial x}\\hat{i} + \\frac{\\partial U}{\\partial y}\\hat{j}\\right)$. Here $\\frac{\\partial U}{\\partial x} = 6xy$ and $\\frac{\\partial U}{\\partial y} = 3x^2 - 12y^2$. At $(1, 1)$, $\\frac{\\partial U}{\\partial x} = 6$ and $\\frac{\\partial U}{\\partial y} = 3 - 12 = -9$. Therefore $\\vec{F} = -(6\\hat{i} - 9\\hat{j}) = -6\\hat{i} + 9\\hat{j}\\text{ N}$."
  },
  {
    q: "The potential energy of a particle as a function of position $x$ is given by $U(x) = x^4 - 8x^2$ Joules. The points of stable equilibrium are located at:",
    opts: [
      "$x = 0$",
      "$x = \\pm 2\\text{ m}$",
      "$x = \\pm 4\\text{ m}$",
      "$x = \\pm 1\\text{ m}$"
    ],
    ans: 1,
    exp: "For equilibrium, $\\frac{dU}{dx} = 4x^3 - 16x = 4x(x^2 - 4) = 0 \\implies x = 0, \\pm 2\\text{ m}$. The second derivative is $\\frac{d^2 U}{dx^2} = 12x^2 - 16$. At $x = 0$, $\\frac{d^2 U}{dx^2} = -16 < 0$ (unstable). At $x = \\pm 2\\text{ m}$, $\\frac{d^2 U}{dx^2} = 12(4) - 16 = 32 > 0$ (stable). Thus stable equilibrium points are $x = \\pm 2\\text{ m}$."
  },
  {
    q: "Which of the following force fields is non-conservative?",
    opts: [
      "$\\vec{F} = 2x\\hat{i} + 2y\\hat{j}$",
      "$\\vec{F} = y\\hat{i} + x\\hat{j}$",
      "$\\vec{F} = -y\\hat{i} + x\\hat{j}$",
      "$\\vec{F} = 3x^2\\hat{i} + 3y^2\\hat{j}$"
    ],
    ans: 2,
    exp: "A force is conservative if $\\vec{\\nabla} \\times \\vec{F} = \\left(\\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y}\\right)\\hat{k} = 0$. For $\\vec{F} = -y\\hat{i} + x\\hat{j}$, $\\frac{\\partial(x)}{\\partial x} - \\frac{\\partial(-y)}{\\partial y} = 1 - (-1) = 2 \\ne 0$. Hence it is non-conservative."
  },
  {
    q: "A particle of mass $m$ is located in a potential field $U(r) = \\frac{a}{r^2} - \\frac{b}{r}$ where $a, b > 0$. The binding energy of the particle (the work required to remove it to infinity from its equilibrium state) is:",
    opts: [
      "$\\frac{b^2}{4a}$",
      "$\\frac{b^2}{2a}$",
      "$\\frac{b^2}{8a}$",
      "$\\frac{a^2}{b}$"
    ],
    ans: 0,
    exp: "Equilibrium occurs where $\\frac{dU}{dr} = -\\frac{2a}{r^3} + \\frac{b}{r^2} = 0 \\implies r_0 = \\frac{2a}{b}$. The potential energy at equilibrium is $U(r_0) = \\frac{a}{(2a/b)^2} - \\frac{b}{(2a/b)} = \\frac{b^2}{4a} - \\frac{b^2}{2a} = -\\frac{b^2}{4a}$. Binding energy is $0 - U(r_0) = \\frac{b^2}{4a}$."
  }
];

// 7 Numerical questions
const numData = [
  {
    q: "The potential energy of a particle moving along the x-axis is given by $U(x) = 2x^3 - 9x^2 + 12x$ Joules. The position $x$ in meters where the particle is in stable equilibrium is:",
    ans: 2,
    exp: "Equilibrium condition: $\\frac{dU}{dx} = 6x^2 - 18x + 12 = 0 \\implies x^2 - 3x + 2 = 0 \\implies (x - 1)(x - 2) = 0$. The second derivative is $\\frac{d^2 U}{dx^2} = 12x - 18$. At $x = 1$, $\\frac{d^2 U}{dx^2} = -6 < 0$ (unstable). At $x = 2$, $\\frac{d^2 U}{dx^2} = +6 > 0$ (stable). Thus $x = 2\\text{ m}$."
  },
  {
    q: "A force field is given by $\\vec{F} = (4x\\hat{i} + 6y\\hat{j})\\text{ N}$. The work done in moving a particle from $(0, 0)$ to $(3\\text{ m}, 2\\text{ m})$ in Joules is:",
    ans: 30,
    exp: "Since $\\vec{F}$ is conservative, $W = \\int_0^3 4x dx + \\int_0^2 6y dy = [2x^2]_0^3 + [3y^2]_0^2 = 2(9) + 3(4) = 18 + 12 = 30\\text{ J}$."
  },
  {
    q: "A particle is subjected to a conservative force $F(x) = -kx + ax^3$, with $k = 20\\text{ N/m}$ and $a = 5\\text{ N/m}^3$. Aside from $x = 0$, the positive value of $x$ in meters at which the particle experiences zero force is:",
    ans: 2,
    exp: "Setting $F(x) = 0 \\implies x(-20 + 5x^2) = 0 \\implies 5x^2 = 20 \\implies x^2 = 4 \\implies x = 2\\text{ m}$."
  },
  {
    q: "The potential energy of a system is given by $U(x, y) = 4x^2 + 9y^2$ Joules. The magnitude of force on the particle at $(3\\text{ m}, 2\\text{ m})$ in Newtons is:",
    ans: 43.27, // Fx = -8x = -24. Fy = -18y = -36. sqrt(24^2 + 36^2) = sqrt(576 + 1296) = sqrt(1872) (not integer).
    // Let's make: U(x, y) = 3x^2 + 4y^2? Fx = -6x, Fy = -8y. At (4, 3): Fx = -24, Fy = -24.
    // What if U = 3x + 4y?
    // What if U(x, y) = 2x^2 + 2y^2? At (3, 4): Fx = -4(3) = -12, Fy = -4(4) = -16. F = sqrt(144 + 256) = sqrt(400) = 20 N!
    q: "The potential energy of a particle in the xy-plane is given by $U(x, y) = 2x^2 + 2y^2$ Joules. The magnitude of the conservative force acting on the particle at $(3\\text{ m}, 4\\text{ m})$ in Newtons is:",
    ans: 20,
    exp: "$\\vec{F} = -\\frac{\\partial U}{\\partial x}\\hat{i} - \\frac{\\partial U}{\\partial y}\\hat{j} = -4x\\hat{i} - 4y\\hat{j}$. At $(3, 4)$, $\\vec{F} = -12\\hat{i} - 16\\hat{j}\\text{ N}$. Magnitude is $F = \\sqrt{(-12)^2 + (-16)^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ N}$."
  },
  {
    q: "A particle moves in a conservative force field where $U(x) = 5x^2 - 20x + 15$ Joules. The position $x$ in meters where the force is zero is:",
    ans: 2,
    exp: "$F = -\\frac{dU}{dx} = -(10x - 20) = 20 - 10x$. Setting $F = 0 \\implies 10x = 20 \\implies x = 2\\text{ m}$."
  },
  {
    q: "For a central conservative force field where $U(r) = -\\frac{100}{r}$ Joules (with $r$ in meters), the magnitude of the force in Newtons at $r = 5\\text{ m}$ is:",
    ans: 4,
    exp: "$F(r) = -\\frac{dU}{dr} = -\\frac{d}{dr}\\left(-\\frac{100}{r}\\right) = -\\frac{100}{r^2}$. The magnitude of the force at $r = 5\\text{ m}$ is $F = \\frac{100}{5^2} = \\frac{100}{25} = 4\\text{ N}$."
  },
  {
    q: "A particle moves along the x-axis under the potential $U(x) = \\frac{x^4}{4} - 2x^2$ Joules. The depth of the potential well (the difference between $U(0)$ and the minimum potential energy) in Joules is:",
    ans: 4,
    exp: "At $x = 0$, $U(0) = 0\\text{ J}$. For minima: $\\frac{dU}{dx} = x^3 - 4x = x(x^2 - 4) = 0 \\implies x = \\pm 2\\text{ m}$. At $x = \\pm 2$, $U(\\pm 2) = \\frac{16}{4} - 2(4) = 4 - 8 = -4\\text{ J}$. The depth of the potential well is $0 - (-4) = 4\\text{ J}$."
  }
];

const part6Questions = [];

mcqData.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part6Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

numData.forEach(item => {
  validateMath(item.q);
  validateMath(item.exp);

  part6Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 6 generated: ${part6Questions.length} questions (MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_wep_part6.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part6Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
