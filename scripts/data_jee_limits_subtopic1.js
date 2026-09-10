// scripts/data_jee_limits_subtopic1.js
// Subtopic 1: Continuity of functions at a point and in an interval
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If the function $f(x) = \\begin{cases} \\frac{\\sin((a+1)x) + \\sin x}{x}, & x < 0 \\\\ c, & x = 0 \\\\ \\frac{\\sqrt{x+bx^2} - \\sqrt{x}}{b x^{3/2}}, & x > 0 \\end{cases}$ is continuous at $x = 0$, then the value of $a + c$ is:',
    options: ['-1', '0', '$-\\frac{1}{2}$', '1'],
    correctAnswer: 0,
    explanation: 'For $f(x)$ to be continuous at $x = 0$, we must have $\\lim_{x \\to 0^-} f(x) = f(0) = \\lim_{x \\to 0^+} f(x) = c$.\nLeft-hand limit:\n$$\\lim_{x \\to 0^-} \\left(\\frac{\\sin((a+1)x)}{x} + \\frac{\\sin x}{x}\\right) = (a + 1) + 1 = a + 2.$$\nRight-hand limit:\n$$\\lim_{x \\to 0^+} \\frac{\\sqrt{x}(\\sqrt{1+bx} - 1)}{b x \\sqrt{x}} = \\lim_{x \\to 0^+} \\frac{\\sqrt{1+bx}-1}{bx} = \\lim_{x \\to 0^+} \\frac{1}{\\sqrt{1+bx}+1} = \\frac{1}{2}.$$\nHence $c = \\frac{1}{2}$ and $a + 2 = \\frac{1}{2} \\implies a = -\\frac{3}{2}$.\nTherefore, $a + c = -\\frac{3}{2} + \\frac{1}{2} = -1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Let $[x]$ denote the greatest integer less than or equal to $x$. The function $f(x) = [x] + [-x]$ is continuous on:',
    options: [
      '$\\mathbb{R} \\setminus \\mathbb{Z}$',
      '$\\mathbb{R}$',
      '$\\mathbb{Z}$ only',
      'Empty set $\\emptyset$'
    ],
    correctAnswer: 0,
    explanation: 'By the properties of the greatest integer function:\n$$[x] + [-x] = \\begin{cases} 0, & x \\in \\mathbb{Z} \\\\ -1, & x \\notin \\mathbb{Z} \\end{cases}$$\nFor any non-integer $c \\in \\mathbb{R} \\setminus \\mathbb{Z}$, there exists an open neighborhood where $f(x) = -1$, so $f$ is continuous on $\\mathbb{R} \\setminus \\mathbb{Z}$.\nAt any integer $n \\in \\mathbb{Z}$, $\\lim_{x \\to n} f(x) = -1 \\neq f(n) = 0$, so $f$ is discontinuous at all integers.\nHence $f$ is continuous on $\\mathbb{R} \\setminus \\mathbb{Z}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The total number of points of discontinuity of the function $f(x) = \\frac{1}{x^2 - 3|x| + 2}$ in $\\mathbb{R}$ is:',
    options: ['4', '2', '0', '3'],
    correctAnswer: 0,
    explanation: 'The rational function $f(x)$ is discontinuous wherever its denominator vanishes:\n$$x^2 - 3|x| + 2 = 0 \\implies (|x|-1)(|x|-2) = 0 \\implies |x| = 1 \\text{ or } |x| = 2.$$\nThis gives $x = \\pm 1, \\pm 2$.\nThus, there are exactly 4 points of discontinuity in $\\mathbb{R}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $f(x) = \\begin{cases} \\frac{1 - \\cos(4x)}{x^2}, & x < 0 \\\\ a, & x = 0 \\\\ \\frac{\\sqrt{x}}{\\sqrt{16+\\sqrt{x}} - 4}, & x > 0 \\end{cases}$ is continuous at $x = 0$, then the value of $a$ is:',
    options: ['8', '4', '16', '2'],
    correctAnswer: 0,
    explanation: 'For continuity at $x = 0$, $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^+} f(x) = a$.\nLeft-hand limit:\n$$\\lim_{x \\to 0^-} \\frac{1 - \\cos(4x)}{x^2} = \\lim_{x \\to 0^-} \\frac{2\\sin^2(2x)}{x^2} = 2 \\times (2)^2 = 8.$$\nRight-hand limit:\n$$\\lim_{x \\to 0^+} \\frac{\\sqrt{x}(\\sqrt{16+\\sqrt{x}} + 4)}{16+\\sqrt{x}-16} = \\lim_{x \\to 0^+} (\\sqrt{16+\\sqrt{x}} + 4) = 4 + 4 = 8.$$\nThus, $a = 8$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Let $[\\cdot]$ denote the greatest integer function. The number of points of discontinuity of $f(x) = [x^2 - 3]$ in the open interval $(1, 2)$ is:',
    options: ['2', '1', '3', '0'],
    correctAnswer: 0,
    explanation: 'For $x \\in (1, 2)$, $x^2 \\in (1, 4)$, which means $x^2 - 3 \\in (-2, 1)$.\nThe integer values that $x^2 - 3$ can take inside $(-2, 1)$ are $-1$ and $0$.\n- $x^2 - 3 = -1 \\implies x^2 = 2 \\implies x = \\sqrt{2} \\approx 1.414 \\in (1, 2)$.\n- $x^2 - 3 = 0 \\implies x^2 = 3 \\implies x = \\sqrt{3} \\approx 1.732 \\in (1, 2)$.\nAt both $x = \\sqrt{2}$ and $x = \\sqrt{3}$, the function jumps to the next integer.\nThus, there are exactly 2 points of discontinuity in $(1, 2)$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Let $f:[0, 1] \\to [0, 1]$ be a continuous function. Which of the following statements is always true?',
    options: [
      'There exists at least one $c \\in [0, 1]$ such that $f(c) = c$.',
      'There is no point $c \\in [0, 1]$ where $f(c) = c$.',
      '$f$ must be strictly increasing on $[0, 1]$.',
      '$f$ must be differentiable everywhere in $(0, 1)$.'
    ],
    correctAnswer: 0,
    explanation: 'Define $g(x) = f(x) - x$ on $[0, 1]$. Since $f(x)$ is continuous, $g(x)$ is continuous.\n- $g(0) = f(0) - 0 = f(0) \\ge 0$ (since $f(x) \\in [0, 1]$).\n- $g(1) = f(1) - 1 \\le 0$ (since $f(x) \\in [0, 1]$).\nIf $g(0) = 0$, $c = 0$; if $g(1) = 0$, $c = 1$.\nIf $g(0) > 0$ and $g(1) < 0$, by the Intermediate Value Theorem, there exists $c \\in (0, 1)$ such that $g(c) = 0$, which means $f(c) = c$.\nThis is the celebrated Brouwer Fixed-Point Theorem in one dimension.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the function $f(x) = \\begin{cases} \\frac{\\tan x - \\sin x}{x^3}, & x \\neq 0 \\\\ k, & x = 0 \\end{cases}$ is continuous at $x = 0$, then $k$ equals:',
    options: ['$\\frac{1}{2}$', '1', '0', '$\\frac{1}{3}$'],
    correctAnswer: 0,
    explanation: 'For continuity at $x = 0$, $k = \\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$.\n$$\\lim_{x \\to 0} \\frac{\\tan x(1 - \\cos x)}{x^3} = \\lim_{x \\to 0} \\left(\\frac{\\tan x}{x}\\right) \\cdot \\left(\\frac{1 - \\cos x}{x^2}\\right) = 1 \\cdot \\frac{1}{2} = \\frac{1}{2}.$$\nHence, $k = \\frac{1}{2}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The function $f(x) = \\lim_{n \\to \\infty} \\frac{x^{2n} - 1}{x^{2n} + 1}$ is discontinuous at:',
    options: [
      '$x = 1$ and $x = -1$',
      '$x = 0$ only',
      'Every integer $x \\in \\mathbb{Z}$',
      'No point in $\\mathbb{R}$'
    ],
    correctAnswer: 0,
    explanation: 'We analyze the limit based on $|x|$:\n1. If $|x| < 1$, then $\\lim_{n \\to \\infty} x^{2n} = 0$, so $f(x) = \\frac{0-1}{0+1} = -1$.\n2. If $|x| > 1$, then $\\lim_{n \\to \\infty} \\frac{1 - x^{-2n}}{1 + x^{-2n}} = \\frac{1-0}{1+0} = 1$.\n3. If $x = \\pm 1$, then $x^{2n} = 1$ for all $n$, so $f(\\pm 1) = \\frac{1-1}{1+1} = 0$.\nSince $\\lim_{x \\to 1^-} f(x) = -1$ and $\\lim_{x \\to 1^+} f(x) = 1$, $f$ has jump discontinuities at $x = 1$ and $x = -1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $f(x) = \\begin{cases} \\frac{\\ln(1+ax) - \\ln(1-bx)}{x}, & x \\neq 0 \\\\ k, & x = 0 \\end{cases}$ is continuous at $x = 0$, then $k$ is equal to:',
    options: ['$a + b$', '$a - b$', '$ab$', '$\\frac{a+b}{2}$'],
    correctAnswer: 0,
    explanation: 'Using the standard limit $\\lim_{u \\to 0} \\frac{\\ln(1+u)}{u} = 1$:\n$$\\lim_{x \\to 0} \\frac{\\ln(1+ax) - \\ln(1-bx)}{x} = \\lim_{x \\to 0} \\left(a \\frac{\\ln(1+ax)}{ax} + b \\frac{\\ln(1-bx)}{-bx}\\right) = a(1) + b(1) = a + b.$$\nFor continuity, $k = f(0) = a + b$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The type of discontinuity that $f(x) = \\frac{x^2 - 9}{x - 3}$ exhibits at $x = 3$ is:',
    options: [
      'Removable discontinuity',
      'Jump discontinuity of finite type',
      'Infinite discontinuity',
      'Essential oscillating discontinuity'
    ],
    correctAnswer: 0,
    explanation: 'For $x \\neq 3$, $f(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3$.\nThus, $\\lim_{x \\to 3} f(x) = 3 + 3 = 6$.\nSince the limit exists and is finite, the discontinuity at $x = 3$ can be completely removed by defining $f(3) = 6$.\nHence, it is a removable discontinuity.'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = |x| + |x-1|$ is continuous for all $x \\in \\mathbb{R}$.\nReason (R): The sum of two continuous functions on $\\mathbb{R}$ is always continuous on $\\mathbb{R}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Both $g(x) = |x|$ and $h(x) = |x-1|$ are well-known continuous functions on $\\mathbb{R}$. By the algebra of continuous functions, their sum $f(x) = g(x) + h(x)$ is continuous everywhere on $\\mathbb{R}$. Thus, (A) is true, (R) is true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The signum function $\\text{sgn}(x) = \\begin{cases} 1, & x > 0 \\\\ 0, & x = 0 \\\\ -1, & x < 0 \\end{cases}$ has a jump discontinuity at $x = 0$.\nReason (R): A function $f(x)$ has a jump discontinuity at $x = c$ if both one-sided limits $\\lim_{x \\to c^+} f(x)$ and \\lim_{x \\to c^-} f(x) exist as finite numbers but are not equal.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'At $x = 0$, $\\lim_{x \\to 0^+} \\text{sgn}(x) = 1$ and $\\lim_{x \\to 0^-} \\text{sgn}(x) = -1$. Both limits are finite but distinct ($1 \\neq -1$), which is precisely the definition of a jump discontinuity. Thus, both (A) and (R) are true, and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x)$ is continuous at $x = a$ and $g(x)$ is discontinuous at $x = a$, then $f(x) + g(x)$ must be discontinuous at $x = a$.\nReason (R): The sum of two continuous functions is continuous.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 1,
    explanation: 'Assertion (A) is true: if $h(x) = f(x) + g(x)$ were continuous, then $g(x) = h(x) - f(x)$ would be the difference of two continuous functions, hence continuous, contradicting that $g$ is discontinuous. Reason (R) is true as well (algebra of continuous functions), but (R) states the property for two continuous functions and does not explain why the sum of a continuous and discontinuous function is discontinuous. Hence option 1.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\begin{cases} \\sin(1/x), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$ is discontinuous at $x = 0$.\nReason (R): As $x \\to 0$, $\\sin(1/x)$ oscillates infinitely between $-1$ and $1$, so $\\lim_{x \\to 0} \\sin(1/x)$ does not exist.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $\\lim_{x \\to 0} \\sin(1/x)$ fails to exist due to infinite oscillation between $-1$ and $1$, the function cannot have a limit as $x \\to 0$, and thus cannot be continuous at $x = 0$. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\begin{cases} x \\sin(1/x), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$ is continuous at $x = 0$.\nReason (R): Since $|\\sin(1/x)| \\le 1$ for all $x \\neq 0$, by the Sandwich (Squeeze) Theorem, $\\lim_{x \\to 0} |x \\sin(1/x)| \\le \\lim_{x \\to 0} |x| = 0 = f(0)$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'For any $x \\neq 0$, $-|x| \\le x \\sin(1/x) \\le |x|$. Since $\\lim_{x \\to 0} (-|x|) = \\lim_{x \\to 0} |x| = 0$, by the Squeeze Theorem $\\lim_{x \\to 0} x \\sin(1/x) = 0$. Since $f(0) = 0$, $f(x)$ is continuous at $x = 0$. Both statements are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = \\begin{cases} \\frac{1}{1 + e^{1/x}}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$ has a jump discontinuity at $x = 0$.\nReason (R): The one-sided limits are $\\lim_{x \\to 0^+} f(x) = 0$ and $\\lim_{x \\to 0^-} f(x) = 1$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'As $x \\to 0^+$, $1/x \\to +\\infty \\implies e^{1/x} \\to +\\infty$, so $f(x) \\to \\frac{1}{\\infty} = 0$.\nAs $x \\to 0^-$, $1/x \\to -\\infty \\implies e^{1/x} \\to 0$, so $f(x) \\to \\frac{1}{1+0} = 1$.\nSince both one-sided limits exist, are finite, but differ ($0 \\neq 1$), $f(x)$ has a jump discontinuity at $x = 0$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Every continuous function $f:[a, b] \\to \\mathbb{R}$ is bounded and attains its maximum and minimum values on $[a, b]$.\nReason (R): The Extreme Value Theorem guarantees that a continuous image of a closed bounded interval is a closed bounded interval.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The Extreme Value Theorem states that if $f$ is continuous on a compact (closed and bounded) interval $[a, b]$, then $f([a, b]) = [m, M]$, meaning $f$ is bounded and attains its infimum $m$ and supremum $M$. Both (A) and (R) are true and (R) provides the theoretical foundation for (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x) = x^5 - 3x - 1$, then $f(x) = 0$ has at least one root in the interval $(1, 2)$.\nReason (R): If a function $f$ is continuous on $[a, b]$ and $f(a)f(b) < 0$, then by the Intermediate Value Theorem there exists at least one $c \\in (a, b)$ such that $f(c) = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: '$f(x)$ is a polynomial, so it is continuous everywhere.\nEvaluating at endpoints: $f(1) = 1 - 3 - 1 = -3 < 0$, and $f(2) = 32 - 6 - 1 = 25 > 0$.\nSince $f(1)f(2) < 0$, by the Intermediate Value Theorem (R), there exists at least one root $c \\in (1, 2)$ such that $f(c) = 0$. Thus both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The function $f(x) = [x]$ (greatest integer function) is continuous on the open interval $(1, 2)$.\nReason (R): For all $x \\in (1, 2)$, $[x] = 1$, which is a constant function on $(1, 2)$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'On the open interval $(1, 2)$, no integers are contained. For every $x \\in (1, 2)$, $[x] = 1$. Since a constant function is continuous everywhere, $f(x)$ is continuous on $(1, 2)$. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $f(x)$ is continuous at $x = c$, then $|f(x)|$ must be continuous at $x = c$.\nReason (R): If $|f(x)|$ is continuous at $x = c$, then $f(x)$ must be continuous at $x = c$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 2,
    explanation: 'Assertion (A) is true because by the reverse triangle inequality, $||f(x)| - |f(c)|| \\le |f(x) - f(c)| \\to 0$ as $x \\to c$.\nReason (R) is false: consider $f(x) = \\begin{cases} 1, & x \\ge 0 \\\\ -1, & x < 0 \\end{cases}$. Here $|f(x)| = 1$ is continuous at $x = 0$, but $f(x)$ is discontinuous at $x = 0$. Hence (A) is true but (R) is false.'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the function $f(x) = \\begin{cases} \\frac{\\sin(5x)}{x} + 2, & x < 0 \\\\ k, & x = 0 \\\\ \\frac{e^{3x} - 1}{x} + 4, & x > 0 \\end{cases}$ is continuous at $x = 0$, find the value of $k$.',
    options: [],
    correctAnswer: 7,
    explanation: 'Left-hand limit:\n$$\\lim_{x \\to 0^-} \\left(\\frac{\\sin(5x)}{x} + 2\\right) = 5 + 2 = 7.$$\nRight-hand limit:\n$$\\lim_{x \\to 0^+} \\left(\\frac{e^{3x} - 1}{x} + 4\\right) = 3 + 4 = 7.$$\nFor continuity at $x = 0$, $k = f(0) = 7$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = \\begin{cases} \\frac{1 - \\cos(kx)}{x^2}, & x \\neq 0 \\\\ 8, & x = 0 \\end{cases}$. If $f(x)$ is continuous at $x = 0$ and $k > 0$, find the value of $k$.',
    options: [],
    correctAnswer: 4,
    explanation: 'We evaluate the limit at $x = 0$:\n$$\\lim_{x \\to 0} \\frac{1 - \\cos(kx)}{x^2} = \\lim_{x \\to 0} \\frac{2\\sin^2(kx/2)}{x^2} = 2 \\left(\\frac{k}{2}\\right)^2 = \\frac{k^2}{2}.$$\nFor continuity, $\\frac{k^2}{2} = 8 \\implies k^2 = 16$. Since $k > 0$, $k = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the total number of points of discontinuity of the function $f(x) = [\\sin x]$ in the closed interval $[0, 2\\pi]$, where $[\\cdot]$ denotes the greatest integer function.',
    options: [],
    correctAnswer: 3,
    explanation: 'On $[0, 2\\pi]$, $\\sin x \\in [-1, 1]$.\n- For $x = 0$: $f(0) = [0] = 0$.\n- For $x \\in (0, \\pi/2)$: $\\sin x \\in (0, 1) \\implies [\\sin x] = 0$.\n- At $x = \\pi/2$: $\\sin(\\pi/2) = 1 \\implies f(\\pi/2) = 1$. LHL = 0, RHL = 0, but $f(\\pi/2) = 1$. Discontinuous at $x = \\pi/2$.\n- For $x \\in (\\pi/2, \\pi)$: $[\\sin x] = 0$.\n- At $x = \\pi$: $\\sin \\pi = 0 \\implies f(\\pi) = 0$.\n- For $x \\in (\\pi, 2\\pi)$: $\\sin x \\in (-1, 0) \\implies [\\sin x] = -1$ (at $x = 3\\pi/2$, $[-1] = -1$).\n  At $x = \\pi$: LHL = 0, RHL = -1. Discontinuous at $x = \\pi$.\n- At $x = 2\\pi$: $\\sin(2\\pi) = 0 \\implies f(2\\pi) = 0$. LHL = -1, but $f(2\\pi) = 0$. Discontinuous at $x = 2\\pi$.\nHence, the points of discontinuity in $[0, 2\\pi]$ are $x = \\pi/2, \\pi, 2\\pi$. Total number of points = 3.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the function $f(x) = \\begin{cases} a x^2 + 1, & x \\le 1 \\\\ 3x + b, & 1 < x \\le 3 \\\\ 2x^2 - 1, & x > 3 \\end{cases}$ is continuous everywhere on $\\mathbb{R}$, find the value of $a + b$.',
    options: [],
    correctAnswer: 18,
    explanation: 'Continuity at $x = 1$:\n$$f(1) = a(1)^2 + 1 = a + 1.$$\n$$\\lim_{x \\to 1^+} f(x) = 3(1) + b = 3 + b \\implies a + 1 = 3 + b \\implies a - b = 2.$$\nContinuity at $x = 3$:\n$$f(3) = 3(3) + b = 9 + b.$$\n$$\\lim_{x \\to 3^+} f(x) = 2(3)^2 - 1 = 18 - 1 = 17 \\implies 9 + b = 17 \\implies b = 8.$$\nThen $a = b + 2 = 10$.\nTherefore, $a + b = 10 + 8 = 18$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = \\frac{\\sqrt{1 + kx} - \\sqrt{1 - kx}}{x}$ for $x \\in [-1, 0) \\cup (0, 1]$ and $f(0) = 6$. If $f$ is continuous at $x = 0$, find the value of $k$.',
    options: [],
    correctAnswer: 6,
    explanation: 'Rationalizing the numerator:\n$$\\lim_{x \\to 0} \\frac{(\\sqrt{1+kx} - \\sqrt{1-kx})(\\sqrt{1+kx} + \\sqrt{1-kx})}{x(\\sqrt{1+kx} + \\sqrt{1-kx})} = \\lim_{x \\to 0} \\frac{(1+kx) - (1-kx)}{x(\\sqrt{1+kx} + \\sqrt{1-kx})}.$$\n$$= \\lim_{x \\to 0} \\frac{2kx}{x(\\sqrt{1+kx} + \\sqrt{1-kx})} = \\frac{2k}{1 + 1} = k.$$\nSince $f(0) = 6$, for continuity we must have $k = 6$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If $f(x) = \\begin{cases} \\frac{\\tan(4x)}{\\sin(2x)}, & x \\neq 0 \\\\ \\alpha, & x = 0 \\end{cases}$ is continuous at $x = 0$, find the value of $\\alpha$.',
    options: [],
    correctAnswer: 2,
    explanation: 'Evaluating the limit:\n$$\\lim_{x \\to 0} \\frac{\\tan(4x)}{\\sin(2x)} = \\lim_{x \\to 0} \\left(\\frac{\\tan(4x)}{4x}\\right) \\cdot \\left(\\frac{2x}{\\sin(2x)}\\right) \\cdot \\frac{4}{2} = 1 \\cdot 1 \\cdot 2 = 2.$$\nSince $f$ is continuous at $x = 0$, $\\alpha = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the number of points in the open interval $(-2, 2)$ where the function $f(x) = \\min(x, [x])$ is discontinuous, where $[\\cdot]$ is the greatest integer function.',
    options: [],
    correctAnswer: 3,
    explanation: 'Since $[x] \\le x$ for all $x \\in \\mathbb{R}$, by definition $\\min(x, [x]) = [x]$.\nThe greatest integer function $[x]$ is discontinuous at every integer $n \\in \\mathbb{Z}$.\nIn the open interval $(-2, 2)$, the integers are $-1, 0, 1$.\nAt each integer point, the left-hand limit is $n - 1$ while the right-hand limit and function value are $n$.\nTherefore, there are exactly 3 points of discontinuity.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = \\begin{cases} \\frac{1 - \\cos(4x)}{2x^2}, & x < 0 \\\\ m, & x = 0 \\\\ \\frac{\\sqrt{x}}{\\sqrt{4+\\sqrt{x}} - 2}, & x > 0 \\end{cases}$. If $f(x)$ is continuous at $x = 0$, find the value of $m$.',
    options: [],
    correctAnswer: 4,
    explanation: 'Left-hand limit:\n$$\\lim_{x \\to 0^-} \\frac{1 - \\cos(4x)}{2x^2} = \\lim_{x \\to 0^-} \\frac{2\\sin^2(2x)}{2x^2} = \\lim_{x \\to 0^-} 4\\left(\\frac{\\sin(2x)}{2x}\\right)^2 = 4.$$\nRight-hand limit:\n$$\\lim_{x \\to 0^+} \\frac{\\sqrt{x}(\\sqrt{4+\\sqrt{x}} + 2)}{(4+\\sqrt{x}) - 4} = \\lim_{x \\to 0^+} (\\sqrt{4+\\sqrt{x}} + 2) = 2 + 2 = 4.$$\nFor continuity, $m = f(0) = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the function $f(x) = \\begin{cases} \\frac{\\sin(4x)}{x} + a, & x < 0 \\\\ 7, & x = 0 \\\\ b\\cos x + 4, & x > 0 \\end{cases}$ is continuous at $x = 0$, find the value of $a \\times b$.',
    options: [],
    correctAnswer: 9,
    explanation: 'Left-hand limit:\n$$\\lim_{x \\to 0^-} \\left(\\frac{\\sin(4x)}{x} + a\\right) = 4 + a.$$\nFor continuity at $x = 0$, $4 + a = 7 \\implies a = 3$.\nRight-hand limit:\n$$\\lim_{x \\to 0^+} (b\\cos x + 4) = b(1) + 4 = b + 4.$$\nFor continuity, $b + 4 = 7 \\implies b = 3$.\nThus, $a \\times b = 3 \\times 3 = 9$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $f(x) = \\frac{x^2 - 16}{x - 4}$ for $x \\neq 4$. What value must be assigned to $f(4)$ so that $f(x)$ is continuous at $x = 4$?',
    options: [],
    correctAnswer: 8,
    explanation: 'For $x \\neq 4$, $f(x) = \\frac{(x-4)(x+4)}{x-4} = x + 4$.\nTaking the limit as $x \\to 4$:\n$$\\lim_{x \\to 4} f(x) = \\lim_{x \\to 4} (x + 4) = 4 + 4 = 8.$$\nThus, assigning $f(4) = 8$ eliminates the removable discontinuity and makes $f(x)$ continuous at $x = 4$.'
  }
];

module.exports = { subtopic1Questions };
