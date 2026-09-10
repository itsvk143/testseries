module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The area of the triangle formed by any tangent to the rectangular hyperbola $xy = c^2$ with its asymptotes (the coordinate axes) is:",
    options: [
      "$2c^2$",
      "$c^2$",
      "$4c^2$",
      "$\\frac{1}{2}c^2$"
    ],
    correctAnswer: "$2c^2$",
    explanation: "Let $P(ct, \\frac{c}{t})$ be any point on $xy = c^2$. The equation of the tangent at $P$ is $\\frac{x}{t} + yt = 2c$. The intercepts on the coordinate axes are $x$-intercept $= 2ct$ and $y$-intercept $= \\frac{2c}{t}$. The area of the triangle formed with the coordinate axes is $\\frac{1}{2} \\times |(2ct)| \\times |\\frac{2c}{t}| = \\frac{1}{2} \\times 4c^2 = 2c^2$, which is constant and independent of $t$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The equation of the normal to the rectangular hyperbola $xy = 16$ at the point $(4, 4)$ is:",
    options: [
      "$x - y = 0$",
      "$x + y = 8$",
      "$x - 2y + 4 = 0$",
      "$2x + y = 12$"
    ],
    correctAnswer: "$x - y = 0$",
    explanation: "Differentiating $xy = 16$ gives $y + x \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{y}{x}$. At $(4, 4)$, the slope of the tangent is $m_T = -\\frac{4}{4} = -1$. Hence, the slope of the normal is $m_N = -\\frac{1}{m_T} = 1$. The equation of the normal is $y - 4 = 1(x - 4) \\implies y = x$, or $x - y = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The angle between the asymptotes of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is:",
    options: [
      "$2\\tan^{-1}\\left(\\frac{b}{a}\\right)$",
      "$\\tan^{-1}\\left(\\frac{b}{a}\\right)$",
      "$2\\cos^{-1}\\left(\\frac{a}{b}\\right)$",
      "$\\tan^{-1}\\left(\\frac{2b}{a}\\right)$"
    ],
    correctAnswer: "$2\\tan^{-1}\\left(\\frac{b}{a}\\right)$",
    explanation: "The equations of the asymptotes are $y = \\pm \\frac{b}{a} x$. If $\\theta$ is the angle between the transverse axis and an asymptote, then $\\tan\\theta = \\frac{b}{a}$. Since the transverse axis bisects the angle between the asymptotes, the total angle between the asymptotes is $2\\theta = 2\\tan^{-1}\\left(\\frac{b}{a}\\right)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the angle between the asymptotes of a hyperbola is $60^\\circ$, then its eccentricity can be:",
    options: [
      "$\\frac{2}{\\sqrt{3}}$",
      "$\\sqrt{3}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$2$"
    ],
    correctAnswer: "$\\frac{2}{\\sqrt{3}}$",
    explanation: "The angle between the asymptotes is $2\\theta = 60^\\circ \\implies \\theta = 30^\\circ$, where $\\tan\\theta = \\frac{b}{a}$. Thus $\\frac{b}{a} = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$. The eccentricity is $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + \\frac{1}{3}} = \\sqrt{\\frac{4}{3}} = \\frac{2}{\\sqrt{3}}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The eccentricity of the rectangular hyperbola $xy = 25$ is:",
    options: [
      "$\\sqrt{2}$",
      "$2$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\sqrt{3}$"
    ],
    correctAnswer: "$\\sqrt{2}$",
    explanation: "The rectangular hyperbola $xy = c^2$ is obtained by rotating the coordinate axes of the rectangular hyperbola $x^2 - y^2 = 2c^2$ by $45^\\circ$. Since rotation does not alter eccentricity, every rectangular hyperbola has eccentricity $e = \\sqrt{2}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The tangent at any point $P$ on the rectangular hyperbola $xy = c^2$ intersects the coordinate axes at $A$ and $B$. Then:",
    options: [
      "$P$ is the midpoint of $AB$",
      "$P$ divides $AB$ in the ratio $1 : 2$",
      "$P$ divides $AB$ in the ratio $2 : 1$",
      "$AB$ is of constant length"
    ],
    correctAnswer: "$P$ is the midpoint of $AB$",
    explanation: "Let $P = (ct, \\frac{c}{t})$. The tangent equation is $\\frac{x}{t} + yt = 2c$. The intercepts on axes are $A(2ct, 0)$ and $B(0, \\frac{2c}{t})$. The midpoint of $AB$ is $(\\frac{2ct + 0}{2}, \\frac{0 + 2c/t}{2}) = (ct, \\frac{c}{t}) = P$. Hence $P$ is always the midpoint of the intercept of the tangent between the asymptotes.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The asymptotes of the hyperbola $2x^2 + 5xy + 2y^2 + 4x + 5y + 1 = 0$ are given by:",
    options: [
      "$2x^2 + 5xy + 2y^2 + 4x + 5y + 2 = 0$",
      "$2x^2 + 5xy + 2y^2 + 4x + 5y = 0$",
      "$2x^2 + 5xy + 2y^2 + 4x + 5y - 1 = 0$",
      "$2x^2 + 5xy + 2y^2 = 0$"
    ],
    correctAnswer: "$2x^2 + 5xy + 2y^2 + 4x + 5y + 2 = 0$",
    explanation: "The equation of the pair of asymptotes differs from the equation of the hyperbola only by a constant term. Let the asymptotes be $2x^2 + 5xy + 2y^2 + 4x + 5y + c = 0$. For this to represent a pair of straight lines, the discriminant condition $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$ must hold. Here $a = 2, b = 2, h = 5/2, g = 2, f = 5/2$. Evaluating: $2(2)(c) + 2(5/2)(2)(5/2) - 2(25/4) - 2(4) - c(25/4) = 0 \\implies 4c + 25 - 25/2 - 8 - \\frac{25c}{4} = 0 \\implies -\\frac{9c}{4} + \\frac{9}{2} = 0 \\implies \\frac{9c}{4} = \\frac{9}{2} \\implies c = 2$. Thus the asymptotes are $2x^2 + 5xy + 2y^2 + 4x + 5y + 2 = 0$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $H$ is a hyperbola, $A$ is the pair of its asymptotes, and $C$ is its conjugate hyperbola, then:",
    options: [
      "$H + C = 2A$",
      "$H - C = 2A$",
      "$H + 2C = A$",
      "$2H + C = A$"
    ],
    correctAnswer: "$H + C = 2A$",
    explanation: "Let $H \\equiv \\frac{x^2}{a^2} - \\frac{y^2}{b^2} - 1 = 0$, $A \\equiv \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0$, and $C \\equiv \\frac{x^2}{a^2} - \\frac{y^2}{b^2} + 1 = 0$. Then $H + C = \\left(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} - 1\\right) + \\left(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} + 1\\right) = 2\\left(\\frac{x^2}{a^2} - \\frac{y^2}{b^2}\\right) = 2A$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The locus of the foot of the perpendicular from the center of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ to any tangent is:",
    options: [
      "$(x^2 + y^2)^2 = a^2 x^2 - b^2 y^2$",
      "$(x^2 + y^2)^2 = a^2 x^2 + b^2 y^2$",
      "$x^2 + y^2 = a^2 - b^2$",
      "$(x^2 + y^2)^2 = a^2 y^2 - b^2 x^2$"
    ],
    correctAnswer: "$(x^2 + y^2)^2 = a^2 x^2 - b^2 y^2$",
    explanation: "Let the tangent be $y = mx + \\sqrt{a^2 m^2 - b^2}$. The perpendicular from the center $(0, 0)$ is $y = -\\frac{1}{m} x \\implies m = -\\frac{x}{y}$. Substituting $m = -\\frac{x}{y}$ into the tangent equation gives $(y - mx)^2 = a^2 m^2 - b^2 \\implies \\left(y + \\frac{x^2}{y}\\right)^2 = a^2\\left(\\frac{x^2}{y^2}\\right) - b^2 \\implies \\frac{(x^2 + y^2)^2}{y^2} = \\frac{a^2 x^2 - b^2 y^2}{y^2} \\implies (x^2 + y^2)^2 = a^2 x^2 - b^2 y^2$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If a circle cuts the rectangular hyperbola $xy = c^2$ in four points $(x_i, y_i)$ for $i = 1, 2, 3, 4$, then the product $x_1 x_2 x_3 x_4$ is equal to:",
    options: [
      "$c^4$",
      "$c^2$",
      "$1$",
      "$4c^4$"
    ],
    correctAnswer: "$c^4$",
    explanation: "Let the circle be $x^2 + y^2 + 2gx + 2fy + k = 0$. Substituting points on $xy = c^2$, $(x, y) = (ct, c/t)$, gives $c^2 t^2 + \\frac{c^2}{t^2} + 2g(ct) + 2f\\left(\\frac{c}{t}\\right) + k = 0$. Multiplying by $t^2$: $c^2 t^4 + 2gc t^3 + k t^2 + 2fc t + c^2 = 0$. By Vieta's formulas, the product of roots is $t_1 t_2 t_3 t_4 = \\frac{c^2}{c^2} = 1$. Then $x_1 x_2 x_3 x_4 = c t_1 \\cdot c t_2 \\cdot c t_3 \\cdot c t_4 = c^4 (t_1 t_2 t_3 t_4) = c^4 (1) = c^4$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The angle between the asymptotes of a rectangular hyperbola is $90^\\circ$.\\nReason (R): For a rectangular hyperbola, the lengths of the transverse and conjugate axes are equal ($a = b$), and the asymptotes are $y = \\pm \\frac{b}{a} x = \\pm x$, which are mutually perpendicular.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For a rectangular hyperbola, $a = b$. The asymptotes are $y = x$ and $y = -x$. The product of their slopes is $(1)(-1) = -1$, meaning they are perpendicular ($90^\\circ$). Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The area of the triangle formed by any tangent to the curve $xy = 4$ with the coordinate axes is $8$.\\nReason (R): The area of the triangle formed by any tangent to the rectangular hyperbola $xy = c^2$ with its asymptotes (coordinate axes) is constant and equal to $2c^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $c^2 = 4$. By the property of the rectangular hyperbola $xy = c^2$, the area of the triangle formed by any tangent with the coordinate axes is $2c^2 = 2(4) = 8$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The asymptotes of a hyperbola always pass through its center.\\nReason (R): The equation of the asymptotes of $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$ is $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 0$, which is clearly satisfied by $(x, y) = (h, k)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The center $(h, k)$ satisfies the combined equation of the asymptotes $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 0$. Hence the asymptotes always intersect at the center. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The eccentricity of any rectangular hyperbola is strictly equal to $\\sqrt{2}$.\\nReason (R): In a rectangular hyperbola, the transverse and conjugate axes are equal in length, giving $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + 1} = \\sqrt{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By definition, a rectangular hyperbola has perpendicular asymptotes, which requires $a = b$. This directly yields $e = \\sqrt{2}$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the curve $xy = c^2$, the tangent at $(ct, c/t)$ has slope $-\\frac{1}{t^2}$.\\nReason (R): Differentiating $xy = c^2$ with respect to $x$ yields $\\frac{dy}{dx} = -\\frac{y}{x} = -\\frac{c/t}{ct} = -\\frac{1}{t^2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The derivative of $y = \\frac{c^2}{x}$ is $\\frac{dy}{dx} = -\\frac{c^2}{x^2} = -\\frac{c^2}{(ct)^2} = -\\frac{1}{t^2}$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An asymptote to a hyperbola intersects the hyperbola at two real and distinct finite points.\\nReason (R): An asymptote is a tangent to the curve at infinity.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "An asymptote does not intersect a hyperbola at any real finite point; it is the limiting tangent line to the hyperbola as the point of contact recedes to infinity. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the asymptotes of a hyperbola are $3x - 4y = 0$ and $3x + 4y = 0$, then its eccentricity can be $\\frac{5}{4}$.\\nReason (R): The angle $2\\theta$ between the asymptotes satisfies $\\tan\\theta = \\frac{b}{a} = \\frac{3}{4}$, and $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + \\frac{9}{16}} = \\frac{5}{4}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The asymptotes are $y = \\pm \\frac{3}{4}x$. If the transverse axis is along the $x$-axis, $\\frac{b}{a} = \\frac{3}{4}$, so $e = \\sqrt{1 + (3/4)^2} = \\frac{5}{4}$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the rectangular hyperbola $xy = c^2$, the normal at $(ct, c/t)$ has slope $t^2$.\\nReason (R): The slope of the normal is the negative reciprocal of the slope of the tangent, and the slope of the tangent at $(ct, c/t)$ is $-\\frac{1}{t^2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since slope of tangent is $m_T = -\\frac{1}{t^2}$, the slope of the normal is $m_N = -\\frac{1}{m_T} = -\\frac{1}{-1/t^2} = t^2$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The equation of the director circle of a rectangular hyperbola $x^2 - y^2 = a^2$ is $x^2 + y^2 = 0$.\\nReason (R): For the rectangular hyperbola $x^2 - y^2 = a^2$, $a = b$, so the director circle $x^2 + y^2 = a^2 - b^2$ degenerates to the single point $(0, 0)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The equation of the director circle is $x^2 + y^2 = a^2 - b^2$. For a rectangular hyperbola, $a = b$, so $a^2 - b^2 = 0$. Thus the equation becomes $x^2 + y^2 = 0$, which is the point circle consisting solely of the center $(0, 0)$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If a circle intersects the rectangular hyperbola $xy = 1$ at four points with parameters $t_1, t_2, t_3, t_4$, then $t_1 t_2 t_3 t_4 = 1$.\\nReason (R): The parametric points on $xy = 1$ satisfy $x = t, y = 1/t$, and substitution into the equation of the circle yields a quartic equation in $t$ with constant term equal to the leading coefficient.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Substituting $(t, 1/t)$ into $x^2 + y^2 + 2gx + 2fy + k = 0$ yields $t^2 + \\frac{1}{t^2} + 2gt + \\frac{2f}{t} + k = 0 \\implies t^4 + 2gt^3 + kt^2 + 2ft + 1 = 0$. The product of roots by Vieta's formulas is $\\frac{1}{1} = 1$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "Find the area of the triangle formed by the tangent at any point on the rectangular hyperbola $xy = 9$ with the coordinate axes.",
    correctAnswer: "18",
    explanation: "For the rectangular hyperbola $xy = c^2$, the area of the triangle formed by any tangent with the coordinate axes (its asymptotes) is $2c^2$. Here $c^2 = 9$. Thus the area is $2(9) = 18$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the angle between the asymptotes of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $90^\\circ$, then the square of its eccentricity, $e^2$, is:",
    correctAnswer: "2",
    explanation: "When the angle between the asymptotes is $90^\\circ$, the hyperbola is rectangular, so $a = b$. The eccentricity is $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{2}$. Therefore, $e^2 = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the normal to the rectangular hyperbola $xy = 4$ at the point $(2, 2)$ intersects the curve again at $(x_1, y_1)$, then find $|x_1 - y_1|$.",
    correctAnswer: "0",
    explanation: "At $(2, 2)$, slope of tangent is $m_T = -\\frac{y}{x} = -1$, so slope of normal is $m_N = 1$. The equation of the normal is $y - 2 = 1(x - 2) \\implies y = x$. Substituting $y = x$ into $xy = 4$ gives $x^2 = 4 \\implies x = \\pm 2$. Since $(2, 2)$ is the point of contact, the other point of intersection is $(-2, -2)$. For this point, $|x_1 - y_1| = |-2 - (-2)| = 0$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the tangent to the curve $xy = 16$ at $(4, 4)$ has equation $x + y = k$, then find the value of $k$.",
    correctAnswer: "8",
    explanation: "The tangent at $(x_1, y_1)$ to $xy = c^2$ is $\\frac{x}{x_1} + \\frac{y}{y_1} = 2$, or $x y_1 + y x_1 = 2c^2$. At $(4, 4)$: $4x + 4y = 2(16) = 32 \\implies x + y = 8$. Thus $k = 8$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If a circle cuts the rectangular hyperbola $xy = 36$ in four points whose abscissae are $x_1, x_2, x_3, x_4$, then find the value of $\\sqrt{x_1 x_2 x_3 x_4}$.",
    correctAnswer: "36",
    explanation: "For the rectangular hyperbola $xy = c^2$, the product of the abscissae of the four points of intersection with any circle is $x_1 x_2 x_3 x_4 = c^4$. Here $c^2 = 36$, so $c^4 = 36^2$. Therefore, $\\sqrt{x_1 x_2 x_3 x_4} = \\sqrt{36^2} = 36$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the asymptotes of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ make angles $\\theta$ and $-\\theta$ with the $x$-axis, find the value of $4\\tan\\theta$ where $\\theta \\in (0, \\pi/2)$.",
    correctAnswer: "3",
    explanation: "The asymptotes are $y = \\pm \\frac{b}{a} x$. Here $a = 4$ and $b = 3$, so the slopes are $\\pm \\frac{3}{4}$. Hence $\\tan\\theta = \\frac{3}{4}$, which gives $4\\tan\\theta = 4\\left(\\frac{3}{4}\\right) = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The distance from the origin to the vertex of the rectangular hyperbola $xy = 8$ is:",
    correctAnswer: "4",
    explanation: "For $xy = c^2$, the vertices lie along the line $y = x$, so $x^2 = c^2 \\implies x = \\pm c$. Here $c^2 = 8 \\implies c = 2\\sqrt{2}$. The vertices are $(2\\sqrt{2}, 2\\sqrt{2})$ and $(-2\\sqrt{2}, -2\\sqrt{2})$. The distance of the vertex from the origin is $\\sqrt{(2\\sqrt{2})^2 + (2\\sqrt{2})^2} = \\sqrt{8 + 8} = \\sqrt{16} = 4$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The tangent to the rectangular hyperbola $xy = 25$ at the point $(5, 5)$ intersects the coordinate axes at points $A$ and $B$. Find the square of the distance between $A$ and $B$, i.e., $AB^2$.",
    correctAnswer: "200",
    explanation: "The tangent to $xy = 25$ at $(5, 5)$ has the equation $x + y = 10$. The intercepts on the coordinate axes are $A(10, 0)$ and $B(0, 10)$. The square of the distance is $AB^2 = 10^2 + 10^2 = 100 + 100 = 200$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, if the angle between its asymptotes is $2\\sec^{-1}(2)$, find the eccentricity $e$.",
    correctAnswer: "2",
    explanation: "The angle between the asymptotes of a hyperbola is given by $2\\theta$ where $\\sec\\theta = e$. Given the angle is $2\\sec^{-1}(2)$, we have $\\theta = \\sec^{-1}(2) \\implies \\sec\\theta = 2$. Therefore, the eccentricity is $e = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The area of the rectangle formed by the asymptotes and the lines through any point $P(2, 6)$ on the hyperbola $xy = 12$ parallel to the asymptotes is:",
    correctAnswer: "12",
    explanation: "Since the asymptotes of $xy = c^2$ are the coordinate axes $x = 0$ and $y = 0$, the lines through $P(x, y)$ parallel to the asymptotes are $x = x_P$ and $y = y_P$. The area of the rectangle formed with the axes is $|x_P y_P| = c^2 = 12$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
