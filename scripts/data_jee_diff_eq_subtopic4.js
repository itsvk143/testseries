module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The integrating factor of the differential equation $(1 - x^2)\\frac{dy}{dx} - xy = 1$ is:",
    options: [
      "$\\sqrt{1 - x^2}$",
      "$\\frac{1}{\\sqrt{1 - x^2}}$",
      "$1 - x^2$",
      "$\\frac{1}{1 - x^2}$"
    ],
    correctAnswer: "$\\sqrt{1 - x^2}$",
    explanation: "Dividing by $(1 - x^2)$: $\\frac{dy}{dx} - \\frac{x}{1 - x^2} y = \\frac{1}{1 - x^2}$. Here $P(x) = -\\frac{x}{1 - x^2} = \\frac{1}{2} \\frac{-2x}{1 - x^2}$. The integrating factor is $\\text{IF} = e^{\\int P(x) dx} = e^{\\frac{1}{2}\\ln|1 - x^2|} = \\sqrt{1 - x^2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The general solution of the differential equation $\\frac{dy}{dx} + y \\tan x = \\sec x$ is:",
    options: [
      "$y \\sec x = \\tan x + C$",
      "$y \\cos x = \\tan x + C$",
      "$y \\sec x = \\sec x + C$",
      "$y \\tan x = \\sec x + C$"
    ],
    correctAnswer: "$y \\sec x = \\tan x + C$",
    explanation: "Here $P(x) = \\tan x, Q(x) = \\sec x$. The integrating factor is $\\text{IF} = e^{\\int \\tan x dx} = e^{\\ln|\\sec x|} = \\sec x$. The general solution is $y \\cdot \\text{IF} = \\int Q(x) \\cdot \\text{IF} dx + C \\implies y \\sec x = \\int \\sec^2 x dx + C = \\tan x + C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $(x + 2y^3)\\frac{dy}{dx} = y$ is:",
    options: [
      "$x = y^3 + Cy$",
      "$x = 2y^3 + Cy$",
      "$y = x^3 + Cx$",
      "$x = y^2 + Cy$"
    ],
    correctAnswer: "$x = y^3 + Cy$",
    explanation: "Rewrite as $\\frac{dx}{dy} = \\frac{x + 2y^3}{y} = \\frac{x}{y} + 2y^2 \\implies \\frac{dx}{dy} - \\frac{1}{y} x = 2y^2$. This is a linear differential equation in $x$ with $P(y) = -\\frac{1}{y}$. The integrating factor is $\\text{IF} = e^{\\int -\\frac{1}{y} dy} = e^{-\\ln y} = \\frac{1}{y}$. The general solution is $x \\cdot \\frac{1}{y} = \\int 2y^2 \\cdot \\frac{1}{y} dy + C = \\int 2y dy + C = y^2 + C \\implies x = y^3 + Cy$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The integrating factor of the differential equation $\\frac{dy}{dx} + y = \\frac{1 + \\sin x}{1 + \\cos x}$ is:",
    options: [
      "$e^x$",
      "$e^{-x}$",
      "$\\ln|1 + \\cos x|$",
      "$e^{\\sin x}$"
    ],
    correctAnswer: "$e^x$",
    explanation: "Comparing with $\\frac{dy}{dx} + P(x)y = Q(x)$, we have $P(x) = 1$. The integrating factor is $\\text{IF} = e^{\\int 1 dx} = e^x$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} + 2y = 4x$ with $y(0) = 1$, then $y(1)$ is equal to:",
    options: [
      "$1 + 2e^{-2}$",
      "$1 - 2e^{-2}$",
      "$2 + e^{-2}$",
      "$1 + e^{-2}$"
    ],
    correctAnswer: "$1 + 2e^{-2}$",
    explanation: "The integrating factor is $\\text{IF} = e^{\\int 2 dx} = e^{2x}$. Then $y e^{2x} = \\int 4x e^{2x} dx + C = (2x - 1)e^{2x} + C \\implies y = 2x - 1 + C e^{-2x}$. Using $y(0) = 1 \\implies 1 = -1 + C \\implies C = 2$. Thus $y(x) = 2x - 1 + 2e^{-2x}$. At $x = 1$, $y(1) = 2(1) - 1 + 2e^{-2} = 1 + 2e^{-2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation $\\frac{dy}{dx} + \\frac{y}{x} = y^2$ is an example of:",
    options: [
      "Bernoulli's differential equation",
      "Exact differential equation",
      "Homogeneous differential equation of degree 2",
      "Linear differential equation of second order"
    ],
    correctAnswer: "Bernoulli's differential equation",
    explanation: "An equation of the form $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ ($n \\ne 0, 1$) is known as Bernoulli's differential equation, which can be reduced to a linear differential equation by dividing by $y^n$ and substituting $v = y^{1-n}$. Here $n = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $\\frac{dy}{dx} + y \\cot x = 2 \\cos x$ is:",
    options: [
      "$y \\sin x = \\sin^2 x + C$",
      "$y \\cos x = \\cos^2 x + C$",
      "$y \\sin x = \\cos 2x + C$",
      "$y \\sin x = -\\cos^2 x + C$"
    ],
    correctAnswer: "$y \\sin x = \\sin^2 x + C$",
    explanation: "Here $P(x) = \\cot x$, so $\\text{IF} = e^{\\int \\cot x dx} = e^{\\ln|\\sin x|} = \\sin x$. Then $y \\sin x = \\int 2\\cos x \\sin x dx + C = \\int \\sin(2x) dx + C = -\\frac{\\cos(2x)}{2} + C' = \\sin^2 x + C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "An integrating factor for the linear differential equation $(x + 2y^2)dy = y dx$ when written in standard linear form for $x(y)$ is:",
    options: [
      "$\\frac{1}{y}$",
      "$\\frac{1}{y^2}$",
      "$y$",
      "$e^y$"
    ],
    correctAnswer: "$\\frac{1}{y}$",
    explanation: "Rewrite the equation as $\\frac{dx}{dy} = \\frac{x + 2y^2}{y} = \\frac{x}{y} + 2y \\implies \\frac{dx}{dy} - \\frac{1}{y} x = 2y$. This is a linear differential equation in $x$ with $P(y) = -\\frac{1}{y}$. The integrating factor is $\\text{IF} = e^{\\int -\\frac{1}{y} dy} = e^{-\\ln y} = \\frac{1}{y}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} + \\frac{1}{x}y = 3x$ with $y(1) = 2$, then $y(2)$ is equal to:",
    options: [
      "$\\frac{9}{2}$",
      "$\\frac{7}{2}$",
      "$4$",
      "$5$"
    ],
    correctAnswer: "$\\frac{9}{2}$",
    explanation: "The integrating factor is $\\text{IF} = e^{\\int \\frac{1}{x} dx} = x$. Multiplying by $x$ gives $\\frac{d}{dx}(xy) = 3x^2$. Integrating gives $xy = x^3 + C$. Since $y(1) = 2$, we have $1(2) = 1^3 + C \\implies C = 1$. Thus $y = x^2 + \\frac{1}{x}$. At $x = 2$, $y(2) = 2^2 + \\frac{1}{2} = 4 + \\frac{1}{2} = \\frac{9}{2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the linear differential equation $\\cos x \\frac{dy}{dx} + y \\sin x = 1$ is:",
    options: [
      "$y = \\sin x + C \\cos x$",
      "$y = \\cos x + C \\sin x$",
      "$y = \\tan x + C \\sec x$",
      "$y = \\sec x + C \\cos x$"
    ],
    correctAnswer: "$y = \\sin x + C \\cos x$",
    explanation: "Divide by $\\cos x$: $\\frac{dy}{dx} + y \\tan x = \\sec x$. $\\text{IF} = \\sec x$. Then $y \\sec x = \\int \\sec^2 x dx + C = \\tan x + C \\implies y = \\frac{\\tan x}{\\sec x} + \\frac{C}{\\sec x} = \\sin x + C \\cos x$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} + y = e^x$ is a linear differential equation of first order.\\nReason (R): The dependent variable $y$ and its derivative $\\frac{dy}{dx}$ occur only in the first degree and are not multiplied together.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By definition, a differential equation is linear if the dependent variable and its derivatives appear only in first degree and are not multiplied together. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The integrating factor of $\\frac{dy}{dx} + 3y = 0$ is $e^{3x}$.\\nReason (R): For the standard linear differential equation $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $e^{\\int P(x) dx}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $P(x) = 3$, so $\\text{IF} = e^{\\int 3 dx} = e^{3x}$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} + y^2 = x$ is a linear differential equation.\\nReason (R): The degree of the dependent variable $y$ in the term $y^2$ is $2$, which violates linearity.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Because $y$ appears as $y^2$, the equation is non-linear (specifically a Riccati equation). Hence (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The integrating factor of $(x + y + 1)\\frac{dy}{dx} = 1$ is $e^{-y}$.\\nReason (R): Rewriting the equation gives $\\frac{dx}{dy} - x = y + 1$, which is linear in $x$ with integrating factor $e^{\\int -1 dy} = e^{-y}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Inverting yields $\\frac{dx}{dy} - x = y + 1$. Here $P(y) = -1$, so $\\text{IF} = e^{-y}$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the linear differential equation $\\frac{dy}{dx} + \\frac{1}{x}y = 0$, the general solution is $xy = C$.\\nReason (R): The integrating factor is $x$, and multiplying by $x$ gives $\\frac{d}{dx}(xy) = 0 \\implies xy = C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $\\text{IF} = e^{\\int 1/x dx} = x$. Thus $x\\frac{dy}{dx} + y = 0 \\implies \\frac{d}{dx}(xy) = 0 \\implies xy = C$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The Bernoulli differential equation $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ is reduced to a linear differential equation by the substitution $v = y^{1-n}$.\\nReason (R): Dividing by $y^n$ gives $y^{-n}\\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$, and $\\frac{dv}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Substituting $v = y^{1-n}$ transforms the equation into $\\frac{1}{1-n}\\frac{dv}{dx} + P(x)v = Q(x)$, which is linear in $v$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The general solution of $\\frac{dy}{dx} + 2y = 0$ is $y = C e^{-2x}$.\\nReason (R): An integrating factor is $e^{2x}$, and integrating $\\frac{d}{dx}(y e^{2x}) = 0$ gives $y e^{2x} = C \\implies y = C e^{-2x}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Both (A) and (R) are true and (R) provides the exact standard step-by-step derivation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The equation $y\\frac{dy}{dx} + x = 0$ is a first-order linear differential equation.\\nReason (R): A differential equation where the dependent variable $y$ multiplies its derivative $\\frac{dy}{dx}$ is non-linear.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Because $y$ multiplies $\\frac{dy}{dx}$, the equation is non-linear. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The integrating factor of $\\frac{dy}{dx} + \\frac{1}{x \\ln x} y = 2$ for $x > 1$ is $\\ln x$.\\nReason (R): $e^{\\int \\frac{1}{x \\ln x} dx} = e^{\\ln(\\ln x)} = \\ln x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Let $u = \\ln x \\implies du = \\frac{1}{x} dx$. Then $\\int \\frac{du}{u} = \\ln|u| = \\ln(\\ln x)$. Thus $e^{\\ln(\\ln x)} = \\ln x$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a first-order linear differential equation $\\frac{dy}{dx} + P(x)y = Q(x)$, multiplying by the integrating factor always enables direct single-step integration of the left-hand side.\\nReason (R): The product rule of differentiation guarantees that $\\frac{d}{dx}\\left(y e^{\\int P(x) dx}\\right) = e^{\\int P(x) dx}\\left(\\frac{dy}{dx} + P(x)y\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The purpose of the integrating factor is precisely to make the left-hand side the exact derivative of $y \\cdot \\text{IF}$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "If the integrating factor of $\\frac{dy}{dx} + \\frac{k}{x}y = x^2$ is $x^3$, find the value of $k$.",
    correctAnswer: "3",
    explanation: "The integrating factor is $e^{\\int \\frac{k}{x} dx} = e^{k \\ln x} = x^k$. Comparing with $x^3$, we find $k = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} + 3y = 6$ with $y(0) = 2$, find the value of $y(10)$.",
    correctAnswer: "2",
    explanation: "Rewrite as $\\frac{dy}{dx} + 3y = 6$. The integrating factor is $e^{3x}$. Then $y e^{3x} = \\int 6 e^{3x} dx + C = 2e^{3x} + C \\implies y = 2 + C e^{-3x}$. Using $y(0) = 2$, we get $2 = 2 + C \\implies C = 0$. Therefore, $y(x) = 2$ identically for all $x$. In particular, $y(10) = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the value of $k$ such that the integrating factor of $\\frac{dy}{dx} + k y = 0$ is $e^{5x}$.",
    correctAnswer: "5",
    explanation: "The integrating factor is $e^{\\int k dx} = e^{kx}$. Given this is $e^{5x}$, we have $k = 5$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} + y = 2$ with $y(0) = 5$, find the value of $(y(1) - 2)e$.",
    correctAnswer: "3",
    explanation: "Rewrite as $\\frac{dy}{dx} + y = 2$. $\\text{IF} = e^x$. $y e^x = \\int 2e^x dx + C = 2e^x + C \\implies y = 2 + C e^{-x}$. Given $y(0) = 5$: $5 = 2 + C \\implies C = 3$. Thus $y(x) = 2 + 3e^{-x}$. For $x = 1$: $y(1) = 2 + 3e^{-1} \\implies y(1) - 2 = 3e^{-1}$. Therefore, $(y(1) - 2)e = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} + \\frac{2}{x}y = 6x$ with $y(1) = 2$ is $y = \\frac{3}{2}x^2 + \\frac{C}{x^2}$, find the value of $2C$.",
    correctAnswer: "1",
    explanation: "The integrating factor is $x^2$. Multiplying gives $x^2 \\frac{dy}{dx} + 2xy = 6x^3 \\implies \\frac{d}{dx}(x^2 y) = 6x^3$. Integrating gives $x^2 y = \\frac{6x^4}{4} + C = \\frac{3}{2}x^4 + C \\implies y = \\frac{3}{2}x^2 + \\frac{C}{x^2}$. Using $y(1) = 2$: $2 = \\frac{3}{2} + C \\implies C = \\frac{1}{2}$. Thus $2C = 2\\left(\\frac{1}{2}\\right) = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the linear differential equation $\\frac{d^3y}{dx^3} + 4x\\frac{dy}{dx} + y = \\sin x$.",
    correctAnswer: "3",
    explanation: "The highest order derivative present in the differential equation is the third derivative $\\frac{d^3y}{dx^3}$. Hence its order is $3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} + 2y = 0$ with $y(0) = 7$, find the value of $y(\\ln 2) \\times 4$.",
    correctAnswer: "7",
    explanation: "The equation $\\frac{dy}{dx} + 2y = 0$ gives $y = C e^{-2x}$. With $y(0) = 7$, we have $C = 7$, so $y(x) = 7 e^{-2x}$. At $x = \\ln 2$: $y(\\ln 2) = 7 e^{-2\\ln 2} = 7 e^{\\ln(1/4)} = 7 \\times \\frac{1}{4} = \\frac{7}{4}$. Therefore, $y(\\ln 2) \\times 4 = 7$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the integrating factor of the differential equation $\\frac{dx}{dy} + \\frac{3}{y}x = y^2$ is $y^k$, find the value of $k$.",
    correctAnswer: "3",
    explanation: "This is a linear differential equation in $x$ with $P(y) = \\frac{3}{y}$. The integrating factor is $e^{\\int \\frac{3}{y} dy} = e^{3\\ln y} = y^3$. Comparing with $y^k$, we obtain $k = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} = y + 1$ with $y(0) = 0$, find the value of $(y(1) + 1)/e$.",
    correctAnswer: "1",
    explanation: "Rewrite as $\\frac{dy}{dx} - y = 1$. $\\text{IF} = e^{-x}$. Then $y e^{-x} = \\int e^{-x} dx + C = -e^{-x} + C \\implies y = -1 + C e^x$. Since $y(0) = 0$, $0 = -1 + C \\implies C = 1$. Thus $y(x) = e^x - 1$. At $x = 1$, $y(1) = e - 1 \\implies y(1) + 1 = e$. Therefore, $(y(1) + 1)/e = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the degree of the linear differential equation $\\left(\\frac{d^2y}{dx^2}\\right) + 3\\left(\\frac{dy}{dx}\\right) + 2y = 0$.",
    correctAnswer: "1",
    explanation: "In any linear differential equation, every derivative of the dependent variable and the dependent variable itself appear with exponent $1$. Hence the degree of the highest derivative $\\frac{d^2y}{dx^2}$ is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
