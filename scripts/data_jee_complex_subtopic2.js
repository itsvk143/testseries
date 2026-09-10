// scripts/data_jee_complex_subtopic2.js
// Subtopic 2: Euler's form and rotation of complex numbers (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic2Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "If $\\omega$ is a non-real cube root of unity, then the value of $(1 - \\omega + \\omega^2)^5 + (1 + \\omega - \\omega^2)^5$ is:",
    options: [
      "$32$",
      "$-32$",
      "$64$",
      "$-64$"
    ],
    correctAnswer: 0,
    explanation: "Since $1 + \\omega + \\omega^2 = 0$, we have $1 + \\omega^2 = -\\omega$ and $1 + \\omega = -\\omega^2$. Thus $(1 - \\omega + \\omega^2)^5 = (-\\omega - \\omega)^5 = (-2\\omega)^5 = -32\\omega^5 = -32\\omega^2$. And $(1 + \\omega - \\omega^2)^5 = (-\\omega^2 - \\omega^2)^5 = (-2\\omega^2)^5 = -32\\omega^{10} = -32\\omega$. Their sum is $-32(\\omega^2 + \\omega) = -32(-1) = 32$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "A complex number $z = 3 + 4i$ is rotated about the origin through an angle of $90^\\circ$ in the clockwise direction. The resulting complex number is:",
    options: [
      "$4 - 3i$",
      "$-4 + 3i$",
      "$-4 - 3i$",
      "$3 - 4i$"
    ],
    correctAnswer: 0,
    explanation: "Rotating by $90^\\circ$ clockwise corresponds to multiplying by $e^{-i\\pi/2} = -i$. Thus $z_{\\text{new}} = (3 + 4i)(-i) = -3i - 4i^2 = 4 - 3i$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $\\alpha$ and $\\beta$ are the non-real cube roots of unity, then the value of $\\alpha^4 + \\beta^4 + \\alpha^{-1}\\beta^{-1}$ is:",
    options: [
      "$0$",
      "$1$",
      "$-1$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "The non-real cube roots of unity are $\\omega$ and $\\omega^2$. Then $\\alpha^4 + \\beta^4 = \\omega^4 + (\\omega^2)^4 = \\omega + \\omega^8 = \\omega + \\omega^2 = -1$. And $\\alpha^{-1}\\beta^{-1} = \\frac{1}{\\alpha\\beta} = \\frac{1}{\\omega \\cdot \\omega^2} = \\frac{1}{\\omega^3} = 1$. The sum is $(-1) + 1 = 0$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\left(\\frac{1 + i\\sqrt{3}}{1 - i\\sqrt{3}}\\right)^6$ is:",
    options: [
      "$1$",
      "$-1$",
      "$i$",
      "$-i$"
    ],
    correctAnswer: 0,
    explanation: "Notice $1 + i\\sqrt{3} = 2 e^{i\\pi/3}$ and $1 - i\\sqrt{3} = 2 e^{-i\\pi/3}$. Thus $\\frac{1 + i\\sqrt{3}}{1 - i\\sqrt{3}} = e^{i(\\pi/3 - (-\\pi/3))} = e^{i 2\\pi/3}$. Raising this to the 6th power gives $(e^{i 2\\pi/3})^6 = e^{i 4\\pi} = 1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $z_1, z_2, z_3$ are the vertices of an equilateral triangle such that the origin is its circumcenter, and $z_1 = 2 e^{i\\pi/6}$, then $z_2$ and $z_3$ can be:",
    options: [
      "$2 e^{i 5\\pi/6}$ and $2 e^{i 3\\pi/2}$",
      "$2 e^{i 2\\pi/3}$ and $2 e^{i 4\\pi/3}$",
      "$2 e^{i \\pi/2}$ and $2 e^{i \\pi}$",
      "$2 e^{i 7\\pi/6}$ and $2 e^{i 11\\pi/6}$"
    ],
    correctAnswer: 0,
    explanation: "In an equilateral triangle with circumcenter at the origin, the vertices are spaced by rotation of $\\frac{2\\pi}{3}$. Starting at $z_1 = 2 e^{i\\pi/6}$: $z_2 = 2 e^{i(\\pi/6 + 2\\pi/3)} = 2 e^{i 5\\pi/6}$, and $z_3 = 2 e^{i(\\pi/6 + 4\\pi/3)} = 2 e^{i 9\\pi/6} = 2 e^{i 3\\pi/2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $z = \\left(\\frac{\\sqrt{3} + i}{2}\\right)^5 + \\left(\\frac{\\sqrt{3} - i}{2}\\right)^5$, then the value of $z$ is:",
    options: [
      "$-\\sqrt{3}$",
      "$\\sqrt{3}$",
      "$-1$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Notice $\\frac{\\sqrt{3} + i}{2} = \\cos(\\pi/6) + i\\sin(\\pi/6) = e^{i\\pi/6}$. Its 5th power is $e^{i 5\\pi/6} = \\cos(5\\pi/6) + i\\sin(5\\pi/6) = -\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$. Similarly, $\\left(\\frac{\\sqrt{3} - i}{2}\\right)^5 = e^{-i 5\\pi/6} = -\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$. Their sum is $2 \\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\sqrt{3}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The product of all the roots of the equation $z^n - 1 = 0$ is equal to:",
    options: [
      "$(-1)^{n-1}$",
      "$(-1)^n$",
      "$1$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "The equation is $z^n - 1 = 0$. By Vieta's formulas, the product of the $n$ roots is $(-1)^n \\times (\\text{constant term}) = (-1)^n (-1) = (-1)^{n+1} = (-1)^{n-1}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $\\omega$ is a non-real complex cube root of unity, then the value of $\\frac{a + b\\omega + c\\omega^2}{c + a\\omega + b\\omega^2}$ is:",
    options: [
      "$\\omega$",
      "$\\omega^2$",
      "$1$",
      "$a + b + c$"
    ],
    correctAnswer: 0,
    explanation: "Multiply the numerator by $\\omega^3 = 1$: $a + b\\omega + c\\omega^2 = a\\omega^3 + b\\omega^4 + c\\omega^2 = \\omega(a\\omega^2 + b\\omega^3 + c\\omega) = \\omega(c\\omega + a\\omega^2 + b)$... wait, let's multiply the denominator by $\\omega$: $\\omega(c + a\\omega + b\\omega^2) = c\\omega + a\\omega^2 + b\\omega^3 = b + c\\omega + a\\omega^2 \\neq a + b\\omega + c\\omega^2$. What if we multiply the denominator by $\\omega^2$? $\\omega^2(c + a\\omega + b\\omega^2) = c\\omega^2 + a\\omega^3 + b\\omega^4 = a + b\\omega + c\\omega^2$, which is EXACTLY the numerator! Therefore $\\frac{a + b\\omega + c\\omega^2}{c + a\\omega + b\\omega^2} = \\frac{\\omega^2(c + a\\omega + b\\omega^2)}{c + a\\omega + b\\omega^2} = \\omega^2$! Option B is $\\omega^2$! Let's make option 0 = $\\omega^2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $z = e^{i\\theta}$, then the expression $\\frac{1 + z}{1 - z}$ is equal to:",
    options: [
      "$i \\cot\\left(\\frac{\\theta}{2}\\right)$",
      "$-i \\tan\\left(\\frac{\\theta}{2}\\right)$",
      "$i \\tan\\left(\\frac{\\theta}{2}\\right)$",
      "$-i \\cot\\left(\\frac{\\theta}{2}\\right)$"
    ],
    correctAnswer: 0,
    explanation: "Using Euler's identity: $1 + z = 1 + e^{i\\theta} = e^{i\\theta/2}(e^{-i\\theta/2} + e^{i\\theta/2}) = 2\\cos(\\theta/2)e^{i\\theta/2}$. And $1 - z = 1 - e^{i\\theta} = e^{i\\theta/2}(e^{-i\\theta/2} - e^{i\\theta/2}) = -2i\\sin(\\theta/2)e^{i\\theta/2}$. Thus $\\frac{1 + z}{1 - z} = \\frac{2\\cos(\\theta/2)}{-2i\\sin(\\theta/2)} = \\frac{\\cot(\\theta/2)}{-i} = i\\cot\\left(\\frac{\\theta}{2}\\right)$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $z_1, z_2$ are complex numbers such that $|z_1| = |z_2|$ and $\\operatorname{Arg}(z_1) + \\operatorname{Arg}(z_2) = \\pi$, then $z_1$ is equal to:",
    options: [
      "$-\\bar{z}_2$",
      "$\\bar{z}_2$",
      "$-z_2$",
      "$z_2$"
    ],
    correctAnswer: 0,
    explanation: "Let $z_1 = r e^{i\\theta_1}$ and $z_2 = r e^{i\\theta_2}$ with $\\theta_1 + \\theta_2 = \\pi \\implies \\theta_1 = \\pi - \\theta_2$. Then $z_1 = r e^{i(\\pi - \\theta_2)} = r e^{i\\pi} e^{-i\\theta_2} = -r e^{-i\\theta_2} = -\\bar{z}_2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For any real number $\\theta$, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.\nReason (R): This is Euler's formula, which directly relates complex exponentials to trigonometric functions using Taylor series expansions.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Assertion (A) is Euler's celebrated formula and Reason (R) describes its standard definition and power series foundation. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $\\omega$ is a non-real cube root of unity, then $1 + \\omega + \\omega^2 = 0$.\nReason (R): The roots of $z^3 - 1 = (z - 1)(z^2 + z + 1) = 0$ include $\\omega$ and $\\omega^2$ as roots of $z^2 + z + 1 = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\omega \\neq 1$ satisfies $\\omega^3 - 1 = 0$, dividing by $\\omega - 1$ shows $\\omega^2 + \\omega + 1 = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The sum of the $n$-th roots of unity is equal to $0$ for any integer $n \\ge 2$.\nReason (R): The $n$-th roots of unity form a geometric progression with first term $1$ and common ratio $e^{i 2\\pi/n} \\neq 1$, whose sum is $\\frac{1 - (e^{i 2\\pi/n})^n}{1 - e^{i 2\\pi/n}} = \\frac{1 - 1}{1 - e^{i 2\\pi/n}} = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Sum of roots of $z^n - 1 = 0$ is $0$ by Vieta's formulas, or using the finite geometric series formula as shown in Reason. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For any integer $n$, $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$.\nReason (R): This is De Moivre's theorem, which follows from the law of exponents $(e^{i\\theta})^n = e^{i n\\theta}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "De Moivre's theorem states that $(\\operatorname{cis}\\theta)^n = \\operatorname{cis}(n\\theta)$, which directly reflects Euler's exponential multiplication. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If the segment joining $z_1$ and $z_2$ is rotated by an angle $\\alpha$ counterclockwise about $z_1$ to form segment $z_1 z_3$ with $|z_3 - z_1| = |z_2 - z_1|$, then $z_3 - z_1 = (z_2 - z_1) e^{i\\alpha}$.\nReason (R): The rotation theorem states that $\\frac{z_3 - z_1}{z_2 - z_1} = \\left|\\frac{z_3 - z_1}{z_2 - z_1}\\right| e^{i\\alpha}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The rotation theorem applies directly with equal lengths, so the scale factor is $1$, giving $z_3 - z_1 = (z_2 - z_1)e^{i\\alpha}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $(1 + \\omega)^3 = 1$.\nReason (R): Since $1 + \\omega = -\\omega^2$, $(1 + \\omega)^3 = (-\\omega^2)^3 = -\\omega^6 = -(1) = -1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is FALSE because $(1 + \\omega)^3 = -1 \\neq 1$. Reason (R) is TRUE and shows the correct computation $(-\\omega^2)^3 = -1$. Therefore, (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The non-real cube roots of unity $\\omega$ and $\\omega^2$ are complex conjugates of each other.\nReason (R): $\\omega = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ and $\\omega^2 = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$, so $\\bar{\\omega} = \\omega^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The two non-real roots of the real polynomial $z^2 + z + 1 = 0$ must be conjugate pairs. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $z = \\cos\\theta + i\\sin\\theta$, then $z^n + \\frac{1}{z^n} = 2\\cos(n\\theta)$ and $z^n - \\frac{1}{z^n} = 2i\\sin(n\\theta)$.\nReason (R): By De Moivre's theorem, $z^n = e^{i n\\theta}$ and $z^{-n} = e^{-i n\\theta}$. Adding and subtracting these gives $2\\cos(n\\theta)$ and $2i\\sin(n\\theta)$ respectively.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Adding $e^{in\\theta} + e^{-in\\theta} = 2\\cos(n\\theta)$ and subtracting gives $2i\\sin(n\\theta)$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $\\triangle ABC$ is an equilateral triangle with vertices $z_1, z_2, z_3$, then $z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$.\nReason (R): This identity is the necessary and sufficient algebraic condition for three complex numbers to form an equilateral triangle in the Argand plane.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The condition $\\frac{z_3 - z_1}{z_2 - z_1} = e^{\\pm i\\pi/3} = -\\omega^2$ or $-\\omega$ expands directly to $z_1^2 + z_2^2 + z_3^2 - z_1 z_2 - z_2 z_3 - z_3 z_1 = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "medium"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $z$ is a complex number such that $z + \\frac{1}{z} = 1$, then $z^3 = -1$.\nReason (R): Multiplying $z + \\frac{1}{z} = 1$ by $z$ gives $z^2 - z + 1 = 0$. Multiplying by $z + 1$ yields $z^3 + 1 = 0 \\implies z^3 = -1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "$z^2 - z + 1 = 0 \\implies (z + 1)(z^2 - z + 1) = z^3 + 1 = 0 \\implies z^3 = -1$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "If $\\omega$ is a complex cube root of unity, then the value of $(1 + \\omega - \\omega^2)^3 - (1 - \\omega + \\omega^2)^3$ is:",
    options: [],
    correctAnswer: "0",
    explanation: "$1 + \\omega - \\omega^2 = -2\\omega^2$. Its cube is $(-2\\omega^2)^3 = -8\\omega^6 = -8$. And $1 - \\omega + \\omega^2 = -2\\omega$. Its cube is $(-2\\omega)^3 = -8\\omega^3 = -8$. The difference is $-8 - (-8) = 0$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z + \\frac{1}{z} = 2\\cos(10^\\circ)$, then the value of $z^9 + \\frac{1}{z^9}$ is:",
    options: [],
    correctAnswer: "0",
    explanation: "By De Moivre's theorem, $z = e^{i 10^\\circ}$. Then $z^9 + \\frac{1}{z^9} = 2\\cos(9 \\times 10^\\circ) = 2\\cos(90^\\circ) = 0$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z = \\cos\\left(\\frac{\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi}{3}\\right)$, then the value of $z^6$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "By De Moivre's theorem: $z^6 = \\cos(6 \\times \\pi/3) + i\\sin(6 \\times \\pi/3) = \\cos(2\\pi) + i\\sin(2\\pi) = 1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\omega$ is a non-real cube root of unity, then the value of $(1 - \\omega)(1 - \\omega^2)$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "$(1 - \\omega)(1 - \\omega^2) = 1 - \\omega^2 - \\omega + \\omega^3 = 1 - (\\omega + \\omega^2) + 1 = 1 - (-1) + 1 = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\omega$ is a non-real cube root of unity, then the value of $(2 + \\omega + \\omega^2)^4$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "Since $1 + \\omega + \\omega^2 = 0$, $2 + \\omega + \\omega^2 = 1 + (1 + \\omega + \\omega^2) = 1 + 0 = 1$. Thus $1^4 = 1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z + \\frac{1}{z} = \\sqrt{3}$, then the value of $z^6 + \\frac{1}{z^6}$ is:",
    options: [],
    correctAnswer: "-2",
    explanation: "Since $z + \\frac{1}{z} = \\sqrt{3} = 2\\cos(30^\\circ)$, $z = e^{i\\pi/6}$. Then $z^6 + \\frac{1}{z^6} = 2\\cos(6 \\times \\pi/6) = 2\\cos\\pi = 2(-1) = -2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "medium"
  },
  {
    type: "numerical",
    question: "If $\\omega$ is a complex cube root of unity, then the value of $(1 - \\omega + \\omega^2)(1 + \\omega - \\omega^2)$ is:",
    options: [],
    correctAnswer: "4",
    explanation: "$1 - \\omega + \\omega^2 = -2\\omega$ and $1 + \\omega - \\omega^2 = -2\\omega^2$. Their product is $(-2\\omega)(-2\\omega^2) = 4\\omega^3 = 4(1) = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $(1 + i\\sqrt{3})^3$ is:",
    options: [],
    correctAnswer: "-8",
    explanation: "$1 + i\\sqrt{3} = 2 e^{i\\pi/3}$. Thus $(1 + i\\sqrt{3})^3 = 2^3 e^{i\\pi} = 8(-1) = -8$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\sum_{k=1}^6 \\left(\\cos\\frac{2k\\pi}{7} + i\\sin\\frac{2k\\pi}{7}\\right)$ is:",
    options: [],
    correctAnswer: "-1",
    explanation: "The 7th roots of unity satisfy $\\sum_{k=0}^6 e^{i 2k\\pi/7} = 0$. Since the $k=0$ term is $e^0 = 1$, the sum from $k=1$ to $6$ is $0 - 1 = -1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\omega$ is a complex cube root of unity, then the value of $\\left(3 + 3\\omega + 5\\omega^2\\right)^6$ is:",
    options: [],
    correctAnswer: "64",
    explanation: "$3 + 3\\omega + 5\\omega^2 = 3(1 + \\omega + \\omega^2) + 2\\omega^2 = 0 + 2\\omega^2 = 2\\omega^2$. Raising to the 6th power: $(2\\omega^2)^6 = 2^6 \\omega^{12} = 64(1) = 64$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Euler's form and rotation of complex numbers",
    difficulty: "easy"
  }
];

// Clean up question 8 of single_choice
subtopic2Questions[7].options[0] = "$\\omega^2$";
subtopic2Questions[7].correctAnswer = 0;

module.exports = { subtopic2Questions };
