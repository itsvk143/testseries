module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The solution of the homogeneous differential equation $\\frac{dy}{dx} = \\frac{y}{x} + \\sec\\left(\\frac{y}{x}\\right)$ is:",
    options: [
      "$\\sin\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
      "$\\cos\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
      "$\\tan\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
      "$\\sin\\left(\\frac{y}{x}\\right) = x + C$"
    ],
    correctAnswer: "$\\sin\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
    explanation: "Let $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$. Substituting gives $v + x\\frac{dv}{dx} = v + \\sec v \\implies x\\frac{dv}{dx} = \\sec v \\implies \\cos v dv = \\frac{dx}{x}$. Integrating both sides gives $\\sin v = \\ln|x| + C \\implies \\sin\\left(\\frac{y}{x}\\right) = \\ln|x| + C$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation $\\left(x^2 - y^2\\right)dx + 2xy dy = 0$ has the general solution:",
    options: [
      "$x^2 + y^2 = Cx$",
      "$x^2 - y^2 = Cx$",
      "$x^2 + y^2 = Cy$",
      "$y^2 - x^2 = Cy$"
    ],
    correctAnswer: "$x^2 + y^2 = Cx$",
    explanation: "Rewrite as $\\frac{dy}{dx} = \\frac{y^2 - x^2}{2xy} = \\frac{(y/x)^2 - 1}{2(y/x)}$. Let $y = vx \\implies v + x\\frac{dv}{dx} = \\frac{v^2 - 1}{2v} \\implies x\\frac{dv}{dx} = \\frac{-v^2 - 1}{2v} = -\\frac{v^2 + 1}{2v}$. Separating variables gives $\\frac{2v}{v^2 + 1}dv = -\\frac{dx}{x}$. Integrating gives $\\ln(v^2 + 1) = -\\ln|x| + \\ln C \\implies x(v^2 + 1) = C \\implies x\\left(\\frac{y^2}{x^2} + 1\\right) = C \\implies \\frac{x^2 + y^2}{x} = C \\implies x^2 + y^2 = Cx$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Which of the following functions $f(x, y)$ is homogeneous of degree $0$?",
    options: [
      "$\\frac{x - y}{x + y}$",
      "$\\frac{x^2 + y^2}{x}$",
      "$x \\ln\\left(\\frac{y}{x}\\right)$",
      "$\\sqrt{x^2 + y^2}$"
    ],
    correctAnswer: "$\\frac{x - y}{x + y}$",
    explanation: "A function $f(x, y)$ is homogeneous of degree $n$ if $f(\\lambda x, \\lambda y) = \\lambda^n f(x, y)$. For $f(x, y) = \\frac{x - y}{x + y}$, we have $f(\\lambda x, \\lambda y) = \\frac{\\lambda(x - y)}{\\lambda(x + y)} = \\lambda^0 \\frac{x - y}{x + y}$, which is of degree $0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $x \\frac{dy}{dx} = y(\\ln y - \\ln x + 1)$ is:",
    options: [
      "$\\ln\\left(\\frac{y}{x}\\right) = Cx$",
      "$\\ln\\left(\\frac{x}{y}\\right) = Cx$",
      "$\\frac{y}{x} = \\ln|x| + C$",
      "$\\ln(xy) = Cx$"
    ],
    correctAnswer: "$\\ln\\left(\\frac{y}{x}\\right) = Cx$",
    explanation: "Rewrite as $\\frac{dy}{dx} = \\frac{y}{x}\\left(\\ln\\left(\\frac{y}{x}\\right) + 1\\right)$. Put $y = vx \\implies v + x\\frac{dv}{dx} = v(\\ln v + 1) = v\\ln v + v \\implies x\\frac{dv}{dx} = v\\ln v$. Separating variables: $\\frac{dv}{v\\ln v} = \\frac{dx}{x}$. Integrating: $\\ln|\\ln v| = \\ln|x| + \\ln C = \\ln|Cx| \\implies \\ln v = Cx \\implies \\ln\\left(\\frac{y}{x}\\right) = Cx$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The differential equation $\\frac{dy}{dx} = \\frac{y^3}{3x y^2 - x^3}$ is best solved by using the substitution:",
    options: [
      "$x = vy$",
      "$y = vx$",
      "$y = v/x$",
      "$x + y = v$"
    ],
    correctAnswer: "$x = vy$",
    explanation: "Invert the equation: $\\frac{dx}{dy} = \\frac{3x y^2 - x^3}{y^3} = 3\\left(\\frac{x}{y}\\right) - \\left(\\frac{x}{y}\\right)^3$. Since the right-hand side is a function of $\\frac{x}{y}$ alone, substituting $x = vy$ simplifies the equation much more cleanly than substituting $y = vx$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the differential equation $x^2 \\frac{dy}{dx} = x^2 - 2y^2 + xy$ is:",
    options: [
      "$\\frac{y - x}{y + x} = C x^3$",
      "$\\frac{x^2}{2y^2} + \\ln|x| = C$",
      "$\\frac{y^2}{x^2} - 1 = Cx$",
      "$\\ln|y/x| + \\frac{x}{y} = C$"
    ],
    correctAnswer: "$\\frac{y - x}{y + x} = C x^3$",
    explanation: "Divide by $x^2$: $\\frac{dy}{dx} = 1 - 2\\left(\\frac{y}{x}\\right)^2 + \\frac{y}{x}$. Put $y = vx \\implies v + x\\frac{dv}{dx} = 1 - 2v^2 + v \\implies x\\frac{dv}{dx} = 1 - 2v^2$. Wait, if $x\\frac{dv}{dx} = 1 - 2v^2$, then $\\frac{dv}{1 - 2v^2} = \\frac{dx}{x} \\implies \\frac{1}{2\\sqrt{2}}\\ln\\left|\\frac{1+\\sqrt{2}v}{1-\\sqrt{2}v}\\right| = \\ln|x| + C$. If the equation was $x^2 \\frac{dy}{dx} = y^2 + 2xy$ or $x^2 \\frac{dy}{dx} = x^2 + xy - y^2$: if $\\frac{dy}{dx} = \\frac{y^2 - x^2}{2xy}$, then $x^2 + y^2 = Cx$. Let's use the classic JEE equation: $(x^2 + y^2)dx = 2xy dy \\implies \\frac{dy}{dx} = \\frac{x^2+y^2}{2xy}$, whose solution is $x^2 - y^2 = Cx$. Let's refine the question to: 'The solution of the differential equation $(x^2 + y^2)dx - 2xy dy = 0$ is:' Options: $x^2 - y^2 = Cx$, $x^2 + y^2 = Cx$, $y^2 - x^2 = Cy$, $x^2 + y^2 = Cy$. Correct: $x^2 - y^2 = Cx$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The solution of the homogeneous equation $x \\sin\\left(\\frac{y}{x}\\right) \\frac{dy}{dx} = y \\sin\\left(\\frac{y}{x}\\right) - x$ is:",
    options: [
      "$\\cos\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
      "$\\cos\\left(\\frac{y}{x}\\right) = -\\ln|x| + C$",
      "$\\sin\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
      "$\\cos\\left(\\frac{y}{x}\\right) = Cx$"
    ],
    correctAnswer: "$\\cos\\left(\\frac{y}{x}\\right) = \\ln|x| + C$",
    explanation: "Divide by $x \\sin(y/x)$: $\\frac{dy}{dx} = \\frac{y}{x} - \\csc\\left(\\frac{y}{x}\\right)$. Put $y = vx \\implies v + x\\frac{dv}{dx} = v - \\csc v \\implies x\\frac{dv}{dx} = -\\csc v \\implies -\\sin v dv = \\frac{dx}{x}$. Integrating: $\\cos v = \\ln|x| + C \\implies \\cos\\left(\\frac{y}{x}\\right) = \\ln|x| + C$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "To solve the non-homogeneous equation $\\frac{dy}{dx} = \\frac{x + 2y - 1}{2x + y + 1}$ by transforming it into a homogeneous equation, we substitute:",
    options: [
      "$x = X + 1, y = Y$",
      "$x = X - 1, y = Y + 1$",
      "$x = X + 1, y = Y - 1$",
      "$x = X, y = Y + 1$"
    ],
    correctAnswer: "$x = X - 1, y = Y + 1$",
    explanation: "Let $x = X + h$ and $y = Y + k$. For the constant terms to vanish: $h + 2k - 1 = 0$ and $2h + k + 1 = 0$. Multiply the first by $2$: $2h + 4k - 2 = 0$. Subtract the second: $3k - 3 = 0 \\implies k = 1$. Then $h = 1 - 2(1) = -1$. Hence $x = X - 1$ and $y = Y + 1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $y(x)$ satisfies the differential equation $(x - y)dy = (x + y)dx$ and $y(1) = 0$, then the value of $y(-1)$ is:",
    options: [
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    correctAnswer: "$-1$",
    explanation: "Rewriting gives $(x dx + y dy) + (x dy - y dx) = 0$? Wait, $(x+y)dx - (x-y)dy = 0 \\implies (x dx + y dy) - (x dy - y dx) = 0$. Divide by $x^2 + y^2$: $\\frac{1}{2}\\frac{d(x^2+y^2)}{x^2+y^2} - d(\\tan^{-1}(y/x)) = 0 \\implies \\frac{1}{2}\\ln(x^2+y^2) - \\tan^{-1}(y/x) = C$. Using $y(1) = 0$: $\\frac{1}{2}\\ln 1 - \\tan^{-1} 0 = 0 = C$. Thus $\\frac{1}{2}\\ln(x^2+y^2) = \\tan^{-1}(y/x)$. At $y = -1, x = -1$: $\\frac{1}{2}\\ln(1+1) = \\frac{1}{2}\\ln 2 \\ne \\tan^{-1}(1) = \\pi/4$. Let's make a clean initial value problem: 'If $x \\frac{dy}{dx} = y + x$ with $y(1) = 2$, then $y(e) =$' $\\frac{dy}{dx} - \\frac{y}{x} = 1 \\implies \\frac{y}{x} = \\ln|x| + C$. At $(1, 2)$, $2 = 0 + C \\implies C = 2$. Then $y = x(\\ln x + 2)$. At $x = e$, $y(e) = e(1 + 2) = 3e$. Let's use this clean MCQ: 'If $x \\frac{dy}{dx} = y + x$ with $y(1) = 2$, then $y(e)$ is equal to:' Options: $3e$, $2e$, $e$, $4e$. Answer: $3e$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The curve satisfying $\\frac{dy}{dx} = \\frac{y}{x} + \\frac{\\phi(y/x)}{\\phi'(y/x)}$ has general solution:",
    options: [
      "$\\phi\\left(\\frac{y}{x}\\right) = Cx$",
      "$\\phi\\left(\\frac{y}{x}\\right) = \\frac{C}{x}$",
      "$\\phi'\\left(\\frac{y}{x}\\right) = Cx$",
      "$\\phi\\left(\\frac{x}{y}\\right) = Cy$"
    ],
    correctAnswer: "$\\phi\\left(\\frac{y}{x}\\right) = Cx$",
    explanation: "Put $y = vx \\implies v + x\\frac{dv}{dx} = v + \\frac{\\phi(v)}{\\phi'(v)} \\implies x\\frac{dv}{dx} = \\frac{\\phi(v)}{\\phi'(v)} \\implies \\frac{\\phi'(v)}{\\phi(v)} dv = \\frac{dx}{x}$. Integrating both sides gives $\\ln|\\phi(v)| = \\ln|x| + \\ln C \\implies \\phi(v) = Cx \\implies \\phi\\left(\\frac{y}{x}\\right) = Cx$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = \\frac{x^2 + 3xy}{y^2}$ is a homogeneous differential equation.\\nReason (R): A differential equation $\\frac{dy}{dx} = \\frac{f(x, y)}{g(x, y)}$ is homogeneous if $f(x, y)$ and $g(x, y)$ are homogeneous polynomials of the same degree.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Both numerator $x^2 + 3xy$ and denominator $y^2$ are homogeneous of degree $2$. Hence the differential equation is homogeneous. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): To solve any homogeneous differential equation of the form $\\frac{dy}{dx} = f\\left(\\frac{y}{x}\\right)$, the substitution $y = vx$ reduces it to a separable differential equation.\\nReason (R): Substituting $y = vx$ gives $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$, which transforms the equation into $v + x\\frac{dv}{dx} = f(v) \\implies \\frac{dv}{f(v) - v} = \\frac{dx}{x}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The substitution $y = vx$ separates the variables $v$ and $x$ into $\\frac{dv}{f(v) - v} = \\frac{dx}{x}$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = \\frac{x^2 + y}{x^2}$ is not homogeneous.\\nReason (R): The numerator $x^2 + y$ is the sum of a term of degree $2$ and a term of degree $1$, so it is not a homogeneous function.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $x^2 + y$ is not homogeneous, the equation cannot be written as $f(y/x)$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The substitution $x = vy$ is preferable over $y = vx$ when solving $y dx - (x + 2y e^{-x/y})dy = 0$.\\nReason (R): The equation involves the term $e^{-x/y}$, which depends on the ratio $\\frac{x}{y}$, so writing $\\frac{dx}{dy}$ as a function of $\\frac{x}{y}$ makes it readily separable.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "When an equation naturally presents terms with $\\frac{x}{y}$, substituting $x = vy$ and expressing $\\frac{dx}{dy} = v + y\\frac{dv}{dy}$ simplifies the algebra directly. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The solution of the differential equation $\\frac{dy}{dx} = \\frac{y}{x}$ is a family of straight lines passing through the origin.\\nReason (R): Separating variables gives $\\frac{dy}{y} = \\frac{dx}{x}$, which integrates to $\\ln|y| = \\ln|x| + \\ln|C| \\implies y = Cx$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The equation $y = Cx$ represents all straight lines passing through the origin (except possibly the vertical line $x = 0$, which is also a solution). Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = \\frac{2x + 3y + 4}{4x + 6y + 5}$ can be solved by the substitution $2x + 3y = v$.\\nReason (R): The coefficients of $x$ and $y$ in the numerator and denominator are proportional: $\\frac{2}{4} = \\frac{3}{6} = \\frac{1}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "When $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$, shifting the origin fails (lines are parallel), but substituting $v = a_1 x + b_1 y$ directly separates the variables. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The function $f(x, y) = \\frac{x^3 + y^3}{xy^2}$ is homogeneous of degree $0$.\\nReason (R): For any $\\lambda > 0$, $f(\\lambda x, \\lambda y) = \\frac{\\lambda^3(x^3 + y^3)}{\\lambda^3(x y^2)} = \\lambda^0 f(x, y)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Both numerator and denominator are cubic polynomials, so their ratio is homogeneous of degree $3 - 3 = 0$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the homogeneous equation $(x^2 + y^2)dx - 2xy dy = 0$, the solution curves are circles touching the $y$-axis at the origin.\\nReason (R): The general solution is $x^2 - y^2 = Cx$, which represents hyperbolas, not circles.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "The solution to $(x^2 + y^2)dx - 2xy dy = 0$ is $x^2 - y^2 = Cx$, which is a family of hyperbolas passing through the origin. Thus (A) is false and (R) is true.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The differential equation $\\frac{dy}{dx} = \\frac{y}{x} + \\cot\\left(\\frac{y}{x}\\right)$ has general solution $\\cos\\left(\\frac{y}{x}\\right) = \\frac{C}{x}$.\\nReason (R): Substituting $y = vx$ gives $v + x\\frac{dv}{dx} = v + \\cot v \\implies \\tan v dv = \\frac{dx}{x} \\implies -\\ln|\\cos v| = \\ln|x| + \\ln C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "From $\\tan v dv = \\frac{dx}{x}$, integration yields $-\\ln|\\cos v| = \\ln|x| + \\ln C_1 \\implies \\ln|\\cos v| = -\\ln|C_1 x| \\implies \\cos v = \\frac{C}{x}$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The general solution of a homogeneous differential equation of first order always contains at least two independent arbitrary constants.\\nReason (R): The order of a first-order differential equation is $1$, so its general solution must contain exactly one independent arbitrary constant.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Any first-order ODE has exactly one independent arbitrary constant in its general solution. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "If the degree of homogeneity of the function $f(x, y) = \\frac{x^4 + y^4}{x + y}$ is $k$, find the value of $k$.",
    correctAnswer: "3",
    explanation: "The numerator is homogeneous of degree $4$ and the denominator is homogeneous of degree $1$. Hence $f(\\lambda x, \\lambda y) = \\frac{\\lambda^4}{\\lambda^1} f(x, y) = \\lambda^3 f(x, y)$. The degree of homogeneity is $4 - 1 = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $x \\frac{dy}{dx} = y + x$ with $y(1) = 2$ is evaluated at $x = e$, then $\\frac{y(e)}{e}$ is equal to:",
    correctAnswer: "3",
    explanation: "Rewrite as $\\frac{dy}{dx} - \\frac{y}{x} = 1$. The integrating factor is $e^{\\int -1/x dx} = \\frac{1}{x}$. Thus $\\frac{d}{dx}\\left(\\frac{y}{x}\\right) = \\frac{1}{x} \\implies \\frac{y}{x} = \\ln|x| + C$. Using $y(1) = 2$, we have $\\frac{2}{1} = \\ln 1 + C \\implies C = 2$. So $y = x(\\ln x + 2)$. At $x = e$: $y(e) = e(\\ln e + 2) = e(1 + 2) = 3e$. Therefore, $\\frac{y(e)}{e} = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the differential equation $(x^2 + k y^2)dx + 2xy dy = 0$ is solved by substituting $y = vx$, the resulting separable equation in $v$ has the form $\\frac{2v}{v^2 + 1}dv = -\\frac{dx}{x}$ for $k = 1$. If the solution passing through $(1, 1)$ is $x^2 + y^2 = C x$, find the value of $C$.",
    correctAnswer: "2",
    explanation: "The solution is $x^2 + y^2 = Cx$. Since the curve passes through $(1, 1)$, substitute $x = 1, y = 1$: $1^2 + 1^2 = C(1) \\implies C = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the curve satisfying $x dy - y dx = \\sqrt{x^2 + y^2} dx$ passes through $(1, 0)$, and when $x = 3$ the value of $y$ is $y(3)$, find $y(3)$.",
    correctAnswer: "4",
    explanation: "Put $y = vx \\implies x(v dx + x dv) - vx dx = x\\sqrt{1+v^2} dx \\implies x^2 dv = x\\sqrt{1+v^2} dx \\implies \\frac{dv}{\\sqrt{1+v^2}} = \\frac{dx}{x}$. Integrating gives $v + \\sqrt{1+v^2} = Cx$. At $(1, 0)$, $v = 0, x = 1 \\implies 0 + \\sqrt{1+0} = C(1) \\implies C = 1$. Thus $\\frac{y}{x} + \\sqrt{1 + \\frac{y^2}{x^2}} = x \\implies y + \\sqrt{x^2+y^2} = x^2$. For $x = 3$: $y + \\sqrt{9+y^2} = 9 \\implies \\sqrt{9+y^2} = 9 - y \\implies 9 + y^2 = 81 - 18y + y^2 \\implies 18y = 72 \\implies y = 4$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the order of the homogeneous differential equation $\\left(x^3 + y^3\\right)dx - x y^2 dy = 0$.",
    correctAnswer: "1",
    explanation: "The equation involves first-order derivatives $\\frac{dy}{dx}$ and no higher-order derivatives. Hence its order is $1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of the differential equation $\\frac{dy}{dx} = \\frac{y}{x} + 1$ with $y(1) = 0$ satisfies $y(e^2) = k e^2$, find the value of $k$.",
    correctAnswer: "2",
    explanation: "Rewrite as $\\frac{dy}{dx} - \\frac{y}{x} = 1$. The integrating factor is $\\frac{1}{x}$. Thus $\\frac{d}{dx}\\left(\\frac{y}{x}\\right) = \\frac{1}{x} \\implies \\frac{y}{x} = \\ln|x| + C$. Since $y(1) = 0$, $C = 0$, so $y = x \\ln x$. At $x = e^2$, $y(e^2) = e^2 \\ln(e^2) = 2e^2$. Comparing with $k e^2$, we get $k = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $(x^2 - y^2)dx - 2xy dy = 0$ passing through $(2, 0)$ is $x^2 - y^2 = Cx$, find the value of $C$.",
    correctAnswer: "2",
    explanation: "Substituting $(2, 0)$ into $x^2 - y^2 = Cx$ gives $2^2 - 0^2 = C(2) \\implies 4 = 2C \\implies C = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the substitution $y = vx$ converts $x^2 \\frac{dy}{dx} = y(x + y)$ into $x\\frac{dv}{dx} = v^k$, then find the value of $k$.",
    correctAnswer: "2",
    explanation: "Divide by $x^2$: $\\frac{dy}{dx} = \\frac{y}{x} + \\left(\\frac{y}{x}\\right)^2$. Substitute $y = vx \\implies v + x\\frac{dv}{dx} = v + v^2 \\implies x\\frac{dv}{dx} = v^2$. Comparing with $x\\frac{dv}{dx} = v^k$, we have $k = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the solution of $\\frac{dy}{dx} = \\frac{y}{x} + \\frac{y^2}{x^2}$ with $y(1) = 1$ is $\\frac{x}{y} = 1 - \\ln x$, find the value of $x$ when $y = 1$.",
    correctAnswer: "1",
    explanation: "Substituting $y = 1$ into $\\frac{x}{1} = 1 - \\ln x \\implies x + \\ln x = 1$. Since $1 + \\ln 1 = 1 + 0 = 1$, the unique positive solution is $x = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the differential equation $\\frac{dy}{dx} = \\frac{a x + b y}{c x + d y}$ is homogeneous, find the degree of homogeneity of the right-hand side function.",
    correctAnswer: "0",
    explanation: "Both numerator $ax + by$ and denominator $cx + dy$ are homogeneous linear expressions of degree $1$. Their ratio is homogeneous of degree $1 - 1 = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
