// scripts/data_jee_limits_subtopic5.js
// Subtopic 5: Standard limits and evaluation of indeterminate forms
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} (1 + \\tan^2\\sqrt{x})^{\\frac{1}{2x}}$',
    options: ['$\\sqrt{e}$', '$e$', '$e^2$', '1'],
    correctAnswer: 0,
    explanation: 'This limit is of the indeterminate form $1^\\infty$.\nUsing the standard formula $\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)(f(x) - 1)}$:\n$$L = e^{\\lim_{x \\to 0} \\frac{1}{2x} (\\tan^2\\sqrt{x})} = e^{\\frac{1}{2} \\lim_{x \\to 0} \\left(\\frac{\\tan\\sqrt{x}}{\\sqrt{x}}\\right)^2}.$$\nSince $\\lim_{x \\to 0} \\frac{\\tan\\sqrt{x}}{\\sqrt{x}} = 1$:\n$$L = e^{\\frac{1}{2}(1)^2} = e^{1/2} = \\sqrt{e}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'For $a, b > 0$, evaluate the limit: $\\lim_{x \\to 0} \\left(\\frac{a^x + b^x}{2}\\right)^{\\frac{1}{x}}$',
    options: ['$\\sqrt{ab}$', '$ab$', '$\\frac{a+b}{2}$', '1'],
    correctAnswer: 0,
    explanation: 'Form $1^\\infty$. Using $e^{\\lim g(x)(f(x)-1)}$:\n$$L = e^{\\lim_{x \\to 0} \\frac{1}{x} \\left(\\frac{a^x + b^x - 2}{2}\\right)} = e^{\\frac{1}{2} \\lim_{x \\to 0} \\left(\\frac{a^x - 1}{x} + \\frac{b^x - 1}{x}\\right)}.$$\nUsing the standard limit $\\lim_{x \\to 0} \\frac{c^x - 1}{x} = \\ln c$:\n$$L = e^{\\frac{1}{2}(\\ln a + \\ln b)} = e^{\\ln\\sqrt{ab}} = \\sqrt{ab}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to \\infty} \\left(\\frac{x + 6}{x + 1}\\right)^{x + 4}$',
    options: ['$e^5$', '$e^6$', '$e^4$', '$e$'],
    correctAnswer: 0,
    explanation: 'Form $1^\\infty$:\n$$f(x) - 1 = \\frac{x + 6}{x + 1} - 1 = \\frac{5}{x + 1}.$$\nExponent limit:\n$$\\lim_{x \\to \\infty} (x + 4) \\left(\\frac{5}{x + 1}\\right) = 5 \\lim_{x \\to \\infty} \\frac{x + 4}{x + 1} = 5(1) = 5.$$\nTherefore, the limit is $e^5$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^{\\sin x} - 1}{\\ln(1 + \\tan x)}$',
    options: ['1', '0', '$e$', '$\\infty$'],
    correctAnswer: 0,
    explanation: 'Rewriting using standard limits:\n$$\\lim_{x \\to 0} \\frac{e^{\\sin x} - 1}{\\sin x} \\cdot \\frac{\\sin x}{\\tan x} \\cdot \\frac{\\tan x}{\\ln(1 + \\tan x)}$$\n$$= 1 \\cdot 1 \\cdot 1 = 1.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{2^x - 1}{\\sqrt{1+x} - 1}$',
    options: ['$\\ln 4$', '$\\ln 2$', '$2$', '$1$'],
    correctAnswer: 0,
    explanation: 'Rationalizing the denominator:\n$$\\lim_{x \\to 0} \\frac{2^x - 1}{x} \\cdot (\\sqrt{1+x} + 1) = \\ln 2 \\cdot (1 + 1) = 2\\ln 2 = \\ln(2^2) = \\ln 4.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{n \\to \\infty} \\left[\\cos\\left(\\frac{x}{n}\\right)\\right]^{n^2}$',
    options: ['$e^{-x^2/2}$', '$e^{x^2/2}$', '$e^{-x^2}$', '1'],
    correctAnswer: 0,
    explanation: 'Form $1^\\infty$:\n$$L = e^{\\lim_{n \\to \\infty} n^2 \\left[\\cos\\left(\\frac{x}{n}\\right) - 1\\right]}.$ $\nUsing $\\cos u - 1 = -2\\sin^2(u/2) \\approx -\\frac{u^2}{2}$:\n$$n^2 \\left[\\cos\\left(\\frac{x}{n}\\right) - 1\\right] = n^2 \\left[-\\frac{x^2}{2n^2} + O(1/n^4)\\right] \\to -\\frac{x^2}{2}.$$\nHence the limit is $e^{-x^2/2}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to \\frac{\\pi}{4}} \\frac{1 - \\tan x}{1 - \\sqrt{2}\\sin x}$',
    options: ['2', '$\\sqrt{2}$', '1', '$\\frac{1}{\\sqrt{2}}$'],
    correctAnswer: 0,
    explanation: 'At $x = \\frac{\\pi}{4}$, form $\\frac{0}{0}$. Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to \\pi/4} \\frac{-\\sec^2 x}{-\\sqrt{2}\\cos x} = \\frac{-(\\sqrt{2})^2}{-\\sqrt{2}(1/\\sqrt{2})} = \\frac{-2}{-1} = 2.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\ln(\\cos x)}{x^2}$',
    options: ['$-\\frac{1}{2}$', '$\\frac{1}{2}$', '0', '$-1$'],
    correctAnswer: 0,
    explanation: 'Rewriting:\n$$\\lim_{x \\to 0} \\frac{\\ln(1 + (\\cos x - 1))}{\\cos x - 1} \\cdot \\frac{\\cos x - 1}{x^2}$$\nSince $\\cos x - 1 \\to 0$:\n$$= 1 \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{1}{2}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0^+} (\\cot x)^{\\sin x}$',
    options: ['1', '0', '$\\infty$', '$e$'],
    correctAnswer: 0,
    explanation: 'Form $\\infty^0$. Let $y = (\\cot x)^{\\sin x}$:\n$$\\ln y = \\sin x \\ln(\\cot x) = \\frac{\\ln(\\cot x)}{\\csc x}.$$\nThis is an indeterminate form of type $\\frac{\\infty}{\\infty}$.\nApplying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0^+} \\frac{\\frac{-\\csc^2 x}{\\cot x}}{-\\csc x \\cot x} = \\lim_{x \\to 0^+} \\frac{\\csc x}{\\cot^2 x} = \\lim_{x \\to 0^+} \\frac{1/\\sin x}{\\cos^2 x / \\sin^2 x} = \\lim_{x \\to 0^+} \\frac{\\sin x}{\\cos^2 x} = 0.$$\nSince $\\ln y \\to 0$, $y = e^{\\ln y} \\to e^0 = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sqrt[3]{1+x} - 1}{x}$',
    options: ['$\\frac{1}{3}$', '3', '1', '$\\frac{2}{3}$'],
    correctAnswer: 0,
    explanation: 'Using the standard algebraic limit $\\lim_{x \\to 0} \\frac{(1+x)^n - 1}{x} = n$ with $n = \\frac{1}{3}$:\n$$\\lim_{x \\to 0} \\frac{(1+x)^{1/3} - 1}{x} = \\frac{1}{3}.$$'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\lim_{x \\to a} f(x) = 1$ and $\\lim_{x \\to a} g(x) = \\infty$, then $\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)[f(x) - 1]}$.\nReason (R): Setting $y = [f(x)]^{g(x)}$, $\\ln y = g(x)\\ln(1 + (f(x) - 1)) \\sim g(x)(f(x) - 1)$ as $f(x) - 1 \\to 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Using logarithmic transformation, $\\ln y = g(x) \\ln(f(x))$. Since $f(x) \\to 1$, we write $\\ln f(x) = \\ln(1 + (f(x)-1)) = (f(x)-1) \\frac{\\ln(1+(f(x)-1))}{f(x)-1} \\to f(x)-1$. Exponentiating gives the result. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $1^\\infty$ is an indeterminate form in calculus.\nReason (R): The base is not the exact number $1$, but rather a function tending toward $1$, while the exponent grows without bound, producing competition between base and power.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'If the base is strictly equal to the constant $1$, $1^n = 1$ always. But in limits, the base approaches $1$ while the exponent approaches $\\infty$, meaning the limit depends on the relative rates of approach and cannot be determined without further analysis. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ requires $x$ to be measured in radians.\nReason (R): If $x$ is measured in degrees, then $\\lim_{x \\to 0} \\frac{\\sin x^\\circ}{x} = \\frac{\\pi}{180}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 1,
    explanation: 'Assertion (A) is true: the geometric derivation of $\\sin x < x < \\tan x$ uses arc length $s = r\\theta$, which holds only in radians. Reason (R) is also factually true because $x^\\circ = \\frac{\\pi x}{180}$ radians, giving limit $\\frac{\\pi}{180}$. However, (R) gives the degree case rather than explaining why radian measure is required for (A). Thus option 1.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any $a > 0$, $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$.\nReason (R): Writing $a^x = e^{x \\ln a}$, the Taylor expansion yields $e^{x \\ln a} - 1 = x \\ln a + O(x^2)$, which upon division by $x$ gives $\\ln a$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Using the exponential identity $a^x = e^{x\\ln a}$ and expanding $e^u = 1 + u + \\dots$ directly proves the standard limit $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$.\nReason (R): Euler\'s number $e$ is formally defined as the limit $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By standard real analysis, the continuous limit $\\lim_{x \\to \\infty} (1 + 1/x)^x$ equals the sequence limit $\\lim_{n \\to \\infty} (1 + 1/n)^n$, which defines the base of natural logarithms $e$. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$.\nReason (R): By logarithm properties, $\\frac{1}{x}\\ln(1+x) = \\ln\\left((1+x)^{1/x}\\right)$, and $\\lim_{x \\to 0} (1+x)^{1/x} = e$, so $\\ln(e) = 1$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Because $\\ln$ is a continuous function on $(0, \\infty)$, $\\lim_{x \\to 0} \\ln((1+x)^{1/x}) = \\ln(\\lim_{x \\to 0} (1+x)^{1/x}) = \\ln e = 1$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any rational number $n$ and $a > 0$, $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = n a^{n-1}$.\nReason (R): The expression $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a}$ represents the first derivative of the function $f(x) = x^n$ evaluated at $x = a$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By the limit definition of the derivative, $f\'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$. For $f(x) = x^n$, $f\'(a) = n a^{n-1}$. Both (A) and (R) are true and (R) is the exact justification for (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The limit $\\lim_{x \\to 0} \\frac{|x|}{x}$ does not exist.\nReason (R): The left-hand limit is $-1$ while the right-hand limit is $1$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'For $x < 0$, $|x| = -x \\implies \\frac{|x|}{x} = -1$. For $x > 0$, $|x| = x \\implies \\frac{|x|}{x} = 1$. Since LHL $\\neq$ RHL, the limit does not exist. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to 0} x^2 \\sin(1/x) = 0$.\nReason (R): Since $-1 \\le \\sin(1/x) \\le 1$, we have $-x^2 \\le x^2 \\sin(1/x) \\le x^2$, and $\\lim_{x \\to 0} (\\pm x^2) = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By the Sandwich (Squeeze) Theorem, since $x^2 \\sin(1/x)$ is trapped between two functions that both converge to $0$ as $x \\to 0$, its limit must also be $0$. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In calculus, every limit of the form $0^0$ must evaluate to $1$.\nReason (R): $0^0$ is an indeterminate form whose limiting value depends entirely on the specific functions in the base and exponent.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Assertion (A) is false: for example, $\\lim_{x \\to 0^+} (e^{-1/x})^x = e^{-1} \\neq 1$, showing $0^0$ can yield limits other than $1$. Reason (R) is true: $0^0$ is indeed an indeterminate form. Thus (A) is false but (R) is true.'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to \\infty} \\left(\\frac{x + 3}{x - 1}\\right)^{x + 1} = e^k$, find the value of $k$.',
    options: [],
    correctAnswer: 4,
    explanation: 'Form $1^\\infty$:\n$$f(x) - 1 = \\frac{x + 3}{x - 1} - 1 = \\frac{4}{x - 1}.$$\nTaking the exponent limit:\n$$k = \\lim_{x \\to \\infty} (x + 1) \\left(\\frac{4}{x - 1}\\right) = 4 \\lim_{x \\to \\infty} \\frac{x + 1}{x - 1} = 4(1) = 4.$$\nThus $k = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} (1 + ax + bx^2)^{\\frac{2}{x}} = e^6$, find the value of $a$.',
    options: [],
    correctAnswer: 3,
    explanation: 'Form $1^\\infty$:\n$$L = e^{\\lim_{x \\to 0} \\frac{2}{x} (ax + bx^2)} = e^{2 \\lim_{x \\to 0} (a + bx)} = e^{2a}.$$\nGiven $L = e^6$, we have $2a = 6 \\implies a = 3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{9^x - 1}{3^x - 1}$.',
    options: [],
    correctAnswer: 2,
    explanation: 'Factoring the numerator as a difference of squares:\n$$9^x - 1 = (3^x)^2 - 1 = (3^x - 1)(3^x + 1).$$\nThus:\n$$\\lim_{x \\to 0} \\frac{(3^x - 1)(3^x + 1)}{3^x - 1} = \\lim_{x \\to 0} (3^x + 1) = 3^0 + 1 = 1 + 1 = 2.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the value of the limit: $\\lim_{x \\to 0} \\frac{\\sqrt[4]{1+8x} - 1}{x}$.',
    options: [],
    correctAnswer: 2,
    explanation: 'Using the standard limit $\\lim_{u \\to 0} \\frac{(1+u)^n - 1}{u} = n$ with $u = 8x$ and $n = \\frac{1}{4}$:\n$$\\lim_{x \\to 0} \\frac{(1+8x)^{1/4} - 1}{8x} \\cdot 8 = \\frac{1}{4} \\cdot 8 = 2.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate the limit: $\\lim_{x \\to 1} \\frac{x^{10} - 1}{x^2 - 1}$.',
    options: [],
    correctAnswer: 5,
    explanation: 'Using standard limit $\\lim_{x \\to 1} \\frac{x^n - 1}{x - 1} = n$:\n$$\\lim_{x \\to 1} \\frac{\\frac{x^{10} - 1}{x - 1}}{\\frac{x^2 - 1}{x - 1}} = \\frac{10}{2} = 5.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} \\frac{\\ln(1+5x)}{e^{2x} - 1} = \\frac{p}{q}$, where $p$ and $q$ are coprime positive integers, find the value of $p + q$.',
    options: [],
    correctAnswer: 7,
    explanation: 'Rewriting:\n$$\\lim_{x \\to 0} \\frac{\\ln(1+5x)}{5x} \\cdot \\frac{2x}{e^{2x} - 1} \\cdot \\frac{5}{2} = 1 \\cdot 1 \\cdot \\frac{5}{2} = \\frac{5}{2}.$$\nHere $p = 5$ and $q = 2$, which are coprime.\nThus $p + q = 5 + 2 = 7$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the value of $-2 \\ln\\left[\\lim_{x \\to 0} (\\cos x)^{\\frac{1}{x^2}}\\right]$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Evaluating the limit inside the logarithm (form $1^\\infty$):\n$$L = \\lim_{x \\to 0} (\\cos x)^{\\frac{1}{x^2}} = e^{\\lim_{x \\to 0} \\frac{\\cos x - 1}{x^2}} = e^{-1/2}.$$\nThen:\n$$\\ln L = -\\frac{1}{2}.$$\nMultiplying by $-2$:\n$$-2 \\left(-\\frac{1}{2}\\right) = 1.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\tan(2x) - 2\\sin x}{x^3}$.',
    options: [],
    correctAnswer: 3,
    explanation: 'Using Taylor series:\n$$\\tan(2x) = 2x + \\frac{(2x)^3}{3} + O(x^5) = 2x + \\frac{8}{3}x^3,$$\n$$2\\sin x = 2\\left(x - \\frac{x^3}{6}\\right) = 2x - \\frac{x^3}{3}.$$\nSubtracting the two series:\n$$\\tan(2x) - 2\\sin x = \\left(2x + \\frac{8}{3}x^3\\right) - \\left(2x - \\frac{x^3}{3}\\right) = \\frac{9}{3}x^3 = 3x^3.$$\nDividing by $x^3$:\n$$\\lim_{x \\to 0} \\frac{3x^3}{x^3} = 3.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the value of the limit: $\\lim_{x \\to \\infty} x [\\ln(x + 2) - \\ln x]$.',
    options: [],
    correctAnswer: 2,
    explanation: 'Combine the logarithms:\n$$\\lim_{x \\to \\infty} x \\ln\\left(\\frac{x+2}{x}\\right) = \\lim_{x \\to \\infty} \\ln\\left[\\left(1 + \\frac{2}{x}\\right)^x\\right].$$\nSince $\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^x = e^2$, and $\\ln$ is continuous:\n$$= \\ln(e^2) = 2.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} \\frac{\\sqrt{1+kx} - 1}{x} = 3$, find the value of $k$.',
    options: [],
    correctAnswer: 6,
    explanation: 'Rationalizing the numerator:\n$$\\lim_{x \\to 0} \\frac{(1+kx) - 1}{x(\\sqrt{1+kx} + 1)} = \\lim_{x \\to 0} \\frac{kx}{x(\\sqrt{1+kx} + 1)} = \\frac{k}{1 + 1} = \\frac{k}{2}.$$\nGiven that the limit is $3$:\n$$\\frac{k}{2} = 3 \\implies k = 6.$$'
  }
];

module.exports = { subtopic5Questions };
