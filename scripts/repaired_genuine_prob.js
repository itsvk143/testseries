// scripts/repaired_genuine_prob.js
// 41 Repaired, Sanitized Genuine Questions for Probability (Class 12, Mathematics)
// Vetted for mathematical correctness, KaTeX syntax, and standardized scoring (+4/-1).

const repairedGenuineProb = [
  // [0]
  {
    _id: "6a98ea16910bb37b0e55884f",
    question: "A bag contains 3 red marbles and 2 blue marbles. A marble is drawn, its color noted, and then replaced. A second marble is drawn. What is the probability that the first marble is red and the second marble is blue?",
    options: ["$\\frac{6}{25}$", "$\\frac{3}{5}$", "$\\frac{2}{5}$", "$\\frac{4}{25}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Since the first marble is replaced before drawing the second, the two draws are independent events.\\n$P(\\text{Red}_1) = \\frac{3}{5}$ and $P(\\text{Blue}_2) = \\frac{2}{5}$.\\n$P(\\text{Red}_1 \\cap \\text{Blue}_2) = \\frac{3}{5} \\times \\frac{2}{5} = \\frac{6}{25}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [1]
  {
    _id: "6a98ea5e910bb37b0e558899",
    question: "A bag contains 5 green marbles and 3 red marbles. A marble is drawn at random. If it is green, it is replaced along with two additional green marbles. If it is red, it is replaced along with two additional red marbles. A second marble is then drawn. What is the probability that the second marble drawn is green?",
    options: ["$\\frac{5}{8}$", "$\\frac{7}{10}$", "$\\frac{1}{2}$", "$\\frac{3}{8}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $G_1$ be the event that the first marble is green, and $R_1$ that the first marble is red.\\n$P(G_1) = \\frac{5}{8}$ and $P(R_1) = \\frac{3}{8}$.\\nIf $G_1$ occurs, the bag contains $5 + 2 = 7$ green and 3 red marbles (total 10), so $P(G_2|G_1) = \\frac{7}{10}$.\\nIf $R_1$ occurs, the bag contains 5 green and $3 + 2 = 5$ red marbles (total 10), so $P(G_2|R_1) = \\frac{5}{10}$.\\nBy the law of total probability:\\n$P(G_2) = P(G_1)P(G_2|G_1) + P(R_1)P(G_2|R_1) = \\left(\\frac{5}{8} \\times \\frac{7}{10}\\right) + \\left(\\frac{3}{8} \\times \\frac{5}{10}\\right) = \\frac{35 + 15}{80} = \\frac{50}{80} = \\frac{5}{8}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "medium"
  },
  // [2]
  {
    _id: "6a98ea35910bb37b0e558884",
    question: "A bag contains 5 red balls and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both balls are red?",
    options: ["$\\frac{5}{14}$", "$\\frac{25}{64}$", "$\\frac{21}{64}$", "$\\frac{10}{21}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "The total number of balls is $5 + 3 = 8$.\\nThe probability that the first ball is red is $\\frac{5}{8}$.\\nGiven the first is red, 4 red balls and 7 total balls remain. Thus $P(\\text{second is red} | \\text{first is red}) = \\frac{4}{7}$.\\n$P(\\text{both red}) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [3]
  {
    _id: "6a98ea17910bb37b0e558857",
    question: "A bag contains 5 red balls and 3 blue balls. Two balls are drawn without replacement. What is the probability that the second ball drawn is red, given that the first ball drawn was red?",
    options: ["$\\frac{4}{7}$", "$\\frac{5}{8}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "After drawing one red ball without replacement, the bag has $5 - 1 = 4$ red balls remaining and a total of $8 - 1 = 7$ balls.\\nTherefore, the conditional probability is $\\frac{4}{7}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [4]
  {
    _id: "6a98ea16910bb37b0e558851",
    question: "A fair coin is flipped and a fair six-sided die is rolled. What is the probability of flipping heads and rolling an even number?",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{1}{3}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Flipping a coin and rolling a die are independent events.\\n$P(\\text{Heads}) = \\frac{1}{2}$.\\nEven outcomes on a die are $\\{2, 4, 6\\}$, so $P(\\text{Even}) = \\frac{3}{6} = \\frac{1}{2}$.\\n$P(\\text{Heads and Even}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [5]
  {
    _id: "6a98ea17910bb37b0e55885d",
    question: "A company has two machines, Machine A and Machine B. Machine A produces 60% of the total output, and Machine B produces 40%. 2% of the output from Machine A is defective, and 3% of the output from Machine B is defective. If a randomly selected item is defective, what is the probability that it was produced by Machine A?",
    options: ["$0.5$", "$0.4$", "$0.6$", "$0.35$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $A$ and $B$ denote the events that an item is produced by Machine A and Machine B, respectively.\\n$P(A) = 0.60$, $P(B) = 0.40$, $P(D|A) = 0.02$, $P(D|B) = 0.03$.\\nBy Bayes' theorem:\\n$P(A|D) = \\frac{P(A)P(D|A)}{P(A)P(D|A) + P(B)P(D|B)} = \\frac{0.60 \\times 0.02}{(0.60 \\times 0.02) + (0.40 \\times 0.03)} = \\frac{0.012}{0.012 + 0.012} = \\frac{0.012}{0.024} = 0.5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [6]
  {
    _id: "6a98ea35910bb37b0e558882",
    question: "A continuous random variable $X$ has a probability density function given by $f(x) = 2x$ for $0 \\le x \\le 1$, and $f(x) = 0$ otherwise. What is $P(0.5 \\le X \\le 1)$?",
    options: ["$0.75$", "$0.25$", "$0.50$", "$1.00$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "$P(0.5 \\le X \\le 1) = \\int_{0.5}^{1} f(x) dx = \\int_{0.5}^{1} 2x dx = [x^2]_{0.5}^{1} = 1^2 - (0.5)^2 = 1 - 0.25 = 0.75$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [7]
  {
    _id: "6a98ea35910bb37b0e558887",
    question: "A fair coin is tossed 4 times. What is the probability of getting at least 3 heads?",
    options: ["$\\frac{5}{16}$", "$\\frac{1}{4}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Total outcomes for 4 tosses $= 2^4 = 16$.\\nNumber of ways to get exactly 3 heads $= \\binom{4}{3} = 4$.\\nNumber of ways to get exactly 4 heads $= \\binom{4}{4} = 1$.\\nTotal favorable outcomes $= 4 + 1 = 5$.\\nTherefore, $P(\\text{at least 3 heads}) = \\frac{5}{16}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [8]
  {
    _id: "6a98ea35910bb37b0e558883",
    question: "A fair six-sided die is rolled. What is the probability of rolling a number strictly greater than 4?",
    options: ["$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "The sample space is $S = \\{1, 2, 3, 4, 5, 6\\}$.\\nThe outcomes strictly greater than 4 are $\\{5, 6\\}$, giving 2 favorable outcomes.\\nThus, the probability is $\\frac{2}{6} = \\frac{1}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [9]
  {
    _id: "6a98ea5e910bb37b0e558896",
    question: "A factory has three machines: A, B, and C, producing 50%, 30%, and 20% of the total output, respectively. Machine A produces 2% defective items, Machine B produces 3% defective items, and Machine C produces 4% defective items. If an item is selected at random and found to be defective, what is the probability that it was produced by Machine B?",
    options: ["$\\frac{1}{3}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{2}{5}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Given: $P(A) = 0.50, P(B) = 0.30, P(C) = 0.20$.\\nDefective rates: $P(D|A) = 0.02, P(D|B) = 0.03, P(D|C) = 0.04$.\\nTotal probability of a defective item:\\n$P(D) = (0.50)(0.02) + (0.30)(0.03) + (0.20)(0.04) = 0.010 + 0.009 + 0.008 = 0.027$.\\nBy Bayes' theorem:\\n$P(B|D) = \\frac{P(B)P(D|B)}{P(D)} = \\frac{0.009}{0.027} = \\frac{9}{27} = \\frac{1}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "easy"
  },
  // [10]
  {
    _id: "6a98ea16910bb37b0e558856",
    question: "A factory has two machines, Machine A and Machine B, that operate independently. The probability that Machine A produces a defective part is 0.02, and the probability that Machine B produces a defective part is 0.03. What is the probability that both machines produce a defective part?",
    options: ["$0.0006$", "$0.05$", "$0.01$", "$0.006$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Since the two machines operate independently, the joint probability is the product of their individual probabilities:\\n$P(A \\cap B) = P(A) \\times P(B) = 0.02 \\times 0.03 = 0.0006$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [11]
  {
    _id: "6a98ea5e910bb37b0e55889a",
    question: "A factory produces light bulbs. 5% of bulbs are defective. A testing machine correctly identifies 95% of defective bulbs and correctly identifies 98% of non-defective bulbs. If a bulb is tested and flagged as defective, what is the probability that it is actually defective?",
    options: [
      "$\\frac{0.05 \\times 0.95}{(0.05 \\times 0.95) + (0.95 \\times 0.02)}$",
      "$\\frac{0.95 \\times 0.05}{(0.95 \\times 0.05) + (0.05 \\times 0.98)}$",
      "$\\frac{0.05 \\times 0.02}{(0.05 \\times 0.95) + (0.95 \\times 0.02)}$",
      "$\\frac{0.95 \\times 0.98}{(0.05 \\times 0.95) + (0.95 \\times 0.02)}$"
    ],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $D$ be the event a bulb is defective, and $T$ be the event it tests positive (flagged defective).\\n$P(D) = 0.05$, so $P(D') = 0.95$.\\n$P(T|D) = 0.95$, and $P(T|D') = 1 - 0.98 = 0.02$.\\nBy Bayes' theorem:\\n$P(D|T) = \\frac{P(D)P(T|D)}{P(D)P(T|D) + P(D')P(T|D')} = \\frac{0.05 \\times 0.95}{(0.05 \\times 0.95) + (0.95 \\times 0.02)}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "medium"
  },
  // [12]
  {
    _id: "6a98ea35910bb37b0e55887f",
    question: "A fair coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
    options: ["$\\frac{3}{8}$", "$\\frac{1}{8}$", "$\\frac{1}{2}$", "$\\frac{5}{8}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Total outcomes for 3 tosses $= 2^3 = 8$.\\nOutcomes with exactly 2 heads are $\\{HHT, HTH, THH\\}$, which has 3 outcomes.\\nThus, the probability is $\\frac{3}{8}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [13]
  {
    _id: "6a98ea16910bb37b0e55884e",
    question: "A fair six-sided die is rolled twice. What is the probability of rolling a 3 on the first roll and a 5 on the second roll?",
    options: ["$\\frac{1}{36}$", "$\\frac{1}{6}$", "$\\frac{1}{18}$", "$\\frac{1}{12}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "The two rolls of a fair die are independent events.\\n$P(\\text{3 on first}) = \\frac{1}{6}$ and $P(\\text{5 on second}) = \\frac{1}{6}$.\\n$P(\\text{3 on first and 5 on second}) = \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [14]
  {
    _id: "6a98ea17910bb37b0e55885a",
    question: "A fair six-sided die is rolled twice. What is the probability that the second roll is a 4, given that the first roll was a 6?",
    options: ["$\\frac{1}{6}$", "$\\frac{1}{36}$", "$\\frac{1}{12}$", "$\\frac{2}{6}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Successive rolls of a fair die are independent events.\\nTherefore, the condition that the first roll was 6 does not affect the probability of the second roll.\\n$P(\\text{second roll is 4} | \\text{first roll is 6}) = P(\\text{second roll is 4}) = \\frac{1}{6}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [15]
  {
    _id: "6a98ea35910bb37b0e558880",
    question: "A random variable $X$ follows a binomial distribution with parameters $n = 5$ and $p = 0.4$. What is $P(X = 2)$?",
    options: ["$0.3456$", "$0.2765$", "$0.1872$", "$0.4000$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Using the binomial formula $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$:\\n$P(X = 2) = \\binom{5}{2} (0.4)^2 (0.6)^3 = 10 \\times 0.16 \\times 0.216 = 0.3456$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [16]
  {
    _id: "6a98ea35910bb37b0e558885",
    question: "A random variable $Y$ is uniformly distributed on the interval $[2, 6]$. What is $P(Y \\le 4)$?",
    options: ["$0.5$", "$0.25$", "$0.75$", "$0.1$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "For a uniform distribution on $[a, b]$, $f(y) = \\frac{1}{b - a} = \\frac{1}{6 - 2} = \\frac{1}{4}$.\\n$P(Y \\le 4) = \\int_{2}^{4} \\frac{1}{4} dy = \\frac{4 - 2}{4} = \\frac{2}{4} = 0.5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [17]
  {
    _id: "6a98ea5e910bb37b0e55889d",
    question: "A rare disease affects 1 in 10,000 people. A diagnostic test has a sensitivity of 99% and a specificity of 97%. If a person tests positive, what is the expression for the probability that they actually have the disease?",
    options: [
      "$\\frac{0.99 \\times 0.0001}{(0.99 \\times 0.0001) + (0.03 \\times 0.9999)}$",
      "$\\frac{0.01 \\times 0.99}{(0.01 \\times 0.99) + (0.99 \\times 0.03)}$",
      "$\\frac{0.0001 \\times 0.99}{(0.0001 \\times 0.99) + (0.97 \\times 0.9999)}$",
      "$\\frac{0.99 \\times 0.0001}{(0.99 \\times 0.0001) + (0.03 \\times 0.0001)}$"
    ],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $D$ be the event of having the disease, and $T$ be testing positive.\\n$P(D) = 0.0001$, so $P(D') = 0.9999$.\\n$P(T|D) = 0.99$ (sensitivity) and $P(T|D') = 1 - 0.97 = 0.03$ (false positive rate).\\nBy Bayes' theorem:\\n$P(D|T) = \\frac{P(T|D)P(D)}{P(T|D)P(D) + P(T|D')P(D')} = \\frac{0.99 \\times 0.0001}{(0.99 \\times 0.0001) + (0.03 \\times 0.9999)}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "medium"
  },
  // [18]
  {
    _id: "6a98ea16910bb37b0e558854",
    question: "A spinner with 5 equal sections numbered 1 to 5 is spun twice. What is the probability of spinning a 2 on the first spin and a number greater than 3 on the second spin?",
    options: ["$\\frac{2}{25}$", "$\\frac{1}{5}$", "$\\frac{3}{25}$", "$\\frac{4}{25}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "The two spins are independent events.\\n$P(\\text{spinning 2}) = \\frac{1}{5}$.\\nNumbers greater than 3 are $\\{4, 5\\}$, so $P(\\text{number} > 3) = \\frac{2}{5}$.\\n$P(\\text{both}) = \\frac{1}{5} \\times \\frac{2}{5} = \\frac{2}{25}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [19]
  {
    _id: "6a98ea5e910bb37b0e55889c",
    question: "A survey finds that 80% of people own a smartphone. Of those who own a smartphone, 70% use mobile banking. Of those who do not own a smartphone, 10% use mobile banking. If a person is chosen at random and uses mobile banking, what is the probability that they own a smartphone?",
    options: ["$\\frac{28}{29}$", "$\\frac{14}{15}$", "$\\frac{7}{8}$", "$\\frac{4}{5}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $S$ be the event of owning a smartphone, and $M$ be the event of using mobile banking.\\n$P(S) = 0.80$, so $P(S') = 0.20$.\\n$P(M|S) = 0.70$ and $P(M|S') = 0.10$.\\nBy Bayes' theorem:\\n$P(S|M) = \\frac{P(S)P(M|S)}{P(S)P(M|S) + P(S')P(M|S')} = \\frac{0.80 \\times 0.70}{(0.80 \\times 0.70) + (0.20 \\times 0.10)} = \\frac{0.56}{0.56 + 0.02} = \\frac{0.56}{0.58} = \\frac{28}{29}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "easy"
  },
  // [20]
  {
    _id: "6a98ea17910bb37b0e558860",
    question: "A survey of 100 people found that 60 own a car, and 40 own a bicycle. Of those who own a car, 30 also own a bicycle. What is the probability that a person owns a bicycle given that they own a car?",
    options: ["$0.5$", "$0.3$", "$0.75$", "$0.36$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $C$ be the event of owning a car and $B$ be the event of owning a bicycle.\\n$P(C) = \\frac{60}{100} = 0.6$ and $P(B \\cap C) = \\frac{30}{100} = 0.3$.\\n$P(B|C) = \\frac{P(B \\cap C)}{P(C)} = \\frac{0.3}{0.6} = 0.5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [21]
  {
    _id: "6a98ea5e910bb37b0e558894",
    question: "An urn contains 5 red balls and 3 blue balls. A ball is drawn at random, its color noted, and it is returned to the urn along with two additional balls of the same color. A second ball is then drawn. What is the probability that the second ball drawn is red?",
    options: ["$\\frac{5}{8}$", "$\\frac{1}{2}$", "$\\frac{3}{8}$", "$\\frac{7}{10}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $R_1$ and $B_1$ be the events that the first ball drawn is red and blue, respectively.\\n$P(R_1) = \\frac{5}{8}$ and $P(B_1) = \\frac{3}{8}$.\\nIf red is drawn, 2 red balls are added, so the urn has 7 red and 3 blue balls (total 10). $P(R_2|R_1) = \\frac{7}{10}$.\\nIf blue is drawn, 2 blue balls are added, so the urn has 5 red and 5 blue balls (total 10). $P(R_2|B_1) = \\frac{5}{10}$.\\nBy the law of total probability (Pólya's urn):\\n$P(R_2) = \\left(\\frac{5}{8} \\times \\frac{7}{10}\\right) + \\left(\\frac{3}{8} \\times \\frac{5}{10}\\right) = \\frac{35 + 15}{80} = \\frac{50}{80} = \\frac{5}{8}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "medium"
  },
  // [22]
  {
    _id: "6a98ea35910bb37b0e558888",
    question: "Consider a normal distribution with mean $\\mu = 50$ and standard deviation $\\sigma = 5$. What is the approximate probability that a randomly selected value $X$ lies between 45 and 55, i.e., $P(45 \\le X \\le 55)$?",
    options: ["$0.6827$", "$0.9545$", "$0.9973$", "$0.5000$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "The range $[45, 55]$ corresponds to $[\\mu - \\sigma, \\mu + \\sigma]$.\\nBy the empirical rule for normal distributions, the probability within one standard deviation of the mean is approximately $68.27\\% = 0.6827$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [23]
  {
    _id: "6a98ea5e910bb37b0e558895",
    question: "Consider two independent events $A$ and $B$ with $P(A) = 0.6$ and $P(B) = 0.3$. What is the value of $P(A \\cup B)$?",
    options: ["$0.72$", "$0.90$", "$0.18$", "$0.78$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Since events $A$ and $B$ are independent, $P(A \\cap B) = P(A)P(B) = 0.6 \\times 0.3 = 0.18$.\\nUsing the addition rule for probabilities:\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.3 - 0.18 = 0.72$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "easy"
  },
  // [24]
  {
    _id: "6a98ea16910bb37b0e558850",
    question: "Events $X$ and $Y$ are independent. If $P(X) = 0.3$ and $P(Y) = 0.8$, what is the probability that event $X$ occurs but event $Y$ does not occur, $P(X \\cap Y')$?",
    options: ["$0.06$", "$0.56$", "$0.24$", "$0.70$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "If $X$ and $Y$ are independent, then $X$ and $Y'$ are also independent.\\n$P(Y') = 1 - P(Y) = 1 - 0.8 = 0.2$.\\n$P(X \\cap Y') = P(X) \\times P(Y') = 0.3 \\times 0.2 = 0.06$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [25]
  {
    _id: "6a98ea17910bb37b0e55885b",
    question: "Given two events $A$ and $B$ such that $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\cup B) = 0.7$, what is $P(A|B)$?",
    options: ["$0.5$", "$0.25$", "$0.75$", "$1.0$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "First find $P(A \\cap B)$ using the addition rule:\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\implies 0.7 = 0.5 + 0.4 - P(A \\cap B) \\implies P(A \\cap B) = 0.2$.\\nThen $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.4} = 0.5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [26]
  {
    _id: "6a98ea16910bb37b0e558852",
    question: "Given two independent events $A$ and $B$ with $P(A) = \\frac{1}{3}$ and $P(B) = \\frac{1}{4}$, calculate $P(A \\cup B)$.",
    options: ["$\\frac{1}{2}$", "$\\frac{7}{12}$", "$\\frac{5}{12}$", "$\\frac{1}{12}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "For independent events, $P(A \\cap B) = P(A)P(B) = \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$.\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{12} = \\frac{4 + 3 - 1}{12} = \\frac{6}{12} = \\frac{1}{2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [27]
  {
    _id: "6a98ea16910bb37b0e558855",
    question: "If events $M$ and $N$ are independent, $P(M) = 0.7$, and $P(M \\cap N) = 0.35$, what is the value of $P(N)$?",
    options: ["$0.5$", "$0.35$", "$0.7$", "$0.245$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Since events $M$ and $N$ are independent, $P(M \\cap N) = P(M) \\times P(N)$.\\n$0.35 = 0.7 \\times P(N) \\implies P(N) = \\frac{0.35}{0.7} = 0.5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [28]
  {
    _id: "6a98ea35910bb37b0e558886",
    question: "In a Bernoulli trial, the probability of success is $0.7$. What is the probability of failure?",
    options: ["$0.3$", "$0.7$", "$1.0$", "$0.0$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "In a Bernoulli trial, there are only two mutually exclusive and exhaustive outcomes: success and failure.\\nTherefore, $P(\\text{failure}) = 1 - P(\\text{success}) = 1 - 0.7 = 0.3$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [29]
  {
    _id: "6a98ea17910bb37b0e558858",
    question: "In a class of 30 students, 15 students play soccer, 10 students play basketball, and 5 students play both. If a student is chosen at random and is found to play soccer, what is the probability that they also play basketball?",
    options: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $S$ be the event that a student plays soccer and $B$ that a student plays basketball.\\n$P(S) = \\frac{15}{30}$ and $P(S \\cap B) = \\frac{5}{30}$.\\n$P(B|S) = \\frac{P(S \\cap B)}{P(S)} = \\frac{5/30}{15/30} = \\frac{5}{15} = \\frac{1}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [30]
  {
    _id: "6a98ea5e910bb37b0e558897",
    question: "In a class, 60% of students are boys and 40% are girls. 30% of boys and 20% of girls wear glasses. If a student is chosen at random and is found to wear glasses, what is the probability that the student is a boy?",
    options: ["$\\frac{9}{13}$", "$\\frac{4}{13}$", "$\\frac{3}{5}$", "$\\frac{1}{2}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $B$ be a boy, $G$ be a girl, and $W$ denote wearing glasses.\\n$P(B) = 0.60, P(G) = 0.40, P(W|B) = 0.30, P(W|G) = 0.20$.\\nBy Bayes' theorem:\\n$P(B|W) = \\frac{P(B)P(W|B)}{P(B)P(W|B) + P(G)P(W|G)} = \\frac{0.60 \\times 0.30}{(0.60 \\times 0.30) + (0.40 \\times 0.20)} = \\frac{0.18}{0.18 + 0.08} = \\frac{0.18}{0.26} = \\frac{9}{13}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "easy"
  },
  // [31]
  {
    _id: "6a98ea16910bb37b0e558853",
    question: "In a class, 60% of students have a laptop and 40% have a tablet. If the decision to own a laptop is independent of the decision to own a tablet, what is the probability that a randomly selected student has both?",
    options: ["$0.24$", "$0.60$", "$0.40$", "$1.00$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $L$ and $T$ denote owning a laptop and tablet, respectively.\\nSince the events are independent:\\n$P(L \\cap T) = P(L) \\times P(T) = 0.60 \\times 0.40 = 0.24$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [32]
  {
    _id: "6a98ea17910bb37b0e55885c",
    question: "In a medical study, 80% of patients have condition $C$, and 60% of patients are male ($M$). Among patients with condition $C$, 70% are male. What is the probability that a randomly selected patient is male, given that they have condition $C$?",
    options: ["$0.70$", "$0.56$", "$0.80$", "$0.875$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "The problem statement explicitly states that 'among patients with condition $C$, 70% are male'.\\nThis is directly the conditional probability $P(M|C) = 0.70$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [33]
  {
    _id: "6a98ea17910bb37b0e55885f",
    question: "Let $A$ and $B$ be two events such that $P(A) = 0.3$, $P(B) = 0.5$, and $P(A \\cap B) = 0.1$. What is the value of $P(B|A)$?",
    options: ["$\\frac{1}{3}$", "$0.2$", "$0.1$", "$0.5$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Using the definition of conditional probability:\\n$P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.1}{0.3} = \\frac{1}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [34]
  {
    _id: "6a98ea5e910bb37b0e558893",
    question: "A medical diagnostic test for a disease has a 95% sensitivity (detects the disease when present) and 90% specificity (identifies healthy individuals). If 2% of the population has the disease, what is the probability that a person testing positive actually has the disease?",
    options: ["$\\frac{19}{117}$", "$\\frac{19}{100}$", "$\\frac{1}{5}$", "$\\frac{19}{98}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $D$ be the event of having the disease and $T$ be testing positive.\\n$P(D) = 0.02$, so $P(D') = 0.98$.\\n$P(T|D) = 0.95$, and $P(T|D') = 1 - 0.90 = 0.10$.\\nBy Bayes' theorem:\\n$P(D|T) = \\frac{P(D)P(T|D)}{P(D)P(T|D) + P(D')P(T|D')} = \\frac{0.02 \\times 0.95}{(0.02 \\times 0.95) + (0.98 \\times 0.10)} = \\frac{0.019}{0.019 + 0.098} = \\frac{0.019}{0.117} = \\frac{19}{117} \\approx 0.1624$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "medium"
  },
  // [35]
  {
    _id: "6a98ea5e910bb37b0e55889b",
    question: "Suppose Bag 1 contains 4 red and 6 blue balls, and Bag 2 contains 7 red and 3 blue balls. A bag is chosen at random with equal probability, and a ball is drawn from it. If the ball drawn is blue, what is the probability that it came from Bag 1?",
    options: ["$\\frac{2}{3}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{5}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $B_1$ and $B_2$ denote choosing Bag 1 and Bag 2, respectively. $P(B_1) = P(B_2) = \\frac{1}{2}$.\\nLet $\\text{Blue}$ be the event of drawing a blue ball.\\n$P(\\text{Blue}|B_1) = \\frac{6}{10}$ and $P(\\text{Blue}|B_2) = \\frac{3}{10}$.\\nBy Bayes' theorem:\\n$P(B_1|\\text{Blue}) = \\frac{P(B_1)P(\\text{Blue}|B_1)}{P(B_1)P(\\text{Blue}|B_1) + P(B_2)P(\\text{Blue}|B_2)} = \\frac{\\frac{1}{2} \\times \\frac{6}{10}}{\\frac{1}{2} \\times \\frac{6}{10} + \\frac{1}{2} \\times \\frac{3}{10}} = \\frac{6/20}{9/20} = \\frac{6}{9} = \\frac{2}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "easy"
  },
  // [36]
  {
    _id: "6a98ea35910bb37b0e558881",
    question: "The number of customers arriving at a store per hour follows a Poisson distribution with mean $\\lambda = 2$. What is the probability that exactly 2 customers arrive in an hour?",
    options: ["$2e^{-2}$", "$e^{-2}$", "$4e^{-2}$", "$\\frac{1}{2}e^{-2}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "For a Poisson distribution, $P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$.\\nHere $\\lambda = 2$ and $k = 2$:\\n$P(X = 2) = \\frac{e^{-2} \\times 2^2}{2!} = \\frac{4e^{-2}}{2} = 2e^{-2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Probability distribution",
    difficulty: "easy"
  },
  // [37]
  {
    _id: "6a98ea17910bb37b0e558859",
    question: "The probability of event $A$ occurring is $P(A) = 0.6$, and the probability of event $B$ occurring is $P(B) = 0.7$. If $P(A \\cap B) = 0.4$, what is the conditional probability $P(A|B)$?",
    options: ["$\\frac{4}{7}$", "$\\frac{3}{7}$", "$\\frac{2}{5}$", "$\\frac{1}{2}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Using the definition of conditional probability:\\n$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.4}{0.7} = \\frac{4}{7}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [38]
  {
    _id: "6a98ea17910bb37b0e55885e",
    question: "Two cards are drawn from a standard deck of 52 cards without replacement. What is the probability that the second card drawn is a King, given that the first card drawn was a King?",
    options: ["$\\frac{3}{51}$", "$\\frac{4}{52}$", "$\\frac{4}{51}$", "$\\frac{3}{52}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "A standard deck has 4 Kings among 52 cards.\\nIf the first card drawn is a King, there are $4 - 1 = 3$ Kings left among $52 - 1 = 51$ remaining cards.\\nTherefore, $P(\\text{second King} | \\text{first King}) = \\frac{3}{51} = \\frac{1}{17}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Conditional probability",
    difficulty: "easy"
  },
  // [39]
  {
    _id: "6a98ea16910bb37b0e55884d",
    question: "Two events, $A$ and $B$, are independent. If $P(A) = 0.4$ and $P(B) = 0.5$, what is the probability that both events occur, $P(A \\cap B)$?",
    options: ["$0.2$", "$0.9$", "$0.1$", "$0.7$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "For independent events, the probability of both occurring is the product of their individual probabilities:\\n$P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Independent events",
    difficulty: "easy"
  },
  // [40]
  {
    _id: "6a98ea5e910bb37b0e558898",
    question: "Urn 1 contains 3 red and 7 blue balls. Urn 2 contains 6 red and 4 blue balls. An urn is selected at random with equal probability, and a ball is drawn. If the ball drawn is red, what is the probability that it came from Urn 1?",
    options: ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{10}$"],
    correctAnswer: 0,
    correctOption: 0,
    explanation: "Let $U_1$ and $U_2$ denote selecting Urn 1 and Urn 2. $P(U_1) = P(U_2) = \\frac{1}{2}$.\\nLet $R$ be the event of drawing a red ball.\\n$P(R|U_1) = \\frac{3}{10}$ and $P(R|U_2) = \\frac{6}{10}$.\\nBy Bayes' theorem:\\n$P(U_1|R) = \\frac{P(U_1)P(R|U_1)}{P(U_1)P(R|U_1) + P(U_2)P(R|U_2)} = \\frac{\\frac{1}{2} \\times \\frac{3}{10}}{\\frac{1}{2} \\times \\frac{3}{10} + \\frac{1}{2} \\times \\frac{6}{10}} = \\frac{3/20}{9/20} = \\frac{3}{9} = \\frac{1}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Bayes' theorem",
    difficulty: "easy"
  }
];

module.exports = { repairedGenuineProb };
