// scripts/data_jee_pandc_subtopic7.js
// Subtopic 7: Derangements and grid/distribution problems (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic7Questions = [
  // --- 10 MCQs ---
  {
    question: "A person puts 5 letters into 5 addressed envelopes. The number of ways in which all 5 letters go into wrong envelopes is:",
    options: [
      "44",
      "9",
      "119",
      "45"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The number of derangements of $n = 5$ objects is given by:\n$D_5 = 5! \\left( \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!} \\right) = 120 \\left( \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120} \\right) = 60 - 20 + 5 - 1 = 44$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The total number of shortest paths from $(0, 0)$ to $(5, 4)$ along the grid lines taking only unit steps to the right or up is:",
    options: [
      "126",
      "120",
      "252",
      "84"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A path from $(0, 0)$ to $(5, 4)$ consists of 5 Right ($R$) steps and 4 Up ($U$) steps, totaling $5 + 4 = 9$ steps.\nThe number of paths is $\\binom{9}{4} = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which 6 letters can be placed into 6 addressed envelopes such that exactly 2 letters go into the correct envelopes is:",
    options: [
      "135",
      "120",
      "90",
      "270"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "First, choose the 2 letters that go into their correct envelopes: $\\binom{6}{2} = 15$ ways.\nThe remaining $6 - 2 = 4$ letters must all go into wrong envelopes (derangement of 4 objects): $D_4 = 9$ ways.\nTotal number of ways = $\\binom{6}{2} \\times D_4 = 15 \\times 9 = 135$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of paths from $(0, 0)$ to $(6, 6)$ on a grid moving only right and up that pass through the point $(3, 3)$ is:",
    options: [
      "400",
      "924",
      "360",
      "441"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The paths from $(0, 0)$ to $(6, 6)$ passing through $(3, 3)$ equal:\n(paths from $(0, 0)$ to $(3, 3)$) $\\times$ (paths from $(3, 3)$ to $(6, 6)$).\nPaths from $(0, 0)$ to $(3, 3)$ = $\\binom{3 + 3}{3} = \\binom{6}{3} = 20$.\nPaths from $(3, 3)$ to $(6, 6)$ = $\\binom{3 + 3}{3} = \\binom{6}{3} = 20$.\nTotal paths = $20 \\times 20 = 400$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The recurrence relation satisfied by the derangement numbers $D_n$ for $n \\ge 3$ is:",
    options: [
      "D_n = (n - 1)(D_{n-1} + D_{n-2})",
      "D_n = n(D_{n-1} + D_{n-2})",
      "D_n = (n - 1) D_{n-1} + D_{n-2}",
      "D_n = n D_{n-1} + (-1)^n"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The standard fundamental recurrence relation for derangements is $D_n = (n - 1)(D_{n-1} + D_{n-2})$ with base values $D_1 = 0$ and $D_2 = 1$. (Another valid form is $D_n = n D_{n-1} + (-1)^n$, but $D_n = (n-1)(D_{n-1} + D_{n-2})$ is the primary two-term recurrence).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "A postman has 4 letters to deliver to 4 different houses. In how many ways can he deliver the letters such that at least one letter is delivered to the correct house?",
    options: [
      "15",
      "9",
      "23",
      "16"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total ways to deliver 4 letters to 4 houses = $4! = 24$.\nNumber of ways where no letter is delivered to the correct house = derangement $D_4 = 9$.\nHence, ways where at least one letter is delivered correctly = $24 - 9 = 15$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of grid paths from $(0, 0)$ to $(4, 4)$ with unit steps $(1, 0)$ and $(0, 1)$ that do NOT pass through $(2, 2)$ is:",
    options: [
      "34",
      "70",
      "36",
      "42"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total paths from $(0, 0)$ to $(4, 4)$ = $\\binom{4 + 4}{4} = \\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{24} = 70$.\nPaths passing through $(2, 2)$ = $\\binom{2 + 2}{2} \\times \\binom{2 + 2}{2} = \\binom{4}{2} \\times \\binom{4}{2} = 6 \\times 6 = 36$.\nPaths NOT passing through $(2, 2)$ = $70 - 36 = 34$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "8 non-attacking rooks are to be placed on an $8 \\times 8$ chessboard such that no rook is placed on the main diagonal. The number of such configurations is:",
    options: [
      "D_8",
      "8! - 8",
      "D_7",
      "8! - 1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Placing 8 non-attacking rooks on an $8 \\times 8$ chessboard corresponds to a permutation $\\pi$ of $\\{1, 2, \\dots, 8\\}$ where the $i$-th rook is placed at $(i, \\pi(i))$. The condition that no rook is placed on the main diagonal means $\\pi(i) \\ne i$ for all $i \\in \\{1, 2, \\dots, 8\\}$, which is precisely a derangement of 8 objects, $D_8$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "In how many ways can 5 boys and 5 girls be paired for a dance such that no boy is paired with his previous dance partner from a list of 5 given couples?",
    options: [
      "44",
      "120",
      "9",
      "24"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Fix the 5 boys $B_1, B_2, B_3, B_4, B_5$. Their previous partners are $G_1, G_2, G_3, G_4, G_5$. Pairing each boy with a girl such that no boy gets his previous partner means $B_i$ does not receive $G_i$. This is a complete derangement of the 5 girls, which is $D_5 = 44$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of paths from $(0, 0)$ to $(n, n)$ in a grid taking unit right and up steps that never rise above the diagonal $y = x$ is given by:",
    options: [
      "\\frac{1}{n+1} \\binom{2n}{n}",
      "\\binom{2n}{n}",
      "\\frac{1}{n} \\binom{2n}{n}",
      "\\binom{2n}{n} - \\binom{2n}{n-2}"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "This is the classic Dyck path problem, and the number of such monotonic grid paths along the grid that stay weakly below the diagonal $y = x$ from $(0, 0)$ to $(n, n)$ is the $n$-th Catalan number $C_n = \\frac{1}{n+1} \\binom{2n}{n}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of derangements of 4 objects is 9.\nReason (R): The formula for the number of derangements of $n$ objects is $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$, which for $n = 4$ yields $24 \\left( 1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} \\right) = 9$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $n = 4$: $D_4 = 24 \\times (1/2 - 1/6 + 1/24) = 12 - 4 + 1 = 9$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of paths on a grid from $(0, 0)$ to $(m, n)$ moving only rightwards and upwards is $\\binom{m+n}{m}$.\nReason (R): Any such path consists of exactly $m$ horizontal steps and $n$ vertical steps, making a total of $m+n$ steps.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "To travel from $(0,0)$ to $(m,n)$, exactly $m$ right steps and $n$ up steps must be taken in any order. The number of such sequences is $\\frac{(m+n)!}{m! \\, n!} = \\binom{m+n}{m}$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways in which 5 letters can be posted into 5 addressed envelopes such that exactly 4 letters go into the correct envelopes is 5.\nReason (R): If 4 letters out of 5 go into their correct envelopes, then the remaining 5th letter must also necessarily go into its correct envelope, so the number of ways is 0.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "It is impossible for exactly $n - 1$ items to be in their correct positions; if $n - 1$ are in correct positions, the last one is also forced into its correct position. Hence, the number of ways is $\\binom{5}{4} D_1 = 5 \\times 0 = 0$. Assertion (A) is false and Reason (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of derangements of 6 objects is 265.\nReason (R): Using $D_n = (n - 1)(D_{n-1} + D_{n-2})$ with $D_4 = 9$ and $D_5 = 44$, we find $D_6 = 5(44 + 9) = 5(53) = 265$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using the recurrence $D_6 = (6 - 1)(D_5 + D_4) = 5(44 + 9) = 5 \\times 53 = 265$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a $4 \\times 4$ grid, the number of paths from the bottom-left corner to the top-right corner is 70.\nReason (R): In an $n \\times n$ square grid, the number of paths along grid lines from $(0, 0)$ to $(n, n)$ is $\\binom{2n}{n}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $n = 4$: $\\binom{2(4)}{4} = \\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{24} = 70$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to arrange the digits 1, 2, 3, 4 such that no digit is in its natural place is 9.\nReason (R): A permutation where no element appears in its original position is a derangement, and $D_4 = 9$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A permutation where each digit $i \\ne \\pi(i)$ is a derangement of 4 elements. The number of such permutations is $D_4 = 9$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The ratio $\\frac{D_n}{n!}$ approaches $\\frac{1}{e}$ as $n \\to \\infty$.\nReason (R): $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$, and the Taylor series of $e^x$ evaluated at $x = -1$ is $\\sum_{k=0}^\\infty \\frac{(-1)^k}{k!} = \\frac{1}{e}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $\\frac{D_n}{n!} = \\sum_{k=0}^n \\frac{(-1)^k}{k!}$, as $n \\to \\infty$, the sum converges to $e^{-1} = \\frac{1}{e}$. Both (A) and (R) are true and (R) provides the exact mathematical derivation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways in which 5 different hats can be returned to 5 people such that at least 2 people receive their own hats is 31.\nReason (R): Total permutations of 5 hats is $5! = 120$. Ways with 0 correct = $D_5 = 44$, and ways with exactly 1 correct = $\\binom{5}{1} D_4 = 5 \\times 9 = 45$. Thus, $120 - (44 + 45) = 31$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Number of ways where at least 2 receive their own hats = (Total ways) - (0 correct) - (exactly 1 correct).\nTotal = $5! = 120$.\n0 correct = $D_5 = 44$.\nExactly 1 correct = $\\binom{5}{1} D_4 = 5 \\times 9 = 45$.\nAt least 2 correct = $120 - 44 - 45 = 31$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of grid paths from $(0, 0)$ to $(3, 3)$ that do NOT touch the line $y = x + 1$ is 5.\nReason (R): By the reflection principle, the number of paths from $(0, 0)$ to $(n, n)$ that stay weakly below the diagonal $y = x$ is given by the Catalan number $C_n = \\frac{1}{n+1} \\binom{2n}{n}$, and for $n = 3$, $C_3 = \\frac{1}{4} \\binom{6}{3} = 5$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Paths from $(0, 0)$ to $(n, n)$ that do not touch $y = x + 1$ remain on or below $y = x$. The count is given by $C_n = \\frac{1}{n+1} \\binom{2n}{n}$. For $n = 3$, $C_3 = \\frac{1}{4} \\times 20 = 5$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If 3 distinct letters are placed into 3 matching envelopes, the number of ways in which exactly one letter is in the correct envelope is 3.\nReason (R): The number of ways of having exactly 1 correct placement among 3 items is $\\binom{3}{1} D_2 = 3 \\times 1 = 3$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Choose 1 item to be correctly placed in $\\binom{3}{1} = 3$ ways. The other 2 items must be deranged, which has $D_2 = 1$ way. Total = $3 \\times 1 = 3$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "Find the number of ways in which 5 letters can be placed into 5 addressed envelopes such that exactly 3 letters go into the correct envelopes.",
    options: [],
    correctOption: null,
    correctAnswer: 10,
    type: "numerical",
    solution: "Choose 3 letters that go into the correct envelopes: $\\binom{5}{3} = 10$ ways.\nThe remaining $5 - 3 = 2$ letters must go into wrong envelopes: $D_2 = 1$ way.\nTotal number of ways = $10 \\times 1 = 10$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of paths from $(0, 0)$ to $(4, 3)$ on a grid moving only in positive $x$ and positive $y$ directions is:",
    options: [],
    correctOption: null,
    correctAnswer: 35,
    type: "numerical",
    solution: "Total steps = $4 + 3 = 7$. Number of paths = $\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of derangements of 3 objects.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "For $n = 3$, $D_3 = 3! \\left( \\frac{1}{2!} - \\frac{1}{3!} \\right) = 6 \\left( \\frac{1}{2} - \\frac{1}{6} \\right) = 3 - 1 = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of paths from $(0, 0)$ to $(5, 5)$ along grid lines that pass through $(2, 2)$ and $(4, 4)$ is:",
    options: [],
    correctOption: null,
    correctAnswer: 72,
    type: "numerical",
    solution: "Paths from $(0, 0)$ to $(2, 2)$ = $\\binom{2+2}{2} = \\binom{4}{2} = 6$.\nPaths from $(2, 2)$ to $(4, 4)$ = $\\binom{2+2}{2} = \\binom{4}{2} = 6$.\nPaths from $(4, 4)$ to $(5, 5)$ = $\\binom{1+1}{1} = \\binom{2}{1} = 2$.\nTotal paths = $6 \\times 6 \\times 2 = 72$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "The number of ways in which 6 candidates can be assigned to 6 distinct interview slots such that none gets their preferred slot (assuming each has a distinct preference) is:",
    options: [],
    correctOption: null,
    correctAnswer: 265,
    type: "numerical",
    solution: "This is the number of derangements of 6 objects:\n$D_6 = 6! \\left( \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!} + \\frac{1}{6!} \\right) = 360 - 120 + 30 - 6 + 1 = 265$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "A man has 4 pairs of shoes. In how many ways can he select one left shoe and one right shoe such that they do NOT form a matching pair?",
    options: [],
    correctOption: null,
    correctAnswer: 12,
    type: "numerical",
    solution: "There are 4 left shoes and 4 right shoes. Choosing 1 left shoe has 4 ways. The right shoe must not match the selected left shoe, so there are $4 - 1 = 3$ choices for the right shoe. Total ways = $4 \\times 3 = 12$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of grid paths from $(0, 0)$ to $(5, 3)$ that do NOT pass through $(3, 2)$ is:",
    options: [],
    correctOption: null,
    correctAnswer: 26,
    type: "numerical",
    solution: "Total paths from $(0, 0)$ to $(5, 3)$ = $\\binom{5+3}{3} = \\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56$.\nPaths passing through $(3, 2)$:\n(paths $(0, 0) \\to (3, 2)$) $\\times$ (paths $(3, 2) \\to (5, 3)$) = $\\binom{3+2}{2} \\times \\binom{(5-3)+(3-2)}{3-2} = \\binom{5}{2} \\times \\binom{3}{1} = 10 \\times 3 = 30$.\nPaths NOT passing through $(3, 2)$ = $56 - 30 = 26$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the 4th Catalan number $C_4$, which counts the number of monotonic paths along the edges of a $4 \\times 4$ grid that do not cross above the diagonal.",
    options: [],
    correctOption: null,
    correctAnswer: 14,
    type: "numerical",
    solution: "The Catalan numbers are given by $C_n = \\frac{1}{n+1} \\binom{2n}{n}$.\nFor $n = 4$:\n$C_4 = \\frac{1}{5} \\binom{8}{4} = \\frac{1}{5} \\times 70 = 14$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "In how many ways can 6 keys be placed into 6 locks such that exactly 1 key opens its matching lock?",
    options: [],
    correctOption: null,
    correctAnswer: 264,
    type: "numerical",
    solution: "Choose 1 key that opens its matching lock: $\\binom{6}{1} = 6$ ways.\nThe other 5 keys must not open their corresponding locks (derangement of 5 items): $D_5 = 44$ ways.\nTotal number of ways = $6 \\times 44 = 264$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the total number of shortest paths on a 3D grid from $(0, 0, 0)$ to $(2, 2, 2)$ moving only along the positive coordinate axes.",
    options: [],
    correctOption: null,
    correctAnswer: 90,
    type: "numerical",
    solution: "A path consists of 2 steps in the $x$-direction, 2 steps in the $y$-direction, and 2 steps in the $z$-direction, giving a total of $2 + 2 + 2 = 6$ steps.\nThe number of distinct sequences of these steps is the multinomial coefficient:\n$\\frac{6!}{2! \\, 2! \\, 2!} = \\frac{720}{2 \\times 2 \\times 2} = \\frac{720}{8} = 90$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  }
];

module.exports = { subtopic7Questions };
