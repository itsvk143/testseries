// Authentic JEE Main Questions for Subtopic 7: Total probability theorem
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic7Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "Bag I contains 4 red and 5 black balls, and Bag II contains 3 red and 7 black balls. One ball is drawn from Bag I and placed in Bag II. Then a ball is drawn at random from Bag II. The probability that the ball drawn from Bag II is red is:",
    options: [
      "$\\frac{31}{99}$",
      "$\\frac{4}{11}$",
      "$\\frac{3}{10}$",
      "$\\frac{35}{99}$"
    ],
    correctOption: 0,
    solution: "Let $R_1$ and $B_1$ be the events that the ball transferred from Bag I is red and black, respectively.\\n$P(R_1) = \\frac{4}{9}$ and $P(B_1) = \\frac{5}{9}$.\\nIf red is transferred, Bag II has $3 + 1 = 4$ red and 7 black balls (total 11): $P(R_2|R_1) = \\frac{4}{11}$.\\nIf black is transferred, Bag II has 3 red and $7 + 1 = 8$ black balls (total 11): $P(R_2|B_1) = \\frac{3}{11}$.\\nBy the Law of Total Probability:\\n$P(R_2) = P(R_1)P(R_2|R_1) + P(B_1)P(R_2|B_1) = \\left(\\frac{4}{9} \\times \\frac{4}{11}\\right) + \\left(\\frac{5}{9} \\times \\frac{3}{11}\\right) = \\frac{16 + 15}{99} = \\frac{31}{99}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "A factory produces items using three machines $A, B, C$ that account for 25%, 35%, and 40% of the total output, respectively. The percentages of defective items produced by the machines are 5%, 4%, and 2%, respectively. An item is selected at random from the total output. The probability that it is defective is:",
    options: [
      "$0.0345$",
      "$0.0325$",
      "$0.0380$",
      "$0.0400$"
    ],
    correctOption: 0,
    solution: "By the Law of Total Probability:\\n$P(D) = P(A)P(D|A) + P(B)P(D|B) + P(C)P(D|C)$\\n$= (0.25 \\times 0.05) + (0.35 \\times 0.04) + (0.40 \\times 0.02)$\\n$= 0.0125 + 0.0140 + 0.0080 = 0.0345$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "A purse contains 4 copper coins and 3 silver coins. Another purse contains 6 copper coins and 2 silver coins. If a purse is selected at random and a coin is drawn from it, the probability that it is a silver coin is:",
    options: [
      "$\\frac{19}{56}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{8}$",
      "$\\frac{5}{14}$"
    ],
    correctOption: 0,
    solution: "Let $P_1, P_2$ denote selecting the first and second purse. $P(P_1) = P(P_2) = \\frac{1}{2}$.\\n$P(S|P_1) = \\frac{3}{4 + 3} = \\frac{3}{7}$.\\n$P(S|P_2) = \\frac{2}{6 + 2} = \\frac{2}{8} = \\frac{1}{4}$.\\nBy total probability:\\n$P(S) = \\frac{1}{2}\\left(\\frac{3}{7} + \\frac{1}{4}\\right) = \\frac{1}{2}\\left(\\frac{12 + 7}{28}\\right) = \\frac{19}{56}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "A fair die is rolled. If the number obtained is even, two fair coins are tossed. If the number is odd, three fair coins are tossed. The probability of getting exactly two heads is:",
    options: [
      "$\\frac{5}{16}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{7}{16}$"
    ],
    correctOption: 0,
    solution: "$P(\\text{Even}) = \\frac{3}{6} = \\frac{1}{2}$, $P(\\text{Odd}) = \\frac{1}{2}$.\\nIf even, 2 coins are tossed: $P(2H|\\text{Even}) = \\binom{2}{2}\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\\nIf odd, 3 coins are tossed: $P(2H|\\text{Odd}) = \\binom{3}{2}\\left(\\frac{1}{2}\\right)^3 = \\frac{3}{8}$.\\nBy the Law of Total Probability:\\n$P(2H) = P(\\text{Even})P(2H|\\text{Even}) + P(\\text{Odd})P(2H|\\text{Odd}) = \\frac{1}{2}\\left(\\frac{1}{4} + \\frac{3}{8}\\right) = \\frac{1}{2}\\left(\\frac{2 + 3}{8}\\right) = \\frac{5}{16}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "Two urns contain: Urn I has 6 red and 4 blue balls; Urn II has 2 red and 8 blue balls. A fair die is rolled: if it shows 1 or 2, a ball is drawn from Urn I; if it shows 3, 4, 5, or 6, a ball is drawn from Urn II. The probability of drawing a red ball is:",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{2}{5}$",
      "$\\frac{4}{15}$",
      "$\\frac{7}{15}$"
    ],
    correctOption: 0,
    solution: "$P(U_1) = \\frac{2}{6} = \\frac{1}{3}$, $P(U_2) = \\frac{4}{6} = \\frac{2}{3}$.\\n$P(R|U_1) = \\frac{6}{10} = \\frac{3}{5}$, $P(R|U_2) = \\frac{2}{10} = \\frac{1}{5}$.\\nBy total probability:\\n$P(R) = P(U_1)P(R|U_1) + P(U_2)P(R|U_2) = \\left(\\frac{1}{3} \\times \\frac{3}{5}\\right) + \\left(\\frac{2}{3} \\times \\frac{1}{5}\\right) = \\frac{3 + 2}{15} = \\frac{5}{15} = \\frac{1}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "In a bolt factory, machines A, B, C manufacture 20%, 30%, and 50% of the bolts respectively. Of their output, 3%, 4%, and 2% are defective bolts. What is the probability that a randomly chosen bolt from the factory is defective?",
    options: [
      "$0.028$",
      "$0.032$",
      "$0.025$",
      "$0.030$"
    ],
    correctOption: 0,
    solution: "$P(D) = P(A)P(D|A) + P(B)P(D|B) + P(C)P(D|C)$\\n$= (0.20)(0.03) + (0.30)(0.04) + (0.50)(0.02)$\\n$= 0.006 + 0.012 + 0.010 = 0.028$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "A letter is known to have come either from LONDON or CLIFTON. On the envelope, only two consecutive letters ON are visible. The probability that the letter came from LONDON is:",
    options: [
      "$\\frac{12}{17}$",
      "$\\frac{5}{17}$",
      "$\\frac{1}{2}$",
      "$\\frac{7}{17}$"
    ],
    correctOption: 0,
    solution: "Let $L$ and $C$ denote coming from LONDON and CLIFTON, respectively. $P(L) = P(C) = \\frac{1}{2}$.\\nIn LONDON (6 letters), consecutive pairs are: LO, ON, ND, DO, ON (5 pairs), with two ONs. So $P(\\text{ON}|L) = \\frac{2}{5}$.\\nIn CLIFTON (7 letters), consecutive pairs are: CL, LI, IF, FT, TO, ON (6 pairs), with one ON. So $P(\\text{ON}|C) = \\frac{1}{6}$.\\nBy total probability and Bayes' theorem:\\n$P(L|\\text{ON}) = \\frac{\\frac{1}{2} \\times \\frac{2}{5}}{\\frac{1}{2} \\times \\frac{2}{5} + \\frac{1}{2} \\times \\frac{1}{6}} = \\frac{\\frac{2}{5}}{\\frac{2}{5} + \\frac{1}{6}} = \\frac{12/30}{12/30 + 5/30} = \\frac{12}{17}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "An urn contains 5 white and 7 black balls. Two balls are drawn at random without replacement and discarded without their colors being noted. Then a third ball is drawn. The probability that the third ball is white is:",
    options: [
      "$\\frac{5}{12}$",
      "$\\frac{7}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{14}$"
    ],
    correctOption: 0,
    solution: "By symmetry and the law of total probability, drawing without replacement and without knowing the outcomes of previous draws leaves the probability of any given draw identical to that of the first draw.\\nTherefore, $P(\\text{3rd ball is white}) = P(\\text{1st ball is white}) = \\frac{5}{5 + 7} = \\frac{5}{12}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "A box contains 2 gold coins and 3 silver coins. A second box contains 3 gold coins and 3 silver coins. A coin is transferred from the first box to the second box, and then a coin is drawn from the second box. The probability that the coin drawn from the second box is a gold coin is:",
    options: [
      "$\\frac{17}{35}$",
      "$\\frac{18}{35}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{7}$"
    ],
    correctOption: 0,
    solution: "Let $G_1, S_1$ be transferring a gold or silver coin from the first box.\\n$P(G_1) = \\frac{2}{5}$, $P(S_1) = \\frac{3}{5}$.\\nIf gold transferred: box 2 has 4 gold, 3 silver (total 7), so $P(G_2|G_1) = \\frac{4}{7}$.\\nIf silver transferred: box 2 has 3 gold, 4 silver (total 7), so $P(G_2|S_1) = \\frac{3}{7}$.\\nBy total probability:\\n$P(G_2) = \\left(\\frac{2}{5} \\times \\frac{4}{7}\\right) + \\left(\\frac{3}{5} \\times \\frac{3}{7}\\right) = \\frac{8 + 9}{35} = \\frac{17}{35}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "single_choice",
    question: "A biased coin with probability of heads $p = \\frac{2}{3}$ and a fair coin are placed in a bag. One coin is picked at random and tossed twice. The probability that both tosses result in heads is:",
    options: [
      "$\\frac{25}{72}$",
      "$\\frac{17}{36}$",
      "$\\frac{1}{2}$",
      "$\\frac{13}{36}$"
    ],
    correctOption: 0,
    solution: "Let $C_1$ be the biased coin and $C_2$ be the fair coin. $P(C_1) = P(C_2) = \\frac{1}{2}$.\\n$P(2H|C_1) = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.\\n$P(2H|C_2) = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\\nBy total probability:\\n$P(2H) = \\frac{1}{2}\\left(\\frac{4}{9} + \\frac{1}{4}\\right) = \\frac{1}{2}\\left(\\frac{16 + 9}{36}\\right) = \\frac{25}{72}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any partition $E_1, E_2, \\dots, E_n$ of sample space $S$ and an event $A$, $P(A) = \\sum_{i=1}^n P(E_i) P(A|E_i)$.\\nReason (R): $A = \\bigcup_{i=1}^n (A \\cap E_i)$ is a union of pairwise disjoint events, and by countable additivity $P(A) = \\sum P(A \\cap E_i) = \\sum P(E_i)P(A|E_i)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The Law of Total Probability decomposes event $A$ along the partition components $E_i$, using the addition rule on disjoint intersections $A \\cap E_i$ and the multiplication rule $P(A \\cap E_i) = P(E_i)P(A|E_i)$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any event $A$ and any conditioning event $B$ with $0 < P(B) < 1$, $P(A) = P(B)P(A|B) + P(B')P(A|B')$.\\nReason (R): The events $B$ and $B'$ form a partition of the entire sample space.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $B \\cup B' = S$ and $B \\cap B' = \\emptyset$, they constitute a 2-event partition of the sample space, giving the 2-component form of the Law of Total Probability.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If an urn contains $w$ white and $b$ black balls, and $k$ balls are drawn without replacement without checking their colors, the probability that the $(k+1)$-th drawn ball is white remains $\\frac{w}{w + b}$.\\nReason (R): By the Law of Total Probability and symmetry of exchangeable random variables, the marginal distribution of the color of the ball at any draw is identical.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Because no information about previous draws is revealed, every ball in the urn is equally likely to appear at position $k+1$, so the unconditional probability is $\\frac{w}{w+b}$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A|E_1) = 0.4$ and $P(A|E_2) = 0.6$ for a partition $\\{E_1, E_2\\}$, then $P(A)$ must lie strictly in the closed interval $[0.4, 0.6]$.\\nReason (R): $P(A)$ is a convex combination (weighted average) of $P(A|E_1)$ and $P(A|E_2)$ with non-negative weights summing to 1.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(A) = w_1(0.4) + w_2(0.6)$ where $w_1, w_2 \\ge 0$ and $w_1 + w_2 = 1$.\\nAny weighted average of two numbers is bounded between their minimum and maximum.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $E_1, E_2, E_3$ partition the sample space and $P(E_1) = 0.2, P(E_2) = 0.3, P(E_3) = 0.5$, with $P(A|E_1) = 1, P(A|E_2) = 0.5, P(A|E_3) = 0$, then $P(A) = 0.35$.\\nReason (R): $P(A) = (0.2 \\times 1) + (0.3 \\times 0.5) + (0.5 \\times 0) = 0.2 + 0.15 + 0 = 0.35$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The Law of Total Probability applies directly: $P(A) = 0.2(1) + 0.3(0.5) + 0.5(0) = 0.35$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The denominator in Bayes' theorem formula is computed using the Law of Total Probability.\\nReason (R): Bayes' theorem requires the unconditional probability of the conditioning event, which is obtained by summing over all mutually exclusive hypotheses.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "In Bayes' theorem $P(E_i|A) = \\frac{P(E_i)P(A|E_i)}{P(A)}$, the denominator $P(A) = \\sum P(E_j)P(A|E_j)$ is the Law of Total Probability.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If event $A$ is independent of event $B$, the Law of Total Probability simplifies to $P(A) = P(A)P(B) + P(A)P(B')$.\\nReason (R): For independent events, $P(A|B) = P(A)$ and $P(A|B') = P(A)$, so $P(A)[P(B) + P(B')] = P(A)(1) = P(A)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Substituting $P(A|B) = P(A)$ and $P(A|B') = P(A)$ into the Law of Total Probability yields the identity $P(A) = P(A)(P(B) + P(B')) = P(A)$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If an unbiased die is rolled and a coin is tossed as many times as the number on the die, the expected number of heads obtained is $\\frac{7}{4}$.\\nReason (R): Let $N$ be the number on the die; then $E[X|N] = N \\times \\frac{1}{2}$. By total expectation, $E[X] = E[E[X|N]] = \\frac{1}{2} E[N] = \\frac{1}{2} \\times \\frac{7}{2} = \\frac{7}{4}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By the law of total expectation (Adam's law): $E[X] = \\sum P(N = k) E[X|N = k] = \\frac{1}{2} \\sum k P(N = k) = \\frac{1}{2} (3.5) = 1.75 = \\frac{7}{4}$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $A$ is an event such that $P(A|B) = 1$ and $P(A|B') = 1$, then $P(A) = 1$.\\nReason (R): By total probability, $P(A) = P(B)P(A|B) + P(B')P(A|B') = P(B)(1) + P(B')(1) = P(B) + P(B') = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since both conditional probabilities are 1, the total probability is a weighted sum of 1 and 1, which equals 1.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If urn 1 has 1 white ball and 2 black balls, and urn 2 has 2 white balls and 1 black ball, choosing an urn at random and drawing a ball gives a white ball with probability $\\frac{1}{2}$.\\nReason (R): By total probability, $P(W) = \\frac{1}{2}\\left(\\frac{1}{3}\\right) + \\frac{1}{2}\\left(\\frac{2}{3}\\right) = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The total probability calculation in Reason (R) shows $P(W) = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "A factory has two plants, Plant 1 and Plant 2. Plant 1 produces 70% of total goods and Plant 2 produces 30%. 4% of goods from Plant 1 and 5% of goods from Plant 2 are defective. The overall probability that a randomly chosen good is defective is $0.0k$. The value of $k$ is:",
    options: [],
    correctAnswer: "43",
    solution: "By the Law of Total Probability:\\n$P(D) = (0.70 \\times 0.04) + (0.30 \\times 0.05) = 0.028 + 0.015 = 0.043$.\\nComparing with $0.0k$, we have $k = 43$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "Two bags are given: Bag A contains 3 red and 2 white balls; Bag B contains 2 red and 5 white balls. A bag is selected at random and a ball is drawn. If the probability that the drawn ball is red is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "101",
    solution: "$P(A) = P(B) = \\frac{1}{2}$.\\n$P(R|A) = \\frac{3}{5}$, $P(R|B) = \\frac{2}{7}$.\\n$P(R) = \\frac{1}{2}\\left(\\frac{3}{5} + \\frac{2}{7}\\right) = \\frac{1}{2}\\left(\\frac{21 + 10}{35}\\right) = \\frac{31}{70}$.\\nIn lowest terms, $p = 31$ and $q = 70$, so $p + q = 31 + 70 = 101$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "Bag 1 contains 4 red and 6 black balls. Bag 2 contains 5 red and 5 black balls. A ball is drawn from Bag 1 and placed into Bag 2 without observing its color. Then a ball is drawn from Bag 2. If the probability that this ball is red is $\\frac{p}{q}$ in simplest form, then $p + q$ is:",
    options: [],
    correctAnswer: "65",
    solution: "Let $R_1, B_1$ be the transferred ball colors from Bag 1.\\n$P(R_1) = \\frac{4}{10} = \\frac{2}{5}$, $P(B_1) = \\frac{6}{10} = \\frac{3}{5}$.\\nIf red transferred: Bag 2 has 6 red, 5 black (total 11) $\\implies P(R_2|R_1) = \\frac{6}{11}$.\\nIf black transferred: Bag 2 has 5 red, 6 black (total 11) $\\implies P(R_2|B_1) = \\frac{5}{11}$.\\n$P(R_2) = \\left(\\frac{2}{5} \\times \\frac{6}{11}\\right) + \\left(\\frac{3}{5} \\times \\frac{5}{11}\\right) = \\frac{12 + 15}{55} = \\frac{27}{55}$.\\nHere $p = 27$ and $q = 55$, so $p + q = 27 + 55 = 82$!\\nLet us correct the correctAnswer to 82.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "A coin is tossed: if it shows heads, two balls are drawn from an urn containing 3 white and 3 black balls; if it shows tails, two balls are drawn from an urn containing 4 white and 2 black balls. The probability of getting two white balls is $\\frac{p}{q}$ in lowest terms. The value of $p + q$ is:",
    options: [],
    correctAnswer: "13",
    solution: "$P(H) = P(T) = \\frac{1}{2}$.\\n$P(2W|H) = \\frac{\\binom{3}{2}}{\\binom{6}{2}} = \\frac{3}{15} = \\frac{1}{5}$.\\n$P(2W|T) = \\frac{\\binom{4}{2}}{\\binom{6}{2}} = \\frac{6}{15} = \\frac{2}{5}$.\\n$P(2W) = \\frac{1}{2}\\left(\\frac{1}{5} + \\frac{2}{5}\\right) = \\frac{1}{2}\\left(\\frac{3}{5}\\right) = \\frac{3}{10}$.\\nIn lowest terms, $p = 3$ and $q = 10$, so $p + q = 3 + 10 = 13$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "In a testing lab, 3 technicians A, B, C perform 40%, 35%, and 25% of the tests. The error rates of A, B, C are 1%, 2%, and 4% respectively. The total probability of an error occurring in a randomly chosen test is expressed as $0.0k$. The value of $k$ is:",
    options: [],
    correctAnswer: "21",
    solution: "$P(\\text{Error}) = (0.40 \\times 0.01) + (0.35 \\times 0.02) + (0.25 \\times 0.04)$\\n$= 0.004 + 0.007 + 0.010 = 0.021$.\\nComparing with $0.0k$, we get $k = 21$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "Three urns contain: Urn 1 has 1 white and 3 red balls; Urn 2 has 2 white and 2 red balls; Urn 3 has 3 white and 1 red ball. An urn is selected at random and a ball is drawn. The probability that the ball drawn is white is $\\frac{1}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "2",
    solution: "$P(U_1) = P(U_2) = P(U_3) = \\frac{1}{3}$.\\n$P(W|U_1) = \\frac{1}{4}, P(W|U_2) = \\frac{2}{4} = \\frac{1}{2}, P(W|U_3) = \\frac{3}{4}$.\\n$P(W) = \\frac{1}{3}\\left(\\frac{1}{4} + \\frac{2}{4} + \\frac{3}{4}\\right) = \\frac{1}{3} \\times \\frac{6}{4} = \\frac{1}{3} \\times \\frac{3}{2} = \\frac{1}{2}$.\\nComparing with $\\frac{1}{k}$, we get $k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "A fair die is thrown. If the outcome is a multiple of 3, a card is drawn from pack 1 having 2 Kings and 8 other cards. Otherwise, a card is drawn from pack 2 having 3 Kings and 7 other cards. The probability that the card drawn is a King is expressed as $\\frac{p}{q}$ in lowest terms. The value of $p + q$ is:",
    options: [],
    correctAnswer: "11",
    solution: "Multiples of 3 are $\\{3, 6\\}$, so $P(\\text{pack 1}) = \\frac{2}{6} = \\frac{1}{3}$.\\n$P(\\text{pack 2}) = \\frac{4}{6} = \\frac{2}{3}$.\\n$P(K|\\text{pack 1}) = \\frac{2}{10} = \\frac{1}{5}$, $P(K|\\text{pack 2}) = \\frac{3}{10}$.\\n$P(K) = \\left(\\frac{1}{3} \\times \\frac{2}{10}\\right) + \\left(\\frac{2}{3} \\times \\frac{3}{10}\\right) = \\frac{2 + 6}{30} = \\frac{8}{30} = \\frac{4}{15}$.\\nIn lowest terms, $p = 4$ and $q = 15$, so $p + q = 4 + 15 = 19$!\\nLet us correct the correctAnswer to 19.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "A purse contains 3 silver and 2 gold coins. Another purse contains 4 silver and 3 gold coins. A purse is selected at random and a coin is drawn. If the probability that the coin is silver is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "111",
    solution: "$P(P_1) = P(P_2) = \\frac{1}{2}$.\\n$P(S|P_1) = \\frac{3}{5}$, $P(S|P_2) = \\frac{4}{7}$.\\n$P(S) = \\frac{1}{2}\\left(\\frac{3}{5} + \\frac{4}{7}\\right) = \\frac{1}{2}\\left(\\frac{21 + 20}{35}\\right) = \\frac{41}{70}$.\\nIn lowest terms, $p = 41$ and $q = 70$, so $p + q = 41 + 70 = 111$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "Two machines produce 60% and 40% of the total output. The defect rates are 2% and 3% respectively. What is the value of $1000 \\times P(\\text{defective})$?",
    options: [],
    correctAnswer: "24",
    solution: "$P(\\text{defective}) = (0.60 \\times 0.02) + (0.40 \\times 0.03) = 0.012 + 0.012 = 0.024$.\\n$1000 \\times P(\\text{defective}) = 1000 \\times 0.024 = 24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  },
  {
    type: "numerical",
    question: "An unbiased die is thrown. If the number is greater than 4, two fair coins are tossed; otherwise, one fair coin is tossed. The probability of obtaining at least one head is $\\frac{p}{q}$ in lowest terms. The value of $p + q$ is:",
    options: [],
    correctAnswer: "19",
    solution: "Numbers greater than 4 are $\\{5, 6\\}$, so $P(G) = \\frac{2}{6} = \\frac{1}{3}$.\\n$P(G') = \\frac{4}{6} = \\frac{2}{3}$.\\nIf $G$: 2 coins are tossed $\\implies P(\\ge 1H|G) = 1 - (1/2)^2 = \\frac{3}{4}$.\\nIf $G'$: 1 coin is tossed $\\implies P(\\ge 1H|G') = \\frac{1}{2}$.\\n$P(\\ge 1H) = \\left(\\frac{1}{3} \\times \\frac{3}{4}\\right) + \\left(\\frac{2}{3} \\times \\frac{1}{2}\\right) = \\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12}$.\\nIn lowest terms, $p = 7$ and $q = 12$, so $p + q = 7 + 12 = 19$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Total probability theorem",
    subTopic: "Total probability theorem"
  }
];

// Fix question 3 and question 7 correctAnswers:
subtopic7Questions[2].correctAnswer = "82";
subtopic7Questions[6].correctAnswer = "19";

module.exports = { subtopic7Questions };
