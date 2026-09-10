// scripts/data_jee_stats_subtopic4.js
// Subtopic 4: Standard deviation
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The standard deviation of the first $n$ natural numbers $1, 2, \\dots, n$ is given by:',
    options: [
      '$\\sqrt{\\frac{n^2 - 1}{12}}$',
      '$\\sqrt{\\frac{n^2 - 1}{6}}$',
      '$\\frac{n^2 - 1}{12}$',
      '$\\sqrt{\\frac{n(n+1)}{12}}$'
    ],
    correctAnswer: 0,
    explanation: 'Using the variance formula for the first $n$ natural numbers:\n$$\\sigma^2 = \\frac{1}{n}\\sum_{k=1}^n k^2 - \\left(\\frac{1}{n}\\sum_{k=1}^n k\\right)^2 = \\frac{(n+1)(2n+1)}{6} - \\left(\\frac{n+1}{2}\\right)^2 = \\frac{n^2 - 1}{12}.$$\nTaking the square root gives $\\sigma = \\sqrt{\\frac{n^2 - 1}{12}}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the standard deviation of $x_1, x_2, \\dots, x_n$ is $s$, then the standard deviation of $-3x_1 + 4, -3x_2 + 4, \\dots, -3x_n + 4$ is:',
    options: ['$3s$', '$-3s$', '$3s + 4$', '$9s$'],
    correctAnswer: 0,
    explanation: 'For the linear transformation $y_i = ax_i + b$, the standard deviation transforms as $\\sigma_y = |a|\\sigma_x$.\nHere $a = -3$, so $\\sigma_y = |-3|s = 3s$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The standard deviation of the first $n$ even natural numbers $2, 4, 6, \\dots, 2n$ is:',
    options: [
      '$\\sqrt{\\frac{n^2 - 1}{3}}$',
      '$\\sqrt{\\frac{n^2 - 1}{12}}$',
      '$2\\sqrt{\\frac{n^2 - 1}{3}}$',
      '$\\frac{n^2 - 1}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Since the observations are $2k$ for $k = 1, 2, \\dots, n$, the scale factor is $2$.\n$$\\sigma_{\\text{even}} = 2 \\sigma_{\\text{natural}} = 2 \\sqrt{\\frac{n^2 - 1}{12}} = 2 \\frac{\\sqrt{n^2 - 1}}{2\\sqrt{3}} = \\sqrt{\\frac{n^2 - 1}{3}}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If each observation of a dataset with standard deviation $\\sigma$ is divided by $a$ ($a \\neq 0$) and then $5$ is subtracted, the new standard deviation is:',
    options: ['$\\frac{\\sigma}{|a|}$', '$\\frac{\\sigma}{a} - 5$', '$\\frac{\\sigma}{|a|} - 5$', '$\\frac{\\sigma}{a^2}$'],
    correctAnswer: 0,
    explanation: 'Subtracting $5$ (change of origin) does not affect the standard deviation. Dividing by $a$ (change of scale) scales the standard deviation by $\\frac{1}{|a|}$. Thus the new standard deviation is $\\frac{\\sigma}{|a|}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The standard deviation of an arithmetic progression with $n$ terms and common difference $d$ is:',
    options: [
      '$|d|\\sqrt{\\frac{n^2 - 1}{12}}$',
      '$d^2\\sqrt{\\frac{n^2 - 1}{12}}$',
      '$\\sqrt{\\frac{d(n^2 - 1)}{12}}$',
      '$|d|\\frac{n^2 - 1}{12}$'
    ],
    correctAnswer: 0,
    explanation: 'The $k^{\\text{th}}$ term can be written as $x_k = a + (k-1)d = (a-d) + kd$.\nHere $a-d$ is a constant shift (origin change), and $d$ is the scale factor.\nHence $\\sigma = |d| \\sigma_{\\text{first } n \\text{ natural numbers}} = |d|\\sqrt{\\frac{n^2 - 1}{12}}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The standard deviation of $10$ observations is $3$. If an eleventh observation whose value is equal to the arithmetic mean of the original $10$ observations is added, the new standard deviation is:',
    options: [
      '$3\\sqrt{\\frac{10}{11}}$',
      '$3\\sqrt{\\frac{11}{10}}$',
      '3',
      '$\\frac{30}{11}$'
    ],
    correctAnswer: 0,
    explanation: 'Let original mean be $\\bar{x}$. Since the new observation is $x_{11} = \\bar{x}$, the new mean is still $\\bar{x}$.\nOriginal sum of squared deviations: $\\sum_{i=1}^{10} (x_i - \\bar{x})^2 = 10 \\sigma^2 = 10(9) = 90$.\nNew sum of squared deviations: $90 + (\\bar{x} - \\bar{x})^2 = 90$.\nNew variance: $\\sigma_{\\text{new}}^2 = \\frac{90}{11}$.\nNew standard deviation: $\\sigma_{\\text{new}} = \\sqrt{\\frac{90}{11}} = 3\\sqrt{\\frac{10}{11}}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The mean and standard deviation of $100$ observations were calculated as $40$ and $5.1$ respectively. Later, it was discovered that one observation $40$ was incorrectly recorded as $50$. The corrected standard deviation is:',
    options: ['5.0', '5.1', '4.8', '5.2'],
    correctAnswer: 0,
    explanation: 'Original sum $= 100 \\times 40 = 4000$.\nCorrect sum $= 4000 - 50 + 40 = 3990 \\implies \\bar{x}_{\\text{new}} = 39.9$.\nOriginal $\\sum x^2 = 100(\\sigma^2 + \\bar{x}^2) = 100(5.1^2 + 40^2) = 100(26.01 + 1600) = 162601$.\nCorrected $\\sum x^2 = 162601 - 50^2 + 40^2 = 162601 - 2500 + 1600 = 161701$.\nCorrected variance:\n$$\\sigma_{\\text{new}}^2 = \\frac{161701}{100} - (39.9)^2 = 1617.01 - 1592.01 = 25.$$\nCorrected standard deviation $\\sigma_{\\text{new}} = \\sqrt{25} = 5.0$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Which of the following is an absolute measure of dispersion?',
    options: [
      'Standard deviation',
      'Coefficient of variation',
      'Coefficient of mean deviation',
      'Coefficient of quartile deviation'
    ],
    correctAnswer: 0,
    explanation: 'Standard deviation is measured in the same physical units as the variable itself, making it an absolute measure of dispersion. The coefficients are all dimensionless relative measures.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If for $9$ observations, $\\sum_{i=1}^9 (x_i - 5) = 9$ and $\\sum_{i=1}^9 (x_i - 5)^2 = 45$, then the standard deviation of the observations is:',
    options: ['2', '3', '$\\sqrt{5}$', '4'],
    correctAnswer: 0,
    explanation: 'Let $u_i = x_i - 5$. Then $\\bar{u} = \\frac{9}{9} = 1$.\nVariance of $u_i$ is:\n$$\\sigma_u^2 = \\frac{1}{9}\\sum u_i^2 - (\\bar{u})^2 = \\frac{45}{9} - 1^2 = 5 - 1 = 4.$$\nSince shifting by $5$ does not change dispersion, $\\sigma_x = \\sigma_u = \\sqrt{4} = 2$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The standard deviation of $20$ observations is $4$. If each observation is multiplied by $2$, the new standard deviation is:',
    options: ['8', '4', '16', '2'],
    correctAnswer: 0,
    explanation: 'Multiplying each observation by $2$ multiplies the standard deviation by $|2| = 2$.\nNew standard deviation $= 2 \\times 4 = 8$.'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The standard deviation of the constant dataset $c, c, \\dots, c$ is $0$.\nReason (R): When all observations are equal, each observation coincides with the mean, so $(x_i - \\bar{x}) = 0$ for all $i$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Zero variability occurs if and only if all values are identical to the mean. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The standard deviation of a dataset is invariant under change of origin.\nReason (R): Adding or subtracting a constant $c$ shifts every observation and the mean by $c$, keeping the deviations $(x_i - \\bar{x})$ unchanged.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: '$(x_i + c) - (\\bar{x} + c) = x_i - \\bar{x}$. Since individual deviations are preserved, variance and standard deviation are unaffected. Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $y = -5x + 3$, then the standard deviation of $y$ is $\\sigma_y = 5\\sigma_x$.\nReason (R): Standard deviation is always non-negative and scales as $\\sigma_y = |a|\\sigma_x$ for any linear relation $y = ax + b$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $\\sigma_y = |-5|\\sigma_x = 5\\sigma_x$, both statements are true and (R) is the correct explanation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The standard deviation of the first $n$ natural numbers strictly increases as $n$ increases.\nReason (R): The standard deviation is given by $\\sigma = \\sqrt{\\frac{n^2 - 1}{12}}$, which is a strictly increasing function of $n$ for $n \\ge 1$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'As $n$ grows, the numbers spread out further across the number line, increasing dispersion. Mathematically, $\\frac{d}{dn}\\sqrt{\\frac{n^2-1}{12}} > 0$. Both (A) and (R) are true and (R) proves (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Standard deviation is measured in the same physical units as the original observations.\nReason (R): Standard deviation is defined as the square root of variance, cancelling the squared units of the squared deviations.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'If $x_i$ is in meters, $(x_i - \\bar{x})^2$ is in $\\text{m}^2$, so variance is in $\\text{m}^2$. Taking the square root gives standard deviation in meters. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If an additional observation equal to the arithmetic mean is appended to a dataset of $n$ observations, the standard deviation decreases.\nReason (R): The total sum of squared deviations remains unchanged while the denominator increases from $n$ to $n+1$, giving $\\sigma_{\\text{new}} = \\sqrt{\\frac{n}{n+1}}\\sigma < \\sigma$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Adding $\\bar{x}$ adds $0$ to the sum of squared deviations while increasing the count of observations, reducing the average squared deviation. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The standard deviation of a dataset can be negative if all observations are negative.\nReason (R): The standard deviation is defined as the positive square root of variance, so $\\sigma \\ge 0$ always.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Standard deviation is always non-negative by definition regardless of whether observations are positive or negative. Hence (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any dataset, the standard deviation is zero if and only if all observations are identical.\nReason (R): The sum of squares $\\sum_{i=1}^n (x_i - \\bar{x})^2 = 0$ if and only if each individual deviation $(x_i - \\bar{x}) = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since squared real numbers are non-negative, their sum is zero if and only if every term vanishes. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The standard deviation of $x+1, x+2, x+3, x+4, x+5$ is $\\sqrt{2}$ for any real number $x$.\nReason (R): For $n = 5$ consecutive integers, $\\sigma = \\sqrt{\\frac{5^2 - 1}{12}} = \\sqrt{\\frac{24}{12}} = \\sqrt{2}$, which is completely independent of the constant shift $x$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The shift $x$ does not affect dispersion. For $5$ consecutive integers, $\\sigma = \\sqrt{2}$. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Standard deviation weights all deviations linearly regardless of their distance from the mean.\nReason (R): Standard deviation squares the deviations, thereby giving disproportionately greater weight to extreme outliers.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Assertion (A) is false because mean deviation weights deviations linearly, whereas standard deviation squares deviations, exaggerating large deviations. Reason (R) is true. Hence (A) is false and (R) is true.'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the standard deviation of the first $n$ natural numbers is $\\sqrt{10}$, find the value of $n$.',
    options: [],
    correctAnswer: 11,
    explanation: '$$\\sigma = \\sqrt{\\frac{n^2 - 1}{12}} = \\sqrt{10} \\implies \\frac{n^2 - 1}{12} = 10 \\implies n^2 - 1 = 120 \\implies n^2 = 121 \\implies n = 11.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If $\\sum_{i=1}^9 (x_i - 5) = 9$ and $\\sum_{i=1}^9 (x_i - 5)^2 = 45$, find the standard deviation of the $9$ observations.',
    options: [],
    correctAnswer: 2,
    explanation: 'Let $u_i = x_i - 5$. Then $\\bar{u} = \\frac{9}{9} = 1$.\n$$\\sigma^2 = \\frac{1}{9}\\sum u_i^2 - (\\bar{u})^2 = \\frac{45}{9} - (1)^2 = 5 - 1 = 4.$$\nStandard deviation $\\sigma = \\sqrt{4} = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'The mean and standard deviation of $100$ observations were calculated as $40$ and $5.1$. Later, it was found that an observation $40$ was wrongly copied as $50$. Find the corrected standard deviation.',
    options: [],
    correctAnswer: 5,
    explanation: 'Correct sum $= 100(40) - 50 + 40 = 3990 \\implies \\bar{x}_{\\text{new}} = 39.9$.\nCorrect $\\sum x^2 = 100(5.1^2 + 40^2) - 50^2 + 40^2 = 162601 - 2500 + 1600 = 161701$.\n$$\\sigma_{\\text{new}}^2 = \\frac{161701}{100} - (39.9)^2 = 1617.01 - 1592.01 = 25 \\implies \\sigma_{\\text{new}} = 5.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The standard deviation of $25$ observations is $4$. If each observation is multiplied by $3$ and then increased by $10$, find the standard deviation of the new observations.',
    options: [],
    correctAnswer: 12,
    explanation: 'New standard deviation $= |3| \\times 4 = 12$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the standard deviation of the dataset: $10, 10, 10, 10, 10$.',
    options: [],
    correctAnswer: 0,
    explanation: 'All values are identical, so there is zero dispersion: $\\sigma = 0$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the variance of a dataset is $144$, find its standard deviation.',
    options: [],
    correctAnswer: 12,
    explanation: '$$\\sigma = \\sqrt{144} = 12.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The standard deviation of the first $7$ odd natural numbers $1, 3, 5, 7, 9, 11, 13$ is given by $\\sqrt{\\frac{n^2 - 1}{3}}$. Find this standard deviation.',
    options: [],
    correctAnswer: 4,
    explanation: '$$\\sigma = \\sqrt{\\frac{7^2 - 1}{3}} = \\sqrt{\\frac{48}{3}} = \\sqrt{16} = 4.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the standard deviation of the numbers: $1, 2, 3, 4, 5$ multiplied by $\\sqrt{2}$.',
    options: [],
    correctAnswer: 2,
    explanation: 'For $1, 2, 3, 4, 5$, standard deviation is $\\sqrt{\\frac{5^2 - 1}{12}} = \\sqrt{\\frac{24}{12}} = \\sqrt{2}$.\nMultiplying by $\\sqrt{2}$: $\\sigma = \\sqrt{2} \\times \\sqrt{2} = 2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The standard deviation of $x_1, x_2, \\dots, x_{10}$ is $6$. Find the standard deviation of the numbers $-\\frac{1}{2}x_1 + 3, -\\frac{1}{2}x_2 + 3, \\dots, -\\frac{1}{2}x_{10} + 3$.',
    options: [],
    correctAnswer: 3,
    explanation: '$$\\sigma_{\\text{new}} = \\left|-\\frac{1}{2}\\right| \\times 6 = \\frac{1}{2} \\times 6 = 3.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the sum of squares of deviations of $10$ observations from their arithmetic mean is $90$, find the standard deviation of the observations.',
    options: [],
    correctAnswer: 3,
    explanation: '$$\\sigma^2 = \\frac{90}{10} = 9 \\implies \\sigma = \\sqrt{9} = 3.$$'
  }
];

module.exports = { subtopic4Questions };
