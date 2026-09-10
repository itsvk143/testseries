// scripts/data_jee_aod_subtopic1.js
// 30 authentic JEE Mains questions on 'Increasing and decreasing functions'
// Subtopic 1 for Application of Derivatives (Mathematics, Class 12)

module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The function $f(x) = 2x^3 - 9x^2 + 12x + 5$ is strictly increasing in the interval:",
    options: [
      "$(-\\infty, 1) \\cup (2, \\infty)$",
      "$(1, 2)$",
      "$(-\\infty, 2)$",
      "$(1, \\infty)$"
    ],
    correctAnswer: "$(-\\infty, 1) \\cup (2, \\infty)$",
    explanation: "Differentiating $f(x)$, we have $f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$. For strictly increasing, $f'(x) > 0 \\implies (x - 1)(x - 2) > 0 \\implies x \\in (-\\infty, 1) \\cup (2, \\infty)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $f(x) = \\frac{x}{x^2 + 1}$, then $f(x)$ is strictly decreasing on:",
    options: [
      "$(-\\infty, -1) \\cup (1, \\infty)$",
      "$(-1, 1)$",
      "$(0, \\infty)$",
      "$(-\\infty, 0)$"
    ],
    correctAnswer: "$(-\\infty, -1) \\cup (1, \\infty)$",
    explanation: "Using the quotient rule: $f'(x) = \\frac{(x^2 + 1)(1) - x(2x)}{(x^2 + 1)^2} = \\frac{1 - x^2}{(x^2 + 1)^2}$. For $f(x)$ to be strictly decreasing, $f'(x) < 0 \\implies 1 - x^2 < 0 \\implies x^2 > 1 \\implies x \\in (-\\infty, -1) \\cup (1, \\infty)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The interval in which the function $f(x) = x^2 e^{-x}$ is strictly increasing is:",
    options: [
      "$(0, 2)$",
      "$(-\\infty, 0)$",
      "$(2, \\infty)$",
      "$(-2, 0)$"
    ],
    correctAnswer: "$(0, 2)$",
    explanation: "Using the product rule: $f'(x) = 2x e^{-x} - x^2 e^{-x} = x(2 - x)e^{-x}$. Since $e^{-x} > 0$ for all $x$, $f'(x) > 0 \\iff x(2 - x) > 0 \\iff x(x - 2) < 0 \\iff x \\in (0, 2)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Find the range of all real values of $a$ for which $f(x) = x^3 - 3ax^2 + 3(a^2 - 1)x + 1$ is strictly increasing on $\\mathbb{R}$.",
    options: [
      "No real value of $a$",
      "$a \\in (-1, 1)$",
      "$a \\in [-1, 1]$",
      "$a \\in \\mathbb{R}$"
    ],
    correctAnswer: "No real value of $a$",
    explanation: "Differentiating: $f'(x) = 3x^2 - 6ax + 3(a^2 - 1) = 3[x^2 - 2ax + (a^2 - 1)]$. For $f(x)$ to be strictly increasing on $\\mathbb{R}$, we must have $f'(x) \\ge 0$ for all $x$, which requires discriminant $D \\le 0$. Here $D/4 = (-a)^2 - (a^2 - 1) = a^2 - a^2 + 1 = 1 > 0$ for all $a$. Since $D = 4 > 0$ identically, $f'(x) = 0$ always has two distinct real roots, so $f(x)$ can never be increasing on all of $\\mathbb{R}$. Thus, no such real value of $a$ exists.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The function $f(x) = \\tan x - x$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ is:",
    options: [
      "Strictly increasing",
      "Strictly decreasing",
      "Constant",
      "Decreasing on $\\left(0, \\frac{\\pi}{4}\\right)$ and increasing on $\\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$"
    ],
    correctAnswer: "Strictly increasing",
    explanation: "Differentiating $f(x)$: $f'(x) = \\sec^2 x - 1 = \\tan^2 x$. For $x \\in \\left(0, \\frac{\\pi}{2}\\right)$, $\\tan x > 0$, so $f'(x) = \\tan^2 x > 0$. Therefore, $f(x)$ is strictly increasing on $\\left(0, \\frac{\\pi}{2}\\right)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The function $f(x) = \\frac{\\ln x}{x}$ is strictly decreasing in the interval:",
    options: [
      "$(e, \\infty)$",
      "$(0, e)$",
      "$(1, e)$",
      "$(0, 1)$"
    ],
    correctAnswer: "$(e, \\infty)$",
    explanation: "Domain of $f$ is $x > 0$. Differentiating: $f'(x) = \\frac{x(1/x) - (\\ln x)(1)}{x^2} = \\frac{1 - \\ln x}{x^2}$. For $f(x)$ to be strictly decreasing, $f'(x) < 0 \\implies 1 - \\ln x < 0 \\implies \\ln x > 1 \\implies x > e$. Thus, $f(x)$ is strictly decreasing on $(e, \\infty)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $f(x) = 2x + \\cos x$, then for all $x \\in \\mathbb{R}$:",
    options: [
      "$f(x)$ is strictly increasing",
      "$f(x)$ is strictly decreasing",
      "$f(x)$ has infinitely many local maxima",
      "$f(x)$ is bounded"
    ],
    correctAnswer: "$f(x)$ is strictly increasing",
    explanation: "Differentiating: $f'(x) = 2 - \\sin x$. Since $-1 \\le \\sin x \\le 1$ for all $x \\in \\mathbb{R}$, we have $2 - 1 \\le f'(x) \\le 2 - (-1) \\implies 1 \\le f'(x) \\le 3$. Since $f'(x) \\ge 1 > 0$ everywhere, $f(x)$ is strictly increasing on $\\mathbb{R}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The function $f(x) = x^3 - 6x^2 + 12x - 8$ is:",
    options: [
      "Strictly increasing on $\\mathbb{R}$",
      "Strictly decreasing on $\\mathbb{R}$",
      "Increasing on $(-\\infty, 2)$ and decreasing on $(2, \\infty)$",
      "Decreasing on $(-\\infty, 2)$ and increasing on $(2, \\infty)$"
    ],
    correctAnswer: "Strictly increasing on $\\mathbb{R}$",
    explanation: "Notice that $f(x) = (x - 2)^3$. Its derivative is $f'(x) = 3(x - 2)^2$. Since $(x - 2)^2 > 0$ for all $x \\ne 2$ and equals zero only at the isolated point $x = 2$, $f(x)$ is strictly increasing on the entire real line $\\mathbb{R}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "For what values of $k$ is the function $f(x) = kx - \\sin x$ strictly increasing on $\\mathbb{R}$?",
    options: [
      "$k > 1$",
      "$k \\ge 1$",
      "$k < 1$",
      "$-1 \\le k \\le 1$"
    ],
    correctAnswer: "$k \\ge 1$",
    explanation: "Differentiating: $f'(x) = k - \\cos x$. For $f(x)$ to be strictly increasing on $\\mathbb{R}$, we require $f'(x) \\ge 0$ for all $x \\in \\mathbb{R}$ with equality only at isolated points. Since $\\max(\\cos x) = 1$, we must have $k - 1 \\ge 0 \\implies k \\ge 1$. When $k = 1$, $f'(x) = 1 - \\cos x = 0$ only at $x = 2n\\pi$, which are isolated points. Thus $f(x)$ is strictly increasing for all $k \\ge 1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Let $f(x) = \\int_0^x (t - 1)(t - 2)^2 dt$. Then $f(x)$ is decreasing on the interval:",
    options: [
      "$(-\\infty, 1)$",
      "$(1, 2)$",
      "$(2, \\infty)$",
      "$(1, \\infty)$"
    ],
    correctAnswer: "$(-\\infty, 1)$",
    explanation: "By the Fundamental Theorem of Calculus (Leibniz rule), $f'(x) = (x - 1)(x - 2)^2$. Since $(x - 2)^2 \\ge 0$ for all $x$, the sign of $f'(x)$ is determined solely by $(x - 1)$. For $f(x)$ to be decreasing, $f'(x) < 0 \\implies x - 1 < 0 \\implies x < 1$. Thus, $f(x)$ is decreasing on $(-\\infty, 1)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason Questions
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x + \\frac{1}{x}$ is strictly increasing in the interval $(1, \\infty)$.\nReason (R): For any differentiable function $f(x)$, if $f'(x) > 0$ for all $x \\in (a, b)$, then $f(x)$ is strictly increasing on $(a, b)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Here $f'(x) = 1 - \\frac{1}{x^2} = \\frac{x^2 - 1}{x^2}$. For $x \\in (1, \\infty)$, $x^2 > 1$, so $f'(x) > 0$, making $f(x)$ strictly increasing. Reason (R) correctly states the fundamental first derivative criterion for strictly increasing functions and explains Assertion (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x^3$ is strictly increasing on $\\mathbb{R}$, even though $f'(0) = 0$.\nReason (R): If $f'(x) \\ge 0$ on an interval and $f'(x) = 0$ only at isolated points, then $f(x)$ is strictly increasing on that interval.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$f'(x) = 3x^2 \\ge 0$ for all $x$, and $f'(x) = 0$ only at the isolated point $x = 0$. By standard theorem, $f(x)$ is strictly increasing on $\\mathbb{R}$. Both statements are true and Reason (R) correctly explains Assertion (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\cos x$ is strictly decreasing on $[0, \\pi]$.\nReason (R): For $x \\in (0, \\pi)$, the derivative $f'(x) = -\\sin x < 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For $x \\in (0, \\pi)$, $\\sin x > 0 \\implies f'(x) = -\\sin x < 0$. By continuity on $[0, \\pi]$ and negative derivative on $(0, \\pi)$, $f(x)$ is strictly decreasing on $[0, \\pi]$. Reason (R) is true and correctly explains Assertion (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = |x|$ is strictly increasing on $[0, \\infty)$.\nReason (R): A function that is not differentiable at a point can never be strictly increasing on an interval containing that point.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is true but Reason is false",
    explanation: "For $x \\ge 0$, $f(x) = x$, which is strictly increasing on $[0, \\infty)$, so Assertion (A) is true. Reason (R) is false because differentiability is not a requirement for monotonicity; a continuous function (or even discontinuous function) can be strictly increasing despite lacking differentiability at a point.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = e^x - x - 1$ is strictly increasing for all $x > 0$.\nReason (R): For all $x > 0$, $e^x > 1$, which implies $f'(x) = e^x - 1 > 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Differentiating gives $f'(x) = e^x - 1$. Since $e^x > 1$ for all $x > 0$, we have $f'(x) > 0$, so $f(x)$ is strictly increasing on $(0, \\infty)$. Both statements are true and Reason (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x)$ is strictly increasing on an interval $(a, b)$, then $f'(x) > 0$ for every $x \\in (a, b)$.\nReason (R): The function $f(x) = x^3$ is strictly increasing on $(-1, 1)$, but its derivative at $x = 0$ is $f'(0) = 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false because a strictly increasing function can have a derivative equal to zero at isolated points (e.g., $f(x) = x^3$ at $x = 0$). Reason (R) is true and serves as an explicit counterexample proving Assertion (A) false.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x - \\sin x$ is strictly increasing on $\\mathbb{R}$.\nReason (R): The derivative $f'(x) = 1 - \\cos x \\ge 0$ for all $x \\in \\mathbb{R}$, and $f'(x) = 0$ only at isolated points $x = 2n\\pi$ ($n \\in \\mathbb{Z}$).",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Differentiating, $f'(x) = 1 - \\cos x$. Since $\\cos x \\le 1$, $f'(x) \\ge 0$ for all $x$. Equality holds only when $\\cos x = 1$, i.e., $x = 2n\\pi$, which are isolated points with no interval of flatness. Hence $f(x)$ is strictly increasing on $\\mathbb{R}$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\ln(1 + x) - \\frac{x}{1 + x}$ is strictly increasing for all $x > 0$.\nReason (R): For $x > 0$, the derivative $f'(x) = \\frac{x}{(1 + x)^2} > 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Differentiating $f(x)$: $f'(x) = \\frac{1}{1 + x} - \\frac{(1 + x)(1) - x(1)}{(1 + x)^2} = \\frac{1}{1 + x} - \\frac{1}{(1 + x)^2} = \\frac{1 + x - 1}{(1 + x)^2} = \\frac{x}{(1 + x)^2}$. For $x > 0$, $f'(x) > 0$, so $f(x)$ is strictly increasing. Both statements are true and Reason is the correct explanation.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x^2$ is strictly increasing on its entire domain $\\mathbb{R}$.\nReason (R): For $x > 0$, the derivative $f'(x) = 2x > 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false because $f(x) = x^2$ is decreasing on $(-\\infty, 0)$ and increasing on $(0, \\infty)$. Reason (R) is true because for $x > 0$, $f'(x) = 2x > 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f'(x) > 0$ for all $x \\in (a, b)$, and $g'(x) < 0$ for all $x \\in (a, b)$, then $f(x) - g(x)$ is strictly increasing on $(a, b)$.\nReason (R): The derivative of $h(x) = f(x) - g(x)$ is $h'(x) = f'(x) - g'(x)$, which is strictly positive as the difference of a positive number and a negative number.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$h'(x) = f'(x) - g'(x)$. Since $f'(x) > 0$ and $g'(x) < 0$, we have $-g'(x) > 0$, so $h'(x) = f'(x) + (-g'(x)) > 0$. Thus $h(x)$ is strictly increasing. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Value Questions
  {
    questionType: "NUMERICAL",
    question: "Find the length of the interval in which the function $f(x) = 2x^3 - 15x^2 + 36x + 1$ is strictly decreasing.",
    correctAnswer: "1",
    explanation: "Differentiating: $f'(x) = 6x^2 - 30x + 36 = 6(x^2 - 5x + 6) = 6(x - 2)(x - 3)$. For strictly decreasing, $f'(x) < 0 \\implies (x - 2)(x - 3) < 0 \\implies x \\in (2, 3)$. The length of this interval is $3 - 2 = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the function $f(x) = x^3 - 3x^2 + kx + 7$ is strictly increasing on $\\mathbb{R}$, find the minimum integer value of $k$.",
    correctAnswer: "3",
    explanation: "Differentiating: $f'(x) = 3x^2 - 6x + k$. For $f(x)$ to be strictly increasing on $\\mathbb{R}$, we need $f'(x) \\ge 0$ for all $x \\in \\mathbb{R}$. This requires discriminant $D \\le 0 \\implies (-6)^2 - 4(3)(k) \\le 0 \\implies 36 - 12k \\le 0 \\implies k \\ge 3$. Thus, the minimum integer value of $k$ is $3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^4 - 4x^3 + 4x^2 + 10$. If the set of all $x$ where $f(x)$ is strictly increasing is $(a, b) \\cup (c, \\infty)$, find the value of $a + b + c$.",
    correctAnswer: "3",
    explanation: "Differentiating: $f'(x) = 4x^3 - 12x^2 + 8x = 4x(x^2 - 3x + 2) = 4x(x - 1)(x - 2)$. By sign analysis of $f'(x)$: $f'(x) > 0$ when $x \\in (0, 1) \\cup (2, \\infty)$. Here $a = 0, b = 1, c = 2$. Therefore, $a + b + c = 0 + 1 + 2 = 3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the number of critical points of the function $f(x) = 3x^5 - 25x^3 + 60x + 1$ where the function changes from increasing to decreasing.",
    correctAnswer: "2",
    explanation: "Differentiating: $f'(x) = 15x^4 - 75x^2 + 60 = 15(x^4 - 5x^2 + 4) = 15(x^2 - 1)(x^2 - 4) = 15(x - 1)(x + 1)(x - 2)(x + 2)$. The roots are $x = -2, -1, 1, 2$. The function changes from increasing to decreasing at points of local maxima where $f'(x)$ changes from positive to negative: these are $x = -2$ and $x = 1$. Hence, there are $2$ such points.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the length of the interval in which the function $f(x) = 4x^3 - 18x^2 + 24x - 5$ is strictly decreasing is $L$, find the value of $10L$.",
    correctAnswer: "10",
    explanation: "Differentiating: $f'(x) = 12x^2 - 36x + 24 = 12(x^2 - 3x + 2) = 12(x - 1)(x - 2)$. For strictly decreasing, $f'(x) < 0 \\implies x \\in (1, 2)$. The length of the interval is $L = 2 - 1 = 1$. Thus $10L = 10(1) = 10$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the function $f(x) = 2x^3 - 3(a + 2)x^2 + 12ax - 7$ is strictly decreasing on the interval $(2, 4)$, find the value of $a$.",
    correctAnswer: "4",
    explanation: "Differentiating: $f'(x) = 6x^2 - 6(a + 2)x + 12a = 6(x - 2)(x - a)$. For $f(x)$ to be strictly decreasing on $(2, 4)$, the roots of $f'(x) = 0$ must be $2$ and $a$. Thus $a = 4$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the maximum integer value of $c$ for which the function $f(x) = x^3 + cx^2 + 12x + 1$ is strictly increasing on $\\mathbb{R}$.",
    correctAnswer: "6",
    explanation: "Differentiating: $f'(x) = 3x^2 + 2cx + 12$. For strictly increasing on $\\mathbb{R}$, $f'(x) \\ge 0$ for all $x$, requiring discriminant $D \\le 0$: $D = (2c)^2 - 4(3)(12) = 4c^2 - 144 \\le 0 \\implies c^2 \\le 36 \\implies -6 \\le c \\le 6$. Thus, the maximum integer value of $c$ is $6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^3 - 12x$. Find the number of points in the interval $[-3, 3]$ where the tangent is horizontal.",
    correctAnswer: "2",
    explanation: "Horizontal tangent occurs where $f'(x) = 0$. $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 0 \\implies x = \\pm 2$. Both $x = -2$ and $x = 2$ lie inside the interval $[-3, 3]$. Thus, there are $2$ such points.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If $f(x) = \\frac{x^2 - 4}{x^2 + 4}$, find the value of $16 \\times f'(2)$.",
    correctAnswer: "8",
    explanation: "Differentiating: $f'(x) = \\frac{(x^2 + 4)(2x) - (x^2 - 4)(2x)}{(x^2 + 4)^2} = \\frac{16x}{(x^2 + 4)^2}$. At $x = 2$: $f'(2) = \\frac{16(2)}{(4 + 4)^2} = \\frac{32}{64} = \\frac{1}{2}$. Therefore, $16 \\times f'(2) = 16 \\times \\frac{1}{2} = 8$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The function $f(x) = x + \\frac{a}{x}$ has a local minimum at $x = 3$. Find the value of $a$.",
    correctAnswer: "9",
    explanation: "Differentiating: $f'(x) = 1 - \\frac{a}{x^2}$. A local extremum at $x = 3$ requires $f'(3) = 0 \\implies 1 - \\frac{a}{3^2} = 0 \\implies \\frac{a}{9} = 1 \\implies a = 9$. Since $f''(x) = \\frac{2a}{x^3} = \\frac{18}{27} > 0$ at $x = 3$, it is indeed a local minimum. Hence $a = 9$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
