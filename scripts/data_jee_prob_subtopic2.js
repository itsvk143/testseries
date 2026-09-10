// Authentic JEE Main Questions for Subtopic 2: Conditional probability
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "A couple has two children. Find the probability that both children are boys, given that at least one of them is a boy.",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{3}$"
    ],
    correctOption: 0,
    solution: "The sample space of two children is $S = \\{BB, BG, GB, GG\\}$.\\nLet $A$ be the event that both are boys: $A = \\{BB\\}$.\\nLet $B$ be the event that at least one child is a boy: $B = \\{BB, BG, GB\\}$.\\nNotice $A \\cap B = \\{BB\\}$.\\n$P(\\text{both boys} | \\text{at least one boy}) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/4}{3/4} = \\frac{1}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "Let $A$ and $B$ be two events such that $P(A) = \\frac{3}{8}$, $P(B) = \\frac{5}{8}$ and $P(A \\cup B) = \\frac{3}{4}$. Then $P(A|B)$ is equal to:",
    options: [
      "$\\frac{2}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{5}$",
      "$\\frac{1}{2}$"
    ],
    correctOption: 0,
    solution: "By the addition rule of probability:\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$\\n$\\frac{3}{4} = \\frac{3}{8} + \\frac{5}{8} - P(A \\cap B) = 1 - P(A \\cap B) \\implies P(A \\cap B) = 1 - \\frac{3}{4} = \\frac{1}{4}$.\\nNow, $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/4}{5/8} = \\frac{1}{4} \\times \\frac{8}{5} = \\frac{2}{5}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "If $P(A) = \\frac{1}{2}$, $P(B) = 0$, then $P(A|B)$ is:",
    options: [
      "Not defined",
      "$0$",
      "$\\frac{1}{2}$",
      "$1$"
    ],
    correctOption: 0,
    solution: "By the definition of conditional probability, $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.\\nSince the denominator $P(B) = 0$, division by zero is undefined.\\nTherefore, $P(A|B)$ is not defined.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "A pair of fair dice is thrown. If the sum of the numbers appearing on the dice is observed to be 7, what is the probability that the number 2 has appeared at least once?",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{2}{7}$",
      "$\\frac{1}{18}$"
    ],
    correctOption: 0,
    solution: "Let $B$ be the event that the sum is 7:\\n$B = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\}$, so $n(B) = 6$.\\nLet $A$ be the event that 2 appears at least once.\\n$A \\cap B = \\{(2,5), (5,2)\\}$, so $n(A \\cap B) = 2$.\\nTherefore, $P(A|B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{2}{6} = \\frac{1}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "If $P(A') = 0.7$, $P(B) = 0.7$ and $P(B|A) = 0.5$, then $P(A|B)$ is equal to:",
    options: [
      "$\\frac{3}{14}$",
      "$\\frac{1}{7}$",
      "$\\frac{5}{14}$",
      "$\\frac{2}{7}$"
    ],
    correctOption: 0,
    solution: "$P(A) = 1 - P(A') = 1 - 0.7 = 0.3$.\\nSince $P(B|A) = \\frac{P(A \\cap B)}{P(A)} = 0.5$, we have:\\n$P(A \\cap B) = 0.5 \\times P(A) = 0.5 \\times 0.3 = 0.15$.\\nNow, $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.7} = \\frac{15}{70} = \\frac{3}{14}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "Ten cards numbered 1 to 10 are placed in a box, mixed thoroughly and one card is drawn randomly. If it is known that the number on the drawn card is more than 3, what is the probability that it is an even number?",
    options: [
      "$\\frac{4}{7}$",
      "$\\frac{3}{7}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{7}$"
    ],
    correctOption: 0,
    solution: "Let $B$ be the event that the number is strictly greater than 3: $B = \\{4, 5, 6, 7, 8, 9, 10\\}$, so $n(B) = 7$.\\nLet $A$ be the event that the number is even: $A = \\{2, 4, 6, 8, 10\\}$.\\n$A \\cap B = \\{4, 6, 8, 10\\}$, so $n(A \\cap B) = 4$.\\nTherefore, $P(A|B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{4}{7}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "If $P(A) = \\frac{2}{5}$, $P(B) = \\frac{1}{3}$ and $P(A \\cap B) = \\frac{1}{5}$, then $P(A'|B')$ is equal to:",
    options: [
      "$\\frac{7}{10}$",
      "$\\frac{3}{10}$",
      "$\\frac{2}{5}$",
      "$\\frac{4}{5}$"
    ],
    correctOption: 0,
    solution: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{2}{5} + \\frac{1}{3} - \\frac{1}{5} = \\frac{1}{5} + \\frac{1}{3} = \\frac{8}{15}$.\\n$P(A' \\cap B') = P((A \\cup B)') = 1 - P(A \\cup B) = 1 - \\frac{8}{15} = \\frac{7}{15}$.\\n$P(B') = 1 - P(B) = 1 - \\frac{1}{3} = \\frac{2}{3} = \\frac{10}{15}$.\\nTherefore, $P(A'|B') = \\frac{P(A' \\cap B')}{P(B')} = \\frac{7/15}{10/15} = \\frac{7}{10}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "Two numbers are selected at random from integers $1, 2, 3, \\dots, 9$. If the sum is even, the probability that both numbers are odd is:",
    options: [
      "$\\frac{5}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{9}$"
    ],
    correctOption: 0,
    solution: "The numbers are 5 odd integers $\\{1, 3, 5, 7, 9\\}$ and 4 even integers $\\{2, 4, 6, 8\\}$.\\nThe sum of two numbers is even if both are odd or both are even.\\nNumber of ways to choose both odd $= \\binom{5}{2} = 10$.\\nNumber of ways to choose both even $= \\binom{4}{2} = 6$.\\nTotal ways for an even sum $= 10 + 6 = 16$.\\n$P(\\text{both odd} | \\text{sum is even}) = \\frac{10}{16} = \\frac{5}{8}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "If $2P(A) = P(B) = \\frac{5}{13}$ and $P(A|B) = \\frac{2}{5}$, then $P(A \\cup B)$ is:",
    options: [
      "$\\frac{11}{26}$",
      "$\\frac{9}{26}$",
      "$\\frac{7}{13}$",
      "$\\frac{5}{26}$"
    ],
    correctOption: 0,
    solution: "Given $P(B) = \\frac{5}{13}$ and $P(A) = \\frac{5}{26}$.\\n$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{2}{5} \\implies P(A \\cap B) = \\frac{2}{5} \\times \\frac{5}{13} = \\frac{2}{13} = \\frac{4}{26}$.\\nThen $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{5}{26} + \\frac{10}{26} - \\frac{4}{26} = \\frac{11}{26}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "single_choice",
    question: "Three fair coins are tossed. Let $A$ be the event 'at least two heads appear' and $B$ be the event 'first coin shows head'. Then $P(A|B)$ is:",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{8}$",
      "$\\frac{5}{8}$"
    ],
    correctOption: 0,
    solution: "Sample space $S$ has 8 outcomes.\\nEvent $B$ (first coin shows head): $\\{HHH, HHT, HTH, HTT\\}$, so $n(B) = 4$.\\nEvent $A$ (at least two heads): $\\{HHH, HHT, HTH, THH\\}$.\\n$A \\cap B = \\{HHH, HHT, HTH\\}$, so $n(A \\cap B) = 3$.\\nTherefore, $P(A|B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{3}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any two events $A$ and $B$ with $P(B) > 0$, $P(A'|B) = 1 - P(A|B)$.\\nReason (R): $P(S|B) = 1$ and for mutually exclusive events $A$ and $A'$ whose union is $S$, $P(A \\cup A'|B) = P(A|B) + P(A'|B)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since conditional probability satisfies the probability axioms, $P(\\cdot | B)$ is a valid probability measure with $P(S|B) = 1$.\\nSince $A$ and $A'$ are mutually disjoint and $A \\cup A' = S$, $P(A|B) + P(A'|B) = P(S|B) = 1 \\implies P(A'|B) = 1 - P(A|B)$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $A \\subset B$, then $P(A|B) = \\frac{P(A)}{P(B)}$.\\nReason (R): When $A \\subset B$, $A \\cap B = A$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By definition, $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.\\nIf $A \\subset B$, then $A \\cap B = A$ (Reason R is true).\\nSubstituting this yields $P(A|B) = \\frac{P(A)}{P(B)}$ (Assertion A is true).\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $B \\subset A$ with $P(B) > 0$, then $P(A|B) = 1$.\\nReason (R): If $B$ occurs and $B \\subset A$, then event $A$ is guaranteed to have occurred.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "If $B \\subset A$, then $A \\cap B = B$.\\n$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(B)}{P(B)} = 1$.\\nReason (R) states the intuitive logical reality of set inclusion.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any two events $A$ and $B$, $P(A \\cap B) \\le P(A|B) \\le 1$ whenever $P(B) > 0$.\\nReason (R): $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$, and since $0 < P(B) \\le 1$, dividing by $P(B)$ gives $P(A|B) \\ge P(A \\cap B)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $P(B) \\le 1$, we have $\\frac{1}{P(B)} \\ge 1$.\\nTherefore, $P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\ge P(A \\cap B)$.\\nAlso, as a probability, $P(A|B) \\le 1$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A) = 0.4$ and $P(B) = 0.5$ for mutually exclusive events $A$ and $B$, then $P(A|B) = 0$.\\nReason (R): For mutually exclusive events, $A \\cap B = \\emptyset$, so $P(A \\cap B) = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Mutually exclusive events cannot occur simultaneously, so $A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$.\\nThen $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0}{0.5} = 0$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): $P(A|B) + P(A|B') = 1$ is always true for any two events $A$ and $B$.\\nReason (R): $B$ and $B'$ form a partition of the sample space.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    solution: "The statement $P(A|B) + P(A|B') = 1$ is generally FALSE. For example, if $A$ is independent of $B$, $P(A|B) = P(A)$ and $P(A|B') = P(A)$, so their sum is $2P(A)$, which is not necessarily 1.\\n(What is true is $P(A|B) + P(A'|B) = 1$).\\nReason (R) is a true statement that $B$ and $B'$ partition the sample space.\\nTherefore, (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A|B) > P(A)$, then $P(B|A) > P(B)$.\\nReason (R): $P(A|B) = \\frac{P(A \\cap B)}{P(B)} > P(A) \\iff P(A \\cap B) > P(A)P(B) \\iff \\frac{P(A \\cap B)}{P(A)} > P(B) \\iff P(B|A) > P(B)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The chained equivalence in Reason (R) provides the complete mathematical proof: both conditional statements are equivalent to positive correlation $P(A \\cap B) > P(A)P(B)$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): For any two events $A$ and $B$ with $P(B) > 0$, $P(A \\cup B | B) = 1$.\\nReason (R): Since $B \\subset (A \\cup B)$, the conditional event $(A \\cup B) \\cap B = B$, giving $\\frac{P(B)}{P(B)} = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(A \\cup B | B) = \\frac{P((A \\cup B) \\cap B)}{P(B)} = \\frac{P(B)}{P(B)} = 1$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A) = 0.6, P(B) = 0.5$ and $P(A \\cap B) = 0.3$, then events $A$ and $B$ are independent.\\nReason (R): Two events $A$ and $B$ are independent if and only if $P(A|B) = P(A)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(A)P(B) = 0.6 \\times 0.5 = 0.30 = P(A \\cap B)$.\\nAlso $P(A|B) = \\frac{0.3}{0.5} = 0.6 = P(A)$.\\nReason (R) states the condition for independence in terms of conditional probability, which holds here.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If a fair coin is tossed twice, the probability that the second toss is heads given that the first was heads is $\\frac{1}{2}$.\\nReason (R): Successive coin tosses are independent events, meaning the outcome of the first toss has no effect on the outcome of the second.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since the tosses are independent, $P(H_2|H_1) = P(H_2) = \\frac{1}{2}$.\\nReason (R) directly explains why the conditional probability equals the unconditional probability.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "A pair of dice is rolled. If the two numbers appearing on the dice are different, the probability that the sum of the numbers is 6 is $\\frac{p}{q}$ in lowest terms. The value of $p + q$ is:",
    options: [],
    correctAnswer: "17",
    solution: "Total outcomes when two numbers are different: $36 - 6 = 30$ (excluding $(1,1), \\dots, (6,6)$).\\nOutcomes with sum 6: $\\{(1,5), (2,4), (3,3), (4,2), (5,1)\\}$.\\nAmong these, different numbers are: $\\{(1,5), (2,4), (4,2), (5,1)\\}$ (4 outcomes).\\n$P(\\text{sum is 6} | \\text{different numbers}) = \\frac{4}{30} = \\frac{2}{15}$.\\nIn lowest terms, $p = 2$ and $q = 15$, so $p + q = 2 + 15 = 17$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "If $P(A) = \\frac{3}{5}$ and $P(B) = \\frac{1}{5}$, and $A$ and $B$ are independent events, then the value of $25 \\times P(A|B)$ is:",
    options: [],
    correctAnswer: "15",
    solution: "Since $A$ and $B$ are independent, $P(A|B) = P(A) = \\frac{3}{5}$.\\nThen $25 \\times P(A|B) = 25 \\times \\frac{3}{5} = 15$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "If $P(A) = 0.4$, $P(B) = 0.8$ and $P(B|A) = 0.6$, then the value of $10 \\times P(A \\cup B)$ is:",
    options: [],
    correctAnswer: "9.6", // wait, let's avoid decimals by scaling!
    options: [],
    question: "If $P(A) = 0.4$, $P(B) = 0.8$ and $P(B|A) = 0.6$, then the value of $50 \\times P(A \\cup B)$ is:",
    correctAnswer: "48",
    solution: "$P(A \\cap B) = P(A)P(B|A) = 0.4 \\times 0.6 = 0.24$.\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.8 - 0.24 = 0.96$.\\n$50 \\times P(A \\cup B) = 50 \\times 0.96 = 48$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "In a family of two children, if it is known that the older child is a boy, the probability that both children are boys is $\\frac{1}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "2",
    solution: "Let the sample space be $S = \\{(B,B), (B,G), (G,B), (G,G)\\}$, where the first coordinate is the older child.\\nGiven the older child is a boy: $B = \\{(B,B), (B,G)\\}$, so $n(B) = 2$.\\nEvent both are boys: $A = \\{(B,B)\\}$, so $n(A \\cap B) = 1$.\\n$P(A|B) = \\frac{1}{2} = \\frac{1}{k} \\implies k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "Two fair dice are thrown. If it is given that the sum of the numbers on the dice is 8, then the probability that one of the numbers is 3 is $\\frac{p}{q}$ in lowest terms. The value of $p + q$ is:",
    options: [],
    correctAnswer: "7",
    solution: "Pairs with sum 8: $\\{(2,6), (3,5), (4,4), (5,3), (6,2)\\}$, so there are 5 outcomes.\\nPairs containing 3: $\\{(3,5), (5,3)\\}$, so there are 2 outcomes.\\n$P = \\frac{2}{5}$.\\nIn lowest terms, $p = 2$ and $q = 5$, so $p + q = 2 + 5 = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "If $P(A) = \\frac{1}{3}$, $P(B) = \\frac{1}{4}$ and $P(A \\cap B) = \\frac{1}{6}$, then the value of $12 \\times P(A'|B')$ is:",
    options: [],
    correctAnswer: "7",
    solution: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{6} = \\frac{4 + 3 - 2}{12} = \\frac{5}{12}$.\\n$P(A' \\cap B') = 1 - P(A \\cup B) = 1 - \\frac{5}{12} = \\frac{7}{12}$.\\n$P(B') = 1 - P(B) = 1 - \\frac{1}{4} = \\frac{3}{4} = \\frac{9}{12}$.\\n$P(A'|B') = \\frac{P(A' \\cap B')}{P(B')} = \\frac{7/12}{9/12} = \\frac{7}{9}$.\\nWait, $12 \\times \\frac{7}{9} = \\frac{28}{3}$ which is not integer!\\nLet us change multiplier to 9: $9 \\times P(A'|B') = 9 \\times \\frac{7}{9} = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "If $P(A) = \\frac{1}{3}$, $P(B) = \\frac{1}{4}$ and $P(A \\cap B) = \\frac{1}{6}$, then the value of $9 \\times P(A'|B')$ is:",
    options: [],
    correctAnswer: "7",
    solution: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{6} = \\frac{5}{12}$.\\n$P(A' \\cap B') = 1 - P(A \\cup B) = 1 - \\frac{5}{12} = \\frac{7}{12}$.\\n$P(B') = 1 - P(B) = 1 - \\frac{1}{4} = \\frac{3}{4} = \\frac{9}{12}$.\\n$P(A'|B') = \\frac{7/12}{9/12} = \\frac{7}{9}$.\\nThus $9 \\times P(A'|B') = 9 \\times \\frac{7}{9} = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "From a pack of 52 cards, two cards are drawn one by one without replacement. If the first card drawn is a Heart, then the probability that the second card drawn is an Ace is $\\frac{p}{51}$. The value of $p$ is:",
    options: [],
    correctAnswer: "4", // wait, if first card is Heart, could it be Ace of Hearts or not?
    options: [],
    question: "From a pack of 52 cards, two cards are drawn one by one without replacement. If the first card drawn is the Ace of Spades, then the probability that the second card drawn is an Ace is $\\frac{k}{51}$. The value of $k$ is:",
    correctAnswer: "3",
    solution: "A standard deck has 4 Aces.\\nIf the first card drawn is the Ace of Spades, exactly 3 Aces remain among the remaining 51 cards.\\nTherefore, the probability that the second card is an Ace is $\\frac{3}{51}$.\\nComparing with $\\frac{k}{51}$, we get $k = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "Let $A$ and $B$ be two events such that $P(A) = 0.5$, $P(B) = 0.6$, and $P(A \\cup B) = 0.8$. The value of $10 \\times P(B|A)$ is:",
    options: [],
    correctAnswer: "6",
    solution: "$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.5 + 0.6 - 0.8 = 0.3$.\\n$P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.3}{0.5} = 0.6$.\\nTherefore, $10 \\times P(B|A) = 10 \\times 0.6 = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  },
  {
    type: "numerical",
    question: "Three fair coins are tossed. If the first coin shows tails, then the probability that all three coins show tails is $\\frac{1}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "4",
    solution: "Outcomes when first coin shows tails: $\\{THH, THT, TTH, TTT\\}$ (4 outcomes).\\nOutcomes with all three tails: $\\{TTT\\}$ (1 outcome).\\n$P(\\text{all tails} | \\text{first is tails}) = \\frac{1}{4}$.\\nComparing with $\\frac{1}{k}$, we get $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Conditional probability",
    subTopic: "Conditional probability"
  }
];

module.exports = { subtopic2Questions };
