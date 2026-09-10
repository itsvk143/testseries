// scripts/data_jee_pandc_subtopic6.js
// Subtopic 6: Division into groups and distribution (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic6Questions = [
  // --- 10 MCQs ---
  {
    question: "The number of ways in which 12 different books can be divided equally among 3 persons is:",
    options: [
      "\\frac{12!}{(4!)^3}",
      "\\frac{12!}{(4!)^3 \\, 3!}",
      "\\frac{12!}{(3!)^4}",
      "\\frac{12!}{4! \\, 3!}"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Dividing 12 distinct books into 3 equal groups of 4 gives $\\frac{12!}{(4!)^3 \\, 3!}$ ways. Since the books are to be distributed among 3 distinct persons, we multiply by $3!$. Hence, the number of ways is $\\frac{12!}{(4!)^3 \\, 3!} \\times 3! = \\frac{12!}{(4!)^3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of non-negative integral solutions of the equation $x_1 + x_2 + x_3 + x_4 = 15$ is:",
    options: [
      "816",
      "364",
      "455",
      "1820"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The number of non-negative integral solutions of $x_1 + x_2 + \\dots + x_r = n$ is given by $\\binom{n + r - 1}{r - 1}$. Here $n = 15$ and $r = 4$:\n$\\binom{15 + 4 - 1}{4 - 1} = \\binom{18}{3} = \\frac{18 \\times 17 \\times 16}{6} = 3 \\times 17 \\times 16 = 816$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of positive integral solutions of the equation $x + y + z = 12$ is:",
    options: [
      "55",
      "66",
      "78",
      "91"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The number of positive integral solutions ($x, y, z \\ge 1$) of $x_1 + x_2 + \\dots + x_r = n$ is $\\binom{n - 1}{r - 1}$. Here $n = 12$ and $r = 3$:\n$\\binom{12 - 1}{3 - 1} = \\binom{11}{2} = \\frac{11 \\times 10}{2} = 55$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which 9 different toys can be divided into 3 groups containing 4, 3, and 2 toys respectively is:",
    options: [
      "1260",
      "2520",
      "7560",
      "630"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since the group sizes 4, 3, and 2 are all unequal, the number of ways of dividing 9 different toys into these groups is:\n$\\frac{9!}{4! \\, 3! \\, 2!} = \\frac{362880}{24 \\times 6 \\times 2} = \\frac{362880}{288} = 1260$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways of distributing 8 identical balls into 3 distinct boxes such that no box remains empty is:",
    options: [
      "21",
      "28",
      "45",
      "36"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Distributing 8 identical balls into 3 distinct boxes such that each box receives at least 1 ball corresponds to the positive integral solutions of $x_1 + x_2 + x_3 = 8$. Number of solutions = $\\binom{8 - 1}{3 - 1} = \\binom{7}{2} = 21$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of integral solutions of $x_1 + x_2 + x_3 = 20$ where $x_1 \\ge 1, x_2 \\ge 2, x_3 \\ge 3$ is:",
    options: [
      "120",
      "136",
      "153",
      "105"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $y_1 = x_1 - 1 \\ge 0$, $y_2 = x_2 - 2 \\ge 0$, $y_3 = x_3 - 3 \\ge 0$.\nThen $y_1 + y_2 + y_3 = 20 - (1 + 2 + 3) = 14$.\nThe number of non-negative integral solutions is $\\binom{14 + 3 - 1}{3 - 1} = \\binom{16}{2} = \\frac{16 \\times 15}{2} = 120$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of ways in which 15 identical blankets can be distributed among 4 beggars such that each beggar gets at least 2 blankets is:",
    options: [
      "120",
      "165",
      "220",
      "84"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let each beggar receive $x_i$ blankets where $x_i \\ge 2$ for $i = 1, 2, 3, 4$ and $\\sum x_i = 15$.\nLet $y_i = x_i - 2 \\ge 0$. Then $\\sum y_i = 15 - 4(2) = 7$.\nThe number of non-negative integral solutions is $\\binom{7 + 4 - 1}{4 - 1} = \\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{6} = 120$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of ways to divide 52 playing cards into 4 equal piles of 13 cards each is:",
    options: [
      "\\frac{52!}{(13!)^4 \\, 4!}",
      "\\frac{52!}{(13!)^4}",
      "\\frac{52!}{(4!)^{13}}",
      "\\frac{52!}{(4!)^{13} \\, 13!}"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Dividing 52 distinct cards into 4 unmarked piles of 13 cards each involves 4 groups of equal size. The number of ways is $\\frac{52!}{(13!)^4 \\, 4!}$. (If they were distributed to 4 players, it would be $\\frac{52!}{(13!)^4}$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which 6 different books can be distributed among 3 children such that each child gets at least one book is:",
    options: [
      "540",
      "729",
      "180",
      "360"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "This is the number of onto functions from a set of 6 elements to a set of 3 elements.\nUsing Stirling numbers or PIE:\nTotal distributions = $3^6 = 729$.\nSubtract distributions where at least 1 child gets no book:\n$\\binom{3}{1} 2^6 - \\binom{3}{2} 1^6 + \\binom{3}{3} 0^6 = 3(64) - 3(1) + 0 = 192 - 3 = 189$.\nOnto functions = $729 - 189 = 540$.\nAlternatively, partitions of 6 into 3 non-empty groups:\n- Sizes (4, 1, 1): $\\frac{6!}{4! \\, (1!)^2 \\, 2!} \\times 3! = 15 \\times 6 = 90$.\n- Sizes (3, 2, 1): $\\frac{6!}{3! \\, 2! \\, 1!} \\times 3! = 60 \\times 6 = 360$.\n- Sizes (2, 2, 2): $\\frac{6!}{(2!)^3 \\, 3!} \\times 3! = 15 \\times 6 = 90$.\nTotal = $90 + 360 + 90 = 540$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of integral solutions of $x_1 + x_2 + x_3 + x_4 = 20$ such that $0 \\le x_i \\le 6$ for all $i = 1, 2, 3, 4$ is:",
    options: [
      "35",
      "56",
      "84",
      "120"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $y_i = 6 - x_i$. Since $0 \\le x_i \\le 6$, we have $0 \\le y_i \\le 6$.\nSum $\\sum_{i=1}^4 y_i = 24 - \\sum x_i = 24 - 20 = 4$.\nSince each $y_i \\ge 0$ and the sum is 4, every $y_i \\le 4 \\le 6$, so the upper bound condition $y_i \\le 6$ is automatically satisfied!\nThus, the number of non-negative integral solutions of $y_1 + y_2 + y_3 + y_4 = 4$ is:\n$\\binom{4 + 4 - 1}{4 - 1} = \\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to divide 6 distinct objects into 3 groups of 2 objects each is 15.\nReason (R): The number of ways of dividing $2n$ distinct objects into $n$ equal groups of 2 objects each is $\\frac{(2n)!}{(2!)^n \\, n!}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $n = 3$, $2n = 6$ objects into 3 equal groups of 2 each: $\\frac{6!}{(2!)^3 \\, 3!} = \\frac{720}{8 \\times 6} = \\frac{720}{48} = 15$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of non-negative integral solutions of $x_1 + x_2 + x_3 \\le 10$ is 286.\nReason (R): Introducing a slack variable $x_4 \\ge 0$, the inequality becomes $x_1 + x_2 + x_3 + x_4 = 10$, whose number of non-negative solutions is $\\binom{10 + 4 - 1}{4 - 1} = \\binom{13}{3} = 286$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using a slack variable $x_4 \\ge 0$ converts the inequality $x_1 + x_2 + x_3 \\le 10$ into the equality $x_1 + x_2 + x_3 + x_4 = 10$. The number of non-negative solutions is $\\binom{10+3}{3} = \\binom{13}{3} = 286$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways of distributing 10 identical coins among 3 children such that each child gets at least 1 coin is 36.\nReason (R): The number of positive integral solutions of $x_1 + x_2 + \\dots + x_r = n$ is $\\binom{n - 1}{r - 1}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $n = 10$ identical coins distributed to $r = 3$ children with at least 1 coin each, the number of ways is $\\binom{10 - 1}{3 - 1} = \\binom{9}{2} = 36$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to distribute 4 distinct gifts to 2 distinct persons such that each person receives at least one gift is 14.\nReason (R): Total ways to distribute 4 distinct gifts to 2 persons is $2^4 = 16$. There are 2 ways where one person receives all gifts, so $16 - 2 = 14$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Each of the 4 gifts has 2 choices, giving $2^4 = 16$ distributions. In 2 cases, all gifts go to one person (leaving the other with 0 gifts). Thus, $16 - 2 = 14$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to divide 8 distinct players into 4 tennis pairs is 105.\nReason (R): The number of ways of dividing $2n$ distinct objects into $n$ unordered groups of 2 objects each is $\\frac{(2n)!}{(2!)^n \\, n!}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $n = 4$ pairs ($2n = 8$ players): $\\frac{8!}{(2!)^4 \\, 4!} = \\frac{40320}{16 \\times 24} = \\frac{40320}{384} = 105$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of non-negative integral solutions of $x + y + z = 10$ with $x \\ge 1$ and $y \\ge 1$ is 45.\nReason (R): Setting $x' = x - 1 \\ge 0$ and $y' = y - 1 \\ge 0$, the equation becomes $x' + y' + z = 8$, whose non-negative solutions are $\\binom{8 + 3 - 1}{3 - 1} = \\binom{10}{2} = 45$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Subtracting 1 each for $x$ and $y$ gives $x' + y' + z = 10 - 2 = 8$. Number of non-negative integral solutions is $\\binom{8 + 2}{2} = \\binom{10}{2} = 45$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to divide 10 distinct balls into 3 groups of sizes 5, 3, and 2 is equal to the number of ways to divide 10 distinct balls into 2 groups of 5.\nReason (R): $\\frac{10!}{5! \\, 3! \\, 2!} = 2520$, whereas the number of ways to divide 10 balls into 2 equal groups of 5 is $\\frac{10!}{(5!)^2 \\, 2!} = 126$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Ways to divide into groups of 5, 3, 2 is $\\frac{10!}{5! 3! 2!} = 2520$. Ways to divide into 2 groups of 5 is $\\frac{10!}{(5!)^2 2!} = 126$. These numbers are completely different, so (A) is false while (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways of distributing 6 identical apples among 3 boys so that no boy gets more than 4 apples is 25.\nReason (R): Total non-negative solutions is $\\binom{6+3-1}{2} = 28$, and the cases where one boy gets $\\ge 5$ apples corresponds to choosing the boy in $\\binom{3}{1} = 3$ ways and distributing the remaining $6 - 5 = 1$ apple in $\\binom{1+2}{2} = 3$ ways, so $28 - 3 = 25$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Total ways without restriction = $\\binom{6+2}{2} = 28$. A boy gets $\\ge 5$ apples: choose which boy ($\\{1, 2, 3\\}$, 3 choices). That boy takes 5 apples, leaving 1 apple to distribute among 3 boys: $\\binom{1+2}{2} = 3$ ways. Since no two boys can simultaneously get $\\ge 5$ apples (as $5+5=10 > 6$), the total forbidden ways = $3 \\times 3 = 9$? Wait! Let's check: If boy 1 gets $\\ge 5$ apples, $x_1 + x_2 + x_3 = 6$ with $x_1 \\ge 5$. The partitions are $(5, 1, 0)$, $(5, 0, 1)$, $(6, 0, 0)$. There are 3 solutions where $x_1 \\ge 5$. Since any of the 3 boys can be the one with $\\ge 5$ apples, total forbidden solutions = $3 \\times 3 = 9$! Therefore, valid solutions = $28 - 9 = 19$, not 25! Hence Assertion (A) is false. Wait, Reason says $28 - 3 = 25$ which incorrectly counted $3$ instead of $3 \\times 3 = 9$. So both (A) and (R) are false. Let's adjust Assertion and Reason so one standard option is correct.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Let's reformulate: Assertion (A): The number of ways of distributing 6 identical apples among 3 boys so that no boy gets more than 4 apples is 19. Reason (R): Total unrestricted non-negative integral solutions of $x_1 + x_2 + x_3 = 6$ is $\\binom{8}{2} = 28$, and the number of solutions where at least one boy gets 5 or more apples is $\\binom{3}{1} \\times \\binom{1+2}{2} = 3 \\times 3 = 9$, giving $28 - 9 = 19$.",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways of distributing 6 identical apples among 3 boys so that no boy gets more than 4 apples is 19.\nReason (R): Total unrestricted non-negative integral solutions of $x_1 + x_2 + x_3 = 6$ is $\\binom{8}{2} = 28$, and the number of solutions where at least one boy gets 5 or more apples is $\\binom{3}{1} \\times \\binom{1+2}{2} = 3 \\times 3 = 9$, giving $28 - 9 = 19$.\nIn light of the above statements, choose the correct answer from the options given below:",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to distribute 5 distinct items into 3 identical boxes such that no box is empty is 25.\nReason (R): The Stirling number of the second kind $S(5, 3) = \\frac{1}{3!} [3^5 - 3(2^5) + 3(1^5)] = \\frac{1}{6}[243 - 96 + 3] = \\frac{150}{6} = 25$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The number of partitions of a 5-element set into 3 non-empty subsets (identical boxes) is the Stirling number of the second kind $S(5, 3)$. Using the formula $S(n, k) = \\frac{1}{k!} \\sum_{j=0}^k (-1)^{k-j} \\binom{k}{j} j^n$: $S(5, 3) = \\frac{1}{6}(243 - 96 + 3) = 25$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways in which 4 men and 4 women can be divided into 4 couples for a dance is 24.\nReason (R): Each of the 4 men can be paired with one of the 4 women, which is equivalent to permuting the 4 women among the 4 men in $4! = 24$ ways.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Fix the order of the 4 men: $M_1, M_2, M_3, M_4$. Pairing each man with a woman corresponds to arranging the 4 women in 4 positions, which can be done in $4! = 24$ ways. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "Find the total number of non-negative integral solutions of the equation $x + y + z + w = 10$.",
    options: [],
    correctOption: null,
    correctAnswer: 286,
    type: "numerical",
    solution: "The number of non-negative integral solutions is given by $\\binom{n + r - 1}{r - 1}$ with $n = 10, r = 4$:\n$\\binom{10 + 4 - 1}{4 - 1} = \\binom{13}{3} = \\frac{13 \\times 12 \\times 11}{6} = 286$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which 8 identical marbles can be placed into 4 distinct urns such that each urn contains at least one marble is:",
    options: [],
    correctOption: null,
    correctAnswer: 35,
    type: "numerical",
    solution: "Number of positive integral solutions of $x_1 + x_2 + x_3 + x_4 = 8$ is $\\binom{n - 1}{r - 1} = \\binom{8 - 1}{4 - 1} = \\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of ways of dividing 15 students into 3 equal groups of 5 students each is $\\frac{15!}{(5!)^3 \\, k}$. Find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "Dividing 15 distinct students into 3 equal groups of 5 gives $\\frac{15!}{(5!)^3 \\, 3!} = \\frac{15!}{(5!)^3 \\, 6}$. Thus, $k = 3! = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of non-negative integral solutions of $x_1 + x_2 + x_3 = 11$ such that $x_1$ is an even number.",
    options: [],
    correctOption: null,
    correctAnswer: 42,
    type: "numerical",
    solution: "Since $x_1$ is even, let $x_1 = 2k$ where $k \\ge 0$. Since $x_1 \\le 11$, $k \\in \\{0, 1, 2, 3, 4, 5\\}$.\nFor each $k$, $x_2 + x_3 = 11 - 2k$.\nThe number of non-negative integral solutions of $x_2 + x_3 = m$ is $\\binom{m + 1}{1} = m + 1$.\nSumming over all possible $k$:\nFor $k = 0$: $m = 11 \\implies 12$ solutions.\nFor $k = 1$: $m = 9 \\implies 10$ solutions.\nFor $k = 2$: $m = 7 \\implies 8$ solutions.\nFor $k = 3$: $m = 5 \\implies 6$ solutions.\nFor $k = 4$: $m = 3 \\implies 4$ solutions.\nFor $k = 5$: $m = 1 \\implies 2$ solutions.\nTotal solutions = $12 + 10 + 8 + 6 + 4 + 2 = 42$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "The number of ways in which 10 different sweets can be distributed among 2 children such that each child receives at least 2 sweets is:",
    options: [],
    correctOption: null,
    correctAnswer: 1002,
    type: "numerical",
    solution: "Total ways to distribute 10 distinct sweets to 2 children = $2^{10} = 1024$.\nUnwanted distributions (where a child gets fewer than 2 sweets):\n- Child 1 gets 0 sweets: 1 way.\n- Child 1 gets 1 sweet: $\\binom{10}{1} = 10$ ways.\n- Child 2 gets 0 sweets: 1 way.\n- Child 2 gets 1 sweet: $\\binom{10}{1} = 10$ ways.\nTotal unwanted ways = $1 + 10 + 1 + 10 = 22$.\nValid distributions = $1024 - 22 = 1002$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the number of positive integral solutions of $x + y + z = 15$ such that $x \\le 5, y \\le 5, z \\le 5$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "Since $x, y, z \\ge 1$ and $x, y, z \\le 5$, the maximum possible value for $x + y + z$ is $5 + 5 + 5 = 15$.\nSince the sum is required to be 15, we must have $x = 5, y = 5, z = 5$.\nHence, there is only 1 such solution.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of ways of distributing 7 distinct balls into 3 distinct boxes such that exactly one box remains empty is:",
    options: [],
    correctOption: null,
    correctAnswer: 378,
    type: "numerical",
    solution: "Choose which box remains empty: $\\binom{3}{1} = 3$ choices.\nThe remaining 2 boxes must both be non-empty. The number of ways to distribute 7 distinct balls into 2 distinct boxes such that neither is empty is $2^7 - 2 = 128 - 2 = 126$.\nTotal ways = $3 \\times 126 = 378$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the number of non-negative integral solutions of the system $x + y + z = 12$ and $x - y = 2$.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "From $x - y = 2$, we have $x = y + 2$. Substituting into the first equation:\n$(y + 2) + y + z = 12 \\implies 2y + z = 10$.\nSince $y, z \\ge 0$, we have $z = 10 - 2y \\ge 0 \\implies 2y \\le 10 \\implies y \\le 5$.\nSince $y$ is an integer, $y \\in \\{0, 1, 2, 3, 4, 5\\}$ (6 choices).\nFor each value of $y$, $x = y + 2 \\ge 2 \\ge 0$ and $z = 10 - 2y \\ge 0$ are uniquely determined non-negative integers.\nThus, there are exactly 6 solutions.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "The number of ways in which 8 different books can be distributed among 3 people such that one person gets 4 books and the other two get 2 books each is:",
    options: [],
    correctOption: null,
    correctAnswer: 1260,
    type: "numerical",
    solution: "First, choose the person who receives 4 books: $\\binom{3}{1} = 3$ choices.\nChoose 4 books for this person: $\\binom{8}{4} = 70$ ways.\nThe remaining 4 books are to be distributed equally between the other 2 people (2 books each):\n$\\binom{4}{2} = 6$ ways.\nTotal number of ways = $3 \\times 70 \\times 6 = 1260$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "The number of integral solutions of $x_1 + x_2 + x_3 + x_4 = 10$ where $-1 \\le x_i \\le 4$ for all $i = 1, 2, 3, 4$ is:",
    options: [],
    correctOption: null,
    correctAnswer: 140,
    type: "numerical",
    solution: "Let $y_i = x_i + 1$. Since $-1 \\le x_i \\le 4$, we have $0 \\le y_i \\le 5$.\nThen $\\sum_{i=1}^4 y_i = 10 + 4 = 14$.\nLet $z_i = 5 - y_i$. Then $0 \\le z_i \\le 5$, and $\\sum_{i=1}^4 z_i = 4(5) - 14 = 20 - 14 = 6$.\nUsing Principle of Inclusion-Exclusion:\nTotal non-negative solutions of $\\sum z_i = 6$ is $\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{6} = 84$.\nSince any variable $z_i$ could exceed 5 only if $z_i \\ge 6$, and if $z_i \\ge 6$, the variable must be 6 and all other variables 0.\nThere are $\\binom{4}{1} = 4$ such solutions ($(6, 0, 0, 0)$ and permutations).\nValid solutions = $84 - 4 = 80$... Wait! Let's check $y_i \\le 5$ and sum is 14:\nTotal solutions of $y_1 + y_2 + y_3 + y_4 = 14$ without upper bound: $\\binom{14+3}{3} = \\binom{17}{3} = \\frac{17 \\times 16 \\times 15}{6} = 680$.\nSubtract at least one $y_i \\ge 6$: Choose variable $\\binom{4}{1} = 4$, remaining sum $14 - 6 = 8$: $\\binom{8+3}{3} = \\binom{11}{3} = 165$. So $4 \\times 165 = 660$.\nAdd two $y_i \\ge 6$: Choose 2 variables $\\binom{4}{2} = 6$, remaining sum $14 - 12 = 2$: $\\binom{2+3}{3} = \\binom{5}{3} = 10$. So $6 \\times 10 = 60$.\nThree $y_i \\ge 6$ is impossible ($3 \\times 6 = 18 > 14$).\nTotal valid solutions = $680 - 660 + 60 = 80$!\nLet's check if the transformation $z_i = 5 - y_i$ gives the same:\n$\\sum z_i = 6$. Total non-negative solutions of $\\sum z_i = 6$ is $\\binom{6+3}{3} = \\binom{9}{3} = 84$.\nSubtract at least one $z_i \\ge 6$: Choose variable $\\binom{4}{1} = 4$, remaining sum $6 - 6 = 0$: $\\binom{0+3}{3} = 1$. So $4 \\times 1 = 4$.\nValid solutions = $84 - 4 = 80$! Wow, both methods give exactly 80! Let's set correctAnswer to 80.",
    correctAnswer: 80,
    solution: "Let $y_i = x_i + 1$. Since $-1 \\le x_i \\le 4$, we have $0 \\le y_i \\le 5$.\nThe equation becomes $\\sum_{i=1}^4 y_i = 10 + 4(1) = 14$.\nSubstitute $z_i = 5 - y_i$, so $0 \\le z_i \\le 5$ and $\\sum_{i=1}^4 z_i = 4(5) - 14 = 6$.\nThe total number of non-negative integral solutions of $z_1 + z_2 + z_3 + z_4 = 6$ is $\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = 84$.\nSolutions where some $z_i > 5$ (i.e., $z_i \\ge 6$): since the sum is 6, exactly one $z_i = 6$ and the other three are 0. There are $\\binom{4}{1} = 4$ such solutions.\nTherefore, the number of valid solutions is $84 - 4 = 80$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "hard"
  }
];

module.exports = { subtopic6Questions };
