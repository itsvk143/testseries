// scripts/data_jee_pandc_subtopic2.js
// Subtopic 2: Linear permutations (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    question: "The number of ways in which 5 boys and 4 girls can be arranged in a row such that no two girls are together is:",
    options: [
      "43200",
      "14400",
      "2880",
      "86400"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Using the gap method: First arrange the 5 boys in $5! = 120$ ways. This creates $5 + 1 = 6$ gaps. The 4 girls must be placed in these 6 gaps so that no two are together: $^6P_4 = 6 \\times 5 \\times 4 \\times 3 = 360$ ways. Total arrangements = $120 \\times 360 = 43200$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If all the letters of the word 'MOTHER' are written in all possible ways and these words are arranged in a dictionary, then the rank of the word 'MOTHER' is:",
    options: [
      "309",
      "308",
      "307",
      "310"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters in alphabetical order: E, H, M, O, R, T.\n- Words starting with E: $5! = 120$\n- Words starting with H: $5! = 120$\n- Words starting with ME: $4! = 24$\n- Words starting with MH: $4! = 24$\n- Words starting with MOE: $3! = 6$\n- Words starting with MOH: $3! = 6$\n- Words starting with MOR: $3! = 6$\n- Words starting with MOTE: $2! = 2$\n- Next word: MOTHER ($1$).\nTotal rank = $120 + 120 + 24 + 24 + 6 + 6 + 6 + 2 + 1 = 309$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of ways of arranging the letters of the word 'TRIANGLE' so that the vowels never come together is:",
    options: [
      "36000",
      "40320",
      "4320",
      "14400"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total letters = 8 (all distinct: T, R, I, A, N, G, L, E). Total arrangements without restriction = $8! = 40320$.\nVowels are I, A, E (3 vowels). Tying the 3 vowels as 1 block gives $(8 - 3 + 1) = 6$ units. Ways with vowels together = $6! \\times 3! = 720 \\times 6 = 4320$.\nWays with vowels NEVER together = $40320 - 4320 = 36000$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "In how many ways can 6 boys and 6 girls be arranged in a line so that boys and girls alternate?",
    options: [
      "$2 \\times (6!)^2$",
      "$(6!)^2$",
      "$12!$",
      "$\\frac{12!}{2}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Case 1: Starting with a boy (B G B G B G B G B G B G): $6! \\times 6!$ ways.\nCase 2: Starting with a girl (G B G B G B G B G B G B): $6! \\times 6!$ ways.\nTotal ways = $(6!)^2 + (6!)^2 = 2 \\times (6!)^2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which 8 persons can stand in a queue such that two particular persons A and B are never adjacent is:",
    options: [
      "30240",
      "40320",
      "10080",
      "20160"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Total arrangements of 8 persons = $8! = 40320$.\nArrangements where A and B are adjacent = $(8 - 2 + 1)! \\times 2! = 7! \\times 2 = 5040 \\times 2 = 10080$.\nWays where A and B are not adjacent = $40320 - 10080 = 30240$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If all permutations of the letters of the word 'CHALK' are arranged in a dictionary, the rank of the word 'CHALK' is:",
    options: [
      "31",
      "25",
      "49",
      "32"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Alphabetical order of letters: A, C, H, K, L.\n- Words starting with A: $4! = 24$\n- Words starting with CA: $3! = 6$\n- Next word starting with CH: CHAKL ($1$)\n- Next word: CHALK ($1$).\nTotal rank = $24 + 6 + 1 = 31$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "In how many ways can 7 distinct books be arranged on a shelf such that 3 particular books are always together?",
    options: [
      "720",
      "5040",
      "144",
      "2160"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Bundle the 3 particular books into 1 block. There are $(7 - 3 + 1) = 5$ units to arrange on the shelf, which can be done in $5! = 120$ ways. The 3 books inside the bundle can be arranged in $3! = 6$ ways. Total ways = $120 \\times 6 = 720$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of ways in which 4 boys and 4 girls can sit in a row such that all boys sit together and all girls sit together is:",
    options: [
      "1152",
      "576",
      "2304",
      "288"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Treat the group of boys as 1 block and the group of girls as 1 block. The 2 blocks can be arranged in $2! = 2$ ways (Boys then Girls, or Girls then Boys). The 4 boys can arrange among themselves in $4! = 24$ ways, and the 4 girls in $4! = 24$ ways. Total ways = $2 \\times 24 \\times 24 = 1152$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "How many 5-letter words can be formed from the letters of the word 'EQUATION' without repetition such that each word begins with a consonant and ends with a vowel?",
    options: [
      "1800",
      "720",
      "1200",
      "2400"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "In 'EQUATION', vowels are E, U, A, I, O (5 vowels), and consonants are Q, T, N (3 consonants). Total = 8 distinct letters.\n- 1st position (consonant): 3 choices.\n- 5th position (vowel): 5 choices.\n- Middle 3 positions: chosen and arranged from the remaining $8 - 2 = 6$ letters in $^6P_3 = 6 \\times 5 \\times 4 = 120$ ways.\nTotal words = $3 \\times 5 \\times 120 = 1800$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of arrangements of the letters of the word 'PENCIL' in which the letter N is always between E and C (not necessarily adjacent) is:",
    options: [
      "240",
      "360",
      "120",
      "720"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "There are 6 distinct letters. In any permutation of the 6 letters, the 3 letters E, N, C can appear in $3! = 6$ relative orders (ENC, CNE, ECN, CEN, NEC, NCE). By symmetry, each relative order appears with equal frequency. N is between E and C in exactly 2 of these orders: (ENC and CNE). Thus, the fraction of valid permutations is $\\frac{2}{6} = \\frac{1}{3}$. Total arrangements = $\\frac{1}{3} \\times 6! = \\frac{720}{3} = 240$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of linear permutations of $n$ distinct objects taken all at a time is $n!$.\nReason (R): The first position can be filled in $n$ ways, the second in $(n-1)$ ways, and so on, giving $n(n-1)\\cdots(1) = n!$ by the multiplication principle.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "This is the fundamental definition and proof of permutations of $n$ distinct objects. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In arranging $m$ men and $w$ women in a row, the gap method is used when no two women are to sit together.\nReason (R): In the gap method, men are arranged first, creating $(m+1)$ distinct separated slots where at most one woman is placed per slot.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The gap method places one object per gap, guaranteeing that no two restricted objects are adjacent. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The string (or tie) method is used to find the number of arrangements when certain specified objects must always be together.\nReason (R): By treating the required adjacent objects as a single composite object, the problem reduces to arranging $(n - k + 1)$ units, followed by internal permutations of the $k$ objects.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "This is the exact formulation of the string/tie method. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any positive integers $n$ and $r$ with $1 \\le r \\le n$, $^n P_r = r! \\times \\binom{n}{r}$.\nReason (R): Choosing $r$ objects from $n$ distinct objects takes $\\binom{n}{r}$ ways, and each selection can be arranged linearly in $r!$ ways.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$^n P_r = \\frac{n!}{(n-r)!} = r! \\frac{n!}{r!(n-r)!} = r! \\binom{n}{r}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to arrange the letters of the word 'RANDOM' such that R and M are at the extreme positions is $48$.\nReason (R): The 2 extreme positions can be filled by R and M in $2! = 2$ ways, and the remaining 4 letters are arranged in $4! = 24$ ways, giving $2 \\times 24 = 48$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Ends can be R...M or M...R ($2! = 2$). The 4 middle letters (A, N, D, O) can be arranged in $4! = 24$ ways. Total = 48. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In dictionary rank problems without repetition, the rank of a word is equal to 1 plus the number of words that precede it in alphabetical order.\nReason (R): Words in a dictionary are listed strictly in lexicographical order, so the rank counts all preceding words plus the target word itself.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The rank is by definition 1-indexed, so it equals the count of alphabetically preceding words + 1. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways of arranging 5 persons in a line such that person A is always ahead of person B is $60$.\nReason (R): In exactly half of the $5! = 120$ permutations, A appears ahead of B by symmetry, so $\\frac{120}{2} = 60$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A is ahead of B in half the total permutations, and B is ahead of A in the other half. Total = $120/2 = 60$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $n$ distinct books are arranged in a row, the probability that two given books are together is $\\frac{2}{n}$.\nReason (R): The number of arrangements with the two books together is $2! (n-1)!$, and dividing by total arrangements $n!$ gives $\\frac{2(n-1)!}{n!} = \\frac{2}{n}$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Favorable permutations = $2!(n-1)!$, total permutations = $n!$. The ratio is $\\frac{2!(n-1)!}{n!} = \\frac{2}{n}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The value of $^n P_0 = 1$ for all non-negative integers $n$.\nReason (R): By definition, $^n P_r = \\frac{n!}{(n-r)!}$, so for $r = 0$, $^n P_0 = \\frac{n!}{n!} = 1$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$^n P_0 = \\frac{n!}{(n-0)!} = \\frac{n!}{n!} = 1$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If 3 boys and 2 girls stand in a line, the number of ways they can stand so that the girls are never together is $72$.\nReason (R): Arranging 3 boys takes $3! = 6$ ways, producing 4 gaps. Placing 2 girls in 4 gaps takes $^4P_2 = 12$ ways, giving $6 \\times 12 = 72$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Gap method: 3 boys arranged in $3! = 6$ ways creates 4 gaps. 2 girls in 4 gaps is $^4P_2 = 12$. Total = $6 \\times 12 = 72$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "In how many ways can 6 distinct persons be arranged in a line such that two particular persons are always together?",
    options: [],
    correctOption: null,
    correctAnswer: 240,
    type: "numerical",
    solution: "Treat the 2 persons as 1 unit: $(6 - 2 + 1) = 5$ units arranged in $5! = 120$ ways. Internally they arrange in $2! = 2$ ways. Total = $120 \\times 2 = 240$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the rank of the word 'CHAT' when all its permutations are listed in dictionary order.",
    options: [],
    correctOption: null,
    correctAnswer: 9,
    type: "numerical",
    solution: "Alphabetical order of letters: A, C, H, T.\n- Starting with A: $3! = 6$\n- Starting with CA: $2! = 2$\n- Next word: CHAT ($1$).\nRank = $6 + 2 + 1 = 9$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "How many ways can 4 boys and 3 girls be seated in a row such that all 3 girls are seated together?",
    options: [],
    correctOption: null,
    correctAnswer: 720,
    type: "numerical",
    solution: "Treat the 3 girls as 1 block. Total units = $4 + 1 = 5$ units, arranged in $5! = 120$ ways. The 3 girls arrange among themselves in $3! = 6$ ways. Total = $120 \\times 6 = 720$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of ways of arranging the letters of the word 'GARDEN' with the vowels in alphabetical order.",
    options: [],
    correctOption: null,
    correctAnswer: 360,
    type: "numerical",
    solution: "The vowels are A and E (2 vowels). In half of the permutations A precedes E, and in the other half E precedes A. Total permutations = $\\frac{6!}{2!} = \\frac{720}{2} = 360$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "In how many ways can 5 distinct books be arranged on a shelf such that two specified books are separated by at least one book?",
    options: [],
    correctOption: null,
    correctAnswer: 72,
    type: "numerical",
    solution: "Total arrangements = $5! = 120$. Arrangements where the two books are together = $4! \\times 2! = 24 \\times 2 = 48$. Ways where they are separated = $120 - 48 = 72$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of 4-letter permutations that can be formed from the 6 letters of the word 'FLOWER'.",
    options: [],
    correctOption: null,
    correctAnswer: 360,
    type: "numerical",
    solution: "$^6P_4 = 6 \\times 5 \\times 4 \\times 3 = 360$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the rank of the word 'CAT' in a dictionary formed by all permutations of its letters.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "Letters: A, C, T.\n- Starting with A: $2! = 2$ words (ACT, ATC)\n- Next word: CAT (rank 3).\nThus, rank = 3.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "In how many ways can 4 boys and 2 girls be arranged in a row such that the 2 girls are never together?",
    options: [],
    correctOption: null,
    correctAnswer: 480,
    type: "numerical",
    solution: "Arrange 4 boys in $4! = 24$ ways. There are 5 gaps. Place the 2 girls in $^5P_2 = 5 \\times 4 = 20$ ways. Total = $24 \\times 20 = 480$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of arrangements of the letters of the word 'DETAIL' when vowels occupy only the odd positions is:",
    options: [],
    correctOption: null,
    correctAnswer: 36,
    type: "numerical",
    solution: "'DETAIL' has 6 letters: 3 vowels (E, A, I) and 3 consonants (D, T, L). The odd positions are 1st, 3rd, 5th (3 positions). The 3 vowels can be placed in these 3 positions in $3! = 6$ ways. The 3 consonants occupy the even positions (2nd, 4th, 6th) in $3! = 6$ ways. Total = $6 \\times 6 = 36$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "How many ways can 5 students be arranged in a line if the tallest student must always stand in the middle position?",
    options: [],
    correctOption: null,
    correctAnswer: 24,
    type: "numerical",
    solution: "The middle position (3rd) is fixed for the tallest student (1 way). The remaining 4 positions can be filled by the remaining 4 students in $4! = 24$ ways. Total = $1 \\times 24 = 24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic2Questions };
