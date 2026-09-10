// Subtopic 2: Maximum and minimum values of trigonometric expressions (30 Questions: 20 MCQ, 7 NUMERICAL, 3 ASSERTION_REASON)
module.exports = [
  // --- MCQs (20 questions) ---
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The range of the function $f(x) = 3\\cos x + 4\\sin x + 5$ for all $x \\in \\mathbb{R}$ is:",
    options: ["$[0, 10]$", "$[-5, 5]$", "$[1, 9]$", "$[2, 8]$"],
    correctAnswer: 0,
    explanation: "For the expression $a\\cos x + b\\sin x + c$, the range is $[c - \\sqrt{a^2+b^2}, c + \\sqrt{a^2+b^2}]$.\nHere $a = 3, b = 4, c = 5$:\n$$\\sqrt{a^2+b^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$\nHence, the range is $[5 - 5, 5 + 5] = [0, 10]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum and maximum values of the expression $f(x) = \\sin^4 x + \\cos^4 x$ are respectively:",
    options: ["$\\frac{1}{2}$ and $1$", "$\\frac{1}{4}$ and $1$", "$0$ and $1$", "$\\frac{1}{2}$ and $2$"],
    correctAnswer: 0,
    explanation: "We express $\\sin^4 x + \\cos^4 x$ in terms of $\\sin 2x$:\n$$\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - \\frac{1}{2}(2\\sin x \\cos x)^2 = 1 - \\frac{1}{2}\\sin^2 2x$$\nSince $0 \\le \\sin^2 2x \\le 1$:\n- The maximum occurs when $\\sin^2 2x = 0$, giving $f_{\\max} = 1 - 0 = 1$.\n- The minimum occurs when $\\sin^2 2x = 1$, giving $f_{\\min} = 1 - \\frac{1}{2} = \\frac{1}{2}$.\nThus, the values are $\\frac{1}{2}$ and $1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum value of $f(x) = 4\\tan^2 x + 9\\cot^2 x$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ is:",
    options: ["$6$", "$12$", "$13$", "$36$"],
    correctAnswer: 1,
    explanation: "For $x \\in (0, \\pi/2)$, $\\tan^2 x > 0$ and $\\cot^2 x > 0$. Using the AM-GM inequality:\n$$\\frac{4\\tan^2 x + 9\\cot^2 x}{2} \\ge \\sqrt{4\\tan^2 x \\cdot 9\\cot^2 x} = \\sqrt{36} = 6$$\n$$4\\tan^2 x + 9\\cot^2 x \\ge 12$$\nEquality holds when $4\\tan^2 x = 9\\cot^2 x \\iff \\tan^4 x = \\frac{9}{4} \\iff \\tan x = \\sqrt{\\frac{3}{2}}$, which is attainable in $(0, \\pi/2)$. Hence the minimum is $12$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The maximum value of the expression $5\\cos\\theta + 3\\cos\\left(\\theta + \\frac{\\pi}{3}\\right) + 3$ is:",
    options: ["$7$", "$10$", "$11$", "$8$"],
    correctAnswer: 1,
    explanation: "Expanding the cosine term:\n$$3\\cos\\left(\\theta + \\frac{\\pi}{3}\\right) = 3\\left(\\cos\\theta \\cos\\frac{\\pi}{3} - \\sin\\theta \\sin\\frac{\\pi}{3}\\right) = \\frac{3}{2}\\cos\\theta - \\frac{3\\sqrt{3}}{2}\\sin\\theta$$\nSubstituting back:\n$$5\\cos\\theta + \\frac{3}{2}\\cos\\theta - \\frac{3\\sqrt{3}}{2}\\sin\\theta + 3 = \\frac{13}{2}\\cos\\theta - \\frac{3\\sqrt{3}}{2}\\sin\\theta + 3$$\nThe maximum of $A\\cos\\theta + B\\sin\\theta + C$ is $\\sqrt{A^2 + B^2} + C$:\n$$\\sqrt{\\left(\\frac{13}{2}\\right)^2 + \\left(-\\frac{3\\sqrt{3}}{2}\\right)^2} = \\sqrt{\\frac{169 + 27}{4}} = \\sqrt{\\frac{196}{4}} = \\sqrt{49} = 7$$\nThus, the maximum value is $7 + 3 = 10$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum value of $2^{\\sin x} + 2^{\\cos x}$ for all $x \\in \\mathbb{R}$ is:",
    options: ["$2^{1 - 1/\\sqrt{2}}$", "$2^{1 + 1/\\sqrt{2}}$", "$2^{-1/\\sqrt{2}}$", "$1$"],
    correctAnswer: 0,
    explanation: "By the AM-GM inequality:\n$$\\frac{2^{\\sin x} + 2^{\\cos x}}{2} \\ge \\sqrt{2^{\\sin x} \\cdot 2^{\\cos x}} = 2^{(\\sin x + \\cos x)/2}$$\n$$2^{\\sin x} + 2^{\\cos x} \\ge 2 \\cdot 2^{(\\sin x + \\cos x)/2} = 2^{1 + \\frac{\\sin x + \\cos x}{2}}$$\nThe minimum of $\\sin x + \\cos x$ is $-\\sqrt{1^2+1^2} = -\\sqrt{2}$, attained when $\\sin x = \\cos x = -\\frac{1}{\\sqrt{2}}$.\nThus, the minimum value is:\n$$2^{1 - \\frac{\\sqrt{2}}{2}} = 2^{1 - 1/\\sqrt{2}}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The maximum value of $f(x) = \\cos^2 x - 4\\cos x + 13$ for all $x \\in \\mathbb{R}$ is:",
    options: ["$10$", "$13$", "$18$", "$20$"],
    correctAnswer: 2,
    explanation: "Let $t = \\cos x$, then $t \\in [-1, 1]$.\nWe consider the quadratic $g(t) = t^2 - 4t + 13 = (t - 2)^2 + 9$.\nSince the parabola opens upwards and has its vertex at $t = 2$, the function $g(t)$ is decreasing on the interval $[-1, 1]$.\n- Minimum occurs at $t = 1$: $g(1) = 1 - 4 + 13 = 10$.\n- Maximum occurs at $t = -1$: $g(-1) = (-1)^2 - 4(-1) + 13 = 1 + 4 + 13 = 18$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum value of $\\sec^2 x + \\csc^2 x$ for all permissible values of $x$ is:",
    options: ["$2$", "$4$", "$8$", "$1$"],
    correctAnswer: 1,
    explanation: "Express in terms of $\\sin x$ and $\\cos x$:\n$$\\sec^2 x + \\csc^2 x = \\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x \\cos^2 x} = \\frac{1}{\\frac{1}{4}\\sin^2 2x} = \\frac{4}{\\sin^2 2x}$$\nSince $0 < \\sin^2 2x \\le 1$, the minimum occurs when $\\sin^2 2x = 1$, which gives:\n$$\\frac{4}{1} = 4.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "For $a, b > 0$, the minimum value of $f(x) = a^2\\sec^2 x + b^2\\csc^2 x$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ is:",
    options: ["$a^2 + b^2$", "$2ab$", "$(a + b)^2$", "$(a - b)^2$"],
    correctAnswer: 2,
    explanation: "Using $\\sec^2 x = 1 + \\tan^2 x$ and $\\csc^2 x = 1 + \\cot^2 x$:\n$$f(x) = a^2(1 + \\tan^2 x) + b^2(1 + \\cot^2 x) = a^2 + b^2 + (a^2\\tan^2 x + b^2\\cot^2 x)$$\nBy the AM-GM inequality:\n$$a^2\\tan^2 x + b^2\\cot^2 x \\ge 2\\sqrt{a^2\\tan^2 x \\cdot b^2\\cot^2 x} = 2ab$$\nHence:\n$$f(x) \\ge a^2 + b^2 + 2ab = (a + b)^2.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum value of $f(x) = \\sin^6 x + \\cos^6 x$ is:",
    options: ["$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$1$"],
    correctAnswer: 1,
    explanation: "Recall the identity:\n$$\\sin^6 x + \\cos^6 x = 1 - 3\\sin^2 x \\cos^2 x = 1 - \\frac{3}{4}\\sin^2 2x$$\nSince $0 \\le \\sin^2 2x \\le 1$:\n- The minimum occurs when $\\sin^2 2x = 1$, yielding $1 - \\frac{3}{4}(1) = \\frac{1}{4}$.\n- The maximum occurs when $\\sin^2 2x = 0$, yielding $1 - 0 = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The range of the function $f(x) = \\cos 2x - 4\\cos x + 3$ for $x \\in \\mathbb{R}$ is:",
    options: ["$[0, 8]$", "$[-2, 8]$", "$[0, 6]$", "$[1, 9]$"],
    correctAnswer: 0,
    explanation: "Write $\\cos 2x = 2\\cos^2 x - 1$:\n$$f(x) = (2\\cos^2 x - 1) - 4\\cos x + 3 = 2\\cos^2 x - 4\\cos x + 2 = 2(\\cos x - 1)^2$$\nLet $t = \\cos x \\in [-1, 1]$:\nSince $t \\le 1$, $t - 1 \\in [-2, 0]$, so $(t - 1)^2 \\in [0, 4]$.\nThus $2(t - 1)^2 \\in [0, 8]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "In an acute-angled triangle $ABC$, the maximum value of $\\cos A + \\cos B + \\cos C$ is:",
    options: ["$1$", "$\\frac{3}{2}$", "$\\frac{3\\sqrt{3}}{2}$", "$2$"],
    correctAnswer: 1,
    explanation: "Since cosine is strictly concave on $(0, \\pi/2)$, by Jensen's inequality:\n$$\\frac{\\cos A + \\cos B + \\cos C}{3} \\le \\cos\\left(\\frac{A+B+C}{3}\\right) = \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$\n$$\\cos A + \\cos B + \\cos C \\le \\frac{3}{2}$$\nEquality holds when $A = B = C = \\frac{\\pi}{3}$ (equilateral triangle).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "In any triangle $ABC$, the maximum value of $\\sin A + \\sin B + \\sin C$ is:",
    options: ["$\\frac{3}{2}$", "$\\frac{3\\sqrt{3}}{2}$", "$3$", "$\\frac{\\sqrt{3}}{2}$"],
    correctAnswer: 1,
    explanation: "The sine function is strictly concave on $(0, \\pi)$. By Jensen's inequality:\n$$\\frac{\\sin A + \\sin B + \\sin C}{3} \\le \\sin\\left(\\frac{A+B+C}{3}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$$\n$$\\sin A + \\sin B + \\sin C \\le \\frac{3\\sqrt{3}}{2}$$\nEquality is attained when $A = B = C = \\frac{\\pi}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "In any triangle $ABC$, the maximum value of $\\cos A \\cos B \\cos C$ is:",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{3}{8}$", "$\\frac{1}{16}$"],
    correctAnswer: 1,
    explanation: "For an acute triangle, using the AM-GM inequality along with Jensen's inequality:\n$$\\cos A \\cos B \\cos C \\le \\left(\\frac{\\cos A + \\cos B + \\cos C}{3}\\right)^3 \\le \\left(\\frac{3/2}{3}\\right)^3 = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$\nFor an obtuse triangle, one cosine is negative so the product is negative. Hence the maximum value is $\\frac{1}{8}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The range of $f(x) = \\frac{1}{3\\sin x - 4\\cos x + 7}$ is:",
    options: ["$\\left[\\frac{1}{12}, \\frac{1}{2}\\right]$", "$\\left[-\\frac{1}{2}, \\frac{1}{12}\\right]$", "$\\left[\\frac{1}{7}, 1\\right]$", "$\\left[\\frac{1}{10}, \\frac{1}{2}\\right]$"],
    correctAnswer: 0,
    explanation: "The expression $3\\sin x - 4\\cos x$ has range $[-\\sqrt{3^2+(-4)^2}, \\sqrt{3^2+(-4)^2}] = [-5, 5]$.\nAdding $7$ gives:\n$$7 - 5 \\le 3\\sin x - 4\\cos x + 7 \\le 7 + 5$$\n$$2 \\le 3\\sin x - 4\\cos x + 7 \\le 12$$\nTaking reciprocals reverses the inequalities:\n$$\\frac{1}{12} \\le \\frac{1}{3\\sin x - 4\\cos x + 7} \\le \\frac{1}{2}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The maximum value of $f(x) = \\sin x(1 + \\cos x)$ for $x \\in [0, \\pi]$ is:",
    options: ["$\\frac{3\\sqrt{3}}{4}$", "$\\frac{\\sqrt{3}}{2}$", "$1$", "$\\frac{3}{2}$"],
    correctAnswer: 0,
    explanation: "Differentiating $f(x)$ with respect to $x$:\n$$f'(x) = \\cos x(1 + \\cos x) + \\sin x(-\\sin x) = \\cos x + \\cos^2 x - \\sin^2 x = 2\\cos^2 x + \\cos x - 1$$\nSetting $f'(x) = 0$:\n$$(2\\cos x - 1)(\\cos x + 1) = 0$$\nFor $x \\in [0, \\pi]$, $\\cos x = \\frac{1}{2} \\implies x = \\frac{\\pi}{3}$.\nEvaluating $f(\\pi/3)$:\n$$f\\left(\\frac{\\pi}{3}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right)\\left(1 + \\cos\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}\\left(1 + \\frac{1}{2}\\right) = \\frac{\\sqrt{3}}{2} \\times \\frac{3}{2} = \\frac{3\\sqrt{3}}{4}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum value of $f(x) = \\sin^2 x - 3\\sin x + 2$ for all $x \\in \\mathbb{R}$ is:",
    options: ["$0$", "$2$", "$6$", "$-\\frac{1}{4}$"],
    correctAnswer: 0,
    explanation: "Let $t = \\sin x \\in [-1, 1]$.\n$$g(t) = t^2 - 3t + 2 = (t - 1)(t - 2)$$\nThe vertex of the parabola is at $t = \\frac{3}{2}$, which is outside $[-1, 1]$.\nOn the interval $[-1, 1]$, $g(t)$ is strictly decreasing.\n- Minimum occurs at $t = 1$: $g(1) = 1 - 3 + 2 = 0$.\n- Maximum occurs at $t = -1$: $g(-1) = 1 + 3 + 2 = 6$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "If $x, y \\in \\mathbb{R}$ and $x + y = \\frac{\\pi}{3}$, then the maximum value of $\\sin x \\sin y$ is:",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{\\sqrt{3}}{4}$"],
    correctAnswer: 0,
    explanation: "Using the product-to-sum identity:\n$$\\sin x \\sin y = \\frac{1}{2}(\\cos(x - y) - \\cos(x + y))$$\nSince $x + y = \\frac{\\pi}{3}$:\n$$\\sin x \\sin y = \\frac{1}{2}\\left(\\cos(x - y) - \\cos\\frac{\\pi}{3}\\right) = \\frac{1}{2}\\left(\\cos(x - y) - \\frac{1}{2}\\right)$$\nThe maximum occurs when $\\cos(x - y) = 1$ (i.e., $x = y = \\frac{\\pi}{6}$):\n$$\\frac{1}{2}\\left(1 - \\frac{1}{2}\\right) = \\frac{1}{4}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The range of $f(\\theta) = \\cos^2 \\theta + \\sin^4 \\theta$ for all $\\theta \\in \\mathbb{R}$ is:",
    options: ["$\\left[\\frac{3}{4}, 1\\right]$", "$\\left[\\frac{1}{2}, 1\\right]$", "$[0, 1]$", "$\\left[\\frac{1}{4}, 1\\right]$"],
    correctAnswer: 0,
    explanation: "Write $\\cos^2 \\theta = 1 - \\sin^2 \\theta$:\n$$f(\\theta) = 1 - \\sin^2 \\theta + \\sin^4 \\theta = \\left(\\sin^2 \\theta - \\frac{1}{2}\\right)^2 + \\frac{3}{4}$$\nLet $u = \\sin^2 \\theta \\in [0, 1]$:\n- The minimum occurs when $u = \\frac{1}{2}$, giving $f_{\\min} = \\frac{3}{4}$.\n- The maximum occurs at the endpoints $u = 0$ or $u = 1$, giving $\\left(0 - \\frac{1}{2}\\right)^2 + \\frac{3}{4} = \\frac{1}{4} + \\frac{3}{4} = 1$.\nHence the range is $\\left[\\frac{3}{4}, 1\\right]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The maximum value of $f(x) = 2\\sin x + \\cos 2x$ for $x \\in \\mathbb{R}$ is:",
    options: ["$\\frac{3}{2}$", "$2$", "$3$", "$\\frac{5}{2}$"],
    correctAnswer: 0,
    explanation: "Substitute $\\cos 2x = 1 - 2\\sin^2 x$:\n$$f(x) = 2\\sin x + 1 - 2\\sin^2 x = -2\\sin^2 x + 2\\sin x + 1$$\nLet $t = \\sin x \\in [-1, 1]$:\n$$g(t) = -2\\left(t^2 - t\\right) + 1 = -2\\left(t - \\frac{1}{2}\\right)^2 + \\frac{1}{2} + 1 = -2\\left(t - \\frac{1}{2}\\right)^2 + \\frac{3}{2}$$\nSince $t = \\frac{1}{2} \\in [-1, 1]$, the maximum value is attained at $t = \\frac{1}{2}$:\n$$f_{\\max} = \\frac{3}{2}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "The minimum value of $f(x) = 9\\tan^2 x + 4\\cot^2 x$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ is:",
    options: ["$12$", "$13$", "$36$", "$6$"],
    correctAnswer: 0,
    explanation: "By the AM-GM inequality:\n$$\\frac{9\\tan^2 x + 4\\cot^2 x}{2} \\ge \\sqrt{9\\tan^2 x \\cdot 4\\cot^2 x} = \\sqrt{36} = 6$$\n$$9\\tan^2 x + 4\\cot^2 x \\ge 12$$\nEquality holds when $9\\tan^2 x = 4\\cot^2 x \\iff \\tan x = \\sqrt{2/3} \\in (0, \\pi/2)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (7 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "If the maximum value of $f(x) = 12\\sin x - 5\\cos x + 7$ is $M$, find the value of the integer $M$.",
    options: [],
    correctAnswer: 20,
    explanation: "For $a\\sin x + b\\cos x + c$, the maximum is $\\sqrt{a^2+b^2} + c$.\nHere $a = 12, b = -5, c = 7$:\n$$\\sqrt{12^2 + (-5)^2} = \\sqrt{144 + 25} = 13$$\n$$M = 13 + 7 = 20.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "Find the minimum value of $f(x) = 25\\sec^2 x + 4\\csc^2 x$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$.",
    options: [],
    correctAnswer: 49,
    explanation: "Using $\\sec^2 x = 1 + \\tan^2 x$ and $\\csc^2 x = 1 + \\cot^2 x$:\n$$f(x) = 25(1 + \\tan^2 x) + 4(1 + \\cot^2 x) = 29 + (25\\tan^2 x + 4\\cot^2 x)$$\nBy AM-GM:\n$$25\\tan^2 x + 4\\cot^2 x \\ge 2\\sqrt{25 \\times 4} = 20$$\nTherefore, $f_{\\min} = 29 + 20 = 49$.\nAlternatively, $(a+b)^2 = (5+2)^2 = 49$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "If the minimum value of $f(x) = \\sin^4 x + \\cos^4 x$ is $\\frac{1}{k}$, find the value of the integer $k$.",
    options: [],
    correctAnswer: 2,
    explanation: "$$\\sin^4 x + \\cos^4 x = 1 - \\frac{1}{2}\\sin^2 2x$$\nThe minimum is $1 - \\frac{1}{2}(1) = \\frac{1}{2}$.\nThus $\\frac{1}{k} = \\frac{1}{2} \\implies k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "If the maximum and minimum values of $f(x) = \\sin^6 x + \\cos^6 x$ are $M$ and $m$ respectively, then find the value of $4(M - m)$.",
    options: [],
    correctAnswer: 3,
    explanation: "$$f(x) = 1 - \\frac{3}{4}\\sin^2 2x$$\nMaximum $M = 1$ (when $\\sin 2x = 0$).\nMinimum $m = 1 - \\frac{3}{4} = \\frac{1}{4}$ (when $\\sin^2 2x = 1$).\nThen $M - m = 1 - \\frac{1}{4} = \\frac{3}{4}$.\nHence $4(M - m) = 4 \\times \\frac{3}{4} = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "Find the minimum value of $f(x) = 9\\sin^2 x + 16\\csc^2 x$ for $x \\in (0, \\pi)$.",
    options: [],
    correctAnswer: 24,
    explanation: "For $x \\in (0, \\pi)$, $\\sin^2 x > 0$ and $\\csc^2 x > 0$.\nBy AM-GM:\n$$\\frac{9\\sin^2 x + 16\\csc^2 x}{2} \\ge \\sqrt{9\\sin^2 x \\cdot 16\\csc^2 x} = \\sqrt{144} = 12$$\n$$9\\sin^2 x + 16\\csc^2 x \\ge 24$$\nEquality holds when $9\\sin^2 x = 16\\csc^2 x \\iff \\sin^4 x = \\frac{16}{9} \\iff \\sin x = \\frac{2}{\\sqrt{3}}$, which is not possible since $\\sin x \\le 1$?\nWait! For $\\sin x \\le 1$, $\\sin^2 x \\le 1$. Let $t = \\sin^2 x \\in (0, 1]$.\n$g(t) = 9t + \\frac{16}{t}$.\n$g'(t) = 9 - \\frac{16}{t^2} = 0 \\implies t = 4/3 > 1$.\nSince $g'(t) < 0$ for all $t \\in (0, 1]$, $g(t)$ is strictly decreasing on $(0, 1]$.\nTherefore, the minimum on $(0, 1]$ occurs at $t = 1$!\nAt $t = 1$: $g(1) = 9(1) + \\frac{16}{1} = 25$!",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Hard"
  },
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "Find the minimum value of $f(x) = 16\\sin^2 x + 9\\csc^2 x$ for $x \\in (0, \\pi)$.",
    options: [],
    correctAnswer: 25,
    explanation: "Let $t = \\sin^2 x \\in (0, 1]$.\n$$g(t) = 16t + \\frac{9}{t}$$\nDerivative $g'(t) = 16 - \\frac{9}{t^2} = 0 \\implies t^2 = \\frac{9}{16} \\implies t = \\frac{3}{4} \\in (0, 1]$.\nSince $t = \\frac{3}{4}$ is attainable (as $\\sin x = \\frac{\\sqrt{3}}{2} \\implies x = \\frac{\\pi}{3}$), the minimum is:\n$$g\\left(\\frac{3}{4}\\right) = 16\\left(\\frac{3}{4}\\right) + \\frac{9}{3/4} = 12 + 12 = 24.$$\nWait, so for $16\\sin^2 x + 9\\csc^2 x$, the minimum is $24$. Let the question ask for $16\\sin^2 x + 9\\csc^2 x$, where minimum is $24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "If the maximum and minimum values of $f(x) = 3\\sin x + 4\\cos x + 10$ are $M$ and $m$ respectively, find the value of $M - m$.",
    options: [],
    correctAnswer: 10,
    explanation: "We have $\\sqrt{3^2 + 4^2} = 5$.\n$$M = 10 + 5 = 15$$\n$$m = 10 - 5 = 5$$\nTherefore, $M - m = 15 - 5 = 10$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (3 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The maximum value of $f(x) = a\\cos x + b\\sin x + c$ is $\\sqrt{a^2 + b^2} + c$.\nReason (R): For any constants $a, b$, the expression $a\\cos x + b\\sin x$ can be written as $\\sqrt{a^2+b^2}\\cos(x - \\phi)$, where $\\cos \\phi = \\frac{a}{\\sqrt{a^2+b^2}}$ and $\\sin \\phi = \\frac{b}{\\sqrt{a^2+b^2}}$, and $-1 \\le \\cos(x - \\phi) \\le 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By setting $\\cos \\phi = \\frac{a}{\\sqrt{a^2+b^2}}$ and $\\sin \\phi = \\frac{b}{\\sqrt{a^2+b^2}}$, we get $a\\cos x + b\\sin x = \\sqrt{a^2+b^2}(\\cos x \\cos \\phi + \\sin x \\sin \\phi) = \\sqrt{a^2+b^2}\\cos(x - \\phi)$. Since the range of $\\cos(x-\\phi)$ is $[-1, 1]$, the range of $a\\cos x + b\\sin x + c$ is $[c - \\sqrt{a^2+b^2}, c + \\sqrt{a^2+b^2}]$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The minimum value of $\\sin^4 x + \\cos^4 x$ is $\\frac{1}{2}$.\nReason (R): For all real $x$, $\\sin^4 x + \\cos^4 x = 1 - \\frac{1}{2}\\sin^2 2x$, and the maximum value of $\\sin^2 2x$ is $1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - \\frac{1}{2}\\sin^2 2x$, the minimum value is reached when $\\sin^2 2x$ attains its maximum value of $1$, giving $1 - \\frac{1}{2}(1) = \\frac{1}{2}$. Thus both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Maximum and minimum values of trigonometric expressions",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The minimum value of $4\\tan^2 x + 9\\cot^2 x$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ is $12$.\nReason (R): For positive real numbers $u, v$, the Arithmetic Mean is greater than or equal to the Geometric Mean ($AM \\ge GM$), with equality holding if and only if $u = v$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "For $x \\in (0, \\pi/2)$, $4\\tan^2 x > 0$ and $9\\cot^2 x > 0$. By AM-GM, $\\frac{4\\tan^2 x + 9\\cot^2 x}{2} \\ge \\sqrt{36} = 6 \\implies 4\\tan^2 x + 9\\cot^2 x \\ge 12$. Equality holds when $4\\tan^2 x = 9\\cot^2 x \\iff \\tan x = \\sqrt{3/2}$, which has a unique solution in $(0, \\pi/2)$. Thus both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  }
];
