// scripts/data_jee_aod_subtopic5.js
// 30 authentic JEE Mains questions on 'Points of inflection and concavity'
// Subtopic 5 for Application of Derivatives (Mathematics, Class 12)

module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The point of inflection on the curve $y = x^3 - 3x^2 + 4$ is:",
    options: [
      "$(1, 2)$",
      "$(0, 4)$",
      "$(2, 0)$",
      "$(-1, 0)$"
    ],
    correctAnswer: "$(1, 2)$",
    explanation: "Differentiating: $y' = 3x^2 - 6x$ and $y'' = 6x - 6$. Setting $y'' = 0 \\implies 6x - 6 = 0 \\implies x = 1$. Since $y'' < 0$ for $x < 1$ and $y'' > 0$ for $x > 1$, the concavity changes at $x = 1$. The $y$-coordinate is $y(1) = 1^3 - 3(1^2) + 4 = 2$. Thus, the point of inflection is $(1, 2)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The curve $y = x^4 - 4x^3$ is concave upwards in the interval:",
    options: [
      "$(-\\infty, 0) \\cup (2, \\infty)$",
      "$(0, 2)$",
      "$(2, \\infty)$",
      "$(-\\infty, 0)$"
    ],
    correctAnswer: "$(-\\infty, 0) \\cup (2, \\infty)$",
    explanation: "Differentiating: $y' = 4x^3 - 12x^2$ and $y'' = 12x^2 - 24x = 12x(x - 2)$. For the curve to be concave upwards, $y'' > 0 \\implies 12x(x - 2) > 0 \\implies x \\in (-\\infty, 0) \\cup (2, \\infty)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The number of points of inflection on the curve $y = \\sin x$ in the open interval $(0, 2\\pi)$ is:",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$0$"
    ],
    correctAnswer: "$1$",
    explanation: "Differentiating: $y' = \\cos x$ and $y'' = -\\sin x$. In $(0, 2\\pi)$, $y'' = 0 \\iff -\\sin x = 0 \\iff x = \\pi$. For $x \\in (0, \\pi)$, $y'' < 0$ (concave down), and for $x \\in (\\pi, 2\\pi)$, $y'' > 0$ (concave up). Since the concavity changes across $x = \\pi$, $(\\pi, 0)$ is the only point of inflection in $(0, 2\\pi)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "For the curve $y = e^{-x^2}$, the $x$-coordinates of the points of inflection are:",
    options: [
      "$x = \\pm \\frac{1}{\\sqrt{2}}$",
      "$x = \\pm 1$",
      "$x = 0$",
      "$x = \\pm \\sqrt{2}$"
    ],
    correctAnswer: "$x = \\pm \\frac{1}{\\sqrt{2}}$",
    explanation: "Differentiating: $y' = -2x e^{-x^2}$. Differentiating again: $y'' = -2e^{-x^2} + (-2x)(-2x e^{-x^2}) = 2e^{-x^2}(2x^2 - 1)$. Setting $y'' = 0 \\implies 2x^2 - 1 = 0 \\implies x = \\pm \\frac{1}{\\sqrt{2}}$. Since $y''$ changes sign across these roots, both points are points of inflection.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The equation of the tangent line to the curve $y = x^3 - 3x^2 + 2x$ at its point of inflection is:",
    options: [
      "$x + y = 1$",
      "$x - y = 1$",
      "$y = -x$",
      "$y = 2x - 2$"
    ],
    correctAnswer: "$x + y = 1$",
    explanation: "Differentiating: $y' = 3x^2 - 6x + 2$ and $y'' = 6x - 6 = 0 \\implies x = 1$. The $y$-coordinate at $x = 1$ is $y(1) = 1 - 3 + 2 = 0$. The slope at $x = 1$ is $m = y'(1) = 3(1) - 6(1) + 2 = -1$. The tangent line is $y - 0 = -1(x - 1) \\implies y = -x + 1 \\implies x + y = 1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The curve $y = \\frac{1}{x^2 + 1}$ is concave downwards on the interval:",
    options: [
      "$\\left(-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}\\right)$",
      "$(-\\infty, -1) \\cup (1, \\infty)$",
      "$\\left(-1, 1\\right)$",
      "$(0, \\infty)$"
    ],
    correctAnswer: "$\\left(-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}\\right)$",
    explanation: "Differentiating: $y' = \\frac{-2x}{(x^2 + 1)^2}$. Differentiating again: $y'' = \\frac{-2(x^2 + 1)^2 - (-2x) \\cdot 2(x^2 + 1)(2x)}{(x^2 + 1)^4} = \\frac{-2(x^2 + 1) + 8x^2}{(x^2 + 1)^3} = \\frac{6x^2 - 2}{(x^2 + 1)^3} = \\frac{2(3x^2 - 1)}{(x^2 + 1)^3}$. For concave downwards, $y'' < 0 \\implies 3x^2 - 1 < 0 \\implies x^2 < 1/3 \\implies x \\in \\left(-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}\\right)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $f(x) = x^4 - 2x^2 + 3$, which of the following statements about its inflection points is true?",
    options: [
      "It has exactly two points of inflection at $x = \\pm \\frac{1}{\\sqrt{3}}$",
      "It has no points of inflection",
      "It has four points of inflection",
      "It has a point of inflection at $x = 0$"
    ],
    correctAnswer: "It has exactly two points of inflection at $x = \\pm \\frac{1}{\\sqrt{3}}$",
    explanation: "Differentiating: $f'(x) = 4x^3 - 4x$ and $f''(x) = 12x^2 - 4 = 4(3x^2 - 1)$. Setting $f''(x) = 0 \\implies x = \\pm \\frac{1}{\\sqrt{3}}$. Since $f''(x)$ changes sign across both roots, there are exactly two points of inflection at $x = \\pm \\frac{1}{\\sqrt{3}}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A cubic polynomial $P(x) = ax^3 + bx^2 + cx + d$ with $a \\ne 0$ always has:",
    options: [
      "Exactly one point of inflection",
      "At least two points of inflection",
      "No point of inflection",
      "Either zero or two points of inflection"
    ],
    correctAnswer: "Exactly one point of inflection",
    explanation: "For any cubic, $P''(x) = 6ax + 2b$. Setting $P''(x) = 0$ gives $x = -\\frac{b}{3a}$. Since $P''(x)$ is a non-trivial linear function ($a \\ne 0$), it changes sign from negative to positive (or vice versa) as $x$ passes through $-\\frac{b}{3a}$. Hence, every cubic polynomial has exactly one point of inflection.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The graph of $y = x^5$ at $x = 0$ has:",
    options: [
      "A point of inflection",
      "A local maximum",
      "A local minimum",
      "A cusp"
    ],
    correctAnswer: "A point of inflection",
    explanation: "$y' = 5x^4$ and $y'' = 20x^3$. For $x < 0$, $y'' < 0$ (concave down), and for $x > 0$, $y'' > 0$ (concave up). Since the concavity changes at $x = 0$, the origin $(0, 0)$ is a point of inflection.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Let $f(x) = \\ln x$ for $x > 0$. The graph of $f(x)$ is:",
    options: [
      "Concave downwards everywhere on its domain",
      "Concave upwards everywhere on its domain",
      "Concave downwards on $(0, 1)$ and concave upwards on $(1, \\infty)$",
      "Concave upwards on $(0, 1)$ and concave downwards on $(1, \\infty)$"
    ],
    correctAnswer: "Concave downwards everywhere on its domain",
    explanation: "Differentiating: $f'(x) = \\frac{1}{x}$ and $f''(x) = -\\frac{1}{x^2}$. For all $x \\in (0, \\infty)$, $x^2 > 0 \\implies f''(x) = -\\frac{1}{x^2} < 0$. Therefore, $f(x) = \\ln x$ is concave downwards everywhere on its entire domain $(0, \\infty)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason Questions
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f''(c) = 0$, then $(c, f(c))$ is necessarily a point of inflection.\nReason (R): For $f(x) = x^4$, $f''(0) = 0$, but $x = 0$ is a local minimum, not a point of inflection.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false because $f''(c) = 0$ is only a necessary condition for twice-differentiable functions, not a sufficient one; concavity must actually change sign across $c$. Reason (R) is true and provides a classic counterexample: $f(x) = x^4$ has $f''(x) = 12x^2 \\ge 0$ everywhere, so it does not change concavity.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The curve $y = x^3$ has a point of inflection at $(0, 0)$.\nReason (R): The second derivative $y'' = 6x$ changes sign from negative for $x < 0$ to positive for $x > 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For $y = x^3$, $y'' = 6x$. Since $y'' < 0$ for $x < 0$ and $y'' > 0$ for $x > 0$, the concavity flips at $x = 0$. By definition, $(0, 0)$ is a point of inflection. Both statements are true and Reason correctly explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): At a point of inflection of a smooth curve, the tangent line crosses the curve.\nReason (R): As the curve transitions from concave upwards to concave downwards, the curve changes from lying above its tangent to lying below its tangent.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For a concave up curve, the curve lies above its tangent line; for a concave down curve, it lies below. At a point of inflection where concavity changes, the tangent line must cross from one side of the curve to the other. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = e^x$ has no points of inflection on $\\mathbb{R}$.\nReason (R): For all $x \\in \\mathbb{R}$, the second derivative $f''(x) = e^x > 0$, so the curve is concave upwards everywhere.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Since $f''(x) = e^x > 0$ for all real $x$, the concavity is strictly upward everywhere and never changes sign. Thus there are no points of inflection. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Every point of inflection must have a horizontal tangent line.\nReason (R): The point of inflection on $y = x^3 - 3x$ occurs at $(0, 0)$ where the slope of the tangent is $-3 \\ne 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is false but Reason is true",
    explanation: "Assertion (A) is false: a point of inflection requires $y'' = 0$ (or change of concavity), not $y' = 0$. Reason (R) is true and gives an exact counterexample: for $y = x^3 - 3x$, $y'' = 6x = 0$ gives $x = 0$, but the slope is $y'(0) = 3(0) - 3 = -3 \\ne 0$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The curve $y = x^{1/3}$ has a point of inflection at $(0, 0)$.\nReason (R): The concavity changes from concave upwards for $x < 0$ to concave downwards for $x > 0$, even though $y''(0)$ does not exist.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For $y = x^{1/3}$, $y' = \\frac{1}{3}x^{-2/3}$ and $y'' = -\\frac{2}{9}x^{-5/3}$. For $x < 0$, $x^{5/3} < 0 \\implies y'' > 0$ (concave up). For $x > 0$, $x^{5/3} > 0 \\implies y'' < 0$ (concave down). Since concavity changes at $x = 0$ and the curve is continuous with a vertical tangent, $(0, 0)$ is a point of inflection. Both statements are true and Reason explains Assertion.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any cubic polynomial $P(x) = ax^3 + bx^2 + cx + d$ ($a \\ne 0$), the point of inflection is the center of point symmetry of the curve.\nReason (R): Translating the origin to the inflection point $x = -\\frac{b}{3a}$ removes the quadratic term, leaving an odd function plus a constant.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Substituting $x = X - \\frac{b}{3a}$ eliminates the $X^2$ term, so the transformed equation takes the form $Y = aX^3 + pX$, which is an odd function exhibiting point symmetry about $(0, 0)$ (the inflection point). Both statements are true and Reason explains Assertion.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = |x - 1|$ does not have a point of inflection at $x = 1$.\nReason (R): For $x \\ne 1$, the second derivative $f''(x) = 0$, so there is no change in concavity across $x = 1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "The graph of $f(x) = |x - 1|$ consists of two straight rays, both of which have zero curvature and second derivative $0$ on both sides. Since there is no change of concavity, $x = 1$ is not a point of inflection. Both statements are true and Reason correctly explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f''(x) > 0$ for all $x \\in (a, b)$, then the first derivative $f'(x)$ is strictly increasing on $(a, b)$.\nReason (R): A positive derivative of $g(x) = f'(x)$ implies that $g(x)$ is strictly increasing by the monotonicity theorem.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Since $f''(x) = (f')'(x) > 0$, the slope function $f'(x)$ has a strictly positive derivative, which means $f'(x)$ is strictly increasing on $(a, b)$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The curve $y = x^4 - 6x^2$ has two distinct points of inflection.\nReason (R): $y'' = 12(x^2 - 1) = 0$ at $x = \\pm 1$, and $y''$ changes sign across both $x = -1$ and $x = 1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$y' = 4x^3 - 12x$ and $y'' = 12x^2 - 12 = 12(x - 1)(x + 1)$. The roots are $x = \\pm 1$, across which $y''$ changes sign ($+ \\to - \\to +$). Hence both $(1, -5)$ and $(-1, -5)$ are points of inflection. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Value Questions
  {
    questionType: "NUMERICAL",
    question: "Find the $x$-coordinate of the point of inflection of the curve $y = x^3 - 6x^2 + 15x + 3$.",
    correctAnswer: "2",
    explanation: "Differentiating: $y' = 3x^2 - 12x + 15$ and $y'' = 6x - 12$. Setting $y'' = 0 \\implies 6x - 12 = 0 \\implies x = 2$. Since $y''$ changes sign at $x = 2$, the point of inflection occurs at $x = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = 3x^5 - 5x^4 + 2$. Find the number of points of inflection of the curve $y = f(x)$.",
    correctAnswer: "1",
    explanation: "Differentiating: $f'(x) = 15x^4 - 20x^3$ and $f''(x) = 60x^3 - 60x^2 = 60x^2(x - 1)$. The roots of $f''(x) = 0$ are $x = 0$ and $x = 1$. At $x = 0$, $x^2 \\ge 0$, so $f''(x)$ does not change sign across $0$. At $x = 1$, $(x - 1)$ changes sign from negative to positive. Therefore, only $x = 1$ is a point of inflection. There is exactly $1$ point of inflection.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the distance between the two points of inflection of the curve $y = x^4 - 6x^2 + 8$.",
    correctAnswer: "2",
    explanation: "Differentiating: $y' = 4x^3 - 12x$ and $y'' = 12x^2 - 12 = 12(x^2 - 1) = 0 \\implies x = \\pm 1$. At $x = 1$, $y = 1 - 6 + 8 = 3$, point is $(1, 3)$. At $x = -1$, $y = 1 - 6 + 8 = 3$, point is $(-1, 3)$. The distance between $(1, 3)$ and $(-1, 3)$ is $\\sqrt{(1 - (-1))^2 + (3 - 3)^2} = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the value of $k$ such that the curve $y = x^3 + kx^2 + 3x - 5$ has a point of inflection at $x = 3$.",
    correctAnswer: "-9",
    explanation: "Differentiating: $y' = 3x^2 + 2kx + 3$ and $y'' = 6x + 2k$. For a point of inflection at $x = 3$, we must have $y''(3) = 0 \\implies 6(3) + 2k = 0 \\implies 18 + 2k = 0 \\implies 2k = -18 \\implies k = -9$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The curve $y = ax^3 + bx^2$ has a point of inflection at $(1, 2)$. Find the value of $a + b$.",
    correctAnswer: "2",
    explanation: "Since $(1, 2)$ lies on the curve, substituting $x = 1, y = 2$ gives $a(1)^3 + b(1)^2 = 2 \\implies a + b = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "For the function $f(x) = x^4 - 18x^2$, find the sum of the $x$-coordinates of its points of inflection.",
    correctAnswer: "0",
    explanation: "Differentiating: $f'(x) = 4x^3 - 36x$ and $f''(x) = 12x^2 - 36 = 12(x^2 - 3) = 0 \\implies x = \\pm \\sqrt{3}$. The points of inflection occur at $x = \\sqrt{3}$ and $x = -\\sqrt{3}$. Their sum is $\\sqrt{3} + (-\\sqrt{3}) = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the slope of the tangent to the curve $y = 2x^3 - 9x^2 + 12x - 1$ at its point of inflection. If the slope is $m$, enter the value of $2m$.",
    correctAnswer: "-3",
    explanation: "Differentiating: $y' = 6x^2 - 18x + 12$ and $y'' = 12x - 18 = 0 \\implies x = 18/12 = 3/2 = 1.5$. The slope at $x = 3/2$ is $m = y'(3/2) = 6(9/4) - 18(3/2) + 12 = 27/2 - 27 + 12 = 27/2 - 15 = 27/2 - 30/2 = -3/2$. Therefore, $2m = 2(-3/2) = -3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the number of points of inflection of the curve $y = x^2 - 4x + 5$.",
    correctAnswer: "0",
    explanation: "Differentiating: $y' = 2x - 4$ and $y'' = 2$. Since $y'' = 2 > 0$ everywhere, the curve is a parabola concave upwards everywhere with no change of concavity. Hence, the number of points of inflection is $0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the number of inflection points of the function $f(x) = \\cos x$ in the interval $[0, 4\\pi]$.",
    correctAnswer: "4",
    explanation: "Differentiating: $f'(x) = -\\sin x$ and $f''(x) = -\\cos x$. Points of inflection occur where $\\cos x = 0$ and changes sign. In $[0, 4\\pi]$, $\\cos x = 0$ at $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\frac{7\\pi}{2}$. At each of these points, $\\cos x$ changes sign, so each is a valid point of inflection. Thus, there are $4$ such points.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Let $f(x) = x^4 + 2x^3 - 12x^2 + 5x - 1$. Find the product of the $x$-coordinates of the points of inflection of $f(x)$.",
    correctAnswer: "-2",
    explanation: "Differentiating: $f'(x) = 4x^3 + 6x^2 - 24x + 5$ and $f''(x) = 12x^2 + 12x - 24 = 12(x^2 + x - 2) = 12(x + 2)(x - 1) = 0$. The roots are $x = -2$ and $x = 1$. The product of these $x$-coordinates is $(-2)(1) = -2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
