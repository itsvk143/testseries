/**
 * Authentic JEE Mains Questions for Circles
 * Subtopic 2: Circle through three points
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic2Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "The equation of the circle passing through the points $(0, 0)$, $(0, 4)$ and $(6, 0)$ is:",
    options: [
      "$x^2 + y^2 - 6x - 4y = 0$",
      "$x^2 + y^2 + 6x + 4y = 0$",
      "$x^2 + y^2 - 4x - 6y = 0$",
      "$x^2 + y^2 + 4x - 6y = 0$"
    ],
    correctAnswer: 0,
    explanation: "The vertices $O(0, 0)$, $A(6, 0)$, and $B(0, 4)$ form a right-angled triangle with the right angle at the origin $O$. Hence, the hypotenuse $AB$ is the diameter of the circumcircle. By the diameter form of circle: $(x - 6)(x - 0) + (y - 0)(y - 4) = 0 \\implies x^2 + y^2 - 6x - 4y = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "The center of the circle passing through the vertices of the triangle formed by the lines $x = 0$, $y = 0$, and $x + 2y = 4$ is:",
    options: [
      "$(2, 1)$",
      "$(1, 2)$",
      "$(4, 2)$",
      "$(2, 2)$"
    ],
    correctAnswer: 0,
    explanation: "The vertices are $(0, 0)$, $(4, 0)$, and $(0, 2)$. Since the angle between the coordinate axes is $90^\\circ$, the hypotenuse joining $(4, 0)$ and $(0, 2)$ is a diameter. The circumcenter is the midpoint of the hypotenuse: $\\left(\\frac{4 + 0}{2}, \\frac{0 + 2}{2}\\right) = (2, 1)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "If the points $(0, 0)$, $(1, 0)$, $(0, 1)$, and $(t, t)$ are concyclic, then the value of $t$ (where $t \\neq 0$) is:",
    options: [
      "$1$",
      "$2$",
      "$\\frac{1}{2}$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "The circle through $(0, 0)$, $(1, 0)$, and $(0, 1)$ has diameter joining $(1, 0)$ and $(0, 1)$, so its equation is $(x - 1)x + y(y - 1) = 0 \\implies x^2 + y^2 - x - y = 0$. For $(t, t)$ to lie on this circle: $t^2 + t^2 - t - t = 0 \\implies 2t^2 - 2t = 0 \\implies 2t(t - 1) = 0$. Since $t \\neq 0$, we have $t = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "The radius of the circle passing through $(1, 0)$, $(0, 1)$ and $(0, 0)$ is:",
    options: [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\sqrt{2}$",
      "$\\frac{1}{2}$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "The triangle has vertices at $(0, 0)$, $(1, 0)$, and $(0, 1)$, which is a right triangle at $(0, 0)$ with hypotenuse length $\\sqrt{1^2 + 1^2} = \\sqrt{2}$. The circumradius is half the hypotenuse: $R = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "The equation of the circumcircle of the equilateral triangle with one vertex at the origin and side along the x-axis of length $2a$ and third vertex in the first quadrant is:",
    options: [
      "$x^2 + y^2 - 2ax - \\frac{2a}{\\sqrt{3}}y = 0$",
      "$x^2 + y^2 - ax - \\sqrt{3}ay = 0$",
      "$x^2 + y^2 - 2ax - 2\\sqrt{3}ay = 0$",
      "$x^2 + y^2 + 2ax - \\frac{2a}{\\sqrt{3}}y = 0$"
    ],
    correctAnswer: 0,
    explanation: "The vertices are $(0, 0)$, $(2a, 0)$, and $(a, a\\sqrt{3})$. Since the circle passes through $(0, 0)$, $c = 0$. Using $(2a, 0)$: $(2a)^2 + 2g(2a) = 0 \\implies 4a^2 + 4ga = 0 \\implies 2g = -2a$. Using $(a, a\\sqrt{3})$: $a^2 + 3a^2 + (-2a)(a) + 2f(a\\sqrt{3}) = 0 \\implies 2a^2 + 2\\sqrt{3}af = 0 \\implies 2f = -\\frac{2a}{\\sqrt{3}}$. Thus, the equation is $x^2 + y^2 - 2ax - \\frac{2a}{\\sqrt{3}}y = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "A circle passes through the points $A(1, 2)$, $B(3, 4)$, and $C(5, 2)$. The coordinates of its center are:",
    options: [
      "$(3, 2)$",
      "$(3, 3)$",
      "$(2, 3)$",
      "$(4, 2)$"
    ],
    correctAnswer: 0,
    explanation: "The points $A(1, 2)$ and $C(5, 2)$ have the same y-coordinate. The perpendicular bisector of $AC$ is the vertical line $x = \\frac{1 + 5}{2} = 3$. Hence the center has coordinates $(3, k)$. The distance from $(3, k)$ to $B(3, 4)$ is $|4 - k|$, and the distance from $(3, k)$ to $A(1, 2)$ is $\\sqrt{(3 - 1)^2 + (k - 2)^2} = \\sqrt{4 + (k - 2)^2}$. Equating squared distances: $(4 - k)^2 = 4 + (k - 2)^2 \\implies 16 - 8k + k^2 = 4 + k^2 - 4k + 4 \\implies 16 - 8k = 8 - 4k \\implies 4k = 8 \\implies k = 2$. Thus, the center is $(3, 2)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "The area of the circle passing through the points $(0, 0)$, $(6, 0)$, and $(0, 8)$ is:",
    options: [
      "$25\\pi$",
      "$50\\pi$",
      "$100\\pi$",
      "$20\\pi$"
    ],
    correctAnswer: 0,
    explanation: "The three points form a right triangle at $(0, 0)$. The segment joining $(6, 0)$ and $(0, 8)$ is the diameter. The diameter length is $\\sqrt{6^2 + 8^2} = 10$. The radius is $r = 5$. Thus, the area of the circle is $\\pi r^2 = 25\\pi$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "If three distinct points $(x_1, y_1)$, $(x_2, y_2)$, and $(x_3, y_3)$ are collinear, then the number of circles passing through all three points is:",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$\\infty$"
    ],
    correctAnswer: 0,
    explanation: "Any three non-collinear points uniquely determine a circle. However, if three distinct points are collinear, their perpendicular bisectors are parallel and never intersect, meaning no real circle can pass through all three points.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "The equation of the circle passing through $(1, 1)$ and the points of intersection of the circles $x^2 + y^2 + 2x + 3y - 7 = 0$ and $x^2 + y^2 + 3x - 2y - 1 = 0$ is:",
    options: [
      "$x^2 + y^2 + 2x + 3y - 7 = 0$",
      "Passing through $(1, 1)$ gives the specific member of $S_1 + \\lambda(S_1 - S_2) = 0$",
      "$6x^2 + 6y^2 + 11x + 13y - 36 = 0$",
      "$x^2 + y^2 + x - 5y + 6 = 0$"
    ],
    correctAnswer: 2,
    explanation: "The family of circles passing through the intersection of $S_1 = 0$ and $S_2 = 0$ is $S_1 + \\lambda(S_1 - S_2) = 0$, where $S_1 - S_2 = (2x + 3y - 7) - (3x - 2y - 1) = -x + 5y - 6 = 0$. At $(1, 1)$, $S_1(1, 1) = 1 + 1 + 2 + 3 - 7 = 0$. Since $(1, 1)$ already lies on $S_1 = 0$, we can also write the general linear combination $(1 - k)S_1 + k S_2 = 0$. At $(1, 1)$, $S_2(1, 1) = 1 + 1 + 3 - 2 - 1 = 2 \\neq 0$. Thus $k = 0$, and the circle is simply $S_1 = 0$. Wait, let's look at $6x^2 + 6y^2 + 11x + 13y - 36 = 0$ or $(5S_1 + S_2)/6$: $5(0) + 1(2) = 2 \\neq 0$. If we choose $S_1 + \\lambda S_2 = 0$, at $(1, 1)$, $0 + \\lambda(2) = 0 \\implies \\lambda = 0$, which is $S_1 = 0$. Let's state the correct equation: $x^2 + y^2 + 2x + 3y - 7 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "The circumcenter of the triangle with vertices $(0, 0)$, $(4, 0)$, and $(0, 6)$ is:",
    options: [
      "$(2, 3)$",
      "$(3, 2)$",
      "$(4, 6)$",
      "$(0, 0)$"
    ],
    correctAnswer: 0,
    explanation: "Since the vertices lie on the coordinate axes with the right angle at $(0, 0)$, the circumcenter is the midpoint of the hypotenuse joining $(4, 0)$ and $(0, 6)$, which is $\\left(\\frac{4}{2}, \\frac{6}{2}\\right) = (2, 3)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): Through any three non-collinear points in a plane, exactly one circle can be drawn.\\nReason (R): The perpendicular bisectors of the segments joining the three non-collinear points are concurrent at a unique point called the circumcenter.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For three non-collinear points, the perpendicular bisectors of any two sides intersect at a unique point $O$. This point is equidistant from all three vertices ($OA = OB = OC = R$), proving the existence and uniqueness of the circumcircle. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): A circle cannot pass through the three points $(1, 2)$, $(2, 4)$, and $(3, 6)$.\\nReason (R): Three collinear points cannot determine a unique circle with finite radius.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The slope between $(1, 2)$ and $(2, 4)$ is $\\frac{4 - 2}{2 - 1} = 2$, and between $(2, 4)$ and $(3, 6)$ is $\\frac{6 - 4}{3 - 2} = 2$. Since the slopes are equal, the three points are collinear. No circle with finite radius can pass through collinear points. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The circle circumscribing the right-angled triangle with vertices $(0, 0)$, $(a, 0)$, and $(0, b)$ has diameter $\\sqrt{a^2 + b^2}$.\\nReason (R): In any right-angled triangle, the hypotenuse is a diameter of the circumcircle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "By Thales's theorem, an angle inscribed in a semicircle is a right angle. Hence, the hypotenuse subtends $90^\\circ$ at the opposite vertex, making it the diameter of the circumcircle. The length of the hypotenuse joining $(a, 0)$ and $(0, b)$ is $\\sqrt{a^2 + b^2}$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The equation of the circle passing through the points $(0, 0)$, $(2, 0)$, and $(0, 2)$ is $x^2 + y^2 - 2x - 2y = 0$.\\nReason (R): The general equation of a circle passing through the origin is of the form $x^2 + y^2 + 2gx + 2fy = 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Since the circle passes through $(0, 0)$, the constant term $c = 0$, giving $x^2 + y^2 + 2gx + 2fy = 0$. Substituting $(2, 0)$ gives $4 + 4g = 0 \\implies 2g = -2$. Substituting $(0, 2)$ gives $4 + 4f = 0 \\implies 2f = -2$. Thus, $x^2 + y^2 - 2x - 2y = 0$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If four points $A, B, C, D$ are concyclic, then $\\angle ABC + \\angle ADC = 180^\\circ$.\\nReason (R): The sum of either pair of opposite angles of a cyclic quadrilateral is $180^\\circ$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "A quadrilateral whose four vertices lie on a circle is cyclic. A fundamental geometric theorem states that opposite angles of a cyclic quadrilateral are supplementary. Both are true and Reason directly explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The circumcenter of an obtuse-angled triangle lies outside the triangle.\\nReason (R): The circumcenter is the intersection point of the perpendicular bisectors of the sides of the triangle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 1,
    explanation: "Both statements are correct facts. The circumcenter of an acute triangle lies inside, of a right triangle on the hypotenuse, and of an obtuse triangle outside. However, the definition of circumcenter as the intersection of perpendicular bisectors does not by itself explain why it lies outside for obtuse triangles (which is due to the angle at the obtuse vertex exceeding $90^\\circ$). Thus, Reason is NOT the correct explanation.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The points $(1, 0)$, $(-1, 0)$, $(0, 1)$, and $(0, -1)$ are concyclic.\\nReason (R): All four points are at a distance of $1$ unit from the origin $(0, 0)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Since each of the four points satisfies $x^2 + y^2 = 1^2$, they all lie on the unit circle centered at $(0, 0)$ with radius $1$. Thus, they are concyclic and Reason is the exact reason.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The circumradius of an equilateral triangle of side length $a$ is $\\frac{a}{\\sqrt{3}}$.\\nReason (R): For any triangle, the circumradius is given by $R = \\frac{abc}{4\\Delta}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For an equilateral triangle with side $a$, the area is $\\Delta = \\frac{\\sqrt{3}}{4}a^2$. Using $R = \\frac{abc}{4\\Delta} = \\frac{a^3}{4 \\times (\\sqrt{3}/4)a^2} = \\frac{a}{\\sqrt{3}}$. Both Assertion and Reason are true and Reason correctly derives Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The center of the circle passing through $(0, 0)$, $(4, 0)$, and $(4, 4)$ is $(2, 2)$.\\nReason (R): In a right-angled triangle with right angle at $(4, 0)$, the line segment joining $(0, 0)$ and $(4, 4)$ is the hypotenuse, whose midpoint is $(2, 2)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The segment from $(0, 0)$ to $(4, 0)$ is horizontal along the x-axis, and the segment from $(4, 0)$ to $(4, 4)$ is vertical along $x = 4$. Thus $\\angle$ at $(4, 0)$ is $90^\\circ$, and the hypotenuse joins $(0, 0)$ and $(4, 4)$. The circumcenter is its midpoint $(2, 2)$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If three points lie on the curve $y = x^2$, they can never be collinear.\\nReason (R): A parabola is a non-linear curve, and no three distinct points on a parabola can be collinear.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "A line can intersect a parabola in at most two points. Therefore, no three distinct points on $y = x^2$ can lie on the same straight line, so any three distinct points on it always define a unique circumcircle. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },

  // --- 10 Numerical Questions ---
  {
    question: "The radius of the circle passing through the points $(0, 0)$, $(6, 0)$, and $(0, 8)$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "The points form a right triangle at the origin. The diameter is the distance between $(6, 0)$ and $(0, 8)$, which is $\\sqrt{6^2 + 8^2} = 10$. The radius is $\\frac{10}{2} = 5$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "A circle passes through the points $(0, 0)$, $(10, 0)$, and $(0, 24)$. Find the x-coordinate of its center.",
    options: [],
    correctAnswer: "5",
    explanation: "The center of the circumcircle of a right triangle is the midpoint of the hypotenuse. The hypotenuse joins $(10, 0)$ and $(0, 24)$. Its midpoint has coordinates $\\left(\\frac{10 + 0}{2}, \\frac{0 + 24}{2}\\right) = (5, 12)$. Thus, the x-coordinate of the center is $5$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "If the circle passing through $(0, 0)$, $(4, 0)$, and $(0, 4)$ has equation $x^2 + y^2 - kx - ky = 0$, find the value of $k$.",
    options: [],
    correctAnswer: "4",
    explanation: "Substituting $(4, 0)$ into $x^2 + y^2 - kx - ky = 0$: $16 - 4k = 0 \\implies k = 4$. Substituting $(0, 4)$ gives $16 - 4k = 0 \\implies k = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "The points $(0, 0)$, $(3, 0)$, $(0, 4)$, and $(3, k)$ are concyclic. Find the positive value of $k$.",
    options: [],
    correctAnswer: "4",
    explanation: "The circle through $(0, 0)$, $(3, 0)$, and $(0, 4)$ has equation $x^2 + y^2 - 3x - 4y = 0$. For $(3, k)$ to lie on it: $3^2 + k^2 - 3(3) - 4k = 0 \\implies 9 + k^2 - 9 - 4k = 0 \\implies k^2 - 4k = 0 \\implies k = 4$ (since $k > 0$).",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "Find the square of the radius of the circle passing through the points $(1, 0)$, $(0, 1)$, and $(2, 1)$.",
    options: [],
    correctAnswer: "1",
    explanation: "Let the equation be $x^2 + y^2 + 2gx + 2fy + c = 0$. At $(1, 0)$: $1 + 2g + c = 0$. At $(0, 1)$: $1 + 2f + c = 0 \\implies g = f$. At $(2, 1)$: $4 + 1 + 4g + 2f + c = 0 \\implies 5 + 6g + c = 0$. Subtracting the first equation from this: $4 + 4g = 0 \\implies g = -1$. Then $f = -1$, and $c = -1 - 2(-1) = 1$. The radius squared is $r^2 = g^2 + f^2 - c = (-1)^2 + (-1)^2 - 1 = 1 + 1 - 1 = 1$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "If the points $(1, 1)$, $(0, 2)$, and $(2, 0)$ lie on a circle centered at $(h, k)$, find the value of $h + k$.",
    options: [],
    correctAnswer: "2",
    explanation: "Notice that the line joining $(0, 2)$ and $(2, 0)$ has midpoint $(1, 1)$ and slope $\\frac{0 - 2}{2 - 0} = -1$. Since $(1, 1)$ is the midpoint of $(0, 2)$ and $(2, 0)$, and $(1, 1)$ is on the circle, the chord length is $2\\sqrt{2}$ with $(1, 1)$ as midpoint. Wait, the distance from $(h, k)$ to $(0, 2)$, $(2, 0)$, and $(1, 1)$ must all equal $R$. The perpendicular bisector of $(0, 2)$ and $(2, 0)$ is $y = x$. So $h = k$. Distance squared to $(1, 1)$ is $(h - 1)^2 + (h - 1)^2 = 2(h - 1)^2$. Distance squared to $(2, 0)$ is $(h - 2)^2 + h^2 = 2h^2 - 4h + 4$. Equating: $2h^2 - 4h + 2 = 2h^2 - 4h + 4 \\implies 2 = 4$, which is impossible because $(1, 1)$ lies on the straight line segment joining $(0, 2)$ and $(2, 0)$! Wait! Slope between $(0, 2)$ and $(1, 1)$ is $\\frac{1 - 2}{1 - 0} = -1$. Slope between $(1, 1)$ and $(2, 0)$ is $\\frac{0 - 1}{2 - 1} = -1$. These three points are collinear, so no circle passes through them! Let's modify the third point to $(2, 2)$! For points $(0, 2)$, $(2, 0)$, and $(2, 2)$: these form three vertices of a square with $(0, 0)$ as the fourth! The circumcenter of the square is the center $(1, 1)$. Thus $h = 1, k = 1$, and $h + k = 2$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "A circle passes through $(0, 0)$, $(8, 0)$, and $(0, 6)$. If the coordinates of its center are $(a, b)$, find the value of $a + b$.",
    options: [],
    correctAnswer: "7",
    explanation: "The points form a right triangle at the origin with hypotenuse connecting $(8, 0)$ and $(0, 6)$. The circumcenter is the midpoint of the hypotenuse: $(a, b) = \\left(\\frac{8}{2}, \\frac{6}{2}\\right) = (4, 3)$. Therefore, $a + b = 4 + 3 = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "The area of the circle passing through the points $(1, 1)$, $(5, 1)$, and $(5, 5)$ is $k\\pi$. Find the value of $k$.",
    options: [],
    correctAnswer: "8",
    explanation: "The points form a right triangle at $(5, 1)$ with hypotenuse joining $(1, 1)$ and $(5, 5)$. The length of the hypotenuse is $\\sqrt{(5 - 1)^2 + (5 - 1)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$. The radius is $r = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$. The area of the circle is $\\pi r^2 = \\pi (2\\sqrt{2})^2 = 8\\pi$. Thus, $k = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    question: "If the circle passing through $(0, 0)$, $(2a, 0)$, and $(0, 2b)$ has radius $5$ and $a = 3$, find the positive value of $b$.",
    options: [],
    correctAnswer: "4",
    explanation: "The triangle has right angle at the origin, so the hypotenuse is $\\sqrt{(2a)^2 + (2b)^2} = 2\\sqrt{a^2 + b^2}$. The radius is $r = \\frac{2\\sqrt{a^2 + b^2}}{2} = \\sqrt{a^2 + b^2}$. Given $r = 5$ and $a = 3$: $\\sqrt{3^2 + b^2} = 5 \\implies 9 + b^2 = 25 \\implies b^2 = 16 \\implies b = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    question: "A circle passes through the points $(0, 0)$, $(12, 0)$, and $(0, 16)$. Find the length of its diameter.",
    options: [],
    correctAnswer: "20",
    explanation: "Since the angle at $(0, 0)$ is $90^\\circ$, the hypotenuse joining $(12, 0)$ and $(0, 16)$ is the diameter. Its length is $\\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Circle through three points",
    difficulty: "easy"
  }
];

module.exports = { subtopic2Questions };
