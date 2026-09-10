// scripts/data_jee_seq_subtopic3.js
// Subtopic 3: Geometric Progression
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic3Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the $p$-th, $q$-th, and $r$-th terms of a geometric progression are $x, y$, and $z$ respectively, then $x^{q-r} y^{r-p} z^{p-q}$ is equal to:',
    options: ['$1$', '$0$', '$-1$', '$xyz$'],
    correctAnswer: 0,
    explanation: 'Let first term be $A$ and common ratio be $R$.\n$$x = A R^{p-1}, \\quad y = A R^{q-1}, \\quad z = A R^{r-1}.$$\n$$x^{q-r} y^{r-p} z^{p-q} = A^{(q-r) + (r-p) + (p-q)} R^{(p-1)(q-r) + (q-1)(r-p) + (r-1)(p-q)}.$$\nThe exponent of $A$ is $0$.\nThe exponent of $R$ is $\\sum_{\\text{cyc}} (pq - pr - q + r) = 0$.\nHence $A^0 R^0 = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If three positive numbers $a, b, c$ are in GP, then the value of $\\frac{a + b + c}{a^{-1} + b^{-1} + c^{-1}}$ is:',
    options: ['$b^2$', '$b$', '$b^3$', '$ac$'],
    correctAnswer: 0,
    explanation: 'Let $a = \\frac{b}{r}, b = b, c = br$.\n$$a^{-1} + b^{-1} + c^{-1} = \\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} = \\frac{bc + ca + ab}{abc}.$$\nSince $b^2 = ac$, $abc = b(ac) = b^3$.\nAlso $bc + ca + ab = b(c + a) + b^2 = b(a + b + c)$.\nThus $a^{-1} + b^{-1} + c^{-1} = \\frac{b(a+b+c)}{b^3} = \\frac{a+b+c}{b^2}$.\nTherefore, $\\frac{a+b+c}{a^{-1} + b^{-1} + c^{-1}} = b^2$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If the roots of the cubic equation $x^3 - 14x^2 + 56x - 64 = 0$ are in geometric progression, then the roots are:',
    options: ['$2, 4, 8$', '$1, 4, 16$', '$2, 6, 18$', '$1, 2, 4$'],
    correctAnswer: 0,
    explanation: 'Let the roots in GP be $\\frac{a}{r}, a, ar$.\nProduct of roots: $\\left(\\frac{a}{r}\\right)(a)(ar) = a^3 = 64 \\implies a = 4$.\nSum of roots: $\\frac{4}{r} + 4 + 4r = 14 \\implies 4\\left(r + \\frac{1}{r}\\right) = 10 \\implies r + \\frac{1}{r} = \\frac{5}{2}$.\n$$2r^2 - 5r + 2 = 0 \\implies (2r - 1)(r - 2) = 0 \\implies r = 2 \\text{ or } r = \\frac{1}{2}.$$\nThus the roots are $\\frac{4}{2}, 4, 4(2)$, which are $2, 4, 8$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If $x, 2x+2, 3x+3$ are the first three terms of a geometric progression, then its fourth term is:',
    options: ['$-13.5$', '$13.5$', '$-27$', '$27$'],
    correctAnswer: 0,
    explanation: 'Since the terms are in GP: $(2x + 2)^2 = x(3x + 3)$.\n$$4x^2 + 8x + 4 = 3x^2 + 3x \\implies x^2 + 5x + 4 = 0 \\implies (x + 1)(x + 4) = 0.$$\nIf $x = -1$, the terms are $-1, 0, 0$, which does not form a valid non-trivial GP.\nThus $x = -4$.\nThe first three terms are $-4, 2(-4)+2 = -6, 3(-4)+3 = -9$.\nThe common ratio is $r = \\frac{-6}{-4} = \\frac{3}{2}$.\nThe fourth term is $-9 \\times \\frac{3}{2} = -\\frac{27}{2} = -13.5$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $S$ is the sum, $P$ the product, and $R$ the sum of reciprocals of $n$ terms in a GP, then $S / R$ is equal to:',
    options: ['$P^{2/n}$', '$P^{1/n}$', '$P^n$', '$P^2$'],
    correctAnswer: 0,
    explanation: 'Let the terms of the GP be $a, ar, ar^2, \\dots, ar^{n-1}$.\nProduct $P = a^n r^{\\frac{n(n-1)}{2}}$, so $P^{2/n} = a^2 r^{n-1}$.\n$R = \\frac{1}{a}\\left(\\frac{1 - (1/r)^n}{1 - (1/r)}\\right) = \\frac{1}{a r^{n-1}}\\left(\\frac{r^n - 1}{r - 1}\\right) = \\frac{S}{a^2 r^{n-1}}$.\nTherefore, $\\frac{S}{R} = a^2 r^{n-1} = P^{2/n}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $a, b, c$ are in GP, then $\\log_a x, \\log_b x, \\log_c x$ are in:',
    options: ['Harmonic Progression', 'Arithmetic Progression', 'Geometric Progression', 'None of these'],
    correctAnswer: 0,
    explanation: 'Since $a, b, c$ are in GP, $\\ln a, \\ln b, \\ln c$ are in AP.\nUsing the change of base formula:\n$$\\frac{1}{\\log_a x} = \\log_x a = \\frac{\\ln a}{\\ln x}, \\quad \\frac{1}{\\log_b x} = \\frac{\\ln b}{\\ln x}, \\quad \\frac{1}{\\log_c x} = \\frac{\\ln c}{\\ln x}.$$\nSince $\\ln a, \\ln b, \\ln c$ are in AP, their division by $\\ln x$ leaves them in AP.\nSince the reciprocals of $\\log_a x, \\log_b x, \\log_c x$ are in AP, the terms themselves are in HP.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the third term of a GP is $4$, then the product of its first $5$ terms is:',
    options: ['$1024$', '$256$', '$512$', '$2048$'],
    correctAnswer: 0,
    explanation: 'Let the terms be $\\frac{a}{r^2}, \\frac{a}{r}, a, ar, ar^2$. The third term is $a = 4$.\nProduct of the first $5$ terms is $a^5 = 4^5 = 1024$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Let $a_1, a_2, \\dots, a_{10}$ be a GP. If $\\frac{a_3}{a_1} = 25$, then $\\frac{a_9}{a_5}$ equals:',
    options: ['$625$', '$125$', '$25$', '$3125$'],
    correctAnswer: 0,
    explanation: 'In a GP with common ratio $r$:\n$$\\frac{a_3}{a_1} = r^2 = 25.$$\nNow $\\frac{a_9}{a_5} = r^{9-5} = r^4 = (r^2)^2 = 25^2 = 625$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If $a, b, c$ are in GP with common ratio $r$, then the value of $(a - b + c)(a + b + c)$ is:',
    options: ['$a^2 + b^2 + c^2$', '$a^2 + ac + c^2$', '$a^2 - b^2 + c^2$', '$3b^2$'],
    correctAnswer: 0,
    explanation: '$$(a - b + c)(a + b + c) = (a + c - b)(a + c + b) = (a + c)^2 - b^2 = a^2 + 2ac + c^2 - b^2.$$\nSince $b^2 = ac$, this becomes $a^2 + 2b^2 + c^2 - b^2 = a^2 + b^2 + c^2$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the common ratio of a GP is $r = -\\frac{1}{2}$ and the $5$th term is $2$, then the first term $a$ is:',
    options: ['$32$', '$-32$', '$16$', '$-16$'],
    correctAnswer: 0,
    explanation: '$$T_5 = a r^4 = a \\left(-\\frac{1}{2}\\right)^4 = a \\left(\\frac{1}{16}\\right) = 2 \\implies a = 32.$$'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a_1, a_2, \\dots, a_n$ is a GP of non-zero terms, then $\\frac{1}{a_1}, \\frac{1}{a_2}, \\dots, \\frac{1}{a_n}$ is also a GP.\nReason (R): The ratio of consecutive terms in the reciprocal sequence is $\\frac{1/a_{k+1}}{1/a_k} = \\frac{a_k}{a_{k+1}} = \\frac{1}{r}$, which is constant.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'The ratio of consecutive terms in the reciprocated sequence is $\\frac{1}{r}$, proving that it is a GP with common ratio $1/r$. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In any finite GP $a_1, a_2, \\dots, a_n$, the product of terms equidistant from the beginning and end is constant and equal to $a_1 a_n$.\nReason (R): For any $k \\in \\{1, 2, \\dots, n\\}$, $a_k \\cdot a_{n-k+1} = (a_1 r^{k-1}) \\cdot (a_1 r^{n-k}) = a_1^2 r^{n-1} = a_1 (a_1 r^{n-1}) = a_1 a_n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the direct algebraic proof of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If each term of a GP with positive terms is raised to the power $k$ ($k \\neq 0$), the resulting sequence is also a GP.\nReason (R): If $b_n = a_n^k = (a r^{n-1})^k = a^k (r^k)^{n-1}$, the new sequence has first term $a^k$ and constant common ratio $r^k$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Three distinct non-zero numbers $a, b, c$ can simultaneously be in AP and in GP.\nReason (R): If $a, b, c$ are in AP and GP, then $2b = a + c$ and $b^2 = ac$, which implies $(a - c)^2 = 0 \\implies a = b = c$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'If three numbers are simultaneously in AP and GP, we must have $a = b = c$. Therefore, they CANNOT be distinct. Hence (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a, b, c$ are in GP, then $a^2, b^2, c^2$ are also in GP.\nReason (R): Since $b^2 = ac$, squaring both sides gives $(b^2)^2 = a^2 c^2$, which is the condition for $a^2, b^2, c^2$ to be in GP.\n\nIn light of the above statements, choose the correct answer from the options given below:',
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
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the common ratio of a GP is negative, the terms alternate in sign.\nReason (R): For $a_n = a r^{n-1}$, the sign of $a_n$ is determined by $\\text{sgn}(a) \\cdot (-1)^{n-1}$, which alternates between positive and negative as $n$ increases through positive integers.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the correct mathematical explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): No term of a geometric progression can be zero.\nReason (R): If any term of a sequence $a_n = a r^{n-1}$ is zero, then either $a = 0$ or $r = 0$, causing either all terms to be zero or the sequence to fail the definition of common ratio $r = a_{k+1}/a_k$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'By standard definition, a geometric progression consists of non-zero terms with a non-zero common ratio. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If $a_1, a_2, a_3, \\dots$ and $b_1, b_2, b_3, \\dots$ are two GPs, then the sequence $c_n = a_n b_n$ is also a GP.\nReason (R): The ratio $\\frac{c_{n+1}}{c_n} = \\frac{a_{n+1} b_{n+1}}{a_n b_n} = \\left(\\frac{a_{n+1}}{a_n}\\right)\\left(\\frac{b_{n+1}}{b_n}\\right) = r_1 r_2$, which is constant for all $n$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'The product sequence has constant common ratio $r_1 r_2$. Both statements are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The geometric mean of $-4$ and $-16$ is $-8$.\nReason (R): The geometric mean of two negative numbers $a$ and $b$ is defined as $-\\sqrt{ab}$ to ensure that the three numbers $a, \\text{GM}, b$ form a geometric progression with positive common ratio.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $-4, -8, -16$ has common ratio $r = 2 > 0$, $-8$ is the valid geometric mean between $-4$ and $-16$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a GP with positive terms, if the sum of the first two terms is $12$ and the sum of the third and fourth terms is $48$, the common ratio is $2$.\nReason (R): $a_3 + a_4 = r^2(a_1 + a_2) \\implies 48 = r^2(12) \\implies r^2 = 4 \\implies r = 2$ since the terms are positive.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) correctly explains (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'In a GP of positive terms, the sum of the first and second terms is $8$ and the sum of the third and fourth terms is $72$. Find the value of the common ratio $r$.',
    correctAnswer: 3,
    explanation: '$$a_1 + a_2 = a(1 + r) = 8.$$\n$$a_3 + a_4 = a r^2(1 + r) = 72.$$\nDividing gives $r^2 = \\frac{72}{8} = 9$. Since the terms are positive, $r = 3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the fourth term of a GP is $2$, find the product of its first $7$ terms.',
    correctAnswer: 128,
    explanation: 'Let the terms be $\\frac{a}{r^3}, \\frac{a}{r^2}, \\frac{a}{r}, a, ar, ar^2, ar^3$.\nThe middle term is $T_4 = a = 2$.\nThe product of the $7$ terms is $a^7 = 2^7 = 128$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Three numbers whose product is $216$ are in GP. If their sum is $19$, find the largest of the three numbers.',
    correctAnswer: 9,
    explanation: 'Let the three numbers be $\\frac{a}{r}, a, ar$.\nTheir product is $a^3 = 216 \\implies a = 6$.\nTheir sum is $\\frac{6}{r} + 6 + 6r = 19 \\implies 6\\left(r + \\frac{1}{r}\\right) = 13 \\implies 6r^2 - 13r + 6 = 0$.\n$$(2r - 3)(3r - 2) = 0 \\implies r = \\frac{3}{2} \\text{ or } r = \\frac{2}{3}.$$\nThe three numbers are $4, 6, 9$. The largest number is $9$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'In a GP, if $T_2 = 12$ and $T_5 = 324$, find the first term $a_1$.',
    correctAnswer: 4,
    explanation: '$$T_2 = a r = 12, \\quad T_5 = a r^4 = 324.$$\n$$\\frac{a r^4}{a r} = r^3 = \\frac{324}{12} = 27 \\implies r = 3.$$\n$$a = \\frac{12}{3} = 4.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the common ratio of a GP is $2$ and the $8$th term is $384$, find the first term $a$.',
    correctAnswer: 3,
    explanation: '$$T_8 = a r^7 = a(2^7) = 128 a = 384 \\implies a = 3.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the number of terms in the finite GP $5, 10, 20, \\dots, 2560$.',
    correctAnswer: 10,
    explanation: 'Here $a = 5, r = 2, a_n = 2560$.\n$$a_n = 5(2^{n-1}) = 2560 \\implies 2^{n-1} = 512 = 2^9 \\implies n - 1 = 9 \\implies n = 10.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of three consecutive terms of a GP is $26$ and their product is $216$, find the largest of the three numbers.',
    correctAnswer: 18,
    explanation: 'Let the numbers be $\\frac{a}{r}, a, ar$.\nProduct: $a^3 = 216 \\implies a = 6$.\nSum: $\\frac{6}{r} + 6 + 6r = 26 \\implies 6\\left(r + \\frac{1}{r}\\right) = 20 \\implies 3r^2 - 10r + 3 = 0$.\n$$(3r - 1)(r - 3) = 0 \\implies r = 3 \\text{ or } r = \\frac{1}{3}.$$\nThe numbers are $2, 6, 18$. The largest number is $18$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If $2, x, 32$ are three consecutive terms of a geometric progression with $x > 0$, find $x$.',
    correctAnswer: 8,
    explanation: 'In a GP, $x^2 = 2 \\times 32 = 64 \\implies x = 8$ (since $x > 0$).'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'In a GP of positive terms, the $6$th term is $64$ times the $3$rd term. Find the common ratio $r$.',
    correctAnswer: 4,
    explanation: '$$T_6 = 64 T_3 \\implies a r^5 = 64 a r^2 \\implies r^3 = 64 \\implies r = 4.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of the first $3$ terms of a GP is $21$ and the sum of their squares is $189$, find the first term $a$ when $r > 1$.',
    correctAnswer: 3,
    explanation: '$$a(1 + r + r^2) = 21 \\implies 1 + r + r^2 = \\frac{21}{a}.$$\n$$a^2(1 + r^2 + r^4) = 189.$$\nNotice $1 + r^2 + r^4 = (1 + r + r^2)(1 - r + r^2)$.\nDividing the two: $\\frac{a^2(1 + r^2 + r^4)}{a(1 + r + r^2)} = a(1 - r + r^2) = \\frac{189}{21} = 9$.\nAdding $a(1 + r + r^2) = 21$ and $a(1 - r + r^2) = 9$ gives $2a(1 + r^2) = 30 \\implies a(1 + r^2) = 15$.\nSubtracting gives $2ar = 12 \\implies ar = 6$.\nNow $a + ar^2 = 15 \\implies a + \\frac{36}{a} = 15 \\implies a^2 - 15a + 36 = 0 \\implies (a - 3)(a - 12) = 0$.\nIf $a = 3$, $r = 6/3 = 2 > 1$.\nIf $a = 12$, $r = 6/12 = 1/2 < 1$.\nSince $r > 1$, $a = 3$.'
  }
];

module.exports = { subtopic3Questions };
