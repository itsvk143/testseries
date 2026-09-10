// Authentic JEE Main Questions for Subtopic 4: Independent events
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "A problem in mathematics is given to three students $A, B, C$ whose chances of solving it are $\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}$ respectively. If they all try independently, the probability that the problem is solved is:",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$"
    ],
    correctOption: 0,
    solution: "The problem is solved if at least one of the students solves it.\\n$P(\\text{solved}) = 1 - P(\\text{none solves}) = 1 - P(A' \\cap B' \\cap C')$.\\nSince the attempts are independent:\\n$P(A' \\cap B' \\cap C') = P(A')P(B')P(C') = \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right) = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{4}$.\\nTherefore, $P(\\text{solved}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "Let $A$ and $B$ be two independent events such that $P(A) = 0.3$ and $P(B) = 0.6$. The probability that exactly one of $A$ and $B$ occurs is:",
    options: [
      "$0.54$",
      "$0.46$",
      "$0.18$",
      "$0.72$"
    ],
    correctOption: 0,
    solution: "Probability that exactly one of $A$ and $B$ occurs is:\\n$P(\\text{exactly one}) = P(A \\cap B') + P(A' \\cap B)$.\\nSince $A$ and $B$ are independent, $A$ and $B'$ are independent, and $A'$ and $B$ are independent.\\n$= P(A)P(B') + P(A')P(B) = 0.3(1 - 0.6) + (1 - 0.3)(0.6) = 0.3(0.4) + 0.7(0.6) = 0.12 + 0.42 = 0.54$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "If $A$ and $B$ are two independent events such that $P(A \\cup B) = 0.8$ and $P(A) = 0.3$, then $P(B)$ is equal to:",
    options: [
      "$\\frac{5}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{3}{7}$",
      "$\\frac{4}{7}$"
    ],
    correctOption: 0,
    solution: "For independent events:\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = P(A) + P(B) - P(A)P(B)$\\n$0.8 = 0.3 + P(B)(1 - 0.3) = 0.3 + 0.7 P(B)$\\n$0.7 P(B) = 0.8 - 0.3 = 0.5 \\implies P(B) = \\frac{0.5}{0.7} = \\frac{5}{7}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "The probability that a missile hits a target is $0.2$. What is the minimum number of missiles that must be fired independently so that the probability of hitting the target at least once is greater than $0.8$?",
    options: [
      "$8$",
      "$7$",
      "$9$",
      "$6$"
    ],
    correctOption: 0,
    solution: "Let $n$ be the number of missiles fired.\\n$P(\\text{hits at least once}) = 1 - (1 - 0.2)^n = 1 - (0.8)^n$.\\nWe require $1 - (0.8)^n > 0.8 \\iff (0.8)^n < 0.2$.\\nTaking logarithms (base 10):\\n$n \\log_{10}(0.8) < \\log_{10}(0.2) \\implies n (\\log 8 - 1) < \\log 2 - 1$\\n$n (3(0.3010) - 1) < 0.3010 - 1 \\implies n (0.9030 - 1) < -0.6990 \\implies -0.0970 n < -0.6990$\\n$n > \\frac{0.6990}{0.0970} \\approx 7.2$.\\nSince $n$ must be an integer, the minimum number of missiles is $n = 8$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "Let $A, B, C$ be three mutually independent events with $P(A) = p_1, P(B) = p_2, P(C) = p_3$. The probability that at least two of the three events occur is:",
    options: [
      "$p_1 p_2 + p_2 p_3 + p_3 p_1 - 2 p_1 p_2 p_3$",
      "$p_1 p_2 + p_2 p_3 + p_3 p_1 - 3 p_1 p_2 p_3$",
      "$p_1 p_2 + p_2 p_3 + p_3 p_1 - p_1 p_2 p_3$",
      "$p_1 p_2 p_3$"
    ],
    correctOption: 0,
    solution: "The event that at least two occur is $(A \\cap B) \\cup (B \\cap C) \\cup (C \\cap A)$.\\nUsing the inclusion-exclusion principle:\\n$P((A \\cap B) \\cup (B \\cap C) \\cup (C \\cap A)) = P(A \\cap B) + P(B \\cap C) + P(C \\cap A) - 2 P(A \\cap B \\cap C)$\\n$= p_1 p_2 + p_2 p_3 + p_3 p_1 - 2 p_1 p_2 p_3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "If $A$ and $B$ are independent events such that $P(A) > 0$ and $P(B) > 0$, which of the following statements is always FALSE?",
    options: [
      "$A$ and $B$ are mutually exclusive",
      "$P(A|B) = P(A)$",
      "$P(A \\cap B) = P(A)P(B)$",
      "$P(A' \\cap B') = P(A')P(B')$"
    ],
    correctOption: 0,
    solution: "For independent events with non-zero probabilities, $P(A \\cap B) = P(A)P(B) > 0$.\\nIf $A$ and $B$ were mutually exclusive, we would have $P(A \\cap B) = 0$, a contradiction.\\nHence, two independent events with non-zero probabilities can NEVER be mutually exclusive.\\nThus, option A is always false.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "Two persons $A$ and $B$ toss a fair coin alternatively till one of them gets a head and wins the game. If $A$ starts the game, the probability that $A$ wins the game is:",
    options: [
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$"
    ],
    correctOption: 0,
    solution: "Let $H$ denote head ($P(H) = 1/2$) and $T$ denote tail ($P(T) = 1/2$).\\n$A$ wins if he gets a head on the 1st toss, or 3rd toss (after $T_1 T_2$), or 5th toss, and so on.\\n$P(A \\text{ wins}) = P(H) + P(TTH) + P(TTTTH) + \\dots$\\n$= \\frac{1}{2} + \\left(\\frac{1}{2}\\right)^3 + \\left(\\frac{1}{2}\\right)^5 + \\dots = \\frac{1/2}{1 - (1/2)^2} = \\frac{1/2}{1 - 1/4} = \\frac{1/2}{3/4} = \\frac{2}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "If $A$ and $B$ are independent events such that $P(A \\cap B) = \\frac{1}{6}$ and $P(A' \\cap B') = \\frac{1}{3}$, then $P(A)$ and $P(B)$ can be:",
    options: [
      "$\\frac{1}{2}$ and $\\frac{1}{3}$",
      "$\\frac{1}{4}$ and $\\frac{2}{3}$",
      "$\\frac{1}{6}$ and $1$",
      "$\\frac{1}{3}$ and $\\frac{1}{3}$"
    ],
    correctOption: 0,
    solution: "Let $P(A) = x$ and $P(B) = y$.\\nSince $A, B$ are independent: $xy = \\frac{1}{6}$.\\nAlso $P(A' \\cap B') = (1 - x)(1 - y) = 1 - (x + y) + xy = \\frac{1}{3}$.\\n$1 - (x + y) + \\frac{1}{6} = \\frac{1}{3} \\implies x + y = 1 + \\frac{1}{6} - \\frac{1}{3} = \\frac{5}{6}$.\\nThe quadratic equation with roots $x, y$ is $t^2 - \\frac{5}{6}t + \\frac{1}{6} = 0 \\implies 6t^2 - 5t + 1 = 0 \\implies (2t - 1)(3t - 1) = 0$.\\nThus $t = \\frac{1}{2}$ or $t = \\frac{1}{3}$.\\nSo $P(A)$ and $P(B)$ are $\\frac{1}{2}$ and $\\frac{1}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "A die is thrown three times. What is the probability of getting an odd number at least once?",
    options: [
      "$\\frac{7}{8}$",
      "$\\frac{1}{8}$",
      "$\\frac{3}{4}$",
      "$\\frac{5}{8}$"
    ],
    correctOption: 0,
    solution: "$P(\\text{odd at least once}) = 1 - P(\\text{no odd number in 3 throws})$.\\n$P(\\text{even on one throw}) = \\frac{3}{6} = \\frac{1}{2}$.\\nSince throws are independent, $P(\\text{all three even}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.\\n$P(\\text{odd at least once}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "single_choice",
    question: "Let $A$ and $B$ be two events such that $P(A) = 0.4, P(B) = p$, and $P(A \\cup B) = 0.6$. If $A$ and $B$ are independent, then the value of $p$ is:",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{4}$"
    ],
    correctOption: 0,
    solution: "For independent events:\\n$P(A \\cup B) = P(A) + P(B) - P(A)P(B)$\\n$0.6 = 0.4 + p - 0.4p = 0.4 + 0.6p$\\n$0.6p = 0.6 - 0.4 = 0.2 \\implies p = \\frac{0.2}{0.6} = \\frac{1}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $A$ and $B$ are independent events, then $A'$ and $B'$ are also independent.\\nReason (R): $P(A' \\cap B') = 1 - P(A \\cup B) = 1 - [P(A) + P(B) - P(A)P(B)] = (1 - P(A))(1 - P(B)) = P(A')P(B')$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The algebraic identity in Reason (R) proves that $P(A' \\cap B') = P(A')P(B')$, which establishes independence of complements.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): Pairwise independence of three events $A, B, C$ does not necessarily imply their mutual independence.\\nReason (R): Mutual independence requires $P(A \\cap B \\cap C) = P(A)P(B)P(C)$ in addition to the pairwise conditions $P(A \\cap B) = P(A)P(B)$, $P(B \\cap C) = P(B)P(C)$, and $P(C \\cap A) = P(C)P(A)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Pairwise independence satisfies only the two-way products.\\nMutual independence additionally mandates the 3-way product condition $P(A \\cap B \\cap C) = P(A)P(B)P(C)$ (as exemplified by Bernstein's example).\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A) = 0$, then event $A$ is independent of every other event $B$ in the sample space.\\nReason (R): Since $A \\cap B \\subset A$, $0 \\le P(A \\cap B) \\le P(A) = 0 \\implies P(A \\cap B) = 0 = 0 \\times P(B) = P(A)P(B)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Any event with probability 0 trivially satisfies the product definition $P(A \\cap B) = P(A)P(B) = 0$ for every event $B$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): Two events $A$ and $B$ with non-zero probabilities can never be both independent and mutually exclusive.\\nReason (R): For mutually exclusive events $P(A \\cap B) = 0$, whereas for independent events with non-zero probabilities $P(A \\cap B) = P(A)P(B) > 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Reason (R) shows that $P(A \\cap B)$ must simultaneously be 0 and strictly positive, which is impossible.\\nTherefore, both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $A$ and $B$ are independent events, then $P(A|B') = P(A)$.\\nReason (R): Independence of $A$ and $B$ implies that $A$ and $B'$ are also independent.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Since $A$ and $B'$ are independent (Reason R), $P(A|B') = \\frac{P(A \\cap B')}{P(B')} = \\frac{P(A)P(B')}{P(B')} = P(A)$.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If a fair coin is tossed 10 times, the event that the 10th toss is a head is independent of the outcomes of the first 9 tosses.\\nReason (R): The coin has no memory of past outcomes, making each toss physically and statistically independent.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Each toss of a fair coin is an independent trial with constant probability $P(H) = 1/2$, completely unaffected by prior results (Gambler's fallacy).\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $A$ and $B$ are independent events, then $P(A \\cup B) = 1 - P(A')P(B')$.\\nReason (R): By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$, and for independent events $P(A' \\cap B') = P(A')P(B')$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(A \\cup B) = 1 - P((A \\cup B)') = 1 - P(A' \\cap B')$.\\nSince $A$ and $B$ are independent, $A'$ and $B'$ are independent, so $P(A' \\cap B') = P(A')P(B')$.\\nThus $P(A \\cup B) = 1 - P(A')P(B')$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A) = 1$, then $A$ is independent of any event $B$.\\nReason (R): If $P(A) = 1$, then $P(A') = 0$, so $P(A' \\cap B) = 0 \\implies P(B) - P(A \\cap B) = 0 \\implies P(A \\cap B) = P(B) = 1 \\times P(B) = P(A)P(B)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "An almost sure event ($P(A) = 1$) satisfies $P(A \\cap B) = P(B) = P(A)P(B)$ for all $B$, making it independent of any event.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $A, B, C$ are independent events, then $A$ and $B \\cup C$ are also independent.\\nReason (R): $P(A \\cap (B \\cup C)) = P((A \\cap B) \\cup (A \\cap C)) = P(A)P(B) + P(A)P(C) - P(A)P(B)P(C) = P(A)[P(B) + P(C) - P(B \\cap C)] = P(A)P(B \\cup C)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The algebraic expansion in Reason (R) directly demonstrates that $P(A \\cap (B \\cup C)) = P(A)P(B \\cup C)$, proving independence.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $P(A \\cap B) = P(A)P(B)$, then $P(A \\cap B') = P(A) - P(A)P(B)$.\\nReason (R): For any events $A$ and $B$, $A = (A \\cap B) \\cup (A \\cap B')$ is a union of disjoint sets, so $P(A) = P(A \\cap B) + P(A \\cap B')$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(A \\cap B') = P(A) - P(A \\cap B)$. Substituting $P(A \\cap B) = P(A)P(B)$ gives $P(A) - P(A)P(B) = P(A)(1 - P(B)) = P(A)P(B')$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "Two independent events $A$ and $B$ have probabilities $P(A) = \\frac{1}{3}$ and $P(B) = \\frac{1}{6}$. The value of $36 \\times P(A \\cup B)$ is:",
    options: [],
    correctAnswer: "16",
    solution: "$P(A \\cap B) = P(A)P(B) = \\frac{1}{3} \\times \\frac{1}{6} = \\frac{1}{18}$.\\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{3} + \\frac{1}{6} - \\frac{1}{18} = \\frac{6 + 3 - 1}{18} = \\frac{8}{18} = \\frac{4}{9}$.\\n$36 \\times P(A \\cup B) = 36 \\times \\frac{4}{9} = 16$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "A target is to be destroyed. The probability that an artillery shell hits the target is $\\frac{1}{3}$. If the shells are fired independently, the minimum number of shells required so that the probability of hitting the target at least once is at least $\\frac{8}{9}$ is:",
    options: [],
    correctAnswer: "6", // wait: 1 - (2/3)^n >= 8/9 => (2/3)^n <= 1/9 => n=6? (2/3)^5 = 32/243 ~ 0.131 > 1/9=0.111. (2/3)^6 = 64/729 ~ 0.0877 < 1/9. Yes, n=6!
    solution: "$P(\\text{at least one hit}) = 1 - \\left(1 - \\frac{1}{3}\\right)^n = 1 - \\left(\\frac{2}{3}\\right)^n \\ge \\frac{8}{9}$\\n$\\implies \\left(\\frac{2}{3}\\right)^n \\le \\frac{1}{9}$.\\nFor $n = 5$: $\\left(\\frac{2}{3}\\right)^5 = \\frac{32}{243} \\approx 0.1317 > \\frac{1}{9} \\approx 0.1111$.\\nFor $n = 6$: $\\left(\\frac{2}{3}\\right)^6 = \\frac{64}{729} \\approx 0.0878 \\le \\frac{1}{9}$.\\nTherefore, the minimum number of shells required is $6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "Three independent events $A, B, C$ have probabilities $P(A) = \\frac{1}{2}, P(B) = \\frac{1}{3}, P(C) = \\frac{1}{4}$. The value of $24 \\times P(A \\cap B \\cap C)$ is:",
    options: [],
    correctAnswer: "1",
    solution: "Since $A, B, C$ are independent:\\n$P(A \\cap B \\cap C) = P(A)P(B)P(C) = \\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{24}$.\\nTherefore, $24 \\times P(A \\cap B \\cap C) = 24 \\times \\frac{1}{24} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "If $A$ and $B$ are independent events such that $P(A) = 0.5$ and $P(A \\cup B) = 0.8$, then the value of $10 \\times P(B)$ is:",
    options: [],
    correctAnswer: "6",
    solution: "$P(A \\cup B) = P(A) + P(B) - P(A)P(B)$\\n$0.8 = 0.5 + P(B)(1 - 0.5) = 0.5 + 0.5 P(B)$\\n$0.5 P(B) = 0.3 \\implies P(B) = \\frac{0.3}{0.5} = 0.6$.\\nTherefore, $10 \\times P(B) = 10 \\times 0.6 = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "A fair coin is tossed independently until a head appears. If the probability that the coin has to be tossed at most 4 times is $\\frac{k}{16}$, then the value of $k$ is:",
    options: [],
    correctAnswer: "15",
    solution: "$P(\\text{at most 4 tosses}) = 1 - P(\\text{no head in first 4 tosses}) = 1 - \\left(\\frac{1}{2}\\right)^4 = 1 - \\frac{1}{16} = \\frac{15}{16}$.\\nComparing with $\\frac{k}{16}$, we get $k = 15$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "The probability of student A solving a question is $\\frac{2}{3}$ and that of student B solving it is $\\frac{3}{5}$. If both try independently, the probability that the question is solved by exactly one of them is $\\frac{p}{15}$. The value of $p$ is:",
    options: [],
    correctAnswer: "7",
    solution: "$P(\\text{exactly one}) = P(A)P(B') + P(A')P(B) = \\left(\\frac{2}{3} \\times \\frac{2}{5}\\right) + \\left(\\frac{1}{3} \\times \\frac{3}{5}\\right) = \\frac{4}{15} + \\frac{3}{15} = \\frac{7}{15}$.\\nComparing with $\\frac{p}{15}$, we get $p = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "If $A$ and $B$ are independent events such that $P(A) = 0.2$ and $P(B) = 0.5$, then the value of $100 \\times P(A' \\cap B')$ is:",
    options: [],
    correctAnswer: "40",
    solution: "Since $A$ and $B$ are independent, $A'$ and $B'$ are independent.\\n$P(A' \\cap B') = P(A')P(B') = (1 - 0.2)(1 - 0.5) = 0.8 \\times 0.5 = 0.40$.\\n$100 \\times P(A' \\cap B') = 100 \\times 0.40 = 40$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "Three dice are thrown simultaneously. If the throws are independent, the probability that no die shows a 6 is $\\frac{125}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "216",
    solution: "For each die, $P(\\text{not 6}) = \\frac{5}{6}$.\\nSince the three dice are independent, $P(\\text{no 6}) = \\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$.\\nComparing with $\\frac{125}{k}$, we get $k = 216$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "If $A, B, C$ are independent events with $P(A) = P(B) = P(C) = \\frac{1}{2}$, then the value of $8 \\times P(A \\cup B \\cup C)$ is:",
    options: [],
    correctAnswer: "7",
    solution: "$P(A \\cup B \\cup C) = 1 - P(A' \\cap B' \\cap C') = 1 - P(A')P(B')P(C') = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$.\\nTherefore, $8 \\times P(A \\cup B \\cup C) = 8 \\times \\frac{7}{8} = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  },
  {
    type: "numerical",
    question: "Two independent events $A$ and $B$ satisfy $P(A) = \\frac{1}{4}$ and $P(B) = \\frac{1}{2}$. The value of $16 \\times P(A' \\cap B)$ is:",
    options: [],
    correctAnswer: "6",
    solution: "$P(A' \\cap B) = P(A')P(B) = \\left(1 - \\frac{1}{4}\\right) \\times \\frac{1}{2} = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$.\\n$16 \\times P(A' \\cap B) = 16 \\times \\frac{3}{8} = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Independent events",
    subTopic: "Independent events"
  }
];

module.exports = { subtopic4Questions };
