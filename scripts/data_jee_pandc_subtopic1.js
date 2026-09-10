// scripts/data_jee_pandc_subtopic1.js
// Subtopic 1: Fundamental principles (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    question: "The number of 4-digit numbers strictly greater than $4000$ that can be formed using the digits $0, 1, 2, 3, 4, 5$ without repetition is:",
    options: [
      "120",
      "240",
      "60",
      "144"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The thousands place can be filled by either $4$ or $5$ (2 choices) so that the number is $\\ge 4000$. Since digits cannot repeat, the remaining 3 places are filled from the remaining 5 digits in $^5P_3 = 5 \\times 4 \\times 3 = 60$ ways. Thus, total numbers = $2 \\times 60 = 120$. Since digits are distinct, none of these numbers equals 4000.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "How many 5-digit numbers can be formed using the digits $0, 1, 2, 3, 4, 5$ without repetition that are divisible by 5?",
    options: [
      "216",
      "120",
      "96",
      "240"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A number is divisible by 5 if its unit digit is $0$ or $5$.\nCase 1: Unit digit is $0$.\nThe first 4 digits are chosen from $\\{1, 2, 3, 4, 5\\}$ in $5 \\times 4 \\times 3 \\times 2 = 120$ ways.\nCase 2: Unit digit is $5$.\nThe ten-thousands place cannot be $0$, so there are 4 choices $\\{1, 2, 3, 4\\}$. The remaining 3 positions are filled from the remaining 4 digits (including 0) in $^4P_3 = 4 \\times 3 \\times 2 = 24$ ways. So $4 \\times 24 = 96$ ways.\nTotal = $120 + 96 = 216$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The total number of 4-digit odd numbers that can be formed using the digits $1, 2, 3, 4, 5, 6, 7$ without repetition is:",
    options: [
      "480",
      "360",
      "240",
      "120"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The odd digits available are $\\{1, 3, 5, 7\\}$ (4 choices for the units place).\nAfter choosing the units digit, the remaining 3 places are filled from the remaining 6 digits in $^6P_3 = 6 \\times 5 \\times 4 = 120$ ways.\nTotal numbers = $4 \\times 120 = 480$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "How many 3-digit even numbers can be formed using the digits $0, 1, 2, 3, 4, 5$ without repetition?",
    options: [
      "52",
      "48",
      "60",
      "40"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "An even number must end in 0, 2, or 4.\nCase 1: Unit digit is 0. The hundreds place has 5 choices ($1-5$), and tens place has 4 choices: $5 \\times 4 = 20$ numbers.\nCase 2: Unit digit is 2 or 4 (2 choices). The hundreds place cannot be 0 or the chosen unit digit, leaving $6 - 2 = 4$ choices. The tens place has 4 remaining choices: $2 \\times (4 \\times 4) = 32$ numbers.\nTotal even numbers = $20 + 32 = 52$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The number of integers between $100$ and $1000$ in which every digit is either $3$ or $7$ is:",
    options: [
      "8",
      "6",
      "12",
      "16"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A number between 100 and 1000 has 3 digits. Each of the 3 positions (hundreds, tens, units) has 2 choices ($3$ or $7$).\nBy the multiplication principle, the total number of such integers is $2 \\times 2 \\times 2 = 2^3 = 8$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "A test contains 5 multiple-choice questions, each having 4 options. In how many different ways can a student answer all 5 questions?",
    options: [
      "1024",
      "625",
      "20",
      "120"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Each of the 5 questions has 4 possible choices. By the multiplication principle: $4 \\times 4 \\times 4 \\times 4 \\times 4 = 4^5 = 1024$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The number of signals that can be given using any number of 5 different colored flags on a vertical pole is:",
    options: [
      "325",
      "120",
      "240",
      "320"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Signals can use 1, 2, 3, 4, or 5 flags:\n- 1 flag: $^5P_1 = 5$\n- 2 flags: $^5P_2 = 20$\n- 3 flags: $^5P_3 = 60$\n- 4 flags: $^5P_4 = 120$\n- 5 flags: $^5P_5 = 120$\nTotal signals = $5 + 20 + 60 + 120 + 120 = 325$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "How many 4-digit numbers can be formed using the digits $1, 2, 3, 4, 5, 6$ without repetition such that the number is divisible by 4?",
    options: [
      "72",
      "60",
      "96",
      "48"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A number is divisible by 4 if its last two digits form a multiple of 4.\nThe possible 2-digit pairs from $\\{1, 2, 3, 4, 5, 6\\}$ divisible by 4 are: $12, 16, 24, 32, 36, 52, 56, 64$ (8 valid pairs).\nFor each pair, the first two digits are chosen from the remaining $6 - 2 = 4$ digits in $^4P_2 = 4 \\times 3 = 12$ ways.\nTotal numbers = $8 \\times 12 = 72$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "There are 4 bus lines between cities A and B, and 3 bus lines between B and C. In how many ways can a person travel from A to C through B and return if he does not want to use the same bus line more than once?",
    options: [
      "72",
      "144",
      "36",
      "48"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Going from A to B: 4 choices.\nGoing from B to C: 3 choices.\nReturning from C to B: $3 - 1 = 2$ choices.\nReturning from B to A: $4 - 1 = 3$ choices.\nTotal round trips = $4 \\times 3 \\times 2 \\times 3 = 72$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "How many 6-digit numbers can be formed from the digits $0, 1, 3, 5, 7, 9$ without repetition?",
    options: [
      "600",
      "720",
      "120",
      "540"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The first digit (hundred-thousands place) cannot be $0$, so there are 5 choices $\\{1, 3, 5, 7, 9\\}$.\nThe remaining 5 places are filled from the remaining 5 digits in $5! = 120$ ways.\nTotal 6-digit numbers = $5 \\times 120 = 600$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of 4-digit numbers formed by using the digits $1, 2, 3, 4, 5$ with repetition allowed is $625$.\nReason (R): By the fundamental principle of multiplication, each of the 4 digit positions has 5 independent choices, yielding $5^4 = 625$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since none of the digits is zero and repetition is allowed, each of the 4 places can be filled in 5 ways: $5 \\times 5 \\times 5 \\times 5 = 625$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of 3-digit numbers that can be formed using digits $0, 1, 2$ without repetition is $4$.\nReason (R): The hundreds place cannot be zero (2 choices: 1 or 2), and the remaining 2 places are filled in $2! = 2$ ways, so $2 \\times 2 = 4$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The numbers are 102, 120, 201, 210 (4 numbers). The calculation $2 \\times 2! = 4$ is completely correct. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If event $E_1$ can occur in $m$ ways and a mutually exclusive event $E_2$ can occur in $n$ ways, then either $E_1$ or $E_2$ can occur in $m \\times n$ ways.\nReason (R): The fundamental principle of addition states that for mutually exclusive events, the number of ways either can occur is $m + n$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because the number of ways for either of two mutually exclusive events to occur is $m + n$, not $m \\times n$. Reason is true and correctly states the addition principle.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of ways to post 4 distinct letters in 3 distinct letter boxes is $3^4 = 81$.\nReason (R): Each of the 4 letters can be posted into any of the 3 letter boxes independently.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For each of the 4 letters, there are 3 independent choices of boxes: $3 \\times 3 \\times 3 \\times 3 = 3^4 = 81$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The total number of outcomes when 3 distinct dice are rolled simultaneously is $216$.\nReason (R): By the multiplication principle of counting, each die has 6 possible outcomes, so $6 \\times 6 \\times 6 = 6^3 = 216$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The sample space size for 3 dice is $6^3 = 216$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of natural numbers less than $1000$ that can be formed using digits $1, 2, 3$ without repetition is $15$.\nReason (R): 1-digit numbers = 3, 2-digit numbers = $^3P_2 = 6$, 3-digit numbers = $^3P_3 = 6$, and their sum is $3 + 6 + 6 = 15$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since natural numbers are $\\ge 1$, we partition into 1-digit (3), 2-digit (6), and 3-digit (6) numbers. Sum = 15. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of 5-digit telephone numbers that can be constructed using digits $0$ to $9$ starting with $67$ with no digit repeating is $336$.\nReason (R): After fixing the first two digits as $6$ and $7$, the remaining 3 places can be chosen from the remaining 8 digits in $^8P_3 = 8 \\times 7 \\times 6 = 336$ ways.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The first 2 digits are uniquely fixed. The remaining 3 positions have 8, 7, and 6 options respectively: $8 \\times 7 \\times 6 = 336$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of 4-digit numbers divisible by 5 that can be formed using digits $0, 1, 2, 3, 4$ without repetition is $24$.\nReason (R): Since 0 is the only available multiple of 5 among the given digits, the unit place must be 0, and the remaining 3 digits are chosen from $\\{1, 2, 3, 4\\}$ in $4 \\times 3 \\times 2 = 24$ ways.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The only digit that makes a number divisible by 5 here is 0. With 0 at units, the first 3 digits are arranged in $^4P_3 = 24$ ways. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The number of 4-letter words with or without meaning that can be formed out of the letters of the word 'LOGARITHMS' if repetition of letters is not allowed is $5040$.\nReason (R): The word 'LOGARITHMS' contains 10 distinct letters, so the number of 4-letter words is $^{10}P_4 = 10 \\times 9 \\times 8 \\times 7 = 5040$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "There are 10 distinct letters in LOGARITHMS. Choosing and arranging 4 gives $^{10}P_4 = 5040$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a room with 6 doors, a person can enter through one door and exit by a different door in $30$ ways.\nReason (R): There are 6 ways to enter and $6 - 1 = 5$ ways to exit, giving $6 \\times 5 = 30$ ways by the multiplication principle.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Entering: 6 choices; exiting: 5 choices. Total = $6 \\times 5 = 30$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "Find the total number of 3-digit numbers formed using the digits $1, 2, 3, 4, 5$ without repetition that are divisible by 2.",
    options: [],
    correctOption: null,
    correctAnswer: 24,
    type: "numerical",
    solution: "The unit digit must be 2 or 4 (2 choices). The remaining two positions are filled from the remaining 4 digits in $4 \\times 3 = 12$ ways. Total = $2 \\times 12 = 24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "How many 4-digit numbers greater than 5000 can be formed using the digits $1, 2, 3, 5, 7$ without repetition?",
    options: [],
    correctOption: null,
    correctAnswer: 48,
    type: "numerical",
    solution: "The first digit must be 5 or 7 (2 choices). The remaining 3 positions are filled from the remaining 4 digits in $^4P_3 = 4 \\times 3 \\times 2 = 24$ ways. Total = $2 \\times 24 = 48$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of 3-letter words that can be formed using the vowels $\\{A, E, I, O, U\\}$ with repetition allowed.",
    options: [],
    correctOption: null,
    correctAnswer: 125,
    type: "numerical",
    solution: "Each of the 3 positions has 5 choices: $5^3 = 125$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "How many 3-digit natural numbers can be formed using the non-zero digits $1, 2, 3, 4, 5$ without repetition?",
    options: [],
    correctOption: null,
    correctAnswer: 60,
    type: "numerical",
    solution: "$^5P_3 = 5 \\times 4 \\times 3 = 60$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of 2-digit prime numbers that can be formed using the digits $1, 3, 7$ without repetition.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "The 2-digit numbers without repetition from $\\{1, 3, 7\\}$ are $13, 17, 31, 37, 71, 73$. All 6 numbers are prime. Thus, the answer is 6.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the number of ways in which 3 prizes can be given to 5 students when each student is eligible to receive any number of prizes.",
    options: [],
    correctOption: null,
    correctAnswer: 125,
    type: "numerical",
    solution: "Each of the 3 prizes can be awarded to any of the 5 students: $5 \\times 5 \\times 5 = 125$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "How many odd numbers between 100 and 1000 can be formed using the digits $0, 1, 2, 3, 4$ without repetition?",
    options: [],
    correctOption: null,
    correctAnswer: 18,
    type: "numerical",
    solution: "The unit digit must be 1 or 3 (2 choices). The hundreds digit cannot be 0 or the chosen unit digit (leaves $5 - 2 = 3$ choices). The tens digit can be any of the remaining 3 digits. Total = $2 \\times 3 \\times 3 = 18$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Find the total number of 4-digit numbers formed using the digits $1, 2, 3, 4$ with repetition allowed.",
    options: [],
    correctOption: null,
    correctAnswer: 256,
    type: "numerical",
    solution: "Each of the 4 places has 4 choices: $4^4 = 256$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "In how many ways can 6 multiple choice questions with 2 options each (True or False) be answered?",
    options: [],
    correctOption: null,
    correctAnswer: 64,
    type: "numerical",
    solution: "$2^6 = 64$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of 3-digit palindromic numbers (numbers that read the same forwards and backwards) between 100 and 999.",
    options: [],
    correctOption: null,
    correctAnswer: 90,
    type: "numerical",
    solution: "A 3-digit palindrome has the form $a b a$, where $a \\in \\{1, 2, \\dots, 9\\}$ (9 choices) and $b \\in \\{0, 1, \\dots, 9\\}$ (10 choices). The unit digit is uniquely determined by $a$. Total = $9 \\times 10 = 90$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic1Questions };
