module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "The equation of the tangent to the parabola $y^2 = 8x$ which makes an angle of $45^\\circ$ with the positive $x$-axis is:",
    options: [
      "$y = x + 2$",
      "$y = x - 2$",
      "$y = x + 4$",
      "$y = x - 4$"
    ],
    correctAnswer: "$y = x + 2$",
    explanation: "For $y^2 = 8x$, $4a = 8 \\implies a = 2$. The slope of the tangent is $m = \\tan 45^\\circ = 1$. The equation of tangent to $y^2 = 4ax$ with slope $m$ is $y = mx + \\frac{a}{m}$. Substituting $m = 1$ and $a = 2$: $y = 1 \\cdot x + \\frac{2}{1} \\implies y = x + 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The vertex of the parabola $y^2 - 4y - 8x - 4 = 0$ is:",
    options: [
      "$(-1, 2)$",
      "$(1, 2)$",
      "$(-1, -2)$",
      "$(2, -1)$"
    ],
    correctAnswer: "$(-1, 2)$",
    explanation: "Complete the square in $y$: $y^2 - 4y = 8x + 4 \\implies (y - 2)^2 - 4 = 8x + 4 \\implies (y - 2)^2 = 8(x + 1)$. Comparing with $(y - k)^2 = 4a(x - h)$, the vertex $(h, k)$ is $(-1, 2)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The tangents at the extremities of any focal chord of the parabola $y^2 = 4ax$ intersect at an angle of:",
    options: [
      "$90^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$30^\\circ$"
    ],
    correctAnswer: "$90^\\circ$",
    explanation: "Let the extremities of the focal chord be $P(at_1^2, 2at_1)$ and $Q(at_2^2, 2at_2)$ with $t_1 t_2 = -1$. The slopes of the tangents at $P$ and $Q$ are $m_1 = \\frac{1}{t_1}$ and $m_2 = \\frac{1}{t_2}$. The product of their slopes is $m_1 m_2 = \\frac{1}{t_1 t_2} = \\frac{1}{-1} = -1$. Since the product of slopes is $-1$, the tangents intersect at right angles ($90^\\circ$) on the directrix $x = -a$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the line $y = 2x + c$ is a tangent to the parabola $y^2 = 16x$, then the value of $c$ is:",
    options: [
      "$2$",
      "$4$",
      "$8$",
      "$1$"
    ],
    correctAnswer: "$2$",
    explanation: "For $y^2 = 16x$, $4a = 16 \\implies a = 4$. For the line $y = mx + c$ to be tangent to $y^2 = 4ax$, the condition is $c = \\frac{a}{m}$. Here $m = 2$ and $a = 4$. Thus $c = \\frac{4}{2} = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The locus of the point of intersection of two perpendicular tangents to the parabola $y^2 = 4ax$ is:",
    options: [
      "$x + a = 0$",
      "$x - a = 0$",
      "$y + a = 0$",
      "$x^2 + y^2 = a^2$"
    ],
    correctAnswer: "$x + a = 0$",
    explanation: "The locus of the point of intersection of two perpendicular tangents to any parabola is its directrix. For $y^2 = 4ax$, the equation of the directrix is $x = -a$, or $x + a = 0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If one end of a focal chord of the parabola $y^2 = 8x$ is $(2, 4)$, then the coordinates of the other end are:",
    options: [
      "$(2, -4)$",
      "$(\\frac{1}{2}, -2)$",
      "$(8, -8)$",
      "$(\\frac{1}{8}, 1)$"
    ],
    correctAnswer: "$(2, -4)$",
    explanation: "For $y^2 = 8x$, $a = 2$. A point on the parabola is $(at^2, 2at)$. For $(2, 4)$, $2at = 4 \\implies 2(2)t = 4 \\implies t = 1$. Since the chord is a focal chord, the other end has parameter $t' = -\\frac{1}{t} = -1$. The coordinates of the other end are $(a(t')^2, 2at') = (2(-1)^2, 2(2)(-1)) = (2, -4)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The equation of the normal to the parabola $y^2 = 4x$ at the point $(1, 2)$ is:",
    options: [
      "$x + y = 3$",
      "$x - y = 3$",
      "$2x + y = 4$",
      "$x + 2y = 5$"
    ],
    correctAnswer: "$x + y = 3$",
    explanation: "For $y^2 = 4x$, $a = 1$. The point $(1, 2)$ corresponds to parameter $t$ where $2at = 2 \\implies 2(1)t = 2 \\implies t = 1$. The equation of the normal in parametric form is $y + xt = 2at + at^3$. Substituting $a = 1$ and $t = 1$: $y + x(1) = 2(1)(1) + 1(1)^3 \\implies y + x = 3$, or $x + y = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The length of the focal chord of the parabola $y^2 = 4ax$ having parameter $t$ at one of its extremities is:",
    options: [
      "$a\\left(t + \\frac{1}{t}\\right)^2$",
      "$a\\left(t - \\frac{1}{t}\\right)^2$",
      "$4a\\left(t + \\frac{1}{t}\\right)$",
      "$2a\\left(t + \\frac{1}{t}\\right)^2$"
    ],
    correctAnswer: "$a\\left(t + \\frac{1}{t}\\right)^2$",
    explanation: "The extremities of a focal chord are $P(at^2, 2at)$ and $Q(a/t^2, -2a/t)$. The distance between focus $S(a, 0)$ and $P$ is $SP = a + at^2 = a(1 + t^2)$. Similarly, $SQ = a + a/t^2 = a(1 + 1/t^2)$. The total length of the focal chord is $PQ = SP + SQ = a(1 + t^2) + a(1 + 1/t^2) = a\\left(t^2 + \\frac{1}{t^2} + 2\\right) = a\\left(t + \\frac{1}{t}\\right)^2$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The axis of the parabola $x^2 - 2x - 4y - 7 = 0$ is:",
    options: [
      "$x = 1$",
      "$x = -1$",
      "$y = -2$",
      "$y = 2$"
    ],
    correctAnswer: "$x = 1$",
    explanation: "Rewrite the equation: $x^2 - 2x = 4y + 7 \\implies (x - 1)^2 - 1 = 4y + 7 \\implies (x - 1)^2 = 4(y + 2)$. This parabola opens upward and is symmetric about the vertical line passing through its vertex $(1, -2)$. Hence, the axis of the parabola is $x = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "From an external point $(h, k)$, three normals can be drawn to the parabola $y^2 = 4ax$ if and only if:",
    options: [
      "$27ak^2 < 4(h - 2a)^3$",
      "$27ak^2 > 4(h - 2a)^3$",
      "$27ah^2 < 4(k - 2a)^3$",
      "$k^2 > 4ah$"
    ],
    correctAnswer: "$27ak^2 < 4(h - 2a)^3$",
    explanation: "The equation of normal in slope form is $y = mx - 2am - am^3$. If it passes through $(h, k)$, we have $am^3 + (2a - h)m + k = 0$. This cubic equation in $m$ has three real and distinct roots if and only if its discriminant is positive, which simplifies to the standard condition $27ak^2 < 4(h - 2a)^3$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The tangents drawn at the ends of any focal chord of the parabola $y^2 = 4ax$ intersect on the directrix $x + a = 0$.\\nReason (R): For the parabola $y^2 = 4ax$, the point of intersection of tangents at parameters $t_1$ and $t_2$ is $(a t_1 t_2, a(t_1 + t_2))$, and for a focal chord $t_1 t_2 = -1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The point of intersection of tangents at $t_1$ and $t_2$ has $x$-coordinate $x = a t_1 t_2$. Since the chord passes through the focus, $t_1 t_2 = -1$. Thus $x = a(-1) = -a$, which lies on the directrix $x + a = 0$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The length of the shortest focal chord of the parabola $y^2 = 4ax$ is $4a$.\\nReason (R): The length of a focal chord is $a\\left(t + \\frac{1}{t}\\right)^2$, and since $\\left|t + \\frac{1}{t}\\right| \\ge 2$ for all real $t \\ne 0$, the minimum value is $a(2)^2 = 4a$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The shortest focal chord is the latus rectum, which corresponds to $t = \\pm 1$ and has length $4a$. Both (A) and (R) are true and (R) correctly explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The line $x - 2y + 4 = 0$ is tangent to the parabola $y^2 = 4x$.\\nReason (R): For the parabola $y^2 = 4ax$, the condition of tangency for the line $y = mx + c$ is $c = \\frac{a}{m}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Rewrite $x - 2y + 4 = 0$ as $y = \\frac{1}{2}x + 2$. Here $m = 1/2$ and $c = 2$. For $y^2 = 4x$, $a = 1$. The condition is $c = \\frac{a}{m} = \\frac{1}{1/2} = 2$. Since this matches, the line is tangent. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Through any point on the axis of a parabola other than the vertex, at least one normal can always be drawn to the parabola.\\nReason (R): The cubic equation for the slopes of normals to $y^2 = 4ax$ has real coefficients, and every cubic polynomial with real coefficients has at least one real root.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A real cubic polynomial always has at least one real root. Hence, at least one real normal can be drawn from any point in the plane to a parabola. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the vertex of a parabola is $(2, 3)$ and its directrix is $x = -1$, then its focus is $(5, 3)$.\\nReason (R): The vertex of a parabola is the midpoint of the line segment joining the focus and the foot of the directrix on the axis.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The axis is $y = 3$. The foot of the directrix is $Z(-1, 3)$. Since the vertex $V(2, 3)$ is the midpoint of $SZ$, we have $\\frac{x_S + (-1)}{2} = 2 \\implies x_S = 5$. Thus focus $S$ is $(5, 3)$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The parabola $x^2 = -8y$ opens downwards and has focus at $(0, -2)$.\\nReason (R): For the standard parabola $x^2 = -4ay$ ($a > 0$), the curve opens downwards and its focus is located at $(0, -a)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $4a = 8 \\implies a = 2$. For $x^2 = -4ay$, the focus is $(0, -a) = (0, -2)$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The circle described on any focal chord of a parabola as diameter touches the directrix.\\nReason (R): The distance of the midpoint of any focal chord from the directrix is strictly greater than half the length of the focal chord.",
    options: [
      "(A) is true but (R) is false",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "(A) is true but (R) is false",
    explanation: "For a focal chord $PQ$, the distance of its midpoint $M$ from the directrix is $\\frac{PM_1 + QM_2}{2} = \\frac{SP + SQ}{2} = \\frac{PQ}{2}$, which is precisely equal to the radius of the circle. Hence the circle touches the directrix. Thus (A) is true, but (R) is false.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the parabola $y^2 = 4ax$, the parametric point $(at^2, 2at)$ always lies on the curve for any real value of $t$.\\nReason (R): Substituting $x = at^2$ and $y = 2at$ into $y^2 - 4ax$ yields $(2at)^2 - 4a(at^2) = 4a^2 t^2 - 4a^2 t^2 = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The parametric coordinates identically satisfy the equation of the parabola for all real values of $t$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A normal to the parabola $y^2 = 4ax$ at parameter $t_1$ meets the curve again at parameter $t_2 = -t_1 - \\frac{2}{t_1}$.\\nReason (R): The slope of the normal at $t_1$ is $-t_1$, and equating it to the slope of the chord joining $t_1$ and $t_2$, $\\frac{2}{t_1 + t_2}$, gives $-t_1 = \\frac{2}{t_1 + t_2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Slope of normal at $t_1$ is $-t_1$. Slope of chord joining $t_1$ and $t_2$ is $\\frac{2a(t_1 - t_2)}{a(t_1^2 - t_2^2)} = \\frac{2}{t_1 + t_2}$. Equating gives $-t_1(t_1 + t_2) = 2 \\implies t_1 + t_2 = -\\frac{2}{t_1} \\implies t_2 = -t_1 - \\frac{2}{t_1}$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The latus rectum of the parabola $(x - 1)^2 = 12(y + 2)$ has length $12$.\\nReason (R): For any parabola of the form $(x - h)^2 = 4a(y - k)$, the length of the latus rectum is $4a$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Comparing with $(x - h)^2 = 4a(y - k)$, we have $4a = 12$. The length of the latus rectum is $4a = 12$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "Find the length of the latus rectum of the parabola $y^2 - 6y - 16x + 25 = 0$.",
    correctAnswer: "16",
    explanation: "Complete the square: $y^2 - 6y + 9 = 16x - 25 + 9 \\implies (y - 3)^2 = 16(x - 1)$. Comparing with $(y - k)^2 = 4a(x - h)$, we get $4a = 16$. Thus the length of the latus rectum is $16$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the normal to the parabola $y^2 = 4x$ at the point $(1, 2)$ cuts the parabola again at $(x_2, y_2)$, then find the value of $x_2$.",
    correctAnswer: "9",
    explanation: "For $y^2 = 4x$, $a = 1$. The point $(1, 2)$ has parameter $t_1 = 1$. The normal meets the parabola again at parameter $t_2 = -t_1 - \\frac{2}{t_1} = -1 - \\frac{2}{1} = -3$. The coordinates of the new point are $(a t_2^2, 2a t_2) = (1(-3)^2, 2(1)(-3)) = (9, -6)$. Thus $x_2 = 9$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the line $y = 3x + c$ is tangent to the parabola $y^2 = 24x$, then find the value of $c$.",
    correctAnswer: "2",
    explanation: "For $y^2 = 24x$, $4a = 24 \\implies a = 6$. For the line $y = mx + c$ to be tangent, $c = \\frac{a}{m}$. Here $m = 3$ and $a = 6$. Thus $c = \\frac{6}{3} = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "The distance between the focus and the directrix of the parabola $y^2 = 20x$ is:",
    correctAnswer: "10",
    explanation: "For $y^2 = 20x$, $4a = 20 \\implies a = 5$. The focus is at $(a, 0) = (5, 0)$ and the directrix is $x = -a = -5$. The distance between the focus and the directrix is $2a = 2(5) = 10$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If a focal chord of the parabola $y^2 = 16x$ has one extremity at $(1, -4)$, find the length of the focal chord.",
    correctAnswer: "25",
    explanation: "For $y^2 = 16x$, $a = 4$. At $(1, -4)$, $2at = -4 \\implies 2(4)t = -4 \\implies t = -1/2$. The length of the focal chord is $a\\left(t + \\frac{1}{t}\\right)^2 = 4\\left(-\\frac{1}{2} - 2\\right)^2 = 4\\left(-\\frac{5}{2}\\right)^2 = 4\\left(\\frac{25}{4}\\right) = 25$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the tangents to the parabola $y^2 = 8x$ at parameters $t_1$ and $t_2$ intersect at the point $(-2, 6)$, find the value of $t_1 + t_2$.",
    correctAnswer: "3",
    explanation: "For $y^2 = 8x$, $a = 2$. The point of intersection of tangents at $t_1$ and $t_2$ is $(a t_1 t_2, a(t_1 + t_2))$. Equating the $y$-coordinates gives $a(t_1 + t_2) = 6 \\implies 2(t_1 + t_2) = 6 \\implies t_1 + t_2 = 3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the $x$-intercept of the normal to the parabola $y^2 = 4x$ at the point $(4, 4)$.",
    correctAnswer: "12",
    explanation: "For $y^2 = 4x$, $a = 1$. At $(4, 4)$, $2at = 4 \\implies 2(1)t = 4 \\implies t = 2$. The equation of normal is $y + xt = 2at + at^3$. Substituting $a = 1$ and $t = 2$: $y + 2x = 2(1)(2) + 1(2)^3 = 4 + 8 = 12$. For the $x$-intercept, put $y = 0$: $2x = 12 \\implies x = 6$. Wait! Let's re-verify: $y + 2x = 12$, put $y = 0 \\implies 2x = 12 \\implies x = 6$. So the $x$-intercept is $6$.",
    correctAnswer: "6",
    explanation: "For $y^2 = 4x$, $a = 1$. The point $(4, 4)$ corresponds to $t = 2$. The normal equation is $y + xt = 2at + at^3 \\implies y + 2x = 2(2) + 8 = 12$. Setting $y = 0$ gives $2x = 12 \\implies x = 6$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the area of the triangle formed by the vertex and the two ends of the latus rectum of the parabola $y^2 = 12x$.",
    correctAnswer: "18",
    explanation: "For $y^2 = 12x$, $4a = 12 \\implies a = 3$. The vertex is $(0, 0)$. The ends of the latus rectum are $(a, 2a) = (3, 6)$ and $(a, -2a) = (3, -6)$. The length of the base (latus rectum) is $4a = 12$, and the altitude from the vertex to the latus rectum is $a = 3$. The area of the triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 12 \\times 3 = 18$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Find the ordinate of the focus of the parabola $x^2 - 4x - 8y - 12 = 0$.",
    correctAnswer: "0",
    explanation: "Complete the square: $x^2 - 4x = 8y + 12 \\implies (x - 2)^2 - 4 = 8y + 12 \\implies (x - 2)^2 = 8(y + 2)$. Here $4a = 8 \\implies a = 2$. The vertex is $(h, k) = (2, -2)$. Since the parabola opens upwards, the focus is $(h, k + a) = (2, -2 + 2) = (2, 0)$. The ordinate ($y$-coordinate) of the focus is $0$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If two tangents drawn from a point $P$ to the parabola $y^2 = 4x$ are at right angles, and the ordinate of $P$ is $5$, then the sum of the coordinates of $P$ is:",
    correctAnswer: "4",
    explanation: "Since the tangents drawn from $P$ are perpendicular, $P$ must lie on the directrix of the parabola. For $y^2 = 4x$, $a = 1$, so the directrix is $x = -a = -1$. The coordinates of $P$ are therefore $(-1, 5)$. The sum of the coordinates is $-1 + 5 = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
