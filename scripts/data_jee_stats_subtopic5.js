// scripts/data_jee_stats_subtopic5.js
// Subtopic 5: Variance
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The variance of the first $n$ natural numbers $1, 2, 3, \\dots, n$ is given by:',
    options: [
      '$\\frac{n^2 - 1}{12}$',
      '$\\frac{n^2 - 1}{6}$',
      '$\\frac{n(n+1)}{12}$',
      '$\\frac{n^2 + 1}{12}$'
    ],
    correctAnswer: 0,
    explanation: 'For the first $n$ natural numbers:\n$$\\bar{x} = \\frac{n+1}{2}, \\quad \\frac{1}{n}\\sum_{k=1}^n k^2 = \\frac{(n+1)(2n+1)}{6}.$$\nThus,\n$$\\sigma^2 = \\frac{(n+1)(2n+1)}{6} - \\left(\\frac{n+1}{2}\\right)^2 = \\frac{n+1}{2}\\left(\\frac{2n+1}{3} - \\frac{n+1}{2}\\right) = \\frac{n^2 - 1}{12}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The variance of the first $n$ odd natural numbers $1, 3, 5, \\dots, 2n-1$ is:',
    options: [
      '$\\frac{n^2 - 1}{3}$',
      '$\\frac{n^2 - 1}{12}$',
      '$\\frac{4n^2 - 1}{3}$',
      '$\\frac{n^2 + 1}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'The mean of the first $n$ odd numbers is $\\bar{x} = \\frac{n^2}{n} = n$.\n$$\\sum_{k=1}^n (2k-1)^2 = 4\\sum k^2 - 4\\sum k + \\sum 1 = \\frac{n(4n^2 - 1)}{3}.$$\nThus,\n$$\\sigma^2 = \\frac{1}{n}\\sum x_i^2 - (\\bar{x})^2 = \\frac{4n^2 - 1}{3} - n^2 = \\frac{n^2 - 1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the variance of observations $x_1, x_2, \\dots, x_n$ is $\\sigma^2$, then the variance of $2x_1 - 5, 2x_2 - 5, \\dots, 2x_n - 5$ is:',
    options: ['$4\\sigma^2$', '$2\\sigma^2$', '$4\\sigma^2 - 5$', '$2\\sigma^2 - 5$'],
    correctAnswer: 0,
    explanation: 'For the linear transformation $y_i = ax_i + b$, the variance transforms as $\\text{Var}(y) = a^2 \\text{Var}(x)$. Here $a = 2$, so $\\text{Var}(y) = 2^2 \\sigma^2 = 4\\sigma^2$. The constant $-5$ affects only the mean, not the variance.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean of $5$ observations is $5$ and their variance is $9.2$. If three of the observations are $1, 3, 8$, the other two observations are:',
    options: ['$4$ and $9$', '$2$ and $11$', '$5$ and $8$', '$3$ and $10$'],
    correctAnswer: 0,
    explanation: 'Let the remaining two observations be $a$ and $b$.\nSum of observations: $1 + 3 + 8 + a + b = 5 \\times 5 = 25 \\implies a + b = 13$.\nVariance $\\sigma^2 = \\frac{1}{5}\\sum x_i^2 - (\\bar{x})^2 = 9.2 \\implies \\frac{\\sum x_i^2}{5} - 25 = 9.2 \\implies \\sum x_i^2 = 171$.\n$$1^2 + 3^2 + 8^2 + a^2 + b^2 = 1 + 9 + 64 + a^2 + b^2 = 74 + a^2 + b^2 = 171 \\implies a^2 + b^2 = 97.$$\nSince $(a+b)^2 = a^2 + b^2 + 2ab$, we have $169 = 97 + 2ab \\implies 2ab = 72 \\implies ab = 36$.\n$a$ and $b$ are roots of $t^2 - 13t + 36 = 0 \\implies (t-4)(t-9) = 0$.\nThus the two observations are $4$ and $9$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Two groups have $n_1 = 10, n_2 = 10$ observations with means $\\bar{x}_1 = 2, \\bar{x}_2 = 4$ and variances $\\sigma_1^2 = 2, \\sigma_2^2 = 3$ respectively. The variance of the combined dataset of $20$ observations is:',
    options: ['$3.5$', '$2.5$', '$4.0$', '$3.0$'],
    correctAnswer: 0,
    explanation: 'Combined mean: $\\bar{x} = \\frac{10(2) + 10(4)}{20} = 3$.\nDeviations of group means: $d_1 = 2 - 3 = -1, d_2 = 4 - 3 = 1$.\nCombined variance:\n$$\\sigma^2 = \\frac{n_1(\\sigma_1^2 + d_1^2) + n_2(\\sigma_2^2 + d_2^2)}{n_1 + n_2} = \\frac{10(2 + 1) + 10(3 + 1)}{20} = \\frac{30 + 40}{20} = 3.5.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean and variance of $20$ observations were found to be $10$ and $4$ respectively. Later it was detected that an observation $9$ was misread as $11$. The correct variance is:',
    options: ['$3.99$', '$4.01$', '$3.89$', '$4.21$'],
    correctAnswer: 0,
    explanation: 'Old sum: $\\sum x = 20 \\times 10 = 200$. Correct sum: $200 - 11 + 9 = 198$.\nCorrect mean: $\\bar{x}_{\\text{new}} = \\frac{198}{20} = 9.9$.\nOld $\\sum x^2 = 20(\\sigma^2 + \\bar{x}^2) = 20(4 + 100) = 2080$.\nCorrect $\\sum x^2 = 2080 - 11^2 + 9^2 = 2080 - 121 + 81 = 2040$.\nCorrect variance:\n$$\\sigma_{\\text{new}}^2 = \\frac{2040}{20} - (9.9)^2 = 102 - 98.01 = 3.99.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the variance of the numbers $2, 4, 5, 6, 8, 17$ is $v$, then the variance of $12, 14, 15, 16, 18, 27$ is:',
    options: ['$v$', '$v + 10$', '$v + 100$', '$10v$'],
    correctAnswer: 0,
    explanation: 'Each observation in the second set is obtained by adding $10$ to the corresponding observation in the first set ($y_i = x_i + 10$). Since variance is invariant under a change of origin, the variance remains unchanged, i.e., $v$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The variance of $2n+1$ observations in arithmetic progression with common difference $d$ is:',
    options: [
      '$\\frac{n(n+1)d^2}{3}$',
      '$\\frac{n(n+1)d^2}{6}$',
      '$\\frac{n(2n+1)d^2}{6}$',
      '$\\frac{n^2 d^2}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Let the $2n+1$ observations be $a - nd, \\dots, a, \\dots, a + nd$. The mean is $a$.\nThe deviations from the mean are $-nd, \\dots, 0, \\dots, nd$.\n$$\\sigma^2 = \\frac{1}{2n+1}\\sum_{k=-n}^n (kd)^2 = \\frac{2d^2}{2n+1}\\sum_{k=1}^n k^2 = \\frac{2d^2}{2n+1}\\frac{n(n+1)(2n+1)}{6} = \\frac{n(n+1)d^2}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If each observation $x_i$ ($i = 1, 2, \\dots, n$) is multiplied by $-2$ and then increased by $7$, the ratio of the new variance to the old variance is:',
    options: ['$4 : 1$', '$2 : 1$', '$-2 : 1$', '$1 : 4$'],
    correctAnswer: 0,
    explanation: 'Let $y_i = -2x_i + 7$. The variance scales by $a^2$: $\\text{Var}(y) = (-2)^2 \\text{Var}(x) = 4\\text{Var}(x)$. Thus the ratio is $4 : 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'For $10$ observations, if $\\sum_{i=1}^{10} x_i = 20$ and $\\sum_{i=1}^{10} x_i^2 = 100$, then the variance is:',
    options: ['$6$', '$8$', '$4$', '$10$'],
    correctAnswer: 0,
    explanation: 'Mean $\\bar{x} = \\frac{20}{10} = 2$.\nVariance:\n$$\\sigma^2 = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2 = \\frac{100}{10} - 2^2 = 10 - 4 = 6.$$'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The variance of the first $11$ natural numbers is $10$.\nReason (R): The variance of the first $n$ natural numbers is $\\frac{n^2 - 1}{12}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'The variance of the first $n$ natural numbers is $\\frac{n^2 - 1}{12}$. For $n = 11$, $\\sigma^2 = \\frac{11^2 - 1}{12} = \\frac{120}{12} = 10$. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The variance of the dataset $\\{7, 7, 7, 7, 7\\}$ is $0$.\nReason (R): The variance of a set of observations is zero if and only if all the observations are identical.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since all observations are identical to $7$, the mean is $7$ and each deviation $(x_i - \\bar{x}) = 0$, giving $\\sigma^2 = 0$. In general, $\\sigma^2 = 0 \\iff x_1 = x_2 = \\dots = x_n$. Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the variance of $x_1, x_2, \\dots, x_n$ is $5$, then the variance of $-x_1, -x_2, \\dots, -x_n$ is $-5$.\nReason (R): Variance is always non-negative, and $\\text{Var}(-X) = (-1)^2 \\text{Var}(X) = \\text{Var}(X)$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'Variance is a sum of squares and is always non-negative. $\\text{Var}(-X) = (-1)^2 \\text{Var}(X) = +5$, not $-5$. Hence (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If a constant $c$ is added to each observation of a dataset, its variance remains unchanged.\nReason (R): Variance is independent of the change of origin.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Adding a constant $c$ shifts both the observations and their mean by $c$, so $(y_i - \\bar{y}) = (x_i + c) - (\\bar{x} + c) = x_i - \\bar{x}$. Therefore, variance is invariant under change of origin. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If each observation in a dataset is multiplied by $3$, the variance is multiplied by $9$.\nReason (R): For the linear transformation $y_i = ax_i + b$, the variance transforms as $\\text{Var}(y) = a^2 \\text{Var}(x)$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Here $a = 3$, so $\\text{Var}(3x) = 3^2 \\text{Var}(x) = 9\\text{Var}(x)$. Both (A) and (R) are true, and (R) provides the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The variance of $2, 4, 6, 8, 10$ is $8$.\nReason (R): The variance of the first $n$ even natural numbers is $\\frac{n^2 - 1}{3}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'The first $n$ even natural numbers have variance $4 \\times \\frac{n^2 - 1}{12} = \\frac{n^2 - 1}{3}$. For $n = 5$, $\\sigma^2 = \\frac{5^2 - 1}{3} = \\frac{24}{3} = 8$. Both (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For any real dataset, the variance $\\sigma^2$ is always greater than or equal to $0$.\nReason (R): The variance is defined as $\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2$, which is an average of non-negative real terms.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $(x_i - \\bar{x})^2 \\ge 0$ for all real $x_i$, their sum and average is non-negative, meaning $\\sigma^2 \\ge 0$. Both (A) and (R) are true, and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The variance of the observations $101, 102, 103, 104, 105$ is $2$.\nReason (R): Shifting each observation by subtracting $100$ gives $1, 2, 3, 4, 5$, whose variance is $\\frac{5^2 - 1}{12} = 2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Subtracting $100$ from each number does not alter the variance. The variance of $1, 2, 3, 4, 5$ is $\\frac{25 - 1}{12} = 2$. Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The variance of two distinct real numbers $a$ and $b$ is $\\frac{(a-b)^2}{4}$.\nReason (R): The mean of $a$ and $b$ is $\\frac{a+b}{2}$, and the mean squared deviation is $\\frac{1}{2}\\left[\\left(a - \\frac{a+b}{2}\\right)^2 + \\left(b - \\frac{a+b}{2}\\right)^2\\right]$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Evaluating the mean squared deviation:\n$$\\frac{1}{2}\\left[\\left(\\frac{a-b}{2}\\right)^2 + \\left(\\frac{b-a}{2}\\right)^2\\right] = \\frac{1}{2}\\left[\\frac{(a-b)^2}{4} + \\frac{(a-b)^2}{4}\\right] = \\frac{(a-b)^2}{4}.$$\nBoth (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the mean of $n$ observations $x_1, x_2, \\dots, x_n$ is zero, then their variance is $\\frac{1}{n}\\sum_{i=1}^n x_i^2$.\nReason (R): In general, the variance of $n$ observations is given by $\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^n x_i^2 - (\\bar{x})^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'When $\\bar{x} = 0$, $\\sigma^2 = \\frac{1}{n}\\sum x_i^2 - 0^2 = \\frac{1}{n}\\sum x_i^2$. Both (A) and (R) are true and (R) correctly explains (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the variance of the first $n$ natural numbers is $10$, find the value of $n$.',
    correctAnswer: 11,
    explanation: 'Using the variance formula for first $n$ natural numbers:\n$$\\sigma^2 = \\frac{n^2 - 1}{12} = 10 \\implies n^2 - 1 = 120 \\implies n^2 = 121 \\implies n = 11.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean of $5$ observations is $4.4$ and their variance is $8.24$. If three of the observations are $1, 2, 6$, and the other two are $x$ and $y$ with $x > y$, find the value of $x - y$.',
    correctAnswer: 5,
    explanation: 'Sum of observations: $1 + 2 + 6 + x + y = 5 \\times 4.4 = 22 \\implies x + y = 13$.\nVariance:\n$$\\frac{\\sum x_i^2}{5} - (4.4)^2 = 8.24 \\implies \\frac{\\sum x_i^2}{5} - 19.36 = 8.24 \\implies \\frac{\\sum x_i^2}{5} = 27.6 \\implies \\sum x_i^2 = 138.$$\n$$1^2 + 2^2 + 6^2 + x^2 + y^2 = 41 + x^2 + y^2 = 138 \\implies x^2 + y^2 = 97.$$\n$$(x-y)^2 = 2(x^2 + y^2) - (x+y)^2 = 2(97) - 13^2 = 194 - 169 = 25.$$\nSince $x > y$, $x - y = \\sqrt{25} = 5$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the variance of the observations $x_1, x_2, \\dots, x_{10}$ is $3$, find the variance of $4x_1 + 9, 4x_2 + 9, \\dots, 4x_{10} + 9$.',
    correctAnswer: 48,
    explanation: 'For $y_i = ax_i + b$, the variance is $\\text{Var}(y) = a^2 \\text{Var}(x)$. Here $a = 4$ and $\\text{Var}(x) = 3$, so the new variance is $4^2 \\times 3 = 16 \\times 3 = 48$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the variance of the first $7$ odd natural numbers $1, 3, 5, 7, 9, 11, 13$.',
    correctAnswer: 16,
    explanation: 'The variance of the first $n$ odd natural numbers is $\\frac{n^2 - 1}{3}$. For $n = 7$:\n$$\\sigma^2 = \\frac{7^2 - 1}{3} = \\frac{48}{3} = 16.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean and variance of $7$ observations are $8$ and $16$ respectively. If $5$ of the observations are $2, 4, 10, 12, 14$, and the remaining two observations are $a$ and $b$, find the value of $a \\cdot b$.',
    correctAnswer: 48,
    explanation: 'Total sum: $7 \\times 8 = 56$.\nSum of 5 known observations: $2 + 4 + 10 + 12 + 14 = 42 \\implies a + b = 56 - 42 = 14$.\nVariance:\n$$\\frac{\\sum x_i^2}{7} - 8^2 = 16 \\implies \\frac{\\sum x_i^2}{7} = 80 \\implies \\sum x_i^2 = 560.$$\nSum of squares of known observations: $4 + 16 + 100 + 144 + 196 = 460$.\n$$a^2 + b^2 = 560 - 460 = 100.$$\nSince $(a+b)^2 = a^2 + b^2 + 2ab$:\n$$14^2 = 100 + 2ab \\implies 196 = 100 + 2ab \\implies 2ab = 96 \\implies ab = 48.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the variance of the dataset $\\{3, 3, 3, 3, 3\\}$.',
    correctAnswer: 0,
    explanation: 'Since all observations are equal to $3$, the mean is $3$ and every deviation $(x_i - \\bar{x}) = 0$. Hence the variance is $0$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The variance of $10$ observations is $4$. If each observation is multiplied by $5$, find the variance of the new observations.',
    correctAnswer: 100,
    explanation: 'Multiplying each observation by $a = 5$ multiplies the variance by $a^2 = 5^2 = 25$. The new variance is $25 \\times 4 = 100$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'For a set of $8$ observations, given that $\\sum_{i=1}^8 (x_i - 5) = 0$ and $\\sum_{i=1}^8 (x_i - 5)^2 = 72$, find the variance of these $8$ observations.',
    correctAnswer: 9,
    explanation: 'Since $\\sum_{i=1}^8 (x_i - 5) = 0$, the mean of the observations is $\\bar{x} = 5$. Thus $\\sum_{i=1}^8 (x_i - \\bar{x})^2 = 72$. The variance is $\\frac{1}{8}(72) = 9$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean of $10$ observations is $20$ and their variance is $5$. If each observation is increased by $2$ and then multiplied by $3$, find the variance of the resulting observations.',
    correctAnswer: 45,
    explanation: 'Increasing each observation by $2$ leaves the variance unchanged at $5$. Multiplying by $3$ scales the variance by $3^2 = 9$. Thus the resulting variance is $5 \\times 9 = 45$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The variance of $20$ observations is $5$. If each observation is multiplied by $2$, find the variance of the resulting observations.',
    correctAnswer: 20,
    explanation: 'Multiplying each observation by $2$ multiplies the variance by $2^2 = 4$. Thus the new variance is $4 \\times 5 = 20$.'
  }
];

module.exports = { subtopic5Questions };
