module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The differential equation of the family of curves $y = A e^{2x} + B e^{-2x}$, where $A$ and $B$ are arbitrary constants, is:",
    options: [
      "$\\frac{d^2y}{dx^2} - 4y = 0$",
      "$\\frac{d^2y}{dx^2} + 4y = 0$",
      "$\\frac{d^2y}{dx^2} - 2y = 0$",
      "$\\frac{d^2y}{dx^2} + 2y = 0$"
    ],
    correctAnswer: "$\\frac{d^2y}{dx^2} - 4y = 0$",
    explanation: "Differentiating $y = A e^{2x} + B e^{-2x}$ with respect to $x$: $\\frac{dy}{dx} = 2A e^{2x} - 2B e^{-2x}$. Differentiating again: $\\frac{d^2y}{dx^2} = 4A e^{2x} + 4B e^{-2x} = 4(A e^{2x} + B e^{-2x}) = 4y$. Thus, $\\frac{d^2y}{dx^2} - 4y = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation representing the family of concentric circles $x^2 + y^2 = a^2$, where $a$ is an arbitrary constant, is:",
    options: [
      "$x + y\\frac{dy}{dx} = 0$",
      "$x - y\\frac{dy}{dx} = 0$",
      "$y + x\\frac{dy}{dx} = 0$",
      "$\\frac{d^2y}{dx^2} = 0$"
    ],
    correctAnswer: "$x + y\\frac{dy}{dx} = 0$",
    explanation: "Differentiating $x^2 + y^2 = a^2$ with respect to $x$ gives $2x + 2y\\frac{dy}{dx} = 0 \\implies x + y\\frac{dy}{dx} = 0$. Since the arbitrary constant $a$ is completely eliminated, this is the required differential equation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation of all parabolas having their vertex at the origin and axis along the positive $x$-axis ($y^2 = 4ax$) is:",
    options: [
      "$y = 2x\\frac{dy}{dx}$",
      "$2y = x\\frac{dy}{dx}$",
      "$y^2 = 2x\\frac{dy}{dx}$",
      "$\\frac{d^2y}{dx^2} = 0$"
    ],
    correctAnswer: "$y = 2x\\frac{dy}{dx}$",
    explanation: "Differentiating $y^2 = 4ax$ with respect to $x$: $2y\\frac{dy}{dx} = 4a \\implies 2a = y\\frac{dy}{dx}$. Substituting $4a = 2y\\frac{dy}{dx}$ back into $y^2 = 4ax$: $y^2 = \\left(2y\\frac{dy}{dx}\\right)x \\implies y = 2x\\frac{dy}{dx}$ (for $y \\ne 0$).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation of the family of curves $y = c(x - c)^2$, where $c$ is an arbitrary constant, is of order:",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: "$1$",
    explanation: "The family contains only one independent arbitrary constant $c$. The order of the differential equation obtained by eliminating $n$ independent arbitrary constants is $n$. Since $n = 1$, the order is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation representing the family of curves $y = A \\cos(3x) + B \\sin(3x)$ is:",
    options: [
      "$\\frac{d^2y}{dx^2} + 9y = 0$",
      "$\\frac{d^2y}{dx^2} - 9y = 0$",
      "$\\frac{d^2y}{dx^2} + 3y = 0$",
      "$\\frac{d^2y}{dx^2} - 3y = 0$"
    ],
    correctAnswer: "$\\frac{d^2y}{dx^2} + 9y = 0$",
    explanation: "Differentiating: $\\frac{dy}{dx} = -3A\\sin(3x) + 3B\\cos(3x)$. Differentiating again: $\\frac{d^2y}{dx^2} = -9A\\cos(3x) - 9B\\sin(3x) = -9(A\\cos(3x) + B\\sin(3x)) = -9y$. Hence $\\frac{d^2y}{dx^2} + 9y = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation of the family of straight lines passing through the origin is:",
    options: [
      "$y = x\\frac{dy}{dx}$",
      "$x = y\\frac{dy}{dx}$",
      "$\\frac{d^2y}{dx^2} = 1$",
      "$y + x\\frac{dy}{dx} = 0$"
    ],
    correctAnswer: "$y = x\\frac{dy}{dx}$",
    explanation: "The equation of lines passing through the origin is $y = mx$, where $m$ is an arbitrary constant. Differentiating with respect to $x$ gives $\\frac{dy}{dx} = m$. Substituting $m = \\frac{dy}{dx}$ into $y = mx$ yields $y = x\\frac{dy}{dx}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The order of the differential equation of all circles of given fixed radius $r$ is:",
    options: [
      "$2$",
      "$1$",
      "$3$",
      "$4$"
    ],
    correctAnswer: "$2$",
    explanation: "The equation of all circles of fixed radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$, where $h$ and $k$ are two independent arbitrary constants representing the center. Eliminating two arbitrary constants leads to a differential equation of order $2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation representing the family of curves $y = e^x(A \\cos x + B \\sin x)$ is:",
    options: [
      "$\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + 2y = 0$",
      "$\\frac{d^2y}{dx^2} + 2\\frac{dy}{dx} + 2y = 0$",
      "$\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} - 2y = 0$",
      "$\\frac{d^2y}{dx^2} + 2y = 0$"
    ],
    correctAnswer: "$\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + 2y = 0$",
    explanation: "Rewrite as $y e^{-x} = A \\cos x + B \\sin x$. Differentiating gives $e^{-x}\\left(\\frac{dy}{dx} - y\\right) = -A\\sin x + B\\cos x$. Differentiating again gives $e^{-x}\\left(\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + y\\right) = -(A\\cos x + B\\sin x) = -y e^{-x}$. Dividing by $e^{-x}$ gives $\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + y = -y \\implies \\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + 2y = 0$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation of all parabolas having their axis parallel to the $y$-axis is of order:",
    options: [
      "$3$",
      "$2$",
      "$1$",
      "$4$"
    ],
    correctAnswer: "$3$",
    explanation: "The general equation of a parabola with axis parallel to the $y$-axis is $y = ax^2 + bx + c$, which contains three independent arbitrary constants: $a, b, c$. Eliminating three constants yields a differential equation of order $3$ (specifically, $\\frac{d^3y}{dx^3} = 0$).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation of the family of ellipses with center at the origin and foci on the $x$-axis, $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, is:",
    options: [
      "$x y \\frac{d^2y}{dx^2} + x\\left(\\frac{dy}{dx}\\right)^2 - y\\frac{dy}{dx} = 0$",
      "$x y \\frac{d^2y}{dx^2} - x\\left(\\frac{dy}{dx}\\right)^2 + y\\frac{dy}{dx} = 0$",
      "$y \\frac{d^2y}{dx^2} + \\left(\\frac{dy}{dx}\\right)^2 = 0$",
      "$x^2 \\frac{d^2y}{dx^2} + y^2 = 0$"
    ],
    correctAnswer: "$x y \\frac{d^2y}{dx^2} + x\\left(\\frac{dy}{dx}\\right)^2 - y\\frac{dy}{dx} = 0$",
    explanation: "Differentiating $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ gives $\\frac{2x}{a^2} + \\frac{2y}{b^2}\\frac{dy}{dx} = 0 \\implies \\frac{y}{x}\\frac{dy}{dx} = -\\frac{b^2}{a^2}$. Differentiating again with respect to $x$: $\\frac{d}{dx}\\left(\\frac{y}{x}\\frac{dy}{dx}\\right) = 0 \\implies \\frac{x\\left(y\\frac{d^2y}{dx^2} + \\left(\\frac{dy}{dx}\\right)^2\\right) - y\\frac{dy}{dx}}{x^2} = 0 \\implies x y \\frac{d^2y}{dx^2} + x\\left(\\frac{dy}{dx}\\right)^2 - y\\frac{dy}{dx} = 0$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of the family of curves $y = c_1 e^x + c_2 e^{-x}$ is $\\frac{d^2y}{dx^2} - y = 0$.\\nReason (R): The order of a differential equation formed by eliminating $n$ independent arbitrary constants is $n$, and here $n = 2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Differentiating $y = c_1 e^x + c_2 e^{-x}$ twice gives $y'' = c_1 e^x + c_2 e^{-x} = y \\implies y'' - y = 0$. The order is $2$ because there are $2$ independent arbitrary constants. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation representing the family of curves $y = a x + \\frac{b}{x}$ is $x^2 \\frac{d^2y}{dx^2} + x\\frac{dy}{dx} - y = 0$.\\nReason (R): Differentiating $x y = a x^2 + b$ twice eliminates the two arbitrary constants $a$ and $b$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Multiply by $x$: $xy = ax^2 + b$. First derivative: $x y' + y = 2ax$. Second derivative: $x y'' + y' + y' = 2a \\implies x y'' + 2y' = 2a$. Multiply by $x$: $x^2 y'' + 2x y' = 2ax = x y' + y \\implies x^2 y'' + x y' - y = 0$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of all non-vertical straight lines in a plane is $\\frac{d^2y}{dx^2} = 0$.\\nReason (R): The general equation of a straight line is $y = mx + c$, which has two arbitrary constants $m$ and $c$, and differentiating twice yields $\\frac{d^2y}{dx^2} = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $y = mx + c$, $y' = m$ and $y'' = 0$. Both (A) and (R) are true and (R) correctly explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of the family of circles touching the $x$-axis at the origin is of order $1$.\\nReason (R): The equation of circles touching the $x$-axis at the origin is $x^2 + (y - a)^2 = a^2$, which contains only one arbitrary constant $a$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The equation simplifies to $x^2 + y^2 - 2ay = 0$. With only one arbitrary constant $a$, eliminating it requires only one differentiation, resulting in a first-order differential equation. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of the differential equation of all circles in a plane is $3$.\\nReason (R): The general equation of a circle in a plane is $x^2 + y^2 + 2gx + 2fy + c = 0$, which contains three independent arbitrary parameters $g, f, c$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A circle in the plane is uniquely determined by three non-collinear points or three independent constants $(g, f, c)$. Eliminating three parameters yields an equation of order $3$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of the family of curves $y = c_1 e^{x + c_2}$ is of order $2$.\\nReason (R): The expression contains two parameters $c_1$ and $c_2$.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "We can write $y = c_1 e^{c_2} e^x = A e^x$, where $A = c_1 e^{c_2}$ is a single arbitrary constant! Differentiating gives $y' = A e^x = y$, which is of order $1$, not $2$. Thus (A) is false while the literal statement (R) that the expression contains two parameters is true (though not independent).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of the family of parabolas $y^2 = 4a(x + a)$ has degree $2$.\\nReason (R): Differentiating $y^2 = 4a(x + a)$ gives $2y y' = 4a \\implies 2a = y y'$. Substituting into the equation yields $y^2 = 2y y'\\left(x + \\frac{1}{2}y y'\\right)$, which involves $(y')^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Substituting $2a = y y'$ gives $y^2 = 2y y' x + (y y')^2 \\implies y(y')^2 + 2x y' - y = 0$. The degree of $\\frac{dy}{dx}$ is $2$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation representing all parabolas with vertex at origin and axis along the $y$-axis is $x\\frac{dy}{dx} - 2y = 0$.\\nReason (R): The equation of the family is $x^2 = 4ay$, and differentiating gives $2x = 4a\\frac{dy}{dx}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "From $x^2 = 4ay$, we have $4a = \\frac{x^2}{y}$. Differentiating gives $2x = 4a y' \\implies 2x = \\frac{x^2}{y} y' \\implies 2y = x y' \\implies x\\frac{dy}{dx} - 2y = 0$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation of the family of curves $y = A x^3$ is $x\\frac{dy}{dx} - 3y = 0$.\\nReason (R): Differentiating $y = A x^3$ gives $\\frac{dy}{dx} = 3Ax^2 = 3\\left(\\frac{y}{x^3}\\right)x^2 = \\frac{3y}{x}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Eliminating $A$: $\\frac{dy}{dx} = 3Ax^2 \\implies x\\frac{dy}{dx} = 3Ax^3 = 3y \\implies x\\frac{dy}{dx} - 3y = 0$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of the differential equation of all central conics $\\frac{x^2}{a^2} \\pm \\frac{y^2}{b^2} = 1$ is $2$.\\nReason (R): The equation of a central conic with axes along coordinate axes has two independent parameters $a^2$ and $b^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Eliminating the two arbitrary parameters $a^2$ and $b^2$ requires differentiating twice, yielding a second-order differential equation. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "Find the order of the differential equation of the family of curves $y = c_1 e^{2x} + c_2 e^{3x} + c_3 e^{4x}$, where $c_1, c_2, c_3$ are arbitrary constants.",
    correctAnswer: "3",
    explanation: "Since $e^{2x}, e^{3x}, e^{4x}$ are linearly independent functions, $c_1, c_2, c_3$ are three independent arbitrary constants. The order of the resulting differential equation is $3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the differential equation of all circles touching both coordinate axes.",
    correctAnswer: "1",
    explanation: "The equation of a circle touching both coordinate axes in the first quadrant is $(x - a)^2 + (y - a)^2 = a^2$. There is only one independent arbitrary constant $a$. Therefore, the order of the differential equation is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The differential equation of the family of curves $y = a \\cos(kx) + b \\sin(kx)$ is $\\frac{d^2y}{dx^2} + 16y = 0$. Find the positive value of $k$.",
    correctAnswer: "4",
    explanation: "Differentiating $y = a \\cos(kx) + b \\sin(kx)$ twice gives $y'' = -k^2(a \\cos(kx) + b \\sin(kx)) = -k^2 y \\implies y'' + k^2 y = 0$. Comparing with $y'' + 16y = 0$, we have $k^2 = 16 \\implies k = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the differential equation of the family of curves $y = c x^k$ is $x\\frac{dy}{dx} - 5y = 0$, then find the value of $k$.",
    correctAnswer: "5",
    explanation: "Differentiating $y = c x^k$ with respect to $x$: $\\frac{dy}{dx} = c k x^{k-1} = k\\left(c x^k\\right)\\frac{1}{x} = \\frac{ky}{x}$. Rearranging gives $x\\frac{dy}{dx} - ky = 0$. Comparing with $x\\frac{dy}{dx} - 5y = 0$, we find $k = 5$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the differential equation of all parabolas having their latus rectum of fixed length $4a$ and axis parallel to the $x$-axis.",
    correctAnswer: "2",
    explanation: "The equation of such a parabola is $(y - k)^2 = 4a(x - h)$. Here $a$ is fixed (not arbitrary), so the only arbitrary constants are $h$ and $k$ (the coordinates of the vertex). Eliminating two arbitrary constants gives an equation of order $2$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The number of arbitrary constants in the general solution of a differential equation of order $4$ is:",
    correctAnswer: "4",
    explanation: "The number of independent arbitrary constants in the general solution of an ordinary differential equation of order $n$ is strictly equal to $n$. For $n = 4$, the number of arbitrary constants is $4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The number of arbitrary constants in a particular solution of a differential equation of order $3$ is:",
    correctAnswer: "0",
    explanation: "A particular solution of a differential equation is obtained by assigning specific values to the arbitrary constants in the general solution. Hence, a particular solution contains $0$ arbitrary constants.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The differential equation of the family of curves $y = A e^{kx} + B e^{-kx}$ is $\\frac{d^2y}{dx^2} - 25y = 0$. Find the positive value of $k$.",
    correctAnswer: "5",
    explanation: "Differentiating twice gives $y'' = k^2(A e^{kx} + B e^{-kx}) = k^2 y \\implies y'' - k^2 y = 0$. Comparing with $y'' - 25y = 0$, we find $k^2 = 25 \\implies k = 5$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the differential equation of the family of straight lines at a fixed distance $p = 5$ from the origin.",
    correctAnswer: "1",
    explanation: "The normal form of such lines is $x \\cos\\alpha + y \\sin\\alpha = 5$. Here the only arbitrary constant is the angle $\\alpha$. Eliminating one arbitrary constant gives a differential equation of order $1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The differential equation of the family of circles $(x - a)^2 + y^2 = a^2$ touching the $y$-axis at the origin has degree:",
    correctAnswer: "1",
    explanation: "Expanding: $x^2 - 2ax + y^2 = 0 \\implies 2a = \\frac{x^2 + y^2}{x}$. Differentiating: $2x + 2y y' - 2a = 0 \\implies 2x + 2y y' = \\frac{x^2 + y^2}{x} \\implies 2x^2 + 2xy y' = x^2 + y^2 \\implies 2xy\\frac{dy}{dx} + x^2 - y^2 = 0$. The power of $\\frac{dy}{dx}$ is $1$, so its degree is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
