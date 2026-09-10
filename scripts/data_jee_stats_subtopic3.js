// scripts/data_jee_stats_subtopic3.js
// Subtopic 3: Mean, median, mode
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic3Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean of $n$ observations is $\\bar{x}$. If each observation is multiplied by a non-zero constant $k$ and then increased by $c$, the new mean is:',
    options: ['$k\\bar{x} + c$', '$k\\bar{x}$', '$\\bar{x} + c$', '$\\frac{\\bar{x} + c}{k}$'],
    correctAnswer: 0,
    explanation: 'By the linearity of the arithmetic mean:\n$$\\bar{y} = \\frac{1}{n}\\sum_{i=1}^n (k x_i + c) = k \\left(\\frac{1}{n}\\sum_{i=1}^n x_i\\right) + \\frac{1}{n}(nc) = k\\bar{x} + c.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The arithmetic mean of the first $n$ odd natural numbers is:',
    options: ['$n$', '$n + 1$', '$2n - 1$', '$\\frac{n+1}{2}$'],
    correctAnswer: 0,
    explanation: 'The first $n$ odd natural numbers are $1, 3, 5, \\dots, 2n-1$.\nTheir sum is $n^2$.\nHence the mean is $\\frac{n^2}{n} = n$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'A group of $n_1$ observations has mean $\\bar{x}_1$ and another group of $n_2$ observations has mean $\\bar{x}_2$. The combined mean of the two groups is:',
    options: [
      '$\\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}$',
      '$\\frac{\\bar{x}_1 + \\bar{x}_2}{2}$',
      '$\\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{2}$',
      '$\\frac{\\bar{x}_1 + \\bar{x}_2}{n_1 + n_2}$'
    ],
    correctAnswer: 0,
    explanation: 'Total sum of all observations $= n_1\\bar{x}_1 + n_2\\bar{x}_2$.\nTotal number of observations $= n_1 + n_2$.\nCombined mean $\\bar{x} = \\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'In a moderately skewed distribution, if $\\text{Mode} - \\text{Median} = 12$, then the value of $\\text{Median} - \\text{Mean}$ is:',
    options: ['6', '4', '8', '12'],
    correctAnswer: 0,
    explanation: 'From Karl Pearson\'s empirical relationship:\n$$\\text{Mode} = 3\\text{Median} - 2\\text{Mean}.$$\nSubtracting $\\text{Median}$ from both sides:\n$$\\text{Mode} - \\text{Median} = 2(\\text{Median} - \\text{Mean}).$$\nGiven $\\text{Mode} - \\text{Median} = 12$:\n$$12 = 2(\\text{Median} - \\text{Mean}) \\implies \\text{Median} - \\text{Mean} = 6.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean of $50$ observations was found to be $80$. Later, it was detected that two observations $19$ and $31$ were wrongly recorded as $91$ and $13$ respectively. The corrected mean is:',
    options: ['78.92', '79.20', '80.50', '81.12'],
    correctAnswer: 0,
    explanation: 'Original sum $= 50 \\times 80 = 4000$.\nSubtract incorrect observations and add correct ones:\n$$\\text{Correct sum} = 4000 - (91 + 13) + (19 + 31) = 4000 - 104 + 50 = 3946.$$\n$$\\text{Corrected mean} = \\frac{3946}{50} = 78.92.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Consider the sequence where each integer $k \\in \\{1, 2, \\dots, n\\}$ appears with frequency $k$: $1, 2, 2, 3, 3, 3, \\dots, n$. The arithmetic mean of this distribution is:',
    options: [
      '$\\frac{2n + 1}{3}$',
      '$\\frac{n + 1}{2}$',
      '$\\frac{n(n+1)}{3}$',
      '$\\frac{2n - 1}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Total sum of all elements $= \\sum_{k=1}^n k \\times k = \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$.\nTotal number of elements $= \\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.\n$$\\text{Mean} = \\frac{\\sum k^2}{\\sum k} = \\frac{\\frac{n(n+1)(2n+1)}{6}}{\\frac{n(n+1)}{2}} = \\frac{2n+1}{3}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the median of five numbers $a < b < c < d < e$ is $M$, what is the median of $3a + 1, 3b + 1, 3c + 1, 3d + 1, 3e + 1$?',
    options: ['$3M + 1$', '$M$', '$3M$', '$\\frac{M+1}{3}$'],
    correctAnswer: 0,
    explanation: 'Since the transformation $f(x) = 3x + 1$ is strictly increasing, the order of the elements is preserved:\n$$3a + 1 < 3b + 1 < 3c + 1 < 3d + 1 < 3e + 1.$$\nThe median remains the middle (third) element: $3c + 1 = 3M + 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'For any set of distinct positive real numbers, the relationship between Arithmetic Mean ($AM$), Geometric Mean ($GM$), and Harmonic Mean ($HM$) is:',
    options: [
      '$AM > GM > HM$',
      '$AM \\ge GM \\ge HM$',
      '$HM > GM > AM$',
      '$GM > AM > HM$'
    ],
    correctAnswer: 0,
    explanation: 'For strictly distinct positive numbers, the inequality of means states strictly that $AM > GM > HM$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'In a continuous grouped frequency distribution, the formula for computing the median is:',
    options: [
      '$L + \\left(\\frac{\\frac{N}{2} - CF}{f}\\right) \\times h$',
      '$L + \\left(\\frac{N - CF}{f}\\right) \\times h$',
      '$L + \\left(\\frac{f - CF}{\\frac{N}{2}}\\right) \\times h$',
      '$L + \\left(\\frac{\\frac{N}{2} - f}{CF}\\right) \\times h$'
    ],
    correctAnswer: 0,
    explanation: 'In the standard median formula for continuous data, $L$ is the lower limit of the median class, $N = \\sum f_i$, $CF$ is the cumulative frequency of the preceding class, $f$ is the frequency of the median class, and $h$ is the class width.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The value of $A$ that minimizes the sum of squared deviations $\\sum_{i=1}^n (x_i - A)^2$ is:',
    options: [
      'The arithmetic mean $\\bar{x}$',
      'The median $M$',
      'The mode',
      'Zero'
    ],
    correctAnswer: 0,
    explanation: 'Let $S(A) = \\sum_{i=1}^n (x_i - A)^2$.\nDifferentiating with respect to $A$:\n$$\\frac{dS}{dA} = -2\\sum_{i=1}^n (x_i - A) = -2\\left(\\sum x_i - nA\\right) = 0 \\implies A = \\frac{1}{n}\\sum x_i = \\bar{x}.$$\nSince $\\frac{d^2S}{dA^2} = 2n > 0$, the sum of squared deviations is strictly minimized at the arithmetic mean.'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The algebraic sum of deviations of a set of observations from their arithmetic mean is always zero.\nReason (R): $\\sum_{i=1}^n (x_i - \\bar{x}) = \\sum x_i - n\\bar{x} = n\\bar{x} - n\\bar{x} = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'This is the defining balancing property of the arithmetic mean: positive and negative deviations from the mean cancel out completely. Both (A) and (R) are true and (R) provides the algebraic proof.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The mean of the first $n$ odd natural numbers is $n$.\nReason (R): The sum of the first $n$ odd natural numbers is $n^2$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $\\sum_{k=1}^n (2k - 1) = n^2$, dividing by $n$ gives the mean $\\bar{x} = n$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For a negatively skewed distribution, $\\text{Mean} < \\text{Median} < \\text{Mode}$.\nReason (R): In a distribution skewed to the left, extreme small values pull the arithmetic mean toward the left tail more than the median.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Extreme low values in the left tail lower the arithmetic mean significantly, while the median is positional and resists extreme pulling, producing the order $\\text{Mean} < \\text{Median} < \\text{Mode}$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If all observations in a dataset are multiplied by $-2$, the new median is $-2$ times the original median.\nReason (R): Multiplying by a negative constant reverses the order of the observations, but the central position still maps to $-2M$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'For any linear function $f(x) = ax + b$, the median transforms directly as $M_{\\text{new}} = aM + b$, even if $a < 0$. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The arithmetic mean of the first $n$ natural numbers is $\\frac{n+1}{2}$.\nReason (R): The sum of the first $n$ natural numbers is given by $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: '$$\\bar{x} = \\frac{\\sum_{k=1}^n k}{n} = \\frac{\\frac{n(n+1)}{2}}{n} = \\frac{n+1}{2}.$$ Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Every set of numerical data has a unique mode.\nReason (R): A dataset can have no mode if all values have equal frequency, or multiple modes if several values share the highest frequency.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Assertion (A) is false because data can be bimodal, multimodal, or have no mode at all. Reason (R) correctly explains this fact. Hence (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The sum of squared deviations $\\sum_{i=1}^n (x_i - c)^2$ is minimum when $c = \\bar{x}$.\nReason (R): Expanding $\\sum (x_i - c)^2 = \\sum (x_i - \\bar{x})^2 + n(\\bar{x} - c)^2$, which is minimized when the non-negative term $n(\\bar{x} - c)^2 = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $n(\\bar{x} - c)^2 \\ge 0$ with equality if and only if $c = \\bar{x}$, the algebraic identity demonstrates that the sum of squared deviations is minimal about the arithmetic mean. Both (A) and (R) are true and (R) provides the algebraic proof.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The median is preferred over the mean as a measure of central tendency for highly skewed datasets like household wealth.\nReason (R): The median is a positional average that is resistant to extreme outliers in the tails.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Extreme billionaires disproportionately distort the arithmetic mean, whereas the median accurately reflects the economic midpoint of the population. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When all weights $w_i$ in a weighted mean are equal, the weighted mean reduces to the simple arithmetic mean.\nReason (R): If $w_i = w$, then $\\frac{\\sum w x_i}{\\sum w} = \\frac{w \\sum x_i}{n w} = \\frac{\\sum x_i}{n} = \\bar{x}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Equal weights assign identical importance to each data point, which is precisely the definition of the simple arithmetic mean. Both (A) and (R) are true and (R) provides the proof.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $y_i = a x_i + b$, then $\\bar{y} = a\\bar{x} + b$.\nReason (R): The expectation or mean operator is a linear operator on data.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Arithmetic mean satisfies linearity: $\\frac{1}{n}\\sum (ax_i + b) = a(\\frac{1}{n}\\sum x_i) + b = a\\bar{x} + b$. Both (A) and (R) are true and (R) explains (A).'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean of $20$ observations is $15$. On checking, it was found that an observation $25$ was mistakenly recorded as $45$. Find the corrected mean.',
    options: [],
    correctAnswer: 14,
    explanation: 'Original sum $= 20 \\times 15 = 300$.\nCorrected sum $= 300 - 45 + 25 = 280$.\nCorrected mean $= \\frac{280}{20} = 14$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The arithmetic mean of the first $n$ odd natural numbers is $25$. Find the value of $n$.',
    options: [],
    correctAnswer: 25,
    explanation: 'The mean of the first $n$ odd natural numbers is $n$.\nTherefore, $n = 25$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'In a moderately asymmetrical distribution, the mean is $30$ and the median is $32$. Find the value of the empirical mode.',
    options: [],
    correctAnswer: 36,
    explanation: 'Using the empirical formula:\n$$\\text{Mode} = 3\\text{Median} - 2\\text{Mean} = 3(32) - 2(30) = 96 - 60 = 36.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The average score of $40$ students in section A is $60$, and the average score of $60$ students in section B is $70$. Find the combined average score of all $100$ students.',
    options: [],
    correctAnswer: 66,
    explanation: '$$\\bar{x} = \\frac{40(60) + 60(70)}{40 + 60} = \\frac{2400 + 4200}{100} = \\frac{6600}{100} = 66.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'For the sequence $1, 2, 2, 3, 3, 3, \\dots, n$, where each integer $k$ appears $k$ times, the arithmetic mean is $15$. Find the value of $n$.',
    options: [],
    correctAnswer: 22,
    explanation: 'The mean of this distribution is $\\frac{2n + 1}{3}$.\nGiven $\\frac{2n + 1}{3} = 15 \\implies 2n + 1 = 45 \\implies 2n = 44 \\implies n = 22$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the median of the numbers $\\frac{x}{5}, x, \\frac{x}{4}, \\frac{x}{2}, \\frac{x}{3}$ (where $x > 0$) is $8$, find the value of $x$.',
    options: [],
    correctAnswer: 24,
    explanation: 'Arranging the $5$ positive numbers in ascending order:\n$$\\frac{x}{5} < \\frac{x}{4} < \\frac{x}{3} < \\frac{x}{2} < x.$$\nThe median is the middle (third) observation: $\\frac{x}{3} = 8 \\implies x = 24$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean of $5$ observations is $4$. If four of the observations are $1, 2, 4,$ and $5$, find the fifth observation.',
    options: [],
    correctAnswer: 8,
    explanation: 'Total sum $= 5 \\times 4 = 20$.\nSum of four observations $= 1 + 2 + 4 + 5 = 12$.\nFifth observation $= 20 - 12 = 8$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the mean of $a, b, c$ is $10$, and the mean of $b, c, d$ is $12$, find the value of $d - a$.',
    options: [],
    correctAnswer: 6,
    explanation: '$$a + b + c = 3(10) = 30.$$\n$$b + c + d = 3(12) = 36.$$\nSubtracting the first equation from the second:\n$$(b + c + d) - (a + b + c) = 36 - 30 \\implies d - a = 6.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the arithmetic mean of the first $7$ positive multiples of $5$: $5, 10, 15, 20, 25, 30, 35$.',
    options: [],
    correctAnswer: 20,
    explanation: 'For an arithmetic progression with an odd number of terms, the mean is the middle term: $20$.\nAlgebraically: $\\frac{5(1 + 2 + \\dots + 7)}{7} = \\frac{5 \\times 28}{7} = 20$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of $10$ observations is $180$, find their arithmetic mean $\\bar{x}$.',
    options: [],
    correctAnswer: 18,
    explanation: '$$\\bar{x} = \\frac{\\sum x_i}{n} = \\frac{180}{10} = 18.$$'
  }
];

module.exports = { subtopic3Questions };
