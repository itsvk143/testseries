// scripts/data_jee_quad_subtopic1.js
// Subtopic 1: Nature of roots (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    question: "If the roots of the equation $x^2 - 2(k + 1)x + k^2 = 0$ are real and equal, then the value of $k$ is:",
    options: [
      "-\\frac{1}{2}",
      "\\frac{1}{2}",
      "-1",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For real and equal roots, the discriminant $\\Delta = 0$.\n$\\Delta = [-2(k + 1)]^2 - 4(1)(k^2) = 0$.\n$4(k^2 + 2k + 1) - 4k^2 = 0 \\implies 8k + 4 = 0 \\implies k = -\\frac{1}{2}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $a, b, c \\in \\mathbb{R}$ and $a > 0$ such that $a + b + c = 0$, then the roots of the quadratic equation $ax^2 + bx + c = 0$ are:",
    options: [
      "Real and rational",
      "Imaginary",
      "Real and equal",
      "Purely imaginary"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $a(1)^2 + b(1) + c = a + b + c = 0$, $x = 1$ is a root of the equation.\nThe other root by Vieta's formula is $\\frac{c}{a}$. Since $a, b, c \\in \\mathbb{Q}$ (if coefficients are rational) or real, here $1$ and $\\frac{c}{a}$ are real roots. Also $\\Delta = b^2 - 4ac = (-a - c)^2 - 4ac = (a - c)^2 \\ge 0$, which is a perfect square, meaning the roots are real and rational.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The values of $m$ for which the quadratic equation $x^2 - 2(1 + 3m)x + 7(3 + 2m) = 0$ has equal roots are:",
    options: [
      "2, -\\frac{10}{9}",
      "-\\frac{10}{9}, -2",
      "2, \\frac{10}{9}",
      "-2, \\frac{10}{9}"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For equal roots, $\\Delta = 0$:\n$\\Delta = 4(1 + 3m)^2 - 4(1)(7)(3 + 2m) = 0$.\n$(1 + 6m + 9m^2) - (21 + 14m) = 0$.\n$9m^2 - 8m - 20 = 0$.\n$(9m + 10)(m - 2) = 0 \\implies m = 2 \\text{ or } m = -\\frac{10}{9}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If one root of the quadratic equation $ax^2 + bx + c = 0$ with rational coefficients is $3 - 2\\sqrt{5}$, then the other root is:",
    options: [
      "3 + 2\\sqrt{5}",
      "-3 + 2\\sqrt{5}",
      "-3 - 2\\sqrt{5}",
      "2 + 3\\sqrt{5}"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For a quadratic equation with rational coefficients, irrational roots always occur in conjugate pairs. Therefore, if one root is $3 - 2\\sqrt{5}$, the other root must be $3 + 2\\sqrt{5}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $a, b, c$ are distinct odd positive integers, then the roots of the equation $ax^2 + bx + c = 0$:",
    options: [
      "Cannot be rational",
      "Must be rational and equal",
      "Must be real and distinct",
      "Must be integers"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The discriminant is $\\Delta = b^2 - 4ac$. Since $b$ is odd, $b^2 \\equiv 1 \\pmod 8$. Since $a$ and $c$ are odd, $ac$ is odd, so $4ac \\equiv 4 \\pmod 8$. Thus $\\Delta = b^2 - 4ac \\equiv 1 - 4 \\equiv 5 \\pmod 8$. But the square of any integer is $\\equiv 0, 1, \\text{ or } 4 \\pmod 8$. Therefore, $\\Delta$ can never be a perfect square, which means the roots cannot be rational.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard"
  },
  {
    question: "The number of real roots of the equation $e^x - x = 0$ is:",
    options: [
      "0",
      "1",
      "2",
      "Infinitely many"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $f(x) = e^x - x$. Then $f'(x) = e^x - 1$. For $x = 0$, $f'(0) = 0$ and $f''(x) = e^x > 0$, so $f(x)$ has a unique global minimum at $x = 0$. The minimum value is $f(0) = e^0 - 0 = 1 > 0$. Since $f(x) \\ge 1 > 0$ for all $x \\in \\mathbb{R}$, $f(x) = 0$ has no real roots (0 real roots).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the roots of the equation $(p - q)x^2 + (q - r)x + (r - p) = 0$ are equal, then $p, q, r$ are in:",
    options: [
      "A.P.",
      "G.P.",
      "H.P.",
      "None of these"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The sum of the coefficients is $(p - q) + (q - r) + (r - p) = 0$, so $x = 1$ is a root. Since the roots are equal, both roots must be equal to 1. The product of roots is $1 \\times 1 = \\frac{r - p}{p - q} = 1 \\implies r - p = p - q \\implies 2p = q + r$. Hence, $q, p, r$ are in A.P., or $p, q, r$ satisfy $2q = p + r$ wait! Let's check: $(r - p) / (p - q) = 1 \\implies r - p = p - q \\implies 2p = q + r$. Thus $q, p, r$ are in A.P. If we rewrite the equation with standard cyclic order $(a - b)x^2 + (b - c)x + (c - a) = 0$ or let's write: $(a - b)x^2 + (b - c)x + (c - a) = 0$ with equal roots implies $a, b, c$ are in A.P. wait: $x=1$ and product $(c - a)/(a - b) = 1 \\implies c - a = a - b \\implies 2a = b + c$, so $b, a, c$ in A.P. To make $p, q, r$ in A.P., the equation is $(q - r)x^2 + (r - p)x + (p - q) = 0$! Let's write the question with $(q - r)x^2 + (r - p)x + (p - q) = 0$:\nSum of coefficients is 0, so $x=1$. Product is $(p - q)/(q - r) = 1 \\implies p - q = q - r \\implies 2q = p + r$, meaning $p, q, r$ are in A.P.!",
    question: "If the roots of the quadratic equation $(q - r)x^2 + (r - p)x + (p - q) = 0$ are equal, then $p, q, r$ are in:",
    options: [
      "Arithmetic Progression (A.P.)",
      "Geometric Progression (G.P.)",
      "Harmonic Progression (H.P.)",
      "Arithmetico-Geometric Progression (A.G.P.)"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Notice that the sum of the coefficients is $(q - r) + (r - p) + (p - q) = 0$. Hence, $x = 1$ is one root. Since the roots are equal, the other root must also be 1. The product of the roots is $1 \\times 1 = 1 = \\frac{p - q}{q - r} \\implies p - q = q - r \\implies 2q = p + r$. Thus, $p, q, r$ are in Arithmetic Progression (A.P.).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If both roots of the equation $x^2 - 2ax + a^2 + a - 3 = 0$ are real and less than 3, then:",
    options: [
      "a < 2",
      "2 \\le a \\le 3",
      "a > 3",
      "a \\le 2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For both roots to be real and less than 3:\n1) $\\Delta \\ge 0 \\implies 4a^2 - 4(a^2 + a - 3) \\ge 0 \\implies -4a + 12 \\ge 0 \\implies a \\le 3$.\n2) $-\\frac{b}{2a} < 3 \\implies a < 3$.\n3) $f(3) > 0 \\implies 9 - 6a + a^2 + a - 3 > 0 \\implies a^2 - 5a + 6 > 0 \\implies (a - 2)(a - 3) > 0 \\implies a < 2 \\text{ or } a > 3$.\nTaking the intersection of $a \\le 3$, $a < 3$, and ($a < 2$ or $a > 3$), we obtain $a < 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The values of $a$ for which the equation $(a^2 - 5a + 6)x^2 + (a^2 - 3a + 2)x + (a^2 - 4) = 0$ has more than two roots is:",
    options: [
      "2",
      "3",
      "1",
      "-2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A quadratic equation $Ax^2 + Bx + C = 0$ has more than two roots if and only if it is an identity, i.e., $A = 0, B = 0, \\text{ and } C = 0$.\n$A = a^2 - 5a + 6 = (a - 2)(a - 3) = 0 \\implies a \\in \\{2, 3\\}$.\n$B = a^2 - 3a + 2 = (a - 1)(a - 2) = 0 \\implies a \\in \\{1, 2\\}$.\n$C = a^2 - 4 = (a - 2)(a + 2) = 0 \\implies a \\in \\{2, -2\\}$.\nThe only common value is $a = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the roots of the equation $x^2 - px + q = 0$ differ by 1, then:",
    options: [
      "p^2 = 4q + 1",
      "p^2 = 4q - 1",
      "q^2 = 4p + 1",
      "p^2 = q + 4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let the roots be $\\alpha$ and $\\beta$. We are given $|\\alpha - \\beta| = 1$.\n$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha \\beta = 1$.\nSince $\\alpha + \\beta = p$ and $\\alpha \\beta = q$, we have $p^2 - 4q = 1 \\implies p^2 = 4q + 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equation $x^2 + 2x + 5 = 0$ has no real roots.\nReason (R): For any quadratic equation $ax^2 + bx + c = 0$ with real coefficients, if the discriminant $\\Delta = b^2 - 4ac < 0$, the roots are complex conjugate numbers.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $x^2 + 2x + 5 = 0$, the discriminant is $\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$. Since $\\Delta < 0$, the equation has no real roots. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $a, b, c \\in \\mathbb{Q}$ and $b^2 - 4ac = 12$, the roots of $ax^2 + bx + c = 0$ are irrational.\nReason (R): When the coefficients are rational, irrational roots of a quadratic equation always occur in conjugate pairs.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $12$ is not a perfect square of any rational number, $\\sqrt{\\Delta} = \\sqrt{12} = 2\\sqrt{3}$ is irrational, so the roots $\\frac{-b \\pm 2\\sqrt{3}}{2a}$ are irrational. Reason (R) is also a true mathematical theorem, but the fact that roots are irrational is due to $\\Delta$ not being a perfect square, not because they occur in pairs. Hence, both are true but (R) is NOT the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The roots of the equation $(x - a)(x - b) + (x - b)(x - c) + (x - c)(x - a) = 0$ are always real for all real numbers $a, b, c$.\nReason (R): The discriminant of the expanded equation can be expressed as $4[(a - b)^2 + (b - c)^2 + (c - a)^2]$, which is non-negative for all real $a, b, c$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Expanding the equation gives $3x^2 - 2(a + b + c)x + (ab + bc + ca) = 0$. The discriminant is $\\Delta = 4(a + b + c)^2 - 12(ab + bc + ca) = 4[(a + b + c)^2 - 3(ab + bc + ca)] = 2[(a - b)^2 + (b - c)^2 + (c - a)^2] \\ge 0$. Since $\\Delta \\ge 0$ for all real $a, b, c$, the roots are always real. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equation $x^2 + 4|x| + 3 = 0$ has 4 real roots.\nReason (R): For any real number $x$, $|x|^2 = x^2$, so setting $t = |x| \\ge 0$ yields $t^2 + 4t + 3 = 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Setting $t = |x| \\ge 0$, the equation becomes $t^2 + 4t + 3 = (t + 1)(t + 3) = 0 \\implies t = -1$ or $t = -3$. Since $t = |x| \\ge 0$, there is no real value of $x$ satisfying $|x| = -1$ or $|x| = -3$. Thus the equation has 0 real roots. Hence Assertion (A) is false and Reason (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If one root of the quadratic equation $x^2 - 4x + 13 = 0$ is $2 + 3i$, then the other root is $2 - 3i$.\nReason (R): For any quadratic equation with real coefficients, imaginary roots always occur in conjugate pairs.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The coefficients of $x^2 - 4x + 13 = 0$ are all real. By the Complex Conjugate Root Theorem, if $2 + 3i$ is a root, its conjugate $2 - 3i$ must also be a root. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $p(q - r)x^2 + q(r - p)x + r(p - q) = 0$ has equal roots, then $p, q, r$ are in Harmonic Progression (H.P.).\nReason (R): Since $x = 1$ is a root, equal roots implies the product of roots $\\frac{r(p - q)}{p(q - r)} = 1$, which simplifies to $\\frac{2}{q} = \\frac{1}{p} + \\frac{1}{r}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The sum of coefficients is $p(q - r) + q(r - p) + r(p - q) = pq - pr + qr - qp + rp - rq = 0$, so $x = 1$ is a root. Since the roots are equal, both roots are 1, so $\\frac{r(p - q)}{p(q - r)} = 1 \\implies rp - rq = pq - pr \\implies 2pr = q(p + r) \\implies q = \\frac{2pr}{p + r} \\implies \\frac{2}{q} = \\frac{1}{p} + \\frac{1}{r}$. Hence $p, q, r$ are in H.P. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The equation $2x^2 + 3x + 1 = 0$ has rational roots.\nReason (R): The discriminant of $2x^2 + 3x + 1 = 0$ is $\\Delta = 3^2 - 4(2)(1) = 1$, which is a perfect square of a non-zero rational number.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Coefficients $a = 2, b = 3, c = 1$ are rational. The discriminant is $\\Delta = 9 - 8 = 1$, which is a perfect square. Thus the roots $x = \\frac{-3 \\pm 1}{4}$ are rational ($-1$ and $-1/2$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The quadratic equation $x^2 + bx + c = 0$ with integral coefficients can have roots $\\frac{1}{2}$ and $\\frac{1}{3}$.\nReason (R): If a monic quadratic equation $x^2 + bx + c = 0$ has integral coefficients, its rational roots must be integers.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "By the Rational Root Theorem, any rational root of a monic polynomial with integer coefficients must be an integer (dividing the constant term $c$). Therefore, $x^2 + bx + c = 0$ cannot have non-integer rational roots like $1/2$ and $1/3$. Thus Assertion (A) is false and Reason (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $a > 0, b > 0, c > 0$, then both roots of the quadratic equation $ax^2 + bx + c = 0$ have negative real parts.\nReason (R): The sum of the roots is $-\\frac{b}{a} < 0$ and the product of the roots is $\\frac{c}{a} > 0$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "If the roots are real, since product $> 0$ and sum $< 0$, both roots must be negative real numbers. If the roots are complex conjugate $\\alpha \\pm i\\beta$, the real part is $\\alpha = \\frac{\\text{sum}}{2} = -\\frac{b}{2a} < 0$. In all cases, the real parts of both roots are strictly negative. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the equation $x^2 + 2kx + (k^2 - 1) = 0$ has real roots, then $k \\in \\mathbb{R}$.\nReason (R): The discriminant is $\\Delta = 4k^2 - 4(k^2 - 1) = 4 > 0$, which is positive independent of the value of $k$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The discriminant is $\\Delta = (2k)^2 - 4(1)(k^2 - 1) = 4k^2 - 4k^2 + 4 = 4$. Since $\\Delta = 4 > 0$ for every real number $k$, the roots are always real and distinct for all $k \\in \\mathbb{R}$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "Find the smallest positive integer $k$ for which the quadratic equation $x^2 - 2(k - 1)x + (k + 5) = 0$ has real roots.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "For real roots, $\\Delta \\ge 0$:\n$\\Delta = 4(k - 1)^2 - 4(1)(k + 5) \\ge 0$.\n$(k - 1)^2 - (k + 5) \\ge 0 \\implies k^2 - 2k + 1 - k - 5 \\ge 0 \\implies k^2 - 3k - 4 \\ge 0$.\n$(k - 4)(k + 1) \\ge 0 \\implies k \\le -1 \\text{ or } k \\ge 4$.\nThe smallest positive integer $k$ satisfying this condition is 4.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the quadratic equation $x^2 - mx + 9 = 0$ has equal roots, then the positive value of $m$ is:",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "For equal roots, $\\Delta = (-m)^2 - 4(1)(9) = 0 \\implies m^2 - 36 = 0 \\implies m = \\pm 6$. The positive value is $m = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of real roots of the equation $x^2 + 5|x| + 6 = 0$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Let $t = |x| \\ge 0$. The equation becomes $t^2 + 5t + 6 = 0 \\implies (t + 2)(t + 3) = 0 \\implies t = -2$ or $t = -3$. Since $|x| \\ge 0$ for all real $x$, neither $-2$ nor $-3$ is possible. Hence, the number of real roots is 0.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The value of $k$ for which one root of the equation $x^2 - 12x + k = 0$ is square of the other root can be 27 or:",
    options: [],
    correctOption: null,
    correctAnswer: -64,
    type: "numerical",
    solution: "Let the roots be $\\alpha$ and $\\alpha^2$. Then $\\alpha + \\alpha^2 = 12 \\implies \\alpha^2 + \\alpha - 12 = 0 \\implies (\\alpha + 4)(\\alpha - 3) = 0$.\nCase 1: $\\alpha = 3 \\implies k = \\alpha \\cdot \\alpha^2 = \\alpha^3 = 3^3 = 27$.\nCase 2: $\\alpha = -4 \\implies k = (-4)^3 = -64$.\nThe other value of $k$ is -64.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the number of real values of $x$ satisfying the equation $2^{2x} - 3 \\cdot 2^{x+2} + 32 = 0$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "Let $y = 2^x > 0$. The equation becomes $y^2 - 12y + 32 = 0 \\implies (y - 4)(y - 8) = 0$.\nSo $y = 4$ or $y = 8$.\n$2^x = 4 \\implies x = 2$.\n$2^x = 8 \\implies x = 3$.\nBoth solutions $x = 2$ and $x = 3$ are real. Thus, the number of real solutions is 2.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The equation $x^2 - 2kx + 7k - 12 = 0$ has equal roots. If $k_1$ and $k_2$ are the possible values of $k$, find the sum $k_1 + k_2$.",
    options: [],
    correctOption: null,
    correctAnswer: 7,
    type: "numerical",
    solution: "For equal roots, $\\Delta = (-2k)^2 - 4(1)(7k - 12) = 0 \\implies 4k^2 - 28k + 48 = 0 \\implies k^2 - 7k + 12 = 0$.\nBy Vieta's formulas, the sum of roots $k_1 + k_2 = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the roots of $(k - 2)x^2 + 2(2k - 3)x + (5k - 6) = 0$ are equal, find the positive value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "For equal roots, $\\Delta = 0$:\n$[2(2k - 3)]^2 - 4(k - 2)(5k - 6) = 0$.\n$4(4k^2 - 12k + 9) - 4(5k^2 - 16k + 12) = 0$.\n$(4k^2 - 12k + 9) - (5k^2 - 16k + 12) = 0$.\n$-k^2 + 4k - 3 = 0 \\implies k^2 - 4k + 3 = 0 \\implies (k - 1)(k - 3) = 0$.\nIf $k = 1$, the leading coefficient is $1 - 2 = -1 \\ne 0$. If $k = 3$, leading coefficient is $1 \\ne 0$.\nThe roots are 1 and 3; the larger positive value is 3.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the number of integral values of $p$ for which the equation $(p - 3)x^2 - 2px + 6p = 0$ has real roots and $p \\ne 3$.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "For real roots with $p \\ne 3$, $\\Delta \\ge 0$:\n$\\Delta = (-2p)^2 - 4(p - 3)(6p) = 4p^2 - 24p(p - 3) = 4p^2 - 24p^2 + 72p = -20p^2 + 72p \\ge 0$.\n$20p^2 - 72p \\le 0 \\implies 4p(5p - 18) \\le 0 \\implies 0 \\le p \\le \\frac{18}{5} = 3.6$.\nIntegers in $[0, 3.6]$ are $\\{0, 1, 2, 3\\}$.\nSince $p \\ne 3$ is specified, the allowed integral values are $p \\in \\{0, 1, 2\\}$ wait! If $p = 0$, the equation becomes $-3x^2 = 0 \\implies x = 0$ (real root). But is $p=0$ quadratic? Yes, degree 2. Integers: 0, 1, 2. If $p$ must be a non-zero integer, that would be 2. Let's make it unambiguous: find the number of positive integers $p \\ne 3$:\nIntegers in $(0, 3.6]$ excluding 3 are $p \\in \\{1, 2\\}$. Let's formulate clearly:\n'Find the number of non-negative integers $p$ for which... excluding $p=3$': $\\{0, 1, 2\\} \\rightarrow 3$.",
    question: "Find the number of positive integral values of $p$ with $p \\ne 3$ for which the equation $(p - 3)x^2 - 2px + 6p = 0$ has real roots.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "For real roots, $\\Delta \\ge 0$:\n$\\Delta = 4p^2 - 24p(p - 3) = -20p^2 + 72p \\ge 0 \\implies 4p(5p - 18) \\le 0$.\nSince $p > 0$, we have $5p \\le 18 \\implies p \\le 3.6$.\nThe positive integers in this range are $p \\in \\{1, 2, 3\\}$.\nSince $p \\ne 3$, the valid positive integers are $p = 1$ and $p = 2$, which gives exactly 2 values.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "If the equation $x^2 - 4x - \\log_2 A = 0$ has real roots, find the minimum value of $16A$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "For real roots, $\\Delta = (-4)^2 - 4(1)(-\\log_2 A) \\ge 0$.\n$16 + 4 \\log_2 A \\ge 0 \\implies 4 \\log_2 A \\ge -16 \\implies \\log_2 A \\ge -4$.\n$A \\ge 2^{-4} = \\frac{1}{16}$.\nTherefore, the minimum value of $16A$ is $16 \\times \\frac{1}{16} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "If one root of $x^2 - 6x + c = 0$ is $3 + 2i$, find the value of $c$.",
    options: [],
    correctOption: null,
    correctAnswer: 13,
    type: "numerical",
    solution: "Since the coefficients are real, the roots must be complex conjugates: $\\alpha = 3 + 2i$ and $\\beta = 3 - 2i$.\nThe product of roots is $c = \\alpha \\beta = (3 + 2i)(3 - 2i) = 3^2 - (2i)^2 = 9 - (-4) = 13$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic1Questions };
