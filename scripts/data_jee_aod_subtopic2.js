// scripts/data_jee_aod_subtopic2.js
// 30 authentic JEE Mains questions on 'Maxima and minima'
// Subtopic 2 for Application of Derivatives (Mathematics, Class 12)

module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The maximum value of the function $f(x) = \\sin x + \\cos x$ on $\\mathbb{R}$ is:",
    options: [
      "$\\sqrt{2}$",
      "$1$",
      "$2$",
      "$\\frac{1}{\\sqrt{2}}$"
    ],
    correctAnswer: "$\\sqrt{2}$",
    explanation: "We can write $\\sin x + \\cos x = \\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\sin x + \\frac{1}{\\sqrt{2}}\\cos x\\right) = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$. Since the maximum value of the sine function is $1$, the maximum value of $f(x)$ is $\\sqrt{2}(1) = \\sqrt{2}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The maximum value of the function $f(x) = \\left(\\frac{1}{x}\\right)^x$ for $x > 0$ occurs at $x = $",
    options: [
      "$\\frac{1}{e}$",
      "$e$",
      "$1$",
      "$\\sqrt{e}$"
    ],
    correctAnswer: "$\\frac{1}{e}$",
    explanation: "Let $y = x^{-x} \\implies \\ln y = -x \\ln x$. Differentiating: $\\frac{1}{y}y' = -(\\ln x + 1) = 0 \\implies \\ln x = -1 \\implies x = e^{-1} = \\frac{1}{e}$. Since $y'' < 0$ at $x = 1/e$, the maximum occurs at $x = \\frac{1}{e}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Find the absolute maximum value of the function $f(x) = 2x^3 - 15x^2 + 36x + 1$ on the closed interval $[1, 5]$.",
    options: [
      "$56$",
      "$29$",
      "$28$",
      "$30$"
    ],
    correctAnswer: "$56$",
    explanation: "Differentiating: $f'(x) = 6x^2 - 30x + 36 = 6(x - 2)(x - 3) = 0 \\implies x = 2, 3$. Evaluating at critical points and endpoints: $f(1) = 2 - 15 + 36 + 1 = 24$; $f(2) = 16 - 60 + 72 + 1 = 29$; $f(3) = 54 - 135 + 108 + 1 = 28$; $f(5) = 2(125) - 15(25) + 36(5) + 1 = 250 - 375 + 180 + 1 = 56$. The absolute maximum value is $56$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The local minimum value of $f(x) = x + \\frac{4}{x}$ for $x > 0$ is:",
    options: [
      "$4$",
      "$2$",
      "$0$",
      "$8$"
    ],
    correctAnswer: "$4$",
    explanation: "Differentiating: $f'(x) = 1 - \\frac{4}{x^2} = 0 \\implies x^2 = 4 \\implies x = 2$ (since $x > 0$). $f''(x) = \\frac{8}{x^3} > 0$ for $x > 0$, so $x = 2$ gives a local minimum. The local minimum value is $f(2) = 2 + \\frac{4}{2} = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The difference between the local maximum value and the local minimum value of the function $f(x) = x^3 - 3x + 2$ is:",
    options: [
      "$4$",
      "$2$",
      "$0$",
      "$6$"
    ],
    correctAnswer: "$4$",
    explanation: "Differentiating: $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1) = 0 \\implies x = \\pm 1$. At $x = -1$, $f''(-1) = 6(-1) = -6 < 0$ (local max), with $f(-1) = -1 + 3 + 2 = 4$. At $x = 1$, $f''(1) = 6 > 0$ (local min), with $f(1) = 1 - 3 + 2 = 0$. The difference is $4 - 0 = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The function $f(x) = x^4 - 62x^2 + ax + 9$ attains its maximum value on the interval $[0, 2]$ at $x = 1$. The value of $a$ is:",
    options: [
      "$120$",
      "$60$",
      "$-120$",
      "$52$"
    ],
    correctAnswer: "$120$",
    explanation: "Since $x = 1$ is an interior point of $[0, 2]$ where the maximum occurs, we must have $f'(1) = 0$. Differentiating: $f'(x) = 4x^3 - 124x + a$. At $x = 1$: $f'(1) = 4(1)^3 - 124(1) + a = 0 \\implies 4 - 124 + a = 0 \\implies a = 120$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The minimum value of $f(x) = 4e^{2x} + 9e^{-2x}$ for all $x \\in \\mathbb{R}$ is:",
    options: [
      "$12$",
      "$13$",
      "$6$",
      "$24$"
    ],
    correctAnswer: "$12$",
    explanation: "By the AM-GM inequality for positive quantities: $\\frac{4e^{2x} + 9e^{-2x}}{2} \\ge \\sqrt{4e^{2x} \\cdot 9e^{-2x}} = \\sqrt{36} = 6 \\implies 4e^{2x} + 9e^{-2x} \\ge 12$. Equality occurs when $4e^{2x} = 9e^{-2x} \\implies e^{4x} = 9/4 \\implies x = \\frac{1}{4}\\ln(9/4)$, which is real. Thus the minimum value is $12$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Let $f(x) = \\sin^4 x + \\cos^4 x$. The minimum value of $f(x)$ is:",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$1$",
      "$\\frac{3}{4}$"
    ],
    correctAnswer: "$\\frac{1}{2}$",
    explanation: "Rewriting $f(x)$: $f(x) = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - \\frac{1}{2}(2\\sin x \\cos x)^2 = 1 - \\frac{1}{2}\\sin^2(2x)$. The maximum of $\\sin^2(2x)$ is $1$, which makes the minimum value of $f(x) = 1 - \\frac{1}{2}(1) = \\frac{1}{2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "At what point in the interval $[0, 2\\pi]$ does the function $f(x) = \\sin 2x - x$ attain its maximum?",
    options: [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{5\\pi}{6}$",
      "$\\pi$"
    ],
    correctAnswer: "$\\frac{\\pi}{6}$",
    explanation: "Differentiating: $f'(x) = 2\\cos 2x - 1 = 0 \\implies \\cos 2x = \\frac{1}{2}$. In $[0, 2\\pi]$, $2x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\frac{7\\pi}{3}, \\frac{11\\pi}{3} \\implies x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$. Second derivative: $f''(x) = -4\\sin 2x$. At $x = \\pi/6$: $f''(\\pi/6) = -4\\sin(\\pi/3) = -2\\sqrt{3} < 0$, which gives a local maximum with value $f(\\pi/6) = \\frac{\\sqrt{3}}{2} - \\frac{\\pi}{6} \\approx 0.866 - 0.524 = 0.342 > 0$. At the endpoints $f(0) = 0$ and $f(2\\pi) = -2\\pi < 0$. Thus the absolute maximum is attained at $x = \\frac{\\pi}{6}$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The function $f(x) = x(x - 1)^2$ has:",
    options: [
      "A local maximum at $x = 1/3$ and a local minimum at $x = 1$",
      "A local minimum at $x = 1/3$ and a local maximum at $x = 1$",
      "Only a local maximum at $x = 1/3$",
      "Neither maximum nor minimum"
    ],
    correctAnswer: "A local maximum at $x = 1/3$ and a local minimum at $x = 1$",
    explanation: "Differentiating: $f'(x) = (x - 1)^2 + x \\cdot 2(x - 1) = (x - 1)[(x - 1) + 2x] = (x - 1)(3x - 1)$. Critical points are $x = 1/3$ and $x = 1$. The second derivative is $f''(x) = 6x - 4$. At $x = 1/3$, $f''(1/3) = 2 - 4 = -2 < 0$ (local max). At $x = 1$, $f''(1) = 6 - 4 = 2 > 0$ (local min).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason Questions
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = |x|$ has a local minimum at $x = 0$.\nReason (R): For all $x \\in \\mathbb{R}$, $f(x) \\ge f(0) = 0$, even though $f'(0)$ does not exist.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "By definition, a function has a local minimum at $c$ if $f(x) \\ge f(c)$ in some open interval around $c$. Since $|x| \\ge 0 = f(0)$ for all $x$, $x = 0$ is a global (and local) minimum, even though $f$ is not differentiable at $x = 0$. Reason (R) is true and explains Assertion (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f'(c) = 0$ and $f''(c) = 0$, then $x = c$ cannot be a local extremum of $f(x)$.\nReason (R): For $f(x) = x^4$, $f'(0) = 0$ and $f''(0) = 0$, yet $x = 0$ is a local minimum.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false because when $f''(c) = 0$, the second derivative test is inconclusive; higher order derivatives can still establish a local extremum. Reason (R) provides an exact counterexample: $f(x) = x^4$ has $f'(0) = f''(0) = 0$, yet $x = 0$ is an absolute minimum.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x^3$ has neither a local maximum nor a local minimum at $x = 0$.\nReason (R): The derivative $f'(x) = 3x^2 \\ge 0$ does not change sign as $x$ passes through $0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "By the first derivative test, a critical point is a local extremum only if $f'(x)$ changes sign across it. Since $f'(x) = 3x^2 > 0$ for all $x \\ne 0$, it does not change sign across $0$, so $x = 0$ is a point of inflection, not an extremum. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The maximum value of $f(x) = \\sin x \\cos x$ on $\\mathbb{R}$ is $\\frac{1}{2}$.\nReason (R): $f(x) = \\frac{1}{2}\\sin 2x$, and the maximum value of $\\sin 2x$ is $1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Using the double-angle formula, $f(x) = \\frac{1}{2}\\sin 2x$. Since $-1 \\le \\sin 2x \\le 1$, the maximum value is $\\frac{1}{2}(1) = \\frac{1}{2}$. Both statements are true and Reason is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A continuous function on a closed bounded interval $[a, b]$ always attains its absolute maximum and absolute minimum.\nReason (R): This is guaranteed by the Extreme Value Theorem for continuous functions on compact sets.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "The Extreme Value Theorem guarantees that any real-valued function continuous on a closed bounded interval $[a, b]$ attains both an absolute maximum and an absolute minimum at least once. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\frac{\\ln x}{x}$ has a local maximum at $x = e$.\nReason (R): $f'(e) = 0$ and $f''(e) = -\\frac{1}{e^3} < 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$f'(x) = \\frac{1 - \\ln x}{x^2} \\implies f'(e) = 0$. $f''(x) = \\frac{x^2(-1/x) - (1 - \\ln x)(2x)}{x^4} = \\frac{-x - 2x + 2x\\ln x}{x^4} = \\frac{2\\ln x - 3}{x^3}$. At $x = e$, $f''(e) = \\frac{2(1) - 3}{e^3} = -\\frac{1}{e^3} < 0$. By the second derivative test, $x = e$ is a local maximum. Both statements are true and Reason correctly explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x)$ is a differentiable function with local maximum at $x = c_1$ and local minimum at $x = c_2$, then $f(c_1)$ must be strictly greater than $f(c_2)$.\nReason (R): A local maximum of a function is not necessarily greater than a local minimum occurring at another point.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false: local extrema are local properties. For example, for $f(x) = 2x^3 - 3x^2 - 12x$, or functions like $f(x) = x + \\frac{1}{x}$ where local max at $x = -1$ gives $f(-1) = -2$, and local min at $x = 1$ gives $f(1) = 2$, but we can construct functions where a local min is higher than another local max. Reason (R) is true and directly refutes Assertion (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For the function $f(x) = (x - 2)^{2/3}$, the point $x = 2$ is a local minimum.\nReason (R): $f'(x) = \\frac{2}{3(x - 2)^{1/3}}$ changes sign from negative for $x < 2$ to positive for $x > 2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For $x < 2$, $x - 2 < 0$, so $(x - 2)^{1/3} < 0 \\implies f'(x) < 0$. For $x > 2$, $x - 2 > 0 \\implies f'(x) > 0$. By the first derivative test, $f(x)$ has a local minimum at the cusp $x = 2$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = e^{-x^2}$ attains its maximum value at $x = 0$.\nReason (R): For any $x \\in \\mathbb{R}$, $x^2 \\ge 0$, which implies $-x^2 \\le 0$, so $e^{-x^2} \\le e^0 = 1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Since $x^2 \\ge 0$, $-x^2 \\le 0$. Since the exponential function $g(u) = e^u$ is strictly increasing, $e^{-x^2} \\le e^0 = 1$ with equality if and only if $x = 0$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x)$ is continuous on $[a, b]$ and $f'(x) = 0$ at exactly one point $c \\in (a, b)$, and $f''(c) < 0$, then $f(c)$ is the absolute maximum of $f$ on $[a, b]$.\nReason (R): A unique local maximum of a continuous function on an interval is not necessarily the absolute maximum on that interval because the values at the endpoints may be larger.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false because the values of $f$ at the boundary points $a$ or $b$ can exceed $f(c)$ (e.g. $f(x) = -x^2$ on $[0, 2]$ shifted or similar, or a function that decreases from a high endpoint). Reason (R) is true and correctly explains why Assertion (A) fails.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Value Questions
  {
    questionType: "NUMERICAL",
    question: "Find the local maximum value of the function $f(x) = -2x^3 + 3x^2 + 12x - 5$.",
    correctAnswer: "15",
    explanation: "Differentiating: $f'(x) = -6x^2 + 6x + 12 = -6(x^2 - x - 2) = -6(x - 2)(x + 1) = 0 \\implies x = 2, -1$. The second derivative is $f''(x) = -12x + 6$. At $x = 2$, $f''(2) = -24 + 6 = -18 < 0$, which gives a local maximum. The local maximum value is $f(2) = -2(8) + 3(4) + 12(2) - 5 = -16 + 12 + 24 - 5 = 15$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the minimum value of $f(x) = x^2 + \\frac{250}{x}$ for $x > 0$ is $M$, find the value of $M$.",
    correctAnswer: "75",
    explanation: "Differentiating: $f'(x) = 2x - \\frac{250}{x^2} = 0 \\implies 2x^3 = 250 \\implies x^3 = 125 \\implies x = 5$. Since $f''(x) = 2 + \\frac{500}{x^3} > 0$ for $x > 0$, the minimum occurs at $x = 5$. Thus $M = f(5) = 5^2 + \\frac{250}{5} = 25 + 50 = 75$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the absolute minimum value of the function $f(x) = 2x^3 - 3x^2 - 12x + 5$ on the interval $[-2, 4]$.",
    correctAnswer: "-15",
    explanation: "Differentiating: $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1) = 0 \\implies x = -1, 2$. Both lie in $[-2, 4]$. Evaluating at critical points and endpoints: $f(-2) = 2(-8) - 3(4) - 12(-2) + 5 = -16 - 12 + 24 + 5 = 1$; $f(-1) = 2(-1) - 3(1) - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12$; $f(2) = 2(8) - 3(4) - 12(2) + 5 = 16 - 12 - 24 + 5 = -15$; $f(4) = 2(64) - 3(16) - 12(4) + 5 = 128 - 48 - 48 + 5 = 37$. The absolute minimum value is $-15$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the number of local extrema of the function $f(x) = 3x^4 - 4x^3 - 12x^2 + 5$ on $\\mathbb{R}$.",
    correctAnswer: "3",
    explanation: "Differentiating: $f'(x) = 12x^3 - 12x^2 - 24x = 12x(x^2 - x - 2) = 12x(x - 2)(x + 1) = 0$. The critical points are $x = -1, 0, 2$. Second derivative: $f''(x) = 36x^2 - 24x - 24$. At $x = -1$: $f''(-1) = 36 + 24 - 24 = 36 > 0$ (local min). At $x = 0$: $f''(0) = -24 < 0$ (local max). At $x = 2$: $f''(2) = 36(4) - 48 - 24 = 72 > 0$ (local min). All $3$ critical points correspond to local extrema.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the maximum value of $f(x) = a\\sin x + b\\cos x$ is $10$ and $a = 6$, find the positive value of $b$.",
    correctAnswer: "8",
    explanation: "The maximum value of $a\\sin x + b\\cos x$ is $\\sqrt{a^2 + b^2}$. Given $\\sqrt{6^2 + b^2} = 10 \\implies 36 + b^2 = 100 \\implies b^2 = 64 \\implies b = 8$ (since $b > 0$).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the maximum value of $f(x) = x(12 - 2x)^2$ on the interval $[0, 6]$.",
    correctAnswer: "128",
    explanation: "Let $f(x) = x(12 - 2x)^2 = 4x(6 - x)^2$. Differentiating: $f'(x) = (12 - 2x)^2 + x \\cdot 2(12 - 2x)(-2) = (12 - 2x)[(12 - 2x) - 4x] = (12 - 2x)(12 - 6x) = 0$. Critical points are $x = 6$ and $x = 2$. At $x = 0$: $f(0) = 0$. At $x = 6$: $f(6) = 0$. At $x = 2$: $f(2) = 2(12 - 4)^2 = 2(8^2) = 2(64) = 128$. Hence, the maximum value is $128$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The function $f(x) = 2x^3 - 9ax^2 + 12a^2x + 1$ has a local maximum at $x = x_1$ and a local minimum at $x = x_2$. If $x_1^2 = x_2$ and $a > 0$, find the value of $a$.",
    correctAnswer: "2",
    explanation: "Differentiating: $f'(x) = 6x^2 - 18ax + 12a^2 = 6(x^2 - 3ax + 2a^2) = 6(x - a)(x - 2a) = 0$. Critical points are $x = a$ and $x = 2a$. Since $a > 0$, $f''(x) = 12x - 18a$. At $x = a$, $f''(a) = -6a < 0$ (local max), so $x_1 = a$. At $x = 2a$, $f''(2a) = 6a > 0$ (local min), so $x_2 = 2a$. The condition $x_1^2 = x_2$ gives $a^2 = 2a \\implies a(a - 2) = 0$. Since $a > 0$, we have $a = 2$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the value of $4 \\times M$, where $M$ is the absolute maximum value of $f(x) = \\sin x + \\frac{1}{2}\\cos 2x$ in the interval $\\left[0, \\frac{\\pi}{2}\\right]$.",
    correctAnswer: "3",
    explanation: "We express $f(x)$ in terms of $\\sin x$: $f(x) = \\sin x + \\frac{1}{2}(1 - 2\\sin^2 x) = -\\sin^2 x + \\sin x + \\frac{1}{2}$. Let $u = \\sin x \\in [0, 1]$. Then $g(u) = -u^2 + u + \\frac{1}{2} = \\frac{3}{4} - \\left(u - \\frac{1}{2}\\right)^2$. Since $u = 1/2 \\in [0, 1]$, the maximum value is $M = \\frac{3}{4}$. Therefore, $4 \\times M = 4 \\times \\frac{3}{4} = 3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the minimum value of $f(x) = |x - 1| + |x - 2| + |x - 3|$ for $x \\in \\mathbb{R}$.",
    correctAnswer: "2",
    explanation: "For the sum of absolute values $f(x) = |x - a| + |x - b| + |x - c|$ with $a < b < c$, the minimum occurs at the median point, which is $x = 2$. At $x = 2$: $f(2) = |2 - 1| + |2 - 2| + |2 - 3| = 1 + 0 + 1 = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^3 - 3x + k$. If the local minimum value of $f(x)$ is $5$, find the local maximum value of $f(x)$.",
    correctAnswer: "9",
    explanation: "Differentiating: $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1) = 0 \\implies x = 1$ (local min) and $x = -1$ (local max). The local minimum is $f(1) = 1 - 3 + k = k - 2 = 5 \\implies k = 7$. The local maximum is $f(-1) = (-1)^3 - 3(-1) + 7 = -1 + 3 + 7 = 9$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
