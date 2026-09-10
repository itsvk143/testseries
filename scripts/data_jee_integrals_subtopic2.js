// scripts/data_jee_integrals_subtopic2.js
// Subtopic 2: Fundamental theorem of calculus (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic2Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "If $f(x) = \\int_0^x t \\sin t \\, dt$, then the value of $f'\\left(\\frac{\\pi}{2}\\right)$ is:",
    options: [
      "$\\frac{\\pi}{2}$",
      "$1$",
      "$0$",
      "$\\pi$"
    ],
    correctAnswer: 0,
    explanation: "By the Fundamental Theorem of Calculus Part 1, $f'(x) = \\frac{d}{dx} \\int_0^x t \\sin t \\, dt = x \\sin x$. Evaluating at $x = \\frac{\\pi}{2}$: $f'\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi}{2} \\sin\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi}{2}(1) = \\frac{\\pi}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "Let $F(x) = \\int_1^x \\frac{\\ln t}{1 + t} dt$. The value of $F(e) + F(1/e)$ is:",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$0$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "Notice $F(1/x) = \\int_1^{1/x} \\frac{\\ln t}{1 + t} dt$. Let $t = 1/u$, then $dt = -du/u^2$: $F(1/x) = \\int_1^x \\frac{-\\ln u}{1 + 1/u} \\left(-\\frac{du}{u^2}\\right) = \\int_1^x \\frac{\\ln u}{u(u + 1)} du = \\int_1^x \\ln u \\left(\\frac{1}{u} - \\frac{1}{u+1}\\right) du = \\int_1^x \\frac{\\ln u}{u} du - F(x) = \\frac{1}{2}(\\ln x)^2 - F(x)$. Thus $F(x) + F(1/x) = \\frac{1}{2}(\\ln x)^2$. For $x = e$, $F(e) + F(1/e) = \\frac{1}{2}(\\ln e)^2 = \\frac{1}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "hard"
  },
  {
    type: "single_choice",
    question: "The value of $\\lim_{x \\to 0} \\frac{\\int_0^{x^2} \\sin\\sqrt{t} \\, dt}{x^3}$ is equal to:",
    options: [
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$",
      "$1$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "This is a $0/0$ indeterminate form. Applying L'Hôpital's rule and differentiating the numerator using Leibniz rule: $\\frac{d}{dx}\\int_0^{x^2} \\sin\\sqrt{t} dt = \\sin(\\sqrt{x^2}) \\cdot 2x = 2x\\sin x$. Derivative of denominator is $3x^2$. Thus the limit becomes $\\lim_{x \\to 0} \\frac{2x\\sin x}{3x^2} = \\frac{2}{3} \\lim_{x \\to 0} \\frac{\\sin x}{x} = \\frac{2}{3}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "If a function $f$ satisfies $\\int_0^x f(t) dt = x + \\int_x^1 t f(t) dt$, then the value of $f(1)$ is:",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{1}{e}$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "Differentiate both sides with respect to $x$: $f(x) = 1 + \\left(0 - x f(x)\\right) \\implies f(x) + x f(x) = 1 \\implies f(x)(1 + x) = 1 \\implies f(x) = \\frac{1}{1 + x}$. At $x = 1$, $f(1) = \\frac{1}{1 + 1} = \\frac{1}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "Let $g(x) = \\int_0^x (t - 1)(t - 2) dt$. The function $g(x)$ attains a local maximum at:",
    options: [
      "$x = 1$",
      "$x = 2$",
      "$x = 0$",
      "$x = \\frac{3}{2}$"
    ],
    correctAnswer: 0,
    explanation: "By FTC, $g'(x) = (x - 1)(x - 2)$. Critical points are $x = 1$ and $x = 2$. $g''(x) = 2x - 3$. At $x = 1$, $g''(1) = -1 < 0$, which corresponds to a local maximum. At $x = 2$, $g''(2) = 1 > 0$, local minimum. Thus local maximum is at $x = 1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $f(x)$ is continuous and $\\int_0^{x^2} f(t) dt = x^2(1 + x)$, then $f(4)$ is equal to:",
    options: [
      "$4$",
      "$2$",
      "$\\frac{5}{2}$",
      "$5$"
    ],
    correctAnswer: 0,
    explanation: "Let $u = x^2$. Then $x = \\sqrt{u}$ for $x > 0$. The equation is $\\int_0^{x^2} f(t) dt = x^2 + x^3$. Differentiating both sides with respect to $x$: $f(x^2) \\cdot 2x = 2x + 3x^2 \\implies f(x^2) = 1 + \\frac{3}{2}x$. For $x^2 = 4$, we have $x = 2$. Thus $f(4) = 1 + \\frac{3}{2}(2) = 1 + 3 = 4$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The points of inflection of the function $f(x) = \\int_0^x (t^2 - 4) e^t dt$ occur at:",
    options: [
      "$x = \\pm 2$",
      "$x = 2$ only",
      "$x = 0$",
      "$x = \\pm 4$"
    ],
    correctAnswer: 0,
    explanation: "First derivative is $f'(x) = (x^2 - 4)e^x$. Second derivative is $f''(x) = 2x e^x + (x^2 - 4)e^x = (x^2 + 2x - 4)e^x$. Wait, let's look at the integrand: inflection points of $F(x) = \\int_0^x g(t) dt$ occur where $F''(x) = g'(x) = 0$ changes sign. For $f(x)$, $f'(x) = (x^2 - 4)e^x$. So $f''(x) = (x^2 + 2x - 4)e^x$. If $f(x) = \\int_0^x (t - 2)^2(t + 2) dt$, etc. Let's make the question clean: 'The critical points of the function $f(x) = \\int_0^x (t^2 - 4) dt$ occur at:' then $f'(x) = x^2 - 4 = 0 \\implies x = \\pm 2$! Options: $x = \\pm 2$. Correct answer: $x = \\pm 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $f(x) = \\int_2^x \\frac{dt}{\\sqrt{1 + t^4}}$, then $(f^{-1})'(0)$ is equal to:",
    options: [
      "$\\sqrt{17}$",
      "$\\frac{1}{\\sqrt{17}}$",
      "$2$",
      "$\\sqrt{5}$"
    ],
    correctAnswer: 0,
    explanation: "Note that $f(2) = \\int_2^2 \\frac{dt}{\\sqrt{1 + t^4}} = 0$, so $f^{-1}(0) = 2$. By the derivative of inverse functions, $(f^{-1})'(0) = \\frac{1}{f'(f^{-1}(0))} = \\frac{1}{f'(2)}$. By FTC, $f'(x) = \\frac{1}{\\sqrt{1 + x^4}}$, so $f'(2) = \\frac{1}{\\sqrt{1 + 16}} = \\frac{1}{\\sqrt{17}}$. Hence $(f^{-1})'(0) = \\frac{1}{1/\\sqrt{17}} = \\sqrt{17}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "hard"
  },
  {
    type: "single_choice",
    question: "The value of $\\lim_{x \\to 0} \\frac{1}{x} \\int_0^x \\cos(t^2) dt$ is:",
    options: [
      "$1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$\\pi$"
    ],
    correctAnswer: 0,
    explanation: "This is the definition of the derivative of $F(x) = \\int_0^x \\cos(t^2) dt$ at $x = 0$: $\\lim_{x \\to 0} \\frac{F(x) - F(0)}{x - 0} = F'(0) = \\cos(0^2) = 1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "If $\\int_0^x f(t) dt = x \\cos(\\pi x)$, then the value of $f(1)$ is:",
    options: [
      "$-1$",
      "$1$",
      "$0$",
      "$\\pi$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating both sides with respect to $x$: $f(x) = \\cos(\\pi x) - \\pi x \\sin(\\pi x)$. Evaluating at $x = 1$: $f(1) = \\cos(\\pi) - \\pi(1)\\sin(\\pi) = -1 - 0 = -1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $F(x) = \\int_1^x \\frac{1}{t} dt$ for $x > 0$, then $F(xy) = F(x) + F(y)$.\nReason (R): By the Fundamental Theorem of Calculus, $F'(x) = \\frac{1}{x}$, which uniquely characterizes logarithmic functions.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "$F(x) = \\ln x$. The derivative $F'(x) = 1/x$, and for any constant $y > 0$, $\\frac{d}{dx}(F(xy) - F(x)) = \\frac{y}{xy} - \\frac{1}{x} = 0$, meaning $F(xy) - F(x)$ is a constant, which evaluated at $x = 1$ gives $F(y)$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $f$ is continuous on $[a, b]$, then the function $F(x) = \\int_a^x f(t) dt$ is differentiable on $(a, b)$.\nReason (R): The Fundamental Theorem of Calculus guarantees that $F'(x) = f(x)$ whenever $f$ is continuous at $x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The first part of the Fundamental Theorem of Calculus establishes that continuity of $f$ implies differentiability of its accumulation function $F(x)$, with $F'(x) = f(x)$. Both statements are true and Reason directly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\frac{d}{dx} \\left( \\int_0^x e^{t^2} dt \\right) = e^{x^2}$.\nReason (R): For any continuous function $g$, $\\frac{d}{dx} \\int_a^x g(t) dt = g(x)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Applying the FTC Part 1 directly with $g(t) = e^{t^2}$, which is continuous everywhere, gives $\\frac{d}{dx}\\int_0^x e^{t^2} dt = e^{x^2}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The function $F(x) = \\int_0^x |t| dt$ is not differentiable at $x = 0$.\nReason (R): The integrand $|t|$ is not differentiable at $t = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is FALSE! Since $|t|$ is continuous at $t = 0$, by the Fundamental Theorem of Calculus, $F'(x) = |x|$ exists for all $x$, including $x = 0$ where $F'(0) = |0| = 0$. Differentiability of the integrand is NOT required, only continuity! Reason (R) is TRUE (since $|t|$ has a corner at $t = 0$). Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "medium"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $f(x) = \\int_0^x (t - 1) dt$, then $f(x)$ has a local minimum at $x = 1$.\nReason (R): $f'(1) = 0$ and $f''(1) = 1 > 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "$f'(x) = x - 1$. Critical point is $x = 1$. $f''(x) = 1 > 0$. By the second derivative test, $x = 1$ is a local minimum. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\lim_{x \\to 0} \\frac{\\int_0^x \\sin(t) dt}{x^2} = \\frac{1}{2}$.\nReason (R): Using L'Hôpital's rule and FTC, $\\lim_{x \\to 0} \\frac{\\sin x}{2x} = \\frac{1}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Differentiating the numerator $\\frac{d}{dx}\\int_0^x \\sin t dt = \\sin x$, and the denominator gives $2x$. The limit is $\\lim_{x \\to 0} \\frac{\\sin x}{2x} = \\frac{1}{2}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $\\int_a^b f(t) dt = F(b) - F(a)$, then $F'(t) = f(t)$ must hold for all $t \\in [a, b]$.\nReason (R): This is the statement of the Second Fundamental Theorem of Calculus.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The second fundamental theorem of calculus (Newton-Leibniz formula) states that if $f$ is continuous on $[a, b]$ and $F$ is an antiderivative of $f$ (so $F' = f$), then $\\int_a^b f(t) dt = F(b) - F(a)$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $F(x) = \\int_0^x \\frac{1}{1 + t^2} dt$, then $F(x)$ is strictly increasing on $\\mathbb{R}$.\nReason (R): $F'(x) = \\frac{1}{1 + x^2} > 0$ for all $x \\in \\mathbb{R}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $F'(x) = \\frac{1}{1 + x^2} > 0$ everywhere, $F(x) = \\arctan x$ is strictly increasing on $\\mathbb{R}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\frac{d}{dx} \\left( \\int_x^1 \\cos(t) dt \\right) = \\cos(x)$.\nReason (R): $\\int_x^1 \\cos(t) dt = -\\int_1^x \\cos(t) dt$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is FALSE because $\\frac{d}{dx}\\int_x^1 \\cos(t) dt = -\\frac{d}{dx}\\int_1^x \\cos(t) dt = -\\cos(x)$, NOT $\\cos(x)$! Reason (R) is TRUE because reversing limits introduces a negative sign. Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): If $f$ is continuous, then $\\lim_{h \\to 0} \\frac{1}{h} \\int_x^{x+h} f(t) dt = f(x)$.\nReason (R): By the mean value theorem for integrals, $\\int_x^{x+h} f(t) dt = h f(c)$ for some $c$ between $x$ and $x + h$, and as $h \\to 0$, $c \\to x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The expression is the definition of the derivative of the accumulation function, which equals $f(x)$. The mean value theorem for integrals provides the exact standard proof: $\\lim_{h \\to 0} f(c) = f(x)$ by continuity. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "medium"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "If $f(x) = \\int_0^x (2t + 3) dt$, then the value of $f'(4)$ is:",
    options: [],
    correctAnswer: "11",
    explanation: "By FTC, $f'(x) = 2x + 3$. Thus $f'(4) = 2(4) + 3 = 11$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\lim_{x \\to 0} \\frac{\\int_0^x \\tan(t) dt}{x^2}$ multiplied by $2$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "By L'Hôpital's rule: $\\lim_{x \\to 0} \\frac{\\tan x}{2x} = \\frac{1}{2}$. Multiplying by $2$ gives $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $F(x) = \\int_1^x (3t^2 - 6t) dt$, then the value of $x$ where $F'(x) = 0$ with $x > 0$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$F'(x) = 3x^2 - 6x = 3x(x - 2) = 0$. Since $x > 0$, $x = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^x f(t) dt = x^2 + 2x$, then the value of $f(3)$ is:",
    options: [],
    correctAnswer: "8",
    explanation: "Differentiating both sides with respect to $x$: $f(x) = 2x + 2$. Thus $f(3) = 2(3) + 2 = 8$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $f(x) = \\int_0^x e^{t^2} dt$, then the value of $\\frac{f''(0)}{f'(0)}$ is:",
    options: [],
    correctAnswer: "0",
    explanation: "$f'(x) = e^{x^2} \\implies f'(0) = 1$. $f''(x) = 2x e^{x^2} \\implies f''(0) = 0$. Thus $\\frac{0}{1} = 0$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "Let $f(x) = \\int_1^x \\frac{1}{t} dt$. The value of $f(e^3)$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "$f(x) = \\ln x$. Thus $f(e^3) = \\ln(e^3) = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^x (at + b) dt = 3x^2 + 4x$, then the value of $a + b$ is:",
    options: [],
    correctAnswer: "10",
    explanation: "Differentiating with respect to $x$: $ax + b = 6x + 4$. Comparing coefficients gives $a = 6, b = 4$. Thus $a + b = 10$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\lim_{h \\to 0} \\frac{1}{h} \\int_2^{2+h} (3t^2 + 1) dt$ is:",
    options: [],
    correctAnswer: "13",
    explanation: "By the definition of derivative of the integral, this limit equals the integrand evaluated at $t = 2$: $3(2^2) + 1 = 3(4) + 1 = 13$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $f(x) = \\int_0^x (t - 2)^2 dt$, then the value of $x$ for which $f''(x) = 0$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$f'(x) = (x - 2)^2$. Then $f''(x) = 2(x - 2) = 0 \\implies x = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^x f(t) dt = x^3 - 3x^2 + 2x$, then the sum of the roots of $f(x) = 0$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "Differentiating gives $f(x) = 3x^2 - 6x + 2$. The sum of the roots of this quadratic equation is $-\\frac{-6}{3} = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  }
];

// Quick check of question 7: ensure the question text matches options cleanly
subtopic2Questions[6].question = "The critical points of the function $f(x) = \\int_0^x (t^2 - 4) dt$ occur at:";

module.exports = { subtopic2Questions };
