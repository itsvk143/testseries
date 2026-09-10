// scripts/repaired_genuine_statistics.js
// Surgically repaired & authentic replacements for the 49 genuine questions in Statistics

const repairedGenuineStatistics = {
  // === Subtopic: "Mean, median, mode" (20 questions) ===
  '6a98ea33910bb37b0e558875': {
    question: 'A dataset contains the values: $5, 8, 12, 5, 10, 8, 5$. What is the mode of this dataset?',
    options: ['5', '8', '10', '12'],
    correctAnswer: 0,
    explanation: 'The mode is the observation with the highest frequency.\nIn the dataset, $5$ appears three times, $8$ appears twice, and $10$ and $12$ appear once each.\nThus, the mode is $5$.'
  },
  '6a98ea33910bb37b0e558876': {
    question: 'Consider the dataset: $2, 4, 6, 8, 10$. What is the median of this dataset?',
    options: ['6', '5', '4', '8'],
    correctAnswer: 0,
    explanation: 'The dataset contains $n = 5$ values arranged in ascending order: $2, 4, 6, 8, 10$.\nThe median is the $\\frac{n+1}{2}$-th observation: $\\frac{5+1}{2} = 3^{\\text{rd}}$ observation, which is $6$.'
  },
  '6a98ea33910bb37b0e558877': {
    question: 'Calculate the arithmetic mean of the numbers: $10, 15, 20, 25, 30$.',
    options: ['20', '15', '25', '30'],
    correctAnswer: 0,
    explanation: 'The arithmetic mean is given by:\n$$\\bar{x} = \\frac{10 + 15 + 20 + 25 + 30}{5} = \\frac{100}{5} = 20.$$'
  },
  '6a98ea33910bb37b0e558878': {
    question: 'Which of the following measures of central tendency is most affected by extreme outliers?',
    options: ['Mean', 'Median', 'Mode', 'Geometric Mean'],
    correctAnswer: 0,
    explanation: 'The arithmetic mean incorporates every individual numerical value into its calculation, making it highly sensitive to extreme outliers, unlike the median or mode which depend on position and frequency.'
  },
  '6a98ea33910bb37b0e558879': {
    question: 'A student\'s scores on five tests are: $85, 90, 78, 92, 88$. What is the median score?',
    options: ['88', '85', '90', '86.6'],
    correctAnswer: 0,
    explanation: 'Arranging the $5$ scores in ascending order:\n$$78, 85, 88, 90, 92.$$\nThe middle (third) observation is $88$, so the median score is $88$.'
  },
  '6a98ea33910bb37b0e55887a': {
    question: 'What is the mode of the dataset: $3, 7, 2, 7, 5, 7, 9, 7, 1$?',
    options: ['7', '2', '3', '5'],
    correctAnswer: 0,
    explanation: 'Counting the frequencies:\n- $7$ appears $4$ times\n- $1, 2, 3, 5, 9$ appear $1$ time each\nThe value with the maximum frequency is $7$.'
  },
  '6a98ea33910bb37b0e55887b': {
    question: 'If the mean of a dataset is $50$ and the sum of all observations is $250$, how many observations are in the dataset?',
    options: ['5', '4', '6', '10'],
    correctAnswer: 0,
    explanation: 'Since $\\bar{x} = \\frac{\\sum x_i}{n}$:\n$$50 = \\frac{250}{n} \\implies n = \\frac{250}{50} = 5.$$'
  },
  '6a98ea33910bb37b0e55887c': {
    question: 'Consider the dataset: $1, 1, 2, 3, 5, 8, 13$. What is the median?',
    options: ['3', '1', '5', '8'],
    correctAnswer: 0,
    explanation: 'The data has $n = 7$ observations arranged in ascending order:\n$$1, 1, 2, 3, 5, 8, 13.$$\nThe median is the $4^{\\text{th}}$ observation, which is $3$.'
  },
  '6a98ea33910bb37b0e55887d': {
    question: 'What is the arithmetic mean of the first $6$ natural numbers: $1, 2, 3, 4, 5, 6$?',
    options: ['3.5', '3.0', '4.0', '5.0'],
    correctAnswer: 0,
    explanation: 'The mean of the first $n$ natural numbers is $\\frac{n+1}{2}$.\nFor $n = 6$:\n$$\\bar{x} = \\frac{6 + 1}{2} = 3.5.$$'
  },
  '6a98ea33910bb37b0e55887e': {
    question: 'For a moderately skewed frequency distribution, the mean is $15$ and the median is $16$. Using the empirical relation, what is the mode?',
    options: ['18', '16', '17', '15'],
    correctAnswer: 0,
    explanation: 'Karl Pearson\'s empirical relationship is:\n$$\\text{Mode} = 3\\text{Median} - 2\\text{Mean}.$$\nSubstituting the given values:\n$$\\text{Mode} = 3(16) - 2(15) = 48 - 30 = 18.$$'
  },
  '6a98ea64910bb37b0e5588ae': {
    question: 'The mean of $5$ observations is $5$ and their variance is $9.2$. If three of the observations are $1, 3,$ and $8$, then the remaining two observations are:',
    options: ['4 and 9', '2 and 11', '5 and 8', '3 and 10'],
    correctAnswer: 0,
    explanation: 'Let the remaining two observations be $x$ and $y$.\nSum of observations:\n$$1 + 3 + 8 + x + y = 5 \\times 5 = 25 \\implies x + y = 13.$$\nVariance formula:\n$$\\sigma^2 = \\frac{1}{n}\\sum x_i^2 - (\\bar{x})^2 \\implies 9.2 = \\frac{1^2 + 3^2 + 8^2 + x^2 + y^2}{5} - 25.$$\n$$34.2 = \\frac{74 + x^2 + y^2}{5} \\implies 74 + x^2 + y^2 = 171 \\implies x^2 + y^2 = 97.$$\nUsing $(x+y)^2 = x^2 + y^2 + 2xy$:\n$$13^2 = 97 + 2xy \\implies 169 - 97 = 72 = 2xy \\implies xy = 36.$$\nThe quadratic equation $t^2 - 13t + 36 = 0$ gives roots $t = 4, 9$.\nHence the observations are $4$ and $9$.'
  },
  '6a98ea64910bb37b0e5588af': {
    question: 'If the mean of the first $n$ natural numbers is equal to $\\frac{5n}{9}$, then the value of $n$ is:',
    options: ['9', '10', '11', '12'],
    correctAnswer: 0,
    explanation: 'The mean of the first $n$ natural numbers is $\\frac{n+1}{2}$.\nGiven $\\frac{n+1}{2} = \\frac{5n}{9}$:\n$$9(n + 1) = 10n \\implies 9n + 9 = 10n \\implies n = 9.$$'
  },
  '6a98ea64910bb37b0e5588bc': {
    question: 'The mean of $100$ observations is $50$. If one observation recorded as $50$ is replaced by $150$, what is the new mean of the observations?',
    options: ['51', '50.5', '52', '55'],
    correctAnswer: 0,
    explanation: 'Original sum of observations $= 100 \\times 50 = 5000$.\nNew sum $= 5000 - 50 + 150 = 5100$.\nNew mean $= \\frac{5100}{100} = 51$.'
  },
  '6a98ea64910bb37b0e5588be': {
    question: 'The median of a set of $9$ distinct positive integers is $20$. If each of the largest $4$ integers is increased by $2$, the median of the new set:',
    options: [
      'Remains equal to 20',
      'Increases by 2',
      'Decreases by 2',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    explanation: 'For $9$ distinct numbers arranged in ascending order, the median is the $5^{\\text{th}}$ observation.\nThe largest $4$ integers are the $6^{\\text{th}}, 7^{\\text{th}}, 8^{\\text{th}},$ and $9^{\\text{th}}$ observations.\nIncreasing them preserves their order and does not affect the $5^{\\text{th}}$ observation.\nThus, the median remains $20$.'
  },
  '6a98ea64910bb37b0e5588bf': {
    question: 'The dataset $2, 4, 6, 7, 5, 6, 10, 6, 7, 2p + 1$ has a unique mode of $6$. Which of the following is a possible integer value of $p$?',
    options: ['2', '3', '-1', '4'],
    correctAnswer: 0,
    explanation: 'In the given dataset without the last term:\n- Frequency of $6$ is $3$.\n- Frequency of $7$ is $2$.\nIf $p = 3$, $2p + 1 = 7$, so $7$ would appear $3$ times, making the dataset bimodal ($6$ and $7$).\nIf $p = 2$, $2p + 1 = 5$, then $6$ remains the unique mode with frequency $3$.\nThus, $p = 2$ is valid.'
  },
  '6a98ea64910bb37b0e5588c0': {
    question: 'In a moderately asymmetric distribution, the relationship between Mean, Median, and Mode is given by:',
    options: [
      '$\\text{Mode} = 3\\text{Median} - 2\\text{Mean}$',
      '$\\text{Mode} = 2\\text{Median} - 3\\text{Mean}$',
      '$\\text{Mean} = 3\\text{Median} - 2\\text{Mode}$',
      '$\\text{Median} = 3\\text{Mode} - 2\\text{Mean}$'
    ],
    correctAnswer: 0,
    explanation: 'Karl Pearson\'s empirical formula states:\n$$\\text{Mean} - \\text{Mode} = 3(\\text{Mean} - \\text{Median}) \\implies \\text{Mode} = 3\\text{Median} - 2\\text{Mean}.$$'
  },
  '6a98ea64910bb37b0e5588c1': {
    question: 'If $y_i = 3x_i - 5$ for $i = 1, 2, \\dots, n$, and the mean $\\bar{x} = 12$, then the mean $\\bar{y}$ is equal to:',
    options: ['31', '36', '26', '35'],
    correctAnswer: 0,
    explanation: 'By the linearity of the arithmetic mean:\n$$\\bar{y} = 3\\bar{x} - 5 = 3(12) - 5 = 36 - 5 = 31.$$'
  },
  '6a98ea64910bb37b0e5588c2': {
    question: 'The average marks of boys in a class is $52$ and that of girls is $42$. If the combined average marks of the entire class of $100$ students is $50$, find the number of boys in the class.',
    options: ['80', '60', '70', '75'],
    correctAnswer: 0,
    explanation: 'Let the number of boys be $B$ and girls be $G = 100 - B$.\nUsing the combined mean formula:\n$$50 = \\frac{52B + 42(100 - B)}{100} \\implies 5000 = 52B + 4200 - 42B.$$\n$$10B = 800 \\implies B = 80.$$'
  },
  '6a98ea64910bb37b0e5588c3': {
    question: 'If the mean of $n$ observations $x_1, x_2, \\dots, x_n$ is $\\bar{x}$, then the algebraic sum of deviations $\\sum_{i=1}^n (x_i - \\bar{x})$ is always equal to:',
    options: ['0', '1', '$n\\bar{x}$', '$\\bar{x}$'],
    correctAnswer: 0,
    explanation: 'By the definition of the arithmetic mean:\n$$\\sum_{i=1}^n (x_i - \\bar{x}) = \\sum_{i=1}^n x_i - \\sum_{i=1}^n \\bar{x} = n\\bar{x} - n\\bar{x} = 0.$$'
  },
  '6a98ea64910bb37b0e5588c5': {
    question: 'The median of $8$ observations arranged in ascending order: $11, 12, 14, x - 2, x + 4, x + 9, 32, 38$ is $24$. The value of $x$ is:',
    options: ['23', '24', '22', '25'],
    correctAnswer: 0,
    explanation: 'For $n = 8$, the median is the average of the $4^{\\text{th}}$ and $5^{\\text{th}}$ observations:\n$$\\text{Median} = \\frac{(x - 2) + (x + 4)}{2} = \\frac{2x + 2}{2} = x + 1.$$\nGiven the median is $24$:\n$$x + 1 = 24 \\implies x = 23.$$'
  },

  // === Subtopic: "Variance" (10 questions) ===
  '6a98ea63910bb37b0e55889e': {
    question: 'A dataset has the values: $2, 4, 6, 8, 10$. What is the population variance ($\\sigma^2$)?',
    options: ['8', '4', '5', '10'],
    correctAnswer: 0,
    explanation: 'Mean $\\bar{x} = \\frac{2+4+6+8+10}{5} = 6$.\nSquared deviations from mean: $(2-6)^2 = 16, (4-6)^2 = 4, (6-6)^2 = 0, (8-6)^2 = 4, (10-6)^2 = 16$.\n$$\\sigma^2 = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8.$$'
  },
  '6a98ea63910bb37b0e55889f': {
    question: 'For $10$ observations, the sum of squared deviations from their mean is $150$. What is the population variance ($\\sigma^2$)?',
    options: ['15', '16.67', '150', '135'],
    correctAnswer: 0,
    explanation: 'Population variance is defined as:\n$$\\sigma^2 = \\frac{1}{N}\\sum_{i=1}^N (x_i - \\bar{x})^2 = \\frac{150}{10} = 15.$$'
  },
  '6a98ea63910bb37b0e5588a0': {
    question: 'If all observations in a dataset are identical, what is the value of the variance?',
    options: ['Zero', 'Equal to the mean', 'Undefined', '1'],
    correctAnswer: 0,
    explanation: 'If every $x_i = c$, then $\\bar{x} = c$ and each deviation $(x_i - \\bar{x}) = 0$. Therefore, the variance is identically zero.'
  },
  '6a98ea63910bb37b0e5588a1': {
    question: 'Consider a dataset with a mean of $50$ and a variance of $25$. If each data point is multiplied by $2$, what is the new variance?',
    options: ['100', '25', '50', '200'],
    correctAnswer: 0,
    explanation: 'If each observation is multiplied by a constant $a$, the variance is multiplied by $a^2$.\nHere $a = 2$, so new variance $= 2^2 \\times 25 = 4 \\times 25 = 100$.'
  },
  '6a98ea63910bb37b0e5588a2': {
    question: 'A dataset has values $\\{1, 3, 5, 7\\}$. What is the population variance ($\\sigma^2$)?',
    options: ['5', '2.5', '6.67', '10'],
    correctAnswer: 0,
    explanation: 'Mean $\\bar{x} = \\frac{1+3+5+7}{4} = 4$.\nDeviations: $-3, -1, 1, 3$.\nSquared deviations: $9, 1, 1, 9$.\n$$\\sigma^2 = \\frac{9 + 1 + 1 + 9}{4} = \\frac{20}{4} = 5.$$'
  },
  '6a98ea63910bb37b0e5588a3': {
    question: 'Which of the following statements about variance is FALSE?',
    options: [
      'Variance is measured in the same units as the original data.',
      'Variance is always non-negative.',
      'Variance is independent of change of origin.',
      'Variance is the square of the standard deviation.'
    ],
    correctAnswer: 0,
    explanation: 'Variance is measured in square units of the original data (e.g. $\\text{cm}^2$ instead of $\\text{cm}$), unlike standard deviation which has the same units. Hence statement 1 is false.'
  },
  '6a98ea63910bb37b0e5588a4': {
    question: 'The variance of the first $n$ natural numbers is given by $\\frac{n^2 - 1}{12}$. For $n = 7$, what is the variance?',
    options: ['4', '5', '3.5', '6'],
    correctAnswer: 0,
    explanation: '$$\\sigma^2 = \\frac{7^2 - 1}{12} = \\frac{49 - 1}{12} = \\frac{48}{12} = 4.$$'
  },
  '6a98ea63910bb37b0e5588a5': {
    question: 'Consider two datasets. Dataset A has a variance of $10$ and Dataset B has a variance of $50$. Which dataset has greater dispersion?',
    options: [
      'Dataset B',
      'Dataset A',
      'They have the same spread',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    explanation: 'Variance measures the degree of dispersion or spread around the mean. A higher variance ($50 > 10$) indicates greater dispersion.'
  },
  '6a98ea63910bb37b0e5588a6': {
    question: 'What is the variance of the dataset $\\{5, 5, 5, 5, 5\\}$?',
    options: ['0', '1', '5', '25'],
    correctAnswer: 0,
    explanation: 'Since all observations are constant, there is zero variability, so $\\sigma^2 = 0$.'
  },
  '6a98ea63910bb37b0e5588a7': {
    question: 'If the variance of a dataset is $36$, what is its standard deviation?',
    options: ['6', '3', '18', '72'],
    correctAnswer: 0,
    explanation: 'Standard deviation is the positive square root of the variance:\n$$\\sigma = \\sqrt{36} = 6.$$'
  },

  // === Subtopic: "Coefficient of variation and grouped frequency distributions" (9 questions) ===
  '6a98ea64910bb37b0e5588a8': {
    question: 'The coefficient of variation ($C.V.$) of a dataset with mean $\\bar{x} > 0$ and standard deviation $\\sigma$ is defined by:',
    options: [
      '$\\frac{\\sigma}{\\bar{x}} \\times 100$',
      '$\\frac{\\bar{x}}{\\sigma} \\times 100$',
      '$\\frac{\\sigma^2}{\\bar{x}} \\times 100$',
      '$\\frac{\\sigma}{\\bar{x}^2} \\times 100$'
    ],
    correctAnswer: 0,
    explanation: 'Coefficient of variation is a dimensionless measure of relative dispersion defined as:\n$$C.V. = \\frac{\\sigma}{\\bar{x}} \\times 100.$$'
  },
  '6a98ea64910bb37b0e5588a9': {
    question: 'Two distributions $A$ and $B$ have the same mean of $50$, but their standard deviations are $5$ and $8$ respectively. Which distribution is more consistent?',
    options: [
      'Distribution A',
      'Distribution B',
      'Both are equally consistent',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    explanation: 'Since both have equal means, the distribution with the smaller standard deviation (and thus smaller $C.V.$) has less variability and is more consistent. Here $\\sigma_A = 5 < \\sigma_B = 8$, so Distribution A is more consistent.'
  },
  '6a98ea64910bb37b0e5588aa': {
    question: 'For a distribution, the mean is $25$ and the coefficient of variation is $20\\%$. What is its standard deviation?',
    options: ['5', '4', '6', '10'],
    correctAnswer: 0,
    explanation: '$$C.V. = \\frac{\\sigma}{\\bar{x}} \\times 100 \\implies 20 = \\frac{\\sigma}{25} \\times 100 \\implies \\sigma = \\frac{20 \\times 25}{100} = 5.$$'
  },
  '6a98ea64910bb37b0e5588ab': {
    question: 'If the standard deviation of a dataset is $8$ and its coefficient of variation is $32\\%$, what is its arithmetic mean?',
    options: ['25', '20', '30', '32'],
    correctAnswer: 0,
    explanation: '$$32 = \\frac{8}{\\bar{x}} \\times 100 \\implies \\bar{x} = \\frac{800}{32} = 25.$$'
  },
  '6a98ea64910bb37b0e5588ac': {
    question: 'In a grouped frequency distribution, if all class frequencies are multiplied by a positive constant $k$, the coefficient of variation:',
    options: [
      'Remains unchanged',
      'Is multiplied by $k$',
      'Is multiplied by $k^2$',
      'Is divided by $k$'
    ],
    correctAnswer: 0,
    explanation: 'Multiplying every frequency $f_i$ by $k$ cancels out in both the numerator and denominator of $\\bar{x} = \\frac{\\sum k f_i x_i}{\\sum k f_i}$ and $\\sigma = \\sqrt{\\frac{\\sum k f_i (x_i - \\bar{x})^2}{\\sum k f_i}}$. Hence both $\\bar{x}$ and $\\sigma$ remain unchanged, so $C.V.$ remains unchanged.'
  },
  '6a98ea64910bb37b0e5588ad': {
    question: 'Two factories $X$ and $Y$ produce metal rods. Factory $X$ has mean length $100\\text{ cm}$ with $\\sigma = 4\\text{ cm}$. Factory $Y$ has mean length $120\\text{ cm}$ with $\\sigma = 6\\text{ cm}$. The factory showing greater relative variability is:',
    options: ['Factory Y', 'Factory X', 'Both have equal variability', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: '$$C.V.(X) = \\frac{4}{100} \\times 100 = 4\\%.$$\n$$C.V.(Y) = \\frac{6}{120} \\times 100 = 5\\%.$$\nSince $C.V.(Y) > C.V.(X)$, Factory Y shows greater relative variability.'
  },
  '6a98ea64910bb37b0e5588b0': {
    question: 'In the step-deviation method for grouped data, $u_i = \\frac{x_i - A}{h}$. If $\\sigma_u$ is the standard deviation of $u_i$, then the standard deviation $\\sigma_x$ of the original data is:',
    options: ['$h \\sigma_u$', '$A + h \\sigma_u$', '$h^2 \\sigma_u$', '$\\sigma_u / h$'],
    correctAnswer: 0,
    explanation: 'Since $x_i = A + h u_i$, change of origin $A$ does not affect dispersion, and change of scale multiplies the standard deviation by $h$. Thus $\\sigma_x = h \\sigma_u$.'
  },
  '6a98ea64910bb37b0e5588b1': {
    question: 'If the coefficient of variation of a distribution is $50\\%$ and its variance is $16$, then the mean of the distribution is:',
    options: ['8', '4', '16', '32'],
    correctAnswer: 0,
    explanation: '$\\sigma = \\sqrt{16} = 4$.\n$$C.V. = \\frac{\\sigma}{\\bar{x}} \\times 100 \\implies 50 = \\frac{4}{\\bar{x}} \\times 100 \\implies \\bar{x} = \\frac{400}{50} = 8.$$'
  },
  '6a98ea64910bb37b0e5588c4': {
    question: 'When comparing two series with roughly similar means, the series having a smaller coefficient of variation is said to be:',
    options: [
      'More consistent and more stable',
      'Less consistent and more variable',
      'Positively skewed',
      'Having larger variance'
    ],
    correctAnswer: 0,
    explanation: 'A smaller coefficient of variation implies lower relative dispersion, meaning the data values are more consistent, stable, and uniform.'
  },

  // === Subtopic: "Standard deviation" (9 questions) ===
  '6a98ea64910bb37b0e5588b2': {
    question: 'Find the standard deviation of the numbers: $2, 4, 6, 8, 10$.',
    options: ['$2\\sqrt{2}$', '$4$', '$2$', '$\\sqrt{10}$'],
    correctAnswer: 0,
    explanation: 'Mean $\\bar{x} = 6$.\nVariance $\\sigma^2 = \\frac{(2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2}{5} = \\frac{16 + 4 + 0 + 4 + 16}{5} = 8$.\nStandard deviation $\\sigma = \\sqrt{8} = 2\\sqrt{2}$.'
  },
  '6a98ea64910bb37b0e5588b4': {
    question: 'If the standard deviation of $x_1, x_2, \\dots, x_n$ is $\\sigma$, then the standard deviation of $ax_1 + b, ax_2 + b, \\dots, ax_n + b$ (where $a > 0$) is:',
    options: ['$a\\sigma$', '$a\\sigma + b$', '$a^2\\sigma$', '$\\sigma + b$'],
    correctAnswer: 0,
    explanation: 'Standard deviation is independent of change of origin ($b$) and directly scaled by the absolute value of the change of scale ($a$). Since $a > 0$, the new standard deviation is $a\\sigma$.'
  },
  '6a98ea64910bb37b0e5588b5': {
    question: 'If every observation in a dataset is increased by $10$, how does the standard deviation change?',
    options: [
      'It remains the same',
      'It increases by 10',
      'It decreases by 10',
      'It is multiplied by 10'
    ],
    correctAnswer: 0,
    explanation: 'Adding a constant shifts every data point and the mean by the same amount: $(x_i + 10) - (\\bar{x} + 10) = x_i - \\bar{x}$. Hence deviations are unchanged, so standard deviation remains identical.'
  },
  '6a98ea64910bb37b0e5588b6': {
    question: 'Consider two datasets. Dataset A has a standard deviation of $5$, and Dataset B has a standard deviation of $10$. Which dataset has greater absolute dispersion?',
    options: [
      'Dataset B',
      'Dataset A',
      'They have the same spread',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    explanation: 'Standard deviation is an absolute measure of dispersion. Since $10 > 5$, Dataset B has greater absolute spread.'
  },
  '6a98ea64910bb37b0e5588b7': {
    question: 'What is the standard deviation of the dataset $\\{10, 10, 10, 10, 10\\}$?',
    options: ['0', '1', '10', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'All data points are equal to the mean ($10$), so every deviation is $0$, giving $\\sigma = 0$.'
  },
  '6a98ea64910bb37b0e5588b8': {
    question: 'The standard deviation of the first $11$ natural numbers is:',
    options: ['$\\sqrt{10}$', '$\\sqrt{12}$', '3', '$\\sqrt{11}$'],
    correctAnswer: 0,
    explanation: 'Standard deviation of the first $n$ natural numbers is given by:\n$$\\sigma = \\sqrt{\\frac{n^2 - 1}{12}}.$$\nFor $n = 11$:\n$$\\sigma = \\sqrt{\\frac{11^2 - 1}{12}} = \\sqrt{\\frac{120}{12}} = \\sqrt{10}.$$'
  },
  '6a98ea64910bb37b0e5588b9': {
    question: 'Which formula represents the population standard deviation ($\\sigma$)?',
    options: [
      '$\\sqrt{\\frac{\\sum_{i=1}^{N}(x_i - \\mu)^2}{N}}$',
      '$\\frac{\\sum_{i=1}^{N}(x_i - \\mu)^2}{N}$',
      '$\\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}$',
      '$\\frac{\\sum_{i=1}^{N}|x_i - \\mu|}{N}$'
    ],
    correctAnswer: 0,
    explanation: 'Population standard deviation is the square root of the mean of squared deviations from the population mean $\\mu$, divided by $N$.'
  },
  '6a98ea64910bb37b0e5588ba': {
    question: 'A dataset has a standard deviation of $0$. What can be concluded about the dataset?',
    options: [
      'All observations are identical to each other and to the mean.',
      'The mean of the dataset is 0.',
      'The dataset contains only one observation.',
      'The median of the dataset is 0.'
    ],
    correctAnswer: 0,
    explanation: '$\\sigma = 0 \\iff \\sum (x_i - \\bar{x})^2 = 0 \\iff x_i = \\bar{x}$ for all $i$. Hence all observations are equal.'
  },
  '6a98ea64910bb37b0e5588bb': {
    question: 'What is the relationship between variance ($V$) and standard deviation ($\\sigma$)?',
    options: [
      '$\\sigma = \\sqrt{V}$',
      '$\\sigma = V^2$',
      '$\\sigma = 2V$',
      '$\\sigma = V / 2$'
    ],
    correctAnswer: 0,
    explanation: 'Standard deviation is defined as the positive square root of the variance: $\\sigma = \\sqrt{V}$.'
  },

  // === Subtopic: "Mean deviation about mean and median" (1 question) ===
  '6a98ea64910bb37b0e5588bd': {
    question: 'Find the mean deviation about the median for the dataset: $3, 6, 9, 12, 15$.',
    options: ['3.6', '4.0', '3.2', '4.5'],
    correctAnswer: 0,
    explanation: 'The dataset arranged in ascending order is $3, 6, 9, 12, 15$.\nThe median is the middle observation: $M = 9$.\nAbsolute deviations $|x_i - M|$ are:\n$$|3 - 9| = 6, \\quad |6 - 9| = 3, \\quad |9 - 9| = 0, \\quad |12 - 9| = 3, \\quad |15 - 9| = 6.$$\nSum of deviations $= 6 + 3 + 0 + 3 + 6 = 18$.\nMean deviation about median $= \\frac{18}{5} = 3.6$.'
  }
};

module.exports = { repairedGenuineStatistics };
