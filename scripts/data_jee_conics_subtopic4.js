module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The equation of the tangent to the hyperbola $3x^2 - 4y^2 = 12$ which is parallel to the line $y = x + 2$ is:",
    options: [
      "$y = x \\pm 1$",
      "$y = x \\pm 2$",
      "$y = x \\pm \\sqrt{3}$",
      "$y = x \\pm \\sqrt{7}$"
    ],
    correctAnswer: "$y = x \\pm 1$",
    explanation: "Rewrite $3x^2 - 4y^2 = 12$ in standard form: $\\frac{x^2}{4} - \\frac{y^2}{3} = 1$, so $a^2 = 4, b^2 = 3$. The tangent line is parallel to $y = x + 2$, so slope $m = 1$. The equation of tangents with slope $m$ to $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $y = mx \\pm \\sqrt{a^2 m^2 - b^2}$. Here $a^2 m^2 - b^2 = 4(1)^2 - 3 = 1$. Thus, the tangents are $y = x \\pm 1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the line $y = 2x + c$ is a tangent to the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$, then the possible values of $c$ are:",
    options: [
      "$\\pm 4\\sqrt{2}$",
      "$\\pm 2\\sqrt{7}$",
      "$\\pm 6$",
      "$\\pm 2\\sqrt{2}$"
    ],
    correctAnswer: "$\\pm 4\\sqrt{2}$",
    explanation: "For the line $y = mx + c$ to be tangent to $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the condition is $c^2 = a^2 m^2 - b^2$. Here $a^2 = 9$, $b^2 = 4$, and $m = 2$. Therefore, $c^2 = 9(2)^2 - 4 = 36 - 4 = 32 \\implies c = \\pm \\sqrt{32} = \\pm 4\\sqrt{2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The director circle of the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{16} = 1$ has the equation:",
    options: [
      "$x^2 + y^2 = 9$",
      "$x^2 + y^2 = 41$",
      "$x^2 + y^2 = 25$",
      "Director circle does not exist"
    ],
    correctAnswer: "$x^2 + y^2 = 9$",
    explanation: "The locus of the point of intersection of two perpendicular tangents to a hyperbola is its director circle, given by $x^2 + y^2 = a^2 - b^2$ (provided $a > b$). Here $a^2 = 25, b^2 = 16$, so $a^2 - b^2 = 25 - 16 = 9 > 0$. Hence the equation of the director circle is $x^2 + y^2 = 9$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The locus of the point of intersection of perpendicular tangents to the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{25} = 1$ is:",
    options: [
      "A circle of radius $3$",
      "A circle of radius $\\sqrt{41}$",
      "An empty set (no real points exist)",
      "A point at origin"
    ],
    correctAnswer: "An empty set (no real points exist)",
    explanation: "The equation of the director circle of $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $x^2 + y^2 = a^2 - b^2$. Here $a^2 = 16$ and $b^2 = 25$, so $a^2 - b^2 = 16 - 25 = -9 < 0$. The equation $x^2 + y^2 = -9$ has no real solutions. Hence, no pair of perpendicular tangents can be drawn to this hyperbola.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The length of the latus rectum of the hyperbola $9x^2 - 16y^2 = 144$ is:",
    options: [
      "$\\frac{9}{2}$",
      "$\\frac{9}{4}$",
      "$9$",
      "$\\frac{8}{3}$"
    ],
    correctAnswer: "$\\frac{9}{2}$",
    explanation: "Divide $9x^2 - 16y^2 = 144$ by $144$: $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Here $a^2 = 16 \\implies a = 4$, and $b^2 = 9$. The length of the latus rectum is $\\frac{2b^2}{a} = \\frac{2(9)}{4} = \\frac{9}{2}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The equation of the tangent to the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$ at the point $(3\\sqrt{2}, 2)$ is:",
    options: [
      "$\\sqrt{2}x - y = 3$",
      "$2\\sqrt{2}x - 3y = 6$",
      "$\\frac{\\sqrt{2}x}{3} - \\frac{y}{2} = 1$",
      "$\\sqrt{2}x + y = 3$"
    ],
    correctAnswer: "$\\frac{\\sqrt{2}x}{3} - \\frac{y}{2} = 1$",
    explanation: "The equation of tangent at $(x_1, y_1)$ to $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $\\frac{x x_1}{a^2} - \\frac{y y_1}{b^2} = 1$. Substituting $(x_1, y_1) = (3\\sqrt{2}, 2)$: $\\frac{x(3\\sqrt{2})}{9} - \\frac{y(2)}{4} = 1 \\implies \\frac{\\sqrt{2}x}{3} - \\frac{y}{2} = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If a hyperbola has vertices at $(\\pm 3, 0)$ and a conjugate axis of length $4$, then its eccentricity is:",
    options: [
      "$\\frac{\\sqrt{13}}{3}$",
      "$\\frac{\\sqrt{5}}{3}$",
      "$\\frac{5}{3}$",
      "$\\frac{\\sqrt{13}}{2}$"
    ],
    correctAnswer: "$\\frac{\\sqrt{13}}{3}$",
    explanation: "Given vertices at $(\\pm a, 0) = (\\pm 3, 0)$, we have $a = 3$. The conjugate axis has length $2b = 4 \\implies b = 2$. The eccentricity is $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + \\frac{4}{9}} = \\frac{\\sqrt{13}}{3}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The product of the perpendiculars from any point on the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ to its asymptotes is:",
    options: [
      "$\\frac{a^2 b^2}{a^2 + b^2}$",
      "$\\frac{a^2 + b^2}{a^2 b^2}$",
      "$\\frac{a b}{\\sqrt{a^2 + b^2}}$",
      "$\\frac{a^2 - b^2}{a^2 + b^2}$"
    ],
    correctAnswer: "$\\frac{a^2 b^2}{a^2 + b^2}$",
    explanation: "The equations of the asymptotes are $\\frac{x}{a} - \\frac{y}{b} = 0$ and $\\frac{x}{a} + \\frac{y}{b} = 0$, or $bx - ay = 0$ and $bx + ay = 0$. For any point $P(x_1, y_1)$ on the hyperbola, the product of perpendiculars is $p_1 p_2 = \\frac{|b x_1 - a y_1|}{\\sqrt{a^2 + b^2}} \\times \\frac{|b x_1 + a y_1|}{\\sqrt{a^2 + b^2}} = \\frac{|b^2 x_1^2 - a^2 y_1^2|}{a^2 + b^2}$. Since $\\frac{x_1^2}{a^2} - \\frac{y_1^2}{b^2} = 1$, we have $b^2 x_1^2 - a^2 y_1^2 = a^2 b^2$. Thus, $p_1 p_2 = \\frac{a^2 b^2}{a^2 + b^2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The vertices of the hyperbola $9x^2 - 16y^2 - 18x - 64y - 199 = 0$ are:",
    options: [
      "$(5, -2)$ and $(-3, -2)$",
      "$(1, 1)$ and $(1, -5)$",
      "$(4, -2)$ and $(-2, -2)$",
      "$(3, 2)$ and $(-1, 2)$"
    ],
    correctAnswer: "$(5, -2)$ and $(-3, -2)$",
    explanation: "Complete the squares: $9(x^2 - 2x) - 16(y^2 + 4y) = 199 \\implies 9(x - 1)^2 - 16(y + 2)^2 = 199 + 9 - 64 = 144$. Dividing by $144$: $\\frac{(x - 1)^2}{16} - \\frac{(y + 2)^2}{9} = 1$. Here $a^2 = 16 \\implies a = 4$. The center is $(1, -2)$. The transverse axis is parallel to the $x$-axis, so the vertices are $(1 \\pm a, -2) = (1 \\pm 4, -2)$, which gives $(5, -2)$ and $(-3, -2)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The slope of a tangent to the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ can be any real number $m$ provided:",
    options: [
      "$|m| > \\frac{3}{4}$",
      "$|m| < \\frac{3}{4}$",
      "$|m| > \\frac{4}{3}$",
      "$m \\in \\mathbb{R}$"
    ],
    correctAnswer: "$|m| > \\frac{3}{4}$",
    explanation: "For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the tangent is $y = mx \\pm \\sqrt{a^2 m^2 - b^2}$. Real tangents exist if and only if $a^2 m^2 - b^2 > 0 \\implies m^2 > \\frac{b^2}{a^2} \\implies |m| > \\frac{b}{a}$. Here $a = 4$ and $b = 3$, so $|m| > \\frac{3}{4}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The locus of the point of intersection of perpendicular tangents to the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{16} = 1$ is $x^2 + y^2 = 9$.\\nReason (R): The director circle of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ has the equation $x^2 + y^2 = a^2 - b^2$, which is real when $a > b$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The locus of point of intersection of perpendicular tangents is the director circle $x^2 + y^2 = a^2 - b^2$. Here $a^2 = 25$ and $b^2 = 16$, so $a^2 - b^2 = 9$. Thus the circle is $x^2 + y^2 = 9$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, no pair of perpendicular tangents can be drawn.\\nReason (R): For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, if $a < b$, the radius of the director circle $\\sqrt{a^2 - b^2}$ is imaginary.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $a^2 = 9$ and $b^2 = 16$, so $a^2 - b^2 = 9 - 16 = -7 < 0$. The director circle is imaginary, which means no two perpendicular tangents can intersect in the real plane. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The line $y = x + 1$ touches the hyperbola $\\frac{x^2}{2} - y^2 = 1$.\\nReason (R): The condition for the line $y = mx + c$ to be a tangent to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $c^2 = a^2 m^2 - b^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For $\\frac{x^2}{2} - \\frac{y^2}{1} = 1$, $a^2 = 2, b^2 = 1$. For $y = x + 1$, $m = 1, c = 1$. Checking the tangency condition: $c^2 = 1^2 = 1$, and $a^2 m^2 - b^2 = 2(1)^2 - 1 = 1$. Since $c^2 = a^2 m^2 - b^2$, the line is tangent. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The hyperbolas $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ and $-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ have the same asymptotes.\\nReason (R): The asymptotes of both hyperbolas are given by $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0$, which factors into $y = \\pm \\frac{b}{a} x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A hyperbola and its conjugate hyperbola share the identical pair of asymptotes, given by $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The length of the conjugate axis of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ is $6$.\\nReason (R): For the standard hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the length of the conjugate axis is $2b$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $b^2 = 9 \\implies b = 3$. The length of the conjugate axis is $2b = 2(3) = 6$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A line $y = mx + c$ can intersect a hyperbola at four distinct points.\\nReason (R): The degree of the polynomial equation of a hyperbola is $2$.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "Substituting $y = mx + c$ into the equation of a hyperbola results in a quadratic equation in $x$, which has at most $2$ roots. A straight line can intersect a hyperbola in at most $2$ points. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The parametric coordinates of any point on the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ can be expressed as $(a\\sec\\theta, b\\tan\\theta)$ where $\\theta \\in [0, 2\\pi) \\setminus \\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\}$.\\nReason (R): The fundamental trigonometric identity $\\sec^2\\theta - \\tan^2\\theta = 1$ ensures that $(a\\sec\\theta, b\\tan\\theta)$ identically satisfies $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Substituting $x = a\\sec\\theta$ and $y = b\\tan\\theta$ gives $\\frac{a^2\\sec^2\\theta}{a^2} - \\frac{b^2\\tan^2\\theta}{b^2} = \\sec^2\\theta - \\tan^2\\theta = 1$, which is valid everywhere $\\sec\\theta$ and $\\tan\\theta$ are defined. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the hyperbola $x^2 - 4y^2 = 4$, the length of the latus rectum is $1$.\\nReason (R): For the standard hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the length of the latus rectum is $\\frac{2b^2}{a}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Rewriting $x^2 - 4y^2 = 4$ as $\\frac{x^2}{4} - \\frac{y^2}{1} = 1$, we have $a^2 = 4 \\implies a = 2$ and $b^2 = 1$. Length of latus rectum $= \\frac{2b^2}{a} = \\frac{2(1)}{2} = 1$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the line $3x - 4y = k$ is tangent to the hyperbola $9x^2 - 16y^2 = 144$, then $k = 0$.\\nReason (R): Tangent lines cannot pass through the center of a central conic.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "For $9x^2 - 16y^2 = 144$, $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Slope of $3x - 4y = k$ is $m = \\frac{3}{4} = \\frac{b}{a}$, which is parallel to the asymptote! Tangents to the hyperbola must have $m^2 > \\frac{b^2}{a^2} = \\frac{9}{16}$, but here $m^2 = \\frac{9}{16}$, so $c^2 = a^2 m^2 - b^2 = 16(\\frac{9}{16}) - 9 = 0$. The line $3x - 4y = 0$ is an asymptote, which touches the hyperbola at infinity, not a standard tangent line. Also, a tangent to a hyperbola never passes through its center $(0,0)$. Thus (A) is false and (R) is true.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The equation $\\frac{x^2}{25-\\lambda} + \\frac{y^2}{16-\\lambda} = 1$ represents a hyperbola when $16 < \\lambda < 25$.\\nReason (R): An equation $\\frac{x^2}{A} + \\frac{y^2}{B} = 1$ represents a hyperbola if and only if $A$ and $B$ have opposite signs ($AB < 0$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "When $16 < \\lambda < 25$, we have $25 - \\lambda > 0$ and $16 - \\lambda < 0$. Thus the coefficients of $x^2$ and $y^2$ have opposite signs, which is the exact condition for representing a hyperbola. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "Find the square of the radius of the director circle of the hyperbola $\\frac{x^2}{36} - \\frac{y^2}{11} = 1$.",
    correctAnswer: "25",
    explanation: "The equation of the director circle of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $x^2 + y^2 = a^2 - b^2$. Here $a^2 = 36$ and $b^2 = 11$. The square of the radius is $R^2 = a^2 - b^2 = 36 - 11 = 25$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the line $y = 3x + c$ is tangent to the hyperbola $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$, then find the positive value of $c^2$.",
    correctAnswer: "27",
    explanation: "For the hyperbola $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$, $a^2 = 4, b^2 = 9$. The line is $y = 3x + c$, so $m = 3$. Condition of tangency: $c^2 = a^2 m^2 - b^2 = 4(3)^2 - 9 = 4(9) - 9 = 36 - 9 = 27$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The length of the transverse axis of the hyperbola $16x^2 - 9y^2 = 144$ is:",
    correctAnswer: "6",
    explanation: "Divide by $144$: $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$. Here $a^2 = 9 \\implies a = 3$. The length of the transverse axis is $2a = 2(3) = 6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If a hyperbola has semi-transverse axis $a = 6$ and eccentricity $e = 2$, then the distance between its directrices is:",
    correctAnswer: "6",
    explanation: "The distance between the two directrices of a hyperbola is $\\frac{2a}{e}$. Given $a = 6$ and $e = 2$, the distance between directrices is $\\frac{2(6)}{2} = 6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "For the hyperbola $9x^2 - 16y^2 = 144$, the product of the lengths of the semi-transverse axis and semi-conjugate axis is:",
    correctAnswer: "12",
    explanation: "Rewriting gives $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Thus $a^2 = 16 \\implies a = 4$, and $b^2 = 9 \\implies b = 3$. The product of semi-transverse axis and semi-conjugate axis is $ab = 4 \\times 3 = 12$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the latus rectum of a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ subtends a right angle at the center, then the value of $e^2 - e$ is:",
    correctAnswer: "1",
    explanation: "The ends of the latus rectum are $(ae, \\pm \\frac{b^2}{a})$. The slope of the segment joining the origin to $(ae, \\frac{b^2}{a})$ is $\\tan\\alpha = \\frac{b^2/a}{ae} = \\frac{b^2}{a^2 e} = \\frac{e^2 - 1}{e}$. Since the latus rectum subtends a right angle at the center, by symmetry $\\alpha = 45^\\circ$, so $\\tan\\alpha = 1$. Thus $\\frac{e^2 - 1}{e} = 1 \\implies e^2 - e = 1$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the length of the conjugate axis of the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{49} = 1$.",
    correctAnswer: "14",
    explanation: "For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the length of the conjugate axis is $2b$. Here $b^2 = 49 \\implies b = 7$. Thus the length of the conjugate axis is $2(7) = 14$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the line $x - y = \\sqrt{k}$ is tangent to the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, then find the value of $k$.",
    correctAnswer: "7",
    explanation: "For the line $y = x - \\sqrt{k}$, slope $m = 1$ and $c = -\\sqrt{k}$, so $c^2 = k$. Condition of tangency: $c^2 = a^2 m^2 - b^2$. Here $a^2 = 16, b^2 = 9, m = 1$. Thus $k = 16(1)^2 - 9 = 16 - 9 = 7$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the distance between the foci of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $16$ and its eccentricity is $2$, then the length of its latus rectum is:",
    correctAnswer: "24",
    explanation: "Distance between foci $= 2ae = 16$. With $e = 2$, we have $2a(2) = 16 \\implies 4a = 16 \\implies a = 4$. Since $e^2 = 1 + \\frac{b^2}{a^2}$, $4 = 1 + \\frac{b^2}{16} \\implies \\frac{b^2}{16} = 3 \\implies b^2 = 48$. Length of latus rectum $= \\frac{2b^2}{a} = \\frac{2(48)}{4} = 24$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "A hyperbola has its center at the origin, vertices at $(\\pm 5, 0)$, and one focus at $(13, 0)$. Find the length of its conjugate axis.",
    correctAnswer: "24",
    explanation: "Center is $(0, 0)$ and vertices are $(\\pm 5, 0)$, so $a = 5$. One focus is at $(13, 0)$, so $ae = 13$. Since $b^2 = (ae)^2 - a^2$, we get $b^2 = 13^2 - 5^2 = 169 - 25 = 144 \\implies b = 12$. The length of the conjugate axis is $2b = 2(12) = 24$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
