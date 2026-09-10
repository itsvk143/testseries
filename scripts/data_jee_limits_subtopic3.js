// scripts/data_jee_limits_subtopic3.js
// Subtopic 3: Differentiability and differentiation rules
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic3Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The function $f(x) = |x - 1| + |x - 2|$ is:',
    options: [
      'Continuous everywhere, but not differentiable at $x = 1$ and $x = 2$',
      'Continuous and differentiable everywhere on $\\mathbb{R}$',
      'Discontinuous at $x = 1$ and $x = 2$',
      'Differentiable everywhere except at $x = 1$ only'
    ],
    correctAnswer: 0,
    explanation: 'The sum of absolute value functions is continuous everywhere on $\\mathbb{R}$.\nHowever, corner points (cusps) occur at the zeros of the expressions inside the absolute values, namely $x = 1$ and $x = 2$.\n- At $x = 1$: $f\'_-(1) = -2$, $f\'_+(1) = 0$.\n- At $x = 2$: $f\'_-(2) = 0$, $f\'_+(2) = 2$.\nSince the one-sided derivatives do not match at these points, $f(x)$ is continuous everywhere, but not differentiable at $x = 1$ and $x = 2$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Let $f(x) = \\begin{cases} x^p \\sin(1/x), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$. The function $f(x)$ is differentiable at $x = 0$ if and only if:',
    options: ['$p > 1$', '$p > 0$', '$p \\ge 1$', '$p > 2$'],
    correctAnswer: 0,
    explanation: 'By the limit definition of derivative at $x = 0$:\n$$f\'(0) = \\lim_{h \\to 0} \\frac{f(h) - f(0)}{h} = \\lim_{h \\to 0} \\frac{h^p \\sin(1/h)}{h} = \\lim_{h \\to 0} h^{p-1} \\sin(1/h).$$\nSince $\\sin(1/h)$ oscillates boundedly between $-1$ and $1$, the limit exists and equals $0$ if and only if $p - 1 > 0$, which means $p > 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $y = \\sqrt{\\sin x + \\sqrt{\\sin x + \\sqrt{\\sin x + \\dots}}}$, then $\\frac{dy}{dx}$ is equal to:',
    options: [
      '$\\frac{\\cos x}{2y - 1}$',
      '$\\frac{\\cos x}{1 - 2y}$',
      '$\\frac{\\sin x}{2y - 1}$',
      '$\\frac{\\cos x}{2y + 1}$'
    ],
    correctAnswer: 0,
    explanation: 'We can express the infinite nested radical as $y = \\sqrt{\\sin x + y}$.\nSquaring both sides: $y^2 = \\sin x + y$.\nDifferentiating implicitly with respect to $x$:\n$$2y \\frac{dy}{dx} = \\cos x + \\frac{dy}{dx} \\implies (2y - 1)\\frac{dy}{dx} = \\cos x \\implies \\frac{dy}{dx} = \\frac{\\cos x}{2y - 1}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $x^y = e^{x - y}$, then $\\frac{dy}{dx}$ is equal to:',
    options: [
      '$\\frac{\\ln x}{(1 + \\ln x)^2}$',
      '$\\frac{1}{(1 + \\ln x)^2}$',
      '$\\frac{\\ln x}{1 + \\ln x}$',
      '$\\frac{1 - \\ln x}{(1 + \\ln x)^2}$'
    ],
    correctAnswer: 0,
    explanation: 'Taking the natural logarithm of both sides:\n$$y \\ln x = x - y \\implies y(1 + \\ln x) = x \\implies y = \\frac{x}{1 + \\ln x}.$$\nDifferentiating with respect to $x$ using the quotient rule:\n$$\\frac{dy}{dx} = \\frac{(1 + \\ln x)(1) - x(1/x)}{(1 + \\ln x)^2} = \\frac{1 + \\ln x - 1}{(1 + \\ln x)^2} = \\frac{\\ln x}{(1 + \\ln x)^2}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If $x = a(\\cos \\theta + \\theta \\sin \\theta)$ and $y = a(\\sin \\theta - \\theta \\cos \\theta)$, then $\\frac{d^2y}{dx^2}$ is equal to:',
    options: [
      '$\\frac{\\sec^3 \\theta}{a\\theta}$',
      '$\\frac{\\sec^2 \\theta}{a\\theta}$',
      '$\\frac{\\tan \\theta}{a\\theta}$',
      '$\\frac{\\cos^3 \\theta}{a\\theta}$'
    ],
    correctAnswer: 0,
    explanation: 'Differentiating with respect to $\\theta$:\n$$\\frac{dx}{d\\theta} = a(-\\sin \\theta + \\sin \\theta + \\theta \\cos \\theta) = a\\theta \\cos \\theta.$$\n$$\\frac{dy}{d\\theta} = a(\\cos \\theta - \\cos \\theta + \\theta \\sin \\theta) = a\\theta \\sin \\theta.$$\nFirst derivative:\n$$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{a\\theta \\sin \\theta}{a\\theta \\cos \\theta} = \\tan \\theta.$$\nSecond derivative:\n$$\\frac{d^2y}{dx^2} = \\frac{d}{d\\theta}(\\tan \\theta) \\cdot \\frac{d\\theta}{dx} = \\sec^2 \\theta \\cdot \\frac{1}{a\\theta \\cos \\theta} = \\frac{\\sec^3 \\theta}{a\\theta}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The total number of points in $\\mathbb{R}$ where the function $f(x) = \\cos|x| + |x|^3$ is not differentiable is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: 0,
    explanation: '1. $\\cos|x| = \\cos(-x) = \\cos x$, which is infinitely differentiable everywhere on $\\mathbb{R}$.\n2. $|x|^3 = x^2 |x|$. Its first derivative is $3x|x|$, which is continuous and differentiable at $x = 0$ (its derivative at $x = 0$ is $\\lim_{h \\to 0} \\frac{3h|h|}{h} = 0$).\nThus, $f(x)$ is differentiable everywhere on $\\mathbb{R}$. Total points of non-differentiability = 0.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The derivative of $\\tan^{-1}\\left(\\frac{2x}{1 - x^2}\\right)$ with respect to $\\sin^{-1}\\left(\\frac{2x}{1 + x^2}\\right)$ for $x \\in (-1, 1)$ is:',
    options: ['1', '2', '$\\frac{1}{2}$', '0'],
    correctAnswer: 0,
    explanation: 'For $x \\in (-1, 1)$, letting $x = \\tan \\theta$ with $\\theta \\in (-\\pi/4, \\pi/4)$:\n$$u = \\tan^{-1}\\left(\\frac{2\\tan \\theta}{1 - \\tan^2 \\theta}\\right) = \\tan^{-1}(\\tan 2\\theta) = 2\\theta = 2\\tan^{-1} x.$$\n$$v = \\sin^{-1}\\left(\\frac{2\\tan \\theta}{1 + \\tan^2 \\theta}\\right) = \\sin^{-1}(\\sin 2\\theta) = 2\\theta = 2\\tan^{-1} x.$$\nTherefore, $\\frac{du}{dv} = \\frac{du/dx}{dv/dx} = \\frac{\\frac{2}{1+x^2}}{\\frac{2}{1+x^2}} = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If $y = (\\sin x)^{\\ln x}$ for $x \\in (0, \\pi)$, then the value of $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$ is:',
    options: ['0', '1', '$\\ln(\\pi/2)$', '$-1$'],
    correctAnswer: 0,
    explanation: 'Taking logarithms:\n$$\\ln y = \\ln x \\cdot \\ln(\\sin x).$$\nDifferentiating with respect to $x$:\n$$\\frac{1}{y} \\frac{dy}{dx} = \\frac{1}{x} \\ln(\\sin x) + \\ln x \\cdot \\frac{\\cos x}{\\sin x} = \\frac{\\ln(\\sin x)}{x} + \\ln x \\cot x.$$\nAt $x = \\frac{\\pi}{2}$:\n$$\\sin\\left(\\frac{\\pi}{2}\\right) = 1 \\implies \\ln(\\sin(\\pi/2)) = \\ln 1 = 0,$$\n$$\\cot\\left(\\frac{\\pi}{2}\\right) = 0.$$\nAlso $y(\\pi/2) = (1)^{\\ln(\\pi/2)} = 1$.\nTherefore, $\\frac{dy}{dx}\\Big|_{x = \\pi/2} = 1 \\cdot (0 + 0) = 0$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $f(x) = \\begin{cases} x^2 + 3x + a, & x \\le 1 \\\\ bx + 2, & x > 1 \\end{cases}$ is differentiable at $x = 1$, then the pair $(a, b)$ is:',
    options: ['$(3, 5)$', '$(2, 5)$', '$(5, 3)$', '$(1, 4)$'],
    correctAnswer: 0,
    explanation: '1. Differentiability requires $f\'_-(1) = f\'_+(1)$:\n$$f\'_-(1) = 2(1) + 3 = 5.$$\n$$f\'_+(1) = b \\implies b = 5.$$\n2. Differentiability implies continuity at $x = 1$:\n$$f(1) = 1^2 + 3(1) + a = 4 + a.$$\n$$\\lim_{x \\to 1^+} f(x) = b(1) + 2 = 5 + 2 = 7.$$\n$$4 + a = 7 \\implies a = 3.$$\nThus $(a, b) = (3, 5)$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If $y = \\ln(\\sec x + \\tan x)$, then $\\frac{dy}{dx}$ is equal to:',
    options: ['$\\sec x$', '$\\tan x$', '$\\sec x \\tan x$', '$\\sec^2 x$'],
    correctAnswer: 0,
    explanation: 'Using the chain rule:\n$$\\frac{dy}{dx} = \\frac{1}{\\sec x + \\tan x} \\cdot \\frac{d}{dx}(\\sec x + \\tan x)$$\n$$= \\frac{\\sec x \\tan x + \\sec^2 x}{\\sec x + \\tan x} = \\frac{\\sec x(\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x.$$'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If a function $f(x)$ is differentiable at $x = c$, then it must be continuous at $x = c$.\nReason (R): $\\lim_{x \\to c} [f(x) - f(c)] = \\lim_{x \\to c} \\left[\\frac{f(x) - f(c)}{x - c} \\cdot (x - c)\\right] = f\'(c) \\cdot 0 = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Reason (R) provides the standard rigorous proof that differentiability at a point implies continuity: $\\lim_{x \\to c} f(x) = f(c)$. Both statements are true and (R) correctly proves (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = |x|$ is continuous at $x = 0$ but not differentiable at $x = 0$.\nReason (R): The left-hand derivative $f\'_-(0) = -1$ and the right-hand derivative $f\'_+(0) = 1$ are unequal.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: '$f(x)$ is continuous everywhere because $\\lim_{x \\to 0} |x| = 0 = f(0)$. However, $f\'_-(0) = \\lim_{h \\to 0^-} \\frac{|h|}{h} = -1$ and $f\'_+(0) = \\lim_{h \\to 0^+} \\frac{|h|}{h} = 1$. Since $f\'_-(0) \\neq f\'_+(0)$, $f\'(0)$ does not exist. Both statements are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The converse of the theorem "differentiability implies continuity" does not hold in general.\nReason (R): The function $f(x) = |x|$ is continuous at $x = 0$ but fails to be differentiable at $x = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'A single counterexample disproves a universal claim. Since $f(x) = |x|$ is continuous at $x = 0$ without being differentiable, it proves that continuity does not imply differentiability. Both (A) and (R) are true, and (R) is the classic counterexample explaining (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If both $f(x)$ and $g(x)$ are non-differentiable at $x = c$, their sum $f(x) + g(x)$ can be differentiable at $x = c$.\nReason (R): Non-differentiable behaviors may cancel each other out, as in the example $f(x) = |x|$ and $g(x) = -|x|$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Both $f(x) = |x|$ and $g(x) = -|x|$ are non-differentiable at $x = 0$. However, their sum $f(x) + g(x) = 0$ is the zero function, which is differentiable everywhere. Both (A) and (R) are true, and (R) provides the valid reasoning.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The derivative of every differentiable even function is an odd function.\nReason (R): Differentiating the identity $f(-x) = f(x)$ with respect to $x$ using the chain rule yields $-f\'(-x) = f\'(x) \\implies f\'(-x) = -f\'(x)$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Applying the chain rule to $f(-x) = f(x)$, we have $f\'(-x) \\cdot (-1) = f\'(x)$, which gives $f\'(-x) = -f\'(x)$. This is the exact definition of an odd function. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = x|x|$ is differentiable at $x = 0$ and $f\'(0) = 0$.\nReason (R): Both $f\'_-(0) = \\lim_{h \\to 0^-} \\frac{-h^2}{h} = 0$ and $f\'_+(0) = \\lim_{h \\to 0^+} \\frac{h^2}{h} = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $f(h) = h|h|$, for $h < 0$, $f(h) = -h^2$ and for $h > 0$, $f(h) = h^2$. The limit $\\lim_{h \\to 0} \\frac{h|h|}{h} = \\lim_{h \\to 0} |h| = 0$ exists and is finite. Both (A) and (R) are true and (R) proves (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The greatest integer function $f(x) = [x]$ is differentiable at $x = 2.5$.\nReason (R): In an open neighborhood $(2, 3)$ around $x = 2.5$, $f(x) = 2$ is constant, and the derivative of a constant function is zero.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $x = 2.5$ is strictly between the integers $2$ and $3$, there exists an open interval $(2, 3)$ where $[x] = 2$ identically. The derivative of a constant function on an open interval is zero everywhere on that interval. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $y = f(u)$ and $u = g(x)$ are differentiable functions, then $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$.\nReason (R): The chain rule allows differentiation of composite functions with respect to the independent variable.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'This is the standard formulation of the Chain Rule for differentiation of composite functions. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For the function $f(x) = |x - 2|$, $f\'(2)$ does not exist.\nReason (R): Geometrically, the graph of $f(x) = |x - 2|$ has a sharp corner at $x = 2$, preventing a unique tangent line from being defined.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'At $x = 2$, the graph transitions abruptly from slope $-1$ (for $x < 2$) to slope $+1$ (for $x > 2$). A unique non-vertical tangent cannot be formed at a corner point. Both (A) and (R) are true and (R) gives the geometric explanation for (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f\'(x) = 0$ for all $x \\in (a, b)$, then $f(x)$ is a constant function on $(a, b)$.\nReason (R): For any two points $x_1, x_2 \\in (a, b)$, by the Mean Value Theorem there exists $c$ between $x_1$ and $x_2$ such that $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1) = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The Mean Value Theorem proves that if the derivative vanishes identically on an interval, then the function value cannot change between any two distinct points in the interval. Hence $f(x_1) = f(x_2) = \\text{constant}$. Both (A) and (R) are true and (R) correctly explains (A).'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the function $f(x) = \\begin{cases} a x^2 + b, & x \\le 1 \\\\ 2x, & x > 1 \\end{cases}$ is differentiable at $x = 1$, find the value of $a + b$.',
    options: [],
    correctAnswer: 2,
    explanation: '1. Left and right derivatives at $x = 1$ must match:\n$$f\'_-(1) = 2a(1) = 2a.$$\n$$f\'_+(1) = 2.$$\n$$2a = 2 \\implies a = 1.$$\n2. The function must be continuous at $x = 1$:\n$$f(1) = a(1)^2 + b = a + b.$$\n$$\\lim_{x \\to 1^+} f(x) = 2(1) = 2.$$\n$$a + b = 2.$$\nTherefore, $a + b = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the total number of points in $\\mathbb{R}$ where the function $f(x) = |x| + |x - 1| + |x - 2|$ is not differentiable.',
    options: [],
    correctAnswer: 3,
    explanation: 'The function $f(x)$ has corner points at $x = 0, 1, 2$.\nAt each of these points, the one-sided derivatives do not match:\n- At $x = 0$: $f\'_-(0) = -3$, $f\'_+(0) = -1$.\n- At $x = 1$: $f\'_-(1) = -1$, $f\'_+(1) = 1$.\n- At $x = 2$: $f\'_-(2) = 1$, $f\'_+(2) = 3$.\nThus, $f(x)$ fails to be differentiable at exactly 3 points.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the function $f(x) = \\begin{cases} x^2, & x \\le c \\\\ 2x - 1, & x > c \\end{cases}$ is differentiable everywhere on $\\mathbb{R}$, find the value of $c$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Continuity at $x = c$ requires:\n$$c^2 = 2c - 1 \\implies c^2 - 2c + 1 = 0 \\implies (c - 1)^2 = 0 \\implies c = 1.$$\nDifferentiability check at $c = 1$:\n$$f\'_-(1) = 2(1) = 2.$$\n$$f\'_+(1) = 2.$$\nBoth match, so $c = 1$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $y = \\tan^{-1}\\left(\\frac{\\sqrt{1+x^2} - 1}{x}\\right)$, find the value of $4 \\frac{dy}{dx}$ at $x = 1$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Substitute $x = \\tan \\theta$:\n$$\\frac{\\sqrt{1+\\tan^2\\theta} - 1}{\\tan \\theta} = \\frac{\\sec \\theta - 1}{\\tan \\theta} = \\frac{1 - \\cos \\theta}{\\sin \\theta} = \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\tan(\\theta/2).$$\nHence $y = \\tan^{-1}(\\tan(\\theta/2)) = \\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1} x$.\nDifferentiating:\n$$\\frac{dy}{dx} = \\frac{1}{2(1 + x^2)}.$$\nAt $x = 1$:\n$$\\frac{dy}{dx} = \\frac{1}{2(1 + 1)} = \\frac{1}{4}.$$\nTherefore, $4\\frac{dy}{dx} = 4\\left(\\frac{1}{4}\\right) = 1$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = \\max(|x|, x^2)$ for $x \\in [-2, 2]$. Find the total number of points in $(-2, 2)$ where $f(x)$ is not differentiable.',
    options: [],
    correctAnswer: 3,
    explanation: 'Comparing $|x|$ and $x^2$:\n- For $|x| \\le 1$ (i.e., $x \\in [-1, 1]$), $|x| \\ge x^2$, so $f(x) = |x|$.\n- For $|x| > 1$, $x^2 > |x|$, so $f(x) = x^2$.\nPoints to inspect for differentiability:\n1. At $x = 0$: $f(x) = |x|$, which is non-differentiable (LHD = -1, RHD = 1).\n2. At $x = 1$: For $x < 1$, $f\'(x) = 1$; for $x > 1$, $f\'(x) = 2x \\implies f\'(1) = 2$. Not equal.\n3. At $x = -1$: For $x < -1$, $f\'(x) = 2x \\implies f\'(-1) = -2$; for $x > -1$, $f\'(x) = -1$. Not equal.\nThus, $f(x)$ is non-differentiable at 3 points in $(-2, 2)$: $x = -1, 0, 1$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $x^2 + y^2 = 25$, find the absolute value of $y^3 \\frac{d^2y}{dx^2}$.',
    options: [],
    correctAnswer: 25,
    explanation: 'Differentiating $x^2 + y^2 = 25$ with respect to $x$:\n$$2x + 2y \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}.$$\nDifferentiating again:\n$$\\frac{d^2y}{dx^2} = -\\frac{y(1) - x(dy/dx)}{y^2} = -\\frac{y - x(-x/y)}{y^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{25}{y^3}.$$\nMultiplying by $y^3$:\n$$y^3 \\frac{d^2y}{dx^2} = -25.$$\nThe absolute value is $|-25| = 25$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = |x - 3|\\cos x$. Find the value of $f\'_+(3) + f\'_-(3)$.',
    options: [],
    correctAnswer: 0,
    explanation: 'By definition of one-sided derivatives at $x = 3$:\n$$f\'_+(3) = \\lim_{h \\to 0^+} \\frac{f(3+h) - f(3)}{h} = \\lim_{h \\to 0^+} \\frac{h \\cos(3+h) - 0}{h} = \\cos 3.$$\n$$f\'_-(3) = \\lim_{h \\to 0^-} \\frac{f(3+h) - f(3)}{h} = \\lim_{h \\to 0^-} \\frac{-h \\cos(3+h) - 0}{h} = -\\cos 3.$$\nTherefore, $f\'_+(3) + f\'_-(3) = \\cos 3 + (-\\cos 3) = 0$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = x^3 - 3x^2 + 6x - 5$. If $g(x) = f^{-1}(x)$ and $f(1) = -1$, find the value of $3 \\cdot g\'(-1)$.',
    options: [],
    correctAnswer: 1,
    explanation: 'By the Inverse Function Theorem:\n$$g\'(y) = \\frac{1}{f\'(x)}, \\quad \\text{where } y = f(x).$$\nHere $y = -1$, so $x = 1$.\nDerivative of $f(x)$:\n$$f\'(x) = 3x^2 - 6x + 6.$$\nEvaluating at $x = 1$:\n$$f\'(1) = 3(1)^2 - 6(1) + 6 = 3.$$\nHence $g\'(-1) = \\frac{1}{f\'(1)} = \\frac{1}{3}$.\nTherefore, $3 \\cdot g\'(-1) = 3 \\cdot \\frac{1}{3} = 1$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the number of points in $\\mathbb{R}$ where the function $f(x) = |x^2 - 4x + 3|$ is not differentiable.',
    options: [],
    correctAnswer: 2,
    explanation: 'Factor the quadratic:\n$$x^2 - 4x + 3 = (x - 1)(x - 3).$$\nThe roots $x = 1$ and $x = 3$ are simple roots where the curve crosses the $x$-axis.\nTaking the absolute value reflects the negative portion, creating sharp corners at $x = 1$ and $x = 3$.\nAt $x = 1$: $f\'_-(1) = -2$, $f\'_+(1) = 2$.\nAt $x = 3$: $f\'_-(3) = -2$, $f\'_+(3) = 2$.\nThus, $f(x)$ is non-differentiable at exactly 2 points.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $y = \\sin^{-1}(2x\\sqrt{1-x^2})$ for $x \\in \\left(-\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$, find the value of $(1 - x^2)\\left(\\frac{dy}{dx}\\right)^2$.',
    options: [],
    correctAnswer: 4,
    explanation: 'Let $x = \\sin \\theta$ with $\\theta \\in (-\\pi/4, \\pi/4)$:\n$$y = \\sin^{-1}(2\\sin \\theta \\cos \\theta) = \\sin^{-1}(\\sin 2\\theta) = 2\\theta = 2\\sin^{-1} x.$$\nDifferentiating with respect to $x$:\n$$\\frac{dy}{dx} = \\frac{2}{\\sqrt{1 - x^2}}.$$\nSquaring both sides:\n$$\\left(\\frac{dy}{dx}\\right)^2 = \\frac{4}{1 - x^2} \\implies (1 - x^2)\\left(\\frac{dy}{dx}\\right)^2 = 4.$$'
  }
];

module.exports = { subtopic3Questions };
