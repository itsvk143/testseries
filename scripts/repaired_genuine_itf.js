// Repaired genuine questions from Question Bank for Inverse Trigonometric Functions
module.exports = {
  "6a98e991910bb37b0e558833": {
    question: "Find the principal value of $\\arccos\\left(\\frac{1}{2}\\right) + \\arcsin\\left(-\\frac{1}{2}\\right)$",
    options: [
      "$0$",
      "$\\frac{\\pi}{6}$",
      "$-\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{2}$"
    ],
    correctAnswer: 1,
    explanation: "The principal value of $\\arccos(1/2) = \\frac{\\pi}{3}$, and the principal value of $\\arcsin(-1/2) = -\\frac{\\pi}{6}$. Therefore, $\\arccos(1/2) + \\arcsin(-1/2) = \\frac{\\pi}{3} - \\frac{\\pi}{6} = \\frac{\\pi}{6}$."
  },
  "6a98ea2e910bb37b0e55886c": {
    question: "Find the value of $x$ if $\\arcsin(x) + \\arcsin(2x) = \\frac{\\pi}{2}$",
    options: [
      "$\\frac{1}{\\sqrt{5}}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{\\sqrt{2}}$"
    ],
    correctAnswer: 0,
    explanation: "We have $\\arcsin(2x) = \\frac{\\pi}{2} - \\arcsin(x) = \\arccos(x)$. Taking the cosine of both sides: $\\cos(\\arcsin 2x) = x \\implies \\sqrt{1 - 4x^2} = x$. Squaring both sides gives $1 - 4x^2 = x^2 \\implies 5x^2 = 1 \\implies x = \\frac{1}{\\sqrt{5}}$ (since $x > 0$)."
  },
  "6a98ea2e910bb37b0e558873": {
    question: "If $\\tan^{-1}(x) + \\tan^{-1}(y) = \\frac{\\pi}{4}$ and $x+y=1$, find $xy$.",
    options: [
      "$0$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\text{undefined}$"
    ],
    correctAnswer: 0,
    explanation: "Using the identity $\\tan^{-1}(x) + \\tan^{-1}(y) = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right) = \\frac{\\pi}{4}$. Taking the tangent of both sides: $\\frac{x+y}{1-xy} = \\tan\\left(\\frac{\\pi}{4}\\right) = 1 \\implies x+y = 1 - xy$. Given $x+y = 1$, we get $1 = 1 - xy \\implies xy = 0$."
  },
  "6a98ea2e910bb37b0e558870": {
    question: "Solve for $x$: $\\arcsin(x) - \\frac{\\pi}{6} = \\frac{\\pi}{3}$",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$",
      "$\\frac{1}{\\sqrt{2}}$"
    ],
    correctAnswer: 2,
    explanation: "We have $\\arcsin(x) = \\frac{\\pi}{3} + \\frac{\\pi}{6} = \\frac{3\\pi}{6} = \\frac{\\pi}{2}$. Taking the sine of both sides: $x = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$."
  },
  "6a98ea2e910bb37b0e558874": {
    question: "Solve for $x$: $\\sin^{-1}(x) + \\sin^{-1}(1-x) = \\cos^{-1}(x)$",
    options: [
      "$0, \\frac{1}{2}$",
      "$1, \\frac{1}{2}$",
      "$0, 1$",
      "$\\frac{1}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Rewrite as $\\sin^{-1}(1-x) = \\cos^{-1}(x) - \\sin^{-1}(x) = \\frac{\\pi}{2} - 2\\sin^{-1}(x)$. Taking sine of both sides: $1-x = \\sin\\left(\\frac{\\pi}{2} - 2\\sin^{-1}x\\right) = \\cos(2\\sin^{-1}x) = 1 - 2x^2$. Thus, $1 - x = 1 - 2x^2 \\implies 2x^2 - x = 0 \\implies x(2x - 1) = 0 \\implies x = 0$ or $x = 1/2$. Both solutions satisfy the original equation."
  },
  "6a98ea2e910bb37b0e55886f": {
    question: "Solve for $x$: $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$",
    options: [
      "$\\frac{1}{11}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{5}$",
      "$\\frac{1}{7}$"
    ],
    correctAnswer: 1,
    explanation: "Using the formula: $\\tan^{-1}\\left(\\frac{2x+3x}{1-6x^2}\\right) = \\frac{\\pi}{4} \\implies \\frac{5x}{1-6x^2} = 1 \\implies 6x^2 + 5x - 1 = 0 \\implies (6x-1)(x+1) = 0$. Since $x > 0$ for the sum to equal $\\pi/4$, we discard $x = -1$ and obtain $x = \\frac{1}{6}$."
  },
  "6a98e991910bb37b0e558836": {
    question: "What is the principal value of $\\arcsin\\left(\\cos\\left(\\frac{2\\pi}{3}\\right)\\right)$?",
    options: [
      "$-\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{6}$",
      "$-\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{3}$"
    ],
    correctAnswer: 0,
    explanation: "First evaluate $\\cos(2\\pi/3) = -\\frac{1}{2}$. The principal value of $\\arcsin(-1/2)$ is $-\\frac{\\pi}{6}$ since $-\\frac{\\pi}{6} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$."
  },
  "6a98e991910bb37b0e558834": {
    question: "What is the principal value of $\\arctan(1) - \\operatorname{arccot}(-1)$?",
    options: [
      "$-\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{2}$",
      "$-\\frac{\\pi}{4}$",
      "$\\frac{3\\pi}{4}$"
    ],
    correctAnswer: 0,
    explanation: "The principal value of $\\arctan(1) = \\frac{\\pi}{4}$. The principal value of $\\operatorname{arccot}(-1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Their difference is $\\frac{\\pi}{4} - \\frac{3\\pi}{4} = -\\frac{2\\pi}{4} = -\\frac{\\pi}{2}$."
  },
  "6a98ea2c910bb37b0e55886a": {
    question: "What is the value of $\\cot^{-1}\\left(\\cot\\left(\\frac{2\\pi}{3}\\right)\\right)$?",
    options: [
      "$\\frac{2\\pi}{3}$",
      "$\\frac{\\pi}{3}$",
      "$-\\frac{\\pi}{3}$",
      "$\\pi$"
    ],
    correctAnswer: 0,
    explanation: "The principal range of $\\cot^{-1}(x)$ is $(0, \\pi)$. Since $\\frac{2\\pi}{3} \\in (0, \\pi)$, $\\cot^{-1}\\left(\\cot\\left(\\frac{2\\pi}{3}\\right)\\right) = \\frac{2\\pi}{3}$."
  },
  "6a98ea2c910bb37b0e558861": {
    question: "What is the value of $\\sin^{-1}\\left(\\sin\\left(\\frac{7\\pi}{6}\\right)\\right)$?",
    options: [
      "$\\frac{7\\pi}{6}$",
      "$\\frac{\\pi}{6}$",
      "$-\\frac{\\pi}{6}$",
      "$\\frac{5\\pi}{6}$"
    ],
    correctAnswer: 2,
    explanation: "The principal range of $\\sin^{-1}(x)$ is $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. We rewrite $\\sin(7\\pi/6) = \\sin(\\pi + \\pi/6) = -\\sin(\\pi/6) = \\sin(-\\pi/6)$. Since $-\\frac{\\pi}{6} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\sin^{-1}\\left(\\sin\\left(\\frac{7\\pi}{6}\\right)\\right) = -\\frac{\\pi}{6}$."
  },
  "6a98ea2c910bb37b0e558863": {
    question: "Which of the following is NOT a property of $\\sin^{-1}(x)$?",
    options: [
      "Domain is $[-1, 1]$",
      "Range is $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$",
      "It is an odd function: $\\sin^{-1}(-x) = -\\sin^{-1}(x)$",
      "$\\sin^{-1}(-x) = \\pi - \\sin^{-1}(x)$ for all $x \\in [-1, 1]$"
    ],
    correctAnswer: 3,
    explanation: "The function $\\sin^{-1}(x)$ is an odd function satisfying $\\sin^{-1}(-x) = -\\sin^{-1}(x)$. The relation $f(-x) = \\pi - f(x)$ applies to $\\cos^{-1}(x), \\sec^{-1}(x)$, and $\\cot^{-1}(x)$, not $\\sin^{-1}(x)$. Hence, the fourth statement is false and is not a property of $\\sin^{-1}(x)$."
  }
};
