// scripts/data_jee_seq_subtopic1.js
// Subtopic 1: Arithmetic Progression
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the ratio of the sum of the first $n$ terms of two arithmetic progressions is $(7n + 1) : (4n + 27)$, then the ratio of their $11$th terms is:',
    options: ['$4 : 3$', '$3 : 4$', '$7 : 4$', '$2 : 3$'],
    correctAnswer: 0,
    explanation: 'Let the two APs have first terms $a_1, a_2$ and common differences $d_1, d_2$.\n$$\\frac{S_n}{S_n\'} = \\frac{\\frac{n}{2}[2a_1 + (n-1)d_1]}{\\frac{n}{2}[2a_2 + (n-1)d_2]} = \\frac{a_1 + \\frac{n-1}{2}d_1}{a_2 + \\frac{n-1}{2}d_2} = \\frac{7n + 1}{4n + 27}.$$\nTo find the ratio of their $11$th terms $\\frac{a_1 + 10d_1}{a_2 + 10d_2}$, we set $\\frac{n-1}{2} = 10 \\implies n = 21$.\nSubstituting $n = 21$:\n$$\\frac{T_{11}}{T_{11}\'} = \\frac{7(21) + 1}{4(21) + 27} = \\frac{147 + 1}{84 + 27} = \\frac{148}{111} = \\frac{4}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the $p$-th term of an AP is $q$ and the $q$-th term is $p$, then its $(p+q)$-th term is:',
    options: ['$0$', '$p+q$', '$p-q$', '$pq$'],
    correctAnswer: 0,
    explanation: 'We have $T_p = a + (p-1)d = q$ and $T_q = a + (q-1)d = p$.\nSubtracting the second from the first gives $(p-q)d = q - p = -(p-q) \\implies d = -1$.\nThen $a = p + q - 1$.\nThe $(p+q)$-th term is $T_{p+q} = a + (p+q-1)d = (p+q-1) + (p+q-1)(-1) = 0$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The number of common terms in the two arithmetic progressions $4, 9, 14, 19, \\dots, 404$ and $3, 10, 17, 24, \\dots, 409$ is:',
    options: ['$11$', '$12$', '$10$', '$13$'],
    correctAnswer: 0,
    explanation: 'First AP: $a_1 = 4, d_1 = 5$, last term $404$.\nSecond AP: $a_2 = 3, d_2 = 7$, last term $409$.\nThe common difference of common terms is $\\text{LCM}(5, 7) = 35$.\nBy inspection, the first common term is $c_1 = 24$ (since $24 = 4 + 4(5) = 3 + 3(7)$).\nThe common terms form an AP: $24, 59, 94, \\dots, c_k$.\nThe maximum value cannot exceed $\\min(404, 409) = 404$.\n$$24 + (k-1)35 \\le 404 \\implies (k-1)35 \\le 380 \\implies k-1 \\le \\frac{380}{35} = 10.857 \\implies k \\le 11.857.$$\nThus there are $11$ common terms.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $S_n$ denotes the sum of the first $n$ terms of an AP such that $S_m = n$ and $S_n = m$ ($m \\neq n$), then $S_{m+n}$ is equal to:',
    options: ['$-(m+n)$', '$m+n$', '$0$', '$mn$'],
    correctAnswer: 0,
    explanation: 'Let first term be $a$ and common difference be $d$.\n$$\\frac{m}{2}[2a + (m-1)d] = n \\implies 2a + (m-1)d = \\frac{2n}{m},$$\n$$\\frac{n}{2}[2a + (n-1)d] = m \\implies 2a + (n-1)d = \\frac{2m}{n}.$$\nSubtracting gives $(m-n)d = \\frac{2n}{m} - \\frac{2m}{n} = \\frac{2(n^2 - m^2)}{mn} = -\\frac{2(m-n)(m+n)}{mn}$.\nThus $d = -\\frac{2(m+n)}{mn}$.\nNow $S_{m+n} = \\frac{m+n}{2}[2a + (m+n-1)d] = \\frac{m+n}{2}[2a + (m-1)d + nd] = \\frac{m+n}{2}\\left[\\frac{2n}{m} - \\frac{2n(m+n)}{mn}\\right] = \\frac{m+n}{2}\\left[\\frac{2n}{m} - \\frac{2(m+n)}{m}\\right] = \\frac{m+n}{2}\\left[-\\frac{2m}{m}\\right] = -(m+n)$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the numbers $a, b, c$ are in arithmetic progression, then the value of $(a - c)^2 / (b^2 - ac)$ is:',
    options: ['$4$', '$2$', '$1$', '$0$'],
    correctAnswer: 0,
    explanation: 'Since $a, b, c$ are in AP, $b = a + d$ and $c = a + 2d$.\nThen $a - c = -2d$, so $(a - c)^2 = 4d^2$.\nAlso $b^2 - ac = (a+d)^2 - a(a+2d) = a^2 + 2ad + d^2 - a^2 - 2ad = d^2$.\nTherefore, $\\frac{(a-c)^2}{b^2 - ac} = \\frac{4d^2}{d^2} = 4$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $a_1, a_2, a_3, \\dots, a_n$ are in AP with common difference $d \\neq 0$, then the sum $\\sum_{i=1}^{n-1} \\frac{1}{a_i a_{i+1}}$ equals:',
    options: [
      '$\\frac{n-1}{a_1 a_n}$',
      '$\\frac{n}{a_1 a_n}$',
      '$\\frac{n-1}{d a_1 a_n}$',
      '$\\frac{1}{a_1 a_n}$'
    ],
    correctAnswer: 0,
    explanation: 'Notice that $\\frac{1}{a_i a_{i+1}} = \\frac{1}{d}\\left(\\frac{a_{i+1} - a_i}{a_i a_{i+1}}\\right) = \\frac{1}{d}\\left(\\frac{1}{a_i} - \\frac{1}{a_{i+1}}\\right)$.\nTelescoping the sum:\n$$\\sum_{i=1}^{n-1} \\frac{1}{a_i a_{i+1}} = \\frac{1}{d}\\left(\\frac{1}{a_1} - \\frac{1}{a_n}\\right) = \\frac{1}{d}\\left(\\frac{a_n - a_1}{a_1 a_n}\\right).$$\nSince $a_n - a_1 = (n-1)d$, this simplifies to $\\frac{(n-1)d}{d a_1 a_n} = \\frac{n-1}{a_1 a_n}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the sum of $n$ terms of an AP is $S_n = 3n^2 + 5n$, then its $m$-th term is:',
    options: ['$6m + 2$', '$6m - 2$', '$3m + 5$', '$6m + 8$'],
    correctAnswer: 0,
    explanation: 'The $m$-th term is $T_m = S_m - S_{m-1}$.\n$$T_m = [3m^2 + 5m] - [3(m-1)^2 + 5(m-1)] = 3(2m - 1) + 5 = 6m - 3 + 5 = 6m + 2.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The interior angles of a convex polygon are in AP. The smallest angle is $120^\\circ$ and the common difference is $5^\\circ$. The number of sides of the polygon is:',
    options: ['$9$', '$16$', '$12$', '$10$'],
    correctAnswer: 0,
    explanation: 'The sum of interior angles of an $n$-sided polygon is $(n-2) \\times 180^\\circ$.\nAlso, the sum of an AP with $a = 120^\\circ$ and $d = 5^\\circ$ is $\\frac{n}{2}[2(120) + (n-1)5]$.\n$$\\frac{n}{2}[240 + 5n - 5] = (n-2)180 \\implies n(5n + 235) = 360(n-2) = 360n - 720.$$\n$$5n^2 + 235n - 360n + 720 = 0 \\implies 5n^2 - 125n + 720 = 0 \\implies n^2 - 25n + 144 = 0.$$\n$$(n - 9)(n - 16) = 0 \\implies n = 9 \\text{ or } n = 16.$$\nIf $n = 16$, the largest angle is $120 + 15(5) = 195^\\circ > 180^\\circ$, which is impossible for a convex polygon.\nThus $n = 9$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $a_1, a_2, \\dots, a_{19}$ are in AP such that $a_4 + a_8 + a_{12} + a_{16} = 224$, then $\\sum_{i=1}^{19} a_i$ is:',
    options: ['$1064$', '$896$', '$1120$', '$532$'],
    correctAnswer: 0,
    explanation: 'In an AP, the sum of terms equidistant from the ends is constant:\n$$a_4 + a_{16} = a_1 + a_{19} = 2a_{10}, \\quad a_8 + a_{12} = 2a_{10}.$$\nThus $a_4 + a_8 + a_{12} + a_{16} = 4a_{10} = 224 \\implies a_{10} = 56$.\nThe sum of $19$ terms is:\n$$S_{19} = \\frac{19}{2}(a_1 + a_{19}) = \\frac{19}{2}(2a_{10}) = 19 \\times 56 = 1064.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If $k+2, 4k-6$, and $3k-2$ are three consecutive terms of an arithmetic progression, the value of $k$ is:',
    options: ['$3$', '$2$', '$4$', '$5$'],
    correctAnswer: 0,
    explanation: 'For three consecutive terms $a, b, c$ in AP, $2b = a + c$.\n$$2(4k - 6) = (k + 2) + (3k - 2) \\implies 8k - 12 = 4k \\implies 4k = 12 \\implies k = 3.$$'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the sum of the first $n$ terms of an AP is $S_n = An^2 + Bn$, where $A, B$ are constants, then the common difference is $2A$.\nReason (R): For any AP, the $n$-th term is $T_n = S_n - S_{n-1}$, and the coefficient of $n$ in $T_n$ represents the common difference.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'From $S_n = An^2 + Bn$, we have $T_n = S_n - S_{n-1} = A[n^2 - (n-1)^2] + B[n - (n-1)] = A(2n - 1) + B = 2An + (B - A)$. The common difference is $T_n - T_{n-1} = 2A$. Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In any finite AP $a_1, a_2, \\dots, a_n$, the sum of the terms equidistant from the beginning and end is constant and equal to $a_1 + a_n$.\nReason (R): For any $k \\in \\{1, 2, \\dots, n\\}$, $a_k + a_{n-k+1} = (a_1 + (k-1)d) + (a_1 + (n-k)d) = 2a_1 + (n-1)d = a_1 + a_n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both (A) and (R) are true, and (R) is the direct algebraic proof and explanation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If each term of an AP is multiplied by a non-zero constant $k$, the resulting sequence is also an AP with common difference $kd$.\nReason (R): If $b_n = k a_n$, then $b_{n+1} - b_n = k(a_{n+1} - a_n) = kd$, which is constant for all $n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Multiplying each term by a constant $k$ scales the successive differences by $k$, producing an AP with common difference $kd$. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sequence $\\log a, \\log(ab), \\log(ab^2), \\log(ab^3), \\dots$ forms an arithmetic progression for any $a > 0, b > 0$.\nReason (R): The difference between consecutive terms is $\\log(ab^k) - \\log(ab^{k-1}) = \\log\\left(\\frac{ab^k}{ab^{k-1}}\\right) = \\log b$, which is constant.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $\\log(ab^k) - \\log(ab^{k-1}) = \\log b$ for all $k \\ge 1$, the sequence has a constant common difference $\\log b$ and hence forms an AP. Both (A) and (R) are true, and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a, b, c$ are in AP, then $e^a, e^b, e^c$ are in geometric progression.\nReason (R): If $2b = a + c$, then $(e^b)^2 = e^{2b} = e^{a+c} = e^a \\cdot e^c$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $a, b, c$ are in AP, $2b = a+c$. Exponentiating both sides gives $e^{2b} = e^{a+c} \\implies (e^b)^2 = e^a \\cdot e^c$, which is the exact condition for $e^a, e^b, e^c$ to be in GP. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): There cannot exist an arithmetic progression containing $1, \\sqrt{2}$, and $3$ as three of its terms.\nReason (R): In an AP with real terms, the ratio of the difference of any two terms to the difference of any other two terms must be a rational number.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'If $1, \\sqrt{2}, 3$ were the $p$-th, $q$-th, and $r$-th terms of an AP with common difference $d$, then $\\frac{\\sqrt{2} - 1}{3 - \\sqrt{2}} = \\frac{(q-p)d}{(r-q)d} = \\frac{q-p}{r-q} \\in \\mathbb{Q}$. But $\\frac{\\sqrt{2}-1}{3-\\sqrt{2}}$ is irrational, a contradiction. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The sum of the first $n$ odd natural numbers is $n^2$.\nReason (R): The first $n$ odd natural numbers form an AP with first term $a = 1$ and common difference $d = 2$, whose sum is $\\frac{n}{2}[2(1) + (n-1)2] = n^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'The odd natural numbers $1, 3, 5, \\dots$ form an AP with $a=1, d=2$. The sum of $n$ terms is $S_n = \\frac{n}{2}[2 + 2n - 2] = n^2$. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the sequence $a_n$ is in AP, then the sequence $b_n = a_n^2$ is also in AP.\nReason (R): The difference of consecutive squares $(a_{n+1}^2 - a_n^2) = (a_{n+1} - a_n)(a_{n+1} + a_n) = d(a_{n+1} + a_n)$, which depends on $n$ whenever $d \\neq 0$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'Take the AP $1, 2, 3$. The squares are $1, 4, 9$, where $4 - 1 = 3 \\neq 9 - 4 = 5$, so $b_n$ is not an AP. Thus (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a, b, c$ are in AP, then $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$ are also in AP ($a, b, c \\neq 0$).\nReason (R): Dividing each term of an arithmetic progression by a constant non-zero number leaves the terms in AP.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $a, b, c$ are in AP, dividing each term by $abc$ yields $\\frac{a}{abc}, \\frac{b}{abc}, \\frac{c}{abc}$, which simplifies to $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$. Dividing an AP by a non-zero constant preserves the AP property. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the common difference of an AP is zero, all terms of the AP are identical.\nReason (R): For any AP, $a_n = a_1 + (n-1)d$; setting $d = 0$ gives $a_n = a_1$ for all $n \\in \\mathbb{N}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'When $d = 0$, $a_n = a_1$ for all $n$, so every term equals the first term. Both (A) and (R) are true, and (R) correctly explains (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the $9$th term of an AP is zero, then the ratio of its $29$th term to its $19$th term is equal to:',
    correctAnswer: 2,
    explanation: 'Given $T_9 = a + 8d = 0 \\implies a = -8d$.\nNow $T_{29} = a + 28d = -8d + 28d = 20d$.\nAnd $T_{19} = a + 18d = -8d + 18d = 10d$.\nThus, $\\frac{T_{29}}{T_{19}} = \\frac{20d}{10d} = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of the first $2n$ terms of the AP $2, 5, 8, \\dots$ is equal to the sum of the first $n$ terms of the AP $57, 59, 61, \\dots$, find the value of $n$.',
    correctAnswer: 11,
    explanation: 'First AP: $a_1 = 2, d_1 = 3$. Sum of $2n$ terms:\n$$S_{2n} = \\frac{2n}{2}[2(2) + (2n-1)3] = n[4 + 6n - 3] = n(6n + 1).$$\nSecond AP: $a_2 = 57, d_2 = 2$. Sum of $n$ terms:\n$$S_n\' = \\frac{n}{2}[2(57) + (n-1)2] = n[57 + n - 1] = n(n + 56).$$\nSince $n > 0$, equating the sums gives:\n$$6n + 1 = n + 56 \\implies 5n = 55 \\implies n = 11.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the number of terms common to the two arithmetic progressions $3, 7, 11, \\dots, 407$ and $2, 9, 16, \\dots, 709$.',
    correctAnswer: 14,
    explanation: 'First AP: $a_1 = 3, d_1 = 4$, last term $407$.\nSecond AP: $a_2 = 2, d_2 = 7$, last term $709$.\nCommon difference is $\\text{LCM}(4, 7) = 28$.\nFirst common term: inspect $3, 7, 11, 15, 19, 23$ and $2, 9, 16, 23$. The first common term is $23$.\nThe terms common to both form an AP with first term $23$ and common difference $28$.\nThe largest term cannot exceed $\\min(407, 709) = 407$.\n$$23 + (k-1)28 \\le 407 \\implies (k-1)28 \\le 384 \\implies k-1 \\le \\frac{384}{28} = 13.71 \\implies k \\le 14.71.$$\nThus, there are $14$ common terms.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of $n$ terms of an AP is $S_n = 2n^2 + 3n$, find the $10$th term of the AP.',
    correctAnswer: 41,
    explanation: 'The $n$-th term is $T_n = S_n - S_{n-1} = [2n^2 + 3n] - [2(n-1)^2 + 3(n-1)] = 2(2n - 1) + 3 = 4n + 1$.\nFor $n = 10$, $T_{10} = 4(10) + 1 = 41$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Let $S_n$ denote the sum of the first $n$ terms of an AP. If $S_{10} = 530$ and $S_5 = 140$, find the first term $a_1$.',
    correctAnswer: 8,
    explanation: '$$S_5 = \\frac{5}{2}[2a + 4d] = 5(a + 2d) = 140 \\implies a + 2d = 28.$$\n$$S_{10} = \\frac{10}{2}[2a + 9d] = 5(2a + 9d) = 530 \\implies 2a + 9d = 106.$$\nMultiplying the first equation by $2$: $2a + 4d = 56$.\nSubtracting gives $5d = 50 \\implies d = 10$.\nThen $a = 28 - 2(10) = 8$.\nThus $a_1 = 8$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If three numbers in AP have a sum of $21$ and their product is $280$, find the smallest of the three numbers.',
    correctAnswer: 4,
    explanation: 'Let the three numbers in AP be $a - d, a, a + d$.\nTheir sum is $3a = 21 \\implies a = 7$.\nTheir product is $(7 - d)(7)(7 + d) = 7(49 - d^2) = 280 \\implies 49 - d^2 = 40 \\implies d^2 = 9 \\implies d = \\pm 3$.\nThe three numbers are $4, 7, 10$. The smallest number is $4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'How many terms of the AP $24, 21, 18, \\dots$ must be taken so that their sum is $78$ and the number of terms is minimal?',
    correctAnswer: 4,
    explanation: 'Here $a = 24$ and $d = -3$.\n$$S_n = \\frac{n}{2}[2(24) + (n-1)(-3)] = 78 \\implies n(48 - 3n + 3) = 156 \\implies n(51 - 3n) = 156.$$\n$$3n^2 - 51n + 156 = 0 \\implies n^2 - 17n + 52 = 0 \\implies (n - 4)(n - 13) = 0.$$\nThus $n = 4$ or $n = 13$. The minimal number of terms is $4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The first term of an AP is $3$, the last term is $83$, and the sum of all terms is $903$. Find the number of terms $n$.',
    correctAnswer: 21,
    explanation: 'Using $S_n = \\frac{n}{2}(a + l)$:\n$$903 = \\frac{n}{2}(3 + 83) = \\frac{n}{2}(86) = 43n \\implies n = \\frac{903}{43} = 21.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the $7$th term of an AP is $40$, find the sum of its first $13$ terms.',
    correctAnswer: 520,
    explanation: 'In an AP of $13$ terms, the middle term is $T_7 = a + 6d = 40$.\nThe sum of $13$ terms is:\n$$S_{13} = \\frac{13}{2}[2a + 12d] = 13(a + 6d) = 13 \\times 40 = 520.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the common difference $d$ of an AP whose $15$th term is $47$ and $21$st term is $65$.',
    correctAnswer: 3,
    explanation: '$$T_{21} - T_{15} = (21 - 15)d = 6d.$$\n$$65 - 47 = 18 \\implies 6d = 18 \\implies d = 3.$$'
  }
];

module.exports = { subtopic1Questions };
