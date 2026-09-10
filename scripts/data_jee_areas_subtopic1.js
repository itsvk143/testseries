const subTopic = "Area under a curve";
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
    assertion: "The area bounded by the curve $y = f(x)$, the $x$-axis, and the ordinates $x = a$ and $x = b$ is given by $\\int_a^b |f(x)|\\,dx$.",
    reason: "Area is a non-negative geometric quantity, so portions of the curve lying below the $x$-axis where $f(x) < 0$ contribute positively through $-f(x)$.",
    correctAnswer: 0,
    explanation: "Since geometric area cannot be negative, we must take the absolute value of the function before integrating: $\\text{Area} = \\int_a^b |f(x)|\\,dx$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area under one complete positive arch of the sine curve $y = \\sin x$ above the $x$-axis from $x = 0$ to $x = \\pi$ is $2\\,\\text{sq units}$.",
    reason: "Evaluating the definite integral gives $\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = -(-1) - (-1) = 2$.",
    correctAnswer: 0,
    explanation: "$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = -(-1) + 1 = 2$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area bounded by the curve $y = \\ln x$, the $x$-axis, and the line $x = e$ is $1\\,\\text{sq unit}$.",
    reason: "The curve $y = \\ln x$ intersects the $x$-axis at $x = 1$, and $\\int_1^e \\ln x\\,dx = [x\\ln x - x]_1^e = (e - e) - (0 - 1) = 1$.",
    correctAnswer: 0,
    explanation: "The root is $x = 1$. For $x \\in [1, e]$, $\\ln x \\ge 0$. Integrating by parts gives $\\int_1^e \\ln x\\,dx = [x\\ln x - x]_1^e = (e - e) - (-1) = 1$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area bounded by $y = x^3$, the $x$-axis, and the lines $x = -2$ and $x = 2$ is $0\\,\\text{sq units}$.",
    reason: "The function $f(x) = x^3$ is an odd function, so $\\int_{-2}^2 x^3\\,dx = 0$.",
    correctAnswer: 3,
    explanation: "Although $\\int_{-2}^2 x^3\\,dx = 0$, the geometric area is $\\int_{-2}^2 |x^3|\\,dx = 2\\int_0^2 x^3\\,dx = 2\\left[\\frac{x^4}{4}\\right]_0^2 = 2 \\times 4 = 8\\,\\text{sq units}$. Assertion is false, Reason is true."
  },
  {
    assertion: "If $A(x) = \\int_a^x f(t)\\,dt$ represents the area function for a continuous function $f(t) \\ge 0$, then $A'(x) = f(x)$.",
    reason: "By the First Fundamental Theorem of Calculus, the derivative of a definite integral with respect to its upper limit is the integrand evaluated at that limit.",
    correctAnswer: 0,
    explanation: "By the Fundamental Theorem of Calculus, $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area bounded by $y = e^x$, the coordinate axes, and the line $x = 1$ is $(e - 1)\\,\\text{sq units}$.",
    reason: "The area is calculated by the integral $\\int_0^1 e^x\\,dx = [e^x]_0^1 = e^1 - e^0 = e - 1$.",
    correctAnswer: 0,
    explanation: "Since $e^x > 0$, $\\text{Area} = \\int_0^1 e^x\\,dx = e^1 - e^0 = e - 1$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The area enclosed between $y = \\frac{1}{1+x^2}$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is $\\frac{\\pi}{4}\\,\\text{sq units}$.",
    reason: "The anti-derivative of $\\frac{1}{1+x^2}$ is $\\arctan x$, and $\\arctan(1) - \\arctan(0) = \\frac{\\pi}{4}$.",
    correctAnswer: 0,
    explanation: "$\\int_0^1 \\frac{1}{1+x^2}\\,dx = [\\tan^{-1} x]_0^1 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The total area bounded by the curve $y = x^2 - 3x + 2$ and the $x$-axis is $\\frac{1}{6}\\,\\text{sq units}$.",
    reason: "The roots of $x^2 - 3x + 2 = 0$ are $x = 1$ and $x = 2$, and the area between a parabola and the chord joining its roots is $\\frac{|a|}{6}(x_2 - x_1)^3$.",
    correctAnswer: 0,
    explanation: "Roots are $x = 1$ and $x = 2$. In between, $y \\le 0$. Area is $\\int_1^2 -(x^2 - 3x + 2)\\,dx = \\frac{1}{6}(2 - 1)^3 = \\frac{1}{6}$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area under the curve $y = x e^{-x}$ from $x = 0$ to $x = \\infty$ above the $x$-axis is finite and equals $1\\,\\text{sq unit}$.",
    reason: "Using integration by parts, $\\int_0^\\infty x e^{-x}\\,dx = [-x e^{-x} - e^{-x}]_0^\\infty = 0 - (-1) = 1$.",
    correctAnswer: 0,
    explanation: "$\\int_0^\\infty x e^{-x}\\,dx = \\Gamma(2) = 1! = 1$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area bounded by the curve $y = \\sqrt{x}$, the $y$-axis, and the line $y = 2$ is $\\frac{8}{3}\\,\\text{sq units}$.",
    reason: "Integrating with respect to $y$ gives $\\int_0^2 x\\,dy = \\int_0^2 y^2\\,dy = \\left[\\frac{y^3}{3}\\right]_0^2 = \\frac{8}{3}$.",
    correctAnswer: 0,
    explanation: "Since $y = \\sqrt{x} \\implies x = y^2$, integrating along the $y$-axis from $y=0$ to $y=2$ yields $\\int_0^2 y^2\\,dy = \\frac{8}{3}$. Both Assertion and Reason are true."
  }
];

const mcqQuestions = [
  {
    question: "The area bounded by the curve $y = x(x-1)(x-2)$ and the $x$-axis is:",
    options: [
      "$\\frac{1}{2}\\,\\text{sq units}$",
      "$\\frac{1}{4}\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$",
      "$\\frac{3}{4}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The roots are $x = 0, 1, 2$. By symmetry about $(1,0)$, the area is $2\\int_0^1 (x^3 - 3x^2 + 2x)\\,dx = 2\\left[\\frac{x^4}{4} - x^3 + x^2\\right]_0^1 = 2\\left(\\frac{1}{4} - 1 + 1\\right) = 2 \\times \\frac{1}{4} = \\frac{1}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = \\frac{1}{x}$, the $x$-axis, and the vertical lines $x = 1$ and $x = e^2$ is:",
    options: [
      "$2\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$",
      "$e^2\\,\\text{sq units}$",
      "$(e^2 - 1)\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "$\\text{Area} = \\int_1^{e^2} \\frac{1}{x}\\,dx = [\\ln x]_1^{e^2} = \\ln(e^2) - \\ln 1 = 2 - 0 = 2\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by the curve $y = 4 - x^2$ and the line $y = 0$ is:",
    options: [
      "$\\frac{32}{3}\\,\\text{sq units}$",
      "$\\frac{16}{3}\\,\\text{sq units}$",
      "$8\\,\\text{sq units}$",
      "$\\frac{64}{3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Roots are $x = -2$ and $x = 2$. Area is $\\int_{-2}^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = 2\\left(\\frac{16}{3}\\right) = \\frac{32}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = \\sin 2x$, the $x$-axis, and the ordinates $x = 0$ and $x = \\frac{\\pi}{2}$ is:",
    options: [
      "$1\\,\\text{sq unit}$",
      "$2\\,\\text{sq units}$",
      "$\\frac{1}{2}\\,\\text{sq units}$",
      "$0\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "For $x \\in [0, \\pi/2]$, $2x \\in [0, \\pi]$, so $\\sin 2x \\ge 0$. Area is $\\int_0^{\\pi/2} \\sin 2x\\,dx = \\left[-\\frac{\\cos 2x}{2}\\right]_0^{\\pi/2} = -\\frac{1}{2}(\\cos\\pi - \\cos 0) = -\\frac{1}{2}(-1 - 1) = 1\\,\\text{sq unit}$."
  },
  {
    question: "The area bounded by the parabola $y = 2x - x^2$ and the $x$-axis is:",
    options: [
      "$\\frac{4}{3}\\,\\text{sq units}$",
      "$\\frac{2}{3}\\,\\text{sq units}$",
      "$\\frac{8}{3}\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Roots are $x = 0$ and $x = 2$. $\\text{Area} = \\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}\\,\\text{sq units}$."
  },
  {
    question: "The area under the curve $y = \\cos x$ between $x = 0$ and $x = 2\\pi$ and the $x$-axis is:",
    options: [
      "$4\\,\\text{sq units}$",
      "$0\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$",
      "$8\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The curve has 4 symmetric quarter-cycles of area $1$ each: $\\text{Area} = \\int_0^{2\\pi} |\\cos x|\\,dx = 4 \\int_0^{\\pi/2} \\cos x\\,dx = 4(1) = 4\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = x^3 - x$ and the $x$-axis is:",
    options: [
      "$\\frac{1}{2}\\,\\text{sq units}$",
      "$\\frac{1}{4}\\,\\text{sq units}$",
      "$1\\,\\text{sq unit}$",
      "$0\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "Roots are $x = -1, 0, 1$. By symmetry, $\\text{Area} = 2\\int_0^1 (x - x^3)\\,dx = 2\\left[\\frac{x^2}{2} - \\frac{x^4}{4}\\right]_0^1 = 2\\left(\\frac{1}{2} - \\frac{1}{4}\\right) = 2\\left(\\frac{1}{4}\\right) = \\frac{1}{2}\\,\\text{sq units}$."
  },
  {
    question: "The area enclosed between $y = \\frac{1}{\\sqrt{x}}$, the $x$-axis, and the lines $x = 1$ and $x = 9$ is:",
    options: [
      "$4\\,\\text{sq units}$",
      "$2\\,\\text{sq units}$",
      "$8\\,\\text{sq units}$",
      "$3\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "$\\text{Area} = \\int_1^9 x^{-1/2}\\,dx = [2\\sqrt{x}]_1^9 = 2(3 - 1) = 4\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by $y = |x - 1|$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is:",
    options: [
      "$1\\,\\text{sq unit}$",
      "$2\\,\\text{sq units}$",
      "$\\frac{1}{2}\\,\\text{sq units}$",
      "$\\frac{3}{2}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "The region consists of two right-angled triangles of base $1$ and height $1$: $\\text{Area} = 2 \\times \\left(\\frac{1}{2} \\times 1 \\times 1\\right) = 1\\,\\text{sq unit}$."
  },
  {
    question: "The area bounded by $y = 3^x$, the coordinate axes, and the line $x = 2$ is:",
    options: [
      "$\\frac{8}{\\ln 3}\\,\\text{sq units}$",
      "$\\frac{9}{\\ln 3}\\,\\text{sq units}$",
      "$8\\ln 3\\,\\text{sq units}$",
      "$\\frac{4}{\\ln 3}\\,\\text{sq units}$"
    ],
    correctAnswer: 0,
    explanation: "$\\text{Area} = \\int_0^2 3^x\\,dx = \\left[\\frac{3^x}{\\ln 3}\\right]_0^2 = \\frac{3^2 - 3^0}{\\ln 3} = \\frac{9 - 1}{\\ln 3} = \\frac{8}{\\ln 3}\\,\\text{sq units}$."
  }
];

const numQuestions = [
  {
    question: "The area of the region bounded by the curve $y = 9 - x^2$ and the $x$-axis is $A$. Find the value of $A$:",
    correctAnswer: 36,
    explanation: "Roots are $x = \\pm 3$. $A = \\int_{-3}^3 (9 - x^2)\\,dx = 2\\left[9x - \\frac{x^3}{3}\\right]_0^3 = 2(27 - 9) = 2(18) = 36\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = x^2$, the $x$-axis, and the line $x = 3$ is $A$. Find the value of $A$:",
    correctAnswer: 9,
    explanation: "$A = \\int_0^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{3} = 9\\,\\text{sq units}$."
  },
  {
    question: "The area under the curve $y = \\sqrt{4 - x}$ from $x = 0$ to $x = 4$ is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 16,
    explanation: "$\\int_0^4 (4 - x)^{1/2}\\,dx = \\left[-\\frac{2}{3}(4 - x)^{3/2}\\right]_0^4 = 0 - \\left(-\\frac{2}{3}(4)^{3/2}\\right) = \\frac{2}{3}(8) = \\frac{16}{3}$. Thus $k = 16$."
  },
  {
    question: "The area bounded by the curve $y = x^3$, the $x$-axis, and the line $x = 2$ is $A$. Find the value of $A$:",
    correctAnswer: 4,
    explanation: "$A = \\int_0^2 x^3\\,dx = \\left[\\frac{x^4}{4}\\right]_0^2 = \\frac{16}{4} = 4\\,\\text{sq units}$."
  },
  {
    question: "The area bounded by the curve $y = 6x - x^2$ and the $x$-axis is $A$. Find the value of $A$:",
    correctAnswer: 36,
    explanation: "Roots are $x = 0$ and $x = 6$. $A = \\int_0^6 (6x - x^2)\\,dx = \\left[3x^2 - \\frac{x^3}{3}\\right]_0^6 = 3(36) - \\frac{216}{3} = 108 - 72 = 36\\,\\text{sq units}$."
  },
  {
    question: "If the area bounded by the curve $y = k x^2$ ($k > 0$), the $x$-axis, and the line $x = 3$ is $18\\,\\text{sq units}$, find the value of $k$:",
    correctAnswer: 2,
    explanation: "$\\text{Area} = \\int_0^3 k x^2\\,dx = k \\left[\\frac{x^3}{3}\\right]_0^3 = k \\times 9 = 18 \\implies k = 2$."
  },
  {
    question: "The area under the curve $y = 3x^2 + 2x$ between $x = 1$ and $x = 3$ is $A$. Find the value of $A$:",
    correctAnswer: 34,
    explanation: "$A = \\int_1^3 (3x^2 + 2x)\\,dx = [x^3 + x^2]_1^3 = (27 + 9) - (1 + 1) = 36 - 2 = 34\\,\\text{sq units}$."
  },
  {
    question: "The area of the region bounded by $y = |x|$, the $x$-axis, and the lines $x = -4$ and $x = 4$ is $A$. Find the value of $A$:",
    correctAnswer: 16,
    explanation: "The region consists of two identical triangles of base $4$ and height $4$: $A = 2 \\times \\left(\\frac{1}{2} \\times 4 \\times 4\\right) = 16\\,\\text{sq units}$."
  },
  {
    question: "The area under the curve $y = \\sqrt{2x}$ from $x = 0$ to $x = 2$ is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 8,
    explanation: "$\\int_0^2 \\sqrt{2} x^{1/2}\\,dx = \\sqrt{2} \\left[\\frac{2}{3}x^{3/2}\\right]_0^2 = \\sqrt{2} \\times \\frac{2}{3} \\times (2\\sqrt{2}) = \\frac{8}{3}$. Thus $k = 8$."
  },
  {
    question: "The area bounded by the curve $y = x^2 - 4x + 3$ and the $x$-axis between its roots is $\\frac{k}{3}$. Find the integer value of $k$:",
    correctAnswer: 4,
    explanation: "Roots are $x = 1$ and $x = 3$. $\\text{Area} = \\int_1^3 -(x^2 - 4x + 3)\\,dx = \\frac{1}{6}(3 - 1)^3 = \\frac{8}{6} = \\frac{4}{3}$. Thus $k = 4$."
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
