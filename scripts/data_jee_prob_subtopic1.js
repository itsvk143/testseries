// Authentic JEE Main Questions for Subtopic 1: Bayes' theorem
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "A man is known to speak the truth 3 out of 4 times. He throws a die and reports that it is a six. The probability that it is actually a six is:",
    options: [
      "$\\frac{3}{8}$",
      "$\\frac{1}{8}$",
      "$\\frac{5}{8}$",
      "$\\frac{3}{4}$"
    ],
    correctOption: 0,
    solution: "Let $E$ be the event that the man reports a six, and let $S_1$ be the event that a six actually occurs, $S_2$ that a six does not occur.\\n$P(S_1) = \\frac{1}{6}$, $P(S_2) = \\frac{5}{6}$.\\nProbability of reporting six when it is actually six: $P(E|S_1) = \\frac{3}{4}$ (speaks truth).\\nProbability of reporting six when it is not a six: $P(E|S_2) = 1 - \\frac{3}{4} = \\frac{1}{4}$ (lies).\\nBy Bayes' theorem:\\n$P(S_1|E) = \\frac{P(S_1)P(E|S_1)}{P(S_1)P(E|S_1) + P(S_2)P(E|S_2)} = \\frac{\\frac{1}{6} \\times \\frac{3}{4}}{\\left(\\frac{1}{6} \\times \\frac{3}{4}\\right) + \\left(\\frac{5}{6} \\times \\frac{1}{4}\\right)} = \\frac{3}{3 + 5} = \\frac{3}{8}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "Box I contains 2 white and 3 red balls, and Box II contains 4 white and 5 red balls. One ball is drawn at random from one of the boxes and is found to be red. The probability that it was drawn from Box II is:",
    options: [
      "$\\frac{25}{52}$",
      "$\\frac{27}{52}$",
      "$\\frac{5}{9}$",
      "$\\frac{3}{5}$"
    ],
    correctOption: 0,
    solution: "Let $B_1, B_2$ denote selecting Box I and Box II. $P(B_1) = P(B_2) = \\frac{1}{2}$.\\nLet $R$ denote drawing a red ball.\\n$P(R|B_1) = \\frac{3}{5}$ and $P(R|B_2) = \\frac{5}{9}$.\\nBy Bayes' theorem:\\n$P(B_2|R) = \\frac{P(B_2)P(R|B_2)}{P(B_1)P(R|B_1) + P(B_2)P(R|B_2)} = \\frac{\\frac{1}{2} \\times \\frac{5}{9}}{\\frac{1}{2} \\times \\frac{3}{5} + \\frac{1}{2} \\times \\frac{5}{9}} = \\frac{\\frac{5}{9}}{\\frac{3}{5} + \\frac{5}{9}} = \\frac{25}{27 + 25} = \\frac{25}{52}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "A card from a pack of 52 playing cards is lost. From the remaining cards, two cards are drawn and found to be both spades. The probability that the lost card was a spade is:",
    options: [
      "$\\frac{11}{50}$",
      "$\\frac{13}{50}$",
      "$\\frac{1}{4}$",
      "$\\frac{9}{50}$"
    ],
    correctOption: 0,
    solution: "Let $E_1$ be the event that the lost card is a spade, and $E_2$ that it is not a spade.\\n$P(E_1) = \\frac{13}{52} = \\frac{1}{4}$, $P(E_2) = \\frac{39}{52} = \\frac{3}{4}$.\\nLet $A$ be the event that two spades are drawn from the remaining 51 cards.\\n$P(A|E_1) = \\frac{\\binom{12}{2}}{\\binom{51}{2}} = \\frac{12 \\times 11}{51 \\times 50}$.\\n$P(A|E_2) = \\frac{\\binom{13}{2}}{\\binom{51}{2}} = \\frac{13 \\times 12}{51 \\times 50}$.\\nBy Bayes' theorem:\\n$P(E_1|A) = \\frac{P(E_1)P(A|E_1)}{P(E_1)P(A|E_1) + P(E_2)P(A|E_2)} = \\frac{\\frac{1}{4} \\times 12 \\times 11}{\\left(\\frac{1}{4} \\times 12 \\times 11\\right) + \\left(\\frac{3}{4} \\times 13 \\times 12\\right)} = \\frac{11}{11 + 39} = \\frac{11}{50}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "Of the students in a college, it is known that 60% reside in hostel and 40% are day scholars. Previous year results report that 30% of all hostlers attain A grade and 20% of day scholars attain A grade. At the end of the year, one student is chosen at random and has an A grade. The probability that the student is a hostler is:",
    options: [
      "$\\frac{9}{13}$",
      "$\\frac{4}{13}$",
      "$\\frac{3}{5}$",
      "$\\frac{2}{5}$"
    ],
    correctOption: 0,
    solution: "Let $H$ be the event student is a hostler, $D$ be day scholar, and $A$ be attaining grade A.\\n$P(H) = 0.60, P(D) = 0.40$.\\n$P(A|H) = 0.30, P(A|D) = 0.20$.\\nBy Bayes' theorem:\\n$P(H|A) = \\frac{P(H)P(A|H)}{P(H)P(A|H) + P(D)P(A|D)} = \\frac{0.60 \\times 0.30}{(0.60 \\times 0.30) + (0.40 \\times 0.20)} = \\frac{0.18}{0.18 + 0.08} = \\frac{0.18}{0.26} = \\frac{9}{13}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "There are three coins. One is a two-headed coin, another is a biased coin that comes up heads 75% of the time, and the third is an unbiased coin. One of the three coins is chosen at random and tossed. It shows heads. The probability that it was the two-headed coin is:",
    options: [
      "$\\frac{4}{9}$",
      "$\\frac{2}{9}$",
      "$\\frac{1}{3}$",
      "$\\frac{3}{8}$"
    ],
    correctOption: 0,
    solution: "Let $C_1, C_2, C_3$ be the three coins. $P(C_1) = P(C_2) = P(C_3) = \\frac{1}{3}$.\\n$P(H|C_1) = 1$, $P(H|C_2) = \\frac{3}{4}$, $P(H|C_3) = \\frac{1}{2}$.\\nBy Bayes' theorem:\\n$P(C_1|H) = \\frac{\\frac{1}{3} \\times 1}{\\frac{1}{3}\\left(1 + \\frac{3}{4} + \\frac{1}{2}\\right)} = \\frac{1}{\\frac{4 + 3 + 2}{4}} = \\frac{4}{9}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "An insurance company insured 2000 scooter drivers, 4000 car drivers and 6000 truck drivers. The probability of an accident is 0.01, 0.03 and 0.15 respectively. One of the insured persons meets with an accident. The probability that he is a scooter driver is:",
    options: [
      "$\\frac{1}{52}$",
      "$\\frac{3}{52}$",
      "$\\frac{1}{26}$",
      "$\\frac{19}{52}$"
    ],
    correctOption: 0,
    solution: "Total drivers $= 2000 + 4000 + 6000 = 12000$.\\n$P(E_1) = \\frac{2000}{12000} = \\frac{1}{6}$, $P(E_2) = \\frac{4000}{12000} = \\frac{1}{3}$, $P(E_3) = \\frac{6000}{12000} = \\frac{1}{2}$.\\n$P(A|E_1) = 0.01 = \\frac{1}{100}$, $P(A|E_2) = 0.03 = \\frac{3}{100}$, $P(A|E_3) = 0.15 = \\frac{15}{100}$.\\nBy Bayes' theorem:\\n$P(E_1|A) = \\frac{\\frac{1}{6} \\times 1}{\\left(\\frac{1}{6} \\times 1\\right) + \\left(\\frac{1}{3} \\times 3\\right) + \\left(\\frac{1}{2} \\times 15\\right)} = \\frac{\\frac{1}{6}}{\\frac{1}{6} + 1 + \\frac{15}{2}} = \\frac{1}{1 + 6 + 45} = \\frac{1}{52}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "A laboratory blood test is 99% effective in detecting a certain disease when it is present. However, the test also yields a 'false positive' result for 0.5% of the healthy persons tested. If 0.1% of the population actually has the disease, what is the probability that a person has the disease given that his test result is positive?",
    options: [
      "$\\frac{198}{1197} = \\frac{22}{133}$",
      "$\\frac{1}{9}$",
      "$\\frac{2}{3}$",
      "$\\frac{99}{100}$"
    ],
    correctOption: 0,
    solution: "Let $E_1$ be the event person has the disease, $E_2$ person does not have the disease.\\n$P(E_1) = 0.001$, $P(E_2) = 0.999$.\\n$P(A|E_1) = 0.99$ (true positive), $P(A|E_2) = 0.005$ (false positive).\\nBy Bayes' theorem:\\n$P(E_1|A) = \\frac{0.001 \\times 0.99}{(0.001 \\times 0.99) + (0.999 \\times 0.005)} = \\frac{0.00099}{0.00099 + 0.004995} = \\frac{990}{990 + 4995} = \\frac{990}{5985} = \\frac{198}{1197} = \\frac{22}{133} \\approx 0.165$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "Bag A contains 3 white and 2 black balls, while Bag B contains 2 white and 4 black balls. A ball is drawn at random from one of the bags and is found to be white. The probability that it was drawn from Bag A is:",
    options: [
      "$\\frac{9}{14}$",
      "$\\frac{5}{14}$",
      "$\\frac{3}{5}$",
      "$\\frac{1}{2}$"
    ],
    correctOption: 0,
    solution: "Let $A, B$ denote selecting Bag A and Bag B. $P(A) = P(B) = \\frac{1}{2}$.\\n$P(W|A) = \\frac{3}{5}$, $P(W|B) = \\frac{2}{6} = \\frac{1}{3}$.\\nBy Bayes' theorem:\\n$P(A|W) = \\frac{\\frac{3}{5}}{\\frac{3}{5} + \\frac{1}{3}} = \\frac{\\frac{3}{5}}{\\frac{9 + 5}{15}} = \\frac{9}{14}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "In answering a question on a multiple choice test, a student either knows the answer or guesses. Let $\\frac{3}{4}$ be the probability that he knows the answer and $\\frac{1}{4}$ be the probability that he guesses. Assuming that a student who guesses at the answer will be correct with probability $\\frac{1}{4}$, what is the probability that the student knows the answer given that he answered it correctly?",
    options: [
      "$\\frac{12}{13}$",
      "$\\frac{3}{13}$",
      "$\\frac{1}{13}$",
      "$\\frac{3}{4}$"
    ],
    correctOption: 0,
    solution: "Let $E_1$ be the event the student knows the answer, and $E_2$ that he guesses.\\n$P(E_1) = \\frac{3}{4}$, $P(E_2) = \\frac{1}{4}$.\\nLet $A$ be answering correctly.\\n$P(A|E_1) = 1$, $P(A|E_2) = \\frac{1}{4}$.\\nBy Bayes' theorem:\\n$P(E_1|A) = \\frac{\\frac{3}{4} \\times 1}{\\left(\\frac{3}{4} \\times 1\\right) + \\left(\\frac{1}{4} \\times \\frac{1}{4}\\right)} = \\frac{\\frac{3}{4}}{\\frac{3}{4} + \\frac{1}{16}} = \\frac{12}{12 + 1} = \\frac{12}{13}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "single_choice",
    question: "A coin is tossed. If it shows heads, we draw a ball from Urn 1 containing 3 red and 5 black balls. If it shows tails, we draw a ball from Urn 2 containing 4 red and 4 black balls. If a red ball is drawn, the probability that the coin showed heads is:",
    options: [
      "$\\frac{3}{7}$",
      "$\\frac{4}{7}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$"
    ],
    correctOption: 0,
    solution: "$P(H) = \\frac{1}{2}, P(T) = \\frac{1}{2}$.\\n$P(R|H) = \\frac{3}{8}$, $P(R|T) = \\frac{4}{8} = \\frac{1}{2}$.\\nBy Bayes' theorem:\\n$P(H|R) = \\frac{\\frac{1}{2} \\times \\frac{3}{8}}{\\frac{1}{2} \\times \\frac{3}{8} + \\frac{1}{2} \\times \\frac{4}{8}} = \\frac{3}{3 + 4} = \\frac{3}{7}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): Bayes' theorem calculates the posterior probability $P(E_i|A)$ of a hypothesis given an observed event $A$.\\nReason (R): The prior probabilities $P(E_i)$ and likelihoods $P(A|E_i)$ must satisfy $\\sum_{i=1}^n P(E_i) = 1$ where $E_1, E_2, \\dots, E_n$ form a partition of the sample space.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Bayes' theorem computes posterior probability $P(E_i|A) = \\frac{P(E_i)P(A|E_i)}{\\sum_{j=1}^n P(E_j)P(A|E_j)}$.\\nThe denominator uses the theorem of total probability, which is valid precisely when $E_1, \\dots, E_n$ partition the sample space with $\\sum P(E_i) = 1$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If an urn is chosen from two urns with equal probability, and Urn 1 has only white balls while Urn 2 has equal white and black balls, the probability that a drawn white ball came from Urn 1 is $\\frac{2}{3}$.\\nReason (R): $P(U_1|W) = \\frac{P(U_1)P(W|U_1)}{P(U_1)P(W|U_1) + P(U_2)P(W|U_2)} = \\frac{0.5 \\times 1}{0.5 \\times 1 + 0.5 \\times 0.5} = \\frac{1}{1 + 0.5} = \\frac{2}{3}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Using Bayes' theorem directly as shown in Reason (R):\\n$P(U_1|W) = \\frac{\\frac{1}{2} \\times 1}{\\frac{1}{2} \\times 1 + \\frac{1}{2} \\times \\frac{1}{2}} = \\frac{1}{1 + \\frac{1}{2}} = \\frac{2}{3}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): In Bayes' theorem, if $P(A|E_1) = P(A|E_2) = \\dots = P(A|E_n) > 0$, then the posterior probability $P(E_i|A)$ is identically equal to the prior probability $P(E_i)$.\\nReason (R): If the likelihood of event $A$ is identical across all mutually exclusive hypotheses, the occurrence of $A$ provides no new evidence to update the probabilities of the hypotheses.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Let $P(A|E_j) = c$ for all $j$. Then $P(A) = \\sum P(E_j) c = c \\sum P(E_j) = c(1) = c$.\\nThus $P(E_i|A) = \\frac{P(E_i)P(A|E_i)}{P(A)} = \\frac{P(E_i) c}{c} = P(E_i)$.\\nReason (R) explains this conceptual fact mathematically and intuitively.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If a person speaks truth with probability $p \\in (0, 1)$, and reports a six on a die, the probability that it is actually a six is strictly greater than $\\frac{1}{6}$ whenever $p > \\frac{1}{2}$.\\nReason (R): By Bayes' theorem, $P(\\text{six}|\\text{reports six}) = \\frac{\\frac{1}{6}p}{\\frac{1}{6}p + \\frac{5}{6}(1-p)} = \\frac{p}{5 - 4p}$, which is strictly increasing in $p$ on $(0, 1)$ and equals $\\frac{1}{6}$ at $p = \\frac{1}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "At $p = \\frac{1}{2}$, $\\frac{1/2}{5 - 4(1/2)} = \\frac{1/2}{3} = \\frac{1}{6}$.\\nSince $f(p) = \\frac{p}{5 - 4p}$ has derivative $f'(p) = \\frac{5}{(5 - 4p)^2} > 0$, it is strictly increasing.\\nFor $p > \\frac{1}{2}$, $f(p) > \\frac{1}{6}$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If a coin shows heads 3 times consecutively, the posterior probability that the coin is two-headed (chosen from a two-headed coin and a fair coin) is $\\frac{8}{9}$.\\nReason (R): $P(C_1|3H) = \\frac{0.5 \\times 1^3}{(0.5 \\times 1^3) + (0.5 \\times (0.5)^3)} = \\frac{1}{1 + \\frac{1}{8}} = \\frac{8}{9}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Using Bayes' theorem with likelihoods $P(3H|C_1) = 1$ and $P(3H|C_2) = (1/2)^3 = 1/8$:\\n$P(C_1|3H) = \\frac{\\frac{1}{2} \\times 1}{\\frac{1}{2} \\times 1 + \\frac{1}{2} \\times \\frac{1}{8}} = \\frac{1}{9/8} = \\frac{8}{9}$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any partition $E_1, E_2, \\dots, E_n$ of sample space $S$ and an event $A$ with $P(A) > 0$, $\\sum_{i=1}^n P(E_i|A) = 1$.\\nReason (R): The posterior probabilities form a valid conditional probability distribution over the hypotheses $E_1, E_2, \\dots, E_n$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By definition, $\\sum_{i=1}^n P(E_i|A) = \\sum_{i=1}^n \\frac{P(E_i \\cap A)}{P(A)} = \\frac{P\\left(\\bigcup_{i=1}^n (E_i \\cap A)\\right)}{P(A)} = \\frac{P(A)}{P(A)} = 1$.\\nReason (R) states that conditional probability satisfies all axioms of probability, which directly implies the sum equals 1.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(E_1) = P(E_2) = 0.5$ and $P(A|E_1) > P(A|E_2)$, then $P(E_1|A) > 0.5$.\\nReason (R): By Bayes' theorem, $P(E_1|A) = \\frac{P(A|E_1)}{P(A|E_1) + P(A|E_2)}$, which exceeds $\\frac{1}{2}$ when $P(A|E_1) > P(A|E_2)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(E_1|A) = \\frac{0.5 P(A|E_1)}{0.5 P(A|E_1) + 0.5 P(A|E_2)} = \\frac{P(A|E_1)}{P(A|E_1) + P(A|E_2)}$.\\nIf $x > y > 0$, then $\\frac{x}{x + y} > \\frac{x}{2x} = \\frac{1}{2}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): In a screening test with 99% accuracy for a disease affecting 1 in 10,000 individuals, a positive result does NOT mean the individual has a 99% probability of being infected.\\nReason (R): Due to the extremely small prior probability of the disease, false positives from the vast healthy population outnumber true positives.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "This is the classic Base Rate Fallacy in Bayes' theorem.\\nOut of 10,000 people, 1 is infected and tests positive (approx 1 true positive).\\nOut of 9,999 healthy people, a 1% false positive rate produces approx 100 false positives.\\nThus $P(\\text{Disease}|\\text{Positive}) \\approx \\frac{1}{1 + 100} \\approx 1\\% \\ll 99\\%$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If an event $A$ is independent of $B$, then $P(B|A) = P(B)$.\\nReason (R): For independent events, $P(A \\cap B) = P(A)P(B)$, so $P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{P(A)P(B)}{P(A)} = P(B)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By definition, if $A$ and $B$ are independent, $P(A \\cap B) = P(A)P(B)$.\\nThen $P(B|A) = \\frac{P(A \\cap B)}{P(A)} = P(B)$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If a bag contains 3 red and 4 black balls, and another bag contains 5 red and 6 black balls, the probability that a red ball came from Bag 1 is greater than $\\frac{1}{2}$.\\nReason (R): The proportion of red balls in Bag 1 is $\\frac{3}{7} \\approx 0.4286$, which is less than the proportion in Bag 2, which is $\\frac{5}{11} \\approx 0.4545$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    solution: "Proportions of red balls: $P(R|B_1) = \\frac{3}{7} = \\frac{33}{77}$ and $P(R|B_2) = \\frac{5}{11} = \\frac{35}{77}$.\\nSince $P(R|B_1) < P(R|B_2)$, $P(B_1|R) = \\frac{3/7}{3/7 + 5/11} = \\frac{33}{33 + 35} = \\frac{33}{68} < \\frac{1}{2}$.\\nTherefore, Assertion (A) is false, while Reason (R) correctly computes the proportions and is true.\\nThus, (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "A man speaks the truth 3 out of 4 times. He throws a fair die and reports that it is a six. If the probability that it is actually a six is expressed in lowest terms as $\\frac{a}{b}$, then the value of $a + b$ is:",
    options: [],
    correctAnswer: "11",
    solution: "Let $S$ be the event that six occurs: $P(S) = \\frac{1}{6}$, $P(S') = \\frac{5}{6}$.\\nHe speaks truth with probability $\\frac{3}{4}$, so $P(E|S) = \\frac{3}{4}$ and $P(E|S') = \\frac{1}{4}$.\\n$P(S|E) = \\frac{\\frac{1}{6} \\times \\frac{3}{4}}{\\frac{1}{6} \\times \\frac{3}{4} + \\frac{5}{6} \\times \\frac{1}{4}} = \\frac{3}{3 + 5} = \\frac{3}{8}$.\\nHere $a = 3, b = 8$, so $a + b = 3 + 8 = 11$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "Bag 1 contains 3 red and 4 black balls, and Bag 2 contains 5 red and 6 black balls. One ball is transferred from Bag 1 to Bag 2 and then a ball is drawn from Bag 2. If the ball drawn from Bag 2 is red, and the probability that the transferred ball was black is $\\frac{p}{q}$ in simplest form, then the value of $p + q$ is:",
    options: [],
    correctAnswer: "29",
    solution: "Let $R_1$ and $B_1$ be the events that the transferred ball is red and black, respectively.\\n$P(R_1) = \\frac{3}{7}$, $P(B_1) = \\frac{4}{7}$.\\nIf $R_1$ occurs, Bag 2 has 6 red and 6 black balls: $P(R_2|R_1) = \\frac{6}{12}$.\\nIf $B_1$ occurs, Bag 2 has 5 red and 7 black balls: $P(R_2|B_1) = \\frac{5}{12}$.\\nBy Bayes' theorem:\\n$P(B_1|R_2) = \\frac{\\frac{4}{7} \\times \\frac{5}{12}}{\\left(\\frac{3}{7} \\times \\frac{6}{12}\\right) + \\left(\\frac{4}{7} \\times \\frac{5}{12}\\right)} = \\frac{20}{18 + 20} = \\frac{20}{38} = \\frac{10}{19}$.\\nHere $p = 10$ and $q = 19$, so $p + q = 10 + 19 = 29$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "Box A contains 2 white and 4 red balls, and Box B contains 5 white and 1 red ball. A box is selected at random and a ball is drawn. If the ball is white, and the probability that it came from Box B is $\\frac{p}{q}$ in simplest form, then the value of $p + q$ is:",
    options: [],
    correctAnswer: "12",
    solution: "$P(A) = P(B) = \\frac{1}{2}$.\\n$P(W|A) = \\frac{2}{6} = \\frac{1}{3}$, $P(W|B) = \\frac{5}{6}$.\\nBy Bayes' theorem:\\n$P(B|W) = \\frac{\\frac{1}{2} \\times \\frac{5}{6}}{\\frac{1}{2} \\times \\frac{2}{6} + \\frac{1}{2} \\times \\frac{5}{6}} = \\frac{5}{2 + 5} = \\frac{5}{7}$.\\nHere $p = 5$ and $q = 7$, so $p + q = 5 + 7 = 12$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "A factory has two machines A and B. Machine A produces 60% of items and Machine B produces 40%. 1% of items from A are defective, and 2% from B are defective. An item is selected at random and found to be defective. If the probability that it was produced by Machine B is $\\frac{p}{q}$ in simplest form, find $p + q$:",
    options: [],
    correctAnswer: "11",
    solution: "$P(A) = 0.6, P(B) = 0.4$.\\n$P(D|A) = 0.01, P(D|B) = 0.02$.\\nBy Bayes' theorem:\\n$P(B|D) = \\frac{0.4 \\times 0.02}{(0.6 \\times 0.01) + (0.4 \\times 0.02)} = \\frac{0.008}{0.006 + 0.008} = \\frac{8}{14} = \\frac{4}{7}$.\\nHere $p = 4, q = 7$, so $p + q = 4 + 7 = 11$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "A coin is biased so that heads is twice as likely to occur as tails. If the biased coin and a fair coin are placed in a box, and one coin is chosen at random and tossed twice, yielding heads both times, the probability that the chosen coin was the biased coin is $\\frac{a}{b}$ in lowest terms. The value of $a + b$ is:",
    options: [],
    correctAnswer: "41",
    solution: "For the biased coin $C_1$: $P(H) = \\frac{2}{3}$.\\n$P(2H|C_1) = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.\\nFor the fair coin $C_2$: $P(H) = \\frac{1}{2}$.\\n$P(2H|C_2) = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\\nSince $P(C_1) = P(C_2) = \\frac{1}{2}$, by Bayes' theorem:\\n$P(C_1|2H) = \\frac{\\frac{4}{9}}{\\frac{4}{9} + \\frac{1}{4}} = \\frac{16/36}{25/36} = \\frac{16}{25}$.\\nThus $a = 16$ and $b = 25$, giving $a + b = 16 + 25 = 41$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "Two urns contain: Urn A with 4 white and 2 black balls, and Urn B with 3 white and 3 black balls. An urn is selected at random and two balls are drawn without replacement. Both balls are white. If the probability that Urn A was chosen is $\\frac{m}{n}$ in simplest form, then $m + n$ is equal to:",
    options: [],
    correctAnswer: "5",
    solution: "Let $A$ and $B$ denote choosing Urn A and Urn B. $P(A) = P(B) = \\frac{1}{2}$.\\n$P(2W|A) = \\frac{\\binom{4}{2}}{\\binom{6}{2}} = \\frac{6}{15} = \\frac{2}{5}$.\\n$P(2W|B) = \\frac{\\binom{3}{2}}{\\binom{6}{2}} = \\frac{3}{15} = \\frac{1}{5}$.\\nBy Bayes' theorem:\\n$P(A|2W) = \\frac{\\frac{2}{5}}{\\frac{2}{5} + \\frac{1}{5}} = \\frac{2}{3}$.\\nHere $m = 2$ and $n = 3$, so $m + n = 2 + 3 = 5$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "Three machines A, B, C produce 50%, 30%, and 20% of items in a factory. The percentages of defective items are 1%, 2%, and 3% respectively. An item is selected at random and found to be defective. If the probability that it was produced by Machine A is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "22",
    solution: "$P(A) = 0.50, P(B) = 0.30, P(C) = 0.20$.\\n$P(D|A) = 0.01, P(D|B) = 0.02, P(D|C) = 0.03$.\\n$P(D) = (0.50)(0.01) + (0.30)(0.02) + (0.20)(0.03) = 0.005 + 0.006 + 0.006 = 0.017$.\\nBy Bayes' theorem:\\n$P(A|D) = \\frac{0.005}{0.017} = \\frac{5}{17}$.\\nIn lowest terms, $p = 5$ and $q = 17$, so $p + q = 5 + 17 = 22$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "In a medical study, 40% of patients have measles and 60% have flu. A rash occurs in 90% of measles cases and 10% of flu cases. A patient has a rash. If the probability that the patient has measles is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "13",
    solution: "Let $M$ be measles and $F$ be flu. $P(M) = 0.40, P(F) = 0.60$.\\n$P(R|M) = 0.90, P(R|F) = 0.10$.\\n$P(M|R) = \\frac{0.40 \\times 0.90}{(0.40 \\times 0.90) + (0.60 \\times 0.10)} = \\frac{0.36}{0.36 + 0.06} = \\frac{0.36}{0.42} = \\frac{6}{7}$.\\nIn lowest terms, $p = 6$ and $q = 7$, so $p + q = 6 + 7 = 13$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "Three urns contain: Urn 1 (1 white, 2 black), Urn 2 (2 white, 1 black), and Urn 3 (2 white, 2 black). An urn is selected at random and a white ball is drawn. If the probability that it came from Urn 2 is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "13",
    solution: "$P(U_1) = P(U_2) = P(U_3) = \\frac{1}{3}$.\\n$P(W|U_1) = \\frac{1}{3}$, $P(W|U_2) = \\frac{2}{3}$, $P(W|U_3) = \\frac{2}{4} = \\frac{1}{2}$.\\n$P(W) = \\frac{1}{3}\\left(\\frac{1}{3} + \\frac{2}{3} + \\frac{1}{2}\\right) = \\frac{1}{3}\\left(\\frac{3}{2}\\right) = \\frac{1}{2}$.\\n$P(U_2|W) = \\frac{\\frac{1}{3} \\times \\frac{2}{3}}{\\frac{1}{2}} = \\frac{2/9}{1/2} = \\frac{4}{9}$.\\nIn lowest terms, $p = 4$ and $q = 9$, so $p + q = 4 + 9 = 13$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  },
  {
    type: "numerical",
    question: "A person throws a pair of dice and tells the truth 4 out of 5 times. He reports that the sum of numbers is 10. If the probability that the sum is actually 10 is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "19",
    solution: "The outcomes giving sum 10 are $\\{(4,6), (5,5), (6,4)\\}$ (3 outcomes out of 36).\\n$P(S) = \\frac{3}{36} = \\frac{1}{12}$, and $P(S') = \\frac{11}{12}$.\\nHe reports sum 10:\\nIf sum is 10, he speaks truth: $P(E|S) = \\frac{4}{5}$.\\nIf sum is not 10, he lies: $P(E|S') = \\frac{1}{5}$.\\n$P(S|E) = \\frac{\\frac{1}{12} \\times \\frac{4}{5}}{\\left(\\frac{1}{12} \\times \\frac{4}{5}\\right) + \\left(\\frac{11}{12} \\times \\frac{1}{5}\\right)} = \\frac{4}{4 + 11} = \\frac{4}{15}$.\\nIn lowest terms, $p = 4$ and $q = 15$, so $p + q = 4 + 15 = 19$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Bayes' theorem",
    subTopic: "Bayes' theorem"
  }
];

module.exports = { subtopic1Questions };

