// scripts/data_jee_complex_subtopic3.js
// Subtopic 3: Geometry in complex plane (circle, line equations) (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic3Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "The equation $z\\bar{z} + (2 - 3i)z + (2 + 3i)\\bar{z} + 4 = 0$ represents a circle in the complex plane. Its center and radius are:",
    options: [
      "Center: $-2 - 3i$, Radius: $3$",
      "Center: $2 - 3i$, Radius: $3$",
      "Center: $-2 + 3i$, Radius: $9$",
      "Center: $2 + 3i$, Radius: $\\sqrt{13}$"
    ],
    correctAnswer: 0,
    explanation: "Comparing with $z\\bar{z} + \\bar{a}z + a\\bar{z} + b = 0$, we have $a = 2 + 3i$ and $b = 4$. The center is $-a = -(2 + 3i) = -2 - 3i$. The radius is $\\sqrt{|a|^2 - b} = \\sqrt{(2^2 + 3^2) - 4} = \\sqrt{13 - 4} = \\sqrt{9} = 3$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The locus of points $z$ satisfying $\\operatorname{Re}\\left(\\frac{z + 1}{z - i}\\right) = 0$ is:",
    options: [
      "a circle passing through $(-1, 0)$ and $(0, 1)$ minus $(0, 1)$",
      "a straight line passing through origin",
      "an ellipse with foci at $(-1, 0)$ and $(0, 1)$",
      "a parabola opening upwards"
    ],
    correctAnswer: 0,
    explanation: "Let $z = x + iy$. Then $\\frac{z + 1}{z - i} = \\frac{(x + 1) + iy}{x + i(y - 1)} = \\frac{[(x + 1) + iy][x - i(y - 1)]}{x^2 + (y - 1)^2}$. Its real part is $\\frac{x(x + 1) + y(y - 1)}{x^2 + (y - 1)^2} = 0 \\implies x^2 + x + y^2 - y = 0 \\implies x^2 + y^2 + x - y = 0$. This is the equation of a circle passing through $(-1, 0)$ and $(0, 1)$ with diameter connecting them, excluding $(0, 1)$ where the denominator vanishes.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $\\left|\\frac{z - 2}{z - 3}\\right| = 2$, then the locus of $z$ in the complex plane represents:",
    options: [
      "a circle with center $\\left(\\frac{10}{3}, 0\\right)$",
      "a straight line with slope $2$",
      "a circle with center $(2, 0)$",
      "a parabola with vertex $(3, 0)$"
    ],
    correctAnswer: 0,
    explanation: "Squaring both sides: $|z - 2|^2 = 4|z - 3|^2 \\implies (x - 2)^2 + y^2 = 4((x - 3)^2 + y^2) \\implies x^2 - 4x + 4 + y^2 = 4(x^2 - 6x + 9 + y^2) \\implies 3x^2 + 3y^2 - 20x + 32 = 0 \\implies x^2 + y^2 - \\frac{20}{3}x + \\frac{32}{3} = 0$. This is an Apollonius circle with center $\\left(\\frac{10}{3}, 0\\right)$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The equation $\\bar{a}z + a\\bar{z} + b = 0$, where $a \\in \\mathbb{C}\\setminus\\{0\\}$ and $b \\in \\mathbb{R}$, represents a line in the complex plane. This line is parallel to the real axis if:",
    options: [
      "$a$ is purely imaginary",
      "$a$ is purely real",
      "$|a| = 1$",
      "$b = 0$"
    ],
    correctAnswer: 0,
    explanation: "Let $a = a_1 + i a_2$ and $z = x + iy$. Then $\\bar{a}z + a\\bar{z} = 2\\operatorname{Re}(a\\bar{z}) = 2(a_1 x + a_2 y)$. The line equation is $2a_1 x + 2a_2 y + b = 0$. For this line to be parallel to the real axis ($x$-axis), the coefficient of $x$ must be zero, so $a_1 = 0$, meaning $a = i a_2$ is purely imaginary.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $\\operatorname{Arg}\\left(\\frac{z - 1}{z + 1}\\right) = \\frac{\\pi}{4}$, then the locus of $z$ represents:",
    options: [
      "a major circular arc",
      "a complete circle",
      "a straight line segment",
      "a parabola"
    ],
    correctAnswer: 0,
    explanation: "The condition $\\operatorname{Arg}\\left(\\frac{z - 1}{z + 1}\\right) = \\frac{\\pi}{4}$ means the angle subtended by the segment joining $(-1, 0)$ and $(1, 0)$ at $z$ is constant and equal to $\\frac{\\pi}{4}$. By the inscribed angle theorem, this represents a circular arc (specifically the major arc of the circle passing through $(\\pm 1, 0)$).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The region represented by $|z - 1| \\le 2$ and $\\operatorname{Arg}(z) = \\frac{\\pi}{4}$ in the complex plane is:",
    options: [
      "a line segment",
      "a ray",
      "a circular sector",
      "an empty set"
    ],
    correctAnswer: 0,
    explanation: "$|z - 1| \\le 2$ is a closed disk of radius $2$ centered at $(1, 0)$. $\\operatorname{Arg}(z) = \\frac{\\pi}{4}$ is the ray $y = x$ with $x > 0$. The intersection of a closed disk and a ray is a finite line segment.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The radius of the circle $z\\bar{z} + (1 + i)z + (1 - i)\\bar{z} - 7 = 0$ is:",
    options: [
      "$3$",
      "$\\sqrt{7}$",
      "$\\sqrt{5}$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "Here $a = 1 - i$ and $b = -7$. The radius is $R = \\sqrt{|a|^2 - b} = \\sqrt{(1^2 + (-1)^2) - (-7)} = \\sqrt{2 + 7} = \\sqrt{9} = 3$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $|z - i| = |z - 1|$, then the line represented by this equation passes through the origin and has slope equal to:",
    options: [
      "$1$",
      "$-1$",
      "$0$",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "The equation $|z - i| = |z - 1|$ is the perpendicular bisector of the segment joining $(1, 0)$ and $(0, 1)$. The midpoint is $(1/2, 1/2)$, and the segment has slope $\\frac{1 - 0}{0 - 1} = -1$. The perpendicular bisector has slope $m = -\\frac{1}{-1} = 1$ and passes through $(1/2, 1/2)$, which gives the line $y = x$. This line passes through $(0, 0)$ and has slope $1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $|z| = 1$ and $\\omega = \\frac{z - 1}{z + 1}$ (where $z \\neq -1$), then the real part of $\\omega$ is:",
    options: [
      "$0$",
      "$1$",
      "$-1$",
      "$\\frac{1}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Compute $\\operatorname{Re}(\\omega) = \\frac{\\omega + \\bar{\\omega}}{2} = \\frac{1}{2}\\left(\\frac{z - 1}{z + 1} + \\frac{\\bar{z} - 1}{\\bar{z} + 1}\\right) = \\frac{(z - 1)(\\bar{z} + 1) + (\\bar{z} - 1)(z + 1)}{2|z + 1|^2} = \\frac{(z\\bar{z} + z - \\bar{z} - 1) + (z\\bar{z} - z + \\bar{z} - 1)}{2|z + 1|^2} = \\frac{2|z|^2 - 2}{2|z + 1|^2}$. Since $|z| = 1$, $2(1) - 2 = 0$. Hence $\\operatorname{Re}(\\omega) = 0$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The area of the circle given by $|z - 3 - 4i| = 5$ is:",
    options: [
      "$25\\pi$",
      "$5\\pi$",
      "$10\\pi$",
      "$50\\pi$"
    ],
    correctAnswer: 0,
    explanation: "The equation $|z - (3 + 4i)| = 5$ represents a circle with radius $r = 5$. The area of the circle is $\\pi r^2 = \\pi (5)^2 = 25\\pi$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The equation $|z - z_0| = r$ ($r > 0$) represents a circle with center $z_0$ and radius $r$ in the complex plane.\nReason (R): The modulus $|z - z_0|$ represents the Euclidean distance between the variable point $z$ and the fixed point $z_0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "A circle is defined as the locus of points equidistant from a fixed center. Reason (R) states the geometric definition of modulus, explaining Assertion (A). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The equation $|z - z_1| = |z - z_2|$ represents the perpendicular bisector of the line segment joining $z_1$ and $z_2$.\nReason (R): The locus of all points in a plane equidistant from two fixed points is the perpendicular bisector of the segment connecting those points.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Equidistance from two points $z_1$ and $z_2$ directly defines their perpendicular bisector. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $\\left|\\frac{z - z_1}{z - z_2}\\right| = k$, where $k > 0$ and $k \\neq 1$, the locus of $z$ is a circle.\nReason (R): When $k = 1$, the locus is a straight line, but for any $k \\neq 1$, it is an Apollonius circle.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The locus of points whose distances from two fixed points are in a constant non-unity ratio $k$ is an Apollonius circle. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The general equation of a circle in the complex plane is $z\\bar{z} + \\bar{a}z + a\\bar{z} + b = 0$, where $a \\in \\mathbb{C}$ and $b \\in \\mathbb{R}$ with $|a|^2 > b$.\nReason (R): Expanding $|z - z_0|^2 = r^2$ gives $(z - z_0)(\\bar{z} - \\bar{z}_0) = r^2 \\implies z\\bar{z} - \\bar{z}_0 z - z_0 \\bar{z} + |z_0|^2 - r^2 = 0$, which matches the general form with $a = -z_0$ and $b = |z_0|^2 - r^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Expanding the standard circle equation establishes the coefficients and the condition $r^2 = |a|^2 - b > 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\operatorname{Arg}\\left(\\frac{z - 1}{z + 1}\\right) = \\frac{\\pi}{2}$ represents a semicircle of diameter joining $-1$ and $1$.\nReason (R): An angle inscribed in a semicircle is a right angle ($90^\\circ = \\pi/2$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Thales' theorem asserts that the locus of points subtending a right angle to a fixed diameter is a circle. Since the signed argument is strictly $+\\pi/2$, it traces the upper semicircle. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The equation $\\bar{a}z + a\\bar{z} = 0$ ($a \\neq 0$) represents a straight line passing through the origin.\nReason (R): Substituting $z = 0$ satisfies the equation identically: $\\bar{a}(0) + a(0) = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Any homogeneous linear equation in $z$ and $\\bar{z}$ passes through $(0, 0)$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The circle $z\\bar{z} + 3z + 3\\bar{z} + 10 = 0$ has radius $1$.\nReason (R): The radius of $z\\bar{z} + \\bar{a}z + a\\bar{z} + b = 0$ is given by $\\sqrt{|a|^2 - b}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "For the given equation, $a = 3, b = 10$. The radius expression gives $\\sqrt{|a|^2 - b} = \\sqrt{3^2 - 10} = \\sqrt{9 - 10} = \\sqrt{-1}$, which is imaginary! Thus there is NO real circle (empty set). Assertion (A) is FALSE, while Reason (R) is a standard TRUE formula. Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): Two circles $|z - z_1| = r_1$ and $|z - z_2| = r_2$ touch externally if and only if $|z_1 - z_2| = r_1 + r_2$.\nReason (R): For external tangency, the distance between the centers must equal the sum of the radii.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "External tangency of circles requires the distance between centers $|z_1 - z_2|$ to equal $r_1 + r_2$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The locus of $z$ such that $|z - 1| + |z + 1| = 4$ is an ellipse with foci at $(-1, 0)$ and $(1, 0)$.\nReason (R): An ellipse is the locus of a point whose sum of distances from two fixed foci is a constant strictly greater than the distance between the foci.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The focal distance is $|1 - (-1)| = 2$. Since the constant sum $4 > 2$, the locus is an ellipse. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $|z - 3| - |z + 3| = 4$, the locus of $z$ is a hyperbola.\nReason (R): The locus of points whose difference of distances from two fixed points is constant and less than the distance between the points is a hyperbola.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The focal distance is $|3 - (-3)| = 6$. The constant difference is $4 < 6$, which defines a branch of a hyperbola. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "The radius of the circle in the complex plane represented by $|z - 3 - 4i| = 7$ is:",
    options: [],
    correctAnswer: "7",
    explanation: "In standard form $|z - z_0| = r$, the radius is directly $7$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The distance from the origin to the center of the circle $z\\bar{z} - (3 + 4i)z - (3 - 4i)\\bar{z} + 9 = 0$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "Here $a = -(3 - 4i)$, so the center is $-a = 3 - 4i$. The distance from origin is $|3 - 4i| = \\sqrt{3^2 + (-4)^2} = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The radius of the circle $z\\bar{z} - (2 + 3i)z - (2 - 3i)\\bar{z} - 12 = 0$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "Here $a = -(2 - 3i) \\implies |a|^2 = 2^2 + (-3)^2 = 13$, and $b = -12$. The radius is $R = \\sqrt{|a|^2 - b} = \\sqrt{13 - (-12)} = \\sqrt{25} = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The minimum distance from the origin to any point on the circle $|z - 5 - 12i| = 3$ is:",
    options: [],
    correctAnswer: "10",
    explanation: "Center is $(5, 12)$ with distance to origin $d = \\sqrt{5^2 + 12^2} = 13$. Radius is $r = 3$. The minimum distance from origin is $d - r = 13 - 3 = 10$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The maximum distance from the origin to any point on the circle $|z - 5 - 12i| = 3$ is:",
    options: [],
    correctAnswer: "16",
    explanation: "Center is at distance $13$ from the origin, radius is $3$. Maximum distance is $d + r = 13 + 3 = 16$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If the line represented by $\\bar{a}z + a\\bar{z} + 12 = 0$ with $a = 2 + 3i$ has $x$-intercept equal to $k$, then the value of $k$ is:",
    options: [],
    correctAnswer: "-3",
    explanation: "With $a = 2 + 3i$, $\\bar{a}z + a\\bar{z} = 2\\operatorname{Re}(a\\bar{z}) = 2(2x + 3y) = 4x + 6y$. The line is $4x + 6y + 12 = 0$. For the $x$-intercept, set $y = 0$: $4x + 12 = 0 \\implies x = -3$. Thus $k = -3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If two circles $|z - 1| = 2$ and $|z - 4 - 4i| = r$ touch externally, then the value of the radius $r$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "Centers are $z_1 = 1 + 0i$ and $z_2 = 4 + 4i$. The distance between centers is $|z_2 - z_1| = |(4 - 1) + 4i| = |3 + 4i| = 5$. For external tangency, $r_1 + r_2 = 5 \\implies 2 + r = 5 \\implies r = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The square of the radius of the circle $|z - 2|^2 + |z - 4|^2 = 10$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "Let $z = x + iy$. Then $(x - 2)^2 + y^2 + (x - 4)^2 + y^2 = 10 \\implies x^2 - 4x + 4 + y^2 + x^2 - 8x + 16 + y^2 = 10 \\implies 2x^2 + 2y^2 - 12x + 20 = 10 \\implies 2x^2 + 2y^2 - 12x + 10 = 0 \\implies x^2 + y^2 - 6x + 5 = 0 \\implies (x - 3)^2 + y^2 = 9 - 5 = 4$! Wait, radius is $2$, so square of the radius is $4$! Let's check: $r^2 = 4$. Correct answer: $4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "medium"
  },
  {
    type: "numerical",
    question: "If the circles $|z - 3| = 4$ and $|z - k| = 2$ with $k > 3$ touch internally, then the value of $k$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "Distance between centers is $|k - 3| = k - 3$ (since $k > 3$). For internal tangency, the distance between centers equals $|r_1 - r_2| = |4 - 2| = 2$. Thus $k - 3 = 2 \\implies k = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The perimeter of the circle $|z - 1 - i| = \\frac{7}{\\pi}$ is:",
    options: [],
    correctAnswer: "14",
    explanation: "The radius is $r = \\frac{7}{\\pi}$. The perimeter (circumference) is $2\\pi r = 2\\pi \\left(\\frac{7}{\\pi}\\right) = 14$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Geometry in complex plane (circle, line equations)",
    difficulty: "easy"
  }
];

// Clean up question 8 of numerical: ensure explanation and answer match
subtopic3Questions[27].correctAnswer = "4";
subtopic3Questions[27].explanation = "Expanding gives $2x^2 + 2y^2 - 12x + 20 = 10 \\implies x^2 + y^2 - 6x + 5 = 0 \\implies (x - 3)^2 + y^2 = 4$. The square of the radius is $4$.";

module.exports = { subtopic3Questions };
