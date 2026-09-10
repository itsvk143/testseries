// scripts/data_jee_pandc_subtopic5.js
// Subtopic 5: Combinations (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    question: "A committee of 5 is to be formed from 6 men and 4 women. In how many ways can this be done if the committee must contain at least 2 women?",
    options: [
      "186",
      "252",
      "120",
      "210"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total ways to choose 5 people from 10 = $\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{120} = 252$.\nCommittees with no women (all 5 men) = $\\binom{6}{5} = 6$.\nCommittees with exactly 1 woman (1 woman and 4 men) = $\\binom{4}{1} \\times \\binom{6}{4} = 4 \\times 15 = 60$.\nUnwanted committees = $6 + 60 = 66$.\nCommittees with at least 2 women = $252 - 66 = 186$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of diagonals in a regular polygon of 15 sides is:",
    options: [
      "90",
      "105",
      "75",
      "60"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The number of diagonals in an $n$-sided polygon is given by $\\frac{n(n - 3)}{2}$. For $n = 15$: $\\frac{15 \\times (15 - 3)}{2} = \\frac{15 \\times 12}{2} = 90$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Out of 10 points in a plane, exactly 4 points are collinear. The number of distinct triangles that can be formed by joining these points as vertices is:",
    options: [
      "116",
      "120",
      "110",
      "104"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total ways to choose 3 points from 10 is $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{6} = 120$.\nSince 4 points are collinear, any 3 points chosen from these 4 do not form a triangle: $\\binom{4}{3} = 4$.\nThus, number of triangles formed = $120 - 4 = 116$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $^{n}C_r + 2 \\, ^{n}C_{r-1} + ^{n}C_{r-2} = ^{k}C_r$, then the value of $k$ is:",
    options: [
      "n + 2",
      "n + 1",
      "2n",
      "n"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "We can group the terms as:\n$^{n}C_r + 2 \\, ^{n}C_{r-1} + ^{n}C_{r-2} = (^{n}C_r + ^{n}C_{r-1}) + (^{n}C_{r-1} + ^{n}C_{r-2})$.\nUsing Pascal's identity $^{m}C_k + ^{m}C_{k-1} = ^{m+1}C_k$:\n$= ^{n+1}C_r + ^{n+1}C_{r-1} = ^{n+2}C_r$.\nTherefore, $k = n + 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "A set of $m$ parallel lines intersects another set of $n$ parallel lines. The number of parallelograms formed by these lines is:",
    options: [
      "\\frac{mn(m-1)(n-1)}{4}",
      "\\frac{mn(m+1)(n+1)}{4}",
      "mn(m-1)(n-1)",
      "\\frac{mn}{2}"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "To form a parallelogram, we must choose 2 lines from the first set of $m$ parallel lines and 2 lines from the second set of $n$ parallel lines.\nNumber of parallelograms = $\\binom{m}{2} \\times \\binom{n}{2} = \\frac{m(m-1)}{2} \\times \\frac{n(n-1)}{2} = \\frac{mn(m-1)(n-1)}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The value of $\\sum_{r=1}^{5} {^{5}C_r} \\, {^{4}C_{5-r}}$ is:",
    options: [
      "126",
      "120",
      "130",
      "125"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By Vandermonde's identity, $\\sum_{r=0}^{5} {^{5}C_r} \\, {^{4}C_{5-r}} = {^{5+4}C_5} = {^{9}C_5} = {^{9}C_4} = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$.\nFor $r = 0$, the term is ${^{5}C_0} \\, {^{4}C_5} = 1 \\times 0 = 0$.\nTherefore, $\\sum_{r=1}^{5} {^{5}C_r} \\, {^{4}C_{5-r}} = 126 - 0 = 126$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "From 6 different novels and 3 different dictionaries, 4 books are to be selected such that at least one dictionary is always included. The number of ways of doing this is:",
    options: [
      "111",
      "126",
      "15",
      "96"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total books = $6 + 3 = 9$. Total ways to choose 4 books = $\\binom{9}{4} = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$.\nSelections with no dictionary (all 4 are novels) = $\\binom{6}{4} = 15$.\nSelections with at least one dictionary = $126 - 15 = 111$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which a cricket team of 11 players can be chosen from 16 players, consisting of 5 bowlers, 2 wicketkeepers, and 9 batsmen, such that the team includes exactly 1 wicketkeeper and at least 4 bowlers, is:",
    options: [
      "1092",
      "1260",
      "924",
      "840"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Available: 2 Wicketkeepers (WK), 5 Bowlers (B), 9 Batsmen (Bat).\nWe need 1 WK and at least 4 Bowlers (either 4 Bowlers or 5 Bowlers).\nCase 1: 1 WK, 4 Bowlers, and $11 - (1 + 4) = 6$ Batsmen.\nWays = $\\binom{2}{1} \\times \\binom{5}{4} \\times \\binom{9}{6} = 2 \\times 5 \\times \\frac{9 \\times 8 \\times 7}{6} = 10 \\times 84 = 840$.\nCase 2: 1 WK, 5 Bowlers, and $11 - (1 + 5) = 5$ Batsmen.\nWays = $\\binom{2}{1} \\times \\binom{5}{5} \\times \\binom{9}{5} = 2 \\times 1 \\times \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 2 \\times 126 = 252$.\nTotal ways = $840 + 252 = 1092$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of all possible selections of one or more items from 5 identical apples, 4 identical oranges, and 3 distinct mangoes is:",
    options: [
      "239",
      "240",
      "479",
      "480"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "From 5 identical apples, we can choose $0, 1, 2, 3, 4, 5$ apples (6 choices).\nFrom 4 identical oranges, we can choose $0, 1, 2, 3, 4$ oranges (5 choices).\nFrom 3 distinct mangoes, each mango can either be included or not ($2^3 = 8$ choices).\nTotal selections including the empty selection = $6 \\times 5 \\times 8 = 240$.\nExcluding the selection where no fruit is chosen = $240 - 1 = 239$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $^{20}C_{r+1} = {^{20}C_{r-1}}$, then the value of $r$ is:",
    options: [
      "10",
      "9",
      "11",
      "8"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For $^{n}C_x = {^{n}C_y}$, either $x = y$ or $x + y = n$.\nIf $r + 1 = r - 1$, we get $1 = -1$ (impossible).\nTherefore, $(r + 1) + (r - 1) = 20 \\implies 2r = 20 \\implies r = 10$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any natural numbers $n$ and $r$ with $1 \\le r \\le n$, $^{n}C_r + {^{n}C_{r-1}} = {^{n+1}C_r}$.\nReason (R): The number of ways of choosing $r$ objects from $n+1$ objects can be split into selections containing a particular object and selections not containing that particular object.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Pascal's Identity $^{n+1}C_r = {^{n}C_r} + {^{n}C_{r-1}}$ has a direct combinatorial proof: out of $n+1$ items, selecting $r$ items either excludes a designated item ($^{n}C_r$ ways) or includes that item ($^{n}C_{r-1}$ ways). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The maximum value of $^{20}C_r$ is achieved at $r = 10$.\nReason (R): $^{n}C_r$ attains its maximum value at $r = \\frac{n}{2}$ when $n$ is even, and at $r = \\frac{n-1}{2}$ or $\\frac{n+1}{2}$ when $n$ is odd.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For even $n = 20$, the central binomial coefficient $^{20}C_{10}$ is the unique maximum. Reason (R) states the general rule for maximum binomial coefficients. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of straight lines formed by joining 12 points, out of which 5 points are collinear, is 57.\nReason (R): The number of straight lines formed by $n$ points out of which $m$ points are collinear is given by $\\binom{n}{2} - \\binom{m}{2} + 1$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using the formula: $\\binom{12}{2} - \\binom{5}{2} + 1 = 66 - 10 + 1 = 57$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to select 4 cards of different suits from a standard deck of 52 playing cards is $13^4$.\nReason (R): There are 4 distinct suits each having 13 cards, and one card can be selected from each suit in $\\binom{13}{1} = 13$ ways, giving $13 \\times 13 \\times 13 \\times 13 = 13^4$ ways.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since each suit contains 13 cards and we need one card from each of the 4 suits (Spades, Hearts, Diamonds, Clubs), the number of ways is $13 \\times 13 \\times 13 \\times 13 = 13^4$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $^{15}C_{3r} = {^{15}C_{r+3}}$, then $r = 3$.\nReason (R): $^{n}C_x = {^{n}C_y} \\implies x = y$ or $x + y = n$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using $^{n}C_x = {^{n}C_y} \\implies x = y$ or $x + y = n$:\nCase 1: $3r = r + 3 \\implies 2r = 3 \\implies r = 1.5$ (not an integer).\nCase 2: $3r + (r + 3) = 15 \\implies 4r = 12 \\implies r = 3$.\nThus $r = 3$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The sum $\\sum_{r=0}^{10} {^{10}C_r} = 1024$.\nReason (R): The expansion of $(1 + x)^n = \\sum_{r=0}^n {^{n}C_r} x^r$, and putting $x = 1$ yields $\\sum_{r=0}^n {^{n}C_r} = 2^n$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $n = 10$, $\\sum_{r=0}^{10} {^{10}C_r} = 2^{10} = 1024$. The binomial theorem with $x = 1$ provides the exact proof. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to choose 3 vertices of a regular hexagon that form an equilateral triangle is 2.\nReason (R): In a regular hexagon $A_1 A_2 A_3 A_4 A_5 A_6$, the only equilateral triangles formed by the vertices are $A_1 A_3 A_5$ and $A_2 A_4 A_6$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "In a regular hexagon, vertices with step-size 2 along the perimeter form equilateral triangles. These are $\{A_1, A_3, A_5\}$ and $\{A_2, A_4, A_6\}$, totaling exactly 2 triangles. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If 10 people shake hands with each other exactly once, the total number of handshakes is 45.\nReason (R): A handshake occurs between any pair of people, so the total number of handshakes among $n$ people is $\\binom{n}{2}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Each pair of people performs 1 handshake. The number of pairs chosen from 10 people is $\\binom{10}{2} = \\frac{10 \\times 9}{2} = 45$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways of choosing a non-empty subset of 6 distinct objects is 63.\nReason (R): Each object has 2 choices (included or excluded), giving $2^6 = 64$ total subsets, and excluding the empty subset leaves $64 - 1 = 63$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The total number of non-empty subsets of a set with $n$ elements is $2^n - 1$. For $n = 6$, $2^6 - 1 = 64 - 1 = 63$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of triangles that can be formed from the vertices of a decagon is 120, out of which 10 triangles have exactly two sides common with the decagon.\nReason (R): For any $n$-gon ($n \\ge 4$), the number of triangles having exactly two sides common with the polygon is $n$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Total triangles from 10 vertices = $\\binom{10}{3} = 120$. A triangle with two sides common with the $n$-gon is formed by 3 consecutive vertices, of which there are $n = 10$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "Find the number of ways of selecting a team of 4 people from 7 men and 5 women such that the team includes at least one woman.",
    options: [],
    correctOption: null,
    correctAnswer: 460,
    type: "numerical",
    solution: "Total people = $7 + 5 = 12$. Total ways to select 4 people = $\\binom{12}{4} = \\frac{12 \\times 11 \\times 10 \\times 9}{24} = 495$.\nWays to select no women (all 4 men) = $\\binom{7}{4} = 35$.\nWays to select at least one woman = $495 - 35 = 460$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of chords that can be drawn through 18 points on a circle is:",
    options: [],
    correctOption: null,
    correctAnswer: 153,
    type: "numerical",
    solution: "A chord is determined by joining any 2 distinct points on the circle. The number of chords = $\\binom{18}{2} = \\frac{18 \\times 17}{2} = 153$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $^{n}C_4, {^{n}C_5}, {^{n}C_6}$ are in arithmetic progression (A.P.), then the value of $n$ can be 14 or:",
    options: [],
    correctOption: null,
    correctAnswer: 7,
    type: "numerical",
    solution: "Since $^{n}C_4, {^{n}C_5}, {^{n}C_6}$ are in A.P., we have $2 \\, {^{n}C_5} = {^{n}C_4} + {^{n}C_6}$.\nDividing both sides by $^{n}C_5$:\n$2 = \\frac{^{n}C_4}{^{n}C_5} + \\frac{^{n}C_6}{^{n}C_5} = \\frac{5}{n - 4} + \\frac{n - 5}{6}$.\n$2 = \\frac{30 + (n - 4)(n - 5)}{6(n - 4)}$.\n$12(n - 4) = 30 + n^2 - 9n + 20 \\implies 12n - 48 = n^2 - 9n + 50$.\n$n^2 - 21n + 98 = 0 \\implies (n - 7)(n - 14) = 0$.\nHence $n = 7$ or $n = 14$. The other value of $n$ is 7.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "A question paper consists of two sections, Section A containing 5 questions and Section B containing 5 questions. A candidate is required to attempt 6 questions in all, selecting at least 2 questions from each section. In how many ways can the candidate select the questions?",
    options: [],
    correctOption: null,
    correctAnswer: 200,
    type: "numerical",
    solution: "Possible selections of (Section A, Section B) satisfying the conditions:\nCase 1: (2 from A, 4 from B) $\\rightarrow \\binom{5}{2} \\times \\binom{5}{4} = 10 \\times 5 = 50$.\nCase 2: (3 from A, 3 from B) $\\rightarrow \\binom{5}{3} \\times \\binom{5}{3} = 10 \\times 10 = 100$.\nCase 3: (4 from A, 2 from B) $\\rightarrow \\binom{5}{4} \\times \\binom{5}{2} = 5 \\times 10 = 50$.\nTotal ways = $50 + 100 + 50 = 200$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "In how many ways can 5 prizes be distributed among 4 students if each student is eligible for any number of prizes?",
    options: [],
    correctOption: null,
    correctAnswer: 1024,
    type: "numerical",
    solution: "Each of the 5 distinct prizes can be awarded to any of the 4 students (4 choices for each prize). Total ways = $4^5 = 1024$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The total number of factors of 3600 (excluding 1 and 3600) is:",
    options: [],
    correctOption: null,
    correctAnswer: 43,
    type: "numerical",
    solution: "Prime factorisation of $3600 = 36 \\times 100 = 2^4 \\times 3^2 \\times 5^2$.\nTotal number of divisors = $(4 + 1)(2 + 1)(2 + 1) = 5 \\times 3 \\times 3 = 45$.\nExcluding 1 and 3600: $45 - 2 = 43$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "A polygon has 44 diagonals. Find the number of sides of the polygon.",
    options: [],
    correctOption: null,
    correctAnswer: 11,
    type: "numerical",
    solution: "Number of diagonals in an $n$-sided polygon = $\\frac{n(n - 3)}{2} = 44$.\n$n(n - 3) = 88 \\implies n^2 - 3n - 88 = 0 \\implies (n - 11)(n + 8) = 0$.\nSince $n > 0$, $n = 11$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "There are 15 players in a cricket squad, including 2 wicketkeepers. A team of 11 players is to be chosen such that exactly one wicketkeeper is included. Find the number of ways to choose the team.",
    options: [],
    correctOption: null,
    correctAnswer: 572,
    type: "numerical",
    solution: "Choose 1 wicketkeeper from 2: $\\binom{2}{1} = 2$ ways.\nChoose remaining $11 - 1 = 10$ players from the remaining $15 - 2 = 13$ non-wicketkeepers: $\\binom{13}{10} = \\binom{13}{3} = \\frac{13 \\times 12 \\times 11}{6} = 286$ ways.\nTotal ways = $2 \\times 286 = 572$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the total number of selections of at least one fruit from 4 identical mangoes, 5 identical apples, and 6 identical bananas.",
    options: [],
    correctOption: null,
    correctAnswer: 209,
    type: "numerical",
    solution: "Number of ways to choose mangoes: $4 + 1 = 5$ choices (0 to 4).\nNumber of ways to choose apples: $5 + 1 = 6$ choices (0 to 5).\nNumber of ways to choose bananas: $6 + 1 = 7$ choices (0 to 6).\nTotal selections including empty selection = $5 \\times 6 \\times 7 = 210$.\nExcluding the case where no fruit is chosen = $210 - 1 = 209$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of ways of choosing 3 numbers from $\\{1, 2, 3, \\dots, 30\\}$ such that their sum is divisible by 3 is:",
    options: [],
    correctOption: null,
    correctAnswer: 1360,
    type: "numerical",
    solution: "Divide the 30 numbers into 3 sets according to remainder modulo 3:\n$S_0 = \\{3, 6, \\dots, 30\\}$ (10 numbers, $3k$)\n$S_1 = \\{1, 4, \\dots, 28\\}$ (10 numbers, $3k+1$)\n$S_2 = \\{2, 5, \\dots, 29\\}$ (10 numbers, $3k+2$)\nA sum of 3 numbers is divisible by 3 in two cases:\nCase 1: All 3 numbers from the same set.\nWays = $\\binom{10}{3} + \\binom{10}{3} + \\binom{10}{3} = 3 \\times 120 = 360$.\nCase 2: One number from each of the three sets ($S_0, S_1, S_2$).\nWays = $\\binom{10}{1} \\times \\binom{10}{1} \\times \\binom{10}{1} = 10 \\times 10 \\times 10 = 1000$.\nTotal ways = $360 + 1000 = 1360$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  }
];

module.exports = { subtopic5Questions };
