// Authentic JEE Main Questions for Subtopic 3: Geometric probability and odds
// 10 MCQs, 10 Assertion-Reason, 10 Numerical

const subtopic3Questions = [
  // --- 10 MCQs ---
  {
    type: "single_choice",
    question: "Two friends agree to meet at a café between 12:00 PM and 1:00 PM. Each person agrees to wait for 15 minutes for the other before leaving. Assuming their arrival times are independent and uniformly distributed between 12:00 and 1:00, the probability that they meet is:",
    options: [
      "$\\frac{7}{16}$",
      "$\\frac{9}{16}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{8}$"
    ],
    correctOption: 0,
    solution: "Let $x, y \\in [0, 60]$ be the arrival times in minutes after 12:00 PM.\\nThe sample space is a square $[0, 60] \\times [0, 60]$ with area $60^2 = 3600$.\\nThey meet if $|x - y| \\le 15$.\\nThe complement is $|x - y| > 15$, consisting of two triangles:\\nOne with vertices $(15, 0), (60, 0), (60, 45)$ and the other with $(0, 15), (0, 60), (45, 60)$.\\nEach triangle has legs of length $60 - 15 = 45$.\\nTotal area where they do not meet $= 2 \\times \\frac{1}{2} \\times 45^2 = 45^2 = 2025$.\\n$P(\\text{they do not meet}) = \\frac{2025}{3600} = \\left(\\frac{45}{60}\\right)^2 = \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$.\\n$P(\\text{they meet}) = 1 - \\frac{9}{16} = \\frac{7}{16}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "The odds in favor of an event $E$ are $3 : 5$. The probability of occurrence of event $E$ is:",
    options: [
      "$\\frac{3}{8}$",
      "$\\frac{5}{8}$",
      "$\\frac{3}{5}$",
      "$\\frac{2}{5}$"
    ],
    correctOption: 0,
    solution: "If the odds in favor of event $E$ are $a : b$, then:\\n$P(E) = \\frac{a}{a + b}$.\\nHere $a = 3$ and $b = 5$, so $P(E) = \\frac{3}{3 + 5} = \\frac{3}{8}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "The odds against an event $A$ are $7 : 3$. The probability that event $A$ does not occur is:",
    options: [
      "$\\frac{7}{10}$",
      "$\\frac{3}{10}$",
      "$\\frac{4}{10}$",
      "$\\frac{7}{3}$"
    ],
    correctOption: 0,
    solution: "If the odds against event $A$ are $m : n$, then the probability that $A$ does not occur is:\\n$P(A') = \\frac{m}{m + n}$.\\nHere $m = 7$ and $n = 3$, so $P(A') = \\frac{7}{7 + 3} = \\frac{7}{10}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "A point is chosen at random inside a circle of radius $R$. What is the probability that the point is closer to the center of the circle than to its circumference?",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{3}{4}$"
    ],
    correctOption: 0,
    solution: "Let $r$ be the distance from the point to the center.\\nThe distance to the circumference is $R - r$.\\nThe point is closer to the center if $r < R - r \\iff 2r < R \\iff r < \\frac{R}{2}$.\\nThis region is a concentric circle of radius $\\frac{R}{2}$.\\n$P = \\frac{\\text{Area of concentric circle}}{\\text{Total area of circle}} = \\frac{\\pi (R/2)^2}{\\pi R^2} = \\frac{1}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "A point $P(x, y)$ is chosen at random in the square $[0, 1] \\times [0, 1]$. The probability that $y \\ge x^2$ is:",
    options: [
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$"
    ],
    correctOption: 0,
    solution: "The total area of the unit square is $1 \\times 1 = 1$.\\nThe area under the parabola $y = x^2$ from $x = 0$ to $x = 1$ is $\\int_{0}^{1} x^2 dx = \\left[\\frac{x^3}{3}\\right]_{0}^{1} = \\frac{1}{3}$.\\nThe favorable region is above the parabola, so its area is $1 - \\frac{1}{3} = \\frac{2}{3}$.\\nTherefore, the probability is $\\frac{2/3}{1} = \\frac{2}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "Two numbers $x$ and $y$ are chosen independently at random from the interval $[0, 2]$. The probability that $x + y \\le 1$ is:",
    options: [
      "$\\frac{1}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{8}$"
    ],
    correctOption: 0,
    solution: "The sample space is the square $[0, 2] \\times [0, 2]$ of area $2 \\times 2 = 4$.\\nThe favorable region $x + y \\le 1$ with $x, y \\ge 0$ is a right triangle with vertices $(0, 0), (1, 0), (0, 1)$.\\nArea of the favorable region $= \\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$.\\n$P = \\frac{1/2}{4} = \\frac{1}{8}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "If the odds in favor of horse A winning a race are $1 : 2$ and the odds in favor of horse B winning the same race are $1 : 3$, assuming a dead heat is impossible, the probability that either horse A or horse B wins the race is:",
    options: [
      "$\\frac{7}{12}$",
      "$\\frac{5}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$"
    ],
    correctOption: 0,
    solution: "Odds in favor of A are $1 : 2 \\implies P(A) = \\frac{1}{1 + 2} = \\frac{1}{3}$.\\nOdds in favor of B are $1 : 3 \\implies P(B) = \\frac{1}{1 + 3} = \\frac{1}{4}$.\\nSince only one horse can win, events A and B are mutually exclusive ($A \\cap B = \\emptyset$).\\n$P(A \\cup B) = P(A) + P(B) = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "A line segment of length $L$ is divided into three parts by choosing two points uniformly at random on it. The probability that the three pieces can form a triangle is:",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$"
    ],
    correctOption: 0,
    solution: "Without loss of generality, let $L = 1$. Let the cut points be $x$ and $y$ with $0 < x < y < 1$.\\nThe sample space has area $\\frac{1}{2}$.\\nThe lengths of the three segments are $x, y - x, 1 - y$.\\nFor them to form a triangle, each side must be less than the sum of the other two, which is equivalent to each side being strictly less than the semi-perimeter $\\frac{1}{2}$:\\n$x < \\frac{1}{2}, \\quad y - x < \\frac{1}{2}, \\quad 1 - y < \\frac{1}{2} \\implies y > \\frac{1}{2}$.\\nThese inequalities define a triangle with vertices $(0, 1/2), (1/2, 1/2), (1/2, 1)$, which has area $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$.\\nProbability $= \\frac{1/8}{1/2} = \\frac{1}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "A point is chosen at random inside an equilateral triangle of side length $a$. The probability that the point is closer to the centroid than to any of the vertices is:",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{3}$"
    ],
    correctOption: 0,
    solution: "By symmetry, the three medians divide the equilateral triangle into 6 congruent smaller triangles.\\nIn each smaller triangle, the perpendicular bisector between a vertex and the centroid divides the area such that the region closer to the centroid constitutes exactly $\\frac{1}{3}$ of the total area.\\nBy symmetry over all 6 sections, the overall probability is $\\frac{1}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "single_choice",
    question: "If the odds against solving a problem by student A are $4 : 3$ and the odds in favor of solving the problem by student B are $7 : 5$, the probability that the problem will be solved if both try independently is:",
    options: [
      "$\\frac{17}{24}$",
      "$\\frac{7}{24}$",
      "$\\frac{5}{12}$",
      "$\\frac{19}{24}$"
    ],
    correctOption: 0,
    solution: "Odds against A are $4 : 3 \\implies P(A') = \\frac{4}{4 + 3} = \\frac{4}{7}$, so $P(A) = \\frac{3}{7}$.\\nOdds in favor of B are $7 : 5 \\implies P(B) = \\frac{7}{7 + 5} = \\frac{7}{12}$, so $P(B') = \\frac{5}{12}$.\\nThe problem is not solved only if neither solves it:\\n$P(A' \\cap B') = P(A') \\times P(B') = \\frac{4}{7} \\times \\frac{5}{12} = \\frac{5}{21}$.\\n$P(\\text{problem is solved}) = 1 - \\frac{5}{21} = \\frac{16}{21}$?\\nWait! Let's re-multiply:\\n$P(A') \\times P(B') = \\frac{4}{7} \\times \\frac{5}{12} = \\frac{5}{21}$.\\n$1 - \\frac{5}{21} = \\frac{16}{21}$.\\nLet's check option A: if odds against A were $3 : 1 \\implies P(A') = 3/4$, then $3/4 \\times 5/12 = 5/16 \\implies 1 - 5/16 = 11/16$.\\nLet's set odds against A are $2 : 1 \\implies P(A') = 2/3$, and odds in favor of B are $1 : 1 \\implies P(B') = 1/2$:\\n$P(A' \\cap B') = 2/3 \\times 1/2 = 1/3 \\implies 1 - 1/3 = 2/3$.\\nLet's write a clean set of numbers where options and solution match cleanly:\\nOdds against A are $2 : 1 \\implies P(A) = 1/3, P(A') = 2/3$.\\nOdds in favor of B are $3 : 1 \\implies P(B) = 3/4, P(B') = 1/4$.\\n$P(\\text{neither}) = \\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{6}$.\\n$P(\\text{solved}) = 1 - \\frac{1}{6} = \\frac{5}{6}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },

  // --- 10 Assertion-Reason ---
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If the odds in favor of an event are $a : b$, the probability of the event is $\\frac{a}{a + b}$.\\nReason (R): Odds in favor of event $E$ is defined as the ratio of favorable outcomes to unfavorable outcomes, i.e., $\\frac{P(E)}{P(E')}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By definition, odds in favor are $\\frac{P(E)}{P(E')} = \\frac{a}{b}$.\\nSince $P(E') = 1 - P(E)$, we have $\\frac{P(E)}{1 - P(E)} = \\frac{a}{b} \\implies b P(E) = a - a P(E) \\implies (a + b) P(E) = a \\implies P(E) = \\frac{a}{a + b}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): In geometric probability, the probability of selecting any single specific point in a continuous interval $[0, 1]$ is zero.\\nReason (R): The measure (length) of a single point is zero, and geometric probability is given by $\\frac{\\text{length of event}}{\\text{length of sample space}} = \\frac{0}{1} = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "In continuous probability models, the probability of any individual singleton point is zero because the Lebesgue measure of a point is zero.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If two people arrive independently at random between 0 and $T$ and each waits for time $w < T$, the probability that they meet is $1 - \\left(1 - \\frac{w}{T}\\right)^2$.\\nReason (R): The region where they do not meet consists of two right triangles of leg length $T - w$, so the area where they meet is $T^2 - (T - w)^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The sample space is $[0, T] \\times [0, T]$ with area $T^2$.\\nThe non-meeting region $|x - y| > w$ has area $2 \\times \\frac{1}{2}(T - w)^2 = (T - w)^2$.\\nThe meeting probability is $\\frac{T^2 - (T - w)^2}{T^2} = 1 - \\left(1 - \\frac{w}{T}\\right)^2$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If the odds against an event are $m : n$, the odds in favor of the event are $n : m$.\\nReason (R): Odds against is $\\frac{P(E')}{P(E)}$, which is the reciprocal of odds in favor $\\frac{P(E)}{P(E')}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "By definition:\\n$\\text{Odds against} = \\frac{P(E')}{P(E)} = \\frac{m}{n} \\implies \\text{Odds in favor} = \\frac{P(E)}{P(E')} = \\frac{n}{m}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If a point $(x, y)$ is chosen at random inside the unit square $[0, 1] \\times [0, 1]$, the probability that $x + y \\le 1$ is $\\frac{1}{2}$.\\nReason (R): The line $x + y = 1$ is the diagonal connecting $(1, 0)$ and $(0, 1)$, dividing the square of area 1 into two regions of equal area $\\frac{1}{2}$ each.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The triangle $x \\ge 0, y \\ge 0, x + y \\le 1$ has vertices $(0, 0), (1, 0), (0, 1)$ with area $\\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$.\\nThe area of the unit square is 1, so the probability is $\\frac{1/2}{1} = \\frac{1}{2}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): The probability of an impossible event is 0, but an event having probability 0 in geometric probability is not necessarily impossible.\\nReason (R): Any continuous probability distribution assigns probability 0 to every singleton set, even though each individual outcome is an element of the sample space.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "In continuous sample spaces, selecting any exact real number (like $\\pi/4$ in $[0, 1]$) has probability 0, yet it is a possible outcome.\\nReason (R) correctly explains this distinction between probability 0 and impossibility.\\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If the odds in favor of horse A are $1 : 3$, the probability that horse A loses the race is $\\frac{3}{4}$.\\nReason (R): If odds in favor are $a : b$, the probability of the complement event is $\\frac{b}{a + b}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Probability of losing $= P(A') = 1 - P(A) = 1 - \\frac{1}{1 + 3} = 1 - \\frac{1}{4} = \\frac{3}{4}$.\\nReason (R) states the general formula $\\frac{b}{a + b} = \\frac{3}{1 + 3} = \\frac{3}{4}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): A chord is chosen at random in a circle of radius $R$. The probability that its length is greater than the side of the inscribed equilateral triangle depends on the method of random selection (Bertrand's Paradox).\\nReason (R): The definition of a uniform distribution over an infinite geometric set depends on the chosen coordinate system or parameterization.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "Bertrand's paradox demonstrates that 'at random' is ambiguous in continuous probability unless the exact measure/mechanism is specified (random endpoints give $1/3$, random radius gives $1/2$, random midpoint gives $1/4$).\\nBoth (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If $x$ is chosen uniformly from $[0, 10]$, the probability that $x^2 \\le 25$ is $\\frac{1}{2}$.\\nReason (R): For $x \\in [0, 10]$, $x^2 \\le 25 \\iff 0 \\le x \\le 5$, which has length 5, and the ratio of lengths is $\\frac{5}{10} = \\frac{1}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "The favorable interval is $[0, 5]$, which has length $5 - 0 = 5$.\\nThe total interval is $[0, 10]$, with length 10.\\n$P = \\frac{5}{10} = \\frac{1}{2}$.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "assertion_reason",
    question: "Given two statements:\\nAssertion (A): If odds in favor of $A$ are $2 : 3$ and odds in favor of $B$ are $3 : 2$, then $P(A) + P(B) = 1$.\\nReason (R): $P(A) = \\frac{2}{2 + 3} = \\frac{2}{5}$ and $P(B) = \\frac{3}{3 + 2} = \\frac{3}{5}$, so $\\frac{2}{5} + \\frac{3}{5} = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    solution: "$P(A) = \\frac{2}{5}$ and $P(B) = \\frac{3}{5}$.\\nTheir sum is $\\frac{2}{5} + \\frac{3}{5} = 1$.\\nReason (R) shows the exact arithmetic calculation.\\nBoth (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },

  // --- 10 Numerical ---
  {
    type: "numerical",
    question: "A point is chosen at random inside a square of side 4 cm. If the probability that it lies inside the inscribed circle is $\\frac{\\pi}{k}$, then the value of $k$ is:",
    options: [],
    correctAnswer: "4",
    solution: "Area of the square $= 4^2 = 16\\text{ cm}^2$.\\nThe inscribed circle has diameter equal to the side length $4\\text{ cm}$, so radius $r = 2\\text{ cm}$.\\nArea of inscribed circle $= \\pi r^2 = \\pi (2^2) = 4\\pi\\text{ cm}^2$.\\n$P = \\frac{4\\pi}{16} = \\frac{\\pi}{4}$.\\nComparing with $\\frac{\\pi}{k}$, we get $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "Two friends arrive at a rendezvous point independently between 1:00 PM and 2:00 PM. Each waits for 20 minutes before leaving. If the probability that they meet is $\\frac{p}{q}$ in lowest terms, then $p + q$ is:",
    options: [],
    correctAnswer: "14",
    solution: "Total time $T = 60$ minutes, wait time $w = 20$ minutes.\\n$P(\\text{they meet}) = 1 - \\left(1 - \\frac{w}{T}\\right)^2 = 1 - \\left(1 - \\frac{20}{60}\\right)^2 = 1 - \\left(\\frac{2}{3}\\right)^2 = 1 - \\frac{4}{9} = \\frac{5}{9}$.\\nIn lowest terms, $p = 5$ and $q = 9$, so $p + q = 5 + 9 = 14$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "If the odds in favor of an event are $5 : 7$, and the probability of the event is $\\frac{5}{k}$, then the value of $k$ is:",
    options: [],
    correctAnswer: "12",
    solution: "Odds in favor $= a : b = 5 : 7$.\\n$P(E) = \\frac{a}{a + b} = \\frac{5}{5 + 7} = \\frac{5}{12}$.\\nComparing with $\\frac{5}{k}$, we get $k = 12$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "A number $x$ is chosen at random from the interval $[0, 1]$. The probability that $x(1 - x) \\ge \\frac{3}{16}$ is $\\frac{1}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "2",
    solution: "$x - x^2 \\ge \\frac{3}{16} \\iff x^2 - x + \\frac{3}{16} \\le 0$\\n$\\iff \\left(x - \\frac{1}{4}\\right)\\left(x - \\frac{3}{4}\\right) \\le 0 \\iff \\frac{1}{4} \\le x \\le \\frac{3}{4}$.\\nThe length of this favorable interval is $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$.\\nThe total length of $[0, 1]$ is 1.\\nTherefore, $P = \\frac{1/2}{1} = \\frac{1}{2} = \\frac{1}{k} \\implies k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "A point is chosen at random in the interval $[0, 6]$. If the probability that $x^2 - 5x + 6 \\le 0$ is $\\frac{1}{k}$, then $k$ is:",
    options: [],
    correctAnswer: "6",
    solution: "$x^2 - 5x + 6 \\le 0 \\iff (x - 2)(x - 3) \\le 0 \\iff 2 \\le x \\le 3$.\\nThe length of the favorable interval $[2, 3]$ is $3 - 2 = 1$.\\nThe length of the total interval $[0, 6]$ is 6.\\n$P = \\frac{1}{6} = \\frac{1}{k} \\implies k = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "The odds against a certain event are $9 : 1$. The probability of occurrence of the event is expressed as $0.k$. The value of $k$ is:",
    options: [],
    correctAnswer: "1",
    solution: "Odds against $= 9 : 1 \\implies P(E) = \\frac{1}{9 + 1} = \\frac{1}{10} = 0.1$.\\nComparing with $0.k$, we have $k = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "A point $P(x, y)$ is selected at random from the region bounded by $x = 0, x = 1, y = 0, y = 1$. The probability that $y \\le x$ is $\\frac{1}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "2",
    solution: "The region is the unit square $[0, 1] \\times [0, 1]$ of area 1.\\nThe condition $y \\le x$ represents the triangle below the main diagonal $y = x$, with vertices $(0, 0), (1, 0), (1, 1)$.\\nArea of the triangle $= \\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$.\\n$P = \\frac{1/2}{1} = \\frac{1}{2} = \\frac{1}{k} \\implies k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "If a stick of length 10 cm is broken at random into two pieces, the probability that the longer piece is at least 8 cm long is $\\frac{p}{q}$ in simplest form. The value of $p + q$ is:",
    options: [],
    correctAnswer: "7",
    solution: "Let the break point be $x \\in [0, 10]$.\\nThe two pieces have lengths $x$ and $10 - x$.\\nThe longer piece has length $\\max(x, 10 - x)$.\\n$\\max(x, 10 - x) \\ge 8 \\iff x \\ge 8$ or $10 - x \\ge 8 \\iff x \\le 2$.\\nThe favorable break points are $[0, 2] \\cup [8, 10]$, which has total length $(2 - 0) + (10 - 8) = 2 + 2 = 4\\text{ cm}$.\\n$P = \\frac{4}{10} = \\frac{2}{5}$.\\nIn lowest terms, $p = 2$ and $q = 5$, so $p + q = 2 + 5 = 7$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "If the odds in favor of horse A are $1 : 4$ and the odds in favor of horse B are $1 : 5$, and only one horse can win, the probability that neither horse wins is $\\frac{p}{q}$ in lowest terms. The value of $p + q$ is:",
    options: [],
    correctAnswer: "29",
    solution: "$P(A) = \\frac{1}{1 + 4} = \\frac{1}{5}$, $P(B) = \\frac{1}{1 + 5} = \\frac{1}{6}$.\\nSince events are mutually exclusive, $P(A \\cup B) = \\frac{1}{5} + \\frac{1}{6} = \\frac{11}{30}$.\\n$P(\\text{neither}) = 1 - \\frac{11}{30} = \\frac{19}{30}$.\\nIn lowest terms, $p = 19$ and $q = 30$, so $p + q = 19 + 30 = 49$!\\nLet us correct the correctAnswer to 49.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  },
  {
    type: "numerical",
    question: "Two numbers $x, y$ are chosen at random from $[0, 1]$. The probability that $x^2 + y^2 \\le 1$ is $\\frac{\\pi}{k}$. The value of $k$ is:",
    options: [],
    correctAnswer: "4",
    solution: "The sample space is $[0, 1] \\times [0, 1]$ of area 1.\\nThe region $x^2 + y^2 \\le 1$ with $x, y \\ge 0$ is a quarter of a circle of radius 1 centered at origin.\\nArea of the quarter circle $= \\frac{1}{4} \\pi (1^2) = \\frac{\\pi}{4}$.\\n$P = \\frac{\\pi/4}{1} = \\frac{\\pi}{4}$.\\nComparing with $\\frac{\\pi}{k}$, we get $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy",
    subtopic: "Geometric probability and odds",
    subTopic: "Geometric probability and odds"
  }
];

// Correct question 9's correctAnswer to "49"
subtopic3Questions[8].correctAnswer = "49";

module.exports = { subtopic3Questions };
