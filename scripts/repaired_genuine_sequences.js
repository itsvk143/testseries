// scripts/repaired_genuine_sequences.js
// Surgically repaired 52 genuine questions for Sequences & Series

const repairedGenuineSequences = {
  // [1]
  '6a98e674910bb37b0e5585ef': {
    question: 'The first term of an arithmetic progression is $5$ and the common difference is $3$. What is the $10$th term of the progression?',
    options: ['$27$', '$32$', '$30$', '$35$'],
    correctAnswer: 1,
    explanation: 'The $n$-th term of an arithmetic progression is given by $a_n = a_1 + (n-1)d$.\nHere, $a_1 = 5$, $d = 3$, and $n = 10$.\n$$a_{10} = 5 + (10 - 1) \\times 3 = 5 + 9 \\times 3 = 5 + 27 = 32.$$'
  },
  // [2]
  '6a98e674910bb37b0e5585f0': {
    question: 'In an arithmetic progression, the $5$th term is $15$ and the $10$th term is $30$. What is the common difference?',
    options: ['$2$', '$3$', '$4$', '$5$'],
    correctAnswer: 1,
    explanation: 'Let the first term be $a_1$ and common difference be $d$.\n$$a_5 = a_1 + 4d = 15, \\quad a_{10} = a_1 + 9d = 30.$$\nSubtracting the two equations gives $5d = 15 \\implies d = 3$.'
  },
  // [3]
  '6a98e674910bb37b0e5585f1': {
    question: 'Find the sum of the first $20$ terms of an arithmetic progression whose first term is $2$ and common difference is $4$.',
    options: ['$780$', '$800$', '$820$', '$760$'],
    correctAnswer: 1,
    explanation: 'The sum of the first $n$ terms of an AP is $S_n = \\frac{n}{2}[2a_1 + (n-1)d]$.\nFor $n = 20$, $a_1 = 2$, and $d = 4$:\n$$S_{20} = \\frac{20}{2}[2(2) + 19(4)] = 10[4 + 76] = 10 \\times 80 = 800.$$'
  },
  // [4]
  '6a98e674910bb37b0e5585f2': {
    question: 'The sum of the first $15$ terms of an arithmetic progression is $225$. If the first term is $1$, what is the common difference?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 1,
    explanation: 'Using the sum formula $S_{15} = \\frac{15}{2}[2(1) + 14d] = 225$:\n$$15(1 + 7d) = 225 \\implies 1 + 7d = 15 \\implies 7d = 14 \\implies d = 2.$$'
  },
  // [5]
  '6a98e674910bb37b0e5585f3': {
    question: 'Which term of the arithmetic progression $3, 7, 11, \\dots$ is $39$?',
    options: ['$9$th', '$10$th', '$11$th', '$12$th'],
    correctAnswer: 1,
    explanation: 'Here $a_1 = 3$ and $d = 7 - 3 = 4$.\n$$a_n = 3 + (n-1)4 = 39 \\implies 4(n-1) = 36 \\implies n-1 = 9 \\implies n = 10.$$\nThus, the $10$th term is $39$.'
  },
  // [6]
  '6a98e674910bb37b0e5585f4': {
    question: 'The $3$rd term of an AP is $7$ and the $7$th term is $15$. Find the first term.',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 2,
    explanation: 'We have $a_3 = a_1 + 2d = 7$ and $a_7 = a_1 + 6d = 15$.\nSubtracting gives $4d = 8 \\implies d = 2$.\nThen $a_1 = 7 - 2(2) = 7 - 4 = 3$.'
  },
  // [7]
  '6a98e674910bb37b0e5585f5': {
    question: 'Find the sum of all odd integers from $1$ to $99$ inclusive.',
    options: ['$2500$', '$2550$', '$2450$', '$2600$'],
    correctAnswer: 0,
    explanation: 'The odd integers from $1$ to $99$ form an AP: $1, 3, 5, \\dots, 99$.\nFirst term $a = 1$, common difference $d = 2$, last term $l = 99$.\nNumber of terms: $99 = 1 + (n-1)2 \\implies 2(n-1) = 98 \\implies n = 50$.\nSum of first $n$ odd integers is $n^2 = 50^2 = 2500$.'
  },
  // [8]
  '6a98e674910bb37b0e5585f6': {
    question: 'Find the sum of the arithmetic series $10 + 13 + 16 + \\dots + 46$.',
    options: ['$364$', '$377$', '$390$', '$351$'],
    correctAnswer: 0,
    explanation: 'First term $a = 10$, common difference $d = 3$, last term $l = 46$.\n$$46 = 10 + (n-1)3 \\implies 3(n-1) = 36 \\implies n = 13.$$\n$$S_{13} = \\frac{13}{2}(10 + 46) = \\frac{13}{2} \\times 56 = 13 \\times 28 = 364.$$'
  },
  // [9]
  '6a98e674910bb37b0e5585f7': {
    question: 'If the $n$-th term of an AP is given by $a_n = 5n - 2$, what is the common difference?',
    options: ['$3$', '$5$', '$7$', '$2$'],
    correctAnswer: 1,
    explanation: 'The common difference is $d = a_n - a_{n-1} = (5n - 2) - (5(n-1) - 2) = 5$.'
  },
  // [10]
  '6a98e674910bb37b0e5585f8': {
    question: 'The sum of the first $10$ terms of an AP is $155$. The common difference is $3$. Find the first term.',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 1,
    explanation: 'Using $S_{10} = \\frac{10}{2}[2a_1 + 9(3)] = 155$:\n$$5[2a_1 + 27] = 155 \\implies 2a_1 + 27 = 31 \\implies 2a_1 = 4 \\implies a_1 = 2.$$'
  },
  // [11]
  '6a98e677910bb37b0e5585f9': {
    question: 'The first term of a geometric progression is $5$ and the common ratio is $2$. What is the $6$th term?',
    options: ['$160$', '$80$', '$320$', '$640$'],
    correctAnswer: 0,
    explanation: 'The $n$-th term of a GP is $a_n = a_1 r^{n-1}$.\nFor $a_1 = 5$, $r = 2$, and $n = 6$:\n$$a_6 = 5 \\times 2^{6-1} = 5 \\times 2^5 = 5 \\times 32 = 160.$$'
  },
  // [12]
  '6a98e677910bb37b0e5585fa': {
    question: 'Find the sum of the first $5$ terms of a geometric progression with first term $3$ and common ratio $-2$.',
    options: ['$33$', '$-33$', '$99$', '$-99$'],
    correctAnswer: 0,
    explanation: 'The sum of the first $n$ terms of a GP is $S_n = \\frac{a_1(1 - r^n)}{1 - r}$.\nFor $a_1 = 3$, $r = -2$, and $n = 5$:\n$$S_5 = \\frac{3(1 - (-2)^5)}{1 - (-2)} = \\frac{3(1 - (-32))}{3} = 1 + 32 = 33.$$'
  },
  // [13]
  '6a98e677910bb37b0e5585fb': {
    question: 'In a geometric progression, the $3$rd term is $20$ and the $6$th term is $160$. Find the common ratio.',
    options: ['$2$', '$\\frac{1}{2}$', '$4$', '$-2$'],
    correctAnswer: 0,
    explanation: 'We have $a_3 = a_1 r^2 = 20$ and $a_6 = a_1 r^5 = 160$.\nDividing the two equations:\n$$\\frac{a_1 r^5}{a_1 r^2} = \\frac{160}{20} \\implies r^3 = 8 \\implies r = 2.$$'
  },
  // [14]
  '6a98e677910bb37b0e5585fc': {
    question: 'What is the sum to infinity of a geometric progression with first term $10$ and common ratio $\\frac{1}{2}$?',
    options: ['$20$', '$5$', '$10$', '$\\infty$'],
    correctAnswer: 0,
    explanation: 'For $|r| < 1$, the sum to infinity is $S_\\infty = \\frac{a_1}{1 - r}$.\nHere $a_1 = 10$ and $r = \\frac{1}{2}$:\n$$S_\\infty = \\frac{10}{1 - \\frac{1}{2}} = \\frac{10}{\\frac{1}{2}} = 20.$$'
  },
  // [15]
  '6a98e677910bb37b0e5585fd': {
    question: 'The $4$th term of a geometric progression is $54$ and the common ratio is $3$. What is the first term?',
    options: ['$2$', '$6$', '$18$', '$\\frac{1}{2}$'],
    correctAnswer: 0,
    explanation: 'Using $a_n = a_1 r^{n-1}$, for $a_4 = 54$, $r = 3$, and $n = 4$:\n$$54 = a_1 \\times 3^{3} = 27 a_1 \\implies a_1 = \\frac{54}{27} = 2.$$'
  },
  // [16]
  '6a98e677910bb37b0e5585fe': {
    question: 'Find the positive geometric mean of $4$ and $36$.',
    options: ['$10$', '$20$', '$12$', '$16$'],
    correctAnswer: 2,
    explanation: 'The geometric mean of two positive numbers $a$ and $b$ is $\\sqrt{ab}$.\n$$\\text{GM} = \\sqrt{4 \\times 36} = \\sqrt{144} = 12.$$'
  },
  // [17]
  '6a98e677910bb37b0e5585ff': {
    question: 'A geometric progression has a common ratio of $\\frac{1}{3}$ and its sum to infinity is $18$. What is the first term?',
    options: ['$6$', '$12$', '$24$', '$36$'],
    correctAnswer: 1,
    explanation: 'Using $S_\\infty = \\frac{a_1}{1 - r}$ with $S_\\infty = 18$ and $r = \\frac{1}{3}$:\n$$18 = \\frac{a_1}{1 - \\frac{1}{3}} = \\frac{a_1}{\\frac{2}{3}} \\implies a_1 = 18 \\times \\frac{2}{3} = 12.$$'
  },
  // [18]
  '6a98e677910bb37b0e558600': {
    question: 'If the $2$nd term of a geometric progression of positive terms is $6$ and the $4$th term is $54$, find the common ratio.',
    options: ['$3$', '$\\frac{1}{3}$', '$9$', '$-3$'],
    correctAnswer: 0,
    explanation: 'We have $a_2 = a_1 r = 6$ and $a_4 = a_1 r^3 = 54$.\n$$\\frac{a_1 r^3}{a_1 r} = \\frac{54}{6} \\implies r^2 = 9.$$\nSince the terms are positive, $r = 3$.'
  },
  // [19]
  '6a98e677910bb37b0e558601': {
    question: 'The sum of the first $3$ terms of a geometric progression is $26$. If the common ratio is $3$, find the first term.',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 1,
    explanation: 'Using $S_3 = a_1(1 + r + r^2) = 26$ with $r = 3$:\n$$a_1(1 + 3 + 9) = 13 a_1 = 26 \\implies a_1 = 2.$$'
  },
  // [20]
  '6a98e677910bb37b0e558602': {
    question: 'Which term of the geometric progression $3, 6, 12, \\dots$ is $384$?',
    options: ['$7$th', '$8$th', '$9$th', '$10$th'],
    correctAnswer: 1,
    explanation: 'Here $a_1 = 3$ and $r = \\frac{6}{3} = 2$.\n$$384 = 3 \\times 2^{n-1} \\implies 2^{n-1} = 128 = 2^7 \\implies n-1 = 7 \\implies n = 8.$$\nThus, the $8$th term is $384$.'
  },
  // [21]
  '6a98e677910bb37b0e558603': {
    question: 'The sum of an infinite geometric series is $15$. If the first term is $5$, what is the common ratio?',
    options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{3}{2}$', '$\\frac{1}{2}$'],
    correctAnswer: 0,
    explanation: 'Using $S_\\infty = \\frac{a_1}{1 - r}$:\n$$15 = \\frac{5}{1 - r} \\implies 1 - r = \\frac{5}{15} = \\frac{1}{3} \\implies r = 1 - \\frac{1}{3} = \\frac{2}{3}.$$'
  },
  // [22]
  '6a98fb22b89acd4c6047d4d2': {
    question: 'The $5$th term of an arithmetic progression is $20$ and the $10$th term is $40$. What is the common difference?',
    options: ['$2$', '$3$', '$4$', '$5$'],
    correctAnswer: 2,
    explanation: 'We have $a_5 = a + 4d = 20$ and $a_{10} = a + 9d = 40$.\nSubtracting gives $5d = 20 \\implies d = 4$.'
  },
  // [23]
  '6a98fb22b89acd4c6047d4d3': {
    question: 'Find the sum of the first $10$ terms of the geometric progression $2, 6, 18, \\dots$',
    options: ['$59048$', '$19682$', '$59049$', '$19683$'],
    correctAnswer: 0,
    explanation: 'Here $a = 2$, $r = 3$, and $n = 10$.\n$$S_{10} = \\frac{2(3^{10} - 1)}{3 - 1} = 3^{10} - 1 = 59049 - 1 = 59048.$$'
  },
  // [24]
  '6a98fb22b89acd4c6047d4d4': {
    question: 'What is the $8$th term of the AP with first term $5$ and common difference $-3$?',
    options: ['$-16$', '$-19$', '$-13$', '$-22$'],
    correctAnswer: 0,
    explanation: '$$a_8 = a + 7d = 5 + 7(-3) = 5 - 21 = -16.$$'
  },
  // [25]
  '6a98fb22b89acd4c6047d4d5': {
    question: 'The sum of the first $15$ terms of an AP is $300$. If the first term is $6$, find the common difference.',
    options: ['$2$', '$3$', '$4$', '$5$'],
    correctAnswer: 0,
    explanation: 'Using $S_{15} = \\frac{15}{2}[2(6) + 14d] = 300$:\n$$15(6 + 7d) = 300 \\implies 6 + 7d = 20 \\implies 7d = 14 \\implies d = 2.$$'
  },
  // [26]
  '6a98fb22b89acd4c6047d4d6': {
    question: 'Find the sum to infinity of the GP $8, 4, 2, \\dots$',
    options: ['$16$', '$15$', '$32$', '$14$'],
    correctAnswer: 0,
    explanation: 'Here $a = 8$ and $r = \\frac{4}{8} = \\frac{1}{2}$. Since $|r| < 1$:\n$$S_\\infty = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16.$$'
  },
  // [27]
  '6a98fb22b89acd4c6047d4d7': {
    question: 'In a GP, the first term is $1$ and the common ratio is $2$. What is the sum of the first $7$ terms?',
    options: ['$127$', '$128$', '$126$', '$129$'],
    correctAnswer: 0,
    explanation: '$$S_7 = \\frac{1(2^7 - 1)}{2 - 1} = 128 - 1 = 127.$$'
  },
  // [28]
  '6a98fb22b89acd4c6047d4d9': {
    question: 'What is the $6$th term of the GP $3, -6, 12, \\dots$?',
    options: ['$-96$', '$96$', '$-192$', '$192$'],
    correctAnswer: 0,
    explanation: 'Here $a = 3$ and $r = \\frac{-6}{3} = -2$.\n$$a_6 = 3(-2)^{6-1} = 3(-2)^5 = 3(-32) = -96.$$'
  },
  // [29]
  '6a98fb22b89acd4c6047d4da': {
    question: 'Find the sum of the first $10$ terms of a GP with first term $1$ and common ratio $2$.',
    options: ['$1023$', '$1024$', '$2047$', '$511$'],
    correctAnswer: 0,
    explanation: '$$S_{10} = \\frac{1(2^{10} - 1)}{2 - 1} = 1024 - 1 = 1023.$$'
  },
  // [30]
  '6a98fb22b89acd4c6047d4db': {
    question: 'Find the sum of the first $20$ terms of the AP: $1, 4, 7, 10, \\dots$',
    options: ['$590$', '$580$', '$591$', '$581$'],
    correctAnswer: 0,
    explanation: 'Here $a = 1$, $d = 3$, and $n = 20$.\n$$S_{20} = \\frac{20}{2}[2(1) + 19(3)] = 10[2 + 57] = 10(59) = 590.$$'
  },
  // [31]
  '6a98fb26b89acd4c6047d4dc': {
    question: 'What is the sum of the infinite geometric series $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\dots$?',
    options: ['$3$', '$2$', '$\\frac{3}{2}$', '$4$'],
    correctAnswer: 2,
    explanation: 'Here $a = 1$ and $r = \\frac{1}{3}$. Since $|r| < 1$:\n$$S = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}.$$'
  },
  // [32]
  '6a98fb26b89acd4c6047d4dd': {
    question: 'Find the sum to infinity of the series $10 - 5 + \\frac{5}{2} - \\frac{5}{4} + \\dots$',
    options: ['$\\frac{20}{3}$', '$\\frac{10}{3}$', '$20$', '$15$'],
    correctAnswer: 0,
    explanation: 'Here $a = 10$ and $r = \\frac{-5}{10} = -\\frac{1}{2}$.\n$$S = \\frac{10}{1 - \\left(-\\frac{1}{2}\\right)} = \\frac{10}{\\frac{3}{2}} = \\frac{20}{3}.$$'
  },
  // [33]
  '6a98fb26b89acd4c6047d4de': {
    question: 'The first term of an infinite geometric series is $8$ and the common ratio is $-\\frac{1}{2}$. What is the sum of the series?',
    options: ['$\\frac{16}{3}$', '$\\frac{8}{3}$', '$16$', '$8$'],
    correctAnswer: 0,
    explanation: 'Here $a = 8$ and $r = -\\frac{1}{2}$.\n$$S = \\frac{8}{1 - \\left(-\\frac{1}{2}\\right)} = \\frac{8}{\\frac{3}{2}} = \\frac{16}{3}.$$'
  },
  // [34]
  '6a98fb26b89acd4c6047d4df': {
    question: 'An infinite geometric series has a common ratio of $r = 0.2$ and its sum is $10$. What is the first term?',
    options: ['$6$', '$8$', '$10$', '$12$'],
    correctAnswer: 1,
    explanation: 'Using $S = \\frac{a}{1 - r}$:\n$$10 = \\frac{a}{1 - 0.2} = \\frac{a}{0.8} \\implies a = 10 \\times 0.8 = 8.$$'
  },
  // [35]
  '6a98fb26b89acd4c6047d4e0': {
    question: 'If the sum of an infinite geometric series is $25$ and the first term is $5$, what is the common ratio?',
    options: ['$-\\frac{4}{5}$', '$\\frac{4}{5}$', '$-\\frac{3}{5}$', '$\\frac{3}{5}$'],
    correctAnswer: 1,
    explanation: 'Using $S = \\frac{a}{1 - r}$:\n$$25 = \\frac{5}{1 - r} \\implies 1 - r = \\frac{5}{25} = \\frac{1}{5} \\implies r = 1 - \\frac{1}{5} = \\frac{4}{5}.$$'
  },
  // [36]
  '6a98fb26b89acd4c6047d4e1': {
    question: 'Which of the following infinite geometric series converges?',
    options: [
      '$1 + 2 + 4 + 8 + \\dots$',
      '$1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\dots$',
      '$1 + \\frac{3}{2} + \\frac{9}{4} + \\frac{27}{8} + \\dots$',
      '$1 - \\sqrt{2} + 2 - 2\\sqrt{2} + \\dots$'
    ],
    correctAnswer: 1,
    explanation: 'An infinite geometric series converges if and only if $|r| < 1$.\nFor $1 - \\frac{1}{2} + \\frac{1}{4} - \\dots$, $r = -\\frac{1}{2}$ so $|r| = \\frac{1}{2} < 1$. All other series have $|r| > 1$.'
  },
  // [37]
  '6a98fb26b89acd4c6047d4e2': {
    question: 'What is the sum of the infinite geometric series $2 - \\frac{2}{3} + \\frac{2}{9} - \\frac{2}{27} + \\dots$?',
    options: ['$3$', '$2$', '$\\frac{3}{2}$', '$4$'],
    correctAnswer: 2,
    explanation: 'Here $a = 2$ and $r = \\frac{-2/3}{2} = -\\frac{1}{3}$.\n$$S = \\frac{2}{1 - \\left(-\\frac{1}{3}\\right)} = \\frac{2}{\\frac{4}{3}} = 2 \\times \\frac{3}{4} = \\frac{3}{2}.$$'
  },
  // [38]
  '6a98fb26b89acd4c6047d4e3': {
    question: 'Find the sum to infinity of the series $50 + 25 + 12.5 + 6.25 + \\dots$',
    options: ['$100$', '$75$', '$50$', '$125$'],
    correctAnswer: 0,
    explanation: 'Here $a = 50$ and $r = \\frac{25}{50} = \\frac{1}{2}$.\n$$S = \\frac{50}{1 - \\frac{1}{2}} = \\frac{50}{\\frac{1}{2}} = 100.$$'
  },
  // [39]
  '6a98fb26b89acd4c6047d4e4': {
    question: 'An infinite geometric series has a sum of $12$ and a common ratio of $r = \\frac{1}{3}$. What is the first term?',
    options: ['$4$', '$6$', '$8$', '$12$'],
    correctAnswer: 2,
    explanation: 'Using $S = \\frac{a}{1 - r}$:\n$$12 = \\frac{a}{1 - \\frac{1}{3}} = \\frac{a}{\\frac{2}{3}} \\implies a = 12 \\times \\frac{2}{3} = 8.$$'
  },
  // [40]
  '6a98fb26b89acd4c6047d4e5': {
    question: 'If the first term of a convergent infinite geometric series is $9$ and its sum is $27$, what is the common ratio?',
    options: ['$-\\frac{2}{3}$', '$\\frac{2}{3}$', '$-\\frac{1}{3}$', '$\\frac{1}{3}$'],
    correctAnswer: 1,
    explanation: 'Using $S = \\frac{a}{1 - r}$:\n$$27 = \\frac{9}{1 - r} \\implies 1 - r = \\frac{9}{27} = \\frac{1}{3} \\implies r = 1 - \\frac{1}{3} = \\frac{2}{3}.$$'
  },
  // [41]
  '6a98fb2fb89acd4c6047d4f0': {
    question: 'Insert $3$ arithmetic means between $5$ and $21$.',
    options: ['$9, 13, 17$', '$8, 12, 16$', '$7, 11, 15$', '$10, 14, 18$'],
    correctAnswer: 0,
    explanation: 'Let the $3$ AMs be $A_1, A_2, A_3$. The sequence $5, A_1, A_2, A_3, 21$ forms an AP with $5$ terms.\nCommon difference: $d = \\frac{21 - 5}{3 + 1} = \\frac{16}{4} = 4$.\nThus, the means are:\n$$A_1 = 5 + 4 = 9, \\quad A_2 = 9 + 4 = 13, \\quad A_3 = 13 + 4 = 17.$$'
  },
  // [42]
  '6a98fb2fb89acd4c6047d4f1': {
    question: 'If the arithmetic mean of two positive numbers is $10$ and their geometric mean is $8$, find the numbers.',
    options: ['$20$ and $10$', '$16$ and $4$', '$12$ and $8$', '$15$ and $5$'],
    correctAnswer: 1,
    explanation: 'Let the numbers be $a$ and $b$.\n$$\\text{AM} = \\frac{a+b}{2} = 10 \\implies a+b = 20.$$\n$$\\text{GM} = \\sqrt{ab} = 8 \\implies ab = 64.$$\nThe numbers are roots of $t^2 - 20t + 64 = 0 \\implies (t-16)(t-4) = 0$.\nThus the numbers are $16$ and $4$.'
  },
  // [43]
  '6a98fb2fb89acd4c6047d4f2': {
    question: 'Insert $4$ geometric means between $3$ and $96$.',
    options: ['$6, 12, 24, 48$', '$3, 6, 12, 24$', '$9, 18, 36, 72$', '$6, 12, 18, 24$'],
    correctAnswer: 0,
    explanation: 'Let the $4$ GMs be $G_1, G_2, G_3, G_4$. The sequence $3, G_1, G_2, G_3, G_4, 96$ is a GP of $6$ terms.\nCommon ratio: $r = \\left(\\frac{96}{3}\\right)^{\\frac{1}{4+1}} = (32)^{\\frac{1}{5}} = 2$.\nThe means are $3(2) = 6, 6(2) = 12, 12(2) = 24, 24(2) = 48$.'
  },
  // [44]
  '6a98fb2fb89acd4c6047d4f3': {
    question: 'Find the arithmetic mean of the numbers $15, 25$, and $35$.',
    options: ['$20$', '$25$', '$30$', '$35$'],
    correctAnswer: 1,
    explanation: '$$\\text{AM} = \\frac{15 + 25 + 35}{3} = \\frac{75}{3} = 25.$$'
  },
  // [45]
  '6a98fb2fb89acd4c6047d4f4': {
    question: 'Find the geometric mean of the positive numbers $4$ and $16$.',
    options: ['$6$', '$8$', '$10$', '$12$'],
    correctAnswer: 1,
    explanation: '$$\\text{GM} = \\sqrt{4 \\times 16} = \\sqrt{64} = 8.$$'
  },
  // [46]
  '6a98fb2fb89acd4c6047d4f5': {
    question: 'Insert $2$ arithmetic means between $-4$ and $14$.',
    options: ['$2, 8$', '$2, 10$', '$0, 6$', '$4, 8$'],
    correctAnswer: 0,
    explanation: 'Let the means be $A_1, A_2$. The sequence $-4, A_1, A_2, 14$ is an AP with $4$ terms.\n$$d = \\frac{14 - (-4)}{2 + 1} = \\frac{18}{3} = 6.$$\n$$A_1 = -4 + 6 = 2, \\quad A_2 = 2 + 6 = 8.$$'
  },
  // [47]
  '6a98fb2fb89acd4c6047d4f6': {
    question: 'Insert $3$ geometric means between $2$ and $162$.',
    options: ['$6, 18, 54$', '$4, 12, 36$', '$3, 9, 27$', '$5, 15, 45$'],
    correctAnswer: 0,
    explanation: 'The sequence $2, G_1, G_2, G_3, 162$ is a GP of $5$ terms.\n$$r = \\left(\\frac{162}{2}\\right)^{\\frac{1}{3+1}} = (81)^{\\frac{1}{4}} = 3.$$\n$$G_1 = 2 \\times 3 = 6, \\quad G_2 = 6 \\times 3 = 18, \\quad G_3 = 18 \\times 3 = 54.$$'
  },
  // [48]
  '6a98fb2fb89acd4c6047d4f7': {
    question: 'If the arithmetic mean of two positive numbers is $15$ and their geometric mean is $12$, find the numbers.',
    options: ['$20$ and $10$', '$24$ and $6$', '$18$ and $12$', '$9$ and $16$'],
    correctAnswer: 1,
    explanation: '$$a+b = 2(15) = 30, \\quad ab = 12^2 = 144.$$\nThe numbers are roots of $t^2 - 30t + 144 = 0 \\implies (t-24)(t-6) = 0$.\nThus the numbers are $24$ and $6$.'
  },
  // [49]
  '6a98fb2fb89acd4c6047d4f8': {
    question: 'Insert $5$ arithmetic means between $10$ and $52$.',
    options: [
      '$17, 24, 31, 38, 45$',
      '$16, 23, 30, 37, 44$',
      '$18, 25, 32, 39, 46$',
      '$15, 22, 29, 36, 43$'
    ],
    correctAnswer: 0,
    explanation: 'Let the $5$ AMs be $A_1, \\dots, A_5$. The sequence $10, A_1, \\dots, A_5, 52$ is an AP with $7$ terms.\n$$d = \\frac{52 - 10}{5 + 1} = \\frac{42}{6} = 7.$$\nThe means are $17, 24, 31, 38, 45$.'
  },
  // [50]
  '6a98fb2fb89acd4c6047d4f9': {
    question: 'Insert $2$ geometric means between $\\frac{1}{3}$ and $9$.',
    options: ['$1, 3$', '$1, \\frac{3}{2}$', '$\\frac{3}{2}, \\frac{9}{2}$', '$2, 6$'],
    correctAnswer: 0,
    explanation: 'Let the $2$ GMs be $G_1, G_2$. The sequence $\\frac{1}{3}, G_1, G_2, 9$ has $4$ terms.\n$$r = \\left(\\frac{9}{1/3}\\right)^{\\frac{1}{2+1}} = (27)^{\\frac{1}{3}} = 3.$$\n$$G_1 = \\frac{1}{3} \\times 3 = 1, \\quad G_2 = 1 \\times 3 = 3.$$'
  },
  // [51]
  '6a98fb2fb89acd4c6047d4fa': {
    question: 'If $A_1, A_2, \\dots, A_n$ are $n$ arithmetic means inserted between two numbers $a$ and $b$, then their sum $\\sum_{i=1}^n A_i$ is equal to:',
    options: [
      '$n\\left(\\frac{a+b}{2}\\right)$',
      '$\\frac{n(a+b)}{4}$',
      '$\\frac{a+b}{2}$',
      '$n(a+b)$'
    ],
    correctAnswer: 0,
    explanation: 'The sum of $n$ arithmetic means inserted between $a$ and $b$ is equal to $n$ times the single arithmetic mean between $a$ and $b$:\n$$\\sum_{i=1}^n A_i = n\\left(\\frac{a+b}{2}\\right).$$'
  },
  // [52]
  '6a98fb2fb89acd4c6047d4fb': {
    question: 'If $G_1, G_2, \\dots, G_n$ are $n$ positive geometric means inserted between two positive numbers $a$ and $b$, then their product $\\prod_{i=1}^n G_i$ is equal to:',
    options: [
      '$(\\sqrt{ab})^n$',
      '$\\sqrt{ab}$',
      '$(ab)^n$',
      '$\\frac{(\\sqrt{ab})^n}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'The product of $n$ geometric means inserted between $a$ and $b$ is equal to the $n$-th power of the single geometric mean between $a$ and $b$:\n$$\\prod_{i=1}^n G_i = (\\sqrt{ab})^n.$$'
  }
};

module.exports = { repairedGenuineSequences };
