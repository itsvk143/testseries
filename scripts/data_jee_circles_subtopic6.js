/**
 * Authentic JEE Mains Questions for Circles
 * Subtopic 6: Standard equation
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic6Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "The equation of the circle with diameter having endpoints $(2, 3)$ and $(-4, 5)$ is:",
    options: [
      "$(x + 1)^2 + (y - 4)^2 = 10$",
      "$(x - 1)^2 + (y + 4)^2 = 10$",
      "$(x + 1)^2 + (y - 4)^2 = 40$",
      "$(x - 1)^2 + (y - 4)^2 = 10$"
    ],
    correctAnswer: 0,
    explanation: "Using the diameter form: $(x - 2)(x + 4) + (y - 3)(y - 5) = 0 \\implies x^2 + 2x - 8 + y^2 - 8y + 15 = 0 \\implies x^2 + y^2 + 2x - 8y + 7 = 0$. Completing squares: $(x + 1)^2 + (y - 4)^2 = 1 + 16 - 7 = 10$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "The equations of the tangents to the circle $x^2 + y^2 = 9$ having slope $m = 2$ are:",
    options: [
      "$y = 2x \\pm 3\\sqrt{5}$",
      "$y = 2x \\pm 9\\sqrt{5}$",
      "$y = 2x \\pm 3\\sqrt{3}$",
      "$y = 2x \\pm 5$"
    ],
    correctAnswer: 0,
    explanation: "The equation of tangents to $x^2 + y^2 = a^2$ with slope $m$ is $y = mx \\pm a\\sqrt{1 + m^2}$. Here $a = 3$ and $m = 2$. Thus, $y = 2x \\pm 3\\sqrt{1 + 2^2} = 2x \\pm 3\\sqrt{5}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "If two circles $x^2 + y^2 + 2g_1 x + 2f_1 y + c_1 = 0$ and $x^2 + y^2 + 2g_2 x + 2f_2 y + c_2 = 0$ intersect orthogonally, then:",
    options: [
      "$2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$",
      "$2g_1 g_2 + 2f_1 f_2 = c_1 c_2$",
      "$g_1 g_2 + f_1 f_2 = c_1 + c_2$",
      "$g_1 f_2 + g_2 f_1 = c_1 + c_2$"
    ],
    correctAnswer: 0,
    explanation: "Two circles cut orthogonally when the angle between their tangents at any intersection point is $90^\\circ$, which means the triangle formed by the centers $C_1, C_2$ and a point of intersection $P$ is right-angled at $P$. Hence $C_1 C_2^2 = r_1^2 + r_2^2$. Substituting coordinates gives $(g_1 - g_2)^2 + (f_1 - f_2)^2 = (g_1^2 + f_1^2 - c_1) + (g_2^2 + f_2^2 - c_2) \\implies -2g_1 g_2 - 2f_1 f_2 = -c_1 - c_2 \\implies 2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    question: "The equation of the circle touching the line $x = 0$ and $y = 0$ with radius $r = 4$ in the third quadrant is:",
    options: [
      "$(x + 4)^2 + (y + 4)^2 = 16$",
      "$(x - 4)^2 + (y - 4)^2 = 16$",
      "$(x + 4)^2 + (y - 4)^2 = 16$",
      "$(x - 4)^2 + (y + 4)^2 = 16$"
    ],
    correctAnswer: 0,
    explanation: "In the third quadrant, both coordinates are negative. A circle of radius $4$ touching both axes has center $(-4, -4)$. Its equation is $(x - (-4))^2 + (y - (-4))^2 = 4^2 \\implies (x + 4)^2 + (y + 4)^2 = 16$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "The shortest and largest distances from the point $(10, 7)$ to the circle $(x - 2)^2 + (y - 1)^2 = 25$ are respectively:",
    options: [
      "$5$ and $15$",
      "$3$ and $13$",
      "$4$ and $14$",
      "$2$ and $12$"
    ],
    correctAnswer: 0,
    explanation: "The center is $C(2, 1)$ and radius is $r = 5$. The distance from $P(10, 7)$ to $C(2, 1)$ is $d = \\sqrt{(10 - 2)^2 + (7 - 1)^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10$. The shortest distance is $d - r = 10 - 5 = 5$. The largest distance is $d + r = 10 + 5 = 15$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    question: "The radius of the circle $(x - 1)(x - 5) + (y - 2)(y - 6) = 0$ is:",
    options: [
      "$2\\sqrt{2}$",
      "$\\sqrt{2}$",
      "$4$",
      "$8$"
    ],
    correctAnswer: 0,
    explanation: "This is the diameter form with endpoints $(1, 2)$ and $(5, 6)$. The length of the diameter is $D = \\sqrt{(5 - 1)^2 + (6 - 2)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$. The radius is $r = \\frac{D}{2} = 2\\sqrt{2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "The circle $(x - 3)^2 + (y - 4)^2 = r^2$ touches the line $3x + 4y - 5 = 0$ externally. The value of $r$ is:",
    options: [
      "$4$",
      "$5$",
      "$3$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "The radius $r$ is equal to the perpendicular distance from the center $(3, 4)$ to the line $3x + 4y - 5 = 0$: $r = \\frac{|3(3) + 4(4) - 5|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 + 16 - 5|}{5} = \\frac{20}{5} = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "The locus of the center of a circle which touches the x-axis and the line $y = 2$ is:",
    options: [
      "$y = 1$",
      "$y = 0$",
      "$x = 1$",
      "$y = 2$"
    ],
    correctAnswer: 0,
    explanation: "The two lines $y = 0$ and $y = 2$ are parallel horizontal lines. A circle touching both lines must have its diameter equal to the distance between them: $2r = 2 - 0 = 2 \\implies r = 1$. Its center must lie midway between the two lines, along the line $y = \\frac{0 + 2}{2} = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "A circle of radius $5$ passes through the origin $(0, 0)$ and its center lies on the line $y = 2x$. If the center is in the first quadrant, its equation is:",
    options: [
      "$(x - \\sqrt{5})^2 + (y - 2\\sqrt{5})^2 = 25$",
      "$(x - 2\\sqrt{5})^2 + (y - \\sqrt{5})^2 = 25$",
      "$(x - 5)^2 + (y - 10)^2 = 25$",
      "$(x - 1)^2 + (y - 2)^2 = 25$"
    ],
    correctAnswer: 0,
    explanation: "Let the center be $(h, 2h)$ with $h > 0$. Since it passes through $(0, 0)$ with radius $5$: $h^2 + (2h)^2 = 5^2 \\implies 5h^2 = 25 \\implies h^2 = 5 \\implies h = \\sqrt{5}$. The center is $(\\sqrt{5}, 2\\sqrt{5})$ and radius $5$. The equation is $(x - \\sqrt{5})^2 + (y - 2\\sqrt{5})^2 = 25$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    question: "The equation of the circle passing through the point $(1, 1)$ and having the line $x + y = 2$ as a tangent at this point with radius $\\sqrt{2}$ is:",
    options: [
      "$x^2 + y^2 = 2$ or $(x - 2)^2 + (y - 2)^2 = 2$",
      "$(x - 1)^2 + (y - 1)^2 = 2$",
      "$(x + 1)^2 + (y + 1)^2 = 2$",
      "$x^2 + y^2 = 4$"
    ],
    correctAnswer: 0,
    explanation: "The normal to $x + y = 2$ at $(1, 1)$ has slope $1$ (perpendicular to slope $-1$). In parametric form, the center is $(1 \\pm r\\cos 45^\\circ, 1 \\pm r\\sin 45^\\circ) = (1 \\pm \\sqrt{2}\\frac{1}{\\sqrt{2}}, 1 \\pm \\sqrt{2}\\frac{1}{\\sqrt{2}}) = (1 \\pm 1, 1 \\pm 1)$. This gives two centers: $(0, 0)$ or $(2, 2)$. Thus, the circles are $x^2 + y^2 = 2$ or $(x - 2)^2 + (y - 2)^2 = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): The equation $(x - 2)(x - 4) + (y - 1)(y - 5) = 0$ represents a circle with center $(3, 3)$.\\nReason (R): For a circle given in diameter form with endpoints $(x_1, y_1)$ and $(x_2, y_2)$, the center is the midpoint $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Here $(x_1, y_1) = (2, 1)$ and $(x_2, y_2) = (4, 5)$. The center is the midpoint $\\left(\\frac{2 + 4}{2}, \\frac{1 + 5}{2}\\right) = (3, 3)$. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): Two circles $x^2 + y^2 = r_1^2$ and $x^2 + y^2 = r_2^2$ ($r_1 \\neq r_2$) never intersect.\\nReason (R): Concentric circles with unequal radii have no points in common.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Both circles are centered at the origin $(0, 0)$ with radii $r_1$ and $r_2$. For any intersection point $(x, y)$, $x^2 + y^2$ would simultaneously equal $r_1^2$ and $r_2^2$, which is impossible since $r_1 \\neq r_2$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The circles $x^2 + y^2 = 4$ and $x^2 + y^2 - 6x - 8y + 21 = 0$ touch each other externally.\\nReason (R): Two circles touch each other externally if and only if the distance between their centers equals the sum of their radii ($C_1 C_2 = r_1 + r_2$).",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For the first circle: $C_1 = (0, 0)$, $r_1 = 2$. For the second circle: $C_2 = (3, 4)$, $r_2 = \\sqrt{3^2 + 4^2 - 21} = \\sqrt{25 - 21} = 2$. Distance between centers is $C_1 C_2 = \\sqrt{3^2 + 4^2} = 5$. Sum of radii is $r_1 + r_2 = 2 + 2 = 4 \\neq 5$. Since $C_1 C_2 = 5 > 4$, the circles are completely separated and do not touch! Thus Assertion is false, while Reason is true. Hence option 3 (Assertion is false, Reason is true).",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The line $3x - 4y = 25$ touches the circle $x^2 + y^2 = 25$ at the point $(3, -4)$.\\nReason (R): The equation of the tangent to $x^2 + y^2 = r^2$ at the point $(x_1, y_1)$ on the circle is $x x_1 + y y_1 = r^2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The point $(3, -4)$ satisfies $3^2 + (-4)^2 = 9 + 16 = 25$, so it lies on the circle. By the tangent formula $T = 0$, the tangent at $(3, -4)$ is $x(3) + y(-4) = 25 \\implies 3x - 4y = 25$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The radical axis of two non-concentric circles is always perpendicular to the line joining their centers.\\nReason (R): The equation of the radical axis of $S_1 = 0$ and $S_2 = 0$ is $S_1 - S_2 = 0$, which represents a straight line.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 1,
    explanation: "Both statements are true. The radical axis equation is $S_1 - S_2 = 2(g_1 - g_2)x + 2(f_1 - f_2)y + (c_1 - c_2) = 0$. Its normal vector is $(g_1 - g_2, f_1 - f_2)$, which is parallel to the line segment joining the centers $(-g_1, -f_1)$ and $(-g_2, -f_2)$. Therefore, the radical axis is perpendicular to the line of centers. However, merely stating that $S_1 - S_2 = 0$ is a straight line does not fully explain why its slope is perpendicular to the line of centers. Thus, Reason is NOT the correct explanation.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The circle $(x - h)^2 + (y - k)^2 = r^2$ has area $\\pi r^2$ regardless of the values of $h$ and $k$.\\nReason (R): Translating the center of a circle does not alter its radius or its geometric area.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Area depends purely on the radius $r$, which is invariant under translation of the coordinate axes. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The length of the tangent from $(0, 0)$ to the circle $(x - 3)^2 + (y - 4)^2 = 9$ is $4$.\\nReason (R): The length of the tangent from a point $P$ to a circle of center $C$ and radius $r$ is $\\sqrt{PC^2 - r^2}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Here $C = (3, 4)$ and $r = 3$. The distance from $P(0, 0)$ to $C(3, 4)$ is $PC = \\sqrt{3^2 + 4^2} = 5$. The tangent length is $\\sqrt{PC^2 - r^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The normal to a circle at any point on it is the perpendicular bisector of the tangent at that point.\\nReason (R): The normal passes through the center of the circle and is perpendicular to the tangent at the point of contact.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is false but Reason is true",
      "Assertion is true but Reason is false"
    ],
    correctAnswer: 2,
    explanation: "A tangent is a straight line of infinite length, not a line segment; hence the concept of a 'perpendicular bisector' of a line is undefined. The normal is perpendicular to the tangent at the point of contact, but it is not a bisector. Thus Assertion is false, while Reason is true. Hence option 3 (Assertion is false, Reason is true).",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The circles $x^2 + y^2 - 2x = 0$ and $x^2 + y^2 - 2y = 0$ intersect at two distinct points.\\nReason (R): The distance between their centers $(1, 0)$ and $(0, 1)$ is $\\sqrt{2}$, which is strictly less than the sum of their radii $1 + 1 = 2$ and greater than the difference $|1 - 1| = 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Two circles intersect at two distinct points if and only if $|r_1 - r_2| < C_1 C_2 < r_1 + r_2$. Here $C_1 = (1, 0), r_1 = 1$ and $C_2 = (0, 1), r_2 = 1$. The distance is $C_1 C_2 = \\sqrt{2} \\approx 1.414$, satisfying $0 < \\sqrt{2} < 2$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The equation $(x - 1)^2 + (y - 2)^2 = 0$ represents a degenerate circle.\\nReason (R): A circle with radius $r = 0$ contains only its center point.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "When $r = 0$, the equation represents a point circle (degenerate circle) consisting solely of the point $(1, 2)$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },

  // --- 10 Numerical Questions ---
  {
    question: "Find the radius of the circle with diameter having endpoints $(1, 2)$ and $(7, 10)$.",
    options: [],
    correctAnswer: "5",
    explanation: "The diameter length is $\\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. The radius is $\\frac{10}{2} = 5$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "The distance between the parallel tangents $3x + 4y = 15$ and $3x + 4y = -15$ to the circle $x^2 + y^2 = 9$ is:",
    options: [],
    correctAnswer: "6",
    explanation: "The distance between two parallel lines $ax + by + c_1 = 0$ and $ax + by + c_2 = 0$ is $\\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}} = \\frac{|15 - (-15)|}{\\sqrt{3^2 + 4^2}} = \\frac{30}{5} = 6$. Notice that this equals the diameter $2r = 2(3) = 6$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Find the length of the tangent drawn from $(13, 0)$ to the circle $x^2 + y^2 = 25$.",
    options: [],
    correctAnswer: "12",
    explanation: "The length of the tangent is $\\sqrt{x_1^2 + y_1^2 - r^2} = \\sqrt{13^2 + 0^2 - 25} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "If the circles $x^2 + y^2 = 9$ and $(x - 8)^2 + (y - 6)^2 = r^2$ touch each other externally, find the value of $r$.",
    options: [],
    correctAnswer: "7",
    explanation: "For external tangency, $C_1 C_2 = r_1 + r_2$. Here $C_1 = (0, 0), r_1 = 3$, and $C_2 = (8, 6)$. The distance between centers is $C_1 C_2 = \\sqrt{8^2 + 6^2} = 10$. Thus, $3 + r = 10 \\implies r = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "If the circle $x^2 + y^2 = 25$ intersects the line $x = 3$ in two points $A$ and $B$, find the length of the chord $AB$.",
    options: [],
    correctAnswer: "8",
    explanation: "Substituting $x = 3$ into $x^2 + y^2 = 25$: $9 + y^2 = 25 \\implies y^2 = 16 \\implies y = \\pm 4$. The points are $(3, 4)$ and $(3, -4)$. The length of the chord is $4 - (-4) = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "A circle with center $(3, 4)$ touches the x-axis. Find the length of its diameter.",
    options: [],
    correctAnswer: "8",
    explanation: "A circle with center $(h, k)$ touching the x-axis has radius $r = |k|$. Here $k = 4$, so $r = 4$. The diameter is $2r = 2 \\times 4 = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "The line $y = mx + 5$ is tangent to the circle $x^2 + y^2 = 9$. Find the value of $9m^2$.",
    options: [],
    correctAnswer: "16",
    explanation: "Using the condition of tangency $c^2 = a^2(1 + m^2)$: here $c = 5$ and $a^2 = 9$. So $5^2 = 9(1 + m^2) \\implies 25 = 9 + 9m^2 \\implies 9m^2 = 16$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "Find the distance between the centers of the circles $(x - 5)^2 + (y - 12)^2 = 16$ and $x^2 + y^2 = 9$.",
    options: [],
    correctAnswer: "13",
    explanation: "The centers are $(5, 12)$ and $(0, 0)$. The distance between them is $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "If the area of a circle centered at $(1, 2)$ is $49\\pi$, find the radius of the circle.",
    options: [],
    correctAnswer: "7",
    explanation: "Area $= \\pi r^2 = 49\\pi \\implies r^2 = 49 \\implies r = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    question: "If the circles $x^2 + y^2 - 4x - 6y - 12 = 0$ and $x^2 + y^2 + 6x + 18y + c = 0$ cut each other orthogonally, find the value of $c$.",
    options: [],
    correctAnswer: "-54",
    explanation: "For the first circle: $g_1 = -2, f_1 = -3, c_1 = -12$. For the second circle: $g_2 = 3, f_2 = 9, c_2 = c$. The orthogonality condition is $2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$. Substituting: $2(-2)(3) + 2(-3)(9) = -12 + c \\implies -12 - 54 = -12 + c \\implies -66 = -12 + c \\implies c = -54$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Standard equation",
    difficulty: "medium"
  }
];

module.exports = { subtopic6Questions };
