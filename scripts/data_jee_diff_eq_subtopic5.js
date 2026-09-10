module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The order and degree of the differential equation $\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^{3/2} = 5\\frac{d^2y}{dx^2}$ are respectively:",
    options: [
      "$2$ and $2$",
      "$2$ and $3$",
      "$3$ and $2$",
      "$2$ and $1$"
    ],
    correctAnswer: "$2$ and $2$",
    explanation: "Squaring both sides to eliminate the fractional power: $\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^3 = 25\\left(\\frac{d^2y}{dx^2}\\right)^2$. The highest order derivative is $\\frac{d^2y}{dx^2}$ (order $2$), and its highest exponent is $2$ (degree $2$). Hence, the order is $2$ and the degree is $2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The degree of the differential equation $\\frac{d^2y}{dx^2} + 3\\left(\\frac{dy}{dx}\\right)^2 = x^2 \\ln\\left(\\frac{d^2y}{dx^2}\\right)$ is:",
    options: [
      "Not defined",
      "$1$",
      "$2$",
      "$3$"
    ],
    correctAnswer: "Not defined",
    explanation: "Because the highest derivative $\\frac{d^2y}{dx^2}$ appears inside the natural logarithm function, the differential equation cannot be expressed as a polynomial in derivatives. Therefore, its degree is not defined.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The order of the differential equation of all circles touching the $y$-axis at the origin is:",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: "$1$",
    explanation: "The equation of any circle touching the $y$-axis at the origin is $(x - a)^2 + y^2 = a^2 \\implies x^2 + y^2 - 2ax = 0$. This family contains only one independent arbitrary constant $a$. Therefore, the order of the corresponding differential equation is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $m$ and $n$ are the order and degree of the differential equation $y = x\\frac{dy}{dx} + \\frac{2}{\\frac{dy}{dx}}$, then $m + n$ is equal to:",
    options: [
      "$3$",
      "$2$",
      "$4$",
      "$5$"
    ],
    correctAnswer: "$3$",
    explanation: "Multiplying by $\\frac{dy}{dx}$ gives $y\\frac{dy}{dx} = x\\left(\\frac{dy}{dx}\\right)^2 + 2 \\implies x\\left(\\frac{dy}{dx}\\right)^2 - y\\frac{dy}{dx} + 2 = 0$. The highest derivative is $\\frac{dy}{dx}$, so order $m = 1$. Its highest power is $2$, so degree $n = 2$. Thus $m + n = 1 + 2 = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The order and degree of the differential equation $\\frac{d^3y}{dx^3} = \\sqrt[4]{y + \\left(\\frac{dy}{dx}\\right)^2}$ are respectively:",
    options: [
      "$3$ and $4$",
      "$3$ and $2$",
      "$3$ and $1$",
      "$4$ and $3$"
    ],
    correctAnswer: "$3$ and $4$",
    explanation: "Raising both sides to the power $4$ eliminates the radical: $\\left(\\frac{d^3y}{dx^3}\\right)^4 = y + \\left(\\frac{dy}{dx}\\right)^2$. The highest derivative is $\\frac{d^3y}{dx^3}$ (order $3$), and its exponent is $4$ (degree $4$).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation of all lines tangent to the parabola $y^2 = 4ax$ has order and degree respectively:",
    options: [
      "$1$ and $2$",
      "$1$ and $1$",
      "$2$ and $1$",
      "$2$ and $2$"
    ],
    correctAnswer: "$1$ and $2$",
    explanation: "Any tangent to $y^2 = 4ax$ is $y = mx + \\frac{a}{m}$, where $m = \\frac{dy}{dx}$. Substituting gives $y = x\\frac{dy}{dx} + \\frac{a}{\\frac{dy}{dx}} \\implies x\\left(\\frac{dy}{dx}\\right)^2 - y\\frac{dy}{dx} + a = 0$. The order is $1$ and the degree is $2$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Which of the following differential equations has a defined degree?",
    options: [
      "$\\left(\\frac{d^2y}{dx^2}\\right)^2 + \\cos\\left(\\frac{dy}{dx}\\right) = 0$",
      "$\\frac{dy}{dx} + e^{\\frac{dy}{dx}} = x$",
      "$\\left(\\frac{d^2y}{dx^2}\\right)^3 + x\\left(\\frac{dy}{dx}\\right)^4 + y = 0$",
      "$\\ln\\left(\\frac{dy}{dx}\\right) = 2x + 3y$"
    ],
    correctAnswer: "$\\left(\\frac{d^2y}{dx^2}\\right)^3 + x\\left(\\frac{dy}{dx}\\right)^4 + y = 0$",
    explanation: "A differential equation has a defined degree if and only if it can be written as a polynomial in all its derivatives. In option C, all derivatives appear with non-negative integer powers in a purely polynomial form, so its degree is $3$. All other options contain transcendental functions of derivatives.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The order of the differential equation of the family of ellipses with center at the origin and foci on coordinate axes is:",
    options: [
      "$2$",
      "$1$",
      "$3$",
      "$4$"
    ],
    correctAnswer: "$2$",
    explanation: "The equation is $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, which contains two independent arbitrary parameters ($a^2$ and $b^2$). Hence, the order of its differential equation is $2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The order and degree of the differential equation $\\rho = \\frac{\\left[1 + \\left(y'\\right)^2\\right]^{3/2}}{y''}$ (radius of curvature) are:",
    options: [
      "Order $2$, Degree $2$",
      "Order $2$, Degree $3$",
      "Order $1$, Degree $2$",
      "Order $2$, Degree $1$"
    ],
    correctAnswer: "Order $2$, Degree $2$",
    explanation: "Rewrite as $\\rho y'' = \\left[1 + (y')^2\\right]^{3/2}$. Squaring both sides gives $\\rho^2 (y'')^2 = \\left[1 + (y')^2\\right]^3$. The highest derivative is $y''$ (order $2$), and its exponent is $2$ (degree $2$).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The degree of the differential equation $\\left(\\frac{d^3y}{dx^3}\\right)^2 + \\left(\\frac{d^2y}{dx^2}\\right)^5 - 4\\frac{dy}{dx} + y = 0$ is:",
    options: [
      "$2$",
      "$5$",
      "$3$",
      "$1$"
    ],
    correctAnswer: "$2$",
    explanation: "The highest order derivative is $\\frac{d^3y}{dx^3}$ (order $3$). The degree is the power of the highest order derivative, which is $2$ (not $5$, because $5$ is the power of the second derivative $\\frac{d^2y}{dx^2}$).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The degree of the differential equation $\\frac{d^2y}{dx^2} + \\cos\\left(\\frac{dy}{dx}\\right) = 0$ is undefined.\\nReason (R): The degree of a differential equation is defined only when it can be expressed as a polynomial equation in its derivatives.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because $\\frac{dy}{dx}$ is inside $\\cos$, the equation cannot be represented as a polynomial in all its derivatives. Hence the degree is undefined. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a differential equation is always a positive integer.\\nReason (R): The order of a differential equation is defined as the order of the highest order derivative occurring in the equation.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Derivatives are counted by positive integers $1, 2, 3, \\dots$, so the order of the highest derivative is always a positive integer. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The degree of the differential equation $\\left(\\frac{d^2y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 = x$ is $3$.\\nReason (R): The degree is the power of the highest order derivative present in the polynomial form of the equation.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The highest order derivative is $\\frac{d^2y}{dx^2}$ (order $2$), and its exponent is $3$. Hence the degree is $3$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of the differential equation representing all parabolas in a plane is $4$.\\nReason (R): The general equation of a parabola in a plane contains five coefficients, but due to the condition $h^2 = ab$ and projective equivalence, it depends on four independent parameters.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A general parabola in the plane has focus $(h, k)$, directrix $ax + by + c = 0$, giving $4$ independent geometric parameters. Eliminating them results in a differential equation of order $4$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The degree of $\\frac{dy}{dx} + \\sin y = 0$ is $1$.\\nReason (R): The presence of $\\sin y$ does not affect the degree of the differential equation because the equation is still a polynomial in the derivative $\\frac{dy}{dx}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The polynomial condition applies only to derivatives, not to the dependent or independent variables themselves. Since $\\frac{dy}{dx}$ appears as a polynomial term of exponent $1$, the degree is $1$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\sqrt{\\frac{dy}{dx}} + x = y$ has degree $1$.\\nReason (R): Squaring both sides yields $\\frac{dy}{dx} = (y - x)^2$, which is a polynomial equation in $\\frac{dy}{dx}$ of power $1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Eliminating the radical gives $\\frac{dy}{dx} = (y - x)^2$. The exponent of $\\frac{dy}{dx}$ is $1$, so the degree is $1$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order and degree of $\\frac{d^2y}{dx^2} = \\left(1 + \\frac{dy}{dx}\\right)^{2/3}$ are $2$ and $3$ respectively.\\nReason (R): Cubing both sides eliminates the fractional power, giving $\\left(\\frac{d^2y}{dx^2}\\right)^3 = \\left(1 + \\frac{dy}{dx}\\right)^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Cubing eliminates the fraction, resulting in highest derivative $\\frac{d^2y}{dx^2}$ (order $2$) raised to power $3$ (degree $3$). Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a differential equation can be a negative integer.\\nReason (R): The order of a differential equation is simply the degree of the polynomial.",
    options: [
      "(A) is false but (R) is false",
      "(A) is false but (R) is true",
      "(A) is true but (R) is false",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)"
    ],
    correctAnswer: "(A) is false but (R) is false",
    explanation: "Order is the order of the highest derivative (a positive integer), never negative. Reason is also false because order is not the degree of the polynomial. Both (A) and (R) are false.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of all circles with center on the $x$-axis has order $2$.\\nReason (R): The equation of circles with center on the $x$-axis is $(x - h)^2 + y^2 = r^2$, which contains two independent arbitrary constants $h$ and $r$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The two independent constants are the abscissa of the center $h$ and the radius $r$. Eliminating two constants yields an equation of order $2$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The degree of the differential equation $e^{y'} + y = 0$ is $1$.\\nReason (R): When rewritten as $y' = \\ln(-y)$, the derivative $y'$ appears with exponent $1$.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "In the original form $e^{y'} + y = 0$, $y'$ is in the exponent. Although rewriting gives $y' = \\ln(-y)$, $\\ln(-y)$ requires $-y > 0$, and traditionally such equations are classified as having undefined degree in standard calculus curricula. More directly, (A) is false because $e^{y'} + y = 0$ cannot be expressed as a polynomial in all derivatives without transcendental operations on $y$. Thus (A) is false and (R) is true as an algebraic step.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "Find the order of the differential equation $\\frac{d^4y}{dx^4} + \\left(\\frac{d^2y}{dx^2}\\right)^3 - 6\\frac{dy}{dx} + y = 0$.",
    correctAnswer: "4",
    explanation: "The highest order derivative in the equation is $\\frac{d^4y}{dx^4}$. Therefore, the order is $4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the degree of the differential equation $\\left(\\frac{d^2y}{dx^2}\\right)^3 + 2\\left(\\frac{dy}{dx}\\right)^4 + y = 0$.",
    correctAnswer: "3",
    explanation: "The highest order derivative is $\\frac{d^2y}{dx^2}$ (order $2$). Its exponent in the polynomial equation is $3$. Therefore, the degree is $3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $m$ and $n$ are respectively the order and degree of the differential equation $\\left[1 + \\left(\\frac{dy}{dx}\\right)^3\\right]^{2/3} = 4\\frac{d^3y}{dx^3}$, find the value of $m \\times n$.",
    correctAnswer: "9",
    explanation: "Cubing both sides to remove the fraction: $\\left[1 + \\left(\\frac{dy}{dx}\\right)^3\\right]^2 = 64\\left(\\frac{d^3y}{dx^3}\\right)^3$. The highest order derivative is $\\frac{d^3y}{dx^3}$ (order $m = 3$), and its power is $3$ (degree $n = 3$). Thus $m \\times n = 3 \\times 3 = 9$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the differential equation representing the family of curves $y = c_1 \\cos x + c_2 \\sin x + c_3 e^x + c_4 e^{-x}$, where $c_1, c_2, c_3, c_4$ are arbitrary constants.",
    correctAnswer: "4",
    explanation: "The functions $\\cos x, \\sin x, e^x, e^{-x}$ are linearly independent, so there are $4$ independent arbitrary constants. The order of the differential equation is $4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the degree of the differential equation $y = x\\frac{dy}{dx} + \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}$.",
    correctAnswer: "2",
    explanation: "Rearranging gives $y - x\\frac{dy}{dx} = \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}$. Squaring both sides: $\\left(y - x\\frac{dy}{dx}\\right)^2 = 1 + \\left(\\frac{dy}{dx}\\right)^2$. Expanding yields $y^2 - 2xy\\frac{dy}{dx} + x^2\\left(\\frac{dy}{dx}\\right)^2 = 1 + \\left(\\frac{dy}{dx}\\right)^2$. The highest derivative is $\\frac{dy}{dx}$ and its highest power is $2$. Hence the degree is $2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $m$ is the order and $n$ is the degree of $\\frac{d^2y}{dx^2} = \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^3}$, find $m + n$.",
    correctAnswer: "4",
    explanation: "Squaring both sides gives $\\left(\\frac{d^2y}{dx^2}\\right)^2 = 1 + \\left(\\frac{dy}{dx}\\right)^3$. The highest order derivative is $\\frac{d^2y}{dx^2}$, so order $m = 2$. Its power is $2$, so degree $n = 2$. Therefore, $m + n = 2 + 2 = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the differential equation of all circles passing through the origin and having their centers on the $x$-axis.",
    correctAnswer: "1",
    explanation: "The center is $(a, 0)$ and it passes through $(0, 0)$, so the radius is $|a|$. The equation is $(x - a)^2 + y^2 = a^2 \\implies x^2 - 2ax + y^2 = 0$. There is only $1$ arbitrary constant $a$. Therefore, the order is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The order of the differential equation representing the family of curves $y = (c_1 + c_2)\\cos(x + c_3) - c_4 e^{x + c_5}$ is:",
    correctAnswer: "3",
    explanation: "Let $A = c_1 + c_2$ (one constant). $\\cos(x + c_3) = \\cos x \\cos c_3 - \\sin x \\sin c_3$, which can be written as $B \\cos x + C \\sin x$ (two independent constants). And $c_4 e^{x + c_5} = (c_4 e^{c_5})e^x = D e^x$ (one constant). So $y = B \\cos x + C \\sin x - D e^x$, which contains only $3$ independent arbitrary constants: $B, C, D$. Therefore, the order of the differential equation is $3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the differential equation of the family of parabolas $y^2 = 4a(x - a)$ has degree $k$, find the value of $k$.",
    correctAnswer: "2",
    explanation: "Differentiating $y^2 = 4a(x - a)$ with respect to $x$: $2y y' = 4a \\implies 2a = y y'$. Substituting $a = \\frac{1}{2}y y'$ back into the equation: $y^2 = 2y y'\\left(x - \\frac{1}{2}y y'\\right) = 2xy y' - (y y')^2$. Dividing by $y$: $y = 2x y' - y (y')^2 \\implies y(y')^2 - 2x y' + y = 0$. The highest power of $y'$ is $2$, so the degree $k = 2$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the differential equation of all parabolas having a common focus at the origin and axis along the $x$-axis.",
    correctAnswer: "1",
    explanation: "The equation of parabolas with focus at $(0, 0)$ and axis along the $x$-axis is $r = \\frac{2a}{1 + \\cos\\theta}$, or in Cartesian coordinates $y^2 = 4a(x + a)$. There is only one parameter $a$. Thus the order is $1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  }
];
