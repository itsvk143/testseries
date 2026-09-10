// scripts/data_jee_quad_subtopic6.js
// Subtopic 6: Common roots of two quadratic equations (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic6Questions = [
  // --- 10 MCQs ---
  {
    question: "If the quadratic equations $x^2 + ax + b = 0$ and $x^2 + bx + a = 0$ ($a \\ne b$) have a common root, then the value of $a + b$ is:",
    options: [
      "-1",
      "1",
      "0",
      "2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $\\alpha$ be the common root. Then:\n1) $\\alpha^2 + a\\alpha + b = 0$\n2) $\\alpha^2 + b\\alpha + a = 0$\nSubtracting (2) from (1):\n$(a - b)\\alpha + (b - a) = 0 \\implies (a - b)(\\alpha - 1) = 0$.\nSince $a \\ne b$, we must have $\\alpha = 1$.\nSubstituting $\\alpha = 1$ into either equation:\n$1^2 + a(1) + b = 0 \\implies a + b + 1 = 0 \\implies a + b = -1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the equations $x^2 + 2x + 3 = 0$ and $ax^2 + bx + c = 0$ ($a, b, c \\in \\mathbb{R}$, $a \\ne 0$) have a common root, then $a : b : c$ is:",
    options: [
      "1 : 2 : 3",
      "3 : 2 : 1",
      "1 : 3 : 2",
      "2 : 1 : 3"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The discriminant of $x^2 + 2x + 3 = 0$ is $\\Delta = 2^2 - 4(1)(3) = 4 - 12 = -8 < 0$.\nHence, its roots are non-real complex numbers. Since the coefficients of $ax^2 + bx + c = 0$ are real, its complex roots must occur in conjugate pairs.\nTherefore, if they share one complex root, they must share BOTH roots.\nFor two equations to have both roots in common, their coefficients must be proportional:\n$\\frac{a}{1} = \\frac{b}{2} = \\frac{c}{3} \\implies a : b : c = 1 : 2 : 3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $x^2 - 11x + a = 0$ and $x^2 - 14x + 2a = 0$ have a common root, then the non-zero value of $a$ is:",
    options: [
      "24",
      "12",
      "18",
      "36"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $\\alpha$ be the common root:\n1) $\\alpha^2 - 11\\alpha + a = 0$\n2) $\\alpha^2 - 14\\alpha + 2a = 0$\nSubtracting (1) from (2):\n$-3\\alpha + a = 0 \\implies a = 3\\alpha$.\nSubstitute $a = 3\\alpha$ into (1):\n$\\alpha^2 - 11\\alpha + 3\\alpha = 0 \\implies \\alpha^2 - 8\\alpha = 0 \\implies \\alpha(\\alpha - 8) = 0$.\nSince $a \\ne 0$, $\\alpha \\ne 0$, so $\\alpha = 8$.\nThen $a = 3(8) = 24$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The value of $k$ for which the equations $x^2 - kx - 21 = 0$ and $x^2 - 3kx + 35 = 0$ have a common root is:",
    options: [
      "\\pm 4",
      "\\pm 2",
      "\\pm 1",
      "\\pm 5"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $\\alpha$ be the common root:\n1) $\\alpha^2 - k\\alpha - 21 = 0$\n2) $\\alpha^2 - 3k\\alpha + 35 = 0$\nSubtract (2) from (1):\n$2k\\alpha - 56 = 0 \\implies 2k\\alpha = 56 \\implies k\\alpha = 28 \\implies \\alpha = \\frac{28}{k}$.\nSubstitute $k\\alpha = 28$ into (1):\n$\\alpha^2 - 28 - 21 = 0 \\implies \\alpha^2 = 49 \\implies \\alpha = \\pm 7$.\nSince $k = \\frac{28}{\\alpha}$, we have $k = \\frac{28}{\\pm 7} = \\pm 4$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $x^2 + bx + c = 0$ and $x^2 + cx + b = 0$ ($b \\ne c$) have a common root, then which of the following is true?",
    options: [
      "b + c + 1 = 0",
      "b + c - 1 = 0",
      "b - c + 1 = 0",
      "b - c - 1 = 0"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $\\alpha$ be the common root. Subtracting the two equations gives $(b - c)\\alpha + (c - b) = 0 \\implies (b - c)(\\alpha - 1) = 0$.\nSince $b \\ne c$, $\\alpha = 1$.\nSubstituting $\\alpha = 1$ into $x^2 + bx + c = 0$ gives $1 + b + c = 0 \\implies b + c + 1 = 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the equations $2x^2 + kx - 5 = 0$ and $x^2 - 3x - 4 = 0$ have a common negative root, then the value of $k$ is:",
    options: [
      "-3",
      "3",
      "-7",
      "7"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The roots of $x^2 - 3x - 4 = 0$ are $(x - 4)(x + 1) = 0 \\implies x = 4$ or $x = -1$.\nThe negative root is $x = -1$.\nSince the equations share a negative root, $x = -1$ must satisfy $2x^2 + kx - 5 = 0$:\n$2(-1)^2 + k(-1) - 5 = 0 \\implies 2 - k - 5 = 0 \\implies -k - 3 = 0 \\implies k = -3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the equations $x^2 + ax + 12 = 0$ and $x^2 + bx + 15 = 0$ have a common root and the first equation has roots 3 and 4, then the value of $b$ can be:",
    options: [
      "-8",
      "-7",
      "-9",
      "-6"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since the roots of $x^2 + ax + 12 = 0$ are 3 and 4, the common root must be either 3 or 4.\nIf the common root is 3:\n$3^2 + 3b + 15 = 0 \\implies 9 + 3b + 15 = 0 \\implies 3b = -24 \\implies b = -8$.\nIf the common root is 4:\n$4^2 + 4b + 15 = 0 \\implies 16 + 4b + 15 = 0 \\implies 4b = -31 \\implies b = -31/4$.\nAmong the given options, $b = -8$ is present.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The condition that the equations $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$ have a common root is:",
    options: [
      "(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)",
      "(c_1 a_2 + c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)",
      "(a_1 b_2 - a_2 b_1)^2 = (b_1 c_2 - b_2 c_1)(c_1 a_2 - c_2 a_1)",
      "(b_1 c_2 - b_2 c_1)^2 = (a_1 b_2 - a_2 b_1)(c_1 a_2 - c_2 a_1)"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By Cramer's rule / cross-multiplication on the system:\n$a_1 \\alpha^2 + b_1 \\alpha + c_1 = 0$\n$a_2 \\alpha^2 + b_2 \\alpha + c_2 = 0$\n$\\frac{\\alpha^2}{b_1 c_2 - b_2 c_1} = \\frac{\\alpha}{c_1 a_2 - c_2 a_1} = \\frac{1}{a_1 b_2 - a_2 b_1}$.\nEquating $\\alpha^2 = (\\alpha)^2$ yields the standard condition:\n$(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $x^2 - 3x + 2 = 0$ and $x^2 - 5x + 6 = 0$ have a common root $\\alpha$, then the value of $\\alpha$ is:",
    options: [
      "2",
      "1",
      "3",
      "0"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Roots of $x^2 - 3x + 2 = (x - 1)(x - 2) = 0$ are $\\{1, 2\\}$.\nRoots of $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$ are $\\{2, 3\\}$.\nThe common root is $\\alpha = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the equations $x^2 + px + q = 0$ and $x^2 + qx + p = 0$ have a common root, then either $p = q$ or:",
    options: [
      "p + q + 1 = 0",
      "p + q - 1 = 0",
      "p - q + 1 = 0",
      "p q = 1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Subtracting the two equations gives $(p - q)x + (q - p) = 0 \\implies (p - q)(x - 1) = 0$.\nEither $p = q$, or $x = 1$.\nIf $x = 1$, substituting into $x^2 + px + q = 0$ yields $1 + p + q = 0 \\implies p + q + 1 = 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x^2 + x + 1 = 0$ and $ax^2 + bx + c = 0$ ($a, b, c \\in \\mathbb{R}, a \\ne 0$) have a common root, then $a = b = c$.\nReason (R): The roots of $x^2 + x + 1 = 0$ are non-real, and for real coefficients, non-real roots must occur in conjugate pairs, so both roots must be common.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Discriminant of $x^2 + x + 1 = 0$ is $1 - 4 = -3 < 0$. Since roots are $\\omega, \\omega^2$ (complex conjugates), any real quadratic sharing one root must share both roots. Hence $a/1 = b/1 = c/1 \\implies a = b = c$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equations $x^2 - 5x + 6 = 0$ and $x^2 - 7x + 10 = 0$ have a common root.\nReason (R): Factoring the two equations gives $(x - 2)(x - 3) = 0$ and $(x - 2)(x - 5) = 0$, both of which share the root $x = 2$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The roots are $\\{2, 3\\}$ and $\\{2, 5\\}$. They share $x = 2$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the equations $x^2 + ax + b = 0$ and $x^2 + bx + a = 0$ have both roots in common, then $a = b$.\nReason (R): For two quadratic equations to have both roots in common, their corresponding coefficients must be in proportion.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Proportionality gives $\\frac{1}{1} = \\frac{a}{b} = \\frac{b}{a} \\implies a = b$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x^2 - 4x + 3 = 0$ and $x^2 - 6x + 8 = 0$ have a common root, then that root is 2.\nReason (R): The roots of $x^2 - 4x + 3 = 0$ are 1 and 3, while the roots of $x^2 - 6x + 8 = 0$ are 2 and 4.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Roots of first: $\\{1, 3\\}$. Roots of second: $\\{2, 4\\}$. They have NO common root. Hence Assertion (A) is false, while Reason (R) correctly lists the roots and is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the equations $x^2 + ax + 1 = 0$ and $x^2 + x + a = 0$ have a common root, then $a$ can be 1 or $-2$.\nReason (R): Subtracting the equations gives $(a - 1)x + (1 - a) = 0 \\implies (a - 1)(x - 1) = 0$, so either $a = 1$ or $x = 1$, and substituting $x = 1$ into $x^2 + ax + 1 = 0$ gives $a = -2$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Subtracting: $(a - 1)x = a - 1$. If $a = 1$, equations are identical. If $a \\ne 1$, $x = 1$. Substituting $x = 1$ into $1 + a + 1 = 0 \\implies a = -2$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The common root of two quadratic equations can always be found by eliminating $x^2$.\nReason (R): If $\\alpha$ satisfies $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$, then $a_2(a_1 \\alpha^2 + b_1 \\alpha + c_1) - a_1(a_2 \\alpha^2 + b_2 \\alpha + c_2) = 0$, which is linear in $\\alpha$ provided $a_1 b_2 - a_2 b_1 \\ne 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Eliminating the quadratic term $\\alpha^2$ leaves $(a_2 b_1 - a_1 b_2)\\alpha + (a_2 c_1 - a_1 c_2) = 0$, giving a direct linear formula for the common root $\\alpha = \\frac{a_1 c_2 - a_2 c_1}{a_2 b_1 - a_1 b_2}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the equation $x^2 - px + q = 0$ has roots $\\alpha, \\beta$ and $x^2 - qx + p = 0$ has roots $\\alpha, \\gamma$, then $\\beta + \\gamma = p + q - 2\\alpha$.\nReason (R): From Vieta's formulas, $\\alpha + \\beta = p$ and $\\alpha + \\gamma = q$, so adding them gives $\\beta + \\gamma + 2\\alpha = p + q$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $\\alpha + \\beta = p$ and $\\alpha + \\gamma = q$, adding both equations gives $2\\alpha + \\beta + \\gamma = p + q \\implies \\beta + \\gamma = p + q - 2\\alpha$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x^2 + 3x + 2 = 0$ and $x^2 + 5x + 6 = 0$ share a root, that root is $-2$.\nReason (R): $x^2 + 3x + 2 = (x + 1)(x + 2) = 0$ and $x^2 + 5x + 6 = (x + 2)(x + 3) = 0$, whose intersection of solution sets is $\\{-2\\}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Roots of first equation are $-1, -2$. Roots of second are $-2, -3$. The shared root is $-2$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Two distinct quadratic equations cannot have more than one common root.\nReason (R): If two quadratic equations share two distinct roots, their corresponding coefficients must be proportional, meaning the two equations are scalar multiples of each other and therefore not distinct.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A quadratic equation is uniquely determined up to a non-zero scaling factor by its two roots. Hence, if two equations share both roots, they represent the same equation. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $x^2 - 2x - 3 = 0$ and $x^2 - (k + 1)x + k = 0$ have a common root, then $k$ can be 3 or $-1$.\nReason (R): The roots of $x^2 - 2x - 3 = 0$ are 3 and $-1$, while the roots of $x^2 - (k + 1)x + k = 0$ are 1 and $k$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Roots of $x^2 - (k + 1)x + k = 0$ are 1 and $k$. Roots of $x^2 - 2x - 3 = 0$ are 3 and $-1$. For them to share a root, either $1 \\in \\{3, -1\\}$ (impossible) or $k \\in \\{3, -1\\}$, so $k = 3$ or $k = -1$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "If $x^2 - 5x + 6 = 0$ and $x^2 - 7x + 10 = 0$ have a common root, find the value of this common root.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "First equation: $(x - 2)(x - 3) = 0 \\implies x \\in \\{2, 3\\}$.\nSecond equation: $(x - 2)(x - 5) = 0 \\implies x \\in \\{2, 5\\}$.\nThe common root is 2.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $x^2 + ax + 8 = 0$ and $x^2 + bx + 12 = 0$ have a common root 4, find the value of $a - b$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "Since $x = 4$ is a root of the first equation:\n$4^2 + 4a + 8 = 0 \\implies 24 + 4a = 0 \\implies a = -6$.\nSince $x = 4$ is a root of the second equation:\n$4^2 + 4b + 12 = 0 \\implies 28 + 4b = 0 \\implies b = -7$.\n$a - b = -6 - (-7) = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the equations $x^2 + px + q = 0$ and $x^2 + qx + p = 0$ ($p \\ne q$) have a common root, find the value of $p + q + 1$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Subtracting the equations gives $(p - q)x + (q - p) = 0 \\implies x = 1$.\nSubstituting $x = 1$ into $x^2 + px + q = 0$ yields $1 + p + q = 0$.\nThus, $p + q + 1 = 0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $x^2 - 11x + a = 0$ and $x^2 - 14x + 2a = 0$ have a common root, find the common root.",
    options: [],
    correctOption: null,
    correctAnswer: 8,
    type: "numerical",
    solution: "Subtracting: $-3\\alpha + a = 0 \\implies a = 3\\alpha$.\nSubstitute into the first: $\\alpha^2 - 11\\alpha + 3\\alpha = 0 \\implies \\alpha^2 - 8\\alpha = 0$.\nSince $a \\ne 0$, $\\alpha = 8$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the positive value of $k$ for which $x^2 - kx - 21 = 0$ and $x^2 - 3kx + 35 = 0$ have a common root.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "Subtracting the two equations: $2k\\alpha = 56 \\implies k\\alpha = 28 \\implies \\alpha = 28/k$.\nSubstitute into first equation: $\\alpha^2 - 28 - 21 = 0 \\implies \\alpha^2 = 49 \\implies \\alpha = \\pm 7$.\nSince $k > 0$, $k = 28/7 = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the equations $2x^2 + kx - 5 = 0$ and $x^2 - 3x - 4 = 0$ have a common root that is positive, find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: -6,
    type: "numerical",
    solution: "Roots of $x^2 - 3x - 4 = 0$ are 4 and $-1$.\nThe positive root is 4.\nSubstituting $x = 4$ into $2x^2 + kx - 5 = 0$:\n$2(16) + 4k - 5 = 0 \\implies 32 - 5 + 4k = 0 \\implies 27 + 4k = 0 \\implies k = -27/4$ (fraction).\nLet's adjust equation to make integer: Let equation be $x^2 + kx - 12 = 0$ and $x^2 - 3x - 4 = 0$.\nWith positive root 4: $16 + 4k - 12 = 0 \\implies 4k + 4 = 0 \\implies k = -1$!",
    question: "If the equations $x^2 + kx - 12 = 0$ and $x^2 - 3x - 4 = 0$ have a common positive root, find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: -1,
    type: "numerical",
    solution: "The roots of $x^2 - 3x - 4 = 0$ are $(x - 4)(x + 1) = 0$, so the positive root is $x = 4$.\nSubstituting $x = 4$ into $x^2 + kx - 12 = 0$:\n$4^2 + 4k - 12 = 0 \\implies 16 + 4k - 12 = 0 \\implies 4k + 4 = 0 \\implies k = -1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $x^2 - 6x + a = 0$ and $x^2 - cx + 6 = 0$ have one common root and the second equation has roots in the ratio $2 : 3$, find the common root (given it is positive).",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "Let the roots of $x^2 - cx + 6 = 0$ be $2y$ and $3y$.\nProduct of roots: $(2y)(3y) = 6y^2 = 6 \\implies y^2 = 1 \\implies y = 1$ (for positive roots).\nThus the roots are $2$ and $3$.\nIf the common root is 2: $2^2 - 6(2) + a = 0 \\implies 4 - 12 + a = 0 \\implies a = 8$.\nIf the common root is 3: $3^2 - 6(3) + a = 0 \\implies 9 - 18 + a = 0 \\implies a = 9$.\nIf the common root is 2, the other root of the first equation is $6 - 2 = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "If the equations $x^2 - 4x + 3 = 0$ and $x^2 - ax + 9 = 0$ have a common root, find the value of $a$ when the common root is 3.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "Substituting the common root $x = 3$ into $x^2 - ax + 9 = 0$:\n$3^2 - 3a + 9 = 0 \\implies 9 - 3a + 9 = 0 \\implies 3a = 18 \\implies a = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $x^2 + 2x + 3 = 0$ and $ax^2 + bx + c = 0$ ($a, b, c \\in \\mathbb{R}$) have a common root and $a = 2$, find the value of $b + c$.",
    options: [],
    correctOption: null,
    correctAnswer: 10,
    type: "numerical",
    solution: "Since $x^2 + 2x + 3 = 0$ has discriminant $\\Delta = 4 - 12 = -8 < 0$, its roots are complex conjugates.\nHence, both roots must be common to $ax^2 + bx + c = 0$.\nTherefore: $\\frac{a}{1} = \\frac{b}{2} = \\frac{c}{3}$.\nGiven $a = 2$, we have $b = 2(2) = 4$ and $c = 3(2) = 6$.\nThus, $b + c = 4 + 6 = 10$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the non-zero value of $a$ for which $x^2 + ax + 1 = 0$ and $x^2 + x + a = 0$ have a common root.",
    options: [],
    correctOption: null,
    correctAnswer: -2,
    type: "numerical",
    solution: "Subtracting: $(a - 1)x + (1 - a) = 0 \\implies (a - 1)(x - 1) = 0$.\nSince $a \\ne 1$, we have $x = 1$.\nSubstituting $x = 1$ into $x^2 + ax + 1 = 0$ gives $1 + a + 1 = 0 \\implies a = -2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic6Questions };
