// Subtopic 3: Trigonometric equations and general solutions (30 Questions: 20 MCQ, 7 NUMERICAL, 3 ASSERTION_REASON)
module.exports = [
  // --- MCQs (20 questions) ---
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\sin x + \\cos x = 1$ in the interval $[0, 2\\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 2,
    explanation: "Divide both sides by $\\sqrt{2}$:\n$$\\frac{1}{\\sqrt{2}}\\sin x + \\frac{1}{\\sqrt{2}}\\cos x = \\frac{1}{\\sqrt{2}} \\implies \\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}$$\nFor $x \\in [0, 2\\pi]$, we have $x + \\frac{\\pi}{4} \\in \\left[\\frac{\\pi}{4}, \\frac{9\\pi}{4}\\right]$.\nThe values for which sine equals $\\frac{1}{\\sqrt{2}}$ in this interval are:\n$$x + \\frac{\\pi}{4} = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{9\\pi}{4}$$\nThis gives:\n$$x = 0, \\frac{\\pi}{2}, 2\\pi$$\nHence there are exactly $3$ solutions in $[0, 2\\pi]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $2\\sin^2 x + 3\\sin x + 1 = 0$ in $[0, 2\\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 2,
    explanation: "Factor the quadratic in $\\sin x$:\n$$(2\\sin x + 1)(\\sin x + 1) = 0$$\nThis gives:\n1. $\\sin x = -\\frac{1}{2} \\implies x = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$ (2 solutions in $[0, 2\\pi]$)\n2. $\\sin x = -1 \\implies x = \\frac{3\\pi}{2}$ (1 solution in $[0, 2\\pi]$)\nTotal number of solutions $= 2 + 1 = 3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The sum of all values of $x \\in [0, 2\\pi]$ satisfying the equation $\\sin^2 x - 2\\cos x + \\frac{1}{4} = 0$ is:",
    options: ["$\\pi$", "$2\\pi$", "$3\\pi$", "$4\\pi$"],
    correctAnswer: 1,
    explanation: "Write $\\sin^2 x = 1 - \\cos^2 x$:\n$$(1 - \\cos^2 x) - 2\\cos x + \\frac{1}{4} = 0 \\implies \\cos^2 x + 2\\cos x - \\frac{5}{4} = 0$$\nMultiply by $4$:\n$$4\\cos^2 x + 8\\cos x - 5 = 0 \\implies (2\\cos x - 1)(2\\cos x + 5) = 0$$\nSince $-1 \\le \\cos x \\le 1$, $2\\cos x + 5 = 0$ has no real solution.\nThus $2\\cos x - 1 = 0 \\implies \\cos x = \\frac{1}{2}$.\nIn $[0, 2\\pi]$, the solutions are $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$.\nSum of solutions $= \\frac{\\pi}{3} + \\frac{5\\pi}{3} = \\frac{6\\pi}{3} = 2\\pi$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of real solutions of the equation $3\\sin^2 x - 7\\sin x + 2 = 0$ in the interval $[0, 2\\pi]$ is:",
    options: ["$0$", "$2$", "$4$", "$1$"],
    correctAnswer: 1,
    explanation: "Factor the quadratic:\n$$(3\\sin x - 1)(\\sin x - 2) = 0$$\nSince $\\sin x \\le 1$, $\\sin x - 2 = 0$ yields no real solution.\nThus $\\sin x = \\frac{1}{3}$.\nSince $0 < \\frac{1}{3} < 1$, there is exactly one solution in the first quadrant $\\left(0, \\frac{\\pi}{2}\\right)$ and one in the second quadrant $\\left(\\frac{\\pi}{2}, \\pi\\right)$.\nHence there are $2$ solutions in $[0, 2\\pi]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The general solution of the equation $\\tan 3x = 1$ is given by ($n \\in \\mathbb{Z}$):",
    options: ["$x = \\frac{n\\pi}{3} + \\frac{\\pi}{12}$", "$x = n\\pi + \\frac{\\pi}{4}$", "$x = \\frac{n\\pi}{3} + \\frac{\\pi}{4}$", "$x = \\frac{2n\\pi}{3} + \\frac{\\pi}{12}$"],
    correctAnswer: 0,
    explanation: "The equation $\\tan \\theta = \\tan \\alpha$ has general solution $\\theta = n\\pi + \\alpha$.\nHere $\\tan 3x = \\tan\\left(\\frac{\\pi}{4}\\right)$:\n$$3x = n\\pi + \\frac{\\pi}{4} \\implies x = \\frac{n\\pi}{3} + \\frac{\\pi}{12}, \\quad n \\in \\mathbb{Z}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\tan x + \\sec x = 2\\cos x$ in the interval $[0, 2\\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "Express in terms of $\\sin x$ and $\\cos x$:\n$$\\frac{\\sin x + 1}{\\cos x} = 2\\cos x$$\nFor $\\cos x \\ne 0$:\n$$1 + \\sin x = 2\\cos^2 x = 2(1 - \\sin^2 x)$$\n$$2\\sin^2 x + \\sin x - 1 = 0 \\implies (2\\sin x - 1)(\\sin x + 1) = 0$$\n1. $\\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. Here $\\cos x = \\pm \\frac{\\sqrt{3}}{2} \\ne 0$, so both are valid.\n2. $\\sin x = -1 \\implies x = \\frac{3\\pi}{2}$. But at $x = \\frac{3\\pi}{2}$, $\\cos x = 0$, which makes $\\tan x$ and $\\sec x$ undefined!\nTherefore, $x = \\frac{3\\pi}{2}$ is an extraneous root.\nOnly $2$ valid solutions exist: $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\cos x = |\\sin x|$ in the interval $[-\\pi, \\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "Since $|\\sin x| \\ge 0$, we must have $\\cos x \\ge 0$, which requires $x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.\n- For $x \\in \\left[0, \\frac{\\pi}{2}\\right]$: $|\\sin x| = \\sin x \\implies \\cos x = \\sin x \\implies \\tan x = 1 \\implies x = \\frac{\\pi}{4}$.\n- For $x \\in \\left[-\\frac{\\pi}{2}, 0\\right]$: $|\\sin x| = -\\sin x \\implies \\cos x = -\\sin x \\implies \\tan x = -1 \\implies x = -\\frac{\\pi}{4}$.\nThus, there are exactly $2$ solutions: $x = \\pm \\frac{\\pi}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\sin 2x = \\cos 3x$ in the open interval $(0, \\pi)$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 2,
    explanation: "Write $\\cos 3x = \\sin\\left(\\frac{\\pi}{2} - 3x\\right)$:\n$$\\sin 2x - \\sin\\left(\\frac{\\pi}{2} - 3x\\right) = 0$$\n$$2\\cos\\left(\\frac{2x + \\frac{\\pi}{2} - 3x}{2}\\right) \\sin\\left(\\frac{2x - \\left(\\frac{\\pi}{2} - 3x\\right)}{2}\\right) = 0$$\n$$2\\cos\\left(\\frac{\\pi}{4} - \\frac{x}{2}\\right) \\sin\\left(\\frac{5x}{2} - \\frac{\\pi}{4}\\right) = 0$$\n1. $\\cos\\left(\\frac{\\pi}{4} - \\frac{x}{2}\\right) = 0 \\implies \\frac{\\pi}{4} - \\frac{x}{2} = \\frac{\\pi}{2} + k\\pi \\implies x = -\\frac{\\pi}{2} - 2k\\pi$. None lie in $(0, \\pi)$.\n2. $\\sin\\left(\\frac{5x}{2} - \\frac{\\pi}{4}\\right) = 0 \\implies \\frac{5x}{2} - \\frac{\\pi}{4} = k\\pi \\implies \\frac{5x}{2} = k\\pi + \\frac{\\pi}{4} \\implies x = \\frac{(4k+1)\\pi}{10}$.\nFor $k = 0: x = \\frac{\\pi}{10} \\in (0, \\pi)$.\nFor $k = 1: x = \\frac{5\\pi}{10} = \\frac{\\pi}{2} \\in (0, \\pi)$.\nFor $k = 2: x = \\frac{9\\pi}{10} \\in (0, \\pi)$.\nHence there are exactly $3$ solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of real solutions of the equation $e^{\\sin x} - e^{-\\sin x} = 4$ is:",
    options: ["$0$", "$1$", "$2$", "Infinitely many"],
    correctAnswer: 0,
    explanation: "Let $u = e^{\\sin x} > 0$. The equation becomes:\n$$u - \\frac{1}{u} = 4 \\implies u^2 - 4u - 1 = 0$$\nSolving for $u$ using the quadratic formula:\n$$u = \\frac{4 \\pm \\sqrt{16 + 4}}{2} = 2 \\pm \\sqrt{5}$$\nSince $u > 0$, we have $u = 2 + \\sqrt{5}$.\nTaking natural logarithms:\n$$\\sin x = \\ln(2 + \\sqrt{5})$$\nSince $\\sqrt{5} > 2.236$, $2 + \\sqrt{5} > 4.236 > e \\approx 2.718$.\nTherefore, $\\ln(2 + \\sqrt{5}) > \\ln e = 1$.\nHowever, for all real $x$, $-1 \\le \\sin x \\le 1$. Thus $\\sin x = \\ln(2 + \\sqrt{5})$ has no real solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\sin^4 x - \\cos^4 x = 1$ in $[0, 2\\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "Factor the left-hand side:\n$$\\sin^4 x - \\cos^4 x = (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x) = (\\sin^2 x - \\cos^2 x)(1) = -\\cos 2x$$\nSetting $-\\cos 2x = 1 \\implies \\cos 2x = -1$.\nFor $x \\in [0, 2\\pi]$, $2x \\in [0, 4\\pi]$:\n$$2x = \\pi, 3\\pi \\implies x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$$\nThus there are $2$ solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $2\\sin^2 x - 5\\sin x + 2 = 0$ in the interval $[0, 4\\pi]$ is:",
    options: ["$2$", "$4$", "$6$", "$8$"],
    correctAnswer: 1,
    explanation: "Factor the quadratic:\n$$(2\\sin x - 1)(\\sin x - 2) = 0$$\nSince $\\sin x \\le 1$, $\\sin x - 2 = 0$ has no solution.\nThus $\\sin x = \\frac{1}{2}$.\nIn each interval of length $2\\pi$, $\\sin x = \\frac{1}{2}$ has $2$ solutions ($x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$).\nOver $[0, 4\\pi]$ (two complete periods), there are $2 \\times 2 = 4$ solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The general solution of the equation $\\sin 2x + \\cos x = 0$ is ($n \\in \\mathbb{Z}$):",
    options: [
      "$x = (2n+1)\\frac{\\pi}{2}$ or $x = n\\pi + (-1)^n\\left(-\\frac{\\pi}{6}\\right)$",
      "$x = n\\pi$ or $x = 2n\\pi \\pm \\frac{\\pi}{3}$",
      "$x = (2n+1)\\frac{\\pi}{4}$ or $x = n\\pi + \\frac{\\pi}{6}$",
      "$x = 2n\\pi \\pm \\frac{\\pi}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Using $\\sin 2x = 2\\sin x \\cos x$:\n$$2\\sin x \\cos x + \\cos x = 0 \\implies \\cos x(2\\sin x + 1) = 0$$\n1. $\\cos x = 0 \\implies x = (2n+1)\\frac{\\pi}{2}$\n2. $2\\sin x + 1 = 0 \\implies \\sin x = -\\frac{1}{2} = \\sin\\left(-\\frac{\\pi}{6}\\right) \\implies x = n\\pi + (-1)^n\\left(-\\frac{\\pi}{6}\\right)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "If $\\sin x + \\cos x = \\sqrt{2}\\cos x$, then $\\cos x - \\sin x$ is equal to:",
    options: ["$\\sqrt{2}\\sin x$", "$-\\sqrt{2}\\sin x$", "$\\sqrt{2}\\cos x$", "$0$"],
    correctAnswer: 0,
    explanation: "From $\\sin x + \\cos x = \\sqrt{2}\\cos x$, we have:\n$$\\sin x = (\\sqrt{2} - 1)\\cos x$$\nMultiply both sides by $\\sqrt{2} + 1$:\n$$(\\sqrt{2} + 1)\\sin x = (\\sqrt{2} + 1)(\\sqrt{2} - 1)\\cos x = (2 - 1)\\cos x = \\cos x$$\n$$\\sqrt{2}\\sin x + \\sin x = \\cos x \\implies \\cos x - \\sin x = \\sqrt{2}\\sin x.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\sqrt{3}\\sin x + \\cos x = 2$ in the interval $[0, 4\\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "Divide both sides by $2$:\n$$\\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x = 1 \\implies \\cos\\left(x - \\frac{\\pi}{3}\\right) = 1$$\nThis implies $x - \\frac{\\pi}{3} = 2k\\pi \\implies x = 2k\\pi + \\frac{\\pi}{3}$.\nIn the interval $[0, 4\\pi]$:\n- For $k = 0$: $x = \\frac{\\pi}{3} \\in [0, 4\\pi]$\n- For $k = 1$: $x = 2\\pi + \\frac{\\pi}{3} = \\frac{7\\pi}{3} \\in [0, 4\\pi]$\n- For $k = 2$: $x = 4\\pi + \\frac{\\pi}{3} > 4\\pi$\nHence there are exactly $2$ solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of $\\sin x = \\frac{x}{10}$ in $\\mathbb{R}$ is:",
    options: ["$3$", "$5$", "$7$", "$9$"],
    correctAnswer: 2,
    explanation: "The graphs of $y = \\sin x$ and $y = \\frac{x}{10}$ intersect at real roots.\nSince $|\\sin x| \\le 1$, any intersection must satisfy $\\left|\\frac{x}{10}\\right| \\le 1 \\implies -10 \\le x \\le 10$.\n- At $x = 0$, both curves pass through the origin (1 solution).\n- For $x > 0$:\n  - In $(0, \\pi)$, $\\sin x > 0$ and reaches $1$, while $\\frac{x}{10} < \\frac{\\pi}{10} \\approx 0.314$, so they intersect once.\n  - In $(\\pi, 2\\pi)$, $\\sin x < 0$ while $\\frac{x}{10} > 0$, no intersection.\n  - In $(2\\pi, 3\\pi)$, $\\sin x$ peaks at $1$ at $x = 2.5\\pi \\approx 7.85$. At that point, $\\frac{x}{10} \\approx 0.785 < 1$. The line intersects the sine arch twice.\n  - For $x > 3\\pi \\approx 9.42$, the sine curve goes negative, while at $x = 10$, $\\frac{x}{10} = 1$, so no more intersections.\n  Total positive solutions $= 1 + 2 = 3$.\n- By odd symmetry, there are also $3$ negative solutions in $[-10, 0)$.\nTotal number of solutions $= 3 + 1 + 3 = 7$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The general solution of the equation $\\sin^2 x = \\sin^2 \\alpha$ is ($n \\in \\mathbb{Z}$):",
    options: ["$x = n\\pi \\pm \\alpha$", "$x = 2n\\pi \\pm \\alpha$", "$x = n\\pi + (-1)^n\\alpha$", "$x = (2n+1)\\pi \\pm \\alpha$"],
    correctAnswer: 0,
    explanation: "Using $\\cos 2\\theta = 1 - 2\\sin^2 \\theta$:\n$$\\sin^2 x = \\sin^2 \\alpha \\iff 1 - 2\\sin^2 x = 1 - 2\\sin^2 \\alpha \\iff \\cos 2x = \\cos 2\\alpha$$\nThe general solution of $\\cos 2x = \\cos 2\\alpha$ is:\n$$2x = 2n\\pi \\pm 2\\alpha \\implies x = n\\pi \\pm \\alpha, \\quad n \\in \\mathbb{Z}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $2\\cos^2 x + 3\\sin x = 0$ in the interval $[0, 2\\pi]$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "Substitute $\\cos^2 x = 1 - \\sin^2 x$:\n$$2(1 - \\sin^2 x) + 3\\sin x = 0 \\implies 2\\sin^2 x - 3\\sin x - 2 = 0$$\n$$(2\\sin x + 1)(\\sin x - 2) = 0$$\nSince $\\sin x \\le 1$, $\\sin x - 2 = 0$ has no solution.\nThus $\\sin x = -\\frac{1}{2}$.\nIn $[0, 2\\pi]$, the solutions are $x = \\frac{7\\pi}{6}$ and $x = \\frac{11\\pi}{6}$.\nThere are $2$ solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The general solution of $\\tan x + \\cot x = 2$ is ($n \\in \\mathbb{Z}$):",
    options: ["$x = n\\pi + \\frac{\\pi}{4}$", "$x = 2n\\pi + \\frac{\\pi}{4}$", "$x = n\\pi \\pm \\frac{\\pi}{4}$", "$x = \\frac{n\\pi}{2} + \\frac{\\pi}{4}$"],
    correctAnswer: 0,
    explanation: "Since $\\cot x = \\frac{1}{\\tan x}$:\n$$\\tan x + \\frac{1}{\\tan x} = 2 \\implies \\tan^2 x - 2\\tan x + 1 = 0 \\implies (\\tan x - 1)^2 = 0$$\nThus $\\tan x = 1 = \\tan\\left(\\frac{\\pi}{4}\\right)$.\nThe general solution is $x = n\\pi + \\frac{\\pi}{4}, n \\in \\mathbb{Z}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $\\sin 5x \\cos 3x = \\sin 6x \\cos 2x$ in the interval $[0, 2\\pi]$ is:",
    options: ["$5$", "$7$", "$9$", "$11$"],
    correctAnswer: 2,
    explanation: "Multiply both sides by $2$ and use product-to-sum identities:\n$$2\\sin 5x \\cos 3x = 2\\sin 6x \\cos 2x$$\n$$\\sin 8x + \\sin 2x = \\sin 8x + \\sin 4x$$\n$$\\sin 4x - \\sin 2x = 0$$\n$$2\\cos 3x \\sin x = 0$$\n1. $\\sin x = 0 \\implies x = 0, \\pi, 2\\pi$ ($3$ solutions in $[0, 2\\pi]$).\n2. $\\cos 3x = 0 \\implies 3x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\frac{7\\pi}{2}, \\frac{9\\pi}{2}, \\frac{11\\pi}{2}$ for $x \\in [0, 2\\pi]$.\nThis yields $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}$ ($6$ solutions).\nSince roots of $\\sin x = 0$ never satisfy $\\cos 3x = 0$ (at $x = k\\pi$, $\\cos 3k\\pi = \\pm 1 \\ne 0$), all roots are distinct.\nTotal number of solutions $= 3 + 6 = 9$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Trigonometric equations and general solutions",
    question: "The number of solutions of the equation $|\\cot x| = \\cot x + \\frac{1}{\\sin x}$ in the interval $[0, 2\\pi]$ is:",
    options: ["$1$", "$0$", "$2$", "$3$"],
    correctAnswer: 0,
    explanation: "For $x \\in [0, 2\\pi]$, $\\sin x \\ne 0$ so $x \\ne 0, \\pi, 2\\pi$.\n- Case 1: $\\cot x \\ge 0$: $|\\cot x| = \\cot x \\implies \\cot x = \\cot x + \\frac{1}{\\sin x} \\implies \\frac{1}{\\sin x} = 0$, no solution.\n- Case 2: $\\cot x < 0$: $|\\cot x| = -\\cot x \\implies -\\cot x = \\cot x + \\frac{1}{\\sin x} \\implies 2\\cot x + \\frac{1}{\\sin x} = 0$.\n$$\\frac{2\\cos x + 1}{\\sin x} = 0 \\implies \\cos x = -\\frac{1}{2}$$\nIn $[0, 2\\pi]$, $\\cos x = -\\frac{1}{2}$ gives $x = \\frac{2\\pi}{3}$ and $x = \\frac{4\\pi}{3}$.\n- At $x = \\frac{2\\pi}{3}$ (Quadrant II): $\\cot x = -\\frac{1}{\\sqrt{3}} < 0$, which satisfies the condition. Indeed, LHS $= \\frac{1}{\\sqrt{3}}$, RHS $= -\\frac{1}{\\sqrt{3}} + \\frac{2}{\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$.\n- At $x = \\frac{4\\pi}{3}$ (Quadrant III): $\\cot x > 0$, which violates Case 2.\nThus, there is exactly $1$ solution ($x = \\frac{2\\pi}{3}$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },

  // --- NUMERICAL Questions (7 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "Find the number of solutions of the equation $\\sin x + \\cos x = 1$ in the closed interval $[0, 2\\pi]$.",
    options: [],
    correctAnswer: 3,
    explanation: "$$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = 1 \\implies \\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}$$\nIn $[0, 2\\pi]$, $x + \\frac{\\pi}{4} \\in [\\pi/4, 9\\pi/4]$.\nSolutions: $x + \\pi/4 = \\pi/4, 3\\pi/4, 9\\pi/4 \\implies x = 0, \\pi/2, 2\\pi$.\nTotal number of solutions $= 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "If the sum of all solutions of the equation $\\cos x = \\frac{1}{2}$ in $[0, 2\\pi]$ is $k\\pi$, find the value of the integer $k$.",
    options: [],
    correctAnswer: 2,
    explanation: "In $[0, 2\\pi]$, the solutions of $\\cos x = \\frac{1}{2}$ are $x = \\frac{\\pi}{3}$ and $x = \\frac{5\\pi}{3}$.\nSum $= \\frac{\\pi}{3} + \\frac{5\\pi}{3} = 2\\pi$.\nHence $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "Find the number of solutions of the equation $\\tan x + \\sec x = 2\\cos x$ in the interval $[0, 2\\pi]$.",
    options: [],
    correctAnswer: 2,
    explanation: "$$\\frac{1 + \\sin x}{\\cos x} = 2\\cos x \\implies 1 + \\sin x = 2(1 - \\sin^2 x)$$\n$$2\\sin^2 x + \\sin x - 1 = 0 \\implies (2\\sin x - 1)(\\sin x + 1) = 0$$\n- $\\sin x = 1/2 \\implies x = \\pi/6, 5\\pi/6$ (both valid)\n- $\\sin x = -1 \\implies x = 3\\pi/2$ (invalid since $\\cos(3\\pi/2) = 0$ makes $\\tan x, \\sec x$ undefined)\nThus there are $2$ solutions.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "Find the number of solutions of the equation $2\\cos^2 x + 3\\sin x = 0$ in the interval $[0, 2\\pi]$.",
    options: [],
    correctAnswer: 2,
    explanation: "$$2(1 - \\sin^2 x) + 3\\sin x = 0 \\implies (2\\sin x + 1)(\\sin x - 2) = 0$$\n$$\\sin x = -1/2 \\implies x = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$$\nThus there are $2$ solutions.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "Find the number of solutions of the equation $\\sin 3x + \\cos 2x = 0$ in the open interval $\\left(0, \\frac{\\pi}{2}\\right)$.",
    options: [],
    correctAnswer: 1,
    explanation: "$$\\sin 3x = -\\cos 2x = \\sin\\left(2x - \\frac{\\pi}{2}\\right)$$\nFor $x \\in (0, \\pi/2)$:\n$$3x + 2x - \\frac{\\pi}{2} = \\pi \\implies 5x = \\frac{3\\pi}{2} \\implies x = \\frac{3\\pi}{10}$$\nSince $\\frac{3\\pi}{10} = 54^{\\circ} \\in (0, 90^{\\circ})$, this is a valid solution.\nNo other solutions lie in $(0, \\pi/2)$. Thus there is exactly $1$ solution.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "Find the number of integral values of $k$ for which the equation $7\\cos x + 5\\sin x = 2k + 1$ has at least one real solution.",
    options: [],
    correctAnswer: 8,
    explanation: "The range of $7\\cos x + 5\\sin x$ is $[-\\sqrt{7^2+5^2}, \\sqrt{7^2+5^2}] = [-\\sqrt{74}, \\sqrt{74}] \\approx [-8.60, 8.60]$.\nTherefore:\n$$-8.60 \\le 2k + 1 \\le 8.60 \\implies -9.60 \\le 2k \\le 7.60 \\implies -4.80 \\le k \\le 3.80$$\nThe integer values of $k$ are $\\{-4, -3, -2, -1, 0, 1, 2, 3\\}$.\nTotal number of integers $= 8$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Trigonometric equations and general solutions",
    question: "Find the number of real solutions of the equation $\\cos x = x^2$ in $\\mathbb{R}$.",
    options: [],
    correctAnswer: 2,
    explanation: "Both functions $y = \\cos x$ and $y = x^2$ are even functions.\nFor $x > 1$, $x^2 > 1 \\ge \\cos x$, so no solutions exist for $|x| > 1$.\nFor $x = 0$, $\\cos 0 = 1 > 0 = 0^2$.\nAt $x = 1$, $\\cos 1 \\approx 0.54 < 1 = 1^2$.\nBy the Intermediate Value Theorem, there is exactly one solution in $(0, 1)$.\nBy symmetry, there is exactly one solution in $(-1, 0)$.\nAt $x = 0$, $1 \\ne 0$.\nThus, there are exactly $2$ real solutions.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (3 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Trigonometric equations and general solutions",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equation $\\tan x + \\sec x = 2\\cos x$ has exactly $2$ solutions in the interval $[0, 2\\pi]$.\nReason (R): The algebraic reduction leads to $\\sin x = \\frac{1}{2}$ and $\\sin x = -1$, but the root corresponding to $\\sin x = -1$ gives $x = \\frac{3\\pi}{2}$, where $\\tan x$ and $\\sec x$ are undefined.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Multiplying by $\\cos x$ introduces the extraneous root where $\\cos x = 0$. Since $\\sin x = -1 \\implies x = 3\\pi/2$, $\\cos(3\\pi/2) = 0$, which makes $\\tan x$ and $\\sec x$ undefined. Hence only $\\sin x = 1/2$ yields valid solutions ($x = \\pi/6, 5\\pi/6$). Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Trigonometric equations and general solutions",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of real solutions of the equation $\\sin x = \\frac{x}{10}$ is $7$.\nReason (R): Since $-1 \\le \\sin x \\le 1$, any real solution must satisfy $|x| \\le 10$, and within $[-10, 10]$ the curve $y = \\sin x$ intersects the line $y = \\frac{x}{10}$ once at the origin, three times for $x > 0$, and three times for $x < 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "For $|x| > 10$, $|x/10| > 1 \\ge |\\sin x|$, so no solutions can exist outside $[-10, 10]$. Within $[-10, 10]$, graphing shows 1 intersection at $x = 0$, 3 positive intersections (one in $(0, \\pi)$ and two in $(2\\pi, 3\\pi)$ since the peak $1 > 0.785$), and 3 negative intersections by odd symmetry. Hence total solutions is $1 + 3 + 3 = 7$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Trigonometric equations and general solutions",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The general solution of $\\sin^2 x = \\sin^2 \\alpha$ is $x = n\\pi \\pm \\alpha$, where $n \\in \\mathbb{Z}$.\nReason (R): The equation $\\sin^2 x = \\sin^2 \\alpha$ can be rewritten as $\\frac{1 - \\cos 2x}{2} = \\frac{1 - \\cos 2\\alpha}{2} \\iff \\cos 2x = \\cos 2\\alpha$, which yields $2x = 2n\\pi \\pm 2\\alpha \\implies x = n\\pi \\pm \\alpha$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Using the half-angle identity $\\sin^2 \\theta = \\frac{1 - \\cos 2\\theta}{2}$, the equation becomes $\\cos 2x = \\cos 2\\alpha$. The standard general solution for $\\cos 2x = \\cos 2\\alpha$ is $2x = 2n\\pi \\pm 2\\alpha$, which simplifies directly to $x = n\\pi \\pm \\alpha$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  }
];
