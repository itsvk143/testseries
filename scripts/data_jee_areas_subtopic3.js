const subTopic = "Area bounded by parabolas, circles, and lines";
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
    assertion: "The area of the region bounded by the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $\\pi a b\\,\\text{sq units}$.",
    reason: "By symmetry, the total area is 4 times the area in the first quadrant: $4\\int_0^a \\frac{b}{a}\\sqrt{a^2 - x^2}\\,dx = 4\\frac{b}{a}\\left(\\frac{\\pi a^2}{4}\\right) = \\pi a b$.",
    correctAnswer: 0,
    explanation: "The first quadrant area is $\\int_0^a \\frac{b}{a}\\sqrt{a^2 - x^2}\\,dx = \\frac{\\pi a b}{4}$. Multiplying by 4 gives the total area $\\pi a b$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area bounded by the parabola $y^2 = 4ax$ and its latus rectum $x = a$ is $\\frac{8}{3}a^2\\,\\text{sq units}$.",
    reason: "By symmetry about the $x$-axis, $\\text{Area} = 2\\int_0^a 2\\sqrt{a}\\sqrt{x}\\,dx = 4\\sqrt{a}\\left[\\frac{2}{3}x^{3/2}\\right]_0^a = \\frac{8}{3}a^2$.",
    correctAnswer: 0,
    explanation: "$\\text{Area} = 2\\int_0^a 2\\sqrt{a}x^{1/2}\\,dx = 4\\sqrt{a}\\left(\\frac{2}{3}a^{3/2}\\right) = \\frac{8}{3}a^2$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The smaller area enclosed by the circle $x^2 + y^2 = a^2$ and the straight line $x + y = a$ in the first quadrant is $\\frac{a^2}{4}(\\pi - 2)\\,\\text{sq units}$.",
    reason: "The area is obtained by subtracting the area of the right triangle formed by the axes and chord from the area of the quarter circle: $\\frac{\\pi a^2}{4} - \\frac{1}{2}a^2 = \\frac{a^2}{4}(\\pi - 2)$.",
    correctAnswer: 0,
    explanation: "Area of quarter circle is $\\frac{\\pi a^2}{4}$, and the area of the triangle with vertices $(0,0), (a,0), (0,a)$ is $\\frac{1}{2}a^2$. Subtracting yields $\\frac{a^2}{4}(\\pi - 2)$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area of the smaller region cut off from the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ by the chord $\\frac{x}{a} + \\frac{y}{b} = 1$ is $\\frac{ab}{4}(\\pi - 2)\\,\\text{sq units}$.",
    reason: "The area is the difference between the quarter-ellipse area $\\frac{\\pi a b}{4}$ and the right triangle area $\\frac{1}{2} a b$.",
    correctAnswer: 0,
    explanation: "In the first quadrant, the ellipse area is $\\frac{\\pi a b}{4}$ and the triangle under the chord is $\\frac{1}{2} a b$. The difference is $\\frac{ab}{4}(\\pi - 2)$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed between the circle $x^2 + y^2 = 4$ and the parabola $y^2 = 3x$ inside the circle is strictly positive.",
    reason: "The parabola and circle intersect at $(1, \\sqrt{3})$ and $(1, -\\sqrt{3})$, enclosing a region combining a parabolic segment and a circular segment.",
    correctAnswer: 0,
    explanation: "Substituting $y^2 = 3x$ into $x^2 + y^2 = 4$ gives $x^2 + 3x - 4 = 0 \\implies x = 1$ (since $x \\ge 0$). The enclosed region is non-empty and has finite positive area. Both Assertion and Reason are true."
  },
  {
    assertion: "Archimedes' theorem states that the area of a parabolic segment cut off by a chord is $\\frac{4}{3}$ times the area of the inscribed triangle with the same base and vertex at the extreme point.",
    reason: "For any parabola $y = ax^2 + bx + c$, the area bounded between the curve and the chord from $x_1$ to $x_2$ is $\\frac{|a|}{6}(x_2 - x_1)^3$.",
    correctAnswer: 0,
    explanation: "The area of the inscribed triangle with maximum height is $\\frac{|a|}{8}(x_2 - x_1)^3$. Multiplying by $\\frac{4}{3}$ gives $\\frac{|a|}{6}(x_2 - x_1)^3$, confirming Archimedes' famous theorem. Both Assertion and Reason are true."
  },
  {
    assertion: "The area bounded by the parabola $x^2 = 4by$ and its latus rectum $y = b$ is $\\frac{8}{3}b^2\\,\\text{sq units}$.",
    reason: "The latus rectum line is $y = b$, and by symmetry $\\text{Area} = 2\\int_0^b 2\\sqrt{b}\\sqrt{y}\\,dy = \\frac{8}{3}b^2$.",
    correctAnswer: 0,
    explanation: "By identical geometry to $y^2 = 4ax$, swapping axes gives area $\\frac{8}{3}b^2$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed by the circle $x^2 + y^2 = 2x$ is $\\pi\\,\\text{sq units}$.",
    reason: "Rewriting the equation in standard form gives $(x - 1)^2 + y^2 = 1$, which is a circle of radius $r = 1$, having area $\\pi r^2 = \\pi$.",
    correctAnswer: 0,
    explanation: "Completing the square: $x^2 - 2x + 1 + y^2 = 1 \\implies (x - 1)^2 + y^2 = 1$. Radius is $1$, so area is $\\pi(1)^2 = \\pi$. Both Assertion and Reason are true."
  },
  {
    assertion: "The line $y = mx$ divides the region bounded by $y^2 = 4x$ and $x = 1$ into two equal parts for a unique value of $m > 0$.",
    reason: "The total area bounded by $y^2 = 4x$ and $x = 1$ is $2\\int_0^1 2\\sqrt{x}\\,dx = \\frac{8}{3}$, and the area of the sub-region is a strictly monotonic function of $m$.",
    correctAnswer: 0,
    explanation: "Total area is $2\\int_0^1 2\\sqrt{x}\\,dx = \\frac{8}{3}$. A line through the origin divides the region continuously and monotonically, guaranteeing a unique $m$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area common to the circle $x^2 + y^2 = 16$ and the line $x = 2$ to the right of the line is a circular segment of area $16\\left(\\frac{\\pi}{3} - \\frac{\\sqrt{3}}{4}\\right)$.",
    reason: "At $x = 2$, $\\cos\\theta = \\frac{2}{4} = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{3}$, and the circular sector area minus the triangle area gives the segment area.",
    correctAnswer: 0,
    explanation: "The central angle subtended is $2\\theta = \\frac{2\\pi}{3}$. Sector area is $\\frac{1}{2} r^2 (2\\theta) = \\frac{16\\pi}{3}$. Triangle area is $\\frac{1}{2} r^2 \\sin(2\\pi/3) = 8\\frac{\\sqrt{3}}{2} = 4\\sqrt{3}$. Difference is $\\frac{16\\pi}{3} - 4\\sqrt{3} = 16\\left(\\frac{\\pi}{3} - \\frac{\\sqrt{3}}{4}\\right)$. Both Assertion and Reason are true."
  }
];

const mcqQuestions = [
  {
    question: "The area enclosed between the circle $x^2 + y^2 = 1$ and the coordinate axes in the first quadrant is:",
    options: [
      "$\\frac{\\pi}{4}\\,\\text{sq units}$",
      "$\\frac{\\pi}{2}\\,\\text{sq units}$",
      "$\\pi\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$"
    ],
    correctAnswer: 0,
    explanation: "Area of the unit circle is $\\pi(1)^2 = \\pi$. The first quadrant contains one-fourth of the circle, so $\\text{Area} = \\frac{\\pi}{4}\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by the parabola $y^2 = 8x$ and its latus rectum is:",
    options: [
      "$\\frac{32}{3}\\,\\text{sq units}$",
      "$\\frac{16}{3}\\,\\text{sq units}$",
      "$\\frac{64}{3}\\,\\text{sq units}$",
      "$8\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Here $4a = 8 \\implies a = 2$. The latus rectum is the line $x = 2$. By standard formula, $\\text{Area} = \\frac{8a^2}{3} = \\frac{8(2)^2}{3} = \\frac{32}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ is:",
    options: [
      "$12\\pi\\,\\text{sq units}$",
      "$24\\pi\\,\\text{sq units}$",
      "$144\\pi\\,\\text{sq units}$",
      "$6\\pi\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Here $a^2 = 16 \\implies a = 4$ and $b^2 = 9 \\implies b = 3$. The area of the ellipse is $\\pi a b = \\pi(4)(3) = 12\\pi\\,\\text{sq units}$."
  },
  {
    question: "The smaller area bounded by the circle $x^2 + y^2 = 4$ and the line $x + y = 2$ in the first quadrant is:",
    options: [
      "$\\pi - 2\\,\\text{sq units}$",
      "$\\frac{\\pi}{2} - 1\\,\\text{sq units}$",
      "$2\\pi - 4\\,\\text{sq units}$",
      "$\\pi - 1\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Radius $a = 2$. Quarter circle area is $\\frac{\\pi(2)^2}{4} = \\pi$. The triangle under the chord $x+y=2$ has vertices $(0,0), (2,0), (0,2)$ and area $\\frac{1}{2}(2)(2) = 2$. Smaller region area is $\\pi - 2\\,\\text{sq units}$."
  },
  {
    question: "The area enclosed between the parabola $y = x^2$ and the circle $x^2 + y^2 = 2$ is:",
    options: [
      "$\\frac{\\pi}{2} + \\frac{1}{3}\\,\\text{sq units}$",
      "$\\frac{\\pi}{4} - \\frac{1}{6}\\,\\text{sq units}$",
      "$\\pi - \\frac{2}{3}\\,\\text{sq units}$",
      "$\\frac{\\pi}{2} - \\frac{1}{3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection: $y + y^2 = 2 \\implies y^2 + y - 2 = 0 \\implies (y + 2)(y - 1) = 0 \\implies y = 1$. Then $x = \\pm 1$. Area under circle and above parabola is $\\int_{-1}^1 (\\sqrt{2 - x^2} - x^2)\\,dx = 2\\left[\\frac{x}{2}\\sqrt{2-x^2} + \\frac{2}{2}\\sin^{-1}\\left(\\frac{x}{\\sqrt{2}}\\right) - \\frac{x^3}{3}\\right]_0^1 = 2\\left(\\frac{1}{2} + \\frac{\\pi}{4} - \\frac{1}{3}\\right) = 2\\left(\\frac{\\pi}{4} + \\frac{1}{6}\\right) = \\frac{\\pi}{2} + \\frac{1}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by the curve $y^2 = 4x$, the $y$-axis, and the lines $y = 1$ and $y = 3$ is:",
    options: [
      "$\\frac{13}{6}\\,\\text{sq units}$",
      "$\\frac{26}{3}\\,\\text{sq units}$",
      "$\\frac{13}{3}\\,\\text{sq units}$",
      "$\\frac{7}{6}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Integrating along $y$: $\\text{Area} = \\int_1^3 x\\,dy = \\int_1^3 \\frac{y^2}{4}\\,dy = \\left[\\frac{y^3}{12}\\right]_1^3 = \\frac{27 - 1}{12} = \\frac{26}{12} = \\frac{13}{6}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the parabola $y = 4 - x^2$ and the lines $y = 0, y = 3$ in the first quadrant is:",
    options: [
      "$\\frac{14}{3}\\,\\text{sq units}$",
      "$\\frac{16}{3}\\,\\text{sq units}$",
      "$\\frac{8}{3}\\,\\text{sq units}$",
      "$\\frac{11}{3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "In first quadrant, $x = \\sqrt{4 - y}$. Integrating along $y$ from $y = 0$ to $y = 3$: $\\text{Area} = \\int_0^3 (4 - y)^{1/2}\\,dy = \\left[-\\frac{2}{3}(4 - y)^{3/2}\\right]_0^3 = -\\frac{2}{3}(1^{3/2} - 4^{3/2}) = -\\frac{2}{3}(1 - 8) = \\frac{14}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area of the circle $x^2 + y^2 = 16$ exterior to the parabola $y^2 = 6x$ is:",
    options: [
      "$\\frac{4}{3}(4\\pi - \\sqrt{3})\\,\\text{sq units}$",
      "$\\frac{4}{3}(8\\pi - \\sqrt{3})\\,\\text{sq units}$",
      "$\\frac{16}{3}(\\pi - \\sqrt{3})\\,\\text{sq units}$",
      "$\\frac{8}{3}(2\\pi - \\sqrt{3})\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection: $x^2 + 6x - 16 = 0 \\implies (x + 8)(x - 2) = 0 \\implies x = 2$. Total area of circle is $16\\pi$. Interior region area is $2\\int_0^2 \\sqrt{6x}\\,dx + 2\\int_2^4 \\sqrt{16 - x^2}\\,dx = \\frac{4\\sqrt{3}}{3} + \\frac{16\\pi}{3} - 4\\sqrt{3}$. Subtracting from $16\\pi$ gives $\\frac{4}{3}(4\\pi - \\sqrt{3})$."
  },
  {
    question: "The area bounded by the parabola $y^2 = 2x$ and the line $x = 8$ is:",
    options: [
      "$\\frac{64\\sqrt{2}}{3}\\,\\text{sq units}$",
      "$\\frac{32\\sqrt{2}}{3}\\,\\text{sq units}$",
      "$\\frac{128\\sqrt{2}}{3}\\,\\text{sq units}$",
      "$16\\sqrt{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "By symmetry, $\\text{Area} = 2\\int_0^8 \\sqrt{2x}\\,dx = 2\\sqrt{2}\\left[\\frac{2}{3}x^{3/2}\\right]_0^8 = \\frac{4\\sqrt{2}}{3}(8\\sqrt{8}) = \\frac{4\\sqrt{2}}{3}(16\\sqrt{2}) = \\frac{128}{3}\\,\\text{sq units}$. Wait: $8^{3/2} = (\\sqrt{8})^3 = (2\\sqrt{2})^3 = 16\\sqrt{2}$. Then $2\\sqrt{2} \\times \\frac{2}{3} \\times 16\\sqrt{2} = \\frac{4 \\times 2 \\times 16}{3} = \\frac{128}{3}$."
  },
  {
    question: "The area of the region bounded by the curve $x^2 = 4y$ and the line $x = 4y - 2$ is:",
    options: [
      "$\\frac{9}{8}\\,\\text{sq units}$",
      "$\\frac{9}{4}\\,\\text{sq units}$",
      "$\\frac{3}{4}\\,\\text{sq units}$",
      "$\\frac{5}{8}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Line gives $4y = x + 2$. Substituting into parabola gives $x^2 = x + 2 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = -1, 2$. Area is $\\int_{-1}^2 \\left(\\frac{x+2}{4} - \\frac{x^2}{4}\\right)\\,dx = \\frac{1}{4} \\times \\frac{1}{6}(2 - (-1))^3 = \\frac{27}{24} = \\frac{9}{8}\\,\\text{sq units}$."
  }
];

// Clean mcqQuestions[8]:
mcqQuestions[8] = {
  question: "The area bounded by the parabola $y^2 = 2x$ and the line $x = 8$ is:",
  options: [
    "$\\frac{128}{3}\\,\\text{sq units}$",
    "$\\frac{64}{3}\\,\\text{sq units}$",
    "$\\frac{256}{3}\\,\\text{sq units}$",
    "$32\\,\\text{sq units}$"
  ],
  correctAnswer: 0,
  explanation: "By symmetry, $\\text{Area} = 2\\int_0^8 \\sqrt{2x}\\,dx = 2\\sqrt{2}\\left[\\frac{2}{3}x^{3/2}\\right]_0^8 = \\frac{4\\sqrt{2}}{3}(16\\sqrt{2}) = \\frac{128}{3}\\,\\text{sq units}$."
};

const numQuestions = [
  {
    question: "The area bounded by the parabola $y^2 = 4x$ and its latus rectum is $\\frac{A}{3}$. Find the value of $A$:",
    correctAnswer: 8,
    explanation: "Here $4a = 4 \\implies a = 1$. The latus rectum is $x = 1$. Area is $\\frac{8a^2}{3} = \\frac{8(1)^2}{3} = \\frac{8}{3}$. Thus $A = 8$."
  },
  {
    question: "The area bounded by the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ is $k\\pi$. Find the integer value of $k$:",
    correctAnswer: 20,
    explanation: "$a = 5$ and $b = 4$. Area $= \\pi a b = \\pi(5)(4) = 20\\pi$. Thus $k = 20$."
  },
  {
    question: "The area enclosed by the circle $x^2 + y^2 = 36$ is $k\\pi$. Find the integer value of $k$:",
    correctAnswer: 36,
    explanation: "Radius $r = 6$. Area $= \\pi r^2 = 36\\pi$. Thus $k = 36$."
  },
  {
    question: "The area of the region bounded by the parabola $x^2 = 12y$ and its latus rectum is $A$. Find the integer value of $A$:",
    correctAnswer: 24,
    explanation: "Here $4b = 12 \\implies b = 3$. Latus rectum is $y = 3$. Area is $\\frac{8b^2}{3} = \\frac{8(3)^2}{3} = \\frac{72}{3} = 24\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the parabola $y^2 = 16x$ and the line $x = 4$ is $\\frac{A}{3}$. Find the value of $A$:",
    correctAnswer: 128,
    explanation: "$a = 4$. Since $x = 4$ is the latus rectum, $\\text{Area} = \\frac{8a^2}{3} = \\frac{8(16)}{3} = \\frac{128}{3}$. Thus $A = 128$."
  },
  {
    question: "The area enclosed between the circle $x^2 + y^2 = 16$ and the line $y = x$ in the first quadrant above the line is $k\\pi$. Find the integer value of $k$:",
    correctAnswer: 2,
    explanation: "The line $y = x$ makes an angle $\\theta = \\frac{\\pi}{4}$ with the positive $x$-axis. The region above $y = x$ up to the $y$-axis ($\\frac{\\pi}{2}$) spans an angle of $\\frac{\\pi}{4}$. Sector area $= \\frac{1}{2} r^2 \\theta = \\frac{1}{2}(16)\\left(\\frac{\\pi}{4}\\right) = 2\\pi$. Thus $k = 2$."
  },
  {
    question: "The area bounded by $y = x^2 - 1$ and the line $y = 3$ is $\\frac{A}{3}$. Find the value of $A$:",
    correctAnswer: 32,
    explanation: "Intersection: $x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = \\pm 2$. $\\text{Area} = \\int_{-2}^2 (3 - (x^2 - 1))\\,dx = \\int_{-2}^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}$. Thus $A = 32$."
  },
  {
    question: "The area bounded by the parabola $y^2 = 6x$ and the line $x = 6$ is $A$. Find the integer value of $A$:",
    correctAnswer: 48,
    explanation: "$\\text{Area} = 2\\int_0^6 \\sqrt{6x}\\,dx = 2\\sqrt{6}\\left[\\frac{2}{3}x^{3/2}\\right]_0^6 = \\frac{4\\sqrt{6}}{3}(6\\sqrt{6}) = \\frac{4 \\times 6 \\times 6}{3} = 48\\,\\text{sq units}$."
  },
  {
    question: "The area of the ellipse $9x^2 + 16y^2 = 144$ is $k\\pi$. Find the integer value of $k$:",
    correctAnswer: 12,
    explanation: "Dividing by 144: $\\frac{x^2}{16} + \\frac{y^2}{9} = 1 \\implies a = 4, b = 3$. Area $= \\pi a b = 12\\pi$. Thus $k = 12$."
  },
  {
    question: "The area bounded by the parabola $x^2 = 8y$ and the line $y = 2$ is $\\frac{A}{3}$. Find the value of $A$:",
    correctAnswer: 32,
    explanation: "Here $4b = 8 \\implies b = 2$. Line $y = 2$ is the latus rectum. $\\text{Area} = \\frac{8b^2}{3} = \\frac{8(4)}{3} = \\frac{32}{3}$. Thus $A = 32$."
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
