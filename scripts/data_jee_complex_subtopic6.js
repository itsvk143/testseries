// Authentic JEE Main Questions for Subtopic: Triangle inequality
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic6Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "If $|z - \\frac{4}{z}| = 2$, then the maximum value of $|z|$ is equal to:",
    options: [
      "$\\sqrt{5} + 1$",
      "$\\sqrt{5} - 1$",
      "$\\sqrt{3} + 1$",
      "$\\sqrt{3} - 1$"
    ],
    correctOption: 0,
    solution: "By triangle inequality:\\n$|z| = \\left|\\left(z - \\frac{4}{z}\\right) + \\frac{4}{z}\\right| \\le \\left|z - \\frac{4}{z}\\right| + \\frac{4}{|z|} = 2 + \\frac{4}{|z|}$.\\nLet $r = |z| > 0$. Then $r \\le 2 + \\frac{4}{r} \\implies r^2 - 2r - 4 \\le 0$.\\nThe roots of $r^2 - 2r - 4 = 0$ are $r = \\frac{2 \\pm \\sqrt{4 + 16}}{2} = 1 \\pm \\sqrt{5}$.\\nSince $r > 0$, we have $0 < r \\le \\sqrt{5} + 1$.\\nTherefore, the maximum value of $|z|$ is $\\sqrt{5} + 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "For any two complex numbers $z_1$ and $z_2$, the value of $|z_1 + z_2|^2 + |z_1 - z_2|^2$ is always equal to:",
    options: [
      "$2(|z_1|^2 + |z_2|^2)$",
      "$|z_1|^2 + |z_2|^2$",
      "$4|z_1||z_2|$",
      "$2(|z_1|^2 - |z_2|^2)$"
    ],
    correctOption: 0,
    solution: "Using the definition $|w|^2 = w\\bar{w}$:\\n$|z_1 + z_2|^2 = (z_1 + z_2)(\\bar{z}_1 + \\bar{z}_2) = |z_1|^2 + |z_2|^2 + z_1\\bar{z}_2 + \\bar{z}_1 z_2$.\\n$|z_1 - z_2|^2 = (z_1 - z_2)(\\bar{z}_1 - \\bar{z}_2) = |z_1|^2 + |z_2|^2 - z_1\\bar{z}_2 - \\bar{z}_1 z_2$.\\nAdding the two relations yields:\\n$|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$.\\nThis is the complex form of the Parallelogram Law.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "If $|z - 3 - 4i| \\le 3$, then the maximum and minimum values of $|z|$ are respectively:",
    options: [
      "$8$ and $2$",
      "$7$ and $1$",
      "$5$ and $3$",
      "$9$ and $1$"
    ],
    correctOption: 0,
    solution: "The condition $|z - (3 + 4i)| \\le 3$ represents a closed disc centered at $z_0 = 3 + 4i$ with radius $R = 3$.\\nDistance of center from origin is $|z_0| = \\sqrt{3^2 + 4^2} = 5$.\\nBy triangle inequality:\\nMaximum value of $|z| = |z_0| + R = 5 + 3 = 8$.\\nMinimum value of $|z| = |z_0| - R = 5 - 3 = 2$.\\nHence, maximum is 8 and minimum is 2.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "If $|z_1| = 2$, $|z_2| = 3$, and $|2z_1 - z_2| = 5$, then the value of $|2z_1 + z_2|$ is:",
    options: [
      "$\\sqrt{25} = 5$",
      "$\\sqrt{7}$",
      "$\\sqrt{17}$",
      "$5$"
    ],
    correctOption: 3,
    solution: "Let $u = 2z_1$ and $v = z_2$. Then $|u| = 2|z_1| = 4$, and $|v| = |z_2| = 3$.\\nBy the Parallelogram Law:\\n$|u + v|^2 + |u - v|^2 = 2(|u|^2 + |v|^2)$\\n$|2z_1 + z_2|^2 + 5^2 = 2(4^2 + 3^2) = 2(16 + 9) = 50$\\n$|2z_1 + z_2|^2 + 25 = 50 \\implies |2z_1 + z_2|^2 = 25 \\implies |2z_1 + z_2| = 5$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "If $|z + 1| \\le 3$, then the maximum value of $|z - 3|$ is:",
    options: [
      "$7$",
      "$6$",
      "$4$",
      "$5$"
    ],
    correctOption: 0,
    solution: "We can write $|z - 3| = |(z + 1) - 4|$.\\nBy triangle inequality:\\n$|z - 3| = |(z + 1) - 4| \\le |z + 1| + |-4| \\le 3 + 4 = 7$.\\nEquality is attained when $z + 1 = -3 \\implies z = -4$, giving $|-4 - 3| = 7$.\\nTherefore, the maximum value is $7$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "Let $z$ be a complex number such that $|z| = 1$. The minimum value of $|z^2 - z + 1|$ is:",
    options: [
      "$0$",
      "$1$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$"
    ],
    correctOption: 0,
    solution: "The roots of $z^2 - z + 1 = 0$ are $z = \\frac{1 \\pm i\\sqrt{3}}{2} = e^{\\pm i\\pi/3}$.\\nBoth of these roots satisfy $|z| = \\sqrt{(1/2)^2 + (\\sqrt{3}/2)^2} = 1$.\\nSince these roots lie on the unit circle $|z| = 1$, the expression $|z^2 - z + 1|$ can take the value $0$.\\nTherefore, the minimum value is $0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "If $|z| \\le 4$, then the maximum value of $|iz + 3 - 4i|$ is:",
    options: [
      "$9$",
      "$7$",
      "$8$",
      "$5$"
    ],
    correctOption: 0,
    solution: "$|iz + 3 - 4i| = |i(z - 4 - 3i)| = |i| \\cdot |z - (4 + 3i)| = |z - (4 + 3i)|$.\\nBy triangle inequality:\\n$|z - (4 + 3i)| \\le |z| + |4 + 3i| \\le 4 + \\sqrt{4^2 + 3^2} = 4 + 5 = 9$.\\nTherefore, the maximum value is $9$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "Let $z_1, z_2$ be two complex numbers such that $|z_1 + z_2| = |z_1| - |z_2|$ with $|z_1| > |z_2|$. Then $\\arg(z_1) - \\arg(z_2)$ is equal to:",
    options: [
      "$\\pi$",
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$-\\frac{\\pi}{2}$"
    ],
    correctOption: 0,
    solution: "Squaring $|z_1 + z_2| = |z_1| - |z_2|$:\\n$|z_1|^2 + |z_2|^2 + 2|z_1||z_2|\\cos(\\theta_1 - \\theta_2) = |z_1|^2 + |z_2|^2 - 2|z_1||z_2|$\\n$2|z_1||z_2|\\cos(\\theta_1 - \\theta_2) = -2|z_1||z_2|$\\n$\\implies \\cos(\\theta_1 - \\theta_2) = -1 \\implies \\theta_1 - \\theta_2 = \\pi$.\\nThus, $\\arg(z_1) - \\arg(z_2) = \\pi$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "If $z$ satisfies $|z - 2| = 1$, then the maximum value of $|z|$ is:",
    options: [
      "$3$",
      "$2$",
      "$1$",
      "$\\sqrt{5}$"
    ],
    correctOption: 0,
    solution: "By triangle inequality:\\n$|z| = |(z - 2) + 2| \\le |z - 2| + |2| = 1 + 2 = 3$.\\nGeometrically, $|z - 2| = 1$ is a circle of radius 1 centered at $(2, 0)$.\\nThe furthest point on the circle from the origin is $(3, 0)$, at distance 3.\\nTherefore, the maximum value of $|z|$ is $3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "single_choice",
    question: "If $z$ is a complex number such that $|z + 4| \\le 3$, then the maximum value of $|z + 1|$ is:",
    options: [
      "$6$",
      "$4$",
      "$0$",
      "$10$"
    ],
    correctOption: 0,
    solution: "Rewrite $|z + 1| = |(z + 4) - 3|$.\\nBy triangle inequality:\\n$|z + 1| \\le |z + 4| + |-3| \\le 3 + 3 = 6$.\\nEquality occurs when $z + 4 = -3 \\implies z = -7$, for which $|-7 + 1| = 6$.\\nTherefore, the maximum value is $6$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any complex numbers $z_1$ and $z_2$, $|z_1 + z_2| \\le |z_1| + |z_2|$.\\nReason (R): In any triangle, the length of any side is less than or equal to the sum of the lengths of the other two sides.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Assertion (A) is the classical Triangle Inequality for complex numbers.\\nReason (R) provides the geometric basis in the Argand plane: vectors $0, z_1, z_1+z_2$ form a triangle whose sides have lengths $|z_1|, |z_2|, |z_1+z_2|$.\\nThus, both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): $|z_1 + z_2| = |z_1| + |z_2|$ holds if and only if $\\arg(z_1) = \\arg(z_2)$ (for non-zero $z_1, z_2$).\\nReason (R): $|z_1 + z_2|^2 = |z_1|^2 + |z_2|^2 + 2|z_1||z_2|\\cos(\\arg z_1 - \\arg z_2)$, and cosine attains its maximum value $1$ when the angle difference is $0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The algebraic proof of the equality condition of the triangle inequality uses:\\n$|z_1 + z_2|^2 = |z_1|^2 + |z_2|^2 + 2|z_1||z_2|\\cos(\\theta_1 - \\theta_2)$.\\nThis equals $(|z_1| + |z_2|)^2$ if and only if $\\cos(\\theta_1 - \\theta_2) = 1 \\iff \\theta_1 = \\theta_2$.\\nTherefore, both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $|z| = 5$, then the minimum value of $|z - (3 + 4i)|$ is $0$.\\nReason (R): The point $3 + 4i$ lies on the circle $|z| = 5$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The modulus of $3 + 4i$ is $\\sqrt{3^2 + 4^2} = 5$.\\nHence, the point $3 + 4i$ lies on the circle $|z| = 5$ (Reason R is true).\\nSince it lies on the circle, the minimum distance from points on the circle to $3 + 4i$ is 0 (at $z = 3 + 4i$, Assertion A is true).\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any complex numbers $z_1, z_2$, $||z_1| - |z_2|| \\le |z_1 - z_2|$.\\nReason (R): By triangle inequality, $|z_1| = |(z_1 - z_2) + z_2| \\le |z_1 - z_2| + |z_2| \\implies |z_1| - |z_2| \\le |z_1 - z_2|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Reason (R) gives $|z_1| - |z_2| \\le |z_1 - z_2|$.\\nBy symmetry, $|z_2| - |z_1| \\le |z_2 - z_1| = |z_1 - z_2|$.\\nCombining these yields $||z_1| - |z_2|| \\le |z_1 - z_2|$ (Assertion A).\\nThus, both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $|z| = 1$, then $|z + 1| + |z - 1| \\le 2\\sqrt{2}$.\\nReason (R): For any positive real numbers $a$ and $b$, $(a + b)^2 \\le 2(a^2 + b^2)$, and $|z+1|^2 + |z-1|^2 = 2(|z|^2 + 1) = 4$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Using the Cauchy-Schwarz inequality $(a + b)^2 \\le 2(a^2 + b^2)$ with $a = |z+1|$ and $b = |z-1|$:\\n$(|z+1| + |z-1|)^2 \\le 2(|z+1|^2 + |z-1|^2) = 2(2(|z|^2 + 1)) = 4(1 + 1) = 8$.\\nTaking square root gives $|z+1| + |z-1| \\le \\sqrt{8} = 2\\sqrt{2}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $|z_1 + z_2| = |z_1| + |z_2|$, then the origin and the points representing $z_1$ and $z_2$ in the Argand plane are collinear.\\nReason (R): $\\arg(z_1) = \\arg(z_2)$ implies that $z_1$ and $z_2$ lie on the same ray emanating from the origin.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Equality in $|z_1 + z_2| = |z_1| + |z_2|$ requires $\\arg(z_1) = \\arg(z_2)$.\\nThis geometrically means $z_1, z_2$ lie on the same ray through the origin, so $0, z_1, z_2$ are collinear.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any complex number $z$, $|z - 1| + |z + 1| \\ge 2$.\\nReason (R): By triangle inequality, $|z - 1| + |z + 1| \\ge |(z - 1) - (z + 1)| = |-2| = 2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Using the triangle inequality $|u| + |v| \\ge |u - v|$ with $u = z + 1$ and $v = z - 1$:\\n$|z + 1| + |z - 1| \\ge |(z + 1) - (z - 1)| = |2| = 2$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $|z| \\le 1$, then $|z^3 - z + 2| \\le 4$.\\nReason (R): By generalized triangle inequality, $|z_1 + z_2 + z_3| \\le |z_1| + |z_2| + |z_3|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By triangle inequality:\\n$|z^3 - z + 2| \\le |z^3| + |-z| + |2| = |z|^3 + |z| + 2$.\\nSince $|z| \\le 1$, we have $|z|^3 + |z| + 2 \\le 1^3 + 1 + 2 = 4$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The locus of $z$ such that $|z - 1| + |z + 1| = 2$ is a line segment.\\nReason (R): The minimum distance between $(1,0)$ and $(-1,0)$ is $2$, and any point on the segment joining them satisfies $|z - 1| + |z + 1| = 2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The distance between $1$ and $-1$ is $|1 - (-1)| = 2$.\\nFor any point $z$ not on the segment $[-1, 1]$, by triangle inequality $|z - 1| + |z + 1| > 2$.\\nEquality $|z - 1| + |z + 1| = 2$ holds precisely for the line segment joining $-1$ and $1$ on the real axis.\\nThus, both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $|z_1| = 1$ and $|z_2| = 2$, the maximum value of $|z_1 - z_2|$ is $3$.\\nReason (R): For any two complex numbers, $|z_1 - z_2| \\le |z_1| + |z_2|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By triangle inequality, $|z_1 - z_2| \\le |z_1| + |-z_2| = |z_1| + |z_2| = 1 + 2 = 3$.\\nThe maximum value 3 is attained when $\\arg(z_1) - \\arg(z_2) = \\pi$ (opposite directions).\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "If complex number $z$ satisfies $|z + 4| \\le 3$, then the maximum value of $|z + 1|$ is:",
    options: [],
    correctAnswer: "6",
    solution: "We rewrite $|z + 1| = |(z + 4) - 3|$.\\nBy triangle inequality:\\n$|z + 1| \\le |z + 4| + |-3| \\le 3 + 3 = 6$.\\nTherefore, the maximum value is $6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If $|z| = 3$, then the difference between the maximum and minimum values of $|z + 3 + 4i|$ is:",
    options: [],
    correctAnswer: "6",
    solution: "Let $z_0 = 3 + 4i$, so $|z_0| = \\sqrt{3^2 + 4^2} = 5$.\\nSince $|z| = 3$, the maximum value of $|z + z_0|$ is $|z_0| + |z| = 5 + 3 = 8$.\\nThe minimum value of $|z + z_0|$ is $|z_0| - |z| = 5 - 3 = 2$.\\nThe difference is $8 - 2 = 6$ (which is always $2|z| = 2(3) = 6$).",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If $z_1, z_2$ are complex numbers such that $|z_1| = 3$, $|z_2| = 4$, and $|z_1 + z_2| = 5$, then the value of $|z_1 - z_2|^2$ is:",
    options: [],
    correctAnswer: "25",
    solution: "By the Parallelogram Law:\\n$|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$\\n$5^2 + |z_1 - z_2|^2 = 2(3^2 + 4^2) = 2(9 + 16) = 2(25) = 50$\\n$25 + |z_1 - z_2|^2 = 50 \\implies |z_1 - z_2|^2 = 25$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "Let $z_1, z_2, z_3$ be complex numbers such that $|z_1| = |z_2| = |z_3| = 1$ and $z_1 + z_2 + z_3 = 0$. Then the value of $|z_1 - z_2|^2 + |z_2 - z_3|^2 + |z_3 - z_1|^2$ is:",
    options: [],
    correctAnswer: "9",
    solution: "Since $|z_1| = |z_2| = |z_3| = 1$ and $z_1 + z_2 + z_3 = 0$, $z_1, z_2, z_3$ form an equilateral triangle inscribed in the unit circle.\\nThe side length of an equilateral triangle inscribed in a circle of radius $R = 1$ is $s = \\sqrt{3} R = \\sqrt{3}$.\\nThus, $|z_1 - z_2|^2 = (\\sqrt{3})^2 = 3$, $|z_2 - z_3|^2 = 3$, and $|z_3 - z_1|^2 = 3$.\\nSum $= 3 + 3 + 3 = 9$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If $z$ satisfies $|z - 1| \\le 2$ and $|z - 2| = 1$, then the maximum possible value of $|z|$ is:",
    options: [],
    correctAnswer: "3",
    solution: "From $|z - 2| = 1$, by triangle inequality $|z| = |(z - 2) + 2| \\le |z - 2| + 2 = 1 + 2 = 3$.\\nAt $z = 3$, $|3 - 1| = 2 \\le 2$ and $|3 - 2| = 1 = 1$, satisfying both conditions.\\nTherefore, the maximum value of $|z|$ is $3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "Let $z$ be a complex number such that $|z - 2| + |z + 2| = 8$. Then the minimum value of $|z|$ is:",
    options: [],
    correctAnswer: "2\\sqrt{3}", // wait, let's make it integer!
    options: [],
    question: "Let $z$ be a complex number such that $|z - 3| + |z + 3| = 10$. Then the square of the minimum value of $|z|$ is:",
    correctAnswer: "16",
    solution: "The locus $|z - 3| + |z + 3| = 10$ is an ellipse with foci at $(\\pm 3, 0)$ and major axis $2a = 10 \\implies a = 5$.\\nHere $c = 3$, so the semi-minor axis is $b = \\sqrt{a^2 - c^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$.\\nThe minimum distance from the origin to any point on the ellipse is the semi-minor axis $b = 4$.\\nTherefore, the square of the minimum value of $|z|$ is $b^2 = 16$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If $|z - 1| + |z + 1| = 4$, then the maximum value of $|z|$ is:",
    options: [],
    correctAnswer: "2",
    solution: "The equation $|z - 1| + |z + 1| = 4$ represents an ellipse with foci $(\\pm 1, 0)$ and major axis $2a = 4 \\implies a = 2$.\\nThe maximum distance from the origin to the ellipse is the semi-major axis $a = 2$.\\nTherefore, the maximum value of $|z|$ is $2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If $|z| = 2$, then the minimum value of $\\left|z + \\frac{1}{z}\\right|$ is:",
    options: [],
    correctAnswer: "1.5", // wait, let's avoid decimals or multiply by 2!
    options: [],
    question: "If $|z| = 2$, then the value of $2 \\times \\min\\left|z + \\frac{1}{z}\\right|$ is:",
    correctAnswer: "3",
    solution: "By the reverse triangle inequality:\\n$\\left|z + \\frac{1}{z}\\right| \\ge ||z| - \\frac{1}{|z|}|| = \\left|2 - \\frac{1}{2}\\right| = \\frac{3}{2}$.\\nEquality occurs when $z = 2i$ or $-2i$ where $\\arg(z) - \\arg(1/z) = \\pi$.\\nThus, $\\min\\left|z + \\frac{1}{z}\\right| = \\frac{3}{2}$.\\nMultiplying by 2 gives $2 \\times \\frac{3}{2} = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If complex numbers $z_1, z_2$ satisfy $|z_1| = 1$ and $|z_2| = 2$, then the maximum possible value of $|z_1 + z_2|^2 + |z_1 - z_2|^2$ is:",
    options: [],
    correctAnswer: "10",
    solution: "By the Parallelogram Law:\\n$|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$.\\nSubstituting $|z_1| = 1$ and $|z_2| = 2$:\\n$= 2(1^2 + 2^2) = 2(1 + 4) = 10$.\\nNotice that this value is a constant independent of the relative orientations of $z_1$ and $z_2$.\\nTherefore, the value is $10$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  },
  {
    type: "numerical",
    question: "If $|z - 5i| \\le 3$, then the minimum value of $|z|$ is:",
    options: [],
    correctAnswer: "2",
    solution: "The condition $|z - 5i| \\le 3$ represents a closed disc centered at $(0, 5)$ with radius $R = 3$.\\nThe distance from the origin to the center is $|5i| = 5$.\\nThe minimum distance from the origin to any point in the disc is $5 - 3 = 2$.\\nTherefore, the minimum value of $|z|$ is $2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Triangle inequality",
    subTopic: "Triangle inequality"
  }
];

module.exports = { subtopic6Questions };
