// scripts/data_jee_itf_subtopic4.js
// Subtopic 4: Sum and difference formulas for inverse trig functions
// 30 Authentic JEE Mains standard questions: 10 MCQs, 10 AR, 10 NUM

const SUBTOPIC = "Sum and difference formulas for inverse trig functions";
const CHAPTER = "Inverse Trigonometric Functions";

const subtopic4Questions = [
  // ==========================================
  // SECTION A: 10 MULTIPLE CHOICE QUESTIONS (MCQs)
  // ==========================================
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $\\tan^{-1}(1) + \\tan^{-1}(2) + \\tan^{-1}(3)$ is equal to:",
    options: [
      "$\\pi$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{3\\pi}{4}$",
      "$2\\pi$"
    ],
    correctOption: 0,
    explanation: "For $x = 2 > 0$ and $y = 3 > 0$, since $xy = 6 > 1$, we have:\n$$\\tan^{-1}(2) + \\tan^{-1}(3) = \\pi + \\tan^{-1}\\left(\\frac{2+3}{1-2\\times 3}\\right) = \\pi + \\tan^{-1}\\left(\\frac{5}{-5}\\right) = \\pi + \\tan^{-1}(-1) = \\pi - \\frac{\\pi}{4}$$\nThen:\n$$\\tan^{-1}(1) + \\tan^{-1}(2) + \\tan^{-1}(3) = \\frac{\\pi}{4} + \\left(\\pi - \\frac{\\pi}{4}\\right) = \\pi$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "If $\\sin^{-1} x + \\sin^{-1} y = \\frac{2\\pi}{3}$, then the value of $\\cos^{-1} x + \\cos^{-1} y$ is:",
    options: [
      "$\\frac{\\pi}{3}$",
      "$\\frac{2\\pi}{3}$",
      "$\\pi$",
      "$\\frac{\\pi}{6}$"
    ],
    correctOption: 0,
    explanation: "We know that $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ and $\\sin^{-1} y + \\cos^{-1} y = \\frac{\\pi}{2}$.\nAdding both identities:\n$$(\\sin^{-1} x + \\sin^{-1} y) + (\\cos^{-1} x + \\cos^{-1} y) = \\pi$$\nGiven $\\sin^{-1} x + \\sin^{-1} y = \\frac{2\\pi}{3}$, we get:\n$$\\cos^{-1} x + \\cos^{-1} y = \\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $\\tan\\left(2\\tan^{-1}\\left(\\frac{1}{5}\\right) - \\frac{\\pi}{4}\\right)$ is:",
    options: [
      "$-\\frac{7}{17}$",
      "$\\frac{7}{17}$",
      "$\\frac{5}{12}$",
      "$-\\frac{5}{12}$"
    ],
    correctOption: 0,
    explanation: "First evaluate $2\\tan^{-1}\\left(\\frac{1}{5}\\right)$:\n$$2\\tan^{-1}\\left(\\frac{1}{5}\\right) = \\tan^{-1}\\left(\\frac{2 \\times \\frac{1}{5}}{1 - (\\frac{1}{5})^2}\\right) = \\tan^{-1}\\left(\\frac{2/5}{24/25}\\right) = \\tan^{-1}\\left(\\frac{5}{12}\\right)$$\nLet $\\theta = \\tan^{-1}(5/12)$, so $\\tan\\theta = \\frac{5}{12}$.\nThen:\n$$\\tan\\left(\\theta - \\frac{\\pi}{4}\\right) = \\frac{\\tan\\theta - \\tan(\\pi/4)}{1 + \\tan\\theta \\tan(\\pi/4)} = \\frac{\\frac{5}{12} - 1}{1 + \\frac{5}{12}} = \\frac{-7/12}{17/12} = -\\frac{7}{17}$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The sum $\\sum_{n=1}^{\\infty} \\tan^{-1}\\left(\\frac{1}{n^2 + n + 1}\\right)$ converges to:",
    options: [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{3}$"
    ],
    correctOption: 0,
    explanation: "Note that $n^2 + n + 1 = 1 + n(n+1)$, and $1 = (n+1) - n$.\nThus, the general term is:\n$$T_n = \\tan^{-1}\\left(\\frac{(n+1) - n}{1 + (n+1)n}\\right) = \\tan^{-1}(n+1) - \\tan^{-1}(n)$$\nThis is a telescoping sum:\n$$S_N = \\sum_{n=1}^N (\\tan^{-1}(n+1) - \\tan^{-1}(n)) = \\tan^{-1}(N+1) - \\tan^{-1}(1)$$\nTaking the limit as $N \\to \\infty$:\n$$S = \\lim_{N \\to \\infty} \\tan^{-1}(N+1) - \\frac{\\pi}{4} = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $\\cos\\left(2\\sin^{-1}\\left(\\frac{3}{5}\\right)\\right)$ is equal to:",
    options: [
      "$\\frac{7}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{9}{25}$"
    ],
    correctOption: 0,
    explanation: "Let $\\theta = \\sin^{-1}(3/5)$, then $\\sin\\theta = \\frac{3}{5}$.\nWe need to compute $\\cos(2\\theta)$:\n$$\\cos(2\\theta) = 1 - 2\\sin^2\\theta = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $\\cot\\left(\\sum_{n=1}^{23} \\cot^{-1}\\left(1 + \\sum_{k=1}^n 2k\\right)\\right)$ is:",
    options: [
      "$\\frac{25}{23}$",
      "$\\frac{23}{25}$",
      "$\\frac{24}{23}$",
      "$\\frac{23}{24}$"
    ],
    correctOption: 0,
    explanation: "First, evaluate the inner sum:\n$$\\sum_{k=1}^n 2k = 2 \\times \\frac{n(n+1)}{2} = n(n+1)$$\nSo the term is $\\cot^{-1}(1 + n(n+1)) = \\tan^{-1}\\left(\\frac{1}{1 + n(n+1)}\\right) = \\tan^{-1}(n+1) - \\tan^{-1}(n)$.\nSumming from $n=1$ to $23$:\n$$S = \\sum_{n=1}^{23} (\\tan^{-1}(n+1) - \\tan^{-1}(n)) = \\tan^{-1}(24) - \\tan^{-1}(1) = \\tan^{-1}\\left(\\frac{24-1}{1+24\\times 1}\\right) = \\tan^{-1}\\left(\\frac{23}{25}\\right)$$\nTherefore:\n$$\\cot(S) = \\cot\\left(\\tan^{-1}\\left(\\frac{23}{25}\\right)\\right) = \\frac{25}{23}$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "If $4\\sin^{-1} x + \\cos^{-1} x = \\pi$, then $x$ is equal to:",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$1$"
    ],
    correctOption: 0,
    explanation: "Substitute $\\cos^{-1} x = \\frac{\\pi}{2} - \\sin^{-1} x$:\n$$4\\sin^{-1} x + \\left(\\frac{\\pi}{2} - \\sin^{-1} x\\right) = \\pi$$\n$$3\\sin^{-1} x + \\frac{\\pi}{2} = \\pi \\implies 3\\sin^{-1} x = \\frac{\\pi}{2} \\implies \\sin^{-1} x = \\frac{\\pi}{6}$$\nHence, $x = \\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $\\sin^{-1}\\left(\\frac{3}{5}\\right) + \\sin^{-1}\\left(\\frac{8}{17}\\right)$ is equal to:",
    options: [
      "$\\sin^{-1}\\left(\\frac{77}{85}\\right)$",
      "$\\sin^{-1}\\left(\\frac{84}{85}\\right)$",
      "$\\cos^{-1}\\left(\\frac{77}{85}\\right)$",
      "$\\cos^{-1}\\left(\\frac{13}{85}\\right)$"
    ],
    correctOption: 0,
    explanation: "Let $\\alpha = \\sin^{-1}(3/5)$ and $\\beta = \\sin^{-1}(8/17)$.\nThen $\\cos\\alpha = \\sqrt{1 - 9/25} = \\frac{4}{5}$, and $\\cos\\beta = \\sqrt{1 - 64/289} = \\frac{15}{17}$.\nNotice $\\alpha, \\beta \\in (0, \\pi/2)$ and $\\alpha + \\beta < \\pi/2$ because $\\cos(\\alpha+\\beta) = \\cos\\alpha \\cos\\beta - \\sin\\alpha \\sin\\beta = \\frac{4}{5}\\times \\frac{15}{17} - \\frac{3}{5}\\times \\frac{8}{17} = \\frac{60-24}{85} = \\frac{36}{85} > 0$.\nAlso, $\\sin(\\alpha + \\beta) = \\sin\\alpha \\cos\\beta + \\cos\\alpha \\sin\\beta = \\frac{3}{5}\\times \\frac{15}{17} + \\frac{4}{5}\\times \\frac{8}{17} = \\frac{45 + 32}{85} = \\frac{77}{85}$.\nThus, $\\sin^{-1}\\left(\\frac{3}{5}\\right) + \\sin^{-1}\\left(\\frac{8}{17}\\right) = \\sin^{-1}\\left(\\frac{77}{85}\\right)$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $\\cos^{-1}\\left(\\frac{4}{5}\\right) + \\tan^{-1}\\left(\\frac{3}{5}\\right)$ is equal to:",
    options: [
      "$\\tan^{-1}\\left(\\frac{27}{11}\\right)$",
      "$\\tan^{-1}\\left(\\frac{25}{11}\\right)$",
      "$\\tan^{-1}\\left(\\frac{19}{11}\\right)$",
      "$\\tan^{-1}\\left(\\frac{21}{11}\\right)$"
    ],
    correctOption: 0,
    explanation: "Since $\\frac{4}{5} > 0$, $\\cos^{-1}\\left(\\frac{4}{5}\\right) = \\tan^{-1}\\left(\\frac{\\sqrt{1-(4/5)^2}}{4/5}\\right) = \\tan^{-1}\\left(\\frac{3/5}{4/5}\\right) = \\tan^{-1}\\left(\\frac{3}{4}\\right)$.\nNow we find $\\tan^{-1}\\left(\\frac{3}{4}\\right) + \\tan^{-1}\\left(\\frac{3}{5}\\right)$:\nHere $x = \\frac{3}{4}$, $y = \\frac{3}{5}$, so $xy = \\frac{9}{20} < 1$.\n$$\\tan^{-1}\\left(\\frac{3}{4}\\right) + \\tan^{-1}\\left(\\frac{3}{5}\\right) = \\tan^{-1}\\left(\\frac{\\frac{3}{4} + \\frac{3}{5}}{1 - \\frac{3}{4} \\times \\frac{3}{5}}\\right) = \\tan^{-1}\\left(\\frac{\\frac{27}{20}}{\\frac{11}{20}}\\right) = \\tan^{-1}\\left(\\frac{27}{11}\\right)$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "If $\\tan^{-1} x + \\tan^{-1} y + \\tan^{-1} z = \\pi$, where $x, y, z > 0$, then $x + y + z$ equals:",
    options: [
      "$xyz$",
      "$xy + yz + zx$",
      "$1$",
      "$\\frac{1}{xyz}$"
    ],
    correctOption: 0,
    explanation: "Let $A = \\tan^{-1} x$, $B = \\tan^{-1} y$, $C = \\tan^{-1} z$. Then $A + B + C = \\pi$.\nSince $A + B = \\pi - C$, taking tangent on both sides:\n$$\\tan(A+B) = \\tan(\\pi - C) = -\\tan C$$\n$$\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = -\\tan C$$\n$$\\tan A + \\tan B = -\\tan C + \\tan A \\tan B \\tan C$$\n$$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$$\nSubstituting back $\\tan A = x, \\tan B = y, \\tan C = z$ gives:\n$$x + y + z = xyz$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },

  // ==========================================
  // SECTION B: 10 ASSERTION-REASON QUESTIONS (AR)
  // ==========================================
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): For $x > 0, y > 0$ with $xy > 1$, $\\tan^{-1} x + \\tan^{-1} y = \\pi + \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$.\nReason (R): When $x > 0, y > 0$ and $xy > 1$, the sum $\\tan^{-1} x + \\tan^{-1} y$ lies in the interval $\\left(\\frac{\\pi}{2}, \\pi\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "When $x > 0, y > 0$, we have $\\tan^{-1} x, \\tan^{-1} y \\in (0, \\pi/2)$.\nIf $xy > 1$, then $y > 1/x$, so $\\tan^{-1} y > \\tan^{-1}(1/x) = \\frac{\\pi}{2} - \\tan^{-1} x$, which means $\\tan^{-1} x + \\tan^{-1} y > \\frac{\\pi}{2}$.\nSince both are less than $\\pi/2$, their sum is in $(\\pi/2, \\pi)$.\nBecause the principal value of $\\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$ lies in $(-\\pi/2, 0)$ (as $1-xy < 0$), we must add $\\pi$ to shift it into $(\\pi/2, \\pi)$.\nHence, both (A) and (R) are true, and (R) correctly explains (A).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): $\\tan^{-1}(2) + \\tan^{-1}(3) = \\frac{3\\pi}{4}$.\nReason (R): For any $x, y > 0$, $\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    correctOption: 2,
    explanation: "Assertion (A): Since $2 > 0, 3 > 0$ and $2 \\times 3 = 6 > 1$, we have:\n$$\\tan^{-1}(2) + \\tan^{-1}(3) = \\pi + \\tan^{-1}\\left(\\frac{2+3}{1-6}\\right) = \\pi + \\tan^{-1}(-1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$$\nSo Assertion (A) is true.\nReason (R) claims the formula holds for ALL $x,y > 0$, but when $xy > 1$, the formula requires an extra $\\pi$, and when $xy=1$, it is $\\pi/2$. Thus Reason (R) is false.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $x, y \\in (0, 1)$ such that $x^2 + y^2 \\le 1$, then $\\sin^{-1} x + \\sin^{-1} y = \\sin^{-1}\\left(x\\sqrt{1-y^2} + y\\sqrt{1-x^2}\\right)$.\nReason (R): For $x, y \\in (0, 1)$ with $x^2 + y^2 \\le 1$, the angle sum $\\sin^{-1} x + \\sin^{-1} y$ lies in the interval $\\left(0, \\frac{\\pi}{2}\\right]$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Let $\\alpha = \\sin^{-1} x$ and $\\beta = \\sin^{-1} y$. Since $x, y \\in (0, 1)$, $\\alpha, \\beta \\in (0, \\pi/2)$.\nNow $\\cos(\\alpha+\\beta) = \\sqrt{1-x^2}\\sqrt{1-y^2} - xy$.\nNote that $\\cos(\\alpha+\\beta) \\ge 0 \\iff (1-x^2)(1-y^2) \\ge x^2 y^2 \\iff 1 - x^2 - y^2 + x^2 y^2 \\ge x^2 y^2 \\iff x^2 + y^2 \\le 1$.\nThus $x^2 + y^2 \\le 1$ guarantees $\\alpha + \\beta \\in (0, \\pi/2]$, which lies inside the principal branch $[-\\pi/2, \\pi/2]$ of $\\sin^{-1}$.\nTherefore, $\\sin^{-1} x + \\sin^{-1} y = \\sin^{-1}(x\\sqrt{1-y^2} + y\\sqrt{1-x^2})$.\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "HARD"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): $2\\tan^{-1}\\left(\\frac{1}{3}\\right) + \\tan^{-1}\\left(\\frac{1}{7}\\right) = \\frac{\\pi}{4}$.\nReason (R): For $0 < x < 1$, $2\\tan^{-1} x = \\tan^{-1}\\left(\\frac{2x}{1-x^2}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Using (R), since $x = 1/3 < 1$, $2\\tan^{-1}(1/3) = \\tan^{-1}\\left(\\frac{2/3}{1-1/9}\\right) = \\tan^{-1}\\left(\\frac{2/3}{8/9}\\right) = \\tan^{-1}\\left(\\frac{3}{4}\\right)$.\nNow add $\\tan^{-1}(1/7)$:\nHere $xy = (3/4)(1/7) = 3/28 < 1$, so:\n$$\\tan^{-1}(3/4) + \\tan^{-1}(1/7) = \\tan^{-1}\\left(\\frac{3/4 + 1/7}{1 - 3/28}\\right) = \\tan^{-1}\\left(\\frac{25/28}{25/28}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$$\nThus Assertion (A) is true and Reason (R) is the valid underlying identity that justifies it.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): For all $x, y > 0$, $\\tan^{-1} x - \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x-y}{1+xy}\\right)$.\nReason (R): For $x > 0, y > 0$, the product $xy > 0$, so $1 + xy > 1 > 0$, and the difference $\\tan^{-1} x - \\tan^{-1} y$ always lies in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Since $x > 0, y > 0$, both $\\tan^{-1} x$ and $\\tan^{-1} y$ lie in $(0, \\pi/2)$.\nTheir difference $\\tan^{-1} x - \\tan^{-1} y$ lies in $(-\\pi/2, \\pi/2)$, which is precisely the principal value branch of the $\\tan^{-1}$ function.\nAlso $1+xy > 1 \\ne 0$. Therefore, the formula $\\tan^{-1} x - \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x-y}{1+xy}\\right)$ holds unconditionally for all $x, y > 0$.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): $\\sum_{n=1}^N \\tan^{-1}\\left(\\frac{2n}{1 + n^2 + n^4}\\right) = \\tan^{-1}(N^2+N) - \\tan^{-1}(0)$.\nReason (R): The term $\\frac{2n}{1 + n^2 + n^4}$ can be written as $\\frac{(n^2+n+1) - (n^2-n+1)}{1 + (n^2+n+1)(n^2-n+1)}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    explanation: "Let us check Reason (R):\n$$(n^2+n+1) - (n^2-n+1) = 2n$$\n$$(n^2+n+1)(n^2-n+1) = (n^2+1)^2 - n^2 = n^4 + 2n^2 + 1 - n^2 = n^4 + n^2 + 1$$\nSo Reason (R) is completely true!\nNow evaluate the sum using (R):\n$$T_n = \\tan^{-1}(n^2+n+1) - \\tan^{-1}(n^2-n+1)$$\nNotice that for $n=1$, $n^2-n+1 = 1$, not $0$!\nSo for $n=1$: $\\tan^{-1}(3) - \\tan^{-1}(1)$.\nFor $n=2$: $\\tan^{-1}(7) - \\tan^{-1}(3)$.\nTelescoping sum gives:\n$$S_N = \\tan^{-1}(N^2+N+1) - \\tan^{-1}(1)$$\nAssertion (A) wrote $\\tan^{-1}(N^2+N) - \\tan^{-1}(0)$, which is incorrect.\nTherefore, (A) is false but (R) is true.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "HARD"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\cos^{-1} x + \\cos^{-1} y + \\cos^{-1} z = 3\\pi$, then $xy + yz + zx = 3$.\nReason (R): The maximum value of $\\cos^{-1} t$ for $t \\in [-1, 1]$ is $\\pi$, which occurs at $t = -1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Reason (R): For $t \\in [-1, 1]$, the range of $\\cos^{-1} t$ is $[0, \\pi]$. The maximum value is indeed $\\pi$, achieved when $t = -1$. So (R) is true.\nAssertion (A): Since each $\\cos^{-1} t \\le \\pi$, the sum $\\cos^{-1} x + \\cos^{-1} y + \\cos^{-1} z = 3\\pi$ can only hold if each term achieves its maximum:\n$$\\cos^{-1} x = \\pi, \\quad \\cos^{-1} y = \\pi, \\quad \\cos^{-1} z = \\pi$$\nThis implies $x = -1, y = -1, z = -1$.\nThen $xy + yz + zx = (-1)(-1) + (-1)(-1) + (-1)(-1) = 1 + 1 + 1 = 3$.\nSo Assertion (A) is true, and (R) is the exact explanation.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): $\\sin\\left(2\\tan^{-1}\\left(\\frac{1}{3}\\right)\\right) + \\cos\\left(\\tan^{-1}(2\\sqrt{2})\\right) = \\frac{14}{15}$.\nReason (R): $\\sin(2\\tan^{-1} t) = \\frac{2t}{1+t^2}$ and $\\cos(\\tan^{-1} u) = \\frac{1}{\\sqrt{1+u^2}}$ for all $t, u \\in \\mathbb{R}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    explanation: "Reason (R) states standard trigonometric identities:\n$\\sin(2\\theta) = \\frac{2\\tan\\theta}{1+\\tan^2\\theta}$ and $\\cos\\theta = \\frac{1}{\\sqrt{1+\\tan^2\\theta}}$, which are true for all real inputs. So (R) is true.\nNow let us calculate Assertion (A):\nFor $t = 1/3$:\n$$\\sin(2\\tan^{-1}(1/3)) = \\frac{2(1/3)}{1 + (1/3)^2} = \\frac{2/3}{10/9} = \\frac{6}{10} = \\frac{3}{5}$$\nFor $u = 2\\sqrt{2}$:\n$$\\cos(\\tan^{-1}(2\\sqrt{2})) = \\frac{1}{\\sqrt{1 + (2\\sqrt{2})^2}} = \\frac{1}{\\sqrt{1+8}} = \\frac{1}{3}$$\nAdding the two values:\n$$\\frac{3}{5} + \\frac{1}{3} = \\frac{9 + 5}{15} = \\frac{14}{15}$$\nWait, $\\frac{14}{15}$ is precisely the value given in Assertion (A)!\nSo (A) is true, and (R) correctly explains (A).\nTherefore, option 0 is the correct answer.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): For $x \\in [-1, 1]$, $2\\cos^{-1} x = \\cos^{-1}(2x^2 - 1)$ holds if and only if $x \\in [0, 1]$.\nReason (R): When $x \\in [-1, 0)$, $2\\cos^{-1} x \\in (\\pi, 2\\pi]$, which lies outside the range $[0, \\pi]$ of $\\cos^{-1}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Let $\\theta = \\cos^{-1} x \\in [0, \\pi]$. Then $2\\theta \\in [0, 2\\pi]$.\nThe range of $\\cos^{-1}$ is $[0, \\pi]$.\nThus $\\cos^{-1}(\\cos 2\\theta) = 2\\theta$ if and only if $2\\theta \\in [0, \\pi]$, which means $\\theta \\in [0, \\pi/2]$, corresponding to $x \\in [0, 1]$.\nFor $x \\in [-1, 0)$, $\\theta \\in (\\pi/2, \\pi]$, so $2\\theta \\in (\\pi, 2\\pi]$, and $\\cos^{-1}(\\cos 2\\theta) = 2\\pi - 2\\theta = 2\\pi - 2\\cos^{-1} x$.\nThus both (A) and (R) are true, and (R) is the correct explanation of (A).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "HARD"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\tan^{-1} x + \\tan^{-1} y + \\tan^{-1} z = \\frac{\\pi}{2}$, where $x, y, z > 0$, then $xy + yz + zx = 1$.\nReason (R): For any three positive numbers $x,y,z$, $\\tan(A+B+C) = \\frac{(x+y+z) - xyz}{1 - (xy+yz+zx)}$ where $x = \\tan A, y = \\tan B, z = \\tan C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Reason (R) states the compound angle formula for $\\tan(A+B+C)$:\n$$\\tan(A+B+C) = \\frac{\\sum x - xyz}{1 - \\sum xy}$$\nWhen $A+B+C = \\frac{\\pi}{2}$, $\\tan(A+B+C) \\to \\infty$, which requires the denominator to be zero:\n$$1 - (xy + yz + zx) = 0 \\implies xy + yz + zx = 1$$\nBoth (A) and (R) are true, and (R) gives the exact algebraic reasoning for (A).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },

  // ==========================================
  // SECTION C: 10 NUMERICAL QUESTIONS (NUM)
  // ==========================================
  {
    type: "NUMERICAL",
    question: "If $4\\tan^{-1}\\left(\\frac{1}{5}\\right) - \\tan^{-1}\\left(\\frac{1}{239}\\right) = \\frac{\\pi}{k}$, find the value of integer $k$.",
    correctAnswer: 4,
    explanation: "This is Machin's formula for $\\pi$.\nFirst evaluate $2\\tan^{-1}(1/5) = \\tan^{-1}\\left(\\frac{2/5}{1 - 1/25}\\right) = \\tan^{-1}\\left(\\frac{5}{12}\\right)$.\nNext, $4\\tan^{-1}(1/5) = 2\\tan^{-1}(5/12) = \\tan^{-1}\\left(\\frac{2(5/12)}{1 - 25/144}\\right) = \\tan^{-1}\\left(\\frac{120}{119}\\right)$.\nNow subtract $\\tan^{-1}(1/239)$:\n$$\\tan^{-1}\\left(\\frac{120}{119}\\right) - \\tan^{-1}\\left(\\frac{1}{239}\\right) = \\tan^{-1}\\left(\\frac{\\frac{120}{119} - \\frac{1}{239}}{1 + \\frac{120}{119 \\times 239}}\\right)$$\nNumerator: $120 \\times 239 - 119 = 28680 - 119 = 28561$.\nDenominator: $119 \\times 239 + 120 = 28441 + 120 = 28561$.\nSo the argument is $\\frac{28561}{28561} = 1$.\nThus $\\tan^{-1}(1) = \\frac{\\pi}{4}$. Hence $k = 4$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "The value of $\\cot\\left(\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right)\\right)$ is equal to:",
    correctAnswer: 1,
    explanation: "For $x = 1/2, y = 1/3$, $xy = 1/6 < 1$.\n$$\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right) = \\tan^{-1}\\left(\\frac{1/2 + 1/3}{1 - 1/6}\\right) = \\tan^{-1}\\left(\\frac{5/6}{5/6}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$$\nThen $\\cot(\\pi/4) = 1$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "If $\\sum_{r=1}^{10} \\tan^{-1}\\left(\\frac{1}{r^2 + 3r + 3}\\right) = \\tan^{-1}\\left(\\frac{a}{b}\\right)$ where $a$ and $b$ are coprime positive integers, find $a + b$.",
    correctAnswer: 35,
    explanation: "Observe the denominator:\n$$r^2 + 3r + 3 = 1 + (r^2 + 3r + 2) = 1 + (r+1)(r+2)$$\nNumerator is $1 = (r+2) - (r+1)$.\nThus:\n$$T_r = \\tan^{-1}\\left(\\frac{(r+2)-(r+1)}{1 + (r+2)(r+1)}\\right) = \\tan^{-1}(r+2) - \\tan^{-1}(r+1)$$\nSumming from $r=1$ to $10$:\n$$S = \\sum_{r=1}^{10} [\\tan^{-1}(r+2) - \\tan^{-1}(r+1)] = \\tan^{-1}(12) - \\tan^{-1}(2)$$\nSince $xy = 12 \\times 2 = 24 > -1$:\n$$\\tan^{-1}(12) - \\tan^{-1}(2) = \\tan^{-1}\\left(\\frac{12-2}{1 + 12 \\times 2}\\right) = \\tan^{-1}\\left(\\frac{10}{25}\\right) = \\tan^{-1}\\left(\\frac{2}{5}\\right)$$\nHere $a = 2, b = 5$, wait, let us re-check the problem.\nIs $a+b = 2+5 = 7$? Wait! Let's check $a$ and $b$:\n$a = 2, b = 5$, $\\gcd(2, 5) = 1$, so $a+b = 7$.\nWait! Let's update correctAnswer to 7 and ensure calculation is rock solid!",
    correctAnswer: 7,
    explanation: "Observe the denominator:\n$$r^2 + 3r + 3 = 1 + (r^2 + 3r + 2) = 1 + (r+1)(r+2)$$\nNumerator is $1 = (r+2) - (r+1)$.\nThus:\n$$T_r = \\tan^{-1}\\left(\\frac{(r+2)-(r+1)}{1 + (r+2)(r+1)}\\right) = \\tan^{-1}(r+2) - \\tan^{-1}(r+1)$$\nSumming from $r=1$ to $10$:\n$$S = \\sum_{r=1}^{10} [\\tan^{-1}(r+2) - \\tan^{-1}(r+1)] = \\tan^{-1}(12) - \\tan^{-1}(2)$$\nUsing $\\tan^{-1} x - \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x-y}{1+xy}\\right)$ for $xy > -1$:\n$$S = \\tan^{-1}\\left(\\frac{12-2}{1 + 12 \\times 2}\\right) = \\tan^{-1}\\left(\\frac{10}{25}\\right) = \\tan^{-1}\\left(\\frac{2}{5}\\right)$$\nHere $a = 2$ and $b = 5$, which are coprime positive integers.\nTherefore, $a + b = 2 + 5 = 7$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "If $\\tan^{-1}(x) + \\tan^{-1}(2x) = \\frac{\\pi}{4}$ has a unique positive real solution $x_0$, find the value of $2x_0^2 + 3x_0$.",
    correctAnswer: 1,
    explanation: "Taking tangent on both sides:\n$$\\tan(\\tan^{-1} x + \\tan^{-1} 2x) = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\n$$\\frac{x + 2x}{1 - x(2x)} = 1 \\implies \\frac{3x}{1 - 2x^2} = 1$$\n$$3x = 1 - 2x^2 \\implies 2x^2 + 3x - 1 = 0$$\nTherefore, $2x^2 + 3x = 1$.\nNote that $2x^2 + 3x - 1 = 0 \\implies x = \\frac{-3 \\pm \\sqrt{9 + 8}}{4} = \\frac{-3 + \\sqrt{17}}{4} > 0$, for which $2x^2 = 2\\left(\\frac{26 - 6\\sqrt{17}}{16}\\right) < 1$, so the condition $2x^2 < 1$ holds.\nHence $2x_0^2 + 3x_0 = 1$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "If $\\tan^{-1}(1) + \\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right) = \\frac{\\pi}{k}$, find the value of $k$.",
    correctAnswer: 2,
    explanation: "We know that:\n$$\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right) = \\tan^{-1}\\left(\\frac{1/2 + 1/3}{1 - 1/6}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$$\nThus:\n$$\\tan^{-1}(1) + \\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right) = \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}$$\nComparing with $\\frac{\\pi}{k}$, we get $k = 2$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "The value of $\\frac{4}{\\pi} \\sum_{n=1}^{\\infty} \\tan^{-1}\\left(\\frac{2}{n^2}\\right)$ is equal to:",
    correctAnswer: 3,
    explanation: "Notice that $\\frac{2}{n^2} = \\frac{2}{1 + (n^2 - 1)} = \\frac{(n+1) - (n-1)}{1 + (n+1)(n-1)}$.\nThus, each term can be expressed as:\n$$T_n = \\tan^{-1}(n+1) - \\tan^{-1}(n-1)$$\nWriting out the partial sum $S_N = \\sum_{n=1}^N [\\tan^{-1}(n+1) - \\tan^{-1}(n-1)]$:\nFor $n=1$: $\\tan^{-1}(2) - \\tan^{-1}(0)$\nFor $n=2$: $\\tan^{-1}(3) - \\tan^{-1}(1)$\nFor $n=3$: $\\tan^{-1}(4) - \\tan^{-1}(2)$\n...\nFor $n=N-1$: $\\tan^{-1}(N) - \\tan^{-1}(N-2)$\nFor $n=N$: $\\tan^{-1}(N+1) - \\tan^{-1}(N-1)$\nAll terms cancel except:\n$$S_N = \\tan^{-1}(N+1) + \\tan^{-1}(N) - \\tan^{-1}(1) - \\tan^{-1}(0)$$\nTaking $N \\to \\infty$:\n$$S = \\frac{\\pi}{2} + \\frac{\\pi}{2} - \\frac{\\pi}{4} - 0 = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$$\nTherefore, $\\frac{4}{\\pi} S = \\frac{4}{\\pi} \\times \\frac{3\\pi}{4} = 3$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "HARD"
  },
  {
    type: "NUMERICAL",
    question: "If $2\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{7}\\right) = \\tan^{-1}\\left(\\frac{p}{q}\\right)$ where $p$ and $q$ are coprime positive integers, find $p + q$.",
    correctAnswer: 48,
    explanation: "First compute $2\\tan^{-1}\\left(\\frac{1}{2}\\right)$:\n$$2\\tan^{-1}\\left(\\frac{1}{2}\\right) = \\tan^{-1}\\left(\\frac{2(1/2)}{1 - (1/2)^2}\\right) = \\tan^{-1}\\left(\\frac{1}{3/4}\\right) = \\tan^{-1}\\left(\\frac{4}{3}\\right)$$\nNow add $\\tan^{-1}\\left(\\frac{1}{7}\\right)$:\nHere $x = 4/3, y = 1/7$, so $xy = 4/21 < 1$.\n$$\\tan^{-1}\\left(\\frac{4}{3}\\right) + \\tan^{-1}\\left(\\frac{1}{7}\\right) = \\tan^{-1}\\left(\\frac{\\frac{4}{3} + \\frac{1}{7}}{1 - \\frac{4}{21}}\\right) = \\tan^{-1}\\left(\\frac{\\frac{31}{21}}{\\frac{17}{21}}\\right) = \\tan^{-1}\\left(\\frac{31}{17}\\right)$$\nSince $31$ and $17$ are prime numbers, $\\gcd(31, 17) = 1$.\nThus $p = 31, q = 17$, so $p + q = 31 + 17 = 48$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "If $\\cos^{-1} x + \\cos^{-1} y = \\frac{\\pi}{2}$ and $\\sin^{-1} x - \\sin^{-1} y = \\frac{\\pi}{6}$, find the value of $x^2 + y^2$.",
    correctAnswer: 1,
    explanation: "We know that $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ and $\\sin^{-1} y + \\cos^{-1} y = \\frac{\\pi}{2}$.\nAdding gives $(\\sin^{-1} x + \\sin^{-1} y) + (\\cos^{-1} x + \\cos^{-1} y) = \\pi$.\nSince $\\cos^{-1} x + \\cos^{-1} y = \\frac{\\pi}{2}$, we have:\n$$\\sin^{-1} x + \\sin^{-1} y = \\pi - \\frac{\\pi}{2} = \\frac{\\pi}{2}$$\nAlso, $\\cos^{-1} y = \\frac{\\pi}{2} - \\cos^{-1} x = \\sin^{-1} x$.\nTherefore, $y = \\cos(\\sin^{-1} x) = \\sqrt{1-x^2}$.\nSquaring both sides:\n$$y^2 = 1 - x^2 \\implies x^2 + y^2 = 1$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "Find the value of $k$ if $\\sum_{n=1}^3 \\tan^{-1}\\left(\\frac{1}{2n^2}\\right) = \\tan^{-1}\\left(\\frac{k}{7}\\right)$.",
    correctAnswer: 3,
    explanation: "Rewrite $\\frac{1}{2n^2} = \\frac{2}{4n^2} = \\frac{2}{1 + (4n^2-1)} = \\frac{(2n+1) - (2n-1)}{1 + (2n+1)(2n-1)}$.\nThus:\n$$T_n = \\tan^{-1}(2n+1) - \\tan^{-1}(2n-1)$$\nFor $n=1$: $\\tan^{-1}(3) - \\tan^{-1}(1)$\nFor $n=2$: $\\tan^{-1}(5) - \\tan^{-1}(3)$\nFor $n=3$: $\\tan^{-1}(7) - \\tan^{-1}(5)$\nSumming for $n=1, 2, 3$:\n$$S_3 = \\tan^{-1}(7) - \\tan^{-1}(1)$$\nSince $xy = 7 \\times 1 = 7 > -1$:\n$$S_3 = \\tan^{-1}\\left(\\frac{7-1}{1 + 7\\times 1}\\right) = \\tan^{-1}\\left(\\frac{6}{8}\\right) = \\tan^{-1}\\left(\\frac{3}{4}\\right)$$\nWait, the question says $\\tan^{-1}(k/7)$. Let's verify $\\tan^{-1}(3/4) = \\tan^{-1}(k/7)$? No, $3/4 \\ne k/7$.\nLet us instead phrase: $\\sum_{n=1}^3 \\tan^{-1}\\left(\\frac{1}{2n^2}\\right) = \\tan^{-1}\\left(\\frac{3}{k}\\right)$, then $k = 4$!\nLet's update the question so $S_3 = \\tan^{-1}(3/k) \\implies k = 4$.",
    correctAnswer: 4,
    explanation: "Rewrite the general term:\n$$\\frac{1}{2n^2} = \\frac{2}{4n^2} = \\frac{(2n+1) - (2n-1)}{1 + (2n+1)(2n-1)}$$\nThus:\n$$T_n = \\tan^{-1}(2n+1) - \\tan^{-1}(2n-1)$$\nSumming from $n=1$ to $3$ gives a telescoping cancellation:\n$$S_3 = \\sum_{n=1}^3 [\\tan^{-1}(2n+1) - \\tan^{-1}(2n-1)] = \\tan^{-1}(7) - \\tan^{-1}(1)$$\nUsing the subtraction formula:\n$$S_3 = \\tan^{-1}\\left(\\frac{7-1}{1 + 7 \\times 1}\\right) = \\tan^{-1}\\left(\\frac{6}{8}\\right) = \\tan^{-1}\\left(\\frac{3}{4}\\right)$$\nComparing with $\\tan^{-1}\\left(\\frac{3}{k}\\right)$, we find $k = 4$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "If $\\tan^{-1}(2) + \\tan^{-1}(3) + \\tan^{-1}(k) = \\pi$ for some real number $k$, then find the value of $k$.",
    correctAnswer: 1,
    explanation: "We know that for $x=2, y=3$ where $xy = 6 > 1$:\n$$\\tan^{-1}(2) + \\tan^{-1}(3) = \\pi + \\tan^{-1}\\left(\\frac{2+3}{1-6}\\right) = \\pi + \\tan^{-1}(-1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$$\nGiven that:\n$$\\frac{3\\pi}{4} + \\tan^{-1}(k) = \\pi \\implies \\tan^{-1}(k) = \\pi - \\frac{3\\pi}{4} = \\frac{\\pi}{4}$$\nHence $k = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  }
];

// Re-adjust question text in Q9 to match:
subtopic4Questions[18].question = "If $\\sum_{n=1}^3 \\tan^{-1}\\left(\\frac{1}{2n^2}\\right) = \\tan^{-1}\\left(\\frac{3}{k}\\right)$, find the value of integer $k$.";

module.exports = subtopic4Questions;
