// scripts/data_jee_seq_subtopic5.js
// Subtopic 5: Insertion of AM and GM
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $A$ is the single arithmetic mean and $G_1, G_2$ are two geometric means between two positive numbers $a$ and $b$, then the value of $\\frac{G_1^2}{G_2} + \\frac{G_2^2}{G_1}$ is:',
    options: ['$2A$', '$A$', '$4A$', '$\\frac{A}{2}$'],
    correctAnswer: 0,
    explanation: 'Let $a, G_1, G_2, b$ be in GP with common ratio $r = (b/a)^{1/3}$.\nThen $G_1 = a r = a^{2/3} b^{1/3}$ and $G_2 = a r^2 = a^{1/3} b^{2/3}$.\n$$\\frac{G_1^2}{G_2} = \\frac{(a^{2/3} b^{1/3})^2}{a^{1/3} b^{2/3}} = \\frac{a^{4/3} b^{2/3}}{a^{1/3} b^{2/3}} = a.$$\n$$\\frac{G_2^2}{G_1} = \\frac{(a^{1/3} b^{2/3})^2}{a^{2/3} b^{1/3}} = \\frac{a^{2/3} b^{4/3}}{a^{2/3} b^{1/3}} = b.$$\nThus $\\frac{G_1^2}{G_2} + \\frac{G_2^2}{G_1} = a + b = 2\\left(\\frac{a+b}{2}\\right) = 2A$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If the arithmetic mean of two positive numbers $a$ and $b$ ($a > b$) is $A$ and their geometric mean is $G$, then the ratio $a : b$ is equal to:',
    options: [
      '$\\frac{A + \\sqrt{A^2 - G^2}}{A - \\sqrt{A^2 - G^2}}$',
      '$\\frac{A - \\sqrt{A^2 - G^2}}{A + \\sqrt{A^2 - G^2}}$',
      '$\\frac{A + G}{A - G}$',
      '$\\frac{A^2 + G^2}{A^2 - G^2}$'
    ],
    correctAnswer: 0,
    explanation: 'Since $a+b = 2A$ and $ab = G^2$, $a$ and $b$ are roots of the quadratic equation $t^2 - 2At + G^2 = 0$.\nBy the quadratic formula, the roots are $t = A \\pm \\sqrt{A^2 - G^2}$.\nSince $a > b$, $a = A + \\sqrt{A^2 - G^2}$ and $b = A - \\sqrt{A^2 - G^2}$.\nThus $\\frac{a}{b} = \\frac{A + \\sqrt{A^2 - G^2}}{A - \\sqrt{A^2 - G^2}}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $n$ arithmetic means are inserted between $1$ and $31$ such that the ratio of the $7$th mean to the $(n-1)$th mean is $5 : 9$, then the value of $n$ is:',
    options: ['$14$', '$15$', '$13$', '$12$'],
    correctAnswer: 0,
    explanation: 'The common difference is $d = \\frac{31 - 1}{n + 1} = \\frac{30}{n + 1}$.\nThe $k$-th mean is $A_k = 1 + kd$.\n$$A_7 = 1 + 7\\left(\\frac{30}{n+1}\\right) = \\frac{n + 1 + 210}{n+1} = \\frac{n + 211}{n+1}.$$\n$$A_{n-1} = 1 + (n-1)\\left(\\frac{30}{n+1}\\right) = \\frac{n + 1 + 30n - 30}{n+1} = \\frac{31n - 29}{n+1}.$$\nGiven $\\frac{A_7}{A_{n-1}} = \\frac{n + 211}{31n - 29} = \\frac{5}{9}$:\n$$9(n + 211) = 5(31n - 29) \\implies 9n + 1899 = 155n - 145.$$\n$$146n = 2044 \\implies n = \\frac{2044}{146} = 14.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $a, b, c$ are positive real numbers such that $a + b + c = 6$, the maximum value of $a^2 b c$ is achieved when:',
    options: [
      '$a = 3, b = \\frac{3}{2}, c = \\frac{3}{2}$',
      '$a = 2, b = 2, c = 2$',
      '$a = 4, b = 1, c = 1$',
      '$a = 1, b = 2, c = 3$'
    ],
    correctAnswer: 0,
    explanation: 'Write the sum as $\\frac{a}{2} + \\frac{a}{2} + b + c = 6$ ($4$ terms).\nBy AM-GM inequality:\n$$\\frac{\\frac{a}{2} + \\frac{a}{2} + b + c}{4} \\ge \\left(\\left(\\frac{a}{2}\\right)^2 b c\\right)^{1/4} = \\left(\\frac{a^2 b c}{4}\\right)^{1/4}.$$\nEquality holds if and only if $\\frac{a}{2} = \\frac{a}{2} = b = c$.\nSince their sum is $6$: $4\\left(\\frac{a}{2}\\right) = 6 \\implies 2a = 6 \\implies a = 3$.\nThen $b = c = \\frac{a}{2} = \\frac{3}{2}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If $m$ arithmetic means are inserted between $a$ and $b$, the common difference $d$ of the resulting progression is:',
    options: [
      '$\\frac{b - a}{m + 1}$',
      '$\\frac{b - a}{m}$',
      '$\\frac{b - a}{m - 1}$',
      '$\\frac{a + b}{m + 1}$'
    ],
    correctAnswer: 0,
    explanation: 'The sequence $a, A_1, A_2, \\dots, A_m, b$ has $m + 2$ terms, where the $(m+2)$-th term is $b$.\n$$b = a + (m + 2 - 1)d = a + (m + 1)d \\implies d = \\frac{b - a}{m + 1}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $A$ and $G$ are the arithmetic mean and geometric mean of two positive distinct numbers, then:',
    options: ['$A > G$', '$A < G$', '$A = G$', '$A G = 1$'],
    correctAnswer: 0,
    explanation: 'For two distinct positive numbers $a$ and $b$:\n$$A - G = \\frac{a+b}{2} - \\sqrt{ab} = \\frac{a - 2\\sqrt{ab} + b}{2} = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2}.$$\nSince $a \\neq b$, $(\\sqrt{a} - \\sqrt{b})^2 > 0$, hence $A > G$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If two geometric means $g_1, g_2$ and one arithmetic mean $A$ are inserted between two positive numbers, then $g_1 g_2$ is equal to:',
    options: ['$G^2$', '$A^2$', '$2A$', '$\\sqrt{A}$'],
    correctAnswer: 0,
    explanation: 'Let the two numbers be $a$ and $b$. The single geometric mean between them is $G = \\sqrt{ab}$, so $G^2 = ab$.\nWhen two GMs $g_1, g_2$ are inserted between $a$ and $b$, the sequence $a, g_1, g_2, b$ is in GP.\nBy the property of equidistant terms, $g_1 g_2 = a b = G^2$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $n$ geometric means $G_1, G_2, \\dots, G_n$ are inserted between two positive numbers $a$ and $b$, the common ratio $r$ is:',
    options: [
      '$\\left(\\frac{b}{a}\\right)^{\\frac{1}{n+1}}$',
      '$\\left(\\frac{b}{a}\\right)^{\\frac{1}{n}}$',
      '$\\left(\\frac{b}{a}\\right)^{\\frac{1}{n-1}}$',
      '$\\left(\\frac{a}{b}\\right)^{\\frac{1}{n+1}}$'
    ],
    correctAnswer: 0,
    explanation: 'The progression $a, G_1, G_2, \\dots, G_n, b$ has $n + 2$ terms.\n$$T_{n+2} = a r^{n+1} = b \\implies r^{n+1} = \\frac{b}{a} \\implies r = \\left(\\frac{b}{a}\\right)^{\\frac{1}{n+1}}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The minimum value of $x + \\frac{1}{x}$ for $x > 0$ is:',
    options: ['$2$', '$1$', '$0$', '$4$'],
    correctAnswer: 0,
    explanation: 'Applying the AM-GM inequality to the positive numbers $x$ and $\\frac{1}{x}$:\n$$\\frac{x + \\frac{1}{x}}{2} \\ge \\sqrt{x \\cdot \\frac{1}{x}} = 1 \\implies x + \\frac{1}{x} \\ge 2.$$\nEquality holds when $x = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the AM between two positive numbers $a$ and $b$ is $\\frac{a^n + b^n}{a^{n-1} + b^{n-1}}$, then $n$ must be equal to:',
    options: ['$1$', '$0$', '$\\frac{1}{2}$', '$-1$'],
    correctAnswer: 0,
    explanation: 'The arithmetic mean of $a$ and $b$ is $\\frac{a+b}{2}$.\n$$\\frac{a^n + b^n}{a^{n-1} + b^{n-1}} = \\frac{a+b}{2} \\implies 2a^n + 2b^n = (a+b)(a^{n-1} + b^{n-1}) = a^n + ab^{n-1} + ba^{n-1} + b^n.$$\n$$a^n - ba^{n-1} = ab^{n-1} - b^n \\implies a^{n-1}(a - b) = b^{n-1}(a - b).$$\nSince $a \\neq b$, $a^{n-1} = b^{n-1} \\implies \\left(\\frac{a}{b}\\right)^{n-1} = 1 = \\left(\\frac{a}{b}\\right)^0 \\implies n - 1 = 0 \\implies n = 1$.'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For any two distinct positive real numbers $a$ and $b$, their arithmetic mean is strictly greater than their geometric mean.\nReason (R): $A - G = \\frac{a+b}{2} - \\sqrt{ab} = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2} > 0$ whenever $a \\neq b$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the exact algebraic proof that $A > G$ for distinct positive numbers.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of $n$ arithmetic means inserted between two numbers $a$ and $b$ is equal to $n$ times the single arithmetic mean between $a$ and $b$.\nReason (R): The inserted means $A_1, A_2, \\dots, A_n$ form an AP of $n$ terms with $A_1 + A_n = a + b$, so $\\sum_{k=1}^n A_k = \\frac{n}{2}(A_1 + A_n) = n\\left(\\frac{a+b}{2}\\right)$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the complete derivation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The product of $n$ positive geometric means inserted between two positive numbers $a$ and $b$ is equal to $(\\sqrt{ab})^n$.\nReason (R): In a GP $a, G_1, \\dots, G_n, b$, terms equidistant from the ends satisfy $G_k G_{n-k+1} = ab$, and pairing all $n$ terms gives $\\prod_{k=1}^n G_k = (ab)^{n/2} = (\\sqrt{ab})^n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) directly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the AM of two numbers $a$ and $b$ is $A$ and their GM is $G$, the quadratic equation whose roots are $a$ and $b$ is $x^2 - 2Ax + G^2 = 0$.\nReason (R): For any quadratic equation with roots $a$ and $b$, the equation is $x^2 - (a+b)x + ab = 0$; here $a+b = 2A$ and $ab = G^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) directly establishes (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For positive real numbers $a, b, c$, the inequality $(a+b)(b+c)(c+a) \\ge 8abc$ always holds.\nReason (R): Applying AM-GM on each factor gives $\\frac{a+b}{2} \\ge \\sqrt{ab}$, $\\frac{b+c}{2} \\ge \\sqrt{bc}$, and $\\frac{c+a}{2} \\ge \\sqrt{ca}$; multiplying these three inequalities yields the result.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Multiplying $a+b \\ge 2\\sqrt{ab}$, $b+c \\ge 2\\sqrt{bc}$, and $c+a \\ge 2\\sqrt{ca}$ gives $(a+b)(b+c)(c+a) \\ge 8\\sqrt{a^2 b^2 c^2} = 8abc$. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $x > 0$, the minimum value of $2^x + 2^{-x}$ is $2$.\nReason (R): By AM-GM inequality, $\\frac{2^x + 2^{-x}}{2} \\ge \\sqrt{2^x \\cdot 2^{-x}} = \\sqrt{1} = 1 \\implies 2^x + 2^{-x} \\ge 2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the exact justification of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The GM of two positive numbers is greater than their AM if the numbers are negative.\nReason (R): Geometric mean is only defined as a real number for pairs of numbers with non-negative product, but AM-GM inequality $A \\ge G$ is valid only for positive real numbers.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'For negative numbers, say $-2$ and $-8$, AM is $\\frac{-2 - 8}{2} = -5$, while GM is $-\\sqrt{16} = -4$. Since $-4 > -5$, GM is indeed greater than AM. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a_1, a_2, \\dots, a_n$ are distinct positive real numbers, then $(a_1 + a_2 + \\dots + a_n)\\left(\\frac{1}{a_1} + \\frac{1}{a_2} + \\dots + \\frac{1}{a_n}\\right) > n^2$.\nReason (R): By AM-GM inequality, $\\frac{\\sum a_i}{n} > \\left(\\prod a_i\\right)^{1/n}$ and $\\frac{\\sum 1/a_i}{n} > \\left(\\prod 1/a_i\\right)^{1/n}$; multiplying the two inequalities gives the result.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Multiplying $\\frac{\\sum a_i}{n} > G$ and $\\frac{\\sum 1/a_i}{n} > \\frac{1}{G}$ yields $\\frac{(\\sum a_i)(\\sum 1/a_i)}{n^2} > 1 \\implies (\\sum a_i)(\\sum 1/a_i) > n^2$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $G$ is the geometric mean between $a$ and $b$, then $\\frac{1}{G^2 - a^2} + \\frac{1}{G^2 - b^2} = \\frac{1}{G^2}$.\nReason (R): $G^2 = ab$, so $\\frac{1}{ab - a^2} + \\frac{1}{ab - b^2} = \\frac{1}{a(b - a)} - \\frac{1}{b(b - a)} = \\frac{b - a}{ab(b - a)} = \\frac{1}{ab} = \\frac{1}{G^2}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the direct algebraic verification of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For positive real numbers $a$ and $b$, the arithmetic mean $A$ can be smaller than the geometric mean $G$.\nReason (R): The inequality $(\\sqrt{a} - \\sqrt{b})^2 \\ge 0$ implies $a + b \\ge 2\\sqrt{ab}$, which guarantees $A \\ge G$ for all positive real numbers.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'For any positive numbers, $A \\ge G$ always holds, so $A$ cannot be smaller than $G$. Hence Assertion (A) is false and Reason (R) is true.'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the sum of all $10$ arithmetic means inserted between $2$ and $38$.',
    correctAnswer: 200,
    explanation: 'The sum of $n$ AMs between $a$ and $b$ is $n\\left(\\frac{a+b}{2}\\right)$.\nHere $n = 10, a = 2, b = 38$.\n$$\\sum_{k=1}^{10} A_k = 10\\left(\\frac{2 + 38}{2}\\right) = 10(20) = 200.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $n$ arithmetic means are inserted between $20$ and $80$ such that the ratio of the first mean to the last mean is $1 : 3$, find the value of $n$.',
    correctAnswer: 11,
    explanation: 'Common difference: $d = \\frac{80 - 20}{n + 1} = \\frac{60}{n + 1}$.\nFirst mean: $A_1 = 20 + d = 20 + \\frac{60}{n+1} = \\frac{20n + 80}{n+1}$.\nLast mean: $A_n = 80 - d = 80 - \\frac{60}{n+1} = \\frac{80n + 20}{n+1}$.\n$$\\frac{A_1}{A_n} = \\frac{20n + 80}{80n + 20} = \\frac{n + 4}{4n + 1} = \\frac{1}{3}.$$\n$$3(n + 4) = 4n + 1 \\implies 3n + 12 = 4n + 1 \\implies n = 11.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the product of the $4$ geometric means inserted between $2$ and $32$.',
    correctAnswer: 4096,
    explanation: 'The product of $n$ GMs between $a$ and $b$ is $(\\sqrt{ab})^n$.\nHere $n = 4, a = 2, b = 32$.\n$$\\sqrt{ab} = \\sqrt{2 \\times 32} = \\sqrt{64} = 8.$$\n$$\\prod_{k=1}^4 G_k = 8^4 = 4096.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the arithmetic mean of two numbers is $25$ and their geometric mean is $20$, find the larger of the two numbers.',
    correctAnswer: 40,
    explanation: '$$a+b = 2(25) = 50, \\quad ab = 20^2 = 400.$$\nRoots of $t^2 - 50t + 400 = 0 \\implies (t-40)(t-10) = 0$.\nThe numbers are $40$ and $10$. The larger number is $40$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $3$ geometric means $G_1, G_2, G_3$ are inserted between $1$ and $256$, find the value of $G_2$.',
    correctAnswer: 16,
    explanation: 'The sequence $1, G_1, G_2, G_3, 256$ is in GP with $5$ terms.\nCommon ratio: $r = (256/1)^{1/4} = 4$.\n$$G_1 = 1 \\times 4 = 4, \\quad G_2 = 4 \\times 4 = 16, \\quad G_3 = 16 \\times 4 = 64.$$\nThus $G_2 = 16$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $11$ arithmetic means are inserted between $28$ and $10$, find the $6$th arithmetic mean.',
    correctAnswer: 19,
    explanation: 'The progression $28, A_1, \\dots, A_{11}, 10$ has $13$ terms.\n$$d = \\frac{10 - 28}{11 + 1} = \\frac{-18}{12} = -1.5.$$\nThe $6$th mean is $A_6 = 28 + 6(-1.5) = 28 - 9 = 19$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The arithmetic mean of two positive numbers exceeds their geometric mean by $2$, and their geometric mean exceeds their harmonic mean by $1.6$. Find the larger of the two numbers.',
    correctAnswer: 16,
    explanation: 'We know $G^2 = AH$.\nGiven $A = G + 2$ and $H = G - 1.6$.\n$$G^2 = (G + 2)(G - 1.6) = G^2 + 0.4G - 3.2 \\implies 0.4G = 3.2 \\implies G = 8.$$\nThen $A = 8 + 2 = 10$.\n$$a+b = 2A = 20, \\quad ab = G^2 = 64.$$\nRoots of $t^2 - 20t + 64 = 0 \\implies (t-16)(t-4) = 0$.\nThe numbers are $16$ and $4$. The larger number is $16$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the geometric mean of two numbers is $12$ and one of the numbers is $9$, find the other number.',
    correctAnswer: 16,
    explanation: '$$G = \\sqrt{ab} = 12 \\implies ab = 144 \\implies 9b = 144 \\implies b = 16.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the minimum value of $9x + \\frac{4}{x}$ for $x > 0$.',
    correctAnswer: 12,
    explanation: 'By AM-GM inequality:\n$$\\frac{9x + \\frac{4}{x}}{2} \\ge \\sqrt{9x \\cdot \\frac{4}{x}} = \\sqrt{36} = 6 \\implies 9x + \\frac{4}{x} \\ge 12.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of two positive numbers $a$ and $b$ ($a > b$) is $6$ times their geometric mean, and the ratio $\\frac{a}{b}$ is expressed in the form $m + n\\sqrt{2}$ where $m$ and $n$ are positive integers, find the value of $m + n$.',
    correctAnswer: 29,
    explanation: 'Given $a + b = 6\\sqrt{ab}$. Dividing both sides by $b$:\n$$\\frac{a}{b} + 1 = 6\\sqrt{\\frac{a}{b}}.$$\nLet $u = \\sqrt{\\frac{a}{b}} > 1$. Then $u^2 - 6u + 1 = 0$.\n$$u = \\frac{6 + \\sqrt{32}}{2} = 3 + 2\\sqrt{2}.$$\n$$\\frac{a}{b} = u^2 = (3 + 2\\sqrt{2})^2 = 9 + 12\\sqrt{2} + 8 = 17 + 12\\sqrt{2}.$$\nHere $m = 17$ and $n = 12$, so $m + n = 17 + 12 = 29$.'
  }
];

module.exports = { subtopic5Questions };
