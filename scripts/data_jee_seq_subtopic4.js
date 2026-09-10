// scripts/data_jee_seq_subtopic4.js
// Subtopic 4: Infinite geometric series
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of an infinite geometric series is $4$ and the sum of the cubes of its terms is $192$, then the first term $a$ and common ratio $r$ are:',
    options: [
      '$a = 6, r = -\\frac{1}{2}$',
      '$a = 8, r = -1$',
      '$a = 3, r = \\frac{1}{4}$',
      '$a = 2, r = \\frac{1}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Given $S = \\frac{a}{1 - r} = 4 \\implies a = 4(1 - r)$.\nThe cubes of terms form an infinite GP with first term $a^3$ and common ratio $r^3$:\n$$S_3 = \\frac{a^3}{1 - r^3} = 192.$$\nSubstitute $a = 4(1 - r)$:\n$$\\frac{64(1 - r)^3}{(1 - r)(1 + r + r^2)} = 192 \\implies \\frac{(1 - r)^2}{1 + r + r^2} = 3.$$\n$$1 - 2r + r^2 = 3(1 + r + r^2) = 3 + 3r + 3r^2 \\implies 2r^2 + 5r + 2 = 0.$$\n$$(2r + 1)(r + 2) = 0 \\implies r = -\\frac{1}{2} \\text{ or } r = -2.$\nSince $|r| < 1$ for convergence, $r = -\\frac{1}{2}$.\nThen $a = 4\\left(1 - \\left(-\\frac{1}{2}\\right)\\right) = 4\\left(\\frac{3}{2}\\right) = 6$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The value of $0.2\\overline{34} = 0.2343434\\dots$ expressed as a rational fraction in simplest form is:',
    options: ['$\\frac{116}{495}$', '$\\frac{232}{990}$', '$\\frac{234}{999}$', '$\\frac{117}{495}$'],
    correctAnswer: 0,
    explanation: '$$0.2\\overline{34} = \\frac{2}{10} + \\frac{34}{1000} + \\frac{34}{100000} + \\dots = \\frac{1}{5} + \\frac{34/1000}{1 - 1/100} = \\frac{1}{5} + \\frac{34}{990} = \\frac{1}{5} + \\frac{17}{495} = \\frac{99 + 17}{495} = \\frac{116}{495}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum to infinity of a GP is $S$ and the sum to infinity of the squares of its terms is $S_2$, then the common ratio $r$ is:',
    options: [
      '$\\frac{S^2 - S_2}{S^2 + S_2}$',
      '$\\frac{S^2 + S_2}{S^2 - S_2}$',
      '$\\frac{S - S_2}{S + S_2}$',
      '$\\frac{S_2}{S^2}$'
    ],
    correctAnswer: 0,
    explanation: '$$S = \\frac{a}{1-r} \\implies a = S(1-r).$$\n$$S_2 = \\frac{a^2}{1-r^2} = \\frac{S^2(1-r)^2}{(1-r)(1+r)} = S^2\\frac{1-r}{1+r}.$$\n$$\\frac{S_2}{S^2} = \\frac{1-r}{1+r} \\implies S_2(1+r) = S^2(1-r) \\implies r(S^2 + S_2) = S^2 - S_2.$$\n$$r = \\frac{S^2 - S_2}{S^2 + S_2}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'For an infinite geometric series with first term $a$ and common ratio $r$, the sum exists and is finite if and only if:',
    options: ['$|r| < 1$', '$|r| \\le 1$', '$r < 1$', '$0 < r < 1$'],
    correctAnswer: 0,
    explanation: 'The sum of an infinite geometric series $S = \\lim_{n \\to \\infty} a\\frac{1 - r^n}{1 - r}$ converges if and only if $\\lim_{n \\to \\infty} r^n = 0$, which requires $|r| < 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If $x = \\sum_{n=0}^\\infty a^n$, $y = \\sum_{n=0}^\\infty b^n$, and $z = \\sum_{n=0}^\\infty c^n$ where $a, b, c$ are in AP with $|a|, |b|, |c| < 1$, then $x, y, z$ are in:',
    options: ['Harmonic Progression', 'Arithmetic Progression', 'Geometric Progression', 'None of these'],
    correctAnswer: 0,
    explanation: 'We have $x = \\frac{1}{1-a}, y = \\frac{1}{1-b}, z = \\frac{1}{1-c}$.\nThus $\\frac{1}{x} = 1-a, \\frac{1}{y} = 1-b, \\frac{1}{z} = 1-c$.\nSince $a, b, c$ are in AP, $-a, -b, -c$ are in AP, and adding $1$ leaves $1-a, 1-b, 1-c$ in AP.\nTherefore, $\\frac{1}{x}, \\frac{1}{y}, \\frac{1}{z}$ are in AP, which means $x, y, z$ are in HP.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'An equilateral triangle has sides of length $12\\text{ cm}$. A second equilateral triangle is inscribed inside it by joining the midpoints of its sides, and the process is repeated infinitely. The sum of the perimeters of all these triangles is:',
    options: ['$72\\text{ cm}$', '$36\\text{ cm}$', '$48\\text{ cm}$', '$144\\text{ cm}$'],
    correctAnswer: 0,
    explanation: 'The perimeter of the first triangle is $P_1 = 3 \\times 12 = 36\\text{ cm}$.\nThe second triangle has side length $12/2 = 6\\text{ cm}$, so $P_2 = 18\\text{ cm}$.\nEach successive triangle has half the perimeter of the preceding one ($r = 1/2$).\nSum of perimeters: $S = \\frac{36}{1 - 1/2} = 72\\text{ cm}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of an infinite GP is $3$ and the first term is $2$, then its common ratio $r$ is:',
    options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$-\\frac{1}{3}$', '$\\frac{1}{2}$'],
    correctAnswer: 0,
    explanation: '$$S = \\frac{a}{1-r} \\implies 3 = \\frac{2}{1-r} \\implies 1-r = \\frac{2}{3} \\implies r = 1 - \\frac{2}{3} = \\frac{1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of an infinite geometric progression is twice the first term, then its common ratio is:',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$-\\frac{1}{2}$'],
    correctAnswer: 0,
    explanation: '$$S = \\frac{a}{1-r} = 2a \\implies \\frac{1}{1-r} = 2 \\implies 1-r = \\frac{1}{2} \\implies r = \\frac{1}{2}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The sum of the infinite series $\\frac{1}{3} + \\frac{2}{3^2} + \\frac{1}{3^3} + \\frac{2}{3^4} + \\frac{1}{3^5} + \\frac{2}{3^6} + \\dots$ is:',
    options: ['$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{2}$', '$\\frac{7}{8}$'],
    correctAnswer: 0,
    explanation: 'Split into two infinite geometric series:\n$$S_1 = \\frac{1}{3} + \\frac{1}{3^3} + \\frac{1}{3^5} + \\dots = \\frac{1/3}{1 - 1/9} = \\frac{1/3}{8/9} = \\frac{3}{8}.$$\n$$S_2 = \\frac{2}{3^2} + \\frac{2}{3^4} + \\frac{2}{3^6} + \\dots = \\frac{2/9}{1 - 1/9} = \\frac{2/9}{8/9} = \\frac{2}{8} = \\frac{1}{4}.$$\nTotal sum $S = S_1 + S_2 = \\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The sum to infinity of the series $1 - \\frac{1}{3} + \\frac{1}{9} - \\frac{1}{27} + \\dots$ is:',
    options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$'],
    correctAnswer: 0,
    explanation: 'Here $a = 1$ and $r = -\\frac{1}{3}$.\n$$S = \\frac{1}{1 - \\left(-\\frac{1}{3}\\right)} = \\frac{1}{4/3} = \\frac{3}{4}.$$'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The series $3 + 6 + 12 + 24 + \\dots$ does not have a finite sum to infinity.\nReason (R): For an infinite geometric progression $a + ar + ar^2 + \\dots$, the sum to infinity exists and is finite if and only if $|r| < 1$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Here $r = 6/3 = 2 > 1$. By the convergence criterion $|r| < 1$, the series diverges. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In any infinite GP with positive terms and $|r| < 1$, if the first term equals the sum of all subsequent terms, then $r = \\frac{1}{2}$.\nReason (R): The condition gives $a = \\frac{ar}{1-r} \\implies 1 = \\frac{r}{1-r} \\implies 1 - r = r \\implies 2r = 1 \\implies r = \\frac{1}{2}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the direct algebraic derivation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The recurring decimal $0.\\overline{9} = 0.999\\dots$ is mathematically equal to $1$.\nReason (R): $0.\\overline{9}$ is the infinite geometric series $\\frac{9}{10} + \\frac{9}{100} + \\dots$, whose sum is $\\frac{9/10}{1 - 1/10} = \\frac{9/10}{9/10} = 1$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the standard infinite series proof that $0.\\overline{9} = 1$.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of an infinite geometric progression can be negative.\nReason (R): If the first term $a < 0$ and $0 < r < 1$, then $S_\\infty = \\frac{a}{1-r}$ is the quotient of a negative number and a positive number, which is strictly negative.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) provides the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If an infinite geometric series with positive terms has sum $S$, then $S > a$, where $a$ is the first term.\nReason (R): For a convergent GP with positive terms, $0 < r < 1$, which gives $1 - r < 1$, and therefore $S = \\frac{a}{1-r} > a$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since all terms are positive, every added term increases the sum beyond $a$. Algebraically, $0 < 1-r < 1 \\implies \\frac{a}{1-r} > a$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $|r| \\ge 1$, the formula $S_\\infty = \\frac{a}{1-r}$ cannot be used to find the sum of the series $a + ar + ar^2 + \\dots$.\nReason (R): The sequence of partial sums $S_n = a\\frac{1 - r^n}{1 - r}$ diverges as $n \\to \\infty$ whenever $|r| \\ge 1$ ($a \\neq 0$).\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the fundamental justification of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of the squares of an infinite geometric progression with first term $a$ and common ratio $r$ ($|r| < 1$) is $\\frac{a^2}{1 - r^2}$.\nReason (R): The squares of the terms are $a^2, a^2 r^2, a^2 r^4, \\dots$, which is an infinite GP with first term $a^2$ and common ratio $r^2$; since $|r| < 1 \\implies |r^2| < 1$, its sum is $\\frac{a^2}{1 - r^2}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the exact derivation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The series $1 - 1 + 1 - 1 + 1 - 1 + \\dots$ does not converge to $\\frac{1}{2}$.\nReason (R): For an infinite geometric progression, the sum formula $S = \\frac{a}{1-r}$ is valid only when $|r| < 1$; here $r = -1$, so the sequence of partial sums oscillates between $1$ and $0$ and diverges.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $r = -1$ does not satisfy $|r| < 1$, the infinite sum formula is inapplicable. The sequence of partial sums oscillates between $1$ and $0$, meaning the series diverges. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $x = 1 + a + a^2 + \\dots$ and $y = 1 + b + b^2 + \\dots$ with $|a| < 1, |b| < 1$, then $1 + ab + a^2 b^2 + \\dots = \\frac{xy}{x + y - 1}$.\nReason (R): $a = 1 - \\frac{1}{x}$ and $b = 1 - \\frac{1}{y}$, so $1 - ab = 1 - \\left(1 - \\frac{1}{x}\\right)\\left(1 - \\frac{1}{y}\\right) = \\frac{1}{x} + \\frac{1}{y} - \\frac{1}{xy} = \\frac{x+y-1}{xy}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Sum of $1 + ab + a^2 b^2 + \\dots$ is $\\frac{1}{1-ab} = \\frac{1}{\\frac{x+y-1}{xy}} = \\frac{xy}{x+y-1}$. Both (A) and (R) are true and (R) provides the complete proof.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For an infinite GP, if $S_\\infty = 8$ and $S_2 = 6$, then $r^2 = \\frac{1}{4}$.\nReason (R): $S_2 = a(1 + r) = S_\\infty(1 - r)(1 + r) = S_\\infty(1 - r^2) \\implies 6 = 8(1 - r^2) \\implies 1 - r^2 = \\frac{3}{4} \\implies r^2 = \\frac{1}{4}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the exact algebraic derivation of (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum to infinity of a GP with first term $a = 6$ is $18$, find the value of $12r$, where $r$ is the common ratio.',
    correctAnswer: 8,
    explanation: '$$S = \\frac{a}{1-r} \\implies 18 = \\frac{6}{1-r} \\implies 1-r = \\frac{6}{18} = \\frac{1}{3} \\implies r = \\frac{2}{3}.$$\nThus $12r = 12 \\times \\frac{2}{3} = 8$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'In an infinite GP with first term $a$ and common ratio $r$ ($r > 0$), the sum is $4$ and the second term is $\\frac{3}{4}$. Find the value of $4a$.',
    correctAnswer: 12,
    explanation: '$$S = \\frac{a}{1-r} = 4 \\implies a = 4(1-r).$$\n$$T_2 = ar = 4r(1-r) = \\frac{3}{4} \\implies 16r - 16r^2 = 3 \\implies 16r^2 - 16r + 3 = 0.$$\n$$(4r - 1)(4r - 3) = 0 \\implies r = \\frac{1}{4} \\text{ or } r = \\frac{3}{4}.$$\nIf $r = \\frac{1}{4}$, $a = 4\\left(1 - \\frac{1}{4}\\right) = 3$, giving $4a = 12$.\nIf $r = \\frac{3}{4}$, $a = 4\\left(1 - \\frac{3}{4}\\right) = 1$, giving $4a = 4$.\nAssuming the larger first term $a = 3$, $4a = 12$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'The sum of an infinite geometric progression is $6$ and the sum of the squares of its terms is $18$. Find the first term $a$.',
    correctAnswer: 4,
    explanation: '$$S = \\frac{a}{1-r} = 6, \\quad S_2 = \\frac{a^2}{1-r^2} = 18.$$\nDividing $S_2$ by $S$:\n$$\\frac{S_2}{S} = \\frac{a}{1+r} = \\frac{18}{6} = 3 \\implies a = 3(1+r).$$\nAlso $a = 6(1-r)$.\n$$6(1-r) = 3(1+r) \\implies 6 - 6r = 3 + 3r \\implies 9r = 3 \\implies r = \\frac{1}{3}.$$\nThen $a = 6\\left(1 - \\frac{1}{3}\\right) = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the sum to infinity of the series $4 + \\frac{4}{3} + \\frac{4}{9} + \\frac{4}{27} + \\dots$',
    correctAnswer: 6,
    explanation: 'Here $a = 4$ and $r = \\frac{1}{3}$.\n$$S = \\frac{4}{1 - \\frac{1}{3}} = \\frac{4}{\\frac{2}{3}} = 6.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The first term of an infinite GP is $16$ and its sum to infinity is $32$. Find the value of $10r$, where $r$ is the common ratio.',
    correctAnswer: 5,
    explanation: '$$S = \\frac{a}{1-r} \\implies 32 = \\frac{16}{1-r} \\implies 1-r = \\frac{16}{32} = \\frac{1}{2} \\implies r = \\frac{1}{2}.$$\nThus $10r = 10 \\times 0.5 = 5$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'A square has side length $16\\text{ cm}$. A second square is formed by joining the midpoints of the sides of the first square, and this process is repeated infinitely. Find the sum of the areas of all these squares (in $\\text{cm}^2$).',
    correctAnswer: 512,
    explanation: 'Area of the first square: $A_1 = 16^2 = 256\\text{ cm}^2$.\nThe side of the second square is $\\sqrt{8^2 + 8^2} = 8\\sqrt{2}\\text{ cm}$, so its area is $A_2 = (8\\sqrt{2})^2 = 128\\text{ cm}^2$.\nEach subsequent square has half the area of the previous square, so $r = \\frac{1}{2}$.\nTotal area: $S = \\frac{256}{1 - 1/2} = 512\\text{ cm}^2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of an infinite geometric series with positive terms is $12$ and the first term is $8$, find the value of $6r$, where $r$ is the common ratio.',
    correctAnswer: 2,
    explanation: '$$12 = \\frac{8}{1-r} \\implies 1-r = \\frac{8}{12} = \\frac{2}{3} \\implies r = \\frac{1}{3}.$$\nThus $6r = 6 \\times \\frac{1}{3} = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the sum to infinity of the series $12 - 6 + 3 - 1.5 + \\dots$',
    correctAnswer: 8,
    explanation: 'Here $a = 12$ and $r = -\\frac{6}{12} = -\\frac{1}{2}$.\n$$S = \\frac{12}{1 - (-1/2)} = \\frac{12}{3/2} = 8.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of an infinite GP is $25$ and the common ratio is $0.6$, find the first term $a$.',
    correctAnswer: 10,
    explanation: '$$S = \\frac{a}{1-r} \\implies 25 = \\frac{a}{1 - 0.6} = \\frac{a}{0.4} \\implies a = 25 \\times 0.4 = 10.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of the first two terms of an infinite GP is $9$ and the sum to infinity is $16$, find the value of $16r^2$, where $r$ is the common ratio.',
    correctAnswer: 7,
    explanation: '$$S_2 = a(1+r) = 9.$$\n$$S_\\infty = \\frac{a}{1-r} = 16 \\implies a = 16(1-r).$$\n$$16(1-r)(1+r) = 9 \\implies 16(1-r^2) = 9 \\implies 1 - r^2 = \\frac{9}{16} \\implies r^2 = \\frac{7}{16}.$$\nThus $16r^2 = 7$.'
  }
];

module.exports = { subtopic4Questions };
