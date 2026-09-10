module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The general solution of the differential equation $\\frac{dy}{dx} = (x + y)^2$ is:",
    options: [
      "$\\tan^{-1}(x + y) = x + C$",
      "$\\tan^{-1}(x + y) = y + C$",
      "$\\tan(x + y) = x + C$",
      "$\\ln|x + y| = x + C$"
    ],
    correctAnswer: "$\\tan^{-1}(x + y) = x + C$",
    explanation: "Let $u = x + y$. Differentiating with respect to $x$: $\\frac{du}{dx} = 1 + \\frac{dy}{dx} \\implies \\frac{dy}{dx} = \\frac{du}{dx} - 1$. The equation becomes $\\frac{du}{dx} - 1 = u^2 \\implies \\frac{du}{dx} = u^2 + 1$. Separating variables gives $\\frac{du}{u^2 + 1} = dx$. Integrating both sides: $\\tan^{-1}(u) = x + C \\implies \\tan^{-1}(x + y) = x + C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $\\sec^2 x \\tan y dx + \\sec^2 y \\tan x dy = 0$ is:",
    options: [
      "$\\tan x \\tan y = C$",
      "$\\tan x + \\tan y = C$",
      "$\\sec x \\sec y = C$",
      "$\\frac{\\tan x}{\\tan y} = C$"
    ],
    correctAnswer: "$\\tan x \\tan y = C$",
    explanation: "Divide throughout by $\\tan x \\tan y$: $\\frac{\\sec^2 x}{\\tan x} dx + \\frac{\\sec^2 y}{\\tan y} dy = 0$. Integrating: $\\ln|\\tan x| + \\ln|\\tan y| = \\ln C \\implies \\ln|\\tan x \\tan y| = \\ln C \\implies \\tan x \\tan y = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The general solution of the differential equation $\\frac{dy}{dx} = e^{x - y} + x^2 e^{-y}$ is:",
    options: [
      "$e^y = e^x + \\frac{x^3}{3} + C$",
      "$e^{-y} = e^x + \\frac{x^3}{3} + C$",
      "$e^y = e^{-x} + \\frac{x^3}{3} + C$",
      "$e^{-y} = e^{-x} - \\frac{x^3}{3} + C$"
    ],
    correctAnswer: "$e^y = e^x + \\frac{x^3}{3} + C$",
    explanation: "Factor out $e^{-y}$: $\\frac{dy}{dx} = e^{-y}(e^x + x^2)$. Separating variables: $e^y dy = (e^x + x^2)dx$. Integrating both sides gives $e^y = e^x + \\frac{x^3}{3} + C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of $\\frac{dy}{dx} = \\frac{1 + \\cos 2y}{1 - \\cos 2x}$ is:",
    options: [
      "$\\tan y + \\cot x = C$",
      "$\\tan y - \\cot x = C$",
      "$\\cot y + \\cot x = C$",
      "$\\tan y \\tan x = C$"
    ],
    correctAnswer: "$\\tan y + \\cot x = C$",
    explanation: "Using trigonometric identities: $1 + \\cos 2y = 2\\cos^2 y$ and $1 - \\cos 2x = 2\\sin^2 x$. Thus $\\frac{dy}{dx} = \\frac{2\\cos^2 y}{2\\sin^2 x} = \\frac{\\cos^2 y}{\\sin^2 x}$. Separating variables: $\\frac{dy}{\\cos^2 y} = \\frac{dx}{\\sin^2 x} \\implies \\sec^2 y dy = \\csc^2 x dx$. Integrating both sides: $\\tan y = -\\cot x + C \\implies \\tan y + \\cot x = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of $\\frac{dy}{dx} = \\sin(x + y) + \\cos(x + y)$ is obtained by substituting:",
    options: [
      "$u = x + y$",
      "$u = x - y$",
      "$u = \\sin(x + y)$",
      "$y = vx$"
    ],
    correctAnswer: "$u = x + y$",
    explanation: "Let $u = x + y \\implies \\frac{du}{dx} = 1 + \\frac{dy}{dx} \\implies \\frac{dy}{dx} = \\frac{du}{dx} - 1$. The equation becomes $\\frac{du}{dx} = 1 + \\sin u + \\cos u$, which is readily separable: $\\frac{du}{1 + \\sin u + \\cos u} = dx$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $\\frac{dy}{dx} = \\frac{y+1}{x-1}$ with $y(2) = 0$, then the curve represents:",
    options: [
      "A straight line with slope $1$",
      "A parabola with vertex at $(1, -1)$",
      "A circle centered at $(1, -1)$",
      "A rectangular hyperbola"
    ],
    correctAnswer: "A straight line with slope $1$",
    explanation: "Separating variables: $\\frac{dy}{y + 1} = \\frac{dx}{x - 1}$. Integrating gives $\\ln|y + 1| = \\ln|x - 1| + \\ln C \\implies y + 1 = C(x - 1)$. Using $y(2) = 0$: $0 + 1 = C(2 - 1) \\implies C = 1$. Thus $y + 1 = x - 1 \\implies y = x - 2$, which is a straight line of slope $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $\\sqrt{1 - y^2} dx + \\sqrt{1 - x^2} dy = 0$ is:",
    options: [
      "$\\sin^{-1} x + \\sin^{-1} y = C$",
      "$\\sin^{-1} x - \\sin^{-1} y = C$",
      "$\\cos^{-1} x + \\cos^{-1} y = C$",
      "$x\\sqrt{1 - y^2} + y\\sqrt{1 - x^2} = C$"
    ],
    correctAnswer: "$\\sin^{-1} x + \\sin^{-1} y = C$",
    explanation: "Divide throughout by $\\sqrt{1 - x^2}\\sqrt{1 - y^2}$: $\\frac{dx}{\\sqrt{1 - x^2}} + \\frac{dy}{\\sqrt{1 - y^2}} = 0$. Integrating gives $\\sin^{-1} x + \\sin^{-1} y = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The curve for which the slope of the tangent at any point $(x, y)$ is $\\frac{2y}{x}$ and which passes through $(1, 2)$ is:",
    options: [
      "$y = 2x^2$",
      "$y^2 = 4x$",
      "$y = x^2 + 1$",
      "$x y = 2$"
    ],
    correctAnswer: "$y = 2x^2$",
    explanation: "Slope of the tangent is $\\frac{dy}{dx} = \\frac{2y}{x}$. Separating variables: $\\frac{dy}{y} = \\frac{2dx}{x}$. Integrating: $\\ln|y| = 2\\ln|x| + \\ln C = \\ln(C x^2) \\implies y = C x^2$. Since the curve passes through $(1, 2)$: $2 = C(1)^2 \\implies C = 2$. Hence $y = 2x^2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $(e^y + 1)\\cos x dx + e^y \\sin x dy = 0$ is:",
    options: [
      "$(e^y + 1)\\sin x = C$",
      "$(e^y + 1)\\cos x = C$",
      "$e^y \\sin x = C$",
      "$(e^y - 1)\\sin x = C$"
    ],
    correctAnswer: "$(e^y + 1)\\sin x = C$",
    explanation: "Divide by $(e^y + 1)\\sin x$: $\\frac{\\cos x}{\\sin x} dx + \\frac{e^y}{e^y + 1} dy = 0 \\implies \\cot x dx + \\frac{e^y}{e^y + 1} dy = 0$. Integrating gives $\\ln|\\sin x| + \\ln(e^y + 1) = \\ln C \\implies (e^y + 1)\\sin x = C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $\\frac{dy}{dx} = \\cos(x + y)$ is:",
    options: [
      "$\\tan\\left(\\frac{x + y}{2}\\right) = x + C$",
      "$\\cot\\left(\\frac{x + y}{2}\\right) = x + C$",
      "$\\tan(x + y) = x + C$",
      "$\\sin(x + y) = x + C$"
    ],
    correctAnswer: "$\\tan\\left(\\frac{x + y}{2}\\right) = x + C$",
    explanation: "Let $u = x + y \\implies \\frac{du}{dx} = 1 + \\frac{dy}{dx} = 1 + \\cos u = 2\\cos^2(u/2)$. Separating variables: $\\frac{du}{2\\cos^2(u/2)} = dx \\implies \\frac{1}{2}\\sec^2(u/2) du = dx$. Integrating: $\\tan(u/2) = x + C \\implies \\tan\\left(\\frac{x + y}{2}\\right) = x + C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = f(ax + by + c)$ can always be reduced to variable separable form by substituting $u = ax + by + c$.\\nReason (R): The substitution yields $\\frac{du}{dx} = a + b\\frac{dy}{dx} = a + b f(u)$, which allows complete separation of variables as $\\frac{du}{a + b f(u)} = dx$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The linear combination $u = ax + by + c$ converts any ODE of the form $\\frac{dy}{dx} = f(ax + by + c)$ into $\\frac{du}{a + bf(u)} = dx$, which is separable. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = \\frac{1 + y^2}{1 + x^2}$ has general solution $\\tan^{-1} y - \\tan^{-1} x = C$.\\nReason (R): Separating variables gives $\\frac{dy}{1 + y^2} = \\frac{dx}{1 + x^2}$, and integrating both sides yields $\\tan^{-1} y = \\tan^{-1} x + C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Direct integration of the separated variables yields $\\tan^{-1} y - \\tan^{-1} x = C$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The solution of $\\frac{dy}{dx} = e^{x-y}$ passing through the origin is $e^y = e^x$.\\nReason (R): Separating variables gives $e^y dy = e^x dx \\implies e^y = e^x + C$. Substituting $(0, 0)$ gives $e^0 = e^0 + C \\implies 1 = 1 + C \\implies C = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Integrating gives $e^y = e^x + C$. At $(0, 0)$, $C = 0 \\implies e^y = e^x \\implies y = x$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = xy + x + y + 1$ can be solved by separation of variables.\\nReason (R): The right-hand side can be factored as $(x + 1)(y + 1)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Factoring yields $\\frac{dy}{dx} = (x + 1)(y + 1)$, which separates directly as $\\frac{dy}{y + 1} = (x + 1)dx$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The general solution of $x dx + y dy = 0$ represents a family of concentric circles centered at the origin.\\nReason (R): Integrating $x dx + y dy = 0$ yields $\\frac{x^2}{2} + \\frac{y^2}{2} = C_1 \\implies x^2 + y^2 = r^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Integrating gives $x^2 + y^2 = 2C_1 = r^2$, which represents concentric circles centered at $(0, 0)$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$ can be solved by direct separation of the variables $x$ and $y$ without any substitution.\\nReason (R): The expression $\\frac{x^2 + y^2}{xy}$ cannot be expressed as a product $f(x)g(y)$ of single-variable functions.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Because $x^2 + y^2$ cannot be factored into single-variable factors, the equation is not directly separable in $x$ and $y$. It is homogeneous and requires the substitution $y = vx$. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the differential equation $\\frac{dy}{dx} = k y$, the rate of change of $y$ is proportional to $y$ itself.\\nReason (R): The general solution is $y = C e^{kt}$, representing exponential growth when $k > 0$ and exponential decay when $k < 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The equation $\\frac{dy}{dx} = ky$ is the fundamental law of natural growth and decay. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The solution of $\\frac{dy}{dx} = -\\frac{y}{x}$ is a family of rectangular hyperbolas $xy = C$.\\nReason (R): Separating variables gives $\\frac{dy}{y} = -\\frac{dx}{x} \\implies \\ln|y| + \\ln|x| = \\ln|C| \\implies xy = C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Integrating gives $\\ln|xy| = \\ln|C| \\implies xy = C$, which represents rectangular hyperbolas with coordinate axes as asymptotes. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = (4x + y + 1)^2$ can be transformed into a separable equation by setting $u = 4x + y + 1$.\\nReason (R): Differentiating $u = 4x + y + 1$ with respect to $x$ yields $\\frac{du}{dx} = 4 + \\frac{dy}{dx} = 4 + u^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Substituting $u = 4x + y + 1$ yields $\\frac{du}{dx} = u^2 + 4 \\implies \\frac{du}{u^2 + 4} = dx$, which is separable. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Every ordinary differential equation can be solved by separation of variables without any substitution.\\nReason (R): Separation of variables is applicable only when terms involving $x$ and $y$ can be isolated into distinct factors multiplying $dx$ and $dy$.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Only a specific class of differential equations is separable directly. Most differential equations require integrating factors, substitutions, or other methods. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} = 2xy$ passing through $(0, 3)$ is $y = C e^{x^2}$, find the value of $C$.",
    correctAnswer: "3",
    explanation: "Separating variables gives $\\frac{dy}{y} = 2x dx \\implies \\ln|y| = x^2 + C_1 \\implies y = C e^{x^2}$. Since it passes through $(0, 3)$, $3 = C e^0 = C \\implies C = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(0) = 4$, find the value of $y(3)$.",
    correctAnswer: "5",
    explanation: "Separating variables: $y dy = x dx \\implies \\frac{y^2}{2} = \\frac{x^2}{2} + C_1 \\implies y^2 = x^2 + C$. Using $y(0) = 4$: $4^2 = 0^2 + C \\implies C = 16$. So $y^2 = x^2 + 16$. For $x = 3$: $y^2 = 3^2 + 16 = 9 + 16 = 25 \\implies y = 5$ (since $y(0) > 0$).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} = e^{x+y}$ with $y(0) = -\\ln 2$ is $e^{-y} = -e^x + C$, find the value of $C$.",
    correctAnswer: "3",
    explanation: "Separating variables: $e^{-y} dy = e^x dx \\implies -e^{-y} = e^x + C_1 \\implies e^{-y} = -e^x + C$. Given $y(0) = -\\ln 2$, we have $e^{-(-\\ln 2)} = e^{\\ln 2} = 2$. At $x = 0$, $2 = -e^0 + C = -1 + C \\implies C = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} = \\frac{y^2}{x^2}$ with $y(1) = 1$ is given by $\\frac{1}{y} = \\frac{1}{x} + C$, find the value of $C$.",
    correctAnswer: "0",
    explanation: "Separating variables: $\\frac{dy}{y^2} = \\frac{dx}{x^2}$. Integrating: $-\\frac{1}{y} = -\\frac{1}{x} + C_1 \\implies \\frac{1}{y} = \\frac{1}{x} + C$. Using $y(1) = 1$: $\\frac{1}{1} = \\frac{1}{1} + C \\implies C = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $\\frac{dy}{dx} = 3x^2 y$ with $y(0) = 2$, find the value of $y(1)/e$.",
    correctAnswer: "2",
    explanation: "Separating variables: $\\frac{dy}{y} = 3x^2 dx \\implies \\ln|y| = x^3 + C_1 \\implies y = C e^{x^3}$. Since $y(0) = 2$, $C = 2$, so $y = 2e^{x^3}$. At $x = 1$, $y(1) = 2e^1 = 2e$. Thus $y(1)/e = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $\\frac{dy}{dx} = \\frac{y+2}{x+3}$ with $y(1) = 2$, find the value of $y(5)$.",
    correctAnswer: "6",
    explanation: "Separating variables: $\\frac{dy}{y + 2} = \\frac{dx}{x + 3} \\implies \\ln|y + 2| = \\ln|x + 3| + \\ln C \\implies y + 2 = C(x + 3)$. Using $y(1) = 2$: $2 + 2 = C(1 + 3) \\implies 4 = 4C \\implies C = 1$. So $y + 2 = x + 3 \\implies y = x + 1$. For $x = 5$, $y(5) = 5 + 1 = 6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} = (x + y + 1)^0 = 1$ with $y(0) = 4$ is $y = x + C$, find $C$.",
    correctAnswer: "4",
    explanation: "Integrating $\\frac{dy}{dx} = 1$ gives $y = x + C$. At $x = 0, y = 4 \\implies C = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $y(x)$ satisfies $x dy + 2y dx = 0$ with $y(1) = 4$, find the value of $y(2)$.",
    correctAnswer: "1",
    explanation: "Separating variables gives $\\frac{dy}{y} = -\\frac{2dx}{x} \\implies \\ln|y| = -2\\ln|x| + \\ln C \\implies y = \\frac{C}{x^2}$. Using $y(1) = 4$: $4 = \\frac{C}{1} \\implies C = 4$. Thus $y(x) = \\frac{4}{x^2}$. For $x = 2$, $y(2) = \\frac{4}{2^2} = \\frac{4}{4} = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $\\frac{dy}{dx} = 4xy^2$ with $y(0) = 1$, find the value of $y(1)$ if $y(1) = \\frac{1}{1 - 2(1)^2} = -1$, find $|y(1)|$.",
    correctAnswer: "1",
    explanation: "Separating variables: $\\frac{dy}{y^2} = 4x dx \\implies -\\frac{1}{y} = 2x^2 + C$. At $x = 0, y = 1$: $-1 = C \\implies -\\frac{1}{y} = 2x^2 - 1 \\implies y = \\frac{1}{1 - 2x^2}$. At $x = 1$: $y(1) = \\frac{1}{1 - 2} = -1$. Hence $|y(1)| = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} = 2(y - 1)$ with $y(0) = 3$ is $y = 1 + C e^{2x}$, find the value of $C$.",
    correctAnswer: "2",
    explanation: "Separating variables: $\\frac{dy}{y - 1} = 2dx \\implies \\ln|y - 1| = 2x + C_1 \\implies y - 1 = C e^{2x} \\implies y = 1 + C e^{2x}$. At $x = 0, y = 3$: $3 = 1 + C(1) \\implies C = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
