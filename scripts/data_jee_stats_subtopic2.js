// scripts/data_jee_stats_subtopic2.js
// Subtopic 2: Mean deviation about mean and median
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean deviation about the mean of the numbers $1, 2, 3, 4, 5, 6, 7$ is:',
    options: ['$\\frac{12}{7}$', '$\\frac{16}{7}$', '2', '$\\frac{9}{7}$'],
    correctAnswer: 0,
    explanation: 'Mean $\\bar{x} = \\frac{1 + 2 + 3 + 4 + 5 + 6 + 7}{7} = \\frac{28}{7} = 4$.\nAbsolute deviations $|x_i - \\bar{x}|$: $|1-4|=3, |2-4|=2, |3-4|=1, |4-4|=0, |5-4|=1, |6-4|=2, |7-4|=3$.\nSum of deviations $= 3 + 2 + 1 + 0 + 1 + 2 + 3 = 12$.\nMean deviation about mean $= \\frac{12}{7}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The sum of absolute deviations $\\sum_{i=1}^n |x_i - A|$ is minimum when $A$ is chosen as the:',
    options: ['Median', 'Mean', 'Mode', 'Geometric Mean'],
    correctAnswer: 0,
    explanation: 'A fundamental theorem in statistics establishes that the sum of absolute deviations from a constant $A$ is minimized when $A$ is the median of the distribution.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Find the mean deviation about the median for the observations: $4, 6, 9, 3, 10, 13, 2$.',
    options: ['$\\frac{23}{7}$', '$\\frac{22}{7}$', '$\\frac{25}{7}$', '3'],
    correctAnswer: 0,
    explanation: 'Arranging the $7$ observations in ascending order:\n$$2, 3, 4, 6, 9, 10, 13.$$\nMedian $M = 6$ ($4^{\\text{th}}$ observation).\nAbsolute deviations $|x_i - 6|$:\n$$|2-6|=4, |3-6|=3, |4-6|=2, |6-6|=0, |9-6|=3, |10-6|=4, |13-6|=7.$$\nSum of deviations $= 4 + 3 + 2 + 0 + 3 + 4 + 7 = 23$.\nMean deviation about median $= \\frac{23}{7}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean deviation of the first $2n$ natural numbers about their mean is:',
    options: ['$\\frac{n}{2}$', '$\\frac{n+1}{2}$', '$n$', '$\\frac{n-1}{2}$'],
    correctAnswer: 0,
    explanation: 'The mean of $1, 2, \\dots, 2n$ is $\\bar{x} = \\frac{2n+1}{2} = n + 0.5$.\nThe deviations are $|k - (n + 0.5)|$ for $k = 1, 2, \\dots, 2n$.\nBy symmetry, these deviations paired from both ends are $0.5, 1.5, 2.5, \\dots, n - 0.5$ twice.\nSum of deviations:\n$$2 \\sum_{j=1}^n (j - 0.5) = 2 \\left(\\frac{n(n+1)}{2} - 0.5n\\right) = n(n+1) - n = n^2.$$\nMean deviation about mean $= \\frac{n^2}{2n} = \\frac{n}{2}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean deviation of the first $2n+1$ natural numbers about their mean is:',
    options: [
      '$\\frac{n(n+1)}{2n+1}$',
      '$\\frac{n^2}{2n+1}$',
      '$\\frac{(n+1)^2}{2n+1}$',
      '$\\frac{n}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'The mean of $1, 2, \\dots, 2n+1$ is $\\bar{x} = n + 1$.\nThe deviations $|k - (n+1)|$ are $n, n-1, \\dots, 1, 0, 1, \\dots, n$.\nSum of deviations $= 2 \\sum_{k=1}^n k = 2 \\cdot \\frac{n(n+1)}{2} = n(n+1)$.\nMean deviation $= \\frac{\\sum |x_i - \\bar{x}|}{2n+1} = \\frac{n(n+1)}{2n+1}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If $y_i = a x_i + b$ for all $i = 1, 2, \\dots, n$, where $a, b$ are constants, the mean deviation of $y$ about its mean, $MD(y)$, is related to $MD(x)$ by:',
    options: [
      '$MD(y) = |a| MD(x)$',
      '$MD(y) = a MD(x) + b$',
      '$MD(y) = a^2 MD(x)$',
      '$MD(y) = |a| MD(x) + |b|$'
    ],
    correctAnswer: 0,
    explanation: 'Since $\\bar{y} = a\\bar{x} + b$, the deviation is $y_i - \\bar{y} = (ax_i + b) - (a\\bar{x} + b) = a(x_i - \\bar{x})$.\nTaking absolute values: $|y_i - \\bar{y}| = |a||x_i - \\bar{x}|$.\nSumming and dividing by $n$: $MD(y) = |a| MD(x)$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'For any perfectly symmetric distribution, which of the following is true regarding mean deviations?',
    options: [
      'Mean deviation about mean equals mean deviation about median',
      'Mean deviation about mean is strictly greater than about median',
      'Mean deviation about mean is strictly less than about median',
      'Mean deviation about mean is zero'
    ],
    correctAnswer: 0,
    explanation: 'In any symmetric distribution, the arithmetic mean coincides with the median ($\\bar{x} = M$). Consequently, deviations $|x_i - \\bar{x}|$ and $|x_i - M|$ are identical for all $i$, so both mean deviations are equal.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Find the mean deviation about the mean of the arithmetic progression: $x, x+d, x+2d, x+3d, x+4d$, where $d > 0$.',
    options: ['1.2d', '1.5d', 'd', '2.0d'],
    correctAnswer: 0,
    explanation: 'Mean $\\bar{x} = x + 2d$.\nDeviations from mean: $|(x) - (x+2d)| = 2d, |(x+d) - (x+2d)| = d, 0, d, 2d$.\nSum of deviations $= 2d + d + 0 + d + 2d = 6d$.\nMean deviation about mean $= \\frac{6d}{5} = 1.2d$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Calculate the mean deviation about the median for the dataset: $6, 7, 10, 12, 13, 4, 8, 12$.',
    options: ['2.75', '3.00', '2.50', '3.25'],
    correctAnswer: 0,
    explanation: 'Arrange the $8$ observations in ascending order: $4, 6, 7, 8, 10, 12, 12, 13$.\nMedian is the average of $4^{\\text{th}}$ and $5^{\\text{th}}$ observations: $M = \\frac{8 + 10}{2} = 9$.\nAbsolute deviations $|x_i - 9|$:\n$$|4-9|=5, |6-9|=3, |7-9|=2, |8-9|=1, |10-9|=1, |12-9|=3, |12-9|=3, |13-9|=4.$$\nSum of deviations $= 5 + 3 + 2 + 1 + 1 + 3 + 3 + 4 = 22$.\nMean deviation about median $= \\frac{22}{8} = 2.75$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'For any dataset with standard deviation $\\sigma$ and mean deviation about mean $MD$, which inequality always holds?',
    options: [
      '$MD \\le \\sigma$',
      '$MD \\ge \\sigma$',
      '$MD = \\sigma$',
      '$MD \\le \\frac{\\sigma}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'By the Cauchy-Schwarz inequality applied to the deviations $|x_i - \\bar{x}|$:\n$$\\left(\\frac{1}{n}\\sum_{i=1}^n |x_i - \\bar{x}|\\right)^2 \\le \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2 = \\sigma^2.$$\nTaking square roots yields $MD \\le \\sigma$.'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The sum of absolute deviations $\\sum_{i=1}^n |x_i - A|$ attains its absolute minimum when $A = \\text{Median}$.\nReason (R): For any dataset, the median is the value that minimizes the $L_1$-norm of dispersion.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By convex analysis and the properties of absolute values, $\\frac{d}{dA}\\sum |x_i - A| = \\sum -\\text{sgn}(x_i - A) = 0$, which occurs when the number of observations above $A$ equals the number below $A$, i.e. when $A$ is the median. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $y_i = 3x_i - 7$, then the mean deviation of $y$ about its mean is $3$ times that of $x$.\nReason (R): Mean deviation is independent of change of origin and depends only on the scale factor $|a|$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $y_i - \\bar{y} = 3(x_i - \\bar{x})$, $|y_i - \\bar{y}| = 3|x_i - \\bar{x}|$. Summing and dividing by $n$ gives $MD(y) = 3 MD(x)$. Both (A) and (R) are true and (R) provides the explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The mean deviation about the mean is always less than or equal to the standard deviation for any dataset.\nReason (R): By Cauchy-Schwarz inequality, the square of the arithmetic mean of positive numbers does not exceed the arithmetic mean of their squares.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Letting $z_i = |x_i - \\bar{x}|$, $(\\bar{z})^2 \\le \\overline{z^2} = \\frac{1}{n}\\sum z_i^2 = \\sigma^2$. Hence $MD = \\bar{z} \\le \\sigma$. Both (A) and (R) are true and (R) provides the proof.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any dataset, the mean deviation about the mean is always strictly less than the mean deviation about the median.\nReason (R): The sum of squared deviations is minimized at the mean.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Assertion (A) is false because the sum of absolute deviations is minimized at the median, so $MD(M) \\le MD(\\bar{x})$ always. Reason (R) is true because $\\sum (x_i - A)^2$ is minimized at $A = \\bar{x}$. Hence (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For the numbers $1, 2, \\dots, 2n+1$, the mean deviation about the median is $\\frac{n(n+1)}{2n+1}$.\nReason (R): In an odd number of consecutive natural numbers, the median is the middle term $n+1$, and the sum of absolute deviations is $2\\sum_{k=1}^n k = n(n+1)$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The median of $1, 2, \\dots, 2n+1$ is $n+1$. Deviations are $1, 2, \\dots, n$ in both directions, summing to $2 \\cdot \\frac{n(n+1)}{2} = n(n+1)$. Dividing by $2n+1$ gives $\\frac{n(n+1)}{2n+1}$. Both statements are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If every observation in a dataset is increased by $5$, the mean deviation about the mean remains unchanged.\nReason (R): Adding a constant to each observation shifts the mean by the same constant, leaving individual deviations $(x_i - \\bar{x})$ identical.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: '$(x_i + 5) - (\\bar{x} + 5) = x_i - \\bar{x}$. Since all deviations are unchanged, the mean deviation is unchanged. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Mean deviation is considered superior to the range as a measure of dispersion.\nReason (R): Unlike the range which depends only on the two extreme values, the mean deviation takes into account every single observation in the dataset.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Range is vulnerable to extreme values since it uses only $x_{\\max} - x_{\\min}$. Mean deviation uses every point by averaging absolute deviations from a central value. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For the dataset $\\{-2, -1, 0, 1, 2\\}$, the mean deviation about the mean is $1.2$.\nReason (R): The mean is $0$, and the sum of absolute deviations is $|-2| + |-1| + 0 + 1 + 2 = 6$, giving $6/5 = 1.2$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Mean is $(-2 - 1 + 0 + 1 + 2)/5 = 0$. Deviations are $2, 1, 0, 1, 2$, summing to $6$. Dividing by $5$ gives $1.2$. Both (A) and (R) are true and (R) is the exact derivation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Mean deviation is less commonly used in advanced mathematical statistics than standard deviation.\nReason (R): The absolute value function $|x - A|$ is non-differentiable at $x = A$, making algebraic manipulation and analytical optimization cumbersome.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Standard deviation utilizes squared terms $(x - \\bar{x})^2$ which are smooth and differentiable everywhere, facilitating calculus and probability theory. Mean deviation involves non-smooth absolute values. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If all observations in a dataset are identical, the mean deviation is zero.\nReason (R): When all values are equal, every observation coincides with the mean and median, so every absolute deviation is zero.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'If $x_i = c$ for all $i$, $\\bar{x} = c$ and $M = c$. Thus $|x_i - c| = 0$ for all $i$, so $MD = 0$. Both (A) and (R) are true and (R) explains (A).'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find $5$ times the mean deviation about the mean for the observations: $3, 6, 10, 12, 14$.',
    options: [],
    correctAnswer: 18,
    explanation: 'Mean $\\bar{x} = \\frac{3 + 6 + 10 + 12 + 14}{5} = \\frac{45}{5} = 9$.\nAbsolute deviations $|x_i - 9|$:\n$$|3-9|=6, \\quad |6-9|=3, \\quad |10-9|=1, \\quad |12-9|=3, \\quad |14-9|=5.$$\nSum of deviations $= 6 + 3 + 1 + 3 + 5 = 18$.\nMean deviation about mean $= \\frac{18}{5}$.\nMultiplying by $5$: $5 \\times \\frac{18}{5} = 18$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the mean deviation about the mean of the first $10$ even natural numbers: $2, 4, 6, 8, 10, 12, 14, 16, 18, 20$.',
    options: [],
    correctAnswer: 5,
    explanation: 'The mean is $\\bar{x} = 11$.\nDeviations $|x_i - 11|$ are: $9, 7, 5, 3, 1, 1, 3, 5, 7, 9$.\nSum of deviations $= 2(1 + 3 + 5 + 7 + 9) = 2(25) = 50$.\nMean deviation about mean $= \\frac{50}{10} = 5$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the mean deviation about the median for the dataset: $2, 4, 7, 9, 11, 13, 17$.',
    options: [],
    correctAnswer: 4,
    explanation: 'There are $n = 7$ observations arranged in ascending order.\nMedian $M = 9$ ($4^{\\text{th}}$ observation).\nAbsolute deviations $|x_i - 9|$:\n$$|2-9|=7, |4-9|=5, |7-9|=2, |9-9|=0, |11-9|=2, |13-9|=4, |17-9|=8.$$\nSum of deviations $= 7 + 5 + 2 + 0 + 2 + 4 + 8 = 28$.\nMean deviation about median $= \\frac{28}{7} = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'For the first $32$ natural numbers $1, 2, \\dots, 32$, find the mean deviation about their arithmetic mean.',
    options: [],
    correctAnswer: 8,
    explanation: 'For the first $2n$ natural numbers, the mean deviation about mean is $\\frac{n}{2}$.\nHere $2n = 32 \\implies n = 16$.\nHence, mean deviation $= \\frac{16}{2} = 8$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the value of $k$ that minimizes the sum of absolute deviations $\\sum_{i=1}^5 |x_i - k|$ for the dataset $\\{2, 5, 7, 11, 19\\}$.',
    options: [],
    correctAnswer: 7,
    explanation: 'The sum of absolute deviations is minimized when $k$ is the median of the dataset.\nSince $n = 5$, the median is the $3^{\\text{rd}}$ value: $k = 7$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean deviation about the mean of the $20$ terms of an arithmetic progression $1, 1+d, 1+2d, \\dots, 1+19d$ ($d > 0$) is $15$. Find the value of $d$.',
    options: [],
    correctAnswer: 3,
    explanation: 'For $2n = 20$ terms in AP with common difference $d$, $n = 10$.\nThe mean deviation about mean is $\\frac{n}{2}d = \\frac{10}{2}d = 5d$.\nGiven $5d = 15 \\implies d = 3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean deviation about the mean of $10$ observations is $4$. If each observation is multiplied by $3$ and then decreased by $5$, find the mean deviation about the mean of the new observations.',
    options: [],
    correctAnswer: 12,
    explanation: 'For the transformation $y_i = 3x_i - 5$:\n$$MD(y) = |3| MD(x) = 3 \\times 4 = 12.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the mean deviation about the median for the observations: $5, 10, 15, 20, 25$.',
    options: [],
    correctAnswer: 6,
    explanation: 'The median is $M = 15$.\nAbsolute deviations $|x_i - 15|$ are: $10, 5, 0, 5, 10$.\nSum of deviations $= 10 + 5 + 0 + 5 + 10 = 30$.\nMean deviation about median $= \\frac{30}{5} = 6$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the mean deviation about the mean for $10$ identical observations: $7, 7, 7, 7, 7, 7, 7, 7, 7, 7$.',
    options: [],
    correctAnswer: 0,
    explanation: 'Since all values equal the mean ($7$), every deviation is $0$, giving $MD = 0$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The sum of absolute deviations of $15$ observations from their median is $75$. Find the mean deviation about the median.',
    options: [],
    correctAnswer: 5,
    explanation: '$$MD(M) = \\frac{\\sum_{i=1}^{15} |x_i - M|}{15} = \\frac{75}{15} = 5.$$'
  }
];

module.exports = { subtopic2Questions };
