// scripts/data_jee_seq_subtopic2.js
// Subtopic 2: General term and sum of AP and GP
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of the first $n$ terms of a sequence is $S_n = 2n^2 + 5n$, then the sequence is:',
    options: [
      'An AP with common difference $4$',
      'An AP with common difference $2$',
      'A GP with common ratio $2$',
      'Neither an AP nor a GP'
    ],
    correctAnswer: 0,
    explanation: 'The $n$-th term is $T_n = S_n - S_{n-1} = [2n^2 + 5n] - [2(n-1)^2 + 5(n-1)] = 2(2n - 1) + 5 = 4n + 3$.\nSince $T_n - T_{n-1} = (4n + 3) - (4n - 1) = 4$ is constant, the sequence is an AP with common difference $4$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $S_n = \\sum_{k=1}^n \\frac{1}{k(k+1)}$, then $\\lim_{n \\to \\infty} S_n$ is equal to:',
    options: ['$1$', '$0$', '$\\frac{1}{2}$', '$2$'],
    correctAnswer: 0,
    explanation: 'Using partial fractions:\n$$\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}.$$\nSumming from $k=1$ to $n$ telescopically:\n$$S_n = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1}.$$\nTaking the limit as $n \\to \\infty$ gives $\\lim_{n \\to \\infty} S_n = 1 - 0 = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If $a, b, c$ are the $p$-th, $q$-th, and $r$-th terms of an AP and also the $p$-th, $q$-th, and $r$-th terms of a GP respectively, then the value of $a^{b-c} b^{c-a} c^{a-b}$ is:',
    options: ['$1$', '$0$', '$abc$', '$a+b+c$'],
    correctAnswer: 0,
    explanation: 'Since $a, b, c$ are in GP, let $a = A R^{p-1}, b = A R^{q-1}, c = A R^{r-1}$.\nAlso $a, b, c$ are the $p, q, r$-th terms of an AP with common difference $D$:\n$$b - c = (q - r)D, \\quad c - a = (r - p)D, \\quad a - b = (p - q)D.$$\nTaking logarithms of $P = a^{b-c} b^{c-a} c^{a-b}$:\n$$\\ln P = (b-c)\\ln a + (c-a)\\ln b + (a-b)\\ln c.$$\nSubstitute $a, b, c$:\n$$\\ln P = D\\sum_{\\text{cyc}} (q-r)[\\ln A + (p-1)\\ln R] = D\\ln A \\sum (q-r) + D\\ln R \\sum (q-r)(p-1).$$\nSince $\\sum (q-r) = 0$ and $\\sum (q-r)(p-1) = \\sum (pq - pr - q + r) = 0$, we have $\\ln P = 0 \\implies P = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The sum of the first $n$ terms of a GP is $S_n = 3(2^n - 1)$. The general term $T_n$ of this GP is:',
    options: ['$3 \\times 2^{n-1}$', '$3 \\times 2^n$', '$6 \\times 2^{n-1}$', '$2^{n-1}$'],
    correctAnswer: 0,
    explanation: 'For $n = 1$, $T_1 = S_1 = 3(2^1 - 1) = 3$.\nFor $n \\ge 2$, $T_n = S_n - S_{n-1} = 3(2^n - 1) - 3(2^{n-1} - 1) = 3(2^n - 2^{n-1}) = 3 \\times 2^{n-1}$.\nThis holds for all $n \\ge 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The value of the sum $\\sum_{k=1}^{10} (2k + 3 \\cdot 2^k)$ is:',
    options: ['$6248$', '$6138$', '$6242$', '$6150$'],
    correctAnswer: 0,
    explanation: 'Split into two sums: $S = 2\\sum_{k=1}^{10} k + 3\\sum_{k=1}^{10} 2^k$.\nFirst sum: $2 \\times \\frac{10 \\times 11}{2} = 110$.\nSecond sum is a GP with $a = 2, r = 2, n = 10$:\n$$3 \\times \\frac{2(2^{10} - 1)}{2 - 1} = 3 \\times 2(1023) = 6 \\times 1023 = 6138.$$\nTotal sum: $110 + 6138 = 6248$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the $n$-th term of a sequence is $a_n = \\frac{n}{n+1}$, then the product of the first $n$ terms $a_1 a_2 \\cdots a_n$ is:',
    options: ['$\\frac{1}{n+1}$', '$\\frac{n}{n+1}$', '$\\frac{1}{n!}$', '$\\frac{1}{2n}$'],
    correctAnswer: 0,
    explanation: '$$a_1 a_2 \\cdots a_n = \\left(\\frac{1}{2}\\right)\\left(\\frac{2}{3}\\right)\\left(\\frac{3}{4}\\right) \\cdots \\left(\\frac{n}{n+1}\\right) = \\frac{1}{n+1}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of the first $n$ terms of an AP is equal to the sum of the next $m$ terms of the same AP, then the common difference $d$ in terms of the first term $a$ and $n, m$ is given by:',
    options: [
      '$\\frac{2am}{n(n-m) + m(m+1)}$',
      '$\\frac{2am}{m^2 - n^2 + m + n}$',
      '$\\frac{2a(m-n)}{m+n}$',
      '$\\frac{a}{m+n}$'
    ],
    correctAnswer: 0,
    explanation: 'Sum of first $n$ terms: $S_n$.\nSum of next $m$ terms: $S_{n+m} - S_n$.\nGiven $S_n = S_{n+m} - S_n \\implies 2S_n = S_{n+m}$.\n$$2\\frac{n}{2}[2a + (n-1)d] = \\frac{n+m}{2}[2a + (n+m-1)d].$$\n$$n[2a + (n-1)d] = \\frac{n+m}{2}[2a + (n+m-1)d].$$\nSolving for $d$:\n$$4na + 2n(n-1)d = 2(n+m)a + (n+m)(n+m-1)d$$\n$$2a[2n - (n+m)] = d[(n+m)(n+m-1) - 2n(n-1)]$$\n$$2a(n-m) = d[n^2 + 2nm + m^2 - n - m - 2n^2 + 2n] = d[-n^2 + n + 2nm + m^2 - m]$$\nThus $d = \\frac{2a(n-m)}{m(m-1) + 2nm - n(n-1)} = \\frac{2am}{n(n-m) + m(m+1)}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The sum of the series $1 + 2 + 3 + \\dots + n$ is $S_1$, and the sum of their cubes $1^3 + 2^3 + 3^3 + \\dots + n^3$ is $S_3$. The relation between $S_1$ and $S_3$ is:',
    options: ['$S_3 = S_1^2$', '$S_3 = S_1^3$', '$S_3 = 2S_1^2$', '$S_3 = S_1(S_1 + 1)$'],
    correctAnswer: 0,
    explanation: 'We know that $S_1 = \\frac{n(n+1)}{2}$ and $S_3 = \\left(\\frac{n(n+1)}{2}\\right)^2$. Therefore, $S_3 = S_1^2$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of first $n$ terms of a GP is $S_n$ and product of first $n$ terms is $P$, and $R$ is the sum of their reciprocals, then $P^2 R^n$ is equal to:',
    options: ['$S_n^n$', '$S_n^{2n}$', '$S_n$', '$S_n^2$'],
    correctAnswer: 0,
    explanation: 'Let the GP terms be $a, ar, ar^2, \\dots, ar^{n-1}$.\nThen $S_n = a\\frac{r^n - 1}{r - 1}$, and $P = a^n r^{\\frac{n(n-1)}{2}}$.\n$R = \\frac{1}{a} + \\frac{1}{ar} + \\dots + \\frac{1}{ar^{n-1}} = \\frac{1}{a}\\frac{(1/r)^n - 1}{1/r - 1} = \\frac{1}{a r^{n-1}}\\frac{r^n - 1}{r - 1} = \\frac{S_n}{a^2 r^{n-1}}$.\nThus $\\frac{S_n}{R} = a^2 r^{n-1}$, so $\\left(\\frac{S_n}{R}\\right)^n = a^{2n} r^{n(n-1)} = P^2$.\nTherefore, $P^2 R^n = S_n^n$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the $n$-th term of a sequence is $a_n = 4n - 1$, find the sum of the first $25$ terms.',
    options: ['$1275$', '$1250$', '$1300$', '$1225$'],
    correctAnswer: 0,
    explanation: 'Here $a_1 = 4(1) - 1 = 3$ and $a_{25} = 4(25) - 1 = 99$.\n$$S_{25} = \\frac{25}{2}(a_1 + a_{25}) = \\frac{25}{2}(3 + 99) = \\frac{25}{2}(102) = 25 \\times 51 = 1275.$$'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the sum of the first $n$ terms of a sequence is $S_n = c(r^n - 1)$ with $r \\neq 1$, then the sequence is a geometric progression.\nReason (R): For any sequence, $T_n = S_n - S_{n-1}$ for $n \\ge 2$; here $T_n = c(r^n - r^{n-1}) = c(r-1)r^{n-1}$, which is in the standard GP form $A r^{n-1}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $T_n = c(r-1)r^{n-1}$ for all $n \\ge 1$, the ratio $T_{n+1}/T_n = r$ is constant, confirming that the sequence is a GP. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For any sequence, if $S_n$ denotes the sum of the first $n$ terms, then the $n$-th term is given by $T_n = S_n - S_{n-1}$ for all $n \\ge 2$, and $T_1 = S_1$.\nReason (R): By definition, $S_n = T_1 + T_2 + \\dots + T_{n-1} + T_n = S_{n-1} + T_n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the fundamental identity providing the definition and proof of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of the first $n$ terms of the sequence whose general term is $T_k = k(k+1)$ is $\\frac{n(n+1)(n+2)}{3}$.\nReason (R): $k(k+1) = k^2 + k$, and $\\sum_{k=1}^n k^2 + \\sum_{k=1}^n k = \\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2} = \\frac{n(n+1)(n+2)}{3}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Adding the standard sum of squares and sum of natural numbers directly yields $\\frac{n(n+1)(n+2)}{3}$. Both (A) and (R) are true, and (R) is the exact derivation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $T_n = 3n^2 + 2$, then the sequence $T_n$ is an arithmetic progression.\nReason (R): An arithmetic progression has a general term that is a linear polynomial in $n$, i.e., of the form $An + B$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'The general term of an AP is $a + (n-1)d = dn + (a-d)$, which is strictly a linear polynomial in $n$. Since $T_n = 3n^2 + 2$ is quadratic, the sequence is NOT an AP. Hence (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the terms of a geometric progression are all positive, then the logarithms of these terms form an arithmetic progression.\nReason (R): If $a_n = a r^{n-1}$ with $a > 0, r > 0$, then $\\ln a_n = \\ln a + (n-1)\\ln r$, which represents the $n$-th term of an AP with first term $\\ln a$ and common difference $\\ln r$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true, and (R) directly demonstrates that taking the logarithm maps a geometric progression into an arithmetic progression.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of the first $n$ natural numbers is given by $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.\nReason (R): The sequence of natural numbers $1, 2, 3, \\dots, n$ is an AP with first term $1$ and common difference $1$, whose sum is $\\frac{n}{2}(1 + n)$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the correct explanation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a_1, a_2, a_3, \\dots$ is an AP, then $2^{a_1}, 2^{a_2}, 2^{a_3}, \\dots$ is a GP.\nReason (R): The ratio of consecutive terms is $\\frac{2^{a_{n+1}}}{2^{a_n}} = 2^{a_{n+1} - a_n} = 2^d$, which is a non-zero constant for all $n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $a_{n+1} - a_n = d$, the ratio between consecutive exponential terms is constant and equals $2^d$. Both (A) and (R) are true, and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the sum of the first $n$ terms of a sequence is $S_n = 3n - 2$, then the sequence is an AP.\nReason (R): $T_n = S_n - S_{n-1} = (3n - 2) - [3(n-1) - 2] = 3$ for $n \\ge 2$, but $T_1 = S_1 = 1$, so the sequence is $1, 3, 3, 3, \\dots$, which is NOT an AP.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'Here $T_1 = 1$ and $T_2 = 3$, giving $T_2 - T_1 = 2$, but $T_3 - T_2 = 3 - 3 = 0$. Hence the sequence is not an AP. (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $S_n = \\sum_{k=1}^n k^3$, then $S_n = \\left(\\sum_{k=1}^n k\\right)^2$.\nReason (R): By the identity $k^4 - (k-1)^4 = 4k^3 - 6k^2 + 4k - 1$, summing over $k=1$ to $n$ establishes $\\sum k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 = (\\sum k)^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true, and (R) provides the telescoping derivation of the famous sum of cubes identity.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of the first $n$ terms of a GP with $r = 1$ is $n a$.\nReason (R): When $r = 1$, all terms are equal to $a$, and adding $n$ identical copies of $a$ gives $a + a + \\dots + a = n a$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) directly explains (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of the first $n$ terms of a sequence is $S_n = 5n^2 + 2n$, find the $7$th term of the sequence.',
    correctAnswer: 67,
    explanation: 'The $n$-th term is $T_n = S_n - S_{n-1} = [5n^2 + 2n] - [5(n-1)^2 + 2(n-1)] = 5(2n - 1) + 2 = 10n - 3$.\nFor $n = 7$, $T_7 = 10(7) - 3 = 70 - 3 = 67$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the value of the sum $\\sum_{k=1}^{10} (2k - 1)$.',
    correctAnswer: 100,
    explanation: 'The sum of the first $n$ odd natural numbers is $n^2$. For $n = 10$, the sum is $10^2 = 100$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the sum of the series $\\sum_{k=1}^{20} k(k+2)$.',
    correctAnswer: 3290,
    explanation: '$$\\sum_{k=1}^{20} k(k+2) = \\sum_{k=1}^{20} (k^2 + 2k) = \\sum_{k=1}^{20} k^2 + 2\\sum_{k=1}^{20} k.$$\n$$\\sum_{k=1}^{20} k^2 = \\frac{20 \\times 21 \\times 41}{6} = 10 \\times 7 \\times 41 = 2870.$$\n$$2\\sum_{k=1}^{20} k = 2 \\times \\frac{20 \\times 21}{2} = 420.$$\nTotal sum: $2870 + 420 = 3290$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of the first $n$ terms of a GP is $S_n = 2(3^n - 1)$, find the common ratio $r$.',
    correctAnswer: 3,
    explanation: '$$T_1 = S_1 = 2(3^1 - 1) = 4.$$\n$$T_2 = S_2 - S_1 = 2(3^2 - 1) - 4 = 16 - 4 = 12.$$\n$$r = \\frac{T_2}{T_1} = \\frac{12}{4} = 3.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Evaluate the sum $\\sum_{k=1}^8 3 \\cdot 2^{k-1}$.',
    correctAnswer: 765,
    explanation: 'This is the sum of the first $8$ terms of a GP with $a = 3$ and $r = 2$:\n$$S_8 = \\frac{3(2^8 - 1)}{2 - 1} = 3(256 - 1) = 3(255) = 765.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\sum_{k=1}^n k^3 = 44100$, find the value of $n$.',
    correctAnswer: 20,
    explanation: 'Using the identity $\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$:\n$$\\left(\\frac{n(n+1)}{2}\\right)^2 = 44100 \\implies \\frac{n(n+1)}{2} = \\sqrt{44100} = 210.$$\n$$n(n+1) = 420 = 20 \\times 21 \\implies n = 20.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the $n$-th term of a sequence is $a_n = 3n + 1$, find the sum of the first $15$ terms.',
    correctAnswer: 375,
    explanation: 'Here $a_1 = 3(1) + 1 = 4$ and $a_{15} = 3(15) + 1 = 46$.\n$$S_{15} = \\frac{15}{2}(a_1 + a_{15}) = \\frac{15}{2}(4 + 46) = \\frac{15}{2}(50) = 15 \\times 25 = 375.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the product of the first $5$ terms of a GP whose third term is $3$.',
    correctAnswer: 243,
    explanation: 'Let the terms be $\\frac{a}{r^2}, \\frac{a}{r}, a, ar, ar^2$, where the third term is $a = 3$.\nThe product of the $5$ terms is:\n$$P = \\left(\\frac{a}{r^2}\\right)\\left(\\frac{a}{r}\\right)(a)(ar)(ar^2) = a^5 = 3^5 = 243.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the sum of the first $6$ terms of the sequence whose $n$-th term is $T_n = 2^n + n$.',
    correctAnswer: 147,
    explanation: '$$S_6 = \\sum_{n=1}^6 (2^n + n) = \\sum_{n=1}^6 2^n + \\sum_{n=1}^6 n.$$\n$$\\sum_{n=1}^6 2^n = \\frac{2(2^6 - 1)}{2 - 1} = 2(63) = 126.$$\n$$\\sum_{n=1}^6 n = \\frac{6 \\times 7}{2} = 21.$$\nTotal sum: $126 + 21 = 147$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\sum_{k=1}^n \\frac{1}{(2k-1)(2k+1)} = \\frac{20}{41}$, find the value of $n$.',
    correctAnswer: 20,
    explanation: 'Using partial fractions:\n$$\\frac{1}{(2k-1)(2k+1)} = \\frac{1}{2}\\left(\\frac{1}{2k-1} - \\frac{1}{2k+1}\\right).$$\nSumming telescopically from $k=1$ to $n$:\n$$S_n = \\frac{1}{2}\\left(1 - \\frac{1}{2n+1}\\right) = \\frac{1}{2}\\left(\\frac{2n}{2n+1}\\right) = \\frac{n}{2n+1}.$$\nSetting $\\frac{n}{2n+1} = \\frac{20}{41} \\implies 41n = 40n + 20 \\implies n = 20$.'
  }
];

module.exports = { subtopic2Questions };
