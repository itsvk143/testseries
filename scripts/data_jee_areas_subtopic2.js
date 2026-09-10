const subTopic = "Area between two curves";
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
    assertion: "The area of the region enclosed between two continuous curves $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ is given by $\\int_a^b |f(x) - g(x)|\\,dx$.",
    reason: "The difference $|f(x) - g(x)|$ represents the vertical distance between the two curves at any coordinate $x \\in [a, b]$.",
    correctAnswer: 0,
    explanation: "The area between two curves is always the integral of the upper curve minus the lower curve, which is encapsulated by $\\int_a^b |f(x) - g(x)|\\,dx$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area enclosed between the parabolas $y = x^2$ and $x = y^2$ is $\\frac{1}{3}\\,\\text{sq units}$.",
    reason: "The points of intersection are $(0,0)$ and $(1,1)$, and the area is evaluated by $\\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.",
    correctAnswer: 0,
    explanation: "Intersection points satisfy $x = (x^2)^2 \\implies x(x^3 - 1) = 0 \\implies x = 0, 1$. For $x \\in [0,1]$, $\\sqrt{x} \\ge x^2$. Area is $\\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\frac{1}{3}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed between the curves $y = x^2$ and $y = x$ is $\\frac{1}{6}\\,\\text{sq units}$.",
    reason: "The curves intersect at $x = 0$ and $x = 1$, and $\\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
    correctAnswer: 0,
    explanation: "Roots of $x - x^2 = 0$ are $0$ and $1$. Line $y = x$ lies above parabola $y = x^2$ on $(0,1)$. Area is $\\int_0^1 (x - x^2)\\,dx = \\frac{1}{6}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed between the curves $y = \\sin x$ and $y = \\cos x$ between two consecutive intersection points is $2\\sqrt{2}\\,\\text{sq units}$.",
    reason: "The curves intersect at $x = \\frac{\\pi}{4}$ and $x = \\frac{5\\pi}{4}$, and $\\int_{\\pi/4}^{5\\pi/4} (\\sin x - \\cos x)\\,dx = [-\\cos x - \\sin x]_{\\pi/4}^{5\\pi/4} = 2\\sqrt{2}$.",
    correctAnswer: 0,
    explanation: "Between $\\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$, $\\sin x \\ge \\cos x$. $\\int_{\\pi/4}^{5\\pi/4} (\\sin x - \\cos x)\\,dx = \\left(\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}\\right) - \\left(-\\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}\\right) = 2\\sqrt{2}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area bounded by the parabola $y^2 = 4ax$ and the line $y = mx$ is given by $\\frac{8a^2}{3m^3}$.",
    reason: "The points of intersection are $(0,0)$ and $\\left(\\frac{4a}{m^2}, \\frac{4a}{m}\\right)$, and integrating $\\int (\\sqrt{4ax} - mx)\\,dx$ yields $\\frac{8a^2}{3m^3}$.",
    correctAnswer: 0,
    explanation: "Solving $(mx)^2 = 4ax \\implies x = 0$ or $x = \\frac{4a}{m^2}$. Area is $\\int_0^{4a/m^2} (2\\sqrt{a}\\sqrt{x} - mx)\\,dx = \\frac{8a^2}{3m^3}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area bounded between the parabolas $y = x^2$ and $y = 2x - x^2$ is $\\frac{1}{3}\\,\\text{sq units}$.",
    reason: "The curves intersect where $x^2 = 2x - x^2 \\implies 2x(x - 1) = 0 \\implies x = 0$ and $x = 1$. The difference is $\\int_0^1 (2x - 2x^2)\\,dx = \\left[x^2 - \\frac{2x^3}{3}\\right]_0^1 = \\frac{1}{3}$.",
    correctAnswer: 0,
    explanation: "Difference is $2x - 2x^2$. Area is $\\int_0^1 (2x - 2x^2)\\,dx = 1 - \\frac{2}{3} = \\frac{1}{3}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed between $y = x^2 - 1$ and $y = 1 - x^2$ is $\\frac{8}{3}\\,\\text{sq units}$.",
    reason: "Intersection points are $x = -1$ and $x = 1$, and the area is $\\int_{-1}^1 ((1 - x^2) - (x^2 - 1))\\,dx = 2\\int_{-1}^1 (1 - x^2)\\,dx = 4\\left(1 - \\frac{1}{3}\\right) = \\frac{8}{3}$.",
    correctAnswer: 0,
    explanation: "Difference is $2(1 - x^2)$. Integral from $-1$ to $1$ is $2 \\times 2 \\left[x - \\frac{x^3}{3}\\right]_0^1 = 4\\left(\\frac{2}{3}\\right) = \\frac{8}{3}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area of the region bounded by $x = y^2$ and the line $x = 4$ is $\\frac{32}{3}\\,\\text{sq units}$.",
    reason: "The parabola opens along the positive $x$-axis and is symmetric about the $x$-axis, so $\\text{Area} = 2\\int_0^4 \\sqrt{x}\\,dx = 2\\left[\\frac{2}{3}x^{3/2}\\right]_0^4 = \\frac{4}{3}(8) = \\frac{32}{3}$.",
    correctAnswer: 0,
    explanation: "Area is $2\\int_0^4 \\sqrt{x}\\,dx = \\frac{4}{3}(8) = \\frac{32}{3}\\,\\text{sq units}$. Both Assertion and Reason are true."
  },
  {
    assertion: "When calculating the area between $x = f(y)$ and $x = g(y)$ from $y = c$ to $y = d$, horizontal strips of width $dy$ are often more convenient than vertical strips.",
    reason: "Integrating with respect to $y$ avoids splitting the region into multiple parts when functions are expressed explicitly in terms of $y$.",
    correctAnswer: 0,
    explanation: "Horizontal strips use $\\int_c^d |f(y) - g(y)|\\,dy$, which simplifies the integration when curves are given as $x = h(y)$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area enclosed between $y = |x|$ and $y = x^2$ is $\\frac{1}{3}\\,\\text{sq units}$.",
    reason: "By symmetry about the $y$-axis, the total area is $2\\int_0^1 (x - x^2)\\,dx = 2\\left(\\frac{1}{6}\\right) = \\frac{1}{3}$.",
    correctAnswer: 0,
    explanation: "Intersection points are $x = \\pm 1$. In $[0,1]$, $|x| = x \\ge x^2$. Total area is $2 \\times \\frac{1}{6} = \\frac{1}{3}\\,\\text{sq units}$. Both Assertion and Reason are true."
  }
];

const mcqQuestions = [
  {
    question: "The area enclosed between the curves $y = x^3$ and $y = x$ is:",
    options: [
      "$\\frac{1}{2}\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$",
      "$\\frac{1}{4}\\,\\text{sq units}$",
      "$\\frac{3}{4}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The curves intersect at $x = -1, 0, 1$. By symmetry, $\\text{Area} = 2\\int_0^1 (x - x^3)\\,dx = 2\\left[\\frac{x^2}{2} - \\frac{x^4}{4}\\right]_0^1 = 2\\left(\\frac{1}{2} - \\frac{1}{4}\\right) = 2\\left(\\frac{1}{4}\\right) = \\frac{1}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = x^2$ and the line $y = 4$ is:",
    options: [
      "$\\frac{32}{3}\\,\\text{sq units}$",
      "$\\frac{16}{3}\\,\\text{sq units}$",
      "$16\\,\\text{sq units}$",
      "$\\frac{8}{3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection points are $x = -2$ and $x = 2$. Area is $\\int_{-2}^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area enclosed between the curves $y^2 = 4x$ and the line $y = 2x$ is:",
    options: [
      "$\\frac{1}{3}\\,\\text{sq units}$",
      "$\\frac{2}{3}\\,\\text{sq units}$",
      "$\\frac{1}{6}\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$"
    ],
    correctAnswer: 0,
    explanation: "Intersecting: $(2x)^2 = 4x \\implies 4x^2 - 4x = 0 \\implies x = 0$ or $x = 1$. Here $a = 1$ and $m = 2$. Formula gives $\\text{Area} = \\frac{8a^2}{3m^3} = \\frac{8(1)^2}{3(2)^3} = \\frac{8}{24} = \\frac{1}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curves $y = e^x$, $y = e^{-x}$, and the line $x = 1$ is:",
    options: [
      "$e + \\frac{1}{e} - 2\\,\\text{sq units}$",
      "$e - \\frac{1}{e}\\,\\text{sq units}$",
      "$e + \\frac{1}{e}\\,\\text{sq units}$",
      "$2(e - 1)\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "For $x \\in [0, 1]$, $e^x \\ge e^{-x}$. $\\text{Area} = \\int_0^1 (e^x - e^{-x})\\,dx = [e^x + e^{-x}]_0^1 = (e + e^{-1}) - (1 + 1) = e + \\frac{1}{e} - 2\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $y = \\sqrt{x}$ and $y = x^3$ is:",
    options: [
      "$\\frac{5}{12}\\,\\text{sq units}$",
      "$\\frac{7}{12}\\,\\text{sq units}$",
      "$\\frac{1}{3}\\,\\text{sq units}$",
      "$\\frac{1}{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection points are $x = 0$ and $x = 1$. In $[0,1]$, $\\sqrt{x} \\ge x^3$. Area is $\\int_0^1 (x^{1/2} - x^3)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^4}{4}\\right]_0^1 = \\frac{2}{3} - \\frac{1}{4} = \\frac{5}{12}\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by the curves $y = x^2 + 2$ and $y = x + 4$ is:",
    options: [
      "$\\frac{9}{2}\\,\\text{sq units}$",
      "$\\frac{7}{2}\\,\\text{sq units}$",
      "$5\\,\\text{sq units}$",
      "$\\frac{11}{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Points of intersection: $x^2 + 2 = x + 4 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = -1, 2$. Area is $\\int_{-1}^2 ((x + 4) - (x^2 + 2))\\,dx = \\int_{-1}^2 (2 + x - x^2)\\,dx = \\frac{1}{6}(2 - (-1))^3 = \\frac{1}{6}(27) = \\frac{9}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = \\ln x$ and the line $y = (x - 1)$ between $x = 1$ and $x = e$ is:",
    options: [
      "$\\frac{e^2 - 2e - 1}{2}\\,\\text{sq units}$",
      "$\\frac{e^2 - 3}{2}\\,\\text{sq units}$",
      "$\\frac{(e-1)^2}{2} - 1\\,\\text{sq units}$",
      "$\\frac{e^2 - 2e + 1}{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 2,
    explanation: "For $x \\in [1, e]$, $x - 1 \\ge \\ln x$. $\\int_1^e (x - 1 - \\ln x)\\,dx = \\left[\\frac{x^2}{2} - x - (x\\ln x - x)\\right]_1^e = \\left[\\frac{x^2}{2} - x\\ln x\\right]_1^e = \\left(\\frac{e^2}{2} - e\\right) - \\left(\\frac{1}{2} - 0\\right) = \\frac{e^2 - 2e - 1}{2} = \\frac{(e-1)^2}{2} - 1\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $y = 2 - x^2$ and $y = -x$ is:",
    options: [
      "$\\frac{9}{2}\\,\\text{sq units}$",
      "$\\frac{7}{2}\\,\\text{sq units}$",
      "$4\\,\\text{sq units}$",
      "$\\frac{16}{3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Intersection points: $2 - x^2 = -x \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = -1, 2$. Area is $\\int_{-1}^2 (2 + x - x^2)\\,dx = \\frac{1}{6}(2 - (-1))^3 = \\frac{27}{6} = \\frac{9}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by the curves $y = x^2$ and $y = 3x$ is:",
    options: [
      "$\\frac{9}{2}\\,\\text{sq units}$",
      "$\\frac{27}{2}\\,\\text{sq units}$",
      "$9\\,\\text{sq units}$",
      "$\\frac{9}{4}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Points of intersection: $x^2 = 3x \\implies x(x - 3) = 0 \\implies x = 0, 3$. $\\text{Area} = \\int_0^3 (3x - x^2)\\,dx = \\left[\\frac{3x^2}{2} - \\frac{x^3}{3}\\right]_0^3 = \\frac{27}{2} - 9 = \\frac{9}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area of the loop bounded by the curve $y^2 = x(x-1)^2$ is:",
    options: [
      "$\\frac{8}{15}\\,\\text{sq units}$",
      "$\\frac{4}{15}\\,\\text{sq units}$",
      "$\\frac{16}{15}\\,\\text{sq units}$",
      "$\\frac{2}{15}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The loop exists for $x \\in [0, 1]$. $y = \\pm (1 - x)\\sqrt{x}$. By symmetry, $\\text{Area} = 2\\int_0^1 (\\sqrt{x} - x\\sqrt{x})\\,dx = 2\\left[\\frac{2}{3}x^{3/2} - \\frac{2}{5}x^{5/2}\\right]_0^1 = 2\\left(\\frac{2}{3} - \\frac{2}{5}\\right) = 2\\left(\\frac{4}{15}\\right) = \\frac{8}{15}\\,\\text{sq units}$."
  }
];

const numQuestions = [
  {
    question: "The area enclosed between the parabolas $y = 4 - x^2$ and $y = x^2 - 4$ is $\\frac{A}{3}$. Find the value of $A$:",
    correctAnswer: 64,
    explanation: "Intersection: $4 - x^2 = x^2 - 4 \\implies 2x^2 = 8 \\implies x = \\pm 2$. $\\text{Area} = \\int_{-2}^2 (8 - 2x^2)\\,dx = 2\\left[8x - \\frac{2x^3}{3}\\right]_0^2 = 2\\left(16 - \\frac{16}{3}\\right) = \\frac{64}{3}$. Thus $A = 64$."
  },
  {
    question: "The area enclosed by the curves $y = x^2$ and $y = 4x - x^2$ is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 8,
    explanation: "Intersection: $x^2 = 4x - x^2 \\implies 2x^2 - 4x = 0 \\implies 2x(x - 2) = 0 \\implies x = 0, 2$. $\\text{Area} = \\int_0^2 (4x - 2x^2)\\,dx = \\left[2x^2 - \\frac{2x^3}{3}\\right]_0^2 = 8 - \\frac{16}{3} = \\frac{8}{3}$. Thus $k = 8$."
  },
  {
    question: "The area bounded by the curves $y^2 = 8x$ and $x^2 = 8y$ is $A$. Find the integer value of $A$:",
    correctAnswer: 21,
    explanation: "Formula for area between $y^2 = 4ax$ and $x^2 = 4by$ is $\\frac{16ab}{3}$. Here $4a = 8 \\implies a = 2$ and $4b = 8 \\implies b = 2$. $\\text{Area} = \\frac{16(2)(2)}{3} = \\frac{64}{3} \\approx 21.33$. Let us use $4a = 12$ and $4b = 12$ ($a=3, b=3$) $\\implies \\frac{16 \\times 9}{3} = 48$."
  },
  {
    question: "The area enclosed between the parabola $y^2 = 12x$ and $x^2 = 12y$ is $A$. Find the integer value of $A$:",
    correctAnswer: 48,
    explanation: "Here $4a = 12 \\implies a = 3$ and $4b = 12 \\implies b = 3$. The area is $\\frac{16 a b}{3} = \\frac{16 \\times 3 \\times 3}{3} = 48\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = 2x^2$ and the line $y = 8$ is $\\frac{A}{3}$. Find the value of $A$:",
    correctAnswer: 64,
    explanation: "Intersection points: $2x^2 = 8 \\implies x = \\pm 2$. $\\text{Area} = \\int_{-2}^2 (8 - 2x^2)\\,dx = 2\\left[8x - \\frac{2x^3}{3}\\right]_0^2 = 2\\left(16 - \\frac{16}{3}\\right) = \\frac{64}{3}$. Thus $A = 64$."
  },
  {
    question: "The area bounded by the parabola $y = x^2$ and the line $y = 2x + 3$ is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 32,
    explanation: "Intersection: $x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0 \\implies x = -1, 3$. Area between line and parabola is $\\frac{1}{6}(x_2 - x_1)^3 = \\frac{1}{6}(3 - (-1))^3 = \\frac{1}{6}(4)^3 = \\frac{64}{6} = \\frac{32}{3}$. Thus $k = 32$."
  },
  {
    question: "The area enclosed by $y^2 = 2x$ and the line $x - y = 4$ is $A$. Find the integer value of $A$:",
    correctAnswer: 18,
    explanation: "Line is $x = y + 4$. Parabola is $x = \\frac{y^2}{2}$. Intersection: $y + 4 = \\frac{y^2}{2} \\implies y^2 - 2y - 8 = 0 \\implies (y - 4)(y + 2) = 0 \\implies y = -2, 4$. Area is $\\int_{-2}^4 \\left(y + 4 - \\frac{y^2}{2}\\right)\\,dy = \\frac{1}{2} \\times \\frac{1}{6}(4 - (-2))^3 = \\frac{1}{12}(6)^3 = \\frac{216}{12} = 18\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = x^2$ and $y = |x|$ is $\\frac{1}{k}$. Find the value of $k$:",
    correctAnswer: 3,
    explanation: "Intersection points: $x = \\pm 1, 0$. By symmetry, $\\text{Area} = 2\\int_0^1 (x - x^2)\\,dx = 2\\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = 2\\left(\\frac{1}{6}\\right) = \\frac{1}{3}$. Thus $k = 3$."
  },
  {
    question: "The area of the region bounded by $y = x^2 - 2x$ and $y = x$ is $\\frac{k}{2}$. Find the integer value of $k$:",
    correctAnswer: 9,
    explanation: "Intersection points: $x^2 - 2x = x \\implies x^2 - 3x = 0 \\implies x = 0, 3$. Area is $\\int_0^3 (3x - x^2)\\,dx = \\left[\\frac{3x^2}{2} - \\frac{x^3}{3}\\right]_0^3 = \\frac{27}{2} - 9 = \\frac{9}{2}$. Thus $k = 9$."
  },
  {
    question: "The area bounded by the parabolas $y^2 = 4x$ and $y = 2x^2$ is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 2,
    explanation: "Intersection: $y^2 = 4x$ and $x = \\frac{y}{2}$ wait: $y = 2x^2 \\implies y^2 = 4x^4 = 4x \\implies 4x(x^3 - 1) = 0 \\implies x = 0, 1$. Then $y = 0, 2$. Here $4a = 4 \\implies a = 1$ and $4b = 1/2 \\implies b = 1/8$. Area is $\\frac{16 a b}{3} = \\frac{16(1)(1/8)}{3} = \\frac{2}{3}$. Thus $k = 2$."
  }
];

// Clean numQuestions[2] to use exact integer question:
numQuestions[2] = {
  question: "The area enclosed between the parabolas $y = x^2$ and $y^2 = x$ is $\\frac{1}{k}$. Find the value of $k$:",
  correctAnswer: 3,
  explanation: "Intersection points are $(0,0)$ and $(1,1)$. The area is $\\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$. Thus $k = 3$."
};

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
