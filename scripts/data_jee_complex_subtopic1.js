// scripts/data_jee_complex_subtopic1.js
// Subtopic 1: Argand plane (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic1Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "If $z = x + iy$ is a complex number such that $\\operatorname{Re}\\left(\\frac{z - 1}{2z + i}\\right) = 1$, then the point $(x, y)$ lies on:",
    options: [
      "a circle with center $\\left(-\\frac{1}{2}, -\\frac{3}{4}\\right)$",
      "a straight line with slope $2$",
      "a circle with center $\\left(\\frac{1}{2}, \\frac{3}{4}\\right)$",
      "an ellipse with eccentricity $\\frac{1}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Let $z = x + iy$. Then $\\frac{z - 1}{2z + i} = \\frac{(x - 1) + iy}{2x + i(2y + 1)} = \\frac{[(x - 1) + iy][2x - i(2y + 1)]}{(2x)^2 + (2y + 1)^2}$. The real part is $\\frac{2x(x - 1) + y(2y + 1)}{4x^2 + (2y + 1)^2} = 1 \\implies 2x^2 - 2x + 2y^2 + y = 4x^2 + 4y^2 + 4y + 1 \\implies 2x^2 + 2y^2 + 2x + 3y + 1 = 0 \\implies x^2 + y^2 + x + \\frac{3}{2}y + \\frac{1}{2} = 0$. This is the equation of a circle with center $\\left(-\\frac{1}{2}, -\\frac{3}{4}\\right)$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $z_1 = 3 + 2i$ and $z_2 = 2 - i$, then the reflection of the point representing $\\frac{z_1}{z_2}$ in the imaginary axis lies in:",
    options: [
      "Quadrant II",
      "Quadrant I",
      "Quadrant III",
      "Quadrant IV"
    ],
    correctAnswer: 0,
    explanation: "Compute $\\frac{z_1}{z_2} = \\frac{3 + 2i}{2 - i} = \\frac{(3 + 2i)(2 + i)}{4 + 1} = \\frac{6 + 3i + 4i - 2}{5} = \\frac{4 + 7i}{5} = \\frac{4}{5} + i\\frac{7}{5}$. This point is in Quadrant I with coordinates $(4/5, 7/5)$. The reflection of $(x, y)$ in the imaginary axis (the $y$-axis) is $(-x, y) = (-4/5, 7/5)$, which lies in Quadrant II.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $z$ is a purely imaginary number such that $\\operatorname{Im}(z) < 0$, then in the Argand plane, the point representing $z^2$ lies on the:",
    options: [
      "negative real axis",
      "positive real axis",
      "positive imaginary axis",
      "negative imaginary axis"
    ],
    correctAnswer: 0,
    explanation: "Let $z = -ik$ where $k > 0$. Then $z^2 = (-ik)^2 = i^2 k^2 = -k^2$. Since $k > 0$, $-k^2$ is a strictly negative real number, which lies on the negative real axis.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $A(z_1)$ and $B(z_2)$ are two points in the Argand plane such that $\\frac{z_1 + z_2}{z_1 - z_2}$ is purely imaginary, then the triangle $OAB$ (where $O$ is the origin) is:",
    options: [
      "isosceles with $OA = OB$",
      "right-angled at $O$",
      "equilateral",
      "right-angled at $A$"
    ],
    correctAnswer: 0,
    explanation: "Let $\\frac{z_1 + z_2}{z_1 - z_2} = ki$ where $k \\in \\mathbb{R}$. Then $\\frac{z_1 + z_2}{z_1 - z_2} + \\frac{\\bar{z}_1 + \\bar{z}_2}{\\bar{z}_1 - \\bar{z}_2} = 0 \\implies (z_1 + z_2)(\\bar{z}_1 - \\bar{z}_2) + (\\bar{z}_1 + \\bar{z}_2)(z_1 - z_2) = 0 \\implies 2|z_1|^2 - 2|z_2|^2 = 0 \\implies |z_1| = |z_2|$. Thus $OA = OB$, so $\\triangle OAB$ is an isosceles triangle with $OA = OB$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The midpoint of the line segment joining the complex numbers $z_1 = 4 - 3i$ and $z_2 = -2 + 7i$ on the Argand diagram corresponds to the complex number:",
    options: [
      "$1 + 2i$",
      "$2 + 4i$",
      "$-1 + 2i$",
      "$3 + 5i$"
    ],
    correctAnswer: 0,
    explanation: "The midpoint is given by $\\frac{z_1 + z_2}{2} = \\frac{(4 - 2) + (-3 + 7)i}{2} = \\frac{2 + 4i}{2} = 1 + 2i$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If the points representing the complex numbers $z, iz$, and $z + iz$ are plotted on the Argand plane, then the area of the triangle formed by them is:",
    options: [
      "$\\frac{1}{2}|z|^2$",
      "$|z|^2$",
      "$2|z|^2$",
      "$\\frac{\\sqrt{3}}{4}|z|^2$"
    ],
    correctAnswer: 0,
    explanation: "The vectors from $z$ are $iz - z$ and $(z + iz) - z = iz$. Notice that $0, z, iz$, and $z + iz$ form the vertices of a square with side length $|z|$ (since $|iz| = |z|$ and $iz$ is perpendicular to $z$). The triangle with vertices $z, iz$, and $z + iz$ has right angle at $z+iz$ (or is half of the square of side $|z|$), so its area is $\\frac{1}{2} |z| \\times |z| = \\frac{1}{2}|z|^2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $z = x + iy$ and $|z - 2| = |z + 2|$, then on the Argand plane, the point $z$ moves along the:",
    options: [
      "imaginary axis ($x = 0$)",
      "real axis ($y = 0$)",
      "line $x = 2$",
      "line $y = 2$"
    ],
    correctAnswer: 0,
    explanation: "The condition $|z - 2| = |z - (-2)|$ states that the distance from $z$ to $(2, 0)$ is equal to the distance from $z$ to $(-2, 0)$. The locus is the perpendicular bisector of the segment connecting $(2, 0)$ and $(-2, 0)$, which is the $y$-axis (imaginary axis, $x = 0$).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $z_1, z_2, z_3$ represent the vertices of an equilateral triangle inscribed in the circle $|z| = 2$, and $z_1 = 1 + i\\sqrt{3}$, then $z_1 + z_2 + z_3$ is equal to:",
    options: [
      "$0$",
      "$1 + i\\sqrt{3}$",
      "$2$",
      "$-1 - i\\sqrt{3}$"
    ],
    correctAnswer: 0,
    explanation: "In an equilateral triangle inscribed in a circle centered at the origin, the circumcenter and centroid coincide at the origin $(0, 0)$. Therefore, the centroid is $\\frac{z_1 + z_2 + z_3}{3} = 0 \\implies z_1 + z_2 + z_3 = 0$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The conjugate of a complex number $z = x + iy$ is represented in the Argand plane by the reflection of $z$ across the:",
    options: [
      "real axis ($x$-axis)",
      "imaginary axis ($y$-axis)",
      "origin $(0, 0)$",
      "line $y = x$"
    ],
    correctAnswer: 0,
    explanation: "Since $z = x + iy$ has conjugate $\\bar{z} = x - iy$, the $x$-coordinate is unchanged while the $y$-coordinate is negated. This corresponds geometrically to reflection across the real axis ($x$-axis).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $z$ lies in the third quadrant of the Argand plane, then $-\\bar{z}$ lies in the:",
    options: [
      "fourth quadrant",
      "first quadrant",
      "second quadrant",
      "third quadrant"
    ],
    correctAnswer: 0,
    explanation: "If $z$ lies in the third quadrant, $x < 0$ and $y < 0$. Then $\\bar{z} = x - iy$, so $-\\bar{z} = -x + iy$. Since $x < 0$, $-x > 0$ (positive real part). Since $y < 0$, $y < 0$ (negative imaginary part). With positive real part and negative imaginary part, $-\\bar{z}$ lies in the fourth quadrant.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For any two complex numbers $z_1$ and $z_2$, the distance between their representations on the Argand plane is $|z_1 - z_2|$.\nReason (R): If $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$, then $|z_1 - z_2| = \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$, which is the Euclidean distance formula in $\\mathbb{R}^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Assertion (A) is the standard geometric interpretation of the modulus of a difference, and Reason (R) gives the algebraic proof via the Cartesian distance formula. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $z + \\bar{z} = 0$, then the point $z$ lies on the imaginary axis of the Argand plane.\nReason (R): For $z = x + iy$, $z + \\bar{z} = 2x$. Thus $z + \\bar{z} = 0 \\implies x = 0$, which is the equation of the imaginary axis.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "A complex number is purely imaginary if and only if $z + \\bar{z} = 0$, which corresponds to $x = \\operatorname{Re}(z) = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The points representing $1, i, -1, -i$ on the Argand plane form the vertices of a square.\nReason (R): Each of these four numbers has modulus $1$, and consecutive numbers differ in argument by $\\frac{\\pi}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The four fourth roots of unity are equally spaced around the unit circle $|z| = 1$ by angles of $90^\\circ = \\pi/2$, thereby forming a square. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): Multiplication of any complex number $z$ by $i$ rotates its position vector by $90^\\circ$ counterclockwise about the origin in the Argand plane.\nReason (R): $i = e^{i\\pi/2}$, so $iz = z e^{i\\pi/2}$, which increases the argument of $z$ by $\\frac{\\pi}{2}$ while preserving its modulus $|iz| = |z|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Multiplication by $i = \\cos(\\pi/2) + i\\sin(\\pi/2)$ is a pure rotation of $\\pi/2$ radians without scaling. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): Three distinct points $z_1, z_2, z_3$ in the Argand plane are collinear if and only if $\\frac{z_3 - z_1}{z_2 - z_1}$ is purely imaginary.\nReason (R): The argument of $\\frac{z_3 - z_1}{z_2 - z_1}$ represents the angle between the vectors joining $z_1$ to $z_3$ and $z_1$ to $z_2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is FALSE! Three points are collinear if and only if the ratio $\\frac{z_3 - z_1}{z_2 - z_1}$ is purely REAL (so the angle is $0$ or $\\pi$), NOT purely imaginary! If it is purely imaginary, the vectors are perpendicular! Reason (R) is TRUE. Therefore, (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "medium"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The point representing $-z$ is the reflection of $z$ across the origin $(0, 0)$ in the Argand plane.\nReason (R): If $z = x + iy$, then $-z = -x - iy$, which sends $(x, y) \\to (-x, -y)$, a central inversion through the origin.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Negation of both real and imaginary components represents reflection through the origin. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $z_1, z_2, z_3, z_4$ represent the vertices of a parallelogram taken in order in the Argand plane, then $z_1 + z_3 = z_2 + z_4$.\nReason (R): The diagonals of a parallelogram bisect each other, so their midpoints must coincide: $\\frac{z_1 + z_3}{2} = \\frac{z_2 + z_4}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The diagonals of any parallelogram have a common midpoint, yielding $\\frac{z_1 + z_3}{2} = \\frac{z_2 + z_4}{2} \\implies z_1 + z_3 = z_2 + z_4$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The locus of $z$ satisfying $|z - 1|^2 + |z + 1|^2 = 4$ is a circle centered at the origin with radius $1$.\nReason (R): For $z = x + iy$, $(x - 1)^2 + y^2 + (x + 1)^2 + y^2 = 4 \\implies 2x^2 + 2 + 2y^2 = 4 \\implies x^2 + y^2 = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Expanding the modulus squares produces $2(x^2 + y^2) + 2 = 4 \\implies x^2 + y^2 = 1$, which is the unit circle. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The area of the triangle whose vertices are $z, iz$, and $z + iz$ in the Argand plane is zero.\nReason (R): The vectors $z$ and $iz$ are collinear in the complex plane.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 2,
    explanation: "Assertion (A) is FALSE (the area is $\\frac{1}{2}|z|^2 \\neq 0$). Reason (R) is also FALSE because $z$ and $iz$ are perpendicular, not collinear! Thus (A) is false and (R) is false... wait, in standard 4 options, we have: (A) is false but (R) is true, or (A) is true but (R) is false. Let's make Reason (R) true: 'Reason (R): The vector $iz$ is perpendicular to $z$.' Then (A) is false but (R) is true! That matches option 3!",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $z$ lies in the first quadrant of the Argand plane, then $\\frac{1}{z}$ lies in the fourth quadrant.\nReason (R): For $z = r e^{i\\theta}$ with $\\theta \\in (0, \\pi/2)$, $\\frac{1}{z} = \\frac{1}{r} e^{-i\\theta}$, which has argument $-\\theta \\in (-\\pi/2, 0)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Inversion negates the argument: $\\operatorname{Arg}(1/z) = -\\operatorname{Arg}(z)$. Since $\\theta \\in (0, \\pi/2)$, $-\\theta \\in (-\\pi/2, 0)$, which lies in the fourth quadrant. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Argand plane",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "If $z = 3 + 4i$, then the distance between the points representing $z$ and $\\bar{z}$ in the Argand plane is:",
    options: [],
    correctAnswer: "8",
    explanation: "$\\bar{z} = 3 - 4i$. The distance is $|z - \\bar{z}| = |(3 + 4i) - (3 - 4i)| = |8i| = 8$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If the area of the triangle formed by the vertices $0, z$, and $iz$ on the Argand plane is $8$ sq units, then the value of $|z|$ is:",
    options: [],
    correctAnswer: "4",
    explanation: "Since $0, z$, and $iz$ form a right-angled isosceles triangle with legs of length $|z|$, the area is $\\frac{1}{2}|z|^2 = 8 \\implies |z|^2 = 16 \\implies |z| = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If the points $z_1 = 1 + 2i, z_2 = 2 + 3i$, and $z_3 = 4 + ki$ are collinear on the Argand plane, then the value of $k$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "Slope of the line joining $(1, 2)$ and $(2, 3)$ is $m = \\frac{3 - 2}{2 - 1} = 1$. For $(4, k)$ to be collinear: $\\frac{k - 3}{4 - 2} = 1 \\implies \\frac{k - 3}{2} = 1 \\implies k - 3 = 2 \\implies k = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z_1 = 2 + 3i$ and $z_2 = 8 + 11i$, then the coordinates of the point dividing the segment joining $z_1$ and $z_2$ internally in the ratio $1 : 2$ has real part equal to:",
    options: [],
    correctAnswer: "4",
    explanation: "The section formula gives $z = \\frac{1(z_2) + 2(z_1)}{1 + 2} = \\frac{(8 + 11i) + 2(2 + 3i)}{3} = \\frac{(8 + 4) + (11 + 6)i}{3} = \\frac{12 + 17i}{3} = 4 + \\frac{17}{3}i$. The real part is $4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z$ satisfies $|z - 3| = |z - 7|$, then the real part of $z$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "The locus of points equidistant from $(3, 0)$ and $(7, 0)$ is the vertical line passing through their midpoint: $x = \\frac{3 + 7}{2} = 5$. Thus $\\operatorname{Re}(z) = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If the centroid of the triangle with vertices $z_1 = 2 + 3i, z_2 = 4 - i$, and $z_3 = k + 7i$ is $3 + 3i$, then the value of $k$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "Centroid is $\\frac{z_1 + z_2 + z_3}{3} = \\frac{(2 + 4 + k) + (3 - 1 + 7)i}{3} = \\frac{6 + k + 9i}{3} = \\frac{6 + k}{3} + 3i$. Equating real parts: $\\frac{6 + k}{3} = 3 \\implies 6 + k = 9 \\implies k = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The perimeter of the polygon formed by the roots of $z^4 - 16 = 0$ on the Argand plane multiplied by $\\frac{1}{4\\sqrt{2}}$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "The roots of $z^4 = 16$ are $2, 2i, -2, -2i$, which lie on the circle $|z| = 2$. The distance between consecutive vertices is $|2 - 2i| = \\sqrt{2^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$. The perimeter of the square is $4 \\times 2\\sqrt{2} = 8\\sqrt{2}$. Multiplying by $\\frac{1}{4\\sqrt{2}}$ gives $\\frac{8\\sqrt{2}}{4\\sqrt{2}} = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z = 1 + i$, then the distance of the point $z^4$ from the origin in the Argand plane is:",
    options: [],
    correctAnswer: "4",
    explanation: "$|z| = |1 + i| = \\sqrt{2}$. Therefore $|z^4| = |z|^4 = (\\sqrt{2})^4 = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z_1 = 5 + 12i$, then the length of the vector joining the origin to the reflection of $z_1$ across the origin is:",
    options: [],
    correctAnswer: "13",
    explanation: "The reflection of $z_1$ across the origin is $-z_1$. Its distance from the origin is $|-z_1| = |z_1| = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $z_1, z_2, z_3, z_4$ are the vertices of a rectangle taken in order on the Argand plane with $z_1 = 1 + i, z_2 = 5 + i, z_3 = 5 + 4i$, then the real part of $z_4$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "In a rectangle, $z_1 + z_3 = z_2 + z_4 \\implies z_4 = z_1 + z_3 - z_2 = (1 + i) + (5 + 4i) - (5 + i) = 1 + 4i$. The real part of $z_4$ is $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Argand plane",
    difficulty: "easy"
  }
];

// Clean up question 9 of AR
subtopic1Questions[18].question = "Given below are two statements:\nAssertion (A): The area of the triangle whose vertices are $0, z$, and $iz$ in the Argand plane is zero.\nReason (R): The vector $iz$ is perpendicular to $z$ for any non-zero complex number $z$.";
subtopic1Questions[18].correctAnswer = 3;
subtopic1Questions[18].explanation = "Assertion (A) is FALSE because the area of the triangle formed by $0, z, iz$ is $\\frac{1}{2}|z|^2 > 0$ for $z \\neq 0$. Reason (R) is TRUE because multiplying by $i$ rotates a vector by $90^\\circ$. Hence (A) is false but (R) is true.";

module.exports = { subtopic1Questions };
