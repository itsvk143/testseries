// scripts/data_jee_integrals_subtopic7.js
// Subtopic 7: Trigonometric and irrational integrals (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic7Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{a^2 \\cos^2 x + b^2 \\sin^2 x}$ with $a, b > 0$ is equal to:",
    options: [
      "$\\frac{1}{ab} \\arctan\\left(\\frac{b \\tan x}{a}\\right) + C$",
      "$\\frac{1}{ab} \\arctan\\left(\\frac{a \\tan x}{b}\\right) + C$",
      "$\\frac{1}{a^2 + b^2} \\arctan(\\tan x) + C$",
      "$\\frac{a}{b} \\arctan\\left(\\frac{b \\tan x}{a}\\right) + C$"
    ],
    correctAnswer: 0,
    explanation: "Divide numerator and denominator by $\\cos^2 x$: $\\int \\frac{\\sec^2 x}{a^2 + b^2 \\tan^2 x} dx$. Substitute $t = \\tan x, dt = \\sec^2 x dx$: $\\int \\frac{dt}{a^2 + (bt)^2} = \\frac{1}{b} \\cdot \\frac{1}{a} \\arctan\\left(\\frac{bt}{a}\\right) + C = \\frac{1}{ab} \\arctan\\left(\\frac{b\\tan x}{a}\\right) + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{5 + 4\\cos x}$ evaluates to:",
    options: [
      "$\\frac{2}{3} \\arctan\\left(\\frac{1}{3} \\tan\\frac{x}{2}\\right) + C$",
      "$\\frac{1}{3} \\arctan\\left(\\frac{1}{3} \\tan\\frac{x}{2}\\right) + C$",
      "$\\frac{2}{3} \\arctan\\left(3 \\tan\\frac{x}{2}\\right) + C$",
      "$\\frac{1}{5} \\ln|5 + 4\\cos x| + C$"
    ],
    correctAnswer: 0,
    explanation: "Use the half-angle substitution $t = \\tan(x/2)$, so $\\cos x = \\frac{1 - t^2}{1 + t^2}$ and $dx = \\frac{2dt}{1 + t^2}$. The integrand becomes $\\int \\frac{2dt}{5(1 + t^2) + 4(1 - t^2)} = \\int \\frac{2dt}{9 + t^2} = 2 \\cdot \\frac{1}{3} \\arctan(t/3) + C = \\frac{2}{3} \\arctan\\left(\\frac{1}{3}\\tan\\frac{x}{2}\\right) + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{(x + 1)\\sqrt{x}}$ is equal to:",
    options: [
      "$2 \\arctan(\\sqrt{x}) + C$",
      "$\\arctan(\\sqrt{x}) + C$",
      "$\\frac{1}{2} \\arctan(\\sqrt{x}) + C$",
      "$2\\ln|x + 1| + C$"
    ],
    correctAnswer: 0,
    explanation: "Substitute $t = \\sqrt{x} \\implies t^2 = x \\implies 2t dt = dx$. The integral becomes $\\int \\frac{2t dt}{(t^2 + 1)t} = 2 \\int \\frac{dt}{t^2 + 1} = 2 \\arctan(t) + C = 2\\arctan(\\sqrt{x}) + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\tan^3 x \\sec x \\, dx$ is equal to:",
    options: [
      "$\\frac{\\sec^3 x}{3} - \\sec x + C$",
      "$\\frac{\\sec^3 x}{3} + \\sec x + C$",
      "$\\frac{\\tan^4 x}{4} + C$",
      "$\\sec^3 x - \\sec x + C$"
    ],
    correctAnswer: 0,
    explanation: "Rewrite as $\\int \\tan^2 x (\\sec x \\tan x) dx = \\int (\\sec^2 x - 1)(\\sec x \\tan x) dx$. Substitute $u = \\sec x, du = \\sec x \\tan x dx$: $\\int (u^2 - 1) du = \\frac{u^3}{3} - u + C = \\frac{\\sec^3 x}{3} - \\sec x + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{\\sin x}{\\sin(x - a)} dx$ is equal to:",
    options: [
      "$x\\cos a + \\sin a \\ln|\\sin(x - a)| + C$",
      "$x\\sin a + \\cos a \\ln|\\sin(x - a)| + C$",
      "$x\\cos a - \\sin a \\ln|\\sin(x - a)| + C$",
      "$\\cos a \\ln|\\sin(x - a)| + C$"
    ],
    correctAnswer: 0,
    explanation: "Substitute $t = x - a \\implies x = t + a$ and $dx = dt$. The integral becomes $\\int \\frac{\\sin(t + a)}{\\sin t} dt = \\int \\frac{\\sin t\\cos a + \\cos t\\sin a}{\\sin t} dt = \\int (\\cos a + \\sin a \\cot t) dt = t\\cos a + \\sin a \\ln|\\sin t| + C = (x - a)\\cos a + \\sin a \\ln|\\sin(x - a)| + C$. Absorbing $-a\\cos a$ into constant $C$: $x\\cos a + \\sin a \\ln|\\sin(x - a)| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{\\sqrt{x^2 + a^2}}$ is equal to:",
    options: [
      "$\\ln|x + \\sqrt{x^2 + a^2}| + C$",
      "$\\frac{1}{a} \\ln|x + \\sqrt{x^2 + a^2}| + C$",
      "$\\arcsin\\left(\\frac{x}{a}\\right) + C$",
      "$\\frac{1}{2a} \\ln|x^2 + a^2| + C$"
    ],
    correctAnswer: 0,
    explanation: "Standard substitution $x = a\\tan\\theta$ or hyperbolic substitution gives $\\int \\frac{dx}{\\sqrt{x^2 + a^2}} = \\ln|x + \\sqrt{x^2 + a^2}| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{\\cos x - \\sin x}{1 + \\sin 2x} dx$ is equal to:",
    options: [
      "$-\\frac{1}{\\sin x + \\cos x} + C$",
      "$\\frac{1}{\\sin x + \\cos x} + C$",
      "$\\ln|\\sin x + \\cos x| + C$",
      "$-\\ln|\\sin x + \\cos x| + C$"
    ],
    correctAnswer: 0,
    explanation: "Notice $1 + \\sin 2x = \\sin^2 x + \\cos^2 x + 2\\sin x\\cos x = (\\sin x + \\cos x)^2$. The numerator is $\\cos x - \\sin x = \\frac{d}{dx}(\\sin x + \\cos x)$. Thus the integral is $\\int \\frac{du}{u^2} = -\\frac{1}{u} + C = -\\frac{1}{\\sin x + \\cos x} + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\sqrt{\\frac{1 - x}{1 + x}} dx$ for $-1 < x < 1$ evaluates to:",
    options: [
      "$\\arcsin(x) + \\sqrt{1 - x^2} + C$",
      "$\\arcsin(x) - \\sqrt{1 - x^2} + C$",
      "$\\arccos(x) + \\sqrt{1 - x^2} + C$",
      "$\\sqrt{1 - x^2} + C$"
    ],
    correctAnswer: 0,
    explanation: "Rationalize the numerator: $\\sqrt{\\frac{1 - x}{1 + x}} = \\frac{1 - x}{\\sqrt{1 - x^2}} = \\frac{1}{\\sqrt{1 - x^2}} - \\frac{x}{\\sqrt{1 - x^2}}$. Integrating gives $\\arcsin(x) + \\sqrt{1 - x^2} + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{\\sin^2 x \\cos^2 x}$ is equal to:",
    options: [
      "$\\tan x - \\cot x + C$",
      "$\\tan x + \\cot x + C$",
      "$-\\tan x - \\cot x + C$",
      "$2\\tan 2x + C$"
    ],
    correctAnswer: 0,
    explanation: "Replace $1$ in the numerator with $\\sin^2 x + \\cos^2 x$: $\\int \\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x \\cos^2 x} dx = \\int (\\sec^2 x + \\csc^2 x) dx = \\tan x - \\cot x + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{(x - 1)\\sqrt{x + 2}}$ for $x > 1$ is equal to:",
    options: [
      "$\\frac{1}{\\sqrt{3}} \\ln\\left|\\frac{\\sqrt{x + 2} - \\sqrt{3}}{\\sqrt{x + 2} + \\sqrt{3}}\\right| + C$",
      "$\\frac{1}{2\\sqrt{3}} \\ln\\left|\\frac{\\sqrt{x + 2} - \\sqrt{3}}{\\sqrt{x + 2} + \\sqrt{3}}\\right| + C$",
      "$\\frac{2}{\\sqrt{3}} \\arctan\\left(\\frac{\\sqrt{x + 2}}{\\sqrt{3}}\\right) + C$",
      "$\\frac{1}{\\sqrt{3}} \\arctan\\left(\\frac{\\sqrt{x + 2}}{\\sqrt{3}}\\right) + C$"
    ],
    correctAnswer: 0,
    explanation: "Let $t = \\sqrt{x + 2} \\implies t^2 = x + 2 \\implies x = t^2 - 2$ and $dx = 2t dt$. The integral becomes $\\int \\frac{2t dt}{(t^2 - 3)t} = 2 \\int \\frac{dt}{t^2 - (\\sqrt{3})^2} = 2 \\cdot \\frac{1}{2\\sqrt{3}} \\ln\\left|\\frac{t - \\sqrt{3}}{t + \\sqrt{3}}\\right| + C = \\frac{1}{\\sqrt{3}} \\ln\\left|\\frac{\\sqrt{x + 2} - \\sqrt{3}}{\\sqrt{x + 2} + \\sqrt{3}}\\right| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "medium"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For integrals of the form $\\int \\frac{dx}{a + b\\cos x + c\\sin x}$, the substitution $t = \\tan\\left(\\frac{x}{2}\\right)$ transforms the integrand into a rational function of $t$.\nReason (R): Under the half-angle substitution, $\\sin x = \\frac{2t}{1 + t^2}$, $\\cos x = \\frac{1 - t^2}{1 + t^2}$, and $dx = \\frac{2dt}{1 + t^2}$, which are all rational expressions.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the universal Weierstrass substitution for trigonometric integrals. Reason (R) provides the exact rational identities. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For an integral of the form $\\int \\frac{dx}{(ax + b)\\sqrt{cx + d}}$, the substitution $cx + d = t^2$ rationalizes the integral.\nReason (R): When $cx + d = t^2$, $dx = \\frac{2t}{c} dt$ and $\\sqrt{cx + d} = t$, so $t$ cancels with the radical in the denominator.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Linear radical substitutions of the form $t^2 = cx + d$ completely eliminate fractional powers and convert the integrand into a standard rational form. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C$.\nReason (R): Multiplying and dividing by $\\sec x + \\tan x$ gives $\\int \\frac{\\sec^2 x + \\sec x\\tan x}{\\sec x + \\tan x} dx$, where the numerator is the exact derivative of the denominator.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the standard proof for the integral of $\\sec x$. Since $\\frac{d}{dx}(\\sec x + \\tan x) = \\sec x\\tan x + \\sec^2 x$, the integral has the form $\\int \\frac{du}{u} = \\ln|u| + C$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\csc x \\, dx = \\ln|\\csc x - \\cot x| + C$.\nReason (R): Multiplying and dividing by $\\csc x - \\cot x$ gives $\\frac{-\\csc x\\cot x + \\csc^2 x}{\\csc x - \\cot x}$, where the numerator is the derivative of the denominator.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\frac{d}{dx}(\\csc x - \\cot x) = -\\csc x\\cot x - (-\\csc^2 x) = \\csc^2 x - \\csc x\\cot x$, the numerator matches the derivative. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For an integral containing $\\sqrt{x^2 - a^2}$, the trigonometric substitution $x = a\\sec\\theta$ is appropriate.\nReason (R): The identity $\\sec^2\\theta - 1 = \\tan^2\\theta$ converts $\\sqrt{x^2 - a^2} = a\\tan\\theta$, rationalizing the integrand.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Trigonometric substitution using secant eliminates the radical for $|x| \\ge a$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^{\\pi/2} \\frac{dx}{1 + \\tan^3 x} = \\frac{\\pi}{4}$.\nReason (R): Writing $\\tan x = \\frac{\\sin x}{\\cos x}$ converts the integrand to $\\frac{\\cos^3 x}{\\sin^3 x + \\cos^3 x}$, which by King's property evaluates to $\\frac{\\pi}{4}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The transformation $\\frac{1}{1 + \\tan^3 x} = \\frac{\\cos^3 x}{\\sin^3 x + \\cos^3 x}$ allows applying King's property: $2I = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$.\nReason (R): The derivative of $\\arcsin\\left(\\frac{x}{a}\\right)$ is $\\frac{1}{\\sqrt{1 - (x/a)^2}} \\cdot \\frac{1}{a} = \\frac{1}{\\sqrt{a^2 - x^2}}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Direct derivative verification of the standard inverse sine integral. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The integral $\\int \\frac{dx}{\\sin x + \\cos x}$ cannot be solved by algebraic substitution.\nReason (R): We can rewrite $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$, which turns the integral into $\\frac{1}{\\sqrt{2}}\\int \\csc\\left(x + \\frac{\\pi}{4}\\right) dx$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is FALSE because the half-angle substitution $t = \\tan(x/2)$ is an algebraic substitution that completely rationalizes the integral! Reason (R) is TRUE (it provides an alternative trigonometric method). Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "medium"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\tan x \\, dx = \\ln|\\sec x| + C$.\nReason (R): $\\tan x = \\frac{\\sin x}{\\cos x} = -\\frac{-\\sin x}{\\cos x}$, so $\\int \\tan x dx = -\\ln|\\cos x| + C = \\ln|\\cos x|^{-1} + C = \\ln|\\sec x| + C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Standard integration of tangent via logarithmic derivative of cosine. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\cot x \\, dx = \\ln|\\sin x| + C$.\nReason (R): $\\cot x = \\frac{\\cos x}{\\sin x}$, where the numerator $\\cos x$ is the exact derivative of the denominator $\\sin x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\frac{d}{dx}(\\sin x) = \\cos x$, $\\int \\cot x dx = \\int \\frac{f'}{f} dx = \\ln|\\sin x| + C$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "The value of the definite integral $\\int_0^{\\pi/2} \\frac{dx}{1 + \\cos x}$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "Using $1 + \\cos x = 2\\cos^2(x/2)$, the integral becomes $\\int_0^{\\pi/2} \\frac{1}{2}\\sec^2(x/2) dx = [\\tan(x/2)]_0^{\\pi/2} = \\tan(\\pi/4) - \\tan(0) = 1 - 0 = 1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^1 \\frac{dx}{\\sqrt{1 - x^2}}$ is $\\frac{\\pi}{k}$. The integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$[\\arcsin x]_0^1 = \\arcsin 1 - \\arcsin 0 = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^{\\pi/4} \\sec^2 x \\, dx = k$, then the integer $k$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "$[\\tan x]_0^{\\pi/4} = \\tan(\\pi/4) - \\tan(0) = 1 - 0 = 1$. Thus $k = 1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^{\\pi/4} \\tan x \\sec^2 x \\, dx$ multiplied by $2$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "Let $u = \\tan x, du = \\sec^2 x dx$. The integral becomes $\\int_0^1 u du = [\\frac{u^2}{2}]_0^1 = \\frac{1}{2}$. Multiplying by $2$ gives $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^3 \\frac{dx}{\\sqrt{9 - x^2}}$ is $\\frac{\\pi}{k}$. The integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$[\\arcsin(x/3)]_0^3 = \\arcsin(1) - \\arcsin(0) = \\frac{\\pi}{2}$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^{\\pi/2} \\sin^3 x \\cos x \\, dx$ multiplied by $4$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "Let $u = \\sin x, du = \\cos x dx$. The integral is $\\int_0^1 u^3 du = [\\frac{u^4}{4}]_0^1 = \\frac{1}{4}$. Multiplying by $4$ gives $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^4 \\frac{dx}{\\sqrt{2x + 1}} = k$, then the integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$\\int_0^4 (2x + 1)^{-1/2} dx = [\\sqrt{2x + 1}]_0^4 = \\sqrt{2(4) + 1} - \\sqrt{1} = \\sqrt{9} - 1 = 3 - 1 = 2$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of the definite integral $\\int_0^{\\pi/2} \\frac{\\cos x}{1 + \\sin x} dx$ is $\\ln k$. The positive integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$[\\ln(1 + \\sin x)]_0^{\\pi/2} = \\ln(1 + 1) - \\ln(1 + 0) = \\ln 2 - 0 = \\ln 2$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^{\\pi/4} (1 + \\tan^2 x) dx = k$, then the integer $k$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "Since $1 + \\tan^2 x = \\sec^2 x$, $\\int_0^{\\pi/4} \\sec^2 x dx = [\\tan x]_0^{\\pi/4} = 1 - 0 = 1$. Thus $k = 1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^1 \\frac{x}{\\sqrt{x^2 + 3}} dx$ is $\\sqrt{4} - \\sqrt{3} = 2 - \\sqrt{3}$. If written as $k - \\sqrt{3}$, then $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "Substitute $u = x^2 + 3, du = 2x dx$. The integral is $\\int_3^4 \\frac{du}{2\\sqrt{u}} = [\\sqrt{u}]_3^4 = \\sqrt{4} - \\sqrt{3} = 2 - \\sqrt{3}$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Trigonometric and irrational integrals",
    difficulty: "easy"
  }
];

module.exports = { subtopic7Questions };
