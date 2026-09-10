// scripts/data_jee_quad_subtopic2.js
// Subtopic 2: Discriminant (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    question: "If the discriminant of the quadratic equation $3x^2 + bx + 12 = 0$ is zero, then the possible values of $b$ are:",
    options: [
      "\\pm 12",
      "\\pm 6",
      "\\pm 144",
      "\\pm 24"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The discriminant is $\\Delta = b^2 - 4ac = b^2 - 4(3)(12) = b^2 - 144$.\nSetting $\\Delta = 0 \\implies b^2 = 144 \\implies b = \\pm 12$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the roots of the equation $x^2 + 2cx + ab = 0$ are real and unequal, then the roots of the equation $x^2 - 2(a + b)x + a^2 + b^2 + 2c^2 = 0$ are:",
    options: [
      "Imaginary",
      "Real and equal",
      "Real and unequal",
      "Rational"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For the first equation, roots are real and unequal $\\implies \\Delta_1 = (2c)^2 - 4(1)(ab) > 0 \\implies 4c^2 - 4ab > 0 \\implies c^2 > ab$.\nNow consider the discriminant $\\Delta_2$ of the second equation:\n$\\Delta_2 = [-2(a + b)]^2 - 4(1)(a^2 + b^2 + 2c^2) = 4(a^2 + 2ab + b^2) - 4(a^2 + b^2 + 2c^2) = 8ab - 8c^2 = -8(c^2 - ab)$.\nSince $c^2 - ab > 0$, we have $\\Delta_2 = -8(c^2 - ab) < 0$.\nTherefore, the roots of the second equation are imaginary.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The value of $k$ for which the quadratic polynomial $2x^2 - 8x + k$ is a perfect square of a linear binomial is:",
    options: [
      "8",
      "16",
      "4",
      "32"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A quadratic polynomial $ax^2 + bx + c$ can be expressed as a perfect square of a linear polynomial if and only if its discriminant is zero:\n$\\Delta = b^2 - 4ac = (-8)^2 - 4(2)(k) = 0 \\implies 64 - 8k = 0 \\implies k = 8$.\nWhen $k = 8$, $2x^2 - 8x + 8 = 2(x^2 - 4x + 4) = 2(x - 2)^2 = [\\sqrt{2}(x - 2)]^2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the roots of the equation $a x^2 + 2 b x + c = 0$ and $b x^2 - 2\\sqrt{ac} x + b = 0$ are simultaneously real, then:",
    options: [
      "b^2 = ac",
      "b^2 > ac",
      "b^2 < ac",
      "b = ac"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For the first equation to have real roots: $\\Delta_1 = 4b^2 - 4ac \\ge 0 \\implies b^2 \\ge ac$.\nFor the second equation to have real roots: $\\Delta_2 = 4ac - 4b^2 \\ge 0 \\implies ac \\ge b^2$.\nSince both must hold simultaneously, we must have $b^2 = ac$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If the discriminant of the quadratic equation $(m - 2)x^2 - (m - 4)x - 2 = 0$ is denoted by $\\Delta$, then $\\Delta$ is equal to:",
    options: [
      "m^2",
      "(m - 2)^2",
      "(m + 2)^2",
      "m^2 + 16"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Here $a = m - 2, b = -(m - 4), c = -2$.\n$\\Delta = b^2 - 4ac = [-(m - 4)]^2 - 4(m - 2)(-2) = (m^2 - 8m + 16) + 8(m - 2) = m^2 - 8m + 16 + 8m - 16 = m^2$.\nHence, $\\Delta = m^2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the discriminant of $x^2 + px + q = 0$ is positive, then the discriminant of $x^2 + px - q = 0$:",
    options: [
      "Must be positive if q < 0",
      "Must be negative",
      "Is always 0",
      "Cannot be determined without knowing p"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $\\Delta_1 = p^2 - 4q > 0$. The discriminant of the second equation is $\\Delta_2 = p^2 - 4(-q) = p^2 + 4q$.\nIf $q < 0$, then $-4q > 0$ and $4q < 0$, so $\\Delta_1 > 0$ holds automatically for all $p$. But wait, if $q < 0$, $\\Delta_1 = p^2 - 4q > 0$ is always positive! And what about $\\Delta_1 + \\Delta_2$? $\\Delta_1 + \\Delta_2 = 2p^2 \\ge 0$. Since $\\Delta_1 + \\Delta_2 \\ge 0$, at least one of $\\Delta_1, \\Delta_2$ must be non-negative. If $q < 0$, then $p^2 - 4q > 0$. If $q > 0$, then $\\Delta_2 = p^2 + 4q > 0$. Thus, at least one of the two equations always has real roots!",
    question: "If $\\Delta_1$ is the discriminant of $x^2 + px + q = 0$ and $\\Delta_2$ is the discriminant of $x^2 + px - q = 0$ with $p, q \\in \\mathbb{R}$, then:",
    options: [
      "At least one of \\Delta_1 or \\Delta_2 must be non-negative",
      "Both \\Delta_1 and \\Delta_2 must be positive",
      "Both \\Delta_1 and \\Delta_2 must be negative",
      "\\Delta_1 \\Delta_2 \\ge 0 always"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\Delta_1 = p^2 - 4q$ and $\\Delta_2 = p^2 + 4q$.\nSum $\\Delta_1 + \\Delta_2 = 2p^2 \\ge 0$.\nSince the sum of two real numbers is non-negative, at least one of them must be greater than or equal to 0. Hence, at least one of the two equations must have real roots.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The value of $c$ for which the discriminant of $x^2 - 8x + c = 0$ is equal to 36 is:",
    options: [
      "7",
      "16",
      "28",
      "14"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\Delta = (-8)^2 - 4(1)(c) = 64 - 4c = 36$.\n$4c = 64 - 36 = 28 \\implies c = 7$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $a, b, c$ are real numbers such that $b^2 - 4ac < 0$ and $a > 0$, then for all $x \\in \\mathbb{R}$, the expression $ax^2 + bx + c$ is:",
    options: [
      "Strictly positive",
      "Strictly negative",
      "Non-negative but can be zero",
      "Equal to zero for some x"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Completing the square: $ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\frac{4ac - b^2}{4a} = a\\left(x + \\frac{b}{2a}\\right)^2 + \\frac{-\\Delta}{4a}$.\nSince $a > 0$ and $\\Delta < 0$, $-\\Delta > 0$, so $\\frac{-\\Delta}{4a} > 0$.\nSince the squared term is $\\ge 0$, the expression is strictly positive for all $x \\in \\mathbb{R}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the equation $x^2 + 2(k + 2)x + 9k = 0$ has equal roots, then the sum of all possible values of $k$ is:",
    options: [
      "5",
      "4",
      "9",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For equal roots, $\\Delta = 0$:\n$[2(k + 2)]^2 - 4(1)(9k) = 0$.\n$4(k^2 + 4k + 4) - 36k = 0 \\implies 4k^2 + 16k + 16 - 36k = 0$.\n$4k^2 - 20k + 16 = 0 \\implies k^2 - 5k + 4 = 0$.\nThe sum of all possible values of $k$ is $5$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The discriminant of the equation $\\sqrt{2}x^2 + 7x + 5\\sqrt{2} = 0$ is:",
    options: [
      "9",
      "1",
      "49",
      "29"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\Delta = b^2 - 4ac = 7^2 - 4(\\sqrt{2})(5\\sqrt{2}) = 49 - 4(10) = 49 - 40 = 9$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The discriminant of $x^2 - 6x + 9 = 0$ is 0.\nReason (R): When a quadratic equation represents a perfect square $(x - \\alpha)^2 = 0$, its discriminant is always zero.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$x^2 - 6x + 9 = (x - 3)^2 = 0$. The discriminant is $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $a, b, c \\in \\mathbb{R}$ and $ac < 0$, then the roots of $ax^2 + bx + c = 0$ are always real and distinct.\nReason (R): Since $ac < 0$, $-4ac > 0$, so the discriminant $\\Delta = b^2 - 4ac \\ge -4ac > 0$ for all real $b$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For any real $b$, $b^2 \\ge 0$. When $ac < 0$, $-4ac > 0$. Thus $\\Delta = b^2 - 4ac > 0$, guaranteeing two distinct real roots. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equation $(x^2 + 1)^2 - x^2 = 0$ has 4 real roots.\nReason (R): Setting $y = x^2$, the equation becomes $y^2 + y + 1 = 0$, whose discriminant is $\\Delta = 1 - 4 = -3 < 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Expanding: $(x^2 + 1)^2 - x^2 = x^4 + 2x^2 + 1 - x^2 = x^4 + x^2 + 1 = 0$. With $y = x^2$, $y^2 + y + 1 = 0$. The roots of this quadratic in $y$ have discriminant $\\Delta = -3 < 0$, so $y$ is non-real. Thus there are NO real roots for $x$. Assertion (A) is false and Reason (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the roots of $x^2 - kx + 4 = 0$ are equal, then $k = 4$ or $k = -4$.\nReason (R): The condition for equal roots of $ax^2 + bx + c = 0$ is $\\Delta = b^2 - 4ac = 0$, which yields $k^2 - 16 = 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$\\Delta = (-k)^2 - 4(1)(4) = k^2 - 16 = 0 \\implies k = \\pm 4$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $a, b, c \\in \\mathbb{R}$ such that $a + c = b$, then the roots of $ax^2 + bx + c = 0$ are rational if $a, b, c \\in \\mathbb{Q}$.\nReason (R): The discriminant is $\\Delta = b^2 - 4ac = (a + c)^2 - 4ac = (a - c)^2$, which is a perfect square.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Substituting $b = a + c$ into $\\Delta = b^2 - 4ac$ gives $(a + c)^2 - 4ac = (a - c)^2$. For rational $a, c$, $(a - c)^2$ is the square of a rational number, so $\\sqrt{\\Delta} = |a - c|$ is rational. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equation $(x - 1)(x - 3) + \\lambda (x - 2)(x - 4) = 0$ has real roots for all real values of $\\lambda$.\nReason (R): Between any two consecutive roots of $(x - 1)(x - 3) = 0$, the signs of $(x - 2)(x - 4)$ are different, causing the polynomial to change sign.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Let $f(x) = (x - 1)(x - 3) + \\lambda(x - 2)(x - 4)$.\nAt $x = 2$, $f(2) = (1)(-1) + 0 = -1 < 0$.\nAt $x = 4$, $f(4) = (3)(1) + 0 = 3 > 0$.\nSince $f(x)$ is continuous and $f(2) < 0$ while $f(4) > 0$, by the Intermediate Value Theorem, $f(x) = 0$ has at least one real root in $(2, 4)$ for every real $\\lambda$. Since it is a quadratic equation, complex roots must come in conjugate pairs, so having at least one real root implies both roots must be real. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The discriminant of $2x^2 - 4x + 5 = 0$ is negative.\nReason (R): For $2x^2 - 4x + 5 = 0$, $\\Delta = (-4)^2 - 4(2)(5) = 16 - 40 = -24 < 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Direct calculation gives $\\Delta = 16 - 40 = -24 < 0$. Both (A) and (R) are true and (R) is the correct calculation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the roots of $ax^2 + bx + c = 0$ are in the ratio $1 : r$, then $\\frac{(r + 1)^2}{r} = \\frac{b^2}{ac}$.\nReason (R): Let the roots be $\\alpha$ and $r\\alpha$. Then $\\alpha(1 + r) = -\\frac{b}{a}$ and $r\\alpha^2 = \\frac{c}{a}$, so dividing the square of the first by the second yields $\\frac{(r + 1)^2}{r} = \\frac{b^2}{ac}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "If the roots are $\\alpha, r\\alpha$, then $\\alpha(1+r) = -b/a \\implies \\alpha^2(1+r)^2 = b^2/a^2$. Also $r\\alpha^2 = c/a$. Dividing gives $\\frac{(1+r)^2}{r} = \\frac{b^2/a^2}{c/a} = \\frac{b^2}{ac}$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any real $x$, the quadratic expression $x^2 + 2x + 3$ cannot be less than 2.\nReason (R): The minimum value of $ax^2 + bx + c$ with $a > 0$ is $-\\frac{\\Delta}{4a}$, and here $-\\frac{\\Delta}{4a} = -\\frac{4 - 12}{4} = 2$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$x^2 + 2x + 3 = (x + 1)^2 + 2 \\ge 2$. Using the vertex formula $-\\frac{\\Delta}{4a} = -\\frac{-8}{4} = 2$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the equation $x^2 - 2x + k = 0$ has real roots, then $k \\le 1$.\nReason (R): The discriminant must be non-negative for real roots: $\\Delta = 4 - 4k \\ge 0 \\implies 4k \\le 4 \\implies k \\le 1$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$\\Delta = (-2)^2 - 4(1)(k) = 4 - 4k \\ge 0 \\implies k \\le 1$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "Find the value of the discriminant for the equation $4x^2 - 12x + 9 = 0$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "$\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the discriminant of the equation $x^2 - kx + 25 = 0$ is 0, find the positive value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 10,
    type: "numerical",
    solution: "$\\Delta = k^2 - 4(1)(25) = k^2 - 100 = 0 \\implies k = 10$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The discriminant of $2x^2 + 5x - 3 = 0$ is:",
    options: [],
    correctOption: null,
    correctAnswer: 49,
    type: "numerical",
    solution: "$\\Delta = 5^2 - 4(2)(-3) = 25 + 24 = 49$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the sum of all values of $k$ for which the discriminant of $(k - 1)x^2 - 2kx + (k + 2) = 0$ is equal to 0.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "$\\Delta = (-2k)^2 - 4(k - 1)(k + 2) = 4k^2 - 4(k^2 + k - 2) = 4k^2 - 4k^2 - 4k + 8 = -4k + 8$.\nSetting $\\Delta = 0 \\implies -4k + 8 = 0 \\implies k = 2$.\nThe sum of all such values is 2.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the discriminant of the quadratic equation $3x^2 - 2\\sqrt{6}x + 2 = 0$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "$\\Delta = (-2\\sqrt{6})^2 - 4(3)(2) = 24 - 24 = 0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the equation $x^2 - 2px + (p^2 - 2p + 6) = 0$ has real roots, find the minimum possible value of $p$.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "For real roots, $\\Delta \\ge 0$:\n$\\Delta = 4p^2 - 4(p^2 - 2p + 6) = 4p^2 - 4p^2 + 8p - 24 = 8p - 24 \\ge 0$.\n$8p \\ge 24 \\implies p \\ge 3$.\nThe minimum value of $p$ is 3.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of integral values of $m$ in the interval $[-5, 5]$ for which the quadratic equation $x^2 + 2mx + (m^2 - m + 2) = 0$ has no real roots.",
    options: [],
    correctOption: null,
    correctAnswer: 7,
    type: "numerical",
    solution: "For no real roots, $\\Delta < 0$:\n$\\Delta = (2m)^2 - 4(1)(m^2 - m + 2) = 4m^2 - 4m^2 + 4m - 8 = 4m - 8 < 0 \\implies m < 2$.\nIn the interval $[-5, 5]$, the integers strictly less than 2 are $\\{-5, -4, -3, -2, -1, 0, 1\\}$.\nThe count of such integers is 7.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the discriminant of $x^2 + ax + 1 = 0$ is 12, find the value of $a^2$.",
    options: [],
    correctOption: null,
    correctAnswer: 16,
    type: "numerical",
    solution: "$\\Delta = a^2 - 4(1)(1) = a^2 - 4 = 12 \\implies a^2 = 16$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For what value of $c$ will the equation $5x^2 - 20x + c = 0$ have a discriminant equal to zero?",
    options: [],
    correctOption: null,
    correctAnswer: 20,
    type: "numerical",
    solution: "$\\Delta = (-20)^2 - 4(5)(c) = 400 - 20c = 0 \\implies 20c = 400 \\implies c = 20$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the discriminant of $kx^2 - 6x + 1 = 0$ is 16, find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 5,
    type: "numerical",
    solution: "$\\Delta = (-6)^2 - 4(k)(1) = 36 - 4k = 16 \\implies 4k = 36 - 16 = 20 \\implies k = 5$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic2Questions };
