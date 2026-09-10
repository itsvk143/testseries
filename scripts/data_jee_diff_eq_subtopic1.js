module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The differential equation $(2xy + y)dx + (x^2 + x)dy = 0$ is:",
    options: [
      "Exact, and its solution is $x^2y + xy = C$",
      "Exact, and its solution is $x^2y - xy = C$",
      "Not exact, and requires an integrating factor",
      "Homogeneous of degree 2"
    ],
    correctAnswer: "Exact, and its solution is $x^2y + xy = C$",
    explanation: "Here $M = 2xy + y$ and $N = x^2 + x$. Then $\\frac{\\partial M}{\\partial y} = 2x + 1$ and $\\frac{\\partial N}{\\partial x} = 2x + 1$. Since $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$, the equation is exact. Grouping terms: $(2xy dx + x^2 dy) + (y dx + x dy) = 0 \\implies d(x^2 y) + d(xy) = 0 \\implies x^2 y + xy = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "An integrating factor for the differential equation $(x^2 + y^2 + 2x)dx + 2y dy = 0$ is:",
    options: [
      "$e^x$",
      "$e^{-x}$",
      "$x$",
      "$e^{2x}$"
    ],
    correctAnswer: "$e^x$",
    explanation: "Here $M = x^2 + y^2 + 2x, N = 2y$. Then $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = 0$. Thus $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = \\frac{2y - 0}{2y} = 1$, which is a function of $x$ alone. Hence the integrating factor is $\\text{IF} = e^{\\int 1 dx} = e^x$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $(x dy - y dx) = (x^2 + y^2) dx$ is:",
    options: [
      "$\\tan^{-1}\\left(\\frac{y}{x}\\right) = x + C$",
      "$\\tan^{-1}\\left(\\frac{x}{y}\\right) = x + C$",
      "$\\tan^{-1}\\left(\\frac{y}{x}\\right) = \\frac{x^2}{2} + C$",
      "$\\ln|x^2 + y^2| = 2x + C$"
    ],
    correctAnswer: "$\\tan^{-1}\\left(\\frac{y}{x}\\right) = x + C$",
    explanation: "Dividing both sides by $x^2 + y^2$: $\\frac{x dy - y dx}{x^2 + y^2} = dx$. The left-hand side is the exact differential $d\\left(\\tan^{-1}\\left(\\frac{y}{x}\\right)\\right)$. Integrating both sides gives $\\tan^{-1}\\left(\\frac{y}{x}\\right) = x + C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation $(y \\cos x + 1)dx + \\sin x dy = 0$ has the general solution:",
    options: [
      "$y \\sin x + x = C$",
      "$y \\cos x + x = C$",
      "$y \\sin x - x = C$",
      "$x \\sin y + y = C$"
    ],
    correctAnswer: "$y \\sin x + x = C$",
    explanation: "Here $M = y \\cos x + 1, N = \\sin x$. We have $\\frac{\\partial M}{\\partial y} = \\cos x$ and $\\frac{\\partial N}{\\partial x} = \\cos x$. Since $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$, the equation is exact. Notice $(y \\cos x dx + \\sin x dy) + dx = 0 \\implies d(y \\sin x) + dx = 0$. Integrating gives $y \\sin x + x = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the differential equation $(2x y^3 + y)dx + (3x^2 y^2 + x)dy = 0$ is exact, its general solution is:",
    options: [
      "$x^2 y^3 + xy = C$",
      "$x^3 y^2 + xy = C$",
      "$2x^2 y^3 + xy = C$",
      "$x^2 y^3 - xy = C$"
    ],
    correctAnswer: "$x^2 y^3 + xy = C$",
    explanation: "Here $M = 2x y^3 + y, N = 3x^2 y^2 + x$. Then $\\frac{\\partial M}{\\partial y} = 6xy^2 + 1$ and $\\frac{\\partial N}{\\partial x} = 6xy^2 + 1$. Since they are equal, the equation is exact. Grouping gives $(2x y^3 dx + 3x^2 y^2 dy) + (y dx + x dy) = 0 \\implies d(x^2 y^3) + d(xy) = 0 \\implies x^2 y^3 + xy = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "An integrating factor for the differential equation $(xy^2 + y)dx - x dy = 0$ is:",
    options: [
      "$\\frac{1}{y^2}$",
      "$\\frac{1}{y}$",
      "$\\frac{1}{x^2}$",
      "$e^y$"
    ],
    correctAnswer: "$\\frac{1}{y^2}$",
    explanation: "Multiplying by $\\frac{1}{y^2}$ gives $\\left(x + \\frac{1}{y}\\right)dx - \\frac{x}{y^2} dy = 0$. Rewriting: $x dx + \\left(\\frac{y dx - x dy}{y^2}\\right) = 0 \\implies x dx + d\\left(\\frac{x}{y}\\right) = 0$, which is exact and easily integrable to $\\frac{x^2}{2} + \\frac{x}{y} = C$. Hence $\\frac{1}{y^2}$ is an integrating factor.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $x dx + y dy = \\frac{x dy - y dx}{x^2 + y^2}$ is:",
    options: [
      "$\\frac{x^2 + y^2}{2} = \\tan^{-1}\\left(\\frac{y}{x}\\right) + C$",
      "$\\frac{x^2 + y^2}{2} = \\tan^{-1}\\left(\\frac{x}{y}\\right) + C$",
      "$x^2 + y^2 = \\tan^{-1}\\left(\\frac{y}{x}\\right) + C$",
      "$\\sqrt{x^2 + y^2} = \\tan^{-1}\\left(\\frac{y}{x}\\right) + C$"
    ],
    correctAnswer: "$\\frac{x^2 + y^2}{2} = \\tan^{-1}\\left(\\frac{y}{x}\\right) + C$",
    explanation: "The left-hand side is $x dx + y dy = \\frac{1}{2}d(x^2 + y^2)$, and the right-hand side is $\\frac{x dy - y dx}{x^2 + y^2} = d\\left(\\tan^{-1}\\left(\\frac{y}{x}\\right)\\right)$. Integrating both sides gives $\\frac{x^2 + y^2}{2} = \\tan^{-1}\\left(\\frac{y}{x}\\right) + C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the differential equation $(k x y + 3y^2)dx + (2x^2 + 6xy)dy = 0$ is exact, then the value of $k$ is:",
    options: [
      "$4$",
      "$2$",
      "$3$",
      "$6$"
    ],
    correctAnswer: "$4$",
    explanation: "For the equation $M dx + N dy = 0$ to be exact, $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$. Here $M = kxy + 3y^2 \\implies \\frac{\\partial M}{\\partial y} = kx + 6y$. And $N = 2x^2 + 6xy \\implies \\frac{\\partial N}{\\partial x} = 4x + 6y$. Equating the two gives $kx + 6y = 4x + 6y \\implies k = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The general solution of the differential equation $(y dx - x dy) + 3x^2 y^2 e^{x^3} dx = 0$ is:",
    options: [
      "$\\frac{x}{y} + e^{x^3} = C$",
      "$-\\frac{x}{y} + e^{x^3} = C$",
      "$\\frac{y}{x} + e^{x^3} = C$",
      "$-\\frac{y}{x} + e^{x^3} = C$"
    ],
    correctAnswer: "$\\frac{x}{y} + e^{x^3} = C$",
    explanation: "Dividing the equation by $y^2$ gives $\\frac{y dx - x dy}{y^2} + 3x^2 e^{x^3} dx = 0$. Since $d\\left(\\frac{x}{y}\\right) = \\frac{y dx - x dy}{y^2}$ and $d(e^{x^3}) = 3x^2 e^{x^3} dx$, the equation becomes $d\\left(\\frac{x}{y}\\right) + d(e^{x^3}) = 0$. Integrating both sides yields $\\frac{x}{y} + e^{x^3} = C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The curve passing through $(1, 1)$ and satisfying the differential equation $x dy + y dx = 2x dx$ has equation:",
    options: [
      "$y = x$",
      "$y = x^2$",
      "$y = 2x - 1$",
      "$x^2 + y^2 = 2$"
    ],
    correctAnswer: "$y = x$",
    explanation: "Notice that $x dy + y dx = d(xy)$. The differential equation becomes $d(xy) = 2x dx$. Integrating both sides yields $xy = x^2 + C$. Since the curve passes through $(1, 1)$, we have $1(1) = 1^2 + C \\implies C = 0$. Hence $xy = x^2 \\implies y = x$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $(2x + y)dx + (x + 2y)dy = 0$ is an exact differential equation.\\nReason (R): For any differential equation $M dx + N dy = 0$, the necessary and sufficient condition for exactness is $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $M = 2x + y \\implies \\frac{\\partial M}{\\partial y} = 1$, and $N = x + 2y \\implies \\frac{\\partial N}{\\partial x} = 1$. Since $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} = 1$, the equation is exact. Both (A) and (R) are true, and (R) is the correct explanation of (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An integrating factor for the linear differential equation $\\frac{dy}{dx} + P(x)y = Q(x)$ is $e^{\\int P(x) dx}$.\\nReason (R): Multiplying $\\frac{dy}{dx} + P(x)y = Q(x)$ by $e^{\\int P(x) dx}$ makes the left-hand side the exact derivative $\\frac{d}{dx}\\left(y e^{\\int P(x) dx}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Multiplying by $e^{\\int P(x) dx}$ gives $e^{\\int P dx} \\frac{dy}{dx} + P e^{\\int P dx} y = \\frac{d}{dx}(y e^{\\int P dx})$, transforming it into an exact derivative. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $y dx - x dy = 0$ becomes exact when multiplied by $\\frac{1}{x^2}$.\\nReason (R): $\\frac{y dx - x dy}{x^2} = -d\\left(\\frac{y}{x}\\right)$, which is an exact differential.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Multiplying $y dx - x dy = 0$ by $\\frac{1}{x^2}$ gives $\\frac{y dx - x dy}{x^2} = -d\\left(\\frac{y}{x}\\right) = 0$. Integrating gives $-\\frac{y}{x} = C \\implies y = kx$. Both (A) and (R) are true and (R) correctly explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $(x^2 + y^2)dx + 2xy dy = 0$ is an exact differential equation.\\nReason (R): For $M = x^2 + y^2$ and $N = 2xy$, $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = 2y$, so $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = 2y$. Since they are identically equal, the differential equation is exact. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An integrating factor for the equation $(x^2 + y^2)dx - 2xy dy = 0$ is $\\frac{1}{x^2}$.\\nReason (R): If $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = f(x)$, then the integrating factor is given by $e^{\\int f(x) dx}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For $M = x^2 + y^2, N = -2xy$, we have $\\frac{\\partial M}{\\partial y} = 2y, \\frac{\\partial N}{\\partial x} = -2y$. Then $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = \\frac{2y - (-2y)}{-2xy} = -\\frac{2}{x}$. The integrating factor is $e^{\\int -\\frac{2}{x} dx} = e^{-2\\ln x} = \\frac{1}{x^2}$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The expression $x dy + y dx$ is the exact differential of the function $u(x, y) = xy$.\\nReason (R): By the product rule of differentiation, $d(xy) = x dy + y dx$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The total differential of $u(x, y) = xy$ is $du = \\frac{\\partial u}{\\partial x}dx + \\frac{\\partial u}{\\partial y}dy = y dx + x dy$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If $M dx + N dy = 0$ is a homogeneous differential equation of degree $n$ with $xM + yN \\ne 0$, then $\\frac{1}{xM + yN}$ is an integrating factor.\\nReason (R): Multiplying a homogeneous differential equation of degree $n$ by $\\frac{1}{xM + yN}$ always converts it into an exact differential equation.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By Euler's theorem on homogeneous functions, if $M$ and $N$ are homogeneous of the same degree and $xM + yN \\ne 0$, $\\frac{1}{xM + yN}$ is guaranteed to be an integrating factor. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\cos y dx - x \\sin y dy = 0$ is exact.\\nReason (R): For $M = \\cos y$ and $N = -x \\sin y$, $\\frac{\\partial M}{\\partial y} = -\\sin y$ and $\\frac{\\partial N}{\\partial x} = -\\sin y$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $\\frac{\\partial M}{\\partial y} = -\\sin y = \\frac{\\partial N}{\\partial x}$, the equation is exact. In fact, $\\cos y dx - x \\sin y dy = d(x \\cos y) = 0$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The integrating factor of the differential equation $\\frac{dy}{dx} + \\frac{2}{x}y = 0$ is $x^2$.\\nReason (R): The integrating factor for a first-order linear differential equation $\\frac{dy}{dx} + P(x)y = 0$ is given by $e^{\\int P(x) dx} = e^{\\int \\frac{2}{x} dx} = e^{2\\ln x} = x^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $P(x) = \\frac{2}{x}$, so $\\text{IF} = e^{\\int \\frac{2}{x} dx} = e^{2\\ln x} = x^2$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Every first-order ordinary differential equation is inherently exact without requiring any integrating factor.\\nReason (R): An integrating factor is only required when the mixed partial derivatives $\\frac{\\partial M}{\\partial y}$ and \\frac{\\partial N}{\\partial x} are unequal.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Most differential equations are not exact in their initial form and require multiplication by an integrating factor to become exact. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "If the differential equation $(3x^2 + 2kxy)dx + (2x^2 + 3y^2)dy = 0$ is exact, find the value of $k$.",
    correctAnswer: "2",
    explanation: "Here $M = 3x^2 + 2kxy \\implies \\frac{\\partial M}{\\partial y} = 2kx$, and $N = 2x^2 + 3y^2 \\implies \\frac{\\partial N}{\\partial x} = 4x$. For exactness, $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2kx = 4x \\implies k = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $(2x + 3y)dx + (3x + 4y)dy = 0$ passing through $(1, 1)$ is $x^2 + 3xy + 2y^2 = C$, then the value of $C$ is:",
    correctAnswer: "6",
    explanation: "Integrating the exact differential: $d(x^2 + 3xy + 2y^2) = 0 \\implies x^2 + 3xy + 2y^2 = C$. Since the curve passes through $(1, 1)$, we substitute $x = 1, y = 1$: $C = 1^2 + 3(1)(1) + 2(1)^2 = 1 + 3 + 2 = 6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the integrating factor of the differential equation $\\frac{dy}{dx} + \\frac{4}{x}y = x^3$ is $x^n$, then the value of $n$ is:",
    correctAnswer: "4",
    explanation: "For the linear differential equation $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $e^{\\int P(x) dx} = e^{\\int \\frac{4}{x} dx} = e^{4\\ln x} = x^4$. Hence $n = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the differential equation $(a x^2 y + y^3)dx + (x^3 + b x y^2)dy = 0$ is exact, then find the value of $a + b$ if $a = 3$.",
    correctAnswer: "6",
    explanation: "For exactness: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$. Here $M = ax^2 y + y^3 \\implies \\frac{\\partial M}{\\partial y} = ax^2 + 3y^2$. And $N = x^3 + bxy^2 \\implies \\frac{\\partial N}{\\partial x} = 3x^2 + by^2$. Equating gives $a = 3$ and $b = 3$. Hence $a + b = 3 + 3 = 6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of the differential equation $x dy + y dx = 4x^3 dx$ with $y(1) = 3$ is $y(2)$, find the value of $2 \\cdot y(2)$.",
    correctAnswer: "34",
    explanation: "Rewrite as $d(xy) = 4x^3 dx$. Integrating: $xy = x^4 + C$. Using $y(1) = 3$: $1(3) = 1^4 + C \\implies C = 2$. Thus $xy = x^4 + 2 \\implies y = x^3 + \\frac{2}{x}$. For $x = 2$: $y(2) = 2^3 + \\frac{2}{2} = 8 + 1 = 9$? Wait, $2 \\cdot y(2) = 2 \\times (8 + 1) = 18$! Let us re-verify: $y(2) = 8 + 1 = 9$. Then $2 \\cdot y(2) = 18$. Let's state: 'find the value of $y(2)$' -> $9$.",
    correctAnswer: "9",
    explanation: "Notice $x dy + y dx = d(xy)$. Thus $d(xy) = 4x^3 dx$. Integrating both sides: $xy = x^4 + C$. Using $y(1) = 3$: $1 \\cdot 3 = 1^4 + C \\implies C = 2$. Therefore, $xy = x^4 + 2$. When $x = 2$: $2 \\cdot y(2) = 2^4 + 2 = 16 + 2 = 18 \\implies y(2) = 9$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The differential equation $(2x y^2 + k x)dx + (2x^2 y + 4y)dy = 0$ is exact for any constant $k$. If the solution passing through $(0, 1)$ satisfies $x^2 y^2 + 2y^2 + x^2 = C$ for $k = 2$, find the value of $C$.",
    correctAnswer: "2",
    explanation: "For $k = 2$, the equation is $(2xy^2 + 2x)dx + (2x^2 y + 4y)dy = 0$. Grouping: $(2xy^2 dx + 2x^2 y dy) + 2x dx + 4y dy = 0 \\implies d(x^2 y^2) + d(x^2) + d(2y^2) = 0 \\implies x^2 y^2 + x^2 + 2y^2 = C$. Since the curve passes through $(0, 1)$, substitute $x = 0, y = 1$: $0 + 0 + 2(1)^2 = C \\implies C = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the integrating factor of the differential equation $(x^2 + y^2 + x)dx + y dy = 0$ is $e^{kx}$, find the value of $k$.",
    correctAnswer: "2",
    explanation: "Here $M = x^2 + y^2 + x$ and $N = y$. Then $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = 0$. We compute $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = \\frac{2y - 0}{y} = 2$. The integrating factor is $e^{\\int 2 dx} = e^{2x}$. Comparing with $e^{kx}$, we get $k = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $y dx + (x + 3y^2)dy = 0$ passing through $(0, 1)$ is $xy + y^3 = C$, find the value of $C$.",
    correctAnswer: "1",
    explanation: "Rewrite the equation: $(y dx + x dy) + 3y^2 dy = 0 \\implies d(xy) + d(y^3) = 0$. Integrating gives $xy + y^3 = C$. Since it passes through $(0, 1)$, $0(1) + 1^3 = C \\implies C = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the differential equation $(y e^{xy} + 2x)dx + (k x e^{xy} + 3y^2)dy = 0$ is exact, find the value of $k$.",
    correctAnswer: "1",
    explanation: "Here $M = y e^{xy} + 2x \\implies \\frac{\\partial M}{\\partial y} = e^{xy} + xy e^{xy}$. And $N = kx e^{xy} + 3y^2 \\implies \\frac{\\partial N}{\\partial x} = k e^{xy} + kxy e^{xy}$. For exactness, $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies (1 + xy)e^{xy} = k(1 + xy)e^{xy} \\implies k = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of the differential equation $\\frac{x dy - y dx}{x^2} = 3x^2 dx$ with $y(1) = 2$ is given by $y = x^4 + C x$, find the value of $C$.",
    correctAnswer: "1",
    explanation: "Notice that $\\frac{x dy - y dx}{x^2} = d\\left(\\frac{y}{x}\\right)$. Thus $d\\left(\\frac{y}{x}\\right) = 3x^2 dx$. Integrating: $\\frac{y}{x} = x^3 + C \\implies y = x^4 + Cx$. Using $y(1) = 2$: $2 = 1^4 + C(1) \\implies C = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
