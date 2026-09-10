// scripts/data_jee_aod_subtopic4.js
// 30 authentic JEE Mains questions on 'Optimization problems'
// Subtopic 4 for Application of Derivatives (Mathematics, Class 12)

module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "A square sheet of tin of side $18\\text{ cm}$ is to be made into an open box by cutting a square from each corner and folding up the flaps. The side of the cut square that maximizes the volume of the box is:",
    options: [
      "$3\\text{ cm}$",
      "$2\\text{ cm}$",
      "$4\\text{ cm}$",
      "$5\\text{ cm}$"
    ],
    correctAnswer: "$3\\text{ cm}$",
    explanation: "Let $x$ be the side of each cut corner square. The base of the box has side $18 - 2x$ and the height is $x$. The volume is $V(x) = x(18 - 2x)^2 = 4x(9 - x)^2$. Differentiating: $V'(x) = 4[(9 - x)^2 - 2x(9 - x)] = 4(9 - x)(9 - 3x) = 12(9 - x)(3 - x) = 0$. For $0 < x < 9$, the critical point is $x = 3\\text{ cm}$. Second derivative check confirms $V''(3) < 0$, giving the maximum volume.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The maximum area of a rectangle that can be inscribed in the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ with sides parallel to the coordinate axes is:",
    options: [
      "$2ab$",
      "$ab$",
      "$\\pi ab$",
      "$4ab$"
    ],
    correctAnswer: "$2ab$",
    explanation: "Let a vertex of the inscribed rectangle in the first quadrant be $(a\\cos\\theta, b\\sin\\theta)$ for $\\theta \\in (0, \\pi/2)$. The sides of the rectangle are $2a\\cos\\theta$ and $2b\\sin\\theta$. Its area is $A(\\theta) = (2a\\cos\\theta)(2b\\sin\\theta) = 2ab(2\\sin\\theta\\cos\\theta) = 2ab\\sin 2\\theta$. The maximum value of $\\sin 2\\theta$ is $1$ (at $\\theta = \\pi/4$). Hence, the maximum area is $2ab(1) = 2ab$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The point on the parabola $y^2 = 2x$ which is closest to the point $(1, 4)$ is:",
    options: [
      "$(2, 2)$",
      "$(8, 4)$",
      "$(0, 0)$",
      "$(1/2, 1)$"
    ],
    correctAnswer: "$(2, 2)$",
    explanation: "Any point on the parabola $y^2 = 2x$ is $P\\left(\\frac{y^2}{2}, y\\right)$. The square of the distance from $(1, 4)$ is $D(y) = \\left(\\frac{y^2}{2} - 1\\right)^2 + (y - 4)^2$. Differentiating: $D'(y) = 2\\left(\\frac{y^2}{2} - 1\\right)y + 2(y - 4) = y(y^2 - 2) + 2y - 8 = y^3 - 2y + 2y - 8 = y^3 - 8 = 0 \\implies y = 2$. Then $x = \\frac{2^2}{2} = 2$. Thus, the closest point is $(2, 2)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The radius of the base of a right circular cylinder of maximum volume that can be inscribed in a sphere of radius $R$ is:",
    options: [
      "$\\sqrt{\\frac{2}{3}}R$",
      "$\\frac{R}{\\sqrt{3}}$",
      "$\\frac{R}{2}$",
      "$\\sqrt{\\frac{1}{3}}R$"
    ],
    correctAnswer: "$\\sqrt{\\frac{2}{3}}R$",
    explanation: "Let the cylinder have base radius $r$ and height $h = 2y$. From the sphere, $r^2 + y^2 = R^2 \\implies r^2 = R^2 - y^2$. The volume of the cylinder is $V = \\pi r^2 h = \\pi(R^2 - y^2)(2y) = 2\\pi(R^2 y - y^3)$. Setting $\\frac{dV}{dy} = 2\\pi(R^2 - 3y^2) = 0 \\implies y = \\frac{R}{\\sqrt{3}}$. Then $r^2 = R^2 - y^2 = R^2 - \\frac{R^2}{3} = \\frac{2R^2}{3} \\implies r = \\sqrt{\\frac{2}{3}}R$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Among all pairs of positive numbers $x$ and $y$ whose product is $16$, the pair which minimizes their sum $x + y$ is:",
    options: [
      "$x = 4, y = 4$",
      "$x = 2, y = 8$",
      "$x = 1, y = 16$",
      "$x = 16, y = 1$"
    ],
    correctAnswer: "$x = 4, y = 4$",
    explanation: "Let $S = x + y$. Given $xy = 16 \\implies y = \\frac{16}{x}$, so $S(x) = x + \\frac{16}{x}$. Differentiating: $S'(x) = 1 - \\frac{16}{x^2} = 0 \\implies x^2 = 16 \\implies x = 4$ (since $x > 0$). Then $y = 16/4 = 4$. By the second derivative test, $S''(4) = \\frac{32}{64} > 0$, so the sum is minimized when $x = 4, y = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A wire of length $28\\text{ m}$ is to be cut into two pieces. One piece is bent into a square and the other into a circle. To minimize the combined area of the square and the circle, the side of the square should be:",
    options: [
      "$\\frac{28}{\\pi + 4}$",
      "$\\frac{14}{\\pi + 4}$",
      "$\\frac{7}{\\pi + 4}$",
      "$\\frac{28}{\\pi + 2}$"
    ],
    correctAnswer: "$\\frac{28}{\\pi + 4}$",
    explanation: "Let $x$ be the length of wire used for the square; then $28 - x$ is used for the circle. Side of square $s = x/4$, area $A_1 = s^2 = x^2/16$. Radius of circle $r = \\frac{28 - x}{2\\pi}$, area $A_2 = \\pi r^2 = \\frac{(28 - x)^2}{4\\pi}$. Combined area $A(x) = \\frac{x^2}{16} + \\frac{(28 - x)^2}{4\\pi}$. Differentiating: $A'(x) = \\frac{x}{8} - \\frac{28 - x}{2\\pi} = 0 \\implies \\frac{\\pi x - 4(28 - x)}{8\\pi} = 0 \\implies (\\pi + 4)x = 112 \\implies x = \\frac{112}{\\pi + 4}$. The side of the square is $s = \\frac{x}{4} = \\frac{28}{\\pi + 4}$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The shortest distance between the line $y = x - 1$ and the parabola $y = x^2$ is:",
    options: [
      "$\\frac{3\\sqrt{2}}{8}$",
      "$\\frac{\\sqrt{2}}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{3\\sqrt{2}}{4}$"
    ],
    correctAnswer: "$\\frac{3\\sqrt{2}}{8}$",
    explanation: "The shortest distance occurs where the tangent to the parabola is parallel to the line $y = x - 1$ (slope $m = 1$). For the parabola $y = x^2$, $\\frac{dy}{dx} = 2x = 1 \\implies x = 1/2$, so $y = 1/4$. The perpendicular distance from $(1/2, 1/4)$ to the line $x - y - 1 = 0$ is $d = \\frac{|1/2 - 1/4 - 1|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|-3/4|}{\\sqrt{2}} = \\frac{3}{4\\sqrt{2}} = \\frac{3\\sqrt{2}}{8}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The height of the right circular cylinder of maximum volume that can be inscribed in a sphere of radius $R$ is:",
    options: [
      "$\\frac{2R}{\\sqrt{3}}$",
      "$\\frac{R}{\\sqrt{3}}$",
      "$\\frac{R}{2}$",
      "$\\sqrt{\\frac{2}{3}}R$"
    ],
    correctAnswer: "$\\frac{2R}{\\sqrt{3}}$",
    explanation: "From the sphere constraint $r^2 + (h/2)^2 = R^2 \\implies r^2 = R^2 - \\frac{h^2}{4}$. Volume of cylinder is $V(h) = \\pi r^2 h = \\pi\\left(R^2 h - \\frac{h^3}{4}\\right)$. Setting $V'(h) = \\pi\\left(R^2 - \\frac{3h^2}{4}\\right) = 0 \\implies \\frac{3h^2}{4} = R^2 \\implies h^2 = \\frac{4R^2}{3} \\implies h = \\frac{2R}{\\sqrt{3}}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A company finds that the cost of producing $x$ units of a product is $C(x) = 2x^2 + 50x + 5000$. The production level $x$ that minimizes the average cost $\\bar{C}(x) = \\frac{C(x)}{x}$ is:",
    options: [
      "$50$",
      "$25$",
      "$100$",
      "$40$"
    ],
    correctAnswer: "$50$",
    explanation: "Average cost is $\\bar{C}(x) = \\frac{C(x)}{x} = 2x + 50 + \\frac{5000}{x}$. Differentiating: $\\bar{C}'(x) = 2 - \\frac{5000}{x^2} = 0 \\implies 2x^2 = 5000 \\implies x^2 = 2500 \\implies x = 50$ (since $x > 0$). Since $\\bar{C}''(x) = \\frac{10000}{x^3} > 0$, average cost is minimized at $x = 50$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The maximum perimeter of a rectangle that can be inscribed in a semicircle of radius $R$ with one side lying on the diameter is:",
    options: [
      "$(\\sqrt{5} + 1)R$",
      "$\\sqrt{5}R$",
      "$4R$",
      "$2\\sqrt{5}R$"
    ],
    correctAnswer: "$\\sqrt{5}R$",
    explanation: "Let the upper vertices of the rectangle on the semicircle $x^2 + y^2 = R^2$ be $(\\pm R\\cos\\theta, R\\sin\\theta)$ with $\\theta \\in (0, \\pi/2)$. The base along the diameter has length $2R\\cos\\theta$, and the height is $R\\sin\\theta$. Perimeter is $P(\\theta) = 2(2R\\cos\\theta) + 2(R\\sin\\theta) = 4R\\cos\\theta + 2R\\sin\\theta$. Wait, perimeter of the full rectangle is $2(\\text{length} + \\text{breadth}) = 2(2R\\cos\\theta + R\\sin\\theta) = 4R\\cos\\theta + 2R\\sin\\theta$. The maximum of $a\\cos\\theta + b\\sin\\theta$ is $\\sqrt{a^2 + b^2} = \\sqrt{(4R)^2 + (2R)^2} = \\sqrt{16R^2 + 4R^2} = \\sqrt{20}R = 2\\sqrt{5}R$. Thus the maximum perimeter is $2\\sqrt{5}R$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason Questions
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Among all rectangles of a given perimeter, the square has the maximum area.\nReason (R): For a fixed perimeter $2(x + y) = P$, the area $A = x(P/2 - x)$ is a quadratic in $x$ that attains its maximum at $x = P/4$, which gives $x = y = P/4$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Let $2(x + y) = P \\implies y = P/2 - x$. The area is $A(x) = x(P/2 - x) = \\frac{P}{2}x - x^2$. Setting $A'(x) = P/2 - 2x = 0 \\implies x = P/4$, which gives $y = P/4$, i.e., a square. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The shortest distance between two disjoint smooth convex curves lies along their common normal.\nReason (R): At the points of minimal distance, the tangent lines to both curves must be parallel to each other and perpendicular to the line joining them.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "By variational calculus and Lagrange multipliers, the line segment realizing the minimum distance between two smooth curves must be orthogonal to both curves at its endpoints, meaning it is a common normal. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An open cylindrical tank of fixed volume $V$ has minimal surface area when its height is equal to its base radius ($h = r$).\nReason (R): For an open tank, surface area $S = \\pi r^2 + \\frac{2V}{r}$, and setting $S'(r) = 2\\pi r - \\frac{2V}{r^2} = 0$ yields $V = \\pi r^3 = \\pi r^2 h \\implies h = r$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For an open cylinder (one circular base), $S = \\pi r^2 + 2\\pi rh$. Since $V = \\pi r^2 h \\implies 2\\pi rh = \\frac{2V}{r}$, we have $S(r) = \\pi r^2 + \\frac{2V}{r}$. Differentiating: $S'(r) = 2\\pi r - \\frac{2V}{r^2} = 0 \\implies 2\\pi r^3 = 2V \\implies V = \\pi r^3$. But $V = \\pi r^2 h$, so $\\pi r^2 h = \\pi r^3 \\implies h = r$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For a closed cylindrical can of fixed volume, total surface area is minimized when the height equals the diameter ($h = 2r$).\nReason (R): Total surface area includes two circular bases, $S = 2\\pi r^2 + \\frac{2V}{r}$, and $S'(r) = 4\\pi r - \\frac{2V}{r^2} = 0 \\implies V = 2\\pi r^3 = \\pi r^2 h \\implies h = 2r$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For a closed cylinder, $S = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\frac{2V}{r}$. Differentiating: $S'(r) = 4\\pi r - \\frac{2V}{r^2} = 0 \\implies 4\\pi r^3 = 2V \\implies V = 2\\pi r^3$. Since $V = \\pi r^2 h$, we have $\\pi r^2 h = 2\\pi r^3 \\implies h = 2r$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The point on the line $y = 2x + 1$ closest to the origin is $\\left(-\\frac{2}{5}, \\frac{1}{5}\\right)$.\nReason (R): The line joining the origin to the closest point must be perpendicular to the line $y = 2x + 1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "The perpendicular line from origin has slope $-1/2$, so its equation is $y = -\\frac{1}{2}x$. Solving simultaneously with $y = 2x + 1$: $-\\frac{1}{2}x = 2x + 1 \\implies -\\frac{5}{2}x = 1 \\implies x = -\\frac{2}{5}$. Then $y = 2(-2/5) + 1 = \\frac{1}{5}$. The closest point is indeed $(-2/5, 1/5)$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the sum of two positive numbers is constant, their product is maximum when the two numbers are equal.\nReason (R): By the AM-GM inequality, $\\frac{x + y}{2} \\ge \\sqrt{xy}$, and equality holds if and only if $x = y$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "If $x + y = S$ (constant), then $xy \\le \\left(\\frac{S}{2}\\right)^2$, with maximum value $S^2/4$ attained when $x = y$. Both statements are true and Reason is the direct mathematical justification.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The maximum volume of a cone that can be inscribed in a sphere of radius $R$ is $\\frac{8}{27}$ of the volume of the sphere.\nReason (R): If $h$ is the height of the cone, its volume is $V = \\frac{1}{3}\\pi(2Rh - h^2)h$, which attains its maximum when $h = \\frac{4}{3}R$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "For an inscribed cone, base radius $r$ satisfies $r^2 = R^2 - (h - R)^2 = 2Rh - h^2$. The volume of the cone is $V(h) = \\frac{\\pi}{3}(2Rh^2 - h^3)$. Setting $V'(h) = \\frac{\\pi}{3}(4Rh - 3h^2) = 0 \\implies h = \\frac{4}{3}R$. The maximum volume is $V = \\frac{\\pi}{3}\\left(2R \\cdot \\frac{16R^2}{9} - \\frac{64R^3}{27}\\right) = \\frac{32\\pi R^3}{81} = \\frac{8}{27}\\left(\\frac{4}{3}\\pi R^3\\right) = \\frac{8}{27}V_{\\text{sphere}}$. Both statements are true and Reason explains Assertion.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A window is in the form of a rectangle surmounted by a semicircular opening. If the perimeter is fixed, the window admits maximum light when the height of the rectangular part equals the radius of the semicircle.\nReason (R): Setting the derivative of the total area with respect to the radius equal to zero produces the condition that the rectangular height equals the radius.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Let radius be $r$ and height of rectangle be $h$. Perimeter $P = 2r + 2h + \\pi r$. Area $A = 2rh + \\frac{1}{2}\\pi r^2 = r(P - 2r - \\pi r) + \\frac{1}{2}\\pi r^2 = Pr - 2r^2 - \\frac{1}{2}\\pi r^2$. Differentiating with respect to $r$: $A'(r) = P - 4r - \\pi r = 0 \\implies P = (4 + \\pi)r$. Then $2h = P - (2 + \\pi)r = (4 + \\pi)r - (2 + \\pi)r = 2r \\implies h = r$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The minimum distance from the origin to a point on the hyperbola $xy = 4$ is $2\\sqrt{2}$.\nReason (R): For any point $(x, y)$ on $xy = 4$, the square of the distance from the origin is $x^2 + y^2 \\ge 2\\sqrt{x^2 y^2} = 2(4) = 8$ by the AM-GM inequality.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Distance squared is $D^2 = x^2 + y^2$. By AM-GM, $x^2 + y^2 \\ge 2|xy| = 2(4) = 8$. Thus $D \\ge \\sqrt{8} = 2\\sqrt{2}$, with equality at $x = y = 2$ or $x = y = -2$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A rectangular printed page has total area $150\\text{ cm}^2$ with margins of $1\\text{ cm}$ at top and bottom and $1.5\\text{ cm}$ at the sides. The dimensions that maximize the printed area are length $15\\text{ cm}$ and width $10\\text{ cm}$.\nReason (R): For maximum printed area, the outer dimensions must be inversely proportional to the respective margins.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Assertion is true but Reason is false",
    explanation: "Let dimensions be $x$ (width) and $y$ (height) with $xy = 150 \\implies y = 150/x$. Printed area is $A = (x - 3)(y - 2) = (x - 3)(150/x - 2) = 150 - 2x - 450/x + 6 = 156 - 2x - 450/x$. To maximize: $A'(x) = -2 + 450/x^2 = 0 \\implies x^2 = 225 \\implies x = 15\\text{ cm}$, so $y = 10\\text{ cm}$. Assertion (A) is true. However, Reason (R) is false because the outer dimensions are directly proportional to the square root of the product of margins and area, not inversely proportional.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Value Questions
  {
    questionType: "NUMERICAL",
    question: "Find the maximum volume (in $\\text{cm}^3$) of an open box made from a square sheet of cardboard of side $12\\text{ cm}$ by cutting equal squares of side $x$ from each corner and folding up the sides.",
    correctAnswer: "128",
    explanation: "Volume $V(x) = x(12 - 2x)^2 = 4x(6 - x)^2$. Differentiating: $V'(x) = 4(6 - x)^2 - 8x(6 - x) = 4(6 - x)(6 - 3x) = 12(6 - x)(2 - x) = 0$. For $0 < x < 6$, critical point is $x = 2\\text{ cm}$. Maximum volume is $V(2) = 2(12 - 4)^2 = 2(8^2) = 2(64) = 128\\text{ cm}^3$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the maximum area of a rectangle inscribed in a circle of radius $5\\text{ cm}$.",
    correctAnswer: "50",
    explanation: "Let the sides of the inscribed rectangle be $x$ and $y$. Then $x^2 + y^2 = (2R)^2 = 10^2 = 100$. By AM-GM, Area $= xy \\le \\frac{x^2 + y^2}{2} = \\frac{100}{2} = 50$. Equality occurs when $x = y = \\sqrt{50} = 5\\sqrt{2}$ (a square). Thus the maximum area is $50\\text{ cm}^2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the minimum value of $x^2 + y^2$ subject to the linear constraint $2x + 3y = 13$.",
    correctAnswer: "13",
    explanation: "The minimum value of $x^2 + y^2$ is the square of the perpendicular distance from the origin to the line $2x + 3y - 13 = 0$. Perpendicular distance $d = \\frac{|-13|}{\\sqrt{2^2 + 3^2}} = \\frac{13}{\\sqrt{13}} = \\sqrt{13}$. Therefore, the minimum value of $x^2 + y^2 = d^2 = (\\sqrt{13})^2 = 13$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "If the product of two positive numbers is $64$, find their minimum possible sum.",
    correctAnswer: "16",
    explanation: "Let the numbers be $x$ and $y$ with $xy = 64$. By the AM-GM inequality, $\\frac{x + y}{2} \\ge \\sqrt{xy} = \\sqrt{64} = 8 \\implies x + y \\ge 16$. Equality holds when $x = y = 8$. Thus the minimum sum is $16$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the value of $4d^2$, where $d$ is the shortest distance from the point $(0, 5)$ to the parabola $y = x^2$.",
    correctAnswer: "19",
    explanation: "Any point on the parabola is $(x, x^2)$. Distance squared from $(0, 5)$ is $D(x) = x^2 + (x^2 - 5)^2 = x^4 - 9x^2 + 25$. Let $u = x^2 \\ge 0$. Then $f(u) = u^2 - 9u + 25 = \\left(u - \\frac{9}{2}\\right)^2 + \\frac{19}{4}$. The minimum value occurs at $u = 9/2 \\ge 0$, giving $d^2 = \\frac{19}{4}$. Therefore, $4d^2 = 19$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The maximum area of an isosceles triangle inscribed in a circle of radius $6$ is $K\\sqrt{3}$. Find the value of $K$.",
    correctAnswer: "27",
    explanation: "An inscribed isosceles triangle in a circle of radius $R$ achieves maximum area when it is an equilateral triangle. For an equilateral triangle inscribed in a circle of radius $R = 6$, the area is $A = \\frac{3\\sqrt{3}}{4} R^2 = \\frac{3\\sqrt{3}}{4}(36) = 27\\sqrt{3}$. Comparing with $K\\sqrt{3}$, we obtain $K = 27$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the value of $x$ (in $\\text{cm}$) that maximizes the volume of an open rectangular box constructed by cutting squares of side $x$ from a $24\\text{ cm} \\times 24\\text{ cm}$ sheet of metal.",
    correctAnswer: "4",
    explanation: "Volume $V(x) = x(24 - 2x)^2 = 4x(12 - x)^2$. Differentiating: $V'(x) = 4(12 - x)(12 - 3x) = 12(12 - x)(4 - x) = 0$. For $0 < x < 12$, the critical point is $x = 4\\text{ cm}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "A rectangular field is to be enclosed using $120\\text{ meters}$ of fencing. Find the maximum possible area (in $\\text{m}^2$) of the field.",
    correctAnswer: "900",
    explanation: "Perimeter $2(x + y) = 120 \\implies x + y = 60$. Maximum area occurs when the field is a square with $x = y = 30\\text{ m}$. Maximum area is $A = 30 \\times 30 = 900\\text{ m}^2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the minimum value of $f(x, y) = x^2 + y^2 - 4x - 6y + 20$ for all $(x, y) \\in \\mathbb{R}^2$.",
    correctAnswer: "7",
    explanation: "Completing the squares: $f(x, y) = (x^2 - 4x + 4) + (y^2 - 6y + 9) + 20 - 4 - 9 = (x - 2)^2 + (y - 3)^2 + 7$. Since $(x - 2)^2 \\ge 0$ and $(y - 3)^2 \\ge 0$, the minimum value is $7$, occurring at $(2, 3)$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "Find the maximum product of two positive numbers whose sum is $20$.",
    correctAnswer: "100",
    explanation: "Let $x + y = 20$. Product $P = xy = x(20 - x) = 20x - x^2$. Maximum occurs at $x = 10, y = 10$, giving $P_{\\max} = 10 \\times 10 = 100$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
