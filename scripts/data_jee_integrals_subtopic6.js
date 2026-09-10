// scripts/data_jee_integrals_subtopic6.js
// Subtopic 6: Properties of definite integrals (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic6Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "The value of the definite integral $\\int_0^{\\pi/2} \\frac{\\sin^{2024}(x)}{\\sin^{2024}(x) + \\cos^{2024}(x)} dx$ is:",
    options: [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Let $I = \\int_0^{\\pi/2} \\frac{\\sin^{2024}(x)}{\\sin^{2024}(x) + \\cos^{2024}(x)} dx$. Using King's property $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$, we have $I = \\int_0^{\\pi/2} \\frac{\\cos^{2024}(x)}{\\cos^{2024}(x) + \\sin^{2024}(x)} dx$. Adding both expressions: $2I = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^{\\pi/4} \\ln(1 + \\tan x) dx$ is equal to:",
    options: [
      "$\\frac{\\pi}{8} \\ln 2$",
      "$\\frac{\\pi}{4} \\ln 2$",
      "$\\frac{\\pi}{2} \\ln 2$",
      "$\\ln 2$"
    ],
    correctAnswer: 0,
    explanation: "Using King's property: $I = \\int_0^{\\pi/4} \\ln(1 + \\tan(\\frac{\\pi}{4} - x)) dx = \\int_0^{\\pi/4} \\ln\\left(1 + \\frac{1 - \\tan x}{1 + \\tan x}\\right) dx = \\int_0^{\\pi/4} \\ln\\left(\\frac{2}{1 + \\tan x}\\right) dx = \\int_0^{\\pi/4} (\\ln 2 - \\ln(1 + \\tan x)) dx = \\frac{\\pi}{4}\\ln 2 - I$. Thus $2I = \\frac{\\pi}{4}\\ln 2 \\implies I = \\frac{\\pi}{8}\\ln 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The value of the definite integral $\\int_{-\\pi/2}^{\\pi/2} (x^3 + x\\cos x + \\tan^5 x + 1) dx$ is:",
    options: [
      "$\\pi$",
      "$0$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$"
    ],
    correctAnswer: 0,
    explanation: "The functions $x^3, x\\cos x$, and $\\tan^5 x$ are all odd functions because $(-x)^3 = -x^3, (-x)\\cos(-x) = -x\\cos x$, and $\\tan^5(-x) = -\\tan^5 x$. Their integrals over $[-\\pi/2, \\pi/2]$ vanish. The integral reduces to $\\int_{-\\pi/2}^{\\pi/2} 1 dx = \\frac{\\pi}{2} - \\left(-\\frac{\\pi}{2}\\right) = \\pi$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_2^4 \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{6 - x}} dx$ is:",
    options: [
      "$1$",
      "$2$",
      "$\\frac{1}{2}$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "Let $I = \\int_2^4 \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{6 - x}} dx$. Using King's property ($a + b = 2 + 4 = 6$), replace $x$ by $6 - x$: $I = \\int_2^4 \\frac{\\sqrt{6 - x}}{\\sqrt{6 - x} + \\sqrt{x}} dx$. Adding the two gives $2I = \\int_2^4 1 dx = 4 - 2 = 2 \\implies I = 1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^{\\pi} x \\sin x \\, dx$ can be evaluated by King's property. Its value is:",
    options: [
      "$\\pi$",
      "$\\frac{\\pi}{2}$",
      "$2\\pi$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Let $I = \\int_0^\\pi x \\sin x dx$. Replacing $x$ by $\\pi - x$: $I = \\int_0^\\pi (\\pi - x)\\sin(\\pi - x) dx = \\pi \\int_0^\\pi \\sin x dx - I$. Thus $2I = \\pi [-\\cos x]_0^\\pi = \\pi (1 - (-1)) = 2\\pi \\implies I = \\pi$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $f$ is a continuous function such that $f(2a - x) = f(x)$, then $\\int_0^{2a} f(x) dx$ is equal to:",
    options: [
      "$2 \\int_0^a f(x) dx$",
      "$0$",
      "$\\int_0^a f(x) dx$",
      "$4 \\int_0^a f(x) dx$"
    ],
    correctAnswer: 0,
    explanation: "By Queen's property: $\\int_0^{2a} f(x) dx = \\int_0^a f(x) dx + \\int_0^a f(2a - x) dx$. Since $f(2a - x) = f(x)$, this becomes $\\int_0^a f(x) dx + \\int_0^a f(x) dx = 2 \\int_0^a f(x) dx$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} dx$ is:",
    options: [
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$",
      "$\\pi^2$",
      "$\\frac{\\pi}{4}$"
    ],
    correctAnswer: 0,
    explanation: "Using King's property: $2I = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x} dx$. Substitute $t = \\cos x, dt = -\\sin x dx$: $2I = \\pi \\int_{-1}^1 \\frac{dt}{1 + t^2} = \\pi [\\arctan t]_{-1}^1 = \\pi \\left(\\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right)\\right) = \\frac{\\pi^2}{2} \\implies I = \\frac{\\pi^2}{4}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If $f(x)$ is periodic with period $T$, then $\\int_a^{a + nT} f(x) dx$ is equal to:",
    options: [
      "$n \\int_0^T f(x) dx$",
      "$\\int_0^{nT} f(x) dx + a$",
      "$n \\int_a^{a+T} f(x) dx + a$",
      "$\\int_0^T f(x) dx$"
    ],
    correctAnswer: 0,
    explanation: "A standard property of periodic functions states that the integral over any interval of length $T$ is independent of the starting point $a$, so $\\int_a^{a+nT} f(x) dx = n \\int_a^{a+T} f(x) dx = n \\int_0^T f(x) dx$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_{-1}^1 \\ln\\left(\\frac{2 - x}{2 + x}\\right) dx$ is:",
    options: [
      "$0$",
      "$1$",
      "$\\ln 2$",
      "$2\\ln 3$"
    ],
    correctAnswer: 0,
    explanation: "Let $f(x) = \\ln\\left(\\frac{2 - x}{2 + x}\\right)$. Then $f(-x) = \\ln\\left(\\frac{2 - (-x)}{2 + (-x)}\\right) = \\ln\\left(\\frac{2 + x}{2 - x}\\right) = -\\ln\\left(\\frac{2 - x}{2 + x}\\right) = -f(x)$. Since $f(x)$ is an odd function, its integral over $[-1, 1]$ is $0$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The value of $\\int_0^{\\pi/2} \\ln(\\sin x) dx$ is equal to:",
    options: [
      "$-\\frac{\\pi}{2} \\ln 2$",
      "$\\frac{\\pi}{2} \\ln 2$",
      "$-\\pi \\ln 2$",
      "$\\pi \\ln 2$"
    ],
    correctAnswer: 0,
    explanation: "Let $I = \\int_0^{\\pi/2} \\ln(\\sin x) dx = \\int_0^{\\pi/2} \\ln(\\cos x) dx$. Adding them: $2I = \\int_0^{\\pi/2} \\ln(\\sin x \\cos x) dx = \\int_0^{\\pi/2} \\ln\\left(\\frac{\\sin 2x}{2}\\right) dx = \\int_0^{\\pi/2} \\ln(\\sin 2x) dx - \\frac{\\pi}{2}\\ln 2$. Substituting $2x = t$, $\\int_0^{\\pi/2} \\ln(\\sin 2x) dx = \\frac{1}{2}\\int_0^\\pi \\ln(\\sin t) dt = \\int_0^{\\pi/2} \\ln(\\sin t) dt = I$. Thus $2I = I - \\frac{\\pi}{2}\\ln 2 \\implies I = -\\frac{\\pi}{2}\\ln 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "hard"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$.\nReason (R): The substitution $t = a + b - x$ changes $dx$ to $-dt$, swapping the limits from $a, b$ to $b, a$, which preserves the value of the integral.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is King's property. The substitution $t = a + b - x$ yields $\\int_b^a f(t)(-dt) = \\int_a^b f(t) dt = \\int_a^b f(a + b - x) dx$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_{-a}^a f(x) dx = 0$ whenever $f(-x) = -f(x)$ for all $x \\in [-a, a]$.\nReason (R): For an odd function, the signed areas on $[-a, 0]$ and $[0, a]$ are equal in magnitude and opposite in sign.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By property of odd functions, $\\int_{-a}^0 f(x) dx = -\\int_0^a f(x) dx$, so their sum is $0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^{\\pi} \\sin^3(x) dx = 2 \\int_0^{\\pi/2} \\sin^3(x) dx$.\nReason (R): $\\sin^3(\\pi - x) = (\\sin x)^3 = \\sin^3(x)$, satisfying $f(2a - x) = f(x)$ with $2a = \\pi$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By Queen's property, if $f(\\pi - x) = f(x)$, then $\\int_0^\\pi f(x) dx = 2 \\int_0^{\\pi/2} f(x) dx$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^{\\pi} \\cos(x) dx = 0$.\nReason (R): $\\cos(\\pi - x) = -\\cos(x)$, so by Queen's property, when $f(2a - x) = -f(x)$, $\\int_0^{2a} f(x) dx = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "With $2a = \\pi$, $\\cos(\\pi - x) = -\\cos x$. Queen's property states that if $f(2a - x) = -f(x)$, the integral over $[0, 2a]$ is zero. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The value of $\\int_0^1 \\frac{dx}{e^x + 1} + \\int_0^1 \\frac{dx}{e^{-x} + 1}$ is $1$.\nReason (R): $\\frac{1}{e^{-x} + 1} = \\frac{e^x}{e^x + 1}$, so the sum of the integrands is $\\frac{1 + e^x}{e^x + 1} = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Adding the integrands gives $\\int_0^1 1 dx = 1$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_{-\\pi/4}^{\\pi/4} \\sin(x) dx = 0$.\nReason (R): $\\sin(x)$ is an odd function and the interval $[-\\pi/4, \\pi/4]$ is symmetric about the origin.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Integral of any odd continuous function over $[-a, a]$ is $0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^{2\\pi} \\cos(x) dx = 4 \\int_0^{\\pi/2} \\cos(x) dx$.\nReason (R): $\\int_0^{2\\pi} \\cos(x) dx = [\\sin x]_0^{2\\pi} = 0$, whereas $4 \\int_0^{\\pi/2} \\cos(x) dx = 4(1) = 4$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) claims they are equal, which is FALSE ($0 \\neq 4$). Reason (R) correctly evaluates both expressions to demonstrate their difference. Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^a f(x) dx = \\int_0^a f(a - x) dx$.\nReason (R): Setting $x = a - t$, $dx = -dt$, the limits reverse from $a$ to $0$, yielding $-\\int_a^0 f(a - t) dt = \\int_0^a f(a - t) dt$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the classic King's property special case with lower limit $0$. Both statements are true and Reason provides the exact derivation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_1^3 \\frac{\\sqrt{4 - x}}{\\sqrt{x} + \\sqrt{4 - x}} dx = 1$.\nReason (R): Applying King's property with $a + b = 1 + 3 = 4$, $2I = \\int_1^3 1 dx = 2 \\implies I = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Replacing $x$ by $4 - x$ gives $I = \\int_1^3 \\frac{\\sqrt{x}}{\\sqrt{4 - x} + \\sqrt{x}} dx$. Adding them gives $2I = \\int_1^3 1 dx = 2 \\implies I = 1$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^{100\\pi} |\\sin x| dx = 200$.\nReason (R): $|\\sin x|$ has period $\\pi$, and $\\int_0^\\pi |\\sin x| dx = 2$, so $\\int_0^{100\\pi} |\\sin x| dx = 100 \\times 2 = 200$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $|\\sin x|$ is periodic with period $\\pi$, $\\int_0^{n\\pi} |\\sin x| dx = n \\int_0^\\pi \\sin x dx = n(2)$. For $n = 100$, $100 \\times 2 = 200$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "The value of $\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ is $\\frac{\\pi}{k}$. The integer $k$ is:",
    options: [],
    correctAnswer: "4",
    explanation: "By King's property, $2I = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$. Thus $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_1^5 \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{6 - x}} dx$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "By King's property, $2I = \\int_1^5 1 dx = 5 - 1 = 4 \\implies I = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^4 \\frac{x}{x + (4 - x)} dx$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$\\int_0^4 \\frac{x}{4} dx = \\left[\\frac{x^2}{8}\\right]_0^4 = \\frac{16}{8} = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_{-\\pi}^{\\pi} (\\sin^5 x + \\cos^2 x) dx$ divided by $\\pi$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "$\\sin^5 x$ is odd, so its integral is $0$. $\\cos^2 x$ is even, so $\\int_{-\\pi}^\\pi \\cos^2 x dx = 2 \\int_0^\\pi \\frac{1 + \\cos 2x}{2} dx = \\pi$. Dividing by $\\pi$ gives $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^{10} |\\sin(\\pi x)| dx = k$, then the integer $k$ is:",
    options: [],
    correctAnswer: "20",
    explanation: "Let $u = \\pi x, du = \\pi dx$. The integral becomes $\\frac{1}{\\pi} \\int_0^{10\\pi} |\\sin u| du$. Since $|\\sin u|$ has period $\\pi$, this is $\\frac{1}{\\pi} \\times 10 \\int_0^\\pi \\sin u du = \\frac{10}{\\pi} \\times 2 = \\frac{20}{\\pi}$... wait! The question says $\\int_0^{10} |\\sin(\\pi x)| dx = \\frac{20}{\\pi}$, which is not an integer! But if the integral is $\\int_0^{10\\pi} |\\sin x| dx$, then it is $10 \\times 2 = 20$ exactly! Let us update the question to: 'The value of $\\int_0^{10\\pi} |\\sin x| dx$ is:' The answer is $20$!",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_3^7 \\frac{\\ln(x)}{\\ln(x) + \\ln(10 - x)} dx$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "Here $a + b = 3 + 7 = 10$. By King's property: $2I = \\int_3^7 1 dx = 7 - 3 = 4 \\implies I = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^2 f(x) dx = 6$, and $f(2 - x) = f(x)$, then $\\int_0^2 x f(x) dx$ is:",
    options: [],
    correctAnswer: "6",
    explanation: "By King's property: $I = \\int_0^2 x f(x) dx = \\int_0^2 (2 - x)f(2 - x) dx = \\int_0^2 (2 - x)f(x) dx = 2 \\int_0^2 f(x) dx - I$. Thus $2I = 2(6) = 12 \\implies I = 6$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "medium"
  },
  {
    type: "numerical",
    question: "The value of $\\int_{-2}^2 (x^7 + 3x^3 + 5) dx$ is:",
    options: [],
    correctAnswer: "20",
    explanation: "The odd terms $x^7$ and $3x^3$ integrate to $0$ over $[-2, 2]$. The integral is $\\int_{-2}^2 5 dx = 5(2 - (-2)) = 5(4) = 20$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^{\\pi/2} (\\sin^2 x - \\cos^2 x) dx$ is:",
    options: [],
    correctAnswer: "0",
    explanation: "Using King's property, replacing $x$ by $\\pi/2 - x$: $I = \\int_0^{\\pi/2} (\\cos^2 x - \\sin^2 x) dx = -I \\implies 2I = 0 \\implies I = 0$. Alternatively, $\\int_0^{\\pi/2} -\\cos(2x) dx = [-\\frac{\\sin(2x)}{2}]_0^{\\pi/2} = 0$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^1 f(x) dx = 5$, then the value of $\\int_0^1 f(1 - x) dx$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "By King's property, $\\int_0^1 f(1 - x) dx = \\int_0^1 f(x) dx = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  }
];

// Clean up question 5 of numerical
subtopic6Questions[24].question = "The value of $\\int_0^{10\\pi} |\\sin x| dx$ is:";
subtopic6Questions[24].explanation = "Since $|\\sin x|$ is periodic with period $\\pi$, $\\int_0^{10\\pi} |\\sin x| dx = 10 \\int_0^\\pi \\sin x dx = 10 \\times 2 = 20$.";

module.exports = { subtopic6Questions };
