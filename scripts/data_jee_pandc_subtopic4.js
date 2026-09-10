// scripts/data_jee_pandc_subtopic4.js
// Subtopic 4: Permutations of objects not all distinct (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    question: "The number of different words that can be formed using all the letters of the word 'MISSISSIPPI' such that the four S's never come together is:",
    options: [
      "33810",
      "34650",
      "840",
      "33600"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The word 'MISSISSIPPI' contains 11 letters: M: 1, I: 4, S: 4, P: 2.\nTotal words = $\\frac{11!}{4! \\, 4! \\, 2!} = \\frac{39916800}{24 \\times 24 \\times 2} = 34650$.\nWhen the 4 S's come together, treat 'SSSS' as 1 unit. There are then 8 units (SSSS, M, 4 I's, 2 P's) with repeats: 4 I's and 2 P's.\nNumber of words where all 4 S's are together = $\\frac{8!}{4! \\, 2!} = \\frac{40320}{24 \\times 2} = 840$.\nThus, number of words where the 4 S's never come together = $34650 - 840 = 33810$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If all the letters of the word 'GOOGLE' are permuted in all possible ways and arranged in alphabetical order as in a dictionary, the rank of the word 'GOOGLE' is:",
    options: [
      "88",
      "86",
      "90",
      "84"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of GOOGLE in alphabetical order: E (1), G (2), L (1), O (2).\n- Words starting with E: letters left {G, G, L, O, O} $\\rightarrow \\frac{5!}{2! \\, 2!} = \\frac{120}{4} = 30$.\n- Words starting with G:\n  - Words starting with GE: letters left {G, L, O, O} $\\rightarrow \\frac{4!}{2!} = 12$.\n  - Words starting with GG: letters left {E, L, O, O} $\\rightarrow \\frac{4!}{2!} = 12$.\n  - Words starting with GL: letters left {E, G, O, O} $\\rightarrow \\frac{4!}{2!} = 12$.\n  - Words starting with GO:\n    - Words starting with GOE: letters left {G, L, O} $\\rightarrow 3! = 6$.\n    - Words starting with GOG:\n      - Words starting with GOGE: letters left {L, O} $\\rightarrow 2! = 2$.\n      - Words starting with GOGL: letters left {E, O} $\\rightarrow$ GOGLEO (1), GOGLEE? wait: letters left for GOGL are {E, O} $\\rightarrow$ GOGLEO (1st), GOGLOE (2nd) $\\rightarrow 2$.\n      - Words starting with GOGO:\n        - GOGOE L $\\rightarrow 1$\n        - GOGOL E (GOOGLE) $\\rightarrow 1$\nSum = $30 + 12 + 12 + 12 + 6 + 2 + 2 + 1 + 1 = 78$? Let's re-evaluate systematically:\nLetters: E(1), G(2), L(1), O(2).\n1. Starting with E: $\\frac{5!}{2! 2!} = 30$.\n2. Starting with G: remaining {E, G, L, O, O}.\n   - GE... : $\\frac{4!}{2!} = 12$\n   - GG... : $\\frac{4!}{2!} = 12$\n   - GL... : $\\frac{4!}{2!} = 12$\n   - GO... :\n     - GOE... : remaining {G, L, O} $\\rightarrow 3! = 6$\n     - GOG... :\n       - GOGE... : remaining {L, O} $\\rightarrow 2! = 2$\n       - GOGL... : remaining {E, O} $\\rightarrow 2! = 2$\n       - GOGO... :\n         - GOGOE... : remaining {L} $\\rightarrow 1$ (GOGOEL)\n         - GOGOL... : remaining {E} $\\rightarrow 1$ (GOGOLE)\n     Wait, GOOGLE has L before the second G! The letters in GOOGLE are G-O-O-G-L-E!\n     Let's spell GOOGLE:\n     1st letter: G\n     2nd letter: O\n     3rd letter: O\n     4th letter: G\n     5th letter: L\n     6th letter: E\n     Ah! 3rd letter is O! Not G!\n     Let's re-do GO...:\n     - GOE... : {G, L, O} $\\rightarrow 3! = 6$\n     - GOG... : {E, L, O} $\\rightarrow 3! = 6$\n     - GOL... : {E, G, O} $\\rightarrow 3! = 6$\n     - GOO... : remaining {E, G, L} $\\rightarrow$\n       - GOOE... : {G, L} $\\rightarrow 2! = 2$\n       - GOOG... :\n         - GOOGE... : {L} $\\rightarrow 1$ (GOOGEL)\n         - GOOGL... : {E} $\\rightarrow 1$ (GOOGLE)\n     Total rank = $30 + 12 + 12 + 12 + 6 + 6 + 6 + 2 + 1 + 1 = 88$!\n     Exactly 88! Options: 88, 86, 90, 84.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of permutations of the letters of the word 'STATISTICS' in which all three T's are together and both S's are together is: (Wait, in STATISTICS: S: 3, T: 3, A: 1, I: 2, C: 1. Total = 10 letters. Let's specify: all three T's are together and all three S's are together.)",
    question: "The number of arrangements of all the letters of the word 'STATISTICS' in which all three T's are together and all three S's are together is:",
    options: [
      "360",
      "720",
      "180",
      "60"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The letters of 'STATISTICS' are S: 3, T: 3, I: 2, A: 1, C: 1 (Total = 10 letters).\nTreat all three T's as 1 block $(TTT)$ and all three S's as 1 block $(SSS)$.\nNow the objects to arrange are: $(TTT), (SSS), I, I, A, C$.\nTotal objects = 6, with I repeated 2 times.\nNumber of arrangements = $\\frac{6!}{2!} = \\frac{720}{2} = 360$.\nSince the 3 T's are identical, they can be arranged inside their block in only 1 way. Similarly, the 3 S's can be arranged in 1 way.\nHence, total arrangements = 360.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of seven-digit numbers that can be formed using the digits 1, 2, 0, 2, 4, 2, 4 is:",
    options: [
      "360",
      "420",
      "300",
      "240"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The given multiset of digits is $\\{0, 1, 2, 2, 2, 4, 4\\}$ (total 7 digits: 0: 1, 1: 1, 2: 3, 4: 2).\nTotal arrangements of 7 digits = $\\frac{7!}{3! \\, 2!} = \\frac{5040}{6 \\times 2} = 420$.\nArrangements starting with 0 (which are not 7-digit numbers) = $\\frac{6!}{3! \\, 2!} = \\frac{720}{12} = 60$.\nThus, number of 7-digit numbers = $420 - 60 = 360$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of arrangements of the letters of the word 'INDEPENDENCE' in which all the vowels always occur together is:",
    options: [
      "16800",
      "33600",
      "50400",
      "12600"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of INDEPENDENCE (12 letters):\nConsonants: N: 3, D: 2, P: 1, C: 1 (total 7 consonants).\nVowels: E: 4, I: 1 (total 5 vowels).\nTreat the 5 vowels as a single entity: (EEEEI).\nNumber of entities to arrange = $7 + 1 = 8$ entities (with N repeated 3 times, D repeated 2 times).\nArrangements of entities = $\\frac{8!}{3! \\, 2!} = \\frac{40320}{6 \\times 2} = 3360$.\nArrangements of the 5 vowels within the unit = $\\frac{5!}{4!} = 5$.\nTotal number of arrangements = $3360 \\times 5 = 16800$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "In how many ways can the letters of the word 'ARRANGE' be arranged such that the two R's never come together?",
    options: [
      "900",
      "1260",
      "360",
      "720"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of ARRANGE (7 letters): A: 2, R: 2, N: 1, G: 1, E: 1.\nTotal arrangements = $\\frac{7!}{2! \\, 2!} = \\frac{5040}{4} = 1260$.\nArrangements where both R's are together: Treat 'RR' as 1 entity. Then we have 6 entities (RR, A, A, N, G, E) with A repeated 2 times.\nNumber of arrangements = $\\frac{6!}{2!} = \\frac{720}{2} = 360$.\nArrangements where R's are not together = $1260 - 360 = 900$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of words that can be formed using all the letters of the word 'BANANA' such that the two N's do not appear adjacently is:",
    options: [
      "40",
      "60",
      "20",
      "30"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of BANANA: A: 3, N: 2, B: 1 (Total = 6 letters).\nTotal arrangements = $\\frac{6!}{3! \\, 2!} = \\frac{720}{6 \\times 2} = 60$.\nArrangements where two N's are together: Treat 'NN' as 1 letter. Then we have {B, A, A, A, NN} (5 letters, with 3 A's).\nArrangements with N's together = $\\frac{5!}{3!} = 20$.\nNumber of arrangements where N's do not appear adjacently = $60 - 20 = 40$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of four-letter words that can be formed using the letters of the word 'BARRACK' is:",
    options: [
      "270",
      "264",
      "120",
      "240"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of BARRACK (7 letters): A: 2, R: 2, B: 1, C: 1, K: 1.\nDistinct letters available: {A, R, B, C, K} (5 distinct).\nCases for 4-letter words:\nCase 1: All 4 distinct letters.\nChoose 4 from 5: $^5C_4 = 5$ ways. Arrange: $5 \\times 4! = 5 \\times 24 = 120$.\nCase 2: 2 of one kind, 2 of another kind (i.e., $A, A, R, R$).\nChoose both pairs: 1 way. Arrange: $\\frac{4!}{2! \\, 2!} = 6$ ways.\nCase 3: 2 of one kind, 2 distinct.\nChoose which repeated letter (A or R): $^2C_1 = 2$ ways.\nChoose 2 other distinct letters from remaining 4 distinct: $^4C_2 = 6$ ways.\nArrange: $\\frac{4!}{2!} = 12$ ways.\nTotal for Case 3 = $2 \\times 6 \\times 12 = 144$.\nTotal 4-letter words = $120 + 6 + 144 = 270$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "hard"
  },
  {
    question: "The number of ways in which the letters of the word 'SUCCESS' can be arranged such that the vowels are always together is:",
    options: [
      "60",
      "120",
      "180",
      "40"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of 'SUCCESS': S: 3, C: 2, U: 1, E: 1 (Total = 7 letters).\nVowels: U, E (2 vowels). Consonants: S, S, S, C, C (5 consonants).\nTreat the vowels (UE) as a single block: (UE).\nTotal entities to arrange = $5 + 1 = 6$, with S repeated 3 times and C repeated 2 times.\nNumber of arrangements of entities = $\\frac{6!}{3! \\, 2!} = \\frac{720}{6 \\times 2} = 60$.\nThe 2 vowels inside the block can be arranged in $2! = 2$ ways.\nTotal number of arrangements = $60 \\times 2 = 120$... wait! Let's check options: If total is 120, then option B is 120. Let's make Option 0: 120, Option 1: 60, Option 2: 180, Option 3: 240.",
    options: [
      "120",
      "60",
      "180",
      "240"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of 'SUCCESS': S: 3, C: 2, U: 1, E: 1 (Total = 7 letters).\nVowels: U, E (2 vowels). Treat (U, E) as 1 block.\nTotal entities to arrange = $1 + 5 = 6$ (with 3 S's and 2 C's):\n$\\frac{6!}{3! \\, 2!} = \\frac{720}{12} = 60$.\nThe vowels U and E can be arranged within the block in $2! = 2$ ways.\nTotal arrangements = $60 \\times 2 = 120$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If all the letters of the word 'COCHIN' are permuted and all the permutations are arranged in alphabetical order as in an English dictionary, then the number of words that appear before the word 'COCHIN' is:",
    options: [
      "96",
      "48",
      "192",
      "97"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Letters of COCHIN in alphabetical order: C (2), H (1), I (1), N (1), O (1).\nWords before COCHIN:\n- Words starting with C: The second letter can be C, H, I, N before O.\n  - Words starting with CC: remaining 4 distinct letters $\\rightarrow 4! = 24$.\n  - Words starting with CH: remaining 4 letters with one C $\\rightarrow 4! = 24$.\n  - Words starting with CI: remaining 4 letters with one C $\\rightarrow 4! = 24$.\n  - Words starting with CN: remaining 4 letters with one C $\\rightarrow 4! = 24$.\n- Next comes CO: The alphabetical order of remaining letters {C, H, I, N} is C, H, I, N.\n  So the very first word starting with CO is COCHIN!\nThus, the number of words appearing before COCHIN = $24 + 24 + 24 + 24 = 96$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of permutations of all letters of the word 'INSTITUTE' is 30240.\nReason (R): The total number of permutations of $n$ objects taken all at a time, where $p$ objects are of one kind, $q$ of another kind, and the rest distinct, is $\\frac{n!}{p! \\, q!}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The word 'INSTITUTE' contains 9 letters: I: 2, T: 3, N: 1, S: 1, U: 1, E: 1.\nUsing the multiset permutation formula: $\\frac{9!}{2! \\, 3!} = \\frac{362880}{2 \\times 6} = \\frac{362880}{12} = 30240$.\nBoth (A) and (R) are true and (R) is the correct explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of arrangements of the letters of the word 'ALLAHABAD' is 7560.\nReason (R): In the word 'ALLAHABAD', there are 9 letters in which 'A' occurs 4 times and 'L' occurs 2 times, so the number of arrangements is $\\frac{9!}{4! \\, 2!} = 7560$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "'ALLAHABAD' has 9 letters: A appears 4 times, L appears 2 times, and H, B, D appear 1 time each. Total permutations = $\\frac{9!}{4! \\, 2!} = \\frac{362880}{24 \\times 2} = 7560$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways of arranging the letters of the word 'MATHEMATICS' such that the two A's are never together is $4536000$.\nReason (R): Total permutations of 'MATHEMATICS' is $\\frac{11!}{2! \\, 2! \\, 2!} = 4989600$, and permutations with both A's together is $\\frac{10!}{2! \\, 2!} = 907200$, giving $4989600 - 907200 = 4082400$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "'MATHEMATICS' (11 letters): M: 2, A: 2, T: 2, H: 1, E: 1, I: 1, C: 1, S: 1.\nTotal permutations = $\\frac{11!}{2! \\, 2! \\, 2!} = 4989600$.\nPermutations where two A's are together: Treat 'AA' as 1 unit. There are 10 units with M: 2, T: 2 $\\rightarrow \\frac{10!}{2! \\, 2!} = \\frac{3628800}{4} = 907200$.\nPermutations where two A's are never together = $4989600 - 907200 = 4082400$.\nAssertion (A) states 4536000, which is incorrect. Reason (R) correctly calculates 4082400. Thus, (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of signals that can be sent using 3 red flags, 2 blue flags, and 4 yellow flags arranged in a vertical line is 1260.\nReason (R): The number of permutations of 9 flags of which 3 are red, 2 are blue, and 4 are yellow is given by $\\frac{9!}{3! \\, 2! \\, 4!}$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Total flags = $3 + 2 + 4 = 9$. The number of vertical signals using all flags is $\\frac{9!}{3! \\, 2! \\, 4!} = \\frac{362880}{6 \\times 2 \\times 24} = \\frac{362880}{288} = 1260$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of distinct 6-digit numbers that can be formed from the digits 1, 1, 2, 2, 3, 3 is 90.\nReason (R): The number of permutations of 6 digits where three pairs of identical digits exist is $\\frac{6!}{2! \\, 2! \\, 2!} = \\frac{720}{8} = 90$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "There are 6 digits: two 1's, two 2's, two 3's (none of which is 0). Total 6-digit numbers = $\\frac{6!}{2! \\, 2! \\, 2!} = \\frac{720}{8} = 90$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of permutations of the letters of the word 'COMMITTEE' is 45360.\nReason (R): 'COMMITTEE' has 9 letters with M: 2, T: 2, E: 2, so the number of permutations is $\\frac{9!}{2! \\, 2! \\, 2!} = 45360$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "'COMMITTEE' has 9 letters: C (1), O (1), M (2), I (1), T (2), E (2). Number of permutations = $\\frac{9!}{2! \\, 2! \\, 2!} = \\frac{362880}{8} = 45360$. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to arrange the letters of the word 'SERIES' such that the two S's are separated is 120.\nReason (R): Total arrangements is $\\frac{6!}{2! \\, 2!} = 180$ and arrangements where both S's are together is $\\frac{5!}{2!} = 60$, giving $180 - 60 = 120$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Letters of SERIES: S: 2, E: 2, R: 1, I: 1 (total 6 letters).\nTotal arrangements = $\\frac{6!}{2! \\, 2!} = 180$.\nArrangements where both S's are together: treat 'SS' as 1 unit. Units = {SS, E, E, R, I} (5 units with 2 E's) $\\rightarrow \\frac{5!}{2!} = 60$.\nSeparated S's = $180 - 60 = 120$. Both are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In forming 5-letter words from the letters of 'PROPORTION', the number of words with all 5 distinct letters is 120.\nReason (R): The word 'PROPORTION' has 6 distinct letters {P, R, O, T, I, N}, so the number of 5-letter words with distinct letters is $^6P_5 = 720$.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The distinct letters of PROPORTION are P, R, O, T, I, N (6 distinct letters). To form a 5-letter word with all distinct letters, we choose and arrange 5 letters: $^6P_5 = 720$. Thus Assertion (A) which states 120 is false, while Reason (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to arrange the letters of 'PARALLEL' such that all L's are together is 360.\nReason (R): Treat all three L's as one unit, then we have 6 units {LLL, P, A, R, A, E} with A occurring twice, giving $\\frac{6!}{2!} = 360$ arrangements.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Letters of PARALLEL (8 letters): L: 3, A: 2, P: 1, R: 1, E: 1.\nTreating all 3 L's as one unit (LLL), there are $1 + 5 = 6$ units with A repeated 2 times.\nNumber of arrangements = $\\frac{6!}{2!} = \\frac{720}{2} = 360$. Since the L's are identical, they can be arranged inside the unit in only 1 way. Both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to arrange the letters of the word 'INTERMEDIATE' keeping the relative order of the vowels unchanged is 19958400.\nReason (R): To keep the relative order of $k$ objects unchanged among $n$ objects, we place the $k$ objects in selected positions in only 1 way.\nIn light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Letters of INTERMEDIATE (12 letters): Vowels: I: 2, E: 3, A: 1 (total 6 vowels). Consonants: N: 1, T: 2, R: 1, M: 1, D: 1 (total 6 consonants).\nTo keep the relative order of vowels unchanged (e.g. as they appear I, E, E, I, A, E), the 6 positions for vowels can be chosen in $\\binom{12}{6}$ ways, and the vowels are placed in these positions in only 1 way. The 6 consonants have T repeated twice, so they can be arranged in the remaining 6 spots in $\\frac{6!}{2!} = 360$ ways.\nTotal ways = $\\binom{12}{6} \\times 360 = 924 \\times 360 = 332640 \\neq 19958400$. Thus (A) is false but (R) is true.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "To keep the relative order of vowels fixed: Choose 6 positions out of 12 for the vowels in $\\binom{12}{6} = 924$ ways. Once chosen, there is only 1 way to fill them with the vowels in their original order. The remaining 6 positions are filled by the 6 consonants (with T repeated twice) in $\\frac{6!}{2!} = 360$ ways. Total arrangements = $924 \\times 360 = 332640$. Hence Assertion (A) is false while Reason (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },

  // --- 10 Numerical Value Questions ---
  {
    question: "The total number of permutations of the letters of the word 'MALAYALAM' is:",
    options: [],
    correctOption: null,
    correctAnswer: 3780,
    type: "numerical",
    solution: "Letters of MALAYALAM (9 letters): M: 2, A: 4, L: 2, Y: 1.\nNumber of permutations = $\\frac{9!}{4! \\, 2! \\, 2!} = \\frac{362880}{24 \\times 2 \\times 2} = \\frac{362880}{96} = 3780$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "How many distinct 5-digit numbers can be formed using the digits 2, 2, 3, 3, 5?",
    options: [],
    correctOption: null,
    correctAnswer: 30,
    type: "numerical",
    solution: "The multiset of digits is {2, 2, 3, 3, 5} (total 5 digits, none of which is 0).\nNumber of distinct 5-digit numbers = $\\frac{5!}{2! \\, 2!} = \\frac{120}{4} = 30$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of arrangements of the letters of the word 'ASSASSINATION' in which all four S's are together is:",
    options: [],
    correctOption: null,
    correctAnswer: 151200,
    type: "numerical",
    solution: "Letters of ASSASSINATION (13 letters): A: 3, S: 4, I: 2, N: 2, T: 1, O: 1.\nTreating all four S's as 1 entity (SSSS), we have 10 entities:\n{SSSS, A, A, A, I, I, N, N, T, O}.\nRepeats among these entities: A: 3, I: 2, N: 2.\nNumber of arrangements = $\\frac{10!}{3! \\, 2! \\, 2!} = \\frac{3628800}{6 \\times 2 \\times 2} = \\frac{3628800}{24} = 151200$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the number of words that can be formed by arranging the letters of the word 'ROOPKUND' such that the two O's are not together.",
    options: [],
    correctOption: null,
    correctAnswer: 15120,
    type: "numerical",
    solution: "Letters of ROOPKUND (8 letters): O: 2, R: 1, P: 1, K: 1, U: 1, N: 1, D: 1.\nTotal arrangements = $\\frac{8!}{2!} = \\frac{40320}{2} = 20160$.\nArrangements where both O's are together: Treat 'OO' as 1 unit. Units = 7 distinct units $\\rightarrow 7! = 5040$.\nArrangements where two O's are not together = $20160 - 5040 = 15120$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of 6-digit numbers that can be formed using the digits 0, 1, 2, 2, 3, 3 is:",
    options: [],
    correctOption: null,
    correctAnswer: 150,
    type: "numerical",
    solution: "Multiset of digits: {0, 1, 2, 2, 3, 3} (6 digits: 0: 1, 1: 1, 2: 2, 3: 2).\nTotal arrangements of 6 digits = $\\frac{6!}{2! \\, 2!} = \\frac{720}{4} = 180$.\nArrangements starting with 0 = $\\frac{5!}{2! \\, 2!} = \\frac{120}{4} = 30$.\nNumber of valid 6-digit numbers = $180 - 30 = 150$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of ways to arrange the letters of the word 'CHEESE' such that no two E's are adjacent.",
    options: [],
    correctOption: null,
    correctAnswer: 24,
    type: "numerical",
    solution: "Letters of CHEESE (6 letters): E: 3, C: 1, H: 1, S: 1.\nFirst, arrange the non-E letters {C, H, S} in a row: $3! = 6$ ways.\nThis creates $3 + 1 = 4$ gaps: _ C _ H _ S _.\nThe 3 identical E's must be placed into these 4 gaps with at most 1 E per gap.\nNumber of ways to choose 3 gaps out of 4 is $\\binom{4}{3} = 4$.\nSince the E's are identical, placing them is done in only 1 way.\nTotal arrangements = $6 \\times 4 = 24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the rank of the word 'SURITI' when all permutations of its letters are arranged in dictionary order.",
    options: [],
    correctOption: null,
    correctAnswer: 236,
    type: "numerical",
    solution: "Letters of SURITI in alphabetical order: I (2), R (1), S (1), T (1), U (1) (total 6 letters).\n1. Words starting with I: remaining {I, R, S, T, U} are all distinct $\\rightarrow 5! = 120$.\n2. Words starting with R: remaining {I, I, S, T, U} $\\rightarrow \\frac{5!}{2!} = 60$.\n3. Words starting with S:\n   - SI... : remaining {I, R, T, U} $\\rightarrow 4! = 24$.\n   - SR... : remaining {I, I, T, U} $\\rightarrow \\frac{4!}{2!} = 12$.\n   - ST... : remaining {I, I, R, U} $\\rightarrow \\frac{4!}{2!} = 12$.\n   - SU... :\n     - SUI... : remaining {I, R, T} $\\rightarrow 3! = 6$.\n     - SUR... :\n       - SURI... : remaining {I, T} $\\rightarrow$\n         - SURII T (1)\n         - SURI T I (1, this is SURITI!)\nTotal rank = $120 + 60 + 24 + 12 + 12 + 6 + 1 + 1 = 236$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "hard"
  },
  {
    question: "The number of distinct words that can be formed from all the letters of the word 'HONOLULU' is:",
    options: [],
    correctOption: null,
    correctAnswer: 5040,
    type: "numerical",
    solution: "Letters of HONOLULU (8 letters): H: 1, O: 2, N: 1, L: 2, U: 2.\nNumber of distinct words = $\\frac{8!}{2! \\, 2! \\, 2!} = \\frac{40320}{8} = 5040$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The number of 3-letter words that can be formed from the letters of the word 'SERIES' is:",
    options: [],
    correctOption: null,
    correctAnswer: 42,
    type: "numerical",
    solution: "Letters of SERIES (6 letters): S: 2, E: 2, R: 1, I: 1.\nDistinct letters available: {S, E, R, I} (4 distinct).\nCase 1: All 3 letters distinct.\nChoose 3 from 4: $\\binom{4}{3} = 4$ ways. Arrange: $4 \\times 3! = 4 \\times 6 = 24$.\nCase 2: 2 letters identical, 1 letter different.\nChoose which repeated letter (S or E): $\\binom{2}{1} = 2$ choices.\nChoose the 1 different letter from the remaining 3 distinct letters: $\\binom{3}{1} = 3$ choices.\nArrange the 3 letters (e.g. S, S, R): $\\frac{3!}{2!} = 3$ ways.\nTotal for Case 2 = $2 \\times 3 \\times 3 = 18$.\nTotal 3-letter words = $24 + 18 = 42$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "In how many ways can the letters of the word 'ENGINEERING' be arranged such that all 3 E's are together and all 3 N's are together?",
    options: [],
    correctOption: null,
    correctAnswer: 1260,
    type: "numerical",
    solution: "Letters of ENGINEERING (11 letters): E: 3, N: 3, G: 2, I: 2, R: 1.\nTreat the 3 E's as one block (EEE) and the 3 N's as one block (NNN).\nObjects to arrange: (EEE), (NNN), G, G, I, I, R.\nTotal objects = 7, with G repeated 2 times and I repeated 2 times.\nNumber of arrangements = $\\frac{7!}{2! \\, 2!} = \\frac{5040}{4} = 1260$.\nSince the E's and N's are identical within their blocks, their internal arrangements are 1 way each.\nTotal arrangements = 1260.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  }
];

module.exports = { subtopic4Questions };
