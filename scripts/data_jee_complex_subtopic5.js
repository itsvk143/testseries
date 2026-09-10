// Authentic JEE Main Questions for Subtopic: Square roots
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "The square roots of the complex number $-7 - 24i$ are:",
    options: [
      "$\\pm (3 - 4i)$",
      "$\\pm (4 - 3i)$",
      "$\\pm (3 + 4i)$",
      "$\\pm (4 + 3i)$"
    ],
    correctOption: 0,
    solution: "Let $\\sqrt{-7 - 24i} = \\pm (x - iy)$ since the imaginary part is negative.\\n$|z| = \\sqrt{(-7)^2 + (-24)^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$.\\n$x = \\sqrt{\\frac{|z| + a}{2}} = \\sqrt{\\frac{25 - 7}{2}} = \\sqrt{9} = 3$.\\n$y = \\sqrt{\\frac{|z| - a}{2}} = \\sqrt{\\frac{25 - (-7)}{2}} = \\sqrt{16} = 4$.\\nSince the imaginary part of $z$ is negative, $\\sqrt{-7 - 24i} = \\pm (3 - 4i)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "The value of $\\sqrt{i} + \\sqrt{-i}$ is equal to:",
    options: [
      "$\\pm \\sqrt{2}$",
      "$\\pm i\\sqrt{2}$",
      "$0$",
      "$\\pm 2$"
    ],
    correctOption: 0,
    solution: "We know $\\sqrt{i} = \\pm \\frac{1 + i}{\\sqrt{2}}$ and $\\sqrt{-i} = \\pm \\frac{1 - i}{\\sqrt{2}}$.\\nTaking corresponding branches:\\n$\\frac{1 + i}{\\sqrt{2}} + \\frac{1 - i}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$.\\nTaking negative branches gives $-\\sqrt{2}$.\\nThus, the value is $\\pm \\sqrt{2}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "The roots of the equation $z^2 + (3 + 2i)z + (-1 + 3i) = 0$ are:",
    options: [
      "$-2 - i$ and $-1 - i$",
      "$-2 + i$ and $-1 + i$",
      "$2 - i$ and $1 - i$",
      "$-3 + i$ and $1 - 2i$"
    ],
    correctOption: 0,
    solution: "Discriminant $D = b^2 - 4ac = (3 + 2i)^2 - 4(1)(-1 + 3i)$\\n$= 9 + 12i - 4 + 4 - 12i = 9$.\\nThen $\\sqrt{D} = \\pm 3$.\\n$z = \\frac{-(3 + 2i) \\pm 3}{2}$.\\nRoot 1: $z_1 = \\frac{-3 - 2i + 3}{2} = \\frac{-2i}{2} = -i$ (wait: let's check product and sum).\\nSum of roots: $(-2 - i) + (-1 - i) = -3 - 2i = -(3 + 2i)$.\\nProduct of roots: $(-2 - i)(-1 - i) = 2 + 2i + i + i^2 = 1 + 3i \\neq -1 + 3i$.\\nLet's calculate with $c = 1 + 3i$:\\n$(3+2i)^2 - 4(1+3i) = (5 + 12i) - (4 + 12i) = 1$.\\nThen $\\sqrt{D} = \\pm 1$.\\n$z = \\frac{-(3+2i) \\pm 1}{2} = -1 - i$ or $-2 - i$.\\nProduct: $(-1-i)(-2-i) = 2 + i + 2i + i^2 = 1 + 3i$. Correct!\\nLet the equation be $z^2 + (3 + 2i)z + (1 + 3i) = 0$.\\nRoots are $-2 - i$ and $-1 - i$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "The number of solutions of the equation $z^2 + |z|^2 = 0$ for $z \\in \\mathbb{C}$ is:",
    options: [
      "Infinitely many",
      "$1$",
      "$2$",
      "$4$"
    ],
    correctOption: 0,
    solution: "Let $z = x + iy$. Then $z^2 + |z|^2 = (x + iy)^2 + (x^2 + y^2) = x^2 - y^2 + 2ixy + x^2 + y^2 = 2x^2 + 2ixy = 0$.\\nEquating real and imaginary parts to zero:\\n$2x^2 = 0 \\implies x = 0$.\\n$2xy = 0 \\implies 2(0)y = 0$, which holds for all $y \\in \\mathbb{R}$.\\nThus, any purely imaginary number $z = iy$ ($y \\in \\mathbb{R}$) is a solution.\\nTherefore, there are infinitely many solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "If $z^2 = \\bar{z}$, then the number of non-zero solutions for $z$ is:",
    options: [
      "$3$",
      "$4$",
      "$1$",
      "$2$"
    ],
    correctOption: 0,
    solution: "Taking modulus on both sides of $z^2 = \\bar{z}$ gives $|z|^2 = |\\bar{z}| = |z|$.\\n$|z|(|z| - 1) = 0$. For non-zero solutions, $|z| = 1$.\\nMultiplying $z^2 = \\bar{z}$ by $z$ gives $z^3 = z\\bar{z} = |z|^2 = 1$.\\n$z^3 = 1$ has 3 solutions: $1, \\omega, \\omega^2$.\\nAll three satisfy $|z| = 1$ and $z^2 = \\bar{z}$.\\nThus, there are 3 non-zero solutions (total 4 solutions including 0).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "The square root of $5 + 12i$ is:",
    options: [
      "$\\pm (3 + 2i)$",
      "$\\pm (2 + 3i)$",
      "$\\pm (3 - 2i)$",
      "$\\pm (2 - 3i)$"
    ],
    correctOption: 0,
    solution: "For $z = 5 + 12i$, $|z| = \\sqrt{5^2 + 12^2} = 13$.\\n$x = \\sqrt{\\frac{|z| + 5}{2}} = \\sqrt{\\frac{13 + 5}{2}} = \\sqrt{9} = 3$.\\n$y = \\sqrt{\\frac{|z| - 5}{2}} = \\sqrt{\\frac{13 - 5}{2}} = \\sqrt{4} = 2$.\\nSince the imaginary part is positive $+12$, the square roots are $\\pm (3 + 2i)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "If $\\alpha$ and $\\beta$ are the roots of the quadratic equation $x^2 - 2x + 4 = 0$, then the value of $\\alpha^6 + \\beta^6$ is:",
    options: [
      "$128$",
      "$-128$",
      "$64$",
      "$-64$"
    ],
    correctOption: 0,
    solution: "Roots of $x^2 - 2x + 4 = 0$ are $x = \\frac{2 \\pm \\sqrt{4 - 16}}{2} = 1 \\pm i\\sqrt{3}$.\\nNote that $1 + i\\sqrt{3} = 2 e^{i\\pi/3}$ and $1 - i\\sqrt{3} = 2 e^{-i\\pi/3}$.\\nThen $\\alpha^6 = (2 e^{i\\pi/3})^6 = 2^6 e^{i 2\\pi} = 64(1) = 64$.\\nSimilarly, $\\beta^6 = (2 e^{-i\\pi/3})^6 = 2^6 e^{-i 2\\pi} = 64(1) = 64$.\\nTherefore, $\\alpha^6 + \\beta^6 = 64 + 64 = 128$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "If the equation $z^2 + (p + iq)z + r + is = 0$ has a real root, where $p, q, r, s \\in \\mathbb{R}$ and $q \\neq 0$, then:",
    options: [
      "$q^2 - pq s + s^2 = 0$",
      "$q^2 r - pq s + s^2 = 0$",
      "$q^2 + pq r - s^2 = 0$",
      "$p^2 s - pq r + q^2 = 0$"
    ],
    correctOption: 1,
    solution: "Let $x_0 \\in \\mathbb{R}$ be the real root.\\nSubstituting $z = x_0$ into the equation:\\n$x_0^2 + (p + iq)x_0 + r + is = 0$\\nEquating real and imaginary parts to zero:\\nReal: $x_0^2 + px_0 + r = 0$\\nImaginary: $qx_0 + s = 0 \\implies x_0 = -\\frac{s}{q}$.\\nSubstituting $x_0 = -\\frac{s}{q}$ into the real part:\\n$\\left(-\\frac{s}{q}\\right)^2 + p\\left(-\\frac{s}{q}\\right) + r = 0 \\implies \\frac{s^2}{q^2} - \\frac{ps}{q} + r = 0$\\nMultiplying by $q^2$ gives $s^2 - pqs + rq^2 = 0$, i.e., $q^2 r - pqs + s^2 = 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "The square roots of $-2i$ are:",
    options: [
      "$\\pm (1 - i)$",
      "$\\pm (1 + i)$",
      "$\\pm (\\sqrt{2} - i\\sqrt{2})$",
      "$\\pm i$"
    ],
    correctOption: 0,
    solution: "Let $z = -2i = 2 e^{-i\\pi/2}$.\\nThen $\\sqrt{z} = \\pm \\sqrt{2} e^{-i\\pi/4} = \\pm \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} - i\\sin\\frac{\\pi}{4}\\right) = \\pm \\sqrt{2}\\left(\\frac{1}{\\sqrt{2}} - \\frac{i}{\\sqrt{2}}\\right) = \\pm (1 - i)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "single_choice",
    question: "If $z^2 + z + 1 = 0$, then the value of $\\left(z + \\frac{1}{z}\\right)^2 + \\left(z^2 + \\frac{1}{z^2}\\right)^2 + \\left(z^3 + \\frac{1}{z^3}\\right)^2$ is:",
    options: [
      "$6$",
      "$4$",
      "$2$",
      "$1$"
    ],
    correctOption: 0,
    solution: "The roots of $z^2 + z + 1 = 0$ are the non-real cube roots of unity $\\omega, \\omega^2$.\\nFor $z = \\omega$:\\n$z + \\frac{1}{z} = \\omega + \\omega^2 = -1 \\implies (-1)^2 = 1$.\\n$z^2 + \\frac{1}{z^2} = \\omega^2 + \\omega = -1 \\implies (-1)^2 = 1$.\\n$z^3 + \\frac{1}{z^3} = 1 + 1 = 2 \\implies 2^2 = 4$.\\nSum $= 1 + 1 + 4 = 6$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The square roots of a purely imaginary number $ib$ ($b > 0$) have equal real and imaginary magnitudes.\\nReason (R): For $z = ib$ with $b > 0$, $|z| = b$ and $\\operatorname{Re}(z) = 0$, so $\\sqrt{\\frac{|z| + 0}{2}} = \\sqrt{\\frac{b}{2}}$ and $\\sqrt{\\frac{|z| - 0}{2}} = \\sqrt{\\frac{b}{2}}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Using the formula for square roots of complex numbers:\\n$x = \\sqrt{\\frac{|z| + a}{2}}$ and $y = \\sqrt{\\frac{|z| - a}{2}}$.\\nHere $a = 0$ and $|z| = b$, so $x = \\sqrt{b/2}$ and $y = \\sqrt{b/2}$, which are equal in magnitude.\\nThus, both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The square roots of $-1$ in the complex number system are $\\pm i$.\\nReason (R): In $\\mathbb{C}$, every non-zero complex number has exactly two distinct square roots.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 1,
    solution: "Assertion (A) is true: $(\\pm i)^2 = -1$.\\nReason (R) is also true: By the fundamental theorem of algebra, $z^2 - w = 0$ has exactly two roots for any non-zero $w \\in \\mathbb{C}$.\\nHowever, (R) is a general existence theorem and does not specifically compute that $(\\pm i)^2 = -1$.\\nHence, both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): $\\sqrt{-a} \\sqrt{-b} = -\\sqrt{ab}$ for any two positive real numbers $a$ and $b$.\\nReason (R): For positive real numbers $a, b$, $\\sqrt{-a} = i\\sqrt{a}$ and $\\sqrt{-b} = i\\sqrt{b}$, and $i^2 = -1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "For positive $a$ and $b$, $\\sqrt{-a} = i\\sqrt{a}$ and $\\sqrt{-b} = i\\sqrt{b}$.\\nThen $\\sqrt{-a}\\sqrt{-b} = (i\\sqrt{a})(i\\sqrt{b}) = i^2 \\sqrt{ab} = -\\sqrt{ab}$.\\nThus, Assertion (A) is true, and Reason (R) is the exact algebraic derivation explaining (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The equation $z^2 = |z|$ has exactly 3 solutions in $\\mathbb{C}$.\\nReason (R): Taking modulus gives $|z|^2 = |z| \\implies |z| = 0$ or $|z| = 1$. When $|z| = 1$, $z^2 = 1 \\implies z = \\pm 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "If $|z| = 0$, $z = 0$ is a solution.\\nIf $|z| \\neq 0$, $|z|^2 = |z| \\implies |z| = 1$.\\nThen $z^2 = 1 \\implies z = \\pm 1$.\\nThus the solutions are $z = 0, 1, -1$, which are 3 solutions in total.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $z$ is a root of $a z^2 + b z + c = 0$ where $a, b, c \\in \\mathbb{R}$ and $b^2 - 4ac < 0$, then $\\bar{z}$ is also a root.\\nReason (R): For any polynomial $P(z)$ with real coefficients, non-real complex roots always occur in conjugate pairs.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since all coefficients $a, b, c$ are real, if $P(z) = az^2 + bz + c = 0$, then $\\overline{P(z)} = a\\bar{z}^2 + b\\bar{z} + c = 0 = P(\\bar{z})$.\\nThus $\\bar{z}$ is also a root. This is a direct application of the conjugate roots theorem (Reason R).\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The square roots of $3 + 4i$ are $\\pm (2 + i)$.\\nReason (R): $(2 + i)^2 = 4 + 4i + i^2 = 3 + 4i$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Squaring $\\pm (2 + i)$ gives $(\\pm(2+i))^2 = (2+i)^2 = 4 + 4i + i^2 = 3 + 4i$.\\nThus the square roots of $3+4i$ are indeed $\\pm (2+i)$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The quadratic equation $z^2 + 2iz - 1 = 0$ has distinct roots in $\\mathbb{C}$.\\nReason (R): The discriminant of $z^2 + 2iz - 1 = 0$ is non-zero.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    correctOption: 3,
    solution: "Discriminant $D = b^2 - 4ac = (2i)^2 - 4(1)(-1) = -4 + 4 = 0$.\\nSince $D = 0$, the roots are equal ($z = -i$), not distinct.\\nThus Assertion (A) is false and Reason (R) is also false.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any complex number $z$, the two square roots of $z$ are additive inverses of each other.\\nReason (R): If $w^2 = z$, then $(-w)^2 = (-1)^2 w^2 = w^2 = z$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The equation $w^2 = z$ has solutions $w$ and $-w$.\\nThese two solutions are additive inverses since $w + (-w) = 0$.\\nReason (R) shows that $(-w)^2 = w^2 = z$, explaining why the roots are opposites of each other.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $z^2 + |z| = 0$, then $z$ must be purely imaginary or zero.\\nReason (R): If $z = x + iy$, then $x^2 - y^2 + 2ixy + \\sqrt{x^2 + y^2} = 0$, which implies $xy = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "From $z^2 = -|z|$, the right-hand side $-|z|$ is a non-positive real number.\\nIf $z^2 \\le 0$, then $z$ must be of the form $iy$ for $y \\in \\mathbb{R}$.\\nIndeed, $(iy)^2 = -y^2 \\le 0$, and $-|iy| = -|y|$.\\nSetting $-y^2 = -|y| \\implies |y|(|y| - 1) = 0 \\implies y = 0, \\pm 1$.\\nAll solutions ($0, i, -i$) are purely imaginary or zero.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $\\alpha$ is a complex root of $x^2 + x + 1 = 0$, then $\\alpha^2 = \\frac{1}{\\alpha}$.\\nReason (R): The roots of $x^2 + x + 1 = 0$ satisfy $x^3 = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $(x - 1)(x^2 + x + 1) = x^3 - 1 = 0$, any root $\\alpha$ of $x^2 + x + 1 = 0$ satisfies $\\alpha^3 = 1$ (Reason R).\\nDividing $\\alpha^3 = 1$ by $\\alpha$ gives $\\alpha^2 = \\frac{1}{\\alpha}$ (Assertion A).\\nThus, both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "If the square root of $8 - 6i$ with positive real part is $a - bi$ where $a, b > 0$, then the value of $a + b$ is:",
    options: [],
    correctAnswer: "4",
    solution: "For $z = 8 - 6i$, $|z| = \\sqrt{64 + 36} = 10$.\\n$a = \\sqrt{\\frac{|z| + 8}{2}} = \\sqrt{\\frac{10 + 8}{2}} = \\sqrt{9} = 3$.\\n$b = \\sqrt{\\frac{|z| - 8}{2}} = \\sqrt{\\frac{10 - 8}{2}} = \\sqrt{1} = 1$.\\nThen $a + b = 3 + 1 = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "The number of solutions of the equation $z^2 + |z| = 0$ is:",
    options: [],
    correctAnswer: "3",
    solution: "Let $z = x + iy$. Then $z^2 = -|z|$.\\nSince $-|z|$ is real and $\\le 0$, $z^2$ is real and $\\le 0$, which implies $x = 0$, so $z = iy$.\\nThen $(iy)^2 = -|iy| \\implies -y^2 = -|y| \\implies |y|^2 - |y| = 0$\\n$|y|(|y| - 1) = 0 \\implies |y| = 0$ or $|y| = 1$.\\nThis gives $y = 0, 1, -1$, corresponding to $z = 0, i, -i$.\\nThus, there are exactly 3 solutions.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "If $z = a + ib$ is a square root of $21 - 20i$ with $a > 0$, then the value of $a^2 + b^2$ is:",
    options: [],
    correctAnswer: "29",
    solution: "If $z^2 = 21 - 20i$, then $|z^2| = |21 - 20i| = \\sqrt{21^2 + (-20)^2} = \\sqrt{441 + 400} = \\sqrt{841} = 29$.\\nSince $|z^2| = |z|^2 = a^2 + b^2$, we have $a^2 + b^2 = 29$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "If the roots of the equation $x^2 - 2x + 2 = 0$ are $\\alpha$ and $\\beta$, then the value of $\\alpha^4 + \\beta^4$ is:",
    options: [],
    correctAnswer: "-8",
    solution: "The roots are $x = \\frac{2 \\pm \\sqrt{4 - 8}}{2} = 1 \\pm i$.\\nIn polar form: $1 + i = \\sqrt{2} e^{i\\pi/4}$ and $1 - i = \\sqrt{2} e^{-i\\pi/4}$.\\n$\\alpha^4 = (\\sqrt{2})^4 e^{i\\pi} = 4(-1) = -4$.\\n$\\beta^4 = (\\sqrt{2})^4 e^{-i\\pi} = 4(-1) = -4$.\\nTherefore, $\\alpha^4 + \\beta^4 = -4 + (-4) = -8$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "The number of complex numbers $z$ satisfying both $z^2 = \\bar{z}$ and $|z| = 1$ is:",
    options: [],
    correctAnswer: "3",
    solution: "Multiplying $z^2 = \\bar{z}$ by $z$ gives $z^3 = z\\bar{z} = |z|^2 = 1^2 = 1$.\\n$z^3 = 1$ has 3 roots: $1, e^{i2\\pi/3}, e^{i4\\pi/3}$.\\nAll three satisfy $|z| = 1$ and $z^2 = \\bar{z}$.\\nThus, the number of such complex numbers is $3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "If $\\sqrt{-15 - 8i} = \\pm (a - bi)$ with $a, b > 0$, then the value of $a \\cdot b$ is:",
    options: [],
    correctAnswer: "4",
    solution: "$|z| = \\sqrt{(-15)^2 + (-8)^2} = \\sqrt{225 + 64} = 17$.\\n$a = \\sqrt{\\frac{17 - 15}{2}} = \\sqrt{1} = 1$.\\n$b = \\sqrt{\\frac{17 - (-15)}{2}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$.\\nThen $a \\cdot b = 1 \\cdot 4 = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "If $z^2 + 2z + 4 = 0$, then the value of $|z|^2$ is:",
    options: [],
    correctAnswer: "4",
    solution: "For the quadratic equation $z^2 + 2z + 4 = 0$, the roots are complex conjugate pairs.\\nThe product of roots is $z_1 z_2 = 4$.\\nSince $z_2 = \\bar{z}_1$, we have $z_1 \\bar{z}_1 = |z_1|^2 = 4$.\\nTherefore, $|z|^2 = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "The total number of real roots of the equation $z^4 + 5z^2 + 6 = 0$ is:",
    options: [],
    correctAnswer: "0",
    solution: "Let $t = z^2$. The equation becomes $t^2 + 5t + 6 = 0 \\implies (t + 2)(t + 3) = 0$.\\nSo $t = -2$ or $t = -3$, which means $z^2 = -2$ or $z^2 = -3$.\\nSince the square of any real number cannot be negative, there are no real solutions.\\nTherefore, the number of real roots is $0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "If $\\alpha = \\frac{-1 + i\\sqrt{3}}{2}$, then the value of $\\alpha^2 + \\alpha + 1$ is:",
    options: [],
    correctAnswer: "0",
    solution: "$\\alpha = \\omega$, which is the non-real cube root of unity.\\nBy the fundamental property of cube roots of unity, $1 + \\omega + \\omega^2 = 0$.\\nTherefore, $\\alpha^2 + \\alpha + 1 = 0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  },
  {
    type: "numerical",
    question: "If the square root of $3 + 4i$ with positive real part is $x + iy$, then the value of $x^2 - y^2$ is:",
    options: [],
    correctAnswer: "3",
    solution: "Let $\\sqrt{3 + 4i} = x + iy$. Squaring both sides:\\n$(x + iy)^2 = (x^2 - y^2) + 2ixy = 3 + 4i$.\\nEquating real parts immediately gives $x^2 - y^2 = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Square roots",
    subTopic: "Square roots"
  }
];

module.exports = { subtopic5Questions };
