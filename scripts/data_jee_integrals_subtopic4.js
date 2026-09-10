// scripts/data_jee_integrals_subtopic4.js
// Subtopic 4: Integration by substitution and algebraic fractions (30 questions: 10 MCQ, 10 AR, 10 NUM)
// Based on JEE Mains 10-year question analysis (2015-2025)

const subtopic4Questions = [
  // --- 10 SINGLE CHOICE MCQs ---
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{x^2 - 1}{x^4 + 3x^2 + 1} dx$ is equal to:",
    options: [
      "$\\frac{1}{2\\sqrt{5}} \\ln\\left|\\frac{x + 1/x - \\sqrt{5}}{x + 1/x + \\sqrt{5}}\\right| + C$",
      "$\\frac{1}{\\sqrt{5}} \\arctan\\left(\\frac{x + 1/x}{\\sqrt{5}}\\right) + C$",
      "$\\frac{1}{2\\sqrt{5}} \\ln\\left|\\frac{x - 1/x - \\sqrt{5}}{x - 1/x + \\sqrt{5}}\\right| + C$",
      "$\\frac{1}{\\sqrt{5}} \\arctan\\left(\\frac{x - 1/x}{\\sqrt{5}}\\right) + C$"
    ],
    correctAnswer: 0,
    explanation: "Divide numerator and denominator by $x^2$: $\\int \\frac{1 - 1/x^2}{(x + 1/x)^2 + 1} dx$... wait! If we write the denominator as $(x + 1/x)^2 + 1$, then $(x + 1/x)^2 = x^2 + 2 + 1/x^2$. So $x^2 + 3 + 1/x^2 = (x + 1/x)^2 + 1$. And $d(x + 1/x) = (1 - 1/x^2)dx$. But the numerator is $x^2 - 1$, so dividing by $x^2$ gives $1 - 1/x^2$. Then with $u = x + 1/x$, the integral becomes $\\int \\frac{du}{u^2 + 1} = \\arctan(u) = \\arctan(x + 1/x)$. But wait, what if denominator is $x^4 - 3x^2 + 1$? In our options, let's look at option A: $\\frac{1}{2\\sqrt{5}} \\ln|\\frac{u - \\sqrt{5}}{u + \\sqrt{5}}|$. That comes from $\\int \\frac{du}{u^2 - 5}$, where $u^2 - 5 = (x + 1/x)^2 - 5 = x^2 + 2 + 1/x^2 - 5 = x^2 - 3 + 1/x^2$, corresponding to $x^4 - 3x^2 + 1$! Let's make the integrand $\\frac{x^2 - 1}{x^4 - 3x^2 + 1} dx$! Dividing by $x^2$ gives $\\frac{1 - 1/x^2}{(x + 1/x)^2 - 5}$. With $u = x + 1/x$, $du = (1 - 1/x^2)dx$, the integral is $\\int \\frac{du}{u^2 - (\\sqrt{5})^2} = \\frac{1}{2\\sqrt{5}}\\ln|\\frac{u - \\sqrt{5}}{u + \\sqrt{5}}| + C$. That is mathematically exact and matches option A!",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{x^2 + 1}{x^4 + 1} dx$ is equal to:",
    options: [
      "$\\frac{1}{\\sqrt{2}} \\arctan\\left(\\frac{x - 1/x}{\\sqrt{2}}\\right) + C$",
      "$\\frac{1}{\\sqrt{2}} \\arctan\\left(\\frac{x + 1/x}{\\sqrt{2}}\\right) + C$",
      "$\\frac{1}{2\\sqrt{2}} \\ln\\left|\\frac{x^2 - \\sqrt{2}x + 1}{x^2 + \\sqrt{2}x + 1}\\right| + C$",
      "$\\sqrt{2} \\arctan\\left(\\frac{x^2 - 1}{\\sqrt{2}x}\\right) + C$"
    ],
    correctAnswer: 0,
    explanation: "Divide numerator and denominator by $x^2$: $\\int \\frac{1 + 1/x^2}{(x - 1/x)^2 + 2} dx$. Let $u = x - 1/x$, so $du = (1 + 1/x^2) dx$. The integral becomes $\\int \\frac{du}{u^2 + (\\sqrt{2})^2} = \\frac{1}{\\sqrt{2}} \\arctan\\left(\\frac{u}{\\sqrt{2}}\\right) + C = \\frac{1}{\\sqrt{2}} \\arctan\\left(\\frac{x - 1/x}{\\sqrt{2}}\\right) + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{(x - 1)(x - 2)}$ is equal to:",
    options: [
      "$\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$",
      "$\\ln\\left|\\frac{x - 1}{x - 2}\\right| + C$",
      "$\\ln|(x - 1)(x - 2)| + C$",
      "$\\frac{1}{2}\\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$"
    ],
    correctAnswer: 0,
    explanation: "Partial fraction decomposition: $\\frac{1}{(x - 1)(x - 2)} = \\frac{A}{x - 1} + \\frac{B}{x - 2}$. For $x = 1$, $A = -1$. For $x = 2$, $B = 1$. Thus $\\int \\left( \\frac{1}{x - 2} - \\frac{1}{x - 1} \\right) dx = \\ln|x - 2| - \\ln|x - 1| + C = \\ln\\left|\\frac{x - 2}{x - 1}\\right| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{2x + 3}{x^2 + 3x + 2} dx$ evaluates to:",
    options: [
      "$\\ln|x^2 + 3x + 2| + C$",
      "$\\frac{1}{2}\\ln|x^2 + 3x + 2| + C$",
      "$\\ln\\left|\\frac{x + 2}{x + 1}\\right| + C$",
      "$2\\ln|x + 2| + 3\\ln|x + 1| + C$"
    ],
    correctAnswer: 0,
    explanation: "Notice that the derivative of the denominator $x^2 + 3x + 2$ is exactly $2x + 3$. Thus the integral is of the form $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C = \\ln|x^2 + 3x + 2| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{x^2 - 6x + 13}$ is equal to:",
    options: [
      "$\\frac{1}{2} \\arctan\\left(\\frac{x - 3}{2}\\right) + C$",
      "$\\arctan\\left(\\frac{x - 3}{2}\\right) + C$",
      "$\\frac{1}{4} \\arctan\\left(\\frac{x - 3}{4}\\right) + C$",
      "$\\frac{1}{2} \\ln|x^2 - 6x + 13| + C$"
    ],
    correctAnswer: 0,
    explanation: "Complete the square in the denominator: $x^2 - 6x + 13 = (x - 3)^2 + 4 = (x - 3)^2 + 2^2$. The integral becomes $\\int \\frac{dx}{(x - 3)^2 + 2^2} = \\frac{1}{2} \\arctan\\left(\\frac{x - 3}{2}\\right) + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{x(x^4 + 1)}$ is equal to:",
    options: [
      "$\\frac{1}{4} \\ln\\left|\\frac{x^4}{x^4 + 1}\\right| + C$",
      "$\\frac{1}{4} \\ln|x^4 + 1| + C$",
      "$\\ln\\left|\\frac{x}{x^4 + 1}\\right| + C$",
      "$\\frac{1}{4} \\arctan(x^4) + C$"
    ],
    correctAnswer: 0,
    explanation: "Multiply numerator and denominator by $x^3$: $\\int \\frac{x^3}{x^4(x^4 + 1)} dx$. Substitute $t = x^4$, so $dt = 4x^3 dx$. The integral becomes $\\frac{1}{4} \\int \\frac{dt}{t(t + 1)} = \\frac{1}{4} \\int \\left(\\frac{1}{t} - \\frac{1}{t + 1}\\right) dt = \\frac{1}{4} \\ln\\left|\\frac{t}{t + 1}\\right| + C = \\frac{1}{4} \\ln\\left|\\frac{x^4}{x^4 + 1}\\right| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "medium"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{x}{\\sqrt{x + 1}} dx$ evaluates to:",
    options: [
      "$\\frac{2}{3}(x - 2)\\sqrt{x + 1} + C$",
      "$\\frac{2}{3}(x + 2)\\sqrt{x + 1} + C$",
      "$\\frac{1}{3}(2x - 1)\\sqrt{x + 1} + C$",
      "$2\\sqrt{x + 1} + C$"
    ],
    correctAnswer: 0,
    explanation: "Substitute $u = \\sqrt{x + 1} \\implies u^2 = x + 1 \\implies x = u^2 - 1$, and $dx = 2u du$. The integral becomes $\\int \\frac{u^2 - 1}{u} (2u du) = 2 \\int (u^2 - 1) du = 2 \\left(\\frac{u^3}{3} - u\\right) + C = \\frac{2}{3}u(u^2 - 3) + C$. Since $u^2 - 3 = (x + 1) - 3 = x - 2$, this is $\\frac{2}{3}(x - 2)\\sqrt{x + 1} + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{x^2 - a^2}$ for $|x| > a > 0$ is equal to:",
    options: [
      "$\\frac{1}{2a} \\ln\\left|\\frac{x - a}{x + a}\\right| + C$",
      "$\\frac{1}{2a} \\ln\\left|\\frac{x + a}{x - a}\\right| + C$",
      "$\\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right) + C$",
      "$\\frac{1}{a} \\ln|x^2 - a^2| + C$"
    ],
    correctAnswer: 0,
    explanation: "Using partial fractions: $\\frac{1}{x^2 - a^2} = \\frac{1}{2a}\\left(\\frac{1}{x - a} - \\frac{1}{x + a}\\right)$. Integrating yields $\\frac{1}{2a} \\ln\\left|\\frac{x - a}{x + a}\\right| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{x^3}{x + 1} dx$ is equal to:",
    options: [
      "$\\frac{x^3}{3} - \\frac{x^2}{2} + x - \\ln|x + 1| + C$",
      "$\\frac{x^3}{3} + \\frac{x^2}{2} + x + \\ln|x + 1| + C$",
      "$\\frac{x^3}{3} - x + \\ln|x + 1| + C$",
      "$x^2 - x + 1 - \\ln|x + 1| + C$"
    ],
    correctAnswer: 0,
    explanation: "By polynomial division: $\\frac{x^3}{x + 1} = \\frac{(x^3 + 1) - 1}{x + 1} = (x^2 - x + 1) - \\frac{1}{x + 1}$. Integrating term by term gives $\\frac{x^3}{3} - \\frac{x^2}{2} + x - \\ln|x + 1| + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "single_choice",
    question: "The integral $\\int \\frac{dx}{x \\sqrt{x^2 - 1}}$ for $x > 1$ is equal to:",
    options: [
      "$\\operatorname{arcsec}(x) + C$",
      "$\\arcsin(x) + C$",
      "$\\arctan(x) + C$",
      "$\\ln|x + \\sqrt{x^2 - 1}| + C$"
    ],
    correctAnswer: 0,
    explanation: "By standard substitution $x = \\sec\\theta, dx = \\sec\\theta\\tan\\theta d\\theta$: $\\int \\frac{\\sec\\theta\\tan\\theta}{\\sec\\theta\\tan\\theta} d\\theta = \\int 1 d\\theta = \\theta + C = \\operatorname{arcsec}(x) + C$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },

  // --- 10 ASSERTION-REASON QUESTIONS ---
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.\nReason (R): Setting $u = f(x)$ gives $du = f'(x) dx$, transforming the integral into $\\int \\frac{du}{u} = \\ln|u| + C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the standard logarithmic derivative substitution. Reason provides the direct substitution proof. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\frac{1}{x^2 + a^2} dx = \\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right) + C$.\nReason (R): Substituting $x = a\\tan\\theta$ gives $dx = a\\sec^2\\theta d\\theta$, transforming $\\frac{1}{x^2 + a^2} dx$ into $\\frac{1}{a} d\\theta$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The trigonometric substitution $x = a\\tan\\theta$ simplifies the integrand via $a^2\\tan^2\\theta + a^2 = a^2\\sec^2\\theta$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The rational function $\\frac{x^3 + 1}{x^2 - 1}$ must be divided by polynomial long division before applying partial fractions.\nReason (R): Partial fraction decomposition can only be directly applied to proper rational functions where the degree of the numerator is strictly less than the degree of the denominator.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since the numerator has degree $3$ and denominator has degree $2$, this is an improper rational function. One must perform polynomial division first. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\frac{2x}{1 + x^2} dx = \\ln(1 + x^2) + C$.\nReason (R): The numerator $2x$ is the derivative of the denominator $1 + x^2$, and $1 + x^2 > 0$ for all real $x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $d(1 + x^2) = 2x dx$, the integral is $\\ln|1 + x^2| + C = \\ln(1 + x^2) + C$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The integral $\\int \\frac{dx}{x(x^n + 1)}$ can be solved by substituting $x^n = t$.\nReason (R): Multiplying numerator and denominator by $x^{n-1}$ gives $\\int \\frac{x^{n-1}}{x^n(x^n + 1)} dx = \\frac{1}{n} \\int \\frac{dt}{t(t + 1)}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Multiplying top and bottom by $x^{n-1}$ produces the differential $x^{n-1}dx = \\frac{dt}{n}$, converting the denominator to $t(t + 1)$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\frac{1}{x^2 - 1} dx = \\arctan(x) + C$.\nReason (R): The derivative of $\\arctan(x)$ is $\\frac{1}{1 + x^2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Assertion (A) is FALSE because $\\int \\frac{1}{x^2 - 1} dx = \\frac{1}{2}\\ln\\left|\\frac{x - 1}{x + 1}\\right| + C$, NOT $\\arctan(x) + C$. Reason (R) is TRUE. Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): For an integral of the form $\\int \\frac{px + q}{ax^2 + bx + c} dx$, we express $px + q = A(2ax + b) + B$.\nReason (R): This breaks the integral into a logarithmic part $\\int \\frac{2ax + b}{ax^2 + bx + c} dx$ and a standard quadratic part $\\int \\frac{dx}{ax^2 + bx + c}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the canonical technique taught in Class 12 and tested on JEE Mains for linear over quadratic integrals. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int_0^1 \\frac{1}{x^2 + 1} dx = \\frac{\\pi}{4}$.\nReason (R): $[\\arctan(x)]_0^1 = \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Standard evaluation of $\\int_0^1 \\frac{dx}{1 + x^2}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): $\\int \\frac{e^x}{1 + e^{2x}} dx = \\arctan(e^x) + C$.\nReason (R): Setting $u = e^x$, $du = e^x dx$, the integral transforms directly into $\\int \\frac{du}{1 + u^2} = \\arctan(u) + C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Direct substitution $u = e^x$ yields the standard inverse tangent integral. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "assertion_reason",
    question: "Given below are two statements:\nAssertion (A): The substitution $x = a\\sin\\theta$ is appropriate for integrals containing $\\sqrt{a^2 - x^2}$.\nReason (R): With $x = a\\sin\\theta$, $\\sqrt{a^2 - x^2} = \\sqrt{a^2(1 - \\sin^2\\theta)} = a\\cos\\theta$, eliminating the square root.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The identity $1 - \\sin^2\\theta = \\cos^2\\theta$ rationalizes the radical expression. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: "numerical",
    question: "If $\\int_0^1 \\frac{2x}{x^2 + 1} dx = \\ln k$, then the positive integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$\\int_0^1 \\frac{2x}{x^2 + 1} dx = [\\ln(x^2 + 1)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_2^3 \\frac{1}{x^2 - 1} dx$ is $\\frac{1}{2} \\ln\\left(\\frac{a}{b}\\right)$, where $\\gcd(a, b) = 1$. The value of $a + b$ is:",
    options: [],
    correctAnswer: "5",
    explanation: "$\\int_2^3 \\frac{dx}{x^2 - 1} = \\left[ \\frac{1}{2}\\ln\\left|\\frac{x - 1}{x + 1}\\right| \\right]_2^3 = \\frac{1}{2} \\left( \\ln\\left(\\frac{2}{4}\\right) - \\ln\\left(\\frac{1}{3}\\right) \\right) = \\frac{1}{2} \\ln\\left( \\frac{1/2}{1/3} \\right) = \\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$. Thus $a = 3, b = 2$, and $a + b = 5$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "medium"
  },
  {
    type: "numerical",
    question: "If $\\int_0^1 \\frac{dx}{x^2 + 3x + 2} = \\ln\\left(\\frac{a}{b}\\right)$, where $a, b$ are coprime positive integers, then $a + b$ is:",
    options: [],
    correctAnswer: "7",
    explanation: "$\\frac{1}{x^2 + 3x + 2} = \\frac{1}{x + 1} - \\frac{1}{x + 2}$. The integral is $[\\ln(x + 1) - \\ln(x + 2)]_0^1 = [\\ln\\frac{x+1}{x+2}]_0^1 = \\ln(2/3) - \\ln(1/2) = \\ln\\left(\\frac{2/3}{1/2}\\right) = \\ln(4/3)$. Thus $a = 4, b = 3$, and $a + b = 7$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "medium"
  },
  {
    type: "numerical",
    question: "If $\\int_0^{\\sqrt{3}} \\frac{dx}{1 + x^2} = \\frac{\\pi}{k}$, then the integer $k$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "$[\\arctan x]_0^{\\sqrt{3}} = \\arctan(\\sqrt{3}) - \\arctan(0) = \\frac{\\pi}{3} - 0 = \\frac{\\pi}{3}$. Thus $k = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^1 x \\sqrt{1 - x^2} dx$ is $\\frac{1}{k}$. The integer $k$ is:",
    options: [],
    correctAnswer: "3",
    explanation: "Let $u = 1 - x^2, du = -2x dx$. The limits become $1$ to $0$. The integral is $\\int_0^1 \\frac{1}{2} u^{1/2} du = \\frac{1}{2} \\left[\\frac{2}{3}u^{3/2}\\right]_0^1 = \\frac{1}{3}$. Thus $k = 3$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^1 \\frac{x^3}{x^2 + 1} dx = \\frac{1 - \\ln 2}{k}$, then the positive integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$\\frac{x^3}{x^2 + 1} = x - \\frac{x}{x^2 + 1}$. The integral is $[\\frac{x^2}{2} - \\frac{1}{2}\\ln(x^2 + 1)]_0^1 = \\frac{1}{2} - \\frac{1}{2}\\ln 2 = \\frac{1 - \\ln 2}{2}$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^1 \\frac{dx}{(x + 1)(x + 2)} = \\ln k$, then the fraction $k$ has numerator $4$ and denominator $3$. The value of $4 \\times 3$ is:",
    options: [],
    correctAnswer: "12",
    explanation: "As evaluated earlier, the integral is $\\ln(4/3)$. Here $k = 4/3$. The product of numerator and denominator is $4 \\times 3 = 12$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_0^1 \\frac{1}{(2x + 1)^2} dx$ multiplied by $3$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "$\\int_0^1 (2x + 1)^{-2} dx = \\left[ -\\frac{1}{2(2x + 1)} \\right]_0^1 = -\\frac{1}{2(3)} - \\left(-\\frac{1}{2(1)}\\right) = -\\frac{1}{6} + \\frac{1}{2} = \\frac{2}{6} = \\frac{1}{3}$. Multiplying by $3$ gives $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "If $\\int_0^2 \\frac{x}{x^2 + 4} dx = \\frac{1}{2} \\ln k$, then the integer $k$ is:",
    options: [],
    correctAnswer: "2",
    explanation: "$\\int_0^2 \\frac{x}{x^2 + 4} dx = \\left[ \\frac{1}{2}\\ln(x^2 + 4) \\right]_0^2 = \\frac{1}{2}(\\ln 8 - \\ln 4) = \\frac{1}{2}\\ln(8/4) = \\frac{1}{2}\\ln 2$. Thus $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  },
  {
    type: "numerical",
    question: "The value of $\\int_1^2 \\frac{1}{x^2} dx$ multiplied by $2$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "$\\int_1^2 x^{-2} dx = [-1/x]_1^2 = -1/2 - (-1) = 1/2$. Multiplying by $2$ gives $1$.",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Integration by substitution and algebraic fractions",
    difficulty: "easy"
  }
];

// Clean up question 1: ensure the question text matches options cleanly
subtopic4Questions[0].question = "The integral $\\int \\frac{x^2 - 1}{x^4 - 3x^2 + 1} dx$ is equal to:";

module.exports = { subtopic4Questions };
