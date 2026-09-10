// scripts/data_jee_limits_subtopic4.js
// Subtopic 4: L'Hospital rule
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x}$',
    options: ['2', '1', '$\\frac{1}{2}$', '0'],
    correctAnswer: 0,
    explanation: 'Using Taylor series expansions around $x = 0$:\n$$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + O(x^4),$$\n$$e^{-x} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + O(x^4).$$\nNumerator:\n$$(e^x - e^{-x}) - 2x = \\left(2x + \\frac{2x^3}{6}\\right) - 2x = \\frac{x^3}{3} + O(x^4).$$\nDenominator:\n$$x - \\sin x = x - \\left(x - \\frac{x^3}{6}\\right) = \\frac{x^3}{6} + O(x^5).$$\nTaking the ratio:\n$$\\lim_{x \\to 0} \\frac{\\frac{x^3}{3}}{\\frac{x^3}{6}} = \\frac{6}{3} = 2.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\ln(1+x) - x + \\frac{x^2}{2}}{x^3}$',
    options: ['$\\frac{1}{3}$', '$-\\frac{1}{3}$', '$\\frac{1}{6}$', '1'],
    correctAnswer: 0,
    explanation: 'Using the expansion $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots$:\n$$\\ln(1+x) - x + \\frac{x^2}{2} = \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots$$\nDividing by $x^3$ and taking the limit as $x \\to 0$:\n$$\\lim_{x \\to 0} \\frac{\\frac{x^3}{3} + O(x^4)}{x^3} = \\frac{1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}$',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '1', '$\\frac{2}{3}$'],
    correctAnswer: 0,
    explanation: 'Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0} \\frac{\\sec^2 x - 1}{3x^2} = \\lim_{x \\to 0} \\frac{\\tan^2 x}{3x^2} = \\frac{1}{3} \\lim_{x \\to 0} \\left(\\frac{\\tan x}{x}\\right)^2 = \\frac{1}{3}(1)^2 = \\frac{1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\left(\\frac{1}{x^2} - \\frac{1}{\\sin^2 x}\\right)$',
    options: ['$-\\frac{1}{3}$', '$\\frac{1}{3}$', '0', '$-\\frac{1}{6}$'],
    correctAnswer: 0,
    explanation: 'Combine the fractions:\n$$\\lim_{x \\to 0} \\frac{\\sin^2 x - x^2}{x^2 \\sin^2 x} = \\lim_{x \\to 0} \\frac{(\\sin x - x)(\\sin x + x)}{x^4}.$$\nUsing $\\sin x = x - \\frac{x^3}{6} + O(x^5)$:\n$$\\sin x - x = -\\frac{x^3}{6}, \\quad \\sin x + x = 2x.$$\nHence:\n$$\\lim_{x \\to 0} \\frac{\\left(-\\frac{x^3}{6}\\right)(2x)}{x^4} = -\\frac{2}{6} = -\\frac{1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If $\\lim_{x \\to 0} \\frac{a e^x - b \\cos x + c e^{-x}}{x \\sin x} = 2$, then the value of $a + b + c$ is:',
    options: ['4', '2', '6', '0'],
    correctAnswer: 0,
    explanation: 'As $x \\to 0$, denominator $x \\sin x \\to 0$ like $x^2$.\nFor the limit to exist, numerator must vanish at $x = 0$:\n$$a(1) - b(1) + c(1) = 0 \\implies a - b + c = 0.$$\nUsing expansions:\n$$a(1 + x + x^2/2) - b(1 - x^2/2) + c(1 - x + x^2/2) = (a - b + c) + (a - c)x + (a + b + c)\\frac{x^2}{2}.$$\nCoefficient of $x$ must be $0 \\implies a - c = 0 \\implies a = c$.\nThen $a - b + a = 0 \\implies b = 2a$.\nDenominator is $x^2$. The limit is:\n$$\\frac{a + b + c}{2} = \\frac{a + 2a + a}{2} = 2a.$$\nGiven the limit is $2$, we have $2a = 2 \\implies a = 1$.\nThus $a = 1$, $b = 2$, $c = 1$.\nTherefore, $a + b + c = 1 + 2 + 1 = 4$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{x \\cos x - \\sin x}{x^2 \\sin x}$',
    options: ['$-\\frac{1}{3}$', '$\\frac{1}{3}$', '$-\\frac{1}{6}$', '0'],
    correctAnswer: 0,
    explanation: 'Numerator expansion:\n$$x\\left(1 - \\frac{x^2}{2}\\right) - \\left(x - \\frac{x^3}{6}\\right) = x - \\frac{x^3}{2} - x + \\frac{x^3}{6} = -\\frac{x^3}{3}.$$\nDenominator expansion:\n$$x^2 \\sin x \\approx x^3.$$\nTaking the limit:\n$$\\lim_{x \\to 0} \\frac{-\\frac{x^3}{3}}{x^3} = -\\frac{1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'For any constant $k > 0$, the value of $\\lim_{x \\to \\infty} \\frac{\\ln x}{x^k}$ is:',
    options: ['0', '1', '$\\infty$', '$k$'],
    correctAnswer: 0,
    explanation: 'This limit is of the indeterminate form $\\frac{\\infty}{\\infty}$.\nApplying L\'Hospital\'s rule by differentiating numerator and denominator:\n$$\\lim_{x \\to \\infty} \\frac{\\frac{d}{dx}(\\ln x)}{\\frac{d}{dx}(x^k)} = \\lim_{x \\to \\infty} \\frac{1/x}{k x^{k-1}} = \\lim_{x \\to \\infty} \\frac{1}{k x^k} = 0.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - \\sqrt{1-x}}{\\sin x}$',
    options: ['1', '2', '$\\frac{1}{2}$', '0'],
    correctAnswer: 0,
    explanation: 'Indeterminate form $\\frac{0}{0}$. Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0} \\frac{\\frac{1}{2\\sqrt{1+x}} - \\left(-\\frac{1}{2\\sqrt{1-x}}\\right)}{\\cos x} = \\frac{\\frac{1}{2} + \\frac{1}{2}}{1} = 1.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5}$',
    options: ['$\\frac{1}{120}$', '$-\\frac{1}{120}$', '$\\frac{1}{24}$', '0'],
    correctAnswer: 0,
    explanation: 'Using the Taylor expansion of $\\sin x$ up to order 5:\n$$\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + O(x^7).$$\nNumerator:\n$$\\sin x - x + \\frac{x^3}{6} = \\frac{x^5}{120} + O(x^7).$$\nDividing by $x^5$:\n$$\\lim_{x \\to 0} \\frac{\\frac{x^5}{120}}{x^5} = \\frac{1}{120}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Evaluate the limit: $\\lim_{x \\to 1} \\frac{x^x - x}{1 - x + \\ln x}$',
    options: ['-2', '2', '-1', '1'],
    correctAnswer: 0,
    explanation: 'At $x = 1$, the form is $\\frac{1 - 1}{0} = \\frac{0}{0}$.\nApplying L\'Hospital\'s rule:\n$$\\frac{d}{dx}(x^x - x) = x^x(1 + \\ln x) - 1.$$\n$$\\frac{d}{dx}(1 - x + \\ln x) = -1 + \\frac{1}{x}.$$\nAt $x = 1$, numerator is $1(1) - 1 = 0$ and denominator is $-1 + 1 = 0$ (still $\\frac{0}{0}$).\nApplying L\'Hospital\'s rule a second time:\n$$\\frac{d^2}{dx^2}(x^x - x) = x^x(1 + \\ln x)^2 + x^x\\left(\\frac{1}{x}\\right) \\implies \\text{at } x = 1: 1(1) + 1 = 2.$$\n$$\\frac{d^2}{dx^2}\\left(-1 + \\frac{1}{x}\\right) = -\\frac{1}{x^2} \\implies \\text{at } x = 1: -1.$$\nTherefore, the limit is $\\frac{2}{-1} = -2$.'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): L\'Hospital\'s Rule can be applied directly to limits of the indeterminate forms $\\frac{0}{0}$ or $\\frac{\\pm \\infty}{\\pm \\infty}$.\nReason (R): Indeterminate forms such as $0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$, and $\\infty^0$ must be algebraically or logarithmically transformed into $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ before applying L\'Hospital\'s rule.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The hypothesis of L\'Hospital\'s Rule explicitly requires the quotient of two functions whose limits form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. All other indeterminate forms must first be reformulated into quotients. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The non-existence of $\\lim_{x \\to c} \\frac{f\'(x)}{g\'(x)}$ does not necessarily imply that $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$ does not exist.\nReason (R): L\'Hospital\'s Rule is a sufficient condition, not a necessary one: $\\lim \\frac{f\'}{g\'} = L \\implies \\lim \\frac{f}{g} = L$, but the converse does not always hold.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'For example, $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = 1$, but $\\frac{1 + \\cos x}{1}$ oscillates and has no limit as $x \\to \\infty$. Thus failure of $\\lim \\frac{f\'}{g\'}$ to exist does not mean the original limit does not exist. Both (A) and (R) are true and (R) provides the logical reason.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = 1$.\nReason (R): Applying L\'Hospital\'s Rule directly to $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}$ produces $\\lim_{x \\to \\infty} (1 + \\cos x)$, which does not exist due to oscillation.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 1,
    explanation: 'Assertion (A) is true: $\\lim_{x \\to \\infty} \\left(1 + \\frac{\\sin x}{x}\\right) = 1 + 0 = 1$. Reason (R) is also factually true: applying L\'Hospital gives $1 + \\cos x$, which oscillates as $x \\to \\infty$. However, (R) explains why L\'Hospital\'s Rule fails to evaluate the limit, not why the limit equals $1$. Thus option 1.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to 0} \\frac{\\cos x - 1}{x} = 0$.\nReason (R): Applying L\'Hospital\'s rule gives $\\lim_{x \\to 0} \\frac{-\\sin x}{1} = -\\sin(0) = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The limit is of indeterminate form $\\frac{0}{0}$. Differentiating the numerator and denominator yields $\\frac{-\\sin x}{1} \\to 0$. Both (A) and (R) are true and (R) is the direct proof of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Repeated application of L\'Hospital\'s Rule is valid if each successive quotient continues to yield $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ with differentiable functions.\nReason (R): If the conditions for L\'Hospital\'s Rule hold for $\\frac{f\'(x)}{g\'(x)}$, the theorem can be reapplied to obtain $\\lim \\frac{f\'(x)}{g\'(x)} = \\lim \\frac{f\'\'(x)}{g\'\'(x)}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By induction, L\'Hospital\'s Rule may be applied $n$ times provided the quotient of $(n-1)$-th derivatives satisfies the indeterminate hypothesis. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For $\\lim_{x \\to 0} \\frac{1 + \\cos x}{x + 2}$, L\'Hospital\'s Rule cannot be applied.\nReason (R): At $x = 0$, $\\frac{1 + \\cos 0}{0 + 2} = \\frac{2}{2} = 1$, which is a determinate form and not $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Applying L\'Hospital\'s rule to a determinate form yields an incorrect result. The limit can be found by direct substitution: $\\frac{2}{2} = 1$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\frac{1}{2}$.\nReason (R): Differentiating twice via L\'Hospital\'s rule gives $\\lim_{x \\to 0} \\frac{e^x - 1}{2x} = \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'First application gives form $\\frac{0}{0}$: $\\frac{e^x - 1}{2x}$. Second application gives $\\frac{e^x}{2} \\to \\frac{1}{2}$. Both statements are true and (R) is the exact derivation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): $\\lim_{x \\to 0^+} x^x = 1$.\nReason (R): Letting $y = x^x$, $\\ln y = x \\ln x = \\frac{\\ln x}{1/x}$, which is an indeterminate form of type $\\frac{-\\infty}{\\infty}$ evaluating to $0$ by L\'Hospital\'s rule.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By L\'Hospital: $\\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0$. Since $\\ln y \\to 0$, $y = e^{\\ln y} \\to e^0 = 1$. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Using L\'Hospital\'s Rule to prove $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ in foundational calculus is logically flawed.\nReason (R): Differentiating $\\sin x$ requires the derivative formula $\\frac{d}{dx}(\\sin x) = \\cos x$, whose very proof relies on $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, creating circular reasoning.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Proving $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ using L\'Hospital\'s rule assumes the derivative of $\\sin x$ is $\\cos x$, but this derivative itself is established using this limit. This constitutes petitio principii (begging the question / circular reasoning). Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any positive integer $n$, $\\lim_{x \\to \\infty} \\frac{e^x}{x^n} = \\infty$.\nReason (R): Applying L\'Hospital\'s rule $n$ times yields $\\lim_{x \\to \\infty} \\frac{e^x}{n!} = \\infty$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Each differentiation of $x^n$ reduces the power by $1$, leaving $n!$ after $n$ steps while $e^x$ remains unchanged. Since $\\lim_{x \\to \\infty} e^x = \\infty$, the limit is $\\infty$. Both (A) and (R) are true and (R) correctly explains (A).'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the value of the limit: $\\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x}$.',
    options: [],
    correctAnswer: 2,
    explanation: 'Numerator expansion: $(e^x - e^{-x}) - 2x = 2\\left(x + \\frac{x^3}{6}\\right) - 2x = \\frac{x^3}{3}$.\nDenominator expansion: $x - \\sin x = x - \\left(x - \\frac{x^3}{6}\\right) = \\frac{x^3}{6}$.\nLimit is $\\frac{x^3/3}{x^3/6} = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} \\frac{a e^x - b \\cos x + c e^{-x}}{x \\sin x} = 2$, find the value of $a + b + c$.',
    options: [],
    correctAnswer: 4,
    explanation: 'At $x = 0$, numerator is $a - b + c = 0$.\nExpanding numerator:\n$$a(1 + x + x^2/2) - b(1 - x^2/2) + c(1 - x + x^2/2) = (a - b + c) + (a - c)x + (a + b + c)\\frac{x^2}{2}.$$\nFor limit to exist, coefficient of $x$ must be $0 \\implies a = c$.\nThen $2a - b = 0 \\implies b = 2a$.\nLimit is $\\frac{a + b + c}{2} = 2a = 2 \\implies a = 1, b = 2, c = 1$.\nThus $a + b + c = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the absolute value of $6 \\cdot \\lim_{x \\to 0} \\frac{x - \\tan x}{x^3}$.',
    options: [],
    correctAnswer: 2,
    explanation: 'Using the series expansion $\\tan x = x + \\frac{x^3}{3} + O(x^5)$:\n$$x - \\tan x = -\\frac{x^3}{3} + O(x^5).$$\nThus $\\lim_{x \\to 0} \\frac{x - \\tan x}{x^3} = -\\frac{1}{3}$.\nMultiplying by $6$ and taking the absolute value: $\\left|6 \\cdot \\left(-\\frac{1}{3}\\right)\\right| = |-2| = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} \\frac{\\sin(2x) + a \\sin x}{x^3} = b$ is finite, find the absolute value of $a + b$.',
    options: [],
    correctAnswer: 3,
    explanation: 'Using expansions:\n$$\\sin(2x) = 2x - \\frac{8x^3}{6} = 2x - \\frac{4}{3}x^3,$$\n$$a\\sin x = ax - \\frac{a}{6}x^3.$$\nNumerator:\n$$(2 + a)x - \\left(\\frac{4}{3} + \\frac{a}{6}\\right)x^3.$$\nFor a finite limit, coefficient of $x$ must be $0 \\implies 2 + a = 0 \\implies a = -2$.\nThen $b = -\\left(\\frac{4}{3} - \\frac{2}{6}\\right) = -1$.\nHence $a + b = -2 + (-1) = -3$.\nThe absolute value is $|-3| = 3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate: $8 \\cdot \\lim_{x \\to 0} \\frac{1 - \\cos(1 - \\cos x)}{x^4}$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Let $u = 1 - \\cos x$. As $x \\to 0$, $u \\to 0$.\n$$\\lim_{x \\to 0} \\frac{1 - \\cos u}{u^2} \\cdot \\left(\\frac{u}{x^2}\\right)^2 = \\lim_{u \\to 0} \\frac{1 - \\cos u}{u^2} \\cdot \\left(\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}\\right)^2.$$\n$$= \\frac{1}{2} \\cdot \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{8}.$$\nMultiplying by $8$: $8 \\cdot \\frac{1}{8} = 1$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} \\frac{\\cos x - 1 + \\frac{x^2}{2}}{x^4} = L$, find the value of $24L$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Using the Taylor series of $\\cos x$:\n$$\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\frac{x^6}{720} + \\dots$$\n$$\\cos x - 1 + \\frac{x^2}{2} = \\frac{x^4}{24} - O(x^6).$$\nThus $L = \\lim_{x \\to 0} \\frac{x^4/24}{x^4} = \\frac{1}{24}$.\nTherefore, $24L = 24 \\cdot \\frac{1}{24} = 1$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate the limit: $\\lim_{x \\to 1} \\frac{x^7 - 2x^5 + 1}{x^3 - 3x^2 + 2}$.',
    options: [],
    correctAnswer: 1,
    explanation: 'At $x = 1$, both numerator $1 - 2 + 1 = 0$ and denominator $1 - 3 + 2 = 0$ vanish (form $\\frac{0}{0}$).\nApplying L\'Hospital\'s rule:\n$$\\lim_{x \\to 1} \\frac{\\frac{d}{dx}(x^7 - 2x^5 + 1)}{\\frac{d}{dx}(x^3 - 3x^2 + 2)} = \\lim_{x \\to 1} \\frac{7x^6 - 10x^4}{3x^2 - 6x} = \\frac{7(1) - 10(1)}{3(1) - 6(1)} = \\frac{-3}{-3} = 1.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate: $3 \\cdot \\lim_{x \\to 0} \\frac{\\ln(1+2x) - 2x + 2x^2}{x^3}$.',
    options: [],
    correctAnswer: 8,
    explanation: 'Using the series expansion $\\ln(1+u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} - \\dots$ with $u = 2x$:\n$$\\ln(1+2x) = 2x - \\frac{(2x)^2}{2} + \\frac{(2x)^3}{3} - O(x^4) = 2x - 2x^2 + \\frac{8x^3}{3} - O(x^4).$$\nNumerator:\n$$\\ln(1+2x) - 2x + 2x^2 = \\frac{8x^3}{3} - O(x^4).$$\nLimit is $\\frac{8}{3}$.\nMultiplying by $3$: $3 \\cdot \\frac{8}{3} = 8$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate: $2 \\cdot \\lim_{x \\to 0} \\frac{e^{x^2} - \\cos x}{x^2}$.',
    options: [],
    correctAnswer: 3,
    explanation: 'Using series expansions:\n$$e^{x^2} = 1 + x^2 + O(x^4),$$\n$$\\cos x = 1 - \\frac{x^2}{2} + O(x^4).$$\nNumerator:\n$$e^{x^2} - \\cos x = (1 + x^2) - \\left(1 - \\frac{x^2}{2}\\right) = \\frac{3}{2}x^2.$$\nLimit is $\\lim_{x \\to 0} \\frac{\\frac{3}{2}x^2}{x^2} = \\frac{3}{2}$.\nMultiplying by $2$: $2 \\cdot \\frac{3}{2} = 3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\lim_{x \\to 0} \\frac{a x - \\sin x}{x^3} = \\frac{1}{6}$, find the value of $a$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Using the series $\\sin x = x - \\frac{x^3}{6} + O(x^5)$:\n$$a x - \\sin x = (a - 1)x + \\frac{x^3}{6} + O(x^5).$$\nFor the limit $\\lim_{x \\to 0} \\frac{ax - \\sin x}{x^3}$ to be finite, the coefficient of $x$ must vanish:\n$$a - 1 = 0 \\implies a = 1.$$\nThen the limit is $\\frac{1}{6}$, matching the given value.\nThus $a = 1$.'
  }
];

module.exports = { subtopic4Questions };
