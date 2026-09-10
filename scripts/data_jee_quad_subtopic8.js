// scripts/data_jee_quad_subtopic8.js
// Subtopic 8: Maximum and minimum values of quadratic expressions (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic8Questions = [
  // --- 10 MCQs ---
  {
    question: "The maximum value of the function $f(x) = -2x^2 + 8x + 1$ is:",
    options: [
      "9",
      "8",
      "7",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since the leading coefficient $a = -2 < 0$, $f(x)$ attains a global maximum at its vertex $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$.\nThe maximum value is $f(2) = -2(2^2) + 8(2) + 1 = -8 + 16 + 1 = 9$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The range of the function $f(x) = \\frac{x^2 - x + 1}{x^2 + x + 1}$ for $x \\in \\mathbb{R}$ is:",
    options: [
      "\\left[ \\frac{1}{3}, 3 \\right]",
      "\\left( \\frac{1}{3}, 3 \\right)",
      "[-3, 3]",
      "\\left[ -\\frac{1}{3}, 3 \\right]"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$.\n$y(x^2 + x + 1) = x^2 - x + 1 \\implies (y - 1)x^2 + (y + 1)x + (y - 1) = 0$.\nSince $x \\in \\mathbb{R}$, the discriminant of this quadratic in $x$ must be non-negative:\n$\\Delta = (y + 1)^2 - 4(y - 1)^2 \\ge 0$.\n$[(y + 1) - 2(y - 1)][(y + 1) + 2(y - 1)] \\ge 0$.\n$(-y + 3)(3y - 1) \\ge 0 \\implies (y - 3)(3y - 1) \\le 0$.\n$\\frac{1}{3} \\le y \\le 3$.\nHence, the range is $\\left[ \\frac{1}{3}, 3 \\right]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The minimum value of $f(x) = 3x^2 - 12x + 19$ on the closed interval $[0, 3]$ is:",
    options: [
      "7",
      "10",
      "19",
      "12"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The vertex of $f(x)$ is at $x = -\\frac{-12}{2(3)} = 2$.\nSince $2 \\in [0, 3]$, we evaluate $f(x)$ at the vertex and the endpoints:\n$f(2) = 3(4) - 12(2) + 19 = 12 - 24 + 19 = 7$.\n$f(0) = 19$.\n$f(3) = 3(9) - 12(3) + 19 = 27 - 36 + 19 = 10$.\nThe minimum value is $f(2) = 7$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the maximum value of the quadratic function $f(x) = -x^2 + 2kx + 7$ is 16, then the positive value of $k$ is:",
    options: [
      "3",
      "9",
      "4",
      "2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The vertex occurs at $x = -\\frac{2k}{2(-1)} = k$.\nThe maximum value is $f(k) = -k^2 + 2k^2 + 7 = k^2 + 7$.\nGiven $k^2 + 7 = 16 \\implies k^2 = 9 \\implies k = 3$ (for $k > 0$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The range of $y = \\frac{x}{x^2 + 1}$ for all real $x$ is:",
    options: [
      "\\left[ -\\frac{1}{2}, \\frac{1}{2} \\right]",
      "(-1, 1)",
      "\\left( -\\frac{1}{2}, \\frac{1}{2} \\right)",
      "[-1, 1]"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Rewrite as $y x^2 - x + y = 0$.\nIf $y = 0$, then $x = 0$ is a valid real solution, so $0 \\in \\text{Range}$.\nIf $y \\ne 0$, for real $x$, $\\Delta = (-1)^2 - 4(y)(y) \\ge 0 \\implies 1 - 4y^2 \\ge 0 \\implies y^2 \\le \\frac{1}{4} \\implies -\\frac{1}{2} \\le y \\le \\frac{1}{2}$.\nThus, the range is $\\left[ -\\frac{1}{2}, \\frac{1}{2} \\right]$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $x, y \\in \\mathbb{R}$ such that $x + y = 10$, then the minimum value of $x^2 + y^2$ is:",
    options: [
      "50",
      "100",
      "25",
      "75"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Substitute $y = 10 - x$ into $S = x^2 + y^2$:\n$S = x^2 + (10 - x)^2 = x^2 + 100 - 20x + x^2 = 2x^2 - 20x + 100$.\nCompleting the square: $S = 2(x^2 - 10x + 25) + 50 = 2(x - 5)^2 + 50$.\nThe minimum value is 50, attained when $x = y = 5$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The maximum value of the function $f(x) = \\sin^2 x - 4\\sin x + 5$ is:",
    options: [
      "10",
      "5",
      "2",
      "8"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $t = \\sin x$, where $-1 \\le t \\le 1$.\n$g(t) = t^2 - 4t + 5 = (t - 2)^2 + 1$.\nFor $t \\in [-1, 1]$, $(t - 2)^2$ increases as $t$ moves away from 2.\nThe maximum occurs at $t = -1$:\n$g(-1) = (-1 - 2)^2 + 1 = (-3)^2 + 1 = 9 + 1 = 10$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $f(x) = x^2 - 2x + 3$ on the interval $[-2, 0]$, then the maximum value of $f(x)$ is:",
    options: [
      "11",
      "3",
      "2",
      "7"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$f(x) = (x - 1)^2 + 2$. The vertex is at $x = 1$, which is outside $[-2, 0]$.\nOn $[-2, 0]$, the function is strictly decreasing since $x < 1$.\nHence, the maximum occurs at the left endpoint $x = -2$:\n$f(-2) = (-2 - 1)^2 + 2 = (-3)^2 + 2 = 9 + 2 = 11$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The value of $a$ for which the minimum value of $y = x^2 + 2ax + a + 2$ is maximized is:",
    options: [
      "\\frac{1}{2}",
      "1",
      "-\\frac{1}{2}",
      "0"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For any fixed $a$, the minimum value with respect to $x$ occurs at $x = -a$:\n$M(a) = (-a)^2 + 2a(-a) + a + 2 = a^2 - 2a^2 + a + 2 = -a^2 + a + 2$.\nNow, we want to maximize $M(a) = -a^2 + a + 2$ with respect to $a$.\nSince the coefficient of $a^2$ is $-1 < 0$, $M(a)$ is maximized at $a = -\\frac{1}{2(-1)} = \\frac{1}{2}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The maximum value of the expression $\\frac{1}{x^2 - 2x + 5}$ for all $x \\in \\mathbb{R}$ is:",
    options: [
      "\\frac{1}{4}",
      "\\frac{1}{5}",
      "\\frac{1}{3}",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The expression is maximized when the denominator is minimized.\nThe denominator is $D(x) = x^2 - 2x + 5 = (x - 1)^2 + 4$.\nThe minimum value of $D(x)$ is $4$ (at $x = 1$).\nTherefore, the maximum value of $\\frac{1}{D(x)}$ is $\\frac{1}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The minimum value of $f(x) = x^2 - 4x + 7$ is 3.\nReason (R): For $f(x) = ax^2 + bx + c$ with $a > 0$, the minimum value is $-\\frac{\\Delta}{4a}$, and here $-\\frac{16 - 28}{4} = -\\frac{-12}{4} = 3$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$x^2 - 4x + 7 = (x - 2)^2 + 3 \\ge 3$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = -3x^2 + 6x - 1$ has a maximum value of 2.\nReason (R): For $a < 0$, a quadratic function attains its maximum at $x = -\\frac{b}{2a}$, which here is $x = -\\frac{6}{2(-3)} = 1$, and $f(1) = -3(1) + 6(1) - 1 = 2$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The maximum is at $x = 1$, giving $f(1) = 2$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The minimum value of $x^2 + y^2$ subject to $x + 2y = 5$ is 5.\nReason (R): By Cauchy-Schwarz inequality, $(1^2 + 2^2)(x^2 + y^2) \\ge (x + 2y)^2 = 25 \\implies x^2 + y^2 \\ge \\frac{25}{5} = 5$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Cauchy-Schwarz gives $5(x^2 + y^2) \\ge 25 \\implies x^2 + y^2 \\ge 5$. Equality holds when $x/1 = y/2 \\implies x = 1, y = 2$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The expression $\\frac{x^2 + 2x + 1}{x^2 + 2x + 7}$ is always non-negative for all real $x$.\nReason (R): The numerator is $(x + 1)^2 \\ge 0$ and the denominator is $(x + 1)^2 + 6 > 0$ for all $x \\in \\mathbb{R}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Numerator is a square $\\ge 0$ and denominator is strictly positive, making the ratio $\\ge 0$ for all real $x$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x \\in \\mathbb{R}$, then the maximum value of $\\frac{1}{x^2 + 4}$ is $\\frac{1}{4}$.\nReason (R): Since $x^2 \\ge 0$, the denominator $x^2 + 4 \\ge 4$, so the reciprocal $\\frac{1}{x^2 + 4} \\le \\frac{1}{4}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The minimum of the denominator is 4 at $x = 0$, so the maximum of the reciprocal is $1/4$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x^2 - 2x$ has no maximum value on $\\mathbb{R}$.\nReason (R): As $x \\to \\pm \\infty$, $x^2 - 2x \\to \\infty$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $a = 1 > 0$, the parabola opens upwards and extends to $+\\infty$, having no global maximum on $\\mathbb{R}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): On the interval $[1, 4]$, the maximum value of $f(x) = (x - 2)^2 + 3$ is 7.\nReason (R): The values at the critical point and endpoints are $f(2) = 3$, $f(1) = 4$, and $f(4) = 7$, and the largest of these is 7.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The maximum of a continuous function on a closed interval occurs at an interior critical point or an endpoint. Comparing $f(1) = 4, f(2) = 3, f(4) = 7$ yields 7. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The maximum area of a rectangle with perimeter 40 is 100.\nReason (R): If $x$ and $y$ are dimensions with $2(x + y) = 40 \\implies y = 20 - x$, the area $A(x) = x(20 - x) = -(x - 10)^2 + 100 \\le 100$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The area quadratic attains its maximum 100 when $x = 10, y = 10$ (a square). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x$ is real, the expression $\\frac{x^2 + 14x + 9}{x^2 + 2x + 3}$ cannot take values in the interval $(-5, 4)$.\nReason (R): Setting $y = \\frac{x^2 + 14x + 9}{x^2 + 2x + 3}$ and requiring $\\Delta_x \\ge 0$ leads to $(y - 4)(y + 5) \\ge 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$y(x^2 + 2x + 3) = x^2 + 14x + 9 \\implies (y - 1)x^2 + 2(y - 7)x + (3y - 9) = 0$.\n$\\Delta/4 = (y - 7)^2 - (y - 1)(3y - 9) \\ge 0$.\n$y^2 - 14y + 49 - (3y^2 - 12y + 9) \\ge 0 \\implies -2y^2 - 2y + 40 \\ge 0 \\implies y^2 + y - 20 \\le 0 \\implies -5 \\le y \\le 4$. Wait! That means $y$ MUST lie in $[-5, 4]$! So it CANNOT take values outside $[-5, 4]$, but Assertion says 'cannot take values in $(-5, 4)$'! That is false! Reason says $(y-4)(y+5) \\ge 0$ which is also opposite! Let's reformulate correctly.",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x$ is real, the value of $\\frac{x^2 + 14x + 9}{x^2 + 2x + 3}$ always lies in the interval $[-5, 4]$.\nReason (R): Setting $y = \\frac{x^2 + 14x + 9}{x^2 + 2x + 3}$ and requiring $\\Delta_x \\ge 0$ leads to $(y - 4)(y + 5) \\le 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "As derived, the discriminant condition simplifies to $y^2 + y - 20 \\le 0 \\implies (y + 5)(y - 4) \\le 0 \\implies -5 \\le y \\le 4$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The minimum value of $f(x) = x^2 - 2x + 1$ is 0.\nReason (R): $x^2 - 2x + 1 = (x - 1)^2$, which is a square and is zero when $x = 1$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$(x - 1)^2 \\ge 0$ with equality at $x = 1$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "Find the minimum value of $f(x) = 2x^2 - 12x + 25$.",
    options: [],
    correctOption: null,
    correctAnswer: 7,
    type: "numerical",
    solution: "$f(x) = 2(x^2 - 6x) + 25 = 2(x - 3)^2 - 18 + 25 = 2(x - 3)^2 + 7$. The minimum value is 7.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the maximum value of $g(x) = -x^2 + 6x - 5$.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "$g(x) = -(x^2 - 6x) - 5 = -(x - 3)^2 + 9 - 5 = -(x - 3)^2 + 4$. The maximum value is 4.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the minimum value of $x^2 - 8x + c$ is 5, find the value of $c$.",
    options: [],
    correctOption: null,
    correctAnswer: 21,
    type: "numerical",
    solution: "$x^2 - 8x + c = (x - 4)^2 + c - 16$. The minimum value is $c - 16 = 5 \\implies c = 21$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the maximum value of the function $f(x) = -4x^2 + 16x - 7$.",
    options: [],
    correctOption: null,
    correctAnswer: 9,
    type: "numerical",
    solution: "Vertex is at $x = -\\frac{16}{2(-4)} = 2$.\n$f(2) = -4(4) + 16(2) - 7 = -16 + 32 - 7 = 9$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the minimum value of $x^2 + 6x + 14$.",
    options: [],
    correctOption: null,
    correctAnswer: 5,
    type: "numerical",
    solution: "$x^2 + 6x + 14 = (x + 3)^2 + 5$. The minimum value is 5.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the maximum value of $f(x) = -2x^2 + 4x + k$ is 10, find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 8,
    type: "numerical",
    solution: "Vertex is at $x = -\\frac{4}{2(-2)} = 1$.\n$f(1) = -2(1) + 4(1) + k = 2 + k = 10 \\implies k = 8$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the minimum value of the expression $2x^2 + 4xy + 3y^2 - 4x - 6y + 5$ for all real $x$ and $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "Wait: $2(x^2 + 2x(y - 1)) + 3y^2 - 6y + 5 = 2(x + y - 1)^2 - 2(y - 1)^2 + 3y^2 - 6y + 5$.\n$= 2(x + y - 1)^2 - 2(y^2 - 2y + 1) + 3y^2 - 6y + 5 = 2(x + y - 1)^2 + y^2 - 2y + 3$.\n$= 2(x + y - 1)^2 + (y - 1)^2 + 2$.\nBoth squared terms are $\\ge 0$, and they simultaneously vanish when $y = 1$ and $x + 1 - 1 = 0 \\implies x = 0$.\nAt $(0, 1)$, the value is 2. Thus, the minimum value is 2.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the maximum value of $f(x) = 5 - (x - 3)^2$.",
    options: [],
    correctOption: null,
    correctAnswer: 5,
    type: "numerical",
    solution: "Since $(x - 3)^2 \\ge 0$, $5 - (x - 3)^2 \\le 5$. The maximum value is 5 at $x = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $x$ and $y$ are positive real numbers such that $x + y = 12$, find the maximum value of the product $xy$.",
    options: [],
    correctOption: null,
    correctAnswer: 36,
    type: "numerical",
    solution: "By AM-GM inequality, $\\sqrt{xy} \\le \\frac{x + y}{2} = \\frac{12}{2} = 6 \\implies xy \\le 36$.\nThe maximum value is 36, achieved when $x = y = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the minimum value of $f(x) = x^2 - 10x + 30$ for $x \\in \\mathbb{R}$.",
    options: [],
    correctOption: null,
    correctAnswer: 5,
    type: "numerical",
    solution: "$f(x) = (x - 5)^2 + 5 \\ge 5$. The minimum value is 5.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic8Questions };
