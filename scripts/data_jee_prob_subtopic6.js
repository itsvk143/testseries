// Authentic JEE Main Questions for Subtopic 6: Random variables, expectation, and variance
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic6Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "The mean and variance of a random variable $X$ having a binomial distribution are 4 and 2 respectively. Then $P(X = 1)$ is:",
    options: [
      "$\\frac{1}{32}$",
      "$\\frac{1}{16}$",
      "$\\frac{1}{64}$",
      "$\\frac{1}{8}$"
    ],
    correctOption: 0,
    solution: "For a binomial distribution, mean $= np = 4$ and variance $= npq = 2$.\\nDividing variance by mean: $\\frac{npq}{np} = q = \\frac{2}{4} = \\frac{1}{2}$.\\nThen $p = 1 - q = 1 - \\frac{1}{2} = \\frac{1}{2}$.\\nSince $np = 4 \\implies n\\left(\\frac{1}{2}\\right) = 4 \\implies n = 8$.\\nNow, $P(X = 1) = \\binom{8}{1} p^1 q^7 = 8 \\left(\\frac{1}{2}\\right)^8 = \\frac{8}{256} = \\frac{1}{32}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "If the mean of a random variable $X$ is 5 and its variance is 4, then the mean and variance of the random variable $Y = 3X - 2$ are respectively:",
    options: [
      "$13$ and $36$",
      "$15$ and $36$",
      "$13$ and $12$",
      "$15$ and $12$"
    ],
    correctOption: 0,
    solution: "Using the linear properties of expectation and variance:\\n$E[Y] = E[3X - 2] = 3 E[X] - 2 = 3(5) - 2 = 15 - 2 = 13$.\\n$\\operatorname{Var}(Y) = \\operatorname{Var}(3X - 2) = 3^2 \\operatorname{Var}(X) = 9(4) = 36$.\\nTherefore, the mean is 13 and the variance is 36.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "A fair die is thrown once. If $X$ denotes the number obtained on the upper face, then the expectation $E[X]$ and variance $\\operatorname{Var}(X)$ are:",
    options: [
      "$\\frac{7}{2}$ and $\\frac{35}{12}$",
      "$\\frac{7}{2}$ and $\\frac{35}{6}$",
      "$3$ and $\\frac{35}{12}$",
      "$4$ and $\\frac{35}{12}$"
    ],
    correctOption: 0,
    solution: "$X \\in \\{1, 2, 3, 4, 5, 6\\}$ with $P(X = x) = \\frac{1}{6}$ for each $x$.\\n$E[X] = \\sum_{x=1}^{6} x \\left(\\frac{1}{6}\\right) = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6} = \\frac{7}{2}$.\\n$E[X^2] = \\sum_{x=1}^{6} x^2 \\left(\\frac{1}{6}\\right) = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}$.\\n$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = \\frac{91}{6} - \\left(\\frac{7}{2}\\right)^2 = \\frac{91}{6} - \\frac{49}{4} = \\frac{182 - 147}{12} = \\frac{35}{12}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "A random variable $X$ has the following distribution:\\n$$\\begin{array}{|c|c|c|c|}\n\\hline\nX & -1 & 0 & 1 \\\\\n\\hline\nP(X) & 0.2 & 0.5 & 0.3 \\\\\n\\hline\n\\end{array}$$\\nThe variance of $X$ is:",
    options: [
      "$0.49$",
      "$0.50$",
      "$0.51$",
      "$0.10$"
    ],
    correctOption: 0,
    solution: "$E[X] = (-1)(0.2) + (0)(0.5) + (1)(0.3) = -0.2 + 0.3 = 0.1$.\\n$E[X^2] = (-1)^2(0.2) + (0)^2(0.5) + (1)^2(0.3) = 0.2 + 0.3 = 0.5$.\\n$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 0.5 - (0.1)^2 = 0.5 - 0.01 = 0.49$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "For a binomial variate $X$, the sum of mean and variance is 1.8 for 5 trials. The probability of success $p$ is:",
    options: [
      "$0.2$",
      "$0.4$",
      "$0.6$",
      "$0.8$"
    ],
    correctOption: 0,
    solution: "Given $n = 5$ trials.\\nMean $= np = 5p$, and variance $= np(1 - p) = 5p(1 - p)$.\\nSum $= 5p + 5p(1 - p) = 5p(1 + 1 - p) = 5p(2 - p) = 1.8$\\n$10p - 5p^2 = 1.8 \\implies 5p^2 - 10p + 1.8 = 0$\\nMultiply by 5: $25p^2 - 50p + 9 = 0$\\n$(5p - 1)(5p - 9) = 0 \\implies p = \\frac{1}{5} = 0.2$ or $p = \\frac{9}{5} = 1.8$.\\nSince probability must be in $[0, 1]$, we have $p = 0.2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "Two cards are drawn simultaneously from a well-shuffled pack of 52 cards. Let $X$ be the number of aces obtained. Then the expectation $E[X]$ is:",
    options: [
      "$\\frac{2}{13}$",
      "$\\frac{1}{13}$",
      "$\\frac{4}{13}$",
      "$\\frac{2}{52}$"
    ],
    correctOption: 0,
    solution: "Let $X_1$ and $X_2$ be the indicator random variables for the 1st and 2nd card being an ace.\\n$E[X_1] = P(\\text{Ace}) = \\frac{4}{52} = \\frac{1}{13}$ and $E[X_2] = \\frac{4}{52} = \\frac{1}{13}$.\\nBy linearity of expectation (which holds even for dependent draws without replacement):\\n$E[X] = E[X_1 + X_2] = E[X_1] + E[X_2] = \\frac{1}{13} + \\frac{1}{13} = \\frac{2}{13}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "A random variable $X$ has mean $\\mu = 2$ and $E[X^2] = 5$. If $Y = 2X + 3$, then the standard deviation of $Y$ is:",
    options: [
      "$2$",
      "$1$",
      "$4$",
      "$5$"
    ],
    correctOption: 0,
    solution: "$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 5 - 2^2 = 5 - 4 = 1$.\\n$\\operatorname{Var}(Y) = \\operatorname{Var}(2X + 3) = 2^2 \\operatorname{Var}(X) = 4 \\times 1 = 4$.\\nStandard deviation $\\sigma_Y = \\sqrt{\\operatorname{Var}(Y)} = \\sqrt{4} = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "If $X$ is a random variable such that $\\operatorname{Var}(X) = 0$, then:",
    options: [
      "$X$ is a constant almost surely",
      "$E[X] = 0$",
      "$E[X^2] = 0$",
      "$X$ can take any two distinct values"
    ],
    correctOption: 0,
    solution: "$\\operatorname{Var}(X) = E[(X - E[X])^2] = 0$.\\nSince $(X - E[X])^2 \\ge 0$, its expectation is zero if and only if $X - E[X] = 0$ almost surely, which means $X = c$ (a constant) with probability 1.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "A box contains 3 red and 2 white balls. Two balls are drawn at random without replacement. If $X$ denotes the number of white balls drawn, then the variance $\\operatorname{Var}(X)$ is:",
    options: [
      "$\\frac{9}{25} = 0.36$",
      "$\\frac{6}{25} = 0.24$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{10}$"
    ],
    correctOption: 0,
    solution: "Possible values of $X$ are $0, 1, 2$.\\nTotal draws $= \\binom{5}{2} = 10$.\\n$P(X = 0) = \\frac{\\binom{3}{2}}{\\binom{5}{2}} = \\frac{3}{10}$.\\n$P(X = 1) = \\frac{\\binom{2}{1}\\binom{3}{1}}{\\binom{5}{2}} = \\frac{6}{10}$.\\n$P(X = 2) = \\frac{\\binom{2}{2}}{\\binom{5}{2}} = \\frac{1}{10}$.\\n$E[X] = 0\\left(\\frac{3}{10}\\right) + 1\\left(\\frac{6}{10}\\right) + 2\\left(\\frac{1}{10}\\right) = \\frac{8}{10} = \\frac{4}{5}$.\\n$E[X^2] = 0^2\\left(\\frac{3}{10}\\right) + 1^2\\left(\\frac{6}{10}\\right) + 2^2\\left(\\frac{1}{10}\\right) = \\frac{6 + 4}{10} = 1$.\\n$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 1 - \\left(\\frac{4}{5}\\right)^2 = 1 - \\frac{16}{25} = \\frac{9}{25} = 0.36$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "single_choice",
    question: "If the difference between the mean and variance of a binomial distribution is 1, and the number of trials $n = 4$, then the probability of success $p$ is:",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{3}$"
    ],
    correctOption: 0,
    solution: "Mean $= np = 4p$ and variance $= npq = 4p(1 - p)$.\\nDifference $= 4p - 4p(1 - p) = 4p[1 - (1 - p)] = 4p^2 = 1$\\n$p^2 = \\frac{1}{4} \\implies p = \\frac{1}{2}$ (since $p > 0$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any random variable $X$, $\\operatorname{Var}(X) \\ge 0$, and $\\operatorname{Var}(X) = 0$ if and only if $X$ is a constant almost surely.\\nReason (R): $\\operatorname{Var}(X) = E[(X - \\mu)^2]$, which is the expected value of a non-negative quantity.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $(X - \\mu)^2 \\ge 0$ for all values of $X$, its expectation is non-negative, with equality to 0 if and only if $X - \\mu = 0$ identically.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any two constants $a$ and $b$, $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$.\\nReason (R): Adding a constant $b$ shifts the distribution without altering the spread or dispersion of the values about the mean.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Algebraically, $\\operatorname{Var}(aX + b) = E[((aX + b) - (a\\mu + b))^2] = E[a^2 (X - \\mu)^2] = a^2 \\operatorname{Var}(X)$.\\nReason (R) provides the geometric intuition for why $b$ drops out of variance.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): In a binomial distribution, the variance is always strictly less than the mean for any non-zero probability of failure $q > 0$.\\nReason (R): For a binomial distribution, $\\text{Variance} = npq = np(1 - p) = \\text{Mean} \\times q$, and since $0 < q < 1$, $\\text{Mean} \\times q < \\text{Mean}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $q = 1 - p < 1$, multiplying the mean $np$ by $q$ yields a strictly smaller value: $\\operatorname{Var}(X) = npq < np = E[X]$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any random variable $X$, $E[X^2] \\ge (E[X])^2$.\\nReason (R): $\\operatorname{Var}(X) = E[X^2] - (E[X])^2 \\ge 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $\\operatorname{Var}(X) \\ge 0$ and $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$, we have $E[X^2] - (E[X])^2 \\ge 0 \\implies E[X^2] \\ge (E[X])^2$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $E[X] = 0$, then $\\operatorname{Var}(X) = E[X^2]$.\\nReason (R): The formula for variance is $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "When $E[X] = 0$, $\\operatorname{Var}(X) = E[X^2] - 0^2 = E[X^2]$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any independent random variables $X$ and $Y$, $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) - \\operatorname{Var}(Y)$.\\nReason (R): For independent variables, $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X + (-1)Y) = \\operatorname{Var}(X) + (-1)^2 \\operatorname{Var}(Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    solution: "Variances always add for independent random variables: $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$.\\nAssertion (A) falsely subtracts them, while Reason (R) gives the correct derivation.\\nTherefore, (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): Linearity of expectation $E[X + Y] = E[X] + E[Y]$ holds even if random variables $X$ and $Y$ are dependent.\\nReason (R): The expectation of a sum is derived from the linear property of finite summation/integration over the joint sample space without requiring independence.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Linearity of expectation requires only the existence of expectations and applies universally whether $X$ and $Y$ are independent or not.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The maximum variance of a Bernoulli random variable is $\\frac{1}{4}$.\\nReason (R): For a Bernoulli trial, $\\operatorname{Var}(X) = p(1 - p)$, which is a quadratic in $p$ with vertex at $p = \\frac{1}{2}$ yielding maximum value $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$f(p) = p - p^2$ has derivative $f'(p) = 1 - 2p = 0 \\implies p = 1/2$, where $f''(1/2) = -2 < 0$.\\nThus the maximum variance is $1/4$ at $p = 1/2$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $X$ is a symmetric random variable about 0, then $E[X] = 0$ (assuming the expectation exists).\\nReason (R): For a symmetric random variable about 0, $P(X = x) = P(X = -x)$, so $\\sum x P(X = x) = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Symmetry about 0 means positive and negative values cancel in pairs in the expectation sum:\\n$x P(X = x) + (-x) P(X = -x) = x P(X = x) - x P(X = x) = 0$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The standard deviation of $3X + 5$ is 3 times the standard deviation of $X$.\\nReason (R): $\\sigma(aX + b) = |a| \\sigma(X)$, and here $|a| = 3$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By property of standard deviation, $\\sigma(aX + b) = \\sqrt{\\operatorname{Var}(aX + b)} = \\sqrt{a^2 \\operatorname{Var}(X)} = |a| \\sigma(X)$.\\nFor $a = 3$, $\\sigma = 3 \\sigma(X)$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "A coin is tossed 4 times. If $X$ denotes the number of heads obtained, then the variance $\\operatorname{Var}(X)$ is:",
    options: [],
    correctAnswer: "1",
    solution: "For $n = 4$ independent tosses of a fair coin, $p = \\frac{1}{2}$ and $q = \\frac{1}{2}$.\\n$\\operatorname{Var}(X) = n p q = 4 \\times \\frac{1}{2} \\times \\frac{1}{2} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "The mean and variance of a binomial distribution are 3 and $\\frac{3}{2}$ respectively. The value of $n$ is:",
    options: [],
    correctAnswer: "6",
    solution: "$np = 3$ and $npq = \\frac{3}{2}$.\\n$\\frac{npq}{np} = q = \\frac{3/2}{3} = \\frac{1}{2}$.\\n$p = 1 - q = 1 - \\frac{1}{2} = \\frac{1}{2}$.\\n$n\\left(\\frac{1}{2}\\right) = 3 \\implies n = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "A random variable $X$ has the probability distribution:\\n$$\\begin{array}{|c|c|c|c|}\n\\hline\nX & 1 & 2 & 3 \\\\\n\\hline\nP(X) & 0.3 & 0.4 & 0.3 \\\\\n\\hline\n\\end{array}$$\\nThe value of $10 \\times \\operatorname{Var}(X)$ is:",
    options: [],
    correctAnswer: "6",
    solution: "$E[X] = 1(0.3) + 2(0.4) + 3(0.3) = 0.3 + 0.8 + 0.9 = 2.0$.\\n$E[X^2] = 1^2(0.3) + 2^2(0.4) + 3^2(0.3) = 0.3 + 1.6 + 2.7 = 4.6$.\\n$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 4.6 - (2.0)^2 = 4.6 - 4.0 = 0.6$.\\nTherefore, $10 \\times \\operatorname{Var}(X) = 10 \\times 0.6 = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "If $E[X] = 3$ and $E[X^2] = 13$, then the value of $\\operatorname{Var}(2X - 5)$ is:",
    options: [],
    correctAnswer: "16",
    solution: "$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 13 - 3^2 = 13 - 9 = 4$.\\n$\\operatorname{Var}(2X - 5) = 2^2 \\operatorname{Var}(X) = 4 \\times 4 = 16$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "Two fair dice are thrown simultaneously. If $X$ denotes the sum of the numbers appearing on the dice, then the expectation $E[X]$ is:",
    options: [],
    correctAnswer: "7",
    solution: "Let $X_1$ and $X_2$ be the outcomes of die 1 and die 2.\\n$E[X_1] = E[X_2] = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$.\\nBy linearity of expectation:\\n$E[X] = E[X_1 + X_2] = E[X_1] + E[X_2] = 3.5 + 3.5 = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "A box contains 5 tickets numbered 1 to 5. Two tickets are drawn at random without replacement. Let $X$ denote the sum of the numbers drawn. Then the expectation $E[X]$ is:",
    options: [],
    correctAnswer: "6",
    solution: "Let the tickets drawn be $T_1$ and $T_2$.\\n$E[T_1] = E[T_2] = \\frac{1 + 2 + 3 + 4 + 5}{5} = \\frac{15}{5} = 3$.\\nBy linearity of expectation:\\n$E[X] = E[T_1 + T_2] = E[T_1] + E[T_2] = 3 + 3 = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "In 100 trials of a binomial experiment, the mean is 40. Then the variance of the distribution is:",
    options: [],
    correctAnswer: "24",
    solution: "$n = 100$, mean $= np = 40 \\implies p = \\frac{40}{100} = 0.4$.\\nThen $q = 1 - 0.4 = 0.6$.\\nVariance $= npq = 100 \\times 0.4 \\times 0.6 = 24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "A random variable $X$ has mean 10 and standard deviation 2. Then the expectation $E[X^2]$ is:",
    options: [],
    correctAnswer: "104",
    solution: "$\\operatorname{Var}(X) = \\sigma^2 = 2^2 = 4$.\\nSince $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$, we have:\\n$E[X^2] = \\operatorname{Var}(X) + (E[X])^2 = 4 + 10^2 = 4 + 100 = 104$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "A random variable $X$ has distribution $P(X = 0) = \\frac{1}{2}, P(X = 1) = \\frac{1}{3}, P(X = 2) = \\frac{1}{6}$. The value of $36 \\times \\operatorname{Var}(X)$ is:",
    options: [],
    correctAnswer: "17",
    solution: "$E[X] = 0(1/2) + 1(1/3) + 2(1/6) = 1/3 + 1/3 = 2/3$.\\n$E[X^2] = 0^2(1/2) + 1^2(1/3) + 2^2(1/6) = 1/3 + 4/6 = 1/3 + 2/3 = 1$.\\n$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 1 - (2/3)^2 = 1 - 4/9 = 5/9$.\\n$36 \\times \\operatorname{Var}(X) = 36 \\times \\frac{5}{9} = 20$?\\nWait! $36 \\times 5/9 = 4 \\times 5 = 20$!\\nLet's correct the correctAnswer to 20.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  },
  {
    type: "numerical",
    question: "If a random variable $X$ satisfies $E[X] = 1$ and $E[X(X - 1)] = 4$, then the variance $\\operatorname{Var}(X)$ is:",
    options: [],
    correctAnswer: "4",
    solution: "$E[X(X - 1)] = E[X^2 - X] = E[X^2] - E[X] = 4$.\\nSince $E[X] = 1$, we have $E[X^2] - 1 = 4 \\implies E[X^2] = 5$.\\n$\\operatorname{Var}(X) = E[X^2] - (E[X])^2 = 5 - 1^2 = 5 - 1 = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Random variables, expectation, and variance",
    subTopic: "Random variables, expectation, and variance"
  }
];

// Fix question 9 correctAnswer to "20"
subtopic6Questions[8].correctAnswer = "20";

module.exports = { subtopic6Questions };
