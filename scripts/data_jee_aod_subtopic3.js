// scripts/data_jee_aod_subtopic3.js
// 30 authentic JEE Mains questions on 'Monotonicity of functions'
// Subtopic 3 for Application of Derivatives (Mathematics, Class 12)

module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "Which of the following inequalities is correct?",
    options: [
      "$e^\\pi > \\pi^e$",
      "$e^\\pi < \\pi^e$",
      "$e^\\pi = \\pi^e$",
      "$e^\\pi + \\pi^e = 2e\\pi$"
    ],
    correctAnswer: "$e^\\pi > \\pi^e$",
    explanation: "Consider the function $f(x) = \\frac{\\ln x}{x}$ for $x > 0$. Its derivative is $f'(x) = \\frac{1 - \\ln x}{x^2}$. For $x > e$, $f'(x) < 0$, so $f(x)$ is strictly decreasing on $[e, \\infty)$. Since $e < \\pi$, we have $f(e) > f(\\pi) \\implies \\frac{\\ln e}{e} > \\frac{\\ln \\pi}{\\pi} \\implies \\frac{1}{e} > \\frac{\\ln \\pi}{\\pi} \\implies \\pi > e \\ln \\pi = \\ln(\\pi^e)$. Exponentiating both sides gives $e^\\pi > \\pi^e$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Let $f(x) = x^3 + 3x + 2$. If $g(x)$ is the inverse of $f(x)$, then $g'(6)$ is equal to:",
    options: [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{15}$",
      "$\\frac{1}{12}$"
    ],
    correctAnswer: "$\\frac{1}{6}$",
    explanation: "$f'(x) = 3x^2 + 3 > 0$ for all $x$, so $f(x)$ is strictly increasing and strictly invertible. To find $g'(6)$, we solve $f(x) = 6 \\implies x^3 + 3x + 2 = 6 \\implies x^3 + 3x - 4 = 0$. By inspection, $x = 1$. Then $g'(6) = \\frac{1}{f'(1)}$. Since $f'(1) = 3(1)^2 + 3 = 6$, we obtain $g'(6) = \\frac{1}{6}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $f(x)$ and $g(x)$ are both strictly decreasing functions on $\\mathbb{R}$, then the composite function $h(x) = f(g(x))$ is:",
    options: [
      "Strictly increasing on $\\mathbb{R}$",
      "Strictly decreasing on $\\mathbb{R}$",
      "Non-monotonic on $\\mathbb{R}$",
      "Constant on $\\mathbb{R}$"
    ],
    correctAnswer: "Strictly increasing on $\\mathbb{R}$",
    explanation: "Let $x_1 < x_2$. Since $g$ is strictly decreasing, $g(x_1) > g(x_2)$. Since $f$ is strictly decreasing, $f(g(x_1)) < f(g(x_2))$. Thus $x_1 < x_2 \\implies h(x_1) < h(x_2)$, which means $h(x) = f(g(x))$ is strictly increasing on $\\mathbb{R}$. Alternatively, $h'(x) = f'(g(x))g'(x) = (\\text{negative}) \\times (\\text{negative}) > 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The function $f(x) = \\frac{x}{\\sin x}$ on the interval $\\left(0, \\frac{\\pi}{2}\\right)$ is:",
    options: [
      "Strictly increasing",
      "Strictly decreasing",
      "Increasing on $\\left(0, \\frac{\\pi}{4}\\right)$ and decreasing on $\\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$",
      "Constant"
    ],
    correctAnswer: "Strictly increasing",
    explanation: "Differentiating: $f'(x) = \\frac{\\sin x - x\\cos x}{\\sin^2 x} = \\frac{\\cos x(\\tan x - x)}{\\sin^2 x}$. For $x \\in \\left(0, \\frac{\\pi}{2}\\right)$, $\\cos x > 0$, $\\sin x > 0$, and $\\tan x > x$. Therefore $\\tan x - x > 0$, which implies $f'(x) > 0$. Hence $f(x)$ is strictly increasing on $\\left(0, \\frac{\\pi}{2}\\right)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the function $f(x) = x + \\sin x$ is monotonic on $\\mathbb{R}$, which of the following is true?",
    options: [
      "It is strictly increasing and has no stationary points",
      "It is strictly increasing and has infinitely many stationary points",
      "It is strictly decreasing and has infinitely many stationary points",
      "It is non-monotonic"
    ],
    correctAnswer: "It is strictly increasing and has infinitely many stationary points",
    explanation: "Differentiating: $f'(x) = 1 + \\cos x$. Since $-1 \\le \\cos x \\le 1$, $f'(x) = 1 + \\cos x \\ge 0$ for all $x \\in \\mathbb{R}$. The derivative vanishes at $x = (2n + 1)\\pi$ for $n \\in \\mathbb{Z}$, which are isolated points. Since $f'(x) = 0$ at isolated points and $f'(x) > 0$ elsewhere, $f(x)$ is strictly increasing on $\\mathbb{R}$ with infinitely many stationary points.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The value of $c$ in Lagrange's Mean Value Theorem for the function $f(x) = x^2 - 4x + 3$ on the interval $[1, 4]$ is:",
    options: [
      "$\\frac{5}{2}$",
      "$2$",
      "$\\frac{7}{2}$",
      "$3$"
    ],
    correctAnswer: "$\\frac{5}{2}$",
    explanation: "By LMVT, there exists $c \\in (1, 4)$ such that $f'(c) = \\frac{f(4) - f(1)}{4 - 1}$. We have $f(1) = 1 - 4 + 3 = 0$ and $f(4) = 16 - 16 + 3 = 3$. Thus $f'(c) = \\frac{3 - 0}{3} = 1$. Since $f'(x) = 2x - 4$, we have $2c - 4 = 1 \\implies 2c = 5 \\implies c = \\frac{5}{2} = 2.5 \\in (1, 4)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "For what values of $a$ is the function $f(x) = (a + 2)x^3 - 3ax^2 + 9ax - 1$ strictly decreasing for all $x \\in \\mathbb{R}$?",
    options: [
      "$a \\le -3$",
      "$a < -2$",
      "$-3 \\le a \\le 0$",
      "No value of $a$"
    ],
    correctAnswer: "$a \\le -3$",
    explanation: "Differentiating: $f'(x) = 3(a + 2)x^2 - 6ax + 9a$. For $f(x)$ to be strictly decreasing on $\\mathbb{R}$, we require $f'(x) \\le 0$ for all $x$. This requires: (i) Leading coefficient $a + 2 < 0 \\implies a < -2$; (ii) Discriminant $D \\le 0 \\implies (-3a)^2 - 3(a + 2)(9a) = -18a^2 - 54a \\le 0 \\implies a(a + 3) \\ge 0 \\implies a \\ge 0$ or $a \\le -3$. Taking the intersection with $a < -2$ yields $a \\le -3$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "For the function $f(x) = x^3 - 3x^2 + 2x$, the number of values of $c \\in (0, 2)$ satisfying Rolle's Theorem is:",
    options: [
      "$2$",
      "$1$",
      "$0$",
      "$3$"
    ],
    correctAnswer: "$2$",
    explanation: "Since $f(x)$ is a polynomial, it is continuous on $[0, 2]$ and differentiable on $(0, 2)$. $f(0) = 0$ and $f(2) = 8 - 12 + 4 = 0$, so $f(0) = f(2)$. Rolle's Theorem states that $f'(c) = 0$ for at least one $c \\in (0, 2)$. Differentiating: $f'(x) = 3x^2 - 6x + 2 = 0 \\implies c = \\frac{6 \\pm \\sqrt{36 - 24}}{6} = \\frac{6 \\pm 2\\sqrt{3}}{6} = 1 \\pm \\frac{1}{\\sqrt{3}}$. Since $\\frac{1}{\\sqrt{3}} \\approx 0.577$, both $c_1 = 1 - 0.577 = 0.423$ and $c_2 = 1 + 0.577 = 1.577$ lie strictly within $(0, 2)$. Thus, there are $2$ such values.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $f(x) = \\int_0^x \\frac{t^2 - 4}{1 + t^2} dt$, then the set of all $x$ where $f(x)$ is strictly decreasing is:",
    options: [
      "$(-2, 2)$",
      "$(-\\infty, -2) \\cup (2, \\infty)$",
      "$(0, 2)$",
      "$(-2, 0)$"
    ],
    correctAnswer: "$(-2, 2)$",
    explanation: "By the Leibniz rule, $f'(x) = \\frac{x^2 - 4}{1 + x^2}$. Since the denominator $1 + x^2 > 0$ for all $x \\in \\mathbb{R}$, $f'(x) < 0 \\iff x^2 - 4 < 0 \\iff x \\in (-2, 2)$. Thus $f(x)$ is strictly decreasing on $(-2, 2)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $f(x) = x^5 + 5x^3 + 10x + 1$, then the equation $f(x) = 0$ has:",
    options: [
      "Exactly one real root",
      "Three real roots",
      "Five real roots",
      "No real root"
    ],
    correctAnswer: "Exactly one real root",
    explanation: "Differentiating $f(x)$: $f'(x) = 5x^4 + 15x^2 + 10 = 5(x^4 + 3x^2 + 2) = 5(x^2 + 1)(x^2 + 2)$. Since $x^2 + 1 \\ge 1 > 0$ and $x^2 + 2 \\ge 2 > 0$, $f'(x) > 0$ for all $x \\in \\mathbb{R}$. Thus $f(x)$ is strictly increasing on $\\mathbb{R}$. Since $f(x)$ is an odd-degree polynomial, $\\lim_{x \\to -\\infty} f(x) = -\\infty$ and $\\lim_{x \\to \\infty} f(x) = \\infty$. A strictly increasing continuous function on $\\mathbb{R}$ that goes from $-\\infty$ to $\\infty$ crosses the $x$-axis exactly once. Hence $f(x) = 0$ has exactly one real root.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason Questions
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = 2x + \\sin 2x$ is strictly increasing on $\\mathbb{R}$.\nReason (R): The derivative $f'(x) = 2(1 + \\cos 2x) \\ge 0$ for all $x \\in \\mathbb{R}$, with equality only at isolated points $x = \\frac{(2n+1)\\pi}{2}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$f'(x) = 2 + 2\\cos 2x = 2(1 + \\cos 2x) \\ge 0$ because $\\cos 2x \\ge -1$. The derivative vanishes only when $\\cos 2x = -1 \\implies 2x = (2n+1)\\pi \\implies x = \\frac{(2n+1)\\pi}{2}$, which are isolated points. Therefore, $f(x)$ is strictly increasing on $\\mathbb{R}$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x)$ is continuous on $[a, b]$ and differentiable on $(a, b)$ with $f(a) = f(b)$, then there is at least one $c \\in (a, b)$ where $f'(c) = 0$.\nReason (R): This statement is known as Rolle's Theorem and is a direct consequence of the Extreme Value Theorem.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Assertion (A) correctly states Rolle's Theorem, and Reason (R) correctly identifies its name and mathematical proof foundation via the Extreme Value Theorem (where the interior extremum has zero derivative). Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any strictly increasing differentiable function $f(x)$, its inverse function $f^{-1}(x)$ is also strictly increasing on its domain.\nReason (R): If $y = f(x)$, then $\\frac{d}{dy}(f^{-1}(y)) = \\frac{1}{f'(x)} > 0$ whenever $f'(x) > 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "By the inverse function rule, $(f^{-1})'(y) = \\frac{1}{f'(x)}$. Since $f'(x) > 0$, $(f^{-1})'(y) > 0$, so the inverse function is strictly increasing. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For all $x > 0$, $\\ln(1 + x) < x$.\nReason (R): The function $f(x) = x - \\ln(1 + x)$ satisfies $f(0) = 0$ and $f'(x) = \\frac{x}{1 + x} > 0$ for all $x > 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Consider $f(x) = x - \\ln(1 + x)$. For $x > 0$, $f'(x) = 1 - \\frac{1}{1 + x} = \\frac{x}{1 + x} > 0$. Since $f$ is strictly increasing on $[0, \\infty)$ and $f(0) = 0$, $f(x) > f(0) = 0$ for all $x > 0$, which gives $x > \\ln(1 + x)$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\frac{1}{x}$ is strictly decreasing on its entire domain $\\mathbb{R} \\setminus \\{0\\}$.\nReason (R): For all $x \\ne 0$, the derivative $f'(x) = -\\frac{1}{x^2} < 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false because $f(x)$ is decreasing on $(-\\infty, 0)$ and on $(0, \\infty)$ separately, but NOT on their union $(-\\infty, 0) \\cup (0, \\infty)$; for example, $-1 < 1$ but $f(-1) = -1 < 1 = f(1)$, which violates the definition of decreasing on the union. Reason (R) is true because $f'(x) = -1/x^2 < 0$ for all $x \\ne 0$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f'(x) = 0$ for all $x \\in (a, b)$, then $f(x)$ is constant on $(a, b)$.\nReason (R): For any $x_1, x_2 \\in (a, b)$ with $x_1 < x_2$, Lagrange's Mean Value Theorem gives $f(x_2) - f(x_1) = f'(c)(x_2 - x_1) = 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Applying LMVT on $[x_1, x_2] \\subset (a, b)$, there exists $c \\in (x_1, x_2)$ such that $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Since $f'(c) = 0$, $f(x_2) = f(x_1)$, proving $f$ is constant. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For $x \\in \\left(0, \\frac{\\pi}{2}\\right)$, $\\sin x < x < \\tan x$.\nReason (R): The functions $f(x) = x - \\sin x$ and $g(x) = \\tan x - x$ are both strictly increasing on $\\left(0, \\frac{\\pi}{2}\\right)$ with $f(0) = g(0) = 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$f'(x) = 1 - \\cos x > 0$ for $x \\in (0, \\pi/2)$, so $f(x) > f(0) = 0 \\implies x > \\sin x$. Also $g'(x) = \\sec^2 x - 1 = \\tan^2 x > 0$, so $g(x) > g(0) = 0 \\implies \\tan x > x$. Combining these gives $\\sin x < x < \\tan x$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x) = x^3 - 3x^2 + 3x - 1$, then $f(x)$ is strictly increasing on $\\mathbb{R}$.\nReason (R): $f'(x) = 3(x - 1)^2 \\ge 0$ for all $x \\in \\mathbb{R}$, vanishing only at $x = 1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$f(x) = (x - 1)^3 \\implies f'(x) = 3(x - 1)^2 \\ge 0$. The derivative is strictly positive except at the single isolated point $x = 1$, which guarantees that $f(x)$ is strictly increasing everywhere. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The polynomial equation $x^7 + 14x^5 + 16x^3 + 30x - 560 = 0$ has exactly one real root.\nReason (R): The derivative of the left side is strictly positive for all $x \\in \\mathbb{R}$, making the polynomial strictly increasing.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Let $P(x) = x^7 + 14x^5 + 16x^3 + 30x - 560$. Then $P'(x) = 7x^6 + 70x^4 + 48x^2 + 30$. Since all powers are even and $30 > 0$, $P'(x) \\ge 30 > 0$ for all $x \\in \\mathbb{R}$. Hence $P(x)$ is strictly increasing from $-\\infty$ to $\\infty$, cutting the $x$-axis at exactly one point. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Between any two real roots of a polynomial $P(x)$, there lies at least one real root of its derivative $P'(x)$.\nReason (R): This is an immediate consequence of Rolle's Theorem applied to $P(x)$ on the interval bounded by the two roots.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "If $P(a) = P(b) = 0$ with $a < b$, then by Rolle's Theorem, there exists $c \\in (a, b)$ such that $P'(c) = 0$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Value Questions
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^3 - 3x^2 + 6x - 1$. Find the minimum value of $f'(x)$ on $\\mathbb{R}$.",
    correctAnswer: "3",
    explanation: "Differentiating: $f'(x) = 3x^2 - 6x + 6 = 3(x^2 - 2x + 1) + 3 = 3(x - 1)^2 + 3$. Since $(x - 1)^2 \\ge 0$, the minimum value of $f'(x)$ is $3$, occurring at $x = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the function $f(x) = kx^3 - 9x^2 + 9x + 3$ is strictly increasing on $\\mathbb{R}$, find the minimum positive integer value of $k$.",
    correctAnswer: "3",
    explanation: "Differentiating: $f'(x) = 3kx^2 - 18x + 9$. For $f(x)$ to be strictly increasing on $\\mathbb{R}$, we require $f'(x) \\ge 0$ for all $x \\in \\mathbb{R}$. This requires $3k > 0 \\implies k > 0$ and discriminant $D \\le 0$: $D = (-18)^2 - 4(3k)(9) = 324 - 108k \\le 0 \\implies 108k \\ge 324 \\implies k \\ge 3$. When $k = 3$, $f'(x) = 9(x - 1)^2 \\ge 0$, which vanishes only at the isolated point $x = 1$. Thus, the minimum integer value of $k$ is $3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the value of $c$ satisfying Lagrange's Mean Value Theorem for $f(x) = \\sqrt{x}$ on the interval $[1, 9]$. If $c$ is an integer, enter its value.",
    correctAnswer: "4",
    explanation: "By LMVT, $f'(c) = \\frac{f(9) - f(1)}{9 - 1} = \\frac{3 - 1}{8} = \\frac{2}{8} = \\frac{1}{4}$. Since $f'(x) = \\frac{1}{2\\sqrt{x}}$, we set $\\frac{1}{2\\sqrt{c}} = \\frac{1}{4} \\implies 2\\sqrt{c} = 4 \\implies \\sqrt{c} = 2 \\implies c = 4 \\in (1, 9)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^3 - 6x^2 + 9x + 2$. Find the sum of the roots of $f'(x) = 0$.",
    correctAnswer: "4",
    explanation: "Differentiating: $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3) = 0$. The roots of $f'(x) = 0$ are $x = 1$ and $x = 3$. Their sum is $1 + 3 = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the number of real roots of the equation $3x^5 + 5x^3 + 15x - 7 = 0$.",
    correctAnswer: "1",
    explanation: "Let $f(x) = 3x^5 + 5x^3 + 15x - 7$. Differentiating: $f'(x) = 15x^4 + 15x^2 + 15 = 15(x^4 + x^2 + 1)$. Since $x^4 + x^2 + 1 \\ge 1 > 0$ for all $x \\in \\mathbb{R}$, $f'(x) > 0$ everywhere, so $f(x)$ is strictly increasing. Being a polynomial of odd degree 5, it tends to $-\\infty$ as $x \\to -\\infty$ and $+\\infty$ as $x \\to +\\infty$. Therefore, it must intersect the $x$-axis at exactly $1$ real point.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^4 - 2x^2 + 3$. Find the number of distinct intervals on which $f(x)$ is strictly monotonic.",
    correctAnswer: "4",
    explanation: "Differentiating: $f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1) = 0 \\implies x = -1, 0, 1$. These 3 critical points divide the real line into $4$ subintervals: $(-\\infty, -1)$ (decreasing), $(-1, 0)$ (increasing), $(0, 1)$ (decreasing), and $(1, \\infty)$ (increasing). Thus, there are $4$ such intervals.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If $f(x) = x + \\frac{1}{x}$, find the sum of all local extrema values of $f(x)$ on $\\mathbb{R} \\setminus \\{0\\}$.",
    correctAnswer: "0",
    explanation: "Differentiating: $f'(x) = 1 - \\frac{1}{x^2} = 0 \\implies x = \\pm 1$. At $x = 1$, $f(1) = 1 + 1 = 2$ (local minimum for $x > 0$). At $x = -1$, $f(-1) = -1 - 1 = -2$ (local maximum for $x < 0$). The sum of these local extrema values is $2 + (-2) = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The value of $c$ in Rolle's theorem for $f(x) = x(x - 3)^2$ on $[0, 3]$ is:",
    correctAnswer: "1",
    explanation: "$f(x)$ is continuous on $[0, 3]$ and differentiable on $(0, 3)$, with $f(0) = 0$ and $f(3) = 0$. Differentiating: $f'(x) = (x - 3)^2 + x \\cdot 2(x - 3) = (x - 3)[(x - 3) + 2x] = (x - 3)(3x - 3) = 3(x - 3)(x - 1)$. Setting $f'(c) = 0$ for $c \\in (0, 3)$ gives $c = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the function $f(x) = 2x^3 - 3ax^2 + 12x + 5$ is monotonic on $\\mathbb{R}$, find the number of integer values that $a$ can take.",
    correctAnswer: "5",
    explanation: "Differentiating: $f'(x) = 6x^2 - 6ax + 12 = 6(x^2 - ax + 2)$. For monotonicity on $\\mathbb{R}$, $f'(x) \\ge 0$ for all $x$, requiring discriminant $D \\le 0$: $D = (-a)^2 - 4(1)(2) = a^2 - 8 \\le 0 \\implies -\\sqrt{8} \\le a \\le \\sqrt{8}$. Since $\\sqrt{8} \\approx 2.828$, the integer values of $a$ are $-2, -1, 0, 1, 2$. There are $5$ integer values.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If $f(x) = x^3 - 12x$, find the absolute value of the difference between the local maximum and local minimum values of $f(x)$.",
    correctAnswer: "32",
    explanation: "Differentiating: $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 0 \\implies x = \\pm 2$. At $x = -2$, local maximum is $f(-2) = (-2)^3 - 12(-2) = -8 + 24 = 16$. At $x = 2$, local minimum is $f(2) = 2^3 - 12(2) = 8 - 24 = -16$. The difference between the local maximum and local minimum is $16 - (-16) = 32$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
