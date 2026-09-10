// scripts/data_jee_integrals_subtopic1.js
// Subtopic 1: Definite integrals (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic1Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "The value of the limit $\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{r}{n^2 + r^2}$ is equal to:",
    options: [
      "$\\frac{1}{2} \\ln 2$",
      "$\\ln 2$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{1}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Rewriting the sum as a Riemann integral: $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{r/n}{1 + (r/n)^2} = \\int_0^1 \\frac{x}{1 + x^2} dx = \\left[ \\frac{1}{2} \\ln(1 + x^2) \\right]_0^1 = \\frac{1}{2} \\ln 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The value of the definite integral $\\int_0^2 |x^2 - 1| dx$ is:",
    options: [
      "$2$",
      "$\\frac{4}{3}$",
      "$\\frac{8}{3}$",
      "$\\frac{5}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Since $x^2 - 1 \\le 0$ on $[0, 1]$ and $x^2 - 1 \\ge 0$ on $[1, 2]$, split the integral: $\\int_0^1 (1 - x^2) dx + \\int_1^2 (x^2 - 1) dx = \\left[ x - \\frac{x^3}{3} \\right]_0^1 + \\left[ \\frac{x^3}{3} - x \\right]_1^2 = \\left(1 - \\frac{1}{3}\\right) + \\left(\\left(\\frac{8}{3} - 2\\right) - \\left(\\frac{1}{3} - 1\\right)\\right) = \\frac{2}{3} + \\frac{2}{3} - \\left(-\\frac{2}{3}\\right) = 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^3 \\lfloor x \\rfloor dx$, where $\\lfloor \\cdot \\rfloor$ denotes the greatest integer function, is:",
    options: [
      "$3$",
      "$6$",
      "$\\frac{9}{2}$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "Split the integral into unit intervals: $\\int_0^1 0 dx + \\int_1^2 1 dx + \\int_2^3 2 dx = 0 + 1(1) + 2(1) = 3$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\lim_{n \\to \\infty} \\left( \\frac{1}{n+1} + \\frac{1}{n+2} + \\dots + \\frac{1}{2n} \\right)$ is:",
    options: [
      "$\\ln 2$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\ln 3$"
    ],
    correctAnswer: 0,
    explanation: "Write the sum as $\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{1}{n + r} = \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1 + r/n} = \\int_0^1 \\frac{1}{1 + x} dx = [\\ln(1 + x)]_0^1 = \\ln 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $\\int_0^1 \\frac{x^4(1 - x)^4}{1 + x^2} dx = \\frac{22}{7} - \\pi$, then the value of the integral is strictly:",
    options: [
      "positive",
      "negative",
      "zero",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "For all $x \\in (0, 1)$, the integrand $\\frac{x^4(1 - x)^4}{1 + x^2}$ is strictly positive. Hence the definite integral must be strictly positive, which historically proves that $\\frac{22}{7} > \\pi$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The value of the integral $\\int_{-2}^2 |x + 1| dx$ is:",
    options: [
      "$5$",
      "$4$",
      "$6$",
      "$\\frac{9}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Split at $x = -1$: $\\int_{-2}^{-1} -(x + 1) dx + \\int_{-1}^2 (x + 1) dx = \\left[ -\\frac{x^2}{2} - x \\right]_{-2}^{-1} + \\left[ \\frac{x^2}{2} + x \\right]_{-1}^2 = \\left(\\frac{1}{2} - 0\\right) + \\left(4 - \\left(-\\frac{1}{2}\\right)\\right) = \\frac{1}{2} + \\frac{9}{2} = 5$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^{\\pi} |\\cos x| dx$ is equal to:",
    options: [
      "$2$",
      "$0$",
      "$1$",
      "$\\pi$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\cos x \\ge 0$ on $[0, \\pi/2]$ and $\\cos x \\le 0$ on $[\\pi/2, \\pi]$, the integral is $\\int_0^{\\pi/2} \\cos x dx + \\int_{\\pi/2}^\\pi (-\\cos x) dx = [\\sin x]_0^{\\pi/2} - [\\sin x]_{\\pi/2}^\\pi = 1 - 0 - (0 - 1) = 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^1 \\frac{dx}{\\sqrt{1 - x^2}}$ is:",
    options: [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$1$",
      "$\\frac{\\pi}{4}$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_0^1 \\frac{dx}{\\sqrt{1 - x^2}} = [\\arcsin(x)]_0^1 = \\arcsin(1) - \\arcsin(0) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The limit $\\lim_{n \\to \\infty} \\frac{1^p + 2^p + \\dots + n^p}{n^{p+1}}$ for $p > -1$ is equal to:",
    options: [
      "$\\frac{1}{p + 1}$",
      "$\\frac{1}{p}$",
      "$\\frac{1}{p - 1}$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Rewriting the sum: $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\left(\\frac{r}{n}\\right)^p = \\int_0^1 x^p dx = \\left[ \\frac{x^{p+1}}{p + 1} \\right]_0^1 = \\frac{1}{p + 1}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^{2\\pi} \\sin^2(x) dx$ is:",
    options: [
      "$\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Using $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$: $\\int_0^{2\\pi} \\frac{1 - \\cos(2x)}{2} dx = \\left[ \\frac{x}{2} - \\frac{\\sin(2x)}{4} \\right]_0^{2\\pi} = \\pi - 0 = \\pi$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{n}{n^2 + r^2} = \\frac{\\pi}{4}$.\nReason (R): $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n f\\left(\\frac{r}{n}\\right) = \\int_0^1 f(x) dx$, and here $f(x) = \\frac{1}{1 + x^2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Rewriting $\\frac{n}{n^2 + r^2} = \\frac{1}{n} \\frac{1}{1 + (r/n)^2}$. As $n \\to \\infty$, the sum converts to the Riemann integral $\\int_0^1 \\frac{1}{1 + x^2} dx = [\\arctan x]_0^1 = \\frac{\\pi}{4}$. Both (A) and (R) are true and (R) is the exact justification.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The value of $\\int_0^1 \\{x\\} dx$ is $\\frac{1}{2}$, where $\\{x\\}$ denotes the fractional part of $x$.\nReason (R): For $x \\in (0, 1)$, $\\lfloor x \\rfloor = 0$, hence $\\{x\\} = x - \\lfloor x \\rfloor = x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "On the interval $(0, 1)$, $\\lfloor x \\rfloor = 0$, so $\\{x\\} = x$. Thus $\\int_0^1 \\{x\\} dx = \\int_0^1 x dx = \\frac{1}{2}$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^{10} (x - \\lfloor x \\rfloor) dx = 5$.\nReason (R): The fractional part function $f(x) = x - \\lfloor x \\rfloor = \\{x\\}$ is periodic with period $1$, and $\\int_0^{nT} f(x) dx = n \\int_0^T f(x) dx$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\{x\\}$ is periodic with period $T = 1$, $\\int_0^{10} \\{x\\} dx = 10 \\int_0^1 x dx = 10 \\times \\frac{1}{2} = 5$. Thus both statements are true and Reason directly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $f(x) \\ge 0$ for all $x \\in [a, b]$ and $f$ is continuous with $\\int_a^b f(x) dx = 0$, then $f(x) = 0$ for all $x \\in [a, b]$.\nReason (R): If a continuous non-negative function is strictly positive at any point $c \\in [a, b]$, then by continuity it is positive on an open subinterval containing $c$, making its integral strictly positive.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is a fundamental theorem of integration: for continuous non-negative $f$, $\\int_a^b f(x) dx = 0 \\iff f(x) = 0$ everywhere on $[a, b]$. Reason (R) provides the standard epsilon-delta continuity proof.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "medium"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The value of $\\int_{-1}^1 |x| dx$ is $1$.\nReason (R): The function $|x|$ is an even function, so $\\int_{-1}^1 |x| dx = 2\\int_0^1 x dx = 2 \\left[\\frac{x^2}{2}\\right]_0^1 = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "$|x|$ is even, so $\\int_{-1}^1 |x| dx = 2\\int_0^1 x dx = 2(1/2) = 1$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^1 \\frac{1}{1 + x^2} dx < \\int_0^1 1 dx = 1$.\nReason (R): For all $x \\in (0, 1]$, $x^2 > 0$, hence $\\frac{1}{1 + x^2} < 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By the monotonic property of definite integrals, if $f(x) < g(x)$ on $(a, b)$, then $\\int_a^b f(x) dx < \\int_a^b g(x) dx$. Here $\\frac{1}{1 + x^2} < 1$ for $x > 0$, so $\\arctan(1) = \\pi/4 < 1$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^2 (x - 1)^3 dx = 0$.\nReason (R): Setting $t = x - 1$, the limits change to $-1$ and $1$, and the integrand becomes $t^3$, which is an odd function.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "With $t = x - 1$, $dx = dt$. When $x = 0, t = -1$; when $x = 2, t = 1$. The integral is $\\int_{-1}^1 t^3 dt$. Since $t^3$ is an odd function, the integral is $0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The value of $\\int_0^{\\pi} \\sin(x) dx$ is $0$.\nReason (R): $\\sin(\\pi - x) = \\sin(x)$ for all $x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is false because $\\int_0^\\pi \\sin x dx = [-\\cos x]_0^\\pi = -(-1) - (-1) = 2 \\neq 0$. Reason (R) is a standard true trigonometric identity. Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $m \\le f(x) \\le M$ for all $x \\in [a, b]$, then $m(b - a) \\le \\int_a^b f(x) dx \\le M(b - a)$.\nReason (R): Definite integration preserves inequalities, and $\\int_a^b 1 dx = b - a$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the boundedness (mean value) property of definite integrals. Since $m \\le f(x) \\le M$, integrating each part over $[a, b]$ gives $m(b - a) \\le \\int_a^b f(x) dx \\le M(b - a)$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n e^{r/n} = e - 1$.\nReason (R): Converting to a definite integral gives $\\int_0^1 e^x dx = [e^x]_0^1 = e^1 - e^0 = e - 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The limit of the Riemann sum is $\\int_0^1 e^x dx = e - 1$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "The value of $\\int_0^2 (3x^2 - 2x + 1) dx$ is:",
    options: [],
    correctAnswer: "6",
    explanation: "Antiderivative is $x^3 - x^2 + x$. Evaluating from $0$ to $2$: $2^3 - 2^2 + 2 = 8 - 4 + 2 = 6$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^4 |x - 2| dx$ is:",
    options: [],
    correctAnswer: "4",
    explanation: "The function $|x - 2|$ represents two symmetric right triangles each of base $2$ and height $2$ from $0$ to $4$. Total area is $2 \\times \\left(\\frac{1}{2} \\times 2 \\times 2\\right) = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^k (2x - 3) dx = 4$, where $k > 0$, then the value of $k$ is:",
    options: [],
    correctAnswer: "4",
    explanation: "$\\int_0^k (2x - 3) dx = [x^2 - 3x]_0^k = k^2 - 3k$. Given $k^2 - 3k = 4 \\implies k^2 - 3k - 4 = 0 \\implies (k - 4)(k + 1) = 0$. Since $k > 0$, $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of the definite integral $\\int_0^1 \\frac{8x}{1 + x^2} dx$ is $4\\ln(2)$. If this equals $\\ln(k)$, then the value of $k$ is:",
    options: [],
    correctAnswer: "16",
    explanation: "$\\int_0^1 \\frac{8x}{1 + x^2} dx = 4 \\left[\\ln(1 + x^2)\\right]_0^1 = 4(\\ln 2 - 0) = 4\\ln 2 = \\ln(2^4) = \\ln 16$. Hence $k = 16$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of the integral $\\int_{-2}^2 (x^5 + x^3 + 3) dx$ is:",
    options: [],
    correctAnswer: "12",
    explanation: "$x^5$ and $x^3$ are odd functions, so their integrals over $[-2, 2]$ vanish. The integral simplifies to $\\int_{-2}^2 3 dx = 3(2 - (-2)) = 3(4) = 12$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{r^3}{n^3} = \\frac{1}{k}$, then the positive integer $k$ is:",
    options: [],
    correctAnswer: "4",
    explanation: "The Riemann sum converts to $\\int_0^1 x^3 dx = \\left[\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4}$. Thus $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^3 \\lfloor x^2 \\rfloor dx$ can be computed. Instead, compute $\\int_0^3 \\lfloor x \\rfloor dx + \\int_0^2 x dx$:",
    options: [],
    correctAnswer: "5",
    explanation: "$\\int_0^3 \\lfloor x \\rfloor dx = 0 + 1 + 2 = 3$. And $\\int_0^2 x dx = [x^2/2]_0^2 = 2$. The sum is $3 + 2 = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_1^3 (3x^2 - 1) dx$ is:",
    options: [],
    correctAnswer: "24",
    explanation: "Antiderivative is $x^3 - x$. Evaluating from $1$ to $3$: $(3^3 - 3) - (1^3 - 1) = (27 - 3) - 0 = 24$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^1 (ax + b) dx = 2$ and $\\int_0^2 (ax + b) dx = 6$, then the value of $a + b$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "$\\int_0^1 (ax + b) dx = \\frac{a}{2} + b = 2 \\implies a + 2b = 4$. And $\\int_0^2 (ax + b) dx = 2a + 2b = 6 \\implies a + b = 3$. Subtracting the equations: $b = 1$, and $a = 2$. Therefore $a + b = 2 + 1 = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "medium"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^1 x(1 - x)^9 dx$ is $\\frac{1}{k}$, where $k$ is an integer. The value of $k$ is:",
    options: [],
    correctAnswer: "110",
    explanation: "Substitute $u = 1 - x$, so $x = 1 - u$ and $dx = -du$. The integral becomes $\\int_0^1 (1 - u)u^9 du = \\int_0^1 (u^9 - u^{10}) du = \\frac{1}{10} - \\frac{1}{11} = \\frac{1}{110}$. Thus $k = 110$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Definite integrals",
    difficulty: "medium"
  }
];

module.exports = { subtopic1Questions };
