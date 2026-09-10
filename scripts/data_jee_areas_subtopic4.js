const subTopic = "Symmetrical areas and piecewise integrations";
const subject = "Mathematics";
const chapter = "Areas";

const AR_OPTIONS = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const arQuestions = [
  {
    assertion: "The area of the region bounded by $|x| + |y| \\le 1$ is $2\\,\\text{sq units}$.",
    reason: "The boundary $|x| + |y| = 1$ is a square with vertices at $(1,0), (0,1), (-1,0), (0,-1)$ whose diagonal length is $2$.",
    correctAnswer: 0,
    explanation: "The vertices form a square with diagonals lying on the axes of length $d = 2$. The area of a square given its diagonal is $\\frac{1}{2} d^2 = \\frac{1}{2}(2)^2 = 2\\,\\text{sq units}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area of the region bounded by $|x| + |y| \\le a$ is $2a^2\\,\\text{sq units}$.",
    reason: "By symmetry in all four quadrants, the total area is $4$ times the area in the first quadrant: $4 \\times \\left(\\frac{1}{2} \\times a \\times a\\right) = 2a^2$.",
    correctAnswer: 0,
    explanation: "In the first quadrant, $x + y \\le a$ forms a right isosceles triangle of legs $a$ and area $\\frac{a^2}{2}$. Across 4 quadrants, $\\text{Area} = 4\\left(\\frac{a^2}{2}\\right) = 2a^2$. Both Assertion and Reason are true."
  },
  {
    assertion: "If a curve $y = f(x)$ is symmetric about the $y$-axis (i.e. $f(-x) = f(x)$), then the area under the curve from $x = -a$ to $x = a$ is $2\\int_0^a f(x)\\,dx$.",
    reason: "For any even integrable function $f(x)$, $\\int_{-a}^a f(x)\\,dx = 2\\int_0^a f(x)\\,dx$ by reflection property.",
    correctAnswer: 0,
    explanation: "The reflection property for even functions states $\\int_{-a}^a f(x)\\,dx = \\int_{-a}^0 f(x)\\,dx + \\int_0^a f(x)\\,dx = 2\\int_0^a f(x)\\,dx$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area bounded by $y = |x - 1|$ and $y = 3 - |x - 1|$ is $4\\,\\text{sq units}$.",
    reason: "The intersection points are where $|x - 1| = 3 - |x - 1| \\implies 2|x - 1| = 3 \\implies x - 1 = \\pm \\frac{3}{2}$, and the enclosed shape is a rhombus of diagonals $3$ and $3$.",
    correctAnswer: 2,
    explanation: "Let $u = x - 1$. The equations become $y = |u|$ and $y = 3 - |u|$. Intersection: $2|u| = 3 \\implies |u| = 3/2 \\implies u = \\pm 3/2$. The shape is a square/rhombus with horizontal diagonal from $-3/2$ to $3/2$ (length $3$) and vertical diagonal from $y = 0$ to $y = 3$ (length $3$). Area is $\\frac{1}{2} d_1 d_2 = \\frac{1}{2}(3)(3) = 4.5\\,\\text{sq units}$. Assertion is false ($4 \\neq 4.5$). Reason correctly analyzes the diagonals but Assertion claims 4. Assertion is false, Reason is true."
  },
  {
    assertion: "The area of the region bounded by $y = \\max\\{x, x^2\\}$ and $y = 0$ from $x = 0$ to $x = 2$ is $\\frac{17}{6}\\,\\text{sq units}$.",
    reason: "For $x \\in [0, 1]$, $x \\ge x^2$, and for $x \\in [1, 2]$, $x^2 \\ge x$, so the integral splits as $\\int_0^1 x\\,dx + \\int_1^2 x^2\\,dx = \\frac{1}{2} + \\frac{7}{3} = \\frac{17}{6}$.",
    correctAnswer: 0,
    explanation: "On $[0,1]$, $\\max\\{x, x^2\\} = x$. On $[1,2]$, $\\max\\{x, x^2\\} = x^2$. $\\text{Area} = \\left[\\frac{x^2}{2}\\right]_0^1 + \\left[\\frac{x^3}{3}\\right]_1^2 = \\frac{1}{2} + \\frac{8-1}{3} = \\frac{1}{2} + \\frac{7}{3} = \\frac{17}{6}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed between the curve $y = |\\sin x|$ and the $x$-axis from $x = 0$ to $x = 2\\pi$ is $4\\,\\text{sq units}$.",
    reason: "The function $|\\sin x|$ has period $\\pi$ and is non-negative everywhere, with each half-cycle having an area of $\\int_0^\\pi \\sin x\\,dx = 2$.",
    correctAnswer: 0,
    explanation: "Two complete half-cycles yield $\\text{Area} = 2 \\times 2 = 4\\,\\text{sq units}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area bounded by the curve $y = x|x|$, the $x$-axis, and the lines $x = -2$ and $x = 2$ is $4\\,\\text{sq units}$.",
    reason: "For $x \\ge 0$, $y = x^2$, and for $x < 0$, $y = -x^2$. By symmetry about the origin, the geometric area is $2\\int_0^2 x^2\\,dx = \\frac{16}{3}$.",
    correctAnswer: 3,
    explanation: "The geometric area is $2\\int_0^2 x^2\\,dx = 2\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{16}{3}\\,\\text{sq units}$. The assertion states $4\\,\\text{sq units}$, which is false. Reason is true."
  },
  {
    assertion: "The area bounded by $y = \\min\\{x, x^2\\}$ from $x = 0$ to $x = 2$ and the $x$-axis is $\\frac{11}{6}\\,\\text{sq units}$.",
    reason: "On $[0, 1]$, $\\min\\{x, x^2\\} = x^2$, and on $[1, 2]$, $\\min\\{x, x^2\\} = x$. Integrating gives $\\int_0^1 x^2\\,dx + \\int_1^2 x\\,dx = \\frac{1}{3} + \\frac{3}{2} = \\frac{11}{6}$.",
    correctAnswer: 0,
    explanation: "$\\int_0^1 x^2\\,dx + \\int_1^2 x\\,dx = \\frac{1}{3} + \\left[\\frac{x^2}{2}\\right]_1^2 = \\frac{1}{3} + \\left(2 - \\frac{1}{2}\\right) = \\frac{1}{3} + \\frac{3}{2} = \\frac{11}{6}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area bounded by the curve $y = 1 - |x|$ and the $x$-axis is $1\\,\\text{sq unit}$.",
    reason: "The curve intersects the $x$-axis at $x = -1$ and $x = 1$, forming a triangle of base $2$ and height $1$, with area $\\frac{1}{2} \\times 2 \\times 1 = 1$.",
    correctAnswer: 0,
    explanation: "Base is $1 - (-1) = 2$, and peak is at $(0,1)$ with height $1$. $\\text{Area} = \\frac{1}{2} \\times 2 \\times 1 = 1\\,\\text{sq unit}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area of the region enclosed by $y = |x^2 - 1|$ and the line $y = 3$ is $8\\,\\text{sq units}$.",
    reason: "Intersection points are $|x^2 - 1| = 3 \\implies x^2 - 1 = 3 \\implies x = \\pm 2$, and by symmetry the area is $2\\int_0^2 (3 - |x^2 - 1|)\\,dx$.",
    correctAnswer: 0,
    explanation: "Intersection: $x = \\pm 2$. Area is $2\\left[\\int_0^1 (3 - (1 - x^2))\\,dx + \\int_1^2 (3 - (x^2 - 1))\\,dx\\right] = 2\\left[\\int_0^1 (2 + x^2)\\,dx + \\int_1^2 (4 - x^2)\\,dx\\right] = 2\\left[\\left(2 + \\frac{1}{3}\\right) + \\left(4 - \\frac{7}{3}\\right)\\right] = 2\\left(\\frac{7}{3} + \\frac{5}{3}\\right) = 2(4) = 8\\,\\text{sq units}$. Both Assertion and Reason are true."
  }
];

// Clean arQuestions[3] assertion so both Assertion and Reason are clear:
arQuestions[3] = {
  assertion: "The area bounded by $y = |x - 1|$ and $y = 3 - |x - 1|$ is $\\frac{9}{2}\\,\\text{sq units}$.",
  reason: "Substituting $u = x - 1$ transforms the region into a symmetric rhombus bounded by $y = |u|$ and $y = 3 - |u|$ with horizontal diagonal $3$ and vertical diagonal $3$, giving area $\\frac{1}{2} \\times 3 \\times 3 = \\frac{9}{2}$.",
  correctAnswer: 0,
  explanation: "Let $u = x - 1$. The equations become $y = |u|$ and $y = 3 - |u|$. Intersection: $2|u| = 3 \\implies |u| = 3/2 \\implies u = \\pm 3/2$. The shape is a rhombus with horizontal diagonal of length $3$ and vertical diagonal from $y = 0$ to $y = 3$ of length $3$. Area is $\\frac{1}{2} d_1 d_2 = \\frac{1}{2}(3)(3) = \\frac{9}{2}\\,\\text{sq units}$. Both Assertion and Reason are true."
};

const mcqQuestions = [
  {
    question: "The area of the region bounded by $|x| + 2|y| \\le 2$ is:",
    options: [
      "$4\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$",
      "$8\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$"
    ],
    correctAnswer: 0,
    explanation: "In the first quadrant, $x + 2y \\le 2$ intersects axes at $(2,0)$ and $(0,1)$. Area of the triangle in first quadrant is $\\frac{1}{2}(2)(1) = 1$. Across all four quadrants, $\\text{Area} = 4 \\times 1 = 4\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = |x - 2|$, the $x$-axis, and the ordinates $x = 1$ and $x = 3$ is:",
    options: [
      "$1\\,\\text{sq unit}$",
      "$2\\,\\text{sq units}$",
      "$\\frac{1}{2}\\,\\text{sq units}$",
      "$\\frac{3}{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The vertex is at $(2,0)$. The region splits into two symmetric triangles from $x=1$ to $x=2$ (area $1/2$) and from $x=2$ to $x=3$ (area $1/2$). Total area is $\\frac{1}{2} + \\frac{1}{2} = 1\\,\\text{sq unit}$."
  },
  {
    question: "The area bounded by the curve $y = |x^2 - 4|$ and the line $y = 5$ is:",
    options: [
      "$\\frac{44}{3}\\,\\text{sq units}$",
      "$\\frac{22}{3}\\,\\text{sq units}$",
      "$\\frac{88}{3}\\,\\text{sq units}$",
      "$14\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection: $x^2 - 4 = 5 \\implies x^2 = 9 \\implies x = \\pm 3$. By symmetry, $\\text{Area} = 2\\left[\\int_0^2 (5 - (4 - x^2))\\,dx + \\int_2^3 (5 - (x^2 - 4))\\,dx\\right] = 2\\left[\\int_0^2 (1 + x^2)\\,dx + \\int_2^3 (9 - x^2)\\,dx\\right] = 2\\left[\\left(2 + \\frac{8}{3}\\right) + \\left(9(1) - \\frac{19}{3}\\right)\\right] = 2\\left(\\frac{14}{3} + \\frac{8}{3}\\right) = 2\\left(\\frac{22}{3}\\right) = \\frac{44}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $y = \\max\\{x, 1\\}$, $y = 0$, $x = 0$, and $x = 2$ is:",
    options: [
      "$\\frac{5}{2}\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$",
      "$3\\,\\text{sq units}$",
      "$\\frac{3}{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "On $[0, 1]$, $\\max\\{x, 1\\} = 1$, giving area $1 \\times 1 = 1$. On $[1, 2]$, $\\max\\{x, 1\\} = x$, giving area $\\int_1^2 x\\,dx = \\left[\\frac{x^2}{2}\\right]_1^2 = 2 - \\frac{1}{2} = \\frac{3}{2}$. Total area is $1 + \\frac{3}{2} = \\frac{5}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area of the region defined by $\\{(x,y) : x^2 + y^2 \\le 4, |x| + |y| \\ge 2\\}$ is:",
    options: [
      "$4\\pi - 8\\,\\text{sq units}$",
      "$2\\pi - 4\\,\\text{sq units}$",
      "$4\\pi - 4\\,\\text{sq units}$",
      "$2\\pi - 2\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The region is inside the circle $x^2 + y^2 \\le 4$ (area $\\pi(2)^2 = 4\\pi$) and outside the square $|x| + |y| = 2$ (area $2(2)^2 = 8$). Subtracting yields $4\\pi - 8\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $y = |x - 1| + |x + 1|$ and $y = 4$ is:",
    options: [
      "$6\\,\\text{sq units}$",
      "$8\\,\\text{sq units}$",
      "$4\\,\\text{sq units}$",
      "$12\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "For $x \\in [-1, 1]$, $f(x) = (1 - x) + (x + 1) = 2$. For $x > 1$, $f(x) = 2x$. For $x < -1$, $f(x) = -2x$. Intersection with $y = 4$: $2x = 4 \\implies x = 2$ and $-2x = 4 \\implies x = -2$. The region is a trapezoid with parallel sides $b_1 = 4$ (at $y=4$ from $x=-2$ to $2$), $b_2 = 2$ (at $y=2$ from $x=-1$ to $1$), and height $h = 4 - 2 = 2$. $\\text{Area} = \\frac{4 + 2}{2} \\times 2 = 6\\,\\text{sq units}$."
  },
  {
    question: "The area enclosed by $y = x^2$ and $y = |2x|$ is:",
    options: [
      "$\\frac{8}{3}\\,\\text{sq units}$",
      "$\\frac{4}{3}\\,\\text{sq units}$",
      "$\\frac{16}{3}\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection: $x^2 = 2x \\implies x = 0, 2$ (and by symmetry $x = -2$). By symmetry, $\\text{Area} = 2\\int_0^2 (2x - x^2)\\,dx = 2\\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 2\\left(4 - \\frac{8}{3}\\right) = 2\\left(\\frac{4}{3}\\right) = \\frac{8}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = |\\cos x|$ from $x = 0$ to $x = \\pi$ and the $x$-axis is:",
    options: [
      "$2\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$",
      "$0\\,\\text{sq units}$",
      "$4\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The integral is $\\int_0^{\\pi/2} \\cos x\\,dx + \\int_{\\pi/2}^\\pi (-\\cos x)\\,dx = 1 + 1 = 2\\,\\text{sq units}$."
  },
  {
    question: "The area of the region enclosed by $y = 2 - |x|$ and $y = x^2$ is:",
    options: [
      "$\\frac{7}{3}\\,\\text{sq units}$",
      "$\\frac{8}{3}\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$",
      "$\\frac{5}{3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection in first quadrant: $2 - x = x^2 \\implies x^2 + x - 2 = 0 \\implies (x + 2)(x - 1) = 0 \\implies x = 1$. By symmetry, $\\text{Area} = 2\\int_0^1 (2 - x - x^2)\\,dx = 2\\left[2x - \\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = 2\\left(2 - \\frac{1}{2} - \\frac{1}{3}\\right) = 2\\left(\\frac{7}{6}\\right) = \\frac{7}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = \\sqrt{|x|}$ and the line $y = 1$ is:",
    options: [
      "$\\frac{2}{3}\\,\\text{sq units}$",
      "$\\frac{4}{3}\\,\\text{sq units}$",
      "$\\frac{1}{3}\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection: $\\sqrt{|x|} = 1 \\implies |x| = 1 \\implies x = \\pm 1$. By symmetry, $\\text{Area} = 2\\int_0^1 (1 - \\sqrt{x})\\,dx = 2\\left[x - \\frac{2}{3}x^{3/2}\\right]_0^1 = 2\\left(1 - \\frac{2}{3}\\right) = 2\\left(\\frac{1}{3}\\right) = \\frac{2}{3}\\,\\text{sq units}$."
  }
];

const numQuestions = [
  {
    question: "The area of the region bounded by $|x| + |y| \\le 3$ is $A$. Find the value of $A$:",
    correctAnswer: 18,
    explanation: "Formula: $\\text{Area} = 2a^2$. Here $a = 3$, so $\\text{Area} = 2(3^2) = 2(9) = 18\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $|x - 1| + |y| \\le 2$ is $A$. Find the value of $A$:",
    correctAnswer: 8,
    explanation: "Shifting $x \\to x - 1$ preserves area. The region is equivalent to $|x| + |y| \\le 2$, with area $2a^2 = 2(2^2) = 8\\,\\text{sq units}$."
  },
  {
    question: "The area enclosed between $y = |x|$ and $y = 4$ is $A$. Find the value of $A$:",
    correctAnswer: 16,
    explanation: "The region is an inverted triangle with base from $x = -4$ to $4$ (length $8$) and height $4$. $\\text{Area} = \\frac{1}{2} \\times 8 \\times 4 = 16\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = |2x|$ and $y = 6$ is $A$. Find the value of $A$:",
    correctAnswer: 18,
    explanation: "Intersection: $2x = 6 \\implies x = 3$ and $-2x = 6 \\implies x = -3$. Base is $6$ and height is $6$. $\\text{Area} = \\frac{1}{2} \\times 6 \\times 6 = 18\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $|x| + |y| \\le 4$ is $A$. Find the value of $A$:",
    correctAnswer: 32,
    explanation: "$\\text{Area} = 2a^2 = 2(4^2) = 32\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = 4 - |x|$ and the $x$-axis is $A$. Find the value of $A$:",
    correctAnswer: 16,
    explanation: "Base from $x = -4$ to $4$ is $8$, and height is $4$. $\\text{Area} = \\frac{1}{2} \\times 8 \\times 4 = 16\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $2|x| + 3|y| \\le 6$ is $A$. Find the value of $A$:",
    correctAnswer: 12,
    explanation: "In first quadrant, $2x + 3y \\le 6$ has intercepts $(3,0)$ and $(0,2)$. Triangle area is $\\frac{1}{2}(3)(2) = 3$. Total area across four quadrants is $4 \\times 3 = 12\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = |x - 3|$ and $y = 3$ is $A$. Find the value of $A$:",
    correctAnswer: 9,
    explanation: "Vertex is at $(3,0)$. At $y = 3$, $x - 3 = \\pm 3 \\implies x = 0, 6$. Base is $6$ and height is $3$. $\\text{Area} = \\frac{1}{2} \\times 6 \\times 3 = 9\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $y = \\sqrt{|x|}$ and $y = 2$ is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 16,
    explanation: "Intersection: $\\sqrt{|x|} = 2 \\implies |x| = 4 \\implies x = \\pm 4$. By symmetry, $\\text{Area} = 2\\int_0^4 (2 - \\sqrt{x})\\,dx = 2\\left[2x - \\frac{2}{3}x^{3/2}\\right]_0^4 = 2\\left(8 - \\frac{2}{3}(8)\\right) = 2\\left(8 - \\frac{16}{3}\\right) = 2\\left(\\frac{8}{3}\\right) = \\frac{16}{3}$. Thus $k = 16$."
  },
  {
    question: "The area bounded by $y = |x| - 1$ and $y = 1 - |x|$ is $A$. Find the value of $A$:",
    correctAnswer: 2,
    explanation: "Intersection: $|x| - 1 = 1 - |x| \\implies 2|x| = 2 \\implies |x| = 1 \\implies x = \\pm 1$. The shape is a square with vertices $(1,0), (0,1), (-1,0), (0,-1)$. The diagonal length is $2$. $\\text{Area} = \\frac{1}{2} d^2 = \\frac{1}{2}(2)^2 = 2\\,\\text{sq units}$."
  }
];

const allQuestions = [];

arQuestions.forEach(q => {
  allQuestions.push({
    question: `Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: ${q.assertion}\nReason R: ${q.reason}\nIn the light of the above statements, choose the correct answer from the options given below:`,
    options: AR_OPTIONS,
    correctAnswer: q.correctAnswer,
    type: "ASSERTION_REASON",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  });
});

mcqQuestions.forEach(q => {
  allQuestions.push({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    type: "MCQ",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  });
});

numQuestions.forEach(q => {
  allQuestions.push({
    question: q.question,
    options: [],
    correctAnswer: q.correctAnswer,
    type: "NUMERICAL",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  });
});

module.exports = allQuestions;
